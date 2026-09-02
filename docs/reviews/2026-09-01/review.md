# Proofline review and redesign plan — 2026-09-01

Scope: taxonomy, data model, ingestion and merge pipeline, agent instructions, site UI, and the plan
to get a clean version live tonight. Based on a full read of the repo, the live site at
proofline-892b.onrender.com, the eregion design system, Grok's 131-name taxonomy stress test (PR 25),
and three parallel audits (pipeline, data model, UI) whose full reports sit beside this file.

## 0. Verdict in five lines

1. The taxonomy tree in `docs/taxonomy.md` is right and Grok's 131-name stress test confirmed it. The bug is that a second, flat `category` enum still drives the project page and the rankings, and it contradicts the tree on 10 of 49 rows. Retire it.
2. The content system is over-designed for the data it holds: 46 of 49 research files are the untouched template, 1 of 49 projects has a verified deployment, half of all 308 "sources" point back at the repo's own inbox notes. The product today is 49 well-written one-paragraph summaries plus 243 honest "not checked yet" lines. Design for that.
3. The pipeline as designed has never run once. No packet has been filed, no dossier has been filed, no compiler exists. Every one of the 49 rows came from a one-shot importer. Grok's one real run under the new contract invented a fifth output format because the contract asks for three formats across 1,087 lines of required reading.
4. The site's visual tokens are already eregion's (same hex values). What is wrong is information architecture and copy, not the palette: boilerplate findings, a 15-chip link row, "reported" badges on every number, internal vocabulary shown to readers, and no way to browse by category beyond scrolling.
5. Tonight is achievable if we cut, not add: one taxonomy, one handoff format, one compiler contract, a de-slopped site. The heavy research work goes to Grok Heavy and Codex as PR-shaped assignments.

---

## 1. Taxonomy

### 1.1 What the market uses

| System | Shape | Notes |
|---|---|---|
| DefiLlama | one flat category per protocol, ~60 in use | Dexs 2086, Yield 671, Lending 636, Derivatives 441, Launchpad 254, CDP 231, DEX Aggregator 173, RWA 155, Prediction Market 120, Indexes 81, Options 70, Liquidity Manager 67, Telegram Bot 31, Trading App 29, Token Locker 18, Oracle 14 |
| Messari | Category > Sector > Sub-sector > Tags, 4 layers | DeFi sectors: Lending, DEX, Derivatives, Payments, Prediction Markets, Launchpad & Crowdfunding, RWA, Synthetic Assets, Asset Managers, Yield Services, Aggregator. Meme is its own category, sub-sectored by theme. AI: Agents, Agent Frameworks, DeFAI. Tools: Analytics, Trading Bots, DNS, Identity |
| CoinGecko | 867 flat tags mixing sector, ecosystem and narrative | Useful only as a vocabulary check: "Launchpad", "AI Agent Launchpad", "Meme", "Tokenized Stocks", "Telegram Bots" |

Proofline's tree (11 domains → 55 leaves → mechanism tags → editorial axes) has the Messari shape at
DefiLlama's granularity. That is the right choice for a single-chain research site.

### 1.2 What Grok's stress test showed (PR 25, 131 names)

Fit: exact 60, lossy 43, no-fit 15, ambiguous 13. Every "lossy" is a launchpad whose mechanism is
unknown (`launch/other-pad` holding pen) or a DEX whose native-vs-imported status is unknown. Every
"no-fit" is a media account or placeholder that should carry no product leaf at all. Zero missing
domains. Four new-leaf proposals were correctly put on hold because each rests on a single name.

### 1.3 The actual defect

The census stores two classifications per row. `tree.primary` (the taxonomy) drives the home page
sections. `category` (an 18-value flat enum from the PRD era) drives the project page eyebrow and the
cohort rankings. They disagree on ten rows:

| Slug | Flat category | Tree leaf |
|---|---|---|
| longshot | Fee-routing protocol | launch/stock-paired-factory |
| meridian | Prediction market | trading/perps-native |
| up, fables, swaphood | Fee-routing protocol | trading/amm-native |
| what-the-hook | Fee-routing protocol | trading/hook-mev |
| tickeryard | Oracle / infra | rwa-products/synthetic-asset |
| sherwood | Scanner / tooling | privacy/private-transfer |
| agent-name-service | Scanner / tooling | agents/agent-identity |
| website | NFT / treasury | rwa-products/ad-space |

"Fee-routing protocol" has become the bucket for native AMMs. "Scanner / tooling" holds a privacy
tool, a locker, a payments gateway and an agent registry. A reader sees "Trading venues" on the home
page and "Fee-routing protocol" on the project page for the same name, and the rank line says
"#1 of 6 fee-routing protocols by reported TVL" when the cohort is really three AMMs and a hook.

### 1.4 Decisions

1. **The tree is the only taxonomy.** Display label comes from the leaf (the table in `docs/taxonomy.md` §3). Cohort for ranks is the domain. The flat `category` field is derived from the leaf by a fixed map so the schema stays green tonight, and is removed from the schema in a later bump.
2. **Enumerate leaves in `schema/shared.schema.json`.** Today the leaf is a free slug after the domain prefix, so a typo validates.
3. **Add a visitor section "Tokens"** for `launch/graduation-token` and `rwa-products/stock-paired-token` rows with role graduation or observe, never scored. PRD §2.2 keeps memes out as research subjects, which is right, but a Robinhood Chain reader expects to find them listed, and Grok's inventory already holds 26 of them.
4. **Rename `trading/telegram-exec` to `trading/exec-frontend`**, label "Trading frontend / bot". DefiLlama files 244 protocols under Telegram Bot, Trading App and Interface; the current name is too narrow.
5. **`launch/other-pad` displays as "Launchpad · mechanism not classified"**, never as a bare category. Four census rows sit there today (noxa, foxpad, lemon, stonks-fun).
6. **Do not add**: liquid staking, restaking, gaming, DePIN, insurance, bridges-as-subjects, SocialFi. None has a second Robinhood Chain name. Keep the four held proposals held.
7. **Home sections become ten**: Launchpads, Tokens, Trading, Credit, Yield, RWA products, Agents, NFT treasuries, Markets, Tooling & privacy. Chain infrastructure stays dependency-only.

---

## 2. Data model: what is worth pulling

### 2.1 What exists and what is filled

| Field | Filled | Verdict |
|---|---|---|
| summary | 49/49 | The product today. Keep. |
| findings.missing | 49/49, 243 lines | High value. Honest "not checked" beats a fake score. |
| findings.risk | 33/49, 58 lines | High value. Lead with it. |
| findings.positive | 49/49, 174 lines | 81 are boilerplate "publishes an official site at …". Cut those. |
| deployments with real address | 26/49 | Highest-signal field, mostly placeholders (45 of 96 rows say `not-verified`). |
| deployments verified | 1/49 | Only pons. |
| metrics | 12/49, 21 rows | tvl, revenue, volume only. holders and market_cap never used. |
| scoring | 1/49 | Machinery is sound. Cannot rank anything yet. |
| research markdown | 3/49 real | The other 46 are the 60-word template. |
| feed items | 45/49, 120 items | All frozen at 2026-08-31, machine-generated from one intake. |
| trending | 0/49 | Inert: needs 3 top-tier accounts in 7 days and there are 4 top-tier accounts total. |
| sources | 308 entries, 144 URLs | 159 point at `research/inbox/**`. hash and archive_url null on all 308. |
| identity.aliases, conflict_ids | 0/49 | Collision machinery with nothing to collide. |
| qualifying tests | verified on 1/49 | Records an intention to test. |

### 2.2 The pull set (same for Grok, Claude, Codex, human)

**Card, 10 fields.** Name + symbol · leaf label · lifecycle · one-line summary · coverage state
(candidate / initial / full) · primary contract + verified flag · headline metric with as-of ·
holders · audit status (none-found / in-progress / published) · top open risk.

**Page, 25 fields.** Card plus: official links by kind · deployment table · owner address and type
(EOA / Safe / timelock) · Safe threshold and signers · timelock delay · proxy status · audit reports
(auditor, commit) · bounty · launch date and first block · 30-day volume and fees · main-pool
liquidity · top-10 holder share · dependencies with failure modes · quote and collateral assets ·
team named or anonymous · repository and last commit · incident history · missing-evidence checklist
· source ledger · last-checked date · changelog · feed · score/confidence/risk when full.

Every field marked "needs new source" in the data audit is one Blockscout or RPC call (`owner()`,
`getThreshold()`, `getOwners()`, EIP-1967 slots, token holder count, creation block) or one DefiLlama
protocol-slug call. Pons proves all of them can be produced. The cheapest large gain in the whole
product is a single `scripts/pull.mjs` that does those calls for every slug with an address and writes
`content/pulled/<slug>.yaml` (machine-owned, dated, never hand-edited). No agent should ever type a
number the script can fetch.

### 2.3 Schema additions (small)

- `project.token.address` as a first-class field (today it is a deployments row that is usually a placeholder).
- `project.audit { status, reports[] }`.
- `project.control { owner, owner_type, threshold, signers, timelock_seconds, upgradeable }` — machine-written from `pull.mjs`, with the RPC read recorded as the source.
- `project.launched_at`, `project.last_checked`.
- Drop `identity.aliases`, `conflict_ids`, `qualifying.*.verified` from the required set; they are empty on 49/49 and only generate warnings.

### 2.4 Duplication to remove

- `scripts/seed-data.mjs` holds a second copy of summary, dependencies and missing-evidence for all 49; it has already drifted on 4. Seed should read the packet, not a JS literal.
- `official_links` stored in census and project, not enforced equal, already diverged on 2.
- Research markdown restates findings and the source ledger by hand.
- 49 ledgers cite the same ecosystem-map artifact under 49 different S-ids with an identical excerpt.

---

## 3. Pipeline: flow, source of truth, merge

### 3.1 Flow as designed vs as run

Designed: name → dossier → collector packet → verifier packet → compiler → validate → score → site → changelog → channel review → Telegram. Sixteen hops.

Run: every one of 49 rows came through `scripts/intake/2026-08-31/*` (a one-shot importer, now quarantined but still imported by `seed-data.mjs` and `build-dependency-cards.mjs`) → hand edits → PR. `research/inbox/packets/` does not exist. `research/inbox/names/` holds only a README. No `supergrok/**` branch exists. The compiler is a role in prose with no script.

### 3.2 Source of truth today

| Data | Canonical | Competing copies |
|---|---|---|
| Identity | census `identity` | project name/symbol (enforced equal); Grok inventory holds 131 more |
| Category | census `category` (flat) | `tree` (not enforced); taxonomy.md leaf registry (no schema) |
| Deployments | project `deployments[]` | harvest-data.mjs literal; ecosystem-map.yaml |
| Sources | `content/sources/<slug>.yaml` | dependency cards carry their own |
| Accounts | `content/accounts.yaml` (167) | `account-desk.yaml` (132, "canonical" per grok-bot.md); `2026-08-31-accounts.yaml` ("retired" but still on main and still an input) |
| Feed | `content/feed/<slug>.yaml` | 17 stale drafts under inbox |
| Scores | derived.json only | clean |

### 3.3 Where writers collide

Source-id namespace (both desk and maintainer append `S<n>` to the same ledger; renumbered by hand twice), `changelog.yaml` (one file, every PR appends at the same place), `census.yaml` (one file), and the packet's `allowed_paths` vs the CI allowlist (a packet may declare `accounts.yaml`, CI flags it).

### 3.4 Merge / update

There is no update mechanism. The handoff doc's Task 1 is a hand-written seven-row `file:line | now | change to` table for one off-by-one address count across six files. `packet_tier: update` exists in the contract and has zero tooling. The only automated merge tool (`apply-harvest.mjs`) regenerates files wholesale and is guarded with `--overwrite`.

### 3.5 Decisions

1. **Field ownership becomes mechanical.** Three writer classes: machine (`content/pulled/`, `build/`), compiler (`content/census.yaml`, `content/projects/`, `content/sources/`, `content/research/`, `content/changelog.yaml`), collector (`research/inbox/packets/` only). Grok loses direct write access to `content/sources/` and `content/feed/`; it proposes them inside the packet and the compiler assigns ids. That ends the S-id collisions.
2. **One compiler script**, `scripts/compile-packet.mjs <packet>`: reads one packet, writes or updates the census row, project file, sources (append-only, ids assigned above current max, dedupe by normalized URL plus claim), feed items (stable ids = hash of source URL plus subject plus date), research narrative, and a changelog entry. Idempotent. Refuses fields outside the packet's role. Refuses to promote `lifecycle: mainnet` without an explorer or docs-address receipt. This is the single biggest missing piece and is Codex-shaped work.
3. **Stable ids everywhere**: feed items and source entries keyed by content hash, not position. Changelog entries carry `review_key` (the Telegram sender already prefers it and nothing writes it).
4. **Split the single files**: `content/changelog/<slug>.yaml` and census stays single but is only written by the compiler.
5. **Seed reads the packet**, not `seed-data.mjs`. Delete the quarantined imports from live scripts.

---

## 4. Agent instructions (the "skills")

### 4.1 What exists

| Doc | Lines | Role |
|---|---|---|
| docs/research-system.md | 216 | parent contract |
| docs/taxonomy.md | 221 | vocabulary |
| docs/integrations/grok-bot.md | 419 | Grok annex incl. REST recipe and paste prompt |
| docs/integrations/supergrok.md | 102 | verifier annex incl. paste prompt |
| docs/templates/research-packet-v1.md | 231 | 18-section markdown packet |
| docs/templates/name-intake.yaml | — | YAML dossier, schema-validated |
| docs/handoff/2026-09-01-open-work.md | 203 | seven live tasks the parent contract calls "historical" |
| .grok/skills/rh-field-ops, rh-account-desk, rh-field-round.rhai | 201 | Grok's actual runtime skills, on a separate branch, explicitly superseded but still the thing Grok runs |

Required reading before a Grok run: 1,087 lines, plus README (303) and PRD (456). Grok's ready-to-paste prompt says "keep using your old skills except for two things." The one real run produced a fifth format.

### 4.2 Contradictions found (fix tonight)

- Feed id example `pons-14` in grok-bot.md vs "positional ids are not stable" in research-system.md.
- Coverage vocabulary `candidate | seed | full` (docs) vs `full | stub` (schemas).
- Lifecycle `unknown` allowed in dossier and packet, rejected by census schema.
- The packet template fails its own validator: line 231 ships the whole enum as the value and the validator reads it as a collector claiming channel authority.
- `researcher: {const: "grok-bot"}` in the name-intake schema means SuperGrok, Codex, Claude and humans cannot file a dossier at all.
- Branch naming `grok/<YYYYMMDD>/<id>` vs `grok/<YYYY-MM-DD>`; both forms exist on origin.
- `automerge-feed.yml` classifies `grok/**` only; `supergrok/**` PRs get no comment.
- A changelog voice lint the handoff claims exists does not; 8 entries ship "the desk" to readers.
- `research/inbox/**` is on the CI allowlist and validated by nothing; `2026-08-31-ecosystem-map.yaml` fails to parse on main today while validate reports 0 errors.

### 4.3 Decisions

1. **One handoff artifact.** A packet is one file, `research/inbox/packets/<slug>/<work-id>.md`, whose YAML frontmatter is the machine-validated dossier (identity, classification, lifecycle, links, deployments, metrics, claims, conflicts, events, receipts) and whose markdown body is the narrative in the fixed sections. The frontmatter validates against a schema; the body validates by section. Retire `name-intake.yaml` as a separate format (its schema becomes the frontmatter schema). Tiers: seed (frontmatter only, body optional), full (both), update (frontmatter delta plus receipts).
2. **Three docs, not eight.** `research-system.md` becomes the one contract (≤ 250 lines: objects, ownership, roles, flow, evidence, conflicts, packet, branch, PR). `taxonomy.md` stays. `grok-bot.md` shrinks to ~80 lines: REST recipe, token scope, cadence, and the paste prompt. `supergrok.md` shrinks to the paste prompt. The handoff file becomes GitHub issues. The `.grok/` skill files move into this repo on main, rewritten to match, so Grok reads one place.
3. **Every producer gets the same paste prompt shape**: role, work id, base SHA, slug(s), tier, allowed paths, the three rules that matter (evidence class, mainnet bar, no conduct words), and "read research-system.md §5 for the packet". Under 40 lines.
4. **Producer identity in git.** Commits from a bot carry `Producer: grok-heavy` / `Producer: codex` trailers. Today all 139 commits share one local identity and nothing is distinguishable.

---

## 5. Site UI

(See ui-audit.md for the file-by-file inventory, 20 slop items with line numbers, and the eregion comparison.)

### 5.1 The governing fact

The site treats 49 names identically, and 48 of them are empty. Pons sits in the Launchpads table
looking exactly like ten stubs. For 48 of 49 clicks the promise "evidence-backed research" resolves
to a page that opens with "no score yet · research pending" and "No reported figures yet."

### 5.2 What is actually wrong

The palette, type and layout grid are already eregion-web's tokens (`#0e1113 / #16191d / #1b1f24`,
1180px wrap, mono for every datum, documented light-mode contrast). The visual system is coherent.
The slop is editorial and structural:

- 81 boilerplate findings ("publishes an official site at …") lead the Findings block on 44 of 49 pages, directly under a link row that already links the URL.
- Raw evidence notation shown to readers: `CLAIM · S1 S2`, bare `S1` in the ledger, never defined anywhere.
- Internal workflow shown to readers: a "Review record" grid with `approver: pending` and `methodology proofline-v1.0`, a `provisional` badge, "capped by override".
- The front door tells every visitor "Chain facts not yet reproduced" above the fold, and a "Corrections contact: pending" call to action with nothing to click appears twice per page.
- A five-box stat row counting the research system's own furniture (sourced claims, live feeds), none of it a link.
- One classification stated four ways on one screen: section label, leaf chip, peer-card "same niche · …", and the flat category.
- A `reported` badge that fires on any digit in a title (so "v2" gets flagged).
- Six terse italic empty states, none saying what the page does have.
- Two export menus 200px apart on every dossier; the tagline repeated as H1 and footer; a disclaimer field the site ignores.
- Data shipped and never rendered, including `coverage` on the home page, which is exactly the field the home page needs.

### 5.3 Decisions (from the eregion entities index and dossier grammar)

1. **Home is three blocks.** Masthead with one mono stat line where every number links ("49 names · 1 researched · 21 dependency cards · updated 2 Sep"). Then **Researched** first: full-coverage names as rows with a why-line, score and risk. Then the ten sections as **chip blocks**: heading, one-line description, a row of ticker+name chips with the summary as tooltip, a `<small>` metric when one exists, `.quiet` dashed treatment for names with nothing, `+ N more` behind `<details>` past ten. No feed on the home page. No filters, no sort. Keep the jump box.
2. **Project page splits by coverage.** Shared header: backlink, one classification word, symbol, name, lifecycle badge, risk badge only when scored, lead summary, official links as receipts, the reported-figure line only when there is one. **Full record**: the four tabs. **Stub**: no tabs, one column: one honest panel in a sentence ("No research record yet. On file: the links above, N deployments, N sources, and the open questions below."), deployments only if an address was located, feed if non-empty, sources, then open questions with `missing` and `unresolved` kept apart.
3. **Cuts**: Review record grid, provisional badge, override caption, trending-handle string, second export menu, duplicated feed count, every "N recorded" hint, the leaf chip, raw evidence-class labels (source ids become anchors into the ledger or go), dead payloads. Delete the 81 boilerplate findings from content.
4. **Four rules**: never render a section whose only content is an empty state; one honest panel per page that names what is present; section hints state provenance or promise, never a count; thin is visible, not hidden.
5. **Two dead strings fixed**: corrections destination (needs your email or a form URL) and the chain-checked sentence moves to `/methodology`.
6. **Feed page** stays. Replace the digit regex with an explicit field. Zero-count filter chips render disabled.
7. **Add** a `/methodology` glossary for as-of, reported vs verified, and source ids, in the eregion guide style.
8. Keep: tokens, theme toggle (add the `prefers-color-scheme` step), jump box, dependency cards, the research-section filter, the site contract allowlist, ranks that name their basis.

## 6. Plan

### Tonight (me, in this order)

1. Taxonomy on the site: leaf display labels, domain cohorts for ranks, ten sections incl. Tokens, `category` derived from leaf by a migration so validate stays green.
2. Site rebuild per §5.3: three-block home with chip sections, coverage-split project page, the cuts table, the four rules, glossary on /methodology. Delete the 81 boilerplate findings. Keep the tokens.
3. Pipeline quick fixes: packet template line 231; strict YAML parse of `research/inbox/**`; changelog voice lint with "desk" and "Grok" added; producer enum in the intake schema; `supergrok/**` in the CI gate; `review_key` written on changelog entries.
4. Docs: shrink `grok-bot.md` and `supergrok.md` to prompts plus recipes; fix the nine contradictions; move `.grok/` skills into main; convert the handoff file to issues.
5. Open the assignments below as PR stubs (branch + packet header + task file) so Grok Heavy and Codex can start.

### Grok Heavy (research, PR-shaped)

- G1: Full packets for the eight names with the most evidence already on file: mancer, statics-protocol, arrow, stonkbroker, index, vimen, up, fables. One packet each, tier full.
- G2: Verifier pass on pons (the one full record) against the new packet format.
- G3: Seed packets for the 13 round-22 candidates and the 14 p0/p1 net-new names from the inventory.
- G4: Weekly update packets for the 15 mainnet names (feed events + metric deltas), replacing the frozen 2026-08-31 feed.

### Codex (tooling, PR-shaped)

- C1: `scripts/compile-packet.mjs` per §3.5.2.
- C2: `scripts/pull.mjs` per §2.2 (Blockscout + RPC + DefiLlama) writing `content/pulled/<slug>.yaml`.
- C3: Packet frontmatter schema replacing name-intake; seed reads packets; delete the `seed-data.mjs` coupling.
- C4: Stable ids for feed and sources; per-slug changelog files; `review_key`.

### Later

- Drop the flat `category` from the schema.
- Trending redesign (the current rule can never fire).
- Source archiving (hash and archive_url are null on all 308).

---

## 7. Decisions needed from Harsharn

1. Tree-only taxonomy with the ten sections in §1.4.7, including a "Tokens" section. Yes / no.
2. One packet format (frontmatter dossier + markdown body), retiring the separate YAML dossier. Yes / no.
3. Grok loses direct write to `content/sources` and `content/feed`; everything goes through the compiler. Yes / no.
4. Project page structure per §5.2.2 (eregion dossier grammar). Yes / no.
5. Who compiles this week while `compile-packet.mjs` does not exist: me by hand from packets, or hold research PRs until C1 lands.
