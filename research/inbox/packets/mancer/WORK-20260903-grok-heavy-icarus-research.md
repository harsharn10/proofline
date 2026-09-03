---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: mancer
name: Mancer
packet_tier: full
as_of: 2026-09-02T23:16:00Z
prior_packet: null
supersedes: null
owned_slugs: [mancer]
allowed_paths:
  - research/inbox/packets/mancer/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Mancer
  aliases: ["Chain Mancers"]
  symbols: [MANCER]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://mancer.xyz
  official_handle: "@MancerXYZ"
  repository: "NULL — Sherlock names blockhash-xyz/mancer-contracts; that repo is not public on github.com/blockhash-xyz this pass (org shows slonks-api and llm-nft only)"
  possible_matches:
    - slug: stonkbroker
      signals: [other]
      contrary_signals:
        - "MANCER token is a Clutch CollectionToken created by AMMFactoryV2.createMarket; MANCER/STONKBROKER is a live Uni v3 book"
        - "Mancer.xyz is a DEX aggregator/order layer at @MancerXYZ; Stonkbroker/Clutch is a separate protocol at stonkbrokers.cash / @ClutchMarkets"

classification:
  primary_leaf: trading/aggregator
  secondary_leaves: [nft-treasury/nft-fee-claim]
  mechanism_tags: [amm, execution, nft, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "MancerRouter 0xFBA80Ff9… and MancerOrders 0x22Db8B8a… have non-empty code and verified source on 4663 (1,343 and 79 txs). $MANCER token is a verified CollectionToken with a $561k MANCER/WETH book. Official account posted public open on 2026-08-31. Census beta is the gated-beta reading from 14–31 Aug. Router/Orders allowlist ownership and live venue list were not reproduced. [R-1] [R-2] [R-4] [R-8] [R-9] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-8, CLM-9], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-12, CLM-16, CLM-18], note: "" }

links:
  - { kind: site, url: "https://mancer.xyz", authenticity: confirmed }
  - { kind: app, url: "https://mancer.xyz", authenticity: confirmed }
  - { kind: docs, url: "https://mancer.xyz/docs", authenticity: confirmed }
  - { kind: whitepaper, url: "https://mancer.xyz/whitepaper.pdf", authenticity: confirmed }
  - { kind: x, url: "https://x.com/MancerXYZ", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/mancer", authenticity: confirmed }
  - { kind: other, url: "https://mancer.xyz/status", authenticity: confirmed }
  - { kind: other, url: "https://chainmancer.xyz/", authenticity: unconfirmed }

deployments:
  - label: $MANCER token (CollectionToken, Clutch NFT-Token AMM)
    role: token
    address:
      value: "0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-6, R-8]
  - label: MancerRouter (live; 1,343 txs this pass)
    role: router
    address:
      value: "0xFBA80Ff9C50462661f9D328E033e251251537FA5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-9]
  - label: MancerOrders (live; 79 txs this pass)
    role: other
    address:
      value: "0x22Db8B8a0D14916f7A84909a0d92DF9024B57f88"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-10]
  - label: CollectionTokenDeployer (token creator_address_hash)
    role: factory
    address:
      value: "0x662003BF6049e36b4E887D47b8df8718fFBbc6C2"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-7]
  - label: MancerRouter (earlier verified copy; 17 txs)
    role: router
    address:
      value: "0x67b7ec06828425BdDF02C52789B7939924608f79"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9]
  - label: MancerOrders (earlier verified copy; 1 tx)
    role: other
    address:
      value: "0xff86B3D4266c9374DA9D8A473E8533965ab6A0C3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10]

metrics:
  - { kind: holders, value: 9901, currency: null, as_of: 2026-09-02T23:13:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xc72F…246A holders_count", class: claim, receipt_ids: [R-5] }
  - { kind: tvl, value: 561003.72, currency: USD, as_of: 2026-09-02T23:13:00Z, window: point, method: "api.dexscreener.com/tokens/v1/robinhood batch MANCER/WETH 0x543127d6…cF54 liquidity.usd", class: claim, receipt_ids: [R-11] }
  - { kind: volume_24h, value: 1241223.49, currency: USD, as_of: 2026-09-02T23:13:00Z, window: 24h, method: "api.dexscreener.com/tokens/v1/robinhood batch MANCER/WETH volume.h24", class: claim, receipt_ids: [R-11] }
  - { kind: tvl, value: 445813.78, currency: USD, as_of: 2026-09-02T23:14:00Z, window: point, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xc72f…246a MANCER/STONKBROKER 0x9ada4A82…Ca79 liquidity.usd", class: claim, receipt_ids: [R-12] }
  - { kind: volume_24h, value: 556008.76, currency: USD, as_of: 2026-09-02T23:14:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1 MANCER/STONKBROKER volume.h24", class: claim, receipt_ids: [R-12] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:16:00Z, receipt_ids: [R-8], result: "rpc.mainnet.chain.robinhood.com at block 0x3280065 (52953189): eth_getCode non-empty on token 0xc72F…246A (len 6698), MancerRouter 0xFBA80Ff9…7FA5 (len 28470), MancerOrders 0x22Db8B8a…7f88 (len 23694). Token name() Mancer; symbol() MANCER; owner() reverted; totalSupply 2500000000000000000000000000" }
  - { id: REP-2, method: api, chain_id: 4663, checked_at: 2026-09-02T23:13:00Z, receipt_ids: [R-4, R-5, R-6, R-7], result: "Blockscout token 0xc72F…246A: is_contract true, is_verified true, name CollectionToken, file src/market/CollectionToken.sol, creator_address_hash 0x662003BF…c6C2 CollectionTokenDeployer, creation_transaction_hash 0x9a6d78c1…b340. Token API: symbol MANCER, holders_count 9901, total_supply 2.5e27" }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-02T23:14:00Z, receipt_ids: [R-7], result: "Creation tx 0x9a6d78c1… timestamp 2026-08-06T23:19:47Z block 29738819 status ok method createMarket; from 0x0Dc1Dd32…4550; to named AMMFactoryV2 0x432D20AA…7351" }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-02T23:15:00Z, receipt_ids: [R-9, R-10], result: "Live MancerRouter 0xFBA80Ff9… verified, 1343 txs, created 2026-08-20T23:35:44Z by 0x0Dc1Dd32…4550. Live MancerOrders 0x22Db8B8a… verified, 79 txs, same timestamp and deployer. Earlier copies 0x67b7ec06… (17 txs) and 0xff86B3D4… (1 tx)" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-02T23:13:00Z, receipt_ids: [R-11, R-12], result: "DexScreener tokens/v1 MANCER/WETH 0x543127d6…cF54 labels [v3] liq 561003.72 vol 1241223.49 websites mancer.xyz and mancer.xyz/whitepaper.pdf socials x.com/mancerxyz discord.gg/mancer. token-pairs also MANCER/STONKBROKER 0x9ada4A82…Ca79 liq 445813.78 vol 556008.76" }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-02T23:12:00Z, receipt_ids: [R-1, R-16], result: "mancer.xyz swap widget links /tokens/0xc72f232a6869e6cf34dc06129affd07f8a2a246a as Open MANCER market. @MancerXYZ 2026-08-31 posted Mancer is now open to the public with https://mancer.xyz" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DEX aggregator and non-custodial order layer: quote races eligible venues, winner or split executes in one tx; limit/stop/OCO/recurring orders are EIP-712 signatures; tokens stay in the wallet until fill", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://mancer.xyz", class: verified, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-1, R-16], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@MancerXYZ", class: verified, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-16, R-11], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A", class: verified, observed_at: 2026-09-02T23:13:00Z, receipt_ids: [R-1, R-4, R-8], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: "MANCER", class: verified, observed_at: 2026-09-02T23:13:00Z, receipt_ids: [R-5, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T23:15:00Z, receipt_ids: [R-8, R-9, R-16], reproduction_ids: [REP-1, REP-4, REP-6], supersedes: null }
  - { id: CLM-7, field: control.owner, value: "Token has no owner(); CollectionToken source: no owner, no admin, no mint after deployment", class: verified, observed_at: 2026-09-02T23:13:00Z, receipt_ids: [R-6, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0xFBA80Ff9C50462661f9D328E033e251251537FA5 MancerRouter", class: verified, observed_at: 2026-09-02T23:15:00Z, receipt_ids: [R-9], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "0x22Db8B8a0D14916f7A84909a0d92DF9024B57f88 MancerOrders", class: verified, observed_at: 2026-09-02T23:15:00Z, receipt_ids: [R-10], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Primary token book MANCER/WETH Uniswap v3 0x543127d6…cF54; secondary MANCER/STONKBROKER v3 0x9ada4A82…Ca79", class: verified, observed_at: 2026-09-02T23:14:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-11, field: relationship, value: "Token created 2026-08-06T23:19:47Z via createMarket on named AMMFactoryV2; creator_address_hash CollectionTokenDeployer 0x662003BF…c6C2; CollectionToken comment: Fixed-supply ERC20 backing a Clutch NFT-Token AMM market", class: verified, observed_at: 2026-09-02T23:14:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-12, field: relationship, value: "Same EOA 0x0Dc1Dd32…4550 sent createMarket for the token and deployed live MancerRouter/MancerOrders on 2026-08-20T23:35:44Z", class: verified, observed_at: 2026-09-02T23:15:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener MANCER/WETH v3 liquidity.usd 561003.72 volume.h24 1241223.49", class: verified, observed_at: 2026-09-02T23:13:00Z, receipt_ids: [R-11], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Blockscout holders_count 9901; total_supply 2,500,000,000 × 1e18", class: verified, observed_at: 2026-09-02T23:13:00Z, receipt_ids: [R-5, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: product.mechanism, value: "Docs fee schedule mirrors Jupiter by pair category; swaps 0–0.50%; orders add a per-fill base. Floorless recurring orders trust execution-time pricing", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "Sherlock collaborative audit 24–27 Aug 2026, report dated 29 Aug; repo blockhash-xyz/mancer-contracts commit 1968fd5f… then final 3a5374b4…; files MancerAllowanceTarget, MancerOrders, MancerRouter; 0 high, 3 medium, 11 low/info; issues not fixed and not acknowledged 0", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-13, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: activity.status, value: "Official account 2026-08-31: Mancer is now open to the public. Status page this pass: all systems operational including order execution", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-14, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: product.mechanism, value: "Mancer Shield announced as a shielded execution layer; no Shield contract located this pass", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: taxonomy.primary-leaf, value: "trading/aggregator", class: claim, observed_at: 2026-09-02T23:16:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.repository, value: "Sherlock names blockhash-xyz/mancer-contracts; github.com/blockhash-xyz public repos this pass are slonks-api and llm-nft only", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: identity.name, value: "Mancer", class: verified, observed_at: 2026-09-02T23:13:00Z, receipt_ids: [R-1, R-5, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: other, value: "chainmancer.xyz: 5,000 Chain Mancers; 3,750 earned by burning; 1,250 back the $MANCER LP on Anvil; allowlist full. NFT fee-claim not reproduced on 4663 this pass", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Official account quoted a focus on quotes and integrations"
    summary: "@MancerXYZ quoted @MichaelHirsch: improve quotes and integrate Mancer into more platforms."
    occurred_at: 2026-09-02T17:47:00Z
    observed_at: 2026-09-02T23:12:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-2
    type: ct
    title: "Sherlock posted a completed collaborative audit for Mancer"
    summary: "@sherlockdefi posted the Mancer audit is complete; CEX-grade orders, non-custodial fills."
    occurred_at: 2026-09-01T13:05:40Z
    observed_at: 2026-09-02T23:12:00Z
    affected_fields: [security.audit]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-3
    type: company
    title: "Official account thanked beta testers after public launch"
    summary: "@MancerXYZ posted thanks to everyone who helped test Mancer in beta."
    occurred_at: 2026-09-01T13:36:27Z
    observed_at: 2026-09-02T23:12:00Z
    affected_fields: [lifecycle]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-4
    type: company
    title: "Official account posted Mancer is open to the public"
    summary: "@MancerXYZ posted Mancer is now open to the public, linking https://mancer.xyz."
    occurred_at: 2026-08-31T17:39:48Z
    observed_at: 2026-09-02T23:12:00Z
    affected_fields: [lifecycle, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: onchain
    title: "Live MancerRouter shows 1,343 transactions this pass"
    summary: "MancerRouter 0xFBA80Ff9… verified on 4663 with 1,343 txs; Orders 0x22Db8B8a… 79 txs."
    occurred_at: 2026-09-02T23:15:00Z
    observed_at: 2026-09-02T23:15:00Z
    affected_fields: [deployment.address, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-10]
  - id: EVT-6
    type: company
    title: "Official account posted a router-and-order audit in progress"
    summary: "@MancerXYZ posted a formal audit of router and order contracts, public access to follow."
    occurred_at: 2026-08-25T13:50:57Z
    observed_at: 2026-09-02T23:12:00Z
    affected_fields: [security.audit]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-7
    type: onchain
    title: "$MANCER token created through Clutch createMarket"
    summary: "Tx 0x9a6d78c1… called createMarket; token 0xc72F…246A at block 29738819 on 6 Aug."
    occurred_at: 2026-08-06T23:19:47Z
    observed_at: 2026-09-02T23:14:00Z
    affected_fields: [deployment.address, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-8
    type: company
    title: "Status page listed quotes, swaps and orders operational"
    summary: "mancer.xyz/status: all systems operational, including order execution, this pass."
    occurred_at: 2026-09-02T23:14:00Z
    observed_at: 2026-09-02T23:14:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]

receipts:
  - { id: R-1, publisher: Mancer, title: "Official site / app", url: "https://mancer.xyz", published_at: null, accessed_at: 2026-09-02T23:12:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-21], excerpt: "Mancer | Trade like a wizard. Swap widget ETH → MANCER. View market → /tokens/0xc72f232a6869e6cf34dc06129affd07f8a2a246a Open MANCER market. Connect wallet." }
  - { id: R-2, publisher: Mancer, title: "Docs", url: "https://mancer.xyz/docs", published_at: null, accessed_at: 2026-09-02T23:12:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-19], excerpt: "Mancer is the dex aggregator and order layer of Robinhood Chain. Your money stays in your own wallet until the moment it trades. Every minimum you sign is enforced on-chain. Limit orders are signed messages. OCO filling either side voids the other in the Orders contract. Discord https://discord.gg/mancer." }
  - { id: R-3, publisher: Mancer / Michael Hirsch, title: "Whitepaper v1.0", url: "https://mancer.xyz/whitepaper.pdf", published_at: 2026-08-14T00:00:00Z, accessed_at: 2026-09-02T23:12:00Z, kind: whitepaper, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-19], excerpt: "Michael Hirsch — Blockhash. v1.0 — 2026-08-14. Mancer is the dex aggregator and order layer of Robinhood Chain. Two small contracts — a router and a scheduler — with no upgradeability. MancerRouter allowlists venue routers. MancerOrders is a scheduler on top of the router." }
  - { id: R-4, publisher: Blockscout, title: "Address 0xc72F…246A", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A", published_at: null, accessed_at: 2026-09-02T23:13:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4], excerpt: "hash 0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A; is_contract true; is_verified true; name CollectionToken; creator_address_hash 0x662003BF6049e36b4E887D47b8df8718fFBbc6C2; creation_transaction_hash 0x9a6d78c155fc550083f11b7e5368a6afbf7d62deb0ab012d4980bbe31b2eb340." }
  - { id: R-5, publisher: Blockscout, title: "Token 0xc72F…246A", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A", published_at: null, accessed_at: 2026-09-02T23:13:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-14, CLM-21], excerpt: "name Mancer; symbol MANCER; decimals 18; type ERC-20; holders_count 9901; total_supply 2500000000000000000000000000." }
  - { id: R-6, publisher: Blockscout, title: "CollectionToken source", url: "https://robinhoodchain.blockscout.com/address/0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A", published_at: null, accessed_at: 2026-09-02T23:13:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-11], excerpt: "Verified CollectionToken, compiler v0.8.26, file src/market/CollectionToken.sol. Comment: Fixed-supply ERC20 backing a Clutch NFT-Token AMM market. No owner, no admin, no mint after deployment." }
  - { id: R-7, publisher: Blockscout, title: "Creation tx 0x9a6d78c1…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x9a6d78c155fc550083f11b7e5368a6afbf7d62deb0ab012d4980bbe31b2eb340", published_at: 2026-08-06T23:19:47.000000Z, accessed_at: 2026-09-02T23:14:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, CLM-12, EVT-7], excerpt: "timestamp 2026-08-06T23:19:47Z; block_number 29738819; from 0x0Dc1Dd32B1300818C977Ce5A36A464A5c0c14550; to AMMFactoryV2 0x432D20AAe5605b1E94C114283d7155eBc6727351; method createMarket; status ok." }
  - { id: R-8, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / totalSupply", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T23:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-9, CLM-14, CLM-21], excerpt: "block 0x3280065 (52953189). Token 0xc72F…246A code_len 6698; name() Mancer; symbol() MANCER; owner() revert; totalSupply 2.5e27. Router 0xFBA80Ff9… code_len 28470. Orders 0x22Db8B8a… code_len 23694." }
  - { id: R-9, publisher: Blockscout, title: "MancerRouter 0xFBA80Ff9…", url: "https://robinhoodchain.blockscout.com/address/0xFBA80Ff9C50462661f9D328E033e251251537FA5", published_at: null, accessed_at: 2026-09-02T23:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-12, EVT-5], excerpt: "name MancerRouter; is_verified true; creator 0x0Dc1Dd32…4550; creation tx 0x0e12187f… 2026-08-20T23:35:44Z block 41819803. Counters transactions_count 1343. Earlier verified copy 0x67b7ec06… has 17 txs." }
  - { id: R-10, publisher: Blockscout, title: "MancerOrders 0x22Db8B8a…", url: "https://robinhoodchain.blockscout.com/address/0x22Db8B8a0D14916f7A84909a0d92DF9024B57f88", published_at: null, accessed_at: 2026-09-02T23:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, EVT-5], excerpt: "name MancerOrders; is_verified true; creator 0x0Dc1Dd32…4550; creation tx 0x6416aced… 2026-08-20T23:35:44Z. Counters transactions_count 79. Earlier copy 0xff86B3D4… has 1 tx." }
  - { id: R-11, publisher: DexScreener, title: "tokens/v1 MANCER batch", url: "https://api.dexscreener.com/tokens/v1/robinhood/0xc72f232a6869e6cf34dc06129affd07f8a2a246a", published_at: null, accessed_at: 2026-09-02T23:13:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-3, CLM-10, CLM-13], excerpt: "MANCER/WETH pair 0x543127d6a1932689fAaCc1Afad4A81146d9ccF54 labels [v3] liquidity.usd 561003.72 volume.h24 1241223.49. Websites https://mancer.xyz and https://mancer.xyz/whitepaper.pdf. Socials x.com/mancerxyz discord.gg/mancer." }
  - { id: R-12, publisher: DexScreener, title: "token-pairs MANCER", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xc72f232a6869e6cf34dc06129affd07f8a2a246a", published_at: null, accessed_at: 2026-09-02T23:14:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-10], excerpt: "MANCER/STONKBROKER 0x9ada4A825D224FBDaD2fac6C3e9bcbCC7169Ca79 v3 liq 445813.78 vol 556008.76. Also MANCER/ETH v4 34043.05/210460; MANCER/SPCX v3 33693.79/67319." }
  - { id: R-13, publisher: Sherlock, title: "Mancer collaborative audit report", url: "https://sherlock-files.ams3.digitaloceanspaces.com/reports/2026.08.29%20-%20Final%20-%20Mancer%20Collaborative%20Audit%20Report%201788037683.pdf", published_at: 2026-08-29T21:08:00Z, accessed_at: 2026-09-02T23:12:00Z, kind: audit, authority: independent, authenticity: unconfirmed, supports: [CLM-16, CLM-20], excerpt: "Date audited August 24-27 2026. Repository blockhash-xyz/mancer-contracts. Audited commit 1968fd5fd20583cabbce09c486f8f0206dfe3396. Files MancerAllowanceTarget.sol, MancerOrders.sol, MancerRouter.sol. High 0 / Medium 3 / Low/Info 11. Issues not fixed and not acknowledged 0." }
  - { id: R-14, publisher: Mancer, title: "Status page", url: "https://mancer.xyz/status", published_at: null, accessed_at: 2026-09-02T23:14:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-17, EVT-8], excerpt: "All systems operational. Trading, chain connection, market data, token analytics, order execution: Operational. Funds are never held by Mancer." }
  - { id: R-15, publisher: Mancer, title: "Better execution, everywhere", url: "https://x.com/MancerXYZ/status/2095206872965927002", published_at: 2026-09-02T17:47:00Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Better execution, everywhere. Quotes @MichaelHirsch 2095206793395728739: focus is improve quotes by finding gaps in route discovery and get Mancer integrated into as many trading platforms as possible." }
  - { id: R-16, publisher: Mancer, title: "Mancer is now open to the public", url: "https://x.com/MancerXYZ/status/2094480287938056251", published_at: 2026-08-31T17:39:48Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-6, CLM-17, EVT-4], excerpt: "Mancer is now open to the public. Trade like a wizard. https://mancer.xyz" }
  - { id: R-17, publisher: Sherlock, title: "Audit complete post", url: "https://x.com/sherlockdefi/status/2094773685689385174", published_at: 2026-09-01T13:05:40Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: independent, authenticity: unconfirmed, supports: [CLM-16, EVT-2], excerpt: "Sherlock has completed a collaborative audit for @mancerxyz - building the trading and execution layer for Robinhood Chain. CEX-grade order types - limit, stop, recurring, OCO - fully onchain, fully non-custodial." }
  - { id: R-18, publisher: Mancer, title: "Mancer Shield announcement (via prior X index)", url: "https://x.com/MancerXYZ", published_at: 2026-08-21T22:23:05Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-18], excerpt: "Bio: Trade like a wizard. Live on Robinhood. Prior 21 Aug posts indexed this pass include the Shield announcement as a next product, not a live contract address." }
  - { id: R-19, publisher: GitHub, title: "blockhash-xyz org", url: "https://github.com/blockhash-xyz", published_at: null, accessed_at: 2026-09-02T23:12:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-20], excerpt: "Public repositories this pass: slonks-api, llm-nft. mancer-contracts is not listed among public repos." }
  - { id: R-20, publisher: Chain Mancers, title: "chainmancer.xyz allowlist page", url: "https://chainmancer.xyz/", published_at: null, accessed_at: 2026-09-02T23:12:00Z, kind: official-site, authority: unknown, authenticity: unconfirmed, supports: [CLM-22], excerpt: "The allowlist is full. One of 5,000 Chain Mancers. 3,750 are earned by burning. The other 1,250 back the $MANCER liquidity pool on Anvil. Holding a Mancer earns a share of the trading that flows through it." }
  - { id: R-21, publisher: Mancer, title: "Thanks to beta testers", url: "https://x.com/MancerXYZ/status/2094781434498314599", published_at: 2026-09-01T13:36:27Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Thank you to everyone who helped test Mancer in beta. You were a huge part of the smooth launch today." }
  - { id: R-22, publisher: Mancer, title: "Audit in progress, public access to follow", url: "https://x.com/MancerXYZ/status/2092248367657079204", published_at: 2026-08-25T13:50:57Z, accessed_at: 2026-09-02T23:12:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "We are in the middle of a formal audit for our router and order contracts. The audit should complete by the end of the week and we will open Mancer to the public as soon as it's done." }

gaps:
  - { priority: P0, question: "Which MancerAllowanceTarget is the live Router isolated-approval target, and who can change the venue allowlist?", checked: "four verified MancerAllowanceTarget copies on Blockscout this pass all showed 0 txs; docs say users approve the Router's isolated allowance target; whitepaper says allowlisted venue routers, 2026-09-02", next: "read MancerRouter verified source for allowanceTarget() / allowlist owner and match a live approval" }
  - { priority: P0, question: "Does AMMFactoryV2 0x432D20AA… still exist on 4663?", checked: "createMarket tx names it AMMFactoryV2; Blockscout address page returned is_contract false this pass", next: "RPC eth_getCode on 0x432D20AAe5605b1E94C114283d7155eBc6727351" }
  - { priority: P1, question: "Can the Sherlock report commit 3a5374b4… be matched to the live Router/Orders bytecode?", checked: "report lists MancerRouter, MancerOrders, MancerAllowanceTarget; live Router created 2026-08-20 before the 24–27 Aug audit window", next: "compare runtime code hash of 0xFBA80Ff9… to the final commit artifacts" }
  - { priority: P1, question: "Where is the Chain Mancers NFT contract, and does it actually receive aggregator fees?", checked: "chainmancer.xyz describes 5,000 NFTs and a trading-share; no ERC-721 address reproduced, 2026-09-02", next: "Blockscout search ChainMancer / Collection NFT and fee-forward on MancerRouter" }
  - { priority: P2, question: "Is Mancer Shield deployed anywhere on 4663?", checked: "21 Aug announcement only; no Shield contract in Blockscout name search this pass", next: "search Shield / MancerShield on Blockscout after a contract announcement" }
---

# Mancer — research packet

## What it is

Mancer is Robinhood Chain's DEX aggregator and non-custodial order layer: a quote races eligible venues, the winning route (or a split) executes in one transaction, and signed limit, stop, OCO and recurring orders stay in the user's wallet until fill. A user connects a wallet at mancer.xyz. Blockhash / @MancerXYZ run the executor; the $MANCER token is a separate Clutch CollectionToken.

Themes: tooling, nft, memecoin

## Why it matters

Census still says beta from the gated 14–31 Aug window; the official account posted public open on 31 Aug and the live Router has 1,343 transactions. The token is a Clutch NFT-Token AMM mint, so Mancer-the-aggregator and $MANCER-the-token share a deployer without being the same product as Stonkbroker.

## What could go wrong

Signed cancellation is honored by Mancer's executor; a chain-enforced exit needs on-chain cancel or allowance revoke. Venue allowlist control was not reproduced. Four verified AllowanceTarget copies showed zero transactions this pass, so the live approval target is not identified. The Sherlock report exists; bytecode-to-commit matching was not done.

## Product and mechanics

Docs: every quote is a race across eligible routes; the engine may split across pools; ETH wraps inside the swap. Limit orders are free signatures. A stop is a triggered limit. OCO filling either side voids the other in the Orders contract. Recurring buys split one decision across a time grid. [claim R-2]

Live execution contracts on 4663 are MancerRouter `0xFBA80Ff9…7FA5` (1,343 txs) and MancerOrders `0x22Db8B8a…7f88` (79 txs), both deployed 2026-08-20T23:35:44Z by `0x0Dc1Dd32…4550`. Earlier verified copies exist with 17 and 1 txs. [verified R-9 R-10]

$MANCER at `0xc72F…246A` is a verified CollectionToken (fixed 2.5B supply, no owner). It was created 2026-08-06 via `createMarket` on a contract Blockscout named AMMFactoryV2. Primary book MANCER/WETH Uniswap v3 `0x543127d6…cF54`. [verified R-6 R-7 R-11]

## Control and security

Token source states no owner, no admin, no mint after deployment; `owner()` reverts. Router and Orders were deployed from the same EOA that created the token market. Whitepaper: two small contracts, no upgradeability, venue targets allowlisted. Sherlock collaborative audit 24–27 Aug, report 29 Aug, 0 high / 3 medium / 11 low; "not fixed and not acknowledged" 0. Live Router predates that audit window. AllowanceTarget live instance not identified (four verified copies, 0 txs). [verified R-6 R-8] [claim R-3 R-13]

## Team and provenance

Whitepaper author Michael Hirsch — Blockhash. @MichaelHirsch posts as building @MancerXYZ at @BlockhashXYZ. Official handle @MancerXYZ; site swap widget links the token CA. Sherlock names repository blockhash-xyz/mancer-contracts, which is not among the org's public repos this pass. [verified R-1 R-16] [claim R-3 R-19]

## Economics and activity

Blockscout holders_count 9901, total supply 2.5B × 1e18. DexScreener MANCER/WETH v3 liq $561,003.72 vol $1,241,223.49; MANCER/STONKBROKER v3 liq $445,813.78 vol $556,008.76 (2026-09-02T23:13–23:14Z). Status page: quotes, swaps and order execution operational. [verified R-5 R-11 R-12] [claim R-14]

## Material risks

- Signed cancel is executor-honored; chain exits are on-chain cancel or allowance revoke. [claim R-2]
- Venue allowlist owner and the live AllowanceTarget were not reproduced. [unknown]
- Live Router was deployed 20 Aug; Sherlock audit window is 24–27 Aug — bytecode match to the final commit is open. [claim R-13] [verified R-9]
- $MANCER is a Clutch CollectionToken, not a MancerRouter receipt; presenting Clutch NFT backing as aggregator TVL would mix products. [verified R-6]
- Mancer Shield is an announcement, not a deployment this pass. [claim R-18]

## Verification passes

- Receipts: site, docs, whitepaper, status, Blockscout, RPC, DexScreener, Sherlock report URL, and the cited X posts were opened on 2026-09-02. [verified R-1 R-8 R-9 R-16]
- Numbers: DexScreener figures are aggregator prints for MANCER pairs, not explorer pool inventory. [claim R-11]
- Adversarial: the strongest contrary reading is that Mancer is only a Clutch memecoin with a docs site. The verified Router/Orders, 1,343 router txs, public-open post, and swap widget CA argue the aggregator is a separate live product that happens to share a deployer with the token. [inference R-9 R-16]

## Operations log

- Reads: mancer.xyz, /docs, /whitepaper.pdf, /status, chainmancer.xyz, github.com/blockhash-xyz, Sherlock report URL, DexScreener tokens/v1 and token-pairs, Gecko trending, Blockscout search MancerRouter/Orders/AllowanceTarget, RPC at block 52953189.
- X Latest from:MancerXYZ, from:ponsdotfamily, from:TradePools, from:Hookrfun, from:longdotxyz, from:0xSammy, from:HoodInsider_, from:RHDaily__, from:GeckoTerminal, from:theunipcs.
- Failed: RPC 429 on an early totalSupply call (retried); Blockscout address page for AMMFactoryV2 0x432D20AA… returned is_contract false despite the createMarket tx `to` name; mancer-contracts repo 404.
- Time: collector pass 2026-09-02T23:12Z–23:16Z UTC.
