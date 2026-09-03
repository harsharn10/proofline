---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: ape-store
name: Ape Store
packet_tier: seed
as_of: 2026-09-03T05:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [ape-store]
allowed_paths:
  - research/inbox/packets/ape-store/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Ape Store
  aliases: [ApeStore, "Ape.Store"]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://ape.store
  official_handle: "@apedotstore"
  repository: "NULL — GitHub users Apestore and ApeDotStore exist with 0 public repos and empty blog; ape.store HTML and gitbook links page have no GitHub URL this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily"
        - "Ape Store is ape.store / @apedotstore with RH V30 router 0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is @hoodfunfamily"
        - "Ape Store is ape.store / @apedotstore"
        - "No shared domain, handle, or reproduced address"
    - slug: noxa
      signals: [other]
      contrary_signals:
        - "Census NOXA Fun is noxa.fun / @Noxa_Fi"
        - "Ape Store is ape.store / @apedotstore with V30 router 0x6e4910ea…87C1"
        - "No shared domain, handle, or reproduced address"
    - slug: foxpad
      signals: [other]
      contrary_signals:
        - "Census FoxPad is foxpad.app / @fox_onrh"
        - "Ape Store is ape.store / @apedotstore"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/bonding-curve
  secondary_leaves: [launch/uni-pool-launch]
  mechanism_tags: [launchpad, bonding-curve, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "ape.store/api/config lists chain 4663 Active true with ApeV30Routers 0x6e4910ea…87C1. RPC on 4663 returned 12528-byte code, nonce 4227, owner() 0x996C14b1…626c. Gitbook describes a bonding curve that lists on Uniswap near 69k market cap. @apedotstore posted on 2026-07-15 that the Robinhood path has no bonding curve and tokens go live on Uniswap. Emerson 30d 137 tokens $154k. Distinct from packed pads. Not a census row. [R-2] [R-4] [R-9] [R-14] [R-22]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-10], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-14], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-17, CLM-12], note: "" }

links:
  - { kind: site, url: "https://ape.store", authenticity: unconfirmed }
  - { kind: app, url: "https://ape.store", authenticity: unconfirmed }
  - { kind: docs, url: "https://ape-store.gitbook.io/ape.store-docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/apedotstore", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/apestorelounge", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/apedotstore", authenticity: unconfirmed }
  - { kind: other, url: "https://ape.store/api/config", authenticity: confirmed }
  - { kind: other, url: "https://ape-store.gitbook.io/ape.store-docs/links.md", authenticity: confirmed }

deployments:
  - label: Robinhood ApeV30 router
    role: factory
    address:
      value: "0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-14, R-15, R-25]
  - label: Robinhood ApeStoreRouterV3
    role: router
    address:
      value: "0x2211C504DBbD87D4401f3533933E46bDd0E3F32c"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-16, R-17]
  - label: Robinhood ApeProxy
    role: other
    address:
      value: "0x789b3D92147C26b701bD95614D5662dB9d4Cc1f6"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-16]
  - label: V30 router and proxy owner()
    role: admin
    address:
      value: "0x996C14b1D85841F789dfe32532Ba43B9E97c626c"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-14, R-16, R-18]

metrics: []

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:05:00Z, receipt_ids: [R-14, R-15, R-25, R-26], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32b2054 (53158469). V30 0x6e4910ea…87C1 eth_getCode 12528 bytes prefix 0x60806040526004361061013f575f3560e01c8063; nonce 4227; balance 0. owner() 0x996c14b1d85841f789dfe32532ba43b9e97c626c. ERC1967 implementation slot zero. Blockscout api/v2 is_contract true is_verified false name null creator 0x996C14b1…626c creation_tx 0x1a8c182f…cde8 timestamp 2026-07-08T23:59:45Z block 4770166. counters transactions_count 10113 token_transfers_count 383028." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:05:00Z, receipt_ids: [R-16, R-17], result: "ApeStoreRouterV3 0x2211C504…F32c eth_getCode 12580 bytes; nonce 2; owner() 0x996c14b1…626c; ERC1967 slot zero. Blockscout name ApeStoreRouterV3 is_verified true file_path remix/contracts/BaseContract/ApeStoreRouterV3.sol. ApeProxy 0x789b3D92…c1f6 eth_getCode 5998 bytes; nonce 1; owner() 0x996c14b1…626c; ERC1967 slot zero; Blockscout is_verified false." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:05:00Z, receipt_ids: [R-16, R-18], result: "Owner 0x996C14b1…626c eth_getCode 0x; nonce 31; balance 78009645817329062 wei. Blockscout is_contract false is_verified false name null." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-6, R-8], result: "Gitbook links.md names Platform https://ape.store/ and Twitter / X https://x.com/apedotstore. @apedotstore display name Ape.Store | Launchpad. ape.store HTML title ApeStore; og:url https://ape.store/; twitter:card summary_large_image; twitter:url https://ape.store/; no twitter:site this pass." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:11:00Z, receipt_ids: [R-2, R-19, R-20, R-21], result: "ape.store/api/config Version 1.0.9694.21031. chain ID 4663 Short robinhood Active true ApeProxy 0x789b3D92…c1f6 ApeRouters [0x2211C504…F32c] ApeV30Routers [0x6e4910ea…87C1] ApeV4Routers null. api/tokens?chain=4663 last nonempty page 174 returned 8 items protocol 30; pages 1-173 returned 24 when sampled (173x24+8=4160 if no holes). Llama protocol/ape.store chains [Ethereum, Base] currentChainTvls Ethereum 7689.85 Base 16292.77; no Robinhood Chain key. summary/fees chainBreakdown Base only total24h 85.09." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Gitbook: tokens are created with virtual liquidity (bonding curve). Initial market cap about 2800-3200 USD. Near 69000 USD market cap the token is listed on Uniswap with about 24000 USD liquidity; LP is burned and the contract is renounced in the same transaction. Trading fee 1 percent; listing fee 400 USD in ETH. Create-token page tells the user to have ETH on Base.", class: claim, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-3, R-4, R-5, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://ape.store", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@apedotstore", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-6, R-8, R-20], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "Ape Store", class: claim, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-3, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-2, R-14, R-15, R-25], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x2211C504DBbD87D4401f3533933E46bDd0E3F32c", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-2, R-16, R-17], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-2, R-14, R-15], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/bonding-curve, class: claim, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-4, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0x996C14b1D85841F789dfe32532Ba43B9E97c626c", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-14, R-16, R-18], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-10, field: deployment.address, value: "0x789b3D92147C26b701bD95614D5662dB9d4Cc1f6", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-2, R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "No timelock contract was named in gitbook, config, or explorer metadata this pass. owner() on the V30 router, V3 router, and ApeProxy is EOA 0x996C14b1…626c with no code.", class: claim, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-6, R-14, R-16, R-18], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "api/tokens?chain=4663 last nonempty page 174 had 8 items; pages 1-173 returned 24 when sampled (173x24+8=4160 if no holes). All sampled RH rows protocol 30 launchDate null. V30 nonce 4227. Latest listed token Dirbs 0x04bc4fb8…8d19 createDate 2026-09-02T19:08:38Z.", class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-19, R-26], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "HARVEST.md Emerson 30d: Ape Store 137 tokens 154000 USD DEX volume. Factory named 0x6e4910ea5a04376032f6564da9a9e4e88b7a87c1. Dune page returned Cloudflare 403 this pass.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-2, R-7, R-20], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "No audit report URL was located on ape.store, gitbook, the @apedotstore profile, or Llama audits this pass; Llama audits field 0", class: unknown, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: relationship, value: "Distinct from census Pons, hood.fun, NOXA Fun, and FoxPad. No shared domain, handle, or reproduced address. Config ApeV4Routers is null on Robinhood, unlike Uniswap V4 hook pads.", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-2, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: product.mechanism, value: "@apedotstore posted 2026-07-15: Our Robinhood launchpad has no bonding curve. Tokens go live directly on Uniswap. Conflicts with gitbook bonding-curve listing path, which still names Base in the create-token steps.", class: claim, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-9, R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@apedotstore.official", value: "Gitbook links.md names https://x.com/apedotstore and https://ape.store/. Display name Ape.Store | Launchpad. ape.store HTML has no twitter:site this pass. Bio names TG t.co/osA5Y2ZorD (t.me/apestorelounge), not the domain. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-6, R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-19, field: "account.@apedotstore.slug", value: ape-store, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@apedotstore.role", value: project, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: identity.repository, value: "NULL — api.github.com/users/Apestore and /users/ApeDotStore 200 with public_repos 0 and empty blog; no repository URL on ape.store or gitbook links this pass", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-6, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.alias, value: "ApeStore", class: claim, observed_at: 2026-09-03T05:03:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "@apedotstore posted 2026-08-31 V2 is coming, we will give you almost all the money. On 2026-08-23 the handle posted that after four weeks of building a Robinhood launchpad the product is ready to start the next chapter.", class: claim, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-11, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: "Llama protocol/ape.store currentChainTvls Ethereum 7689.85 USD Base 16292.77 USD at 2026-09-03T03:00:59Z. chains [Ethereum, Base]. No Robinhood Chain key. summary/fees total24h 85.09 total7d 1583.12 chainBreakdown Base only.", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-20, R-21], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-25, field: economics.metric, value: "HARVEST.md OKX lifetime: Ape Store 30500000 USD DEX volume. Dune OKX dashboard was not opened this pass.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: taxonomy.secondary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-9, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: control.privileged-role, value: "owner() on V30 router, ApeStoreRouterV3, and ApeProxy returns the same EOA 0x996C14b1…626c. Latest to-txs on the V30 router include method 0xa480ca79 collectFees(address).", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-14, R-16, R-26], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-1, CLM-17]
    material_effect: "Gitbook bonding-curve listing path versus the official handle stating the Robinhood launchpad has no bonding curve and tokens go live on Uniswap."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "V30 router still receiving collectFees txs on 2 Sep"
    summary: "Blockscout last to-tx 2026-09-02T20:08:09Z method 0xa480ca79 collectFees(address). Counters 10113 txs, nonce 4227."
    occurred_at: 2026-09-02T20:08:09Z
    observed_at: 2026-09-03T05:05:00Z
    affected_fields: [deployment.address, activity.status, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-26, R-14]
  - id: EVT-2
    type: company
    title: "@apedotstore: Base is a chain; Robinhood is a trading app"
    summary: "On 2026-09-01 the handle posted Base is a chain. Robinhood is a trading app with 27 million users."
    occurred_at: 2026-09-01T10:05:00Z
    observed_at: 2026-09-03T05:03:00Z
    affected_fields: [communications.status, taxonomy.chain-scope]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-3
    type: company
    title: "@apedotstore posts V2 is coming"
    summary: "On 2026-08-31 the handle posted V2 is coming and we will give you almost all the money."
    occurred_at: 2026-08-31T21:36:31Z
    observed_at: 2026-09-03T05:03:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-4
    type: company
    title: "@apedotstore posts next chapter after four weeks"
    summary: "On 2026-08-23 the handle posted that after four weeks building a Robinhood launchpad the next chapter starts soon."
    occurred_at: 2026-08-23T10:21:24Z
    observed_at: 2026-09-03T05:03:00Z
    affected_fields: [communications.status, lifecycle]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-5
    type: company
    title: "@apedotstore: Robinhood launchpad has no bonding curve"
    summary: "On 2026-07-15 the handle posted that the Robinhood launchpad has no bonding curve and tokens go live on Uniswap."
    occurred_at: 2026-07-15T17:04:00Z
    observed_at: 2026-09-03T05:03:00Z
    affected_fields: [product.mechanism, taxonomy.primary-leaf]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-6
    type: company
    title: "@apedotstore: launch a memecoin on Robinhood in 20 seconds"
    summary: "On 2026-07-14 the handle posted launching a memecoin on Robinhood in 20 seconds, with a video."
    occurred_at: 2026-07-14T12:04:40Z
    observed_at: 2026-09-03T05:03:00Z
    affected_fields: [lifecycle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-7
    type: onchain
    title: "V30 router created on chain 4663"
    summary: "Creation tx 0x1a8c182f…cde8 at 2026-07-08T23:59:45Z block 4770166 from EOA 0x996C14b1…626c deployed 0x6e4910ea…87C1."
    occurred_at: 2026-07-08T23:59:45Z
    observed_at: 2026-09-03T05:05:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-25, R-15]

receipts:
  - { id: R-1, publisher: Ape Store, title: "ape.store home", url: "https://ape.store/", published_at: null, accessed_at: 2026-09-03T05:02:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-2, CLM-4, CLM-16, CLM-18, CLM-21, CLM-22], excerpt: "title ApeStore - Launch and Trade Your Tokens with Ease and Low Fees. meta description: ApeStore is a revolutionary platform that allows users to launch their tokens for the price of gas fees and instantly trade them. list your tokens automatically on DEX when the market capitalization is reached. og:url https://ape.store/. twitter:url https://ape.store/. twitter:card summary_large_image. No twitter:site. Host apestoreweb.azurewebsites.net. script /api/config. Version 1.0.9694.21031." }
  - { id: R-2, publisher: Ape Store, title: "ape.store/api/config", url: "https://ape.store/api/config", published_at: null, accessed_at: 2026-09-03T05:11:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-10, CLM-14, CLM-16], excerpt: "ApeConfig chain ID 4663 Short robinhood Name RobinHood Active true ApeProxy 0x789b3D92147C26b701bD95614D5662dB9d4Cc1f6 ApeRouters [0x2211C504DBbD87D4401f3533933E46bDd0E3F32c] ApeV3Routers null ApeV30Routers [0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1] ApeV4Routers null ScannerUrl https://robinhoodchain.blockscout.com PublicRpc https://rpc.mainnet.chain.robinhood.com DexName Uniswap. Base ID 8453 also Active true. Version 1.0.9694.21031." }
  - { id: R-3, publisher: Ape Store, title: "Welcome to the Ape Store documentation", url: "https://ape-store.gitbook.io/ape.store-docs/welcome-to-the-ape-store-documentation.md", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4], excerpt: "Ape.store is a launchpad that allows its users to create tokens in seconds, without any required knowledge and without needing to provide liquidity. The created token (free of charge except for gas fees) becomes instantly tradable on the platform." }
  - { id: R-4, publisher: Ape Store, title: "How it works?", url: "https://ape-store.gitbook.io/ape.store-docs/how-it-works.md", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-17], excerpt: "Tokens are created with virtual liquidity (bonding curve), and it is the investors who contribute to the liquidity pool (LP) through their buys and sells. Initial Market Cap generally 2800-3200. When a market cap of approximately 69000 is reached the token is automatically listed on Uniswap with a liquidity of 24000 (12K in ETH + 12K in tokens). The LP is burned and the Smart Contract is renounced in the same transaction. Listing example is basescan.org." }
  - { id: R-5, publisher: Ape Store, title: "Service fees", url: "https://ape-store.gitbook.io/ape.store-docs/service-fees.md", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "Token Creation: No fees (excluding gas fees). Trading on Ape.Store: 1% fee on buys/sells. Listing on Uniswap: 400 USD in ETH (rebalanced into the bonding curve). Ape.Store does not take any tokens from the projects created at any point, neither during creation nor during listing." }
  - { id: R-6, publisher: Ape Store, title: "Links", url: "https://ape-store.gitbook.io/ape.store-docs/links.md", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-11, CLM-18, CLM-21], excerpt: "Platform https://ape.store/. Twitter / X https://x.com/apedotstore. Ape Store Lounge https://t.me/ApeStoreLounge. Telegram Main Group https://t.me/apedotstore. Telegram Support https://t.me/ApeStoreSupport. Warpcast https://warpcast.com/apedotstore. YouTube https://www.youtube.com/@apedotstore/. No GitHub URL on this page." }
  - { id: R-7, publisher: Ape Store, title: "How to create a token?", url: "https://ape-store.gitbook.io/ape.store-docs/how-to-create-a-token.md", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-17], excerpt: "Connect your wallet to Ape.Store and ensure you have your ETH on the BASE blockchain. Click Token Deployer, complete the information, Deploy, optionally buy, confirm. Support https://t.me/ApeStoreSupport. Does not take any tokens from the projects created." }
  - { id: R-8, publisher: "@apedotstore", title: "Ape.Store | Launchpad profile", url: "https://x.com/apedotstore", published_at: null, accessed_at: 2026-09-03T05:02:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-3, CLM-4, CLM-16, CLM-18, CLM-19, CLM-20], excerpt: "Display name Ape.Store | Launchpad. Handle @apedotstore. Bio: launch coins on Robinhood Chain for cents without the need to add liquidity. TG https://t.co/osA5Y2ZorD. Followers 13856. Blue verified. User id 1771606021582069760." }
  - { id: R-9, publisher: "@apedotstore", title: "Our Robinhood launchpad has no bonding curve", url: "https://x.com/apedotstore/status/2077439046218142167", published_at: 2026-07-15T17:04:00Z, accessed_at: 2026-09-03T05:03:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-17, CLM-26, EVT-5], excerpt: "Our Robinhood launchpad has no bonding curve. Tokens go live directly on Uniswap. Likes 108, reposts 8, replies 37, views 18497." }
  - { id: R-10, publisher: "@apedotstore", title: "launching a memecoin on Robinhood in 20 seconds", url: "https://x.com/apedotstore/status/2077001331152212426", published_at: 2026-07-14T12:04:40Z, accessed_at: 2026-09-03T05:03:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-6], excerpt: "launching a memecoin on Robinhood in 20 seconds. Video attached. Likes 275, quotes 57, replies 166, views 157715." }
  - { id: R-11, publisher: "@apedotstore", title: "V2 is coming", url: "https://x.com/apedotstore/status/2094539858219835682", published_at: 2026-08-31T21:36:31Z, accessed_at: 2026-09-03T05:03:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23, EVT-3], excerpt: "V2 is coming. we will give you almost all the money. Video attached. Likes 15, quotes 2, replies 9, views 1681." }
  - { id: R-12, publisher: "@apedotstore", title: "Base is a chain. Robinhood is a trading app", url: "https://x.com/apedotstore/status/2094728219442225537", published_at: 2026-09-01T10:05:00Z, accessed_at: 2026-09-03T05:03:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "Base is a chain. Robinhood is a trading app with 27 million users. Quote of @cousincrypt0. Likes 5, views 2444." }
  - { id: R-13, publisher: "@apedotstore", title: "next chapter after four weeks", url: "https://x.com/apedotstore/status/2091470856039870583", published_at: 2026-08-23T10:21:24Z, accessed_at: 2026-09-03T05:03:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23, EVT-4], excerpt: "after four intense, painful and extremely fun weeks of building a Robinhood launchpad our team have decided it's time for a change effective immediately, we're excited to announce that Ape Store, the second ever launchpad ever, is ready to start the next chapter in the upcoming days." }
  - { id: R-14, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() V30 0x6e4910ea…87C1", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-11, CLM-27, EVT-1], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32b2054 (53158469). 0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1 code 12528 B nonce 4227 bal 0. owner() 0x996c14b1d85841f789dfe32532ba43b9e97c626c. ERC1967 slot 0x0." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, EVT-7], excerpt: "hash 0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1. name null is_contract true is_verified false proxy_type null implementations []. creator_address_hash 0x996C14b1D85841F789dfe32532Ba43B9E97c626c. creation_transaction_hash 0x1a8c182fbd8de6f24899279b1e775d8626bdb963886255d6d2d3b8c136e2cde8." }
  - { id: R-16, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() V3 router, ApeProxy, owner", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-9, CLM-10, CLM-11, CLM-27], excerpt: "0x2211C504…F32c code 12580 B nonce 2 owner() 0x996c14b1…626c ERC1967 0x0. 0x789b3D92…c1f6 code 5998 B nonce 1 owner() 0x996c14b1…626c ERC1967 0x0. 0x996C14b1…626c code 0x nonce 31 bal 78009645817329062 wei." }
  - { id: R-17, publisher: Blockscout, title: "Address 0x2211C504DBbD87D4401f3533933E46bDd0E3F32c", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x2211C504DBbD87D4401f3533933E46bDd0E3F32c", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-26], excerpt: "name ApeStoreRouterV3 is_contract true is_verified true proxy_type null. creator_address_hash 0x996C14b1D85841F789dfe32532Ba43B9E97c626c. creation_transaction_hash 0xd8bbb3476cac396dc0e868fdfb76a0f92017d33f645d61e289bc5ce76d0ba4de. smart-contracts name ApeStoreRouterV3 compiler v0.8.26 file_path remix/contracts/BaseContract/ApeStoreRouterV3.sol. Source imports INonfungiblePositionManager, IUniswapV3Factory, ILockerFactory." }
  - { id: R-18, publisher: Blockscout, title: "Address 0x996C14b1D85841F789dfe32532Ba43B9E97c626c", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x996C14b1D85841F789dfe32532Ba43B9E97c626c", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11], excerpt: "hash 0x996C14b1D85841F789dfe32532Ba43B9E97c626c. is_contract false is_verified false name null. coin_balance 78009645817329062. creation_transaction_hash null." }
  - { id: R-19, publisher: Ape Store, title: "api/tokens chain=4663", url: "https://ape.store/api/tokens?chain=4663", published_at: null, accessed_at: 2026-09-03T05:11:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-12], excerpt: "JSON keys items, pageCount. Default page items 24 chain 4663 protocol 30. First item id 186841 createDate 2026-07-08T22:43:46Z address 0x02d13b72c7a5f1c3a0f759ab656a5018701ff307 name test launchDate null. Page 174 n 8 last item id 228786 createDate 2026-09-02T19:08:38Z name Dirbs address 0x04bc4fb853d01c34f91982981c6e9f60792d8d19 protocol 30 launchDate null. PageCount field 48000 is not the nonempty page count." }
  - { id: R-20, publisher: DefiLlama, title: "protocol/ape.store", url: "https://api.llama.fi/protocol/ape.store", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-3, CLM-14, CLM-24], excerpt: "id 4584 name Ape.Store url https://ape.store/ category Launchpad chains [Ethereum, Base] twitter apedotstore audits 0 github null currentChainTvls Ethereum 7689.85137 Base 16292.77434. latest tvl date 1788404459 (2026-09-03T03:00:59Z) totalLiquidityUSD 23982. No Robinhood Chain key." }
  - { id: R-21, publisher: DefiLlama, title: "summary/fees/ape.store", url: "https://api.llama.fi/summary/fees/ape.store", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-24], excerpt: "displayName Ape.Store. chains [Base]. total24h 85.09 total7d 1583.12 total30d 31496.25. chainBreakdown Base total24h 85.09 total7d 1583.12. methodology Fees: Total fees paid by users for creating and trading tokens. No Robinhood Chain breakdown." }
  - { id: R-22, publisher: Dune 0x_emerson, title: "Robinhood memecoin launchpads 30d (HARVEST.md)", url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13, CLM-25], excerpt: "HARVEST.md Emerson 30d: Ape Store 137 tokens 154000 USD DEX volume factory 0x6e4910ea5a04376032f6564da9a9e4e88b7a87c1. HARVEST.md OKX lifetime 30500000 USD. Direct GET of the Dune URL this pass returned Cloudflare 403." }
  - { id: R-23, publisher: GitHub, title: "users/Apestore and users/ApeDotStore", url: "https://api.github.com/users/Apestore", published_at: null, accessed_at: 2026-09-03T05:09:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-21], excerpt: "GET /users/Apestore 200 login Apestore html_url https://github.com/Apestore public_repos 0 blog empty created_at 2023-09-29. GET /users/ApeDotStore 200 login ApeDotStore html_url https://github.com/ApeDotStore public_repos 0 blog empty created_at 2024-09-21. Neither blog field names ape.store." }
  - { id: R-24, publisher: "@apedotstore", title: "Bio TG t.co expands to t.me/apestorelounge", url: "https://t.co/osA5Y2ZorD", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [], excerpt: "t.co/osA5Y2ZorD HTML title http://t.me/apestorelounge and location.replace to t.me/apestorelounge. Matches gitbook Lounge link." }
  - { id: R-25, publisher: Blockscout, title: "Creation tx 0x1a8c182f…cde8", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x1a8c182fbd8de6f24899279b1e775d8626bdb963886255d6d2d3b8c136e2cde8", published_at: 2026-07-08T23:59:45Z, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, EVT-7], excerpt: "hash 0x1a8c182fbd8de6f24899279b1e775d8626bdb963886255d6d2d3b8c136e2cde8 timestamp 2026-07-08T23:59:45.000000Z block_number 4770166 status ok from 0x996C14b1D85841F789dfe32532Ba43B9E97c626c to null created_contract 0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1." }
  - { id: R-26, publisher: Blockscout, title: "V30 counters and latest to-txs", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x6e4910ea5A04376032F6564da9a9E4E88B7a87C1/counters", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-27, EVT-1], excerpt: "counters transactions_count 10113 token_transfers_count 383028 gas_usage_count 26920535599. Latest to-tx 0x311d7d5e938291c886acadc93dffd7ad5d665a84f9fb073224c0e26c231c983c timestamp 2026-09-02T20:08:09Z method 0xa480ca79 status ok. 4byte.directory 0xa480ca79 collectFees(address)." }
  - { id: R-27, publisher: Ape Store, title: "FAQ", url: "https://ape-store.gitbook.io/ape.store-docs/faq.md", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [], excerpt: "At token creation the market cap target for listing is 69000. ETH price moves adjust that target. Amount of ETH needed to release a token is about 12000 USD in ETH. FAQ names Basescan for contract-page socials, not Robinhood explorer." }

gaps:
  - { priority: P0, question: "Is V30 router 0x6e4910ea…87C1 a bonding-curve factory or a Uniswap-direct launcher, and can its source be verified?", checked: "Blockscout is_verified false name null; ERC1967 slot zero; config labels it ApeV30Routers; gitbook bonding curve vs @apedotstore 15 Jul no bonding curve on Robinhood; sample RH tokens protocol 30 launchDate null mcap about 2k-6k, 2026-09-03", next: "decode V30 ABI or wait for source; sample a recent token's creator_address_hash versus 0x6e4910ea and 0x2211C504" }
  - { priority: P0, question: "Does owner 0x996C14b1…626c sit behind a Safe, timelock, or other contract on any chain?", checked: "owner() on V30, V3 router, and ApeProxy is this address; eth_getCode 0x; Blockscout is_contract false; no timelock named in gitbook, 2026-09-03", next: "do not treat the EOA as a timelock; record any Safe on another chain if one appears" }
  - { priority: P1, question: "Is there an audit report whose scope matches 0x6e4910ea…87C1 or ApeStoreRouterV3 0x2211C504…F32c?", checked: "gitbook, site HTML, @apedotstore, Llama audits 0, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P1, question: "Does ape.store HTML name @apedotstore, or does the handle stay gitbook-only?", checked: "gitbook links.md names both; site has twitter:url https://ape.store/ and no twitter:site; bio TG expands to t.me/apestorelounge, 2026-09-03", next: "keep flag unconfirmed-official until the site names the handle" }
  - { priority: P1, question: "What is the exact RH lifetime token count versus Emerson 30d 137?", checked: "api/tokens pageCount 48000 is not a real page count; last nonempty page 174 with 8 items; 173x24+8=4160 if contiguous; V30 nonce 4227; Emerson 137 is 30d, 2026-09-03", next: "walk every nonempty page or find a count endpoint; do not treat 48000 as the inventory" }
  - { priority: P2, question: "Will Llama add a Robinhood Chain slice for ape.store, and is Base/ETH TVL mixable with RH activity?", checked: "protocol/ape.store chains [Ethereum, Base] only; fees chainBreakdown Base only; adapter path 404 this pass, 2026-09-03", next: "do not use Llama TVL or fees as a Robinhood Chain figure" }
---

# Ape Store — research packet

## What it is

Ape Store is a token launchpad on Robinhood Chain. A creator deploys from ape.store without seeding liquidity. Gitbook describes a bonding curve that lists on Uniswap near a 69k market cap; the official handle posted that the Robinhood path has no bonding curve and tokens go live on Uniswap. The live V30 router is 0x6e4910ea…87C1. The handle is @apedotstore.

Themes: launchpad, memecoin

## Why it matters

The pad is live on chain 4663 with a published factory in official config, not a census row. Emerson 30d lists 137 tokens and about 154k USD DEX volume, smaller than packed pads on the same board. Gitbook still documents a Base bonding-curve listing path while the handle describes a Robinhood Uniswap-direct path. Distinct from Pons, hood.fun and Coinbarrel. [claim R-2 R-4 R-9 R-22]

## What could go wrong

owner() on the V30 router, the verified V3 router, and ApeProxy is one externally owned account with no code. The V30 router that config uses for Robinhood is not source-verified. Gitbook and the official handle disagree on whether Robinhood launches use a bonding curve. Llama TVL and fees are Base and Ethereum only. [verified R-14 R-16] [claim R-4 R-9 R-20]

## Product and mechanics

Gitbook: a launch uses virtual liquidity. Buys and sells move a bonding curve. Near 69k market cap the token lists on Uniswap, LP is burned, and the contract is renounced in the listing transaction. Create is gas-only; trading fee 1 percent; listing fee 400 USD in ETH. The create-token page still says to hold ETH on Base. [claim R-4 R-5 R-7]

Official config marks Robinhood Active with ApeV30Routers 0x6e4910ea…87C1, ApeRouters 0x2211C504…F32c (Blockscout name ApeStoreRouterV3, verified, Uniswap V3 locker imports), and ApeProxy 0x789b3D92…c1f6. ApeV4Routers is null. @apedotstore posted that the Robinhood launchpad has no bonding curve and tokens go live on Uniswap. api/tokens?chain=4663 rows this pass are protocol 30 with launchDate null and market caps around 2k to 6k USD. [verified R-2 R-17] [claim R-9 R-19]

## Control and security

owner() on the V30 router, ApeStoreRouterV3, and ApeProxy returns 0x996C14b1D85841F789dfe32532Ba43B9E97c626c. That address has no code. The V30 router is not a verified proxy; ERC1967 slot is zero. ApeStoreRouterV3 is source-verified. Latest V30 to-txs include collectFees(address). No timelock address was located. No audit report URL. [verified R-14 R-16 R-17] [unknown]

## Team and provenance

Gitbook links.md names ape.store and @apedotstore. Display name Ape.Store | Launchpad. Site HTML has no twitter:site. Bio TG expands to t.me/apestorelounge. GitHub users Apestore and ApeDotStore have zero public repos and empty blog fields. Flag unconfirmed-official. [claim R-1 R-6 R-8 R-23 R-24]

## Economics and activity

Llama currentChainTvls Ethereum 7689.85 USD, Base 16292.77 USD at 2026-09-03T03:00:59Z. Fees 24h 85.09 and 7d 1583.12 are Base only. Those figures are not a Robinhood Chain slice. HARVEST Emerson 30d: 137 tokens, 154k USD DEX volume. HARVEST OKX lifetime: 30.5M USD. Official tokens API last nonempty page 174; 173x24+8 = 4160 if contiguous. V30 nonce 4227. [claim R-19 R-20 R-21 R-22] [verified R-14]

## Material risks

- V30 router source is not verified on Blockscout this pass. [verified R-15]
- owner is one EOA with no code on the three RH contracts in config. [verified R-16 R-18]
- Gitbook bonding-curve listing path conflicts with the official Robinhood no-bonding-curve post. [claim R-4 R-9]
- Llama has no Robinhood Chain TVL or fee slice. [claim R-20 R-21]
- No audit report URL. [unknown]

## Verification passes

- Receipts: ape.store, /api/config, gitbook markdown pages, X profile and posts, t.co expand, Llama protocol/fees, GitHub users, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. Dune returned Cloudflare 403; Emerson figures are from HARVEST.md via the discovery packet. [verified R-1 R-2 R-14 R-20]
- Numbers: Llama TVL and fees are Ethereum/Base, not Robinhood Chain. Bytecode lengths, nonces, and owner() are chain 4663 RPC. Token page math is the official tokens API with chain=4663. Emerson 137 is a 30d third-party window. [verified R-14 R-19] [claim R-20 R-22]
- Adversarial: strongest contrary reading is that 0x6e4910ea…87C1 is a leftover V3.0 router and new launches use a different factory, or that Robinhood already abandoned the bonding curve as the 15 Jul post states. Config still sets ApeV30Routers to this address with Active true; RPC shows 12528-byte code and nonce 4227; tokens API RH rows are protocol 30. Packed pads Pons, hood.fun and Coinbarrel are different products. [inference R-2 R-9 R-14]

## Operations log

- Census.yaml has no ape-store row; no content/projects/ape-store.yaml. Discovery inventory names the slug with factory 0x6e4910ea…87C1 and Emerson 137.
- GET research/inbox/packets/ape-store/WORK-20260903-grok-heavy-icarus-research.md on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404 twice before this write.
- X Latest from:apedotstore: profile, 14 Jul 20-second launch, 15 Jul no bonding curve, 23 Aug next chapter, 31 Aug V2, 1 Sep Base vs Robinhood, 2 Sep latest replies. Bio TG expanded via t.co to t.me/apestorelounge.
- ape.store home, /api/config, /api/tokens?chain=4663 pages 1-174, gitbook llms.txt plus welcome, how-it-works, create-token, fees, links, FAQ.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), ERC1967 slot on 0x6e4910ea…87C1, 0x2211C504…F32c, 0x789b3D92…c1f6, 0x996C14b1…626c.
- Blockscout api/v2 for those addresses, factory counters, factory to-txs, creation tx, ApeStoreRouterV3 source header. Later smart-contract fetches hit Cloudflare.
- api.llama.fi/protocol/ape.store and summary/fees/ape.store. Adapter projects/apestore/index.js 404. CoinGecko /coins/ape-store 404; search 200 with empty coins, unused.
- api.github.com/users/Apestore and /users/ApeDotStore 200, 0 repos. Dune Emerson dashboard Cloudflare 403.
- DexScreener token-pairs for sample token 0x02d13b72…f307 returned [].
