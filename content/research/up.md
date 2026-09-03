---
slug: up
coverage: stub
methodology_version: proofline-v1.0
---

# up — research record

## Identity

up is classified as Native AMM.

The chain's native ve(3,3) AMM. A user swaps or supplies liquidity in v2 full-curve or v3 concentrated pools, then stakes LP in gauges. Lockers of UP into veUP vote each epoch on which pools receive emissions and collect the staked-pool fees. @uponrh runs it at up33.xyz.

Themes: rwa, nft, memecoin

## Deployment

UP token: 0x57C0E45cB534413D1C20A4240955d6bB250BB4F1 on robinhood-chain. [verified S13 S18 S19]

veUP VotingEscrow: 0x5d321dE36F0bf98D92b291280514F3878582B7B6 on robinhood-chain. [verified S13 S19 S22]

Voter: 0x7F749fDD351C1Ceed82d76d7699CB631Eb8332a7 on robinhood-chain. [verified S13 S19 S22]

Minter: 0x912EC7A90e8C9829eE0e0f6a4Db5270776Fc3Da5 on robinhood-chain. [verified S13 S19 S22]

v2 PoolFactory: 0xFA5429AEBa338BEa2BFcc1b9a889862Ee395bc28 on robinhood-chain. [verified S13 S19 S21]

v2 Router: 0xf5198743240fAC98db71868F34c70139b1eb0474 on robinhood-chain. [claim S13 S19 S22]

v3 CLFactory: 0x1ac9dB4a2608ba45D6127B1737949b51Bb54B7F3 on robinhood-chain. [verified S13 S19 S20]

v3 NonfungiblePositionManager: 0x07F44c47743A2f36414A82b9F558ECFCf0EEdCEf on robinhood-chain. [claim S13 S19 S22]

v3 SwapRouter: 0xC062b870E813fcA720f1e002c234369Ab3aB9415 on robinhood-chain. [claim S13 S19 S22]

Governance Safe: 0x0eEA30aBa3f07abFA20E4b544F55e0f917d9DFd8 on robinhood-chain. [claim S13 S23 S24]

UP/WETH v3 pool (official DexScreener pair): 0x23D641FeCcD207E8794c593e8240444A0674C4Ba on robinhood-chain. [claim S25 S26 S32]

## Control

CLFactory `owner()` returns Safe 0x0eEA…DFd8, a SafeProxy to SafeL2, VERSION 1.4.1, threshold 2 of 4 owners. One owner is the deployer EOA 0x85Fb…651 that created the core contracts. Voter, Minter and VotingEscrow `owner()` were not decoded this pass. [verified S19 S23 S24]

## Security

No audit report URL was opened this pass. The up-contracts README states compilation is not evidence of an audit and that the tree is not a byte-for-byte deployment record. [unknown]

## Engineering

_Research pending._

## Team

up33.xyz sets twitter:site to @uponrh and sameAs to https://x.com/uponrh. The @uponrh bio links up33.xyz. GitHub org up-exchange sets blog up33.xyz and twitter_username uponrh. The app bundle lists the same X, Telegram and GitHub URLs. [verified S10 S12 S13 S16]

## Product and economics

Lockers of UP receive veUP NFTs and vote each weekly epoch on which gauges receive UP emissions. Fees from staked liquidity go to those lockers. [claim S11]

v2 PoolFactory deploys full-curve stable and volatile pools. v3 CLFactory deploys concentrated-liquidity CLPool clones; the official UP/WETH pair 0x23D641…4Ba is one such clone (fee 10000) created by that factory. [claim S11] [verified S20 S21 S25]

DefiLlama up-v3 currentChainTvls Robinhood Chain 10239463.22323 as of 2026-09-03T00:32:23Z. That is the chain slice; Llama lists only Robinhood Chain on the row. 24h volume 68200261, fees 165725, revenue 111415 on the same chain slice. [verified S27 S28 S29]

DefiLlama up-v2 currentChainTvls Robinhood Chain 727470.02966; 24h volume 773250. Do not add the two rows into one TVL card without labeling both modules. [claim S30]

Blockscout UP holders_count 8831. DexScreener labels the official pair dexId up with liquidity.usd 2079469.88. [verified S18] [claim S26]

## Communications

Official account posted a second Late Night Onchain video [claim S35]

Arrow posted aUSD/USDG gauge approved on up [claim S36]

Official account posted dynamic fees live on up [claim S33]

Official account posted Epoch 6 summary [claim S34]

Official account posted live CA and DexScreener pair [claim S31 S32]

## Findings

CLFactory `owner()` is a 2-of-4 Safe with no timelock reproduced this pass. The public GitHub tree is a sanitized snapshot and is not claimed as the live bytecode. An audit URL was not opened this pass. [claim S10]

- CLFactory owner is a 2-of-4 Safe; no timelock was reproduced on that path. [verified S24]
- GitHub snapshot is not claimed as live bytecode. [claim S17]
- No audit report URL was opened this pass. [unknown]
- Combining Llama up-v2 and up-v3 TVL without labeling would mix two modules. [claim S27 S30]

- Receipts: site HTML, docs overview/security, JS bundle, X profile and six posts, Telegram, GitHub org and README, Blockscout API v2, RPC, DexScreener and DefiLlama chain-slice endpoints were opened on 2026-09-03; excerpts are copied from those pages. [verified S10 S12 S13 S18 S19 S27]
- Numbers: TVL 10239463.22323 is api.llama.fi/protocol/up-v3 currentChainTvls Robinhood Chain, not an all-chains total; Llama lists only that chain. Bytecode lengths are eth_getCode at block 52997532. [verified S27 S19]
- Adversarial: the strongest contrary reading is that this slug is Fables or SwapHood, or that StonkBrokers is the AMM. Official surfaces and reproduced factories differ; Stonk Exchange docs name up as the swap engine, not the other way around. [claim S10 S12]

## Sources

- S10 — up33.xyz.
- S11 — What is up..
- S12 — up. profile.
- S13 — up33.xyz app bundle contracts map.
- S16 — up-exchange organization.
- S17 — up-exchange/up-contracts README.
- S18 — UP token 0x57C0E45c…B4F1.
- S19 — eth_getCode / name / symbol / CLFactory owner.
- S20 — CLFactory 0x1ac9dB4a…B7F3.
- S21 — PoolFactory creation tx 0x4f463dc7….
- S22 — veUP Voter Minter Router PositionManager SwapRouter.
- S23 — Governance Safe 0x0eEA30aB…DFd8.
- S24 — Safe getOwners / getThreshold / VERSION.
- S25 — UP/WETH CL pool 0x23D641Fe…4Ba.
- S26 — UP token pairs API.
- S27 — up v3 protocol chain slice.
- S28 — up v3 DEX volume chain slice.
- S29 — up v3 fees and revenue chain slice.
- S30 — up v2 protocol chain slice.
- S31 — up. is live now on Robinhood.
- S32 — Official CA and DexScreener pair.
- S33 — Dynamic fees are now live on up.
- S34 — Epoch 6 summary.
- S35 — Late Night Onchain second live video.
- S36 — aUSD/USDG gauge approved on up.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T00:50:00Z; methodology_version: proofline-v1.0.
