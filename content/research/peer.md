---
slug: peer
coverage: stub
methodology_version: proofline-v1.0
---

# Peer — research record

## Identity

Peer is classified as Options market.

Binary options on a fomo trader's total account PnL. A user buys a USDG call or put on whether that PnL is higher at close than at open, over 24 hours or 7 days. Settlement is the median of three published leaderboard snapshots. Collateral sits in PeerMarketV1 on chain 4663. $PEER is a Pons v2 token and is not the settlement asset.

Themes: options, prediction

## Deployment

PEER token (PonsV2LauncherToken): 0x96f0889cBC2D1423Fd64fd1307335fE72f1a198E on robinhood-chain. [verified S5 S8]

PeerMarketV1: 0xCeaF31F0aA9961A562C5d4CdD6265BC6104428CA on robinhood-chain. [verified S6 S9]

PeerFlywheel: 0xb48Fb40942a7440A0085BE66fd3f4d478834aEFB on robinhood-chain. [claim S10 S15]

PeerDistributor: 0x4c40e7C591F1f21A9c307d2C093Bd988aD2d938B on robinhood-chain. [claim S11]

## Control

PeerMarketV1 owner, guardian and lpTreasury are EOA 0xD5Bc…b447. Resolver is EOA 0x8Ba7…8a10. protocolTreasury is PeerFlywheel. ABI has setPaused, setResolver, setGuardian, setTreasuries, voidMarket and no timelock. Source is partially verified. [verified S6 S9]

FEE_BPS 200, FEE_TRADER_BPS 0 in the verified source; /docs matches. The homepage trader section still prints 15% escrow. [verified S2 S6] [claim S1] [disputed S1 S2]

## Security

No audit report URL was located. [unknown]

## Engineering

_Research pending._

## Team

peer.family and /docs print the PEER CA and chain 4663. They do not name an X handle, GitHub org, Telegram or Discord. DexScreener token info and the Pons launch params include https://x.com/PeerDotFamily; that account posts peer.family. Flag unconfirmed-official. [claim S1 S8 S12]

@peerxyz / www.peer.xyz / Llama slug peer is ZKP2P on Base. Distinct. [verified S13]

Deployer of $PEER (via Pons) and of PeerMarketV1 / Flywheel / Distributor is EOA 0xD5Bc…b447. [verified S8 S9]

## Product and economics

A listed fomo handle gets two markets: sign of 24h PnL and sign of 7d PnL. Price is an FPMM over Up and Down reserves; a winning share is 1 USDG minus 2% of winnings. Strike and close are each the median of three keeper snapshots. [claim S1 S2]

peer.family, /docs and /discover copy say 20 markets across 10 traders. PeerMarketV1.marketCount() is 20 and ids 1-20 read Status.Open. /discover lists /m/1 through /m/20. /m/1 is Open with $5 traded on $10 seed. [verified S6] [claim S3 S4]

Markets settle in USDG. $PEER 0x96f0…198E is the flywheel token from a Pons v2 launchAndBuy on 2026-08-31, paired to ETH on Uniswap v4. [verified S2 S5 S8]

PeerMarketV1 USDG 380.00 at 2026-09-03T03:00Z (Blockscout; RPC 379.80 in the same hour). That is options collateral, not a 1400000 TVL figure. The $1.4M on the homepage is @AvgJoesCrypto 30d fomo volume. [verified S7] [claim S1]

DexScreener PEER/ETH liquidity 26527.99 USD, 24h volume 281456.61, marketCap 85390. $PEER holders_count 391. [claim S5 S12]

## Communications

Peer is live; 20 markets, 10 FOMO traders [claim S14]

PeerMarket, Flywheel, Distributor addresses posted [claim S15]

## Findings

Settlement is posted by one resolver EOA. Owner and guardian are the same EOA with pause and void rights and no timelock in the ABI. Homepage copy says 15% trader escrow while the verified source sets FEE_TRADER_BPS to 0. Llama's Peer row is a different product on Base. [claim S1]

- Resolver is one EOA; grace void is 7 days. [verified S6] [claim S2]
- Owner and guardian are the same EOA with pause and void, no timelock. [verified S6]
- Homepage 15% trader escrow versus FEE_TRADER_BPS 0. [disputed S1 S2]
- No audit report was located. [unknown]
- Llama Peer is ZKP2P on Base, not this venue. [verified S13]
- $PEER is a Pons v2 token; it is not USDG collateral. [verified S5 S8]

- Receipts: peer.family, /docs, /discover, /m/1, Blockscout token/market/flywheel/distributor/txs, RPC, DexScreener PEER pairs, Llama protocol/peer, and two @PeerDotFamily posts were opened on 2026-09-03 and excerpts copied. [verified S1 S5 S6 S12]
- Numbers: 380.00 is the PeerMarketV1 USDG chain balance, not DexScreener marketCap 85390 and not the $1.4M fomo 30d volume on the AJC card. marketCount 20 is the contract, not a 1-open reading. [claim S1 S7 S12] [verified S6]
- Adversarial: the strongest contrary reading is that this Peer is Llama/ZKP2P @peerxyz or that only one market is open. Llama peer is Base payments; RPC reads 20 Status.Open and /discover lists 20 routes. [inference S3 S6 S13]

## Sources

- S1 — Peer site.
- S2 — How Peer works.
- S3 — Discover.
- S4 — Market /m/1 DumbCrayonEater 24h.
- S5 — PEER 0x96f0…198E.
- S6 — PeerMarketV1 0xCeaF…28CA.
- S7 — PeerMarketV1 token-balances.
- S8 — PEER launchAndBuy tx 0x5a5316fe….
- S9 — PeerMarketV1 create tx 0xb3a87554….
- S10 — PeerFlywheel 0xb48F…aEFB.
- S11 — PeerDistributor 0x4c40…938B.
- S12 — PEER token pairs.
- S13 — protocol/peer (ZKP2P).
- S14 — Peer is live.
- S15 — PEER Infrastructure coming on-chain.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:05:00Z; methodology_version: proofline-v1.0.
