# Taxonomy proposals — WORK-20260901-grok-name-taxonomy

Producer: grok-bot  
Base: `7c06f090370e40734ed0efa7c0fe3ffd9e8e7826`  
Observed: 2026-09-01T22:45:00Z  
Companion: `name-inventory.yaml`

This is a collector proposal. It does not rewrite census rows. Controller review is required before any leaf is published.

## 1. Executive summary

The v1 leaf registry is already the right *shape*: entity kind, domain, leaf, mechanism, role, and lifecycle are separate axes. The problems are mapping, not the axis list.

1. **`launch/other-pad` is a junk drawer.** 20+ Llama launchpads plus Rallypad, Ctrl Fi, v4.fun, Hooded.Meme, and RobinPad all fall here. They do not share a mechanism (bonding curve vs Uni-pool vs livestream attention vs creator-keep). The leaf cannot be a distinguishing test.
2. **Wallet-mirror baskets have no leaf.** MosaicETF (pending) pastes a wallet, freezes holdings, charges a creator fee, and claims redeemability. That is not `tax-distributor`, not `redeemable-basket` (Statics/Vimen), and not `index-vault`.
3. **Execution frontends are treated like venues.** GMGN is the largest Llama *revenue* line on the chain and is a wrapper. Telegram/exec bots (Maestro, Banana Gun, Moby) need a role=`observe` mapping that does not compete with native AMMs.
4. **Social graphs have no leaf.** clan.tech is friendtech-on-RH. Forcing it into launchpad or tooling/scanner is lossy.
5. **Imported forks with RH TVL look native.** RamsesX, Ekubo/STONX, Pancake, Sushi, Spark, IPOR Fusion, D2 Finance, and Gami Labs show RH Llama TVL. Census already has `trading/amm-imported` and `credit/morpho-curator`; those leaves are underused. Several observe AMMs (GIGA, Alandale, Orvex) are *ambiguous* native vs imported.
6. **Brand collisions are filed as one slug or the wrong slug.** Arrow Finance CDP vs ArrowPad.fun; census Safehood vs Pons-graduated SAFEHOOD token; FoxPad vs FOX mascot; @Robin_Pad vs @RobinPAD_MEME; Arc Liquidity vs Arcus perps; pools.trade vs pools.fun.
7. **Flat `category` is still stretched.** TickerYard (`rwa-products/synthetic-asset`) is stored as `Oracle / infra`. notawebsite (`rwa-products/ad-space`) is stored as `NFT / treasury`. Bankr is `Agent / execution` while also running a stock-paired factory. The tree is honest; the enum is not.

Highest-impact moves: add two leaves (wallet-mirror basket, livestream/attention pad), stop using `other-pad` as a home, map imported TVL to imported leaves, keep pad-output tokens on `launch/graduation-token` until they have an independent control plane, and **map pad-coins to pad + official stock quote + cohort rank** so NVDA-paired tickers are not interchangeable (TAX-GROK-009). Put (4,4) flywheel DEXes under trading/DEX, not as a peer of Launchpad.

## 2. Coverage matrix

Fit is against the *current* v1 registry. Proposal IDs apply only where the current leaf is lossy, missing, or ambiguous.

Pending (census-candidates, not yet canonical):

| Slug | Current best leaf | Fit | Proposals |
| --- | --- | --- | --- |
| hedge | nft-treasury/token-bound-nft | exact | — |
| arc | credit/isolated-money-market | exact | — |
| scalar | yield/allocator | exact | — |
| bricks | yield/fee-router | lossy | TAX-GROK-002 |
| floor | rwa-products/tax-distributor | lossy | TAX-GROK-001 |
| sluice | yield/savings-vault | exact | — |
| twofold | yield/lp-manager | exact | TAX-GROK-006 |
| v4fun | launch/hook-programmable | lossy | TAX-GROK-002 |
| hooded-meme | launch/other-pad | lossy | TAX-GROK-002 |
| canopy | launch/uni-pool-launch | lossy | TAX-GROK-002 |
| mosaicetf | *(none)* | no-fit | TAX-GROK-001 |
| rallypad | launch/other-pad | lossy | TAX-GROK-002 |
| robinpad | launch/other-pad | lossy | TAX-GROK-002, TAX-GROK-007 |

Net-new / observe (selected; full set is in the inventory):

| Slug | Current best leaf | Fit | Proposals |
| --- | --- | --- | --- |
| giga | trading/amm-native | exact | TAX-GROK-008 |
| ramsesx | trading/amm-imported | lossy | TAX-GROK-008 |
| alandale | trading/amm-native | ambiguous | TAX-GROK-008 |
| orvex | trading/amm-native | ambiguous | TAX-GROK-008 |
| ekubo | trading/amm-imported | exact | TAX-GROK-008 |
| native-credit-pool | credit/isolated-money-market | exact | — |
| accountable | credit/uncollateralized | exact | — |
| gami-labs | credit/morpho-curator | exact | — |
| termmax | credit/lending-primitive | lossy | TAX-GROK-008 |
| token-select, sentry, coinbarrel, and other Llama pads | launch/other-pad | lossy | TAX-GROK-002 |
| arrowpad-fun | launch/other-pad | lossy | TAX-GROK-002, TAX-GROK-007 |
| slvr, stockrip | yield/gamified-mining | exact | — |
| t3tris, dexfi, fusion-ipor, d2-finance | yield/allocator | lossy | TAX-GROK-008 |
| hoodbets, wambo | markets/prediction | exact | — |
| privacy-cash | privacy/private-transfer | exact | — |
| gmgn, maestro, banana-gun, moby | trading/telegram-exec | exact | TAX-GROK-003 |
| clan-tech | *(none)* | no-fit | TAX-GROK-004 |
| ctrl-fi | launch/other-pad | lossy | TAX-GROK-002 |
| hookos | launch/hook-programmable | lossy | TAX-GROK-007 |
| gluehook | trading/hook-mev | lossy | TAX-GROK-006 |
| hood-index | rwa-products/index-vault | exact | TAX-GROK-007 |
| morpho, uniswap, lighter, chainlink, usdg, stock-tokens | matching infra leaves | exact | — |
| arcus | trading/perps-imported | lossy | TAX-GROK-007 |
| spark | chain-infra/stablecoin | lossy | TAX-GROK-008 |
| stormm | trading/hook-mev | exact | TAX-GROK-007 (same plane as stonkbroker) |
| pools-fun | launch/uni-pool-launch | ambiguous | TAX-GROK-007 |
| taysom, sbc, cq, piggy, pongo, hfun, fomo-token | launch/graduation-token | exact | — |
| hood-insider, atlas, rstocks, hood-city | *(none)* | no-fit | TAX-GROK-005 |

## 3. Proposal cards

### TAX-GROK-001

```
Proposal ID: TAX-GROK-001
Change type: new-leaf
Proposed key and display label: rwa-products/wallet-mirror-basket · Wallet-mirror basket
Parent domain: rwa-products
Definition: A product that copies an existing wallet or portfolio into a basket token, with a documented redemption or unwind path to the underlying assets, and without being the official Stock Token issuer.
Includes: MosaicETF-style paste-an-address / freeze-holdings / redeem-to-real-tokens products.
Excludes: Official Stock Tokens (stock-token-issuer). Fee-tax distributors that buy stocks from swap fees without a redeemable basket (The Index). Actively managed index vaults with their own composition rules (Robinhood Index Vaults, Hood Index). Stock-paired memes with no redemption (Artificial Inu).
Distinguishing test: Can a holder redeem the basket into the copied underlyings under published rules, and is composition derived from an external wallet/portfolio rather than a curator list?
Motivating candidate slugs: mosaicetf
Affected canonical slugs: none directly; statics-protocol and vimen stay redeemable-basket (curated, not wallet-mirrored); index stays tax-distributor; robinhood-index-vaults stays index-vault
Current fallback mapping: mosaicetf currently forced into RWA baskets / no leaf
Migration impact: one pending row. No census rewrite.
Conflicts or alternatives considered: stretching redeemable-basket (fails the composition test); stretching index-vault (fails the wallet-mirror test).
Receipt IDs: R-CAND, R-MAP
Confidence: medium
```

### TAX-GROK-002

```
Proposal ID: TAX-GROK-002
Change type: split
Proposed key and display label:
  keep launch/bonding-curve, launch/uni-pool-launch, launch/hook-programmable, launch/nft-gated-launch, launch/stock-paired-factory
  add launch/livestream-pad · Livestream / attention launchpad
  add launch/creator-pad · Creator-keep launchpad
  restrict launch/other-pad to unclassified pads with a documented RH presence and no demonstrated mechanism
Parent domain: launch
Definition: Split the junk drawer by demonstrated launch mechanism. livestream-pad: launch coinciding with a livestream or attention-fee split (Rallypad). creator-pad: creator retains a published majority of supply/fees with locked LP (Ctrl Fi). other-pad becomes a holding pen, not a home.
Includes: Rallypad (livestream/attention); Ctrl Fi (creator-keep); remaining Llama pads stay other-pad until mechanism is shown.
Excludes: Pons (bonding-curve); Hookr (hook-programmable); pools.trade / Safehood (uni-pool-launch); StonkBrokers (nft-gated); LONG / Bankr factories (stock-paired-factory).
Distinguishing test: What happens at launch, in the contracts or in a primary doc: curve, v4 pool, hook composition, NFT gate, stock pair, livestream/attention split, or creator-keep? If unknown, other-pad + observe.
Motivating candidate slugs: rallypad, ctrl-fi, token-select, v4fun, hooded-meme, robinpad, canopy, arrowpad-fun
Affected canonical slugs: foxpad, lemon, noxa, stonks-fun, hoodfun (review whether bonding-curve vs other-pad still holds)
Current fallback mapping: all of the above → launch/other-pad or a nearby launch leaf
Migration impact: no census rewrite in this PR. Later compiler pass re-homes foxpad/lemon/noxa/stonks-fun if evidence supports it. other-pad remains for dust pads.
Conflicts or alternatives considered: one-leaf-per-brand (rejected). Merging all pads into bonding-curve (false).
Receipt IDs: R-MAP, R-LLAMA, R-CAND
Confidence: medium
```

### TAX-GROK-003

```
Proposal ID: TAX-GROK-003
Change type: mapping
Proposed key and display label: trading/telegram-exec · Telegram / execution frontend (already in the v1 registry)
Parent domain: trading
Definition: A trading frontend or bot that routes orderflow onto RH venues it does not control. Ecosystem role is observe or dependency, never subject, unless a native control plane is shown.
Includes: GMGN, Maestro, Banana Gun, Moby, Obscura.
Excludes: Native AMMs, aggregators with their own router contracts (Mancer), perps venues (Meridian, Lighter).
Distinguishing test: Does the product custody or originate the pool/orderbook, or does it wrap someone else's?
Motivating candidate slugs: gmgn, maestro, banana-gun, moby, obscura
Affected canonical slugs: none
Current fallback mapping: omitted from census (correct) but also omitted from the role axis in public views
Migration impact: none to census. Inventory should keep these as observe so they are not later filed as DEXes because Llama revenue is large.
Conflicts or alternatives considered: filing GMGN as trading/amm-native because of revenue (rejected).
Receipt IDs: R-MAP, R-LLAMA
Confidence: high
```

### TAX-GROK-004

```
Proposal ID: TAX-GROK-004
Change type: new-leaf
Proposed key and display label: tooling/social-graph · Onchain social graph
Parent domain: tooling
Definition: A product whose primary machine is keys, keys-as-membership, or friendtech-style social shares, not token launch or spot trading.
Includes: clan.tech (SocialFi groups / friendtech-on-RH).
Excludes: Launchpads; FOMO trading venue; agent identity (.agent names); media accounts.
Distinguishing test: Is the scarce object a social key/share rather than a launched token or an AMM LP?
Motivating candidate slugs: clan-tech
Affected canonical slugs: none
Current fallback mapping: none (no-fit)
Migration impact: one observe row. Do not invent a "SocialFi" domain.
Conflicts or alternatives considered: stuffing into launch/other-pad or agents/agent-product (both fail the test). A new top-level domain `social` (rejected as premature).
Receipt IDs: R-MAP
Confidence: medium
```

### TAX-GROK-005

```
Proposal ID: TAX-GROK-005
Change type: mapping
Proposed key and display label: (no new leaf) — refuse product leaves for media, placeholders, and unnamed machines
Parent domain: n/a
Definition: Names without a demonstrated product machine stay entity_kind=unknown, role=observe, leaf=null. Media recap accounts are not products.
Includes: Hood Insider, Atlas placeholder, RSTOCKS leftover, Hood City (machine unclear), WISE Token (unshown telecom-node claim), Funded Protocol, Liquidium expansion claim, HoodFrens SoFi row, Ravenhood volume-boost row, Gwood Finance handle-only.
Excludes: Any name that has a reproduced mechanism.
Distinguishing test: Can a researcher state the control plane in one sentence with a receipt? If not, no leaf.
Motivating candidate slugs: hood-insider, atlas, rstocks, hood-city, wise-token, funded-protocol, liquidium, hoodfrens, ravenhood, gwood
Affected canonical slugs: none
Current fallback mapping: temptation to file as tooling/scanner or launch/other-pad
Migration impact: none
Conflicts or alternatives considered: a media/ leaf (rejected — not a product taxonomy).
Receipt IDs: R-MAP, R-CHAIN, R-UNMAPPED
Confidence: high
```

### TAX-GROK-006

```
Proposal ID: TAX-GROK-006
Change type: mapping
Proposed key and display label: trading/hook-mev vs launch/hook-programmable vs yield/lp-manager
Parent domain: trading / launch / yield
Definition: A Uniswap v4 hook is not a type of project. Classify the *job* the hook does: MEV redistribution (what-the-hook), launch composition (Hookr, maybe HookOS), LP management (TwoFold), or other automation (GlueHook).
Includes: what-the-hook, hookr, twofold, gluehook, hookos, stormm (StonkBrokers overlay)
Excludes: Using "hook" as a census category.
Distinguishing test: What does the hook change — launch, LP, MEV, or something else — and who controls it?
Motivating candidate slugs: gluehook, hookos, twofold, stormm
Affected canonical slugs: what-the-hook, hookr, stonkbroker
Current fallback mapping: hook ≈ launchpad or fee-routing
Migration impact: review-only on three census rows; GlueHook/HookOS stay observe until RH-native control is shown.
Conflicts or alternatives considered: a domain `hooks/` (rejected — mechanism tag `already exists`; the job still needs a product leaf).
Receipt IDs: R-TAX, R-MAP, R-LLAMA
Confidence: high
```

### TAX-GROK-007

```
Proposal ID: TAX-GROK-007
Change type: mapping
Proposed key and display label: identity split rule (already in taxonomy.md §5.4) — enforce, do not add a leaf
Parent domain: n/a
Definition: Shared brand stays one slug until there are separate control planes or independently addressable products that need separate evidence records. Different handles + different machines stay different slugs even when tickers collide.
Includes / motivating pairs:
  - Arrow Finance (credit/cdp, @ArrowFinanceio) vs ArrowPad.fun (@Arrowpadfun) vs Llama ArrowPad (@RobinArrowPad)
  - census Safehood protocol vs Pons-graduated SAFEHOOD token (@safehoodonrh)
  - FoxPad vs FOX mascot (already split in harvest)
  - @Robin_Pad vs @RobinPAD_MEME
  - Arc Liquidity (pending lending) vs Arcus perps (dependency)
  - pools.trade vs pools.fun
  - STORMM vs stonkbroker (same plane — do not split yet)
  - Hood Index vs Robinhood Index Vaults vs The Index
  - HFUN token vs hood.fun pad
Excludes: Splitting STORMM or Leverage Machine from StonkBrokers without a separate control plane.
Distinguishing test: Separate admin/upgrade path or independently addressable deployment? Then separate slug. Shared Safe and shared docs? One slug, secondary leaf.
Motivating candidate slugs: arrowpad-fun, robinpad, robinpad-meme, pools-fun, stormm, arcus, hood-index, hfun
Affected canonical slugs: arrow, safehood, foxpad, hoodfun, stonkbroker, index, robinhood-index-vaults, pools-trade
Current fallback mapping: ticker-only merges
Migration impact: no census rewrite. Inventory records possible-match; compiler must not merge on ticker.
Conflicts or alternatives considered: merge ArrowPad into Arrow (rejected by the map). Split STORMM now (rejected).
Receipt IDs: R-MAP, R-HARVEST, R-CENSUS
Confidence: high
```

### TAX-GROK-008

```
Proposal ID: TAX-GROK-008
Change type: mapping
Proposed key and display label: prefer imported leaves when the same brand is multi-chain infra
Parent domain: trading / credit / yield / chain-infra
Definition: Llama RH TVL does not make a product robinhood-native. If the protocol is a known multi-chain deployment (Uniswap, Ramses, Ekubo, Pancake, Sushi, Spark, IPOR, D2, Morpho, Gami, Steakhouse), chain_scope=multichain, role=dependency, leaf=*-imported or the matching infra leaf.
Includes: ramsesx, ekubo, fusion-ipor, d2-finance, gami-labs, steakhouse, spark, pancake, sushi, skate-amm
Excludes: up, fables, swaphood, giga (until shown imported), meridian, noxa, snuggle
Distinguishing test: Is there a documented non-RH origin and a RH deployment of that same control plane?
Motivating candidate slugs: ramsesx, ekubo, fusion-ipor, d2-finance, spark, gami-labs
Affected canonical slugs: none (census subjects were already filtered for native plays). Review giga/alandale/orvex/kipseli/liquidcore/robinswap before promoting.
Current fallback mapping: DEX with TVL → trading/amm-native
Migration impact: observe/dependency inventory only.
Conflicts or alternatives considered: filing RamsesX as a census AMM because TVL > GIGA (rejected — TVL is not nativeness).
Receipt IDs: R-LLAMA, R-MAP
Confidence: medium
```

### TAX-GROK-009

```
Proposal ID: TAX-GROK-009
Change type: mapping
Proposed key and display label:
  dual launchpad+dex (Pons)
  dex_family: imported | native-amm | flywheel-44 (up, SwapHood)
  pad-coin edges: launched_on, quote_asset, quote_ca, pair_rank
Parent domain: launch + trading + (pad-coin as child, not a domain)
Definition: Names are typed as launchpad, dex, both, lending, or pad-coin. A pad-coin card must name its pad, the official stock it is quoted against, and its rank in that stock’s pair cohort. (4,4) is a DEX child (fee-to-token flywheel), not a top-level category.
Includes: Pons as both; up/SwapHood as 4,4 DEX; AI as LONG×official NVDA rank-1; BONER as pad-coin×HIMS.
Excludes: Filing CASHCAT as a protocol; filing FOMO/Pump.fun as pads; merging every $NVDA ticker into Artificial Inu; calling Pons “the DEX.”
Distinguishing test: Can a reader answer: is this a pad, a venue, both, a loan market, or a coin — and if a coin, which pad and which registry stock?
Motivating candidate slugs: artificial-inu, pons, up, swaphood, bankr, long, cashcat, boner (featured, not census)
Affected canonical slugs: pons, up, swaphood, fables, what-the-hook, artificial-inu, long, bankr, denar, longbow, arrow
Current fallback mapping: flat Launchpad / Aggregator / Fee-routing / Stock-paired token
Migration impact: display/mapping first; schema later. No silent census rewrites.
Conflicts or alternatives considered: one “meme” leaf (rejected). one “RWA” leaf for all NVDA pairs (rejected).
Receipt IDs: R-CENSUS, R-TAX, R-MAP
Confidence: high
```

## 4. Canonical stress test

Do not rewrite these rows. Recommend controller review against the definitions above.

| Census slug | Current tree / category | Stress |
| --- | --- | --- |
| website | rwa-products/ad-space · NFT / treasury | Flat category and leaf disagree. ad-space is a real leaf; NFT / treasury is the stretch. |
| tickeryard | rwa-products/synthetic-asset · Oracle / infra | Same stretch. If yBTC is a synthetic, the enum should not say oracle. |
| bankr | agents/agent-execution · Agent / execution | Also a stock-paired factory. Secondary leaf launch/stock-paired-factory is warranted if that machine is evidenced; do not invent `CDP + launchpad` style hybrids. |
| arrow | credit/cdp · CDP | Map previously noted a pad. Keep CDP primary; do not merge ArrowPad.fun. |
| what-the-hook | trading/hook-mev · Fee-routing protocol | Tree is better than the enum. TAX-GROK-006. |
| foxpad | launch/other-pad · Launchpad | Harvest already split FOX mascot. Confirm the row is the pad, not the token. |
| safehood | launch/uni-pool-launch · Launchpad | Lifecycle announced. Distinct from graduated SAFEHOOD token. |
| sherwood | privacy/private-transfer · Scanner / tooling | Tree vs enum disagree. |
| netnet | rwa-products/reserve-currency · RWA baskets | Leaf is more precise than the enum. |
| meridian | trading/perps-native · Prediction market | Dual product (perps + predict) on one control plane. Secondary markets/prediction is the honest extra leaf; Llama already splits Meridian Perps vs Meridian Predict. |
| longshot vs long | both launch/stock-paired-factory | Harvest says the longshot *dossier* described long.xyz. Confirm identity has not been double-filed. |
| stonks-fun | launch/other-pad | May be a distinct DN-404/Doppler mechanism; other-pad is a placeholder. |
| up / fables / swaphood | trading/amm-native · Fee-routing protocol | Enum stretch. Tree is correct if they are AMMs. |

## 5. Rejected labels

| Label | Why rejected |
| --- | --- |
| `DeFi` / `RWA` / `hybrid` / `culture` as card titles | SuperGrok export categories. Mix form, function, and editorial judgment (taxonomy.md). |
| `SocialFi` as a domain | One motivating name (clan.tech). A tooling leaf is enough. |
| `hooks/` as a domain | Hook is a mechanism tag. The product job still needs a leaf. |
| `meme` / `culture coin` as a leaf | PRD already parks pure culture as observe. Graduation-token covers pad outputs. |
| One leaf per brand (Rallypad, Ctrl Fi, token.select, …) | Fails “smallest vocabulary that separates mechanisms.” |
| Popularity / Llama revenue as a taxonomy rule | GMGN would become a native DEX. Rejected. |
| `media/` leaf for Hood Insider | Not a product. Role=observe, leaf=null. |
| Merging on ticker | Arrow vs Arrows vs ArrowPad; Arc vs Arcus; FOMO token vs FOMO venue; HFUN vs hood.fun. |

## 6. Open questions

1. **GIGA / Alandale / Orvex / Kipseli / LiquidCore / RobinSwap / SectorOne / BrownFi** — native AMMs or imported forks with RH deployments? Promotion to subject requires a control-plane receipt, not TVL.
2. **STORMM** — keep inside stonkbroker (recommended) or split once the hook has its own admin path?
3. **pools.fun vs pools.trade** — same pad, rename, or two products?
4. **Spark / IPOR Fusion / D2** — stay dependencies forever, or does a RH-specific curator/vault become a subject?
5. **MosaicETF redemption** — TAX-GROK-001 is medium confidence until redemption is reproduced, not just described.
6. **Meridian** — one slug with secondary prediction leaf, or two evidence records (perps vs predict) under the same brand?
7. **Should `launch/other-pad` be deprecated** after a compiler pass, or kept as an honest holding pen? Recommendation: keep, but never as a reader-facing card title (“Token launchpad, mechanism not classified”).
8. **Flat category enum** — freeze it and display from the tree, or migrate now? This assignment cannot touch schema. The stress-test rows are the migration queue.

## 8. Mapping model (parent / child / dual) — TAX-GROK-009

Controller feedback: we have launchpads, DEXes, some that are both, coins of launchpads, lending, and (4,4) protocols as a DEX child. People must see **which stock a meme is paired to**, **which pad minted it**, and **which NVDA pair is the real one** so they do not buy the ticker collision. This section is the mapping, not a new dump of tokens.

### 8.1 Object types (parents)

These are kinds of *names*, not a single flat category. A name has one primary type and may carry a dual flag.

```
name
├── launchpad          mints tokens (Pons, Flap, LONG, Bankr, Clanker, hood.fun)
├── dex                spot venue
│   ├── imported       Uniswap v2/v3/v4
│   ├── native-amm     Fables, GIGA (if native)
│   └── 4,4 / flywheel up (3,3-style emissions + buyback), SwapHood (h33 / HOOD buybacks)
├── both               launchpad whose post-graduation swaps are a DEX
│                      Pons: curve at launch, Uni v4 swap fees after — Llama fees $4.73m
│                      StonkBrokers: nft-gated launch + STORMM overlay
├── lending            Morpho (dependency), Denar, Longbow, Arrow CDP, Native Credit Pool
├── pad-coin           child of a launchpad, not a protocol until it has its own machine
└── stock-token        official quote asset (dependency, never a standalone profile)
```

`(4,4)` is **not** a top-level domain. It is a child of DEX: native AMM whose swap fees are routed into a protocol token (buyback, ve/h33, rebase). Census already stuffed these into `Fee-routing protocol`. Keep them under trading; stop using that enum as if it were a product family equal to Launchpad.

| Name | Primary | Dual | 4,4 child? |
| --- | --- | --- | --- |
| Pons | launchpad | **yes — DEX after graduation** | no (fees buy PONS; that is pad-token, not a veDEX) |
| LONG | launchpad (stock-paired factory) | no | no |
| Bankr | launchpad + agent-execution | stock-paired factory is secondary | no |
| Uniswap | dex / imported | no | no |
| up | dex / 4,4 | no | **yes** — census: (3,3)-style emissions and buyback |
| SwapHood | dex / 4,4 | no | **yes** — 95% fees buy HOOD into h33 backing |
| Fables | dex / native-amm | no | review (fee-routing enum today) |
| What The Hook | dex / hook | no | no — MEV hook, not a flywheel token |
| Arrow | lending / CDP | pad only if ArrowPad is the same control plane (it is not) | no |
| Denar / Longbow | lending | no | no |
| Artificial Inu | pad-coin | — | — |
| CASHCAT | pad-coin / mascot | — | — |

### 8.2 Required edges on every pad-coin

A launchpad coin is not “a meme.” The card has to carry the graph:

```
TICKER · display name
Pad-coin · launched on <PAD> · quoted vs official <STOCK>
<Pad 24h volume> · rank #<n> of <STOCK>-paired coins by pool volume
Quote CA must match registry <0x…>
```

| Edge | Why |
| --- | --- |
| `launched_on` → pad slug | BONER is not a protocol; it is a Pons (or other) output |
| `quote_asset` → official stock ticker + registry CA | AI/NVDA is not “an NVDA”; the quote must be `0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec` (hoodfi) / registry NVDA, not a fake `$NVDA` ticker |
| `pair_rank` in that stock’s cohort | 40 NVDA pools on hoodfi.io; ~32% of NVDA pool activity is memes quoting NVDA. Rank by 24h volume / TVL |
| `pad_volume` | people use pad volume to tell a real factory from a clone |

Do **not** file the stock token as the parent of the meme. Official NVDA is a **dependency / quote leg**. The parent of $AI is **LONG**. The quote is **NVDA**.

### 8.3 NVDA cohort (do not buy the wrong one)

hoodfi.io (checked this pass): NVDA spot $41.5m / 40 pools; $19.3m is NVDA-as-quote. Uniswap v3 takes the NVDA/USDG book; the **top meme/NVDA book is AI/NVDA**.

| Rank (meme×NVDA) | Token | Pad | Note |
| --- | --- | --- | --- |
| 1 | **AI / Artificial Inu** | **LONG** | Flagship. ~$162–180m mcap this pass. LONG claimed ~20% of circulating NVDA stock tokens in the AI pool (18 Aug). Census slug `artificial-inu`. |
| — | REALSTONK / REAL | Bankr | Same quote asset, different pad, much smaller (Jul: ~$0.64m FDV). |
| — | microduck / NVDA | Pons v2 | Different pad again. |
| **trap** | token named NVIDA / ticker **$NVDA** | Bankr | CA `0x775C8f9EFd250D238b5009a2B2a977e1e095CBA3` — a meme whose *ticker* is NVDA, paired to official NVDA. This is why the card must show pad + quote CA, not ticker. |

Same pattern for HIMS (BONER), SPCX (SPACEHOOD), TSM (TAYSOM), MSFT (SBC). One stock → many children → **one ranked cohort**, never one leaf called “NVDA coins.”

Pons can also mint stock-paired coins (v2 quote assets include stocks). LONG/Bankr are the factories that *defined* the meta; Pons is the volume pad that also does it. That is a pad attribute (`supports_stock_quote: true`), not a reason to merge Pons into LONG.

### 8.4 Standard card, by type

**Launchpad:** name, mechanism child (curve / stock-paired factory / social-deploy / …), 24h launch volume, 24h post-grad DEX volume if dual.

**DEX:** imported vs native vs 4,4. 4,4 card line: “Native DEX · fees to {token}.”

**Both:** primary launchpad, secondary DEX, both volumes shown.

**Pad-coin:** ticker, pad, official stock pair + CA, rank in that pair cohort, pad volume. Never a numeric protocol score.

**Lending:** primitive (Morpho) vs isolated market (Denar) vs overlay (Longbow) vs CDP (Arrow). Not a DEX.

### 8.5 What this adds to the leaf registry

No one-leaf-per-brand. Three mapping fields the current schema does not store on a play:

1. `dual: launchpad+dex` (Pons)
2. `launched_on` + `quote_asset` + `quote_ca` on pad-coins
3. `dex_family: imported | native-amm | flywheel-44` under trading

Until schema v2, keep these in the packet / census tree secondary + a mapping table. Display them on the card anyway.

## 7. Standard view (every name, including pending)

This is the card contract from `docs/taxonomy.md` §2, applied as the collector recommendation for every inventory row. It is not a site change.

```
NAME · SYMBOL
<leaf display label or “Mechanism not classified”>
<Lifecycle> · <Coverage: candidate|seed|full> · <Evidence: claimed|unverified|…>

<One sentence mechanism + why it is in the universe>

Secondary: <leaf> · <leaf>
Role: subject | dependency | observe | graduation
Updated <date>
```

Rules for that view, from this pass:

- Do not show a numeric score on candidate or insufficient-evidence rows.
- Do not show `other-pad`, `hybrid`, or raw slugs as the primary line.
- Graduation tokens stay graduation until an independent machine is evidenced.
- Dependencies cite the subject files; they do not get a standalone profile.
- Identity collisions stay visible as possible-match, never silently merged.
