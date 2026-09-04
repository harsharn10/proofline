---
slug: doge-1
coverage: stub
methodology_version: proofline-v1.0
---

# DOGE-1 — research record

## Identity

DOGE-1 is classified as Launchpad-graduated token.

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 DOGE-1/SPCX pool. Traders buy and sell DOGE-1 against the SpaceX • Robinhood Token on that book. SPCX is the quote rail, not this profile. Distinct from packed SPACEHOOD and BEAVER, which are LongLauncher clones on the same rail.

Themes: memecoin, stock-paired:SPCX, rwa, launchpad

## Deployment

DOGE-1 token (PonsV2LauncherToken bytecode): 0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03 on robinhood-chain. [verified S1 S3 S5]

PonsV2LaunchDeployer: 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S5 S18]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S4 S5 S19]

PonsV2BondingCurve: 0x73c35E838fFfE4ed0c415906655605a0D8b75137 on robinhood-chain. [verified S5 S6 S23]

PonsV2LaunchAndBuy (create tx to): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S3 S20]

V2LaunchLocker (graduated position): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S13]

SPCX Stock Token (pair quote / launch pairToken): 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa on robinhood-chain. [verified S5 S9 S15]

DOGE-1 ticker collision (Pons v2, not this row): 0xbFa87Fa76e712d8102B38e0a4b9ACDC85c78A2f9 on robinhood-chain. [claim S16 S21]

DOGE1 ticker collision (LongLauncher, not this row): 0x3582C0Ed4324cb742266401E56C68d026118EbA3 on robinhood-chain. [claim S17 S21]

## Control

token owner() reverts. Deployer 0x74aF…57f1 has no code. transferCreatorFeeRecipient at 2026-09-02T14:07:13Z set 0x8550…6FdD as creator fee recipient for pool 0x037dea9a…d54c. [verified S5 S14]

## Security

PonsV2LaunchFactory, PonsV2LaunchAndBuy, and PonsV2LaunchDeployer are verified on Blockscout. This token CA is_verified false (3248 B, not an EIP-1167 proxy). No audit report URL was located this pass. [verified S1 S18 S19 S20] [unknown]

## Engineering

_Research pending._

## Team

Site https://www.doge1coinrh.com/ embeds CA 0x3ec8…4c03 and links x.com/doge1coinrh plus t.me/Doge1onRH. Constructor socials twitter/website match; telegram is empty on-chain. DexScreener lists the site, x.com/Doge1CoinRH, and t.me/Doge1onRH. @Doge1CoinRH bio has no contract. TG preview titles Doge-1 Announcement Channel with 107 subscribers and no CA. Flag unconfirmed-official. [claim S5 S7 S10 S11 S12]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x74aF…57f1 at 2026-09-02T13:57:59Z minted DOGE-1 / DOGE-1 supply 1e9*1e18 onto PonsV2BondingCurve 0x73c35E…5137 quoted against pairToken SPCX 0x4a0E…5eEa with quoteIn 9998951663870479. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 722e18. [verified S3 S4 S5]

CurveCompleted / LaunchSwept tx 0x7661…fbd5 at 2026-09-02T14:00:58Z swept quoteOut 72200000000000000005 SPCX and tokenOut 285714285714285714285714285. createGraduatedPool tx 0x7878…f2fe the same second initialized Uniswap v4 poolId 0x037dea9a…d54c (fee 0, hooks V2MemeHook 0xE5e7…e044). V2LaunchLocker PositionLocked 1518692 and TokenSupplyLocked 81632653061224489791880346. Gecko dex id pons-v2-dex. Secondary DOGE-1/ETH and DOGE-1/USDG books exist on DexScreener with far less liquidity than the SPCX book. [verified S6 S7 S8 S13]

DOGE-1/SPCX Uniswap v4 24h volume is 705142.75 USD and reserve_in_usd is 53311.17 at 2026-09-03T04:21:00Z from the Gecko pool endpoint. fdv_usd is 585811.01. Gecko market_cap_usd is null. [claim S8]

DexScreener same pair: liquidity.usd 70959.97, volume.h24 722896.95, fdv/marketCap 603801. Blockscout holders_count 894. Pair created 2026-09-02T14:00:58Z. Assignment lead of ~$60,592 / ~$579,156 was not the live slice this pass. [claim S1 S7]

## Communications

@Doge1CoinRH posted Hold DOGE-1. Earn SPCX [claim S12]

## Findings

USD liquidity figures on the DOGE-1/SPCX book count both sides, and the quote side is SPCX, not USDG. Ticker-only pairing is not identity. Site doge1coinrh.com embeds the CA, but @Doge1CoinRH bio has no contract this pass, so the handle stays unconfirmed-official. Token source is unverified on this CA. [claim S9]

- Quote token SPCX 0x4a0E…5eEa is a Robinhood Stock Token rail; this subject is the memecoin, not SPCX. [verified S9 S15]
- Pool USD reserve is DOGE-1 plus SPCX, not a USDG or WETH backstop. [claim S7 S8]
- Same-ticker robinhood books at 0xbFa87…A2f9 and 0x3582…EbA3. Flag ca-collision. [verified S16 S17 S21]
- Handle is unconfirmed-official; TG is a third-party-link with no CA in the preview. [claim S7 S11 S12]
- Token source unverified on this CA. No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/deployer/lab/SPCX/launchAndBuy/CurveCompleted/createGraduatedPool/fee-recipient txs and collision tokens, RPC with Chrome UA, DexScreener token and search, one Gecko pool GET, /rhj/assets, the site HTML, Telegram preview, and @Doge1CoinRH were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S9]
- Numbers: 705142.75 is the Gecko DOGE-1/SPCX pool 24h volume. Reserve 53311.17 is that pool. DexScreener 722896.95 / 70959.97 is the same pair, different aggregator. [claim S7 S8]
- Adversarial: the strongest contrary reading is that this row is SPACEHOOD, BEAVER, SPCX itself, or the other robinhood DOGE-1 tickers. Different CAs, create paths (Pons v2 vs LongLauncher vs BeaconProxy Stock), and bytecode sizes argue against those. [verified S5 S9 S16 S17]

## Sources

- S1 — Token 0x3eC8…4c03 DOGE-1.
- S3 — launchAndBuy tx 0x4f27b355…0a55.
- S4 — TokenLaunched log for DOGE-1.
- S5 — eth_getCode, name, symbol, launchFactory() on DOGE-1.
- S6 — CurveCompleted / LaunchSwept tx 0x7661a37c…fbd5.
- S7 — latest/dex/tokens DOGE-1.
- S8 — DOGE-1/SPCX Pons V2 pool.
- S9 — GET /rhj/assets Stock Token registry.
- S10 — DOGE-1 site.
- S11 — t.me/Doge1onRH.
- S12 — Hold DOGE-1. Earn SPCX.
- S13 — createGraduatedPool tx 0x7878c591…f2fe.
- S14 — transferCreatorFeeRecipient tx 0x32146eba…d27c.
- S15 — Token 0x4a0E…5eEa SPCX.
- S16 — Collision token 0xbFa87…A2f9 PonsV2LauncherToken DOGE-1.
- S17 — Collision token 0x3582…EbA3 LongLauncher DOGE1.
- S18 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S19 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S20 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S21 — search q=DOGE-1.
- S23 — Curve 0x73c35E…5137.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:28:00Z; methodology_version: proofline-v1.0.
