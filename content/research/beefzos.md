---
slug: beefzos
coverage: stub
methodology_version: proofline-v1.0
---

# BEEFZOS — research record

## Identity

BEEFZOS is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Amazon • Robinhood Token (AMZN). LongLauncher.create on 2026-09-02 minted Jeff Beefzos (BEEFZOS) and seeded the BEEFZOS/AMZN book. Traders buy and sell BEEFZOS against AMZN. AMZN is the quote rail, not the subject. Distinct from SENDER/AMZN and WADDLES/AMZN. No bidirectional official site was located this pass.

Themes: memecoin, stock-paired:AMZN, rwa

## Deployment

BEEFZOS token (EIP-1167 DopplerERC20V1 clone): 0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18 on robinhood-chain. [verified S1 S4 S6]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S3 S4 S6]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S1 S2 S6]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S6 S13]

Amazon • Robinhood Token (pair quote rail): 0x12f190a9F9d7D37a250758b26824B97CE941bF54 on robinhood-chain. [verified S4 S6 S11 S12]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S4 S6 S14]

## Control

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-from 0xcC51…2A26 has no code. LaunchCreated reservedUntil 2026-09-03T20:42:41Z had not passed at collection. [verified S4 S6 S18]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is fully verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified S2 S3 S13] [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener info is null. @beefzos bio and a post embed CA 0x21d3…1e18; DexScreener does not list that handle. Flag unconfirmed-official. [claim S7 S15 S19]

Blockscout search BEEFZOS and DexScreener search list other Jeff Beefzos ERC-20s, including 0x79780a…1e18. Those addresses are not this token. Flag ca-collision on the ticker. [claim S20 S21]

## Product and economics

LongLauncher 0x22e9…eeED create from EOA 0xcC51…2A26 at 2026-09-02T20:42:41Z minted Jeff Beefzos / BEEFZOS supply 1e9*1e18 into Uniswap v4 poolId 0x234d6fd9…43ac quoted against AMZN 0x12f1…bF54. tokenFactory is DopplerERC20V1Factory 0x1B37…b69a. The token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock 0xeb7C…0862. factory() reverts. [verified S4 S6]

Airlock getAssetData numeraire is AMZN; LP slots include 0xdead. DopplerHookInitializer Lock beneficiaries are 0xcC51…2A26 at 95% and Airlock owner 0x21E2…7A66 at 5%. PoolManager Initialize uses dynamic-fee flag 8388608 and hooks 0x4e34…a544. A secondary BEEFZOS/ETH v4 book exists on DexScreener with $9.93 liquidity. [verified S5 S6 S7]

AMZN/BEEFZOS Uniswap v4 24h volume is 175435.85 USD and reserve_in_usd is 41081.39 at 2026-09-03T04:49:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 50786.31. Gecko pool fdv_usd 0.39 is AMZN-as-base, not a BEEFZOS fdv. Gecko token volume_usd.h24 is 173430.53 across all pools, not the AMZN book. [claim S8 S9]

DexScreener same pair: liquidity.usd 42193.27, volume.h24 182159.76, fdv/marketCap 47573. Blockscout holders_count 66. Pair created 2026-09-02T20:42:41Z. [claim S1 S7]

## Communications

@beefzos posted a beef video [claim S16]

@beefzos posted the token contract [claim S15]

@beefzos posted a shareholder-value line [claim S17]

## Findings

USD liquidity figures on the BEEFZOS/AMZN book count both sides, and the quote side is AMZN, not USDG. Gecko names the pool AMZN / BEEFZOS, so pool fdv_usd 0.39 is the AMZN-as-base figure and is not a BEEFZOS fdv. Gecko and DexScreener disagree on reserve and fdv for the same pool. @beefzos embeds the CA one way; DexScreener info is null, so the handle stays unconfirmed-official. Other Jeff Beefzos CAs share the ticker. [claim S11]

- Quote token AMZN 0x12f1…bF54 is the Robinhood Stock Token rail from GET /rhj/assets; BEEFZOS is not in that registry. [verified S11 S12]
- Pool USD reserve is BEEFZOS plus AMZN, not a USDG or WETH backstop. [claim S7 S8]
- Gecko and DexScreener disagree on reserve and fdv; Gecko pool fdv_usd 0.39 is AMZN-as-base. [claim S7 S8 S9]
- No bidirectional official handle or domain this pass; @beefzos is unconfirmed-official. [claim S7 S15]
- Other Jeff Beefzos CAs share the ticker. [claim S20 S21]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/AMZN/LongLauncher/Airlock and create tx 0xed8967d9…a8a8, RPC name/symbol/owner/getAssetData, DexScreener tokens and search, Gecko pool/token (first GET 200), /rhj/assets, and X Latest from:beefzos were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S6 S7 S8 S11]
- Numbers: 175435.85 is the Gecko AMZN/BEEFZOS pool 24h volume, not the 173430.53 token all-pools figure. Reserve 41081.39 is that pool. DexScreener 182159.76 / 42193.27 is the same pair, different aggregator. Gecko token fdv 50786.31 is the BEEFZOS figure; pool fdv 0.39 is not. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that BEEFZOS is packed sender or waddles, an official Amazon product, or a Bankr launch because Gecko dex id is bankr-robinhood. The token is 0x21d3…1e18, sender is 0x4d41…1e18, waddles is 0xbB6E…0CdD, /rhj/assets has no BEEFZOS row, and creation is LongLauncher.create. [inference S4 S7 S11 S20]

## Sources

- S1 — Token 0x21d3…1e18 Jeff Beefzos / BEEFZOS.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0xed8967d9…a8a8.
- S5 — DopplerHookInitializer Lock / Create logs.
- S6 — eth_getCode, name, symbol, owner(), Airlock getAssetData.
- S7 — latest/dex/tokens BEEFZOS.
- S8 — AMZN/BEEFZOS Uniswap v4 pool.
- S9 — Jeff Beefzos token.
- S11 — GET /rhj/assets Stock Token registry.
- S12 — Token 0x12f1…bF54 Amazon • Robinhood Token / AMZN.
- S13 — Address 0x22e9…eeED LongLauncher.
- S14 — Address 0xeb7C…0862 Airlock.
- S15 — ca 0x21d3462d3f0a5f661ed46d033a8cf05595c11e18.
- S16 — when you know what's up with the beef.
- S17 — shareholder value we create over the long term.
- S18 — LaunchCreated and PoolManager Initialize for BEEFZOS.
- S19 — user search BEEFZOS.
- S20 — Search BEEFZOS.
- S21 — search BEEFZOS.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:55:00Z; methodology_version: proofline-v1.0.
