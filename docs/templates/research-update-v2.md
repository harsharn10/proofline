---
# Synthetic update example: replace every identity, source and date; never submit this example.
contract_version: proofline-research-v2
work_id: WORK-20260910-grok-heavy-icarus-fields
producer: grok-heavy
role: collector
base_sha: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
slug: icarus-fields
name: Icarus Fields
packet_tier: update
as_of: 2026-09-10T12:00:00Z
prior_packet: research/inbox/packets/icarus-fields/WORK-20260903-codex-icarus-fields.md@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
owned_slugs:
  - icarus-fields
allowed_paths:
  - research/inbox/packets/icarus-fields/WORK-20260910-grok-heavy-icarus-fields.md
identity:
  canonical_name: Icarus Fields
  aliases: []
  symbols:
    - FLD
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://fields.example
  official_handle: "@fields"
  repository: https://github.com/example/fields
  possible_matches: []
classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags:
    - analytics
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: seed
  evidence_state: claimed
  rationale: Icarus Fields reads public chain state and publishes changes.
qualifying:
  deployed_on_chain:
    status: unknown
    claim_ids: []
    note: No deployment is claimed.
  native_play:
    status: pass
    claim_ids:
      - CLM-1
    note: The project describes Robinhood Chain reads.
  citable:
    status: pass
    claim_ids:
      - CLM-1
    note: Official pages are available.
  research_story:
    status: pass
    claim_ids:
      - CLM-1
    note: Public chain reads can be reproduced.
links:
  - kind: site
    url: https://FIELDS.example/?utm_source=packet#top
    authenticity: confirmed
  - kind: site
    url: https://fields.example
    authenticity: confirmed
  - kind: docs
    url: https://fields.example/docs
    authenticity: confirmed
  - kind: github
    url: https://github.com/example/fields
    authenticity: confirmed
  - kind: explorer
    url: https://robinhoodchain.blockscout.com/address/0x1111111111111111111111111111111111111111
    authenticity: confirmed
  - kind: dexscreener
    url: https://dexscreener.com/robinhood/fields
    authenticity: confirmed
  - kind: app
    url: https://app.fields.example
    authenticity: confirmed
deployments: []
metrics: []
reproductions: []
claims:
  - id: CLM-1
    field: product.mechanism
    value: Reads public chain state
    class: claim
    observed_at: 2026-09-03T11:00:00Z
    receipt_ids:
      - R-1
    reproduction_ids: []
    supersedes: null
conflicts: []
events:
  - id: EVT-1
    type: company
    title: Scanner adds timestamped exports
    summary: The project announced timestamped exports for chain-4663 observations. Analysts can compare readings across dates; export completeness has not been independently verified.
    account: "@fields"
    occurred_at: 2026-09-10T08:00:00Z
    observed_at: 2026-09-10T08:05:00Z
    affected_fields:
      - product.mechanism
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids:
      - R-1
receipts:
  - id: R-1
    publisher: Icarus Fields
    title: Scanner update
    url: https://x.com/fields/status/1234567890
    published_at: 2026-09-10T08:00:00Z
    accessed_at: 2026-09-10T08:05:00Z
    kind: social
    authority: primary
    authenticity: confirmed
    supports:
      - CLM-1
      - EVT-1
    excerpt: Timestamped exports are available for chain 4663 observations.
gaps:
  - priority: P1
    question: Is the scanner code public?
    checked: Official site and repository
    next: Match the deployed build to a commit.
supersedes: WORK-20260903-codex-icarus-fields
update_reason: event
change_summary: Scanner adds a dated export capability; existing identity and deployment claims remain unchanged.
---

## Operations log

Task: use the assigned stable task ID or issue. Compared the accepted prior packet and existing feed; this example models one new source post, not a repeated check. Retained metadata is not newly verified.
