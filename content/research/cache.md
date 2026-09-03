---
slug: cache
coverage: stub
methodology_version: proofline-v1.0
---

# CACHE — research record

## Identity

CACHE is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against SNDK. LongLauncher deploys Cache Cow (CACHE) in one create call and seeds the CACHE/SNDK book. Traders buy and sell CACHE on Uniswap v4. SNDK is a Robinhood Stock Token rail. Distinct from OP/SNDK. No official site or handle was located this pass.

Themes: memecoin, stock-paired:SNDK, rwa

## Deployment

CACHE token (EIP-1167 DopplerERC20V1 clone): 0xAfe41f4356c24f716111DE1fbbC84e061D291E18 on robinhood-chain. [verified S1 S2 S3]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S3 S8]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S1 S9]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S11]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S3 S12]

SNDK quote (create numeraire / pair quote / Robinhood Stock Token rail): 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 on robinhood-chain. [verified S3 S4 S10 S13]

## Control

_Research pending._

## Security

owner() returns Airlock 0xeb7C…0862. Deployer of the clone is the factory; the create caller is an EIP-7702 account with 23 bytes of code. Implementation DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). LongLauncher is verified. No audit report URL was located this pass. [verified S3 S8 S11 S12] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites is the LONG token page; info.socials lists @CacheCowLong. Gecko twitter_handle is null. @CacheCowLong bio names CACHE/SNDK and does not embed the CA this pass. Flag unconfirmed-official. [claim S5 S7 S17]

SNDK 0xB90A…6400 is the Sandisk Corporation • Robinhood Token in GET /rhj/assets. That rail is not this memecoin. [verified S10 S13]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0x121dEfC0…5999 at 2026-08-28T01:47:59Z minted Cache Cow / CACHE supply 1e9*1e18 into Uniswap v4 poolId 0x23bc…404b. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. factory() on the token reverts. [verified S3 S4 S16]

The pair quote is SNDK 0xB90A…6400. PoolManager is 0x8366…0951. DopplerHookInitializer 0x4e34…a544 locked beneficiaries 95/5. Secondary CACHE/USDG and CACHE/ETH books exist on DexScreener with far less liquidity than the SNDK book. [verified S5 S13 S16]

DexScreener CACHE/SNDK Uniswap v4 24h volume is 2920351.77 USD and liquidity.usd is 517626.29 at 2026-09-03T04:35:00Z. fdv/marketCap is 2741437. Pair created 2026-08-28T01:47:59Z. [claim S5]

Gecko token volume_usd.h24 is 2921925.11 across all pools, fdv_usd 2917945.22, total_reserve_in_usd 0.0. Gecko pool GET for 0x23bc…404b returned 429 and was not retried. Gecko top_pools listed USDG/ETH books, not the SNDK book. [claim S6]

Blockscout holders_count 2453. Gecko info holders.count 2321. [claim S2 S7]

## Communications

@CacheCowLong posted Longfolio? Game on. [claim S17]

@FarmerJoe0x posted $cache as the SNDK onchain pair [claim S20]

X posts linked the CACHE CA to netlify claim/vote pages [claim S18]

## Findings

USD liquidity figures on the CACHE/SNDK book count both sides, and the quote side is SNDK, not USDG. Gecko token total_reserve_in_usd was 0.0 and the pool endpoint returned 429, so aggregator reserve is not reproduced on Gecko this pass. No official handle was located, so comms surfaces stay unconfirmed-official. Netlify claim/vote links used this CA. [claim S10]

- Quote token SNDK 0xB90A…6400 is a Robinhood Stock Token rail; CACHE is not that token. [verified S10 S13]
- Pool USD reserve on DexScreener is CACHE plus SNDK, not a USDG or WETH backstop. [claim S5]
- Gecko token reserve 0.0 and pool 429 this pass, so Gecko book liquidity is unverified. [claim S6]
- No official handle or domain this pass; @CacheCowLong is unconfirmed-official. [claim S5 S7 S17]
- Third-party-link / copypasta-pattern netlify claim and vote URLs used this CA. [claim S18]
- No audit report URL this pass. [unknown]
- Distinct OP/SNDK token 0xF25C…3214 can be confused with this CACHE/SNDK book. [verified S14]

- Receipts: Blockscout token/impl/factory/launcher/Airlock/SNDK and the create tx, RPC name/symbol/owner/code, DexScreener tokens, Gecko token and info, /rhj/assets, OP/SNDK DexScreener, CacheCat token, @CacheCowLong, the netlify claim post, and @FarmerJoe0x were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S5 S10]
- Numbers: 2920351.77 is the DexScreener CACHE/SNDK pair 24h volume, not the Gecko token all-pools 2921925.11. Liquidity 517626.29 is that DexScreener pair. Gecko fdv_usd 2917945.22 is the token endpoint; DexScreener fdv 2741437 is the same pair, different aggregator. Holders 2453 vs 2321. [claim S2 S5 S6 S7]
- Adversarial: the strongest contrary reading is that CACHE is the official Sandisk / OP product, or that it is the LONG protocol. OP/SNDK is Sandisk Optimus 0xF25C…3214 with sandisk.com / @sandiskoptimus. CACHE is 0xAfe41…1E18 created by LongLauncher, entity_kind token. /rhj/assets SNDK row is the rail, not this token. [inference S10 S14]

## Sources

- S1 — Address 0xAfe41…1E18 Cache Cow.
- S2 — Token 0xAfe41…1E18.
- S3 — eth_getCode / name / symbol / owner at blocks 53133248–53134186.
- S4 — Creation tx 0x4cb9fd69…295a.
- S5 — latest/dex/tokens CACHE.
- S6 — Cache Cow token.
- S7 — Cache Cow token info.
- S8 — Address 0x3Be8B97F…C599 DopplerERC20V1.
- S9 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — Address 0x22e9…eeED LongLauncher.
- S12 — Address 0xeb7C…0862 Airlock.
- S13 — Token 0xB90A…6400 Sandisk Corporation • Robinhood Token / SNDK.
- S14 — latest/dex/tokens OP Sandisk Optimus.
- S16 — LaunchCreated / Initialize logs for CACHE.
- S17 — Longfolio? Game on..
- S18 — $CACHE claim netlify link.
- S20 — $cache being the enabler of bringing $SNDK onchain.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:50:00Z; methodology_version: proofline-v1.0.
