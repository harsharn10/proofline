---
slug: quotrons
coverage: stub
methodology_version: proofline-v1.0
---

# Quotrons — research record

## Identity

Quotrons is classified as Token-bound treasury NFT.

An ERC-404 collection of 4,444 terminals: one liquid QUOTRON materializes a dark NFT, and burning that token hardwires the NFT so it can claim Stock Token rewards from a 3% Uniswap v4 QUOTRON/WETH fee. Trade on quotrons.cash, hardwire a terminal, and claim NVDA, AAPL, TSLA, GME, SPCX, SPY, PLTR, NFLX, RDDT or MSTR. @Quotrons404 runs the app.

Themes: nft, rwa, stock-paired:NVDA, hook

## Deployment

QUOTRON V2 core (Quotron404V2): 0x5a86828Efd322bfb16d93cFeD16EE9BC14940D7F on robinhood-chain. [verified S10 S14 S15 S16 S20]

V2 ERC-721 mirror (QuotronMirrorV2): 0x027ACa2794E44f24950D81227DcD516FfBB49d6e on robinhood-chain. [claim S10 S19 S20]

Canonical router (QuotronWethRouter): 0x42024fCFdB4F3089Dd619A0cEF0Cd24E7b841C18 on robinhood-chain. [claim S11 S17 S20]

Canonical Uniswap v4 hook (QuotronWethHook): 0x62E200Cc8e4D95cf622f40Dd70f407C883EcB0cc on robinhood-chain. [claim S11 S18 S20]

V2 reflections (QuotronReflectionsV2): 0xe04fba61FD54Ba78Dd450A30d8Af40167aF5d3Ec on robinhood-chain. [claim S10 S20 S32]

View quoter (QuotronWethQuoter): 0xb8960fdC8A0Be155d196C2795b75747763562df2 on robinhood-chain. [claim S11 S12 S20]

Epoch converter (QuotronEpochConverter): 0x24e62Dd5C7058CC41ad9c5375C137460ea1Da2FE on robinhood-chain. [claim S10 S33]

Recovery Safe: 0x15277aA1ecC13734d57C519a2DAA1cc4A748bA89 on robinhood-chain. [claim S10 S20 S31]

Owner / blacklist guardian (EIP-7702): 0x7171E64E979265aeD6588577D1c6b60A701d7866 on robinhood-chain. [claim S14 S16 S20]

QUOTRON/USDG Uniswap v3 pair: 0xb77e03DF4CAe1752aa1E2b52C46794026b46873E on robinhood-chain. [claim S21]

V1 QUOTRON core (retired): 0x40686524e56AfF0F1446958725dCF6e6dA5381E6 on robinhood-chain. [claim S10 S34]

## Control

`owner()` on the V2 core, hook, mirror and reflections is 0x7171E64E979265aeD6588577D1c6b60A701d7866 (cruelhand.eth). Blockscout marks it EIP-7702, delegating to SemiModularAccount7702. Verified source lets that owner pause, ban non-EOA venue codehashes and transfer ownership. `paused()` was false on core and hook. No timelock was opened. [verified S14 S20]

`blacklistGuardian()` returns the same 0x7171… key. `recoveryAdmin()` is SafeProxy 0x15277…Ba89, threshold 2, owners 0x7171… and 0xd1de50b7…9e58. Docs and source: the guardian can freeze and cannot unfreeze; the Safe can move eligible user balances and terminals. Those are disclosed trust assumptions, not a second independent owner. [verified S10 S20 S31]

## Security

Metadata is frozen (`metadataFrozen()` true). Routing addresses match the docs (canonicalRouter, floorHook, Uniswap v4 PoolManager 0x8366…). No audit report URL was located. [verified S20] [unknown]

## Engineering

_Research pending._

## Team

@Quotrons404 bio links quotrons.cash and names an ERC-404 collection on Robinhood. DexScreener token socials name the same handle and site. GitHub org mavrkofficial publishes the brand kit that the README calls official and that DexScreener lists. [verified S13 S21 S22]

The V2 deployer and owner is cruelhand.eth. @cruelhandeth bio reads shipping at @inkfndhq and posted that Sentry and quotrons.cash Exchange are the two QUOTRON venues. That is a relationship, not a merge: Sentry is a launchpad handle, not in the census, and is not this slug. [claim S16 S27 S28]

unconfirmed-official: @QUOTRONGenesis is a mint account not used as official here. @QuotronsDesktop was not resolved this pass. [claim S13] [unknown]

Census StonkBrokers, The Index and LONG share stock-reward wording only. [inference S10]

## Product and economics

QUOTRON is a 4,444-unit ERC-404 named QUOTRONS / QUOTRON, 18 decimals. Verified source is Quotron404V2.sol. One whole liquid token materializes a dark terminal; selling below a whole unit dissolves it; `hardwire(id)` burns 1e18 and leaves a permanent ERC-721. RPC at this pass: totalSupply 1,652, totalHardwired 2,792, economicUnits 4,444e18. [verified S14 S20] [claim S10]

The supported market is one Uniswap v4 QUOTRON/WETH pool (pool id 0x0b142aaf…d069, quote WETH 0x0Bd7…AD73). Swaps go user -> QuotronWethRouter 0x4202… -> that pool; the hook rejects other senders. Docs set a 3% WETH-side fee: 2% stock rewards, 0.6375% locked LP, 0.2125% STONKBROKER buy-and-burn, 0.15% creator. Ten stocks are conversion routes, not ten QUOTRON pools. Extra Uniswap v3 QUOTRON/USDG and Alandale QUOTRON/WETH books exist outside that canonical path. [claim S10 S11] [verified S21]

V1 at 0x4068… is a separate Quotron404 deployment. Docs and @cruelhandeth call it Sunset after a stale-approval incident on the V1 mirror; V2 mirror 0x027A… is a new ERC-721. Launchpad is none: the V2 core was created by 0x7171…7866, not a pad factory. Pair asset on the canonical book is WETH. Venue is Uniswap v4. [claim S10 S36] [verified S16 S21]

DexScreener Uniswap v4 QUOTRON/WETH 0x0b142aaf… at 2026-09-03T00:35:00Z: liquidity.usd 408191.86; volume.h24 961782; priceUsd 5918.29; marketCap 9776980. That marketCap tracks remaining liquid supply (~1,652 × price), not 4,444 × price (~$26.3M). Extra pair 24h volume is not included in the $961,782 figure. [claim S21]

On-chain inventory: 1,652 liquid, 2,792 hardwired, invariant 4,444. ERC-20 holders_count 3,649; ERC-721 mirror holders_count 863. [verified S15 S19 S20]

@Quotrons404 posted an 8.5 ETH OpenSea sale of V2 #1087 and a $955.01 claim from 73 hardwired terminals on 2026-09-02. Those USD marks were not summed from logs this pass. DefiLlama has no quotrons protocol row. [claim S23 S24]

## Communications

Account posts $955.01 claimed from 73 V2 terminals [claim S24]

Account posts V2 #1087 sold for 8.5 ETH on OpenSea [claim S23]

Account posts V2 terminal #3585 hardwired [claim S25]

cruelhandeth posts Sentry stock-pair launch path [claim S28]

Pond Street: Ink xStocks venue at zero epochs [claim S26]

cruelhandeth posts V1 Sunset collection retired [claim S36]

cruelhandeth posts two official QUOTRON venues [claim S27]

## Findings

The V2 owner and blacklist guardian are the same EIP-7702 account, and that key is also one of two Safe owners on the recovery admin that can move user QUOTRON and terminals. [verified S20 S31]

OpenSea overview still describes the retired ten-pool V1 design. Pairing that copy with the live V2 router overstates how rewards are funded. [claim S30 S10]

A Pond Street piece dated 2026-08-29 said an Ink xStocks venue tied to the same operator had run zero epochs. That is a second chain, not a reason to merge this slug with Sentry. [claim S26 S28]

- Owner, blacklist guardian and Safe signer 1 are the same EIP-7702 key; recovery can move user terminals. [verified S20 S31]

- OpenSea overview still describes ten QUOTRON/stock pools (V1). [claim S30]

- Ink xStocks venue and Sentry swap are related surfaces, not this collection's 4663 contracts. [claim S26 S27]

- No audit report was located. [unknown]

- Lowercase OpenSea slug quotrons404 is a different 10,000-item mint. [claim S35]

- Receipts: llms.txt, llms-full.txt, integration.md, manifest.json, X profile and four posts, Pond Street, OpenSea V2 / overview / lowercase mint, GitHub brand kit, Blockscout token/tx/router/hook/mirror/reflections/converter/Safe/V1, DexScreener token API, and RPC calls were opened on 2026-09-03 and excerpts copied from the responses. [verified S9 S10 S14 S20 S21]

- Numbers: DexScreener volume and marketCap are Uniswap v4 QUOTRON/WETH 0x0b142aaf…, not all QUOTRON pairs. Holders 3649 is the ERC-20 token. Hardwired 2792 and liquid 1652 are RPC views that satisfy the 4,444 invariant. Site dashboard census figures were not copied from the SPA shell. [claim S15 S21] [verified S20]

- Adversarial: the strongest contrary reading is that Quotrons is the Ink xStocks venue, or Sentry, or StonkBrokers, because @cruelhandeth ships at Ink, posted Sentry as a QUOTRON venue, and V2 fees buy STONKBROKER. The 4663 collection, router and Uniswap v4 pool id are distinct from Sentry and from StonkBrokers 0x539c…; Pond Street itself splits the Ink venue from the Robinhood collection. A weaker contrary reading is that V2 still trades ten stock pools: OpenSea overview says that, DexScreener and the manifest show one WETH pool. [inference S21 S26 S27 S30]

## Sources

- S9 — QUOTRONS V2 llms.txt.
- S10 — QUOTRONS V2 complete reference.
- S11 — Integrate QUOTRON swaps.
- S12 — Integration manifest.
- S13 — X profile @Quotrons404.
- S14 — Address 0x5a86…0D7F.
- S15 — Token page QUOTRON V2.
- S16 — V2 core creation tx 0x222e4f….
- S17 — QuotronWethRouter 0x4202….
- S18 — QuotronWethHook 0x62E2….
- S19 — QuotronMirrorV2 0x027A….
- S20 — eth_getCode, ERC-20 views, owner, launch gates, Safe.
- S21 — QUOTRON token pairs on Robinhood.
- S22 — quotrons-brand-kit README.
- S23 — V2 #1087 sold for 8.5 ETH.
- S24 — Pretovich claimed $955.01.
- S25 — V2 #3585 hardwired.
- S26 — Quotrons burned 60% / Ink venue zero epochs.
- S27 — Build on QUOTRONS: two venues.
- S28 — Sentry launcher stock-pair path.
- S30 — Quotrons404 overview (ten-pool copy).
- S31 — Recovery Safe 0x15277….
- S32 — QuotronReflectionsV2 0xe04f….
- S33 — QuotronEpochConverter 0x24e6….
- S34 — V1 QUOTRON 0x4068….
- S35 — Lowercase quotrons404 mint collection.
- S36 — Sunset means V1 retired.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T00:45:00Z; methodology_version: proofline-v1.0.
