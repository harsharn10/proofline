---
slug: shrub
coverage: stub
methodology_version: proofline-v1.0
---

# SHRUB — research record

## Identity

SHRUB is classified as Launchpad-graduated token.

An EOA-deployed one-billion-supply ERC-20. enableTrading created a Uniswap v2 SHRUB/WETH pair and seeded liquidity. Traders buy and sell SHRUB against WETH. lilshrub.fun posts the contract; DexScreener lists @lilshrub_RH, whose bio is a FAN account.

Themes: memecoin, hedgehog

## Deployment

SHRUB token (Lil' Shrub ERC-20): 0x5d9144d2d017386519a7134Fcc7f1E4bA22f920c on robinhood-chain. [verified S1 S3 S4]

Uniswap v2 SHRUB/WETH pair: 0x4a6A85252A6F6B383A5f747259EE157e65fF1307 on robinhood-chain. [verified S5 S12 S13]

UniswapV2Factory (pair creator): 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f on robinhood-chain. [verified S5 S12 S14]

Uniswap V2 router (enableTrading hardcoded): 0x89e5DB8B5aA49aA85AC63f691524311AEB649eba on robinhood-chain. [verified S3 S5 S13]

WETH (pair quote): 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 on robinhood-chain. [claim S5 S6 S18]

## Control

owner() returns the zero address. Verified source addBlocked, addB, approveTrade, and enableTrading are onlyOwner. _taxWallet is set to constructor msg.sender; manualSwap, manualSend, and reduceFee require that wallet. [verified S3 S4]

## Security

UniswapV2Pair LP balanceOf(deployer) is 277561577247222827089 of totalSupply 278578467179790637327 at block 53126178; 0xdead holds 999999999999999000. Site copy says 100% LP burnt. No audit report URL this pass. [verified S5] [claim S10] [unknown]

## Engineering

_Research pending._

## Team

lilshrub.fun posts the CA and the DexScreener pool and links @lilshrub_RH. Verified source header comments the same site, handle, and @shivon status 2094128160669311355. The handle bio embeds the CA and says FAN account. Flag unconfirmed-official. @lilshrub_RH_ and @lilshrub_RH_S copy the CA; flag copypasta-pattern. [claim S10 S11 S19]

## Product and economics

EOA 0x2451…C08B deployed SHRUB 0x5d91…920c at 2026-08-30T18:39:01Z (tx 0x808d…615f). enableTrading at 2026-08-30T18:41:45Z (tx 0x7582…544a) set Uniswap V2 router 0x89e5…9eba, called factory 0x8bcE…937f createPair against WETH, and addLiquidityETH. [verified S2 S3 S13]

Flagship pair is Uniswap v2 SHRUB/WETH 0x4a6A…1307. Gecko names dex uniswap-v2-robinhood. Quote token is WETH 0x0Bd7…AD73, not TSLA/SPCX/FAMI. Same-ticker LongLauncher SHRUB clones exist with much smaller books. [verified S6 S7 S9]

Gecko SHRUB/WETH 24h volume is 4410952.00 USD and reserve_in_usd is 164487.08 at 2026-09-03T04:07:00Z from the pool endpoint. fdv_usd is 9784126.67. Gecko token volume_usd.h24 is 4439897.42. [claim S7 S8]

DexScreener same pair: liquidity.usd 162882.82, volume.h24 4437066.72, fdv/marketCap 9836335. Blockscout holders_count 4798. Pair created 2026-08-30T18:41:45Z. [claim S1 S6]

Gecko trending_pools page 1 row 4 is this SHRUB/WETH book (vol 4440857.91 / reserve 162935.78); row 1 is CHUMP/WETH. Assignment lead of ~$6.78M vol / ~$147k liq was not the live pool slice this as_of. [claim S9]

## Communications

@lilshrub_RH posted SHRUB as top trending on Gecko [claim S16]

@gimoquoi posted that SHRUB source has a sell-block switch [claim S15]

@lilshrub_RH posted a CoinGecko lil-shrub listing [claim S17]

@shivon posted Lil' Shrub in a shrub [claim S20]

## Findings

USD liquidity on the SHRUB/WETH book counts both sides. lilshrub.fun says LP is burnt; RPC shows the deployer still holds nearly all UniswapV2Pair tokens. @lilshrub_RH is a FAN-labelled handle. The verified source keeps onlyOwner block lists and a _taxWallet path. [claim S10]

- Quote token is WETH 0x0Bd7…AD73, not a Robinhood Stock Token. [verified S6 S18]
- Deployer 0x2451…C08B holds nearly all UniswapV2Pair LP at block 53126178. [verified S5]
- @lilshrub_RH is unconfirmed-official (FAN bio). [claim S11]
- Verified source has onlyOwner addBlocked and a _taxWallet path. [verified S3]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/create/enableTrading/factory/WETH, RPC name/symbol/owner/token0/getPair/LP balances, DexScreener, Gecko pool/token/trending, lilshrub.fun, @lilshrub_RH, @shivon, @gimoquoi were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S6 S7]
- Numbers: 4410952.00 is the Gecko SHRUB/WETH pool 24h volume, not the 4439897.42 token figure or Blockscout 11149252.76. Reserve 164487.08 is that pool. DexScreener 4437066.72 / 162882.82 is the same pair, different aggregator. [claim S6 S7 S8]
- Adversarial: the strongest contrary reading is that this is a stock-paired LongLauncher SHRUB or the in-flight CHUMP/WETH book. Live DexScreener/Gecko quote WETH at 0x5d91…920c / 0x4a6A…1307; CHUMP is 0x7144…cfb8; TSLA-paired SHRUB clones are other CAs. [inference S6 S9]

## Sources

- S1 — Token 0x5d91…920c Lil' Shrub / SHRUB.
- S2 — SHRUB creation tx 0x808d3c6c…615f.
- S3 — SHRUB verified source contracts/shrub.sol.
- S4 — eth_getCode, name, symbol, owner() on SHRUB.
- S5 — pool token0/token1, factory.getPair, LP balances.
- S6 — latest/dex/tokens SHRUB.
- S7 — SHRUB/WETH Uniswap v2 pool.
- S8 — Lil' Shrub token.
- S9 — Robinhood trending_pools page 1.
- S10 — Lil' SHRUB site.
- S11 — Lil' Shrub FAN profile.
- S12 — enableTrading tx logs PairCreated.
- S13 — enableTrading decoded input.
- S14 — Address 0x8bcE…937f UniswapV2Factory.
- S15 — Post naming a SHRUB sell-block switch.
- S16 — $SHRUB is Top trending Token on Geckoterminal.
- S17 — lil-shrub listed on CoinGecko.
- S18 — Token 0x0Bd7…AD73 WETH.
- S19 — Support account DM post.
- S20 — Lil' Shrub in a shrub.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:18:00Z; methodology_version: proofline-v1.0.
