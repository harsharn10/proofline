---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: pools-trade
name: pools.trade
packet_tier: seed
as_of: 2026-09-02T22:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [pools-trade]
allowed_paths:
  - research/inbox/packets/pools-trade/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: pools.trade
  aliases: [TradePools, Pools]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://pools.trade
  official_handle: "@TradePools"
  repository: https://github.com/Uniswap/liquidity-launcher
  possible_matches:
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Hookr FAQ states Hookr is independent and is not affiliated with pools.trade"
        - "Hookr launches attach custom Uniswap v4 hook blocks; pools.trade InstantLaunchStrategy is hookless"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: []
  mechanism_tags: [launchpad, bonding-curve]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Uniswap Labs announced pools.trade on 2026-08-05; @TradePools and pools.trade cross-link; UERC20Factory, both LiquidityLauncher entries and InstantLaunchStrategy have non-empty code and verified source on Blockscout 4663. Census still lists @pools_dot_fun, which is a different SushiSwap pad at pools.fun. [R-1] [R-2] [R-3] [R-4] [R-6] [R-15]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-13], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-16, CLM-17], note: "" }

links:
  - { kind: site, url: "https://pools.trade", authenticity: confirmed }
  - { kind: app, url: "https://pools.trade", authenticity: confirmed }
  - { kind: x, url: "https://x.com/TradePools", authenticity: confirmed }
  - { kind: github, url: "https://github.com/Uniswap/liquidity-launcher", authenticity: confirmed }
  - { kind: other, url: "https://blog.uniswap.org/pools-trade-a-new-way-to-launch-on-robinhood-chain", authenticity: confirmed }
  - { kind: docs, url: "https://docs.bitquery.io/docs/blockchain/robinhood/pools-trade-api/", authenticity: confirmed }

deployments:
  - label: Token factory (UERC20Factory)
    role: factory
    address:
      value: "0x000000e200088D55C39a11F609E5F667729ad49b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-11]
  - label: Launch entry current (LiquidityLauncher v3.2.0)
    role: factory
    address:
      value: "0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-11]
  - label: Launch entry original (LiquidityLauncher v3.0.0)
    role: factory
    address:
      value: "0x00004c4ccc709Ef590F7C81102C0689F0263D4e9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9, R-11]
  - label: Launchpad current (InstantLaunchStrategy)
    role: other
    address:
      value: "0x23f8209572b4a1C2AD88A42749E830791Fb027f1"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-11]

metrics:
  - { kind: fees_24h, value: 48955, currency: USD, as_of: 2026-09-02, window: 24h, method: "api.llama.fi/overview/fees/robinhood protocol name Pools module pools-trade total24h; chains listed as Robinhood Chain only", class: claim, receipt_ids: [R-16] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:35:00Z, receipt_ids: [R-7, R-6, R-8, R-9, R-10], result: "eth_getCode non-empty on rpc.mainnet.chain.robinhood.com at block 0x327a40b (52929547): factory 13380 bytes, entry current 4127 bytes, entry original 3747 bytes, InstantLaunchStrategy 10822 bytes" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T22:35:18Z, receipt_ids: [R-6, R-8, R-9, R-10, R-17], result: "Blockscout API v2: all four addresses is_contract true and is_verified true; names UERC20Factory, LiquidityLauncher, LiquidityLauncher, InstantLaunchStrategy; factory created 2026-07-08T16:55:22Z in tx 0x98ef78b13adbda6077f62627a2d4c36c628eb0e100a6e9beffae60d5127a07ff" }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-02T22:36:00Z, receipt_ids: [R-1, R-2, R-3, R-4], result: "Uniswap blog and @Uniswap both name pools.trade; pools.trade meta twitter:site is @TradePools; @TradePools bio is 'A new way to launch and trade tokens' and links pools.trade" }
  - { id: REP-4, method: repository-crosslink, checked_at: 2026-09-02T22:36:30Z, receipt_ids: [R-11, R-6, R-8, R-9, R-10], result: "Uniswap/liquidity-launcher README lists Robinhood v3.2.0 LiquidityLauncher 0x0000FffF…19C0, v3.0.0 0x00004c4c…D4e9, InstantLaunchStrategy 0x23f82095…27f1; Blockscout names match" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Two launch modes: Crowd Launch (4-hour TWAP; tradable at ~$10k FDV or bids refunded) and Instant Launch (bonding curve, live immediately). Both 1B supply and end in a Uniswap v4 pool.", class: claim, observed_at: 2026-09-02T22:20:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://pools.trade", class: verified, observed_at: 2026-09-02T22:36:00Z, receipt_ids: [R-1, R-2, R-3, R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@TradePools", class: verified, observed_at: 2026-09-02T22:36:00Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x000000e200088D55C39a11F609E5F667729ad49b", class: verified, observed_at: 2026-09-02T22:35:18Z, receipt_ids: [R-5, R-6, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0", class: verified, observed_at: 2026-09-02T22:35:18Z, receipt_ids: [R-5, R-8, R-11], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x00004c4ccc709Ef590F7C81102C0689F0263D4e9", class: verified, observed_at: 2026-09-02T22:35:18Z, receipt_ids: [R-5, R-9, R-11], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0x23f8209572b4a1C2AD88A42749E830791Fb027f1", class: verified, observed_at: 2026-09-02T22:35:18Z, receipt_ids: [R-5, R-10, R-11], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-8, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T22:35:18Z, receipt_ids: [R-6, R-8, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: identity.repository, value: "https://github.com/Uniswap/liquidity-launcher", class: verified, observed_at: 2026-09-02T22:36:30Z, receipt_ids: [R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "0.25% LP fee autocompounds into locked liquidity; optional 0.05% creator fee; no extra launchpad fee; LP permanently locked.", class: claim, observed_at: 2026-09-02T22:20:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "InstantLaunchStrategy is a hookless native-ETH Uniswap v4 pool; Bitquery records PoolKey hooks = 0x000…000.", class: claim, observed_at: 2026-09-02T22:33:00Z, receipt_ids: [R-5, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-02T22:20:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: team.identity, value: "Uniswap Labs", class: claim, observed_at: 2026-09-02T22:20:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: "account.@TradePools.role", value: project, class: claim, observed_at: 2026-09-02T22:36:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: "account.@TradePools.slug", value: pools-trade, class: claim, observed_at: 2026-09-02T22:36:00Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: "account.@pools_dot_fun.flags", value: handle-collision, class: claim, observed_at: 2026-09-02T22:34:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: relationship, value: "Hookr is independent and is not affiliated with pools.trade", class: claim, observed_at: 2026-09-02T22:34:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "Uniswap/liquidity-launcher README lists OpenZeppelin and Spearbit reports for v1.0 and v2.0.0 plus a Cantina bounty; this pass did not match those reports to the Robinhood v3.2.0 deploy.", class: claim, observed_at: 2026-09-02T22:36:30Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: economics.metric, value: "DefiLlama Robinhood fees overview: Pools / pools-trade total24h 48955 USD on 2026-09-02", class: claim, observed_at: 2026-09-02T22:37:53Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@pools_dot_fun.note", value: "Census handle for slug pools-trade. Bio is a SushiSwap token launcher at pools.fun, not Uniswap Labs pools.trade. Do not merge.", class: claim, observed_at: 2026-09-02T22:34:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-02T22:20:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: product.mechanism, value: "Bitquery: Crowd Launch is a ~4h continuous clearing auction with a platform-reported ~$5k-equivalent raise; Instant/curve UI uses a $50k FDV graduation progress with no on-chain migration event.", class: claim, observed_at: 2026-09-02T22:33:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "@TradePools quotes GeckoTerminal on trending tokens"
    summary: "@TradePools quoted GeckoTerminal that Robinhood Chain made up 29 of that day's top 30 trending tokens."
    occurred_at: 2026-09-02T14:59:46Z
    observed_at: 2026-09-02T22:32:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-2
    type: ct
    title: "GeckoTerminal: Robinhood Chain is 29 of 30 trending"
    summary: "GeckoTerminal posted that Robinhood Chain accounted for 29 of that day's top 30 trending tokens."
    occurred_at: 2026-09-02T09:30:13Z
    observed_at: 2026-09-02T22:32:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-3
    type: company
    title: "Uniswap announces @TradePools on Robinhood Chain"
    summary: "@Uniswap announced @TradePools as a new Robinhood Chain launchpad and linked pools.trade."
    occurred_at: 2026-08-05T22:49:09Z
    observed_at: 2026-09-02T22:21:00Z
    affected_fields: [identity.handle, identity.domain, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-2, R-1]
  - id: EVT-4
    type: onchain
    title: "UERC20Factory verified on Robinhood Chain Blockscout"
    summary: "Blockscout names 0x000000e2…d49b UERC20Factory, verified source, created 2026-07-08T16:55:22Z."
    occurred_at: 2026-07-08T16:55:22Z
    observed_at: 2026-09-02T22:35:18Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-17]

receipts:
  - { id: R-1, publisher: Uniswap Labs, title: "Pools.trade: A New Way to Launch on Robinhood Chain", url: "https://blog.uniswap.org/pools-trade-a-new-way-to-launch-on-robinhood-chain", published_at: 2026-08-05, accessed_at: 2026-09-02T22:20:00Z, kind: announcement, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-10, CLM-12, CLM-13, CLM-21, EVT-3], excerpt: "Say hello to Pools, a new launchpad built for Robinhood Chain. There are two ways to launch a token on Pools. Both start with a fixed supply of 1 billion and end in a Uniswap v4 pool. Crowd Launch: 4-hour window, 10K launch FDV or bids are refunded. Instant Launch: live immediately, classic bonding curve." }
  - { id: R-2, publisher: "@Uniswap", title: "Say hello to @TradePools", url: "https://x.com/Uniswap/status/2085136053661213180", published_at: 2026-08-05T22:49:09Z, accessed_at: 2026-09-02T22:21:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-10, CLM-13, CLM-14, CLM-15, EVT-3], excerpt: "Say hello to @TradePools, a new launchpad on Robinhood Chain. Launch and trade now on pools.trade. Creators can optionally take 0.05% of the LP fee, with the rest autocompounding. There's zero launchpad fee." }
  - { id: R-3, publisher: pools.trade, title: "Pools — create a token on Robinhood Chain", url: "https://pools.trade", published_at: null, accessed_at: 2026-09-02T22:35:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-15, CLM-21], excerpt: "title Pools — create a token on Robinhood Chain. meta twitter:site @TradePools. description: Create and trade tokens on Robinhood Chain. Launch with a crowd-priced window or an instant pool, follow live prices, and claim your position." }
  - { id: R-4, publisher: "@TradePools", title: "Pools profile", url: "https://x.com/TradePools", published_at: null, accessed_at: 2026-09-02T22:31:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-14, CLM-15], excerpt: "Display name Pools, handle @TradePools, bio 'A new way to launch and trade tokens', website pools.trade, Uniswap affiliation mark, joined July 2026." }
  - { id: R-5, publisher: Bitquery, title: "Pools.trade API — Uniswap Launchpad on Robinhood Chain", url: "https://docs.bitquery.io/docs/blockchain/robinhood/pools-trade-api/", published_at: null, accessed_at: 2026-09-02T22:22:00Z, kind: docs, authority: independent, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-11, CLM-22], excerpt: "Pools.trade is the token launchpad built by Uniswap for Robinhood Chain, opened to the public on 5 August 2026. Launch entry current 0x0000ffffbe8efe702c8703ae3477ff5de3d319c0; original 0x00004c4ccc709ef590f7c81102c0689f0263d4e9 still active; token factory 0x000000e200088d55c39a11f609e5f667729ad49b; launchpad current 0x23f8209572b4a1c2ad88a42749e830791fb027f1. Hooks none (0x000…000)." }
  - { id: R-6, publisher: Blockscout, title: "Address 0x000000e200088D55C39a11F609E5F667729ad49b", url: "https://robinhoodchain.blockscout.com/address/0x000000e200088d55c39a11f609e5f667729ad49b", published_at: null, accessed_at: 2026-09-02T22:35:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, EVT-4], excerpt: "API v2: hash 0x000000e200088D55C39a11F609E5F667729ad49b, name UERC20Factory, is_contract true, is_verified true, creator 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0x98ef78b13adbda6077f62627a2d4c36c628eb0e100a6e9beffae60d5127a07ff." }
  - { id: R-7, publisher: Blockscout, title: "Robinhood Chain RPC eth_getCode (factory and launch stack)", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T22:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8], excerpt: "eth_getCode non-empty at latest for 0x000000e200088d55c39a11f609e5f667729ad49b, 0x0000ffffbe8efe702c8703ae3477ff5de3d319c0, 0x00004c4ccc709ef590f7c81102c0689f0263d4e9 and 0x23f8209572b4a1c2ad88a42749e830791fb027f1; eth_blockNumber 0x327a40b." }
  - { id: R-8, publisher: Blockscout, title: "Address 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0", url: "https://robinhoodchain.blockscout.com/address/0x0000ffffbe8efe702c8703ae3477ff5de3d319c0", published_at: null, accessed_at: 2026-09-02T22:35:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-8], excerpt: "API v2: hash 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0, name LiquidityLauncher, is_contract true, is_verified true, creator 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0xbf68c51ed936a2a33fa3450ccf245bad1df199a15392bfd754935ba4d6728ccc." }
  - { id: R-9, publisher: Blockscout, title: "Address 0x00004c4ccc709Ef590F7C81102C0689F0263D4e9", url: "https://robinhoodchain.blockscout.com/address/0x00004c4ccc709ef590f7c81102c0689f0263d4e9", published_at: null, accessed_at: 2026-09-02T22:35:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "API v2: hash 0x00004c4ccc709Ef590F7C81102C0689F0263D4e9, name LiquidityLauncher, is_contract true, is_verified true, creator 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0x6d11634b0bad842d13b2c400c0432987c5b48071c58e97130a26e01b908f3f95." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x23f8209572b4a1C2AD88A42749E830791Fb027f1", url: "https://robinhoodchain.blockscout.com/address/0x23f8209572b4a1c2ad88a42749e830791fb027f1", published_at: null, accessed_at: 2026-09-02T22:35:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "API v2: hash 0x23f8209572b4a1C2AD88A42749E830791Fb027f1, name InstantLaunchStrategy, is_contract true, is_verified true, creator 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0xb03ef43e611195705821dee524c8b8ef5f6078342b3562b209aea34f5dbe8d2a." }
  - { id: R-11, publisher: Uniswap, title: "Liquidity Launcher README (deployment addresses)", url: "https://github.com/Uniswap/liquidity-launcher", published_at: null, accessed_at: 2026-09-02T22:36:30Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-9, CLM-11, CLM-12, CLM-18], excerpt: "v3.2.0 Robinhood Chain LiquidityLauncher 0x0000FffFBE8efE702c8703aE3477FF5dE3d319C0; v3.0.0 0x00004c4ccc709Ef590F7C81102C0689F0263D4e9; InstantLaunchStrategy 0x23f8209572b4a1C2AD88A42749E830791Fb027f1 launches a fixed-supply token directly into a hookless native-ETH v4 pool." }
  - { id: R-12, publisher: "@TradePools", title: "some familiar faces here", url: "https://x.com/TradePools/status/2095164787420172687", published_at: 2026-09-02T14:59:46Z, accessed_at: 2026-09-02T22:32:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-1], excerpt: "some familiar faces here. Quoted @GeckoTerminal: Fun Fact: Robinhood Chain accounts for 29 of today’s top 30 trending tokens." }
  - { id: R-13, publisher: "@GeckoTerminal", title: "Robinhood Chain 29 of top 30 trending tokens", url: "https://x.com/GeckoTerminal/status/2095081854504407187", published_at: 2026-09-02T09:30:13Z, accessed_at: 2026-09-02T22:32:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "Fun Fact: Robinhood Chain accounts for 29 of today’s top 30 trending tokens. Are you bullish on Robinhood Memecoins?" }
  - { id: R-14, publisher: Hookr, title: "Hookr FAQ — What is Hookr.fun?", url: "https://hookr.fun/", published_at: null, accessed_at: 2026-09-02T22:34:00Z, kind: official-site, authority: independent, authenticity: confirmed, supports: [CLM-17], excerpt: "On Robinhood Chain 4663, new-token launches use a permissionless, pool-first launch model familiar from pools.trade with up to five inspectable Uniswap v4 hook blocks. Hookr is independent and is not affiliated with pools.trade." }
  - { id: R-15, publisher: "@pools_dot_fun", title: "Pools.fun profile", url: "https://x.com/pools_dot_fun", published_at: null, accessed_at: 2026-09-02T22:34:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-16, CLM-20], excerpt: "Display name Pools.fun, handle @pools_dot_fun, bio 'same pools, more fun. token launcher built on robinhood chain and sushiswap. no token.' website pools.fun." }
  - { id: R-16, publisher: DefiLlama, title: "Robinhood Chain fees overview — Pools", url: "https://api.llama.fi/overview/fees/robinhood?excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true", published_at: null, accessed_at: 2026-09-02T22:37:53Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-19], excerpt: "protocol name Pools, displayName Pools, module pools-trade, category Launchpad, chains [Robinhood Chain], slug pools, total24h 48955, total7d 260828. Methodology: The 0.25% fee charged on every trade. pools.trade charges nothing to launch a token." }
  - { id: R-17, publisher: Blockscout, title: "Factory creation transaction 0x98ef78b1…", url: "https://robinhoodchain.blockscout.com/tx/0x98ef78b13adbda6077f62627a2d4c36c628eb0e100a6e9beffae60d5127a07ff", published_at: 2026-07-08T16:55:22Z, accessed_at: 2026-09-02T22:35:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-4], excerpt: "timestamp 2026-07-08T16:55:22.000000Z, status ok, result success, from 0x32f4B2e69EbD7746596AF8699DAC1908F43107aD, to CREATE2 deployer 0x4e59b44847b379578588920cA78FbF26c0B4956C." }

gaps:
  - { priority: P0, question: "Census handle @pools_dot_fun is Pools.fun (SushiSwap pad at pools.fun). Official pools.trade handle is @TradePools. Compiler should not merge the two products onto this slug.", checked: "census.yaml handle, @TradePools profile, pools.trade twitter:site, @pools_dot_fun profile, 2026-09-02", next: "controller decision on census handle and whether Pools.fun gets its own candidate slug" }
  - { priority: P1, question: "Do the v1.0 / v2.0.0 OpenZeppelin and Spearbit reports cover the Robinhood v3.2.0 InstantLaunchStrategy and LiquidityLauncher bytecode?", checked: "Uniswap/liquidity-launcher README audit table, 2026-09-02", next: "read each report's commit/version scope against commit dd8769cd45c0e9450e928513ee129b0af74f7f32" }
  - { priority: P1, question: "How does the blog's optional 0.05% creator fee of the 0.25% LP fee map onto the GitHub fees-on FeeSplitter (40% native ETH to UERC20BeneficiaryVault, 60% to compounding)?", checked: "Uniswap blog, Uniswap X thread, liquidity-launcher README Fee Splitter table, 2026-09-02", next: "read InstantLaunchStrategy and FeeSplitter verified source on Blockscout" }
  - { priority: P1, question: "Crowd Launch threshold: Uniswap blog ~$10k FDV or refund vs Bitquery ~$5k-equivalent raise. Which figure is the on-chain auction stop?", checked: "Uniswap blog table and Bitquery Crowd Launch section, 2026-09-02", next: "read a live CCA auction contract and the pools.trade cca.listAuctions payload" }
  - { priority: P2, question: "Bitquery Instant/curve UI shows $50k FDV graduation progress with no on-chain migration. Confirm it is display-only.", checked: "Bitquery Graduation section, Uniswap Instant Launch 'No requirement', 2026-09-02", next: "compare one token's Trading.Supply.MarketCap with the pools.trade curve.getLaunchByAddress graduation field" }
  - { priority: P2, question: "Who can change InstantLaunchStrategy, LiquidityLauncher, or FeeSplitter parameters after deploy?", checked: "Blockscout API names and is_verified flags; README overview; no owner() call this pass", next: "eth_call owner()/authority on the four reproduced contracts and read verified source modifiers" }
---

# pools.trade — research packet

## What it is

Uniswap Labs' own launchpad on Robinhood Chain. A user picks Crowd Launch — a four-hour TWAP that refunds below about $10k FDV — or Instant Launch, a bonding curve that is live immediately. Both mint 1 billion tokens and end in a locked Uniswap v4 pool with a 0.25% autocompounding LP fee. Uniswap Labs runs it at pools.trade as @TradePools.

Themes: launchpad, memecoin

## Why it matters

This is Uniswap Labs' native launch surface on chain 4663: tokens are minted into Uniswap v4 pools and inherit Uniswap app, wallet and API distribution from the first block. Census still treats @pools_dot_fun as official; that handle is a different SushiSwap pad at pools.fun.

## What could go wrong

Liquidity is permanently locked, so a failed launch cannot be unwound by pulling LP. Crowd Launch refunds only if the stated FDV/raise threshold is missed; Instant Launch is live immediately. The census handle @pools_dot_fun points at a different product, so identity merges would mix two pads.

## Product and mechanics

Crowd Launch runs a four-hour TWAP. Bids fill over the window; the token is tradable if launch FDV reaches about $10k, otherwise orders are refunded. Instant Launch is live at creation as a classic bonding curve. Both modes mint 1 billion tokens and finish in a Uniswap v4 pool. [claim R-1]

The Uniswap blog and @Uniswap thread state a 0.25% LP fee that autocompounds into locked liquidity, an optional 0.05% creator fee, no extra launchpad fee, and sniping mitigation by letting the creator buy in the launch block. [claim R-1 R-2]

GitHub InstantLaunchStrategy deploys a hookless native-ETH v4 pool as a single-sided position locked in a FeeSplitter. Bitquery records PoolKey hooks as the zero address and treats the UI "curve" as concentrated liquidity in that pool, not a separate bonding-curve contract. This packet does not tag the product as hook. [claim R-5 R-11]

Bitquery describes Crowd Launch as a continuous clearing auction with a platform-reported ~$5k-equivalent raise, and an off-chain $50k FDV graduation progress for curve launches with no migration event. Those figures are not the Uniswap blog's $10k Crowd FDV / no Instant requirement. [claim R-5]

## Control and security

The four reproduced contracts were created via the CREATE2 deployer 0x4e59b44847b379578588920cA78FbF26c0B4956C. Blockscout marks source verified on all four; this pass did not call owner() or read upgrade modifiers. [verified R-6 R-8 R-9 R-10 R-17]

Uniswap/liquidity-launcher lists OpenZeppelin and Spearbit reports for v1.0 and v2.0.0 and a Cantina bounty on src/. This pass did not match those reports to the Robinhood v3.2.0 bytecode. [claim R-11]

## Team and provenance

Uniswap Labs published the 5 August 2026 blog post and @Uniswap announced @TradePools with a pools.trade link. The site sets twitter:site to @TradePools; the @TradePools bio links pools.trade. The implementation repo is Uniswap/liquidity-launcher. [verified R-1 R-2 R-3 R-4 R-11]

Census currently stores handle @pools_dot_fun on this slug. That account's bio is a SushiSwap token launcher at pools.fun. Flag handle-collision; do not merge. [claim R-15]

Hookr's FAQ uses pools.trade as the familiar pool-first model and states Hookr is independent and not affiliated with pools.trade. [claim R-14]

## Economics and activity

DefiLlama's Robinhood Chain fees overview on 2026-09-02 lists protocol Pools (module pools-trade, category Launchpad, chains Robinhood Chain only) at 48,955 USD fees over 24h and 260,828 USD over 7d. The adapter attributes the 0.25% swap fee and records protocol revenue as zero. The row is marked doublecounted. [claim R-16]

@TradePools quoted GeckoTerminal on 2026-09-02 that Robinhood Chain made up 29 of that day's top 30 trending tokens. That is a social claim, not a pad-specific volume figure. [claim R-12 R-13]

## Material risks

- Liquidity is described as permanently locked; a creator cannot withdraw the v4 position. [claim R-1 R-11]
- Crowd Launch refunds depend on a threshold that Uniswap ($10k FDV) and Bitquery (~$5k raise) do not state the same way. [claim R-1 R-5]
- Census handle @pools_dot_fun is a different product (Pools.fun / SushiSwap). [claim R-15]
- Audit reports on the launcher repo are v1/v2; Robinhood v3.2.0 scope is unverified in this pass. [claim R-11]
- Optional creator fees mean some tokens pay a creator on every trade. [claim R-1 R-2]

## Verification passes

- Receipts: Uniswap blog, @Uniswap announcement, pools.trade HTML, @TradePools and @pools_dot_fun profiles, Bitquery docs, Blockscout API v2 for four addresses plus the factory creation tx, Uniswap/liquidity-launcher README, DefiLlama Robinhood fees overview, Hookr FAQ, and the 2 Sep GeckoTerminal quote were opened on 2026-09-02; excerpts are copied from those pages. [verified R-1 R-2 R-3 R-4 R-5 R-6 R-8 R-9 R-10 R-11 R-12 R-13 R-14 R-15 R-16 R-17]
- Numbers: the 48,955 USD figure is DefiLlama's Robinhood Chain fees slice for module pools-trade, not an all-chains total; Llama lists only Robinhood Chain on that row. Bytecode lengths are eth_getCode at block 52929547. [claim R-16] [verified R-6]
- Adversarial: the strongest contrary reading is that this slug is the SushiSwap Pools.fun pad, or that it is Hookr's pool-first model. @pools_dot_fun's own bio names SushiSwap and pools.fun; pools.trade sets twitter:site @TradePools; Hookr's FAQ disclaims affiliation. [claim R-3 R-14 R-15]

## Operations log

- Read content/census.yaml row pools-trade (handle @pools_dot_fun, lifecycle announced), content/projects/pools-trade.yaml, content/accounts.yaml @pools_dot_fun and @TradePools, content/sources/pools-trade.yaml.
- Opened Uniswap blog 2026-08-05, pools.trade HTML (twitter:site @TradePools), Bitquery Pools.trade API docs, Uniswap/liquidity-launcher README, Hookr FAQ on hookr.fun.
- Opened https://x.com/Uniswap/status/2085136053661213180, https://x.com/TradePools, https://x.com/TradePools/status/2095164787420172687, https://x.com/GeckoTerminal/status/2095081854504407187, https://x.com/pools_dot_fun.
- RPC eth_getCode / eth_blockNumber on https://rpc.mainnet.chain.robinhood.com for the four named addresses at block 0x327a40b.
- Blockscout API v2 address pages for the four contracts and the factory creation transaction; explorer HTML is a client render, JSON is the reproduced record.
- DefiLlama https://api.llama.fi/overview/fees/robinhood (Pools / pools-trade); https://api.llama.fi/summary/fees/pools-trade returned 400 not found.
- No content/ writes. No merge.
