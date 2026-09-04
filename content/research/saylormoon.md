---
slug: saylormoon
coverage: stub
methodology_version: proofline-v1.0
---

# SAYLORMOON — research record

## Identity

SAYLORMOON is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against the MSTR Robinhood Stock Token. Traders buy and sell SAYLORMOON on the SAYLORMOON/MSTR book. No official site or handle was located this pass.

Themes: memecoin, stock-paired:MSTR, rwa

## Deployment

SAYLORMOON token (EIP-1167 DopplerERC20V1 clone): 0xD18528b39dA6464B3662c331a52181ecB15b1E18 on robinhood-chain. [verified S1 S5 S4]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory: 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S4 S5]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S15]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [verified S5 S16]

Quote asset MSTR stock token: 0xec262a75e413fAfD0dF80480274532C79D42da09 on robinhood-chain. [verified S7 S12 S17]

## Control

_Research pending._

## Security

token owner() returns Airlock 0xeb7C…0862. Create caller 0x0a14…3625 is an EIP7702StatelessDeleGator. DopplerERC20V1 is partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). No audit report URL was located this pass. [verified S2 S5 S16] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites is a Know Your Meme sailor-moon page. info.socials are @elonmusk 2021-05-16 "Saylor Moon" and a reddit r/MSTR thread. t.me/saylormooncto titles $SAYLOR MOON CTO with 4 members and no contract in the public preview. Flag unconfirmed-official and third-party-link. [claim S7 S13 S14]

## Product and economics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create(...) from 0x0a14…3625 at 2026-08-29T01:55:57Z minted SAYLORMOON supply 1e9*1e18 into Uniswap v4 pool 0xd1c2…4751 with numeraire MSTR 0xec26…da09. LaunchCreated normalizedTicker SAYLORMOON. owner() on the token returns Airlock 0xeb7C…0862. factory() reverts. [verified S4 S5 S18]

PoolManager is 0x8366…0951. Gecko token/pools maps this book to dex bankr-robinhood; DexScreener dexId is uniswap labels v4. Secondary SAYLORMOON/USDG and SAYLORMOON/ETH books exist on DexScreener with far less liquidity than the MSTR book. [verified S7 S8]

SAYLORMOON/MSTR Uniswap v4 24h volume is 2087793.11 USD and reserve_in_usd is 559259.28 at 2026-09-03T03:37:00Z from the Gecko token/pools first row. fdv_usd is 2861029.22. Gecko token volume_usd.h24 is 2717860.03 across all pools, not the MSTR book. [claim S8 S9]

DexScreener same pair: liquidity.usd 537586.02, volume.h24 2071122.9, fdv/marketCap 2904056. Blockscout holders_count 5903. Pair created 2026-08-29T01:55:57Z. [claim S1 S7]

## Communications

@Ali3n_Mafia posted a SAYLORMOON/MSTR buy [claim S20]

@whalewatchRH posted a $4.75K SAYLORMOON buy [claim S21]

@vytiscapital posted Elon-coined SAYLORMOON/MSTR [claim S22]

## Findings

USD liquidity figures on the SAYLORMOON/MSTR book count both sides, and the quote side is MSTR, not USDG. Gecko labels the dex bankr-robinhood while DexScreener labels Uniswap v4. No official handle was located, so comms surfaces stay unconfirmed-official. Other Blockscout tokens reuse the SAYLORMOON ticker. [claim S12]

- Quote token MSTR 0xec26…da09 is a Robinhood Stock Token rail in GET /rhj/assets; SAYLORMOON is not that asset. [verified S12 S17]
- Pool USD reserve is SAYLORMOON plus MSTR, not a USDG or WETH backstop. [claim S7 S8]
- No official handle or domain this pass; Telegram is a third-party-link. [claim S7 S13]
- Ticker SAYLORMOON is reused by other Blockscout tokens with far fewer holders. [verified S24]
- No audit report URL this pass. [unknown]
- A netlify /claim URL posted the CA; flag copypasta-pattern. [claim S23]

- Receipts: Blockscout token/impl/factory/launcher/airlock/MSTR and create tx 0x8222…9c05, RPC name/symbol/owner/getCode, DexScreener, Gecko token/pools/info, /rhj/assets, Telegram preview, Elon 2021 post, and four Latest X posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 2087793.11 is the Gecko SAYLORMOON/MSTR pool 24h volume, not the 2717860.03 token all-pools figure. Reserve 559259.28 is that pool. DexScreener 2071122.9 / 537586.02 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that SAYLORMOON is the same name as NOSTRATEGY/MSTR or an official Strategy product. NOSTRATEGY is 0xEbDb…1e18 created 2026-09-02, and /rhj/assets lists MSTR 0xec26…da09 as the Stock Token, not this ERC-20. [inference S12 S19]

## Sources

- S1 — Token 0xD185…1E18 SAYLORMOON / SAYLORMOON.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — create tx 0x8222fa94…9c05.
- S5 — eth_getCode, name, symbol, owner() on SAYLORMOON.
- S7 — latest/dex/tokens SAYLORMOON.
- S8 — SAYLORMOON token pools (MSTR row).
- S9 — SAYLORMOON token.
- S12 — GET /rhj/assets Stock Token registry.
- S13 — t.me/saylormooncto.
- S14 — Saylor Moon.
- S15 — Address 0x22e9…eeED LongLauncher.
- S16 — Address 0xeb7C…0862 Airlock.
- S17 — Token 0xec26…da09 Strategy Inc. • Robinhood Token / MSTR.
- S18 — Mint transfer from 0x0 on SAYLORMOON.
- S19 — Token 0xEbDb…1e18 buyhighselllow / NOSTRATEGY.
- S20 — bought $saylormoon paired to $MSTR.
- S21 — CASHCAT whale bought $SAYLORMOON.
- S22 — Missing $saylormoon, coined by Elon.
- S23 — $SAYLORMOON claim URL with CA.
- S24 — Search q=SAYLORMOON.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:45:00Z; methodology_version: proofline-v1.0.
