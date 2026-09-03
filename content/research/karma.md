---
slug: karma
coverage: stub
methodology_version: proofline-v1.0
---

# KARMA — research record

## Identity

KARMA is classified as Launchpad-graduated token.

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 KARMA/RDDT pool. Traders buy and sell Reddit Founder Cat (Karma) against the Reddit • Robinhood Token on that book. RDDT is the quote rail, not this profile. Distinct from LongLauncher Karma Points 0x55f9…1e18 on the same rail.

Themes: memecoin, stock-paired:RDDT, rwa, launchpad

## Deployment

KARMA token (PonsV2LauncherToken bytecode, Reddit Founder Cat): 0xb1B800835f93d40D43e3B3467494b9155364baC3 on robinhood-chain. [verified S1 S3 S5]

PonsV2LaunchDeployer: 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S16]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S4 S5 S17]

PonsV2BondingCurve: 0x8b9F9beeA986E60f1d629eEE48DA78e3e341B1c3 on robinhood-chain. [verified S4 S5 S6]

PonsV2LaunchAndBuy (create tx to): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S3 S18]

V2LaunchLocker (isLocked true for this token): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S5 S20]

RDDT Stock Token (pair quote / launch pairToken; rail, not this subject): 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C on robinhood-chain. [verified S5 S9 S13]

KARMA ticker collision (LongLauncher Karma Points, not this row): 0x55f9ec832384F737d5ad57FC0c314ddc8Bf41e18 on robinhood-chain. [claim S14 S15 S19]

LongLauncher (collision create tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S15]

DopplerERC20V1 implementation (collision token): 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S14 S15]

## Control

token owner() reverts. Deployer 0xFf207C…55d4 has no code. transferCreatorFeeRecipient at 2026-09-02T12:50:56Z called PonsV2LaunchFactory from that EOA. [verified S5 S12]

## Security

PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and V2LaunchLocker are verified on Blockscout. This token CA is_verified false (3248 B, not an EIP-1167 proxy). No audit report URL was located this pass. [verified S1 S16 S17 S18 S20] [unknown]

## Engineering

_Research pending._

## Team

@redditcathood bio contains CA 0xb1b800…bac3 and $Karma; DexScreener info.socials is that handle. Constructor socials twitter is @CrankDeGod status 2095131157675614533 and website is youtube.com/watch?v=60QywS3kwXE. Flag third-party-link on the YouTube URL. A netlify vote URL attached the CA; flag copypasta-pattern. [claim S5 S7 S10 S11 S21]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0xFf207C…55d4 at 2026-09-02T12:47:28Z minted Reddit Founder Cat / Karma supply 1e9*1e18 onto PonsV2BondingCurve 0x8b9F…B1c3 quoted against pairToken RDDT 0x05b37F…F4C with quoteIn 2414500000000000000. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 42347152428810721502. [verified S3 S4 S5]

CurveCompleted / LaunchSwept tx 0x396adb9c…8c14 at 2026-09-02T12:56:29Z swept quoteOut 42347152428810721609 RDDT and tokenOut 285714285714285714288123912. DexScreener tokens/v1 and Gecko pool_created_at 2026-09-02T12:56:30Z name Uniswap v4 poolId 0x35183580…65a5 (Gecko dex pons-v2-dex). V2LaunchLocker isLocked(token) true. Secondary KARMA/USDG and KARMA/ETH books exist on DexScreener with far less liquidity than the RDDT book. [verified S6 S7 S8 S20]

KARMA/RDDT Uniswap v4 24h volume is 1281710.68 USD and liquidity.usd is 15134.13 at 2026-09-03T04:50:00Z from DexScreener tokens/v1. fdv/marketCap is 42821. Blockscout holders_count 771. Pair created 2026-09-02T12:56:30Z. [claim S1 S7]

Gecko same pool volume_usd.h24 is 1154172.47. reserve_in_usd is -667.97 (negative; not TVL). fdv_usd is 1479432; Gecko token fdv_usd is 224123. Do not collapse with DexScreener 42821 / 15134.13. Assignment lead of ~$15k liq / ~$1.28M vol matches the DexScreener tokens/v1 RDDT book. Collision 0x55f9…1e18 DexScreener liq 35014.53 vol.h24 308775.8. [claim S7 S8 S19]

## Communications

@redditcathood posted $KARMA with CA in the bio [claim S10]

@CrankDeGod posted the Reddit cat lore and CA [claim S11]

## Findings

USD liquidity figures on the KARMA/RDDT book count both sides, and the quote side is RDDT, not USDG. Ticker-only pairing is not identity: 0x55f9…1e18 is a ca-collision. Constructor/DexScreener website is a YouTube watch URL (third-party-link). Gecko prints a negative reserve and an fdv about 30x DexScreener; those slices are not the same number. [claim S9]

- Quote token RDDT 0x05b37F…F4C is a Stock Token rail; pool USD figures count KARMA plus RDDT. [verified S9 S13]
- Same-ticker LongLauncher Karma Points 0x55f9…1e18 is a ca-collision with deeper displayed liquidity and no DexScreener socials. [verified S14 S15 S19]
- Constructor/DexScreener website is YouTube. Flag third-party-link. [claim S5 S7]
- Token source is unverified on this CA. No audit report URL this pass. [verified S1] [unknown]
- Gecko reserve is negative and fdv disagrees with DexScreener by more than 10x. [claim S8]

- Receipts: Blockscout token/factory/buy/deployer/RDDT/collision and launchAndBuy / LaunchSwept txs, RPC name/symbol/launchFactory/curve/isLocked, DexScreener tokens/v1 + search, Gecko first GET 200 then pool, /rhj/assets, @redditcathood, and @CrankDeGod were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S9 S10]
- Numbers: 1281710.68 is the DexScreener KARMA/RDDT pool 24h volume, not Gecko token all-pools 1175430. Reserve for TVL is DexScreener 15134.13; Gecko reserve_in_usd is negative and is not used as TVL. Collision 35014.53 / 308775.8 is a different CA. [claim S7 S8 S19]
- Adversarial: the strongest contrary reading is that 0x55f9…1e18 is the canonical KARMA because it has more DexScreener liquidity. @redditcathood bio and DexScreener socials pin 0xb1B800…baC3; 0x55f9…1e18 has empty info.socials and is a LongLauncher Doppler clone. [inference S7 S10 S14 S19]

## Sources

- S1 — Token 0xb1B800…baC3 Reddit Founder Cat / Karma.
- S3 — launchAndBuy tx 0xe2b04fb3…428c.
- S4 — TokenLaunched log for KARMA.
- S5 — eth_getCode, name, symbol, launchFactory() on KARMA.
- S6 — CurveCompleted / LaunchSwept tx 0x396adb9c…8c14.
- S7 — tokens/v1 KARMA 0xb1B800…baC3.
- S8 — KARMA/RDDT Pons V2 pool.
- S9 — GET /rhj/assets Stock Token registry.
- S10 — guess $KARMA was always meant to be.
- S11 — Reddit founder cat lore.
- S12 — transferCreatorFeeRecipient tx 0x0c21798f…736b.
- S13 — Token 0x05b37F…F4C RDDT.
- S14 — Collision token 0x55f9…1e18 Karma Points.
- S15 — LongLauncher create tx 0x7fc83834…07fb.
- S16 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S17 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S18 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S19 — search q=KARMA RDDT.
- S20 — V2LaunchLocker isLocked(token).
- S21 — Netlify vote URL with KARMA CA.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:54:00Z; methodology_version: proofline-v1.0.
