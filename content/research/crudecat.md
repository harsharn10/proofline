---
slug: crudecat
coverage: stub
methodology_version: proofline-v1.0
---

# CRUDECAT — research record

## Identity

CRUDECAT is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by the Circus stock-quoted launchpad and graduated into a Uniswap v3 CRUDECAT/USO book. Traders buy and sell Crude Cat (CRUDECAT) against the USO Stock Token rail. Site crudecat.xyz and @crudecatcoin publish the same CA. [R-1] [R-3] [R-5] [R-7] [R-8]

Themes: memecoin, stock-paired:USO, rwa, graduation

## Deployment

CRUDECAT token (CircusQuoteTokenV3): 0xBD957Cc9f1e94617792F37bC40f2F299e78AcF3e on robinhood-chain. [verified S1 S2 S3]

Circus launchpad (token launchpad()): 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00 on robinhood-chain. [verified S3 S4 S13]

USO Stock Token rail (pair quote): 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 on robinhood-chain. [verified S3 S10 S11]

Uniswap v3 CRUDECAT/USO 1% pool: 0xc3a873867C79b234A5179BeC2899846376258BeD on robinhood-chain. [verified S3 S5 S12 S19]

CtoManager (token ctoManager): 0x7D687dd0e3bf5025FbAc010042a5943300c8463a on robinhood-chain. [claim S2 S3]

MetadataController (token metadataController): 0x74D4b708E6ce0748E4b968403E115dD69E60BE8F on robinhood-chain. [claim S2 S3]

## Control

token owner() reverts. creator() is EOA 0x2F849d…4729 with creatorNonce 0. ctoManager 0x7D687d…463a and metadataController 0x74D4b7…BE8F are constructor immutables (ERC1967Proxy). Pad implementation 0x822E175C…42B96 is unverified. [verified S3 S13]

## Security

CircusQuoteTokenV3 is partially verified on Blockscout (src/launchpad/CircusQuoteTokenV3.sol, compiler v0.8.35). No audit report URL was located this pass. [verified S2] [unknown]

## Engineering

_Research pending._

## Team

Official domain https://www.crudecat.xyz/ publishes CA 0xBD957…cF3e, the DexScreener pair, @crudecatcoin, and t.me/crudecat. @crudecatcoin profile website is crudecat.xyz; the 2026-08-05 pinned post repeats the CA. tokenURI JSON matches. No GitHub repository this pass. [verified S7 S8 S14]

USO is the Robinhood Stock Token rail, not a Crude Cat product. Circus is the pad, not the token team. [verified S10 S13]

## Product and economics

Circus launchpad 0xb7fA…cb00 (ERC1967Proxy) created CircusQuoteTokenV3 via CREATE3 helper 0x673c82…1532 in tx 0x3e83f90b…7f5d at 2026-07-25T23:12:52Z from EOA 0x2F849d…4729. RPC name Crude Cat / CRUDECAT supply 1e9*1e18, launchpad() that pad, unlocked() true, version v3. [verified S3 S4]

Verified source: stock-quoted lane; graduation is a TOKEN/STOCK pool. Live venue is Uniswap v3 factory 0x1f7d7550…2EfA pool 0xc3a873…8BeD fee 10000, token0 USO token1 CRUDECAT, created 2026-07-25T23:26:11Z. Secondary CRUDECAT/USDG and CRUDECAT/ETH Uniswap v4 books on DexScreener have far less liquidity than the USO v3 book. [verified S2 S3 S5 S12]

CRUDECAT/USO Uniswap v3 24h volume is 406036.06 USD and liquidity.usd is 219757.12 at 2026-09-03T03:50:00Z from DexScreener. marketCap 2992401, fdv 6232232, priceUsd 0.006232, txns.h24 439 buys / 471 sells. Blockscout holders_count 7931. Pair created 2026-07-25T23:26:11Z. [claim S1 S5]

Gecko pool HTML meta: 24h volume $344.25K, liquidity $211.67K. Gecko JSON API returned 429 this pass. Assignment lead of liq ~$235,440 / vol ~$397,992 is the same pair in a different window; live DexScreener is $219.8k / $406.0k. [claim S5 S6]

## Communications

@arcus_xyz put USO second on the spot leaderboard; @crudecatcoin replied [claim S17]

@crudecatcoin posted a USO airdrop to top 100 CRUDECAT holders [claim S18]

@crudecatcoin pinned CA, site, and Telegram [verified S8]

## Findings

USD liquidity on the CRUDECAT/USO book counts both sides; the quote side is USO, not USDG. Gecko HTML meta ($344k vol / $212k liq) disagrees with DexScreener ($406k / $220k). A lowercase unverified crudecat and a Solana CRUDECAT share the ticker. Circus ctoManager can reassign creator(). [R-5] [R-6] [R-15] [R-21] [R-2] [claim S7]

- Pool USD reserve is CRUDECAT plus USO, not a USDG or WETH backstop. [claim S5]
- Gecko HTML and DexScreener 24h volume disagree this pass. [claim S5 S6]
- Ticker collision: unverified lowercase crudecat 0xD869…Bf01 and Solana CRUDECAT. [verified S15 S21]
- ctoManager may reassign creator(); pad implementation unverified. [verified S2 S13]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/source/create tx/pair/USO/pad, RPC name/symbol/launchpad/unlocked/pair fee, DexScreener pair and oil-ticker search, crudecat.xyz, @crudecatcoin profile plus pinned CA, Telegram preview, tokenURI JSON, /rhj/assets USO row, Gecko HTML meta, GitHub search were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S5 S7 S10]
- Numbers: 406036.06 is the DexScreener CRUDECAT/USO v3 24h volume, not Gecko HTML $344.25K. Liquidity 219757.12 is that pool. Holders 7931 is Blockscout. DexScreener marketCap 2992401 is not fdv 6232232. [claim S1 S5 S6]
- Adversarial: the strongest contrary reading is that CRUDECAT is OILCOIN/GASOLINU/MICROWAVE or the USO issuer. Those three have different CAs; USO 0xa30FA3…D344 is the /rhj/assets rail, not the memecoin. [inference S10 S16]

## Sources

- S1 — Token 0xBD957…cF3e Crude Cat / CRUDECAT.
- S2 — CircusQuoteTokenV3 verified source.
- S3 — eth_getCode and eth_call on CRUDECAT, USO, pair.
- S4 — create tx 0x3e83f90b…7f5d.
- S5 — CRUDECAT/USO Uniswap v3 pair.
- S6 — USO/CRUDECAT Uniswap V3 pool page.
- S7 — crudecat.xyz.
- S8 — X profile and pinned CA post.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — Token 0xa30FA3…D344 USO.
- S12 — Address 0xc3a873…8BeD UniswapV3Pool.
- S13 — Address 0xb7fA…cb00 Circus ERC1967Proxy.
- S14 — CRUDECAT tokenURI metadata JSON.
- S15 — Token 0xD869…Bf01 lowercase crudecat.
- S16 — Search OILCOIN GASOLINU MICROWAVE on robinhood.
- S17 — Quote of @arcus_xyz USO leaderboard.
- S18 — USO airdrop to top 100 holders.
- S19 — Pool create tx 0x75dd551e…a9f3.
- S21 — Search CRUDECAT extra pairs.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:52:00Z; methodology_version: proofline-v1.0.
