import { readFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { parse, stringify } from "yaml";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, cp, rm, writeFile, appendFile, readdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { registerHooks } from "node:module";
import { derive, SECURITY_MAX, PROVISIONAL_CONFIDENCE, FULL_WEIGHT_CONFIDENCE, computeRanks } from "./lib/score.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { crossCheck, releaseCheck } from "./lib/checks.mjs";
import { checkResearch, tagIds, REQUIRED_HEADINGS } from "./lib/research-md.mjs";
import { loadContent } from "./lib/load.mjs";
import {
  selectUnsent,
  selectApproved,
  selectShareBar,
  buildMessages,
  chunkMessage,
  publicationFingerprint,
  readDotEnv,
  selectWireItems,
  buildWireMessages,
  formatSignalAlert,
  buildDailyBrief,
  buildWeeklyWrap,
} from "./lib/telegram.mjs";
import {
  breakoutSignal,
  confirmControlChanges,
  distinctTalkAccounts,
  dropMassNullTransitions,
  leaderChangeSignal,
  controlChangeSignal,
  distributionSignal,
  comingUpSignal,
  rankSignals,
  selectDailyAlerts,
} from "./lib/signals.mjs";
import { compile as compilePacket, parsePacket } from "./lib/packet.mjs";
import { validateContent, ownWordSet, filterOwnWords } from "./lib/validate-content.mjs";
import { computeTrending, countsForTrending } from "./lib/trending.mjs";
import { voiceWarnings, conductWarnings } from "./lib/voice.mjs";
import {
  meetsShareBar as meetsShareBarCore,
  officialSurfaceConfirmed as officialSurfaceConfirmedCore,
} from "./lib/share-bar.mjs";

const expected = JSON.parse(await readFile(new URL("../fixtures/expected.json", import.meta.url), "utf8"));
let failures = 0;

const READER_WORDS = [
  "packet",
  "census",
  "stub",
  "coverage",
  "cohort",
  "qualifying",
  "collector",
  "dossier",
  "evidence class",
  "provisional",
  "derived",
  "slug",
  "Proofline",
];

// The two places the old brand is still the right word: the attribution the site carries
// ("Icarus is powered by Project Proofline") and the methodology_version string itself.
const ATTRIBUTION = /(?:powered by|Project)\s+Proofline|\bproofline-v[\w.]+/gi;

function readerWordHits(value) {
  const text = value.replace(/\$\{[^}]*\}/g, " ").replace(ATTRIBUTION, "");
  return READER_WORDS.filter((word) => new RegExp(`\\b${word.replace(" ", "\\s+")}\\b`, "i").test(text));
}

// Names that introduce reader copy outside JSX: { label: "…" }, KPI_LABEL = { … },
// reportedTitle() — anything whose key or declaration reads like a label.
const COPY_NAME = /(?:label|title|subtitle|sub|note|hint|description|placeholder)s?$/i;

// Every string literal in the balanced region that starts at `start` (a quote, or a bracket to
// walk). Template literals come through whole, `${…}` included, which is enough to spot a word.
function literalsFrom(source, start) {
  const found = [];
  let depth = 0;
  for (let i = start; i < source.length; i += 1) {
    const ch = source[i];
    if (ch === '"' || ch === "'" || ch === "`") {
      let text = "";
      let j = i + 1;
      while (j < source.length && source[j] !== ch) {
        if (source[j] === "\\") { text += source[j + 1] ?? ""; j += 2; continue; }
        text += source[j];
        j += 1;
      }
      found.push({ text, index: i + 1 });
      if (depth === 0) return found;
      i = j;
      continue;
    }
    if (ch === "{" || ch === "[" || ch === "(") depth += 1;
    else if (ch === "}" || ch === "]" || ch === ")") {
      depth -= 1;
      if (depth <= 0) return found;
    }
  }
  return found;
}

const OPENS = /["'`{[]/;

// The opening quote or bracket a `name:` or `name =` introduces, or -1 when the declaration
// carries no literal of its own (`label: string` in a type, an imported binding).
function copyStart(source, from) {
  let i = from;
  while (i < source.length && /\s/.test(source[i])) i += 1;
  if (OPENS.test(source[i] ?? "")) return i;
  // A typed declaration — `KPI_LABEL: Record<KpiKey, string> = { … }` — steps over the annotation.
  for (let j = i; j < source.length && j < i + 160; j += 1) {
    const ch = source[j];
    if (ch === "=") {
      let k = j + 1;
      while (k < source.length && /\s/.test(source[k])) k += 1;
      return OPENS.test(source[k] ?? "") ? k : -1;
    }
    if (ch === ";" || ch === "{" || ch === "}" || ch === "\n" || ch === '"' || ch === "'" || ch === "`") return -1;
  }
  return -1;
}

// The body of `function reportedTitle(asOf: string): string { … }`, past its parameters and
// return type, or -1 when there is none.
function bodyStart(source, openParen) {
  let depth = 0;
  let i = openParen;
  for (; i < source.length; i += 1) {
    if (source[i] === "(") depth += 1;
    else if (source[i] === ")") {
      depth -= 1;
      if (depth === 0) break;
    }
  }
  for (let j = i + 1; j < source.length && j < i + 160; j += 1) {
    if (source[j] === "{") return j;
    if (source[j] === ";" || source[j] === "\n") return -1;
  }
  return -1;
}

function jsxVisibleStrings(source) {
  const clean = source
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/.*$/gm, "$1");
  const found = [];
  const collect = (re, group = 1) => {
    for (const match of clean.matchAll(re)) {
      const text = match[group];
      if (/[{};=]|=>|\b(?:const|for|if|return)\b|\.\w+\(/.test(text)) continue;
      found.push({ text, index: match.index + match[0].indexOf(text) });
    }
  };
  collect(/(?:<\/?[A-Za-z][^>]*>|<>)([^<{]+)(?=<)/gs);
  collect(/\b(?:aria-label|placeholder|alt|title|label)\s*=\s*["']([^"']*)["']/g);
  for (const expression of clean.matchAll(/>\s*\{([^{}\n]+)\}\s*</g)) {
    for (const literal of expression[1].matchAll(/["'`]([^"'`]*)["'`]/g)) {
      found.push({
        text: literal[1],
        index: expression.index + expression[0].indexOf(expression[1]) + literal.index + 1,
      });
    }
  }
  // Copy that never reaches JSX as text: label-ish object and array literals, and the helpers
  // that build one. Plain .ts modules carry most of it (data/types.ts labels, lib/dejargon.ts).
  for (const match of clean.matchAll(/\b([A-Za-z_$][\w$]*)\s*[:=]/g)) {
    if (!COPY_NAME.test(match[1])) continue;
    const start = copyStart(clean, match.index + match[0].length);
    if (start !== -1) found.push(...literalsFrom(clean, start));
  }
  for (const match of clean.matchAll(/\bfunction\s+([A-Za-z_$][\w$]*)\s*\(/g)) {
    if (!COPY_NAME.test(match[1])) continue;
    const body = bodyStart(clean, match.index + match[0].length - 1);
    if (body !== -1) found.push(...literalsFrom(clean, body));
  }
  // A JSX label attribute matches both collectors; report each string once.
  const seen = new Set();
  return found.filter(({ index }) => !seen.has(index) && seen.add(index));
}

async function filesUnder(directory, suffix) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await filesUnder(path, suffix));
    else if (entry.name.endsWith(suffix)) result.push(path);
  }
  return result;
}

for (const [name, want] of Object.entries(expected)) {
  const project = parse(await readFile(new URL(`../fixtures/${name}/project.yaml`, import.meta.url), "utf8"));
  const got = derive(project);
  try {
    assert.equal(got.score, want.score, `${name}: score`);
    assert.equal(got.uncappedScore, want.uncappedScore, `${name}: uncappedScore`);
    assert.equal(got.provisional, want.provisional, `${name}: provisional`);
    assert.equal(got.label, want.label, `${name}: label`);
    assert.equal(got.confidence, want.confidence, `${name}: confidence`);
    assert.equal(got.risk, want.risk, `${name}: risk`);
    assert.equal(got.override?.level ?? null, want.override?.level ?? null, `${name}: override`);
    if (got.override) assert.ok(typeof got.override.reason === "string" && got.override.reason.length > 0, `${name}: override.reason`);
    assert.equal(got.securityRaw, want.securityRaw, `${name}: securityRaw`);
    console.log(`ok   ${name}`);
  } catch (err) {
    failures++;
    console.error(`FAIL ${name}: ${err.message}`);
  }
}

// Stub behaviour: no scoring block → pending label, nulls everywhere.
{
  const stub = derive({ slug: "s", coverage: "stub", review: { approver: "pending" } });
  try {
    assert.equal(stub.score, null);
    assert.equal(stub.label, "Research pending / insufficient evidence");
    assert.equal(stub.confidence, null);
    assert.equal(stub.risk, null);
    console.log("ok   stub");
  } catch (err) { failures++; console.error(`FAIL stub: ${err.message}`); }
}

// Low confidence suppresses the number even on a full profile.
{
  const low = parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  low.scoring.confidence = { primary_source_coverage: 40, onchain_verification: 40, independent_corroboration: 40, freshness: 40, review_completeness: 40 };
  const got = derive(low);
  try {
    assert.equal(got.score, null);
    assert.equal(got.uncappedScore, 87);
    assert.equal(got.confidence, 40);
    assert.equal(got.label, "Research pending / insufficient evidence");
    console.log("ok   low-confidence");
  } catch (err) { failures++; console.error(`FAIL low-confidence: ${err.message}`); }
}

// Placeholder approver values must never bypass the pending-review confidence cap.
{
  const placeholder = parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  placeholder.review.approver = "tbd";
  const got = derive(placeholder);
  try {
    assert.equal(got.confidence, 69);
    assert.equal(got.provisional, true);
    console.log("ok   placeholder approver cap");
  } catch (err) { failures++; console.error(`FAIL placeholder approver cap: ${err.message}`); }
}

// Unscored factor renormalizes weights instead of scoring zero.
{
  const p = parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  p.scoring.factors.economic.level = "insufficient";
  const got = derive(p);
  // weights left: 35+20+15+15 = 85 → (35·100 + 50·80)/85 = (3500+4000)/85 = 88.235 → 88
  try { assert.equal(got.score, 88); assert.equal(got.factorPercents.economic, null); console.log("ok   renormalize"); }
  catch (err) { failures++; console.error(`FAIL renormalize: ${err.message}`); }
}

// Fixtures satisfy the schemas.
for (const name of Object.keys(expected)) {
  const p = parse(await readFile(new URL(`../fixtures/${name}/project.yaml`, import.meta.url), "utf8"));
  const s = parse(await readFile(new URL(`../fixtures/${name}/sources.yaml`, import.meta.url), "utf8"));
  const pe = validateAgainst("project", p), se = validateAgainst("sources", s);
  if (pe.length || se.length) { failures++; console.error(`FAIL schema ${name}: ${[...pe, ...se].join("; ")}`); } else console.log(`ok   schema ${name}`);
}

// A stub with a scoring block is rejected; a stub without missing-evidence is rejected.
{
  const p = parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  p.coverage = "stub";
  const withScoring = validateAgainst("project", p);
  delete p.scoring;
  const noMissing = validateAgainst("project", p);
  p.findings.missing = [{ text: "Audit not located" }];
  const okStub = validateAgainst("project", p);
  try { assert.ok(withScoring.length > 0); assert.ok(noMissing.length > 0); assert.equal(okStub.length, 0); console.log("ok   stub schema rules"); }
  catch (err) { failures++; console.error(`FAIL stub schema rules: ${err.message}`); }
}

// I1 / I2 / I4 / M4 / M1 — schema rules on the project file.
{
  const fresh = async () => parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  const errsWith = async (mutate) => { const p = await fresh(); mutate(p); return validateAgainst("project", p); };
  const fullNoEvidence = await errsWith((p) => { p.scoring.security.privileged_power.evidence = []; });
  const zeroNoEvidence = await errsWith((p) => { p.scoring.security.privileged_power = { level: "zero", evidence: [], note: "nothing found" }; });
  const strongNoEvidence = await errsWith((p) => { p.scoring.factors.engineering.evidence = []; });
  const insufficientNoEvidence = await errsWith((p) => { p.scoring.factors.engineering = { level: "insufficient", positive: [], negative: [], missing: ["repo"], evidence: [] }; });
  const approverCaps = await errsWith((p) => { p.review.approver = "Pending"; });
  const approverSpace = await errsWith((p) => { p.review.approver = "pending "; });
  const researcherCaps = await errsWith((p) => { p.review.researcher = "Fixture"; });
  const verifiedSentinel = await errsWith((p) => { p.deployments[0] = { label: "Router", chain: "robinhood-chain", address: "not-verified", role: "router", verified: true, sources: [] }; });
  const verifiedNoSource = await errsWith((p) => { p.deployments[0].sources = []; });
  const unverifiedSentinel = await errsWith((p) => { p.deployments[0] = { label: "Router", chain: "robinhood-chain", address: "not-verified", role: "router", verified: false, sources: [] }; });
  const unknownWithSources = await errsWith((p) => { p.findings.positive[0] = { text: "Unclear.", class: "unknown", sources: ["S1"] }; });
  const unknownNoSources = await errsWith((p) => { p.findings.positive[0] = { text: "Unclear.", class: "unknown" }; });
  const typo = await errsWith((p) => { p.scoring.overide = { level: "High", reason: "x", evidence: ["S1"] }; });
  const missingKey = await errsWith((p) => { delete p.review.approver; });
  const placeholderApprover = await errsWith((p) => { p.review.approver = "tbd"; });
  try {
    assert.ok(fullNoEvidence.length > 0, "full with no evidence fails");
    assert.deepEqual(zeroNoEvidence, [], "zero with no evidence passes");
    assert.ok(strongNoEvidence.length > 0, "strong with no evidence fails");
    assert.deepEqual(insufficientNoEvidence, [], "insufficient with no evidence passes");
    assert.ok(approverCaps.length > 0, "approver: Pending fails");
    assert.ok(approverSpace.length > 0, "approver: 'pending ' fails");
    assert.ok(researcherCaps.length > 0, "researcher: Fixture fails");
    assert.ok(verifiedSentinel.length > 0, "verified: true with not-verified address fails");
    assert.ok(verifiedNoSource.length > 0, "verified: true with no source fails");
    assert.deepEqual(unverifiedSentinel, [], "verified: false with the sentinel passes");
    assert.ok(unknownWithSources.length > 0, "class: unknown may not carry sources");
    assert.deepEqual(unknownNoSources, [], "class: unknown without sources passes");
    assert.ok(typo.some((e) => e.includes("(overide)")), "additionalProperties error names the key");
    assert.ok(missingKey.some((e) => e.includes("(approver)")), "required error names the key");
    assert.ok(placeholderApprover.length > 0, "placeholder approver is rejected by schema");
    console.log("ok   project schema rules");
  } catch (err) { failures++; console.error(`FAIL project schema rules: ${err.message}`); }
}

// I8 / M5 / M6 — dependency cards, site and census schema rules.
{
  const content = await loadContent("content");
  const cardErrs = [...content.dependencies].flatMap(([id, d]) => validateAgainst("dependency", d).map((e) => `${id}: ${e}`));
  const card = structuredClone(content.dependencies.get("uniswap"));
  card.controls[0] = { power: "Fee switch", holder: "Governance", note: "n", class: "claim", sources: [] };
  const claimNoSources = validateAgainst("dependency", card);
  const card2 = structuredClone(content.dependencies.get("uniswap"));
  card2.sources = [{ id: "S1", url: "https://example.com", publisher: "", kind: "docs", accessed_at: "2026-08-30T00:00:00Z", claim: "", excerpt: "", hash: null, archive_url: null, researcher: "", available: true }];
  const emptyStrings = validateAgainst("dependency", card2);
  const site = structuredClone(content.site); site.chain.checked = null;
  const siteNull = validateAgainst("site", site);
  const census = structuredClone(content.census); census[0].qualifying.citable.value = false;
  const censusFalse = validateAgainst("census", census);
  try {
    assert.deepEqual(cardErrs, [], "all five cards pass");
    assert.ok(claimNoSources.length > 0, "claim with no sources fails");
    assert.ok(emptyStrings.length >= 3, "source-entry minLength on publisher, claim, researcher");
    assert.deepEqual(siteNull, [], "chain.checked may be null");
    assert.deepEqual(censusFalse, [], "qualifying value may be false");
    console.log("ok   dependency/site/census schema rules");
  } catch (err) { failures++; console.error(`FAIL dependency/site/census schema rules: ${err.message}`); }
}

// Cross-reference: dangling source id and missing research file are caught.
{
  const p = parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  const s = parse(await readFile(new URL("../fixtures/clean/sources.yaml", import.meta.url), "utf8"));
  p.findings.positive[0].sources = ["S9"];
  const content = {
    site: {}, census: [{ slug: "clean", coverage: "full", lifecycle: "mainnet" }],
    projects: new Map([["clean", p]]), sources: new Map([["clean", s]]), research: new Map(), dependencies: new Map(), changelog: [],
  };
  const { errors } = crossCheck(content);
  try {
    assert.ok(errors.some((e) => e.includes("S9")), "dangling id");
    assert.ok(errors.some((e) => e.includes("research/clean")), "missing research file");
    console.log("ok   crossCheck");
  } catch (err) { failures++; console.error(`FAIL crossCheck: ${err.message}`); }
}

// I7 / I3 / M3 — derive: override paths, prototype keys, display constants.
{
  const fresh = async () => parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  const elevated = await fresh(); elevated.scoring.override = { level: "Elevated", reason: "Unverified deployer keys.", evidence: ["S1"] };
  const critical = await fresh(); critical.scoring.override = { level: "Critical", reason: "Active exploit.", evidence: ["S1"] };
  const proto = await fresh(); proto.scoring.security.privileged_power.level = "constructor"; proto.scoring.factors.engineering.level = "constructor";
  const e = derive(elevated), c = derive(critical), pr = derive(proto);
  try {
    assert.equal(e.score, 87, "Elevated override does not cap");
    assert.equal(e.uncappedScore, 87);
    assert.equal(e.risk, "Elevated", "risk lifted to Elevated from Moderate");
    assert.equal(c.score, 29, "Critical override caps at 29");
    assert.equal(c.uncappedScore, 87);
    assert.equal(c.risk, "Critical");
    assert.equal(pr.score, null, "prototype key as security level → unscored");
    assert.equal(pr.securityRaw, null);
    assert.equal(pr.factorPercents.security, null);
    assert.equal(pr.factorPercents.engineering, null, "prototype key as factor level → unscored");
    assert.ok(!Object.values(pr.factorPercents).some(Number.isNaN), "never NaN");
    assert.equal(SECURITY_MAX, 35);
    assert.equal(PROVISIONAL_CONFIDENCE, 50);
    assert.equal(FULL_WEIGHT_CONFIDENCE, 70);
    console.log("ok   derive overrides and guards");
  } catch (err) { failures++; console.error(`FAIL derive overrides and guards: ${err.message}`); }
}

// A consistent in-memory content tree built from the clean fixture, for crossCheck / releaseCheck cases.
async function makeContent(mutate = () => {}) {
  const p = parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  const s = parse(await readFile(new URL("../fixtures/clean/sources.yaml", import.meta.url), "utf8"));
  const content = {
    site: { maintainer: { id: "fixture" }, corrections: { destination: "https://example.com/corrections" }, chain: { checked: "2026-08-30" } },
    census: [{ slug: "clean", name: p.name, identity: { aliases: [], symbols: [p.symbol], entity_kind: "protocol", chain_scope: "unknown", status: "provisional" }, category: p.category, lifecycle: p.lifecycle, coverage: p.coverage, tree: { primary: "launch/bonding-curve" } }],
    projects: new Map([["clean", p]]), sources: new Map([["clean", s]]), research: new Map([["clean", "stub"]]),
    dependencies: new Map(), changelog: [{ slug: "clean" }],
    feed: new Map(), accounts: [],
  };
  mutate(content, p);
  return content;
}

// I2 / I7 / I8 / M7 / M8 — cross-checks.
{
  const clean = crossCheck(await makeContent());
  const selfApproved = crossCheck(await makeContent((c, p) => { p.review.approver = p.review.researcher; }));
  const placeholder = crossCheck(await makeContent((c, p) => { p.review.approver = "tbd"; }));
  const coverageDrift = crossCheck(await makeContent((c) => { c.census[0].coverage = "stub"; c.census[0].coverage = "full"; c.projects.get("clean").coverage = "stub"; }));
  const nameDrift = crossCheck(await makeContent((c) => { c.census[0].name = "Other"; }));
  const categoryDrift = crossCheck(await makeContent((c) => { c.census[0].category = "CDP"; }));
  const symbolDrift = crossCheck(await makeContent((c) => { c.census[0].identity.symbols = []; }));
  const aliasCollision = crossCheck(await makeContent((c) => {
    c.census.push({ slug: "other", name: "Other", identity: { aliases: ["Clean Fixture"], symbols: [], entity_kind: "unknown", chain_scope: "unknown", status: "provisional" }, category: "CDP", lifecycle: "announced", coverage: "stub" });
  }));
  const duplicateFeedId = crossCheck(await makeContent((c) => {
    c.feed.set("clean", { slug: "clean", items: [{ id: "same", sources: ["S1"] }, { id: "same", sources: ["S1"] }] });
  }));
  const duplicateCensusSlug = crossCheck(await makeContent((c) => { c.census.push(structuredClone(c.census[0])); }));
  const duplicateMetricKind = crossCheck(await makeContent((c, p) => {
    p.metrics = [
      { kind: "tvl", value: 100, currency: "USD", as_of: "2026-08-31", class: "claim", sources: ["S1"] },
      { kind: "tvl", value: 90, currency: "USD", as_of: "2026-08-30", class: "claim", sources: ["S1"] },
    ];
  }));
  const noChangelog = crossCheck(await makeContent((c) => { c.changelog = []; }));
  const card = { id: "dep", name: "Dep", kind: "dex", summary: "x", controls: [{ power: "p", holder: "h", note: "n", class: "verified", sources: ["S9"] }], failure_modes: [], sources: [] };
  const depDangling = crossCheck(await makeContent((c) => { c.dependencies.set("dep", card); }));
  try {
    assert.deepEqual(clean.errors, [], "consistent tree has no errors");
    assert.deepEqual(clean.warnings, [], "consistent tree has no warnings");
    assert.ok(selfApproved.errors.some((e) => e.includes("different person")), "approver === researcher");
    assert.ok(placeholder.errors.some((e) => e.includes("tbd")), "placeholder approver is a hard error");
    assert.ok(coverageDrift.errors.some((e) => e.includes("coverage")), "census coverage ≠ project coverage");
    assert.ok(nameDrift.errors.some((e) => e.includes("name")), "census name ≠ project name");
    assert.ok(categoryDrift.errors.some((e) => e.includes("category")), "census category ≠ project category");
    assert.ok(symbolDrift.errors.some((e) => e.includes("identity.symbols")), "project symbol must remain in canonical identity");
    assert.ok(aliasCollision.errors.some((e) => e.includes("collides with canonical slug")), "normalized aliases cannot map to two slugs");
    assert.ok(duplicateFeedId.errors.some((e) => e.includes("duplicate item id")), "feed ids are stable and unique");
    assert.ok(duplicateCensusSlug.errors.some((e) => e.includes("duplicate slug clean")), "census slugs are unique");
    assert.ok(duplicateMetricKind.errors.some((e) => e.includes("duplicate metric kind tvl")), "metric kinds are unique per project");
    assert.ok(noChangelog.errors.some((e) => e.includes("changelog")), "census slug without a changelog entry");
    assert.ok(depDangling.errors.some((e) => e.includes("S9") && e.includes("dependencies/dep")), "dependency control cites an id missing from its own ledger");
    console.log("ok   crossCheck rules");
  } catch (err) { failures++; console.error(`FAIL crossCheck rules: ${err.message}`); }
}

// I7 / M5 — release gates.
{
  const derived = (c) => new Map([...c.projects].map(([slug, p]) => [slug, derive(p)]));
  const run = async (mutate) => { const c = await makeContent(mutate); return releaseCheck(c, derived(c)); };
  const clean = await run();
  const todo = await run((c) => { c.site.corrections.destination = "TODO"; });
  const unverified = await run((c, p) => { p.deployments[0] = { label: "Router", chain: "robinhood-chain", address: "not-verified", role: "router", verified: false, sources: [] }; });
  const pendingHigh = await run((c, p) => { p.review.approver = "pending"; });
  const pendingLow = await run((c, p) => { p.review.approver = "pending"; p.scoring.confidence = { primary_source_coverage: 60, onchain_verification: 60, independent_corroboration: 60, freshness: 60, review_completeness: 60 }; });
  const checkedNull = await run((c) => { c.site.chain.checked = null; });
  try {
    assert.deepEqual(clean, [], "clean tree passes release gates");
    assert.deepEqual(todo, [], "corrections TODO is a warning, not a release error (issue #35)");
    assert.ok(unverified.some((e) => e.includes("not verified")), "unverified address on a full profile");
    assert.ok(pendingHigh.some((e) => e.includes("approver pending")), "approver pending with uncapped confidence ≥ 70");
    assert.deepEqual(pendingLow, [], "approver pending with uncapped confidence < 70 is not a release error");
    assert.ok(checkedNull.some((e) => e.includes("chain.checked")), "chain.checked null");
    console.log("ok   releaseCheck gates");
  } catch (err) { failures++; console.error(`FAIL releaseCheck gates: ${err.message}`); }
}

// I5 / I6 / M6 — validateContent on a scratch copy of content/: YAML errors name the file, research tags count as
// citations, and failed qualifying tests warn (error under release).
{
  const tmp = await mkdtemp(join(tmpdir(), "proofline-"));
  await cp("content", tmp, { recursive: true });
  await mkdir(join(tmp, "feed"), { recursive: true });
  const baseline = await validateContent(tmp);
  // Flip one qualifying test to false on the scratch copy: it must warn normally and error under --release.
  const censusPath = join(tmp, "census.yaml");
  const censusText = await readFile(censusPath, "utf8");
  await writeFile(censusPath, censusText.replace(/(citable:\s*\{?\s*)value: true/, "$1value: false"));
  const qualifyingFalse = await validateContent(tmp);
  const releaseRun = await validateContent(tmp, { release: true });
  await writeFile(censusPath, censusText);
  const ledgerPath = join(tmp, "sources", "pons.yaml"), researchPath = join(tmp, "research", "pons.md");
  const entry = (id) => `  - id: ${id}\n    url: https://example.com/${id}\n    publisher: Example\n    kind: docs\n    accessed_at: 2026-08-30T00:00:00Z\n    claim: Fixture\n    excerpt: n/a\n    hash: null\n    archive_url: null\n    researcher: harsharn10\n    available: true\n`;
  await appendFile(ledgerPath, entry("S98") + entry("S99")); // ids no real ledger uses
  const research = await readFile(researchPath, "utf8");
  await writeFile(researchPath, research.replace("## Identity\n\n", "## Identity\n\nFixture citation. [claim S98]\n\n")); // pons.md is researched now; insert rather than replace the pending line
  const cited = await validateContent(tmp);
  // A feed item citing S99 counts as a citation; a feed item attributed to a skip-tier account warns.
  const feedItem = (body, kind = "ct") => `slug: pons\nitems:\n  - id: t1\n    date: 2026-08-30\n    kind: ${kind}\n    title: T\n    body: ${JSON.stringify(body)}\n    account: "@spam"\n    sources: [S99]\n`;
  await writeFile(join(tmp, "accounts.yaml"), "- handle: \"@spam\"\n  tier: skip\n  role: kol\n  note: Handle collides with the official account; posts not used as evidence.\n");
  await writeFile(join(tmp, "feed", "pons.yaml"), feedItem("B"));
  const feedCited = await validateContent(tmp);
  // Hard content gate (final review C3): feed files and account notes are on the auto-merge path, so a hype word
  // in a feed body and a conduct verdict in an account note are errors without --release. Findings text too.
  await writeFile(join(tmp, "accounts.yaml"), "- handle: \"@spam\"\n  tier: skip\n  role: kol\n  note: Known drainer.\n");
  const conductNote = await validateContent(tmp);
  await writeFile(join(tmp, "accounts.yaml"), "- handle: \"@spam\"\n  tier: skip\n  role: kol\n");
  await writeFile(join(tmp, "feed", "pons.yaml"), feedItem("Ape in, this will moon."));
  const hypeFeed = await validateContent(tmp);
  await writeFile(join(tmp, "feed", "pons.yaml"), feedItem("Ape in, this will moon.", "company"));
  const hypeCompany = await validateContent(tmp);
  await writeFile(join(tmp, "feed", "pons.yaml"), feedItem("B"));
  const ponsPath = join(tmp, "projects", "pons.yaml");
  const pons = parse(await readFile(ponsPath, "utf8"));
  pons.findings.risk.push({ text: "The deployer is a known scammer.", class: "claim" });
  await writeFile(ponsPath, stringify(pons));
  const conductFinding = await validateContent(tmp);
  await writeFile(join(tmp, "projects", "arrow.yaml"), "slug: [\n");
  const broken = await validateContent(tmp);
  await rm(tmp, { recursive: true, force: true });
  try {
    assert.deepEqual(baseline.errors, [], "scratch copy validates");
    assert.ok(qualifyingFalse.warnings.some((w) => w.includes("fails qualifying test citable")), "qualifying value false warns");
    assert.ok(!releaseRun.errors.some((e) => e.includes("fails qualifying test")), "qualifying value false never blocks a release (issue #35: the row is a watchlist row)");
    assert.ok(releaseRun.warnings.some((w) => w.includes("fails qualifying test citable") && w.includes("not marked role: observe")), "a failing row without role: observe says so");
    assert.deepEqual(feedCited.errors, [], "feed citation of an existing ledger id is not an error");
    assert.ok(!feedCited.warnings.some((w) => w.includes("S99 is never cited")), "an id cited only from a feed item is not 'never cited'");
    assert.ok(feedCited.warnings.some((w) => w.includes("skip-tier account @spam")), "feed item attributed to a skip-tier account warns");
    assert.ok(conductNote.errors.some((e) => e.includes("@spam note: conduct word \"drainer\"")), "conduct word in an account note is an error without --release");
    assert.ok(hypeFeed.warnings.some((e) => e.includes("feed/pons.yaml: t1 body: banned word \"moon\"")) && !hypeFeed.errors.some((e) => e.includes("banned word")), "a hype word in a Talk item (what someone posted) warns, never gates");
    assert.ok(hypeCompany.errors.some((e) => e.includes("feed/pons.yaml: t1 body: banned word \"moon\"")), "a hype word in an announcement item is an error without --release");
    assert.ok(conductFinding.errors.some((e) => e.includes("projects/pons.yaml: findings.risk") && e.includes("conduct word \"scammer\"")), "conduct word in findings text is an error without --release");
    assert.deepEqual(cited.errors, [], "prose citation validates");
    assert.ok(!cited.warnings.some((w) => w.includes("S98 is never cited")), "an id cited only in research prose is not 'never cited'");
    assert.ok(cited.warnings.some((w) => w.includes("S99 is never cited")), "an id cited nowhere still warns");
    assert.equal(broken.content, null, "load failure returns no content");
    assert.equal(broken.errors.length, 1);
    assert.ok(broken.errors[0].includes("projects/arrow.yaml"), `YAML error names the file: ${broken.errors[0]}`);
    assert.deepEqual([...tagIds("---\nslug: x\n---\n## Identity\nA. [verified S1 S2]\nB. [claim S3]\nC. [Verified S4]")].sort(), ["S1", "S2", "S3"]);
    console.log("ok   validateContent");
  } catch (err) { failures++; console.error(`FAIL validateContent: ${err.message}`); }
}

// Research markdown: a valid stub-depth file passes.
const goodStub = `---
slug: clean
coverage: stub
methodology_version: proofline-v1.0
---
${REQUIRED_HEADINGS.map((h) => `## ${h}\n\n_Research pending._\n`).join("\n")}`;
{
  const errs = checkResearch(goodStub, { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  try { assert.deepEqual(errs, []); console.log("ok   research stub"); }
  catch { failures++; console.error(`FAIL research stub: ${errs.join("; ")}`); }
}

// Tagged statements pass; untagged material statements, unknown ids, and bad tag grammar fail.
{
  const withTags = goodStub.replace("## Control\n\n_Research pending._", "## Control\n\nThe admin address can upgrade contracts without an enforced timelock. [inference S1]\n\n<!-- researcher prompt: list every privileged role -->");
  const ok = checkResearch(withTags, { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const untagged = checkResearch(goodStub.replace("## Control\n\n_Research pending._", "## Control\n\nThe admin can upgrade."), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const badId = checkResearch(withTags.replace("[inference S1]", "[inference S4]"), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const badGrammar = checkResearch(withTags.replace("[inference S1]", "[maybe S1]"), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const missingHeading = checkResearch(goodStub.replace("## Team\n", "## Teem\n"), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const wrongSlug = checkResearch(goodStub.replace("slug: clean", "slug: other"), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const gluedHeading = checkResearch(goodStub.replace("## Control\n\n_Research pending._", "## Control\n\n### Attack surface\nThe contract exposes an unguarded selfdestruct with no timelock."), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const headingAlone = checkResearch(goodStub.replace("## Control\n\n_Research pending._", "## Control\n\n### Attack surface\n\n_Research pending._"), { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  try {
    assert.deepEqual(ok, [], "tagged + comment should pass");
    assert.ok(untagged.some((e) => e.includes("untagged")), "untagged");
    assert.ok(badId.some((e) => e.includes("S4")), "unknown id");
    assert.ok(badGrammar.some((e) => e.includes("untagged")), "bad grammar reads as untagged");
    assert.ok(missingHeading.some((e) => e.includes("Team")), "missing heading");
    assert.ok(wrongSlug.some((e) => e.includes("slug")), "front matter slug");
    assert.ok(gluedHeading.some((e) => e.includes("untagged")), "sub-heading glued to untagged text must be flagged");
    assert.deepEqual(headingAlone, [], "sub-heading standing alone is not a statement");
    console.log("ok   research checks");
  } catch (err) { failures++; console.error(`FAIL research checks: ${err.message}`); }
}

// C2 — every tag in every section is grammar- and ledger-checked, with line numbers that survive HTML comments.
{
  const opts = { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1", "S2"]) };
  const inControl = (body) => goodStub.replace("## Control\n\n_Research pending._", `## Control\n\n${body}`);
  const inIdentity = (body) => goodStub.replace("## Identity\n\n_Research pending._", `## Identity\n\n${body}`);
  const danglingMid = checkResearch(inControl("Admin can upgrade. [claim S9]\nTimelock is 7 days. [verified S1]"), opts);
  const noIdMid = checkResearch(inControl("Admin can upgrade. [claim]\nX. [verified S1]"), opts);
  const identityBad = checkResearch(inIdentity("Pons is a launchpad. [verified S99]"), opts);
  const capitalised = checkResearch(inControl("Owner is [Verified S1] a multisig. [verified S1]"), opts);
  const commaIds = checkResearch(inControl("Owner is [verified S1, S2] a multisig. [verified S1]"), opts);
  const unknownWithId = checkResearch(inControl("Nobody knows. [unknown S1]"), opts);
  const multiTag = checkResearch(inControl("Owner is a 3-of-5 multisig. [verified S1]\nSigners are named on the site. [claim S2]\nNo timelock is enforced. [inference S1 S2]\nUnclear who holds the guardian key. [unknown]"), opts);
  const listItems = checkResearch(inControl("- Owner: 0xabc [verified S7]\n- Admin: 0xdef [verified S1]"), opts);
  // Line numbers: a three-line HTML comment sits before the offending tag.
  const commented = inControl("<!-- prompt line one\nprompt line two\nprompt line three -->\nAdmin can upgrade. [claim S9]\nTimelock is 7 days. [verified S1]");
  const commentedErrs = checkResearch(commented, opts);
  const wantLine = commented.split("\n").findIndex((l) => l.includes("[claim S9]")) + 1;
  const crlf = checkResearch(goodStub.replace(/\n/g, "\r\n"), opts);
  try {
    assert.ok(danglingMid.some((e) => e.includes("S9")), "dangling id on a non-final line");
    assert.ok(noIdMid.some((e) => e.includes("[claim]")), "class with no id on a non-final line");
    assert.ok(identityBad.some((e) => e.includes("S99")), "ledger check applies to the Identity section");
    assert.ok(capitalised.some((e) => e.includes("malformed tag [Verified S1]")), "capitalised class is malformed");
    assert.ok(commaIds.some((e) => e.includes("malformed tag [verified S1, S2]")), "comma-separated ids are malformed");
    assert.ok(unknownWithId.some((e) => e.includes("[unknown]")), "[unknown S1] rejected");
    assert.deepEqual(multiTag, [], "correct multi-tag paragraph passes");
    assert.ok(listItems.some((e) => e.includes("S7")), "per-item list tags are checked");
    assert.ok(commentedErrs.some((e) => e.includes(`(line ${wantLine})`)), `line number after a multi-line comment (want ${wantLine}; got ${commentedErrs.join(" | ")})`);
    assert.deepEqual(crlf, [], "CRLF file parses");
    console.log("ok   research tags everywhere");
  } catch (err) { failures++; console.error(`FAIL research tags everywhere: ${err.message}`); }
}

// I9 / I7 — full profiles may not leave sections 2–9 pending; research front matter must agree with the project.
{
  const fullStub = goodStub.replace("coverage: stub", "coverage: full");
  const stubOk = checkResearch(goodStub, { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  const fullPending = checkResearch(fullStub, { slug: "clean", coverage: "full", ledgerIds: new Set(["S1"]) });
  const fmMismatch = checkResearch(fullStub, { slug: "clean", coverage: "stub", ledgerIds: new Set(["S1"]) });
  try {
    assert.deepEqual(stubOk, [], "stub may be pending");
    assert.ok(fullPending.some((e) => e.includes("full profile still has _Research pending._")), "full profile pending is an error");
    assert.equal(fullPending.filter((e) => e.includes("still has")).length, 8, "exactly sections 2–9 are flagged");
    assert.ok(fmMismatch.some((e) => e.includes("coverage")), "front matter coverage ≠ project coverage");
    console.log("ok   research full-profile rules");
  } catch (err) { failures++; console.error(`FAIL research full-profile rules: ${err.message}`); }
}

// Every stub in content/ derives to "pending" with no number; every full profile derives a number or a pending label, never both.
{
  const content = await loadContent("content");
  let bad = 0;
  for (const [slug, p] of content.projects) {
    const d = derive(p);
    if (p.coverage === "stub" && (d.score !== null || d.label !== "Research pending / insufficient evidence")) { bad++; console.error(`  ${slug}: stub derived a score`); }
    if (p.coverage === "full" && ((d.score === null) === (d.label === null))) { bad++; console.error(`  ${slug}: score/label inconsistent`); }
  }
  if (bad) { failures++; console.error("FAIL content derive"); } else console.log(`ok   content derive (${content.projects.size} projects)`);
}

// Telegram publication helpers: opt-in, exact-copy approval, event cards, roundups and chunking.
{
  const channel = {
    event: "new-coverage",
    delivery: "same-day",
    headline: "Score published",
    summary: "A <b>full</b> research record is now available.",
    why_it_matters: ["Owner controls remain material."],
    watch_next: "Audit and timelock evidence.",
  };
  const approvedCopy = { ...channel, headline: "Controller headline" };
  const entries = [
    { date: "2026-08-30", slug: "pons", type: "coverage", severity: "Info", title: "Initial stub opened", detail: "x" },
    { date: "2026-08-31", slug: "pons", type: "score", severity: "Material", title: "Score published", detail: "<b>&", channel },
  ];
  const schemaEntry = {
    ...entries[1],
    prior: null,
    new: { score: 41 },
    reviewer: "harsharn10",
    methodology_version: "proofline-v1.0",
  };
  const legacyCandidate = { ...schemaEntry, channel_candidate: true };
  delete legacyCandidate.channel;
  const oversizedWhy = structuredClone(schemaEntry);
  oversizedWhy.channel.why_it_matters = ["one", "two", "three"];
  const validChannelSchema = validateAgainst("changelog", [schemaEntry]);
  const legacyChannelSchema = validateAgainst("changelog", [legacyCandidate]);
  const invalidChannelSchema = validateAgainst("changelog", [oversizedWhy]);
  const unsent = selectUnsent(entries, { sent_keys: ["2026-08-30|pons|coverage|Initial stub opened"] });
  const allCandidates = selectUnsent(entries, { sent_keys: [] }, { all: true });
  const approved = selectApproved(
    entries,
    { sent_keys: ["2026-08-30|pons|coverage|Initial stub opened"] },
    {
      channel_enabled: true,
      decisions: {
        "2026-08-31|pons|score|Score published": {
          status: "approved",
          source_fingerprint: publicationFingerprint(channel),
          copy_fingerprint: publicationFingerprint(approvedCopy),
          copy: approvedCopy,
        },
      },
    },
  );
  const staleApproval = selectApproved(
    [{ ...entries[1], channel: { ...channel, summary: "Source copy changed." } }],
    { sent_keys: [] },
    {
      channel_enabled: true,
      decisions: {
        "2026-08-31|pons|score|Score published": {
          status: "approved",
          source_fingerprint: publicationFingerprint(channel),
          copy_fingerprint: publicationFingerprint(approvedCopy),
          copy: approvedCopy,
        },
      },
    },
  );
  const tamperedCopy = selectApproved(entries, { sent_keys: [] }, {
    channel_enabled: true,
    decisions: {
      "2026-08-31|pons|score|Score published": {
        status: "approved",
        source_fingerprint: publicationFingerprint(channel),
        copy_fingerprint: publicationFingerprint(approvedCopy),
        copy: { ...approvedCopy, headline: "Changed after approval" },
      },
    },
  });
  const paused = selectApproved(entries, { sent_keys: [] }, { channel_enabled: false, decisions: {} });
  const projects = new Map([["pons", { name: "Pons" }]]);
  const derived = new Map([["pons", { score: 41, provisional: true, risk: "Elevated", confidence: 64 }]]);
  const aboveBar = selectShareBar(approved, { pons: true });
  const belowBar = selectShareBar(approved, { pons: false });
  const messages = buildMessages(aboveBar, { siteName: "Icarus", date: "2026-08-31", projects, derivedBySlug: derived, siteUrl: "https://x.test/", profilePath: "/n/" });
  const roundupEntries = approved.map((entry) => ({ ...entry, channel: { ...entry.channel, delivery: "roundup" } }));
  const roundupMessages = buildMessages(roundupEntries, { siteName: "Icarus", date: "2026-08-31", projects, derivedBySlug: derived, siteUrl: "https://x.test/", profilePath: "/n/" });
  const chunks = chunkMessage("a".repeat(3000) + "\n\n" + "b".repeat(3000), 4096);
  try {
    assert.equal(unsent.length, 1);
    assert.deepEqual(validChannelSchema, [], "structured publication passes changelog schema");
    assert.ok(legacyChannelSchema.length > 0, "legacy candidate boolean is rejected");
    assert.ok(invalidChannelSchema.length > 0, "publication limits are enforced");
    assert.deepEqual(allCandidates, [entries[1]], "--all cannot bypass explicit channel opt-in");
    assert.equal(approved.length, 1, "only approved and unsent entries publish");
    assert.equal(approved[0].channel.headline, "Controller headline", "approved exact copy used");
    assert.equal(approved[0].review_key, "2026-08-31|pons|score|Score published", "override preserves immutable sent key");
    assert.deepEqual(staleApproval, [], "source edits invalidate approval");
    assert.deepEqual(tamperedCopy, [], "copy edits invalidate approval");
    assert.deepEqual(paused, [], "paused channel publishes nothing");
    assert.equal(aboveBar.length, 1, "name above the generated share bar remains eligible");
    assert.deepEqual(belowBar, [], "name below the generated share bar is excluded");
    assert.equal(messages.length, 1, "one direct publication produces one card");
    assert.ok(messages[0].includes("<b>NEW PROFILE · PONS</b>"), "a publication keeps its own kicker");
    assert.ok(messages[0].includes("<b>Icarus view</b>"), "Icarus view");
    assert.ok(messages[0].includes("Control 41/100 · evidence 64% · awaiting second review"), "control and evidence line");
    assert.ok(messages[0].includes("https://x.test/n/pons"), "profile link");
    assert.ok(messages[0].endsWith("Read the full Pons research →</a>"), "event card ends with its link");
    assert.ok(messages[0].includes("A &lt;b&gt;full&lt;/b&gt; research record"), "html escaped");
    assert.ok(roundupMessages[0].includes("<b>ICARUS WIRE · 2026-08-31</b>"), "wire roundup card");
    assert.ok(roundupMessages[0].endsWith("Open research →</a>"), "roundup ends with a card link");
    assert.equal(chunks.length, 2, "chunked");
    assert.deepEqual(readDotEnv("A=1\n# c\nB=\"two words\"\n"), { A: "1", B: "two words" });

    // A risk alert never arrives under a routine kicker, and trending always carries its caveat.
    const riskAlert = buildMessages(
      aboveBar.map((entry) => ({ ...entry, channel: { ...entry.channel, event: "risk-alert" } })),
      { siteName: "Icarus", date: "2026-08-31", projects, derivedBySlug: derived, siteUrl: "", profilePath: "/n/" },
    );
    assert.ok(riskAlert[0].includes("<b>RISK ALERT · PONS</b>"), "a risk alert keeps its own kicker");
    const trending = buildMessages(
      aboveBar.map((entry) => ({ ...entry, channel: { ...entry.channel, event: "trending" } })),
      { siteName: "Icarus", date: "2026-08-31", projects, derivedBySlug: derived, siteUrl: "", profilePath: "/n/" },
    );
    assert.ok(trending[0].includes("<b>TRENDING · PONS</b>"), "trending is not relabelled as talk");
    assert.ok(
      trending[0].includes("Trending measures attention"),
      "a trending card always carries the attention caveat",
    );
    console.log("ok   telegram publications");
  } catch (err) { failures++; console.error(`FAIL telegram publications: ${err.message}`); }
}

// Telegram's five action-changing signals are pure, deterministic reads of committed snapshots/feed.
{
  // The market leg is necessary but never sufficient: it must be joined by holder growth, qualifying
  // Talk, or the scale leg. The owner paused the channel over messages that had only one of these.
  const byVolumeAndHolders = breakoutSignal({
    slug: "pons",
    current: { volume24hUsd: 200_000, liquidityUsd: 50_000, holders: 130 },
    previous: { volume24hUsd: 100_000, holders: 100 },
  });
  const volumeOnly = breakoutSignal({
    slug: "pons",
    current: { volume24hUsd: 200_000, liquidityUsd: 50_000, holders: 100 },
    previous: { volume24hUsd: 100_000, holders: 100 },
  });
  const holdersOnly = breakoutSignal({ slug: "alpha", current: { liquidityUsd: 60_000, holders: 121 }, previous: { holders: 100 } });
  const talkOnly = breakoutSignal({ slug: "beta", current: { liquidityUsd: 60_000 }, previous: {}, distinctAccounts: 3 });
  // The exact GMERALD message the reviewer's replay produced: below the floor and falling.
  const belowFloor = breakoutSignal({
    slug: "gmerald",
    current: { volume24hUsd: 783_800, liquidityUsd: 49_700, holders: 138 },
    previous: { volume24hUsd: 1_519_000, holders: 100 },
    distinctAccounts: 3,
  });
  const fallingHeadline = breakoutSignal({
    slug: "gmerald",
    current: { volume24hUsd: 783_800, liquidityUsd: 500_000, holders: 138 },
    previous: { volume24hUsd: 1_519_000, holders: 100 },
    distinctAccounts: 3,
  });
  // HOOKR on 2026-09-04: doubled on real liquidity, holders +13.6%, no top-tier Talk. The scale leg.
  const byScale = breakoutSignal({
    slug: "hookr",
    current: { volume24hUsd: 7_038_875, liquidityUsd: 1_325_023, holders: 6152 },
    previous: { volume24hUsd: 3_343_392, holders: 5416 },
  });
  const smallDoubling = breakoutSignal({
    slug: "tiny",
    current: { volume24hUsd: 120_000, liquidityUsd: 60_000, holders: 100 },
    previous: { volume24hUsd: 50_000, holders: 100 },
  });
  // An unread previous volume is missing data, not a doubling from zero.
  const unreadPrevious = breakoutSignal({
    slug: "up",
    current: { volume24hUsd: 3_550_614, liquidityUsd: 4_170_703, holders: 9088 },
    previous: { volume24hUsd: null, holders: null },
  });
  const noBreakout = breakoutSignal({
    slug: "quiet",
    current: { volume24hUsd: 199_999, liquidityUsd: 50_000, holders: 119 },
    previous: { volume24hUsd: 100_000, holders: 100 },
    distinctAccounts: 2,
  });
  // Talk counts only tier-top or 100K+ follower accounts.
  const accounts = [
    { handle: "@top1", tier: "top", role: "alpha" },
    { handle: "@top2", tier: "top", role: "kol" },
    { handle: "@whale", tier: "watch", role: "kol", followers: 250_000 },
    { handle: "@small", tier: "watch", role: "kol", followers: 900 },
    { handle: "@project", tier: "top", role: "project" },
  ];
  const feedItems = [
    { kind: "ct", account: "@top1", date: "2026-09-04" },
    { kind: "ct", account: "@top2", date: "2026-09-04" },
    { kind: "ct", account: "@whale", date: "2026-09-04" },
    { kind: "ct", account: "@small", date: "2026-09-04" },
    { kind: "ct", account: "@project", date: "2026-09-04" },
    { kind: "ct", account: "@unlisted", date: "2026-09-04" },
    { kind: "ct", account: "@top1", date: "2026-09-03" },
    { kind: "company", account: "@top2", date: "2026-09-04" },
  ];
  const talkToday = distinctTalkAccounts(feedItems, accounts, "2026-09-04");
  const talkOtherDay = distinctTalkAccounts(feedItems, accounts, "2026-09-01");
  const rankBaseline = leaderChangeSignal({ slug: "pons", section: "launchpads", rank: 4 });
  const rankCandidate = leaderChangeSignal({ slug: "pons", section: "launchpads", rank: 1 }, rankBaseline.next);
  const rankHeld = leaderChangeSignal({ slug: "pons", section: "launchpads", rank: 1 }, rankCandidate.next);
  const control = controlChangeSignal("pons", {
    addresses: [{ address: "0x0000000000000000000000000000000000000001", owner: "0x0000000000000000000000000000000000000002", owner_type: "eoa", safe: null, proxy: { implementation: null } }],
    structure: { mint: "open", lp: [{ pair: "0x0000000000000000000000000000000000000003", locked_share: 0.5 }] },
  }, {
    addresses: [{ address: "0x0000000000000000000000000000000000000001", owner: "0x0000000000000000000000000000000000000004", owner_type: "safe", safe: { threshold: 2 }, proxy: { implementation: "0x0000000000000000000000000000000000000005" } }],
    structure: { mint: "closed", lp: [{ pair: "0x0000000000000000000000000000000000000003", locked_share: 0.75 }] },
  });
  const failedControlRead = controlChangeSignal("pons", {
    addresses: [{ address: "0x0000000000000000000000000000000000000001", owner: "0x0000000000000000000000000000000000000002" }],
  }, {
    addresses: [{ address: "0x0000000000000000000000000000000000000001", owner: null, errors: [{ step: "rpc", message: "challenge" }] }],
  });
  // A read that fails on the PRIOR side is just as blind as one that fails on the new side.
  const failedPriorRead = controlChangeSignal("pons", {
    addresses: [{ address: "0x0000000000000000000000000000000000000001", owner: null, errors: [{ step: "rpc", message: "challenge" }] }],
  }, {
    addresses: [{ address: "0x0000000000000000000000000000000000000001", owner: "0x0000000000000000000000000000000000000002", errors: [] }],
  });
  // The 2026-09-04 CHILLZ and RIPE messages: 0.35 and 0.7 percentage points, both under RISK ALERT.
  const lpRow = (locked) => ({ addresses: [], structure: { mint: "no-mint-function", lp: [{ pair: "0x0000000000000000000000000000000000000003", locked_share: locked }] } });
  const tinyLpMove = controlChangeSignal("chillz", lpRow(0.9995), lpRow(1));
  const tinyLpDrop = controlChangeSignal("ripe", lpRow(0.596), lpRow(0.589));
  const bigLpMove = controlChangeSignal("alpha", lpRow(0.9), lpRow(0.7));
  const lpCrossing = controlChangeSignal("alpha", lpRow(0.52), lpRow(0.48));
  // Mint is only ever reported from a verified ABI read on both sides.
  const mintFromUnknown = controlChangeSignal("alpha",
    { addresses: [], structure: { mint: "unknown", errors: [{ step: "mint", message: "verified ABI unavailable" }] } },
    { addresses: [], structure: { mint: "owner-can-mint" } });
  const mintVerified = controlChangeSignal("alpha",
    { addresses: [], structure: { mint: "no-mint-function" } },
    { addresses: [], structure: { mint: "owner-can-mint" } });
  // The Pons false renounce: owner, owner type and the Safe block nulled in one clean-looking read.
  const ponsBefore = { addresses: [{ address: "0x7ed598bcef8bd9edd8c97a195c6d13f40801ec7e", owner: "0x263ed295dafae1d9aadd6e56c4b6f9f38ee019dd", owner_type: "safe", safe: { threshold: 2 }, errors: [] }] };
  const ponsNulled = { addresses: [{ address: "0x7ed598bcef8bd9edd8c97a195c6d13f40801ec7e", owner: null, owner_type: "none", safe: null, errors: [] }] };
  const ponsNullTransition = controlChangeSignal("pons", ponsBefore, ponsNulled);
  const reverted = confirmControlChanges(
    ponsNullTransition.changes.map((change) => ({ slug: "pons", ...change })),
    [],
    new Map([["pons", ponsBefore]]),
  );
  const persisted = confirmControlChanges(
    ponsNullTransition.changes.map((change) => ({ slug: "pons", ...change })),
    [],
    new Map([["pons", ponsNulled]]),
  );
  // Thirty-five names losing the same field in one pull is a degraded read, not a chain-wide renounce.
  const massNull = dropMassNullTransitions(Array.from({ length: 8 }, (_, index) => ({
    kind: "control-change", slug: `n${index}`, severity: "risk",
    changes: [{ address: "0x1", field: "owner", before: "0x2", after: null, severity: "risk", nullTransition: true }],
  })));
  const isolatedNull = dropMassNullTransitions([{
    kind: "control-change", slug: "solo", severity: "risk",
    changes: [{ address: "0x1", field: "owner", before: "0x2", after: null, severity: "risk", nullTransition: true }],
  }]);
  const project = { official_links: [{ kind: "x", url: "https://x.com/ponsdotfamily" }, { kind: "site", url: "https://pons.family/docs" }] };
  const ownPost = distributionSignal({ slug: "pons", project, item: { tag: "listing", title: "Listed", sourceUrl: "https://x.com/ponsdotfamily/status/1", date: "2026-09-04" } });
  const ownBlog = distributionSignal({ slug: "pons", project, item: { tag: "partnership", title: "Partnership", sourceUrl: "https://pons.family/blog/deal", date: "2026-09-04" } });
  const externalListing = distributionSignal({ slug: "pons", project, item: { tag: "listing", title: "Exchange listing", sourceUrl: "https://exchange.example/listing", date: "2026-09-04" } });
  const untagged = distributionSignal({ slug: "pons", project, item: { title: "A post", sourceUrl: "https://exchange.example/listing", date: "2026-09-04" } });
  const coming = comingUpSignal({
    slug: "alpha",
    project: { lifecycle: "announced", tldr: "A new market." },
    item: { tag: "launch-date", title: "Launch", date: "2026-09-10", sourceUrl: "https://coverage.example/launch" },
    now: Date.parse("2026-09-04T12:00:00Z"),
  });
  const comingNoTldr = comingUpSignal({
    slug: "alpha",
    project: { lifecycle: "announced" },
    item: { tag: "launch-date", title: "Launch", date: "2026-09-10", sourceUrl: "https://coverage.example/launch" },
    now: Date.parse("2026-09-04T12:00:00Z"),
  });
  const comingOwnPost = comingUpSignal({
    slug: "alpha",
    project: { lifecycle: "announced", tldr: "A new market.", official_links: [{ url: "https://x.com/alphadotfun" }] },
    item: { tag: "launch-date", title: "Launch", date: "2026-09-10", sourceUrl: "https://x.com/alphadotfun/status/9" },
    now: Date.parse("2026-09-04T12:00:00Z"),
  });
  const tooLate = comingUpSignal({
    slug: "alpha",
    project: { lifecycle: "announced", tldr: "A new market." },
    item: { tag: "mint", title: "Mint", date: "2026-09-12", sourceUrl: "https://coverage.example/mint" },
    now: Date.parse("2026-09-04T12:00:00Z"),
  });
  const budget = selectDailyAlerts([
    { kind: "breakout", slug: "pons", numbers: { volume_24h_usd: 1_000 } },
    { kind: "distribution", slug: "pons" },
    { kind: "leader-change", slug: "alpha" },
    { kind: "coming-up", slug: "beta" },
    { kind: "control-change", slug: "gamma", severity: "risk", changes: [{ field: "owner" }] },
  ], {}, "2026-09-04");
  // Three control changes can no longer eat the whole day and bury both real market moves.
  const starvation = selectDailyAlerts([
    { kind: "control-change", slug: "chillz", severity: "control", changes: [{ field: "LP locked share" }] },
    { kind: "control-change", slug: "pons", severity: "risk", changes: [{ field: "owner" }] },
    { kind: "control-change", slug: "ripe", severity: "control", changes: [{ field: "LP locked share" }] },
    { kind: "breakout", slug: "hookr", numbers: { volume_24h_usd: 7_038_875 } },
    { kind: "breakout", slug: "o1-exchange", numbers: { volume_24h_usd: 15_928_775 } },
  ], {}, "2026-09-04");
  try {
    assert.ok(byVolumeAndHolders?.reasons.includes("24h volume at least doubled"), "the market leg plus holder growth fires");
    assert.equal(volumeOnly, null, "a doubling alone is not enough below the scale leg");
    assert.equal(holdersOnly, null, "holder growth alone can no longer fire");
    assert.equal(talkOnly, null, "three accounts posting alone can no longer fire");
    assert.equal(belowFloor, null, "a name below the $50K liquidity floor never fires");
    assert.equal(fallingHeadline, null, "MOVING never carries a falling headline number");
    assert.ok(byScale?.numbers.volume_24h_usd > 0, "a seven-figure doubling with holders rising fires");
    assert.equal(smallDoubling, null, "a small doubling with no corroboration stays quiet");
    assert.equal(unreadPrevious, null, "an unread previous volume is missing data, not a doubling");
    assert.equal(noBreakout, null, "sub-threshold movement stays quiet");
    assert.equal(byScale.numbers.liquidity_usd, 1_325_023, "the alert carries the liquidity it cleared");
    assert.equal(Math.round(byScale.numbers.volume_change_pct), 111, "and the change that produced it");
    assert.equal(talkToday, 3, "only tier-top and 100K+ follower accounts count as Talk");
    assert.equal(talkOtherDay, 0, "Talk is counted on the day the numbers moved, not any day");
    assert.equal(rankCandidate.signal, null, "a rank change waits for its second read");
    assert.equal(rankHeld.signal?.kind, "leader-change", "a held rank change fires on its second read");
    assert.deepEqual(control?.changes.map((row) => row.field).sort(), ["LP locked share", "Safe threshold", "mint control", "owner", "owner type", "proxy implementation"].sort());
    assert.equal(control.severity, "risk", "an owner move is a risk-severity control change");
    assert.equal(failedControlRead, null, "a failed read is not mistaken for a control change");
    assert.equal(failedPriorRead, null, "a failed prior read is not mistaken for a control change either");
    assert.equal(tinyLpMove, null, "a 0.35-point LP move is not a message");
    assert.equal(tinyLpDrop, null, "and neither is a 0.7-point drop");
    assert.equal(bigLpMove?.changes[0].field, "LP locked share", "a twenty-point LP move is");
    assert.equal(bigLpMove.severity, "control", "an LP move is not a RISK ALERT");
    assert.equal(lpCrossing?.changes[0].field, "LP locked share", "and so is a move across half the supply");
    assert.equal(mintFromUnknown, null, "mint is never reported from an unverified ABI read");
    assert.equal(mintVerified?.changes[0].field, "mint control", "a verified mint change is reported");
    assert.equal(reverted.confirmed.length, 0, "a control change that reverted on the next pull is never sent");
    assert.equal(reverted.dropped.length, ponsNullTransition.changes.length, "and it is dropped, not carried");
    assert.equal(persisted.confirmed[0]?.slug, "pons", "a change the next pull still reads is sent");
    assert.equal(massNull.length, 0, "one pull nulling the same field on eight names publishes nothing");
    assert.equal(isolatedNull.length, 1, "an isolated null transition survives to the confirmation stage");
    assert.equal(ownPost, null, "a project's own X post is not an external distribution receipt");
    assert.equal(ownBlog, null, "and neither is its own blog");
    assert.equal(externalListing?.kind, "distribution", "an external listing receipt qualifies");
    assert.equal(untagged, null, "an untagged project post never reaches the channel");
    assert.equal(coming?.kind, "coming-up", "an announced event in the next seven days qualifies");
    assert.equal(coming.daysAway, 6, "and it carries how far away it is");
    assert.equal(comingNoTldr, null, "an alert without the name's TL;DR is not sent");
    assert.equal(comingOwnPost, null, "a project announcing its own launch date is not a receipt");
    assert.equal(tooLate, null, "an event beyond seven days does not qualify");
    assert.equal(budget.selected.length, 3, "daily alert budget is three");
    assert.equal(budget.selected[0].kind, "control-change", "a confirmed owner change leads the day");
    assert.equal(budget.selected.filter((row) => row.slug === "pons").length, 1, "one name cannot consume two daily slots");
    assert.deepEqual(starvation.selected.map((row) => row.slug), ["pons", "o1-exchange", "hookr"],
      "one control change, then the two largest breakouts by volume");
    console.log("ok   telegram signals");
  } catch (err) { failures++; console.error(`FAIL telegram signals: ${err.message}`); }
}

// Alert, daily and weekly cards preserve link-last/source-linked output; packet tags survive compile.
{
  const alert = formatSignalAlert({
    kind: "breakout", slug: "pons", sourceUrl: "https://market.example/pons",
    numbers: { volume_24h_usd: 200_000, volume_change_pct: 100, liquidity_usd: 50_000, distinct_accounts: 3 },
  }, { name: "Pons", tldr: "A launchpad.", siteUrl: "https://icarus.example" });
  const busy = buildDailyBrief({
    date: "2026-09-04", dayWord: "busy",
    activity: {
      launchpads: [{ name: "Pons", launches24h: 24, sourceUrl: "https://explorer.example/factory" }],
      chainVolumeUsd: 5_700_000, chainVolumeSourceUrl: "https://analytics.example/volume",
    },
    top: [{ name: "Pons", volume24hUsd: 1_000_000, changePct: 25, sourceUrl: "https://market.example/pons" }],
    newlyCleared: [{ name: "Alpha", tldr: "A new market.", why: "New product access.", sourceUrl: "https://icarus.example/n/alpha" }],
    movers: { up: { name: "Pons", changePct: 25, sourceUrl: "https://market.example/pons" }, down: null },
    distribution: [{ name: "Pons", title: "Exchange listing", sourceUrl: "https://exchange.example/listing" }],
    note: null,
  });
  const quiet = buildDailyBrief({ date: "2026-09-04", dayWord: "quiet" });
  // A day on which a name doubled to $15.9M is never summarised as "nothing changed what a reader
  // would do", however quiet the chain-wide numbers were.
  const led = buildDailyBrief({
    date: "2026-09-04", dayWord: "quiet",
    lead: { kicker: "TODAY'S BIGGEST", name: "O1.exchange", text: "$15.9M volume 24h · +107.1%", sourceUrl: "https://market.example/o1" },
  });
  const weekly = buildWeeklyWrap({
    week: "2026-08-30",
    leaders: [{ section: "Launchpads", name: "Pons", value: "#1 by volume", sourceUrl: "https://icarus.example/n/pons" }],
    newNames: [{ name: "Alpha" }], quietNames: [], controlChanges: [], distribution: [],
  });
  // Forty names above the bar overnight must not produce a message Telegram rejects with a 400.
  const flood = buildDailyBrief({
    date: "2026-09-04", dayWord: "busy",
    newlyCleared: Array.from({ length: 40 }, (_, index) => ({
      name: `Name ${index}`, tldr: "A very long TL;DR sentence about this project. ".repeat(12), why: "Because.", sourceUrl: "https://icarus.example/n/x",
    })),
  });
  const floodWrap = buildWeeklyWrap({
    week: "2026-08-30",
    leaders: [], newNames: Array.from({ length: 60 }, (_, index) => ({ name: `Name ${index}` })),
    quietNames: [], controlChanges: [], distribution: [],
  });
  // A Safe threshold is a signer count; only a locked share renders as a percentage.
  const safeAlert = formatSignalAlert({
    kind: "control-change", slug: "pons", severity: "risk", sourceUrl: "https://explorer.example/a",
    changes: [{ address: "0xabc", field: "Safe threshold", before: 2, after: 1, severity: "risk" }],
  }, { name: "Pons" });
  const lpAlert = formatSignalAlert({
    kind: "control-change", slug: "alpha", severity: "control", sourceUrl: "https://explorer.example/a",
    changes: [{ address: "0xabc", field: "LP locked share", before: 0.9, after: 0.7, severity: "control" }],
  }, { name: "Alpha" });
  const quotedUrl = formatSignalAlert({
    kind: "distribution", slug: "pons", tag: "listing", title: "Listed", sourceUrl: 'https://exchange.example/a"onmouseover=x',
  }, { name: "Pons" });
  const packet = parsePacket(await readFile(new URL("../fixtures/compile-packet/new-seed.md", import.meta.url), "utf8"));
  packet.frontmatter.events[0].tag = "listing";
  packet.frontmatter.events[0].channel_recommendation = "none";
  const compiled = compilePacket(packet);
  const badPacket = structuredClone(packet.frontmatter);
  badPacket.events[0].tag = "promotion";
  try {
    assert.ok(alert.includes("<b>MOVING · PONS</b>"), "breakout alert has its kicker");
    assert.ok(alert.endsWith("Source</a>"), "alert links are last");
    assert.ok(!alert.includes("000000000000"), "alerts never expose wallet addresses");
    // Asserted by content, not by exact currency rendering, which varies with the runtime's ICU.
    const alertFacts = alert.split("\n\n")[1];
    assert.ok(alertFacts.includes("volume 24h"), "a breakout carries the 24h volume");
    assert.ok(alertFacts.includes("+100.0%"), "and the change");
    assert.ok(alertFacts.includes("liquidity"), "and the liquidity it cleared");
    assert.ok(alertFacts.startsWith('<a href="https://market.example/pons">'), "market numbers link to the pair, not a search");
    assert.equal(busy.length, 1, "a normal brief is one Telegram message");
    assert.ok(busy[0].includes('<a href="https://explorer.example/factory">24 launches</a>'), "launch count links to its source");
    assert.ok(busy[0].includes('<a href="https://analytics.example/volume">$5.7M chain volume</a>'), "chain volume links to its source");
    assert.equal(quiet[0].split("\n").length, 1, "a quiet brief is one line");
    assert.equal(quiet.length, 1, "and one message");
    assert.ok(led[0].startsWith("<b>ICARUS DAILY · 2026-09-04 · TODAY</b>"), "a brief with a lead is not a quiet one-liner");
    assert.ok(led[0].split("\n\n")[1].includes("TODAY'S BIGGEST · O1.EXCHANGE"), "the brief opens with the most material item");
    assert.ok(flood.every((part) => part.length <= 4096), "an unbounded brief is chunked, never rejected");
    assert.ok(flood[0].includes("…and 35 more on the site."), "and says how many it left out");
    assert.ok(floodWrap.every((part) => part.length <= 4096), "the wrap is bounded the same way");
    assert.ok(safeAlert.includes("Safe threshold: 2 → 1"), "a Safe threshold is a signer count, not a percentage");
    assert.ok(safeAlert.includes("<b>RISK ALERT · PONS</b>"), "who controls the contract is a RISK ALERT");
    assert.ok(lpAlert.includes("LP locked share: 90.0% → 70.0%"), "a locked share is a percentage");
    assert.ok(lpAlert.includes("<b>CONTROL CHANGE · ALPHA</b>"), "an LP move does not borrow the severest kicker");
    assert.ok(quotedUrl.includes("&quot;"), "a quote in a source URL is escaped, not left to break the anchor");
    assert.ok(weekly[0].includes("ICARUS WEEKLY"), "weekly wrap renders");
    assert.deepEqual(validateAgainst("packet", packet.frontmatter), [], "a packet event accepts a signal tag");
    assert.ok(validateAgainst("packet", badPacket).length > 0, "unknown packet tags are rejected");
    assert.equal(compiled.feed.items[0].tag, "listing", "compile carries event tag into the feed");
    assert.deepEqual(validateAgainst("feed", compiled.feed), [], "the tagged compiled feed validates");
    console.log("ok   telegram signal messages and event tags");
  } catch (err) { failures++; console.error(`FAIL telegram signal messages and event tags: ${err.message}`); }
}

// Task 2 / Task 5 — computeTrending: distinct counting accounts with `kind: ct` items dated inside the window.
// Task 5 addendum ruling 4: an account counts only when tier == top AND (role absent OR role ∈ {alpha, kol});
// watch / downweight / skip rows never count.
{
  const accounts = [
    { handle: "@a", tier: "top" },                      // no role → counts (legacy shape)
    { handle: "@b", tier: "top", role: "alpha" },
    { handle: "@c", tier: "top", role: "kol" },
    { handle: "@d", tier: "watch", role: "alpha" },
    { handle: "@p", tier: "top", role: "project" },     // official account at top: must NOT count
    { handle: "@m", tier: "top", role: "media" },
    { handle: "@x", tier: "skip", role: "kol" },
    { handle: "@w", tier: "downweight", role: "kol" },
  ];
  const opts = { minAccounts: 3, windowDays: 7, today: "2026-08-30" };
  const item = (id, date, account) => ({ id, date, kind: "ct", title: "t", body: "b", account });
  const run = (items) => computeTrending(new Map([["x", items]]), accounts, opts).get("x");
  const threeTop = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@b"), item("3", "2026-08-27", "@c")]);
  const twoTop = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@b")]);
  const oneWatch = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@b"), item("3", "2026-08-27", "@d")]);
  const topProject = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@b"), item("3", "2026-08-27", "@p")]);
  const topMedia = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@b"), item("3", "2026-08-27", "@m")]);
  const skipped = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@b"), item("3", "2026-08-27", "@x")]);
  const downweighted = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@b"), item("3", "2026-08-27", "@w")]);
  const outsideWindow = run([item("1", "2026-08-20", "@a"), item("2", "2026-08-26", "@b"), item("3", "2026-08-27", "@c")]);
  const sameAccountThrice = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@a"), item("3", "2026-08-27", "@a")]);
  try {
    assert.equal(threeTop.trending, true, "3 counting accounts in window → trending");
    assert.deepEqual(threeTop.accounts, ["@a", "@b", "@c"]);
    assert.equal(twoTop.trending, false, "2 accounts → not trending");
    assert.equal(oneWatch.trending, false, "one of three is watch tier → not trending");
    assert.equal(topProject.trending, false, "top + role: project must not count");
    assert.equal(topMedia.trending, false, "top + role: media must not count");
    assert.equal(skipped.trending, false, "skip never counts");
    assert.equal(downweighted.trending, false, "downweight never counts");
    assert.equal(outsideWindow.trending, false, "one dated outside window → not trending");
    assert.equal(sameAccountThrice.trending, false, "same account thrice counts once → not trending");
    assert.equal(countsForTrending({ handle: "@z", tier: "top", role: "alpha" }), true);
    assert.equal(countsForTrending({ handle: "@z", tier: "top", role: "data" }), false);
    assert.equal(countsForTrending({ handle: "@z", tier: "skip" }), false);
    assert.equal(countsForTrending({ handle: "@z", tier: "downweight", role: "alpha" }), false);
    console.log("ok   computeTrending");
  } catch (err) { failures++; console.error(`FAIL computeTrending: ${err.message}`); }
}

// Task 5 — accounts schema: tier superset, role enum, slug pattern, integer followers.
{
  const row = (extra) => [{ handle: "@a", tier: "watch", ...extra }];
  const cases = [
    [row({ tier: "downweight" }), 0, "downweight tier"],
    [row({ tier: "skip" }), 0, "skip tier"],
    [row({ tier: "blacklist" }), 1, "blacklist is no longer a tier"],
    [row({ tier: "muted" }), 1, "unknown tier rejected"],
    [row({ role: "alpha" }), 0, "role alpha"],
    [row({ role: "builder" }), 1, "role outside the enum rejected"],
    [row({ slug: "denar" }), 0, "slug"],
    [row({ slug: "Denar Markets" }), 1, "slug must match ^[a-z0-9-]+$"],
    [row({ followers: 6800 }), 0, "integer followers"],
    [row({ followers: "6.8k" }), 1, "followers must be an integer"],
    [row({ weight: "top" }), 1, "desk field weight is not carried over"],
  ];
  try {
    for (const [data, want, why] of cases) assert.equal(validateAgainst("accounts", data).length > 0 ? 1 : 0, want, why);
    console.log("ok   accounts schema");
  } catch (err) { failures++; console.error(`FAIL accounts schema: ${err.message}`); }
}

// Task 5 — census schema: optional handle (X pattern) and tree { primary, secondary[] }.
{
  const base = () => ({
    slug: "denar", name: "Denar", identity: { aliases: [], symbols: ["DENAR"], entity_kind: "protocol", chain_scope: "unknown", status: "provisional" }, category: "Isolated lending market", lifecycle: "mainnet", coverage: "stub", official_links: [],
    tree: { primary: "credit/isolated-money-market" },
    discovery_source: "desk", qualifying: Object.fromEntries(["deployed_on_chain", "native_play", "citable", "research_story"].map((k) => [k, { value: true, note: "n", verified: false }])),
  });
  const cases = [
    [{ ...base(), handle: "@DenarMarkets" }, 0, "handle"],
    [{ ...base(), handle: "DenarMarkets" }, 1, "handle needs @"],
    [{ ...base(), tree: { primary: "credit/isolated-money-market" } }, 0, "tree primary only"],
    [{ ...base(), tree: { primary: "credit/isolated-money-market", secondary: ["yield/savings-vault"] } }, 0, "tree with secondary"],
    [{ ...base(), tree: { primary: "other/uncontrolled-domain" } }, 1, "tree domain must use the canonical taxonomy"],
    [{ ...base(), tree: { secondary: ["x"] } }, 1, "tree needs primary"],
    [{ ...base(), tree: { primary: "x", tertiary: [] } }, 1, "tree rejects unknown keys"],
  ];
  try {
    for (const [data, want, why] of cases) assert.equal(validateAgainst("census", [data]).length > 0 ? 1 : 0, want, why);
    console.log("ok   census schema handle/tree");
  } catch (err) { failures++; console.error(`FAIL census schema handle/tree: ${err.message}`); }
}

// Task 2 — feed schema: kind enum and account handle pattern.
{
  const feedBase = () => ({ slug: "pons", items: [{ id: "f1", date: "2026-08-20", kind: "company", title: "T", body: "B", sources: ["S1"] }] });
  const newsKind = validateAgainst("feed", { slug: "pons", items: [{ ...feedBase().items[0], kind: "news" }] });
  const badAccount = validateAgainst("feed", { slug: "pons", items: [{ ...feedBase().items[0], account: "longbow" }] });
  const ok = validateAgainst("feed", feedBase());
  const noSources = validateAgainst("feed", { slug: "pons", items: [{ id: "f1", date: "2026-08-20", kind: "company", title: "T", body: "B" }] });
  const emptySources = validateAgainst("feed", { slug: "pons", items: [{ id: "f1", date: "2026-08-20", kind: "company", title: "T", body: "B", sources: [] }] });
  try {
    assert.ok(newsKind.length > 0, "kind: news is rejected");
    assert.ok(badAccount.length > 0, "account without a leading @ is rejected");
    assert.deepEqual(ok, [], "a well-formed feed file passes");
    assert.ok(noSources.length > 0, "feed item without ledger evidence is rejected");
    assert.ok(emptySources.length > 0, "feed item with an empty source list is rejected");
    console.log("ok   feed schema");
  } catch (err) { failures++; console.error(`FAIL feed schema: ${err.message}`); }
}

// Task 2 — crossCheck: feed for a slug not in census, and a feed item citing a source id absent from the ledger.
{
  const feedGhost = crossCheck(await makeContent((c) => { c.feed = new Map([["ghost", { slug: "ghost", items: [] }]]); }));
  const feedDangling = crossCheck(await makeContent((c) => {
    c.feed = new Map([["clean", { slug: "clean", items: [{ id: "i1", date: "2026-08-20", kind: "ct", title: "t", body: "b", sources: ["S9"] }] }]]);
  }));
  try {
    assert.ok(feedGhost.errors.some((e) => e.includes("ghost") && e.includes("census")), "feed slug not in census.yaml");
    assert.ok(feedDangling.errors.some((e) => e.includes("S9")), "feed item cites a source id absent from the ledger");
    console.log("ok   crossCheck feed");
  } catch (err) { failures++; console.error(`FAIL crossCheck feed: ${err.message}`); }
}

// Fix round 1 + final review C3 — conductWarnings: the verdict-noun list applies everywhere (notes, feed, findings);
// `{ note: true }` adds the words that are accusations about an account but ordinary in protocol prose ("farm").
{
  try {
    assert.equal(conductWarnings("Known drainer wrapping the official CA.", "x").length, 1, "drainer");
    assert.equal(conductWarnings("Likely impersonator of Arrow.", "x").length, 1, "impersonator");
    assert.equal(conductWarnings("Handle collides with the official @ArrowFinanceio; posts not used as evidence.", "x").length, 0, "behaviour-only note passes");
    assert.equal(conductWarnings("Runs farms on UPDex.", "x", { note: true }).length, 1, "farm/farms about an account (note scope)");
    assert.equal(conductWarnings("Farmhouse Finance", "x", { note: true }).length, 0, "whole-word only");
    assert.equal(conductWarnings("Deposits go to a yield farm on UPDex.", "x").length, 0, "farm in finding/feed prose is not a verdict");
    assert.equal(conductWarnings("Dakota/Sinjoh alt. Same person as @DSB_117.", "x").length, 1, "identity assertion phrase");
    assert.equal(conductWarnings("The contract is a honeypot.", "x").length, 1, "honeypot");
    assert.equal(conductWarnings("A ponzi with extra steps.", "x").length, 1, "ponzi");
    assert.equal(conductWarnings("Reads like a fraudster's pitch.", "x").length, 1, "fraudster (possessive still whole-word)");
    assert.equal(conductWarnings("Inside the vault, the router forwards fees.", "x").length, 0, "insider does not fire inside 'Inside'");
    console.log("ok   conductWarnings");
  } catch (err) { failures++; console.error(`FAIL conductWarnings: ${err.message}`); }
}

// Final review minor — account handles are unique (case-insensitive): crossCheck errors on a duplicate, and the
// schema rejects a byte-identical duplicate row.
{
  const dupRows = crossCheck(await makeContent((c) => { c.accounts = [{ handle: "@Alpha", tier: "watch" }, { handle: "@alpha", tier: "top", role: "kol" }]; }));
  const distinct = crossCheck(await makeContent((c) => { c.accounts = [{ handle: "@alpha", tier: "watch" }, { handle: "@beta", tier: "top", role: "kol" }]; }));
  const identical = validateAgainst("accounts", [{ handle: "@alpha", tier: "watch" }, { handle: "@alpha", tier: "watch" }]);
  try {
    assert.ok(dupRows.errors.some((e) => e.includes("duplicate handle @alpha")), "duplicate handle (case-insensitive) is an error");
    assert.ok(!distinct.errors.some((e) => e.includes("duplicate handle")), "distinct handles pass");
    assert.ok(identical.length > 0, "schema rejects an identical duplicate row");
    console.log("ok   accounts unique handles");
  } catch (err) { failures++; console.error(`FAIL accounts unique handles: ${err.message}`); }
}

// Task 2 — voiceWarnings: whole-word, case-insensitive matches only.
{
  const ape = voiceWarnings("Do not ape this", "x");
  const grape = voiceWarnings("Grape harvest", "x");
  try {
    assert.equal(ape.length, 1, "banned word ape matches once");
    assert.equal(grape.length, 0, "whole-word match does not fire inside grape");
    console.log("ok   voiceWarnings");
  } catch (err) { failures++; console.error(`FAIL voiceWarnings: ${err.message}`); }
}

// Task 2 fix round 2 — voiceWarnings: print/prints-near-mcap rule is exactly "print"/"prints" (whole word,
// case-insensitive), then zero to three whitespace-separated words, then mcap | market cap | fdv
// (case-insensitive). /\bprints?\b(?:\s+\S+){0,3}\s+(?:mcap|market\s+cap|fdv)\b/i
{
  const cases = [
    ["prints mcap", 1, "zero gap"],
    ["prints a $30M mcap", 1, "two words: a, $30M"],
    ["prints a brand new FDV", 1, "three words: a, brand, new"],
    ["prints a brand new high FDV", 0, "four words — over budget"],
    ["printed a $30M mcap", 0, "printed is not print/prints"],
    ["prints at a new all-time FDV", 0, "four words: at, a, new, all-time — over budget"],
    ["a market cap of $30M", 0, "no print/prints trigger word"],
    ["prints a new market cap", 1, "two-word target (market cap) within budget"],
  ];
  try {
    for (const [text, want, why] of cases) assert.equal(voiceWarnings(text, "x").length, want, `${JSON.stringify(text)} (${why})`);
    console.log("ok   voiceWarnings print-mcap window");
  } catch (err) { failures++; console.error(`FAIL voiceWarnings print-mcap window: ${err.message}`); }
}

// Task 2 — project schema: `addresses` is gone, `deployments[]` takes over with a chain enum.
{
  const fresh = async () => parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  const p1 = await fresh();
  p1.deployments = [{ label: "Router", chain: "robinhood-chain", address: "0x0000000000000000000000000000000000000001", role: "router", verified: true, sources: ["S1"] }];
  delete p1.addresses;
  const deploymentsOk = validateAgainst("project", p1);

  const p2 = await fresh(); // simulate the pre-migration shape: old `addresses` key, no `deployments` — must now fail
  p2.addresses = [{ label: "Router", address: "0x0000000000000000000000000000000000000001", role: "router", verified: true, sources: ["S1"] }];
  delete p2.deployments;
  const oldAddressesRejected = validateAgainst("project", p2);

  const p3 = await fresh();
  p3.deployments = [{ label: "Router", chain: "bsc", address: "0x0000000000000000000000000000000000000001", role: "router", verified: true, sources: ["S1"] }];
  delete p3.addresses;
  const badChainRejected = validateAgainst("project", p3);

  try {
    assert.deepEqual(deploymentsOk, [], "deployments with chain: robinhood-chain passes");
    assert.ok(oldAddressesRejected.length > 0, "old addresses key without deployments now fails");
    assert.ok(badChainRejected.length > 0, "chain: bsc is rejected");
    console.log("ok   project schema deployments");
  } catch (err) { failures++; console.error(`FAIL project schema deployments: ${err.message}`); }
}

// Task A — project schema: metrics[] (schema/shared.schema.json metricKind + schema/project.schema.json metric).
{
  const fresh = async () => parse(await readFile(new URL("../fixtures/clean/project.yaml", import.meta.url), "utf8"));
  const validTvl = await fresh(); validTvl.metrics = [{ kind: "tvl", value: 1000, currency: "USD", as_of: "2026-08-31", class: "claim", sources: ["S1"] }];
  const validTvlErrs = validateAgainst("project", validTvl);
  const emptySources = await fresh(); emptySources.metrics = [{ kind: "tvl", value: 1000, currency: "USD", as_of: "2026-08-31", class: "claim", sources: [] }];
  const emptySourcesErrs = validateAgainst("project", emptySources);
  const badKind = await fresh(); badKind.metrics = [{ kind: "mcap", value: 1000, currency: "USD", as_of: "2026-08-31", class: "claim", sources: ["S1"] }];
  const badKindErrs = validateAgainst("project", badKind);
  const holdersOk = await fresh(); holdersOk.metrics = [{ kind: "holders", value: 500, as_of: "2026-08-31", class: "claim", sources: ["S1"] }];
  const holdersOkErrs = validateAgainst("project", holdersOk);
  const holdersWithCurrency = await fresh(); holdersWithCurrency.metrics = [{ kind: "holders", value: 500, currency: "USD", as_of: "2026-08-31", class: "claim", sources: ["S1"] }];
  const holdersWithCurrencyErrs = validateAgainst("project", holdersWithCurrency);
  const negativeValue = await fresh(); negativeValue.metrics = [{ kind: "tvl", value: -5, currency: "USD", as_of: "2026-08-31", class: "claim", sources: ["S1"] }];
  const negativeValueErrs = validateAgainst("project", negativeValue);
  const wrongClass = await fresh(); wrongClass.metrics = [{ kind: "tvl", value: 5, currency: "USD", as_of: "2026-08-31", class: "verified", sources: ["S1"] }];
  const wrongClassErrs = validateAgainst("project", wrongClass);
  try {
    assert.deepEqual(validTvlErrs, [], "valid tvl metric accepted");
    assert.ok(emptySourcesErrs.length > 0, "metric with sources: [] rejected");
    assert.ok(badKindErrs.length > 0, "kind mcap rejected");
    assert.deepEqual(holdersOkErrs, [], "holders without currency accepted");
    assert.ok(holdersWithCurrencyErrs.length > 0, "holders with a currency is rejected");
    assert.ok(negativeValueErrs.length > 0, "negative value rejected");
    assert.ok(wrongClassErrs.length > 0, "class other than claim rejected");
    console.log("ok   project schema metrics");
  } catch (err) { failures++; console.error(`FAIL project schema metrics: ${err.message}`); }
}

// Task A — crossCheck: a metrics[] entry citing a missing source id is an error. referencedSourceIds() already
// walks any array keyed "sources" generically (checks.mjs:12), so metrics[].sources is covered without a
// checks.mjs change — this test proves that holds for the new field too.
{
  const danglingMetric = crossCheck(await makeContent((c, p) => {
    p.metrics = [{ kind: "tvl", value: 1000, currency: "USD", as_of: "2026-08-31", class: "claim", sources: ["S9"] }];
  }));
  try {
    assert.ok(danglingMetric.errors.some((e) => e.includes("S9") && e.includes("projects/clean")), "metric citing a missing source id is an error");
    console.log("ok   crossCheck metrics");
  } catch (err) { failures++; console.error(`FAIL crossCheck metrics: ${err.message}`); }
}

// Task A — computeRanks: one basis per category (highest-priority kind ≥2 projects share), standard competition
// ranking (ties share a position, the next distinct value skips: 1,1,3), categories with <2 ranked projects get none.
{
  const proj = (slug, category, metrics) => ({ slug, cohort: { id: category, label: category.toLowerCase() }, metrics });
  const threeTvl = computeRanks([
    proj("a", "Lending", [{ kind: "tvl", value: 300 }]),
    proj("b", "Lending", [{ kind: "tvl", value: 200 }]),
    proj("c", "Lending", [{ kind: "tvl", value: 100 }]),
  ]);
  const volumeShared = computeRanks([
    proj("x", "Yield", [{ kind: "tvl", value: 50 }, { kind: "volume_24h", value: 10 }]), // tvl has only 1 holder in-category
    proj("y", "Yield", [{ kind: "volume_24h", value: 20 }]),
  ]);
  const onlyOneMetricd = computeRanks([
    proj("solo", "Options", [{ kind: "tvl", value: 5 }]),
    proj("bare", "Options", []),
  ]);
  const tied = computeRanks([
    proj("p", "Oracle / infra", [{ kind: "tvl", value: 100 }]),
    proj("q", "Oracle / infra", [{ kind: "tvl", value: 100 }]),
    proj("r", "Oracle / infra", [{ kind: "tvl", value: 50 }]),
  ]);
  try {
    assert.deepEqual(threeTvl.get("a"), { basis: "tvl", position: 1, of: 3, cohort: "lending" }, "highest tvl → position 1 of 3");
    assert.deepEqual(threeTvl.get("b"), { basis: "tvl", position: 2, of: 3, cohort: "lending" });
    assert.deepEqual(threeTvl.get("c"), { basis: "tvl", position: 3, of: 3, cohort: "lending" });
    assert.deepEqual(volumeShared.get("y"), { basis: "volume_24h", position: 1, of: 2, cohort: "yield" }, "tvl shared by only 1 project is skipped for volume_24h");
    assert.deepEqual(volumeShared.get("x"), { basis: "volume_24h", position: 2, of: 2, cohort: "yield" });
    assert.equal(onlyOneMetricd.has("solo"), false, "category with 1 metric'd project gets no ranks");
    assert.equal(onlyOneMetricd.has("bare"), false);
    assert.deepEqual(tied.get("p"), { basis: "tvl", position: 1, of: 3, cohort: "oracle / infra" }, "tie shares position 1");
    assert.deepEqual(tied.get("q"), { basis: "tvl", position: 1, of: 3, cohort: "oracle / infra" }, "tie shares position 1");
    assert.deepEqual(tied.get("r"), { basis: "tvl", position: 3, of: 3, cohort: "oracle / infra" }, "next distinct value skips to 3 (standard competition ranking)");
    console.log("ok   computeRanks");
  } catch (err) { failures++; console.error(`FAIL computeRanks: ${err.message}`); }
}

// Icarus home/category rules execute from the actual TypeScript module. Lightweight module hooks
// replace its server-only imports so these fixtures test the exported pure rules without a browser.
{
  const dataModule = (source) => `data:text/javascript,${encodeURIComponent(source)}`;
  const contentServerUrl = pathToFileURL(join(process.cwd(), "site/src/data/content-server.ts")).href;
  const startMock = dataModule(
    `export function createServerFn(){const chain={validator(){return chain},handler(fn){return fn}};return chain}`,
  );
  const contentMock = dataModule(`export default {}`);
  const markdownMock = dataModule(
    `export const parseResearchMarkdown=()=>({sections:[]});export const renderWholeMarkdown=()=>""`,
  );
  const dejargonMock = dataModule(`export const readerCopy=(value)=>value`);
  const typesMock = dataModule(`
    export const headlineMetric=()=>null;
    export const DEFAULT_KPIS=["volume24h"];
    export const SECTION_KPIS={launchpads:["volume24h","launches24h","liquidityUsd","holders"],tokens:["liquidityUsd","volume24h","holders","priceChange24h"]};
    export const dexScreenerSearchUrl=(value)=>"https://dex.test/"+value;
    export const explorerTokenUrl=(base,address)=>base+"/token/"+address;
    export const tldrLine=(entry)=>entry.tldr ?? (String(entry.summary ?? "").trim().match(/^(.+?[.!?])(?:\\s|$)/)?.[1] ?? String(entry.summary ?? "").trim());
  `);
  const hooks = registerHooks({
    resolve(specifier, context, nextResolve) {
      if (specifier === "@tanstack/react-start") return { url: startMock, shortCircuit: true };
      if (specifier === "virtual:proofline-content") return { url: contentMock, shortCircuit: true };
      if (context.parentURL?.startsWith(contentServerUrl) && specifier === "./markdown")
        return { url: markdownMock, shortCircuit: true };
      if (context.parentURL?.startsWith(contentServerUrl) && specifier === "./types")
        return { url: typesMock, shortCircuit: true };
      if (context.parentURL?.startsWith(contentServerUrl) && specifier === "../lib/dejargon")
        return { url: dejargonMock, shortCircuit: true };
      return nextResolve(specifier, context);
    },
  });
  const rules = await import(`${contentServerUrl}?home-rules-test`);
  hooks.deregister();

  const now = Date.parse("2026-09-02T21:00:00Z");
  const entry = (slug, overrides = {}) => ({
    slug,
    name: slug,
    symbol: slug.toUpperCase(),
    role: "subject",
    officialConfirmed: true,
    hasContractOn4663: true,
    shareBarMetric: "liquidity",
    summary: `${slug} summary`,
    tldr: `${slug} in one sentence`,
    announcementAt: "2026-09-01T00:00:00Z",
    announcementUrl: "https://official.test/post",
    officialLinks: [{ kind: "site", url: "https://official.test" }],
    sourceLinks: { market: "https://dex.test", holders: "https://explorer.test" },
    reviewedAt: "2026-09-01T00:00:00Z",
    tree: { sectionId: "launchpads" },
    kpis: {
      status: "live",
      liquidityUsd: 30_000,
      tvl: null,
      volume24h: 100,
      marketCap: 1_000_000,
      fdv: null,
      holders: 42,
      firstPairAt: "2026-09-01T00:00:00Z",
      readAt: "2026-09-02T21:00:00Z",
    },
    ...overrides,
  });
  const pons = entry("pons", { kpis: { ...entry("x").kpis, volume24h: 200 } });
  const ai = entry("artificial-inu", {
    tree: { sectionId: "tokens" },
    kpis: { ...entry("x").kpis, volume24h: 300 },
  });
  const noxa = entry("noxa", { hasContractOn4663: false });
  const announced = entry("sight", {
    hasContractOn4663: false,
    reviewedAt: "2026-09-02T00:00:00Z",
    kpis: { ...entry("x").kpis, status: "announced", liquidityUsd: null, volume24h: null, firstPairAt: null },
  });
  const olderAnnouncement = entry("wire", {
    hasContractOn4663: false,
    tldr: null,
    announcementAt: "2026-08-20T00:00:00Z",
    reviewedAt: "2026-08-20T00:00:00Z",
    kpis: { ...entry("x").kpis, status: "announced", liquidityUsd: null, volume24h: null, firstPairAt: null },
  });
  try {
    assert.equal(meetsShareBarCore(pons), true, "Pons clears the shared predicate");
    assert.equal(rules.meetsShareBar(ai), true, "Artificial Inu clears the site predicate");
    assert.equal(rules.meetsShareBar(noxa), false, "NOXA without a located contract fails");
    assert.equal(rules.meetsShareBar(announced), false, "announced names fail the live share bar");

    const trending = rules.trendingNow([pons, ai, noxa, announced], {
      pons: [{ at: "2026-09-01T21:00:00Z", volume_h24: 100 }],
    });
    assert.deepEqual(trending.map((item) => item.entry.slug), ["artificial-inu", "pons"]);
    assert.equal(trending[0].change24h, null, "change omitted without an earlier snapshot");
    assert.equal(trending[1].change24h, 100, "change uses the snapshot nearest 24h earlier");

    assert.deepEqual(rules.newLaunches([pons, ai, announced], now).map((item) => item.slug), ["artificial-inu", "pons"]);
    // Count tracked names in the same 14-day window; factory calls are a different unit.
    const other = entry("other", { officialConfirmed: false });
    const launchedToday = entry("hookr", {
      kpis: { ...entry("x").kpis, firstPairAt: "2026-09-02T09:00:00Z" },
    });
    assert.equal(rules.notListedCount([other,other,pons,ai], [pons, ai], now), 1, "distinct tracked names only");
    assert.equal(
      rules.notListedCount([other,launchedToday,pons,ai], [launchedToday, pons, ai], now),
      1,
      "listed recent names are excluded regardless of their exact age",
    );
    assert.equal(
      rules.notListedCount([announced,entry("old", {kpis:{...other.kpis,firstPairAt:'2026-01-01'}}),
        entry("future",{kpis:{...other.kpis,firstPairAt:'2027-01-01'}})], [launchedToday], now),
      0,
      "unlocated, old and future pool dates do not count",
    );
    const address = `0x${'1'.repeat(40)}`;
    const pulled = count => ({chain:'robinhood-chain',activity:{window_as_of:new Date(now).toISOString(),
      addresses:[{address,role:'factory',launches_24h:count}]},market:{pulled_at:new Date(now).toISOString(),
      pairs:[{pair_address:address,volume_h24:count}]}});
    const observations = [{slug:'a',pulled:pulled(12)},{slug:'b',pulled:pulled(12)},
      {slug:'other-section',pulled:pulled(99)}];
    const trees = {a:{sectionId:'launchpads'},b:{sectionId:'launchpads'},'other-section':{sectionId:'tokens'}};
    const categoryTotals = rules.observationTotals(observations,trees,now,'launchpads');
    assert.equal(categoryTotals.launches.value,12,'shared factory counted once inside category');
    assert.equal(categoryTotals.volume24h,12,'shared pool counted once inside category');
    assert.equal(rules.observationTotals(observations,trees,now,'tokens').volume24h,99,'category is isolated');
    assert.equal(rules.observationTotals(observations,trees,now,'missing').launches.value,null,'empty category is unknown, not zero');
    assert.equal(rules.observationTotals(observations,trees,now).launches.value,null,'cross-category conflicts are not silently summed on home');
    const poolId = `0x${'a'.repeat(64)}`;
    const poolObservation = (slug, value) => ({slug,pulled:{chain:'robinhood-chain',market:{
      pulled_at:new Date(now).toISOString(),pairs:[{pair_address:poolId,volume_h24:value}]}}});
    const sharedPools = [poolObservation('a',12),poolObservation('b',12)];
    assert.equal(rules.observationTotals(sharedPools,trees,now).volume24h,12,'home retains and deduplicates pool IDs');
    assert.equal(rules.observationTotals([...sharedPools,poolObservation('other-section',99)],trees,now,'launchpads').volume24h,12,'pool-ID dedup follows category filtering');
    assert.equal(rules.observationTotals([...sharedPools,poolObservation('other-section',99)],trees,now).volume24h,null,'home withholds conflicting pool-ID observations');
    assert.deepEqual(rules.announcedNow([olderAnnouncement, announced]).map((item) => item.slug), ["sight", "wire"]);
    assert.equal(rules.announcedNow([olderAnnouncement, announced]).at(-1).tldr, null, "missing summaries form the muted tail");

    const leaders = rules.sectionLeaders(
      { id: "launchpads", label: "Launchpads", description: "" },
      [pons, announced, olderAnnouncement],
    );
    // README 1(f): an announced name with no TL;DR line still leads with the first sentence of its
    // research summary. Only a name with neither is not ready for a slot.
    assert.deepEqual(leaders.map((item) => [item.entry.slug, item.announced]), [
      ["pons", false],
      ["sight", true],
      ["wire", true],
    ]);
    const unwritten = entry("blank", {
      hasContractOn4663: false,
      tldr: null,
      summary: "   ",
      kpis: { ...entry("x").kpis, status: "announced", liquidityUsd: null, volume24h: null, firstPairAt: null },
    });
    assert.deepEqual(
      rules.announcedNow([unwritten, announced]).map((item) => item.slug),
      ["sight"],
      "an announced name with no summary and no TL;DR never holds a slot",
    );

    const homeEntries = [pons, announced, olderAnnouncement, unwritten];
    const homeSections = [{ id:'launchpads',label:'Launchpads',description:'' },{id:'empty',label:'Empty',description:''}];
    const homeHistories = {pons:[{at:'2026-09-01T21:00:00Z',volume_h24:100}]};
    const fullHome = {site:{chain:{id:4663}},sections:homeSections,entries:homeEntries,histories:homeHistories,
      wire:[],now,launches:{value:null,partial:true},volume24h:null,volumePartial:true,
      dependencies:[{privateUnused:'must not ship'}],chainStats:{unused:true},generatedAt:'unused'};
    const compactHome = rules.homeProjection(fullHome);
    assert.equal(compactHome.namesOnFile,homeEntries.length);
    assert.equal(compactHome.live,homeEntries.filter(e=>e.kpis.status==='live').length);
    assert.deepEqual(compactHome.trending,rules.trendingNow(homeEntries,homeHistories));
    assert.deepEqual(compactHome.newLaunches,rules.newLaunches(homeEntries,now));
    assert.deepEqual(compactHome.announced,rules.announcedNow(homeEntries));
    assert.equal(compactHome.notListed,rules.notListedCount(homeEntries,compactHome.newLaunches,now));
    assert.deepEqual(compactHome.launches,fullHome.launches);
    assert.equal(compactHome.volume24h,null);
    assert.equal(compactHome.volumePartial,true);
    for(const section of homeSections){
      assert.equal(compactHome.sectionCounts[section.id],homeEntries.filter(e=>e.tree?.sectionId===section.id).length);
      assert.deepEqual(compactHome.leaders[section.id],rules.sectionLeaders(section,homeEntries));
    }
    assert.deepEqual(compactHome.chainStats,fullHome.chainStats,'chain statistics remain available to the nested StatBox');
    for(const key of ['entries','histories','dependencies','generatedAt'])
      assert.equal(Object.hasOwn(compactHome,key),false,`${key} stays out of the home response`);
    assert.equal(rules.homeProjection({...fullHome,entries:[],histories:{}}).namesOnFile,0);
    assert.equal(rules.homeProjection({...fullHome,entries:[],histories:{}}).readAt,undefined);

    const wire = rules.wireItems({
      entries: [pons, ai],
      changelog: [
        { date: "2026-09-04", slug: "pons", type: "coverage", severity: "Material", title: "Profile refreshed", detail: "Bookkeeping" },
        { date: "2026-09-03", slug: "pons", type: "correction", severity: "Material", title: "Material correction", detail: "The picture changed." },
        { date: "2026-09-02", slug: "pons", type: "risk", severity: "Info", title: "Low-priority note", detail: "Not material." },
      ],
      feed: [
        {
          name: { slug: "artificial-inu", symbol: "AI", name: "Artificial Inu" },
          item: { id: "talk", date: "2026-09-04", title: "A very long talk headline ".repeat(6), body: "Body", kind: "ct", account: "@ai", sourceUrl: "https://x.com/ai/status/1" },
        },
        {
          name: { slug: "pons", symbol: "PONS", name: "Pons" },
          item: { id: "missing-link", date: "2026-09-05", title: "No receipt", body: "Body", kind: "company" },
        },
      ],
    });
    assert.deepEqual(wire.map((item) => item.kind), ["talk", "note"], "bookkeeping, low-severity notes and receipt-free posts stay out");
    assert.equal(wire[0].account, "@ai", "Talk carries the posting handle");
    assert.ok(wire[0].headline.length <= 80, "wire headlines stay within 80 characters");
    assert.deepEqual(wire.map((item) => item.at), ["2026-09-04", "2026-09-03"], "wire is newest first");
    assert.equal(
      wire[1].url,
      "/n/pons#commentary",
      "an Icarus note links the Commentary section, not a Details tab that no longer accepts it",
    );

    // Telegram reads the same wire. Same fixture in, same kinds and same order out, so the digest
    // and the site can never describe the same event with two different words.
    const telegramWire = selectWireItems(
      {
        projects: new Map([["pons", { name: "Pons" }], ["artificial-inu", { name: "Artificial Inu" }]]),
        feed: new Map([
          ["artificial-inu", { items: [{ id: "talk", date: "2026-09-04", title: "A talk headline", body: "Body", kind: "ct", account: "@ai", sourceUrl: "https://x.com/ai/status/1" }] }],
          ["pons", { items: [{ id: "missing-link", date: "2026-09-05", title: "No receipt", body: "Body", kind: "company" }] }],
        ]),
        changelog: [
          { date: "2026-09-04", slug: "pons", type: "coverage", severity: "Material", title: "Profile refreshed", detail: "Bookkeeping" },
          { date: "2026-09-03", slug: "pons", type: "correction", severity: "Material", title: "Material correction", detail: "The picture changed." },
          { date: "2026-09-02", slug: "pons", type: "risk", severity: "Info", title: "Low-priority note", detail: "Not material." },
        ],
      },
      { pons: true, "artificial-inu": true },
      // kind parity with the site: lift the channel's own gate (announcement/talk, plain language, one per name)
      { kinds: new Set(["announcement", "talk", "onchain", "note"]), perName: 99, plain: false },
    );
    assert.deepEqual(telegramWire.map((item) => item.kind), wire.map((item) => item.kind), "Telegram reads the site's wire kinds");
    assert.deepEqual(telegramWire.map((item) => item.at), wire.map((item) => item.at), "and in the same order");
    assert.deepEqual(
      selectWireItems({ projects: new Map(), feed: new Map(), changelog: [] }, {}),
      [],
      "a name below the share bar never reaches Telegram",
    );
    const wireMessages = buildWireMessages(telegramWire, {
      siteName: "Icarus", date: "2026-09-04", siteUrl: "https://x.test", profilePath: "/n/",
    });
    assert.ok(wireMessages[0].includes("<b>TALK · ARTIFICIAL INU</b>"), "a wire item carries its kind and name");
    assert.ok(wireMessages[0].includes("<b>A talk headline</b>"), "headline first");
    assert.ok(wireMessages[0].trimEnd().endsWith("</a>"), "and the link last");
    console.log("ok   Icarus home and category rules");
  } catch (err) {
    failures++;
    console.error(`FAIL Icarus home and category rules: ${err.message}`);
  }

  // Official surface confirmed: one definition for the site bundle and the score emitter.
  const censusRow = (overrides = {}) => ({
    slug: "foxpad",
    identity: { entity_kind: "protocol", status: "provisional" },
    official_links: [
      { kind: "site", url: "https://foxpad.app" },
      { kind: "x", url: "https://x.com/fox_onrh" },
    ],
    // FoxPad's real row: a site link is on file, but the X account belongs to the FOX token and
    // the pad's own handle is unconfirmed, so the row sits on the watchlist (role observe).
    qualifying: { citable: { value: true, note: "the pad's own handle is unconfirmed", verified: false } },
    role: "observe",
    ...overrides,
  });
  const barEntry = (census) => ({
    officialConfirmed: officialSurfaceConfirmedCore(census),
    hasContractOn4663: true,
    shareBarMetric: "liquidity",
    kpis: { liquidityUsd: 1_000_000, tvl: null },
  });
  const foxpad = censusRow();
  const confirmed = censusRow({ role: "subject" });
  try {
    assert.equal(officialSurfaceConfirmedCore(foxpad), false, "a watchlist row is not a confirmed surface");
    assert.equal(rules.officialSurfaceConfirmed(foxpad), false, "the site reads the same definition");
    assert.equal(meetsShareBarCore(barEntry(foxpad)), false, "the emitter keeps FoxPad off the share bar");
    assert.equal(rules.meetsShareBar(barEntry(foxpad)), false, "the site keeps FoxPad off the share bar");

    assert.equal(officialSurfaceConfirmedCore(confirmed), true, "a subject row with a site link confirms even before the second-pass flag");
    assert.equal(rules.meetsShareBar(barEntry(confirmed)), true, "a confirmed surface still clears the bar");
    assert.equal(
      officialSurfaceConfirmedCore(censusRow({ official_links: [{ kind: "x", url: "https://x.com/fox_onrh" }] })),
      false,
      "an X account alone is not an official surface",
    );
    assert.equal(
      officialSurfaceConfirmedCore({ ...confirmed, identity: { entity_kind: "protocol", status: "conflicted" } }),
      false,
      "a conflicted identity is never confirmed",
    );
    assert.equal(
      officialSurfaceConfirmedCore({ slug: "x", identity: { status: "verified" }, official_links: [{ kind: "docs", url: "https://d.test" }] }),
      true,
      "a row without a qualifying block or role reads as a subject with links",
    );
    assert.equal(officialSurfaceConfirmedCore(undefined), false, "a name with no registry row is never confirmed");
    console.log("ok   official surface confirmed");
  } catch (err) {
    failures++;
    console.error(`FAIL official surface confirmed: ${err.message}`);
  }
}

// Reader vocabulary: inspect only text and literal values that can render from JSX; identifiers,
// route parameters and comments remain free to use the content-system's internal terms.
{
  const hits = [];
  const sources = [
    ...await filesUnder("site/src", ".tsx"),
    ...(await filesUnder("site/src", ".ts")).filter((file) => !file.endsWith("routeTree.gen.ts")),
  ].sort();
  for (const file of sources) {
    const source = await readFile(file, "utf8");
    for (const fragment of jsxVisibleStrings(source)) {
      for (const word of readerWordHits(fragment.text)) {
        const line = source.slice(0, fragment.index).split("\n").length;
        hits.push(`${file}:${line}: ${word} in ${JSON.stringify(fragment.text.trim())}`);
      }
    }
  }
  const methodology = await readFile("content/methodology.md", "utf8");
  for (const word of readerWordHits(methodology)) {
    const match = methodology.match(new RegExp(`\\b${word.replace(" ", "\\s+")}\\b`, "i"));
    const line = methodology.slice(0, match?.index ?? 0).split("\n").length;
    hits.push(`content/methodology.md:${line}: ${word}`);
  }
  const fixture = jsxVisibleStrings([
    'const dossier = "stub"; // coverage',
    '<div title="packet">Reader copy</div>',
    'const KPI_LABEL = { one: "cohort share" };',
    'type Row = { label: string; note: string };',
    'function reportedTitle(as: string): string { return `not verified by Proofline`; }',
  ].join("\n")).flatMap((fragment) => readerWordHits(fragment.text));
  try {
    assert.deepEqual(
      fixture,
      ["packet", "cohort", "Proofline"],
      "scanner reads visible literals, label maps and label helpers, but allows identifiers, comments, types and internal strings",
    );
    assert.deepEqual(hits, [], hits.join("\n"));
    console.log("ok   reader vocabulary");
  } catch (err) {
    failures++;
    console.error(`FAIL reader vocabulary: ${err.message}`);
  }
}


// A name's own words are not hype: GIGA may say "giga"; unrelated hype words still fire.
{
  try {
    const own = ownWordSet({ slug: "giga", name: "Giga", identity: { aliases: ["GIGA token"], symbols: ["GIGA"] } }, { name: "Giga", symbol: "GIGA" });
    assert.ok(own.has("giga") && own.has("token"), "own words carry name, symbol and alias parts");
    const kept = filterOwnWords(['feed/giga.yaml: x title: banned word "giga"', 'feed/giga.yaml: x body: banned word "moon"'], own);
    assert.deepEqual(kept, ['feed/giga.yaml: x body: banned word "moon"'], "only the own word is dropped");
    assert.equal(filterOwnWords(['a: banned word "giga"'], new Set()).length, 1, "no own words, nothing dropped");
    console.log("ok   own words are not hype");
  } catch (err) {
    failures++;
    console.error(`FAIL own words are not hype: ${err.message}`);
  }
}


// Telegram wire gate: only plain-language announcements and talk travel, one per name per run.
{
  try {
    const content = {
      projects: new Map([["pons", { name: "Pons" }], ["ai", { name: "Artificial Inu" }]]),
      feed: new Map([
        ["pons", { items: [
          { id: "a1", kind: "company", title: "New stock tokens listed for pairing", body: "@ponsdotfamily posted new pair assets live: LLY, WYFI, TSM, RBLX.", sourceUrl: "https://x.com/p/1", date: "2026-09-04" },
          { id: "a2", kind: "company", title: "Second post the same day", body: "@ponsdotfamily posted that creator payouts crossed twenty million dollars.", sourceUrl: "https://x.com/p/2", date: "2026-09-03" },
          { id: "o1", kind: "onchain", title: "Gecko PONS/WETH 24h volume $5M", body: "Gecko pool 0x10cc…26ba volume_usd.h24 5103019 reserve_in_usd 1008373.", sourceUrl: "https://api.geckoterminal.com/x", date: "2026-09-04" },
          { id: "c1", kind: "ct", title: "Raw dump in a talk item", body: "RPC launchCreationEnabled() on 0xe64A…F297 returned false at block 53107240.", sourceUrl: "https://x.com/p/3", date: "2026-09-04" },
        ] }],
        ["ai", { items: [
          { id: "t1", kind: "ct", title: "@0xSammy on the NVDA vault", body: "@0xSammy posted that the vault now holds two million dollars of tokenized NVDA.", account: "@0xSammy", sourceUrl: "https://x.com/s/1", date: "2026-09-04" },
        ] }],
      ]),
      changelog: [{ slug: "pons", type: "risk", severity: "Risk", title: "Owner changed a fee recipient", detail: "The Safe changed the creator fee recipient.", date: "2026-09-04" }],
    };
    const picked = selectWireItems(content, { pons: true, ai: true }, { state: { sent_keys: [] } });
    assert.deepEqual(picked.map((i) => i.id), ["feed-ai-t1", "feed-pons-a1"], "one plain announcement per name and the plain talk item; data reads, raw talk and notes stay on the site");
    const both = selectWireItems(content, { pons: true, ai: true }, { state: { sent_keys: [] }, perName: 2 });
    assert.deepEqual(both.map((i) => i.id), ["feed-ai-t1", "feed-pons-a1", "feed-pons-a2"], "perName lifts the cap");
    console.log("ok   telegram wire gate");
  } catch (err) {
    failures++;
    console.error(`FAIL telegram wire gate: ${err.message}`);
  }
}

// The pause gate, end to end on the real script. Telegram credentials are deliberately absent: if a
// mode ever slipped past the gate the run would fail on the missing token instead of exiting 0, so a
// green assertion here means nothing was even attempted.
{
  const tmp = await mkdtemp(join(tmpdir(), "proofline-pause-"));
  const digest = new URL("./telegram-digest.mjs", import.meta.url).pathname;
  await cp("content", join(tmp, "content"), { recursive: true });
  await mkdir(join(tmp, "ops"), { recursive: true });
  // build/derived.json is generated, never committed, and CI runs this suite before scoring. An empty
  // share bar is all the gate needs: nothing is eligible, so nothing can slip past it unnoticed.
  await mkdir(join(tmp, "build"), { recursive: true });
  await writeFile(join(tmp, "build/derived.json"), JSON.stringify({ generated_at: "2026-09-04T00:00:00Z", projects: {}, trending: [], shareBar: {} }));
  const runDigest = (review, extra = []) => new Promise((resolveRun) => {
    writeFile(join(tmp, "ops/telegram-review.json"), JSON.stringify(review)).then(() => {
      execFile("node", [digest, ...extra], { cwd: tmp, env: { ...process.env, TELEGRAM_BOT_TOKEN: "", TELEGRAM_CHAT_ID: "" } },
        (error, stdout, stderr) => resolveRun({ code: error?.code ?? 0, stdout, stderr }));
    });
  });
  const paused = await runDigest({ version: 2, channel_enabled: false, decisions: {} }, ["--alerts"]);
  const pausedBrief = await runDigest({ version: 2, channel_enabled: false, decisions: {} }, ["--brief"]);
  const pausedWeekly = await runDigest({ version: 2, channel_enabled: false, decisions: {} }, ["--weekly"]);
  const wirePaused = await runDigest({ version: 2, channel_enabled: true, wire_enabled: false, decisions: {} }, ["--alerts"]);
  const previewed = await runDigest({ version: 2, channel_enabled: false, decisions: {} }, ["--dry-run", "--brief"]);
  try {
    for (const [name, run] of [["alerts", paused], ["brief", pausedBrief], ["weekly", pausedWeekly]]) {
      assert.equal(run.code, 0, `a paused channel exits cleanly for ${name}`);
      assert.ok(run.stdout.includes("Icarus channel delivery is paused"), `${name} consults channel_enabled`);
    }
    assert.equal(wirePaused.code, 0, "wire_enabled: false stops automatic sends");
    assert.ok(wirePaused.stdout.includes("automatic sends are paused"), "and says which flag stopped them");
    assert.equal(previewed.code, 0, "a dry run still previews while the channel is paused");
    assert.ok(!previewed.stdout.includes("delivery is paused"), "and is not short-circuited by the gate");
    assert.ok(previewed.stdout.includes("ICARUS DAILY"), "printing the brief it would have sent");
    console.log("ok   telegram pause gate");
  } catch (err) { failures++; console.error(`FAIL telegram pause gate: ${err.message}`); }
  await rm(tmp, { recursive: true, force: true });
}

if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
console.log("all scoring tests passed");
