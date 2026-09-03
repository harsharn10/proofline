---
slug: golden
coverage: stub
methodology_version: proofline-v1.0
---

# GOLDEN — research record

## Identity

GOLDEN is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned through Pons v2 into a Uniswap v4 pool quoted against DJT. PonsV2LaunchAndBuy launchAndBuy deploys The Golden Age (GOLDEN) and seeds the curve; createGraduatedPool then locks the GOLDEN/DJT book. Traders buy and sell GOLDEN on Uniswap v4 after graduation. No bidirectional official site or handle was located this pass.

Themes: memecoin, stock-paired:DJT, rwa, graduation

## Deployment

GOLDEN token (PonsV2LauncherToken): 0xdFee8e117DfEF700D7C41170f67c4A591445217a on robinhood-chain. [verified S1 S2 S3]

PonsV2LaunchFactory: 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S4 S5 S15]

V2LaunchLocker (top holder / locked position): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [verified S4 S12 S16]

DJT Robinhood Stock Token (pair quote / rail): 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 on robinhood-chain. [verified S7 S10 S14]

## Control

Token owner() reverts. Factory owner() and locker owner() return SafeProxy 0x263e…19Dd. Deployer 0x3251E169…cf8f3 has no code. getLaunchedToken.creatorFeeRecipient is unverified 0x5b7FeA1B…E5EE, which is not the launchAndBuy param 0x3251E169…cf8f3. [verified S3 S4 S5]

## Security

PonsV2LauncherToken and PonsV2LaunchFactory are fully verified on Blockscout (compiler v0.8.35). V2LaunchLocker is partially verified; source says there is no collectFees and no withdrawal. No audit report URL was located this pass. [verified S12 S15 S18] [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener info.websites is empty. token.socials() website is https://www.whitehouse.gov/crypto/, which is not a token site. token.socials() twitter and DexScreener info.socials list x.com/thegoldenagerh; the X bio does not embed the CA. Pons launchpad HTML titles The Golden Age ($GOLDEN). Flag unconfirmed-official and third-party-link. [claim S7 S13 S17]

Census Pons is the pad that created the token. Packed dollar-1 is a different Pons v2 DJT graduation at 0xdCe5…e6da. Packed bigly is a different Pons v2 DJT graduation at 0x73114aBD…7c04. Census Artificial Inu / LONG / L4VA share the stock-paired neighborhood only. [verified S5 S15]

## Product and economics

PonsV2LaunchFactory 0x7eD5…C7e clones PonsV2LauncherToken. launchAndBuy from 0x3251E169…cf8f3 at 2026-09-03T01:20:52Z minted The Golden Age / GOLDEN supply 1e9*1e18 against pairToken DJT. factory launchForwarder is PonsV2LaunchAndBuy 0xe33E…2948. TokenLaunched names curve 0xfe9b…0ec3. [verified S5 S3 S20]

createGraduatedPool from 0x49BbF2b7…73d2 at 2026-09-03T01:21:19Z initialized Uniswap v4 poolId 0xf978…45b3 (currency0 DJT, currency1 GOLDEN, hooks V2MemeHook 0xE5e7…e044) and locked positionId 1581610 in V2LaunchLocker. Gecko launchpad_details.completed true at that timestamp. Secondary GOLDEN/ETH books exist on DexScreener with far less liquidity than the DJT book. [verified S6 S7 S9]

djt/GOLDEN Uniswap v4 24h volume is 285202.227274197 USD and reserve_in_usd is 6819.5089 at 2026-09-03T05:24:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 6115.596682247. Gecko token volume_usd.h24 is 285303.62881547 across all pools, not the DJT book. Gecko pool fdv_usd 1463849.6951331 is DJT-as-base, not GOLDEN fdv. [claim S8 S9]

DexScreener same pair: liquidity.usd 6417.63, volume.h24 308330.74, fdv/marketCap 5948. Blockscout holders_count 177. Pair created 2026-09-03T01:21:19Z. Assignment lead of liq ~$30,235 / vol ~$274,952 was not reproduced at this as_of; live DexScreener liq is $6418 and vol is $308k. [claim S1 S7]

## Communications

@thegoldenagerh posted The golden age has begun [claim S13]

@dexpaidpanther flagged The Golden Age (GOLDEN)/DJT Dex paid [claim S19]

## Findings

USD liquidity figures on the GOLDEN/DJT book count both sides, and the quote side is DJT, not USDG. Gecko pool fdv_usd prices DJT as base and is not GOLDEN fdv. No bidirectional official handle was located, so comms surfaces stay unconfirmed-official. Assignment lead of ~$30k liq was not reproduced at this as_of; live DexScreener liquidity.usd is $6418. [claim S10]

- Quote token DJT 0x1D11…4516 is the rail in GET /rhj/assets; GOLDEN is not a Robinhood Stock Token. [verified S10 S14]
- Pool USD reserve is GOLDEN plus DJT, not a USDG or WETH backstop. [claim S7 S8]
- Gecko pool fdv_usd prices DJT as base and must not be read as GOLDEN market cap. [claim S8 S9]
- No bidirectional official handle or domain this pass; Telegram was not located; X is unconfirmed-official. [claim S7 S13]
- creatorFeeRecipient 0x5b7FeA1B…E5EE is unverified. [verified S4]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/locker/DJT and both launch/grad txs, RPC name/symbol/launchFactory/socials/isLocked/getLaunchedToken, DexScreener, Gecko pool/token (first GET HTTP 200), /rhj/assets, Pons launchpad HTML, @thegoldenagerh, and the Dex-paid post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S8 S10]
- Numbers: 285202.23 is the Gecko djt/GOLDEN pool 24h volume, not the 285303.63 token all-pools figure. Reserve 6819.51 is that pool. DexScreener 308330.74 / 6417.63 is the same pair, different aggregator. GOLDEN fdv is DexScreener 5948 / Gecko token 6116, not Gecko pool 1.46M. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that GOLDEN is packed dollar-1, packed bigly, or an official Trump Media product. dollar-1 is 0xdCe5…e6da launched 2026-09-02; bigly is 0x73114aBD…7c04 launched 2026-08-15; this token is 0xdFee…217a launched 2026-09-03T01:20:52Z; GET /rhj/assets has DJT as the rail and no GOLDEN row. [inference S5 S10]

## Sources

- S1 — Address 0xdFee…217a The Golden Age / GOLDEN.
- S2 — Token 0xdFee…217a holders_count.
- S3 — eth_getCode, name, symbol, launchFactory, socials on 0xdFee…217a.
- S4 — factory getLaunchedToken, locker isLocked, approvedPairTokens(DJT).
- S5 — launchAndBuy tx 0x35be51dd…31e6.
- S6 — createGraduatedPool tx 0x4b71fe7a…0bb2.
- S7 — latest/dex/tokens GOLDEN.
- S8 — djt/GOLDEN Uniswap v4 pool.
- S9 — The Golden Age token.
- S10 — GET /rhj/assets Stock Token registry.
- S12 — V2LaunchLocker verified source.
- S13 — The golden age has begun.
- S14 — Token 0x1D11…4516 DJT Robinhood Token.
- S15 — Address 0x7eD5…C7e PonsV2LaunchFactory.
- S16 — Address 0x2674…4952 V2LaunchLocker.
- S17 — Pons launchpad page for GOLDEN.
- S18 — PonsV2LauncherToken verified source.
- S19 — Dex paid: The Golden Age (GOLDEN) / DJT.
- S20 — TokenLaunched log for GOLDEN.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:28:00Z; methodology_version: proofline-v1.0.
