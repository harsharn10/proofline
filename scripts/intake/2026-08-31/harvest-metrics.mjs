// Task A (site-integration metrics brief, 2026-08-31) — one-shot harvest of DefiLlama chain-slice metrics
// from research/inbox/2026-08-31-ecosystem-map.yaml's `subjects[].llama{}` blocks into
// content/projects/<slug>.yaml `metrics[]`, with one new content/sources/<slug>.yaml ledger entry per
// harvested slug.
//
//   node scripts/intake/2026-08-31/harvest-metrics.mjs --overwrite
//
// The map file does not parse as strict YAML: the `stonkbroker` subject repeats the `llama:` key
// (scripts/intake/2026-08-31/README.md documents the same quirk for the sibling apply-harvest.mjs run).
// This script reads the file as text and extracts each subject's `llama: { ... }` / `llama: null` line with
// a lenient, line-based scan instead of a real YAML parse — the same approach the rest of this directory's
// tooling uses for this file. Only `subjects:` is read (brief: "subjects[].llama{} blocks"); `dependencies:`,
// `observe:` and `graduation:` rows are out of scope even where they carry an `llama: {...}` field of their own.
//
// NOT idempotent and NOT safe to re-run against already-harvested content (same convention as this
// directory's other one-shot scripts — see README.md here): every run appends a NEW ledger source and NEW
// metrics[] entries, it does not diff or merge against a prior run. --overwrite is a confirmation, not a
// convenience.
import { readFile, writeFile, access } from "node:fs/promises";
import { parse, stringify } from "yaml";
import { ACCESSED, GENERIC_EXCERPT } from "./harvest-data.mjs";
import { RESEARCHER } from "../../seed-data.mjs";
import { validateAgainst } from "../../lib/schemas.mjs";
import { voiceWarnings, conductWarnings } from "../../lib/voice.mjs";

if (!process.argv.includes("--overwrite")) {
  console.error(
    "harvest-metrics: refuses to run without --overwrite.\n" +
      "One-shot tooling for the 2026-08-31 ecosystem-map metrics harvest — every run APPENDS a new ledger\n" +
      "source and new content/projects/<slug>.yaml metrics[] entries; it is not idempotent and does not merge\n" +
      "against a prior run. Re-run only if you mean to harvest again from a fresh content/ tree.\n" +
      "Pass --overwrite to confirm.",
  );
  process.exit(1);
}

const MAP_PATH = "research/inbox/2026-08-31-ecosystem-map.yaml";
const CENSUS_PATH = "content/census.yaml";
const HARVEST_DATE = "2026-08-31";
const CLAIM = "Chain-slice figures as listed by DefiLlama on 2026-08-31 (copied from the research intake; not reproduced)";
const CHAIN_URL = "https://defillama.com/chain/robinhood-chain";
// Brief §Harvest — the only keys this pass understands; every other key in a llama{} block is recorded and
// skipped (not guessed at), e.g. stonkbroker's anvil_vol_24h/pad_vol_24h, meridian's perps_tvl/predict_tvl.
const KEY_MAP = { tvl: "tvl", vol_24h: "volume_24h", fees_24h: "fees_24h", revenue_24h: "revenue_24h" };

const exists = (p) => access(p).then(() => true, () => false);
const writeYaml = async (p, data, header) => writeFile(p, (header ?? "") + stringify(data, { lineWidth: 0 }));

// --- parse the map's subjects: block leniently (see header comment) ------------------------------------
const mapText = await readFile(MAP_PATH, "utf8");
const lines = mapText.split("\n");
const subjectsStart = lines.indexOf("subjects:");
const subjectsEnd = lines.findIndex((l, i) => i > subjectsStart && l === "dependencies:");
if (subjectsStart === -1 || subjectsEnd === -1) {
  console.error(`harvest-metrics: could not find subjects:/dependencies: section boundaries in ${MAP_PATH}`);
  process.exit(1);
}

// meta.sources bullets that name a DefiLlama *protocol* page (as opposed to the chain page) — at the time of
// writing only "https://defillama.com/protocol/pons" — reused as the ledger URL for that slug (brief: "when
// ... the map note names a Llama page for it").
const protocolPages = new Map(); // url-path segment -> full url
for (const line of lines.slice(0, subjectsStart)) {
  const m = line.match(/https:\/\/defillama\.com\/protocol\/(\S+)/);
  if (m) protocolPages.set(m[1], m[0]);
}

let currentSlug = null;
const llamaBySlug = new Map(); // slug -> raw text after "llama:" (last occurrence wins — mirrors YAML's own
                                // "later key wins" and matches how stonkbroker's repeated key must be read)
const noteBySlug = new Map();
for (const raw of lines.slice(subjectsStart, subjectsEnd)) {
  const slugMatch = raw.match(/^ {2}- slug: (\S+)/);
  if (slugMatch) { currentSlug = slugMatch[1]; continue; }
  if (!currentSlug) continue;
  const llamaMatch = raw.match(/^\s*llama:\s*(.+)$/);
  if (llamaMatch) llamaBySlug.set(currentSlug, llamaMatch[1].trim());
  const noteMatch = raw.match(/^\s*note:\s*(.+)$/);
  if (noteMatch) noteBySlug.set(currentSlug, noteMatch[1]);
}

/** `{ tvl: 123, fees_24h: 45 }` (flat, no nested braces in this file) or `null`. */
function parseLlamaBlock(raw) {
  if (raw === "null") return null;
  const inner = raw.replace(/^\{\s*/, "").replace(/\s*\}$/, "");
  const out = {};
  for (const pair of inner.split(",").map((s) => s.trim()).filter(Boolean)) {
    const [key, value] = pair.split(":").map((s) => s.trim());
    out[key] = Number(value);
  }
  return out;
}

const census = parse(await readFile(CENSUS_PATH, "utf8"));
const censusSlugs = new Set(census.map((c) => c.slug));

// --- classify every subject that carries a llama: key ------------------------------------------------
const skippedKeysBySlug = new Map(); // slug -> [nonstandard keys]
const nullSlugs = [];          // llama: null — no data at all
const noStandardKeySlugs = []; // llama: {...} but every key is nonstandard — nothing to harvest
const unmatchedCensusSlugs = []; // map slug not found in content/census.yaml (brief: skip + record)
const harvested = []; // { slug, metrics: [{kind,value}] }

for (const [slug, raw] of llamaBySlug) {
  if (!censusSlugs.has(slug)) { unmatchedCensusSlugs.push(slug); continue; }
  const parsed = parseLlamaBlock(raw);
  if (parsed === null) { nullSlugs.push(slug); continue; }
  const metrics = [];
  const skipped = [];
  for (const [key, value] of Object.entries(parsed)) {
    const kind = KEY_MAP[key];
    if (!kind) skipped.push(key);
    else metrics.push({ kind, value });
  }
  if (skipped.length) skippedKeysBySlug.set(slug, skipped);
  if (!metrics.length) { noStandardKeySlugs.push(slug); continue; }
  harvested.push({ slug, metrics });
}

// --- write projects/sources for each harvested slug ---------------------------------------------------
let ledgerEntries = 0, metricsWritten = 0;
const perSlugLog = [];

for (const { slug, metrics } of harvested.sort((a, b) => a.slug.localeCompare(b.slug))) {
  const projectPath = `content/projects/${slug}.yaml`, sourcesPath = `content/sources/${slug}.yaml`;
  if (!(await exists(projectPath)) || !(await exists(sourcesPath))) { console.error(`${slug}: project/sources file missing`); process.exit(1); }

  const project = parse(await readFile(projectPath, "utf8"));
  const sourcesFile = parse(await readFile(sourcesPath, "utf8"));
  const entries = sourcesFile.sources ?? [];
  const next = entries.reduce((m, s) => Math.max(m, Number(s.id.slice(1))), 0) + 1;
  const newId = `S${next}`;

  // Ledger URL: an existing DefiLlama *protocol*-page entry wins, then a protocol page the map names (its own
  // note, or the meta.sources list) for this slug, else the chain-wide page (brief §Harvest).
  const existingProtocolUrl = entries.find((s) => /^https:\/\/defillama\.com\/protocol\//.test(s.url))?.url;
  const noteUrl = (noteBySlug.get(slug) ?? "").match(/https:\/\/defillama\.com\/protocol\/\S+/)?.[0];
  const metaUrl = protocolPages.get(slug);
  const url = existingProtocolUrl ?? noteUrl ?? metaUrl ?? CHAIN_URL;

  const newSource = {
    id: newId, url, publisher: "DefiLlama", kind: "third-party-data", accessed_at: ACCESSED,
    claim: CLAIM, excerpt: GENERIC_EXCERPT, hash: null, archive_url: null, researcher: RESEARCHER, available: true,
  };
  const newEntries = [...entries, newSource];
  const sourcesOut = { slug: sourcesFile.slug, sources: newEntries };
  const sourcesErrs = validateAgainst("sources", sourcesOut);
  if (sourcesErrs.length) { console.error(`${slug}: sources/${slug}.yaml would be invalid: ${sourcesErrs.join("; ")}`); process.exit(1); }

  const newMetrics = metrics.map(({ kind, value }) => {
    const m = { kind, value };
    if (kind !== "holders") m.currency = "USD";
    m.as_of = HARVEST_DATE; m.class = "claim"; m.sources = [newId];
    return m;
  });

  const findings = structuredClone(project.findings);
  const newTexts = [];
  // Brief: the map's note flags StonkBrokers' parent/child TVL discrepancy — harvest the number, but also
  // record the gap as a missing-evidence line (in addition to the existing risk/unresolved lines about it).
  if (slug === "stonkbroker") {
    const tvl = newMetrics.find((m) => m.kind === "tvl");
    if (tvl) {
      const text = `The TVL harvested here ($${tvl.value.toLocaleString("en-US")}) is DefiLlama's parent-level figure for StonkBrokers; the research intake notes the StonkBrokers launchpad page shows about $1.05M — a child/parent split this harvest did not reconcile.`;
      findings.missing.push({ text });
      newTexts.push([text, `projects/${slug}.yaml: findings.missing`]);
    }
  }

  const voiceHits = newTexts.flatMap(([text, where]) => [...voiceWarnings(text, where), ...conductWarnings(text, where)]);
  if (voiceHits.length) { console.error(`${slug}: ${voiceHits.join("; ")}`); process.exit(1); }

  const updated = {
    slug: project.slug, name: project.name, symbol: project.symbol, category: project.category,
    lifecycle: project.lifecycle, coverage: project.coverage, summary: project.summary,
    official_links: project.official_links, dependencies: project.dependencies, deployments: project.deployments,
    metrics: [...(project.metrics ?? []), ...newMetrics],
    review: project.review,
    ...(project.scoring ? { scoring: project.scoring } : {}),
    findings,
  };
  const projectErrs = validateAgainst("project", updated);
  if (projectErrs.length) { console.error(`${slug}: projects/${slug}.yaml would be invalid: ${projectErrs.join("; ")}`); process.exit(1); }

  await writeYaml(sourcesPath, sourcesOut);
  await writeYaml(projectPath, updated);
  ledgerEntries += 1;
  metricsWritten += newMetrics.length;
  perSlugLog.push(`${slug}: +${newMetrics.length} metric(s) [${newMetrics.map((m) => m.kind).join(", ")}], ledger ${newId} (${url})`);
}

// --- report -------------------------------------------------------------------------------------------
console.log(`harvest-metrics: ${harvested.length} slugs, ${metricsWritten} metrics, ${ledgerEntries} ledger entries added`);
for (const line of perSlugLog) console.log(`  ${line}`);
if (nullSlugs.length) console.log(`skipped (llama: null, no data): ${nullSlugs.join(", ")}`);
if (noStandardKeySlugs.length) console.log(`skipped (no standard keys): ${noStandardKeySlugs.map((s) => `${s} [${skippedKeysBySlug.get(s)?.join(", ")}]`).join("; ")}`);
if (unmatchedCensusSlugs.length) console.log(`skipped (not in content/census.yaml): ${unmatchedCensusSlugs.join(", ")}`);
if (skippedKeysBySlug.size) {
  console.log("nonstandard keys skipped:");
  for (const [slug, keys] of skippedKeysBySlug) console.log(`  ${slug}: ${keys.join(", ")}`);
}
