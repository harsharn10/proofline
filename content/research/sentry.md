---
slug: sentry
coverage: stub
methodology_version: proofline-v1.0
---

# Sentry — research record

## Identity

Sentry is classified as Uniswap-pool launchpad.

Sentry is a token launchpad and swap app on Robinhood Chain and Ink. A launch deploys a fixed-supply ERC-20 into a Uniswap pool in one transaction; there is no bonding curve and no graduation. New launches use Uniswap v4 with the position locked in SentryLPVault. A legacy V3 factory remains on each chain. The app also quotes Uni V3/V2/v4 and PancakeSwap V3 on Robinhood, and Uni V3 on Ink. The handle is @sentrylauncher; the site is sentry.trading.

Themes: launchpad

## Deployment

Robinhood v4 WETH launch factory (SentryLaunchFactoryV4 proxy): 0x472286b7d5c1B2A3cE1132eF73d3BcCF446C5cc1 on robinhood-chain. [verified S2 S10 S11]

Robinhood v4 stock-pair launch factory (SentryLaunchFactoryV4 proxy): 0xd0A93885a387e3a8a14dd82776CF9104a3676b3A on robinhood-chain. [claim S2 S10 S12]

Robinhood legacy v3 launch factory (retired): 0x9e8f6f8214b01Fd4Cf1d73FB1fb7cf9f811036Cb on robinhood-chain. [verified S2 S4 S10 S13]

Robinhood v4 factory implementation: 0x818FdD15Dbe95851a0bd8c5389c49ed6d4FE2bBf on robinhood-chain. [claim S10 S11 S12]

Robinhood SentryLPVault: 0x0F0E601041Ec765B8bAB8c166840E291253F2Df0 on robinhood-chain. [verified S2 S10 S14]

Robinhood factory owner(): 0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5 on robinhood-chain. [verified S10 S21]

SENTRY platform token (SentryTokenRelaunch): 0x1EcA20cfa4AF2e2fA2F4CE2bF8d97bFa184FD4D7 on robinhood-chain. [claim S2 S10 S15]

Ink v4 launch factory (SentryLaunchFactoryV4Ink proxy; chain id 57073): 0xcF44b151aee1Ef69677f24cadED4d2d61b0D45BD on other. [claim S2 S22 S23]

Ink legacy v3 launch factory (chain id 57073): 0xDc37e11B68052d1539fa23386eE58Ac444bf5BE1 on other. [claim S2 S22 S23]

Ink SentryLPVault (chain id 57073): 0x86585D4474C78c1C0fA1f8771682E9aD020787eC on other. [claim S2 S22 S23]

## Control

owner() on RH v4 factories 0x4722…5cc1 and 0xd0A9…6b3A, RH v3 0x9e8f…36Cb, Ink v4 0xcF44…45BD, Ink v3 0xDc37…5BE1, and the RH treasury splitter is 0xbf55…B7C5. That address has no code on 4663. Implementation slots match verified SentryLaunchFactoryV4 / SentryLaunchFactory / SentryLaunchFactoryV4Ink. Vaults are verified SentryLPVault with no owner() this pass. No timelock address was located. Guide: in-app generated keys are created server-side and encrypted at rest. [verified S10 S11 S21] [claim S2]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

@sentrylauncher names sentry.trading in the bio; sentry.trading JS links the handle. Llama twitter is sentrylauncher. Display name Sentry Launcher. Docs live at sentry.trading/sentry-guide.md and mavrk.gitbook.io/sentry-docs. GitHub user mavrkofficial (Sergio Luna) hosts related kits; there is no sentrylauncher GitHub user. getsentry is a different GitHub org (error-monitoring product), not this pad. [verified S1 S6] [claim S24]

## Product and economics

A launch has no bonding curve and no graduation. Guide: 1B ERC-20, ownership renounced, 100% of supply into a Uniswap v4 pool, position held by immutable SentryLPVault, trading public in the same transaction. Pair against WETH on either chain, Robinhood stock tokens on 4663, or Backed wrapped xStocks on Ink. Legacy V3 factories are marked retired for new launches; RPC still shows code. [claim S2 S5]

v4 pools open at a 40% fee that decays to a 1.7% floor (2.00% on Ink xStock pairs). Legacy V3 collect split is 70/30 on Robinhood (creatorFeeBps 7000) and 65/35 on Ink (6500). In-app swaps take a 1% platform fee. [verified S10 S22] [claim S2]

Llama currentChainTvls Ink 100085.81 + Robinhood Chain 99133.68 = 199219.49 USD at 2026-09-03T00:32:23Z (page $199,219.49). summary/fees total24h 19422 (Ink 17059 / RH 2363), total7d 220733. dailyRevenue total24h 5968, total7d 68409. Treasury adapter currentChainTvls Robinhood Chain 640.57. Figures are dual-chain; do not file the $199k sum as a Robinhood Chain TVL. [claim S16 S17 S18 S20]

## Communications

@sentrylauncher posts no bonding curve on Robinhood [claim S5]

@sentrylauncher posts Ink xStocks launch path [claim S9]

@sentrylauncher posts swap venues on Robinhood Chain [claim S8]

## Findings

The live factories are upgradeable ERC1967 proxies. owner() on the RH and Ink factories is one externally owned account with no code on 4663. The guide's 65/35 versus 70/30 fee language is not the same as Llama's protocol blurb, and the SENTRY token's owner() still returns that EOA. Ink addresses have empty code on 4663; using them on Robinhood Chain is the wrong chain. [verified S10 S22] [claim S2 S16]

- Upgradeable factories; owner is one EOA with no code on 4663. [verified S10 S21]
- Ink factories have empty code on 4663; chain_scope is multichain, Ink rows are chain other. [verified S22]
- Llama description 65/35 does not match RH creatorFeeBps 7000. [verified S10] [claim S16]
- Guide says SENTRY is renounced; RPC owner() is the factory EOA. [verified S10 S15] [claim S2]
- No audit report URL. [unknown]
- Llama 24h fees are mostly Ink, not Robinhood Chain. [claim S17 S18]
- Llama Ink v3 list includes CitadelEscape 0x733733…, not in the official guide. [claim S4 S23]

- Receipts: sentry.trading, sentry-guide.md, JS bundle, X profile and posts, Llama protocol/fees/page/adapters, GitHub 404, Blockscout api/v2, Ink explorer api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S2 S10 S16]
- Numbers: TVL and fees are dual-chain from api.llama.fi; RH slice is 99133.68 TVL and 2363 of 24h fees. Bytecode lengths, nonces, owner(), creatorFeeBps, and ERC1967 slots are chain 4663 and 57073 RPC. [verified S10 S16 S22]
- Adversarial: strongest contrary reading is that Sentry is Robinhood-native only, or is Coinbarrel / Pons / Bankr / LONG / Safehood. Llama chains and Ink RPC with empty 4663 code argue against robinhood-native. Coinbarrel launcher is 0x4234…e70; Pons is a bonding-curve pad; Bankr is named as a separate route in the Sentry guide. [inference S2 S4 S10 S15]

## Sources

- S1 — sentry.trading home.
- S2 — Sentry complete user guide.
- S4 — sentry-trading TVL adapter.
- S5 — No bonding curve on Robinhood.
- S6 — Sentry Launcher profile.
- S8 — Trade across DEXes including PCS-V3.
- S9 — Ink wrapped xStocks launch path.
- S10 — eth_getCode / owner() Sentry RH factories.
- S11 — Address 0x472286b7d5c1B2A3cE1132eF73d3BcCF446C5cc1.
- S12 — Address 0xd0A93885a387e3a8a14dd82776CF9104a3676b3A.
- S13 — Address 0x9e8f6f8214b01Fd4Cf1d73FB1fb7cf9f811036Cb.
- S14 — Address 0x0F0E601041Ec765B8bAB8c166840E291253F2Df0.
- S15 — Address 0x1EcA20cfa4AF2e2fA2F4CE2bF8d97bFa184FD4D7.
- S16 — protocol/sentry.
- S17 — summary/fees/sentry.
- S18 — Sentry protocol page.
- S20 — summary/fees/sentry dailyRevenue.
- S21 — Address 0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5.
- S22 — eth_getCode / owner() Sentry Ink factories.
- S23 — Ink Sentry factory addresses.
- S24 — sentrylauncher / sentry-trading 404.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:40:00Z; methodology_version: proofline-v1.0.
