---
slug: optimus
coverage: stub
methodology_version: proofline-v1.0
---

# OPTIMUS — research record

## Identity

OPTIMUS is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against TSLA, the Tesla Robinhood Stock Token at 0x322F…3b2d. Traders buy and sell Optimus Hood (OPTIMUS) on that book. TSLA is the rail. This token is not the Tesla stock token, not packed doggie, not DOGECOIN/TSLA, and not LONGDOG/TSLA.

Themes: memecoin, stock-paired:TSLA

## Deployment

OPTIMUS token (EIP-1167 DopplerERC20V1 clone): 0xB5D553Cc06F9b3569731b7a74fc269B939841E18 on robinhood-chain. [verified S1 S2 S3]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S3 S10]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S1 S12]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S11]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S3 S13]

TSLA quote (create numeraire / pair quote / Robinhood Stock Token rail): 0x322F0929c4625eD5bAd873c95208D54E1c003b2d on robinhood-chain. [verified S3 S4 S15 S18]

## Control

owner() returns Airlock 0xeb7C…0862. Create-time Lock beneficiaries are 0x33Eb…bbF4 at 95% (the create sender) and 0xEDeA…eDa8 at 5%. [verified S3 S13 S19]

## Security

DopplerERC20V1 is verified at src/tokens/DopplerERC20V1.sol (compiler v0.8.26, partial). LongLauncher source is verified at src/LongLauncher.sol. No audit report URL was located this pass. [verified S10 S11] [unknown]

## Engineering

_Research pending._

## Team

No project domain. DexScreener websites points at the LONG token page; Gecko info websites and twitter_handle are empty. @OptimusHoodTSLA bio contains CA 0xb5d553…1e18 and posted it as Only Official CA; the handle is unconfirmed-official. t.me/optimushoodportal titles Optimus Hood Portal with 25 subscribers and no contract in the public preview; flag third-party-link. Distinct from @Optimus_RH / optimustracker.ai. [claim S7 S14 S20 S22]

## Product and economics

LongLauncher.create on 2026-07-19T09:30:05Z minted Optimus Hood as an EIP-1167 DopplerERC20V1 clone with supply 1e9×1e18 and numeraire TSLA 0x322F…3b2d. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. factory() is not on this clone; owner() is Airlock. [verified S3 S4 S19]

DexScreener labels the primary book Uniswap v4 OPTIMUS/TSLA pair 0xef34…d4c3. Secondary OPTIMUS/USDG books exist with hundreds of dollars of liquidity versus ~$195k on the TSLA book. Gecko attributes the same pool id to bankr-robinhood. [verified S7 S8]

DexScreener OPTIMUS/TSLA Uniswap v4 liquidity $194,884.92, 24h volume $1,027,046.48, market cap $596,447 at 2026-09-03T03:40Z. Gecko same pool reserve $252,520.77, 24h volume $1,007,956.18; Gecko token all-pools 24h volume $1,014,802.25. [verified S7 S8 S9]

Blockscout holders_count 984. Gecko token info holders.count 898. Pair created 2026-07-19T09:30:05Z. Assignment lead of liq ~$189,513 / vol ~$1,039,456 was not reproduced exactly at this as_of; live DexScreener is $194,884.92 / $1,027,046.48. [verified S2 S7 S14]

## Communications

@OptimusHoodTSLA posted Only Official CA [claim S20]

@OptimusHoodTSLA posted t.me/optimushoodportal [claim S21 S22]

@EARNONHOOD posted STOCK MEMES Omnipool including OPTIMUS [claim S23]

@orionmaximalist posted the OPTIMUS CA [claim S24]

## Findings

USD liquidity on the OPTIMUS/TSLA book counts both sides, and aggregators disagree on the reserve. Gecko attributes the same pool id to bankr-robinhood. A different Optimus at 0x0fF9…e2B2 (optimustracker.ai / @Optimus_RH) quotes ETH, not TSLA. No bidirectional project domain was located. [claim S5]

- Quote token TSLA 0x322F…3b2d is a Robinhood Stock Token rail; OPTIMUS is a separate memecoin CA. [verified S15 S18]
- Pool USD reserve is OPTIMUS plus TSLA; DexScreener and Gecko disagree on the figure. [verified S7 S8]
- Ticker OPTIMUS collides with tracker 0x0fF9…e2B2 and with other TSLA-quoted memecoins (doggie, DOGECOIN, LONGDOG) at different CAs. [verified S16 S17]
- No bidirectional official handle or domain this pass; Telegram is a third-party-link. [claim S7 S14 S22]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout address/token/create tx/LongLauncher/factory/Airlock/implementation/TSLA, RPC with Mozilla UA, DexScreener token/search, Gecko token/pool/info, /rhj/assets, Telegram preview, @OptimusHoodTSLA, @EARNONHOOD, and @orionmaximalist were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S4 S7 S8 S18]
- Numbers: $1,027,046.48 / $194,884.92 is the DexScreener OPTIMUS/TSLA book, not Gecko token all-pools $1,014,802.25. Gecko pool reserve $252,520.77 is that pool. Holders 984 is Blockscout OPTIMUS, not TSLA 51118. [claim S2 S7 S8 S9 S15]
- Adversarial: the strongest contrary reading is that this OPTIMUS is packed doggie, is DOGECOIN/TSLA, is LONGDOG/TSLA, is tracker Optimus, or is the TSLA stock token. Different CAs, names, pair ids and (for tracker) quote asset argue against those. [verified S3 S7 S16 S17 S18]

## Sources

- S1 — Address 0xB5D553…1E18 Optimus Hood.
- S2 — Token 0xB5D553…1E18.
- S3 — eth_getCode / name / symbol / owner at block 53110945.
- S4 — Creation tx 0x1d097040…8d71.
- S5 — $OPTIMUS token page (SPA / Cloudflare).
- S7 — latest/dex/tokens OPTIMUS Hood.
- S8 — OPTIMUS/TSLA Uniswap v4 pool.
- S9 — Optimus Hood token.
- S10 — DopplerERC20V1 0x3Be8…C599.
- S11 — LongLauncher 0x22e9…eeED.
- S12 — DopplerERC20V1Factory 0x1B37…b69a.
- S13 — Airlock 0xeb7C…0862.
- S14 — Optimus Hood token info.
- S15 — TSLA token 0x322F…3b2d.
- S16 — DOGECOIN and LONGDOG TSLA books.
- S17 — tracker Optimus 0x0fF9…e2B2.
- S18 — GET /rhj/assets Stock Token registry.
- S19 — create tx logs LaunchCreated / Initialize / Lock.
- S20 — Only Official CA.
- S21 — Telegram invite.
- S22 — t.me/optimushoodportal.
- S23 — STOCK MEMES Omnipool live.
- S24 — If you like MOO then you will like OPTIMUS.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:48:00Z; methodology_version: proofline-v1.0.
