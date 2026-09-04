import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  evaluatePulsePair,
  previousHourlyAverage,
  selectPulseDeliveries,
} from "./lib/signals.mjs";

let passed = 0;
function test(name, fn) {
  try {
    fn();
    passed++;
    console.log(`ok ${name}`);
  } catch (error) {
    console.error(`FAIL ${name}`);
    throw error;
  }
}

const fixture = JSON.parse(await readFile(new URL("../pulse/test/fixtures/amc.json", import.meta.url), "utf8"));

test("the AMC replay fires both launch rules inside twenty minutes", () => {
  const signals = evaluatePulsePair(fixture.pair, {
    now: Date.parse(fixture.now),
    stockTokens: fixture.stockTokens,
  });
  assert.deepEqual(signals.map((row) => row.kind), ["new-launch", "breakout", "stock-pair-spike"]);
  assert.match(signals[0].headline, /\$3M liquidity/);
  assert.match(signals[2].headline, /paired to AMC stock/);
});

test("a quiet pair fires no rule", () => {
  const signals = evaluatePulsePair({
    ...fixture.pair,
    symbol: "QUIET",
    liquidityUsd: 49_999,
    volumeH1Usd: 249_999,
    volumeH6Usd: 1_499_999,
    quoteToken: "0x0000000000000000000000000000000000000001",
    quoteSymbol: "WETH",
  }, { now: Date.parse(fixture.now), stockTokens: fixture.stockTokens });
  assert.deepEqual(signals, []);
});

test("breakout compares the current hour with the prior five hours", () => {
  assert.equal(previousHourlyAverage({ volumeH1Usd: 600, volumeH6Usd: 1_600 }), 200);
});

test("cooldowns and hourly and daily caps are deterministic", () => {
  const now = Date.parse(fixture.now);
  const base = evaluatePulsePair(fixture.pair, { now, stockTokens: fixture.stockTokens });
  const first = selectPulseDeliveries(base, {}, now);
  assert.equal(first.fresh.length, 3);
  assert.equal(first.deliver.length, 3);
  const repeat = selectPulseDeliveries(base, first, now + 10 * 60_000);
  assert.equal(repeat.fresh.length, 0);
  assert.equal(repeat.deliver.length, 0);
  const capped = selectPulseDeliveries(base, { sentAt: Array(3).fill(new Date(now - 1_000).toISOString()) }, now);
  assert.equal(capped.fresh.length, 3);
  assert.equal(capped.deliver.length, 0);
  const dailyCapped = selectPulseDeliveries(base, {
    sentAt: Array(12).fill(new Date(now - 2 * 60 * 60_000).toISOString()),
  }, now);
  assert.equal(dailyCapped.fresh.length, 3);
  assert.equal(dailyCapped.deliver.length, 0);
});

console.log(`\n${passed}/${passed} passed`);
