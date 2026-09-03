---
slug: longshot
coverage: stub
methodology_version: proofline-v1.0
---

# Longshot — research record

## Identity

Longshot is classified as Bonding-curve launchpad.

Fee-routed token factory: trading fees fund one immutable Hyperliquid long or short, holder rewards, and a 20% operations cut. A creator picks underlying, direction and leverage, then deploys; on Robinhood Chain LaunchFactoryV4 uses a bonding curve that graduates to Uniswap v4. The official LONGSHOT token trades versus WETH. @uselongshot runs it at uselongshot.xyz.

Themes: launchpad, rwa, memecoin

## Deployment

LONGSHOT token (official CA): 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745 on robinhood-chain. [verified S9 S10 S12]

LaunchFactoryV4 (Robinhood Chain): 0xE1E635c1d952C4136f1fBF816c072EBb5D3E3661 on robinhood-chain. [verified S6 S13 S14]

LaunchLensV4 (Robinhood Chain): 0xCFd8902c696fb74FA64ea6Fe339e149e5c50b00f on robinhood-chain. [claim S6 S15]

BondingRouterV4 (Robinhood Chain): 0x1BAfB314515Cedf96Ac8D569304934EefA051bcA on robinhood-chain. [claim S6 S16]

LONGSHOT / WETH Uniswap v3 pool: 0xCA3C6DBF5F875156B146FCa72BCeed53A8414fC7 on robinhood-chain. [verified S11 S12 S17]

Pre-V4 launch contract that created the official token: 0xB2F8c34181878E410bbbcEb9A992Ea7c66dc877E on robinhood-chain. [claim S11 S12]

PoolAccountRegistry (Robinhood Chain): 0x7A367caCc51227B4bF315eabB6Ee501FD01a4fE9 on robinhood-chain. [claim S6 S12]

LaunchFactoryV4 keeper: 0xd9C0B4110bc29391c953d986d3a91E6114D0Ad60 on robinhood-chain. [claim S12]

## Control

LaunchFactoryV4 `owner()` returns 0x1F68…59E5, which has no code and created the factory. `keeper()` returns 0xd9C0…Ad60. Source is unverified. [verified S12 S14]

## Security

Site FAQ: do not treat deployment or explorer verification as an independent security audit. No auditor URL was located on the site this pass. [claim S6]

## Engineering

_Research pending._

## Team

@uselongshot lists uselongshot.xyz. The site names @uselongshot, t.me/uselongshot and github.com/LongshotRH/Longshot. Telegram title UseLongshot points at www.uselongshot.xyz. The GitHub URL returned 404. [verified S6 S7 S8]

Census LONG and Longbow share a name stem only. @uselongshotxyz repeats the official bio and showed 0 followers. [claim S7 S19]

## Product and economics

A creator locks underlying, direction and leverage at deploy. Fees split 40 / 40 / 20 into position capital, holder rewards and operations, or 80 / 20 in Ember Cycle buyback-and-burn mode. The token is an ordinary ERC-20; it is not a redeemable claim on the perp. [claim S6]

Robinhood Chain docs on the same page: bonding curve then Uniswap v4, with LaunchFactoryV4, LaunchLensV4 and BondingRouterV4. The official LONGSHOT token was created on 12 Aug 2026 through 0xB2F8…877E into a Uniswap v3 WETH pool, before LaunchFactoryV4 existed. [claim S6] [verified S11 S13 S14]

Launch UI lists crypto and stocks as underlyings and states no stocks are enabled by the factory owner yet. [claim S6]

DexScreener LONGSHOT/WETH Uniswap v3 on robinhood: liquidity $4,446.02, market cap $4,439, 24h volume $4.09 at 2026-09-03T02:45Z. Holders 60. Factory slot-10 length 2; DexScreener returned no pairs for those two tokens. [verified S10 S17]

## Communications

Official account posted major updates rolling out next week [claim S22]

Official account posted launch-competition prize still open [claim S23]

Official account posted pump.fun, HyperEVM, BSC, Ember Cycle [claim S24]

Official account posted BNB Smart Chain and HyperEVM live [claim S21]

Official account posted LONGSHOT contract verified [claim S25]

## Findings

LaunchFactoryV4 source is unverified. `owner()` is one externally owned account. The keeper is a rotatable key that places Hyperliquid orders. Site copy states there is no on-chain pause on launched-token trading, and that a liquidated perp does not stop the token market. [claim S6]

- LaunchFactoryV4 bytecode is unverified; owner is one EOA. [verified S12 S13]
- Official 4663 pool liquidity is $4,446, below a $25k pool bar. [verified S17]
- Perp liquidation can zero that isolated margin while the token keeps trading. [claim S6]
- No named audit report was located. [claim S6]
- github.com/LongshotRH/Longshot returned 404. [claim S20]

- Receipts: every URL above was opened on 2026-09-03 and its excerpt copied from the page or API. [verified S6 S9 S17]
- Numbers: market cap, 24h volume and holders are the 4663 pair or token slice, not an all-chains total. [verified S10 S17]
- Adversarial: the strongest contrary reading is that Longshot is LONG (app.long.xyz) or longshot.finance on Solana; the official domain, handle, CA and factory addresses argue against both. [inference S6 S7 S9]

## Sources

- S6 — uselongshot.xyz site, docs and FAQ.
- S7 — X profile.
- S8 — t.me/uselongshot.
- S9 — Address 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745.
- S10 — Token LONGSHOT 0x8701…5745.
- S11 — Creation tx 0x2daf0267….
- S12 — eth_getCode and eth_call on Longshot 4663 contracts.
- S13 — LaunchFactoryV4 0xE1E6…3661.
- S14 — LaunchFactoryV4 creation tx 0xa9b7b8e5….
- S15 — LaunchLensV4 0xCFd8…b00f.
- S16 — BondingRouterV4 0x1BAf…1bcA.
- S17 — LONGSHOT token pairs on Robinhood.
- S19 — @uselongshotxyz profile.
- S20 — LongshotRH/Longshot 404.
- S21 — BNB Smart Chain and HyperEVM live.
- S22 — major updates rolling out next week.
- S23 — launch competition still open.
- S24 — This week at Longshot.
- S25 — CONTRACT is now VERIFIED.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T02:58:36Z; methodology_version: proofline-v1.0.
