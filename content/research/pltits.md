---
slug: pltits
coverage: stub
methodology_version: proofline-v1.0
---

# PLTITS — research record

## Identity

PLTITS is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against Palantir Technologies • Robinhood Token. LongLauncher.create deployed Palantits (PLTITS) on 2026-09-02 and seeded the PLTITS/PLTR book. Traders buy and sell PLTITS on Uniswap v4. No official site or handle was located this pass.

Themes: memecoin, stock-paired:PLTR, rwa

## Deployment

PLTITS token (EIP-1167 DopplerERC20V1 clone): 0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18 on robinhood-chain. [verified S1 S5 S18]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory: 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S3 S4 S5]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S5 S15 S18]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S5 S6 S17]

PLTR Palantir Technologies • Robinhood Token (pair quote / numeraire): 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A on robinhood-chain. [verified S6 S7 S12 S16]

## Control

token owner() is Airlock. Create-from 0xbe35…53be is an EIP-7702 account (23-byte ef0100 code, SemiModularAccount7702 0x6900…E139) and is named launcher in LaunchCreated. Lock beneficiaries on create were 0x21E2…7A66 at 0.05 and the same launcher 0xbe35…53be at 0.95. [verified S5 S6 S18]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified S2 S3 S15] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. X user search for Palantits returned Palantir company handles. Latest $PLTITS posts include netlify claim and vote URLs that embed the CA; flag copypasta-pattern and third-party-link. [claim S7 S13 S21]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xbe35…53be at 2026-09-02T07:21:16Z minted Palantits / PLTITS supply 1e9*1e18 into Uniswap v4 poolId 0x9734…1bd1 quoted against PLTR 0x894E…4F2A. owner() returns Airlock 0xeb7C…0862. factory() reverts. [verified S4 S5 S6 S18]

PoolManager is 0x8366…0951. Hooks are DopplerHookInitializer 0x4e34…a544. RehypeDopplerHookInitializer set startFee 800000 / endFee 11200 / durationSeconds 10 on create. Secondary PLTITS/PLTR, PLTITS/ETH and PLTITS/USDG v4 books exist on DexScreener with far less liquidity than the primary PLTR book. [verified S6 S7 S9]

PLTITS/PLTR Uniswap v4 24h volume is 569309.60 USD and reserve_in_usd is 217776.74 at 2026-09-03T05:23:12Z from the Gecko pool endpoint. fdv_usd is 33936.85. Gecko token volume_usd.h24 is 569774.03 across all pools. Token total_reserve_in_usd is 28054.33. [claim S8 S9]

DexScreener same pair: liquidity.usd 32223.49, volume.h24 605260.16, fdv/marketCap 33583. Blockscout holders_count 317. Pair created 2026-09-02T07:21:16Z. Assignment lead of DexScreener liq ~$34,145 / vol ~$604,523 is the same pair at an earlier as_of; live DexScreener at this collection is $32,223 / $605,260. [claim S1 S7]

## Communications

@JAYONSOLANA posted a Long swap of $pltits that filled far below the live quote [claim S10 S11]

X Latest $PLTITS posts embed netlify claim/vote URLs [claim S21]

@JAYONSOLANA posted still holding $pltits versus $goybeam [claim S22]

## Findings

USD liquidity figures on the PLTITS/PLTR book count both sides, and Gecko pool reserve ($218k) disagrees with DexScreener liquidity ($32.2k) and with Gecko token total_reserve ($28.1k). DexScreener lists two extra PLTITS/PLTR v4 books with ~$2 liquidity and inflated FDV. Gecko labels the pool dex as bankr-robinhood while DexScreener and the create tx say Uniswap v4 / LongLauncher. Other Palantits tickers exist on Blockscout. No official handle this pass. [claim S12]

- Quote token PLTR 0x894E…4F2A is the rhj/assets Stock Token rail, not this token. [verified S12 S16]
- Pool USD figures disagree across Gecko reserve, DexScreener liquidity, and Gecko token total_reserve. [claim S7 S8 S9]
- Two extra PLTITS/PLTR v4 books have ~$2 liquidity and FDV in the millions. [claim S7]
- No official handle or domain this pass; X Latest includes netlify claim/vote URLs. [claim S7 S21]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/PLTR and the create tx plus LaunchCreated/Lock/FeeScheduleSet logs, RPC name/symbol/owner/factory/code, DexScreener tokens and GOYBEAM PLTR search, Gecko pool/token (info 429), /rhj/assets, @JAYONSOLANA, @0xCryptris, and a netlify claim post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 569309.60 is the Gecko PLTITS/PLTR pool 24h volume, not the 569774.03 token all-pools figure. Reserve 217776.74 is that pool. DexScreener 605260.16 / 32223.49 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that PLTITS is GOYBEAM, PALANTARD, MONITOR, or BOMBA, or that PLTR is this token, or that Gecko's bankr-robinhood label makes this a Bankr launch. Creation is LongLauncher.create of 0x5c9F…1E18 against PLTR 0x894E…4F2A; the other names are different CAs; PLTR is the rhj/assets Stock Token rail. [inference S4 S12 S19]

## Sources

- S1 — Token 0x5c9F…1E18 Palantits / PLTITS.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0x193c74c5…0a13.
- S5 — eth_getCode, name, symbol, owner() on PLTITS.
- S6 — create tx logs Initialize / LaunchCreated / Lock / FeeScheduleSet.
- S7 — latest/dex/tokens PLTITS.
- S8 — PLTITS/PLTR Uniswap v4 pool.
- S9 — Palantits token.
- S10 — Long swap quote vs fill on $pltits.
- S11 — Route split across two PLTITS v4 pools.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — user search Palantits.
- S15 — Address 0x22e9…eeED LongLauncher.
- S16 — Token 0x894E…4F2A Palantir Technologies • Robinhood Token / PLTR.
- S17 — Address 0xeb7C…0862 Airlock.
- S18 — LaunchCreated log for PLTITS.
- S19 — search GOYBEAM PLTR distinct books.
- S21 — $PLTITS holders claim URL.
- S22 — still holding $pltits versus $goybeam.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:26:00Z; methodology_version: proofline-v1.0.
