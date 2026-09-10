// Accepted evidence is not editorial approval. No collection updates review.approver/reviewed_at.
export function nextResearchState(prior, packet) {
  const at = Date.parse(packet.as_of);
  if (!Number.isFinite(at) || !['seed','full','update'].includes(packet.packet_tier)) throw new Error('Invalid accepted research metadata');
  const newest = !prior || at > Date.parse(prior.as_of);
  const full = [prior?.full_as_of, packet.packet_tier === 'full' ? packet.as_of : null]
    .filter(Boolean).sort((a,b) => Date.parse(b)-Date.parse(a))[0] ?? null;
  return { ...(newest ? {as_of:packet.as_of,work_id:packet.work_id,tier:packet.packet_tier} : prior), full_as_of:full };
}

export function productActivityStatus(lifecycle, located, lastActivityAt, now = Date.now()) {
  if (lifecycle === 'testnet-only') return 'testnet';
  if (lifecycle === 'inactive') return 'dormant';
  if (lifecycle === 'announced' || !located) return 'announced';
  const age = now - Date.parse(lastActivityAt);
  if (!Number.isFinite(age) || age < 0) return 'quiet';
  return age <= 7 * 86400_000 ? 'live' : age <= 30 * 86400_000 ? 'quiet' : 'dormant';
}
