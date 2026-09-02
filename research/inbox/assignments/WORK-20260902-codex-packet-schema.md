# Codex assignment: schema/packet.schema.json and retiring name-intake

Status: assigned. Open a draft PR from the branch named at the end of this file and keep it in draft.

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-codex-packet-schema
producer: codex
role: compiler
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
as_of: 2026-09-02T00:57:08Z
packet_tier: full
owned_slugs: []
allowed_paths:
  - schema/packet.schema.json
  - scripts/lib/packet-intake.mjs
  - scripts/lib/schemas.mjs
  - scripts/validate.mjs
  - scripts/test.mjs
  - scripts/test-pipeline.mjs
  - scripts/seed-stubs.mjs
  - scripts/seed-data.mjs
  - scripts/build-dependency-cards.mjs
  - docs/templates/research-packet-v2.md
  - fixtures/packets/**
forbidden_paths:
  - content/**
  - docs/research-system.md
  - docs/taxonomy.md
  - site/**
  - ops/**
```

## Objective

Give the packet frontmatter a real schema and make `npm run validate` enforce it, so a malformed
packet fails fast instead of silently reaching a human. Retire the old name-intake format it replaces.
Rewrite the packet template to match. Unblock `npm run seed` from the frozen `scripts/seed-data.mjs`
literal by teaching it to read a seed-tier packet when one exists.

## Required reading

1. This file's Output section.
2. `docs/research-system.md` §5 (the packet v2 shape, verbatim — this schema encodes exactly that) and
   §9 (Retired — the list of files and formats this assignment removes).
3. `schema/name-intake.schema.json`: the format being replaced. Reuse its shape where §5 agrees with
   it (claim/reproduction/conflict/possible-match objects are close cousins); the CLM-/CON-/REP-/R- id
   patterns carry over.
4. `schema/taxonomy.json`: `classification.primary_leaf` must be a key of `leaves`.
5. `research/inbox/assignments/WORK-20260902-grok-heavy-full-batch-1.md` § Output and
   `WORK-20260902-supergrok-pons-verify.md` § Output: two worked frontmatter examples at different
   tiers, already reviewed and treated as the reference shape.
6. `scripts/lib/name-intake.mjs`: the directory validator being replaced
   (`validateNameIntakeDirectory`) — your `packet-intake.mjs` plays the same role for
   `research/inbox/packets/`.
7. `scripts/seed-stubs.mjs` and `scripts/seed-data.mjs`: the current `npm run seed` path.

## Output

**`schema/packet.schema.json`.** One object matching `docs/research-system.md` §5 field for field:
`contract_version` (`const: "proofline-research-v2"`), `work_id` (`^WORK-[0-9]{8}-[a-z-]+$`),
`producer` (`grok-heavy|grok-bot|supergrok|codex|claude`, or a GitHub-id-shaped string), `role`
(`collector|verifier|compiler`), `base_sha` (40 lowercase hex), `slug`, `name`, `packet_tier`
(`seed|full|update`), `as_of` (date-time), `prior_packet` (string or null), `owned_slugs[]`,
`allowed_paths[]`; then `identity`, `classification` (`primary_leaf` must be one of
`schema/taxonomy.json`'s leaf keys), `qualifying`, `links[]`, `deployments[]`, `metrics[]`, `claims[]`
(id `^CLM-[1-9][0-9]*$`), `conflicts[]` (id `^CON-[1-9][0-9]*$`), `events[]` (id `^EVT-[1-9][0-9]*$`),
`receipts[]` (id `^R-[1-9][0-9]*$`), `gaps[]`. A claim's `class: verified` requires at least one
`reproduction_id`. `additionalProperties: false` throughout.

**`scripts/lib/packet-intake.mjs`.** `validatePacketDirectory()` walks `research/inbox/packets/**/*.md`
(mirroring `validateNameIntakeDirectory`'s shape), splits frontmatter from body, validates frontmatter
against your new schema, and checks the body's heading set against its tier: `full` needs all ten
headings from `docs/research-system.md` §5 in order (`What it is` through `Operations log`); `seed`
needs nothing, or if any body is present, at least `## What it is`; `update` needs nothing, or if any
body is present, only `## Verification passes` and/or `## Operations log` are allowed. Wire it into
`scripts/validate.mjs` in place of `validateNameIntakeDirectory`.

**`docs/templates/research-packet-v2.md`.** Replace `docs/templates/research-packet-v1.md`'s 18-section
table format with the frontmatter skeleton (copy the worked example from
`WORK-20260902-grok-heavy-full-batch-1.md` § Output, genericized back to placeholders) followed by the
ten body headings, each with one line of guidance. Delete `research-packet-v1.md`.

**Retire, per §9:** delete `schema/name-intake.schema.json`, `docs/templates/name-intake.yaml`,
`scripts/lib/name-intake.mjs`. Remove `"name-intake"` from the `NAMES` array in `scripts/lib/schemas.mjs`
and add `"packet"`. Remove the `validateNameIntakeDirectory` call from `scripts/validate.mjs` and the
name-intake test block from `scripts/test.mjs` and `scripts/test-pipeline.mjs` (the "New-name intake"
section and its import). `PRODUCER_IDS` is exported from the file you are deleting — move it to
`scripts/lib/packet-intake.mjs` and update every importer. Delete `research/inbox/names/README.md`
(the directory becomes empty; leave it removed, `research/inbox/packets/` is its replacement).

**`npm run seed` reads a packet.** `scripts/seed-stubs.mjs:26` hard-fails when a slug has no entry in
`scripts/seed-data.mjs`'s `SEED` object. Before that failure, look for a seed-tier packet at
`research/inbox/packets/<slug>/*.md` (newest filename if more than one); if found, parse and validate
it against your new schema, then derive the same `{symbol, summary, dependencies, deployments,
missing}` shape `SEED[slug]` provides today: `symbol` from `identity.symbols[0]`; `summary` from the
body's `## What it is` first paragraph, or `classification.rationale` if no body; `deployments` mapped
1:1 from the packet's `deployments[]`; `missing` from `gaps[].question`. Keep `scripts/seed-data.mjs`'s
`SEED` object working exactly as before as the fallback for every slug that has no packet, so none of
the 49 existing stubs regenerate differently — prove this with a diff-empty check in your tests. Do not
touch `scripts/compile-packet.mjs` — it is a parallel Codex assignment
(`WORK-20260902-codex-compile-packet`); some overlap between the two is expected and a controller
reconciles it.

**Decouple `scripts/seed-data.mjs` and `scripts/build-dependency-cards.mjs` from the quarantined
importer.** Both files import `HARVEST`/`GH`/`ACCESSED` from
`scripts/intake/2026-08-31/harvest-data.mjs` (1,239 lines, meant to be one-shot). Inline the specific
values each file actually uses (in `seed-data.mjs`, only `HARVEST[slug]?.deployments`; in
`build-dependency-cards.mjs`, the `GH` and `ACCESSED` string constants) directly into each file, and
delete the import. This must be a pure refactor: running `npm run seed` and
`node scripts/build-dependency-cards.mjs` before and after your change must produce byte-identical
output for every existing file. Prove it with a before/after diff in the PR body, not just a claim.

## Rules

- No conduct words in anything you write, including code comments and the new template.
- The packet schema must validate the two worked examples in required reading §5 above cleanly, and
  must reject a packet missing `reproduction_ids` on a `verified` claim, an unknown `primary_leaf`, and
  a duplicate id within one packet.
- Do not touch `docs/research-system.md` or `docs/taxonomy.md` — they are already correct for this
  contract; if you find a real disagreement between them and your schema, say so in the PR body instead
  of editing them.

## Completion and PR rules

Branch: `codex/20260902/WORK-20260902-codex-packet-schema` from `base_sha`.

PR title: `WORK-20260902-codex-packet-schema: schema/packet.schema.json and name-intake retirement`.

PR body: the YAML header from the top of this file, then: the schema in five lines, what
`packet-intake.mjs` checks, the before/after diff proof for the `seed-data.mjs` and
`build-dependency-cards.mjs` decoupling, and the output of `node scripts/test.mjs` and
`node scripts/validate.mjs`. List every deleted file by name. End with "Only the eleven allowed paths
were added, modified or deleted."

Do not merge, enable auto-merge, mark ready, or touch any other path. Commit trailer: `Producer: codex`.
`automerge-feed.yml` will comment "needs controller review" on this PR since it touches `scripts/` and
`schema/` — expected for every Codex tooling PR.
