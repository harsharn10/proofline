---
slug: ripe
coverage: stub
methodology_version: proofline-v1.0
---

# RIPE — research record

## Identity

Ripe Protocol is classified as RWA lending market.

A lending protocol that mints GREEN against tokenized stocks. Users deposit NVIDIA • Robinhood Token and other registry assets into Ripe vaults and borrow GREEN. Token 0x4D3f…883b is verified RipeToken on chain 4663; Uniswap v2 RIPE/NVDA 0x9b85…769D is protocol pool2, not a pad graduation. ripe.finance and @ripe_dao operate it.

Themes: lending, rwa, stock-paired:NVDA, stablecoin

## Deployment

RIPE token (RipeToken.vy): 0x4D3f37a965b21aB4122e92Dd41D2693E742c883b on robinhood-chain. [verified S1 S5 S14]

RipeHq registry: 0xD4e82AE1De673bba3B53386A2D2C630AE6630940 on robinhood-chain. [verified S2 S6 S14]

RipeGov (governance vault): 0xFa767a19c0C2B80D5A8d5b88be67de153Df1b2f2 on robinhood-chain. [claim S3 S14]

RIPE/NVDA Uniswap v2 pair (Llama pool2): 0x9b8537bE0FD5cf9B2AD495C5A85130D5bAe4769D on robinhood-chain. [verified S4 S5 S7 S8]

NVIDIA • Robinhood Token (pair quote / collateral rail): 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC on robinhood-chain. [verified S5 S7 S12 S16]

GREEN token: 0x355bB7F0f6c730e4460d620420a300fa08FF82F3 on robinhood-chain. [claim S6 S14]

UniswapV2Factory (pair.factory): 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f on robinhood-chain. [claim S5 S17]

CCIP admin Safe (token getCCIPAdmin / constructor): 0xe488a42D33b3Af5d3E5Cd5680938d8369716D1bf on robinhood-chain. [claim S5 S18]

## Control

token owner() reverts. isPaused() is false. getCCIPAdmin() is Safe 0xe488…d1bf. ABI includes pause, mint, setBlacklist and a RipeHq change timelock (7200–50400 seconds). Deployer 0x2944…9237 has no code and also created RipeHq in the next block. [verified S5 S15 S18]

RipeToken and RipeHq are verified Vyper on Blockscout (RipeHq partially verified). Docs link ChainSecurity and Anatomist PDFs on hightop.com; those PDFs were not opened this pass. [verified S1 S2] [claim S22]

## Security

_Research pending._

## Engineering

_Research pending._

## Team

Official domain https://www.ripe.finance with twitter:site @ripe_dao. @ripe_dao bio names Robinhood Chain. GitHub Ripe-Foundation/ripe-protocol hosts RipeToken.vy. CoinGecko platforms.robinhood is this CA. discord.gg/hightop is DexScreener/Gecko-linked; flag unconfirmed-official for Discord only. [verified S10 S11 S19 S20]

Llama ripe-protocol is this token (same RH CA and pool2 pair), not a second census name. Distinct from packed AI/NVDA and in-flight microduck/orbio. [verified S13 S21]

## Product and economics

RipeToken 0x4D3f…883b is a 7437-byte Vyper contract (contracts/tokens/RipeToken.vy), created 2026-08-04T19:19:21Z by EOA 0x2944…9237. ripeHq() returns 0xD4e8…0940. RipeHq getAddr(3) returns the same token. api.ripe.finance lists RipeToken, GreenToken, RipeGov and NVDA collateral (vaultId 3, ltv 7000). [verified S1 S5 S6 S14 S16]

Uniswap v2 factory 0x8bcE…937f getPair(RIPE, NVDA) returns 0x9b85…769D, created 2026-08-28T21:00:05Z. Llama adapter pool2Tokens include that pair. Assets API maps the UNI-V2 LP to RipeGov vaultId 2. Secondary RIPE/USDG and RIPE/WETH books exist with far less liquidity. [verified S5 S7 S8 S21]

RIPE/NVDA Uniswap v2 24h volume is 1167264.78 USD and reserve_in_usd is 221791.89 at 2026-09-03T03:37:00Z from the Gecko pool endpoint. fdv_usd is 935328.28. Gecko token volume_usd.h24 is 1242637.37 across all pools. [claim S8 S9]

DexScreener same pair: liquidity.usd 221537.34, volume.h24 1168258.89, fdv 936687, marketCap 4082118. Blockscout holders_count 966. Pair created 2026-08-28T21:00:05Z. [claim S1 S7]

Llama ripe-protocol TVL is 304746.40 (Robinhood Chain 200773.25, Base 103973.15). That is protocol TVL, not the $222k pool reserve. [claim S13]

## Communications

@ripe_dao posted Ripe ecosystem growing on Robinhood [verified S23]

@ripe_dao posted Juice leaderboard for locked RIPE LP [verified S24]

@PhilippInvest posted GREEN 7% above peg [claim S25]

## Findings

Aggregator marketCap (~$4.1M) is not the pool FDV (~$935k) and likely blends Base RIPE 0x2A0a…dDC0 with this RH token. Pool USD reserve is RIPE plus NVDA, not USDG. Privileged pause/mint paths exist on RipeToken even though owner() reverts. Discord is aggregator-linked only this pass. [claim S10]

- Gecko/DexScreener marketCap (~$4.1M) is not pool FDV (~$935k) and may mix Base RIPE. [verified S7 S8 S19]
- Pool USD reserve is RIPE plus NVDA, not a USDG backstop. [claim S7 S8]
- RipeToken pause/mint and Safe CCIP admin were not fully mapped. [verified S5]
- Audit PDF scope vs the 4663 deploy was not opened. [claim S22]
- Discord is aggregator-linked only. [claim S7]

- Receipts: Blockscout token/hq/gov/pair/factory/Safe and the create tx, RPC name/ripeHq/getAddr/getPair, DexScreener, Gecko pool/token, Llama protocol+adapter, ripe.finance + addresses API, /rhj/assets, CoinGecko platforms, GitHub RipeToken.vy, docs audits page, and @ripe_dao posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12 S14]
- Numbers: 1167264.78 is the Gecko RIPE/NVDA pool 24h volume, not the 1242637.37 token all-pools figure. Reserve 221791.89 is that pool. Llama 304746.40 is protocol TVL. DexScreener 1168258.89 / 221537.34 is the same pair, different aggregator. [claim S7 S8 S9 S13]
- Adversarial: the assignment read this as a pad graduation vs a separate Llama Ripe Protocol. On-chain, CoinGecko, ripe.finance API and the Llama adapter use the same RH CA; this packet stays slug ripe and does not invent a second census row. [inference S14 S19 S21]

## Sources

- S1 — Token 0x4D3f…883b Ripe DAO Governance Token / RIPE.
- S2 — Address 0xD4e8…0940 RipeHq.
- S3 — Address 0xFa76…b2f2 RipeGov.
- S4 — Address 0x9b85…769D UniswapV2Pair.
- S5 — eth_getCode, name, ripeHq(), pair token0/token1/getPair.
- S6 — RipeHq getAddr registry ids.
- S7 — latest/dex/tokens RIPE.
- S8 — RIPE/NVDA Uniswap v2 pool.
- S9 — Ripe DAO Governance Token.
- S10 — ripe.finance homepage.
- S11 — Ripe Protocol X profile.
- S12 — GET /rhj/assets NVDA Stock Token.
- S13 — Ripe Protocol TVL.
- S14 — GET /api/chains/addresses?chain=robinhood.
- S15 — RipeToken creation tx 0x764bb807…9a4e.
- S16 — GET /api/ripe/assets?chain=robinhood NVDA.
- S17 — Address 0x8bcE…937f UniswapV2Factory.
- S18 — Address 0xe488…d1bf SafeProxy.
- S19 — ripe-dao-governance-token platforms.
- S20 — Ripe-Foundation/ripe-protocol RipeToken.vy.
- S21 — ripe adapter robinhood ripeToken and pool2.
- S22 — Audits | Ripe Protocol.
- S23 — Ripe ecosystem on Robinhood is growing.
- S24 — Juice leaderboard is live.
- S25 — GREEN 7% above peg.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:45:00Z; methodology_version: proofline-v1.0.
