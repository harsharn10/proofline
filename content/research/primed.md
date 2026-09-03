---
slug: primed
coverage: stub
methodology_version: proofline-v1.0
---

# PRIMED — research record

## Identity

PRIMED is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Amazon • Robinhood Token (AMZN). LongLauncher.create on 2026-09-02 minted PRIMED and seeded the PRIMED/AMZN book. Traders buy and sell PRIMED against AMZN. AMZN is the quote rail, not the subject. Distinct from SENDER/AMZN, RUFUS/AMZN, BEEFZOS/AMZN, and WADDLES/AMZN. No official site or handle was located this pass.

Themes: memecoin, stock-paired:AMZN, rwa

## Deployment

PRIMED token (EIP-1167 DopplerERC20V1 clone): 0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18 on robinhood-chain. [verified S1 S5 S6]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S3 S5 S6]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S1 S2 S6]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S5 S6 S14]

Amazon • Robinhood Token (pair quote rail): 0x12f190a9F9d7D37a250758b26824B97CE941bF54 on robinhood-chain. [verified S5 S6 S11 S12]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6]

## Control

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-from 0x56ca…8A7b has no code. LaunchCreated reservedUntil 2026-09-03T20:55:20Z had not passed at collection. [verified S5 S6 S18]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is fully verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified S2 S3 S13] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info is null. X user search for PRIMED returned unrelated handles. @primed_pf / @primedPF are a May 2026 Solana pump.fun ticker. Flag unconfirmed-official. [claim S7 S19]

@0xCR33P advertised a cr33per.net call page that embeds CA 0xeB57…1E18. Flag third-party-link. [claim S17]

Blockscout search PRIMED and DexScreener search list a second PRIMED ERC-20, PonsV2LauncherToken 0x037344…1Bb3. That address is not this token. Flag ca-collision on the ticker. [claim S20 S22 S23]

## Product and economics

LongLauncher 0x22e9…eeED create from EOA 0x56ca…8A7b at 2026-09-02T20:55:20Z minted PRIMED / PRIMED supply 1e9*1e18 into Uniswap v4 poolId 0x504184ea…32eb quoted against AMZN 0x12f1…bF54. tokenFactory is DopplerERC20V1Factory 0x1B37…b69a. The token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock 0xeb7C…0862. factory() reverts. [verified S4 S5 S6]

Airlock getAssetData numeraire is AMZN; LP slots include 0xdead. DopplerHookInitializer Lock beneficiaries are 0x56ca…8A7b at 95% and Airlock owner 0x21E2…7A66 at 5%. PoolManager Initialize uses dynamic-fee flag 8388608 and hooks 0x4e34…a544. Secondary PRIMED/USDG and PRIMED/ETH books exist on DexScreener with far less liquidity than the AMZN book. [verified S5 S6 S7]

AMZN/PRIMED Uniswap v4 24h volume is 154206.41 USD and reserve_in_usd is 71257.25 at 2026-09-03T05:10:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 46942.64. Gecko pool fdv_usd 1997894.36 is AMZN-as-base, not a PRIMED fdv. Gecko token volume_usd.h24 is 154206.56 across all pools, not the AMZN book. [claim S8 S9 S24]

DexScreener same pair: liquidity.usd 41522.95, volume.h24 157793.21, fdv/marketCap 46464. Blockscout holders_count 130. Pair created 2026-09-02T20:55:20Z. Assignment hint of ~$43,078 liq / ~$156,837 vol had moved by this as_of. [claim S1 S7]

## Communications

@TmsCrypto10 posted $primed with CA 0xeB57…1E18 as an Amazon runner [claim S15]

@OGAnsemExitLiq_ called 0xeB57…1E18 the only Amazon-paired token [claim S16]

@0xCR33P posted a cr33per.net call page for CA 0xeB57…1E18 [claim S17]

## Findings

USD liquidity figures on the PRIMED/AMZN book count both sides, and the quote side is AMZN, not USDG. Gecko names the pool AMZN / PRIMED, so pool fdv_usd 1.99M is the AMZN-as-base figure and is not a PRIMED fdv. Gecko and DexScreener disagree on reserve and fdv for the same pool. No official handle was located, so comms surfaces stay unconfirmed-official. A Pons PRIMED at 0x037344…1Bb3 shares the ticker. reservedUntil 2026-09-03T20:55:20Z had not passed at collection. [claim S11]

- Quote token AMZN 0x12f1…bF54 is the Robinhood Stock Token rail from GET /rhj/assets; PRIMED is not in that registry. [verified S11 S12]
- Pool USD reserve is PRIMED plus AMZN, not a USDG or WETH backstop. [claim S7 S8]
- Gecko and DexScreener disagree on reserve and fdv; Gecko pool fdv_usd 1997894.36 is AMZN-as-base. [claim S7 S8 S9]
- No official handle or domain this pass; cr33per.net is a third-party-link. [claim S7 S17]
- A Pons PRIMED at 0x037344…1Bb3 shares the ticker. [claim S20 S22]
- reservedUntil 2026-09-03T20:55:20Z had not passed at collection. [verified S5]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/AMZN/LongLauncher and create tx 0x4adc4def…822f, RPC name/symbol/owner/getAssetData, DexScreener tokens and search, Gecko pool/token (first GET 200), /rhj/assets, and X Latest $PRIMED / CA were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S6 S7 S8 S11]
- Numbers: 154206.41 is the Gecko AMZN/PRIMED pool 24h volume, not the 154206.56 token all-pools figure. Reserve 71257.25 is that pool. DexScreener 157793.21 / 41522.95 is the same pair, different aggregator. Gecko token fdv 46942.64 is the PRIMED figure; pool fdv 1997894.36 is not. [claim S7 S8 S9 S24]
- Adversarial: the strongest contrary reading is that PRIMED is packed sender, rufus, beefzos, or waddles, an official Amazon product, the only AMZN pair, or a Bankr launch because Gecko dex id is bankr-robinhood. The token is 0xeB57…1E18, sender is 0x4d41…1e18, rufus is 0x218D…1E18, beefzos is 0x21d3…1e18, waddles is 0xbB6E…0CdD, /rhj/assets has no PRIMED row, and creation is LongLauncher.create. [inference S4 S7 S11 S16 S20]

## Sources

- S1 — Token 0xeB57…1E18 PRIMED / PRIMED.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — Zero-addr mint of PRIMED 1e27.
- S5 — create tx 0x4adc4def…822f.
- S6 — eth_getCode, name, symbol, owner(), Airlock getAssetData.
- S7 — latest/dex/tokens PRIMED.
- S8 — AMZN/PRIMED Uniswap v4 pool.
- S9 — PRIMED token.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — Token 0x12f1…bF54 Amazon • Robinhood Token / AMZN.
- S13 — DopplerERC20V1 verified source.
- S14 — LongLauncher 0x22e9…eeED.
- S15 — $primed with amazon is so good.
- S16 — THIS IS THE ONLY TOKEN PAIRED TO AMAZON.
- S17 — $PRIMED Off Longxyz call page.
- S18 — LaunchCreated / Initialize / Lock logs.
- S19 — User search PRIMED.
- S20 — Search PRIMED.
- S22 — Pons PRIMED 0x037344…1Bb3 launchAndBuy.
- S23 — latest/dex/search PRIMED.
- S24 — PRIMED token pools.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:15:00Z; methodology_version: proofline-v1.0.
