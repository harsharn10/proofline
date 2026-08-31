# Evaluation — Grok field-desk intake, `research/ecosystem-baseline` @ `29054c8`

Evaluated checkout: `/Users/harsharnsingh/proofline-eval` (detached at `29054c8`, "Research round 19"). Branch tip has since moved one commit to `6921f00` (round 20); nothing below refers to it. Reference tree: `/Users/harsharnsingh/proofline-work` (`site-integration`, PRD/README/schema/census read-only). Evaluator changed nothing in either checkout; the only file written is this report.

Line references use `file:line` inside `research/inbox/` unless prefixed. "Desk" = `account-desk.yaml`; "map" = `2026-08-31-ecosystem-map.yaml`; "accounts.yaml" = `2026-08-31-accounts.yaml`.

## Summary

- **Merge as intake: yes, with four pre-conditions** (§6). Files stay under `research/inbox/`; no census row is created by the merge itself. This intake is by a wide margin the richest picture of chain 4663 the project has: 49 subjects (14 census + 35 new), 19 dependencies, 87 observe rows, 11 graduation examples, 132 scored accounts, and a collision discipline (Hookr ≠ HookOS ≠ WTH ≠ STORMM ≠ Delta ≠ MaxFi ≠ Arrows ≠ Arrow) that is applied consistently everywhere it matters.
- **Two of the three YAML ledgers do not parse.** The map fails at `map:80` (unquoted `note:` containing `: `) and carries a duplicate key at `map:79`; the desk fails at `account-desk.yaml:481` and `:866`. The content side already wrote a lenient reader (`proofline-work/scripts/build-accounts.mjs:23-31 readLoose`) to get around this. Fix at source.
- **Lifecycle is over-promoted.** 39 of 49 subjects are `mainnet`; 24 of those rest on `official-post` alone and 2 more on `official-post + docs`. Only 13 have Llama or explorer evidence. The map's own rule (`ecosystem-tree.md:125`, evidence flags are "OR, not AND") is what allows a project's tweet to make it `mainnet`; that rule contradicts PRD §2.3.
- **Addresses:** 39 addresses in the map, 5 checked on Blockscout (`x-fill-17.md`), 34 unchecked and carried with no per-address flag. Fills 15–17 label candidates correctly; fills 2–8 and 13–14 mostly do not.
- **Accusations / unsafe-to-publish:** 22 locations across 6 files (§3.4, §4.4), 11 of them `flags: [drainer]` / `flags: [impersonator]` labels in the desk that `build-accounts.mjs` mechanically turns into `tier: blacklist`. None has an authoritative finding; several are wrong on their own evidence (a "homonym" is flagged `impersonator`; a media account's typo of a handle makes that handle an `impersonator`).
- **Graduation (§5):** 11 of 49 subjects pass all four PRD §2.1 tests today on evidence beyond the project's own posts; 31 pass only on the project's own claims; 7 fail at least one test outright (`robinhood-index-vaults`, `virtuals`, `l4va`, `squeeze`, `agent-name-service`, `fox`, `robindex`). Note: the working tree at `proofline-work/content/census.yaml` already holds all 49 (with `fox` renamed `foxpad`) — see §5 footnote.
- **Workflow:** the `.rhai` never writes to `content/` or `site/` and never runs git. It also never commits — the orchestrator does that by prose rule, and `rh-field-ops/SKILL.md:37` still says "stash/ignore `site/`", which is the class of operation that produced `29b8da5`. Nothing mechanical prevents a repeat.

## 1 Inventory & provenance

### 1.1 Files at `29054c8`

| File | Bytes | What it is | Produced by |
|---|---:|---|---|
| `2026-08-31-ops.md` | 6,825 | Desk process: seats, round loop, account rubric (§4), follow list, machine card | Grok session; `ops.md:4` "this session runs it. Grok Bot is optional later" |
| `2026-08-31-ecosystem-tree.md` | 10,320 | Three-axis model (coverage_class / tree / lifecycle), category tree, flat-enum mapping, gaps | Grok session, first intake commit `58f0340` |
| `2026-08-31-ecosystem-map.yaml` | 32,182 | The ledger: 49 subjects, 19 dependencies, 87 observe, 11 graduation | Grok session; patched by each round's Compiler seat |
| `2026-08-31-accounts-and-snapshot.md` | 14,832 | Account model v1 (role/weight), curated lists, chain snapshot with sourced numbers, gaps | `:4` "Researcher: grok-4.6 (this session)" |
| `2026-08-31-accounts.yaml` | 17,617 | Proposed accounts ledger, role/weight schema, 145 rows | Grok session (v1 schema) |
| `account-desk.yaml` | 23,595 | Source-quality ledger, role/follow/listen/signal/reach/trust/engagement/conflict/flags/why, 132 rows | Grok session, `40ce2e8` onward (v2 schema, "wins" per `build-accounts.mjs:5`) |
| `2026-08-31-x-fill.md` … `x-fill-19.md` | 455 – 8,163 (19 files, 55,943 total) | One append-only note per scout round | Grok session with X tools (`x_keyword_search`, `x_user_search`, `x_thread_fetch` per `ops.md:28`) |
| `grok-2026-08-30/` | 8 files, ~381 KB | Older, separate intake: Grok App Builder export (xlsx, `build_rh_tokens.py`, chain-file md/json/csv, 2 PNGs) | SuperGrok App Builder, 2026-08-30 (`grok-2026-08-30/README.md:3`) — not evaluated here |
| `.grok/skills/rh-field-ops/SKILL.md` | 41 lines | Round procedure and hard rules | `40ce2e8` |
| `.grok/skills/rh-account-desk/SKILL.md` | 44 lines | Account-scoring procedure | `40ce2e8` |
| `.grok/workflows/rh-field-round.rhai` | 116 lines | Four read-only specialist agents + compiler → scratch `hunt.md` | `40ce2e8` |

### 1.2 How it was produced

- 19 research commits between 2026-08-30 23:39:11 and 2026-08-31 00:36:10 (−0500), i.e. 57 minutes, median gap 1–2 minutes. Not a 15-minute scheduler; an interactive Grok session looping ("Do not recap. Next scout query starts in the same turn", `ops.md:48`). All 19 commits are authored `Harsharn Singh <harsharnsingh@Harsharns-MacBook-Pro.local>` — desk commits are indistinguishable from the human's.
- Seats (`ops.md:26-37`): Scout (parent, X tools) → four read-only children (Chain/Llama, Account desk, Collision, Auditor) → Compiler (writes fill, patches YAML, one commit, push). Children "never checkout `site`", "never write `content/`" — prose.
- Fill timestamps switch time zone mid-series: fills 6–11 are stamped UTC (`x-fill-6.md:1` "~04:50 UTC"), fills 13–19 CDT (`x-fill-13.md:1` "~00:11 CDT"); fills 1–5 and 12 have no clock time. Commit times confirm both are correct (e.g. round 7 `c013a84` 23:55:50 −0500 = 04:55 UTC).
- Every fill says "Not `content/`" and most say "No blacklist" / "No scores" — the desk is explicit that it is intake.

### 1.3 Does the workflow write to `content/`, `site/`, or run `git checkout`?

**No.** In `rh-field-round.rhai`: the gap, desk, collision and compiler agents run `capability_mode: "read-only"` (`:69, :71-72, :101`); the Llama agent runs `"execute"` (`:70`) for `curl`, with "Do not write files" in its prompt (`:49`). The only write is `write_scratch_file("hunt.md", …)` (`:115`). There is no `git` call anywhere in the file, and no path under `content/` or `site/` is referenced. It hardcodes `/Users/harsharnsingh/proofline-research/research/inbox/` (`:37, :53`), so it only reads the research worktree.

**But it does not prevent a repeat of `29b8da5`**, because the workflow never commits — the human/orchestrator does (`rh-field-ops/SKILL.md:26` "One commit. `git push origin research/ecosystem-baseline`"). The guards are prose only:

- `rh-field-ops/SKILL.md:37` "Git: stash/ignore `site/`. Worktree only." — `git stash` in a checkout another agent is using is exactly how someone else's uncommitted `site/` work gets swept into (or out of) a commit.
- `rh-field-ops/SKILL.md:14` "If the main checkout is on `site`, do not use it." — relies on the operator checking.
- `x-fill-7.md:3` "main checkout keeps getting stolen onto `site`" and `ops.md:19` "Claude stole `site`" record two agents contending for one checkout's HEAD until the `~/proofline-research` worktree was adopted.

`29b8da5` is on `remotes/origin/site` only (not on the research branch); its stat shows the round-4 fill plus 23 `site/` files (−5,710 / +1,209 lines), i.e. another agent's in-progress `site/` refactor committed under a "Research round 4" message. `ce5ceb6` (30 seconds later) is the clean re-do on the research branch. The worktree separation makes this less likely; nothing makes it impossible (no pre-commit path guard, no branch check, `git stash` still recommended).

## 2 Ecosystem map

Parsed from a copy of the map with every `note:` quoted (the original does not parse; see 2.1).

### 2.1 The file is not valid YAML

- `map:80` — `note:` value contains `hook overlay: LP earns` → PyYAML "mapping values are not allowed here"; the project's own `yaml@2` parser fails the same way in lenient mode ("Nested mappings are not allowed in compact mappings"). Same defect at `map:334` and `map:377`.
- `map:78-79` — the `stonkbroker` subject has two `llama:` keys. `yaml@2` strict: "Map keys must be unique at line 79".
- `map:531`, `map:542`, `map:556` — `{ name: popi, HoodPump, Mixpad, … }`: bare names in a flow mapping parse as keys with null values, silently turning ten names into garbage keys. `map:556` in particular lists `Quotrons`, `Robindex`, `MaxFi` as "builders named on X, not on Llama" — all three are also `subjects:`.
- `accounts.yaml` parses cleanly under both parsers.

### 2.2 Counts

| Section | Count | Notes |
|---|---:|---|
| `subjects` | 49 | 14 census + 35 new. All 14 census slugs present; no duplicate slugs. |
| `dependencies` | 19 | Uniswap, Morpho, Steakhouse, Lighter, Arcus, Spark, Chainlink, USDG/Paxos, LayerZero, Symbiosis, Alchemy, OpenSea, Sushi, Pancake, Curve, UNCX, Kyber, Rialto, Stock Tokens issuer. Correct per PRD §2.2. |
| `observe` | 87 entries in 8 groups | native_amms 7 · credit 6 · other_pads 21 · yield_games 10 · markets 2 · privacy 1 · telegram_exec 2 · builders_named_on_x_not_on_llama 38. Three entries are the malformed multi-name rows above, so the real name count is higher (~110). |
| `graduation.examples_today` | 11 | Plus a written rule (`map:593`). Good. |
| Handles in map | 143 | All match `^@[A-Za-z0-9_]{1,15}$`. |
| Addresses | 39 (all unique) | 27 inside `subjects[].cas`, 7 in graduation, 5 in observe; 2 more truncated (`0x663492…`, `0x85d4e6…`). |

New subject slugs (35): up, fables, denar, longbow, noxa, virtuals, netnet, tickeryard, earn-protocol, l4va, delta, snuggle, sherwood, squeeze, agent-name-service, hookr, what-the-hook, quotrons, pools-trade, wire, maxfi, sight, mesh, fox, scopl, website, lemon, robindex, vynex, sinjoh, hoodlock, arrows, hoodfun, stonks-fun, swaphood.

### 2.3 Lifecycle vs `live_evidence`

Lifecycle: mainnet 39 · beta 2 (mancer, statics-protocol) · announced 4 (arrow, squeeze, sight, hoodfun) · unknown 3 (safehood, l4va, agent-name-service) · testnet-only 1.

- **`mainnet` on `official-post` only — 24:** artificial-inu, longshot, long, bankr, denar, longbow, netnet, tickeryard, earn-protocol, what-the-hook, pools-trade, wire, maxfi, mesh, fox, scopl, website, lemon, robindex, vynex, sinjoh, hoodlock, arrows, stonks-fun.
- **`mainnet` on `official-post + docs` only — 2:** hookr, quotrons (docs list contract addresses; none explorer-checked).
- **`mainnet` with Llama or explorer evidence — 13:** pons, stonkbroker, index, meridian, vimen, up, fables, noxa, virtuals, delta, snuggle, sherwood, swaphood.

The desk's own rule licenses this: `ecosystem-tree.md:125` "Live evidence flags (OR, not AND)". PRD §2.3 defines `mainnet` as "production contracts, users can interact now" — a project saying so is a `claim`, not a lifecycle. `lifecycle: mainnet` with `live_evidence: [official-post]` should be read as "claims mainnet". The desk was careful in the harder cases (Arrow kept `announced` through seven rounds despite a dated launch, `x-fill-12.md:27`, `x-fill-13.md:7`, `x-fill-16.md:25`; Mancer and Statics demoted to `beta` against the census, `x-fill.md:87-91`, `x-fill-3.md:44-46`); it was not careful in the 24 easy ones.

Also: `netnet` is `mainnet` with `llama: { tvl: 0 }` and "Claims $7.5m treasury" (`map:215-216`); `website` claims ETH volume since 11 Aug with nothing checkable (`map:385`).

### 2.4 Are DefiLlama figures used consistently?

Mostly, with dated chain-slice figures and honest disagreement notes — but not reconciled across files:

- Protocol-row count: `map:16` "133" · `accounts-and-snapshot.md:175` "177 protocols" · `x-fill-7.md:46` "77 protocol rows" (DEX overview). Three meters, three files, no single note saying which is which.
- Morpho Blue RH slice: `map:474` 414,785,143 vs `accounts-and-snapshot.md:156` "$487m (~$484m)". 15% apart under the same `as_of: 2026-08-31`.
- StonkBrokers TVL: `map:78` 25,599,049 vs `accounts-and-snapshot.md:171` $1.0m; `map:80` acknowledges "child/parent split. Confirm." — unresolved.
- Pons: `map:35` vol 86,499,622 · `x-fill-7.md:42` $86.5M · `accounts-and-snapshot.md:199` $85.87m — consistent. `x-fill-7.md:42` correctly marks the earlier "Pons missing from DEX ranking" stale, but `ecosystem-tree.md:160` and `accounts-and-snapshot.md:179, 226` still say it is missing.
- What The Hook: the subject row (`map:297-303`) has no `llama:` block; the same handle in `observe.native_amms` (`map:502`) has `llama_tvl: 1933892`. The subject is under-evidenced by the map's own data.
- Delta: `map:249` `tvl: 16201` explicitly flagged stale vs the $1m official claim (`map:250`). Good.
- Chain DEX 24h: `x-fill-7.md:46` $1.403B; `accounts-and-snapshot.md:135` $1.324b / $1.40b / $1.302b with sources — the snapshot's "Sources disagree. That disagreement *is* the baseline" (`:123`) and "Do not collapse these" (`:150`) is exactly the right posture and the best-written part of the intake.
- Fees/revenue figures under `llama:` come from the revenue page, not `api.llama.fi/protocols` as `map:11` states; no per-figure timestamp.

### 2.5 Handle collisions

Kept apart everywhere checked, with explicit "Not X" notes: Hookr `@Hookrfun` (`map:285-295`) vs HookOS `@hookosfun` (observe `map:577`) vs WTH `@whatthehookv4` (`map:297-303`); STORMM as a StonkBrokers product, not a slug (`map:80, :575`); Delta (`map:242-250`) vs MaxFi (`map:336-342`) vs Snuggle; Arrows `@arrowsonhood` (`map:433-440`) vs Arrow `@ArrowFinanceio` (`map:90-101`) vs ArrowPad (`map:100, :528`); Safehood protocol `@_safehood` vs `$SAFEHOOD` `@safehoodonrh` (`map:139, :600`); Robin_Pad vs RobinPAD_MEME vs OddyseyAI (`map:557-558`); Canopy vs `@Canopy_Finance` (`map:582`); Sight vs Meridian Predict (`map:350`); FOMO venue vs `$FOMO` vs clan.tech (`map:560-562, :605`). The machine card (`ops.md:100-118`) is reprinted in fills 6, 8, 14. This is the intake's strongest quality.

### 2.6 Duplicates and near-duplicates

- Subject also in observe: `what-the-hook`/`@whatthehookv4` (`map:502`), `maxfi`, `quotrons`, `robindex` (`map:556`), `@pools_dot_fun` (`map:554`), `@stonksdotfun` (`map:559`, self-acknowledged). Stale rows from before promotion.
- `safehood` (subject) vs `SAFEHOOD` (graduation, `map:600`) — same name, deliberately kept, but the graduation row should carry `not: safehood` machine-readably rather than in prose.
- `HOOD10` in observe (`map:556`) and graduation (`map:602`).
- `pools-trade` has two candidate official handles (`@pools_dot_fun` in map; `@TradePools` in `accounts.yaml:442-446`), unresolved since round 4.
- Two tree leaves used in the map are not drawn in the tree: `rwa-products/ad-space` (website) and `tooling/machine-payments` (mesh).

### 2.7 Mis-filed subjects

- **Pure meme / culture token as subject:** `fox` (`map:361-368`) — the desk's own note says "Culture token; FoxPad is a related pad. Split before filing." FoxPad (the pad) sits in observe with `handle: null` (`map:555`). PRD §2.2 excludes this.
- **Imported layer as subject:** `virtuals` (`map:200-207`) — multi-chain agent launch layer; by the desk's own rule 4 (`ecosystem-tree.md:122`, native = built for this chain) and PRD §2.2 spirit, this is a dependency/observe. Its Llama revenue on RH is real; that does not make it native.
- **Against the desk's own rule 8** (`ecosystem-tree.md:126`, leaves not in the census enum "stay as `observe` until the schema enum is extended"): netnet (reserve-currency), tickeryard (synthetic-asset), agent-name-service (agent-identity), virtuals (agent-launch-layer), sherwood (privacy), mesh (machine-payments), website (ad-space) are all filed as `subjects`. Seven internal contradictions.
- **Thin subjects:** `squeeze` ("4 followers, brand-new", announced, `map:275`), `l4va` (lifecycle unknown, no mechanism text), `agent-name-service` (unknown), `robindex` (a scanner + Telegram bot; no user-fund story).
- No Robinhood-issued Stock Token is filed as a subject; the issuer is correctly a dependency (`map:491`). No day-one infra from the PRD list is a subject.

### 2.8 Addresses

39 addresses; 5 checked on Blockscout in `x-fill-17.md:5-13` (PONS, HOOD, SwapHood V3 factory, aUSD, ARROW). The other 34 are carried under `cas:`/`ca:` with no per-address status. `cas:` keys in use: `ausd, h33_docs, hook, launchpad, pad_not_cdp, router, token, token_candidate, v2_factory_docs, v3_factory` — status is encoded ad hoc in the key name (`token_candidate`, `h33_docs`) rather than as a field. Terminology hazard: `map:101` "aUSD … source-unverified; ARROW … source-verified" uses Blockscout's *contract-source* verification, which a reader of this project will confuse with the evidence class `verified`.

## 3 Fill rounds

All 19 fills read; seven sampled in depth below (1, 6, 7, 10, 12, 15, 17). Aggregate: 53 addresses across the fills, 38 on a line that also names a source or status word (bio / docs / official / candidate / claim / BSC / wrong); **0 post ids or `x.com/…/status/` URLs in any fill** although `rh-field-ops/SKILL.md:35` requires "Cite post id + handle + time". Only two URLs appear in 19 files (`x-fill-14.md:22` agen.space, `x-fill-16.md:13` safehood.fun).

### 3.1 Sampled rounds

**Round 1 — `x-fill.md`.** Machine table (`:12-20`) attributes each machine to a handle; the Mancer audit is dated 2026-08-25; the CA row is headed "CA (claim)" (`:19`) and the Quotrons block says "claim until explorer-checked" (`:34`) and "Core CA (docs)" (`:41`). Good. Weak spots: the trench "#1 players" post (`:53`) is "(claim)" with no handle; DexScreener volume is "24h-ish" (`:49`); Hookr "Some third-party posts said the X account was compromised" (`:74`) names no third party.

**Round 6 — `x-fill-6.md`.** Best-attributed long round: dated official posts (29 Aug, 25 Aug, 23/31 Jul, 3 Aug), 35 handles, 10 addresses of which 7 carry a source word ("in official bio", "third-party CA", "Base"). Bare addresses: SAFEHOOD `:15`, HFUN `:27`, PONGO `:37`, FOMO `:53`, Ponscade `:64` — the round's own "Still open" (`:91`) lists them for Blockscout, so the author knew.

**Round 7 — `x-fill-7.md`.** STORMM attributed to `@ClutchMarkets` 29 Aug (364k views) and the founder (`:7`); "Announced Sep, not live" stated three times; the BSC `$CETS` CA carries `chainId 56` (`:36`); Llama snapshot dated with row-level figures (`:44-66`); "Metric V1 $57.3m (imported?)" flags its own uncertainty. Exemplary.

**Round 10 — `x-fill-10.md`.** `:5-7` names four handles posting a "holder portal" at `cryptolot.lol` and headlines them as "look like drainers"; it also declares `0xaA40…` "not SCOPL's RH CA". Round 12 reversed the address call (`x-fill-12.md:5-9`: the CA is the official token; "Stop calling the CA fake") but hardened the conduct call ("posts were drainers wrapping the official CA"). The inventory half (`:9-38`) is well split into imported / native-ish / graduations, all with handles.

**Round 12 — `x-fill-12.md`.** Correction round; competition figures "as of 29 Aug" (`:11`); DexScreener pool id; desk patches enumerated (`:29-35`), including the `$CETS` removal. `:31` "30 new scored rows appended" contradicts the desk header `account-desk.yaml:3` "first seed from fills 1–11", never updated.

**Round 15 — `x-fill-15.md`.** The model for address hygiene: workflow-supplied factory addresses are "cas.candidate until Blockscout 4663. Not filed as live-evidence" (`:11`); `$HOOD` is "official X 12 Jul" (`:15`); gitbook addresses are "docs, not Blockscout" (`:17`); Arrow CAs "candidate only" (`:23`).

**Round 17 — `x-fill-17.md`.** Six addresses checked with a table (on 4663 yes/no, holders, Blockscout source-verification), with the right caveat "Token on explorer ≠ product live" (`:15`). Correctly kills the `0x07f5b682…` address as not a contract on 4663 (`:12`). Note the desk had asserted for five rounds that this address "is `$JIMOTHY`" on Ethereum (`x-fill-6.md:43`, `-10.md:7`, `-12.md:19`, `-13.md:42`, `-14.md:12`) — that was never verified either.

### 3.2 Does any fill promote a social claim to fact?

In the fill bodies, rarely — the hedges ("claimed", "official says", "trench") are present in nearly every paragraph. Promotion happens in three places instead:

1. The map's `lifecycle: mainnet` on `official-post` (24 subjects, §2.3).
2. Commit titles strip the hedges: `1bdd07d` "Delta official $1m TVL", `c013a84` "Pons $4B", `789b55f` "SCOPL official @scopl_live" — each body says claim.
3. Round 12 states as fact that the cryptolot posts "were drainers" (`x-fill-12.md:9`) and the map repeats it (`map:377` "cryptolot wrapping the token CA is still a drainer") — no evidence beyond an unknown domain and copypasta was ever recorded, and the address those posts carried turned out to be the official one.

### 3.3 Self-corrections and whether later rounds fixed them

| Issue | Introduced | Corrected | Residue at `29054c8` |
|---|---|---|---|
| BSC `$CETS` treated as an RH stock-payout meme | `x-fill-2.md:82`, `x-fill-3.md:38-40` | `x-fill-7.md:34-36` (chainId 56 CA), `x-fill-12.md:35` removed from graduation, `x-fill-18.md:25-27` | Fixed; no `CETS` left in the map; `@layerggofficial` flagged `wrong-chain` (`account-desk.yaml:396`) |
| SCOPL address `0xaA40…` called not-SCOPL / drainer-wrapped | `x-fill-10.md:7` | `x-fill-12.md:5-9`, `x-fill-15.md:27`, `x-fill-16.md:15-21` | Address fixed (`map:376`); the four posters keep `flags: [drainer]` (§4.4) |
| `0x07f5b682…` as Pons | `@KarmaWallet_Eco`, `@longbowlend` posts | `x-fill-13.md:40-42`, `x-fill-14.md:12`, `x-fill-17.md:12` | Fixed (`map:36`) |
| "Pons missing from Llama DEX ranking" | `accounts-and-snapshot.md:179, 226`, `ecosystem-tree.md:160` | `x-fill-7.md:42` | Stale text remains in both earlier files |
| Mancer / Statics census `mainnet` | census | `x-fill.md:87-91`, `x-fill-2.md:42`, `x-fill-3.md:44-46` | Map has `beta` for both |
| Meridian census `announced` vs Llama TVL | census | `map:116`, `accounts-and-snapshot.md:230` | Map has `mainnet` on `llama-tvl` — reasonable |
| Blacklist of people (`@BrodieHasFun` "PRD exclude") | `accounts-and-snapshot.md:108-117` | Retracted `ecosystem-tree.md:9`; `accounts.yaml:216-219` "Not a skip" | Retracted — but the desk re-introduces harder conduct labels (§4.4) |
| `@Canopy_Finance` wrong handle | `x-fill-13.md:46` | `x-fill-14.md:20-22` | Fixed, but the typo handle is then flagged `impersonator` (`account-desk.yaml:802`) |
| Safehood / Odyssey handles null | rounds 3–14 | `x-fill-16.md:5-13`, `x-fill-15.md:5-9` | Fixed; `ops.md:111` machine card still says "SCOPL … handle" pre-patch wording in places |

### 3.4 Accusations and unsafe-to-publish lines (fills, map, snapshot, skills)

Every line here is about a person, account, team or domain and would need an authoritative finding, an attributed source, or rewording before any of it can enter `content/`. Desk-file lines are listed in §4.4; the two lists together are the 22 locations counted in the Summary.

| # | Location | Text | Problem |
|---|---|---|---|
| 1 | `x-fill-10.md:5-7` | "claim links look like drainers" + four named handles | Conduct accusation (phishing) about four accounts on the evidence of an unknown domain and copypasta; hedged in the heading, not in the naming |
| 2 | `x-fill-12.md:9` | "posts were drainers wrapping the official CA" | Same accusation, unhedged, after the address they posted proved official |
| 3 | `x-fill-12.md:31` | "drainers skip-ingest" | Labels the people |
| 4 | `map:377` | "cryptolot wrapping the token CA is still a drainer" | Unhedged statement about a domain; no evidence recorded (no fetch, no report, no screenshot) |
| 5 | `accounts-and-snapshot.md:113` | "`@arrowfinances` — Likely impersonator of Arrow" | Hedged but placed in a "Blacklist" table; evidence is name similarity |
| 6 | `accounts-and-snapshot.md:114` | "`@BrodieHasFun` — Culture meme (BRODIE) — PRD exclude" | Blacklists a person for content type; retracted at `ecosystem-tree.md:9` but still in the file |
| 7 | `.grok/skills/rh-account-desk/SKILL.md:33` | "skip-ingest impersonators (`@ArrowFinanceHQ` vs `@ArrowFinanceio`)" | The *process file* hardcodes a named account as the impersonator example, so every future round inherits the accusation |
| 8 | `x-fill-5.md:15` | "X counter-claim (Chinese, 31 Aug): unaudited, stock vault has not produced actual income yet" (Vynex) | Unattributed (no handle, no URL); PRD §7.3 forbids "unaudited" phrasing without established absence |
| 9 | `x-fill.md:74` | Hookr "Some third-party posts said the X account was compromised" | Sensitive claim about a project account's security, attributed to nobody |
| 10 | `x-fill.md:57` | "wash pairs exist; Dune geggonen shows fake $4b USDG-XP/VB/KV/GR with 1–5 traders" | Wash-trading verdict on four named tickers; attributed to a dashboard, "fake" is a conclusion |
| 11 | `x-fill-6.md:33` (+ `account-desk.yaml:587-591`) | "`@QUOTRONGenesis` looks noisy (typos)" → `role: farm`, `flags: [farm]` | Typos alone become a "farm" classification |

Personal data: low risk. One real-name/handle association, "Founder Dakota `@DSB_117` (also `@brainblast_ai`)" (`x-fill-6.md:19`), links two handles and a first name to one person with no source cited. "Product of Mavrk, Inc." (`x-fill.md:32`) is corporate. Follower counts are not personal data. No emails, phones, or wallets tied to named individuals.

Voice: `bag`, `ape`, `degen`, `szn`, `send it` appear throughout the fills and desk (`x-fill-5.md:33` "ape list", `x-fill-6.md:35` "bags", `account-desk.yaml:481`). Fine for intake; `voice.mjs` would reject them in `content/`. `build-accounts.mjs:37-50 OVERRIDES` already rewrites twelve desk `why` lines for this reason.

## 4 Accounts

### 4.1 Counts and schema drift

| | `2026-08-31-accounts.yaml` | `account-desk.yaml` |
|---|---:|---:|
| Rows / unique handles | 145 / 139 | 132 / 129 |
| Duplicate handles | `@rallypadfun` ×3, `@OxSimpleFarmer`, `@fox_onrh`, `@andrewtalksdefi`, `@lemondotfun` ×2 | `@rallypadfun`, `@MCGlive`, `@flapdotsh` ×2 |
| Fields | handle, role, weight, slug, note | handle, role, follow, listen, signal, reach, trust, engagement, conflict, flags, why |
| `role` enum | project 89 · alpha 18 · kol 20 · data 4 · infra 12 · media 2 | project 72 · builder 10 · media 6 · alpha 5 · infra 12 · data 5 · kol 17 · **farm 5** |
| Weighting | `weight`: watch 143 · downweight 2 · top 0 · blacklist 0 | `listen`: high 47 · medium 36 · low 35 · mute-trend 3 · skip-ingest 11 |
| `slug` link | 34 rows | none (field absent) |
| Axes filled | n/a | trust 46/132 · signal 99/132 · reach 26/132 · engagement 15/132 · conflict 83/132 |
| Parses | yes | **no** (`:481`, `:866`) |

Drift against the content schema (`proofline-work/schema/accounts.schema.json`): the schema's `role` enum is `project|alpha|kol|data|infra|media`; the desk's `builder` and `farm` are not in it. `build-accounts.mjs:34` maps `builder → project`, `farm → kol` — so five accounts flagged as reply farms become `role: kol` (trending-eligible role) and are only kept out by `tier: blacklist`. The desk's `listen`, `signal`, `reach`, `trust`, `engagement`, `conflict`, `flags`, `why` have no home in the content schema; only `tier` survives.

### 4.2 Same handle, different answer

114 handles are in both ledgers; 25 only in `accounts.yaml` (mostly official project handles with `slug:` — `@EARNONHOOD`, `@L4VAprotocol`, `@MeshGateway`, `@NetNetCap`, `@TickerYardHQ`, `@UseSqueeze_RH`, `@vimenprotocol`, …); 15 only in the desk (the four cryptolot posters, `@sleuth_ai`, `@brainblast_ai`, `@Lighter_xyz`, …). Neither file is complete.

Role disagreements (accounts.yaml → desk): `@OxSimpleFarmer`, `@NodarJ`, `@cruelhandeth`, `@gornx0x`, `@booj1e`, `@hooftly`, `@DSB_117`, `@iam0x00`, `@nikshepsvn` all `alpha → builder`; `@RHDaily__`, `@RHDaily_`, `@MCGlive` `kol → media`. The desk is right in every case (founders must not be trending-eligible; the desk says so at `account-desk.yaml:75, :178`), which means `accounts.yaml` is wrong in 12 rows and should not be a fallback source for `role`.

Weight/listen disagreements: `@ArrowFinanceHQ`, `@arrowfinances`, `@Ponsbotfamily`, `@Canopy_Finance`, `@RHDaily_`, `@RobinPAD_MEME` are `weight: watch` ("keep both", "human picks the canonical" — `accounts.yaml:195-214`) but `listen: skip-ingest` in the desk. Same author, same night, opposite call; the desk's is the one the build script uses.

### 4.3 Trending rule

Rule text agrees across `ops.md:72`, `rh-account-desk/SKILL.md:25`, `account-desk.yaml:7`, `accounts.yaml:8`: role ∈ {alpha, kol} AND top listen. Applied consistently in the desk: exactly four rows qualify — `@0xSammy`, `@Adam_Tehc`, `@ahboyash`, `@andrewtalksdefi` — and the four are the only `tier: top` rows in the working-tree `content/accounts.yaml`. Nine `listen: high` rows are correctly excluded by role (four builders, three media, two infra).

Inconsistency between the two ledgers on *promotion*: `accounts-and-snapshot.md:47` "Nobody starts `top` … That is currently: **none**" and `:42` "Promote to top only after a call we later file as a census name or a real feed item"; the desk promotes the four on the same evidence the snapshot deemed insufficient ("Native-play list with infra excluded", `account-desk.yaml:367` vs `accounts.yaml:103`). No promotion event is recorded.

### 4.4 `skip-ingest` / blacklist rows — justified or judgment?

| Handle | Desk line | Flag | Evidence in `why` | Verdict |
|---|---|---|---|---|
| `@RHDaily_` | 558-563 | ca-collision | Seeded typo; live account is `@RHDaily__`; other lookup is a Rainbow High account | **Justified** (operational) |
| `@RobinPAD_MEME` | 712-717 | ca-collision | Same display name, different pad | **Justified** (collision, not conduct) |
| `@ArrowFinanceHQ` | 565-570 | **impersonator** | "555 followers, CDP copy. … until the team says otherwise" | **Unsupported** — the `why` concedes it could be the team's own account; `accounts.yaml:206-209` says "Could be alt … Keep both" |
| `@arrowfinances` | 572-577 | **impersonator** | "Same collision class." | **Unsupported** — no evidence at all |
| `@Ponsbotfamily` | 579-584 | **impersonator** | "Homonym." | **Unsupported** — a homonym is not impersonation |
| `@Canopy_Finance` | 798-803 | **impersonator** | "HoodInsider typo." | **Unsupported** — a media account mistyping a handle says nothing about whoever holds that handle (or whether it exists) |
| `@QUOTRONGenesis` | 586-591 | farm | "Typo-filled mint account." | **Weak** — typos are not engagement farming |
| `@annisapt_` | 1038-1047 | **drainer**, copypasta | "SCOPL 'holder portal' at cryptolot.lol. Not official." | **Unsupported as 'drainer'**; justified as `skip-ingest` for an unofficial link. The CA in those posts was the official one (`x-fill-12.md:9`) |
| `@My_Stomachfat` | 1049-1058 | **drainer**, copypasta | "Same … copypasta." | Same |
| `@fomokidpump_gew` | 1060-1069 | **drainer**, copypasta | Same | Same |
| `@VoidlexETH_ias` | 1071-1080 | **drainer**, copypasta | Same | Same |

Other conduct judgments in non-skip rows: `account-desk.yaml:140` `@hookosfun` `flags: [self-trend]` with no evidence in `why`; `:490-491` `@DaoKingdom` `engagement: farm`, "Typical paid-adjacent CT" (insinuates undisclosed paid promotion, `conflict` not even set to `paid`); `:658` `@Noxa_Fi` "Early Noxa dark-site history — trust 2" (unexplained insinuation about a project); `:471` `@AdamEShelton` `conflict: bag` asserted without evidence.

Mechanical consequence: `build-accounts.mjs:53` turns `impersonator` or `drainer` flags into `tier: blacklist`, so these labels are already the reason 11 rows in the working-tree `content/accounts.yaml` are blacklisted. The tier itself is a neutral operational state (README defines it); the *flag names* and `why` text are the accusations, and `OVERRIDES` (`build-accounts.mjs:37-50`) had to rewrite four of them into "the desk flagged it as … a phishing risk" — evidence that the source wording is not publishable.

Praise: the axis separation (`ops.md:57-70`, "Do not collapse into one 'good person' number"), `trust` defaulting to 1 and left unset in 86 rows rather than guessed, and "Builders … can still be `follow: true` and `listen: high` for mechanism. Their TVL/mcap claims stay unverified" (`ops.md:80`) are all correct instincts and better than the flat 20-row list the project had.

## 5 Graduation readiness

PRD §2.1 tests: **T1** deployed on (or officially launching on) chain 4663 · **T2** native play (not a Stock Token, not day-one infra, not a pure meme) · **T3** citable official site/account/contract · **T4** user-fund / routing / launch / control-plane story.

Legend: ✓ passes on evidence beyond the project's own posts (explorer, Llama chain-slice, docs with addresses, third-party audit) · ◐ passes only on the project's own claim (would enter the census with `verified: false`) · ✗ fails or unknown.

| slug | T1 chain | T2 native | T3 citable | T4 story | What's missing |
|---|:-:|:-:|:-:|:-:|---|
| pons | ✓ | ✓ | ✓ | ✓ | Curve/factory addresses (only token CA on explorer) |
| mancer | ◐ | ✓ | ✓ | ✓ | Any contract address; public access — `beta` |
| artificial-inu | ◐ | ✓ | ✓ | ✓ | $AI token and vault CAs; explorer check |
| longshot | ◐ | ✓ | ✓ | ◐ | The desk added nothing beyond a handle (`map:56-62`); mechanism text only in PRD |
| long | ◐ | ✓ | ✓ | ✓ | Factory / Airlock CAs |
| stonkbroker | ✓ | ✓ | ✓ | ✓ | NFT / Anvil CAs; parent 25.6m vs pad 1.05m TVL reconciliation |
| index | ✓ | ✓ | ✓ | ✓ | Contract address |
| arrow | ✓ | ✓ | ✓ | ✓ | CDP contracts; confirm open after 09:30 ET; stays `announced` (ARROW/aUSD tokens do exist on 4663, `x-fill-17.md:9-10`) |
| bankr | ◐ | ◐ | ✓ | ✓ | Factory CA on 4663; native-ness rests on PRD seed acceptance |
| meridian | ✓ | ✓ | ✓ | ✓ | CAs; census lifecycle `announced` → `mainnet` decision |
| statics-protocol | ◐ | ✓ | ✓ | ✓ | Explorer check of bio CA; DEX and credit not live — `beta` |
| safehood | ◐ | ✓ | ✓ | ✓ | Factory CA; no activity since 16 Jul — `inactive` is a live possibility |
| robinhood-index-vaults | ✗ | ✓ | ✓ | ✓ | No mainnet deployment (testnet-only) |
| vimen | ✓ | ✓ | ✓ | ✓ | CAs |
| up | ✓ | ✓ | ✓ | ✓ | CAs; `accounts-and-snapshot.md:74` says the handle was "not confirmed this pass" |
| fables | ✓ | ✓ | ✓ | ✓ | Bio CA `0xb997…` unverified |
| denar | ◐ | ✓ | ✓ | ✓ | Explorer check of official CA; market contract CAs |
| longbow | ◐ | ✓ | ✓ | ✓ | Vault CAs / Morpho market ids; their own post used a wrong Pons CA (`x-fill-14.md:12`) |
| noxa | ✓ | ◐ | ✓ | ◐ | Native-ness; mechanism unclassified ("other-pad", no note) |
| virtuals | ✓ | ✗ | ✓ | ✓ | Imported multi-chain layer → dependency/observe |
| netnet | ◐ | ✓ | ✓ | ✓ | CA; treasury address; $7.5m claim; enum gap |
| tickeryard | ◐ | ◐ | ✓ | ✓ | CA; mint/redeem/custody mechanism (bridge wrapper vs native); enum gap |
| earn-protocol | ◐ | ✓ | ✓ | ✓ | Explorer check of bio CA; vault CAs |
| l4va | ✗ | ◐ | ✓ | ✗ | Lifecycle unknown; no mechanism recorded anywhere |
| delta | ✓ | ✓ | ✓ | ✓ | Explorer check of CA; 16k Llama vs $1m claim |
| snuggle | ✓ | ◐ | ✓ | ✓ | Native-ness (no official post captured); CAs |
| sherwood | ✓ | ◐ | ◐ | ✓ | Handle never confirmed in a fill; mechanism (kekov lists it under perps); enum gap |
| squeeze | ✗ | ✓ | ◐ | ✗ | Nothing deployed; 4-follower handle; a tape/scanner has no fund/routing/launch story |
| agent-name-service | ✗ | ✓ | ✓ | ◐ | No deployment evidence; thin registry story; enum gap |
| hookr | ◐ | ✓ | ✓ | ✓ | Explorer check of 3 docs CAs; resolve the account-compromise claim |
| what-the-hook | ✓ | ✓ | ✓ | ✓ | CA; copy the Llama row (`map:502`) onto the subject; dedupe |
| quotrons | ◐ | ✓ | ✓ | ✓ | Explorer check of 3 docs CAs; V2 collection address; QuotronsDesktop relationship |
| pools-trade | ◐ | ◐ | ✓ | ✓ | Canonical handle (`@pools_dot_fun` vs `@TradePools`); CAs; Uniswap Labs product — native or imported call |
| wire | ◐ | ✓ | ✓ | ✓ | Explorer check of token CA; bot custody story |
| maxfi | ◐ | ✓ | ✓ | ✓ | Any CA; $8m TVL / $128k-day claims |
| sight | ◐ | ✓ | ✓ | ✓ | Nothing deployed; Genesis NFT 2 Sep ("officially launching") |
| mesh | ◐ | ✓ | ✓ | ✓ | Explorer check of CA; leaf not in tree |
| fox | ◐ | ✗ | ✓ | ✗ | Culture token; the pad (FoxPad) has no handle and belongs in observe |
| scopl | ◐ | ✓ | ✓ | ✓ | Explorer check; nine V2 contract addresses; V1-live vs V2-pending lifecycle |
| website | ◐ | ✓ | ✓ | ◐ | CA; leaf/enum gap; payout claims uncheckable |
| lemon | ◐ | ✓ | ✓ | ✓ | Any on-chain evidence; CA |
| robindex | ◐ | ✓ | ✓ | ✗ | A scanner + Telegram bot: no user-fund, routing, launch or control-plane story |
| vynex | ◐ | ✓ | ✓ | ✓ | Explorer check of CA; Morpho market id; source or removal of the "unaudited" line |
| sinjoh | ◐ | ✓ | ✓ | ✓ | Explorer check of bio CA; router contract |
| hoodlock | ◐ | ✓ | ✓ | ✓ | Explorer check of bio CA; locker contract; "3M locked" claim |
| arrows | ◐ | ✓ | ✓ | ✓ | Explorer check of CA; vault CA |
| hoodfun | ◐ | ✓ | ✓ | ✓ | Any live mint; `announced` since 31 Jul |
| stonks-fun | ◐ | ✓ | ✓ | ✓ | CA; Llama row |
| swaphood | ✓ | ✓ | ✓ | ✓ | h33 / V2 factory (gitbook) unverified |

**Totals:** pass all four on evidence (all ✓): **11** — pons, stonkbroker, index, arrow, meridian, vimen, up, fables, delta, what-the-hook, swaphood. Pass all four only on the project's own claims (✓/◐, no ✗): **31**. Fail at least one test outright: **7** — robinhood-index-vaults (T1), virtuals (T2), l4va (T1, T4), squeeze (T1, T4), agent-name-service (T1), fox (T2, T4), robindex (T4).

Footnote for the lead: `proofline-work/content/census.yaml` (working tree, uncommitted; HEAD still has 14) already contains 49 rows — every map subject, with `fox` renamed `foxpad`. PRD §2.1 says "Add names only when they meet the four tests." Seven rows in that working tree do not, on the desk's own evidence, and 31 more would carry `value: true, verified: false` on all four tests. That is the other agent's decision to make, but it should be made knowingly.

## 6 Recommendation

### 6.1 Merge `29054c8` as intake?

**Yes** — as `research/inbox/` files only, nothing promoted to a census row by the merge, and with four pre-conditions applied either before the merge or as the first commit after it:

1. **Make the ledgers parse.** Quote `map:80, :334, :377`; remove the duplicate `llama:` at `map:78`; expand the three bare-name flow maps at `map:531, :542, :556` into proper entries or a `names: [...]` list; quote `account-desk.yaml:481, :866`. Then delete `readLoose` from `build-accounts.mjs` so a broken ledger fails loudly. (Wrong, not merely unverified.)
2. **Re-label the 11 conduct flags and 4 insinuations in the desk** (§4.4) before `build-accounts.mjs` runs again: `impersonator` → `handle-collision` or `unconfirmed-official`; `drainer` → `third-party-link` (with the domain as evidence); `farm` on `@QUOTRONGenesis` → `unconfirmed-official`; delete or evidence `self-trend` (`:140`), "paid-adjacent" (`:491`), "dark-site history" (`:658`), `conflict: bag` (`:471`). Reword `x-fill-12.md:9` and `map:377` to "linked a third-party 'holder portal' domain that is not the project's; unsafe to click; not evidence" and either attribute or strike `x-fill-5.md:15` ("unaudited") and `x-fill.md:74` (account compromise). Remove the named example from `rh-account-desk/SKILL.md:33`. (Unsafe to publish; none of it is verified.)
3. **Tag every address.** Add a status to all 34 unchecked addresses (or a `cas_status:` block) so `verified` never has to be inferred from a key name; rename the Blockscout "source verified" wording to `explorer_source_verified` so it cannot be confused with the evidence class.
4. **Do not let the merge touch `content/`.** The map's `lifecycle: mainnet` on `official-post` (24 subjects) and the 7 failing subjects must not flow into `census.yaml` without a human decision per row; the working tree in `proofline-work` shows this has already partly happened.

Optional but cheap: fix the stale "Pons missing from Llama DEX ranking" text (`ecosystem-tree.md:160`, `accounts-and-snapshot.md:179, 226`); dedupe the six subject/observe overlaps (§2.6) and the eight duplicate account rows (§4.1); move the WTH Llama figure onto its subject row.

### 6.2 What must be excluded or redacted

- The 22 locations in §3.4 and §4.4 (reworded, not deleted — the operational signal "do not ingest this link" is worth keeping; the conduct verdict is not).
- `accounts-and-snapshot.md:108-117` "Blacklist" table — already retracted at `ecosystem-tree.md:9`; mark it retracted in place.
- Addresses presented without status (§2.8) — not deletion, tagging.
- No personal data requires redaction; consider sourcing or dropping the first-name association at `x-fill-6.md:19`.

### 6.3 Workflow and skill fixes (for the desk, in priority order)

1. **PR-only, path-guarded contribution.** Desk commits go to `grok/<date>` (or stay on `research/ecosystem-baseline`) and reach any branch others build from only by PR. Add a pre-commit check the Compiler seat must run: abort if `git diff --cached --name-only` contains anything outside `research/inbox/` and `.grok/`. Replace `rh-field-ops/SKILL.md:37` ("Git: stash/ignore `site/`") with "never `git stash`, never `git checkout <branch>`, never commit from a checkout whose `git status` shows paths outside `research/inbox/`; stop and ask." Commit with a distinct author or a `Desk: grok` trailer so desk commits are distinguishable from the human's.
2. **Ledgers must validate before commit.** A `schema/research-inbox/{map,desk}.schema.json` (or at minimum `yaml` strict parse) run by the Compiler; free text always quoted; unique keys; no bare-name lists; `note`/`why` limited to one line. This one check would have caught every defect in §2.1.
3. **Every address is a record, not a string:** `{ address, chain, source: bio|docs|audit|explorer|third-party, seen: <date>, exists_on_4663: true|false|null, explorer_source_verified: true|false|null }`. Default `null` everywhere; only `x-fill-17`-style checks flip it. The Collision/Auditor seat already fails closed on chains (`rh-field-ops/SKILL.md:25`); extend the same rule to existence.
4. **Conduct-neutral flags plus mandatory evidence.** Replace `impersonator | drainer | farm | self-trend` with `handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision`, and require `evidence: <post id/URL + date>` on any `skip-ingest` or `mute-trend` row. Enforce `SKILL.md:35` "Cite post id + handle + time" — zero post ids in 19 fills today; the Compiler should reject a fill whose claims lack `handle + date + post id/URL`.
5. **One ledger, one changelog.** Retire `2026-08-31-accounts.yaml` (its `role` is wrong in 12 rows the desk later fixed) or regenerate it as a view; add `slug:` to the desk; keep `account-desk.yaml` `meta.as_of`/coverage current (`:3` still says "fills 1–11"). Add `research/inbox/CHANGELOG.md` with one line per round — files touched, rows added/changed, corrections issued — so that commit titles no longer carry unhedged claims ("Delta official $1m TVL") as the only summary.

## Appendix: checks run

All read-only. No git state changed; no file written except this report and two patched *copies* of the YAML in the session scratchpad.

- `git log`/`git show`/`git branch --contains`/`git worktree list` on `/Users/harsharnsingh/proofline-eval`: 23 commits on the branch, 19 research rounds with timestamps; `29b8da5` located on `remotes/origin/site` only with its 24-file stat; `ce5ceb6` confirmed as the clean re-do; tip drift to `6921f00`.
- `git log --name-status cfb6b78..29054c8` filtered for `content/`, `site/`: only `d0038cf` (pre-desk site adoption) touches `site/`; no desk round touches `content/` or `site/`.
- Full read of all 25 desk files, both `SKILL.md`, the `.rhai`, `grok-2026-08-30/README.md`; PRD §2 and §7; README; design spec §5; `schema/{census,accounts,shared}.schema.json`; `content/census.yaml` (HEAD = 14 rows vs working tree = 49 rows) and `content/accounts.yaml` (HEAD = 20 rows vs working tree = 156 rows, built by `scripts/build-accounts.mjs`).
- YAML parse of the three ledgers with PyYAML 6.0.3 (`safe_load`) and the project's `yaml@2` (`parse`, strict and lenient): map fails both, desk fails both, accounts.yaml passes both. Duplicate-key detection via a `SafeLoader` subclass on quoted copies.
- Script `checks.py` (scratchpad) over the patched copies: section counts, census overlap, lifecycle × live_evidence, address counts, tree-leaf coverage vs `ecosystem-tree.md`, handle regex, cross-section duplicates, accounts/desk row counts, duplicates, enum usage, trending eligibility, skip-ingest rows, cross-ledger role/weight disagreements, per-fill address/handle/URL/date counts, sensitive-vocabulary scan (49 hits reviewed by hand; 22 retained as accusation/unsafe).
- `grep` for `x.com/`, `/status/`, `post id` across all fills: 0 hits. `grep` for stale "Pons is missing" text: `ecosystem-tree.md:160`. `grep -i cets` in the map: 0 hits (removal confirmed).
- No network calls: DefiLlama and Blockscout figures were checked for internal consistency across files, not re-fetched.
