---
slug: waddles
coverage: stub
methodology_version: proofline-v1.0
---

# WADDLES — research record

## Identity

WADDLES is classified as Stock-paired token.

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against Amazon • Robinhood Token (AMZN). PonsV2LaunchFactory.launchToken on 2026-08-29 minted Waddles (WADDLES) into a bonding curve, then createGraduatedPool seeded the WADDLES/AMZN book and locked leftover supply plus the LP NFT. Traders buy and sell WADDLES against AMZN. AMZN is the quote rail, not the subject. No bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:AMZN, rwa, graduation:pons-v2

## Deployment

WADDLES token: 0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD on robinhood-chain. [verified S1 S5 S18]

PonsV2LaunchFactory: 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S4 S5 S6]

Pons v2 bonding curve (TokenLaunched.curve): 0xeC4702Ef81Fe8d47708231B4E60E582372b21899 on robinhood-chain. [verified S4 S18 S22]

V2LaunchLocker: 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S15 S19]

AMZN Amazon • Robinhood Token (pair quote / rail): 0x12f190a9F9d7D37a250758b26824B97CE941bF54 on robinhood-chain. [verified S6 S12 S16]

V2GraduationExecutor: 0xC7819B64A1dAECD7eC19856d026cb14EfBd89046 on robinhood-chain. [claim S5 S19]

V2MemeHook: 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044 on robinhood-chain. [claim S5 S19]

## Control

token owner() reverts. factory owner() is the Pons Safe 0x263ed2…19Dd. Deployer 0x81D7…CC63 has no code. Launch leftover supply and the v4 position sit in V2LaunchLocker. [verified S5 S15 S19]

## Security

PonsV2LaunchFactory, V2LaunchLocker, V2GraduationExecutor, and V2MemeHook are verified on Blockscout. The WADDLES token itself is not verified (3248 B runtime, not an EIP-1167 clone). No audit report URL was located this pass. [verified S1 S3 S15] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located with a bidirectional CA link. DexScreener info.websites and info.socials point at https://waddles.website/, x.com/waddlesamzn, and t.me/waddlesRH as a community-claim profile. Homepage HTML titles World Wide Waddles with no contract; t.me/waddlesRH titles WADDLES CTO with 102 subscribers and no contract in the public preview. github.com/sboult/waddles.website predates launchToken (created 2026-07-24) and the README has no CA. Flag unconfirmed-official and third-party-link. [claim S7 S13 S14 S23]

Pons launchpad HTML names Creator 0x81D7…CC63 and Paired AMZN. @moneymancalls posted that $WADDLES is a Pons AMZN-pair mover. That is CT, not an issuer statement. [claim S11 S24]

## Product and economics

PonsV2LaunchFactory 0x7eD5…EC7e launchToken from EOA 0x81D7…CC63 at 2026-08-29T13:47:02Z minted Waddles / WADDLES supply 1e9*1e18 into bonding curve 0xeC47…1899 quoted against AMZN 0x12f1…bF54. TokenLaunched graduationThreshold is 29330291092142702509 (~29.33 AMZN). factory() on the token reverts. [verified S4 S5 S18]

CurveCompleted at 2026-08-29T13:53:23Z then createGraduatedPool at 13:53:24Z from EOA 0xc0b3…Ae6e initialized Uniswap v4 poolId 0x31c5…fbdc (currency0 AMZN, currency1 WADDLES, hooks V2MemeHook 0xE5e7…e044). ~204.08M WADDLES and ~29.33 AMZN went into the pool. ~81.63M WADDLES (about 8.16% of supply) and LP NFT 1133086 locked in V2LaunchLocker. Gecko launchpad_details.completed true at that timestamp. Secondary WADDLES/USDG v4 books exist on DexScreener with far less liquidity than the AMZN book. [verified S7 S9 S19 S22]

Gecko AMZN/WADDLES pool 24h volume is 776350.30 USD and reserve_in_usd is 95900.24 at 2026-09-03T04:35:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 1475465.23. Gecko token volume_usd.h24 is 799765.87 across all pools, not the AMZN book. Gecko pool fdv_usd 1985978.61 is AMZN-as-base. [claim S8 S9]

DexScreener same pair: liquidity.usd 70812.33, volume.h24 590564.72, fdv/marketCap 832658. Blockscout holders_count 856. Pair created 2026-08-29T13:53:24Z. Pons launchpad HTML this pass showed Price $0.000838 Market cap $838,396.46. [claim S1 S7 S11]

## Communications

@WaddlesAMZN posted waddles.website and an AWS builder URL [claim S10 S14 S23]

X posts pushed Netlify claim URLs that embed CA 0xbB6E…0CdD [claim S17]

@moneymancalls called $WADDLES the first real AMZN pair mover on Pons [claim S24 S25]

## Findings

USD liquidity figures on the WADDLES/AMZN book count both sides, and the quote side is AMZN, not USDG. Gecko and DexScreener disagree on reserve and fdv for the same pool; Gecko's pool fdv is AMZN-as-base. DexScreener lists waddles.website and @WaddlesAMZN as a community-claim profile, but those surfaces do not embed the CA this pass, so comms stay unconfirmed-official. Netlify claim URLs that embed this CA are third-party-link / copypasta-pattern. A second robinhood WADDLES/AMZN token at 0xbc49…1e18 is a different address. [claim S11]

- Quote token AMZN 0x12f1…bF54 is the Robinhood Stock Token rail from GET /rhj/assets; WADDLES is not in that registry. [verified S12 S16]
- Pool USD reserve is WADDLES plus AMZN, not a USDG or WETH backstop. [claim S7 S8]
- No bidirectional official handle or domain this pass; DexScreener socials and Telegram are community-claim / third-party-link. [claim S7 S13]
- Token source is not verified on Blockscout; no audit report URL this pass. [unknown]
- Netlify claim URLs embedding this CA are copypasta-pattern. [claim S17]
- DexScreener search also lists a different WADDLES 0xbc49…1e18 / AMZN book. [claim S20]

- Receipts: Blockscout token/factory/locker/AMZN, launchToken 0xf227bb99…7f91, createGraduatedPool 0x1db50ab0…6dd0, CurveCompleted 0xc9ebb465…bad2, RPC name/symbol/owner/getCode, DexScreener, Gecko pool/token, /rhj/assets, pons launchpad HTML, waddles.website, t.me/waddlesRH, and X Latest posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S12]
- Numbers: 776350.30 is the Gecko AMZN/WADDLES pool 24h volume, not the 799765.87 token all-pools figure. Reserve 95900.24 is that pool. DexScreener 590564.72 / 70812.33 is the same pair, different aggregator. Gecko pool fdv 1985978.61 is AMZN-as-base; WADDLES fdv is Gecko token 1475465.23 vs DexScreener 832658. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that WADDLES is an Amazon-issued product because AMZN is the quote and waddles.website / AWS mascot lore exist. /rhj/assets has AMZN as a Stock Token rail and no WADDLES row; launchToken is a Pons factory call from an EOA; the GitHub mascot repo predates the token and has no CA. Distinct from SENDER/AMZN. [inference S4 S12 S23]

## Sources

- S1 — Token 0xbB6E…0CdD Waddles / WADDLES.
- S3 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S4 — launchToken tx 0xf227bb99…7f91.
- S5 — eth_getCode, name, symbol, factory(), owner() on WADDLES.
- S6 — AMZN name/symbol and factory owner().
- S7 — latest/dex/tokens WADDLES.
- S8 — AMZN/WADDLES Pons v2 / Uniswap v4 pool.
- S9 — Waddles token.
- S10 — PONS ATH / waddles.website / AWS builder.
- S11 — Waddles ($WADDLES) launchpad page.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — t.me/waddlesRH.
- S14 — World Wide Waddles homepage.
- S15 — Address 0x2674…4952 V2LaunchLocker.
- S16 — Token 0x12f1…bF54 Amazon • Robinhood Token / AMZN.
- S17 — $WADDLES portal / Netlify claim URL.
- S18 — TokenLaunched log for WADDLES.
- S19 — createGraduatedPool tx 0x1db50ab0…6dd0.
- S20 — search q=WADDLES.
- S22 — CurveCompleted tx 0xc9ebb465…bad2.
- S23 — sboult/waddles.website README.
- S24 — $WADDLES first real mover for the amazon stock pair.
- S25 — The pons token $waddles is getting accumulated.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:40:00Z; methodology_version: proofline-v1.0.
