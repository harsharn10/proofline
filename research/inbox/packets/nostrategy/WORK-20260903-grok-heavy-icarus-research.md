---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: nostrategy
name: NOSTRATEGY
packet_tier: seed
as_of: 2026-09-03T04:10:00Z
prior_packet: null
supersedes: null
owned_slugs: [nostrategy]
allowed_paths:
  - research/inbox/packets/nostrategy/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: NOSTRATEGY
  aliases: ["buyhighselllow"]
  symbols: [NOSTRATEGY]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener latest/dex/tokens info is null and the pair page says Additional token info not available; Gecko token/info HTTP 429 this pass (not retried)"
  official_handle: "NULL — DexScreener info.socials absent; X user search for NOSTRATEGY returned unrelated @nostrategy / @Nostrategy3; @buyhiselllower display-name BuyHighSellLow does not embed CA 0xEbDb…1e18 this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, RPC, or X search this pass"
  possible_matches:
    - slug: saylormoon
      signals: [other]
      contrary_signals:
        - "SAYLORMOON is 0xD18528b39dA6464B3662c331a52181ecB15b1E18, name/symbol SAYLORMOON, Uniswap v4 SAYLORMOON/MSTR 0xd1c2…4751 created 2026-08-29"
        - "NOSTRATEGY is buyhighselllow at 0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18, Uniswap v4 NOSTRATEGY/MSTR 0x33ce…046c created 2026-09-02T14:53:47Z"
        - "Same quote rail MSTR 0xec26…da09 and same LongLauncher 0x22e9…eeED; different CA, ticker, and create tx"
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED; entity_kind protocol"
        - "NOSTRATEGY is the ERC-20 at 0xEbDb…1e18 created through LongLauncher.create; entity_kind token"
        - "No shared domain or handle; this pass located no official NOSTRATEGY site"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "NOSTRATEGY is 0xEbDb…1e18 paired to MSTR 0xec26…da09; different CA, quote asset, and no official site or handle"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [shared-deployer]
      contrary_signals:
        - "Census Bankr is @bankrbot, an agent runtime that mints DopplerERC20V1 clones via Airlock create(); entity_kind protocol"
        - "NOSTRATEGY create tx 0x2cc9…3050 calls LongLauncher.create, not Bankr's X/console path"
        - "Gecko maps this pool dex to bankr-robinhood; DexScreener dexId is uniswap labels v4; no shared handle"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xEbDb…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create minted buyhighselllow / NOSTRATEGY into Uniswap v4 pool 0x33ce…046c quoted against MSTR 0xec26…da09, a Robinhood Stock Token in GET /rhj/assets. Distinct from packed SAYLORMOON/MSTR 0xD185…1E18. No official site or handle this pass. [R-5] [R-6] [R-7] [R-8] [R-12] [R-19]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links: []

deployments:
  - label: NOSTRATEGY token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: null
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-5, R-7, R-4]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6]
  - label: DopplerERC20V1Factory
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4, R-6]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4, R-6]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6]
  - label: Quote asset MSTR stock token
    role: other
    address:
      value: "0xec262a75e413fAfD0dF80480274532C79D42da09"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-6, R-7, R-12]

metrics:
  - { kind: tvl, value: 44916.22, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xEbDb…1e18 pair 0x33ce…046c NOSTRATEGY/MSTR Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 1056171.31, currency: USD, as_of: 2026-09-03T04:04:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xEbDb…1e18 pair 0x33ce…046c NOSTRATEGY/MSTR volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 49169, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xEbDb…1e18 pair 0x33ce…046c fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 49177.4354, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x33ce…046c reserve_in_usd (NOSTRATEGY/MSTR pool, not Gecko token total_reserve_in_usd)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 1063521.49418495, currency: USD, as_of: 2026-09-03T04:04:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x33ce…046c volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 58242.74817, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x33ce…046c fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 1086487.61973809, currency: USD, as_of: 2026-09-03T04:04:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xEbDb…1e18 volume_usd.h24 (all pools, not the MSTR book)", class: claim, receipt_ids: [R-9] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-6], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a947d (53122173). Token 0xEbDb…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name buyhighselllow, symbol NOSTRATEGY, decimals 18, totalSupply 1e27. owner() 0xeb7C0347…0862. factory() reverts. EIP-1967 implementation slot zero. eth_getCode non-empty: DopplerERC20V1Factory 1912, LongLauncher 5826, DopplerERC20V1 13927, Airlock 5695, MSTR 283, PoolManager 24009. Create-from 0xfbb8…9971 code 0x." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-18], result: "Tx 0x2cc928e1…3050 timestamp 1788360827 (2026-09-02T14:53:47Z) block 52661379 (0x3238c83) status 0x1 method 0x882db707 to LongLauncher 0x22e9…eeED from 0xfbb8cf95…9971. Decoded data[1]/data[2] 1e27, data[3] numeraire 0xec26…da09, data[4] DopplerERC20V1Factory 0x1B37…b69a. Input ASCII buyhighselllow / NOSTRATEGY / ipfs://bafkreid45b2nqklbfppxugsprfbhkya36golpnlzhyx5qilet2j5qdwpyq. Mint Transfer from 0x0 to Airlock 1e27. OwnershipTransferred to Airlock. PoolManager Initialize poolId 0x33ce…046c currencies 0xEbDb…1e18 / 0xec26…da09. LaunchCreated normalizedTicker NOSTRATEGY numeraire MSTR hook 0x4e34…a544. Later Transfer to 0xdead." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0xEbDb…1e18) word0 numeraire 0xec26…da09; word1/word2 0xdead; word5 token 0xEbDb…1e18; word7/word8 1e27. Airlock owner() 0x21e2ce70…7a66. MSTR name() Strategy Inc. • Robinhood Token; symbol() MSTR." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7, R-14, R-25], result: "DexScreener latest/dex/tokens/0xEbDb…1e18: 18 robinhood uniswap pairs; top NOSTRATEGY/MSTR v4 0x33ce…046c quote 0xec26…da09 Strategy Inc. • Robinhood Token / MSTR liquidity.usd 44916.22 volume.h24 1056171.31 fdv/marketCap 49169 pairCreatedAt 1788360827000 (2026-09-02T14:53:47Z) txns.h24 buys 7840 sells 8471. info null. Pair page: Additional token info not available. Search q=NOSTRATEGY also lists robinhood 0xB170…5527 (NOSTRATEGY/ETH liq 40964.28) plus Solana and BSC copies." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:04:00Z, receipt_ids: [R-8, R-9, R-11], result: "Gecko token 0xebdb…1e18 name buyhighselllow symbol NOSTRATEGY decimals 18 total_supply 1e27 fdv_usd 52015.14 market_cap_usd null volume_usd.h24 1086487.61 total_reserve_in_usd 38233.31. Direct GET pools/0x33ce…046c HTTP 200 name NOSTRATEGY / MSTR volume_usd.h24 1063521.49 reserve_in_usd 49177.43 fdv_usd 58242.74 pool_created_at 2026-09-02T14:53:47Z dex bankr-robinhood. Token/info HTTP 429 this pass (not retried). Token/pools returned empty this pass. HTML og:title NOSTRATEGY/MSTR - buyhighselllow Price on Bankr (Robinhood)." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T04:07:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one MSTR hit tokenName Strategy Inc. • Robinhood Token deployments contractAddress 0xec262a75e413fAfD0dF80480274532C79D42da09 chainId 4663 status ASSET_STATUS_ACTIVE. Scan for NOSTRATEGY / buyhighselllow / 0xEbDb8acA returned 0 hits." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 ERC-20 created through LongLauncher.create; numeraire MSTR 0xec262a75e413fAfD0dF80480274532C79D42da09; canonical book Uniswap v4 NOSTRATEGY/MSTR 0x33ce54147a81c2954e98dc59ba775bcca164512b3f7a19d454e7afd14271046c", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "buyhighselllow", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-7, R-9], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "NOSTRATEGY", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-7, R-9], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info null; X user search returned unrelated handles; @buyhiselllower display-name BuyHighSellLow does not embed the CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-7, R-13, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote MSTR 0xec26…da09 is Strategy Inc. • Robinhood Token in GET /rhj/assets (194 assets, 1 MSTR hit, chainId 4663). Distinct from SAYLORMOON 0xD185…1E18, an earlier LongLauncher.create into SAYLORMOON/MSTR. MSTR is a rail, not this token.", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-12, R-6, R-19, R-7], reproduction_ids: [REP-3, REP-4, REP-6], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko NOSTRATEGY/MSTR 24h volume 1063521.49 USD and reserve_in_usd 49177.43 at 2026-09-03T04:04:00Z (direct pool GET, not Gecko token all-pools 1086487.61)", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 44916.22 volume.h24 1056171.31 fdv/marketCap 49169 at 2026-09-03T04:04:00Z", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: control.owner, value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-13, field: deployment.role, value: "Create tx to LongLauncher 0x22e9…eeED; decoded factory 0x1B37…b69a; Blockscout api/v2 Cloudflare 403 this pass so the pad is taken from the create tx, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: other, value: "Pair asset is MSTR 0xec262a75e413fAfD0dF80480274532C79D42da09; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x33ce…046c; Gecko dex id bankr-robinhood; Airlock getAssetData LP slots include 0xdead", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-6, R-7, R-8], reproduction_ids: [REP-2, REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-15, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on DexScreener, Gecko, RPC, or X search this pass", class: unknown, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "Gecko fdv_usd 58242.74 on the MSTR pool; DexScreener fdv/marketCap 49169; Gecko token fdv_usd 52015.14. Gecko token market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-18, field: deployment.address, value: "0xec262a75e413fAfD0dF80480274532C79D42da09", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-6, R-12, R-7], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-19, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-20, field: identity.domain, value: "NULL — DexScreener info null / Additional token info not available; Gecko token/info 429 this pass", class: claim, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-7, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: candidate, value: "nostrategy | NOSTRATEGY | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: control.proxy, value: "EIP-1167 clone of DopplerERC20V1 0x3Be8B97F…C599; EIP-1967 implementation slot zero", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-23, field: other, value: "DexScreener search q=NOSTRATEGY also listed robinhood 0xB1705605a732571059f9d1e66C89c61731305527 (131-byte code, name buyhighselllow / NOSTRATEGY, owner() reverts, NOSTRATEGY/ETH book) plus Solana and BSC copies; flag ca-collision wrong-chain on those other CAs", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-25, R-24], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-24, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Distinct from LONG the factory at app.long.xyz / @longdotxyz. NOSTRATEGY is one LongLauncher.create output; it does not operate LongLauncher, DopplerERC20V1Factory, or Airlock", class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "copypasta-pattern: @emberwispxNFT posted listing ID 8362 with robinhood-main-dex-vgm.netlify.app/vote/0xEbDb8acA…1e18; third-party-link, not an official surface", class: claim, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "24h volume is $1.056M on DexScreener NOSTRATEGY/MSTR and $1.064M on Gecko pool for that book, versus $1.086M Gecko token all-pools; fdv is $49,169 DexScreener vs $58,243 Gecko pool vs $52,015 Gecko token; a card that collapses them would misstate activity"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko NOSTRATEGY/MSTR 24h volume $1.06M, liquidity $49.2K"
    summary: "Gecko pool 0x33ce…046c volume_usd.h24 1063521 reserve_in_usd 49177 fdv_usd 58243."
    occurred_at: 2026-09-03T04:04:00Z
    observed_at: 2026-09-03T04:04:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: risk
    title: "X post linked a netlify vote URL with the CA"
    summary: "@emberwispxNFT posted $NOSTRATEGY listing ID 8362 and robinhood-main-dex-vgm.netlify.app/vote/0xEbDb…1e18. Flag copypasta-pattern."
    occurred_at: 2026-09-03T03:11:26Z
    observed_at: 2026-09-03T04:07:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-3
    type: onchain
    title: "LongLauncher create minted buyhighselllow / NOSTRATEGY"
    summary: "Tx 0x2cc9…3050 to LongLauncher at 2026-09-02T14:53:47Z; LaunchCreated ticker NOSTRATEGY numeraire MSTR pool 0x33ce…046c."
    occurred_at: 2026-09-02T14:53:47Z
    observed_at: 2026-09-03T04:06:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xEbDb…1e18 Cloudflare 403 this pass", url: "https://robinhoodchain.blockscout.com/address/0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: explorer, authority: onchain, authenticity: unconfirmed, supports: [CLM-13], excerpt: "GET api/v2/tokens and api/v2/addresses returned Cloudflare managed-challenge HTML (Just a moment). Page title via fetch: Robinhood Chain address details for 0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18 | Blockscout. Holders_count not re-read this pass." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "create tx 0x2cc928e1…3050", url: "https://rpc.mainnet.chain.robinhood.com", published_at: 2026-09-02T14:53:47Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-14, CLM-25, EVT-3], excerpt: "eth_getTransactionByHash 0x2cc928e19361adf8263d9df0ee6e55ef8356b9924895dfb908970f129a353050 from 0xfbb8cf95f34813fbbf959aedac2cf89ea6469971 to 0x22e99278308B393ea1260859B181AD7E78f5eeED input selector 0x882db707 block 52661379 timestamp 1788360827. Receipt status 0x1 16 logs. LaunchCreated ticker NOSTRATEGY. PoolManager Initialize poolId 0x33ce54147a81c2954e98dc59ba775bcca164512b3f7a19d454e7afd14271046c." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on NOSTRATEGY", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-15, CLM-19, CLM-21, CLM-22, CLM-24], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32a947d (53122173). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name buyhighselllow symbol NOSTRATEGY decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. EIP-1967 slot zero. Impl code 13927 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode factory, launcher, airlock, MSTR; getAssetData", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-9, CLM-12, CLM-14, CLM-18, CLM-19, CLM-25], excerpt: "block 53122173. DopplerERC20V1Factory 0x1B37…b69a code 1912 B. LongLauncher 0x22e9…eeED code 5826 B. Airlock 0xeb7C…0862 code 5695 B owner() 0x21e2ce70…7a66. MSTR 0xec26…da09 code 283 B name Strategy Inc. • Robinhood Token symbol MSTR. PoolManager 0x8366…0951 code 24009 B. getAssetData numeraire 0xec26…da09 token 0xEbDb…1e18 LP 0xdead supply 1e27. Create-from 0xfbb8…9971 code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens NOSTRATEGY", url: "https://api.dexscreener.com/latest/dex/tokens/0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-7, CLM-8, CLM-11, CLM-14, CLM-15, CLM-17, CLM-18, CLM-20, CLM-21], excerpt: "18 robinhood uniswap pairs. Top pairAddress 0x33ce54147a81c2954e98dc59ba775bcca164512b3f7a19d454e7afd14271046c labels v4 base buyhighselllow / NOSTRATEGY quote Strategy Inc. • Robinhood Token / MSTR 0xec262a75…da09 liquidity.usd 44916.22 volume.h24 1056171.31 fdv 49169 marketCap 49169 pairCreatedAt 1788360827000 txns.h24 buys 7840 sells 8471. info null." }
  - { id: R-8, publisher: GeckoTerminal, title: "NOSTRATEGY/MSTR Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x33ce54147a81c2954e98dc59ba775bcca164512b3f7a19d454e7afd14271046c", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-10, CLM-14, CLM-17, EVT-1], excerpt: "name NOSTRATEGY / MSTR address 0x33ce54147a81c2954e98dc59ba775bcca164512b3f7a19d454e7afd14271046c pool_created_at 2026-09-02T14:53:47Z fdv_usd 58242.74817 market_cap_usd null volume_usd.h24 1063521.49418495 reserve_in_usd 49177.4354 transactions.h24 buys 7702 sells 8364. relationships.dex.id bankr-robinhood." }
  - { id: R-9, publisher: GeckoTerminal, title: "buyhighselllow token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-10, CLM-17], excerpt: "name buyhighselllow symbol NOSTRATEGY decimals 18 total_supply 1e27 price_usd 0.00005201514559 fdv_usd 52015.1455920223 market_cap_usd null volume_usd.h24 1086487.61973809 total_reserve_in_usd 38233.31. coingecko_coin_id null." }
  - { id: R-11, publisher: GeckoTerminal, title: "NOSTRATEGY/MSTR pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x33ce54147a81c2954e98dc59ba775bcca164512b3f7a19d454e7afd14271046c", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-14], excerpt: "og:title NOSTRATEGY/MSTR - buyhighselllow Price on Bankr (Robinhood) | GeckoTerminal." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-18], excerpt: "HTTP 200. assets length 194. One MSTR hit: tokenSymbol MSTR tokenName Strategy Inc. • Robinhood Token deployments contractAddress 0xec262a75e413fAfD0dF80480274532C79D42da09 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE. NOSTRATEGY / buyhighselllow / 0xEbDb8acA 0 hits." }
  - { id: R-13, publisher: X user search, title: "user search NOSTRATEGY", url: "https://x.com/search?q=NOSTRATEGY", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8], excerpt: "X user search returned @nostrategy (무전략), @Nostrategy3, @Nostralogy, @nostrategyguide, @nostr4tegy. None embed CA 0xEbDb…1e18 or a Robinhood pair this pass." }
  - { id: R-14, publisher: DexScreener, title: "NOSTRATEGY/MSTR pair page", url: "https://dexscreener.com/robinhood/0x33ce54147a81c2954e98dc59ba775bcca164512b3f7a19d454e7afd14271046c", published_at: null, accessed_at: 2026-09-03T04:09:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-20], excerpt: "NOSTRATEGY/MSTR on Robinhood / Uniswap v4. Liquidity $44K FDV $49K Mkt Cap $49K. Pair created 13h 14m ago. Pooled NOSTRATEGY 665,111,465 / MSTR 97.60. Additional token info not available. Token 0xEbD…1e18 quote 0xec2…da09." }
  - { id: R-18, publisher: Robinhood Chain RPC, title: "Mint transfer from 0x0 on NOSTRATEGY", url: "https://rpc.mainnet.chain.robinhood.com", published_at: 2026-09-02T14:53:47Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, EVT-3], excerpt: "Receipt log L1 ERC-20 Transfer token 0xEbDb…1e18 from 0x0 to Airlock 0xeb7C…0862. L13 Transfer to 0xdead. L0 OwnershipTransferred previous 0x0 new Airlock." }
  - { id: R-19, publisher: Robinhood Chain RPC, title: "SAYLORMOON 0xD185…1E18 distinct CA", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "0xD18528b39dA6464B3662c331a52181ecB15b1E18 eth_getCode 44 B EIP-1167 same impl 0x3be8b97f…c599. name SAYLORMOON symbol SAYLORMOON owner() Airlock. Distinct from NOSTRATEGY 0xEbDb…1e18." }
  - { id: R-20, publisher: "@buyhiselllower", title: "display-name BuyHighSellLow, no CA this pass", url: "https://x.com/buyhiselllower", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8], excerpt: "Latest posts from @buyhiselllower mention $Vaccinu and $cameltoe. from:buyhiselllower (NOSTRATEGY OR 0xEbDb8acA OR buyhighselllow) did not return a post that embeds token 0xEbDb…1e18 this pass. Flag unconfirmed-official; not filed as official_handle." }
  - { id: R-21, publisher: "@emberwispxNFT", title: "$NOSTRATEGY netlify vote URL with CA", url: "https://x.com/emberwispxNFT/status/2095348918334718385", published_at: 2026-09-03T03:11:26Z, accessed_at: 2026-09-03T04:07:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-2], excerpt: "Attention $NOSTRATEGY Family! YOUR vote matters! Listing ID: 8362 https://robinhood-main-dex-vgm.netlify.app/vote/0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18 Flag copypasta-pattern third-party-link." }
  - { id: R-24, publisher: Robinhood Chain RPC, title: "colliding ticker 0xB170…5527", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-23], excerpt: "0xB1705605a732571059f9d1e66C89c61731305527 eth_getCode 131 B (not EIP-1167). name buyhighselllow symbol NOSTRATEGY. owner() reverts. Distinct bytecode from 0xEbDb…1e18." }
  - { id: R-25, publisher: DexScreener, title: "latest/dex/search NOSTRATEGY", url: "https://api.dexscreener.com/latest/dex/search?q=NOSTRATEGY", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-23], excerpt: "29 pairs. robinhood uniswap 0x33ce…046c base 0xEbDb8acA…1e18 buyhighselllow / NOSTRATEGY quote MSTR liq 44916.22 vol 1056171.31 created 2026-09-02T14:53:47Z. Also robinhood 0xB170…5527 NOSTRATEGY/ETH liq 40964.28; Solana pump CAs; BSC MSTRB pairs. Distinct from SAYLORMOON 0xD185…1E18." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xEbDb…1e18?", checked: "DexScreener info null / Additional token info not available; Gecko token/info 429; X user search returned unrelated handles; @buyhiselllower does not embed the CA, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P0, question: "What is Blockscout holders_count, proxy_type, and creator_address_hash for 0xEbDb…1e18?", checked: "api/v2 tokens and addresses Cloudflare 403 this pass; RPC confirmed EIP-1167 / name / symbol / owner / create tx, 2026-09-03", next: "re-fetch Blockscout api/v2 after the challenge clears; compare creator to DopplerERC20V1Factory 0x1B37…b69a" }
  - { priority: P1, question: "Why does Gecko map NOSTRATEGY/MSTR dex to bankr-robinhood while DexScreener labels Uniswap v4 and the create tx is LongLauncher?", checked: "Gecko pool relationships.dex.id bankr-robinhood; pool HTML Price on Bankr (Robinhood); DexScreener dexId uniswap labels v4; create to LongLauncher, 2026-09-03", next: "read Gecko dex metadata for bankr-robinhood and compare PoolManager hook 0x4e34…a544 / 0x6f02…0F77" }
  - { priority: P1, question: "Does colliding robinhood CA 0xB170…5527 share a create path with 0xEbDb…1e18?", checked: "131-byte code, owner() reverts, DexScreener NOSTRATEGY/ETH book liq ~$41K, 2026-09-03", next: "eth_getTransactionByHash on its creation if Blockscout indexer returns a creation tx" }
  - { priority: P2, question: "Does ipfs://bafkreid45b2nqklbfppxugsprfbhkya36golpnlzhyx5qilet2j5qdwpyq in the create calldata host a site or handle?", checked: "ASCII present in LongLauncher.create input; not opened this pass, 2026-09-03", next: "fetch the CID if a gateway returns JSON with a website or twitter field" }
---

# NOSTRATEGY — research packet

## What it is

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against the MSTR Robinhood Stock Token. Traders buy and sell NOSTRATEGY (token name buyhighselllow) on the NOSTRATEGY/MSTR book. No official site or handle was located this pass.

Themes: memecoin, stock-paired:MSTR, rwa

## Why it matters

The NOSTRATEGY/MSTR Uniswap v4 book printed about $1.06M of 24h volume on Gecko at collection, with quote token MSTR 0xec26…da09 listed in GET /rhj/assets as Strategy Inc. • Robinhood Token. That MSTR leg is a rail. An earlier LongLauncher output, SAYLORMOON 0xD185…1E18, uses the same quote and is a different contract.

## What could go wrong

USD liquidity figures on the NOSTRATEGY/MSTR book count both sides, and the quote side is MSTR, not USDG. Gecko labels the dex bankr-robinhood while DexScreener labels Uniswap v4. No official handle was located, so comms surfaces stay unconfirmed-official. DexScreener search reuses the NOSTRATEGY ticker on other CAs including robinhood 0xB170…5527 and Solana/BSC copies.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create(...) from EOA 0xfbb8…9971 at 2026-09-02T14:53:47Z minted buyhighselllow / NOSTRATEGY supply 1e9*1e18 into Uniswap v4 pool 0x33ce…046c with numeraire MSTR 0xec26…da09. LaunchCreated normalizedTicker NOSTRATEGY. owner() on the token returns Airlock 0xeb7C…0862. factory() reverts. Airlock getAssetData numeraire is that MSTR; LP slots include 0xdead. [verified R-4 R-5 R-6 R-18]

PoolManager is 0x8366…0951. Gecko pool maps this book to dex bankr-robinhood; DexScreener dexId is uniswap labels v4. Secondary NOSTRATEGY/USDG and NOSTRATEGY/ETH books exist on DexScreener with far less liquidity than the MSTR book. [verified R-7 R-8]

## Control and security

token owner() returns Airlock 0xeb7C…0862. Create caller 0xfbb8…9971 has no code. Airlock owner() returns 0x21e2ce70…7a66. DopplerERC20V1 bytecode is 13927 B at 0x3Be8…C599; Blockscout source verification was not re-read this pass (Cloudflare 403). No audit report URL was located this pass. [verified R-5 R-6] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info is null and the pair page says Additional token info not available. X user search for NOSTRATEGY returned unrelated accounts. @buyhiselllower uses display-name BuyHighSellLow and did not embed CA 0xEbDb…1e18 this pass. Flag unconfirmed-official. [claim R-7 R-13 R-14 R-20]

## Economics and activity

NOSTRATEGY/MSTR Uniswap v4 24h volume is 1063521.49 USD and reserve_in_usd is 49177.43 at 2026-09-03T04:04:00Z from the Gecko pool endpoint. fdv_usd is 58242.75. Gecko token volume_usd.h24 is 1086487.62 across all pools, not the MSTR book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 44916.22, volume.h24 1056171.31, fdv/marketCap 49169. Pair created 2026-09-02T14:53:47Z. Blockscout holders_count was not re-read this pass. [claim R-7]

## Material risks

- Quote token MSTR 0xec26…da09 is a Robinhood Stock Token rail in GET /rhj/assets; NOSTRATEGY is not that asset. [verified R-12 R-6]
- Pool USD reserve is NOSTRATEGY plus MSTR, not a USDG or WETH backstop. [claim R-7 R-8]
- No official handle or domain this pass. [claim R-7 R-13]
- Ticker NOSTRATEGY is reused by robinhood 0xB170…5527 and by Solana/BSC copies. [verified R-24 R-25]
- No audit report URL this pass. [unknown]
- A netlify /vote URL posted the CA; flag copypasta-pattern. [claim R-21]

## Verification passes

- Receipts: RPC name/symbol/owner/getCode/getAssetData and create tx 0x2cc9…3050, DexScreener token + pair page + search, Gecko token/pool/HTML, /rhj/assets, X user search, @buyhiselllower, and the netlify vote post were opened on 2026-09-03 and excerpts copied from the responses. Blockscout api/v2 was Cloudflare 403. [verified R-5 R-8 R-12]
- Numbers: 1063521.49 is the Gecko NOSTRATEGY/MSTR pool 24h volume, not the 1086487.62 token all-pools figure. Reserve 49177.43 is that pool. DexScreener 1056171.31 / 44916.22 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that NOSTRATEGY is the same name as SAYLORMOON/MSTR or an official Strategy product. SAYLORMOON is 0xD185…1E18 created 2026-08-29, and /rhj/assets lists MSTR 0xec26…da09 as the Stock Token, not this ERC-20. [inference R-12 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no nostrategy / NOSTRATEGY / buyhighselllow / 0xEbDb…1e18. content/dependencies/stock-tokens.yaml lists MSTR 0xec26…da09.
- Explorer: RPC eth_getCode/eth_call/eth_getTransactionByHash/Receipt with Chrome UA at block 53122173; create 0x2cc9…3050, LaunchCreated, mint from 0x0, getAssetData, colliding 0xB170…5527, SAYLORMOON 0xD185…1E18. Blockscout api/v2 Cloudflare 403.
- Aggregators: DexScreener latest/dex/tokens, search q=NOSTRATEGY, pair HTML; Gecko token, direct pool GET, token/pools empty, token/info 429 (not retried); Gecko HTML og:title Bankr (Robinhood).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 MSTR, 0 NOSTRATEGY.
- Social: X keyword NOSTRATEGY / $NOSTRATEGY / buyhighselllow / 0xEbDb8acA; user search NOSTRATEGY; from:buyhiselllower.
- Failed: Blockscout api/v2 Cloudflare 403; Gecko token/info 429; Gecko token/pools empty this pass; no Telegram URL on DexScreener.
- Time: collection 2026-09-03T04:04Z–2026-09-03T04:10Z.
