---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: agent-name-service
name: Agent Name Service
packet_tier: seed
as_of: 2026-09-03T01:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [agent-name-service]
allowed_paths:
  - research/inbox/packets/agent-name-service/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Agent Name Service
  aliases: [AgentNS, ANS, ".agent"]
  symbols: [ANS]
  entity_kind: tool
  chain_scope: robinhood-native
  official_domain: https://www.agentsn.xyz
  official_handle: "@RHAgentNS"
  repository: "NULL — github.com/RHAgentNS returned 404; github.com/agentns and github.com/Agentsn exist but are not linked from the site, docs, X bio or token socials() this pass"
  possible_matches:
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent execution surface"
        - "Agent Name Service is agentsn.xyz / @RHAgentNS with registrar 0x858D…15c9 and token 0xdB9B…0C24"
        - "No shared domain, handle or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily, the launchpad"
        - "ANS is a PonsV2LauncherToken created through PonsV2LaunchFactory 0x7eD598Bc…EC7e; the .agent registrar is a separate four-contract stack"
        - "Official surfaces are agentsn.xyz / @RHAgentNS, not Pons"
    - slug: wire
      signals: [other]
      contrary_signals:
        - "Census Wire is wirebot.trade / @wirebotRH, a command-layer bot that also launches through Pons v2"
        - "Agent Name Service is a .agent registrar plus $ANS; not a trading bot"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: agents/agent-identity
  secondary_leaves: [tooling/names]
  mechanism_tags: [agent, other]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Four registry contracts named on agentsn.xyz/docs have non-empty code on chain 4663; $ANS 0xdB9B…0C24 is a verified PonsV2LauncherToken with a Uniswap v4 ANS/ETH book. Census announced is below that bar. Registrar source is unverified; owner() and fee sinks were not read. [R-2] [R-4] [R-6] [R-8] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-15, CLM-16, CLM-17], note: "" }

links:
  - { kind: site, url: "https://www.agentsn.xyz", authenticity: confirmed }
  - { kind: docs, url: "https://www.agentsn.xyz/docs", authenticity: confirmed }
  - { kind: app, url: "https://www.agentsn.xyz/register", authenticity: confirmed }
  - { kind: x, url: "https://x.com/RHAgentNS", authenticity: confirmed }

deployments:
  - label: AgentNames (registrar)
    role: other
    address:
      value: "0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-11, R-16]
  - label: AgentIdentity
    role: other
    address:
      value: "0xb7fC672671868e529dB8D123f21b655F9E819c2A"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-12, R-15]
  - label: AgentResolver
    role: other
    address:
      value: "0x0713447f8e918A217762412005529E339f005f9f"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-13]
  - label: AgentMarket
    role: other
    address:
      value: "0x7FcD3C337B6F9203db4287c46A1a607bE6d5357D"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-14]
  - label: ANS token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-6, R-7]
  - label: Pons v2 launch factory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-7]
  - label: PonsV2BondingCurve (token curve)
    role: other
    address:
      value: "0x09eD966e77c02DDd1FF43948D284A85d8e92a0DE"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7]
  - label: Token deployer EOA
    role: admin
    address:
      value: "0x4B4BCA71E68E80130E477Ba831399A12A088Ed69"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-6, R-7, R-9]
  - label: RobinhoodLocker (ANS lock)
    role: other
    address:
      value: "0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9, R-10]

metrics:
  - { kind: holders, value: 64, currency: null, as_of: 2026-09-03T01:40:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24 holders_count", class: claim, receipt_ids: [R-5] }
  - { kind: tvl, value: 5066.36, currency: USD, as_of: 2026-09-03T01:40:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xdB9B…0C24 Uniswap v4 ANS/ETH pair 0x229e…fda8 liquidity.usd; pair slice not protocol TVL", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 1.2, currency: USD, as_of: 2026-09-03T01:40:00Z, window: 24h, method: "DexScreener same ANS/ETH v4 pair volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 3154, currency: USD, as_of: 2026-09-03T01:40:00Z, window: point, method: "DexScreener same ANS/ETH v4 pair marketCap", class: claim, receipt_ids: [R-8] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T01:40:00Z, receipt_ids: [R-6], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x329f631 (53081649). eth_getCode: token 3248 bytes, curve 10229, factory 24177, locker 4941, launchAndBuy 4416, helper 20906, deployer EOA 0x. name() AgentNS; symbol() ANS; decimals 18; totalSupply 1e27; deployer() 0x4B4BCA71E68E80130E477Ba831399A12A088Ed69; launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; curve() 0x09eD966e77c02DDd1FF43948D284A85d8e92a0DE; socials() twitter https://x.com/rhagentns website https://www.agentsn.xyz/" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T01:42:00Z, receipt_ids: [R-6, R-11, R-12, R-13, R-14], result: "eth_getCode non-empty on docs-named stack: AgentIdentity 0xb7fC…9c2A 9405 bytes; AgentNames 0x858D…15c9 16695; AgentResolver 0x0713…5f9f 8668; AgentMarket 0x7FcD…357D 10108. Registry deployer 0x35A95822889e73f54ffD06371AB53Dd0Fd646155 eth_getCode empty. AgentNames name()/symbol()/supportsInterface(ERC-721) reverted." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T01:40:00Z, receipt_ids: [R-4, R-5, R-7], result: "Blockscout api/v2/addresses/0xdB9B…0C24 is_contract true is_verified true name AgentNS (source PonsV2LauncherToken) creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 (PonsV2LaunchDeployer) creation_transaction_hash 0xe6283bb7…. api/v2/tokens name AgentNS symbol ANS holders_count 64 total_supply 1e27. Creation tx 2026-08-31T02:08:42Z to PonsV2LaunchAndBuy 0xe33E9E47…2948 method launchAndBuy status ok; pairToken 0x0 (ETH)." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T01:40:00Z, receipt_ids: [R-8], result: "DexScreener latest/dex/tokens/0xdB9B…0C24: one robinhood uniswap v4 pair 0x229ef251e1a4a896a12641277df62b6ec176eaa341f7e2ac7e8c605add66fda8 quote ETH liquidity.usd 5066.36 volume.h24 1.2 marketCap 3154 priceUsd 0.000003153 pairCreatedAt 2026-08-31T02:12:56Z. info.websites https://www.agentsn.xyz/ ; socials https://x.com/rhagentns." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T01:45:00Z, receipt_ids: [R-1, R-2, R-3, R-6], result: "@RHAgentNS bio is Agent Name Service is the .agent namespace on Robinhood Chain and URL https://www.agentsn.xyz/. Site twitter:site @rhagentns. Docs list the four 4663 addresses. Token socials() returns https://x.com/rhagentns and https://www.agentsn.xyz/. DexScreener info repeats those URLs." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T01:45:00Z, receipt_ids: [R-23], result: "api.llama.fi/protocols scan for AgentNS, RHAgentNS, agentsn, agent-name-service and Agent Name Service returned 0 hits." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "A .agent name resolves on chain to an agent identity (agent key, operational wallet, endpoint, capabilities). Registration requires an EIP-712 signature from the agent key; a controller wallet pays. Commit-reveal registration; names are leased.", class: claim, observed_at: 2026-09-03T01:45:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.agentsn.xyz", class: verified, observed_at: 2026-09-03T01:45:00Z, receipt_ids: [R-1, R-3, R-6], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@RHAgentNS", class: verified, observed_at: 2026-09-03T01:45:00Z, receipt_ids: [R-1, R-3, R-6], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9", class: verified, observed_at: 2026-09-03T01:42:00Z, receipt_ids: [R-2, R-11, R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xb7fC672671868e529dB8D123f21b655F9E819c2A", class: verified, observed_at: 2026-09-03T01:42:00Z, receipt_ids: [R-2, R-12, R-15], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x0713447f8e918A217762412005529E339f005f9f", class: verified, observed_at: 2026-09-03T01:42:00Z, receipt_ids: [R-2, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0x7FcD3C337B6F9203db4287c46A1a607bE6d5357D", class: verified, observed_at: 2026-09-03T01:42:00Z, receipt_ids: [R-2, R-14], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24", class: verified, observed_at: 2026-09-03T01:40:00Z, receipt_ids: [R-3, R-4, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-9, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T01:42:00Z, receipt_ids: [R-2, R-4, R-6, R-8], reproduction_ids: [REP-1, REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T01:42:00Z, receipt_ids: [R-2, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: identity.symbol, value: "ANS", class: verified, observed_at: 2026-09-03T01:40:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-12, field: identity.name, value: "AgentNS", class: verified, observed_at: 2026-09-03T01:40:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-13, field: relationship, value: "ANS is a PonsV2LauncherToken; launchFactory() and creator path are Pons v2 factory 0x7eD598Bc…EC7e via PonsV2LaunchAndBuy.launchAndBuy at 2026-08-31T02:08:42Z; pairToken ETH; curve 0x09eD966e…a0DE", class: verified, observed_at: 2026-09-03T01:40:00Z, receipt_ids: [R-4, R-6, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener Uniswap v4 ANS/ETH liquidity.usd 5066.36; volume.h24 1.2; marketCap 3154; Blockscout holders_count 64", class: verified, observed_at: 2026-09-03T01:40:00Z, receipt_ids: [R-5, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-15, field: product.mechanism, value: "A name costs 0.002 ETH a year (2026-08-31 post). Docs: registration and renewal priced per year with a surcharge on short names; marketplace sales take a protocol fee; numbers are governance-configurable.", class: claim, observed_at: 2026-09-03T01:45:00Z, receipt_ids: [R-2, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: control.owner, value: "Registry contracts created by EOA 0x35A95822889e73f54ffD06371AB53Dd0Fd646155 (no code). Token deployer() is a different EOA 0x4B4BCA71E68E80130E477Ba831399A12A088Ed69 (no code). Owner/governance on the unverified registrar was not read.", class: claim, observed_at: 2026-09-03T01:42:00Z, receipt_ids: [R-6, R-7, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL was located on the official site, docs, X bio or GitHub this pass", class: unknown, observed_at: 2026-09-03T01:46:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: taxonomy.primary-leaf, value: agents/agent-identity, class: claim, observed_at: 2026-09-03T01:45:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@RHAgentNS.role", value: project, class: claim, observed_at: 2026-09-03T01:45:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@RHAgentNS.slug", value: agent-name-service, class: claim, observed_at: 2026-09-03T01:45:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@RHAgentNS.note", value: "Handle lists agentsn.xyz. Token socials() and DexScreener info repeat x.com/rhagentns.", class: claim, observed_at: 2026-09-03T01:45:00Z, receipt_ids: [R-3, R-6, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: other, value: "Blockscout search for AgentNS also returns other ERC-20s named AgentNS, Agent Name Service, AgentNameService and RHAgentNS (e.g. 0xdD767AA0…FbA3 holders 2; 0xE642e1b8…AEfA holders 1; 0x89d3D665…4A2F holders 1). Official CA is 0xdB9B…0C24 via socials() and DexScreener. Flag: ca-collision", class: claim, observed_at: 2026-09-03T01:42:00Z, receipt_ids: [R-5, R-8, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: product.mechanism, value: "Site: a share of protocol revenue (buybackBps) is earmarked to buy $ANS on the open market. Exact bps and sink were not copied from a live chain read this pass.", class: claim, observed_at: 2026-09-03T01:45:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: activity.status, value: "Tx 0xc32d5682… lock(token 0xdB9B…0C24, amount 47823576322758539618448815, unlockTime 1790744880 = 2026-09-30T05:08:00Z) on RobinhoodLocker. @RHAgentNS posted AgentNS dev supply has now been locked for a month.", class: claim, observed_at: 2026-09-03T01:40:00Z, receipt_ids: [R-9, R-19], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Account posted the registry is live and free to read"
    summary: "@RHAgentNS posted the registry is live for name payments, agent auth, capability discovery and reputation."
    occurred_at: 2026-08-31T09:01:47Z
    observed_at: 2026-09-03T01:45:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-2
    type: company
    title: "Account posted a registry beats private allowlists"
    summary: "@RHAgentNS posted a contract can ask whether an address holds a .agent identity and what it declared."
    occurred_at: 2026-08-31T06:29:42Z
    observed_at: 2026-09-03T01:45:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-3
    type: company
    title: "Account posted that the website has been updated"
    summary: "@RHAgentNS posted https://www.agentsn.xyz/ with the text website has been updated."
    occurred_at: 2026-08-31T05:16:49Z
    observed_at: 2026-09-03T01:45:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: onchain
    title: "47.8M ANS locked in RobinhoodLocker until 30 Sep"
    summary: "Tx 0xc32d5682… called lock on RobinhoodLocker for 47823576.32 ANS, unlockTime 2026-09-30T05:08:00Z."
    occurred_at: 2026-08-31T05:08:38Z
    observed_at: 2026-09-03T01:40:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-5
    type: company
    title: "Account posted a name costs 0.002 ETH a year"
    summary: "@RHAgentNS posted a name costs 0.002 ETH a year and registration costs cents in gas."
    occurred_at: 2026-08-31T04:27:26Z
    observed_at: 2026-09-03T01:45:00Z
    affected_fields: [product.mechanism, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-6
    type: company
    title: "Account posted .agent is live on Robinhood Chain"
    summary: "@RHAgentNS posted claw.agent resolves on chain to an agent's key, wallet, endpoint and capabilities."
    occurred_at: 2026-08-31T02:48:29Z
    observed_at: 2026-09-03T01:45:00Z
    affected_fields: [product.mechanism, lifecycle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-7
    type: onchain
    title: "ANS token created through Pons v2 launchAndBuy"
    summary: "Tx 0xe6283bb7… called launchAndBuy on PonsV2LaunchAndBuy; created AgentNS/ANS at 2026-08-31T02:08:42Z."
    occurred_at: 2026-08-31T02:08:42Z
    observed_at: 2026-09-03T01:40:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-8
    type: onchain
    title: "Four .agent registry contracts deployed on chain 4663"
    summary: "EOA 0x35A95822… created AgentIdentity, AgentNames, AgentResolver and AgentMarket at 2026-08-31T01:37:48–55Z."
    occurred_at: 2026-08-31T01:37:48Z
    observed_at: 2026-09-03T01:42:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15, R-16]

receipts:
  - { id: R-1, publisher: Agent Name Service, title: "agentsn.xyz home", url: "https://www.agentsn.xyz/", published_at: null, accessed_at: 2026-09-03T01:45:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-18, CLM-23], excerpt: "Title Agent Name Service. Description: The .agent namespace on Robinhood Chain. claw.agent resolves to an on-chain agent identity, not a wallet. Only an agent's own key can register one. twitter:site @rhagentns. Nav: Market, Explorer, Docs, Register. Copy: claw.agent points at an on-chain identity: the agent's own key, its wallet, its endpoint, and what it can do. Registration must be signed by the agent's own key." }
  - { id: R-2, publisher: Agent Name Service, title: "How it works", url: "https://www.agentsn.xyz/docs", published_at: null, accessed_at: 2026-09-03T01:45:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-15, CLM-18], excerpt: "The Agent Name Service owns the .agent namespace on Robinhood Chain. Contracts on chain 4663: AgentNames 0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9, AgentIdentity 0xb7fC672671868e529dB8D123f21b655F9E819c2A, AgentResolver 0x0713447f8e918A217762412005529E339f005f9f, AgentMarket 0x7FcD3C337B6F9203db4287c46A1a607bE6d5357D. A plain wallet cannot claim a .agent name. Names are leased. Registration and renewal are priced per year." }
  - { id: R-3, publisher: Agent Name Service (@RHAgentNS), title: "X profile @RHAgentNS", url: "https://x.com/RHAgentNS", published_at: "2026-08-31T00:00:00Z", accessed_at: 2026-09-03T01:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-19, CLM-20, CLM-21], excerpt: "Display name Agent Name Service, handle @RHAgentNS. Bio: Agent Name Service is the .agent namespace on Robinhood Chain. claw.agent resolves to an on-chain agent identity. URL https://www.agentsn.xyz/. Joined 2026-08-31. User ID 2094238809877606400." }
  - { id: R-4, publisher: Blockscout, title: "Address 0xdB9B…0C24 AgentNS", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24", published_at: null, accessed_at: 2026-09-03T01:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-13], excerpt: "hash 0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24 is_contract true is_verified true name AgentNS creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xe6283bb7fef210b1201b3feee99976ff17b614e82113d1e6667a740e6053a626. Smart-contract name PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35." }
  - { id: R-5, publisher: Blockscout, title: "Token 0xdB9B…0C24", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24", published_at: null, accessed_at: 2026-09-03T01:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, CLM-12, CLM-14, CLM-22], excerpt: "name AgentNS symbol ANS decimals 18 holders_count 64 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode and PonsV2LauncherToken views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T01:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-8, CLM-9, CLM-10, CLM-11, CLM-12, CLM-13, CLM-16, CLM-21], excerpt: "eth_chainId 0x1237 block 53081649. Token code 3248 bytes name AgentNS symbol ANS totalSupply 1e27 deployer 0x4B4BCA71E68E80130E477Ba831399A12A088Ed69 launchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e curve 0x09eD966e77c02DDd1FF43948D284A85d8e92a0DE socials x.com/rhagentns agentsn.xyz. Registry stack code non-empty; registry deployer 0x35A9…6155 code 0x." }
  - { id: R-7, publisher: Blockscout, title: "ANS creation tx", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xe6283bb7fef210b1201b3feee99976ff17b614e82113d1e6667a740e6053a626", published_at: "2026-08-31T02:08:42.000000Z", accessed_at: 2026-09-03T01:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-13, CLM-16, EVT-7], excerpt: "hash 0xe6283bb7… timestamp 2026-08-31T02:08:42.000000Z block 50495585 from 0x4B4BCA71E68E80130E477Ba831399A12A088Ed69 to 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy method launchAndBuy status ok. Constructor: name AgentNS symbol ANS deployer 0x4B4B…Ed69 curve 0x09eD…a0DE launchFactory 0x7eD5…EC7e pairToken 0x0." }
  - { id: R-8, publisher: DexScreener, title: "latest/dex/tokens ANS", url: "https://api.dexscreener.com/latest/dex/tokens/0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24", published_at: null, accessed_at: 2026-09-03T01:40:00Z, kind: third-party-data, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-14, CLM-21, CLM-22], excerpt: "chainId robinhood dexId uniswap labels v4 pairAddress 0x229ef251e1a4a896a12641277df62b6ec176eaa341f7e2ac7e8c605add66fda8 base AgentNS/ANS quote ETH liquidity.usd 5066.36 volume.h24 1.2 marketCap 3154 priceUsd 0.000003153 pairCreatedAt 1788142376000. websites https://www.agentsn.xyz/ socials https://x.com/rhagentns." }
  - { id: R-9, publisher: Blockscout, title: "ANS lock tx", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xc32d56825b7e09d71443bcfcdbf858e10e1bd8901e84321cd095703bb51af2f6", published_at: "2026-08-31T05:08:38.000000Z", accessed_at: 2026-09-03T01:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-24, EVT-4], excerpt: "timestamp 2026-08-31T05:08:38.000000Z block 50602578 from 0x4B4BCA71E68E80130E477Ba831399A12A088Ed69 to 0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F name RobinhoodLocker method lock status ok. lock(token 0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24, amount 47823576322758539618448815, unlockTime 1790744880). Token transfer AgentNS/ANS to locker." }
  - { id: R-10, publisher: Blockscout, title: "RobinhoodLocker 0xD0f7…C32F", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F", published_at: null, accessed_at: 2026-09-03T01:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-24], excerpt: "hash 0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F name RobinhoodLocker is_contract true is_verified true creator_address_hash 0xb252140D8Db40Ca2dC2D28f17C1B771796Af0960. Source RobinhoodLocker.sol compiler v0.8.35." }
  - { id: R-11, publisher: Blockscout, title: "AgentNames 0x858D…15c9", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9", published_at: null, accessed_at: 2026-09-03T01:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4], excerpt: "hash 0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9 is_contract true is_verified false name null creator_address_hash 0x35A95822889e73f54ffD06371AB53Dd0Fd646155 creation_transaction_hash 0xb22fc90ca08087a507f7e6299af8b010d7b5e696041ce0ed6eca93a31a8e9eee." }
  - { id: R-12, publisher: Blockscout, title: "AgentIdentity 0xb7fC…9c2A", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xb7fC672671868e529dB8D123f21b655F9E819c2A", published_at: null, accessed_at: 2026-09-03T01:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0xb7fC672671868e529dB8D123f21b655F9E819c2A is_contract true is_verified false name null creator_address_hash 0x35A95822889e73f54ffD06371AB53Dd0Fd646155 creation_transaction_hash 0x6618b9b3778aece7e627083d27070b40e1c70d98880112012156f7fa3c7f54f9." }
  - { id: R-13, publisher: Blockscout, title: "AgentResolver 0x0713…5f9f", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x0713447f8e918A217762412005529E339f005f9f", published_at: null, accessed_at: 2026-09-03T01:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "hash 0x0713447f8e918A217762412005529E339f005f9f is_contract true is_verified false name null creator_address_hash 0x35A95822889e73f54ffD06371AB53Dd0Fd646155 creation_transaction_hash 0x4a1decaa7dfd934315837187d681cca8b38089e45d03d8fe5d854e11c0260904." }
  - { id: R-14, publisher: Blockscout, title: "AgentMarket 0x7FcD…357D", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x7FcD3C337B6F9203db4287c46A1a607bE6d5357D", published_at: null, accessed_at: 2026-09-03T01:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "hash 0x7FcD3C337B6F9203db4287c46A1a607bE6d5357D is_contract true is_verified false name null creator_address_hash 0x35A95822889e73f54ffD06371AB53Dd0Fd646155 creation_transaction_hash 0x73a0c8779fd1cd675ce377c3522c86f50377c5c9b8ce9f3355658f326d8c8bf0." }
  - { id: R-15, publisher: Blockscout, title: "AgentIdentity creation tx", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x6618b9b3778aece7e627083d27070b40e1c70d98880112012156f7fa3c7f54f9", published_at: "2026-08-31T01:37:48.000000Z", accessed_at: 2026-09-03T01:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16, EVT-8], excerpt: "timestamp 2026-08-31T01:37:48.000000Z from 0x35A95822889e73f54ffD06371AB53Dd0Fd646155 status ok created_contract 0xb7fC672671868e529dB8D123f21b655F9E819c2A." }
  - { id: R-16, publisher: Blockscout, title: "AgentNames creation tx", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xb22fc90ca08087a507f7e6299af8b010d7b5e696041ce0ed6eca93a31a8e9eee", published_at: "2026-08-31T01:37:51.000000Z", accessed_at: 2026-09-03T01:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, EVT-8], excerpt: "timestamp 2026-08-31T01:37:51.000000Z from 0x35A95822889e73f54ffD06371AB53Dd0Fd646155 status ok created_contract 0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9." }
  - { id: R-17, publisher: Agent Name Service (@RHAgentNS), title: "Agents have wallets", url: "https://x.com/RHAgentNS/status/2094255978791281133", published_at: "2026-08-31T02:48:29Z", accessed_at: 2026-09-03T01:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, EVT-6], excerpt: "Agents have wallets. They don't have names. .agent fixes that. claw.agent resolves on chain to an agent's key, wallet, endpoint and capabilities. A wallet can't claim one. Only the agent's own key can, signed offline, no gas. Live on Robinhood Chain. https://www.agentsn.xyz/" }
  - { id: R-18, publisher: Agent Name Service (@RHAgentNS), title: "A name costs 0.002 ETH a year", url: "https://x.com/RHAgentNS/status/2094280880759898505", published_at: "2026-08-31T04:27:26Z", accessed_at: 2026-09-03T01:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-15, EVT-5], excerpt: "Built on Robinhood Chain because agents transact constantly and in small amounts. A name costs 0.002 ETH a year. Registration costs cents in gas. Identity that's too expensive to use is not identity." }
  - { id: R-19, publisher: Agent Name Service (@RHAgentNS), title: "AgentNS dev supply locked", url: "https://x.com/RHAgentNS/status/2094291541296623745", published_at: "2026-08-31T05:09:48Z", accessed_at: 2026-09-03T01:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24], excerpt: "AgentNS dev supply has now been locked for a month https://robinhoodchain.blockscout.com/tx/0xc32d56825b7e09d71443bcfcdbf858e10e1bd8901e84321cd095703bb51af2f6" }
  - { id: R-20, publisher: Agent Name Service (@RHAgentNS), title: "website has been updated", url: "https://x.com/RHAgentNS/status/2094293309577445444", published_at: "2026-08-31T05:16:49Z", accessed_at: 2026-09-03T01:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "https://www.agentsn.xyz/ website has been updated" }
  - { id: R-21, publisher: Agent Name Service (@RHAgentNS), title: "The registry is already live", url: "https://x.com/RHAgentNS/status/2094349923986596259", published_at: "2026-08-31T09:01:47Z", accessed_at: 2026-09-03T01:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "If you're building agent infra on Robinhood Chain, the registry is already live and free to read. Payments to names. Agent to agent auth. Capability discovery. Reputation scoring. We built the primitive. The layer above it is wide open." }
  - { id: R-22, publisher: Agent Name Service (@RHAgentNS), title: "One public source of truth", url: "https://x.com/RHAgentNS/status/2094311651277217960", published_at: "2026-08-31T06:29:42Z", accessed_at: 2026-09-03T01:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "Right now every protocol that wants to serve agents maintains its own allowlist. With a registry, a contract just asks: does this address hold a .agent identity, and what did it declare it can do? One public source of truth beats forty private spreadsheets." }
  - { id: R-23, publisher: DefiLlama, title: "protocols list (no Agent Name Service row)", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-03T01:45:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "Scan of protocol rows for AgentNS, RHAgentNS, agentsn, agent-name-service and Agent Name Service returned 0 hits." }
  - { id: R-24, publisher: Blockscout, title: "Search AgentNS", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=AgentNS", published_at: null, accessed_at: 2026-09-03T01:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "Results include token AgentNS 0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24 plus other ERC-20s also named AgentNS, Agent Name Service 0xdD767AA0f5fC10A6c791c56220C2a7ef94CfFbA3, AgentNameService 0x89d3D66555B32374a4467663BD1B0092D36D4A2F, RHAgentNS 0xE642e1b89f0f39C84F4ac301Fa8CCfEe814BAEfA." }

gaps:
  - { priority: P0, question: "Who is owner/governance on AgentNames, AgentIdentity, AgentResolver and AgentMarket, and can they reassign or revoke a live name?", checked: "docs name governance-configurable fees and reserved-label release; four contracts is_verified false; name()/owner() on AgentNames reverted this pass, 2026-09-03", next: "eth_call owner/governance views once source is verified or ABI is published" }
  - { priority: P0, question: "Which 4663 address receives registration ETH and runs the $ANS buyback named on the homepage?", checked: "site JS reads buybackBps and buybackAllocation from chain; docs say fees are governance-configurable; no sink hex on docs, 2026-09-03", next: "read fee-recipient views on AgentNames and trace a register tx" }
  - { priority: P1, question: "Are the token deployer 0x4B4B…Ed69 and the registry deployer 0x35A9…6155 the same operator, and is there a timelock?", checked: "two EOAs, both no code; no Safe or timelock named on site/docs, 2026-09-03", next: "trace funding and admin calls on both EOAs" }
  - { priority: P1, question: "Is there an audit of the four registry contracts?", checked: "agentsn.xyz, /docs, X bio, github.com/RHAgentNS 404, 2026-09-03", next: "open any report URL the project posts and match commit/address scope" }
  - { priority: P2, question: "What are live identity, name and pricePerYear figures on chain?", checked: "homepage counters load from chain into Agent identities / Names live / Registrations / Price per year; values were null in the static HTML this pass", next: "eth_call the stats views the site uses" }
  - { priority: P2, question: "Do the other AgentNS-named ERC-20s share a deployer with 0xdB9B…0C24?", checked: "Blockscout search listed several same-name tokens with 1–2 holders; official CA is the socials()-linked one, 2026-09-03", next: "read creator_address_hash on 0xdD767…, 0xE642… and 0x89d3…" }
---

# Agent Name Service — research packet

## What it is

A .agent namespace on Robinhood Chain. A name resolves to an agent identity (key, wallet, endpoint, capabilities), not a wallet. A controller wallet pays; only the agent's own key can register, signed offline. Users register or search names on agentsn.xyz. @RHAgentNS runs the site. $ANS is a Pons v2 token.

Themes: agent, tooling

## Why it matters

Robinhood Chain has several human name systems; this one is the census row for agent identity. Four contracts named on agentsn.xyz/docs have non-empty code on chain 4663, and $ANS has a Uniswap v4 book, so census `announced` is below the mainnet bar. It is not Bankr and not Pons; Pons only launched the token.

## What could go wrong

The four registry contracts are unverified, so fee sinks, revocation and upgrade paths were not read. Token deployer `0x4B4B…Ed69` and registry deployer `0x35A9…6155` are different EOAs. Blockscout lists other ERC-20s with the same or similar name.

## Product and mechanics

A `.agent` name is a leased label. Docs: `register` needs an EIP-712 `RegisterName` signature from a key that an `AgentIdentity` already designates; a controller wallet submits and pays; commit then reveal. The resolver returns agent key, wallet, endpoint, capabilities and a live flag, and implements ENS `addr` / `text` / `name`. Expired names stop resolving; after grace the next registration takes the label. [claim R-2]

`$ANS` is a `PonsV2LauncherToken` named AgentNS / ANS, 18 decimals, totalSupply 1e27. `launchFactory()` is Pons v2 `0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e`. Creation tx `0xe6283bb7…` at 2026-08-31T02:08:42Z called `launchAndBuy` on `PonsV2LaunchAndBuy` with pairToken ETH. DexScreener lists a Uniswap v4 ANS/ETH pool created 2026-08-31T02:12:56Z. [verified R-4 R-6 R-7 R-8]

A 2026-08-31 post priced a name at 0.002 ETH per year. Docs: rent is per year with a short-name surcharge; marketplace sales take a protocol fee; figures are governance-configurable. Homepage JS reads `buybackBps` as a share of revenue earmarked to buy `$ANS`. [claim R-1 R-2 R-18]

## Control and security

Registry contracts were created by EOA `0x35A95822889e73f54ffD06371AB53Dd0Fd646155` (no code) at 2026-08-31T01:37:48–55Z. None of the four is source-verified. Token `deployer()` is a different EOA `0x4B4BCA71E68E80130E477Ba831399A12A088Ed69` (no code). No timelock address appeared on the site or docs. [verified R-6 R-7 R-15] [unknown]

Docs split powers: a controller wallet pays, updates and transfers; the agent key registers and consents; rotating the agent key needs that wallet plus current and incoming keys. Those modifiers were not read from verified source. No audit report URL was located. [claim R-2] [unknown]

## Team and provenance

Public identity is agentsn.xyz and `@RHAgentNS` (joined 2026-08-31). Token `socials()` returns `https://x.com/rhagentns` and `https://www.agentsn.xyz/`; the X bio repeats the site URL; DexScreener info lists the same pair. github.com/RHAgentNS returned 404. github.com/agentns and github.com/Agentsn are not linked from those surfaces. [verified R-1 R-3 R-6] [unknown]

Bankr and Wire are different census rows. Pons is the pad that minted `$ANS`, not the registrar. Other AgentNS-named ERC-20s on Blockscout are a ca-collision against `0xdB9B…0C24`. [claim R-7 R-24]

## Economics and activity

DexScreener Uniswap v4 ANS/ETH (not an all-pairs total): liquidity 5066.36 USD, 24h volume 1.2 USD, marketCap 3154 USD at this pass. Blockscout token: 64 holders. No DefiLlama protocol row. [verified R-5 R-8] [claim R-23]

Tx `0xc32d5682…` at 2026-08-31T05:08:38Z locked 47823576.32 ANS (~4.78% of 1e9 supply) in `RobinhoodLocker` `0xD0f7…C32F` until 2026-09-30T05:08:00Z. `@RHAgentNS` posted that as a one-month dev-supply lock. Homepage counters for identities, live names and price-per-year load from chain and were not copied as numbers this pass. [verified R-9] [claim R-1]

## Material risks

- Four registry contracts are unverified; owner, fee recipient and revoke path were not read. [claim R-11 R-12] [unknown]
- Token deployer and registry deployer are different EOAs with no code. [verified R-6 R-15]
- Registration price and buyback share are project posts and site JS, not a reproduced fee-sink balance. [claim R-1 R-18]
- Other ERC-20s on chain 4663 use AgentNS / Agent Name Service / RHAgentNS names. Flag: ca-collision. [claim R-24]
- No audit report URL was located. [unknown]

## Verification passes

- Receipts: agentsn.xyz, /docs, /register, X profile and named status URLs, Blockscout address/token/tx/search APIs, DexScreener latest/dex/tokens, DefiLlama protocols, github.com/RHAgentNS (404), and RPC eth_getCode/eth_call were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-4 R-6 R-8]
- Numbers: 5066.36 USD is DexScreener Uniswap v4 ANS/ETH liquidity.usd, not protocol TVL; 1.2 USD is that pair's volume.h24; 64 is Blockscout holders_count; 47823576.32 ANS is the lock amount, not circulating supply. [claim R-5 R-8 R-9]
- Adversarial: the strongest contrary reading is that Agent Name Service is Hoodle NS, RHNS, .hood or Bankr, or that census `announced` still holds because the registrar is unverified. Distinct handle, domain and four docs-named contracts with non-empty code, plus a verified Pons v2 token whose socials() match the site, argue against a merge and meet the mainnet bar. [inference R-2 R-3 R-6 R-8]

## Operations log

- Read content/census.yaml agent-name-service/bankr/pons/wire/hoodlock/mesh rows, content/projects/agent-name-service.yaml, content/sources/agent-name-service.yaml, content/research/agent-name-service.md, content/changelog/agent-name-service.yaml, content/accounts.yaml @RHAgentNS, research/inbox/2026-08-31-ecosystem-map.yaml, account-desk.yaml, docs/templates/research-packet-v2.md, schema/packet.schema.json. No content/pulled/agent-name-service.yaml and no content/feed/agent-name-service.yaml.
- Opened https://www.agentsn.xyz/, /docs, /register, /explorer, /market; X profile @RHAgentNS and named status URLs; github.com/RHAgentNS (404), github.com/agentns, github.com/Agentsn.
- GET Blockscout /api/v2/addresses for token, curve, factory, locker, four registry contracts, both deployers; /api/v2/tokens for ANS; /api/v2/transactions for creation and lock; /api/v2/search?q=AgentNS; /api/v2/smart-contracts for the token.
- GET api.dexscreener.com/latest/dex/tokens/0xdB9B…0C24; scanned api.llama.fi/protocols (no row).
- RPC https://rpc.mainnet.chain.robinhood.com with a browser User-Agent: eth_chainId 0x1237, eth_blockNumber 53081649, eth_getCode, eth_call name/symbol/decimals/totalSupply/deployer/launchFactory/curve/socials. AgentNames ERC-20/721 views reverted. Python urllib without User-Agent on the RPC returned 403.
- Time on this slug: one collector pass.
