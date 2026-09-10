import { readdir, readFile } from 'node:fs/promises';
import { parse } from 'yaml';
import { parsePacket } from './lib/packet.mjs';
import { isLegacyPacket, researchMinimumGaps } from './lib/research-minimums.mjs';

const packets = [];
for (const entry of await readdir('research/inbox/packets', { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  for (const name of await readdir(`research/inbox/packets/${entry.name}`)) {
    if (!name.endsWith('.md')) continue;
    const path = `research/inbox/packets/${entry.name}/${name}`;
    try {
      const packet = parsePacket(await readFile(path, 'utf8'));
      packets.push({ path, slug: packet.frontmatter.slug, tier: packet.frontmatter.packet_tier, legacy: isLegacyPacket(packet), gaps: researchMinimumGaps(packet) });
    } catch (error) { packets.push({ path, slug: entry.name, gaps: [error.message] }); }
  }
}
packets.sort((a, b) => a.path.localeCompare(b.path));
const census = parse(await readFile('content/census.yaml', 'utf8'));
const researched = new Set(packets.filter(p => ['seed', 'full'].includes(p.tier)).map(p => p.slug));
console.log(JSON.stringify({
  note: 'Read-only structural evidence audit. Zero gaps is not semantic verification or permission to promote scores.',
  packet_count: packets.length,
  packets_with_gaps: packets.filter(p => p.gaps.length).length,
  census_without_seed_or_full_packet: census.filter(p => !researched.has(p.slug)).map(p => p.slug).sort(),
  packets,
}, null, 2));
