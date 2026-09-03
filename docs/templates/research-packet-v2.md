---
# Packet v2 (docs/research-system.md §5). The frontmatter is the machine-validated dossier
# (schema/packet.schema.json, checked by `npm run validate`); the body below it is the narrative.
# This file is a worked full-tier example: copy it, replace every value, keep every required key.
# From 2026-09-03, seed and full packets require a What it is paragraph, a Themes line and URL-backed events.
# A required field you attempted and could not establish is the string "NULL — <reason>".
# Ids are packet-local, start at 1 and are never reused.
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-heavy-example-protocol
producer: grok-heavy                  # grok-heavy | grok-bot | supergrok | codex | claude | <github id>
role: collector                       # collector | verifier | compiler
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
slug: example-protocol
name: Example Protocol
packet_tier: full                     # seed | full | update
as_of: 2026-09-03T14:00:00Z           # when collecting stopped, UTC
prior_packet: null                    # path@sha of the record this run read, or null
supersedes: null                      # update tier only: the prior work id
owned_slugs: [example-protocol]
allowed_paths:
  - research/inbox/packets/example-protocol/WORK-20260902-grok-heavy-example-protocol.md

identity:
  canonical_name: Example Protocol
  aliases: [ExampleFi]
  symbols: [EXMP]
  entity_kind: protocol               # protocol|application|token|infrastructure|tool|collection|unknown
  chain_scope: robinhood-native       # robinhood-native|multichain|cross-chain|unknown
  official_domain: https://example-protocol.org
  official_handle: "@exampleprotocol"
  repository: https://github.com/example-protocol/core
  possible_matches: []                # [{slug, signals[], contrary_signals[]}] — record a canonical
                                      # collision even when you reject it

classification:
  primary_leaf: yield/savings-vault   # a key of schema/taxonomy.json
  secondary_leaves: []
  mechanism_tags: [vault]
  ecosystem_role: subject             # subject|dependency|observe|graduation
  lifecycle: mainnet                  # mainnet|beta|testnet-only|announced|inactive|unknown
  coverage_recommendation: full       # candidate|seed|full
  evidence_state: partly-verified     # verified|partly-verified|claimed|conflicted|unverified
  rationale: "One deployed vault reproduced on chain 4663; the fee split is documented but not reproduced [R-1] [R-2]."

qualifying:                           # status: pass|fail|unknown; a pass cites claims, anything else explains
  deployed_on_chain: { status: pass, claim_ids: [CLM-2], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1], note: "" }
  citable:           { status: pass, claim_ids: [CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-4], note: "" }

links:                                # card kinds: site|docs|x|telegram|github|explorer|dexscreener
  - { kind: site, url: "https://example-protocol.org", authenticity: confirmed }
  - { kind: docs, url: "https://docs.example-protocol.org", authenticity: confirmed }

deployments:
  - label: Savings vault
    role: vault                       # token|factory|router|vault|proxy|implementation|admin|multisig|timelock|other
    address:                          # the six-field record, always all six
      value: "0x1111111111111111111111111111111111111111"
      chain: robinhood-chain
      source: explorer                # bio|docs|audit|explorer|third-party
      seen: 2026-09-02
      exists_on_4663: true            # null|true|false; only your own explorer or RPC check flips it
      explorer_source_verified: true  # null|true|false; the explorer's flag, not the evidence class
    receipt_ids: [R-2]

metrics:
  - { kind: tvl, value: 128400, currency: USD, as_of: 2026-09-02, window: point, method: "api.llama.fi/protocol/example-protocol currentChainTvls", class: claim, receipt_ids: [R-3] }

reproductions:                        # method: explorer-rpc|explorer-ui|official-crosslink|repository-crosslink|document-scope|api|other
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T13:40:00Z, receipt_ids: [R-2], result: "eth_getCode non-empty; owner() returned 0x2222… at block 51700000" }

claims:                               # class: verified|claim|inference|disputed|unknown
  - { id: CLM-1, field: product.mechanism, value: "Deposits are pooled into one ERC-4626 vault; withdrawal is open", class: claim, observed_at: 2026-09-02T13:00:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: deployment.address, value: "0x1111111111111111111111111111111111111111", class: verified, observed_at: 2026-09-02T13:40:00Z, receipt_ids: [R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-3, field: identity.domain, value: "https://example-protocol.org", class: claim, observed_at: 2026-09-02T13:00:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: control.owner, value: "0x2222222222222222222222222222222222222222", class: verified, observed_at: 2026-09-02T13:40:00Z, receipt_ids: [R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T13:40:00Z, receipt_ids: [R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: security.audit, value: "No audit report was located in this review", class: unknown, observed_at: 2026-09-02T13:20:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }

conflicts: []                         # [{id: CON-n, field, claim_ids[], material_effect, status, resolution}]
                                      # a collector and a verifier leave resolution null

events:                               # type: company|ct|onchain|risk
  - id: EVT-1
    type: onchain
    title: "Vault owner is a single externally owned account"
    summary: "owner() on the savings vault returns an address with no code."
    account: null                     # @handle for a post; null for an on-chain event
    occurred_at: 2026-09-02T13:40:00Z
    observed_at: 2026-09-02T13:40:00Z
    affected_fields: [control.owner]
    evidence_state: verified          # verified|claim|disputed|unknown
    impact: material                  # routine|material|urgent
    site_recommendation: profile      # feed|profile|both|none
    channel_recommendation: none      # none|review
    receipt_ids: [R-2]

receipts:                             # kind: official-site|docs|whitepaper|social|explorer|repository|audit|announcement|third-party-data|news|other
  - { id: R-1, publisher: Example Protocol, title: "Vault documentation", url: "https://docs.example-protocol.org/vault", published_at: 2026-08-20T00:00:00Z, accessed_at: 2026-09-02T13:00:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3], excerpt: "Deposits are pooled into a single ERC-4626 vault. Withdrawals are open at any block." }
  - { id: R-2, publisher: Blockscout, title: "Address page 0x1111…", url: "https://robinhoodchain.blockscout.com/address/0x1111111111111111111111111111111111111111", published_at: null, accessed_at: 2026-09-02T13:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-5, EVT-1], excerpt: "Contract, verified source, name ExampleVault, created in tx 0x3333… block 51234567; owner 0x2222…" }
  - { id: R-3, publisher: DefiLlama, title: "Example Protocol chain slice", url: "https://api.llama.fi/protocol/example-protocol", published_at: null, accessed_at: 2026-09-02T13:50:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "currentChainTvls.RobinhoodChain 128400" }

gaps:                                 # priority: P0 | P1 | P2
  - { priority: P0, question: "Can the owner change the withdrawal path without a timelock?", checked: "verified source on the explorer, docs, X account, 2026-09-02", next: "read the setter's access modifier in the verified source" }
  - { priority: P1, question: "Is there an audit?", checked: "docs, site, GitHub org, X account and the report index of every auditor named, 2026-09-02", next: "ask the project in public and record the answer as a claim" }
---

# Example Protocol — research packet

Ten headings, in this order, all present for tier `full`. A `seed` packet may leave the body out; an
`update` packet keeps only Verification passes and Operations log. The first paragraph of What it is
becomes the site summary: one paragraph, mechanism first, no marketing. Every paragraph from Product
and mechanics through Verification passes ends with one tag: `[verified R-2]`, `[claim R-1]`,
`[inference R-1]`, `[disputed R-6 R-7]` or `[unknown]`. Write for a reader: no first person, no
verdicts about a person, team or account.

## What it is

Example Protocol is a savings vault on Robinhood Chain: deposits are pooled into one ERC-4626 vault
and withdrawal is open at any block, with the yield source named in the documentation but not
reproduced here.

Themes: savings-vault, yield, erc-4626

TL;DR: A savings vault that pools USDG deposits into one ERC-4626 vault with open withdrawal, live since July, run by a single key [CLM-1 CLM-4].

## Why it matters

Three bullets, one line each, ending with the claim ids that back them: the thesis, the traction hook, the next catalyst.

- Thesis: the first open-withdrawal savings vault on the chain, so idle USDG can earn without a lockup [CLM-1].
- Traction: $128K deposited in the first month, 40 depositors [CLM-5].
- Catalyst: the documented yield source goes live in Q4 per the docs; not yet reproduced [CLM-6].

## What could go wrong

Up to three bullets, plain words, mechanism not intent, each with the claim ids that back it.

- A single key owns the vault and can change the yield source with no delay [CLM-4].
- No audit matched the deployed code [CLM-7].

## Product and mechanics

What the product does, how the mechanism works, and what the contracts do on each user action. One
paragraph per mechanism, each tagged. [claim R-1]

## Control and security

Who holds which power over the deployment: owner, threshold, timelock, upgrade path, and the audit
scope with the exact search that found or failed to find it. [verified R-2]

## Team and provenance

Named accounts, repository ownership and how identity was cross-linked. Say what is unattributable.
[unknown]

## Economics and activity

Every number with its value, unit, window, as-of, method and receipt. Never an all-chains figure for a
chain-slice claim. [claim R-3]

## Material risks

- The vault owner is one externally owned account with no timelock on the withdrawal path. [verified R-2]
- No audit report was located in this review. [unknown]

## Verification passes

- Receipts: every URL above was opened on 2026-09-02 and its excerpt copied from the page. [verified R-1 R-2 R-3]
- Numbers: the TVL figure is the chain slice, not the all-chains total. [claim R-3]
- Adversarial: the strongest contrary reading is that the vault is a fork with the documentation of a
  different deployment; the verified source name and the constructor transaction argue against it.
  [inference R-2]

## Operations log

Reads attempted, reads that failed, rate limits hit, tools used and time spent. One line each.
