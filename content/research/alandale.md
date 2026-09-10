---
slug: alandale
coverage: stub
methodology_version: proofline-v1.0
---

# Alandale — research record

## Identity

Alandale is classified as Native AMM.

Alandale is a ve(3,3) DEX on Robinhood Chain. Traders swap through classic AMM pools or Algebra concentrated-liquidity pools. Liquidity providers earn LUTE emissions. Holders lock LUTE into veLUTE and vote each epoch on which pools receive those emissions. Official docs and the app say trading fees and bribes from a pool go to the lockers who voted for it. The app footer states it reads on-chain data from Robinhood, chain 4663.

Themes: ve33, clmm, amm, vote-escrow, robinhood-native

TL;DR: Robinhood-only ve(3,3) CLMM: lock LUTE for veLUTE, vote emissions, collect pool fees. Sep 9 Llama V3 TVL $870k; preceding 24h volume $8.86m [CLM-1 CLM-12 CLM-18].

## Deployment

LUTE ERC-20 (RPC name Alandale, symbol LUTE). Llama protocol.address and docs token row are this address, not AlgebraFactory.: 0xD1e861CC5Eee7eA88649206b74504D78CCD7AEeA on robinhood-chain. [verified S4 S5 S6 S7]

AlgebraFactory (concentrated liquidity): 0x16494A80E08Bcb9285D87b67149d7b01774D82F8 on robinhood-chain. [verified S4 S5]

PairFactory (classic pools): 0xe0799417eff30A12249b8c30941BC2d7c52A0339 on robinhood-chain. [verified S4 S5]

RouterV2: 0xB90b0E114a32a3dA7b61D5eaae7D35Af9B1B5582 on robinhood-chain. [claim S4 S5]

SwapRouter (Algebra): 0x8971d5A8F950F021e97583855925B021bfaE2b35 on robinhood-chain. [claim S4 S5]

VotingEscrow (veLUTE): 0xc1a79e3A7b04c3f21C6409a78Ab58A8C822bE7dC on robinhood-chain. [verified S4 S5]

Voter: 0x4cF1c47B95031cD2bb1d102021D8Ede60392971C on robinhood-chain. [verified S4 S5]

Minter (also LUTE owner()): 0x782355E7771A9Aa0834de4Ae981DCF3b7aeC11e6 on robinhood-chain. [verified S4 S5]

NonfungiblePositionManager: 0xe62a5F67516dBDBA2Aa28b1512C8Ff44E42cB5c3 on robinhood-chain. [claim S4 S5]

GaugeRewarder (CL emissions claims): 0x8A76f49e091F21C896122B4879541930322b799D on robinhood-chain. [claim S4 S5]

Airdrop (VeLuteSplitMerklAidrop per docs): 0x8f90745342622be6ABbC575Cc250Af9179cabe6f on robinhood-chain. [claim S4 S5]

AlgebraFactory owner() (unread contract, 171 bytes of code): 0x2a04c1d26767dd30f62712dcfcf1222f733a2b0e on robinhood-chain. [claim S5]

## Control

_Research pending._

## Security

_Research pending._

## Engineering

_Research pending._

## Team

_Research pending._

## Product and economics

_Research pending._

## Communications

Official site and app claim live Robinhood ve(3,3) [claim S1 S2]

X: Alandale revenue rank and holder fees [claim S14 S27]

X: Coffer vote-delegation feature preview [claim S15]

X: 1,300,000 LUTE set aside for RVH [claim S16 S26]

App airdrop page lists RVH among veLUTE communities [claim S26]

## Findings

- Several documented ve(3,3) core addresses share 2430-byte bytecode; implementations were not read. [verified S5]
- Llama audits field is 0; no audit report found on the site, docs, or GitHub this round. [claim S7 S12]
- LUTE owner() is the Minter; AlgebraFactory owner is a small unread contract. [verified S5]

- Receipts: on September 10, the site and GitBook welcome crosslinked the site, app and documentation. DefiLlama's Alandale V3 endpoint returned the same site and LUTE address with Robinhood Chain as its only listed chain. These matches support attribution, not an audit or editorial identity approval. [claim S42 S44 S45]
- Numbers: at chain 4663 block 0x385a4a5, the documented RouterV2, SwapRouter, NonfungiblePositionManager, GaugeRewarder and Airdrop addresses returned 14446, 12286, 24208, 2430 and 2430 bytes of code respectively. The previously reported factory-owner address returned 171 bytes. The exact address mapping is in REP-11; the read proves existence, not current privileges or implementation safety. Historical TVL and volume remain September 9 observations. [verified S43]
- Adversarial: code at an address does not establish an audited implementation, safe admin controls or the identity of privileged key holders. Proxy/admin slots and deployment-matched audit evidence remain unresolved. [unknown]

## Sources

- S1 — Alandale — the outlaw liquidity market.
- S2 — Overview · Alandale.
- S4 — Networks & Contracts.
- S5 — eth_chainId / eth_getCode / eth_call on chain 4663.
- S6 — Address page 0xD1e861…AEeA.
- S7 — protocol/alandale-v3.
- S12 — Alandale-xyz/alandale-contracts.
- S14 — status/2096233221717401898 revenue rank.
- S15 — status/2097355384960806940 Coffer preview.
- S16 — status/2097375996576244206 LUTE for RVH.
- S26 — Airdrop · Alandale.
- S27 — Holders Revenue Rankings.
- S42 — Alandale V3 identity record, recovery check.
- S43 — Pinned-block deployment existence, Codex recovery.
- S44 — Site crosslinks, Codex recovery.
- S45 — Welcome crosslinks, Codex recovery.

## Review metadata

Compiled from WORK-20260910-codex-alandale-recovery by codex as of 2026-09-10T03:42:09.546Z; methodology_version: proofline-v1.0.
