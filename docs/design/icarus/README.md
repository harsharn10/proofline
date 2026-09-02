# Icarus build spec

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
3. **The share bar.** A name appears in *Right now*, in the *By category* leaders, and in Telegram only if all three hold: official surface confirmed (`official_links` with a site or docs entry and the census row not flagged unconfirmed), a located contract on 4663 (a pulled address with `is_contract: true`), and liquidity ≥ $25K (tokens and launchpads) or TVL ≥ $25K (protocols). *Announced* needs the first condition plus a research summary and nothing on chain. Implement once as `meetsShareBar(entry)` in `site/src/data/content-server.ts` and reuse it; the Telegram digest reads the same function's output from `build/derived.json`.
4. **No wallet labeling.** No named wallets, no "smart money", no wallet-move lists, no per-wallet tables. Aggregates (holders, top-10 share, trades) are fine.
5. **Charts come from snapshots.** `content/pulled/history/<slug>.jsonl` (one line per pull, every 6 h) and, when present, `content/pulled/series/<slug>.json` (daily series backfilled from DefiLlama). Token series: Holders / Volume / Trades. Project series: Launches / Revenue / Holders (omit a series with no data). The Daily / Weekly / Monthly control changes the window (7 / 30 / 90 days). Under 14 points, print "N snapshots since <date>" next to the chart. Never fabricate points.
6. **Placeholders are honest.** Unpulled fields show muted italic copy ("not checked") or the row is omitted; never a zero, never an invented value.
7. **Build must stay green.** `npm test` (root) and `npm --prefix site run test && npm --prefix site run build` pass; `npm run validate:release` reports 0 errors. Render builds `main` with `build:render`.
8. **Branch and PR.** One branch per assignment, `codex/20260903/<work-id>`, small commits, trailer `Producer: codex`. Open the PR against `main` with the body format in the assignment; never merge, never enable auto-merge. A controller reviews with `review-checklist.md`.

## 4. Page contracts

### Home `/`
Top bar: ICARUS wordmark with feather mark; nav Registry · Feed · How to read this; jump box; Telegram button; theme toggle. Hero: eyebrow "Robinhood Chain · 4663", title "Icarus: building the **Robinhood Registry**" (green span), tagline "Icarus researches and tracks what is new on Robinhood Chain and keeps you current here and on Telegram. Touch grass when it's quiet. Catch up fast when it's busy." Stat box: names on file, live on chain, launches today, volume 24h, chain-read time, refresh cadence. Category pills with counts.

**Right now** (three cards, only names above the share bar; hint states the bar):
- *Trending*: top 5 live names by 24h volume, with the change against the snapshot nearest 24 h earlier (omit the change when there is no earlier snapshot).
- *New launches*: first pool ≤ 14 days old, newest first, status pill + one-line what-it-is + age. Closing line states how many launches below the bar were not listed (sum of `launches_24h`).
- *Announced*: official surface confirmed, nothing on chain, has a summary; newest announcement first.

**By category**: one card per taxonomy section, its icon, the section's ranking basis ("by 24h volume"), the top 3–5 names with that number, "All N →" to the category page. Sections with zero names above the bar still render with their announced names in muted text.

**Latest from Icarus**: the newest 4 items across changelog entries and feed items, each with a when, a who pill (Icarus, or the account), a title, one paragraph, and link pills (name pages first, then external sources). "Full feed →" and "Get it on Telegram →".

Footer line: "Every number links to its source on the profile. Status is computed from on-chain data, never typed. Research, not advice."

### Category `/s/<section>`
Back link, title with count, section description from `schema/taxonomy.json`, stat box (live, dormant, launches today, volume 24h, "Rails these run on" from dependencies), filter pills All / Live / Announced / Watchlist, one ranked table with the section's KPI columns (`SECTION_KPIS`), a status column with the relative time, a Control column for scored projects, legend "Dash = not read, never zero · Announced = nothing located on chain yet". Rows link to the card.

### Card `/n/<slug>` (project and token variants)
Header: avatar (initials), name, symbol, Official badge, status pill with relative time, Control badge (projects with a score). Icon tags in this order — token: Launchpad (attribution), category leaf, pair asset, themes, first-pair date, liquidity venue; project: category leaf, mechanism, mainnet date, rails ("Graduates into" / "Runs on"), owner kind, audit. Daily / Weekly / Monthly segmented control.

Summary panel: `summary` with the first sentence bold, then official link pills (site, docs, X, Telegram, GitHub, DexScreener, Explorer).

Three columns: (1) **Official** rows (token, main contract, contracts read, audit) and **Structure** rows (ownership, timelock, upgradeable, fees, token owner — projects; ownership, liquidity, mint, top-10 hold — tokens). Rows are derived from pulled data and research fields; omit a row rather than guess. (2) Four metric tiles from `SECTION_KPIS`, the growth chart, a facts line with source links. (3) **What people are saying**: the newest 6 across feed items and Icarus changelog entries, each with a link; "All →" goes to `/feed?name=<slug>`.

Related table: peers in the same section cohort sorted by the section KPI, self highlighted, dots for Official / Unclaimed.

Tabs: **Commentary** (findings with the labels in rule 1 and superscript source numbers that jump to Sources), **Contracts** (deployment grid), **Sources**. No History tab, no separate Feed tab, no wallet column.

### Feed `/feed` and How to read this `/methodology`
Feed = "Latest from Icarus" in full, filters Icarus updates / Posts / On-chain, `?name=` filter. `/changelog` redirects to `/feed`. How to read this = the status words, the share bar, the control score and evidence percentage, Official, the dash rule, refresh cadence, how to get Telegram.

## 5. Data additions

Pulled (`content/pulled/<slug>.yaml`, PR 4): `market.top10_share`, `market.top10_share_ex_pools`, `market.launchpad {slug, via, address}`, `structure {mint, renounced, lp: [{pair, locked_share, holder_kind}]}`, `metrics.revenue_24h`; snapshot lines gain `revenue_24h` and `top10_share`; `content/pulled/series/<slug>.json` for daily backfills.

Project (`content/projects/<slug>.yaml`, PR 5): `themes` (≤ 5 lowercase tags), `summary` (≤ 80 words, mechanism first), `official_links` (existing), feed items compiled from packet `events` into `content/feed/<slug>.yaml`.

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
