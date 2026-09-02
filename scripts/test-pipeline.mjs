// Pipeline-fix tests (2026-09-01): the inbox YAML parse gate, the changelog vocabulary lint, stable
// review keys, and producer ids. Same shape as test.mjs — plain node asserts, one `ok <name>` line per
// group, non-zero exit on any failure. Run from the repo root: node scripts/test-pipeline.mjs
import assert from "node:assert/strict";
import { mkdtemp, mkdir, cp, rm, writeFile, appendFile, readFile, readdir } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parse } from "yaml";
import { validateInboxYaml, yamlParseErrors } from "./lib/inbox.mjs";
import { vocabularyWarnings } from "./lib/voice.mjs";
import { validateContent } from "./lib/validate-content.mjs";
import { normalizeUrl } from "./lib/checks.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { entryKey, legacyEntryKey, reviewKeyFor, selectUnsent, selectApproved, publicationFingerprint } from "./lib/telegram.mjs";
import { addSourceKeys, sourceKeyFor } from "./migrations/add-source-keys.mjs";
import { addFeedHashIds, feedIdFor } from "./migrations/add-feed-hash-ids.mjs";
import { splitChangelog } from "./migrations/split-changelog.mjs";
import { addReviewKeys } from "./migrations/add-review-keys.mjs";
import { parsePacket, validatePacket, PRODUCER_IDS } from "./lib/packet.mjs";

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
  for (const key of state.sent_keys ?? []) assert.ok(known.has(key), `sent key no longer resolves: ${key}`);
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

if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
console.log("all pipeline tests passed");
