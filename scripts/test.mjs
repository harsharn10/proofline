import { readFile } from "node:fs/promises";
import { parse } from "yaml";
import assert from "node:assert/strict";
import { mkdtemp, cp, rm, writeFile, appendFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { derive, SECURITY_MAX, PROVISIONAL_CONFIDENCE, FULL_WEIGHT_CONFIDENCE } from "./lib/score.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { crossCheck, releaseCheck } from "./lib/checks.mjs";
import { checkResearch, tagIds, REQUIRED_HEADINGS } from "./lib/research-md.mjs";
import { loadContent } from "./lib/load.mjs";
import { selectUnsent, buildDigest, chunkMessage, readDotEnv } from "./lib/telegram.mjs";
import { validateContent } from "./lib/validate-content.mjs";
import { computeTrending } from "./lib/trending.mjs";
import { voiceWarnings } from "./lib/voice.mjs";

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
    census: [{ slug: "clean", name: p.name, category: p.category, lifecycle: p.lifecycle, coverage: p.coverage }],
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
  const noChangelog = crossCheck(await makeContent((c) => { c.changelog = []; }));
  const card = { id: "dep", name: "Dep", kind: "dex", summary: "x", controls: [{ power: "p", holder: "h", note: "n", class: "verified", sources: ["S9"] }], failure_modes: [], sources: [] };
  const depDangling = crossCheck(await makeContent((c) => { c.dependencies.set("dep", card); }));
  try {
    assert.deepEqual(clean.errors, [], "consistent tree has no errors");
    assert.deepEqual(clean.warnings, [], "consistent tree has no warnings");
    assert.ok(selfApproved.errors.some((e) => e.includes("different person")), "approver === researcher");
    assert.ok(placeholder.warnings.some((w) => w.includes("tbd")), "placeholder approver warns");
    assert.ok(coverageDrift.errors.some((e) => e.includes("coverage")), "census coverage ≠ project coverage");
    assert.ok(nameDrift.errors.some((e) => e.includes("name")), "census name ≠ project name");
    assert.ok(categoryDrift.errors.some((e) => e.includes("category")), "census category ≠ project category");
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
    assert.ok(todo.some((e) => e.includes("corrections.destination")), "corrections TODO");
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
  const baseline = await validateContent(tmp);
  const releaseRun = await validateContent(tmp, { release: true });
  const ledgerPath = join(tmp, "sources", "pons.yaml"), researchPath = join(tmp, "research", "pons.md");
  const entry = (id) => `  - id: ${id}\n    url: https://example.com/${id}\n    publisher: Example\n    kind: docs\n    accessed_at: 2026-08-30T00:00:00Z\n    claim: Fixture\n    excerpt: n/a\n    hash: null\n    archive_url: null\n    researcher: harsharn10\n    available: true\n`;
  await appendFile(ledgerPath, entry("S2") + entry("S3"));
  const research = await readFile(researchPath, "utf8");
  await writeFile(researchPath, research.replace("## Identity\n\n_Research pending._", "## Identity\n\nPons is a launchpad. [claim S2]"));
  const cited = await validateContent(tmp);
  await writeFile(join(tmp, "projects", "arrow.yaml"), "slug: [\n");
  const broken = await validateContent(tmp);
  await rm(tmp, { recursive: true, force: true });
  try {
    assert.deepEqual(baseline.errors, [], "scratch copy validates");
    assert.ok(baseline.warnings.some((w) => w.includes("stonkbroker fails qualifying test citable")), "qualifying value false warns");
    assert.ok(releaseRun.errors.some((e) => e.includes("stonkbroker fails qualifying test citable")), "qualifying value false is a release error");
    assert.deepEqual(cited.errors, [], "prose citation validates");
    assert.ok(!cited.warnings.some((w) => w.includes("S2 is never cited")), "an id cited only in research prose is not 'never cited'");
    assert.ok(cited.warnings.some((w) => w.includes("S3 is never cited")), "an id cited nowhere still warns");
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

// Telegram digest helpers: unsent selection, HTML escaping, numbers line, links, chunking, dotenv.
{
  const entries = [
    { date: "2026-08-30", slug: "pons", type: "coverage", severity: "Info", title: "Initial stub opened", detail: "x" },
    { date: "2026-08-31", slug: "pons", type: "score", severity: "Material", title: "Score published", detail: "<b>&" },
  ];
  const unsent = selectUnsent(entries, { sent_keys: ["2026-08-30|pons|coverage|Initial stub opened"] });
  const projects = new Map([["pons", { name: "Pons" }]]);
  const derived = new Map([["pons", { score: 64, provisional: true, risk: "Elevated", confidence: 57 }]]);
  const text = buildDigest(unsent, { siteName: "Proofline", date: "2026-08-31", projects, derivedBySlug: derived, siteUrl: "https://x.test/", profilePath: "/n/" });
  const chunks = chunkMessage("a".repeat(3000) + "\n\n" + "b".repeat(3000), 4096);
  try {
    assert.equal(unsent.length, 1);
    assert.ok(text.includes("<b>Pons</b>"), "name bold");
    assert.ok(text.includes("Score 64/100 (provisional) · Elevated risk · 57% confidence"), "numbers line");
    assert.ok(text.includes("https://x.test/n/pons"), "profile link");
    assert.ok(text.includes("&lt;b&gt;&amp;"), "html escaped");
    assert.equal(chunks.length, 2, "chunked");
    assert.deepEqual(readDotEnv("A=1\n# c\nB=\"two words\"\n"), { A: "1", B: "two words" });
    console.log("ok   telegram digest");
  } catch (err) { failures++; console.error(`FAIL telegram digest: `); }
}

// Task 2 — computeTrending: distinct top-tier accounts with `kind: ct` items dated inside the window.
{
  const accounts = [
    { handle: "@a", tier: "top" },
    { handle: "@b", tier: "top" },
    { handle: "@c", tier: "top" },
    { handle: "@d", tier: "watch" },
  ];
  const opts = { minAccounts: 3, windowDays: 7, today: "2026-08-30" };
  const item = (id, date, account) => ({ id, date, kind: "ct", title: "t", body: "b", account });
  const run = (items) => computeTrending(new Map([["x", items]]), accounts, opts).get("x");
  const threeTop = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@b"), item("3", "2026-08-27", "@c")]);
  const twoTop = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@b")]);
  const oneWatch = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@b"), item("3", "2026-08-27", "@d")]);
  const outsideWindow = run([item("1", "2026-08-20", "@a"), item("2", "2026-08-26", "@b"), item("3", "2026-08-27", "@c")]);
  const sameAccountThrice = run([item("1", "2026-08-25", "@a"), item("2", "2026-08-26", "@a"), item("3", "2026-08-27", "@a")]);
  try {
    assert.equal(threeTop.trending, true, "3 top accounts in window → trending");
    assert.equal(twoTop.trending, false, "2 accounts → not trending");
    assert.equal(oneWatch.trending, false, "one of three is watch tier → not trending");
    assert.equal(outsideWindow.trending, false, "one dated outside window → not trending");
    assert.equal(sameAccountThrice.trending, false, "same account thrice counts once → not trending");
    console.log("ok   computeTrending");
  } catch (err) { failures++; console.error(`FAIL computeTrending: ${err.message}`); }
}

// Task 2 — feed schema: kind enum and account handle pattern.
{
  const feedBase = () => ({ slug: "pons", items: [{ id: "f1", date: "2026-08-20", kind: "company", title: "T", body: "B" }] });
  const newsKind = validateAgainst("feed", { slug: "pons", items: [{ ...feedBase().items[0], kind: "news" }] });
  const badAccount = validateAgainst("feed", { slug: "pons", items: [{ ...feedBase().items[0], account: "longbow" }] });
  const ok = validateAgainst("feed", feedBase());
  try {
    assert.ok(newsKind.length > 0, "kind: news is rejected");
    assert.ok(badAccount.length > 0, "account without a leading @ is rejected");
    assert.deepEqual(ok, [], "a well-formed feed file passes");
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

if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
console.log("all scoring tests passed");
