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

Highest-impact moves: add two leaves (wallet-mirror basket, livestream/attention pad), stop using `other-pad` as a home, map imported TVL to imported leaves, and keep pad-output tokens on `launch/graduation-token` until they have an independent control plane.

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
