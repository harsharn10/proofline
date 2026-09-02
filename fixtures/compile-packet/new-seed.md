---
contract_version: proofline-research-v2
work_id: WORK-20260902-codex-alpha
producer: codex
role: compiler
base_sha: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
slug: alpha
name: Alpha
packet_tier: seed
as_of: 2026-09-02T12:00:00Z
prior_packet: null
owned_slugs: [alpha]
allowed_paths: [research/inbox/packets/alpha/WORK-20260902-codex-alpha.md]
identity:
  canonical_name: Alpha
  aliases: []
  symbols: [ALPHA]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://alpha.example
  official_handle: "@alpha"
  repository: null
  possible_matches: []
classification:
  primary_leaf: trading/amm-native
  secondary_leaves: []
  mechanism_tags: [amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: verified
  rationale: Alpha is a native automated market maker with a reproduced factory deployment.
qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-1], note: Factory code was reproduced on chain 4663. }
  native_play: { status: pass, claim_ids: [CLM-1], note: The deployment is native to Robinhood Chain. }
  citable: { status: pass, claim_ids: [CLM-1], note: Explorer evidence is available. }
  research_story: { status: pass, claim_ids: [CLM-1], note: The factory control surface is researchable. }
links:
  - { kind: site, url: https://alpha.example, authenticity: confirmed }
deployments:
  - label: Alpha factory
    role: factory
    address: { value: "0x1111111111111111111111111111111111111111", chain: robinhood-chain, source: explorer, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: true }
    receipt_ids: [R-1]
metrics: []
reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T12:00:00Z, receipt_ids: [R-1], result: eth_getCode returned non-empty code. }
claims:
  - { id: CLM-1, field: deployment.address, value: "0x1111111111111111111111111111111111111111", class: verified, observed_at: 2026-09-02T12:00:00Z, receipt_ids: [R-1], reproduction_ids: [REP-1], supersedes: null }
conflicts: []
events:
  - { id: EVT-1, type: onchain, title: Factory reproduced, summary: Factory bytecode was reproduced on chain 4663., occurred_at: 2026-09-02T12:00:00Z, observed_at: 2026-09-02T12:00:00Z, affected_fields: [deployment.address], evidence_state: verified, impact: material, site_recommendation: feed, channel_recommendation: not-evaluated, receipt_ids: [R-1] }
receipts:
  - { id: R-1, publisher: Blockscout, title: Alpha factory address, url: "https://robinhoodchain.blockscout.com/address/0x1111111111111111111111111111111111111111?utm_source=test#code", published_at: null, accessed_at: 2026-09-02T12:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: Contract bytecode exists on chain 4663. }
gaps:
  - { priority: P1, question: Who controls the factory?, checked: Explorer source, next: Read owner and role setters. }
---
