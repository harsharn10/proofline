---
slug: foxpad
coverage: stub
methodology_version: proofline-v1.0
---

# FoxPad — research record

## Identity

FoxPad is classified as Bonding-curve launchpad.

Bonding-curve launchpad on Robinhood Chain. A user deploys a 1 billion-supply ERC-20, sells 750 million on a public curve, and at 4.75 ETH the raise plus 250 million reserved tokens open a locked 1% Uniswap v3 pool. Token-side pool fees burn; the ETH side pays the creator. The interface is foxpad.app. @FoxPad_RH posted the mainnet live date. Half of protocol fees are labeled FOX Revenue Vault.

Themes: launchpad, memecoin

## Deployment

FoxPad factory: 0xF8A56574a3FaF246F3ECB896193f5d5D6F87F22C on robinhood-chain. [verified S8 S10 S11 S13]

Protocol fee vault: 0xbAC56372983e7269C8b5Fa83D8a6C5c6e0Bab390 on robinhood-chain. [verified S8 S12 S13]

Swap router: 0x546a80f0bF76EDf37beA8BE7A074410565876ecE on robinhood-chain. [verified S8 S13 S30]

Token deployer: 0x44f26F1f27dC7ad35e08c6F64Bed522C19685E81 on robinhood-chain. [verified S8 S13 S14]

FOX token (NOXA LaunchToken the pad fee split names): 0x2103faA9D1762e27a716C61718b3aCf3Ec1F9bf1 on robinhood-chain. [claim S15 S16 S17]

## Control

The revenue page states buybacks from the FOX Revenue Vault are executed manually and that no automatic buyback sits in the contracts. [claim S25]

## Security

`owner()` reverts on factory, vault and router. Terms state the contracts have no owner or admin. Deployer 0x76aD47…FaBe2 is an externally owned account. All pad contracts are unverified on Blockscout. No audit report was located. [verified S7 S13 S28]

## Engineering

_Research pending._

## Team

@FoxPad_RH lists foxpad.app and posted the 3 Aug 2026 live notice. @fox_onrh is the FOX token account in the current bio and quoted that live post; census still files @fox_onrh on slug foxpad. Neighbor handles @fox_onrh__ and @foxon_rh share FOX naming. No repository URL was located. Telegram t.me/fox_rh is on the FOX bio, not confirmed as the pad's room. [verified S18 S19 S23]

FOX 0x2103…9bf1 is a NOXA LaunchToken created 2026-07-10, before the FoxPad factory. Keep slug noxa separate. [verified S15 S16]

## Product and economics

A create flow deploys a 1B ERC-20. 750M sells on a public bonding curve; 250M is reserved for the Uniswap v3 pool. Graduation target is 4.75 ETH. Curve protocol fee is 1% (creator 0% on the curve); graduation fee 3%; post-graduation FOXPad fee 0.50%; Uniswap fee tier 1%. Token-side LP fees burn; ETH-side LP fees pay the creator. Referral is posted as 20%. [claim S6 S9 S24 S25]

JS maps chain 4663 to factory 0xF8A5…F22C, protocolFeeVault 0xbAC5…b390, swapRouter 0x546a…6ecE, tokenDeployer 0x44f26F…5E81. [claim S8]

FOX/WETH Uniswap v3 pair 0x9C49…8685: market cap 1379793 USD, 24h volume 250014.84 USD, liquidity 184006.63 USD. That is the FOX token, not pad TVL. FOX holders 4490. Protocol fee vault ETH balance 44526437727231168 wei (~0.0445 ETH). [claim S12 S15 S17]

Nine createLaunch transactions hit the factory between 3 Aug and 12 Aug 2026. Eight TokenLaunched logs. Last token LITTLE JOHN 0x610F…C0F3, 2 holders, no DexScreener pair this pass. [verified S14 S31]

## Communications

@fox_onrh posts 6.74% of FOX burned [claim S21]

@RHDaily__ lists FOX among biggest RH projects [claim S22]

@FoxPad_RH posts foxpad.app is live [claim S27]

@FoxPad_RH: FoxPad is LIVE on Robinhood Chain [claim S19 S20]

@FoxPad_RH introduces bonding-curve pad [claim S32]

## Findings

Pad contract source is unverified and `owner()` reverts, so the withdraw path on the fee vault is unread. The revenue page says FOX buybacks are manual. Nine createLaunch transactions produced eight TokenLaunched logs. Last factory launch in this pass is 12 Aug 2026. [claim S6]

- Pad bytecode is unverified; `owner()` reverts, so the fee-vault withdraw path is unread. [verified S10 S13]
- FOX buybacks are described as manual. [claim S25]
- FOX market figures are the NOXA-launched culture token, not FoxPad launch TVL. [verified S15 S17]
- Last factory launch in this pass is 12 Aug 2026. [verified S31]
- No audit report was located. [unknown]

- Receipts: foxpad.app, /create, /revenue, /legal/terms, /legal/token-policy, JS contract map and fee constants, Blockscout factory/vault/router/tokenDeployer/FOX/LITTLE JOHN/create txs/logs, RPC, DexScreener, @FoxPad_RH, @fox_onrh, @RHDaily__, robinhoodfox.com, and neighbor handles were opened on 2026-09-03 and excerpts copied from the responses. [verified S6 S10 S13 S17]
- Numbers: 1379793 / 250014.84 / 184006.63 are the FOX/WETH Uniswap v3 pair, not a pad chain-slice TVL. Holders 4490 is FOX. 9 txs / 8 logs are factory activity. [claim S17] [verified S15 S31]
- Adversarial: the strongest contrary reading is that FoxPad is only a front for the FOX meme and has no distinct contracts. Factory 0xF8A5…F22C, TokenLaunched logs, LITTLE JOHN creator = tokenDeployer, and @FoxPad_RH ↔ foxpad.app argue a live pad; FOX remains a NOXA LaunchToken. [inference S10 S14 S15 S18]

## Sources

- S6 — FOXPad homepage.
- S7 — Terms of Service.
- S8 — App JS chain 4663 contract map.
- S9 — App JS fee constants.
- S10 — Address 0xF8A5…F22C factory.
- S11 — Factory creation tx 0xb3bfcda5….
- S12 — Address 0xbAC5…b390 protocolFeeVault.
- S13 — eth_getCode pad contracts and owner().
- S14 — LITTLE JOHN 0x610F…C0F3.
- S15 — FOX 0x2103…9bf1 LaunchToken.
- S16 — FOX creation tx 0x0b5a7dd4….
- S17 — FOX token pairs on Robinhood.
- S18 — FoxPad profile.
- S19 — FoxPad is LIVE on Robinhood Chain.
- S20 — FoxPad is now live.
- S21 — 6.74% of FOX is now burned forever.
- S22 — Biggest projects on Robinhood.
- S23 — FOX on RH profile.
- S24 — Create a meme.
- S25 — FOX Fuel / revenue.
- S27 — The most advanced launchpad is finally here.
- S28 — Deployer 0x76aD47…FaBe2.
- S30 — Swap router 0x546a…6ecE.
- S31 — Factory logs and createLaunch txs.
- S32 — Introducing FoxPad.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T02:30:00Z; methodology_version: proofline-v1.0.
