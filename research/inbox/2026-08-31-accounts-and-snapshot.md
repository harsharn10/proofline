# Accounts ledger + Robinhood Chain snapshot

Date: 2026-08-31
Researcher: grok-4.6 (this session)
Status: **intake draft**. Nothing here is `verified` until reproduced on Blockscout / DefiLlama / official docs. Do not copy straight into `content/`.
Does not touch `content/` or Claude's `site` working tree.

Companion file: `2026-08-31-accounts.yaml` (proposed schema + rows).

---

## 1. Why the current list is not enough

`content/accounts.yaml` is 20 handles, all `tier: watch`, mixed together:

- Official **project** accounts (`@ponsdotfamily`, `@DenarMarkets`, `@longbowlend`, `@L4VAprotocol`, `@TheIndexFi`, `@bankrbot`)
- **KOLs** (`@AdamEShelton`, `@zackfromsubway`)
- **Culture / trench** posters
- **Data** (`@GeckoTerminal`)

That breaks the trending rule. Trending is supposed to mean *distinct CT accounts talking about a name*. If a project account is `top`, it can trend itself. Project posts belong in `kind: company` feed, not in the trending set.

Also a data bug: the seeded handle `@RHDaily_` is almost certainly wrong. The live Robinhood-Chain news account is **`@RHDaily__`** (two underscores, ~7.6k followers, bio: daily news on Robinhood, no affiliation). `@RHDaily_` / `@rhdaily_` is a Rainbow High fan account.

---

## 2. Proposed account model

Two axes. Keep them separate.

| Axis | Values | What it does |
|---|---|---|
| `role` | `project` · `alpha` · `kol` · `data` · `infra` · `media` | How to read the account |
| `weight` | `top` · `watch` · `downweight` · `blacklist` | How hard we listen |

Rules:

1. **Trending** counts only `role: alpha` or `role: kol` with `weight: top`. Never `project`. Never `data`. Never `blacklist`.
2. **Project** posts → `kind: company` (or `onchain` if they publish a CA / TVL figure we then check). They do not vote on trending.
3. **Alpha** = people who name mechanisms, contracts, or new native plays. Promote to `top` only after a call we later file as a census name or a real feed item.
4. **KOL** = reach. Capture as `claim`. Default `watch` or `downweight`. Numbers in KOL posts are never `verified`.
5. **Data** = DefiLlama / Dune / Gecko / Blockscout wrappers. Use as pointers, reproduce the number.
6. **Downweight** = still scrape, never count toward trending, tag the feed item so a human can ignore it.
7. **Blacklist** = skip entirely (impersonators, wrong-chain homonyms, spam).
8. Optional `slug:` links a project handle to a census slug. Optional `impersonates:` on blacklist rows.

Nobody starts `top` except accounts that have already produced a useful, citable mechanism call in this pass. That is currently: **none**. Promote later.

---

## 3. Curated lists (this pass)

Followers as of 2026-08-30/31 from X lookup. Not a quality score.

### 3.1 Project (official) — census + harvest

| Handle | Followers | Slug / name | Note |
|---|---:|---|---|
| `@ponsdotfamily` | — | pons | Live. DefiLlama lists Pons as RH-native launchpad. |
| `@MancerXYZ` | 6.8k | mancer | Official. Live on Robinhood in bio. |
| `@longdotxyz` | — | long | Official. $AI pairing / burns are claims. |
| `@uselongshot` | 108 | longshot | Official, tiny. |
| `@ArrowFinanceio` | 8.5k | arrow | Mainnet claimed 2026-08-31 09:30 ET after Sherlock. |
| `@DenarMarkets` | — | denar (candidate) | Claimed live lending; CA in a post. |
| `@longbowlend` | — | longbow (candidate) | Credit layer; Morpho + Pons. |
| `@TheIndexFi` | — | index | Official for The Index. |
| `@L4VAprotocol` | — | l4va (candidate) | RWA-backed launches. |
| `@EARNONHOOD` | — | earn-protocol (candidate) | Bio CA `0xa3b6…7ba3`. |
| `@fablesfi` | 3.0k | fables (candidate) | ve(3,3) Uniswap v4 hooks; $PROLOGUE CA in bio. |
| `@ClutchMarkets` | 25.4k | stonkbroker (related) | StonkBrokers lab; founder also `@OxSimpleFarmer`. |
| `@bankrbot` | — | bankr | Agent surface. |
| `@UseSqueeze_RH` | 4 | squeeze (candidate) | Brand-new; bio is a short-interest product, not a KOL. Treat as **project**, not CT. |

Watch for official handles we have **not** confirmed: Statics, Safehood, Vimen, Meridian, Artificial Inu, UP (`@uponrh` — not confirmed this pass), TickerYard, Sherwood, FoxPad, Noxa, Virtuals.

**Do not treat as the project:** `@ArrowFinanceHQ` (555 followers, CDP copy) and `@arrowfinances`. Flag as possible impersonators / alt accounts until the team says which is real. Main one by reach is `@ArrowFinanceio`.

### 3.2 Alpha — mechanism / field scouts

| Handle | Why | Weight |
|---|---|---|
| `@0xSammy` | 17-protocol RH list with exclusions matching our infra rule; 133k stock-token wallets figure (claim). | watch → candidate for top |
| `@ahboyash` | Named UP, Fables, NetNet, Clutch, Delta, LONG, Arrow as primitives. | watch |
| `@Adam_Tehc` | Dune “robinhood trenches”; volume, bot share, launchpad mcap. Data-adjacent alpha. | watch |
| `@OxSimpleFarmer` | Founder @ClutchMarkets; TickerYard $yBTC note. Mix of builder + alpha. | watch |
| `@that1618guy` | Delphi / markets; RH eco mcap comment. | watch |

### 3.3 KOL / trench (capture as claim)

| Handle | Weight | Why |
|---|---|---|
| `@RHDaily__` | watch | **Correct** RH news account. Replace `@RHDaily_`. |
| `@GG1nvestments` | watch | Already seeded. |
| `@AdamEShelton` | **downweight** | High reach; WIFI/memecoin CA posts. Useful for heat, bad for scoring. |
| `@zackfromsubway` `@notEezzy` `@DeGenWealth2` `@Cuba19_` `@ibweb3eth` `@monchhh0` `@DaoKingdom` `@Odinekachukwu1` `@MetalHead_rh` | watch | Seeded trench. Keep until we see a mechanism call. |
| `@theunipcs` | downweight | “Robinhood szn” reach, no mechanism. |

### 3.4 Data / infra / issuer

| Handle | Role | Weight |
|---|---|---|
| `@GeckoTerminal` | data | watch (pointers only) |
| `@RobinhoodCrypto` | infra / issuer | watch — company claims ($25B cum DEX, $1B TVL, $1.5B stock-token DEX). Reproduce. |
| `@RobinhoodApp` | infra | watch, sparse |
| `@Morpho` `@Uniswap` `@chainlink` `@Lighter_xyz` | infra | **dependency**, not profiles |
| `@virtuals_io` | infra / agent layer | watch — not every Virtuals agent is a census name |

### 3.5 Blacklist / skip this pass

| Handle | Reason |
|---|---|
| `@RHDaily_` / `@rhdaily_` | Wrong subject (Rainbow High), not Robinhood Chain. |
| `@arrowfinances` | Likely impersonator of Arrow. |
| `@Ponsbotfamily` | Homonym from chain-file scrape; official is `@ponsdotfamily`. |
| `@BrodieHasFun` | Culture meme (BRODIE) — PRD exclude. |
| `@DOGWIFH00D` / WIFI mega-eco CA posts as “the chain” | Pure meme unless a documented protocol appears. |
| Unnamed reply-farm / “gm RH” accounts | Skip until they publish a contract or a named mechanism. |

---

## 4. Robinhood Chain snapshot (2026-08-30/31)

All figures **claim** of the named source. Sources disagree. That disagreement *is* the baseline.

### 4.1 Chain-level

| Metric | Value | Source | Accessed |
|---|---|---|---|
| DeFi TVL | **$717.56m** (+2.36% 24h) | [DefiLlama chain](https://defillama.com/chain/robinhood-chain) | 2026-08-31 |
| TVL (same desk, earlier scrape) | $714.1m (+1.8% 24h, +20.3% 7d, +91% 30d) | [Pond Street Ledger](https://www.pondstreetledger.com/data) | ~2026-08-30 |
| Bridged TVL | $2.242b (native $732m / canonical $502m / third-party $1.007b) | DefiLlama | 2026-08-31 |
| 24h inflows | −$36.83m | DefiLlama | 2026-08-31 |
| Stablecoin mcap | **$774.76m** (+8.73% 7d); USDG dominance 57.64% | DefiLlama | 2026-08-31 |
| RWA active mcap | $150.25m | DefiLlama | 2026-08-31 |
| DEX volume 24h | **$1.324b** (Llama) / $1.40b (Pond Street) / $1.302b (Llama DEX page) | DefiLlama / Pond Street | 2026-08-31 |
| DEX volume 7d | $6.162b (+78.9% w/w) | DefiLlama | 2026-08-31 |
| DEX volume 30d | $16.207b | DefiLlama DEX rankings | 2026-08-31 |
| Perps 24h / 7d | $273.22m / $2.127b (−19% w/w) | DefiLlama | 2026-08-31 |
| Chain fees 24h | $1.07m (Llama “chain fees”) vs $12.1–14.3m “fees paid / app fees” | DefiLlama — **two different meters** | 2026-08-31 |
| Chain revenue 24h | $963,612 | DefiLlama | 2026-08-31 |
| App revenue / app fees 24h | $2.66m / $12.08m | DefiLlama | 2026-08-31 |
| Daily tx | 11.6m (+56.7% w/w), #1 of 27 on growthepie | [growthepie](https://www.growthepie.com/chains/robinhood) | 2026-08-30 |
| Daily active addresses | **388.2k** (+32.7% w/w) | growthepie | 2026-08-30 |
| Stock-token holders | **133k+** wallets (+6.5k/day) | `@0xSammy` 2026-08-27 — **claim, not Llama** | 2026-08-27 |
| Cum. DEX (issuer) | $25B | `@RobinhoodCrypto` 2026-08-25 — **claim** | 2026-08-25 |
| Cum. DEX (issuer, stock tokens) | $1.5B | `@RobinhoodCrypto` 2026-08-26 — **claim** | 2026-08-26 |
| Launchpad top-100 mcap | crossed $1B, +123% in 6 days | `@Adam_Tehc` 2026-08-30 — **claim** | 2026-08-30 |
| Bot-routed volume | $280m prior day; RH = 47% of all bot volume that day | `@Adam_Tehc` 2026-08-30 — **claim** | 2026-08-30 |

**Do not collapse these.** TVL ≠ stablecoin supply ≠ bridged TVL ≠ RWA mcap. DAA ≠ stock-token holders. Chain fees ≠ app fees. Issuer $25B cumulative ≠ Llama $16.2B 30-day (different windows and likely different venue sets).

### 4.2 TVL by protocol (DefiLlama, RH Chain slice)

| Protocol | Category | TVL on RH | Our treatment |
|---|---|---|---|
| Morpho Blue | Lending | **$487m** (~$484m on Morpho’s own page) | **dependency** (Robinhood Earn path) |
| Steakhouse Financial | Risk curator (on Morpho) | $474m | dependency / curator, not a native play |
| Uniswap | DEX | $134m | **dependency** |
| Lighter | Perps | $48m | **dependency** |
| Spark | — | $29m | likely infra / yield; not yet researched |
| Arcus | Spot / perps | $20m | **dependency** (dYdX team; official partner) |
| UNCX | Token locker | $9.9m | tooling |
| **up** | Native DEX | **$8.5m** (+74% 7d, +1,205% 1m) | **census candidate** |
| NOXA Fun | Launchpad | $5.4m | harvest list (foxpad-adjacent / launchpad) |
| Snuggle | Liquidity manager | $3.1m | watch |
| Meridian.xyz | — | $2.8m | **already on census** (`meridian`, lifecycle announced — Llama TVL means we should re-check lifecycle) |
| Ekubo | DEX | $2.4m | likely multi-chain; check native vs deploy |
| **Fables** | Native DEX | **$2.2m** (+105% 1d) | **census candidate** |
| RamsesX | DEX | $2.0m | watch |
| Sushi | DEX | $1.7m | dependency |
| **StonkBrokers** | Launchpad | $1.0m | **on census** |
| DexFi Aggregator | Yield agg | $0.95m | watch |
| T3tris / Alandale / GIGA / Gami / Accountable / token.select | various | <$0.8m | watch / later |

Llama says **177 protocols** on the chain; the table above is the TVL head. Pons does **not** show a meaningful TVL (launchpad / curve) but it **does** show volume and fees — do not use TVL to rank launchpads.

### 4.3 DEX volume 24h (DefiLlama DEX page + Pond Street)

Llama DEX ranking (Pons is **missing here**, categorized as launchpad):

| Venue | 24h vol |
|---|---|
| Uniswap (all versions) | **$1.109b** |
| Metric | $56.7m |
| up | $37.1m |
| RamsesX | $28.4m |
| GIGA | $24.1m |
| Fables | $11.9m |
| Alandale | $9.2m |
| Sushi | $6.9m |
| Orvex | $6.4m |
| Ekubo | $6.3m |
| Arcus | $3.0m |
| Deepstate | $0.64m |
| Lighter spot | $0.61m |
| Clutch Markets | $0.20m |
| Rialto | $0.11m |

Pond Street venue split (includes Pons): Uniswap V4 43.7% / V3 33.7% / **Pons V2 6.2% ($86.5m)** / Metric 4.0% / V2 3.0% / up 2.6%. That Pons 24h figure matches Llama’s Pons protocol page ($85.87m 24h DEX volume).

**~80%+ of spot volume is Uniswap.** Native venues (Pons, up, Fables, Clutch, Arcus) are the research field. Volume leadership ≠ native play.

### 4.4 Fees / revenue — native vs infra

| Protocol | 24h fees | 24h revenue | Source |
|---|---|---|---|
| **Pons** | **$4.70m** | **$868,850** | [Llama Pons](https://defillama.com/protocol/pons) |
| Uniswap (RH) | (in $5.4m fees / $307k rev on chain table — mixed versions) | | Llama chain table |
| up | $109,676 fees | $70,665 rev | Llama chain table |
| Morpho Blue (RH) | $45,774 fees | $0 protocol rev (Morpho takes none) | Llama Morpho |
| Arcus | $10,403 | $9,777 | Llama chain table |
| Lighter | $28,298 | $23,104 | Llama chain table |

Pons 30d: $25.89m fees, $5.06m revenue, $294.7m DEX volume, $224m token mcap (claim of Llama). Cumulative fees $45.4m, cumulative revenue $10.0m. **This is why Pons is the first full-depth file** — it is the busiest *native* fee machine, not the TVL leader.

Morpho is the TVL leader and a **dependency**. Steakhouse is a Morpho curator, not a native protocol.

### 4.5 NFT / cultural layer (Pond Street, tracked 12 collections)

StonkBrokers floor 7.3 ETH, **$78.5m** mcap, 647 holders. Chain Mancers $10.3m mcap, 961 holders. Rest is culture (Cash Cats, hood PFPs). Useful as *attention*, not as coverage subjects except StonkBrokers / Mancers.

---

## 5. Gaps (do not automate over these)

1. **Pons is absent from Llama’s DEX ranking page** and present on the protocol page. Any scraper that only hits `/dexs/chain/robinhood-chain` will undercount the main native venue.
2. **Wallets:** no single number. 388k DAA (growthepie) vs 133k stock-token holders (Sammy) vs Blockscout (page did not yield a usable total in this pass). Need Blockscout total accounts + a Stock Token holder query.
3. **Issuer vs Llama cumulative volume** ($25B vs $16B/30d) — different windows; do not reconcile by averaging.
4. **Chain fees $1m vs app fees $12m** — document both; never pick one as “the fee number.”
5. **Meridian** is `announced` on our census but Llama shows $2.8m TVL. Lifecycle is stale.
6. **Arrow** mainnet is dated 2026-08-31 09:30 ET — this snapshot is *before* that open. Next pass must check whether it actually went live.
7. **Official handles missing** for Statics, Safehood, Vimen, Artificial Inu, UP, TickerYard, Sherwood, FoxPad, Noxa, Meridian.
8. **Denar CA** `0x3786728a2c49c4617bf4fe5bd82b90b6b0df5508` and **EARN CA** `0xa3b6aee90017b72c0812dc1e013de70eb2917ba3` and **Fables CA** `0xb9972CA7188e511174947E3936a5315ac7073277` are tweets/bios. None checked on Blockscout this pass.
9. **@RHDaily_ typo** in `content/accounts.yaml`.
10. No per-protocol **wallet / DAU** breakdown except growthepie’s app tx leaders (Uniswap, OpenSea, Relay) — which is infra, not the native field.

---

## 6. What to do next (still baseline, not automation)

1. Human: accept or reject the role/weight model and the `@RHDaily__` correction.
2. Next research loop (this session or the next): Blockscout-check the three CAs; find official handles for UP / Statics / Safehood / Vimen; confirm Arrow live/not.
3. Only after Claude’s schema for `accounts.yaml` can carry `role` + `weight` should this file be folded into `content/`. Until then, scrape against **this** list, not the 20-row mix.
4. Keep the daily Grok automation paused-in-purpose: it can *notify* from this list, it should not write census files until the gaps above are smaller.
