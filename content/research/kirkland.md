---
slug: kirkland
coverage: stub
methodology_version: proofline-v1.0
---

# KIRKLAND — research record

## Identity

KIRKLAND is classified as Stock-paired token.

A one-billion-supply ERC-20 launched on Pons v2 against COST, then graduated into a Uniswap v4 KIRKLAND/COST pool. PonsV2LaunchAndBuy deploys Kirkland (KIRKLAND) in one launchAndBuy call, fills a bonding curve, and createGraduatedPool seeds the KIRKLAND/COST book. Traders buy and sell KIRKLAND on that Uniswap v4 pool. COST is the pair rail, not the subject. No official site or handle was located this pass.

Themes: memecoin, stock-paired:COST, rwa, pons-graduation

## Deployment

KIRKLAND token (PonsV2LauncherToken): 0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03 on robinhood-chain. [verified S1 S2 S5]

Pons v2 bonding curve: 0x6Ca51588AEed93B749Da3b6D7da75494522F8CC0 on robinhood-chain. [verified S4 S5 S6]

PonsV2LaunchFactory: 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S5 S6]

PonsV2LaunchAndBuy: 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S4]

PonsV2LaunchDeployer: 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S1 S3]

COST Costco • Robinhood Token (pair rail): 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 on robinhood-chain. [verified S6 S10 S11]

V2LaunchLocker: 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S12]

## Control

token owner() reverts. Verified PonsV2LauncherToken source says deployer is attribution-only. Factory owner() is 0x263e…19Dd. Four seconds after launch, the deployer called transferCreatorFeeRecipient to 0x115c…D450, which V2MemeHook names as creator. [verified S2 S5 S6 S12 S22]

## Security

PonsV2LauncherToken, PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and V2LaunchLocker are verified on Blockscout. The per-launch curve 0x6Ca5…8CC0 is not verified. No audit report URL was located this pass. [verified S1 S2 S3] [unknown]

## Engineering

_Research pending._

## Team

No official domain or bidirectional X handle was located. DexScreener info.websites is empty; info.socials lists x.com/kirklandcto. On-chain socials() and launchAndBuy socials are empty. @kirklandcto bio is "Welcome to Kirkland." with no CA in the posts opened this pass. t.me/kirklandcto is a Telegram contact page with no CA. On-chain description is "Launched on discord.gg/uxento"; the uxento Discord preview has 12451 members and no KIRKLAND string. Flag unconfirmed-official and third-party-link. [claim S5 S7 S15 S16 S17]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x0Eb6…7083 at 2026-09-02T23:32:21Z minted Kirkland / KIRKLAND supply 1e9*1e18 to bonding curve 0x6Ca5…8CC0 against COST. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e. launchFactory() on the token returns that factory. deployer() returns the same 0x0Eb6…7083. [verified S4 S5 S6]

CurveCompleted at 2026-09-02T23:35:58Z swept 8.470405930331173154 COST and 2.857e8 tokens (1e18 scaled) to the factory. createGraduatedPool at 2026-09-02T23:36:04Z initialized Uniswap v4 poolId 0x135f…8d5d (currency0 COST, currency1 KIRKLAND, fee 0, hooks V2MemeHook 0xE5e7…e044). PoolGraduated locked positionId 1574917 with ~2.041e8 tokens and 8.470405930331173154 COST; V2LaunchLocker TokenSupplyLocked ~8.163e7 tokens. Gecko launchpad_details completed true at that timestamp. [verified S8 S9 S12 S13]

Secondary KIRKLAND/USDG and KIRKLAND/ETH books exist on DexScreener with far less liquidity than the COST book. [claim S7]

KIRKLAND/COST Uniswap v4 24h volume is 2843069.07 USD and reserve_in_usd is 40244.73 at 2026-09-03T03:51:42Z from the Gecko pool endpoint. Gecko token fdv_usd is 252208.32. Gecko token volume_usd.h24 is 3303874.29 across all pools, not the COST book. Gecko pool fdv_usd 1176154.00 prices COST as base and is not KIRKLAND fdv. [claim S8 S9]

DexScreener same pair: liquidity.usd 42463.3, volume.h24 2867817.05, fdv/marketCap 273374. Blockscout holders_count 1611. Pair created 2026-09-02T23:36:04Z. [claim S1 S7]

Gecko trending_pools duration=24h first twelve did not include KIRKLAND this pass. Assignment lead of liq ~$44,230 / vol ~$2,838,978 is in range of the live DexScreener/Gecko COST book. [claim S7 S8 S20]

## Communications

X posts circulated CA 0xaAc0…EB03 as KIRKLAND/COST [claim S15 S19]

## Findings

USD liquidity figures on the KIRKLAND/COST book count both sides, and the quote side is COST, not USDG. Gecko's pool fdv prices COST as base (~$1.18M) and is not KIRKLAND fdv (token fdv ~$252k). DexScreener lists @kirklandcto while on-chain socials are empty. Other KIRKLAND tickers trade on the same chain. [claim S11]

- Quote token COST 0x4EA0…44C2 is a Robinhood Stock Token rail (GET /rhj/assets hit); KIRKLAND is not that rail. [verified S11 S10]
- Pool USD reserve is KIRKLAND plus COST, not a USDG or WETH backstop. [claim S7 S8]
- Gecko pool fdv prices COST as base; use Gecko token fdv or DexScreener pair fdv for KIRKLAND. [claim S8 S9]
- No official handle or domain this pass; DexScreener twitter and uxento Discord are third-party-links. [claim S7 S15 S17]
- Other KIRKLAND tickers exist on DexScreener search. [claim S7]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/deployer/COST and launch, curve-complete, and createGraduatedPool txs, RPC name/symbol/deployer/launchFactory/curve/socials/owner/getLaunchedToken, DexScreener, Gecko pool/token/trending, /rhj/assets, @kirklandcto, Telegram preview, and Discord preview were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S11]
- Numbers: 2843069.07 is the Gecko KIRKLAND/COST pool 24h volume, not the 3303874.29 token all-pools figure. Reserve 40244.73 is that pool. DexScreener 2867817.05 / 42463.3 is the same pair, different aggregator. Gecko pool fdv 1176154.00 is COST-as-base. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that @kirklandcto is official and that COST pairing makes KIRKLAND a Costco product. On-chain socials are empty, the X bio has no CA, COST is the Robinhood Token rail in /rhj/assets, and no official domain was located. A second contrary reading is that this is the packed HOTDOG COST pair; lunch.fun HOTDOG is 0x4544…188C and Pons HOTDOG is 0x1C1D…566f. [inference S5 S7 S11]

## Sources

- S1 — Token 0xaAc0…EB03 Kirkland / KIRKLAND.
- S2 — PonsV2LauncherToken verified source.
- S3 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S4 — launchAndBuy tx 0xb3831df9…bfba.
- S5 — eth_getCode, name, symbol, deployer(), launchFactory(), socials() on KIRKLAND.
- S6 — factory owner(), getLaunchedToken, curve.graduated().
- S7 — latest/dex/tokens KIRKLAND.
- S8 — KIRKLAND/COST Pons V2 Dex pool.
- S9 — Kirkland token.
- S10 — Token 0x4EA0…44C2 Costco • Robinhood Token / COST.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — createGraduatedPool tx 0x84afef1d…831b.
- S13 — CurveCompleted tx 0x795eee92…766c.
- S15 — we're so fucking back #KIRKLAND.
- S16 — t.me/kirklandcto.
- S17 — discord.gg/uxento.
- S19 — KIRKLAND/COSTCO CA post.
- S20 — Robinhood trending_pools 24h.
- S22 — transferCreatorFeeRecipient tx 0x91eeadeb…be10.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:52:00Z; methodology_version: proofline-v1.0.
