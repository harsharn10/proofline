// Pipeline-fix tests (2026-09-01): the inbox YAML parse gate, the changelog vocabulary lint, stable
// review keys, and producer ids. Same shape as test.mjs — plain node asserts, one `ok <name>` line per
// group, non-zero exit on any failure. Run from the repo root: node scripts/test-pipeline.mjs
import assert from "node:assert/strict";
import { mkdtemp, mkdir, cp, rm, writeFile, appendFile, readFile, readdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parse, stringify } from "yaml";
import { validateInboxYaml, yamlParseErrors } from "./lib/inbox.mjs";
import { vocabularyWarnings } from "./lib/voice.mjs";
import { validateContent, v3FieldIssues } from "./lib/validate-content.mjs";
import { normalizeUrl, lifecycleDriftWarnings, mainnetReceiptFromPulled, deploymentReceiptFromPulled } from "./lib/checks.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { entryKey, legacyEntryKey, reviewKeyFor, selectUnsent, selectApproved, publicationFingerprint } from "./lib/telegram.mjs";
import { addSourceKeys, sourceKeyFor } from "./migrations/add-source-keys.mjs";
import { addFeedHashIds, feedIdFor } from "./migrations/add-feed-hash-ids.mjs";
import { splitChangelog } from "./migrations/split-changelog.mjs";
import { addReviewKeys } from "./migrations/add-review-keys.mjs";
import { parsePacket, validatePacket, checkPacket, compile, PRODUCER_IDS } from "./lib/packet.mjs";
import { checkResearch, REQUIRED_HEADINGS } from "./lib/research-md.mjs";
import { runCompile, censusTextWithRow } from "./compile-packet.mjs";
import { migrateLifecycle } from "./migrations/lifecycle-from-pulled.mjs";
import { backfillV3Fields, BATCH_PACKET } from "./migrations/backfill-v3-fields.mjs";

let failures = 0;
async function test(name, fn) {
  try { await fn(); console.log(`ok   ${name}`); }
  catch (err) { failures++; console.error(`FAIL ${name}: ${err.message}`); }
}

// 1. Inbox YAML: every parse error is reported as an error with file:line:col; .md files are skipped.
await test("inbox YAML parse failure is reported", async () => {
  const dir = await mkdtemp(join(tmpdir(), "proofline-inbox-"));
  try {
    await mkdir(join(dir, "nested"), { recursive: true });
    await writeFile(join(dir, "good.yaml"), "a: 1\nb: [x, y]\n");
    await writeFile(join(dir, "nested", "dup.yml"), "a: 1\na: 2\n");
    await writeFile(join(dir, "nested", "colon.yaml"), "- note: a plain scalar with a colon: breaks\n");
    await writeFile(join(dir, "README.md"), "not yaml: : :\n");
    const { errors, files } = await validateInboxYaml(dir);
    assert.equal(files, 3, "walks *.yaml and *.yml recursively and skips Markdown");
    assert.equal(errors.length, 2, errors.join("\n"));
    assert.ok(errors.some((e) => e.startsWith(`${join(dir, "nested", "dup.yml")}:2:1: `) && /unique/i.test(e)), `duplicate key names file:line:col — ${errors}`);
    assert.ok(errors.some((e) => e.startsWith(`${join(dir, "nested", "colon.yaml")}:1:`)), `colon scalar named — ${errors}`);
    assert.deepEqual(await validateInboxYaml(join(dir, "missing")), { errors: [], files: 0 }, "a missing directory is not an error");
  } finally { await rm(dir, { recursive: true, force: true }); }
  assert.deepEqual(yamlParseErrors("ok: true\n", "x.yaml"), []);
  assert.equal(yamlParseErrors("a: 1\na: 2\n", "x.yaml")[0], "x.yaml:2:1: Map keys must be unique");
  const live = await validateInboxYaml("research/inbox");
  assert.deepEqual(live.errors, [], "every research/inbox ledger parses");
  assert.ok(live.files > 0, "the live inbox has YAML files");
});

// 2. Internal vocabulary: the word list, the case rule, and the changelog wiring in validateContent.
await test("changelog lint catches internal vocabulary", async () => {
  assert.deepEqual(vocabularyWarnings("the desk's last check", "x"), ['x: internal vocabulary "the desk"', 'x: internal vocabulary "desk\'s"']);
  assert.deepEqual(vocabularyWarnings("The desk found the account quiet", "x"), ['x: internal vocabulary "the desk"'], "sentence-initial The");
  assert.deepEqual(vocabularyWarnings("per the Grok research desk", "x"), ['x: internal vocabulary "Grok"']);
  assert.deepEqual(vocabularyWarnings("SuperGrok reproduced it", "x"), ['x: internal vocabulary "SuperGrok"']);
  assert.deepEqual(
    vocabularyWarnings("the compiler assigns ids, the controller merges, and the S-id S4 is cited", "x"),
    ['x: internal vocabulary "the compiler"', 'x: internal vocabulary "the controller"', 'x: internal vocabulary "S-id"'],
  );
  assert.deepEqual(vocabularyWarnings("once the Desk exists; a desk lamp; readers grok it; Desk's design", "x"), [], "Squeeze's product name and the verb are not hits");
  assert.deepEqual(vocabularyWarnings("", "x"), []);
  assert.deepEqual(vocabularyWarnings(undefined, "x"), []);

  const root = await mkdtemp(join(tmpdir(), "proofline-content-"));
  try {
    await cp("content", root, { recursive: true });
    const { errors: baseline } = await validateContent(root);
    assert.deepEqual(baseline, [], "the live content tree validates clean");
    await appendFile(join(root, "changelog", "pons.yaml"), [
      "- date: 2026-09-01", "  slug: pons", "  type: finding", "  severity: Info", "  title: Fixture entry",
      "  detail: The desk found nothing new, per Grok.", "  prior: null", "  new: null", "  reviewer: harsharn10",
      "  methodology_version: proofline-v1.0", "",
    ].join("\n"));
    const { errors } = await validateContent(root);
    // The fixture entry is appended last, so its index is whatever the live file's length is — never hard-code it.
    assert.ok(errors.some((e) => /^changelog\.yaml: \[\d+\] 2026-09-01 pons finding detail: internal vocabulary "the desk"$/.test(e)), errors.join("\n"));
    assert.ok(errors.some((e) => /^changelog\.yaml: \[\d+\] 2026-09-01 pons finding detail: internal vocabulary "Grok"$/.test(e)), errors.join("\n"));
    assert.equal(errors.length, 2, `only the fixture entry fails — ${errors.join("\n")}`);
  } finally { await rm(root, { recursive: true, force: true }); }
});

// 3. Stable review keys: entryKey prefers review_key; legacy sent keys and legacy-keyed decisions still resolve.
await test("entryKey prefers review_key", async () => {
  const e = { date: "2026-08-31", slug: "pons", type: "score", title: "Score published" };
  assert.equal(entryKey(e), "2026-08-31|pons|score|Score published", "fallback without review_key");
  assert.equal(entryKey({ ...e, review_key: "abc123abc123" }), "abc123abc123");
  assert.equal(legacyEntryKey({ ...e, review_key: "abc123abc123" }), "2026-08-31|pons|score|Score published");
  assert.match(reviewKeyFor(e), /^[a-f0-9]{16}$/);
  assert.equal(reviewKeyFor(e), reviewKeyFor({ ...e, detail: "edited", review_key: "ignored" }), "derived from date|slug|type|title only");
  assert.notEqual(reviewKeyFor(e), reviewKeyFor({ ...e, title: "Other title" }));
  assert.deepEqual(validateAgainst("changelog", [{ ...e, severity: "Info", detail: "d", prior: null, new: null, reviewer: "r", methodology_version: "proofline-v1.0", review_key: reviewKeyFor(e) }]), []);
  assert.ok(validateAgainst("changelog", [{ ...e, severity: "Info", detail: "d", prior: null, new: null, reviewer: "r", methodology_version: "proofline-v1.0", review_key: "2026-08-31|pons" }]).length > 0, "review_key must be hex");

  const channel = { event: "research-update", delivery: "same-day", headline: "h", summary: "s" };
  const keyed = { ...e, review_key: reviewKeyFor(e), channel };
  assert.deepEqual(selectUnsent([keyed], { sent_keys: [legacyEntryKey(e)] }), [], "an entry sent under the legacy key is not re-sent after migration");
  assert.deepEqual(selectUnsent([keyed], { sent_keys: [reviewKeyFor(e)] }), [], "the stable key counts as sent too");
  assert.equal(selectUnsent([keyed], { sent_keys: [] }).length, 1);
  const fp = publicationFingerprint(channel);
  const decision = { status: "approved", source_fingerprint: fp, copy_fingerprint: fp, copy: channel };
  const legacyReview = { channel_enabled: true, decisions: { [legacyEntryKey(e)]: decision } };
  const approved = selectApproved([keyed], { sent_keys: [] }, legacyReview);
  assert.equal(approved.length, 1, "a decision the /review page wrote under the legacy key still approves the entry");
  assert.equal(approved[0].review_key, reviewKeyFor(e), "the stable key is what gets recorded as sent");
  assert.equal(selectApproved([keyed], { sent_keys: [] }, { channel_enabled: true, decisions: { [reviewKeyFor(e)]: decision } }).length, 1, "a decision under the stable key approves too");

  // The live files: every entry carries the key the migration computes, and every recorded sent key resolves.
  const changelog = (await Promise.all(
    (await readdir("content/changelog")).filter((name) => name.endsWith(".yaml")).sort()
      .map(async (name) => parse(await readFile(join("content/changelog", name), "utf8"))),
  )).flat();
  for (const entry of changelog) assert.equal(entry.review_key, reviewKeyFor(entry), `review_key on ${legacyEntryKey(entry)}`);
  assert.equal(new Set(changelog.map(entryKey)).size, changelog.length, "review keys are unique");
  const state = JSON.parse(await readFile("ops/telegram-state.json", "utf8"));
  const known = new Set(changelog.flatMap((entry) => [entryKey(entry), legacyEntryKey(entry)]));
  // Wire items sent on 2026-09-04 carry their own namespace (wire|<feed id>); only changelog keys must resolve here.
  for (const key of (state.sent_keys ?? []).filter((k) => !k.startsWith("wire|"))) assert.ok(known.has(key), `sent key no longer resolves: ${key}`);
  const sent = new Set(state.sent_keys ?? []);
  assert.equal(selectUnsent(changelog, state).filter((entry) => sent.has(legacyEntryKey(entry))).length, 0, "no already-sent entry is selected again");
});

// 4. Producer ids: any producer or a GitHub id may file a packet; no machine producer may resolve a conflict.
await test("packet accepts producer codex", async () => {
  const seed = parsePacket(await readFile("fixtures/packets/seed-valid.md", "utf8"));
  const filedBy = (producer, role = "collector") => {
    const frontmatter = { ...structuredClone(seed.frontmatter), producer, role };
    return validatePacket({ ...seed, frontmatter }, { census: [], path: `research/inbox/packets/${frontmatter.slug}/${frontmatter.work_id}.md` });
  };
  assert.deepEqual(filedBy("grok-heavy"), [], "the fixture validates clean");
  assert.ok(PRODUCER_IDS.includes("codex"));
  for (const id of [...PRODUCER_IDS, "harsharn10", "Some-Human"])
    assert.deepEqual(filedBy(id, id === "supergrok" ? "verifier" : "collector"), [], `producer ${id}`);
  for (const bad of ["", "not a github id", "a".repeat(40), "bot@example", null])
    assert.ok(filedBy(bad).length > 0, `producer ${JSON.stringify(bad)} is rejected`);

  const resolution = (await readFile("fixtures/packets/collector-sets-resolution.md", "utf8")).replace("resolver: harsharn10", "resolver: RESOLVER_ID");
  const resolvedBy = (resolver) => {
    const packet = parsePacket(resolution.replace("RESOLVER_ID", resolver));
    packet.frontmatter.role = "compiler"; // a collector may not resolve at all; this tests who may
    packet.frontmatter.producer = "harsharn10";
    return validatePacket(packet, { census: [], path: `research/inbox/packets/${packet.frontmatter.slug}/${packet.frontmatter.work_id}.md` });
  };
  assert.deepEqual(resolvedBy("harsharn10"), [], "a human controller may resolve");
  for (const bot of PRODUCER_IDS) assert.ok(resolvedBy(bot).length > 0, `${bot} may not resolve (schema)`);
  assert.ok(resolvedBy("Grok-Bot").some((e) => e.includes("not a producer")), "the lib check normalizes case and punctuation");

  // A collector or verifier never fills a resolution, whoever it names.
  const collectorResolves = parsePacket(await readFile("fixtures/packets/collector-sets-resolution.md", "utf8"));
  assert.ok(
    validatePacket(collectorResolves, { census: [], path: "research/inbox/packets/resolver-example/WORK-20260902-grok-heavy-resolver.md" })
      .some((e) => e.includes("collector")),
    "a collector leaves resolution empty",
  );
});

// 5. Official-link sources: a source whose URL matches a project's official link is cited by that link
// itself (pipeline audit 2026-09-01 §7), and normalizeUrl ignores host case, "www." and a trailing slash.
await test("official-link source counts as cited", async () => {
  assert.equal(normalizeUrl("https://Mancer.XYZ/docs/"), normalizeUrl("https://www.mancer.xyz/docs"));
  assert.notEqual(normalizeUrl("https://mancer.xyz/docs"), normalizeUrl("https://mancer.xyz/other"));
  assert.equal(normalizeUrl("not a url"), "not a url", "an unparseable URL is returned trimmed, not thrown on");

  const root = await mkdtemp(join(tmpdir(), "proofline-content-"));
  try {
    await cp("content", root, { recursive: true });
    const uncitedS1 = "sources/mancer: S1 is never cited by projects/mancer.yaml, research/mancer.md or feed/mancer.yaml";
    const { warnings: before } = await validateContent(root);
    assert.ok(!before.includes(uncitedS1), "mancer S1 (the official site link) is cited by the link itself, live");

    // Break the match: point the project's site link somewhere else. S1 should now be flagged uncited.
    const projectPath = join(root, "projects/mancer.yaml");
    const text = await readFile(projectPath, "utf8");
    await writeFile(projectPath, text.replace("url: https://mancer.xyz\n", "url: https://mancer.xyz/changed\n"));
    const { warnings: after } = await validateContent(root);
    assert.ok(after.includes(uncitedS1), "S1 is flagged once its URL no longer matches any official link");
  } finally { await rm(root, { recursive: true, force: true }); }
});

// 6. Stable-id migrations: exact formulas, format-preserving reruns, feed fallback and changelog split.
await test("stable-id and per-slug changelog migrations are idempotent", async () => {
  const root = await mkdtemp(join(tmpdir(), "proofline-stable-ids-"));
  const content = join(root, "content");
  try {
    for (const dir of ["sources", "dependencies", "feed"]) await mkdir(join(content, dir), { recursive: true });
    await writeFile(join(content, "sources", "alpha.yaml"), [
      "slug: alpha", "sources:", "  - id: S1", "    url: https://EXAMPLE.com/docs/?utm_source=x&ref=y#part",
      "    publisher: Alpha", "    kind: docs", "    accessed_at: 2026-09-02T00:00:00Z",
      "    claim: Alpha publishes   its deployment.", "    excerpt: Deployment page.", "    hash: null",
      "    archive_url: null", "    researcher: codex", "    available: true", "",
    ].join("\n"));
    await writeFile(join(content, "dependencies", "dep.yaml"), [
      "id: dep", "name: Dependency", "kind: other", "summary: Test dependency.", "controls: []", "failure_modes: []",
      "sources:", "  - id: S1", "    url: https://dep.example/", "    publisher: Dependency", "    kind: official-site",
      "    accessed_at: 2026-09-02T00:00:00Z", "    claim: Dependency site", "    excerpt: Site.", "    hash: null",
      "    archive_url: null", "    researcher: codex", "    available: true", "",
    ].join("\n"));
    await writeFile(join(content, "feed", "alpha.yaml"), [
      "slug: alpha", "items:", "  - id: alpha-1", "    date: 2026-09-02", "    kind: company",
      "    title: Deployment published", "    body: The deployment was published.", "    sources:", "      - S1", "",
    ].join("\n"));
    const changelogEntries = [
      { date: "2026-09-01", slug: "alpha", type: "coverage", severity: "Info", title: "Initial stub opened", detail: "Opened.", prior: null, new: { coverage: "stub" }, reviewer: "codex", methodology_version: "proofline-v1.0" },
      { date: "2026-09-02", slug: "beta", type: "finding", severity: "Info", title: "Source added", detail: "Added.", prior: null, new: null, reviewer: "codex", methodology_version: "proofline-v1.0" },
    ];
    await writeFile(join(content, "changelog.yaml"), `${changelogEntries.map((entry) => [
      `- date: ${entry.date}`, `  slug: ${entry.slug}`, `  type: ${entry.type}`, `  severity: ${entry.severity}`,
      `  title: ${entry.title}`, `  detail: ${entry.detail}`, "  prior: null", entry.new ? "  new:\n    coverage: stub" : "  new: null",
      `  reviewer: ${entry.reviewer}`, `  methodology_version: ${entry.methodology_version}`,
    ].join("\n")).join("\n")}\n`);

    const sourceRun = await addSourceKeys(content);
    assert.equal(sourceRun.added, 2);
    const sourceFile = parse(await readFile(join(content, "sources", "alpha.yaml"), "utf8"));
    assert.equal(sourceFile.sources[0].key, sourceKeyFor(sourceFile.sources[0]));
    assert.match(sourceFile.sources[0].key, /^[a-f0-9]{16}$/);
    const sourceSnapshot = await readFile(join(content, "sources", "alpha.yaml"), "utf8");
    assert.equal((await addSourceKeys(content)).added, 0);
    assert.equal(await readFile(join(content, "sources", "alpha.yaml"), "utf8"), sourceSnapshot);

    const feedRun = await addFeedHashIds(join(content, "feed"), { redirectPath: join(root, "build", "redirects.json") });
    assert.equal(feedRun.changed, 1);
    const feedFile = parse(await readFile(join(content, "feed", "alpha.yaml"), "utf8"));
    assert.equal(feedFile.items[0].id, feedIdFor({ ...feedFile.items[0], slug: "alpha", sourceUrl: sourceFile.sources[0].url }));
    assert.equal(feedRun.redirects.alpha["alpha-1"], feedFile.items[0].id);
    const feedSnapshot = await readFile(join(content, "feed", "alpha.yaml"), "utf8");
    assert.equal((await addFeedHashIds(join(content, "feed"), { redirectPath: join(root, "build", "redirects.json") })).changed, 0);
    assert.equal(await readFile(join(content, "feed", "alpha.yaml"), "utf8"), feedSnapshot);

    const split = await splitChangelog(content);
    assert.deepEqual(split, { entries: 2, files: 2, changed: true });
    assert.equal((await splitChangelog(content)).changed, false);
    const reviewRun = await addReviewKeys(join(content, "changelog"));
    assert.equal(reviewRun.added, 2);
    assert.equal((await addReviewKeys(join(content, "changelog"))).added, 0);
    for (const name of ["alpha.yaml", "beta.yaml"]) {
      const rows = parse(await readFile(join(content, "changelog", name), "utf8"));
      assert.equal(rows.length, 1);
      assert.equal(rows[0].slug, name.replace(".yaml", ""));
      assert.equal(rows[0].review_key, reviewKeyFor(rows[0]));
    }
  } finally { await rm(root, { recursive: true, force: true }); }
});

await test("changelog filename must match every entry slug", async () => {
  const root = await mkdtemp(join(tmpdir(), "proofline-changelog-slug-"));
  try {
    await cp("content", root, { recursive: true });
    const path = join(root, "changelog", "pons.yaml");
    const text = await readFile(path, "utf8");
    await writeFile(path, text.replace("  slug: pons\n", "  slug: arrow\n"));
    const { errors } = await validateContent(root);
    assert.ok(errors.some((error) => error.includes('changelog/pons.yaml[0]: slug field is "arrow"')), errors.join("\n"));
  } finally { await rm(root, { recursive: true, force: true }); }
});

// 8. Icarus card fields: one seed packet compiles through validation, and rerunning it changes nothing.
await test("packet compiles Icarus card fields and feed idempotently", async () => {
  const packetPath = "fixtures/compile-packet/icarus-fields.md";
  const packet = parsePacket(await readFile(packetPath, "utf8"));
  assert.deepEqual(validatePacket(packet, { census: [], path: "research/inbox/packets/icarus-fields/WORK-20260903-codex-icarus-fields.md" }), []);
  const compiled = compile(packet);
  assert.equal(compiled.project.summary, "Icarus Fields reads public Robinhood Chain state and publishes changes with links to the underlying receipts.");
  assert.deepEqual(compiled.project.themes, ["chain-data", "monitoring", "tooling"]);
  assert.deepEqual(compiled.project.official_links.map((link) => link.kind), ["site", "docs", "github", "explorer", "dexscreener", "app"]);
  assert.equal(new Set(compiled.project.official_links.map((link) => normalizeUrl(link.url))).size, compiled.project.official_links.length);
  assert.deepEqual(compiled.feed.items.map((item) => item.kind), ["company", "ct", "onchain", "risk"]);
  assert.equal(compiled.feed.items[0].account, "@fields");
  assert.equal(compiled.feed.items[1].account, "@reader");
  assert.equal(compiled.feed.items[0].body, packet.frontmatter.events[0].summary);
  for (const item of compiled.feed.items) {
    assert.match(item.id, /^[0-9a-f]{16}$/);
    assert.ok(item.sourceUrl);
    assert.ok(item.title.length <= 80);
  }

  const controllerProject = { ...compiled.project, summary: "Controller summary stays.", themes: ["controller"], controller_edited: true };
  const preserved = compile(packet, controllerProject, compiled.censusRow, compiled.sources, compiled.feed);
  assert.equal(preserved.project.summary, "Controller summary stays.");
  assert.deepEqual(preserved.project.themes, ["controller"]);

  const temp = await mkdtemp(join(tmpdir(), "proofline-icarus-compile-"));
  const content = join(temp, "content");
  try {
    await cp("content", content, { recursive: true });
    await runCompile({ packetPath, contentDir: content });
    const first = new Map();
    async function snapshot(dir, relative = "") {
      for (const entry of await readdir(dir, { withFileTypes: true })) {
        const rel = join(relative, entry.name), path = join(dir, entry.name);
        if (entry.isDirectory()) await snapshot(path, rel);
        else first.set(rel, await readFile(path, "utf8"));
      }
    }
    await snapshot(content);
    const checked = await validateContent(content);
    assert.deepEqual(checked.errors, [], checked.errors.join("\n"));
    await runCompile({ packetPath, contentDir: content });
    const second = new Map();
    async function snapshotAgain(dir, relative = "") {
      for (const entry of await readdir(dir, { withFileTypes: true })) {
        const rel = join(relative, entry.name), path = join(dir, entry.name);
        if (entry.isDirectory()) await snapshotAgain(path, rel);
        else second.set(rel, await readFile(path, "utf8"));
      }
    }
    await snapshotAgain(content);
    assert.deepEqual(second, first, "second compile produces no content diff");
  } finally { await rm(temp, { recursive: true, force: true }); }
});

// 9. The lifecycle warning is broader than the migration: activity warns, but only contract+pair flips.
await test("lifecycle migration requires a contract and pair and records its receipt", async () => {
  const temp = await mkdtemp(join(tmpdir(), "proofline-lifecycle-"));
  try {
    for (const dir of ["projects", "pulled"]) await mkdir(join(temp, dir), { recursive: true });
    await writeFile(join(temp, "census.yaml"), [
      "- slug: alpha", "  lifecycle: announced", "- slug: activity-only", "  lifecycle: announced",
      "- slug: already-flipped", "  lifecycle: mainnet   # ruling C: mainnet rests on the project's own posts", "",
    ].join("\n"));
    for (const slug of ["alpha", "activity-only"])
      await writeFile(join(temp, "projects", `${slug}.yaml`), `slug: ${slug}\nlifecycle: announced\n`);
    await writeFile(
      join(temp, "projects", "already-flipped.yaml"),
      "slug: already-flipped\nlifecycle: mainnet\nlifecycle_source: pulled 0x9999999999999999999999999999999999999999 2026-08-01T00:00:00.000Z\n",
    );
    const address = "0x1111111111111111111111111111111111111111";
    const pulled = (pairs) => [
      "slug: fixture", "chain: robinhood-chain", "addresses:", `  - address: "${address}"`, "    is_contract: true",
      "    created_at: 2026-09-03T10:00:00.000Z", "market:", `  token_address: "${address}"`, "  pairs:",
      ...(pairs ? ["    - pair_address: \"0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\"", "      created_at: 2026-09-03T10:05:00.000Z"] : []),
      "activity:", "  addresses:", `    - address: "${address}"`, "      transactions_count: 2", "      last_tx_at: 2026-09-03T11:00:00.000Z", "",
    ].join("\n");
    await writeFile(join(temp, "pulled", "alpha.yaml"), pulled(true));
    await writeFile(join(temp, "pulled", "activity-only.yaml"), pulled(false));
    const census = parse(await readFile(join(temp, "census.yaml"), "utf8"));
    const pulledBySlug = new Map([
      ["alpha", parse(await readFile(join(temp, "pulled", "alpha.yaml"), "utf8"))],
      ["activity-only", parse(await readFile(join(temp, "pulled", "activity-only.yaml"), "utf8"))],
    ]);
    assert.equal(lifecycleDriftWarnings(census, pulledBySlug).length, 2);
    assert.deepEqual(await migrateLifecycle(temp, { dryRun: true }), [{ slug: "alpha", address, createdAt: "2026-09-03T10:00:00.000Z" }]);
    assert.match(await readFile(join(temp, "projects", "alpha.yaml"), "utf8"), /lifecycle: announced/);
    assert.deepEqual(await migrateLifecycle(temp), [{ slug: "alpha", address, createdAt: "2026-09-03T10:00:00.000Z" }]);
    assert.match(await readFile(join(temp, "projects", "alpha.yaml"), "utf8"), new RegExp(`lifecycle_source: pulled ${address} 2026-09-03T10:00:00.000Z`));
    assert.match(await readFile(join(temp, "projects", "activity-only.yaml"), "utf8"), /lifecycle: announced/);

    // The census comment names the receipt, both on the row just flipped and on one flipped earlier;
    // a note explaining why the row used to be announced never outlives the flip.
    const flippedCensus = await readFile(join(temp, "census.yaml"), "utf8");
    assert.match(flippedCensus, new RegExp(`^  lifecycle: mainnet   # pulled: ${address} 2026-09-03T10:00:00.000Z$`, "m"));
    assert.match(flippedCensus, /^ {2}lifecycle: mainnet {3}# pulled: 0x9999999999999999999999999999999999999999 2026-08-01T00:00:00.000Z$/m);
    assert.ok(!flippedCensus.includes("ruling C"), flippedCensus);
    assert.match(flippedCensus, /^- slug: activity-only\n {2}lifecycle: announced$/m, "an unflipped row is untouched");

    assert.deepEqual(await migrateLifecycle(temp), [], "migration rerun is idempotent");
    assert.equal(await readFile(join(temp, "census.yaml"), "utf8"), flippedCensus, "the comment pass is idempotent too");
  } finally { await rm(temp, { recursive: true, force: true }); }
});

// 10. The mainnet receipt names the market's own contract or a pair's, never whichever contract came first.
await test("mainnet receipt never falls back to an unrelated contract", async () => {
  const token = "0x1111111111111111111111111111111111111111";
  const pair = "0x2222222222222222222222222222222222222222";
  const unrelated = "0x3333333333333333333333333333333333333333";
  const pulled = (contractAddress) => ({
    slug: "fixture",
    chain: "robinhood-chain",
    addresses: [{ address: contractAddress, is_contract: true, created_at: "2026-09-03T10:00:00.000Z" }],
    market: { token_address: token, pairs: [{ pair_address: pair, created_at: "2026-09-03T10:05:00.000Z" }] },
  });
  assert.deepEqual(mainnetReceiptFromPulled(pulled(token)), { address: token, createdAt: "2026-09-03T10:00:00.000Z" });
  assert.deepEqual(mainnetReceiptFromPulled(pulled(pair)), { address: pair, createdAt: "2026-09-03T10:00:00.000Z" });
  assert.equal(mainnetReceiptFromPulled(pulled(unrelated)), null, "an unrelated contract is not a receipt");

  const temp = await mkdtemp(join(tmpdir(), "proofline-receipt-"));
  try {
    for (const dir of ["projects", "pulled"]) await mkdir(join(temp, dir), { recursive: true });
    await writeFile(join(temp, "census.yaml"), "- slug: alpha\n  lifecycle: announced\n");
    await writeFile(join(temp, "projects", "alpha.yaml"), "slug: alpha\nlifecycle: announced\n");
    await writeFile(join(temp, "pulled", "alpha.yaml"), stringify(pulled(unrelated)));
    assert.deepEqual(await migrateLifecycle(temp), [], "no receipt means no flip");
    assert.match(await readFile(join(temp, "projects", "alpha.yaml"), "utf8"), /lifecycle: announced/);
  } finally { await rm(temp, { recursive: true, force: true }); }
});

// 11. content/pulled is machine output: a broken file warns, it does not fail content validation.
await test("an unparseable pulled file warns instead of failing validation", async () => {
  const temp = await mkdtemp(join(tmpdir(), "proofline-pulled-"));
  const content = join(temp, "content");
  try {
    await cp("content", content, { recursive: true });
    await writeFile(join(content, "pulled", "broken.yaml"), "a: 1\n  b: [unclosed\n");
    const { errors, warnings } = await validateContent(content);
    assert.deepEqual(errors.filter((error) => error.includes("pulled/broken.yaml")), [], errors.join("\n"));
    assert.ok(warnings.some((warning) => warning.includes("pulled/broken.yaml")), warnings.join("\n"));
  } finally { await rm(temp, { recursive: true, force: true }); }
});

// 12. A collector packet that got parts of the world wrong still compiles: the unusable parts are
//     dropped, each with a notice, and everything else lands.
const degradedPacket = parsePacket(await readFile("fixtures/compile-packet/degraded.md", "utf8"));
const reshaped = (edit) => {
  const frontmatter = structuredClone(degradedPacket.frontmatter);
  edit(frontmatter);
  return { frontmatter, body: degradedPacket.body };
};

await test("compile degrades unusable packet fields instead of refusing the packet", async () => {
  assert.deepEqual(checkPacket(degradedPacket.frontmatter, degradedPacket.body), [], "the fixture is a valid packet");
  const result = compile(degradedPacket);
  assert.deepEqual(validateAgainst("project", result.project), [], "the compiled project passes its schema");

  // A value that is a sentence, or a negative one, is not a figure: it is skipped and filed as a gap.
  assert.deepEqual(result.project.metrics.map((metric) => metric.kind), ["tvl"]);
  assert.equal(result.degraded.skippedMetrics, 2);
  assert.ok(result.project.findings.missing.some((gap) => gap.text.includes("volume_24h is not published as a figure")), JSON.stringify(result.project.findings.missing));
  assert.ok(result.project.findings.missing.some((gap) => gap.text.includes("market_cap is not published as a figure: the packet reported -4200")));
  assert.ok(result.notices.some((note) => note.startsWith("metric volume_24h: skipped")), result.notices.join("\n"));

  // An address that is a sentence is never written into the canonical record.
  assert.deepEqual(result.project.deployments.map((row) => row.address), ["0x2222222222222222222222222222222222222222"]);
  assert.equal(result.degraded.skippedDeployments, 1);
  assert.ok(result.notices.some((note) => note.includes('deployment "Alpha vault manager": skipped')), result.notices.join("\n"));

  // The census handle pattern is narrower than the packet's free-text field.
  assert.ok(!("handle" in result.censusRow), "an unresolved handle is not written to the census");
  assert.ok(result.notices.some((note) => note.startsWith("handle: skipped")));

  // Themes are clamped, not thrown on, because the count rule is date-gated in the packet check.
  assert.deepEqual(result.project.themes, ["amm", "trading", "native", "routing", "liquidity"]);
  assert.ok(result.notices.some((note) => note.startsWith("themes: kept the first 5 of 6")));

  // Untagged body paragraphs are tagged from the claims they name, else from the primary official receipt.
  assert.equal(result.degraded.autoTaggedParagraphs, 2);
  assert.ok(result.research.includes("cannot be read on chain. [claim S2]"), result.research);
  assert.ok(result.research.includes("per CLM-2. [inference S2]"), "the tag is the referenced claim's own class and receipts");
  assert.deepEqual(
    checkResearch(result.research, { slug: "alpha", coverage: "stub", ledgerIds: new Set(result.sources.sources.map((row) => row.id)) }),
    [],
    "the compiled record satisfies the tag grammar it is checked against",
  );
});

await test("compile never lowers coverage, never touches scoring, and never lowers lifecycle", async () => {
  const seeded = compile(degradedPacket);
  const scoring = { risk: { assessed: "Elevated", reason: "Owner path unread." } };
  const priorResearch = `---\nslug: alpha\ncoverage: full\nmethodology_version: proofline-v1.0\n---\n\n# Alpha — research record\n\n${
    REQUIRED_HEADINGS.map((heading) => `## ${heading}\n\nA full-depth ${heading.toLowerCase()} paragraph written by review. [claim S1]`).join("\n\n")}\n`;
  const priorProject = { ...seeded.project, coverage: "full", scoring };
  const priorCensusRow = { ...seeded.censusRow, coverage: "full" };

  const result = compile(degradedPacket, priorProject, priorCensusRow, seeded.sources, seeded.feed, { priorResearch });
  assert.equal(result.project.coverage, "full", "a collector packet does not demote a full profile to a stub");
  assert.equal(result.censusRow.coverage, "full", "the census row mirrors it");
  assert.deepEqual(result.project.scoring, scoring, "scoring is untouched");
  assert.match(result.research, /^---\nslug: alpha\ncoverage: full\n/, "the research front matter mirrors the coverage");
  assert.ok(!result.research.includes("_Research pending._"), "a full record is never written back down to a pending line");
  assert.deepEqual(
    checkResearch(result.research, { slug: "alpha", coverage: "full", ledgerIds: new Set(result.sources.sources.map((row) => row.id)) }),
    [],
    "the full record still passes its own checks",
  );

  // Lifecycle: an announced packet does not undo a mainnet the chain read already established.
  const announced = reshaped((frontmatter) => { frontmatter.classification.lifecycle = "announced"; });
  const address = "0x1111111111111111111111111111111111111111";
  const pulled = {
    chain: "robinhood-chain",
    addresses: [{ address, is_contract: true, created_at: "2026-09-03T10:00:00.000Z" }],
    market: { token_address: address, pairs: [{ pair_address: "0xaaaa", created_at: "2026-09-03T10:05:00.000Z" }] },
  };
  const kept = compile(announced, { ...priorProject, lifecycle: "mainnet" }, priorCensusRow, seeded.sources, seeded.feed, { pulled, priorResearch });
  assert.equal(kept.project.lifecycle, "mainnet");
  assert.ok(kept.notices.some((note) => note.startsWith("lifecycle: kept mainnet")), kept.notices.join("\n"));
  const demoted = compile(announced, { ...priorProject, lifecycle: "mainnet" }, priorCensusRow, seeded.sources, seeded.feed, { priorResearch });
  assert.equal(demoted.project.lifecycle, "announced", "without a chain read there is nothing holding mainnet up");
});

await test("the feed carries reader-facing events under ids that survive an edit", async () => {
  const result = compile(degradedPacket);
  assert.deepEqual(result.feed.items.map((item) => item.title), ["Router reproduced"], "site_recommendation none is not published");

  // The id is the event, not the wording: an edited (or over-long) title replaces its item, never adds one.
  const retitled = reshaped((frontmatter) => { frontmatter.events[0].title = "Router reproduced on chain 4663 after a second read of the deployment bytecode"; });
  const second = compile(retitled, null, null, result.sources, result.feed);
  assert.equal(second.feed.items.length, 1, "a retitled event replaces its feed item");
  assert.equal(second.feed.items[0].id, result.feed.items[0].id);
  assert.equal(second.feed.items[0].title, retitled.frontmatter.events[0].title);
});

await test("compile maps TL;DR, three sourced reasons and paragraph risks", async () => {
  const source = parsePacket(await readFile("fixtures/compile-packet/icarus-fields.md", "utf8"));
  const body = [
    "## What it is", "", "Icarus Fields tracks public chain changes.", "",
    "Themes: chain-data, tooling", "", "```", "TL;DR: This fenced example is ignored.", "```", "",
    "TL;DR: Tracks live Robinhood Chain changes for readers.", "",
    "## Why it matters", "",
    "- It turns chain changes into a short reader update. [claim R-1]",
    "- Independent walkthroughs make the output easier to check. [claim R-2]",
    "- Explorer links let readers verify contract activity. [verified R-3]", "",
    "## What could go wrong", "",
    "Indexer delays can hide a recent update. Readers should check the linked source before acting. [claim R-4]",
  ].join("\n");
  const result = compile({ frontmatter: source.frontmatter, body });
  assert.equal(result.project.tldr, "Tracks live Robinhood Chain changes for readers.");
  assert.deepEqual(result.project.why_people_care, [
    "It turns chain changes into a short reader update. [claim S1]",
    "Independent walkthroughs make the output easier to check. [claim S2]",
    "Explorer links let readers verify contract activity. [verified S3]",
  ]);
  assert.deepEqual(result.project.risks, [
    "Indexer delays can hide a recent update. [claim S4]",
    "Readers should check the linked source before acting. [claim S4]",
  ], "a one-paragraph section still fills more than one slot");
  assert.equal(result.project.tldr_source, undefined, "a real TL;DR line is not tagged as derived");
  assert.ok(result.notices.some((notice) => notice.includes("read the section's 1 paragraphs as bullets")), result.notices.join("\n"));
  assert.deepEqual(validateAgainst("project", result.project), []);

  const tooFew = compile({ frontmatter: source.frontmatter, body: body.replace(/\n- Explorer links[^\n]+/, "") });
  assert.equal(tooFew.project.why_people_care, undefined, "two bullets never get padded");
  assert.ok(tooFew.notices.some((notice) => notice.includes("expected exactly 3 bullets and found 2")));

  const protectedProject = {
    ...result.project,
    controller_edited: true,
    tldr: "Controller TL;DR.",
    why_people_care: ["One. [claim S1]", "Two. [claim S1]", "Three. [claim S1]"],
    risks: ["Controller risk. [claim S1]"],
  };
  const protectedResult = compile({ frontmatter: source.frontmatter, body }, protectedProject, result.censusRow, result.sources, result.feed);
  assert.equal(protectedResult.project.tldr, protectedProject.tldr);
  assert.deepEqual(protectedResult.project.why_people_care, protectedProject.why_people_care);
  assert.deepEqual(protectedResult.project.risks, protectedProject.risks);
});

await test("compile derives the v3 fields a packet did not write, and never drops a risk for length", async () => {
  const source = parsePacket(await readFile("fixtures/compile-packet/icarus-fields.md", "utf8"));
  const long = (lead) =>
    `${lead} the operator can change fees, pairing assets, launch configuration and the graduation ` +
    "components on a live market, and every one of those calls lands as soon as the signers confirm it";
  const body = [
    "## What it is", "",
    "Icarus Fields tracks public chain changes. It reads the explorer directly. A third sentence runs " +
      "long enough that the TL;DR budget cannot hold it alongside the first two sentences of the summary.", "",
    "Themes: chain-data, tooling", "",
    "## Why it matters", "",
    "It turns chain changes into a short reader update. Independent walkthroughs make the output easier " +
      "to check. [claim R-1]", "",
    "Explorer links let readers verify `contract()` activity. [verified R-3]", "",
    "## What could go wrong", "",
    `${long("There is no timelock, so")} [claim R-4]`, "",
    "Indexer delays can hide a recent update. [claim R-4]", "",
    "A third paragraph fills the last slot. [claim R-4]", "",
    "A fourth paragraph is over the cap. [claim R-4]",
  ].join("\n");
  const result = compile({ frontmatter: source.frontmatter, body });

  assert.equal(result.project.tldr, "Icarus Fields tracks public chain changes. It reads the explorer directly.");
  assert.equal(result.project.tldr_source, "derived");
  assert.ok(result.notices.includes("tldr derived from summary"), result.notices.join("\n"));

  assert.equal(result.project.why_people_care.length, 3);
  assert.equal(result.project.why_people_care[0], "It turns chain changes into a short reader update. [claim S1]");
  assert.equal(
    result.project.why_people_care[2],
    "Explorer links let readers verify contract() activity. [verified S3]",
    "backticks never reach the content record",
  );
  assert.ok(result.notices.includes("why_people_care derived from paragraphs"), result.notices.join("\n"));

  assert.equal(result.project.risks.length, 3, "three slots stay filled");
  assert.ok(result.project.risks[0].startsWith("There is no timelock,"), "the first risk written is the first risk kept");
  assert.ok(result.project.risks[0].endsWith("[claim S4]"), "the source tag survives the trim");
  assert.ok(result.project.risks[0].includes("…"), "an over-length risk is trimmed, not dropped");
  assert.ok(result.project.risks.every((risk) => risk.length <= 200), result.project.risks.map((r) => r.length).join(","));
  assert.equal(result.project.risks[1], "Indexer delays can hide a recent update. [claim S4]");
  assert.deepEqual(validateAgainst("project", result.project), []);
});

await test("an empty Why it matters and an untitled summary are reported, not silently dropped", async () => {
  const source = parsePacket(await readFile("fixtures/compile-packet/icarus-fields.md", "utf8"));
  const body = ["## What it is", "", "Icarus Fields tracks public chain changes.", "", "Themes: chain-data", "",
    "## Why it matters", "", "- Only one bullet here. [claim R-1]"].join("\n");
  const result = compile({ frontmatter: source.frontmatter, body });
  assert.equal(result.project.why_people_care, undefined);
  assert.ok(result.notices.some((notice) => notice.includes("why_people_care: empty")), result.notices.join("\n"));
});

await test("v3 field validation warns on gaps and rejects unsourced reasons", () => {
  const missing = v3FieldIssues({ slug: "alpha", lifecycle: "mainnet" });
  assert.equal(missing.errors.length, 0);
  assert.equal(missing.warnings.length, 2);
  const invalid = v3FieldIssues({
    slug: "alpha", lifecycle: "beta", tldr: "Short summary.",
    why_people_care: ["One. [claim S1]", "Two has no source."],
  });
  assert.ok(invalid.errors.some((error) => error.includes("exactly 3")));
  assert.ok(invalid.errors.some((error) => error.includes("why_people_care[1]")));
});

await test("the v3 backfill changes only new fields and feed bodies, then becomes a no-op", async () => {
  const temp = await mkdtemp(join(tmpdir(), "proofline-v3-backfill-"));
  const packetRoot = join(temp, "packets");
  const contentRoot = join(temp, "content");
  try {
    const source = parsePacket(await readFile("fixtures/compile-packet/icarus-fields.md", "utf8"));
    source.body = source.body.replace(
      "Themes: chain-data, monitoring, tooling",
      [
        "Themes: chain-data, monitoring, tooling", "", "TL;DR: Tracks live chain changes for readers.", "",
        "## Why it matters", "", "- First reason. [claim R-1]", "- Second reason. [claim R-2]", "- Third reason. [verified R-3]", "",
        "## What could go wrong", "", "Indexer delays can hide updates. [claim R-4]",
      ].join("\n"),
    );
    const compiled = compile(source);
    const project = structuredClone(compiled.project);
    for (const field of ["tldr", "why_people_care", "risks"]) delete project[field];
    const feed = structuredClone(compiled.feed);
    feed.items[0].body = "Old body.";
    await mkdir(join(packetRoot, source.frontmatter.slug), { recursive: true });
    for (const dir of ["projects", "sources", "feed"]) await mkdir(join(contentRoot, dir), { recursive: true });
    await writeFile(join(packetRoot, source.frontmatter.slug, BATCH_PACKET), `---\n${stringify(source.frontmatter, { lineWidth: 0 })}---\n\n${source.body}\n`);
    await writeFile(join(contentRoot, "census.yaml"), stringify([compiled.censusRow], { lineWidth: 0 }));
    await writeFile(join(contentRoot, "projects", `${source.frontmatter.slug}.yaml`), stringify(project, { lineWidth: 0 }));
    await writeFile(join(contentRoot, "sources", `${source.frontmatter.slug}.yaml`), stringify(compiled.sources, { lineWidth: 0 }));
    await writeFile(join(contentRoot, "feed", `${source.frontmatter.slug}.yaml`), stringify(feed, { lineWidth: 0 }));

    const first = await backfillV3Fields({ packetRoot, contentRoot });
    assert.deepEqual(
      { packets: first.packets, projectsChanged: first.projectsChanged, feedsChanged: first.feedsChanged, tldr: first.tldr, why: first.why_people_care, risks: first.risks },
      { packets: 1, projectsChanged: 1, feedsChanged: 1, tldr: 1, why: 1, risks: 1 },
    );
    const updated = parse(await readFile(join(contentRoot, "projects", `${source.frontmatter.slug}.yaml`), "utf8"));
    assert.equal(updated.tldr, compiled.project.tldr);
    assert.deepEqual(updated.why_people_care, compiled.project.why_people_care);
    assert.deepEqual(updated.risks, compiled.project.risks);
    const snapshot = await Promise.all([
      readFile(join(contentRoot, "projects", `${source.frontmatter.slug}.yaml`), "utf8"),
      readFile(join(contentRoot, "feed", `${source.frontmatter.slug}.yaml`), "utf8"),
    ]);
    const second = await backfillV3Fields({ packetRoot, contentRoot });
    assert.equal(second.projectsChanged, 0);
    assert.equal(second.feedsChanged, 0);
    assert.deepEqual(await Promise.all([
      readFile(join(contentRoot, "projects", `${source.frontmatter.slug}.yaml`), "utf8"),
      readFile(join(contentRoot, "feed", `${source.frontmatter.slug}.yaml`), "utf8"),
    ]), snapshot, "a second run changes no bytes");
  } finally { await rm(temp, { recursive: true, force: true }); }
});

await test("a compile adds official links and never deletes a stored one", async () => {
  const seeded = compile(degradedPacket);
  const stored = [
    { kind: "discord", url: "https://discord.gg/alpha" },
    { kind: "other", url: "https://alpha.example/press" },
    { kind: "site", url: "https://alpha.example/" },
  ];
  const result = compile(degradedPacket, { ...seeded.project, official_links: stored }, { ...seeded.censusRow, official_links: stored }, seeded.sources, seeded.feed);
  for (const link of stored)
    assert.ok(
      result.project.official_links.some((row) => normalizeUrl(row.url) === normalizeUrl(link.url)),
      `${link.kind} link survives: ${JSON.stringify(result.project.official_links)}`,
    );
  for (const kind of ["discord", "other"])
    assert.ok(result.project.official_links.some((row) => row.kind === kind), `${kind} keeps its kind`);
  assert.ok(result.project.official_links.some((row) => row.kind === "whitepaper"), "the packet's whitepaper link is added");
  assert.equal(
    new Set(result.project.official_links.map((link) => normalizeUrl(link.url))).size,
    result.project.official_links.length,
    "only exact duplicates are dropped",
  );
  assert.deepEqual(validateAgainst("project", result.project), []);
  assert.deepEqual(validateAgainst("census", [result.censusRow]), []);
});

await test("a compile writes one census row and keeps the file's comments", async () => {
  const text = [
    "# Coverage universe — one row per canonical name.",
    "",
    "- slug: keep-me",
    "  name: Keep Me",
    "  lifecycle: mainnet   # pulled: 0x9999999999999999999999999999999999999999 2026-08-01T00:00:00.000Z",
    "  coverage: stub",
    "",
    "- slug: alpha",
    "  name: Alpha",
    "  lifecycle: mainnet   # pulled: 0x1111111111111111111111111111111111111111 2026-08-02T00:00:00.000Z",
    "  coverage: stub",
    "",
  ].join("\n");
  const row = compile(degradedPacket).censusRow;
  const once = censusTextWithRow(text, row);
  assert.ok(once.includes("# Coverage universe"), "the file's own header comment survives");
  assert.ok(once.includes("# pulled: 0x9999999999999999999999999999999999999999"), "another row's receipt comment survives");
  assert.ok(once.includes("# pulled: 0x1111111111111111111111111111111111111111"), "the compiled row keeps the comment on its own lifecycle line");
  assert.equal(parse(once).length, 2, "the row is replaced, not appended");
  assert.equal(parse(once)[1].category, row.category, "the compiled row is the one written");
  assert.equal(censusTextWithRow(once, row), once, "rewriting the same row changes nothing");

  const added = censusTextWithRow(text, { ...row, slug: "brand-new" });
  assert.equal(parse(added).length, 3, "a slug with no row is appended");
  assert.ok(added.includes("# Coverage universe"));
});

await test("a pulled chain read verifies a deployment and is cited as its source", async () => {
  const router = "0x2222222222222222222222222222222222222222";
  const vault = "0x5555555555555555555555555555555555555555";
  const pulledAt = "2026-09-03T10:00:00.000Z";
  const pulledRow = (address, extra = {}) => ({ address, is_contract: true, source_verified: true, contract_name: "AlphaRouter", ...extra });
  const pulled = { slug: "alpha", pulled_at: pulledAt, chain: "robinhood-chain", addresses: [pulledRow(router)] };

  // The rule itself: read, then not read, then read but not established.
  assert.equal(deploymentReceiptFromPulled(pulled, router.toUpperCase()).receipt, `pulled ${router} ${pulledAt}`);
  assert.equal(deploymentReceiptFromPulled(pulled, vault), null, "an address the puller has not read has no receipt");
  assert.equal(deploymentReceiptFromPulled({ ...pulled, addresses: [pulledRow(router, { is_contract: false })] }, router), null);
  assert.equal(deploymentReceiptFromPulled({ ...pulled, addresses: [pulledRow(router, { source_verified: false })] }, router), null, "unverified source is not an establishment");
  assert.equal(deploymentReceiptFromPulled({ ...pulled, addresses: [pulledRow(router, { source_verified: null })] }, router), null, "a Blockscout read that never answered is not one either");
  assert.equal(deploymentReceiptFromPulled({ ...pulled, pulled_at: undefined }, router), null, "a read with no timestamp is not a receipt");

  // A router the packet asserts but never reproduced is unverified until something reproduces it.
  const unreproduced = reshaped((frontmatter) => { frontmatter.claims[0].class = "claim"; frontmatter.claims[0].reproduction_ids = []; });
  const withoutRead = compile(unreproduced);
  assert.deepEqual(withoutRead.project.deployments.map((row) => row.verified), [false]);

  const result = compile(unreproduced, null, null, null, null, { pulled });
  const [deployment] = result.project.deployments;
  assert.equal(deployment.verified, true, "the chain read verifies it");
  assert.ok(result.notices.some((note) => note.includes(`verified from the chain read — pulled ${router} ${pulledAt}`)), result.notices.join("\n"));

  const cited = result.sources.sources.find((source) => deployment.sources.includes(source.id) && source.researcher === "pull");
  assert.ok(cited, `the pulled read is cited: ${JSON.stringify(deployment.sources)}`);
  assert.equal(cited.url, `https://robinhoodchain.blockscout.com/address/${router}`);
  assert.equal(cited.kind, "explorer");
  assert.equal(cited.accessed_at, pulledAt);
  assert.ok(cited.excerpt.startsWith(`pulled ${router} ${pulledAt}:`), cited.excerpt);
  assert.deepEqual(validateAgainst("sources", result.sources), [], "the ledger still passes its schema");
  assert.deepEqual(validateAgainst("project", result.project), []);

  // A pool DexScreener names is a contract the puller has read, from its other endpoint.
  const pool = "0x1010101010101010101010101010101010101010";
  const marketPulledAt = "2026-09-03T09:00:00.000Z";
  const withMarket = {
    ...pulled,
    market: { token_address: router, pulled_at: marketPulledAt, pairs: [{ pair_address: pool }] },
  };
  const pairRead = deploymentReceiptFromPulled(withMarket, pool.toUpperCase());
  assert.equal(pairRead.receipt, `pulled pair ${pool} ${marketPulledAt}`);
  assert.equal(pairRead.url, `https://dexscreener.com/robinhood/${pool}`);
  assert.equal(pairRead.kind, "third-party-data");
  assert.equal(pairRead.publisher, "DexScreener");
  assert.equal(deploymentReceiptFromPulled({ ...withMarket, market: { ...withMarket.market, pulled_at: undefined } }, pool), null, "a market read with no timestamp is not a receipt");

  const poolPacket = reshaped((frontmatter) => {
    frontmatter.claims[0].class = "claim";
    frontmatter.claims[0].reproduction_ids = [];
    frontmatter.deployments[0].address.value = pool;
    frontmatter.claims[0].value = pool;
  });
  const poolResult = compile(poolPacket, null, null, null, null, { pulled: withMarket });
  const [poolDeployment] = poolResult.project.deployments;
  assert.equal(poolDeployment.verified, true, "the pool is verified from the market read");
  const poolSource = poolResult.sources.sources.find((source) => poolDeployment.sources.includes(source.id) && source.researcher === "pull");
  assert.equal(poolSource.kind, "third-party-data");
  assert.equal(poolSource.url, `https://dexscreener.com/robinhood/${pool}`);
  assert.deepEqual(validateAgainst("sources", poolResult.sources), []);

  // Compiling again against the same read reuses the entry; a later pull refreshes what it says it read.
  const again = compile(unreproduced, result.project, result.censusRow, result.sources, result.feed, { pulled });
  assert.equal(again.sources.sources.filter((source) => source.researcher === "pull").length, 1, "one entry per address, not one per compile");
  const repulled = { ...pulled, pulled_at: "2026-09-04T10:00:00.000Z" };
  const refreshed = compile(unreproduced, result.project, result.censusRow, result.sources, result.feed, { pulled: repulled });
  const refreshedEntry = refreshed.sources.sources.find((source) => source.researcher === "pull");
  assert.equal(refreshedEntry.accessed_at, "2026-09-04T10:00:00.000Z", "a newer read updates the entry it already has");
  assert.equal(refreshed.sources.sources.filter((source) => source.researcher === "pull").length, 1);
});

await test("a re-listed deployment keeps the evidence it already has", async () => {
  const router = "0x2222222222222222222222222222222222222222";
  const stored = [{
    label: "Alpha router (reproduced on the explorer by review)",
    chain: "robinhood-chain",
    address: router,
    role: "router",
    verified: true,
    sources: ["S20", "S13"],
  }];
  // The packet re-lists the address with no reproduction of its own, and no chain read backs it.
  const unreproduced = reshaped((frontmatter) => { frontmatter.claims[0].class = "claim"; frontmatter.claims[0].reproduction_ids = []; });
  const seeded = compile(unreproduced);
  assert.equal(seeded.project.deployments[0].verified, false, "on its own the packet establishes nothing");

  const result = compile(unreproduced, { ...seeded.project, deployments: stored }, seeded.censusRow, seeded.sources, seeded.feed);
  const [deployment] = result.project.deployments;
  assert.equal(deployment.verified, true, "a compile never lowers verified on a row someone reproduced");
  for (const id of ["S20", "S13"]) assert.ok(deployment.sources.includes(id), `stored source ${id} survives: ${deployment.sources}`);
  assert.ok(deployment.sources.length > 2, "the packet's own citations are added alongside");
  assert.equal(deployment.sources.length, new Set(deployment.sources).size, "sources are not duplicated");
  assert.deepEqual(validateAgainst("project", result.project), []);

  // An address the packet brings that is not stored is added, not merged into someone else's row.
  const fresh = reshaped((frontmatter) => { frontmatter.deployments[0].address.value = "0x3333333333333333333333333333333333333333"; frontmatter.claims[0].value = "0x3333333333333333333333333333333333333333"; });
  const added = compile(fresh, { ...seeded.project, deployments: stored }, seeded.censusRow, seeded.sources, seeded.feed);
  assert.equal(added.project.deployments.length, 2);
  assert.equal(added.project.deployments[0].verified, true, "the stored row is untouched");
});

if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
console.log("all pipeline tests passed");
