---
slug: spacehood
coverage: stub
methodology_version: proofline-v1.0
---

# SPACEHOOD — research record

## Identity

SPACEHOOD is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against SPCX, the SpaceX Robinhood Stock Token at 0x4a0E…5eEa. Traders buy and sell SPACEHOOD on that book. It is not the SPCX stock token and is not DOGE-1, a separate SPCX-quoted token.

Themes: memecoin, stock-paired:SPCX

## Deployment

SPACEHOOD token (EIP-1167 DopplerERC20V1 clone): 0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18 on robinhood-chain. [verified S1 S2 S3]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S3 S10]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S1 S12]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S4 S11]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S3 S13]

SPCX quote (create numeraire / pair quote): 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa on robinhood-chain. [claim S4 S6 S15]

## Control

owner() returns Airlock 0xeb7C…0862. The LONG token page names fee receiver 0x1Ae517…5305, the same EOA that sent the create transaction and that created LongLauncher. Unclaimed fees on that page were $1,162,954.49 this pass. [verified S3 S11] [claim S5]

## Security

DopplerERC20V1 is verified at src/tokens/DopplerERC20V1.sol (compiler v0.8.26). No audit report URL was located this pass. [verified S10] [unknown]

## Engineering

_Research pending._

## Team

No project domain. DexScreener websites points at the LONG token page; Gecko info websites and twitter_handle are empty. @spacehood420 bio contains CA 0xFe7E19…1E18 and @longdotxyz; LONG Social Links are empty and the 21 Aug Diamond post named SPACEHOOD without a handle. Flag unconfirmed-official. [claim S5 S6 S9 S16]

## Product and economics

LongLauncher.create on 2026-07-14T14:48:13Z minted SPACEHOOD as an EIP-1167 DopplerERC20V1 clone with supply 1e9×1e18 and numeraire SPCX 0x4a0E…5eEa. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. [verified S3 S4]

DexScreener labels the primary book Uniswap v4 SPACEHOOD/SPCX pair 0x225cc9…94ca. Secondary SPACEHOOD/USDG, SPACEHOOD/ETH and SPACEHOOD/WETH books exist with less liquidity. Gecko attributes the same pool id to bankr-robinhood and lists SPCX as base. [verified S6 S7]

DexScreener SPACEHOOD/SPCX Uniswap v4 liquidity $1,047,191.72, 24h volume $2,513,315.64, market cap $12,587,619 at 2026-09-03T03:29Z. Gecko same pool reserve $2,365,159.04, 24h volume $2,499,544.64; Gecko token all-pools 24h volume $4,835,186.38. [verified S6 S7 S8]

Blockscout holders_count 5192. Gecko token info holders.count 5097. Gecko pool HTML holders 70.9K matches SPCX holders_count 70989, not this token. GO-LIVE 2026-09-02 capture was about $982k liquidity and $3.1M volume. [verified S2 S9] [claim S18]

## Communications

@longdotxyz posted SPACEHOOD/SPCX among Diamond buybacks [claim S21]

@spacehood420 posted ~$1.35M creator fees [claim S5 S19]

@spacehood420 posted SPACEHOOD as SPCX distribution [claim S16]

@EARNONHOOD posted STOCK MEMES Omnipool including SPACEHOOD [claim S22]

## Findings

USD liquidity on the SPACEHOOD/SPCX book counts both sides, and aggregators disagree on the reserve. Gecko names the pool SPCX / SPACEHOOD and can attach SPCX holder counts to the page. App-dossier SPCX 0x32eB…Db7 has no code on 4663; the live quote is 0x4a0E…5eEa. [claim S5]

- Quote is SPCX 0x4a0E…5eEa, a private-company Stock Token; SPACEHOOD is not that token and is not DOGE-1. [verified S14 S15 S17]
- Pool USD reserve mixes SPACEHOOD and SPCX; DexScreener and Gecko disagree on the figure. [verified S6 S7]
- No bidirectional official handle or domain this pass. [claim S6 S9 S16]
- No audit report URL this pass. [unknown]
- App-dossier SPCX 0x32eB…Db7 has empty code on 4663 this pass. [verified S3]

- Receipts: Blockscout address/token/create tx/LongLauncher/factory/Airlock/implementation/SPCX/DOGE-1, RPC with Chrome UA, DexScreener token API and pair page, Gecko token/pool/info, LONG token page, @spacehood420, @longdotxyz, and @EARNONHOOD were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S3 S4 S6 S7]
- Numbers: $1,047,191.72 / $2,513,315.64 is the DexScreener SPACEHOOD/SPCX book, not Gecko token all-pools $4,835,186.38. Gecko pool fdv_usd 609.56 is SPCX-as-base, not SPACEHOOD market cap. Holders 5192 is Blockscout SPACEHOOD, not SPCX 70989. [claim S6 S7 S8 S2 S15]
- Adversarial: the strongest contrary reading is that SPACEHOOD is SPCX, is DOGE-1, is the LONG factory, or that 0x32eB…Db7 is the pair quote. Different CAs, names, create paths and empty code on 0x32eB…Db7 argue against those. [verified S3 S4 S14 S17]

## Sources

- S1 — Address 0xFe7E19…1E18 SPACEHOOD.
- S2 — Token 0xFe7E19…1E18.
- S3 — eth_getCode / name / symbol / owner at block 53101722.
- S4 — Creation tx 0x44d4d3df….
- S5 — $SPACEHOOD token page.
- S6 — Token pairs API 0xFe7E19…1E18.
- S7 — SPCX / SPACEHOOD pool API.
- S8 — SPACEHOOD token API.
- S9 — SPACEHOOD token info API.
- S10 — DopplerERC20V1 0x3Be8…C599.
- S11 — LongLauncher 0x22e9…eeED.
- S12 — DopplerERC20V1Factory 0x1B37…b69a.
- S13 — Airlock 0xeb7C…0862.
- S14 — DOGE-1 token pairs API.
- S15 — SPCX token 0x4a0E…5eEa.
- S16 — $SPACEHOOD is onchain distribution for $SPCX.
- S17 — DOGE-1 address 0x3eC8…4c03.
- S18 — SPACEHOOD/SPCX pool page.
- S19 — Creator fees post.
- S21 — Diamond Release Part Two.
- S22 — STOCK MEMES Omnipool live.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:40:00Z; methodology_version: proofline-v1.0.
