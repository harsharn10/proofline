# Grok Bot contract

This is the contract for any Grok field desk contributing to Proofline: what to collect, where it is
allowed to write, what it must never write, how to open a PR for it, and what happens after.

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
    sources: [S9]             # optional — S-ids that must already exist in content/sources/<slug>.yaml
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

A name that isn't in `content/census.yaml` yet never gets written there by the desk. Instead, propose it
as raw intake:

```yaml
# research/inbox/<date>-census-candidates.yaml
candidates:
  - slug: example-protocol
    name: Example Protocol
    category: Lending          # schema/shared.schema.json category enum
    lifecycle: announced       # see the lifecycle rule in §3 — a tweet is never "mainnet"
    official_links:
      - { kind: x, url: "https://x.com/exampleprotocol" }
    discovery_source: "Grok field desk round 24, x-fill-24.md"
    handle: "@exampleprotocol"
    qualifying:
      deployed_on_chain: { value: true, note: "Factory contract on 4663, unverified", verified: false }
      native_play: { value: true, note: "Built for chain 4663; not a Stock Token or day-one infra", verified: false }
      citable: { value: true, note: "Official X account and docs site", verified: false }
      research_story: { value: true, note: "Lending vault with user-supplied collateral", verified: false }
```

This file isn't schema-validated by `npm run validate` — it's a proposal in the shape of
`schema/census.schema.json` for a human to review and, if it holds up, add to `content/census.yaml` by
hand (PRD §2.1: "Add names only when they meet the four tests").

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
- **One branch per round, named `grok/<YYYY-MM-DD>`**, created from `main`'s current head. Reuse the
  same day's branch for more than one round if it's still open; don't open a second PR for the same
  day unless the first has merged or closed.
- **Skip the PR when there's nothing new.** No empty rounds, no placeholder commits.

## 6. Opening a PR — GitHub REST API

The desk runs outside GitHub Actions (it's an interactive/scheduled session with X tools), so it talks
to the API directly rather than using `git`. All calls are to `https://api.github.com`, repo
`harsharn10/proofline`, with header `Authorization: Bearer <token>` (§7 for scope).

1. **Get `main`'s current commit SHA:**
   `GET /repos/harsharn10/proofline/git/refs/heads/main`

2. **Create the day's branch from it** (skip if it already exists):
   `POST /repos/harsharn10/proofline/git/refs`
   ```json
   { "ref": "refs/heads/grok/2026-08-31", "sha": "<main's commit sha>" }
   ```

3. **For each file you're adding or changing**, first check whether it already exists on the branch (to
   get its blob `sha` — required for an update, omitted for a new file):
   `GET /repos/harsharn10/proofline/contents/<path>?ref=grok/2026-08-31`

   Then write it:
   `PUT /repos/harsharn10/proofline/contents/<path>`
   ```json
   {
     "message": "feed: 2026-08-31 round 3 — pons volume dispute",
     "content": "<base64-encoded file content>",
     "branch": "grok/2026-08-31",
     "sha": "<blob sha, only when updating an existing file>"
   }
   ```

4. **Open the PR** once all files for the round are written:
   `POST /repos/harsharn10/proofline/pulls`
   ```json
   {
     "title": "feed: 2026-08-31",
     "head": "grok/2026-08-31",
     "base": "main",
     "body": "Round summary: files touched, rows added/changed, corrections issued. Link the x-fill notes."
   }
   ```

   If a PR already exists for the day's branch, `PUT` more files onto it instead of opening a second
   PR — commits after the first push update it automatically.

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
   job unconditionally, not just under `--release`), the site's `typecheck` + `build`, and a smoke test
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

1. You no longer commit directly to `research/ecosystem-baseline` or any shared branch — every round
   opens a PR from `grok/<date>` via the GitHub REST API (§6).
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
8. New census names go into a `research/inbox/<date>-census-candidates.yaml` proposal (§2.5), never
   straight into `content/census.yaml`.
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

1. Run your normal scout + specialist pass (X search, chain numbers, account desk, collision audit) as
   `research/ecosystem-baseline:.grok/workflows/rh-field-round.rhai` and its skills (rh-field-ops,
   rh-account-desk) describe — except where this contract overrides them (§4, item 4 of §10). Write
   your working notes to research/inbox/<date>-x-fill-N.md and update research/inbox/account-desk.yaml
   — the one ledger. Do not also write 2026-08-31-accounts.yaml; it is retired.
2. For every address you record, write the full record from grok-bot.md §2.1 — { value, chain, source,
   seen, exists_on_4663, explorer_source_verified } — defaulting the two verification fields to null.
   Never infer verification from a key name. For a proxy, label proxy-shell verification separately
   and leave implementation_source_verified null until the implementation itself is checked.
3. For every claim, cite a post id/URL + handle + date, or a docs/explorer URL. No number without a
   source, no claim without a date.
4. Never write a conduct verdict about a person, team, or account. Use only: handle-collision |
   unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision, each with
   evidence: <post id/URL, date>. Describe behavior ("an address with the same ticker posted from…"),
   never intent ("drainer", "impersonator", "farm", "scammer").
5. lifecycle: mainnet requires evidence beyond the project's own post (explorer, DefiLlama chain-slice,
   or docs with addresses). A tweet alone is lifecycle: announced.
6. If — and only if — you're confident of the shape (you know the census slug, the claim is dated and
   sourced), also draft content/feed/<slug>.yaml items and/or content/sources/<slug>.yaml entries, or an
   additive content/accounts.yaml row (always tier: watch). If you're proposing a name that isn't in
   the census yet, write it to research/inbox/<date>-census-candidates.yaml instead (§2.5) — never
   content/census.yaml or content/projects/** directly.
7. Never write scoring, review.approver, or content/changelog.yaml.
8. Open your changes as a PR:
   - Create branch grok/<YYYY-MM-DD> from main's current head:
     POST /repos/harsharn10/proofline/git/refs
   - Write each changed file with PUT /repos/harsharn10/proofline/contents/<path> on that branch
     (GET first if the file already exists, to get its blob sha).
   - Open the PR: POST /repos/harsharn10/proofline/pulls, title "feed: <YYYY-MM-DD>", head
     "grok/<YYYY-MM-DD>", base "main".
   - If nothing changed this round, skip the branch and the PR — do not open an empty PR.
   - Never enable auto-merge or merge the PR. A controller reviews every PR after CI passes.
9. Run again in 6 hours.

Your token is scoped to this repo only: Contents read/write, Pull requests read/write, no other
permission. If you don't have one, stop and ask a human to mint one — do not fall back to a broader
token.
```
