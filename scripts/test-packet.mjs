// Packet v2 tests (research-system §5): the fixtures under fixtures/packets/, the tier rules, the path
// check, the mainnet bar and the taxonomy enum. Same shape as scripts/test.mjs — plain node asserts, one
// `ok <name>` line per group, non-zero exit on any failure. Run from the repo root:
//   node scripts/test-packet.mjs
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { parse, stringify } from "yaml";
import { parsePacket, validatePacket, BODY_SECTIONS } from "./lib/packet.mjs";
import { validateAgainst, TAXONOMY_LEAVES } from "./lib/schemas.mjs";

let failures = 0;
async function test(name, fn) {
  try { await fn(); console.log(`ok   ${name}`); }
  catch (err) { failures++; console.error(`FAIL ${name}: ${err.message}`); }
}

const census = parse(await readFile("content/census.yaml", "utf8"));
const fixture = async (name) => parsePacket(await readFile(`fixtures/packets/${name}.md`, "utf8"));
const pathFor = (record) => `research/inbox/packets/${record.slug}/${record.work_id}.md`;
const check = (packet, options = {}) => validatePacket(packet, { census, path: pathFor(packet.frontmatter), ...options });
/** Rebuild a packet from an edited frontmatter object, so a test can change one field. */
const withFrontmatter = (packet, edit) => {
  const frontmatter = structuredClone(packet.frontmatter);
  edit(frontmatter);
  return parsePacket(`---\n${stringify(frontmatter, { lineWidth: 0 })}---\n\n${packet.body}\n`);
};

// 1. The four fixtures behave as advertised.
await test("packet fixtures", async () => {
  const seed = await fixture("seed-valid");
  const full = await fixture("full-valid");
  assert.deepEqual(check(seed), [], "seed-valid is clean");
  assert.deepEqual(check(full), [], "full-valid is clean");

  const unreproduced = await fixture("verified-without-reproduction");
  const unreproducedErrors = check(unreproduced);
  assert.ok(unreproducedErrors.length, "verified-without-reproduction is rejected");
  assert.ok(
    unreproducedErrors.some((error) => error.includes("reproduction")),
    `a verified claim without a reproduction is named as such: ${unreproducedErrors.join("; ")}`,
  );

  const resolver = await fixture("collector-sets-resolution");
  const resolverErrors = check(resolver);
  assert.ok(
    resolverErrors.some((error) => error.includes("resolution") && error.includes("collector")),
    `a collector may not resolve a conflict: ${resolverErrors.join("; ")}`,
  );
  // The same packet filed by a controller-role compiler is fine, so the rule is about the role.
  const compiled = withFrontmatter(resolver, (fm) => { fm.role = "compiler"; fm.producer = "harsharn10"; });
  assert.deepEqual(check(compiled), [], "a compiler may carry a resolved conflict");
});

// 2. The template is the shape producers copy, so it has to pass at the path it would be filed at.
await test("research-packet-v2 template validates", async () => {
  const template = parsePacket(await readFile("docs/templates/research-packet-v2.md", "utf8"));
  const errors = validatePacket(template, {
    census,
    path: "research/inbox/packets/example-protocol/WORK-20260902-grok-heavy-example-protocol.md",
    source: "docs/templates/research-packet-v2.md",
  });
  assert.deepEqual(errors, [], "template is clean");
  assert.deepEqual(template.sections.map((section) => section.heading), BODY_SECTIONS, "ten body sections in order");
});

// 3. Tier rules: seed needs the header blocks, full adds deployments/claims/gaps and the whole body,
//    update needs `supersedes`.
await test("packet tier rules", async () => {
  const seed = await fixture("seed-valid");
  const full = await fixture("full-valid");

  for (const block of ["identity", "classification", "qualifying", "receipts"]) {
    const stripped = withFrontmatter(seed, (fm) => { delete fm[block]; });
    assert.ok(check(stripped).some((error) => error.includes(block)), `seed requires ${block}`);
  }

  const seedAsFull = withFrontmatter(seed, (fm) => { fm.packet_tier = "full"; });
  const seedAsFullErrors = check(seedAsFull);
  for (const block of ["deployments", "claims", "gaps"]) {
    // `claims` and `gaps` are present in the seed fixture; `deployments` is not, and the body is empty.
    if (block === "deployments") assert.ok(seedAsFullErrors.some((error) => error.includes("deployments")), "full requires deployments");
  }
  for (const heading of BODY_SECTIONS)
    assert.ok(seedAsFullErrors.some((error) => error.includes(`"${heading}"`)), `full requires the body section ${heading}`);

  const shuffled = parsePacket(
    `---\n${stringify(full.frontmatter, { lineWidth: 0 })}---\n\n## Why it matters\n\nx\n\n## What it is\n\ny\n` +
    BODY_SECTIONS.slice(2).map((heading) => `\n## ${heading}\n\nz\n`).join(""),
  );
  assert.ok(check(shuffled).some((error) => error.includes("order")), "full body sections must run in order");

  const update = withFrontmatter(seed, (fm) => { fm.packet_tier = "update"; });
  assert.ok(check(update).some((error) => error.includes("supersedes")), "update requires supersedes");
  const updateOk = withFrontmatter(seed, (fm) => {
    fm.packet_tier = "update";
    fm.supersedes = "WORK-20260901-grok-heavy-seed-example";
  });
  assert.deepEqual(check(updateOk), [], "an update naming its prior work id is clean");
});

// 4. The file's own path, its allowed_paths and its owned_slugs.
await test("packet path check", async () => {
  const seed = await fixture("seed-valid");
  assert.ok(
    validatePacket(seed, { census, path: "research/inbox/packets/other-slug/WORK-20260902-grok-heavy-seed-example.md" })
      .some((error) => error.includes("must be filed at")),
    "a packet filed under the wrong slug is rejected",
  );
  const undeclared = withFrontmatter(seed, (fm) => { fm.allowed_paths = ["research/inbox/packets/seed-example/other.md"]; });
  assert.ok(check(undeclared).some((error) => error.includes("allowed_paths")), "allowed_paths must list the packet's own path");
  const unowned = withFrontmatter(seed, (fm) => { fm.owned_slugs = []; });
  assert.ok(check(unowned).some((error) => error.includes("owned_slugs")), "owned_slugs must contain the slug");

  // A 40-zero base SHA is a template's placeholder, accepted only when the file read is a template.
  const placeholder = withFrontmatter(seed, (fm) => { fm.base_sha = "0".repeat(40); });
  assert.ok(check(placeholder).some((error) => error.includes("base_sha")), "a placeholder base SHA is rejected in a filed packet");
  assert.deepEqual(
    validatePacket(placeholder, { census, path: pathFor(placeholder.frontmatter), source: "docs/templates/research-packet-v2.md" }),
    [],
    "a placeholder base SHA is accepted in a template",
  );
});

// 5. lifecycle: mainnet needs evidence beyond the project's own post.
await test("packet mainnet rule", async () => {
  const seed = await fixture("seed-valid");
  const announced = withFrontmatter(seed, (fm) => { fm.classification.lifecycle = "mainnet"; });
  assert.ok(check(announced).some((error) => error.includes("lifecycle mainnet")), "an announcement receipt does not reach mainnet");

  const withDocs = withFrontmatter(seed, (fm) => {
    fm.classification.lifecycle = "mainnet";
    fm.receipts.push({
      id: "R-2", publisher: "Seed Example", title: "Deployed addresses", url: "https://docs.seed-example.org/addresses",
      published_at: null, accessed_at: "2026-09-02T13:20:00Z", kind: "docs", authority: "primary",
      authenticity: "confirmed", supports: ["CLM-3"], excerpt: "Scanner 0x4444… on chain 4663.",
    });
    fm.claims.push({
      id: "CLM-3", field: "lifecycle", value: "mainnet", class: "claim", observed_at: "2026-09-02T13:20:00Z",
      receipt_ids: ["R-2"], reproduction_ids: [], supersedes: null,
    });
  });
  assert.deepEqual(check(withDocs), [], "docs publishing a live address meets the bar");

  const full = await fixture("full-valid");
  assert.equal(full.frontmatter.classification.lifecycle, "mainnet");
  assert.deepEqual(check(full), [], "an explorer receipt on a lifecycle claim meets the bar");
});

// 6. Referential integrity and the census collision disclosure.
await test("packet referential checks", async () => {
  const seed = await fixture("seed-valid");
  const dangling = withFrontmatter(seed, (fm) => { fm.claims[0].receipt_ids = ["R-9"]; });
  assert.ok(check(dangling).some((error) => error.includes("missing receipt R-9")), "a dangling receipt id is rejected");

  const duplicate = withFrontmatter(seed, (fm) => { fm.claims.push(structuredClone(fm.claims[0])); });
  assert.ok(check(duplicate).some((error) => error.includes("duplicate claim id")), "a reused claim id is rejected");

  const collision = withFrontmatter(seed, (fm) => { fm.identity.aliases = ["Pons"]; });
  assert.ok(check(collision).some((error) => error.includes("possible_matches")), "a canonical name collision must be recorded");
  const disclosed = withFrontmatter(seed, (fm) => {
    fm.identity.aliases = ["Pons"];
    fm.identity.possible_matches = [{ slug: "pons", signals: ["same-normalized-name"], contrary_signals: ["different domain and handle"] }];
  });
  assert.deepEqual(check(disclosed), [], "a recorded collision is not an error");

  const grok = withFrontmatter(seed, (fm) => { fm.producer = "supergrok"; });
  assert.ok(check(grok).some((error) => error.includes("verifier")), "supergrok files verifier packets only");
});

// 7. The taxonomy enum in the schema is the taxonomy registry, not a copy that drifted.
await test("packet taxonomy enum matches schema/taxonomy.json", async () => {
  const taxonomy = JSON.parse(await readFile("schema/taxonomy.json", "utf8"));
  const mirror = JSON.parse(await readFile("schema/packet.schema.json", "utf8")).$defs.taxonomyLeaf.enum;
  assert.deepEqual([...mirror].sort(), Object.keys(taxonomy.leaves).sort(), "the checked-in mirror equals the taxonomy keys");
  assert.deepEqual([...TAXONOMY_LEAVES].sort(), Object.keys(taxonomy.leaves).sort(), "the loader injects the taxonomy keys");

  const seed = await fixture("seed-valid");
  const drifted = structuredClone(seed.frontmatter);
  drifted.classification.primary_leaf = "tooling/not-a-leaf";
  assert.ok(validateAgainst("packet", drifted).length > 0, "an unknown leaf is rejected");
  for (const leaf of Object.keys(taxonomy.leaves)) {
    const ok = structuredClone(seed.frontmatter);
    ok.classification.primary_leaf = leaf;
    assert.deepEqual(validateAgainst("packet", ok), [], `leaf ${leaf} is accepted`);
  }
});

console.log(failures ? `${failures} failure(s)` : "all packet tests passed");
process.exit(failures ? 1 : 0);
