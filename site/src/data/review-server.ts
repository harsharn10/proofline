import { createHash } from "node:crypto";
import YAML from "yaml";
import { createServerFn } from "@tanstack/react-start";
import rawContent from "virtual:proofline-content";
import type {
  ChannelDelivery,
  ChannelEvent,
  ChannelPublication,
  ChangelogEntry,
} from "./types";
import {
  REVIEW_BRANCH,
  REVIEW_REPOSITORY,
  githubJson,
  reviewFunctionProtection,
  type ReviewPrincipal,
} from "./review-auth";

export type ReviewStatus =
  | "pending"
  | "approved"
  | "roundup"
  | "held"
  | "site-only"
  | "sent";

type ReviewDecision = {
  status: Exclude<ReviewStatus, "pending" | "sent">;
  reviewed_at: string;
  reviewer: string;
  source_fingerprint: string;
  copy_fingerprint: string;
  copy: ChannelPublication;
};

type ReviewLedger = {
  version: 2;
  channel_enabled: boolean;
  decisions: Record<string, ReviewDecision>;
};

type SentState = { sent_keys?: string[]; last_sent_at?: string };

export type ReviewQueueItem = {
  key: string;
  status: ReviewStatus;
  entry: ChangelogEntry;
  projectName: string;
  channelCopy: ChannelPublication;
  prooflineView: string;
  approvalInvalidated: boolean;
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
  action: "publish" | "roundup" | "site-only" | "hold" | "reset" | "set-channel";
  channelEnabled?: boolean;
  items?: Array<{ key: string; copy?: ChannelPublication }>;
};

type GitHubContent = { sha: string; content: string; encoding: string };

const REVIEW_PATH = "ops/telegram-review.json";
const CHANGELOG_DIR = "content/changelog"; // one file per slug since the stable-id migration (#39)
const SENT_STATE_PATH = "ops/telegram-state.json";

function entryKey(entry: ChangelogEntry): string {
  return `${entry.date}|${entry.slug}|${entry.type}|${entry.title}`;
}

function isChannelCandidate(entry: ChangelogEntry): boolean {
  return entry.channel !== undefined;
}

function publicationFingerprint(publication: ChannelPublication): string {
  return createHash("sha256").update(JSON.stringify(publication)).digest("hex");
}

function decisionIsCurrent(entry: ChangelogEntry, decision: ReviewDecision | undefined): boolean {
  return Boolean(
    entry.channel &&
      decision?.copy &&
      decision.source_fingerprint === publicationFingerprint(entry.channel) &&
      decision.copy_fingerprint === publicationFingerprint(decision.copy),
  );
}

function prooflineView(derived: {
  score?: number | null;
  risk?: string | null;
  confidence?: number | null;
  provisional?: boolean;
} | undefined): string {
  if (derived?.score === null || derived?.score === undefined) {
    return "Research pending / insufficient evidence";
  }
  return `${derived.score}/100 · ${derived.risk} risk\n${derived.confidence}% confidence${derived.provisional ? " · Provisional" : ""}`;
}

// The changelog is one file per slug (content/changelog/<slug>.yaml since #39): list the directory,
// then fetch every file. Entries come back in directory order; callers key them, never index them.
async function fetchChangelog(api: string, token: string): Promise<ChangelogEntry[]> {
  const dir = await githubJson<Array<{ name: string; path: string; type: string }>>(
    `${api}/contents/${CHANGELOG_DIR}?ref=${encodeURIComponent(REVIEW_BRANCH)}`,
    token,
  );
  const files = await Promise.all(
    dir
      .filter((f) => f.type === "file" && f.name.endsWith(".yaml"))
      .map((f) => githubJson<GitHubContent>(`${api}/contents/${f.path}?ref=${encodeURIComponent(REVIEW_BRANCH)}`, token)),
  );
  return files.flatMap((file) => (YAML.parse(decodeContent(file)) as ChangelogEntry[] | null) ?? []);
}

async function loadQueue(principal: ReviewPrincipal): Promise<ReviewQueue> {
  const api = `https://api.github.com/repos/${REVIEW_REPOSITORY}`;
  const contentUrl = (file: string) =>
    `${api}/contents/${file}?ref=${encodeURIComponent(REVIEW_BRANCH)}`;
  const [changelog, reviewFile, sentStateFile] = await Promise.all([
    fetchChangelog(api, principal.githubToken),
    githubJson<GitHubContent>(contentUrl(REVIEW_PATH), principal.githubToken),
    githubJson<GitHubContent>(contentUrl(SENT_STATE_PATH), principal.githubToken),
  ]);
  const ledger = JSON.parse(decodeContent(reviewFile)) as ReviewLedger;
  const sentState = JSON.parse(decodeContent(sentStateFile)) as SentState;
  const sent = new Set(sentState.sent_keys ?? []);
  const derived = JSON.parse(rawContent.derived) as {
    projects?: Record<
      string,
      { score?: number | null; risk?: string | null; confidence?: number | null; provisional?: boolean }
    >;
  };

  const census = YAML.parse(rawContent.census) as Array<{ slug: string; name: string }>;
  const names = new Map(census.map((entry) => [entry.slug, entry.name]));

  const items = changelog
    .filter(isChannelCandidate)
    .map((entry): ReviewQueueItem => {
      const key = entryKey(entry);
      const decision = ledger.decisions[key];
      const decisionCurrent = decisionIsCurrent(entry, decision);
      const status: ReviewStatus = sent.has(key)
        ? "sent"
        : decisionCurrent
          ? decision.status
          : "pending";
      return {
        key,
        status,
        entry,
        projectName: names.get(entry.slug) ?? entry.slug,
        channelCopy: decisionCurrent ? decision.copy : entry.channel!,
        prooflineView: prooflineView(derived.projects?.[entry.slug]),
        approvalInvalidated: Boolean(decision && !decisionCurrent && !sent.has(key)),
        reviewer: decision?.reviewer ?? null,
        reviewedAt: decision?.reviewed_at ?? null,
      };
    })
    .sort(
      (a, b) =>
        b.entry.date.localeCompare(a.entry.date) || a.projectName.localeCompare(b.projectName),
    );

  const counts: Record<ReviewStatus, number> = {
    pending: 0,
    approved: 0,
    roundup: 0,
    held: 0,
    "site-only": 0,
    sent: 0,
  };
  for (const item of items) counts[item.status]++;

  return {
    channelEnabled: ledger.channel_enabled === true,
    repository: REVIEW_REPOSITORY,
    viewer: principal.login,
    lastSentAt: sentState.last_sent_at ?? null,
    counts,
    items,
  };
}

function validateModeration(input: unknown): ModerateRequest {
  if (!input || typeof input !== "object") throw new Error("Invalid moderation request.");
  const value = input as Partial<ModerateRequest>;
  if (
    !value.action ||
    !["publish", "roundup", "site-only", "hold", "reset", "set-channel"].includes(
      value.action,
    )
  ) {
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
    if (value.action === "reset") continue;
    validatePublication(item.copy);
  }
  return value as ModerateRequest;
}

const CHANNEL_EVENTS = new Set<ChannelEvent>([
  "new-coverage",
  "research-update",
  "risk-alert",
  "correction",
  "breaking",
  "trending",
  "roundup",
]);
const CHANNEL_DELIVERIES = new Set<ChannelDelivery>(["immediate", "same-day", "roundup"]);

function validatePublication(copy: ChannelPublication | undefined): asserts copy is ChannelPublication {
  if (!copy || typeof copy !== "object") throw new Error("Complete channel copy is required.");
  if (!CHANNEL_EVENTS.has(copy.event)) throw new Error("Select a valid channel event.");
  if (!CHANNEL_DELIVERIES.has(copy.delivery)) throw new Error("Select a valid delivery lane.");
  if (typeof copy.headline !== "string" || !copy.headline.trim() || copy.headline.length > 180) {
    throw new Error("Channel headlines must be between 1 and 180 characters.");
  }
  if (typeof copy.summary !== "string" || !copy.summary.trim() || copy.summary.length > 1200) {
    throw new Error("Channel summaries must be between 1 and 1,200 characters.");
  }
  if (
    copy.why_it_matters !== undefined &&
    (!Array.isArray(copy.why_it_matters) ||
      copy.why_it_matters.length < 1 ||
      copy.why_it_matters.length > 2 ||
      new Set(copy.why_it_matters.map((line) => line.trim())).size !==
        copy.why_it_matters.length ||
      copy.why_it_matters.some(
        (line) => typeof line !== "string" || !line.trim() || line.length > 400,
      ))
  ) {
    throw new Error("Why it matters must contain one or two lines of at most 400 characters.");
  }
  if (
    copy.watch_next !== undefined &&
    (typeof copy.watch_next !== "string" || !copy.watch_next.trim() || copy.watch_next.length > 500)
  ) {
    throw new Error("What we’re watching must be at most 500 characters.");
  }
}

function normalizePublication(copy: ChannelPublication): ChannelPublication {
  return {
    event: copy.event,
    delivery: copy.delivery,
    headline: copy.headline.trim(),
    summary: copy.summary.trim(),
    ...(copy.why_it_matters?.length
      ? { why_it_matters: copy.why_it_matters.map((line) => line.trim()) }
      : {}),
    ...(copy.watch_next?.trim() ? { watch_next: copy.watch_next.trim() } : {}),
  };
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
  .handler(async ({ context }): Promise<ReviewQueue> => loadQueue(requirePrincipal(context)));

export const moderateTelegram = createServerFn({ method: "POST" })
  .middleware([reviewFunctionProtection])
  .validator(validateModeration)
  .handler(async ({ data, context }): Promise<{ ok: true; commit: string; message: string }> => {
    const { githubToken, login } = requirePrincipal(context);
    const api = `https://api.github.com/repos/${REVIEW_REPOSITORY}`;
    const [reviewFile, currentEntries] = await Promise.all([
      githubJson<GitHubContent>(
        `${api}/contents/${REVIEW_PATH}?ref=${encodeURIComponent(REVIEW_BRANCH)}`,
        githubToken,
      ),
      fetchChangelog(api, githubToken),
    ]);

    const ledger = JSON.parse(decodeContent(reviewFile)) as ReviewLedger;
    ledger.version = 2;
    ledger.decisions ??= {};
    const currentByKey = new Map(
      currentEntries.filter(isChannelCandidate).map((entry) => [entryKey(entry), entry]),
    );
    const reviewedAt = new Date().toISOString();

    if (data.action === "set-channel") {
      ledger.channel_enabled = data.channelEnabled === true;
    } else {
      for (const item of data.items ?? []) {
        const currentEntry = currentByKey.get(item.key);
        if (!currentEntry?.channel) throw new Error(`Update is no longer current: ${item.key}`);
        if (data.action === "reset") {
          delete ledger.decisions[item.key];
          continue;
        }
        validatePublication(item.copy);
        const copy = normalizePublication({
          ...item.copy,
          ...(data.action === "roundup" ? { delivery: "roundup" as const } : {}),
        });
        const decisionStatus: ReviewDecision["status"] =
          data.action === "publish"
            ? "approved"
            : data.action === "roundup"
              ? "roundup"
              : data.action === "site-only"
                ? "site-only"
                : "held";
        ledger.decisions[item.key] = {
          status: decisionStatus,
          reviewed_at: reviewedAt,
          reviewer: login,
          source_fingerprint: publicationFingerprint(currentEntry.channel),
          copy_fingerprint: publicationFingerprint(copy),
          copy,
        };
      }
    }

    const body = {
      message:
        data.action === "set-channel"
          ? `ops: ${ledger.channel_enabled ? "resume" : "pause"} Telegram delivery`
          : `ops: ${data.action} ${data.items?.length ?? 0} channel update(s)`,
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
