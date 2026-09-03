---
slug: hoodlock
coverage: stub
methodology_version: proofline-v1.0
---

# HoodLock — research record

## Identity

HoodLock is classified as Token and liquidity locker.

Native ERC-20 locker on Robinhood Chain. A user approves a token, pays a flat ETH fee, and verified RobinhoodLocker holds the balance until an unlock time that can only be extended. The same suite burns to the dead address and vests with a cliff. $LOCK is a Pons-launched token at hoodlock.tech / @HoodLockRH. Uniswap v3 and v4 LP NFTs are not lockable here.

Themes: tooling, launchpad, nft

## Deployment

LOCK token (PonsLauncherToken): 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94 on robinhood-chain. [verified S10 S11 S12 S17 S18]

RobinhoodLocker: 0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F on robinhood-chain. [verified S5 S6 S13 S14 S18]

RobinhoodBurner: 0x6Bf43Ca706FAa8EA46803299C191484e82280652 on robinhood-chain. [verified S6 S15 S18]

RobinhoodVesting: 0x910e19bcC4bce46999994Ed7297E0Fc4431ec72E on robinhood-chain. [verified S6 S16 S18]

LOCK/WETH Uniswap v3 pool: 0x4562cA679DcCc38f2dd59d28B2eBFEC99f507AF2 on robinhood-chain. [claim S17 S19]

PonsLaunchFactory (token creator_address_hash): 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB on robinhood-chain. [claim S11 S17]

Locker/burner/vesting admin EOA (also token deployer): 0x79c1230cAb12d53D040f5FE1F5279e1A481CCeA2 on robinhood-chain. [claim S17 S18]

Locker fee collector: 0x58EE7b355F6e347e9874deD2e877D0C7b9726B4F on robinhood-chain. [claim S18]

## Control

_Research pending._

## Security

_Research pending._

## Engineering

_Research pending._

## Team

_Research pending._

## Product and economics

_Research pending._

## Communications

Account posted 10% of total supply locked for 180 days [claim S21]

Account posted $1.51M current value locked [claim S22]

Account posted $LOCK locker revenue share as live [claim S23]

Account posted the HoodLock launchpad as live [claim S24]

Account posted Zedkr shop partnership and a ZED lock [claim S25]

Account posted Delta's 10% lock and a launchpad coming [claim S26]

## Findings

_Research pending._

## Sources

- S5 — HoodLock — liquidity and token locker.
- S6 — Contract reference.
- S10 — HoodLock profile.
- S11 — Address 0xd5BF43f29BF7Aa5bb42Ae9e217b84B86EB7a4B94.
- S12 — LOCK token.
- S13 — Address 0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F.
- S14 — Locker creation tx 0x060f96b1….
- S15 — Address 0x6Bf43Ca706FAa8EA46803299C191484e82280652.
- S16 — Address 0x910e19bcC4bce46999994Ed7297E0Fc4431ec72E.
- S17 — LOCK creation tx 0xe85df1f0….
- S18 — eth_getCode and locker/token views.
- S19 — LOCK token pairs on Robinhood.
- S21 — 10% of total supply locked for 180d.
- S22 — $1,510,000 current value locked.
- S23 — Revenue share to $LOCK lockers is live.
- S24 — The launchpad is live on Robinhood Chain.
- S25 — Zedkr partnership and ZED lock.
- S26 — Delta locked 10%; launchpad coming soon.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T02:55:00Z; methodology_version: proofline-v1.0.
