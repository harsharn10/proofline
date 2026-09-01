import fs from "node:fs";
import path from "node:path";
import { timingSafeEqual } from "node:crypto";
import YAML from "yaml";
import { createServerFn } from "@tanstack/react-start";
import type { ChangelogEntry } from "./types";

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
  configured: boolean;
  repository: string;
  lastSentAt: string | null;
  counts: Record<ReviewStatus, number>;
  items: ReviewQueueItem[];
};

type ModerateRequest = {
  controllerToken: string;
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

function loadQueue(): ReviewQueue {
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
    configured: Boolean(process.env.REVIEW_ADMIN_TOKEN && process.env.REVIEW_GITHUB_TOKEN),
    repository: process.env.REVIEW_GITHUB_REPO ?? "harsharn10/proofline",
    lastSentAt: sentState.last_sent_at ?? null,
    counts,
    items,
  };
}

function validateModeration(input: unknown): ModerateRequest {
  if (!input || typeof input !== "object") throw new Error("Invalid moderation request.");
  const value = input as Partial<ModerateRequest>;
  if (typeof value.controllerToken !== "string" || value.controllerToken.length > 500) {
    throw new Error("Controller key is required.");
  }
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

function authorized(provided: string): boolean {
  const expected = process.env.REVIEW_ADMIN_TOKEN;
  if (!expected) return false;
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function githubHeaders(token: string): Record<string, string> {
  return {
    accept: "application/vnd.github+json",
    authorization: `Bearer ${token}`,
    "x-github-api-version": "2022-11-28",
    "user-agent": "proofline-review-controller",
  };
}

async function githubJson<T>(url: string, token: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: { ...githubHeaders(token), ...(init?.headers ?? {}) },
  });
  if (!response.ok) {
    const detail = (await response.text()).slice(0, 300);
    throw new Error(`GitHub rejected the moderation update (${response.status}): ${detail}`);
  }
  return (await response.json()) as T;
}

function decodeContent(file: GitHubContent): string {
  if (file.encoding !== "base64") throw new Error("Unexpected GitHub content encoding.");
  return Buffer.from(file.content.replace(/\n/g, ""), "base64").toString("utf8");
}

export const getReviewQueue = createServerFn({ method: "GET" }).handler(
  async (): Promise<ReviewQueue> => loadQueue(),
);

export const moderateTelegram = createServerFn({ method: "POST" })
  .validator(validateModeration)
  .handler(async ({ data }): Promise<{ ok: true; commit: string; message: string }> => {
    if (!authorized(data.controllerToken)) throw new Error("Controller key was not accepted.");

    const githubToken = process.env.REVIEW_GITHUB_TOKEN;
    if (!githubToken) throw new Error("Review controls are not configured on this deployment.");
    const repository = process.env.REVIEW_GITHUB_REPO ?? "harsharn10/proofline";
    const branch = process.env.REVIEW_GITHUB_BRANCH ?? "main";
    const api = `https://api.github.com/repos/${repository}/contents`;
    const [reviewFile, changelogFile, user] = await Promise.all([
      githubJson<GitHubContent>(
        `${api}/${REVIEW_PATH}?ref=${encodeURIComponent(branch)}`,
        githubToken,
      ),
      githubJson<GitHubContent>(
        `${api}/${CHANGELOG_PATH}?ref=${encodeURIComponent(branch)}`,
        githubToken,
      ),
      githubJson<{ login: string }>("https://api.github.com/user", githubToken),
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
          reviewer: user.login,
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
      branch,
    };
    const saved = await githubJson<{ commit: { sha: string } }>(
      `${api}/${REVIEW_PATH}`,
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
