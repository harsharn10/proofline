#!/usr/bin/env node
// Tests for scripts/compile-inbox.mjs against a throwaway git repo built in a temp dir: a bare
// `origin`, a main carrying one compiled project, and a producer branch carrying packets. No network.
//   node scripts/test-compile-inbox.mjs

import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { parse, stringify } from "yaml";
import { compileInbox, duplicateReason, failingSlugs, inventoryCandidateCount, isInventoryPacket, researchIntake, ownTokenDuplicate } from "./compile-inbox.mjs";
import { runCompile } from "./compile-packet.mjs";

const execFileAsync = promisify(execFile);
const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
// The one fixture packet that satisfies both gates the pipeline applies: validatePacket (what
// validate.mjs walks the inbox with) and checkPacket (what compile() refuses a packet on).
const SEED = await readFile(join(ROOT, "fixtures/compile-packet/icarus-fields.md"), "utf8");
const PRODUCER_BRANCH = "grok-heavy/standing/updates";

let failures = 0;
async function test(name, fn) {
  try { await fn(); console.log(`ok   ${name}`); }
  catch (error) { failures++; console.error(`FAIL ${name}: ${error.stack ?? error.message}`); }
}

const git = async (cwd, ...args) => (await execFileAsync("git", args, { cwd, maxBuffer: 32 << 20 })).stdout;

/**
 * A packet for `slug` derived from the Icarus Fields fixture. The fixture is self-contained — one name,
 * one domain, one handle, one symbol, one address — so renaming all of them yields another valid packet
 * with its own identity.
 */
function packetFor({ slug, name, symbol, address, workId, asOf = "2026-09-03T09:00:00Z", summary = null, mutate = (text) => text }) {
  let text = SEED
    .replaceAll("Icarus Fields", name)
    .replaceAll("icarus-fields", slug)
    .replace(/\bfields\b/gi, slug) // the domain, handle and URLs — never the `affected_fields` key
    .replaceAll("FLD", symbol)
    .replaceAll("0x1111111111111111111111111111111111111111", address)
    .replace(/^work_id: .*$/m, `work_id: ${workId}`)
    .replace(/^producer: .*$/m, "producer: grok-heavy")
    .replace(/^role: .*$/m, "role: collector")
    .replace(/^as_of: .*$/m, `as_of: ${asOf}`)
    .replace(/^owned_slugs: .*$/m, `owned_slugs: [${slug}]`)
    .replace(/^allowed_paths: .*$/m, `allowed_paths: [research/inbox/packets/${slug}/${workId}.md]`);
  // The first paragraph under "## What it is" is what compile() turns into the published summary.
  if (summary) text = text.replace(/(## What it is\n\n)[^\n]*/, `$1${summary}`);
  return mutate(text);
}

const packetPath = (slug, workId) => `research/inbox/packets/${slug}/${workId}.md`;

/**
 * A repo shaped like proofline: content/ with one compiled project on main, an empty packet root, and
 * a producer branch carrying `packets` (a map of repo-relative path to text). Returns the work tree.
 */
async function fixtureRepo(packets, { ownToken = null } = {}) {
  const root = await mkdtemp(join(tmpdir(), "proofline-compile-inbox-"));
  const origin = join(root, "origin.git");
  const work = join(root, "work");
  await execFileAsync("git", ["init", "--bare", "-b", "main", origin]);
  await execFileAsync("git", ["init", "-b", "main", work]);
  for (const [key, value] of [["user.name", "test"], ["user.email", "test@example.com"], ["commit.gpgsign", "false"]])
    await git(work, "config", key, value);
  await git(work, "remote", "add", "origin", origin);

  for (const dir of ["projects", "sources", "research", "feed", "changelog", "pulled"])
    await mkdir(join(work, "content", dir), { recursive: true });
  await mkdir(join(work, "research/inbox/packets"), { recursive: true });
  await writeFile(join(work, "research/inbox/packets/.gitkeep"), "");
  await writeFile(join(work, "content/census.yaml"), "[]\n");
  await writeFile(join(work, "content/accounts.yaml"), "[]\n");
  await writeFile(join(work, "content/site.yaml"), await readFile(join(ROOT, "content/site.yaml"), "utf8"));
  await writeFile(join(work, ".gitignore"), "build\nnode_modules\n");

  // main carries one project, compiled the same way the pipeline compiles: alpha never appears as a
  // packet on a producer branch, so it stands for content that is already published.
  const seedPath = join(work, packetPath("alpha", "WORK-20260902-grok-heavy-alpha"));
  await mkdir(dirname(seedPath), { recursive: true });
  await writeFile(seedPath, packetFor({
    slug: "alpha", name: "Alpha", symbol: "ALP", address: "0x1111111111111111111111111111111111111111",
    workId: "WORK-20260902-grok-heavy-alpha", asOf: "2026-09-02T09:00:00Z",
  }));
  const previous = process.cwd();
  process.chdir(work);
  try { await runCompile({ packetPath: seedPath, contentDir: join(work, "content") }); }
  finally { process.chdir(previous); }
  if (ownToken) {
    const path = join(work, "content/projects/alpha.yaml");
    const project = parse(await readFile(path, "utf8"));
    project.deployments.push({label:"Alpha own token",role:"token",chain:"robinhood-chain",address:ownToken,verified:false,sources:["S1"]});
    await writeFile(path,stringify(project));
  }

  await git(work, "add", "-A");
  await git(work, "commit", "-q", "-m", "fixture: main with one project");
  await git(work, "push", "-q", "origin", "main");

  await git(work, "checkout", "-q", "-b", PRODUCER_BRANCH);
  for (const [path, text] of Object.entries(packets)) {
    await mkdir(dirname(join(work, path)), { recursive: true });
    await writeFile(join(work, path), text);
  }
  await git(work, "add", "-A");
  await git(work, "commit", "-q", "--allow-empty", "-m", "packets\n\nProducer: grok-heavy");
  await git(work, "push", "-q", "origin", PRODUCER_BRANCH);
  await git(work, "checkout", "-q", "main");
  await git(work, "fetch", "-q", "origin");
  return { root, work };
}

/** Run the compiler inside the fixture repo, the way the workflow runs it from the repo root. */
async function run(work, options = {}) {
  const previous = process.cwd();
  process.chdir(work);
  try { return await compileInbox({ branches: [PRODUCER_BRANCH], log: process.env.DEBUG_COMPILE_INBOX ? console.log : () => {}, ...options }); }
  finally { process.chdir(previous); }
}

async function snapshot(dir) {
  const out = {};
  async function walk(current, relative = "") {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const rel = join(relative, entry.name);
      if (entry.isDirectory()) await walk(join(current, entry.name), rel);
      else out[rel] = await readFile(join(current, entry.name), "utf8");
    }
  }
  await walk(dir);
  return out;
}

const VALID = packetFor({ slug: "beta", name: "Beta", symbol: "BET", address: "0x2222222222222222222222222222222222222222", workId: "WORK-20260903-grok-heavy-beta" });
// A leaf that is not in schema/taxonomy.json: the packet schema rejects it, so the packet never compiles.
const INVALID = packetFor({
  slug: "gamma", name: "Gamma", symbol: "GAM", address: "0x3333333333333333333333333333333333333333",
  workId: "WORK-20260903-grok-heavy-gamma",
  mutate: (text) => text.replace("primary_leaf: tooling/scanner", "primary_leaf: tooling/not-a-real-leaf"),
});

await test("a valid packet compiles and an invalid one is reported and skipped", async () => {
  const { root, work } = await fixtureRepo({
    [packetPath("beta", "WORK-20260903-grok-heavy-beta")]: VALID,
    [packetPath("gamma", "WORK-20260903-grok-heavy-gamma")]: INVALID,
  });
  try {
    const before = await snapshot(join(work, "content"));

    // --dry proves the same thing and leaves the tree exactly as it found it.
    const dry = await run(work, { branches: [PRODUCER_BRANCH], dry: true });
    assert.equal(dry.ok, true, "the batch passes its gates");
    assert.deepEqual(dry.compiled, ["beta"]);
    assert.deepEqual(await snapshot(join(work, "content")), before, "a dry run writes nothing");
    assert.equal((await git(work, "status", "--porcelain")).trim(), "", "a dry run leaves no untracked packet behind");

    const report = await run(work, { branches: [PRODUCER_BRANCH] });
    assert.equal(report.ok, true);
    assert.deepEqual(report.compiled, ["beta"], "only the valid packet compiles");
    assert.ok(existsSync(join(work, "content/projects/beta.yaml")), "beta reached content/");
    assert.ok(!existsSync(join(work, "content/projects/gamma.yaml")), "gamma never reached content/");

    const census = parse(await readFile(join(work, "content/census.yaml"), "utf8"));
    assert.deepEqual(census.map((row) => row.slug).sort(), ["alpha", "beta"], "one new registry row, and alpha is untouched");

    const branch = report.branches.find((entry) => entry.branch === PRODUCER_BRANCH);
    assert.deepEqual(branch.compiled, ["beta"]);
    assert.equal(branch.skipped.length, 1, "the invalid packet is reported against its branch");
    assert.equal(branch.skipped[0].path, packetPath("gamma", "WORK-20260903-grok-heavy-gamma"));
    assert.ok(branch.skipped[0].errors.some((error) => /not-a-real-leaf|allowed values/.test(error)), branch.skipped[0].errors.join("; "));

    // The compiled packet is staged for main; the skipped one is not left behind for the workflow to commit.
    assert.ok(existsSync(join(work, packetPath("beta", "WORK-20260903-grok-heavy-beta"))));
    assert.ok(!existsSync(join(work, packetPath("gamma", "WORK-20260903-grok-heavy-gamma"))));
    assert.ok(report.shareBar, "a passing run records the share bar before and after");
  } finally { await rm(root, { recursive: true, force: true }); }
});

await test("a second run over the same branch produces no diff", async () => {
  const { root, work } = await fixtureRepo({
    [packetPath("beta", "WORK-20260903-grok-heavy-beta")]: VALID,
    [packetPath("gamma", "WORK-20260903-grok-heavy-gamma")]: INVALID,
  });
  try {
    await run(work, { branches: [PRODUCER_BRANCH] });
    // What the workflow does after a green run: commit the compiled content plus the packets it
    // compiled, and push to main.
    await git(work, "add", "content", "research/inbox/packets");
    await git(work, "commit", "-q", "-m", "compile: 1 packets from grok-heavy/standing/updates\n\nProducer: compile-bot");
    await git(work, "push", "-q", "origin", "HEAD:main");
    await git(work, "fetch", "-q", "origin");

    const before = await snapshot(join(work, "content"));
    const report = await run(work, { branches: [PRODUCER_BRANCH] });
    assert.equal(report.ok, true);
    assert.deepEqual(report.compiled, [], "the packet main already carries is not compiled again");
    assert.deepEqual(await snapshot(join(work, "content")), before, "no content diff on the second run");
    assert.equal((await git(work, "status", "--porcelain")).trim(), "", "nothing is left in the working tree");
    // The packet that never compiled still differs from main, so it is still reported — which is why
    // the workflow keys its PR comment on the error set rather than commenting every six hours.
    const branch = report.branches.find((entry) => entry.branch === PRODUCER_BRANCH);
    assert.equal(branch.skipped.length, 1);
  } finally { await rm(root, { recursive: true, force: true }); }
});

// "degen" is on the banned-word list (scripts/lib/voice.mjs). It survives packet validation and lands in
// the compiled summary, where `validate.mjs --release` turns it into an error.
const HYPE = packetFor({
  slug: "delta", name: "Delta", symbol: "DEL", address: "0x4444444444444444444444444444444444444444",
  workId: "WORK-20260903-grok-heavy-delta",
  summary: "Delta is a degen scanner that reads public Robinhood Chain state and publishes changes.",
});

await test("a packet whose compiled prose fails the release gate is dropped, and the rest of the batch lands", async () => {
  const { root, work } = await fixtureRepo({
    [packetPath("beta", "WORK-20260903-grok-heavy-beta")]: VALID,
    [packetPath("delta", "WORK-20260903-grok-heavy-delta")]: HYPE,
  });
  try {
    const report = await run(work, { branches: [PRODUCER_BRANCH] });
    assert.equal(report.ok, true, "the batch is recompiled without the offender and passes");
    assert.deepEqual(report.compiled, ["beta"]);
    assert.ok(existsSync(join(work, "content/projects/beta.yaml")), "the clean packet still lands");
    assert.ok(!existsSync(join(work, "content/projects/delta.yaml")));
    assert.ok(!existsSync(join(work, packetPath("delta", "WORK-20260903-grok-heavy-delta"))), "the dropped packet is not staged for main");
    const branch = report.branches.find((entry) => entry.branch === PRODUCER_BRANCH);
    assert.equal(branch.skipped.length, 1);
    assert.equal(branch.skipped[0].path, packetPath("delta", "WORK-20260903-grok-heavy-delta"));
    assert.ok(branch.skipped[0].errors.some((error) => /banned word "degen"/.test(error)), branch.skipped[0].errors.join("; "));
  } finally { await rm(root, { recursive: true, force: true }); }
});

await test("a gate failure no packet in the batch can fix reverts content/ and the packet root", async () => {
  const { root, work } = await fixtureRepo({
    [packetPath("beta", "WORK-20260903-grok-heavy-beta")]: VALID,
  });
  try {
    // main itself goes red: a banned word in a project no producer branch touches. Dropping packets
    // cannot fix that, so the run reverts everything rather than pushing a red main.
    const alpha = join(work, "content/projects/alpha.yaml");
    await writeFile(alpha, (await readFile(alpha, "utf8")).replace(/^summary: .*$/m, "summary: Alpha is a scanner that will moon once the indexer lands."));
    await git(work, "commit", "-q", "-am", "fixture: main goes red");
    await git(work, "push", "-q", "origin", "main");
    await git(work, "fetch", "-q", "origin");

    const before = await snapshot(join(work, "content"));
    const report = await run(work, { branches: [PRODUCER_BRANCH] });
    assert.equal(report.ok, false, "the gate fails");
    assert.equal(report.gates.validate.ok, false);
    assert.match(report.gates.validate.output, /banned word "moon"/);
    assert.deepEqual(await snapshot(join(work, "content")), before, "content/ is exactly as it was");
    assert.equal((await git(work, "status", "--porcelain")).trim(), "", "no packet is left staged for main");
    assert.ok(!existsSync(join(work, "content/projects/beta.yaml")), "the whole batch is reverted");
  } finally { await rm(root, { recursive: true, force: true }); }
});

await test("an inventory packet is counted and kept as a record, never compiled", async () => {
  // A discovery round files an inventory of candidate names. It is not a project: compiling it would
  // mint a registry row and a research document for a list.
  const inventory = packetFor({
    slug: "candidates", name: "Candidate inventory", symbol: "CND",
    address: "0x5555555555555555555555555555555555555555",
    workId: "WORK-20260903-grok-heavy-candidates",
    summary: "Names on Robinhood Chain that are not yet in the registry, with the surface each was seen on.",
    mutate: (text) => `${text.replace("entity_kind: protocol", "entity_kind: unknown")}
## Operations log

- Candidates listed: 42 (17 pads, 25 tokens).
`,
  });
  const { root, work } = await fixtureRepo({
    [packetPath("beta", "WORK-20260903-grok-heavy-beta")]: VALID,
    [packetPath("candidates", "WORK-20260903-grok-heavy-candidates")]: inventory,
  });
  try {
    const report = await run(work, { branches: [PRODUCER_BRANCH] });
    assert.equal(report.ok, true);
    assert.deepEqual(report.compiled, ["beta"], "the inventory is not compiled");
    assert.equal(report.inventory.length, 1);
    assert.equal(report.inventory[0].candidates, 42, "the operations-log count is the candidate count");
    assert.ok(!existsSync(join(work, "content/projects/candidates.yaml")));
    assert.ok(!existsSync(join(work, "content/sources/candidates.yaml")));
    const census = parse(await readFile(join(work, "content/census.yaml"), "utf8"));
    assert.ok(!census.some((row) => row.slug === "candidates"), "no registry row for an inventory");
    assert.ok(existsSync(join(work, packetPath("candidates", "WORK-20260903-grok-heavy-candidates"))),
      "the inventory is still kept as a record on main");
  } finally { await rm(root, { recursive: true, force: true }); }
});

// The 2026-09-03 12:17, 17:27 and 22:07 runs all died here: two newcomers were second names for rows the
// registry already had, and the collision was filed against the *established* packet, which the batch had
// not touched — so the recovery had nothing it was allowed to drop and the whole run exited 2.
await test("a newcomer that duplicates an established name is skipped, and the batch still lands", async () => {
  // `alp` records alpha under possible_matches, so the packet itself validates; it collides only once it
  // is compiled and the registry holds two rows claiming @alpha.
  const duplicate = packetFor({
    slug: "alp", name: "Alpha Redux", symbol: "ALR", address: "0x6666666666666666666666666666666666666666",
    workId: "WORK-20260903-grok-heavy-alp",
    mutate: (text) => text
      .replace('official_handle: "@alp"', 'official_handle: "@alpha"')
      .replace("aliases: []", 'aliases: [Alpha]')
      .replace("possible_matches: []", 'possible_matches: [{ slug: alpha, signals: [shared-handle], contrary_signals: ["different address"] }]'),
  });
  const { root, work } = await fixtureRepo({
    [packetPath("beta", "WORK-20260903-grok-heavy-beta")]: VALID,
    [packetPath("alp", "WORK-20260903-grok-heavy-alp")]: duplicate,
  });
  try {
    const report = await run(work, { branches: [PRODUCER_BRANCH] });
    assert.equal(report.ok, true, "the batch recompiles without the duplicate and passes its gates");
    assert.deepEqual(report.compiled, ["beta"], "the clean packet still lands");
    assert.deepEqual(
      report.duplicates.map((entry) => [entry.slug, entry.other]), [["alp", "alpha"]],
      "the newcomer is the duplicate, never the established row",
    );
    assert.match(report.duplicates[0].surface, /@alpha/);
    assert.ok(!existsSync(join(work, "content/projects/alp.yaml")), "no second row for a name the registry has");
    assert.ok(existsSync(join(work, "content/projects/alpha.yaml")), "the established row is untouched");
    assert.ok(!existsSync(join(work, packetPath("alp", "WORK-20260903-grok-heavy-alp"))));

    const branch = report.branches.find((entry) => entry.branch === PRODUCER_BRANCH);
    assert.equal(branch.skipped.length, 1);
    assert.equal(branch.skipped[0].path, packetPath("alp", "WORK-20260903-grok-heavy-alp"));
    assert.match(branch.skipped[0].errors[0], /^duplicate of alpha on .*; write an update packet for alpha instead of a new name$/);
    // The line filed against main's own packet is charged to the newcomer, not left to abort the run.
    assert.ok(
      branch.skipped[0].errors.some((error) => error.startsWith("research/inbox/packets/alpha/")),
      branch.skipped[0].errors.join("; "),
    );
  } finally { await rm(root, { recursive: true, force: true }); }
});

await test("identity collisions are charged to whichever side of the pair is new in this batch", () => {
  // Verbatim from the 2026-09-03 22:07 run.
  const output = [
    'error census identity "Down to Finance" on dtf collides with canonical slug downto',
    'error census identity "Longbow" on bow collides with canonical slug longbow',
    "error research/inbox/packets/downto/WORK-20260902-grok-bot-downto.md: identity matches canonical slug dtf on the official handle @downto_finance; record it under identity.possible_matches",
    "error research/inbox/packets/downto/WORK-20260903-grok-heavy-icarus-research.md: identity matches canonical slug dtf on the official handle @downto_finance; record it under identity.possible_matches",
    "error research/inbox/packets/longbow/WORK-20260903-grok-heavy-icarus-research.md: identity matches canonical slug bow on the official handle @longbowlend; record it under identity.possible_matches",
    'error research/saylormoon.md: banned word "moon"',
  ].join("\n");

  const blamed = failingSlugs(output, new Set(["dtf", "bow", "saylormoon"]));
  assert.deepEqual([...blamed.slugs].sort(), ["bow", "dtf", "saylormoon"], "never downto or longbow");
  assert.equal(blamed.unattributed, 0, "a census identity collision is attributed, not counted as unfixable");
  assert.deepEqual(blamed.duplicates.get("dtf"), { other: "downto", surface: "the official handle @downto_finance" });
  assert.deepEqual(blamed.duplicates.get("bow"), { other: "longbow", surface: "the official handle @longbowlend" });
  assert.equal(blamed.lines.get("dtf").length, 3, "both forms of the error follow the newcomer");
  assert.equal(blamed.lines.get("saylormoon").length, 1);
  assert.equal(
    duplicateReason(blamed.duplicates.get("dtf")),
    "duplicate of downto on the official handle @downto_finance; write an update packet for downto instead of a new name",
  );

  // With no newcomer on either side the pair is two established rows: nobody in the batch can fix it, so
  // the line falls back to the packet it was filed against and the run stops rather than dropping someone.
  const stale = failingSlugs(output, new Set());
  assert.deepEqual([...stale.slugs].sort(), ["downto", "longbow", "saylormoon"]);
  assert.equal(stale.duplicates.size, 0);
  assert.equal(stale.unattributed, 2, "the two census identity lines name no packet path");
});

await test("inventory detection reads both the reserved slug and an unknown-entity inventory name", () => {
  assert.equal(isInventoryPacket({ slug: "discovery-inventory" }), true);
  assert.equal(isInventoryPacket({ slug: "round-2", identity: { entity_kind: "unknown", canonical_name: "Candidate Inventory" } }), true);
  assert.equal(isInventoryPacket({ slug: "pons", identity: { entity_kind: "protocol", canonical_name: "Pons" } }), false);
  assert.equal(isInventoryPacket({ slug: "warehouse", identity: { entity_kind: "protocol", canonical_name: "Inventory Finance" } }), false,
    "a real protocol with inventory in its name is still a project");
  assert.equal(inventoryCandidateCount({ body: "- Candidates listed: 56 (31 pads, 25 tokens)." }), 56);
  assert.equal(inventoryCandidateCount({ body: "", frontmatter: { identity: { possible_matches: [{}, {}, {}] } } }), 3);
  assert.equal(inventoryCandidateCount({ body: "## Candidates\n\n- one\n- two\n" }), 2);
  assert.equal(inventoryCandidateCount({ body: "nothing here" }), 0);
});

await test("conflicting same-path producer packets never depend on branch iteration order", async () => {
  const path = packetPath("beta", "WORK-20260903-grok-heavy-beta");
  const { root, work } = await fixtureRepo({ [path]: VALID });
  try {
    await git(work, "checkout", "-q", "-b", "grok/other", "main");
    await mkdir(dirname(join(work,path)), { recursive:true });
    await writeFile(join(work,path), VALID + "\nDifferent producer observation.\n");
    await git(work,"add","research"); await git(work,"commit","-q","-m","other packet");
    await git(work,"push","-q","origin","grok/other"); await git(work,"checkout","-q","main");
    for (const branches of [[PRODUCER_BRANCH,"grok/other"],["grok/other",PRODUCER_BRANCH]]) {
      const report=await run(work,{branches});
      assert.deepEqual(report.compiled,[]);
      assert.equal(report.status,'blocked','safe conflict hold is not an ordinary empty inbox');
      assert.equal(report.branches.flatMap(b=>b.skipped).length,2);
      assert.ok(report.branches.flatMap(b=>b.skipped).every(s=>s.errors[0].includes("conflicting")));
      assert.equal((await git(work,"status","--porcelain")).trim(),"");
    }
  } finally { await rm(root,{recursive:true,force:true}); }
});

await test("empty and inaccessible producer inputs have distinct operational outcomes", async () => {
  const {root,work}=await fixtureRepo({});
  try {
    const empty=await run(work,{branches:[PRODUCER_BRANCH]});
    assert.equal(empty.status,'no-change');assert.equal(empty.ok,true);
    await assert.rejects(run(work,{branches:['grok/missing']}),/couldn't find remote ref/,'fetch failures stop the workflow');
    const missing=await run(work,{branches:['grok/missing'],fetch:false});
    assert.equal(missing.status,'blocked');assert.equal(missing.ok,true,'safe no-write execution remains successful');
    const persisted=JSON.parse(await readFile(join(work,'build/compile-report.json'),'utf8'));
    assert.equal(persisted.status,'blocked');
  } finally {await rm(root,{recursive:true,force:true});}
});

await test("active research intake follows PR lifecycle and fails closed", async () => {
  const row = {number:62,state:"open",draft:false,head:{ref:PRODUCER_BRANCH,sha:"a".repeat(40),repo:{full_name:"owner/repo"}},base:{ref:"main",repo:{full_name:"owner/repo"}}};
  assert.equal(researchIntake([[row]])[0].state,"active");
  assert.equal(researchIntake([{...row,state:"closed"}])[0].state,"retired");
  assert.equal(researchIntake([{...row,draft:true}])[0].state,"held");
  assert.equal(researchIntake([{...row,head:{...row.head,repo:{full_name:"fork/repo"}}}])[0].state,"out-of-scope");
  assert.equal(researchIntake([{...row,head:{...row.head,ref:"grok-bot/new"}}])[0].state,"active");
  for (const bad of [undefined,{},[{}],[row,row]]) assert.throws(()=>researchIntake(bad));
  const {root,work}=await fixtureRepo({[packetPath("beta","WORK-20260903-grok-heavy-beta")]:VALID});
  try {
    const head=(await git(work,"rev-parse",`origin/${PRODUCER_BRANCH}`)).trim();
    const current={...row,head:{...row.head,sha:head}};
    const empty=await run(work,{branches:[],openPrs:[]});
    assert.equal(empty.status,"no-change");assert.deepEqual(empty.branches,[]);
    const held=await run(work,{branches:[],openPrs:[{...current,draft:true}]});
    assert.equal(held.status,"no-change");assert.equal(held.intake[0].state,"held");
    await assert.rejects(run(work,{branches:[]}),/snapshot/);
    await assert.rejects(run(work,{branches:[],openPrs:[row]}),/head changed/);
    const active=await run(work,{branches:[],openPrs:[current]});
    assert.deepEqual(active.compiled,["beta"]);
  } finally {await rm(root,{recursive:true,force:true});}
});

await test("own-token proposals stay within canonical projects; shared launchpads do not merge projects", () => {
  const token="0x1111111111111111111111111111111111111111", factory="0x2222222222222222222222222222222222222222";
  const projects=[{slug:"protocol",deployments:[{role:"token",chain:"robinhood-chain",address:token},{role:"factory",chain:"robinhood-chain",address:factory}]}];
  const packet={slug:"token-copy",deployments:[{role:"token",address:{chain:"robinhood-chain",value:token}}]};
  assert.match(ownTokenDuplicate(packet,projects),/canonical project protocol/);
  assert.equal(ownTokenDuplicate({...packet,slug:"protocol"},projects),null);
  assert.match(ownTokenDuplicate({...packet,slug:"unrelated"},[...projects,{slug:"unrelated",deployments:[]}]),/canonical project protocol/);
  assert.equal(ownTokenDuplicate({slug:"independent",deployments:[{role:"token",address:{chain:"robinhood-chain",value:"0x3333333333333333333333333333333333333333"}},{role:"factory",address:{chain:"robinhood-chain",value:factory}}]},projects),null);
  assert.equal(ownTokenDuplicate({...packet,deployments:[{role:"token",address:{chain:"another-chain",value:token}}]},projects),null);
});

await test("compiler holds a new profile for an existing canonical own token before writing content", async () => {
  const token="0x1111111111111111111111111111111111111111";
  const duplicate = VALID.replace("deployments: []", `deployments: [{label: Own token, role: token, address: {chain: robinhood-chain, value: "${token}"}, receipt_ids: [R-1]}]`);
  const {root,work}=await fixtureRepo({[packetPath("beta","WORK-20260903-grok-heavy-beta")]:duplicate},{ownToken:token});
  try {
    const before=await snapshot(join(work,"content"));
    const report=await run(work);
    assert.equal(report.status,"blocked");assert.deepEqual(report.compiled,[]);
    assert.match(report.branches[0].skipped[0].errors[0],/token already belongs to canonical project alpha/);
    assert.deepEqual(await snapshot(join(work,"content")),before);
  } finally {await rm(root,{recursive:true,force:true});}
});

if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
console.log("all compile-inbox tests passed");
