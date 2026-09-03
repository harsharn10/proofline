---
slug: mancer
coverage: stub
methodology_version: proofline-v1.0
---

# Mancer — research record

## Identity

Mancer is classified as Trading aggregator.

Mancer is Robinhood Chain's DEX aggregator and non-custodial order layer: a quote races eligible venues, the winning route (or a split) executes in one transaction, and signed limit, stop, OCO and recurring orders stay in the user's wallet until fill. A user connects a wallet at mancer.xyz. Blockhash / @MancerXYZ run the executor; the $MANCER token is a separate Clutch CollectionToken.

Themes: tooling, nft, memecoin

## Deployment

$MANCER token (CollectionToken, Clutch NFT-Token AMM): 0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A on robinhood-chain. [verified S12 S13 S14 S16]

MancerRouter (live; 1,343 txs this pass): 0xFBA80Ff9C50462661f9D328E033e251251537FA5 on robinhood-chain. [claim S16 S17]

MancerOrders (live; 79 txs this pass): 0x22Db8B8a0D14916f7A84909a0d92DF9024B57f88 on robinhood-chain. [claim S16 S18]

CollectionTokenDeployer (token creator_address_hash): 0x662003BF6049e36b4E887D47b8df8718fFBbc6C2 on robinhood-chain. [claim S12 S15]

MancerRouter (earlier verified copy; 17 txs): 0x67b7ec06828425BdDF02C52789B7939924608f79 on robinhood-chain. [claim S17]

MancerOrders (earlier verified copy; 1 tx): 0xff86B3D4266c9374DA9D8A473E8533965ab6A0C3 on robinhood-chain. [claim S18]

## Control

_Research pending._

## Security

Token source states no owner, no admin, no mint after deployment; `owner()` reverts. Router and Orders were deployed from the same EOA that created the token market. Whitepaper: two small contracts, no upgradeability, venue targets allowlisted. Sherlock collaborative audit 24–27 Aug, report 29 Aug, 0 high / 3 medium / 11 low; "not fixed and not acknowledged" 0. Live Router predates that audit window. AllowanceTarget live instance not identified (four verified copies, 0 txs). [verified S14 S16] [claim S11 S21]

## Engineering

_Research pending._

## Team

Whitepaper author Michael Hirsch — Blockhash. @MichaelHirsch posts as building @MancerXYZ at @BlockhashXYZ. Official handle @MancerXYZ; site swap widget links the token CA. Sherlock names repository blockhash-xyz/mancer-contracts, which is not among the org's public repos this pass. [verified S9 S24] [claim S11 S27]

## Product and economics

Docs: every quote is a race across eligible routes; the engine may split across pools; ETH wraps inside the swap. Limit orders are free signatures. A stop is a triggered limit. OCO filling either side voids the other in the Orders contract. Recurring buys split one decision across a time grid. [claim S10]

Live execution contracts on 4663 are MancerRouter `0xFBA80Ff9…7FA5` (1,343 txs) and MancerOrders `0x22Db8B8a…7f88` (79 txs), both deployed 2026-08-20T23:35:44Z by `0x0Dc1Dd32…4550`. Earlier verified copies exist with 17 and 1 txs. [verified S17 S18]

$MANCER at `0xc72F…246A` is a verified CollectionToken (fixed 2.5B supply, no owner). It was created 2026-08-06 via `createMarket` on a contract Blockscout named AMMFactoryV2. Primary book MANCER/WETH Uniswap v3 `0x543127d6…cF54`. [verified S14 S15 S19]

Blockscout holders_count 9901, total supply 2.5B × 1e18. DexScreener MANCER/WETH v3 liq $561,003.72 vol $1,241,223.49; MANCER/STONKBROKER v3 liq $445,813.78 vol $556,008.76 (2026-09-02T23:13–23:14Z). Status page: quotes, swaps and order execution operational. [verified S13 S19 S20] [claim S22]

## Communications

Official account quoted a focus on quotes and integrations [claim S23]

Sherlock posted a completed collaborative audit for Mancer [claim S25]

Official account thanked beta testers after public launch [claim S29]

Official account posted Mancer is open to the public [verified S24]

Official account posted a router-and-order audit in progress [claim S30]

Status page listed quotes, swaps and orders operational [claim S22]

## Findings

Signed cancellation is honored by Mancer's executor; a chain-enforced exit needs on-chain cancel or allowance revoke. Venue allowlist control was not reproduced. Four verified AllowanceTarget copies showed zero transactions this pass, so the live approval target is not identified. The Sherlock report exists; bytecode-to-commit matching was not done. [claim S9]

- Signed cancel is executor-honored; chain exits are on-chain cancel or allowance revoke. [claim S10]
- Venue allowlist owner and the live AllowanceTarget were not reproduced. [unknown]
- Live Router was deployed 20 Aug; Sherlock audit window is 24–27 Aug — bytecode match to the final commit is open. [claim S21] [verified S17]
- $MANCER is a Clutch CollectionToken, not a MancerRouter receipt; presenting Clutch NFT backing as aggregator TVL would mix products. [verified S14]
- Mancer Shield is an announcement, not a deployment this pass. [claim S26]

- Receipts: site, docs, whitepaper, status, Blockscout, RPC, DexScreener, Sherlock report URL, and the cited X posts were opened on 2026-09-02. [verified S9 S16 S17 S24]
- Numbers: DexScreener figures are aggregator prints for MANCER pairs, not explorer pool inventory. [claim S19]
- Adversarial: the strongest contrary reading is that Mancer is only a Clutch memecoin with a docs site. The verified Router/Orders, 1,343 router txs, public-open post, and swap widget CA argue the aggregator is a separate live product that happens to share a deployer with the token. [inference S17 S24]

## Sources

- S9 — Official site / app.
- S10 — Docs.
- S11 — Whitepaper v1.0.
- S12 — Address 0xc72F…246A.
- S13 — Token 0xc72F…246A.
- S14 — CollectionToken source.
- S15 — Creation tx 0x9a6d78c1….
- S16 — eth_getCode / name / symbol / totalSupply.
- S17 — MancerRouter 0xFBA80Ff9….
- S18 — MancerOrders 0x22Db8B8a….
- S19 — tokens/v1 MANCER batch.
- S20 — token-pairs MANCER.
- S21 — Mancer collaborative audit report.
- S22 — Status page.
- S23 — Better execution, everywhere.
- S24 — Mancer is now open to the public.
- S25 — Audit complete post.
- S26 — Mancer Shield announcement (via prior X index).
- S27 — blockhash-xyz org.
- S29 — Thanks to beta testers.
- S30 — Audit in progress, public access to follow.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:16:00Z; methodology_version: proofline-v1.0.
