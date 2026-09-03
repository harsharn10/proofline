---
slug: safehood
coverage: stub
methodology_version: proofline-v1.0
---

# Safehood — research record

## Identity

Safehood is classified as Uniswap-pool launchpad.

Uniswap v3 pool launchpad on Robinhood Chain: one transaction deploys a 1 billion-supply ERC-20, creates a 1% Uniswap v3 pool, and opens trading with 2% max-tx and max-wallet until a $40,000 market cap. @_safehood lists safehood.fun. The GitHub-claimed factory 0xe893… has non-empty code on chain 4663. Distinct from hood.fun's bonding-curve pad and Uniswap Labs' pools.trade.

Themes: launchpad, memecoin

## Deployment

Launchpad: 0xe893ca05D3F1235de22630504DcEa9e029294900 on robinhood-chain. [verified S7 S15 S17 S21]

TokenFactory: 0x5Cf777e19a6CD4B10c3Aa317a2B8E8bCC5F46364 on robinhood-chain. [verified S7 S17 S18]

FeeDistributor: 0x8E0b175a36ee0854Cc2dC7AeC4B3f90857A059ca on robinhood-chain. [verified S7 S17 S19]

Treasury: 0xD401Ed3C128eaE756323e7EAE27B40407c7d499B on robinhood-chain. [verified S7 S17 S20]

Safehood.fun (SAFEHOOD) pad token: 0x262b60Af42c46bD09c00069Cd0dCb2Ae0093034B on robinhood-chain. [verified S12 S24 S25]

## Control

Constructor `_grantRole`s DEFAULT_ADMIN, LIQUIDITY_MANAGER and OPERATOR to the admin argument (deployer 0x7817…a846). Minutes later those roles were granted to EOA 0x0315eCb5…5b60 and the deployer renounced. `hasRole` for 0x0315 is true on all three; eth_getCode is empty. README calls PLATFORM_ADMIN a team multisig. [verified S17 S22] [claim S7]

## Security

FeeDistributor and Treasury have bytecode on 4663; Blockscout `is_verified` is false (twin hashes only). README says the codebase has not been audited. [verified S19 S20] [claim S7]

## Engineering

_Research pending._

## Team

@_safehood is display name Safehood and lists Safehood.fun. GitHub user opengrid1 (Open Gird) publishes Launchpad with a Safehood README and the four addresses reproduced here; the GitHub profile has no twitter_username. GET of safehood.fun is a Vercel 404, so the handle-to-site link is one-sided this pass. [claim S7 S9 S28]

@safehoodonrh is a Pons token named SAFEHOOD at 0x663492ea…aE199. @SafeHood_ lists a third contract. Do not merge. [claim S26 S27]

MRD1 was created by this TokenFactory; its metadata uses the name Meridian. Census meridian is meridian.xyz perps. Keep that slug. [verified S23]

## Product and economics

`Launchpad.createToken` deploys a 1B ERC-20 through TokenFactory, initializes a Uniswap v3 pool at fee tier 10000, and mints a single-sided position the launchpad holds. Trading limits are 2% max-tx and 2% max-wallet until `graduationCapUsd` 40000e8. Starting cap is 2000e8. [verified S16 S17]

App-routed `buy`/`sell` take `TRADE_FEE_BPS` 100. Verified ProtocolConfig on this factory comments that the 1% is paid entirely to the creator. The 15 Jul rebuild post and the current GitHub ProtocolConfig instead split 80% creator / 20% platform. [verified S16] [claim S8 S11]

README states liquidity is protocol-managed, not locked or burned. `collectFees(token, liquidityBps)` may remove up to 100% of position principal. [verified S7 S16]

`tokenCount` and `totalLaunches` are 5. `totalTradeVolumeWei` is 0.018 ETH and `totalFeesWei` is 0.00018 ETH at block 53082629. Last `createToken` on 0xe893 is 2026-07-15T06:17:48Z. DexScreener returned no pairs for 0x262b60… or MRD1. DefiLlama has no protocol/safehood row. [verified S17]

Pad token 0x262b60… (Safehood.fun / SAFEHOOD) has 60 holders on Blockscout. That token was created through 0x475c…, not through 0xe893. [verified S24]

## Communications

@_safehood posts a 0.5% $SAFEHOOD burn [claim S13]

@_safehood posts that the website is back [claim S12]

@_safehood posts an RWA integration is coming [claim S14]

@_safehood posts a factory rebuild and 80/20 fees [claim S11]

## Findings

`LIQUIDITY_MANAGER_ROLE` can `decreaseLiquidity` on the protocol-held Uniswap v3 NFT and send the proceeds to Treasury. Verified ProtocolConfig on 0xe893 pays the 1% trade fee entirely to the creator; a later @_safehood post and the current GitHub ProtocolConfig say 80/20. safehood.fun returned 404 on this pass. [claim S28]

- One EOA holds DEFAULT_ADMIN, LIQUIDITY_MANAGER and OPERATOR with no code and no timelock observed. [verified S17 S22]
- `collectFees` can remove protocol-held Uniswap v3 principal to Treasury; MRD1 liquidity views returned 0. [verified S16 S17]
- Trade-fee split disagrees across verified 0xe893 source (100% creator) and later GitHub/X copy (80/20). [disputed S8 S11 S16]
- safehood.fun is 404; last @_safehood post is 2026-07-16. [claim S9 S28]
- Pad-branded SAFEHOOD 0x262b60… is not from the GitHub-claimed factory; a Pons token uses the same ticker. [verified S24 S26]

- Receipts: GitHub README and ProtocolConfig, @_safehood profile and posts, Blockscout API v2 for Launchpad/TokenFactory/FeeDistributor/Treasury/MRD1/0x262b60/Pons token plus create and grantRole txs, RPC views, Vercel 404, Bitquery hood.fun, Uniswap pools.trade blog were opened on 2026-09-03; excerpts are copied from those responses. [verified S7 S9 S15 S17]
- Numbers: 0.018 ETH is `totalTradeVolumeWei` on 0xe893, not a USD volume and not an all-chains figure. FEE_TIER 10000 is 1%, not the README 0.3% how-a-launch-works line. tokenCount 5 is the factory array, not DexScreener pairs. [verified S17]
- Adversarial: the strongest contrary reading is that this slug is hood.fun, pools.trade, census Meridian, or the Pons $SAFEHOOD token. Different factories, handles and mechanism (curve vs Uniswap v3 vs Uniswap v4 vs Pons) argue they stay separate. A second contrary reading is that 0xe893 is abandoned and the live pad is 0x475c/0xeADD; both were created by 0x7817…a846. [inference S15 S24 S26 S29 S30]

## Sources

- S7 — README — Safehood Token Launchpad.
- S8 — ProtocolConfig.sol (default branch).
- S9 — Safehood profile.
- S11 — We rebuilt Safehood on a brand new factory.
- S12 — Website is back.
- S13 — We burn .5% of $SAFEHOOD.
- S14 — Integrating with rwa project soon.
- S15 — Address 0xe893…4900 Launchpad.
- S16 — Launchpad verified source ProtocolConfig and collectFees.
- S17 — eth_getCode, constants, hasRole, tokenCount.
- S18 — Address 0x5Cf777…6364 TokenFactory.
- S19 — Address 0x8E0b…59ca FeeDistributor.
- S20 — Address 0xD401…499B Treasury.
- S21 — Launchpad creation tx 0x76e4794f….
- S22 — grantRole DEFAULT_ADMIN to 0x0315…5b60.
- S23 — Address 0x5e64880D…2DAD Meridian One (MRD1).
- S24 — Address 0x262b60Af…034B Safehood.fun / SAFEHOOD.
- S25 — Pad token creation tx 0x3c347ede….
- S26 — Address 0x663492ea…aE199 Pons SAFEHOOD.
- S27 — $SAFEHOOD profile.
- S28 — safehood.fun deployment not found.
- S29 — Robinhood meme coin launches — hood.fun.
- S30 — Pools.trade: A New Way to Launch on Robinhood Chain.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:15:00Z; methodology_version: proofline-v1.0.
