---
slug: hoodfun
coverage: stub
methodology_version: proofline-v1.0
---

# hood.fun — research record

## Identity

hood.fun is classified as Bonding-curve launchpad.

A bonding-curve launchpad on Robinhood Chain. One transaction deploys a token onto a constant-product curve; at the raise goal liquidity migrates into a locked Uniswap v3 pool. Users launch or buy from the hood.fun interface. The assigned handle is @hoodfunfamily; the live site names @hooddotfun.

Themes: launchpad, memecoin, rwa

## Deployment

Launchpad factory (Bitquery current): 0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c on robinhood-chain. [verified S11 S12 S13 S14]

Launchpad factory (Bitquery previous generation): 0x6a63d96ef77ae569fcb85934cf1bd1ec7fe9b33d on robinhood-chain. [verified S11 S13]

Platform (Mobula table): 0xc6a2941b962fb667786d7f4b97f7f965d6f0a4f8 on robinhood-chain. [verified S12 S13]

owner() of current factory, previous factory, and Mobula platform: 0xb3f3b54e11217f4f73e7a766b7caa187390d700d on robinhood-chain. [verified S13]

## Control

owner() on the current factory, previous factory, and Mobula platform address is 0xb3f3b54e11217f4f73e7a766b7caa187390d700d. That address has 171-byte code with a Gnosis Safe masterCopy selector. The whitepaper says the only privileged role is a 2-of-3 Safe, with a 7-day timelock on a new migrator, and that the locker has no withdraw. Threshold was not eth_called. [verified S13] [claim S10]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

Census handle @hoodfunfamily. Live site, Telegram, and @hooddotfun posts name @hooddotfun / t.me/hooddotfun. No repository URL. Flag handle-collision and unconfirmed-official. [claim S4 S9 S24]

## Product and economics

@hoodfunfamily and the whitepaper describe one transaction onto a constant-product curve with virtual reserves, no presale, no team allocation, then a locked Uniswap v3 pool at the raise goal. Default 1B supply, 80% on the curve, ~6.5 ETH raise. [claim S4 S10]

The create form also offers community-coin fee streaming, stock-paired graduation, anti-snipe, and a 2% max-wallet option. Contracts are described as fork-tested and being audited. [claim S15]

No DefiLlama protocol row. DexScreener search of both Bitquery factory addresses returned 0 pairs. No ≥$25k pair was attributed to this pad. Factory nonce 10576 and 4.40 ETH on 0x5fcc… are on-chain; they are not a listed pair. [verified S13 S19] [claim S20]

## Communications

@hooddotfun posts gm we are back [claim S18]

openpump lists hoodfun among four chain-4663 pads [claim S8]

@hooddotfun posts hood.fun is built for those moments [claim S21]

@hoodfunfamily replies on the coming-soon thread [claim S7]

@hoodfunfamily posts hoodfun coming soon [claim S5]

@hoodfunfamily posts bonding-curve launchpad teaser [claim S6]

## Findings

Two X handles use the hood.fun name: census @hoodfunfamily and site @hooddotfun. Factory 0x5fcc… exists on 4663 with nonce 10576, but DexScreener attached no pair to it this pass, so a live-pad card would overstate activity. [verified S13 S19] [claim S9]

- Official handle is open: @hoodfunfamily vs @hooddotfun. [claim S4 S9]
- No ≥$25k live pair was reproduced, so lifecycle stays announced. [verified S19]
- Owner is one 171-byte contract; Safe threshold and locker bytecode were not reproduced. [verified S13] [claim S10]
- Create page says being audited; no report URL. [claim S15]
- $HFUN 0x01224f60… is a different CA (Pons graduation in the intake). Flag ca-collision on ticker-only overlap. [claim S25]

- Receipts: X posts, hood.fun HTML, Bitquery, Mobula, DexScreener, Llama, Telegram, and RPC were opened on 2026-09-03; excerpts copied from those pages. Blockscout API v2 was Cloudflare-challenged; the address page title was returned. [verified S9 S13 S14]
- Numbers: bytecode lengths, nonces, ETH balances, and DexScreener pair counts are chain-slice or factory-address queries, not all-chains totals. [verified S13 S19]
- Adversarial: strongest contrary reading is that @hoodfunfamily is a quiet placeholder and the live pad is only @hooddotfun, or that factory 0x5fcc… is a different product Bitquery labelled hood.fun. Site HTML names @hooddotfun; RPC still shows the Bitquery address with code. Hookr is a different factory and mechanism. [inference S9 S11 S13]

## Sources

- S4 — hoodfun profile.
- S5 — hoodfun — coming soon.
- S6 — Something big is landing soon.
- S7 — yes please (reply).
- S8 — Every launchpad on chain 4663.
- S9 — hood.fun home.
- S10 — hood.fun whitepaper.
- S11 — Robinhood Meme Coin Launches API — hood.fun.
- S12 — Hood.fun Launchpad Integration on Robinhood Chain.
- S13 — eth_getCode / owner() hood.fun factories.
- S14 — Address 0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c.
- S15 — Launch a Coin.
- S18 — gm we are back.
- S19 — Search factory 0x5fcc1df0…452c.
- S20 — protocol/hoodfun.
- S21 — hood.fun is built for those moments.
- S24 — HOOD profile.
- S25 — eth_getCode $HFUN 0x01224f60….

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:15:00Z; methodology_version: proofline-v1.0.
