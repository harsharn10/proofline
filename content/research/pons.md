---
slug: pons
coverage: stub
methodology_version: proofline-v1.0
---

# Pons — research record

## Identity

Pons Labs, LLC operates a launch-and-trade interface for fixed-supply tokens on Robinhood Chain. The protocol's reference token is PONS at `0x39dbed3a2bd333467115de45665cc57f813c4571`. [claim S1 S2] [verified S3]

## Deployment

The current docs publish active factory `0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB` and active locker `0x736D76699C26D0d966744cAe304C000d471f7F35`, alongside legacy factory and locker addresses. New versions are said to ship as new immutable factory and locker deployments. [claim S2]

Current launches create a fixed one-billion-token supply and a locked Uniswap V3 WETH pool in one transaction. There is no bonding curve and no migration; trading continues in the original pool after the paired-WETH graduation threshold is reached. [claim S2]

This differs materially from the prior seed description of a V2 curve graduating to Uniswap v4. DefiLlama still reports separate Pons V1 and V2 adapters, so version labels must accompany historical metrics and mechanics. [verified S3 S4] [inference S2 S3 S4]

## Control

Pons says each token's creator/protocol fee split is snapshotted at launch and cannot change later. The active factory uses a 70/30 creator/protocol split, while legacy launches retain their original 90/10 split. [claim S2]

Community takeovers are reviewed by the Pons team and may redirect a token's creator-fee payout wallet when the contracts permit it; the docs say this does not change the token, pool or locked liquidity. [claim S2]

The active factory and locker ownership, privileged functions, signer topology and any delay around fee-recipient or factory changes were not independently reproduced in this pass. [unknown]

## Security

The interface says it never holds user funds and that every launch and trade is submitted through the user's wallet. It also discloses smart-contract, wallet, RPC and indexer failure risks and warns that displayed values are estimates rather than execution guarantees. [claim S1 S2]

The first two blocks apply launch restrictions: only the creator's initial buy may execute in the launch block, then per-wallet holding and buy caps apply for the remainder of the window. Selling and wallet transfers are not restricted. [claim S2]

No independent audit, public bounty, deployed-bytecode match or incident-response record was located in the reviewed sources. [unknown]

## Engineering

The docs provide factory events, pool `Swap` events, viem examples, read methods for token and factory state, a graduation-status call and fee-split reads. They direct indexers to factory and pool events as the authoritative source and warn that wide public-RPC log queries must be chunked. [claim S2]

No public source repository or reproducible build instructions were linked from the reviewed site. Published integration ABIs are useful but do not establish source-to-bytecode equivalence. [inference S2]

## Team

The site identifies Pons Labs, LLC and publishes `contact@ponsfamily.com` for integration, support and partnership questions. Named technical contributors and governance signers were not established. [claim S1 S2]

## Product and economics

Each current launch uses WETH as its sole quote asset, a 1% pool fee, a 0.0005 ETH launch fee and a default 4.2 ETH graduation threshold. Graduation is only a threshold indicator and does not guarantee quality, future liquidity or an exit. [claim S2]

Pons says 80% of protocol fees currently fund a manual TWAP that buys and burns PONS, with the remaining 20% funding infrastructure and team expansion. It explicitly says the 80% allocation is not immutable yet and is intended to become immutable and automated in a future release. [claim S2]

At access time on 2026-08-31, DefiLlama reported about $85.9 million of 24-hour volume, $294.7 million over 30 days, $5.34 million of 24-hour fees and $26.5 million over 30 days. These are third-party adapter outputs and must remain timestamped. [verified S3 S4]

## Communications

The current documentation directly contradicts the older seed narrative: current launches are WETH-only Uniswap V3 pools with no curve or migration, not a V2 curve with USDG/stock-token quote assets graduating to v4. The project should be presented by deployment generation rather than as one timeless mechanism. [disputed S2] [inference S2 S3 S4]

## Findings

Pons has a detailed integration surface and material third-party activity measurements. The largest unresolved risks are privileged control over the active factory and locker, the mutable protocol-revenue policy, missing audit evidence and the absence of a linked public source repository. [inference S2 S3 S4]

## Sources

- S1 — [Pons launchpad](https://ponsfamily.com), reviewed 2026-08-31. [claim S1]
- S2 — [Pons documentation](https://docs.ponsfamily.com), reviewed 2026-08-31. [claim S2]
- S3 — [DefiLlama Pons fees API](https://api.llama.fi/summary/fees/pons?dataType=dailyFees), accessed 2026-08-31. [verified S3]
- S4 — [DefiLlama Pons volume API](https://api.llama.fi/summary/dexs/pons?dataType=dailyVolume), accessed 2026-08-31. [verified S4]

## Review metadata

Primary-source and activity-data pass by `harsharn10` on 2026-08-31. Approver pending; not published. Coverage remains a stub pending privileged-control, source-verification and audit evidence. [unknown]
