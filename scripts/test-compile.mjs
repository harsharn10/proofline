import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parse } from "yaml";
import { parsePacket, checkPacket, compile, feedIdentity } from "./lib/packet.mjs";
import { runCompile } from "./compile-packet.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { planFindingsRepair } from "./repair-pilot-findings.mjs";

let failures = 0;
async function test(name, fn) {
  try { await fn(); console.log(`ok   ${name}`); }
  catch (error) { failures++; console.error(`FAIL ${name}: ${error.stack ?? error.message}`); }
}

const fixture = async (name) => parsePacket(await readFile(`fixtures/compile-packet/${name}`, "utf8"));

await test("parse and reject malformed or out-of-role packets", async () => {
  const packet = await fixture("new-seed.md");
  assert.deepEqual(checkPacket(packet.frontmatter, packet.body), []);
  const invalid = structuredClone(packet.frontmatter);
  invalid.scoring = { risk: "Low" };
  invalid.events[0].channel_recommendation = "review";
  const errors = checkPacket(invalid, packet.body);
  assert.ok(errors.some((error) => error.includes("scoring")));
  assert.ok(errors.some((error) => error.includes("channel_recommendation")));
  assert.throws(() => parsePacket("not frontmatter"), /frontmatter/);
});

await test("compile a brand-new slug from a seed packet", async () => {
  const packet = await fixture("new-seed.md");
  const result = compile(packet);
  assert.equal(result.project.slug, "alpha");
  assert.equal(result.project.coverage, "stub");
  assert.equal(result.project.lifecycle, "mainnet", "verified explorer deployment clears the mainnet bar");
  assert.equal(result.project.deployments[0].verified, true);
  assert.equal(result.censusRow.category, "Native AMM");
  assert.equal(result.censusRow.qualifying.deployed_on_chain.verified, true);
  assert.equal(result.sources.sources.length, 1);
  assert.equal(result.feed.items.length, 1);
  assert.equal(result.feed.items[0].id, feedIdentity({
    slug: "alpha",
    workId: packet.frontmatter.work_id,
    eventId: packet.frontmatter.events[0].id,
  }));
  assert.match(result.changelog.review_key, /^[a-f0-9]{16}$/);
  assert.ok(!("scoring" in result.project), "compiler never invents scoring");
});

await test("compile a full packet into an existing stub without granting full coverage", async () => {
  const seed = compile(await fixture("new-seed.md"));
  const update = compile(await fixture("update-full.md"), seed.project, seed.censusRow, seed.sources, seed.feed);
  assert.equal(update.project.coverage, "stub");
  assert.deepEqual(update.project.review, seed.project.review, "accepted research never rewrites approval history");
  assert.equal(update.project.research_state.full_as_of, (await fixture("update-full.md")).frontmatter.as_of);
  assert.equal(update.project.deployments.length, 2, "existing factory and new router both remain");
  assert.equal(update.project.deployments[1].address, "0x2222222222222222222222222222222222222222");
  assert.equal(update.project.deployments[1].verified, true);
  assert.equal(update.project.metrics[0].kind, "tvl");
  assert.equal(update.sources.sources.length, 3);
  assert.ok(update.research.includes("[verified S2]"), "packet receipt ids become canonical source ids");
  assert.ok(update.research.includes("## Engineering\n\n_Research pending._"));
  assert.ok(!("scoring" in update.project));
});

await test("unknown card evidence survives mapping, fallback and truncation without borrowed sources", async () => {
  for (const suffix of ["[unknown]", "[unknown]   "]) {
    const packet = await fixture("new-seed.md");
    packet.body = `## What could go wrong\n\n- No audit report was located. ${suffix}\n`;
    assert.deepEqual(compile(packet).project.risks, ["No audit report was located. [unknown]"]);
    assert.deepEqual(validateAgainst("project", compile(packet).project), []);
  }

  const packet = await fixture("new-seed.md");
  packet.body = "## What could go wrong\n\n- No audit report was located. [verified R-999]\n";
  assert.throws(() => compile(packet), /R-999 is referenced but not defined/);
  packet.body = `## What could go wrong\n\n- ${"The audit scope remains unresolved and needs investigation; ".repeat(8)} [unknown]\n`;
  const [risk] = compile(packet).project.risks;
  assert.ok(risk.length <= 200);
  assert.match(risk, /… \[unknown\]$/);
  assert.ok(!risk.includes("[claim"));

  packet.body = `## What could go wrong\n\n- ${"Some contract code exists but audit coverage remains unresolved; ".repeat(8)} [verified R-1] [unknown]\n`;
  const [mixed] = compile(packet).project.risks;
  assert.ok(mixed.length <= 200);
  assert.match(mixed, /… \[verified S1\] \[unknown\]$/);
});

await test("derived unknown reasons are not promoted to sourced claims and unknown risk paragraphs survive", async () => {
  const packet = await fixture("new-seed.md");
  packet.body = `## Why it matters\n\nProduct utility is unknown. Activity is unknown. Adoption is unknown. [unknown]\n\n## What could go wrong\n\nNo audit report was located. [unknown]\n`;
  const result = compile(packet);
  assert.equal(result.project.why_people_care, undefined);
  assert.deepEqual(result.project.risks, ["No audit report was located. [unknown]"]);
  assert.ok(result.notices.some(n => n.includes("every bullet needs a source id")));
  for (const risk of ["No audit report.", "No audit report. [verified]", "No audit report. [unknown S1]"]) {
    assert.ok(validateAgainst("project", { ...result.project, risks: [risk] }).length,
      "only an explicit source-free unknown or a source-backed evidence tag is allowed");
  }
  assert.ok(validateAgainst("project", { ...result.project,
    why_people_care: ["One. [unknown]", "Two. [claim S1]", "Three. [claim S1]"] }).length,
    "schema still rejects unknown positive reasons");

  packet.body = "## What could go wrong\n\n- Missing audit scope.\n- Code exists. [verified R-1]\n- Audit coverage remains disputed. [disputed R-1]\n";
  assert.deepEqual(compile(packet).project.risks, [
    "Missing audit scope. [claim S1]",
    "Code exists. [verified S1]",
    "Audit coverage remains disputed. [disputed S1]",
  ], "untagged fallback and explicit sourced classes keep their existing behavior");
});

await test("an explicit conflict keeps prior state and files the disagreement", async () => {
  const seed = compile(await fixture("new-seed.md"));
  const prior = compile(await fixture("update-full.md"), seed.project, seed.censusRow, seed.sources, seed.feed);
  const conflict = compile(await fixture("conflict-update.md"), prior.project, prior.censusRow, prior.sources, prior.feed);
  assert.ok(conflict.project.deployments.some((row) => row.address === "0x2222222222222222222222222222222222222222"), "prior deployment remains");
  assert.ok(conflict.project.findings.unresolved.some((row) => row.text.includes("CON-1")));
  assert.equal(conflict.changelog.type, "correction");
  assert.equal(conflict.project.lifecycle, "mainnet", "packet without a new mainnet receipt does not demote prior state");
});

await test("mainnet cannot be created from an unreproduced deployment", async () => {
  const packet = await fixture("new-seed.md");
  packet.frontmatter.deployments[0].address.exists_on_4663 = false;
  const result = compile(packet);
  assert.equal(result.project.lifecycle, "announced");
  assert.ok(result.project.findings.missing.some((row) => row.text.includes("Mainnet status was not promoted")));
  assert.equal(result.project.deployments[0].verified, false);
});

await test("findings keep list items, continuations and paragraph evidence separate", async () => {
  const packet = await fixture("update-full.md");
  packet.frontmatter.packet_tier = "seed";
  packet.body = `## Verification passes

- Contract code exists. [verified R-1]
- Audit scope is unresolved. [unknown]
- Product copy says swaps work. [claim R-2]

A standalone observation. [claim R-2]

## Material risks

1. Routing remains disputed. [disputed R-2]
2. A long risk has
   an indented continuation. [claim R-2]
* Untagged evidence gap.
+ Multiple supporting sources. [verified R-1] [claim R-2]
+ Still unresolved despite a separate code read. [unknown] [verified R-1]

### Examples, not findings
\x60\x60\x60md
## Verification passes
- Example assertion. [verified R-1]
\x60\x60\x60
`;
  const out = compile(packet);
  assert.deepEqual(out.project.findings.positive.map(r => r.text), [
    "Contract code exists.", "Product copy says swaps work.", "A standalone observation.",
  ]);
  assert.deepEqual(out.project.findings.risk, [
    { text: "Audit scope is unresolved.", class: "unknown" },
    { text: "Routing remains disputed.", class: "disputed", sources: ["S2"] },
    { text: "A long risk has an indented continuation.", class: "claim", sources: ["S2"] },
    { text: "Untagged evidence gap.", class: "unknown" },
    { text: "Multiple supporting sources.", class: "claim", sources: ["S1", "S2"] },
    { text: "Still unresolved despite a separate code read.", class: "unknown" },
  ]);
  assert.ok(out.project.findings.unresolved.some(r => r.text === "Routing remains disputed."));
  assert.deepEqual(validateAgainst("project", out.project), []);
  const again = compile(packet, out.project, out.censusRow, out.sources, out.feed);
  assert.deepEqual(again.project.findings, out.project.findings, "replay does not duplicate findings");
});

await test("mainnet uses the matching prose-address reproduction, not source-code verification", async () => {
  const packet = await fixture("new-seed.md");
  const address = packet.frontmatter.deployments[0].address.value;
  packet.frontmatter.claims[0].value = `Factory deployed at ${address}.`;
  packet.frontmatter.deployments[0].address.explorer_source_verified = false;
  const out = compile(packet);
  assert.equal(out.project.lifecycle, "mainnet");
  assert.equal(out.project.deployments[0].verified, true, "deployment existence is reproduced");
  assert.equal(packet.frontmatter.deployments[0].address.explorer_source_verified, false);
  assert.ok(!out.project.findings.missing.some(r => r.text.includes("Mainnet status was not promoted")));
  for (const edit of [
    f => { f.claims[0].value = "Factory 0x2222222222222222222222222222222222222222"; },
    f => { f.claims[0].value = `${address}0`; },
    f => { f.claims[0].value = `${address} and 0x2222222222222222222222222222222222222222`; },
    f => { f.claims[0].field = "control.owner"; },
    f => { f.reproductions[0].chain_id = 1; },
    f => { f.reproductions[0].method = "official-crosslink"; },
    f => { f.receipts[0].authority = "primary"; },
    f => { f.receipts[0].authenticity = "unconfirmed"; },
    f => { f.receipts[0].url = "https://example.test/address/0x2222222222222222222222222222222222222222"; },
    f => { f.deployments[0].address.chain = "ethereum"; },
    f => { f.receipts.push({ ...f.receipts[0], id: "R-2" }); f.reproductions[0].receipt_ids = ["R-2"]; },
  ]) {
    const bad = structuredClone(packet); edit(bad.frontmatter);
    assert.equal(compile(bad).project.lifecycle, "announced", JSON.stringify(bad.frontmatter.claims[0]));
  }
  packet.frontmatter.claims[0].value = { address, note: "Factory" };
  assert.equal(compile(packet).project.lifecycle, "mainnet", "structured addresses also work");
});

await test("batch RPC evidence can bind a separately linked official contract table", async () => {
  const packet = await fixture("new-seed.md");
  const f = packet.frontmatter, address = f.deployments[0].address.value;
  f.receipts[0].url = "https://rpc.example.test";
  f.receipts[0].title = "Batch code read";
  f.receipts[0].excerpt = "Non-empty code on the linked official contract table.";
  f.reproductions[0].result = "Non-empty code on the linked official contract table.";
  f.receipts.push({ ...f.receipts[0], id: "R-2", authority: "primary", kind: "docs",
    url: "https://example.test/contracts", excerpt: `Factory ${address}` });
  f.claims[0].receipt_ids.push("R-2");
  f.reproductions[0].receipt_ids.push("R-2");
  assert.equal(compile(packet).project.lifecycle, "mainnet");
  f.reproductions[0].receipt_ids = ["R-1"];
  assert.equal(compile(packet).project.lifecycle, "announced", "unlinked docs cannot supply the reproduced address");
});

await test("retaining mainnet is not reported as a rejected lifecycle promotion", async () => {
  const packet = await fixture("new-seed.md");
  const before = compile(packet);
  packet.frontmatter.deployments[0].address.exists_on_4663 = false;
  const out = compile(packet, before.project, before.censusRow, before.sources, before.feed);
  assert.equal(out.project.lifecycle, "mainnet");
  assert.ok(!out.project.findings.missing.some(r => r.text.includes("Mainnet status was not promoted")));
});

await test("findings recovery preserves all other fields, refuses drift, and is idempotent", async () => {
  const accepted = compile(await fixture("new-seed.md")).project;
  const findings = { ...structuredClone(accepted.findings), risk: [{ text: "Audit scope unresolved.", class: "unknown" }] };
  const fixed = planFindingsRepair(accepted, accepted, findings);
  assert.deepEqual({ ...fixed, findings: accepted.findings }, accepted);
  assert.deepEqual(planFindingsRepair(accepted, fixed, findings), fixed);
  assert.throws(() => planFindingsRepair(accepted, { ...accepted, summary: "Later editorial copy." }, findings), /project changed/);
  assert.throws(() => planFindingsRepair(accepted, { ...accepted, findings: { ...findings, risk: [{ text: 'Later review note.', class: 'unknown' }] } }, findings), /findings drifted/);
  assert.throws(() => planFindingsRepair(accepted, accepted, { ...findings, risk: [{ text: "Missing receipt.", class: "verified" }] }), /sources/);
});

await test("collector evidence labels cannot grant identity approval or erase a hold", async () => {
  const packet = await fixture("new-seed.md");
  packet.frontmatter.classification.evidence_state = "verified";
  const seed = compile(packet);
  assert.equal(seed.censusRow.identity.status, "provisional");
  for (const status of ["verified", "conflicted"]) {
    seed.censusRow.identity = { ...seed.censusRow.identity, status, ...(status === "conflicted" ? {conflict_ids:["CON-99"]} : {}) };
    const result = compile(packet, seed.project, seed.censusRow, seed.sources, seed.feed);
    assert.equal(result.censusRow.identity.status, status);
    if (status === "conflicted") assert.deepEqual(result.censusRow.identity.conflict_ids, ["CON-99"]);
  }
});

async function treeSnapshot(root) {
  const result = {};
  async function walk(dir, relative = "") {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const rel = join(relative, entry.name);
      if (entry.isDirectory()) await walk(join(dir, entry.name), rel);
      else result[rel] = await readFile(join(dir, entry.name), "utf8");
    }
  }
  await walk(root);
  return result;
}

await test("CLI writes only canonical files, is idempotent, and supports dry-run", async () => {
  const root = await mkdtemp(join(tmpdir(), "proofline-compile-"));
  const dryRoot = await mkdtemp(join(tmpdir(), "proofline-compile-dry-"));
  try {
    for (const dir of [root, dryRoot]) {
      await mkdir(join(dir, "projects"), { recursive: true });
      await mkdir(join(dir, "sources"), { recursive: true });
      await mkdir(join(dir, "research"), { recursive: true });
      await mkdir(join(dir, "feed"), { recursive: true });
      await writeFile(join(dir, "census.yaml"), "[]\n");
      await writeFile(join(dir, "changelog.yaml"), "# One entry per published change. Newest last.\n");
    }
    await runCompile({ packetPath: "fixtures/compile-packet/new-seed.md", contentDir: root, enforceMinimums: false });
    const first = await treeSnapshot(root);
    await runCompile({ packetPath: "fixtures/compile-packet/new-seed.md", contentDir: root, enforceMinimums: false });
    assert.deepEqual(await treeSnapshot(root), first, "second compile produces no diff");
    const changelog = parse(await readFile(join(root, "changelog", "alpha.yaml"), "utf8"));
    assert.equal(changelog.length, 1, "same packet does not append changelog twice");
    await runCompile({ packetPath: "fixtures/compile-packet/new-seed.md", contentDir: dryRoot, dryRun: true, enforceMinimums: false });
    assert.equal((await readdir(join(dryRoot, "projects"))).length, 0, "dry-run writes nothing");
    // Isolated legacy fixture: exercise the full canonical schema path, not only pure compile().
    const unknownPacketPath = join(root, "unknown-risk.md");
    await writeFile(unknownPacketPath, `${await readFile("fixtures/compile-packet/new-seed.md", "utf8")}\n## What could go wrong\n\n- No audit report was located. [unknown]\n`);
    const beforeDry = await treeSnapshot(root);
    const unknown = await runCompile({ packetPath: unknownPacketPath, contentDir: root, dryRun: true, enforceMinimums: false });
    assert.deepEqual(unknown.project.risks, ["No audit report was located. [unknown]"]);
    assert.deepEqual(await treeSnapshot(root), beforeDry, "unknown-risk dry-run writes nothing");
  } finally {
    await rm(root, { recursive: true, force: true });
    await rm(dryRoot, { recursive: true, force: true });
  }
});

if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
console.log("all compiler tests passed");
