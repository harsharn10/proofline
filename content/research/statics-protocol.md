---
slug: statics-protocol
coverage: stub
methodology_version: proofline-v1.0
---

# Statics Protocol — research record

## Identity

Statics is an EqualFi Labs protocol whose public design spans a fixed-supply Genesis token and Operator NFTs plus a later multi-asset suite for baskets, a Statics Dollar, lending, flash loans and Uniswap v4 liquidity. [claim S1 S9]

## Deployment

Statics says the Genesis launch is live on Robinhood mainnet with a fixed one-billion-token supply, 800 million tokens across six Doppler curves and a fixed collection of 5,555 Operators backed by 180,000 STATICS each. [claim S1]

The basket, Dollar, lending and general-pool suite follows a separate deployment and governance lifecycle. The published Robinhood address manifest reviewed in this pass is explicitly testnet-only (chain 46630) and must not be treated as a mainnet deployment record. [claim S1 S3 S9]

The workbook records a STATICS token at `0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd`; neither it nor any Genesis contract has been reproduced on the explorer. [claim S6 S7]

## Control

The documented architecture places both `StaticsDiamond` and `StaticsDollarCoreDiamond` under one `StaticsTimelock`. A configured multisig proposes and cancels operations, execution is open after the delay, and a guardian may pause exposure-increasing actions and quarantine baskets. [claim S2 S10]

The documented mainnet default delay is seven days, but the deployed mainnet timelock address, current delay, signer identities and threshold were not independently reproduced in this pass. [claim S2]

## Security

The official security model says Statics holds user assets and that repository tests are not an external audit. It says the broader multi-asset and Statics Dollar diamonds require independent review before production use. [claim S10]

Basket creation can become permissionless and accept arbitrary ERC-20 constituents. The security model explicitly identifies negative rebases, arbitrary burns, deceptive balances, blocklists, transfer pauses and hostile callbacks as behaviors that can halt or damage affected baskets. [claim S10]

Diamond cuts remain the implementation-upgrade boundary until governance executes a future reviewed cut that removes that authority. [claim S2 S10]

## Engineering

The public repository contains Solidity sources, an SDK, deployment tooling and focused unit, integration, fork, fuzz and invariant test paths under a BUSL-1.1 license. Its documented architecture separates Dollar Core custody from the shared Statics Diamond while using namespaced accounting for baskets, rewards, lending and fee flows. [claim S9]

Repository tests and documentation are engineering evidence, not evidence that a specific mainnet deployment matches the reviewed commit or has passed an independent audit. [inference S9 S10]

## Team

The repositories and documentation are published under EqualFi Labs. Named contributors, the operating legal entity and governance signer identities were not established in this pass. [claim S9]

## Product and economics

The live Genesis design allocates 800 million STATICS to six launch curves, 100.1 million to treasury vesting, 99.9 million to Operator backing and 120 million as a permanent market tail. Each circulating Operator is described as gross-backed by 180,000 STATICS. [claim S1]

The later suite is designed for fixed-composition baskets, a shared PositionNFT, self-backed basket lending, Statics Dollar issuance and hook-managed Uniswap v4 liquidity. Those capabilities must not be presented as live merely because the Genesis launch is live. [claim S1 S9]

The official account's 30–31 Aug posts describe STATICS stakers picking any 12 assets and earning from every pool trading them, Operators borrowing up to 95% against their backing, and a planned USDstx options-based stable; the same posts say the DEX is not live and credit is not enabled. [claim S8 S6]

## Communications

The rollout page clearly separates fixed onchain parameters from contingent outcomes such as volume, rewards, liquidity growth, arbitrage participation and valuation. [claim S1]

## Findings

Statics provides unusually detailed public architecture and threat-model documentation. The central publication risk is scope confusion: the live Genesis system and the broader upgradeable basket/Dollar/lending suite are distinct rollout stages. [inference S1 S9 S10]

## Sources

- S1 — [Rollout and availability](https://docs.staticsprotocol.com/docs/rollout/), reviewed 2026-08-31.
- S2 — [Timelock and roles](https://docs.staticsprotocol.com/docs/governance/timelock-and-roles/), reviewed 2026-08-31.
- S3 — [Robinhood testnet deployment](https://docs.staticsprotocol.com/docs/reference/robinhood-testnet-deployment/), retained as testnet-only context.
- S4, S5 — site and X account (census links).
- S6–S8 — Research intake artifacts (ecosystem map, workbook, X fills).
- S9 — [EqualFiLabs/statics](https://github.com/EqualFiLabs/statics), reviewed 2026-08-31.
- S10 — [Statics security model](https://github.com/EqualFiLabs/statics/blob/master/SECURITY.md), reviewed 2026-08-31.

See `content/sources/statics-protocol.yaml` for every entry's accessed_at, claim and excerpt.

## Review metadata

First primary-source pass by harsharn10 on 2026-08-31 (research desk commit 5393021, intaken 2026-08-31). Coverage remains a stub pending mainnet address verification, deployed governance reads and independent audit evidence.
