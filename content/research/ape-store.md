---
slug: ape-store
coverage: stub
methodology_version: proofline-v1.0
---

# Ape Store — research record

## Identity

Ape Store is classified as Bonding-curve launchpad.

Ape Store is a token launchpad on Robinhood Chain. A creator deploys from ape.store without seeding liquidity. Gitbook describes a bonding curve that lists on Uniswap near a 69k market cap; the official handle posted that the Robinhood path has no bonding curve and tokens go live on Uniswap. The live V30 router is 0x6e4910ea…87C1. The handle is @apedotstore.

Themes: launchpad, memecoin

## Deployment

Robinhood ApeV30 router: 0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1 on robinhood-chain. [verified S2 S14 S15 S25]

Robinhood ApeStoreRouterV3: 0x2211C504DBbD87D4401f3533933E46bDd0E3F32c on robinhood-chain. [verified S2 S16 S17]

Robinhood ApeProxy: 0x789b3D92147C26b701bD95614D5662dB9d4Cc1f6 on robinhood-chain. [verified S2 S16]

V30 router and proxy owner(): 0x996C14b1D85841F789dfe32532Ba43B9E97c626c on robinhood-chain. [verified S14 S16 S18]

## Control

_Research pending._

## Security

owner() on the V30 router, ApeStoreRouterV3, and ApeProxy returns 0x996C14b1D85841F789dfe32532Ba43B9E97c626c. That address has no code. The V30 router is not a verified proxy; ERC1967 slot is zero. ApeStoreRouterV3 is source-verified. Latest V30 to-txs include collectFees(address). No timelock address was located. No audit report URL. [verified S14 S16 S17] [unknown]

## Engineering

_Research pending._

## Team

Gitbook links.md names ape.store and @apedotstore. Display name Ape.Store | Launchpad. Site HTML has no twitter:site. Bio TG expands to t.me/apestorelounge. GitHub users Apestore and ApeDotStore have zero public repos and empty blog fields. Flag unconfirmed-official. [claim S1 S6 S8 S23 S24]

## Product and economics

Gitbook: a launch uses virtual liquidity. Buys and sells move a bonding curve. Near 69k market cap the token lists on Uniswap, LP is burned, and the contract is renounced in the listing transaction. Create is gas-only; trading fee 1 percent; listing fee 400 USD in ETH. The create-token page still says to hold ETH on Base. [claim S4 S5 S7]

Official config marks Robinhood Active with ApeV30Routers 0x6e4910ea…87C1, ApeRouters 0x2211C504…F32c (Blockscout name ApeStoreRouterV3, verified, Uniswap V3 locker imports), and ApeProxy 0x789b3D92…c1f6. ApeV4Routers is null. @apedotstore posted that the Robinhood launchpad has no bonding curve and tokens go live on Uniswap. api/tokens?chain=4663 rows this pass are protocol 30 with launchDate null and market caps around 2k to 6k USD. [verified S2 S17] [claim S9 S19]

Llama currentChainTvls Ethereum 7689.85 USD, Base 16292.77 USD at 2026-09-03T03:00:59Z. Fees 24h 85.09 and 7d 1583.12 are Base only. Those figures are not a Robinhood Chain slice. HARVEST Emerson 30d: 137 tokens, 154k USD DEX volume. HARVEST OKX lifetime: 30.5M USD. Official tokens API last nonempty page 174; 173x24+8 = 4160 if contiguous. V30 nonce 4227. [claim S19 S20 S21 S22] [verified S14]

## Communications

@apedotstore: Base is a chain; Robinhood is a trading app [claim S12]

@apedotstore posts V2 is coming [claim S11]

@apedotstore posts next chapter after four weeks [claim S13]

@apedotstore: Robinhood launchpad has no bonding curve [claim S9]

@apedotstore: launch a memecoin on Robinhood in 20 seconds [claim S10]

## Findings

owner() on the V30 router, the verified V3 router, and ApeProxy is one externally owned account with no code. The V30 router that config uses for Robinhood is not source-verified. Gitbook and the official handle disagree on whether Robinhood launches use a bonding curve. Llama TVL and fees are Base and Ethereum only. [verified S14 S16] [claim S4 S9 S20]

- V30 router source is not verified on Blockscout this pass. [verified S15]
- owner is one EOA with no code on the three RH contracts in config. [verified S16 S18]
- Gitbook bonding-curve listing path conflicts with the official Robinhood no-bonding-curve post. [claim S4 S9]
- Llama has no Robinhood Chain TVL or fee slice. [claim S20 S21]
- No audit report URL. [unknown]

- Receipts: ape.store, /api/config, gitbook markdown pages, X profile and posts, t.co expand, Llama protocol/fees, GitHub users, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. Dune returned Cloudflare 403; Emerson figures are from HARVEST.md via the discovery packet. [verified S1 S2 S14 S20]
- Numbers: Llama TVL and fees are Ethereum/Base, not Robinhood Chain. Bytecode lengths, nonces, and owner() are chain 4663 RPC. Token page math is the official tokens API with chain=4663. Emerson 137 is a 30d third-party window. [verified S14 S19] [claim S20 S22]
- Adversarial: strongest contrary reading is that 0x6e4910ea…87C1 is a leftover V3.0 router and new launches use a different factory, or that Robinhood already abandoned the bonding curve as the 15 Jul post states. Config still sets ApeV30Routers to this address with Active true; RPC shows 12528-byte code and nonce 4227; tokens API RH rows are protocol 30. Packed pads Pons, hood.fun and Coinbarrel are different products. [inference S2 S9 S14]

## Sources

- S1 — ape.store home.
- S2 — ape.store/api/config.
- S4 — How it works?.
- S5 — Service fees.
- S6 — Links.
- S7 — How to create a token?.
- S8 — Ape.Store | Launchpad profile.
- S9 — Our Robinhood launchpad has no bonding curve.
- S10 — launching a memecoin on Robinhood in 20 seconds.
- S11 — V2 is coming.
- S12 — Base is a chain. Robinhood is a trading app.
- S13 — next chapter after four weeks.
- S14 — eth_getCode / owner() V30 0x6e4910ea…87C1.
- S15 — Address 0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1.
- S16 — eth_getCode / owner() V3 router, ApeProxy, owner.
- S17 — Address 0x2211C504DBbD87D4401f3533933E46bDd0E3F32c.
- S18 — Address 0x996C14b1D85841F789dfe32532Ba43B9E97c626c.
- S19 — api/tokens chain=4663.
- S20 — protocol/ape.store.
- S21 — summary/fees/ape.store.
- S22 — Robinhood memecoin launchpads 30d (HARVEST.md).
- S23 — users/Apestore and users/ApeDotStore.
- S24 — Bio TG t.co expands to t.me/apestorelounge.
- S25 — Creation tx 0x1a8c182f…cde8.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:12:00Z; methodology_version: proofline-v1.0.
