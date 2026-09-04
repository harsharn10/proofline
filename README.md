# Proofline

Evidence-backed research profiles for native Robinhood Chain plays. Research, not advice.
Spec: `PRD.md`. Content-system design: `docs/superpowers/specs/2026-08-30-content-system-design.md`.

Research operations are defined by one contract, [`docs/research-system.md`](docs/research-system.md):
objects, who may write which paths, roles, the packet format (§5), branch and PR protocol, evidence
and conflict rules. Controlled product and display labels are in [`docs/taxonomy.md`](docs/taxonomy.md)
with the machine copy in `schema/taxonomy.json`. Producer notes restate the contract for one producer:
[`Grok desk`](docs/integrations/grok-bot.md) and [`SuperGrok verifier`](docs/integrations/supergrok.md).
Grok's runtime skills live in `.grok/`. Dated inbox notes and historical implementation plans are
evidence, not instructions.

## Commands

    npm install
    npm run validate          # schemas + cross-references + research markdown checks + strict parse of research/inbox YAML
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
    content/census.yaml             the coverage universe; one entry per play with the four qualifying tests, handle, tree placement
    content/projects/<slug>.yaml    structured record: identity, deployments, dependencies, scoring inputs, findings
    content/sources/<slug>.yaml     source ledger — every S-id cited anywhere for that slug lives here
    content/research/<slug>.md      narrative record, 11 fixed sections, every material sentence tagged
    content/dependencies/<id>.yaml  shared cards: 21 as of 2026-08-31 — stock-tokens, usdg, uniswap, hyperliquid,
                                     chainlink, morpho, rialto and 15 more (see the directory for the current list)
    content/feed/<slug>.yaml        optional per-project activity feed (company/ct/onchain/risk items)
    content/accounts.yaml           CT accounts tracked for the trending signal (handle, tier, role, slug, followers)
    content/changelog.yaml          dated record of every published change
    content/methodology.md          generated from PRD §6–7 (see Task 5 in the plan for the extraction command)
    research/inbox/assignments/     controller-written assignments: packet header + objective, one per work id
    research/inbox/packets/<slug>/  agent handoffs (packet v2, research-system §5); the only path a collector or verifier writes
    docs/templates/                 research-packet-v2.md — the worked packet every producer copies
    schema/                         JSON Schema for each file type; schema/taxonomy.json is the leaf and section registry
    scripts/                        validate, score, seed, test, migrations
    fixtures/                       worked scoring examples with hand-calculated expected values
    .grok/                          Grok's runtime skills and workflow, rewritten to the research contract

Everything under `content/` is written by the compiler (Codex, Claude or the owner) from packets, or by
a machine script. Collectors and verifiers never write it. Two paths above are contracts, not files
yet: `research/inbox/packets/` appears with the first packet PR, and `content/pulled/<slug>.yaml`
(onchain and DefiLlama facts from `scripts/pull.mjs`, Codex assignment C2) is planned.

### Site contract

The site reads only `build/derived.json` (written by `npm run score`, which refuses to write when `content/` fails
validation). Per project it may render `score`, `provisional`, `label`, `confidence`, `risk`, `override.level`,
`factorPercents`, `trending`, `trendingAccounts`, `metrics` and `rank`. `label` is the only display string and
`provisional` the only de-emphasis flag; `trendingAccounts` is the counting-accounts list `computeTrending()` already
produced — the site renders it as-is and never recomputes trending sources from account tiers with its own rule.
`metrics` is a passthrough of the project file's own `metrics[]` (content claims — `class: claim`, ledger-cited,
never `verified`); `rank` is `computeRanks()`'s output for the project's census category — `{ basis, position, of }`
or `null` when the category has no ranked basis (see "Metrics and category ranks" below) — and the site must render
it as-is rather than recomputing a basis or position from `metrics` with its own rule. It must never render
`uncappedScore` or `uncappedConfidence` — those exist so reviewers can see when a cap is doing work. The loaders in
`site/src/data/content-server.ts` also never ship an account's `note` to a page, and the directory route (`/`) ships
a slim per-project slice, not the full research/sources/findings bundle — see that file's comments for the exact
shape of each server function's response.

## Adding a project

A name enters the census from a seed packet (`research/inbox/packets/<slug>/<work-id>.md`,
research-system §5), never from an agent writing `content/census.yaml`. Copy
[`docs/templates/research-packet-v2.md`](docs/templates/research-packet-v2.md) to file one; `npm run
validate` checks it against `schema/packet.schema.json`. The compiler turns the packet into a row.
Until `scripts/compile-packet.mjs` lands (Codex assignment C1), the compiler does it by hand:

1. Add an entry to `content/census.yaml` from the packet's identity and classification blocks, with all
   four qualifying tests (PRD §2.1). A test may carry `value: false` with a `note` explaining why — the
   row stays in the census either way, so the universe stays visible; `validate` warns on it and
   `validate:release` blocks release until it's resolved. `tree.primary` must be a leaf from
   `schema/taxonomy.json`; `category` is derived from the leaf (`scripts/migrations/derive-category-from-leaf.mjs`).
   Packet coverage `seed` becomes `coverage: stub`; a packet lifecycle of `unknown` cannot become a row.
2. `npm run seed` — reads the newest packet for every census slug that has no `projects/`, `sources/` or
   `research/` file yet and opens all three from it: symbol from `identity.symbols`, summary from the
   body's "What it is", official links from `links[]`, deployments from `deployments[]` (address
   `not-verified` until `exists_on_4663` is true), the source ledger from `receipts[]` and the
   missing-evidence list from `gaps[]`. It also appends an "Initial stub opened" entry to
   `content/changelog.yaml` (validate requires one per census slug). A slug with no packet gets a
   `NULL — …` placeholder stub and a warning. Existing files are never overwritten.
3. `npm run validate`.

## Researching a project (stub → full)

Start from a reviewed packet. A collector files one full-tier
`research/inbox/packets/<slug>/<work-id>.md` from `docs/templates/research-packet-v2.md`; a verifier
files its own packet with `prior_packet` set; a single assigned compiler maps them into the canonical
files below. `npm run validate` gates every packet on `schema/packet.schema.json`: packet-local ids
must resolve, a `verified` claim needs a reproduction, `lifecycle: mainnet` needs evidence beyond the
project's own post, and a collector or verifier may not resolve a conflict. Packet acceptance, profile
publication, site-feed placement and Telegram eligibility are separate decisions (research-system §8).
The compiler's steps:

1. Add every source the packet cites to `content/sources/<slug>.yaml` (`S1`, `S2`, …, new ids above the current maximum, never renumbered) with `accessed_at`, `claim`, `excerpt`.
2. Write `content/research/<slug>.md`. Every material sentence ends with `[verified S3]`, `[claim S7]`, `[inference S3 S4]`, `[disputed S9]` or `[unknown]`.
   A full profile may not leave any of sections 2–9 as `_Research pending._`.
3. Fill `scoring:` in `content/projects/<slug>.yaml` (Pons has a worked example). Every level needs `evidence: [S..]` and a note.
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
sources, account?, sourceUrl? }] }`. Every item requires at least one ledger `S-id`; `kind` is
`company | ct | onchain | risk`; `account` is a CT handle matching `^@[A-Za-z0-9_]{1,15}$`. A feed file's `slug` must
be a census slug, and its `sources` ids must exist in that slug's ledger — same rule as a project file. `date` is the
post date; when an intake recorded a post without its date,
the item is dated to the capture date and the body says so ("captured on 2026-08-31; original post date not
recorded"). New item ids are content hashes (research-system §8), written by the compiler; the older
positional ids (`pons-14`) stay until the compiler rewrites the file.

`content/accounts.yaml` is the list of CT accounts worth tracking: `[{ handle, name?, tier, role?, slug?, followers?,
note? }]`. `tier` is `top | watch | downweight | skip`: `downweight` = scrape, never count toward trending; `skip` =
posts not ingested as evidence (handle collisions, unconfirmed official accounts, third-party links) — the row stays so
the collision is not lost. `role` is `project | alpha | kol | data | infra | media` and says how to read the account;
`slug` ties an official account to its census row. New accounts start at `tier: watch`; the maintainer promotes one to
`top` once its calls have proven worth following. Notes describe observable behaviour only — what the account posts,
how often, whether a disclosed relationship exists — never conduct; `validate` lints notes for hype words and conduct
words (drainer, impersonator, farm, scammer, insider, …) unconditionally (see "Voice and conduct lint" below). The
2026-08-30/31 intake built the initial ledger from the research desk's own account file
(`scripts/intake/2026-08-31/build-accounts.mjs`, one-shot — see "Status" below); that script mapped the desk's
`builder` role to `project` (team accounts never trend), `farm` to `kol`, and `follow: false` + `listen: low` rows
to `downweight`. Account changes now arrive as packet claims (`account.<handle>.<axis>`) and the compiler
writes the file.

`site.yaml`'s `trending: { min_accounts, window_days }` (3 accounts / 7 days by default) drives `computeTrending()`
(`scripts/lib/trending.mjs`): a project is trending when at least `min_accounts` distinct counting accounts have each
posted a `kind: ct` item about it within the last `window_days` days. An account counts only when `tier: top` **and**
its `role` is absent or `alpha` / `kol` — official project accounts, data feeds and media never vote on trending, and
`watch`, `downweight` and `skip` rows are never counted; `validate` warns when a feed item is attributed to a `skip`
handle. `npm run score` merges the result into
`build/derived.json` — `trending: boolean` on every project, plus a top-level `trending: [slug, ...]` list. Pass
`--today YYYY-MM-DD` to pin "today" for a reproducible run; it defaults to the real date.

## Metrics and category ranks

`content/projects/<slug>.yaml` may carry an optional `metrics: [{ kind, value, currency?, as_of, class, sources }]`.
`kind` is `tvl | volume_24h | fees_24h | revenue_24h | market_cap | holders` (`schema/shared.schema.json`
`metricKind`); `value` is a number ≥ 0; `currency` is the const `"USD"` and must be **absent** when `kind: holders`
(a holder count has no currency), optional (defaults to USD) otherwise; `class` is always the const `"claim"` —
a harvested metric is a number a third party published, never independently reproduced, so it can never be
`verified`; `sources` is one or more ledger ids (`crossCheck` errors if any of them is missing from that slug's
`sources/<slug>.yaml`, the same rule as everywhere else a project cites a source — no schema-level special case was
needed, `referencedSourceIds()` already walks any array keyed `sources` generically). A project may carry at most one
current metric per `kind`; metric history belongs in dated evidence rather than a second ambiguous current row.

`scripts/lib/score.mjs`'s `computeRanks()` derives per-project category ranks from `metrics[]` — nothing is ever
typed into a rank field by hand. Within each census `category`, it picks **one basis** for the whole category: the
highest-priority kind, in the fixed order `tvl, volume_24h, fees_24h, revenue_24h` (`market_cap` and `holders` are
never a ranking basis), that at least two projects in the category both carry a value for. A category where no kind
clears that bar gets no ranks at all. Projects that have `metrics[]` but not a value for the category's basis kind
are not ranked either. Ties use standard competition ranking — a tie shares the lower position and the next distinct
value skips ahead by the tie size (`1, 1, 3`, never `1, 2`). `npm run score` merges the result into
`build/derived.json`: every project gets `metrics: []` (a direct passthrough of the project file's own array) and
`rank: { basis, position, of } | null` (`of` = how many projects in that category are ranked on that basis).

## Telegram digest

`node scripts/telegram-digest.mjs` (PRD §9.2) sends only controller-approved changelog entries that
have not already been sent. Only entries carrying a structured `channel` publication create
review-queue items; ordinary content and changelog merges update the site without touching Telegram.
The publication declares its event (`new-coverage | research-update | risk-alert | correction |
breaking | trending | roundup`), recommended delivery (`immediate | same-day | roundup`), retail
headline and summary, and optional `why_it_matters[]` / `watch_next` copy. An opted-in entry still
does not authorize a channel post:

    npm run telegram             # send
    npm run telegram:dry         # preview only, sends nothing, state unchanged
    npm run telegram:test        # send a one-off "bot connected" message
    npm run telegram:mark-sent   # mark current entries sent without posting (e.g. after a manual send)
    npm run telegram:chat-id     # look up your chat id

Credentials (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, optional `SITE_URL`, `PROFILE_PATH`) come from
`.env.local` (gitignored) locally, or from repo secrets in CI. `/review` reads the pending queue and
stores publish/roundup/site-only/hold decisions plus edited channel copy in
`ops/telegram-review.json`. Each decision fingerprints both the source publication and exact copy;
a later change invalidates approval and returns the item to pending. The sender publishes individual
event cards and combines entries deliberately approved for roundup delivery. Full editorial rules
and card templates live in `docs/channel-publishing.md`. The route and
its server functions are hidden behind HTTP Basic authentication: use `github` as the username and a
GitHub token as the password. The server admits only GitHub user `harsharn10` with write access to this
repository, requires the credential on every request, caches successful GitHub verification for at
most 30 seconds, and never persists the token on Render or in browser storage. Prefer a fine-grained
token scoped only to this repository with Contents read/write.
From an already authenticated GitHub CLI, `gh auth token | pbcopy` copies the current token without
printing it when its existing scopes are acceptable. Close the browser session to clear its HTTP auth
cache. The route is absent from public navigation and sends `noindex`/private no-store headers.
`channel_enabled: false` pauses every delivery. Sent-state lives in
`ops/telegram-state.json`. `publish.yml` runs on main pushes, but the sender exits without posting
unless the channel is enabled and at least one unsent entry is explicitly approved.

## CI

Three workflows under `.github/workflows/`:

- **`validate.yml`** — every PR, and every push to `main` (not to other branches — a PR run already
  covers those, and a `push: ["**"]` trigger would double-run every PR commit). One job: root
  `npm ci && npm test` (schema validation + scoring/rule tests — a voice hit in a feed item or a conduct
  hit anywhere fails this unconditionally, not just under `--release`; every YAML file under
  `research/inbox/` must parse strictly), a `node scripts/validate.mjs
  --release` step with `continue-on-error: true` so release blockers (corrections contact, verified
  deployments, approvals) show up in the log without failing the check, then the site's `npm ci && npm
  run typecheck && npm run build && npm run smoke` (the smoke test boots the build and asserts every
  route is 200 with no `uncapped` leakage — see "Site contract" above). `automerge-feed.yml` reads the
  result only to classify the PR and comment; it never merges.
- **`automerge-feed.yml`** — triggers on `validate.yml`'s own completion (`workflow_run`, so it always
  runs the copy of this file committed to `main`, never a PR's copy) for a producer head branch that
  Validate just passed. It finds the PR, asks the GitHub API for its exact file list (not `git diff`,
  which can hide a rename), and requires every file to be an addition or in-place edit under the
  intake allowlist. The contract allowlist (research-system §2) is `research/inbox/packets/**` and
  `research/inbox/assignments/**` for `grok/**`, `grok-heavy/**`, `supergrok/**` and `codex/**`
  branches. The workflow never merges or dispatches publishing. Allowlisted PRs receive one "waiting
  for controller" comment; anything else receives "needs controller review."
- **`publish.yml`** — on push to `main` and explicit dispatch. `npm run score`, then the approval-only
  Telegram sender, skipped rather than failed when Telegram secrets are absent; commits
  `ops/telegram-state.json` back with `[skip ci]` only after an approved delivery.

Repository secrets: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `SITE_URL`, and
`BLOCKSCOUT_API_KEY` are optional. Absent Telegram values skip the digest; an absent Blockscout key
keeps the public explorer fallback. Create the free Blockscout key at
[dev.blockscout.com](https://dev.blockscout.com) and store it only as the Actions secret named above.
`GITHUB_TOKEN` is automatic; `automerge-feed.yml` only needs `pull-requests: write` for its comments.

Leave repository auto-merge disabled. Adding `validate.yml`'s job as a required status check in branch
protection on `main` is still worth doing as a second line of defense.

## Deployment

The canonical production site is [proofline-892b.onrender.com](https://proofline-892b.onrender.com),
deployed from `main` using [`render.yaml`](render.yaml). Render's GitHub deployment status and the `/`
health check are the production signals.

Cloudflare Workers is retained as a secondary deployment target. [`wrangler.jsonc`](wrangler.jsonc)
and the `cloudflare:*` scripts build the same site for Workers; the `Workers Builds: proofline` check
validates that secondary target. It is not the canonical production signal and does not control the
Telegram publishing gate.

Vercel is not currently connected or deployed. [`site/vercel.json`](site/vercel.json) remains only as
compatibility configuration in case a Vercel deployment is intentionally restored later.

## Producers

Automated research (X posts, onchain events, official announcements, verification passes) reaches
this repo only as a pull request from a `<producer>/<YYYYMMDD>/<work-id>` branch, opened through the
GitHub REST API, containing one packet per assigned slug under `research/inbox/packets/`. Producer ids
are `grok-heavy`, `grok-bot`, `supergrok`, `codex`, `claude`, or a GitHub id; every bot commit carries
a `Producer: <id>` trailer. Producers never write `content/`. The compiler maps packets into
`content/`; conflicts are never last-write-wins ([`docs/research-system.md`](docs/research-system.md)
§7 has the field-specific source precedence, authenticity, resolution and merge rules).

`content/census.yaml` is the canonical name registry. Every row carries an `identity` taxonomy:
aliases, symbols, entity kind, chain scope and `verified | provisional | conflicted` status. New names
never enter it directly from automation. The one-file-per-name dossier under `research/inbox/names/`
and `docs/templates/name-intake.yaml` are gone: the packet frontmatter is the dossier, and
`schema/packet.schema.json` is the schema that used to validate them.

## Voice and conduct lint

`scripts/lib/voice.mjs` has two scans, both case-insensitive and whole-word, run by `npm run validate`
over a project's `summary`, its findings text, feed `title`/`body`, research Markdown, and account
`note`s:

- **Voice** (`voiceWarnings`) flags hype language — ape, casino, rug, moon, shill, bag, degen, giga,
  vapor, "send it", plus "print"/"prints" only when it reads as market-cap-speak (close to "mcap",
  "market cap" or "FDV"). A hit in a project's `summary`, findings or research Markdown is a warning
  that `npm run validate:release` turns into an error; a hit in a feed `title`/`body` or an account
  `note` is an error unconditionally, so unsafe copy cannot pass the intake gate even before the
  controller reviews it (final review C3).
- **Conduct** (`conductWarnings`) flags verdicts about a named person, team or account — drainer,
  scammer, scam, impersonator, fraud, fraudster, insider, honeypot, ponzi, "same person as" (plus,
  in an account note only, impersonation, farm/farmed, scams, insiders, fraudulent, malicious,
  phishing, shady, sketchy — words that are an accusation about an account but ordinary in protocol
  prose elsewhere). A conduct hit is an error unconditionally, everywhere it's checked — not just under
  `--release`. Write observable behavior instead: "an address with the same ticker posted from a
  different account", "the account posted a link to a domain that is not the project's."

## Status

Seeded 2026-08-30 with 14 stubs; expanded 2026-08-31 to 49 stubs from the Grok research intake (see
`research/inbox/grok-2026-08-30/HARVEST.md` — every address `verified: false`, every statement `class: claim`).
One full profile (`pons`, scored via PR #10). `corrections.destination` in `site.yaml` is `TODO` and
blocks `validate:release` on purpose. Open work from the 2026-09-01 review is drafted as issues under
`docs/reviews/2026-09-01/issues/`.

Intake tooling: `content/` is canonical now — the merge from the 2026-08-30/31 Grok intake is done (Task
5), and `scripts/intake/2026-08-31/{import-chain-file,harvest-data,apply-harvest,build-accounts}.mjs`
that did it are one-shot, quarantined under `scripts/intake/2026-08-31/` (see the README there).
`apply-harvest.mjs` and `build-accounts.mjs` refuse to run without `--overwrite` because they regenerate
their target files wholesale — don't re-run them against reviewed content. Two of them
(`apply-harvest.mjs`, `harvest-metrics.mjs`) no longer load at all: they import the retired
`scripts/seed-data.mjs`, and they stay only as the record of that pass. `node
scripts/build-dependency-cards.mjs` (skeleton cards, never overwrites an existing one) is not one-shot
and stays at the top level; it's still the right tool for a new dependency card.
