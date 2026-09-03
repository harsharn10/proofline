---
slug: doggie
coverage: stub
methodology_version: proofline-v1.0
---

# DOGGIE — research record

## Identity

Doggie Mode is classified as Stock-paired token.

A 1B-supply memecoin paired to tokenized Tesla on Robinhood Chain. LongLauncher minted DOGGIE as a DopplerERC20V1 clone into a Uniswap v4 DOGGIE/TSLA pool. Holders swap DOGGIE against TSLA. doggiemode.com and @DoggieMode publish the contract.

Themes: memecoin, stock-paired:TSLA, dog, rwa

## Deployment

DOGGIE token (EIP-1167 DopplerERC20V1 clone): 0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18 on robinhood-chain. [verified S1 S2 S4]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S2 S4 S7]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S2 S3 S6]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S3 S5]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S4 S8]

Tesla • Robinhood Token (pair quote): 0x322F0929c4625eD5bAd873c95208D54E1c003b2d on robinhood-chain. [claim S1 S3 S9 S20]

## Control

owner() returns Airlock 0xeb7C…0862, verified on Blockscout. The token is a 44-byte EIP-1167 clone; implementation DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). [verified S4 S7 S8]

## Security

No audit report URL was located this pass. CMC isAudited is false. [unknown]

## Engineering

_Research pending._

## Team

doggiemode.com lists CA 0xa9eF…1e18, TSLA 0x322F…3b2d, @DoggieMode and t.me/DoggieModePortal. @DoggieMode posted https://Doggiemode.com on 2026-08-28. DexScreener and Gecko repeat that site and handle. [verified S1 S10 S13 S15]

Site copy: created with an AI assistant and managed by a bot. Independent meme project. Not affiliated with or endorsed by Tesla, Inc., Robinhood, or xAI. No public repository URL was located. [claim S1]

Census LONG is the factory. Artificial Inu is a different LongLauncher token vs NVDA. [claim S3 S5]

## Product and economics

LongLauncher 0x22e9…eeED create at 2026-08-26T21:41:52Z minted Doggie Mode / DOGGIE supply 1e9*1e18 as an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. The create quote is TSLA 0x322F…3b2d. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. Pool id 0x141b…f3f8. [verified S2 S3 S4]

doggiemode.com says $DOGGIE is paired with tokenized $TSLA and Launched via long.xyz. The site CTA is Swap Robinhood ETH → $DOGGIE. DexScreener's deep book is DOGGIE/TSLA Uniswap v4; a DOGGIE/ETH v4 book 0xd34a…75e8 has about $10k liquidity. [claim S1] [verified S10]

Gecko DOGGIE/TSLA Uniswap-labelled pool 24h volume is 1039630.54 USD and reserve_in_usd is 540680.98 at 2026-09-03T03:30:00Z. fdv_usd is 3302094.98. Gecko token volume_usd.h24 is 1109367.23 across all pools, not the TSLA book. [claim S11 S12]

DexScreener same pair: liquidity.usd 531673.15, volume.h24 1043346, fdv/marketCap 3338438. Blockscout holders_count 1405. Pair created 2026-08-26T21:41:52Z. [claim S2 S10]

CMC dateAdded 2026-09-02T18:48:01Z; statistics.volume24h 1112756.81; fullyDilluttedMarketCap 3346603.07. [claim S17]

## Communications

@NovaFox posted $DOGGIE/TSLA market cap 3.6 [claim S18]

@DoggieMode posted $DOGGIE live on CoinMarketCap [claim S16]

CoinMarketCap listed Doggie Mode / DOGGIE [claim S17]

@DoggieMode posted doing things with $DOGGIE [claim S21]

@DoggieMode posted doggiemode.com is live [claim S15]

## Findings

USD reserve on the DOGGIE/TSLA book counts both sides, and the quote side is TSLA. owner() is Airlock. Gecko names the pool dex bankr-robinhood while the create transaction is LongLauncher and DexScreener/CMC name Uniswap v4. Secondary DOGGIE/ETH books are thin. [claim S1]

- Quote token TSLA is a Robinhood Stock Token; pool USD reserve is DOGGIE plus TSLA. [verified S9 S11 S20]
- owner() is Airlock; remaining token privileges were not read in source this pass. [verified S4 S8]
- Gecko dex label bankr-robinhood does not match the LongLauncher create tx. [verified S3 S11]
- No audit report URL this pass. [unknown]

- Receipts: doggiemode.com, Blockscout token/create/LongLauncher/factory/impl/Airlock/TSLA, RPC, DexScreener, Gecko pool/token/info, /rhj/assets, CMC, @DoggieMode profile and three posts, @NovaFox, and Telegram preview were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S2 S4 S11]
- Numbers: 1039630.54 is the Gecko DOGGIE/TSLA pool 24h volume, not the 1109367.23 token all-pools figure. Reserve 540680.98 is that pool. DexScreener 1043346 / 531673.15 is the same pair, different aggregator. Holders 1405 is Blockscout. [claim S10 S11 S12]
- Adversarial: the strongest contrary reading is that DOGGIE is a Bankr factory token or that the TSLA quote is not a Robinhood Stock Token. The create tx is LongLauncher.create; GET /rhj/assets lists TSLA 0x322F…3b2d. [inference S3 S20]

## Sources

- S1 — doggiemode.com home.
- S2 — Address 0xa9eF…1e18 Doggie Mode / DOGGIE.
- S3 — create tx 0xca19843e…7445.
- S4 — eth_getCode, name, symbol, owner() on DOGGIE.
- S5 — Address 0x22e9…eeED LongLauncher.
- S6 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S7 — Address 0x3Be8…C599 DopplerERC20V1.
- S8 — Address 0xeb7C…0862 Airlock.
- S9 — Token 0x322F…3b2d Tesla • Robinhood Token / TSLA.
- S10 — latest/dex/tokens DOGGIE.
- S11 — DOGGIE/TSLA pool.
- S12 — Doggie Mode token.
- S13 — Doggie Mode token info.
- S15 — Site is live.
- S16 — $DOGGIE is live on CoinMarketCap.
- S17 — Doggie Mode / DOGGIE.
- S18 — $DOGGIE breaking barriers.
- S20 — GET /rhj/assets TSLA row.
- S21 — doing things with $DOGGIE.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:40:00Z; methodology_version: proofline-v1.0.
