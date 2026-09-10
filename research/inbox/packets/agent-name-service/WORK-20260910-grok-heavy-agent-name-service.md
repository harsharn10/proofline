---
# Packet v2 full backfill. Task ecc4cd43582877107060 (#132).
contract_version: proofline-research-v2
work_id: WORK-20260910-grok-heavy-agent-name-service
producer: grok-heavy
role: collector
base_sha: 422d4a5d33b5144bcfa725d264272be0b691e3f9
slug: agent-name-service
name: Agent Name Service
packet_tier: full
as_of: 2026-09-10T18:30:00Z
prior_packet: research/inbox/packets/agent-name-service/WORK-20260903-grok-heavy-icarus-research.md@422d4a5d33b5144bcfa725d264272be0b691e3f9
supersedes: null
owned_slugs: [agent-name-service]
allowed_paths:
  - research/inbox/packets/agent-name-service/WORK-20260910-grok-heavy-agent-name-service.md

identity:
  crosslink_claim_ids: [CLM-3]
  canonical_name: Agent Name Service
  aliases: [AgentNS, ANS, ".agent"]
  symbols: [ANS]
  entity_kind: tool
  chain_scope: robinhood-native
  official_domain: https://www.agentsn.xyz
  official_handle: "@RHAgentNS"
  repository: "NULL — github.com/RHAgentNS still unlinked from site, docs and X bio this pass; no official repository URL published"
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
        - "ANS is a PonsV2LauncherToken created through Pons v2 factory 0x7eD5…EC7e; the .agent registrar is a separate four-contract stack"
        - "Official surfaces are agentsn.xyz / @RHAgentNS, not Pons"

classification:
  primary_leaf: agents/agent-identity
  secondary_leaves: [tooling/names]
  mechanism_tags: [agent, other]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Docs-named AgentNames/AgentIdentity/AgentResolver/AgentMarket still have non-empty code on 4663. owner() on AgentNames, AgentIdentity and AgentMarket returns EOA 0x35A9…6155; AgentResolver owner() reverts. Token deployer 0x4B4B…Ed69 is a different EOA. Fee-sink and buyback address still unpublished. [CLM-4] [CLM-16] [CLM-17]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-16], note: "" }

links:
  - { kind: site, url: "https://www.agentsn.xyz", authenticity: confirmed }
  - { kind: docs, url: "https://www.agentsn.xyz/docs", authenticity: confirmed }
  - { kind: app, url: "https://www.agentsn.xyz/register", authenticity: confirmed }
  - { kind: x, url: "https://x.com/RHAgentNS", authenticity: confirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0x229ef251e1a4a896a12641277df62b6ec176eaa341f7e2ac7e8c605add66fda8", authenticity: confirmed }

deployments:
  - label: AgentNames (registrar)
    role: other
    address: { value: "0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9", chain: robinhood-chain, source: docs, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: false }
    receipt_ids: [R-2, R-11]
  - label: AgentIdentity
    role: other
    address: { value: "0xb7fC672671868e529dB8D123f21b655F9E819c2A", chain: robinhood-chain, source: docs, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: false }
    receipt_ids: [R-2, R-12]
  - label: AgentResolver
    role: other
    address: { value: "0x0713447f8e918A217762412005529E339f005f9f", chain: robinhood-chain, source: docs, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: false }
    receipt_ids: [R-2, R-13]
  - label: AgentMarket
    role: other
    address: { value: "0x7FcD3C337B6F9203db4287c46A1a607bE6d5357D", chain: robinhood-chain, source: docs, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: false }
    receipt_ids: [R-2, R-14]
  - label: ANS token (PonsV2LauncherToken)
    role: token
    address: { value: "0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24", chain: robinhood-chain, source: explorer, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: true }
    receipt_ids: [R-4, R-5]
  - label: Pons v2 launch factory (token launchFactory)
    role: factory
    address: { value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", chain: robinhood-chain, source: explorer, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-15]
  - label: PonsV2BondingCurve (token curve)
    role: other
    address: { value: "0x09eD966e77c02DDd1FF43948D284A85d8e92a0DE", chain: robinhood-chain, source: explorer, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-16]
  - label: Token deployer EOA
    role: admin
    address: { value: "0x4B4BCA71E68E80130E477Ba831399A12A088Ed69", chain: robinhood-chain, source: explorer, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-17]
  - label: RobinhoodLocker (ANS lock)
    role: other
    address: { value: "0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F", chain: robinhood-chain, source: explorer, seen: 2026-09-03, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-18]
  - label: Registry owner / deployer EOA
    role: admin
    address: { value: "0x35A95822889e73f54ffD06371AB53Dd0Fd646155", chain: robinhood-chain, source: explorer, seen: 2026-09-10, exists_on_4663: true, explorer_source_verified: null }
    receipt_ids: [R-11, R-19]

metrics:
  - { kind: volume_24h, value: 1.07, currency: USD, as_of: 2026-09-10, window: 24h, method: "DexScreener Uniswap v4 ANS/ETH pair 0x229e…fda8 volume.h24", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-11], result: "eth_getCode 16695 bytes at 0x858D…15c9; owner() 0x35A9…6155" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-12], result: "eth_getCode 9405 bytes at 0xb7fC…9c2A; owner() 0x35A9…6155" }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-13], result: "eth_getCode 8668 bytes at 0x0713…5f9f; owner() reverted" }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-14], result: "eth_getCode 10108 bytes at 0x7FcD…357D; owner() 0x35A9…6155" }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-4], result: "eth_getCode 3248 bytes at 0xdB9B…0C24; owner() reverted" }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-15], result: "eth_getCode 24177 bytes at 0x7eD5…EC7e; owner() 0x263e…19Dd" }
  - { id: REP-7, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-16], result: "eth_getCode 10229 bytes at 0x09eD…a0DE; owner() reverted" }
  - { id: REP-8, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-17], result: "eth_getCode empty at token deployer 0x4B4B…Ed69" }
  - { id: REP-9, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-18], result: "eth_getCode 4941 bytes at 0xD0f7…C32F; owner() reverted" }
  - { id: REP-10, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-10T18:24:00Z, receipt_ids: [R-19], result: "eth_getCode empty at registry owner 0x35A9…6155" }
  - { id: REP-11, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1, R-2, R-3], result: "Site and docs name the four contracts; X bio links agentsn.xyz" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "A .agent name resolves on chain to an agent identity (key, wallet, endpoint, capabilities); register requires an EIP-712 signature from the agent key, paid by a separate controller wallet", class: claim, observed_at: 2026-09-03T01:40:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.agentsn.xyz", class: claim, observed_at: 2026-09-03T01:40:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "Official site/docs and @RHAgentNS name the same .agent product; X bio links agentsn.xyz", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-11], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "AgentNames 0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "AgentIdentity 0xb7fC672671868e529dB8D123f21b655F9E819c2A", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-12], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "AgentResolver 0x0713447f8e918A217762412005529E339f005f9f", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "AgentMarket 0x7FcD3C337B6F9203db4287c46A1a607bE6d5357D", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-14], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "ANS token 0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "Pons v2 launch factory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-15], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-10, field: deployment.address, value: "PonsV2BondingCurve 0x09eD966e77c02DDd1FF43948D284A85d8e92a0DE", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-16], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-11, field: deployment.address, value: "Token deployer EOA 0x4B4BCA71E68E80130E477Ba831399A12A088Ed69", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-17], reproduction_ids: [REP-8], supersedes: null }
  - { id: CLM-12, field: deployment.address, value: "RobinhoodLocker 0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-18], reproduction_ids: [REP-9], supersedes: null }
  - { id: CLM-13, field: communications.status, value: "@RHAgentNS pinned 2026-08-31 post that .agent is live on Robinhood Chain and links agentsn.xyz; no later material product post located this pass", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: team.identity, value: "No named legal entity or named maintainers on site, docs or X; two distinct EOAs observed", class: unknown, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "No audit report URL on site, docs or X this pass", class: unknown, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: control.owner, value: "owner() on AgentNames, AgentIdentity and AgentMarket is EOA 0x35A95822889e73f54ffD06371AB53Dd0Fd646155 (empty code); AgentResolver owner() reverts; no timelock in that call path", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-11, R-12, R-13, R-14, R-19], reproduction_ids: [REP-1, REP-2, REP-3, REP-4, REP-10], supersedes: null }
  - { id: CLM-17, field: control.privileged-role, value: "Token deployer 0x4B4B…Ed69 is a different empty-code EOA from registry owner 0x35A9…6155; no shared Safe or timelock located", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-17, R-19], reproduction_ids: [REP-8, REP-10], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: "Docs say registration, renewal and marketplace fees are governance-configurable; no 4663 fee-recipient or buyback address is printed on docs", class: claim, observed_at: 2026-09-10T18:20:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: activity.status, value: "DexScreener Uniswap v4 ANS/ETH pair liquidity $5,290.49, 24h volume $1.07 at access", class: claim, observed_at: 2026-09-10T18:22:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-2, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "Registry owner / deployer EOA 0x35A95822889e73f54ffD06371AB53Dd0Fd646155", class: verified, observed_at: 2026-09-10T18:24:00Z, receipt_ids: [R-19], reproduction_ids: [REP-10], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: Registry owner() is a single EOA
    summary: owner() on AgentNames, AgentIdentity and AgentMarket returned 0x35A9…6155 with empty code. AgentResolver owner() reverted. Docs say governance can release reserved labels and reconfigure fees; those views were not decoded this pass.
    account: null
    occurred_at: 2026-09-10T18:24:00Z
    observed_at: 2026-09-10T18:24:00Z
    affected_fields: [control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-11, R-12, R-14, R-19]

receipts:
  - { id: R-1, publisher: Agent Name Service, title: "Official site", url: "https://www.agentsn.xyz", published_at: null, accessed_at: 2026-09-10T18:20:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-14], excerpt: "Names that resolve to agents. claw.agent points at an on-chain identity: the agent's own key, its wallet, its endpoint, and what it can do. A wallet cannot claim one." }
  - { id: R-2, publisher: Agent Name Service, title: "Docs / contracts", url: "https://www.agentsn.xyz/docs", published_at: null, accessed_at: 2026-09-10T18:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-4, CLM-5, CLM-6, CLM-7, CLM-18], excerpt: "Everything lives in four contracts. AgentNames 0x858D…15c9, AgentIdentity 0xb7fC…9c2A, AgentResolver 0x0713…5f9f, AgentMarket 0x7FcD…357D. Every one of these numbers is governance-configurable." }
  - { id: R-3, publisher: Agent Name Service, title: "@RHAgentNS profile and pinned post", url: "https://x.com/RHAgentNS", published_at: 2026-08-31T00:00:00Z, accessed_at: 2026-09-10T18:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-13], excerpt: "Bio: Agent Name Service is the .agent namespace on Robinhood Chain. claw.agent resolves to an on-chain agent identity. Link agentsn.xyz. Pinned Aug 31: Live on Robinhood Chain." }
  - { id: R-4, publisher: Robinhood RPC, title: "eth_getCode ANS token", url: "https://robinhoodchain.blockscout.com/address/0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "eth_getCode 3248 bytes; owner() reverted." }
  - { id: R-5, publisher: DexScreener, title: "ANS/ETH Uniswap v4", url: "https://api.dexscreener.com/latest/dex/tokens/0xdB9Bc67f022d967C3a912Ebe3e6ffe25d5F70C24", published_at: null, accessed_at: 2026-09-10T18:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-19], excerpt: "pair 0x229e…fda8 labels v4, liquidity.usd 5290.49, volume.h24 1.07, websites https://www.agentsn.xyz/, socials x.com/rhagentns" }
  - { id: R-11, publisher: Robinhood RPC, title: "eth_getCode/owner AgentNames", url: "https://robinhoodchain.blockscout.com/address/0x858D52Db9D8484b4921cd6c39Ab5D706BE2155c9", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-16, EVT-1], excerpt: "eth_getCode 16695 bytes; owner() 0x35A95822889e73f54ffD06371AB53Dd0Fd646155" }
  - { id: R-12, publisher: Robinhood RPC, title: "eth_getCode/owner AgentIdentity", url: "https://robinhoodchain.blockscout.com/address/0xb7fC672671868e529dB8D123f21b655F9E819c2A", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16], excerpt: "eth_getCode 9405 bytes; owner() 0x35A9…6155" }
  - { id: R-13, publisher: Robinhood RPC, title: "eth_getCode/owner AgentResolver", url: "https://robinhoodchain.blockscout.com/address/0x0713447f8e918A217762412005529E339f005f9f", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-16], excerpt: "eth_getCode 8668 bytes; owner() reverted" }
  - { id: R-14, publisher: Robinhood RPC, title: "eth_getCode/owner AgentMarket", url: "https://robinhoodchain.blockscout.com/address/0x7FcD3C337B6F9203db4287c46A1a607bE6d5357D", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-16, EVT-1], excerpt: "eth_getCode 10108 bytes; owner() 0x35A9…6155" }
  - { id: R-15, publisher: Robinhood RPC, title: "eth_getCode Pons v2 factory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "eth_getCode 24177 bytes; owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd" }
  - { id: R-16, publisher: Robinhood RPC, title: "eth_getCode PonsV2BondingCurve", url: "https://robinhoodchain.blockscout.com/address/0x09eD966e77c02DDd1FF43948D284A85d8e92a0DE", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "eth_getCode 10229 bytes; owner() reverted" }
  - { id: R-17, publisher: Robinhood RPC, title: "eth_getCode token deployer", url: "https://robinhoodchain.blockscout.com/address/0x4B4BCA71E68E80130E477Ba831399A12A088Ed69", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, CLM-17], excerpt: "eth_getCode empty" }
  - { id: R-18, publisher: Robinhood RPC, title: "eth_getCode RobinhoodLocker", url: "https://robinhoodchain.blockscout.com/address/0xD0f7d8c6e9f6D80c297bEbe4F7fD1B9C8125C32F", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "eth_getCode 4941 bytes; owner() reverted" }
  - { id: R-19, publisher: Robinhood RPC, title: "eth_getCode registry owner EOA", url: "https://robinhoodchain.blockscout.com/address/0x35A95822889e73f54ffD06371AB53Dd0Fd646155", published_at: null, accessed_at: 2026-09-10T18:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-17, EVT-1], excerpt: "eth_getCode empty at 0x35A9…6155" }

gaps:
  - { area: security, priority: P1, question: "Is there an audit of the four registry contracts whose scope matches 0x858D… / 0xb7fC… / 0x0713… / 0x7FcD…?", checked: "agentsn.xyz, /docs, @RHAgentNS bio and pinned posts, 2026-09-10", next: "record any report URL and match commit/address scope" }
  - { area: team, priority: P1, question: "Who operates the registry besides EOA 0x35A9…6155, and is there a legal entity?", checked: "site, docs, X, 2026-09-10", next: "public attribution or on-chain Safe/timelock" }
  - { priority: P0, question: "Which 4663 address receives registration ETH and runs the $ANS buyback named on the homepage?", checked: "docs say fees are governance-configurable and readable on /explorer; no sink hex on docs HTML this pass, 2026-09-10", next: "decode fee-recipient views on AgentNames or trace a register tx" }
  - { priority: P1, question: "Can owner() 0x35A9…6155 reassign or revoke a live name, and is there a timelock?", checked: "owner() reproduced on three of four registry contracts; docs describe reserved-label release and governance-configurable fees; no timelock address, 2026-09-10", next: "verified source or ABI for revoke/reassign/setFee" }

---

# Agent Name Service — research packet

## What it is

A .agent namespace on Robinhood Chain. A name resolves to an agent identity (key, wallet, endpoint, capabilities), not a wallet. A controller wallet pays; only the agent's own key can register, signed offline. Users register or search names on agentsn.xyz. @RHAgentNS runs the site. $ANS is a Pons v2 token.

Themes: agent, tooling

TL;DR: On-chain .agent names that resolve to an agent key, wallet and endpoint; four docs-named contracts are live on 4663 and owned by a single EOA. [CLM-1 CLM-16]

## Why it matters

- Thesis: Robinhood Chain agent software can look up a stable handle instead of a hex string [CLM-1].
- Traction: four registry contracts still have code; $ANS has a thin Uniswap v4 ETH book [CLM-4 CLM-19].
- Catalyst: fee recipient, buyback path and revoke powers remain unpublished [CLM-18].

## What could go wrong

- A single empty-code EOA is owner() on three of four registry contracts, with no timelock in that call path [CLM-16].
- No audit report was located [CLM-15].
- Registration ETH and any $ANS buyback sink are not printed on docs [CLM-18].

## Product and mechanics

A .agent name is leased, not owned. register is commit-and-reveal and needs an EIP-712 signature from the agent key; the controller wallet submits and pays. The resolver implements ENS-shaped addr/text/name reads. [claim R-2]

A sale moves the name's controller, not the agent identity; pointing the name at a different agent still needs that agent's signature. [claim R-2]

$ANS is a separate Pons v2 launcher token, not the registrar. [verified R-4 R-15]

## Control and security

owner() on AgentNames, AgentIdentity and AgentMarket is EOA 0x35A9…6155 with empty code. AgentResolver owner() reverts. No timelock address was located. [verified R-11 R-12 R-13 R-14 R-19]

The $ANS token deployer 0x4B4B…Ed69 is a different empty-code EOA. Pons v2 factory owner() is 0x263e…19Dd, the Pons Safe, not the ANS registry owner. [verified R-15 R-17]

No audit report URL was found on the site, docs or X. [unknown]

## Team and provenance

Site, docs and @RHAgentNS cross-link the same product. No legal name, GitHub org, or named maintainer is published. [claim R-1 R-3]

## Economics and activity

DexScreener's ANS/ETH Uniswap v4 pair showed $5,290.49 liquidity and $1.07 of 24h volume on 2026-09-10. That is the token book, not registry fee revenue. [claim R-5]

Docs say registration, renewal and marketplace fees are governance-configurable; the 4663 recipient was not printed. [claim R-2]

## Material risks

- Three registry owner() calls return one EOA with no code and no timelock in that path. [verified R-11]
- Audit absence and unpublished fee sink leave revoke and treasury behaviour unread. [unknown]

## Verification passes

- Receipts: site, docs, X and DexScreener were opened 2026-09-10; RPC eth_getCode/owner() were run against the listed addresses. [verified R-1 R-2 R-5 R-11]
- Numbers: liquidity and 24h volume are the DexScreener v4 pair, not a registry TVL. [claim R-5]
- Adversarial: a same-ticker ANS token or a Pons-launched memecoin could be confused with the registrar; the docs-named four-contract set and the X bio link to agentsn.xyz argue this row is the namespace, not the pad. [inference R-2 R-3]

## Operations log

- Task ecc4cd43582877107060. Prior packet WORK-20260903-grok-heavy-icarus-research reused for identity and classification.
- RPC https://rpc.mainnet.chain.robinhood.com eth_getCode/owner() 2026-09-10T18:24Z.
- Blockscout REST /api/v2 returned HTML (Cloudflare) this pass; explorer URLs kept as locators, facts taken from RPC.
- github.com/RHAgentNS not re-fetched beyond the prior 404; still unlinked.
- Fee-recipient view not decoded; buyback address remains a P0 gap.
- No identity merge, no scores, no publication.
