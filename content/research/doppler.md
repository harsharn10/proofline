---
slug: doppler
coverage: stub
methodology_version: proofline-v1.0
---

# Doppler — research record

## Identity

Doppler is classified as Bonding-curve launchpad.

Doppler is an onchain token-launch protocol. Teams pass launch parameters into an Airlock contract, which wires a token factory, hook initializer, governance, and migrator. Price discovery is a static, multicurve, or dynamic auction; liquidity can migrate after the auction. Custom hooks can run when the market opens, on each swap, or at graduation. On Robinhood Chain the live Airlock is `0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862` and the token factory is DopplerERC20V1Factory `0x1B37D3a72082029c44B35B604Ea473617580b69a`. The handle is @dopplerprotocol; the site is doppler.lol. This slug is the protocol, not a LONG clone token.

Themes: launchpad

## Deployment

Airlock (unified create entry): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [verified S3 S13 S14]

DopplerERC20V1Factory: 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S3 S13 S15]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S3 S13 S16]

DopplerHookInitializer: 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 on robinhood-chain. [claim S3 S13 S26]

UniswapV4Initializer: 0x6cce158B6D1747617fc218592B4D60B239B957ea on robinhood-chain. [claim S3 S13 S27]

Airlock owner (SafeProxy): 0x21E2ce70511e4FE542a97708e89520471DAa7A66 on robinhood-chain. [claim S13 S17 S18]

## Control

_Research pending._

## Security

`owner()` on Airlock returns SafeProxy `0x21E2ce70511e4FE542a97708e89520471DAa7A66`. RPC `getThreshold()` is 3; six owner addresses; VERSION 1.4.1; Safe nonce 2. Airlock, factory, and implementation are verified on Blockscout and are not ERC-1967 proxies. Factory `owner()` is not present; the factory is Airlock-gated. Docs list OpenZeppelin and Certora reviews and a Cantina contest/bounty; those reports were not opened against these 4663 addresses this pass. [verified S13 S14 S17 S18] [claim S4]

## Engineering

_Research pending._

## Team

@dopplerprotocol names doppler.lol in the website field. doppler.lol HTML sets twitter:creator to @dopplerprotocol. Contracts live in github.com/whetstoneresearch/doppler (description: Core contracts for the Doppler Protocol). Docs contact security@whetstone.cc. Austin Adams (@aadams) posts as building @dopplerprotocol. Homepage does not name Robinhood; docs and X do. [verified S1 S5 S12]

## Product and economics

A launch goes through Airlock. Modules include a token factory (DopplerERC20V1Factory deploys EIP-1167 clones of DopplerERC20V1), a Uniswap v4 or v3 initializer, optional governance, and a migrator. Auctions are static (one curve), multicurve (several curves that cannot leave a gap and that sum to 100% of sold supply), or dynamic. Hooks can fire at open, each swap, or graduation. Fees can decay (example: 80% down to 1%). Protocol take is 5% of trading fees on EVM. [claim S2 S3]

The self-serve app is app.doppler.lol. Integrators use the TypeScript SDK. LONG's LongLauncher is a wrapper that requires `tokenFactory == TRUSTED_TOKEN_FACTORY` (this factory) and forwards Airlock.create. [claim S6 S7 S12]

@RHDaily__ posted $2.2M 24h launchpad volume for @dopplerprotocol on 2026-09-01. That figure is a third-party board, not a chain slice. Llama `protocol/doppler` returned HTTP 400. Gecko first GET returned 429 and was skipped. On chain 4663, Airlock has 9126 transactions and 445362 token transfers on Blockscout; factory nonce is 115600. No TVL is claimed this pass. [claim S11] [verified S13 S19] [claim S20]

## Communications

@dopplerprotocol posts SDK support for Robinhood Chain [claim S6]

@dopplerprotocol posts launch with Doppler on Robinhood Chain [claim S7]

RH Daily lists @dopplerprotocol at $2.2M 24h launchpad volume [claim S11]

@dopplerprotocol posts Zora custom pairs live on Robinhood Chain [claim S8]

## Findings

Airlock `owner()` is a 3-of-6 Safe. Docs do not name a timelock on that Safe. Factory nonce 115600 means a large set of EIP-1167 clones share DopplerERC20V1 bytecode; a factory or implementation mistake would be wide. Homepage copy still omits Robinhood while the contract table lists it. Audit URLs are Drive/Cantina pages whose 4663 scope was not opened this pass. [verified S13 S18] [claim S1 S4]

- Airlock owner is a 3-of-6 Safe with no timelock named in the Robinhood contract table. [verified S18]
- Factory nonce 115600: many clones share one implementation. [verified S13]
- Audit reports were not matched to 4663 addresses this pass. [claim S4]
- Homepage omits Robinhood while docs list chain 4663. [claim S1 S3]
- 24h volume is a social board, not Llama or explorer. [claim S11]
- Shared Airlock with LONG, STATICS, and EARN is infra, not identity. [claim S12]

- Receipts: doppler.lol, app.doppler.lol, docs explainer/addresses/security/home, X profile and posts, RH Daily board, GitHub repo and Deployments.md, Llama 400, Gecko 429, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S3 S13 S14]
- Numbers: bytecode lengths, nonces, owner(), getThreshold(), and chainId 0x1237 are chain 4663 RPC. Airlock tx counts are Blockscout counters. $2.2M is the RH Daily post, not an all-chains total. [verified S13 S19] [claim S11]
- Adversarial: strongest contrary reading is that this slug is LONG, because LONG tokens are DopplerERC20V1 clones and LONG's trusted factory is this address. LongLauncher `0x22e9…eeED`, app.long.xyz, and @longdotxyz are a separate wrapper. This packet is the protocol at doppler.lol / @dopplerprotocol. [inference S3 S5 S15]

## Sources

- S1 — doppler.lol home.
- S2 — Explainer.
- S3 — Contract addresses.
- S4 — Security and bug bounties.
- S5 — Doppler profile.
- S6 — The Doppler SDK now supports Robinhood Chain.
- S7 — Launch with Doppler on Robinhood Chain.
- S8 — Zora custom pairs on Doppler.
- S11 — Top Robinhood Chain Launchpads by 24H Volume.
- S12 — whetstoneresearch/doppler.
- S13 — eth_getCode / owner() Airlock factory impl.
- S14 — Address 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862.
- S15 — Address 0x1B37D3a72082029c44B35B604Ea473617580b69a.
- S16 — Address 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599.
- S17 — Address 0x21E2ce70511e4FE542a97708e89520471DAa7A66.
- S18 — Safe getThreshold / getOwners.
- S19 — Airlock counters.
- S20 — protocol/doppler.
- S26 — Address 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544.
- S27 — Address 0x6cce158B6D1747617fc218592B4D60B239B957ea.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:55:00Z; methodology_version: proofline-v1.0.
