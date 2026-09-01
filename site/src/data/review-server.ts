import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { createServerFn } from "@tanstack/react-start";
import type { ChangelogEntry } from "./types";
import {
  REVIEW_BRANCH,
  REVIEW_REPOSITORY,
  githubJson,
  reviewFunctionProtection,
  type ReviewPrincipal,
} from "./review-auth";

export type ReviewStatus = "pending" | "approved" | "rejected" | "sent";

type ReviewDecision = {
  status: "approved" | "rejected";
  reviewed_at: string;
  reviewer: string;
  title?: string;
  detail?: string;
};

type ReviewLedger = {
  version: 1;
  channel_enabled: boolean;
  decisions: Record<string, ReviewDecision>;
};

type SentState = { sent_keys?: string[]; last_sent_at?: string };

export type ReviewQueueItem = {
  key: string;
  status: ReviewStatus;
  entry: ChangelogEntry;
  projectName: string;
  channelTitle: string;
  channelDetail: string;
  reviewer: string | null;
  reviewedAt: string | null;
};

export type ReviewQueue = {
  channelEnabled: boolean;
  repository: string;
  viewer: string;
  lastSentAt: string | null;
  counts: Record<ReviewStatus, number>;
  items: ReviewQueueItem[];
};

type ModerateRequest = {
  action: "approve" | "reject" | "reset" | "set-channel";
  channelEnabled?: boolean;
  items?: Array<{ key: string; title?: string; detail?: string }>;
};

type GitHubContent = { sha: string; content: string; encoding: string };

const REVIEW_PATH = "ops/telegram-review.json";
const CHANGELOG_PATH = "content/changelog.yaml";

function repoRoot(): string {
  const cwd = process.cwd();
  return cwd.endsWith(`${path.sep}site`) ? path.resolve(cwd, "..") : cwd;
}

function entryKey(entry: ChangelogEntry): string {
  return `${entry.date}|${entry.slug}|${entry.type}|${entry.title}`;
}

function readJson<T>(file: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function loadQueue(viewer: string): ReviewQueue {
  const root = repoRoot();
  const changelog = YAML.parse(
    fs.readFileSync(path.join(root, CHANGELOG_PATH), "utf8"),
  ) as ChangelogEntry[];
  const ledger = readJson<ReviewLedger>(path.join(root, REVIEW_PATH), {
    version: 1,
    channel_enabled: false,
    decisions: {},
  });
  const sentState = readJson<SentState>(path.join(root, "ops/telegram-state.json"), {
    sent_keys: [],
  });
  const sent = new Set(sentState.sent_keys ?? []);

  const names = new Map<string, string>();
  const projectDir = path.join(root, "content", "projects");
  for (const file of fs.readdirSync(projectDir).filter((name) => name.endsWith(".yaml"))) {
    const project = YAML.parse(fs.readFileSync(path.join(projectDir, file), "utf8")) as {
      slug: string;
      name: string;
    };
    names.set(project.slug, project.name);
  }

  const items = changelog
    .map((entry): ReviewQueueItem => {
      const key = entryKey(entry);
      const decision = ledger.decisions[key];
      const status: ReviewStatus = sent.has(key) ? "sent" : (decision?.status ?? "pending");
      return {
        key,
        status,
        entry,
        projectName: names.get(entry.slug) ?? entry.slug,
        channelTitle: decision?.title?.trim() || entry.title,
        channelDetail: decision?.detail?.trim() || entry.detail,
        reviewer: decision?.reviewer ?? null,
        reviewedAt: decision?.reviewed_at ?? null,
      };
    })
    .sort(
      (a, b) =>
        b.entry.date.localeCompare(a.entry.date) || a.projectName.localeCompare(b.projectName),
    );

  const counts: Record<ReviewStatus, number> = { pending: 0, approved: 0, rejected: 0, sent: 0 };
  for (const item of items) counts[item.status]++;

  return {
    channelEnabled: ledger.channel_enabled === true,
    repository: REVIEW_REPOSITORY,
    viewer,
    lastSentAt: sentState.last_sent_at ?? null,
    counts,
    items,
  };
}

function validateModeration(input: unknown): ModerateRequest {
  if (!input || typeof input !== "object") throw new Error("Invalid moderation request.");
  const value = input as Partial<ModerateRequest>;
  if (!value.action || !["approve", "reject", "reset", "set-channel"].includes(value.action)) {
    throw new Error("Unknown moderation action.");
  }
  if (value.action === "set-channel") {
    if (typeof value.channelEnabled !== "boolean") throw new Error("Channel state is required.");
    return value as ModerateRequest;
  }
  if (!Array.isArray(value.items) || value.items.length < 1 || value.items.length > 100) {
    throw new Error("Select between 1 and 100 updates.");
  }
  for (const item of value.items) {
    if (!item || typeof item.key !== "string" || item.key.length > 500)
      throw new Error("Invalid update key.");
    if (
      item.title !== undefined &&
      (typeof item.title !== "string" || item.title.trim().length < 1 || item.title.length > 180)
    ) {
      throw new Error("Channel titles must be between 1 and 180 characters.");
    }
    if (
      item.detail !== undefined &&
      (typeof item.detail !== "string" ||
        item.detail.trim().length < 1 ||
        item.detail.length > 2400)
    ) {
      throw new Error("Channel details must be between 1 and 2,400 characters.");
    }
  }
  return value as ModerateRequest;
}

function decodeContent(file: GitHubContent): string {
  if (file.encoding !== "base64") throw new Error("Unexpected GitHub content encoding.");
  return Buffer.from(file.content.replace(/\n/g, ""), "base64").toString("utf8");
}

function requirePrincipal(
  context: { reviewPrincipal?: ReviewPrincipal } | undefined,
): ReviewPrincipal {
  if (!context?.reviewPrincipal) throw new Error("Review authentication is required.");
  return context.reviewPrincipal;
}

export const getReviewQueue = createServerFn({ method: "GET" })
  .middleware([reviewFunctionProtection])
  .handler(async ({ context }): Promise<ReviewQueue> => loadQueue(requirePrincipal(context).login));

export const moderateTelegram = createServerFn({ method: "POST" })
  .middleware([reviewFunctionProtection])
  .validator(validateModeration)
  .handler(async ({ data, context }): Promise<{ ok: true; commit: string; message: string }> => {
    const { githubToken, login } = requirePrincipal(context);
    const api = `https://api.github.com/repos/${REVIEW_REPOSITORY}`;
    const [reviewFile, changelogFile] = await Promise.all([
      githubJson<GitHubContent>(
        `${api}/contents/${REVIEW_PATH}?ref=${encodeURIComponent(REVIEW_BRANCH)}`,
        githubToken,
      ),
      githubJson<GitHubContent>(
        `${api}/contents/${CHANGELOG_PATH}?ref=${encodeURIComponent(REVIEW_BRANCH)}`,
        githubToken,
      ),
    ]);

    const ledger = JSON.parse(decodeContent(reviewFile)) as ReviewLedger;
    ledger.version = 1;
    ledger.decisions ??= {};
    const currentEntries = YAML.parse(decodeContent(changelogFile)) as ChangelogEntry[];
    const currentKeys = new Set(currentEntries.map(entryKey));
    const reviewedAt = new Date().toISOString();

    if (data.action === "set-channel") {
      ledger.channel_enabled = data.channelEnabled === true;
    } else {
      for (const item of data.items ?? []) {
        if (!currentKeys.has(item.key)) throw new Error(`Update is no longer current: ${item.key}`);
        if (data.action === "reset") {
          delete ledger.decisions[item.key];
          continue;
        }
        ledger.decisions[item.key] = {
          status: data.action === "approve" ? "approved" : "rejected",
          reviewed_at: reviewedAt,
          reviewer: login,
          ...(data.action === "approve" && item.title ? { title: item.title.trim() } : {}),
          ...(data.action === "approve" && item.detail ? { detail: item.detail.trim() } : {}),
        };
      }
    }

    const body = {
      message:
        data.action === "set-channel"
          ? `ops: ${ledger.channel_enabled ? "resume" : "pause"} Telegram delivery`
          : `ops: ${data.action} ${data.items?.length ?? 0} Telegram update(s)`,
      content: Buffer.from(`${JSON.stringify(ledger, null, 2)}\n`).toString("base64"),
      sha: reviewFile.sha,
      branch: REVIEW_BRANCH,
    };
    const saved = await githubJson<{ commit: { sha: string } }>(
      `${api}/contents/${REVIEW_PATH}`,
      githubToken,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      },
    );

    return {
      ok: true,
      commit: saved.commit.sha,
      message:
        data.action === "set-channel"
          ? "Channel setting saved."
          : `${data.items?.length ?? 0} update(s) saved.`,
    };
  });
