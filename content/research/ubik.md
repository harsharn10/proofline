---
slug: ubik
coverage: stub
methodology_version: proofline-v1.0
---

# UBIK — research record

## Identity

UBIK is classified as Stock-paired token.

A one-billion-supply ERC-20 launched on a Pons v2 bonding curve quoted against GLD, then graduated into a Uniswap v4 UBIK/GLD pool. PonsV2LaunchFactory deploys ubik (UBIK) in one launchToken call with pairToken set to the Robinhood GLD Stock Token. Traders buy and sell UBIK on Uniswap v4. GLD is a rail. No official site or handle was located this pass; ubik.gold and @ubik_gold are unconfirmed-official.

Themes: memecoin, stock-paired:GLD, rwa

## Deployment

UBIK token (PonsV2LauncherToken bytecode; explorer name ubik): 0x812486EAea648819853F8E372dc9f1516C7868Bd on robinhood-chain. [verified S1 S5 S18]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S5 S6 S21]

Pons v2 bonding curve (token curve / TokenLaunched curve): 0x0a4D44200dD5eFefD065f59045d35b45C7eFed37 on robinhood-chain. [claim S5 S18]

GLD Stock Token (launch pairToken / Uniswap v4 quote): 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e on robinhood-chain. [verified S6 S12 S16]

V2LaunchLocker (GraduationTokensPermanentlyLocked): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S20]

## Control

token owner() reverts. factory owner() is Pons Safe 0x263e…19Dd. Deployer 0xc08c…c362 has no code. [verified S5 S6]

## Security

PonsV2LaunchFactory is verified on Blockscout (contracts/src/v2/PonsV2LaunchFactory.sol, compiler v0.8.35). The UBIK token page is_verified false; eth_getCode matches a verified PonsV2LauncherToken except the immutable deployer slot. Curve source is unverified. No audit report URL was located this pass. [verified S2 S3] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. On-chain socials() is five empty strings. ubik.gold titles 24/7 synthetic subconscious with no contract in the HTML; @ubik_gold uses the same bio and had no posts this pass. @xDesir_arman posted both as live. Flag unconfirmed-official and third-party-link. [claim S7 S13 S14 S19]

## Product and economics

PonsV2LaunchFactory 0x7eD5…C7e launchToken from 0xc08c…c362 at 2026-09-01T15:16:06Z minted ubik / UBIK supply 1e9*1e18 into curve 0x0a4D…ed37 with pairToken GLD. launchFactory() on the token returns that factory. deployer() returns the same 0xc08c…c362. description() is 24/7 synthetic subconscious. [verified S4 S5 S18]

Graduation tx 0x652f…2bef at 2026-09-01T15:54:40Z registered Uniswap v4 poolId 0x1f28…e676 on V2MemeHook with quoteToken GLD. GraduationTokensPermanentlyLocked sent about 81.63M UBIK to V2LaunchLocker 0x2674…4952. factory.pairTokenEconomics(GLD) graduationThreshold is ~24.94e18 GLD. Secondary UBIK/USDG and UBIK/ETH books exist on DexScreener. [verified S6 S7 S20]

UBIK/GLD Uniswap v4 24h volume is 2574070.31 USD at 2026-09-03T03:38:00Z from the Gecko pool endpoint. fdv_usd is 8521492.86. Gecko token volume_usd.h24 is 6435628.20 across all pools, not the GLD book. Gecko reserve_in_usd on the GLD pool was negative this pass. [claim S8 S9]

DexScreener same pair: liquidity.usd 265353.47, volume.h24 2538287.72, fdv/marketCap 8450302. Blockscout holders_count 6144. Pair created 2026-09-01T15:54:40Z. A second UBIK/GLD v4 pool 0x6914…8478 had $232 liquidity this pass. [claim S1 S7]

## Communications

@xDesir_arman posted ubik.gold and @ubik_gold with the CA [claim S13 S14 S19]

## Findings

USD liquidity figures on the UBIK/GLD book count both sides, and the quote side is GLD, not USDG. Gecko reserve_in_usd on this pool was negative this pass, so the DexScreener print is the pool TVL used here. Several other contracts on 4663 reuse the UBIK ticker. No official handle was located, so comms surfaces stay unconfirmed-official. [claim S12]

- Quote token GLD 0xC9a9…FC4e is a Robinhood Stock Token rail; pool USD reserve is UBIK plus GLD, not a USDG backstop. [verified S12 S16]
- Gecko UBIK/GLD reserve_in_usd was negative this pass; do not treat that field as TVL. [claim S8]
- ca-collision: other UBIK tickers exist on 4663; live GLD book is 0x8124…68Bd. [verified S22]
- No official handle or domain this pass; ubik.gold / @ubik_gold are unconfirmed-official. [claim S7 S13 S14]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/GLD and launch/graduation txs, RPC name/symbol/launchFactory/deployer/curve/owner/pairTokenEconomics, DexScreener, Gecko pool/token/info, /rhj/assets, ubik.gold, @ubik_gold, and the @xDesir_arman post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 2574070.31 is the Gecko UBIK/GLD pool 24h volume, not the 6435628.20 token all-pools figure. DexScreener 2538287.72 / 265353.47 is the same pair, different aggregator. Gecko reserve was not used. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that UBIK is an official SPDR/GLD product or the Pons protocol itself. /rhj/assets lists GLD as a Stock Token rail, Pons is the pad, and no official handle or domain was located. CASHBIRD/GLD and SCHIFFY/GLD are different token addresses. [inference S10 S11 S12]

## Sources

- S1 — Token 0x8124…68Bd ubik / UBIK.
- S2 — Address 0x3786…5508 PonsV2LauncherToken (bytecode compare).
- S3 — Address 0x7eD5…C7e PonsV2LaunchFactory.
- S4 — launchToken tx 0x6710677f…52fc.
- S5 — eth_getCode, name, symbol, launchFactory() on UBIK.
- S6 — factory owner() and pairTokenEconomics(GLD).
- S7 — latest/dex/tokens UBIK.
- S8 — UBIK/GLD Pons v2 / Uniswap v4 pool.
- S9 — ubik token.
- S10 — CASHBIRD/GLD pair (distinct).
- S11 — SCHIFFY/GLD pair (distinct).
- S12 — GET /rhj/assets Stock Token registry.
- S13 — ubik.gold homepage.
- S14 — ubik X account.
- S16 — Token 0xC9a9…FC4e SPDR Gold Shares • Robinhood Token / GLD.
- S18 — TokenLaunched log for UBIK.
- S19 — Site and X are up. $UBIK is already live.
- S20 — Graduation tx 0x652f959d…2bef.
- S21 — PonsV2LaunchFactory verified source.
- S22 — Search q=UBIK.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:45:00Z; methodology_version: proofline-v1.0.
