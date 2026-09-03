---
slug: longdog
coverage: stub
methodology_version: proofline-v1.0
---

# LONGDOG — research record

## Identity

LONGDOG is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against TSLA, the Tesla Robinhood Stock Token at 0x322F…3b2d. Traders buy and sell LONGDOG on that book. TSLA is the rail. This token is not the Tesla stock token, not census LONG, not packed doggie, not packed OPTIMUS, and not in-flight DOGECOIN/TSLA.

Themes: memecoin, stock-paired:TSLA, dog

## Deployment

LONGDOG token (EIP-1167 DopplerERC20V1 clone): 0xfe7E4b4850979BA7920ce786493B7371761F1e18 on robinhood-chain. [verified S1 S2 S3]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S3 S10]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S1 S12]

LongLauncher (creation tx to): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S11]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S3 S13]

TSLA quote (create numeraire / pair quote / Robinhood Stock Token rail): 0x322F0929c4625eD5bAd873c95208D54E1c003b2d on robinhood-chain. [verified S3 S4 S15 S18]

## Control

owner() returns Airlock 0xeb7C…0862, verified on Blockscout. The token is a 44-byte EIP-1167 clone; implementation DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). Lock beneficiaries are 95% 0x694b…efC5 and 5% 0x21E2…7A66. [verified S3 S10 S13 S19]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

longdog.dog lists CA 0xfe7E…1e18 and a BUY link to app.long.xyz/tokens/0xfe7e…. @longdog_token posted https://longdog.dog on 2026-09-01. DexScreener repeats that site and handle. The site display string is @LONGDOG, not @longdog_token. Bio has no CA. Flag unconfirmed-official. [claim S5 S7 S20]

Census LONG is the factory. Packed doggie and packed OPTIMUS are other LongLauncher TSLA books at different CAs. In-flight DOGECOIN/TSLA is 0x51d3…1E18. [verified S4 S11 S16]

## Product and economics

LongLauncher 0x22e9…eeED create at 2026-08-25T19:11:17Z minted LONGDOG / LONGDOG supply 1e9*1e18 as an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. The create quote is TSLA 0x322F…3b2d. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. Pool id 0x9b66…28a2. [verified S2 S3 S4 S19]

longdog.dog says $LONGDOG · PAIRED TO TESLA and BUY $LONGDOG via the LONG token page. DexScreener's deep book is LONGDOG/TSLA Uniswap v4; LONGDOG/USDG and LONGDOG/ETH v4 books are thin. [verified S5 S7]

LONGDOG/TSLA Uniswap v4 24h volume is 345701.96 USD and liquidity.usd is 151778.18 at 2026-09-03T04:06:17Z from DexScreener. fdv/marketCap is 312718. Gecko token volume_usd.h24 is 344761.90 across all pools, not the TSLA book. Gecko token fdv_usd is 315178.76. Gecko pool endpoint returned HTTP 429 this pass and was not retried. [claim S7 S9]

Blockscout holders_count 1086. Pair created 2026-08-25T19:11:17Z. [claim S2 S4]

## Communications

@longdog_token posted longdog.dog [claim S5 S20]

@longdog_token posted $500 ASPCA donation [claim S22 S23]

@fomokidpump_gew posted a LONGDOG claim URL [claim S21]

## Findings

USD liquidity on the LONGDOG/TSLA book counts both sides, and the quote side is TSLA. owner() is Airlock. Gecko titles the pool Bankr (Robinhood) while the create transaction is LongLauncher and DexScreener names Uniswap v4. Same-ticker LONGDOG CAs exist on Robinhood (WETH/ETH books) and on other chains. No bidirectional official handle this pass. A third-party claim URL reused the CA. [claim S5]

- Quote token TSLA 0x322F…3b2d is a Robinhood Stock Token rail in GET /rhj/assets; LONGDOG is not. [verified S15 S18]
- Pool USD reserve is LONGDOG plus TSLA, not a USDG or WETH backstop. [claim S7]
- Handle is unconfirmed-official; site display string @LONGDOG is not the DexScreener X URL. [claim S5 S7 S20]
- Ticker LONGDOG collides with other robinhood CAs 0xa4fA…72F6 and 0xB338…69cc and with packed doggie / OPTIMUS / DOGECOIN TSLA books. [verified S14 S16 S17]
- No audit report URL this pass. [unknown]
- A third-party claim URL reused the CA. [claim S21]

- Receipts: Blockscout token/impl/factory/launcher/Airlock/TSLA and the create tx plus logs, RPC name/symbol/owner/code, DexScreener token and search, Gecko token, Gecko HTML title, /rhj/assets, longdog.dog, and @longdog_token posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S7 S18]
- Numbers: 345701.96 is the DexScreener LONGDOG/TSLA pool 24h volume, not the 344761.90 Gecko token all-pools figure. Reserve 151778.18 is that DexScreener pair. Gecko token total_reserve_in_usd 136421.57 is all-pools. [claim S7 S9]
- Adversarial: the strongest contrary reading is that this LONGDOG is census LONG, is packed doggie, is packed OPTIMUS, is in-flight DOGECOIN/TSLA, is the TSLA stock token, or is the other robinhood LONGDOG CAs. Different CAs, names, pair ids and (for LONG) entity_kind argue against those. [verified S3 S7 S14 S16 S17 S18]

## Sources

- S1 — Address 0xfe7E…1e18 LONGDOG.
- S2 — Token 0xfe7E…1e18.
- S3 — eth_getCode / name / symbol / owner at block 53123048.
- S4 — Creation tx 0xe5ce3387…3e22.
- S5 — longdog.dog home.
- S7 — latest/dex/tokens LONGDOG.
- S9 — LONGDOG token.
- S10 — DopplerERC20V1 0x3Be8…C599.
- S11 — LongLauncher 0x22e9…eeED.
- S12 — DopplerERC20V1Factory 0x1B37…b69a.
- S13 — Airlock 0xeb7C…0862.
- S14 — search LONGDOG.
- S15 — TSLA token 0x322F…3b2d.
- S16 — DOGECOIN/TSLA book.
- S17 — same-ticker LONGDOG 0xa4fA and 0xB338.
- S18 — GET /rhj/assets Stock Token registry.
- S19 — create tx logs LaunchCreated / Initialize / Lock.
- S20 — bentley seats reclining / longdog.dog.
- S21 — $LONGDOG claim live.
- S22 — $500 donated to the ASPCA foundation.
- S23 — proof of donation.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:12:00Z; methodology_version: proofline-v1.0.
