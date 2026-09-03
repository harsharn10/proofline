---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: beefzos
name: BEEFZOS
packet_tier: seed
as_of: 2026-09-03T04:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [beefzos]
allowed_paths:
  - research/inbox/packets/beefzos/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: BEEFZOS
  aliases: ["Jeff Beefzos"]
  symbols: [BEEFZOS]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener latest/dex/tokens info is null this pass; Gecko token attributes have no website field; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info is null; @beefzos bio embeds 0x21d3462d3f0a5f661ed46d033a8cf05595c11e18 and a post repeats that CA, but DexScreener does not list the handle and no site cross-links it; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "BEEFZOS is the ERC-20 at 0x21d3…1e18 created through that launcher; entity_kind token, not protocol"
        - "Packed sender is DopplerERC20V1 0x4d41…1e18 on the same AMZN rail; packed waddles is Pons 0xbB6E…0CdD on the same rail; neither is this token"
        - "No shared handle; @beefzos is unconfirmed-official and is not @longdotxyz"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the AMZN/BEEFZOS pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0xed8967d9…a8a8 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "BEEFZOS is 0x21d3…1e18 paired to AMZN 0x12f1…bF54"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x21d3…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create at 2026-09-02T20:42:41Z minted Jeff Beefzos / BEEFZOS into Uniswap v4 pool 0x234d…43ac quoted against Amazon • Robinhood Token AMZN 0x12f1…bF54. AMZN is the quote rail. owner() is Airlock 0xeb7C…0862. Distinct from packed sender/waddles. No bidirectional official site this pass. [R-1] [R-4] [R-6] [R-7] [R-8] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-9], note: "" }

links:
  - { kind: x, url: "https://x.com/beefzos", authenticity: unconfirmed }

deployments:
  - label: BEEFZOS token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-4, R-6]
  - label: DopplerERC20V1Factory (create tokenFactory)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-6]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-6]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-13]
  - label: Amazon • Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0x12f190a9F9d7D37a250758b26824B97CE941bF54"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-11, R-12]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-14]

metrics:
  - { kind: volume_24h, value: 175435.85, currency: USD, as_of: 2026-09-03T04:49:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x234d6fd95269d352da17d8e9b7cd08c06522e699aa879b0d49e93ecdefc743ac volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 41081.39, currency: USD, as_of: 2026-09-03T04:49:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x234d6fd9…43ac reserve_in_usd (AMZN/BEEFZOS pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 50786.31, currency: USD, as_of: 2026-09-03T04:49:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18 fdv_usd (token endpoint; pool fdv_usd 0.39 is AMZN-as-base and is not this figure)", class: claim, receipt_ids: [R-9] }
  - { kind: volume_24h, value: 182159.76, currency: USD, as_of: 2026-09-03T04:47:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18 pair 0x234d6fd9…43ac BEEFZOS/AMZN Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 42193.27, currency: USD, as_of: 2026-09-03T04:47:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x21d3…1e18 pair 0x234d6fd9…43ac liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 47573, currency: USD, as_of: 2026-09-03T04:47:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x21d3…1e18 pair 0x234d6fd9…43ac fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 66, currency: null, as_of: 2026-09-03T04:47:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:49:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32afa67 (53148263). Token 0x21d3…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name() Jeff Beefzos symbol() BEEFZOS decimals 18 totalSupply 1e27 owner() Airlock 0xeb7c0347…0862 factory() reverts. AMZN 0x12f1…bF54 eth_getCode 283 bytes name() Amazon • Robinhood Token symbol() AMZN. Factory code 1912 B. Impl code 13927 B. Launcher code 5826 B. Airlock code 5695 B. Create-from 0xcC51…2A26 code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-12, R-13, R-18], result: "Blockscout api/v2 token 0x21d3…1e18 name Jeff Beefzos is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; token symbol BEEFZOS holders_count 66 total_supply 1e27. Create tx 0xed8967d9…a8a8 2026-09-02T20:42:41Z block 52864187 from 0xcC51…2A26 (is_contract false) to LongLauncher method create; decoded numeraire 0x12f1…bF54 tokenFactory 0x1B37…b69a name Jeff Beefzos symbol BEEFZOS supply 1e27. OwnershipTransferred newOwner Airlock 0xeb7C…0862. LaunchCreated normalizedTicker BEEFZOS. PoolManager Initialize id 0x234d6fd9…43ac currency0 AMZN currency1 BEEFZOS fee 8388608 (dynamic-fee flag) hooks DopplerHookInitializer 0x4e34…a544. AMZN token name Amazon • Robinhood Token holders_count 37788." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T04:49:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x21d3…1e18 3 robinhood uniswap pairs; top BEEFZOS/AMZN v4 0x234d6fd9…43ac quote 0x12f1…bF54 Amazon • Robinhood Token / AMZN liquidity.usd 42193.27 volume.h24 182159.76 fdv/marketCap 47573 pairCreatedAt 1788381761000 (2026-09-02T20:42:41Z) info null. Secondary BEEFZOS/ETH v4 liquidity.usd 9.93. Gecko pool same address name AMZN / BEEFZOS dex bankr-robinhood volume_usd.h24 175435.852325032 reserve_in_usd 41081.3946 fdv_usd 0.3946069331 (AMZN-as-base) pool_created_at 2026-09-02T20:42:41Z. Gecko token fdv_usd 50786.3080523569 volume_usd.h24 173430.526471345 (all pools) market_cap_usd null." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:49:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0x21d3…1e18) word0 numeraire 0x12f190a9…bF54; word5 token 0x21d3…1e18; word1/word2 0xdead; Airlock owner() 0x21e2ce70…7a66. AMZN name() Amazon • Robinhood Token; symbol() AMZN." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:49:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one AMZN row tokenName Amazon • Robinhood Token deployments contractAddress 0x12f190a9F9d7D37a250758b26824B97CE941bF54 chainId 4663. tokenSymbol/tokenName scan for BEEFZOS returned 0 hits." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 Jeff Beefzos / BEEFZOS into a Uniswap v4 pool quoted against AMZN 0x12f1…bF54; Airlock getAssetData numeraire is that AMZN; LP addresses in getAssetData include 0xdead. Lock beneficiaries on DopplerHookInitializer: 0xcC51…2A26 95% and Airlock owner 0x21E2…7A66 5%.", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-4, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Jeff Beefzos", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: BEEFZOS, class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-4, R-6, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-4, R-6, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-1, R-4, R-6, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG: tx 0xed8967d9…a8a8 from EOA 0xcC51…2A26 (code 0x) called LongLauncher.create; decoded tokenFactory DopplerERC20V1Factory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from packed sender 0x4d41…1e18 and waddles 0xbB6E…0CdD, which share the AMZN rail only.", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset is the AMZN rail Amazon • Robinhood Token 0x12f190a9F9d7D37a250758b26824B97CE941bF54 (GET /rhj/assets 194 assets, one AMZN row, that contract, chainId 4663). BEEFZOS is not in the registry. AMZN is a rail, not the subject.", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-7, R-8, R-11, R-12], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 pool 0x234d6fd95269d352da17d8e9b7cd08c06522e699aa879b0d49e93ecdefc743ac; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood; PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951; Initialize fee 8388608 (dynamic-fee flag) hooks 0x4e34…a544", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:55:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info is null; @beefzos bio and a post embed CA 0x21d3…1e18; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7, R-15, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko AMZN/BEEFZOS pool 0x234d6fd9…43ac volume_usd.h24 175435.852325032 reserve_in_usd 41081.3946 at 2026-09-03T04:49:00Z (pool slice, not Gecko token all-pools 173430.526471345). Do not use pool fdv_usd 0.3946 as the BEEFZOS figure (AMZN is base on that endpoint). Gecko token fdv_usd 50786.31.", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener same pair liquidity.usd 42193.27 volume.h24 182159.76 fdv/marketCap 47573 at 2026-09-03T04:47:00Z", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 66, class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from 0xcC51d401610e2CC2Aa77c49CD948b3c716E12A26 (EOA, code 0x)", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on DexScreener, Gecko, Blockscout, or X search this pass", class: unknown, observed_at: 2026-09-03T04:55:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Gecko dex id bankr-robinhood on the AMZN/BEEFZOS pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge BEEFZOS into census bankr.", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "NULL — DexScreener info is null; Gecko token has no website field", class: claim, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: communications.status, value: "unconfirmed-official: @beefzos display name Jeff Beefzos, bio it's day 1 at amazon and ca 0x21d3462d3f0a5f661ed46d033a8cf05595c11e18; a post repeats that CA. DexScreener does not list the handle. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-15, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x12f190a9F9d7D37a250758b26824B97CE941bF54", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-2, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-3, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: candidate, value: "beefzos | BEEFZOS | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:55:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:55:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "Blockscout search BEEFZOS and DexScreener search return other Jeff Beefzos ERC-20s, including 0x79780aD873C3f5F23C0C6FC68CD5EA8aF26C1E18. Those are not this token. Flag ca-collision on the ticker only.", class: claim, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-20, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: control.privileged-role, value: "LaunchCreated reservedUntil 2026-09-03T20:42:41Z had not passed at collection. Lock beneficiaries 0xcC51…2A26 95% and 0x21E2…7A66 5%.", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13]
    material_effect: "Same BEEFZOS/AMZN pool 0x234d6fd9…43ac: Gecko reserve_in_usd 41081.39 vs DexScreener liquidity.usd 42193.27; 24h volume 175435.85 vs 182159.76; Gecko token fdv 50786.31 vs DexScreener fdv 47573. Gecko pool fdv_usd 0.39 is AMZN-as-base and is not a BEEFZOS fdv. A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko AMZN/BEEFZOS 24h volume $175.4k, liquidity $41.1k"
    summary: "Gecko volume_usd.h24 175436 reserve 41081. DexScreener volume.h24 182160 liquidity.usd 42193."
    occurred_at: 2026-09-03T04:49:00Z
    observed_at: 2026-09-03T04:49:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@beefzos posted a beef video"
    summary: "Post: when you know what's up with the beef. Handle bio embeds CA 0x21d3…1e18."
    occurred_at: 2026-09-03T02:18:09Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-3
    type: ct
    title: "@beefzos posted the token contract"
    summary: "Post: ca 0x21d3462d3f0a5f661ed46d033a8cf05595c11e18. DexScreener info is null this pass."
    occurred_at: 2026-09-02T21:15:26Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-4
    type: onchain
    title: "LongLauncher.create minted Jeff Beefzos / BEEFZOS against AMZN"
    summary: "Tx 0xed89…a8a8 from 0xcC51…2A26 at 2026-09-02T20:42:41Z; LaunchCreated ticker BEEFZOS; pool 0x234d…43ac."
    occurred_at: 2026-09-02T20:42:41Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-5
    type: ct
    title: "@beefzos posted a shareholder-value line"
    summary: "Post: We believe that a fundamental measure of our beef will be the shareholder value we create over the long term."
    occurred_at: 2026-09-02T20:38:24Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x21d3…1e18 Jeff Beefzos / BEEFZOS", url: "https://robinhoodchain.blockscout.com/address/0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-7, CLM-14, CLM-22, CLM-24], excerpt: "hash 0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18 name Jeff Beefzos is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xed8967d99b20f70a4484e222944208c474c785016424cafa7e9d205a580aa8a8. token symbol BEEFZOS decimals 18 total_supply 1e27 holders_count 66 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-23], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0xed8967d9…a8a8", url: "https://robinhoodchain.blockscout.com/tx/0xed8967d99b20f70a4484e222944208c474c785016424cafa7e9d205a580aa8a8", published_at: 2026-09-02T20:42:41Z, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-7, CLM-9, CLM-15, CLM-18, CLM-23, CLM-25, CLM-27, EVT-4], excerpt: "timestamp 2026-09-02T20:42:41.000000Z status ok result success block_number 52864187 from 0xcC51d401610e2CC2Aa77c49CD948b3c716E12A26 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded supply 1e27 numeraire 0x12f190a9F9d7D37a250758b26824B97CE941bF54 tokenFactory 0x1B37D3a72082029c44B35B604Ea473617580b69a name Jeff Beefzos symbol BEEFZOS." }
  - { id: R-5, publisher: Blockscout, title: "DopplerHookInitializer Lock / Create logs", url: "https://robinhoodchain.blockscout.com/tx/0xed8967d99b20f70a4484e222944208c474c785016424cafa7e9d205a580aa8a8", published_at: 2026-09-02T20:42:41Z, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "DopplerHookInitializer 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 Create asset 0x21d3…1e18 numeraire AMZN 0x12f1…bF54. Lock beneficiaries 0x21E2ce70511e4FE542a97708e89520471DAa7A66 5e16 (5%) and 0xcC51d401610e2CC2Aa77c49CD948b3c716E12A26 9.5e17 (95%). Airlock Create asset 0x21d3…1e18 numeraire AMZN." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner(), Airlock getAssetData", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-15, CLM-17, CLM-21, CLM-22, CLM-23], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32afa67 (53148263). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name Jeff Beefzos symbol BEEFZOS decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. AMZN name Amazon • Robinhood Token symbol AMZN code 283 B. Factory 1912 B. Impl 13927 B. Launcher 5826 B. Airlock owner() 0x21e2ce70…7a66 getAssetData numeraire 0x12f190a9…bF54 token 0x21d3…1e18 LP slots 0xdead. Create-from 0xcC51…2A26 code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens BEEFZOS", url: "https://api.dexscreener.com/latest/dex/tokens/0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-10, CLM-11, CLM-13, CLM-17, CLM-18, CLM-19, CLM-24, EVT-1], excerpt: "3 robinhood uniswap pairs. Top pairAddress 0x234d6fd95269d352da17d8e9b7cd08c06522e699aa879b0d49e93ecdefc743ac labels v4 base Jeff Beefzos / BEEFZOS 0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18 quote Amazon • Robinhood Token / AMZN 0x12f190a9F9d7D37a250758b26824B97CE941bF54 liquidity.usd 42193.27 volume.h24 182159.76 fdv 47573 marketCap 47573 pairCreatedAt 1788381761000. info null." }
  - { id: R-8, publisher: GeckoTerminal, title: "AMZN/BEEFZOS Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x234d6fd95269d352da17d8e9b7cd08c06522e699aa879b0d49e93ecdefc743ac", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-10, CLM-12, CLM-18, EVT-1], excerpt: "name AMZN / BEEFZOS pool_created_at 2026-09-02T20:42:41Z fdv_usd 0.3946069331 market_cap_usd 0.3946069727 volume_usd.h24 175435.852325032 reserve_in_usd 41081.3946 transactions.h24 buys 1379 sells 1258. dex bankr-robinhood. base robinhood_0x12f190a9f9d7d37a250758b26824b97ce941bf54 quote robinhood_0x21d3462d3f0a5f661ed46d033a8cf05595c11e18." }
  - { id: R-9, publisher: GeckoTerminal, title: "Jeff Beefzos token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12, CLM-19], excerpt: "name Jeff Beefzos symbol BEEFZOS decimals 18 total_supply 1e27 price_usd 0.00005078630805 fdv_usd 50786.3080523569 market_cap_usd null volume_usd.h24 173430.526471345 total_reserve_in_usd 31232.764144652. coingecko_coin_id null. No website field. Top pool 0x234d…43ac." }
  - { id: R-10, publisher: GeckoTerminal, title: "AMZN/BEEFZOS pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x234d6fd95269d352da17d8e9b7cd08c06522e699aa879b0d49e93ecdefc743ac", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "HTML companion to the Gecko pool API. Pool 0x234d…43ac AMZN 0x12f1…bF54 BEEFZOS 0x21d3…1e18. Live numbers taken from the JSON API." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-21], excerpt: "HTTP 200. assets length 194. One AMZN hit: tokenSymbol AMZN tokenName Amazon • Robinhood Token deployments contractAddress 0x12f190a9F9d7D37a250758b26824B97CE941bF54 chainId 4663 networkName Robinhood Chain. tokenSymbol/tokenName scan for BEEFZOS returned 0 hits." }
  - { id: R-12, publisher: Blockscout, title: "Token 0x12f1…bF54 Amazon • Robinhood Token / AMZN", url: "https://robinhoodchain.blockscout.com/address/0x12f190a9F9d7D37a250758b26824B97CE941bF54", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-21], excerpt: "hash 0x12f190a9F9d7D37a250758b26824B97CE941bF54 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Amazon • Robinhood Token symbol AMZN decimals 18 total_supply 7769948000000000000000 holders_count 37788." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified false file_path src/LongLauncher.sol verified_at 2026-07-14T11:23:57Z." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true proxy_type null." }
  - { id: R-15, publisher: "@beefzos", title: "ca 0x21d3462d3f0a5f661ed46d033a8cf05595c11e18", url: "https://x.com/beefzos/status/2095259327070371962", published_at: 2026-09-02T21:15:26Z, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-11, CLM-20, EVT-3], excerpt: "ca 0x21d3462d3f0a5f661ed46d033a8cf05595c11e18. Author Jeff Beefzos @beefzos bio: it's day 1 at amazon ca: 0x21d3462d3f0a5f661ed46d033a8cf05595c11e18." }
  - { id: R-16, publisher: "@beefzos", title: "when you know what's up with the beef", url: "https://x.com/beefzos/status/2095335508637626500", published_at: 2026-09-03T02:18:09Z, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "when you know what's up with the beef" }
  - { id: R-17, publisher: "@beefzos", title: "shareholder value we create over the long term", url: "https://x.com/beefzos/status/2095250008086024332", published_at: 2026-09-02T20:38:24Z, accessed_at: 2026-09-03T04:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "We believe that a fundamental measure of our beef will be the shareholder value we create over the long term." }
  - { id: R-18, publisher: Blockscout, title: "LaunchCreated and PoolManager Initialize for BEEFZOS", url: "https://robinhoodchain.blockscout.com/tx/0xed8967d99b20f70a4484e222944208c474c785016424cafa7e9d205a580aa8a8", published_at: 2026-09-02T20:42:41Z, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-27, EVT-4], excerpt: "PoolManager Initialize id 0x234d6fd95269d352da17d8e9b7cd08c06522e699aa879b0d49e93ecdefc743ac currency0 AMZN currency1 BEEFZOS fee 8388608 hooks 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544. LaunchCreated asset 0x21d3…1e18 numeraire AMZN launcher 0xcC51…2A26 deployedAt 1788381761 reservedUntil 1788468161 (2026-09-03T20:42:41Z) normalizedTicker BEEFZOS." }
  - { id: R-19, publisher: X, title: "user search BEEFZOS", url: "https://x.com/beefzos", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-11, CLM-20], excerpt: "X user search BEEFZOS returned Jeff Beefzos @beefzos (16 followers) bio it's day 1 at amazon ca: 0x21d3462d3f0a5f661ed46d033a8cf05595c11e18, plus unrelated Chef Jeff Beefzos @kbb_onsolana. DexScreener does not list @beefzos." }
  - { id: R-20, publisher: Blockscout, title: "Search BEEFZOS", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=BEEFZOS", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-26], excerpt: "Multiple Jeff Beefzos ERC-20 hits. This packet's token is 0x21d3462d3F0A5f661Ed46D033a8cF05595c11e18 symbol BEEFZOS total_supply 1e27. A separate hit is 0x79780aD873C3f5F23C0C6FC68CD5EA8aF26C1E18 symbol BEEFZOS total_supply 1e27. Other hits use symbol Beefzos or $JBF." }
  - { id: R-21, publisher: DexScreener, title: "search BEEFZOS", url: "https://api.dexscreener.com/latest/dex/search?q=BEEFZOS", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-26], excerpt: "Robinhood uniswap hits include BEEFZOS/AMZN 0x21d3…1e18 pair 0x234d6fd9…43ac and a separate Jeff Beefzos / BEEFZOS 0x79780aD873C3f5F23C0C6FC68CD5EA8aF26C1E18 also quoted against AMZN. Do not merge those CAs." }
  - { id: R-22, publisher: DexScreener, title: "BEEFZOS/AMZN pair page", url: "https://dexscreener.com/robinhood/0x234d6fd95269d352da17d8e9b7cd08c06522e699aa879b0d49e93ecdefc743ac", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "HTML companion to latest/dex/tokens. Pair 0x234d…43ac BEEFZOS 0x21d3…1e18 AMZN 0x12f1…bF54. Live numbers taken from the JSON API." }

gaps:
  - { priority: P0, question: "Does DexScreener later list @beefzos or a site that bidirectionally links to token 0x21d3…1e18?", checked: "DexScreener info null; Gecko token has no website; @beefzos bio embeds the CA one way; no reverse link this pass, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle that links back" }
  - { priority: P1, question: "Do Lock beneficiaries 0xcC51…2A26 (95%) and 0x21E2…7A66 (5%) still control AMZN-side fees after reservedUntil?", checked: "create-tx Lock log on hook 0x4e34…a544; getAssetData LP slots include 0xdead; reservedUntil 2026-09-03T20:42:41Z had not passed at collection, 2026-09-03", next: "re-read LaunchCreated after 2026-09-03T20:42:41Z; read Doppler lock / fee collector state" }
  - { priority: P1, question: "What is in ipfs://bafkreiacedsui6m4xplget26kpbnp5gtegysnh7ysgr7asera4ukhtkvyu from the create tokenFactory bytes?", checked: "CID decoded from create calldata; not fetched this pass, 2026-09-03", next: "GET the CID on ipfs.io or another gateway and record whether it names 0x21d3…1e18" }
  - { priority: P2, question: "Should any of the other Jeff Beefzos CAs (0x79780a…1e18 and Blockscout search hits) get their own packets?", checked: "DexScreener search and Blockscout search list several same-name tokens; this packet is only 0x21d3…1e18, 2026-09-03", next: "only if an assignment names those addresses" }
---

# BEEFZOS — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Amazon • Robinhood Token (AMZN). LongLauncher.create on 2026-09-02 minted Jeff Beefzos (BEEFZOS) and seeded the BEEFZOS/AMZN book. Traders buy and sell BEEFZOS against AMZN. AMZN is the quote rail, not the subject. Distinct from SENDER/AMZN and WADDLES/AMZN. No bidirectional official site was located this pass.

Themes: memecoin, stock-paired:AMZN, rwa

## Why it matters

The BEEFZOS/AMZN Uniswap v4 book printed about $175.4k of 24h volume on Gecko at collection, with DexScreener on the same pair at $182.2k volume and $42.2k liquidity. @beefzos posted the CA. GET /rhj/assets has an AMZN Stock Token row at 0x12f1…bF54, so the pair leg is the Robinhood AMZN rail rather than a lookalike quote. Packed sender and waddles share that rail and are different tokens.

## What could go wrong

USD liquidity figures on the BEEFZOS/AMZN book count both sides, and the quote side is AMZN, not USDG. Gecko names the pool AMZN / BEEFZOS, so pool fdv_usd 0.39 is the AMZN-as-base figure and is not a BEEFZOS fdv. Gecko and DexScreener disagree on reserve and fdv for the same pool. @beefzos embeds the CA one way; DexScreener info is null, so the handle stays unconfirmed-official. Other Jeff Beefzos CAs share the ticker.

## Product and mechanics

LongLauncher 0x22e9…eeED create from EOA 0xcC51…2A26 at 2026-09-02T20:42:41Z minted Jeff Beefzos / BEEFZOS supply 1e9*1e18 into Uniswap v4 poolId 0x234d6fd9…43ac quoted against AMZN 0x12f1…bF54. tokenFactory is DopplerERC20V1Factory 0x1B37…b69a. The token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock 0xeb7C…0862. factory() reverts. [verified R-4 R-6]

Airlock getAssetData numeraire is AMZN; LP slots include 0xdead. DopplerHookInitializer Lock beneficiaries are 0xcC51…2A26 at 95% and Airlock owner 0x21E2…7A66 at 5%. PoolManager Initialize uses dynamic-fee flag 8388608 and hooks 0x4e34…a544. A secondary BEEFZOS/ETH v4 book exists on DexScreener with $9.93 liquidity. [verified R-5 R-6 R-7]

## Control and security

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-from 0xcC51…2A26 has no code. LaunchCreated reservedUntil 2026-09-03T20:42:41Z had not passed at collection. [verified R-4 R-6 R-18]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is fully verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified R-2 R-3 R-13] [unknown]

## Team and provenance

No official domain was located. DexScreener info is null. @beefzos bio and a post embed CA 0x21d3…1e18; DexScreener does not list that handle. Flag unconfirmed-official. [claim R-7 R-15 R-19]

Blockscout search BEEFZOS and DexScreener search list other Jeff Beefzos ERC-20s, including 0x79780a…1e18. Those addresses are not this token. Flag ca-collision on the ticker. [claim R-20 R-21]

## Economics and activity

AMZN/BEEFZOS Uniswap v4 24h volume is 175435.85 USD and reserve_in_usd is 41081.39 at 2026-09-03T04:49:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 50786.31. Gecko pool fdv_usd 0.39 is AMZN-as-base, not a BEEFZOS fdv. Gecko token volume_usd.h24 is 173430.53 across all pools, not the AMZN book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 42193.27, volume.h24 182159.76, fdv/marketCap 47573. Blockscout holders_count 66. Pair created 2026-09-02T20:42:41Z. [claim R-1 R-7]

## Material risks

- Quote token AMZN 0x12f1…bF54 is the Robinhood Stock Token rail from GET /rhj/assets; BEEFZOS is not in that registry. [verified R-11 R-12]
- Pool USD reserve is BEEFZOS plus AMZN, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko and DexScreener disagree on reserve and fdv; Gecko pool fdv_usd 0.39 is AMZN-as-base. [claim R-7 R-8 R-9]
- No bidirectional official handle or domain this pass; @beefzos is unconfirmed-official. [claim R-7 R-15]
- Other Jeff Beefzos CAs share the ticker. [claim R-20 R-21]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/AMZN/LongLauncher/Airlock and create tx 0xed8967d9…a8a8, RPC name/symbol/owner/getAssetData, DexScreener tokens and search, Gecko pool/token (first GET 200), /rhj/assets, and X Latest from:beefzos were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-7 R-8 R-11]
- Numbers: 175435.85 is the Gecko AMZN/BEEFZOS pool 24h volume, not the 173430.53 token all-pools figure. Reserve 41081.39 is that pool. DexScreener 182159.76 / 42193.27 is the same pair, different aggregator. Gecko token fdv 50786.31 is the BEEFZOS figure; pool fdv 0.39 is not. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that BEEFZOS is packed sender or waddles, an official Amazon product, or a Bankr launch because Gecko dex id is bankr-robinhood. The token is 0x21d3…1e18, sender is 0x4d41…1e18, waddles is 0xbB6E…0CdD, /rhj/assets has no BEEFZOS row, and creation is LongLauncher.create. [inference R-4 R-7 R-11 R-20]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no beefzos / BEEFZOS / 0x21d3…1e18. content/dependencies/stock-tokens.yaml AMZN 0x12f190a9F9d7D37a250758b26824B97CE941bF54 matches the quote rail. Pending packets sender and waddles share the AMZN rail only.
- Explorer: Blockscout api/v2 with Chrome UA for token, impl, factory, AMZN, LongLauncher, Airlock, search BEEFZOS, create tx 0xed8967d9…a8a8, LaunchCreated / Initialize / Lock logs, holders. RPC eth_chainId/eth_blockNumber/eth_getCode/eth_call with Chrome UA at block 53148263.
- Aggregators: DexScreener latest/dex/tokens and latest/dex/search. Gecko first GET pool HTTP 200 then token HTTP 200.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one AMZN, 0 BEEFZOS.
- Social: X keyword Latest $BEEFZOS / Jeff Beefzos; from:beefzos; user search BEEFZOS.
- Failed: token transfers type=mint 422; X Latest keyword for the 0x21d3 CA returned no hits (from:beefzos did); X Latest $BEEFZOS hits named a different CA 0x79780a…1e18 and were not excerpted.
- Time: collection 2026-09-03T04:47Z–2026-09-03T04:55Z.
