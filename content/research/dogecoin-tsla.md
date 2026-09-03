---
slug: dogecoin-tsla
coverage: stub
methodology_version: proofline-v1.0
---

# DOGECOIN — research record

## Identity

DOGECOIN is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against TSLA, the Tesla Robinhood Stock Token at 0x322F…3b2d. Traders buy and sell DOGECOIN on that book. TSLA is the rail. This token is not Dogecoin the asset, not packed doggie, and not OPTIMUS/TSLA. No official project domain or handle was located this pass.

Themes: memecoin, dog, stock-paired:TSLA, rwa

## Deployment

DOGECOIN token (EIP-1167 DopplerERC20V1 clone): 0x51d3bBe1ab7467F71E06029e46Ef9044BF551E18 on robinhood-chain. [verified S1 S2 S4]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S4 S6]

DopplerERC20V1Factory (token creator_address_hash): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S1 S5]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [claim S3 S8]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S4 S9]

Tesla • Robinhood Token (pair quote / rail): 0x322F0929c4625eD5bAd873c95208D54E1c003b2d on robinhood-chain. [verified S3 S10 S14 S15]

## Control

owner() returns Airlock 0xeb7C…0862, verified on Blockscout. The token is a 44-byte EIP-1167 clone; implementation DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). Create-from EOA 0xCBcF…53FC has no code. Lock beneficiaries on create are 5% 0x21E2…7A66 and 95% that EOA. [verified S3 S4 S6 S9]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener websites points at the LONG token page; Gecko info websites and twitter_handle are empty. DexScreener socials list x.com/dogeteslacoin; GET that profile returned Account suspended. Flag unconfirmed-official. Distinct from packed doggie (doggiemode.com / @DoggieMode) and packed optimus. [claim S7 S13 S17]

## Product and economics

LongLauncher 0x22e9…eeED create at 2026-09-02T00:34:38Z minted DOGECOIN / DOGECOIN supply 1e9*1e18 as an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. The create quote is TSLA 0x322F…3b2d. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. Pool id 0x4c02…86d8. [verified S1 S3 S4]

DexScreener's deep book is DOGECOIN/TSLA Uniswap v4; secondary DOGECOIN/ETH and DOGECOIN/USDG books exist with far less liquidity than the TSLA book. [verified S7]

DOGECOIN/TSLA Uniswap v4 DexScreener 24h volume is 1366502 USD and liquidity.usd is 79249.05 at 2026-09-03T04:04:00Z. fdv/marketCap is 112882. Gecko token/pools same pool: volume_usd.h24 1359754.68 reserve_in_usd 99132.36 fdv_usd 112625.44. Gecko token volume_usd.h24 is 1472316.52 across all pools, not the TSLA book. [claim S7 S11 S12]

Blockscout holders_count 840. Pair created 2026-09-02T00:34:38Z. Dedicated Gecko pool GET returned 429 this pass and was not retried. [claim S2 S12]

## Communications

DexScreener lists x.com/dogeteslacoin; profile suspended [claim S7 S17]

## Findings

USD liquidity on the DOGECOIN/TSLA book counts both sides, and aggregators disagree on the reserve (DexScreener $79.2k vs Gecko token/pools $99.1k). A second DOGECOIN ticker at 0x8903… quotes TSLA with almost no liquidity. DexScreener lists x.com/dogeteslacoin, which is suspended. TSLA is the rail, not this token. [claim S14]

- Quote token TSLA 0x322F…3b2d is the Robinhood Stock Token rail in GET /rhj/assets; this memecoin is not that asset. [verified S14 S15]
- Pool USD reserve is DOGECOIN plus TSLA, not a USDG or WETH backstop. Aggregators disagree on the dollar reserve. [claim S7 S12]
- No official handle or domain this pass; DexScreener's listed X profile is suspended. [claim S7 S17]
- Ticker DOGECOIN collides with 0x8903… and with packed doggie / optimus / LONGDOG at different CAs on the same TSLA rail. [verified S16]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/create/LongLauncher/factory/impl/Airlock/TSLA, RPC, DexScreener token and search, Gecko token/info/token-pools, /rhj/assets, and x.com/dogeteslacoin were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S3 S4 S7 S14]
- Numbers: 1366502 is the DexScreener DOGECOIN/TSLA pair 24h volume, not the 1472316.52 Gecko token all-pools figure. Reserve 99132.36 is the Gecko token/pools row; DexScreener liquidity.usd 79249.05 is the same pair, different aggregator. [claim S7 S11 S12]
- Adversarial: the strongest contrary reading is that this DOGECOIN is packed doggie, is packed optimus, is LONGDOG/TSLA, is ticker-collision 0x8903…, is Dogecoin the asset, or is the TSLA stock token. Different CAs, names, pair ids and (for TSLA) GET /rhj/assets argue against those. [verified S3 S7 S14 S16]

## Sources

- S1 — Address 0x51d3bBe1…1E18 DOGECOIN.
- S2 — Token 0x51d3bBe1…1E18 DOGECOIN.
- S3 — create tx 0x7cf116b4…b9f4.
- S4 — eth_getCode, name, symbol, owner() on DOGECOIN.
- S5 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S6 — Address 0x3Be8…C599 DopplerERC20V1.
- S7 — latest/dex/tokens DOGECOIN.
- S8 — Address 0x22e9…eeED LongLauncher.
- S9 — Address 0xeb7C…0862 Airlock.
- S10 — Token 0x322F…3b2d Tesla • Robinhood Token / TSLA.
- S11 — DOGECOIN token.
- S12 — DOGECOIN token pools.
- S13 — DOGECOIN token info.
- S14 — GET /rhj/assets Stock Token registry.
- S15 — Address 0x322F…3b2d Tesla • Robinhood Token.
- S16 — search DOGECOIN TSLA.
- S17 — x.com/dogeteslacoin Account suspended.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:12:00Z; methodology_version: proofline-v1.0.
