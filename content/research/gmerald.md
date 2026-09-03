---
slug: gmerald
coverage: stub
methodology_version: proofline-v1.0
---

# GMERALD — research record

## Identity

GMERALD is classified as Launchpad-graduated token.

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 GMERALD/GME pool. Traders buy and sell GMERALD against the GameStop • Robinhood Token on that book. GME is the quote rail, not this profile. No official site or handle was confirmed this pass.

Themes: memecoin, stock-paired:GME, rwa, launchpad

## Deployment

GMERALD token (PonsV2LauncherToken): 0x3E4E7bbee9A7e5fBEdABeEa66313C8f636999458 on robinhood-chain. [verified S1 S2 S5]

PonsV2LaunchDeployer (token creator): 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S3 S5]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S5 S6 S10]

PonsV2BondingCurve: 0xd08Da39D027a7Cd12E1EAE45F72D15585034DC15 on robinhood-chain. [verified S5 S6 S12 S14]

PonsV2LaunchAndBuy (create tx to): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S4 S11]

GME Stock Token (pair quote / factory pairToken): 0x1b0E319c6A659F002271B69dB8A7df2F911c153E on robinhood-chain. [verified S7 S13]

## Control

token owner() reverts. Verified PonsV2LauncherToken source says deployer is immutable reference data with no privileges. Deployer 0x9a3ae500…bdBF has no code. launchFactory and curve are set at construction. [verified S2 S5]

## Security

PonsV2LauncherToken, PonsV2LaunchDeployer, PonsV2LaunchFactory, PonsV2LaunchAndBuy, and PonsV2BondingCurve are verified on Blockscout (compiler v0.8.35). No audit report URL was located this pass. [verified S2 S3 S10] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was confirmed. Constructor socials encode https://x.com/gmeraldexe and https://t.me/GMERALDportal with website empty. DexScreener lists those plus https://www.gmerald.xyz/. Flag unconfirmed-official. [claim S2 S4 S7]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x9a3ae500…bdBF at 2026-09-02T20:10:47Z minted Gmerald / GMERALD supply 1e9*1e18 onto PonsV2BondingCurve 0xd08Da39D…DC15 quoted against pairToken GME 0x1b0E…153E with quoteIn 21e18. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 369e18. [verified S4 S5 S6]

CurveCompleted / LaunchSwept tx 0x5ea7e9b3…56ed at 2026-09-02T20:11:47Z swept quoteOut 369e18 GME and tokenOut 285714285714285714285714285. DexScreener pairCreatedAt 2026-09-02T20:12:23Z for Uniswap v4 GMERALD/GME 0xc47b5ee3…00ba. Gecko dex id pons-v2-dex. Secondary GMERALD/USDG and GMERALD/ETH books exist on DexScreener with far less liquidity than the GME book. [verified S7 S8 S14]

Gecko GME/GMERALD 24h volume is 2297336.16 USD and reserve_in_usd is 102954.42 at 2026-09-03T04:07:25Z from the Gecko pool endpoint. Gecko pool fdv_usd 1946574.29 uses GME as base. [claim S8]

DexScreener same pair: liquidity.usd 85277.92, volume.h24 2178463.68, fdv/marketCap 1106505. Blockscout holders_count 802. Pair created 2026-09-02T20:12:23Z. Live totalSupply 885124129620127602499036807 versus constructor 1e27. [claim S1 S7]

Assignment lead of ~$58,206 liq / ~$2,077,175 vol was not reproduced at this as_of; live DexScreener is $85.3k / $2.18M and live Gecko reserve is $103k. [claim S7 S8]

## Communications

_Research pending._

## Findings

USD liquidity figures on the GMERALD/GME book count both sides, and the quote side is GME, not USDG. Gecko names the pool GME/GMERALD and reports pool fdv on the GME base. DexScreener lists gmerald.xyz and x.com/gmeraldexe, but the on-chain website field is empty and no bidirectional handle check ran this pass, so comms stay unconfirmed-official. Live totalSupply is below the 1e27 constructor mint. [claim S1]

- Quote token GME 0x1b0E…153E is a Robinhood Token rail; workbook and dossier GME addresses differ (0x1b0E…153E vs 0xD1C418…1379). [verified S13]
- Pool USD reserve is GMERALD plus GME, not a USDG or WETH backstop. [claim S7 S8]
- No official handle or domain confirmed this pass; DexScreener site/socials are unconfirmed-official. [claim S7]
- Same ticker on other robinhood CAs and on Solana. Distinct from KITTY/GME. [claim S7 S9]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl-source/factory/curve/GME/KITTY and both launch and CurveCompleted txs, RPC name/symbol/deployer/launchFactory/curve, DexScreener token, and one Gecko pool GET were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8]
- Numbers: 2297336.16 is the Gecko GME/GMERALD pool 24h volume. Reserve 102954.42 is that pool. DexScreener 2178463.68 / 85277.92 is the same pair, different aggregator. Gecko pool fdv 1946574.29 is not the DexScreener token fdv 1106505. [claim S7 S8]
- Adversarial: the strongest contrary reading is that GMERALD is KITTY or the official GME product. KITTY is 0x96F10D7A…9aB4 named Roaring Kitty. GME 0x1b0E…153E is the pair rail named GameStop • Robinhood Token. This token is PonsV2LauncherToken 0x3E4E7bbe…9458. [inference S1 S9 S13]

## Sources

- S1 — Token 0x3E4E7bbe…9458 Gmerald / GMERALD.
- S2 — PonsV2LauncherToken verified source.
- S3 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S4 — launchAndBuy tx 0x81e32486…9567.
- S5 — eth_getCode, name, symbol, launchFactory() on GMERALD.
- S6 — TokenLaunched log for GMERALD.
- S7 — latest/dex/tokens GMERALD.
- S8 — GME/GMERALD Pons V2 pool.
- S9 — Token 0x96F10D7A…9aB4 Roaring Kitty / KITTY.
- S10 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S11 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S12 — Address 0xd08Da39D…DC15 PonsV2BondingCurve.
- S13 — Token 0x1b0E…153E GameStop • Robinhood Token / GME.
- S14 — CurveCompleted / LaunchSwept tx 0x5ea7e9b3…56ed.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:10:00Z; methodology_version: proofline-v1.0.
