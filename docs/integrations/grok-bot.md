# Grok Bot contract

This is the contract for any Grok field desk contributing to Proofline: what to collect, where it is
allowed to write, what it must never write, how to open a PR for it, and what happens after.

This is the Grok-specific annex to [`../research-system.md`](../research-system.md). The shared research
system controls assignment, packet shape, field ownership, conflict handling, branch isolation, and
publication. If this annex conflicts with that document, the shared research system wins. Grok writes a
packet from [`../templates/research-packet-v1.md`](../templates/research-packet-v1.md) for every assigned
slug; direct feed/source proposals are outputs for the compiler to reconcile, not a substitute for the
packet.

It replaces the current process — a 15-minute-loop-shaped, interactive session running
`.grok/workflows/rh-field-round.rhai` with the `rh-field-ops` and `rh-account-desk` skills, which live on
`research/ecosystem-baseline:.grok/…` (that branch, not this one) — which commits directly to that branch
and pushes it. **This contract supersedes those files' instructions to commit and push directly, and their
"impersonator"/"drainer" conduct-flag vocabulary** (§4 below; item 4 of §10) — the desk should keep using
its own copy of them for everything except those two things. Section 9 below lists exactly what changes. The reasoning
behind every rule here comes from two documents produced evaluating that process against real intake
data; read them for the full evidence, file:line by file:line:

- [`research/inbox/EVAL-research-branch-2026-08-31.md`](../../research/inbox/EVAL-research-branch-2026-08-31.md) — the evaluation (§6.3 is the workflow-fix list this contract implements)
- [`research/inbox/FEEDBACK-from-proofline-2026-08-31.md`](../../research/inbox/FEEDBACK-from-proofline-2026-08-31.md) — the short version sent back to the desk

## 1. What the desk collects

- X posts by the handles already in `content/accounts.yaml` (any tier — even `skip`/`downweight` rows
  are worth watching for a status change), plus each project's own official handle.
- Official announcements: project sites, docs, GitBooks — anything the project itself published.
- On-chain events: new deployments, explorer data, DefiLlama chain-slice numbers — always with the URL
  and the date it was checked.

Nothing here is "the truth" until reproduced by a human on Blockscout or an official page. Everything
the desk writes is `class: claim` (or `verified: false` on a deployment) unless it has reproduced the
number itself against a primary source and can cite that reproduction.

## 2. Where it writes

Two tiers: raw intake, which always goes to `research/inbox/**`, and content-system files, which the
desk may write directly **only when the shape validates**. Of those, `content/feed/**`,
`content/sources/**` (additions/edits only) and `research/inbox/**` are classified by the
`automerge-feed.yml` workflow (§9), but never merged by it. Every PR waits for controller review;
`content/accounts.yaml` (§2.4) receives the stricter out-of-allowlist warning.

### 2.1 Raw intake — `research/inbox/**` (always allowed)

Fill notes, the ecosystem map, and the account ledger continue to live here, in the same shape as
today, with two changes required by the evaluation:

- **Every address is a record, not a bare string under a status-bearing key name.** Use:

  ```yaml
  address:
    value: "0x1234567890abcdef1234567890abcdef12345678"
    chain: robinhood-chain
    source: bio            # bio | docs | audit | explorer | third-party
    seen: 2026-08-31
    exists_on_4663: null           # null | true | false — only x-fill-style Blockscout checks flip this
    explorer_source_verified: null # null | true | false — Blockscout's contract-source flag, NOT the evidence class "verified"
  ```

  For a proxy, `explorer_source_verified` applies to the proxy shell unless the implementation was
  checked separately. Add `explorer_source_verification_scope: proxy-shell-only` and
  `implementation_source_verified: null | true | false`; never let verified generic proxy source imply
  that the implementation or product behavior was verified.

  Default both booleans to `null`. Never encode status in the key name (`token_candidate`, `h33_docs`)
  — that was the §2.8 defect in the last intake.

- **Conduct-neutral flags only, each with evidence.** Never write `impersonator`, `drainer`, `farm`,
  `self-trend`, or any other verdict about a person, team, or account's intent. Use one of:
  `handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain |
  ca-collision`, and require `evidence: <post id or URL>, <date>` on any row carrying one. Describe
  observable behavior — "an address with the same ticker posted from a different account", "the account
  posted a link to a domain that is not the project's site" — never intent. This is the change that
  matters most: 22 lines in the last intake made accusations the evidence didn't support.

- **One account ledger.** `account-desk.yaml` is canonical. `2026-08-31-accounts.yaml` is retired —
  do not create a second ledger. Add `slug:` to every desk row that has a census match.

- **Quote every free-text YAML value, keep keys unique, no bare-name flow-mapping lists.** A ledger
  that fails to parse is a bug you fix before opening the PR, not something downstream tooling should
  need a lenient reader for.

### 2.2 `content/feed/<slug>.yaml` — feed items

Only when `slug` is an existing census slug. Shape (`schema/feed.schema.json`):

```yaml
slug: pons
items:
  - id: pons-14
    date: 2026-08-31
    kind: ct                 # company | ct | onchain | risk
    title: Volume claim disputed by a second account
    body: "@0xkekov posted that the 24h volume figure @ponsdotfamily cited does not match DexScreener's pool page; both figures link to their sources."
    account: "@0xkekov"       # optional — the CT handle the item is about, if any
    sourceUrl: https://x.com/0xkekov/status/1234567890
    sources: [S9]             # required — S-ids that must already exist in content/sources/<slug>.yaml
```

`kind: company` is for the project's own official posts (these never vote on trending). `date` is the
post date; if the desk captured a post without its original date, date it to the capture date and say
so in `body` ("captured 2026-08-31; original post date not recorded").

### 2.3 `content/sources/<slug>.yaml` — source ledger entries

Every URL a feed item or claim cites needs an entry here first (`schema/source-entry.schema.json`):

```yaml
- id: S9
  url: https://x.com/0xkekov/status/1234567890
  publisher: "@0xkekov"
  kind: social              # official-site | docs | whitepaper | social | explorer | repository | audit | announcement | third-party-data | news | other
  accessed_at: 2026-08-31T14:00:00Z
  claim: Disputes the 24h volume figure in Pons's own post
  excerpt: "That number doesn't match the DexScreener pool page as of this morning."
  hash: null
  archive_url: null
  researcher: grok-bot
  available: true
```

Use `researcher: grok-bot` (not a human name) so desk-sourced entries are identifiable in the file.

### 2.4 `content/accounts.yaml` — account ledger

Only additive, low-risk changes: a new row (always `tier: watch` — the desk never sets `tier: top`,
only the maintainer promotes), or a `note`/`slug` correction on an existing row. Notes describe
observable behavior only, never conduct — `npm run validate` lints for hype and conduct words
(`drainer`, `impersonator`, `farm`, `scammer`, `insider`, …) and fails the check unconditionally on a
hit, not just under `--release`. `content/accounts.yaml` is deliberately off the
`automerge-feed.yml` allowlist (a tier or note change about a named account always gets extra scrutiny)
— CI passing just means it's ready for a controller to review and merge.

### 2.5 Census candidates — proposal only, not a direct write

A name that isn't in `content/census.yaml` never gets written there by the desk. Create exactly one
record at `research/inbox/names/<slug>.yaml`, following
[`docs/templates/name-intake.yaml`](../templates/name-intake.yaml) and
`schema/name-intake.schema.json`. `npm run validate` checks every YAML file in that directory,
including all references between sources, reproductions, claims, requirements and conflicts.

The record is a dossier, not a discovery note. It must contain:

- canonical-name proposal, aliases, symbols, entity kind, chain scope and identity status;
- category, primary taxonomy domain and controlled mechanism tags;
- every candidate official link with its authenticity status and supporting source ids;
- dated sources, with authority and authenticity classified separately;
- atomic claims by field, never an unsourced paragraph that mixes several claims;
- reproduction records for anything marked `class: verified`;
- a disposition for all nine required research areas: identity, product, deployment, control,
  security, team, economics, activity and communications;
- the four census qualifying tests, each supported or explicitly `unknown`;
- all conflicting claims and every possible match against the canonical census.

If the normalized name or alias matches a canonical row, list that row under `possible_matches`.
Ticker-only matches are weak signals and never justify a merge. If the slug is already canonical,
do not open a second name record; submit ordinary feed/source updates for that slug.

Use `docs/taxonomy.md` for classification rationale and display mapping. The current flat `category`
field remains a transitional schema requirement; do not invent a misleading value when the product
leaf has no safe current mapping—record the taxonomy gap in the packet for controller review.

The old aggregate `<date>-census-candidates.yaml` format is retired. Existing historical files remain
as intake evidence, but every new name uses the validated one-file-per-name format.

## 3. Evidence rules

- **Every contract address is `unverified` with the source URL** until reproduced on an explorer —
  never assert an address is live from a bio or docs page alone.
- **Every claim is dated and attributed** to a handle or a URL. No number without a source; no claim
  without a date.
- **No accusations about people or teams.** Describe observable behavior only: "an address with the
  same ticker at …", "the account posted a link to …" — never "drainer", "impersonator", "scammer",
  "farm", or any other verdict. §2.1 above has the replacement vocabulary.
- **`lifecycle: mainnet` requires evidence beyond the project's own post** — an explorer check, a
  DefiLlama chain-slice figure, or docs that list addresses. A tweet alone makes it `announced`, not
  `mainnet` (PRD §2.3). 24 of the last intake's 39 `mainnet` calls rested on `official-post` alone; that
  is the single most-repeated defect to fix.
- **One canonical account ledger** — `account-desk.yaml`, not two files that can disagree.

### 3.1 Source authority is field-specific

There is no universal "official source wins" rule. Resolve the specific field using the strongest
source capable of proving it:

| Field | Strongest evidence first |
| --- | --- |
| Contract/address/role | reproduced RPC or explorer result → docs naming the same chain/address → official announcement → third party |
| Official identity | bidirectional site/docs/handle cross-link → repository-organization cross-link → one-sided social claim → directory/media |
| Lifecycle | reproduced onchain activity → docs publishing live addresses → official launch claim → media/social |
| Audit | audit artifact whose scope and commit match deployment → auditor announcement → project claim |
| Metric | reproduced onchain query → primary API/dashboard → named aggregator → social claim |
| Team/control | signed/onchain role or first-party legal/docs record → attributable repository → official social → third party |

Freshness breaks a tie only when two sources cover the same chain, contract, version and measurement
window. A newer tweet does not supersede an older reproduced deployment merely because it is newer.

### 3.2 Conflict resolution

Conflicting values are stored as separate atomic claims and joined by a `CON-*` record. Never replace
one with the other, average numbers, or let the most recent PR win. While a material conflict is open:

- identity status is `conflicted` when the name, official handle/domain or ownership is disputed;
- lifecycle cannot be promoted to `mainnet` from the disputed claim;
- the disputed value cannot become a verified finding, score input or channel post;
- both claims remain attributable and visible to the controller.

A conflict becomes `resolved` only after a non-bot controller records the winning claim ids, at least
one reproduction id, a dated rationale and their identity. Losing claims remain in the record as
disputed/superseded evidence; they are never deleted.

### 3.3 Authenticity and merging names

Never merge on display name, logo, ticker, bio wording or one account's assertion. Treat two records
as the same entity only when at least two strong identifiers agree, with at least one reproduced:

- official domain and handle link to each other;
- verified deployment, deployer or ownership graph is shared;
- official repository/docs identify the same product and chain;
- a migration announcement explicitly links the old and new identity.

When a controller approves a merge, keep the older accepted slug unless the official identity changed,
union aliases and sources, remap incoming source ids above the current maximum, deduplicate by normalized
URL plus claim (not URL alone), and merge feed items by stable item id. Any same id with different
content is a hard conflict. Canonical scalar fields are resolved from evidence—never last-write-wins.
Record a correction/changelog entry whenever a public name, lifecycle, deployment or conclusion changes.

## 4. What it must never write

- `content/projects/**` — no scoring, no research narrative, no findings. That path belongs to a
  reviewed research PR, not intake.
- `content/census.yaml` directly — propose via §2.5 instead.
- `scoring` inputs of any kind, or `review.approver` — those are human judgment calls the site's cap
  logic depends on.
- `content/changelog.yaml` — changelog entries are written when a reviewed change publishes, not by
  intake.
- Anything outside `research/inbox/**`, `content/feed/**`, `content/sources/**`, and
  `content/accounts.yaml`. `automerge-feed.yml` enforces this mechanically (§8); a PR that touches
  anything else gets a "needs human review" comment and waits.

## 5. Process rules

- **PR-only.** Every change reaches `main` by pull request. Never `git checkout`, `git stash`, or
  `git add -A` in a checkout another agent might be using — that class of operation produced the
  accidental mixed commit on `origin/site` (`29b8da5`) that this contract exists partly to prevent.
- **One branch per run, named `grok/<YYYYMMDD>/<work-id>`**, created from `main`'s current head.
  Never reuse a branch for another run and never share it with SuperGrok or another producer. The work
  ID, base SHA, owned slugs, and allowed paths must match the packet header and PR body.
- **Skip the PR when there's nothing new.** No empty rounds, no placeholder commits.

## 6. Opening a PR — GitHub REST API

The desk runs outside GitHub Actions (it's an interactive/scheduled session with X tools), so it talks
to the API directly rather than using `git`. All calls are to `https://api.github.com`, repo
`harsharn10/proofline`, with header `Authorization: Bearer <token>` (§7 for scope).

1. **Get `main`'s current commit SHA:**
   `GET /repos/harsharn10/proofline/git/refs/heads/main`

2. **Create the run branch from it**:
   `POST /repos/harsharn10/proofline/git/refs`
   ```json
   { "ref": "refs/heads/grok/20260901/<work-id>", "sha": "<main's commit sha>" }
   ```

3. **For each file you're adding or changing**, first check whether it already exists on the branch (to
   get its blob `sha` — required for an update, omitted for a new file):
   `GET /repos/harsharn10/proofline/contents/<path>?ref=grok/20260901/<work-id>`

   Then write it:
   `PUT /repos/harsharn10/proofline/contents/<path>`
   ```json
   {
     "message": "feed: 2026-08-31 round 3 — pons volume dispute",
     "content": "<base64-encoded file content>",
     "branch": "grok/20260901/<work-id>",
     "sha": "<blob sha, only when updating an existing file>"
   }
   ```

4. **Open the PR** once all files for the round are written:
   `POST /repos/harsharn10/proofline/pulls`
   ```json
   {
     "title": "feed: 2026-08-31",
     "head": "grok/20260901/<work-id>",
     "base": "main",
     "body": "Round summary: files touched, rows added/changed, corrections issued. Link the x-fill notes."
   }
   ```

   Subsequent corrections for the same run update this PR. A new assignment gets a new work ID,
   branch, packet, and PR.

## 7. Token scope

A fine-grained personal access token, scoped to **this repository only** (`harsharn10/proofline`),
with exactly two repository permissions:

- **Contents:** Read and write
- **Pull requests:** Read and write

No other permission, no other repository, no classic (broad-scope) token. Store it as a secret wherever
the desk's process runs (not as a GitHub Actions secret — the desk isn't a workflow, it's calling the
API from outside).

## 8. Cadence

Every 6 hours. Skip the PR entirely when a round finds nothing that changes a file (§5). A weekly or
daily cadence that always opens a PR, even an empty one, defeats the purpose of the intake path in
§9 below — reviewers should only ever see a PR when there's something in it.

## 9. What happens after the PR opens

1. **`validate.yml`** runs on the PR: root `npm test` (schema validation + scoring/rule tests, including
   the voice/conduct lint — a hype word in a feed item or a conduct word in an account note fails this
   job unconditionally, not just under `--release`; every `research/inbox/names/*.yaml` dossier is also
   schema- and reference-validated), the site's `typecheck` + `build`, and a smoke test
   against the built site. This is what actually catches a malformed feed item or source entry — even
   though §2 asks the desk to only write when "the shape validates," CI is the real backstop.
2. **`automerge-feed.yml`** does not run on the PR itself — it triggers on `validate.yml`'s own
   *completion* (`workflow_run`, so it always runs the version of this workflow committed to `main`, not
   whatever the PR's branch contains) and only for a `grok/**` branch. If Validate did not succeed,
   nothing else happens: no comment. If it succeeded, the job asks GitHub's API for the
   exact list of changed files (not `git diff`, which can hide a rename): every file must be an addition
   or an in-place edit under `content/feed/**`, `content/sources/**`, or `research/inbox/**` —
   **`content/accounts.yaml` is not on this list**, a tier or note change there always needs a human — and
   a modified file under `content/sources/**` may only add lines, never remove or rewrite one. The job
   never merges or dispatches publishing. It comments either "waiting for controller" or "needs
   controller review," and a controller decides whether to merge.
3. **`publish.yml`** runs `npm run score` and invokes the Telegram sender on every push to `main`, but
   merging is not channel approval. New changelog entries remain pending in `/review`. The sender only
   delivers entries explicitly approved in `ops/telegram-review.json`, only while the channel is enabled.

See the root [`README.md`](../../README.md) "CI" section for the workflow files themselves and the
required repo settings.

## 10. What changed in your process (10 lines)

1. You no longer commit directly to `research/ecosystem-baseline` or any shared branch — every run
   opens a PR from `grok/<YYYYMMDD>/<work-id>` via the GitHub REST API (§6).
2. You no longer run `git checkout`, `git stash`, or `git add -A` in a checkout — you write files
   through the API instead.
3. `2026-08-31-accounts.yaml` is retired. `account-desk.yaml` is the one account ledger; add `slug:` to
   every row with a census match.
4. `flags: [impersonator]`, `[drainer]`, `[farm]`, `[self-trend]` are retired. Use
   `handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain |
   ca-collision`, each with `evidence: <post id/URL, date>`.
5. Every address you record now carries a full status record (§2.1), not a bare string under a key like
   `token_candidate`.
6. `lifecycle: mainnet` requires evidence beyond the project's own post — a tweet makes it `announced`,
   not `mainnet`.
7. You may now write directly to `content/feed/**` and `content/sources/**` (additions/edits only, never
   a deletion or a removed line) plus `research/inbox/**` when the shape validates. Every PR waits for
   controller review after CI passes; none auto-merge. Channel delivery is separately approved in
   `/review` after content lands.
8. Every new name gets one validated `research/inbox/names/<slug>.yaml` dossier (§2.5), never an
   aggregate candidates list and never a direct write to `content/census.yaml`.
9. `content/projects/**`, `scoring`, `review.approver`, and `content/changelog.yaml` stay off-limits —
   you never touch scores or approvals.
10. Quote every YAML free-text value and keep keys unique — a ledger that fails to parse is a bug you
    fix before opening the PR, not something downstream tooling works around.

## 11. Ready-to-paste task prompt

```
You are the Grok field desk for Proofline, chain 4663 (Robinhood Chain). This is a PR-only round —
you do not commit to any shared branch or checkout.

Read docs/integrations/grok-bot.md in full before doing anything else — it is the contract for this
round, including the evidence rules (§3), the forbidden paths (§4), and the exact file shapes (§2).

This round:

1. Copy docs/templates/research-packet-v1.md to
   research/inbox/packets/<slug>/<work-id>.md for every assigned slug. Fill the assignment header with
   the exact producer, base SHA, owned slug, tier, and allowed paths. Read docs/research-system.md and
   docs/taxonomy.md; use their ownership, classification, conflict, and event rules.
2. Run your normal scout + specialist pass (X search, chain numbers, account desk, collision audit) as
   `research/ecosystem-baseline:.grok/workflows/rh-field-round.rhai` and its skills (rh-field-ops,
   rh-account-desk) describe — except where this contract overrides them (§4, item 4 of §10). Write
   your working notes to research/inbox/<date>-x-fill-N.md and update research/inbox/account-desk.yaml
   — the one ledger. Do not also write 2026-08-31-accounts.yaml; it is retired.
3. For every address you record, write the full record from grok-bot.md §2.1 — { value, chain, source,
   seen, exists_on_4663, explorer_source_verified } — defaulting the two verification fields to null.
   Never infer verification from a key name. For a proxy, label proxy-shell verification separately
   and leave implementation_source_verified null until the implementation itself is checked.
4. For every claim, cite a post id/URL + handle + date, or a docs/explorer URL. No number without a
   source, no claim without a date.
5. Never write a conduct verdict about a person, team, or account. Use only: handle-collision |
   unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with
   evidence: <post id/URL, date>. Describe behavior ("an address with the same ticker posted from…"),
   never intent ("drainer", "impersonator", "farm", "scammer").
6. lifecycle: mainnet requires evidence beyond the project's own post (explorer, DefiLlama chain-slice,
   or docs with addresses). A tweet alone is lifecycle: announced.
7. If the name already has a canonical census slug and the claim is dated and sourced, draft
   content/feed/<slug>.yaml items and/or additive content/sources/<slug>.yaml entries, or an additive
   content/accounts.yaml row (always tier: watch). For a new name, create
   research/inbox/names/<slug>.yaml from docs/templates/name-intake.yaml. Complete all nine research
   requirements; represent missing work as not-found, not by omitting a field. Record possible matches
   and every conflict. Never write content/census.yaml or content/projects/** directly.
8. Never write scoring, review.approver, or content/changelog.yaml.
9. Open your changes as a PR:
   - Create branch grok/<YYYYMMDD>/<work-id> from main's current head:
     POST /repos/harsharn10/proofline/git/refs
   - Write each changed file with PUT /repos/harsharn10/proofline/contents/<path> on that branch
     (GET first if the file already exists, to get its blob sha).
   - Open the PR: POST /repos/harsharn10/proofline/pulls, title "feed: <YYYY-MM-DD>", head
     "grok/<YYYYMMDD>/<work-id>", base "main".
   - If nothing changed this round, skip the branch and the PR — do not open an empty PR.
   - Never enable auto-merge or merge the PR. A controller reviews every PR after CI passes.
10. Run again in 6 hours.

Your token is scoped to this repo only: Contents read/write, Pull requests read/write, no other
permission. If you don't have one, stop and ask a human to mint one — do not fall back to a broader
token.
```
