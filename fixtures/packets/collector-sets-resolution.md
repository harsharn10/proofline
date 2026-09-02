---
# Invalid on purpose: a collector fills conflicts[].resolution, which is a controller's decision.
# Used by scripts/test-packet.mjs.
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-heavy-resolver
producer: grok-heavy
role: collector
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
slug: resolver-example
name: Resolver Example
packet_tier: seed
as_of: 2026-09-02T14:00:00Z
prior_packet: null
owned_slugs: [resolver-example]
allowed_paths:
  - research/inbox/packets/resolver-example/WORK-20260902-grok-heavy-resolver.md
identity:
  canonical_name: Resolver Example
  aliases: []
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://resolver-example.org
  official_handle: "@resolverexample"
  repository: null
  possible_matches: []
classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [analytics]
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: seed
  evidence_state: conflicted
  rationale: "Two sources publish different launch dates [R-1] [R-2]."
qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: "No address published" }
  native_play:       { status: pass, claim_ids: [CLM-1], note: "" }
  citable:           { status: pass, claim_ids: [CLM-1], note: "" }
  research_story:    { status: fail, claim_ids: [], note: "Announcement only" }
reproductions:
  - { id: REP-1, method: document-scope, checked_at: 2026-09-02T13:30:00Z, receipt_ids: [R-1], result: "The blog post dates the launch to 2026-08-30." }
claims:
  - { id: CLM-1, field: activity.status, value: "launched 2026-08-30", class: claim, observed_at: 2026-09-02T13:00:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: activity.status, value: "launched 2026-09-01", class: disputed, observed_at: 2026-09-02T13:10:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
conflicts:
  - id: CON-1
    field: activity.status
    claim_ids: [CLM-1, CLM-2]
    material_effect: "The launch date sets the lifecycle reading."
    status: resolved
    resolution:
      winning_claim_ids: [CLM-1]
      reproduction_ids: [REP-1]
      rationale: "The blog post is the primary source."
      resolver: harsharn10
      resolved_at: 2026-09-02T13:45:00Z
receipts:
  - { id: R-1, publisher: Resolver Example, title: "Launch announcement", url: "https://resolver-example.org/blog/launch", published_at: 2026-08-30T00:00:00Z, accessed_at: 2026-09-02T13:00:00Z, kind: announcement, authority: primary, authenticity: unconfirmed, supports: [CLM-1], excerpt: "The overlay went live on 30 August." }
  - { id: R-2, publisher: Chain Weekly, title: "Weekly roundup", url: "https://chainweekly.example/roundup", published_at: 2026-09-01T00:00:00Z, accessed_at: 2026-09-02T13:10:00Z, kind: news, authority: independent, authenticity: unconfirmed, supports: [CLM-2], excerpt: "Resolver Example went live on 1 September." }
---
