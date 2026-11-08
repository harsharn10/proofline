---
contract_version: proofline-research-v2
work_id: WORK-20260911-grok-bot-discovery-inventory
producer: grok-bot
role: collector
base_sha: 76a1252e4cbdc4e9658d6bf220d8e2560cc4dd36
slug: discovery-inventory
name: Discovery inventory 2026-09-11
packet_tier: seed
as_of: 2026-09-11T13:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260911-grok-bot-discovery-inventory.md

identity:
  canonical_name: Discovery inventory 2026-09-11
  aliases: []
  symbols: []
  entity_kind: unknown
  chain_scope: unknown
  official_domain: "NULL — inventory packet"
  official_handle: "NULL — inventory packet"
  repository: "NULL — inventory packet"
  possible_matches:
    - slug: arc
      signals: [other]
      contrary_signals:
        - "Census Arc is @ArcLiquidity / arcliquidity.capital, tree credit/isolated-money-market, token ARC"
        - "Arcus is @arcus_xyz / arcus.xyz, Llama slugs arcus-perps / arcus-ptokens / arcus-spot, GitHub org arcus-xyz"
        - "No shared official handle, domain, or reproduced address"

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [other]
  ecosystem_role: observe
  lifecycle: unknown
  coverage_recommendation: candidate
  evidence_state: partly-verified
  rationale: "Weekday discovery round 2026-09-11. One protocol lead not on the census: Arcus. Site, docs, GitHub 4663 addresses, Llama chain-slice TVL, and explorer/RPC reproductions are on file. Isolated margin is documented as live. Handle @arcus_xyz is already watch/infra. A cited dependency card exists and is not a census row. Distinct from census Arc."

qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: "inventory packet; candidate deployments are on the Arcus claims, not this inventory identity" }
  native_play:       { status: unknown, claim_ids: [], note: "inventory packet" }
  citable:           { status: unknown, claim_ids: [], note: "inventory packet" }
  research_story:    { status: unknown, claim_ids: [], note: "inventory packet" }

links:
  - { kind: site, url: "https://arcus.xyz", authenticity: confirmed }
  - { kind: app, url: "https://app.arcus.xyz", authenticity: confirmed }
  - { kind: docs, url: "https://docs.arcus.xyz", authenticity: confirmed }
  - { kind: docs, url: "https://docs.arcus.xyz/concepts/perpetuals/margin-modes", authenticity: confirmed }
  - { kind: x, url: "https://x.com/arcus_xyz", authenticity: confirmed }
  - { kind: github, url: "https://github.com/arcus-xyz", authenticity: confirmed }
  - { kind: github, url: "https://github.com/arcus-xyz/spot-contracts-abis", authenticity: confirmed }
  - { kind: github, url: "https://github.com/arcus-xyz/rootchain-contracts-abis", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x4262efBd176F02824af27010bEa218429c33c7E8", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x14b107cf534239c59571b066cb6497a321da897c", authenticity: confirmed }
  - { kind: other, url: "https://defillama.com/protocol/arcus-perps", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/arcusxyz", authenticity: unconfirmed }

deployments:
  - label: SwapShell (spot router ERC-1967 proxy)
    role: router
    address:
      value: "0x4262efBd176F02824af27010bEa218429c33c7E8"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-11
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
    receipt_ids: [R-6, R-10, R-12]
  - label: ArcusSettlement (spot settlement ERC-1967 proxy)
    role: other
    address:
      value: "0x006102b16A04c20306A28b652745D3973D7D24fa"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-11
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
    receipt_ids: [R-6, R-16, R-12]
  - label: BridgeVault (perps deposit/withdrawal custody)
    role: vault
    address:
      value: "0x14b107cf534239c59571b066cb6497a321da897c"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-11
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
    receipt_ids: [R-7, R-11, R-12]
  - label: pToken factory (Llama adapter FACTORY)
    role: factory
    address:
      value: "0x9c3663FA9ab976E67B42939486EC4966Cb41a0BB"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-11
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
    receipt_ids: [R-9, R-17, R-12]
  - label: TimelockController (rootchain governance timelock)
    role: timelock
    address:
      value: "0x0dA180B14721CE46A83669b4816cb652caa1001D"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-11
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
    receipt_ids: [R-7, R-18, R-12]

metrics:
  - { kind: tvl, value: 23313211.12, currency: USD, as_of: 2026-09-11T12:12:23Z, window: point, method: "api.llama.fi/protocol/arcus-perps currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 1087596.27, currency: USD, as_of: 2026-09-11T11:09:11Z, window: point, method: "api.llama.fi/protocol/arcus-ptokens currentChainTvls['Robinhood Chain']; adapter marks doublecounted vs Arcus Perps", class: claim, receipt_ids: [R-9] }
  - { kind: volume_24h, value: 69820993.07, currency: USD, as_of: 2026-09-11T13:20:00Z, window: 24h, method: "sum of volume24hNotional on GET https://api.arcus.xyz/v1/markets (64 PERPETUAL rows)", class: claim, receipt_ids: [R-13] }

reproductions:
  - { id: REP-1, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-11T13:15:00Z, receipt_ids: [R-1, R-14], result: "arcus.xyz FAQ and schema.org sameAs name https://x.com/arcus_xyz; @arcus_xyz profile website field is https://arcus.xyz/ and location Robinhood Chain" }
  - { id: REP-2, method: repository-crosslink, chain_id: 4663, checked_at: 2026-09-11T13:18:00Z, receipt_ids: [R-5, R-1], result: "GitHub org arcus-xyz display name arcus.xyz, blog https://arcus.xyz, updated_at 2026-09-10T17:42:38Z; four public repos including spot-contracts-abis and rootchain-contracts-abis for chainId 4663" }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-11T13:22:00Z, receipt_ids: [R-10], result: "Blockscout api/v2 SwapShell 0x4262efBd…c7E8 is_contract true is_verified true proxy_type eip1967 name ERC1967Proxy implementation 0x6747B498…3Ee3 named SwapShell; creator 0x84bF9954…9F99; create tx 0x01d4be94…dee6" }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-11T13:25:00Z, receipt_ids: [R-12], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x397dc38 (60283960). eth_getCode SwapShell 130 B, Settlement 130 B, RfqExecutor 2688 B, WrappedTokenFactory 130 B, pToken factory 109 B, BridgeVault 109 B, CheckpointManager 109 B, Timelock 109 B, EmergencySettlement 2240 B. EIP-1967 slot SwapShell -> 0x6747b498…a3ee3; Settlement -> 0xdfe85100…aa86f; BridgeVault -> 0x44c6c2a9…babf78" }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-11T13:28:00Z, receipt_ids: [R-11], result: "Blockscout api/v2 BridgeVault 0x14b107cf…897c is_contract true is_verified true proxy_type eip1967 implementation 0x44c6c2A9…BF78; create tx 0x9fff8d37…fc25 matches rootchain deployments.json" }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-11T13:20:00Z, receipt_ids: [R-8, R-13], result: "Llama arcus-perps chains ['Robinhood Chain'] currentChainTvls 23313211.12 ARCUSDG at unix 1789128743. GET /v1/markets returned 64 PERPETUAL rows, 58 ONLINE, categories EQUITIES 34 CRYPTO 22 COMMODITIES 4 INDICES 4; summed volume24hNotional 69820993.07" }

claims:
  - { id: CLM-1, field: candidate, value: "arcus | Arcus | @arcus_xyz | arcus.xyz", class: claim, observed_at: 2026-09-11T13:15:00Z, receipt_ids: [R-1, R-8, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "Official site arcus.xyz and handle @arcus_xyz name each other; GitHub org arcus-xyz blog is https://arcus.xyz", class: verified, observed_at: 2026-09-11T13:18:00Z, receipt_ids: [R-1, R-5, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@arcus_xyz", class: verified, observed_at: 2026-09-11T13:18:00Z, receipt_ids: [R-1, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-4, field: identity.repository, value: "https://github.com/arcus-xyz", class: verified, observed_at: 2026-09-11T13:18:00Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-5, field: taxonomy.primary-leaf, value: "arcus | trading/perps-native", class: claim, observed_at: 2026-09-11T13:16:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: taxonomy.secondary-leaf, value: "arcus | trading/prop-amm", class: claim, observed_at: 2026-09-11T13:16:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: taxonomy.entity-kind, value: "arcus | protocol", class: claim, observed_at: 2026-09-11T13:16:00Z, receipt_ids: [R-1, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: taxonomy.chain-scope, value: "arcus | robinhood-native", class: claim, observed_at: 2026-09-11T13:16:00Z, receipt_ids: [R-1, R-8, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: lifecycle, value: "arcus | beta", class: claim, observed_at: 2026-09-11T13:15:00Z, receipt_ids: [R-1, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Spot RFQ with on-chain settlement; perps are a hybrid CLOB with off-chain matching, a permissioned appchain, and EVM rootchain custody plus escape hatch. Isolated margin is documented as live per market.", class: claim, observed_at: 2026-09-11T13:17:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: deployment.address, value: "0x4262efBd176F02824af27010bEa218429c33c7E8", class: verified, observed_at: 2026-09-11T13:25:00Z, receipt_ids: [R-6, R-10, R-12], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-12, field: deployment.address, value: "0x14b107cf534239c59571b066cb6497a321da897c", class: verified, observed_at: 2026-09-11T13:28:00Z, receipt_ids: [R-7, R-11, R-12], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-13, field: deployment.address, value: "0x9c3663FA9ab976E67B42939486EC4966Cb41a0BB", class: verified, observed_at: 2026-09-11T13:26:00Z, receipt_ids: [R-9, R-17, R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: control.proxy, value: "GitHub spot deployments.json lists SwapShell implementation 0x8B4420Fb0B3C366D1661B88466613F161D619f34", class: claim, observed_at: 2026-09-11T13:18:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: control.proxy, value: "Live SwapShell EIP-1967 implementation 0x6747B4986e7d184eF45e532C0Ea26C3a6fDA3Ee3", class: verified, observed_at: 2026-09-11T13:25:00Z, receipt_ids: [R-10, R-12], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: control.timelock, value: "Rootchain TimelockController proxy 0x0dA180B14721CE46A83669b4816cb652caa1001D exists on 4663; admin of BridgeVault/SwapShell not read this round", class: claim, observed_at: 2026-09-11T13:28:00Z, receipt_ids: [R-7, R-18, R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "Llama arcus-perps Robinhood Chain TVL 23313211.12 USD in ARCUSDG at 2026-09-11T12:12:23Z", class: claim, observed_at: 2026-09-11T13:12:00Z, receipt_ids: [R-8], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: "Arcus GET /v1/markets summed volume24hNotional 69820993.07 USD across 64 perpetual markets at 2026-09-11T13:20:00Z", class: claim, observed_at: 2026-09-11T13:20:00Z, receipt_ids: [R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "Official blog index dated 2026-09-09: Isolated Positions Are Live on Arcus. Docs: isolated margin is live and can be enabled per market.", class: claim, observed_at: 2026-09-11T13:14:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: communications.status, value: "@arcus_xyz 2026-09-10T16:45:50Z status 2098090582736510988: PPI result 5.4% vs 5.3% expected. CPI tomorrow. Arcus doesn't close.", class: claim, observed_at: 2026-09-11T13:32:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: relationship, value: "content/dependencies/arcus.yaml is a cited-only dependency card (id arcus, kind perp-venue), not a census slug. This inventory does not merge or promote it.", class: claim, observed_at: 2026-09-11T13:10:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: security.audit, value: "Llama arcus-perps and arcus-ptokens audits field 0; no audit report URL opened this round", class: unknown, observed_at: 2026-09-11T13:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: account.@arcus_xyz.slug, value: arcus, class: claim, observed_at: 2026-09-11T13:10:00Z, receipt_ids: [R-14, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: other, value: "Not on content/census.yaml (182 slugs). Open PRs targeting main: only #92 (site/trenches; no identity packets). No open grok-bot WORK PR for 2026-09-11.", class: claim, observed_at: 2026-09-11T13:08:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: control.proxy
    claim_ids: [CLM-14, CLM-15]
    material_effect: "Published GitHub SwapShell implementation differs from the live EIP-1967 slot and Blockscout implementation; do not treat deployments.json implementation as current."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Isolated positions listed live on Arcus (9 Sep)"
    summary: "The official Arcus blog index dated 9 Sep 2026 lists Isolated Positions Are Live on Arcus, with the line Cap what a single perps trade can cost. Isolated positions on Arcus explained, with a live example. Docs say isolated margin is live and can be enabled per market; every position is cross margin by default."
    account: null
    tag: milestone
    occurred_at: 2026-09-09T00:00:00Z
    observed_at: 2026-09-11T13:14:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-2, R-3]
  - id: EVT-2
    type: company
    title: "@arcus_xyz posts Arcus doesn't close"
    summary: "@arcus_xyz on 2026-09-10T16:45:50Z (status 2098090582736510988): PPI result 5.4% vs 5.3% expected. CPI tomorrow. CLARITY Act vote next week. Fed decision the day after. CPI drops at 8:30am ET. Stock markets don't open until 9:30. Arcus doesn't close."
    account: "@arcus_xyz"
    tag: other
    occurred_at: 2026-09-10T16:45:50Z
    observed_at: 2026-09-11T13:32:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-3
    type: onchain
    title: "SwapShell and BridgeVault reproduced on 4663"
    summary: "SwapShell 0x4262efBd…c7E8 and BridgeVault 0x14b107cf…897c are contracts on chain 4663 with verified ERC-1967 proxy source on Blockscout. RPC eth_getCode was non-empty at block 60283960. Live SwapShell implementation 0x6747B498…3Ee3 does not match the implementation listed in GitHub deployments.json."
    account: null
    tag: other
    occurred_at: 2026-09-11T13:25:00Z
    observed_at: 2026-09-11T13:28:00Z
    affected_fields: [deployment.address, control.proxy]
    evidence_state: verified
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-10, R-11, R-12]

receipts:
  - { id: R-1, publisher: Arcus, title: "Official site", url: "https://arcus.xyz", published_at: null, accessed_at: 2026-09-11T13:15:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-7, CLM-8, CLM-9], excerpt: "Arcus is a decentralized exchange built in partnership with Robinhood on Robinhood Chain. Follow @arcus_xyz on X. schema.org sameAs https://x.com/arcus_xyz and https://app.arcus.xyz. Isolated Positions Are Live on Arcus, Announcements Sep 9, 2026. Spot Beta is open; Perps Beta opens July 1, 2026." }
  - { id: R-2, publisher: Arcus, title: "Blog index", url: "https://arcus.xyz/blog", published_at: 2026-09-09T00:00:00Z, accessed_at: 2026-09-11T13:14:00Z, kind: announcement, authority: primary, authenticity: confirmed, supports: [CLM-19, EVT-1], excerpt: "Announcements Sep 9, 2026 Isolated Positions Are Live on Arcus. Cap what a single perps trade can cost. Isolated positions on Arcus explained, with a live example. Also Sep 1 Nasdaq 24/5; Aug 26 pTokens: A New Primitive on Arcus." }
  - { id: R-3, publisher: Arcus Docs, title: "Cross and isolated margin", url: "https://docs.arcus.xyz/concepts/perpetuals/margin-modes", published_at: null, accessed_at: 2026-09-11T13:16:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-10, CLM-19, EVT-1], excerpt: "All positions are cross margin by default. A position is only isolated after you explicitly enable isolated mode for that market. Isolated margin — collateral is allocated to a single position, capping that position's risk to its own allocation." }
  - { id: R-4, publisher: Arcus Docs, title: "Exchange architecture", url: "https://docs.arcus.xyz/concepts/exchange-architecture", published_at: null, accessed_at: 2026-09-11T13:16:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-10], excerpt: "The Arcus perpetuals exchange is a hybrid DEX built around a high-performance off-chain CLOB matching engine. Fund custody plus final settlement live on an EVM-based public blockchain. Rootchain Bridge Vault custodies user funds. Escape hatch (emergency settlement) so withdrawals can't be censored." }
  - { id: R-5, publisher: GitHub, title: "Organization arcus-xyz", url: "https://github.com/arcus-xyz", published_at: 2026-06-20T15:27:31Z, accessed_at: 2026-09-11T13:18:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-4], excerpt: "api.github.com/orgs/arcus-xyz: login arcus-xyz, name arcus.xyz, blog https://arcus.xyz, created_at 2026-06-20T15:27:31Z, updated_at 2026-09-10T17:42:38Z, public_repos 4: rootchain-contracts-abis, spot-contracts-abis, arcus-spot-sdk, da-reader." }
  - { id: R-6, publisher: arcus-xyz/spot-contracts-abis, title: "deployments.json chainId 4663", url: "https://raw.githubusercontent.com/arcus-xyz/spot-contracts-abis/main/deployments.json", published_at: null, accessed_at: 2026-09-11T13:18:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-6, CLM-11, CLM-14], excerpt: "network Robinhood mainnet chainId 4663. SwapShell 0x4262efBd176F02824af27010bEa218429c33c7E8 ERC1967 implementation 0x8B4420Fb0B3C366D1661B88466613F161D619f34. ArcusSettlement 0x006102b16A04c20306A28b652745D3973D7D24fa implementation 0x28Fe3236da3Cea9AFDf1045c19e1139A7Da89457." }
  - { id: R-7, publisher: arcus-xyz/rootchain-contracts-abis, title: "deployments.json BridgeVault and timelock", url: "https://raw.githubusercontent.com/arcus-xyz/rootchain-contracts-abis/main/deployments.json", published_at: null, accessed_at: 2026-09-11T13:19:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-12, CLM-16], excerpt: "chainId 4663. BridgeVault 0x14b107cf534239c59571b066cb6497a321da897c Deposit/withdrawal custody vault (margin asset) deployedAtBlock 159148 tx 0x9fff8d37…fc25. TimelockController 0x0dA180B14721CE46A83669b4816cb652caa1001D. CheckpointManager, ValidatorConsensus, EmergencySettlement listed as upgradeable proxies." }
  - { id: R-8, publisher: DefiLlama, title: "protocol/arcus-perps", url: "https://api.llama.fi/protocol/arcus-perps", published_at: null, accessed_at: 2026-09-11T13:12:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-8, CLM-17], excerpt: "name Arcus Perps url https://arcus.xyz/ twitter arcus_xyz chain Robinhood Chain category Derivatives audits 0 parentProtocol parent#arcus. currentChainTvls Robinhood Chain 23313211.12326 at date 1789128743 (2026-09-11T12:12:23Z). tokens ARCUSDG. otherProtocols Arcus, Arcus Perps, Arcus pTokens, Arcus Spot." }
  - { id: R-9, publisher: DefiLlama, title: "protocol/arcus-ptokens", url: "https://api.llama.fi/protocol/arcus-ptokens", published_at: null, accessed_at: 2026-09-11T13:12:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13, CLM-17], excerpt: "name Arcus pTokens twitter arcus_xyz chain Robinhood Chain excludeTvlFromParent true. currentChainTvls Robinhood Chain 1087596.26611 at date 1789124951. Adapter FACTORY 0x9c3663FA9ab976E67B42939486EC4966Cb41a0BB; TVL is ERC-4626 totalAssets() in USDG and marked doublecounted vs Arcus Perps." }
  - { id: R-10, publisher: Blockscout, title: "SwapShell 0x4262efBd…c7E8", url: "https://robinhoodchain.blockscout.com/address/0x4262efBd176F02824af27010bEa218429c33c7E8", published_at: null, accessed_at: 2026-09-11T13:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, CLM-15, EVT-3], excerpt: "api/v2: is_contract true is_verified true proxy_type eip1967 name ERC1967Proxy implementations 0x6747B4986e7d184eF45e532C0Ea26C3a6fDA3Ee3 name SwapShell. creator 0x84bF99545E37912e349bc90bbC274a1644f79F99 creation_transaction_hash 0x01d4be94c30b564f51e1a34b160f020502d736c415de38c087052a35d7f8dee6." }
  - { id: R-11, publisher: Blockscout, title: "BridgeVault 0x14b107cf…897c", url: "https://robinhoodchain.blockscout.com/address/0x14b107cf534239c59571b066cb6497a321da897c", published_at: null, accessed_at: 2026-09-11T13:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, EVT-3], excerpt: "api/v2: is_contract true is_verified true proxy_type eip1967 name ERC1967Proxy implementations 0x44c6c2A96E7e51EB0Dd81cEF58940FaA39baBF78. creator 0xf7e323160697FcF861F11286dF5272dA50b81F6C creation_transaction_hash 0x9fff8d3794d389e83a02b13ab8d0682508b04bcae7957045bdf6fb3bf699fc25." }
  - { id: R-12, publisher: Robinhood Chain RPC, title: "eth_chainId / eth_getCode / EIP-1967 slot", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-11T13:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, CLM-12, CLM-13, CLM-15, CLM-16, EVT-3], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x397dc38 (60283960). eth_getCode non-empty as listed in REP-4. storage 0x360894a13b… SwapShell 0x6747b498…a3ee3; Settlement 0xdfe85100…aa86f; BridgeVault 0x44c6c2a9…babf78." }
  - { id: R-13, publisher: Arcus API, title: "GET /v1/markets", url: "https://api.arcus.xyz/v1/markets", published_at: null, accessed_at: 2026-09-11T13:20:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-18], excerpt: "64 markets, all type PERPETUAL. status ONLINE 58 OFFLINE 6. category EQUITIES 34 CRYPTO 22 COMMODITIES 4 INDICES 4. Sum volume24hNotional 69820993.07. Sample ONLINE: BTC-USD, ETH-USD, HOOD-USD, NVDA-USD, SPY-USD, USO-USD." }
  - { id: R-14, publisher: "@arcus_xyz", title: "X profile fields via status 2098328493981606388 author object", url: "https://x.com/arcus_xyz", published_at: null, accessed_at: 2026-09-11T13:31:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-9, CLM-23], excerpt: "screen_name arcus_xyz name Arcus. description: Built by the team behind dYdX in partnership with @RobinhoodCrypto | 24/7 Stock* Trading with 0% Fees | Spot & Perps live in Beta. location Robinhood Chain. website https://arcus.xyz/. followers 370194 at access." }
  - { id: R-15, publisher: "@arcus_xyz", title: "Arcus doesn't close", url: "https://x.com/arcus_xyz/status/2098090582736510988", published_at: 2026-09-10T16:45:50Z, accessed_at: 2026-09-11T13:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-20, EVT-2], excerpt: "PPI result: 5.4% vs 5.3% expected. CPI tomorrow. CLARITY Act vote next week. Fed decision the day after. CPI drops at 8:30am ET. Stock markets don't open until 9:30. Arcus doesn't close." }
  - { id: R-16, publisher: Blockscout, title: "ArcusSettlement 0x006102b1…24fa", url: "https://robinhoodchain.blockscout.com/address/0x006102b16A04c20306A28b652745D3973D7D24fa", published_at: null, accessed_at: 2026-09-11T13:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "api/v2: is_contract true is_verified true proxy_type eip1967 implementations 0xdFE851005a37107209d30f9b124467807f3aA86F name ArcusSettlement. creator 0x84bF99545E37912e349bc90bbC274a1644f79F99." }
  - { id: R-17, publisher: Blockscout, title: "pToken factory 0x9c3663FA…a0BB", url: "https://robinhoodchain.blockscout.com/address/0x9c3663FA9ab976E67B42939486EC4966Cb41a0BB", published_at: null, accessed_at: 2026-09-11T13:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "api/v2: is_contract true is_verified true proxy_type eip1967 name ERC1967Proxy implementations 0x58BDc1d3068A0A79d7A662dee033d62CbD4F589F. creator 0x38D0EAbAeDBCD65C2C2Ff8E075f58F29f83cc101 creation_transaction_hash 0x7554bf6b6327a0145014997192116b819de6e8b5d9012cf5fcd015924b0d3232." }
  - { id: R-18, publisher: Blockscout, title: "TimelockController 0x0dA180B1…001D", url: "https://robinhoodchain.blockscout.com/address/0x0dA180B14721CE46A83669b4816cb652caa1001D", published_at: null, accessed_at: 2026-09-11T13:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "api/v2: is_contract true is_verified true proxy_type eip1967 name ERC1967Proxy implementations 0x20cDe9c3C7F053e049B4Ef94D042dde589F20264. creator 0x38D0EAbAeDBCD65C2C2Ff8E075f58F29f83cc101 creation_transaction_hash 0xfafc575743a91607340a4216972d2bb2ec6151e5e11e030cefb5218aa877ebde." }
  - { id: R-19, publisher: Proofline main, title: "content/dependencies/arcus.yaml", url: "https://github.com/harsharn10/proofline/blob/76a1252e4cbdc4e9658d6bf220d8e2560cc4dd36/content/dependencies/arcus.yaml", published_at: 2026-08-31T00:00:00Z, accessed_at: 2026-09-11T13:10:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-21], excerpt: "id arcus name Arcus (spot + perps) kind perp-venue summary Spot and perps DEX from the dYdX team, an official day-one partner. Cited only. Not a census row." }
  - { id: R-20, publisher: Proofline main, title: "content/accounts.yaml @arcus_xyz", url: "https://github.com/harsharn10/proofline/blob/76a1252e4cbdc4e9658d6bf220d8e2560cc4dd36/content/accounts.yaml", published_at: null, accessed_at: 2026-09-11T13:08:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-23], excerpt: "handle @arcus_xyz tier watch role infra note Day-one partner (dYdX team). No slug field on the row." }
  - { id: R-21, publisher: GitHub, title: "Open pull requests targeting main", url: "https://github.com/harsharn10/proofline/pulls", published_at: null, accessed_at: 2026-09-11T13:08:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-24], excerpt: "Open PRs: #92 site add a researched-asset activity stream and discovery trigger, head codex/20260904/icarus-trenches-stream, no research/inbox/packets files. No open grok-bot WORK PR for 2026-09-11." }

gaps:
  - { area: security, priority: P0, question: "Is there an audit whose scope matches SwapShell, BridgeVault, or the perps appchain contracts?", checked: "Llama audits 0 on arcus-perps and arcus-ptokens; site/docs/GitHub org opened 2026-09-11, no report URL copied", next: "open any report URL the project posts and match commit/address scope" }
  - { area: control, priority: P0, question: "Who is the EIP-1967 admin of SwapShell, Settlement, and BridgeVault, and does the published TimelockController hold those rights?", checked: "Timelock proxy reproduced; admin slot not read this round", next: "eth_getStorageAt admin slot 0xb5312768… and owner()/getMinDelay() on 0x0dA180B1…001D" }
  - { area: deployment, priority: P1, question: "What contract holds Llama ARCUSDG, and does it equal BridgeVault 0x14b107cf…897c?", checked: "Llama tokensInUsd ARCUSDG; BridgeVault labeled margin-asset custody; no token metadata join this round", next: "read BridgeVault asset() / accounting token and match Llama adapter" }
  - { area: product, priority: P1, question: "Which isolated-positions blog slug is canonical, and does the app expose isolated mode on listed markets?", checked: "Blog index 9 Sep 2026; guessed slugs 404; docs margin-modes opened", next: "open the dated post URL from the Framer blog card and GET /v1/leverages on a test account" }
  - { area: communications, priority: P1, question: "Did @arcus_xyz post the isolated-positions launch on X, and what is the status id?", checked: "Profile HTML listed statuses 2098328493981606388 (ORCL earnings 11 Sep), 2098120938835620176 (ADBE 10 Sep), 2098096381022118394, 2098090582736510988 (PPI / does not close). Isolated not in those four bodies. Direct x.com/status WebFetch 403.", next: "open the 9 Sep official post if one exists" }
  - { area: team, priority: P2, question: "Which GitHub org members control rootchain-contracts-abis vs spot-contracts-abis, given two creator addresses on 4663?", checked: "SwapShell/Settlement creator 0x84bF9954…9F99; BridgeVault creator 0xf7e32316…1F6C; pToken factory and Timelock creator 0x38D0EAbA…c101", next: "do not merge creators; record Safe/EOA code on each" }
  - { area: activity, priority: P2, question: "What is independent 24h volume vs the project's /v1/markets sum and Llama dimensions?", checked: "Project API sum 69820993.07; Llama perps chain page was not used as a dated row this round", next: "copy Llama dimensions/arcus-perps dailyVolume with its window" }
  - { area: identity, priority: P2, question: "Should the existing dependency card stay cited-only, or is a census subject seed assigned?", checked: "census.yaml has no arcus row; accounts.yaml has @arcus_xyz watch/infra; dependencies/arcus.yaml cited only", next: "controller assignment; do not compile this inventory into a census row" }

---

# Discovery inventory 2026-09-11 — research packet

## What it is

Robinhood Chain names that are not yet census rows. This round's protocol lead is Arcus: a self-custodial spot and perpetuals venue on chain 4663. The official site names @arcus_xyz; GitHub org arcus-xyz publishes chain-4663 addresses; DefiLlama arcus-perps reports about $23.3 million Robinhood Chain TVL on 11 Sep 2026; SwapShell and BridgeVault proxies were reproduced. Isolated margin is documented as live. The handle is already watch/infra. A cited dependency card exists; that is not a census row. Distinct from census Arc.

Themes: perpetuals, spot, rwa

TL;DR: Arcus is a beta Robinhood Chain perps and spot venue with about $23.3M Llama TVL, reproduced 4663 contracts, and no census row.

## Operations log

- Main SHA read: 76a1252e4cbdc4e9658d6bf220d8e2560cc4dd36 (origin/main, re-fetched). AGENTS.md, grok-bot.md, ingestion.md, research-system.md, admission-policy.md, operating-flow.md, research-seed and research-update skills, packet-v2 template, census.yaml (182 slugs), accounts.yaml, prior discovery-inventory packet WORK-20260903-grok-heavy-icarus-research.md.
- Open PRs including drafts: only #92 (site/trenches; not touched). No open grok-bot WORK PR for 2026-09-11. Closed grok-bot/20260908/WORK-20260908-grok-bot-alandale branch remains on remote; Alandale is already a census slug.
- Follow-list: read content/accounts.yaml (156 handles). Official project handles were not timeline-scraped one-by-one; x.com status URLs returned 403 to WebFetch. Gap query used @arcus_xyz (already on the follow-list as watch/infra). Four recent statuses opened via api.fxtwitter.com: 2098328493981606388 (ORCL earnings, 11 Sep 08:31Z), 2098120938835620176 (ADBE preview, 10 Sep 18:46Z), 2098096381022118394 (skipped; body used a banned conduct word), 2098090582736510988 (PPI / Arcus doesn't close, 10 Sep 16:45Z). No material new claim on an existing census slug. Discovery-inventory preferred over a research-update.
- Gap hunt: Arcus / @arcus_xyz / arcus.xyz. Not on census.yaml. Did not collapse: not pending in open PRs, not a census match, not identity-conflicted. Existing dependency card recorded as relationship CLM-21. Fallbacks T3tris Finance, Privacy Cash, and FLYBRAIN 0x4Eb990547BCe4a982432CA88Cf5fae7EED1A2d35 were not pursued. Tape tickers Microhood 0x6be147…, IBM Bob 0xc092c1…, Nest 0x8e859d… were not on census/accounts by ticker and were not packed.
- Surfaces opened: https://arcus.xyz, /blog (isolated-positions permalinks 404), docs.arcus.xyz and margin-modes / exchange-architecture, help.arcus.xyz, api.arcus.xyz/v1/markets, api.llama.fi/protocol/arcus-perps, arcus-ptokens, arcus-spot (empty TVL), GitHub org plus spot-contracts-abis and rootchain-contracts-abis deployments.json, Blockscout api/v2, RPC https://rpc.mainnet.chain.robinhood.com with a browser User-Agent.
- Addresses checked on 4663: SwapShell 0x4262efBd…c7E8, Settlement 0x006102b1…24fa, RfqExecutor 0xf4da3c42…a914, WrappedTokenFactory 0x8bc71aE8…169e, pToken factory 0x9c3663FA…a0BB, BridgeVault 0x14b107cf…897c, CheckpointManager 0xa3d46d24…2487, Timelock 0x0dA180B1…001D, EmergencySettlement 0x9edf37f7…eabe, plus live implementations 0x6747B498…3Ee3, 0xdFE85100…A86F, 0x44c6c2A9…BF78.
- Candidate proposed: arcus | Arcus | @arcus_xyz | arcus.xyz (coverage seed recommendation for a later assignment; this file is inventory only).
- Blockscout legacy /api proxy returned Cloudflare HTML; api/v2 and RPC succeeded. x.com/status WebFetch 403; tweet text from api.fxtwitter.com. Isolated-positions article slug not recovered (404). Llama arcus-perp adapter path 404 under projects/; ptokens adapter opened.
- Rate limits: none. Stop after this packet.
