---
slug: pipedog
coverage: stub
methodology_version: proofline-v1.0
---

# PIPEDOG — research record

## Identity

PIPEDOG is classified as Launchpad-graduated token.

A fixed-supply ERC-20 that trades in a Uniswap v3 PIPEDOG/WETH 1% pool. An EOA minted 12,345,678,912 PIPEDOG to itself at construction and opened that pool on Robinhood Chain. Traders buy and sell PIPEDOG against WETH. pipedog.xyz publishes the contract on a Uniswap token URL and links @pipedog_.

Themes: memecoin, dog

## Deployment

PIPEDOG token (fixed-supply ERC-20): 0x5Cb6F181081301b44905F3ae15419112ecaBd8A6 on robinhood-chain. [verified S1 S2 S4]

Uniswap v3 PIPEDOG/WETH 1% pool: 0xB7f10f74B39291b9290b779978e19A7637C742D6 on robinhood-chain. [verified S5 S13 S14]

UniswapV3Factory (pool creator): 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA on robinhood-chain. [verified S5 S13 S15]

WETH (pair quote): 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 on robinhood-chain. [claim S5 S6 S13]

## Control

owner() reverts. Verified source has no owner, mint, burn, or transfer tax after construction. Deployer 0xa359…e814 has no code. [verified S2 S4]

## Security

pipedog.sol is fully verified (compiler v0.8.20, file_path pipedog.sol). No project audit report URL was located this pass. [verified S2] [unknown]

## Engineering

_Research pending._

## Team

pipedog.xyz title pipedog (PIPEDOG) includes the CA on a Uniswap explore URL and links https://x.com/pipedog_ and https://t.me/pipedogpipe. DexScreener and Gecko list the same surfaces. @pipedog_ bio matches site copy; latest posts this pass did not embed the CA. Flag unconfirmed-official for the reverse handle link and third-party-link for Telegram until a preview shows the CA. [claim S9 S10 S11]

Creator is EOA 0xa359…e814, not a known launchpad factory. Source comment names a launchbot template. Distinct from census Pons, Artificial Inu, UP, and hood.fun. [verified S1 S3]

## Product and economics

EOA 0xa359…e814 created pipedog.sol as a verified OpenZeppelin ERC-20. constructor(uint256 initialSupply) mints the full 12345678912e18 to msg.sender. Creation tx 0xfe28…49db at 2026-07-28T20:29:10Z has to: null. [verified S2 S3 S4]

The same EOA then called NonfungiblePositionManager 0x7399…0D3 createAndInitializePoolIfNecessary at 2026-07-28T20:31:52Z: token0 WETH, token1 PIPEDOG, fee 10000. Pool 0xB7f1…42D6 factory() returns UniswapV3Factory 0x1f7d…2EfA. DexScreener also lists a thinner Uniswap v4 ETH book. [verified S5 S6 S14]

DexScreener PIPEDOG/WETH v3 at 2026-09-03T04:46:20Z: liquidity.usd 8421367.62, volume.h24 2924896.88, fdv/marketCap 26740450. [claim S6]

Gecko same pool at 2026-09-03T04:48:00Z: volume_usd.h24 2907235.25, reserve_in_usd 8458551.02, fdv_usd 26447115.26. Gecko token volume_usd.h24 2899701.85 and total_reserve_in_usd 4192383.77 are all-pools, not the v3 book. [claim S7 S8]

Blockscout holders_count 8592; circulating_market_cap 26719434.38. Gecko info holders.count 8540 at 2026-09-03T04:27:02Z. Pair created 2026-07-28T20:31:52Z. [claim S1 S16]

## Communications

@olie100x posted PIPEDOG went to 65M [claim S18]

@onenine_btc listed pipedog as a $26M native OG meme [claim S12]

@pipedog_ posted this data seems suspiciously pipe coded [claim S11]

## Findings

USD reserve on the v3 book counts PIPEDOG plus WETH. @pipedog_ is listed on the site but did not embed the CA in latest posts this pass, so the reverse official link stays unconfirmed-official. No project audit URL was located. [claim S9]

- Reverse official handle is unconfirmed: @pipedog_ is listed on the site but latest posts did not embed the CA. [claim S9 S11]
- Telegram preview has no CA; flag third-party-link. [claim S10]
- Pool USD reserve is PIPEDOG plus WETH. [claim S6 S8]
- No project audit report URL this pass. [unknown]
- Deployer received the full 12.345B at construction; remaining deployer balance was not read this pass. [verified S3]

- Receipts: Blockscout token/source/create tx/pool/factory, RPC name/symbol/totalSupply/owner/token0/token1/fee/factory, DexScreener tokens and token-pairs v1, Gecko token/pool/info (first GET 200), pipedog.xyz, Telegram preview, @pipedog_, @onenine_btc, and @olie100x were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S6 S8 S9]
- Numbers: 2924896.88 is the DexScreener PIPEDOG/WETH v3 24h volume, not Gecko token all-pools 2899701.85. Reserve 8458551.02 is the Gecko pool slice; DexScreener liquidity.usd 8421367.62 is the same pair, different aggregator. Holders 8592 is Blockscout, not Gecko 8540. [claim S1 S6 S7 S8]
- Adversarial: the strongest contrary reading is that PIPEDOG is a Pons or hood.fun graduation. creator_address_hash is an EOA, creation tx has to: null, and UniswapV3Factory only created the pool. [inference S1 S3 S13]

## Sources

- S1 — Token 0x5Cb6…d8A6 pipedog / PIPEDOG.
- S2 — Verified source pipedog.sol.
- S3 — Token create tx 0xfe28aa54…49db.
- S4 — eth_getCode, name, symbol, totalSupply, owner() on PIPEDOG.
- S5 — token0, token1, fee, factory() on PIPEDOG/WETH pool.
- S6 — latest/dex/tokens PIPEDOG.
- S7 — pipedog token.
- S8 — PIPEDOG/WETH Uniswap v3 1% pool.
- S9 — pipedog (PIPEDOG) site.
- S10 — t.me/pipedogpipe.
- S11 — this data seems suspiciously pipe coded.
- S12 — Best non-equity paired meme's on Robinhood.
- S13 — Address 0xB7f1…42D6 UniswapV3Pool.
- S14 — Pool create tx 0x0abd4002…cab8.
- S15 — Address 0x1f7d…2EfA UniswapV3Factory.
- S16 — pipedog token info.
- S18 — I gave you $PIPEDOG, it went to 65M.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:50:00Z; methodology_version: proofline-v1.0.
