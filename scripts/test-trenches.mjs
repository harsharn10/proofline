import assert from "node:assert/strict";
import { matchCoveredTrenchTape, normalizeTrenchTape } from "./lib/trenches.mjs";

const now = Date.parse("2026-09-04T18:00:00Z");
const token = "0x0000000000000000000000000000000000000bee";
const unknownToken = "0x0000000000000000000000000000000000000bad";
const tx = "0x000000000000000000000000000000000000000000000000000000000000beef";
const row = (overrides = {}) => ({
  id: 1,
  ts: Math.floor((now - 5 * 60_000) / 1000),
  side: "buy",
  usd: 25_000,
  token,
  symbol: "BEE",
  name: "Bee",
  handle: "researcher",
  liquidity: 80_000,
  tx,
  pair_url: `https://dexscreener.com/robinhood/${token}`,
  flags: [],
  ...overrides,
});

const rows = normalizeTrenchTape([
  row(),
  row({ id: 7, ts: Math.floor((now - 6 * 60_000) / 1000), tx: `${tx.slice(0, -1)}7` }),
  row({ id: 6, token: unknownToken, tx: `${tx.slice(0, -1)}6` }),
  row({ id: 2, usd: 100, tx: `${tx.slice(0, -1)}2` }),
  row({ id: 3, flags: ["suspicious_price"], tx: `${tx.slice(0, -1)}3` }),
  row({ id: 4, token: "not-an-address", tx: `${tx.slice(0, -1)}4` }),
  row({ id: 5, ts: Math.floor((now - 25 * 60 * 60_000) / 1000), tx: `${tx.slice(0, -1)}5` }),
], { now });

assert.equal(rows.length, 3);
assert.ok(rows.every((item) => item.usd === 25_000));
assert.ok(rows.every((item) => !("wallet" in item) && !("followers" in item)));

const covered = matchCoveredTrenchTape(rows, new Map([[token, "bee"]]), { now });
assert.equal(covered.length, 1);
assert.equal(covered[0].token, token);
assert.equal(covered[0].slug, "bee");
assert.equal(covered[0].id, "1");
assert.equal(covered[0].ageMinutes, 5);
assert.equal(covered[0].links.transaction.endsWith(tx), true);
console.log("ok   Trenches tape drops bad rows and only exposes token-address matches already in Icarus");
