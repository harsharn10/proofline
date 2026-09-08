import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  ageLabel,
  evaluatePulsePair,
  markFired,
  previousHourlyAverage,
  priorWindowHours,
  pruneFiredAt,
  PULSE_RULES,
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
const breakoutFixture = JSON.parse(await readFile(new URL("../pulse/test/fixtures/breakout.json", import.meta.url), "utf8"));

test("the AMC replay fires both launch rules inside twenty minutes", () => {
  const signals = evaluatePulsePair(fixture.pair, {
    now: Date.parse(fixture.now),
    stockTokens: fixture.stockTokens,
  });
  assert.deepEqual(signals.map((row) => row.kind), ["new-launch", "stock-pair-spike"]);
  assert.match(signals[0].headline, /\$3M liquidity/);
  assert.match(signals[0].headline, /in the last hour/);
  assert.match(signals[1].headline, /paired to AMC stock/);
});

test("a 30-minute-old pool has no prior hour, so breakout stays quiet instead of dividing by five", () => {
  const now = Date.parse(fixture.now);
  // The live feeds report h6 === h1 here. The old rule read that as five quiet hours and a prior
  // average of exactly 0, which the `average > 0` guard then suppressed.
  assert.equal(priorWindowHours(fixture.pair, now), 0);
  assert.equal(previousHourlyAverage(fixture.pair, [], now), null);
  const kinds = evaluatePulsePair(fixture.pair, { now, stockTokens: fixture.stockTokens }).map((row) => row.kind);
  assert.ok(!kinds.includes("breakout"));
});

test("a three-hour-old pool breaks out against the two hours it actually has", () => {
  const now = Date.parse(breakoutFixture.now);
  assert.equal(priorWindowHours(breakoutFixture.pair, now), 2);
  assert.equal(previousHourlyAverage(breakoutFixture.pair, [], now), 60_000);
  const signals = evaluatePulsePair(breakoutFixture.pair, { now });
  assert.deepEqual(signals.map((row) => row.kind), ["breakout"]);
  assert.match(signals[0].headline, /\$400K this hour vs \$60K\/h over 2h/);
});

test("the same pool an hour into its life is a launch, not a breakout", () => {
  const now = Date.parse(breakoutFixture.now);
  const young = {
    ...breakoutFixture.pair,
    createdAt: new Date(now - 70 * 60_000).toISOString(),
    volumeH6Usd: breakoutFixture.pair.volumeH1Usd,
    volumeH24Usd: breakoutFixture.pair.volumeH1Usd,
  };
  assert.equal(priorWindowHours(young, now), 0);
  assert.deepEqual(evaluatePulsePair(young, { now }), []);
});

test("a pool with real history and a standing start clears the launch floor before it counts", () => {
  const now = Date.parse(breakoutFixture.now);
  const quietThenLoud = {
    ...breakoutFixture.pair,
    createdAt: new Date(now - 30 * 60 * 60_000).toISOString(),
    volumeH1Usd: 5_000_000,
    volumeH6Usd: 5_000_000,
    volumeH24Usd: 5_000_000,
  };
  assert.equal(priorWindowHours(quietThenLoud, now), 5);
  assert.equal(previousHourlyAverage(quietThenLoud, [], now), 0);
  assert.deepEqual(evaluatePulsePair(quietThenLoud, { now }).map((row) => row.kind), ["breakout"]);
  const tiny = { ...quietThenLoud, volumeH1Usd: 1_200, volumeH6Usd: 1_200, volumeH24Usd: 1_200 };
  assert.deepEqual(evaluatePulsePair(tiny, { now }), []);
});

test("a launch found hours late says how old it is and never claims the first hour", () => {
  const now = Date.parse(fixture.now);
  const late = { ...fixture.pair, createdAt: new Date(now - 13.7 * 60 * 60_000).toISOString() };
  const signals = evaluatePulsePair(late, { now, stockTokens: fixture.stockTokens })
    .filter((row) => row.kind !== "breakout");
  assert.equal(signals.length, 2);
  for (const row of signals) {
    assert.match(row.headline, /13h old/);
    assert.doesNotMatch(row.headline, /first hour/);
  }
  assert.equal(ageLabel(45 * 60_000), null);
  assert.equal(ageLabel(6.4 * 60 * 60_000), "6h old");
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
  assert.equal(first.fresh.length, 2);
  assert.equal(first.deliver.length, 2);

  // Nothing is suppressed until it has actually gone out.
  let firedAt = first.firedAt;
  for (const item of first.deliver) firedAt = markFired(firedAt, item, now);
  const repeat = selectPulseDeliveries(base, { firedAt }, now + 10 * 60_000);
  assert.equal(repeat.fresh.length, 0);
  assert.equal(repeat.deliver.length, 0);

  const capped = selectPulseDeliveries(base, { sentAt: Array(3).fill(new Date(now - 1_000).toISOString()) }, now);
  assert.equal(capped.fresh.length, 2);
  assert.equal(capped.deliver.length, 0);
  const dailyCapped = selectPulseDeliveries(base, {
    sentAt: Array(12).fill(new Date(now - 2 * 60 * 60_000).toISOString()),
  }, now);
  assert.equal(dailyCapped.fresh.length, 2);
  assert.equal(dailyCapped.deliver.length, 0);
});

test("a launch is announced once per pair, not once per cooldown", () => {
  const now = Date.parse(fixture.now);
  const base = evaluatePulsePair(fixture.pair, { now, stockTokens: fixture.stockTokens });
  let firedAt = {};
  for (const item of base) firedAt = markFired(firedAt, item, now);
  // Seven hours on: past the six-hour cooldown, still the same launch.
  const later = now + 7 * 60 * 60_000;
  const again = evaluatePulsePair(fixture.pair, { now: later, stockTokens: fixture.stockTokens });
  assert.ok(again.some((row) => row.kind === "new-launch"));
  // The rules still see the launch; the once-per-pair memory is what keeps it off the wire.
  assert.deepEqual(selectPulseDeliveries(again, { firedAt }, later).fresh.map((row) => row.kind), ["breakout"]);
  // A breakout is a recurring event, so its own memory expires with the cooldown.
  assert.deepEqual(
    Object.keys(pruneFiredAt({ "breakout:0xabc": new Date(now).toISOString(), ...firedAt }, later)),
    ["new-launch:0x0000000000000000000000000000000000000aaa", "stock-pair-spike:0x0000000000000000000000000000000000000aaa"],
  );
  assert.deepEqual(pruneFiredAt(firedAt, now + PULSE_RULES.onceMemoryMs + 1_000), {});
});

test("a capped signal is deferred, and the caps drop the smallest first", () => {
  const now = Date.parse(fixture.now);
  const signals = [
    { kind: "breakout", pair: "0xsmall", numbers: { volume_h1_usd: 120_000 } },
    { kind: "breakout", pair: "0xmid", numbers: { volume_h1_usd: 900_000 } },
    { kind: "breakout", pair: "0xbig", numbers: { volume_h1_usd: 9_600_000 } },
  ];
  const sentAt = Array(2).fill(new Date(now - 60_000).toISOString());
  const first = selectPulseDeliveries(signals, { sentAt }, now);
  assert.deepEqual(first.deliver.map((row) => row.pair), ["0xbig"]);
  // The two the cap held back carry no fired mark, so the next hour still delivers them.
  const firedAt = markFired(first.firedAt, first.deliver[0], now);
  const nextHour = now + 61 * 60_000;
  const second = selectPulseDeliveries(signals, { firedAt, sentAt }, nextHour);
  assert.deepEqual(second.deliver.map((row) => row.pair), ["0xmid", "0xsmall"]);
});

test("the Worker only ever delivers the three pulse kinds", () => {
  const now = Date.parse(fixture.now);
  const selected = selectPulseDeliveries([
    { kind: "control-change", pair: "0xdigest", numbers: { volume_h1_usd: 5_000_000 } },
    { kind: "breakout", pair: "0xpulse", numbers: { volume_h1_usd: 1_000 } },
  ], {}, now);
  assert.deepEqual(selected.fresh.map((row) => row.kind), ["breakout"]);
  assert.deepEqual(selected.deliver.map((row) => row.kind), ["breakout"]);
});

console.log(`\n${passed}/${passed} passed`);
