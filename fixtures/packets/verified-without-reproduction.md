---
# Invalid on purpose: CLM-1 is class `verified` with no reproduction id. Used by scripts/test-packet.mjs.
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-heavy-unreproduced
producer: grok-heavy
role: collector
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
slug: unreproduced
name: Unreproduced Example
packet_tier: seed
as_of: 2026-09-02T14:00:00Z
prior_packet: null
owned_slugs: [unreproduced]
allowed_paths:
  - research/inbox/packets/unreproduced/WORK-20260902-grok-heavy-unreproduced.md
identity:
  canonical_name: Unreproduced Example
  aliases: []
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://unreproduced-example.org
  official_handle: "@unreproduced"
  repository: null
  possible_matches: []
classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [analytics]
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: seed
  evidence_state: claimed
  rationale: "One announcement post [R-1]."
qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: "No address published" }
  native_play:       { status: pass, claim_ids: [CLM-1], note: "" }
  citable:           { status: pass, claim_ids: [CLM-1], note: "" }
  research_story:    { status: fail, claim_ids: [], note: "Announcement only" }
claims:
  - { id: CLM-1, field: product.mechanism, value: "A contract-labelling overlay", class: verified, observed_at: 2026-09-02T13:00:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
receipts:
  - { id: R-1, publisher: Unreproduced Example, title: "Launch announcement", url: "https://unreproduced-example.org/blog/launch", published_at: 2026-08-30T00:00:00Z, accessed_at: 2026-09-02T13:00:00Z, kind: announcement, authority: primary, authenticity: unconfirmed, supports: [CLM-1], excerpt: "A contract-labelling overlay is coming this quarter." }
---
