---
slug: nostrategy
coverage: stub
methodology_version: proofline-v1.0
---

# NOSTRATEGY — research record

## Identity

NOSTRATEGY is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against the MSTR Robinhood Stock Token. Traders buy and sell NOSTRATEGY (token name buyhighselllow) on the NOSTRATEGY/MSTR book. No official site or handle was located this pass.

Themes: memecoin, stock-paired:MSTR, rwa

## Deployment

NOSTRATEGY token (EIP-1167 DopplerERC20V1 clone): 0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18 on robinhood-chain. [verified S3 S5 S2]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S3 S4]

DopplerERC20V1Factory: 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S2 S4]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S2 S4]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [verified S3 S4]

Quote asset MSTR stock token: 0xec262a75e413fAfD0dF80480274532C79D42da09 on robinhood-chain. [verified S4 S5 S9]

## Control

_Research pending._

## Security

token owner() returns Airlock 0xeb7C…0862. Create caller 0xfbb8…9971 has no code. Airlock owner() returns 0x21e2ce70…7a66. DopplerERC20V1 bytecode is 13927 B at 0x3Be8…C599; Blockscout source verification was not re-read this pass (Cloudflare 403). No audit report URL was located this pass. [verified S3 S4] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info is null and the pair page says Additional token info not available. X user search for NOSTRATEGY returned unrelated accounts. @buyhiselllower uses display-name BuyHighSellLow and did not embed CA 0xEbDb…1e18 this pass. Flag unconfirmed-official. [claim S5 S10 S11 S14]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create(...) from EOA 0xfbb8…9971 at 2026-09-02T14:53:47Z minted buyhighselllow / NOSTRATEGY supply 1e9*1e18 into Uniswap v4 pool 0x33ce…046c with numeraire MSTR 0xec26…da09. LaunchCreated normalizedTicker NOSTRATEGY. owner() on the token returns Airlock 0xeb7C…0862. factory() reverts. Airlock getAssetData numeraire is that MSTR; LP slots include 0xdead. [verified S2 S3 S4 S12]

PoolManager is 0x8366…0951. Gecko pool maps this book to dex bankr-robinhood; DexScreener dexId is uniswap labels v4. Secondary NOSTRATEGY/USDG and NOSTRATEGY/ETH books exist on DexScreener with far less liquidity than the MSTR book. [verified S5 S6]

NOSTRATEGY/MSTR Uniswap v4 24h volume is 1063521.49 USD and reserve_in_usd is 49177.43 at 2026-09-03T04:04:00Z from the Gecko pool endpoint. fdv_usd is 58242.75. Gecko token volume_usd.h24 is 1086487.62 across all pools, not the MSTR book. [claim S6 S7]

DexScreener same pair: liquidity.usd 44916.22, volume.h24 1056171.31, fdv/marketCap 49169. Pair created 2026-09-02T14:53:47Z. Blockscout holders_count was not re-read this pass. [claim S5]

## Communications

_Research pending._

## Findings

USD liquidity figures on the NOSTRATEGY/MSTR book count both sides, and the quote side is MSTR, not USDG. Gecko labels the dex bankr-robinhood while DexScreener labels Uniswap v4. No official handle was located, so comms surfaces stay unconfirmed-official. DexScreener search reuses the NOSTRATEGY ticker on other CAs including robinhood 0xB170…5527 and Solana/BSC copies. [claim S9]

- Quote token MSTR 0xec26…da09 is a Robinhood Stock Token rail in GET /rhj/assets; NOSTRATEGY is not that asset. [verified S9 S4]
- Pool USD reserve is NOSTRATEGY plus MSTR, not a USDG or WETH backstop. [claim S5 S6]
- No official handle or domain this pass. [claim S5 S10]
- Ticker NOSTRATEGY is reused by robinhood 0xB170…5527 and by Solana/BSC copies. [verified S16 S17]
- No audit report URL this pass. [unknown]
- A netlify /vote URL posted the CA; flag copypasta-pattern. [claim S15]

- Receipts: RPC name/symbol/owner/getCode/getAssetData and create tx 0x2cc9…3050, DexScreener token + pair page + search, Gecko token/pool/HTML, /rhj/assets, X user search, @buyhiselllower, and the netlify vote post were opened on 2026-09-03 and excerpts copied from the responses. Blockscout api/v2 was Cloudflare 403. [verified S3 S6 S9]
- Numbers: 1063521.49 is the Gecko NOSTRATEGY/MSTR pool 24h volume, not the 1086487.62 token all-pools figure. Reserve 49177.43 is that pool. DexScreener 1056171.31 / 44916.22 is the same pair, different aggregator. [claim S5 S6 S7]
- Adversarial: the strongest contrary reading is that NOSTRATEGY is the same name as SAYLORMOON/MSTR or an official Strategy product. SAYLORMOON is 0xD185…1E18 created 2026-08-29, and /rhj/assets lists MSTR 0xec26…da09 as the Stock Token, not this ERC-20. [inference S9 S13]

## Sources

- S2 — create tx 0x2cc928e1…3050.
- S3 — eth_getCode, name, symbol, owner() on NOSTRATEGY.
- S4 — eth_getCode factory, launcher, airlock, MSTR; getAssetData.
- S5 — latest/dex/tokens NOSTRATEGY.
- S6 — NOSTRATEGY/MSTR Uniswap v4 pool.
- S7 — buyhighselllow token.
- S9 — GET /rhj/assets Stock Token registry.
- S10 — user search NOSTRATEGY.
- S11 — NOSTRATEGY/MSTR pair page.
- S12 — Mint transfer from 0x0 on NOSTRATEGY.
- S13 — SAYLORMOON 0xD185…1E18 distinct CA.
- S14 — display-name BuyHighSellLow, no CA this pass.
- S15 — $NOSTRATEGY netlify vote URL with CA.
- S16 — colliding ticker 0xB170…5527.
- S17 — latest/dex/search NOSTRATEGY.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:10:00Z; methodology_version: proofline-v1.0.
