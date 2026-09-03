---
slug: scopl
coverage: stub
methodology_version: proofline-v1.0
---

# SCOPL — research record

## Identity

SCOPL is classified as Trading aggregator.

SCOPL is a non-custodial Uniswap V3/V4 one-tick limit-order layer: a user sets a target price, the order is minted as a concentrated-liquidity position NFT that stays in that wallet, and fills pay pool fees. The app at scopl.live/trade places those orders on Robinhood Chain. $SCOPL is a Pons V2-launched token; @scopl_live runs the site.

Themes: nft, hook, rwa, tooling

## Deployment

SCOPL token (PonsV2LauncherToken; name scopl.live): 0xaA40e79E987517f7462bF79315B8A118799B04E3 on robinhood-chain. [verified S11 S12 S13 S14]

ScoplLimitOrderManager V3 (API and guide current live): 0xf4badBc5bea19E94f61084172f7b68383166CDd7 on robinhood-chain. [verified S8 S10 S15 S36]

ScoplV4LimitOrderManager (API and guide current live): 0xcdD1E3BC873e5Ff7cA974b7212D6031fe853Cd42 on robinhood-chain. [verified S8 S10 S16 S37]

ScoplFeeRouter: 0x7d3ea31b89804d7Dd755781d56eab7128A8b4D48 on robinhood-chain. [claim S8 S17]

ScoplReferralRewards: 0x4eE310BCB577afB4beEcDA9422764B7A8E4e04a3 on robinhood-chain. [claim S8 S18]

ScoplRevenueDistributor: 0x0A552810F73892216Ae755A027D4AD3efdE3Ca87 on robinhood-chain. [claim S8 S19]

ScoplBuybackVault: 0x885C479cD30d02f7a7a09dC785b577B23ee27a00 on robinhood-chain. [claim S8 S20]

ScoplRouterSwapAdapter: 0x168567e09A4835D80589BCDE3F1dA5c930D5d9e7 on robinhood-chain. [claim S8 S21]

ScoplZapRouter: 0x34BE29754d2538B31B556A7d2253a98917468c49 on robinhood-chain. [claim S8 S22]

ScoplOrderPolicy (verified on 4663; omitted from the eight-contract guide): 0xfA7a06b158eCf40232A4e1c976160be592391646 on robinhood-chain. [claim S23 S25]

## Control

Every guide contract checked this pass was created by EOA 0x7F4a8ff98B2b2996dC96D95A358Ecf9f7473b397, which is not a contract. The V3 manager constructor sets that address as the Ownable owner. Live owner() was not eth_called (RPC 403). [inference S15 S16 S38 S40]

Verified manager source and the API ABI expose two-step transferOwnership / acceptOwnership, owner-only fee schedule setters, pause / executionPause, and V4 hook allowlisting. No timelock address appears on the guide. SpyWolf's 30 Aug V2 report states two-step ownership, an intended governance Safe, guardian pause on the distributor and buyback vault, and no Critical or High findings; it also says the suite was already live and not meant to be redeployed absent a major issue. [claim S10 S25 S38]

$SCOPL itself is a PonsV2LauncherToken: immutable deployer/curve/factory references, ERC-20 burnable, no owner role on the token. [verified S13 S14]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

The token constructor encodes twitter https://x.com/scopl_live and telegram https://t.me/scopl_live. The @scopl_live bio repeats the 4663 token address. No legal name, KYC artifact or official GitHub repository was listed on the site, guide, docs or X bio. The Pons launch deployer 0xcb484494… is a separate EOA from the SCOPL contract deployer 0x7F4a8ff9…. [claim S11 S13 S14 S40]

## Product and economics

A SCOPL limit order is a one-tick-spacing, single-sided Uniswap V3 or V4 liquidity position. The user chooses tokenIn, amount, tokenOut, a human price (tokenOut per tokenIn) and Free or Rewards mode; the API snaps that price to the nearest executable tick range and returns unsigned calldata. The wallet holds the position NFT; SCOPL does not take custody of principal. [claim S7 S8 S9 S35]

Free mode routes generated LP fees to the protocol and charges 0% on output. Rewards mode leaves LP fees with the user and charges a protocol fee that the guide states as 1.5% below 50k SCOPL, then 1.2% / 0.75% / 0.3% at 50k / 250k / 1M. Free mode is described as referral-gated. A small ETH reserve pays keeper gas and is returned on cancel. [claim S8 S10 S35]

Collected interface fees are split 30% referral, 50% buyback, 20% operations; with no referrer the referral share moves to operations. Buyback assets accumulate in ScoplBuybackVault. The guide also publishes a pool explorer, zap-in router and LP fee-claim router (5% on claimed earnings, 0% with 1,000+ SCOPL). [claim S8]

The public config API on chain 4663 names ScoplLimitOrderManager 0xf4badBc5… for V3 and ScoplV4LimitOrderManager 0xcdD1E3BC… for V4, matching the guide. [verified S8 S10 S15 S16]

Blockscout reports 1,342 SCOPL holders and a 1e9 × 1e18 total supply as of this pass. [verified S12]

The listed Uniswap v4 SCOPL/ETH pool 0x865147… (pair created 2026-08-18) showed liquidity.usd 144283.84, volume.h24 220293.98 and marketCap 913350. That is a pair slice, not protocol TVL. scopl.live/pools' $156.7M TVL figure ranks chain-wide Uniswap pools (WETH/USDG first), not SCOPL. DefiLlama has no scopl protocol row. [claim S24 S33 S39]

The live V3 manager has 8,102 transactions; the live V4 manager has 1,644. @scopl_live posted competition figures of $1,165,820 executed volume, 2,216 trades and 54 traders on 2026-08-31; those numbers were not reproduced from the managers this pass. [verified S36 S37]

## Communications

Account posts V2 almost here, Discord and Telegram [claim S26]

Account posts V2 loading bar at 98.7 percent [claim S27]

Competition closed; account posts $1.16M volume [claim S28]

Account posts SpyWolf V2 audit with no major findings [claim S30]

Account posts orders as concentrated-liquidity positions [claim S31]

## Findings

The position NFT is only as safe as the manager's approval and execute/cancel path. Owner-set fee tiers, pause flags and V4 hook allowlists can change order economics or block execution without a timelock on the verified source read this pass. [claim S7]

A user who follows a third-party "holder portal" URL that wraps the official token address is leaving the scopl.live origin. Older manager clones remain on chain beside the addresses the guide names. [claim S7]

- Live owner() of the managers, distributor and buyback vault was not reproduced; constructor ownership is one EOA with no timelock in the source read. [inference S38 S40]
- Official X still describes V2 as almost here while the named V2 managers already execute on 4663. [disputed S26 S36]
- ScoplOrderPolicy is verified on chain and named in the audit but omitted from the eight-contract guide. [verified S8 S23]
- At least three additional ScoplLimitOrderManager and four additional ScoplV4LimitOrderManager contracts exist on 4663 beside the API addresses. [claim S15]
- Third-party posts pointed at crypto.cryptolot.lol with the official token address; that host is not scopl.live. [claim S32]
- Address 0x07f5B682… is not a contract on 4663. [verified S34]
- No official source repository was located. [unknown]

- Receipts: every URL above was opened on 2026-09-02 and its excerpt copied from the page or API JSON. [verified S7 S8 S10 S12 S24 S25]
- Numbers: holders are the Blockscout token field; volume, market cap and TVL are the DexScreener SCOPL/ETH v4 pair slice, not all-pairs and not the pool-explorer chain total. [claim S12 S24 S39]
- Adversarial: the strongest contrary reading is that SCOPL is only a Pons-launched memecoin with a marketing site, or that V2 is still undeployed because X says "almost here". The verified PonsV2LauncherToken, the guide/API manager addresses with thousands of transactions, and the Uniswap v4 SCOPL/ETH pool argue against both. A weaker contrary reading is that the extra manager clones are the live product; the public API and guide name 0xf4badBc5… and 0xcdD1E3BC… only. [inference S8 S10 S14 S15 S16 S24]

## Sources

- S7 — scopl.live homepage.
- S8 — SCOPL Guide: eight live contracts.
- S9 — Why Yield-Bearing Limit Orders?.
- S10 — limit-orders config API v1.1.0.
- S11 — @scopl_live profile.
- S12 — Token 0xaA40e79E….
- S13 — Verified source PonsV2LauncherToken.
- S14 — Creation tx 0xf0a88e54… launchAndBuy.
- S15 — ScoplLimitOrderManager 0xf4badBc5….
- S16 — ScoplV4LimitOrderManager 0xcdD1E3BC….
- S17 — ScoplFeeRouter 0x7d3ea31b….
- S18 — ScoplReferralRewards 0x4eE310BC….
- S19 — ScoplRevenueDistributor 0x0A552810….
- S20 — ScoplBuybackVault 0x885C479c….
- S21 — ScoplRouterSwapAdapter 0x168567e0….
- S22 — ScoplZapRouter 0x34BE2975….
- S23 — ScoplOrderPolicy 0xfA7a06b1….
- S24 — SCOPL token pairs.
- S25 — SCOPL Security Audit Report 30 Aug 2026.
- S26 — SCOPL V2 is almost here.
- S27 — SCOPL V2 Loading 98.7%.
- S28 — Competition wrap $1,165,820 volume.
- S30 — SCOPL V2 has been audited.
- S31 — Every SCOPL order is a CL position.
- S32 — cryptolot.lol holder portal post.
- S33 — protocol/scopl.
- S34 — 0x07f5B682… on 4663.
- S35 — Limit Orders overview.
- S36 — V3 manager counters.
- S37 — V4 manager counters.
- S38 — V3 manager creation tx.
- S39 — Pool explorer rankings.
- S40 — Deployer EOA 0x7F4a8ff9….

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T00:15:00Z; methodology_version: proofline-v1.0.
