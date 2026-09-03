---
slug: gg
coverage: stub
methodology_version: proofline-v1.0
---

# GG — research record

## Identity

GG is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against GLD. PonsV2LaunchAndBuy.launchAndBuy from 0xC7c6…8600 minted Golden Goose (GG) on 2026-08-28T23:59:19Z onto a bonding curve, then swept into the GG/GLD book about 11.5 minutes later. Traders buy and sell GG on Uniswap v4 and on secondary WETH/USDG books. GLD is the quote rail, not this token. thegoldengoose.live embeds this CA. No bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:GLD, rwa, pons-graduation

## Deployment

GG token (Pons v2 launcher token): 0xcaCB0e9caCcee63ec4d82952E561a291c68Bcb68 on robinhood-chain. [verified S1 S4 S5]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S5 S6]

PonsV2LaunchAndBuy (create target): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S4 S6 S19]

GG bonding curve (token curve): 0x529562938bfB293b7A1112041e2c9AC62FE10079 on robinhood-chain. [verified S2 S5 S6 S18]

GLD SPDR Gold Trust Robinhood Token (pair quote / rail): 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e on robinhood-chain. [verified S7 S12 S15]

## Control

token owner() reverts. deployer() 0xC7c6…8600 has no code. launchFactory() returns PonsV2LaunchFactory. Graduation CreditedToken sent protocol GLD to SafeProxy 0x263e…19Dd, which is a Pons fee path, not a GG-token admin on this call. [verified S5 S18]

## Security

GG token is_verified false on Blockscout this pass. Code length 3248 B matches in-flight GB, but bytecode sha256 differs. Curve 0x5295…0079 is verified PonsV2BondingCurve. No audit report URL was located this pass. [verified S1 S2] [unknown]

## Engineering

_Research pending._

## Team

thegoldengoose.live titles Every GLD reward, verified and includes CA 0xcacb…cb68 in the HTML. token.socials() twitter is https://x.com/goldengooserh and website empty. DexScreener lists that site and x.com/GoldenGooseRH. @GoldenGooseRH bio pins the CA; flag unconfirmed-official. [claim S5 S7 S10 S13]

SPDR Gold Trust is the listed issuer of the quote rail. GET /rhj/assets names that rail SPDR Gold Trust • Robinhood Token at 0xC9a9…FC4e. That is a dependency, not this token. [verified S12 S15]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0xC7c6…8600 at 2026-08-28T23:59:19Z minted Golden Goose / GG supply 1e9*1e18 onto curve 0x5295…0079 quoted against pairToken GLD 0xC9a9…FC4e. TokenLaunched names graduationThreshold 24.9406e18. [verified S4 S5 S6]

CurveCompleted / LaunchSwept at 2026-08-29T00:10:48Z moved quoteOut 24.9406e18 GLD. Gecko and DexScreener record Uniswap v4 poolId 0x9009…43c5 at 2026-08-29T00:10:51Z with dex pons-v2-dex. Secondary GG/USDG and GG/WETH books exist on DexScreener with more 24h volume than the GLD book this pass. [verified S7 S8 S18]

This is PonsV2LaunchAndBuy.launchAndBuy, not factory.launchToken, and not LongLauncher. [verified S4 S19]

thegoldengoose.live titles a GLD distribution ledger. Token RPC goldToken/claim/rewardToken revert, so that payout path is not on the ERC-20 itself this pass. [claim S5 S13]

GG/GLD Uniswap v4 24h volume is 613848.84 USD and Gecko reserve_in_usd is 201551.84 at 2026-09-03T05:25:00Z. DexScreener same pair liquidity.usd 204719.61 volume.h24 611987.16 fdv/marketCap 5029694. Gecko token volume_usd.h24 3633381.84 across all pools, not the GLD book. [claim S7 S8 S9]

Gecko token fdv_usd 4883606.28 is near the Dex GLD-book fdv. Gecko pool fdv_usd 3475213.59 is GLD-as-base. Blockscout holders_count 6164. Pair created 2026-08-29T00:10:51Z. [claim S1 S7 S8 S9]

## Communications

@GoldenGooseRH quoted Vlad Enjoy the gold [claim S10]

@Jonas00555724 posted GG pays GLD to holders [claim S11]

@CCrypto2941 posted GG is a goose that lays gold [claim S20]

## Findings

USD liquidity figures on the GG/GLD book count both sides, and the quote side is GLD, not USDG. Gecko pool fdv treats GLD as the base and is not the GG token fdv. Secondary GG/WETH and GG/USDG books printed more 24h volume than GG/GLD this pass. Same-ticker Golden Goose clones exist, including Doppler clone 0x07Ff…1E18. Handle stays unconfirmed-official. Token source is unverified on Blockscout this pass. Site and X describe GLD holder payouts that this pass did not reproduce on the token. [claim S13]

- Quote token GLD 0xC9a9…FC4e is a Robinhood Stock Token rail; GG is not GLD. [verified S12 S15]
- Pool USD reserve is GG plus GLD, not a USDG or WETH backstop. [claim S7 S8]
- No bidirectional official handle this pass; @GoldenGooseRH is unconfirmed-official. [claim S7 S10]
- Same-ticker Golden Goose clones exist, including Doppler 0x07Ff…1E18. [verified S16]
- GLD holder-payout claims on the site and on X were not reproduced on the token this pass. [claim S5 S13]
- Netlify vote/claim pages reused this CA. [claim S17]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/curve/factory/andbuy/GLD and launch/graduation txs, RPC name/symbol/deployer/launchFactory/curve/socials, DexScreener tokens+search, Gecko token GET 200 plus pool, /rhj/assets, thegoldengoose.live, @GoldenGooseRH, @Jonas00555724, @CCrypto2941, and the netlify vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8 S12 S13]
- Numbers: 613848.84 is the Gecko gld/GG pool 24h volume, not the 3633381.84 token all-pools figure. Reserve 201551.84 is that pool. DexScreener 611987.16 / 204719.61 is the same pair, different aggregator. Gecko pool fdv is GLD-as-base. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that GG is the GLD rail or that 0x07Ff…1E18 is this token. /rhj/assets GLD is 0xC9a9…FC4e; this subject is 0xcaCB…cb68 with Pons v2 code 3248 B, not the Doppler clone. [inference S12 S15 S16]

## Sources

- S1 — Token 0xcaCB…cb68 Golden Goose / GG.
- S2 — Address 0x5295…0079 PonsV2BondingCurve.
- S3 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S4 — launchAndBuy tx 0x7b4efc0a…0874.
- S5 — eth_getCode, name, symbol, deployer(), launchFactory(), curve(), socials() on GG.
- S6 — TokenLaunched log for GG.
- S7 — latest/dex/tokens GG.
- S8 — gld/GG Uniswap v4 pool.
- S9 — Golden Goose token.
- S10 — enjoy the gold.
- S11 — $GG conviction.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — Golden Goose GLD ledger site.
- S15 — Token 0xC9a9…FC4e SPDR Gold Shares / GLD.
- S16 — Other Golden Goose 0x07Ff…1E18.
- S17 — $GG Family vote netlify page.
- S18 — CurveCompleted / LaunchSwept tx 0x3735a137…7fad.
- S19 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S20 — $GG is the cleanest ticker.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:28:00Z; methodology_version: proofline-v1.0.
