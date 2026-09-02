import { readFile } from "node:fs/promises";
import { parse, stringify } from "yaml";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, cp, rm, writeFile, appendFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { derive, SECURITY_MAX, PROVISIONAL_CONFIDENCE, FULL_WEIGHT_CONFIDENCE, computeRanks } from "./lib/score.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { crossCheck, releaseCheck } from "./lib/checks.mjs";
import { checkResearch, tagIds, REQUIRED_HEADINGS } from "./lib/research-md.mjs";
import { loadContent } from "./lib/load.mjs";
import {
  selectUnsent,
  selectApproved,
  buildMessages,
  chunkMessage,
  publicationFingerprint,
  readDotEnv,
} from "./lib/telegram.mjs";
import { validateContent } from "./lib/validate-content.mjs";
import { computeTrending, countsForTrending } from "./lib/trending.mjs";
import { voiceWarnings, conductWarnings } from "./lib/voice.mjs";

const expected = JSON.parse(await readFile(new URL("../fixtures/expected.json", import.meta.url), "utf8"));
let failures = 0;

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
  await writeFile(censusPath, censusText.replace(/citable:\s*\{ value: true,/, "citable:           { value: false,"));
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
  const feedItem = (body) => `slug: pons\nitems:\n  - id: t1\n    date: 2026-08-30\n    kind: ct\n    title: T\n    body: ${JSON.stringify(body)}\n    account: "@spam"\n    sources: [S99]\n`;
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
    assert.ok(hypeFeed.errors.some((e) => e.includes("feed/pons.yaml: t1 body: banned word \"moon\"")), "hype word in a feed body is an error without --release");
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
  const messages = buildMessages(approved, { siteName: "Proofline", date: "2026-08-31", projects, derivedBySlug: derived, siteUrl: "https://x.test/", profilePath: "/n/" });
  const roundupEntries = approved.map((entry) => ({ ...entry, channel: { ...entry.channel, delivery: "roundup" } }));
  const roundupMessages = buildMessages(roundupEntries, { siteName: "Proofline", date: "2026-08-31", projects, derivedBySlug: derived, siteUrl: "https://x.test/", profilePath: "/n/" });
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
    assert.equal(messages.length, 1, "one direct publication produces one card");
    assert.ok(messages[0].includes("<b>NEW COVERAGE · PONS</b>"), "event kicker");
    assert.ok(messages[0].includes("41/100 · Elevated risk"), "proofline view");
    assert.ok(messages[0].includes("64% confidence · Provisional"), "confidence line");
    assert.ok(messages[0].includes("https://x.test/n/pons"), "profile link");
    assert.ok(messages[0].includes("A &lt;b&gt;full&lt;/b&gt; research record"), "html escaped");
    assert.ok(roundupMessages[0].includes("<b>PROOFLINE ROUNDUP · 2026-08-31</b>"), "roundup card");
    assert.equal(chunks.length, 2, "chunked");
    assert.deepEqual(readDotEnv("A=1\n# c\nB=\"two words\"\n"), { A: "1", B: "two words" });
    console.log("ok   telegram publications");
  } catch (err) { failures++; console.error(`FAIL telegram publications: ${err.message}`); }
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

if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
console.log("all scoring tests passed");
