---
slug: pew-fun
coverage: stub
methodology_version: proofline-v1.0
---

# pew.fun — research record

## Identity

pew.fun is classified as Uniswap-pool launchpad.

Pew.fun launches tokens straight into a locked SushiSwap or Uniswap v3 pool on Robinhood Chain. There is no bonding curve and no graduation; the token is tradeable from block one. The Emerson-mapped factory is 0xC9182C…9D8c. The site also lists later instant factories, stock-quote factories, and fixed-price launch parties. The handle is @pewdotfun; the site is pew.fun. The X bio currently reads (former) Robinhood Launchpad.

Themes: launchpad, stock-paired

## Deployment

SushiSwap v3 launch factory: 0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c on robinhood-chain. [verified S2 S9 S10 S15]

Instant Uniswap v3 factory (VITE_INSTANT_FACTORY): 0x5A73772dbb25ce8738534A9e96932Aee5C4bDf42 on robinhood-chain. [verified S2 S10 S20]

Instant factory (JS 4663 instantFactories[1]): 0x3364e68A4454D18132D0a2ac538c966369828291 on robinhood-chain. [claim S2 S10]

Sushi launch zap: 0x16feDC5DB0e076d2ca08002537Db7353227Eb18b on robinhood-chain. [claim S2 S10]

Factory owner() / deployer: 0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0 on robinhood-chain. [verified S9 S10 S13]

## Control

owner() on factory 0xC918…9D8c, VITE_INSTANT_FACTORY 0x5A73772d…Df42, and JS instant factories 0x3364…8291 / 0x7DA7…576e returns 0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0. That address has no code. The Sushi factory is not an ERC1967 proxy this pass (slots zero, 22352-byte code, Blockscout unverified). No timelock address was located. Launched token SUSHICAT is source-verified as PewToken.sol. [verified S10 S11 S13]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

@pewdotfun names pew.fun in the website field. pew.fun HTML twitter:site is @pewdotfun. GitHub user pewdotfun names Pew.fun, blog pew.fun, twitter_username pewdotfun, public_repos 0. Display name Pew. Bio (former) Robinhood Launchpad. DexScreener lists @SushiCatBot on the SUSHICAT token; that is not the pad handle. [claim S1 S4 S14 S17]

## Product and economics

JS and posts: a launch has no bonding curve and no graduation. Liquidity locks in a SushiSwap v3 or Uniswap v3 pool; the token is tradeable from block one. Creator LP-fee share is shown as 90% vs 70% for others. Launch parties fix one seat price, cap airdrop at 2.5% of supply, pool ETH as the opening buy, and lock LP with no withdraw path. Canonical factories pair against NVDA, AAPL, SPCX, MSFT, TSLA, AMZN, GOOGL, SPY, PONS, or USDG. [claim S1 S2 S6]

Same-day path change on 17 Jul 2026: 09:32Z post named locked Uniswap V3 (Noxa); 21:52Z factory 0xC918…9D8c deployed; 22:51Z SUSHICAT minted through it as PewToken; 22:58Z post named SushiSwap v3. JS still lists that address under sushi.factories and a later 24498-byte VITE_INSTANT_FACTORY for Uniswap. [claim S2 S5 S6] [verified S11 S12 S18]

HARVEST.md OKX lifetime since 2026-07-01: 555 launched / $11.8M DEX (dashboard 403 this pass). Factory nonce 556 and transactions_count 1231. Emerson 30d Platform Summary has no Pew.fun row. Latest sampled factory to-txs through 31 Aug 2026 are LpFeesCollected. SUSHICAT/WETH SushiSwap v3 pair 0x0FA4c2ca…4E27 liquidity.usd 8672.95 volume.h24 101.02. Llama has no pew protocol. Do not treat nonce 556 as a launch census. [claim S16] [verified S10 S17 S19 S22]

## Communications

@pewdotfun posts a comeback run is pending [claim S7]

@pewdotfun posts SushiSwap fee-collector article [claim S8]

@pewdotfun posts first SushiSwap launchpad live [claim S6]

@pewdotfun posts pew.fun live on Robinhood Chain [claim S5]

## Findings

The Sushi factory is unverified on Blockscout. owner() on that factory and on later instant factories is one EOA with no code. The 17 Jul morning post named Uniswap V3 (Noxa) before this factory existed; an integrator that treats Pew as NOXA is on the wrong address. The handle bio says former while the site and fee-collect txs are still live. [verified S9 S10 S13] [claim S5 S7]

- Sushi factory source is not verified on Blockscout this pass. [verified S9]
- owner() on multiple factories is one EOA with no code. [verified S10 S13]
- 17 Jul morning post named Noxa; the reproduced factory is not the NOXA factory. [claim S5] [verified S9]
- Handle bio is (former); Emerson 30d has no Pew.fun launches. [claim S4 S15]
- OKX 555 / $11.8M was not reproduced this pass (Cloudflare 403). [claim S16]
- No audit report URL. [unknown]
- DexScreener SUSHICAT twitter is @SushiCatBot, not @pewdotfun. [claim S17]

- Receipts: pew.fun HTML/JS/docs, X profile and 17 Jul / 31 Jul / 11 Aug posts, GitHub user/org, Emerson Dune factory map, OKX Dune 403, Llama 400, DexScreener SUSHICAT, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S9 S10 S15]
- Numbers: bytecode lengths, nonces, and owner() are chain 4663 RPC. SUSHICAT holders 5163 is Blockscout. Pair liq/vol are DexScreener. OKX 555 / $11.8M is HARVEST.md, not a live table. Emerson 30d has no Pew.fun row. [verified S10 S11 S17]
- Adversarial: strongest contrary reading is that Pew is NOXA (the 09:32Z post) or that 0xC918…9D8c is idle leftover code. Same-day factory create + SUSHICAT PewToken + Sushi post, JS sushi.factories, Emerson map, and 31 Aug LpFeesCollected sit on this address. NOXA factory is 0xD9eC…FccB. Circus, Sentry and Klik factories do not match. [inference S2 S5 S9 S15]

## Sources

- S1 — pew.fun home.
- S2 — pew.fun app bundle index-CURS-kWl.js.
- S4 — Pew profile.
- S5 — pew.fun is Live on Robinhood Chain.
- S6 — first SushiSwap launchpad on Robinhood Chain.
- S7 — Pew team waiting for a comeback run.
- S8 — SushiSwap fee collector news link.
- S9 — Address 0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c.
- S10 — eth_getCode / owner() Pew factories.
- S11 — Address 0xaA4b6a79Df257E50E0079cD812A92262eE3951b0.
- S12 — SUSHICAT creation tx 0x66fc302b…e8f5.
- S13 — Address 0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0.
- S14 — users/pewdotfun.
- S15 — Robinhood memecoin launchpads 30d factory map.
- S16 — Robinhood Chain launchpads lifetime (HARVEST.md).
- S17 — SUSHICAT token pairs on Robinhood.
- S18 — Factory creation tx 0x8cc821ba…c523.
- S19 — Factory counters 0xC9182C28…9D8c.
- S20 — Address 0x5A73772dbb25ce8738534A9e96932Aee5C4bDf42.
- S22 — LpFeesCollected tx 0x1baac473…46bc.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:56:00Z; methodology_version: proofline-v1.0.
