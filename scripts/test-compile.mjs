import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parse } from "yaml";
import { parsePacket, checkPacket, compile, feedIdentity } from "./lib/packet.mjs";
import { runCompile } from "./compile-packet.mjs";

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
  } finally {
    await rm(root, { recursive: true, force: true });
    await rm(dryRoot, { recursive: true, force: true });
  }
});

if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
console.log("all compiler tests passed");
