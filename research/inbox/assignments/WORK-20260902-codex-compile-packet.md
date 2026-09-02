# Codex assignment: the packet compiler

Status: assigned. Open a draft PR from the branch named at the end of this file and keep it in draft.

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-codex-compile-packet
producer: codex
role: compiler
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
as_of: 2026-09-02T00:57:08Z
packet_tier: full
owned_slugs: []
allowed_paths:
  - scripts/compile-packet.mjs
  - scripts/lib/packet.mjs
  - scripts/test-compile.mjs
  - fixtures/compile-packet/**
forbidden_paths:
  - content/**
  - docs/**
  - schema/**
  - research/inbox/packets/**
  - site/**
  - ops/**
```

## Objective

Write `scripts/compile-packet.mjs <packet.md>`, the one script that turns a collector or verifier
packet into canonical `content/` files. Today every one of the 49 census rows was hand-written; this
script is what makes the packet pipeline real. It must be idempotent, refuse fields outside a
producer's role, hold the mainnet bar, and never invent a scoring judgment.

## Required reading

1. This file's Output section.
2. `docs/research-system.md` §2 (field ownership), §5 (packet v2 shape), §6 (hard gates), §7
   (evidence strength), §8 (stable ids). This is the contract; where anything below is unclear, it wins.
3. `schema/project.schema.json`, `schema/census.schema.json`, `schema/source-entry.schema.json`,
   `schema/feed.schema.json`, `schema/changelog.schema.json`, `schema/shared.schema.json` — the exact
   target shapes.
4. `scripts/lib/taxonomy.mjs` (`leafLabel`, `cohortForLeaf`) and `schema/taxonomy.json`.
5. `scripts/lib/research-md.mjs`: `REQUIRED_HEADINGS`, `PENDING_LINE`, and the tag grammar
   (`[class S-id...]`) your research output must satisfy.
6. `scripts/seed-stubs.mjs`: the existing writer style, and its `appendChangelog` helper — match this
   pattern rather than inventing a new one.
7. `content/projects/pons.yaml` and `content/research/pons.md`: the fullest hand-written record, for
   prose depth and tag style (your own output stays `coverage: stub` — see Rules).
8. `research/inbox/assignments/WORK-20260902-grok-heavy-full-batch-1.md` § Output: the exact packet
   frontmatter a collector produces. This is what your script parses. `schema/packet.schema.json` is
   being built in a parallel Codex run (`WORK-20260902-codex-packet-schema`) and may not exist at your
   base SHA — do not depend on it. Write your own structural check in `scripts/lib/packet.mjs` against
   the shape in §5 directly.

## Output

`scripts/compile-packet.mjs <path/to/packet.md> [--content-dir <dir>] [--dry-run]`. `--content-dir`
defaults to `content`, so tests can point it at a scratch copy. `--dry-run` prints the files it would
write and exits 0 without touching disk.

`scripts/lib/packet.mjs` exports pure functions with no I/O, so they are unit-testable:

- `parsePacket(text)` → `{ frontmatter, body }`. Split on the `---` fences; parse frontmatter as YAML.
- `checkPacket(frontmatter, body)` → `errors[]`. Required top-level keys per §5; `work_id` matches
  `^WORK-[0-9]{8}-[a-z-]+$`; `base_sha` is 40 lowercase hex; `packet_tier` is `seed|full|update`;
  every `CLM-n`/`CON-n`/`EVT-n`/`R-n`/`REP-n` referenced by id resolves inside the same packet; every
  claim with `class: verified` carries at least one `reproduction_id`; nothing in the packet sets a
  field the role does not own (a `collector` or `verifier` packet may never carry a `scoring` block, a
  non-default `review.approver`, or `channel_recommendation` outside `not-evaluated|pending` — refuse
  and name the field).
- `compile(packet, priorProject, priorCensusRow, priorSources, priorFeed)` → the new/updated objects for
  each output file, plus the changelog entry. Pure — the CLI does the file I/O.

### Mapping, one rule per output file

- **`content/census.yaml` row.** `category` is always `leafLabel(classification.primary_leaf)` — refuse
  the packet if the leaf is not a key in `schema/taxonomy.json`. `identity` copies straight from the
  packet's `identity` block. `tree: { primary, secondary }` from `classification`. `qualifying.<test>`:
  `value = status === "pass"`, `note` from the packet, `verified = true` only when every claim id it
  cites has `class: verified`. Create the row if the slug is new; otherwise patch these fields in place
  and leave everything else untouched.
- **`content/projects/<slug>.yaml`.** `coverage` is always `"stub"`, even for `packet_tier: full` (see
  Rules — this is deliberate). `summary` is the packet body's first `## What it is` paragraph; if the
  body is absent, fall back to `classification.rationale`; on an update with neither, keep the existing
  summary. `deployments[]` merge by `(chain, address)`: a packet deployment updates the matching existing
  row or appends a new one; `verified: true` only when a `class: verified` claim backs that address and
  `address.exists_on_4663 === true`. `findings.missing` comes from `gaps[]`; `findings.positive` and
  `findings.risk` come from tagged paragraphs in the body's `Material risks` and `Verification passes`
  sections, split by tag class (`verified`/`claim`→positive-or-risk by sense, `disputed`→risk with a
  matching `findings.unresolved` line, `inference`→risk). `review` is untouched on an update; on a new
  project set `researcher: <producer>`, `approver: "pending"`, `methodology_version: "proofline-v1.0"`,
  `reviewed_at: <as_of date>`, `published_at: null`. Never write or touch `scoring`.
- **`content/sources/<slug>.yaml`.** Append-only. Dedupe by normalized URL plus normalized claim
  (§8 formula) against every existing entry; a match reuses the existing `S<n>`. A genuinely new receipt
  gets the next `S<n>` above the current maximum — never renumber or reuse a retired number. Compute the
  same content-hash key for every entry you add (`sha1(normalized-url|normalized-claim)`, first 16 hex,
  §8), but do not add a `key` field to the YAML yet: `schema/source-entry.schema.json` does not accept
  one at your base SHA, and adding it is `WORK-20260902-codex-stable-ids`'s job, running in parallel.
  Keep your computed key only to dedupe within this run; once the sibling migration lands, its keys and
  yours agree because both use the same formula.
- **`content/feed/<slug>.yaml`.** One item per packet event (`EVT-n`) whose `site_recommendation` is
  `feed`, `profile`, or `both`. Item `id` is the hash from §8: `sha1(normalized sourceUrl | slug | date
  | normalized title)`, first 16 hex — if the event has no `sourceUrl`, use the first cited receipt's
  URL instead and say so in a code comment. Never reuse the old `<slug>-N` scheme.
- **`content/research/<slug>.md`.** Map the packet body's ten headings into
  `scripts/lib/research-md.mjs`'s `REQUIRED_HEADINGS` (eleven headings): `Identity` from
  `identity`/`classification` plus the body's `What it is`; `Deployment` from `deployments[]`;
  `Control` and `Security` split from the body's `Control and security` section by whether the
  paragraph is about who holds power (`Control`) or about audits/bounties/incidents (`Security`);
  `Engineering` has no packet source today — leave `_Research pending._`; `Team` from `Team and
  provenance`; `Product and economics` from `Product and mechanics` plus `Economics and activity`;
  `Communications` from `company`/`ct` events plus any `communications.*` claim; `Findings` from
  `Material risks` and `What could go wrong`; `Sources` lists every `S<n>` used elsewhere in the
  document, one line each, no evidence tags required (`Sources` is not a material section per
  `research-md.mjs`); `Review metadata` is a short generated paragraph naming the producer, `as_of`, and
  `methodology_version: proofline-v1.0`, also untagged. Every paragraph you write into `Deployment`
  through `Findings` must end with `[class S-id...]`, using the sources you just assigned above.
- **`content/changelog.yaml`.** One new entry: `date` = `as_of` date, `slug`, `type: "coverage"` for a
  new project or `"finding"`/`"correction"` for an update (correction when a claim supersedes a prior
  value), `severity` (`Info` unless a risk-class finding is material), `title`/`detail` in plain reader
  voice (no "the desk", no producer name), `prior`/`new` naming only the fields that actually changed,
  `reviewer: <producer>`, `methodology_version: "proofline-v1.0"`, `review_key` = `sha1(date|slug|type|
  title)` first 16 hex (§8). Append via the same text-splice technique `scripts/seed-stubs.mjs`'s
  `appendChangelog` uses, so existing comments and formatting survive.

## Rules

- **Coverage stays `stub`, always.** The packet contract has no `scoring` section — collectors and
  verifiers never produce one, and the compiler must never fabricate a security/factor/confidence/risk
  judgment. `coverage: full` and the `scoring` block remain a distinct, human step, exactly like pons.
  A `packet_tier: full` packet still compiles a rich stub: real deployments, real sources, real findings,
  real research prose. It just does not flip `coverage`.
- **Conflicts stay.** When a packet claim contradicts the current canonical value, write both: keep the
  old value in place, add the new claim's evidence to `findings.unresolved`, and note the `CON-n` id in
  the changelog `detail`. Never silently overwrite.
- **Idempotent.** Running the same packet twice produces the same output the second time (no duplicate
  sources, no duplicate feed items, no duplicate changelog entry — detect by `review_key`).
- **Mainnet bar.** Only promote `lifecycle` to `mainnet` when a deployment claim is `class: verified`
  with `address.exists_on_4663: true`, or a metric claim has `authority: onchain` or `authority:
  aggregator` backing it, or a `docs`-kind receipt publishes the same address. Otherwise keep the prior
  lifecycle and file a gap.
- **Field ownership.** Refuse (exit non-zero, no files written) any packet whose `role` is `collector`
  or `verifier` and that nonetheless tries to set scoring, a non-`pending` `review.approver`, or a
  `channel_recommendation` beyond `not-evaluated`/`pending`. Name the offending field in the error.

## Completion and PR rules

Branch: `codex/20260902/WORK-20260902-codex-compile-packet` from `base_sha`.

PR title: `WORK-20260902-codex-compile-packet: scripts/compile-packet.mjs`.

PR body: the YAML header from the top of this file, then: what `scripts/compile-packet.mjs` does in
five lines, the fixture cases in `scripts/test-compile.mjs` and what each proves (at minimum: a
brand-new slug from a seed packet, an existing slug updated from a full packet with a new deployment,
and a packet whose claim conflicts with canonical content), and the output of `node
scripts/test-compile.mjs`. End with "Only the four allowed paths were added."

Do not merge, enable auto-merge, mark ready, or touch any other path. Do not run the compiler against
real `research/inbox/packets/` content in this PR — there is none yet; prove correctness on fixtures
only. Commit trailer: `Producer: codex`. `automerge-feed.yml` will comment "needs controller review" on
this PR since it touches `scripts/` — that is expected for every Codex tooling PR, not a failure.
