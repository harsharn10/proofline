---
slug: chump
coverage: stub
methodology_version: proofline-v1.0
---

# CHUMP — research record

## Identity

CHUMP is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 with verified ChumpCoin.sol on Robinhood Chain. The constructor seeds a Uniswap v3 CHUMP/WETH 1% pool. Traders buy and sell CHUMP against WETH (and a thin USDG book). Official site cc21b.meme and handle @ChumpCoinX cross-link the contract address.

Themes: memecoin, amm:WETH, graduation

## Deployment

CHUMP token (ChumpCoin.sol): 0x0E0d2C89a5a019FE1cF762e5e33187631DACC21B on robinhood-chain. [verified S1 S2 S5]

Uniswap v3 CHUMP/WETH 1% pool (mainPool): 0x714442e9A611f8561A7dF108D6d925132937cFb8 on robinhood-chain. [verified S5 S8 S16]

UniswapV3Factory (token V3_FACTORY): 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA on robinhood-chain. [claim S2 S16]

NonfungiblePositionManager (constructor _positionManager): 0x73991a25C818Bf1f1128dEAaB1492D45638DE0D3 on robinhood-chain. [claim S2 S6 S16]

Team.finance lockNFT proxy: 0x3A7De5F29557405f5d9Fd06B570a53B966a78E8e on robinhood-chain. [claim S6 S16]

WETH9 (token constant / pair quote): 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 on robinhood-chain. [claim S2 S5 S7]

## Control

limitsActive is now false (LimitsRemoved 2026-08-10T19:57:31Z). owner() is 0x0 after renounceOwnership 2026-08-11T01:43:01Z. Source onlyOwner paths are addAmmPool, setExcludedFromLimit, removeLimits, transferOwnership, and renounceOwnership (renounce requires !limitsActive). Deployer has no code. [verified S2 S4 S5]

## Security

Team.finance lockNFT tx 0x2d7b…46c0 (2026-08-18T15:40:54Z) targets unverified proxy 0x3A7D…8E8e, NFT tokenId 518773, unlockTime 2026-09-17T15:40:01Z, withdrawal 0x5BAD…4B20. Site labels CertiK Audit Pending; no report URL this pass. [verified S6 S10] [unknown]

## Engineering

_Research pending._

## Team

Official domain https://cc21b.meme posts the CA and @ChumpCoinX. @ChumpCoinX profile website is cc21b.meme. t.me/CHUMPCOIN21B preview embeds the CA, site, and handle (749 subscribers). @ChumpCoinX_X, @ChumpCoiniX, and @ChumpCoinX_ post the same CA; flag handle-collision. No GitHub repository this pass. [verified S10 S13 S14] [claim S18]

## Product and economics

ChumpCoin.sol is a non-proxy ERC-20 (5225 bytes). constructor(name Chump Coin, symbol CHUMP, supplyWhole 1e9, positionManager 0x7399…0D3) minted 1e27 to the deployer and set mainPool to poolFor(10000) against WETH9 0x0Bd7…AD73 on UniswapV3Factory 0x1f7d…2EfA. That pool is 0x7144…cFb8. Source has no tax fields. [verified S2 S3 S5]

create tx 0xb07d…a613 from EOA 0x5BAD…4B20 at 2026-07-31T01:44:31Z. DexScreener also lists Uniswap v4 CHUMP/ETH books and CHUMP/USDG 4% 0x0e80…f49b with liquidity.usd 184.97 and volume.h24 13.67. [verified S3 S7]

CHUMP/WETH Uniswap v3 1% 24h volume is 5566773.13 USD and reserve_in_usd is 1100985.30 at 2026-09-03T04:05:15Z from the Gecko pool endpoint. fdv_usd is 37562528.56. Gecko token volume_usd.h24 is 5583718.82 across all pools, not the WETH book. [claim S8 S9]

DexScreener same pair: liquidity.usd 1106038.37, volume.h24 5605964.08, fdv/marketCap 38005324. Blockscout holders_count 4486. Pair created 2026-07-31T01:44:31Z. [claim S1 S7]

Gecko trending_pools duration=24h listed CHUMP/WETH 1% as row 1 (volume 5564885 / reserve 1099762). Assignment lead of prior trending ~$1.07M liq / ~$4.87M vol is the same book; live reserve is $1.10M and live volume is $5.57M. [claim S8 S17 S20]

## Communications

Crypto.com listed CHUMP in the crypto.com/us app [claim S11]

@bubblemaps posted that CHUMP is 80% bundled [claim S12]

## Findings

USD liquidity figures on the CHUMP/WETH book count both sides. Site copy says liquidity is locked forever; the lockNFT call decoded on Blockscout uses unlockTime 2026-09-17T15:40:01Z with withdrawal address equal to the deployer. A same-ticker DropERC20 clone and several other X handles share the name. [claim S10]

- lockNFT unlockTime is 2026-09-17T15:40:01Z while site copy says forever; withdrawal address is the deployer EOA. [verified S6 S10]
- Same-ticker DropERC20 clone 0xEc0a…278a and Pons-v2 CHUMP books exist. Flag ca-collision. [verified S16 S19]
- Other X handles post the canonical CA. Flag handle-collision. [claim S18]
- No CertiK report URL this pass. [unknown]
- @bubblemaps posted an 80% bundled claim that was not reproduced on a holder map this pass. [claim S12]

- Receipts: Blockscout token/source/create/renounce/lockNFT/pool/factory/NPM/locker/collision, RPC name/symbol/owner/limits/mainPool, DexScreener token and search, Gecko pool/token/trending, cc21b.meme, @ChumpCoinX profile, Telegram preview, @cryptocom, @bubblemaps, crypto.news, and the GO-LIVE trending capture were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S10]
- Numbers: 5566773.13 is the Gecko CHUMP/WETH 1% pool 24h volume, not the 5583718.82 token all-pools figure. Reserve 1100985.30 is that pool. DexScreener 5605964.08 / 1106038.37 is the same pair, different aggregator. Holders 4486 is Blockscout, not the collision token's 9059. [claim S1 S7 S8 S9]
- Adversarial: the strongest contrary reading is that CHUMP is a stock-paired pad token or that the $4.54M CHUMP/WETH book on 0xEc0a…278a is the same asset. Canonical CA is custom ChumpCoin.sol paired to WETH/USDG, not a stock token; the high-liq low-vol book is a different DropERC20 clone. [inference S7 S16 S19]

## Sources

- S1 — Token 0x0E0d…C21B Chump Coin / CHUMP.
- S2 — Verified ChumpCoin.sol source.
- S3 — Create tx 0xb07ddfa1…a613.
- S4 — renounceOwnership tx 0xb7b5ec55…e0a5.
- S5 — eth_getCode, ERC-20 and ChumpCoin views.
- S6 — lockNFT tx 0x2d7b09a9…46c0.
- S7 — latest/dex/tokens CHUMP.
- S8 — CHUMP/WETH Uniswap v3 1% pool.
- S9 — Chump Coin token.
- S10 — $CHUMP Official Coin of the People.
- S11 — Chump Coin ($CHUMP) listed in crypto.com/us app.
- S12 — If you buy $CHUMP, you are a chump.
- S13 — Chump Coin X profile.
- S14 — t.me/CHUMPCOIN21B.
- S16 — Pool, factory, NPM, locker, collision token.
- S17 — Robinhood trending_pools 24h.
- S18 — X handles using the ChumpCoinX name.
- S19 — latest/dex/search CHUMP collision pair.
- S20 — Robinhood trending pools (GO-LIVE.md 2026-09-02 capture).

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:12:00Z; methodology_version: proofline-v1.0.
