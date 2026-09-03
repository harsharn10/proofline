---
slug: stonks-fun
coverage: stub
methodology_version: proofline-v1.0
---

# Stonks.fun — research record

## Identity

Stonks.fun is classified as Redeemable RWA basket.

Onchain index baskets of Robinhood stock tokens. A user picks holdings, sets weights, and mints one ERC-20 that is fully backed and redeemable in kind. MAG7, DEGEN and SILICON are live; the builder is open. Fees burn $STONKS. @stonksdotfun runs stonks.fun. $STONKS is a Doppler DN-404 from the earlier Uniswap v3 pad.

Themes: launchpad, rwa, index

## Deployment

STONKS token (DopplerDN404): 0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c on robinhood-chain. [verified S8 S14 S15 S16]

DN404Factory: 0x37A9Fa204a4d3A429FDED7e3469ab076C854Bc9d on robinhood-chain. [verified S16 S17]

StonksLauncherV3: 0x2a71F10b41ff0882C7Be2A5c0644722314976b42 on robinhood-chain. [verified S18 S24]

Basket factory: 0xd21cdd54943cA962Ee6f13F0eB48e6f591870d4a on robinhood-chain. [verified S20 S25]

MAG7 basket (stonks MAG7): 0xA5eC9f044671b7EbD186b59272C3ab7cB88Ae891 on robinhood-chain. [verified S5 S19 S20]

DEGEN basket (stonks DEGEN): 0xc7ceC00967266Ef50023904669c375baA4A33308 on robinhood-chain. [claim S5 S27]

SILICON basket (stonks SILICON): 0x68c6775Da99a028432FB2A0753DBeb91479868F4 on robinhood-chain. [claim S5 S28]

Basket cash-redeem router: 0x5fF3F0896c587a316B92DA88dd2578b18399a4bC on robinhood-chain. [verified S5 S26]

STONKS/USDG Uniswap v3 pool: 0x37C0Bd9540B76bE0c947a07B4be5173B799C8167 on robinhood-chain. [claim S21 S22]

## Control

STONKS owner() returns Airlock 0xeb7C0347…. CreateBasket, STONKS create and the router deploy are from EOA 0x2E8DCcCE…. Basket factory, MAG7, DEGEN, SILICON and the router are unverified on Blockscout. [verified S16 S20 S25 S26]

## Security

No audit report was located on the site, the X account, GitHub search, or the unverified basket pages. The builder post said to audit the furnace contract and did not publish its address in the text. [unknown]

## Engineering

_Research pending._

## Team

@stonksdotfun is the official handle; @nikshepsvn bios as onchain ETFs @stonksdotfun and posted the alpha site, flagship indexes and the treasury transfer. Site JS and the 1 Sep CA post name the same $STONKS address. DexScreener lists stonks.fun and @stonksdotfun on that token. No public repository URL was located. [verified S5 S6 S8 S12 S22]

## Product and economics

The site and 2 Sep post describe an index builder: pick from 23 tokenized stocks and ETFs, set weights, publish one ERC-20. Featured books are MAG7, DEGEN and SILICON (site title Everything Runs On This). JS exposes cashMint, mintInKind, redeem and cashRedeem, and says in-kind exit reads no price feed and cannot be paused. [claim S4 S5 S7]

$STONKS is a DopplerDN404 created 2026-07-09 through Airlock.create with DN404Factory, 1B supply, 700M to sell, USDG quote, cert URI https://stonks.fun/certs/stonks/, and a Uniswap v3 pool created in the same transaction. YOWL was launched 2026-07-14 through StonksLauncherV3.launch. That is the earlier DN-404 Uniswap-v3 pad. [verified S15 S16 S18 S21 S24]

@stonksdotfun bio still says fees burn $STONKS. The 1 Sep posts say the $STONKS CA does not change with the basket rebrand. [claim S6 S8]

DexScreener STONKS/USDG Uniswap v3: 24h volume $6,138.39, market cap $648,468, pair liquidity $409,860.91 at 2026-09-03T02:57:00Z. Blockscout: 141 STONKS holders; MAG7 1 holder and totalSupply 0.993…. DEGEN and SILICON totalSupply 0; no DexScreener pairs for the three baskets. [verified S14 S19 S22]

## Communications

Official account posted the basket builder is open [claim S7]

Official account posted the $STONKS contract address [claim S8]

Official account posted the $STONKS treasury as destroyed [claim S9 S13]

Official account posted the index platform live in alpha [claim S10 S12]

Official account posted a rebrand toward RWA baskets [claim S11]

## Findings

MAG7, DEGEN, SILICON, the basket factory and the cash-redeem router have unverified source. DEGEN and SILICON report zero supply. MAG7 has one holder and about 0.99 tokens. The posted 36.5% treasury burn names a furnace contract whose address is not in the post text. [claim S4]

- Basket factory, MAG7, DEGEN, SILICON and the cash-redeem router have unverified source; createBasket is callable by the same EOA that created $STONKS. [verified S20 S25 S26]
- DEGEN and SILICON supply is 0; MAG7 has one holder. A card that treats three flagship indexes as traded books would overstate activity. [verified S19 S22 S27 S28]
- The posted 36.5% treasury burn is a social claim until the furnace address is reproduced. [claim S9 S13]
- No audit report was located in this review. [unknown]

- Receipts: stonks.fun HTML and JS bundle, @stonksdotfun profile and five posts, two @nikshepsvn posts, Blockscout API v2 plus RPC for $STONKS, DN404Factory, StonksLauncherV3, MAG7/DEGEN/SILICON, basket factory, router and the Uniswap v3 pool, and DexScreener token-pairs were opened on 2026-09-03; excerpts are copied from those pages. [verified S4 S5 S14 S22]
- Numbers: 24h volume and market cap are the STONKS/USDG pair slice, not an all-chains figure; MAG7 holders 1 is not $STONKS holders 141. [verified S14 S19 S22]
- Adversarial: the strongest contrary reading is that this is StonkBrokers, The Index, Solana StonkFun, or still only an announced pad. Official CA, DopplerDN404 source name, StonksLauncherV3, createBasket MAG7 and the stonks.fun JS map argue against those merges; census announced is below the reproduced 4663 bar. [inference S8 S14 S18 S19]

## Sources

- S4 — stonks.fun home HTML.
- S5 — stonks.fun app bundle index-BTcKrI2q.js.
- S6 — STONKS.FUN profile.
- S7 — the builder is open.
- S8 — token stays the same — STONKS CA.
- S9 — treasury = destroyed.
- S10 — new platform is live.
- S11 — new stonks platform launching.
- S12 — new stonks.fun site live in alpha.
- S13 — burned the entire $STONKS treasury.
- S14 — STONKS 0x3F298f2b… address.
- S15 — DopplerDN404 verified source.
- S16 — STONKS create tx 0x8e58a58c….
- S17 — DN404Factory 0x37A9Fa20….
- S18 — StonksLauncherV3 0x2a71F10b….
- S19 — MAG7 token 0xA5eC9f04….
- S20 — MAG7 createBasket tx 0xd20d4e4f….
- S21 — STONKS/USDG UniswapV3Pool 0x37C0Bd95….
- S22 — STONKS token pairs on robinhood.
- S24 — YOWL launch tx 0x47d48250….
- S25 — Basket factory 0xd21cdd54….
- S26 — Basket router 0x5fF3F089….
- S27 — DEGEN basket 0xc7ceC009….
- S28 — SILICON basket 0x68c6775D….

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:00:00Z; methodology_version: proofline-v1.0.
