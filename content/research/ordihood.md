---
slug: ordihood
coverage: stub
methodology_version: proofline-v1.0
---

# ORDIHOOD — research record

## Identity

ORDIHOOD is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 launched on a Pons v2 ETH bonding curve that graduated into a locked Uniswap v4 ORDIHOOD/WETH pool. Traders buy and sell ORDIHOOD on that book. @_Ordihood_ and ordihood.art present numbered onchain inscriptions starting at #0, with the same contract in the account bio and the site bundle.

Themes: memecoin, nft, launchpad

## Deployment

ORDIHOOD token (PonsV2LauncherToken bytecode): 0xb27ac340261a8486b8f39dd23b8a95D434a071Bc on robinhood-chain. [verified S1 S4 S5]

PonsV2LaunchDeployer: 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [verified S3 S5]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S5 S6 S13]

PonsV2BondingCurve: 0x95750FFa17BBE279b47D2b98440AC1FcfB3455Af on robinhood-chain. [verified S2 S4 S5 S6]

PonsV2LaunchAndBuy: 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S4 S17]

V2LaunchLocker (graduated position): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S6 S16 S23]

ORDIHOOD ticker collision (Pons v2, not this row): 0x6E9ce427DC02725b0818BE94E087f62bd28a246F on robinhood-chain. [claim S14 S24]

## Control

token owner() reverts. Deployer 0x5B11…8F2B has no code and is also creatorFeeRecipient. Factory owner is SafeProxy 0x263e…19Dd. locker.isLocked is true. [verified S5 S6 S16]

## Security

PonsV2LauncherToken is fully verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, compiler v0.8.35). Verified source says deployer confers no privileges. No audit report URL was located this pass. [verified S1] [unknown]

## Engineering

_Research pending._

## Team

Official domain https://www.ordihood.art/ and handle @_Ordihood_ cross-link the CA: site JS embeds 0xb27a…71Bc and the handle; the handle bio embeds the same CA. Constructor socials match. t.me/ordihood is listed on the token and in the site bundle; the public preview has no CA. [verified S4 S10 S11]

A second launchAndBuy 24 minutes earlier from EOA 0x611A…b89b minted unverified Ordihood / ORDIHOOD at 0x6E9c…246F with twitter https://x.com/_Ordihood_ and empty website. Flag ca-collision. [verified S14 S24]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 clones PonsV2LauncherToken via PonsV2LaunchDeployer. launchAndBuy from 0x5B11…8F2B at 2026-09-02T21:43:38Z minted Ordihood / ORDIHOOD supply 1e9*1e18 onto curve 0x9575…55Af quoted against ETH. TokenLaunched graduationThreshold 4.2e18. [verified S4 S5 S6]

CurveCompleted / LaunchSwept at 2026-09-02T23:09:59Z then createGraduatedPool at 2026-09-02T23:10:00Z initialized Uniswap v4 poolId 0x93d0…a82a fee 0 hooks V2MemeHook 0xE5e7…e044. V2LaunchLocker PositionLocked 1572672 TokenSupplyLocked ~81.63e6 tokens. getLaunchedToken.phase is 2. Secondary ORDIHOOD/USDG books exist on DexScreener with far less liquidity than the ETH book. [verified S7 S8 S16 S25]

ORDIHOOD/WETH Uniswap v4 24h volume is 1319653.13 USD and reserve_in_usd is 40752.28 at 2026-09-03T05:46:54Z from the Gecko pool endpoint. fdv_usd is 187662.89. Gecko token volume_usd.h24 is 1378220.15 across all pools, not the WETH book. [claim S8 S9]

DexScreener same pair: liquidity.usd 40228.73, volume.h24 1329028.48, fdv/marketCap 182216. Blockscout holders_count 969. Pair created 2026-09-02T23:10:00Z. [claim S1 S7]

Assignment lead of Gecko ORDIHOOD/WETH liq ~$59,092 vol ~$1,178,232 was not the live print this pass; live Gecko reserve is $40,752. [claim S8]

## Communications

X account posted $ORDIHOOD ~$198K MC and $1M volume [claim S22]

@_Ordihood_ posted inscription #1000 landed [claim S21]

@_Ordihood_ posted an onchain auction of Inscription #0 [claim S19]

@_Ordihood_ posted a 0.05% transfer to 0xdead [verified S18 S20]

@_Ordihood_ posted 4-hour inscription stats [claim S20]

@_Ordihood_ posted the launch video and CA [claim S10]

## Findings

USD liquidity figures on the ORDIHOOD/WETH book count both sides against ETH, not USDG. Factory owner is a Pons Safe; the token owner() reverts. Ticker collision 0x6E9c…246F is a second Pons clone. A third-party claim URL on X used this CA. [claim S11]

- Ticker collision: unverified ORDIHOOD 0x6E9c…246F, holders_count 1. [verified S14]
- Pool USD reserve is ORDIHOOD plus ETH, not a USDG backstop. [claim S7 S8]
- Factory owner is a Pons Safe; token owner() reverts. [verified S6]
- Third-party claim URL on X used this CA (copypasta-pattern, third-party-link). [claim S26]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/curve/deployer/factory/LaunchAndBuy/locker, launchAndBuy 0x3d1a…52e1, LaunchSwept 0x195e…49a7, createGraduatedPool 0x96b1…b7fb, transfer-to-dead 0xee72…6814, RPC name/symbol/launchFactory/socials/getLaunchedToken/locker/curve, DexScreener tokens, Gecko search/pool/token, ordihood.art + JS bundle, t.me/ordihood, and @_Ordihood_ posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S11]
- Numbers: 1319653.13 is the Gecko ORDIHOOD/WETH pool 24h volume, not the 1378220.15 token all-pools figure. Reserve 40752.28 is that pool. DexScreener 1329028.48 / 40228.73 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that 0x6E9c…246F is the official ORDIHOOD because it launched first and its constructor twitter is https://x.com/_Ordihood_. That clone is unverified, holders_count 1, website empty; 0xb27a…71Bc is the verified token whose CA is in the official bio and site JS. [inference S10 S11 S14]

## Sources

- S1 — Token 0xb27a…71Bc Ordihood / ORDIHOOD.
- S2 — Address 0x9575…55Af PonsV2BondingCurve.
- S3 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S4 — launchAndBuy tx 0x3d1ad422…52e1.
- S5 — eth_getCode, name, symbol, launchFactory(), socials() on ORDIHOOD.
- S6 — factory getLaunchedToken, locker isLocked, curve graduated().
- S7 — latest/dex/tokens ORDIHOOD.
- S8 — ORDIHOOD/WETH Uniswap v4 pool.
- S9 — Ordihood token.
- S10 — Launch post: Ordinals rebuilt on Robinhood Chain.
- S11 — ordihood.art site and JS bundle.
- S13 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S14 — Token 0x6E9c…246F Ordihood / ORDIHOOD collision.
- S16 — createGraduatedPool tx 0x96b17fd8…b7fb.
- S17 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S18 — transfer-to-dead tx 0xee7274e7…6814.
- S19 — Auction of Inscription #0.
- S20 — 4 hours after launch / 0.05% MORE BURNT.
- S21 — #1000 landed.
- S22 — $ORDIHOOD pair hours old, ~$198K MC, $1M volume.
- S23 — Address 0x2674…4952 V2LaunchLocker.
- S24 — collision launchAndBuy tx 0x66b07354…e6da.
- S25 — LaunchSwept / CurveCompleted tx 0x195e8185…49a7.
- S26 — Claim-portal post embedding the CA.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:47:00Z; methodology_version: proofline-v1.0.
