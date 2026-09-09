import assert from 'node:assert/strict';
import { test } from 'node:test';
import { auditObservations } from './audit-observations.mjs';

const address = `0x${'ab'.repeat(20)}`;
const pool = `0x${'cd'.repeat(32)}`;
const at = '2026-09-09T00:00:00Z';
const doc = (slug, value = 0) => ({ slug, chain: 'robinhood-chain', pulled_at: at,
  addresses: [{ address, label: slug, role: 'factory', owner: null }],
  activity: { pulled_at: at, addresses: [{ address, label: slug, role: 'factory', txns_24h: value, errors: [] }] },
  market: { pulled_at: at, token_address: address, pairs: [{ pair_address: pool, volume_h24: value }] },
});

test('audit is deterministic, read-only and preserves project bindings', () => {
  const a = doc('a'), b = doc('b');
  b.addresses[0].role = 'implementation';
  b.addresses[0].address = `0x${'AB'.repeat(20)}`;
  const before = JSON.stringify([a,b]);
  const report = auditObservations([a,b]);
  assert.deepEqual(report, auditObservations([b,a]));
  assert.equal(JSON.stringify([a,b]), before);
  for (const kind of ['address','activity','market-pair']) {
    assert.equal(report.counts[kind].repeated_payload_rows, 1);
    assert.equal(report.counts[kind].shared_identities, 1);
    assert.ok(report.counts[kind].repeated_payload_bytes > 0);
  }
  assert.deepEqual(report.comparisons.find(g => g.kind === 'address').variants[0].references.map(r => r.role),
    ['factory','implementation']);
  assert.equal(report.counts.address.missing_measurement_time_rows, 2, 'refresh time is not ownership observation time');
});

test('same-date null versus zero stays a disagreement; undated facts stay unresolved', () => {
  const a = doc('a'), b = doc('b', null);
  b.addresses[0].owner = address;
  const r = auditObservations([a,b]);
  assert.equal(r.counts.activity.dated_disagreement_groups, 1);
  assert.equal(r.counts['market-pair'].dated_disagreement_groups, 1);
  assert.equal(r.counts.address.undated_variant_groups, 1);
  assert.equal(r.counts.address.dated_disagreement_groups, 0);
  assert.equal(r.counts.activity.repeated_payload_rows, 0);
});

test('dates and token perspectives partition comparisons, not identities', () => {
  const a = doc('a'), b = doc('b', 10);
  b.activity.pulled_at = '2026-09-08T00:00:00Z';
  b.market.token_address = `0x${'ef'.repeat(20)}`;
  const r = auditObservations([a,b]);
  assert.equal(r.counts.activity.comparison_groups, 2);
  assert.equal(r.counts.activity.dated_disagreement_groups, 0);
  assert.equal(r.counts['market-pair'].comparison_groups, 2);
  assert.equal(r.counts['market-pair'].shared_identities, 1);
});

test('activity row timestamps and explicit fresh markers override stale aggregates', () => {
  const a = doc('a'), b = doc('b');
  a.activity.stale_since = '2026-09-08T00:00:00Z';
  a.activity.addresses[0].stale_since = null;
  a.activity.window_as_of = '2026-09-08T00:00:00Z';
  a.activity.addresses[0].window_as_of = at;
  assert.equal(auditObservations([a,b]).counts.activity.repeated_payload_rows, 1);
  delete a.activity.addresses[0].stale_since;
  assert.equal(auditObservations([a,b]).counts.activity.dated_disagreement_groups, 1);
});

test('identifier shapes stay separate from deployment identity, chain and Solana case', () => {
  const a = doc('a'), b = doc('b');
  b.addresses[0].address = pool;
  b.market.pairs[0].pair_address = 'not-verified';
  const r = auditObservations([a,b]);
  assert.equal(r.counts.address.invalid_identity_rows, 1);
  assert.equal(r.counts['market-pair'].invalid_identity_rows, 1);
  b.chain = 'base'; b.addresses[0].address = address;
  assert.equal(auditObservations([a,b]).counts.address.identities, 2);
  a.chain = b.chain = 'solana';
  a.addresses[0].address = 'A'.repeat(32); b.addresses[0].address = 'a'.repeat(32);
  assert.equal(auditObservations([a,b]).counts.address.identities, 2);
});

test('unknown dates remain unknown; absent and explicit null payload fields do not collapse', () => {
  const a = doc('a'), b = doc('b');
  delete a.activity.pulled_at; b.activity.pulled_at = 'invalid';
  delete a.addresses[0].owner;
  const r = auditObservations([a,b]);
  assert.equal(r.counts.activity.missing_measurement_time_rows, 2);
  assert.equal(r.counts.activity.dated_disagreement_groups, 0);
  assert.equal(r.counts.address.undated_variant_groups, 1);
  assert.throws(() => auditObservations([{}]), /requires a slug/);
  assert.deepEqual(auditObservations([]).comparisons, []);
});
