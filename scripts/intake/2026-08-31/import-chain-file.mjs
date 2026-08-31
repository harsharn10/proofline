// Task 5 importer — turns the Grok intake (Chain File dossiers, the desk's ecosystem map and the
// workbook script) into DRAFT files under research/inbox/grok-2026-08-30/drafts/. Nothing here writes
// into content/: the drafts are hand-edited into census.yaml, seed-data.mjs and harvest-data.mjs.
//
//   node scripts/import-chain-file.mjs
//
// Outputs (all overwritten on every run):
//   drafts/census-draft.yaml            one block per map `subjects:` entry, merged with its dossier
//   drafts/seed-draft.mjs               SEED-shaped entries (summary/deployments/missing) per subject
//   drafts/feed/<slug>.yaml             dossier feed items per census slug, numbers wrapped as claims
//   drafts/workbook-sheet02.yaml        sheet 02 protocol rows parsed from the Python tuple literals
//   drafts/stock-tokens-deployments.yaml sheet 01 (194 Stock/ETF rows) + the app's six addresses
//   drafts/unmapped.yaml                dossiers that map to no census slug (memes, infra, stock tokens)
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { parse, stringify } from "yaml";
import { voiceWarnings } from "./lib/voice.mjs";

const INBOX = "research/inbox";
const GROK = `${INBOX}/grok-2026-08-30`;
const OUT = `${GROK}/drafts`;
const GH = "https://github.com/harsharn10/proofline/blob/site-integration";

// Chain File dossier slug → census slug. null = not a census subject (goes to unmapped.yaml with a reason).
const DOSSIER_TO_SLUG = {
  pons: "pons", index: "index", bow: "longbow", denar: "denar", arrow: "arrow", mancer: "mancer",
  quotron: "quotrons", stonkbroker: "stonkbroker", statics: "statics-protocol", longshot: "long", // the dossier describes long.xyz
  l4va: "l4va", robindex: "robindex", fox: "foxpad", virtuals: "virtuals", maxfi: "maxfi", squeeze: "squeeze",
  "ai-inu": "artificial-inu", bankr: "bankr", noxa: "noxa", vimen: "vimen",
  // not subjects
  "stock-tokens": null, nvda: null, spy: null, spcx: null, hood: null, gme: null, usar: null,
  earn: null, morpho: null, uniswap: null, chainlink: null, lighter: null,
  cashcat: null, hmm: null, wifi: null, brodie: null, metalhead: null, monkeybiz: null, robinwifhat: null,
  atlas: null, rstocks: null, poolsfun: null,
};
const UNMAPPED_REASON = {
  "stock-tokens": "official Stock Tokens → dependencies/stock-tokens (PRD §2.2)",
  nvda: "official Stock Token → stock-tokens card", spy: "official Stock Token → stock-tokens card",
  spcx: "official Stock Token → stock-tokens card", hood: "official Stock Token → stock-tokens card",
  gme: "official Stock Token → stock-tokens card", usar: "official Stock Token → stock-tokens card",
  earn: "Robinhood Earn is the Morpho front door — day-one infra → dependencies/morpho (PRD §2.2)",
  morpho: "day-one infra → dependency card", uniswap: "day-one infra → dependency card",
  chainlink: "day-one infra → dependency card", lighter: "day-one infra → dependency card",
  cashcat: "pure culture meme, no mechanism (PRD §2.2)", hmm: "pure culture meme, no mechanism (PRD §2.2)",
  wifi: "culture meme; utility claims are a KOL video, no documented protocol (PRD §2.2)",
  brodie: "pure culture meme (PRD §2.2)",
  metalhead: "not launched; a Pons meme announcing a USAR drip — graduation until a mechanism exists",
  monkeybiz: "not minted; announced clone of the StonkBrokers pattern — no contract, no site",
  robinwifhat: "token + promised pad; same-dev claim is CT — graduation until the pad ships",
  atlas: "dossier is an empty placeholder (no CA, no link); workbook names atlasprotocolrh.com — observe",
  rstocks: "Pons-launched printer aimed at HOOD; site said 'awaiting Pons launch' — graduation",
  poolsfun: "GeckoTerminal note on Sushi-V3 launches; not shown to be the same product as pools.trade — observe",
};

const dossiers = JSON.parse(await readFile(`${GROK}/chain-file.json`, "utf8"));
const map = readMap(await readFile(`${INBOX}/2026-08-31-ecosystem-map.yaml`, "utf8"));

/**
 * The desk's map is hand-written YAML with two quirks that a strict parser rejects: one row repeats its
 * `llama:` key, and some `note:` values are unquoted plain scalars containing ": ". The intake is
 * read-only, so quote those note values here and keep the last duplicate key instead of failing.
 */
function readMap(text) {
  const fixed = text.split("\n").map((line) => {
    const m = line.match(/^(\s+note:\s)(.*)$/);
    if (!m || /^["']/.test(m[2]) || !/:\s|\s#/.test(m[2])) return line;
    return m[1] + JSON.stringify(m[2]);
  }).join("\n");
  return parse(fixed, { uniqueKeys: false });
}
const py = await readFile(`${GROK}/build_rh_tokens.py`, "utf8");

await mkdir(`${OUT}/feed`, { recursive: true });

/** Slice a Python list literal `name = [ ... ]` out of the script (the closing bracket at column 0). */
function pyList(name) {
  const start = py.indexOf(`${name} = [`);
  if (start === -1) throw new Error(`list ${name} not found`);
  const end = py.indexOf("\n]", start);
  return py.slice(start, end);
}
/** Parse every tuple of double-quoted strings inside a list literal into string arrays. */
function pyTuples(block, arity) {
  const out = [];
  const tupleRe = /\(\s*((?:"(?:[^"\\]|\\.)*"\s*,?\s*)+)\)/g;
  for (const m of block.matchAll(tupleRe)) {
    const strs = [...m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1].replace(/\\"/g, '"'));
    if (strs.length === arity) out.push(strs);
  }
  return out;
}

// --- sheet 01 → stock-tokens deployments --------------------------------------------------------
const sheet01 = pyTuples(pyList("stocks"), 5).map(([ticker, name, type, sector, address]) => ({ ticker, name, type, sector, address }));
const appTokens = dossiers.filter((d) => d.category === "official-rwa" && d.contracts?.length)
  .map((d) => ({ ticker: d.ticker, name: d.project, address: d.contracts[0].address }));
const byTicker = new Map(sheet01.map((r) => [r.ticker, r]));
const stockDeployments = [];
for (const r of sheet01.filter((r) => r.type === "Stock" || r.type === "ETF")) {
  const app = appTokens.find((a) => a.ticker === r.ticker);
  const agrees = app && app.address.toLowerCase() === r.address.toLowerCase();
  stockDeployments.push({ label: `${r.ticker} — ${r.name} (${agrees ? "workbook sheet 01 + app dossier agree" : "workbook sheet 01"})`, ticker: r.ticker, chain: "robinhood-chain",
    issuer: "Robinhood Assets (Jersey) Limited", address: r.address, role: "token", verified: false, sources: agrees ? ["S1", "S2"] : ["S1"] });
}
for (const a of appTokens) {
  const wb = byTicker.get(a.ticker);
  if (wb && wb.address.toLowerCase() === a.address.toLowerCase()) continue;
  stockDeployments.push({ label: `${a.ticker} — ${a.name} (app dossier${wb ? "; workbook gives a different address" : "; not in workbook sheet 01"})`, ticker: a.ticker,
    chain: "robinhood-chain", issuer: "Robinhood Assets (Jersey) Limited", address: a.address, role: "token", verified: false, sources: ["S2"] });
}
const disagreements = appTokens.filter((a) => byTicker.has(a.ticker) && byTicker.get(a.ticker).address.toLowerCase() !== a.address.toLowerCase())
  .map((a) => ({ ticker: a.ticker, workbook: byTicker.get(a.ticker).address, app: a.address }));
await writeFile(`${OUT}/stock-tokens-deployments.yaml`, `# Generated by scripts/import-chain-file.mjs — sheet 01 Stock/ETF rows + Chain File app addresses.\n# S1 = workbook (${GH}/${GROK}/build_rh_tokens.py), S2 = app dossiers (${GH}/${GROK}/chain-file.json).\n` +
  stringify({ counts: { sheet01_rows: sheet01.length, stock_or_etf: sheet01.filter((r) => r.type === "Stock" || r.type === "ETF").length, core_assets: sheet01.filter((r) => !(r.type === "Stock" || r.type === "ETF")).map((r) => `${r.ticker} ${r.address}`), app_addresses: appTokens.length, deployments: stockDeployments.length },
    disagreements, deployments: stockDeployments }, { lineWidth: 0 }));

// --- sheet 02 → protocol rows ----------------------------------------------------------------------
const sheet02 = pyTuples(pyList("defi"), 10).map(([token, project, what, rwaHook, status, mcap, supply, ca, site, watchouts]) => ({ token, project, what, rwaHook, status, mcap, supply, ca, site, watchouts }));
await writeFile(`${OUT}/workbook-sheet02.yaml`, `# Generated by scripts/import-chain-file.mjs — sheet 02 rows parsed from build_rh_tokens.py. Everything is a claim of the workbook.\n` + stringify(sheet02, { lineWidth: 0 }));

// --- dossiers → census / seed / feed drafts ---------------------------------------------------------
const ADDR_RE = /0x[0-9a-fA-F]{40}/g;
/** Neutralise a feed body: attribute social-post numbers to the account, keep dates and figures inside the quote. */
function neutralBody(item, dossier) {
  const src = item.source ?? "";
  const handle = src.match(/@[A-Za-z0-9_]{1,15}/)?.[0] ?? null;
  const body = item.body.replace(/^@[A-Za-z0-9_]+:\s*/, "");
  const wrapped = handle ? `The account posted that ${body.charAt(0).toLowerCase()}${body.slice(1)}` : body;
  return { handle, body: wrapped, warnings: voiceWarnings(`${item.title} ${wrapped}`, `${dossier.slug}/${item.id}`) };
}

const censusDraft = [], seedDraft = {}, unmapped = [];
const subjects = map.subjects;
for (const d of dossiers) {
  const slug = DOSSIER_TO_SLUG[d.slug];
  if (slug === undefined) throw new Error(`no mapping for dossier ${d.slug}`);
  if (slug === null) { unmapped.push({ dossier: d.slug, name: d.project, reason: UNMAPPED_REASON[d.slug] ?? "unmapped", contracts: d.contracts, links: d.links }); continue; }
  if (d.feed?.length) {
    const items = d.feed.map((it, i) => {
      const n = neutralBody(it, d);
      const entry = { id: `${slug}-d${i + 1}`, date: it.date, kind: it.kind, title: it.title, body: n.body };
      if (n.handle) entry.account = n.handle;
      if (it.sourceUrl) entry.sourceUrl = it.sourceUrl;
      if (n.warnings.length) entry._voice = n.warnings;
      entry._source = it.source ?? null;
      return entry;
    });
    await writeFile(`${OUT}/feed/${slug}.yaml`, `# DRAFT from Chain File dossier "${d.slug}" — hand-edit before use; drop _voice/_source keys.\n` + stringify({ slug, items }, { lineWidth: 0 }));
  }
}

// The map's `fox` row is the culture token plus its pad; the census files the pad (brief: FoxPad is in,
// FOX-the-mascot is not), so the row is drafted under the slug `foxpad`.
const slugOf = (s) => (s.slug === "fox" ? "foxpad" : s.slug);
for (const s of subjects) {
  const slug = slugOf(s);
  const dossier = dossiers.find((d) => DOSSIER_TO_SLUG[d.slug] === slug);
  const wb = sheet02.find((r) => r.project.toLowerCase().includes(s.name.toLowerCase().split(" ")[0]));
  const links = [];
  if (s.handle) links.push({ kind: "x", url: `https://x.com/${s.handle.slice(1)}` });
  for (const l of dossier?.links ?? []) if (!/x\.com|dexscreener|blockscout|geckoterminal|hood-chain/.test(l.href)) links.push({ kind: "site", url: l.href });
  const addresses = [];
  for (const [k, v] of Object.entries(s.cas ?? {})) addresses.push({ label: k, address: v, source: "map" });
  for (const c of dossier?.contracts ?? []) if (!addresses.some((a) => a.address.toLowerCase() === c.address.toLowerCase())) addresses.push({ label: c.label, address: c.address, source: "dossier" });
  if (wb) for (const a of wb.ca.match(ADDR_RE) ?? []) if (!addresses.some((x) => x.address.toLowerCase() === a.toLowerCase())) addresses.push({ label: `${wb.token} (workbook sheet 02)`, address: a, source: "workbook" });
  const lifecycle = s.lifecycle === "unknown" ? "announced" : s.lifecycle;
  censusDraft.push({
    slug, name: slug === "foxpad" ? "FoxPad" : s.name, category: "TODO — pick from the shared enum", lifecycle, coverage: "stub", official_links: links,
    discovery_source: `Grok research desk ecosystem map 2026-08-31 (${s.tree_primary})${dossier ? "; Chain File dossier 2026-08-30" : ""}`,
    handle: s.handle ?? undefined, tree: { primary: s.tree_primary, ...(s.tree_secondary?.length ? { secondary: s.tree_secondary } : {}) },
    qualifying: {
      deployed_on_chain: { value: true, note: `live_evidence: ${(s.live_evidence ?? []).join(", ") || "none"}`, verified: false },
      native_play: { value: true, note: s.note ?? "", verified: false },
      citable: { value: links.length > 0, note: links.length ? "Handle and/or site from the intake" : "No official link or handle found", verified: false },
      research_story: { value: true, note: "TODO", verified: false },
    },
    _lifecycle_unknown: s.lifecycle === "unknown" || undefined,
    _addresses: addresses,
    _llama: s.llama ?? null,
    _dossier: dossier ? { overview: dossier.overview, mechanics: dossier.mechanics, risks: dossier.risks, collisions: dossier.collisions ?? null } : null,
    _workbook: wb ? { what: wb.what, status: wb.status, supply: wb.supply, watchouts: wb.watchouts, site: wb.site } : null,
    _voice: voiceWarnings([dossier?.overview, dossier?.mechanics, dossier?.risks, wb?.what, wb?.watchouts, s.note].filter(Boolean).join(" "), slug),
  });
  seedDraft[slug] = { symbol: null, dependencies: [], summary: `TODO (${s.tree_primary})`,
    deployments: addresses.map((a) => ({ label: a.label, chain: "robinhood-chain", address: a.address, role: "token" })),
    missing: [ ...(s.lifecycle === "unknown" ? ["Lifecycle not verified — no deployment evidence reviewed"] : []), "Addresses from the intake not yet reproduced on Blockscout", "An independent audit was not found in this review", "Privileged roles not yet identified" ] };
}

await writeFile(`${OUT}/census-draft.yaml`, `# DRAFT — generated by scripts/import-chain-file.mjs from the desk map + dossiers + workbook. Keys starting with _ are notes for the editor and are not schema fields.\n` + stringify(censusDraft, { lineWidth: 0 }));
await writeFile(`${OUT}/seed-draft.mjs`, `// DRAFT SEED entries — generated by scripts/import-chain-file.mjs. Hand-edit into scripts/seed-data.mjs.\nexport const SEED_DRAFT = ${JSON.stringify(seedDraft, null, 2)};\n`);
await writeFile(`${OUT}/unmapped.yaml`, `# Dossiers that are not census subjects, with the rule applied. Generated by scripts/import-chain-file.mjs.\n` + stringify(unmapped, { lineWidth: 0 }));

console.log(`import: ${subjects.length} map subjects, ${dossiers.length} dossiers (${unmapped.length} unmapped), sheet01 ${sheet01.length} rows → ${stockDeployments.length} stock-token deployments (${disagreements.length} ticker(s) with two addresses), sheet02 ${sheet02.length} rows`);
