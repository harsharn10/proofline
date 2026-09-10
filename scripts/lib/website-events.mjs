// Event identity is evidence identity, not the producer's work ID. Keep legacy IDs stable.
const text = value => String(value ?? '').trim().replace(/\s+/g, ' ');
export function evidenceUrl(raw) {
  try {
    const u = new URL(raw);
    if (!['http:', 'https:'].includes(u.protocol)) return '';
    u.hash = '';
    if (['www.twitter.com', 'twitter.com', 'www.x.com'].includes(u.hostname)) u.hostname = 'x.com';
    for (const key of [...u.searchParams.keys()]) if (/^utm_|^(ref|s|t)$/i.test(key)) u.searchParams.delete(key);
    u.searchParams.sort();
    return u.href.replace(/\/$/, '');
  } catch { return ''; }
}
export function websiteEventKey(row) {
  const url = evidenceUrl(row.sourceUrl);
  if (!url) return `id:${row.id}`;
  // One social post is one update even if another collector changes its title/date/account spelling.
  const post = /^https?:\/\/x\.com\/[^/]+\/status\/(\d+)(?:[/?]|$)/.exec(url);
  if (post) return `post:${post[1]}`;
  // General docs, address and API URLs are reused for distinct findings: don't collapse them by URL.
  return JSON.stringify([url, row.date, row.kind, text(row.title), text(row.body)]);
}
export function mergeWebsiteEvents(prior = [], incoming = [], { correction = false } = {}) {
  const out = prior.map(row => ({ ...row }));
  for (const row of incoming) {
    const index = out.findIndex(old => old.id === row.id || websiteEventKey(old) === websiteEventKey(row));
    if (index < 0) { out.push(row); continue; }
    const old = out[index];
    const changed = ['date', 'kind', 'title', 'body', 'account', 'tag'].some(key => text(old[key]) !== text(row[key]));
    if (changed && !correction) throw new Error(`Existing website event ${old.id} has conflicting copy; submit an explicit sourced correction, not a duplicate event.`);
    // Existing duplicate history is not deleted. Only new replays are coalesced.
    out[index] = { ...(correction ? row : old), id: old.id, sources: [...new Set([...(old.sources ?? []), ...(row.sources ?? [])])] };
  }
  return out;
}
