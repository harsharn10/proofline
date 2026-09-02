#!/usr/bin/env node
// scripts/pull.mjs — the machine writer for content/pulled/<slug>.yaml.
//
// For every census slug whose project file lists at least one real Robinhood Chain address, this
// reproduces the chain facts a researcher would otherwise type: is it a contract, is its source
// verified, what does owner() return, is that owner a Safe and at what threshold, are the EIP-1967
// proxy slots set, when was it created, how many holders does the token have, and what does
// DefiLlama report for the protocol's Robinhood Chain slice. Output is machine-owned: fully
// regenerated each run, never hand-edited, and never cited as evidence by a packet or a profile
// (docs/research-system.md §1-2). A packet cites the same Blockscout/RPC/DefiLlama receipt directly.
//
// The Cloudflare fallback. Blockscout's API sits behind Cloudflare bot protection and can answer a
// plain HTTP client with a 403 or an HTML challenge page instead of JSON. Requests therefore carry a
// browser User-Agent and Accept: application/json. When a challenge still comes back, the failure is
// recorded on that address as { step: "blockscout", message } and the row keeps whatever the RPC
// produced, so a future run in a different network environment can tell an RPC-only row from a
// complete one by its errors[] rather than by a missing field. `--rpc-only` skips Blockscout
// entirely. One blocked address never fails the run.
//
// Usage: node scripts/pull.mjs [--slug <slug>] [--rpc-only] [--dry]

import { readFile, readdir } from "node:fs/promises";
import { join, basename } from "node:path";
import { parse } from "yaml";

import { createPacer, mapWithConcurrency } from "./lib/pull/http.mjs";
import { createRpcClient, readAddress as readRpc, RPC_URL } from "./lib/pull/rpc.mjs";
import { createBlockscoutClient, readAddress as readBlockscout, BLOCKSCOUT_BASE } from "./lib/pull/blockscout.mjs";
import { createLlamaClient, findLlamaSlug, readProtocol } from "./lib/pull/llama.mjs";
import { writePulled, createValidator } from "./lib/pull/write.mjs";

const CHAIN = "robinhood-chain";
const CONCURRENCY = 4;
const NOT_VERIFIED = "not-verified";

function parseArgs(argv) {
  const args = { slug: null, rpcOnly: false, dry: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--slug") args.slug = argv[++i] ?? null;
    else if (a.startsWith("--slug=")) args.slug = a.slice(7);
    else if (a === "--rpc-only") args.rpcOnly = true;
    else if (a === "--dry" || a === "--dry-run") args.dry = true;
    else throw new Error(`unknown argument ${a}`);
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

/** One printed line per slug: what the run produced and what it could not. */
export function summaryLine(slug, doc) {
  const a = doc.addresses;
  const errs = a.reduce((n, x) => n + x.errors.length, 0) + doc.errors.length;
  const parts = [
    `${a.length} addresses`,
    `${a.filter((x) => x.owner).length} owners`,
    `${a.filter((x) => x.owner_type === "safe").length} safes`,
    `${a.filter((x) => x.holders !== null).length} holders`,
    `${doc.metrics.length} metrics`,
    `${errs} errors`,
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
  for (const row of census) {
    if (args.slug && row.slug !== args.slug) continue;
    const project = projects.get(row.slug);
    if (!project) continue;
    const addresses = addressesFor(project);
    // A name with no located address still gets a file when its ledger cites a DefiLlama protocol
    // page: the chain-slice metrics are worth reading on their own.
    const ledger = await readYaml(join("content/sources", `${row.slug}.yaml`)).catch(() => null);
    const hasLlama = Boolean(findLlamaSlug(ledger?.sources ?? []));
    if (addresses.length === 0 && !hasLlama) continue;
    targets.push({ slug: row.slug, addresses });
  }
  if (args.slug && targets.length === 0) {
    console.error(`no census slug "${args.slug}" with a ${CHAIN} address or a DefiLlama receipt`);
    process.exit(1);
  }

  const pace = createPacer(250);
  const deps = { pace };
  const rpc = createRpcClient({ deps });
  const blockscout = createBlockscoutClient({ deps });
  const llama = createLlamaClient({ deps });
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
      `${args.rpcOnly ? " · blockscout skipped (--rpc-only)" : ` · blockscout ${BLOCKSCOUT_BASE}`}` +
      `${blockNumber ? ` · head ${blockNumber}` : ""}${args.dry ? " · dry run" : ""}`,
  );

  const totals = { addresses: 0, owners: 0, safes: 0, proxies: 0, holders: 0, metrics: 0, errors: 0, files: 0 };
  const failures = [];
  const safeThresholdOne = [];

  for (const target of targets) {
    const addresses = await mapWithConcurrency(target.addresses, CONCURRENCY, async (entry) => {
      const rpcResult = await readRpc(rpc, entry.address);
      const bsResult = args.rpcOnly
        ? null
        : await readBlockscout(blockscout, entry.address, { isToken: entry.role === "token" });
      return mergeAddress(entry, rpcResult, bsResult);
    });

    const sourceLedger = await readYaml(join("content/sources", `${target.slug}.yaml`)).catch(() => null);
    const llamaSlug = findLlamaSlug(sourceLedger?.sources ?? []);
    let metrics = [];
    const slugErrors = [...runErrors];
    if (llamaSlug) {
      const out = await readProtocol(llama, llamaSlug, { asOf: pulledAt });
      metrics = out.metrics;
      slugErrors.push(...out.errors);
    }

    const doc = { slug: target.slug, pulled_at: pulledAt, chain: CHAIN, addresses, metrics, errors: slugErrors };

    try {
      const { path, written } = await writePulled(doc, { blockNumber, dry: args.dry, validate });
      if (written) totals.files++;
      console.log(`${summaryLine(target.slug, doc)}${args.dry ? `  (would write ${path})` : ""}`);
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
    totals.errors += addresses.reduce((n, a) => n + a.errors.length, 0) + slugErrors.length;
    for (const a of addresses) {
      if (a.owner_type === "safe" && a.safe?.threshold === 1) {
        safeThresholdOne.push({ slug: target.slug, address: a.address, owner: a.owner, signers: a.safe.signers?.length ?? null });
      }
    }
  }

  const seconds = ((Date.now() - started) / 1000).toFixed(1);
  console.log(
    `\n${totals.files} files · ${totals.addresses} addresses · ${totals.owners} owners · ` +
      `${totals.safes} safes · ${totals.proxies} proxies · ${totals.holders} holder counts · ` +
      `${totals.metrics} metrics · ${totals.errors} errors · ${seconds}s`,
  );
  for (const f of safeThresholdOne) {
    console.log(`1-of-${f.signers ?? "?"} Safe owns ${f.slug} ${f.address} (owner ${f.owner})`);
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
