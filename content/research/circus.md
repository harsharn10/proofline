---
slug: circus
coverage: stub
methodology_version: proofline-v1.0
---

# Circus — research record

## Identity

Circus is classified as Bonding-curve launchpad.

Circus is a Robinhood Chain token launchpad at circus.trade. Classic Curve launches a fixed-supply token onto an ETH bonding curve and graduates into a locked Uniswap pool. A second Fair Open lane is described as a Doppler locked Uniswap v4 pool with no bonding phase. The handle linked from the site footer is @circus_trade.

Themes: launchpad

## Deployment

barcusLaunchpad / circusQuoteLaunchpad (ERC1967 proxy): 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00 on robinhood-chain. [verified S3 S8 S9]

Launchpad implementation (ERC1967 slot): 0x822E175C1ae12166A0Ea3299d083Da48E6C42B96 on robinhood-chain. [verified S8 S9 S10]

CircusLocker (barcusLocker): 0xA256bC02dbB92ed1cB607a7DE7b0bbEBca29e930 on robinhood-chain. [verified S3 S11]

JS barcusTimelock: 0xC126829B4b3782ad30484b298C762507bf9bCa2A on robinhood-chain. [claim S3 S12]

Launchpad owner() / factory creator: 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681 on robinhood-chain. [verified S8 S9]

circusQuoteLocker: 0xF421C3977E5D5Fc4aBe50195391970a6AB1d2B7D on robinhood-chain. [claim S3 S11]

## Control

_Research pending._

## Security

owner() on factory 0xb7fA26c6…cb00 returns 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681. That address has no code. Implementation slot 0x822E…2B96 (24061-byte code, Blockscout not verified). CircusLocker 0xA256…e930 is verified. JS barcusTimelock 0xC126…a2A has code but getMinDelay() reverted. How-it-works says audited factory; no report URL this pass. [verified S8 S9 S11] [claim S2 S12]

## Engineering

_Research pending._

## Team

@circus_trade is linked from the circus.trade footer (aria-label Circus on X). The bio t.co expands to circus.trade. HTML has no twitter:site. Display name Circus Trade. No product GitHub URL. GitHub org circus is an unrelated 2014 grammarware site. [verified S1 S5] [claim S16]

## Product and economics

Classic Curve: 1B supply, 800M sold on the curve, optional capped first buy, non-transferable outside the curve until graduation. Site and docs both name ~4.2 ETH as the raise target; how-it-works also writes ~$6k. Fees: 1% on the curve with 80% to the creator; after graduation 60% of pool fees to the creator. Fair Open is described as locked Uniswap v4 from the first block, powered by Doppler. Stock-paired and pToken (Arcus) lanes are posted by the handle. [claim S1 S2 S6 S17]

No Llama protocol row for circus.trade. Emerson 30d: 597 tokens, 370 deployers, last launch 2026-09-03 01:37:41 UTC; no Circus row in the 30d DEX volume table. OKX lifetime row circus.trade: 2597 launched, 32 traded, volume_usd 46.17M, volume_rwa 8.81M. Site counters: Raised on Curves $1.20M, Graduated Tokens 41. Factory nonce 4216 and Blockscout 115283 transactions. Do not mix those windows. [claim S1 S13 S14 S15] [verified S8 S9]

## Communications

@circus_trade posts bonding-curve stock-meme launchpad [claim S6]

@circus_trade posts Circus x Arcus pTokens [claim S17]

@circus_trade posts single-side creator fees [claim S18]

@circus_trade posts CRUDECAT / Arcus USO volume [claim S7]

## Findings

The live factory is an upgradeable ERC1967 proxy. owner() is one externally owned account with no code and no pending owner. JS names a timelock, but getMinDelay() reverted and the proxy owner is still that EOA. Home copy and how-it-works disagree on Uniswap v3 versus v4 at graduation. Implementation source is not verified. [verified S8 S9] [claim S2 S12]

- Factory is upgradeable; owner is one EOA with no code. [verified S8]
- Implementation source is not verified on Blockscout this pass. [verified S10]
- JS timelock is not the proxy owner; getMinDelay reverted. [verified S8] [claim S12]
- Home Uniswap v3 versus how-it-works Uniswap v4 is an open conflict. [claim S1 S2]
- No audit report URL. [unknown]
- Emerson 30d DEX volume table omits Circus; OKX lifetime volume is a different method. [claim S13 S14]

- Receipts: circus.trade, how-it-works, barcus-1 JS, X profile and posts, Emerson and OKX Dune, Llama protocols, GitHub org circus, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S3 S8 S13]
- Numbers: token counts and volume are Dune aggregator rows, not Llama. Bytecode lengths, nonce, owner(), and the implementation slot are chain 4663 RPC. Site $1.20M / 41 graduated are HTML counters. [verified S8] [claim S13 S14]
- Adversarial: strongest contrary reading is that 0xb7fA…cb00 is a leftover quote-lane proxy and new launches use Doppler airlock 0xeb7C…0862, or that Emerson's Circus label is a registry alias for another pad. Official JS sets both barcusLaunchpad and circusQuoteLaunchpad to this address on chainId 4663; Emerson factory map labels it Circus. A second JS barcusLaunchpad 0x9F4e…D5Cf has no code on 4663. Pons, LONG, Varo, Coinbarrel, and LetsCash use different factories. [inference S3 S8 S13]

## Sources

- S1 — circus.trade home.
- S2 — How it works.
- S3 — barcus-1 JS contract map.
- S5 — Circus Trade profile.
- S6 — Bonding-curve stock-meme launchpad.
- S7 — CRUDECAT / Arcus USO volume.
- S8 — eth_getCode / owner() factory 0xb7fA26c6…cb00.
- S9 — Address 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00.
- S10 — Address 0x822E175C1ae12166A0Ea3299d083Da48E6C42B96.
- S11 — CircusLocker and quote locker.
- S12 — Address 0xC126829B4b3782ad30484b298C762507bf9bCa2A.
- S13 — Emerson RH launchpads 30d.
- S14 — OKX RH launchpads RWA-paired meme analysis.
- S15 — protocols list / protocol/circus.
- S16 — orgs/circus.
- S17 — Circus x Arcus pTokens.
- S18 — Single-side fees.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:26:00Z; methodology_version: proofline-v1.0.
