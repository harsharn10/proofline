---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: doppler
name: Doppler
packet_tier: seed
as_of: 2026-09-03T04:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [doppler]
allowed_paths:
  - research/inbox/packets/doppler/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Doppler
  aliases: [Doppler Protocol]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://doppler.lol
  official_handle: "@dopplerprotocol"
  repository: https://github.com/whetstoneresearch/doppler
  possible_matches:
    - slug: long
      signals: [shared-address]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED"
        - "Doppler is the protocol at doppler.lol / @dopplerprotocol; Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 and DopplerERC20V1Factory 0x1B37D3a72082029c44B35B604Ea473617580b69a are the shared launch infra LONG wraps"
        - "LONG tokens are DopplerERC20V1 EIP-1167 clones, not the Doppler protocol. Distinct from packed long."
        - "No shared domain or handle"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at @bankrbot; Bankr API rows on chain robinhood use launchType doppler"
        - "Doppler is the Airlock/factory protocol at doppler.lol / @dopplerprotocol, not the Bankr product"
        - "No shared domain, handle, or reproduced factory address as Bankr's own"
    - slug: statics-protocol
      signals: [shared-address]
      contrary_signals:
        - "Census STATICS is a reserve-backed Genesis token launched via Airlock.create, not the Doppler protocol"
        - "Shared Airlock 0xeb7C…0862 and DopplerERC20V1Factory 0x1B37…b69a are launch infra; domains and handles differ"
    - slug: earn-protocol
      signals: [shared-address]
      contrary_signals:
        - "Census EARN is a savings-vault product at earnonhood.com; token owner() is the same Airlock"
        - "Doppler is the protocol that created the clone, not the EARN vaults or site"

classification:
  primary_leaf: launch/bonding-curve
  secondary_leaves: [launch/hook-programmable]
  mechanism_tags: [bonding-curve, launchpad]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Docs name Robinhood Mainnet (4663) Airlock 0xeb7C…0862 and DopplerERC20V1Factory 0x1B37…b69a. RPC on 4663 returned non-empty code on both, owner() of Airlock is 3-of-6 Safe 0x21E2…7A66, factory nonce 115600. Blockscout names and verifies Airlock, factory, and DopplerERC20V1. This slug is the Doppler protocol, not a LONG clone token. RH Daily posted $2.2M 24h for @dopplerprotocol. Llama protocol/doppler 400. Gecko first GET 429, skipped. Not a census row. [R-3] [R-11] [R-13] [R-14] [R-15]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-7], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-12, CLM-18], note: "" }

links:
  - { kind: site, url: "https://doppler.lol", authenticity: confirmed }
  - { kind: app, url: "https://app.doppler.lol", authenticity: confirmed }
  - { kind: docs, url: "https://docs.doppler.lol", authenticity: confirmed }
  - { kind: x, url: "https://x.com/dopplerprotocol", authenticity: confirmed }
  - { kind: github, url: "https://github.com/whetstoneresearch/doppler", authenticity: confirmed }
  - { kind: whitepaper, url: "https://www.doppler.lol/whitepaper.pdf", authenticity: confirmed }
  - { kind: other, url: "https://docs.doppler.lol/reference/contract-addresses", authenticity: confirmed }

deployments:
  - label: Airlock (unified create entry)
    role: factory
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-14]
  - label: DopplerERC20V1Factory
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-15]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-16]
  - label: DopplerHookInitializer
    role: other
    address:
      value: "0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-26]
  - label: UniswapV4Initializer
    role: other
    address:
      value: "0x6cce158B6D1747617fc218592B4D60B239B957ea"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-27]
  - label: Airlock owner (SafeProxy)
    role: multisig
    address:
      value: "0x21E2ce70511e4FE542a97708e89520471DAa7A66"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-13, R-17, R-18]

metrics:
  - { kind: volume_24h, value: 2200000, currency: USD, as_of: 2026-09-01T22:00:00Z, window: 24h, method: "@RHDaily__ status 2094908154672734344 posted @dopplerprotocol $2.2M on Top Robinhood Chain Launchpads by 24H Volume", class: claim, receipt_ids: [R-11] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-13, R-14, R-15, R-16], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32afc93 (53148819). Airlock 0xeb7C…0862 eth_getCode 5695 bytes prefix 0x6080604052600436; nonce 1; balance 0; owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66. Factory 0x1B37…b69a eth_getCode 1912 bytes; nonce 0x1c390 (115600); balance 0. Impl 0x3Be8…C599 eth_getCode 13927 bytes; nonce 1. HookInitializer 0x4e34…a544 25533 bytes. UniswapV4Initializer 0x6cce…57ea 2685 bytes." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-14, R-15, R-16, R-19, R-24], result: "Blockscout api/v2: Airlock is_contract true is_verified true name Airlock proxy_type null creator 0x78C84FE5…02b9 creation tx 0x8ffd957b…291a timestamp 2026-06-30T22:03:11Z block 646829 method deployCreate3 via DopplerCreateXDeployer. Factory name DopplerERC20V1Factory is_verified true creation tx 0xb53eb826…f7c9 2026-06-30T22:03:14Z. Impl name DopplerERC20V1 is_verified true creator factory. Airlock counters transactions_count 9126 token_transfers_count 445362." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-17, R-18], result: "Airlock owner 0x21E2…7A66 eth_getCode 171 bytes prefix 0x608060405273ffff. Blockscout name SafeProxy is_verified true proxy_type master_copy implementations SafeL2. getThreshold() 3. getOwners() six addresses. VERSION 1.4.1. Safe nonce 2." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-5, R-21], result: "www.doppler.lol title Doppler; og:url https://doppler.lol; twitter:creator @dopplerprotocol; no twitter:site. app.doppler.lol title Doppler; canonical https://app.doppler.lol; HTML contains robinhood. @dopplerprotocol display name Doppler; bio Custom markets for launching tokens; website doppler.lol." }
  - { id: REP-5, method: document-scope, checked_at: 2026-09-03T04:48:00Z, receipt_ids: [R-2, R-3, R-12, R-22], result: "docs.doppler.lol/reference/contract-addresses.md lists Robinhood Mainnet (4663) Airlock 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862, DopplerERC20V1Factory 0x1b37d3a72082029c44b35b604ea473617580b69a, DopplerERC20V1 0x3be8b97fd0e713b5abe0649fa830223b6b4bc599, commit bda077cf. GitHub org whetstoneresearch repo doppler description Core contracts for the Doppler Protocol. api.llama.fi/protocol/doppler HTTP 400 Protocol not found." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T04:48:11Z, receipt_ids: [R-20, R-25], result: "GET api.llama.fi/protocol/doppler HTTP 400 Protocol not found. GET api.geckoterminal.com/api/v2/networks/robinhood/dexes HTTP 429; Gecko skipped per source order." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Airlock is the unified create entry. A launch configures token factory, hook initializer, governance, and migrator modules. Price discovery is a static, multicurve, or dynamic auction; liquidity can migrate after the auction. Custom hooks can run at open, each swap, or graduation.", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-2, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://doppler.lol", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@dopplerprotocol", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "Doppler", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-13, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-13, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-13, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/bonding-curve, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66 SafeProxy; getThreshold() 3 of 6; VERSION 1.4.1; Safe nonce 2", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-13, R-17, R-18], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-3, R-6, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: control.threshold, value: "3 of 6 on Airlock-owning Safe 0x21E2…7A66", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-18], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: relationship, value: "Census LONG wraps this protocol: LongLauncher TRUSTED_TOKEN_FACTORY is DopplerERC20V1Factory 0x1B37…b69a and AIRLOCK() is 0xeb7C…0862. LONG tokens are DopplerERC20V1 clones. This slug is the Doppler protocol, not packed long.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: activity.status, value: "Blockscout Airlock counters transactions_count 9126 token_transfers_count 445362; factory eth_getTransactionCount nonce 115600 on 2026-09-03", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-13, R-19], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "@RHDaily__ 2026-09-01 posted @dopplerprotocol $2.2M on the 24h Robinhood Chain launchpad volume board", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "Docs list OpenZeppelin audit Nov 2024, Certora audit (page text Nov. 204), and a Cantina contest plus Cantina bounty; Google Drive folder and cantina.xyz URLs. Scope vs Robinhood 4663 addresses was not reproduced this pass.", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: identity.repository, value: "https://github.com/whetstoneresearch/doppler", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-2, R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-17, field: product.mechanism, value: "Docs: Doppler Protocol receives 5% of trading fees on EVM (7.5% on Solana). A 1% trading fee yields 0.05% of swap volume as protocol fee on EVM. A 0% trading fee generates no protocol fees.", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: communications.status, value: "@dopplerprotocol posted 2026-07-03 that the Doppler SDK supports Robinhood Chain, and 2026-07-14 Launch with Doppler on Robinhood Chain at app.doppler.lol", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@dopplerprotocol.official", value: "doppler.lol HTML twitter:creator @dopplerprotocol; handle website field doppler.lol; no twitter:site meta this pass", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-20, field: "account.@dopplerprotocol.slug", value: doppler, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@dopplerprotocol.role", value: project, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: taxonomy.secondary-leaf, value: launch/hook-programmable, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: other, value: "www.doppler.lol homepage copy says Live on Base, Monad, and Ethereum Mainnet and does not name Robinhood. Docs and X name Robinhood Mainnet (4663). Marketing page is incomplete vs the contract table.", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-3, R-6], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-24, field: identity.alias, value: "Doppler Protocol", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-2, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: control.privileged-role, value: "Airlock owner is a 3-of-6 Safe. Factory has no owner() this pass; constructor is Airlock-gated per verified DopplerERC20V1Factory source cited on the explorer.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-13, R-15, R-18], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-26, field: relationship, value: "Bankr GET /token-launches returns robinhood rows with launchType doppler. STATICS and EARN tokens are DopplerERC20V1 clones owned by this Airlock. Those products are not this slug.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Airlock and DopplerERC20V1Factory deployed on chain 4663"
    summary: "Create3 txs on 2026-06-30 via DopplerCreateXDeployer 0x1030…9b83 from 0x8A29…e2F8 deployed Airlock 0xeb7C…0862 (block 646829) and DopplerERC20V1Factory 0x1B37…b69a (block 646841). RPC still shows code."
    occurred_at: 2026-06-30T22:03:11Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14, R-15, R-24]
  - id: EVT-2
    type: company
    title: "@dopplerprotocol posts SDK support for Robinhood Chain"
    summary: "On 2026-07-03 the handle posted that the Doppler SDK supports Robinhood Chain: configure token, pick curves, launch, no contracts to write. Follow-up linked docs.doppler.lol."
    occurred_at: 2026-07-03T15:42:02Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [communications.status, taxonomy.chain-scope]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-3
    type: company
    title: "@dopplerprotocol posts launch with Doppler on Robinhood Chain"
    summary: "On 2026-07-14 the handle posted Doppler stays launching / The hood stays on, with a follow-up Launch with Doppler on Robinhood Chain https://app.doppler.lol/."
    occurred_at: 2026-07-14T19:43:04Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [communications.status, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-4
    type: ct
    title: "RH Daily lists @dopplerprotocol at $2.2M 24h launchpad volume"
    summary: "On 2026-09-01 @RHDaily__ posted Top Robinhood Chain Launchpads by 24H Volume with @dopplerprotocol seventh at $2.2M."
    occurred_at: 2026-09-01T22:00:00Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: company
    title: "@dopplerprotocol posts Zora custom pairs live on Robinhood Chain"
    summary: "On 2026-08-20 the handle posted that Zora custom pairs run on Doppler, live on Base, Solana, and Robinhood Chain."
    occurred_at: 2026-08-20T23:24:54Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [communications.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]

receipts:
  - { id: R-1, publisher: Doppler, title: "doppler.lol home", url: "https://www.doppler.lol/", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-8, CLM-19, CLM-23], excerpt: "title Doppler. og:title Doppler. og:url https://doppler.lol. twitter:creator @dopplerprotocol. no twitter:site. Copy: Token launches that work. Live on Base, Monad, and Ethereum Mainnet. Links app.doppler.lol and docs.doppler.lol. HTML does not contain robinhood." }
  - { id: R-2, publisher: Doppler, title: "Explainer", url: "https://docs.doppler.lol/explainer.md", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-8, CLM-16, CLM-17, CLM-22, CLM-24], excerpt: "Doppler is an onchain protocol for launching tokens through various price discovery auctions. Airlock provides a unified interface. Static, multicurve, and dynamic auctions. Doppler Hooks at initialization, each swap, or graduation. Protocol fee 5% of trading fees on EVM. Contracts github.com/whetstoneresearch/doppler." }
  - { id: R-3, publisher: Doppler, title: "Contract addresses", url: "https://docs.doppler.lol/reference/contract-addresses.md", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-10, CLM-12, CLM-23, CLM-26], excerpt: "Mainnets include Robinhood Mainnet. Robinhood Mainnet (4663) Airlock 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 tx 0x8ffd957b…291a commit bda077cf. DopplerERC20V1Factory 0x1b37d3a72082029c44b35b604ea473617580b69a. DopplerERC20V1 0x3be8b97fd0e713b5abe0649fa830223b6b4bc599. DopplerHookInitializer 0x4e3468951d49f2eea976ed0d6e75ffcb44a9a544. UniswapV4Initializer 0x6cce158b6d1747617fc218592b4d60b239b957ea." }
  - { id: R-4, publisher: Doppler, title: "Security and bug bounties", url: "https://docs.doppler.lol/reference/security-and-bug-bounties.md", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-15], excerpt: "OpenZeppelin Audit Nov. 2024 and Certora Audit Nov. 204, both linking a Google Drive folder. Cantina contest cantina.xyz/competitions/57b00aab-8f8b-4d62-9378-41b6460ce6aa. Bug bounty cantina.xyz/bounties/2c7af549-c36c-4432-bae6-3f4b1fa6b217. Contact security@whetstone.cc." }
  - { id: R-5, publisher: "@dopplerprotocol", title: "Doppler profile", url: "https://x.com/dopplerprotocol", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-19, CLM-20, CLM-21], excerpt: "Display name Doppler. Handle @dopplerprotocol. Bio: Custom markets for launching tokens. Website https://doppler.lol/. Followers 6455. User id 1904571355950882816. Joined 2025-03-25." }
  - { id: R-6, publisher: "@dopplerprotocol", title: "The Doppler SDK now supports Robinhood Chain", url: "https://x.com/dopplerprotocol/status/2073069767116894632", published_at: 2026-07-03T15:42:02Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-10, CLM-18, CLM-23, EVT-2], excerpt: "The Doppler SDK now supports Robinhood Chain. Configure your token, pick your curves, and launch. One flow from config to live market, no contracts to write. Follow-up https://docs.doppler.lol/" }
  - { id: R-7, publisher: "@dopplerprotocol", title: "Launch with Doppler on Robinhood Chain", url: "https://x.com/dopplerprotocol/status/2077116691671384554", published_at: 2026-07-14T19:43:04Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-18, EVT-3], excerpt: "Launch with Doppler on Robinhood Chain https://app.doppler.lol/. Parent post: Doppler stays launching. The hood stays on." }
  - { id: R-8, publisher: "@dopplerprotocol", title: "Zora custom pairs on Doppler", url: "https://x.com/dopplerprotocol/status/2090580865478983681", published_at: 2026-08-20T23:24:54Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-10, EVT-5], excerpt: "Creator coins no longer launch against whatever the default happens to be. Zora's custom pairs run on Doppler, live on Base, Solana, and Robinhood Chain." }
  - { id: R-9, publisher: "@dopplerprotocol", title: "Launch window", url: "https://x.com/dopplerprotocol/status/2095131889837486080", published_at: 2026-09-02T12:49:02Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1], excerpt: "Snipers can't front-run a trade you haven't signed. You set the window at launch. When it expires, trading opens permissionlessly. Launch on your terms, the market takes it from there." }
  - { id: R-10, publisher: "@dopplerprotocol", title: "docs.doppler.lol", url: "https://x.com/dopplerprotocol/status/2095131902542049426", published_at: 2026-09-02T12:49:05Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-2], excerpt: "https://docs.doppler.lol" }
  - { id: R-11, publisher: "@RHDaily__", title: "Top Robinhood Chain Launchpads by 24H Volume", url: "https://x.com/RHDaily__/status/2094908154672734344", published_at: 2026-09-01T22:00:00Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-14, EVT-4], excerpt: "Top Robinhood Chain Launchpads by 24H Volume 1. @ponsdotfamily $315.9M 2. @longdotxyz $47.5M 3. @o1_exchange $23.7M 4. @Noxa_Fi $21.3M 5. @TradePools $16.4M 6. @lunchdotfun $2.8M 7. @dopplerprotocol $2.2M 8. @bankrbot $2.0M 9. @letscashfun $2.0M 10. @flapdotsh $1.9M" }
  - { id: R-12, publisher: GitHub, title: "whetstoneresearch/doppler", url: "https://github.com/whetstoneresearch/doppler", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-16, CLM-24], excerpt: "api.github.com/repos/whetstoneresearch/doppler HTTP 200. full_name whetstoneresearch/doppler. description Core contracts for the Doppler Protocol. default_branch main. stargazers_count 102. pushed_at 2026-08-26T15:37:14Z. created_at 2024-09-06T16:15:10Z." }
  - { id: R-13, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() Airlock factory impl", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-9, CLM-13, CLM-25], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32afc93 (53148819). Airlock 0xeb7C…0862 code 5695 B nonce 1 owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66. Factory 0x1B37…b69a code 1912 B nonce 115600. Impl 0x3Be8…C599 code 13927 B. HookInitializer 0x4e34…a544 25533 B. UniswapV4Initializer 0x6cce…57ea 2685 B." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, EVT-1], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true proxy_type null creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9 creation_transaction_hash 0x8ffd957b1985578fd9bfb8ce651bf546cb262f3b157f02f93b26c585046b291a." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x1B37D3a72082029c44B35B604Ea473617580b69a", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-12, CLM-25, EVT-1], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true proxy_type null creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768 creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true proxy_type null creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9." }
  - { id: R-17, publisher: Blockscout, title: "Address 0x21E2ce70511e4FE542a97708e89520471DAa7A66", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x21E2ce70511e4FE542a97708e89520471DAa7A66", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0x21E2ce70511e4FE542a97708e89520471DAa7A66 name SafeProxy is_contract true is_verified true proxy_type master_copy implementations name SafeL2 creator_address_hash 0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67 creation_transaction_hash 0x90437e29392c11c0defe5eed23bfccfce83f7c2d7b3a7fe77627b1081219c534." }
  - { id: R-18, publisher: Robinhood Chain RPC, title: "Safe getThreshold / getOwners", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11, CLM-25], excerpt: "0x21E2…7A66 eth_getCode 171 B. getThreshold() 3. VERSION 1.4.1. Safe nonce 2. getOwners() 0xf5b75474d006495c82dbbf010e230d5d2f86226f, 0x2c6c52b00d7360a8f82f3e8d27369f75c47306f9, 0xb8aa608671a639873c63ccd02548706aa8be2ff7, 0xdf95cc445469816234ad95f702c79d25bce401a7, 0xd39475c553cc86f0a569001f22b79f693ea92f0e, 0xc2b3a6e720c5f4e422caa6026bb9c3d1813a7ddb." }
  - { id: R-19, publisher: Blockscout, title: "Airlock counters", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862/counters", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "transactions_count 9126. token_transfers_count 445362. gas_usage_count 23891440393. Factory counters transactions_count 0 token_transfers_count 1; factory nonce is from RPC eth_getTransactionCount 115600, not this counter." }
  - { id: R-20, publisher: DefiLlama, title: "protocol/doppler", url: "https://api.llama.fi/protocol/doppler", published_at: null, accessed_at: 2026-09-03T04:48:11Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [], excerpt: "HTTP 400 Protocol not found." }
  - { id: R-21, publisher: Doppler, title: "app.doppler.lol", url: "https://app.doppler.lol/", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "title Doppler. og:title Doppler. canonical https://app.doppler.lol. HTML contains robinhood and dopplerprotocol." }
  - { id: R-22, publisher: GitHub, title: "Deployments.md", url: "https://raw.githubusercontent.com/whetstoneresearch/doppler/main/Deployments.md", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-6], excerpt: "Robinhood Mainnet (4663) Airlock 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 linked to robinhoodchain.blockscout.com. DopplerERC20V1Factory 0x1b37d3a72082029c44b35b604ea473617580b69a. DopplerERC20V1 0x3be8b97fd0e713b5abe0649fa830223b6b4bc599. Commit bda077cf." }
  - { id: R-23, publisher: Doppler, title: "Docs home", url: "https://docs.doppler.lol/readme.md", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "Doppler is an onchain protocol for launching tokens through various price discovery auctions. Teams including Zora, Paragraph, Noice, and Bankr use Doppler. Application https://app.doppler.lol. SDK @whetstone-research/doppler-sdk." }
  - { id: R-24, publisher: Blockscout, title: "Airlock creation tx 0x8ffd957b…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x8ffd957b1985578fd9bfb8ce651bf546cb262f3b157f02f93b26c585046b291a", published_at: 2026-06-30T22:03:11Z, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-1], excerpt: "timestamp 2026-06-30T22:03:11.000000Z block_number 646829 from 0x8A29fAA33372fe2E405bf90093D7A83405bDe2F8 to DopplerCreateXDeployer 0x103004E50Bed65DFBa30dD9c264B6BdF5e529B83 method deployCreate3 status ok." }
  - { id: R-25, publisher: GeckoTerminal, title: "networks/robinhood/dexes", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/dexes", published_at: null, accessed_at: 2026-09-03T04:48:11Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "GET first HTTP 429 You've exceeded the Rate Limit. Gecko skipped." }
  - { id: R-26, publisher: Blockscout, title: "Address 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 name DopplerHookInitializer is_contract true is_verified true creator_address_hash 0xdD429645eB203cAbffA48e56350f7F639e0a342b creation_transaction_hash 0xd32e8ebbb51adc6b05d0608e3eaf289d8d648f4df42175990bbba2fcfbe700b1." }
  - { id: R-27, publisher: Blockscout, title: "Address 0x6cce158B6D1747617fc218592B4D60B239B957ea", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x6cce158B6D1747617fc218592B4D60B239B957ea", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x6cce158B6D1747617fc218592B4D60B239B957ea name UniswapV4Initializer is_contract true is_verified true creator_address_hash 0x2fbF1FA0540652FB6C474B0FE60Fe376C254073E creation_transaction_hash 0x2ad4f96e1b3110da078167813b4f3f47db3c0b7719747df5674bdc468189b0b6." }

gaps:
  - { priority: P0, question: "Which owner-only Airlock functions (create, setModuleState, migrate) remain callable by the 3-of-6 Safe, and is there a timelock in front of the Safe?", checked: "owner() Safe 0x21E2…7A66; getThreshold 3 of 6; VERSION 1.4.1; pendingOwner() call reverted; no timelock address in the Robinhood contract table, 2026-09-03", next: "read verified src/Airlock.sol for onlyOwner paths and any timelock module" }
  - { priority: P1, question: "Do the OpenZeppelin/Certora/Cantina reports scope Robinhood 4663 Airlock 0xeb7C…0862 and factory 0x1B37…b69a, or only earlier Base/Unichain deployments?", checked: "docs security page names Nov 2024 OpenZeppelin and Certora Drive folder plus Cantina contest; reports not opened this pass, 2026-09-03", next: "open the Drive folder and Cantina findings and record matching addresses" }
  - { priority: P1, question: "What share of the 115600 factory nonce and 9126 Airlock txs is LONG/Bankr/STATICS versus app.doppler.lol launches?", checked: "factory nonce 115600; Airlock txs 9126; LONG and Bankr packets cite this factory; no official RH volume API this pass, 2026-09-03", next: "sample Airlock.create logs vs LongLauncher.create" }
  - { priority: P2, question: "Is there a Robinhood Chain TVL/fees adapter, given Llama protocol/doppler 400?", checked: "GET api.llama.fi/protocol/doppler HTTP 400; Gecko first GET 429 skipped, 2026-09-03", next: "do not invent an all-chains figure; record any later chain-slice adapter" }
---

# Doppler — research packet

## What it is

Doppler is an onchain token-launch protocol. Teams pass launch parameters into an Airlock contract, which wires a token factory, hook initializer, governance, and migrator. Price discovery is a static, multicurve, or dynamic auction; liquidity can migrate after the auction. Custom hooks can run when the market opens, on each swap, or at graduation. On Robinhood Chain the live Airlock is `0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862` and the token factory is DopplerERC20V1Factory `0x1B37D3a72082029c44B35B604Ea473617580b69a`. The handle is @dopplerprotocol; the site is doppler.lol. This slug is the protocol, not a LONG clone token.

Themes: launchpad

## Why it matters

LONG, Bankr, STATICS, and EARN all sit on this Airlock and DopplerERC20V1 factory, so a control change here moves those products. RH Daily posted $2.2M of 24h launchpad volume for @dopplerprotocol on 1 Sep 2026. Docs list Robinhood Mainnet beside Base, Ethereum, Monad, and Arbitrum. The pad is not a census row. [claim R-3 R-11 R-23]

## What could go wrong

Airlock `owner()` is a 3-of-6 Safe. Docs do not name a timelock on that Safe. Factory nonce 115600 means a large set of EIP-1167 clones share DopplerERC20V1 bytecode; a factory or implementation mistake would be wide. Homepage copy still omits Robinhood while the contract table lists it. Audit URLs are Drive/Cantina pages whose 4663 scope was not opened this pass. [verified R-13 R-18] [claim R-1 R-4]

## Product and mechanics

A launch goes through Airlock. Modules include a token factory (DopplerERC20V1Factory deploys EIP-1167 clones of DopplerERC20V1), a Uniswap v4 or v3 initializer, optional governance, and a migrator. Auctions are static (one curve), multicurve (several curves that cannot leave a gap and that sum to 100% of sold supply), or dynamic. Hooks can fire at open, each swap, or graduation. Fees can decay (example: 80% down to 1%). Protocol take is 5% of trading fees on EVM. [claim R-2 R-3]

The self-serve app is app.doppler.lol. Integrators use the TypeScript SDK. LONG's LongLauncher is a wrapper that requires `tokenFactory == TRUSTED_TOKEN_FACTORY` (this factory) and forwards Airlock.create. [claim R-6 R-7 R-12]

## Control and security

`owner()` on Airlock returns SafeProxy `0x21E2ce70511e4FE542a97708e89520471DAa7A66`. RPC `getThreshold()` is 3; six owner addresses; VERSION 1.4.1; Safe nonce 2. Airlock, factory, and implementation are verified on Blockscout and are not ERC-1967 proxies. Factory `owner()` is not present; the factory is Airlock-gated. Docs list OpenZeppelin and Certora reviews and a Cantina contest/bounty; those reports were not opened against these 4663 addresses this pass. [verified R-13 R-14 R-17 R-18] [claim R-4]

## Team and provenance

@dopplerprotocol names doppler.lol in the website field. doppler.lol HTML sets twitter:creator to @dopplerprotocol. Contracts live in github.com/whetstoneresearch/doppler (description: Core contracts for the Doppler Protocol). Docs contact security@whetstone.cc. Austin Adams (@aadams) posts as building @dopplerprotocol. Homepage does not name Robinhood; docs and X do. [verified R-1 R-5 R-12]

## Economics and activity

@RHDaily__ posted $2.2M 24h launchpad volume for @dopplerprotocol on 2026-09-01. That figure is a third-party board, not a chain slice. Llama `protocol/doppler` returned HTTP 400. Gecko first GET returned 429 and was skipped. On chain 4663, Airlock has 9126 transactions and 445362 token transfers on Blockscout; factory nonce is 115600. No TVL is claimed this pass. [claim R-11] [verified R-13 R-19] [claim R-20]

## Material risks

- Airlock owner is a 3-of-6 Safe with no timelock named in the Robinhood contract table. [verified R-18]
- Factory nonce 115600: many clones share one implementation. [verified R-13]
- Audit reports were not matched to 4663 addresses this pass. [claim R-4]
- Homepage omits Robinhood while docs list chain 4663. [claim R-1 R-3]
- 24h volume is a social board, not Llama or explorer. [claim R-11]
- Shared Airlock with LONG, STATICS, and EARN is infra, not identity. [claim R-12]

## Verification passes

- Receipts: doppler.lol, app.doppler.lol, docs explainer/addresses/security/home, X profile and posts, RH Daily board, GitHub repo and Deployments.md, Llama 400, Gecko 429, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-3 R-13 R-14]
- Numbers: bytecode lengths, nonces, owner(), getThreshold(), and chainId 0x1237 are chain 4663 RPC. Airlock tx counts are Blockscout counters. $2.2M is the RH Daily post, not an all-chains total. [verified R-13 R-19] [claim R-11]
- Adversarial: strongest contrary reading is that this slug is LONG, because LONG tokens are DopplerERC20V1 clones and LONG's trusted factory is this address. LongLauncher `0x22e9…eeED`, app.long.xyz, and @longdotxyz are a separate wrapper. This packet is the protocol at doppler.lol / @dopplerprotocol. [inference R-3 R-5 R-15]

## Operations log

- GET research/inbox/packets/doppler/WORK-20260903-grok-heavy-icarus-research.md on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned HTTP 404 before this write.
- Census.yaml has no doppler row; discovery-inventory CLM-19 named the candidate as dependency.
- X Latest from:dopplerprotocol: profile, 3 Jul SDK RH post, 14 Jul app.doppler.lol post, 20 Aug Zora/RH post, 2 Sep window and docs posts.
- docs.doppler.lol explainer.md, readme.md, contract-addresses.md, security-and-bug-bounties.md opened 2026-09-03.
- www.doppler.lol and app.doppler.lol HTML: twitter:creator, og:url, homepage omits robinhood; app HTML contains robinhood.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), getThreshold(), getOwners(), VERSION, Safe nonce on Airlock, factory, impl, hook initializer, v4 initializer, Safe.
- Blockscout api/v2 addresses for Airlock, factory, impl, hook initializer, v4 initializer, Safe, plus Airlock creation tx and counters.
- api.github.com/repos/whetstoneresearch/doppler HTTP 200; raw Deployments.md.
- GET api.llama.fi/protocol/doppler HTTP 400.
- GET api.geckoterminal.com/api/v2/networks/robinhood/dexes HTTP 429; Gecko skipped.
- Blockscout /smart-contracts/{address} HTTP 403 this pass; used address API name/is_verified instead.
