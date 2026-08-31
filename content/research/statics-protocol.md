---
slug: statics-protocol
coverage: stub
methodology_version: proofline-v1.0
---

# Statics Protocol — research record

## Identity

Statics is an EqualFi Labs protocol whose public design spans a fixed-supply Genesis token and Operator NFTs plus a later multi-asset suite for baskets, a Statics Dollar, lending, flash loans and Uniswap v4 liquidity. [claim S1 S4]

## Deployment

Statics says the Genesis launch is live on Robinhood mainnet with a fixed one-billion-token supply, 800 million tokens across six Doppler curves and a fixed collection of 5,555 Operators backed by 180,000 STATICS each. [claim S1]

The basket, Dollar, lending and general-pool suite follows a separate deployment and governance lifecycle. The published Robinhood address manifest reviewed in this pass is explicitly testnet-only and must not be treated as a mainnet deployment record. [claim S1 S3]

## Control

The documented architecture places both `StaticsDiamond` and `StaticsDollarCoreDiamond` under one `StaticsTimelock`. A configured multisig proposes and cancels operations, execution is open after the delay, and a guardian may pause exposure-increasing actions and quarantine baskets. [claim S2 S5]

The documented mainnet default delay is seven days, but the deployed mainnet timelock address, current delay, signer identities and threshold were not independently reproduced in this pass. [claim S2]

## Security

The official security model says Statics holds user assets and that repository tests are not an external audit. It says the broader multi-asset and Statics Dollar diamonds require independent review before production use. [claim S5]

Basket creation can become permissionless and accept arbitrary ERC-20 constituents. The security model explicitly identifies negative rebases, arbitrary burns, deceptive balances, blocklists, transfer pauses and hostile callbacks as behaviors that can halt or damage affected baskets. [claim S5]

Diamond cuts remain the implementation-upgrade boundary until governance executes a future reviewed cut that removes that authority. [claim S2 S5]

## Engineering

The public repository contains Solidity sources, an SDK, deployment tooling and focused unit, integration, fork, fuzz and invariant test paths. Its documented architecture separates Dollar Core custody from the shared Statics Diamond while using namespaced accounting for baskets, rewards, lending and fee flows. [verified S4]

Repository tests and documentation are engineering evidence, not evidence that a specific mainnet deployment matches the reviewed commit or has passed an independent audit. [inference S4 S5]

## Team

The repositories and documentation are published under EqualFi Labs. Named contributors, the operating legal entity and governance signer identities were not established in this pass. [verified S4]

## Product and economics

The live Genesis design allocates 800 million STATICS to six launch curves, 100.1 million to treasury vesting, 99.9 million to Operator backing and 120 million as a permanent market tail. Each circulating Operator is described as gross-backed by 180,000 STATICS. [claim S1]

The later suite is designed for fixed-composition baskets, a shared PositionNFT, self-backed basket lending, Statics Dollar issuance and hook-managed Uniswap v4 liquidity. Those capabilities must not be presented as live merely because the Genesis launch is live. [claim S1 S4]

## Communications

The rollout page clearly separates fixed onchain parameters from contingent outcomes such as volume, rewards, liquidity growth, arbitrage participation and valuation. [claim S1]

## Findings

Statics provides unusually detailed public architecture and threat-model documentation. The central publication risk is scope confusion: the live Genesis system and the broader upgradeable basket/Dollar/lending suite are distinct rollout stages. [inference S1 S4 S5]

## Sources

- S1 — [Rollout and availability](https://docs.staticsprotocol.com/docs/rollout/), reviewed 2026-08-31. [claim S1]
- S2 — [Timelock and roles](https://docs.staticsprotocol.com/docs/governance/timelock-and-roles/), reviewed 2026-08-31. [claim S2]
- S3 — [Robinhood testnet deployment](https://docs.staticsprotocol.com/docs/reference/robinhood-testnet-deployment/), retained as testnet-only context. [claim S3]
- S4 — [EqualFiLabs/statics](https://github.com/EqualFiLabs/statics), reviewed 2026-08-31. [verified S4]
- S5 — [Statics security model](https://github.com/EqualFiLabs/statics/blob/master/SECURITY.md), reviewed 2026-08-31. [claim S5]

## Review metadata

First primary-source pass by `harsharn10` on 2026-08-31. Coverage remains a stub pending mainnet address verification, deployed governance reads and independent audit evidence. [unknown]
