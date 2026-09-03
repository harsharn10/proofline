---
slug: pools-trade
coverage: stub
methodology_version: proofline-v1.0
---

# pools.trade — research record

## Identity

pools.trade is classified as Uniswap-pool launchpad.

Uniswap Labs' own launchpad on Robinhood Chain. A user picks Crowd Launch — a four-hour TWAP that refunds below about $10k FDV — or Instant Launch, a bonding curve that is live immediately. Both mint 1 billion tokens and end in a locked Uniswap v4 pool with a 0.25% autocompounding LP fee. Uniswap Labs runs it at pools.trade as @TradePools.

Themes: launchpad, memecoin

## Deployment

Token factory (UERC20Factory): 0x000000e200088D55C39a11F609E5F667729ad49b on robinhood-chain. [verified S11 S16]

Launch entry current (LiquidityLauncher v3.2.0): 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0 on robinhood-chain. [verified S13 S16]

Launch entry original (LiquidityLauncher v3.0.0): 0x00004c4ccc709Ef590F7C81102C0689F0263D4e9 on robinhood-chain. [verified S14 S16]

Launchpad current (InstantLaunchStrategy): 0x23f8209572b4a1C2AD88A42749E830791Fb027f1 on robinhood-chain. [verified S15 S16]

## Control

The four reproduced contracts were created via the CREATE2 deployer 0x4e59b44847b379578588920cA78FbF26c0B4956C. Blockscout marks source verified on all four; this pass did not call owner() or read upgrade modifiers. [verified S11 S13 S14 S15 S22]

## Security

Uniswap/liquidity-launcher lists OpenZeppelin and Spearbit reports for v1.0 and v2.0.0 and a Cantina bounty on src/. This pass did not match those reports to the Robinhood v3.2.0 bytecode. [claim S16]

## Engineering

_Research pending._

## Team

Uniswap Labs published the 5 August 2026 blog post and @Uniswap announced @TradePools with a pools.trade link. The site sets twitter:site to @TradePools; the @TradePools bio links pools.trade. The implementation repo is Uniswap/liquidity-launcher. [verified S6 S7 S8 S9 S16]

Census currently stores handle @pools_dot_fun on this slug. That account's bio is a SushiSwap token launcher at pools.fun. Flag handle-collision; do not merge. [claim S20]

Hookr's FAQ uses pools.trade as the familiar pool-first model and states Hookr is independent and not affiliated with pools.trade. [claim S19]

## Product and economics

Crowd Launch runs a four-hour TWAP. Bids fill over the window; the token is tradable if launch FDV reaches about $10k, otherwise orders are refunded. Instant Launch is live at creation as a classic bonding curve. Both modes mint 1 billion tokens and finish in a Uniswap v4 pool. [claim S6]

The Uniswap blog and @Uniswap thread state a 0.25% LP fee that autocompounds into locked liquidity, an optional 0.05% creator fee, no extra launchpad fee, and sniping mitigation by letting the creator buy in the launch block. [claim S6 S7]

GitHub InstantLaunchStrategy deploys a hookless native-ETH v4 pool as a single-sided position locked in a FeeSplitter. Bitquery records PoolKey hooks as the zero address and treats the UI "curve" as concentrated liquidity in that pool, not a separate bonding-curve contract. This packet does not tag the product as hook. [claim S10 S16]

Bitquery describes Crowd Launch as a continuous clearing auction with a platform-reported ~$5k-equivalent raise, and an off-chain $50k FDV graduation progress for curve launches with no migration event. Those figures are not the Uniswap blog's $10k Crowd FDV / no Instant requirement. [claim S10]

DefiLlama's Robinhood Chain fees overview on 2026-09-02 lists protocol Pools (module pools-trade, category Launchpad, chains Robinhood Chain only) at 48,955 USD fees over 24h and 260,828 USD over 7d. The adapter attributes the 0.25% swap fee and records protocol revenue as zero. The row is marked doublecounted. [claim S21]

@TradePools quoted GeckoTerminal on 2026-09-02 that Robinhood Chain made up 29 of that day's top 30 trending tokens. That is a social claim, not a pad-specific volume figure. [claim S17 S18]

## Communications

@TradePools quotes GeckoTerminal on trending tokens [claim S17]

GeckoTerminal: Robinhood Chain is 29 of 30 trending [claim S18]

Uniswap announces @TradePools on Robinhood Chain [claim S7 S6]

## Findings

Liquidity is permanently locked, so a failed launch cannot be unwound by pulling LP. Crowd Launch refunds only if the stated FDV/raise threshold is missed; Instant Launch is live immediately. The census handle @pools_dot_fun points at a different product, so identity merges would mix two pads. [claim S8]

- Liquidity is described as permanently locked; a creator cannot withdraw the v4 position. [claim S6 S16]
- Crowd Launch refunds depend on a threshold that Uniswap ($10k FDV) and Bitquery (~$5k raise) do not state the same way. [claim S6 S10]
- Census handle @pools_dot_fun is a different product (Pools.fun / SushiSwap). [claim S20]
- Audit reports on the launcher repo are v1/v2; Robinhood v3.2.0 scope is unverified in this pass. [claim S16]
- Optional creator fees mean some tokens pay a creator on every trade. [claim S6 S7]

- Receipts: Uniswap blog, @Uniswap announcement, pools.trade HTML, @TradePools and @pools_dot_fun profiles, Bitquery docs, Blockscout API v2 for four addresses plus the factory creation tx, Uniswap/liquidity-launcher README, DefiLlama Robinhood fees overview, Hookr FAQ, and the 2 Sep GeckoTerminal quote were opened on 2026-09-02; excerpts are copied from those pages. [verified S6 S7 S8 S9 S10 S11 S13 S14 S15 S16 S17 S18 S19 S20 S21 S22]
- Numbers: the 48,955 USD figure is DefiLlama's Robinhood Chain fees slice for module pools-trade, not an all-chains total; Llama lists only Robinhood Chain on that row. Bytecode lengths are eth_getCode at block 52929547. [claim S21] [verified S11]
- Adversarial: the strongest contrary reading is that this slug is the SushiSwap Pools.fun pad, or that it is Hookr's pool-first model. @pools_dot_fun's own bio names SushiSwap and pools.fun; pools.trade sets twitter:site @TradePools; Hookr's FAQ disclaims affiliation. [claim S8 S19 S20]

## Sources

- S6 — Pools.trade: A New Way to Launch on Robinhood Chain.
- S7 — Say hello to @TradePools.
- S8 — Pools — create a token on Robinhood Chain.
- S9 — Pools profile.
- S10 — Pools.trade API — Uniswap Launchpad on Robinhood Chain.
- S11 — Address 0x000000e200088D55C39a11F609E5F667729ad49b.
- S13 — Address 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0.
- S14 — Address 0x00004c4ccc709Ef590F7C81102C0689F0263D4e9.
- S15 — Address 0x23f8209572b4a1C2AD88A42749E830791Fb027f1.
- S16 — Liquidity Launcher README (deployment addresses).
- S17 — some familiar faces here.
- S18 — Robinhood Chain 29 of top 30 trending tokens.
- S19 — Hookr FAQ — What is Hookr.fun?.
- S20 — Pools.fun profile.
- S21 — Robinhood Chain fees overview — Pools.
- S22 — Factory creation transaction 0x98ef78b1….

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T22:40:00Z; methodology_version: proofline-v1.0.
