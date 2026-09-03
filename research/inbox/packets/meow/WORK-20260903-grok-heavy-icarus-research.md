---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: meow
name: MEOW
packet_tier: seed
as_of: 2026-09-03T04:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [meow]
allowed_paths:
  - research/inbox/packets/meow/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: MEOW
  aliases: ["AMD", "Artificial Meow Domination"]
  symbols: [MEOW]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token attributes have no website; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials lists x.com/meow_robinhood; that account bio reprints CA 0x7235Cf5e…1e18; no project site this pass to complete a bidirectional official-handle check; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "MEOW is the ERC-20 at 0x7235…1e18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; @meow_robinhood is not @longdotxyz"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "MEOW is 0x7235…1e18 paired to AMD 0x8692…3fdC; on-chain name() is AMD, symbol MEOW"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the MEOW/AMD pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0x33aa…8612 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x7235…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create at 2026-09-02T09:19:32Z minted name AMD / symbol MEOW into Uniswap v4 pool 0xc057…9132 quoted against AMD • Robinhood Token 0x8692…3fdC. AMD is the quote rail. Distinct from in-flight CHIP 0xE38B…6E59 and MD 0x3abb…1e18. No official site; DexScreener lists @meow_robinhood without a bidirectional site. [R-1] [R-4] [R-5] [R-7] [R-10] [R-16] [R-17]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/meow_robinhood", authenticity: unconfirmed }

deployments:
  - label: MEOW token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-12]
  - label: DopplerERC20V1Factory (create tokenFactory)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-12]
  - label: AMD • Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0x86923f96303D656E4aa86D9d42D1e57ad2023fdC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-10, R-11]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:09:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-19]

metrics:
  - { kind: volume_24h, value: 587708.52, currency: USD, as_of: 2026-09-03T04:10:59Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x7235Cf5e…1e18 pair 0xc057cb73…9132 MEOW/AMD Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 53771.13, currency: USD, as_of: 2026-09-03T04:10:59Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x7235Cf5e…1e18 pair 0xc057cb73…9132 liquidity.usd (MEOW/AMD pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 64516, currency: USD, as_of: 2026-09-03T04:10:59Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x7235Cf5e…1e18 pair 0xc057cb73…9132 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 554392.11, currency: USD, as_of: 2026-09-03T04:11:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc057cb737ac2af99fcbe345af9b856c8cd603f67c1a9216649d898147c7d9132 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 63473.61, currency: USD, as_of: 2026-09-03T04:11:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc057cb73…9132 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 260, currency: null, as_of: 2026-09-03T04:05:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:09:00Z, receipt_ids: [R-5, R-6], result: "rpc.mainnet.chain.robinhood.com block 0x32a9a48 (53123656): token 0x7235…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599; name() AMD; symbol() MEOW; decimals 18; totalSupply 1e27; owner() Airlock 0xeb7c0347…0862; factory() reverts. AMD 0x8692…3fdC eth_getCode 283 bytes name() AMD • Robinhood Token symbol() AMD. Factory code 1912 B. Impl code 13927 B. Launcher code 5826 B. Airlock code 5695 B. PoolManager code 24009 B. Airlock owner() 0x21e2ce70…7a66." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-11, R-12, R-18, R-19], result: "Blockscout api/v2 token 0x7235…1e18 name AMD symbol MEOW holders_count 260 total_supply 1e27 is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599; creator_address_hash null this pass. Impl file_path src/tokens/DopplerERC20V1.sol is_partially_verified true compiler v0.8.26. Factory DopplerERC20V1Factory 0x1B37…b69a verified. Tx 0x33aa…8612 timestamp 2026-09-02T09:19:32Z block 52462667 from 0x9faA…f9e1 (proxy_type eip7702 EIP7702StatelessDeleGator 0x63c0…e32B) to LongLauncher method create; decoded numeraire 0x8692…3fdC tokenFactory 0x1B37…b69a name AMD symbol MEOW supply 1e27. LaunchCreated normalizedTicker MEOW pool id 0xc057…9132. AMD token name AMD • Robinhood Token holders_count 36214." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T04:11:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x7235…1e18 8 robinhood uniswap pairs; top MEOW/AMD v4 0xc057…9132 quote 0x8692…3fdC AMD • Robinhood Token / AMD liquidity.usd 53771.13 volume.h24 587708.52 fdv 64516 pairCreatedAt 1788340772000 (2026-09-02T09:19:32Z) info.websites [] info.socials x.com/meow_robinhood. Gecko pool same address name MEOW / AMD dex bankr-robinhood volume_usd.h24 554392.11 reserve_in_usd -10478.77 fdv_usd 63473.61 pool_created_at 2026-09-02T09:19:32Z market_cap_usd null. Gecko token name AMD symbol MEOW volume_usd.h24 555248.34 fdv_usd 344376.22 price_usd 0.00034438 total_reserve_in_usd 0.0 (token slice, not the AMD book)." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:09:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0x7235…1e18) word0 numeraire 0x86923f96…3fdC; word1/word2 0xdead; word3 NoOpMigrator 0xba2F330E…5A0e; word4 DopplerHookInitializer 0x4e346895…a544; word5 token 0x7235Cf5e…1e18; word6 0xdeaddead…; word7/word8 1e27; word9 0x92d435C9…F765 (EOA, no code). AMD name() AMD • Robinhood Token; symbol() AMD." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:08:59Z, receipt_ids: [R-10, R-16, R-17], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one AMD row tokenName AMD • Robinhood Token deployments contractAddress 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC chainId 4663. Zero MEOW hits. DexScreener search CHIP top robinhood CHIP/AMD is Cyber Hardware-Integrated Pup 0xE38B…6E59 pair 0x0515…8b10. Search MD top robinhood MD/AMD is A Machine Duck 0x3abb…1e18 pair 0x197d…9655. Neither is 0x7235…1e18." }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-20], result: "eth_getTransactionByHash 0x33aa…8612 from 0x9faA…f9e1 to LongLauncher 0x22e9…eeED selector 0x882db707 create; from eth_getCode 23 B prefix 0xef010063c0c19a28… (EIP-7702 to 0x63c0c19a…e32B). Receipt status 0x1, 16 logs, LaunchCreated topic asset 0x7235…1e18." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 name AMD / symbol MEOW into a Uniswap v4 pool quoted against AMD 0x8692…3fdC; Airlock getAssetData numeraire is that AMD; LP addresses in getAssetData include 0xdead", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-5, R-6, R-12], reproduction_ids: [REP-1, REP-2, REP-4, REP-6], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "AMD", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: MEOW, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-5, R-7, R-12], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-5, R-18], reproduction_ids: [REP-2, REP-6], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-8, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset is the AMD rail AMD • Robinhood Token 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC (GET /rhj/assets 194 assets, one AMD row, that contract, chainId 4663). MEOW is not in the registry. AMD is a rail, not the subject.", class: verified, observed_at: 2026-09-03T04:08:59Z, receipt_ids: [R-7, R-8, R-10, R-11], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Launchpad LONG: tx 0x33aa…8612 from EIP-7702 0x9faA…f9e1 called LongLauncher.create; tokenFactory DopplerERC20V1Factory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from census LONG (the factory), in-flight CHIP 0xE38B…6E59, and MD 0x3abb…1e18.", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-4, R-5, R-16, R-17], reproduction_ids: [REP-2, REP-5, REP-6], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DexScreener MEOW/AMD Uniswap v4 0xc057…9132 liquidity.usd 53771.13 volume.h24 587708.52 fdv/marketCap 64516 at 2026-09-03T04:10:59Z", class: verified, observed_at: 2026-09-03T04:10:59Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko MEOW/AMD pool 0xc057…9132 volume_usd.h24 554392.11 fdv_usd 63473.61 reserve_in_usd -10478.77 at 2026-09-03T04:11:00Z (pool slice; reserve is negative this pass)", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 260, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from 0x9faA7a2A48AEB46fAEAeBFd8FCC4BC827e85f9e1 (EIP-7702 EIP7702StatelessDeleGator, 23 B code)", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-5, R-6, R-20], reproduction_ids: [REP-1, REP-4, REP-6], supersedes: null }
  - { id: CLM-14, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials lists x.com/meow_robinhood; bio reprints CA 0x7235Cf5e…1e18; no site; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xc057…9132; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; create tx names LongLauncher 0x22e9…eeED and DopplerERC20V1Factory 0x1B37…b69a as the pad, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or the @meow_robinhood profile this pass", class: unknown, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener lists x.com/meow_robinhood; display Artificial Meow Domination - AMD; bio reprints this CA and @longdotxyz; 185 followers; no site", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 344376.22 price_usd 0.00034438 vs Gecko pool fdv_usd 63473.61 / DexScreener fdv 64516. Token slice is not the AMD book.", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x86923f96303D656E4aa86D9d42D1e57ad2023fdC", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-6, R-10, R-11], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token has no website field", class: claim, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "meow | MEOW | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: relationship, value: "Gecko dex id bankr-robinhood on the MEOW/AMD pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge MEOW into census bankr.", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-7, R-8, R-4], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-28, field: other, value: "Same-ticker MEOW clones on robinhood this pass include meow/WETH 0x75C8…CBe2, Meow/USDG 0xbCbE…044b, and tokens named AMD with symbol MEOW at 0x49c9…7A8A and 0x1431…88B0; this packet is only 0x7235…1e18 / pair 0xc057…9132", class: claim, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: "account.@meow_robinhood.role", value: project, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: "account.@meow_robinhood.slug", value: meow, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: "account.@meow_robinhood.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: communications.status, value: "copypasta-pattern: third-party-link crypto-pek.netlify.app/claim embeds CA 0x7235…1e18; posted by @tjdudoo, not @meow_robinhood", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: identity.alias, value: "Artificial Meow Domination — X display name on @meow_robinhood; not the on-chain name()", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Same MEOW/AMD pool 0xc057…9132: DexScreener volume.h24 587708.52 vs Gecko volume_usd.h24 554392.11; fdv 64516 vs 63473.61; DexScreener liquidity.usd 53771.13 vs Gecko reserve_in_usd -10478.77. A card that collapses them would misstate the book."
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-11, CLM-20]
    material_effect: "Gecko pool fdv_usd 63473.61 vs Gecko token fdv_usd 344376.22 and price_usd 0.00034438 vs pool base_token_price_usd 0.00006347. Token endpoint is not the AMD book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener MEOW/AMD 24h volume $587.7k, liquidity $53.8k"
    summary: "DexScreener pair 0xc057…9132 volume.h24 587708.52 liquidity.usd 53771.13 fdv 64516. Gecko same pool volume_usd.h24 554392.11 fdv_usd 63473.61 reserve_in_usd -10478.77."
    occurred_at: 2026-09-03T04:10:59Z
    observed_at: 2026-09-03T04:11:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "LongLauncher create minted AMD / MEOW"
    summary: "Tx 0x33aa…8612 from EIP-7702 0x9faA…f9e1 at 2026-09-02T09:19:32Z; LaunchCreated normalizedTicker MEOW pool 0xc057…9132 numeraire AMD 0x8692…3fdC."
    occurred_at: 2026-09-02T09:19:32Z
    observed_at: 2026-09-03T04:10:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-12]
  - id: EVT-3
    type: ct
    title: "@meow_robinhood posted the CA and cat-on-chip copy"
    summary: "Account display Artificial Meow Domination - AMD; bio reprints 0x7235Cf5e…1e18 and Launched on @longdotxyz. Post: only one token paired to amd with cats on it; ticker $meow."
    occurred_at: 2026-09-02T21:33:45Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13, R-14]
  - id: EVT-4
    type: ct
    title: "Third-party claim portal posted against this CA"
    summary: "@tjdudoo posted crypto-pek.netlify.app/claim?contract=0x7235Cf5e…1e18. Flag copypasta-pattern / third-party-link. Not from @meow_robinhood."
    occurred_at: 2026-09-02T17:09:06Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-15]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x7235…1e18 AMD / MEOW", url: "https://robinhoodchain.blockscout.com/address/0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24, CLM-25], excerpt: "hash 0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18 name AMD is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol MEOW decimals 18 total_supply 1000000000000000000000000000 holders_count 260 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator 0x1B37…b69a. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x33aac706…8612", url: "https://robinhoodchain.blockscout.com/tx/0x33aac7063918c857a6c07cc9d7d07ea5c66d0759623674c7347a6e96f8478612", published_at: 2026-09-02T09:19:32Z, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-6, CLM-9, CLM-16, CLM-26, CLM-27, EVT-2], excerpt: "timestamp 2026-09-02T09:19:32.000000Z status ok block_number 52462667 from 0x9faA7a2A48AEB46fAEAeBFd8FCC4BC827e85f9e1 (proxy_type eip7702 EIP7702StatelessDeleGator 0x63c0…e32B) to LongLauncher 0x22e992…eeED method create. decoded numeraire 0x86923f96…3fdC tokenFactory 0x1B37…b69a name AMD symbol MEOW supply 1e27." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on MEOW", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a9a48 (53123656). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name AMD symbol MEOW decimals 18 totalSupply 1e27. owner() 0xeb7C0347…0862. factory() reverts. Factory code 1912 B. Impl 13927 B. Launcher 5826 B. Airlock 5695 B. AMD 283 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "Airlock getAssetData and AMD name()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-13, CLM-21], excerpt: "getAssetData(0x7235…1e18) numeraire 0x86923f96…3fdC; 0xdead; 0xdead; NoOpMigrator 0xba2F330E…5A0e; DopplerHookInitializer 0x4e346895…a544; token 0x7235Cf5e…1e18; 0xdeaddead…; supply 1e27; 0x92d435C9…F765. Airlock owner() 0x21E2ce70…7a66. AMD name AMD • Robinhood Token symbol AMD." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens MEOW 0x7235…1e18", url: "https://api.dexscreener.com/latest/dex/tokens/0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18", published_at: null, accessed_at: 2026-09-03T04:10:59Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-10, CLM-14, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, CLM-27, CLM-28, CLM-31, EVT-1], excerpt: "8 robinhood uniswap pairs. Top pairAddress 0xc057cb737ac2af99fcbe345af9b856c8cd603f67c1a9216649d898147c7d9132 labels v4 base AMD / MEOW quote AMD • Robinhood Token / AMD 0x86923f96…3fdC liquidity.usd 53771.13 volume.h24 587708.52 fdv 64516 pairCreatedAt 1788340772000. info.websites [] info.socials x.com/meow_robinhood." }
  - { id: R-8, publisher: GeckoTerminal, title: "MEOW/AMD Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc057cb737ac2af99fcbe345af9b856c8cd603f67c1a9216649d898147c7d9132", published_at: null, accessed_at: 2026-09-03T04:11:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-20, CLM-27, EVT-1], excerpt: "name MEOW / AMD pool_created_at 2026-09-02T09:19:32Z fdv_usd 63473.60724 market_cap_usd null volume_usd.h24 554392.108925189 reserve_in_usd -10478.7680026267. dex bankr-robinhood quote robinhood_0x86923f96303d656e4aa86d9d42d1e57ad2023fdc. One prior Gecko call this pass returned HTTP 429; this GET was 200." }
  - { id: R-9, publisher: GeckoTerminal, title: "AMD / MEOW token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18", published_at: null, accessed_at: 2026-09-03T04:11:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-20, CLM-23], excerpt: "name AMD symbol MEOW decimals 18 total_supply 1e27 price_usd 0.0003443762246 fdv_usd 344376.224559598 market_cap_usd null volume_usd.h24 555248.343044696 total_reserve_in_usd 0.0. coingecko_coin_id null. No website field." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:08:59Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-21], excerpt: "HTTP 200. assets length 194. AMD row tokenSymbol AMD tokenName AMD • Robinhood Token deployments contractAddress 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC chainId 4663. Zero MEOW hits." }
  - { id: R-11, publisher: Blockscout, title: "Token 0x8692…3fdC AMD • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x86923f96303D656E4aa86D9d42D1e57ad2023fdC", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-21], excerpt: "hash 0x86923f96303D656E4aa86D9d42D1e57ad2023fdC name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon. token name AMD • Robinhood Token symbol AMD decimals 18 holders_count 36214 total_supply 3799898000000000000000." }
  - { id: R-12, publisher: Blockscout, title: "LaunchCreated and Initialize logs for MEOW", url: "https://robinhoodchain.blockscout.com/tx/0x33aac7063918c857a6c07cc9d7d07ea5c66d0759623674c7347a6e96f8478612", published_at: 2026-09-02T09:19:32Z, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-2], excerpt: "LaunchCreated asset 0x7235Cf5e…1e18 numeraire 0x86923f96…3fdC launcher 0x9faA…f9e1 normalizedTicker MEOW deployedAt 1788340772. PoolManager Initialize id 0xc057cb73…9132 currency0 0x7235…1e18 currency1 0x8692…3fdC hooks 0x4e346895…a544. Block 52462667." }
  - { id: R-13, publisher: "@meow_robinhood", title: "X profile Artificial Meow Domination - AMD", url: "https://x.com/meow_robinhood", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-14, CLM-19, CLM-29, CLM-30, CLM-31, CLM-33, EVT-3], excerpt: "ID 2092605221377589248 display Artificial Meow Domination - AMD - @meow_robinhood. Bio: meow, we will take over. $AMD. $MEOW on Robinhood. Launched on @longdotxyz. 0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18. Followers 185. Blue Verified." }
  - { id: R-14, publisher: "@meow_robinhood", title: "only one token paired to amd with cats", url: "https://x.com/meow_robinhood/status/2095263938761904217", published_at: 2026-09-02T21:33:45Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-29, CLM-33, EVT-3], excerpt: "listen. there's only one token paired to amd with cats on it. not a frog. not a dog. a kitten on the chip. the ticker is $meow. artificial meow domination." }
  - { id: R-15, publisher: "@tjdudoo", title: "holder claim portal against this CA", url: "https://x.com/tjdudoo/status/2095197335701873046", published_at: 2026-09-02T17:09:06Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-32, EVT-4], excerpt: "ok $MEOW surprised me holder claim is up secured a small one CA: 0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18 https://crypto-pek.netlify.app/claim?contract=0x7235Cf5eA4674FE09531706954B5f1aD6E0A1e18&cfg=evmdrop&pid=cRfOz" }
  - { id: R-16, publisher: DexScreener, title: "search CHIP robinhood CHIP/AMD", url: "https://api.dexscreener.com/latest/dex/search?q=CHIP", published_at: null, accessed_at: 2026-09-03T04:09:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "robinhood v4 CHIP Cyber Hardware-Integrated Pup 0xE38B1C963Afc21f06b9E82A2de36A84FbB9C6E59 / AMD 0x86923f96…3fdC pair 0x051535496d045a87f9abe2380aba1bb3d5eaa744953478ea1fc1c1d84ed58b10 liquidity.usd 39024.45 volume.h24 775518.71. Not 0x7235…1e18." }
  - { id: R-17, publisher: DexScreener, title: "search MD robinhood MD/AMD", url: "https://api.dexscreener.com/latest/dex/search?q=MD", published_at: null, accessed_at: 2026-09-03T04:09:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "robinhood v4 MD A Machine Duck 0x3abb8d686dF6e538bb0887917d14f04f705f1e18 / AMD 0x86923f96…3fdC pair 0x197db3e35d66549592bdf1a77172eedbca36a864e185145796412ab8e3cb9655 liquidity.usd 144549.31 volume.h24 341060.73. Not 0x7235…1e18." }
  - { id: R-18, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Compiler v0.8.26 file_path src/LongLauncher.sol is_partially_verified false." }
  - { id: R-19, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true. file_path src/Airlock.sol is_partially_verified true." }
  - { id: R-20, publisher: Robinhood Chain RPC, title: "create-from 0x9faA…f9e1 eth_getCode", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "eth_getTransactionByHash 0x33aa…8612 from 0x9faA7a2A48AEB46fAEAeBFd8FCC4BC827e85f9e1 to 0x22e992…eeED selector 0x882db707. from eth_getCode 23 B prefix 0xef010063c0c19a282a1b52b07dd5a65b58948a07dae32b (EIP-7702)." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x7235…1e18?", checked: "DexScreener info.websites [] info.socials x.com/meow_robinhood; Gecko token has no website; bio reprints the CA; no project site this pass, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search a site that embeds the CA and the handle" }
  - { priority: P0, question: "Why is Gecko MEOW/AMD reserve_in_usd negative while DexScreener liquidity.usd is $53.8k?", checked: "Gecko pool reserve_in_usd -10478.77 fdv_usd 63473.61; DexScreener liquidity.usd 53771.13; Gecko token total_reserve_in_usd 0.0, 2026-09-03", next: "re-fetch the Gecko pool after the reserve field is non-negative; do not card the negative reserve" }
  - { priority: P1, question: "Does verified LongLauncher / DopplerERC20V1 source leave a privileged path beyond Airlock owner()?", checked: "token owner() Airlock; Airlock owner() 0x21E2…7a66; create-from is EIP-7702 0x9faA…f9e1; LP slots include 0xdead, 2026-09-03", next: "read create and Airlock setters in src/LongLauncher.sol and src/Airlock.sol on the explorer" }
  - { priority: P1, question: "Should CHIP 0xE38B…6E59 or MD 0x3abb…1e18 share a card with MEOW because both quote AMD?", checked: "Different symbols, names, and token addresses; AMD 0x8692…3fdC is the rail on all three books, 2026-09-03", next: "keep separate packets; re-check only if a shared official handle appears" }
  - { priority: P2, question: "Which Gecko token pool produced fdv_usd 344376 vs the AMD book 63474?", checked: "Gecko token price_usd 0.00034438 fdv 344376; pool base_token_price_usd 0.00006347 fdv 63474; DexScreener also lists thin MEOW/ETH books, 2026-09-03", next: "open Gecko token/pools and name the pool that drives the token fdv" }
---

# MEOW — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against AMD. LongLauncher deploys a DopplerERC20V1 token whose on-chain name is AMD and symbol is MEOW, then seeds the MEOW/AMD book. Traders buy and sell MEOW on Uniswap v4. AMD is the quote rail. No official site was located this pass; DexScreener lists an X account that reprints the CA.

Themes: memecoin, stock-paired:AMD, rwa

## Why it matters

The MEOW/AMD Uniswap v4 book printed about $588k of 24h volume on DexScreener at collection, with the quote token the AMD Robinhood Stock Token. On-chain name() is AMD, so the memecoin ticker and the rail ticker collide in name only. CHIP and MD also quote that AMD rail at different token addresses.

## What could go wrong

USD liquidity figures on the MEOW/AMD book count both sides, and the quote side is AMD, not USDG. Gecko reserve_in_usd on this pool was negative this pass, so a card that uses that field would invert the book. Same-ticker MEOW clones exist. No official handle was located, so comms surfaces stay unconfirmed-official.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from EIP-7702 0x9faA…f9e1 at 2026-09-02T09:19:32Z minted name AMD / symbol MEOW supply 1e9*1e18 into Uniswap v4 poolId 0xc057…9132. factory() on the token reverts. owner() is Airlock. genesis path is LongLauncher.create with tokenFactory DopplerERC20V1Factory 0x1B37…b69a and numeraire AMD 0x8692…3fdC. [verified R-4 R-5 R-12]

Airlock getAssetData names that AMD as numeraire and records LP slots at 0xdead. PoolManager is 0x8366…0951. Hook initializer is DopplerHookInitializer 0x4e34…a544. Secondary MEOW/ETH and MEOW/USDG books exist on DexScreener with far less liquidity than the AMD book. [verified R-6 R-7]

## Control and security

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7a66. Create-tx from 0x9faA…f9e1 has 23 bytes of EIP-7702 code delegating to EIP7702StatelessDeleGator 0x63c0…e32B. [verified R-5 R-6 R-20]

DopplerERC20V1, DopplerERC20V1Factory, LongLauncher, and Airlock are verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, src/LongLauncher.sol, src/Airlock.sol, compiler v0.8.26). The token page is a proxy shell. No audit report URL was located this pass. [verified R-2 R-3 R-18 R-19] [unknown]

## Team and provenance

No official domain was located. DexScreener info.websites is empty. DexScreener info.socials lists x.com/meow_robinhood; that account bio reprints CA 0x7235Cf5e…1e18 and @longdotxyz. Flag unconfirmed-official. A third-party claim portal at crypto-pek.netlify.app embedded this CA; flag copypasta-pattern and third-party-link. [claim R-7 R-13 R-15]

On-chain name() is AMD. X display name is Artificial Meow Domination. Those are aliases, not a second token. [claim R-1 R-13]

## Economics and activity

MEOW/AMD Uniswap v4 24h volume is 587708.52 USD and liquidity.usd is 53771.13 at 2026-09-03T04:10:59Z from DexScreener. fdv/marketCap is 64516. Pair created 2026-09-02T09:19:32Z. Blockscout holders_count 260. [claim R-1 R-7]

Gecko pool volume_usd.h24 is 554392.11 and fdv_usd is 63473.61 at 2026-09-03T04:11:00Z. Gecko reserve_in_usd is -10478.77 this pass and is not a TVL figure. Gecko token volume_usd.h24 is 555248.34; token fdv_usd 344376.22 uses a different price than the AMD book. [claim R-8 R-9]

## Material risks

- Quote token AMD 0x8692…3fdC is the Robinhood Stock Token rail; MEOW is not in GET /rhj/assets. [verified R-10 R-11]
- Pool USD reserve on DexScreener is MEOW plus AMD, not a USDG or WETH backstop. [claim R-7]
- Gecko reserve_in_usd is negative this pass; do not card it. [claim R-8]
- On-chain name() AMD collides with the rail ticker; CHIP and MD are separate AMD-quoted tokens. [verified R-1 R-16 R-17]
- No official handle or domain this pass; X is unconfirmed-official. [claim R-7 R-13]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/launcher/Airlock/AMD and create tx 0x33aa…8612, RPC name/symbol/owner/getAssetData, DexScreener, Gecko pool/token, /rhj/assets, CHIP and MD DexScreener searches, and the @meow_robinhood profile were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-10]
- Numbers: 587708.52 is the DexScreener MEOW/AMD pool 24h volume, not the Gecko 554392.11 pool figure or the 555248.34 token figure. Liquidity 53771.13 is DexScreener. Gecko reserve -10478.77 is not used as TVL. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that MEOW is the AMD Stock Token, or that CHIP/MD are the same name. /rhj/assets AMD is 0x8692…3fdC; this token is 0x7235…1e18 with symbol MEOW; CHIP is 0xE38B…6E59; MD is 0x3abb…1e18. [inference R-10 R-16 R-17]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no meow / MEOW / 0x7235…1e18. content/dependencies/stock-tokens.yaml has AMD 0x8692…3fdC as a rail.
- Explorer: Blockscout api/v2 token, impl, factory, launcher, Airlock, AMD, create 0x33aa…8612, LaunchCreated log, holders. RPC eth_getCode/eth_call/eth_getLogs with Chrome UA at blocks 53123656–53125184; mint log at block 52462667.
- Aggregators: DexScreener latest/dex/tokens and search CHIP / MD; Gecko pool and token. One Gecko call returned HTTP 429; the pool and token GETs that landed were HTTP 200 and were not retried in a loop.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one AMD row at 0x8692…3fdC, 0 MEOW.
- Social: X user search meow_robinhood; keyword CA and from:meow_robinhood Latest.
- Failed: Blockscout token creator_address_hash null (create tx used instead); Gecko reserve_in_usd negative; Gecko token fdv disagrees with the AMD pool.
- Time: collection 2026-09-03T04:04Z–2026-09-03T04:12Z.
