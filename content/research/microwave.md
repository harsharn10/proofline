---
slug: microwave
coverage: stub
methodology_version: proofline-v1.0
---

# MICROWAVE — research record

## Identity

Microwave is classified as Stock-paired token.

A one-billion-supply ERC-20 minted by Pons v2 onto a bonding curve quoted against United States Oil Fund • Robinhood Token (USO), then graduated into a Uniswap v4 MICROWAVE/USO pool. launchAndBuy on 2026-09-02 created Microwave (MICROWAVE) and seeded the curve; createGraduatedPool the same day initialized pool 0xab8a…92ff. Traders buy and sell MICROWAVE against USO. USO is the quote rail, not the subject. Site microwave.moreright.xyz and handle @MoreRightDAO are named in onchain socials().

Themes: memecoin, stock-paired:USO, rwa, graduation

## Deployment

MICROWAVE token (PonsV2LauncherToken): 0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b on robinhood-chain. [verified S1 S5 S18]

Pons v2 launch factory (launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S5 S6]

PonsV2LaunchAndBuy (launchAndBuy): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [verified S4]

PonsV2BondingCurve: 0x753a27A3C2AEb46A6476c5a065be7786938A7D83 on robinhood-chain. [claim S4 S5]

USO Stock Token rail (pair quote): 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 on robinhood-chain. [verified S2 S5 S10 S11]

OfficeTreasury (creator fee recipient): 0xbfDcC6a3e2dAb9B80303c9956011CaBec10Ab90B on robinhood-chain. [verified S5 S14 S19]

V2LaunchLocker (locked LP): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S5 S12]

## Control

owner() on the token reverts. deployer() is EOA 0x1A63…32Fc with empty code; verified PonsV2LauncherToken source says deployer confers no privileges. OfficeTreasury owner() reverts. Factory owner is Pons SafeProxy 0x263ed295…19Dd. LP is locked in V2LaunchLocker 0x2674…4952 (isLocked true, position 1501919). [verified S5 S12 S18]

## Security

Token, factory, LaunchAndBuy, curve, locker, and OfficeTreasury are verified on Blockscout. No audit report URL was located this pass. [verified S3 S14 S18] [unknown]

## Engineering

_Research pending._

## Team

Onchain socials() and launchAndBuy params name https://x.com/MoreRightDAO and https://microwave.moreright.xyz/. The site embeds CA 0x79E1B7…888b and the same handle. DexScreener info matches. @MoreRightDAO display MoreRightDAO, bio COOKING MEMES, 664 followers; sampled Latest posts name $MICROWAVE / $USO / treasury burn and do not embed the CA this pass. GitHub search q=microwave+moreright total_count 0. [claim S4 S7 S13 S15]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from EOA 0x1A63…32Fc at 2026-09-02T08:17:58Z minted Microwave / MICROWAVE supply 1e9*1e18 onto bonding curve 0x753a…7D83 quoted against USO 0xa30FA3…D344. launchFactory() returns Pons v2 factory 0x7eD5…EC7e. getLaunchedToken.phase is 2 PoolCreated. creatorTaxBps 100, buybackEnabled false. [verified S4 S5 S6]

createGraduatedPool at 2026-09-02T11:34:43Z initialized Uniswap v4 poolId 0xab8a…92ff (currency0 MICROWAVE, currency1 USO, fee 0, hooks V2MemeHook 0xE5e7…e044). PoolGraduated locked positionId 1501919 with ~2.041e8 tokens and ~71.80 USO; V2LaunchLocker TokenSupplyLocked ~8.163e7 tokens. Secondary MICROWAVE/USDG and MICROWAVE/ETH Uniswap v4 books on DexScreener have far less liquidity than the USO book. [verified S7 S12]

OfficeTreasury 0xbfDc…b90B is the creatorFeeRecipient. Site and verified source: 1.00% creator tax in USO accrues via Pons fee escrow; holders may burn MICROWAVE for pro-rata treasury USO minus a 2% exit fee; anyone may call collect(). RPC this pass: token() is MICROWAVE, allAssets is USO only, held(USO) ~142.13e18. [verified S13 S14 S5]

MICROWAVE/USO Uniswap v4 24h volume is 1316923.09 USD and liquidity.usd is 30941.6 at 2026-09-03T04:51:00Z from the DexScreener pair endpoint. fdv/marketCap 111098. Pair created 2026-09-02T11:34:43Z. [claim S7]

Gecko token volume_usd.h24 is 1272308.180093 and total_reserve_in_usd is 16115.95 at 2026-09-03T04:48:41Z across all pools, not the USO book. fdv_usd 109740.65. launchpad_details completed true at 2026-09-02T11:34:43Z into pool 0xab8a…92ff. Gecko pool JSON returned 429 this pass. [claim S9]

Blockscout holders_count 721. Assignment lead of ~$40k liq / ~$1.30M vol was not reproduced at this as_of; live DexScreener pair is $31k / $1.32M. [claim S1 S7]

## Communications

@MoreRightDAO posted treasury burn-for-USO [claim S15]

Netlify vote/claim pages circulated the CA [claim S16 S17]

## Findings

USD liquidity on the MICROWAVE/USO book counts both sides; the quote side is USO, not USDG. Gecko token all-pools reserve ($16.1k) is not the DexScreener pair book ($31k). Same-ticker Microwave clones exist on robinhood (0x5318…C4c2 / WETH, 0xFEa44…1e18 / AI). Netlify vote/claim hosts circulated the CA; they are not the onchain website. [claim S13]

- Quote token USO 0xa30FA3…D344 is the Robinhood Stock Token rail in GET /rhj/assets; MICROWAVE is not. [verified S10 S11]
- Pool USD reserve is MICROWAVE plus USO, not a USDG or WETH backstop. [claim S7]
- Gecko token all-pools reserve is not the USO book. [claim S9]
- Same-ticker Microwave clones 0x5318…C4c2 and 0xFEa44…1e18 are other CAs. [verified S8]
- Netlify vote/claim hosts are third-party-link / copypasta-pattern. [claim S16 S17]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/USO/treasury and the launch and graduation txs, RPC name/symbol/launchFactory/getLaunchedToken/approvedPairTokens/held, DexScreener token/pair/search, Gecko token GET, /rhj/assets, microwave.moreright.xyz, and X Latest were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S5 S7 S10 S13]
- Numbers: 1316923.09 is the DexScreener MICROWAVE/USO pair 24h volume, not the 1272308.180093 Gecko token all-pools figure. Liquidity 30941.6 is that pool. Gecko total_reserve_in_usd 16115.95 is all-pools. [claim S7 S9]
- Adversarial: the strongest contrary reading is that this is packed CRUDECAT, GASOLINU, OILCOIN, or the USO issuer. Those have different CAs; USO 0xa30FA3…D344 is the /rhj/assets rail, not the memecoin. Ticker clones 0x5318…C4c2 and 0xFEa44…1e18 are other CAs. [inference S8 S10]

## Sources

- S1 — Token 0x79E1B7…888b Microwave / MICROWAVE.
- S2 — Token 0xa30FA3…D344 USO.
- S3 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S4 — launchAndBuy tx 0x8cea769f…e1d4.
- S5 — eth_getCode, name/symbol, launchFactory, getLaunchedToken.
- S6 — PonsV2LaunchFactory verified source / ABI.
- S7 — MICROWAVE/USO Uniswap v4 pair.
- S8 — Search MICROWAVE on robinhood.
- S9 — Microwave token.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — USO name/symbol and token code sizes.
- S12 — createGraduatedPool tx 0x7226bcd4…7f50.
- S13 — microwave.moreright.xyz.
- S14 — OfficeTreasury 0xbfDc…b90B.
- S15 — $MICROWAVE treasury burn-for-USO.
- S16 — Netlify vote page for MICROWAVE.
- S17 — Netlify claim page for MICROWAVE.
- S18 — PonsV2LauncherToken verified source.
- S19 — PonsV2LaunchDeployer 0x3711…1A42.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:52:00Z; methodology_version: proofline-v1.0.
