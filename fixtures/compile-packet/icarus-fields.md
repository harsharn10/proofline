---
contract_version: proofline-research-v2
work_id: WORK-20260903-codex-icarus-fields
producer: codex
role: compiler
base_sha: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
slug: icarus-fields
name: Icarus Fields
packet_tier: seed
as_of: 2026-09-03T12:00:00Z
prior_packet: null
owned_slugs: [icarus-fields]
allowed_paths: [research/inbox/packets/icarus-fields/WORK-20260903-codex-icarus-fields.md]
identity:
  canonical_name: Icarus Fields
  aliases: []
  symbols: [FLD]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://fields.example
  official_handle: "@fields"
  repository: https://github.com/example/fields
  possible_matches: []
classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [analytics]
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: seed
  evidence_state: claimed
  rationale: Icarus Fields reads public chain state and publishes changes.
qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: No deployment is claimed. }
  native_play: { status: pass, claim_ids: [CLM-1], note: The project describes Robinhood Chain reads. }
  citable: { status: pass, claim_ids: [CLM-1], note: Official pages are available. }
  research_story: { status: pass, claim_ids: [CLM-1], note: Public chain reads can be reproduced. }
links:
  - { kind: site, url: "https://FIELDS.example/?utm_source=packet#top", authenticity: confirmed }
  - { kind: site, url: "https://fields.example", authenticity: confirmed }
  - { kind: docs, url: "https://fields.example/docs", authenticity: confirmed }
  - { kind: github, url: "https://github.com/example/fields", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x1111111111111111111111111111111111111111", authenticity: confirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/fields", authenticity: confirmed }
  - { kind: app, url: "https://app.fields.example", authenticity: confirmed }
deployments: []
metrics: []
reproductions: []
claims:
  - { id: CLM-1, field: product.mechanism, value: Reads public chain state, class: claim, observed_at: 2026-09-03T11:00:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
conflicts: []
events:
  - { id: EVT-1, type: company, title: Scanner update posted, summary: The project posted that its scanner now reads chain 4663., account: "@fields", occurred_at: 2026-09-03T08:00:00Z, observed_at: 2026-09-03T08:05:00Z, affected_fields: [product.mechanism], evidence_state: claim, impact: routine, site_recommendation: feed, channel_recommendation: none, receipt_ids: [R-1] }
  - { id: EVT-2, type: company, title: Independent account describes the scanner, summary: An independent account posted a walkthrough of the scanner., account: "@reader", occurred_at: 2026-09-03T09:00:00Z, observed_at: 2026-09-03T09:05:00Z, affected_fields: [communications.status], evidence_state: claim, impact: routine, site_recommendation: feed, channel_recommendation: none, receipt_ids: [R-2] }
  - { id: EVT-3, type: company, title: Contract activity located, summary: The explorer shows transactions for the located contract., occurred_at: 2026-09-03T10:00:00Z, observed_at: 2026-09-03T10:05:00Z, affected_fields: [activity.status], evidence_state: verified, impact: material, site_recommendation: profile, channel_recommendation: none, receipt_ids: [R-3] }
  - { id: EVT-4, type: company, title: Risk note posted, summary: The project says the scanner can miss delayed indexer updates., flagged: true, account: "@fields", occurred_at: 2026-09-03T11:00:00Z, observed_at: 2026-09-03T11:05:00Z, affected_fields: [communications.status], evidence_state: claim, impact: material, site_recommendation: both, channel_recommendation: none, receipt_ids: [R-4] }
receipts:
  - { id: R-1, publisher: Icarus Fields, title: Scanner update, url: "https://x.com/fields/status/1?utm_source=packet", published_at: 2026-09-03T08:00:00Z, accessed_at: 2026-09-03T08:05:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, EVT-1], excerpt: The scanner now reads chain 4663. }
  - { id: R-2, publisher: Reader, title: Scanner walkthrough, url: "https://x.com/reader/status/2", published_at: 2026-09-03T09:00:00Z, accessed_at: 2026-09-03T09:05:00Z, kind: social, authority: independent, authenticity: confirmed, supports: [EVT-2], excerpt: A walkthrough of the scanner. }
  - { id: R-3, publisher: Blockscout, title: Located contract, url: "https://robinhoodchain.blockscout.com/address/0x1111111111111111111111111111111111111111", published_at: null, accessed_at: 2026-09-03T10:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-3], excerpt: The contract has transactions on chain 4663. }
  - { id: R-4, publisher: Icarus Fields, title: Indexer caveat, url: "https://fields.example/status/indexer", published_at: 2026-09-03T11:00:00Z, accessed_at: 2026-09-03T11:05:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: Delayed indexer updates can be missed. }
gaps:
  - { priority: P1, question: Is the scanner code public?, checked: Official site and repository, next: Match the deployed build to a commit. }
---

## What it is

Icarus Fields reads public Robinhood Chain state and publishes changes with links to the underlying receipts.

Themes: chain-data, monitoring, tooling
