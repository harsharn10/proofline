---
# Seed tier: frontmatter required, body optional. Used by scripts/test-packet.mjs.
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-heavy-seed-example
producer: grok-heavy
role: collector
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
slug: seed-example
name: Seed Example
packet_tier: seed
as_of: 2026-09-02T14:00:00Z
prior_packet: null
owned_slugs: [seed-example]
allowed_paths:
  - research/inbox/packets/seed-example/WORK-20260902-grok-heavy-seed-example.md
identity:
  canonical_name: Seed Example
  aliases: []
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://seed-example.org
  official_handle: "@seedexample"
  repository: "NULL — no repository was located from the site, the documentation or the X account"
  possible_matches: []
classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [analytics]
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: seed
  evidence_state: claimed
  rationale: "One announcement post and a live marketing site; no deployment evidence in this pass [R-1]."
qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: "No address published and none found on the explorer on 2026-09-02" }
  native_play:       { status: pass, claim_ids: [CLM-1], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2], note: "" }
  research_story:    { status: fail, claim_ids: [], note: "Nothing to research beyond the announcement until a contract exists" }
links:
  - { kind: site, url: "https://seed-example.org", authenticity: unconfirmed }
claims:
  - { id: CLM-1, field: product.mechanism, value: "A block explorer overlay that labels contract deployments", class: claim, observed_at: 2026-09-02T13:00:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://seed-example.org", class: claim, observed_at: 2026-09-02T13:00:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
receipts:
  - { id: R-1, publisher: Seed Example, title: "Launch announcement", url: "https://seed-example.org/blog/launch", published_at: 2026-08-30T00:00:00Z, accessed_at: 2026-09-02T13:00:00Z, kind: announcement, authority: primary, authenticity: unconfirmed, supports: [CLM-1, CLM-2], excerpt: "A contract-labelling overlay for Robinhood Chain is coming this quarter." }
gaps:
  - { priority: P0, question: "Is any contract deployed on chain 4663?", checked: "site, blog, X account and the explorer's contract list, 2026-09-02", next: "search the explorer for the deployer named in the blog post" }
---
