---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: meridian
name: Meridian
packet_tier: seed
as_of: 2026-09-03T02:50:00Z
prior_packet: content/projects/meridian.yaml@334ca0619aa62e922da83f46de021f06d12348cf
supersedes: null
owned_slugs: [meridian]
allowed_paths:
  - research/inbox/packets/meridian/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Meridian
  aliases: [mPerps, Meridian Predict, Meridian Perps, MLP Vault, meridian.xyz]
  symbols: [MLP]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://meridian.xyz
  official_handle: "@meridiandotxyz"
  repository: "NULL — github.com/meridiandotxyz returned 404; GitHub org Meridian-xyz listed zero public repositories this pass"
  possible_matches:
    - slug: sight
      signals: [other]
      contrary_signals:
        - "Census Sight is @sight_hood, a prediction-market announcement with a 2026-09-02 NFT mint"
        - "Meridian Predict is app.meridian.xyz/predict under @meridiandotxyz with Llama TVL on Robinhood Chain"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: trading/perps-native
  secondary_leaves: [markets/prediction, yield/savings-vault]
  mechanism_tags: [derivatives, vault, rwa]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "MLP 0x24b8…1BF9d is a verified AccountableAsyncRedeemVault on chain 4663 with 612 holders; the same createYieldStrategy tx deployed AccountableYield proxy 0xF62c…B1eC. Idle USDe 496k plus deployedAssets 2.01M matches Llama meridian-perps ~$2.51M. Official 28 Aug post still has mPerps launching next week. Census mainnet holds on the vault, not on a live perp book. [R-5] [R-10] [R-14] [R-16] [R-17]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-13, CLM-18], note: "" }

links:
  - { kind: site, url: "https://meridian.xyz", authenticity: confirmed }
  - { kind: app, url: "https://app.meridian.xyz", authenticity: confirmed }
  - { kind: docs, url: "https://docs.meridian.xyz", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/meridiandotxyz", authenticity: confirmed }
  - { kind: discord, url: "https://discord.com/invite/meridianxyz", authenticity: unconfirmed }
  - { kind: other, url: "https://blog.meridian.xyz", authenticity: unconfirmed }
  - { kind: other, url: "https://yield.accountable.capital/vaults/4663/0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC", authenticity: confirmed }

deployments:
  - label: Meridian Liquidity Provider (MLP share vault)
    role: vault
    address:
      value: "0x24b84023c8e4Da635be228C380C09bfE5271BF9d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-11, R-16]
  - label: AccountableYield strategy (ERC1967 proxy; app manageUrl)
    role: proxy
    address:
      value: "0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: full
      implementation_source_verified: true
    receipt_ids: [R-3, R-14, R-16]
  - label: AccountableYield implementation
    role: implementation
    address:
      value: "0x2639dA0923aBFFe46a753b765E0856Cc3E121710"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-14, R-28]
  - label: YieldStrategyFactory (Accountable)
    role: factory
    address:
      value: "0xA4d6a4aD35fc632aEE1dC48A2aEc2aaa37B51F9f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-12, R-13]
  - label: YieldStrategyFactory owner Safe
    role: multisig
    address:
      value: "0x4B07AaA370189E5603DF56C84f59c5A59181BFB1"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-22]
  - label: ConditionalTokensConditionResolver (app robinhood-mainnet map)
    role: other
    address:
      value: "0xE42847eE3feE1B29065F14D39EcF664A04d70475"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-23]

metrics:
  - { kind: tvl, value: 2505942.43, currency: USD, as_of: 2026-09-03T01:36:00Z, window: point, method: "api.llama.fi/protocol/meridian-perps currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-17] }
  - { kind: tvl, value: 265553.60, currency: USD, as_of: 2026-09-03T01:36:00Z, window: point, method: "api.llama.fi/protocol/meridian-predict currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-18] }
  - { kind: tvl, value: 496348.27, currency: USD, as_of: 2026-09-03T02:40:00Z, window: point, method: "RPC eth_call USDe.balanceOf(MLP) and MLP.totalAssets() at block 53078289", class: claim, receipt_ids: [R-16] }
  - { kind: tvl, value: 2010892.59, currency: USD, as_of: 2026-09-03T02:40:00Z, window: point, method: "RPC eth_call AccountableYield.deployedAssets() on 0xF62c…B1eC at block 53078289", class: claim, receipt_ids: [R-16] }
  - { kind: holders, value: 612, currency: null, as_of: 2026-09-03T02:40:00Z, window: point, method: "Blockscout api/v2/tokens/0x24b8…1BF9d holders_count and /counters token_holders_count", class: claim, receipt_ids: [R-11] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:40:00Z, receipt_ids: [R-16], result: "rpc.mainnet.chain.robinhood.com block 53078289 (later 53077742–53078289). MLP 0x24b8…1BF9d eth_getCode 18511 bytes; name() Meridian Liquidity Provider; symbol() MLP; decimals 18; totalSupply 2489619058646616952464425 (~2,489,619 e18); asset() USDe 0x5d3a1Ff2…ef34; totalAssets() 496348166682029605878244. USDe.balanceOf(MLP) 496348266682029605878244. AccountableYield proxy 0xF62c…B1eC code 130 bytes; deployedAssets() 2010892590272638000000000 (~2,010,893); asset() same USDe; borrower() 0x2f46c3fc…56b2 EOA; investmentManager() and managerFeeRecipient() 0x7f1a3035…5253 EOA. Factory owner() Safe 0x4B07AaA3…BFB1. Safe getThreshold() 2; getOwners() three EOAs 0x25e170e3…8db7, 0x66415e41…17a9, 0xfcb0cbc1…d7bd; nonce 10. Idle USDe plus deployedAssets ≈ 2,507,241 vs Llama $2,505,942." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:20:00Z, receipt_ids: [R-10, R-11, R-12, R-13, R-14, R-15, R-22, R-23, R-28], result: "Blockscout: MLP name AccountableAsyncRedeemVault, verified partial src/vault/AccountableAsyncRedeemVault.sol compiler v0.8.27, token Meridian Liquidity Provider / MLP, 612 holders, 1320 transfers, created 2026-07-29T01:15:03Z tx 0x74034e80…bfb9 method createYieldStrategy from 0x94f7339d…222A to YieldStrategyFactory 0xA4d6a4aD…1F9f; params asset USDe, name MLP / Meridian Liquidity Provider. Same tx created ERC1967Proxy 0xF62c…B1eC implementation AccountableYield 0x2639dA09…1710. Factory verified YieldStrategyFactory.sol. Factory owner SafeProxy 0x4B07AaA3…BFB1 implementation SafeL2. USDe token Ethena USDe / USDE 0x5d3a1Ff2…ef34 verified USDeOFT. Resolver 0xE42847eE…0475 verified ConditionalTokensConditionResolver.sol." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:15:00Z, receipt_ids: [R-1, R-2, R-3, R-4], result: "meridian.xyz title mPerps & Prediction Markets | Meridian, canonical https://meridian.xyz, twitter:url meridian.xyz. app.meridian.xyz same title, canonical app.meridian.xyz. App bundle maps MLP Vault depositToken USDe chain Robinhood active true manageUrl yield.accountable.capital/vaults/4663/0xF62c…B1eC; Predict Vault active false. Footer/docs/x: docs.meridian.xyz, x.com/meridiandotxyz, discord.com/invite/meridianxyz. @meridiandotxyz bio Powered by Robinhood Chain." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T01:36:00Z, receipt_ids: [R-17, R-18], result: "Llama meridian-perps currentChainTvls Robinhood Chain 2505942.42996, url https://app.meridian.xyz/, twitter meridiandotxyz, methodology Count all assets deposited in the Meridian perps LP vault, audits 0, parentProtocolSlug meridian.xyz. meridian-predict currentChainTvls Robinhood Chain 265553.59994, url https://app.meridian.xyz/predict, category Prediction Market. Neither row publishes an adapter address." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "USDe deposits mint MLP shares in an Accountable ERC-7540 async-redeem vault; the paired AccountableYield strategy borrows those assets (deployedAssets). Prediction markets sit on the same app. mPerps (mutualized perpetuals) was posted as launching the week after 2026-08-28.", class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-1, R-3, R-5, R-10], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://meridian.xyz", class: verified, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@meridiandotxyz", class: verified, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x24b84023c8e4Da635be228C380C09bfE5271BF9d", class: verified, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-10, R-11, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC", class: verified, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-3, R-14, R-16], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-10, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: identity.symbol, value: "MLP", class: verified, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-11, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: trading/perps-native, class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "MLP vault totalAssets()/USDe balance ~496,348; AccountableYield.deployedAssets() ~2,010,893; sum ~$2.51M. Llama meridian-perps $2,505,942. Official 28 Aug post: MLP cap filled at $2.5M USDe.", class: verified, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-5, R-16, R-17], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Llama meridian-predict Robinhood Chain TVL 265553.60", class: claim, observed_at: 2026-09-03T01:36:00Z, receipt_ids: [R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: taxonomy.secondary-leaf, value: markets/prediction, class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-1, R-8, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "YieldStrategyFactory owner() is SafeProxy 0x4B07AaA3…BFB1, threshold 2 of 3 EOAs 0x25e170e3…8db7 / 0x66415e41…17a9 / 0xfcb0cbc1…d7bd. MLP has no owner() in the verified ABI. AccountableYield borrower() and investmentManager() are EOAs.", class: verified, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-16, R-22], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.proxy, value: "AccountableYield 0xF62c…B1eC is an ERC1967 proxy to verified AccountableYield 0x2639dA09…1710, created in the same 2026-07-29 createYieldStrategy tx as MLP.", class: verified, observed_at: 2026-09-03T02:20:00Z, receipt_ids: [R-12, R-14, R-28], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "Llama audits field 0; no Meridian-named audit report on meridian.xyz, the X profile, or the verified vault/factory pages this pass; vault source lists security@accountable.capital", class: unknown, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: identity.repository, value: "NULL — github.com/meridiandotxyz 404; GitHub org Meridian-xyz has zero public repositories", class: claim, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: relationship, value: "Vault primitive is Accountable (YieldStrategyFactory / AccountableAsyncRedeemVault / AccountableYield). App redirects vault management to yield.accountable.capital. Distinct from accountable.capital's DVN marketing site.", class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-3, R-10, R-27], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Flag ca-collision / ticker-only: Meridian402 MERD 0x12f8Cca1…Ab8d8 (meridian402.xyz agent) and token meridiandotxyz / symbol Meridian 0x2717AAc5…02Da are different contracts from MLP.", class: verified, observed_at: 2026-09-03T02:20:00Z, receipt_ids: [R-20, R-21], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-19, field: "account.@meridiandotxyz.role", value: project, class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@meridiandotxyz.slug", value: meridian, class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: activity.status, value: "App bundle: MLP Vault active true; Predict Vault active false. Official 28 Aug post: mPerps launches next week. Predict still posting weekly volume in August.", class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-3, R-5, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xE42847eE3feE1B29065F14D39EcF664A04d70475", class: verified, observed_at: 2026-09-03T02:20:00Z, receipt_ids: [R-3, R-23], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-23, field: taxonomy.secondary-leaf, value: yield/savings-vault, class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-3, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: control.timelock, value: "No timelock address was read on the factory, vault, or AccountableYield proxy this pass", class: unknown, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Official account posted MLP vault filled $2.5M cap"
    summary: "The MLP Vault has filled its $2.5M cap. mPerps launches next week."
    occurred_at: 2026-08-28T16:01:15Z
    observed_at: 2026-09-03T02:00:00Z
    affected_fields: [economics.metric, activity.status, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-2
    type: company
    title: "Official account posted MLP cap raised to $2.5M USDe"
    summary: "MLP cap raised to $2.5M USDe. Deposit ahead of Meridian Perps; vault URL app.meridian.xyz/vault."
    occurred_at: 2026-08-27T16:11:59Z
    observed_at: 2026-09-03T02:00:00Z
    affected_fields: [economics.metric, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-3
    type: company
    title: "Official account posted September Fed combo markets"
    summary: "Six user-built combos off the September Fed meeting, including hold plus named events."
    occurred_at: 2026-08-25T18:47:28Z
    observed_at: 2026-09-03T02:00:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-4
    type: company
    title: "Official account posted August Predict category mix"
    summary: "August Predict flow: Weather 38%, Tennis 22%, Crypto 9%, Counter-Strike 7%, Soccer 6%."
    occurred_at: 2026-08-24T15:56:02Z
    observed_at: 2026-09-03T02:00:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-5
    type: company
    title: "Official account posted Predict's biggest week"
    summary: "Meridian Predict posted its biggest week yet. Record volume in a quiet sports stretch."
    occurred_at: 2026-08-11T19:30:18Z
    observed_at: 2026-09-03T02:00:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-6
    type: onchain
    title: "createYieldStrategy deploys MLP vault and yield proxy"
    summary: "Tx 0x74034e80… created MLP 0x24b8… and AccountableYield proxy 0xF62c… on 2026-07-29."
    occurred_at: 2026-07-29T01:15:03Z
    observed_at: 2026-09-03T02:20:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12, R-14]
  - id: EVT-7
    type: company
    title: "Official account posted MLP cap raised to $2 million"
    summary: "MLP cap raised to $2 million. mPerps update next week."
    occurred_at: 2026-08-14T15:38:41Z
    observed_at: 2026-09-03T02:00:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-25]

receipts:
  - { id: R-1, publisher: Meridian, title: "mPerps & Prediction Markets | Meridian", url: "https://meridian.xyz", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-8, CLM-9, CLM-12], excerpt: "title mPerps & Prediction Markets | Meridian. meta description Trade global markets onchain with Mutualized Perpetuals (mPerps) designed for capital-efficient, 24/7 price discovery—and prediction markets. link rel canonical href https://meridian.xyz. twitter:url https://meridian.xyz." }
  - { id: R-2, publisher: Meridian, title: "app.meridian.xyz", url: "https://app.meridian.xyz", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "title mPerps & Prediction Markets | Meridian. canonical https://app.meridian.xyz. apple-mobile-web-app-title Meridian. script /assets/index-B7YIsHtK.js." }
  - { id: R-3, publisher: Meridian, title: "app bundle index-B7YIsHtK.js vault and chain maps", url: "https://app.meridian.xyz/assets/index-B7YIsHtK.js", published_at: null, accessed_at: 2026-09-03T02:15:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-17, CLM-21, CLM-22, CLM-23], excerpt: "MLP Vault depositToken USDe chain Robinhood active true tvlCap 15e7 manageUrl https://yield.accountable.capital/vaults/4663/0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC. Predict Vault active false. You'll be redirected to Accountable to manage your vault. rD robinhood-mainnet 0xE42847eE3feE1B29065F14D39EcF664A04d70475. Footer docs.meridian.xyz, x.com/meridiandotxyz, discord.com/invite/meridianxyz, blog.meridian.xyz." }
  - { id: R-4, publisher: "@meridiandotxyz", title: "Meridian profile", url: "https://x.com/meridiandotxyz", published_at: null, accessed_at: 2026-09-03T02:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-8, CLM-9, CLM-19, CLM-20], excerpt: "Display name Meridian, handle @meridiandotxyz. Bio: RWA-focused perps and prediction markets with a full derivatives stack. Powered by Robinhood Chain." }
  - { id: R-5, publisher: "@meridiandotxyz", title: "The MLP Vault has filled its $2.5M cap", url: "https://x.com/meridiandotxyz/status/2093368321270059488", published_at: 2026-08-28T16:01:15Z, accessed_at: 2026-09-03T02:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-10, CLM-21, EVT-1], excerpt: "The MLP Vault has filled its $2.5M cap. mPerps launches next week." }
  - { id: R-6, publisher: "@meridiandotxyz", title: "MLP cap raised to $2.5M USDe", url: "https://x.com/meridiandotxyz/status/2093008635043754154", published_at: 2026-08-27T16:11:59Z, accessed_at: 2026-09-03T02:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "MLP cap raised to $2.5M USDe. Deposit ahead of the Meridian Perps launch to earn USDe rewards, Ethena Rewards, and 20% of all Meridian Points emitted to perps traders. Follow-up posted https://app.meridian.xyz/vault." }
  - { id: R-7, publisher: "@meridiandotxyz", title: "Six real combos users built off the September Fed meeting", url: "https://x.com/meridiandotxyz/status/2092322989845123382", published_at: 2026-08-25T18:47:28Z, accessed_at: 2026-09-03T02:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Six real combos users built off the September Fed meeting: Fed hold + Tesla x SpaceX merger; Fed hold + Strait of Hormuz; Fed hold + Alcaraz US Open; Fed hold + Paxton wins Texas; Fed hold + WTI Crude hit $90; Fed hold + Iran & Israel ceasefire holds." }
  - { id: R-8, publisher: "@meridiandotxyz", title: "What Meridian Predict users are trading in August", url: "https://x.com/meridiandotxyz/status/2091917457284046982", published_at: 2026-08-24T15:56:02Z, accessed_at: 2026-09-03T02:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-12, EVT-4], excerpt: "What Meridian Predict users are trading in August: Weather: 38% Tennis: 22% Crypto: 9% Counter-Strike: 7% Soccer: 6% League of Legends: 5% Dota 2: 3%. Predict anything, combo everything." }
  - { id: R-9, publisher: "@meridiandotxyz", title: "Meridian Predict just posted its biggest week yet", url: "https://x.com/meridiandotxyz/status/2087260335447409075", published_at: 2026-08-11T19:30:18Z, accessed_at: 2026-09-03T02:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-21, EVT-5], excerpt: "Meridian Predict just posted its biggest week yet. Record volume in one of the quietest stretches of the sports calendar. Predict anything, combo everything. Powered by @RobinhoodCrypto." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x24b8…1BF9d AccountableAsyncRedeemVault", url: "https://robinhoodchain.blockscout.com/address/0x24b84023c8e4Da635be228C380C09bfE5271BF9d", published_at: null, accessed_at: 2026-09-03T02:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-6, CLM-17, CLM-23], excerpt: "name AccountableAsyncRedeemVault is_contract true is_verified true tx 0x74034e80…bfb9. Token Meridian Liquidity Provider / MLP holders_count 612. File src/vault/AccountableAsyncRedeemVault.sol compiler v0.8.27 is_partially_verified true. Source: security-contact security@accountable.capital; ERC-4626 vault with ERC-7540 async redemptions." }
  - { id: R-11, publisher: Blockscout, title: "Token MLP 0x24b8…1BF9d", url: "https://robinhoodchain.blockscout.com/token/0x24b84023c8e4Da635be228C380C09bfE5271BF9d", published_at: null, accessed_at: 2026-09-03T02:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7], excerpt: "address_hash 0x24b84023c8e4Da635be228C380C09bfE5271BF9d name Meridian Liquidity Provider symbol MLP decimals 18 holders_count 612 total_supply 2489619058646616952464425 type ERC-20. Counters token_holders_count 612 transfers_count 1320." }
  - { id: R-12, publisher: Blockscout, title: "createYieldStrategy tx 0x74034e80…", url: "https://robinhoodchain.blockscout.com/tx/0x74034e80801ffdaf3d783f190eb86f70842b1d9caf467958e86e8e0de4a4bfb9", published_at: 2026-07-29T01:15:03Z, accessed_at: 2026-09-03T02:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, EVT-6], excerpt: "timestamp 2026-07-29T01:15:03.000000Z status ok method createYieldStrategy from 0x94f7339dC083c4995C3A9b870a3f66506AFb222A to 0xA4d6a4aD35fc632aEE1dC48A2aEc2aaa37B51F9f block 22051004. decoded params asset 0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34, 0x94f7339d…222A, 0, true, MLP, Meridian Liquidity Provider." }
  - { id: R-13, publisher: Blockscout, title: "YieldStrategyFactory 0xA4d6…1F9f", url: "https://robinhoodchain.blockscout.com/address/0xA4d6a4aD35fc632aEE1dC48A2aEc2aaa37B51F9f", published_at: null, accessed_at: 2026-09-03T02:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "hash 0xA4d6a4aD35fc632aEE1dC48A2aEc2aaa37B51F9f name YieldStrategyFactory is_contract true is_verified true creator 0x4e59b44847b379578588920cA78FbF26c0B4956C. Smart-contract file src/factory/YieldStrategyFactory.sol is_partially_verified true. Factory contract for creating and managing yield strategies." }
  - { id: R-14, publisher: Blockscout, title: "AccountableYield proxy 0xF62c…B1eC", url: "https://robinhoodchain.blockscout.com/address/0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC", published_at: null, accessed_at: 2026-09-03T02:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-14, EVT-6], excerpt: "hash 0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC name ERC1967Proxy is_contract true is_verified true proxy_type eip1967 creator 0xA4d6a4aD35fc632aEE1dC48A2aEc2aaa37B51F9f creation_transaction_hash 0x74034e80801ffdaf3d783f190eb86f70842b1d9caf467958e86e8e0de4a4bfb9. implementations AccountableYield 0x2639dA0923aBFFe46a753b765E0856Cc3E121710." }
  - { id: R-15, publisher: Blockscout, title: "Ethena USDe 0x5d3a…ef34", url: "https://robinhoodchain.blockscout.com/address/0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34", published_at: null, accessed_at: 2026-09-03T02:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "hash 0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34 name USDeOFT is_contract true is_verified true. Token Ethena USDe / USDE decimals 18 holders_count 5323." }
  - { id: R-16, publisher: Robinhood Chain RPC, title: "eth_getCode, ERC-20/4626 views, Safe, deployedAssets", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-10, CLM-13], excerpt: "block 53078289. MLP code 18511 bytes name Meridian Liquidity Provider symbol MLP totalSupply 2.489619e24 asset 0x5d3a1Ff2…ef34 totalAssets 4.96348e23. USDe.balanceOf(MLP) 4.96348e23. 0xF62c…B1eC deployedAssets 2.010893e24 asset USDe borrower 0x2f46c3fc…56b2 investmentManager 0x7f1a3035…5253. Factory owner 0x4B07AaA3…BFB1. Safe getThreshold 2 getOwners 0x25e170e3… 0x66415e41… 0xfcb0cbc1… nonce 10. Predict resolver 0xE42847eE… code 6755 bytes owner 0x99a8e932…212c." }
  - { id: R-17, publisher: DefiLlama, title: "Meridian Perps protocol row", url: "https://api.llama.fi/protocol/meridian-perps", published_at: null, accessed_at: 2026-09-03T01:36:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-10], excerpt: "name Meridian Perps url https://app.meridian.xyz/ twitter meridiandotxyz category Derivatives chains [Robinhood Chain] address None currentChainTvls['Robinhood Chain'] 2505942.42996 methodology Count all assets deposited in the Meridian perps LP vault audits 0 parentProtocolSlug meridian.xyz module meridian-perps/index.js." }
  - { id: R-18, publisher: DefiLlama, title: "Meridian Predict protocol row", url: "https://api.llama.fi/protocol/meridian-predict", published_at: null, accessed_at: 2026-09-03T01:36:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-11, CLM-12], excerpt: "name Meridian Predict url https://app.meridian.xyz/predict twitter meridiandotxyz category Prediction Market chains [Robinhood Chain] address None currentChainTvls['Robinhood Chain'] 265553.59994 parentProtocolSlug meridian.xyz." }
  - { id: R-19, publisher: GitHub, title: "meridiandotxyz 404 and Meridian-xyz org", url: "https://github.com/Meridian-xyz", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-16], excerpt: "GET github.com/meridiandotxyz 404. GET api.github.com/orgs/meridian-xyz login Meridian-xyz name Meridian.xyz html_url https://github.com/Meridian-xyz type Organization. GET /orgs/meridian-xyz/repos returned an empty list." }
  - { id: R-20, publisher: Blockscout, title: "Meridian MERD 0x12f8…Ab8d8", url: "https://robinhoodchain.blockscout.com/token/0x12f8Cca1875B6CdfaF00f7Efde52A40C275Ab8d8", published_at: null, accessed_at: 2026-09-03T02:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-18], excerpt: "address_hash 0x12f8Cca1875B6CdfaF00f7Efde52A40C275Ab8d8 name Meridian symbol MERD holders_count 679. GitHub Meridian402/meridian publishes this CA at meridian402.xyz as an agent market-maker, not MLP." }
  - { id: R-21, publisher: Blockscout, title: "Token meridiandotxyz 0x2717…02Da", url: "https://robinhoodchain.blockscout.com/address/0x2717AAc5120b5e89208ac6566035756262B402Da", published_at: null, accessed_at: 2026-09-03T02:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-18], excerpt: "hash 0x2717AAc5120b5e89208ac6566035756262B402Da name Token is_verified true creator 0xb34Da2AD4cAA3334409324FcBf1368Def96ea108. Token name meridiandotxyz symbol Meridian holders_count 137 total_supply 1e27. Not the MLP vault." }
  - { id: R-22, publisher: Blockscout, title: "Factory owner SafeProxy 0x4B07…BFB1", url: "https://robinhoodchain.blockscout.com/address/0x4B07AaA370189E5603DF56C84f59c5A59181BFB1", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0x4B07AaA370189E5603DF56C84f59c5A59181BFB1 name SafeProxy is_contract true is_verified true proxy_type master_copy implementations SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762." }
  - { id: R-23, publisher: Blockscout, title: "ConditionalTokensConditionResolver 0xE428…0475", url: "https://robinhoodchain.blockscout.com/address/0xE42847eE3feE1B29065F14D39EcF664A04d70475", published_at: null, accessed_at: 2026-09-03T02:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0xE42847eE3feE1B29065F14D39EcF664A04d70475 name ConditionalTokensConditionResolver is_contract true is_verified true creator 0x6A225f09E0EbE597F79e86875B3704325d40c84d creation_transaction_hash 0x30f3bd5c3f98ea6eb9bc2507a2b3ba3ceea7f585ccbd133392beeb6f010fb9dc. File src/resolvers/conditionalTokens/ConditionalTokensConditionResolver.sol. App bundle keys this address to robinhood-mainnet." }
  - { id: R-24, publisher: Meridian, title: "docs.meridian.xyz (timeout)", url: "https://docs.meridian.xyz", published_at: null, accessed_at: 2026-09-03T02:12:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [], excerpt: "GET https://docs.meridian.xyz timed out after ~20s with a partial HTML response. Linked from the app footer and marketing JS; page body was not copied." }
  - { id: R-25, publisher: "@meridiandotxyz", title: "MLP cap raised to $2 million", url: "https://x.com/meridiandotxyz/status/2088289214714847535", published_at: 2026-08-14T15:38:41Z, accessed_at: 2026-09-03T02:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-7], excerpt: "MLP cap raised to $2 million. mPerps update next week." }
  - { id: R-26, publisher: Discord, title: "discord.com/invite/meridianxyz", url: "https://discord.com/invite/meridianxyz", published_at: null, accessed_at: 2026-09-03T02:15:00Z, kind: other, authority: primary, authenticity: unconfirmed, supports: [], excerpt: "Invite URL present in app.meridian.xyz bundle footer. Invite landing page was not opened line by line this pass." }
  - { id: R-27, publisher: Accountable, title: "YieldApp vault 4663/0xF62c…B1eC", url: "https://yield.accountable.capital/vaults/4663/0xF62c201e9A28F6A57C4262004dd2e8B8e95bB1eC", published_at: null, accessed_at: 2026-09-03T02:15:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-17], excerpt: "title YieldApp by Accountable | Marketplace for Verifiable Yield. canonical https://yield.accountable.capital/. App bundle uses this path as MLP Vault manageUrl on chain 4663." }
  - { id: R-28, publisher: Blockscout, title: "AccountableYield implementation 0x2639…1710", url: "https://robinhoodchain.blockscout.com/address/0x2639dA0923aBFFe46a753b765E0856Cc3E121710", published_at: null, accessed_at: 2026-09-03T02:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "name AccountableYield is_verified true file src/strategies/AccountableYield.sol. ABI includes deployedAssets, borrower, investmentManager, loan, dvnPublisher, initialize." }

gaps:
  - { priority: P0, question: "Is mPerps trading live on 4663 as of this pass, or still the 28 Aug 'next week' post?", checked: "Official account last original 2026-08-28; app bundle Predict Vault inactive; no mPerps-named contract on Blockscout search; MLP vault is live", next: "open app.meridian.xyz trade UI and search factory for a perp engine address" }
  - { priority: P0, question: "Which contracts hold Meridian Predict collateral matching Llama $266k, beyond the ConditionResolver?", checked: "App bundle maps 0xE42847eE… to robinhood-mainnet; USDe.balanceOf(resolver) was 0; Llama adapter path 404 in DefiLlama-Adapters/projects", next: "decode predictionEscrowAddress from the runtime config object and RPC its USDe balance" }
  - { priority: P1, question: "Who holds the AccountableYield borrower 0x2f46…56b2 and investmentManager 0x7f1a…5253 keys, and is the factory Safe Accountable or Meridian?", checked: "RPC borrower/investmentManager eth_getCode empty; factory owner Safe 2-of-3; vault source security@accountable.capital", next: "read Safe owners on Accountable docs and compare to Meridian operators" }
  - { priority: P1, question: "Is there an audit covering AccountableAsyncRedeemVault / AccountableYield as used on 4663?", checked: "Llama audits 0; meridian.xyz, X, verified source headers 2026-09-03", next: "open docs.meridian.xyz after it loads and search Accountable audit indexes" }
  - { priority: P2, question: "Does docs.meridian.xyz or blog.meridian.xyz publish the MLP and resolver addresses?", checked: "docs.meridian.xyz timed out; blog URL only from JS footer", next: "retry docs and open the MLP vault docs path" }
---

# Meridian — research packet

## What it is

USDe deposits mint MLP shares in an Accountable ERC-7540 async-redeem vault that lends into an upgradeable AccountableYield strategy; prediction markets run on the same app. Users open app.meridian.xyz; vault management redirects to yield.accountable.capital. @meridiandotxyz is the official handle. mPerps was posted as launching the week after 28 Aug 2026.

Themes: rwa, prediction, vault

## Why it matters

This is the census perps-plus-predict name with a reproduced Robinhood Chain vault, not a Llama-only row. Idle USDe plus deployedAssets on the AccountableYield proxy match the ~$2.51M meridian-perps chain slice. Predict still has a Llama slice and August volume posts while the in-app Predict Vault flag is off and mPerps remains a dated launch post.

## What could go wrong

The yield strategy is an ERC1967 proxy. Factory `owner()` is a 2-of-3 Safe on Accountable's factory, not an `owner()` on MLP. Vault `totalAssets()` is only idle USDe; a card that prints that figure as TVL would miss the ~$2.01M `deployedAssets`. MERD / meridiandotxyz tickers on Blockscout are different contracts.

## Product and mechanics

Official site and app describe Mutualized Perpetuals (mPerps) plus prediction markets. @meridiandotxyz posted the MLP cap fill and "mPerps launches next week" on 28 Aug 2026. [claim R-1 R-5]

MLP is a verified AccountableAsyncRedeemVault (ERC-4626 plus ERC-7540 async redeem). `asset()` is Ethena USDe 0x5d3a…ef34. The same `createYieldStrategy` transaction deployed ERC1967 AccountableYield 0xF62c…B1eC, which the app uses as the MLP manage URL on yield.accountable.capital. [verified R-10 R-12 R-14 R-3]

App bundle: MLP Vault active, Predict Vault inactive. Predict still has August volume posts and a Llama prediction-market row. ConditionResolver 0xE42847eE… is the robinhood-mainnet address in that bundle. [claim R-3 R-8 R-18]

## Control and security

MLP verified ABI has no `owner()`. YieldStrategyFactory `owner()` is SafeProxy 0x4B07AaA3…BFB1, threshold 2, three EOA owners, nonce 10. AccountableYield `borrower()` and `investmentManager()` return EOAs. The yield contract is an upgradeable ERC1967 proxy. No timelock was read. [verified R-16 R-22 R-14]

Llama `audits` is 0. Vault source lists security@accountable.capital. No Meridian-named audit report was located on the site, X profile, or verified pages this pass. [unknown]

## Team and provenance

@meridiandotxyz bio matches meridian.xyz: RWA perps and prediction markets on Robinhood Chain. github.com/meridiandotxyz returned 404; GitHub org Meridian-xyz listed zero public repositories. Vault and factory source is Accountable's yield stack. [verified R-1 R-4] [claim R-19 R-17]

Sight (@sight_hood) is a separate census prediction-market row. Meridian402 MERD 0x12f8… and token meridiandotxyz 0x2717… are different CAs. Flag ca-collision / ticker-only. [verified R-20 R-21]

## Economics and activity

Llama meridian-perps Robinhood Chain $2,505,942 (methodology: assets in the perps LP vault). Llama meridian-predict $265,554. RPC: MLP idle USDe ~496,348; AccountableYield `deployedAssets()` ~2,010,893; sum ~$2.51M. MLP holders 612, supply ~2.49M e18. Official 28 Aug post: $2.5M cap filled. [claim R-17 R-18] [verified R-16 R-11]

## Material risks

- AccountableYield is an ERC1967 proxy; implementation can change under the factory/Safe path. [verified R-14 R-16]
- Vault `totalAssets()` omits `deployedAssets`; idle USDe is not the Llama TVL. [verified R-16]
- mPerps live-trading was not reproduced; the last official line is the 28 Aug launch post. [claim R-5 R-3]
- No audit report located this pass. [unknown]
- MERD and meridiandotxyz tickers are different contracts from MLP. [verified R-20 R-21]

## Verification passes

- Receipts: meridian.xyz, app.meridian.xyz and its JS bundle, @meridiandotxyz profile and posts, Blockscout vault/factory/proxy/USDe/Safe/resolver, RPC 4663, Llama perps and predict, GitHub org, yield.accountable.capital, and the two collision tokens were opened on 2026-09-03 and excerpts copied from the responses. docs.meridian.xyz timed out. [verified R-1 R-10 R-16 R-17]
- Numbers: Llama figures are Robinhood Chain slices. Idle USDe plus `deployedAssets` is the on-chain counterpart to the perps TVL, not `totalAssets()` alone. [claim R-17] [verified R-16]
- Adversarial: the strongest contrary reading is that census mainnet is Llama-only, or that MERD/meridiandotxyz is this protocol, or that Hookr/pools.trade is the pad. MLP name, createYieldStrategy params, and the app manageUrl argue the vault is this slug; MERD is Meridian402; Uniswap's pad remains pools.trade. [inference R-10 R-3 R-20]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census meridian, content/projects/meridian.yaml, content/sources/meridian.yaml, content/feed/meridian.yaml, content/research/meridian.md, docs/templates/research-packet-v2.md, schema/packet.schema.json, assignment WORK-20260903-grok-heavy-icarus-research.md (SEED order starts at meridian).
- Official: meridian.xyz, app.meridian.xyz, /predict, /vault, app JS index-B7YIsHtK.js, vault.lazy JS, yield.accountable.capital vault path, accountable.capital (DVN marketing, different product).
- Explorer: Blockscout api/v2 with Chrome UA. MLP, token counters, createYieldStrategy tx, factory, F62c proxy, AccountableYield impl, USDe, Safe, ConditionResolver, search Meridian/MLP/Predict/Accountable/mPerps, collision tokens MERD and meridiandotxyz.
- RPC: rpc.mainnet.chain.robinhood.com with Chrome UA (403 without). Blocks 53026479–53078289. eth_getCode, name/symbol/asset/totalAssets/totalSupply, USDe.balanceOf, deployedAssets, borrower, investmentManager, factory owner, Safe getThreshold/getOwners/nonce.
- Third party: api.llama.fi/protocol/meridian-perps and meridian-predict; protocols search (exclude meridian-amm Movement, meridian-finance Telos/Base). DefiLlama-Adapters/projects/meridian-perps 404.
- X: @meridiandotxyz Latest since 2026-08-01 (last original 28 Aug). Pad/recap window since last GO-LIVE: @ponsdotfamily @TradePools @Hookrfun @longdotxyz @0xSammy @HoodInsider_ @RHDaily__ @GeckoTerminal.
- Failed: docs.meridian.xyz timeout. RPC without UA 403. urllib DexScreener tokens/v1/robinhood 404 (used token-pairs/v1 and Gecko trending). github.com/meridiandotxyz 404.
- Time: collection 2026-09-03T01:36Z–02:50Z.
