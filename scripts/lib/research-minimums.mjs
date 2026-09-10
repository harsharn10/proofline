import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

export const RESEARCH_AREAS = ['identity', 'product', 'deployment', 'control', 'security', 'team', 'economics', 'activity', 'communications'];
export const packetFingerprint = (packet) => createHash('sha256').update(JSON.stringify([packet.frontmatter, packet.body])).digest('hex');
const legacy = new Set(JSON.parse(readFileSync(new URL('../../ops/research-legacy.json', import.meta.url), 'utf8')).fingerprints);
export const isLegacyPacket = (packet) => legacy.has(packetFingerprint(packet));
const refs = value => Array.isArray(value) ? value : [];
const sourceUrl = raw => {
  try {
    const url = new URL(raw);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    url.hash = '';
    for (const key of [...url.searchParams.keys()]) if (/^(utm_|ref$)/i.test(key)) url.searchParams.delete(key);
    return url.href.replace(/\/$/, '');
  } catch { return null; }
};

/** Structural evidence floor, not a claim that cited sources are true or independent. */
export function researchMinimumGaps(packet) {
  const f = packet.frontmatter ?? {};
  if (!['seed', 'full'].includes(f.packet_tier) || f.slug === 'discovery-inventory') return [];
  const errors = [];
  const rows = key => Array.isArray(f[key]) ? f[key].filter(r => r && typeof r === 'object') : [];
  const receipts = rows('receipts');
  const usable = receipts.filter(r => sourceUrl(r.url) && r.authenticity === 'confirmed');
  const receiptIds = new Set(usable.map(r => r.id));
  const claims = rows('claims');
  const supported = c => c && ['verified', 'claim', 'inference'].includes(c.class) && refs(c.receipt_ids).some(id => receiptIds.has(id));
  const backedClaim = id => claims.some(c => c.id === id && refs(c.receipt_ids).some(r => receiptIds.has(r)));
  const gapFor = area => rows('gaps').some(g => g.area === area && [g.question, g.checked, g.next].every(v => typeof v === 'string' && v.trim()));
  if (new Set(usable.map(r => sourceUrl(r.url))).size < 3) errors.push('receipts: need three distinct confirmed source URLs');
  for (const [label, predicate] of [
    ['official site/docs', r => r.authority === 'primary' && ['official-site', 'docs'].includes(r.kind)],
    ['explorer/RPC', r => r.authority === 'onchain'],
    ['independent/aggregator', r => ['independent', 'aggregator'].includes(r.authority)],
  ]) if (!usable.some(predicate)) errors.push(`receipts: missing ${label} evidence`);
  const crosslinks = claims.filter(c => refs(f.identity?.crosslink_claim_ids).includes(c.id) && String(c.field).startsWith('identity.') && supported(c));
  if (!crosslinks.some(c => {
    const surfaces = usable.filter(r => refs(c.receipt_ids).includes(r.id) && ['primary', 'onchain'].includes(r.authority));
    return surfaces.some(r => r.authority === 'primary') && new Set(surfaces.map(r => sourceUrl(r.url))).size >= 2;
  }))
    errors.push('identity: crosslink_claim_ids must cite an identity claim supported by two confirmed source URLs');
  for (const key of ['deployed_on_chain', 'native_play', 'citable', 'research_story']) {
    if (!refs(f.qualifying?.[key]?.claim_ids).some(backedClaim)) errors.push(`qualifying.${key}: needs a receipt-backed claim, including fail/unknown findings`);
  }
  for (const area of RESEARCH_AREAS) {
    if (!claims.some(c => String(c.field).startsWith(`${area}.`) && supported(c)) && !gapFor(area))
      errors.push(`${area}: needs a supported claim or an explicit area-tagged gap with checked surfaces and next step`);
  }
  const reproduced = c => supported(c) && refs(c.reproduction_ids).some(id => rows('reproductions').some(r => r.id === id && ['explorer-rpc', 'explorer-ui'].includes(r.method) && r.chain_id === 4663 && refs(r.receipt_ids).some(rid => usable.some(source => source.id === rid && source.authority === 'onchain'))));
  for (const d of rows('deployments')) {
    const address = d.address?.value;
    if (typeof address === 'string' && /^0x[a-fA-F0-9]{40}$/.test(address) && !claims.some(c => c.field === 'deployment.address' && String(JSON.stringify(c.value)).toLowerCase().includes(address.toLowerCase()) && reproduced(c)))
      errors.push(`deployment ${d.label}: needs an address-specific onchain reproduction`);
  }
  if (!rows('deployments').length && !gapFor('deployment')) errors.push('deployment: no address located requires an explicit searched-surfaces gap');
  if (!/^## What it is\s*\n\s*\S/m.test(packet.body ?? '')) errors.push('body: needs a mechanism-first What it is paragraph');
  if (f.packet_tier === 'full') {
    const verification = (packet.body ?? '').split('## Verification passes')[1]?.split('\n## ')[0] ?? '';
    for (const pass of ['receipts', 'numbers', 'adversarial']) {
      if (!new RegExp(`(?:^|\\n)(?:[-*] |#{3,4} )?${pass}\\s*[:—-]\\s*\\S`, 'i').test(verification)) errors.push(`full: record the ${pass} verification pass with findings`);
    }
    if (!rows('events').some(e => Number.isFinite(Date.parse(e.occurred_at)) && refs(e.receipt_ids).some(id => receiptIds.has(id)))) errors.push('full: needs a dated receipt-backed event');
    if (!rows('metrics').length && !gapFor('economics')) errors.push('full: needs dated metrics or a searched economics gap');
  }
  return errors;
}

export function enforceResearchMinimums(packet) {
  if (isLegacyPacket(packet)) return [];
  const errors = researchMinimumGaps(packet).map(g => `research minimum: ${g}`);
  const f = packet.frontmatter ?? {};
  if (f.packet_tier === 'update') {
    if (!['event', 'measurement', 'correction', 'verification'].includes(f.update_reason)) errors.push('update: declare update_reason (event, measurement, correction or verification); backfills use a full packet');
    if (typeof f.change_summary !== 'string' || !f.change_summary.trim()) errors.push('update: change_summary must explain the material difference, not a routine check');
    if (!f.prior_packet || !f.supersedes) errors.push('update: prior_packet and supersedes must identify the prior work');
    if (f.update_reason === 'event' && !refs(f.events).some(e => e && ['material', 'urgent'].includes(e.impact) && ['feed', 'both'].includes(e.site_recommendation))) errors.push('update: event updates need a material/urgent public event');
    if (f.update_reason === 'measurement' && !refs(f.metrics).length) errors.push('update: measurement updates need dated metrics');
    if (f.update_reason === 'correction' && !refs(f.claims).some(c => c?.supersedes)) errors.push('update: corrections need a superseding claim');
    if (f.update_reason === 'verification' && (f.role !== 'verifier' || !refs(f.reproductions).length)) errors.push('update: verification needs an independent verifier role and reproductions');
  }
  for (const event of refs(f.events)) {
    if (!event || !['feed', 'both'].includes(event.site_recommendation)) continue;
    if (typeof event.summary !== 'string' || !event.summary.trim() || event.summary.length > 600) errors.push('website: event summary must be nonempty and at most 600 characters');
    if (typeof event.title !== 'string' || !event.title.trim() || event.title.length > 80) errors.push('website: event title must be nonempty and at most 80 characters');
    if (!Number.isFinite(Date.parse(event.occurred_at))) errors.push('website: event needs its actual occurrence date');
    if (!refs(event.receipt_ids).some(id => refs(f.receipts).some(r => r?.id === id && sourceUrl(r.url)))) errors.push('website: event needs a source URL');
  }
  return errors;
}
