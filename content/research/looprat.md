---
slug: looprat
coverage: stub
methodology_version: proofline-v1.0
---

# Looprat — research record

## Identity

Looprat is classified as Launchpad-graduated token.

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 Looprat/ETH pool. Traders buy and sell Looprat (Autonomous Loop Agent) against native ETH on that book. Constructor socials name GitHub mrbuzzoni/loop-rat; @polydao bio lists the CA.

Themes: memecoin, agent, launchpad

## Deployment

Looprat token (PonsV2LauncherToken bytecode): 0x642d30C84211aDE7768fE557fbAed7224e2068c7 on robinhood-chain. [verified S1 S2 S5]

PonsV2LaunchDeployer: 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S1 S18]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S4 S5 S17]

PonsV2LaunchAndBuy (create tx to): 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 on robinhood-chain. [claim S3 S19]

Pons v2 bonding curve: 0x4c94B5e83BBecb365e8183d2682001C259F1A723 on robinhood-chain. [verified S3 S5 S6 S20]

Looprat ticker collision (Pons v1 PonsLauncherToken, not this row): 0xA0974A36ebcDEcBFf49aebf2A3d323624d080764 on robinhood-chain. [claim S10 S21]

## Control

token owner() reverts. Verified PonsV2LauncherToken source says deployer confers no privileges. deployer() 0x89e6…8043 has empty code and equals the launch from address. FeesSwept creatorAmount went to 0xCA1c…9d2F. [verified S2 S5 S6]

## Security

PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and this token CA are verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, compiler v0.8.35). The curve at 0x4c94…A723 is_verified false. No audit report URL was located this pass. [verified S1 S17 S18 S19] [unknown]

## Engineering

_Research pending._

## Team

Constructor socials twitter is https://x.com/exittliquidity/status/2095315785535107189; website is https://github.com/mrbuzzoni/loop-rat. DexScreener lists that GitHub and an X community URL. @polydao bio lists $Looprat and CA 0x642d…68c7. GitHub README title Loop Rat has no CA this pass. Flag unconfirmed-official. [claim S5 S7 S11 S16 S23]

## Product and economics

PonsV2LaunchAndBuy 0xe33E…2948 received tx 0x910fb4ff…0969 from EOA 0x89e6…8043 at 2026-09-03T01:05:21Z. TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e, curve 0x4c94…A723, pairToken 0x000…000, and graduationThreshold 4.2e18. Supply 1e9*1e18 minted to the curve. [verified S3 S4 S5]

CurveCompleted / LaunchSwept tx 0x28925efe…159a at 2026-09-03T01:14:30Z swept quoteOut 4200000000000000100 and tokenOut 285714285714285714285714285. Gecko launchpad_details.completed_at 2026-09-03T01:15:39Z matches DexScreener pairCreatedAt for Uniswap v4 pool 0x592abb…4be2. Secondary Looprat/USDG and Looprat/WETH (wrapped 0x0Bd7…AD73) books exist on DexScreener with far less liquidity than the native-ETH book. [verified S6 S7 S8]

Looprat/WETH Uniswap v4 24h volume is 2043518.18 USD and reserve_in_usd is 33450.5213 at 2026-09-03T05:43:00Z from the Gecko pool endpoint. fdv_usd is 133124.77. Gecko token volume_usd.h24 is 2374928.61 across all pools, not the WETH book. [claim S8 S9]

DexScreener same pair labeled Looprat/ETH: liquidity.usd 33244.88, volume.h24 2068288, fdv/marketCap 134659. Blockscout holders_count 1216. Pair created 2026-09-03T01:15:39Z. Assignment lead of ~$29,894 / ~$1,951,647 was not the live Gecko slice this pass. [claim S1 S7 S8]

## Communications

@polydao posted more on the Looprat harness [claim S11]

@polydao posted fees reinvested and a buyback [claim S12]

@polydao posted claimed creator fees on $looprat [claim S13]

@exittliquidity posted CA added to GitHub and X bio [claim S14]

@exittliquidity posted a token to support @polydao [claim S15]

## Findings

USD liquidity figures on the Looprat/ETH book count both sides. Gecko labels the quote WETH while DexScreener labels it ETH 0x000…000. Ticker-only pairing is not identity: Pons v1 CAs use the same name. Constructor twitter and @polydao disagree, so the handle stays unconfirmed-official. [claim S16]

- Quote token is native ETH 0x000…000; Gecko names it WETH. Pool USD reserve is Looprat plus that quote, not a USDG backstop. [verified S7 S8]
- Same-ticker robinhood books at Pons v1 CAs including 0xA097…0764. Flag ca-collision. [verified S10 S21]
- Solana pumpfun row with the same ticker. Flag wrong-chain. [claim S10]
- Handle is unconfirmed-official; constructor twitter, DexScreener community URL, and @polydao bio do not form a bidirectional pair. [claim S5 S7 S11]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/deployer/launchAndBuy/curve/launch/graduation/search/collision, RPC with Chrome UA, DexScreener token and search, Gecko pool/token (first GET HTTP 200), GitHub README, and the X posts cited above were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S8]
- Numbers: 2043518.18 is the Gecko Looprat/WETH pool 24h volume, not the 2374928.61 token all-pools figure. Reserve 33450.5213 is that pool. DexScreener 2068288 / 33244.88 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this row is census Pons, Agent Name Service, a Pons v1 Looprat CA, or the Solana pumpfun token. Different CAs, create paths (Pons v2 vs Pons v1 vs pumpfun), holder counts, and 24h volume argue against those. [verified S1 S10 S21]

## Sources

- S1 — Token 0x642d…68c7 Autonomous Loop Agent / Looprat.
- S2 — PonsV2LauncherToken verified source.
- S3 — launchAndBuy tx 0x910fb4ff…0969.
- S4 — TokenLaunched log for Looprat.
- S5 — eth_getCode, name, symbol, launchFactory() on Looprat.
- S6 — CurveCompleted / LaunchSwept tx 0x28925efe…159a.
- S7 — latest/dex/tokens Looprat.
- S8 — Looprat/WETH Uniswap v4 pool.
- S9 — Autonomous Loop Agent token.
- S10 — search q=Looprat.
- S11 — thank you for the support on $Looprat.
- S12 — I started Looprat on the fly as a social experiment.
- S13 — i just claimed the creator fees on $looprat.
- S14 — Ca has been added to GitHub and x bio.
- S15 — best use of Loop Engineering / creating a token.
- S16 — mrbuzzoni/loop-rat README.
- S17 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S18 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S19 — Address 0xe33E…2948 PonsV2LaunchAndBuy.
- S20 — Address 0x4c94…A723 bonding curve.
- S21 — Token 0xA097…0764 Autonomous Loop Agent / Looprat.
- S23 — X profile bio lists Looprat CA.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:47:00Z; methodology_version: proofline-v1.0.
