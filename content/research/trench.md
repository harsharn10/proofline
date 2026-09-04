---
slug: trench
coverage: stub
methodology_version: proofline-v1.0
---

# Trench — research record

## Identity

Trench is classified as Bonding-curve launchpad.

Trench is a bonding-curve token launchpad at trench.today. A launch mints a fixed-supply ERC-20 onto a constant-product curve, then migrates automatically into a DEX pool when the curve fills. On Robinhood Chain the live factory is BondingCurveFactory 0x2ECFb98B…FbAA. Docs: new graduates go to Uniswap V4 with a Trench fee hook; older graduates stay on Uniswap V3. The handle is @TrenchToday01.

Themes: launchpad

## Deployment

BondingCurveFactory (TransparentUpgradeableProxy): 0x2ECFb98BCe4f3616115E4a2A7a2379AF388DFbAA on robinhood-chain. [verified S3 S8 S9 S13]

BondingCurveFactory implementation: 0xDc4b9FAF72a071E2b5A7858bF91A894580D84a22 on robinhood-chain. [verified S8 S9 S10]

TrenchManager proxy: 0x77dC6f6361b7b99456FC3761ce5b7ddA80d83f9d on robinhood-chain. [verified S3 S8 S11]

Factory ProxyAdmin: 0x4b25478f681832f65B7Bc69ebBb44c7Fc9cE5A96 on robinhood-chain. [claim S8 S9 S12]

Docs owner / deployer EOA: 0xbeb76A70c82B09E30B2008eAFa7F987987EC9e0b on robinhood-chain. [verified S3 S8 S12]

TrenchV4FeeHook: 0x31200554eCA1EFf6d130dbeC7975aFA1234b60CC on robinhood-chain. [claim S3 S8]

TrenchPositionLocker: 0x1a3881e7013307Bc67b22b8793B93a2114aAe49E on robinhood-chain. [claim S3 S8]

FeeVault: 0x076e3Cd13E188e3646828e7cEBB766C7Dd6aDb8A on robinhood-chain. [claim S3 S8]

## Control

_Research pending._

## Security

owner path on the factory is storage slot 0 and ProxyAdmin owner(), both 0xbeb76A70c82B09E30B2008eAFa7F987987EC9e0b. That address has no code. Implementation 0xDc4b9FAF…4a22 is not source-verified on Blockscout. TrenchManager 0x77dC6f63…3f9d is a second EIP1967 proxy with the same owner. No audit URL this pass. [verified S8 S9 S12] [unknown]

## Engineering

_Research pending._

## Team

docs/resources/links names @TrenchToday01 and trench.today. The handle display name is trench.today; the docs description matches the bio. Home HTML has no twitter:site. @TrenchToday101 reuses the display name; flag handle-collision. No GitHub org linked from those surfaces. A 31 Jul post used trench-web.enstrack.com, which did not resolve this pass. [verified S4] [claim S1 S16 S22 S24]

## Product and economics

Docs: 1 billion supply, 80% sold on the curve, 20% reserved for the pool. Robinhood graduation threshold about 5 ETH. Curve fee 1% of trade size (0.3% creator, 0.7% protocol). Listing fee 2% of quote at migration. New RH pools use Uniswap V4; TrenchV4FeeHook takes 1% quote-side and splits 60/40 deployer/protocol. Pre-upgrade tokens stay on Uniswap V3. Stock-token quote pairs are a 2 Sep 2026 handle claim. [claim S2 S3 S20]

Emerson 30d: 123740 tokens, 251 unique deployers, last_launch 2026-09-03 01:31:19 UTC, DEX volume 59015.52 USD / 2207 trades. Factory nonce 146364 on 4663. Llama has no protocol/trench row. Figures are the Emerson reconstruction, not a chain-slice TVL. [claim S8 S13 S14]

## Communications

@TrenchToday01 posts Introducing Trench on Robinhood [claim S6]

@TrenchToday01 posts Uniswap V4 post-migration pools [claim S19]

@TrenchToday01 posts 80+ stock pairs and FAMI live [claim S20 S21]

Docs: V4 upgrade 2026-07-13 [claim S3]

## Findings

The factory and TrenchManager are upgradeable TransparentUpgradeableProxy contracts. ProxyAdmin owner() and factory storage slot 0 are one externally owned account. Docs lock V4 LP in TrenchPositionLocker for one year; that locker was not decoded this pass. Getting Started still says Uniswap V2 graduation. [verified S8 S9] [claim S2 S15]

- Factory and manager are upgradeable; owner is one EOA with no code. [verified S8 S12]
- Factory implementation source is not verified on Blockscout this pass. [verified S9 S10]
- Getting Started names Uniswap V2; How-it-works names Uniswap V4 for new Robinhood graduates. [claim S15 S2]
- Creator-fee strings disagree across July posts and current docs. [claim S6 S23 S2]
- No audit report URL. [unknown]
- Handle-collision: @TrenchToday101. [claim S4 S5 S24]

- Receipts: trench.today, docs (home, introduction, how-it-works, getting-started, contracts, links), X profile and posts, Emerson dashboard, Llama 404, GitHub 404, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S3 S8 S13]
- Numbers: token counts and DEX volume are the Emerson 30d slice, not Llama. Bytecode lengths, nonce, and owner slots are chain 4663 RPC. [verified S8 S13]
- Adversarial: strongest contrary reading is that 0x2ECFb98B…FbAA is an abandoned proxy and live launches use TrenchManager or another factory, or that Emerson's Trench / Trencher label mixes a second product. Docs set BondingCurveFactory to this address; factory nonce 146364 and Emerson last_launch 2026-09-03 argue it is still creating. Circus, Sentry, Klik, pew.fun, and Pons are different factories. [inference S3 S8 S13]

## Sources

- S1 — trench.today home.
- S2 — How It Works.
- S3 — Contract Reference.
- S4 — Official channels.
- S5 — trench.today profile.
- S6 — Introducing Trench on Robinhood.
- S8 — eth_getCode / slots factory 0x2ECFb98B…FbAA.
- S9 — Address 0x2ECFb98BCe4f3616115E4a2A7a2379AF388DFbAA.
- S10 — Address 0xDc4b9FAF72a071E2b5A7858bF91A894580D84a22.
- S11 — Address 0x77dC6f6361b7b99456FC3761ce5b7ddA80d83f9d.
- S12 — ProxyAdmin 0x4b25478f… and owner 0xbeb76A70….
- S13 — Robinhood memecoin launchpads 30d.
- S14 — protocol/trench.
- S15 — Getting Started.
- S16 — 10,000+ tokens launched on Trench.
- S19 — Post-migration pools on Uniswap V4.
- S20 — RWA pairs. Expanded..
- S21 — FAMI is now live on Trench.
- S22 — orgs/trench and users/TrenchToday01.
- S23 — Creator fees change the incentive.
- S24 — trench.today profile clone.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:51:00Z; methodology_version: proofline-v1.0.
