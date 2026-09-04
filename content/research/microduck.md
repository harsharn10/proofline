---
slug: microduck
coverage: stub
methodology_version: proofline-v1.0
---

# microduck — research record

## Identity

microduck is classified as Stock-paired token.

A Pons v2 ERC-20 on Robinhood Chain. The launch minted a 1B-supply token onto a bonding curve quoted against tokenized NVDA, then graduated into a Uniswap v4 microduck/NVDA pool. Traders also use later microduck/USDG books. microduck.net and @MicroDuckNVDA publish the contract. The token is not Artificial Inu and is not the Pollen Robotics robot.

Themes: memecoin, stock-paired:NVDA

## Deployment

microduck token (PonsV2LauncherToken): 0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725 on robinhood-chain. [verified S5 S6 S7]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S7 S10 S11]

Pons v2 bonding curve: 0xAe10D785d2AF17cec895EFfE50685d1B113dc3a6 on robinhood-chain. [verified S7 S10 S12]

NVDA quote (NVIDIA • Robinhood Token): 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC on robinhood-chain. [claim S8 S10 S13 S14]

V2LaunchLocker (Gecko top holder): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S9 S15]

## Control

owner() reverts. deployer() is EOA 0x0DAB…e52d with empty code. Verified source: deployer confers no privileges. Curve 0xAe10…c3a6 is unverified. Gecko names V2LaunchLocker 0x2674…4952 as top holder on the USDG pool page. [verified S6 S7 S15]

## Security

No audit report URL was located on the site, X profile, DexScreener, Gecko, or the verified source header. [unknown]

## Engineering

_Research pending._

## Team

microduck.net canonical and shipped JS name CA 0xD5f1…E725 and https://x.com/MicroDuckNVDA. @MicroDuckNVDA lists microduck.net. [verified S1 S2 S3]

Site disclaimer: unofficial community token, not affiliated with Pollen Robotics, Hugging Face, or Robinhood. Handle bio: A Nvidia owned company, created by Hugging Face. Flag unconfirmed-official on that bio wording. Handles @MicroDuckNVDA__, @Micro_DuckNVDA, and @Micr0DuckNVDA repeat the same bio stem; flag copypasta-pattern. Do not merge signers. [claim S2 S3 S16 S17 S18]

## Product and economics

PonsV2LaunchFactory clones a 1B-supply PonsV2LauncherToken and mints it to a bonding curve. Verified source says the whole supply goes to the curve, not a Uniswap position, and that deployer is attribution-only. Pons launchpad HTML for this CA is phase 2, venue pool, quote NVDA 0xd060…9EEC, poolId 0xcde4d35e…c370, hooks V2MemeHook. [verified S6 S7 S10]

A Uniswap v4 microduck/USDG 0.78% pool 0xa3318d6f…5aad was created 2026-08-28T19:34:59Z, after the NVDA pool (2026-08-27T11:48:43Z). DexScreener lists 30 robinhood pairs, including WETH and further USDG books. Site ticker: 1 BILLION FIXED SUPPLY / PAIRED WITH NVDA. [verified S2 S8 S9]

Gecko microduck/USDG 0.78% 24h volume is 10461564.01 USD and reserveInUsd is 1116524.46 at 2026-09-03T03:40:00Z from the pool page __NEXT_DATA__. fdvInUsd is 35791571.94. [claim S9]

DexScreener same USDG pair: liquidity.usd 694395.16, volume.h24 10492472.42, fdv 35909002. NVDA Uniswap v4 0xcde4d35e…c370: volume.h24 1876306.79, liquidity.usd 520946.96. Gecko related_pools NVDA liquidity 288377.30 volume 1873891.09. Blockscout holders_count 18856. [claim S5 S8 S9]

## Communications

@MicroDuckNVDA posted the contract address [claim S4]

@MicroDuckNVDA quoted a custom PFP event [claim S19]

## Findings

Gecko and DexScreener disagree on USDG-pool liquidity ($1.12M vs $694k) while 24h volume is close. The X bio says NVIDIA / Hugging Face; the site says unofficial and not affiliated. Creation tx was not recovered this pass. [claim S1]

- Gecko USDG reserve $1.12M versus DexScreener liquidity $694k on the same pool. [claim S8 S9]
- X bio affiliation wording and site unofficial disclaimer do not match. [claim S2 S3]
- Curve source is unverified; create tx was not recovered. [verified S12] [unknown]
- No audit report URL this pass. [unknown]

- Receipts: microduck.net and shipped JS, @MicroDuckNVDA profile and two posts, lookalike profiles, Blockscout token/source/factory/curve/NVDA/locker, RPC, DexScreener, Gecko USDG pool HTML, Pons launchpad page, and GET /rhj/assets were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S9 S14]
- Numbers: 10461564.01 / 1116524.46 is the Gecko microduck/USDG 0.78% pool, not an all-pools figure. DexScreener 10492472.42 / 694395.16 is the same pair, different aggregator. NVDA book is a separate pool. [claim S8 S9]
- Adversarial: the strongest contrary reading is that this token is Artificial Inu or an official NVIDIA / Hugging Face / Pollen product. Base address, factory, domain, and handle differ from $AI; GET /rhj/assets matches the NVDA quote only; the site states unofficial and not affiliated. [inference S2 S8 S14]

## Sources

- S1 — microduck.net home.
- S2 — Shipped JS CA, handle, Pons, disclaimer.
- S3 — MicroDuck profile.
- S4 — Posted CA with simulator quote.
- S5 — Token 0xD5f1…E725 microduck.
- S6 — PonsV2LauncherToken verified source.
- S7 — eth_getCode, name, launchFactory, curve, deployer.
- S8 — latest/dex/tokens microduck.
- S9 — microduck/USDG Uniswap v4 0.78% pool.
- S10 — Launchpad page microduck.
- S11 — PonsV2LaunchFactory 0x7eD5…C7e.
- S12 — Curve 0xAe10…c3a6.
- S13 — NVDA 0xd060…9EEC NVIDIA • Robinhood Token.
- S14 — GET /rhj/assets NVDA Stock Token.
- S15 — V2LaunchLocker 0x2674…4952.
- S16 — MicroDuck (SUPPORT) profile.
- S17 — MicroDuck profile.
- S18 — Microduck profile.
- S19 — Quoted custom PFP event.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:45:00Z; methodology_version: proofline-v1.0.
