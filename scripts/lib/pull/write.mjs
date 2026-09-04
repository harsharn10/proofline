// Shaping, validation and serialisation of content/pulled/<slug>.yaml.
// The schema is compiled here with its own Ajv instance, not through scripts/lib/schemas.mjs:
// pulled files are machine output and must not become a content-validation dependency.

import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { Document } from "yaml";

const DOC_KEYS = ["slug", "pulled_at", "chain", "addresses", "metrics", "market", "structure", "activity", "reads", "errors"];
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
  "top10_share_ex_pools", "burned_share", "top10_as_of", "launchpad", "rialto",
  "pair_asset", "volume_disagreement", "errors",
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
const RIALTO_KEYS = ["pairs", "volume_24h_usd", "volume_note", "as_of", "source_url"];
const RIALTO_PAIR_KEYS = [
  "pool_id", "base", "target", "last_price", "base_volume_24h", "target_volume_24h", "volume_24h_usd",
];
const PAIR_ASSET_KEYS = [
  "ticker", "name", "address", "category", "tokenized_value_usd", "tokenized_shares", "change_7d", "source_url",
];
const VOLUME_DISAGREEMENT_KEYS = ["dexscreener_usd", "rialto_usd"];
const READ_KEYS = ["tier", "explorer"];
const EXPLORER_READ_KEYS = ["kind", "address", "status", "reason", "signal_value", "checked_at", "stale_since", "credits"];

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
  if (doc.reads) ordered.reads = pick(doc.reads, READ_KEYS);
  else delete ordered.reads;
  if (ordered.reads) ordered.reads.explorer = (doc.reads.explorer ?? []).map((row) => pick(row, EXPLORER_READ_KEYS));
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
  ordered.rialto = market.rialto ? pick(market.rialto, RIALTO_KEYS) : null;
  if (ordered.rialto) ordered.rialto.pairs = (market.rialto.pairs ?? []).map((pair) => pick(pair, RIALTO_PAIR_KEYS));
  ordered.pair_asset = market.pair_asset ? pick(market.pair_asset, PAIR_ASSET_KEYS) : null;
  ordered.volume_disagreement = market.volume_disagreement
    ? pick(market.volume_disagreement, VOLUME_DISAGREEMENT_KEYS)
    : null;
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

function compileValidator(name, schemaDir, select = (schema) => schema) {
  const read = (schemaName) => JSON.parse(readFileSync(new URL(`${schemaName}.schema.json`, schemaDir), "utf8"));
  const ajv = new Ajv({ allErrors: true, strict: true, strictTypes: false });
  addFormats(ajv);
  ajv.addSchema(read("shared"));
  const source = read(name);
  const validate = ajv.compile(select(source));
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

export function createChainValidator(schemaDir = new URL("../../../schema/", import.meta.url)) {
  return compileValidator("pulled-chain", schemaDir);
}

export function createDiscoveryValidator(schemaDir = new URL("../../../schema/", import.meta.url)) {
  return compileValidator("pulled-chain", schemaDir, (schema) => ({
    $schema: schema.$schema,
    $id: "pulled-discovery",
    ...schema.$defs.discoveryDocument,
    $defs: schema.$defs,
  }));
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

const CHAIN_KEYS = ["pulled_at", "tvl", "economics", "activity", "tokenization", "transfers", "mintburn"];
const TVL_KEYS = ["total_tracked_usd", "stablecoin_usd", "asset_supply_usd", "by_category", "by_protocol", "source_url", "errors"];
const ECONOMICS_KEYS = ["cum_fee_revenue_usd", "cum_gross_profit_usd", "gross_margin_pct", "latest_day", "source_url", "errors"];
const ACTIVITY_CHAIN_KEYS = ["latest_day", "daily_volume_usd", "active_wallets", "tx_count", "source_url", "errors"];
const TOKENIZATION_KEYS = ["assets", "value_usd", "mint_24h_usd", "net_minting", "source_url", "errors"];
const TRANSFER_KEYS = ["d1_volume_usd", "d7_volume_usd", "all_time_transfers", "source_url", "errors"];
const MINTBURN_KEYS = ["mint_24h_usd", "cumulative_net_usd", "source_url", "errors"];
const ROLLUP_KEYS = ["latest", "sum_7d", "sum_30d"];

export function orderChainDocument(doc) {
  const ordered = pick(doc, CHAIN_KEYS);
  ordered.tvl = pick(doc.tvl ?? {}, TVL_KEYS);
  ordered.tvl.by_category = (doc.tvl?.by_category ?? []).map((row) => pick(row, ["category", "tvl_usd"]));
  ordered.tvl.by_protocol = (doc.tvl?.by_protocol ?? []).map((row) => pick(row, ["protocol", "category", "tvl_usd", "total_tracked_tvl", "share"]));
  ordered.tvl.errors = orderErrors(doc.tvl?.errors);
  ordered.economics = pick(doc.economics ?? {}, ECONOMICS_KEYS);
  ordered.economics.errors = orderErrors(doc.economics?.errors);
  ordered.activity = pick(doc.activity ?? {}, ACTIVITY_CHAIN_KEYS);
  for (const key of ["daily_volume_usd", "active_wallets", "tx_count"]) {
    ordered.activity[key] = pick(doc.activity?.[key] ?? {}, ROLLUP_KEYS);
  }
  ordered.activity.errors = orderErrors(doc.activity?.errors);
  ordered.tokenization = pick(doc.tokenization ?? {}, TOKENIZATION_KEYS);
  ordered.tokenization.errors = orderErrors(doc.tokenization?.errors);
  ordered.transfers = pick(doc.transfers ?? {}, TRANSFER_KEYS);
  ordered.transfers.errors = orderErrors(doc.transfers?.errors);
  ordered.mintburn = pick(doc.mintburn ?? {}, MINTBURN_KEYS);
  ordered.mintburn.errors = orderErrors(doc.mintburn?.errors);
  return ordered;
}

export async function writeChainPulled(doc, {
  path = "content/pulled/chain.yaml", dry = false, validate = createChainValidator(),
} = {}) {
  const ordered = orderChainDocument(doc);
  const errors = validate(ordered);
  if (errors.length) throw new Error(`${path} failed schema:\n  ${errors.join("\n  ")}`);
  const text = toYaml(ordered);
  if (!dry) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, text, "utf8");
  }
  return { path, text, written: !dry };
}

export async function writeDiscovery(doc, {
  path = "content/pulled/discovery.yaml", dry = false, validate = createDiscoveryValidator(),
} = {}) {
  const ordered = {
    pulled_at: doc.pulled_at ?? null,
    candidates: (doc.candidates ?? []).map((row) => pick(row, [
      "address", "symbol", "name", "first_seen", "rialto_volume_24h_usd", "dexscreener_liquidity_usd", "source_urls",
    ])),
    errors: orderErrors(doc.errors),
  };
  const errors = validate(ordered);
  if (errors.length) throw new Error(`${path} failed schema:\n  ${errors.join("\n  ")}`);
  const text = toYaml(ordered);
  if (!dry) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, text, "utf8");
  }
  return { path, text, written: !dry };
}

export const CHAIN_SERIES_PATH = "content/pulled/series/chain.json";
export const CHAIN_SERIES_KEYS = [
  "tvl_by_category_daily", "volume_daily", "active_wallets_daily", "fee_revenue_daily",
];

export async function readChainSeries({ path = CHAIN_SERIES_PATH } = {}) {
  try {
    const parsed = JSON.parse(await readFile(path, "utf8"));
    return Object.fromEntries(CHAIN_SERIES_KEYS.map((key) => [key, Array.isArray(parsed?.[key]) ? parsed[key] : []]));
  } catch {
    return Object.fromEntries(CHAIN_SERIES_KEYS.map((key) => [key, []]));
  }
}

export async function writeChainSeries(series, { path = CHAIN_SERIES_PATH, dry = false } = {}) {
  const existing = await readChainSeries({ path });
  const kept = [];
  const next = {};
  for (const key of CHAIN_SERIES_KEYS) {
    const incoming = Array.isArray(series?.[key]) ? series[key] : [];
    const current = existing[key] ?? [];
    if (incoming.length === 0 || incoming.length < current.length) {
      next[key] = current;
      if (current.length > incoming.length) kept.push({ key, incoming: incoming.length, existing: current.length });
    } else {
      next[key] = incoming;
    }
  }
  const hasAny = CHAIN_SERIES_KEYS.some((key) => next[key].length > 0);
  const text = hasAny ? `${JSON.stringify(next, null, 2)}\n` : null;
  if (!dry && text) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, text, "utf8");
  }
  return { path, text, written: !dry && Boolean(text), kept };
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
