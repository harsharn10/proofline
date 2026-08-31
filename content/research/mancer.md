---
slug: mancer
coverage: stub
methodology_version: proofline-v1.0
---

# Mancer — research record

## Identity

Mancer describes itself as the DEX aggregator and order layer of Robinhood Chain. Its quoted feature set includes routed swaps, limit orders, stops, OCO brackets and recurring buys; the project's own posts place it in a gated beta for Chain Mancers and StonkBrokers holders. [claim S2 S7 S5]

## Deployment

The reviewed documentation does not publish the router, settlement, executor or token contract addresses, so the production deployment could not be mapped in this pass. [unknown]

The workbook records a $MANCER token at `0xc72f232a6869e6cf34dc06129affd07f8a2a246a`; the address has not been reproduced on the explorer. [claim S6]

## Control

Users approve one Mancer contract, which Mancer says may forward trades only to an allowlisted set of venue contracts. The reviewed page does not identify who controls that allowlist or how changes are delayed. [claim S2]

Resting orders are signed messages backed by token allowances. Free cancellation is recorded and honored by Mancer's executor, while onchain cancellation and allowance revocation are the chain-enforced fallback paths. [claim S2]

## Security

Mancer says every execution enforces a user-accepted minimum output onchain and reverts when settlement cannot meet that floor. This behavior has not yet been reproduced against a verified deployment. [claim S2]

The project posted on 2026-08-25 that a formal audit of the router and order contracts was under way with public access to follow; no report, scope or deployment-to-audit match was found in the reviewed official material. [claim S7 S5] [unknown]

## Engineering

The documentation describes route splitting across live venues, volatility-based slippage defaults, native ETH wrapping, signed all-or-nothing limit orders, stop triggers, OCO cancellation and scheduled recurring fills. These are design claims pending contract and executor verification. [claim S2]

## Team

The reviewed official pages do not identify the operating entity, named contributors, multisig signers or incident contacts. [unknown]

## Product and economics

Mancer publishes pair-dependent fees: stable-to-stable swaps at 0%, ETH-to-stable at 0.02%, other swaps at 0.10%, and young-token swaps at 0.50%; order fills add a larger per-fill rate and cap the charge at the rate signed by the user. [claim S2]

The documentation says Mancer pays gas for executor-submitted order fills, while users pay network gas for swaps and onchain cancellations. Very small scheduled fills may be skipped when execution cost is uneconomic. [claim S2]

The workbook records each Chain Mancer NFT as backed by 500k MANCER, with 1,250 NFTs reserved to back an Anvil LP; the fee-claim mechanics for NFT holders were not verified. [claim S6]

## Communications

The official documentation distinguishes identity verification badges from endorsements and discloses that stock-token trading is restricted in some regions, including the United States. [claim S2]

The project's 2026-08-14 post announced the beta for NFT holders and its 2026-08-25 post announced the audit; no public-open post was found through 2026-08-31. [claim S7 S8 S5]

## Findings

The strongest documented property is the absence of deposited order custody: tokens remain in the user's wallet until a signed fill executes. The largest unresolved questions are the deployed address map, allowlist authority, executor controls and independent audit coverage. [inference S2]

## Sources

- S2 — [Mancer documentation](https://mancer.xyz/docs), reviewed 2026-08-31.
- S1, S3, S4 — site, whitepaper and X account (census links).
- S5–S8 — Grok desk intake artifacts (ecosystem map, workbook, X fills).

See `content/sources/mancer.yaml` for every entry's accessed_at, claim and excerpt.

## Review metadata

First documentation pass by harsharn10 on 2026-08-31 (research desk commit 5393021, intaken 2026-08-31). Coverage remains a stub until the contracts, privileged controls and audit status are independently verified.
