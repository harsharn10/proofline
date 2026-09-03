---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: kipseli
name: Kipseli
packet_tier: seed
as_of: 2026-09-03T05:52:00Z
prior_packet: null
supersedes: null
owned_slugs: [kipseli]
allowed_paths:
  - research/inbox/packets/kipseli/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Kipseli
  aliases: [Kipseli PropAMM, Kipseli Capital]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://kipseli.capital
  official_handle: "NULL — kipseli.capital HTML comment states twitter:site removed as no specific Kipseli Capital handle was provided; Llama twitter null; X Latest and user search did not surface a Kipseli PropAMM account this pass"
  repository: https://github.com/KipseliCapital
  possible_matches: []

classification:
  primary_leaf: trading/prop-amm
  secondary_leaves: []
  mechanism_tags: [amm, orderbook]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Docs name a Robinhood Chain PropAmm router 0x4f1ce663…7402 and QuoteLens 0xABa7C809…f08a with quote token USDG. RPC on 4663 returned 3402-byte unverified router code, owner() a 1-of-3 Safe, QuoteLens getQuoteToken USDG 0x5fc5360d…d168 and getListedTokens WETH 0x0Bd7D308…AD73. Llama adapter values a Robinhood reserve Safe 0xcA9bf993…4EF6. Llama Robinhood Chain TVL 244673 at 2026-09-03T04:22:35Z. Llama DEX volume is Ethereum-only. Docs EIP-712 verifier 0xCa369e97…A91E has no code on 4663. Not a census row. [R-2] [R-5] [R-7] [R-11] [R-12] [R-20]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-26], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-4, CLM-22], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11, CLM-19], note: "" }

links:
  - { kind: site, url: "https://kipseli.capital", authenticity: unconfirmed }
  - { kind: docs, url: "https://docs.kipseli.capital", authenticity: confirmed }
  - { kind: github, url: "https://github.com/KipseliCapital", authenticity: confirmed }
  - { kind: other, url: "https://docs.kipseli.capital/index.md", authenticity: confirmed }

deployments:
  - label: Robinhood PropAmm router
    role: router
    address:
      value: "0x4f1ce663bF2E5e3b4A4ba88F6D1BF227e5597402"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-5, R-6]
  - label: Robinhood QuoteLens helper
    role: other
    address:
      value: "0xABa7C80918d8127C23BE2bef649832050a0Cf08a"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-7, R-8]
  - label: Robinhood reserve wallet
    role: other
    address:
      value: "0xcA9bf993eB00f641F1d4EBf6f334f1Ff04074EF6"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-4, R-10]
  - label: Router owner() Safe
    role: admin
    address:
      value: "0x5053872f31edFB9b2aD4ddF701f72440cCfE1115"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-5, R-9, R-22]
  - label: Docs EIP-712 verifier (no code on 4663)
    role: other
    address:
      value: "0xCa369e97cc161c3c3a7368f9bC55A47F36a0A91E"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: false
      explorer_source_verified: false
    receipt_ids: [R-2, R-20]

metrics:
  - { kind: tvl, value: 244673.15052, currency: USD, as_of: 2026-09-03T04:22:35Z, window: point, method: "api.llama.fi/protocol/kipseli currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-11] }
  - { kind: volume_24h, value: 1067596, currency: USD, as_of: 2026-09-03T00:00:00Z, window: 24h, method: "api.llama.fi/summary/dexs/kipseli total24h; dimension adapter chains [Ethereum] only, not a Robinhood Chain slice", class: claim, receipt_ids: [R-12, R-24] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:45:00Z, receipt_ids: [R-5, R-6], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663). eth_blockNumber 0x32b6edf (53178079). Router 0x4f1ce663…7402 eth_getCode 3402 bytes prefix 0x6080604052348015; nonce 1; balance 0; ERC1967 implementation slot zero. owner() 0x5053872f31edfb9b2ad4ddf701f72440ccfe1115. Blockscout api/v2 name null is_contract true is_verified false proxy_type null. creator 0xAEE25670…55b8D. creation_transaction_hash 0x9d8c9fd6…c1fe timestamp 2026-07-14T11:54:53Z." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:50:00Z, receipt_ids: [R-7, R-8, R-19], result: "QuoteLens 0xABa7C809…f08a eth_getCode 635 bytes; nonce 1. getQuoteToken() 0x5fc5360d0400a0fd4f2af552add042d716f1d168 (Blockscout Global Dollar USDG 6 decimals). getListedTokens() one address 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 (Blockscout WETH 18 decimals). Blockscout helper is_verified false proxy_type basic_implementation implementations 0x62FF1Fd8…29D0 (3258-byte code, unverified). Creator 0xAEE25670…55b8D. creation 0xb78fcc60…4eaf timestamp 2026-07-15T09:39:19Z." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:50:00Z, receipt_ids: [R-9, R-10, R-22], result: "owner() Safe 0x5053872f…1115 Blockscout name SafeProxy is_verified true proxy_type master_copy implementation SafeL2 0x29fcB43b…C762. getOwners() three EOAs 0x95d687d2…0d4b, 0x97f7d409…a569, 0x8999c555…5a0b. getThreshold() 1. Reserve 0xcA9bf993…4EF6 same three owners, getThreshold() 2, name SafeProxy. transferOwnership tx 0x909e22a2…14b1b 2026-07-14T11:58:11Z sets owner to this Safe. Deployer 0xAEE25670…55b8D eth_getCode 0x nonce 391." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:45:00Z, receipt_ids: [R-20], result: "Docs EIP-712 verifier 0xCa369e97cc161c3c3a7368f9bC55A47F36a0A91E eth_getCode 0x; nonce 0; balance 0; Blockscout is_contract false. No code on chain 4663 this pass." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:40:00Z, receipt_ids: [R-4, R-11, R-12, R-24], result: "api.llama.fi/protocol/kipseli currentChainTvls Base 583602.6579 Binance 228493.64942 Robinhood Chain 244673.15052; latest tvl date 1788409355 (2026-09-03T04:22:35Z); twitter null; url empty; audits 0; github null; gecko_id null; category Dexs; description proprietary AMM on Ethereum. summary/dexs total24h 1067596 total7d 6762498 chains [Ethereum] breakdown Ethereum only. Adapter robinhood lens 0xaba7c809…f08a reserve 0xca9bf993…4ef6. Dimension adapter router 0x054F0377…E63a CHAIN.ETHEREUM start 2026-05-12." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-2, R-14, R-21], result: "kipseli.capital title Kipseli Capital; twitter:card summary_large_image; HTML comment twitter:site removed as no specific Kipseli Capital handle was provided. docs.kipseli.capital names PropAMM on Base, BNB Chain and Robinhood Chain with RH router 0x4f1ce663…7402. GitHub org KipseliCapital public_repos 1 landing-page; orgs/kipseli 404." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Proprietary AMM: integrators approve the PropAmm router, obtain a quote via EIP-712 signature or a signing API, and call swap(). Inventory sits in a reserve wallet. Robinhood quote token is USDG. Access to on-chain quoting and the swap signing API is whitelist plus API key.", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://kipseli.capital", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "NULL — no twitter:site on kipseli.capital; Llama twitter null; no Kipseli PropAMM X account located this pass", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "Kipseli", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-2, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x4f1ce663bF2E5e3b4A4ba88F6D1BF227e5597402", class: verified, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0xABa7C80918d8127C23BE2bef649832050a0Cf08a", class: verified, observed_at: 2026-09-03T05:50:00Z, receipt_ids: [R-2, R-7, R-8], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:50:00Z, receipt_ids: [R-5, R-6, R-23], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: trading/prop-amm, class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-2, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0x5053872f31edFB9b2aD4ddF701f72440cCfE1115", class: verified, observed_at: 2026-09-03T05:50:00Z, receipt_ids: [R-5, R-9, R-22], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: control.threshold, value: "Router owner Safe getThreshold() 1 of 3 owners. Reserve Safe getThreshold() 2 of the same 3 owners.", class: verified, observed_at: 2026-09-03T05:50:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "No timelock address named in docs or returned by owner() this pass. Router owner is a Safe with threshold 1.", class: claim, observed_at: 2026-09-03T05:50:00Z, receipt_ids: [R-2, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "Router logs topic 0x97348197… with WETH and USDG in data; latest sampled tx 0x6c016e82…af4a14 is Multicall3 aggregate3Value at 2026-09-01T16:53:40Z. Blockscout lists 50+ logs with a next page.", class: verified, observed_at: 2026-09-03T05:51:00Z, receipt_ids: [R-23], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Robinhood Chain TVL 244673.15052 USD from api.llama.fi/protocol/kipseli currentChainTvls at 2026-09-03T04:22:35Z. All-chains currentChainTvls sum 1056769.46 (Base 583602.66, Binance 228493.65, Robinhood Chain 244673.15).", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-11], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Llama DEX volume total24h 1067596 USD attributed to Ethereum only; dimension adapter uses Ethereum router 0x054F0377e07d2F460151F935Dffc4D880017E63a. Not a Robinhood Chain slice.", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-12, R-24], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "No audit report URL was located on kipseli.capital, docs.kipseli.capital, or Llama audit_links this pass; Llama audits field 0", class: unknown, observed_at: 2026-09-03T05:52:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0xcA9bf993eB00f641F1d4EBf6f334f1Ff04074EF6", class: verified, observed_at: 2026-09-03T05:50:00Z, receipt_ids: [R-4, R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-2, R-11], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from census and inventory prop-AMM names such as Rialto. No shared domain, handle, or reproduced Robinhood address with those names this pass.", class: claim, observed_at: 2026-09-03T05:52:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "On-chain quote() requires an EIP-712 PropAmmVerification(tokenIn, tokenOut, timestampInMilisec) from a whitelisted key; swap() requires verificationData from POST /v2/swap/sign. API endpoints require X-API-KEY.", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: deployment.address, value: "0xCa369e97cc161c3c3a7368f9bC55A47F36a0A91E", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xCa369e97cc161c3c3a7368f9bC55A47F36a0A91E has no code on chain 4663", class: verified, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-20], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-22, field: identity.repository, value: "https://github.com/KipseliCapital", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-14, R-21], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-23, field: identity.alias, value: "Kipseli PropAMM", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "No official X handle. Third-party posts name Kipseli as a PropAMM on Ethereum, Base, BNB Chain, and as a Robinhood Chain liquidity source for Exypnos.", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-15, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: control.privileged-role, value: "Router owner() is Safe 0x5053872f…1115 with threshold 1. Deployer 0xAEE25670…55b8D created the router and helper and called transferOwnership to that Safe.", class: verified, observed_at: 2026-09-03T05:50:00Z, receipt_ids: [R-5, R-9, R-22], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "Robinhood QuoteLens getQuoteToken() returns USDG 0x5fc5360d…d168. getListedTokens() returns WETH 0x0Bd7D308…AD73 only this pass. Docs table QuoteToken USDG on Robinhood Chain.", class: verified, observed_at: 2026-09-03T05:50:00Z, receipt_ids: [R-2, R-7, R-19], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-27, field: other, value: "Public posts describe a 2026-04-22 Base quoting-path incident (WETH to cbBTC unit mismatch) and a 2026-08-06 Base PropAMMWrapper incident. Those addresses are Base, not the Robinhood router 0x4f1ce663…7402.", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-16, R-17], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: deployment.address
    claim_ids: [CLM-20, CLM-21]
    material_effect: "Docs say the EIP-712 verifier is deployed at 0xCa369e97…A91E on every chain including Robinhood Chain id 4663; RPC and Blockscout show no code at that address on 4663, so on-chain quote() verification cannot use that contract here."
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-13, CLM-14]
    material_effect: "Llama TVL is split across Base, BSC, and Robinhood Chain, while Llama DEX volume is Ethereum-only. The 24h volume figure is not a Robinhood Chain slice."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "RPC: Robinhood PropAmm router has code and a Safe owner"
    summary: "Router 0x4f1ce663…7402 is a 3402-byte unverified contract on chain 4663 created 2026-07-14. owner() is Safe 0x5053872f…1115. Matches docs Robinhood Chain Router (PropAmm)."
    occurred_at: 2026-07-14T11:54:53Z
    observed_at: 2026-09-03T05:45:00Z
    affected_fields: [deployment.address, control.owner, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-6]
  - id: EVT-2
    type: onchain
    title: "Router transferOwnership to 1-of-3 Safe"
    summary: "On 2026-07-14 deployer 0xAEE25670…55b8D called 0xf2fde38b on the router with new owner 0x5053872f…1115. That Safe getThreshold() is 1."
    occurred_at: 2026-07-14T11:58:11Z
    observed_at: 2026-09-03T05:50:00Z
    affected_fields: [control.owner, control.threshold]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-22, R-9]
  - id: EVT-3
    type: onchain
    title: "Router still emitting WETH/USDG logs on 2026-09-01"
    summary: "Latest sampled router log in tx 0x6c016e82…af4a14 at 2026-09-01T16:53:40Z via Multicall3, data includes WETH 0x0Bd7D308…AD73 and USDG 0x5fc5360d…d168."
    occurred_at: 2026-09-01T16:53:40Z
    observed_at: 2026-09-03T05:51:00Z
    affected_fields: [activity.status, lifecycle]
    evidence_state: verified
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-4
    type: risk
    title: "2026-04-22 Base quoting-path unit mismatch"
    summary: "Defimon Alerts and follow-up posts describe a Base Kipseli PropAMM path where a small WETH input received a large cbBTC output because a USDC-scale integer was transferred as cbBTC. Funds return and a bounty were reported. Base, not chain 4663."
    occurred_at: 2026-04-22T08:48:51Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [security.audit, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: risk
    title: "2026-08-06 Base PropAMMWrapper public-call incident"
    summary: "A 2026-08-06 post describes a Base incident in which a public PropAMMWrapper could be called to settle across tokens with broken unit accounting. Base wrapper, not the Robinhood router."
    occurred_at: 2026-08-06T13:49:41Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [security.audit, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-6
    type: company
    title: "Exypnos lists kipseli as a Robinhood Chain liquidity source"
    summary: "On 2026-07-20 @exypnos_xyz posted that kipseli was among twelve new liquidity sources on its Robinhood Chain router."
    occurred_at: 2026-07-20T09:55:48Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]

receipts:
  - { id: R-1, publisher: Kipseli Capital, title: "kipseli.capital home", url: "https://kipseli.capital/", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-18, CLM-24], excerpt: "title Kipseli Capital. meta description: Pioneering on-chain market-making and innovative trading strategies. og:title Kipseli Capital. twitter:card summary_large_image. HTML comment: twitter:site removed as no specific Kipseli Capital handle was provided. last-modified Fri, 17 Apr 2026." }
  - { id: R-2, publisher: Kipseli, title: "Kipseli PropAMM docs", url: "https://docs.kipseli.capital/index.md", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-8, CLM-11, CLM-17, CLM-18, CLM-19, CLM-20, CLM-23, CLM-26], excerpt: "Kipseli PropAMM is a professional Automated Market Maker deployed on Base, BNB Chain and Robinhood Chain. Robinhood Chain Router 0x4f1ce663bF2E5e3b4A4ba88F6D1BF227e5597402 Helper 0xABa7C80918d8127C23BE2bef649832050a0Cf08a QuoteToken USDG. EIP-712 Verifier 0xCa369e97cc161c3c3a7368f9bC55A47F36a0A91E same address every chain, chainId 4663 for Robinhood Chain. Whitelist required." }
  - { id: R-4, publisher: DefiLlama, title: "kipseli adapter", url: "https://raw.githubusercontent.com/DefiLlama/DefiLlama-Adapters/main/projects/kipseli/index.js", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-16], excerpt: "robinhood lens 0xaba7c80918d8127c23be2bef649832050a0cf08a reserve 0xca9bf993eb00f641f1d4ebf6f334f1ff04074ef6. base lens 0x62aff80b…ef1acf reserve 0xbee3211a…da000. bsc lens 0x6e56480f…abe90 reserve 0xbee1aa51…c000. methodology: TVL is the value of all listed assets and quote tokens held in Kipseli reserve wallets." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() router 0x4f1ce663…7402", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-18, CLM-25, EVT-1], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32b6edf (53178079). 0x4f1ce663…7402 code 3402 B prefix 0x6080604052348015 nonce 1 bal 0. owner() 0x5053872f31edfb9b2ad4ddf701f72440ccfe1115. ERC1967 slot 32 zero bytes." }
  - { id: R-6, publisher: Blockscout, title: "Address 0x4f1ce663bF2E5e3b4A4ba88F6D1BF227e5597402", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x4f1ce663bF2E5e3b4A4ba88F6D1BF227e5597402", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, EVT-1], excerpt: "hash 0x4f1ce663bF2E5e3b4A4ba88F6D1BF227e5597402 name null is_contract true is_verified false proxy_type null implementations []. creator_address_hash 0xAEE25670E53E86e1e6247c77FDaaF422a3c55b8D. creation_transaction_hash 0x9d8c9fd63489778ca721a282f8891e25bae431aeaa0e3035fef19cf8b5f6c1fe timestamp 2026-07-14T11:54:53Z." }
  - { id: R-7, publisher: Robinhood Chain RPC, title: "QuoteLens getQuoteToken / getListedTokens", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-26], excerpt: "0xABa7C809…f08a eth_getCode 635 B. getQuoteToken() 0x5fc5360d0400a0fd4f2af552add042d716f1d168. getListedTokens() length 1 token 0x0bd7d308f8e1639fab988df18a8011f41eacad73. Helper impl 0x62FF1Fd8…29D0 code 3258 B." }
  - { id: R-8, publisher: Blockscout, title: "Address 0xABa7C80918d8127C23BE2bef649832050a0Cf08a", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xABa7C80918d8127C23BE2bef649832050a0Cf08a", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "is_contract true is_verified false proxy_type basic_implementation. implementations 0x62FF1Fd8aEd8f319108CE606eeA13df362d329D0 name null. creator_address_hash 0xAEE25670E53E86e1e6247c77FDaaF422a3c55b8D. creation_transaction_hash 0xb78fcc609e071782b675c435d1219cf3f4f480f49b23e21308eb330abe9d4eaf timestamp 2026-07-15T09:39:19Z." }
  - { id: R-9, publisher: Robinhood Chain RPC, title: "owner Safe getOwners / getThreshold", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-10, CLM-11, CLM-25, EVT-2], excerpt: "0x5053872f…1115 getOwners() 0x95d687d29e81cc5dc2ad8cadc4adaff38cfe0d4b, 0x97f7d4093e5bdd0776e2ca90c90124c5e16ca569, 0x8999c5554a983e9b9679ccfab3709830dce75a0b. getThreshold() 1. eth_getCode 171 B (Safe proxy)." }
  - { id: R-10, publisher: Blockscout, title: "Address 0xcA9bf993eB00f641F1d4EBf6f334f1Ff04074EF6", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xcA9bf993eB00f641F1d4EBf6f334f1Ff04074EF6", published_at: null, accessed_at: 2026-09-03T05:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-16], excerpt: "name SafeProxy is_contract true is_verified true proxy_type master_copy. implementations 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762 name SafeL2. RPC getOwners() same three addresses as router owner Safe; getThreshold() 2." }
  - { id: R-11, publisher: DefiLlama, title: "protocol/kipseli", url: "https://api.llama.fi/protocol/kipseli", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-8, CLM-13, CLM-17], excerpt: "id 7984 name Kipseli symbol - url empty twitter None category Dexs chains [Base, Binance, Robinhood Chain] gecko_id None github None audits 0 description Kipseli is a proprietary AMM on Ethereum. currentChainTvls Base 583602.6579 Binance 228493.64942 Robinhood Chain 244673.15052. latest tvl date 1788409355 (2026-09-03T04:22:35Z)." }
  - { id: R-12, publisher: DefiLlama, title: "summary/dexs/kipseli", url: "https://api.llama.fi/summary/dexs/kipseli", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "displayName Kipseli. total24h 1067596 total7d 6762498 total30d 38611921 totalAllTime 114799143.08. chains [Ethereum]. totalDataChartBreakdown last point 1788393600 Ethereum Kipseli 1067596. Fees endpoint HTTP 400 Fees for kipseli not found." }
  - { id: R-14, publisher: GitHub, title: "orgs/KipseliCapital", url: "https://api.github.com/orgs/KipseliCapital", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-22], excerpt: "login KipseliCapital type Organization html_url https://github.com/KipseliCapital public_repos 1 created_at 2025-04-29T07:36:50Z. api.github.com/orgs/kipseli HTTP 404." }
  - { id: R-15, publisher: "@exypnos_xyz", title: "new arrivals on Exypnos", url: "https://x.com/exypnos_xyz/status/2079143226385355245", published_at: 2026-07-20T09:55:48Z, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24, EVT-6], excerpt: "new arrivals on Exypnos: alley, ekubo, flap, kipseli, liquidcore, metric, robinswap, swaphood, sheriff, sushiswap, swaap. 12 new liquidity sources plugged in. one router. best price execution on robinhood chain." }
  - { id: R-16, publisher: "@DefimonAlerts", title: "kipseli.capital Base quoting-path alert", url: "https://x.com/DefimonAlerts/status/2046873857571934254", published_at: 2026-04-22T08:48:51Z, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, EVT-4], excerpt: "https://kipseli.capital/ - Loss $72.35K (2026-04-22) Type: Pricing / Decimals Mismatch. An MEV bot swapped 0.04 WETH and received 0.926 cbBTC via Kipseli PropAMM Router. Per docs.kipseli.capital pricing is intended to be USDC-denominated. The pricing stack produced a USDC-scale quote transferred as cbBTC." }
  - { id: R-17, publisher: "@clarahacks", title: "Base PropAMMWrapper incident", url: "https://x.com/clarahacks/status/2085362681096146981", published_at: 2026-08-06T13:49:41Z, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, EVT-5], excerpt: "Source: DefimonAlerts. A serious Base DeFi incident on Kipseli PropAMM: anyone could call the public PropAMMWrapper and trigger a cross-token settlement with broken unit accounting. A tiny 0.04 WETH input was able to pull high-value cbBTC, draining part of liquidity." }
  - { id: R-18, publisher: "@BNBCHAIN", title: "Strong liquidity takes a whole ecosystem", url: "https://x.com/BNBCHAIN/status/2092221190635208980", published_at: 2026-08-25T12:02:58Z, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24], excerpt: "Strong liquidity takes a whole ecosystem behind it: @1inch @bebop_dex @CoWSwap @elfomo_fi Flux Pool @LunarBaseX @metricxyz @native_fi @wintermute_t Kipseli @Ondo @BreederDodo @lista_dao @mavprotocol @PancakeSwap @thenafi_ @TopazDex @Uniswap" }
  - { id: R-19, publisher: Blockscout, title: "Quote token USDG 0x5fc5360d…d168", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x5fc5360d0400a0fd4f2af552add042d716f1d168", published_at: null, accessed_at: 2026-09-03T05:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-26], excerpt: "name Global Dollar symbol USDG decimals 6 type ERC-20 holders_count 196883 exchange_rate 1.0. Address page name ERC1967Proxy is_verified true. Listed token 0x0Bd7D308…AD73 name WETH symbol WETH decimals 18." }
  - { id: R-20, publisher: Robinhood Chain RPC, title: "eth_getCode verifier 0xCa369e97…A91E", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "0xCa369e97cc161c3c3a7368f9bC55A47F36a0A91E eth_getCode 0x nonce 0 balance 0. Blockscout api/v2 is_contract false is_verified false creator_address_hash null. Docs claim this address is the EIP-712 verifier on every chain including 4663." }
  - { id: R-21, publisher: GitHub, title: "KipseliCapital/landing-page", url: "https://github.com/KipseliCapital/landing-page", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-22], excerpt: "full_name KipseliCapital/landing-page description Kipseli landing page language HTML default_branch main pushed_at 2026-04-17T10:10:49Z. README: landing-page / Kipseli landing page. Only public repo on the org this pass." }
  - { id: R-22, publisher: Blockscout, title: "transferOwnership tx 0x909e22a2…14b1b", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x909e22a2ada3ab0476e0c5ebabe6242048b5ea13454b140d737aee77e0b14b1b", published_at: 2026-07-14T11:58:11Z, accessed_at: 2026-09-03T05:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25, EVT-2], excerpt: "timestamp 2026-07-14T11:58:11Z status ok method 0xf2fde38b from 0xAEE25670E53E86e1e6247c77FDaaF422a3c55b8D to 0x4f1ce663…7402. raw_input 0xf2fde38b…5053872f31edfb9b2ad4ddf701f72440ccfe1115." }
  - { id: R-23, publisher: Blockscout, title: "Router logs and latest swap-like tx", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x4f1ce663bF2E5e3b4A4ba88F6D1BF227e5597402/logs", published_at: null, accessed_at: 2026-09-03T05:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-12, EVT-3], excerpt: "items 50 next_page_params block_number 51575855. First item tx 0x6c016e82901c843fc94201cf2abb9bab2ea54b65191cd532d450147112af4a14 block 51876965 topic 0x9734819749a91fc3be03ea83205f924ee08479bd3f0da48efc91d94d050cac1e data includes WETH and USDG. That tx timestamp 2026-09-01T16:53:40Z method aggregate3Value via Multicall3." }
  - { id: R-24, publisher: DefiLlama, title: "dimension-adapters dexs/kipseli", url: "https://raw.githubusercontent.com/DefiLlama/dimension-adapters/master/dexs/kipseli/index.ts", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "const router = \"0x054F0377e07d2F460151F935Dffc4D880017E63a\"; chains: [CHAIN.ETHEREUM]; start: \"2026-05-12\". Fetches swap logs on that Ethereum router. No Robinhood Chain entry." }

gaps:
  - { priority: P0, question: "Is the EIP-712 verifier deployed on chain 4663 at a different address, or is on-chain quote() unused on Robinhood Chain?", checked: "docs name 0xCa369e97…A91E on every chain with chainId 4663; RPC eth_getCode 0x; Blockscout is_contract false, 2026-09-03", next: "read router bytecode or a verified source for the verifier slot; do not treat the docs address as live on 4663" }
  - { priority: P0, question: "What does a 1-of-3 Safe owner() mean for swap verification, listed tokens, and reserve movement?", checked: "owner() 0x5053872f…1115 getThreshold 1; reserve Safe threshold 2; no timelock named; router source unverified, 2026-09-03", next: "decode unverified router setters once source lands; eth_call any pending owner or whitelist admin" }
  - { priority: P1, question: "Is there an audit whose scope matches RH router 0x4f1ce663…7402 and QuoteLens 0xABa7C809…f08a?", checked: "docs index, site HTML, GitHub landing-page, Llama audits 0 and audit_links null, 2026-09-03", next: "record any published report as a claim with exact scope; Base quoting-path history is not an RH audit" }
  - { priority: P1, question: "What is Robinhood Chain swap volume, and does Llama plan to add a 4663 dimension?", checked: "summary/dexs/kipseli chains [Ethereum]; dimension adapter Ethereum router 0x054F0377…E63a; RH router has logs but no Llama RH volume, 2026-09-03", next: "do not use the Ethereum 24h volume as a Robinhood Chain figure; decode topic 0x97348197… on 4663 for an independent volume pass" }
  - { priority: P2, question: "Are more tokens listed on QuoteLens than the single WETH address returned this pass?", checked: "getListedTokens() length 1 WETH; getQuoteToken USDG; docs table QuoteToken USDG, 2026-09-03", next: "re-call getListedTokens on a later block if coverage expands" }
  - { priority: P2, question: "Does any official X handle exist that kipseli.capital will name?", checked: "site HTML comment no twitter:site; Llama twitter None; X Latest has no from:kipseli project account, 2026-09-03", next: "record a handle only after the site or docs name it" }
---

# Kipseli — research packet

## What it is

Kipseli is a proprietary AMM. On Robinhood Chain a swap approves the PropAmm router, takes a signed quote, and settles against inventory in a reserve wallet quoted in USDG. There is no public bonding curve and no LP token. Docs also list Base and BNB Chain. The site is kipseli.capital. No official X handle was located.

Themes: amm, orderbook, prop-amm

## Why it matters

The venue is a short-tail PropAMM with USDG as the Robinhood quote asset, which is a different control plane from Uniswap pools on this chain. Llama's Robinhood Chain slice is about 245k USD of reserve inventory. Integrators such as Exypnos list it as a router source. It is not a census row. [claim R-2 R-11 R-15]

## What could go wrong

The router is unverified. owner() is a Safe whose threshold is 1. Docs name an EIP-712 verifier at one address on every chain; that address has no code on 4663. Public posts describe two Base quoting-path incidents in 2026; those wrappers are not this router, but they are the same product family. [verified R-5 R-9 R-20] [claim R-16 R-17]

## Product and mechanics

A taker approves the PropAmm router and calls swap(tokenIn, amountIn, tokenOut, minOutAmount, quoteTimestamp, verificationData). quote() is a view that takes an EIP-712 signature over tokenIn, tokenOut, and a millisecond timestamp. The HTTP path is POST /v2/swap/sign plus GET /v2/price for an orderbook cache. Both quoting paths are described as whitelist-gated; HTTP calls need X-API-KEY. [claim R-2]

On Robinhood Chain the QuoteLens helper returns USDG as the quote token and, this pass, a single listed token WETH. Liquidity is not a Uniswap pool; Llama values listed assets plus the quote token in a reserve Safe. [verified R-7 R-19] [claim R-4]

## Control and security

owner() on the router returns Safe 0x5053872f31edFB9b2aD4ddF701f72440cCfE1115. getThreshold() on that Safe is 1 of three owners. The reserve Safe 0xcA9bf993…4EF6 uses the same three owners with threshold 2. Deployer 0xAEE25670…55b8D created the router on 2026-07-14 and transferred ownership to the 1-of-3 Safe minutes later. No timelock address was located. Router source is not verified. [verified R-5 R-9 R-10 R-22]

## Team and provenance

kipseli.capital titles itself Kipseli Capital and states in HTML that no twitter:site was provided. Llama twitter is null. GitHub organization KipseliCapital exists with one public repository, a landing page last pushed 2026-04-17. docs.kipseli.capital publishes the Robinhood addresses that RPC reproduced. No protocol source repository was located. [claim R-1 R-14 R-21]

## Economics and activity

Llama currentChainTvls Robinhood Chain 244673.15 USD at 2026-09-03T04:22:35Z (Base 583602.66, Binance 228493.65; all-chains sum 1056769.46). summary/dexs total24h 1067596 is Ethereum-only via adapter router 0x054F0377…E63a; it is not a Robinhood Chain slice. The RH router still emitted WETH/USDG logs on 2026-09-01. Fees endpoint is not listed. [claim R-11 R-12 R-24] [verified R-23]

## Material risks

- Router source is unverified; owner Safe threshold is 1. [verified R-6 R-9]
- Docs EIP-712 verifier has no code on chain 4663. [verified R-20]
- Llama DEX volume is Ethereum-only and must not be read as Robinhood Chain volume. [claim R-12 R-24]
- No audit report URL. [unknown]
- Base quoting-path incidents in April and August 2026 are the same product family, different chain. [claim R-16 R-17]

## Verification passes

- Receipts: kipseli.capital, docs index.md, GitHub org and landing-page, Llama protocol/volume/adapter/dimension adapter, X posts, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-2 R-5 R-11]
- Numbers: TVL is the Robinhood Chain slice from api.llama.fi, not the all-chains total. Volume is labeled Ethereum-only. Bytecode lengths, owner(), Safe threshold, quote token, and listed tokens are chain 4663 RPC. [verified R-5 R-7 R-11]
- Adversarial: strongest contrary reading is that 0x4f1ce663…7402 is an unused docs leftover and live flow uses another factory, or that Llama RH TVL is mis-attributed. Docs and the Llama adapter set this router and this QuoteLens/reserve pair; RPC owner, quote token, and 2026-09-01 logs argue it is live. The Ethereum volume adapter is a different router. [inference R-2 R-4 R-5 R-23]

## Operations log

- Census.yaml has no kipseli row; no content/projects/kipseli.yaml. Name inventory listed the slug as Llama DEX with no URL or twitter.
- X Latest: no from:kipseli project account. Posts used: Exypnos 20 Jul 2026 RH liquidity source; BNB Chain 25 Aug 2026 list; DefimonAlerts 22 Apr 2026 Base quoting-path; clarahacks 6 Aug 2026 Base wrapper.
- kipseli.capital, docs.kipseli.capital/index.md and llms.txt opened 2026-09-03.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId, eth_blockNumber, eth_getCode, nonce, balance, owner(), ERC1967 slot, getQuoteToken, getListedTokens, getOwners, getThreshold on router, helper, verifier, owner Safe, reserve Safe, deployer.
- Blockscout api/v2 for router, helper, verifier, reserve, owner Safe, USDG, WETH, transferOwnership tx, router logs, latest log tx.
- api.llama.fi/protocol/kipseli, summary/dexs/kipseli, summary/fees/kipseli HTTP 400, adapter index.js, dimension-adapters dexs/kipseli/index.ts.
- api.github.com/orgs/kipseli 404; org KipseliCapital and landing-page 200.
- Gecko skipped: Llama gecko_id null.
- DexScreener and CoinGecko not used.
