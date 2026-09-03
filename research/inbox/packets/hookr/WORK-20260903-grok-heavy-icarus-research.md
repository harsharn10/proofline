---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: hookr
name: Hookr
packet_tier: full
as_of: 2026-09-03T16:30:00Z
prior_packet: null
supersedes: null
owned_slugs: [hookr]
allowed_paths:
  - research/inbox/packets/hookr/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Hookr
  aliases: ["Hookr.fun", "hookr.fun"]
  symbols: [HOOKR]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://hookr.fun
  official_handle: "@Hookrfun"
  repository: https://github.com/Hookr-fun/hookr-contracts
  possible_matches:
    - slug: what-the-hook
      signals: [other]
      contrary_signals:
        - "Census What The Hook is an MEV-redistribution hook at @whatthehookv4; Hookr is a v4 hook marketplace and hooked-pool launcher at hookr.fun / @Hookrfun"
        - "No shared domain, handle, or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Hookr FAQ and docs state independence from pools.trade while describing generation 5 as a pool-first model familiar from that product"
        - "$HOOKR itself was created through LiquidityLauncher v3.2.0, not through HookrLaunchpad or HookrLaunchpadV5"

classification:
  primary_leaf: launch/hook-programmable
  secondary_leaves: []
  mechanism_tags: [amm, fee-routing, launchpad]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "The durable product is a Uniswap v4 hook marketplace: authors compose up to five on-swap blocks, publish reusable hooks, and attach those rules to a new token's first pool. Token launch is the distribution of that hooked pool (generation 5: Instant at a fixed 2.5 ETH FDV, or Auction via Uniswap CCA), not a bonding-curve pad in the Pons/Flap sense. launch/hook-programmable is the only hook-launch leaf; trading/hook-mev is the MEV-redistribution leaf used by What The Hook and does not describe this product. Do not rank Hookr next to Pons on a launchpad leaderboard. Taxonomy has no hook mechanism tag, so amm / fee-routing / launchpad are the closest controlled tags. Lifecycle is mainnet: token, generation-5 launchpad/hook, and retained generation-3 launchpad/hook all exist with verified source on chain 4663. [R-1] [R-2] [R-3] [R-4] [R-5] [R-6] [R-7]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-7], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9, CLM-27], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-11, CLM-19, CLM-20], note: "" }

links:
  - { kind: site, url: "https://hookr.fun", authenticity: confirmed }
  - { kind: docs, url: "https://hookr.fun/docs", authenticity: confirmed }
  - { kind: app, url: "https://hookr.fun/builder", authenticity: confirmed }
  - { kind: x, url: "https://x.com/hookrfun", authenticity: confirmed }
  - { kind: github, url: "https://github.com/Hookr-fun/hookr-contracts", authenticity: unconfirmed }

deployments:
  - label: HOOKR token
    role: token
    address:
      value: "0x18E674231A58c239Dc7DaeDcffE15Ec3A24cff5c"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-17]
  - label: HookrLaunchpadV5 (docs current live)
    role: factory
    address:
      value: "0xa043caBE645636899dDe91Cce4693C00a015e660"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-4]
  - label: HookrHook generation 5 (docs current live)
    role: other
    address:
      value: "0xe7c3461A4c762fF9dB4F91BeE3Cf8deAaFc2E8CC"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: Bounded HookrSwapRouter (docs current live)
    role: router
    address:
      value: "0x644ac2e784059e1C01F24f99DF7795aE2be06ca0"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-20]
  - label: HookrFlywheelBurner
    role: other
    address:
      value: "0x8Cee20FA000aF3266AC2cD2cBeEFbcD19D98FD89"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-21]
  - label: HookrLaunchpad generation 3 (GitHub README live table; retained)
    role: factory
    address:
      value: "0xaAed6fab06D53311220F35421Dda5cc6D6e9d6C3"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-15]
  - label: HookrHook generation 3 (GitHub README live table; retained)
    role: other
    address:
      value: "0xd0005624Da88a688BcaB3DBFB4d1Cb23d32Ca0CC"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-15]

metrics:
  - { kind: holders, value: 5412, currency: null, as_of: 2026-09-03T16:10:00Z, window: point, method: "Blockscout GET /api/v2/tokens/0x18E674231A58c239Dc7DaeDcffE15Ec3A24cff5c holders_count", class: claim, receipt_ids: [R-3] }
  - { kind: volume_24h, value: 2560204.85, currency: USD, as_of: 2026-09-03T16:12:00Z, window: 24h, method: "DexScreener latest/dex/tokens HOOKR Uniswap v4 HOOKR/ETH pair 0x590dcb… volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-14] }
  - { kind: market_cap, value: 9295895, currency: USD, as_of: 2026-09-03T16:12:00Z, window: point, method: "DexScreener same HOOKR/ETH v4 pair marketCap/fdv field", class: claim, receipt_ids: [R-14] }
  - { kind: tvl, value: 625860.84, currency: USD, as_of: 2026-09-03T16:12:00Z, window: point, method: "DexScreener same pair liquidity.usd (listed HOOKR/ETH v4 pool, not protocol TVL; DefiLlama has no Hookr protocol row)", class: claim, receipt_ids: [R-14, R-19] }

reproductions:
  - { id: REP-1, method: api, chain_id: 4663, checked_at: 2026-09-03T16:08:00Z, receipt_ids: [R-3, R-17], result: "Blockscout address 0x18E674… is_contract true, is_verified true, name UERC20, token Hookr.fun/HOOKR, holders_count 5412, creator 0x000000e200088D55C39a11F609E5F667729ad49b (UERC20Factory); creation tx 0x531678… 2026-08-06T04:20:57Z from nodar.eth to LiquidityLauncher 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0; UNI-V4-POSM metadata Hook Address: No Hook" }
  - { id: REP-2, method: api, chain_id: 4663, checked_at: 2026-09-03T16:10:00Z, receipt_ids: [R-4], result: "0xa043caBE… is_contract true, is_verified true, name HookrLaunchpadV5, created 2026-08-21T00:26:32Z in tx 0x89f364… by 0x5a52D4B8… (nodar.eth); verified source HookrLaunchpadV5.sol contractVersion 5.0.1; counters transactions_count 151" }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T16:11:00Z, receipt_ids: [R-5], result: "0xe7c3461A… is_contract true, is_verified true, name HookrHook, created 2026-08-21T00:26:34Z via CREATE2 0x4e59b448… in tx 0xd4e684… from nodar.eth" }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T16:09:00Z, receipt_ids: [R-6], result: "0xaAed6fab… is_contract true, is_verified true, name HookrLaunchpad, created 2026-08-04T16:21:43Z in tx 0x8b82df… by nodar.eth; counters transactions_count 354" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T16:11:00Z, receipt_ids: [R-7], result: "0xd0005624… is_contract true, is_verified true, name HookrHook, created 2026-08-04T16:21:45Z via CREATE2 0x4e59b448… in tx 0xb6857f…" }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T16:05:00Z, receipt_ids: [R-1, R-8], result: "hookr.fun FAQ names @hookrfun and token 0x18E674…; X @Hookrfun bio links hookr.fun" }
  - { id: REP-7, method: api, chain_id: 4663, checked_at: 2026-09-03T16:12:00Z, receipt_ids: [R-14], result: "DexScreener HOOKR/ETH Uniswap v4 pair 0x590dcb… labels v4, liquidity.usd 625860.84, volume.h24 2560204.85, marketCap 9295895, websites hookr.fun and hookr.fun/docs" }
  - { id: REP-8, method: document-scope, checked_at: 2026-09-03T16:06:00Z, receipt_ids: [R-2, R-16], result: "Docs Current live contracts list V5 launchpad 0xa043…, hook 0xe7c346…, router 0x644ac2…, burner 0x8Cee20…, token 0x18E674…; GitHub README still tables generation 3 0xaAed… / 0xd000…" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Uniswap v4 hook marketplace: compose up to five on-swap blocks, publish reusable hooks with author royalties, and open a new token's first pool with those rules fixed at creation. Generation 5 distributes that pool via Instant (fixed 2.5 ETH FDV) or Auction (Uniswap CCA), not a bonding-curve pad.", class: claim, observed_at: 2026-09-03T16:05:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-6, REP-8], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://hookr.fun", class: verified, observed_at: 2026-09-03T16:05:00Z, receipt_ids: [R-1, R-8], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@Hookrfun", class: verified, observed_at: 2026-09-03T16:05:00Z, receipt_ids: [R-1, R-8], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x18E674231A58c239Dc7DaeDcffE15Ec3A24cff5c", class: verified, observed_at: 2026-09-03T16:08:00Z, receipt_ids: [R-1, R-3, R-17], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xa043caBE645636899dDe91Cce4693C00a015e660", class: verified, observed_at: 2026-09-03T16:10:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [REP-2, REP-8], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0xe7c3461A4c762fF9dB4F91BeE3Cf8deAaFc2E8CC", class: verified, observed_at: 2026-09-03T16:11:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-3, REP-8], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0xaAed6fab06D53311220F35421Dda5cc6D6e9d6C3", class: verified, observed_at: 2026-09-03T16:09:00Z, receipt_ids: [R-6, R-15], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0xd0005624Da88a688BcaB3DBFB4d1Cb23d32Ca0CC", class: verified, observed_at: 2026-09-03T16:11:00Z, receipt_ids: [R-7, R-15], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-9, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T16:11:00Z, receipt_ids: [R-3, R-4, R-6], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: launch/hook-programmable, class: inference, observed_at: 2026-09-03T16:20:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "Listed $HOOKR market is a hookless Uniswap v4 pool; site FAQ and UNI-V4-POSM metadata both say no hook", class: verified, observed_at: 2026-09-03T16:08:00Z, receipt_ids: [R-1, R-17], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: relationship, value: "$HOOKR was created 2026-08-06 via LiquidityLauncher v3.2.0 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0 (UERC20Factory 0x000000e2…), not HookrLaunchpad / HookrLaunchpadV5", class: verified, observed_at: 2026-09-03T16:08:00Z, receipt_ids: [R-17], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: product.mechanism, value: "Five hook blocks fixed at pool open: Anti-Snipe, Surge Fees, Auto Burn, LP Rewards, Nth-buy Pot; no keeper, no oracle; parameters cannot be retuned on a live pool", class: claim, observed_at: 2026-09-03T16:05:00Z, receipt_ids: [R-1, R-2, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: product.mechanism, value: "Generation 5 Instant Launch: whole supply as one locked sell position at platform-wide 2.5 ETH FDV. Auction: Uniswap CCA, 20-50% reserve, default 0.22 ETH floor FDV / 1.1 ETH graduation; fail refunds and burns. $HOOKR-paired Instant opens at 2,500,000 HOOKR FDV.", class: claim, observed_at: 2026-09-03T16:06:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: relationship, value: "Hookr states it is independent and not affiliated with pools.trade; generation 5 is described as a pool-first launch model familiar from pools.trade with custom v4 hooks", class: claim, observed_at: 2026-09-03T16:05:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "Docs Current live contracts name HookrLaunchpadV5 0xa043caBE… and HookrHook 0xe7c3461A… as the live launcher/hook", class: claim, observed_at: 2026-09-03T16:06:00Z, receipt_ids: [R-2], reproduction_ids: [REP-8], supersedes: null }
  - { id: CLM-17, field: deployment.address, value: "GitHub README live-deployment table still names generation 3 HookrLaunchpad 0xaAed6fab… and HookrHook 0xd0005624… as live on 4663", class: claim, observed_at: 2026-09-03T16:15:00Z, receipt_ids: [R-15], reproduction_ids: [REP-8], supersedes: null }
  - { id: CLM-34, field: product.mechanism, value: "GitHub README still describes the live product as a ten-tranche bonding curve that graduates into a locked Uniswap v4 position with the creator hook attached", class: claim, observed_at: 2026-09-03T16:15:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: control.owner, value: "0x5a52D4B820Ae7F02880d270562950918ACb14aA2 (nodar.eth) created both launchpads and both hooks; gen-3 pulled.yaml owner() was this EOA; live owner() of V5 was not eth_called this pass", class: inference, observed_at: 2026-09-03T16:18:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-19, field: control.timelock, value: "Verified V5/V3 source uses two-step proposeOwner/acceptOwnership; no timelock; owner can setCreationFee, setAuctionTiming (V5), withdrawProtocolFees; setHook is one-shot", class: claim, observed_at: 2026-09-03T16:18:00Z, receipt_ids: [R-4, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: security.audit, value: "Docs state nothing is independently audited; GitHub README same", class: claim, observed_at: 2026-09-03T16:06:00Z, receipt_ids: [R-16, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: team.identity, value: "Deployer EOA 0x5a52… is labelled nodar.eth on Blockscout; @NodarJ bio states currently building @hookrfun powered by @0xzaps", class: claim, observed_at: 2026-09-03T16:16:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.repository, value: "https://github.com/Hookr-fun/hookr-contracts", class: claim, observed_at: 2026-09-03T16:15:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: product.mechanism, value: "ETH-paired generation-5 swaps pay a flat 0.3% protocol fee to a flywheel burner; only the burner owner may spend it on a capped once-per-block HOOKR buyback. $HOOKR pairs pay no protocol fee.", class: claim, observed_at: 2026-09-03T16:06:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "2026-09-02 @Hookrfun posted that new hook and token launches on the website pause while UI and contracts move to a modular system; existing hooks and LP positions remain; nearly 3.5M HOOKR burned", class: claim, observed_at: 2026-09-03T16:16:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: activity.status, value: "2026-08-31 @Hookrfun posted that its hook submission was approved by Uniswap and is eligible for routing", class: claim, observed_at: 2026-09-03T16:16:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "Site token page tooltip: canonical HOOKR burned 3493894.224972282432218604 at Robinhood block 52926793 (HOOKR.balanceOf(0xdEaD) across permanent burn sources)", class: claim, observed_at: 2026-09-03T16:06:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T16:10:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-28, field: taxonomy.entity-kind, value: protocol, class: inference, observed_at: 2026-09-03T16:20:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: taxonomy.mechanism-tag, value: "Controlled tags used: amm, fee-routing, launchpad. Taxonomy has no hook tag; launchpad is last because the site uses 'hook launchpad' while the durable mechanism is the v4 hook marketplace", class: inference, observed_at: 2026-09-03T16:20:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: economics.metric, value: "DexScreener HOOKR/ETH v4 pair: liquidity.usd 625860.84, volume.h24 2560204.85, marketCap 9295895 as of fetch", class: claim, observed_at: 2026-09-03T16:12:00Z, receipt_ids: [R-14], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-31, field: other, value: "No official Telegram or Discord was listed on the site, docs, or X profile this pass", class: unknown, observed_at: 2026-09-03T16:16:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: other, value: "api.llama.fi/protocol/hookr returned Protocol not found", class: claim, observed_at: 2026-09-03T16:14:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: account.@Hookrfun.official, value: "Official X: site FAQ names @hookrfun; profile @Hookrfun links hookr.fun. Census casing @Hookrfun. Search also returned @Hookrfun_x and @Hookrfun_ with similar bios; site says @hookrfun only", class: claim, observed_at: 2026-09-03T16:16:00Z, receipt_ids: [R-1, R-8], reproduction_ids: [REP-6], supersedes: null }

conflicts:
  - id: CON-1
    field: deployment.address
    claim_ids: [CLM-16, CLM-17]
    material_effect: "Which factory is the current live launcher for new hooked tokens: docs name V5 0xa043…; GitHub README still tables generation 3 0xaAed… as live"
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-1, CLM-34]
    material_effect: "GitHub README still describes a ten-tranche bonding curve as the live product; site/docs say generation 5 retired the curve for new launches and uses Instant/Auction pool-first"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Website pauses new hook and token launches"
    summary: "@Hookrfun said website launches pause during a modular-system move; existing pools stay; ~3.5M HOOKR burned."
    occurred_at: 2026-09-02T15:39:04Z
    observed_at: 2026-09-03T16:16:00Z
    affected_fields: [communications.status, activity.status, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-2
    type: company
    title: "Hook Analyzer screening layer announced"
    summary: "@Hookrfun introduced Hook Analyzer as a read-only analysis and screening layer for Uniswap v4 hooks."
    occurred_at: 2026-09-01T07:01:19Z
    observed_at: 2026-09-03T16:16:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-3
    type: company
    title: "Uniswap approves Hookr hooks for routing"
    summary: "@Hookrfun posted that its hook submission was approved by Uniswap and is eligible for routing."
    occurred_at: 2026-08-31T21:23:33Z
    observed_at: 2026-09-03T16:16:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-4
    type: company
    title: "Account posts 2.5M HOOKR burned"
    summary: "@Hookrfun posted it was closing in on 2.5M HOOKR burned, quoting a builder post of 1M+."
    occurred_at: 2026-08-29T20:28:28Z
    observed_at: 2026-09-03T16:16:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-5
    type: company
    title: "Account posts 2FA secured"
    summary: "@Hookrfun posted We're back! 2FA Secured! quoting a builder thread on Hook Tokens."
    occurred_at: 2026-08-25T07:45:17Z
    observed_at: 2026-09-03T16:16:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-6
    type: onchain
    title: "Generation-5 launchpad deployed on 4663"
    summary: "HookrLaunchpadV5 0xa043… was created 2026-08-21 by the EOA labelled nodar.eth; source verified."
    occurred_at: 2026-08-21T00:26:32Z
    observed_at: 2026-09-03T16:10:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-7
    type: onchain
    title: "HOOKR token opens a hookless Uniswap v4 pool"
    summary: "nodar.eth created HOOKR via LiquidityLauncher v3.2.0; the Uniswap v4 position NFT says No Hook."
    occurred_at: 2026-08-06T04:20:57Z
    observed_at: 2026-09-03T16:08:00Z
    affected_fields: [deployment.address, product.mechanism, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-17]

receipts:
  - { id: R-1, publisher: Hookr, title: "hookr.fun homepage and FAQ", url: "https://hookr.fun", published_at: null, accessed_at: 2026-09-03T16:05:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-10, CLM-11, CLM-13, CLM-14, CLM-15, CLM-23, CLM-27, CLM-28, CLM-29, CLM-33], excerpt: "The hook launchpad. Build a custom Uniswap v4 hook and launch it with a new token. Official X @hookrfun. $HOOKR 0x18E674231A58c239Dc7DaeDcffE15Ec3A24cff5c. Listed market is a hookless Uniswap v4 pool. Independent, not affiliated with pools.trade. Generation 5 is a pool-first launch model familiar from pools.trade with custom v4 hooks. Instant 2.5 ETH FDV or Auction (Uniswap CCA). Pair ETH or $HOOKR." }
  - { id: R-2, publisher: Hookr, title: "Hook launchpad docs — live contracts and mechanism", url: "https://hookr.fun/docs", published_at: null, accessed_at: 2026-09-03T16:06:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-13, CLM-14, CLM-15, CLM-16, CLM-20, CLM-23, CLM-26], excerpt: "Current live contracts · Robinhood Chain 4663: Launchpad 0xa043caBE645636899dDe91Cce4693C00a015e660, Hook 0xe7c3461A4c762fF9dB4F91BeE3Cf8deAaFc2E8CC, Bounded Hookr router 0x644ac2e784059e1C01F24f99DF7795aE2be06ca0, $HOOKR 0x18E674…, Flywheel burner 0x8Cee20FA000aF3266AC2cD2cBeEFbcD19D98FD89. Nothing here is independently audited. Canonical $HOOKR burned 3,493,894.22 at block 52,926,793." }
  - { id: R-3, publisher: Blockscout, title: "HOOKR token 0x18E674…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x18E674231A58c239Dc7DaeDcffE15Ec3A24cff5c", published_at: null, accessed_at: 2026-09-03T16:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-9, CLM-27], excerpt: "is_contract true, is_verified true, name UERC20, token name Hookr.fun symbol HOOKR, holders_count 5412, total_supply 1e27, creator_address_hash 0x000000e200088D55C39a11F609E5F667729ad49b, creation_transaction_hash 0x53167870d0e235e0c1e1ced0ba2f32ed405a7a24335921b3c086e455cdc1ff95" }
  - { id: R-4, publisher: Blockscout, title: "HookrLaunchpadV5 0xa043…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xa043caBE645636899dDe91Cce4693C00a015e660", published_at: null, accessed_at: 2026-09-03T16:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-9, CLM-18, EVT-6], excerpt: "is_contract true, is_verified true, name HookrLaunchpadV5, creator_address_hash 0x5a52D4B820Ae7F02880d270562950918ACb14aA2 ens nodar.eth, creation_transaction_hash 0x89f3649b15def192555fdd43ebaaafde2217dafa228d1cf5d45a36c4f10a254b, timestamp 2026-08-21T00:26:32Z" }
  - { id: R-5, publisher: Blockscout, title: "HookrHook generation 5 0xe7c346…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xe7c3461A4c762fF9dB4F91BeE3Cf8deAaFc2E8CC", published_at: null, accessed_at: 2026-09-03T16:11:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "is_contract true, is_verified true, name HookrHook, creator_address_hash 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0xd4e684e81f6533f4599b5bebc16034298fa909155e03c7857a4a8b29b6a4fef6" }
  - { id: R-6, publisher: Blockscout, title: "HookrLaunchpad generation 3 0xaAed…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xaAed6fab06D53311220F35421Dda5cc6D6e9d6C3", published_at: null, accessed_at: 2026-09-03T16:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-18], excerpt: "is_contract true, is_verified true, name HookrLaunchpad, creator_address_hash 0x5a52D4B820Ae7F02880d270562950918ACb14aA2 ens nodar.eth, creation_transaction_hash 0x8b82df8bc55a6b7538113045d61badf30d2ae89dc9d63c57cb1f70e6b3d7ad03, timestamp 2026-08-04T16:21:43Z" }
  - { id: R-7, publisher: Blockscout, title: "HookrHook generation 3 0xd000…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xd0005624Da88a688BcaB3DBFB4d1Cb23d32Ca0CC", published_at: null, accessed_at: 2026-09-03T16:11:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "is_contract true, is_verified true, name HookrHook, creator_address_hash 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0xb6857f74f4d7e1d61b5828a5d5dd269ed599f67e01a7633d26baf874e54df118" }
  - { id: R-8, publisher: X, title: "@Hookrfun profile", url: "https://x.com/hookrfun", published_at: null, accessed_at: 2026-09-03T16:16:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-33], excerpt: "Hookr @Hookrfun. Bio: Hook Launchpad. Composable infrastructure for surfacing, composing and integrating custom Uniswap Hooks. Website hookr.fun. Joined August 2026. 3,144 followers." }
  - { id: R-9, publisher: "@Hookrfun", title: "Pause new launches; ~3.5M burned", url: "https://x.com/Hookrfun/status/2095174680369869283", published_at: 2026-09-02T15:39:04Z, accessed_at: 2026-09-03T16:16:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24, EVT-1], excerpt: "PSA: we'll be pausing new hook + token launches on the website while we finish moving Hookr's UI and contracts to the new modular system. Nothing changes for existing hooks or LP positions. Also: nearly 3.5M $HOOKR burned." }
  - { id: R-10, publisher: "@Hookrfun", title: "Introducing Hook Analyzer", url: "https://x.com/Hookrfun/status/2094681994529579209", published_at: 2026-09-01T07:01:19Z, accessed_at: 2026-09-03T16:16:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "Introducing Hook Analyzer. Analysis and screening layer for Uniswap Hooks. Build or Find → Audit → List → Earn." }
  - { id: R-11, publisher: "@Hookrfun", title: "Uniswap routing eligibility", url: "https://x.com/Hookrfun/status/2094536595902726544", published_at: 2026-08-31T21:23:33Z, accessed_at: 2026-09-03T16:16:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-25, EVT-3], excerpt: "Our hook submission has been approved by @Uniswap and is now eligible for routing. Pools with your custom hook built on Hookr are now considered by Uniswap's routing algorithm." }
  - { id: R-12, publisher: "@Hookrfun", title: "Closing in on 2.5M HOOKR burned", url: "https://x.com/Hookrfun/status/2093797955954241767", published_at: 2026-08-29T20:28:28Z, accessed_at: 2026-09-03T16:16:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Closing in on 2.5M $HOOKR burned. A firestorm of updates is hooking…" }
  - { id: R-13, publisher: "@Hookrfun", title: "We're back! 2FA Secured!", url: "https://x.com/Hookrfun/status/2092156346174939566", published_at: 2026-08-25T07:45:17Z, accessed_at: 2026-09-03T16:16:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-21, EVT-5], excerpt: "We're back! 2FA Secured! Quotes @NodarJ 2026-08-24 on Hook Tokens after usage and volume thresholds. @NodarJ bio: Currently building @hookrfun powered by @0xzaps." }
  - { id: R-14, publisher: DexScreener, title: "HOOKR token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x18E674231A58c239Dc7DaeDcffE15Ec3A24cff5c", published_at: null, accessed_at: 2026-09-03T16:12:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-30], excerpt: "Primary Uniswap v4 HOOKR/ETH pair 0x590dcb6a87828bf688b48089a62239b693378f1fb64d2286e6a399ed8c005fdf labels v4, liquidity.usd 625860.84, volume.h24 2560204.85, marketCap 9295895, fdv 9295895, websites hookr.fun and hookr.fun/docs." }
  - { id: R-15, publisher: Hookr-fun, title: "hookr-contracts README live deployment", url: "https://github.com/Hookr-fun/hookr-contracts", published_at: null, accessed_at: 2026-09-03T16:15:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-7, CLM-8, CLM-17, CLM-20, CLM-22, CLM-34], excerpt: "Release generation 3 is live on Robinhood Chain (chain ID 4663): HookrLaunchpad 0xaAed6fab06D53311220F35421Dda5cc6D6e9d6C3, HookrHook 0xd0005624Da88a688BcaB3DBFB4d1Cb23d32Ca0CC. A token sells along a ten-tranche bonding curve. Nothing here is independently audited. Links https://hookr.fun." }
  - { id: R-16, publisher: Hookr, title: "Docs — What Hookr does not claim", url: "https://hookr.fun/docs", published_at: null, accessed_at: 2026-09-03T16:06:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-13, CLM-19, CLM-20], excerpt: "Nothing here is independently audited. The Nth-buy Pot is not random. Rules are immutable after the pool opens. No fairness, anti-bot or anti-MEV guarantee. Liquidity is locked by construction, not by promise." }
  - { id: R-17, publisher: Blockscout, title: "HOOKR creation tx 0x531678…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x53167870d0e235e0c1e1ced0ba2f32ed405a7a24335921b3c086e455cdc1ff95", published_at: 2026-08-06T04:20:57Z, accessed_at: 2026-09-03T16:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-11, CLM-12, EVT-7], excerpt: "timestamp 2026-08-06T04:20:57Z from nodar.eth to LiquidityLauncher 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0 (LiquidityLauncher v3.2.0). Token Hookr.fun / HOOKR. UNI-V4-POSM metadata: Hook Address: No Hook. Fee Tier: 0.25%. Pool Manager 0x8366a39CC670B4001A1121B8F6A443A643e40951." }
  - { id: R-19, publisher: DefiLlama, title: "api.llama.fi/protocol/hookr", url: "https://api.llama.fi/protocol/hookr", published_at: null, accessed_at: 2026-09-03T16:14:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-32], excerpt: "Protocol not found" }
  - { id: R-20, publisher: Blockscout, title: "HookrSwapRouter 0x644ac2…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x644ac2e784059e1C01F24f99DF7795aE2be06ca0", published_at: null, accessed_at: 2026-09-03T16:11:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "is_contract true, is_verified true, name HookrSwapRouter, creator_address_hash 0x5a52D4B820Ae7F02880d270562950918ACb14aA2" }
  - { id: R-21, publisher: Blockscout, title: "HookrFlywheelBurner 0x8Cee20…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x8Cee20FA000aF3266AC2cD2cBeEFbcD19D98FD89", published_at: null, accessed_at: 2026-09-03T16:11:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "is_contract true, is_verified true, name HookrFlywheelBurner, creator_address_hash 0x5a52D4B820Ae7F02880d270562950918ACb14aA2" }

gaps:
  - { priority: P0, question: "What does owner() return on HookrLaunchpadV5 and HookrLaunchpad today, and has pendingOwner been set?", checked: "Blockscout address/API pages and verified source constructors 2026-09-03; public RPC eth_call returned 403/Cloudflare; pulled.yaml 2026-09-02 listed gen-3 owner as 0x5a52…", next: "eth_call owner() and pendingOwner() on both launchpads from an archive-capable 4663 RPC" }
  - { priority: P0, question: "Is the 2026-09-02 launch pause UI-only, or did V5 writes close on chain?", checked: "X post 2095174680369869283; docs still list V5 as current live; V5 launchpad had 151 txs as of this pass", next: "compare docs release-manifest gate and recent V5 TokenLaunched events after 2026-09-02T15:39Z" }
  - { priority: P1, question: "Taxonomy has no hook mechanism tag and no hook-marketplace leaf outside launch/hook-programmable, so a full profile still sits in the Launchpads section next to Pons", checked: "docs/taxonomy.md §3 and schema/taxonomy.json 2026-09-03", next: "controller decision: add a hook mechanism tag and/or a trading or tooling hook-marketplace leaf so ranking does not treat Hookr as a pad competitor" }
  - { priority: P1, question: "HookOS (@hookosfun, $HOOK 0x85d4e6F147BFb5729378E451F32cf5287dE75f97) is a separate multi-chain hook pad and is not a census slug, so it cannot be filed under possible_matches", checked: "content/census.yaml 2026-09-03; accounts.yaml @hookosfun", next: "keep HookOS off this row; seed it only if a confirmed Robinhood official surface appears" }
  - { priority: P1, question: "Fee split, royalty, and flywheel buyback amounts were not reproduced from live swaps", checked: "docs and verified source describe 50/50 ETH-pair position fees, 0.3% flywheel, blueprint royalties; no swap trace this pass", next: "read a V5 collectPoolFees tx and a flywheel buyback against HookrFlywheelBurner" }
  - { priority: P2, question: "Is there an official Telegram or Discord?", checked: "site, docs, X profile 2026-09-03", next: "record if a later official post names one" }
---

# Hookr — research packet

## What it is

Hookr composes Uniswap v4 hooks on Robinhood Chain. A user stacks up to five on-swap rules, publishes the hook for royalties, and opens a new token pool with those rules fixed at creation. Instant launches open at a platform-wide 2.5 ETH FDV; auctions use Uniswap CCA. $HOOKR trades in a hookless v4 pool. The deployer EOA is labelled nodar.eth.

Themes: hook, tooling, memecoin, launchpad

## Why it matters

Hookr is the chain's programmable Uniswap v4 hook marketplace: pool rules (anti-snipe, surge fees, auto-burn, LP rewards, Nth-buy pot) are the product, and a new token is how those rules reach a pool. That is a different job from Pons, which sells supply along a curve. The official account posted that Uniswap routing now considers Hookr-built hooked pools.

## What could go wrong

Both launchpads are Ownable with two-step handover and no timelock, so fee, timing, and protocol-fee withdrawal can move when the owner key moves. Docs state there is no independent audit. Generation 3 and generation 5 contracts are both live; GitHub still tables generation 3 as the live deployment while docs name V5. On 2026-09-02 the official account paused new website launches during a contract move.

## Product and mechanics

Hookr is a Uniswap v4 hook composer. A creator stacks up to five blocks that run inside the pool's swap callbacks — Anti-Snipe, Surge Fees, Auto Burn, LP Rewards, Nth-buy Pot — with no keeper and no oracle. Those parameters are fixed when the pool opens; attaching a hook to a token that already trades is not offered. Reusable hooks can pay a recorded royalty to the author when another launch uses them. [claim R-1 R-2 R-16]

Generation 5 is the current documented launch path for new tokens: Instant places the whole 1,000,000,000 supply as one locked, launchpad-owned sell position at a platform-wide 2.5 ETH FDV; Auction sells the supply minus a 20–50% reserve through Uniswap's Continuous Clearing Auction and opens the pool at the clearing price if a disclosed raise floor is met, else refunds and burns. Either lane can quote ETH or $HOOKR. Docs say the stepped bonding curve of generations 3–4 is retained for those tokens and is not offered for new launches. [claim R-1 R-2]

ETH-paired generation-5 swaps pay a flat 0.3% protocol fee into HookrFlywheelBurner; only that contract's owner may spend the ETH on a capped, once-per-block HOOKR buyback. $HOOKR-quoted launches pay no protocol fee and may use only Anti-Snipe and Surge Fees. Liquidity positions are owned by the launchpad with no remove function in the verified source. [claim R-1 R-2 R-21]

The project token $HOOKR is not a HookrLaunchpad launch. It was created on 2026-08-06 through LiquidityLauncher v3.2.0; the Uniswap v4 position NFT for its listed market says Hook Address: No Hook, matching the FAQ. [verified R-1 R-17]

## Control and security

HookrLaunchpadV5 and HookrLaunchpad were created by the same EOA, 0x5a52D4B820Ae7F02880d270562950918ACb14aA2, labelled nodar.eth. Verified source sets owner to msg.sender at deploy and exposes proposeOwner / acceptOwnership with no timelock. Owner powers include setCreationFee, withdrawProtocolFees, and on V5 setAuctionTiming; setHook is one-shot. Live owner() was not eth_called this pass (RPC 403). [inference R-4 R-6 R-16]

Docs and the GitHub README both state that nothing is independently audited. Release evidence is the project's own tests, canary receipts, and verified source. The Nth-buy pot is a public counter, not a random draw. [claim R-15 R-16]

## Team and provenance

Official identity is bidirectional: hookr.fun names @hookrfun and the token address; the X profile @Hookrfun links hookr.fun. Site casing is @hookrfun; the X display handle is @Hookrfun. Search also returned @Hookrfun_x and @Hookrfun_ with similar bios; the site says @hookrfun only. [verified R-1 R-8]

The deployer EOA is labelled nodar.eth. @NodarJ's bio states currently building @hookrfun powered by @0xzaps. GitHub org Hookr-fun / hookr-contracts README links hookr.fun; the homepage did not surface that repository this pass. HookOS (@hookosfun) and What The Hook (@whatthehookv4) are separate products. No official Telegram or Discord was listed. [claim R-4 R-13 R-15]

## Economics and activity

DexScreener's HOOKR/ETH Uniswap v4 pair (pool id 0x590dcb…) showed liquidity 625860.84 USD, 24h volume 2560204.85 USD, and marketCap/fdv 9295895 USD at fetch. That is the listed hookless pool, not protocol TVL. Blockscout reported 5412 holders and circulating_market_cap about 8.29 million USD on the token object. DefiLlama has no Hookr protocol row. [claim R-3 R-14 R-19]

The docs token tooltip reported 3493894.22 HOOKR at 0xdEaD as of block 52926793. @Hookrfun posted 2.5M burned on 2026-08-29 and nearly 3.5M burned on 2026-09-02. Those burn totals were not eth_called this pass. Generation-3 launchpad had 354 transactions; V5 had 151. [claim R-2 R-6 R-9 R-12]

## Material risks

- Owner is an EOA path with two-step handover and no timelock on fee, timing, and protocol-fee withdrawal. [inference R-4 R-16]
- Docs and GitHub state there is no independent audit. [claim R-15 R-16]
- Two launchpad generations are live; GitHub still tables generation 3 as live while docs name V5. [disputed R-2 R-15]
- New website launches were posted as paused on 2026-09-02 during a modular contract move. [claim R-9]
- Hook rules cannot be changed on a live pool; a parameter error is permanent for that token. [claim R-16]
- $HOOKR's listed market is hookless and was launched on LiquidityLauncher, so holder flow on that pair is not a read of hooked-pool activity. [verified R-1 R-17]

## Verification passes

- Receipts: official site, docs, X profile and status URLs, GitHub README, DexScreener token API, DefiLlama protocol URL, and Blockscout address/tx APIs were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-2 R-3 R-4 R-5 R-6 R-7 R-8 R-9 R-14 R-15 R-17]
- Numbers: holders 5412 is the Blockscout token field; 24h volume 2560204.85 USD and liquidity 625860.84 USD are the DexScreener HOOKR/ETH v4 pair slice, not an all-pairs or all-chains total; DefiLlama has no Hookr protocol TVL. [claim R-3 R-14 R-19]
- Adversarial: the strongest contrary reading is that Hookr is the chain's pad competitor (Pons-class) or that it is HookOS / What The Hook / pools.trade. Official copy names a hook marketplace, states independence from pools.trade, and uses different handles from HookOS and WTH; $HOOKR's own pool is hookless and was created on LiquidityLauncher, which cuts the other way — the project token is not a HookrLaunchpad graduate. [inference R-1 R-8 R-17]

## Operations log

- Read content/projects/hookr.yaml, content/pulled/hookr.yaml, content/census.yaml hookr row, content/sources/hookr.yaml, docs/taxonomy.md, schema/taxonomy.json, schema/packet.schema.json, docs/templates/research-packet-v2.md.
- Opened https://hookr.fun, https://hookr.fun/docs, https://hookr.fun/updates, https://x.com/hookrfun and named status URLs, https://github.com/Hookr-fun/hookr-contracts.
- GET Blockscout /api/v2/addresses for token, both launchpads, both hooks, router, burner, deployer, UERC20Factory; /api/v2/tokens for HOOKR; /api/v2/transactions for V5 create, gen-3 create, token create, both hook CREATE2 txs; /api/v2/addresses/…/counters for both launchpads.
- GET DexScreener latest/dex/tokens/0x18E674…; GET api.llama.fi/protocol/hookr (not found).
- Public RPC https://rpc.mainnet.chain.robinhood.com eth_call and Blockscout module=proxy eth_call returned 403 / Cloudflare challenge; owner() not reproduced live.
- X user search for hookrfun also returned @Hookrfun_x and @Hookrfun_.
- HookOS is not a census slug; filed only as a gap. Time on this slug: one collector pass.
