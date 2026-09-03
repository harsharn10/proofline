---
slug: dollar-1
coverage: stub
methodology_version: proofline-v1.0
---

# $1 — research record

## Identity

Trump $1 Coin is classified as Stock-paired token.

A Pons v2 memecoin that graduated into a locked Uniswap v4 pool quoted against the Robinhood DJT stock token. Traders buy and sell Trump $1 Coin ($1) on that DJT book and on later USDG books. PonsV2LaunchFactory created it. No official site or handle was located this pass.

Themes: memecoin, stock-paired:DJT

## Deployment

Trump $1 Coin token: 0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da on robinhood-chain. [verified S1 S2 S3]

PonsV2LaunchFactory: 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S4 S5 S12]

V2LaunchLocker (top holder / locked position): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [verified S4 S11 S19]

DJT Robinhood Stock Token (pair quote): 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 on robinhood-chain. [verified S7 S10 S13]

## Control

Token owner() reverts. Factory owner() and locker owner() return SafeProxy 0x263e…19Dd. Verified locker source says the graduated V4 position NFT stays in the locker with no withdrawal function. Token source is_verified false. [verified S1 S3 S11 S18]

## Security

No audit report URL was located this pass. [unknown]

## Engineering

_Research pending._

## Team

No official domain or X handle was located. DexScreener info.websites is a US Mint product URL (GET 403 this pass). info.socials is an X search URL, not a handle. Flag unconfirmed-official and third-party-link. [claim S7 S14]

Census Pons is the pad that created the token. Census Artificial Inu / LONG / L4VA share the stock-paired neighborhood only. [verified S5 S12]

## Product and economics

PonsV2LaunchFactory 0x7eD5…C7e emitted TokenLaunched for 0xdCe5…e6da at 2026-09-02T11:00:20Z with pairToken DJT. createGraduatedPool 57 seconds later locked Uniswap v4 pool 0xe7da…6758. V2LaunchLocker isLocked true and holds positionId 1499306. factory() on the token reverts; locker.factory() returns the Pons v2 factory. [verified S4 S5 S6 S11]

Gecko launchpad_details.completed is true at 2026-09-02T11:01:17Z with migrated_destination_pool_address 0xe7da…6758. DexScreener also lists $1/USDG Uniswap v4 books with less liquidity than the DJT book. [verified S7 S9]

djt/$1 Uniswap v4 24h volume is 10007137.0061065 USD and reserve_in_usd is 109789.5302 at 2026-09-03T03:28:00Z from the Gecko pool endpoint. fdv_usd is 1464166.79. Gecko token volume_usd.h24 is 17954964.29 across all pools, not the DJT book. [claim S8 S9]

DexScreener same pair: liquidity.usd 110454.92, volume.h24 10198421.95, fdv/marketCap 1761828. Blockscout holders_count 9786. Pair created 2026-09-02T11:01:17Z. [claim S2 S7]

## Communications

@MintDetector1 posted Trump $1 Coin as a Robinhood runner [claim S15]

@MintDetector1 posted Trump $1 Coin trending on Robinhood [claim S16]

X accounts posted the CA with US Mint $1 coin copy [claim S17]

## Findings

USD liquidity figures on the $1/DJT book count both sides, and the quote side is DJT, not USDG. Token source is not verified. No official handle was located, so comms surfaces stay unconfirmed-official. Factory owner() is a SafeProxy whose owners were not read this pass. [claim S10]

- Token source is not verified on Blockscout. [verified S1]
- Factory owner is a SafeProxy; owners and threshold were not read this pass. [verified S18]
- Pool USD reserve is $1 plus DJT, not a USDG-only backstop. [claim S7 S8]
- No official handle or domain this pass; DexScreener website is a third-party-link. [claim S7 S14]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/locker/DJT and both launch txs, RPC name/symbol/locker/factory/eth_getLogs, DexScreener, Gecko pool/token, /rhj/assets, US Mint 403, @MintDetector1 and @tqshou1 were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S8 S10]
- Numbers: 10007137.006 is the Gecko djt/$1 pool 24h volume, not the 17954964.29 token all-pools figure. Reserve 109789.53 is that pool. DexScreener 10198421.95 / 110454.92 is the same pair, different aggregator. [claim S7 S8 S9]
- Adversarial: the strongest contrary reading is that this token is an official US Mint or Trump Media product, or a LONG launch. /rhj/assets lists DJT as a Robinhood Stock Token at a different address from the $1 token; TokenLaunched is on PonsV2LaunchFactory; no official handle or domain was located. [inference S5 S10 S14]

## Sources

- S1 — Address 0xdCe5…e6da Trump $1 Coin.
- S2 — Token 0xdCe5…e6da.
- S3 — eth_getCode, name, symbol, owner, factory on 0xdCe5…e6da.
- S4 — locker and PonsV2LaunchFactory views.
- S5 — TokenLaunched tx 0x89a63a39…a1ab.
- S6 — createGraduatedPool tx 0xc034aef0…472b.
- S7 — latest/dex/tokens Trump $1 Coin.
- S8 — djt / $1 Uniswap v4 pool.
- S9 — Trump $1 Coin token.
- S10 — GET /rhj/assets DJT row.
- S11 — V2LaunchLocker verified source.
- S12 — Address 0x7eD5…C7e PonsV2LaunchFactory.
- S13 — Address 0x1D11…4516 DJT Stock Token.
- S14 — US Mint product URL listed on DexScreener.
- S15 — Fresh runner on Robinhood Chain.
- S16 — Trending hard on Robinhood Chain.
- S17 — $1 CA post with US Mint copy.
- S18 — Address 0x263e…19Dd SafeProxy factory/locker owner.
- S19 — Token holders 0xdCe5…e6da.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:40:00Z; methodology_version: proofline-v1.0.
