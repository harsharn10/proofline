---
slug: juggernaut
coverage: stub
methodology_version: proofline-v1.0
---

# JUGGERNAUT — research record

## Identity

JUGGERNAUT is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 cloned by the NOXA Fun Launch Factory into a Uniswap v3 JUGGERNAUT/WETH 1% pool. Traders buy and sell The Juggernaut (JUGGERNAUT) on that ETH book. Site juggernautrh.com lists the CA and @Juggernautrh.

Themes: memecoin, eth-book, noxa-launch

## Deployment

JUGGERNAUT token (LaunchToken): 0xD7321801CAae694090694Ff55A9323139F043B88 on robinhood-chain. [verified S1 S4 S5]

NOXA Fun launch factory (token creator / launchFactory): 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB on robinhood-chain. [verified S1 S2 S5 S18]

Uniswap v3 JUGGERNAUT/WETH 1% pool (liquidityPool): 0x588b0785f50063260003B7790C42f1eF74902746 on robinhood-chain. [verified S5 S6 S17]

WETH9 (pairToken / pair quote): 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 on robinhood-chain. [claim S5 S6 S7]

## Control

owner() reverts. LaunchToken source has no Ownable. Deployer 0xe5f8…8361 has no code. Factory 0xD9eC…FccB is unverified. maxWalletBps 200 / restrictionBlocks 366 were set at construction. [verified S4 S5] [unknown]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

juggernautrh.com publishes the CA and https://x.com/Juggernautrh. @Juggernautrh posted the site URL on 2026-07-09. Handle did not embed the CA in X search this pass. [verified S8 S9]

t.me/juggernaut_rh titles Juggernaut with 274 subscribers and no contract in the public preview; DexScreener lists it. Flag third-party-link. Same-name handles @juggernautonrh (Pons bio) and @Juggernautrh_ (parody bio) are handle-collision, not the site link. [claim S10 S21]

On-chain description() stores Vlad Tenev's 2025 "the juggernaut" post. Site lore cites that post and disclaims Robinhood affiliation. [claim S5 S8 S12]

## Product and economics

NOXA factory 0xD9eC…FccB created LaunchToken 0xD732…3B88 in tx 0xbbb2…3b1f at 2026-06-20T23:59:08Z from EOA 0xe5f8…8361. launchFactory() returns that factory. pairToken() is WETH 0x0Bd7…AD73. liquidityPool() is Uniswap v3 0x588b…2746 with poolFee 10000. [verified S2 S3 S5]

DexScreener also lists a thinner JUGGERNAUT/USDG v4 book and native-ETH v4 books. Those are not the ETH book this packet tracks. [verified S6]

JUGGERNAUT/WETH Uniswap v3 24h volume is 1720192.78 USD and reserve_in_usd is 485702.46 at 2026-09-03T04:20:00Z from Gecko search row 1. DexScreener same pair: liquidity.usd 487000.38, volume.h24 1727572.61, fdv/marketCap 6456627. Blockscout holders_count 16850. Pair created 2026-06-20T23:59:08Z. [claim S1 S6 S7]

Prior GO-LIVE trending lead of ~$474k / ~$1.88M was not re-fetched as trending_pools this pass (pool GET 429). Live search reserve is $486k and 24h volume $1.72M. [claim S7 S20]

## Communications

@Juggernautrh posted juggernautrh.com is live [verified S8 S9]

@Juggernautrh posted there are 0 intentions to migrate [claim S11]

Vlad Tenev posted the juggernaut in 2025; token description stores that URL [claim S5 S8 S12]

@RHDaily__ listed $JUGGERNAUT among biggest projects on Robinhood [claim S13]

## Findings

USD liquidity on the main book counts JUGGERNAUT plus WETH. Same-ticker clones (The Juggernauts 0x6b3A…9A17, HOODon-paired 0xAeaB…8888) and same-name X handles sit next to the canonical CA. Site footer says not affiliated with Robinhood Markets. Telegram is a third-party-link this pass. [claim S8]

- Same-ticker The Juggernauts 0x6b3A…9A17 shows ~$1.40M Gecko reserve with ~$10 24h volume; it is not 0xD732…3B88. [verified S7 S16]
- Quote token is WETH, not a stock token; still distinct from packed CHUMP and SHRUB ETH books. [verified S6 S15]
- Telegram is a third-party-link; handle-collision accounts exist. [claim S10 S21]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/pool/create tx/logs/source, RPC name/symbol/launchFactory/pairToken/liquidityPool, DexScreener tokens+search, Gecko search, juggernautrh.com, @Juggernautrh website and migrate posts, Telegram preview, Vlad post, @RHDaily__, and ticker-clone token page were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S6 S8]
- Numbers: 1720192.78 is the Gecko JUGGERNAUT/WETH 1% search-row 24h volume, not Blockscout token volume_24h 4244639. Reserve 485702.46 is that pool. DexScreener 1727572.61 / 487000.38 is the same pair, different aggregator. [claim S1 S6 S7]
- Adversarial: the strongest contrary reading is that the $1.40M JUGGERNAUT/WETH 0.3% book or the Pons-tagged @juggernautonrh HOODon token is canonical. Those are different CAs and a different handle; the site and liquidityPool() both name 0xD732…3B88 / 0x588b…2746. [inference S7 S8 S21]

## Sources

- S1 — Token 0xD732…3B88 The Juggernaut / JUGGERNAUT.
- S2 — create tx 0xbbb27474…3b1f.
- S3 — TokenDeployed and PoolCreated logs on 0xbbb2…3b1f.
- S4 — LaunchToken verified source.
- S5 — eth_getCode, name, symbol, launchFactory, pairToken, liquidityPool.
- S6 — latest/dex/tokens JUGGERNAUT 0xD732…3B88.
- S7 — search/pools JUGGERNAUT on robinhood.
- S8 — juggernautrh.com.
- S9 — Our website is live.
- S10 — t.me/juggernaut_rh.
- S11 — There are 0 intentions to migrate.
- S12 — the juggernaut.
- S13 — Biggest projects on Robinhood.
- S15 — search q=JUGGERNAUT.
- S16 — Token 0x6b3A…9A17 The Juggernauts / JUGGERNAUT.
- S17 — Address 0x588b…2746 UniswapV3Pool.
- S18 — Address 0xD9eC…FccB Launch Factory.
- S20 — Prior GO-LIVE trending JUGGERNAUT/WETH.
- S21 — Same-name Juggernaut handles.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:26:00Z; methodology_version: proofline-v1.0.
