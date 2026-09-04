import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import worker, { runTick } from "../src/index.mjs";

const amc = JSON.parse(await readFile(new URL("./fixtures/amc.json", import.meta.url), "utf8"));
const NOW = Date.parse(amc.now);

function response(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

function pool() {
  return {
    id: "robinhood_0x0000000000000000000000000000000000000aaa",
    attributes: {
      address: "0x0000000000000000000000000000000000000aaa",
      name: "AMC / AMC",
      pool_created_at: amc.pair.createdAt,
      reserve_in_usd: String(amc.pair.liquidityUsd),
      volume_usd: {
        h1: String(amc.pair.volumeH1Usd),
        h6: String(amc.pair.volumeH6Usd),
        h24: String(amc.pair.volumeH24Usd),
      },
      market_cap_usd: String(amc.pair.marketCapUsd),
      fdv_usd: String(amc.pair.fdvUsd),
      base_token_price_usd: "2",
      quote_token_price_usd: "20",
    },
    relationships: {
      base_token: { data: { id: `robinhood_${amc.pair.token}` } },
      quote_token: { data: { id: `robinhood_${amc.pair.quoteToken}` } },
      dex: { data: { id: "pons-v2" } },
    },
  };
}

function memoryKv() {
  const values = new Map();
  return {
    values,
    async get(key, type) {
      const value = values.get(key) ?? null;
      return type === "json" && value ? JSON.parse(value) : value;
    },
    async put(key, value) { values.set(key, value); },
  };
}

// Every source answers. Individual tests override one entry to make that source fail.
function sources(overrides = {}) {
  const routes = {
    trending_pools: () => response({ data: [pool()] }),
    new_pools: () => response({ data: [pool()] }),
    "token-pairs": () => response([]),
    "router/tickers": () => response([]),
    "robinhood-symbols": () => response({
      symbols: [{ ticker: "AMC", address: amc.pair.quoteToken, category: "stock" }],
    }),
    "api.telegram.org": () => response({ ok: true }),
    ...overrides,
  };
  const urls = [];
  const bodies = [];
  const fetchImpl = async (url, init) => {
    urls.push(String(url));
    if (init?.body) bodies.push(JSON.parse(init.body));
    for (const [fragment, handler] of Object.entries(routes)) {
      if (String(url).includes(fragment)) return handler(url);
    }
    throw new Error(`unexpected ${url}`);
  };
  return { fetchImpl, urls, bodies };
}

test("a tick reads the bounded sources and stores an AMC pulse", async () => {
  const { fetchImpl, urls } = sources();
  const env = { PULSE_STATE: memoryKv(), PULSE_DRY_RUN: "true" };
  const output = await runTick(env, { now: NOW, fetchImpl });
  assert.equal(output.ticks, 1);
  assert.deepEqual(output.alerts.map((item) => item.kind), ["new-launch", "stock-pair-spike"]);
  assert.equal(output.hot[0].volume_h1_usd, 9_600_000);
  assert.equal(urls.filter((url) => url.includes("token-pairs")).length, 1);

  const stored = await worker.fetch(new Request("https://pulse.test/pulse.json"), env);
  assert.equal(stored.status, 200);
  assert.equal((await stored.json()).hot[0].symbol, "AMC");
});

test("the committed configuration deploys silent", async () => {
  const config = await readFile(new URL("../wrangler.jsonc", import.meta.url), "utf8");
  // The deploy workflow overrides this from ops/telegram-review.json. Committing "true" here would
  // let a hand-run deploy start posting without the repository having voted for it.
  assert.match(config, /"TELEGRAM_ENABLED":\s*"false"/);
});

test("only GET /pulse.json is public", async () => {
  const env = { PULSE_STATE: memoryKv() };
  assert.equal((await worker.fetch(new Request("https://pulse.test/"), env)).status, 404);
  assert.equal((await worker.fetch(new Request("https://pulse.test/pulse.json", { method: "POST" }), env)).status, 404);
});

test("nothing reaches Telegram while the repository switch is off", async () => {
  const { fetchImpl, urls } = sources();
  const env = {
    PULSE_STATE: memoryKv(),
    PULSE_DRY_RUN: "false",
    TELEGRAM_ENABLED: "false",
    TELEGRAM_BOT_TOKEN: "token",
    TELEGRAM_CHAT_ID: "-100",
  };
  const output = await runTick(env, { now: NOW, fetchImpl });
  assert.equal(urls.filter((url) => url.includes("api.telegram.org")).length, 0);
  // The rules still ran and /pulse.json still carries every hit.
  assert.equal(output.alerts.length, 2);
  const state = await env.PULSE_STATE.get("state", "json");
  assert.deepEqual(state.sentAt, []);
});

test("with the switch on, the pulse kinds are sent and the send is written to KV", async () => {
  const { fetchImpl, urls, bodies } = sources();
  const env = {
    PULSE_STATE: memoryKv(),
    PULSE_DRY_RUN: "false",
    TELEGRAM_ENABLED: "true",
    TELEGRAM_BOT_TOKEN: "token",
    TELEGRAM_CHAT_ID: "-100",
  };
  await runTick(env, { now: NOW, fetchImpl });
  assert.equal(urls.filter((url) => url.includes("api.telegram.org")).length, 2);
  const state = await env.PULSE_STATE.get("state", "json");
  assert.equal(state.sentAt.length, 2);
  assert.equal(state.sentAt[0], new Date(NOW).toISOString());
  assert.equal(Object.keys(state.firedAt).length, 2);

  // Ten minutes later the same launch is still in the feed and must not be announced again.
  const second = sources();
  await runTick(env, { now: NOW + 10 * 60_000, fetchImpl: second.fetchImpl });
  assert.equal(second.urls.filter((url) => url.includes("api.telegram.org")).length, 0);
  assert.ok(bodies.every((body) => body.chat_id === "-100"));
});

test("a source URL carrying a quote cannot break the anchor", async () => {
  const dirty = 'https://dexscreener.com/robinhood/0xaaa?utm="x"';
  const { fetchImpl, bodies } = sources({
    "token-pairs": () => response([{
      pairAddress: amc.pair.pair,
      url: dirty,
      baseToken: { symbol: "AMC" },
      quoteToken: { symbol: "AMC", address: amc.pair.quoteToken },
      liquidity: { usd: amc.pair.liquidityUsd },
      volume: { h1: amc.pair.volumeH1Usd, h6: amc.pair.volumeH6Usd, h24: amc.pair.volumeH24Usd },
      pairCreatedAt: Date.parse(amc.pair.createdAt),
    }]),
  });
  const env = {
    PULSE_STATE: memoryKv(),
    PULSE_DRY_RUN: "false",
    TELEGRAM_ENABLED: "true",
    TELEGRAM_BOT_TOKEN: "token",
    TELEGRAM_CHAT_ID: "-100",
  };
  await runTick(env, { now: NOW, fetchImpl });
  assert.ok(bodies.length > 0);
  for (const body of bodies) {
    assert.ok(body.text.includes(`href="${dirty.replaceAll('"', "&quot;")}"`));
    assert.equal(body.text.match(/<a href="/g).length, 2);
  }
});

test("one dead source costs its own numbers, not the tick", async () => {
  const { fetchImpl } = sources({
    "router/tickers": () => new Response("forbidden", { status: 403 }),
  });
  const env = { PULSE_STATE: memoryKv(), PULSE_DRY_RUN: "true" };
  const output = await runTick(env, { now: NOW, fetchImpl });
  assert.equal(output.ticks, 1);
  assert.deepEqual(output.alerts.map((item) => item.kind), ["new-launch", "stock-pair-spike"]);
  assert.equal(output.hot[0].rialto_volume_h24_usd, null);
});

test("a failed stock list keeps the cached one and retries next tick", async () => {
  const env = { PULSE_STATE: memoryKv(), PULSE_DRY_RUN: "true" };
  await runTick(env, { now: NOW, fetchImpl: sources().fetchImpl });
  const warm = await env.PULSE_STATE.get("state", "json");
  assert.equal(warm.stockAt, new Date(NOW).toISOString());

  // A day later the list is due for a refresh and Rialto is down.
  const later = NOW + 25 * 60 * 60_000;
  const { fetchImpl, urls } = sources({
    "robinhood-symbols": () => new Response("forbidden", { status: 403 }),
  });
  await runTick(env, { now: later, fetchImpl });
  const state = await env.PULSE_STATE.get("state", "json");
  assert.equal(state.stockAt, warm.stockAt);
  assert.deepEqual(state.stockTokens, warm.stockTokens);
  assert.ok(urls.some((url) => url.includes("robinhood-symbols")));
});

test("both pool lists down leaves the last document in place instead of publishing an empty market", async () => {
  const env = { PULSE_STATE: memoryKv(), PULSE_DRY_RUN: "true" };
  const good = await runTick(env, { now: NOW, fetchImpl: sources().fetchImpl });
  const { fetchImpl } = sources({
    trending_pools: () => new Response("nope", { status: 500 }),
    new_pools: () => new Response("nope", { status: 500 }),
  });
  const output = await runTick(env, { now: NOW + 10 * 60_000, fetchImpl });
  assert.deepEqual(output, good);
  const served = await (await worker.fetch(new Request("https://pulse.test/pulse.json"), env)).json();
  assert.equal(served.at, good.at);
  assert.equal(served.hot.length, 1);
  const state = await env.PULSE_STATE.get("state", "json");
  assert.equal(state.ticks, 1);
  assert.equal(state.lastSourceFailureAt, new Date(NOW + 10 * 60_000).toISOString());
});

test("a scheduled tick that throws is logged, not swallowed", async () => {
  const errors = [];
  const original = console.error;
  console.error = (message) => errors.push(String(message));
  const waited = [];
  try {
    await worker.scheduled({}, { PULSE_STATE: null }, { waitUntil: (promise) => waited.push(promise) });
    await Promise.all(waited);
  } finally {
    console.error = original;
  }
  assert.equal(waited.length, 1);
  assert.ok(errors.some((message) => message.includes("[pulse] tick failed")));
});

test("DexScreener numbers are only merged for this exact pair", async () => {
  const other = {
    pairAddress: "0x00000000000000000000000000000000000000ff",
    url: "https://dexscreener.com/robinhood/0x00000000000000000000000000000000000000ff",
    baseToken: { symbol: "AMC" },
    quoteToken: { symbol: "WETH", address: "0x0000000000000000000000000000000000000001" },
    liquidity: { usd: 5_000_000 },
    volume: { h1: 2_000_000, h6: 4_000_000, h24: 9_000_000 },
    marketCap: 90_000_000,
    pairCreatedAt: Date.parse("2026-01-01T00:00:00Z"),
  };
  const { fetchImpl } = sources({ "token-pairs": () => response([other]) });
  const env = { PULSE_STATE: memoryKv(), PULSE_DRY_RUN: "true" };
  const output = await runTick(env, { now: NOW, fetchImpl });
  const hot = output.hot[0];
  assert.equal(hot.volume_h1_usd, amc.pair.volumeH1Usd);
  assert.equal(hot.liquidity_usd, amc.pair.liquidityUsd);
  assert.equal(hot.market_cap_usd, amc.pair.marketCapUsd);
  assert.equal(hot.links.dexscreener, `https://dexscreener.com/robinhood/${amc.pair.pair}`);
});
