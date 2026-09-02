# Proofline ingestion / merge / publishing audit

Audit of `/Users/harsharnsingh/proofline` — research ingestion, merge, and publishing pipeline.
Read-only. Date of audit: 2026-09-01.

**Scope note first.** The working tree is on `feature/research-packet-validation` (`9c9a398`), which is
**not** on `origin/main` (`e0d2d28`). `scripts/lib/research-packet.mjs` and its 84 test lines exist only
on this branch. On `main` today, packets are validated by nothing, and `docs/research-system.md:203-208`
on main says exactly that. Everything below cites the working tree unless noted.

---

## 1. END-TO-END FLOW

| # | Hop | Artifact | Governed by | Actor | Enforced by |
|---|---|---|---|---|---|
| 1 | Someone hears a name | X search, DefiLlama, explorer sweep | `grok-bot.md:26-35`, §11 prompt; the desk's own `.grok/workflows/rh-field-round.rhai` on branch `research/ecosystem-baseline` | Grok field desk (interactive session) | nothing |
| 2 | Raw notes land | `research/inbox/<date>-x-fill-N.md`, `account-desk.yaml`, `2026-08-31-ecosystem-map.yaml` | `grok-bot.md:45-84` | Grok | **nothing.** No schema, no parse check |
| 3 | New name proposed | `research/inbox/names/<slug>.yaml` from `docs/templates/name-intake.yaml` | `grok-bot.md:136-166`, `README.md:254-262`, `research/inbox/names/README.md` | Grok only (schema hardcodes the producer) | `scripts/lib/name-intake.mjs:172` `validateNameIntakeDirectory` |
| 4 | Research packet | `research/inbox/packets/<slug>/<work-id>.md` | `research-system.md:108-129`, `docs/templates/research-packet-v1.md` | collector (Grok) / verifier (SuperGrok) / compiler (Codex) | `scripts/lib/research-packet.mjs:198` (this branch only) |
| 5 | Independent verification | second packet, `role: verifier`, `prior_packet` set | `docs/integrations/supergrok.md:21-40` | SuperGrok | packet validator (`research-packet.mjs:145,148`) |
| 6 | Compile to canonical | `content/census.yaml` row + `projects/`, `sources/`, `research/`, `feed/`, `changelog.yaml` | `research-system.md:131-146` step 5; `README.md:61-86` | compiler / human | `crossCheck` (`checks.mjs:23`) enforces 1:1:1:1 |
| 7 | Stub generation | `npm run seed` → `scripts/seed-stubs.mjs` | `README.md:61-69` | human | hard-fails at `seed-stubs.mjs:26` unless the slug was first hand-added to `scripts/seed-data.mjs` |
| 8 | Validate | `npm run validate` → `scripts/validate.mjs:9-15` | `README.md:13-20` | CI + human | schemas, crossCheck, research-md tags, voice/conduct, names, packets |
| 9 | Score | `npm run score` → `scripts/score.mjs` | `README.md:22-27` | machine | refuses to write `build/derived.json` on any validation error (`score.mjs:14-19`) |
| 10 | Derived | `build/derived.json` = `derive()` + `computeTrending()` + `computeRanks()` | `scripts/lib/score.mjs`, `trending.mjs` | machine | gitignored, rebuilt at deploy |
| 11 | Review / approve | PR to `main`; `review.approver` set in the project file | `README.md:85-86`, `PRD.md:304-327` | controller (human) | confidence capped at 69 until set (`score.mjs:77`) |
| 12 | CI gates | `validate.yml` on every PR; `automerge-feed.yml` on Validate completion for `grok/**`; `publish.yml` on push to main | `README.md:200-231` | GitHub | comment-only; nothing auto-merges |
| 13 | Site | Render builds `main` per `render.yaml`, runs `npm run score` then `site build`; reads `build/derived.json` + `content/` via `site/src/data/content-server.ts` | `README.md:232-244` | machine | smoke test asserts no `uncapped` leakage |
| 14 | Channel candidacy | a `channel:` object on the changelog entry | `docs/channel-publishing.md:37-50` | compiler / controller | `isChannelCandidate` (`telegram.mjs:21`) |
| 15 | Channel approval | `/review` page writes `ops/telegram-review.json` | `README.md:182-198` | controller only, GitHub-authenticated | `selectApproved` (`telegram.mjs:49`) checks `channel_enabled` + both fingerprints |
| 16 | Telegram send | `publish.yml` → `scripts/telegram-digest.mjs` | `PRD.md:329-341` | machine | sent keys committed back to `ops/telegram-state.json` by `proofline-bot` |

**The flow as designed has never run.** `research/inbox/packets/` does not exist. `research/inbox/names/`
contains only `README.md`. No `supergrok/**` branch exists. Every one of the 49 canonical rows arrived
through hop 7 driven by the quarantined one-shot importer, not hops 3 through 6.

The one real Grok run under the new contract (`WORK-20260901-grok-name-taxonomy`, merged to main as
PR #25) produced neither a packet nor a dossier. It produced
`research/inbox/assignments/WORK-20260901-grok-name-taxonomy.md` (an undocumented directory), plus
`research/inbox/grok-2026-09-01/name-inventory.yaml` (10,696 lines, 131 candidates) and
`taxonomy-proposals.md` (562 lines), in a fifth format invented inline in the assignment file. None of
it is validated by anything.

---

## 2. SOURCE OF TRUTH

| Data | Canonical | Competing copies |
|---|---|---|
| Identity (name, aliases, symbols, entity kind, chain scope, status) | `content/census.yaml` `identity:` block | `content/projects/<slug>.yaml` `name`/`symbol` mirrored (`checks.mjs:6,65-67` forces agreement); `name-inventory.yaml` on main holds 131 more |
| Category | `content/census.yaml` `category` (flat PRD enum) | mirrored in project file; `tree:` is a second, non-enforced classification; `docs/taxonomy.md` §3 defines a third leaf registry that no schema accepts |
| Lifecycle / coverage | census | mirrored into project file and research front matter (`research-md.mjs:75`) |
| Deployments | `content/projects/<slug>.yaml` `deployments[]` | `scripts/intake/2026-08-31/harvest-data.mjs` `HARVEST` still feeds `seed-data.mjs:96`; addresses also live in `research/inbox/2026-08-31-ecosystem-map.yaml` |
| Sources | `content/sources/<slug>.yaml`, one ledger per slug | dependency cards carry their own `sources[]` (`checks.mjs:91-95`) |
| Narrative | `content/research/<slug>.md` | `projects/<slug>.yaml` `summary` and `findings[]` say overlapping things, linted separately |
| Feed items | `content/feed/<slug>.yaml` | `research/inbox/grok-2026-08-30/drafts/feed/*.yaml` (17 stale drafts still tracked) |
| Accounts | `content/accounts.yaml` (167 rows) | `research/inbox/account-desk.yaml` (132 rows, declared canonical by `grok-bot.md:78`) **and** `research/inbox/2026-08-31-accounts.yaml`, which `grok-bot.md:79` calls retired but is still on main and still an input in `scripts/intake/2026-08-31/README.md:20` |
| Scores | derived only, `build/derived.json` | clean. `README.md:22-27` holds |

### Where two writers collide

- **Source-id namespace.** Both the desk and the maintainer append `S<n>` to the same
  `content/sources/<slug>.yaml`. Collisions were renumbered by hand twice and needed a 130-line
  one-shot reconciler (`scripts/intake/2026-08-31/reconcile-desk-5393021.mjs`).
  `docs/handoff/2026-09-01-open-work.md:203` says the fix is process, not schema. It is still open.
  Two Grok PRs open on the same slug on the same day will collide identically.
- **`content/changelog.yaml`.** Append-only by convention, single file for all 49 slugs, 85 entries.
  Every content PR touching a different project appends to the same file at the same place.
  `docs/handoff/2026-09-01-open-work.md:52` already documents one such conflict on PR #10.
- **`content/census.yaml`.** Single 49-row file. Grok is forbidden from writing it
  (`grok-bot.md:234`), but any two compilers graduating names collide.
- **Packet `allowed_paths` vs the CI allowlist.** `research-packet.mjs:60` lets a collector declare
  `content/accounts.yaml`. `automerge-feed.yml:77` deliberately excludes it. A packet can validate and
  its PR still be flagged.
- **`ops/telegram-review.json` vs `ops/telegram-state.json`.** Both committed to main, one by a human
  through `/review`, one by `proofline-bot` in `publish.yml:66`. The workflow's `git pull --rebase`
  has no retry loop.

---

## 3. MERGE / UPDATE PROCESS

**There is no update mechanism.** Updating an already-covered project today means hand-editing YAML.
The proof is `docs/handoff/2026-09-01-open-work.md` Task 1, which is a hand-written seven-row table of
`file:line | now | change to` for a single off-by-one address count across six files. That is the actual
update process.

- **Append-only exists in exactly two places.** `content/changelog.yaml` (by convention, nothing
  enforces it) and `content/feed/<slug>.yaml` (enforced only for `grok/**` PRs by
  `automerge-feed.yml:83-90`, which rejects any source-ledger modification with a nonzero deletion
  count).
- **`packet_tier: update` exists in the contract** (`research-system.md:126-127`, validated at
  `research-packet.mjs:146`) and has **zero downstream tooling**. Nothing consumes a packet. There is
  no compiler script at all.
- **Conflict resolution between a Grok packet and canonical content is entirely human.**
  `research-system.md:157-176` and `grok-bot.md:201-228` describe `CON-*` records, winning claim ids,
  reproductions, controller identity. The only machine enforcement of any of it is inside
  `validateNameIntake` (`name-intake.mjs:67-94`), which applies to name dossiers that have never been
  filed. Nothing checks canonical content for conflicts.
- **The only automated merge tool is destructive.** `scripts/intake/2026-08-31/apply-harvest.mjs`
  regenerates `projects/*.yaml` findings and deployments and rewrites `feed/*.yaml` wholesale. It
  refuses to run without `--overwrite`. It is the correct guard on the wrong shape of tool.

### What `automerge-feed.yml` actually does

Despite the filename, it never merges. It triggers on `Validate`'s `workflow_run` completion
(`:20-23`), filters to `grok/**` head branches (`:32`), finds the open PR, confirms the head SHA
matches the SHA Validate passed on (`:51-54`), pulls the exact file list from the pulls API, and
requires every file to be `added` or `modified`, carry no `previous_filename`, and sit under
`content/feed/`, `content/sources/`, or `research/inbox/` (`:76-79`). Modified source ledgers must have
zero deletions (`:83-90`). It then posts one idempotent comment: "waiting for controller" or "needs
controller review."

### Risks in it

1. **`research/inbox/**` is on the allowlist and validated by nothing.**
   `research/inbox/2026-08-31-ecosystem-map.yaml` still fails to parse today
   (`Map keys must be unique at line 79`), after `EVAL-research-branch-2026-08-31.md:311` listed fixing
   it as merge pre-condition 1 and `FEEDBACK-from-proofline-2026-08-31.md:12` sent it back to the desk.
   `npm run validate` reports `0 error(s)` while that file is broken. A Grok PR can add 10,696 lines of
   unschema'd YAML and get a green "waiting for controller."
2. **Only `grok/` is classified.** `supergrok/<YYYYMMDD>/<work-id>` branches (`supergrok.md:65`) match
   no trigger. SuperGrok PRs get no gate comment at all.
3. **Branch prefix is self-asserted.** Any contributor can name a branch `grok/…` to get the friendlier
   comment. Low blast radius since nothing merges, but the classification is decorative.
4. **The `^---` exclusion at `:88`** is defending against diff headers that GitHub's `patch` field does
   not contain. It only has the effect of ignoring a removed line whose content starts with `--`. The
   `deletions != 0` check at `:87` already covers the real case, so this is dead defense.
5. **`content/sources/**` additions are shape-checked but not truth-checked.** Nothing stops a
   collector-authored ledger entry whose `excerpt` claims a reproduction that never happened.
   `research-system.md:149` calls "a `verified` claim without an independent reproduction" a hard stop.
   No CI check implements it for `content/`.

---

## 4. AGENT INSTRUCTION DOCS

Combined length an agent is told to read before acting: `research-system.md` 216 lines +
`taxonomy.md` 221 + `grok-bot.md` 419 + the packet template 231 = **1,087 lines**, before `README.md`
(303) and `PRD.md` (456). `grok-bot.md:373-374` and `supergrok.md:78` both say "read in full." That is
the single biggest defect in the doc set: no agent will comply, and the docs are structured so that
partial reading produces wrong output.

### Direct contradictions

**A. Feed item ids.** `grok-bot.md:92` gives the canonical example:

```yaml
  - id: pons-14
```

`research-system.md:165-166` says: "Positional IDs such as `<slug>-14` are not stable identities." The
Grok annex's own worked example is the pattern the parent contract forbids. `grok-bot.md:8` says the
parent wins on conflict, so the only worked example a collector has is invalid.

**B. Coverage vocabulary, three values.** `docs/taxonomy.md:24` and the packet template `:61` both say
`candidate | seed | full`. `schema/census.schema.json` and `schema/project.schema.json` both enum
`["full","stub"]`. `stub` appears in neither doc; `candidate` and `seed` appear in no schema.

**C. Lifecycle `unknown`.** `schema/name-intake.schema.json:135` and the packet template `:60` allow
`unknown`. `schema/census.schema.json` lifecycle enum does not. A dossier can be filed that cannot be
graduated without a controller inventing a value.

**D. The retired format that is still an assigned task.** `grok-bot.md:165`: "The old aggregate
`<date>-census-candidates.yaml` format is retired." `docs/handoff/2026-09-01-open-work.md:175` Task 6
assigns an agent to graduate 13 rows from exactly that file.

**E. The handoff's own status.** `research-system.md:11-12`: "Dated handoffs, `docs/superpowers/**`,
and legacy dated artifacts under `research/inbox/**` are historical evidence, not current operating
instructions." `docs/handoff/2026-09-01-open-work.md` is dated the same day as research-system v1 and
contains seven live, unfinished tasks. An agent following the parent contract will skip all of them.

**F. A lint that does not exist.** `docs/handoff/2026-09-01-open-work.md:31`: "no 'the desk'/'Grok' in
reader-facing text (changelog `detail`, research prose, summaries). `npm test` runs the lint and fails
on violations." `validate-content.mjs:66-88` lints project summaries, findings, feed titles/bodies,
research Markdown, and account notes. It never touches `content/changelog.yaml`, and no word list
contains "desk" or "Grok". I found 8 changelog entries currently shipping that text to readers,
including `2026-08-31 arrow`: "the desk's last check preceded the open" and `2026-08-31 safehood`:
"The desk found the official account (@_safehood) quiet since 2026-07-16."

**G. Branch naming.** `research-system.md:95` `<producer>/<YYYYMMDD>/<work-id>`. `README.md:249` on
`main` says `grok/<YYYY-MM-DD>`. On this branch it says `grok/<YYYYMMDD>/<work-id>`. The two live grok
branches use both forms.

**H. Section cross-reference off by one.** `grok-bot.md:240` cites "(§8)" for the automerge
enforcement. §8 is Cadence; the enforcement is §9. The same sentence lists `content/accounts.yaml`
among paths "`automerge-feed.yml` enforces this mechanically", but `automerge-feed.yml:77` deliberately
omits it, as `grok-bot.md:131-134` correctly states five sections earlier.

### The template that fails its own validator

I ran `validateResearchPacket` against `docs/templates/research-packet-v1.md` at its own path:

```
 - work_id must match WORK-YYYYMMDD-lowercase-id
 - base_sha must be a full lowercase 40-character commit SHA
 - as_of must be an ISO-8601 timestamp with timezone
 - collector cannot set final Channel disposition
```

The first three are expected placeholder failures. The fourth is a trap. Template line 231 ships:

```
- Channel disposition: `not-evaluated | pending | publish | roundup | site-only | hold`
```

The regex at `research-packet.mjs:177` captures the whole pipe-list as one value, and `:178` rejects
anything outside `["not-evaluated","pending"]`. An agent that fills the header correctly and leaves the
last line untouched fails validation with a message accusing it of overstepping its authority.
`docs/templates/name-intake.yaml` validates clean, so this is specific to the packet.

### Redundancy that guarantees divergent output

A collector working one new name is currently told to produce **three artifacts covering the same facts
in three shapes**:

1. a packet (`research-system.md:110`, 18 sections, Markdown, prose and tables),
2. a name dossier (`grok-bot.md:138-141`, YAML, `SRC-`/`CLM-`/`REP-`/`CON-` id spaces, nine
   `requirements`, four `qualifying` tests),
3. free-form fill notes and a ledger row (`grok-bot.md:47-84`).

Nothing maps between them. The nine `requirements` areas exist only in the dossier; the packet has no
equivalent block. The four `qualifying` tests exist in the dossier as
`{status: pass|fail|unknown, claim_ids, note}` and in the census as `{value: bool, note, verified: bool}`.
A controller hand-translates.

### What to cut, merge, restructure

1. **Delete `docs/handoff/2026-09-01-open-work.md` or convert it to GitHub issues.** It is 203 lines of
   live instruction that the parent contract declares historical. Either state is fine; both at once is
   not.
2. **Fold `grok-bot.md` §1 through §5 into `research-system.md` as one "Collector" section.** They
   restate the same evidence rules twice with different wording (`grok-bot.md:168-228` vs
   `research-system.md:157-176`). Keep `grok-bot.md` as roughly 80 lines: the REST API recipe (§6), the
   token scope (§7), the cadence (§8), and the paste prompt (§11). Delete §9 and §10 outright, they are
   a changelog of a process change from one specific day and will rot.
3. **Delete the ready-to-paste prompts from both annexes** (`grok-bot.md:368-419`,
   `supergrok.md:75-101`), or make them the only normative text and the prose an appendix. Today the
   prompt paraphrases the contract and drifts from it. `grok-bot.md:403` says "Never write
   content/census.yaml or content/projects/** directly," restating §4 in different words.
4. **Make one artifact.** Pick the dossier (it has a schema, it validates, it has real referential
   integrity) or the packet (it is lossless and role-aware). Filing both is the reason neither gets
   filed. Recommendation: keep the packet as the human-readable handoff and generate the dossier from a
   fenced YAML block inside it, so one file validates twice.
5. **Move every controlled vocabulary into `schema/shared.schema.json` and make the docs render from
   it.** Today `taxonomy.md`, the packet template, the name-intake schema, and the census schema each
   carry a hand-maintained copy of overlapping enums, and three of them already disagree.

---

## 5. CONSISTENCY ACROSS PRODUCERS

| # | Field | `grok-bot.md` | `supergrok.md` | packet template | actual validator | Verdict |
|---|---|---|---|---|---|---|
| 1 | Output artifact | dossier `research/inbox/names/<slug>.yaml` (§2.5) **and** packet (`:9-11`) | packet only (`:21-25`) | packet | both validated independently | Grok must file two shapes, SuperGrok one |
| 2 | `researcher` field | `researcher: grok-bot` (`:124`) | forbidden (`:55-58`) | not present in packet | `name-intake.schema.json:122` `{"const":"grok-bot"}` | **SuperGrok, Codex, Claude and humans cannot file a name dossier at all** |
| 3 | Feed item id | `pons-14` (`:92`) | n/a | n/a | `feed.schema.json:11` any non-empty string | contradicts `research-system.md:166` |
| 4 | Branch prefix | `grok/…` (`:248`) | `supergrok/…` (`:65`) | n/a | `automerge-feed.yml:32` matches `grok/` only | SuperGrok PRs never classified |
| 5 | Writable paths | inbox + feed + sources + `accounts.yaml` (`:239-241`) | inbox only (`:68`) | `allowed_paths` header | `research-packet.mjs:56-63` agrees with both docs | `automerge-feed.yml:77` disagrees on `accounts.yaml` |
| 6 | Conflict ids | `CON-*` (`:202`) | "preserve claim IDs" (`:38`) | `CON-example` (`:148`) | `name-intake.schema.json:97` `^CON-[a-z0-9-]+$`; packet validator does not check ids at all | packet conflict/claim ids are unvalidated free text |
| 7 | Claim ids | not specified | "new packet-local IDs" (`:38`) | `CLM-1` (`:140`) | `name-intake.schema.json:9` `^CLM-[1-9][0-9]*$`; packet: nothing | two id spaces, one enforced |
| 8 | Evidence class | `claim` unless reproduced (`:33-35`) | may not self-certify `verified` (`:50`) | `verified` needs a reproduction (`:135`) | dossier: `name-intake.mjs:52-57` enforces it; packet: **not enforced** | packet `verified` claims are unchecked |
| 9 | Lifecycle `mainnet` bar | evidence beyond own post (`:177-180`) | may not infer (`:51-52`) | `:60` lists the enum, no bar stated | dossier: `name-intake.mjs:119-128` enforces; census: nothing | census `mainnet` rows rest on prose discipline only |
| 10 | Qualifying tests | "four census qualifying tests, each supported or explicitly `unknown`" (`:154`) | n/a | **absent from the packet entirely** | `name-intake.schema.json:167-176` `{status,claim_ids,note}`; `census.schema.json` `{value,note,verified}` | three shapes, two schemas, one missing |
| 11 | Nine research areas | required (`:152-153`) | implied by scope | **no equivalent block** | `name-intake.schema.json:140-153` | packet cannot express the dossier's core requirement |
| 12 | Coverage values | not stated | not stated | `candidate \| seed \| full` (`:61`) | schemas: `full \| stub` | no overlap except `full` |
| 13 | Conduct vocabulary | 6 allowed flags (`:72-73`) | not mentioned | not mentioned | `voice.mjs:28-32` bans the old words but does not require the new ones anywhere | replacement flags are unenforced and unschema'd |
| 14 | Address record shape | 6-field record (`:53-59`) | not mentioned | `:90-92` table with different columns (`Verification scope`) | `shared.schema.json` deployment has `{label,chain,address,issuer,ticker,role,verified,sources}` | three address shapes, none convertible without judgment |
| 15 | Controller/channel authority | §4 forbids | "may not" list (`:44-53`) | `:22` forbids | `research-packet.mjs:174-179` enforces, **and rejects the template's own default** | see §4 |

---

## 6. SCRIPTS QUALITY

### Live code depends on quarantined one-shot tooling

`scripts/seed-data.mjs:6` imports `HARVEST` from `scripts/intake/2026-08-31/harvest-data.mjs`, and
`scripts/build-dependency-cards.mjs:10` imports `GH`/`ACCESSED` from the same file. Both importers are
non-one-shot tools at the top level. `scripts/intake/2026-08-31/README.md:34-37` acknowledges this and
defers it. The effect is that `npm run seed`, the documented way to add a project, cannot run without a
frozen 1,239-line data file from a specific day in August.

### Adding a project requires editing code

`scripts/seed-stubs.mjs:26`:

```js
if (!seed) { console.error(`no seed data for ${c.slug} — add it to scripts/seed-data.mjs`); process.exit(1); }
```

`README.md:66` documents this as step 2 of four. So every new census row demands a hand-written JS
object literal in a 176-line file that already carries 49 of them, with summary prose and a
missing-evidence checklist. This is the single largest friction point in the whole pipeline and the
reason `docs/handoff/2026-09-01-open-work.md:175` Task 6 (13 candidates) is still open.

### Dead and near-dead code

- `scripts/migrations/add-census-identity.mjs` is a completed migration that throws at `:8` on any run.
  Delete it.
- `scripts/intake/2026-08-31/reconcile-desk-5393021.mjs` (130 lines) is hardcoded to commit `5393021`
  and three slugs (`:31`). It was correct once. Delete or generalize.
- `checks.mjs:71` errors on `PLACEHOLDER_APPROVERS`, but `schema/project.schema.json` `review.approver`
  already rejects `tbd|none|todo|na|n-a` by pattern. Belt and braces, harmless, but it means the same
  defect reports twice.
- `build/telegram-state.json` is a stale copy of `ops/telegram-state.json` sitting in a gitignored
  directory.
- 17 stale feed drafts under `research/inbox/grok-2026-08-30/drafts/feed/` duplicate content that
  shipped to `content/feed/` months ago.

### Missing validations, ranked by what they would have caught

1. Nothing parses `research/inbox/**` YAML. `2026-08-31-ecosystem-map.yaml` is broken on `main` right
   now and `npm run validate` says `0 error(s)`. `EVAL:328` recommended exactly this check and noted
   "This one check would have caught every defect in §2.1."
2. Nothing lints `content/changelog.yaml` for voice or conduct, though it is the most reader-facing
   text in the repo and the direct source of Telegram copy.
3. Nothing lints census `qualifying.*.note` or dependency-card prose.
4. Nothing checks that a PR's actual changed files match its packet's declared `allowed_paths`.
5. Nothing enforces `verified`-requires-reproduction inside `content/` (only inside name dossiers).

### Hardcoded

- `harvest-metrics.mjs:40` `HARVEST_DATE = "2026-08-31"`; `harvest-data.mjs:12`
  `ACCESSED = "2026-08-31T00:00:00Z"`; `import-chain-file.mjs` `DOSSIER_TO_SLUG` is a 30-entry hand map.
- `research-packet.mjs:147-149` hardcodes producer names: `grok-bot` may only collect, anything
  containing `supergrok` may only verify. A third collector needs a code change.
- `telegram-digest.mjs:15` `Number(opt("--limit") ?? 0)` yields `NaN` on a non-numeric flag, which
  silently disables the limit.

### One real correctness risk

`telegram.mjs:16-18`, `entryKey(e)` falls back to `${date}|${slug}|${type}|${title}`. Editing the
`title` of an already-sent changelog entry mints a new key, and the entry becomes eligible to send
again. `review_key` exists as the stable alternative and is not written by anything in the repo.

---

## 7. TOP 10 IMPROVEMENTS

| # | What | Why | When |
|---|---|---|---|
| 1 | Fix `docs/templates/research-packet-v1.md:231` to `- Channel disposition: not-evaluated` | The shipped template fails its own validator with a message accusing the agent of overstepping authority. Every first packet will hit it. | **[tonight]** (one line) |
| 2 | Add a strict YAML parse of every `research/inbox/**/*.yaml` to `scripts/validate.mjs` | `2026-08-31-ecosystem-map.yaml` is broken on main today; `research/inbox/**` is on the automerge allowlist and validated by nothing. `EVAL:328` asked for this. | **[tonight]** (~15 lines) |
| 3 | Lint `content/changelog.yaml` `title`/`detail` with `voiceWarnings` + `conductWarnings`, and add "the desk"/"Grok" to the word list | 8 entries currently ship desk-speak to readers; the handoff already claims this lint exists. Changelog text becomes Telegram copy verbatim. | **[tonight]** (~8 lines) |
| 4 | Replace `researcher: {const: "grok-bot"}` at `schema/name-intake.schema.json:122` with a producer enum | It is the sole reason SuperGrok, Codex, Claude and humans cannot file a name dossier. Both `research-system.md:202` and `supergrok.md:55` already document the workaround instead of fixing the cause. | **[tonight]** (one line + a test) |
| 5 | Add `supergrok/**` to `automerge-feed.yml:32` | Verifier PRs currently pass through the gate silently with no classification comment. | **[tonight]** (one line) |
| 6 | Delete `docs/handoff/2026-09-01-open-work.md` and open its seven tasks as issues | 203 lines of live instruction that `research-system.md:11` declares historical, containing a task that uses a format `grok-bot.md:165` calls retired. | **[tonight]** |
| 7 | Make `npm run seed` read facts from the census row plus an optional `content/seeds/<slug>.yaml`, not from `scripts/seed-data.mjs` | Breaks the content-requires-a-code-change rule and cuts the live dependency on quarantined one-shot intake tooling. This is what unblocks graduating the 131 pending names. | [later] (half a day) |
| 8 | Write the missing compiler: a script that reads one packet and emits a canonical diff | Hop 6 is the only fully manual hop in a 16-hop pipeline, and `packet_tier: update` is a contract with no implementation. Everything else in the design already exists. | [later] (1 to 2 days) |
| 9 | Collapse `grok-bot.md` from 419 lines to roughly 80 by moving evidence, conflict and merge rules into `research-system.md` | 1,087 lines of required reading is why the one real Grok run produced a fifth undocumented output format instead of a packet. | [later] (half a day) |
| 10 | Unify the four qualifying-test shapes and the coverage vocabulary into `schema/shared.schema.json`, then make the docs cite it | `candidate/seed/full` vs `full/stub`, and `{status,claim_ids,note}` vs `{value,note,verified}`, mean every promotion from dossier to census is a hand translation with a judgment call in it. | [later] (1 day) |

---

## Files most worth opening next

- `/Users/harsharnsingh/proofline/docs/templates/research-packet-v1.md:231` — the one-line trap
- `/Users/harsharnsingh/proofline/scripts/lib/research-packet.mjs:174-179` — the check it trips
- `/Users/harsharnsingh/proofline/schema/name-intake.schema.json:122` — the producer lock
- `/Users/harsharnsingh/proofline/scripts/seed-stubs.mjs:26` and
  `/Users/harsharnsingh/proofline/scripts/seed-data.mjs:6` — the code-change-per-project coupling
- `/Users/harsharnsingh/proofline/.github/workflows/automerge-feed.yml:76-79` — the allowlist that
  trusts an unvalidated directory
- `/Users/harsharnsingh/proofline/scripts/lib/validate-content.mjs:66-88` — the lint scope that omits
  the changelog
- `origin/main:research/inbox/assignments/WORK-20260901-grok-name-taxonomy.md` — the assignment that
  invented a fifth output format, and the empirical proof the contract docs do not produce the shape
  they specify

---

## Appendix: commands run and their results

Read-only throughout. Nothing in the repo was modified.

```
$ npm run validate
49 projects, 0 error(s), 11 warning(s)
  (11 warnings: site.yaml corrections.destination TODO, plus 10 qualifying-test failures on
   robinhood-index-vaults, virtuals, l4va x2, squeeze x2, agent-name-service, foxpad x2, robindex)

$ npm run validate:release
49 projects, 14 error(s), 1 warning(s) [release]

$ git log -1 --oneline origin/main       → e0d2d28
$ git log -1 --oneline HEAD              → 9c9a398 (feature/research-packet-validation, NOT on main)

$ ls research/inbox/packets              → No such file or directory
$ ls research/inbox/names                → README.md only

content inventory: 49 projects, 49 sources, 49 research, 45 feed, 21 dependencies,
                   49 census rows, 85 changelog entries, 167 accounts

YAML parse check of research/inbox ledgers:
  FAILS   research/inbox/2026-08-31-ecosystem-map.yaml  → Map keys must be unique at line 79, column 5
  PARSES  research/inbox/account-desk.yaml
  PARSES  research/inbox/2026-08-31-accounts.yaml
  PARSES  research/inbox/2026-08-31-census-candidates.yaml

validateNameIntake(docs/templates/name-intake.yaml)   → clean
validateResearchPacket(docs/templates/research-packet-v1.md) → 4 errors (see §4)

voice/conduct scan of content/changelog.yaml (not run by npm run validate):
  0 hype/conduct hits
  8 entries containing "the desk" / "Grok" in reader-facing title or detail

grok/20260901/WORK-20260901-grok-name-taxonomy vs main:
  research/inbox/assignments/WORK-20260901-grok-name-taxonomy.md   206 +
  research/inbox/grok-2026-09-01/name-inventory.yaml            10696 +
  research/inbox/grok-2026-09-01/taxonomy-proposals.md            562 +
  (no packet, no name dossier)
  name-inventory summary: 231 corpus names reviewed, 114 net_new, 4 possible_matches,
                          64 already canonical/pending, 129 lead-only depth
```

Git authorship: 111 commits `Harsharn Singh <harsharnsingh@Harsharns-MacBook-Pro.local>`, 26 `Yogi`
(merge commits, the GitHub account), 1 `harsharn10`, 1 `proofline-bot` (the automated telegram-state
commit). **No agent or bot is distinguishable by author.** Desk commits, Codex commits, Claude commits
and human commits all carry the same local git identity. `EVAL:328` recommended a `Desk: grok` trailer
or a distinct author; it was never adopted.
