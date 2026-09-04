// Cadence and sharding are pure so a thousand-name registry can be scheduled without first touching
// a network. Time thresholds mirror a six-hour cron while remaining correct after a delayed run.

export const TIER_INTERVAL_MS = Object.freeze({
  hot: 0,
  live: 12 * 60 * 60 * 1000,
  quiet: 24 * 60 * 60 * 1000,
  dormant: 7 * 24 * 60 * 60 * 1000,
});

export const TIER_DAILY_READS = Object.freeze({ hot: 4, live: 2, quiet: 1, dormant: 1 / 7 });

const time = (value) => {
  const parsed = Date.parse(value ?? "");
  return Number.isFinite(parsed) ? parsed : null;
};

export function queueIsFresh(at, now = Date.now()) {
  const queuedAt = time(at);
  return queuedAt !== null && now >= queuedAt && now - queuedAt <= 24 * 60 * 60 * 1000;
}

export function tierFor({ aboveShareBar = false, queuedAt = null, lastActivityAt = null, now = Date.now() } = {}) {
  if (aboveShareBar || queueIsFresh(queuedAt, now)) return "hot";
  const activityAt = time(lastActivityAt);
  if (activityAt === null) return "dormant";
  const age = Math.max(0, now - activityAt);
  if (age <= 7 * 24 * 60 * 60 * 1000) return "live";
  if (age <= 30 * 24 * 60 * 60 * 1000) return "quiet";
  return "dormant";
}

export function tierIsDue(tier, lastSnapshotAt, { now = Date.now(), force = false } = {}) {
  if (force || tier === "hot") return true;
  const prior = time(lastSnapshotAt);
  if (prior === null) return true;
  return now - prior >= (TIER_INTERVAL_MS[tier] ?? TIER_INTERVAL_MS.dormant);
}

/** FNV-1a gives a stable, dependency-free split that does not move when the registry grows. */
export function shardFor(slug, total = 2) {
  let hash = 0x811c9dc5;
  for (const byte of new TextEncoder().encode(String(slug))) {
    hash ^= byte;
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash % total;
}

export function parseShard(value) {
  if (value == null || value === "") return null;
  const match = /^(\d+)\/(\d+)$/.exec(String(value));
  if (!match) throw new Error("--shard must be INDEX/TOTAL, for example 0/2");
  const index = Number(match[1]);
  const total = Number(match[2]);
  if (!Number.isInteger(index) || !Number.isInteger(total) || total < 1 || index < 0 || index >= total || total > 2) {
    throw new Error("--shard supports one or two stable shards with 0 <= INDEX < TOTAL");
  }
  return { index, total };
}

export function projectDailyCredits(tierCounts = {}, creditsPerName = 10) {
  return Object.entries(TIER_DAILY_READS).reduce(
    (sum, [tier, reads]) => sum + (Number(tierCounts[tier]) || 0) * reads * creditsPerName,
    0,
  );
}

export function consumeQueue(entries = [], completedSlugs = []) {
  const completed = new Set(completedSlugs);
  return entries.filter((entry) => !completed.has(entry?.slug));
}

/** Decide whether expensive explorer facts can have changed using a one-credit signal. */
export function explorerChangeDecision({
  role,
  full = false,
  previous = null,
  priorSignal = null,
  currentSignal = null,
} = {}) {
  if (full) return { changed: true, reason: "--full override" };
  if (!previous) return { changed: true, reason: "first explorer read" };
  if (!Number.isInteger(currentSignal)) return { changed: true, reason: `${role ?? "address"} signal unavailable` };
  if (!Number.isInteger(priorSignal)) return { changed: true, reason: `${role ?? "address"} baseline unavailable` };
  if (currentSignal !== priorSignal) return { changed: true, reason: `${role ?? "address"} signal changed` };
  return { changed: false, reason: `${role ?? "address"} signal unchanged` };
}
