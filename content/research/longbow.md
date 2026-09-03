---
slug: longbow
coverage: stub
methodology_version: proofline-v1.0
---

# Longbow — research record

## Identity

Longbow is classified as Credit aggregation layer.

Isolated Morpho Blue markets on Robinhood Chain: a user posts Stock Tokens, PONS or other collateral and borrows USDG without selling the position. Suppliers deposit USDG into Longbow-curated vaults that allocate across those markets. BOW is the protocol token, launched through Pons v2 and paired to SPY on Uniswap v4. @longbowlend runs longbow.cash.

Themes: lending, rwa, vault, nft, stock-paired:SPY

## Deployment

BOW token (PonsV2LauncherToken): 0x451b42A15100C340CA12F7c66DE06fac5EA2D751 on robinhood-chain. [verified S13 S14 S24]

Longbow Core USDG vault (lbcoreUSDG): 0x026df18fbd2A7639089D0a16293383ec687A5Ca1 on robinhood-chain. [verified S16 S18 S20]

Longbow USDG MetaMorpho V1_1 vault: 0x8cb8AA35228c96C1C4E956E69AbAEBCc2aA7Dcfe on robinhood-chain. [claim S17 S21]

BOW StakingRewards: 0xEba502e1177f5fad9432c2deb273569D8381e01A on robinhood-chain. [claim S19 S22]

Core vault owner Safe (SafeL2): 0x396ae0BD5623c3750e15fd222770F1e972153ED4 on robinhood-chain. [verified S25 S26]

Morpho Blue (settlement primitive; not Longbow-owned): 0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010 on robinhood-chain. [verified S23]

BOW/USDG Ramses v3 pool: 0x95D1b62891531b9207aD9C79a021bDf6BE452920 on robinhood-chain. [claim S15 S27]

## Control

`owner()` on Core USDG vault `0x026df18…` returns Safe `0x396ae0BD5623c3750e15fd222770F1e972153ED4`. `getThreshold` is 2; `getOwners` returns three addresses. The explorer names the shell a SafeL2 `master_copy` proxy; the shell itself is not source-verified. No timelock address appeared on the site, docs or explorer labels. [verified S20 S25 S26]

`owner()` on MetaMorpho V1_1 `0x8cb8AA…` and StakingRewards `0xEba502…` returns EOA `0x1bf704707e9F3f407EbC9364fDAeD08C39893770`, which also created the staking contract. `/api/stats/rich` names feeRecipient `0xa4c8e4ed1d6a85b68032f4b921b20a664ea36413`, an address with no code. BOW `owner()` reverts. [verified S21 S22]

## Security

Site copy attributes Morpho Blue's audit set (Cantina, Spearbit, Trail of Bits, ABDK) and NFT-escrow reviews (ChainSecurity, Halborn) to the settlement and escrow layers. No Longbow overlay audit report was linked from the site, docs, X bio or GitHub this pass. Morpho Blue at `0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010` is Morpho's verified primitive, not a Longbow-owned contract. [claim S10] [verified S23] [unknown]

## Engineering

_Research pending._

## Team

Public identity is the site and `@longbowlend`. The home page canonical is `https://www.longbow.cash/`; the JS footer links `https://x.com/longbowlend`. The X bio URL field is `longbow.cash` and `t.co/MGNl5p08g7` refreshes to `t.me/longbowlend`. Telegram preview title is Longbow Protocol. No legal name, repository or named operator appeared on those pages. github.com/LongbowFinance returned 404. [verified S9 S10 S11] [claim S12]

Census LONG (`app.long.xyz`, `@longdotxyz`) and Longshot (`uselongshot.xyz`, `@uselongshot`) share a name stem only. A second BOW ticker `0xf56D9aDAA11dc278638adcDCA8Cf697DDC008ba3` is a DopplerERC20V1 clone with two holders. [claim S9 S11] [verified S28]

## Product and economics

Borrowers post listed collateral into isolated Morpho Blue markets and draw USDG (or, on a few rows, WETH). The official `/api/markets` list this pass had 53 rows. Stock rows such as SPY/USDG use Chainlink and 62.5% LLTV; PONS, GLD, RDDT, AI and NOTHING use TWAP oracles and 38.5% LLTV. PONS/USDG marketId `0xaba3ac50…` showed utilization 1 with 51769.68 USDG supplied and borrowed. [claim S17]

Suppliers deposit USDG into Longbow-curated vaults. `/api/v2/vaults` names Longbow Core USDG (`lbcoreUSDG`) at `0x026df18fbd2A7639089D0a16293383ec687A5Ca1`, asset USDG `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`, with a 10% performance fee and allocations across named Morpho marketIds (ETH, SPY, NVDA and others). A smaller MetaMorpho V1_1 USDG vault sits at `0x8cb8AA35228c96C1C4E956E69AbAEBCc2aA7Dcfe`. [claim S18 S21]

BOW is a Pons v2 launch token. `creator_address_hash` is PonsV2LaunchDeployer `0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42`; the creation transaction is `launchAndBuy` on PonsV2LaunchAndBuy `0xe33E9E479dF8802cb0866d5d05258bEc4cF62948` at 2026-08-08T18:17:53Z. The deepest book this pass is Uniswap v4 BOW/SPY (poolId `0xdba909ac…`, quote SPY `0x117cc2133c37B721F49dE2A7a74833232B3B4C0C`). A Ramses v3 BOW/USDG pool exists at `0x95D1b62891531b9207aD9C79a021bDf6BE452920`. [verified S13 S15 S24]

Site copy also names zero-fee flash loans, NFT lending with escrow, BOW staking for USDG, and an MCP endpoint. Those paths were not reproduced as contracts this pass beyond StakingRewards `0xEba502e1177f5fad9432c2deb273569D8381e01A`. [claim S10 S19 S22]

Official `/api/stats` on chainId 4663 this pass: TVL 588602.3 USD, totalBorrowed 261964.58 USD, 53 markets, 32 depositors, 0 recentLiquidations, 141056716.62 BOW staked. That is the project's own API, not a DefiLlama chain slice. api.llama.fi/protocol/longbow returned HTTP 400. [claim S16 S35]

DexScreener Uniswap v4 BOW/SPY (not an all-pairs total): liquidity 182286.08 USD, 24h volume 832979.57 USD, price 0.004873 USD, fdv 4873206 USD. Blockscout token: 5753 holders, circulating_market_cap 4843328.84 USD, total supply 1e9 BOW. [verified S14 S15]

`@longbowlend` posted TVL figures of 300000 USD on 2026-09-01 and 500000 USD on 2026-09-02. Those posts are not the same observation as `/api/stats` 588602.3 USD later the same day. [claim S34 S39]

## Communications

Greenwood integration posted for Longbow credit markets [claim S32]

Official account posted TVL crossed $500,000 [claim S34]

Builders program posted: 50% of fees to integrators [claim S36]

NOTHING/USDG market posted with a dedicated vault [claim S37]

AI/USDG market posted for Artificial Inu collateral [claim S38]

Official account posted TVL crossed $300,000 [claim S39]

## Findings

Isolated Morpho markets inherit the oracle and LLTV chosen at creation; the official API now lists GLD/USDG at 38.5% LLTV after a 62.5% post. PONS/USDG is fully utilized on the API. Official posts have tagged an Ethereum cashtag as PONS that has no code on 4663. Core vault source is unverified; v1 MetaMorpho and staking are owned by one EOA. [claim S9]

- Official `/api/markets` lists GLD/USDG at 38.5% LLTV after the 24 Aug post said 62.5%; Morpho market parameters are immutable, so this may be a different marketId. [disputed S17 S31]

- PONS/USDG utilization is 1 on the API (51769.68 USDG borrowed against the same supply). [claim S17]

- Official posts tagged `ethereum:0x07f5b682…` as PONS; that address has no code on 4663. Flag: wrong-chain, ca-collision. [verified S29 S32]

- Core USDG vault source is unverified; v1 MetaMorpho and staking are owned by one EOA with no timelock found. [verified S20 S21 S22]

- No Longbow overlay audit report was located; Morpho Blue audits named in site copy cover the settlement primitive. [claim S10] [unknown]

- Same-ticker BOW `0xf56D9aDA…` is a different contract. Flag: ticker-only. [verified S28]

- Receipts: www.longbow.cash HTML and JS, docs.longbow.cash, X profile and named status URLs, t.me/longbowlend, Blockscout address/token/tx APIs, DexScreener token-pairs, Longbow `/api/stats` `/api/markets` `/api/v2/vaults` `/api/stats/rich`, DefiLlama protocol/longbow (400), github.com/LongbowFinance (404), and RPC eth_getCode/eth_call were opened on 2026-09-02; excerpts are copied from those responses. [verified S9 S13 S15 S16]

- Numbers: 588602.3 USD is `/api/stats` tvl on chainId 4663, not a DefiLlama row; 832979.57 USD is DexScreener Uniswap v4 BOW/SPY volume.h24, not an all-pairs or all-chains total; 5753 is Blockscout holders_count; 500000 USD is an official post, not the API print. [claim S14 S15 S16 S34]

- Adversarial: the strongest contrary reading is that Longbow is LONG, Longshot, bow.fun or the Doppler BOW clone, or that census `announced` still holds because Morpho marketIds were not eth_called. Token name Longbow, PonsV2LauncherToken source, Uniswap v4 BOW/SPY book, and site↔handle cross-link argue against a merge; the pool and token on 4663 meet the mainnet bar even while market-id params stay API claims. [inference S11 S13 S15 S28]

## Sources

- S9 — longbow.cash home HTML.
- S10 — App bundle index-DBXRuHVN.js.
- S11 — @longbowlend profile.
- S12 — t.me/longbowlend preview.
- S13 — Address 0x451b42A15100C340CA12F7c66DE06fac5EA2D751.
- S14 — Token Longbow (BOW).
- S15 — BOW token-pairs on robinhood.
- S16 — /api/stats.
- S17 — /api/markets.
- S18 — /api/v2/vaults.
- S19 — /api/stats/rich.
- S20 — Core USDG vault 0x026df18….
- S21 — MetaMorphoV1_1 0x8cb8AA….
- S22 — StakingRewards 0xEba502….
- S23 — Morpho 0x9D53d5….
- S24 — BOW creation tx launchAndBuy.
- S25 — Core vault owner Safe 0x396ae0….
- S26 — Safe getThreshold / getOwners.
- S27 — RamsesV3Pool 0x95D1b628….
- S28 — Same-ticker BOW 0xf56D9aDA….
- S29 — 0x07f5b682… on chain 4663.
- S31 — GLD/USDG market post.
- S32 — Greenwood integration post.
- S34 — TVL crossed $500,000.
- S35 — protocol/longbow.
- S36 — Builders fee share post.
- S37 — NOTHING/USDG market post.
- S38 — AI/USDG market post.
- S39 — TVL crossed $300,000; PONS leads.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:59:00Z; methodology_version: proofline-v1.0.
