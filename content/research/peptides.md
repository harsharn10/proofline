---
slug: peptides
coverage: stub
methodology_version: proofline-v1.0
---

# PEPTIDES — research record

## Identity

PEPTIDES is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against LLY. LongLauncher deploys Peptides (PEPTIDES) in one create call and seeds the PEPTIDES/LLY book. Traders buy and sell PEPTIDES on Uniswap v4. LLY is the Robinhood stock-token rail, not the project.

Themes: memecoin, stock-paired:LLY, rwa, graduation:long

## Deployment

PEPTIDES token (EIP-1167 DopplerERC20V1 clone): 0x52F380A513112428723abF8AFED125824E4A1e18 on robinhood-chain. [verified S1 S5 S18]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (token creator): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S3 S4 S5]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S6 S18]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [verified S5 S14 S18]

LLY Eli Lilly Robinhood Token (pair quote / rail): 0x8005d266423c7ea827372c9c864491e5786600ea on robinhood-chain. [verified S7 S12 S13]

## Control

token owner() is Airlock 0xeb7C…0862. The create-tx from 0xe81C…0122 has no code. Lock beneficiaries split 5% / 95% between 0x21E2ce70…7A66 and that from address. [verified S5 S14 S18]

## Security

DopplerERC20V1, DopplerERC20V1Factory, Airlock, and LongLauncher are partially verified on Blockscout (compiler v0.8.26). The token page is a verified EIP-1167 shell. No audit report URL was located this pass. [verified S1 S2 S3 S6] [unknown]

## Engineering

_Research pending._

## Team

peptidesrh.com embeds token 0x52F380A5…1e18 and twitter:site @PeptidesRH. @PeptidesRH bio embeds the same CA. DexScreener info.websites and info.socials match. No GitHub URL this pass. [verified S7 S10 S11]

## Product and economics

LongLauncher 0x22e9…eeED forwards create through Airlock to DopplerERC20V1Factory. The factory clones DopplerERC20V1 via EIP-1167. create from 0xe81C…0122 at 2026-09-02T08:33:53Z minted Peptides / PEPTIDES supply 1e9*1e18 into Uniswap v4 poolId 0x6a2423f7…0754 quoted against LLY. LaunchCreated normalizedTicker PEPTIDES. [verified S4 S5 S18]

PoolManager is 0x8366…0951. Secondary PEPTIDES/USDG and PEPTIDES/ETH books exist on DexScreener with far less liquidity than the LLY book. [verified S7 S8 S19]

PEPTIDES/LLY Uniswap v4 24h volume is 1365898.18 USD and reserve_in_usd is 372116.70 at 2026-09-03T03:39:00Z from the Gecko pool endpoint. fdv_usd is 1187437.56. Gecko token volume_usd.h24 is 1610746.58 across listed pools, not the LLY book. [claim S8 S9]

DexScreener same pair: liquidity.usd 828313.11, volume.h24 5232293.94, fdv/marketCap 7537015. Blockscout holders_count 3619. Pair created 2026-09-02T08:33:53Z. Assignment hint ~$798,799 / ~$5,210,838 is the DexScreener book, not Gecko. [claim S1 S7]

FATCOIN/LLY on DexScreener: liquidity.usd 73099.89 volume.h24 1800148.1 pair 0x46ba8216…af85, a different token. [claim S15]

## Communications

@PeptidesRH posted LLY float in the PEPTIDES/LLY book [claim S10 S11]

## Findings

USD liquidity figures on the PEPTIDES/LLY book count both sides, and DexScreener and Gecko disagree on the same pool by a wide margin. A later FATCOIN or HIMS PEPTIDES book is a different address. Token owner() is the shared Airlock, not a project-held key. [claim S10]

- DexScreener and Gecko disagree on PEPTIDES/LLY USD liquidity, volume, and FDV. [verified S7 S8]
- Pool USD reserve is PEPTIDES plus LLY, not a USDG or WETH backstop. [claim S7 S8]
- Token owner() is the shared Airlock used by other LongLauncher clones. [verified S5 S14]
- A second PEPTIDES ticker exists at 0x28D5c848…1E18 against HIMS. [verified S16]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/LLY and the create tx plus internals, RPC name/symbol/owner/code sizes, DexScreener, Gecko pool/token/pools, /rhj/assets, peptidesrh.com, and @PeptidesRH were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 1365898.18 is the Gecko PEPTIDES/LLY pool 24h volume, not the 1610746.58 token all-pools figure. Reserve 372116.70 is that pool. DexScreener 5232293.94 / 828313.11 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that PEPTIDES is FATCOIN, the HIMS PEPTIDES clone, or a Bankr product. FATCOIN is a different address and factory. The HIMS clone has 7 holders. Gecko dex bankr-robinhood is an aggregator label; the create tx is LongLauncher into PoolManager. [inference S8 S15 S16]

## Sources

- S1 — Token 0x52F380A5…1e18 Peptides / PEPTIDES.
- S2 — Address 0x3Be8B97F…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0xbd0eee03…7368.
- S5 — eth_getCode, name, symbol, owner() on PEPTIDES.
- S6 — LongLauncher 0x22e99278…eeED.
- S7 — latest/dex/tokens PEPTIDES.
- S8 — PEPTIDES/LLY pool.
- S9 — Peptides token.
- S10 — $PEPTIDES — the fridge is cold.
- S11 — The fridge just passed 300 $LLY.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — Token 0x8005d266…00ea Eli Lilly • Robinhood Token / LLY.
- S14 — Address 0xeb7C0347…0862 Airlock.
- S15 — latest/dex/tokens FATCOIN.
- S16 — HIMS PEPTIDES 0x28D5c848…1E18 create tx.
- S18 — create tx internals and logs.
- S19 — PEPTIDES token pools.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:40:00Z; methodology_version: proofline-v1.0.
