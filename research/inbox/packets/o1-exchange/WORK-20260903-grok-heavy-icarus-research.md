---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: o1-exchange
name: o1.exchange
packet_tier: seed
as_of: 2026-09-03T03:10:00Z
prior_packet: null
supersedes: null
owned_slugs: [o1-exchange]
allowed_paths:
  - research/inbox/packets/o1-exchange/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: o1.exchange
  aliases: [o1 Launchpad, o1 Exchange]
  symbols: [O]
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://o1.exchange
  official_handle: "@o1_exchange"
  repository: "NULL — no first-party launchpad contract repository URL on docs.o1.exchange, o1.exchange, @o1_exchange, or the verified Blockscout source this pass"
  possible_matches: []

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: [launch/stock-paired-factory]
  mechanism_tags: [launchpad, rwa, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Uniswap v4 launchpad with one RH factory for ETH, USDG, and registered Robinhood Stock Tokens, plus a different Base factory. RH factory 0xcE9C…5B0d is verified RWAERC20LaunchpadFactory on Blockscout 4663 with non-empty code; owner() is EOA 0x5519a8…044D. Base factory 0x1176…63dC has empty code on 4663. [R-1] [R-2] [R-6] [R-7]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-7, CLM-11], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-8, CLM-11, CLM-19], note: "" }

links:
  - { kind: site, url: "https://o1.exchange", authenticity: confirmed }
  - { kind: app, url: "https://launch.o1.exchange", authenticity: confirmed }
  - { kind: docs, url: "https://docs.o1.exchange", authenticity: confirmed }
  - { kind: x, url: "https://x.com/o1_exchange", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/o1exchange", authenticity: unconfirmed }
  - { kind: github, url: "https://github.com/o1exchange/o1-api", authenticity: unconfirmed }

deployments:
  - label: Robinhood launch factory (current)
    role: factory
    address:
      value: "0xcE9C48cFa068947f77738c81Be406B53338E5B0d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-6, R-7, R-8]
  - label: Robinhood launch hook
    role: other
    address:
      value: "0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-7, R-27]
  - label: Robinhood fee escrow
    role: other
    address:
      value: "0xc5444b417a04a7E1b9C1E327c7D499803c14E5EF"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-7]
  - label: Robinhood launch token deployer
    role: other
    address:
      value: "0xf86dfDb678D8E5d932100Ef479A59fa65a82a5Eb"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-7]
  - label: Robinhood historical RWA factory (v4)
    role: factory
    address:
      value: "0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-16]
  - label: Base launch factory (different address; not the RH factory)
    role: factory
    address:
      value: "0x1176122eb77AD6a2339322Cda7C4D7ea9BfA63dC"
      chain: base
      source: docs
      seen: 2026-09-03
      exists_on_4663: false
      explorer_source_verified: null
    receipt_ids: [R-2, R-7]
  - label: Quantum White Fiber Rabbit
    role: token
    address:
      value: "0xCD1cca2B3d0A11b295c42fe765ea8f895c2D0901"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-16, R-18]
  - label: Send Nudes
    role: token
    address:
      value: "0xbe98b75361935b18d688409424a869a4C3dC7401"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-13, R-17, R-25]
  - label: Cassowary
    role: token
    address:
      value: "0xe5F99b9eEA7B3e3aacc961013582704A76F52052"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-14, R-19, R-26]

metrics:
  - { kind: fees_24h, value: 411118, currency: USD, as_of: 2026-09-02, window: 24h, method: "api.llama.fi/summary/fees/o1-launchpad?dataType=dailyFees totalDataChartBreakdown bar 1788307200 Robinhood Chain o1 Launchpad; not the all-chains total24h 448548", class: claim, receipt_ids: [R-9] }
  - { kind: revenue_24h, value: 220405, currency: USD, as_of: 2026-09-02, window: 24h, method: "api.llama.fi/summary/fees/o1-launchpad?dataType=dailyRevenue totalDataChartBreakdown bar 1788307200 Robinhood Chain o1 Launchpad", class: claim, receipt_ids: [R-22] }
  - { kind: volume_24h, value: 23700000, currency: USD, as_of: 2026-09-01, window: 24h, method: "@RHDaily__ 1 Sep ranking post: @o1_exchange $23.7M 24h launchpad volume; not a Llama chain slice", class: claim, receipt_ids: [R-11] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-7], result: "eth_getCode non-empty at block 53079787: factory 24466 bytes, LaunchHook 15732, FeeEscrow 1873, LaunchTokenDeployer 8994, AnnouncementRegistry 1180, Launch-Buy Adapter 11845. owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D code 0x. configVersion 14. launchSupply 1e27. nativeLaunchFee 1e15 wei. launchCreationEnabled true. hook 0x0310cFEb…2aCc. platformFeeRecipient 0x1cAa…1C90. priceUpdater 0x8BF6…5F29. pendingOwner 0. baseFeeBps 100. antiSnipeWindowSeconds 20. feeComponentCount 3. Base factory 0x1176…63dC code 0x on 4663." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-6, R-8, R-27], result: "Blockscout API v2: 0xcE9C…5B0d name RWAERC20LaunchpadFactory is_contract true is_verified true is_fully_verified true file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26+commit.8a97fa7a verified_at 2026-08-31T23:36:24Z creator 0xaa8d6f5A…d58C tx 0x332d8f48…a6da 2026-08-29T04:47:00Z block 48880266. LaunchHook 0x0310cFEb…2aCc is_verified true." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-4, R-5], result: "o1.exchange meta twitter:site is @o1_exchange. docs.o1.exchange/community/socials lists https://x.com/o1_exchange. @o1_exchange display name o1.exchange; bio Onchain Everything Exchange; site o1.exchange." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T02:56:00Z, receipt_ids: [R-9, R-22], result: "GET api.llama.fi/summary/fees/o1-launchpad dailyFees: chains [Base, Robinhood Chain]; bar 1788307200 Base 37430 Robinhood Chain 411118; all-chains total24h 448548. dailyRevenue bar 1788307200 Robinhood Chain 220405." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:58:00Z, receipt_ids: [R-16, R-24], result: "Tx 0x2773f014…2672 2026-08-31T19:32:20Z method createLaunch to historical factory 0xe64A…F297 (Blockscout name RWAERC20LaunchpadFactory). CREATE2 created 0xCD1cca2B…0901 Quantum White Fiber Rabbit / Rabbit supply 1e27. Quote 0x9e7ABD3C…FB3E WhiteFiber, Inc. • Robinhood Token WYFI." }
  - { id: REP-6, method: document-scope, checked_at: 2026-09-03T02:48:00Z, receipt_ids: [R-1, R-2], result: "docs.o1.exchange/launchpad/introduction and production-contracts list production chains Base 8453 and Robinhood 4663; RH Launch Factory 0xcE9C…5B0d; Base Launch Factory 0x1176…63dC; warning that the same-looking address on another chain is not interchangeable." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Fixed-supply 1 billion token into a permanently locked Uniswap v4 pool in one factory transaction. No creator paired-asset deposit. Crypto-paired and stock-paired routes share the same factory, hook, and fee contract on each chain.", class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://o1.exchange", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@o1_exchange", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xcE9C48cFa068947f77738c81Be406B53338E5B0d", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-6, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-6, R-7, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: taxonomy.chain-scope, value: multichain, class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-2, R-7], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-8, field: control.owner, value: "RH factory owner() 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D (no code). Docs name the same address future-launch governance owner and creator admin on both chains. pendingOwner 0.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-6, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-9, field: security.audit, value: "docs.o1.exchange/launchpad/security lists XORS Launchpad v4 28 Aug 2026 commit 1d22cfa (0 critical; 1 high, 1 medium, 7 low; 7 resolved, 2 low open) plus earlier 29 Jun and staking 10 Aug reports. This pass did not match those PDFs to RH bytecode 0xcE9C…5B0d.", class: claim, observed_at: 2026-09-03T02:49:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Robinhood Chain dailyFees 411118 USD for bar 1788307200 (2026-09-02). All-chains total24h 448548. Base bar 37430.", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "RH factory is active for ETH, USDG, and 194 registered Robinhood Stock Tokens. Creation fee 0.001 ETH. Anti-snipe 20 seconds. Fee split creator 50 bps / platform 30 bps / referrer 20 bps. configVersion 14.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-2, R-7], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-12, field: deployment.address, value: "0x1176122eb77AD6a2339322Cda7C4D7ea9BfA63dC", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-7], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-13, field: identity.alias, value: "o1 Launchpad", class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: "account.@o1_exchange.role", value: project, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: "account.@o1_exchange.slug", value: o1-exchange, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0xCD1cca2B3d0A11b295c42fe765ea8f895c2D0901", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-16, R-18, R-24], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-17, field: deployment.address, value: "0xbe98b75361935b18d688409424a869a4C3dC7401", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-13, R-17, R-25], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: deployment.address, value: "0xe5F99b9eEA7B3e3aacc961013582704A76F52052", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-14, R-19, R-26], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: other, value: "DefiLlama fees/o1-launchpad adapter ROBINHOOD suites stop at historical factory 0xe64A…F297. Current production factory 0xcE9C…5B0d is not in that file this pass.", class: verified, observed_at: 2026-09-03T03:02:00Z, receipt_ids: [R-10], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Robinhood Chain dailyRevenue 220405 USD for bar 1788307200 (2026-09-02).", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-22], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "@RHDaily__ 1 Sep: @o1_exchange $23.7M 24h launchpad volume, rank 3 behind @ponsdotfamily and @longdotxyz.", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.symbol, value: "O", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@o1_exchange.note", value: "Handle listed on docs.o1.exchange/community/socials. o1.exchange twitter:site is @o1_exchange. Launch app is launch.o1.exchange.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: product.mechanism, value: "Base launches native B20 tokens through factory 0x1176…63dC. Robinhood launches fixed-supply ERC-20 through factory 0xcE9C…5B0d and LaunchTokenDeployer 0xf86d…a5Eb. Do not mix the two factory addresses.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-7], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-25, field: control.privileged-role, value: "Restricted opening-price updater 0x8BF6eb1EaA9bE34a068c56945a36a23520705F29; platform fee receiver 0x1cAa1962428382106Eb3f29B9719bdF797621C90. Docs: updater can change only future opening frames.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-7], reproduction_ids: [REP-1], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "@stambouli_o1 posts Robinhood contract upgrade coming"
    summary: "Founder @stambouli_o1 posted Base was fixed and a Robinhood contract upgrade was coming in a few hours."
    occurred_at: 2026-09-02T16:01:04Z
    observed_at: 2026-09-03T02:42:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-2
    type: ct
    title: "@Robin_Cassowary posts $CASSOWARY tagged @o1_exchange"
    summary: "@Robin_Cassowary posted $CASSOWARY on Robinhood Chain and tagged @o1_exchange and @RobinhoodCrypto."
    occurred_at: 2026-09-02T10:24:17Z
    observed_at: 2026-09-03T02:43:00Z
    affected_fields: [deployment.address, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-3
    type: ct
    title: "@xueqiu88 posts Rabbit and Send Nudes CAs on o1"
    summary: "@xueqiu88 posted Rabbit 0xcd1c…0901 and Send Nudes 0xbe98…7401 as o1 launches in the prior 24 hours."
    occurred_at: 2026-09-02T04:45:58Z
    observed_at: 2026-09-03T02:43:00Z
    affected_fields: [deployment.address, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-4
    type: ct
    title: "@RHDaily__ ranks @o1_exchange #3 at $23.7M 24h vol"
    summary: "@RHDaily__ ranked @o1_exchange third among Robinhood Chain launchpads at $23.7M 24h volume on 1 Sep."
    occurred_at: 2026-09-01T22:00:00Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: company
    title: "@o1_exchange posts cbHYPE and cbZEC live on Base"
    summary: "@o1_exchange posted cbHYPE and cbZEC live across Launchpad, terminal, aggregator, and upcoming mobile."
    occurred_at: 2026-09-01T18:23:02Z
    observed_at: 2026-09-03T02:41:00Z
    affected_fields: [product.mechanism, taxonomy.chain-scope]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-6
    type: onchain
    title: "Rabbit createLaunch against WYFI on historical factory"
    summary: "createLaunch on historical RWA factory 0xe64A…F297 minted Quantum White Fiber Rabbit paired with WYFI."
    occurred_at: 2026-08-31T19:32:20Z
    observed_at: 2026-09-03T02:58:00Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16, R-24]
  - id: EVT-7
    type: onchain
    title: "RH RWAERC20LaunchpadFactory deployed on chain 4663"
    summary: "Blockscout created RWAERC20LaunchpadFactory 0xcE9C…5B0d in tx 0x332d…a6da at block 48880266."
    occurred_at: 2026-08-29T04:47:00Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-8]
  - id: EVT-8
    type: company
    title: "@stambouli_o1 posts 196 Robinhood Stock Tokens on o1"
    summary: "@stambouli_o1 posted all 196 Robinhood Stock Tokens were supported on launch.o1.exchange."
    occurred_at: 2026-08-13T23:27:14Z
    observed_at: 2026-09-03T02:44:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-21]

receipts:
  - { id: R-1, publisher: o1 Exchange, title: "Launchpad introduction", url: "https://docs.o1.exchange/launchpad/introduction", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-11], excerpt: "o1 Launchpad turns a token concept into a live onchain market. Creators configure the token, choose an available paired asset for the selected chain, and launch with permanently locked Uniswap v4 liquidity. Base currently supports ETH, USDC, eight registered Coinbase crypto majors, and four registered Base Stock Tokens through one launch factory. Robinhood supports ETH, USDG, and 194 registered Robinhood Stock Tokens through one launch factory." }
  - { id: R-2, publisher: o1 Exchange, title: "Production contracts", url: "https://docs.o1.exchange/launchpad/reference/production-contracts", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-7, CLM-8, CLM-11, CLM-12, CLM-24, CLM-25, EVT-7], excerpt: "Always confirm the chain ID and active factory before signing. The same-looking address on another chain is not interchangeable. Base Launch Factory 0x1176122eb77AD6a2339322Cda7C4D7ea9BfA63dC. Robinhood Launch Factory 0xcE9C48cFa068947f77738c81Be406B53338E5B0d. This one factory is active for ETH, USDG, and all 194 registered Robinhood Stock Tokens. configuration version 14. Governance owner 0x5519a8Cc7211F483e19ff8d50A3B0c892701044D." }
  - { id: R-3, publisher: o1 Exchange, title: "Community & Socials", url: "https://docs.o1.exchange/community/socials.md", published_at: null, accessed_at: 2026-09-03T02:49:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-14, CLM-15, CLM-23], excerpt: "Twitter/X https://x.com/o1_exchange. o1.exchange founder Twitter/X https://x.com/stambouli_o1. Discord Server https://discord.gg/o1exchange." }
  - { id: R-4, publisher: o1.exchange, title: "o1.exchange homepage", url: "https://o1.exchange", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-23], excerpt: "title o1.exchange. meta twitter:site @o1_exchange. og:url https://o1.exchange/. description: 1st fully fledged Trading Terminal on Base/Solana. 45% Cashback - best rate on the market." }
  - { id: R-5, publisher: "@o1_exchange", title: "o1.exchange profile", url: "https://x.com/o1_exchange", published_at: null, accessed_at: 2026-09-03T02:41:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-13, CLM-14, CLM-15, CLM-22], excerpt: "Display name o1.exchange, handle @o1_exchange. Bio: Onchain Everything Exchange. All in $O. Backed by @cbventures @alliance @a16z. Website o1.exchange." }
  - { id: R-6, publisher: Blockscout, title: "Address 0xcE9C…5B0d RWAERC20LaunchpadFactory", url: "https://robinhoodchain.blockscout.com/address/0xcE9C48cFa068947f77738c81Be406B53338E5B0d", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, EVT-7], excerpt: "hash 0xcE9C48cFa068947f77738c81Be406B53338E5B0d name RWAERC20LaunchpadFactory is_contract true is_verified true creator 0xaa8d6f5A785304628bA68aA54A1941702665d58C creation_transaction_hash 0x332d8f485db53f473b2a305ae45ff8ad7fb02b7f1f30e4ff55d30236d2b3a6da. Smart-contract file_path src/RWAERC20LaunchpadFactory.sol compiler v0.8.26+commit.8a97fa7a is_fully_verified true verified_at 2026-08-31T23:36:24.403175Z." }
  - { id: R-7, publisher: Robinhood Chain RPC, title: "eth_getCode, owner, config, Base factory on 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-7, CLM-8, CLM-11, CLM-12, CLM-24, CLM-25], excerpt: "block 53079787. factory 0xcE9C…5B0d code 24466 bytes. owner() 0x5519a8Cc…044D code 0x. configVersion 14. launchSupply 1e27. nativeLaunchFee 0.001 ETH. launchCreationEnabled true. hook 0x0310cFEb…2aCc. platformFeeRecipient 0x1cAa…1C90. priceUpdater 0x8BF6…5F29. baseFeeBps 100. antiSnipeWindowSeconds 20. Base factory 0x1176…63dC code 0x on 4663." }
  - { id: R-8, publisher: Blockscout, title: "Factory creation tx 0x332d8f48…", url: "https://robinhoodchain.blockscout.com/tx/0x332d8f485db53f473b2a305ae45ff8ad7fb02b7f1f30e4ff55d30236d2b3a6da", published_at: 2026-08-29T04:47:00Z, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, EVT-7], excerpt: "timestamp 2026-08-29T04:47:00.000000Z status ok result success from 0xaa8d6f5A785304628bA68aA54A1941702665d58C (is_contract false) block_number 48880266 created_contract 0xcE9C48cFa068947f77738c81Be406B53338E5B0d name RWAERC20LaunchpadFactory is_verified true." }
  - { id: R-9, publisher: DefiLlama, title: "o1 Launchpad dailyFees", url: "https://api.llama.fi/summary/fees/o1-launchpad?dataType=dailyFees", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-10, CLM-19], excerpt: "name o1 Launchpad category Launchpad chains [Base, Robinhood Chain] twitter o1_exchange url https://launch.o1.exchange parentProtocol parent#o1-exchange. total24h 448548. totalDataChartBreakdown 1788307200 Base 37430 Robinhood Chain 411118. 1788220800 Robinhood Chain 465946." }
  - { id: R-10, publisher: DefiLlama, title: "o1-launchpad fees adapter ROBINHOOD suites", url: "https://github.com/DefiLlama/dimension-adapters/blob/master/fees/o1-launchpad/index.ts", published_at: null, accessed_at: 2026-09-03T03:02:00Z, kind: repository, authority: aggregator, authenticity: unconfirmed, supports: [CLM-19], excerpt: "CHAIN.ROBINHOOD suites: robinhood-block-v1 factory 0x8b40…bccf; robinhood-block-v2 0x76f0…344a; robinhood-timestamp-v3 0x411f…0Ba5; robinhood-rwa-timestamp-v4 0xe64a…f297. Current production factory 0xcE9C48cFa068947f77738c81Be406B53338E5B0d is not listed." }
  - { id: R-11, publisher: "@RHDaily__", title: "Top Robinhood Chain Launchpads by 24H Volume", url: "https://x.com/RHDaily__/status/2094908154672734344", published_at: 2026-09-01T22:00:00Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-21, EVT-4], excerpt: "Top Robinhood Chain Launchpads by 24H Volume 1. @ponsdotfamily $315.9M 2. @longdotxyz $47.5M 3. @o1_exchange $23.7M 4. @Noxa_Fi $21.3M 5. @TradePools $16.4M 6. @lunchdotfun $2.8M 7. @dopplerprotocol $2.2M 8. @bankrbot $2.0M 9. @letscashfun $2.0M 10. @flapdotsh $1.9M" }
  - { id: R-12, publisher: "@o1_exchange", title: "cbHYPE and cbZEC live across product lines", url: "https://x.com/o1_exchange/status/2094853552678285440", published_at: 2026-09-01T18:23:02Z, accessed_at: 2026-09-03T02:41:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "cbHYPE and cbZEC @base are live across all @o1_exchange product lines (o1 Launchpad https://launch.o1.exchange Trading Terminal, DEX Aggregator, upcoming mobile social trading). Also introducing @o1_exchange — the first launchpad built natively on @base with CB Wrapped Crypto Majors pairing." }
  - { id: R-13, publisher: "@xueqiu88", title: "Rabbit and Send Nudes CAs on o1", url: "https://x.com/xueqiu88/status/2095010322637877503", published_at: 2026-09-02T04:45:58Z, accessed_at: 2026-09-03T02:43:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-17, EVT-3], excerpt: "@o1_exchange 是目前唯一覆盖 Robinhood 全部 196 只股票资产的发射平台。过去 24 小时，多个逼空概念也在 O1 集中涌现： Rabbit CA：0xcd1cca2b3d0a11b295c42fe765ea8f895c2d0901 Send Nudes CA：0xbe98b75361935b18d688409424a869a4c3dc7401" }
  - { id: R-14, publisher: "@Robin_Cassowary", title: "$CASSOWARY tagged @o1_exchange", url: "https://x.com/Robin_Cassowary/status/2095095461757530199", published_at: 2026-09-02T10:24:17Z, accessed_at: 2026-09-03T02:43:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-18, EVT-2], excerpt: "Apparently birds eat stocks now. Robinhood Chain is getting weird. $CASSOWARY @RobinhoodCrypto @o1_exchange #StockTokens. Bio CA: 0xe5f99b9eea7b3e3aacc961013582704a76f52052" }
  - { id: R-15, publisher: "@stambouli_o1", title: "Robinhood contract upgrade coming", url: "https://x.com/stambouli_o1/status/2095180215823569009", published_at: 2026-09-02T16:01:04Z, accessed_at: 2026-09-03T02:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Fixed on @base. Robinhood contract upgrade coming in a few hours" }
  - { id: R-16, publisher: Blockscout, title: "Rabbit createLaunch tx 0x2773f014…", url: "https://robinhoodchain.blockscout.com/tx/0x2773f0142d0e2c66bbcdbd75e0b0559285da0f98802c9861757e1d4effde2672", published_at: 2026-08-31T19:32:20Z, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, EVT-6], excerpt: "timestamp 2026-08-31T19:32:20.000000Z method createLaunch to 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 name RWAERC20LaunchpadFactory is_verified true. Decoded name Quantum White Fiber Rabbit symbol Rabbit quote 0x9e7ABD3C9139D14E4c86DcE0e455AAB7A0C2FB3E. Internal CREATE2 created 0xCD1cca2B3d0A11b295c42fe765ea8f895c2D0901." }
  - { id: R-17, publisher: DexScreener, title: "Send Nudes pairs on Robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xbe98b75361935b18d688409424a869a4C3dC7401", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-17], excerpt: "NUDES / SNAP 0xF6589F11Bc40b669e584073F428B05562F568733 liq 405342.98 vol24 6682521.32 mc 9725036 pair 0x383957bce2341f59ff97c47eda2ad3b3b839b7050adc8a4747a398abca0ad552 created 1788291445000. Token 0xbe98b75361935b18d688409424a869a4C3dC7401 name Send Nudes symbol NUDES." }
  - { id: R-18, publisher: DexScreener, title: "Rabbit pairs on Robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xCD1cca2B3d0A11b295c42fe765ea8f895c2D0901", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-16], excerpt: "Rabbit / WETH liq 25170.98 vol24 3477515.93 mc 505817 pair 0xCD73A88D4dC2CD718Dfce72428D10Ed8183E8edd. Rabbit / USDG liq 18774.91 vol24 821848.26. Token 0xCD1cca2B3d0A11b295c42fe765ea8f895c2D0901 name Quantum White Fiber Rabbit symbol Rabbit." }
  - { id: R-19, publisher: DexScreener, title: "Cassowary pairs on Robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xe5F99b9eEA7B3e3aacc961013582704A76F52052", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-18], excerpt: "Cassowary / ETH 0x0000000000000000000000000000000000000000 liq 14405.97 vol24 16406.83 mc 18262 pair 0xbd8b88ace96c186d57b9d926e40b246657f51a65582ed5b7ceb5524da258bdba created 1788263411000. Token 0xe5F99b9eEA7B3e3aacc961013582704A76F52052." }
  - { id: R-20, publisher: o1 Exchange, title: "Security and audit", url: "https://docs.o1.exchange/launchpad/security", published_at: null, accessed_at: 2026-09-03T02:49:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9], excerpt: "XORS completed an additional independent review of the Launchpad v4 contracts, dated August 28, 2026, covering commit 1d22cfa. The report contains no Critical findings. It records one High, one Medium, and seven Low findings; seven are marked Resolved and two Low findings remain Open. Source review does not independently verify a specific deployment or live configuration." }
  - { id: R-21, publisher: "@stambouli_o1", title: "All 196 Robinhood Stock Tokens supported", url: "https://x.com/stambouli_o1/status/2088044739333374295", published_at: 2026-08-13T23:27:14Z, accessed_at: 2026-09-03T02:44:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-8], excerpt: "All 196 @RobinhoodCrypto Stock Tokens are supported on https://launch.o1.exchange You can now pair tokens with more companies, like $AUR, $RKLB, $CBRS and almost all hottest stock tickers." }
  - { id: R-22, publisher: DefiLlama, title: "o1 Launchpad dailyRevenue", url: "https://api.llama.fi/summary/fees/o1-launchpad?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-20], excerpt: "total24h 239076. totalDataChartBreakdown 1788307200 Base 18671 Robinhood Chain 220405. 1788220800 Robinhood Chain 246935." }
  - { id: R-23, publisher: Blockscout, title: "SNAP 0xF658…8733 Snap Inc. Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0xF6589F11Bc40b669e584073F428B05562F568733", published_at: null, accessed_at: 2026-09-03T02:59:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17], excerpt: "name BeaconProxy. token name Snap Inc. • Robinhood Token symbol SNAP address 0xF6589F11Bc40b669e584073F428B05562F568733 decimals 18 icon_url cdn.robinhood.com. DexScreener lists this as the top NUDES quote." }
  - { id: R-24, publisher: Blockscout, title: "WYFI 0x9e7A…FB3E WhiteFiber Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x9e7ABD3C9139D14E4c86DcE0e455AAB7A0C2FB3E", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, EVT-6], excerpt: "name BeaconProxy. token name WhiteFiber, Inc. • Robinhood Token symbol WYFI address 0x9e7ABD3C9139D14E4c86DcE0e455AAB7A0C2FB3E decimals 18. This address is the createLaunch quote for Quantum White Fiber Rabbit." }
  - { id: R-25, publisher: Blockscout, title: "Token 0xbe98…7401 Send Nudes", url: "https://robinhoodchain.blockscout.com/address/0xbe98b75361935b18d688409424a869a4C3dC7401", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17], excerpt: "hash 0xbe98b75361935b18d688409424a869a4C3dC7401 name Send Nudes is_contract true is_verified false creator_address_hash null. token symbol NUDES decimals 18 total_supply 1000000000000000000000000000 holders_count 5699. Address ends in 01." }
  - { id: R-26, publisher: Blockscout, title: "Token 0xe5F9…2052 Cassowary", url: "https://robinhoodchain.blockscout.com/address/0xe5F99b9eEA7B3e3aacc961013582704A76F52052", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-18], excerpt: "hash 0xe5F99b9eEA7B3e3aacc961013582704A76F52052 name Cassowary is_contract true is_verified false creator_address_hash null. token symbol Cassowary decimals 18 total_supply 1000000000000000000000000000 holders_count 171. Address ends in 52, not 01." }
  - { id: R-27, publisher: Blockscout, title: "Address 0x0310…2aCc LaunchHook", url: "https://robinhoodchain.blockscout.com/address/0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4], excerpt: "hash 0x0310cFEbE1D7A69f2414f6595bBe9d17c5342aCc name LaunchHook is_contract true is_verified true." }

gaps:
  - { priority: P0, question: "Can owner 0x5519a8…044D change fees, quotes, or disable creation on 0xcE9C…5B0d without a timelock?", checked: "owner() and pendingOwner() via RPC at block 53079787; docs list the same address as future-launch governance owner with no timelock named, 2026-09-03", next: "read Ownable2Step modifiers on verified src/RWAERC20LaunchpadFactory.sol; eth_getCode already 0x on the owner" }
  - { priority: P0, question: "Which factory created Send Nudes 0xbe98…7401 and Cassowary 0xe5F9…2052?", checked: "Blockscout address pages returned null creator; Rabbit was createLaunch on historical 0xe64A…F297; NUDES ends in 01 (current-flow suffix) and pairs SNAP; Cassowary ends in 52 and pairs ETH, 2026-09-03", next: "search Launched logs on 0xcE9C…5B0d and historical factories for those token addresses" }
  - { priority: P1, question: "Does the XORS 28 Aug 2026 report cover RH bytecode at 0xcE9C…5B0d / src/RWAERC20LaunchpadFactory.sol, or only a Base commit?", checked: "docs/security names commit 1d22cfa and says source review does not verify a specific deployment; PDFs not opened, 2026-09-03", next: "open the Drive folder and match compiler settings to Blockscout v0.8.26 viaIR Cancun" }
  - { priority: P1, question: "Should DefiLlama o1-launchpad ROBINHOOD suites add current factory 0xcE9C…5B0d so chain-slice fees include current-flow launches?", checked: "dimension-adapters fees/o1-launchpad/index.ts ROBINHOOD suites end at 0xe64A…F297; 0xcE9C…5B0d not present, 2026-09-03", next: "diff adapter firstBlock against factory create block 48880266" }
  - { priority: P2, question: "Does https://github.com/o1exchange/o1-api hold launchpad contracts, or only the trading API?", checked: "GitHub search found o1exchange/o1-api; docs do not list a contract repo; Blockscout github_repository_metadata empty, 2026-09-03", next: "open the org and search for RWAERC20LaunchpadFactory.sol" }
  - { priority: P2, question: "Does discord.gg/o1exchange cross-link o1.exchange?", checked: "listed on docs community/socials; Discord profile not opened; launch.o1.exchange returned Vercel Security Checkpoint, 2026-09-03", next: "open Discord and retry launch.o1.exchange with a browser" }
---

# o1.exchange — research packet

## What it is

Uniswap v4 launchpad covering Robinhood stock tokens, also live on Base. Creators pick ETH, USDG, or a registered Robinhood Stock Token, sign one factory transaction, and receive a 1 billion fixed-supply ERC-20 in a permanently locked Uniswap v4 pool. o1.exchange runs it at launch.o1.exchange as @o1_exchange.

Themes: launchpad, rwa, memecoin

## Why it matters

The name is not in the 49-row census. On Robinhood Chain the same factory is documented for ETH, USDG, and 194 stock tokens, so meme launches can pair against official stock tokens. @RHDaily__ ranked it third by 24h pad volume on 1 Sep at $23.7M.

## What could go wrong

Factory `owner()` is one externally owned account with no pending owner. Liquidity is permanently locked, so a failed launch cannot be unwound by pulling LP. DefiLlama's Robinhood adapter still lists only historical factories, so the published chain-slice fee figure may miss current-factory flow.

## Product and mechanics

A creator signs `createLaunch` (or `createLaunchAndBuy`). The contracts mint a 1 billion fixed-supply token, open a Uniswap v4 pool at the configured start tick, and place the full supply in a hook-owned position that docs say cannot be removed. No paired-asset deposit is required. [claim R-1]

Base and Robinhood each use one active factory for both crypto-paired and stock-paired creation. Robinhood's current factory is 0xcE9C…5B0d; Base's is 0x1176…63dC. The Base address has empty code on chain 4663. Docs warn the same-looking address on another chain is not interchangeable. [verified R-2 R-7]

Documented RH settings: 0.001 ETH creation fee, 20-second anti-snipe, 1% base swap fee split 50/30/20 creator/platform/referrer, configVersion 14. RPC on 0xcE9C…5B0d returned those values. [verified R-2 R-7]

Rabbit (Quantum White Fiber Rabbit, 0xCD1c…0901) was minted by `createLaunch` on historical factory 0xe64A…F297 against WYFI, the WhiteFiber Robinhood Stock Token. Send Nudes (0xbe98…7401) trades against SNAP on DexScreener; Cassowary (0xe5F9…2052) trades against ETH. Factory creators for NUDES and Cassowary were not on the Blockscout address pages this pass. [verified R-16] [claim R-13 R-17 R-14]

## Control and security

`owner()` on 0xcE9C…5B0d returns 0x5519a8…044D, which has no code. Docs list that address as future-launch governance owner and creator admin. `pendingOwner()` is zero. The same docs list platform fee receiver 0x1cAa…1C90 and restricted price updater 0x8BF6…5F29. [verified R-2 R-7]

docs.o1.exchange/launchpad/security lists XORS Launchpad v4 (28 Aug 2026, commit `1d22cfa`) with no critical findings. The page states source review does not independently verify a specific deployment. The PDFs were not opened. [claim R-20]

## Team and provenance

@o1_exchange is linked from docs community/socials. o1.exchange sets twitter:site to @o1_exchange. The handle bio is "Onchain Everything Exchange" and names $O. Founder handle @stambouli_o1 is listed on the same docs page. No first-party launchpad contract repository was located. Discord is listed and was not opened. [verified R-3 R-4 R-5]

## Economics and activity

Robinhood Chain dailyFees for 2026-09-02 are 411118 USD from Llama's o1 Launchpad breakdown; the all-chains total24h is 448548. Robinhood dailyRevenue for that bar is 220405 USD. Llama's adapter ROBINHOOD suites stop at historical factory 0xe64A…F297 and do not list 0xcE9C…5B0d. [claim R-9 R-22] [verified R-10]

@RHDaily__ posted @o1_exchange at $23.7M 24h launchpad volume on 1 Sep, rank 3. That figure is the ranking post, not the Llama chain slice. [claim R-11]

## Material risks

- One EOA owns the current RH factory; docs say that owner can change future-launch settings. [verified R-7]
- Liquidity is permanently locked in the launch hook. [claim R-1]
- Llama RH fees may omit current-factory launches. [verified R-10]
- XORS reports were not matched to RH bytecode this pass. [claim R-20]
- NUDES and Cassowary factory origin was not reproduced. [claim R-25 R-26]

## Verification passes

- Receipts: docs introduction, production-contracts, socials, security, o1.exchange, @o1_exchange, founder posts, RH Daily, DexScreener, Llama fees/revenue/adapter, Blockscout factory/hook/create txs/tokens, and RPC were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-2 R-6 R-7]
- Numbers: 411118 is the Robinhood bar for 2026-09-02, not the 448548 all-chains total24h. 23700000 is the RH Daily ranking figure for 2026-09-01, not Llama. [claim R-9 R-11]
- Adversarial: the strongest contrary reading is that o1 is Base-only and the RH factory is an unrelated copy. Docs name both chain IDs, Blockscout verifies RWAERC20LaunchpadFactory at the documented RH address, RPC owner matches the documented governance owner, and the Base factory address is empty on 4663. [inference R-2 R-6 R-7]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census (49 slugs; o1-exchange absent), accounts.yaml (no @o1_exchange), docs/templates/research-packet-v2.md, schema/packet.schema.json, and pending packets under research/inbox/packets/ read before collection.
- Official: docs.o1.exchange/launchpad/introduction, production-contracts, security, community/socials, llms.txt; o1.exchange (twitter:site @o1_exchange). launch.o1.exchange returned Vercel Security Checkpoint.
- Explorer: Blockscout API v2 with Chrome User-Agent for factory, hook, escrow, deployer, create txs, Rabbit/NUDES/Cassowary/SNAP/WYFI. RPC eth_getCode/eth_call at blocks 53079323–53081790.
- Third party: Llama summary/fees o1-launchpad dailyFees and dailyRevenue; dimension-adapters fees/o1-launchpad/index.ts; DexScreener token-pairs for the three tokens.
- X: @o1_exchange profile and 1 Sep cbHYPE post; @RHDaily__ 1 Sep ranking; @xueqiu88 Rabbit/NUDES; @Robin_Cassowary $CASSOWARY; @stambouli_o1 13 Aug 196 stocks and 2 Sep upgrade.
- Failed: launch.o1.exchange bot checkpoint; NUDES and Cassowary creator fields empty on Blockscout; Llama adapter missing 0xcE9C…5B0d; XORS PDFs not opened; Discord not opened.
- Time: collection 2026-09-03T02:40Z–2026-09-03T03:10Z.
