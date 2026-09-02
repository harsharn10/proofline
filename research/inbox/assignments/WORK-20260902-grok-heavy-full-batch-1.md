# Grok Heavy assignment: full packets, batch 1

Status: assigned. Open a draft PR from the branch named at the end of this file and keep it in draft.

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-heavy-full-batch-1
producer: grok-heavy
role: collector
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
as_of: 2026-09-02T00:57:08Z
packet_tier: full
owned_slugs: [mancer, statics-protocol, arrow, stonkbroker, index, vimen, up, fables]
allowed_paths:
  - research/inbox/packets/mancer/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/statics-protocol/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/arrow/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/stonkbroker/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/index/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/vimen/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/up/WORK-20260902-grok-heavy-full-batch-1.md
  - research/inbox/packets/fables/WORK-20260902-grok-heavy-full-batch-1.md
forbidden_paths:
  - content/**
  - docs/**
  - schema/**
  - scripts/**
  - site/**
  - ops/**
```

## Objective

Take eight names from stub to full coverage. Write one packet v2 per slug: YAML frontmatter that holds
every fact, a markdown body that holds the narrative. Reproduce every address on chain 4663 or say it
was not reproduced. Give every number a source, a window and an as-of time. Do not edit anything under
`content/`; the compiler writes the canonical files from your packet.

## Required reading

Read these at `base_sha` before writing:

1. This file. Its Output section is the packet v2 contract. Where `docs/research-system.md` §5 at that SHA still describes packet v1, this file wins.
2. `docs/research-system.md` §7: evidence strength by field, authenticity, conflicts.
3. `docs/taxonomy.md` §3 (leaf table) and §4 (mechanism tags). Use keys exactly as written there.
4. Per slug: the row in `content/census.yaml`, then `content/projects/<slug>.yaml`, `content/sources/<slug>.yaml`, `content/research/<slug>.md`, `content/feed/<slug>.yaml`. This is the prior state. Extend or correct it with new receipts; do not restate it.
5. `content/projects/pons.yaml` and `content/research/pons.md`: the only full record so far. Match its depth.

## The eight names

| Slug | Name | Lifecycle on file | Leaf | Start here |
|---|---|---|---|---|
| mancer | Mancer | beta | trading/aggregator | Router and order contracts not located. MANCER token address unreproduced. Audit "in progress" per the project. |
| statics-protocol | Statics Protocol | beta | rwa-products/redeemable-basket | Genesis token and Operator NFT reported live. Baskets not enabled. Timelock and roles docs exist; read them against chain. |
| arrow | Arrow Finance | mainnet | credit/cdp | aUSD CDP contracts, collateral list, oracle. Keep separate from Arrows (options) and ArrowPad. |
| stonkbroker | StonkBrokers | mainnet | nft-treasury/token-bound-nft | Collection, ERC-6551 registry and Anvil AMM addresses. Who can move assets out of a token-bound account. |
| index | The Index | mainnet | rwa-products/tax-distributor | Token, distributor and hook addresses. Who sets the 3% tax and the basket. |
| vimen | Vimen | mainnet | rwa-products/redeemable-basket | Basket contracts. Test the "no admin keys over funds" claim with owner() and the verified ABI. |
| up | up | mainnet | trading/amm-native | v2 and v3 contracts. Emissions and buyback control. DefiLlama up-v2 and up-v3 rows. |
| fables | Fables | mainnet | trading/amm-native | Hook, voter and PROLOGUE token. ve(3,3) admin powers. DefiLlama row. |

## Output

One file per slug at its allowed path. Frontmatter first, then the body. Ids are packet-local.

### Frontmatter: the dossier

```yaml
contract_version: proofline-research-v2
work_id: WORK-20260902-grok-heavy-full-batch-1
producer: grok-heavy
role: collector
base_sha: e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
slug: vimen
name: Vimen
packet_tier: full
as_of: 2026-09-02T14:00:00Z          # when you stopped collecting, UTC
prior_packet: content/projects/vimen.yaml@e0d2d2852dc6da7fd8293d4755109b9a0eef11bc
supersedes: null                      # update tier only
owned_slugs: [vimen]
allowed_paths: [research/inbox/packets/vimen/WORK-20260902-grok-heavy-full-batch-1.md]
identity:
  canonical_name: Vimen
  aliases: []
  symbols: []
  entity_kind: protocol               # protocol|application|token|infrastructure|tool|collection|unknown
  chain_scope: robinhood-native       # robinhood-native|multichain|cross-chain|unknown
  official_domain: https://vimen.org
  official_handle: "@vimenprotocol"
  repository: https://github.com/vimenprotocol/vimen
  possible_matches: []                # [{slug, signals: [shared-domain|shared-handle|shared-address|shared-deployer|shared-repository|same-normalized-name|ticker-only|other], note}]
classification:
  primary_leaf: rwa-products/redeemable-basket
  secondary_leaves: []
  mechanism_tags: [index, rwa, vault]
  ecosystem_role: subject             # subject|dependency|observe|graduation
  lifecycle: mainnet                  # mainnet|beta|testnet-only|announced|inactive|unknown
  coverage_recommendation: full       # seed|full
  evidence_state: partly-verified     # verified|partly-verified|claimed|conflicted|unverified
  rationale: "One sentence on the demonstrated mechanism, with receipt ids."
qualifying:                           # status: pass|fail|unknown; unknown carries no claim_ids
  deployed_on_chain: { status: pass, claim_ids: [CLM-3], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-6], note: "" }
links:                                # kind: site|app|docs|whitepaper|x|github|telegram|discord|other
  - { kind: site, url: https://vimen.org, authenticity: confirmed }   # confirmed|unconfirmed|conflicted
deployments:
  - label: Basket factory
    role: factory                     # token|factory|router|vault|proxy|implementation|admin|multisig|timelock|other
    address:                          # the six-field record, always all six
      value: "0x0000000000000000000000000000000000000000"
      chain: robinhood-chain
      source: docs                    # bio|docs|audit|explorer|third-party
      seen: 2026-09-02
      exists_on_4663: true            # null|true|false; only your own explorer or RPC check flips it
      explorer_source_verified: true  # null|true|false; Blockscout's flag, not the evidence class
    receipt_ids: [R-4, R-5]
metrics:
  - { kind: tvl, value: 9208, currency: USD, as_of: 2026-09-02, window: point, method: "api.llama.fi/protocol/vimen currentChainTvls", class: claim, receipt_ids: [R-9] }
reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T13:40:00Z, receipt_ids: [R-5], result: "eth_getCode non-empty; owner() returned 0x... at block 51700000" }
claims:                               # class: verified|claim|disputed|unknown
  - { id: CLM-1, field: product.mechanism, value: "In-kind index baskets with per-basket deposit caps", class: claim, observed_at: 2026-09-02T13:00:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: deployment.address, value: "0x...", class: verified, observed_at: 2026-09-02T13:40:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1], supersedes: null }
conflicts:
  - { id: CON-1, field: deployment.address, claim_ids: [CLM-3, CLM-11], status: open, resolution: null }
events:                               # type: company|ct|onchain|risk
  - { id: EVT-1, type: onchain, title: "Factory owner is a single key", summary: "owner() on the basket factory returns an externally owned account.", occurred_at: 2026-09-02T13:40:00Z, observed_at: 2026-09-02T13:40:00Z, affected_fields: [control.owner], evidence_state: verified, impact: material, site_recommendation: profile, channel_recommendation: none, receipt_ids: [R-5] }
receipts:                             # kind: official-site|docs|whitepaper|social|explorer|repository|audit|announcement|third-party-data|news|other
  - { id: R-5, publisher: Blockscout, title: "Address page 0x...", url: "https://robinhoodchain.blockscout.com/address/0x...", published_at: null, accessed_at: 2026-09-02T13:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3], excerpt: "Contract, verified source, name BasketFactory, created in tx 0x... block 51234567" }
gaps:
  - { priority: p0, question: "Who can change a basket's deposit cap?", checked: "verified ABI on Blockscout, docs, X account, 2026-09-02", next: "read the setter's access modifier in source" }
```

Claim `field` values: `identity.name|alias|symbol|handle|domain`, `taxonomy.primary-leaf|secondary-leaf|entity-kind|chain-scope|mechanism-tag`, `lifecycle`, `product.mechanism`, `deployment.address|role`, `control.owner|threshold|timelock|proxy|privileged-role`, `security.audit|bounty`, `team.identity|repository`, `economics.metric`, `activity.status`, `communications.status`, `relationship`, `other`. A `relationship` claim's value is `{ kind: depends-on, slug: <dependency card id> }`.

Cover all nine research areas: identity, product, deployment, control, security, team, economics, activity, communications. Each area gets at least one claim with that prefix, or one gap that says what was searched.

Required reads per address, each as a reproduction with method, block and time: `eth_getCode`; `owner()` selector `0x8da5cb5b`; when the owner is a contract, `getThreshold()` `0xe75235b8` and `getOwners()` `0xa0e67e2b`; EIP-1967 implementation slot `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc` and admin slot `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`. RPC: `https://rpc.mainnet.chain.robinhood.com`. Explorer: `https://robinhoodchain.blockscout.com`.

DefiLlama: `api.llama.fi/protocol/<llama-slug>` (chain-slice TVL), `api.llama.fi/summary/fees/<slug>?dataType=dailyFees`, `api.llama.fi/summary/dexs/<slug>?dataType=dailyVolume`. Record the window (24h, 30d, point) and the as-of. Never the all-chains number.

Audit search: the project's docs and site, its GitHub org, its X account, and the public report index of every auditor the project names. Write the exact scope in the gap when nothing is found.

### Body: the narrative

Ten headings, in this order, each present:
`## What it is`, `## Why it matters`, `## What could go wrong`, `## Product and mechanics`, `## Control and security`, `## Team and provenance`, `## Economics and activity`, `## Material risks`, `## Verification passes`, `## Operations log`.

The first paragraph of What it is becomes the site summary: one paragraph, mechanism first, no marketing. Every paragraph from Product and mechanics through Verification passes ends with one tag: `[verified R-4 R-5]`, `[claim R-2]`, `[inference R-1]`, `[disputed R-6 R-7]` or `[unknown]`. Material risks and Verification passes are bullet lists, one tag per bullet; the compiler turns them into findings. Write for a reader: no "the desk", no "Grok", no first person.

## Rules

- Evidence class. `verified` means you reproduced it yourself and the claim lists a `REP-` id. A docs page, a post or a DefiLlama row is `claim`. Two sources that disagree are `disputed` and get a `CON-` record. `unknown` carries no receipts.
- Mainnet bar. `lifecycle: mainnet` needs a deployment with `exists_on_4663: true` backed by an explorer receipt or an `explorer-rpc` reproduction, or official docs that publish a chain 4663 address. A post or an aggregator row alone is `announced`; a gated product with a live contract is `beta`.
- Proxies. A verified proxy shell says nothing about the implementation. Add `explorer_source_verification_scope: proxy-shell-only` and `implementation_source_verified` to the address record when you find one.
- No conduct words. Never `impersonator`, `drainer`, `scam`, `rug`, `farm`, `self-trend` or any verdict on intent. Use `handle-collision | unconfirmed-official | third-party-link | copypasta-pattern | wrong-chain | ca-collision`, each with a receipt.
- Field ownership. You do not write scores, `review.approver`, `coverage`, changelog text or a channel decision. `channel_recommendation` is `not-evaluated` or `pending`. `coverage_recommendation` is advice.
- Conflicts stay. When a new receipt contradicts a value in `content/`, write both as claims and join them with a `CON-` record, `status: open`. Do not pick a winner or drop the old one.
- Prior state. Cite anything already in `content/sources/<slug>.yaml` by adding its URL as a receipt. Do not renumber, copy or edit S-ids.
- Numbers. Value, unit, window, as-of, method, receipt. No number without all six.

## Completion and PR rules

Branch: `grok-heavy/20260902/WORK-20260902-grok-heavy-full-batch-1` from `base_sha`. One PR with all eight packets. If the run is split, one branch and PR per slug named `grok-heavy/20260902/WORK-20260902-grok-heavy-full-batch-1-<slug>`; the packet's `work_id` does not change.

PR title: `WORK-20260902-grok-heavy-full-batch-1: full packets for mancer, statics-protocol, arrow, stonkbroker, index, vimen, up, fables`.

PR body: the YAML header from the top of this file, then per slug: lifecycle recommended and the receipt that meets the bar; addresses reproduced, with verified-source and proxy counts; owner address and type; audit result and search scope; metrics with as-of; open conflicts; the three top gaps. End with the sentence "Only the eight allowed paths were added."

Do not merge, enable auto-merge, mark ready, or touch any other path. Do not create feed, changelog, review or Telegram artifacts. Commit trailer: `Producer: grok-heavy`. Corrections come back as review comments on this PR; answer them by amending the packets, never the canonical files.
