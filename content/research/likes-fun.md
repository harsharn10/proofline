---
slug: likes-fun
coverage: stub
methodology_version: proofline-v1.0
---

# likes.fun — research record

## Identity

likes.fun is classified as Prediction market.

likes.fun is a fantasy-league pack product: a user rips a pack, picks three FOMO and Pump.fun traders, and wins if those traders profit. Season 0 and ETH deposits on Base or Robinhood Chain are marked soon. A Base Clanker token $LIKES at 0xbEDe…eb07 is live; no likes.fun contract was located on chain 4663. The handle is @likesdotfun; the site is likes.fun.

Themes: prediction

## Deployment

$LIKES token (ClankerToken on Base; no code on 4663): 0xbEDe17c8B0535791d131F0D6B6094B99cf27Eb07 on base. [claim S1 S10 S11 S12 S13 S14]

## Control

_Research pending._

## Security

No likes.fun owner, proxy, timelock, or factory was located on chain 4663. Footer $LIKES 0xbEDe…eb07 is a verified ClankerToken on Base (12791-byte code, holders 6083). The same address returns empty code on 4663. No audit URL. [verified S10 S12 S13] [unknown]

## Engineering

_Research pending._

## Team

@likesdotfun is linked from the likes.fun footer; display name likes.fun; CoinGecko twitter_screen_name likesdotfun. @yar0xslav bio names @likesdotfun; Sammy wrote that the CHILL founder also launches likesdotfun as a fantasy league for Pump + FOMO users. No GitHub org. [claim S1 S3 S9 S16]

## Product and economics

Home and /rip: rip a TraderPack, pick a cabal of three traders from fomo.family and pump.fun, they trade you win. Claiming the cabal requires X login and a tweet for a whitelist spot. Copy says Season 0 starts soon and claim your spot in the beta. [claim S1 S2]

A /rip quest list includes Follow @likesdotfun and Deposit ETH on Base or Robinhood Chain. The deposit control is disabled and labelled soon. No 4663 deposit address is named. [claim S2]

The prior surface is still on the same domain: home meta and the PWA manifest describe TikTok-to-Farcaster SocialFi on Base, and /api/crash/release-state reports a live crash game. That is not a Robinhood Chain factory. [claim S1 S18]

Base $LIKES, not a Robinhood Chain slice: CoinGecko market_cap.usd 182260, fdv 191852, volume 7.97 at 2026-09-03T05:04:50Z. likes.fun/api/prize-pool fdv 196077 (site $LIKES MC), communityAirdrop 58823, rewardsPool 0. Base Blockscout holders_count 6083. /api/pack/current not_found. Trader-card snapshotAt 2026-08-27T16:24:43Z. [claim S12 S14 S15 S21]

## Communications

@likesdotfun posts likes.fun/rip [claim S4]

@0xSammy names likesdotfun as a Pump + FOMO fantasy league [claim S9]

@yar0xslav posts a likes.fun trader cabal [claim S6]

## Findings

The only published contract in the footer is a Base ClankerToken. The same address has no code on Robinhood Chain. Anyone who treats 0xbEDe…eb07 as a 4663 factory or as Season 0 collateral is on the wrong chain. Deposit ETH on Robinhood Chain is a disabled soon button; settlement is unpublished. [verified S10 S11 S12] [claim S2]

- No likes.fun contract on chain 4663; Season 0 and RH ETH deposit are marked soon. [verified S10] [claim S2]
- Footer $LIKES is a Base ClankerToken; flag wrong-chain. [verified S10 S12]
- Home meta and crash API still describe the prior Base SocialFi surface. [claim S1 S18]
- No audit report URL. [unknown]
- CoinGecko and prize-pool market-cap figures differ (182260 vs 196077) and are Base, not 4663. [claim S14 S15]

- Receipts: likes.fun, /rip, prize-pool, crash, pack/cabal APIs, X profile and posts, Sammy recap, CoinGecko, GitHub 404, Llama 400, Base and Robinhood RPC, Base and Robinhood Blockscout were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S2 S10 S12 S14]
- Numbers: CoinGecko and prize-pool figures are Base $LIKES, not a Robinhood Chain slice. Bytecode lengths are chain-specific RPC. [verified S10 S13 S14]
- Adversarial: strongest contrary reading is that likes.fun is a Clanker pad or a Peer clone, or that 0xbEDe…eb07 is already a 4663 factory. Site mechanics are packs not launches; PeerMarketV1 is a different address; RPC on 4663 for 0xbEDe…eb07 is empty. lunch.fun and pew.fun are token pads. [inference S1 S2 S10]

## Sources

- S1 — likes.fun home.
- S2 — Draft your cabal /rip.
- S3 — likes.fun X profile.
- S4 — likes.fun/rip post.
- S6 — trader cabal post.
- S9 — RH update names likesdotfun.
- S10 — eth_getCode $LIKES on 4663.
- S11 — Address 0xbEDe…eb07 on Robinhood Chain.
- S12 — Address 0xbEDe…eb07 on Base.
- S13 — eth_getCode $LIKES on Base.
- S14 — coins/likes.
- S15 — /api/prize-pool.
- S16 — orgs/likesdotfun.
- S18 — /api/crash/release-state.
- S21 — pack/cabal APIs.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:15:00Z; methodology_version: proofline-v1.0.
