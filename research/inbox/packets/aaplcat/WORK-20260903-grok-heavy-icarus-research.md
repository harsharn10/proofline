---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: aaplcat
name: AAPLCAT
packet_tier: seed
as_of: 2026-09-03T03:52:00Z
prior_packet: null
supersedes: null
owned_slugs: [aaplcat]
allowed_paths:
  - research/inbox/packets/aaplcat/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Apple Cat
  aliases: [AAPLCAT]
  symbols: [AAPLCAT]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://applecat.club
  official_handle: "@AAPLCAT_"
  repository: "NULL — no GitHub org or repository URL on applecat.club, the @AAPLCAT_ profile, DexScreener, Gecko, or Blockscout this pass"
  possible_matches:
    - slug: ap
      signals: [shared-address]
      contrary_signals:
        - "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 is the Apple • Robinhood Token (AAPL) the pair is quoted in; the census AP row carries it as the quote side of its own Uniswap link, and this name did not deploy it"
        - "Apple Cat is the token launched against that quote asset; the two share no handle or domain"
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "AAPLCAT is the ERC-20 at 0x73A9999f…1e18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; @AAPLCAT_ is not @longdotxyz"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the AAPLCAT/AAPL pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0x75704af8…6a68 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "AAPLCAT is 0x73A9999f…1e18 paired to AAPL 0xaF3D…93f9"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x73A9999f…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; LongLauncher.create at 2026-07-17T14:01:07Z minted Apple Cat / AAPLCAT into Uniswap v4 pool 0x719a752f…c5b6 quoted against Apple • Robinhood Token AAPL 0xaF3D…93f9. AAPL is the quote rail. Distinct from packed ICOIN and from AP/AAPL 0x69c68e4C…1e18. @AAPLCAT_ bio pins this CA; applecat.club reprints it. [R-1] [R-2] [R-4] [R-5] [R-6] [R-8] [R-9] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-4, CLM-5], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-12], note: "" }

links:
  - { kind: site, url: "https://applecat.club", authenticity: confirmed }
  - { kind: x, url: "https://x.com/AAPLCAT_", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/applecatlong", authenticity: unconfirmed }

deployments:
  - label: AAPLCAT token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x73A9999f6e9Db138E1aE4595fde049A401161E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-4, R-5, R-6]
  - label: DopplerERC20V1Factory (token creator)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-13]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:49:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6]

metrics:
  - { kind: volume_24h, value: 1194905.86, currency: USD, as_of: 2026-09-03T03:50:20Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x719a752f07c591328c94ba2d1cb44f11d0eafb98f3caf67566c33ba74061c5b6 volume_usd.h24", class: claim, receipt_ids: [R-2] }
  - { kind: tvl, value: 259866.15, currency: USD, as_of: 2026-09-03T03:50:20Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x719a752f…c5b6 reserve_in_usd (AAPLCAT/AAPL pool, not an all-pools figure)", class: claim, receipt_ids: [R-2] }
  - { kind: market_cap, value: 485272.95, currency: USD, as_of: 2026-09-03T03:50:20Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x719a752f…c5b6 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-2] }
  - { kind: volume_24h, value: 1150376.94, currency: USD, as_of: 2026-09-03T03:47:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x73A9999f…1e18 pair 0x719a752f…c5b6 AAPLCAT/AAPL Uniswap v4 volume.h24", class: claim, receipt_ids: [R-1] }
  - { kind: tvl, value: 191614.26, currency: USD, as_of: 2026-09-03T03:47:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x73A9999f…1e18 pair 0x719a752f…c5b6 liquidity.usd", class: claim, receipt_ids: [R-1] }
  - { kind: market_cap, value: 536371, currency: USD, as_of: 2026-09-03T03:47:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x73A9999f…1e18 pair 0x719a752f…c5b6 fdv/marketCap", class: claim, receipt_ids: [R-1] }
  - { kind: holders, value: 1564, currency: null, as_of: 2026-09-03T03:47:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x73A9999f…1e18 holders_count", class: claim, receipt_ids: [R-4] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:49:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com block 0x32a7264 (53113444): token 0x73A9999f…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599; name() Apple Cat; symbol() AAPLCAT; decimals 18; totalSupply 982420883592169802250596277; owner() Airlock 0xeb7c0347…0862; factory() reverted. AAPL 0xaF3D…93f9 eth_getCode 283 bytes name() Apple • Robinhood Token symbol() AAPL. Factory code 1912 B. Impl code 13927 B. Launcher code 5826 B. Create-from 0x491E…cFC4 code 23 B (EIP-7702)." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-12, R-13], result: "Blockscout api/v2 token 0x73A9999f…1e18 name Apple Cat is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator 0x1B37…b69a creation tx 0x75704af8…6a68; token name Apple Cat symbol AAPLCAT holders_count 1564 total_supply 982420883592169802250596277. Tx timestamp 2026-07-17T14:01:07Z block 12174641 from 0x491E…cFC4 (proxy_type eip7702 CaliburEntry) to LongLauncher method create; decoded numeraire 0xaF3D…93f9 tokenFactory 0x1B37…b69a name Apple Cat symbol AAPLCAT supply 1e27. LaunchCreated normalizedTicker AAPLCAT pool 0x719a752f…c5b6. AAPL token name Apple • Robinhood Token holders_count 61558." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T03:50:20Z, receipt_ids: [R-1, R-2, R-3], result: "DexScreener latest/dex/tokens/0x73A9999f…1e18 8 robinhood uniswap pairs; top AAPLCAT/AAPL v4 0x719a752f…c5b6 quote 0xaF3D…93f9 Apple • Robinhood Token / AAPL liquidity.usd 191614.26 volume.h24 1150376.94 fdv 536371 pairCreatedAt 1784296867000 (2026-07-17T14:01:07Z) info.websites applecat.club socials x.com/AAPLCAT_ and t.me/applecatlong. Gecko pool same address name AAPLCAT / AAPL dex bankr-robinhood volume_usd.h24 1194905.86 reserve_in_usd 259866.15 fdv_usd 485272.95 pool_created_at 2026-07-17T14:01:07Z market_cap_usd null. Gecko token volume_usd.h24 1207875.16 (all pools)." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-8, R-9], result: "@AAPLCAT_ display Apple Cat, bio Just a cat paired with $AAPL stocks $AAPLCAT CA 0x73a9999f6e9db138e1ae4595fde049a401161e18, 492 followers. applecat.club title Apple Cat, meta description Apple Cat ($AAPLCAT) the #1 memecoin paired with $AAPL on Robinhood Chain, prints CA 0x73a9999f…1e18 and https://x.com/AAPLCAT_, DexScreener pair link 0x719a752f…c5b6. DexScreener socials twitter https://x.com/AAPLCAT_. Site HTML also has grok-app-builder x:creator @ServerInu." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:49:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0x73A9999f…1e18) word0 numeraire 0xaF3D76f1…93f9; word5 token 0x73A9999f…1e18; word1/word2 0xdead; Airlock owner() 0x21e2ce70…7a66. AAPL name() Apple • Robinhood Token; symbol() AAPL." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T03:49:00Z, receipt_ids: [R-11, R-16], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; AAPL row tokenName Apple • Robinhood Token deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663. Zero AAPLCAT/Apple Cat hits. DexScreener search AP AAPL top robinhood AP/AAPL is ap 0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18 pair 0x29482ee4…, not 0x73A9999f…1e18." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 Apple Cat/AAPLCAT into a Uniswap v4 pool quoted against AAPL 0xaF3D…93f9; Airlock getAssetData numeraire is that AAPL; LP addresses in getAssetData include 0xdead", class: verified, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Apple Cat", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: AAPLCAT, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: identity.handle, value: "@AAPLCAT_", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x73A9999f6e9Db138E1aE4595fde049A401161E18", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6, R-8, R-9], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG: tx 0x75704af8…6a68 from EIP-7702 0x491E…cFC4 called LongLauncher.create; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from census LONG (the factory), packed ICOIN 0x5d6EF…1e18, and AP/AAPL token ap 0x69c68e4C…1e18.", class: verified, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-4, R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset is the AAPL rail Apple • Robinhood Token 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 (GET /rhj/assets 194 assets, one AAPL row, that contract, chainId 4663). AAPLCAT is not in the registry.", class: verified, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-1, R-2, R-6, R-11, R-12], reproduction_ids: [REP-3, REP-5, REP-6], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 pool 0x719a752f07c591328c94ba2d1cb44f11d0eafb98f3caf67566c33ba74061c5b6; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood; PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951", class: verified, observed_at: 2026-09-03T03:50:20Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-2, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko AAPLCAT/AAPL pool 0x719a752f…c5b6 volume_usd.h24 1194905.86 reserve_in_usd 259866.15 fdv_usd 485272.95 at 2026-09-03T03:50:20Z (pool slice, not Gecko token all-pools 1207875.16)", class: verified, observed_at: 2026-09-03T03:50:20Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener same pair liquidity.usd 191614.26 volume.h24 1150376.94 fdv/marketCap 536371 at 2026-09-03T03:47:00Z", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 1564, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from 0x491E9e11a31400fF1085aafBD54e84ed3506cFC4 (EIP-7702 CaliburEntry, 23 B code)", class: verified, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on DexScreener, applecat.club, the @AAPLCAT_ profile, Blockscout, or Gecko this pass", class: unknown, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@AAPLCAT_.role", value: project, class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@AAPLCAT_.slug", value: aaplcat, class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "https://applecat.club — page prints CA 0x73a9999f…1e18 and links x.com/AAPLCAT_; DexScreener websites field is that URL. HTML also includes grok-app-builder and x:creator @ServerInu.", class: verified, observed_at: 2026-09-03T03:47:51Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-20, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: relationship, value: "Gecko dex id bankr-robinhood on the AAPLCAT/AAPL pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge AAPLCAT into census bankr.", class: verified, observed_at: 2026-09-03T03:50:20Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-22, field: candidate, value: "aaplcat | AAPLCAT | @AAPLCAT_ | applecat.club — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "third-party-link: t.me/applecatlong og:title Apple Cat Club, 31 subscribers, no contract in the preview; DexScreener lists it; applecat.club does not link Telegram this pass; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:47:51Z, receipt_ids: [R-1, R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Same-ticker clones on robinhood this pass include AppleCat 0xbD6B2b93…9BA3, AAPLCat/WETH 0xaB2f23c7…7777 (@AAPLCATRH), and AAPLCAT 0x6974508F…9d40; this packet is only 0x73A9999f…1e18 / pair 0x719a752f…c5b6", class: claim, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@AAPLCATRH.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-8, R-16], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13]
    material_effect: "Same AAPLCAT/AAPL pool 0x719a752f…c5b6: Gecko reserve_in_usd 259866.15 vs DexScreener liquidity.usd 191614.26; 24h volume 1194905.86 vs 1150376.94; fdv 485272.95 vs 536371. A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko AAPLCAT/AAPL 24h volume $1.19M, liquidity $260k"
    summary: "Gecko pool 0x719a752f…c5b6 volume_usd.h24 1194906 reserve_in_usd 259866 fdv_usd 485273."
    occurred_at: 2026-09-03T03:50:20Z
    observed_at: 2026-09-03T03:50:20Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-2]
  - id: EVT-2
    type: onchain
    title: "LongLauncher.create minted Apple Cat / AAPLCAT against AAPL"
    summary: "Tx 0x75704af8…6a68 from 0x491E…cFC4 at 2026-07-17T14:01:07Z; LaunchCreated ticker AAPLCAT pool 0x719a752f…c5b6."
    occurred_at: 2026-07-17T14:01:07Z
    observed_at: 2026-09-03T03:47:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
  - id: EVT-3
    type: company
    title: "applecat.club lists CA 0x73a9999f…1e18 and @AAPLCAT_"
    summary: "Site title Apple Cat; description names $AAPLCAT paired with $AAPL on Robinhood Chain; prints the CA and Follow @AAPLCAT_."
    occurred_at: 2026-09-03T03:47:51Z
    observed_at: 2026-09-03T03:47:51Z
    affected_fields: [identity.domain, identity.handle, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-4
    type: company
    title: "@AAPLCAT_ posted The true believer LONG"
    summary: "@AAPLCAT_ posted The true believer with LONG. Bio already pins CA 0x73a9999f…1e18."
    occurred_at: 2026-09-02T13:03:05Z
    observed_at: 2026-09-03T03:48:00Z
    affected_fields: [communications.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]

receipts:
  - { id: R-1, publisher: DexScreener, title: "AAPLCAT token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x73A9999f6e9Db138E1aE4595fde049A401161E18", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-13, CLM-19, CLM-21, CLM-22, CLM-23, CLM-25], excerpt: "8 robinhood uniswap pairs. Top pairAddress 0x719a752f07c591328c94ba2d1cb44f11d0eafb98f3caf67566c33ba74061c5b6 labels v4 base Apple Cat / AAPLCAT 0x73A9999f…1e18 quote Apple • Robinhood Token / AAPL 0xaF3D…93f9 liquidity.usd 191614.26 volume.h24 1150376.94 fdv 536371 pairCreatedAt 1784296867000. info.websites https://applecat.club socials x.com/AAPLCAT_ t.me/applecatlong." }
  - { id: R-2, publisher: GeckoTerminal, title: "AAPLCAT/AAPL pool on Bankr (Robinhood)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x719a752f07c591328c94ba2d1cb44f11d0eafb98f3caf67566c33ba74061c5b6", published_at: null, accessed_at: 2026-09-03T03:50:20Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-12, CLM-21, EVT-1], excerpt: "attributes.name AAPLCAT / AAPL address 0x719a752f…c5b6 pool_created_at 2026-07-17T14:01:07Z volume_usd.h24 1194905.85716189 reserve_in_usd 259866.1464 fdv_usd 485272.9539 market_cap_usd null. transactions.h24 buys 1613 sells 2595. relationships.dex.id bankr-robinhood. quote robinhood_0xaf3d76f1…93f9." }
  - { id: R-3, publisher: GeckoTerminal, title: "Apple Cat token on Robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x73A9999f6e9Db138E1aE4595fde049A401161E18", published_at: null, accessed_at: 2026-09-03T03:50:20Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12], excerpt: "attributes.name Apple Cat symbol AAPLCAT decimals 18 total_supply 1e27 price_usd 0.0004852729539 fdv_usd 485272.953906163 market_cap_usd null volume_usd.h24 1207875.16027791 total_reserve_in_usd 161843.36. coingecko_coin_id null. Top pool robinhood_0x719a752f…c5b6." }
  - { id: R-4, publisher: Blockscout, title: "AAPLCAT 0x73A9999f6e9Db138E1aE4595fde049A401161E18", url: "https://robinhoodchain.blockscout.com/address/0x73A9999f6e9Db138E1aE4595fde049A401161E18", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-5, CLM-6, CLM-7, CLM-11, CLM-14, CLM-20, CLM-22, EVT-2], excerpt: "api/v2: hash 0x73A9999f6e9Db138E1aE4595fde049A401161E18 name Apple Cat is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x75704af82c41b3a9e27bd5fd7d43f026cd2724b2dd69f8e49e0dbc232f9d6a68 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97F…C599. token symbol AAPLCAT holders_count 1564 total_supply 982420883592169802250596277." }
  - { id: R-5, publisher: Blockscout, title: "AAPLCAT creation tx 0x75704af8…", url: "https://robinhoodchain.blockscout.com/tx/0x75704af82c41b3a9e27bd5fd7d43f026cd2724b2dd69f8e49e0dbc232f9d6a68", published_at: 2026-07-17T14:01:07Z, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-9, CLM-15, CLM-24, EVT-2], excerpt: "timestamp 2026-07-17T14:01:07.000000Z status ok block_number 12174641 from 0x491E9e11a31400fF1085aafBD54e84ed3506cFC4 to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0xaF3D…93f9 tokenFactory 0x1B37…b69a name Apple Cat symbol AAPLCAT initial supply 1e27. LaunchCreated normalizedTicker AAPLCAT. PoolManager Initialize id 0x719a752f…c5b6." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode and ERC-20 / Airlock calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:49:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-8, CLM-15, CLM-20], excerpt: "eth_blockNumber 0x32a7264 (53113444). token eth_getCode 44 bytes clone of 0x3be8b97f…c599. name() Apple Cat symbol() AAPLCAT decimals 18 totalSupply 982420883592169802250596277 owner() 0xeb7c0347…0862 factory() revert. Airlock owner() 0x21e2ce70…7a66 getAssetData numeraire 0xaf3d76f1…93f9 token 0x73a9999f…1e18. AAPL name Apple • Robinhood Token. Create-from code 23 B." }
  - { id: R-7, publisher: GeckoTerminal, title: "AAPLCAT/AAPL pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x719a752f07c591328c94ba2d1cb44f11d0eafb98f3caf67566c33ba74061c5b6", published_at: null, accessed_at: 2026-09-03T03:50:12Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "HTTP 200. AAPLCAT / AAPL pool page on GeckoTerminal network robinhood. Used as the HTML companion to the JSON pool endpoint; live numbers taken from api.geckoterminal.com." }
  - { id: R-8, publisher: "@AAPLCAT_", title: "Apple Cat profile", url: "https://x.com/AAPLCAT_", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-17, CLM-18, CLM-26], excerpt: "Display name Apple Cat, handle @AAPLCAT_, bio Just a cat paired with $AAPL stocks $AAPLCAT CA : 0x73a9999f6e9db138e1ae4595fde049a401161e18. 492 followers. Blue verified. X user search also returned @aaplcatrh / @AAPLCat_CTO with different contract addresses." }
  - { id: R-9, publisher: applecat.club, title: "Apple Cat site", url: "https://applecat.club", published_at: null, accessed_at: 2026-09-03T03:47:51Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-19, CLM-23, EVT-3], excerpt: "HTTP 200 Vercel. title Apple Cat. meta description Apple Cat ($AAPLCAT) — the #1 memecoin paired with $AAPL on Robinhood Chain. Body prints 0x73a9999f6e9db138e1ae4595fde049a401161e18, DexScreener pair 0x719a752f…c5b6, Follow @AAPLCAT_. grok-app-builder x:creator @ServerInu. No t.me link in HTML." }
  - { id: R-10, publisher: Telegram, title: "t.me/applecatlong", url: "https://t.me/applecatlong", published_at: null, accessed_at: 2026-09-03T03:47:51Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23], excerpt: "HTTP 200. og:title Apple Cat Club. og:description You can view and join @applecatlong right away. tgme_page_extra 31 subscribers. No contract address in the preview HTML this pass." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:49:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8], excerpt: "HTTP 200. assets length 194. One AAPL hit: tokenSymbol AAPL tokenName Apple • Robinhood Token deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663 status ASSET_STATUS_ACTIVE. tokenSymbol/tokenName scan for AAPLCAT and Apple Cat returned 0 hits." }
  - { id: R-12, publisher: Blockscout, title: "AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", url: "https://robinhoodchain.blockscout.com/token/0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10], excerpt: "api/v2/tokens: name Apple • Robinhood Token symbol AAPL decimals 18 holders_count 61558 total_supply 14347572045520000000000. Address name BeaconProxy proxy_type eip1967_beacon is_verified true." }
  - { id: R-13, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "api/v2 smart-contracts: name DopplerERC20V1 compiler_version v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. Factory 0x1B37…b69a DopplerERC20V1Factory same compiler, src/tokens/DopplerERC20V1Factory.sol." }
  - { id: R-14, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "api/v2 smart-contracts: name LongLauncher compiler_version v0.8.26+commit.8a97fa7a is_verified true is_partially_verified false file_path src/LongLauncher.sol verified_at 2026-07-14T11:23:57Z." }
  - { id: R-15, publisher: "@AAPLCAT_", title: "The true believer LONG", url: "https://x.com/AAPLCAT_/status/2095135423064592412", published_at: 2026-09-02T13:03:05Z, accessed_at: 2026-09-03T03:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "The true believer. LONG. Author @AAPLCAT_ Apple Cat. Bio CA 0x73a9999f6e9db138e1ae4595fde049a401161e18." }
  - { id: R-16, publisher: DexScreener, title: "Search AP AAPL and AAPLCAT clones", url: "https://api.dexscreener.com/latest/dex/search?q=AAPLCAT", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-25, CLM-26], excerpt: "Assigned pair is AAPLCAT/AAPL 0x719a752f…c5b6 token 0x73A9999f…1e18. Distinct robinhood rows: AP/AAPL ap 0x69c68e4C…1e18; ICOIN/AAPL 0x5d6EF…1e18; AppleCat 0xbD6B2b93…9BA3; AAPLCat/WETH 0xaB2f23c7…7777 socials x.com/AAPLCATRH; AAPLCAT 0x6974508F…9d40." }

gaps:
  - { priority: P0, question: "Is applecat.club operated by @AAPLCAT_, or only an app-builder page whose x:creator is @ServerInu?", checked: "Site prints CA and Follow @AAPLCAT_; DexScreener websites is applecat.club; HTML grok-app-builder + x:creator @ServerInu; @AAPLCAT_ bio has the CA but X user search did not return a website field this pass, 2026-09-03", next: "re-read the @AAPLCAT_ profile website field and any post that links applecat.club" }
  - { priority: P1, question: "Does t.me/applecatlong pin CA 0x73A9999f…1e18 or a site that cross-links?", checked: "public preview og:title Apple Cat Club, 31 subscribers, no CA in HTML; applecat.club has no t.me link, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P1, question: "Do Lock beneficiaries 0x491E…cFC4 (95%) and 0xEDeA…eDa8 (5%) still control AAPL-side fees after graduation?", checked: "create-tx Lock log on hook 0x4e34…a544; getAssetData LP slots include 0xdead; no later fee-vault tx found this pass, 2026-09-03", next: "read Doppler lock / fee collector state and any LongFeeVaultFactory deployVault for this token" }
  - { priority: P2, question: "Should any of the other robinhood AAPLCAT tickers (0xbD6B…, 0xaB2f…, 0x6974…) get their own packets?", checked: "DexScreener search listed them with far lower liquidity than 0x73A9999f…1e18, 2026-09-03", next: "only if an assignment names those CAs" }
---

# AAPLCAT — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). LongLauncher.create on 2026-07-17 minted Apple Cat (AAPLCAT) and seeded the AAPLCAT/AAPL book. Traders buy and sell AAPLCAT against AAPL. AAPL is the quote rail, not the subject. @AAPLCAT_ is the project handle; applecat.club reprints the CA.

Themes: memecoin, stock-paired:AAPL, rwa

## Why it matters

The AAPLCAT/AAPL Uniswap v4 book printed about $1.19M of 24h volume on Gecko at collection, with DexScreener on the same pair near $1.15M volume and ~$192k liquidity. That is a live AAPL-quoted graduation, distinct from packed ICOIN (another AAPL book) and from AP/AAPL (token ap 0x69c68e4C…1e18). GET /rhj/assets lists AAPL at 0xaF3D…93f9 and has no AAPLCAT row.

## What could go wrong

USD liquidity figures on the AAPLCAT/AAPL book count both sides, and the quote side is AAPL, not USDG. Gecko reserve and DexScreener liquidity disagree on the same pool. Same-ticker Apple Cat clones exist on robinhood and other chains. applecat.club is also an app-builder page with x:creator @ServerInu. Telegram is a third-party-link with no CA in the preview.

## Product and mechanics

DopplerERC20V1Factory 0x1B37…b69a clones Launchpad-style DopplerERC20V1 via EIP-1167. LongLauncher.create from 0x491E…cFC4 at 2026-07-17T14:01:07Z minted Apple Cat / AAPLCAT supply 1e9*1e18 into Uniswap v4 poolId 0x719a752f…c5b6 quoted against AAPL 0xaF3D…93f9. factory() on the token reverts; owner() is Airlock 0xeb7C…0862. [verified R-4 R-5 R-6]

Airlock getAssetData numeraire is that AAPL; LP slots include 0xdead. PoolManager is 0x8366…0951. LaunchCreated normalizedTicker AAPLCAT. Secondary AAPLCAT/USDG and AAPLCAT/ETH books exist on DexScreener with far less liquidity than the AAPL book. [verified R-1 R-2 R-6]

## Control and security

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-tx from 0x491E…cFC4 is an EIP-7702 CaliburEntry (23 bytes of code), not an empty EOA. Create-tx Lock beneficiaries were 95% 0x491E…cFC4 and 5% 0xEDeA…eDa8. [verified R-5 R-6]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The token page is a verified EIP-1167 shell only. No audit report URL was located this pass. [verified R-4 R-13 R-14] [unknown]

## Team and provenance

@AAPLCAT_ bio pins CA 0x73a9999f…1e18 and names the AAPL pair. applecat.club prints that CA, the DexScreener pair, and Follow @AAPLCAT_. DexScreener websites/socials match. Flag unconfirmed-official on t.me/applecatlong (31 subscribers, no CA). Site HTML includes grok-app-builder and x:creator @ServerInu; that handle is not treated as official. [verified R-8 R-9] [claim R-10]

X user search also returned @aaplcatrh / @AAPLCat_CTO with other contract addresses. Flag handle-collision on @AAPLCATRH. Do not invent a second official handle. [claim R-8 R-16]

## Economics and activity

AAPLCAT/AAPL Uniswap v4 24h volume is 1194905.86 USD and reserve_in_usd is 259866.15 at 2026-09-03T03:50:20Z from the Gecko pool endpoint. fdv_usd is 485272.95. Gecko token volume_usd.h24 is 1207875.16 across all pools, not the AAPL book. [claim R-2 R-3]

DexScreener same pair: liquidity.usd 191614.26, volume.h24 1150376.94, fdv/marketCap 536371 at 2026-09-03T03:47:00Z. Blockscout holders_count 1564. Pair created 2026-07-17T14:01:07Z. [claim R-1 R-4]

Gecko dex id is bankr-robinhood; DexScreener dexId is uniswap v4. Creation path is LongLauncher.create. [claim R-1 R-2 R-5]

## Material risks

- Quote token AAPL 0xaF3D…93f9 is the Robinhood Stock Token rail in GET /rhj/assets; AAPLCAT is not. [verified R-11 R-12]
- Pool USD reserve is AAPLCAT plus AAPL, not a USDG or WETH backstop. [claim R-1 R-2]
- Gecko reserve 259866.15 vs DexScreener liquidity 191614.26 on the same pool. [claim R-1 R-2]
- Same-ticker clones and colliding handles (@AAPLCATRH, BSC AAPLCat). [claim R-16]
- Telegram is a third-party-link; applecat.club carries app-builder attribution. [claim R-9 R-10]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/AAPL and the create tx, RPC name/symbol/owner/getAssetData, DexScreener token + search, Gecko pool/token, /rhj/assets, applecat.club, @AAPLCAT_ profile and post, Telegram preview were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-9 R-11]
- Numbers: 1194905.86 is the Gecko AAPLCAT/AAPL pool 24h volume, not the 1207875.16 token all-pools figure. Reserve 259866.15 is that pool. DexScreener 1150376.94 / 191614.26 is the same pair, different aggregator. [claim R-1 R-2 R-3]
- Adversarial: the strongest contrary reading is that this is packed ICOIN or AP/AAPL, or an official Apple product. ICOIN is 0x5d6EF…1e18 / @iCoinRH; AP is 0x69c68e4C…1e18; AAPL in /rhj/assets is the quote rail 0xaF3D…93f9; AAPLCAT is a LongLauncher memecoin at 0x73A9999f…1e18. [inference R-4 R-11 R-16]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no aaplcat / AAPLCAT / Apple Cat / 0x73A9999f…1e18. content/dependencies/stock-tokens.yaml AAPL address is 0xaF3D…93f9.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, AAPL, createToken 0x75704af8…6a68, LaunchCreated / Initialize logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53113444.
- Aggregators: DexScreener latest/dex/tokens, latest/dex/pairs, search AAPLCAT and AP AAPL; Gecko token, pool (Mozilla UA; first two GETs 429, then 200).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 AAPL, 0 AAPLCAT.
- Social: X user search AAPLCAT; from:AAPLCAT_ Latest; applecat.club; t.me/applecatlong preview.
- Failed: Gecko API 429 on the first two GETs; factory() on the token reverts (Airlock/owner used instead); Telegram preview has no CA.
- Time: collection 2026-09-03T03:47Z–2026-09-03T03:52Z.
