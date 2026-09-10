#!/usr/bin/env node
// scripts/pull.mjs — the machine writer for content/pulled/<slug>.yaml.
//
// For every census slug whose project file lists at least one real Robinhood Chain address, this
// reproduces the chain facts a researcher would otherwise type: is it a contract, is its source
// verified, what does owner() return, is that owner a Safe and at what threshold, are the EIP-1967
// proxy slots set, when was it created, how many holders does the token have, what does the token
// trade at and how deep is its liquidity, is anyone still calling the contracts today, and what does
// DefiLlama report for the protocol's Robinhood Chain slice. Output is machine-owned: fully
// regenerated each run, never hand-edited, and never cited as evidence by a packet or a profile
// (docs/research-system.md §1-2). A packet cites the same Blockscout/RPC/DefiLlama receipt directly.
//
// Structure over time. The YAML file is a full rewrite each run, so it can only ever say what is
// true now. Alongside it, one appended line per run per slug in content/pulled/history/<slug>.jsonl
// keeps the few figures worth trending — holders, liquidity, volume, trades, price, FDV, lifetime
// transactions, launches, TVL. Nothing rewrites an earlier line, so the series is the one part of
// this output that a bad run cannot retroactively revise.
//
// The Cloudflare fallback. Blockscout's API sits behind Cloudflare bot protection and can answer a
// plain HTTP client with a 403 or an HTML challenge page instead of JSON. Requests therefore carry a
// browser User-Agent and Accept: application/json. When a challenge still comes back, the failure is
// recorded on that address as { step: "blockscout", message } and the row keeps whatever the RPC
// produced, so a future run in a different network environment can tell an RPC-only row from a
// complete one by its errors[] rather than by a missing field. `--rpc-only` skips Blockscout
// entirely. One blocked address never fails the run.
//
// The Rialto refresh. A full run walks Blockscout for every address whose change signal moved, and
// is bounded by a credit cap and a wall-clock deadline rather than by how long the registry is.
// Rialto's own reads take under a minute, so `--source rialto` refreshes
// only what Rialto produces — chain.yaml, series/chain.json, discovery.yaml, and each name's
// market.rialto, market.pair_asset and market.volume_disagreement — against the file already on
// disk, with one DexScreener read per Rialto-matched name so both sides of the volume comparison
// come from the same minute. It appends no history line: a snapshot is only ever taken from a whole
// read, and this mode does not have one.
//
// The budget. The explorer is the only paid source, so every read is decided by a one-credit change
// signal — page one of the address's inbound transaction list, which is also page one of the 24-hour
// walk — and bounded by a per-run credit cap, a per-UTC-day cap and a wall-clock deadline. Reaching
// any of them defers the remaining explorer reads, keeps the committed facts with their stale dates,
// and exits zero. See docs/integrations/pull.md.
//
// Usage: node scripts/pull.mjs [--slug <slug>] [--only <slug,slug>] [--rpc-only] [--full]
//                              [--tier hot|live|quiet|dormant] [--shard INDEX/TOTAL]
//                              [--source rialto | --rialto-only] [--dry]

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join, basename } from "node:path";
import { parse } from "yaml";

import { createPacer, mapWithConcurrency } from "./lib/pull/http.mjs";
import { createRpcClient, readAddress as readRpc, RPC_URL } from "./lib/pull/rpc.mjs";
import {
  createBlockscoutClient,
  readAddress as readBlockscout,
  resolveBlockscoutConfig,
  createBlockscoutTracker,
  blockscoutChallengeGate,
} from "./lib/pull/blockscout.mjs";
import { createLlamaClient, findLlamaSlug, readProtocol } from "./lib/pull/llama.mjs";
import {
  createDexscreenerClient,
  readMarket,
  emptyMarket,
  DEXSCREENER_BASE,
} from "./lib/pull/dexscreener.mjs";
import {
  createActivityClient,
  readAddressActivity,
  parseTransactionsPage,
  newestInbound,
  aggregateActivity,
  emptyActivity,
} from "./lib/pull/activity.mjs";
import {
  writePulled,
  createValidator,
  appendHistory,
  readHistory,
  snapshotFrom,
  writeChainPulled,
  writeChainSeries,
  writeDiscovery,
} from "./lib/pull/write.mjs";
import {
  buildLaunchpadIndex,
  excludedHolderAddresses,
  attributeCreator,
  launchpadSlugsFrom,
} from "./lib/pull/attribution.mjs";
import { readTop10, readMintAndRenounce, readLpLocks, renouncedFromOwner, LP_REASON } from "./lib/pull/token.mjs";
import { writeSeries, seriesReplacement } from "./lib/pull/series.mjs";
import {
  createRialtoClient,
  readRialto,
  rialtoMarketFor,
  volumeDisagreement,
  pairAssetFor,
  discoveryCandidates,
  RIALTO_BASE,
} from "./lib/pull/rialto.mjs";
import { createCreditBudget, blockscoutCreditCost } from "./lib/pull/budget.mjs";
import { openActivityCache } from "./lib/pull/activity-cache.mjs";
import { createPullAttempt, finishPullAttempt } from './lib/pull/attempt.mjs';
import { quietTokenScreen } from './lib/pull/quiet-token.mjs';
import { buildRelationships, relationshipIndex, addressKey, isOwnDeployment, referenceReason } from "./lib/relationships.mjs";
import { refreshDecision, selectRefreshTargets, hasIdentityConflict, selectInfrastructureReaders } from "./lib/refresh-policy.mjs";
import { refreshReviewStatus } from './lib/refresh-review.mjs';
import {
  consumeQueue,
  explorerChangeDecision,
  needsExplorerSignal,
  parseShard,
  projectDailyCredits,
  scaleTierMix,
  shardFor,
  TIER_DAILY_READS,
} from "./lib/pull/tiers.mjs";
import { locatedOnChain, meetsShareBar, officialSurfaceConfirmed } from "./lib/share-bar.mjs";

const CHAIN = "robinhood-chain";
const CONCURRENCY = 4;
const NOT_VERIFIED = "not-verified";

const SOURCES = new Set(["rialto"]);

export function parseArgs(argv) {
  const args = { only: null, rpcOnly: false, rialtoOnly: false, dry: false, full: false, tier: null, shard: null };
  const source = (value) => {
    const name = String(value ?? "").trim().toLowerCase();
    if (!SOURCES.has(name)) throw new Error(`--source takes one of: ${[...SOURCES].join(", ")}`);
    args.rialtoOnly = true;
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--slug") args.only = [argv[++i] ?? ""];
    else if (a.startsWith("--slug=")) args.only = [a.slice(7)];
    else if (a === "--only") args.only = String(argv[++i] ?? "").split(",");
    else if (a.startsWith("--only=")) args.only = a.slice(7).split(",");
    else if (a === "--rpc-only") args.rpcOnly = true;
    else if (a === "--rialto-only") args.rialtoOnly = true;
    else if (a === "--full") args.full = true;
    else if (a === "--plan") args.plan = true;
    else if (a === "--tier") args.tier = String(argv[++i] ?? "").trim().toLowerCase();
    else if (a.startsWith("--tier=")) args.tier = a.slice(7).trim().toLowerCase();
    else if (a === "--shard") args.shard = parseShard(argv[++i]);
    else if (a.startsWith("--shard=")) args.shard = parseShard(a.slice(8));
    else if (a === "--source") source(argv[++i]);
    else if (a.startsWith("--source=")) source(a.slice(9));
    else if (a === "--dry" || a === "--dry-run") args.dry = true;
    else throw new Error(`unknown argument ${a}`);
  }
  if (args.tier && !["hot", "live", "quiet", "dormant"].includes(args.tier)) {
    throw new Error("--tier takes one of: hot, live, quiet, dormant");
  }
  if (args.only) {
    args.only = [...new Set(args.only.map((slug) => slug.trim()).filter(Boolean))];
    if (args.only.length === 0) throw new Error("--only requires one or more comma-separated slugs");
  }
  if (args.rpcOnly && args.rialtoOnly) throw new Error("--rpc-only and --source rialto ask for opposite runs");
  return args;
}

const readYaml = async (path) => parse(await readFile(path, "utf8"));
const readJson = async (path, fallback) => {
  try { return JSON.parse(await readFile(path, "utf8")); } catch { return fallback; }
};

const priorAddressFor = (doc, address) => (doc?.addresses ?? [])
  .find((row) => row.address?.toLowerCase() === address.toLowerCase()) ?? null;
const priorActivityFor = (doc, address) => (doc?.activity?.addresses ?? [])
  .find((row) => row.address?.toLowerCase() === address.toLowerCase()) ?? null;
const priorReadFor = (doc, kind, address) => (doc?.reads?.explorer ?? [])
  .find((row) => row.kind === kind && String(row.address ?? "").toLowerCase() === String(address ?? "").toLowerCase()) ?? null;

const hasBudgetDeferral = (errors = []) => errors.some((error) => /deferred: budget/i.test(error?.message ?? ""));
const carry = (fresh, previous, keys) => {
  const out = { ...fresh };
  for (const key of keys) if (out[key] == null && previous?.[key] != null) out[key] = previous[key];
  return out;
};

export function carryAddressFacts(fresh, previous) {
  return carry(fresh, previous, ["is_contract", "source_verified", "contract_name", "created_block", "created_at", "holders"]);
}

/**
 * The lifetime facts of an address's activity. Each of these only ever goes stale — a transaction
 * that happened stays happened — so carrying the committed value under a new read is honest.
 * Deliberately not here: `txns_24h` and `launches_24h`, which are measurements of a window and mean
 * nothing without the window they were measured over. See `activityWindow`.
 */
export function carryActivityFacts(fresh, previous) {
  return carry(fresh, previous, ["transactions_count", "token_transfers_count", "last_tx_at", "last_method"]);
}

export const EMPTY_READ_MESSAGE = "read returned empty where a value existed; kept previous";

/**
 * Ownership and proxy classification, guarded against a read that came back empty.
 *
 * On 2026-09-04 a run whose explorer and node reads were being refused published `owner: null`,
 * `owner_type: none` and `safe: null` on 82 address rows, 35 of them with `errors: []`, and the
 * signals feed downstream read that as "Pons renounced ownership". A null where the committed
 * snapshot held a value is a failed read until proven otherwise: keep the previous value, date it,
 * and say so. A genuine renouncement does not arrive as an absence — it arrives as `owner()`
 * returning the zero address, which is a value and passes straight through. An empty answer is
 * written only when the very next pull reads it empty again, so one bad minute cannot rewrite a fact.
 */
export function emptyReadMessage(field) {
  return `${field}: ${EMPTY_READ_MESSAGE}`;
}

export function carryOwnershipFacts(fresh, previous, { unread = {}, previousErrors = [] } = {}) {
  const out = { ...fresh };
  const errors = [...(out.errors ?? [])];
  // An address row names the producer that ran the read, not the field that came back empty (see
  // schema/pulled.schema.json), so the field leads the message instead.
  const confirmedBefore = (field) =>
    previousErrors.some((error) => error?.message === emptyReadMessage(field));
  const keepOwner = () => {
    out.owner = previous.owner;
    out.owner_type = previous.owner_type ?? "unknown";
    out.safe = previous.safe ?? null;
  };

  if (previous?.owner != null && out.owner == null) {
    if (unread.owner) keepOwner(); // the probe failed and recorded why; the recorded error explains it
    else if (!confirmedBefore("owner")) {
      keepOwner();
      errors.push({ step: "rpc", message: emptyReadMessage("owner") });
    }
  } else if (previous?.safe != null && out.safe == null && out.owner === previous.owner) {
    if (unread.safe) out.safe = previous.safe;
    else if (!confirmedBefore("safe")) {
      out.safe = previous.safe;
      errors.push({ step: "rpc", message: emptyReadMessage("safe") });
    }
  }

  const priorProxy = previous?.proxy ?? null;
  if (priorProxy && priorProxy.type !== "unknown" && out.proxy?.type === "unknown") {
    if (unread.proxy) out.proxy = priorProxy;
    else if (!confirmedBefore("proxy")) {
      out.proxy = priorProxy;
      errors.push({ step: "rpc", message: emptyReadMessage("proxy") });
    }
  }

  out.errors = errors;
  return out;
}

/**
 * The 24-hour window on one address row.
 *
 * `txns_24h` and `launches_24h` are not facts, they are measurements of the day before the read. A
 * run that did not walk cannot restate them under its own `pulled_at` without redefining the window
 * it claims to have measured — a factory that launched 24 tokens yesterday and nothing since would
 * report 24 launches in the last 24 hours for ever. So a carried figure keeps the timestamp of the
 * run that actually measured it (`window_as_of`), carries `stale_since`, and keeps the errors that
 * qualified it — above all the "count is a floor" caveat a page-capped walk leaves behind, which is
 * the difference between a measured 2,000 and a lower bound that could be 50,000.
 */
export function activityWindow(fresh, previous, { measured, pulledAt, previousAsOf = null }) {
  if (measured) {
    return {
      ...fresh,
      window_as_of: pulledAt,
      stale_since: null,
    };
  }
  const asOf = previous?.window_as_of ?? previousAsOf ?? null;
  const carried = previous?.txns_24h != null || previous?.launches_24h != null;
  return {
    ...fresh,
    txns_24h: carried ? previous?.txns_24h ?? null : null,
    launches_24h: carried ? previous?.launches_24h ?? null : null,
    window_as_of: carried ? asOf : null,
    stale_since: carried ? previous?.stale_since ?? asOf : null,
    errors: [
      ...(fresh.errors ?? []),
      // The caveat travels with the number it qualifies, or the floor reads as a count.
      ...(carried ? (previous?.errors ?? []).filter((error) => error?.step === "txns_24h capped") : []),
    ],
  };
}

export function carryMarketFacts(fresh, previous) {
  const out = carry(fresh, previous, ["launchpad"]);
  // These shares are one measurement. A fresh null (e.g. all supply burned) must not
  // acquire an older concentration under the new measurement's date.
  if (fresh.top10_as_of == null) {
    for (const key of ["top10_share", "top10_share_ex_pools", "burned_share", "top10_as_of"]) out[key] = previous?.[key] ?? fresh[key] ?? null;
  }
  out.errors = uniqueErrors([...(fresh.errors ?? []), ...(previous?.errors ?? []).filter(error =>
    (fresh.top10_as_of == null && ["top10_share", "top10_share_ex_pools", "burned_share"].includes(error.step)) ||
    (fresh.launchpad == null && error.step === "launchpad"))]);
  return out;
}

const uniqueErrors = errors => [...new Map(errors.map(error => [`${error.step}:${error.message}`, error])).values()];

export function carryStructureFacts(fresh, previous, { mintMeasured = false, renouncedMeasured = false } = {}) {
  // A skipped block keeps both its date and its caveats. Never infer a legacy field
  // date from pulled_at: older writers advanced that date without remeasurement.
  if (fresh === null) return previous ? structuredClone(previous) : null;
  const out = { ...fresh };
  const measured = { mint: mintMeasured && fresh.mint !== "unknown" && fresh.mint != null,
    renounced: renouncedMeasured && fresh.renounced != null };
  for (const key of ["mint", "renounced"]) {
    out[key] = measured[key] ? fresh[key] : previous?.[key] ?? (key === "mint" ? "unknown" : null);
    out[`${key}_as_of`] = measured[key] ? fresh.pulled_at : previous?.[`${key}_as_of`] ?? null;
  }
  let carriedLp = false;
  const unavailable = new Set([LP_REASON.detailsUnavailable, LP_REASON.holdersUnavailable, LP_REASON.noSupply]);
  out.lp = (fresh.lp ?? []).map(row => {
    const prior = previous?.lp?.find(old => old.pair?.toLowerCase() === row.pair?.toLowerCase());
    if (row.locked_share == null && unavailable.has(row.reason) && prior?.locked_share != null) {
      carriedLp = true;
      return { ...prior, as_of: prior.as_of ?? null, reason: row.reason };
    }
    return { ...row, as_of: row.locked_share != null ? fresh.pulled_at : null };
  });
  if (!out.lp.length && previous?.lp?.length) {
    carriedLp = true;
    out.lp = previous.lp.map(row => ({ ...row, as_of: row.as_of ?? null }));
  }
  out.errors = uniqueErrors([...(fresh.errors ?? []), ...(previous?.errors ?? []).filter(error =>
    (error.step === "mint" && !measured.mint) || (error.step === "renounced" && !measured.renounced) ||
    (error.step === "lp" && carriedLp))]);
  return out;
}

export function explorerReadRecord({
  kind, address = null, status, reason, signalValue = null, signal = null, codeHash = null,
  checkedAt, previous = null, credits = 0,
}) {
  return {
    kind,
    address,
    status,
    reason,
    signal_value: Number.isInteger(signalValue) && signalValue >= 0 ? signalValue : null,
    // The signal that decided this read. For a contract it is the hash of the newest transaction to
    // the address, which is what the next run compares against; `signal_value` stays the integer
    // form for the RPC nonce and the DexScreener trade count.
    signal: typeof signal === "string" && signal.length > 0 ? signal : null,
    code_hash: typeof codeHash === "string" && codeHash.length > 0 ? codeHash : null,
    checked_at: checkedAt,
    stale_since: status === "read" ? null : previous?.stale_since ?? previous?.checked_at ?? null,
    credits,
  };
}

export function aboveShareBar(census, pulled, context = null) {
  const tvl = pulled?.metrics?.find((metric) => metric.kind === "tvl")?.value ?? null;
  const usesLiquidity = census?.identity?.entity_kind === "token" || census?.tree?.primary?.startsWith("launch/");
  if (context) {
    const { project, index, now = Date.now() } = context;
    const observedAt = usesLiquidity ? pulled?.market?.pulled_at : pulled?.metrics?.find(m => m.kind === 'tvl')?.as_of;
    const age = now - Date.parse(observedAt);
    // Selection can use a recent stale measurement to recover it, but not an undated or
    // months-old value. Public display keeps its stricter 36-hour freshness policy.
    if (!Number.isFinite(age) || age < 0 || age > 7 * 86_400_000) return false;
    if (usesLiquidity && !(project.deployments ?? []).some(d => d.role === 'token' &&
        addressKey(d.chain, d.address) === addressKey(pulled?.chain, pulled?.market?.token_address) &&
        isOwnDeployment(project, d, index))) return false;
  }
  return meetsShareBar({
    officialConfirmed: officialSurfaceConfirmed(census) || Boolean(context && refreshReviewStatus({
      project:context.project,census,sources:context.sources,index:context.index,now:context.now}).community &&
      addressKey(context.project.refresh_review.chain,context.project.refresh_review.address) ===
        addressKey(pulled?.chain,pulled?.market?.token_address)),
    hasContractOn4663: locatedOnChain(pulled),
    shareBarMetric: usesLiquidity ? "liquidity" : "tvl",
    kpis: { liquidityUsd: pulled?.market?.liquidity_usd ?? null, tvl },
  });
}

/**
 * Keeps one promise for each client method/argument tuple during a pull. The census can point many
 * names at the same contracts; sharing those reads makes every name use the same snapshot and keeps
 * a full run bounded without changing the source clients or their retry behavior.
 */
export function memoizeClient(client) {
  const cache = new Map();
  return new Proxy(client, {
    get(target, property, receiver) {
      const method = Reflect.get(target, property, receiver);
      if (typeof method !== "function") return method;
      return (...args) => {
        const normalized = JSON.stringify(args, (_key, value) =>
          typeof value === "string" && /^0x[0-9a-fA-F]{40}$/.test(value) ? value.toLowerCase() : value);
        const key = `${String(property)}:${normalized}`;
        // Some clients expose synchronous URL builders alongside asynchronous reads. Preserve the
        // original return type while still sharing in-flight promises from network methods.
        if (!cache.has(key)) cache.set(key, method.apply(target, args));
        return cache.get(key);
      };
    },
  });
}

/** One row per address to pull, deduplicated within a slug, first label and role winning. */
export function addressesFor(project, index = null) {
  const seen = new Map();
  for (const d of project?.deployments ?? []) {
    // References remain on the relationship map, not a repeated per-project token read.
    if (d.role === 'reference-token' || index && ['token', 'other'].includes(d.role) && referenceReason(d, index)) continue;
    if (d?.chain !== CHAIN) continue;
    if (!d?.address || d.address === NOT_VERIFIED) continue;
    const key = d.address.toLowerCase();
    if (seen.has(key)) continue;
    seen.set(key, { address: d.address, label: d.label ?? null, role: d.role ?? "other" });
  }
  return [...seen.values()];
}

/** Merges an RPC read and a Blockscout read into one schema-shaped address row. */
export function mergeAddress(base, rpc, blockscout) {
  return {
    address: base.address,
    label: base.label,
    role: base.role,
    // The RPC is authoritative on code; Blockscout only fills in when the node read failed.
    is_contract: rpc?.is_contract ?? blockscout?.is_contract ?? null,
    source_verified: blockscout?.source_verified ?? null,
    contract_name: blockscout?.contract_name ?? null,
    proxy: rpc?.proxy ?? { type: "unknown", implementation: null, admin: null },
    owner: rpc?.owner ?? null,
    owner_type: rpc?.owner_type ?? "unknown",
    safe: rpc?.safe ?? null,
    created_block: blockscout?.created_block ?? null,
    created_at: blockscout?.created_at ?? null,
    holders: blockscout?.holders ?? null,
    errors: [...(rpc?.errors ?? []), ...(blockscout?.errors ?? [])],
  };
}

/** The token whose market to read: the first robinhood-chain deployment the census calls a token. */
export function tokenAddressFor(addresses = []) {
  return addresses.find((a) => a.role === "token")?.address ?? null;
}

/** Every error the document carries, across the address rows, the market and the activity block. */
export function countErrors(doc) {
  const addressErrors = (doc.addresses ?? []).reduce((n, a) => n + (a.errors?.length ?? 0), 0);
  const activityErrors = (doc.activity?.addresses ?? []).reduce((n, a) => n + (a.errors?.length ?? 0), 0);
  return addressErrors + activityErrors + (doc.market?.errors?.length ?? 0) +
    (doc.structure?.errors?.length ?? 0) + (doc.errors?.length ?? 0);
}

/**
 * Groups error messages for the closing report. Addresses and transaction hashes collapse to <hex>
 * so one shared failure mode counts once instead of once per address.
 */
export function errorKey(error) {
  return `${error.step}: ${String(error.message).replace(/0x[0-9a-fA-F]{6,}/g, "<hex>")}`;
}

const tally = (map, error) => {
  const key = errorKey(error);
  map.set(key, (map.get(key) ?? 0) + 1);
};

/** One printed line per slug: what the run produced and what it could not. */
export function summaryLine(slug, doc) {
  const a = doc.addresses;
  const parts = [
    `${a.length} addresses`,
    `${a.filter((x) => x.owner).length} owners`,
    `${a.filter((x) => x.owner_type === "safe").length} safes`,
    `${a.filter((x) => x.holders !== null).length} holders`,
    `${doc.metrics.length} metrics`,
    `${doc.market?.pairs?.length ?? 0} pairs`,
    `${doc.market?.top10_share !== null && doc.market?.top10_share !== undefined ? "top-10" : "no top-10"}`,
    `${doc.structure?.lp?.filter((row) => row.locked_share !== null).length ?? 0} LP reads`,
    `${doc.activity?.txns_24h ?? "—"} txns/24h`,
    `${countErrors(doc)} errors`,
  ];
  return `${slug.padEnd(24)} ${parts.join(" · ")}`;
}

/**
 * Rebuilds one name's market block from the file already on disk. Only the two sources this mode
 * reads are replaced: the Rialto joins always, and the DexScreener figures when Rialto matched the
 * token, so the two 24h volumes being compared are read minutes apart at worst. Everything the
 * Blockscout walk produced — the top-10 concentration, the launchpad attribution, the burned share —
 * is carried through untouched and keeps its own top10_as_of.
 */
export function refreshedMarket(previous, { fresh, rialtoMarket, project, censusRow, reference, rialtoErrors }) {
  const market = { ...previous, ...(fresh ?? {}) };
  market.errors = [
    ...(previous.errors ?? []).filter((error) => error.step !== "rialto" && !(fresh && error.step === "dexscreener")),
    ...(fresh?.errors ?? []),
    ...rialtoErrors,
  ];
  market.rialto = rialtoMarket;
  market.pair_asset = reference ? pairAssetFor(project, censusRow, market, rialtoMarket, reference) : null;
  market.volume_disagreement = volumeDisagreement(market.volume_h24 ?? null, rialtoMarket?.volume_24h_usd ?? null);
  return market;
}

/**
 * `--source rialto` / `--rialto-only`. Rewrites the Rialto-derived parts of every committed pulled
 * file and nothing else. No RPC, no Blockscout, no DefiLlama, and — deliberately — no history line:
 * content/pulled/history/*.jsonl is append-only and a snapshot must come from a whole read.
 */
async function refreshRialtoNames({ args, targets, rialto, rialtoFailure, discoveryCount, pulledAt, dexscreener, runErrors, started, validate }) {
  const rialtoErrors = rialto
    ? rialto.errors.map((error) => ({ step: "rialto", message: `${error.step}: ${error.message}` }))
    : rialtoFailure ? [{ step: "rialto", message: rialtoFailure }] : [];
  console.log(
    `rialto refresh · ${targets.length} slugs · ${RIALTO_BASE}` +
      `${rialto ? ` · ${discoveryCount} discovery candidates` : " unavailable"}` +
      ` · dexscreener ${DEXSCREENER_BASE}${args.dry ? " · dry run" : ""}`,
  );

  const totals = { files: 0, rialto: 0, pairAssets: 0, disagreements: 0 };
  const skipped = [];
  const failures = [];
  for (const target of targets) {
    const path = join("content/pulled", `${target.slug}.yaml`);
    const raw = await readFile(path, "utf8").catch(() => null);
    const doc = raw ? parse(raw) : null;
    if (!doc?.market) {
      skipped.push({ slug: target.slug, reason: raw ? "no market block; run a full pull first" : "no committed file; run a full pull first" });
      continue;
    }
    const tokenAddress = doc.market.token_address ?? null;
    const rialtoMarket = rialto && tokenAddress ? rialtoMarketFor(tokenAddress, rialto.reference, { asOf: pulledAt }) : null;
    // One DexScreener read per matched name, and only for matched names: an unmatched name has
    // nothing to compare against, so re-reading it would cost a request and change nothing.
    const fresh = rialtoMarket ? await readMarket(dexscreener, tokenAddress, { pulledAt }) : null;
    doc.market = refreshedMarket(doc.market, {
      fresh,
      rialtoMarket,
      project: target.project,
      censusRow: target.census,
      reference: rialto?.reference ?? null,
      rialtoErrors,
    });
    // The RPC facts in this file were read at that head and are untouched, so the annotation stays.
    const head = raw.match(/^pulled_at:.*# chain head (\d+) at read time/m)?.[1];
    try {
      const { written } = await writePulled(doc, {
        blockNumber: head ? Number(head) : null, dry: args.dry, validate,
      });
      if (written) totals.files++;
    } catch (error) {
      failures.push({ slug: target.slug, message: error.message });
      console.error(`${target.slug.padEnd(24)} NOT WRITTEN: ${error.message}`);
      continue;
    }
    if (doc.market.rialto) totals.rialto++;
    if (doc.market.pair_asset) totals.pairAssets++;
    if (doc.market.volume_disagreement) totals.disagreements++;
  }

  const seconds = ((Date.now() - started) / 1000).toFixed(1);
  console.log(
    `\n${totals.files} files · ${totals.rialto} Rialto matches · ${totals.pairAssets} pair assets · ` +
      `${totals.disagreements} volume disagreements · ${discoveryCount} discovery candidates · ` +
      `${skipped.length} skipped · ${failures.length} not written · no history lines · ${seconds}s`,
  );
  for (const row of skipped) console.log(`  skipped ${row.slug.padEnd(20)} ${row.reason}`);
  for (const row of failures) console.log(`  failed  ${row.slug.padEnd(20)} ${row.message}`);
  // Rialto is the whole point of this run, so a Rialto failure is the run failing.
  if (runErrors.some((error) => error.step === "rialto") && !args.dry) process.exit(1);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const started = Date.now();
  const pulledAt = new Date().toISOString();

  const census = await readYaml("content/census.yaml");
  const projectFiles = (await readdir("content/projects")).filter((f) => f.endsWith(".yaml"));
  const projects = new Map();
  for (const f of projectFiles) projects.set(basename(f, ".yaml"), await readYaml(join("content/projects", f)));
  const dependencies = await Promise.all((await readdir('content/dependencies')).filter(f => f.endsWith('.yaml'))
    .map(f => readYaml(join('content/dependencies', f))));
  const graph = buildRelationships([...projects.values()], dependencies);
  const graphIndex = relationshipIndex(graph);
  const censusBySlug = new Map(census.map(row => [row.slug, row]));
  const ledgers = new Map();
  for (const project of projects.values()) ledgers.set(project.slug,
    await readYaml(join('content/sources', `${project.slug}.yaml`)).catch(() => null));
  const infrastructureReaders = selectInfrastructureReaders(graphIndex, new Set([...projects.values()]
    .filter(project => censusBySlug.has(project.slug) && addressesFor(project, graphIndex).length > 0 &&
      !hasIdentityConflict(project, censusBySlug.get(project.slug), graphIndex) &&
      !refreshReviewStatus({project,census:censusBySlug.get(project.slug),sources:ledgers.get(project.slug)?.sources,
        index:graphIndex,now:Date.parse(pulledAt)}).stopped).map(project => project.slug)), CHAIN);
  const forceCadence = Boolean(args.only || args.full || args.rialtoOnly);

  const queueEntries = await readJson("ops/pull-queue.json", []);
  const queueBySlug = new Map();
  for (const entry of Array.isArray(queueEntries) ? queueEntries : []) {
    if (!entry?.slug) continue;
    const prior = queueBySlug.get(entry.slug);
    if (!prior || String(entry.at).localeCompare(String(prior.at)) > 0) queueBySlug.set(entry.slug, entry);
  }
  const allTargets = [];
  const wanted = args.only ? new Set(args.only) : null;
  for (const row of census) {
    if (wanted && !wanted.has(row.slug)) continue;
    const project = projects.get(row.slug);
    if (!project) continue;
    const addresses = addressesFor(project, graphIndex);
    // A name with no located address still gets a file when its ledger cites a DefiLlama protocol
    // page: the chain-slice metrics are worth reading on their own.
    const ledger = ledgers.get(row.slug);
    const hasLlama = Boolean(findLlamaSlug(ledger?.sources ?? []));
    if (addresses.length === 0 && !hasLlama) continue;
    const previous = await readYaml(join("content/pulled", `${row.slug}.yaml`)).catch(() => null);
    const history = readHistory(row.slug);
    const lastSnapshot = history.at(-1) ?? null;
    const refresh = refreshDecision({ project, census: row, previous, index: graphIndex, infrastructureReaders,
      sources: ledger?.sources ?? [],
      seededAt: history[0]?.at ?? previous?.pulled_at,
      aboveShareBar: aboveShareBar(row, previous, { project, index: graphIndex, sources:ledger?.sources ?? [], now: Date.parse(pulledAt) }),
      queuedAt: queueBySlug.get(row.slug)?.at ?? null,
      now: Date.parse(pulledAt),
      force: forceCadence,
    });
    allTargets.push({
      slug: row.slug,
      addresses,
      project,
      census: row,
      llamaSlug: hasLlama ? findLlamaSlug(ledger?.sources ?? []) : null,
      previous,
      lastSnapshot,
      tier: refresh.tier,
      refresh,
      queued: queueBySlug.has(row.slug),
    });
  }
  if (wanted) {
    const found = new Set(allTargets.map((target) => target.slug));
    const missing = [...wanted].filter((slug) => !found.has(slug));
    if (missing.length) throw new Error(`no census slug with a ${CHAIN} address or DefiLlama receipt: ${missing.join(", ")}`);
  }
  const selection = selectRefreshTargets(allTargets.filter((target) => {
    if (args.shard && shardFor(target.slug, args.shard.total) !== args.shard.index) return false;
    if (args.tier && target.tier !== args.tier) return false;
    return true;
  }), { force: forceCadence });
  const targets = selection.selected;
  const plan = { at: pulledAt, policy_version: 1, registry: allTargets.length,
    infrastructure: graph.addresses.filter(node => node.chain === CHAIN && node.projects.length > 1 &&
      node.projects.some(p => p.roles.some(role => ["factory", "router", "vault"].includes(role))))
      .map(node => ({ address: node.id, reader: infrastructureReaders.get(node.id) ?? null })),
    selected: targets.map(t => ({ slug: t.slug, ...t.refresh })),
    deferred: selection.deferred.map(t => ({ slug: t.slug, ...t.refresh })),
    ignored: selection.ignored.map(t => ({ slug: t.slug, reason: t.refresh.reason })),
    not_due: allTargets.filter(t => !t.refresh.due && !t.refresh.ignored).map(t => ({ slug: t.slug, ...t.refresh })) };
  if (args.plan) { console.log(JSON.stringify(plan, null, 2)); return; }
  await mkdir("build", { recursive: true });
  await writeFile("build/pull-plan.json", `${JSON.stringify(plan, null, 2)}\n`);
  const tierCounts = Object.fromEntries(["hot", "live", "quiet", "dormant"].map((tier) => [
    tier,
    allTargets.filter((target) => !target.refresh.ignored && target.tier === tier).length,
  ]));

  // Attribution and the holder exclusions are joins over the census and the project files, not over
  // this directory's last output: reading content/pulled/*.yaml would make each run inherit the
  // previous one's mistakes and would leave a --only run attributing against stale addresses.
  const projectDocs = [...projects.entries()].map(([slug, project]) => ({ slug, addresses: addressesFor(project) }));
  const launchpads = buildLaunchpadIndex(projectDocs, { launchpadSlugs: launchpadSlugsFrom(census) });
  const holderExclusions = excludedHolderAddresses(projectDocs);

  const pace = createPacer(250);
  const deps = { pace };
  const deadlineMinutes = Number(process.env.PULL_DEADLINE_MINUTES);
  const deadlineMs = (Number.isFinite(deadlineMinutes) && deadlineMinutes > 0 ? deadlineMinutes : 45) * 60 * 1000;
  const explorerConfig = resolveBlockscoutConfig();
  const budgetState = await readJson("ops/pull-budget.json", {});
  const creditBudget = createCreditBudget({ state: budgetState, now: Date.parse(pulledAt) });
  const explorerTracker = createBlockscoutTracker();
  const explorerDeps = {
    pace: createPacer(1000 / explorerConfig.requestsPerSecond),
    defaultHeaders: explorerConfig.headers,
    // The label is the read's scope — "<slug>:<address>" — never the URL. A deferral label is
    // written into the committed document, where a full request URL is both unreadable and the wrong
    // place for anything a query-string API key could one day end up in.
    beforeRequest: (url) => creditBudget.claim("explorer read", blockscoutCreditCost(url)),
    onResponse: creditBudget.observeResponse,
    onRequest: explorerTracker.recordRequest,
    onChallenge: explorerTracker.recordChallenge,
  };
  const rpc = memoizeClient(createRpcClient({ deps }));
  const blockscout = memoizeClient(createBlockscoutClient({ config: explorerConfig, deps: explorerDeps }));
  const llama = memoizeClient(createLlamaClient({ deps }));
  const dexscreener = memoizeClient(createDexscreenerClient({ deps }));
  const activityClient = memoizeClient(createActivityClient({ base: explorerConfig.apiRoot, deps: explorerDeps }));
  const validate = createValidator();
  const activityCache = await openActivityCache({ rpc, chain: CHAIN, now: Date.parse(pulledAt),
    disabled: args.full || args.rpcOnly || args.rialtoOnly || targets.length === 0 });

  // Rialto is a chain-wide read: each endpoint is fetched once, cached for the run and paced at one
  // request per second. It is completed before per-name writes so every name sees the same snapshot.
  // `read` is what came back from the API; `rialto` is non-null only once chain.yaml has actually
  // landed, so a schema failure there cannot leave the banner reporting a healthy source while the
  // committed file stays stale. Discovery is still written from what was read either way.
  const runErrors = [];
  let read = null;
  let rialto = null;
  let discoveryCount = 0;
  let rialtoFailure = null;
  const rialtoFailed = (message) => {
    rialtoFailure = message;
    runErrors.push({ step: "rialto", message });
    console.error(message);
  };
  if (!args.rpcOnly) {
    // No attempts override: Rialto gets the standard retry policy, because a single transient 503
    // would otherwise null a whole chain block until the next six-hourly run.
    const rialtoClient = createRialtoClient({ deps: { pace: createPacer(1000) } });
    try {
      read = await readRialto(rialtoClient, { pulledAt });
    } catch (error) {
      rialtoFailed(`Rialto not read: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  if (read) {
    try {
      const chainSeries = await writeChainSeries(read.series, { dry: args.dry });
      for (const kept of chainSeries.kept) {
        read.chain[kept.key === "fee_revenue_daily" ? "economics" : kept.key === "tvl_by_category_daily" ? "tvl" : "activity"]
          .errors.push({ step: kept.key, message: `read returned ${kept.incoming} points; kept ${kept.existing} committed points` });
      }
      await writeChainPulled(read.chain, { dry: args.dry });
      rialto = read;
    } catch (error) {
      rialtoFailed(`content/pulled/chain.yaml not written: ${error instanceof Error ? error.message : String(error)}`);
    }
    try {
      const existingDiscovery = await readYaml("content/pulled/discovery.yaml").catch(() => ({ candidates: [] }));
      const candidates = discoveryCandidates({
        reference: read.reference,
        census,
        projects,
        existing: existingDiscovery?.candidates ?? [],
        pulledAt,
      });
      const discoveryErrors = [...read.errors];
      // Newest candidates lead and at most forty receive the optional DexScreener depth check.
      for (const candidate of candidates.slice(0, 40)) {
        const result = await readMarket(dexscreener, candidate.address, { pulledAt });
        candidate.dexscreener_liquidity_usd = result.liquidity_usd;
        for (const error of result.errors) {
          discoveryErrors.push({ step: "dexscreener", message: `${candidate.address}: ${error.message}` });
        }
      }
      await writeDiscovery({ pulled_at: pulledAt, candidates, errors: discoveryErrors }, { dry: args.dry });
      discoveryCount = candidates.length;
    } catch (error) {
      rialtoFailed(`content/pulled/discovery.yaml not written: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  if (args.rialtoOnly) {
    return refreshRialtoNames({
      args, targets, rialto, rialtoFailure, discoveryCount, pulledAt, dexscreener, runErrors, started, validate,
    });
  }

  let blockNumber = null;
  try {
    const hex = await rpc.blockNumber();
    blockNumber = hex ? Number(BigInt(hex)) : null;
  } catch (e) {
    runErrors.push({ step: "rpc", message: `eth_blockNumber: ${e.message}` });
  }

  console.log(
    `pull ${targets.length} slugs · rpc ${RPC_URL}` +
      `${args.rpcOnly ? " · blockscout and dexscreener skipped (--rpc-only)" : ` · blockscout ${explorerConfig.restBase}${explorerConfig.isPro ? " (PRO)" : " (public)"} · dexscreener ${DEXSCREENER_BASE}`}` +
      `${args.rpcOnly ? "" : ` · rialto ${RIALTO_BASE}${rialto ? ` · ${discoveryCount} discovery candidates` : " unavailable"}`}` +
      `${blockNumber ? ` · head ${blockNumber}` : ""}${args.dry ? " · dry run" : ""}`,
  );

  const totals = {
    addresses: 0, owners: 0, safes: 0, proxies: 0, holders: 0, metrics: 0,
    pairs: 0, markets: 0, top10: 0, top10ExPools: 0, launchpads: 0, mint: 0, renounced: 0,
    lp: 0, revenue24h: 0, revenueSeries: 0, seriesKept: 0, txns24h: 0, launches24h: 0, capped: 0,
    rialto: 0, pairAssets: 0, disagreements: 0,
    errors: 0, files: 0, snapshots: 0,
  };
  const failures = [];
  const safeThresholdOne = [];
  const marketRows = [];
  const noPairs = [];
  const launchRows = [];
  const cappedRows = [];
  const errorCounts = new Map();
  const completedSlugs = [];
  const partialNames = [];
  const screenedReads = [];
  const deferredReads = [];
  const deferredNames = selection.deferred.map(t => t.slug);
  // Measured, not assumed: what this run actually spent per tier is what the projection is built on.
  const tierSpend = { hot: 0, live: 0, quiet: 0, dormant: 0 };
  const tierRead = { hot: 0, live: 0, quiet: 0, dormant: 0 };
  let walksSkipped = 0;

  for (const target of targets) {
    // Credits are not the only budget. A run is latency-bound long before it is pace-bound — the
    // explorer answers in a second or two and the RPC has its own pacer — so a job can reach its
    // timeout with credits to spare, be killed, and lose every name it had already written. The
    // deadline stops the loop while there is still time to validate, commit and push what was read.
    if (Date.now() - started > deadlineMs) {
      deferredNames.push(target.slug);
      continue;
    }
    const slugStarted = Date.now();
    const attempt = createPullAttempt();
    // Names are processed one at a time, so the run counter's movement across a name is that name's
    // spend exactly — the concurrency is inside a name, and each of those reads has its own scope.
    const slugCreditsStart = creditBudget.snapshot().run_credits;
    // Free sources lead. Complete market evidence can screen established quiet tokens after RPC
    // checks; all other tokens still use the independent explorer change signal below.
    const tokenAddress = tokenAddressFor(target.addresses);
    let market = null;
    let marketEvidence = null;
    if (!args.rpcOnly) {
      market = tokenAddress
        ? await readMarket(dexscreener, tokenAddress, { pulledAt, onObservation: evidence => { marketEvidence = evidence; } })
        : emptyMarket(pulledAt, [{ step: "no token address", message: `no ${CHAIN} deployment with role token` }]);
      attempt.record('market', market.errors);
    }

    const previousActivityAt = target.previous?.activity?.pulled_at ?? null;
    const reads = await mapWithConcurrency(
      target.addresses,
      args.rpcOnly ? CONCURRENCY : explorerConfig.addressConcurrency,
      async (entry) => {
      const rpcResult = await readRpc(rpc, entry.address);
      attempt.record('rpc', rpcResult.errors, entry.address);
      if (args.rpcOnly) return { row: mergeAddress(entry, rpcResult, null), creator: null, activity: null, changed: true, records: [] };

      const previousAddress = priorAddressFor(target.previous, entry.address);
      const previousActivity = priorActivityFor(target.previous, entry.address);
      const previousAddressRead = priorReadFor(target.previous, "address", entry.address) ?? { checked_at: target.previous?.pulled_at ?? null };
      const previousActivityRead = priorReadFor(target.previous, "activity", entry.address) ?? { checked_at: target.previous?.pulled_at ?? null };
      const first = !previousAddress;
      const label = `${target.slug}:${entry.address}`;
      const now = Date.parse(pulledAt);

      // The RPC already read the bytecode, so its digest adds no request. An unchanged hash
      // permits metadata reuse, but verification and proxy facts still need bounded rechecks.
      const priorCodeHash = previousAddressRead?.code_hash ?? null;
      const codeHash = rpcResult.code_hash ?? null;
      const codeChanged = codeHash === null || priorCodeHash === null || codeHash !== priorCodeHash;

      // A static role that has not transacted in a week is not worth a credit to ask again.
      const mutableAge = now - Date.parse(previousAddressRead?.stale_since ?? previousAddressRead?.checked_at ?? "");
      const refreshMutable = args.full || codeChanged || previousAddress?.source_verified !== true ||
        rpcResult.proxy?.implementation !== previousAddress?.proxy?.implementation ||
        !Number.isFinite(mutableAge) || mutableAge >= 7 * 86_400_000;
      const screen = quietTokenScreen({ target, entry, market, evidence: marketEvidence, rpc: rpcResult,
        previousAddress, previousRead: previousAddressRead, index: graphIndex, infrastructureReaders,
        now, force: forceCadence });
      const gate = screen.skip ? { signal: false, reason: screen.reason } : needsExplorerSignal({
        role: entry.role, full: refreshMutable, first, lastTxAt: previousActivity?.last_tx_at, now,
      });

      const carriedRow = () => carryOwnershipFacts(
        carryAddressFacts(mergeAddress(entry, rpcResult, null), previousAddress),
        previousAddress,
        { unread: rpcResult.unread, previousErrors: previousAddress?.errors ?? [] },
      );
      const carriedActivity = (errors = []) => activityWindow(
        carryActivityFacts({
          address: entry.address, label: entry.label, role: entry.role,
          transactions_count: null, token_transfers_count: null, last_tx_at: null,
          last_method: null, txns_24h: null, launches_24h: null, errors,
        }, previousActivity),
        previousActivity,
        { measured: false, pulledAt, previousAsOf: previousActivityAt },
      );

      if (!gate.signal) {
        walksSkipped++;
        if (screen.skip) screenedReads.push({ slug: target.slug, address: entry.address, reason: screen.reason,
          market_as_of: market.pulled_at, own_activity_at: target.refresh.ownActivityAt,
          liquidity_usd: market.liquidity_usd, volume_h24: market.volume_h24,
          trades_h24: market.trades_h24, complete_pairs: marketEvidence.pair_count });
        return {
          row: carriedRow(), creator: null, activity: carriedActivity(), changed: false, codeHash, screen,
          records: [
            explorerReadRecord({ kind: "address", address: entry.address, status: "unchanged", reason: gate.reason, signal: previousAddressRead?.signal ?? null, codeHash, checkedAt: pulledAt, previous: previousAddressRead, credits: 0 }),
            explorerReadRecord({ kind: "activity", address: entry.address, status: "unchanged", reason: gate.reason, signal: previousAddressRead?.signal ?? null, codeHash, checkedAt: pulledAt, previous: previousActivityRead, credits: 0 }),
          ],
        };
      }

      // The change signal. For an EOA it is the free RPC nonce. For a contract it is the newest
      // transaction *to* the address, taken as page one of the walk this run may need anyway — one
      // weighted request, and unlike /counters it is live. For a token DexScreener's trade count is a
      // pre-filter that can force a read (a router swap never touches the token contract directly),
      // never a reason on its own to skip one.
      let currentSignal = null;
      let priorSignal = null;
      let signalValue = null;
      let signalError = null;
      let firstPage = null;
      const isEoa = rpcResult.is_contract === false;
      const preFilterChanged = entry.role === "token" && !first &&
        (market?.trades_h24 ?? null) !== (target.previous?.market?.trades_h24 ?? null);

      const signalRead = await creditBudget.withCredits(label, async () => {
        if (isEoa) {
          priorSignal = previousAddressRead?.signal ?? previousAddressRead?.signal_value ?? null;
          try {
            const nonce = await rpc.transactionCount(entry.address);
            signalValue = typeof nonce === "string" ? Number(BigInt(nonce)) : null;
            currentSignal = signalValue === null ? null : String(signalValue);
          } catch (error) {
            signalError = { step: "rpc", message: `eth_getTransactionCount ${entry.address}: ${error.message}` };
          }
          return;
        }
        priorSignal = previousAddressRead?.signal ?? null;
        try {
          firstPage = parseTransactionsPage(await activityClient.transactions(entry.address, null));
          currentSignal = newestInbound(firstPage).hash;
        } catch (error) {
          signalError = { step: "blockscout", message: `transactions?filter=to/${entry.address}: ${error.message}` };
        }
      });
      const signalCredits = signalRead.credits;
      attempt.record('signal', signalError ? [signalError] : [], entry.address);

      const decision = explorerChangeDecision({
        role: entry.role,
        // Mutable facts have a maximum cache age; an unchanged bytecode is not proof that
        // verification or a proxy implementation has not changed.
        full: refreshMutable,
        previous: previousAddress,
        priorSignal,
        currentSignal,
        preFilterChanged,
        preFilterName: "DexScreener trade count",
      });

      if (!decision.changed) {
        walksSkipped++;
        // An EOA's signal is its nonce, so there is no page in hand and buying one would spend a
        // credit the nonce was chosen to avoid. Its window carries.
        if (firstPage === null) {
          return {
            row: carriedRow(), creator: null, activity: carriedActivity(signalError ? [signalError] : []), changed: false, codeHash,
            records: [
              explorerReadRecord({ kind: "address", address: entry.address, status: "unchanged", reason: decision.reason, signalValue, signal: currentSignal ?? priorSignal, codeHash, checkedAt: pulledAt, previous: previousAddressRead, credits: signalCredits }),
              explorerReadRecord({ kind: "activity", address: entry.address, status: "unchanged", reason: `${decision.reason}; 24h walk skipped`, signalValue, signal: currentSignal ?? priorSignal, codeHash, checkedAt: pulledAt, previous: previousActivityRead, credits: 0 }),
            ],
          };
        }
        // Page one is already paid for, so the window is recounted from it for free. When it reaches
        // past the 24-hour cutoff the count is exact and fresh — a quiet address falls to zero here
        // instead of reporting yesterday's number for ever. When it does not, the committed figure is
        // carried with the timestamp of the run that measured it.
        const walk = await readAddressActivity(activityClient, entry, {
          now, firstPage, readCounters: false, allowPaging: false, activityCache,
        });
        attempt.record('activity', walk.errors, entry.address);
        const measured = walk.txns_24h !== null;
        const fresh = carryActivityFacts({
          ...walk,
          errors: [...walk.errors, ...(signalError ? [signalError] : [])],
        }, previousActivity);
        delete fresh.window_complete;
        delete fresh.pages;
        const activity = activityWindow(fresh, previousActivity, { measured, pulledAt, previousAsOf: previousActivityAt });
        const reason = measured
          ? `${decision.reason}; 24h window recounted from the signal page`
          : `${decision.reason}; 24h walk skipped`;
        return {
          row: carriedRow(), creator: null, activity, changed: false, codeHash,
          records: [
            explorerReadRecord({ kind: "address", address: entry.address, status: "unchanged", reason: decision.reason, signalValue, signal: currentSignal ?? priorSignal, codeHash, checkedAt: pulledAt, previous: previousAddressRead, credits: signalCredits }),
            explorerReadRecord({ kind: "activity", address: entry.address, status: "unchanged", reason, signalValue, signal: currentSignal ?? priorSignal, codeHash, checkedAt: pulledAt, previous: previousActivityRead, credits: 0 }),
          ],
        };
      }

      // Changed. Refresh holders; reuse known creation/source metadata unless code changes,
      // verification is still pending, creation facts are missing, or a full read was requested.
      const metadataRead = args.full || codeChanged || previousAddress?.created_at == null || previousAddress?.source_verified !== true;
      const addressRead = await creditBudget.withCredits(label, () => readBlockscout(blockscout, entry.address, {
        isToken: entry.role === "token",
        metadata: metadataRead,
        holders: true,
      }));
      const bsResult = addressRead.value;
      attempt.record('explorer', bsResult.errors, entry.address);
      const addressCredits = addressRead.credits;
      const addressDeferred = hasBudgetDeferral(bsResult.errors);
      const freshRow = mergeAddress(entry, rpcResult, bsResult);
      if (signalError) freshRow.errors.push(signalError);
      const row = carryOwnershipFacts(
        carryAddressFacts(freshRow, previousAddress),
        previousAddress,
        { unread: rpcResult.unread, previousErrors: previousAddress?.errors ?? [] },
      );

      const activityRead = await creditBudget.withCredits(label, () => readAddressActivity(activityClient, entry, {
        now, firstPage, activityCache, ...(args.full ? {} : { maxPages: 2 }),
      }));
      const walk = activityRead.value;
      attempt.record('activity', walk.errors, entry.address);
      const activityCredits = activityRead.credits;
      const measured = walk.txns_24h !== null;
      const fresh = carryActivityFacts(walk, previousActivity);
      delete fresh.window_complete;
      delete fresh.pages;
      const activity = activityWindow(fresh, previousActivity, { measured, pulledAt, previousAsOf: previousActivityAt });
      const activityDeferred = hasBudgetDeferral(activity.errors) || hasBudgetDeferral(signalError ? [signalError] : []);
      if (addressDeferred || activityDeferred) deferredReads.push(label);
      return {
        row, creator: bsResult.creator ?? null, activity, changed: true, codeChanged, codeHash, metadataRead,
        ownerMeasured: rpcResult.unread?.owner === false && rpcResult.owner != null,
        records: [
          explorerReadRecord({ kind: "address", address: entry.address, status: addressDeferred ? "deferred" : "read", reason: addressDeferred ? "budget exhausted; prior non-null facts retained" : metadataRead ? decision.reason : `${decision.reason}; code hash unchanged, metadata not re-read`, signalValue, signal: currentSignal ?? priorSignal, codeHash, checkedAt: pulledAt, previous: previousAddressRead, credits: signalCredits + addressCredits }),
          explorerReadRecord({ kind: "activity", address: entry.address, status: activityDeferred ? "deferred" : "read", reason: activityDeferred ? "budget exhausted; prior non-null activity retained" : `${decision.reason}; 24h walk refreshed`, signalValue, signal: currentSignal ?? priorSignal, codeHash, checkedAt: pulledAt, previous: previousActivityRead, credits: activityCredits }),
        ],
      };
    });
    const addresses = reads.map((read) => read.row);
    const readRecords = reads.flatMap((read) => read.records);
    // /addresses/<addr> already answered with the creator; attribution reuses it rather than asking
    // the explorer the same question a second time.
    const creators = new Map(reads.map((read) => [read.row.address.toLowerCase(), read.creator]));

    // Who is still calling these contracts. One pass per address, capped at two in flight so a busy
    // factory's 24h walk cannot starve the rest of the slug.
    let activity = args.rpcOnly ? null : {
      ...emptyActivity(pulledAt, reads.map((read) => read.activity)),
      ...aggregateActivity(reads.map((read) => read.activity)),
    };

    // What the project's own token trades at. A slug with no token deployment records why, rather
    // than leaving a reader to guess whether the lookup ran.
    let structure = null;
    if (!args.rpcOnly && tokenAddress) {
        const tokenRead = reads.find((read) => read.row.address.toLowerCase() === tokenAddress.toLowerCase());
        const priorMarket = target.previous?.market ?? null;
        const priorStructure = target.previous?.structure ?? null;
        const priorTop10Read = priorReadFor(target.previous, "top10", tokenAddress) ?? { checked_at: target.previous?.pulled_at ?? null };
        const priorStructureRead = priorReadFor(target.previous, "structure", tokenAddress) ?? { checked_at: target.previous?.pulled_at ?? null };
        const priorLpRead = priorReadFor(target.previous, "lp", tokenAddress) ?? { checked_at: target.previous?.pulled_at ?? null };

      if (tokenRead?.changed) {
        const tokenLabel = `${target.slug}:${tokenAddress}`;
        const top10Read = await creditBudget.withCredits(tokenLabel, () => readTop10(blockscout, tokenAddress, {
          pulledAt,
          excluded: holderExclusions,
          pairAddresses: market.pairs.map((pair) => pair.pair_address),
        }));
        const top10 = top10Read.value;
        attempt.record('concentration', top10.errors, tokenAddress);
        const top10Credits = top10Read.credits;
        const top10Deferred = hasBudgetDeferral(top10.errors);
        const creator = creators.get(tokenAddress.toLowerCase()) ?? null;
        const launchpad = creator ? attributeCreator(creator, launchpads) : priorMarket?.launchpad ?? null;
        if (!creator && !launchpad && tokenRead.metadataRead === false) {
          market.errors.push({ step: "launchpad", message: `contract code hash unchanged, so addresses/${tokenAddress} was not re-read for its creator, and no launchpad was previously attributed` });
        } else if (!creator && !launchpad) {
          market.errors.push({ step: "launchpad", message: `addresses/${tokenAddress} did not return creator_address_hash` });
        } else if (!launchpad) {
          market.errors.push({ step: "launchpad", message: `creator ${creator} did not match a launchpad factory, curve or known launcher deployer` });
        }
        market = carryMarketFacts({ ...market, ...top10, launchpad, errors: [...market.errors, ...top10.errors] }, priorMarket);
        readRecords.push(explorerReadRecord({
          kind: "top10", address: tokenAddress, status: top10Deferred ? "deferred" : "read",
          reason: top10Deferred ? "budget exhausted; prior concentration retained" : "token change signal changed",
          signalValue: market.trades_h24, checkedAt: pulledAt, previous: priorTop10Read, credits: top10Credits,
        }));
        if (top10Deferred) deferredReads.push(`${target.slug}:top10`);

        // The verified ABI is a function of the deployed bytecode. Re-reading it while the free RPC
        // code hash is unchanged buys a byte-identical answer, so it is read on a code change and on
        // a first read, and the committed mint classification is kept otherwise.
        const tokenRow = addresses.find((row) => row.address.toLowerCase() === tokenAddress.toLowerCase());
        const abiIsStale = args.full || tokenRead.codeChanged !== false ||
          tokenRead.row.proxy?.implementation !== priorAddressFor(target.previous, tokenAddress)?.proxy?.implementation ||
          priorStructure?.mint == null || priorStructure?.mint === "unknown";
        let ownership = { mint: priorStructure?.mint ?? "unknown", renounced: renouncedFromOwner(tokenRow?.owner ?? null), errors: [] };
        let ownershipCredits = 0;
        if (abiIsStale) {
          const ownershipRead = await creditBudget.withCredits(tokenLabel, () => readMintAndRenounce(blockscout, tokenAddress, tokenRead.ownerMeasured ? tokenRow?.owner ?? null : null));
          ownership = ownershipRead.value;
          ownershipCredits = ownershipRead.credits;
        }
        const structureDeferred = hasBudgetDeferral(ownership.errors);
        attempt.record('ownership', ownership.errors, tokenAddress);
        const lpRead = await creditBudget.withCredits(tokenLabel, () => readLpLocks(blockscout, market.pairs, { lockers: holderExclusions }));
        const locks = lpRead.value;
        attempt.record('liquidity-locks', locks.errors, tokenAddress);
        const lpCredits = lpRead.credits;
        const lpDeferred = hasBudgetDeferral(locks.errors);
        structure = carryStructureFacts({
          pulled_at: pulledAt, mint: ownership.mint, renounced: ownership.renounced,
          lp: locks.lp, errors: [...ownership.errors, ...locks.errors],
        }, priorStructure, { mintMeasured: abiIsStale, renouncedMeasured: tokenRead.ownerMeasured === true });
        readRecords.push(
          explorerReadRecord({ kind: "structure", address: tokenAddress, status: structureDeferred ? "deferred" : abiIsStale ? "read" : "unchanged", reason: structureDeferred ? "budget exhausted; prior mint facts retained" : abiIsStale ? "token change signal changed" : "contract code hash unchanged; verified ABI not re-read", signalValue: market.trades_h24, codeHash: tokenRead.codeHash ?? null, checkedAt: pulledAt, previous: priorStructureRead, credits: ownershipCredits }),
          explorerReadRecord({ kind: "lp", address: tokenAddress, status: lpDeferred ? "deferred" : "read", reason: lpDeferred ? "budget exhausted; prior LP facts retained" : "token change signal changed", signalValue: market.trades_h24, checkedAt: pulledAt, previous: priorLpRead, credits: lpCredits }),
        );
        if (structureDeferred || lpDeferred) deferredReads.push(`${target.slug}:structure`);
      } else {
        market = carryMarketFacts(market, priorMarket);
        structure = carryStructureFacts(null, priorStructure);
        for (const [kind, previous] of [["top10", priorTop10Read], ["structure", priorStructureRead], ["lp", priorLpRead]]) {
          readRecords.push(explorerReadRecord({ kind, address: tokenAddress, status: "unchanged", reason: tokenRead?.screen?.skip ? tokenRead.screen.reason : "token change signals unchanged; explorer measurement skipped", signalValue: market.trades_h24, checkedAt: pulledAt, previous, credits: 0 }));
        }
      }

        if (rialto) {
          const rialtoMarket = rialtoMarketFor(tokenAddress, rialto.reference, { asOf: pulledAt });
          market.rialto = rialtoMarket;
          market.volume_disagreement = volumeDisagreement(market.volume_h24, rialtoMarket?.volume_24h_usd ?? null);
          market.pair_asset = pairAssetFor(target.project, target.census, market, rialtoMarket, rialto.reference);
          for (const error of rialto.errors) {
            market.errors.push({ step: "rialto", message: `${error.step}: ${error.message}` });
          }
          attempt.record('rialto', rialto.errors, tokenAddress);
        } else {
          market.rialto = null;
          market.pair_asset = null;
          market.volume_disagreement = null;
          if (rialtoFailure) market.errors.push({ step: "rialto", message: rialtoFailure });
        }

    }

    const sourceLedger = await readYaml(join("content/sources", `${target.slug}.yaml`)).catch(() => null);
    const llamaSlug = findLlamaSlug(sourceLedger?.sources ?? []);
    let metrics = [];
    let revenueSeries = null;
    const slugErrors = [...runErrors];
    let seriesPlan = null;
    if (llamaSlug) {
      const out = await readProtocol(llama, llamaSlug, { asOf: pulledAt });
      metrics = out.metrics;
      revenueSeries = out.revenueSeries;
      slugErrors.push(...out.errors);
      // Decided before the document is built so a kept-because-shorter series is a recorded fact on
      // the file, not a line that only ever existed in one run's console output.
      seriesPlan = await seriesReplacement(target.slug, revenueSeries ?? []);
      if (seriesPlan.error) slugErrors.push(seriesPlan.error);
    }

    const doc = {
      slug: target.slug, pulled_at: pulledAt, chain: CHAIN,
      addresses, metrics, market, structure, activity,
      reads: args.rpcOnly ? undefined : { tier: target.tier, explorer: readRecords },
      errors: slugErrors,
    };
    attempt.record('metrics-and-run', slugErrors);
    const {retryable, retryable_errors: retryableErrors, refresh} = finishPullAttempt(attempt,
      {attemptedAt: pulledAt, lastSuccessAt: target.refresh.lastSuccessAt, reason: target.refresh.reason});
    doc.refresh = refresh;

    try {
      const { path, written } = await writePulled(doc, { blockNumber, dry: args.dry, validate });
      if (written) {
        totals.files++;
        if (!retryable) completedSlugs.push(target.slug);
        else partialNames.push({slug: target.slug, current_retryable_errors: retryableErrors});
        // The snapshot is appended only after the YAML lands, so the series never claims a run that
        // failed validation actually happened.
        appendHistory(target.slug, snapshotFrom(doc));
        totals.snapshots++;
        if (seriesPlan?.write) await writeSeries(target.slug, revenueSeries ?? [], { dry: false });
      }
      if (seriesPlan && !seriesPlan.write && seriesPlan.existing > 0) totals.seriesKept++;
      const elapsed = ((Date.now() - slugStarted) / 1000).toFixed(1);
      const slugCredits = creditBudget.snapshot().run_credits - slugCreditsStart;
      tierSpend[target.tier] = (tierSpend[target.tier] ?? 0) + slugCredits;
      tierRead[target.tier] = (tierRead[target.tier] ?? 0) + 1;
      console.log(`${summaryLine(target.slug, doc)} · ${slugCredits} credits · ${elapsed}s${args.dry ? `  (would write ${path})` : ""}`);
      // The day counter is flushed as the run goes, not only at the end. A job killed by its timeout
      // has still spent every credit it claimed, and a spend nobody recorded is a per-day cap that
      // does not hold.
      if (!args.dry) await writeFile("ops/pull-budget.json", `${JSON.stringify(creditBudget.finish(), null, 2)}\n`);
    } catch (e) {
      failures.push({ slug: target.slug, message: e.message });
      console.error(`${target.slug.padEnd(24)} NOT WRITTEN: ${e.message}`);
      continue;
    }

    totals.addresses += addresses.length;
    totals.owners += addresses.filter((a) => a.owner).length;
    totals.safes += addresses.filter((a) => a.owner_type === "safe").length;
    totals.proxies += addresses.filter((a) => a.proxy.type === "eip1967").length;
    totals.holders += addresses.filter((a) => a.holders !== null).length;
    totals.metrics += metrics.length;
    if (market?.top10_share !== null && market?.top10_share !== undefined) totals.top10++;
    if (market?.top10_share_ex_pools !== null && market?.top10_share_ex_pools !== undefined) totals.top10ExPools++;
    if (market?.launchpad) totals.launchpads++;
    if (structure?.mint && structure.mint !== "unknown") totals.mint++;
    if (structure?.renounced !== null && structure?.renounced !== undefined) totals.renounced++;
    totals.lp += structure?.lp?.filter((row) => row.locked_share !== null).length ?? 0;
    if (metrics.some((metric) => metric.kind === "revenue_24h")) totals.revenue24h++;
    if ((revenueSeries?.length ?? 0) > 0) totals.revenueSeries++;
    totals.errors += countErrors(doc);
    for (const a of addresses) {
      if (a.owner_type === "safe" && a.safe?.threshold === 1) {
        safeThresholdOne.push({ slug: target.slug, address: a.address, owner: a.owner, signers: a.safe.signers?.length ?? null });
      }
    }

    if (market) {
      totals.pairs += market.pairs.length;
      if (market.pairs.length > 0) totals.markets++;
      else if (tokenAddress) noPairs.push({ slug: target.slug, address: tokenAddress });
      if (market.rialto) totals.rialto++;
      if (market.pair_asset) totals.pairAssets++;
      if (market.volume_disagreement) totals.disagreements++;
      marketRows.push({
        slug: target.slug,
        pairs: market.pairs.length,
        volume_h24: market.volume_h24,
        liquidity_usd: market.liquidity_usd,
      });
      for (const e of market.errors) tally(errorCounts, e);
    }
    if (activity) {
      totals.txns24h += activity.txns_24h ?? 0;
      totals.launches24h += activity.launches_24h ?? 0;
      for (const row of activity.addresses) {
        if (row.role === "factory" && (row.launches_24h ?? 0) > 0) {
          launchRows.push({ slug: target.slug, address: row.address, label: row.label, launches: row.launches_24h });
        }
        if (row.errors.some((e) => e.step === "txns_24h capped")) {
          totals.capped++;
          cappedRows.push({ slug: target.slug, address: row.address, txns: row.txns_24h });
        }
        for (const e of row.errors) tally(errorCounts, e);
      }
    }
    for (const a of addresses) for (const e of a.errors) tally(errorCounts, e);
    for (const e of structure?.errors ?? []) tally(errorCounts, e);
    for (const e of slugErrors) tally(errorCounts, e);
  }

  const seconds = ((Date.now() - started) / 1000).toFixed(1);
  console.log(
    `\n${totals.files} files · ${totals.snapshots} snapshots · ${totals.addresses} addresses · ` +
      `${totals.owners} owners · ${totals.safes} safes · ${totals.proxies} proxies · ` +
      `${totals.holders} holder counts · ${totals.metrics} metrics · ${totals.markets} markets · ` +
      `${totals.pairs} pairs · ${totals.txns24h} txns/24h · ${totals.launches24h} launches/24h · ` +
      `${totals.rialto} Rialto matches · ${totals.pairAssets} pair assets · ${totals.disagreements} volume disagreements · ` +
      `${discoveryCount} discovery candidates · ${totals.errors} errors · ${seconds}s`,
  );
  console.log(
    `coverage of ${targets.length} located names · top10 ${totals.top10}/${targets.length} · ` +
      `top10 ex pools ${totals.top10ExPools}/${targets.length} · launchpad ${totals.launchpads}/${targets.length} · ` +
      `mint ${totals.mint}/${targets.length} · renounced ${totals.renounced}/${targets.length} · ` +
      `LP reads ${totals.lp} · revenue 24h ${totals.revenue24h}/${targets.length} · ` +
      `revenue series ${totals.revenueSeries}/${targets.length} · ${totals.seriesKept} series kept · ` +
      `Rialto ${totals.rialto}/${targets.length} · pair asset ${totals.pairAssets}/${targets.length}`,
  );
  for (const f of safeThresholdOne) {
    console.log(`1-of-${f.signers ?? "?"} Safe owns ${f.slug} ${f.address} (owner ${f.owner})`);
  }

  const money = (n) => (typeof n === "number" ? `$${Math.round(n).toLocaleString("en-US")}` : "—");
  const top = (key) =>
    marketRows
      .filter((r) => typeof r[key] === "number")
      .sort((a, b) => b[key] - a[key])
      .slice(0, 5);

  if (marketRows.length) {
    console.log("\ntop 5 by 24h volume");
    for (const r of top("volume_h24")) console.log(`  ${r.slug.padEnd(20)} ${money(r.volume_h24)}  (${r.pairs} pairs)`);
    console.log("top 5 by liquidity");
    for (const r of top("liquidity_usd")) console.log(`  ${r.slug.padEnd(20)} ${money(r.liquidity_usd)}  (${r.pairs} pairs)`);
  }
  if (noPairs.length) {
    console.log(`\n${noPairs.length} token lookups returned zero pairs`);
    for (const r of noPairs) console.log(`  ${r.slug.padEnd(20)} ${r.address}`);
  }
  if (launchRows.length) {
    console.log("\nlaunches in the last 24h, by factory");
    for (const r of launchRows.sort((a, b) => b.launches - a.launches)) {
      console.log(`  ${r.slug.padEnd(20)} ${r.launches.toString().padStart(4)}  ${r.address}  ${r.label ?? ""}`);
    }
  }
  if (cappedRows.length) {
    console.log(`\n${cappedRows.length} addresses hit their role-based page cap (count is a floor)`);
    for (const r of cappedRows) console.log(`  ${r.slug.padEnd(20)} ${r.address}  >= ${r.txns} txns/24h`);
  }
  if (errorCounts.size) {
    console.log(`\n${errorCounts.size} distinct error messages`);
    for (const [message, count] of [...errorCounts.entries()].sort((a, b) => b[1] - a[1])) {
      console.log(`  ${String(count).padStart(4)}x  ${message}`);
    }
  }
  if (failures.length) {
    console.log(`\n${failures.length} slugs not written`);
    for (const f of failures) console.log(`  ${f.slug.padEnd(20)} ${f.message}`);
  }

  const explorerStats = explorerTracker.snapshot();
  if (!args.rpcOnly) {
    const budget = creditBudget.snapshot();
    console.log(
      `Blockscout credits: ${budget.run_credits}/${budget.run_cap} this run · ` +
      `${budget.credits_used}/${budget.day_cap} UTC day · ${walksSkipped} unchanged walks skipped · ` +
      `${deferredReads.length} reads deferred · challenge responses: ${explorerStats.challenges}`,
    );

    // The cost table is the receipt the projection is built from. Every figure below was counted by
    // this run: a tier nobody read this time contributes no measurement and says so.
    const measured = {};
    console.log("\ncredits per due name, measured this run");
    for (const tier of ["hot", "live", "quiet", "dormant"]) {
      if (!tierRead[tier]) {
        console.log(`  ${tier.padEnd(8)} ${String(tierCounts[tier]).padStart(4)} in registry · none due this run`);
        continue;
      }
      measured[tier] = tierSpend[tier] / tierRead[tier];
      console.log(
        `  ${tier.padEnd(8)} ${String(tierCounts[tier]).padStart(4)} in registry · ${String(tierRead[tier]).padStart(4)} read · ` +
        `${String(tierSpend[tier]).padStart(5)} credits · ${measured[tier].toFixed(1)} per name`,
      );
    }
    const projection = (names) => {
      const value = budget.provider_exhausted || deferredReads.length ? null : projectDailyCredits(scaleTierMix(tierCounts, names), measured);
      return value === null ? "unmeasured" : Math.ceil(value).toLocaleString("en-US");
    };
    const registry = Object.values(tierCounts).reduce((sum, count) => sum + count, 0);
    console.log(
      `tier population: hot ${tierCounts.hot} · live ${tierCounts.live} · quiet ${tierCounts.quiet} · dormant ${tierCounts.dormant} · ` +
      `reads/day ${Object.entries(TIER_DAILY_READS).map(([tier, reads]) => `${tier} ${reads}`).join(" · ")}`,
    );
    console.log(
      `projected credits/day at today's mix — ${registry} names ${projection(registry)} · ` +
      `200 ${projection(200)} · 500 ${projection(500)} · ` +
      `1,000 ${projection(1000)} against a ${budget.day_cap.toLocaleString("en-US")} cap`,
    );
    if (deferredReads.length) {
      console.log(`\n${deferredReads.length} reads deferred to the next run, by name and address`);
      for (const label of [...new Set(deferredReads)]) console.log(`  ${label}`);
    }
    if (deferredNames.length) {
      console.log(
        `\n${deferredNames.length} names not reached before the ${deadlineMs / 60000}-minute deadline ` +
        "and deferred to the next run",
      );
      for (const slug of deferredNames) console.log(`  ${slug}`);
    }
    if (!args.dry) {
      await writeFile("ops/pull-budget.json", `${JSON.stringify(creditBudget.finish(), null, 2)}\n`);
      const remainingQueue = consumeQueue(Array.isArray(queueEntries) ? queueEntries : [], completedSlugs, { now: Date.parse(pulledAt) });
      await writeFile("ops/pull-queue.json", `${JSON.stringify(remainingQueue, null, 2)}\n`);
    }
  }
  try { await activityCache.flush({ dry: args.dry }); }
  catch (error) { runErrors.push({ step: "rpc", message: `activity cache not saved: ${error.message}` }); }
  await writeFile("build/pull-report.json", `${JSON.stringify({ at: pulledAt,
    status: runErrors.length || deferredNames.length || deferredReads.length || failures.length || creditBudget.snapshot().provider_exhausted || completedSlugs.length < targets.length ? "degraded" : "complete",
    selected: targets.length, completed: completedSlugs, deferred_names: deferredNames,
    partial_names: partialNames,
    screened_reads: screenedReads,
    deferred_reads: [...new Set(deferredReads)], failures, budget: creditBudget.snapshot(),
    activity_cache: activityCache.snapshot(), run_errors: runErrors,
  }, null, 2)}\n`);
  const challengeGate = blockscoutChallengeGate(explorerStats);
  if (challengeGate.failed) {
    console.error(challengeGate.summary);
    process.exitCode = challengeGate.exitCode;
  }

  // Fails only when nothing at all could be produced; one bad address never sinks the run.
  if (targets.length > 0 && totals.files === 0 && !args.dry) process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((e) => {
    console.error(e.stack ?? e.message);
    process.exit(1);
  });
}
