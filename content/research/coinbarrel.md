---
slug: coinbarrel
coverage: stub
methodology_version: proofline-v1.0
---

# Coinbarrel — research record

## Identity

Coinbarrel is classified as Programmable-hook launchpad.

Coinbarrel is a token launchpad on Robinhood Chain. A launch creates a Uniswap V4 pool with a Coinbarrel Hook V5 in one transaction; there is no bonding curve and no graduation. Liquidity is minted into permanent custody. New launches go through the live V5 launcher. A Simple V3 launcher remains deployed for older markets. Creators can pair against ETH, USDG, or enabled stock tokens. The handle is @UseCoinbarrel; the site is coinbarrel.com.

Themes: launchpad

## Deployment

Unified Hook V5 launcher proxy: 0x4234e536aa5da8be18d41ef6f86533430e264e70 on robinhood-chain. [verified S3 S4 S13 S14]

V5 launcher implementation: 0xe398af2721c1dad61eb6d81a4f12f6cb66a4f5a2 on robinhood-chain. [claim S3 S4 S13 S14]

Legacy Simple V3 launcher proxy: 0x985dfae571a0c5c90ac997f08687056d2ce1e46f on robinhood-chain. [verified S3 S4 S15 S16]

Unified Hook V5 proxy: 0xf667c59cd75ab1d7943fc8284edab51f3a76bfff on robinhood-chain. [verified S3 S7 S17 S18]

Permanent V5 liquidity custody: 0x418ece71c4ece08b71db8c53d59b6bc345efc659 on robinhood-chain. [claim S3 S17 S22]

V5 launcher and hook owner(): 0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba on robinhood-chain. [verified S13 S17 S27]

## Control

owner() on the V5 launcher and the Hook V5 proxy returns 0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba. That address has no code. The launcher implementation slot is 0xe398…f5a2 (24488-byte code, Blockscout not verified). The Hook implementation slot is 0xaf4e…9379, named CoinbarrelAdvancedHookV5ExternalLiquidity and verified. Docs: six application proxies, each Ownable2Step / UUPS; custody exposes no withdraw of LP principal. No timelock address was located. [verified S13 S14 S18] [claim S6]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

@UseCoinbarrel names coinbarrel.com in the bio and website field. coinbarrel.com HTML does not name the handle (no twitter:site). Llama twitter is UseCoinbarrel. No GitHub org or user named coinbarrel. Display name Coinbarrel V2. The handle also posts a Solana mint labeled Coinbarrel CB; that mint is not on chain 4663. Flag unconfirmed-official and wrong-chain. [claim S1 S9 S25 S28]

## Product and economics

A launch has no bonding curve and no graduation. Standard and Advanced both call launchTokenV5 on the reviewed launcher proxy, create a Uniswap V4 pool, and mint the PositionManager NFT into permanent custody in the same transaction. Standard applies a fixed policy. Advanced can set directional fees, quote asset (ETH, USDG, or an enabled stock token), rewards, and ERC-20 or ERC-404. [claim S2 S5]

New Robinhood Hook V5 pools pin a flat 1% of volume per direction to the platform. Pools registered before that keep a 30% platform share. Legacy Simple V3 and Hook V1/V2/V3 markets keep their original paths and do not migrate. [claim S8 S24]

Llama currentChainTvls Robinhood Chain 55358.35 USD at 2026-09-03T01:26:35Z (page 55699.9). summary/fees total24h 2304, total7d 110181 (page Fees 7d 108291, Fees 24h 3278). dailyRevenue total24h 673, total7d 37179. coinbarrel.com/market/api/v1/tokens total 259 on Robinhood, pool_type univ4. Figures are the Robinhood Chain slice, not all-chains. [claim S19 S20 S21 S23 S26]

## Communications

@UseCoinbarrel posts September volume cash for launches [claim S12]

@UseCoinbarrel posts Coinbarrel live on Robinhood Chain [claim S10]

@UseCoinbarrel posts Arc mainnet live [claim S11]

## Findings

The V5 launcher and Hook are upgradeable ERC1967 proxies. owner() on both is one externally owned account with no code and no pending owner. Docs say that EOA held six proxy-owner and upgrade roles at deployment. The Simple V3 launcher still has code, so an integrator that posts to 0x985d…e46f is on a path docs mark as not a new-launch choice. [verified S13 S17] [claim S6 S8]

- V5 launcher and Hook are upgradeable; owner is one EOA with no code. [verified S13 S17]
- Launcher implementation source is not verified on Blockscout this pass. [verified S14]
- Simple V3 launcher 0x985d…e46f still has code and is not a new-launch path. [verified S15] [claim S8]
- No audit report URL. [unknown]
- Handle posts a Solana $CB mint that is not this chain's launcher. [claim S25]
- Llama 7d fee figure differs between the API (110181) and the protocol page (108291). [claim S20 S21]

- Receipts: coinbarrel.com, docs pages, deployments.json, X profile and posts, Llama protocol/fees/page/adapter, market API, GitHub 404, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S3 S13 S19]
- Numbers: TVL and fees are the Robinhood Chain slice from api.llama.fi, not an all-chains total. Bytecode lengths, nonces, and owner() are chain 4663 RPC. Market total 259 is the official tokens API with chain=robinhood. [verified S13 S19 S23]
- Adversarial: strongest contrary reading is that 0x4234…e70 is a leftover Advanced V4 proxy and new launches use a different factory, or that Llama fees mix legacy V3 with V5. Docs and deployments.json set advancedV5.launcherProxy to this address with status public-live; RPC implementation slot matches launcherImplementation 0xe398…f5a2. Hookr and What The Hook are different products. [inference S3 S4 S13]

## Sources

- S1 — coinbarrel.com home.
- S2 — What is Coinbarrel?.
- S3 — Robinhood contract addresses.
- S4 — Robinhood deployment registry.
- S5 — Architecture.
- S6 — Permissions and security.
- S7 — Official links.
- S8 — Legacy Robinhood markets.
- S9 — Coinbarrel V2 profile.
- S10 — Coinbarrel is LIVE on the Robinhood Chain.
- S11 — Arc Mainnet is Live.
- S12 — September is for builders.
- S13 — eth_getCode / owner() V5 launcher 0x4234e536…e70.
- S14 — Address 0x4234e536aa5da8be18d41ef6f86533430e264e70.
- S15 — eth_getCode / owner() V3 launcher 0x985dfae5…e46f.
- S16 — Address 0x985dfae571a0c5c90ac997f08687056d2ce1e46f.
- S17 — eth_getCode / owner() Hook V5 and custody.
- S18 — Address 0xf667c59cd75ab1d7943fc8284edab51f3a76bfff.
- S19 — protocol/coinbarrel.
- S20 — summary/fees/coinbarrel.
- S21 — Coinbarrel protocol page.
- S22 — coinbarrel adapter.
- S23 — market tokens API robinhood.
- S24 — Fee distribution.
- S25 — Team buys on Solana CB.
- S26 — summary/fees/coinbarrel dailyRevenue.
- S27 — Address 0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba.
- S28 — orgs/coinbarrel.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:35:00Z; methodology_version: proofline-v1.0.
