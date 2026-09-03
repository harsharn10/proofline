---
slug: stratton
coverage: stub
methodology_version: proofline-v1.0
---

# STRATTON — research record

## Identity

STRATTON is classified as Launchpad-graduated token.

A Pons v2 ERC-20 that graduated into a Uniswap v4 STRATTON/SPY pool. Traders buy and sell STRATTON against the Robinhood SPY Stock Token on that book. Token metadata and stratton.market describe a penny-stock launchpad whose docs list other contracts, not this CA.

Themes: memecoin, stock-paired:SPY, rwa, launchpad

## Deployment

STRATTON token (PonsV2LauncherToken): 0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360 on robinhood-chain. [verified S1 S2 S5]

PonsV2LaunchDeployer (token creator): 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S3 S5]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S5 S6 S15]

PonsV2BondingCurve: 0x4f8Bf15566c084F7Fa473B67131Ae74fc71F4d0F on robinhood-chain. [verified S5 S6 S16]

PonsV2LaunchAndBuy (create tx to): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S4 S15]

SPY Stock Token (pair quote / factory pairToken): 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C on robinhood-chain. [verified S7 S12 S17]

## Control

token owner() reverts. Verified PonsV2LauncherToken source says deployer is immutable reference data with no privileges. Deployer 0xb2B987…d7D5 has no code. launchFactory and curve are set at construction. [verified S2 S5]

## Security

PonsV2LauncherToken, PonsV2LaunchDeployer, PonsV2LaunchFactory, PonsV2LaunchAndBuy, and PonsV2BondingCurve are verified on Blockscout (compiler v0.8.35). Docs Launchpad 0xBa394F…07c9 is_verified false this pass. No audit report URL was located this pass. [verified S2 S3 S14] [unknown]

## Engineering

_Research pending._

## Team

token.socials() returns https://x.com/strattonmrkt and https://stratton.market. The live site footer links that X account; the account bio matches the on-chain description. DexScreener info.websites and info.socials are empty. Site HTML/JS and docs this pass do not embed CA 0xb7eae…8360. Flag unconfirmed-official for this token. [claim S7 S13 S14 S18]

@hustle_karma named @VictorOnChain as founder. That handle was not confirmed on @strattonmrkt or docs this pass. [claim S21]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0xb2B987…d7D5 at 2026-09-02T16:40:58Z minted Stratton Market / STRATTON supply 1e9*1e18 onto PonsV2BondingCurve 0x4f8B…4d0F quoted against pairToken SPY 0x117c…4C0C. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 10.9e18. [verified S4 S5 S6]

CurveCompleted / LaunchSwept tx 0x543b6e9e…44a3 one second later (2026-09-02T16:40:59Z) swept quoteOut 10.9e18 SPY. DexScreener pairCreatedAt 2026-09-02T16:41:00Z for Uniswap v4 STRATTON/SPY 0xa2c4e1ca…9274. Gecko dex id pons-v2-dex; PoolManager Swap is 0x8366…0951. Secondary STRATTON/USDG and STRATTON/ETH books exist with less liquidity than the SPY book. [verified S7 S8 S16]

DexScreener STRATTON/SPY Uniswap v4 24h volume is 9576519.64 USD and liquidity.usd is 165727.93 at 2026-09-03T03:44:00Z. fdv/marketCap is 3730588. Pair created 2026-09-02T16:41:00Z. [claim S7]

Gecko same pool volume_usd.h24 is 9364596.69 and reserve_in_usd is 158595.87. Gecko token fdv_usd is 3803341.24. Gecko token volume_usd.h24 is 15174470.36 across all pools, not the SPY book. Gecko pool fdv_usd 13554957.56 uses SPY as base. [claim S8 S9]

Blockscout holders_count 2558. [claim S1]

## Communications

@ZooCry posted the STRATTON CA and @strattonmrkt [claim S20]

@strattonmrkt posted factory improvements overnight [claim S18]

@hustle_karma posted Stratton as a penny-stock pad [claim S21]

@strattonmrkt posted the stock-token MM loop [claim S22]

## Findings

USD liquidity figures on the STRATTON/SPY book count both sides, and the quote side is SPY, not USDG. Gecko names the pool SPY/STRATTON and reports pool fdv on the SPY base. Site/docs do not embed this CA, so the handle/domain mapping stays unconfirmed-official for the token. [claim S13]

- Quote token SPY 0x117c…4C0C is the Robinhood Stock Token in GET /rhj/assets; pool USD reserve is STRATTON plus SPY. [verified S12 S17]
- Gecko pool fdv is not the STRATTON token fdv. [claim S8 S9]
- Site/docs list Launchpad 0xBa394F…07c9 and do not embed this CA; flag unconfirmed-official. [claim S13 S14]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/deployer/factory/launchAndBuy/curve/SPY and both launch/sweep txs, RPC name/symbol/socials/launchFactory/curve/deployer, DexScreener, Gecko pool/token, /rhj/assets, stratton.market and /docs, and the @strattonmrkt / CT posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S12 S13]
- Numbers: 9576519.64 is the DexScreener STRATTON/SPY pool 24h volume, not the 15174470.36 Gecko token all-pools figure. Reserve 165727.93 is DexScreener liquidity.usd; Gecko reserve 158595.87 is the same book, inverted base. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this CA is the Stratton pad token and that STRATTON/SPY is the PAIR/SPY book. Docs Launchpad is 0xBa394F…07c9, PairLaunchpadV5 created PAIR 0x6b1d…66be, and DexScreener lists STACKS/BOW/NORMIE as other /SPY tokens. [inference S7 S14 S19]

## Sources

- S1 — Token 0xb7eae…8360 Stratton Market / STRATTON.
- S2 — PonsV2LauncherToken verified source.
- S3 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S4 — launchAndBuy tx 0x2816984d…cf9d.
- S5 — eth_getCode, name, symbol, socials(), launchFactory() on STRATTON.
- S6 — TokenLaunched log for STRATTON.
- S7 — latest/dex/tokens STRATTON.
- S8 — SPY/STRATTON Pons V2 pool.
- S9 — Stratton Market token.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — stratton.market home.
- S14 — Docs · Contracts on mainnet.
- S15 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S16 — CurveCompleted / LaunchSwept tx 0x543b6e9e…44a3.
- S17 — Token 0x117c…4C0C SPY Robinhood Token.
- S18 — First improvements on factory are already in.
- S19 — PAIR/SPY and STACKS/SPY search rows.
- S20 — $Stratton site looks cool.
- S21 — Stratton Market ($STRATTON) penny-stock launchpad.
- S22 — How a Stratton market maker connects the stock market.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:45:00Z; methodology_version: proofline-v1.0.
