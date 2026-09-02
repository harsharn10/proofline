---
contract_version: proofline-research-v2
work_id: WORK-20260902-codex-alpha-conflict
producer: codex
role: compiler
base_sha: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
slug: alpha
name: Alpha
packet_tier: update
as_of: 2026-09-02T14:00:00Z
prior_packet: content/projects/alpha.yaml@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
supersedes: WORK-20260902-codex-alpha-update
owned_slugs: [alpha]
allowed_paths: [research/inbox/packets/alpha/WORK-20260902-codex-alpha-conflict.md]
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
  coverage_recommendation: full
  evidence_state: conflicted
  rationale: Two official pages publish different router addresses.
qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-1], note: The prior router remains reproduced. }
  native_play: { status: pass, claim_ids: [CLM-1], note: The prior deployment is native. }
  citable: { status: pass, claim_ids: [CLM-1, CLM-2], note: Both values have receipts. }
  research_story: { status: pass, claim_ids: [CLM-1, CLM-2], note: The address conflict is material. }
links:
  - { kind: site, url: https://alpha.example, authenticity: confirmed }
deployments: []
metrics: []
reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T14:00:00Z, receipt_ids: [R-1], result: The prior router still has bytecode. }
claims:
  - { id: CLM-1, field: deployment.address, value: "0x2222222222222222222222222222222222222222", class: verified, observed_at: 2026-09-02T14:00:00Z, receipt_ids: [R-1], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-2, field: deployment.address, value: "0x3333333333333333333333333333333333333333", class: disputed, observed_at: 2026-09-02T14:00:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: CLM-1 }
conflicts:
  - { id: CON-1, field: deployment.address, claim_ids: [CLM-1, CLM-2], material_effect: Router identity is unsettled., status: open, resolution: null }
events: []
receipts:
  - { id: R-1, publisher: Blockscout, title: Prior Alpha router, url: "https://robinhoodchain.blockscout.com/address/0x2222222222222222222222222222222222222222", published_at: null, accessed_at: 2026-09-02T14:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: Prior router bytecode remains present. }
  - { id: R-2, publisher: Alpha, title: Conflicting router address, url: https://alpha.example/contracts, published_at: null, accessed_at: 2026-09-02T14:00:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: The page lists a different router address. }
gaps:
  - { priority: P0, question: Which router is canonical?, checked: Official contracts page and explorer, next: Obtain a controller-approved resolution with reproduced evidence. }
---

## Operations log

The conflicting address was retained for controller resolution.
