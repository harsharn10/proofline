import { addressKey, ownActivityAt } from "./relationships.mjs";

export const DAY = 86_400_000;
export const REFRESH_POLICY = Object.freeze({
  version: 1, dailyLimit: 80, seedLimit: 10, researchLimit: 20,
  hot: DAY, live: 7 * DAY, quiet: 30 * DAY, dormant: 30 * DAY,
  archiveAfter: 90 * DAY, seedWindow: 14 * DAY,
});
const ms = value => Number.isFinite(Date.parse(value)) ? Date.parse(value) : null;

export function refreshDecision({ project, census, previous, seededAt, index, aboveShareBar,
  queuedAt, now = Date.now(), force = false }) {
  const first = !previous;
  const queued = ms(queuedAt) !== null && now - ms(queuedAt) >= 0 && now - ms(queuedAt) <= 7 * DAY;
  const ownAt = ownActivityAt(project, previous, index, now);
  const age = ownAt ? now - ms(ownAt) : null;
  const seedAge = ms(seededAt) === null ? null : now - ms(seededAt);
  const conflict = census?.identity?.status === "conflicted" || (project.deployments ?? [])
    .some(d => d.role === "token" && index.get(addressKey(d.chain, d.address))?.identityConflict);
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
  const representative = (project.deployments ?? []).some(d => {
    const node = index.get(addressKey(d.chain, d.address));
    return node && node.projects.length > 1 && !node.identityConflict &&
      node.projects[0].slug === project.slug && ["factory", "router", "vault"].includes(d.role);
  });
  if (!conflict && representative && tier !== "hot" && !first) {
    ignored = false; tier = "live"; reason = "shared infrastructure representative: weekly";
  }
  const interval = REFRESH_POLICY[tier];
  const lastAt = previous?.refresh?.last_success_at ?? previous?.pulled_at;
  const failed = previous?.refresh?.status === "partial";
  // Small tolerance covers scheduler jitter, not a half-day early refresh.
  const due = force || !ignored && (first || queued || failed || ms(lastAt) === null || now - ms(lastAt) >= interval - 2 * 3600_000);
  const overdue = ms(lastAt) === null ? 100 : (now - ms(lastAt)) / interval;
  return { tier, reason: force ? `manual override; ${reason}` : reason, ignored: ignored && !force,
    due, seed: first, queued, ownActivityAt: ownAt, intervalDays: interval / DAY,
    priority: queued ? 1000 + overdue : overdue + (tier === "hot" ? 2 : 0),
    lastSuccessAt: lastAt ?? null };
}

export function selectRefreshTargets(targets, { limit = REFRESH_POLICY.dailyLimit, seedLimit = REFRESH_POLICY.seedLimit,
  force = false } = {}) {
  const due = targets.filter(t => t.refresh.due).sort((a,b) =>
    b.refresh.priority - a.refresh.priority || a.slug.localeCompare(b.slug));
  let seeds = 0;
  const selected = [], deferred = [];
  for (const target of due) {
    if (!force && (selected.length >= limit || target.refresh.seed && seeds >= seedLimit)) deferred.push(target);
    else { selected.push(target); if (target.refresh.seed) seeds++; }
  }
  return { selected, deferred, ignored: targets.filter(t => t.refresh.ignored) };
}
