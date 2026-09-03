// Shaping, validation and serialisation of content/pulled/<slug>.yaml.
// The schema is compiled here with its own Ajv instance, not through scripts/lib/schemas.mjs:
// pulled files are machine output and must not become a content-validation dependency.

import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { Document } from "yaml";

const DOC_KEYS = ["slug", "pulled_at", "chain", "addresses", "metrics", "market", "structure", "activity", "errors"];
const ADDRESS_KEYS = [
  "address", "label", "role", "is_contract", "source_verified", "contract_name",
  "proxy", "owner", "owner_type", "safe", "created_block", "created_at", "holders", "errors",
];
const PROXY_KEYS = ["type", "implementation", "admin"];
const SAFE_KEYS = ["threshold", "signers"];
const METRIC_KEYS = ["kind", "value", "as_of", "source_url"];
const ERROR_KEYS = ["step", "message"];
const MARKET_KEYS = [
  "token_address", "pulled_at", "pairs", "liquidity_usd", "volume_h24", "trades_h24",
  "price_usd", "price_change_h24", "market_cap_usd", "fdv_usd", "fdv", "first_pair_at", "top10_share",
  "top10_share_ex_pools", "burned_share", "top10_as_of", "launchpad", "errors",
];
const PAIR_KEYS = [
  "dex", "pair_address", "quote_symbol", "price_usd", "liquidity_usd", "volume_h24",
  "volume_h6", "txns_h24", "price_change_h24", "market_cap", "fdv", "created_at",
];
const TXNS_KEYS = ["buys", "sells"];
const STRUCTURE_KEYS = ["pulled_at", "mint", "renounced", "lp", "errors"];
const LP_KEYS = ["pair", "locked_share", "holder_kind", "reason"];
const ACTIVITY_KEYS = ["pulled_at", "addresses", "last_activity_at", "txns_24h", "launches_24h"];
const ACTIVITY_ADDRESS_KEYS = [
  "address", "label", "role", "transactions_count", "token_transfers_count",
  "last_tx_at", "last_method", "txns_24h", "launches_24h", "errors",
];

/** Snapshot column order. One JSON line per run in content/pulled/history/<slug>.jsonl. */
export const HISTORY_KEYS = [
  "at", "holders", "liquidity_usd", "volume_h24", "trades_h24",
  "price_usd", "market_cap", "fdv", "txns_total", "launches_24h", "tvl", "revenue_24h", "top10_share",
];

export const HISTORY_DIR = "content/pulled/history";

const pick = (obj, keys) => {
  const out = {};
  for (const k of keys) out[k] = obj[k] ?? null;
  return out;
};

const orderErrors = (errors = []) => errors.map((e) => pick(e, ERROR_KEYS));

/** Reorders one document's keys to schema order so diffs between runs stay readable. */
export function orderDocument(doc) {
  const ordered = pick(doc, DOC_KEYS);
  ordered.addresses = (doc.addresses ?? []).map((a) => {
    const entry = pick(a, ADDRESS_KEYS);
    entry.proxy = pick(a.proxy ?? {}, PROXY_KEYS);
    entry.safe = a.safe ? pick(a.safe, SAFE_KEYS) : null;
    entry.errors = orderErrors(a.errors);
    return entry;
  });
  ordered.metrics = (doc.metrics ?? []).map((m) => pick(m, METRIC_KEYS));
  ordered.market = orderMarket(doc.market);
  ordered.structure = orderStructure(doc.structure);
  ordered.activity = orderActivity(doc.activity);
  ordered.errors = orderErrors(doc.errors);
  return ordered;
}

/** Reorders the market block. Null stays null: --rpc-only writes a file with no market at all. */
export function orderMarket(market) {
  if (!market) return null;
  const ordered = pick(market, MARKET_KEYS);
  ordered.pairs = (market.pairs ?? []).map((p) => {
    const pair = pick(p, PAIR_KEYS);
    pair.txns_h24 = pick(p.txns_h24 ?? { buys: 0, sells: 0 }, TXNS_KEYS);
    return pair;
  });
  ordered.errors = orderErrors(market.errors);
  return ordered;
}

export function orderStructure(structure) {
  if (!structure) return null;
  const ordered = pick(structure, STRUCTURE_KEYS);
  ordered.lp = (structure.lp ?? []).map((row) => pick(row, LP_KEYS));
  ordered.errors = orderErrors(structure.errors);
  return ordered;
}

/** Reorders the activity block. Null stays null, same reason as the market block. */
export function orderActivity(activity) {
  if (!activity) return null;
  const ordered = pick(activity, ACTIVITY_KEYS);
  ordered.addresses = (activity.addresses ?? []).map((a) => {
    const entry = pick(a, ACTIVITY_ADDRESS_KEYS);
    entry.errors = orderErrors(a.errors);
    return entry;
  });
  return ordered;
}

/** Compiles schema/pulled.schema.json with schema/shared.schema.json registered as its $ref target. */
export function createValidator(schemaDir = new URL("../../../schema/", import.meta.url)) {
  const read = (name) => JSON.parse(readFileSync(new URL(`${name}.schema.json`, schemaDir), "utf8"));
  const ajv = new Ajv({ allErrors: true, strict: true, strictTypes: false });
  addFormats(ajv);
  ajv.addSchema(read("shared"));
  const validate = ajv.compile(read("pulled"));
  /** Returns [] when valid, else human-readable messages. */
  return (data) => {
    if (validate(data)) return [];
    return validate.errors.map((e) => {
      let detail = "";
      if (e.params?.allowedValues) detail = ` (${e.params.allowedValues.join(", ")})`;
      else if (e.keyword === "additionalProperties") detail = ` (${e.params.additionalProperty})`;
      else if (e.keyword === "required") detail = ` (${e.params.missingProperty})`;
      return `${e.instancePath || "/"} ${e.message}${detail}`;
    });
  };
}

/**
 * Serialises to YAML, annotating pulled_at with the chain head the run read at so a reader can tell
 * which block the RPC facts describe without a separate field.
 */
export function toYaml(doc, { blockNumber = null } = {}) {
  const document = new Document(doc);
  if (blockNumber !== null && blockNumber !== undefined) {
    const pair = document.contents.items.find((p) => p.key?.value === "pulled_at");
    if (pair) pair.value.comment = ` chain head ${blockNumber} at read time`;
  }
  return document.toString({ lineWidth: 0 });
}

/**
 * Validates then writes content/pulled/<slug>.yaml. Throws on a schema failure so an invalid
 * document can never reach disk. `dry: true` returns the text without touching the filesystem.
 */
export async function writePulled(doc, { dir = "content/pulled", blockNumber = null, dry = false, validate } = {}) {
  const ordered = orderDocument(doc);
  const check = validate ?? createValidator();
  const errors = check(ordered);
  if (errors.length) throw new Error(`content/pulled/${doc.slug}.yaml failed schema:\n  ${errors.join("\n  ")}`);
  const text = toYaml(ordered, { blockNumber });
  const path = join(dir, `${doc.slug}.yaml`);
  if (dry) return { path, text, written: false };
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, text, "utf8");
  return { path, text, written: true };
}

// --- snapshots ------------------------------------------------------------
//
// content/pulled/<slug>.yaml is a photograph: fully rewritten every run, so yesterday's holder count
// is gone the moment today's lands. The history file is the film strip. One append-only JSON line per
// run per slug carries the handful of figures worth trending, and nothing ever edits a line already
// written — a rewrite would silently revise the past, which is exactly what the trend is supposed to
// catch. Everything below is dependency-free and synchronous so the site can read it at build time.

/** The one token holder count worth trending: the project's own token, else the largest seen. */
export function tokenHolders(doc) {
  const addresses = doc?.addresses ?? [];
  const token = addresses.find((a) => a?.role === "token" && Number.isInteger(a?.holders));
  if (token) return token.holders;
  const counts = addresses.map((a) => a?.holders).filter(Number.isInteger);
  return counts.length ? Math.max(...counts) : null;
}

/** Reduces one pulled document to the snapshot row. Every field may legitimately be null. */
export function snapshotFrom(doc) {
  const market = doc?.market ?? null;
  const activity = doc?.activity ?? null;
  const counts = (activity?.addresses ?? []).map((a) => a?.transactions_count).filter(Number.isInteger);
  const tvl = (doc?.metrics ?? []).find((m) => m?.kind === "tvl");
  const revenue = (doc?.metrics ?? []).find((m) => m?.kind === "revenue_24h");
  return {
    at: doc?.pulled_at ?? null,
    holders: tokenHolders(doc),
    liquidity_usd: market?.liquidity_usd ?? null,
    volume_h24: market?.volume_h24 ?? null,
    trades_h24: market?.trades_h24 ?? null,
    price_usd: market?.price_usd ?? null,
    market_cap: market?.market_cap_usd ?? null,
    fdv: market?.fdv ?? null,
    txns_total: counts.length ? counts.reduce((a, b) => a + b, 0) : null,
    launches_24h: activity?.launches_24h ?? null,
    tvl: typeof tvl?.value === "number" ? tvl.value : null,
    revenue_24h: typeof revenue?.value === "number" ? revenue.value : null,
    top10_share: typeof market?.top10_share === "number" ? market.top10_share : null,
  };
}

/** Appends one line. Never rewrites: the file is opened for append and closed, nothing is read. */
export function appendHistory(slug, snapshot, { dir = HISTORY_DIR } = {}) {
  const row = {};
  for (const k of HISTORY_KEYS) row[k] = snapshot[k] ?? null;
  const path = join(dir, `${slug}.jsonl`);
  mkdirSync(dir, { recursive: true });
  appendFileSync(path, `${JSON.stringify(row)}\n`, "utf8");
  return { path, row };
}

/** Parses history text. A corrupt line is skipped rather than throwing away the whole series. */
export function parseHistory(text) {
  const rows = [];
  for (const line of String(text ?? "").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const row = JSON.parse(trimmed);
      if (row && typeof row === "object" && typeof row.at === "string") rows.push(row);
    } catch {
      // A half-written line from an interrupted run is not worth failing a page render over.
    }
  }
  return rows.sort((a, b) => Date.parse(a.at) - Date.parse(b.at));
}

/** Every snapshot for one slug, oldest first. A slug with no history yet returns []. */
export function readHistory(slug, { dir = HISTORY_DIR } = {}) {
  const path = join(dir, `${slug}.jsonl`);
  if (!existsSync(path)) return [];
  return parseHistory(readFileSync(path, "utf8"));
}

/**
 * Change in one figure over `days`, measured from the newest snapshot back to the newest snapshot at
 * least that old. Returns null when the series does not yet reach back far enough, so a caller can
 * render "no trend yet" rather than a fake zero. `delta` alone is null when either end is missing
 * the figure — the two ends still come back, because knowing the figure only started being collected
 * on the later date is itself worth showing.
 */
export function deltaFrom(history, key, days) {
  if (!Array.isArray(history) || history.length < 2) return null;
  const sorted = [...history].sort((a, b) => Date.parse(a.at) - Date.parse(b.at));
  const latest = sorted[sorted.length - 1];
  const latestAt = Date.parse(latest?.at);
  if (!Number.isFinite(latestAt)) return null;

  const cutoff = latestAt - days * 24 * 60 * 60 * 1000;
  let then = null;
  for (let i = sorted.length - 2; i >= 0; i--) {
    const at = Date.parse(sorted[i]?.at);
    if (Number.isFinite(at) && at <= cutoff) {
      then = sorted[i];
      break;
    }
  }
  if (then === null) return null;

  const now = typeof latest[key] === "number" ? latest[key] : null;
  const before = typeof then[key] === "number" ? then[key] : null;
  return {
    value_now: now,
    value_then: before,
    delta: now !== null && before !== null ? now - before : null,
    then_at: then.at,
  };
}
