---
slug: gasolinu
coverage: stub
methodology_version: proofline-v1.0
---

# GASOLINU — research record

## Identity

GASOLINU is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against USO. LongLauncher.create from 0x3505…3E52 minted Gasoline Inu (GASOLINU) on 2026-09-02T19:07:07Z into pool 0x0e83588f…afa8 via DopplerERC20V1Factory and Airlock. Traders buy and sell GASOLINU against the USO Stock Token rail. Site gasolinu.fun publishes the same CA. No bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:USO, rwa, inu, graduation

## Deployment

GASOLINU token (EIP-1167 DopplerERC20V1 clone): 0x1e6EA1e89151cDc8443968Bf047cfa3177181e18 on robinhood-chain. [verified S1 S5 S4]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S4 S5]

LongLauncher (create() target): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S13]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S6 S14]

USO Stock Token rail (pair quote / numeraire): 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 on robinhood-chain. [verified S11 S12]

## Control

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. Launcher 0x3505…3E52 has no code and receives 95% of the DopplerHookInitializer Lock split; 5% goes to 0x21E2…7A66. [verified S6 S15]

## Security

DopplerERC20V1, DopplerERC20V1Factory, Airlock, and DopplerHookInitializer are partially verified on Blockscout (compiler v0.8.26). LongLauncher is fully verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified S2 S3 S13 S14 S24] [unknown]

## Engineering

_Research pending._

## Team

gasolinu.fun HTTP 200 publishes CA 0x1e6EA1…1e18, the USO rail, and the DexScreener pair. tokenURI IPFS lists that site as Website and names fee_receiver 0x3505…3E52. DexScreener info is empty. The site hrefs x.com/gasolineinu; from:gasolineinu returned 0 posts and X user search did not return that handle. Flag unconfirmed-official. [verified S10 S17] [claim S7 S18]

USO is the Robinhood Stock Token rail, not a Gasolinu product. LongLauncher / Bankr Doppler infra is the pad, not the token team. [verified S11 S13]

## Product and economics

LongLauncher 0x22e9…eeED create() from 0x3505…3E52 at 2026-09-02T19:07:07Z minted Gasoline Inu / GASOLINU supply 1e9*1e18 into Uniswap v4 poolId 0x0e83588f…afa8 quoted against USO. Token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock. isPoolLocked true and pool() is 0xdead. [verified S4 S5 S6 S15]

Secondary GASOLINU/USDG and GASOLINU/ETH Uniswap v4 books on DexScreener have far less liquidity than the USO book. Gecko dex id is bankr-robinhood; DexScreener labels the same pair uniswap v4. [verified S7 S8]

GASOLINU/USO Uniswap v4 24h volume is 528789.72 USD and reserve_in_usd is 111188.645 at 2026-09-03T04:05:00Z from the Gecko pool endpoint. fdv_usd is 264292.68. Gecko token volume_usd.h24 is 532636.65 across all pools, not the USO book. [claim S8 S9]

DexScreener same pair: liquidity.usd 133900.9, volume.h24 539352.57, fdv/marketCap 274616. Blockscout holders_count 310. Pair created 2026-09-02T19:07:07Z. Assignment lead of liq ~$127,908 / vol ~$536,058 is near the live DexScreener slice; Gecko reserve is $111k. [claim S1 S7]

## Communications

@meliboi_sama posted the CA with $129k mcap [claim S19]

@treyerl posted the CA as a crude-oil-dog riff [claim S20]

@manni62406322 named Gasolinu @gasolineinu as a LONG USO runner [claim S18]

@ViralPairs posted $GASOLINU TRENDING with the CA [claim S22]

## Findings

USD liquidity figures on the GASOLINU/USO book count both sides, and the quote side is USO, not USDG. DexScreener ($134k liq / $539k vol) disagrees with Gecko ($111k / $529k). Same-ticker Gasoline Inu tokens exist on 4663 and BSC. gasolinu.fun hrefs @gasolineinu, but that handle was not reproduced this pass, so comms stay unconfirmed-official. [claim S17]

- Quote token USO 0xa30FA3…D344 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is GASOLINU plus USO, not a USDG backstop. [verified S11 S12]
- Gecko dex label bankr-robinhood can be read as a Bankr mint; the create tx is LongLauncher. [verified S4 S8 S25]
- No bidirectional official handle this pass; @gasolineinu is unconfirmed-official. [claim S7 S17 S18]
- Same-ticker clones including 0x0D4E…7301 (XOM book) and BSC GASOLINU. Flag ca-collision. [claim S21]
- DexScreener liquidity 133900.9 disagrees with Gecko reserve 111188.645. [claim S7 S8]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/USO/hook and create tx 0xc911…cda7, RPC name/symbol/owner/isPoolLocked/tokenURI, DexScreener, Gecko pool/token/HTML, /rhj/assets, IPFS tokenURI, gasolinu.fun, Bankr launches, and X posts with the CA were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S11 S17]
- Numbers: 528789.72 is the Gecko GASOLINU/USO pool 24h volume, not the 532636.65 token all-pools figure. Reserve 111188.645 is that pool. DexScreener 539352.57 / 133900.9 is the same pair, different aggregator. Holders 310 is Blockscout. [claim S1 S7 S8 S9]
- Adversarial: the strongest contrary reading is that GASOLINU is packed CRUDECAT, a Bankr-official mint, or the USO issuer. CRUDECAT is Circus 0xBD957…cF3e; create is LongLauncher; Bankr API latest 50 has no row; USO 0xa30FA3…D344 is the /rhj/assets rail. [inference S4 S11 S16 S25]

## Sources

- S1 — Token 0x1e6EA1…1e18 Gasoline Inu / GASOLINU.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — LongLauncher create tx 0xc911c2ad…cda7.
- S5 — eth_getCode, name, symbol, owner() on GASOLINU.
- S6 — isPoolLocked, pool(), tokenURI, Airlock owner().
- S7 — latest/dex/tokens GASOLINU.
- S8 — GASOLINU/USO pool (dex bankr-robinhood).
- S9 — Gasoline Inu token.
- S10 — tokenURI metadata bafkreibvmicjhij6cjf5h5vv2kj3hcsca7on45w7n6a7wrlilijujqxldu.
- S11 — GET /rhj/assets USO Stock Token.
- S12 — Token 0xa30FA3…D344 United States Oil Fund • Robinhood Token / USO.
- S13 — LongLauncher 0x22e9…eeED.
- S14 — Airlock 0xeb7C…0862.
- S15 — LaunchCreated / Initialize / Lock logs on create tx.
- S16 — Search OILCOIN MICROWAVE CRUDECAT vs GASOLINU.
- S17 — Gasolinu — the dog runs on crude.
- S18 — NEW RUNNERS FOR LONG Gasolinu @gasolineinu.
- S19 — $GASOLINU mcap $129K plus CA.
- S20 — gasolinu riffing on crude oil dogs.
- S21 — GASOLINU name collisions 0x0D4E…7301 and 0xD8A5…bee9.
- S22 — $GASOLINU TRENDING.
- S24 — DopplerHookInitializer 0x4e34…a544.
- S25 — GET /token-launches latest 50.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:20:00Z; methodology_version: proofline-v1.0.
