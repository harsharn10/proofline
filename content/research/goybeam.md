---
slug: goybeam
coverage: stub
methodology_version: proofline-v1.0
---

# GOYBEAM — research record

## Identity

GOYBEAM is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against Palantir Technologies • Robinhood Token. LongLauncher.create deployed GOYBEAM on 2026-07-20 and seeded the GOYBEAM/PLTR book. Traders buy and sell GOYBEAM on Uniswap v4. No official site was located this pass.

Themes: memecoin, stock-paired:PLTR, rwa

## Deployment

GOYBEAM token (EIP-1167 DopplerERC20V1 clone): 0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18 on robinhood-chain. [verified S1 S5 S18]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S5 S6]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S5 S18]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S18]

PLTR Palantir Technologies • Robinhood Token (pair quote / numeraire): 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A on robinhood-chain. [verified S6 S7 S12 S16]

## Control

token owner() is Airlock. Create-from 0xDE78…2aAb is an EIP-7702 CaliburEntry and is named launcher in LaunchCreated. Lock beneficiaries on create were 0xDE78…2aAb at 0.95 and 0xEDeA…eDa8 at 0.05. [verified S5 S17 S18]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified S2 S3 S15] [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener website is the LONG app token page (Cloudflare 403 this pass). Gecko websites [] and twitter_handle null. @longPLTRgoybeam posted the CA and DexScreener pool and is listed on the DexScreener profile; flag unconfirmed-official. goybeam.lol / @GOYBEAMJSL publish a different CA. [claim S7 S9 S13 S19 S21]

PLTR is a rail: GET /rhj/assets lists Palantir Technologies • Robinhood Token at 0x894E…4F2A on chain 4663. [verified S12 S16]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xDE78…2aAb at 2026-07-20T23:57:21Z minted GOYBEAM supply 1e9*1e18 into Uniswap v4 poolId 0x069c…b2bb quoted against PLTR 0x894E…4F2A. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() returns Airlock 0xeb7C…0862. [verified S4 S5 S6 S18]

PoolManager is 0x8366…0951. Hooks are DopplerHookInitializer 0x4e34…a544. Secondary GOYBEAM/USDG and GOYBEAM/ETH books exist on DexScreener with far less liquidity than the PLTR book. [verified S6 S7 S20]

GOYBEAM/PLTR Uniswap v4 24h volume is 932241.47 USD and reserve_in_usd is 380660.46 at 2026-09-03T03:35:00Z from the Gecko pool endpoint. fdv_usd is 1050614.56. Gecko token volume_usd.h24 is 946116.34 across all pools, not the PLTR book. [claim S8 S9]

DexScreener same pair: liquidity.usd 312941.39, volume.h24 989185.51, fdv/marketCap 1058660. Blockscout holders_count 1068. Pair created 2026-07-20T23:57:21Z. [claim S1 S7]

Gecko token pools listed GOYBEAM/PLTR as row 1 and GOYBEAM/USDG as row 2 at $13.2k 24h volume. Assignment lead of liq ~$315,840 / vol ~$990,411 is nearer the DexScreener slice than the Gecko reserve. [claim S7 S8 S20]

## Communications

@MaxLongCEO posted GOYBEAM as the #1 PLTR pair [claim S10]

@longPLTRgoybeam posted get online on Robinhood Chain [claim S13]

@longPLTRgoybeam posted the GOYBEAM CA and DexScreener pool [claim S19]

## Findings

USD liquidity figures on the GOYBEAM/PLTR book count both sides, and Gecko reserve ($381k) disagrees with DexScreener liquidity ($313k). Gecko labels the pool dex as bankr-robinhood while DexScreener and the create tx say Uniswap v4. A second GOYBEAM ticker at goybeam.lol / 0x3f74…161a is a different contract. No official handle was located; DexScreener lists @longPLTRgoybeam as unconfirmed-official. [claim S12]

- Quote token PLTR 0x894E…4F2A is in GET /rhj/assets, so USD pool figures still mix GOYBEAM with a Stock Token, not USDG. [verified S12 S16]
- Gecko reserve $381k and DexScreener liquidity $313k disagree on the same pool. [claim S7 S8]
- Ticker collision with goybeam.lol token 0x3f74…161a. [verified S21 S22]
- No official handle or domain this pass; DexScreener X is unconfirmed-official. [claim S7 S13]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/LongLauncher/PLTR and the create tx, RPC name/symbol/owner/code, DexScreener, Gecko pool/token/pools, /rhj/assets, @MaxLongCEO, @longPLTRgoybeam, and goybeam.lol were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 932241.47 is the Gecko GOYBEAM/PLTR pool 24h volume, not the 946116.34 token all-pools figure. Reserve 380660.46 is that pool. DexScreener 989185.51 / 312941.39 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that GOYBEAM is the LONG protocol or the goybeam.lol token, or that PALANTARD/PLTITS/BOMBA/MONITOR are the same book. Creation is LongLauncher.create of 0x1Fe2…1E18 against PLTR 0x894E…4F2A; the other names are different CAs; goybeam.lol publishes 0x3f74…161a. [inference S4 S21 S22]

## Sources

- S1 — Token 0x1Fe2…1E18 GOYBEAM.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0x8e316484…ac32.
- S5 — eth_getCode, name, symbol, owner() on GOYBEAM.
- S6 — create tx logs Initialize / LaunchCreated.
- S7 — latest/dex/tokens GOYBEAM.
- S8 — GOYBEAM/PLTR Uniswap v4 pool.
- S9 — GOYBEAM token.
- S10 — GOYBEAM as The #1 PLTR Pair.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — get online we are going to go dominate robinhood chain.
- S15 — LongLauncher 0x22e9…eeED.
- S16 — Token 0x894E…4F2A Palantir Technologies • Robinhood Token.
- S17 — Create-from 0xDE78…2aAb EIP-7702.
- S18 — LaunchCreated log for GOYBEAM.
- S19 — CA and DexScreener pool post.
- S20 — GOYBEAM token pools.
- S21 — GOYBEAM site for a different CA.
- S22 — search GOYBEAM and GOYBEAM/PLTR.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:40:00Z; methodology_version: proofline-v1.0.
