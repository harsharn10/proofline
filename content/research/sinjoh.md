---
slug: sinjoh
coverage: stub
methodology_version: proofline-v1.0
---

# Sinjoh — research record

## Identity

Sinjoh is classified as Fee-routing protocol.

A fee-routing layer on top of Robinhood Chain launchpads. Creators launch through Sinjoh on Pons, Flap, pools.trade or LetsCash; collected fees hit a per-launch router that splits, swaps, airdrops, burns or adds liquidity on a config locked at deploy. Holders of customer tokens receive those routed assets. INJOH is the protocol token, launched on Pons. sinjoh.com and @SinjohDeFi run the surface.

Themes: launchpad, rwa, stock-paired:NVDA, nft, vault

## Deployment

INJOH token (PonsLauncherToken): 0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D on robinhood-chain. [verified S7 S8 S9]

INJOH/WETH Uniswap v3 pair: 0xB09fa4f04032b9d9e690ac4a1d29523b5f9A72DC on robinhood-chain. [claim S9 S10 S6]

INJOH SinjohFeeRouter clone: 0x7E97EadeA120321c65CC09B6FDECc6Eb15D55b2f on robinhood-chain. [claim S9 S12 S13]

SinjohFeeRouter implementation: 0x17c76Ff58b7Da12E116bb22ebDcc7F31Cadf9B64 on robinhood-chain. [claim S12 S13 S18]

SinjohFeeRouterFactory: 0xFA51E67f799699A237D558F5FbE7B170F8c5584d on robinhood-chain. [claim S12 S14 S18]

PonsLaunchFactory (INJOH creator): 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB on robinhood-chain. [claim S7 S9 S11]

SinjohRevenueCollector: 0x5Bb7582557F5be30b62c335Ad3ccf4bA79E138c5 on robinhood-chain. [claim S15 S18]

Revenue-collector owner / GitHub governance key: 0x39E2f5eFdFd808F26B98979a06BA11ea82E1C85f on robinhood-chain. [claim S15 S16 S18]

## Control

SinjohRevenueCollector 0x5Bb7… is verified source; owner() returns EOA 0x39E2… with empty code. The same EOA is named governance in the unconfirmed GitHub registry, which also says renounceOwnership is permanently disabled. Deployer EOA 0x3d58… created the factory, implementation and collector and sent the INJOH launch transaction. [verified S15 S16]

The INJOH router 0x7E97… is an EIP-1167 clone of verified SinjohFeeRouter 0x17c76…, created by verified SinjohFeeRouterFactory 0xFA51…. owner() on clone and implementation reverts, so the live split and any post-deploy setter are unread. GitHub lists quoteSigner 0xd89f… on buyback floors; that key was not eth_call-checked. [verified S12 S13]

## Security

AUDITS.md in github.com/Sinjoh-Finance/sinjoh-contracts (2026-08-18) states no independent third-party audit of the Sinjoh-owned set. The site and X profile do not link that repository. No DefiLlama audits field exists because there is no protocol row. [unknown]

## Engineering

_Research pending._

## Team

Official identity is bidirectional this pass: @SinjohDeFi bio carries the CA and sinjoh.com; the site links the Pons launchpad page for 0x2cC0… and app.sinjoh.com; DexScreener token info repeats that pair; constructor socials match. Telegram and Discord constructor fields are empty. [verified S4 S5 S6 S9]

github.com/Sinjoh-Finance/sinjoh-contracts publishes 4663 addresses that match the reproduced deployer, factory, implementation and collector. No official-site or X link to that org was found, so the repository stays unconfirmed. [claim S18]

## Product and economics

Creators pick a supported pad and a fee route. At launch, SinjohFeeRouterFactory deploys an EIP-1167 clone; that clone is the fee recipient. Anyone can advance queued steps if keepers lag, per the public explainer the project pinned to its own launch thread. Pads named on the site are Pons (bonding curve), Flap (native-quote tax tokens), pools.trade (Uniswap v4 instant or LBP) and LetsCash. [claim S4 S19]

INJOH is a 1,000,000,000-supply PonsLauncherToken created 2026-07-31T00:40:38Z when EOA 0x3d58… called launchPonsToken on clone 0x7E97… against PonsLaunchFactory. The same transaction created Uniswap v3 INJOH/WETH 0xB09f… (1% fee, quote WETH 0x0Bd7…) and sent UNI-V3-POS 517948 to PonsLaunchLocker. Constructor socials are https://x.com/SinjohDeFi and https://sinjoh.com/. [verified S9 S10]

Site copy for the INJOH flywheel: 70% of INJOH trading fees from Pons plus a 1% protocol fee on every Sinjoh deployment, then 40% INJOH burn, 20% team, 15% PONS airdrop, 15% NVDA, 5% PONS burn, 5% INJOH LP. That split was not eth_call-decoded from the clone this pass. totalSupply() remains 1e27, so posted 4.5% burns are not an ERC-20 supply reduction. [claim S4 S20]

DexScreener Uniswap v3 INJOH/WETH 0xB09f… this pass: liquidity 197316.65 USD, volume.h24 940940.38 USD, marketCap 2338177 USD. That is the token book. Blockscout holders_count 2292. totalSupply 1,000,000,000e18. [claim S6 S8]

No DefiLlama protocol/sinjoh row. Pair liquidity is not protocol TVL. Project posts of $48,000 PONS+NVDA airdropped and 4.5% INJOH burned are official claims, not summed from logs here. [claim S20 S26]

## Communications

Bug fixed; Piggy Banks mint time still pending [claim S24]

Piggy Banks NFT mint postponed after a test bug [claim S23]

INJOH snapshot taken for Piggy Banks whitelist [claim S22]

Project posts 4.5% INJOH burned and $48k airdropped [claim S20]

Yield Banks posted live later the same day [claim S21]

SAFEHOOD cited as a Sinjoh customer on Pons [claim S25]

## Findings

Protocol revenue lands in a collector whose owner is a single externally owned account with no timelock reproduced here. Posted INJOH burn percentages are not a drop in ERC-20 totalSupply, which is still 1,000,000,000e18. Fee-router splits for INJOH are site copy until the clone's stored buckets are read. No independent audit report is published. The Piggy Banks collection address is not on the app page. [claim S4]

- Revenue collector owner is one EOA (0x39E2…) with no timelock reproduced. [verified S15 S16]

- INJOH fee-router clone config and post-deploy setters were not read; owner() reverts. [verified S12]

- Posted INJOH burns do not reduce totalSupply(), which is still 1e27. [verified S8]

- No independent audit report of the deployed Sinjoh set. [unknown]

- Piggy Banks collection address and mint completion are unpublished after a 2026-09-02 postpone. [claim S23 S27]

- Receipts: site, app piggy-banks page, X profile and named status URLs, DexScreener token API, DefiLlama protocol/sinjoh (404), GitHub AUDITS.md and mainnet-deployments.json, and Blockscout address/tx/token APIs plus RPC eth_getCode/eth_call were opened on 2026-09-02; excerpts are copied from those responses. [verified S4 S7 S9 S6]

- Numbers: volume 940940.38 and marketCap 2338177 are the Uniswap v3 INJOH/WETH pair slice, not all INJOH pairs and not protocol TVL. holders 2292 and totalSupply 1e27 are Blockscout/RPC token fields. Project $48k airdrop and 4.5% burn figures are posts. [claim S6 S8 S20]

- Adversarial: the strongest contrary reading is that Sinjoh is a Pons clone, the census Safehood pad, or still announced because the 2026-08-31 census row used only project posts. The launch tx is launchPonsToken from a SinjohFeeRouter clone; Pons is the factory, not the router. $SAFEHOOD is a customer CA, not safehood.fun. Token, pair and router exist on 4663 with verified source. [inference S9 S12 S25]

## Sources

- S4 — sinjoh.com homepage.
- S5 — @SinjohDeFi profile.
- S6 — INJOH token pairs on Robinhood.
- S7 — INJOH token address 0x2cC0…a77D.
- S8 — INJOH token object.
- S9 — INJOH creation tx 0x98738893….
- S10 — INJOH/WETH UniswapV3Pool 0xB09f…72DC.
- S11 — PonsLaunchFactory 0xA5aAb3…351feB.
- S12 — INJOH SinjohFeeRouter clone 0x7E97…5b2f.
- S13 — SinjohFeeRouter implementation 0x17c76…9B64.
- S14 — SinjohFeeRouterFactory 0xFA51…584d.
- S15 — SinjohRevenueCollector 0x5Bb7…38c5.
- S16 — Governance key 0x39E2…C85f.
- S18 — mainnet-deployments.json.
- S19 — Introducing Sinjoh.
- S20 — 4.5% INJOH burned and $48k airdropped.
- S21 — Yield Banks goes live later today.
- S22 — Piggy Banks INJOH snapshot taken.
- S23 — NFT mint postponed for a test bug.
- S24 — Bug fixed; mint time to follow.
- S25 — SAFEHOOD deployed through Sinjoh on Pons.
- S26 — api.llama.fi/protocol/sinjoh.
- S27 — Piggy Banks app page.

## Review metadata

Compiled from WORK-20260903-grok-heavy-icarus-research by grok-heavy as of 2026-09-02T23:30:00Z; methodology_version: proofline-v1.0.
