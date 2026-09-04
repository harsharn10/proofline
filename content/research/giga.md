---
slug: giga
coverage: stub
methodology_version: proofline-v1.0
---

# GIGA — research record

## Identity

GIGA is classified as Native AMM.

GIGA DEX is a native AMM on Robinhood Chain. Classic pools are a Uniswap v2 fork. Concentrated pools are a PancakeSwap v3 / Uniswap v3 fork. Liquidity incentives rebalance hourly toward gauged pools by rolling revenue; veGIGA is a six-month lock. The token is GIGA (1B minted at genesis). The handle is @giga_dex; the site is gigadex.fi.

Themes: amm

## Deployment

Concentrated-liquidity factory: 0xEce6eCd61177336ea6Fb9b17937AC439D85EE20B on robinhood-chain. [verified S3 S13 S14]

Classic factory: 0x6Fdf38f92eAd1adFc04B73aaa947ab254f6c0916 on robinhood-chain. [verified S3 S15 S16]

GIGA ERC-20: 0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5 on robinhood-chain. [verified S4 S10 S17]

Controller proxy: 0x4a9cEF841098A0D84E5A8D5882AA1E120e89163D on robinhood-chain. [claim S3 S13 S18]

Controller implementation: 0x0D47f2f6DC4D5Bc56b0446Ea678EAc6433944A48 on robinhood-chain. [claim S13 S18]

veGIGA ERC-721 proxy: 0x307Cb092543dA544f5381f66ac13aA84ca4C26E8 on robinhood-chain. [claim S3 S13 S27]

Emission center: 0xbfc240b3eb8C700508447b62fD793Bf4dB364783 on robinhood-chain. [claim S3 S13 S18]

Controller ProxyAdmin: 0x237e0396f96142e88d9966d25273af041ec181af on robinhood-chain. [claim S13 S28]

Upgrade Safe (ProxyAdmin owner): 0x72f4DF3580935c179E2eC61c04122731E7fcd4A6 on robinhood-chain. [claim S13 S29]

Factory deployer EOA: 0x5F378c7C4D33e43eD3eA573A2b0a6ba8a688AD40 on robinhood-chain. [claim S14 S16 S29]

## Control

_Research pending._

## Security

CL factory owner() is the Controller proxy. Four protocol proxies share ProxyAdmin owner Safe 0x72f4DF35…d4A6, threshold 2 of 3, owners 0x14970344…b70b, 0xa2d88507…6d22, and deployer 0x5F378c7C…AD40 (no code). Controller implementation 0x0d47f2f6…4a48 is not verified. Docs: custom Genesis code is still in audit and the report is not published. [verified S13 S14 S29] [claim S5]

## Engineering

_Research pending._

## Team

@giga_dex is named in twitter:site on gigadex.fi and docs.gigadex.fi; the bio names the site. Llama twitter is giga_dex. Verified explorer names on the token and veGIGA implementation are ApexToken and VeApexToken. GitHub org GIGA-DEX has zero public repos. Gecko search also returns unrelated Solana GIGA/SOL books. [claim S1 S9 S25 S26]

## Product and economics

A swap can use Classic (full-range constant-product) or concentrated (in-range) pools. Docs: new incentive logic is revenue-driven emissions with no gauge-vote epochs. Liquidity in the pools is not upgradeable; emissions, fee routing, and incentive parameters sit on the protocol contracts. [claim S2 S5 S6]

Classic factory allPairsLength is 28. Giga Positions NFTs total 1949. The token is a 1B ERC-20. Llama tracks GIGA V3 (CL) and GIGA V2 (classic) as child protocols under parent GIGA. [verified S15 S17] [claim S19 S21]

Llama currentChainTvls Robinhood Chain: GIGA V3 1504019.85 USD at 2026-09-03T04:36:59Z; GIGA V2 315041.13; parent 1819060. summary/dexs/giga-v3 total24h 37216490; summary/fees total24h 20980 total7d 73233; dailyRevenue total24h 4194. GeckoTerminal first GET: FDV 22944374.69, market_cap_usd null, token 24h volume 91358. Token holders_count 329. Figures are the Robinhood Chain slice. [claim S19 S20 S21 S22 S23 S25]

## Communications

@giga_dex posts GIGA IS LIVE with token address [claim S10 S11]

@giga_dex posts 2M in TVL [claim S12]

@giga_dex posts GIGA is live on CoinGecko [claim S7 S25]

@giga_dex posts LP management live on vfat.io [claim S8]

Docs: GIGA Genesis 31 August 2026 [claim S5]

## Findings

Controller, vault, fee center, and veGIGA are upgradeable ERC1967 proxies. ProxyAdmin owner() is one 2-of-3 Safe that includes the factory deployer EOA. No timelock was located. The Controller implementation that holds custom Genesis logic is not source-verified this pass. Docs still say every deployed contract is verified. [verified S13 S18 S29] [claim S6]

- Protocol proxies are upgradeable; upgrade admin is a 2-of-3 Safe with no timelock located. [verified S13 S29]
- Controller implementation source is not verified on Blockscout this pass, against docs that say every contract is verified. [verified S18] [claim S3]
- No published audit report for the Genesis custom code. [unknown]
- Llama giga-v3 description is TIA bonding-curve copypasta and is not this product. [disputed S19]
- Solana GIGA ticker collision in Gecko search. [claim S25]
- Handle 1 Sep TVL (2M) and Llama V3 slice (1.50M) differ in window and scope. [claim S12 S19]

- Receipts: gigadex.fi, docs pages, X profile and posts, Llama protocol/fees/dexs/parent, GeckoTerminal first GET, GitHub, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S3 S13 S19]
- Numbers: TVL, volume, and fees are the Robinhood Chain slice from api.llama.fi, not an all-chains total. Bytecode lengths, owner(), allPairsLength, Safe threshold, and token supply are chain 4663 RPC. Holders_count is Blockscout. [verified S13 S17 S19]
- Adversarial: strongest contrary reading is that 0xEce6eCd6…e20B is an unrelated PancakeSwap clone and Llama TVL is Uniswap, or that this is a packed pad. Docs set CL factory and Classic factory to these addresses; RPC owner() on the CL factory is the documented Controller; Blockscout names CLFactory and ClassicFactory. Census AMMs and packed pads do not share the domain, handle, or factory. [inference S3 S13 S14]

## Sources

- S1 — gigadex.fi home.
- S2 — What is GIGA?.
- S3 — Contracts.
- S4 — Tokenomics.
- S5 — Security overview.
- S6 — Governance and access control.
- S7 — GIGA is live on CoinGecko.
- S8 — GIGA LP management live on vfat.io.
- S9 — GIGA profile.
- S10 — GIGA IS LIVE.
- S11 — Trading is live.
- S12 — 2M in TVL.
- S13 — eth_getCode / owner() GIGA factories and controller.
- S14 — Address 0xEce6eCd61177336ea6Fb9b17937AC439D85EE20B.
- S15 — allPairsLength Classic factory.
- S16 — Address 0x6Fdf38f92eAd1adFc04B73aaa947ab254f6c0916.
- S17 — Address 0x5BaaeC1B70864f01dbdb747358FF59F2E2cCF7D5.
- S18 — Controller proxy and implementation.
- S19 — protocol/giga-v3.
- S20 — summary/dexs/giga-v3.
- S21 — protocol/giga-v2.
- S22 — summary/fees/giga-v3.
- S23 — summary/fees/giga-v3 dailyRevenue.
- S25 — Robinhood token 0x5BaaeC1B…F7D5.
- S26 — orgs/GIGA-DEX and users/gigadex.
- S27 — Address 0x307Cb092543dA544f5381f66ac13aA84ca4C26E8.
- S28 — Controller ProxyAdmin 0x237e0396…81af.
- S29 — Safe getOwners / getThreshold 0x72f4DF35…d4A6.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:45:00Z; methodology_version: proofline-v1.0.
