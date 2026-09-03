---
slug: john
coverage: stub
methodology_version: proofline-v1.0
---

# JOHN — research record

## Identity

JOHN is classified as Uniswap-pool launchpad.

A one-billion-supply ERC-20 named Little John (JOHN) on Robinhood Chain. The deployer called enableTrading one block after create, which spun a Uniswap v2 JOHN/WETH pair. Traders buy and sell JOHN against WETH on that book. littlejohnhood.fun publishes the CA and links @little_john_x.

Themes: memecoin

## Deployment

JOHN token (unverified ERC-20): 0xE170dC96ca10103E0D4C5d9293C5A3A72Ee365a5 on robinhood-chain. [verified S1 S5]

Uniswap v2 JOHN/WETH pair: 0xD5b89CceE18C1eD101B793f4DBac34028963bD1C on robinhood-chain. [verified S6 S7 S8]

UniswapV2Factory (pair factory()): 0x8bcEaA40B9AcdfAedF85AdF4FF01F5Ad6517937f on robinhood-chain. [verified S7 S16]

Deployer / owner() / taxWallet() (EIP-7702): 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe on robinhood-chain. [claim S1 S4 S5]

EIP-7702 implementation on owner: 0x37A593d139ece78064032c19c943FF4f794dd2BA on robinhood-chain. [claim S4 S5]

WETH (pair quote; rail): 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 on robinhood-chain. [claim S7 S17]

## Control

_Research pending._

## Security

owner() and taxWallet() return 0x0B10d67A8360bce3815B453e8895366b2FbED5Fe. That account has 23-byte EIP-7702 code pointing at 0x37A5…d2BA. OwnershipTransferred on create set this owner. Token is_verified false. No audit URL this pass. [verified S4 S5 S18] [unknown]

## Engineering

_Research pending._

## Team

littlejohnhood.fun embeds 0xe170…365a5 in Uniswap URLs and links @little_john_x. CoinGecko maps homepage and twitter_screen_name to this CA. Handle bio has no CA; the back-link is the 13 Jul DexScreener pool post. [verified S12 S13 S14]

@MakeEthAliving on 12 Jul named LaunchToken 0x1E96…4fC4 as OG Little John and told readers not to buy 0xE170…365a5. That other CA has 58 holders. [claim S15 S20]

## Product and economics

Direct CREATE at 2026-07-12T03:56:18Z minted 1e18 raw units (9 decimals, 1e9 JOHN) to the token. One block later enableTrading() from the same 0x0B10…d5Fe account created Uniswap v2 pair 0xD5b8…bD1C quoted against WETH. factory() on the token reverts; the pair's factory() is UniswapV2Factory 0x8bcE…937f. [verified S3 S5 S6 S7 S19]

Site copy says 0% tax and LP burned. UNI-V2 LP 999999999999999000 of 1000085478857322169 sits at 0xdead. buyTax()/sellTax()/taxFee() revert, so those getters do not reproduce the 0% figure. [verified S12 S21] [claim S12]

Live Gecko JOHN/WETH pool: volume_usd.h24 0, reserve_in_usd 114.5584500754, fdv_usd 521150.94, market_cap_usd 550660.9143 at 2026-09-03T04:48:20Z. RPC reserves ~0.023629 WETH + ~89647.9 JOHN. [verified S7 S8]

CoinGecko little-john last_updated 2026-07-13T02:32:40Z: price 0.01719516, mc/fdv 17195155, volume 167501374. Blockscout circulating_market_cap and volume_24h echo CoinGecko. DexScreener tokens API returned no pairs. Holders 3656, transfers 35151. [claim S1 S10 S11]

## Communications

DexScreener tokens API returned no pairs for this CA [verified S10]

@little_john_x posted the JOHN/WETH DexScreener URL [claim S14]

X account named a different Little John CA as OG [claim S15]

@little_john_x posted a CoinGecko listing for $JOHN [claim S22]

## Findings

Token source is unverified and owner() is still the EIP-7702 deployer. CoinGecko/Blockscout market figures are last_updated 2026-07-13 and do not match the live pool. Other JOHN tickers on DexScreener are easy to confuse with this CA. [claim S12]

- Token source unverified; owner() still the EIP-7702 deployer. [verified S1 S5]
- CoinGecko/Blockscout tape is last_updated 2026-07-13 versus live Gecko pool volume 0 / reserve $114.56. [verified S8 S11]
- ca-collision with other Little John / JOHN CAs and with packed johndog (JOHNDOG / SGOV). [verified S10 S20]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/creator/create tx/pair/factory/WETH/LP holders, RPC name/symbol/owner/reserves, Gecko token+pool (first GET 200), DexScreener tokens+search, CoinGecko, littlejohnhood.fun, @little_john_x posts, 4byte enableTrading, and the other Little John CA were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S8 S12]
- Numbers: 114.5584500754 is the Gecko JOHN/WETH pool reserve, not CoinGecko 17195155. Volume 0 is that pool's h24, not CoinGecko 167501374. Holders 3656 is Blockscout holders_count. [verified S1 S8]
- Adversarial: the strongest contrary reading is that 0x1E96…4fC4 is the same project or that CoinGecko's $17.2M tape is current. Blockscout shows a different LaunchToken CA with 58 holders; CoinGecko last_updated is 2026-07-13; live pool volume is 0. [inference S8 S11 S20]

## Sources

- S1 — Token 0xE170…365a5 Little John / JOHN.
- S3 — Create tx 0x7119a0f9…f422.
- S4 — Creator 0x0B10…d5Fe EIP-7702.
- S5 — eth_getCode, name, symbol, owner() on JOHN.
- S6 — enableTrading tx 0x7639a21a…aeb4.
- S7 — pair token0/token1/getReserves/factory.
- S8 — JOHN/WETH Uniswap v2 pool.
- S10 — latest/dex/tokens JOHN and search.
- S11 — coins/little-john.
- S12 — littlejohnhood.fun.
- S13 — X profile Little John.
- S14 — Dexscreener Updated.
- S15 — Named a different Little John CA as OG.
- S16 — UniswapV2Factory 0x8bcE…937f.
- S17 — WETH 0x0Bd7…AD73.
- S18 — Create tx logs OwnershipTransferred and mint.
- S19 — 0x8a8c523c enableTrading().
- S20 — Other Little John 0x1E96…4fC4.
- S21 — UNI-V2 LP holders 0xD5b8…bD1C.
- S22 — $JOHN listed on CoinGecko.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:56:00Z; methodology_version: proofline-v1.0.
