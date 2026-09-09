import { addressKey, ownActivityAt } from "./relationships.mjs";

export const DAY = 86_400_000;
export const REFRESH_POLICY = Object.freeze({
  version: 1, dailyLimit: 80, seedLimit: 10, retryLimit: 20, researchLimit: 20,
  hot: DAY, live: 7 * DAY, quiet: 30 * DAY, dormant: 30 * DAY,
  archiveAfter: 90 * DAY, seedWindow: 14 * DAY,
});
const ms = value => Number.isFinite(Date.parse(value)) ? Date.parse(value) : null;

export function hasIdentityConflict(project, census, index) {
  return census?.identity?.status === "conflicted" || (project.deployments ?? [])
    .some(d => d.role === "token" && index.get(addressKey(d.chain, d.address))?.identityConflict);
}

// Pick an eligible reader, not simply the first name mentioning an address. Prefer a factory
// claim so its launch window is collected even if another name calls the same address a router.
export function selectInfrastructureReaders(index, eligibleSlugs, chain) {
  const readers = new Map();
  const roles = ["factory", "router", "vault"];
  for (const node of index.values()) {
    if (node.projects.length < 2 || node.identityConflict || chain && node.chain !== chain) continue;
    const candidates = node.projects.filter(p => (!eligibleSlugs || eligibleSlugs.has(p.slug)) && p.roles.some(r => roles.includes(r)))
      .sort((a,b) => Math.min(...a.roles.map(r => roles.indexOf(r)).filter(i => i >= 0)) -
        Math.min(...b.roles.map(r => roles.indexOf(r)).filter(i => i >= 0)) || a.slug.localeCompare(b.slug));
    if (candidates.length) readers.set(node.id, candidates[0].slug);
  }
  return readers;
}

export function refreshDecision({ project, census, previous, seededAt, index, aboveShareBar,
  queuedAt, now = Date.now(), force = false, infrastructureReaders = selectInfrastructureReaders(index) }) {
  const first = !previous;
  const queued = ms(queuedAt) !== null && now - ms(queuedAt) >= 0 && now - ms(queuedAt) <= 7 * DAY;
  const ownAt = ownActivityAt(project, previous, index, now);
  const age = ownAt ? now - ms(ownAt) : null;
  const seedAge = ms(seededAt) === null ? null : now - ms(seededAt);
  const conflict = hasIdentityConflict(project, census, index);
  const reviewed = census?.role !== "observe" && census?.identity?.status === "verified";
  let tier, reason, ignored = false;
  if (conflict && !first) { tier = "dormant"; ignored = true; reason = "identity conflict: Claude review required"; }
  else if (first) { tier = "live"; reason = "one initial seed read"; }
  else if (queued) { tier = "hot"; reason = "dated reactivation request"; }
  else if (age !== null && age > REFRESH_POLICY.archiveAfter && !aboveShareBar) {
    tier = "dormant"; ignored = true; reason = "no own activity for 90 days and below relevance bar";
  } else if (age === null && seedAge !== null && seedAge > REFRESH_POLICY.archiveAfter && !aboveShareBar) {
    tier = "dormant"; ignored = true; reason = "seeded over 90 days ago; no own activity or relevance signal";
  } else if (reviewed && aboveShareBar && age !== null && age <= 7 * DAY) {
    tier = "hot"; reason = "confirmed, relevant and active: daily";
  } else if (age !== null && age <= 30 * DAY || seedAge !== null && seedAge <= REFRESH_POLICY.seedWindow) {
    tier = "live"; reason = "recent own activity or seed observation window: weekly";
  } else { tier = age === null ? "dormant" : "quiet"; reason = "maintenance only: monthly"; }
  // Shared infrastructure is monitored through at least one deterministic representative.
  const representative = (project.deployments ?? []).some(d =>
    infrastructureReaders.get(addressKey(d.chain, d.address)) === project.slug);
  if (!conflict && representative && tier !== "hot" && !first) {
    ignored = false; tier = "live"; reason = "shared infrastructure representative: weekly";
  }
  const interval = REFRESH_POLICY[tier];
  // Explicit null means no successful read yet; the attempted file timestamp is not a fallback.
  const lastAt = previous?.refresh ? previous.refresh.last_success_at : previous?.pulled_at;
  const failed = previous?.refresh?.status === "partial";
  const attemptedAt = ms(previous?.refresh?.attempted_at);
  const retryReady = !failed || attemptedAt === null || now - attemptedAt >= DAY - 2 * 3600_000;
  const newQueueRequest = queued && (attemptedAt === null || ms(queuedAt) > attemptedAt);
  // Small tolerance covers scheduler jitter, not a half-day early refresh.
  const due = force || !ignored && (retryReady || newQueueRequest) &&
    (first || queued || failed || ms(lastAt) === null || now - ms(lastAt) >= interval - 2 * 3600_000);
  // Success age describes freshness, not retry precedence. Age every failed read from its
  // attempt using the same daily retry clock, so hot failures cannot starve maintenance retries.
  const priorityAt = failed || ms(lastAt) === null ? attemptedAt : ms(lastAt);
  const overdue = priorityAt === null ? 100 : Math.max(0, (now - priorityAt) / (failed ? DAY : interval));
  return { tier, reason: force ? `manual override; ${reason}` : reason, ignored: ignored && !force,
    due, retry: failed, seed: first || Boolean(previous?.refresh && lastAt === null), queued, ownActivityAt: ownAt, intervalDays: interval / DAY,
    priority: queued ? 1000 + overdue : overdue + (!failed && tier === "hot" ? 2 : 0),
    lastSuccessAt: lastAt ?? null };
}

export function selectRefreshTargets(targets, { limit = REFRESH_POLICY.dailyLimit, seedLimit = REFRESH_POLICY.seedLimit,
  retryLimit = Math.min(REFRESH_POLICY.retryLimit, Math.max(1, Math.floor(limit / 4))),
  force = false } = {}) {
  const order = (a,b) => b.refresh.priority - a.refresh.priority || a.slug.localeCompare(b.slug);
  const due = targets.filter(t => t.refresh.due).sort(order);
  if (force) return { selected: due, deferred: [], ignored: targets.filter(t => t.refresh.ignored) };
  const selected = [], chosen = new Set();
  let retries = 0;
  const add = target => { selected.push(target); chosen.add(target); if (target.refresh.retry) retries++; };
  // Reserve seed access before established work; failed seeds still consume both caps.
  const seedSlots = Math.min(seedLimit, limit);
  const freshSeeds = due.filter(t => t.refresh.seed && !t.refresh.retry);
  const retrySeeds = due.filter(t => t.refresh.seed && t.refresh.retry);
  // Split when both exist; continuous discovery must not starve failed seeds.
  const seedRetrySlots = Math.min(retryLimit, retrySeeds.length, freshSeeds.length ? Math.floor(seedSlots/2) : seedSlots);
  const seedQueue = [...retrySeeds.slice(0,seedRetrySlots), ...freshSeeds, ...retrySeeds.slice(seedRetrySlots)];
  for (const target of seedQueue) {
    if (selected.length >= seedSlots) break;
    if (target.refresh.retry && retries >= retryLimit) continue;
    add(target);
  }
  const retryQueue = due.filter(t => !t.refresh.seed && t.refresh.retry);
  const reservedRetries = Math.min(retryQueue.length, Math.max(0,retryLimit-retries), Math.max(0,limit-selected.length));
  const regular = due.filter(t => !t.refresh.seed && !t.refresh.retry);
  for (const target of regular) {
    if (selected.length >= limit-reservedRetries) break;
    add(target);
  }
  for (const target of retryQueue) {
    if (selected.length >= limit || retries >= retryLimit) break;
    add(target);
  }
  // Run non-retry work first: a provider outage should not burn the whole runtime on retries.
  selected.sort((a,b) => Number(Boolean(a.refresh.retry))-Number(Boolean(b.refresh.retry)) || order(a,b));
  const deferred = due.filter(t => !chosen.has(t));
  return { selected, deferred, ignored: targets.filter(t => t.refresh.ignored) };
}
