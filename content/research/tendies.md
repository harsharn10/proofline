---
slug: tendies
coverage: stub
methodology_version: proofline-v1.0
---

# TENDIES — research record

## Identity

TENDIES is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 cloned through the NOXA Fun factory into a Uniswap v3 1% pool quoted against WETH. Traders buy and sell TENDIES on that WETH book and on later ETH and USDG books. DexScreener lists memedepot.com/d/showmetendies and @TendiesRH; neither bidirectionally linked the contract this pass.

Themes: memecoin, amm

## Deployment

TENDIES token (LaunchToken): 0x45242320DBB855EeA8Fd36804C6487E10E97FCF9 on robinhood-chain. [verified S1 S2 S5]

NOXA Fun launch factory (token creator / launchFactory): 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB on robinhood-chain. [verified S1 S3 S4 S5]

Uniswap v3 TENDIES/WETH 1% pool (liquidityPool): 0x237609918F330ADD285b8bC5f8f2922283D1C4C5 on robinhood-chain. [claim S4 S5 S6 S10]

WETH (pairToken): 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 on robinhood-chain. [verified S5 S6 S9]

LaunchLocker (PositionLocked NFT recipient): 0x7F03effbd7ceB22A3f80Dd468f67eF27826acD85 on robinhood-chain. [claim S4 S5 S17]

## Control

_Research pending._

## Security

owner() reverts. ABI has no owner. Deployer EOA 0xE71e…04F0 has no code. launchFactory is immutable. Launch-block buy block plus maxWalletBps 200 / maxTxBps 10000 for restrictionBlocks 366. LaunchToken is partially verified (contracts/LaunchToken.sol, compiler v0.8.30). Factory 0xD9eC…FccB is unverified. No audit report URL this pass. [verified S2 S3 S5] [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener websites point at a Meme Depot gallery with no CA. DexScreener socials list @TendiesRH; the bio does not embed the contract. Flag unconfirmed-official and third-party-link. [claim S6 S11 S12]

X user search for TENDIES returned unrelated handles including @tradefortendies (BONK Dev in accounts.yaml). Do not treat those as this token. [claim S18]

## Product and economics

Launch factory 0xD9eC…FccB clones LaunchToken. Method 0x686399cb from 0xE71e…04F0 at 2026-06-18T23:32:08Z minted TENDIES supply 1e9*1e18 into Uniswap v3 pool 0x2376…C4C5 against WETH 0x0Bd7…AD73 at fee 10000. factory/launchFactory() on the token returns that factory. PositionLocked sent NFT 143 to LaunchLocker 0x7F03…Cd85. socials() is empty. [verified S1 S4 S5 S8]

DexScreener shows 30 robinhood pairs. Lead book is Uniswap v3 TENDIES/WETH. Secondary Uniswap v4 TENDIES/ETH and smaller TENDIES/USDG books exist. A Uniswap v4 PONS/TENDIES book quotes TENDIES; that is Pons using this token as a quote, not this token's pad. [verified S6]

DexScreener TENDIES/WETH Uniswap v3 24h volume is 2527033 USD and liquidity.usd is 1086177.41 at 2026-09-03T04:21:00Z. fdv/marketCap 31058448. Uniswap v4 TENDIES/ETH volume.h24 1436438.41 liquidity.usd 424752.97. Uniswap v4 TENDIES/USDG volume.h24 40935.36 liquidity.usd 41486.44. Pair created 2026-06-18T23:32:08Z. [claim S6]

Gecko token volume_usd.h24 is 5619716.26 across all pools, not the WETH book. fdv_usd 31359012.15 market_cap_usd 32556304.97. Gecko pool GET returned 429 and was not retried. Blockscout holders_count 18177, token.volume_24h 9570671.75, circulating_market_cap 33353819.99. [claim S1 S7]

## Communications

@HeyItsMeTheDev posted $TENDIES as a Robinhood meme that rotates to itself [claim S13]

@AbsorbA11 posted that a Robinhood app listing of tendies could go multi-billion [claim S14]

@bullcryptobtc listed $TENDIES at $24.6M mid-cap on Robinhood Chain [claim S15]

Latest CA posts were netlify claim-portal copypasta [claim S16 S19]

## Findings

USD liquidity on the lead book counts TENDIES plus WETH, not a USDG backstop. Gecko token volume_usd.h24 and Blockscout token.volume_24h are all-pools figures and do not match the WETH pair. No official handle was located, so comms stay unconfirmed-official. Latest CA posts this pass were netlify claim and vote URLs. [claim S1]

- Quote token on the lead book is WETH, not USDG; USDG books are secondary and thinner. [verified S6 S9]
- 24h volume figures disagree across DexScreener pair, Gecko token, and Blockscout token. [claim S1 S6 S7]
- No official handle or domain this pass; memedepot and @TendiesRH are unconfirmed-official / third-party-link. [claim S6 S11 S12]
- Latest CA posts were netlify claim/vote URLs. [claim S16 S19]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/source/factory/create tx/TokenLaunched/WETH/pool/locker, RPC name/symbol/factory/pairToken/poolFee/liquidityPool/deployer/socials, DexScreener tokens API, Gecko token GET 200, memedepot, @TendiesRH, and Latest X posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S6 S7]
- Numbers: 2527033 is the DexScreener TENDIES/WETH pair 24h volume, not Gecko token all-pools 5619716.26 or Blockscout 9570671.75. Reserve 1086177.41 is that pair. [claim S1 S6 S7]
- Adversarial: the strongest contrary reading is that TENDIES is a stock-paired LONG/hood.fun/Pons product or that @TendiesRH is official. pairToken is WETH, the factory is NOXA 0xD9eC…FccB, DexScreener top quotes are WETH/ETH/USDG, and the handle does not embed the CA. [inference S5 S6 S12]

## Sources

- S1 — Token 0x4524…FCF9 TENDIES.
- S2 — LaunchToken verified source.
- S3 — Address 0xD9eC…FccB Launch Factory.
- S4 — create tx 0xa101e16c…5bd6.
- S5 — eth_getCode, name, symbol, launchFactory(), pairToken().
- S6 — latest/dex/tokens TENDIES.
- S7 — TENDIES token.
- S8 — TokenLaunched and PositionLocked logs.
- S9 — Token 0x0Bd7…AD73 WETH.
- S10 — Address 0x2376…C4C5 UniswapV3Pool.
- S11 — showmetendies depot.
- S12 — Tendies profile.
- S13 — The best part about $TENDIES.
- S14 — If tendies hits the robinhood app.
- S15 — Mid-cap narratives $TENDIES.
- S16 — TENDIES netlify claim portal.
- S17 — Address 0x7F03…Cd85 LaunchLocker.
- S18 — User search TENDIES.
- S19 — TENDIES vote listing ID 2394.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:26:00Z; methodology_version: proofline-v1.0.
