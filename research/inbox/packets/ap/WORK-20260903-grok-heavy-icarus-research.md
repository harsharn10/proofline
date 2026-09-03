---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: ap
name: AP
packet_tier: seed
as_of: 2026-09-03T03:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [ap]
allowed_paths:
  - research/inbox/packets/ap/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: ap
  aliases: ["Alpha AI", "AlphaAI"]
  symbols: [AP]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "https://alpharhc.xyz"
  official_handle: "@Alpha_RHC"
  repository: "NULL — no GitHub org or repository URL on alpharhc.xyz, DexScreener, Gecko, Blockscout, or the @Alpha_RHC profile this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "AP is the ERC-20 at 0x69c68e4C…1E18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; @Alpha_RHC is not @longdotxyz"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the AP/AAPL pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0x402f99a6…f16f calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "AP is 0x69c68e4C…1E18 paired to AAPL 0xaF3D…93f9"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "AP is a DopplerERC20V1 clone in a Uniswap v4 AP/AAPL pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x69c68e4C…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; LongLauncher.create at 2026-07-13T12:13:52Z minted ap / AP into Uniswap v4 pool 0x29482ee4…56e0 quoted against Apple • Robinhood Token AAPL 0xaF3D…93f9. alpharhc.xyz publishes that CA and links @Alpha_RHC. Distinct from packed ICOIN and from AAPLCAT/AAPLDOG. [R-1] [R-2] [R-4] [R-5] [R-6] [R-7] [R-8]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-4, CLM-5], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-12], note: "" }

links:
  - { kind: site, url: "https://alpharhc.xyz", authenticity: confirmed }
  - { kind: x, url: "https://x.com/Alpha_RHC", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/alpharhc", authenticity: unconfirmed }
  - { kind: app, url: "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9&outputCurrency=0x69c68e4c00c6f6e4ac027300293a879be1e11e18", authenticity: unconfirmed }

deployments:
  - label: AP token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
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
    receipt_ids: [R-4, R-6, R-16]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-14]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-15]
  - label: Airlock (token owner)
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6]
  - label: Apple • Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-6, R-12, R-13]

metrics:
  - { kind: volume_24h, value: 835369.15, currency: USD, as_of: 2026-09-03T03:47:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x29482ee44cd08c368b8024fbc19896ef8fd7e0a88e0cce7ede825aca346956e0 volume_usd.h24", class: claim, receipt_ids: [R-2] }
  - { kind: tvl, value: 1008373.09, currency: USD, as_of: 2026-09-03T03:47:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x29482ee4…56e0 reserve_in_usd (AP/AAPL pool, not an all-pools figure)", class: claim, receipt_ids: [R-2] }
  - { kind: market_cap, value: 2726661.35, currency: USD, as_of: 2026-09-03T03:47:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x29482ee4…56e0 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-2] }
  - { kind: volume_24h, value: 1495153.52, currency: USD, as_of: 2026-09-03T03:46:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x69c68e4C…1E18 pair 0x29482ee4…56e0 AP/AAPL Uniswap v4 volume.h24", class: claim, receipt_ids: [R-1] }
  - { kind: tvl, value: 473728.53, currency: USD, as_of: 2026-09-03T03:46:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x69c68e4C…1E18 pair 0x29482ee4…56e0 liquidity.usd", class: claim, receipt_ids: [R-1] }
  - { kind: market_cap, value: 2741732, currency: USD, as_of: 2026-09-03T03:46:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x69c68e4C…1E18 pair 0x29482ee4…56e0 fdv/marketCap", class: claim, receipt_ids: [R-1] }
  - { kind: holders, value: 1621, currency: null, as_of: 2026-09-03T03:46:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x69c68e4C…1E18 holders_count", class: claim, receipt_ids: [R-4] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com block 0x32a6a97 (53111447) then 0x32a6e2f (53112367). Token 0x69c68e4C…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599; name() ap; symbol() AP; decimals 18; totalSupply 1e27; owner() Airlock 0xeb7c0347…0862; factory() reverted. AAPL 0xaF3D…93f9 eth_getCode 283 bytes name Apple • Robinhood Token. Deployer 0x1Ae51740…5305 eth_getCode empty." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-13, R-14, R-15, R-16, R-18], result: "Blockscout api/v2 token 0x69c68e4C…1E18 name ap is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator 0x1B37…b69a creation tx 0x402f99a6…f16f; token name ap symbol AP holders_count 1621 total_supply 1e27. Tx timestamp 2026-07-13T12:13:52Z block 8658626 from 0x1Ae51740…5305 to LongLauncher method create; decoded numeraire 0xaF3D…93f9 tokenFactory 0x1B37…b69a name ap symbol AP supply 1e27. PoolManager Initialize id 0x29482ee4…56e0 currency0 AP currency1 AAPL." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-2, R-3], result: "DexScreener latest/dex/tokens/0x69c68e4C…1E18: 7 robinhood uniswap pairs; top AP/AAPL v4 0x29482ee4…56e0 quote 0xaF3D…93f9 Apple • Robinhood Token / AAPL liquidity.usd 473728.53 volume.h24 1495153.52 fdv 2741732 pairCreatedAt 1783944832000 (2026-07-13T12:13:52Z) info.websites alpharhc.xyz info.socials x.com/Alpha_RHC t.me/alpharhc. Gecko pool: volume_usd.h24 835369.15 reserve_in_usd 1008373.09 fdv_usd 2726661.35 pool_created_at 2026-07-13T12:13:52Z dex bankr-robinhood market_cap_usd null. Gecko token volume_usd.h24 926253.95 (all pools)." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-7, R-8], result: "GET https://alpharhc.xyz → 308 www.alpharhc.xyz HTTP 200. title $AP - Alpha AI. Hero code 0x69c68e4C00c6f6e4Ac027300293a879bE1E11E18. Buy links Uniswap input AAPL 0xaF3D…93f9 output AP 0x69c68e4c…1e18. Nav and CTAs link x.com/Alpha_RHC and t.me/alpharhc. Lore names LongLauncher 0x22e9…eeED and deployer 0x1Ae51740…5305. DexScreener websites/socials match. @Alpha_RHC bio: Ticker is $AP (AlphaAI) Paired with AAPL - AP/AAPL First deployed token on @longdotxyz." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0x69c68e4C…1E18) word0 numeraire 0xaF3D76f1…93f9; word1/word2 0xdead; word5 token 0x69c68e4C…1E18; word6 0xdeaddead…dead; word7/word8 1e27. Airlock owner() 0x21e2ce70…7a66. AAPL name() Apple • Robinhood Token; symbol() AAPL." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 ap/AP into a Uniswap v4 pool quoted against AAPL 0xaF3D…93f9; Airlock getAssetData numeraire is that AAPL; LP addresses in getAssetData include 0xdead", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: ap, class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: AP, class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: identity.handle, value: "@Alpha_RHC", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-7, R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6, R-7], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG: tx 0x402f99a6…f16f from EOA 0x1Ae51740…5305 called LongLauncher.create; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from packed ICOIN 0x5d6EF…1e18, AAPLCAT 0xbD6B…9BA3, and AAPLDOG 0x06e52E5f…1e18. AAPL 0xaF3D…93f9 is the quote rail, not this token.", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-4, R-5, R-6, R-12, R-20, R-21], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset Apple • Robinhood Token AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 (rhj/assets 194 rows, AAPL deployment chainId 4663)", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-2, R-6, R-12, R-13], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 pool 0x29482ee44cd08c368b8024fbc19896ef8fd7e0a88e0cce7ede825aca346956e0; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood; PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-2, R-18], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-1, R-2, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko AP/AAPL pool 0x29482ee4…56e0 volume_usd.h24 835369.15 reserve_in_usd 1008373.09 fdv_usd 2726661.35 at 2026-09-03T03:47:00Z (pool slice, not Gecko token all-pools 926253.95)", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener same pair liquidity.usd 473728.53 volume.h24 1495153.52 fdv/marketCap 2741732 at 2026-09-03T03:46:00Z", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-1], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 1621, class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66; create-tx from EOA 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305 (no code; also LongLauncher creator)", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-5, R-6, R-15], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on alpharhc.xyz, DexScreener, the @Alpha_RHC profile, Blockscout, or Gecko this pass", class: unknown, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@Alpha_RHC.role", value: project, class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@Alpha_RHC.slug", value: ap, class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "https://alpharhc.xyz", class: verified, observed_at: 2026-09-03T03:47:32Z, receipt_ids: [R-1, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-20, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: relationship, value: "Gecko dex id bankr-robinhood on the AP/AAPL pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge AP into census bankr.", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-22, field: candidate, value: "ap | AP | @Alpha_RHC | https://alpharhc.xyz — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-1, R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-6, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-6, R-12, R-13], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-26, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: control.privileged-role, value: "Lock beneficiaries on create: 0x1Ae51740…5305 0.95 and 0xEDeAa06E…eDa8 0.05; hook/initializer 0x4e346895…a544", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-5, R-18], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-28, field: communications.status, value: "@Alpha_RHC 2026-09-02T19:22:40Z posted 24h recap $1.22M volume and almost 1400 holders; 2026-09-02T17:59:17Z told users to copy the CA from the website. Bio points questions to @alpharhc_ai.", class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-8, R-9, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: identity.alias, value: "Alpha AI", class: claim, observed_at: 2026-09-03T03:47:32Z, receipt_ids: [R-7, R-8], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13]
    material_effect: "Same AP/AAPL pool 0x29482ee4…56e0: Gecko reserve_in_usd 1008373.09 vs DexScreener liquidity.usd 473728.53; 24h volume 835369.15 vs 1495153.52; fdv 2726661.35 vs 2741732. A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "LongLauncher.create minted ap / AP against AAPL"
    summary: "Tx 0x402f99a6…f16f from 0x1Ae51740…5305 at 2026-07-13T12:13:52Z; PoolManager Initialize id 0x29482ee4…56e0."
    occurred_at: 2026-07-13T12:13:52Z
    observed_at: 2026-09-03T03:47:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5, R-18]
  - id: EVT-2
    type: onchain
    title: "Gecko AP/AAPL 24h volume $835k, reserve $1.01M"
    summary: "Gecko pool 0x29482ee4…56e0 volume_usd.h24 835369 reserve_in_usd 1008373 fdv_usd 2726661."
    occurred_at: 2026-09-03T03:47:00Z
    observed_at: 2026-09-03T03:47:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-2]
  - id: EVT-3
    type: company
    title: "@Alpha_RHC posted a 24h recap on $ap"
    summary: "@Alpha_RHC posted $1.22M volume, almost 1400 holders, Top 10 of Top Assets on LONG, and first token on @longdotxyz."
    occurred_at: 2026-09-02T19:22:40Z
    observed_at: 2026-09-03T03:48:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-4
    type: ct
    title: "@thebearjesus posted the AP CA and first-pair claim"
    summary: "@thebearjesus posted 0x69c68e4C…1E18 as the first tokenized pair AP/AAPL, before $AI and $SPACEHOOD."
    occurred_at: 2026-09-03T01:21:03Z
    observed_at: 2026-09-03T03:48:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-5
    type: company
    title: "@Alpha_RHC told users to copy the CA from the website"
    summary: "@Alpha_RHC replied copy our ca from the website and then try searching for it."
    occurred_at: 2026-09-02T17:59:17Z
    observed_at: 2026-09-03T03:48:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]

receipts:
  - { id: R-1, publisher: DexScreener, title: "AP token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-13, CLM-19, CLM-21, CLM-22], excerpt: "7 robinhood uniswap pairs. Top pairAddress 0x29482ee44cd08c368b8024fbc19896ef8fd7e0a88e0cce7ede825aca346956e0 labels v4 base ap / AP 0x69c68e4C…1E18 quote Apple • Robinhood Token / AAPL 0xaF3D…93f9 liquidity.usd 473728.53 volume.h24 1495153.52 fdv 2741732 pairCreatedAt 1783944832000. websites https://alpharhc.xyz socials x.com/Alpha_RHC t.me/alpharhc." }
  - { id: R-2, publisher: GeckoTerminal, title: "AP/AAPL pool on Bankr (Robinhood)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x29482ee44cd08c368b8024fbc19896ef8fd7e0a88e0cce7ede825aca346956e0", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-12, CLM-21, EVT-2], excerpt: "attributes.name AP / AAPL address 0x29482ee4…56e0 pool_created_at 2026-07-13T12:13:52Z volume_usd.h24 835369.150019538 reserve_in_usd 1008373.0878 fdv_usd 2726661.347 market_cap_usd null. relationships.dex.id bankr-robinhood. base robinhood_0x69c68e4c…1e18 quote robinhood_0xaf3d76f1…93f9." }
  - { id: R-3, publisher: GeckoTerminal, title: "ap token on Robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12], excerpt: "attributes.address 0x69c68e4c00c6f6e4ac027300293a879be1e11e18 name ap symbol AP decimals 18 total_supply 1e27 normalized_total_supply 1000000000.0 volume_usd.h24 926253.948466535 fdv_usd 2727263.27637497 market_cap_usd null. top_pools first robinhood_0x29482ee4…56e0." }
  - { id: R-4, publisher: Blockscout, title: "AP 0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18", url: "https://robinhoodchain.blockscout.com/address/0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-5, CLM-6, CLM-7, CLM-11, CLM-14, CLM-20, CLM-22, EVT-1], excerpt: "api/v2: hash 0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18 name ap is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x402f99a65c30372cfc31ab038daa4b8ceff3d52edebefc6f65f20fb7f1c7f16f proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97F…C599. token name ap symbol AP holders_count 1621 total_supply 1e27." }
  - { id: R-5, publisher: Blockscout, title: "AP creation tx 0x402f99a6…", url: "https://robinhoodchain.blockscout.com/tx/0x402f99a65c30372cfc31ab038daa4b8ceff3d52edebefc6f65f20fb7f1c7f16f", published_at: 2026-07-13T12:13:52Z, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-15, CLM-26, CLM-27, EVT-1], excerpt: "timestamp 2026-07-13T12:13:52.000000Z status ok block_number 8658626 from 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305 to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0xaF3D…93f9 tokenFactory 0x1B37…b69a name ap symbol AP initial supply 1e27. create2 created 0x69c68e4C…1E18." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode and ERC-20 / Airlock calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-8, CLM-15, CLM-20, CLM-23, CLM-24, CLM-25], excerpt: "eth_blockNumber 0x32a6a97 (53111447). token eth_getCode 44 bytes clone of 0x3be8b97f…c599. name() ap symbol() AP decimals 18 totalSupply 1e27 owner() 0xeb7c0347…0862 factory() revert. Airlock owner() 0x21e2ce70…7a66 getAssetData numeraire 0xaf3d76f1…93f9 token 0x69c68e4c…1e18. AAPL name Apple • Robinhood Token. Deployer code empty." }
  - { id: R-7, publisher: Alpha AI, title: "alpharhc.xyz $AP site", url: "https://alpharhc.xyz", published_at: null, accessed_at: 2026-09-03T03:47:32Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-17, CLM-18, CLM-19, CLM-22, CLM-29], excerpt: "HTTP 308 to https://www.alpharhc.xyz/ then 200. title $AP - Alpha AI. Hero contract 0x69c68e4C00c6f6e4Ac027300293a879bE1E11E18. Buy Uniswap chain=robinhood inputCurrency 0xaF3D…93f9 outputCurrency 0x69c68e4c…1e18. Links x.com/Alpha_RHC and t.me/alpharhc. Lore: First Token & Mascot Deployed By LONG Team; LongLauncher 0x22e9…eeED." }
  - { id: R-8, publisher: "@Alpha_RHC", title: "AlphaAI profile", url: "https://x.com/Alpha_RHC", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-17, CLM-18, CLM-28, CLM-29], excerpt: "Display name AlphaAI, handle @Alpha_RHC, bio CTO. Ticker is $AP (AlphaAI) Paired with AAPL - AP/AAPL First deployed token on @longdotxyz Questions? Ask @alpharhc_ai. 335 followers. Blue Verified." }
  - { id: R-9, publisher: "@Alpha_RHC", title: "24 hour recap on $ap", url: "https://x.com/Alpha_RHC/status/2095230949235839327", published_at: 2026-09-02T19:22:40Z, accessed_at: 2026-09-03T03:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-28, EVT-3], excerpt: "24 hour recap on $ap! → $1.22M in Volume → Almost at 1400 holders → Amongst Top 10 of Top Assets on LONG and we're still the first token deployed on @longdotxyz! https://dune.com/natan_benish2001/long-on-robinhood-chain" }
  - { id: R-10, publisher: "@thebearjesus", title: "AP/AAPL first tokenized pair", url: "https://x.com/thebearjesus/status/2095321140008780147", published_at: 2026-09-03T01:21:03Z, accessed_at: 2026-09-03T03:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "Absolutely despicable seeing $AP at 1M market cap. It's the first tokenized pair AP/AAPL. YES, it was paired before $AI and $SPACEHOOD. 0x69c68e4C00C6F6e4Ac027300293a879Be1E11E18" }
  - { id: R-11, publisher: Telegram, title: "t.me/alpharhc", url: "https://t.me/alpharhc", published_at: null, accessed_at: 2026-09-03T03:47:32Z, kind: social, authority: social, authenticity: unconfirmed, supports: [], excerpt: "HTTP 200. og:title AlphaAI Entry. og:description You can view and join @alpharhc right away. tgme_page_extra 47 subscribers. No contract address in the preview HTML this pass." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-25], excerpt: "HTTP 200. assets length 194. tokenSymbol AAPL tokenName Apple • Robinhood Token deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE. tokenSymbol AP hits 0." }
  - { id: R-13, publisher: Blockscout, title: "AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", url: "https://robinhoodchain.blockscout.com/token/0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-25], excerpt: "api/v2: hash 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 name BeaconProxy is_contract true is_verified true. token name Apple • Robinhood Token symbol AAPL decimals 18 holders_count 61558 total_supply 14347572045520000000000." }
  - { id: R-14, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-24], excerpt: "api/v2 smart-contracts: name DopplerERC20V1 compiler_version v0.8.26+commit.8a97fa7a is_verified true is_fully_verified false is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-15, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-15], excerpt: "api/v2: hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305 creation_transaction_hash 0x717af93c071b39247b5cec72930b990b917439143f6621d08797090732947cf9." }
  - { id: R-16, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-23], excerpt: "api/v2: hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768." }
  - { id: R-17, publisher: GeckoTerminal, title: "AP/AAPL pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x29482ee44cd08c368b8024fbc19896ef8fd7e0a88e0cce7ede825aca346956e0", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "Gecko HTML pool page for AP / AAPL on Robinhood, pool 0x29482ee4…56e0." }
  - { id: R-18, publisher: Blockscout, title: "create tx logs Initialize / Lock", url: "https://robinhoodchain.blockscout.com/tx/0x402f99a65c30372cfc31ab038daa4b8ceff3d52edebefc6f65f20fb7f1c7f16f?tab=logs", published_at: 2026-07-13T12:13:52Z, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-27, EVT-1], excerpt: "16 logs. OwnershipTransferred newOwner Airlock 0xeb7C…0862. Transfer mint 1e27 to Airlock. PoolManager Initialize id 0x29482ee4…56e0 currency0 0x69c68e4C…1E18 currency1 0xaF3D…93f9 hooks 0x4e346895…a544. Lock beneficiaries 0x1Ae51740…5305 0.95 and 0xEDeAa06E…eDa8 0.05. Airlock Create asset AP numeraire AAPL." }
  - { id: R-19, publisher: "@Alpha_RHC", title: "copy our ca from the website", url: "https://x.com/Alpha_RHC/status/2095209964528902353", published_at: 2026-09-02T17:59:17Z, accessed_at: 2026-09-03T03:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-28, EVT-5], excerpt: "cannot find your balance or? copy our ca from the website and then try searching for it though for some reason the mcap is displayed incorrectly" }
  - { id: R-20, publisher: Blockscout, title: "AAPLCAT 0xbD6B…9BA3", url: "https://robinhoodchain.blockscout.com/address/0xbD6B2b93900fe2101d43e46DA3f79B5d5B9D9BA3", published_at: null, accessed_at: 2026-09-03T03:47:32Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "hash 0xbD6B2b93900fe2101d43e46DA3f79B5d5B9D9BA3 name AppleCat is_contract true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599. token name AppleCat symbol AAPLCAT holders_count 162 total_supply 1e29. Distinct address from AP 0x69c68e4C…1E18." }
  - { id: R-21, publisher: DexScreener, title: "AAPLDOG search", url: "https://api.dexscreener.com/latest/dex/search?q=AAPLDOG", published_at: null, accessed_at: 2026-09-03T03:47:32Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7], excerpt: "Top robinhood uniswap v4 Apple Dog / AAPLDOG 0x06e52E5fdDF0D8A6d10B963c753A8eF3E1161e18 quoted against AAPL 0xaF3D…93f9 pair 0xe11d3a20…47ab. Distinct address from AP 0x69c68e4C…1E18." }

gaps:
  - { priority: P0, question: "Does the @Alpha_RHC profile website field itself point at alpharhc.xyz, or only the site-to-handle direction?", checked: "Site publishes CA and links x.com/Alpha_RHC; DexScreener socials match; X user search returned bio ticker $AP / AP/AAPL but no website field in that payload, 2026-09-03", next: "open the X profile website chip and a post that embeds the full CA from @Alpha_RHC" }
  - { priority: P1, question: "What does Lock beneficiary 0xEDeAa06E…eDa8 (5%) do after create, and is it a fee splitter or an EOA?", checked: "create-tx Lock log 95/5; RPC eth_getCode on 0xEDeAa06E…eDa8 empty this pass, 2026-09-03", next: "trace later fee distributions from the hook 0x4e346895…a544" }
  - { priority: P1, question: "Does t.me/alpharhc pin CA 0x69c68e4C…1E18 once joined?", checked: "public preview og:title AlphaAI Entry, 47 subscribers, no CA in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P2, question: "Why do Gecko reserve ($1.01M) and DexScreener liquidity ($474k) disagree on the same AP/AAPL pool?", checked: "Live Gecko reserve_in_usd 1008373 vol 835369; DexScreener liquidity.usd 473728 vol 1495153; assignment lead ~$453k / ~$1.48M matches DexScreener, 2026-09-03", next: "archive both aggregator payloads if the gap stays this wide" }
---

# AP — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). LongLauncher.create on 2026-07-13 minted ap (AP) and seeded the AP/AAPL book. Traders buy and sell AP against AAPL. alpharhc.xyz publishes the CA; @Alpha_RHC is the project handle. AAPL is the quote rail, not this token.

Themes: memecoin, stock-paired:AAPL

## Why it matters

The AP/AAPL Uniswap v4 book is a live AAPL-quoted memecoin with DexScreener 24h volume about $1.50M and liquidity about $474k this pass (Gecko prints $835k volume and $1.01M reserve on the same pool). @Alpha_RHC and alpharhc.xyz present AP as the first LONG-deployed token on Robinhood Chain. Packed ICOIN is a later AAPL pair on the same launcher, not this mint.

## What could go wrong

USD liquidity on the AP/AAPL book counts both AP and AAPL. Gecko reserve and DexScreener liquidity for the same pool differ by about $535k this pass. Token owner() is Airlock. AAPL is a Robinhood Stock Token rail; AP is not.

## Product and mechanics

LongLauncher.create from EOA 0x1Ae51740…5305 at 2026-07-13T12:13:52Z cloned DopplerERC20V1 as ap / AP, supply 1e9*1e18, numeraire AAPL 0xaF3D…93f9, tokenFactory 0x1B37…b69a. Airlock getAssetData returns that AAPL as numeraire and the token as word5; two slots are 0xdead. Uniswap v4 PoolManager 0x8366…0951 Initialize id equals pair 0x29482ee4…56e0. [verified R-4 R-5 R-6 R-18]

DexScreener labels the primary book Uniswap v4 AP/AAPL 0x29482ee4…56e0. Gecko names the same pool AP / AAPL with dex bankr-robinhood. Secondary AP/USDG and AP/ETH Uniswap v4 books exist with far less liquidity than the AAPL book. [verified R-1 R-2]

Lock on create split 0.95 to the create-from EOA 0x1Ae51740…5305 and 0.05 to 0xEDeAa06E…eDa8. Hook/initializer is 0x4e346895…a544. [verified R-18]

## Control and security

token owner() returns Airlock 0xeb7C…0862. Airlock owner() returns 0x21e2…7a66. The create-tx from-address 0x1Ae51740…5305 has no code and is also LongLauncher's creator_address_hash. DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, v0.8.26). LongLauncher is verified. [verified R-5 R-6 R-14 R-15]

No audit report URL was located this pass. [unknown]

## Team and provenance

alpharhc.xyz titles $AP - Alpha AI, embeds CA 0x69c68e4C…1E18, and links @Alpha_RHC and t.me/alpharhc. @Alpha_RHC bio states ticker $AP (AlphaAI), paired with AAPL, first deployed token on @longdotxyz. DexScreener websites and socials match. Telegram preview titles AlphaAI Entry with 47 subscribers and no CA. [verified R-1 R-7 R-8] [claim R-11]

Packed ICOIN 0x5d6EF…1e18 is a later LongLauncher AAPL pair (@iCoinRH). AAPLCAT 0xbD6B…9BA3 and AAPLDOG 0x06e52E5f…1e18 are different Doppler clones that also quote AAPL. [verified R-20 R-21]

## Economics and activity

Gecko AP/AAPL pool 24h volume is 835369.15 USD and reserve_in_usd is 1008373.09 at 2026-09-03T03:47:00Z. fdv_usd is 2726661.35. Gecko token volume_usd.h24 is 926253.95 across all pools, not the AAPL book. [claim R-2 R-3]

DexScreener same pair: liquidity.usd 473728.53, volume.h24 1495153.52, fdv/marketCap 2741732. Blockscout holders_count 1621. Pair created 2026-07-13T12:13:52Z. Assignment lead of liq ~$453,831 vol ~$1,480,136 is the DexScreener book, not the Gecko reserve. [claim R-1 R-4]

@Alpha_RHC posted a 24h recap of $1.22M volume and almost 1400 holders on 2 Sep; live Blockscout holders_count is 1621. [claim R-9]

## Material risks

- Quote token AAPL is a Robinhood Stock Token rail; pool USD reserve is AP plus AAPL, not a USDG backstop. [verified R-2 R-12 R-13]
- Gecko reserve and DexScreener liquidity for pool 0x29482ee4…56e0 disagree this pass. [claim R-1 R-2]
- Token owner() is Airlock; create-from EOA also deployed LongLauncher. [verified R-6 R-15]
- Telegram preview has no CA this pass. [claim R-11]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: DexScreener token API, Gecko pool/token, Blockscout token/create tx/logs/AAPL/impl/factory/launcher, RPC eth_getCode and eth_call, alpharhc.xyz, @Alpha_RHC profile and two posts, @thebearjesus, Telegram preview, /rhj/assets, AAPLCAT, and AAPLDOG search were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-2 R-4 R-5 R-6 R-7 R-12]
- Numbers: 835369.15 is the Gecko AP/AAPL pool 24h volume, not the 926253.95 token all-pools figure. Reserve 1008373.09 is that pool. DexScreener 1495153.52 / 473728.53 is the same pair, different aggregator. [claim R-1 R-2 R-3]
- Adversarial: the strongest contrary reading is that AP is packed ICOIN, AAPLCAT, AAPLDOG, or a Bankr agent launch because Gecko labels the pool bankr-robinhood and all quote AAPL. ICOIN is 0x5d6EF…1e18, AAPLCAT is 0xbD6B…9BA3, AAPLDOG is 0x06e52E5f…1e18, and the create transaction calls LongLauncher.create from 0x1Ae51740…5305. AAPL 0xaF3D…93f9 is the rail. [inference R-2 R-5 R-12 R-20 R-21]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no ap / AP / Alpha AI / 0x69c68e4C…1E18.
- Explorer: Blockscout api/v2 token, create tx 0x402f99a6…f16f and logs, AAPL token, DopplerERC20V1 source, factory, LongLauncher. RPC eth_getCode/eth_call with Mozilla UA at blocks 53111447–53112367.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko pool, token, token/pools.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, AAPL row at 0xaF3D…93f9 chainId 4663, 0 AP ticker hits.
- Social: X user Alpha_RHC; from:Alpha_RHC; keyword AP/AAPL/alpharhc; posts 2095230949235839327, 2095209964528902353, 2095321140008780147; t.me/alpharhc preview.
- Site: GET alpharhc.xyz → www.alpharhc.xyz 200, CA in hero.
- Failed: token factory() reverts (creator_address_hash used instead); Telegram preview has no CA; X user-search payload had no website field for @Alpha_RHC.
- Time: collection 2026-09-03T03:45Z–2026-09-03T03:55Z.
