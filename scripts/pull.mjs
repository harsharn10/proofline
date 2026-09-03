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
// Usage: node scripts/pull.mjs [--slug <slug>] [--only <slug,slug>] [--rpc-only] [--dry]

import { readFile, readdir } from "node:fs/promises";
import { join, basename } from "node:path";
import { parse } from "yaml";

import { createPacer, mapWithConcurrency } from "./lib/pull/http.mjs";
import { createRpcClient, readAddress as readRpc, RPC_URL } from "./lib/pull/rpc.mjs";
import { createBlockscoutClient, readAddress as readBlockscout, BLOCKSCOUT_BASE } from "./lib/pull/blockscout.mjs";
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
  aggregateActivity,
  emptyActivity,
} from "./lib/pull/activity.mjs";
import { writePulled, createValidator, appendHistory, snapshotFrom } from "./lib/pull/write.mjs";
import {
  buildLaunchpadIndex,
  excludedHolderAddresses,
  attributeCreator,
  launchpadSlugsFrom,
} from "./lib/pull/attribution.mjs";
import { readTop10, readMintAndRenounce, readLpLocks } from "./lib/pull/token.mjs";
import { writeSeries, seriesReplacement } from "./lib/pull/series.mjs";

const CHAIN = "robinhood-chain";
const CONCURRENCY = 4;
// Blockscout's 24h walk can run dozens of pages per address. Two in flight keeps the pacer fed
// without letting one busy factory monopolise the only connection the explorer gives us.
const BLOCKSCOUT_CONCURRENCY = 2;
const NOT_VERIFIED = "not-verified";

function parseArgs(argv) {
  const args = { only: null, rpcOnly: false, dry: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--slug") args.only = [argv[++i] ?? ""];
    else if (a.startsWith("--slug=")) args.only = [a.slice(7)];
    else if (a === "--only") args.only = String(argv[++i] ?? "").split(",");
    else if (a.startsWith("--only=")) args.only = a.slice(7).split(",");
    else if (a === "--rpc-only") args.rpcOnly = true;
    else if (a === "--dry" || a === "--dry-run") args.dry = true;
    else throw new Error(`unknown argument ${a}`);
  }
  if (args.only) {
    args.only = [...new Set(args.only.map((slug) => slug.trim()).filter(Boolean))];
    if (args.only.length === 0) throw new Error("--only requires one or more comma-separated slugs");
  }
  return args;
}

const readYaml = async (path) => parse(await readFile(path, "utf8"));

/** One row per address to pull, deduplicated within a slug, first label and role winning. */
export function addressesFor(project) {
  const seen = new Map();
  for (const d of project?.deployments ?? []) {
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

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const started = Date.now();
  const pulledAt = new Date().toISOString();

  const census = await readYaml("content/census.yaml");
  const projectFiles = (await readdir("content/projects")).filter((f) => f.endsWith(".yaml"));
  const projects = new Map();
  for (const f of projectFiles) projects.set(basename(f, ".yaml"), await readYaml(join("content/projects", f)));

  const targets = [];
  const wanted = args.only ? new Set(args.only) : null;
  for (const row of census) {
    if (wanted && !wanted.has(row.slug)) continue;
    const project = projects.get(row.slug);
    if (!project) continue;
    const addresses = addressesFor(project);
    // A name with no located address still gets a file when its ledger cites a DefiLlama protocol
    // page: the chain-slice metrics are worth reading on their own.
    const ledger = await readYaml(join("content/sources", `${row.slug}.yaml`)).catch(() => null);
    const hasLlama = Boolean(findLlamaSlug(ledger?.sources ?? []));
    if (addresses.length === 0 && !hasLlama) continue;
    targets.push({ slug: row.slug, addresses, llamaSlug: hasLlama ? findLlamaSlug(ledger?.sources ?? []) : null });
  }
  if (wanted) {
    const found = new Set(targets.map((target) => target.slug));
    const missing = [...wanted].filter((slug) => !found.has(slug));
    if (missing.length) throw new Error(`no census slug with a ${CHAIN} address or DefiLlama receipt: ${missing.join(", ")}`);
  }

  // Attribution and the holder exclusions are joins over the census and the project files, not over
  // this directory's last output: reading content/pulled/*.yaml would make each run inherit the
  // previous one's mistakes and would leave a --only run attributing against stale addresses.
  const projectDocs = [...projects.entries()].map(([slug, project]) => ({ slug, addresses: addressesFor(project) }));
  const launchpads = buildLaunchpadIndex(projectDocs, { launchpadSlugs: launchpadSlugsFrom(census) });
  const holderExclusions = excludedHolderAddresses(projectDocs);

  const pace = createPacer(250);
  const deps = { pace };
  const rpc = createRpcClient({ deps });
  const blockscout = createBlockscoutClient({ deps });
  const llama = createLlamaClient({ deps });
  const dexscreener = createDexscreenerClient({ deps });
  const activityClient = createActivityClient({ deps });
  const validate = createValidator();

  let blockNumber = null;
  const runErrors = [];
  try {
    const hex = await rpc.blockNumber();
    blockNumber = hex ? Number(BigInt(hex)) : null;
  } catch (e) {
    runErrors.push({ step: "rpc", message: `eth_blockNumber: ${e.message}` });
  }

  console.log(
    `pull ${targets.length} slugs · rpc ${RPC_URL}` +
      `${args.rpcOnly ? " · blockscout and dexscreener skipped (--rpc-only)" : ` · blockscout ${BLOCKSCOUT_BASE} · dexscreener ${DEXSCREENER_BASE}`}` +
      `${blockNumber ? ` · head ${blockNumber}` : ""}${args.dry ? " · dry run" : ""}`,
  );

  const totals = {
    addresses: 0, owners: 0, safes: 0, proxies: 0, holders: 0, metrics: 0,
    pairs: 0, markets: 0, top10: 0, top10ExPools: 0, launchpads: 0, mint: 0, renounced: 0,
    lp: 0, revenue24h: 0, revenueSeries: 0, seriesKept: 0, txns24h: 0, launches24h: 0, capped: 0,
    errors: 0, files: 0, snapshots: 0,
  };
  const failures = [];
  const safeThresholdOne = [];
  const marketRows = [];
  const noPairs = [];
  const launchRows = [];
  const cappedRows = [];
  const errorCounts = new Map();

  for (const target of targets) {
    const slugStarted = Date.now();
    const reads = await mapWithConcurrency(target.addresses, CONCURRENCY, async (entry) => {
      const rpcResult = await readRpc(rpc, entry.address);
      const bsResult = args.rpcOnly
        ? null
        : await readBlockscout(blockscout, entry.address, { isToken: entry.role === "token" });
      return { row: mergeAddress(entry, rpcResult, bsResult), creator: bsResult?.creator ?? null };
    });
    const addresses = reads.map((read) => read.row);
    // /addresses/<addr> already answered with the creator; attribution reuses it rather than asking
    // the explorer the same question a second time.
    const creators = new Map(reads.map((read) => [read.row.address.toLowerCase(), read.creator]));

    // Who is still calling these contracts. One pass per address, capped at two in flight so a busy
    // factory's 24h walk cannot starve the rest of the slug.
    let activity = null;
    if (!args.rpcOnly) {
      const rows = await mapWithConcurrency(target.addresses, BLOCKSCOUT_CONCURRENCY, (entry) =>
        readAddressActivity(activityClient, entry, { now: Date.parse(pulledAt) }),
      );
      activity = { ...emptyActivity(pulledAt, rows), ...aggregateActivity(rows) };
    }

    // What the project's own token trades at. A slug with no token deployment records why, rather
    // than leaving a reader to guess whether the lookup ran.
    const tokenAddress = tokenAddressFor(target.addresses);
    let market = null;
    let structure = null;
    if (!args.rpcOnly) {
      market = tokenAddress
        ? await readMarket(dexscreener, tokenAddress, { pulledAt })
        : emptyMarket(pulledAt, [
            { step: "no token address", message: `no ${CHAIN} deployment with role token` },
          ]);

      if (tokenAddress) {
        const top10 = await readTop10(blockscout, tokenAddress, {
          pulledAt,
          excluded: holderExclusions,
          pairAddresses: market.pairs.map((pair) => pair.pair_address),
        });
        const creator = creators.get(tokenAddress.toLowerCase()) ?? null;
        const launchpad = attributeCreator(creator, launchpads);
        if (!creator) {
          market.errors.push({ step: "launchpad", message: `addresses/${tokenAddress} did not return creator_address_hash` });
        } else if (!launchpad) {
          market.errors.push({ step: "launchpad", message: `creator ${creator} did not match a launchpad factory, curve or known launcher deployer` });
        }
        market = { ...market, ...top10, launchpad, errors: [...market.errors, ...top10.errors] };

        const tokenRow = addresses.find((row) => row.address.toLowerCase() === tokenAddress.toLowerCase());
        const ownership = await readMintAndRenounce(blockscout, tokenAddress, tokenRow?.owner ?? null);
        const locks = await readLpLocks(blockscout, market.pairs, { lockers: holderExclusions });
        structure = {
          pulled_at: pulledAt,
          mint: ownership.mint,
          renounced: ownership.renounced,
          lp: locks.lp,
          errors: [...ownership.errors, ...locks.errors],
        };
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
      addresses, metrics, market, structure, activity, errors: slugErrors,
    };

    try {
      const { path, written } = await writePulled(doc, { blockNumber, dry: args.dry, validate });
      if (written) {
        totals.files++;
        // The snapshot is appended only after the YAML lands, so the series never claims a run that
        // failed validation actually happened.
        appendHistory(target.slug, snapshotFrom(doc));
        totals.snapshots++;
        if (seriesPlan?.write) await writeSeries(target.slug, revenueSeries ?? [], { dry: false });
      }
      if (seriesPlan && !seriesPlan.write && seriesPlan.existing > 0) totals.seriesKept++;
      const elapsed = ((Date.now() - slugStarted) / 1000).toFixed(1);
      console.log(`${summaryLine(target.slug, doc)} · ${elapsed}s${args.dry ? `  (would write ${path})` : ""}`);
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
      `${totals.errors} errors · ${seconds}s`,
  );
  console.log(
    `coverage of ${targets.length} located names · top10 ${totals.top10}/${targets.length} · ` +
      `top10 ex pools ${totals.top10ExPools}/${targets.length} · launchpad ${totals.launchpads}/${targets.length} · ` +
      `mint ${totals.mint}/${targets.length} · renounced ${totals.renounced}/${targets.length} · ` +
      `LP reads ${totals.lp} · revenue 24h ${totals.revenue24h}/${targets.length} · ` +
      `revenue series ${totals.revenueSeries}/${targets.length} · ${totals.seriesKept} series kept`,
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
    console.log(`\n${cappedRows.length} addresses hit the 40-page cap (count is a floor)`);
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

  // Fails only when nothing at all could be produced; one bad address never sinks the run.
  if (targets.length > 0 && totals.files === 0 && !args.dry) process.exit(1);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((e) => {
    console.error(e.stack ?? e.message);
    process.exit(1);
  });
}
