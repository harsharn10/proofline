---
# Packet v2 (docs/research-system.md §5). Collector full-tier for Icarus.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: mancer
name: Mancer
packet_tier: full
as_of: 2026-09-03T20:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [mancer]
allowed_paths:
  - research/inbox/packets/mancer/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Mancer
  aliases: ["Chain Mancers", "ChainMancers"]
  symbols: [MANCER, MANCERS]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://mancer.xyz
  official_handle: "@MancerXYZ"
  repository: "NULL — github.com/mancerxyz returned 404; Sherlock PDF names private blockhash-xyz/mancer-contracts, which is not a public listing this pass"
  possible_matches:
    - slug: stonkbroker
      signals: [shared-deployer]
      contrary_signals:
        - "Token 0xc72F… was created through AMMFactoryV2 0x432D… (CollectionTokenDeployer 0x6620… created by StonkBrokers EOA 0xb668…); that is the Anvil factory path, not the StonkBrokers collection or $STONKBROKER"
        - "Site, docs and handle are mancer.xyz / @MancerXYZ, not stonkbrokers.cash / @ClutchMarkets"
        - "StonkBrokers site lists Chain Mancers / $MANCER as a Special Projects partner with its own team"

classification:
  primary_leaf: trading/aggregator
  secondary_leaves: [nft-treasury/nft-fee-claim]
  mechanism_tags: [amm, execution, nft]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "The product is a native DEX aggregator and signed-order layer: quotes race across venues and settle through one router with an on-chain floor; orders rest as EIP-712 messages while tokens stay in the wallet. That is trading/aggregator, not a pad and not tooling/scanner. Chain Mancers is a 5,000 ERC-721 fee-claim collection on the same operator, so nft-treasury/nft-fee-claim is secondary. Lifecycle is mainnet: $MANCER, the NFT, and the site's v3 router/orders exist with non-empty code on chain 4663, and @MancerXYZ posted the product open to the public on 2026-08-31. Census beta is stale against that bar. Live v3 router/orders source is unverified, so the dossier is partly-verified. [R-1] [R-2] [R-5] [R-9] [R-10] [R-12] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-11, CLM-14, CLM-15], note: "" }

links:
  - { kind: site, url: "https://mancer.xyz", authenticity: confirmed }
  - { kind: docs, url: "https://mancer.xyz/docs", authenticity: confirmed }
  - { kind: whitepaper, url: "https://mancer.xyz/whitepaper.pdf", authenticity: confirmed }
  - { kind: x, url: "https://x.com/MancerXYZ", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/mancer", authenticity: confirmed }
  - { kind: other, url: "https://mancer.xyz/status", authenticity: confirmed }
  - { kind: other, url: "https://chainmancer.xyz", authenticity: unconfirmed }
  - { kind: docs, url: "https://mancer.xyz/mancer-third-party-trading-api-guide.pdf", authenticity: confirmed }

deployments:
  - label: $MANCER token (CollectionToken)
    role: token
    address:
      value: "0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-5, R-6, R-7, R-8]
  - label: Chain Mancers NFT (ERC-721)
    role: token
    address:
      value: "0x797a2e030B7e49107C8F07bF0300Ea9caE88cA57"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9]
  - label: Live v3 router (site JS generation v3)
    role: router
    address:
      value: "0xa62858659C83095Eb5E702f0Af6a7Bb7F370B3e7"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-10, R-12, R-28]
  - label: Live v3 orders (site JS generation v3)
    role: other
    address:
      value: "0xf300A6549Cd46206629e6719d3f258022d7F2da1"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-11, R-12]
  - label: Coordinator allowance target (site JS)
    role: other
    address:
      value: "0x9D356d32Df8a7463E8D73e26021e0dd8fdB7c65C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-12, R-29]
  - label: Named MancerRouter (verified, earlier generation)
    role: router
    address:
      value: "0xFBA80Ff9C50462661f9D328E033e251251537FA5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-25]
  - label: AMMFactoryV2 (Anvil createMarket path)
    role: factory
    address:
      value: "0x432D20AAe5605b1E94C914283d7155eBc6727351"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-26]
  - label: MANCER/WETH Uniswap v3 pool
    role: other
    address:
      value: "0x543127d6a1932689fAaCc1Afad4A81146d9ccF54"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-27]
  - label: Operator EOA (token createMarket sender, NFT owner, router/orders owner)
    role: admin
    address:
      value: "0x0Dc1Dd32B1300818C977Ce5A36A464A5c0c14550"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-9, R-10, R-11, R-28]

metrics:
  - { kind: holders, value: 9898, currency: null, as_of: 2026-09-03T19:40:00Z, window: point, method: "Blockscout GET /api/v2/tokens/0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A holders_count", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 1239901.66, currency: USD, as_of: 2026-09-03T19:45:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens MANCER Uniswap v3 MANCER/WETH pair 0x543127d6… volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-13] }
  - { kind: tvl, value: 565724.15, currency: USD, as_of: 2026-09-03T19:45:00Z, window: point, method: "DexScreener same Uniswap v3 MANCER/WETH pair liquidity.usd (listed pool, not aggregator TVL)", class: claim, receipt_ids: [R-13] }
  - { kind: market_cap, value: 3959607, currency: USD, as_of: 2026-09-03T19:45:00Z, window: point, method: "DexScreener same Uniswap v3 MANCER/WETH pair marketCap field", class: claim, receipt_ids: [R-13] }
  - { kind: tvl, value: 566583.44, currency: USD, as_of: 2026-09-03T20:20:00Z, window: point, method: "GeckoTerminal networks/robinhood/pools/0x543127d6… attributes.reserve_in_usd (same pool as DexScreener)", class: claim, receipt_ids: [R-14] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T19:50:00Z, receipt_ids: [R-5, R-6, R-7, R-8], result: "Blockscout address 0xc72F232a… is_contract true, is_verified true, name CollectionToken, proxy_type null, creator 0x662003BF… (CollectionTokenDeployer). Token Mancer/MANCER, holders_count 9898, total_supply 2500000000000000000000000000. Creation tx 0x9a6d78c1… 2026-08-06T23:19:47Z block 29738819 to AMMFactoryV2 0x432D20AA… method createMarket name Mancer symbol MANCER. RPC eth_getCode non-empty (6698 hex chars). Verified source is mint-once ERC-20 with no owner." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T20:35:00Z, receipt_ids: [R-10, R-11, R-12, R-28], result: "Site JS 4663 generation v3 router 0xa6285865… is_contract true, is_verified false, name null, creator EOA 0x0Dc1Dd32…, creation tx 0x6d909236… 2026-08-30T00:24:01Z block 49579357, transactions_count 1727. Orders 0xf300A654… is_contract true, is_verified false, creator same EOA, creation tx 0xbf6108b4… 2026-08-30T00:24:30Z, transactions_count 63. RPC eth_getCode non-empty (31356 and 26528 hex chars). owner() on both returns 0x0dc1dd32… EOA with empty code." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T20:05:00Z, receipt_ids: [R-9], result: "0x797a2e03… is_contract true, is_verified true, name ChainMancers, ERC-721 MANCERS total_supply 5000 holders_count 919. Constructor owner_ 0x0Dc1Dd32…, spots_ 0x77CcBA8a…, renderer_ 0x093F8795…, royaltyReceiver 0x6Fe2397c…, royaltyBps 500." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T20:10:00Z, receipt_ids: [R-1, R-2, R-4, R-13], result: "mancer.xyz swap card links /tokens/0xc72f232a6869e6cf34dc06129affd07f8a2a246a. Docs sit on the same host. DexScreener token info websites mancer.xyz and socials x.com/mancerxyz. X @MancerXYZ bio Trade like a wizard. Live on Robinhood." }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T19:45:00Z, receipt_ids: [R-13], result: "DexScreener Uniswap v3 MANCER/WETH pair 0x543127d6… labels v3, chainId robinhood, quote WETH 0x0Bd7D308…, liquidity.usd 565724.15, volume.h24 1239901.66, marketCap 3959607, fdv 8192492, websites mancer.xyz, socials x.com/mancerxyz and discord.gg/mancer." }
  - { id: REP-6, method: document-scope, checked_at: 2026-09-03T20:15:00Z, receipt_ids: [R-2, R-3, R-12, R-15], result: "Docs and whitepaper v1.1 name MancerRouter, MancerOrders, MancerAllowanceTarget and a non-custodial signed-order design. Site JS maps chain 4663 generation v3 to router 0xa628… and orders 0xf300…, not the earlier verified MancerRouter 0xFBA8…. Sherlock PDF scopes src/MancerRouter.sol, src/MancerOrders.sol, src/MancerAllowanceTarget.sol at private repo blockhash-xyz/mancer-contracts." }
  - { id: REP-7, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T20:20:00Z, receipt_ids: [R-25], result: "Named MancerRouter 0xFBA80Ff9… is_contract true, is_verified true, creator 0x0Dc1Dd32…, creation tx 0x0e12187f… 2026-08-20T23:35:44Z, transactions_count 1343. Distinct from the live JS v3 router 0xa628…." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DEX aggregator and signed-order layer on Robinhood Chain: each quote races eligible venues, may split, and settles in one transaction with an on-chain minimum. Limit, stop, OCO and recurring orders are EIP-712 messages; tokens stay in the wallet until a fill.", class: claim, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://mancer.xyz", class: verified, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-1, R-2, R-13], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@MancerXYZ", class: verified, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-1, R-4, R-13], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A", class: verified, observed_at: 2026-09-03T19:50:00Z, receipt_ids: [R-1, R-5, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xa62858659C83095Eb5E702f0Af6a7Bb7F370B3e7", class: verified, observed_at: 2026-09-03T20:35:00Z, receipt_ids: [R-10, R-12, R-28], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T20:35:00Z, receipt_ids: [R-5, R-10, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: identity.symbol, value: MANCER, class: verified, observed_at: 2026-09-03T19:50:00Z, receipt_ids: [R-5, R-6, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Users approve an isolated allowance target, not the router itself. Orders separately approve the live Orders contract. A floorless recurring order is the documented exception that trusts executor pricing.", class: claim, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Chain Mancers is a 5,000 ERC-721 collection (3,750 allowlist / 1,250 Anvil reserve). Docs and chainmancer.xyz state holders claim a share of routed flow; that fee-claim path was not reproduced from logs this pass.", class: claim, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-2, R-9, R-31], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: trading/aggregator, class: inference, observed_at: 2026-09-03T20:15:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-11, field: security.audit, value: "Sherlock collaborative audit dated 2026-08-24 to 2026-08-27 of src/MancerRouter.sol, src/MancerOrders.sol, src/MancerAllowanceTarget.sol at private repo blockhash-xyz/mancer-contracts, audited commit 1968fd5f…, final commit 3a5374b4…; findings High 0, Medium 3, Low/Info 11, all marked fixed or acknowledged. Live v3 router/orders at 0xa628… / 0xf300… are unverified, so bytecode-to-report match is not established.", class: claim, observed_at: 2026-09-03T20:20:00Z, receipt_ids: [R-15, R-17], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-12, field: identity.repository, value: "NULL — github.com/mancerxyz 404; Sherlock names blockhash-xyz/mancer-contracts, which is not a public listing", class: claim, observed_at: 2026-09-03T20:20:00Z, receipt_ids: [R-15, R-30], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "CollectionToken has no owner after deploy; constructor mints the full 2.5B supply to AMMFactoryV2.", class: verified, observed_at: 2026-09-03T19:50:00Z, receipt_ids: [R-8, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.owner, value: "Live v3 router 0xa628… and orders 0xf300… owner() is EOA 0x0Dc1Dd32B1300818C977Ce5A36A464A5c0c14550. ChainMancers constructor owner_ is the same EOA. Verified router source exposes pause, allowlist, fee-receiver and two-step ownership with no timelock in the bytecode read this pass.", class: verified, observed_at: 2026-09-03T20:35:00Z, receipt_ids: [R-9, R-10, R-11, R-25, R-28], reproduction_ids: [REP-2, REP-3, REP-7], supersedes: null }
  - { id: CLM-15, field: control.privileged-role, value: "Whitepaper: venue allowlist is owner-controlled; Sherlock PDF says governance hardening through timelocked additions and immediate revocation/pause. Live owner() is one EOA. Allowlist contents and any timelock contract were not eth_called this pass.", class: inference, observed_at: 2026-09-03T20:20:00Z, receipt_ids: [R-3, R-15, R-28], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "DexScreener Uniswap v3 MANCER/WETH pair 0x5431… liquidity 565724.15 USD, 24h volume 1239901.66 USD, marketCap 3959607 USD at fetch.", class: claim, observed_at: 2026-09-03T19:45:00Z, receipt_ids: [R-13], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "GeckoTerminal same pool 0x5431… reserve_in_usd 566583.44, volume_usd.h24 1233367.69 at fetch.", class: claim, observed_at: 2026-09-03T20:20:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: identity.alias, value: "Chain Mancers", class: verified, observed_at: 2026-09-03T20:05:00Z, receipt_ids: [R-9, R-31], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-19, field: relationship, value: "$MANCER was created by AMMFactoryV2 0x432D… createMarket (Clutch Anvil path), not by a Pons or Hookr factory. Pair asset on the lead book is WETH; venue is Uniswap v3.", class: verified, observed_at: 2026-09-03T19:50:00Z, receipt_ids: [R-7, R-13, R-26, R-27], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-20, field: taxonomy.secondary-leaf, value: nft-treasury/nft-fee-claim, class: claim, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-2, R-9, R-31], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: team.identity, value: "Whitepaper byline Michael Hirsch — Blockhash, v1.1 2026-09-01. @MichaelHirsch posted building @MancerXYZ at @BlockhashXYZ.", class: claim, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-3, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "@MancerXYZ posted Mancer is now open to the public on 2026-08-31, linking mancer.xyz. Status page this pass: All systems operational, including quotes, swap execution and order execution.", class: claim, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-16, R-23], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-23, field: account.@MancerXYZ.role, value: "project", class: claim, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-24, field: product.mechanism, value: "Mancer Shield is documented as announced: a planned shielded execution layer. Specification, cryptographic review and a capped audited launch are listed as next; no Shield contract was located this pass.", class: claim, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: activity.status, value: "Live v3 router 0xa628… transactions_count 1727; named verified MancerRouter 0xFBA8… 1343; live orders 0xf300… 63. Token holders_count 9898.", class: claim, observed_at: 2026-09-03T20:35:00Z, receipt_ids: [R-6, R-10, R-11, R-25], reproduction_ids: [REP-1, REP-2, REP-7], supersedes: null }
  - { id: CLM-26, field: other, value: "DefiLlama has no Mancer protocol row in this pass (search of api.llama.fi/protocols by name).", class: claim, observed_at: 2026-09-03T20:00:00Z, receipt_ids: [R-32], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: identity.symbol, value: MANCERS, class: verified, observed_at: 2026-09-03T20:05:00Z, receipt_ids: [R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-28, field: control.timelock, value: "Sherlock PDF describes timelocked allowlist additions. Live owner() is an EOA; no separate timelock address was published on docs or the explorer name search this pass.", class: unknown, observed_at: 2026-09-03T20:35:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: product.mechanism, value: "Fee schedule in docs: stable-stable swap 0%, ETH-stable 0.02%, other 0.10%, token younger than 24h 0.50%; order fills add a base on top. Bytecode fee cap 1%.", class: claim, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-30, field: product.mechanism, value: "Three cancel paths: free signed cancel honored by the executor, on-chain cancel (one order or cancelAll epoch), and revoking the token allowance.", class: claim, observed_at: 2026-09-03T20:10:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-6], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Account posts Better execution, everywhere"
    summary: "@MancerXYZ quoted @MichaelHirsch on improving quotes, adding venues, and integrating Mancer into more platforms."
    occurred_at: 2026-09-02T17:47:00Z
    observed_at: 2026-09-03T19:30:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-2
    type: company
    title: "Sherlock posts completed Mancer collaborative audit"
    summary: "@sherlockdefi posted a completed collaborative audit of Mancer order types; @MancerXYZ quote-tweeted it."
    occurred_at: 2026-09-01T13:05:40Z
    observed_at: 2026-09-03T19:30:00Z
    affected_fields: [security.audit]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-15, R-17]
  - id: EVT-3
    type: company
    title: "Mancer is now open to the public"
    summary: "@MancerXYZ posted Mancer is now open to the public with a link to https://mancer.xyz."
    occurred_at: 2026-08-31T17:39:48Z
    observed_at: 2026-09-03T19:30:00Z
    affected_fields: [lifecycle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-4
    type: company
    title: "Account thanks beta testers after launch"
    summary: "@MancerXYZ posted thanks to testers who helped test Mancer in beta and called the day's launch smooth."
    occurred_at: 2026-08-31T19:44:01Z
    observed_at: 2026-09-03T19:30:00Z
    affected_fields: [lifecycle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-5
    type: onchain
    title: "Live v3 router 0xa628… has 1,727 transactions"
    summary: "Site JS names 0xa628… as chain-4663 v3 router; Blockscout reports 1,727 transactions and unverified source."
    occurred_at: 2026-09-03T20:35:00Z
    observed_at: 2026-09-03T20:35:00Z
    affected_fields: [deployment.address, activity.status, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10, R-12]
  - id: EVT-6
    type: company
    title: "Formal audit of router and order contracts"
    summary: "@MancerXYZ posted a formal audit of router and order contracts was under way, with public access after completion."
    occurred_at: 2026-08-25T13:50:57Z
    observed_at: 2026-09-03T19:30:00Z
    affected_fields: [security.audit, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-7
    type: company
    title: "Account announces Mancer Shield"
    summary: "@MancerXYZ posted Mancer Shield as a planned shielded execution layer; specification and review come first."
    occurred_at: 2026-08-21T22:23:05Z
    observed_at: 2026-09-03T19:35:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-8
    type: onchain
    title: "$MANCER created via AMMFactoryV2 on 4663"
    summary: "createMarket on AMMFactoryV2 0x432D… minted CollectionToken 0xc72F… named Mancer / MANCER at block 29738819."
    occurred_at: 2026-08-06T23:19:47Z
    observed_at: 2026-09-03T19:50:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7]

receipts:
  - { id: R-1, publisher: Mancer, title: "Mancer swap UI", url: "https://mancer.xyz", published_at: null, accessed_at: 2026-09-03T19:20:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-23, EVT-3], excerpt: "Mancer | Trade like a wizard. Sell ETH. Buy View market MANCER /tokens/0xc72f232a6869e6cf34dc06129affd07f8a2a246a. Connect wallet." }
  - { id: R-2, publisher: Mancer, title: "Docs | Mancer", url: "https://mancer.xyz/docs", published_at: null, accessed_at: 2026-09-03T19:25:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-9, CLM-10, CLM-20, CLM-29, CLM-30], excerpt: "Mancer is the dex aggregator and order layer of Robinhood Chain. Your money stays in your own wallet until the moment it trades, there is no deposit, no vault, and no balance held for you. And every minimum you sign is enforced on-chain." }
  - { id: R-3, publisher: Mancer, title: "Mancer whitepaper v1.1", url: "https://mancer.xyz/whitepaper.pdf", published_at: 2026-09-01T00:00:00Z, accessed_at: 2026-09-03T19:40:00Z, kind: whitepaper, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-11, CLM-15, CLM-21, CLM-29, CLM-30], excerpt: "Michael Hirsch — Blockhash. v1.1 — 2026-09-01. Every execution flows through MancerRouter. The user approves the Router's immutable MancerAllowanceTarget, never the Router itself. MancerOrders is a scheduler on top of the router. The fee a call can carry is hard-capped at 1% in bytecode." }
  - { id: R-4, publisher: "Mancer (@MancerXYZ)", title: "X profile @MancerXYZ", url: "https://x.com/MancerXYZ", published_at: null, accessed_at: 2026-09-03T19:30:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-3, CLM-23], excerpt: "Mancer - @MancerXYZ. Bio: Trade like a wizard. Live on Robinhood." }
  - { id: R-5, publisher: Blockscout, title: "Address 0xc72F232a… CollectionToken", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xc72f232a6869e6cf34dc06129affd07f8a2a246a", published_at: null, accessed_at: 2026-09-03T19:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-7, EVT-8], excerpt: "hash 0xc72F232a6869e6CF34dC06129AfFD07F8a2a246A, is_contract true, is_verified true, name CollectionToken, creator_address_hash 0x662003BF6049e36b4E887D47b8df8718fFBbc6C2, creation_transaction_hash 0x9a6d78c155fc550083f11b7e5368a6afbf7d62deb0ab012d4980bbe31b2eb340, token symbol MANCER." }
  - { id: R-6, publisher: Blockscout, title: "Token 0xc72F232a… MANCER", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xc72f232a6869e6cf34dc06129affd07f8a2a246a", published_at: null, accessed_at: 2026-09-03T19:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-16, CLM-25], excerpt: "name Mancer, symbol MANCER, decimals 18, holders_count 9898, total_supply 2500000000000000000000000000, type ERC-20." }
  - { id: R-7, publisher: Blockscout, title: "createMarket tx 0x9a6d78c1…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x9a6d78c155fc550083f11b7e5368a6afbf7d62deb0ab012d4980bbe31b2eb340", published_at: 2026-08-06T23:19:47Z, accessed_at: 2026-09-03T19:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-13, CLM-19, EVT-8], excerpt: "timestamp 2026-08-06T23:19:47Z block 29738819, from 0x0Dc1Dd32…, to AMMFactoryV2 0x432D20AA…, method createMarket, parameters name Mancer symbol MANCER totalSupply 2500000000000000000000000000." }
  - { id: R-8, publisher: Blockscout, title: "CollectionToken verified source", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0xc72f232a6869e6cf34dc06129affd07f8a2a246a", published_at: 2026-08-06T23:20:12Z, accessed_at: 2026-09-03T19:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-13], excerpt: "contract CollectionToken is ERC20, ERC20Burnable, ERC20Permit. No owner, no admin, no mint after deployment. Constructor mints totalSupply_ to initialHolder_. Decoded args name Mancer symbol MANCER totalSupply_ 2.5e27 initialHolder_ 0x432D20AA…." }
  - { id: R-9, publisher: Blockscout, title: "Address 0x797a2e03… ChainMancers", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x797a2e030B7e49107C8F07bF0300Ea9caE88cA57", published_at: null, accessed_at: 2026-09-03T20:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-14, CLM-18, CLM-20, CLM-27], excerpt: "name ChainMancers, is_contract true, is_verified true, token name Chain Mancers symbol MANCERS type ERC-721 total_supply 5000 holders_count 919." }
  - { id: R-10, publisher: Blockscout, title: "Live v3 router 0xa6285865…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xa62858659C83095Eb5E702f0Af6a7Bb7F370B3e7", published_at: null, accessed_at: 2026-09-03T20:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-14, CLM-25, EVT-5], excerpt: "hash 0xa62858659C83095Eb5E702f0Af6a7Bb7F370B3e7, is_contract true, is_verified false, name null, creator_address_hash 0x0Dc1Dd32B1300818C977Ce5A36A464A5c0c14550, creation_transaction_hash 0x6d909236b1eeb20518fa16da32e8d418e8915a44b5795e415991d46cbd96d81f. Counters transactions_count 1727." }
  - { id: R-11, publisher: Blockscout, title: "Live v3 orders 0xf300A654…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xf300A6549Cd46206629e6719d3f258022d7F2da1", published_at: null, accessed_at: 2026-09-03T20:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-25], excerpt: "hash 0xf300A6549Cd46206629e6719d3f258022d7F2da1, is_contract true, is_verified false, name null, creator_address_hash 0x0Dc1Dd32B1300818C977Ce5A36A464A5c0c14550, creation_transaction_hash 0xbf6108b44028b35008f290e7cb6035ee1f28c77dda36223e7fc4d0ccf1f3aae4. Counters transactions_count 63." }
  - { id: R-12, publisher: Mancer, title: "App contract map chunk 3f5pdbq0g6cja.js", url: "https://mancer.xyz/_next/static/immutable/chunks/3f5pdbq0g6cja.js", published_at: null, accessed_at: 2026-09-03T20:25:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-5, EVT-5], excerpt: "4663:{generation:\"v3\",router:{address:\"0xa62858659C83095Eb5E702f0Af6a7Bb7F370B3e7\"},orders:{address:\"0xf300A6549Cd46206629e6719d3f258022d7F2da1\"},coordinator:{address:\"0xF5a39FE1b86C533F471d0e48dc0280804B8DDF69\"},coordinatorAllowanceTarget:{address:\"0x9D356d32Df8a7463E8D73e26021e0dd8fdB7c65C\"}}" }
  - { id: R-13, publisher: DexScreener, title: "MANCER token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0xc72f232a6869e6cf34dc06129affd07f8a2a246a", published_at: null, accessed_at: 2026-09-03T19:45:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-16, CLM-19], excerpt: "Uniswap v3 pair 0x543127d6a1932689fAaCc1Afad4A81146d9ccF54 MANCER/WETH liquidity.usd 565724.15 volume.h24 1239901.66 marketCap 3959607 fdv 8192492. info.websites https://mancer.xyz socials x.com/mancerxyz discord.gg/mancer." }
  - { id: R-14, publisher: GeckoTerminal, title: "MANCER/WETH Uniswap v3 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x543127d6a1932689faacc1afad4a81146d9ccf54", published_at: null, accessed_at: 2026-09-03T20:20:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-17], excerpt: "name MANCER / WETH 1%, pool_created_at 2026-08-07T00:37:17Z, reserve_in_usd 566583.44, volume_usd.h24 1233367.68902725, market_cap_usd 4006145.92277926." }
  - { id: R-15, publisher: Sherlock, title: "Mancer Collaborative Audit Report", url: "https://sherlock-files.ams3.digitaloceanspaces.com/reports/2026.08.29%20-%20Final%20-%20Mancer%20Collaborative%20Audit%20Report%201788037683.pdf", published_at: 2026-08-29T00:00:00Z, accessed_at: 2026-09-03T20:15:00Z, kind: audit, authority: independent, authenticity: confirmed, supports: [CLM-11, CLM-12, CLM-15, EVT-2], excerpt: "Collaborative Audit Prepared For: Mancer. Date Audited: August 24 - August 27, 2026. Repository: blockhash-xyz/mancer-contracts. Files: src/MancerAllowanceTarget.sol, src/MancerOrders.sol, src/MancerRouter.sol. Issues Found High 0 Medium 3 Low/Info 11. Issues Not Fixed and Not Acknowledged 0/0/0." }
  - { id: R-16, publisher: "Mancer (@MancerXYZ)", title: "Mancer is now open to the public", url: "https://x.com/MancerXYZ/status/2094480287938056251", published_at: 2026-08-31T17:39:48Z, accessed_at: 2026-09-03T19:30:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-6, CLM-22, EVT-3], excerpt: "Mancer is now open to the public. Trade like a wizard. https://mancer.xyz" }
  - { id: R-17, publisher: "SHERLOCK (@sherlockdefi)", title: "Sherlock completed a collaborative audit for @mancerxyz", url: "https://x.com/sherlockdefi/status/2094773685689385174", published_at: 2026-09-01T13:05:40Z, accessed_at: 2026-09-03T19:30:00Z, kind: social, authority: independent, authenticity: confirmed, supports: [CLM-11, EVT-2], excerpt: "Sherlock has completed a collaborative audit for @mancerxyz - building the trading and execution layer for Robinhood Chain. CEX-grade order types - limit, stop, recurring, OCO - fully onchain, fully non-custodial. Tokens don't move until the trade fully executes." }
  - { id: R-18, publisher: "Mancer (@MancerXYZ)", title: "Better execution, everywhere", url: "https://x.com/MancerXYZ/status/2095206872965927002", published_at: 2026-09-02T17:47:00Z, accessed_at: 2026-09-03T19:30:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-1], excerpt: "Better execution, everywhere. Quoted @MichaelHirsch: My focus for @MancerXYZ right now is twofold: 1) Constantly improve quotes… 2) Get Mancer integrated into as many trading platforms as possible." }
  - { id: R-19, publisher: "The Slopfather (@MichaelHirsch)", title: "Focus for @MancerXYZ", url: "https://x.com/MichaelHirsch/status/2095206793395728739", published_at: 2026-09-02T17:46:41Z, accessed_at: 2026-09-03T19:30:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-21, EVT-1], excerpt: "Bio: Building @MancerXYZ at @BlockhashXYZ. Post: My focus for @MancerXYZ right now is twofold: 1) Constantly improve quotes by finding gaps in route discovery… 2) Get Mancer integrated into as many trading platforms as possible." }
  - { id: R-20, publisher: "Mancer (@MancerXYZ)", title: "Thank you to everyone who helped test Mancer in beta", url: "https://x.com/MancerXYZ/status/2094511547137618175", published_at: 2026-08-31T19:44:01Z, accessed_at: 2026-09-03T19:30:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-22, EVT-4], excerpt: "Thank you to everyone who helped test Mancer in beta. You were a huge part of the smooth launch today." }
  - { id: R-21, publisher: "Mancer (@MancerXYZ)", title: "Formal audit for router and order contracts", url: "https://x.com/MancerXYZ/status/2092248367657079204", published_at: 2026-08-25T13:50:57Z, accessed_at: 2026-09-03T19:30:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-11, EVT-6], excerpt: "We are in the middle of a formal audit for our router and order contracts. The audit should complete by the end of the week and we will open Mancer to the public as soon as it’s done." }
  - { id: R-22, publisher: "Mancer (@MancerXYZ)", title: "Introducing Mancer Shield", url: "https://x.com/MancerXYZ/status/2090927698709185003", published_at: 2026-08-21T22:23:05Z, accessed_at: 2026-09-03T19:35:00Z, kind: announcement, authority: social, authenticity: confirmed, supports: [CLM-24, EVT-7], excerpt: "Cast the Shield. Act privately. Today we are announcing the next thing we are building: Mancer Shield, a shielded execution layer for Robinhood Chain. Specification, independent cryptographic review, and legal analysis come first. When the Shield launches, it will launch capped and audited." }
  - { id: R-23, publisher: Mancer, title: "Status | Mancer", url: "https://mancer.xyz/status", published_at: null, accessed_at: 2026-09-03T20:05:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-22], excerpt: "All systems operational. Trading Quotes and swap execution Operational. Order execution Filling limit and recurring orders Operational. Funds are never held by Mancer." }
  - { id: R-24, publisher: Discord, title: "Mancer Discord invite", url: "https://discord.com/invite/mancer", published_at: null, accessed_at: 2026-09-03T19:55:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "Join the Mancer Discord Server! Check out the Mancer community on Discord - hang out with 1338 other members." }
  - { id: R-25, publisher: Blockscout, title: "Named MancerRouter 0xFBA80Ff9…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xFBA80Ff9C50462661f9D328E033e251251537FA5", published_at: null, accessed_at: 2026-09-03T20:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-25], excerpt: "name MancerRouter, is_contract true, is_verified true, creator_address_hash 0x0Dc1Dd32B1300818C977Ce5A36A464A5c0c14550, creation_transaction_hash 0x0e12187f07ce1f8d59297a0f7d34b51ca5f01451af1104cf9ee5e7d08cdc2ceb timestamp 2026-08-20T23:35:44Z. Counters transactions_count 1343." }
  - { id: R-26, publisher: Blockscout, title: "AMMFactoryV2 0x432D20AA…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x432D20AAe5605b1E94C914283d7155eBc6727351", published_at: null, accessed_at: 2026-09-03T19:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19], excerpt: "name AMMFactoryV2, is_contract true, is_verified true, creator_address_hash 0xb668382cF44038a3E8140E789060F6A809787CDa." }
  - { id: R-27, publisher: Blockscout, title: "UniswapV3Pool 0x543127d6…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x543127d6a1932689fAaCc1Afad4A81146d9ccF54", published_at: null, accessed_at: 2026-09-03T20:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19], excerpt: "name UniswapV3Pool, is_contract true, is_verified true, creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA." }
  - { id: R-28, publisher: "Robinhood Chain RPC", title: "eth_getCode and owner() on live v3 router", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T20:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-14, CLM-15], excerpt: "eth_getCode 0xa6285865… 31356 hex chars; owner() 0x0000000000000000000000000dc1dd32b1300818c977ce5a36a464a5c0c14550. eth_getCode 0xf300A654… 26528 hex chars; owner() same. EOA 0x0Dc1Dd32… eth_getCode empty." }
  - { id: R-29, publisher: Blockscout, title: "MancerAllowanceTarget 0x9D356d32…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x9D356d32Df8a7463E8D73e26021e0dd8fdB7c65C", published_at: null, accessed_at: 2026-09-03T20:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "name MancerAllowanceTarget, is_contract true, is_verified true, creator_address_hash 0xF5a39FE1b86C533F471d0e48dc0280804B8DDF69." }
  - { id: R-30, publisher: GitHub, title: "github.com/mancerxyz", url: "https://github.com/mancerxyz", published_at: null, accessed_at: 2026-09-03T20:15:00Z, kind: repository, authority: unknown, authenticity: unconfirmed, supports: [CLM-12], excerpt: "Page not found. github.com/blockhash-xyz/mancer-contracts also returned Not Found on the public API this pass." }
  - { id: R-31, publisher: Mancer, title: "Chain Mancers allowlist site", url: "https://chainmancer.xyz", published_at: null, accessed_at: 2026-09-03T19:35:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-9, CLM-18, CLM-20], excerpt: "The allowlist is full. One of 5,000 Chain Mancers. Holding a Mancer earns a share of the trading that flows through it. 3,750 are earned by burning. The other 1,250 back the $MANCER liquidity pool on Anvil." }
  - { id: R-32, publisher: DefiLlama, title: "protocols list (no Mancer row)", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-03T20:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-26], excerpt: "GET api.llama.fi/protocols returned the global protocol list; no row named Mancer was present in the parsed names this pass." }
  - { id: R-33, publisher: Blockscout, title: "Live v3 router create tx 0x6d909236…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x6d909236b1eeb20518fa16da32e8d418e8915a44b5795e415991d46cbd96d81f", published_at: 2026-08-30T00:24:01Z, accessed_at: 2026-09-03T20:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, EVT-5], excerpt: "timestamp 2026-08-30T00:24:01Z block 49579357, from 0x0Dc1Dd32…, created_contract 0xa62858659C83095Eb5E702f0Af6a7Bb7F370B3e7, is_verified false. Constructor trailing args include WETH 0x0Bd7D308…, owner 0x0Dc1Dd32…, 0x5f3b7E83…." }

gaps:
  - { priority: P0, question: "Does Sherlock final commit 3a5374b4509ab3bea69bfa2a30847b7ce8232711 match the live unverified v3 router 0xa628… / orders 0xf300… bytecode?", checked: "Sherlock PDF, Blockscout is_verified false on both live addresses, named verified MancerRouter 0xFBA8… is a 2026-08-20 deploy, 2026-09-03", next: "compare runtime bytecode or a verified-source match once the private repo is published" }
  - { priority: P0, question: "Who is on the live venue allowlist, and is addTarget delayed by a timelock as the Sherlock writeup describes?", checked: "whitepaper allowlist section, Sherlock PDF governance note, owner() on 0xa628… is EOA 0x0Dc1…, no timelock address on docs or explorer name search, 2026-09-03", next: "eth_call allowlist getters on the live router, or read verified source selectors once verified" }
  - { priority: P1, question: "Is github.com/blockhash-xyz/mancer-contracts the official public repository, and will it be opened?", checked: "github.com/mancerxyz 404; public API for blockhash-xyz/mancer-contracts Not Found; Sherlock PDF is the only name, 2026-09-03", next: "a site, docs or X link to a public repo" }
  - { priority: P1, question: "Do NFT holders actually receive a share of routed fees, and through which contract?", checked: "chainmancer.xyz and docs claim a share of routed flow; no distributor address in the live JS 4663 map this pass", next: "trace fee converter 0x5f3b7E… and any NFT claim function" }
  - { priority: P2, question: "Why does mancer.xyz/stats render Volume today 0 while DexScreener pair volume is ~$1.24M?", checked: "status page operational; stats HTML showed 0 / Loading, 2026-09-03", next: "read the stats API once the client hydrates, or treat the page as unhydrated SPA" }
  - { priority: P2, question: "Is Mancer Shield deployed on 4663?", checked: "X article 2026-08-21, docs, explorer name search Mancer, 2026-09-03", next: "leave announced until a contract address is published" }
---

# Mancer — research packet

## What it is

Mancer races quotes across Robinhood Chain venues and settles the winning route in one transaction, with a signed floor enforced on-chain. Users swap from the wallet, or rest limit, stop, OCO and recurring orders as signatures while tokens stay in the wallet until a fill. The official site is mancer.xyz; @MancerXYZ posted the product open to the public on 2026-08-31. $MANCER and the Chain Mancers NFT live on chain 4663.

Themes: trading, tooling, nft

## Why it matters

Mancer is the chain's native DEX aggregator and resting-order layer: swaps and fills are meant to race Uniswap-style pools, Velodrome-family AMMs and other allowlisted venues instead of sitting in one book. Tokenized stocks are quoted on the same surface, with the docs refusing stock-pair placement in restricted regions including the United States.

The $MANCER token and Chain Mancers NFT are live on 4663 with a Uniswap v3 MANCER/WETH book. The aggregator contracts are a separate deployment from that token.

## What could go wrong

The site's live v3 router and orders contracts are unverified, so the Sherlock report cannot be matched to the bytecode the app names. owner() on those contracts is one EOA.

A free signed cancel is honored by Mancer's executor; the chain-enforced exits are on-chain cancel and allowance revocation. A floorless recurring order trusts executor pricing by design.

## Product and mechanics

Mancer is a quote race plus a scheduler. A swap request is priced across the enabled candidate set — direct pools, multi-hop cash legs, connector middles, and optional external aggregators — and the winner executes in one transaction. The displayed minimum is enforced on the user's net after the fee; a miss reverts. ETH wraps inside the same transaction. [claim R-2 R-3]

Resting products share one EIP-712 Order struct. A limit is a signed floor. A stop adds a trigger the executor honors, with the floor still on-chain. An OCO pair claims a group in the Orders contract when either leg fills. Recurring schedules split one decision into signed slots; missed windows skip, they do not catch up. Tokens stay in the wallet; a fill pulls one fill's input. [claim R-2 R-3]

Site JavaScript for chain 4663 generation v3 names router 0xa62858659C83095Eb5E702f0Af6a7Bb7F370B3e7 and orders 0xf300A6549Cd46206629e6719d3f258022d7F2da1, plus coordinator 0xF5a39FE1… and coordinatorAllowanceTarget 0x9D356d32…. Those router and orders addresses exist with non-empty code and are not source-verified. An earlier verified MancerRouter at 0xFBA80Ff9… was created 2026-08-20. [verified R-10 R-11 R-12 R-25]

$MANCER is a CollectionToken created 2026-08-06 through AMMFactoryV2 createMarket, not through Pons or Hookr. Lead listed book is Uniswap v3 MANCER/WETH 0x543127d6… quoting WETH 0x0Bd7D308…. Chain Mancers at 0x797a2e03… is a 5,000 ERC-721 (3,750 allowlist / 1,250 Anvil reserve). [verified R-5 R-7 R-9 R-13 R-27]

## Control and security

Live v3 router and orders owner() is EOA 0x0Dc1Dd32B1300818C977Ce5A36A464A5c0c14550, which also sent the token createMarket transaction and is the ChainMancers constructor owner. That EOA has empty code. [verified R-7 R-9 R-10 R-28]

CollectionToken has no owner after deploy. Users approve an isolated allowance target for ordinary swaps; orders approve the Orders contract. Whitepaper: the allowlist holds venue routers only. Sherlock describes timelocked additions and immediate pause/revocation; no timelock address was found this pass. [verified R-8] [claim R-2 R-3 R-15]

Sherlock published a collaborative audit (24–27 Aug 2026) of MancerRouter, MancerOrders and MancerAllowanceTarget at private repo blockhash-xyz/mancer-contracts, with High 0 / Medium 3 / Low 11 and none left unfixed. The live v3 pair the app names is unverified, so that report does not by itself cover 0xa628… / 0xf300…. [claim R-15 R-17]

## Team and provenance

Official identity is bidirectional on the token: mancer.xyz links 0xc72F…, DexScreener lists mancer.xyz and x.com/mancerxyz, and @MancerXYZ's bio states Live on Robinhood. Docs and Discord sit on the same brand. [verified R-1 R-2 R-4 R-13]

Whitepaper byline is Michael Hirsch — Blockhash. @MichaelHirsch's bio states Building @MancerXYZ at @BlockhashXYZ. github.com/mancerxyz returned 404; the Sherlock-named repo is not a public listing. chainmancer.xyz describes the NFT allowlist and is not cross-linked from the swap UI HTML this pass. [claim R-3 R-19 R-30 R-31]

## Economics and activity

DexScreener's Uniswap v3 MANCER/WETH pair 0x5431… showed liquidity 565724.15 USD, 24h volume 1239901.66 USD, and marketCap 3959607 USD at fetch. That is the listed pool, not aggregator TVL. GeckoTerminal's same-pool reserve_in_usd was 566583.44 with 24h volume 1233367.69. Blockscout holders_count was 9898. [claim R-6 R-13 R-14]

Live v3 router 0xa628… had 1727 transactions; named verified MancerRouter 0xFBA8… had 1343; live orders 0xf300… had 63. DefiLlama has no Mancer protocol row. The in-app stats page rendered Volume today 0 (unhydrated SPA). NFT holders_count 919 of 5000. [claim R-9 R-10 R-11 R-25 R-32]

## Material risks

- Live v3 router 0xa628… and orders 0xf300… are unverified; Sherlock's report is not a matched-bytecode statement about those addresses. [verified R-10 R-11 R-15]
- owner() on the live router and orders is one EOA with empty code; pause and allowlist sit on that key unless a hidden timelock is found. [verified R-28]
- Free cancellation is executor policy; chain-enforced exits are on-chain cancel and allowance revocation. [claim R-2 R-3]
- Floorless recurring orders trust executor pricing by design. [claim R-2 R-3]
- NFT fee-claim mechanics and Shield are not reproduced as live contracts. [claim R-22 R-31]

## Verification passes

- Receipts: site, docs, whitepaper, status, Discord invite, X status URLs, Sherlock PDF, DexScreener and GeckoTerminal APIs, and Blockscout address/tx/token APIs were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-2 R-3 R-5 R-10 R-13 R-15 R-16]
- Numbers: holders 9898 is the Blockscout token field; 24h volume 1239901.66 USD and liquidity 565724.15 USD are the DexScreener MANCER/WETH v3 pair slice, not an all-pairs or all-chains total; GeckoTerminal reserve is the same pool; DefiLlama has no Mancer TVL. [claim R-6 R-13 R-14 R-32]
- Adversarial: the strongest contrary reading is that Mancer is still a gated beta, or that the live product is the earlier verified MancerRouter 0xFBA8…, or that it is an imported aggregator (0x / LI.FI). The 2026-08-31 public-open post, status Operational, and site JS 4663 v3 map to 0xa628… with 1727 transactions cut the first two; native docs and the Robinhood-only contract set cut the third. [inference R-10 R-12 R-16 R-23]

## Operations log

- Read content/projects/mancer.yaml, content/pulled/mancer.yaml, content/census.yaml mancer row, content/sources/mancer.yaml, content/feed/mancer.yaml, docs/taxonomy.md, schema/packet.schema.json, docs/templates/research-packet-v2.md.
- Opened https://mancer.xyz, /docs, /status, /stats, /whitepaper.pdf, /mancer-third-party-trading-api-guide.pdf, https://chainmancer.xyz, https://discord.gg/mancer.
- GET Blockscout /api/v2/addresses for token, NFT, live v3 router/orders, named MancerRouter, AMMFactoryV2, pair, allowance target, operator EOA; /api/v2/tokens for MANCER and Chain Mancers; /api/v2/transactions for createMarket and both router creates; /api/v2/smart-contracts for CollectionToken and ChainMancers; /api/v2/search?q=MancerRouter and MancerOrders.
- RPC https://rpc.mainnet.chain.robinhood.com eth_getCode and owner() with User-Agent (bare urllib 403).
- GET DexScreener latest/dex/tokens/0xc72F… and token-pairs/v1/robinhood/0xc72F…; GET GeckoTerminal networks/robinhood/tokens and pools/0x5431…; GET api.llama.fi/protocols (no Mancer name).
- Opened site JS chunk 3f5pdbq0g6cja.js for the 4663 generation v3 map.
- X keyword search from:MancerXYZ Latest; opened listed status URLs and @sherlockdefi / @MichaelHirsch posts.
- GET github.com/mancerxyz (404) and api.github.com/repos/blockhash-xyz/mancer-contracts (Not Found).
- Time on this slug: one collector pass.
