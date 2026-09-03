---
slug: ouroboros
coverage: stub
methodology_version: proofline-v1.0
---

# OUROBOROS — research record

## Identity

OUROBOROS is classified as Stock-paired token.

A fixed-supply ERC-20 on Robinhood Chain quoted against the CRCL Stock Token. OuroborosHook takes a 1% CRCL fee on Uniswap v4 swaps, forbids outside LP, and burns tokens from CRCL buybacks. A user buys or sells OUROBOROS on that pool. EOA 0x0130…4a90 deployed the token and hook; owner() reverts on both.

Themes: memecoin, stock-paired:CRCL

## Deployment

OUROBOROS token (verified ERC-20): 0x87aF913718f73168D4566bBF51683792aC2680eB on robinhood-chain. [verified S1 S2 S4 S23]

OuroborosHook (Uniswap v4 hook): 0x7bc2AF6Fb9A989505e9629470869a19143532AEC on robinhood-chain. [verified S5 S6 S10]

Hook deploy helper (unverified): 0x6dd59681d3Da8d0Ece6Fe9b92F88C50765f65b35 on robinhood-chain. [verified S8 S20]

CRCL Stock Token (pair quote): 0xdF0992E440dD0be65BD8439b609d6D4366bf1CB5 on robinhood-chain. [verified S10 S17 S18]

Uniswap v4 PoolManager: 0x8366a39CC670B4001A1121B8F6A443A643e40951 on robinhood-chain. [claim S8 S10]

## Control

token owner() reverts. hook owner() reverts. bootstrap() is only bootstrapper 0x0130…4a90 and bootstrapped() is already true. Deployer EOA has no code. Helper 0x6dd5…5b35 is unverified. [verified S4 S10 S20]

## Security

Ouroboros.sol and OuroborosHook.sol are fully verified on Blockscout (compiler 0.8.36, src/Ouroboros.sol, src/OuroborosHook.sol). No audit report URL was located this pass. [verified S5 S23] [unknown]

## Engineering

_Research pending._

## Team

Token website() and the verified constant return https://ouroborus.space/. @OuroborosOOO bio is 0x87aF913718f73168D4566bBF51683792aC2680eB. Site static HTML this pass has no CA and no handle, so site→handle is unconfirmed-official. DexScreener lists the site and x.com/ouroborosooo. No GitHub URL this pass. [claim S11 S15 S16]

Unrelated accounts posted netlify claim and vote URLs that embed this CA. Flag copypasta-pattern, third-party-link. [claim S24]

## Product and economics

EOA 0x0130…4a90 created token 0x87aF…80eB at 2026-09-01T21:52:51Z with constructor mint 1e6*1e18 to itself. The same block created helper 0x6dd5…5b35, called deploy() with Uniswap v4 PoolManager 0x8366…0951, token 0x87aF…80eB, and CRCL 0xdF09…1CB5, transferred 999999999999999999999875 tokens to OuroborosHook 0x7bc2…2AEC, then bootstrap(5800898166269581014816). [verified S3 S7 S8 S9]

Verified hook source: HOOK_FEE_PIPS 10000 (1%) in CRCL, _allocateCrclFee sends cumulative fees * 4/5 to burnBudget and the rest to turnReserve, automaticBuyAndBurn calls ouroboros.burn, beforeAddLiquidity/beforeRemoveLiquidity revert ExternalLiquidityForbidden. poolId() matches Gecko/DexScreener 0x6e18…590b. Secondary OUROBOROS/USDG and OUROBOROS/ETH books exist on DexScreener with far less liquidity than the CRCL book. [verified S6 S10 S11]

Gecko OUROBOROS/CRCL Uniswap v4 24h volume is 71093113.05 USD and reserve_in_usd is 73684.75 at 2026-09-03T03:31:00Z. fdv_usd is 491103.57. market_cap_usd is null. Volume/reserve is ~965. That volume figure is an aggregator claim, not treated as organic turnover. [claim S12]

DexScreener same pair: liquidity.usd 73395.02, volume.h24 73339566.86, fdv/marketCap 455485. Blockscout holders_count 574. Gecko token info holders.count 553. Pair created 2026-09-01T21:52:51Z. Hook cumulativeBuybackOuroborosBurned ~40055e18 versus constructor supply 1e6*1e18. [claim S1 S10 S13 S14]

@OuroborosOOO posted 77.7m volume and 3.9% burned at 2026-09-02T22:13:08Z. @scalper_news posted 260.2x volume versus $54k liquidity earlier that day. [claim S16 S19]

## Communications

@OuroborosOOO posted 77.7m volume and 3.9% burned [claim S16]

@scalper_news posted 260.2x volume versus pool liquidity [claim S19]

@OuroborosOOO posted day-one 1e6 supply and 25 million volume [claim S22]

X posts linked netlify claim and vote pages for the CA [claim S24]

## Findings

USD reserve counts OUROBOROS plus CRCL, not a USDG backstop. 24h volume is ~965× reserve on Gecko, so the turnover number is not treated as organic flow. Site HTML this pass does not embed the CA or handle. Unrelated X posts pointed at netlify claim/vote URLs that embed the same CA. [claim S15]

- 24h Gecko volume is ~965× pool reserve; the number is filed as claim only. [claim S12]
- Pool USD reserve is OUROBOROS plus CRCL, not a USDG backstop. [claim S12 S14]
- Site HTML this pass does not embed the CA or handle. [claim S15]
- Helper 0x6dd5…5b35 is unverified. [verified S20]
- No audit report URL this pass. [unknown]
- Third-party netlify claim/vote URLs embed this CA. [claim S24]

- Receipts: Blockscout token/hook/helper/CRCL and the create/deploy/transfer/bootstrap txs, RPC name/symbol/website/poolId/crcl/bootstrapped, DexScreener token and pair, Gecko pool and token info, /rhj/assets, ouroborus.space, @OuroborosOOO posts, and @scalper_news were opened on 2026-09-03 and excerpts copied from the responses. [verified S1 S4 S10 S12 S17]
- Numbers: 71093113.05 is the Gecko OUROBOROS/CRCL pool 24h volume, not a DexScreener figure and not an all-pools total. Reserve 73684.75 is that pool. DexScreener 73339566.86 / 73395.02 is the same pair, different aggregator. Volume is class claim. [claim S12 S14]
- Adversarial: the strongest contrary reading is that OUROBOROS is the ourolayer.com $OURO fee-layer token or a LONG/PAIR factory clone. website() is ouroborus.space, the CA is 0x87aF…80eB, factory() reverts, and create was a plain EOA create plus a custom hook. [inference S4 S15 S23]

## Sources

- S1 — Token 0x87aF…80eB Ouroboros / OUROBOROS.
- S2 — Address 0x87aF…80eB creator and verification.
- S3 — Create tx 0xfb18…3f4b.
- S4 — eth_getCode, name, symbol, website() on OUROBOROS.
- S5 — Address 0x7bc2…2AEC OuroborosHook.
- S6 — OuroborosHook verified source.
- S7 — bootstrap tx 0x3d37…59bb.
- S8 — helper deploy tx 0xd136…098e.
- S9 — transfer tx 0x70da…a3c8 to hook.
- S10 — OuroborosHook poolId, crcl, ouroboros, bootstrapped.
- S11 — latest/dex/tokens OUROBOROS.
- S12 — OUROBOROS/CRCL Uniswap v4 pool.
- S13 — Ouroboros token info.
- S14 — OUROBOROS/CRCL pair.
- S15 — ouroborus.space.
- S16 — 24 hours - 77.7m Volume.
- S17 — GET /rhj/assets CRCL row.
- S18 — Token 0xdF09…1CB5 CRCL.
- S19 — ELEVATED RISK · 60/100 $OUROBOROS.
- S20 — Address 0x6dd5…5b35 hook helper.
- S22 — Day one 1,000,000 tokens.
- S23 — Ouroboros.sol verified source.
- S24 — $OUROBOROS portal is live netlify claim URL.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T03:35:00Z; methodology_version: proofline-v1.0.
