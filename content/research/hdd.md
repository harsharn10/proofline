---
slug: hdd
coverage: stub
methodology_version: proofline-v1.0
---

# HDD — research record

## Identity

HDD is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against SNDK. LongLauncher deploys Hard Disk Dog (HDD) in one create call and seeds the HDD/SNDK book. Traders buy and sell HDD on Uniswap v4. SNDK is a Robinhood Stock Token rail. Distinct from packed CACHE. No official site was located this pass.

Themes: memecoin, dog, stock-paired:SNDK, rwa

## Deployment

HDD token (EIP-1167 DopplerERC20V1 clone): 0xAE9b7D708270491aC4d046C1D25dF73d62791E18 on robinhood-chain. [verified S1 S2 S3]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S3 S8]

DopplerERC20V1Factory (create token factory argument): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S4 S9]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S11]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S3 S12]

SNDK quote (create numeraire / pair quote / Robinhood Stock Token rail): 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 on robinhood-chain. [verified S3 S4 S10 S13]

## Control

_Research pending._

## Security

Token owner() is Airlock 0xeb7C…0862. Create-from 0x72bD…5395 has no code and is the 95% Lock beneficiary; 0x21E2…7A66 is 5%. Implementation DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). No audit report URL was located this pass. [verified S3 S8 S16] [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener info.websites is the LONG token page plus an X status; info.socials lists @HardDiskDog. Gecko twitter_handle is null. @HardDiskDog bio embeds the CA this pass. Flag unconfirmed-official. [claim S5 S17 S18]

SNDK 0xB90A…6400 is the Sandisk Corporation • Robinhood Token in GET /rhj/assets. That rail is not this memecoin. [verified S10 S13]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0x72bD…5395 at 2026-08-28T22:03:12Z minted Hard Disk Dog / HDD supply 1e9*1e18 into Uniswap v4 poolId 0x3c84…3f77. Token page creator_address_hash was empty; the create call names DopplerERC20V1Factory 0x1B37…b69a. owner() is Airlock. factory() reverts. [verified S4 S3 S16]

The pair quote is SNDK 0xB90A…6400. PoolManager is 0x8366…0951. DopplerHookInitializer 0x4e34…a544 locked beneficiaries 5/95. Secondary HDD/ETH and HDD/USDG books exist on DexScreener with far less liquidity than the SNDK book. Gecko labels this pool dex as bankr-robinhood; DexScreener labels uniswap v4. [verified S5 S13 S16] [claim S6]

DexScreener HDD/SNDK Uniswap v4 24h volume is 117407.16 USD and liquidity.usd is 90688.18 at 2026-09-03T05:04:00Z. fdv/marketCap is 139995. Pair created 2026-08-28T22:03:12Z. [claim S5]

Gecko pool volume_usd.h24 is 112717.02, reserve_in_usd 89093.23, fdv_usd 139676.69. Gecko token volume_usd.h24 is 113486.87 across all pools, fdv_usd 139582.39, total_reserve_in_usd 54752.85. Gecko top_pools listed the SNDK book first. [claim S6 S7]

Blockscout holders_count 362; Gecko token info holders.count 368. [claim S2 S17]

## Communications

@HardDiskDog posted woof.exe with the token CA [claim S18]

@yutahxd posted $HDD/SNDK as an alternative to $CACHE [claim S20]

@HardDiskDog posted the storage thesis with CA [claim S21]

## Findings

USD liquidity figures on the HDD/SNDK book count both sides, and the quote side is SNDK, not USDG. Packed CACHE is a separate CA on the same rail. Blockscout lists other Hard Disk Dog ERC-20s. No official domain was located, so comms surfaces stay unconfirmed-official. Netlify claim links used this CA. [claim S10]

- Quote token SNDK 0xB90A…6400 is a Robinhood Stock Token rail; HDD is not that token. [verified S10 S13]
- Pool USD reserve on DexScreener is HDD plus SNDK, not a USDG or WETH backstop. [claim S5]
- No official domain this pass; @HardDiskDog is unconfirmed-official. [claim S5 S17]
- No audit report URL this pass. [unknown]
- Distinct CACHE/SNDK token 0xAfe41…1E18 and OP/SNDK token 0xF25C…3214 can be confused with this HDD/SNDK book. [verified S14]
- Blockscout lists other Hard Disk Dog ERC-20s at different addresses. [verified S15]
- X posts pointed this CA at netlify claim URLs. [claim S19]

- Receipts: Blockscout token/impl/factory/launcher/Airlock/SNDK and the create tx, RPC name/symbol/owner/code, DexScreener tokens and search, Gecko token/info/pool, /rhj/assets, @HardDiskDog, the netlify claim posts, and @yutahxd were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S5 S10]
- Numbers: 117407.16 is the DexScreener HDD/SNDK pair 24h volume, not the Gecko token all-pools 113486.87. Liquidity 90688.18 is that DexScreener pair. Gecko pool reserve 89093.23 / volume 112717.02 is the same pair, different aggregator. Holders 362 vs 368. [claim S2 S5 S6 S7]
- Adversarial: the strongest contrary reading is that HDD is packed CACHE, or the official Sandisk / OP product, or a Bankr launch because Gecko named dex bankr-robinhood. CACHE is 0xAfe41…1E18. OP/SNDK is Sandisk Optimus 0xF25C…3214. Create is LongLauncher into Uniswap v4 PoolManager. /rhj/assets SNDK row is the rail, not this token. [inference S10 S14 S6]

## Sources

- S1 — Address 0xAE9b…1E18 Hard Disk Dog / HDD.
- S2 — Token 0xAE9b…1E18 Hard Disk Dog / HDD.
- S3 — eth_getCode / name / symbol / owner at blocks 53157364–53159526.
- S4 — create tx 0x35b77b9e…76bd.
- S5 — latest/dex/tokens HDD.
- S6 — HDD/SNDK pool.
- S7 — Hard Disk Dog token.
- S8 — Address 0x3Be8B97F…C599 DopplerERC20V1.
- S9 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — Address 0x22e99278…eeED LongLauncher.
- S12 — Address 0xeb7C0347…0862 Airlock.
- S13 — Token 0xB90A…6400 Sandisk Corporation • Robinhood Token / SNDK.
- S14 — latest/dex/search HDD SNDK.
- S15 — Search q=HDD.
- S16 — LaunchCreated / Initialize logs for HDD.
- S17 — Hard Disk Dog token info.
- S18 — the dog is in the hard disk.
- S19 — $HDD holders wake up claim portal is live.
- S20 — $HDD paired with $SNDK.
- S21 — Store the good bois thesis.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:12:00Z; methodology_version: proofline-v1.0.
