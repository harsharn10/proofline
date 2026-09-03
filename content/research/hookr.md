---
slug: hookr
coverage: stub
methodology_version: proofline-v1.0
---

# Hookr — research record

## Identity

Hookr is classified as Programmable-hook launchpad.

Hookr composes Uniswap v4 hooks on Robinhood Chain. A user stacks up to five on-swap rules, publishes the hook for royalties, and opens a new token pool with those rules fixed at creation. Instant launches open at a platform-wide 2.5 ETH FDV; auctions use Uniswap CCA. $HOOKR trades in a hookless v4 pool. The deployer EOA is labelled nodar.eth.

Themes: hook, tooling, memecoin, launchpad

## Deployment

HOOKR token: 0x18E674231A58c239Dc7DaeDcffE15Ec3A24cff5c on robinhood-chain. [verified S7 S9 S23]

HookrLaunchpadV5 (docs current live): 0xa043caBE645636899dDe91Cce4693C00a015e660 on robinhood-chain. [verified S8 S10]

HookrHook generation 5 (docs current live): 0xe7c3461A4c762fF9dB4F91BeE3Cf8deAaFc2E8CC on robinhood-chain. [verified S8 S11]

Bounded HookrSwapRouter (docs current live): 0x644ac2e784059e1C01F24f99DF7795aE2be06ca0 on robinhood-chain. [claim S8 S25]

HookrFlywheelBurner: 0x8Cee20FA000aF3266AC2cD2cBeEFbcD19D98FD89 on robinhood-chain. [claim S8 S26]

HookrLaunchpad generation 3 (GitHub README live table; retained): 0xaAed6fab06D53311220F35421Dda5cc6D6e9d6C3 on robinhood-chain. [verified S12 S21]

HookrHook generation 3 (GitHub README live table; retained): 0xd0005624Da88a688BcaB3DBFB4d1Cb23d32Ca0CC on robinhood-chain. [verified S13 S21]

## Control

HookrLaunchpadV5 and HookrLaunchpad were created by the same EOA, 0x5a52D4B820Ae7F02880d270562950918ACb14aA2, labelled nodar.eth. Verified source sets owner to msg.sender at deploy and exposes proposeOwner / acceptOwnership with no timelock. Owner powers include setCreationFee, withdrawProtocolFees, and on V5 setAuctionTiming; setHook is one-shot. Live owner() was not eth_called this pass (RPC 403). [inference S10 S12 S22]

## Security

Docs and the GitHub README both state that nothing is independently audited. Release evidence is the project's own tests, canary receipts, and verified source. The Nth-buy pot is a public counter, not a random draw. [claim S21 S22]

## Engineering

_Research pending._

## Team

Official identity is bidirectional: hookr.fun names @hookrfun and the token address; the X profile @Hookrfun links hookr.fun. Site casing is @hookrfun; the X display handle is @Hookrfun. Search also returned @Hookrfun_x and @Hookrfun_ with similar bios; the site says @hookrfun only. [verified S7 S14]

The deployer EOA is labelled nodar.eth. @NodarJ's bio states currently building @hookrfun powered by @0xzaps. GitHub org Hookr-fun / hookr-contracts README links hookr.fun; the homepage did not surface that repository this pass. HookOS (@hookosfun) and What The Hook (@whatthehookv4) are separate products. No official Telegram or Discord was listed. [claim S10 S19 S21]

## Product and economics

Hookr is a Uniswap v4 hook composer. A creator stacks up to five blocks that run inside the pool's swap callbacks — Anti-Snipe, Surge Fees, Auto Burn, LP Rewards, Nth-buy Pot — with no keeper and no oracle. Those parameters are fixed when the pool opens; attaching a hook to a token that already trades is not offered. Reusable hooks can pay a recorded royalty to the author when another launch uses them. [claim S7 S8 S22]

Generation 5 is the current documented launch path for new tokens: Instant places the whole 1,000,000,000 supply as one locked, launchpad-owned sell position at a platform-wide 2.5 ETH FDV; Auction sells the supply minus a 20–50% reserve through Uniswap's Continuous Clearing Auction and opens the pool at the clearing price if a disclosed raise floor is met, else refunds and burns. Either lane can quote ETH or $HOOKR. Docs say the stepped bonding curve of generations 3–4 is retained for those tokens and is not offered for new launches. [claim S7 S8]

ETH-paired generation-5 swaps pay a flat 0.3% protocol fee into HookrFlywheelBurner; only that contract's owner may spend the ETH on a capped, once-per-block HOOKR buyback. $HOOKR-quoted launches pay no protocol fee and may use only Anti-Snipe and Surge Fees. Liquidity positions are owned by the launchpad with no remove function in the verified source. [claim S7 S8 S26]

The project token $HOOKR is not a HookrLaunchpad launch. It was created on 2026-08-06 through LiquidityLauncher v3.2.0; the Uniswap v4 position NFT for its listed market says Hook Address: No Hook, matching the FAQ. [verified S7 S23]

DexScreener's HOOKR/ETH Uniswap v4 pair (pool id 0x590dcb…) showed liquidity 625860.84 USD, 24h volume 2560204.85 USD, and marketCap/fdv 9295895 USD at fetch. That is the listed hookless pool, not protocol TVL. Blockscout reported 5412 holders and circulating_market_cap about 8.29 million USD on the token object. DefiLlama has no Hookr protocol row. [claim S9 S20 S24]

The docs token tooltip reported 3493894.22 HOOKR at 0xdEaD as of block 52926793. @Hookrfun posted 2.5M burned on 2026-08-29 and nearly 3.5M burned on 2026-09-02. Those burn totals were not eth_called this pass. Generation-3 launchpad had 354 transactions; V5 had 151. [claim S8 S12 S15 S18]

## Communications

Website pauses new hook and token launches [claim S15]

Hook Analyzer screening layer announced [claim S16]

Uniswap approves Hookr hooks for routing [claim S17]

Account posts 2.5M HOOKR burned [claim S18]

Account posts 2FA secured [claim S19]

## Findings

Both launchpads are Ownable with two-step handover and no timelock, so fee, timing, and protocol-fee withdrawal can move when the owner key moves. Docs state there is no independent audit. Generation 3 and generation 5 contracts are both live; GitHub still tables generation 3 as the live deployment while docs name V5. On 2026-09-02 the official account paused new website launches during a contract move. [claim S7]

- Owner is an EOA path with two-step handover and no timelock on fee, timing, and protocol-fee withdrawal. [inference S10 S22]
- Docs and GitHub state there is no independent audit. [claim S21 S22]
- Two launchpad generations are live; GitHub still tables generation 3 as live while docs name V5. [disputed S8 S21]
- New website launches were posted as paused on 2026-09-02 during a modular contract move. [claim S15]
- Hook rules cannot be changed on a live pool; a parameter error is permanent for that token. [claim S22]
- $HOOKR's listed market is hookless and was launched on LiquidityLauncher, so holder flow on that pair is not a read of hooked-pool activity. [verified S7 S23]

- Receipts: official site, docs, X profile and status URLs, GitHub README, DexScreener token API, DefiLlama protocol URL, and Blockscout address/tx APIs were opened on 2026-09-03; excerpts are copied from those responses. [verified S7 S8 S9 S10 S11 S12 S13 S14 S15 S20 S21 S23]
- Numbers: holders 5412 is the Blockscout token field; 24h volume 2560204.85 USD and liquidity 625860.84 USD are the DexScreener HOOKR/ETH v4 pair slice, not an all-pairs or all-chains total; DefiLlama has no Hookr protocol TVL. [claim S9 S20 S24]
- Adversarial: the strongest contrary reading is that Hookr is the chain's pad competitor (Pons-class) or that it is HookOS / What The Hook / pools.trade. Official copy names a hook marketplace, states independence from pools.trade, and uses different handles from HookOS and WTH; $HOOKR's own pool is hookless and was created on LiquidityLauncher, which cuts the other way — the project token is not a HookrLaunchpad graduate. [inference S7 S14 S23]

## Sources

- S7 — hookr.fun homepage and FAQ.
- S8 — Hook launchpad docs — live contracts and mechanism.
- S9 — HOOKR token 0x18E674….
- S10 — HookrLaunchpadV5 0xa043….
- S11 — HookrHook generation 5 0xe7c346….
- S12 — HookrLaunchpad generation 3 0xaAed….
- S13 — HookrHook generation 3 0xd000….
- S14 — @Hookrfun profile.
- S15 — Pause new launches; ~3.5M burned.
- S16 — Introducing Hook Analyzer.
- S17 — Uniswap routing eligibility.
- S18 — Closing in on 2.5M HOOKR burned.
- S19 — We're back! 2FA Secured!.
- S20 — HOOKR token pairs on Robinhood.
- S21 — hookr-contracts README live deployment.
- S22 — Docs — What Hookr does not claim.
- S23 — HOOKR creation tx 0x531678….
- S24 — api.llama.fi/protocol/hookr.
- S25 — HookrSwapRouter 0x644ac2….
- S26 — HookrFlywheelBurner 0x8Cee20….

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-03T16:30:00Z; methodology_version: proofline-v1.0.
