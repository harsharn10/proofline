import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdtemp, readdir, rm } from 'node:fs/promises';
import { stringify } from 'yaml';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { parsePacket, validatePacketDirectory } from './lib/packet.mjs';
import { researchMinimumGaps, enforceResearchMinimums, isLegacyPacket } from './lib/research-minimums.mjs';
import { runCompile } from './compile-packet.mjs';
import { seedWithMinimums } from './lib/research-test-fixture.mjs';
const fixture = async () => parsePacket(seedWithMinimums(await readFile('fixtures/compile-packet/icarus-fields.md', 'utf8')));

test('complete synthetic seed passes; new packet backdating does not bypass the floor', async () => {
  const p = await fixture();
  assert.deepEqual(enforceResearchMinimums(p), []);
  p.frontmatter.as_of = '2020-01-01T00:00:00Z';
  p.frontmatter.receipts = [];
  assert.ok(enforceResearchMinimums(p).length);
});
test('accepted legacy packet is unchanged-only, with visible audit gaps', async () => {
  const p = parsePacket(await readFile('research/inbox/packets/pons/WORK-20260903-grok-heavy-icarus-research.md', 'utf8'));
  assert.equal(isLegacyPacket(p), true);
  assert.deepEqual(enforceResearchMinimums(p), []);
  assert.ok(researchMinimumGaps(p).length);
  p.body += '\nNew assertion.';
  assert.equal(isLegacyPacket(p), false);
  assert.ok(enforceResearchMinimums(p).length);
});
test('missing receipt classes, crosslinks, qualifying support and unsearched gaps fail', async () => {
  for (const edit of [
    f => { f.receipts = f.receipts.filter(r => r.authority !== 'onchain'); },
    f => { f.identity.crosslink_claim_ids = []; },
    f => { f.qualifying.deployed_on_chain.claim_ids = []; },
    f => { f.gaps = f.gaps.filter(g => g.area !== 'team'); },
    f => { f.gaps.find(g => g.area === 'team').checked = ' '; },
  ]) {
    const p = await fixture(); edit(p.frontmatter);
    assert.ok(researchMinimumGaps(p).length);
  }
});
test('tracking variants are not independent sources and malformed references fail closed', async () => {
  const p = await fixture();
  p.frontmatter.receipts.forEach((r, i) => { r.url = `https://one.example/?utm_source=${i}#${i}`; });
  assert.ok(researchMinimumGaps(p).some(e => e.includes('three distinct')));
  p.frontmatter.identity.crosslink_claim_ids = 'bad';
  p.frontmatter.qualifying.native_play.claim_ids = 'bad';
  p.frontmatter.claims[0].receipt_ids = 'bad';
  assert.ok(researchMinimumGaps(p).length);
});
test('a listed address needs its own chain-4663 reproduction', async () => {
  const p = await fixture();
  p.frontmatter.deployments = [{ label: 'Token', address: { value: '0x1111111111111111111111111111111111111111' } }];
  assert.ok(researchMinimumGaps(p).some(e => e.includes('address-specific')));
});
test('full template passes floor and missing verification passes fail', async () => {
  const p = parsePacket(await readFile('docs/templates/research-packet-v2.md', 'utf8'));
  assert.deepEqual(researchMinimumGaps(p), []);
  p.body = p.body.replace('- Adversarial:', '- Omitted:');
  assert.ok(researchMinimumGaps(p).some(e => e.includes('adversarial')));
});
test('deployment floor shares exact prose-address and reproduction binding with the compiler', async () => {
  const p = parsePacket(await readFile('docs/templates/research-packet-v2.md', 'utf8'));
  const address = p.frontmatter.deployments[0].address.value;
  const claim = p.frontmatter.claims.find(c => c.field === 'deployment.address');
  claim.value = `Vault deployment at ${address}.`;
  assert.deepEqual(researchMinimumGaps(p), []);
  for (const value of [`${address}0`, `${address} plus 0x4444444444444444444444444444444444444444`]) {
    const bad = structuredClone(p);
    bad.frontmatter.claims.find(c => c.id === claim.id).value = value;
    assert.ok(researchMinimumGaps(bad).some(e => e.includes('address-specific')));
  }
  const bad = structuredClone(p);
  bad.frontmatter.claims.find(c => c.id === claim.id).receipt_ids = ['R-1'];
  assert.ok(researchMinimumGaps(bad).some(e => e.includes('address-specific')),
    'a reproduction tied only to a different receipt cannot establish this claim');
});
test('direct compiler refuses a deficient seed before any writes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'proofline-minimum-test-'));
  try {
    await assert.rejects(runCompile({ packetPath: 'fixtures/compile-packet/new-seed.md', contentDir: root }), /research minimum/);
    assert.deepEqual(await readdir(root), []);
  } finally { await rm(root, { recursive: true, force: true }); }
});
test('direct compiler enforces packet schema as well as evidence minimums', async () => {
  const root = await mkdtemp(join(tmpdir(), 'proofline-schema-test-'));
  try {
    const packetPath = join(root, 'bad.md');
    const text = seedWithMinimums(await readFile('fixtures/compile-packet/icarus-fields.md', 'utf8'));
    const p = parsePacket(text);
    p.frontmatter.claims[0].field = 'identity.not-a-schema-field';
    await writeFile(packetPath, `---\n${stringify(p.frontmatter)}---\n${p.body}`);
    await assert.rejects(runCompile({ packetPath, contentDir: join(root, 'output') }), /allowed values|schema/);
    assert.deepEqual(await readdir(root), ['bad.md'], 'schema error creates no canonical output');
  } finally { await rm(root, { recursive: true, force: true }); }
});
test('update tier cannot bypass seed minimums for a new canonical project', async () => {
  const root = await mkdtemp(join(tmpdir(), 'proofline-update-test-'));
  try {
    const p = await fixture();
    p.frontmatter.packet_tier = 'update';
    p.frontmatter.update_reason = 'event';
    p.frontmatter.change_summary = 'A new material event';
    p.frontmatter.events[0].impact = 'material';
    p.frontmatter.supersedes = 'WORK-20260902-grok-heavy-prior';
    p.frontmatter.prior_packet = 'research/inbox/packets/missing/prior.md';
    const packetPath = join(root, 'packet.md');
    await writeFile(packetPath, `---\n${stringify(p.frontmatter)}---\n\n## Operations log\n\nSynthetic update.\n`);
    await assert.rejects(runCompile({ packetPath, contentDir: join(root, 'content') }), /update packet cannot seed/);
    assert.deepEqual(await readdir(root), ['packet.md']);
  } finally { await rm(root, { recursive: true, force: true }); }
});
test('directory validation rejects deficient packets at the normal intake boundary', async () => {
  const result = await validatePacketDirectory('fixtures/compile-packet/..');
  assert.ok(result.errors.some(e => e.includes('research minimum')));
});
