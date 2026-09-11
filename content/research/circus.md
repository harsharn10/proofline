---
slug: circus
coverage: stub
methodology_version: proofline-v1.0
---

# Circus — research record

## Identity

Circus is classified as Bonding-curve launchpad.

Circus is a Robinhood Chain token launchpad at circus.trade. Classic Curve launches a fixed-supply token onto an ETH bonding curve and graduates into a locked Uniswap pool. A second Fair Open lane is described as a Doppler locked Uniswap v4 pool with no bonding phase. The handle linked from the site is @circus_trade.

Themes: launchpad

TL;DR: ETH bonding-curve pad on 4663. Official copy disagrees on v3 vs v4 graduation; implementation source was not read this pass.

## Deployment

barcusLaunchpad / circusQuoteLaunchpad (ERC1967 proxy): 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00 on robinhood-chain. [claim S21]

Launchpad implementation (ERC1967 slot): 0x822E175C1ae12166A0Ea3299d083Da48E6C42B96 on robinhood-chain. [claim S22]

CircusLocker (barcusLocker): 0xA256bC02dbB92ed1cB607a7DE7b0bbEBca29e930 on robinhood-chain. [claim S23]

JS barcusTimelock: 0xC126829B4b3782ad30484b298C762507bf9bCa2A on robinhood-chain. [claim S24]

Launchpad owner() / factory creator: 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681 on robinhood-chain. [claim S25]

circusQuoteLocker: 0xF421C3977E5D5Fc4aBe50195391970a6AB1d2B7D on robinhood-chain. [claim S26]

## Control

The launchpad proxy is 130 bytes of ERC1967 code. owner() is 0x90Ae…0681 with empty code. Implementation 0x822E…2B96 has 24061 bytes; owner() is zero. JS barcusTimelock has code but getMinDelay() reverts and is not the proxy owner. [verified S21 S22 S24 S25]

## Security

No audit report URL was found. [unknown]

## Engineering

_Research pending._

## Team

circus.trade and @circus_trade cross-link. No legal name or repository is published. [claim S19 S20]

## Product and economics

Classic Curve: 1B supply, 800M on the curve, ~4.2 ETH / ~$6k raise, then an atomic move into a locked Uniswap pool. Fair Open is marked LIVE and described as Doppler multicurve Uniswap v4 with a decaying sniper tax. [claim S2]

The homepage hero still says Uniswap v3. That is an official-copy conflict, not a resolved routing fact. [disputed S19 S2]

Homepage counters are project UI, not an independent TVL. DexScreener's deepest CRUDECAT book this pass is a Uniswap v3 USO pair listed on the circus.trade board; that volume is CRUDECAT's book, not a Circus factory KPI. [claim S19 S27]

## Communications

_Research pending._

## Findings

- Proxy owner() returns an address with no code, not the labeled timelock address. [verified S21 S24 S25]
- Homepage and docs disagree on Uniswap v3 vs v4 graduation. [disputed S19 S2]
- No audit artifact was located despite "audited factory" copy. [unknown]

- Proxy owner() returns an address with no code; this read alone does not establish access checks on privileged functions. [verified S21 S25]
- Homepage and docs disagree on v3/v4 graduation; neither establishes the deployed route. [disputed S19 S2]
- Implementation source and the deployed liquidity-lock controls were not established this pass. [unknown]

- Receipts: collector reports opening homepage, how-it-works, X and DexScreener on 2026-09-10; contract-code, owner, implementation-slot and delay reads are recorded separately. [claim S19 S2 S20 S21 S24 S27]
- Numbers: $1.22M / 48 graduated are homepage strings; CRUDECAT volume is a DexScreener pair, not factory volume. [claim S19 S27]
- Adversarial: CRUDECAT's USO v3 book could be a later market, not the Circus IPO pool; factory logs are still required. [inference S27]

## Sources

- S2 — How it works.
- S19 — Homepage.
- S20 — @circus_trade profile.
- S21 — eth_getCode/owner launchpad proxy.
- S22 — eth_getCode implementation.
- S23 — eth_getCode CircusLocker.
- S24 — eth_getCode/getMinDelay timelock.
- S25 — eth_getCode owner EOA.
- S26 — eth_getCode circusQuoteLocker.
- S27 — CRUDECAT token pairs.

## Review metadata

Compiled from WORK-20260910-grok-heavy-circus by grok-heavy as of 2026-09-10T18:30:00Z; methodology_version: proofline-v1.0.
