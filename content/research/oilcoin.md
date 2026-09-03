---
slug: oilcoin
coverage: stub
methodology_version: proofline-v1.0
---

# OILCOIN — research record

## Identity

OilCoin is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against United States Oil Fund • Robinhood Token (USO). LongLauncher.create on 2026-09-02 minted OilCoin (OILCOIN) and seeded the OILCOIN/USO book. Traders buy and sell OILCOIN against USO. USO is the quote rail, not the subject. No official site or handle was located this pass.

Themes: memecoin, stock-paired:USO, rwa, graduation

## Deployment

OILCOIN token (EIP-1167 DopplerERC20V1 clone): 0x9CB19d6e3F87543826E50F61FF4C5A6cdf3B1E18 on robinhood-chain. [verified S1 S5 S6]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [verified S4 S6 S13]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S1 S6 S13]

LongLauncher (create caller): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S6 S14]

USO Stock Token rail (pair quote): 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 on robinhood-chain. [verified S3 S5 S10 S11]

Airlock (token owner): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S4 S6]

## Control

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-tx from 0xd53B0e13…0aBA has no code. Create-tx Lock beneficiaries were 5% 0x21E2…7A66 and 95% 0x33Eb5e5d…bbF4. [verified S4 S6]

## Security

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The token page is a verified EIP-1167 shell only. No audit report URL was located this pass. [verified S1 S13 S14] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. X user search returned unrelated OilCoin handles, including @oilonrobinhood with a different CA. Flag unconfirmed-official. Do not invent a project handle. [claim S7 S17]

@xbtscout posted the CA as launched via longxyz. That is a scout post, not a project account. tokenURI is ipfs://bafkreidpou4mf2cwo2brzugykvlpu6abbk7sagnrrghlod6s3nz3lav22q; gateways returned 403 this pass. [claim S6 S15]

## Product and economics

DopplerERC20V1Factory 0x1B37…b69a clones DopplerERC20V1 via EIP-1167. LongLauncher.create from EOA 0xd53B0e13…0aBA at 2026-09-02T18:45:10Z minted OilCoin / OILCOIN supply 1e9*1e18 into Uniswap v4 poolId 0x413dc2a6…fbe1 quoted against USO 0xa30FA3…D344. factory() on the token reverts; owner() is Airlock 0xeb7C…0862. [verified S4 S5 S6]

Airlock getAssetData numeraire is that USO; LP slots include 0xdead. PoolManager is 0x8366…0951. LaunchCreated normalizedTicker OILCOIN. Secondary OILCOIN/USDG and OILCOIN/ETH Uniswap v4 books on DexScreener have far less liquidity than the USO book. [verified S6 S7]

OILCOIN/USO Uniswap v4 24h volume is 855733.74 USD and liquidity.usd is 42823.7 at 2026-09-03T04:08:00Z from the DexScreener pair endpoint. fdv/marketCap 46321. [claim S7]

Gecko HTML meta on the same pool: 24h volume $839.03K, liquidity $40,657.67, price $0.00004349. JSON API 429 this pass. Blockscout holders_count 145. Pair created 2026-09-02T18:45:10Z. [claim S1 S9]

Gecko HTML titles Bankr (Robinhood); DexScreener dexId is uniswap v4. Creation path is LongLauncher.create. [claim S4 S7 S9]

## Communications

@xbtscout posted $OILCOIN launched via longxyz [claim S15]

## Findings

USD liquidity on the OILCOIN/USO book counts both sides; the quote side is USO, not USDG. Gecko HTML meta ($839k vol / $40.7k liq) disagrees with DexScreener ($856k / $43k). Same-ticker OilCoin clones exist on robinhood (OIL 0x9D438Ee3…1e18, OILCOIN/USAR 0x0F9D2c46…1E18). No official handle this pass. Lock 95% beneficiary is not the create-from. [claim S10]

- Quote token USO 0xa30FA3…D344 is the Robinhood Stock Token rail in GET /rhj/assets; OILCOIN is not. [verified S10 S11]
- Pool USD reserve is OILCOIN plus USO, not a USDG or WETH backstop. [claim S7]
- Gecko HTML $40,657.67 vs DexScreener 42823.7 on the same pool. [claim S7 S9]
- Same-ticker clones (OIL 0x9D438Ee3…1e18, OILCOIN/USAR 0x0F9D2c46…1E18) and colliding OilCoin handles. [claim S8 S16 S17]
- Distinct from packed CRUDECAT and from GASOLINU; merging them would misstate the pad and the book. [verified S16 S19]
- No official handle or domain this pass. [claim S7 S17]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/USO and the create tx, RPC name/symbol/owner/getAssetData/tokenURI, DexScreener token/pair/search, Gecko HTML, /rhj/assets, GitHub search, and X user/keyword search were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S6 S7 S10]
- Numbers: 855733.74 is the DexScreener OILCOIN/USO pair 24h volume, not an all-pools figure. Liquidity 42823.7 is that pool. Gecko HTML $839.03K / $40,657.67 is the same pair, different aggregator. [claim S7 S9]
- Adversarial: the strongest contrary reading is that this is packed CRUDECAT, in-flight GASOLINU, or the USO issuer. Those have different CAs; USO 0xa30FA3…D344 is the /rhj/assets rail, not the memecoin. [inference S10 S16 S19]

## Sources

- S1 — Token 0x9CB19d6e…1E18 OilCoin / OILCOIN.
- S3 — USO name/symbol and token code sizes.
- S4 — create tx 0x2f51556a…9979d.
- S5 — latest/dex/tokens OILCOIN.
- S6 — eth_getCode and ERC-20 / Airlock calls on OILCOIN.
- S7 — OILCOIN/USO Uniswap v4 pair.
- S8 — Search OILCOIN on robinhood.
- S9 — OILCOIN/USO pool page.
- S10 — GET /rhj/assets Stock Token registry.
- S11 — Token 0xa30FA3…D344 USO.
- S13 — DopplerERC20V1Factory 0x1B37…b69a.
- S14 — LongLauncher 0x22e9…eeED.
- S15 — $OILCOIN robinhood early call.
- S16 — GASOLINU and OILCOIN ticker clones.
- S17 — OILCOIN / OilCoin / Oil Coin robinhood handles.
- S19 — Packed CRUDECAT distinction.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:12:00Z; methodology_version: proofline-v1.0.
