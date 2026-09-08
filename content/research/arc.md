---
slug: arc
coverage: stub
methodology_version: proofline-v1.0
---

# Arc — research record

## Identity

Arc is classified as Isolated lending market.

Arc is a liquidity-margin layer on Robinhood Chain. Official docs say a CL position can stay in range while valued as USDG collateral. The homepage publishes token `0xce84…` as ARC LIQUIDITY / ARC. An app-bundled Railway API lists six stock/USDG markets and an ArcLendingPool. RPC and Blockscout reproduced the token and six Arc-named core contracts on chain 4663. Distinct from Arrow Finance CDP. Lending balances were not independently read on DefiLlama.

Themes: lending, rwa, vault, oracle

TL;DR: Arc on chain 4663: LP-as-collateral USDG credit; ARC token and ArcLendingPool exist; six stock/USDG markets claimed. [CLM-1 CLM-3]

## Deployment

Homepage Arc token contract (RPC name ARC LIQUIDITY, symbol ARC, PonsV2LauncherToken): 0xce845443428867d271929bd739148B85524B536a on robinhood-chain. [verified S1 S8 S10]

API-labeled ArcRegistry: 0xcfe634461795b5954c8fce02a677087a6c2c6b19 on robinhood-chain. [verified S4 S5 S9 S10]

API-labeled ArcOracle: 0x879be77045e99913215b8a2b72320cc3457c7a00 on robinhood-chain. [claim S4 S5 S9 S10]

API-labeled ArcPositionManager: 0x353b45eac23e6bad9c35e72304eab24312f16b31 on robinhood-chain. [claim S4 S5 S9 S10]

API-labeled ArcLendingPool: 0x618389d2048ee7e4c823cec121c5d07edd95d0de on robinhood-chain. [verified S4 S5 S9 S10]

API-labeled ArcCore: 0xa75fe67a563cdff3fcbf6c64bf5d85aab33fd1c7 on robinhood-chain. [claim S4 S5 S9 S10]

API-labeled ArcZapRouter: 0x6959773224c47060d8650b4e740c19c3d28b3fe7 on robinhood-chain. [claim S4 S5 S9 S10]

API-labeled NVDA/USDG Uniswap v3 pool (not an Arc token): 0xd4EB21209C4D6093f80B5b84f5C45cc093EA14a3 on robinhood-chain. [claim S7 S10 S18]

API-labeled AAPL/USDG Uniswap v3 pool (not an Arc token): 0x783C9bbB765047CFdD2b84b92b2Ca9F11D34b7Ed on robinhood-chain. [claim S7 S10]

API-labeled MSFT/USDG Uniswap v3 pool (not an Arc token): 0xeb60bCD1D920ad6E102690CCFC6fB488899E1510 on robinhood-chain. [claim S7 S10]

API-labeled GOOGL/USDG Uniswap v3 pool (not an Arc token): 0x34D0dC122CF9A8Eb296fC5e0D3A233625D7d19b7 on robinhood-chain. [claim S7 S10]

API-labeled AMZN/USDG Uniswap v3 pool (not an Arc token): 0x8AC92DA74AB5F3b1d024Dc1943Ad7e15Dc4179Ef on robinhood-chain. [claim S7 S10]

API-labeled TSLA/USDG Uniswap v3 pool (not an Arc token): 0xf4ACdAEEB7022862A763C9B1B885e11191c889E3 on robinhood-chain. [claim S7 S10]

owner() of ArcRegistry/ArcOracle/ArcPositionManager/ArcLendingPool/ArcCore (EOA, no bytecode): 0xb1e919b33c7a69f51c584dc1f0d325cfd641d042 on robinhood-chain. [claim S10 S19]

## Control

_Research pending._

## Security

_Research pending._

## Engineering

_Research pending._

## Team

_Research pending._

## Product and economics

_Research pending._

## Communications

ArcLiquidity: v1 live, six USDG markets [claim S14]

Contracts deployed, markets live, LP opened [claim S15]

Deposit-to-credit E2E claimed on RH mainnet [claim S16]

Lending/borrow params 65/75/6 claimed live [claim S17]

## Findings

- Docs state v1 has not been audited; testing is not an audit. [claim S2]
- ArcRegistry, ArcOracle, ArcPositionManager, ArcLendingPool, and ArcCore owner() is one EOA. [verified S9]
- USDG pool totals in this round came from a Railway API, not an explorer or DefiLlama protocol row. [claim S6] [verified S12]

## Sources

- S1 — Official site arcliquidity.capital.
- S2 — arcliquidity.capital/docs.
- S4 — app-BHKlLO45.js hardcoded Railway backend.
- S5 — GET /v1/config chainId 4663.
- S6 — GET /v1/pool USDG totals.
- S7 — GET /v1/markets six stock/USDG pools.
- S8 — ARC token 0xce845443….
- S9 — ArcLendingPool 0x618389d2….
- S10 — eth_getCode / eth_call on chain 4663.
- S12 — Protocols API, Robinhood Chain slice.
- S14 — status/2094877861681451449 v1 live six markets.
- S15 — status/2094769217815847119 contracts deployed quote.
- S16 — status/2094693595479499086 deposit-to-credit E2E.
- S17 — status/2094552389629944140 lending params 65/75/6.
- S18 — NVDA/USDG pool 0xd4EB2120… UniswapV3Pool.
- S19 — Core owner EOA 0xb1e919b3….

## Review metadata

Compiled from WORK-20260904-grok-bot-arc by grok-bot as of 2026-09-04T14:05:00Z; methodology_version: proofline-v1.0.
