import assert from "node:assert/strict";
import test from "node:test";
import worker, { runTick } from "../src/index.mjs";

function response(body, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

function pool() {
  return {
    id: "robinhood_0x0000000000000000000000000000000000000aaa",
    attributes: {
      address: "0x0000000000000000000000000000000000000aaa",
      name: "AMC / AMC",
      pool_created_at: "2026-09-03T20:30:00Z",
      reserve_in_usd: "3000000",
      volume_usd: { h1: "9600000", h6: "12000000", h24: "61000000" },
      market_cap_usd: "48000000",
      fdv_usd: "48000000",
      base_token_price_usd: "2",
      quote_token_price_usd: "20",
    },
    relationships: {
      base_token: { data: { id: "robinhood_0x0000000000000000000000000000000000000c01" } },
      quote_token: { data: { id: "robinhood_0x0000000000000000000000000000000000000a4c" } },
      dex: { data: { id: "pons-v2" } },
    },
  };
}

function memoryKv() {
  const values = new Map();
  return {
    async get(key, type) {
      const value = values.get(key) ?? null;
      return type === "json" && value ? JSON.parse(value) : value;
    },
    async put(key, value) { values.set(key, value); },
  };
}

test("a tick reads the bounded sources and stores an AMC pulse", async () => {
  const urls = [];
  const fetchImpl = async (url) => {
    urls.push(String(url));
    if (String(url).includes("trending_pools")) return response({ data: [pool()] });
    if (String(url).includes("new_pools")) return response({ data: [pool()] });
    if (String(url).includes("token-pairs")) return response([]);
    if (String(url).includes("router/tickers")) return response([]);
    if (String(url).includes("robinhood-symbols")) return response({ symbols: [{ ticker: "AMC", address: "0x0000000000000000000000000000000000000a4c", category: "stock" }] });
    throw new Error(`unexpected ${url}`);
  };
  const env = { PULSE_STATE: memoryKv(), PULSE_DRY_RUN: "true" };
  const output = await runTick(env, { now: Date.parse("2026-09-03T21:00:00Z"), fetchImpl });
  assert.equal(output.ticks, 1);
  assert.deepEqual(output.alerts.map((item) => item.kind), ["new-launch", "breakout", "stock-pair-spike"]);
  assert.equal(output.hot[0].volume_h1_usd, 9_600_000);
  assert.equal(urls.filter((url) => url.includes("token-pairs")).length, 1);

  const stored = await worker.fetch(new Request("https://pulse.test/pulse.json"), env);
  assert.equal(stored.status, 200);
  assert.equal((await stored.json()).hot[0].symbol, "AMC");
});

test("only GET /pulse.json is public", async () => {
  const env = { PULSE_STATE: memoryKv() };
  assert.equal((await worker.fetch(new Request("https://pulse.test/"), env)).status, 404);
  assert.equal((await worker.fetch(new Request("https://pulse.test/pulse.json", { method: "POST" }), env)).status, 404);
});

