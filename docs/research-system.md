# Proofline research system

Status: normative operating contract, version 2, 2026-09-02. Replaces version 1.

This is the one contract for everyone who touches the corpus: Grok Heavy, the scheduled Grok desk,
SuperGrok, Codex, Claude, and the owner. `PRD.md` stays the product and editorial authority. The files
under `schema/` are the enforced machine contract. The producer notes under `docs/integrations/` and
the runtime skills under `.grok/` restate this document for one producer. Where they differ, this
document wins. Dated files under `research/inbox/` other than `packets/` and `assignments/` are
historical evidence, not instructions.

## 1. Objects

| Object | Where | Writer |
| --- | --- | --- |
| Packet | `research/inbox/packets/<slug>/<work-id>.md` | one collector or verifier, one per run |
| Canonical profile | `content/census.yaml` row, `content/projects/<slug>.yaml`, `content/research/<slug>.md`, `content/sources/<slug>.yaml`, `content/feed/<slug>.yaml` | the compiler |
| Pulled facts | `content/pulled/<slug>.yaml` | `scripts/pull.mjs` only, dated, never hand-edited |
| Changelog | `content/changelog.yaml` | the compiler |
| Channel publication | `channel:` object on a changelog entry, decisions in `ops/telegram-review.json` | controller, then publisher |

A packet can be rejected without deleting the evidence it holds. A profile merge never implies a
Telegram post. An event can reach the site feed without changing the profile.

## 2. Field ownership

Ownership is by path. A PR that writes outside its class is refused.

| Class | Producers | May write |
| --- | --- | --- |
| Collector, verifier | `grok-heavy`, `grok-bot`, `supergrok` | `research/inbox/packets/<slug>/<work-id>.md` for the assigned slugs. Reads `research/inbox/assignments/`. Nothing under `content/`. |
| Compiler | `codex`, `claude`, or the owner, through `scripts/compile-packet.mjs` (Codex C1; by hand until it lands) | `content/census.yaml`, `content/projects/`, `content/sources/`, `content/feed/`, `content/research/`, `content/changelog.yaml`, `content/accounts.yaml` |
| Machine | `scripts/pull.mjs` (Codex C2), `npm run score` | `content/pulled/<slug>.yaml`, `build/` |
| Editorial | the controller | `research/inbox/assignments/<work-id>.md`, `review.approver`, conflict resolutions, corrections, the `channel:` object, `ops/telegram-review.json` |

Scores, confidence, risk, rank, trending and publication fingerprints are derived. Nobody types them.
CI (`automerge-feed.yml`) classifies PRs from `grok/**`, `grok-heavy/**`, `supergrok/**` and
`codex/**` branches: the allowlist is `research/inbox/packets/**` and `research/inbox/assignments/**`.
It comments and never merges.

## 3. Roles

- **Collector** (Grok Heavy or the Grok desk): finds leads, official announcements, receipts, atomic
  claims, candidate events and possible identity matches. Proposes taxonomy and lifecycle with a
  rationale. Never sets scores, approval, conflict resolution, canonical identity or channel state.
- **Verifier** (SuperGrok): reproduces identity cross-links, deployments, control paths, activity and
  metrics from a collector packet or a canonical profile. Files its own packet with `role: verifier`
  and `prior_packet` set. Never edits the collector packet and never becomes a second canonical writer.
- **Compiler** (Codex, Claude or the owner): owns one slug at a time. Rebases on `main`, maps packet
  fields into the schemas, assigns source ids, deduplicates, keeps conflicts open, writes the canonical
  diff and the changelog entry. Last write never wins.
- **Controller** (the owner or a named delegate): writes assignments, approves identity merges,
  conflict resolutions, scoring judgments, corrections and canonical publication. Approval is a real
  action by a real id, never a placeholder.
- **Publisher**: sends only fingerprinted channel items approved in `/review`.

## 4. Assignment, branch and PR protocol

The controller writes `research/inbox/assignments/<work-id>.md`: a fenced YAML block with the packet
header fields of §5 (through `allowed_paths`) plus the objective in prose. The packet header copies
it. `work_id` is `WORK-<YYYYMMDD>-<producer>-<slug>`.

Branch, one form only:

```text
<producer>/<YYYYMMDD>/<work-id>
```

Example: `grok-heavy/20260901/WORK-20260901-grok-heavy-mancer`. One PR per run. The PR title is the
work id. The PR body is the packet frontmatter header. Every commit message ends with the trailer
`Producer: <id>`. Never share a branch between producers, never push onto another producer's branch,
never merge or enable auto-merge. A collector run that finds nothing new opens no branch and no PR.
A verifier run always files its packet so the checks have an audit trail.

## 5. Packet v2

One file per run: `research/inbox/packets/<slug>/<work-id>.md`. YAML frontmatter is the dossier and
validates against `schema/packet.schema.json`. `npm run validate` runs that check over every packet in
the directory (`scripts/lib/packet.mjs`), together with the referential rules a schema cannot express:
packet-local ids resolve, conflicts join claims that exist, a `verified` claim carries a reproduction
id, the mainnet bar below, the file's own path against `allowed_paths` and `owned_slugs`, the role and
producer boundaries, a census identity collision that was not recorded, and the body's section set for
the tier. The markdown body is the narrative. `docs/templates/research-packet-v2.md` is the worked
example every producer copies.

Header: `contract_version: proofline-research-v2` · `work_id` · `producer` (`grok-heavy | grok-bot |
supergrok | codex | claude | <github id>`) · `role` (`collector | verifier | compiler`) · `base_sha`
(full 40-character `main` SHA) · `slug` · `name` · `packet_tier` (`seed | full | update`) · `as_of`
(ISO-8601 with timezone) · `prior_packet` (path or null) · `owned_slugs[]` · `allowed_paths[]`.

Dossier blocks:

- `identity` {canonical_name, aliases[], symbols[], entity_kind, chain_scope, official_domain,
  official_handle, repository, possible_matches[] {slug, signals[], contrary_signals[]}}.
- `classification` {primary_leaf, secondary_leaves[], mechanism_tags[], ecosystem_role, lifecycle,
  coverage_recommendation, evidence_state, rationale}. Vocabulary: `docs/taxonomy.md`.
- `qualifying` {deployed_on_chain, native_play, citable, research_story}, each {status
  (`pass | fail | unknown`), claim_ids[], note}.
- `links[]` {kind (`site | app | docs | whitepaper | x | github | telegram | discord | other`), url,
  authenticity (`confirmed | unconfirmed | conflicted`)}.
- `deployments[]` {label, role, address {value, chain, source (`bio | docs | audit | explorer |
  third-party`), seen, exists_on_4663, explorer_source_verified}, receipt_ids[]}. Both booleans default
  to `null`. Verified proxy source never implies a verified implementation.
- `metrics[]` {kind, value, currency, as_of, window, method, class, receipt_ids[]}.
- `claims[]` `CLM-n` {field, value, class, observed_at, receipt_ids[], reproduction_ids[], supersedes}.
- `conflicts[]` `CON-n` {field, claim_ids[], material_effect, status (`open | resolved`), resolution
  {winning_claim_ids[], reproduction_ids[], rationale, resolver, resolved_at} left empty by collectors
  and verifiers}.
- `events[]` `EVT-n` {type (`company | ct | onchain | risk`), occurred_at, observed_at,
  affected_fields[], evidence_state (`verified | claim | disputed | unknown`), impact (`routine |
  material | urgent`), site_recommendation (`feed | profile | both | none`), channel_recommendation
  (`none | review`), receipt_ids[]}.
- `receipts[]` `R-n` {publisher, title, url, published_at, accessed_at, kind (the source-entry kinds),
  authority (`onchain | primary | independent | aggregator | social | unknown`), authenticity,
  supports[], excerpt (500 characters or fewer)}.
- `gaps[]` {priority (`P0 | P1 | P2`), question, checked, next}.

Ids are packet-local, start at 1, and are never reused. An update packet continues numbering from the
highest id in `prior_packet`. Claim classes are `verified | claim | inference | disputed | unknown`;
`verified` requires at least one `reproduction_id`. A required field the producer attempted and could
not establish is written as the string `NULL — <reason>`. Omission is not completion.

Vocabulary bridges until the schemas migrate:

- Coverage: packets use `candidate | seed | full`. The census and project schemas accept `full | stub`.
  The compiler maps `seed` to `stub` and `full` to `full`. `candidate` never becomes a census row.
- Lifecycle: a packet may say `unknown`. The census never does. The compiler refuses to create or change
  a census row from a packet whose lifecycle is `unknown`; the gap is filed and the row stays as it was.
- `lifecycle: mainnet` needs an explorer or RPC receipt, a DefiLlama chain-slice figure, or docs that
  publish live addresses. A project post alone is `announced`.
- Qualifying tests: `pass` compiles to `value: true`, `fail` and `unknown` to `value: false` with the
  note; `verified: true` only when every cited claim is `verified`.
- Account proposals (tier, role, slug, note, flags for an X handle) are claims with field
  `account.<handle>.<axis>`; the compiler writes `content/accounts.yaml`.

Body sections, in this order: What it is · Why it matters · What could go wrong · Product and
mechanics · Control and security · Team and provenance · Economics and activity · Material risks ·
Verification passes · Operations log. Every material sentence cites `[R-n]`.

For seed and full packets collected on or after 2026-09-03, three card inputs are required. The first
paragraph under `## What it is` is the reader summary (mechanism first; target 80 words, hard maximum
120). A separate `Themes: tag-a, tag-b` line supplies up to five lowercase tags. Every event carries a
title, a summary containing what was posted, and at least one receipt whose URL opens the post or chain
read; `account` records the `@handle` when the event is a post. Older packet-v2 files remain valid.

Tiers: **seed** = frontmatter required, body optional. **full** = both, with all three verification
passes (receipts, numbers, adversarial) recorded. **update** = frontmatter with `supersedes: <prior
work_id>`, only new or superseded claims and events, their receipts, and the Operations log. An update
never rewrites a prior assertion; it supersedes it by id.

A discovery round files one seed packet with `slug: discovery-inventory`. Each name is a claim with
field `candidate` and value `<proposed-slug> | <name> | <handle> | <domain>`, with receipts and its
matching signals under `identity.possible_matches`. Accepted names get their own seed packet later.

## 6. Flow and hard gates

1. **Assign.** The controller checks coverage and writes the assignment: slug, tier, base SHA, scope.
2. **Dedupe.** The producer checks canonical names, aliases, domains, handles, repositories,
   deployments and pending packets. Possible matches are recorded even when rejected.
3. **Collect.** The collector files atomic claims with receipts.
4. **Verify.** The verifier reproduces, checks numbers, and records the strongest contrary explanation
   in its own packet.
5. **Compile.** The compiler maps supported fields into canonical files, assigns ids, and records every
   dropped or deferred proposal in the changelog detail.
6. **Validate.** `npm run validate`, cross-checks, scoring, site build, release policy, stale-base check.
7. **Review.** The controller resolves material conflicts and approves the exact head.
8. **Merge.** Canonical content lands; the site may update.
9. **Channel decision.** A separate editorial choice: publish, roundup, site-only, hold, reset.
   No `channel:` object means no Telegram candidate.

Hard stops:

- a PR that touches a path outside the packet's `allowed_paths` or its writer class;
- frontmatter that fails the schema, or ids that do not resolve inside the packet;
- an open material identity conflict;
- a `verified` claim, metric or deployment without a reproduction id;
- an address, metric or event without a receipt;
- `lifecycle: mainnet` without the §5 bar, or `lifecycle: unknown` reaching the census;
- a stale base that overlaps another merged change to the same slug or a global file;
- the same id with different content on merge;
- a full packet without its three verification passes;
- a collector or verifier writing scores, approval, corrections or channel decisions.

### Unattended compile

Steps 5 and 6 run on a schedule, with no human in the loop. `.github/workflows/compile.yml` fires every
six hours at :47 — thirty minutes after the pull at :17, sharing its `main-bots` concurrency group so
only one bot writes main at a time — and runs `scripts/compile-inbox.mjs`:

1. **Collect.** Every remote branch under `grok-heavy/`, `supergrok/`, `grok/` or `codex/` that is not
   merged into main, or the one branch given to `workflow_dispatch`. Packet files under
   `research/inbox/packets/` that differ from main are written into the working tree. A file main already
   carries with an `as_of` at least as new is left alone: main's copy is the one that compiled and a
   controller may have corrected it, so a packet that supersedes it must carry a newer `as_of`.
2. **Validate.** `validatePacketDirectory` runs over the whole batch at once, so the per-(`work_id`,
   `slug`) uniqueness check sees every packet. A packet with errors is put back the way main has it and
   its errors are collected against its branch; the rest of the batch carries on. Reverting one packet
   can clear an error another was blamed for, so validation repeats until nothing new is reverted.
3. **Compile.** Oldest `as_of` first, so a later packet supersedes an earlier one in the same batch. Each
   packet goes through the same `compile()` path as `scripts/compile-packet.mjs`, and every notice —
   auto-tagged paragraph, skipped metric, skipped deployment, lifecycle kept — is collected per packet.
4. **Gate.** `npm run validate:release` must report 0 errors and `npm run score` must succeed. If either
   fails, `content/` and `research/inbox/packets/` are reverted, the report says why, and the script exits
   2. A red main is never pushed.
5. **Push.** The workflow commits `content/` plus the packets it compiled as `proofline-bot`, message
   `compile: <n> packets from <branches>` with the trailer `Producer: compile-bot`, then rebases onto main
   and pushes, retrying three times. Copying the packets onto main is what makes the next run a no-op: the
   branch file no longer differs. Render redeploys from main.

The report is `build/compile-report.md`, with `build/compile-report.json` for the workflow. Per branch it
lists what compiled, what was skipped and why, the notices, the share-bar names before and after, and the
compiled slugs.

What the schedule does not change:

- **A producer never writes `content/**`.** The compiler is its only writer, and packet files are all
  this job reads off a branch.
- **No PR is merged.** Packets are lifted off branches; the branch and its PR stay open for a controller.
- **A packet compiles only if it validates**, and coverage never lowers and scoring is never touched —
  both properties of `compile()` itself.
- **A discovery inventory is not a project.** A packet whose slug is `discovery-inventory`, or whose
  `identity.entity_kind` is `unknown` with a canonical name containing "inventory", is a list of candidate
  names. It is validated and kept as a record, reported as `inventory: N candidates`, and never compiled:
  compiling one mints a registry row, a research document and a source ledger for a list. Those names
  become assignments (§4) first.
- A packet naming a possible match that is being created in the same batch is skipped that round and
  compiles on the next one, once the match is in the census.

Nothing fails silently. Skipped packets are commented once per distinct error set on the producer's open
PR, a failed gate opens or updates the single issue "Compile gate failed" with the report, and the run
goes red.

## 7. Evidence, authenticity and conflicts

Evidence strength is field-specific. A project post proves that the project said something. It does
not prove a live deployment, a contract role, a metric, an audit scope or an official identity.

| Field | Strongest evidence first |
| --- | --- |
| Contract, address, role | reproduced RPC or explorer result, then docs naming the same chain and address, then official announcement, then third party |
| Official identity | bidirectional site, docs and handle cross-link, then repository-organization link, then one-sided social claim, then directory or media |
| Lifecycle | reproduced onchain activity, then docs publishing live addresses, then official launch claim, then media or social |
| Audit | audit artifact whose scope and commit match the deployment, then auditor announcement, then project claim |
| Metric | reproduced onchain query, then primary API or dashboard, then named aggregator, then social claim |
| Team, control | signed or onchain role, or first-party legal or docs record, then attributable repository, then official social, then third party |

Freshness breaks a tie only when two sources cover the same chain, contract, version and window. A
newer post does not replace an older reproduced deployment because it is newer.

Conflicts: conflicting values stay as separate claims joined by a `CON-n` record. Never replace one
with the other, average numbers, or let the latest PR win. While a material conflict is open, identity
status is `conflicted` when the name, handle, domain or ownership is disputed; lifecycle cannot be
promoted from the disputed claim; the disputed value cannot become a verified finding, score input or
channel post. A conflict resolves only when a controller records the winning claim ids, at least one
reproduction id, a dated rationale and their id. Losing claims stay as disputed or superseded.

Identity merges: never on display name, logo, ticker, bio wording or one account's assertion. Two
records are one entity only when at least two strong identifiers agree and one is reproduced: domain
and handle link to each other; a verified deployment, deployer or ownership graph is shared; official
repository or docs identify the same product and chain; a migration announcement links old and new.
On an approved merge the compiler keeps the older accepted slug unless the official identity changed,
unions aliases and sources, deduplicates sources by normalized URL plus claim, merges feed items by
stable id, and writes a correction entry when a public name, lifecycle, deployment or conclusion changes.

Conduct: never write a verdict about a person, team or account. The only flags are `handle-collision
| unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision`, each with
a receipt. Describe what was posted, never intent. `npm run validate` fails on conduct words.

## 8. Updates, feed and publication

Stable ids are content hashes, never positions. Normalize a URL by lowercasing scheme and host,
dropping the fragment, dropping `utm_*`, `ref`, `s` and `t` query parameters, and dropping a trailing
slash. Normalize text by trimming and collapsing whitespace. Hash = SHA-1 of the UTF-8 parts joined by
`|`; the id is the first 16 hex characters.

- Source entry identity: `sha1(normalized url | normalized claim)`. The ledger keeps `S<n>` as the
  display id; the compiler assigns new ids above the current maximum and never renumbers. Same hash
  means the same entry. Same `S<n>` with a different hash is a hard conflict.
- Feed item `id`: `sha1(normalized sourceUrl | slug | date | normalized title)`. `date` is the post
  date; a post captured without its date is dated to the capture date and the body says so.
- Changelog `review_key`: `sha1(date | slug | type | title)` computed once when the entry is created
  (`reviewKeyFor` in `scripts/lib/telegram.mjs`) and never recomputed, so a later title edit does not
  mint a new key. The sender prefers it over the title-based fallback.

For every event the compiler makes three independent decisions: does it change durable profile state,
does it belong in the site feed, is it eligible for channel review. Routine source additions, wording
changes, internal metadata and ordinary stubs stay site-only. Channel criteria, the publication object
and the card format live in `docs/channel-publishing.md`.

The compiler maps a URL-backed packet event into `content/feed/<slug>.yaml`: the event summary becomes
the body, the cited receipt URL becomes `sourceUrl`, and the stable id uses the formula above. A post by
the project's official handle is `company`; another account is `ct`; an explorer or DefiLlama receipt
is `onchain`; and a flagged event is `risk`. Existing items merge by id, so compiling twice is a no-op.

## 9. Retired

- `docs/templates/name-intake.yaml`, `schema/name-intake.schema.json`, `scripts/lib/name-intake.mjs`
  and `research/inbox/names/`. Deleted on 2026-09-02 when `schema/packet.schema.json` landed; the
  packet frontmatter is the dossier and `npm run validate` enforces it. `docs/templates/research-packet-v1.md`
  and `scripts/seed-data.mjs` went with them: `npm run seed` reads the packet instead.
- Direct producer writes to `content/feed/`, `content/sources/`, `content/accounts.yaml` and
  `research/inbox/account-desk.yaml`. Proposals go in the packet; the compiler writes.
- The aggregate `<date>-census-candidates.yaml` format and the `name-inventory.yaml` shape. Existing
  files stay as historical evidence; new discovery rounds file a packet (§5).
- The `research/ecosystem-baseline` branch workflow, direct commits and pushes by any producer, and the
  old intent-verdict flag words (replaced by the six flags in §7).
- Dated handoff files. Open work is tracked as issues (`docs/reviews/<date>/issues/` drafts).
- Positional feed ids such as `<slug>-14` for new items. Existing ids stay until the compiler rewrites
  the file.
