---
slug: chud
coverage: stub
methodology_version: proofline-v1.0
---

# chud — research record

## Identity

chud is classified as Launchpad-graduated token.

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 chud/RDDT pool. Traders buy and sell chud against the Reddit • Robinhood Token on that book. RDDT is the quote rail, not this profile. Distinct from packed KARMA 0xb1B800…baC3, LongLauncher CHUD 0x52E050…1e18, and in-flight wojak/snoo.

Themes: memecoin, stock-paired:RDDT, rwa, launchpad

## Deployment

chud token (PonsV2LauncherToken bytecode): 0x982965547E3B1f6DA55eE93B515834bD34081feB on robinhood-chain. [verified S1 S3 S5]

PonsV2LaunchDeployer: 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S15]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S4 S5 S16]

PonsV2BondingCurve: 0x6197E3d1967fF1d952cD1b82a5616Cbe943F277b on robinhood-chain. [verified S4 S5 S6]

PonsV2LaunchAndBuy (create tx to): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S3 S17]

V2LaunchLocker (isLocked true for this token): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S5 S20 S23]

RDDT Stock Token (pair quote / launch pairToken; rail, not this subject): 0x05b37Fb53A299a1b874A619e1c4C404D52C36F4C on robinhood-chain. [verified S5 S8 S12]

CHUD ticker collision (LongLauncher CHUD, not this row): 0x52E0502a786D4bf759Ddc2AD4F0b4608EfC61e18 on robinhood-chain. [claim S13 S14 S18]

LongLauncher (collision create tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S14]

DopplerERC20V1 implementation (collision token): 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S13 S14]

## Control

token owner() reverts. Deployer 0x5dfD…3661 has no code. transferCreatorFeeRecipient at 2026-09-01T19:00:55Z called PonsV2LaunchFactory from that EOA with newRecipient 0x458e…8D20. [verified S5 S11]

## Security

PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and V2LaunchLocker are verified on Blockscout. This token CA is_verified false (3248 B, not an EIP-1167 proxy). No audit report URL was located this pass. [verified S1 S15 S16 S17 S23] [unknown]

## Engineering

_Research pending._

## Team

@RHChud bio contains CA 0x982965…1feB; DexScreener info.socials is that handle. Constructor socials twitter/telegram/discord/farcaster/website are empty. A netlify claim URL attached the CA; flag copypasta-pattern and third-party-link. [claim S5 S7 S9 S21]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x5dfD…3661 at 2026-09-01T19:00:53Z minted chud / chud supply 1e9*1e18 onto PonsV2BondingCurve 0x6197…277b quoted against pairToken RDDT 0x05b37F…F4C with quoteIn 174591434462216952. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 42347152428810721502. description() is nothing ever happens. [verified S3 S4 S5]

CurveCompleted / LaunchSwept / PoolGraduated tx 0x92445b82…1070 at 2026-09-01T19:01:00Z swept quoteOut 42347152428810721505 RDDT and tokenOut 285714285714285714288123912 into Uniswap v4 poolId 0x5536f402…476f (PoolManager Initialize currency0 RDDT currency1 chud). V2LaunchLocker isLocked(token) true. Secondary chud/USDG and chud/ETH books exist on DexScreener with far less liquidity than the RDDT book. [verified S6 S7 S19 S20]

chud/RDDT Uniswap v4 24h volume is 490751.38 USD and liquidity.usd is 34748.51 at 2026-09-03T05:10:00Z from DexScreener tokens/v1. fdv/marketCap is 225745. Blockscout holders_count 390. Pair created 2026-09-01T19:01:00Z. Assignment lead of ~$35.6k liq / ~$494k vol is the same book at an earlier as_of. [claim S1 S7]

latest/dex/tokens lists five robinhood uniswap pairs; the RDDT book is the volume and liquidity leader. Collision 0x52E050…1e18 DexScreener liq 65232.22 vol.h24 52164.63. Gecko skipped (first GET 429). [claim S18 S19]

## Communications

@RHChud posted FMCL with CA in the bio [claim S9]

@KittehQuant posted the chud CA [claim S22]

Netlify claim URL attached the chud CA [claim S21]

@RHChud posted it was paired with Reddit [claim S10]

## Findings

USD liquidity figures on the chud/RDDT book count both sides, and the quote side is RDDT, not USDG. Ticker-only pairing is not identity: 0x52E050…1e18 is a ca-collision with more displayed liquidity. Constructor socials are empty; netlify claim URLs attached the CA (copypasta-pattern). Gecko was not used this pass (first GET 429). [claim S8]

- Quote token RDDT 0x05b37F…F4C is a Stock Token rail; pool USD figures count chud plus RDDT. [verified S8 S12]
- Same-ticker LongLauncher CHUD 0x52E050…1e18 is a ca-collision with deeper displayed liquidity and socials @chudonlong. [verified S13 S14 S18]
- Token source is unverified on this CA. No audit report URL this pass. [verified S1] [unknown]
- Netlify claim URLs attached the CA. Flag copypasta-pattern. [claim S21]

- Receipts: Blockscout token/factory/buy/deployer/locker/RDDT/collision and launchAndBuy / LaunchSwept txs, RPC name/symbol/launchFactory/curve/isLocked, DexScreener tokens/v1 + latest/dex/tokens, /rhj/assets, and @RHChud were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S9]
- Numbers: 490751.38 is the DexScreener chud/RDDT pool 24h volume. Reserve for TVL is DexScreener 34748.51 on that pair, not an all-pools figure. Collision 65232.22 / 52164.63 is a different CA. Gecko was not mixed in. [claim S7 S18 S19]
- Adversarial: the strongest contrary reading is that 0x52E050…1e18 is the canonical CHUD because it has more DexScreener liquidity. @RHChud bio and DexScreener socials pin 0x982965…1feB; 0x52E050…1e18 socials are @chudonlong and it is a LongLauncher Doppler clone. Packed KARMA and in-flight wojak/snoo are other names. [inference S7 S9 S13 S18]

## Sources

- S1 — Token 0x982965…1feB chud / chud.
- S3 — launchAndBuy tx 0x9fa9c06c…e5c4.
- S4 — TokenLaunched log for chud.
- S5 — eth_getCode, name, symbol, launchFactory() on chud.
- S6 — CurveCompleted / LaunchSwept tx 0x92445b82…1070.
- S7 — tokens/v1 chud 0x982965…1feB.
- S8 — GET /rhj/assets Stock Token registry.
- S9 — FMCL.
- S10 — Finally paired with my one true love, Reddit.
- S11 — transferCreatorFeeRecipient tx 0x06d8174a…f4a9.
- S12 — Token 0x05b37F…F4C RDDT.
- S13 — Collision token 0x52E050…1e18 CHUD.
- S14 — LongLauncher create tx 0xd4612c39…f21e.
- S15 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S16 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S17 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S18 — tokens/v1 collision CHUD 0x52E050…1e18.
- S19 — latest/dex/tokens chud.
- S20 — V2LaunchLocker isLocked(token).
- S21 — Netlify claim URL with chud CA.
- S22 — Chud on RH.
- S23 — Address 0x2674…4952 V2LaunchLocker.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:12:00Z; methodology_version: proofline-v1.0.
