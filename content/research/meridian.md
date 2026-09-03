---
slug: meridian
coverage: stub
methodology_version: proofline-v1.0
---

# Meridian — research record

## Identity

Meridian is classified as Native perpetuals exchange.

USDe deposits mint MLP shares in an Accountable ERC-7540 async-redeem vault that lends into an upgradeable AccountableYield strategy; prediction markets run on the same app. Users open app.meridian.xyz; vault management redirects to yield.accountable.capital. @meridiandotxyz is the official handle. mPerps was posted as launching the week after 28 Aug 2026.

Themes: rwa, prediction, vault

## Deployment

Meridian Liquidity Provider (MLP share vault): 0x24b84023c8e4Da635be228C380C09bfE5271BF9d on robinhood-chain. [verified S17 S18 S23]

AccountableYield strategy (ERC1967 proxy; app manageUrl): 0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC on robinhood-chain. [verified S10 S21 S23]

AccountableYield implementation: 0x2639dA0923aBFFe46a753b765E0856Cc3E121710 on robinhood-chain. [claim S21 S35]

YieldStrategyFactory (Accountable): 0xA4d6a4aD35fc632aEE1dC48A2aEc2aaa37B51F9f on robinhood-chain. [claim S19 S20]

YieldStrategyFactory owner Safe: 0x4B07AaA370189E5603DF56C84f59c5A59181BFB1 on robinhood-chain. [claim S23 S29]

ConditionalTokensConditionResolver (app robinhood-mainnet map): 0xE42847eE3feE1B29065F14D39EcF664A04d70475 on robinhood-chain. [verified S10 S30]

## Control

MLP verified ABI has no `owner()`. YieldStrategyFactory `owner()` is SafeProxy 0x4B07AaA3…BFB1, threshold 2, three EOA owners, nonce 10. AccountableYield `borrower()` and `investmentManager()` return EOAs. The yield contract is an upgradeable ERC1967 proxy. No timelock was read. [verified S23 S29 S21]

## Security

Llama `audits` is 0. Vault source lists security@accountable.capital. No Meridian-named audit report was located on the site, X profile, or verified pages this pass. [unknown]

## Engineering

_Research pending._

## Team

@meridiandotxyz bio matches meridian.xyz: RWA perps and prediction markets on Robinhood Chain. github.com/meridiandotxyz returned 404; GitHub org Meridian-xyz listed zero public repositories. Vault and factory source is Accountable's yield stack. [verified S8 S11] [claim S26 S24]

Sight (@sight_hood) is a separate census prediction-market row. Meridian402 MERD 0x12f8… and token meridiandotxyz 0x2717… are different CAs. Flag ca-collision / ticker-only. [verified S27 S28]

## Product and economics

Official site and app describe Mutualized Perpetuals (mPerps) plus prediction markets. @meridiandotxyz posted the MLP cap fill and "mPerps launches next week" on 28 Aug 2026. [claim S8 S12]

MLP is a verified AccountableAsyncRedeemVault (ERC-4626 plus ERC-7540 async redeem). `asset()` is Ethena USDe 0x5d3a…ef34. The same `createYieldStrategy` transaction deployed ERC1967 AccountableYield 0xF62c…B1eC, which the app uses as the MLP manage URL on yield.accountable.capital. [verified S17 S19 S21 S10]

App bundle: MLP Vault active, Predict Vault inactive. Predict still has August volume posts and a Llama prediction-market row. ConditionResolver 0xE42847eE… is the robinhood-mainnet address in that bundle. [claim S10 S15 S25]

Llama meridian-perps Robinhood Chain $2,505,942 (methodology: assets in the perps LP vault). Llama meridian-predict $265,554. RPC: MLP idle USDe ~496,348; AccountableYield `deployedAssets()` ~2,010,893; sum ~$2.51M. MLP holders 612, supply ~2.49M e18. Official 28 Aug post: $2.5M cap filled. [claim S24 S25] [verified S23 S18]

## Communications

Official account posted MLP vault filled $2.5M cap [claim S12]

Official account posted MLP cap raised to $2.5M USDe [claim S13]

Official account posted September Fed combo markets [claim S14]

Official account posted August Predict category mix [claim S15]

Official account posted Predict's biggest week [claim S16]

Official account posted MLP cap raised to $2 million [claim S32]

## Findings

The yield strategy is an ERC1967 proxy. Factory `owner()` is a 2-of-3 Safe on Accountable's factory, not an `owner()` on MLP. Vault `totalAssets()` is only idle USDe; a card that prints that figure as TVL would miss the ~$2.01M `deployedAssets`. MERD / meridiandotxyz tickers on Blockscout are different contracts. [claim S8]

- AccountableYield is an ERC1967 proxy; implementation can change under the factory/Safe path. [verified S21 S23]
- Vault `totalAssets()` omits `deployedAssets`; idle USDe is not the Llama TVL. [verified S23]
- mPerps live-trading was not reproduced; the last official line is the 28 Aug launch post. [claim S12 S10]
- No audit report located this pass. [unknown]
- MERD and meridiandotxyz tickers are different contracts from MLP. [verified S27 S28]

- Receipts: meridian.xyz, app.meridian.xyz and its JS bundle, @meridiandotxyz profile and posts, Blockscout vault/factory/proxy/USDe/Safe/resolver, RPC 4663, Llama perps and predict, GitHub org, yield.accountable.capital, and the two collision tokens were opened on 2026-09-03 and excerpts copied from the responses. docs.meridian.xyz timed out. [verified S8 S17 S23 S24]
- Numbers: Llama figures are Robinhood Chain slices. Idle USDe plus `deployedAssets` is the on-chain counterpart to the perps TVL, not `totalAssets()` alone. [claim S24] [verified S23]
- Adversarial: the strongest contrary reading is that census mainnet is Llama-only, or that MERD/meridiandotxyz is this protocol, or that Hookr/pools.trade is the pad. MLP name, createYieldStrategy params, and the app manageUrl argue the vault is this slug; MERD is Meridian402; Uniswap's pad remains pools.trade. [inference S17 S10 S27]

## Sources

- S8 — mPerps & Prediction Markets | Meridian.
- S10 — app bundle index-B7YIsHtK.js vault and chain maps.
- S11 — Meridian profile.
- S12 — The MLP Vault has filled its $2.5M cap.
- S13 — MLP cap raised to $2.5M USDe.
- S14 — Six real combos users built off the September Fed meeting.
- S15 — What Meridian Predict users are trading in August.
- S16 — Meridian Predict just posted its biggest week yet.
- S17 — Address 0x24b8…1BF9d AccountableAsyncRedeemVault.
- S18 — Token MLP 0x24b8…1BF9d.
- S19 — createYieldStrategy tx 0x74034e80….
- S20 — YieldStrategyFactory 0xA4d6…1F9f.
- S21 — AccountableYield proxy 0xF62c…B1eC.
- S23 — eth_getCode, ERC-20/4626 views, Safe, deployedAssets.
- S24 — Meridian Perps protocol row.
- S25 — Meridian Predict protocol row.
- S26 — meridiandotxyz 404 and Meridian-xyz org.
- S27 — Meridian MERD 0x12f8…Ab8d8.
- S28 — Token meridiandotxyz 0x2717…02Da.
- S29 — Factory owner SafeProxy 0x4B07…BFB1.
- S30 — ConditionalTokensConditionResolver 0xE428…0475.
- S32 — MLP cap raised to $2 million.
- S35 — AccountableYield implementation 0x2639…1710.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T02:50:00Z; methodology_version: proofline-v1.0.
