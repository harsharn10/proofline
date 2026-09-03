---
slug: yolo
coverage: stub
methodology_version: proofline-v1.0
---

# YOLO — research record

## Identity

YOLO is classified as Launchpad-graduated token.

PonsLaunchFactory launched a fixed-supply ERC-20 into a Uniswap v3 YOLO/WETH pool. Traders buy and sell YOLO on that book. Constructor deployer is EOA 0xE0b5…3e55; yolorh.com embeds the CA and @yolorobinhood_ posted it.

Themes: memecoin, launchpad, amm

## Deployment

YOLO token (PonsLauncherToken): 0x62C71cd34a52c30d894419CBcc55Db2aFA8032eA on robinhood-chain. [verified S1 S2 S5]

PonsLaunchFactory (token creator / launchFactory()): 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB on robinhood-chain. [verified S3 S4 S5]

YOLO/WETH Uniswap v3 pool (canonical liquidityPool): 0x52FcB1D83191E06ef2d2D9f460609CA22a923558 on robinhood-chain. [verified S4 S5 S7 S10]

WETH (pairToken / quote): 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 on robinhood-chain. [verified S5 S7 S11]

PonsLaunchLocker (UNI-V3-POS 129850): 0x736D76699C26D0d966744cAe304C000d471f7F35 on robinhood-chain. [claim S4 S12]

## Control

Token owner() reverts. Deployer 0xE0b5…3e55 has no code. Factory owner() returns Safe 0x263ed295…19Dd. setInitialBuyRecipient is launchFactory-only. [verified S5]

## Security

PonsLauncherToken and PonsLaunchFactory are fully verified on Blockscout (contracts/src/PonsLauncherToken.sol, contracts/src/PonsLaunchFactory.sol, compiler v0.8.30). No audit report URL was located this pass. [verified S2 S3] [unknown]

## Engineering

_Research pending._

## Team

yolorh.com embeds CA 0x62C71c…32eA and sets twitter:site to @yolorobinhood_. That account posted the CA on 2026-09-02T18:36:19Z; bio matches on-chain description THE SPIRIT OF GOING ALL-IN. Constructor socials were empty at launch. t.me/YoloCoinRH is DexScreener-listed with 131 subscribers and no CA in the public preview; flag third-party-link. X user search also returned @yolorobinhoodx, @YOLOROBINHOOD, and @Yolo_robinhood; flag handle-collision. [verified S13 S14] [claim S15 S20]

## Product and economics

PonsLaunchFactory 0xA5aA…1feB clones PonsLauncherToken. launchToken from 0xE0b5…3e55 at 2026-07-15T07:15:15Z minted YOLO / YOLO supply 1e9*1e18 into Uniswap v3 pool 0x52Fc…3558 fee 10000 quoted against WETH. launchFactory() on the token returns that factory. liquidityPool() returns the same v3 pool. LP NFT 129850 was transferred to PonsLaunchLocker 0x736D…7F35. [verified S4 S5 S12]

Verified token source says launch protections apply only to canonical-pool buys during restrictionBlocks (366), then the token is a plain ERC-20. Constructor socials were empty. Secondary YOLO/USDG and YOLO/ETH books exist on DexScreener with far less liquidity than the WETH book. [verified S2 S7]

YOLO/WETH Uniswap v3 24h volume is 1291554.13 USD and liquidity.usd is 496388.58 at 2026-09-03T04:32:00Z from DexScreener. fdv/marketCap is 13474583. Gecko pool volume_usd.h24 is 1290205.57 and reserve_in_usd is 494290.36. Gecko token volume_usd.h24 is 1724566.66 across all pools, not the WETH book. [claim S7 S8 S9]

Blockscout holders_count 11488. Pair created 2026-07-15T07:15:15Z. [claim S1 S7]

## Communications

@BeerdHead posted $YOLO on Robinhood Chain [claim S18]

@yolorobinhood_ posted the YOLO contract address [verified S14]

## Findings

USD liquidity on the YOLO/WETH book counts both sides. Constructor socials were empty, so the site and handle are later surfaces. Other X handles reuse the YOLO name. Claim-portal and vote posts reuse the CA on netlify hosts. [claim S13]

- Constructor socials are empty; site and handle are later surfaces. [verified S2 S13]
- Other X handles share the YOLO / Robinhood naming. [claim S20]
- Claim-portal and vote posts reuse the CA on netlify hosts. [claim S16 S17]
- No audit report URL this pass. [unknown]
- Quote token is WETH; pool USD reserve is YOLO plus WETH. [claim S7 S8]

- Receipts: Blockscout token/source/factory/pool/WETH/locker and launch tx 0xc276…7644, RPC name/symbol/launchFactory/liquidityPool/socials/owner, DexScreener, Gecko token/pool (first GET 200), yolorh.com, @yolorobinhood_ CA post, Telegram preview, and X latest were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S13]
- Numbers: 1291554.13 is the DexScreener YOLO/WETH v3 24h volume, not the 1724566.66 Gecko token all-pools figure. Liquidity 496388.58 is that book. Holders 11488 is Blockscout token holders_count. [claim S1 S7 S9]
- Adversarial: the strongest contrary reading is that YOLO is an official Pons or Robinhood product. Factory is PonsLaunchFactory but the token is a separate ERC-20; yolorh.com / @yolorobinhood_ are not ponsfamily.com / @ponsdotfamily. [inference S3 S13]

## Sources

- S1 — Token 0x62C71c…32eA YOLO / YOLO.
- S2 — Verified source PonsLauncherToken 0x62C71c…32eA.
- S3 — Address 0xA5aA…1feB PonsLaunchFactory.
- S4 — launchToken tx 0xc276b588…7644.
- S5 — eth_getCode, name, symbol, launchFactory() on YOLO.
- S7 — latest/dex/tokens YOLO.
- S8 — YOLO/WETH Uniswap v3 pool.
- S9 — YOLO token.
- S10 — Address 0x52Fc…3558 UniswapV3Pool.
- S11 — Token 0x0Bd7…AD73 WETH.
- S12 — Address 0x736D…7F35 PonsLaunchLocker.
- S13 — $YOLO - You Only Live Once.
- S14 — Posted the YOLO CA.
- S15 — t.me/YoloCoinRH.
- S16 — Attention $YOLO Family vote post.
- S17 — $YOLO claim portal post.
- S18 — $YOLO on Robinhood Chain.
- S20 — YOLO robinhood handle collision set.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:40:00Z; methodology_version: proofline-v1.0.
