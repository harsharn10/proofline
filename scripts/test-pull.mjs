#!/usr/bin/env node
// Unit tests for scripts/pull.mjs and scripts/lib/pull/*. No network: every HTTP call is a stub.
// Usage: node scripts/test-pull.mjs

import assert from "node:assert/strict";

import {
  requestWithRetry,
  requestJson,
  isRetryableStatus,
  backoffMs,
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
  readAddress as readBlockscout,
} from "./lib/pull/blockscout.mjs";
import { findLlamaSlug, latestChainTvl, chainTotal24h } from "./lib/pull/llama.mjs";
import { orderDocument, createValidator, toYaml } from "./lib/pull/write.mjs";
import { addressesFor, mergeAddress, summaryLine } from "./pull.mjs";

let failures = 0;
const tests = [];
const test = (name, fn) => tests.push([name, fn]);

const word = (hex) => hex.replace(/^0x/, "").padStart(64, "0");
const addressWord = (addr) => `0x${word(addr)}`;

/** Minimal fetch stub: `routes` maps a URL substring to { status, body, contentType } or a function. */
function stubFetch(routes, log = []) {
  return async (url, options = {}) => {
    log.push({ url, body: options.body ? JSON.parse(options.body) : null });
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

test("a Cloudflare challenge page is an error, not a crash, and leaves the RPC row intact", async () => {
  const fetchImpl = stubFetch({
    "/api/v2/addresses/": { status: 403, body: "<!doctype html><html>Just a moment...</html>", contentType: "text/html" },
  });
  const client = createBlockscoutClient({ deps: { fetchImpl, sleepImpl: async () => {}, attempts: 1 } });
  const out = await readBlockscout(client, "0x1111111111111111111111111111111111111111");

  assert.equal(out.source_verified, null);
  assert.equal(out.contract_name, null);
  assert.equal(out.errors.length, 1);
  assert.equal(out.errors[0].step, "blockscout");
  assert.match(out.errors[0].message, /HTML, not JSON/);
  assert.equal(looksLikeHtml("<!doctype html>", ""), true);
  assert.equal(looksLikeHtml('{"a":1}', "application/json"), false);
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
    token: { holders_count: "62260" },
  });
  assert.deepEqual(core, {
    is_contract: true,
    source_verified: true,
    contract_name: "PonsLauncherToken",
    creation_tx: "0x1f54",
    is_token: true,
  });
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
  assert.deepEqual(Object.keys(doc), ["slug", "pulled_at", "chain", "addresses", "metrics", "errors"]);
  assert.equal(Object.keys(doc.addresses[0])[0], "address");

  const yaml = toYaml(doc, { blockNumber: 52364777 });
  assert.match(yaml, /pulled_at: .*# chain head 52364777 at read time/);
  assert.match(summaryLine("pons", doc), /pons\s+1 addresses · 1 owners · 1 safes · 1 holders · 1 metrics · 1 errors/);
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
