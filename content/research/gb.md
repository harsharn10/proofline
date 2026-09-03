---
slug: gb
coverage: stub
methodology_version: proofline-v1.0
---

# GB — research record

## Identity

GB is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against AMD. PonsV2LaunchFactory.launchToken from 0x35EC…16a2 minted Gigabyte (GB) on 2026-09-01T22:16:40Z onto a bonding curve, then swept into the GB/AMD book ~48 seconds later. Traders buy and sell GB on Uniswap v4. AMD is the quote rail, not this token. gigabyte.click/script.js embeds this CA. No bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:AMD, rwa, pons-graduation

## Deployment

GB token (Pons v2 launcher token): 0xD78650f3A96e55e0710282c4f459AC556ef3517E on robinhood-chain. [verified S1 S4 S5]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S5 S6]

GB bonding curve (token curve): 0x535eDdD8088533e98C7372dB2F64063c6B2B4Dd7 on robinhood-chain. [verified S5 S6 S16]

AMD • Robinhood Token (pair quote rail): 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC on robinhood-chain. [verified S7 S12 S17]

V2MemeHook (Uniswap v4 pool hooks): 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044 on robinhood-chain. [claim S16 S22]

## Control

token owner() reverts. deployer() 0x35EC…16a2 has no code. launchFactory() returns PonsV2LaunchFactory. That factory owner() is SafeProxy 0x263e…19Dd, which is Pons pad control, not a GB-token admin on this call. [verified S5 S3 S23]

## Security

GB token is_verified false on Blockscout this pass. Code length 3248 B matches verified PonsV2LauncherToken CHIP 0xE38B…C6E59, but bytecode sha256 differs. Curve 0x535e…4Dd7 has 10229 B of code on RPC while Blockscout still reports is_contract false. No audit report URL was located this pass. [verified S1 S2 S15] [unknown]

## Engineering

_Research pending._

## Team

gigabyte.click titles GIGABYTE. Static HTML still prints CA: COMING SOON; script.js sets CONTRACT_ADDRESS 0xd786…517e and X_URL https://x.com/gigabyteRH. token.socials() twitter is that handle and website empty. @gigabyteRH bio pins the CA; flag unconfirmed-official. [claim S5 S13 S18]

AMD Inc. is the listed issuer of the quote rail. GET /rhj/assets names that rail AMD • Robinhood Token at 0x8692…3fdC. That is a dependency, not this token. [verified S12 S17]

X user search for gigabyteRH ranked GIGABYTE hardware accounts (@GIGABYTEUSA, @GIGABYTE_DE) above the token handle. [claim S18]

## Product and economics

PonsV2LaunchFactory 0x7eD5…EC7e launchToken from 0x35EC…16a2 at 2026-09-01T22:16:40Z minted Gigabyte / GB supply 1e9*1e18 onto curve 0x535e…4Dd7 quoted against pairToken AMD 0x86923f…3fdC. TokenLaunched names graduationThreshold 16.6655e18. [verified S4 S5 S6]

CurveCompleted / LaunchSwept at 2026-09-01T22:17:28Z moved quoteOut 16.6655e18 AMD into Uniswap v4 poolId 0x9264…7635. PoolManager is 0x8366…0951. Hook is V2MemeHook 0xE5e7…e044. Gecko labels the pool pons-v2-dex. Secondary GB/USDG and GB/ETH books exist on DexScreener with far less liquidity than the AMD book. [verified S7 S8 S16]

This is factory.launchToken, not CHIP's PonsV2LaunchAndBuy path, and not LongLauncher. [verified S4 S9]

GB/AMD Uniswap v4 24h volume is 809601.07 USD and DexScreener liquidity.usd is 35896.73 at 2026-09-03T04:24:00Z. fdv/marketCap 202008. Gecko same pool volume_usd.h24 785977.79 reserve_in_usd 57071.87. Gecko token volume_usd.h24 796115.24 across all pools, not the AMD book. [claim S7 S8 S9]

Gecko token fdv_usd 440571.60 disagrees with the Dex AMD-book fdv. Gecko pool fdv_usd 1707159.38 is AMD-as-base. Blockscout holders_count 922. Pair created 2026-09-01T22:17:28Z. [claim S1 S7 S8 S9]

## Communications

@gigabyteRH posted from a bio that pins the GB CA [claim S18]

@JayceBryce quoted GB as AMD-paired memory [claim S20]

Netlify vote pages asked for $GB leaderboard votes [claim S24]

## Findings

USD liquidity figures on the GB/AMD book count both sides, and the quote side is AMD, not USDG. Gecko pool fdv treats AMD as the base and is not the GB token fdv. DexScreener GB/AMD fdv (~$202k) and Gecko token fdv (~$441k) disagree. Same-name Gigabyte copycats exist, including 0x39ed…96a4 with 86 holders. Handle stays unconfirmed-official. Token source is unverified on Blockscout this pass. [claim S13]

- Quote token AMD 0x8692…3fdC is a Robinhood Stock Token rail; GB is not AMD. [verified S12 S17]
- Pool USD reserve is GB plus AMD, not a USDG or WETH backstop. [claim S7 S8]
- No bidirectional official handle this pass; @gigabyteRH is unconfirmed-official. [claim S7 S18]
- Same-name Gigabyte copycats exist, one with 86 holders. [verified S21]
- GB token source unverified; no audit report URL this pass. [unknown]
- Netlify "Top 100" vote URLs are third-party-link / copypasta-pattern. [claim S24]

- Receipts: Blockscout token/factory/curve/AMD, launchToken 0x4e8d…f62f, CurveCompleted 0xe8b8…3f3c, RPC name/symbol/deployer/launchFactory/curve/socials, DexScreener, Gecko pool/token/info, /rhj/assets, gigabyte.click HTML and script.js, @gigabyteRH, @JayceBryce, and the Netlify vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 809601.07 is the DexScreener GB/AMD 24h volume, not the Gecko token all-pools 796115.24. Reserve 57071.87 is the Gecko AMD/GB pool. DexScreener liquidity 35896.73 is the same pair, different aggregator. Gecko pool fdv 1.71M is AMD-as-base. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that GB is the AMD hardware-issuer product or the same token as CHIP/MD/MEOW. GET /rhj/assets names AMD • Robinhood Token at 0x8692…3fdC as a separate asset; CHIP/MD/MEOW are different addresses; gigabyte.click is not gigabyte.com. [inference S12 S19 S13]

## Sources

- S1 — Token 0xD786…517E Gigabyte / GB.
- S2 — PonsV2LauncherToken verified source on CHIP (bytecode-size peer).
- S3 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S4 — launchToken tx 0x4e8de2d0…f62f.
- S5 — eth_getCode, name, symbol, deployer(), launchFactory(), curve(), socials() on GB.
- S6 — TokenLaunched log for GB.
- S7 — latest/dex/tokens GB.
- S8 — AMD/GB Uniswap v4 pool.
- S9 — Gigabyte token.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — GIGABYTE site and script.js CA.
- S15 — Curve address 0x535e…4Dd7.
- S16 — CurveCompleted / LaunchSwept tx 0xe8b8a57d…3f3c.
- S17 — Token 0x86923f…3fdC AMD • Robinhood Token.
- S18 — gigagbyte every chip.
- S19 — search CHIP AMD robinhood neighboring AMD books.
- S20 — take a $gigabyte paired with $AMD.
- S21 — Search Gigabyte copycat tokens.
- S22 — V2MemeHook 0xE5e7…e044.
- S23 — Pons factory owner SafeProxy 0x263e…19Dd.
- S24 — $GB Robinhood Top 100 vote.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:25:00Z; methodology_version: proofline-v1.0.
