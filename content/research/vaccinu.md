---
slug: vaccinu
coverage: stub
methodology_version: proofline-v1.0
---

# VACCINU — research record

## Identity

VACCINU is classified as Stock-paired token.

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against MRNA. LongLauncher.create from 0xcF2e…61eD minted VACCINU on 2026-09-01T22:36:37Z into pool 0xe4fc…e5e6 via DopplerERC20V1Factory and Airlock. Traders buy and sell VACCINU against the Moderna Robinhood Token. No official site was located this pass. DexScreener lists @VaccinuRH without a bidirectional official-crosslink.

Themes: memecoin, stock-paired:MRNA, rwa, inu

## Deployment

VACCINU token (EIP-1167 DopplerERC20V1 clone): 0xcF1968747bC573294e468FD0cDaB0Dc61B971E18 on robinhood-chain. [verified S1 S5 S4]

DopplerERC20V1 implementation: 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 on robinhood-chain. [verified S2 S5]

DopplerERC20V1Factory (create tokenFactory): 0x1B37D3a72082029c44B35B604Ea473617580b69a on robinhood-chain. [claim S3 S4 S5]

LongLauncher (create() target): 0x22e99278308B393ea1260859B181AD7E78f5eeED on robinhood-chain. [verified S4 S13]

Airlock (token owner()): 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 on robinhood-chain. [claim S6 S14]

MRNA Moderna • Robinhood Token (pair quote / numeraire): 0x43B07D15cE533bEc5476d70C22a78a1B2B662155 on robinhood-chain. [verified S11 S12]

## Control

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. Launcher 0xcF2e…61eD has no code and receives 95% of the DopplerHookInitializer Lock split; 5% goes to 0x21E2…7A66. [verified S6 S15]

## Security

DopplerERC20V1, DopplerERC20V1Factory, Airlock, LongLauncher, and DopplerHookInitializer are partially verified on Blockscout (compiler v0.8.26). No audit report URL was located this pass. [verified S2 S3 S13 S14 S22] [unknown]

## Engineering

_Research pending._

## Team

No official domain was located. DexScreener info.websites is empty. tokenURI IPFS lists Website as @morningxbt status 2094917131376742737, posted 57 seconds before the pool. DexScreener lists @VaccinuRH; that bio contains the CA. Flag unconfirmed-official and third-party-link. [claim S7 S16 S17 S18]

## Product and economics

LongLauncher 0x22e9…eeED create() from 0xcF2e…61eD at 2026-09-01T22:36:37Z minted VACCINU / VACCINU supply 1e9*1e18 into Uniswap v4 poolId 0xe4fc…e5e6 quoted against MRNA. Token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock. isPoolLocked true and pool() is 0xdead. [verified S4 S5 S6 S15]

Secondary VACCINU/USDG and VACCINU/ETH books exist on DexScreener with far less liquidity than the MRNA book. Gecko dex id is bankr-robinhood; DexScreener labels the same pair uniswap v4. [verified S7 S8 S23]

VACCINU/MRNA Uniswap v4 24h volume is 3038939.61 USD and reserve_in_usd is 263032.57 at 2026-09-03T03:43:00Z from the Gecko pool endpoint. fdv_usd is 839408.33. Gecko token volume_usd.h24 is 3069023.31 across all pools, not the MRNA book. [claim S8 S9]

DexScreener same pair: liquidity.usd 252552.02, volume.h24 3078005.72, fdv/marketCap 851693. Blockscout holders_count 1497. Pair created 2026-09-01T22:36:37Z. [claim S1 S7]

## Communications

Third-party post pushed a netlify claim URL for $VACCINU [claim S20]

@ChudCrentis listed VACCINU/MRNA among stock pairs [claim S19]

@VaccinuRH posted Vaccinu mode activated [claim S17]

@morningxbt posted the vaccinu / MRNA narrative [claim S16 S18]

## Findings

USD liquidity figures on the VACCINU/MRNA book count both sides, and the quote side is MRNA, not USDG. Many same-name Vaccinu tokens exist on 4663, including VACCCINU 0x6473…1E18. No official handle was located, so comms surfaces stay unconfirmed-official. [claim S11]

- Quote token MRNA 0x43B0…2155 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is VACCINU plus MRNA, not a USDG backstop. [verified S11 S12]
- Gecko dex label bankr-robinhood can be read as a Bankr mint; the create tx is LongLauncher. [verified S4 S8]
- No official handle or domain this pass; @VaccinuRH is unconfirmed-official. [claim S7 S17]
- Same-ticker clones including VACCCINU 0x6473…1E18. Flag ca-collision. [claim S21]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/MRNA and create tx 0xb226…cf0c, RPC name/symbol/owner/isPoolLocked/tokenURI, DexScreener, Gecko pool/token/info/dexes, /rhj/assets, IPFS tokenURI, @VaccinuRH, @morningxbt, @ChudCrentis, and the netlify claim post were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S11]
- Numbers: 3038939.61 is the Gecko VACCINU/MRNA pool 24h volume, not the 3069023.31 token all-pools figure. Reserve 263032.57 is that pool. DexScreener 3078005.72 / 252552.02 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that VACCINU is a Bankr-official or Moderna-official product. Create is LongLauncher, Bankr API latest 50 has no row, and no official handle or domain was located. [inference S4 S11]

## Sources

- S1 — Token 0xcF19…1E18 VACCINU.
- S2 — Address 0x3Be8…C599 DopplerERC20V1.
- S3 — Address 0x1B37…b69a DopplerERC20V1Factory.
- S4 — LongLauncher create tx 0xb226faf5…cf0c.
- S5 — eth_getCode, name, symbol, owner() on VACCINU.
- S6 — isPoolLocked, pool(), tokenURI, Airlock owner().
- S7 — latest/dex/tokens VACCINU.
- S8 — VACCINU/MRNA pool (dex bankr-robinhood).
- S9 — VACCINU token.
- S11 — GET /rhj/assets MRNA Stock Token.
- S12 — Token 0x43B0…2155 Moderna • Robinhood Token / MRNA.
- S13 — LongLauncher 0x22e9…eeED.
- S14 — Airlock 0xeb7C…0862.
- S15 — LaunchCreated / Initialize / Lock logs on create tx.
- S16 — tokenURI metadata bafkreibcljjoctwvjumj6eo5oyple6halixhxbvr4rxpjn3xexeyrabp4y.
- S17 — Vaccinu mode activated.
- S18 — no better narative then vaccinu.
- S19 — VACCINU/MRNA among stock pairs.
- S20 — $VACCINU holders claim URL.
- S21 — VACCCINU copycat 0x6473…1E18.
- S22 — DopplerHookInitializer 0x4e34…a544.
- S23 — Robinhood dexes includes bankr-robinhood.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:43:00Z; methodology_version: proofline-v1.0.
