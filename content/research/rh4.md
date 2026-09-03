---
slug: rh4
coverage: stub
methodology_version: proofline-v1.0
---

# RH4 — research record

## Identity

rh4.cpu is classified as Launchpad-graduated token.

A one-billion-supply ERC-20 cloned onto a Pons v2 bonding curve and graduated into a Uniswap v4 pool quoted against native ETH. PonsV2LaunchFactory deploys rh4.cpu (RH4) in one launch call and, after the 4.2 ETH threshold, seeds the RH4/ETH book. Traders buy and sell RH4 on Uniswap v4. The same deployer EOA also published ChipFactory8, an ERC-721 the site treats as on-chain chips.

Themes: memecoin, graduation, bonding-curve, nft

## Deployment

RH4 token (PonsV2LauncherToken bytecode): 0xe76a12bcd2f0E6d3db9F9012321642198E6cBd1B on robinhood-chain. [verified S1 S2 S5]

PonsV2LaunchDeployer: 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 on robinhood-chain. [claim S1 S13]

PonsV2LaunchFactory (token launchFactory): 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e on robinhood-chain. [verified S3 S5 S12]

Pons v2 bonding curve (create-tx clone): 0x5FCAeEa4731C8E84D5E419c0dB8Ea1986859e18b on robinhood-chain. [verified S3 S5 S6]

V2LaunchLocker (graduated position): 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 on robinhood-chain. [claim S8 S20]

ChipFactory8 (RH Chip ERC-721; site CA): 0x265A4D74DbF6C10f40ecf7d870df7677CB6fF65B on robinhood-chain. [verified S9 S14 S5]

ChipFeeVault: 0xb5C467bA319a1aCe5baCe0ffd45f6582C3AE491D on robinhood-chain. [claim S15 S22]

RH4 ticker collision (Pons v2, not this row): 0x9ECEA68a99AEcd079153dD58B751789f4e54E0a9 on robinhood-chain. [claim S16]

## Control

token owner() reverts. deployer() 0xAE1E…b8e8 has no code and is also ChipFactory8 owner(). ChipFeeVault owner() reverts. [verified S5 S14 S15]

## Security

PonsV2LauncherToken, PonsV2LaunchFactory, PonsV2LaunchDeployer, ChipFactory8, and ChipFeeVault are verified on Blockscout. The bonding curve at 0x5FCA…e18b is unverified. No audit report URL was located this pass. [verified S1 S2 S12 S14] [unknown]

## Engineering

_Research pending._

## Team

rh4cpu.tech (Netlify) titles RH-4, sets twitter:site @RH4cpu, and embeds CA 0xe76a…Bd1B plus ChipFactory8 0x265A…F65B. @RH4cpu bio embeds the same token CA. Constructor socials() are empty; DexScreener lists the site, X, and t.me/rh4cpu. Telegram preview has 28 subscribers and no CA. github.com/giupy997/chipc is linked from the site; GitHub homepage is empty. Flag third-party-link on Telegram until a public pin cross-links. [claim S5 S7 S9 S10 S11 S17]

@larry_rh4 is a football account, not this CA. Flag handle-collision. [claim S10 S19]

## Product and economics

PonsV2LaunchFactory 0x7eD5…EC7e clones PonsV2LauncherToken via PonsV2LaunchDeployer. Create tx 0x049d84be…3e5a from EOA 0xAE1E…b8e8 at 2026-08-31T17:59:33Z minted rh4.cpu / RH4 supply 1e9*1e18 onto curve 0x5FCA…e18b against pairToken 0x000…000, graduationThreshold 4.2e18. launchFactory() on the token returns that factory. [verified S3 S4 S5]

CurveCompleted / LaunchSwept tx 0x198c65d1…2063 at 2026-08-31T18:01:47Z named quoteOut 4.2 ETH. PoolGraduated tx 0x85b6508f…22f7 the same second initialized Uniswap v4 poolId 0x2f71a0c9…ea2f (fee 0, hooks V2MemeHook 0xE5e7…e044) and V2LaunchLocker PositionLocked 1321530 / TokenSupplyLocked ~8.16e25. DexScreener labels the quote Ether / ETH at the zero address. Secondary RH4/USDG books exist with liquidity under $85. [verified S6 S7 S8]

ChipFactory8 0x265A…F65B (RH Chip / CHIP ERC-721) was created by the same EOA about 76 minutes before the token and is the top RH4 holder (~3.00e26). ChipFeeVault 0xb5C4…491D was created 2026-09-02T18:24:48Z; verified source says LP NFTs sent there cannot be withdrawn and collect() forwards 1% fees to the factory. [verified S14 S15]

RH4/ETH Uniswap v4 24h volume is 565572.91 USD and liquidity.usd is 81529.86 at 2026-09-03T05:40:00Z from DexScreener latest/dex/tokens. fdv/marketCap is 809875. Pair created 2026-08-31T18:01:47Z. Blockscout holders_count 569. [claim S1 S7]

Assignment lead of prior Gecko RH4/WETH ~$68,835 liq / ~$510,838 vol was not re-fetched (Gecko skipped; packet GET 404). Live DexScreener ETH book is 81529.86 / 565572.91. token-pairs/v1 later the same pass printed 81948.17 / 565510.52 on the same pair. [claim S7]

## Communications

@RH4cpu posted ChipFeeVault 0xb5C4…491D [verified S15 S22]

Netlify vote URL posted for $RH4 [claim S18]

X post embedded CA 0xe76a…Bd1B with $917k mcap claim [claim S19]

## Findings

USD liquidity on the flagship book counts RH4 plus native ETH, not a USDG backstop. Several other 4663 ERC-20s reuse the rh4.cpu / RH4 ticker with far thinner books. Constructor socials are empty; Telegram preview has no CA. ChipFactory8 remains Ownable by the launch EOA. [claim S9]

- Several other 4663 ERC-20s reuse rh4.cpu / RH4; 0x9ECE…E0a9 has a live ETH book at ~$4.7k liq. [verified S16]
- Flagship USD liquidity is RH4 plus native ETH, not USDG. [claim S7 S8]
- ChipFactory8 is Ownable by the launch EOA; motherToken() returned 0x0 while the factory holds ~30% of supply. [verified S5 S14]
- Telegram is a third-party-link this pass; a netlify.app vote URL was posted. [claim S11 S18]
- No audit report URL this pass. [unknown]

- Receipts: Blockscout token/factory/deployer/curve/create/graduation/ChipFactory/ChipFeeVault/collision, RPC name/symbol/launchFactory/curve/owner, DexScreener tokens, rh4cpu.tech, @RH4cpu, Telegram preview, GitHub chipc, and the vote/CA posts were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S5 S7 S9]
- Numbers: 565572.91 is the DexScreener RH4/ETH Uniswap v4 pool 24h volume, not an all-pools figure. Liquidity 81529.86 is that pool. Holders 569 is Blockscout holders_count. [claim S1 S7]
- Adversarial: the strongest contrary reading is that this CA is one of several rh4.cpu launches and the chip contracts are unrelated. The site and @RH4cpu bio both embed 0xe76a…Bd1B; ChipFactory8 is the top holder and was created by the same EOA; DexScreener's deepest RH4/ETH book is this pair. [inference S7 S9 S10 S14]

## Sources

- S1 — Token 0xe76a…Bd1B rh4.cpu / RH4.
- S2 — PonsV2LauncherToken verified source.
- S3 — create tx 0x049d84be…3e5a.
- S4 — TokenLaunched log for RH4.
- S5 — eth_getCode, name, symbol, launchFactory() on RH4.
- S6 — CurveCompleted / LaunchSwept tx 0x198c65d1…2063.
- S7 — latest/dex/tokens RH4.
- S8 — PoolGraduated tx 0x85b6508f…22f7.
- S9 — RH-4 site.
- S10 — RHCPU profile.
- S11 — t.me/rh4cpu.
- S12 — Address 0x7eD5…EC7e PonsV2LaunchFactory.
- S13 — Address 0x3711…1A42 PonsV2LaunchDeployer.
- S14 — Address 0x265A…F65B ChipFactory8.
- S15 — Address 0xb5C4…491D ChipFeeVault.
- S16 — Collision token 0x9ECE…E0a9 rh4.cpu / RH4.
- S17 — giupy997/chipc.
- S18 — Attention $RH4 Family vote URL.
- S19 — RH4 CA post.
- S20 — Address 0x2674…4952 V2LaunchLocker.
- S22 — ChipFeeVault post.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T05:45:00Z; methodology_version: proofline-v1.0.
