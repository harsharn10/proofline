// Synthetic evidence for isolated tests only. Never applied to real research packets.
import { parsePacket } from './packet.mjs';
import { stringify } from 'yaml';
import { RESEARCH_AREAS } from './research-minimums.mjs';
export function seedWithMinimums(text) {
  const packet = parsePacket(text);
  const f = packet.frontmatter;
  const official = f.receipts.find(r => r.kind === 'official-site');
  const second = f.receipts.find(r => r.authority === 'primary' && r !== official);
  f.identity.crosslink_claim_ids = ['CLM-900'];
  f.claims.push({ id: 'CLM-900', field: 'identity.domain', value: 'Synthetic site/account crosslink checked', class: 'claim', observed_at: f.as_of, receipt_ids: [official.id, second.id], reproduction_ids: [], supersedes: null });
  official.supports.push('CLM-900');
  second.supports.push('CLM-900');
  for (const q of Object.values(f.qualifying)) if (!q.claim_ids.length) q.claim_ids = ['CLM-900'];
  f.gaps.push(...RESEARCH_AREAS.map(area => ({ area, priority: 'P2', question: `What is established about ${area}?`, checked: 'Synthetic fixture source search, no conclusion', next: 'Obtain supporting evidence' })));
  return `---\n${stringify(f, { lineWidth: 0 })}---\n\n${packet.body}\n`;
}
