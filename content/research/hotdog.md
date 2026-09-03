---
slug: hotdog
coverage: stub
methodology_version: proofline-v1.0
---

# HOTDOG — research record

## Identity

HOTDOG is classified as Stock-paired token.

A Costco-paired memecoin minted through lunch.fun's V3 pair launcher. Holders trade HOTDOG against COST on Uniswap v3 1% pool 0x264a…F55c. hotdogonrh.com and @HOTDOGonRH publish contract 0x4544…188C.

Themes: memecoin, stock-paired:COST

## Deployment

HOTDOG token (LunchTokenPlain): 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C on robinhood-chain. [verified S8 S13 S14]

lunch Stock/USDG-pair launcher (V3): 0x568E12B312751992DCfE387CFc8EC7D63E941103 on robinhood-chain. [claim S7 S10 S14]

Uniswap v3 HOTDOG/COST 1% pool: 0x264ad13Bfc0585208b7d8b1712df51B096a5F55c on robinhood-chain. [claim S9 S12 S14 S15]

Costco • Robinhood Token (COST): 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 on robinhood-chain. [claim S11 S14]

Launch caller (creator()): 0x4b03CA54Be3d815453D37182E893a6E36B7d6781 on robinhood-chain. [claim S9 S14]

lunch V3 pair fee locker: 0x46F1DdD98a51016804b5a42db71d6985E76c8326 on robinhood-chain. [claim S6 S25]

## Control

owner() on the token reverts. launcher() returns 0x568E…1103 and creator() returns EOA 0x4b03…6781. The launcher proxy implementation is LunchV3PairLauncherFrozen; owner() on the proxy is EOA 0x7B2D…8cC9 with empty code. lunch API names fee locker 0x46F1…8326 (LunchV3PairFeeLockerFrozen). This pass did not read the position NFT owner. [verified S10 S13 S14] [claim S6]

## Security

No audit report URL was located on the token site, handle, telegram, or lunch docs this pass. [unknown]

## Engineering

_Research pending._

## Team

hotdogonrh.com sets twitter:site to @HOTDOGonRH and publishes CA 0x4544…188C. @HOTDOGonRH bio carries the same CA and links t.me/HOTDOGonRH; the handle posted the site URL on 2 Sep 2026. Telegram og:description repeats the CA. lunch.fun lists the same twitter and telegram on the V3 launch row. No GitHub repository was located. [verified S1 S2 S3 S4]

Handles @hotdogonpons, @HotdogRH and @HotdogRH_CTO also use a HOTDOG/COST story; DexScreener maps @hotdogonpons to token 0x1C1…566f and @HotdogRH_CTO has posted CA 0x99a6…c3F3. [claim S19 S23 S27 S28]

## Product and economics

A holder swaps HOTDOG against COST on Uniswap v3 1% pool 0x264a…F55c. The launch tx called launchPair on lunch Stock/USDG-pair launcher (V3) 0x568E…1103 with name hotdog, symbol HOTDOG, supply 1e27, fee 10000, pairToken COST, and zero dev buy. [verified S9 S14 S15]

LunchTokenPlain is a fixed-supply ERC-20: constructor mints supply to the launcher, transfers are unrestricted, and there is no admin mint. tokenURI() concatenates launcher.baseTokenURI() with the token address. lunch.fun/docs describes V3 coins as a single full-range Uniswap V3 position with LP locked from block one. [verified S13] [claim S7]

Gecko Uniswap v3 1% HOTDOG/COST 0x264a…F55c on 2026-09-03: 24h volume 39,742.19 USD, reserve 75,092.9986 USD, fdv 489,024 USD. DexScreener the same pair: 24h volume 40,454.99 USD, liquidity 75,171.89 USD, market cap 487,932 USD. Blockscout holders 221. [verified S8 S15 S16]

Gecko Pons V2 Dex HOTDOG/COST for token 0x1C1…566f the same day: 24h volume 7,565,085.31 USD, reserve 183,120.75 USD. That is not this token's book. [verified S18]

## Communications

@HOTDOGonRH posted hotdogonrh.com [claim S3]

@Folo5288Peace named @HOTDOGonRH COST pair [claim S21]

@HOTDOGonRH posted a main-character meme [claim S20]

@HOTDOGonRH quoted Costco CEO on the $1.50 price [claim S22]

## Findings

Gecko and DexScreener both list more than one HOTDOG/COST pair; a card that uses ticker plus quote asset without the CA will mix 0x4544…188C with 0x1C1…566f. The lunch V3 launcher is an ERC1967 proxy whose owner() is one EOA. LunchTokenPlain itself has no owner, but tokenURI() reads a base from that launcher. [claim S1]

- A second HOTDOG/COST pair (token 0x1C1…566f, Gecko Pons V2 Dex) showed ~$7.56M 24h volume and ~$182k liquidity this pass. [verified S18 S19]
- The lunch V3 pair launcher is an ERC1967 proxy owned by EOA 0x7B2D…8cC9; tokenURI() reads a base from that launcher. [verified S10 S13 S14]
- This pass did not reproduce the LP NFT lock. [claim S6 S7]
- No audit report was located this pass. [unknown]
- lunch.fun/api/launches?q=HOTDOG returns additional HOTDOG-ticker rows at other addresses. [claim S6]

- Receipts: hotdogonrh.com, @HOTDOGonRH profile and dated posts, t.me/HOTDOGonRH, lunch.fun/coin and /api/launches?q=HOTDOG, lunch.fun/docs, Blockscout API v2, RPC eth_getCode and eth_call, DexScreener and Gecko for 0x4544…188C and 0x1C1…566f were opened on 2026-09-03; excerpts are copied from those pages. [verified S1 S8 S14 S15 S16]
- Numbers: $39,742.19 / $75,093 are Gecko Uniswap v3 1% HOTDOG/COST 0x264a…F55c, not the Pons V2 Dex $7.56M / $181.9K book and not an all-chains figure. [verified S16 S18]
- Adversarial: the strongest contrary reading is that the Gecko ~$182k / ~$7.5M HOTDOG/COST pair is this lunch V3 token, or that @hotdogonpons is the official handle. Contract 0x4544…188C's Gecko pool is Uniswap v3 1% 0x264a…F55c at ~$40k 24h / ~$75k reserve; the $7.56M book names 0x1C1…566f. Site and @HOTDOGonRH publish 0x4544…188C. [verified S1 S16 S18]

## Sources

- S1 — hotdogonrh.com home.
- S2 — Costco $HOTDOG profile.
- S3 — hotdogonrh.com.
- S4 — t.me/HOTDOGonRH.
- S6 — GET /api/launches?q=HOTDOG.
- S7 — How lunch works, in detail.
- S8 — HOTDOG 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C.
- S9 — HOTDOG creation tx 0xcae2c9b2….
- S10 — lunch V3 pair launcher 0x568E…1103.
- S11 — COST Costco • Robinhood Token.
- S12 — UniswapV3Pool 0x264a…F55c.
- S13 — LunchTokenPlain verified source.
- S14 — eth_getCode and ERC-20 / pool / launcher calls.
- S15 — HOTDOG token pairs on Robinhood.
- S16 — HOTDOG pools on Robinhood.
- S18 — Pons V2 Dex HOTDOG/COST 0x1C1…566f.
- S19 — HOTDOG 0x1C1…566f token pairs.
- S20 — When you know you're the main character.
- S21 — $HOTDOG the $1.50 hot-dog meme.
- S22 — Ron Vachris $1.50 quote.
- S23 — hotdog profile.
- S25 — lunch V3 pair fee locker 0x46F1…8326.
- S27 — Hotdog profile.
- S28 — HotDog profile.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:36:00Z; methodology_version: proofline-v1.0.
