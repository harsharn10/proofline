---
slug: what-the-hook
coverage: stub
methodology_version: proofline-v1.0
---

# What The Hook — research record

## Identity

What The Hook is classified as MEV-redistribution hook.

A Uniswap v4 hook that recaptures cross-pool arbitrage and pays it to swappers and LPs. On Robinhood Chain the correction settles in the same swap; realised profit is split among the swapper, LPs, a referral and the WTH treasury. Users swap as usual; projects attach the hook at v4 pool creation. The hook is 0xc52f…54c0 and the WTH token is 0xb8Fa…fF79, created by whatthehook.eth.

Themes: hook, rwa, stock-paired:NVDA

## Deployment

WTH token: 0xb8Fa8010833463Aac5595b55B9045479239EfF79 on robinhood-chain. [verified S7 S15 S21]

WTH hook: 0xc52fc52698479E42F0dA9a8a75296EC3871454c0 on robinhood-chain. [verified S7 S16 S21]

ArbExecutor: 0x26a5d02938FBF70AF4c114C2Ff432eD3Be0D3B62 on robinhood-chain. [verified S7 S17 S21]

PositionFeeClaimer: 0x82067B7Ef3020cc6503142B80593519BD382B700 on robinhood-chain. [verified S7 S18 S21]

Safe multisig (docs admin): 0x98c8681673D6b9fD85D2F505b7CC54E77Da8cE59 on robinhood-chain. [verified S7 S19 S21]

Token and hook factory: 0x7F66F29AB9e28Dc7602f0D14a4df0Bbcd2b50399 on robinhood-chain. [verified S20 S21 S26]

## Control

`hook owner()` returns EOA 0x883a2cc6…3A8e, labelled whatthehook.eth, with empty code. `token owner()` returns the unverified factory 0x7F66…0399; verified Token source restricts `setHook` to that owner. [verified S21 S26]

Docs §25 say Safe 0x98c8…cE59 holds administrative keys for pool approval, routes, and pause, with no single key. RPC `getThreshold()` is 4 of 6 EOA owners. The Safe exists with verified SafeProxy/SafeL2 source. Whether the Safe is `owner()` of the hook is the open CON-1. [claim S7] [verified S19 S21]

## Security

Hook and ArbExecutor source are unverified on Blockscout. Token source is partially verified (`src/hookArbTOKEN/simpleERC20.sol`). Llama `audits` is 0. No audit artifact was located. [unknown] [verified S15 S16 S17]

## Engineering

_Research pending._

## Team

Official identity is bidirectional on domain and handle: @whatthehookv4 lists whatthehook.io; docs on that host publish the token and hook that Llama and DexScreener also name. Display name on the token is "what the hook?". [verified S6 S7 S8 S11 S14]

Deployer EOA is whatthehook.eth (0x883a…3A8e): it created the factory, called `deployHook`, and later created ArbExecutor and PositionFeeClaimer. No public repository was listed. Telegram is named in the 2 Sep post without a URL. Hookr and HookOS stay separate names. [verified S20 S27] [claim S9 S22]

## Product and economics

A swap on a hooked pool can open a price gap versus another approved pool (v4, v3, or a named propAMM stock venue). The hook checks a bounded route set, executes only when realised profit after fees and gas is positive, and splits that profit in the same transaction. Docs after the 2 Sep change: WTH's own pools pay 10% to the swapper and 90% to treasury; an integrating pool pays 5% swapper, 45% that pool's LPs, 40% treasury, 10% referral. [claim S6 S7 S9]

WTH is a 210,000-supply ERC-20 used as the visible example pool, not a launchpad output. It was created 2026-08-04 in block 27190942 by factory 0x7F66…0399 from whatthehook.eth — not Pons, Hookr, or LiquidityLauncher. Listed liquidity is Uniswap v4 WTH/WETH (WETH 0x0Bd7…AD73). Projects add the hook by creating two or more v4 pools against ETH, WETH or USDG with the hook address preset. [verified S7 S14 S26 S27]

Docs also describe triangular routes and hooked USDG pools for NVDA, SPCX, SNDK, AAPL, GOOGL and MU at 0.0375% and 0.1% fee tiers. Those stock-token pools were not individually eth_called this pass. [claim S7]

DefiLlama chain-slice TVL (non-WTH balances in hooked pools) is 210671.39 USD at 2026-09-03T01:27:35Z. The same payload's Robinhood Chain-staking bucket is 1174597.81 USD of WTH in those pools — not the TVL figure, and not an all-chains total. [verified S11 S22]

Llama dailyFees for 2026-09-02 is 1790 USD (ProfitCurrencyDistribute). Llama dailyRevenue is 0 under a methodology that says the hook retains nothing; docs and the 2 Sep post say treasury now takes 90%/40% (CON-2). [verified S12] [claim S13 S9]

DexScreener WTH/WETH v4 pair 0x79723a75…: liquidity 787545.99 USD, 24h volume 215448.4 USD, marketCap 3700589 USD. A second WTH/WETH v4 pair printed 193599.36 USD 24h volume and is not summed here. Blockscout holders_count 767. [verified S14 S15]

## Communications

@whatthehookv4 posts treasury-first split and buybacks [claim S9]

@whatthehookv4 posts $3.5M / 1500 ETH arbitrage volume [claim S10]

@MCGlive interviews @whatthehookv4 on MEV-in-hook [claim S23]

## Findings

Hook `owner()` is a single EOA (whatthehook.eth) while the docs name a 4-of-6 Safe as admin; those two control pictures are not reconciled in this pass. Hook and executor source are unverified. Llama still reports protocol revenue as zero after the 2 Sep treasury-split post. [claim S6]

- Hook `owner()` is one EOA while docs name a 4-of-6 Safe as admin; pause and pool-approval rights were not read from unverified hook source. [disputed S7 S21]
- Hook and ArbExecutor bytecode are unverified. [verified S16 S17]
- No audit report was located. [unknown]
- Llama still books protocol revenue as zero after the posted treasury split. [disputed S9 S13]
- Capture needs active in-range liquidity and approved routes; docs state no payout when no realised profit. [claim S7]

- Receipts: site, docs, dashboard, X profile and status URLs, Llama protocol/fees APIs, DexScreener token API, Blockscout address/tx/source APIs, and RPC eth_getCode/eth_call were opened on 2026-09-03; excerpts are copied from those responses. [verified S6 S7 S8 S11 S14 S15 S21]
- Numbers: TVL 210671.39 is currentChainTvls['Robinhood Chain'], not staking 1174598 and not an all-chains total; 24h volume 215448.4 is one WTH/WETH v4 pair; fees 1790 is the 2026-09-02 Llama bar. [verified S11 S12 S14]
- Adversarial: the strongest contrary reading is that this is Hookr or HookOS. Handles, domains, and reproduced token/hook addresses differ; Hookr is a hook marketplace and $HOOKR's listed pool is hookless. [inference S7 S8 S15]

## Sources

- S6 — whatthehook.io homepage.
- S7 — WTH — Documentation.
- S8 — X profile What The Hook.
- S9 — Hook evening split change.
- S10 — New milestone unlocked 1500 ETH.
- S11 — api.llama.fi/protocol/what-the-hook.
- S12 — what-the-hook dailyFees.
- S13 — what-the-hook dailyRevenue.
- S14 — latest/dex/tokens WTH.
- S15 — WTH token 0xb8Fa….
- S16 — WTH hook 0xc52f….
- S17 — ArbExecutor 0x26a5….
- S18 — PositionFeeClaimer 0x82067….
- S19 — SafeProxy 0x98c8….
- S20 — Token/hook factory 0x7F66….
- S21 — eth_getCode, owner, HOOK, Safe views.
- S22 — projects/what-the-hook/index.js.
- S23 — Today on MCG $WTH w/ @whatthehookv4.
- S26 — WTH verified source Token.
- S27 — Token create tx 0x8657ddd1….

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T02:20:00Z; methodology_version: proofline-v1.0.
