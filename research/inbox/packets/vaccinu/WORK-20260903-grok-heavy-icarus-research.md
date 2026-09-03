---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: vaccinu
name: VACCINU
packet_tier: seed
as_of: 2026-09-03T03:43:00Z
prior_packet: null
supersedes: null
owned_slugs: [vaccinu]
allowed_paths:
  - research/inbox/packets/vaccinu/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: VACCINU
  aliases: []
  symbols: [VACCINU]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token info websites []; tokenURI IPFS social_links Website is an X status URL, not a domain; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials lists x.com/VaccinuRH; @VaccinuRH bio contains CA 0xcf19…1e18 and $VACCINU/MRNA; Gecko twitter_handle null; no site or bidirectional official-crosslink this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, tokenURI IPFS, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-address]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "VACCINU is a graduation token at 0xcF19…1E18 created through that LongLauncher.create into a VACCINU/MRNA book"
        - "No shared domain or handle; VACCINU has no official site this pass"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot using the same DopplerERC20V1Factory 0x1B37…b69a and Airlock 0xeb7C…0862"
        - "VACCINU create tx 0xb226…cf0c is LongLauncher.create from EOA 0xcF2e…61eD, not a Bankr EntryPoint row; GET api.bankr.bot/token-launches latest 50 had 0 VACCINU hits"
        - "Gecko labels the pool dex bankr-robinhood because the book uses DopplerHookInitializer, not because Bankr minted it"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "VACCINU is ticker VACCINU at 0xcF19…1E18 paired to MRNA 0x43B0…2155"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xcF19…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; owner() is Airlock 0xeb7C…0862; LongLauncher.create minted VACCINU into Uniswap v4 pool 0xe4fc…e5e6 quoted against MRNA 0x43B0…2155, which GET rhj/assets lists as Moderna • Robinhood Token. No official site this pass. [R-1] [R-4] [R-5] [R-8] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/VaccinuRH", authenticity: unconfirmed }

deployments:
  - label: VACCINU token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xcF1968747bC573294e468FD0cDaB0Dc61B971E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-4]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory (create tokenFactory)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: LongLauncher (create() target)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-13]
  - label: Airlock (token owner())
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-14]
  - label: MRNA Moderna • Robinhood Token (pair quote / numeraire)
    role: token
    address:
      value: "0x43B07D15cE533bEc5476d70C22a78a1B2B662155"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-11, R-12]

metrics:
  - { kind: volume_24h, value: 3038939.61, currency: USD, as_of: 2026-09-03T03:43:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe4fcea2c4b8fdbd2adf3317b8253b6967ff9e542bfba310642ea81a8b09ce5e6 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 263032.57, currency: USD, as_of: 2026-09-03T03:43:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe4fcea2c4b8fdbd2adf3317b8253b6967ff9e542bfba310642ea81a8b09ce5e6 reserve_in_usd (VACCINU/MRNA pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 839408.33, currency: USD, as_of: 2026-09-03T03:43:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe4fcea2c4b8fdbd2adf3317b8253b6967ff9e542bfba310642ea81a8b09ce5e6 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 1497, currency: null, as_of: 2026-09-03T03:43:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xcF1968747bC573294e468FD0cDaB0Dc61B971E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-5, R-6], result: "eth_blockNumber 53108816. Token 0xcF19…1E18 eth_getCode 44 bytes EIP-1167 impl 0x3be8b97f…c599. name VACCINU, symbol VACCINU, decimals 18, totalSupply 1e27. owner() Airlock 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. isPoolLocked true. pool() 0xdead…dead. controller() zero. tokenURI ipfs://bafkreibcljjoctwvjumj6eo5oyple6halixhxbvr4rxpjn3xexeyrabp4y. vestingStart 1788302197. Airlock code 5695 B; factory 1912 B; impl 13927 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-12, R-13, R-14, R-15], result: "Blockscout api/v2 token 0xcF19…1E18 name/symbol VACCINU holders_count 1497 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. Token creator_address_hash null this pass. create tx 0xb226…cf0c 2026-09-01T22:36:37Z block 52080299 from EOA 0xcF2e…61eD to LongLauncher 0x22e9…eeED method create. LaunchCreated normalizedTicker VACCINU numeraire MRNA 0x43B0…2155 launcher 0xcF2e…61eD poolId 0xe4fc…e5e6. MRNA BeaconProxy name Moderna, Inc. • Robinhood Token." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:43:00Z, receipt_ids: [R-7, R-8, R-9, R-10, R-23], result: "DexScreener pair 0xe4fc…e5e6 robinhood uniswap v4 VACCINU/MRNA liquidity.usd 252552.02 volume.h24 3078005.72 fdv/marketCap 851693 pairCreatedAt 1788302197 info.websites [] info.socials x.com/VaccinuRH. Gecko pool name VACCINU / mrna dex bankr-robinhood volume_usd.h24 3038939.61 reserve_in_usd 263032.57 fdv_usd 839408.33 pool_created_at 2026-09-01T22:36:37Z. Gecko token volume_usd.h24 3069023.31 (all pools). Gecko token info websites [] twitter_handle null." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:39:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; MRNA hit tokenName Moderna • Robinhood Token deployments contractAddress 0x43B07D15cE533bEc5476d70C22a78a1B2B662155 chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-6, R-15], result: "Create tx logs: OwnershipTransferred to Airlock; mint 1e27 to Airlock; PoolManager Initialize id 0xe4fc…e5e6 currency0 MRNA currency1 VACCINU hooks DopplerHookInitializer 0x4e34…a544; Lock beneficiaries 5% 0x21E2…7A66 and 95% launcher 0xcF2e…61eD; Airlock Create asset VACCINU numeraire MRNA. Launcher eth_getCode 0x. Airlock owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create forwards an Airlock/Doppler launch: EIP-1167 DopplerERC20V1 clone, 1e9*1e18 supply, Uniswap v4 pool quoted against factory numeraire MRNA, LP locked (isPoolLocked true; pool() 0xdead). Tx 0xb226…cf0c from 0xcF2e…61eD minted VACCINU / VACCINU as normalizedTicker VACCINU.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-5, R-6, R-15], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "VACCINU", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "VACCINU", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xcF1968747bC573294e468FD0cDaB0Dc61B971E18", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-7, R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener lists x.com/VaccinuRH; @VaccinuRH bio has the CA; Gecko twitter_handle null; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-7, R-10, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote MRNA 0x43B0…2155 is Moderna • Robinhood Token in GET rhj/assets (194 assets). Create path is LongLauncher, not Pons. Gecko dex id bankr-robinhood is the Doppler hook book; Bankr API latest 50 had no VACCINU. Distinct from census Artificial Inu ($AI/NVDA).", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-11, R-12, R-23], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "VACCINU/MRNA Uniswap v4 24h volume 3038939.61 USD and reserve_in_usd 263032.57 at 2026-09-03T03:43:00Z (Gecko pool slice, not Gecko token all-pools 3069023.31)", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 252552.02 volume.h24 3078005.72 fdv/marketCap 851693 at 2026-09-03T03:43:00Z", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1497, class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66. Launcher 0xcF2e…61eD has no code.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-5, R-6, R-14], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "LaunchCreated launcher 0xcF2eCe61d3Eca9802D03bc71e97e8dC4C9F161eD equals IPFS fee_receiver; DopplerHookInitializer Lock beneficiaries 95% that launcher and 5% 0x21E2…7A66", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-15, R-16], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is MRNA 0x43B07D15cE533bEc5476d70C22a78a1B2B662155; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xe4fc…e5e6; hooks DopplerHookInitializer 0x4e34…a544", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-7, R-8, R-15], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; create() target is LongLauncher 0x22e9…eeED and tokenFactory DopplerERC20V1Factory 0x1B37…b69a, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-3, R-4, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, tokenURI IPFS, or X search this pass", class: unknown, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener socials x.com/VaccinuRH; bio pins CA 0xcf19…1e18; IPFS Website field is x.com/morningxbt/status/2094917131376742737, not a project domain. Flag third-party-link on that status URL.", class: claim, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-7, R-16, R-17, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 839408.33; DexScreener fdv/marketCap 851693. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x43B07D15cE533bEc5476d70C22a78a1B2B662155", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token info websites []; IPFS social_links Website is an X status", class: claim, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-7, R-10, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "vaccinu | VACCINU | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Ticker collision: Blockscout search lists many Vaccinu-named tokens including VACCCINU 0x6473…1E18 (same DopplerERC20V1 factory, holders_count 4). Solana pumpfun VACCINU is wrong-chain. @vaccinu is a 2021 Vaccine Inu account, not this CA. Flag ca-collision and handle-collision.", class: claim, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko VACCINU/MRNA 24h volume $3.04M, reserve $263k"
    summary: "Gecko pool 0xe4fc…e5e6 volume_usd.h24 3038939 reserve_in_usd 263032 fdv_usd 839408."
    occurred_at: 2026-09-03T03:43:00Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "Third-party post pushed a netlify claim URL for $VACCINU"
    summary: "@ITSYABOIRAZOR posted CA 0xcF19…1E18 with crypto-keo.netlify.app/claim. Flag copypasta-pattern."
    occurred_at: 2026-09-03T03:30:14Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-3
    type: ct
    title: "@ChudCrentis listed VACCINU/MRNA among stock pairs"
    summary: "Post named VACCINU/MRNA with A/DELL, SPACEHOOD/SPCX, MD/AMD, HA/BB, APES/AMC."
    occurred_at: 2026-09-03T02:38:39Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-4
    type: ct
    title: "@VaccinuRH posted Vaccinu mode activated"
    summary: "Account whose bio pins 0xcf19…1e18 posted Vaccinu mode activated with a meme image."
    occurred_at: 2026-09-02T13:16:31Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: onchain
    title: "LongLauncher.create minted VACCINU against MRNA"
    summary: "Tx 0xb226…cf0c from 0xcF2e…61eD at 2026-09-01T22:36:37Z; LaunchCreated ticker VACCINU."
    occurred_at: 2026-09-01T22:36:37Z
    observed_at: 2026-09-03T03:42:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-15]
  - id: EVT-6
    type: ct
    title: "@morningxbt posted the vaccinu / MRNA narrative"
    summary: "Post at 22:35:40Z; tokenURI IPFS lists that status as Website. Pool created 57s later."
    occurred_at: 2026-09-01T22:35:40Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-16, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xcF19…1E18 VACCINU", url: "https://robinhoodchain.blockscout.com/address/0xcF1968747bC573294e468FD0cDaB0Dc61B971E18", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xcF1968747bC573294e468FD0cDaB0Dc61B971E18 name VACCINU is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol VACCINU decimals 18 total_supply 1000000000000000000000000000 holders_count 1497 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "LongLauncher create tx 0xb226faf5…cf0c", url: "https://robinhoodchain.blockscout.com/tx/0xb226faf52016d8fce28462a14ef561665be7bb6f766f812c9408e075e27fcf0c", published_at: 2026-09-01T22:36:37Z, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-14, CLM-16, EVT-5], excerpt: "timestamp 2026-09-01T22:36:37.000000Z status ok result success block_number 52080299 from 0xcF2eCe61d3Eca9802D03bc71e97e8dC4C9F161eD (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data tokenFactory 0x1B37…b69a numeraire 0x43B0…2155." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on VACCINU", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 53108816. Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name VACCINU symbol VACCINU decimals 18 totalSupply 1e27. owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. Impl code 13927 B. Factory code 1912 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "isPoolLocked, pool(), tokenURI, Airlock owner()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-13, CLM-21], excerpt: "isPoolLocked true. pool() 0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead. controller() zero. tokenURI ipfs://bafkreibcljjoctwvjumj6eo5oyple6halixhxbvr4rxpjn3xexeyrabp4y. vestingStart 1788302197. Airlock 0xeb7C…0862 owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66 code 5695 B. Launcher 0xcF2e…61eD code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens VACCINU", url: "https://api.dexscreener.com/latest/dex/tokens/0xcF1968747bC573294e468FD0cDaB0Dc61B971E18", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "14 robinhood uniswap pairs. Top pairAddress 0xe4fcea2c4b8fdbd2adf3317b8253b6967ff9e542bfba310642ea81a8b09ce5e6 labels v4 base VACCINU quote Moderna • Robinhood Token / MRNA 0x43B07D15…2155 liquidity.usd 252552.02 volume.h24 3078005.72 fdv 851693 marketCap 851693 pairCreatedAt 1788302197. info.websites [] info.socials x.com/VaccinuRH." }
  - { id: R-8, publisher: GeckoTerminal, title: "VACCINU/MRNA pool (dex bankr-robinhood)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe4fcea2c4b8fdbd2adf3317b8253b6967ff9e542bfba310642ea81a8b09ce5e6", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name VACCINU / mrna pool_created_at 2026-09-01T22:36:37Z fdv_usd 839408.3295 market_cap_usd null volume_usd.h24 3038939.61095069 reserve_in_usd 263032.5663 transactions.h24 buys 12796 sells 13635. dex bankr-robinhood quote robinhood_0x43b07d15ce533bec5476d70c22a78a1b2b662155." }
  - { id: R-9, publisher: GeckoTerminal, title: "VACCINU token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xcF1968747bC573294e468FD0cDaB0Dc61B971E18", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name VACCINU symbol VACCINU decimals 18 total_supply 1e27 price_usd 0.0008394083295 fdv_usd 839408.32946164 market_cap_usd null volume_usd.h24 3069023.31179642 total_reserve_in_usd 154253.00. coingecko_coin_id null. Top pool 0xe4fc…e5e6." }
  - { id: R-10, publisher: GeckoTerminal, title: "VACCINU token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xcF1968747bC573294e468FD0cDaB0Dc61B971E18/info", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-23], excerpt: "websites [] twitter_handle null telegram_handle null description null gt_verified false categories Inu. holders.count 1458 last_updated 2026-09-03T02:40:33Z." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets MRNA Stock Token", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. MRNA tokenName Moderna • Robinhood Token deployments contractAddress 0x43B07D15cE533bEc5476d70C22a78a1B2B662155 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-12, publisher: Blockscout, title: "Token 0x43B0…2155 Moderna • Robinhood Token / MRNA", url: "https://robinhoodchain.blockscout.com/address/0x43B07D15cE533bEc5476d70C22a78a1B2B662155", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x43B07D15cE533bEc5476d70C22a78a1B2B662155 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Moderna, Inc. • Robinhood Token symbol MRNA decimals 18." }
  - { id: R-13, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305. RPC eth_getCode 5826 B." }
  - { id: R-14, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true file_path src/Airlock.sol compiler v0.8.26 is_partially_verified true." }
  - { id: R-15, publisher: Blockscout, title: "LaunchCreated / Initialize / Lock logs on create tx", url: "https://robinhoodchain.blockscout.com/tx/0xb226faf52016d8fce28462a14ef561665be7bb6f766f812c9408e075e27fcf0c", published_at: 2026-09-01T22:36:37Z, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-15, EVT-5], excerpt: "LaunchCreated asset 0xcF19…1E18 numeraire 0x43B0…2155 launcher 0xcF2e…61eD normalizedTicker VACCINU deployedAt 1788302197. PoolManager Initialize id 0xe4fc…e5e6 hooks 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544. Lock beneficiaries 5% 0x21E2…7A66 95% 0xcF2e…61eD." }
  - { id: R-16, publisher: IPFS, title: "tokenURI metadata bafkreibcljjoctwvjumj6eo5oyple6halixhxbvr4rxpjn3xexeyrabp4y", url: "https://gateway.pinata.cloud/ipfs/bafkreibcljjoctwvjumj6eo5oyple6halixhxbvr4rxpjn3xexeyrabp4y", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: other, authority: onchain, authenticity: unconfirmed, supports: [CLM-14, CLM-19, CLM-23, EVT-6], excerpt: "name VACCINU description empty social_links Website https://x.com/morningxbt/status/2094917131376742737 fee_receiver 0xcF2eCe61d3Eca9802D03bc71e97e8dC4C9F161eD vesting_recipients amount 0." }
  - { id: R-17, publisher: "@VaccinuRH", title: "Vaccinu mode activated", url: "https://x.com/VaccinuRH/status/2095138804180906235", published_at: 2026-09-02T13:16:31Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-4], excerpt: "Bio: Take the Vaccinu. 0xcf1968747bc573294e468fd0cdab0dc61b971e18 | $VACCINU/MRNA. Post: Vaccinu mode activated." }
  - { id: R-18, publisher: "@morningxbt", title: "no better narative then vaccinu", url: "https://x.com/morningxbt/status/2094917131376742737", published_at: 2026-09-01T22:35:40Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-6], excerpt: "with ai and mrna stocks running there's no better narative then vaccinu literally 12days ago mrna invented cancer vaccine" }
  - { id: R-19, publisher: "@ChudCrentis", title: "VACCINU/MRNA among stock pairs", url: "https://x.com/ChudCrentis/status/2095341442239488455", published_at: 2026-09-03T02:38:39Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "Higher for everything VACCINU/MRNA A/DELL SPACEHOOD/SPCX MD/AMD HA/BB APES/AMC" }
  - { id: R-20, publisher: "@ITSYABOIRAZOR", title: "$VACCINU holders claim URL", url: "https://x.com/ITSYABOIRAZOR/status/2095353648792363132", published_at: 2026-09-03T03:30:14Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "$VACCINU holders CA: 0xcF1968747bC573294e468FD0cDaB0Dc61B971E18 crypto-keo.netlify.app/claim?contract=0xcF196874… Flag copypasta-pattern." }
  - { id: R-21, publisher: Blockscout, title: "VACCCINU copycat 0x6473…1E18", url: "https://robinhoodchain.blockscout.com/address/0x6473928eA7e4Ce1dAB8Eb73645078c071Bf51E18", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "hash 0x6473928eA7e4Ce1dAB8Eb73645078c071Bf51E18 name VACCINU symbol VACCCINU holders_count 4 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-22, publisher: Blockscout, title: "DopplerHookInitializer 0x4e34…a544", url: "https://robinhoodchain.blockscout.com/address/0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 name DopplerHookInitializer is_contract true is_verified true file_path src/initializers/DopplerHookInitializer.sol compiler v0.8.26 is_partially_verified true." }
  - { id: R-23, publisher: GeckoTerminal, title: "Robinhood dexes includes bankr-robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/dexes", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "dex id bankr-robinhood name Bankr (Robinhood) is present alongside uniswap-v4-robinhood. VACCINU/MRNA pool relationship.dex is bankr-robinhood." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xcF19…1E18?", checked: "DexScreener info.websites [] info.socials x.com/VaccinuRH; Gecko twitter_handle null; IPFS Website is @morningxbt status; t.me/VaccinuRH is a contact page with no CA, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; ask whether @VaccinuRH or @morningxbt pins the LongLauncher create tx" }
  - { priority: P1, question: "Does the launcher EOA 0xcF2e…61eD map to a public handle?", checked: "create from and IPFS fee_receiver are that EOA with eth_getCode 0x; @VaccinuRH bio has CA not the EOA; @morningxbt post is the IPFS Website, 2026-09-03", next: "trace the EOA on Blockscout and any post that embeds 0xcF2e…61eD" }
  - { priority: P1, question: "Should Gecko dex bankr-robinhood be treated as Bankr-minted or as Doppler-hook taxonomy?", checked: "create tx is LongLauncher; Bankr token-launches latest 50 had 0 VACCINU; pool relationship.dex bankr-robinhood; hooks DopplerHookInitializer, 2026-09-03", next: "compare hook 0x4e34…a544 against a known Bankr launch and a known LONG launch" }
  - { priority: P2, question: "Which of the Blockscout Vaccinu-named tokens besides 0xcF19…1E18 share the VACCINU/MRNA book?", checked: "VACCCINU 0x6473…1E18 is a separate Doppler clone with 4 holders; DexScreener also has Vaccinu/PFE at 0xC17F…8001, 2026-09-03", next: "keep ca-collision on any new same-ticker 4663 deploy" }
---

# VACCINU — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against MRNA. LongLauncher.create from 0xcF2e…61eD minted VACCINU on 2026-09-01T22:36:37Z into pool 0xe4fc…e5e6 via DopplerERC20V1Factory and Airlock. Traders buy and sell VACCINU against the Moderna Robinhood Token. No official site was located this pass. DexScreener lists @VaccinuRH without a bidirectional official-crosslink.

Themes: memecoin, stock-paired:MRNA, rwa, inu

## Why it matters

The VACCINU/MRNA Uniswap v4 book printed about $3.04M of 24h volume on Gecko at collection, with the quote token the Moderna Robinhood Token in GET /rhj/assets. Gecko labels the pool Bankr (Robinhood) because the hook is DopplerHookInitializer; the create transaction is LongLauncher, not a Bankr API row.

## What could go wrong

USD liquidity figures on the VACCINU/MRNA book count both sides, and the quote side is MRNA, not USDG. Many same-name Vaccinu tokens exist on 4663, including VACCCINU 0x6473…1E18. No official handle was located, so comms surfaces stay unconfirmed-official.

## Product and mechanics

LongLauncher 0x22e9…eeED create() from 0xcF2e…61eD at 2026-09-01T22:36:37Z minted VACCINU / VACCINU supply 1e9*1e18 into Uniswap v4 poolId 0xe4fc…e5e6 quoted against MRNA. Token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock. isPoolLocked true and pool() is 0xdead. [verified R-4 R-5 R-6 R-15]

Secondary VACCINU/USDG and VACCINU/ETH books exist on DexScreener with far less liquidity than the MRNA book. Gecko dex id is bankr-robinhood; DexScreener labels the same pair uniswap v4. [verified R-7 R-8 R-23]

## Control and security

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. Launcher 0xcF2e…61eD has no code and receives 95% of the DopplerHookInitializer Lock split; 5% goes to 0x21E2…7A66. [verified R-6 R-15]

DopplerERC20V1, DopplerERC20V1Factory, Airlock, LongLauncher, and DopplerHookInitializer are partially verified on Blockscout (compiler v0.8.26). No audit report URL was located this pass. [verified R-2 R-3 R-13 R-14 R-22] [unknown]

## Team and provenance

No official domain was located. DexScreener info.websites is empty. tokenURI IPFS lists Website as @morningxbt status 2094917131376742737, posted 57 seconds before the pool. DexScreener lists @VaccinuRH; that bio contains the CA. Flag unconfirmed-official and third-party-link. [claim R-7 R-16 R-17 R-18]

## Economics and activity

VACCINU/MRNA Uniswap v4 24h volume is 3038939.61 USD and reserve_in_usd is 263032.57 at 2026-09-03T03:43:00Z from the Gecko pool endpoint. fdv_usd is 839408.33. Gecko token volume_usd.h24 is 3069023.31 across all pools, not the MRNA book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 252552.02, volume.h24 3078005.72, fdv/marketCap 851693. Blockscout holders_count 1497. Pair created 2026-09-01T22:36:37Z. [claim R-1 R-7]

## Material risks

- Quote token MRNA 0x43B0…2155 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is VACCINU plus MRNA, not a USDG backstop. [verified R-11 R-12]
- Gecko dex label bankr-robinhood can be read as a Bankr mint; the create tx is LongLauncher. [verified R-4 R-8]
- No official handle or domain this pass; @VaccinuRH is unconfirmed-official. [claim R-7 R-17]
- Same-ticker clones including VACCCINU 0x6473…1E18. Flag ca-collision. [claim R-21]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/MRNA and create tx 0xb226…cf0c, RPC name/symbol/owner/isPoolLocked/tokenURI, DexScreener, Gecko pool/token/info/dexes, /rhj/assets, IPFS tokenURI, @VaccinuRH, @morningxbt, @ChudCrentis, and the netlify claim post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-11]
- Numbers: 3038939.61 is the Gecko VACCINU/MRNA pool 24h volume, not the 3069023.31 token all-pools figure. Reserve 263032.57 is that pool. DexScreener 3078005.72 / 252552.02 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that VACCINU is a Bankr-official or Moderna-official product. Create is LongLauncher, Bankr API latest 50 has no row, and no official handle or domain was located. [inference R-4 R-11]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no vaccinu / VACCINU / 0xcF19…1E18. content/dependencies/stock-tokens.yaml MRNA is 0x43B07D15…2155.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, Airlock, MRNA, create tx 0xb226…cf0c, LaunchCreated/Initialize/Lock logs, holders, VACCCINU copycat. RPC eth_getCode/eth_call with Mozilla UA at block 53108816.
- Aggregators: DexScreener latest/dex/tokens and pairs; Gecko token, token/info, pool, dexes, bankr-robinhood pools.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, MRNA active at 0x43B0…2155.
- Social: X keyword VACCINU / from:VaccinuRH; user search VaccinuRH / Vaccinu; t.me/VaccinuRH contact page; @morningxbt status in tokenURI.
- Failed: Blockscout token creator_address_hash null (create tx used instead); Bankr token-launches latest 50 had 0 VACCINU; Gecko token info twitter_handle null; IPFS social Website is an X status.
- Time: collection 2026-09-03T03:30Z–2026-09-03T03:43Z.
