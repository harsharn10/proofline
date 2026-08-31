# Proofline

Evidence-backed research profiles for native Robinhood Chain plays. Research, not advice.
Spec: `PRD.md`. Content-system design: `docs/superpowers/specs/2026-08-30-content-system-design.md`.

## Commands

    npm install
    npm run validate          # schemas + cross-references + research markdown checks
    npm run validate:release  # same, plus launch blockers (corrections contact, verified deployments, approvals)
    npm run score             # derive score / confidence / risk for every project → build/derived.json
    npm run seed              # create stub files for any census entry that has none (never overwrites)
    npm test                  # runs validate on content/ first, then the scoring fixtures and rule tests

## The one rule

Files store **inputs** — rubric levels, security-test points, confidence inputs, approver state, overrides.
`scripts/lib/score.mjs` derives every number the public sees. Nobody types a score into a file.
If a number on the site is wrong, the fix is in an input or in `score.mjs`, never in a rendered value.

## Layout

    content/site.yaml               name, maintainer, corrections contact, chain facts, trending config, disclaimer
    content/census.yaml             the coverage universe; one entry per play with the four qualifying tests
    content/projects/<slug>.yaml    structured record: identity, deployments, dependencies, scoring inputs, findings
    content/sources/<slug>.yaml     source ledger — every S-id cited anywhere for that slug lives here
    content/research/<slug>.md      narrative record, 11 fixed sections, every material sentence tagged
    content/dependencies/<id>.yaml  shared cards: stock-tokens, usdg, uniswap, hyperliquid, chainlink
    content/feed/<slug>.yaml        optional per-project activity feed (company/ct/onchain/risk items)
    content/accounts.yaml           CT accounts tracked for the trending signal (handle, tier: top|watch)
    content/changelog.yaml          dated record of every published change
    content/methodology.md          generated from PRD §6–7 (see Task 5 in the plan for the extraction command)
    schema/                         JSON Schema for each file type
    scripts/                        validate, score, seed, test
    fixtures/                       worked scoring examples with hand-calculated expected values

### Site contract

The site reads only `build/derived.json` (written by `npm run score`, which refuses to write when `content/` fails
validation). Per project it may render `score`, `provisional`, `label`, `confidence`, `risk`, `override.level` and
`factorPercents`. `label` is the only display string and `provisional` the only de-emphasis flag. It must never render
`uncappedScore` or `uncappedConfidence` — those exist so reviewers can see when a cap is doing work.

## Adding a project

1. Add an entry to `content/census.yaml` (all four qualifying tests must be true — PRD §2.1).
2. Add its facts to `scripts/seed-data.mjs` (symbol, summary, dependencies, known deployments, missing-evidence list).
3. `npm run seed` — creates `projects/`, `sources/`, `research/` files for it and appends an "Initial stub opened"
   entry to `content/changelog.yaml` (validate requires one per census slug).
4. `npm run validate`.

## Researching a project (stub → full)

1. Add every source you open to `content/sources/<slug>.yaml` first (`S1`, `S2`, …) with `accessed_at`, `claim`, `excerpt`.
2. Write `content/research/<slug>.md`. Every material sentence ends with `[verified S3]`, `[claim S7]`, `[inference S3 S4]`, `[disputed S9]` or `[unknown]`.
   A full profile may not leave any of sections 2–9 as `_Research pending._`.
3. Fill `scoring:` in `content/projects/<slug>.yaml` (Pons has a commented skeleton). Every level needs `evidence: [S..]` and a note.
4. Set `coverage: full` in the project file, the research front matter and `census.yaml`.
5. Add a `changelog.yaml` entry (`type: score` or `coverage`, prior → new).
6. `npm run validate && npm run score`. Open a PR; the approver sets `review.approver` to their id.
   Until they do, confidence is capped at 69 and the score shows as provisional.

## Evidence tags and language

`verified` = reproduced onchain or from strong primary evidence · `claim` = project says so · `inference` = analyst
conclusion from cited evidence · `disputed` = challenged with evidence · `unknown` = could not determine.

Tags are checked everywhere: in every section, every `[verified …]`-shaped bracket must match the grammar exactly
(lowercase class, ids separated by spaces, no commas) and every id must exist in `sources/<slug>.yaml`. Sections 2–9
additionally may not contain an untagged paragraph. A paragraph is anything between blank lines, so a list or a table
counts as one paragraph: put a tag on its last line, or separate the items with blank lines and tag each one.
Write "the admin address can upgrade contracts without an enforced timelock", not "the team can rug". Never label
anything "safe". See PRD §7.3.

## Deployments

`deployments[]` replaces the old `addresses[]`. Each entry is `{ label, chain, address, issuer?, role, verified,
sources }`. `chain` is one of `robinhood-chain | arbitrum-one | ethereum | base | solana | hyperliquid | other` — the
same ticker can have more than one on-chain deployment (a Stock Token's Robinhood Chain address versus its Arbitrum
One "Classic EU" address, say), and each gets its own entry. `address` accepts a `0x…` hex address, a base58 Solana
address, or the sentinel `not-verified`. `verified: true` still requires a real address (not the sentinel) and at
least one source. Dependency cards (`schema/dependency.schema.json`) may carry the same optional `deployments[]`,
with an extra optional `ticker` field, for cards that cover more than one on-chain asset (`stock-tokens`, for
example).

## Feed, accounts and trending

`content/feed/<slug>.yaml` is an optional per-project activity feed: `{ slug, items: [{ id, date, kind, title, body,
account?, sourceUrl?, sources? }] }`. `kind` is `company | ct | onchain | risk`; `account` is a CT handle matching
`^@[A-Za-z0-9_]{1,15}$`. A feed file's `slug` must be a census slug, and any `sources` ids it cites must exist in that
slug's ledger — same rule as a project file.

`content/accounts.yaml` is the list of CT accounts worth tracking: `[{ handle, name?, tier: top|watch, note? }]`. New
accounts start at `tier: watch`; the maintainer promotes one to `top` once its calls have proven worth following.

`site.yaml`'s `trending: { min_accounts, window_days }` (3 accounts / 7 days by default) drives `computeTrending()`
(`scripts/lib/trending.mjs`): a project is trending when at least `min_accounts` distinct `tier: top` accounts have
each posted a `kind: ct` item about it within the last `window_days` days. `npm run score` merges the result into
`build/derived.json` — `trending: boolean` on every project, plus a top-level `trending: [slug, ...]` list. Pass
`--today YYYY-MM-DD` to pin "today" for a reproducible run; it defaults to the real date.

## Voice lint

`scripts/lib/voice.mjs` flags hype language: case-insensitive, whole-word matches of a banned list (ape, casino, rug,
moon, shill, bag, degen, giga, vapor, "send it", plus "print"/"prints" only when it reads as market-cap-speak — i.e.
close to "mcap", "market cap" or "FDV") in a project's `summary`, its findings text, feed `title`/`body`, and
research Markdown. `npm run validate` reports hits as warnings; `npm run validate:release` turns them into errors.

## Status

Seeded 2026-08-30 with 14 stubs. No full profiles yet. `corrections.destination` in `site.yaml` is `TODO` and blocks
`validate:release` on purpose.
