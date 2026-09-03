---
slug: bags
coverage: stub
methodology_version: proofline-v1.0
---

# Bags — research record

## Identity

Bags is classified as Bonding-curve launchpad.

Bags is a bonding-curve token launchpad on Robinhood Chain at bags.fm. `BagsFactory.create` (or `createAndBuy`) deploys a fixed-supply ERC-20, a per-token bonding curve, and a fee-share contract in one transaction; 830M of 1B sells vs native ETH, then the raise plus remaining 170M migrate into a Uniswap v4 token/WETH pool with a Bags hook and locked LP. The RH factory is `0xe8Cc4431…Cb37`. Solana is a separate Bags venue. The handle used on GitHub and Llama is @BagsApp; the site is bags.fm.

Themes: launchpad

## Deployment

BagsFactory proxy: 0xe8Cc4431adF8b5A847C113EF0c6af9043219Cb37 on robinhood-chain. [verified S2 S3 S13 S14]

BagsFactory implementation: 0x7dfa0131F6c8626F199A2E33E49DfB5660e6Ef1C on robinhood-chain. [claim S13 S14 S18]

BagsLens: 0xC82Db941dAf90B754aecb5F7D14c683dc608d595 on robinhood-chain. [claim S2 S3 S15]

BagsV4Hook: 0x2380aBf72C17aABAb76480244759AC7E2932EEcC on robinhood-chain. [verified S2 S3 S15 S17]

BagsVault proxy: 0x4861446aa7fFd9e67a83cBbAcb1A4B70540B83Aa on robinhood-chain. [verified S2 S3 S13 S15]

BagsVault implementation: 0xeC66D9fc56E92408518De9b8a8697245E932e688 on robinhood-chain. [claim S13 S15 S18]

BagsBondingCurveBeacon: 0x8DCEcaf516C828A493C2C449c1E25F92cF80207E on robinhood-chain. [claim S3 S13 S18]

BagsFeeShareBeacon: 0xdFf07d39C5332C602e06FA64f0A97C92fd8537e0 on robinhood-chain. [claim S3 S13 S18]

BagsFactory and BagsVault owner(): 0xDEf671F11C8a30818eb3D9Cc9476EEEc805f9058 on robinhood-chain. [verified S13 S16]

## Control

owner() on the factory, vault, and both beacons returns 0xDEf671F11C8a30818eb3D9Cc9476EEEc805f9058. That address has no code. The factory implementation slot is 0x7dfa01…Ef1C (9904-byte code, Blockscout name BagsFactory, verified). The vault implementation slot is 0xec66d9…e688, name BagsVault, verified. Hook, lens, beacons, BagsBondingCurve, BagsFeeShare, and BagsToken implementations are source-verified this pass. No timelock address was located. [verified S13 S14 S16 S18] [claim S3]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

GitHub org bagsfm names BAGS, blog bags.fm, twitter_username bagsapp. @BagsApp website field names bags.fm/launch. bags.fm HTML does not name the handle (no twitter:site). Llama twitter is BagsApp. Flag unconfirmed-official. ABIs live at bagsfm/bags-idl. Llama github field is null. Solana remains a separate product surface. [claim S1 S9 S11 S21]

## Product and economics

A launch has a bonding curve and a graduation. Standard create pays the live creation fee (0 wei this pass) and mints 1e9 tokens onto BagsBondingCurve; createAndBuy spends surplus as an atomic first buy. 830M sell on a virtual x*y=k AMM vs ETH. At thresholdQuote (live global 5 ETH) the next buy migrates remaining 170M plus the raise into a Uniswap v4 pool with BagsV4Hook; the curve emits Migrated and pauses. [claim S2 S3 S4]

A flat 2% fee sits on the ETH/WETH leg in both phases: 1% to BagsFeeShare claimers, 1% protocol (partnerFeeBps default 2500 of that half, remainder BagsVault). Post-migration swaps use a Robinhood-modified UniversalRouter. Index-token and partner flows exist in docs but were not reproduced. [claim S2 S6]

Llama summary/fees Robinhood Chain total24h 7354, total7d 71083, total30d 210787, totalAllTime 593083 USD at 2026-09-03T04:35:00Z (all-chain 8219 / 90940 includes Solana). dailyRevenue Robinhood Chain total24h 3595, total7d 35444. Emerson 30d DEX volume 1404212.98 USD, 1,611 tokens, last launch 2026-09-03 01:03:35 UTC. RPC allTokensLength 3943 is lifetime on this factory. protocol/bags TVL is empty. Vault holds 28.348 ETH native, not pad TVL. [claim S13 S19 S20 S21 S22]

## Communications

@BagsApp posts Launch Coins On Robinhood Chain [claim S7]

@BagsApp posts Robinhood API docs live [claim S8]

## Findings

BagsFactory and BagsVault are upgradeable ERC1967 proxies. owner() on both, and on the two beacons that retarget every live curve and fee-share, is one externally owned account with no code and no pending owner. Docs give that owner setCreationFee, setHook, setTokenImpl, vault withdraw, and beacon upgradeTo. Llama RH fees mix V1 and V2 deployments; the docs address book names only this V2 factory. [verified S13 S16] [claim S3 S19]

- Factory, vault, and both beacons are upgradeable; owner is one EOA with no code. [verified S13 S16]
- A beacon upgradeTo retargets every live curve or fee-share at once. [claim S3]
- Llama RH fees mix V1 and V2; Bitquery names a 0x0ed8… AMM proxy not in the docs address book. [claim S19 S23]
- No audit report URL. [unknown]
- bags.fm HTML does not name @BagsApp. [claim S1 S9]
- creationFee() is 0 this pass while docs still describe a 0.02 ETH default. [verified S13] [claim S2]
- Solana volume and fees dominate Llama all-chain totals; do not use those as a Robinhood Chain slice. [claim S19 S21]

- Receipts: bags.fm, docs overview/contracts/launch/trade/changelog, GitHub org bagsfm, X profile and July 2026 posts, Llama protocol/fees, Emerson Dune, Bitquery docs, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S3 S13 S19]
- Numbers: RH fees and revenue are the Robinhood Chain slice from api.llama.fi, not all-chains. Bytecode lengths, nonces, owner(), allTokensLength 3943, creationFee 0, and the 5 ETH threshold are chain 4663 RPC. Emerson 1,611 / $1.40M is the 30d dashboard, not lifetime. [verified S13 S19 S22]
- Adversarial: strongest contrary reading is that 0xe8Cc4431…Cb37 is leftover V1 and new launches use a different factory, or that Bags is packed Pons / FoxPad / Clanker / Coinbarrel. Docs and Emerson factory map set BagsFactory to this address; RPC implementation slot matches verified BagsFactory 0x7dfa01…Ef1C; hook() and FACTORY() wiring match the docs address book. The packed pads use other factories. [inference S2 S3 S13 S22]

## Sources

- S1 — bags.fm home.
- S2 — Robinhood Chain Overview.
- S3 — Contracts Reference.
- S4 — Launch a Token.
- S6 — Trade Tokens.
- S7 — Launch Coins On Robinhood Chain.
- S8 — Bags Robinhood API Docs are live now.
- S9 — BAGS profile.
- S11 — orgs/bagsfm.
- S13 — eth_getCode / owner() BagsFactory 0xe8Cc4431…Cb37.
- S14 — Address 0xe8Cc4431adF8b5A847C113EF0c6af9043219Cb37.
- S15 — Lens / hook / vault addresses.
- S16 — Address 0xDEf671F11C8a30818eb3D9Cc9476EEEc805f9058.
- S17 — eth_getCode BagsV4Hook / BagsLens / vault.
- S18 — Factory impl / beacons / token impl.
- S19 — summary/fees/bags.
- S20 — summary/fees/bags dailyRevenue.
- S21 — protocol/bags.
- S22 — Robinhood memecoin launchpads 30d.
- S23 — Bags.fm API on Robinhood.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:40:00Z; methodology_version: proofline-v1.0.
