# Taxonomy proposals — WORK-20260901-grok-name-taxonomy

Producer: grok-bot
Base: `7c06f090370e40734ed0efa7c0fe3ffd9e8e7826`
Observed: 2026-09-01T23:59:00Z (repair pass)
Companion: `name-inventory.yaml`

This is a collector proposal. It does not rewrite census rows. Controller review is required before any leaf is published. PR remains draft.

Repair pass addresses blocking findings: pending-queue dedupe, full coverage matrix (131/131), inventory↔report alignment, controlled mechanism tags, protocol-specific Llama receipts with supports[], identity-checked bar, TAX-GROK-009 revision, TAX-GROK-010 receipt ledger.

## 1. Executive summary

The v1 leaf registry is still the right *shape*. Mapping and evidence were the defects.

Highest-impact problems that remain after this pass:

1. **`launch/other-pad` is a holding pen, not a home.** Dust pads stay here until a mechanism is shown. Do not mint one leaf per brand.
2. **Execution frontends are not venues.** GMGN, Maestro, Banana Gun, Moby, Obscura wrap books they do not control (`trading/telegram-exec`, role observe).
3. **Imported TVL is not nativeness.** Llama RH TVL does not make GIGA/Alandale/Orvex native, and does not make RamsesX/Ekubo/Spark/Morpho subjects.
4. **Hooks are classified by job**, not by being hooks (TAX-GROK-006).
5. **Identity splits stay unmerged** (TAX-GROK-007). Ticker-only is not a match.
6. **Media and placeholders get no product leaf** (TAX-GROK-005).
7. **Every mapped leaf needs a why-mapped one-liner** (TAX-GROK-010). That is display/intake craft, not a new domain.

**Held (do not publish):** TAX-GROK-001 wallet-mirror basket, TAX-GROK-002 livestream-pad and creator-pad, TAX-GROK-004 social-graph. Each currently rests on one weakly verified name and fails the mint-or-match rule (≥2 real names or 1 + credible pipeline).

**TAX-GROK-009 revised:** `both` is not an entity type; imported/native and fee-flywheel are separate axes; `pair_rank` is a dated derived metric, not taxonomy; `launched_on` / `quote_asset` / `quote_ca` stay as relationship fields; Pons graduating into Uniswap and collecting fees does not make Pons a DEX.

Inventory totals after repair: **114 net-new, 13 already-pending, 4 possible-match.** Fit: exact 60 / lossy 43 / no-fit 15 / ambiguous 13. Depth: lead-only 129 / identity-checked 2 (`usdg`, `stock-tokens`). Lifecycle mainnet 2 (official Robinhood docs only).

## 2. Coverage matrix

Every inventory candidate. Fit and proposal IDs are copied from `name-inventory.yaml` so the two files cannot disagree.

### Already pending (round-22 census-candidates — not net-new) (13)

| Slug | Current best leaf | Fit | Proposals | Depth | Lifecycle |
| --- | --- | --- | --- | --- | --- |
| `hedge` | nft-treasury/token-bound-nft | exact | — | lead-only | announced |
| `arc` | credit/isolated-money-market | exact | — | lead-only | announced |
| `scalar` | yield/allocator | exact | — | lead-only | announced |
| `bricks` | yield/fee-router | exact | — | lead-only | announced |
| `floor` | rwa-products/tax-distributor | exact | — | lead-only | announced |
| `sluice` | yield/savings-vault | exact | — | lead-only | announced |
| `twofold` | yield/lp-manager | exact | TAX-GROK-006 | lead-only | announced |
| `v4fun` | launch/hook-programmable | lossy | TAX-GROK-002 | lead-only | announced |
| `hooded-meme` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | announced |
| `canopy` | launch/uni-pool-launch | exact | — | lead-only | announced |
| `mosaicetf` | *(none)* | no-fit | TAX-GROK-001 | lead-only | announced |
| `rallypad` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | announced |
| `robinpad` | launch/other-pad | lossy | TAX-GROK-002, TAX-GROK-007 | lead-only | announced |

### Possible matches (4)

| Slug | Current best leaf | Fit | Proposals | Depth | Lifecycle |
| --- | --- | --- | --- | --- | --- |
| `arrowpad-fun` | launch/other-pad | lossy | TAX-GROK-002, TAX-GROK-007 | lead-only | unknown |
| `pools-fun` | launch/uni-pool-launch | ambiguous | TAX-GROK-007 | lead-only | announced |
| `arcus` | trading/perps-imported | lossy | TAX-GROK-007, TAX-GROK-008 | lead-only | unknown |
| `stormm` | trading/hook-mev | exact | TAX-GROK-006, TAX-GROK-007 | lead-only | announced |

### Net-new (114)

| Slug | Current best leaf | Fit | Proposals | Depth | Lifecycle |
| --- | --- | --- | --- | --- | --- |
| `giga` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `ramsesx` | trading/amm-imported | lossy | TAX-GROK-008 | lead-only | unknown |
| `alandale` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `orvex` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `ekubo` | trading/amm-imported | exact | TAX-GROK-008 | lead-only | unknown |
| `deepstate` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `native-credit-pool` | credit/isolated-money-market | exact | — | lead-only | unknown |
| `accountable` | credit/uncollateralized | exact | — | lead-only | unknown |
| `sharewoods` | credit/rwa-lending | exact | — | lead-only | unknown |
| `usdax` | credit/cdp | exact | — | lead-only | announced |
| `termmax` | credit/lending-primitive | lossy | TAX-GROK-008 | lead-only | unknown |
| `gami-labs` | credit/morpho-curator | exact | TAX-GROK-008 | lead-only | unknown |
| `token-select` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `sentry` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `coinbarrel` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `flap` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `letscash` | launch/other-pad | no-fit | TAX-GROK-002 | lead-only | unknown |
| `bags` | launch/other-pad | no-fit | TAX-GROK-002 | lead-only | unknown |
| `o1-exchange` | launch/other-pad | no-fit | TAX-GROK-002 | lead-only | unknown |
| `basedbid` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `peeps` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `raisehood` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `based-alpha` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `merryforge` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `boardwalk` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `dexlaunch` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `unihood` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `robinfun` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `rh-fun` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `hoodmint` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `frontier` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `popi` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | unknown |
| `slvr` | yield/gamified-mining | exact | — | lead-only | unknown |
| `stockrip` | yield/gamified-mining | exact | — | lead-only | unknown |
| `t3tris` | yield/allocator | lossy | — | lead-only | unknown |
| `dexfi` | yield/allocator | lossy | — | lead-only | unknown |
| `saffron` | yield/savings-vault | exact | — | lead-only | unknown |
| `ezmanager` | yield/lp-manager | exact | — | lead-only | unknown |
| `astro` | yield/gamified-mining | lossy | — | lead-only | unknown |
| `fake-wall-street` | yield/gamified-mining | lossy | — | lead-only | unknown |
| `stockmon` | nft-treasury/nft-fee-claim | lossy | — | lead-only | unknown |
| `hoodbets` | markets/prediction | exact | — | lead-only | unknown |
| `wambo` | markets/prediction | exact | — | lead-only | announced |
| `privacy-cash` | privacy/private-transfer | exact | — | lead-only | unknown |
| `gmgn` | trading/telegram-exec | exact | TAX-GROK-003 | lead-only | unknown |
| `maestro` | trading/telegram-exec | exact | TAX-GROK-003 | lead-only | unknown |
| `gomintly` | agents/agent-product | exact | — | lead-only | announced |
| `gwood` | *(none)* | no-fit | TAX-GROK-005 | lead-only | unknown |
| `robinpad-meme` | launch/other-pad | lossy | TAX-GROK-002, TAX-GROK-007 | lead-only | announced |
| `clan-tech` | *(none)* | no-fit | TAX-GROK-004 | lead-only | announced |
| `openpump` | tooling/scanner | lossy | — | lead-only | announced |
| `fomo-venue` | trading/aggregator | lossy | — | lead-only | announced |
| `orderly` | trading/perps-imported | exact | TAX-GROK-008 | lead-only | unknown |
| `obsidian-swap` | chain-infra/bridge | lossy | — | lead-only | announced |
| `project-vex` | agents/agent-product | exact | — | lead-only | announced |
| `hood-city` | *(none)* | no-fit | TAX-GROK-005 | lead-only | unknown |
| `banana-gun` | trading/telegram-exec | exact | TAX-GROK-003 | lead-only | unknown |
| `dolores` | agents/agent-product | exact | — | lead-only | announced |
| `good-coin` | launch/graduation-token | exact | — | lead-only | announced |
| `ctrl-fi` | launch/other-pad | lossy | TAX-GROK-002 | lead-only | announced |
| `obscura` | trading/telegram-exec | lossy | TAX-GROK-003 | lead-only | announced |
| `wise-token` | *(none)* | no-fit | TAX-GROK-005 | lead-only | announced |
| `ponscade` | launch/graduation-token | exact | — | lead-only | announced |
| `hookos` | launch/hook-programmable | lossy | TAX-GROK-006 | lead-only | announced |
| `prism-assets` | rwa-products/synthetic-asset | lossy | — | lead-only | announced |
| `funded-protocol` | *(none)* | no-fit | TAX-GROK-005 | lead-only | announced |
| `liquidium` | *(none)* | no-fit | TAX-GROK-005 | lead-only | announced |
| `vantis` | tooling/machine-payments | exact | — | lead-only | announced |
| `moby` | trading/telegram-exec | exact | TAX-GROK-003 | lead-only | announced |
| `hood-insider` | *(none)* | no-fit | TAX-GROK-005 | lead-only | unknown |
| `hoodies` | nft-treasury/token-bound-nft | exact | — | lead-only | announced |
| `hoodit` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `hoodfrens` | *(none)* | no-fit | TAX-GROK-005 | lead-only | unknown |
| `yowl` | yield/lp-manager | lossy | — | lead-only | announced |
| `fusion-ipor` | yield/allocator | exact | TAX-GROK-008 | lead-only | unknown |
| `d2-finance` | yield/allocator | exact | TAX-GROK-008 | lead-only | unknown |
| `kipseli` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `liquidcore` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `krystal` | yield/allocator | exact | — | lead-only | unknown |
| `sectorone` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `brownfi` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `gluehook` | trading/hook-mev | lossy | TAX-GROK-006 | lead-only | unknown |
| `robinswap` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `sheriff` | trading/amm-native | ambiguous | TAX-GROK-008 | lead-only | unknown |
| `skate-amm` | trading/amm-imported | exact | TAX-GROK-008 | lead-only | unknown |
| `keellabs` | yield/lp-manager | lossy | — | lead-only | unknown |
| `spiral-stake` | yield/allocator | lossy | — | lead-only | unknown |
| `hood-index` | rwa-products/index-vault | exact | TAX-GROK-007 | lead-only | unknown |
| `townsquare` | yield/savings-vault | exact | — | lead-only | unknown |
| `kyros` | credit/lending-primitive | ambiguous | — | lead-only | unknown |
| `ravenhood` | *(none)* | no-fit | TAX-GROK-005 | lead-only | unknown |
| `taysom` | launch/graduation-token | exact | — | lead-only | announced |
| `sbc` | launch/graduation-token | exact | — | lead-only | announced |
| `cq` | launch/graduation-token | exact | — | lead-only | announced |
| `piggy` | launch/graduation-token | exact | — | lead-only | announced |
| `pongo` | launch/graduation-token | exact | — | lead-only | announced |
| `hfun` | launch/graduation-token | exact | TAX-GROK-007 | lead-only | announced |
| `fomo-token` | launch/graduation-token | exact | — | lead-only | announced |
| `cashcat` | launch/graduation-token | exact | — | lead-only | announced |
| `hmm` | launch/graduation-token | exact | — | lead-only | announced |
| `wifi` | launch/graduation-token | exact | — | lead-only | announced |
| `brodie` | launch/graduation-token | exact | — | lead-only | announced |
| `atlas` | *(none)* | no-fit | TAX-GROK-005 | lead-only | unknown |
| `rstocks` | *(none)* | no-fit | TAX-GROK-005 | lead-only | unknown |
| `morpho` | credit/lending-primitive | exact | TAX-GROK-008 | lead-only | unknown |
| `steakhouse` | credit/morpho-curator | exact | TAX-GROK-008 | lead-only | unknown |
| `lighter` | trading/perps-imported | exact | TAX-GROK-008 | lead-only | unknown |
| `rialto` | trading/prop-amm | exact | — | lead-only | unknown |
| `uniswap` | trading/amm-imported | exact | TAX-GROK-008 | lead-only | unknown |
| `chainlink` | chain-infra/oracle | exact | — | lead-only | unknown |
| `usdg` | chain-infra/stablecoin | exact | — | identity-checked | mainnet |
| `layerzero` | chain-infra/bridge | exact | TAX-GROK-008 | lead-only | unknown |
| `spark` | chain-infra/stablecoin | lossy | TAX-GROK-008 | lead-only | unknown |
| `stock-tokens` | rwa-products/stock-token-issuer | exact | — | identity-checked | mainnet |

**131 / 131 candidates listed.** 13 already-pending + 4 possible-match + 114 net-new.

## 3. Proposal cards

### TAX-GROK-001 — HOLD

```
Proposal ID: TAX-GROK-001
Change type: new-leaf
Status: HOLD
Proposed key and display label: rwa-products/wallet-mirror-basket · Wallet-mirror basket
Parent domain: rwa-products
Definition: A product that copies an existing wallet or portfolio into a basket token, with a documented redemption or unwind path to the underlying assets, and without being the official Stock Token issuer.
Includes: MosaicETF-style paste-an-address / freeze-holdings / redeem-to-real-tokens products (claimed, not reproduced).
Excludes: Official Stock Tokens. Fee-tax distributors (The Index). Actively managed index vaults. Stock-paired memes with no redemption (Artificial Inu). Floor (stock-backed floor, not a wallet mirror).
Distinguishing test: Can a holder redeem the basket into the copied underlyings under published rules, and is composition derived from an external wallet rather than a curator list?
Motivating candidate slugs: mosaicetf
Affected canonical slugs: none
Current fallback mapping: no-fit / leaf null
Migration impact: none while on hold.
Conflicts or alternatives considered: stretching redeemable-basket or index-vault. Minting a leaf for one weakly verified name (rejected — mint-or-match).
Hold reason: one motivating name; redemption not reproduced; conflicts with TAX-GROK-010 mint-or-match.
Receipt IDs: R-CAND, R-MAP, R-X019
Confidence: low
```

### TAX-GROK-002

```
Proposal ID: TAX-GROK-002
Change type: mapping (other-pad as holding pen). New leaves livestream-pad and creator-pad: HOLD
Proposed key and display label:
  keep launch/bonding-curve, launch/uni-pool-launch, launch/hook-programmable, launch/nft-gated-launch, launch/stock-paired-factory
  restrict launch/other-pad to unclassified pads with a documented RH presence and no demonstrated mechanism
  HOLD launch/livestream-pad and launch/creator-pad
Parent domain: launch
Definition: other-pad is a holding pen, never a reader-facing card title. Display "Token launchpad, mechanism not classified" until a mechanism is shown. Do not mint livestream-pad or creator-pad until a second independent name exists.
Includes (holding pen): token-select, sentry, coinbarrel, flap, hooded-meme, robinpad, rallypad, ctrl-fi, and other Llama pads without a demonstrated mechanism.
Excludes: Pons (bonding-curve); Hookr (hook-programmable); pools.trade / Canopy (uni-pool-launch); StonkBrokers (nft-gated); LONG / Bankr factories (stock-paired-factory).
Distinguishing test: What happens at launch, in the contracts or in a primary doc? If unknown, other-pad + observe.
Motivating candidate slugs: rallypad, ctrl-fi, token-select, v4fun, hooded-meme, robinpad
Affected canonical slugs: foxpad, lemon, noxa, stonks-fun, hoodfun (review later)
Current fallback mapping: launch/other-pad
Migration impact: no census rewrite. No new leaves published this PR.
Conflicts or alternatives considered: one-leaf-per-brand (rejected). Merging all pads into bonding-curve (false). Minting livestream-pad for Rallypad alone (held).
Hold reason (new leaves): Rallypad is the only livestream candidate; Ctrl Fi is the only creator-keep candidate; both are lead-only.
Receipt IDs: R-MAP, R-CAND, R-LLAMA-token.select
Confidence: medium for the holding-pen rule; low for the two new leaves
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
Current fallback mapping: omitted from census (correct)
Migration impact: none to census. Inventory keeps these as observe so Llama revenue does not file them as DEXes.
Conflicts or alternatives considered: filing GMGN as trading/amm-native because of revenue (rejected).
Receipt IDs: R-MAP
Confidence: high
```

### TAX-GROK-004 — HOLD

```
Proposal ID: TAX-GROK-004
Change type: new-leaf
Status: HOLD
Proposed key and display label: tooling/social-graph · Onchain social graph
Parent domain: tooling
Definition: A product whose primary machine is keys, keys-as-membership, or friendtech-style social shares, not token launch or spot trading.
Includes: clan.tech (claimed).
Excludes: Launchpads; FOMO trading venue; agent identity; media accounts.
Distinguishing test: Is the scarce object a social key/share rather than a launched token or an AMM LP?
Motivating candidate slugs: clan-tech
Affected canonical slugs: none
Current fallback mapping: no-fit / leaf null
Migration impact: none while on hold.
Conflicts or alternatives considered: a SocialFi domain (rejected). Minting a leaf for one name (rejected).
Hold reason: one weakly verified name; mint-or-match fails.
Receipt IDs: R-MAP, R-X088
Confidence: low
```

### TAX-GROK-005

```
Proposal ID: TAX-GROK-005
Change type: mapping
Proposed key and display label: (no new leaf) — refuse product leaves for media, placeholders, and unnamed machines
Parent domain: n/a
Definition: Names without a demonstrated product machine stay entity_kind=unknown, role=observe, leaf=null. Media recap accounts are not products.
Includes: Hood Insider, Atlas placeholder, RSTOCKS leftover, Hood City, WISE Token, Funded Protocol, Liquidium expansion claim, HoodFrens, Ravenhood, Gwood Finance.
Excludes: Any name that has a reproduced mechanism.
Distinguishing test: Can a researcher state the control plane in one sentence with a receipt? If not, no leaf.
Motivating candidate slugs: hood-insider, atlas, rstocks, hood-city, wise-token, funded-protocol, liquidium, hoodfrens, ravenhood, gwood
Affected canonical slugs: none
Current fallback mapping: temptation to file as tooling/scanner or launch/other-pad
Migration impact: none
Conflicts or alternatives considered: a media/ leaf (rejected — not a product taxonomy).
Receipt IDs: R-MAP, R-UNMAPPED
Confidence: high
```

### TAX-GROK-006

```
Proposal ID: TAX-GROK-006
Change type: mapping
Proposed key and display label: trading/hook-mev vs launch/hook-programmable vs yield/lp-manager
Parent domain: trading / launch / yield
Definition: A Uniswap v4 hook is not a type of project. Classify the job the hook does: MEV redistribution (what-the-hook), launch composition (Hookr, maybe HookOS), LP management (TwoFold), or other automation (GlueHook).
Includes: what-the-hook, hookr, twofold, gluehook, hookos, stormm (StonkBrokers overlay)
Excludes: Using "hook" as a census category.
Distinguishing test: What does the hook change — launch, LP, MEV, or something else — and who controls it?
Motivating candidate slugs: gluehook, hookos, twofold, stormm
Affected canonical slugs: what-the-hook, hookr, stonkbroker
Current fallback mapping: hook ≈ launchpad or fee-routing
Migration impact: review-only
Conflicts or alternatives considered: a domain hooks/ (rejected — hook is a mechanism concept, but `hook` is not in the current controlled tag set; the product job still needs a leaf).
Receipt IDs: R-TAX, R-MAP
Confidence: high
```

### TAX-GROK-007

```
Proposal ID: TAX-GROK-007
Change type: mapping
Proposed key and display label: identity split rule (taxonomy.md §5.4) — enforce, do not add a leaf
Parent domain: n/a
Definition: Shared brand stays one slug until there are separate control planes or independently addressable products that need separate evidence records. Different handles + different machines stay different slugs even when tickers collide.
Includes / motivating pairs:
  - Arrow Finance (credit/cdp) vs ArrowPad.fun (possible-match, ticker-only)
  - census Safehood protocol vs Pons-graduated SAFEHOOD token
  - @Robin_Pad (already-pending) vs @RobinPAD_MEME
  - Arc Liquidity (already-pending lending) vs Arcus perps (possible-match, ticker-only)
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
Conflicts or alternatives considered: merge ArrowPad into Arrow (rejected). Split STORMM now (rejected).
Receipt IDs: R-MAP, R-CENSUS, R-CAND
Confidence: high
```

### TAX-GROK-008

```
Proposal ID: TAX-GROK-008
Change type: mapping
Proposed key and display label: prefer imported leaves when the same brand is multi-chain infra
Parent domain: trading / credit / yield / chain-infra
Definition: Llama RH TVL does not make a product robinhood-native. If the protocol is a known multi-chain deployment, chain_scope=multichain, role=dependency, leaf=*-imported or the matching infra leaf. GIGA and similar AMMs stay fit=ambiguous until a control-plane receipt exists.
Includes: ramsesx, ekubo, fusion-ipor, d2-finance, gami-labs, steakhouse, spark, skate-amm, morpho, uniswap, lighter, layerzero
Excludes: Treating Llama TVL as mainnet. Treating GIGA as robinhood-native.
Distinguishing test: Is there a documented non-RH origin and a RH deployment of that same control plane?
Motivating candidate slugs: ramsesx, ekubo, fusion-ipor, d2-finance, spark, gami-labs, giga, alandale, orvex
Affected canonical slugs: none
Current fallback mapping: DEX with TVL → trading/amm-native
Migration impact: observe/dependency inventory only.
Conflicts or alternatives considered: filing RamsesX as a census AMM because TVL > GIGA (rejected — TVL is not nativeness).
Receipt IDs: R-LLAMA-giga-v3, R-LLAMA-ramses-cl-v2, R-LLAMA-ekubo, R-MAP
Confidence: medium
```

### TAX-GROK-009 (revised)

```
Proposal ID: TAX-GROK-009
Change type: mapping
Proposed key and display label:
  relationship fields launched_on, quote_asset, quote_ca on pad-coins
  nativeness axis: imported | native | unknown (not a dex_family enum)
  fee-flywheel as mechanism tag fee-routing on a DEX leaf (not a sibling of Launchpad)
Parent domain: launch + trading + credit (no new domain; no new entity type)
Definition: Multiple mechanisms on one control plane are primary + secondary leaves, not an entity type called "both". A pad-coin is launch/graduation-token (or another token leaf) plus relationship fields to its pad and, when stock-paired, the official quote asset. Rank in a pair cohort is a dated derived metric, stored with as-of, not a taxonomy key. Pons is a launchpad; graduating into a Uniswap pool and collecting fees does not make Pons a DEX — that is a fee edge onto Uniswap.
Includes: launched_on / quote_asset / quote_ca on pad-coins (AI→LONG×official NVDA; BONER×HIMS). up and SwapHood remain trading/amm-native with mechanism fee-routing.
Excludes: entity type "both". dex_family: imported|native-amm|flywheel-44 as one enum. pair_rank as a taxonomy field. Filing Pons as a DEX because post-grad Uniswap fees exist.
Distinguishing test: Can a reader see the pad, the official stock quote, and the quote CA without treating rank or flywheel as a category?
Motivating candidate slugs: cashcat, taysom, sbc, hfun, fomo-token (pad-coins in this inventory). Canonical: artificial-inu, pons, up, swaphood, long, bankr
Affected canonical slugs: pons, up, swaphood, fables, what-the-hook, artificial-inu, long, bankr, denar, longbow, arrow
Current fallback mapping: flat Launchpad / Aggregator / Fee-routing / Stock-paired token
Migration impact: relationship fields + display. No silent census rewrites. No new entity type.
Conflicts or alternatives considered: both as entity type (rejected — primary/secondary leaves already express it). Combining imported/native and fee-flywheel into dex_family (rejected — separate axes). pair_rank as taxonomy (rejected — dated derived).
Receipt IDs: R-CENSUS, R-TAX, R-MAP
Confidence: high
```

### TAX-GROK-010

```
Proposal ID: TAX-GROK-010
Change type: mapping
Proposed key and display label: labeling doctrine — decision rule, why-mapped one-liner, atom split, honest quiet
Parent domain: all (does not add a domain)
Definition: RH does not copy an AI/robotics stack. Classification craft, as observed on the Eregion live site (R-EREGION-LIVE) and as already required by taxonomy.md card contract: (1) define the parent in one sentence; (2) state the decision rule actually used; (3) give worked mappings plus a deliberate exclusion; (4) require a why-mapped one-liner per leaf; (5) map atoms, not brands; (6) dual placement is primary+secondary leaves, never a hybrid slug; (7) quiet cells stay quiet.
Includes: why-mapped one-liners on packets; origin rule (mint / pool / credit / wrap); Pons as launchpad with a Uniswap fee edge, not a DEX entity type.
Excludes: Copying L0–L9. Filing a brand as one leaf because it is famous. Inventing CDP + launchpad. Calling FOMO a launchpad. Calling every NVDA ticker an RWA product. Attributing rules to Eregion markdown that is not in this PR.
Distinguishing test: Can a reader, looking only at the card, say why this name sits here and what it is not — without a raw slug?
Motivating candidate slugs: pons (canonical), long, bankr, artificial-inu, up, swaphood, gmgn
Affected canonical slugs: stretched flat-category rows (tickeryard, website, bankr, sherwood, netnet, meridian, up, fables, what-the-hook)
Current fallback mapping: leaf registry without the explainer
Migration impact: packet Classification section (template change not in this PR). No census rewrite.
Conflicts or alternatives considered: treating taxonomy.md axes as sufficient without why-mapped (rejected — axes without decision rules become junk drawers).
Receipt IDs: R-EREGION-LIVE, R-TAX, R-TAX-INTRO, R-CENSUS
Confidence: high on the why-mapped / origin rule; the Eregion live site is an unconfirmed-authenticity craft reference, not an attached specification.
```

## 4. Canonical stress test

Do not rewrite these rows. Recommend controller review against the definitions above.

| Census slug | Current tree / category | Stress |
| --- | --- | --- |
| website | rwa-products/ad-space · NFT / treasury | Flat category and leaf disagree. |
| tickeryard | rwa-products/synthetic-asset · Oracle / infra | Same stretch. |
| bankr | agents/agent-execution · Agent / execution | Also a stock-paired factory. Secondary leaf, not a hybrid slug. |
| arrow | credit/cdp · CDP | Keep CDP primary; do not merge ArrowPad.fun (possible-match in this inventory). |
| what-the-hook | trading/hook-mev · Fee-routing protocol | Tree is better than the enum. TAX-GROK-006. |
| foxpad | launch/other-pad · Launchpad | Confirm the row is the pad, not the token. |
| safehood | launch/uni-pool-launch · Launchpad | Distinct from graduated SAFEHOOD token. |
| sherwood | privacy/private-transfer · Scanner / tooling | Tree vs enum disagree. |
| netnet | rwa-products/reserve-currency · RWA baskets | Leaf is more precise than the enum. |
| meridian | trading/perps-native · Prediction market | Secondary markets/prediction; not an entity type "both". |
| longshot vs long | both launch/stock-paired-factory | Confirm identity has not been double-filed. |
| stonks-fun | launch/other-pad | Holding pen until mechanism is shown. |
| up / fables / swaphood | trading/amm-native · Fee-routing protocol | Enum stretch. Tree is the AMM leaf; fee-routing is a mechanism tag, not a peer of Launchpad. |
| pons | launch/bonding-curve | Post-grad Uniswap fees are a fee edge, not a reason to retag Pons as a DEX. |

## 5. Rejected labels

| Label | Why rejected |
| --- | --- |
| `DeFi` / `RWA` / `hybrid` / `culture` as card titles | taxonomy.md introduction (R-TAX-INTRO) describes these as SuperGrok export categories. The SuperGrok artifact is not in this PR; the rejection cites taxonomy.md. |
| `SocialFi` as a domain | One motivating name (clan.tech). TAX-GROK-004 is on hold. |
| `hooks/` as a domain | Hook is a mechanism. The product job still needs a leaf (TAX-GROK-006). |
| `meme` / `culture coin` as a leaf | Graduation-token covers pad outputs. |
| One leaf per brand | Fails smallest vocabulary that separates mechanisms. |
| Popularity / Llama revenue as a taxonomy rule | GMGN would become a native DEX. |
| `media/` leaf for Hood Insider | Not a product. TAX-GROK-005. |
| Merging on ticker | TAX-GROK-007. |
| Copying an AI/robotics L0–L9 stack onto RH | Wrong stack. Lift why-mapped craft, not those layers. |
| Hybrid slug (`CDP + launchpad`) as the card title | Axes stay separate. Dual is primary + secondary leaves. |
| Entity type `both` | TAX-GROK-009 revision. Primary/secondary leaves already express multiple mechanisms. |
| `dex_family: imported \| native-amm \| flywheel-44` as one enum | Imported/native and fee-flywheel are separate axes. |
| `pair_rank` as a taxonomy field | Dated derived metric (volume snapshot + as-of), not a leaf. |
| Pons as a DEX because it collects Uniswap fees after graduation | Fee edge onto Uniswap. Pons remains a launchpad. |
| Minting a leaf for one weakly verified name | Conflicts with mint-or-match. Holds 001, 002 new leaves, 004. |

## 6. Open questions

1. **GIGA / Alandale / Orvex / Deepstate / Kipseli / LiquidCore / RobinSwap / SectorOne / BrownFi / Hoodit / Sheriff** — native AMMs or imported forks? Fit is ambiguous. Promotion requires a control-plane receipt, not Llama TVL.
2. **STORMM** — keep inside stonkbroker (recommended) or split once the hook has its own admin path?
3. **pools.fun vs pools.trade** — same pad, rename, or two products? Possible-match, not merged.
4. **Spark / IPOR Fusion / D2 / Morpho / Gami / Steakhouse** — stay dependencies. Does a RH-specific curator become a subject?
5. **MosaicETF redemption** — TAX-GROK-001 stays HOLD until redemption is reproduced and a second name exists.
6. **Meridian** — one slug with secondary prediction leaf, or two evidence records?
7. **`launch/other-pad`** — keep as an honest holding pen (recommended) with card title "Token launchpad, mechanism not classified".
8. **Flat category enum** — freeze and display from the tree, or migrate now? This assignment cannot touch schema.
9. **Packet Classification / why-mapped** — template change (`docs/templates/research-packet-v1.md`) is out of scope. Recommend controller add one-line rationale per leaf.
10. **Assignment `match_status` enum** — recorded `already-pending` for the 13 round-22 census-candidates because they are not net-new and not canonical. Controller may rename to `already-canonical` or move them out of `candidates`.

## 7. Standard view (every name)

Card contract from `docs/taxonomy.md` §2:

```
NAME · SYMBOL
<leaf display label or "Mechanism not classified">
<Lifecycle> · <Coverage: candidate|seed|full> · <Evidence: claimed|unverified|…>

<why-mapped one-liner>

Secondary: <leaf> · <leaf>
Role: subject | dependency | observe | graduation
Updated <date> · as-of <date>
```

Rules:

- Do not show a numeric score on candidate or insufficient-evidence rows.
- Do not show `other-pad`, `hybrid`, or raw slugs as the primary line.
- Graduation tokens stay graduation until an independent machine is evidenced.
- Dependencies cite the subject files; they do not get a standalone profile.
- Identity collisions stay visible as possible-match, never silently merged.
- Pad-coins show launched_on, quote_asset, quote_ca when known. Cohort rank, if shown, is a dated derived figure, not a category.

## 8. Mapping model (revised TAX-GROK-009)

Controller feedback applied.

### 8.1 Not entity types

`launchpad`, `dex`, `lending`, `pad-coin` are **reader-facing parent labels** derived from the primary leaf's domain, not a new `entity_kind` and not a stored type called `both`.

Multiple machines on one control plane = **primary leaf + secondary leaves** (taxonomy.md §5.4 and §5.6).

Pons: primary `launch/bonding-curve`. A Uniswap pool after graduation is Uniswap's book. Fees Pons collects from that book are a **fee edge**, not a second entity type and not automatic DEX membership.

### 8.2 Separate axes (not one dex_family enum)

| Axis | Values | Where it lives |
| --- | --- | --- |
| Product leaf | `trading/amm-native`, `trading/amm-imported`, … | taxonomy leaf |
| Nativeness | imported / native / unknown | `chain_scope` + role |
| Fee-flywheel | present or not | mechanism tag `fee-routing` on a DEX leaf (up, SwapHood) |
| Pair cohort rank | integer + as-of + basis | derived metric, not taxonomy |

### 8.3 Relationship fields worth keeping

On a pad-coin (usually `launch/graduation-token`):

- `launched_on` → pad slug
- `quote_asset` → official stock ticker
- `quote_ca` → registry contract

Do not file the stock token as the parent of the meme. Official NVDA is a dependency / quote leg. The parent of $AI is LONG.

`pair_rank` may be *displayed* from a dated volume snapshot (hoodfi/Uni, as-of). It is not a leaf, not an edge type, and not a reason to merge tickers.

### 8.4 Origin rule (TAX-GROK-010)

```
originates the mint          → launch leaf
originates the pool/book     → trading leaf
originates credit            → credit leaf
wraps someone else's mint/book → observe frontend (TAX-GROK-003)
output of a mint             → graduation-token + launched_on
official registry asset      → stock-token (dependency / quote leg)
```

Worked why-mapped lines (collector judgment; not census rewrites):

| Name | Why-mapped |
| --- | --- |
| Pons | Bonding-curve launchpad. Post-grad Uniswap fees are a fee edge, not a DEX retag. |
| LONG | Stock-paired factory; the mint is a pair against an official registry stock. |
| Bankr | Agent execution primary; stock-paired factory is a secondary leaf if evidenced. |
| Uniswap | Imported AMM; the book most pads graduate into. Dependency. |
| up / SwapHood | Native AMM leaf with mechanism fee-routing (flywheel), not a peer category of Launchpad. |
| Artificial Inu | Graduation token of LONG, quoted vs official NVDA — not the stock, not a protocol. |
| GMGN | Execution frontend wrapping venues it does not control. |
| FOMO / Pump.fun | Discovery surfaces, not pads. |
| Arrow | CDP. ArrowPad.fun is a different handle/machine (possible-match only). |
| GIGA | AMM leaf; native vs imported unknown. Llama TVL is not nativeness and not mainnet. |

## 9. Alignment notes (inventory vs this report)

Previous contradictions, resolved in this pass:

| Name | Was | Now (both files) |
| --- | --- | --- |
| RobinPad | inventory exact / matrix lossy + two proposals | lossy, TAX-GROK-002 + TAX-GROK-007, already-pending |
| GIGA | inventory robinhood-native exact / report ambiguous | ambiguous, chain_scope unknown, TAX-GROK-008 |
| Bricks | inventory exact / matrix lossy + TAX-GROK-002 | exact, yield/fee-router, no 002 (not a pad) |
| Floor | inventory exact / matrix lossy + TAX-GROK-001 | exact, tax-distributor, not a wallet-mirror |
| TwoFold | inventory exact no proposal / matrix + TAX-GROK-006 | exact yield/lp-manager + TAX-GROK-006 (hook job) |
| Canopy | inventory exact / matrix lossy + TAX-GROK-002 | exact uni-pool-launch (not the junk drawer) |

## 10. Source limits

- Blockscout 4663 remains blocked; no `exists_on_4663` flips.
- Llama protocol pages carry TVL + access time and are aggregator/unconfirmed. They do not support `lifecycle: mainnet`.
- 129 of 131 candidates are `lead-only`. identity-checked requires a confirmed-authenticity site/handle/repository cross-link; only `usdg` and `stock-tokens` have that (Robinhood docs).
- Eregion markdown is not attached. TAX-GROK-010 cites R-EREGION-LIVE (public site) and R-TAX / R-TAX-INTRO (this repo).
- SuperGrok export categories are cited from taxonomy.md, not from a SuperGrok file in this PR.
