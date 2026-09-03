---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: aapldog
name: AAPLDOG
packet_tier: seed
as_of: 2026-09-03T04:25:00Z
prior_packet: null
supersedes: null
owned_slugs: [aapldog]
allowed_paths:
  - research/inbox/packets/aapldog/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Apple Dog
  aliases: [AAPLDOG]
  symbols: [AAPLDOG]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites []; Gecko token info websites [] and twitter_handle null this pass"
  official_handle: "@AppleDogRH"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or the @AppleDogRH profile this pass"
  possible_matches:
    - slug: ap
      signals: [shared-address]
      contrary_signals:
        - "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 is the Apple • Robinhood Token the pair is quoted in; it is the census AP row, not a contract this name deployed"
        - "Apple Dog is the token launched against that quote asset; the two share no handle or domain"
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "AAPLDOG is the ERC-20 at 0x06e52E5f…1e18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; @AppleDogRH is not @longdotxyz"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the AAPLDOG/AAPL pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0x95ed1e86…8ee6 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: aaplcat
      signals: [other]
      contrary_signals:
        - "Packed AAPLCAT is Apple Cat at 0x73A9999f…1e18 / pair 0x719a752f…c5b6 / @AAPLCAT_ / applecat.club"
        - "AAPLDOG is Apple Dog at 0x06e52E5f…1e18 / pair 0xe11d3a20…47ab / @AppleDogRH"
        - "Same AAPL quote rail 0xaF3D…93f9; no shared domain, handle, or reproduced address"
    - slug: icoin
      signals: [other]
      contrary_signals:
        - "Packed ICOIN is iCoin at 0x5d6EF…1e18 / pair 0xc391…4188 / @iCoinRH"
        - "AAPLDOG is 0x06e52E5f…1e18 paired to the same AAPL rail, different token and pair"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "AAPLDOG is 0x06e52E5f…1e18 paired to AAPL 0xaF3D…93f9"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x06e52E5f…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create at 2026-09-01T22:37:18Z minted Apple Dog / AAPLDOG into Uniswap v4 pool 0xe11d3a20…47ab quoted against Apple • Robinhood Token AAPL 0xaF3D…93f9. AAPL is the quote rail. Distinct from packed ICOIN, AP/AAPL 0x69c68e4C…1e18, and packed AAPLCAT. @AppleDogRH posted this CA; DexScreener socials list that handle. [R-1] [R-2] [R-4] [R-5] [R-6] [R-8] [R-9] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-4, CLM-5], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-12], note: "" }

links:
  - { kind: x, url: "https://x.com/AppleDogRH", authenticity: confirmed }
  - { kind: other, url: "https://www.tiktok.com/@nexinoff", authenticity: unconfirmed }

deployments:
  - label: AAPLDOG token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-4, R-5, R-6]
  - label: DopplerERC20V1Factory (token factory in create calldata)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-13]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-13]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-14]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6]

metrics:
  - { kind: volume_24h, value: 657305.78, currency: USD, as_of: 2026-09-03T04:20:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe11d3a207d4106d234e678f0991b7f2393c5c9ce58c668304b082c7fe29d47ab volume_usd.h24", class: claim, receipt_ids: [R-2] }
  - { kind: tvl, value: 106008.03, currency: USD, as_of: 2026-09-03T04:20:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe11d3a20…47ab reserve_in_usd (AAPLDOG/AAPL pool, not an all-pools figure)", class: claim, receipt_ids: [R-2] }
  - { kind: market_cap, value: 222368.69, currency: USD, as_of: 2026-09-03T04:20:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe11d3a20…47ab fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-2] }
  - { kind: volume_24h, value: 639979.73, currency: USD, as_of: 2026-09-03T04:20:09Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x06e52E5f…1e18 pair 0xe11d3a20…47ab AAPLDOG/AAPL Uniswap v4 volume.h24", class: claim, receipt_ids: [R-1] }
  - { kind: tvl, value: 122498.56, currency: USD, as_of: 2026-09-03T04:20:09Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x06e52E5f…1e18 pair 0xe11d3a20…47ab liquidity.usd", class: claim, receipt_ids: [R-1] }
  - { kind: market_cap, value: 228834, currency: USD, as_of: 2026-09-03T04:20:09Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x06e52E5f…1e18 pair 0xe11d3a20…47ab fdv/marketCap", class: claim, receipt_ids: [R-1] }
  - { kind: holders, value: 622, currency: null, as_of: 2026-09-03T04:20:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x06e52E5f…1e18 holders_count", class: claim, receipt_ids: [R-4] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:20:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com block 0x32ab802 (53127170): token 0x06e52E5f…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599; name() Apple Dog; symbol() AAPLDOG; decimals 18; totalSupply 1e27; owner() Airlock 0xeb7c0347…0862; factory() reverted. AAPL 0xaF3D…93f9 eth_getCode 283 bytes name() Apple • Robinhood Token symbol() AAPL. Factory code 1912 B. Impl code 13927 B. Launcher code 5826 B. Create-from 0xdF86…B57A code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-4, R-5, R-12, R-13, R-14], result: "Blockscout api/v2 token 0x06e52E5f…1e18 name Apple Dog is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599; creator_address_hash null creation_transaction_hash null this pass; token symbol AAPLDOG holders_count 622 then 623 total_supply 1e27. Tx 0x95ed1e86…8ee6 timestamp 2026-09-01T22:37:18Z block 52080704 from 0xdF86…B57A (is_contract false) to LongLauncher method create; decoded numeraire 0xaF3D…93f9 tokenFactory 0x1B37…b69a ascii name Apple Dog symbol AAPLDOG supply 1e27. LaunchCreated normalizedTicker AAPLDOG. PoolManager Initialize id 0xe11d3a20…47ab. AAPL token name Apple • Robinhood Token holders_count 61547." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T04:20:09Z, receipt_ids: [R-1, R-2, R-3], result: "DexScreener latest/dex/tokens/0x06e52E5f…1e18 9 robinhood uniswap pairs; top AAPLDOG/AAPL v4 0xe11d3a20…47ab quote 0xaF3D…93f9 Apple • Robinhood Token / AAPL liquidity.usd 122498.56 volume.h24 639979.73 fdv 228834 pairCreatedAt 1788302238000 (2026-09-01T22:37:18Z) info.websites [] socials x.com/AppleDogRH and tiktok.com/@nexinoff. Gecko pool same address name AAPLDOG / AAPL dex bankr-robinhood volume_usd.h24 657305.78 reserve_in_usd 106008.03 fdv_usd 222368.69 pool_created_at 2026-09-01T22:37:18Z market_cap_usd null. Gecko token volume_usd.h24 659162.69 (all pools)." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-8, R-9], result: "@AppleDogRH display Apple Dog, og:description Just a dog with an apple.... paired with $aapl, 32 posts, joined September 2026. Bio does not pin the CA. Post 2095043535301230872 2026-09-02T06:57:57Z Welcome To The Orchard CA 0x06e52e5fddf0d8a6d10b963c753a8ef3e1161e18. DexScreener socials twitter https://x.com/AppleDogRH. Gecko token info twitter_handle null websites []. X user search also returned @Apple_Dog_RH (Apple Dog, CTO 12/6) with no this-CA pin this pass." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:20:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0x06e52E5f…1e18) word0 numeraire 0xaF3D76f1…93f9; word5 token 0x06e52E5f…1e18; word1/word2 0xdead; word3 NoOpMigrator 0xba2f330e…5a0e; word4 DopplerHookInitializer 0x4e346895…a544. Airlock owner() 0x21e2ce70…7a66. AAPL name() Apple • Robinhood Token; symbol() AAPL." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T04:20:00Z, receipt_ids: [R-11, R-16], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; AAPL row tokenName Apple • Robinhood Token deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663. Zero AAPLDOG/Apple Dog hits. DexScreener search AP AAPL top robinhood AP/AAPL is ap 0x69c68e4C…1e18 pair 0x29482ee4…, ICOIN/AAPL 0x5d6EF…1e18, AAPLCAT/AAPL 0x73A9999f…1e18; this packet is 0x06e52E5f…1e18 / pair 0xe11d3a20…47ab." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 Apple Dog/AAPLDOG into a Uniswap v4 pool quoted against AAPL 0xaF3D…93f9; Airlock getAssetData numeraire is that AAPL; LP addresses in getAssetData include 0xdead", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Apple Dog", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: AAPLDOG, class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: identity.handle, value: "@AppleDogRH", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-4, R-5, R-6, R-9], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG: tx 0x95ed1e86…8ee6 from EOA 0xdF86…B57A called LongLauncher.create; tokenFactory in calldata DopplerERC20V1Factory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from census LONG (the factory), packed ICOIN 0x5d6EF…1e18, packed AAPLCAT 0x73A9999f…1e18, and AP/AAPL token ap 0x69c68e4C…1e18.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-4, R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset is the AAPL rail Apple • Robinhood Token 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 (GET /rhj/assets 194 assets, one AAPL row, that contract, chainId 4663). AAPLDOG is not in the registry.", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-2, R-6, R-11, R-12], reproduction_ids: [REP-3, REP-5, REP-6], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 pool 0xe11d3a207d4106d234e678f0991b7f2393c5c9ce58c668304b082c7fe29d47ab; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood; PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-2, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko AAPLDOG/AAPL pool 0xe11d3a20…47ab volume_usd.h24 657305.78 reserve_in_usd 106008.03 fdv_usd 222368.69 at 2026-09-03T04:20:00Z (pool slice, not Gecko token all-pools 659162.69)", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener same pair liquidity.usd 122498.56 volume.h24 639979.73 fdv/marketCap 228834 at 2026-09-03T04:20:09Z", class: verified, observed_at: 2026-09-03T04:20:09Z, receipt_ids: [R-1], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 622, class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from EOA 0xdF86F462517d8845Bb91BBEED9fb68B86e21B57A (no code). Lock beneficiaries 95% 0xdF86…B57A / 5% 0x21E2…7A66.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on DexScreener, the @AppleDogRH profile, Blockscout, or Gecko this pass", class: unknown, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@AppleDogRH.role", value: project, class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@AppleDogRH.slug", value: aapldog, class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token info websites []; @AppleDogRH profile HTML has no CA and no project domain this pass", class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-8, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: relationship, value: "Gecko dex id bankr-robinhood on the AAPLDOG/AAPL pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge AAPLDOG into census bankr.", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-22, field: candidate, value: "aapldog | AAPLDOG | @AppleDogRH | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "third-party-link: DexScreener lists tiktok.com/@nexinoff; Gecko twitter_handle null; no CA on the TikTok URL this pass; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:20:09Z, receipt_ids: [R-1, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Same-ticker clones on robinhood this pass include AAPLDOGG 0x9F5813C0…1e18, flapsh aapldog 0xC7ee5552…7777, aapldog 0x85d97334…d401, and Blockscout search hits APPLDOG/APPLEDOG at other addresses; this packet is only 0x06e52E5f…1e18 / pair 0xe11d3a20…47ab", class: claim, observed_at: 2026-09-03T04:20:09Z, receipt_ids: [R-1, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@Apple_Dog_RH.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: communications.status, value: "copypasta-pattern / third-party-link: posts pushed crypto-keo.netlify.app/claim?contract=0x06e52E5f… and robinhood-main-dex-rkx.netlify.app/vote/0x06e52E5f…; not from @AppleDogRH this pass", class: claim, observed_at: 2026-09-03T04:18:00Z, receipt_ids: [R-17, R-18], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13]
    material_effect: "Same AAPLDOG/AAPL pool 0xe11d3a20…47ab: Gecko reserve_in_usd 106008.03 vs DexScreener liquidity.usd 122498.56; 24h volume 657305.78 vs 639979.73; fdv 222368.69 vs 228834. A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko AAPLDOG/AAPL 24h volume $657k, liquidity $106k"
    summary: "Gecko pool 0xe11d3a20…47ab volume_usd.h24 657306 reserve_in_usd 106008 fdv_usd 222369."
    occurred_at: 2026-09-03T04:20:00Z
    observed_at: 2026-09-03T04:20:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-2]
  - id: EVT-2
    type: onchain
    title: "LongLauncher.create minted Apple Dog / AAPLDOG against AAPL"
    summary: "Tx 0x95ed1e86…8ee6 from 0xdF86…B57A at 2026-09-01T22:37:18Z; LaunchCreated ticker AAPLDOG pool 0xe11d3a20…47ab."
    occurred_at: 2026-09-01T22:37:18Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
  - id: EVT-3
    type: company
    title: "@AppleDogRH posted CA 0x06e52e5f…1e18"
    summary: "Welcome To The Orchard. CA 0x06e52e5fddf0d8a6d10b963c753a8ef3e1161e18 plus an X group join link. Bio does not pin the CA."
    occurred_at: 2026-09-02T06:57:57Z
    observed_at: 2026-09-03T04:25:00Z
    affected_fields: [identity.handle, deployment.address, communications.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-4
    type: ct
    title: "@AppleDogRH quoted the LONG barbell"
    summary: "@AppleDogRH posted The $AAPLDOG X @longdotxyz barbell quoting @longdotxyz The LONG coded barbell."
    occurred_at: 2026-09-02T18:41:58Z
    observed_at: 2026-09-03T04:18:00Z
    affected_fields: [communications.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-5
    type: ct
    title: "Third-party netlify vote and claim URLs used this CA"
    summary: "@veilcircuitNFT posted a robinhood-main-dex-rkx.netlify.app vote link; other accounts posted crypto-keo.netlify.app/claim links with this contract."
    occurred_at: 2026-09-03T04:14:11Z
    observed_at: 2026-09-03T04:18:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17, R-18]

receipts:
  - { id: R-1, publisher: DexScreener, title: "AAPLDOG token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18", published_at: null, accessed_at: 2026-09-03T04:20:09Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-13, CLM-19, CLM-21, CLM-22, CLM-23, CLM-25], excerpt: "9 robinhood uniswap pairs. Top pairAddress 0xe11d3a207d4106d234e678f0991b7f2393c5c9ce58c668304b082c7fe29d47ab labels v4 base Apple Dog / AAPLDOG 0x06e52E5f…1e18 quote Apple • Robinhood Token / AAPL 0xaF3D…93f9 liquidity.usd 122498.56 volume.h24 639979.73 fdv 228834 pairCreatedAt 1788302238000. info.websites [] socials x.com/AppleDogRH tiktok.com/@nexinoff." }
  - { id: R-2, publisher: GeckoTerminal, title: "AAPLDOG/AAPL pool on Bankr (Robinhood)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe11d3a207d4106d234e678f0991b7f2393c5c9ce58c668304b082c7fe29d47ab", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-12, CLM-21, EVT-1], excerpt: "attributes.name AAPLDOG / AAPL address 0xe11d3a20…47ab pool_created_at 2026-09-01T22:37:18Z volume_usd.h24 657305.781641901 reserve_in_usd 106008.0299 fdv_usd 222368.6917 market_cap_usd null. transactions.h24 buys 3374 sells 3685. relationships.dex.id bankr-robinhood. quote robinhood_0xaf3d76f1…93f9." }
  - { id: R-3, publisher: GeckoTerminal, title: "Apple Dog token on Robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12], excerpt: "attributes.name Apple Dog symbol AAPLDOG decimals 18 total_supply 1e27 price_usd 0.000222699849 fdv_usd 222699.849010883 market_cap_usd null volume_usd.h24 659162.688865825 total_reserve_in_usd 54969.41. coingecko_coin_id null. Top pool robinhood_0xe11d3a20…47ab." }
  - { id: R-4, publisher: Blockscout, title: "AAPLDOG 0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18", url: "https://robinhoodchain.blockscout.com/address/0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-5, CLM-6, CLM-7, CLM-11, CLM-14, CLM-20, CLM-22, EVT-2], excerpt: "api/v2: hash 0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18 name Apple Dog is_contract true is_verified true creator_address_hash null creation_transaction_hash null this pass proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97F…C599. token symbol AAPLDOG holders_count 622 total_supply 1000000000000000000000000000." }
  - { id: R-5, publisher: Blockscout, title: "AAPLDOG creation tx 0x95ed1e86…", url: "https://robinhoodchain.blockscout.com/tx/0x95ed1e863cb55fd3e681d7cbaa8e0033cbacca4d548795df655384ede9f08ee6", published_at: 2026-09-01T22:37:18Z, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-9, CLM-15, CLM-24, EVT-2], excerpt: "timestamp 2026-09-01T22:37:18.000000Z status ok block_number 52080704 from 0xdF86F462517d8845Bb91BBEED9fb68B86e21B57A (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0xaF3D…93f9 tokenFactory 0x1B37…b69a ascii Apple Dog / AAPLDOG initial supply 1e27. LaunchCreated normalizedTicker AAPLDOG launcher 0xdF86…B57A. PoolManager Initialize id 0xe11d3a20…47ab. Lock beneficiaries 95% 0xdF86…B57A / 5% 0x21E2…7A66." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode and ERC-20 / Airlock calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-8, CLM-15, CLM-20], excerpt: "eth_blockNumber 0x32ab802 (53127170). token eth_getCode 44 bytes clone of 0x3be8b97f…c599. name() Apple Dog symbol() AAPLDOG decimals 18 totalSupply 1e27 owner() 0xeb7c0347…0862 factory() revert. Airlock owner() 0x21e2ce70…7a66 getAssetData numeraire 0xaf3d76f1…93f9 token 0x06e52e5f…1e18 LP 0xdead. AAPL name Apple • Robinhood Token. Create-from 0xdF86…B57A code 0x." }
  - { id: R-7, publisher: GeckoTerminal, title: "AAPLDOG/AAPL pool page", url: "https://www.geckoterminal.com/robinhood/pools/0xe11d3a207d4106d234e678f0991b7f2393c5c9ce58c668304b082c7fe29d47ab", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "HTTP 200. AAPLDOG / AAPL pool page on GeckoTerminal network robinhood. Used as the HTML companion to the JSON pool endpoint; live numbers taken from api.geckoterminal.com." }
  - { id: R-8, publisher: "@AppleDogRH", title: "Apple Dog profile", url: "https://x.com/AppleDogRH", published_at: null, accessed_at: 2026-09-03T04:25:02Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-17, CLM-18, CLM-19, CLM-26], excerpt: "og:title Apple Dog (@AppleDogRH) on X. og:description Just a dog with an apple.... paired with $aapl. twitter:data1 32 posts. Joined September 2026. Profile HTML has no 0x06e52 CA this pass. X user search Apple Dog also returned @Apple_Dog_RH bio Just a dog who loves apples - CTO 12/6." }
  - { id: R-9, publisher: "@AppleDogRH", title: "Welcome To The Orchard CA post", url: "https://x.com/AppleDogRH/status/2095043535301230872", published_at: 2026-09-02T06:57:57Z, accessed_at: 2026-09-03T04:25:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, EVT-3], excerpt: "Welcome To The Orchard. CA: 0x06e52e5fddf0d8a6d10b963c753a8ef3e1161e18. X GROUP: https://x.com/i/chat/group_join/g2094953260302107067/T9RwY12N14. Author @AppleDogRH Apple Dog." }
  - { id: R-10, publisher: GeckoTerminal, title: "Apple Dog token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18/info", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-19, CLM-23], excerpt: "attributes.websites [] twitter_handle null telegram_handle null discord_url null description null gt_verified false. holders.count 608 last_updated 2026-09-03T04:17:50Z. categories Fruits, Dog, Animal." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8], excerpt: "HTTP 200. assets length 194. One AAPL hit: tokenSymbol AAPL tokenName Apple • Robinhood Token deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663 status ASSET_STATUS_ACTIVE. tokenSymbol/tokenName scan for AAPLDOG and Apple Dog returned 0 hits." }
  - { id: R-12, publisher: Blockscout, title: "AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", url: "https://robinhoodchain.blockscout.com/token/0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10], excerpt: "api/v2: hash 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 name BeaconProxy is_verified true proxy_type eip1967_beacon implementation Stock 0xb35490d6…5aE2. token name Apple • Robinhood Token symbol AAPL holders_count 61547." }
  - { id: R-13, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "api/v2 smart-contracts: name DopplerERC20V1 compiler_version v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. Factory 0x1B37…b69a DopplerERC20V1Factory same compiler, src/tokens/DopplerERC20V1Factory.sol." }
  - { id: R-14, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "api/v2 smart-contracts: name LongLauncher compiler_version v0.8.26+commit.8a97fa7a is_verified true is_partially_verified false file_path src/LongLauncher.sol verified_at 2026-07-14T11:23:57Z." }
  - { id: R-15, publisher: "@AppleDogRH", title: "The $AAPLDOG X @longdotxyz barbell", url: "https://x.com/AppleDogRH/status/2095220705457803528", published_at: 2026-09-02T18:41:58Z, accessed_at: 2026-09-03T04:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "The $AAPLDOG X @longdotxyz barbell. Quotes @longdotxyz The LONG coded barbell (2090888195227414804). Author @AppleDogRH." }
  - { id: R-16, publisher: DexScreener, title: "Search AAPLDOG and AP AAPL", url: "https://api.dexscreener.com/latest/dex/search?q=AAPLDOG", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-25], excerpt: "Assigned pair is AAPLDOG/AAPL 0xe11d3a20…47ab token 0x06e52E5f…1e18. Distinct robinhood rows: AAPLDOGG 0x9F5813C0…1e18; flapsh aapldog 0xC7ee5552…7777; aapldog 0x85d97334…d401. Search AP AAPL also lists ICOIN 0x5d6EF…1e18, AP/AAPL ap 0x69c68e4C…1e18 pair 0x29482ee4…, AAPLCAT 0x73A9999f…1e18." }
  - { id: R-17, publisher: "@veilcircuitNFT", title: "AAPLDOG vote netlify link", url: "https://x.com/veilcircuitNFT/status/2095364711227232399", published_at: 2026-09-03T04:14:11Z, accessed_at: 2026-09-03T04:18:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, EVT-5], excerpt: "Attention $AAPLDOG Family! YOUR vote matters! Listing ID: 1821. https://robinhood-main-dex-rkx.netlify.app/vote/0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18" }
  - { id: R-18, publisher: "@Fussdiener1", title: "AAPLDOG claim portal netlify link", url: "https://x.com/Fussdiener1/status/2095355723328942136", published_at: 2026-09-03T03:38:28Z, accessed_at: 2026-09-03T04:18:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, EVT-5], excerpt: "$AAPLDOG quietly opened claim portal. CA: 0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18 https://crypto-keo.netlify.app/claim?contract=0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18&cfg=evmdrop&pid=nOC7d" }

gaps:
  - { priority: P0, question: "Does @AppleDogRH add the CA to its bio or a website field that bidirectionally matches DexScreener?", checked: "Profile og:description has no CA; post 2095043535301230872 prints the CA; DexScreener socials twitter that handle; Gecko twitter_handle null, 2026-09-03", next: "re-read the @AppleDogRH profile website/bio after a Claim Profile" }
  - { priority: P1, question: "Does tiktok.com/@nexinoff pin CA 0x06e52E5f…1e18 or a handle that cross-links?", checked: "DexScreener lists the TikTok URL; Gecko has no tiktok field; profile HTML for @AppleDogRH has no tiktok string this pass, 2026-09-03", next: "open the TikTok profile if it becomes readable without a login wall" }
  - { priority: P1, question: "Do Lock beneficiaries 0xdF86…B57A (95%) and 0x21E2…7A66 (5%) still control AAPL-side fees after graduation?", checked: "create-tx Lock log on hook 0x4e34…a544; getAssetData LP slots include 0xdead; no later fee-vault tx found this pass, 2026-09-03", next: "read Doppler lock / fee collector state and any LongFeeVaultFactory deployVault for this token" }
  - { priority: P2, question: "Should any of the other robinhood AAPLDOG tickers (0x9F58…, 0xC7ee…, 0x85d9…) get their own packets?", checked: "DexScreener search listed them with far lower liquidity than 0x06e52E5f…1e18, 2026-09-03", next: "only if an assignment names those CAs" }
---

# AAPLDOG — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). LongLauncher.create on 2026-09-01 minted Apple Dog (AAPLDOG) and seeded the AAPLDOG/AAPL book. Traders buy and sell AAPLDOG against AAPL. AAPL is the quote rail, not the subject. @AppleDogRH posted this CA; no project domain was located this pass.

Themes: memecoin, stock-paired:AAPL, rwa

## Why it matters

The AAPLDOG/AAPL Uniswap v4 book printed about $657k of 24h volume on Gecko at collection, with DexScreener on the same pair near $640k volume and ~$122k liquidity. That is a live AAPL-quoted graduation, distinct from packed ICOIN, packed AAPLCAT, and from AP/AAPL (token ap 0x69c68e4C…1e18). GET /rhj/assets lists AAPL at 0xaF3D…93f9 and has no AAPLDOG row.

## What could go wrong

USD liquidity figures on the AAPLDOG/AAPL book count both sides, and the quote side is AAPL, not USDG. Gecko reserve and DexScreener liquidity disagree on the same pool. Same-ticker Apple Dog clones exist on robinhood and other chains. @Apple_Dog_RH is a colliding handle. TikTok and netlify vote/claim URLs are third-party-links. No project domain was located.

## Product and mechanics

DopplerERC20V1Factory 0x1B37…b69a clones DopplerERC20V1 via EIP-1167. LongLauncher.create from 0xdF86…B57A at 2026-09-01T22:37:18Z minted Apple Dog / AAPLDOG supply 1e9*1e18 into Uniswap v4 poolId 0xe11d3a20…47ab quoted against AAPL 0xaF3D…93f9. factory() on the token reverts; owner() is Airlock 0xeb7C…0862. Blockscout left creator_address_hash empty this pass; the create tx is the pad. [verified R-4 R-5 R-6]

Airlock getAssetData numeraire is that AAPL; LP slots include 0xdead. PoolManager is 0x8366…0951. LaunchCreated normalizedTicker AAPLDOG. Secondary AAPLDOG/USDG and AAPLDOG/ETH books exist on DexScreener with far less liquidity than the AAPL book. [verified R-1 R-2 R-6]

## Control and security

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-tx from 0xdF86…B57A has no code. Create-tx Lock beneficiaries were 95% 0xdF86…B57A and 5% 0x21E2…7A66. [verified R-5 R-6]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The token page is a verified EIP-1167 shell only. No audit report URL was located this pass. [verified R-4 R-13 R-14] [unknown]

## Team and provenance

@AppleDogRH display name Apple Dog. Bio is Just a dog with an apple.... paired with $aapl; it does not pin the CA. Post 2095043535301230872 prints CA 0x06e52e5f…1e18. DexScreener socials twitter that handle. Gecko twitter_handle is null and websites are empty. Do not invent a second official handle. [verified R-8 R-9] [claim R-1 R-10]

X user search also returned @Apple_Dog_RH. Flag handle-collision. DexScreener lists tiktok.com/@nexinoff; no CA was confirmed on that URL this pass. Flag unconfirmed-official and third-party-link. Netlify vote and claim URLs that embed this CA are copypasta-pattern / third-party-link. [claim R-8 R-16 R-17 R-18]

## Economics and activity

AAPLDOG/AAPL Uniswap v4 24h volume is 657305.78 USD and reserve_in_usd is 106008.03 at 2026-09-03T04:20:00Z from the Gecko pool endpoint. fdv_usd is 222368.69. Gecko token volume_usd.h24 is 659162.69 across all pools, not the AAPL book. [claim R-2 R-3]

DexScreener same pair: liquidity.usd 122498.56, volume.h24 639979.73, fdv/marketCap 228834 at 2026-09-03T04:20:09Z. Blockscout holders_count 622. Pair created 2026-09-01T22:37:18Z. [claim R-1 R-4]

Gecko dex id is bankr-robinhood; DexScreener dexId is uniswap v4. Creation path is LongLauncher.create. [claim R-1 R-2 R-5]

## Material risks

- Quote token AAPL 0xaF3D…93f9 is the Robinhood Stock Token rail in GET /rhj/assets; AAPLDOG is not. [verified R-11 R-12]
- Pool USD reserve is AAPLDOG plus AAPL, not a USDG or WETH backstop. [claim R-1 R-2]
- Gecko reserve 106008.03 vs DexScreener liquidity 122498.56 on the same pool. [claim R-1 R-2]
- Same-ticker clones and colliding handle @Apple_Dog_RH. [claim R-8 R-16]
- TikTok and netlify vote/claim URLs are third-party-links; no project domain this pass. [claim R-1 R-17 R-18]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/AAPL and the create tx, RPC name/symbol/owner/getAssetData, DexScreener token + search, Gecko pool/token/info, /rhj/assets, @AppleDogRH profile and CA post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-8 R-11]
- Numbers: 657305.78 is the Gecko AAPLDOG/AAPL pool 24h volume, not the 659162.69 token all-pools figure. Reserve 106008.03 is that pool. DexScreener 639979.73 / 122498.56 is the same pair, different aggregator. Assignment lead of ~$99,549 liq / ~$646,907 vol was not reproduced at this as_of; live DexScreener liq is $122,498.56. [claim R-1 R-2 R-3]
- Adversarial: the strongest contrary reading is that this is packed ICOIN, packed AAPLCAT, AP/AAPL, or an official Apple product. ICOIN is 0x5d6EF…1e18 / @iCoinRH; AAPLCAT is 0x73A9999f…1e18 / @AAPLCAT_; AP is 0x69c68e4C…1e18; AAPL in /rhj/assets is the quote rail 0xaF3D…93f9; AAPLDOG is a LongLauncher memecoin at 0x06e52E5f…1e18. [inference R-4 R-11 R-16]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no aapldog / AAPLDOG / Apple Dog / 0x06e52E5f…1e18. content/dependencies/stock-tokens.yaml AAPL address is 0xaF3D…93f9.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, AAPL, create tx 0x95ed1e86…8ee6, LaunchCreated / Initialize / Lock logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53127170; eth_getLogs LaunchCreated topic2 = token.
- Aggregators: DexScreener latest/dex/tokens, latest/dex/pairs, search AAPLDOG and AP AAPL; Gecko token, pool, token/info, token/pools.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 AAPL, 0 AAPLDOG.
- Social: X keyword AAPLDOG / from:AppleDogRH Latest; user search Apple Dog / @AppleDogRH; x.com/AppleDogRH HTML; CA query 0x06e52E5f….
- Failed: Blockscout token creator_address_hash null (create tx via LaunchCreated used instead); factory() on the token reverts (Airlock/owner used instead); Gecko twitter_handle null; TikTok not opened beyond the DexScreener URL.
- Time: collection 2026-09-03T04:18Z–2026-09-03T04:25Z.
