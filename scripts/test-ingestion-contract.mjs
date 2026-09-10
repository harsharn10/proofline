import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { stringify } from 'yaml';
import { runCompile } from './compile-packet.mjs';
import { parsePacket, checkPacket, compile, validatePacket } from './lib/packet.mjs';
import { enforceResearchMinimums } from './lib/research-minimums.mjs';
import { mergeWebsiteEvents } from './lib/website-events.mjs';
import { buildBackfillPlan } from './lib/research-backfill.mjs';
import { measurementUpdateErrors } from './lib/measurement-update.mjs';

const event = { id: 'old-id', date: '2026-09-01', kind: 'company', title: 'Launch', body: 'A launch with a source.', sourceUrl: 'https://x.com/project/status/123?s=20', sources: ['S1'] };
test('replayed social event retains ID across work IDs and X/Twitter URL variants', () => {
  const merged = mergeWebsiteEvents([event], [{ ...event, id: 'new-id', sourceUrl: 'https://twitter.com/project/status/123?utm_source=bot', sources: ['S2'] }]);
  assert.equal(merged.length, 1);
  assert.equal(merged[0].id, 'old-id');
  assert.deepEqual(merged[0].sources, ['S1', 'S2']);
});
test('conflicting copy requires a correction, which still preserves the public ID', () => {
  const correction = { ...event, id: 'different', body: 'Corrected sourced copy.' };
  assert.throws(() => mergeWebsiteEvents([event], [correction]), /explicit sourced correction/);
  assert.equal(mergeWebsiteEvents([event], [correction], { correction: true })[0].id, event.id);
});
test('general address URLs preserve distinct dated observations and existing duplicate history', () => {
  const a = { ...event, sourceUrl: 'https://explorer.example/address/0x123' };
  assert.equal(mergeWebsiteEvents([a], [{ ...a, id: 'second', date: '2026-09-02' }]).length, 2);
  assert.equal(mergeWebsiteEvents([event, { ...event, id: 'historical-duplicate' }], [event]).length, 2);
});
test('compiler does not create another website row for the same packet under another work ID', async () => {
  const packet = parsePacket(await readFile('fixtures/compile-packet/icarus-fields.md', 'utf8'));
  const first = compile(packet);
  packet.frontmatter.work_id = 'WORK-20260910-grok-heavy-replay';
  const second = compile(packet, first.project, first.censusRow, first.sources, first.feed, { priorResearch: first.research });
  assert.deepEqual(second.feed.items.map(r => r.id), first.feed.items.map(r => r.id));
});
test('worked update template passes shape, references and update gates', async () => {
  const packet = parsePacket(await readFile('docs/templates/research-update-v2.md', 'utf8'));
  assert.deepEqual(checkPacket(packet.frontmatter, packet.body), []);
  assert.deepEqual(validatePacket(packet, { source: 'docs/templates/research-update-v2.md' }), []);
  assert.deepEqual(enforceResearchMinimums(packet), []);
  packet.frontmatter.events[0].impact = 'routine';
  assert.ok(enforceResearchMinimums(packet).some(e => e.includes('material/urgent')));
  packet.frontmatter.change_summary = '';
  assert.ok(enforceResearchMinimums(packet).some(e => e.includes('change_summary')));
});
test('event-only replay is rejected at the writer boundary without canonical changes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'proofline-ingestion-replay-'));
  try {
    const contentDir = join(root, 'content');
    const packet = parsePacket(await readFile('fixtures/compile-packet/icarus-fields.md', 'utf8'));
    const original = await runCompile({ packetPath: 'fixtures/compile-packet/icarus-fields.md', contentDir, enforceMinimums: false });
    const before = await Promise.all(original.files.map(path => readFile(path, 'utf8')));
    Object.assign(packet.frontmatter, { packet_tier: 'update', update_reason: 'event', change_summary: 'Attempted replay',
      supersedes: packet.frontmatter.work_id, prior_packet: 'research/inbox/packets/icarus-fields/prior.md', work_id: 'WORK-20260910-grok-heavy-replay' });
    packet.frontmatter.events[0].impact = 'material';
    const packetPath = join(root, 'replay.md');
    await writeFile(packetPath, `---\n${stringify(packet.frontmatter)}---\n\n## Operations log\n\nReplay test.\n`);
    await assert.rejects(runCompile({ packetPath, contentDir }), /No new website event/);
    assert.deepEqual(await Promise.all(original.files.map(path => readFile(path, 'utf8'))), before);
  } finally { await rm(root, { recursive: true, force: true }); }
});
test('measurement, correction and verification updates require their respective evidence', () => {
  for (const reason of ['measurement', 'correction', 'verification']) {
    const p = { frontmatter: { packet_tier: 'update', update_reason: reason, change_summary: 'Changed', prior_packet: 'prior', supersedes: 'work' }, body: '' };
    assert.ok(enforceResearchMinimums(p).length);
  }
});

const input = () => ({ slugs: ['b', 'a', 'a'], packets: [], pending: [],
  refresh: { selected: [], deferred: [], ignored: [], not_due: [{ slug: 'a', tier: 'hot', reason: 'active' }, { slug: 'b', tier: 'live', reason: 'weekly' }] } });
test('measurements cannot roll back, conflict at the same date or replay unchanged observations', () => {
  const old = { kind: 'tvl', value: 100, currency: 'USD', as_of: '2026-09-03', window: 'point-in-time' };
  assert.match(measurementUpdateErrors([{ ...old, as_of: '2026-09-02' }], [old]).join(), /older/);
  assert.match(measurementUpdateErrors([{ ...old, value: 200 }], [old]).join(), /conflicting/);
  assert.match(measurementUpdateErrors([old], [old]).join(), /No new measurement/);
  assert.deepEqual(measurementUpdateErrors([{ ...old, as_of: '2026-09-04' }], [old]), []);
});
test('backfill is one deterministic task per canonical name, independent of ordering', () => {
  const a = buildBackfillPlan(input());
  const b = buildBackfillPlan({ ...input(), slugs: ['a', 'b'] });
  assert.equal(a.rows.length, 2);
  assert.deepEqual(a, b);
  assert.equal(a.assignment_ready, false);
  assert.equal(a.dispatch, false);
});
test('pending drafts and identity holds exclude names; pending noncanonical seeds stay visible', () => {
  const p = buildBackfillPlan({ ...input(), pending: [{ slug: 'a', pr: 95, state: 'held' }, { slug: 'new-name', pr: 96, state: 'held' }], identityHolds: ['b'] });
  assert.equal(p.selected.length, 0);
  assert.equal(p.rows.find(r => r.slug === 'a').status, 'pending-submission');
  assert.equal(p.rows.find(r => r.slug === 'b').status, 'identity-or-version-hold');
  assert.equal(p.pending_noncanonical.length, 1);
});
test('task status prevents rerunning blocked, no-change, claimed and falsely completed work', () => {
  const base = buildBackfillPlan(input());
  const id = base.rows.find(r => r.slug === 'a').task_id;
  for (const status of ['blocked', 'no-change', 'claimed', 'complete']) {
    const p = buildBackfillPlan({ ...input(), taskState: { [id]: { status } } });
    assert.equal(p.selected.some(r => r.slug === 'a'), false);
    assert.equal(p.assignment_ready, true);
  }
  assert.equal(buildBackfillPlan({ ...input(), taskState: { [id]: { status: 'released' } } }).selected.length, 2);
  assert.throws(() => buildBackfillPlan({ ...input(), taskState: { [id]: { status: 'typo' } } }), /invalid task state/);
});
test('dormant work and missing decisions are deferred and batch size is bounded', () => {
  const args = input(); args.refresh.not_due[0].tier = 'dormant';
  args.slugs.push('unknown');
  assert.equal(buildBackfillPlan(args).selected.length, 1);
  assert.equal(buildBackfillPlan({ ...input(), limit: 0 }).selected.length, 0);
  assert.throws(() => buildBackfillPlan({ ...input(), limit: 99 }), /0..20/);
});
test('only the latest full/seed drives backfill; equal-date divergent copies are held', () => {
  const old = { path: 'old', packet: { frontmatter: { slug: 'a', packet_tier: 'seed', as_of: '2026-09-01T00:00:00Z', gaps: [] }, body: '' } };
  const newer = structuredClone(old); newer.path = 'new'; newer.packet.frontmatter.as_of = '2026-09-02T00:00:00Z';
  const p = buildBackfillPlan({ ...input(), packets: [old, newer] });
  assert.equal(p.rows.find(r => r.slug === 'a').packet, 'new');
  const conflict = structuredClone(newer); conflict.path = 'conflict'; conflict.packet.body = 'Conflicting body';
  assert.equal(buildBackfillPlan({ ...input(), packets: [newer, conflict] }).rows.find(r => r.slug === 'a').status, 'identity-or-version-hold');
});
