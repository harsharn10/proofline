---
slug: op
coverage: stub
methodology_version: proofline-v1.0
---

# OP — research record

## Identity

OP is classified as Stock-paired token.

A one-billion-supply ERC-20 launched on a Pons v2 bonding curve and graduated into a Uniswap v4 pool quoted against SNDK. PonsV2LaunchAndBuy deploys Sandisk Optimus (OP) in one launchAndBuy call, seeds the curve against SNDK, then a later createGraduatedPool locks the OP/SNDK book. Traders buy and sell OP on Uniswap v4. SNDK is a Robinhood Stock Token rail. Distinct from packed CACHE/SNDK and from HDD/SNDK. No official site or handle was located this pass.

Themes: memecoin, stock-paired:SNDK, rwa, graduation

## Deployment

OP token (PonsV2LauncherToken): 0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 on robinhood-chain. [verified S1 S3 S20]

PonsV2LaunchFactory: 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S4 S5 S15]

V2LaunchLocker (locked graduation position): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [verified S4 S6 S19]

SNDK quote (pairToken / Robinhood Stock Token rail): 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 on robinhood-chain. [verified S3 S10 S14]

## Control

Token owner() reverts. Verified source says deployer is immutable reference data and confers no privileges. Factory owner() and locker owner() return SafeProxy 0x263e…19Dd. creatorFeeRecipient 0xcF96…2d1E is an unverified eip1967_beacon. [verified S3 S4 S20]

## Security

PonsV2LauncherToken is fully verified (contracts/src/v2/PonsV2LauncherToken.sol, compiler v0.8.35). V2LaunchLocker is partially verified (src/v2/V2LaunchLocker.sol). No audit report URL was located this pass. [verified S1 S19 S20] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle bidirectionally links to CA 0xF25C…3214. DexScreener websites the Sandisk campaign page and socials @sandiskoptimus. GET sandisk.com/en-gb/campaigns/op is a Twitch/SSD campaign titled OP Has Entered the Chat with no contract in the HTML. @sandiskoptimus Latest posts are Twitch and PAX, no CA. Launch params twitter field is @bestdevicook status 2094531106364416032. Flag unconfirmed-official and third-party-link. [claim S7 S12 S13 S21]

## Product and economics

PonsV2LaunchFactory 0x7eD5…EC7e deploys PonsV2LauncherToken via PonsV2LaunchDeployer. launchAndBuy from 0x7CE3…6aB at 2026-08-31T21:02:01Z minted Sandisk Optimus / OP supply 1e9*1e18 into bonding curve 0xa0c1…fC19 quoted against SNDK. factory.launchForwarder is PonsV2LaunchAndBuy 0xe33E…2948. [verified S5 S3 S4 S17]

createGraduatedPool at 2026-08-31T21:02:46Z initialized Uniswap v4 pool 0x62e9…dc67 (currency0 SNDK, currency1 OP, hooks V2MemeHook 0xE5e7…6044) and locked 81632653061224489250681771 OP in V2LaunchLocker positionId 1337575. Gecko launchpad_details.completed is true at that timestamp. Secondary OP/USDG and OP/ETH books exist on DexScreener with far less liquidity than the SNDK book. [verified S6 S4 S7 S9]

OP/SNDK Uniswap v4 24h volume is 515331.69 USD and liquidity.usd is 43031.71 at 2026-09-03T05:05:00Z from DexScreener. fdv/marketCap is 218253. [claim S7]

Gecko pool 0x62e9…dc67 volume_usd.h24 is 490339.593444704 and reserve_in_usd is 38151.4449 at 2026-09-03T05:08:00Z. Gecko token volume_usd.h24 is 492866.749174159 across all pools, not the SNDK book. Gecko token fdv_usd is 216681.40835762. Gecko pool fdv_usd 1712815.05680504 is the SNDK/OP book with SNDK as base. Blockscout holders_count 477. Pair created 2026-08-31T21:02:46Z. [claim S8 S9 S1]

## Communications

@redemptionarcc posted the OP CA against SNDK [claim S11]

@sandiskoptimus posted a live Twitch match [claim S12]

@sizzlezzzzzzzzz posted $OP -> $SNDK [claim S18]

## Findings

USD liquidity figures on the OP/SNDK book count both sides, and the quote side is SNDK, not USDG. Gecko names the pool SNDK / OP, so pool fdv_usd tracks the stock-token base, not OP. DexScreener websites and socials point at a Sandisk gaming campaign and @sandiskoptimus; neither surface embeds this CA, so comms stay unconfirmed-official. [claim S10]

- Quote token SNDK 0xB90A…6400 is a Robinhood Stock Token rail in GET /rhj/assets; OP is not that rail. [verified S10 S14]
- Pool USD reserve is OP plus SNDK, not a USDG or WETH backstop. [claim S7 S8]
- Gecko pool fdv_usd is SNDK-as-base, not OP fdv. [verified S8 S9]
- No official handle or domain this pass; Sandisk campaign and @sandiskoptimus are third-party-link / unconfirmed-official. [claim S7 S12 S13]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/locker/SNDK and both launch/grad txs, RPC name/symbol/deployer/launchFactory/isLocked/getLaunchedToken, DexScreener, Gecko pool/token (first GET 200), /rhj/assets, Sandisk campaign HTML, @sandiskoptimus, @redemptionarcc, and the launch-params tweet were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S7 S10]
- Numbers: 515331.69 is the DexScreener OP/SNDK 24h volume. Gecko pool 490339.59 is that pool. Gecko token 492866.75 is all-pools. Reserve 38151.44 is the Gecko pool; DexScreener liquidity.usd 43031.71 is the same pair, different aggregator. Gecko pool fdv 1.71M is not OP fdv. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that OP is an official Sandisk product because DexScreener websites sandisk.com and socials @sandiskoptimus. The campaign HTML has no CA, Latest posts have no CA, and the token is a Pons v2 launchAndBuy from EOA 0x7CE3…6aB. [inference S5 S12 S13]

## Sources

- S1 — Token 0xF25C…3214 Sandisk Optimus / OP.
- S3 — eth_getCode / name / symbol / deployer at block 53156766.
- S4 — locker isLocked / factory getLaunchedToken / PoolGraduated logs.
- S5 — launchAndBuy tx 0xef087db2…7e6b.
- S6 — graduation tx 0x8f580f79…6f84.
- S7 — latest/dex/tokens OP Sandisk Optimus.
- S8 — OP/SNDK pool 0x62e9…dc67.
- S9 — Sandisk Optimus token.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — Post about $OP as the mascot of the year's best-performing stock.
- S12 — LIVE NOW OP faces TenZ / Aramori / Doublelift.
- S13 — OP Has Entered the Chat campaign.
- S14 — Token 0xB90A…6400 Sandisk Corporation • Robinhood Token / SNDK.
- S15 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S17 — TokenLaunched log for OP.
- S18 — $OP -> $SNDK.
- S19 — Address 0x2674…4952 V2LaunchLocker.
- S20 — PonsV2LauncherToken verified source.
- S21 — Sandisk turned OP into an internet character.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:15:00Z; methodology_version: proofline-v1.0.
