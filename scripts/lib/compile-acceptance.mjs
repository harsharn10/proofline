// An explicit controller decision, not a producer's ready flag or a structural test result.
export const ACCEPTANCE_MARKER = '<!-- proofline:compile-acceptance:v1 -->';
export const INTAKE_MAX_AGE_MS = 15 * 60_000;
const sha = value => typeof value === 'string' && /^[a-f0-9]{40}$/.test(value);
const packetPath = value => typeof value === 'string' && /^research\/inbox\/packets\/[a-z0-9][a-z0-9-]*\/[A-Za-z0-9][A-Za-z0-9._-]*\.md$/.test(value);

export function packetAcceptance(pr, path, { repository, now = Date.now() } = {}) {
  const held = reason => ({ ok: false, reason: `controller acceptance required: ${reason}` });
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository ?? '')) return held('invalid repository');
  if (!pr || pr.state !== 'open' || pr.draft !== false || pr.base?.ref !== 'main' ||
      pr.base?.repo?.full_name !== repository || pr.head?.repo?.full_name !== repository ||
      !Number.isSafeInteger(pr.number) || pr.number < 1 || !sha(pr.head?.sha)) return held('PR is not open, ready and same-repository');
  const checked = Date.parse(pr.proofline_checked_at);
  if (!Number.isFinite(checked) || checked > now || now - checked > INTAKE_MAX_AGE_MS ||
      !Array.isArray(pr.proofline_comments)) return held('missing, future or expired GitHub comment snapshot');
  const controller = repository.split('/')[0].toLowerCase();
  const comments = pr.proofline_comments.filter(c => c?.user?.login?.toLowerCase() === controller &&
    typeof c.body === 'string' && c.body.includes(ACCEPTANCE_MARKER));
  if (!comments.length) return held('no repository-owner decision');
  if (comments.some(c => !Number.isSafeInteger(c.id) || c.id < 1) || new Set(comments.map(c => c.id)).size !== comments.length)
    return held('ambiguous controller comment IDs');
  // Newest posted full decision wins. Editing an older comment cannot undo a later hold.
  const comment = comments.sort((a, b) => b.id - a.id)[0];
  const updated = Date.parse(comment.updated_at ?? comment.created_at);
  if (!Number.isFinite(updated) || updated > checked) return held('invalid comment timestamp');
  const marker = comment.body.indexOf(ACCEPTANCE_MARKER);
  if (comment.body.indexOf(ACCEPTANCE_MARKER, marker + ACCEPTANCE_MARKER.length) !== -1)
    return held('multiple decision markers');
  const match = comment.body.slice(marker + ACCEPTANCE_MARKER.length).match(/^\s*```json\s*\n([\s\S]*?)\n```\s*$/);
  if (!match) return held('malformed decision block');
  let decision;
  try { decision = JSON.parse(match[1]); } catch { return held('malformed decision JSON'); }
  if (!decision || decision.version !== 1 || !sha(decision.head_sha) ||
      !['accept', 'hold'].includes(decision.decision) || !Array.isArray(decision.packets) ||
      !decision.packets.every(packetPath) || new Set(decision.packets).size !== decision.packets.length)
    return held('invalid decision fields or packet paths');
  if (decision.head_sha !== pr.head.sha) return held('decision names a different PR revision');
  if (decision.decision !== 'accept') return held('latest controller decision is hold');
  if (!packetPath(path) || !decision.packets.includes(path)) return held('packet path is not accepted');
  return { ok: true, pr: pr.number, branch: pr.head.ref, head_sha: pr.head.sha,
    path, comment_id: comment.id, checked_at: pr.proofline_checked_at };
}
