# Icarus build spec

Product alignment review: [mission, user journeys and system contract](../../product/mission-and-system.md). This proposed review records gaps and owner decisions; it does not silently replace this approved visual specification.

Proofline becomes **Icarus: building the Robinhood Registry**. Same content system, same data, new front door. This folder is the whole spec: `mock.html` is the visual spec (open it in a browser; hash routes `#/`, `#/s/launchpads`, `#/t/artificial-inu`, `#/n/pons`), this file is the rules and the PR map. Where the mock and this file disagree, this file wins.

Owner: harsharn10. Written 2026-09-03 from the approved mock v2.

## 1. What the site is

Icarus researches and tracks what is new on Robinhood Chain (chain 4663) and keeps readers current on the site and on Telegram. The reader's path is: home → a category → a name. Home answers "what is happening right now", category answers "who leads and who is quiet", the card answers "what is this, who controls it, is it growing, what are people saying".

## 2. Palette and type

Robinhood palette on warm-neutral surfaces. Tokens (light / dark):

| token | light | dark | use |
|---|---|---|---|
| `--s0` | `#f7f7f5` | `#0b0c0d` | page |
| `--s1` | `#efefec` | `#161719` | panels inside cards |
| `--s2` | `#ffffff` | `#111214` | cards, bar |
| `--t1` / `--t2` / `--t3` | `#111214` / `#5a5c60` / `#8b8e93` | `#f2f3f4` / `#a7aaae` / `#6f7378` | text |
| `--rh` | `#00c805` | `#00c805` | brand green (bars, active underline, logo mark) |
| `--good` / `--good-bg` | `#078f3a` / `#e3f9e9` | `#2fd56a` / `#0e2e19` | live, positive, official |
| `--bad` / `--bad-bg` | `#d64500` / `#fdebe3` | `#ff6a2b` / `#3a1a0d` | dormant, negative, risk |
| `--warn` / `--warn-bg` | `#a86400` / `#fbf1db` | `#f5b342` / `#3a2a0d` | quiet, owner powers |
| `--acc` | `#0b6bcb` | `#7cb6f0` | links, footnote numbers |
| `--line` / `--line-soft` | `rgba(17,18,20,.12)` / `.06` | `rgba(242,243,244,.12)` / `.06` | 0.5px borders |

System sans, 13px body, tabular numerals. Radii: 12px cards, 8px panels, pills fully round. Both themes through tokens only; the toggle stamps `data-theme`.

## 3. Rules that apply to every PR

1. **Reader words only.** No internal jargon in visible copy: not packet, census, stub, coverage, cohort, qualifying, collector, dossier, evidence class, provisional, derived. Vocabulary map:
   - Findings → **Commentary**. History and Feed tabs → one **What people are saying** column plus the `/feed` page.
   - "listed, never scored" → **not yet reviewed**. Score → **Control 41/100 · evidence 64% · awaiting second review** (projects with a score only; tokens never show a score).
   - Coverage full/stub is never shown as a word; the card just has more or fewer rows.
   - Evidence class labels on commentary: **checked on chain** (verified by RPC or explorer), **from the project** (claim), **from the evidence** (inference), **disputed**, **Open** (gaps). Risk items are prefixed **Risk ·**.
   - Official surface confirmed → **Official · links confirmed**; unconfirmed → **Unclaimed**.
   - Status words: **Live** (activity ≤ 7 d), **Quiet** (≤ 30 d), **Dormant** (> 30 d), **Announced** (nothing located on chain), **Testnet**. Computed from reads in `content-server.ts`, never typed.
2. **Every number links to its source.** Hover or footnote on the card, source pill on the feed. A dash means "not read", never zero.
3. **The share bar.** A name appears in *Right now*, in the *By category* leaders, and in Telegram only if all three hold: official surface confirmed (`official_links` with a site or docs entry, the census row not on the watchlist, that is not `role: observe`, and its identity not conflicted), a located contract on 4663 (a pulled address with `is_contract: true`), and liquidity ≥ $25K (tokens and launchpads) or TVL ≥ $25K (protocols). *Announced* needs the first condition plus a research summary and nothing on chain. Implement once as `meetsShareBar(entry)` in `site/src/data/content-server.ts` and reuse it; the Telegram digest reads the same function's output from `build/derived.json`.
4. **No wallet labeling.** No named wallets, no "smart money", no wallet-move lists, no per-wallet tables. Aggregates (holders, top-10 share, trades) are fine.
5. **Charts come from snapshots.** `content/pulled/history/<slug>.jsonl` (one line per pull, every 6 h) and, when present, `content/pulled/series/<slug>.json` (daily series backfilled from DefiLlama). Token series: Holders / Volume / Trades. Project series: Launches / Revenue / Holders (omit a series with no data). The Daily / Weekly / Monthly control changes the window (7 / 30 / 90 days). Under 14 points, print "N snapshots since <date>" next to the chart. Never fabricate points.
6. **Placeholders are honest.** Unpulled fields show muted italic copy ("not checked") or the row is omitted; never a zero, never an invented value.
7. **Build must stay green.** `npm test` (root) and `npm --prefix site run test && npm --prefix site run build` pass; `npm run validate:release` reports 0 errors. Render builds `main` with `build:render`.
8. **Branch and PR.** One branch per assignment, `codex/20260903/<work-id>`, small commits, trailer `Producer: codex`. Open the PR against `main` with the body format in the assignment; never merge, never enable auto-merge. A controller reviews with `review-checklist.md`.

## 4. Page contracts (v3, 2026-09-03)

Who the pages serve, one line each. A casual Robinhood user: what is hot today, is it real, where do I read more. A hardcore trader: what launched in the last day, who is behind it, is liquidity locked, what is CT saying, a chart. Robinhood's ecosystem team: who is building what, by category, with momentum and credible sourcing. A Telegram subscriber: tell me when it is busy. Every page answers those in that order of prominence; risk and control detail is always present but never the first thing on the screen.

### The wire
One stream feeds the home page, the feed page, each card's Commentary and Telegram. An item is a headline (≤ 80 characters), a gist (one or two sentences, what it means), the link it came from, the name chip, the time, and one of four kinds:
- **Announcements**: what the project itself posted or shipped (kind `company`).
- **Talk**: what people on X are saying, with the handle (kind `ct`).
- **On-chain**: listings, new contracts, owner or fee changes, graduations (kind `onchain`).
- **Icarus notes**: a material finding from our own reading, only when it changes the picture (a risk, a control change, a correction). Bookkeeping entries (profile opened, review stage, score changes) never appear; they stay on `/review`.
Items come from the feed files (`content/feed/<slug>.yaml`, compiled from packet events) plus changelog entries whose type is `risk`, `finding` or `correction` with severity Material or Risk. Newest first; a name chip filters the wire to that name.

### Home `/`
Top bar: ICARUS wordmark with feather mark; nav Registry · Feed · How to read this; jump box; Telegram button; theme toggle. Hero: eyebrow "Robinhood Chain · 4663", title "Icarus: building the **Robinhood Registry**" (green span), tagline "Icarus researches and tracks what is new on Robinhood Chain and keeps you current here and on Telegram. Touch grass when it's quiet. Catch up fast when it's busy." Stat box: names on file, live on chain, launches today, volume 24h, chain-read time, refresh cadence. Category pills with counts.

**Right now** (three cards, only names above the share bar; hint states the bar):
- *Trending*: top 5 live names by 24h volume. Row: name, one-line what-it-is, **market cap** (DexScreener `market_cap`; when only FDV exists show it labelled "FDV"), 24h volume, change against the snapshot nearest 24 h earlier (omitted when none), holders.
- *New launches*: first pool ≤ 14 days old, newest first. Row: status pill, name, TL;DR, market cap, age. Closing line states how many launches below the bar were not listed.
- *Announced*: official surface confirmed, nothing on chain, has a TL;DR. Row: name, **TL;DR** (one sentence: what, when, why it matters), the source link, age of the announcement.

**By category**: one card per taxonomy section, its icon, the section's ranking basis, the top 3–5 names with that number and market cap where it exists, "All N →".

**The wire** (replaces "Latest from Icarus"): the newest 6 items across all names, kind chips Announcements / Talk / On-chain / Icarus notes, "Full wire →" and "Get it on Telegram →".

Footer line unchanged.

### Category `/s/<section>`
As before, plus a market cap column where the section's names are tokens, and the section's slice of the wire (newest 4) under the table.

### Card `/n/<slug>` (project and token variants)
Header: avatar, name, symbol, Official badge, status pill with relative time, **TL;DR line under the name** (the `tldr` field, one sentence). Icon tags as in v2. Daily / Weekly / Monthly control.

Then, in this order:
1. **Overview**: the `summary` paragraph (≤ 80 words, mechanism first), official link pills.
2. **Why people care**: three bullets (`why_people_care`): the thesis, the traction hook, the next catalyst; each bullet carries its source footnote.
3. **Numbers**: four metric tiles per `SECTION_KPIS` (market cap is one of them for tokens), the growth chart, the facts line with source links.
4. **Commentary**: the wire filtered to this name, newest first, with kind chips; "All →" to `/feed?name=<slug>`. Talk items show the handle; Announcements show the project; On-chain items link the explorer or the listing.
5. Related table: the section cohort sorted by the section KPI.
6. **What could go wrong**: at most three bullets in plain words ("a 2-of-3 Safe can change fees with no delay", "no audit matched the deployed code", "liquidity is not locked"), each with a footnote. This block sits at the bottom of the main column, below Related, never above the fold.
7. **Details** (tabs): Contracts (deployment grid), Control (ownership, timelock, upgradeability, fees, structure rows), **Checks**, Sources. Checks is the rest of the research record behind the card — the verified positives, the open gaps and the still-disputed items, each carrying its §3 rule 1 evidence word ("checked on chain", "from the project", "from the evidence", "disputed", "Open") and its footnotes. Risk items are not repeated there; they are the three bullets in *What could go wrong*. The Control badge, when a score exists, lives here and in the header only.

Tokens never show a score. Rows the data cannot fill are omitted or show muted "not checked"; never a zero.

### Feed `/feed` and How to read this `/methodology`
Feed = the full wire with kind chips and the `?name=` filter; `/changelog` redirects here; changelog bookkeeping is not shown. How to read this explains the four kinds, the status words, the share bar, the control score and evidence percentage, Official, the dash rule, refresh cadence, Telegram.

## 5. Data additions

Pulled (`content/pulled/<slug>.yaml`): `market.market_cap_usd` and `market.fdv_usd` from DexScreener alongside the existing fields; snapshot lines gain `market_cap`.

Project (`content/projects/<slug>.yaml`): `tldr` (one sentence, ≤ 160 characters), `why_people_care` (exactly three strings, each ≤ 200 characters, each ending with source ids in brackets), `risks` (up to three strings, plain words, each ≤ 200 characters with source ids), plus the existing `summary`, `themes`, `official_links`. The compiler fills them from the packet: the `TL;DR:` line, the three bullets under `## Why it matters`, the bullets under `## What could go wrong`. When a packet writes those sections as prose, the compiler derives the fields from it and marks a derived TL;DR with `tldr_source: derived` so a real `TL;DR:` line replaces it later; the rules are in `docs/research-system.md` §5. An over-length bullet is trimmed to what fits, never dropped.

Feed (`content/feed/<slug>.yaml`): items keep `kind` company | ct | onchain | risk; the site maps them to Announcements / Talk / On-chain / Icarus notes. Each item has `title` (≤ 80), `body` (the gist), `sourceUrl`, `account` (for ct), `date`.

## 6. PR map

| # | work id | scope | depends on |
|---|---|---|---|
| 1 | `WORK-20260903-codex-icarus-1-shell` | brand, tokens, header, footer, shared components, chart component | — |
| 2 | `WORK-20260903-codex-icarus-2-home` | home and category pages, share bar, right-now rules | 1 |
| 3 | `WORK-20260903-codex-icarus-3-cards` | project and token cards | 1 |
| 4 | `WORK-20260903-codex-icarus-4-pull` | puller: top-10 share, launchpad attribution, mint and LP checks, revenue series | — |
| 5 | `WORK-20260903-codex-icarus-5-compiler` | compiler and schemas: summary, themes, links, posts → feed, lifecycle from pulled | — |
| 6 | `WORK-20260903-codex-icarus-6-copy` | copy pass, How to read this, Feed page, Telegram wording, vocabulary test | 2, 3 |
| G | `WORK-20260903-grok-heavy-icarus-research` | research packets for every name plus discovery, with the fields the cards need | — |

PRs 1, 4, 5 and G can run at once. 2 and 3 branch from 1 (or from `main` once 1 has merged). 6 goes last.
