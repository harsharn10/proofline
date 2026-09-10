import { createHash } from 'node:crypto';
import { researchMinimumGaps } from './research-minimums.mjs';

// One task per canonical name + gap set, independent of run date, work ID and input ordering.
export function buildBackfillPlan({ slugs, packets, refresh, identityHolds = [], identities = {}, pending = [], taskState = null, limit = 10 }) {
  if (!Number.isInteger(limit) || limit < 0 || limit > 20) throw new Error('backfill limit must be 0..20');
  if (taskState !== null && (!taskState || typeof taskState !== 'object' || Array.isArray(taskState))) throw new Error('task state must be an object');
  const records = new Map();
  for (const row of packets) {
    if (!records.has(row.packet.frontmatter.slug)) records.set(row.packet.frontmatter.slug, []);
    records.get(row.packet.frontmatter.slug).push(row);
  }
  const decisions = new Map([...refresh.selected, ...refresh.deferred, ...refresh.not_due, ...refresh.ignored].map(r => [r.slug, r]));
  const rows = [...new Set(slugs)].sort().map(slug => {
    const history = (records.get(slug) ?? []).filter(r => ['seed', 'full'].includes(r.packet.frontmatter.packet_tier));
    history.sort((a, b) => Date.parse(b.packet.frontmatter.as_of) - Date.parse(a.packet.frontmatter.as_of) || a.path.localeCompare(b.path));
    const latest = history[0];
    const gaps = latest ? researchMinimumGaps(latest.packet) : ['seed: no accepted seed/full packet'];
    // Explicit open high-priority questions remain work even after structural metadata is complete.
    for (const gap of latest?.packet.frontmatter.gaps ?? []) {
      if (['P0', 'P1'].includes(String(gap.priority).toUpperCase())) gaps.push(`evidence:${gap.area ?? 'unclassified'}:${gap.question}`);
    }
    const unique = [...new Set(gaps)].sort();
    const id = createHash('sha256').update(JSON.stringify([1, slug, unique])).digest('hex').slice(0, 20);
    const prior = taskState?.[id];
    if (prior && !['claimed', 'blocked', 'no-change', 'complete', 'released'].includes(prior.status)) throw new Error(`invalid task state for ${id}`);
    const decision = decisions.get(slug);
    const pendingPrs = pending.filter(p => p.slug === slug);
    const tie = latest && history.some(r => r !== latest && r.packet.frontmatter.as_of === latest.packet.frontmatter.as_of && JSON.stringify(r.packet) !== JSON.stringify(latest.packet));
    let status = !unique.length ? 'complete' : 'needs-work';
    if (unique.length) {
      if (identityHolds.includes(slug) || tie) status = 'identity-or-version-hold';
      else if (pendingPrs.length) status = 'pending-submission';
      else if (prior && prior.status !== 'released') status = prior.status === 'complete' ? 'completion-needs-review' : prior.status;
      else if (!decision || decision.ignored || !['hot', 'live'].includes(decision.tier)) status = 'deferred-relevance';
    }
    return { task_id: id, slug, status, tier: decision?.tier ?? 'unknown', reason: decision?.reason ?? 'No refresh decision',
      packet: latest?.path ?? null, packet_as_of: latest?.packet.frontmatter.as_of ?? null,
      action: latest ? 'targeted-full-backfill' : 'research-seed', gaps: unique, pending: pendingPrs,
      priority: decision?.tier === 'hot' ? 0 :
        ['protocol', 'application', 'infrastructure', 'tool'].includes(identities[slug]) ? (decision?.reason?.includes('shared infrastructure representative') ? 1 : 2) : 3 };
  });
  const selected = rows.filter(r => r.status === 'needs-work').sort((a, b) => a.priority - b.priority || a.slug.localeCompare(b.slug)).slice(0, limit);
  return { version: 1, assignment_ready: taskState !== null, dispatch: false,
    instruction: 'Claim task IDs in the GitHub work issue before a bounded run. No scheduler is started. Missing task-state snapshot means recommendations only.',
    selected, rows, pending_noncanonical: pending.filter(p => !slugs.includes(p.slug)) };
}
