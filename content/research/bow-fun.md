---
slug: bow-fun
coverage: stub
methodology_version: proofline-v1.0
---

# bow.fun — research record

## Identity

bow.fun is classified as Uniswap-pool launchpad.

bow.fun is a token launchpad on Robinhood Chain. A launch deploys a fixed-supply ERC-20 into a locked Uniswap pool from the creator's wallet: Standard is Uniswap V3 against WETH, IPO is Uniswap V4 with vesting and a whitelist, RWA is Uniswap V4 paired with a stock token. LP is locked by contract. Creators claim trade fees. Token addresses are mined to end in b03. The live launch entry in config.js is FactoryHub 0x229Faa91…7E29; a legacy V3 factory 0xC70E510E…ab79 remains deployed. The handle is @bowdotfun; the site is bow.fun.

Themes: launchpad, stock-paired

## Deployment

FactoryHub v3.0 UUPS proxy (current launch entry): 0x229Faa919ABf14279E2461Dba53F039c5B4C7E29 on robinhood-chain. [verified S2 S9 S10]

FactoryHub implementation: 0xda788f3CFcD27d145F4b16372f6B655F835FeCCb on robinhood-chain. [claim S10]

Legacy V3 launch factory: 0xC70E510E14710Ea535CAB7b2414860aF63FEab79 on robinhood-chain. [verified S2 S9 S10]

Legacy V3 LP locker: 0x904dCCB96d877E6db365282251Fa3dD156476660 on robinhood-chain. [claim S2 S9 S10]

TokenCodeProvider: 0xF53C1Be2088dD9345CCC74582e81e0c19F462F1b on robinhood-chain. [claim S2 S9 S10]

V4 sniper hook: 0xAd3c0C6a079bECE5Cc89928eA986aA0584348080 on robinhood-chain. [claim S2 S9 S10]

FactoryHub / legacy factory owner(): 0x039485D0944E7274acECafa68702E1051dAEA28a on robinhood-chain. [verified S9 S10]

Sample Standard V3 token USELESS (vanity b03): 0x93a2011bE42Bc96836fD9E02f55859D48dCBcb03 on robinhood-chain. [verified S8 S16]

## Control

_Research pending._

## Security

owner() on FactoryHub and the legacy factory returns 0x039485D0944E7274acECafa68702E1051dAEA28a. That address has no code (nonce 156). The hub is an ERC1967 proxy (130-byte code, Blockscout ERC1967Proxy verified shell, implementation 0xda788f3C…eCCb 21643-byte code, not named this pass). Legacy factory is not a proxy. pendingOwner() on the hub reverts. No timelock address was located. Slot treasuries decode to 0x772291C1…2f0e. No audit report URL. [verified S9 S10] [unknown]

## Engineering

_Research pending._

## Team

@bowdotfun names portal.bow.fun in the website field, not bow.fun. bow.fun HTML has no twitter:site. GitHub user bowdotfun sets blog bow.fun and twitter_username bowdotfun. Posts link https://bow.fun/. portal.bow.fun lists the launch app, a buy bot, and a trending bot. Flag unconfirmed-official. The GitHub README is Pons Launchpad Contracts for ponsfamily.com; package.json calls the repo an unofficial toolkit. Flag copypasta-pattern. Display name bowdotfun. [claim S1 S4 S14 S15]

## Product and economics

Site and config.js: Standard seeds a Uniswap V3 WETH pool; IPO uses Uniswap V4 with vesting and whitelist; RWA pairs against a stock token through USDG routing. LP is locked; the locker ABI exposes collect, not withdraw of principal. Default supply 1B, 2% max-wallet for 10 blocks, 1% pool fee, vanity suffix b03, graduation marker 3.7 ETH. Creators claim fees. [claim S1 S2]

FactoryHub slots 0/1/3 match IPO / Standard / RWA. RPC slotCount 5, launchCount 172, codeProvider 0xF53C1Be2…2F1b. Legacy factory launchCount 8193 and launchEnabled true. Official API total 8333, newest page on the hub, last-trade page still mixing legacy tokens that end in b03. [verified S8 S10]

Official API total 8333 tokens (pages 334) on 2026-09-03. Hub launchCount 172; legacy launchCount 8193. Emerson 30d harvest capture: 33 tokens / $250k DEX. OKX lifetime harvest capture: $62.3M. Llama has no bow-fun protocol; protocol/bow is Kujira Bow. Newest API token created 2026-09-02T18:05:01Z. Sample hub token USELESS 0x93a2011b…cb03 has 6747-byte code and totalSupply 1B. Do not treat 8333 as the 30d window. [verified S8 S10] [claim S17 S18 S19]

## Communications

@bowdotfun posts day-1 launchpad live [claim S7 S20]

@bowdotfun posts creator fee claim and ETH airdrop [claim S6]

## Findings

FactoryHub is an upgradeable ERC1967 proxy. owner() on the hub and on the legacy factory is one externally owned account with no code. The hub implementation is unverified this pass. The legacy factory still returns launchEnabled true, so an integrator that posts only to 0xC70E51…ab79 or only to the hub can land on a different generation than the UI. GitHub README for bowdotfun/bowdotfun is Pons copy and is not this pad's factory source. [verified S9 S10] [claim S2 S15]

- FactoryHub is upgradeable; owner is one EOA with no code. [verified S10]
- Hub implementation source is not named or verified this pass. [verified S9]
- Legacy factory 0xC70E51…ab79 still has launchEnabled true and is not a new-launch-only path in config.js. [verified S10] [claim S2]
- No audit report URL. [unknown]
- GitHub README is Pons copy; do not treat it as factory source. [claim S15]
- Handle website is portal.bow.fun; site HTML does not name @bowdotfun. Flag unconfirmed-official. [claim S1 S4]
- Emerson 33 / $250k and OKX $62.3M were not live-table reproduced this pass. [claim S17 S18]
- Llama protocol/bow is Kujira, not this pad. [claim S19]

- Receipts: bow.fun, config.js, portal.bow.fun, /api/tokens, X profile and posts, GitHub user/repo, Llama 400/200, Dune shell, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S2 S8 S9 S10]
- Numbers: 8333 is the official tokens API total, not Emerson 30d. launchCount 172 / 8193 and bytecode lengths are chain 4663 RPC. 33 / $250k and $62.3M are harvest captures. [verified S8 S10] [claim S17]
- Adversarial: strongest contrary reading is that bow.fun is Longbow/BOW-SPY, or Pons because the GitHub README says Pons, or that Emerson's 33-token row means the pad is idle while 8333 is some other indexer. Config.js names these factories; RPC owner and launchCount match; API tokens.factory is those two addresses; sampled token USELESS ends in b03 and decodes on 4663. Graduation-at-3.7-ETH is a board marker, not a bonding curve in the site copy. [inference S2 S8 S10]

## Sources

- S1 — bow.fun home.
- S2 — config.js public configuration.
- S4 — bowdotfun profile.
- S6 — Creators can now claim their fees + airdrop them as ETH.
- S7 — only day 1.
- S8 — market tokens API.
- S9 — Address 0x229Faa919ABf14279E2461Dba53F039c5B4C7E29.
- S10 — eth_getCode / owner() / launchCount bow.fun factories.
- S14 — users/bowdotfun.
- S15 — repos/bowdotfun/bowdotfun README.
- S16 — eth_call name/symbol USELESS 0x93a2011b…cb03.
- S17 — Robinhood memecoin launchpads 30d (HARVEST.md).
- S18 — Robinhood Chain launchpads lifetime (HARVEST.md).
- S19 — protocol/bow-fun and protocol/bow.
- S20 — Is this thing on?.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:15:00Z; methodology_version: proofline-v1.0.
