---
contract_version: proofline-research-v2
work_id: WORK-20260902-codex-alpha-update
producer: codex
role: compiler
base_sha: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
slug: alpha
name: Alpha
packet_tier: full
as_of: 2026-09-02T13:00:00Z
prior_packet: content/projects/alpha.yaml@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
owned_slugs: [alpha]
allowed_paths: [research/inbox/packets/alpha/WORK-20260902-codex-alpha-update.md]
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
  evidence_state: partly-verified
  rationale: Alpha routes swaps through a reproduced factory and router.
qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-1], note: Router code was reproduced. }
  native_play: { status: pass, claim_ids: [CLM-2], note: Official documentation describes a native AMM. }
  citable: { status: pass, claim_ids: [CLM-2], note: Documentation and explorer receipts are available. }
  research_story: { status: pass, claim_ids: [CLM-2], note: Router controls remain material. }
links:
  - { kind: site, url: https://alpha.example, authenticity: confirmed }
deployments:
  - label: Alpha router
    role: router
    address: { value: "0x2222222222222222222222222222222222222222", chain: robinhood-chain, source: explorer, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: true }
    receipt_ids: [R-1]
metrics:
  - { kind: tvl, value: 125000, currency: USD, as_of: 2026-09-02, window: point, method: api.llama.fi/protocol/alpha, class: claim, receipt_ids: [R-2] }
reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T13:00:00Z, receipt_ids: [R-1], result: eth_getCode returned non-empty code. }
claims:
  - { id: CLM-1, field: deployment.address, value: "0x2222222222222222222222222222222222222222", class: verified, observed_at: 2026-09-02T13:00:00Z, receipt_ids: [R-1], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-2, field: product.mechanism, value: Constant-product swaps, class: claim, observed_at: 2026-09-02T13:00:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
conflicts: []
events:
  - { id: EVT-1, type: onchain, title: Router reproduced, summary: Router bytecode was reproduced on chain 4663., occurred_at: 2026-09-02T13:00:00Z, observed_at: 2026-09-02T13:00:00Z, affected_fields: [deployment.address], evidence_state: verified, impact: material, site_recommendation: both, channel_recommendation: pending, receipt_ids: [R-1] }
receipts:
  - { id: R-1, publisher: Blockscout, title: Alpha router address, url: "https://robinhoodchain.blockscout.com/address/0x2222222222222222222222222222222222222222", published_at: null, accessed_at: 2026-09-02T13:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: Contract bytecode exists. }
  - { id: R-2, publisher: Alpha, title: Alpha mechanism and activity, url: https://alpha.example/docs, published_at: null, accessed_at: 2026-09-02T13:00:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: Alpha uses constant-product pools. }
gaps:
  - { priority: P1, question: Is the router upgradeable?, checked: Explorer source, next: Read proxy slots and setters. }
---

## What it is

Alpha is a native automated market maker with a reproduced router.

## Why it matters

The router is the main execution path for swaps.

## What could go wrong

Upgrade authority has not been established. [unknown]

## Product and mechanics

Alpha documents constant-product pools. [claim R-2]

## Control and security

The router deployment was reproduced, but its owner path remains unknown. [verified R-1]

No published audit was located in the packet. [unknown]

## Team and provenance

The packet does not establish named operators. [unknown]

## Economics and activity

The cited aggregator reported $125,000 of TVL as of 2026-09-02. [claim R-2]

## Material risks

- Router upgrade authority remains unknown. [unknown]

## Verification passes

- Router bytecode was reproduced on chain 4663. [verified R-1]

## Operations log

Compilation fixture completed on 2026-09-02.
