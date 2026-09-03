---
slug: ram
coverage: stub
methodology_version: proofline-v1.0
---

# RAM — research record

## Identity

RAM is classified as Imported AMM.

A LayerZero OFT satellite of RAM on Robinhood Chain. Verified RamsesOftSatellite burns on send and mints on authenticated receive, with no external mint. Traders buy and sell RAM on Ramses v3 and Uniswap v4 books. ramses.xyz and @RamsesExchange run the imported AMM; this packet is the token, not the Llama Ramses DEX.

Themes: amm

## Deployment

RAM token (RamsesOftSatellite): 0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802 on robinhood-chain. [verified S1 S2 S5]

Ramses Team Multisig (token owner): 0x20D630cF1f5628285BfB91DfaC8C89eB9087BE1A on robinhood-chain. [claim S4 S5 S12]

LayerZero EndpointV2: 0x6F475642a6e85809B1c36Fa62763669b1b48DD5B on robinhood-chain. [verified S2 S5]

## Control

owner() is GnosisSafeProxy 0x20D6…BE1A (SafeL2 0x29fc…C762). Docs label that address Ramses Team Multisig under HyperEVM access control. Constructor delegate was the deployer EOA; it is not owner() now. [verified S4 S5 S12]

## Security

Docs/audits list Consensys V3, Spearbit, Cantina, and Code4rena CLMM reviews. No OFT-satellite-specific audit URL was located this pass. Docs also say early deployments retain multisig and timelock paths on AccessHub. [claim S22] [unknown]

## Engineering

_Research pending._

## Team

Official pair: docs publish 0x5173…4802 as Robinhood RAM Token; DexScreener lists ramses.xyz, docs.ramses.xyz, and @RamsesExchange; the handle bio matches the site line. Discord invite titles Official server of Ramses Exchange. [verified S6 S12 S21]

t.me/ExchangeRamses titles RAMSES | Official and names ramses.xyz with 1523 members; Gecko lists that handle; DexScreener socials this pass did not. GitHub org RamsesExchange (11 repos) mentions ramses.xyz; site/docs SPA this pass did not list GitHub. Flag unconfirmed-official on Telegram and GitHub. X user search also returned @RamsesExchanges and backup @RamsesExchange_; flag handle-collision. [claim S19 S20 S23]

## Product and economics

RamsesOftSatellite at 0x5173…4802 is a 10815-byte OFT ERC-20, not an EIP-1167 clone. name Ramses, symbol RAM, decimals 18, totalSupply 5.180e25. token() returns itself. endpoint() is LayerZero EndpointV2 0x6F47…DD5B. sharedDecimals is 6. Verified source: burns on send, mints on authenticated receive, no external mint. [verified S2 S5]

Docs list this address as Robinhood RAM Token and list HyperEVM RAM at 0x5555…5555. Llama ramses-cl (Arbitrum 0xaaa6…2418) is the original DEX row. create was not a launchpad: EOA 0xAAA5…B9De deployed the contract at 2026-08-14T22:18:02Z. Books include Ramses v3 RAM/WETH 0x5860…076a and Uniswap v4 RAM/USDG 0x680eb556…d471 (created 2026-08-31T16:40:05Z). [verified S3 S6 S12]

Blockscout holders_count 10236. Gecko RAM/USDG Uniswap v4 volume_usd.h24 3782622.16 and reserve_in_usd 424602.64 at 2026-09-03T05:40:00Z. Gecko token volume_usd.h24 8133977.08 is all pools, not that book. [claim S1 S7 S8]

DexScreener same USDG v4 book: liquidity.usd 305053.38 volume.h24 3799297.35. Ramses v3 RAM/WETH liquidity.usd 410738.83 volume.h24 2194077.74. Gecko token market_cap_usd 13459707.29 and fdv_usd 8692187.01 (CON-2). Llama ramses-cl-v2 Robinhood Chain TVL 4947098.94 is the AMM slice, not this token. Llama CL V2 all-chains 24h volume 173334594. [claim S6 S7 S11 S24]

@RamsesExchange posted $1,656,537 fees on $673M volume, over $800,000 on Robinhood, 95% to LPs. [claim S15]

## Communications

@Cryptop4ik posted RAM as Robinhood infrastructure [claim S17]

@whalewatchRH posted a $5K RAM buy at $8.73M MC [claim S18]

@RamsesExchange posted $1.66M fees on $673M volume [claim S15]

@RamsesExchange posted Llama rank #8 in 24h DEX volume [claim S16]

## Findings

Docs still describe Ethereum canonical RAM and OFT connectivity as unpublished while this satellite is live. Gecko market_cap_usd sits above fdv_usd on the same token endpoint. Same-ticker LongLauncher RAM 0x15D7…1e18 and Llama ramses-cl at Arbitrum 0xaaa6…2418 are different addresses. [claim S14]

- Docs describe OFT as unpublished while this satellite is live on 4663. [disputed S2 S13]
- Gecko market_cap_usd exceeds fdv_usd on the same token endpoint. [disputed S7]
- Llama ramses-cl (Arbitrum) and ramsesx/RamsesX (multi-chain AMM) share name, ticker, site, and handle with this token. [verified S10 S11 S12]
- Same-ticker LongLauncher RAM 0x15D7…1e18 is a ca-collision. [claim S6]
- No OFT-satellite-specific audit URL this pass. [claim S22]
- Handle-collision accounts sit next to @RamsesExchange. [claim S23]

- Receipts: Blockscout token/source/create tx/Safe/endpoint, RPC name/symbol/owner/endpoint/token(), DexScreener, Gecko token/pool/info (first GET 200), Llama ramses-cl and ramses-cl-v2, docs contract-addresses/ramses-x/audits, ramses.xyz, @RamsesExchange posts, CT posts, Telegram preview, GitHub org, and Discord invite were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 3782622.16 is the Gecko RAM/USDG pool 24h volume, not the 8133977.08 token all-pools figure. Holders 10236 is Blockscout, not Gecko info 9981. Llama 4947098.94 is ramses-cl-v2 Robinhood Chain TVL, not token TVL. [claim S1 S7 S8 S11]
- Adversarial: the strongest contrary reading is that this row is Llama Ramses DEX and should merge into ramses or ramsesx. Contrary: Arbitrum ramses-cl token/DEX address is 0xaaa6…2418, HyperEVM RAM is 0x5555…5555, this address is the 4663 OFT satellite, and census has no ramses/ramsesx row. Do not merge. [inference S10 S11 S12]

## Sources

- S1 — Token 0x5173…4802 Ramses / RAM.
- S2 — RamsesOftSatellite verified source.
- S3 — Creation tx 0x79c3c662…599f.
- S4 — Owner 0x20D6…BE1A GnosisSafeProxy.
- S5 — eth_getCode, name, symbol, owner, endpoint on RAM.
- S6 — latest/dex/tokens RAM.
- S7 — Ramses token.
- S8 — RAM/USDG Uniswap v4 pool.
- S10 — Ramses CL (Arbitrum Llama row).
- S11 — Ramses CL V2 chain slice.
- S12 — Contract Addresses — Robinhood RAM Token.
- S13 — Ramses X / Tokenomics OFT planned.
- S14 — ramses.xyz.
- S15 — Epoch fees $1,656,537 on $673M volume.
- S16 — Llama 8th most volume in 24 hours.
- S17 — $RAM infrastructure on Robinhood.
- S18 — INDEX whale bought $5K of $RAM.
- S19 — t.me/ExchangeRamses.
- S20 — RamsesExchange org.
- S21 — Ramses Exchange Discord.
- S22 — Audits.
- S23 — @RamsesExchanges profile collision.
- S24 — Ramses CL V2 24h DEX volume.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:46:00Z; methodology_version: proofline-v1.0.
