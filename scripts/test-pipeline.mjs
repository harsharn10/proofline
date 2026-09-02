// Pipeline-fix tests (2026-09-01): the inbox YAML parse gate, the changelog vocabulary lint, stable
// review keys, and producer ids. Same shape as test.mjs — plain node asserts, one `ok <name>` line per
// group, non-zero exit on any failure. Run from the repo root: node scripts/test-pipeline.mjs
import assert from "node:assert/strict";
import { mkdtemp, mkdir, cp, rm, writeFile, appendFile, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parse } from "yaml";
import { validateInboxYaml, yamlParseErrors } from "./lib/inbox.mjs";
import { vocabularyWarnings } from "./lib/voice.mjs";
import { validateContent } from "./lib/validate-content.mjs";
import { normalizeUrl } from "./lib/checks.mjs";
import { validateAgainst } from "./lib/schemas.mjs";
import { entryKey, legacyEntryKey, reviewKeyFor, selectUnsent, selectApproved, publicationFingerprint } from "./lib/telegram.mjs";
import { validateNameIntake, PRODUCER_IDS } from "./lib/name-intake.mjs";

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
    await appendFile(join(root, "changelog.yaml"), [
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
  const changelog = parse(await readFile("content/changelog.yaml", "utf8"));
  for (const entry of changelog) assert.equal(entry.review_key, reviewKeyFor(entry), `review_key on ${legacyEntryKey(entry)}`);
  assert.equal(new Set(changelog.map(entryKey)).size, changelog.length, "review keys are unique");
  const state = JSON.parse(await readFile("ops/telegram-state.json", "utf8"));
  const known = new Set(changelog.flatMap((entry) => [entryKey(entry), legacyEntryKey(entry)]));
  for (const key of state.sent_keys ?? []) assert.ok(known.has(key), `sent key no longer resolves: ${key}`);
  const sent = new Set(state.sent_keys ?? []);
  assert.equal(selectUnsent(changelog, state).filter((entry) => sent.has(legacyEntryKey(entry))).length, 0, "no already-sent entry is selected again");
});

// 4. Producer ids: any producer or a GitHub id may file a dossier; no machine producer may resolve a conflict.
await test("name-intake accepts producer codex", async () => {
  const template = parse(await readFile("docs/templates/name-intake.yaml", "utf8"));
  assert.deepEqual(validateNameIntake(template, { census: [] }), [], "template validates clean");
  assert.ok(PRODUCER_IDS.includes("codex"));
  for (const id of [...PRODUCER_IDS, "harsharn10", "Some-Human"])
    assert.deepEqual(validateNameIntake({ ...template, researcher: id }, { census: [] }), [], `researcher ${id}`);
  for (const bad of ["", "not a github id", "a".repeat(40), "bot@example", null])
    assert.ok(validateNameIntake({ ...template, researcher: bad }, { census: [] }).length > 0, `researcher ${JSON.stringify(bad)} is rejected`);

  const resolvedBy = (resolver) => {
    const record = structuredClone(template);
    record.reproductions.push({ id: "REP-1", method: "document-scope", source_ids: ["SRC-1"], checked_at: "2026-09-01T12:00:00Z", result: "Checked the announcement text." });
    record.claims[2].class = "verified";
    record.claims[2].reproduction_ids = ["REP-1"];
    record.claims.push({ id: "CLM-8", field: "lifecycle", value: "beta", class: "disputed", source_ids: ["SRC-1"], reproduction_ids: [], observed_at: "2026-09-01T12:00:00Z" });
    record.conflicts.push({
      id: "CON-lifecycle", field: "lifecycle", claim_ids: ["CLM-3", "CLM-8"], status: "resolved",
      resolution: { winning_claim_ids: ["CLM-3"], reproduction_ids: ["REP-1"], rationale: "Reproduced from the announcement.", resolver, resolved_at: "2026-09-01T12:00:00Z" },
    });
    return validateNameIntake(record, { census: [] });
  };
  assert.deepEqual(resolvedBy("harsharn10"), [], "a human controller may resolve");
  for (const bot of PRODUCER_IDS) assert.ok(resolvedBy(bot).length > 0, `${bot} may not resolve (schema)`);
  assert.ok(resolvedBy("Grok-Bot").some((e) => e.includes("non-bot controller")), "the lib check normalizes case and punctuation");
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

if (failures) { console.error(`${failures} failure(s)`); process.exit(1); }
console.log("all pipeline tests passed");
