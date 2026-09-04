---
slug: launchhood
coverage: stub
methodology_version: proofline-v1.0
---

# LaunchHood — research record

## Identity

LaunchHood is classified as Uniswap-pool launchpad.

LaunchHood is a memecoin launchpad on Robinhood Chain at launchhood.com. The live create path is LaunchHoodV3Factory: one transaction mints a 1B-supply token into a Uniswap V3 1% pool and sends the LP NFT to LaunchHoodV3Locker. Docs treat 4 ETH of net buys as a site graduation badge, not a pool migration. The handle is @Launchhood; the bio still says First Launchpad built on pools.trade.

Themes: launchpad

## Deployment

LaunchHoodV3Factory (current launchToken entry): 0x62B33A039D289CBDa50EbeB72Fe4261449E61Bcf on robinhood-chain. [verified S2 S3 S13 S14]

LaunchHoodV3Locker: 0x99B79154Ff4Fc0e313549B809254B02722631ee0 on robinhood-chain. [verified S2 S3 S13 S15]

LaunchHoodV3Token implementation: 0x5FDf73abC7A232d91b03638c2f9a52c16aB0E3bE on robinhood-chain. [verified S2 S3 S13 S16]

LaunchHoodFactory (legacy v4 createToken; created $Launch): 0x2e9fbF18F6492F6651B983c34629d292516DE86e on robinhood-chain. [claim S3 S13 S17 S18]

$Launch protocol token (EIP-1167 LaunchHoodToken clone): 0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de on robinhood-chain. [verified S7 S10 S13 S19]

V3 factory owner() / PROTOCOL_TREASURY: 0x73267feDc2C79a37782C19950b2989B208cfEaA4 on robinhood-chain. [verified S13 S14 S20]

## Control

_Research pending._

## Security

V3 factory, locker, and token implementation are verified, non-proxy contracts. owner() 0x73267feDc2C79a37782C19950b2989B208cfEaA4. Same EOA is PROTOCOL_TREASURY and created the locker and token impl. Locker bytecode has collect and does not contain withdraw / decreaseLiquidity / transferFrom selectors; owner() on the locker reverts. No timelock address was located. No audit URL. [verified S13 S14 S15] [claim S2]

## Engineering

_Research pending._

## Team

launchhood.com links https://x.com/launchhood in the navbar. @Launchhood bio names pools.trade, not launchhood.com, and prints $Launch 0x63575bCC…C0de. DexScreener token info lists launchhood.com and x.com/launchhood. Flag unconfirmed-official. No GitHub org or user. Display name Launchhood vs site LaunchHood. [claim S1 S7 S23 S25]

## Product and economics

Docs: no bonding-curve pre-DEX phase. The pool the coin starts in is the pool it lives in. Supply 1B, all in the pool. Temporary 2% max-wallet for 366 blocks. Optional initial buy in the launch transaction. Creator fees claimable from /claim; reward recipient can be set at launch. [claim S2 S4]

The create page calls launchToken on LaunchHoodV3Factory. JS also retains a legacy 4663 map (LaunchHoodFactory, LaunchHoodHook, LaunchHoodTokenImpl) from the v4 path the handle said it left on 30 Jul 2026. $Launch 0x63575bCC…C0de was created through that older factory on 12 Jul, the day before the V3 factory deploy. [claim S3 S9] [verified S18]

Llama has no launchhood protocol. Gecko and DexScreener figures above are the $Launch token book (fdv ~20k, 24h volume ~9k), not pad TVL. V3 factory nonce 4149 and Blockscout transactions_count 4151 are on-chain activity signals; they are not a verified token census. Handle 5 Aug claimed 600 tokens launched on pools.trade — that is the Instant Mode frontend, not a V3-factory count. Latest handle post 11 Aug. [claim S8 S21 S22 S24 S28]

## Communications

@Launchhood posts v4-to-v3 move [claim S9]

@Launchhood posts pools.fun trading live on launchhood.com [claim S8]

@Launchhood posts Buyback/Burn Mode for pools.trade Instant Mode [claim S11]

## Findings

owner() and PROTOCOL_TREASURY() on the V3 factory are one EOA with no code. JS ABI lets that owner set the launch fee, whitelist launchers, and change dex/launch configs. The official indexer is stale, so activity counts from it are not usable. Handle copy still describes a 0.25% pools.trade Instant Mode path that /docs no longer describes. [verified S13 S14] [claim S3 S11]

- V3 factory owner is one EOA; ABI includes setLaunchFee and config updates. [verified S13]
- Official indexer is not ready; do not use totalCount 0. [verified S26]
- Handle bio still points at pools.trade; current docs are a different Uniswap V3 factory. [claim S2 S7]
- $Launch is a legacy v4-factory clone, not a V3-factory launch. [verified S18]
- No audit report URL. [unknown]
- Handle has not posted since 2026-08-11 this pass. [claim S8]

- Receipts: launchhood.com, /docs, /create, /claim, JS address map, X profile and posts, t.co expand to pools.trade, Gecko token+info, DexScreener, Llama 400, GitHub 404, indexer GraphQL, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified S1 S2 S13 S14]
- Numbers: $Launch fdv/volume are Gecko/DexScreener token books, not pad TVL. Bytecode lengths, nonce, owner(), launchFee, LOCKER, TOKEN_IMPL are chain 4663 RPC. Factory tx count is Blockscout counters. [verified S13 S21 S22]
- Adversarial: strongest contrary reading is that LaunchHood is just a pools.trade UI and should merge into packed pools-trade. /docs and the create page target LaunchHoodV3Factory 0x62B33A03…1Bcf, a verified contract this pad's EOA deployed on 13 Jul, not Uniswap Labs 0x0000FffF…19C0 / InstantLaunchStrategy 0x23f82095…27f1. Bio naming pools.trade is historical frontend copy. [inference S2 S3 S13]

## Sources

- S1 — launchhood.com home.
- S2 — Docs — LaunchHood.
- S3 — launchhood.com JS address map (chunk 12-baa0398882ffcc6b.js).
- S4 — Create coin page.
- S7 — Launchhood profile.
- S8 — pools.fun trading is live on launchhood.com.
- S9 — We started with v4 but later moved to v3.
- S10 — Address 0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de.
- S11 — Buyback/Burn Mode for pools.trade Instant Mode.
- S13 — eth_getCode / owner() LaunchHood V3 stack.
- S14 — Address 0x62B33A039D289CBDa50EbeB72Fe4261449E61Bcf.
- S15 — Address 0x99B79154Ff4Fc0e313549B809254B02722631ee0.
- S16 — Address 0x5FDf73abC7A232d91b03638c2f9a52c16aB0E3bE.
- S17 — Address 0x2e9fbF18F6492F6651B983c34629d292516DE86e.
- S18 — $Launch creation tx 0xfb093139…f05f.
- S19 — eth_getCode $Launch and LaunchHoodToken impl.
- S20 — Address 0x73267feDc2C79a37782C19950b2989B208cfEaA4.
- S21 — token 0x63575bcc…c0de.
- S22 — Factory counters 0x62B33A03…1Bcf.
- S23 — latest/dex/tokens $Launch.
- S24 — protocol/launchhood.
- S25 — orgs/launchhood.
- S26 — indexer _meta stale.
- S28 — Launchhood is leading launcher on pools.trade.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T04:36:00Z; methodology_version: proofline-v1.0.
