---
slug: moo
coverage: stub
methodology_version: proofline-v1.0
---

# MOO — research record

## Identity

Memory cow Moo is classified as Stock-paired token.

A LONG-launched ERC-20 that trades in a Uniswap v4 pool quoted against tokenized Micron (MU). LongLauncher.create deployed Memory cow Moo on 20 Jul 2026. Traders buy and sell MOO against MU on that book. @memorycowmoo is the handle DexScreener lists and LONG named as the MU pair.

Themes: memecoin, stock-paired:MU, rwa

## Deployment

MOO token (EIP-1167 DopplerERC20V1 clone): 0xD9dB30BB0D2b8d2eae3826A1372117E058791e18 on robinhood-chain. [verified S1 S2 S3]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [claim S1 S20]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S1 S6]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S4 S5]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S3 S19]

Micron Technology • Robinhood Token (pair asset): 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD on robinhood-chain. [claim S4 S7 S23]

## Control

owner() returns Airlock 0xeb7C…0862 with non-empty code. The token is an EIP-1167 proxy to verified DopplerERC20V1 0x3Be8…C599. EIP-1967 implementation slot is zero. [verified S3 S19 S20]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

DexScreener lists https://x.com/memorycowmoo. @longdotxyz named @memorycowmoo as the $MU pair. The handle bio is $MU. No post embedding CA 0xD9dB…1e18 was located; flag unconfirmed-official. [claim S7 S10 S12]

@bankrbot posted a different Memory cow Moo CA 0x2e74…fbA3 on 23 Jul 2026. That clone has holders_count 2. [verified S15 S16]

## Product and economics

LongLauncher.create at 2026-07-20T18:35:02Z cloned DopplerERC20V1 as Memory cow Moo / MOO and seeded Uniswap v4 pool 0xc3cc…4aa1 against MU 0xfF08…4afD. creator_address_hash is DopplerERC20V1Factory. Secondary MOO/USDG and MOO/WETH books exist with less liquidity than the MU book. [verified S4 S7 S8]

Gecko attributes the same pool id to dex bankr-robinhood. DexScreener labels it Uniswap v4. [verified S7 S8]

DexScreener MOO/MU Uniswap v4 liquidity.usd 1724771.11, volume.h24 6491540.67, marketCap 28902315 at 2026-09-03T03:31:24Z. Gecko same pool reserve_in_usd 4482942.70, volume_usd.h24 6358274.99670183, fdv_usd 30930281.46. Gecko token volume_usd.h24 9801463.01 is all pools. Blockscout holders_count 5998. [claim S2 S7 S8 S9]

Gecko trending_pools page 1 this pass listed SEMI/MU at rank 12 and did not list MOO/MU. [claim S22]

## Communications

@memorycowmoo posted $moo as a MU leverage long [claim S11]

Gate Futures listed MOO in a Robinhood Zone [claim S14]

@LBankUpdates posted a world-premiere $MOO listing [claim S13]

LONG posted buybacks naming @memorycowmoo MU pair [claim S12]

@bankrbot posted a different Memory cow Moo CA [verified S15 S16]

## Findings

DexScreener and Gecko disagree on MOO/MU liquidity by more than 2x. A second Memory cow Moo clone exists at 0x2e74…fbA3 from a Bankr post. The handle has not posted this CA this pass. [claim S12]

- DexScreener $1.72M, Gecko pool $4.48M, and Gecko token reserve $3.63M disagree on liquidity. [verified S7 S8 S9]
- Same-name clone 0x2e74…fbA3 and two low-liquidity MOO/MU copycat bases exist. [verified S16] [claim S21]
- Handle-to-CA link is unconfirmed-official this pass. [claim S10]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/Airlock/MU/SEMI/stale clone and the create tx, RPC name/symbol/owner/code, DexScreener token-pairs and search, Gecko pool/token/trending, @memorycowmoo, @longdotxyz, @LBankUpdates, Gate, and @bankrbot were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S7 S8]
- Numbers: 1724771.11 is DexScreener MOO/MU liquidity, not the 4482942.70 Gecko pool reserve or the 3634297.89 token total_reserve. 6491540.67 is that pair's 24h volume, not the 9801463.01 token all-pools figure. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that Bankr CA 0x2e74…fbA3 is canonical Memory cow Moo, or that SEMI is this MU pair. 0x2e74 has 2 holders and no DexScreener pairs; SEMI is 0x5F03…BaC8 / semivault.xyz / @Semivaultxyz. Live book 0xD9dB…1e18 was created by LongLauncher three days earlier. [inference S15 S16 S17 S18]

## Sources

- S1 — Address 0xD9dB…1e18 Memory cow Moo.
- S2 — Token 0xD9dB…1e18.
- S3 — eth_getCode / owner / name / symbol at block 53101555.
- S4 — Creation tx 0xdcf46e14….
- S5 — LongLauncher 0x22e9…eeED.
- S6 — DopplerERC20V1Factory 0x1B37…b69a.
- S7 — token-pairs/v1 MOO on robinhood.
- S8 — MOO/MU pool API.
- S9 — Memory cow Moo token API.
- S10 — the memory cow profile.
- S11 — $moo as MU leverage long.
- S12 — Diamond Release Part Two.
- S13 — World Premiere listing $MOO.
- S14 — Robinhood Zone futures listing.
- S15 — deployed Memory cow Moo 0x2e74….
- S16 — Stale Memory cow Moo 0x2e74…fbA3.
- S17 — SEMI/MU pair (same-stock, not MOO).
- S18 — SEMI 0x5F03…BaC8 Semivault.xyz.
- S19 — Airlock 0xeb7C…0862.
- S20 — DopplerERC20V1 implementation 0x3Be8…C599.
- S21 — MOO MU search (copycat pairs).
- S22 — Robinhood trending pools page 1.
- S23 — MU 0xfF08…4afD Micron Technology • Robinhood Token.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:35:00Z; methodology_version: proofline-v1.0.
