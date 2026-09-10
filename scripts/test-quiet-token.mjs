import { test } from 'node:test';
import assert from 'node:assert/strict';
import { quietTokenScreen } from './lib/pull/quiet-token.mjs';
import { readMarket } from './lib/pull/dexscreener.mjs';
import { REFRESH_POLICY, DAY } from './lib/refresh-policy.mjs';
import { SHARE_BAR_MIN_USD } from './lib/share-bar.mjs';
import { buildRelationships, relationshipIndex } from './lib/relationships.mjs';
import { addressesFor, carryStructureFacts, carryMarketFacts, carryActivityFacts, activityWindow, explorerReadRecord } from './pull.mjs';
import { createPullAttempt, finishPullAttempt } from './lib/pull/attempt.mjs';

const address = '0x' + 'a'.repeat(40), other = '0x' + 'b'.repeat(40);
const stamp = '2026-09-10T18:00:00.000Z', now = Date.parse(stamp);
const old = new Date(now - 40 * DAY).toISOString();
const rawPair = () => ({ chainId: 'robinhood', pairAddress: 'pool', baseToken: { address },
  liquidity: { usd: 1000 }, volume: { h24: 0 }, txns: { h24: { buys: 0, sells: 0 } } });
async function fixture(body = [rawPair()]) {
  const project = { slug: 'quiet', deployments: [{ chain: 'robinhood-chain', address, role: 'token' }] };
  const index = relationshipIndex(buildRelationships([project]));
  let evidence = null;
  const market = await readMarket({ tokenPairs: async () => body }, address,
    { pulledAt: stamp, onObservation: row => { evidence = row; } });
  const proxy = { type: 'none', implementation: null, admin: null };
  return { target: { slug: 'quiet', project, previous: { chain: 'robinhood-chain' },
    census: { identity: { entity_kind: 'token', status: 'provisional' } },
    refresh: { tier: 'quiet', seed: false, retry: false, queued: false, ignored: false,
      lastSuccessAt: old, ownActivityAt: old } }, entry: addressesFor(project, index)[0],
    market, evidence, rpc: { errors: [], is_contract: true, code_hash: 'abcd',
      proxy, owner: null, owner_type: 'none', unread: { proxy: false, owner: false } },
    previousAddress: { proxy: structuredClone(proxy), owner: null, owner_type: 'none' },
    previousRead: { code_hash: 'abcd' }, index, infrastructureReaders: new Map(), now };
}

test('complete raw zero-trade evidence screens an established own token after free checks', async () => {
  const f = await fixture(), before = structuredClone(f);
  assert.equal(quietTokenScreen(f).skip, true);
  assert.deepEqual(f, before);
  assert.equal(f.entry.chain, undefined, 'real pull address rows omit chain; canonical deployment supplies it');
  const withoutCallback = await readMarket({ tokenPairs: async () => [rawPair()] }, address, { pulledAt: stamp });
  assert.deepEqual(f.market, withoutCallback, 'scheduling evidence is ephemeral, not a new canonical field');
});

test('missing display counts may still be zero but cannot establish measured inactivity', async () => {
  for (const mutate of [p => { delete p.txns; }, p => { delete p.txns.h24.buys; },
    p => { p.txns.h24.buys = null; }, p => { p.txns.h24.sells = -1; },
    p => { p.txns.h24.sells = 0.5; }, p => { p.txns.h24.sells = '0'; },
    p => { delete p.volume.h24; }, p => { p.liquidity.usd = null; }]) {
    const pair = rawPair(); mutate(pair);
    const f = await fixture([rawPair(), pair]);
    assert.equal(f.evidence.complete, false); assert.equal(quietTokenScreen(f).skip, false);
  }
  const pair = rawPair(); delete pair.txns;
  const f = await fixture([pair]); assert.equal(f.market.trades_h24, 0);
  assert.equal(quietTokenScreen(f).skip, false);
});

test('wrong subject, quote-only matches, empty and malformed responses do not screen', async () => {
  for (const body of [null, {}, [], { pairs: [] }, [{ ...rawPair(), baseToken: { address: other }, quoteToken: { address } }],
    [{ ...rawPair(), chainId: 'ethereum' }], [{ ...rawPair(), pairAddress: '' }]]) {
    assert.equal(quietTokenScreen(await fixture(body)).skip, false);
  }
  const f = await fixture({ pairs: [rawPair(), { ...rawPair(), chainId: 'ethereum' }] });
  assert.equal(quietTokenScreen(f).skip, true, 'fallback filters other chains');
});

test('successful fallback provides fresh evidence; source failure provides none and stays retryable', async () => {
  const f = await fixture(); f.evidence = null;
  const options = { pulledAt: stamp, onObservation: e => { f.evidence = e; } };
  f.market = await readMarket({ tokenPairs: async () => { throw Error('timeout'); },
    tokensFallback: async () => ({ pairs: [rawPair()] }) }, address, options);
  assert.equal(quietTokenScreen(f).skip, true);
  f.evidence = null;
  f.market = await readMarket({ tokenPairs: async () => { throw Error('timeout'); },
    tokensFallback: async () => { throw Error('HTTP 503'); } }, address, options);
  assert.equal(quietTokenScreen(f).skip, false);
  const attempt = createPullAttempt(); attempt.record('market', f.market.errors);
  assert.equal(finishPullAttempt(attempt, { attemptedAt: stamp, lastSuccessAt: old }).retryable, true);
});

test('existing bar, actual trading, observation timestamps and quiet window bound screening', async () => {
  for (const mutate of [f => { f.market.liquidity_usd = SHARE_BAR_MIN_USD; },
    f => { f.market.liquidity_usd = null; }, f => { f.market.liquidity_usd = -1; },
    f => { f.market.trades_h24 = 1; }, f => { f.market.volume_h24 = 0.01; },
    f => { f.market.pulled_at = old; }, f => { f.evidence.observed_at = new Date(now + 1).toISOString(); },
    f => { f.evidence.token_address = other; }, f => { f.market.errors.push({ message: 'timeout' }); },
    f => { f.evidence.pair_count = 2; }, f => { f.target.refresh.lastSuccessAt = null; },
    f => { f.target.refresh.ownActivityAt = null; },
    f => { f.target.refresh.ownActivityAt = new Date(now - REFRESH_POLICY.quiet).toISOString(); },
    f => { f.target.refresh.ownActivityAt = new Date(now - REFRESH_POLICY.archiveAfter - 1).toISOString(); }]) {
    const f = await fixture(); mutate(f); assert.equal(quietTokenScreen(f).skip, false, String(mutate));
  }
});

test('seed, retry, queue, manual and non-token lanes cannot be screened', async () => {
  for (const mutate of [f => { f.force = true; }, ...['seed', 'retry', 'queued', 'ignored'].map(k => f => { f.target.refresh[k] = true; }),
    f => { f.target.refresh.tier = 'hot'; }, f => { f.target.refresh.tier = 'live'; },
    f => { f.target.refresh.review = { stopped: true }; }, f => { f.target.llamaSlug = 'protocol'; },
    ...['protocol', 'application', 'tool'].map(k => f => { f.target.census.identity.entity_kind = k; })]) {
    const f = await fixture(); mutate(f); assert.equal(quietTokenScreen(f).skip, false, String(mutate));
  }
});

test('identity/reference and shared-infrastructure exemptions use the canonical graph', async () => {
  for (const mutate of [f => { f.target.census.identity.status = 'conflicted'; },
    f => { f.target.previous.chain = 'ethereum'; }, f => { f.entry.role = 'factory'; },
    f => { f.target.project.deployments[0].label = 'pair quote'; },
    f => { f.index.get('robinhood-chain:' + address).identityConflict = true; },
    f => { f.index.get('robinhood-chain:' + address).dependencies = ['stock-tokens']; },
    f => { f.infrastructureReaders.set('robinhood-chain:' + address, f.target.slug); }]) {
    const f = await fixture(); mutate(f); assert.equal(quietTokenScreen(f).skip, false, String(mutate));
  }
});

test('changed or unknown code, proxy, ownership and RPC failures require normal deeper reads', async () => {
  for (const mutate of [f => { f.rpc.code_hash = null; }, f => { f.previousRead = null; },
    f => { f.rpc.code_hash = ''; f.previousRead.code_hash = ''; },
    f => { f.rpc.code_hash = 'changed'; }, f => { f.rpc.proxy.type = 'unknown'; },
    f => { f.rpc.proxy.implementation = other; }, f => { f.rpc.proxy.admin = other; },
    f => { f.rpc.unread.proxy = true; }, f => { f.rpc.unread.owner = true; },
    f => { f.rpc.owner = other; }, f => { f.rpc.owner_type = 'unknown'; },
    f => { f.rpc.is_contract = false; }, f => { f.rpc.errors.push({ message: 'HTTP 429' }); }]) {
    const f = await fixture(); mutate(f); assert.equal(quietTokenScreen(f).skip, false, String(mutate));
  }
});

test('screened evidence keeps structure/concentration/activity dates and real unknowns', async () => {
  const f = await fixture(); assert.equal(quietTokenScreen(f).skip, true);
  const record = explorerReadRecord({ kind: 'activity', address, status: 'unchanged',
    reason: quietTokenScreen(f).reason, checkedAt: stamp, previous: { checked_at: old } });
  assert.equal(record.credits, 0); assert.equal(record.stale_since, old);
  assert.match(record.reason, /deep facts retained/);
  const structure = { mint: 'unknown', mint_as_of: null, renounced: true, renounced_as_of: old,
    lp: [{ pair: 'pool', locked_share: 0, as_of: old }], errors: [{ step: 'mint', message: 'old HTTP 402' }] };
  assert.deepEqual(carryStructureFacts(null, structure), structure);
  const market = carryMarketFacts(f.market, { top10_share: 0.5, top10_as_of: old, errors: [] });
  assert.equal(market.pulled_at, stamp); assert.equal(market.top10_as_of, old);
  for (const txns of [null, 0, 5]) {
    const previous = { last_tx_at: old, txns_24h: txns, window_as_of: old, errors: [] };
    const row = activityWindow(carryActivityFacts({ txns_24h: null, errors: [] }, previous), previous,
      { measured: false, pulledAt: stamp });
    assert.equal(row.last_tx_at, old); assert.equal(row.txns_24h, txns);
    assert.equal(row.window_as_of, txns === null ? null : old);
  }
});
