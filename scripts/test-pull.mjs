#!/usr/bin/env node
// Unit tests for scripts/pull.mjs and scripts/lib/pull/*. No network: every HTTP call is a stub.
// Usage: node scripts/test-pull.mjs

import assert from "node:assert/strict";

import {
  requestWithRetry,
  requestJson,
  isRetryableStatus,
  backoffMs,
  challengeDelayMs,
  isBotChallenge,
  looksLikeHtml,
  mapWithConcurrency,
} from "./lib/pull/http.mjs";
import {
  decodeAddress,
  decodeStorageAddress,
  decodeUint,
  decodeAddressArray,
  hasCode,
  classifyProxy,
  classifyOwner,
  createRpcClient,
  readAddress as readRpc,
  SELECTOR,
  EIP1967_IMPLEMENTATION_SLOT,
  ZERO_ADDRESS,
} from "./lib/pull/rpc.mjs";
import {
  parseAddressResponse,
  parseTokenResponse,
  parseTransactionResponse,
  toInt,
  createBlockscoutClient,
  resolveBlockscoutConfig,
  createBlockscoutTracker,
  blockscoutChallengeGate,
  BLOCKSCOUT_BASE,
  BLOCKSCOUT_PUBLIC_REST_BASE,
  BLOCKSCOUT_PRO_REST_BASE,
  readAddress as readBlockscout,
} from "./lib/pull/blockscout.mjs";
import { findLlamaSlug, latestChainTvl, chainTotal24h, readProtocol } from "./lib/pull/llama.mjs";
import {
  buildLaunchpadIndex,
  excludedHolderAddresses,
  attributeCreator,
  launchpadSlugsFrom,
  KNOWN_LAUNCHER_DEPLOYERS,
} from "./lib/pull/attribution.mjs";
import {
  parseTokenDetails,
  parseHolderPage,
  shareOfSupply,
  clampShare,
  isBurnHolder,
  isPoolHolder,
  readTop10,
  parseVerifiedAbi,
  classifyMint,
  readMintAndRenounce,
  lockedHolderSummary,
  readLpLocks,
  LP_REASON,
} from "./lib/pull/token.mjs";
import { revenueDaily, seriesReplacement, writeSeries, readSeries } from "./lib/pull/series.mjs";
import {
  parsePair,
  parsePairs,
  aggregatePairs,
  topLiquidityPair,
  createDexscreenerClient,
  readMarket,
  emptyMarket,
} from "./lib/pull/dexscreener.mjs";
import {
  parseCounters,
  parseTransactionsPage,
  countRecentInbound,
  isLaunchMethod,
  readAddressActivity,
  aggregateActivity,
  toQuery,
} from "./lib/pull/activity.mjs";
import {
  orderDocument,
  createValidator,
  orderChainDocument,
  createChainValidator,
  createDiscoveryValidator,
  writeChainSeries,
  readChainSeries,
  toYaml,
  appendHistory,
  readHistory,
  deltaFrom,
  snapshotFrom,
  parseHistory,
} from "./lib/pull/write.mjs";
import {
  createRialtoClient,
  readRialto,
  rialtoMarketFor,
  volumeDisagreement,
  pairAssetFor,
  discoveryCandidates,
  readAllAssets,
  RIALTO_PAGES,
} from "./lib/pull/rialto.mjs";
import { addressesFor, mergeAddress, summaryLine, tokenAddressFor, countErrors, errorKey, memoizeClient, parseArgs, refreshedMarket } from "./pull.mjs";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

let failures = 0;
const tests = [];
const test = (name, fn) => tests.push([name, fn]);

const word = (hex) => hex.replace(/^0x/, "").padStart(64, "0");
const addressWord = (addr) => `0x${word(addr)}`;

/** Minimal fetch stub: `routes` maps a URL substring to { status, body, contentType } or a function. */
function stubFetch(routes, log = []) {
  return async (url, options = {}) => {
    log.push({ url, body: options.body ? JSON.parse(options.body) : null, headers: options.headers ?? {} });
    const key = Object.keys(routes).find((k) => url.includes(k));
    const route = key ? routes[key] : { status: 404, body: JSON.stringify({ message: "not found" }) };
    const resolved = typeof route === "function" ? await route(log.length, options) : route;
    return {
      ok: (resolved.status ?? 200) < 400,
      status: resolved.status ?? 200,
      text: async () => (typeof resolved.body === "string" ? resolved.body : JSON.stringify(resolved.body)),
      headers: { get: () => resolved.contentType ?? "application/json" },
    };
  };
}

/** An RPC stub keyed by method, then by the eth_call selector. */
function stubRpc(handlers, log = []) {
  return stubFetch(
    {
      "rpc.mainnet": (_n, options) => {
        const req = JSON.parse(options.body);
        let handler = handlers[req.method];
        if (req.method === "eth_call") handler = handlers[req.params[0].data] ?? handlers.eth_call;
        if (req.method === "eth_getStorageAt") handler = handlers[req.params[1]] ?? handlers.eth_getStorageAt;
        if (typeof handler === "function") return handler(req);
        if (handler === undefined) return { status: 200, body: { jsonrpc: "2.0", id: req.id, error: { message: "execution reverted" } } };
        return { status: 200, body: { jsonrpc: "2.0", id: req.id, result: handler } };
      },
    },
    log,
  );
}

const RIALTO_FIXTURE = JSON.parse(readFileSync(new URL("./fixtures/rialto.json", import.meta.url), "utf8"));

function rialtoRoutes() {
  return {
    "/api/router/tickers": { body: RIALTO_FIXTURE.tickers },
    "/api/router/tokens": { body: RIALTO_FIXTURE.tokens },
    "/api/market/robinhood-symbols": { body: RIALTO_FIXTURE.symbols },
    "/api/stats/assets/explorer": { body: RIALTO_FIXTURE.assets },
    "/api/stats/tvl/kpis": { body: RIALTO_FIXTURE.tvlKpis },
    "/api/stats/tvl/tvl-by-category-over-time": { body: RIALTO_FIXTURE.categoryTvlDaily },
    "/api/stats/tvl/tvl-by-category": { body: RIALTO_FIXTURE.tvlByCategory },
    "/api/stats/tvl/protocol-tvl-over-time": { body: RIALTO_FIXTURE.protocolTvlDaily },
    "/api/stats/tvl/protocol-tvl": { body: RIALTO_FIXTURE.protocolTvl },
    "/api/stats/onchain-economics/kpis": { body: RIALTO_FIXTURE.economicsKpis },
    "/api/stats/onchain-economics/daily-metrics": { body: RIALTO_FIXTURE.economicsDaily },
    "/api/stats/metrics/overview": { body: RIALTO_FIXTURE.activityDaily },
    "/api/stats/metrics/top-assets": { body: RIALTO_FIXTURE.topAssets },
    "/api/stats/metrics/volume-by-asset": { body: RIALTO_FIXTURE.volumeByAsset },
    "/api/stats/tokenization/stats": { body: RIALTO_FIXTURE.tokenization },
    "/api/stats/tokenization/total-value-tokenized-over-time": { body: RIALTO_FIXTURE.tokenizationDaily },
    "/api/stats/transfers/headline-stats": { body: RIALTO_FIXTURE.transfers },
    "/api/stats/mintburn/stats": { body: RIALTO_FIXTURE.mintburn },
    "/api/liquidity/spreads": { body: RIALTO_FIXTURE.liquidity },
  };
}

// --- owner() decode -------------------------------------------------------

test("decodes owner() return data to a lowercase address", () => {
  const data = addressWord("263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd");
  assert.equal(decodeAddress(data), "0x263ed295dafae1d9aadd6e56c4b6f9f38ee019dd");
});

test("owner() with empty returndata decodes to null", () => {
  assert.equal(decodeAddress("0x"), null);
  assert.equal(decodeAddress(""), null);
  assert.equal(decodeAddress("0x1234"), null);
});

test("owner() word with dirty top bytes decodes to null", () => {
  assert.equal(decodeAddress(`0x${"ff".repeat(12)}${"11".repeat(20)}`), null);
});

// --- EIP-1967 slot decode -------------------------------------------------

test("EIP-1967 zero slot decodes to none, a set slot decodes to eip1967", () => {
  assert.equal(decodeStorageAddress(`0x${"0".repeat(64)}`), null);
  assert.deepEqual(classifyProxy({ implementation: null, admin: null }), {
    type: "none",
    implementation: null,
    admin: null,
  });

  const impl = decodeStorageAddress(addressWord("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
  assert.equal(impl, "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  assert.deepEqual(classifyProxy({ implementation: impl, admin: null }), {
    type: "eip1967",
    implementation: impl,
    admin: null,
  });
  assert.equal(classifyProxy({ implementation: null, admin: null, failed: true }).type, "unknown");
});

// --- Safe detection -------------------------------------------------------

test("detects a Safe owner from stubbed getThreshold and getOwners", async () => {
  const contract = "0x1111111111111111111111111111111111111111";
  const safe = "0x263ed295dafae1d9aadd6e56c4b6f9f38ee019dd";
  const signers = [
    "0x2222222222222222222222222222222222222222",
    "0x3333333333333333333333333333333333333333",
    "0x4444444444444444444444444444444444444444",
  ];
  const ownersReturn =
    "0x" + word("20") + word("3") + signers.map((s) => word(s)).join("");

  const fetchImpl = stubRpc({
    eth_getCode: "0x6080604052",
    eth_getStorageAt: `0x${"0".repeat(64)}`,
    [SELECTOR.owner]: addressWord(safe),
    [SELECTOR.getThreshold]: `0x${word("2")}`,
    [SELECTOR.getOwners]: ownersReturn,
  });
  const client = createRpcClient({ deps: { fetchImpl, sleepImpl: async () => {} } });
  const out = await readRpc(client, contract);

  assert.equal(out.is_contract, true);
  assert.equal(out.owner, safe);
  assert.equal(out.owner_type, "safe");
  assert.equal(out.safe.threshold, 2);
  assert.deepEqual(out.safe.signers, signers);
  assert.deepEqual(out.proxy, { type: "none", implementation: null, admin: null });
  assert.deepEqual(out.errors, []);
});

test("a contract owner that is not a Safe stays owner_type contract", () => {
  assert.deepEqual(
    classifyOwner({ owner: "0x1111111111111111111111111111111111111111", ownerHasCode: true, threshold: null, signers: null }),
    { owner: "0x1111111111111111111111111111111111111111", owner_type: "contract", safe: null },
  );
});

test("an EOA owner, a renounced owner and a missing owner classify apart", () => {
  const eoa = "0x5555555555555555555555555555555555555555";
  assert.equal(classifyOwner({ owner: eoa, ownerHasCode: false }).owner_type, "eoa");
  assert.equal(classifyOwner({ owner: ZERO_ADDRESS, ownerHasCode: false }).owner_type, "none");
  assert.equal(classifyOwner({ owner: null }).owner_type, "none");
  assert.equal(classifyOwner({ owner: eoa, ownerHasCode: null }).owner_type, "unknown");
});

test("decodes uint and address[] returns, and rejects malformed ones", () => {
  assert.equal(decodeUint(`0x${word("2")}`), 2);
  assert.equal(decodeUint("0x"), null);
  assert.equal(decodeAddressArray("0x"), null);
  assert.deepEqual(decodeAddressArray("0x" + word("20") + word("0")), []);
  assert.equal(hasCode("0x"), false);
  assert.equal(hasCode("0x6080"), true);
});

// --- error isolation per address -----------------------------------------

test("an address whose RPC reads fail records errors and still returns a row", async () => {
  const fetchImpl = stubRpc({ eth_getCode: () => ({ status: 500, body: "upstream" }) });
  const client = createRpcClient({ deps: { fetchImpl, sleepImpl: async () => {}, attempts: 2 } });
  const out = await readRpc(client, "0x1111111111111111111111111111111111111111");

  assert.equal(out.is_contract, null);
  assert.equal(out.owner, null);
  assert.equal(out.owner_type, "none");
  assert.ok(out.errors.some((e) => e.step === "rpc" && /eth_getCode/.test(e.message)));
});

test("one failing address does not stop the others in the same slug", async () => {
  const good = { address: "0xaaa1111111111111111111111111111111111111", label: "good", role: "token" };
  const bad = { address: "0xbbb2222222222222222222222222222222222222", label: "bad", role: "vault" };
  const rows = await mapWithConcurrency([good, bad], 4, async (entry) => {
    if (entry.label === "bad") {
      return mergeAddress(entry, { is_contract: null, proxy: { type: "unknown", implementation: null, admin: null }, owner: null, owner_type: "unknown", safe: null, errors: [{ step: "rpc", message: "boom" }] }, null);
    }
    return mergeAddress(entry, { is_contract: true, proxy: { type: "none", implementation: null, admin: null }, owner: null, owner_type: "none", safe: null, errors: [] }, { holders: 62260, errors: [] });
  });

  assert.equal(rows.length, 2);
  assert.equal(rows[0].is_contract, true);
  assert.equal(rows[0].holders, 62260);
  assert.deepEqual(rows[0].errors, []);
  assert.equal(rows[1].errors[0].message, "boom");
});

test("a Cloudflare challenge is retried once, classified, and leaves the RPC row intact", async () => {
  const log = [];
  const waits = [];
  const tracker = createBlockscoutTracker();
  const fetchImpl = stubFetch({
    "/api/v2/addresses/": { status: 403, body: "<!doctype html><html>Just a moment...</html>", contentType: "text/html" },
  }, log);
  const client = createBlockscoutClient({ deps: {
    fetchImpl,
    sleepImpl: async (ms) => void waits.push(ms),
    attempts: 1,
    randomImpl: () => 0.25,
    onRequest: tracker.recordRequest,
    onChallenge: tracker.recordChallenge,
  } });
  const out = await readBlockscout(client, "0x1111111111111111111111111111111111111111");

  assert.equal(out.source_verified, null);
  assert.equal(out.contract_name, null);
  assert.equal(out.errors.length, 1);
  assert.equal(out.errors[0].step, "blockscout");
  assert.match(out.errors[0].message, /explorer served a bot challenge/);
  assert.equal(log.length, 2, "one challenge retry, even when ordinary attempts is one");
  assert.deepEqual(waits, [750]);
  assert.deepEqual(tracker.snapshot(), { credits: 2, challenges: 2 });
  assert.equal(isBotChallenge("<html><title>Just a moment...</title></html>"), true);
  assert.equal(isBotChallenge('{"a":1}', "application/json"), false);
  assert.equal(challengeDelayMs(() => 0.25), 750);
  assert.equal(looksLikeHtml("<!doctype html>", ""), true);
  assert.equal(looksLikeHtml('{"a":1}', "application/json"), false);
});

test("Blockscout selects PRO bearer auth with a key and the public browser fallback without it", async () => {
  const proLog = [];
  const pro = createBlockscoutClient({
    env: { BLOCKSCOUT_API_KEY: "proapi_test" },
    deps: { fetchImpl: stubFetch({ "/addresses/": { body: {} } }, proLog), attempts: 1 },
  });
  await pro.address("0x1111111111111111111111111111111111111111");
  assert.ok(proLog[0].url.startsWith(`${BLOCKSCOUT_PRO_REST_BASE}/addresses/`));
  assert.equal(proLog[0].headers.Authorization, "Bearer proapi_test");
  assert.equal(pro.config.addressConcurrency, 4);
  assert.equal(pro.config.requestsPerSecond, 5);

  const publicLog = [];
  const fallback = createBlockscoutClient({
    env: {},
    deps: { fetchImpl: stubFetch({ "/addresses/": { body: {} } }, publicLog), attempts: 1 },
  });
  await fallback.address("0x1111111111111111111111111111111111111111");
  assert.ok(publicLog[0].url.startsWith(`${BLOCKSCOUT_PUBLIC_REST_BASE}/addresses/`));
  assert.match(publicLog[0].headers["User-Agent"], /Mozilla/);
  assert.equal(publicLog[0].headers.Authorization, undefined);
  assert.equal(fallback.config.addressConcurrency, 2);

  const overridden = resolveBlockscoutConfig({
    env: { BLOCKSCOUT_API_KEY: "proapi_test", BLOCKSCOUT_API_BASE: "https://example.test/4663" },
  });
  assert.equal(overridden.restBase, "https://example.test/4663/api/v2");
});

test("the PRO bearer is never sent to a host other than api.blockscout.com", async () => {
  // The public explorer named explicitly: the key is held back and the browser identity is used.
  const publicLog = [];
  const publicBase = createBlockscoutClient({
    env: { BLOCKSCOUT_API_KEY: "proapi_test", BLOCKSCOUT_API_BASE: BLOCKSCOUT_BASE },
    deps: { fetchImpl: stubFetch({ "/addresses/": { body: {} } }, publicLog), attempts: 1 },
  });
  await publicBase.address("0x1111111111111111111111111111111111111111");
  assert.ok(publicLog[0].url.startsWith(`${BLOCKSCOUT_PUBLIC_REST_BASE}/addresses/`));
  assert.equal(publicLog[0].headers.Authorization, undefined, "no bearer off the PRO host");
  assert.match(publicLog[0].headers["User-Agent"], /Mozilla/);
  assert.equal(publicBase.config.apiKey, null);
  assert.equal(publicBase.config.isPro, false, "PRO allowances follow the header, not the key");
  assert.equal(publicBase.config.requestsPerSecond, 4);
  assert.equal(publicBase.config.addressConcurrency, 2);

  // A mirror, a proxy or a mistyped secret: same answer.
  const mirrorLog = [];
  const mirror = createBlockscoutClient({
    env: { BLOCKSCOUT_API_KEY: "proapi_test", BLOCKSCOUT_API_BASE: "https://example.test/4663" },
    deps: { fetchImpl: stubFetch({ "/addresses/": { body: {} } }, mirrorLog), attempts: 1 },
  });
  await mirror.address("0x1111111111111111111111111111111111111111");
  assert.equal(mirrorLog[0].url, "https://example.test/4663/api/v2/addresses/0x1111111111111111111111111111111111111111");
  assert.equal(mirrorLog[0].headers.Authorization, undefined);
  assert.equal(mirror.config.isPro, false);

  // A lookalike host does not count either — the match is the whole host, not a suffix.
  const lookalike = resolveBlockscoutConfig({
    env: { BLOCKSCOUT_API_KEY: "proapi_test", BLOCKSCOUT_API_BASE: "https://api.blockscout.com.evil.test/4663" },
  });
  assert.equal(lookalike.headers.Authorization, undefined);
  assert.equal(lookalike.isPro, false);

  // The PRO host itself, however it is spelled, still gets the bearer.
  for (const base of ["https://api.blockscout.com", "https://api.blockscout.com/4663", BLOCKSCOUT_PRO_REST_BASE]) {
    const scoped = resolveBlockscoutConfig({ env: { BLOCKSCOUT_API_KEY: "proapi_test", BLOCKSCOUT_API_BASE: base } });
    assert.equal(scoped.headers.Authorization, "Bearer proapi_test", base);
    assert.equal(scoped.isPro, true, base);
  }
});

test("a majority of explorer challenge responses makes the run gate nonzero", () => {
  assert.deepEqual(blockscoutChallengeGate({ credits: 3, challenges: 2 }), {
    failed: true,
    exitCode: 1,
    summary: "explorer bot wall: 2/3 Blockscout requests served a challenge",
  });
  assert.equal(blockscoutChallengeGate({ credits: 4, challenges: 2 }).exitCode, 0, "exactly half is allowed");
  assert.equal(blockscoutChallengeGate({ credits: 0, challenges: 0 }).exitCode, 0);
});

// --- retry and backoff ----------------------------------------------------

test("the retry helper backs off on 429 and succeeds on a later attempt", async () => {
  const waits = [];
  let calls = 0;
  const fetchImpl = stubFetch({
    "example.test": () => {
      calls++;
      return calls < 3 ? { status: 429, body: "slow down" } : { status: 200, body: { ok: true } };
    },
  });
  const res = await requestWithRetry(
    "https://example.test/x",
    {},
    { fetchImpl, sleepImpl: async (ms) => void waits.push(ms), attempts: 3 },
  );

  assert.equal(calls, 3);
  assert.equal(res.status, 200);
  assert.deepEqual(waits, [500, 1000]);
  assert.equal(isRetryableStatus(429), true);
  assert.equal(isRetryableStatus(503), true);
  assert.equal(isRetryableStatus(404), false);
  assert.deepEqual([backoffMs(1), backoffMs(2), backoffMs(3)], [500, 1000, 2000]);
});

test("the retry helper gives up after the configured attempts", async () => {
  let calls = 0;
  const fetchImpl = stubFetch({ "example.test": () => (calls++, { status: 503, body: "down" }) });
  const deps = { fetchImpl, sleepImpl: async () => {}, attempts: 3 };

  // The last response is handed back rather than swallowed, so the caller can report the status.
  const res = await requestWithRetry("https://example.test/x", {}, deps);
  assert.equal(calls, 3);
  assert.equal(res.status, 503);
  assert.equal(res.ok, false);

  // requestJson turns that final non-2xx into the error the pull modules record.
  await assert.rejects(() => requestJson("https://example.test/x", {}, deps), /HTTP 503/);

  // A transport failure that never yields a response throws instead.
  const dead = async () => {
    throw new Error("ECONNREFUSED");
  };
  await assert.rejects(
    () => requestWithRetry("https://example.test/x", {}, { ...deps, fetchImpl: dead }),
    /ECONNREFUSED after 3 attempts/,
  );
});

// --- Blockscout and DefiLlama parsing ------------------------------------

test("parses Blockscout address, token and transaction bodies", () => {
  const core = parseAddressResponse({
    is_contract: true,
    is_verified: true,
    name: "PonsLauncherToken",
    creation_transaction_hash: "0x1f54",
    creator_address_hash: "0x0c37a24f5d23a486fa692d1500881d698b1f77a4",
    token: { holders_count: "62260" },
  });
  // The creator rides along on this same body, so launchpad attribution never refetches it.
  assert.deepEqual(core, {
    is_contract: true,
    source_verified: true,
    contract_name: "PonsLauncherToken",
    creation_tx: "0x1f54",
    creator: "0x0c37a24f5d23a486fa692d1500881d698b1f77a4",
    is_token: true,
  });
  assert.equal(parseAddressResponse({}).creator, null);
  assert.equal(parseTokenResponse({ holders_count: "62260" }), 62260);
  assert.equal(parseTokenResponse({}), null);
  assert.equal(toInt("not a number"), null);
  assert.deepEqual(parseTransactionResponse({ block_number: 8963150, timestamp: "2026-07-13T20:42:21.000000Z" }), {
    created_block: 8963150,
    created_at: "2026-07-13T20:42:21.000Z",
  });
});

test("finds a DefiLlama slug in a source ledger and ignores chain-level links", () => {
  assert.equal(
    findLlamaSlug([
      { url: "https://defillama.com/chain/robinhood-chain" },
      { url: "https://defillama.com/protocol/pons" },
      { url: "https://api.llama.fi/summary/fees/pons?dataType=dailyFees" },
    ]),
    "pons",
  );
  assert.equal(findLlamaSlug([{ url: "https://api.llama.fi/v2/chains" }]), null);
  assert.equal(findLlamaSlug([]), null);
});

test("takes the Robinhood Chain slice, never the all-chain total", () => {
  const tvl = latestChainTvl({
    tvl: [{ date: 1, totalLiquidityUSD: 999999 }],
    chainTvls: { "Robinhood Chain": { tvl: [{ date: 1756771200, totalLiquidityUSD: 9208000 }] } },
  });
  assert.equal(tvl.value, 9208000);
  assert.equal(tvl.as_of, new Date(1756771200 * 1000).toISOString());
  assert.equal(latestChainTvl({ chainTvls: { "Robinhood Chain": { tvl: [] } } }), null);
  assert.equal(chainTotal24h({ total24h: 999, chainBreakdown: { "Robinhood Chain": { total24h: 4557472 } } }), 4557472);
  assert.equal(chainTotal24h({ total24h: 999, chainBreakdown: { Base: { total24h: 1 } } }), null);
  // No breakdown means no chain slice. total24h is the protocol across every chain it runs on, and
  // publishing it here would credit Robinhood Chain with Base's and Arbitrum's fees.
  assert.equal(chainTotal24h({ total24h: 999 }), null);
});

test("an all-chain total is never published as a Robinhood Chain figure", async () => {
  const bodies = {
    "/protocol/x": { chainTvls: {} },
    "/summary/fees/x?dataType=dailyFees": { total24h: 999 },
    "/summary/fees/x?dataType=dailyRevenue": { total24h: 999, totalDataChart: [[1788307200, 7]] },
    "/summary/dexs/x": { total24h: 999, chainBreakdown: { Base: { total24h: 12 } } },
  };
  const client = {
    protocolUrl: () => "/protocol/x",
    feesUrl: (_slug, dataType) => `/summary/fees/x?dataType=${dataType}`,
    dexsUrl: () => "/summary/dexs/x",
    get: async (url) => bodies[url],
  };
  const out = await readProtocol(client, "x", { asOf: "2026-09-02T00:00:00.000Z" });
  assert.deepEqual(out.metrics, []);
  assert.deepEqual(out.revenueSeries, []);
  const messages = out.errors.map((e) => e.message);
  assert.equal(out.errors.every((e) => e.step === "llama"), true);
  assert.match(messages.join("\n"), /fees_24h x: the response carries no chainBreakdown/);
  assert.match(messages.join("\n"), /revenue_24h x: the response carries no chainBreakdown/);
  assert.match(messages.join("\n"), /volume_24h x: Robinhood Chain is not one of the chains/);
  assert.match(messages.join("\n"), /revenue_daily x: no Robinhood Chain daily series/);
});

test("takes only the Robinhood Chain revenue series, sorted and capped", () => {
  const points = revenueDaily({
    totalDataChartBreakdown: [
      [1788307200, { Base: { adapter: 999 }, "Robinhood Chain": { v1: 4, v2: 6 } }],
      [1788220800, { "Robinhood Chain": { v1: 3 } }],
    ],
  });
  assert.deepEqual(points, [["2026-09-01", 3], ["2026-09-02", 10]]);
  // Same rule as chainTotal24h: an aggregate chart with no per-chain breakdown is every chain's
  // revenue, so it is not this chain's series.
  assert.deepEqual(revenueDaily({ totalDataChart: [[1788307200, 7]] }), []);
  assert.deepEqual(revenueDaily({ totalDataChartBreakdown: [[1788307200, { Base: 7 }]] }), []);
});

test("a shorter or empty read never replaces a committed revenue series", async () => {
  const dir = mkdtempSync(join(tmpdir(), "series-"));
  try {
    const long = [["2026-08-30", 1], ["2026-08-31", 2], ["2026-09-01", 3]];
    assert.equal((await seriesReplacement("pons", long, { dir })).write, true);
    await writeSeries("pons", long, { dir });
    assert.deepEqual(await readSeries("pons", { dir }), long);

    const shorter = await seriesReplacement("pons", [["2026-09-01", 3]], { dir });
    assert.equal(shorter.write, false);
    assert.match(shorter.error.message, /returned 1 daily points but 3 are already committed/);
    const wroteShorter = await writeSeries("pons", [["2026-09-01", 3]], { dir });
    assert.equal(wroteShorter.written, false);
    assert.deepEqual(await readSeries("pons", { dir }), long, "the committed series survives a short read");

    const emptied = await writeSeries("pons", [], { dir });
    assert.equal(emptied.written, false);
    assert.match(emptied.error.message, /kept the 3 already committed/);
    assert.deepEqual(await readSeries("pons", { dir }), long);

    // A protocol with no series at all gets no file, rather than a file that says nothing.
    const none = await writeSeries("delta", [], { dir });
    assert.equal(none.written, false);
    assert.match(none.error.message, /no series file was written/);
    assert.equal(await readSeries("delta", { dir }), null);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// --- Rialto Analytics: typed readers, rollups and joins -------------------

test("Rialto readers normalize every endpoint, cache URLs and send browser headers", async () => {
  const log = [];
  const client = createRialtoClient({
    base: "https://rialto.test",
    deps: { fetchImpl: stubFetch(rialtoRoutes(), log), sleepImpl: async () => {}, attempts: 1 },
  });

  assert.equal((await client.tickers()).length, 3);
  assert.equal((await client.tokens()).length, 6);
  assert.equal((await client.symbols())[0].ticker, "NVDA");
  assert.equal((await client.assetsPage()).data[0].value, 5000);
  assert.equal((await client.tvlKpis()).total_tracked_usd, 1000);
  assert.equal((await client.tvlByCategory()).length, 2);
  assert.equal((await client.protocolTvl())[0].share, 0.7);
  assert.equal((await client.protocolTvlDaily())[0].date, "2026-09-02");
  assert.equal((await client.categoryTvlDaily()).length, 2);
  assert.equal((await client.economicsKpis()).latest_day, "2026-09-02");
  assert.equal((await client.economicsDaily()).at(-1).fee_revenue_usd, 20);
  assert.equal((await client.activityDaily()).at(-1).active_wallets, 4);
  assert.equal((await client.topAssets())[0].volume_usd, 100);
  assert.equal((await client.volumeByAsset())[0].assets[0].token_symbol, "AI");
  assert.equal((await client.tokenization()).net_minting, true);
  assert.equal((await client.tokenizationDaily())[0].value_usd, 9000);
  assert.equal((await client.transfers()).all_time_transfers, 1000);
  assert.equal((await client.mintburn()).cumulative_net_usd, 60);
  assert.equal((await client.liquidity()).prices[0].price_usd, 2500);
  assert.equal((await client.liquidity()).prices[0].volume_24h_usd, 12000, "the published per-token 24h USD volume is kept");

  await client.tickers();
  assert.equal(log.filter((entry) => entry.url.endsWith("/api/router/tickers")).length, 1, "the second read is cached");
  const tickerRequest = log.find((entry) => entry.url.endsWith("/api/router/tickers"));
  assert.equal(tickerRequest.headers.Accept, "application/json, text/plain, */*");
  assert.equal(tickerRequest.headers.Referer, "https://rialto.test/markets");
  assert.match(tickerRequest.headers["User-Agent"], /Chrome/);
});

test("Rialto builds nullable chain blocks, 7d and 30d sums, and guarded daily series", async () => {
  const client = createRialtoClient({
    base: "https://rialto.test",
    deps: { fetchImpl: stubFetch(rialtoRoutes()), sleepImpl: async () => {}, attempts: 1 },
  });
  const out = await readRialto(client, { pulledAt: "2026-09-03T04:00:00.000Z" });
  assert.equal(out.chain.tvl.total_tracked_usd, 1000);
  assert.equal(out.chain.activity.daily_volume_usd.latest, 40);
  assert.equal(out.chain.activity.daily_volume_usd.sum_7d, 70);
  assert.equal(out.chain.activity.daily_volume_usd.sum_30d, 70);
  assert.deepEqual(out.series.volume_daily, [["2026-09-01", 30], ["2026-09-02", 40]]);
  assert.deepEqual(out.series.fee_revenue_daily, [["2026-09-01", 10], ["2026-09-02", 20]]);
  assert.deepEqual(createChainValidator()(orderChainDocument(out.chain)), []);

  const dir = mkdtempSync(join(tmpdir(), "rialto-series-"));
  const path = join(dir, "chain.json");
  try {
    await writeChainSeries(out.series, { path });
    const shorter = await writeChainSeries({ ...out.series, volume_daily: [["2026-09-02", 40]] }, { path });
    assert.deepEqual(shorter.kept, [{ key: "volume_daily", incoming: 1, existing: 2 }]);
    assert.deepEqual((await readChainSeries({ path })).volume_daily, out.series.volume_daily);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("a failed Rialto endpoint leaves nulls and a block-local reason", async () => {
  const routes = rialtoRoutes();
  routes["/api/stats/tvl/kpis"] = { status: 403, body: "forbidden" };
  const client = createRialtoClient({
    base: "https://rialto.test",
    deps: { fetchImpl: stubFetch(routes), sleepImpl: async () => {}, attempts: 1 },
  });
  const out = await readRialto(client, { pulledAt: "2026-09-03T04:00:00.000Z" });
  assert.equal(out.chain.tvl.total_tracked_usd, null);
  assert.equal(out.chain.tvl.stablecoin_usd, null);
  assert.match(out.chain.tvl.errors.map((error) => error.message).join("\n"), /HTTP 403/);
  assert.deepEqual(createChainValidator()(orderChainDocument(out.chain)), []);
});

test("a failed asset-explorer page keeps the pages already read", async () => {
  const routes = { "explorer?page=2": { status: 500, body: "boom" }, ...rialtoRoutes() };
  routes["/api/stats/assets/explorer"] = { body: { ...RIALTO_FIXTURE.assets, nextPage: 2 } };
  const client = createRialtoClient({
    base: "https://rialto.test",
    deps: { fetchImpl: stubFetch(routes), sleepImpl: async () => {} },
  });
  const errors = [];
  const assets = await readAllAssets(client, { errors });
  assert.equal(assets.length, 3, "page 1 survives page 2 failing");
  assert.equal(errors.length, 1);
  assert.match(errors[0].message, /^page 2: /);
});

test("Rialto cross-checks volume conservatively and resolves a stock-paired asset", async () => {
  const client = createRialtoClient({
    base: "https://rialto.test",
    deps: { fetchImpl: stubFetch(rialtoRoutes()), sleepImpl: async () => {}, attempts: 1 },
  });
  const { reference } = await readRialto(client, { pulledAt: "2026-09-03T04:00:00.000Z" });
  const market = rialtoMarketFor("0x3333333333333333333333333333333333333333", reference, { asOf: "2026-09-03T04:00:00.000Z" });
  assert.equal(market.volume_24h_usd, 7500, "the published per-token figure, not the sum of the priced legs");
  assert.equal(market.volume_note, null);
  assert.equal(market.pairs[0].volume_24h_usd, 5000, "the priced leg stays as detail: 2 WETH at the sourced $2,500");
  assert.deepEqual(volumeDisagreement(2000, 5000), { dexscreener_usd: 2000, rialto_usd: 5000 });
  assert.equal(volumeDisagreement(2501, 5000), null, "the threshold is more than 2x, not 2x or less");

  // A token Rialto does not publish a 24h figure for is never compared against one that is.
  const unpriced = rialtoMarketFor("0x1111111111111111111111111111111111111111", reference);
  assert.equal(unpriced.volume_24h_usd, null);
  assert.match(unpriced.volume_note, /liquidity\/spreads has no price row/);
  assert.equal(volumeDisagreement(500000, unpriced.volume_24h_usd), null, "an absence is not a disagreement");

  const asset = pairAssetFor(
    { themes: ["stock-paired:nvda"] },
    { tree: { primary: "rwa-products/stock-paired-token" } },
    { token_address: "0x1111111111111111111111111111111111111111", pairs: [{ quote_symbol: "NVDA" }] },
    null,
    reference,
  );
  assert.equal(asset.ticker, "NVDA");
  assert.equal(asset.tokenized_value_usd, 5000);
  assert.equal(asset.tokenized_shares, 50);
  assert.equal(asset.source_url, RIALTO_PAGES.tokenization);
});

test("a pair quoted in WETH, ETH or USDG is not a tokenized pair asset", async () => {
  const client = createRialtoClient({
    base: "https://rialto.test",
    deps: { fetchImpl: stubFetch(rialtoRoutes()), sleepImpl: async () => {} },
  });
  const { reference } = await readRialto(client, { pulledAt: "2026-09-03T04:00:00.000Z" });
  const census = { tree: { primary: "rwa-products/stock-paired-token" } };
  for (const quote of ["WETH", "ETH", "USDG"]) {
    assert.equal(
      pairAssetFor({}, census, { token_address: "0x3333333333333333333333333333333333333333", pairs: [{ quote_symbol: quote }] }, null, reference),
      null,
      `${quote} is listed as a token, not as a tokenized stock`,
    );
  }
  // The Rialto counter-asset route is filtered the same way: an ETH leg resolves to nothing.
  assert.equal(
    pairAssetFor({}, census, { token_address: "0x6666666666666666666666666666666666666666" },
      { pairs: [{ base: "0x6666666666666666666666666666666666666666", target: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" }] }, reference),
    null,
  );
  assert.equal(
    pairAssetFor({}, census, { token_address: "0x1111111111111111111111111111111111111111", pairs: [{ quote_symbol: "NVDA" }] }, null, reference).ticker,
    "NVDA",
    "a real tokenized stock still resolves without a theme",
  );
});

test("Rialto discovery excludes census names, stocks and stables and keeps first_seen", async () => {
  const client = createRialtoClient({
    base: "https://rialto.test",
    deps: { fetchImpl: stubFetch(rialtoRoutes()), sleepImpl: async () => {}, attempts: 1 },
  });
  const { reference } = await readRialto(client, { pulledAt: "2026-09-03T04:00:00.000Z" });
  const projects = new Map([["artificial-inu", {
    name: "Artificial Inu", symbol: "AI",
    deployments: [{ address: "0x1111111111111111111111111111111111111111" }],
  }]]);
  const candidates = discoveryCandidates({
    reference,
    census: [{ slug: "artificial-inu" }],
    projects,
    existing: [{ address: "0x3333333333333333333333333333333333333333", first_seen: "2026-09-01T00:00:00.000Z" }],
    pulledAt: "2026-09-03T04:00:00.000Z",
  });
  assert.equal(candidates.some((row) => row.symbol === "AI"), false, "a census name");
  assert.equal(candidates.some((row) => row.symbol === "NVDA"), false, "a tokenized stock");
  assert.equal(candidates.some((row) => row.symbol === "USDG"), false, "a stablecoin");
  // The explorer's own vocabulary, which says neither "stock" nor "etf" for either of these.
  assert.equal(candidates.some((row) => row.symbol === "SHY"), false, "US Treasuries is a tokenized RWA");
  assert.equal(candidates.some((row) => row.symbol === "GLD"), false, "Commodities is a tokenized RWA");
  assert.equal(candidates.some((row) => row.address === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"), false, "native ETH is a sentinel, not a token");
  // robinhood-symbols lists plain tokens too; being listed there is not being a tokenized stock.
  const hoodrat = candidates.find((row) => row.symbol === "HOODRAT");
  assert.ok(hoodrat, "a category-token symbol still reaches discovery");
  assert.equal(hoodrat.rialto_volume_24h_usd, 3300);
  const discovered = candidates.find((row) => row.symbol === "NEW");
  assert.equal(discovered.first_seen, "2026-09-01T00:00:00.000Z");
  assert.equal(discovered.rialto_volume_24h_usd, 7500, "Rialto's published figure, not a router leg");
  assert.deepEqual(createDiscoveryValidator()({
    pulled_at: "2026-09-03T04:00:00.000Z", candidates, errors: [],
  }), []);
});

test("--source rialto asks for the fast refresh, and only for a source that exists", () => {
  assert.equal(parseArgs(["--source", "rialto"]).rialtoOnly, true);
  assert.equal(parseArgs(["--source=rialto"]).rialtoOnly, true);
  assert.equal(parseArgs(["--rialto-only"]).rialtoOnly, true);
  assert.equal(parseArgs([]).rialtoOnly, false);
  assert.throws(() => parseArgs(["--source", "blockscout"]), /--source takes one of: rialto/);
  assert.throws(() => parseArgs(["--rpc-only", "--rialto-only"]), /opposite runs/);
});

test("the Rialto refresh replaces its own two sources and carries the rest of the file through", async () => {
  const client = createRialtoClient({
    base: "https://rialto.test",
    deps: { fetchImpl: stubFetch(rialtoRoutes()), sleepImpl: async () => {} },
  });
  const { reference } = await readRialto(client, { pulledAt: "2026-09-04T04:00:00.000Z" });
  const previous = {
    token_address: "0x3333333333333333333333333333333333333333",
    pulled_at: "2026-09-01T00:00:00.000Z",
    pairs: [{ dex: "uniswap", quote_symbol: "WETH" }],
    volume_h24: 11, liquidity_usd: 1, trades_h24: 2, price_usd: 3, price_change_h24: 4, fdv: 5,
    first_pair_at: null,
    top10_share: 0.31, top10_share_ex_pools: 0.2, burned_share: 0.1, top10_as_of: "2026-09-01T00:00:00.000Z",
    launchpad: { slug: "foxpad", via: "factory", address: "0x9999999999999999999999999999999999999999" },
    rialto: null, pair_asset: null, volume_disagreement: null,
    errors: [
      { step: "launchpad", message: "creator did not match a launchpad factory" },
      { step: "dexscreener", message: "stale" },
      { step: "rialto", message: "stale" },
    ],
  };
  const rialtoMarket = rialtoMarketFor(previous.token_address, reference, { asOf: "2026-09-04T04:00:00.000Z" });
  const market = refreshedMarket(previous, {
    fresh: { ...previous, pulled_at: "2026-09-04T04:00:00.000Z", volume_h24: 4000, errors: [] },
    rialtoMarket,
    project: {},
    censusRow: { tree: { primary: "trading/dex" } },
    reference,
    rialtoErrors: [],
  });

  assert.equal(market.top10_share, 0.31, "the Blockscout walk is not part of this read");
  assert.equal(market.launchpad.slug, "foxpad");
  assert.equal(market.top10_as_of, "2026-09-01T00:00:00.000Z", "and keeps its own as-of");
  assert.equal(market.volume_h24, 4000);
  assert.equal(market.rialto.volume_24h_usd, 7500);
  assert.equal(market.pair_asset, null, "a trading name has no tokenized pair asset");
  assert.deepEqual(market.volume_disagreement, null, "4,000 against 7,500 is under 2x");
  assert.deepEqual(
    market.errors.map((error) => error.step),
    ["launchpad"],
    "the stale reasons from both refreshed sources are dropped, the rest kept",
  );

  // A name Rialto does not carry gets no DexScreener read, so its figures stay as they were.
  const untouched = refreshedMarket(previous, {
    fresh: null, rialtoMarket: null, project: {}, censusRow: {}, reference, rialtoErrors: [],
  });
  assert.equal(untouched.volume_h24, 11);
  assert.equal(untouched.pulled_at, "2026-09-01T00:00:00.000Z");
  assert.equal(untouched.rialto, null);
  assert.deepEqual(untouched.errors.map((error) => error.step), ["launchpad", "dexscreener"]);
});

// --- token concentration, attribution and structure ----------------------

test("computes top-10 supply share and excludes pools and lockers", async () => {
  const pair = "0x1111111111111111111111111111111111111111";
  const locker = "0x2222222222222222222222222222222222222222";
  const items = [pair, locker, ...Array.from({ length: 8 }, (_, i) => `0x${String(i + 3).padStart(40, "0")}`)]
    .map((hash) => ({ address: { hash }, value: "10" }));
  const client = {
    token: async () => ({ total_supply: "1000", type: "ERC-20" }),
    tokenHolders: async () => ({ items }),
  };
  const out = await readTop10(client, "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", {
    pulledAt: "2026-09-02T00:00:00.000Z",
    excluded: new Set([locker]),
    pairAddresses: [pair],
  });
  assert.equal(out.top10_share, 0.1);
  assert.equal(out.top10_share_ex_pools, 0.08);
  assert.equal(out.burned_share, 0);
  assert.equal(out.top10_as_of, "2026-09-02T00:00:00.000Z");
  assert.deepEqual(out.errors, []);
  assert.deepEqual(parseTokenDetails({ total_supply: "10", type: "ERC-20" }), { total_supply: "10", type: "ERC-20" });
  assert.equal(parseHolderPage({ items }).length, 10);
  assert.equal(shareOfSupply([{ value: "1" }], "0"), null);
});

test("burned supply is not concentration: it leaves both sides of the ratio", async () => {
  // Shaped like PONS: 0x…dEaD holds 30% of supply, then ten live holders of 1% each.
  const dead = "0x000000000000000000000000000000000000dEaD";
  const items = [
    { address: { hash: dead, is_contract: false, metadata: { tags: [{ name: "Null: 0x00...dEaD" }] } }, value: "300" },
    ...Array.from({ length: 12 }, (_, i) => ({
      address: { hash: `0x${String(i + 1).padStart(40, "0")}`, is_contract: false },
      value: "10",
    })),
  ];
  const client = {
    token: async () => ({ total_supply: "1000", type: "ERC-20" }),
    tokenHolders: async () => ({ items }),
  };
  const out = await readTop10(client, "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", {
    pulledAt: "2026-09-02T00:00:00.000Z",
  });
  assert.equal(out.burned_share, 0.3);
  // Ten live holders of 10 against 700 of circulating supply, not 400/1000 with the burn on top.
  assert.equal(Number(out.top10_share.toFixed(6)), 0.142857);
  assert.equal(Number(out.top10_share_ex_pools.toFixed(6)), 0.142857);
  assert.deepEqual(out.errors, []);
  assert.equal(isBurnHolder(parseHolderPage({ items })[0]), true);
  assert.equal(isBurnHolder(parseHolderPage({ items })[1]), false);
  assert.equal(isBurnHolder({ address: "0x1", name: "Burn Address" }), true);
  assert.equal(isBurnHolder({ address: "0x1", name: "TokenBurner" }), false, "a burner calls a burn, it is not one");
});

test("Uniswap v4 liquidity leaves ex-pools even though it is not a pair address", async () => {
  // Shaped like Artificial Inu: the v4 singleton holds the pool's tokens under its own address, so
  // market.pairs — which only ever carries pair addresses and pool ids — cannot exclude it.
  const poolManager = "0x8366a39CC670B4001A1121B8F6A443A643e40951";
  const items = [
    { address: { hash: poolManager, name: "PoolManager", is_contract: true }, value: "30" },
    ...Array.from({ length: 11 }, (_, i) => ({
      address: { hash: `0x${String(i + 1).padStart(40, "0")}`, is_contract: false },
      value: "10",
    })),
  ];
  const client = {
    token: async () => ({ total_supply: "1000", type: "ERC-20" }),
    tokenHolders: async () => ({ items }),
  };
  const out = await readTop10(client, "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", {
    pulledAt: "2026-09-02T00:00:00.000Z",
    pairAddresses: [],
  });
  assert.equal(out.top10_share, 0.12);
  assert.equal(out.top10_share_ex_pools, 0.1, "the ten largest non-pool holders, the manager dropped");
  assert.equal(isPoolHolder({ address: poolManager.toLowerCase(), name: null, is_contract: true }), true);
  assert.equal(isPoolHolder({ address: "0x1", name: "UniswapV3Pool", is_contract: true }), true);
  assert.equal(isPoolHolder({ address: "0x1", name: "PoolManager", is_contract: false }), false);
  assert.equal(isPoolHolder({ address: "0x1", name: null, is_contract: true }), false);
});

test("a share outside 0-1 is clamped and reported, never left to sink the document", async () => {
  assert.deepEqual(clampShare(1.02), { value: 1, clamped: true });
  assert.deepEqual(clampShare(-0.01), { value: 0, clamped: true });
  assert.deepEqual(clampShare(0.5), { value: 0.5, clamped: false });
  assert.deepEqual(clampShare(null), { value: null, clamped: false });

  // A total supply read moments before a burn can be smaller than the balances read after it.
  const client = {
    token: async () => ({ total_supply: "100", type: "ERC-20" }),
    tokenHolders: async () => ({ items: [{ address: { hash: `0x${"1".repeat(40)}` }, value: "150" }] }),
  };
  const out = await readTop10(client, "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", { pulledAt: "2026-09-02T00:00:00.000Z" });
  assert.equal(out.top10_share, 1);
  assert.match(out.errors.map((e) => e.message).join("\n"), /exceeded the circulating supply read/);
});

test("only launchpads are attributed, and shared infrastructure says so", () => {
  const factory = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const locker = "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
  const create3 = "0xdddddddddddddddddddddddddddddddddddddddd";
  const vaultFactory = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
  const docs = [
    {
      slug: "pons",
      addresses: [
        { address: factory, role: "factory", label: "Pons factory" },
        { address: create3, role: "factory", label: "Create3Factory (app JS chainId 4663 map)" },
        { address: locker, role: "vault", label: "Launch locker" },
      ],
    },
    // Downto is a redeemable basket, not a launchpad; its deployment helpers launch nothing.
    { slug: "downto", addresses: [{ address: vaultFactory, role: "factory", label: "DiamondPackageCallBackFactory" }] },
  ];
  const census = [
    { slug: "pons", tree: { primary: "launch/bonding-curve" } },
    { slug: "downto", tree: { primary: "rwa-products/redeemable-basket", secondary: ["launch/graduation-token"] } },
    { slug: "artificial-inu", tree: { primary: "rwa-products/stock-paired-token" } },
  ];
  assert.deepEqual([...launchpadSlugsFrom(census)], ["pons"]);

  const index = buildLaunchpadIndex(docs, { known: [], launchpadSlugs: launchpadSlugsFrom(census) });
  assert.deepEqual(attributeCreator(factory.toUpperCase().replace("0X", "0x"), index), {
    slug: "pons", via: "factory", address: factory, shared: false,
  });
  assert.equal(attributeCreator(create3, index), null, "a CREATE3 helper deploys anything for anyone");
  assert.equal(attributeCreator(vaultFactory, index), null, "role: factory on a non-launchpad is not a launch");
  assert.equal(attributeCreator("0xcccccccccccccccccccccccccccccccccccccccc", index), null);
  // Fail-closed: with no launchpad set, project addresses cannot be attributed at all.
  assert.equal(attributeCreator(factory, buildLaunchpadIndex(docs, { known: [] })), null);

  // The Doppler factory deploys for everyone on that stack, so LONG is the operator, not the launcher.
  const doppler = KNOWN_LAUNCHER_DEPLOYERS.find((row) => row.label === "DopplerERC20V1Factory");
  const withKnown = buildLaunchpadIndex([], { launchpadSlugs: new Set() });
  assert.deepEqual(attributeCreator(doppler.address, withKnown), {
    slug: "long", via: "shared-factory", address: doppler.address, shared: true,
  });

  assert.deepEqual([...excludedHolderAddresses(docs)], [locker]);
  assert.deepEqual(
    [...excludedHolderAddresses([{ slug: "pons", addresses: [{ address: factory, role: "other", label: "v2 launch locker (V2LaunchLocker)" }] }])],
    [factory],
    "a lock-labelled address counts even when its role is not vault",
  );
});

test("classifies mint and renounce only from a verified ABI and an owner read", async () => {
  const abi = { is_verified: true, abi: [{ type: "function", name: "mint", stateMutability: "nonpayable" }] };
  assert.equal(parseVerifiedAbi(abi).verified, true);
  assert.deepEqual(classifyMint(parseVerifiedAbi(abi), "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), {
    mint: "owner-can-mint", error: null,
  });
  assert.equal(classifyMint(parseVerifiedAbi({ abi: null }), null).mint, "unknown");
  assert.equal(
    classifyMint(parseVerifiedAbi({ is_verified: true, abi: [{ type: "function", name: "transfer", stateMutability: "nonpayable" }] }), null).mint,
    "no-mint-function",
  );

  // SwapHood's token has all three: only the first one creates supply.
  const swaphood = parseVerifiedAbi({
    is_verified: true,
    abi: [
      { type: "function", name: "mint", stateMutability: "nonpayable" },
      { type: "function", name: "minters", stateMutability: "view" },
      { type: "function", name: "setMinters", stateMutability: "nonpayable" },
    ],
  });
  assert.equal(classifyMint(swaphood, "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").mint, "owner-can-mint");

  // A registry of minters and a "has it minted yet" flag are reads, not mints.
  const viewsOnly = parseVerifiedAbi({
    is_verified: true,
    abi: [
      { type: "function", name: "minters", stateMutability: "view" },
      { type: "function", name: "minted", stateMutability: "view" },
      { type: "function", name: "mintingFinished", stateMutability: "view" },
      { type: "function", name: "mint", stateMutability: "view" },
    ],
  });
  assert.equal(classifyMint(viewsOnly, "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").mint, "no-mint-function");
  assert.equal(
    classifyMint(parseVerifiedAbi({ is_verified: true, abi: [{ type: "function", name: "mintTo", stateMutability: "payable" }] }), "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").mint,
    "owner-can-mint",
  );

  const out = await readMintAndRenounce(
    { smartContract: async () => ({ is_verified: true, abi: [{ type: "function", name: "transfer", stateMutability: "nonpayable" }] }) },
    "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    ZERO_ADDRESS,
  );
  assert.equal(out.mint, "no-mint-function");
  assert.equal(out.renounced, true);
  assert.deepEqual(out.errors, []);
});

test("reads ERC-20 LP locks and gives each unread pair its own reason", async () => {
  const pair = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const locker = "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
  const poolId = `0x${"1".repeat(64)}`;
  const missing = "0xdddddddddddddddddddddddddddddddddddddddd";
  const broken = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
  const noSupply = "0xffffffffffffffffffffffffffffffffffffffff";
  const bodies = {
    [pair]: { type: "ERC-20", total_supply: "100" },
    [noSupply]: { type: "ERC-20", total_supply: null },
  };
  const client = {
    token: async (address) => {
      if (address === missing) throw new Error("tokens: HTTP 404");
      if (address === broken) throw new Error("tokens: HTTP 503");
      return bodies[address];
    },
    tokenHolders: async () => ({ items: [
      { address: { hash: ZERO_ADDRESS, is_contract: false }, value: "20" },
      { address: { hash: locker, is_contract: true }, value: "30" },
      { address: { hash: "0xcccccccccccccccccccccccccccccccccccccccc", is_contract: false }, value: "50" },
    ] }),
  };
  const out = await readLpLocks(client, [
    { pair_address: pair },
    { pair_address: poolId },
    { pair_address: missing },
    { pair_address: broken },
    { pair_address: noSupply },
  ], { lockers: new Set([locker]) });
  assert.deepEqual(out.lp[0], { pair, locked_share: 0.5, holder_kind: "burn-and-locker", reason: null });
  // Each of these used to say "v3/v4 position; not checked", whatever had actually happened.
  assert.deepEqual(out.lp[1], { pair: poolId, locked_share: null, holder_kind: null, reason: LP_REASON.poolId });
  assert.deepEqual(out.lp[2], { pair: missing, locked_share: null, holder_kind: null, reason: LP_REASON.notAToken });
  assert.deepEqual(out.lp[3], { pair: broken, locked_share: null, holder_kind: null, reason: LP_REASON.detailsUnavailable });
  assert.deepEqual(out.lp[4], { pair: noSupply, locked_share: null, holder_kind: null, reason: LP_REASON.noSupply });
  assert.equal(new Set(out.lp.map((row) => row.reason)).size, 5, "every reason names a different condition");
});

test("an unread LP lock is null with a reason, and zero is only written for plain accounts", () => {
  const eoa = (hash, value) => ({ address: hash, value, is_contract: false, tags: [] });
  const contract = (hash, value) => ({ address: hash, value, is_contract: true, tags: [] });

  // Every holder is a plain account, so nothing among them could be a locker: zero is a real read.
  assert.deepEqual(lockedHolderSummary([eoa("0xa", "60"), eoa("0xb", "40")], "100", new Set()), {
    locked_share: 0, holder_kind: "none", reason: null, clamped: false,
  });
  // One unnamed contract among them could be a locker this run has never located; 0 would assert
  // "nothing is locked" on no evidence, which is what 16 of the LP rows on the branch were doing.
  assert.deepEqual(lockedHolderSummary([eoa("0xa", "60"), contract("0xb", "40")], "100", new Set()), {
    locked_share: null, holder_kind: null, reason: LP_REASON.noneFound, clamped: false,
  });
  assert.deepEqual(lockedHolderSummary([], "100", new Set()), {
    locked_share: null, holder_kind: null, reason: LP_REASON.noHolders, clamped: false,
  });
  // A pulled vault counts as a locker even though schema/shared.schema.json has no locker role.
  assert.deepEqual(lockedHolderSummary([contract("0xb", "40"), eoa("0xa", "60")], "100", new Set(["0xb"])), {
    locked_share: 0.4, holder_kind: "locker", reason: null, clamped: false,
  });
  assert.equal(lockedHolderSummary([eoa("0xa", "150")], "100", new Set(["0xa"])).clamped, true);
});

// --- census selection and schema -----------------------------------------

test("selects only real Robinhood Chain addresses, deduplicated", () => {
  const rows = addressesFor({
    deployments: [
      { label: "token", chain: "robinhood-chain", address: "0xAAA1111111111111111111111111111111111111", role: "token" },
      { label: "dup", chain: "robinhood-chain", address: "0xaaa1111111111111111111111111111111111111", role: "other" },
      { label: "placeholder", chain: "robinhood-chain", address: "not-verified", role: "token" },
      { label: "elsewhere", chain: "base", address: "0xBBB2222222222222222222222222222222222222", role: "token" },
    ],
  });
  assert.equal(rows.length, 1);
  assert.equal(rows[0].label, "token");
});

test("a pull shares duplicate client reads, including mixed-case addresses", async () => {
  let calls = 0;
  const client = memoizeClient({
    lookup: async (tokenAddress) => ({ tokenAddress, call: ++calls }),
  });
  const upper = "0xAAA1111111111111111111111111111111111111";
  const lower = upper.toLowerCase();
  const [first, same] = await Promise.all([client.lookup(upper), client.lookup(lower)]);
  assert.equal(first, same, "concurrent duplicates share the same promise result");
  assert.equal((await client.lookup(upper)).call, 1);
  assert.equal((await client.lookup("0xBBB2222222222222222222222222222222222222")).call, 2);
  assert.equal(calls, 2);
  const urls = memoizeClient({ url: (slug) => `https://example.com/${slug}` });
  assert.equal(urls.url("pons"), "https://example.com/pons", "synchronous URL builders stay synchronous");
});

test("a sample document validates against schema/pulled.schema.json", () => {
  const validate = createValidator();
  const doc = orderDocument({
    slug: "pons",
    pulled_at: "2026-09-02T14:00:03.000Z",
    chain: "robinhood-chain",
    addresses: [
      {
        address: "0x39dBED3a2bd333467115dE45665cC57F813C4571",
        label: "PONS token (PonsLauncherToken)",
        role: "token",
        is_contract: true,
        source_verified: true,
        contract_name: "PonsLauncherToken",
        proxy: { type: "none", implementation: null, admin: null },
        owner: "0x263ed295dafae1d9aadd6e56c4b6f9f38ee019dd",
        owner_type: "safe",
        safe: { threshold: 2, signers: ["0x2222222222222222222222222222222222222222"] },
        created_block: 8963150,
        created_at: "2026-07-13T20:42:21.000Z",
        holders: 62260,
        errors: [{ step: "blockscout", message: "tokens/0x39dB: HTTP 403" }],
      },
    ],
    metrics: [
      { kind: "fees_24h", value: 4557472, as_of: "2026-09-02T14:00:05.000Z", source_url: "https://api.llama.fi/summary/fees/pons?dataType=dailyFees" },
    ],
    errors: [],
  });

  assert.deepEqual(validate(doc), []);
  assert.deepEqual(Object.keys(doc), [
    "slug", "pulled_at", "chain", "addresses", "metrics", "market", "structure", "activity", "errors",
  ]);
  assert.equal(Object.keys(doc.addresses[0])[0], "address");

  const yaml = toYaml(doc, { blockNumber: 52364777 });
  assert.match(yaml, /pulled_at: .*# chain head 52364777 at read time/);
  assert.match(
    summaryLine("pons", doc),
    /pons\s+1 addresses · 1 owners · 1 safes · 1 holders · 1 metrics · 0 pairs · no top-10 · 0 LP reads · — txns\/24h · 1 errors/,
  );
});

test("an invalid document is rejected before it can reach disk", () => {
  const validate = createValidator();
  const bad = orderDocument({
    slug: "pons",
    pulled_at: "not-a-timestamp",
    chain: "robinhood-chain",
    addresses: [],
    metrics: [],
    errors: [],
  });
  assert.ok(validate(bad).length > 0);
});

// --- DexScreener: pairs, aggregation, chain filter ------------------------

const JULY = Date.UTC(2026, 6, 1);
const AUGUST = Date.UTC(2026, 7, 1);

/** One raw DexScreener pair, overridable field by field. */
const rawPair = (over = {}) => ({
  chainId: "robinhood",
  dexId: "uniswap",
  pairAddress: "0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA",
  baseToken: { address: "0x39dBED3a2bd333467115dE45665cC57F813C4571", symbol: "PONS" },
  quoteToken: { symbol: "WETH" },
  priceUsd: "0.5",
  liquidity: { usd: 100 },
  volume: { h24: 10, h6: 5 },
  txns: { h24: { buys: 3, sells: 4 } },
  priceChange: { h24: 1.5 },
  marketCap: 800,
  fdv: 1000,
  pairCreatedAt: JULY,
  ...over,
});

test("aggregates pairs: sums depth, volume and trades, quotes the deepest pool", () => {
  const pairs = parsePairs([
    rawPair(),
    rawPair({
      dexId: "0swap",
      // A Uniswap v4 pool id is 32 bytes, not an address — it must survive parsing untouched.
      pairAddress: "0x4be9657ec9002e528f4f17a5c43edc525a07f888f7b180c2afbf75e096c4f38a",
      priceUsd: "0.42",
      liquidity: { usd: 900 },
      volume: { h24: 90, h6: 40 },
      txns: { h24: { buys: 10, sells: 2 } },
      priceChange: { h24: -3 },
      marketCap: 700,
      fdv: 900,
      pairCreatedAt: AUGUST,
    }),
    rawPair({ dexId: "giga", liquidity: undefined, volume: { h24: 5 }, txns: { h24: { buys: 1, sells: 1 } }, pairCreatedAt: undefined }),
  ]);

  assert.equal(pairs.length, 3);
  assert.equal(pairs[1].pair_address, "0x4be9657ec9002e528f4f17a5c43edc525a07f888f7b180c2afbf75e096c4f38a");
  assert.equal(pairs[2].liquidity_usd, null);
  assert.equal(pairs[2].volume_h6, null);
  assert.equal(pairs[2].created_at, null);

  const agg = aggregatePairs(pairs);
  assert.equal(agg.liquidity_usd, 1000);
  assert.equal(agg.volume_h24, 105);
  assert.equal(agg.trades_h24, 21);
  // Price, change, market cap and FDV all come from the deepest pool, never from an average across depths.
  assert.equal(topLiquidityPair(pairs).dex, "0swap");
  assert.equal(agg.price_usd, 0.42);
  assert.equal(agg.price_change_h24, -3);
  assert.equal(agg.market_cap_usd, 700);
  assert.equal(agg.fdv_usd, 900);
  assert.equal(agg.fdv, 900);
  assert.equal(agg.first_pair_at, new Date(JULY).toISOString());

  // No pairs at all is every figure null, not zero.
  assert.deepEqual(aggregatePairs([]), {
    liquidity_usd: null, volume_h24: null, trades_h24: null,
    price_usd: null, price_change_h24: null, market_cap_usd: null, fdv_usd: null,
    fdv: null, first_pair_at: null,
  });
});

test("the fallback endpoint's all-chain body is filtered down to Robinhood Chain", () => {
  const body = { pairs: [rawPair(), rawPair({ chainId: "base", dexId: "aerodrome" }), rawPair({ chainId: "solana" })] };
  const pairs = parsePairs(body);
  assert.equal(pairs.length, 1);
  assert.equal(pairs[0].dex, "uniswap");
  assert.equal(pairs[0].quote_symbol, "WETH");
  assert.deepEqual(pairs[0].txns_h24, { buys: 3, sells: 4 });
  assert.deepEqual(parsePairs({}), []);
  assert.deepEqual(parsePairs(null), []);
});

test("a failed token-pairs call falls back, and a second failure is recorded not thrown", async () => {
  const fetchImpl = stubFetch({
    "/token-pairs/v1/": { status: 500, body: "upstream" },
    "/latest/dex/tokens/": { status: 200, body: { pairs: [rawPair()] } },
  });
  const client = createDexscreenerClient({ deps: { fetchImpl, sleepImpl: async () => {}, attempts: 1 } });
  const ok = await readMarket(client, "0x39dBED3a2bd333467115dE45665cC57F813C4571", { pulledAt: "2026-09-02T00:00:00.000Z" });
  assert.equal(ok.pairs.length, 1);
  assert.deepEqual(ok.errors, []);
  assert.equal(ok.liquidity_usd, 100);

  const dead = stubFetch({ "api.dexscreener.com": { status: 500, body: "upstream" } });
  const broken = createDexscreenerClient({ deps: { fetchImpl: dead, sleepImpl: async () => {}, attempts: 1 } });
  const out = await readMarket(broken, "0x39dBED3a2bd333467115dE45665cC57F813C4571", { pulledAt: "2026-09-02T00:00:00.000Z" });
  assert.equal(out.pairs.length, 0);
  assert.equal(out.errors.length, 2);
  assert.ok(out.errors.every((e) => e.step === "dexscreener"));

  // A slug with no token deployment says so rather than looking like a token that does not trade.
  const none = emptyMarket("2026-09-02T00:00:00.000Z", [{ step: "no token address", message: "none" }]);
  assert.equal(none.token_address, null);
  assert.equal(none.errors[0].step, "no token address");
  assert.equal(tokenAddressFor([{ address: "0xaaa", role: "vault" }]), null);
  assert.equal(tokenAddressFor([{ address: "0xaaa", role: "vault" }, { address: "0xbbb", role: "token" }]), "0xbbb");
});

// --- Blockscout activity: counters, 24h paging, launches ------------------

test("counters arrive as strings and become integers or null", () => {
  assert.deepEqual(
    parseCounters({ transactions_count: "266144", token_transfers_count: "1065034", gas_usage_count: "1869480323779" }),
    { transactions_count: 266144, token_transfers_count: 1065034, gas_usage_count: 1869480323779 },
  );
  assert.deepEqual(parseCounters({ transactions_count: "n/a" }), {
    transactions_count: null, token_transfers_count: null, gas_usage_count: null,
  });
  assert.deepEqual(parseCounters(null), {
    transactions_count: null, token_transfers_count: null, gas_usage_count: null,
  });
  assert.equal(toQuery({ filter: "to", index: 6, dropped: null }), "filter=to&index=6");
});

test("the 24h walk stops at the first older item and keeps the newest inbound call", async () => {
  const now = Date.parse("2026-09-02T12:00:00.000Z");
  const tx = (iso, method) => ({ timestamp: iso, method, hash: "0xabc", from: { hash: "0xdef" } });
  const pages = [
    {
      items: [
        tx("2026-09-02T11:00:00.000000Z", "launchToken"),
        tx("2026-09-02T06:00:00.000000Z", "swap"),
        tx("2026-09-02T01:00:00.000000Z", "launchToken"),
      ],
      next_page_params: { index: 1 },
    },
    {
      items: [
        tx("2026-09-01T23:00:00.000000Z", "createPair"),
        // Older than the window: the walk stops here and never asks for page 3.
        tx("2026-08-30T10:00:00.000000Z", "launchToken"),
      ],
      next_page_params: { index: 2 },
    },
    { items: [tx("2026-08-01T00:00:00.000000Z", "launchToken")], next_page_params: null },
  ];

  let asked = 0;
  const out = await countRecentInbound(
    async () => pages[asked++],
    { since: now - 24 * 60 * 60 * 1000, countLaunches: true },
  );
  assert.equal(asked, 2);
  assert.equal(out.txns_24h, 4);
  assert.equal(out.launches_24h, 3); // launchToken, launchToken, createPair — not swap
  assert.equal(out.last_tx_at, "2026-09-02T11:00:00.000Z");
  assert.equal(out.last_method, "launchToken");
  assert.equal(out.capped, false);
  assert.deepEqual(out.errors, []);
});

test("the page cap stops the walk, keeps the partial count and records why", async () => {
  const recent = { items: [{ timestamp: "2026-09-02T11:00:00.000000Z", method: "launchToken" }], next_page_params: { index: 1 } };
  let asked = 0;
  const out = await countRecentInbound(
    async () => {
      asked++;
      return recent;
    },
    { since: Date.parse("2026-09-01T12:00:00.000Z"), maxPages: 3, countLaunches: true },
  );
  assert.equal(asked, 3);
  assert.equal(out.txns_24h, 3);
  assert.equal(out.launches_24h, 3);
  assert.equal(out.capped, true);
  assert.equal(out.errors[0].step, "txns_24h capped");
  assert.match(out.errors[0].message, /3 pages/);
});

test("launch methods are matched by verb prefix, and only for factories", async () => {
  for (const yes of ["launchToken", "LaunchToken", "createPair", "deployVault", "mint", "mintTo"]) {
    assert.equal(isLaunchMethod(yes), true, yes);
  }
  for (const no of ["transferCreatorFeeRecipient", "swap", "approve", "setLauncher", null, undefined, 7]) {
    assert.equal(isLaunchMethod(no), false, String(no));
  }

  const page = { items: [{ timestamp: "2026-09-02T11:00:00.000000Z", method: "launchToken" }], next_page_params: null };
  const client = {
    counters: async () => ({ transactions_count: "12", token_transfers_count: "3", gas_usage_count: "9" }),
    transactions: async () => page,
  };
  const now = Date.parse("2026-09-02T12:00:00.000Z");

  const factory = await readAddressActivity(client, { address: "0xf00", label: "factory", role: "factory" }, { now });
  assert.equal(factory.txns_24h, 1);
  assert.equal(factory.launches_24h, 1);
  assert.equal(factory.transactions_count, 12);
  assert.equal(factory.last_method, "launchToken");

  // A token contract can be called with launchToken by nobody; the field is null, never 0.
  const token = await readAddressActivity(client, { address: "0x70c", label: "token", role: "token" }, { now });
  assert.equal(token.txns_24h, 1);
  assert.equal(token.launches_24h, null);

  const agg = aggregateActivity([factory, token]);
  assert.equal(agg.txns_24h, 2);
  assert.equal(agg.launches_24h, 1);
  assert.equal(agg.last_activity_at, "2026-09-02T11:00:00.000Z");
  assert.deepEqual(aggregateActivity([]), { last_activity_at: null, txns_24h: null, launches_24h: null });
});

test("a blocked counters call still leaves the 24h walk, and vice versa", async () => {
  const client = {
    counters: async () => {
      throw new Error("HTTP 403 returned HTML, not JSON (bot challenge or error page)");
    },
    transactions: async () => ({ items: [{ timestamp: "2026-09-02T11:00:00.000000Z", method: "swap" }], next_page_params: null }),
  };
  const row = await readAddressActivity(client, { address: "0xf00", label: null, role: "vault" }, { now: Date.parse("2026-09-02T12:00:00.000Z") });
  assert.equal(row.transactions_count, null);
  assert.equal(row.txns_24h, 1);
  assert.equal(row.errors.length, 1);
  assert.match(row.errors[0].message, /counters/);

  const noWalk = {
    counters: async () => ({ transactions_count: "5" }),
    transactions: async () => {
      throw new Error("HTTP 503");
    },
  };
  const partial = await readAddressActivity(noWalk, { address: "0xf00", label: null, role: "factory" }, { now: Date.now() });
  assert.equal(partial.transactions_count, 5);
  assert.equal(partial.txns_24h, null); // nothing was counted, so nothing is claimed
  assert.equal(partial.launches_24h, null);
  assert.match(partial.errors[0].message, /transactions\?filter=to page 1/);

  assert.deepEqual(parseTransactionsPage({ items: null }), { items: [], next: null });
  assert.equal(parseTransactionsPage({ items: [], next_page_params: {} }).next, null);
});

// --- snapshots ------------------------------------------------------------

test("snapshots append, read back in time order and never rewrite a line", () => {
  const dir = mkdtempSync(join(tmpdir(), "proofline-history-"));
  try {
    // Deliberately appended out of order: the reader sorts, the writer does not reorder the file.
    appendHistory("pons", { at: "2026-08-15T00:00:00.000Z", holders: 20 }, { dir });
    appendHistory("pons", { at: "2026-09-01T00:00:00.000Z", holders: 35, liquidity_usd: 1000 }, { dir });
    appendHistory("pons", { at: "2026-08-01T00:00:00.000Z", holders: 10 }, { dir });

    const history = readHistory("pons", { dir });
    assert.deepEqual(history.map((r) => r.at), [
      "2026-08-01T00:00:00.000Z", "2026-08-15T00:00:00.000Z", "2026-09-01T00:00:00.000Z",
    ]);
    // Every column exists on every line even when the run had nothing to put in it.
    assert.equal(history[0].liquidity_usd, null);
    assert.equal(history[2].liquidity_usd, 1000);

    // A fourth append leaves the first three bytes-for-bytes alone.
    appendHistory("pons", { at: "2026-09-02T00:00:00.000Z", holders: 40 }, { dir });
    const grown = readHistory("pons", { dir });
    assert.equal(grown.length, 4);
    assert.deepEqual(grown.slice(0, 3), history);

    // 7 days back from 2026-09-02 lands on the 2026-08-15 line, the newest that is old enough.
    assert.deepEqual(deltaFrom(grown, "holders", 7), {
      value_now: 40, value_then: 20, delta: 20, then_at: "2026-08-15T00:00:00.000Z",
    });
    // Nothing in the series reaches 90 days back, so there is no trend to report yet.
    assert.equal(deltaFrom(grown, "holders", 90), null);
    assert.equal(deltaFrom(readHistory("nothing-here", { dir }), "holders", 1), null);
    assert.equal(deltaFrom([{ at: "2026-09-02T00:00:00.000Z", holders: 1 }], "holders", 1), null);
    // Both ends come back even when only the later one carries the figure.
    assert.deepEqual(deltaFrom(grown, "liquidity_usd", 1), {
      value_now: null, value_then: 1000, delta: null, then_at: "2026-09-01T00:00:00.000Z",
    });
    // A half-written line from an interrupted run is skipped, not fatal.
    assert.equal(parseHistory('{"at":"2026-09-01T00:00:00.000Z"}\n{"at":"2026-09-0').length, 1);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("the snapshot takes the token holder count, the market totals and the TVL metric", () => {
  const snap = snapshotFrom({
    pulled_at: "2026-09-02T00:00:00.000Z",
    addresses: [
      { role: "vault", holders: null },
      { role: "token", holders: 62367 },
    ],
    metrics: [
      { kind: "volume_24h", value: 94220826 },
      { kind: "tvl", value: 9208000 },
      { kind: "revenue_24h", value: 909887 },
    ],
    market: { liquidity_usd: 1000, volume_h24: 500, trades_h24: 21, price_usd: 0.42, market_cap_usd: 800, fdv: 900, top10_share: 0.41 },
    activity: { addresses: [{ transactions_count: 10 }, { transactions_count: 5 }, { transactions_count: null }], launches_24h: 3 },
  });
  assert.deepEqual(snap, {
    at: "2026-09-02T00:00:00.000Z",
    holders: 62367,
    liquidity_usd: 1000,
    volume_h24: 500,
    trades_h24: 21,
    price_usd: 0.42,
    market_cap: 800,
    fdv: 900,
    txns_total: 15,
    launches_24h: 3,
    tvl: 9208000,
    revenue_24h: 909887,
    top10_share: 0.41,
  });
});

// --- schema with the market and activity blocks ---------------------------

test("a document carrying both new blocks validates and keeps its key order", () => {
  const validate = createValidator();
  const doc = orderDocument({
    slug: "pons",
    pulled_at: "2026-09-02T14:00:03.000Z",
    chain: "robinhood-chain",
    addresses: [
      {
        address: "0x39dBED3a2bd333467115dE45665cC57F813C4571",
        label: "PONS token",
        role: "token",
        is_contract: true,
        source_verified: true,
        contract_name: "PonsLauncherToken",
        proxy: { type: "none", implementation: null, admin: null },
        owner: null,
        owner_type: "none",
        safe: null,
        created_block: 8963150,
        created_at: "2026-07-13T20:42:21.000Z",
        holders: 62367,
        errors: [],
      },
    ],
    metrics: [],
    market: {
      token_address: "0x39dBED3a2bd333467115dE45665cC57F813C4571",
      pulled_at: "2026-09-02T14:00:03.000Z",
      pairs: parsePairs([rawPair(), rawPair({ pairAddress: "0x4be9657ec9002e528f4f17a5c43edc525a07f888f7b180c2afbf75e096c4f38a" })]),
      liquidity_usd: 200,
      volume_h24: 20,
      trades_h24: 14,
      price_usd: 0.5,
      price_change_h24: 1.5,
      market_cap_usd: 800,
      fdv_usd: 1000,
      fdv: 1000,
      first_pair_at: new Date(JULY).toISOString(),
      top10_share: 0.1,
      top10_share_ex_pools: 0.08,
      burned_share: 0.29,
      top10_as_of: "2026-09-02T14:00:03.000Z",
      launchpad: { slug: "pons", via: "factory", address: "0x0c37a24f5d23a486fa692d1500881d698b1f77a4", shared: false },
      errors: [{ step: "dexscreener", message: "token-pairs: HTTP 503" }],
    },
    structure: {
      pulled_at: "2026-09-02T14:00:03.000Z",
      mint: "no-mint-function",
      renounced: true,
      lp: [
        { pair: "0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA", locked_share: 0.5, holder_kind: "burn", reason: null },
        { pair: "0x51B6Ca77DEaE9f17c1D89EdFb301AE50053C57A5", locked_share: null, holder_kind: null, reason: LP_REASON.noneFound },
      ],
      errors: [],
    },
    activity: {
      pulled_at: "2026-09-02T14:00:03.000Z",
      addresses: [
        {
          address: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB",
          label: "launch factory",
          role: "factory",
          transactions_count: 266144,
          token_transfers_count: 1065034,
          last_tx_at: "2026-09-01T18:50:46.000Z",
          last_method: "launchToken",
          txns_24h: 2000,
          launches_24h: 1998,
          errors: [{ step: "txns_24h capped", message: "stopped after 40 pages; count is a floor" }],
        },
      ],
      last_activity_at: "2026-09-01T18:50:46.000Z",
      txns_24h: 2000,
      launches_24h: 1998,
    },
    errors: [],
  });

  assert.deepEqual(validate(doc), []);
  assert.deepEqual(Object.keys(doc), [
    "slug", "pulled_at", "chain", "addresses", "metrics", "market", "structure", "activity", "errors",
  ]);
  assert.deepEqual(Object.keys(doc.market.pairs[0]), [
    "dex", "pair_address", "quote_symbol", "price_usd", "liquidity_usd", "volume_h24",
    "volume_h6", "txns_h24", "price_change_h24", "market_cap", "fdv", "created_at",
  ]);
  assert.deepEqual(Object.keys(doc.market), [
    "token_address", "pulled_at", "pairs", "liquidity_usd", "volume_h24", "trades_h24",
    "price_usd", "price_change_h24", "market_cap_usd", "fdv_usd", "fdv", "first_pair_at", "top10_share",
    "top10_share_ex_pools", "burned_share", "top10_as_of", "launchpad", "rialto",
    "pair_asset", "volume_disagreement", "errors",
  ]);
  assert.equal(countErrors(doc), 2);
  assert.match(summaryLine("pons", doc), /2 pairs · top-10 · 1 LP reads · 2000 txns\/24h · 2 errors/);

  // The 34 files written before these blocks existed still validate: both are optional.
  const older = orderDocument({
    slug: "pons", pulled_at: "2026-09-02T14:00:03.000Z", chain: "robinhood-chain",
    addresses: [], metrics: [], errors: [],
  });
  assert.equal(older.market, null);
  assert.equal(older.structure, null);
  assert.equal(older.activity, null);
  assert.deepEqual(validate(older), []);
  assert.equal(errorKey({ step: "rpc", message: "eth_getCode 0xA5aAb3F0c6EeadF30Ef: boom" }), "rpc: eth_getCode <hex>: boom");
});

// --- runner ---------------------------------------------------------------

for (const [name, fn] of tests) {
  try {
    await fn();
    console.log(`ok ${name}`);
  } catch (e) {
    failures++;
    console.error(`FAIL ${name}\n  ${e.message}`);
  }
}

console.log(`\n${tests.length - failures}/${tests.length} passed`);
process.exit(failures ? 1 : 0);
