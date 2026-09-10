// Cheap preparation gate only. The sender still validates current approval fingerprints,
// eligibility, already-sent state and delivery limits. This never grants approval.
export function publicationPauseReason(review, modes) {
  if (review?.channel_enabled !== true)
    return 'Icarus channel delivery is paused in ops/telegram-review.json — nothing sent.';
  if (review.wire_enabled === false && modes.some(mode => ['alerts', 'brief', 'weekly'].includes(mode)))
    return 'Icarus automatic sends are paused in ops/telegram-review.json (wire_enabled) — nothing sent.';
  return null;
}

export function publicationPreflight({ review, mode, credentials = false } = {}) {
  if (!['publications', 'alerts', 'brief', 'weekly'].includes(mode)) throw new Error('Unknown publication mode');
  if (!review || review.version !== 2 || typeof review.channel_enabled !== 'boolean' ||
      (review.wire_enabled !== undefined && typeof review.wire_enabled !== 'boolean') ||
      !review.decisions || typeof review.decisions !== 'object' || Array.isArray(review.decisions))
    throw new Error('Invalid publication ledger; refusing preparation');
  if (!credentials) return { run: false, reason: 'delivery credentials unavailable' };
  const paused = publicationPauseReason(review, [mode]);
  if (paused) return { run: false, reason: paused };
  if (mode === 'publications' && !Object.values(review.decisions).some(d => d?.status === 'approved'))
    return { run: false, reason: 'no approved publication candidates' };
  return { run: true, reason: 'preparation allowed; sender must verify actual eligibility' };
}
