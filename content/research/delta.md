---
slug: delta
coverage: stub
methodology_version: proofline-v1.0
---

# Delta — research record

## Identity

Delta is classified as Liquidity manager.

A liquidity manager: users deposit a token or LP into a stake or a shaped Uniswap position and collect a share of that pool's swap fees in ETH. Open or join a pool on deltaliquidity.app, claim streamed fees after a 1% protocol cut, and withdraw with no lockup. @deltaliquidity runs the app. DELTA is a Pons v1 launch token, not the vault.

Themes: vault, rwa, memecoin

## Deployment

DELTA token (PonsLauncherToken): 0xe8ffd7e24187F72afB08d75B1bb13088A989a791 on robinhood-chain. [verified S12 S13 S14 S21]

DELTA/WETH Uniswap v3 pair: 0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94 on robinhood-chain. [claim S16 S17 S18 S21]

PonsLaunchFactory (token creator): 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB on robinhood-chain. [claim S14 S15]

VaultFactory (docs; creates stakes): 0x68EDc4948F60D21c4a7Dcbb8Ed4500cE6D0b153c on robinhood-chain. [claim S10 S21 S32]

VaultFarmFactory (docs): 0x2bdA3FeB985d812a5932fe59eD4D8627BA3A10d1 on robinhood-chain. [claim S10 S21]

DeltaZap (docs): 0xC0b8eC7589ee49c53305517bFd53BEd708392294 on robinhood-chain. [claim S10 S21]

TwapOracle (docs): 0xA26cB1b06AAE9E58D5DBCCE40f7fC38c0aced62C on robinhood-chain. [claim S10 S21]

DeltaPositionBuilder (docs): 0x6235cF6bd8419b34942F4EDDB39C880BD96dD700 on robinhood-chain. [claim S10 S21 S33]

DeltaLadderManager v3 (docs current): 0x5cA6214227D1195c4b7b4B96847b8966c688295D on robinhood-chain. [claim S10 S21]

Llama adapter LADDER_MANAGER: 0x64680254BF644BBdDe394b95129895c13317FeD4 on robinhood-chain. [claim S20 S21]

Llama adapter LADDER_MANAGER_V2: 0xC5941433114BB47a9733CB31a0A3A3dBfF45B418 on robinhood-chain. [claim S20 S21]

Llama adapter ROUTER_V3: 0x46dFEa430d1F069C129E26445319562e29f39C47 on robinhood-chain. [claim S20 S21]

## Control

The token is not a proxy and is not Ownable: `owner()` reverts; `deployer()` returns EOA 0x1EAFc3E30f9F6DDFC53DC3EaB028A31BA4B8B0f8, the `launchToken` caller. [verified S12 S21]

VaultFactory, VaultFarmFactory and Llama ROUTER_V3 `owner()` return EOA 0xf98C1097BC50692b8f290B8c20A3F3f7dD0E2a1D (empty code), which also created those contracts. Docs DeltaLadderManager v3 and the two Llama ladder managers `owner()` return EOA 0xb1c2bbf86e557ecdc1812f75ae3fe973e5ec9e69 (empty code). No timelock was opened on those paths. [verified S21 S32]

Docs FAQ: the owner key can lower the fee and pause new deposits, and cannot raise the fee or move a staked position. That text was not checked against unverified vault source. [claim S10]

## Security

No audit report URL was located. Llama `audits` is 0. The 2026-08-31 account post says a firm is engaged; no firm name or report is attached. [unknown]

## Engineering

_Research pending._

## Team

@deltaliquidity bio carries CA 0xe8ff…a791 and links deltaliquidity.app. The pools app links that handle and discord.gg/deltaliquidity. DexScreener token metadata lists the same site and handle. Constructor socials named the same handle and deltaliquidity.xyz, which did not resolve. [verified S9 S11 S17]

@TheVsCrypto bio reads Product @Deltaliquidity and was quoted by the official account. No legal entity is named on the site or docs. GitHub search deltaliquidity returned 0. [claim S36] [unknown]

handle-collision: @deltaliquidlty and @deltaliquidityS reuse the same bio and CA with far smaller followings. Site and DexScreener name @deltaliquidity only. [claim S30]

Census MaxFi, Snuggle, SCOPL, StonkBrokers and Mancer share LP or routing wording only. Pons created the token; it does not run the vaults. [inference S14 S15]

## Product and economics

DELTA is a fixed-supply ERC-20 (1,000,000,000e18) named Delta / DELTA. Verified source is PonsLauncherToken, deployed by PonsLaunchFactory.launchToken. Launchpad is Pons v1. Pair asset on the lead book is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. Venue is Uniswap v3 pool 0xD64FbdA67E1015dF43Fa5e49F02cA844729E5F94, created in the same launch transaction. Gecko labels that pool pons-dot-family; Blockscout names it UniswapV3Pool. Extra Uniswap v4 DELTA/USDG and DELTA/ETH books exist. [verified S12 S14 S16 S17]

Docs describe two halves. Stakes: deposit into one token's pool and collect a streamed share of that pool's swap fees, paid in ETH, over 7-day windows. Pools: mint a shaped concentrated-liquidity ladder from a single coin. Protocol cut is 1% of claimed fees, 0% on deposit, withdraw and stake creation. Compounding is not live. FAQ: deposits sit in the stake contract; only the depositor wallet withdraws. [claim S10]

Verified DeltaPositionBuilder source mints Uniswap v3 rungs through NonfungiblePositionManager and emits LadderMinted with the caller as owner. Docs say shaped positions are held in a Delta contract only that user can access, which is why Llama can print a small custodied TVL while the app header prints a much larger one. [verified S33] [claim S10 S20]

DexScreener Uniswap v3 DELTA/WETH 0xD64Fbd… at 2026-09-02T22:57:00Z: liquidity.usd 1159947.42; volume.h24 4343372.01; marketCap 14760957. GeckoTerminal the same pool: reserve_in_usd 1138915.14; volume_usd.h24 4336125.50. Those are pair slices, not protocol TVL. [claim S17 S18]

DefiLlama Delta, Robinhood Chain slice, 2026-09-02T20:52:47Z: TVL $13,804.27. Adapter methodology excludes user-custodied positions. [claim S19 S20]

Site header at fetch: TVL $1,440,933; Total Positions 8,275; Total Fees $1,210,576; DELTA fees 24h $43.09K. Stakes page: 8.9 WETH across 12 stakes. @deltaliquidity posted TVL surpassed $1,000,000 (2026-08-30) and $1,000,000 claimed by LPs (2026-09-02). Those totals were not summed from logs this pass. [claim S9 S22 S26]

Blockscout holders_count 14292. [claim S13]

## Communications

Account posts $1,000,000 claimed by LPs [claim S22]

Account posts $750,000 claimed by LPs [claim S23]

Account posts website DDoS, contracts unaffected [claim S24]

Account posts over 5,000 positions opened [claim S25]

Aster lists $DELTA 3x perps [claim S28]

Account quotes Aster listing [claim S27]

Account posts TVL surpassed $1,000,000 [claim S26]

## Findings

Site TVL (~$1.44M) and Llama TVL (~$13.8k) are different custody slices. Using the token pair or the site header as "protocol TVL" overstates what the contracts hold. [claim S9 S19]

Vault and ladder `owner()` values are EOAs with no timelock in the path that was opened. Docs say that key can pause deposits and lower the fee; most of those contracts are unverified. [verified S21] [claim S10]

A second Robinhood token also named Delta / DELTA (0xfA1A…bD5) exists. Pairing that ticker with this product mixes two contracts. [verified S29]

- Site TVL, Llama TVL and the DELTA/WETH book are three different numbers. [claim S9 S17 S19]

- Vault and ladder owners are EOAs; most protocol source is unverified, so the FAQ pause/fee limits are unproven. [verified S21] [claim S10]

- Docs list DeltaLadderManager v3 0x5cA6… while Llama still reads 0x6468… and 0xC594…. [claim S10 S20]

- No audit report was located. [unknown]

- A second Robinhood DELTA ticker (0xfA1A…bD5) can be mixed with this product. [verified S29]

- Receipts: deltaliquidity.app/pools, /docs, X profile and six posts, Aster listing, Blockscout token/tx/factory/pair/VaultFactory/PositionBuilder and the other DELTA token, DexScreener both CAs, Gecko pool, Llama protocol and adapter, and RPC calls were opened on 2026-09-02 and excerpts copied from the responses. [verified S9 S10 S12 S17 S19 S21]

- Numbers: DexScreener liquidity and 24h volume are Uniswap v3 DELTA/WETH 0xD64Fbd…, not all DELTA pairs. Llama TVL is the Robinhood Chain custodied slice. Site $1,440,933 and X $1,000,000 claimed remain class claim. Holders 14292 is all token holders. [claim S13 S17 S19]

- Adversarial: the strongest contrary reading is that Gecko trending DELTA/WETH is the other Robinhood DELTA (0xfA1A…bD5, ~$4.5M reported liq) or Ethereum Delta Financial (Llama slug delta-financial, 0x9EA3…). Trending pool 0xd64fbd… has base 0xe8ff…a791; 0xfA1A… 24h volume is $0.04; Llama slug delta points at deltaliquidity.app. A weaker contrary reading is that Delta is only a Pons memecoin: the token is a Pons launch, but docs-listed vault and ladder contracts exist with code on 4663. [inference S18 S19 S29 S35]

## Sources

- S9 — Delta pools app.
- S10 — Delta Docs.
- S11 — X profile @deltaliquidity.
- S12 — Address 0xe8ff…a791.
- S13 — Token page DELTA.
- S14 — Creation tx 0x301f5b….
- S15 — PonsLaunchFactory 0xA5aAb3….
- S16 — UniswapV3Pool 0xD64Fbd….
- S17 — DELTA token pairs on Robinhood.
- S18 — Robinhood DELTA/WETH pool.
- S19 — Delta protocol.
- S20 — delta-liquidity adapter.
- S21 — eth_getCode, owner, ERC-20 views.
- S22 — $1,000,000 has been claimed.
- S23 — $750,000 has been claimed.
- S24 — Website DDoS post.
- S25 — Over 5,000 positions opened.
- S26 — TVL surpassed $1,000,000.
- S27 — Quote of Aster $DELTA listing.
- S28 — New perp listings $DELTA 3x.
- S29 — Other DELTA token 0xfA1A….
- S30 — Handle search deltaliquidity.
- S32 — VaultFactory 0x68ED….
- S33 — DeltaPositionBuilder verified source.
- S35 — Delta Financial (Ethereum) row.
- S36 — Product @Deltaliquidity bio.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:10:00Z; methodology_version: proofline-v1.0.
