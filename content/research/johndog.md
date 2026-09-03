---
slug: johndog
coverage: stub
methodology_version: proofline-v1.0
---

# JOHNDOG — research record

## Identity

JOHNDOG is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against SGOV. Token 0x64bc…1e18 is an EIP-1167 DopplerERC20V1 clone named John Dog / JOHNDOG. Traders buy and sell JOHNDOG on Uniswap v4 against the SGOV rail. No official site or handle was located this pass.

Themes: memecoin, stock-paired:SGOV, rwa, graduation

## Deployment

JOHNDOG token (EIP-1167 DopplerERC20V1 clone): 0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18 on robinhood-chain. [verified S1 S4]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S4]

DopplerERC20V1Factory (implementation creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S2]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S4]

SGOV • Robinhood Token (pair quote; rail): 0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5 on robinhood-chain. [claim S5 S6]

Uniswap v4 PoolManager (token-transfer counterparty): 0x8366a39CC670B4001A1121B8F6A443A643e40951 on robinhood-chain. [claim S7]

## Control

_Research pending._

## Security

owner() is Airlock 0xeb7C…0862. factory() reverts. Token create tx was not on the Blockscout token page this pass; getcontractcreation returned HTTP 429 and was not retried. No audit report URL was located this pass. [verified S1 S4] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites is https://dexxyswap.com (third-party-link). info.socials is an X search URL, not a profile. Flag unconfirmed-official. [claim S5]

SGOV is the iShares 0-3 Month Treasury Bond Robinhood Token rail at 0x92FD…F9B5. This packet is the JOHNDOG graduation, not SGOV and not Bankr/LONG as subjects. [verified S5 S6]

## Product and economics

DopplerERC20V1 0x3Be8…C599 is the implementation. Token 0x64bc…1e18 is a 44-byte EIP-1167 clone; RPC name John Dog, symbol JOHNDOG, decimals 18, totalSupply 1e27. owner() returns Airlock 0xeb7C…0862. factory() reverts. Implementation creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. Token-page creator_address_hash and creation_transaction_hash were empty this pass. [verified S1 S2 S4]

Primary book is Uniswap v4 JOHNDOG/SGOV pool 0xa934…1e0a, created 2026-09-02T01:25:14Z. Quote token is SGOV 0x92FD…F9B5. DexScreener labels v4 / dexId uniswap. Gecko names dex bankr-robinhood on the same pool id. PoolManager 0x8366…0951 appears as a transfer counterparty. Secondary JOHNDOG/USDG v4 books exist on DexScreener with far less liquidity than the SGOV book. [verified S5 S6 S7]

DexScreener JOHNDOG/SGOV Uniswap v4 24h volume is 3501375.34 USD and liquidity.usd is 176778.87 at 2026-09-03T03:53:29Z. fdv/marketCap is 415313. That is the reproduced book. [claim S5]

Gecko same pool: volume_usd.h24 3402161.96, fdv_usd 900999.34, market_cap_usd null, reserve_in_usd -599778.93. The negative reserve is not TVL. [claim S6]

Blockscout holders_count 1938. Pair created 2026-09-02T01:25:14Z. Live approve tx 0x0568c6a0…0df8 at 2026-09-03T03:50:59Z. [claim S1 S3]

## Communications

_Research pending._

## Findings

USD liquidity on the JOHNDOG/SGOV book counts both sides, and the quote side is SGOV, not USDG. Gecko reserve_in_usd printed negative this pass, so a compiler must not copy it as TVL. DexScreener search lists other JOHNDOG/JohnDog contract addresses. No official handle was located, so comms surfaces stay unconfirmed-official. [claim S1]

- Quote token SGOV 0x92FD…F9B5 is a Robinhood Token rail; pool USD figures count JOHNDOG plus SGOV. [verified S5 S6]
- Gecko reserve_in_usd printed negative this pass; do not copy as TVL. [verified S6]
- DexScreener search lists other JOHNDOG/JohnDog CAs; this packet is 0x64bc…1e18 only. [claim S5]
- No official handle or domain this pass; dexxyswap.com is a third-party-link. [claim S5]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl and a live approve tx, RPC name/symbol/owner/eth_getCode, DexScreener token, and one Gecko pool GET were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S5 S6]
- Numbers: 3501375.34 / 176778.87 is the DexScreener JOHNDOG/SGOV book. Gecko volume 3402161.96 is the same pool. Gecko reserve_in_usd -599778.93 is not TVL. fdv 415313 (DS) vs 900999.34 (Gecko) is an open conflict. [claim S5 S6]
- Adversarial: the strongest contrary reading is that JOHNDOG is Bankr-the-pad, LONG, DOGGIE, HOTDOG, or another JOHNDOG CA, or that Gecko -599k is TVL. Token address, SGOV quote, DS liquidity, and empty official surfaces contradict those merges. [inference S5 S6]

## Sources

- S1 — Token 0x64bc…1e18 John Dog / JOHNDOG.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — approve tx 0x0568c6a0…0df8.
- S4 — eth_getCode, name, symbol, owner() on JOHNDOG.
- S5 — latest/dex/tokens JOHNDOG.
- S6 — JOHNDOG/SGOV Uniswap v4 pool.
- S7 — JOHNDOG transfers and logs.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:54:18Z; methodology_version: proofline-v1.0.
