---
slug: clanker
coverage: stub
methodology_version: proofline-v1.0
---

# Clanker — research record

## Identity

Clanker is classified as Uniswap-pool launchpad.

A Farcaster and X deploy bot that mints a 100 billion-supply ERC-20 into a locked Uniswap v4 pool. Tag @clanker_world or use clanker.world to pick a chain, pair, vault and sniper-tax window; creators take a share of swap fees. Clanker Devco's verified v4 factory 0xd3f2…9A94 is live on Robinhood Chain. The RH $CLANKER token 0xd246…1E18 is a LONG/Doppler clone, not this factory.

Themes: launchpad, memecoin, agent, stock-paired, ai

## Deployment

Clanker v4 factory (Robinhood Chain): 0xd3f2cc1731b7fd17f28798835c2e02f0a1839a94 on robinhood-chain. [verified S2 S15 S16 S20]

ClankerDeployer library: 0xFB2BAE281d9f9d11AE3Aed87bB717B058C9797e6 on robinhood-chain. [claim S15 S20]

Factory Treasury (teamFeeRecipient): 0xFC535Ead4104177B70bf235D67Ab436d99788e04 on robinhood-chain. [claim S2 S20]

CATARM (Clanker deployToken, paired WETH): 0xcd74b9170F095866a8Fbf1af02f95Cc384a42ca0 on robinhood-chain. [verified S2 S17 S20 S21]

## Control

`owner()` on 0xd3f2…9A94 returns 0xeea96d…eab8, which has 171 bytes of code. OwnerAdmins may setDeprecated, setHook, setLocker, setExtension, setMevModule and setTeamFeeRecipient. `teamFeeRecipient()` is 0xFC535Ead…, an address with empty code that the stats page labels Factory Treasury. No timelock was read on this pass. Gitbook lists Macro and Cantina v4 reviews; those PDFs were not matched to this bytecode. [verified S15 S20]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

GitHub org clanker-devco publishes v4-contracts and the Gitbook DOCS repo. @clanker_world's bio website is clanker.world. farcaster.xyz/clanker is pinned to the Robinhood launch. The factory was CREATE2-deployed 2026-07-08 from 0x2f2F61d1… through 0x4e59b448…. Who holds 0xeea96d… was not established. [claim S8 S9 S14]

## Product and economics

Tag @clanker on Farcaster, @clanker_world on X, or use clanker.world/deploy. The v4 factory mints `TOKEN_SUPPLY` 100 billion units, places liquidity through an enabled locker, and initializes a Uniswap v4 pool via an enabled hook and MEV module. Launch posts cite a sniper tax that starts at 66.7% and decays to 4.2% over 15 seconds; the deploy form shows 1% static fees and a 15 second sniper tax. [claim S1 S3 S10 S15]

Stock-token pairing is a separate form path with RHJ terms. X deploys onto Robinhood Chain are gated at 200 followers and one launch per day; the bot replies with a Base alternative when the count is below that. [claim S3 S4 S11 S12]

clanker.world Robinhood stats, opened 2026-09-03: 14.3k tokens, 3 deploys in 24h, 14 in 7d, 335 in 30d, last deploy 2026-09-02 23:07 UTC, protocol revenue v4 0.294 WETH / 24h. DexScreener CATARM/WETH v4 24h volume $73,471.64 (one factory token, not pad-wide). RH $CLANKER 0xd246 24h volume is a LONG pool and is not a Clanker.sol figure. [claim S2 S21]

## Communications

@clanker_world posts sushicat live on Base [claim S13]

@clanker_world posts 200-follower Robinhood gate [claim S12]

@clanker_world posts MEOW live on Robinhood Chain [claim S11]

@clanker_world posts Clanker live on Robinhood Chain [claim S10 S14]

## Findings

`owner()` is a contract that can deprecate the factory and swap hooks, lockers and the team fee recipient. Gitbook's deployed-contracts table omits Robinhood, so a reader who stops at docs will miss the live 4663 factory. Ticker CLANKER on this chain is the LONG/Doppler clone, not a Clanker.sol token. [claim S1]

- Factory owner is a contract with no timelock reproduced on this pass; it can disable deploys and change modules. [verified S15 S20]
- Gitbook deployed-contracts omits chain 4663 while the factory is live. [verified S6 S15]
- Ticker CLANKER on Robinhood Chain is Doppler/LONG clone 0xd246…1E18. Flag ca-collision. [verified S18 S19 S22]
- X surface is Base-heavy because of the 200-follower RH gate; that is not an off-chain of the factory. [claim S12 S17]

- Receipts: each URL above was opened on 2026-09-03 and the excerpt copied from the page or API body. [verified S1 S2 S15 S17 S18 S20]
- Numbers: 0.294 WETH is the site's Robinhood v4 24h revenue, not an all-chains total. CATARM $73,471.64 is one token's DexScreener h24, not pad volume. $CLANKER 0xd246 volume was not used as a Clanker.sol metric. [claim S2 S21 S22]
- Adversarial: the strongest contrary reading is that Clanker on Robinhood is only the LONG-launched $CLANKER token, or that the pad has left 4663 because Gitbook and recent X are Base-first. Verified Clanker.sol at 0xd3f2…9A94, a 2026-09-02 deployToken, and the stats page factory link argue against both. [inference S2 S6 S15 S17 S18]

## Sources

- S1 — About Clanker.
- S2 — Robinhood Chain Stats.
- S3 — Deploy a Token.
- S4 — Stock Token pair terms.
- S6 — Deployed Contracts.
- S8 — clanker-devco organization.
- S9 — clanker profile.
- S10 — clanker is live on Robinhood Chain.
- S11 — Meow (MEOW) is live on Robinhood Chain.
- S12 — Robinhood Chain requires 200+ X followers.
- S13 — sushicat live on Base.
- S14 — Farcaster profile.
- S15 — Address 0xd3f2…9A94 Clanker.
- S16 — Factory CREATE2 tx 0x28b5e185….
- S17 — deployToken CATARM tx 0x1664f046….
- S18 — Address 0xd246…1E18 Clanker token.
- S19 — LongLauncher.create tx 0x12701d75….
- S20 — eth_getCode and factory getters.
- S21 — CATARM token pairs.
- S22 — CLANKER 0xd246 token pairs.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:15:00Z; methodology_version: proofline-v1.0.
