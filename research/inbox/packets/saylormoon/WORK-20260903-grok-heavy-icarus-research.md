---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: saylormoon
name: SAYLORMOON
packet_tier: seed
as_of: 2026-09-03T03:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [saylormoon]
allowed_paths:
  - research/inbox/packets/saylormoon/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: SAYLORMOON
  aliases: []
  symbols: [SAYLORMOON]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is knowyourmeme.com/memes/subcultures/sailor-moon (no CA); Gecko token info websites [] this pass"
  official_handle: "NULL — DexScreener info.socials are an Elon 2021 post and a reddit thread; Gecko twitter_handle null; X user search returned unrelated Saylor Moon accounts; t.me/saylormooncto preview has no CA; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED; entity_kind protocol"
        - "SAYLORMOON is the ERC-20 at 0xD185…1E18 created through LongLauncher.create; entity_kind token"
        - "No shared domain or handle; this pass located no official SAYLORMOON site"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "SAYLORMOON is 0xD185…1E18 paired to MSTR 0xec26…da09; different CA, quote asset, and no official site or handle"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [shared-deployer]
      contrary_signals:
        - "Census Bankr is @bankrbot, an agent runtime that mints DopplerERC20V1 clones via Airlock create(); entity_kind protocol"
        - "SAYLORMOON create tx 0x8222…9c05 calls LongLauncher.create, not Bankr's X/console path"
        - "Gecko maps this pool dex to bankr-robinhood; DexScreener dexId is uniswap labels v4; no shared handle"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xD185…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create minted SAYLORMOON into Uniswap v4 pool 0xd1c2…4751 quoted against MSTR 0xec26…da09, a Robinhood Stock Token in GET /rhj/assets. Distinct from NOSTRATEGY/MSTR 0xEbDb…1e18. No official site or handle this pass. [R-1] [R-4] [R-5] [R-7] [R-12] [R-19]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: telegram, url: "https://t.me/saylormooncto", authenticity: unconfirmed }

deployments:
  - label: SAYLORMOON token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xD18528b39dA6464B3662c331a52181ecB15b1E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:36:00Z
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
      seen: 2026-09-03T03:36:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-15]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-16]
  - label: Quote asset MSTR stock token
    role: other
    address:
      value: "0xec262a75e413fAfD0dF80480274532C79D42da09"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-12, R-17]

metrics:
  - { kind: tvl, value: 537586.02, currency: USD, as_of: 2026-09-03T03:36:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD185…1E18 pair 0xd1c2…4751 SAYLORMOON/MSTR Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 2071122.9, currency: USD, as_of: 2026-09-03T03:36:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xD185…1E18 pair 0xd1c2…4751 SAYLORMOON/MSTR volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 2904056, currency: USD, as_of: 2026-09-03T03:36:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD185…1E18 pair 0xd1c2…4751 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 559259.2834, currency: USD, as_of: 2026-09-03T03:37:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xD185…1E18/pools first row SAYLORMOON/MSTR reserve_in_usd (that pool, not Gecko token total_reserve_in_usd)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 2087793.11262454, currency: USD, as_of: 2026-09-03T03:37:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xD185…1E18/pools first row SAYLORMOON/MSTR volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 2861029.22, currency: USD, as_of: 2026-09-03T03:37:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xD185…1E18/pools first row fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 2717860.03650023, currency: USD, as_of: 2026-09-03T03:36:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xD185…1E18 volume_usd.h24 (all pools, not the MSTR book)", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 5903, currency: null, as_of: 2026-09-03T03:36:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xD185…1E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:38:00Z, receipt_ids: [R-5, R-6], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a553c (53105980). Token 0xD185…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name SAYLORMOON, symbol SAYLORMOON, decimals 18, totalSupply 1e27. owner() 0xeb7C0347…0862. factory() reverts. EIP-1967 implementation slot zero. eth_getCode non-empty: DopplerERC20V1Factory 1912, LongLauncher 5826, DopplerERC20V1 13927, Airlock 5695, MSTR 283, PoolManager 24009." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-16, R-17], result: "Blockscout api/v2 token 0xD185…1E18 name SAYLORMOON symbol SAYLORMOON holders_count 5903 total_supply 1e27. Address is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599; creator_address_hash and creation_transaction_hash null this pass. Impl DopplerERC20V1 is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol compiler v0.8.26. Factory DopplerERC20V1Factory is_verified true. LongLauncher 0x22e9…eeED is_verified true. Airlock 0xeb7C…0862 is_verified true. MSTR 0xec26…da09 BeaconProxy name Strategy Inc. • Robinhood Token holders_count 6579." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-4], result: "Tx 0x8222fa94…9c05 timestamp 2026-08-29T01:55:57Z block 48778658 status ok method create to LongLauncher 0x22e9…eeED from 0x0a14…3625 (EIP7702StatelessDeleGator). Decoded create data[0]/data[1] 1e27, data[2] numeraire 0xec26…da09, data[3] DopplerERC20V1Factory 0x1B37…b69a. Mint Transfer from 0x0 to Airlock 1e27. LaunchCreated normalizedTicker SAYLORMOON numeraire MSTR poolOrHook 0xD185…1E18. PoolManager Initialize currency pair includes the token." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0xD185…1E18: 9 robinhood uniswap pairs; top SAYLORMOON/MSTR v4 0xd1c2…4751 quote 0xec26…da09 Strategy Inc. • Robinhood Token / MSTR liquidity.usd 537586.02 volume.h24 2071122.9 fdv/marketCap 2904056 pairCreatedAt 1787968557000 (2026-08-29T01:55:57Z) txns.h24 buys 5827 sells 6038. info.websites knowyourmeme sailor-moon; info.socials Elon status/1393983247311380482 and reddit r/MSTR." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T03:37:00Z, receipt_ids: [R-8, R-9, R-10], result: "Gecko token 0xd185…1e18 name SAYLORMOON symbol SAYLORMOON decimals 18 total_supply 1e27 fdv_usd 2859910.37 market_cap_usd null volume_usd.h24 2717860.03 total_reserve_in_usd 459804.60. Token/pools first row SAYLORMOON/MSTR 0xd1c2…4751 volume_usd.h24 2087793.11 reserve_in_usd 559259.28 fdv_usd 2861029.22 pool_created_at 2026-08-29T01:55:57Z dex bankr-robinhood. Token info websites [] twitter_handle null telegram_handle null gt_verified false. Direct GET pools/0xd1c2…4751 returned HTTP 404." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one MSTR hit tokenName Strategy Inc. • Robinhood Token deployments contractAddress 0xec262a75e413fAfD0dF80480274532C79D42da09 chainId 4663 status ASSET_STATUS_ACTIVE." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 ERC-20 created through LongLauncher.create; numeraire MSTR 0xec262a75e413fAfD0dF80480274532C79D42da09; canonical book Uniswap v4 SAYLORMOON/MSTR 0xd1c2f6cb178a165a643deae8752098dea08d51b6170cd8e36e196ef03dc74751", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-4, R-5, R-7], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "SAYLORMOON", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "SAYLORMOON", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xD18528b39dA6464B3662c331a52181ecB15b1E18", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-5, R-4], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-4, R-15], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials are an Elon 2021 post and a reddit thread; t.me/saylormooncto is a third-party-link with no contract in the preview; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-7, R-10, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote MSTR 0xec26…da09 is Strategy Inc. • Robinhood Token in GET /rhj/assets (194 assets, 1 MSTR hit, chainId 4663). Distinct from NOSTRATEGY (buyhighselllow) 0xEbDb…1e18, a later LongLauncher.create into NOSTRATEGY/MSTR 0x33ce…046c. MSTR is a rail, not this token.", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-12, R-17, R-19, R-25], reproduction_ids: [REP-4, REP-6], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko SAYLORMOON/MSTR 24h volume 2087793.11 USD and reserve_in_usd 559259.28 at 2026-09-03T03:37:00Z (token/pools first row, not Gecko token all-pools 2717860.03)", class: verified, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 537586.02 volume.h24 2071122.9 fdv/marketCap 2904056 at 2026-09-03T03:36:00Z", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 5903, class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-5, R-16], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: deployment.role, value: "Create tx to LongLauncher 0x22e9…eeED; decoded factory 0x1B37…b69a; Blockscout token creator_address_hash null this pass so the pad is taken from the create tx, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-4, R-3], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is MSTR 0xec262a75e413fAfD0dF80480274532C79D42da09; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xd1c2…4751; Gecko dex id bankr-robinhood", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-16, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, Telegram preview, or X search this pass", class: unknown, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: communications.status, value: "third-party-link: t.me/saylormooncto og:title $SAYLOR MOON CTO, 4 members, no contract in the preview", class: claim, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: economics.metric, value: "Gecko fdv_usd 2861029.22 on the MSTR pool row; DexScreener fdv/marketCap 2904056. Gecko token market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-20, field: deployment.address, value: "0xec262a75e413fAfD0dF80480274532C79D42da09", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-6, R-12, R-17], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: identity.domain, value: "NULL — DexScreener info.websites is a Know Your Meme sailor-moon page; Gecko token info websites []", class: claim, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-7, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: candidate, value: "saylormoon | SAYLORMOON | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: control.proxy, value: "EIP-1167 clone of DopplerERC20V1 0x3Be8B97F…C599; EIP-1967 implementation slot zero", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: other, value: "Blockscout search q=SAYLORMOON also listed 0xDe24…7777 (160 holders), 0xf983…A4b4 (114), 0xA4e1…1e18 (82); this packet's CA 0xD185…1E18 has 5903 holders", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-24], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "copypasta-pattern: @__cherelle__ posted CA 0xD185…1E18 with crypto-keo.netlify.app/claim; third-party-link, not an official surface", class: claim, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-28, field: relationship, value: "Distinct from LONG the factory at app.long.xyz / @longdotxyz. SAYLORMOON is one LongLauncher.create output; it does not operate LongLauncher, DopplerERC20V1Factory, or Airlock", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-4, R-15], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "24h volume is $2.071M on DexScreener SAYLORMOON/MSTR and $2.088M on Gecko token/pools for that book, versus $2.718M Gecko token all-pools; a card that collapses them would misstate activity"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko SAYLORMOON/MSTR 24h volume $2.09M, liquidity $559K"
    summary: "Gecko token/pools SAYLORMOON/MSTR 0xd1c2…4751 volume_usd.h24 2087793 reserve_in_usd 559259 fdv_usd 2861029."
    occurred_at: 2026-09-03T03:37:00Z
    observed_at: 2026-09-03T03:37:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: risk
    title: "X post linked a netlify claim URL with the CA"
    summary: "@__cherelle__ posted $SAYLORMOON CA 0xD185…1E18 and crypto-keo.netlify.app/claim. Flag copypasta-pattern."
    occurred_at: 2026-09-03T03:39:41Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-3
    type: ct
    title: "@Ali3n_Mafia posted a SAYLORMOON/MSTR buy"
    summary: "@Ali3n_Mafia posted that they bought $saylormoon which is paired to $MSTR."
    occurred_at: 2026-09-03T02:28:43Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: ct
    title: "@whalewatchRH posted a $4.75K SAYLORMOON buy"
    summary: "@whalewatchRH posted a CASHCAT whale bought $4.75K of $SAYLORMOON at $2.52M MC."
    occurred_at: 2026-09-03T01:05:10Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-5
    type: ct
    title: "@vytiscapital posted Elon-coined SAYLORMOON/MSTR"
    summary: "@vytiscapital posted Missing $saylormoon, coined by Elon, paired with MSTR."
    occurred_at: 2026-09-03T00:42:55Z
    observed_at: 2026-09-03T03:43:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-6
    type: onchain
    title: "LongLauncher create minted SAYLORMOON / MSTR"
    summary: "Tx 0x8222…9c05 to LongLauncher at 2026-08-29T01:55:57Z; LaunchCreated ticker SAYLORMOON numeraire MSTR."
    occurred_at: 2026-08-29T01:55:57Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xD185…1E18 SAYLORMOON / SAYLORMOON", url: "https://robinhoodchain.blockscout.com/address/0xD18528b39dA6464B3662c331a52181ecB15b1E18", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-14, CLM-23, CLM-24, CLM-25, CLM-27], excerpt: "hash 0xD18528b39dA6464B3662c331a52181ecB15b1E18 name SAYLORMOON is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol SAYLORMOON decimals 18 total_supply 1000000000000000000000000000 holders_count 5903 type ERC-20. creator_address_hash null creation_transaction_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768 creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x8222fa94…9c05", url: "https://robinhoodchain.blockscout.com/tx/0x8222fa944e2c926fec6060b5b1f22d14eea787baaea59450a75f94e989539c05", published_at: 2026-08-29T01:55:57Z, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-14, CLM-15, CLM-28, EVT-6], excerpt: "timestamp 2026-08-29T01:55:57.000000Z status ok block 48778658 from 0x0a148baCAf68fc9ACCA1cd339a0e25eFB97A3625 to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. Decoded numeraire 0xec26…da09 factory 0x1B37…b69a supply 1e27. LaunchCreated normalizedTicker SAYLORMOON. Mint to Airlock 1e27." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on SAYLORMOON", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-21, CLM-24], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32a553c (53105980). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name SAYLORMOON symbol SAYLORMOON decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. EIP-1967 slot zero. Impl code 13927 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode factory, launcher, airlock, MSTR", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-13, CLM-20], excerpt: "block 53105980. DopplerERC20V1Factory 0x1B37…b69a code 1912 B. LongLauncher 0x22e9…eeED code 5826 B. Airlock 0xeb7C…0862 code 5695 B. MSTR 0xec26…da09 code 283 B. PoolManager 0x8366…0951 code 24009 B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens SAYLORMOON", url: "https://api.dexscreener.com/latest/dex/tokens/0xD18528b39dA6464B3662c331a52181ecB15b1E18", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-8, CLM-11, CLM-15, CLM-16, CLM-19, CLM-22, CLM-23], excerpt: "9 robinhood uniswap pairs. Top pairAddress 0xd1c2f6cb178a165a643deae8752098dea08d51b6170cd8e36e196ef03dc74751 labels v4 base SAYLORMOON quote Strategy Inc. • Robinhood Token / MSTR 0xec262a75…da09 liquidity.usd 537586.02 volume.h24 2071122.9 fdv 2904056 marketCap 2904056 pairCreatedAt 1787968557000. info.websites knowyourmeme sailor-moon. info.socials elonmusk/status/1393983247311380482 and reddit r/MSTR." }
  - { id: R-8, publisher: GeckoTerminal, title: "SAYLORMOON token pools (MSTR row)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xD18528b39dA6464B3662c331a52181ecB15b1E18/pools", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-10, CLM-15, CLM-19, EVT-1], excerpt: "First row name SAYLORMOON / MSTR address 0xd1c2f6cb178a165a643deae8752098dea08d51b6170cd8e36e196ef03dc74751 pool_created_at 2026-08-29T01:55:57Z fdv_usd 2861029.22 market_cap_usd null volume_usd.h24 2087793.11262454 reserve_in_usd 559259.2834. relationships.dex.id bankr-robinhood. Direct GET networks/robinhood/pools/0xd1c2…4751 HTTP 404 this pass." }
  - { id: R-9, publisher: GeckoTerminal, title: "SAYLORMOON token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xD18528b39dA6464B3662c331a52181ecB15b1E18", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name SAYLORMOON symbol SAYLORMOON decimals 18 total_supply 1e27 price_usd 0.002859910376 fdv_usd 2859910.37557388 market_cap_usd null volume_usd.h24 2717860.03650023 total_reserve_in_usd 459804.60. coingecko_coin_id null. Top pool 0xd1c2…4751." }
  - { id: R-10, publisher: GeckoTerminal, title: "SAYLORMOON token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xD18528b39dA6464B3662c331a52181ecB15b1E18/info", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-22], excerpt: "websites [] discord_url null telegram_handle null twitter_handle null description null gt_verified false gt_score 56.38 holders.count 5324 last_updated 2026-09-03T02:56:37Z. categories Urban Dictionary." }
  - { id: R-11, publisher: GeckoTerminal, title: "SAYLORMOON/MSTR pool page", url: "https://www.geckoterminal.com/robinhood/pools/0xd1c2f6cb178a165a643deae8752098dea08d51b6170cd8e36e196ef03dc74751", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "og:title SAYLORMOON/MSTR - SAYLORMOON Price on Bankr (Robinhood) | GeckoTerminal. og:description SAYLORMOON/MSTR price today is $0.00286 with a 24-hour trading volume of $2.09M. SAYLORMOON contract address is 0xd18528b39da6464b3662c331a52181ecb15b1e18 with $559.3K in liquidity." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-20], excerpt: "HTTP 200. assets length 194. One MSTR hit: tokenSymbol MSTR tokenName Strategy Inc. • Robinhood Token deployments contractAddress 0xec262a75e413fAfD0dF80480274532C79D42da09 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-13, publisher: Telegram, title: "t.me/saylormooncto", url: "https://t.me/saylormooncto", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-18], excerpt: "HTTP 200. og:title $SAYLOR MOON CTO. og:description You can view and join @saylormooncto right away. tgme_page_extra 4 members. No contract address in the preview HTML this pass." }
  - { id: R-14, publisher: "@elonmusk", title: "Saylor Moon", url: "https://x.com/elonmusk/status/1393983247311380482", published_at: 2021-05-16T17:34:39Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: confirmed, supports: [], excerpt: "Reply to @saylor: Saylor Moon. DexScreener token profile lists this URL under info.socials type twitter. Not a project handle and not a bidirectional official surface." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-28], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305 creation_transaction_hash 0x717af93c071b39247b5cec72930b990b917439143f6621d08797090732947cf9." }
  - { id: R-16, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9 creation_transaction_hash 0x8ffd957b1985578fd9bfb8ce651bf546cb262f3b157f02f93b26c585046b291a." }
  - { id: R-17, publisher: Blockscout, title: "Token 0xec26…da09 Strategy Inc. • Robinhood Token / MSTR", url: "https://robinhoodchain.blockscout.com/address/0xec262a75e413fAfD0dF80480274532C79D42da09", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-20], excerpt: "hash 0xec262a75e413fAfD0dF80480274532C79D42da09 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Strategy Inc. • Robinhood Token symbol MSTR decimals 18 total_supply 12750945000000000000000 holders_count 6579." }
  - { id: R-18, publisher: Blockscout, title: "Mint transfer from 0x0 on SAYLORMOON", url: "https://robinhoodchain.blockscout.com/tx/0x8222fa944e2c926fec6060b5b1f22d14eea787baaea59450a75f94e989539c05", published_at: 2026-08-29T01:55:57Z, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4], excerpt: "GET /api/v2/addresses/0x000…000/token-transfers?token=0xD185…1E18 returned one ERC-20 mint at 2026-08-29T01:55:57Z tx 0x8222fa94…9c05 method 0x882db707 to Airlock 0xeb7C…0862 value 1000000000000000000000000000." }
  - { id: R-19, publisher: Blockscout, title: "Token 0xEbDb…1e18 buyhighselllow / NOSTRATEGY", url: "https://robinhoodchain.blockscout.com/address/0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18 name buyhighselllow is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 creator_address_hash 0x1B37…b69a creation_transaction_hash 0x2cc928e19361adf8263d9df0ee6e55ef8356b9924895dfb908970f129a353050. token symbol NOSTRATEGY holders_count 425 total_supply 1e27." }
  - { id: R-20, publisher: "@Ali3n_Mafia", title: "bought $saylormoon paired to $MSTR", url: "https://x.com/Ali3n_Mafia/status/2095338169235349722", published_at: 2026-09-03T02:28:43Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "Thats why i bought $saylormoon which is paired to $MSTR which only pumps when btc pumps." }
  - { id: R-21, publisher: "@whalewatchRH", title: "CASHCAT whale bought $SAYLORMOON", url: "https://x.com/whalewatchRH/status/2095317140333105175", published_at: 2026-09-03T01:05:10Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "A CASHCAT whale just bought $4.75K of $SAYLORMOON at $2.52M MC" }
  - { id: R-22, publisher: "@vytiscapital", title: "Missing $saylormoon, coined by Elon", url: "https://x.com/vytiscapital/status/2095311543755849804", published_at: 2026-09-03T00:42:55Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "Missing $saylormoon, coined by Elon, paired with MSTR" }
  - { id: R-23, publisher: "@__cherelle__", title: "$SAYLORMOON claim URL with CA", url: "https://x.com/__cherelle__/status/2095356026921062856", published_at: 2026-09-03T03:39:41Z, accessed_at: 2026-09-03T03:43:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-2], excerpt: "$SAYLORMOON did a holder thing today just grabbed mine CA: 0xD18528b39dA6464B3662c331a52181ecB15b1E18 https://crypto-keo.netlify.app/claim?contract=0xD18528b39dA6464B3662c331a52181ecB15b1E18 Flag copypasta-pattern third-party-link." }
  - { id: R-24, publisher: Blockscout, title: "Search q=SAYLORMOON", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=SAYLORMOON", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "50 token rows named SAYLORMOON. First 0xD18528b39dA6464B3662c331a52181ecB15b1E18. Also 0xDe2461D048c99966C207Eaad9D02a04aFEC97777 holders 160, 0xf983Da4b3ff43a7A1631af1A50a1578a460BA4b4 holders 114, 0xA4e1d70c660Fe79E62dA090C4A8bA72de6F51e18 holders 82." }
  - { id: R-25, publisher: DexScreener, title: "latest/dex/search NOSTRATEGY", url: "https://api.dexscreener.com/latest/dex/search?q=NOSTRATEGY", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "robinhood uniswap pair 0x33ce54147a81c2954e98dc59ba775bcca164512b3f7a19d454e7afd14271046c base 0xEbDb8acA558bF8225747770474f3FC2CCe5B1e18 buyhighselllow / NOSTRATEGY quote MSTR 0xec262a75…da09 liquidity.usd 45584.36 volume.h24 1055783.39 pairCreatedAt 2026-09-02T14:53:47Z. Distinct CA from SAYLORMOON 0xD185…1E18." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xD185…1E18?", checked: "DexScreener info.websites is Know Your Meme; info.socials Elon 2021 + reddit; Gecko websites [] twitter_handle null; X user search returned unrelated Saylor Moon accounts; t.me/saylormooncto preview has no CA, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P0, question: "Why is Blockscout creator_address_hash null on 0xD185…1E18 when the mint tx is LongLauncher.create?", checked: "Address API creator_address_hash null; mint Transfer from 0x0 in tx 0x8222…9c05 to Airlock; factory() reverts, 2026-09-03", next: "re-fetch the address API after indexer catch-up; compare with BONER 0x98096d…1E18 which does set creator to DopplerERC20V1Factory" }
  - { priority: P1, question: "Does t.me/saylormooncto pin the CA 0xD185…1E18 or a site that cross-links?", checked: "public preview og:title $SAYLOR MOON CTO, 4 members, no CA in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P1, question: "Why does Gecko map SAYLORMOON/MSTR dex to bankr-robinhood while DexScreener labels Uniswap v4 and the create tx is LongLauncher?", checked: "Gecko token/pools relationships.dex.id bankr-robinhood; pool HTML og:title Price on Bankr (Robinhood); DexScreener dexId uniswap labels v4; create to LongLauncher, 2026-09-03", next: "read Gecko dex metadata for bankr-robinhood and compare PoolManager hook 0x6f02…0F77" }
  - { priority: P2, question: "Do any of the other Blockscout SAYLORMOON tickers have a book that could be confused with 0xD185…1E18?", checked: "0xDe24…7777 160 holders, 0xf983…A4b4 114, 0xA4e1…1e18 82; DexScreener token endpoint for 0xD185… listed only that CA, 2026-09-03", next: "DexScreener search each colliding CA if a second liquid SAYLORMOON/MSTR book appears" }
---

# SAYLORMOON — research packet

## What it is

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against the MSTR Robinhood Stock Token. Traders buy and sell SAYLORMOON on the SAYLORMOON/MSTR book. No official site or handle was located this pass.

Themes: memecoin, stock-paired:MSTR, rwa

## Why it matters

The SAYLORMOON/MSTR Uniswap v4 book printed about $2.09M of 24h volume on Gecko at collection, with quote token MSTR 0xec26…da09 listed in GET /rhj/assets as Strategy Inc. • Robinhood Token. That MSTR leg is a rail. A later LongLauncher output, NOSTRATEGY 0xEbDb…1e18, uses the same quote and is a different contract.

## What could go wrong

USD liquidity figures on the SAYLORMOON/MSTR book count both sides, and the quote side is MSTR, not USDG. Gecko labels the dex bankr-robinhood while DexScreener labels Uniswap v4. No official handle was located, so comms surfaces stay unconfirmed-official. Other Blockscout tokens reuse the SAYLORMOON ticker.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create(...) from 0x0a14…3625 at 2026-08-29T01:55:57Z minted SAYLORMOON supply 1e9*1e18 into Uniswap v4 pool 0xd1c2…4751 with numeraire MSTR 0xec26…da09. LaunchCreated normalizedTicker SAYLORMOON. owner() on the token returns Airlock 0xeb7C…0862. factory() reverts. [verified R-4 R-5 R-18]

PoolManager is 0x8366…0951. Gecko token/pools maps this book to dex bankr-robinhood; DexScreener dexId is uniswap labels v4. Secondary SAYLORMOON/USDG and SAYLORMOON/ETH books exist on DexScreener with far less liquidity than the MSTR book. [verified R-7 R-8]

## Control and security

token owner() returns Airlock 0xeb7C…0862. Create caller 0x0a14…3625 is an EIP7702StatelessDeleGator. DopplerERC20V1 is partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). No audit report URL was located this pass. [verified R-2 R-5 R-16] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites is a Know Your Meme sailor-moon page. info.socials are @elonmusk 2021-05-16 "Saylor Moon" and a reddit r/MSTR thread. t.me/saylormooncto titles $SAYLOR MOON CTO with 4 members and no contract in the public preview. Flag unconfirmed-official and third-party-link. [claim R-7 R-13 R-14]

## Economics and activity

SAYLORMOON/MSTR Uniswap v4 24h volume is 2087793.11 USD and reserve_in_usd is 559259.28 at 2026-09-03T03:37:00Z from the Gecko token/pools first row. fdv_usd is 2861029.22. Gecko token volume_usd.h24 is 2717860.03 across all pools, not the MSTR book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 537586.02, volume.h24 2071122.9, fdv/marketCap 2904056. Blockscout holders_count 5903. Pair created 2026-08-29T01:55:57Z. [claim R-1 R-7]

## Material risks

- Quote token MSTR 0xec26…da09 is a Robinhood Stock Token rail in GET /rhj/assets; SAYLORMOON is not that asset. [verified R-12 R-17]
- Pool USD reserve is SAYLORMOON plus MSTR, not a USDG or WETH backstop. [claim R-7 R-8]
- No official handle or domain this pass; Telegram is a third-party-link. [claim R-7 R-13]
- Ticker SAYLORMOON is reused by other Blockscout tokens with far fewer holders. [verified R-24]
- No audit report URL this pass. [unknown]
- A netlify /claim URL posted the CA; flag copypasta-pattern. [claim R-23]

## Verification passes

- Receipts: Blockscout token/impl/factory/launcher/airlock/MSTR and create tx 0x8222…9c05, RPC name/symbol/owner/getCode, DexScreener, Gecko token/pools/info, /rhj/assets, Telegram preview, Elon 2021 post, and four Latest X posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 2087793.11 is the Gecko SAYLORMOON/MSTR pool 24h volume, not the 2717860.03 token all-pools figure. Reserve 559259.28 is that pool. DexScreener 2071122.9 / 537586.02 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that SAYLORMOON is the same name as NOSTRATEGY/MSTR or an official Strategy product. NOSTRATEGY is 0xEbDb…1e18 created 2026-09-02, and /rhj/assets lists MSTR 0xec26…da09 as the Stock Token, not this ERC-20. [inference R-12 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no saylormoon / SAYLORMOON / 0xD185…1E18. content/dependencies/stock-tokens.yaml lists MSTR 0xec26…da09.
- Explorer: Blockscout api/v2 token, impl, factory, launcher, airlock, MSTR, create 0x8222…9c05, LaunchCreated log, mint from 0x0, search q=SAYLORMOON, NOSTRATEGY token. RPC eth_getCode/eth_call with Mozilla UA at block 53105980.
- Aggregators: DexScreener latest/dex/tokens and search NOSTRATEGY; Gecko token, token/info, token/pools; direct Gecko pool GET 404; Gecko HTML og:title Bankr (Robinhood).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 MSTR.
- Social: X keyword $SAYLORMOON / SAYLORMOON MSTR; user search SAYLORMOON; t.me/saylormooncto preview; Elon status/1393983247311380482 listed by DexScreener.
- Failed: Blockscout token creator_address_hash null (create tx used instead); Gecko networks/robinhood/pools/0xd1c2…4751 HTTP 404; app.long.xyz/tokens/0xd185… Cloudflare 403; factory() reverts.
- Time: collection 2026-09-03T03:35Z–2026-09-03T03:45Z.
