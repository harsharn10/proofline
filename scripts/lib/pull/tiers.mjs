// Cadence, sharding and the change signal are pure so a thousand-name registry can be scheduled
// without first touching a network. Cadence comes from the canonical refresh policy.
import { REFRESH_POLICY, DAY } from "../refresh-policy.mjs";

export const CRON_PERIOD_MS = DAY;

export const TIER_INTERVAL_MS = Object.freeze({
  hot: REFRESH_POLICY.hot,
  live: REFRESH_POLICY.live,
  quiet: REFRESH_POLICY.quiet,
  dormant: REFRESH_POLICY.dormant,
});

/**
 * Small scheduler jitter must not turn a daily refresh into every other day.
 */
export const DUE_TOLERANCE_MS = 2 * 60 * 60 * 1000;

export const TIER_DAILY_READS = Object.freeze(Object.fromEntries(
  Object.entries(TIER_INTERVAL_MS).map(([tier, interval]) => [tier, DAY / interval]),
));

/**
 * Measured credits per due name, by tier, from the 2026-09-04 budgeted run (see
 * docs/integrations/pull.md). These are observations, not allowances: the projection below is only
 * as honest as the run these came from, so they are replaced whenever a run measures new ones.
 */
// Historical values counted requests, not provider credits. No fabricated scaling baseline.
export const MEASURED_CREDITS_PER_NAME = Object.freeze({});

/**
 * Roles whose explorer signal is worth a credit every due run. A token, a factory, a curve, a
 * router, a vault or a multisig is where the facts we publish actually move. An admin, a proxy
 * admin, an implementation or an unclassified "other" row is a static contract whose holder count,
 * ABI and creation block have not changed since it was deployed, so it is signalled only when it was
 * itself active in the last seven days.
 */
export const SIGNAL_ROLES = new Set(["token", "factory", "curve", "router", "vault", "multisig"]);
export const QUIET_ROLE_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

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

export function tierIsDue(tier, lastSnapshotAt, { now = Date.now(), force = false, tolerance = DUE_TOLERANCE_MS } = {}) {
  if (force) return true;
  const prior = time(lastSnapshotAt);
  if (prior === null) return true;
  const interval = TIER_INTERVAL_MS[tier] ?? TIER_INTERVAL_MS.dormant;
  return now - prior >= Math.max(0, interval - tolerance);
}

/**
 * Whether this address is worth a one-credit explorer signal on this run. A first read and a `--full`
 * run always are. Otherwise the role decides, and a role that normally is not still is when the
 * address transacted inside the last week — a proxy admin that just rotated an implementation is
 * exactly the row a reader wants refreshed.
 */
export function needsExplorerSignal({
  role,
  full = false,
  first = false,
  lastTxAt = null,
  now = Date.now(),
  window = QUIET_ROLE_WINDOW_MS,
} = {}) {
  if (full || first) return { signal: true, reason: full ? "--full override" : "first explorer read" };
  if (SIGNAL_ROLES.has(String(role ?? "").toLowerCase())) return { signal: true, reason: `${role} role is read every due run` };
  const at = time(lastTxAt);
  if (at !== null && now - at <= window) return { signal: true, reason: `${role ?? "address"} transacted in the last 7 days` };
  return { signal: false, reason: `${role ?? "address"} role is static and quiet for 7 days; signal skipped` };
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

/**
 * Credits per UTC day for a tier population, using one measured cost per tier rather than one
 * allowance for every name. A hot name is read daily and costs more per read than a
 * dormant one, so a single average hides both facts.
 */
export function projectDailyCredits(tierCounts = {}, costs = MEASURED_CREDITS_PER_NAME) {
  const perName = typeof costs === "number"
    ? Object.fromEntries(Object.keys(TIER_DAILY_READS).map((tier) => [tier, costs]))
    : { ...MEASURED_CREDITS_PER_NAME, ...costs };
  if (Object.entries(tierCounts).some(([tier, count]) => count > 0 && !Number.isFinite(perName[tier]))) return null;
  return Object.entries(TIER_DAILY_READS).reduce(
    (sum, [tier, reads]) => sum + (Number(tierCounts[tier]) || 0) * reads * (Number(perName[tier]) || 0),
    0,
  );
}

/** The same population scaled to `names` while holding the observed tier mix constant. */
export function scaleTierMix(tierCounts = {}, names) {
  const total = Object.values(tierCounts).reduce((sum, count) => sum + (Number(count) || 0), 0);
  if (!total) return { ...tierCounts };
  return Object.fromEntries(
    Object.entries(tierCounts).map(([tier, count]) => [tier, ((Number(count) || 0) / total) * names]),
  );
}

export function consumeQueue(entries = [], completedSlugs = [], { now = Date.now(), maxAgeMs = 7 * 24 * 60 * 60 * 1000 } = {}) {
  const completed = new Set(completedSlugs);
  // A name that is never due — or that a cancelled run never reached — would otherwise sit in the
  // queue for ever and keep forcing itself hot. An entry older than a week has had its chance.
  return entries.filter((entry) => {
    if (completed.has(entry?.slug)) return false;
    const at = time(entry?.at);
    return at === null || now - at <= maxAgeMs;
  });
}

const signalText = (value) => {
  if (value === null || value === undefined) return null;
  if (typeof value === "number") return Number.isFinite(value) ? String(value) : null;
  const text = String(value).trim().toLowerCase();
  return text.length > 0 ? text : null;
};

/**
 * Decide whether expensive explorer facts can have changed, from a signal that actually moves.
 *
 * For a contract the signal is the hash of the newest transaction *to* the address, read as page one
 * of the walk we would run anyway — one credit, and live. It is deliberately not
 * `/addresses/<a>/counters.transactions_count`: on this deployment that counter is a cached
 * aggregate that can sit on the same value for hours while the address is being called every minute,
 * which classifies every contract "unchanged" for ever and freezes the corpus while `pulled_at`
 * keeps advancing.
 *
 * For an EOA it is the RPC nonce, which is free. For a token, DexScreener's 24-hour trade count is a
 * pre-filter: a moved trade count forces a read, because a swap through a router never appears as a
 * transaction to the token contract, but an unmoved one can never be the sole reason to skip — the
 * explorer signal still decides.
 */
export function explorerChangeDecision({
  role,
  full = false,
  previous = null,
  priorSignal = null,
  currentSignal = null,
  preFilterChanged = false,
  preFilterName = "trade count",
} = {}) {
  const name = role ?? "address";
  if (full) return { changed: true, reason: "--full override" };
  if (!previous) return { changed: true, reason: "first explorer read" };
  if (preFilterChanged) return { changed: true, reason: `${name} ${preFilterName} changed` };
  const current = signalText(currentSignal);
  const prior = signalText(priorSignal);
  if (current === null) return { changed: true, reason: `${name} signal unavailable` };
  if (prior === null) return { changed: true, reason: `${name} baseline unavailable` };
  if (current !== prior) return { changed: true, reason: `${name} signal changed` };
  return { changed: false, reason: `${name} signal unchanged` };
}
