---
contract_version: proofline-research-v2
work_id: WORK-20260902-codex-alpha-degraded
producer: codex
role: compiler
base_sha: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
slug: alpha
name: Alpha
packet_tier: full
as_of: 2026-09-02T14:00:00Z
prior_packet: content/projects/alpha.yaml@aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
owned_slugs: [alpha]
allowed_paths: [research/inbox/packets/alpha/WORK-20260902-codex-alpha-degraded.md]
identity:
  canonical_name: Alpha
  aliases: []
  symbols: [ALPHA]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://alpha.example
  official_handle: "NULL — no handle links back to the contract this pass"
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
  rationale: Alpha routes swaps through a reproduced router, with unread figures and one unread address.
qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-1], note: Router code was reproduced. }
  native_play: { status: pass, claim_ids: [CLM-2], note: Documentation describes a native automated market maker. }
  citable: { status: pass, claim_ids: [CLM-2], note: Documentation and explorer receipts are available. }
  research_story: { status: pass, claim_ids: [CLM-2], note: Router controls remain material. }
links:
  - { kind: site, url: https://alpha.example, authenticity: confirmed }
  - { kind: whitepaper, url: https://alpha.example/paper.pdf, authenticity: confirmed }
deployments:
  - label: Alpha router
    role: router
    address: { value: "0x2222222222222222222222222222222222222222", chain: robinhood-chain, source: explorer, seen: 2026-09-02, exists_on_4663: true, explorer_source_verified: true }
    receipt_ids: [R-1]
  - label: Alpha vault manager
    role: vault
    address: { value: "NULL — no vault-manager address is published on the site, the documentation or the explorer this pass", chain: robinhood-chain, source: docs, seen: 2026-09-02, exists_on_4663: null, explorer_source_verified: null }
    receipt_ids: [R-2]
metrics:
  - { kind: tvl, value: 125000, currency: USD, as_of: 2026-09-02, window: point, method: api.llama.fi/protocol/alpha, class: claim, receipt_ids: [R-2] }
  - { kind: volume_24h, value: "NULL — the aggregator returned no pair for this router, so 24-hour volume was not established", currency: USD, as_of: 2026-09-02, window: 24h, method: dexscreener, class: claim, receipt_ids: [R-2] }
  - { kind: market_cap, value: -4200, currency: USD, as_of: 2026-09-02, window: point, method: dexscreener, class: claim, receipt_ids: [R-2] }
reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T14:00:00Z, receipt_ids: [R-1], result: eth_getCode returned non-empty code. }
claims:
  - { id: CLM-1, field: deployment.address, value: "0x2222222222222222222222222222222222222222", class: verified, observed_at: 2026-09-02T14:00:00Z, receipt_ids: [R-1], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-2, field: product.mechanism, value: Constant-product swaps, class: inference, observed_at: 2026-09-02T14:00:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
conflicts: []
events:
  - { id: EVT-1, type: onchain, title: Router reproduced, summary: Router bytecode was reproduced on chain 4663., occurred_at: 2026-09-02T14:00:00Z, observed_at: 2026-09-02T14:00:00Z, affected_fields: [deployment.address], evidence_state: verified, impact: material, site_recommendation: both, channel_recommendation: pending, receipt_ids: [R-1] }
  - { id: EVT-2, type: ct, title: Internal note not meant for readers, summary: A reader-facing feed item was not recommended for this observation., occurred_at: 2026-09-02T14:00:00Z, observed_at: 2026-09-02T14:00:00Z, affected_fields: [], evidence_state: claim, impact: routine, site_recommendation: none, channel_recommendation: none, receipt_ids: [R-2] }
receipts:
  - { id: R-1, publisher: Blockscout, title: Alpha router address, url: "https://robinhoodchain.blockscout.com/address/0x2222222222222222222222222222222222222222", published_at: null, accessed_at: 2026-09-02T14:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: Contract bytecode exists. }
  - { id: R-2, publisher: Alpha, title: Alpha mechanism and activity, url: https://alpha.example/docs, published_at: null, accessed_at: 2026-09-02T14:00:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: Alpha uses constant-product pools. }
gaps:
  - { priority: P1, question: Is the router upgradeable?, checked: Explorer source, next: Read proxy slots and setters. }
---

## What it is

Alpha is a native automated market maker with a reproduced router.

Themes: amm, trading, native, routing, liquidity, extra-sixth

## Why it matters

The router is the main execution path for swaps.

## What could go wrong

The vault-manager address is unpublished, so liquidation and cap paths cannot be read on chain.

Constant-product behaviour rests on documentation rather than a reproduced pool read, per CLM-2.

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
