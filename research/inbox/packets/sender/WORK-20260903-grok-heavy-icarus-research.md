---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: sender
name: SENDER
packet_tier: seed
as_of: 2026-09-03T04:27:00Z
prior_packet: null
supersedes: null
owned_slugs: [sender]
allowed_paths:
  - research/inbox/packets/sender/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: SENDER
  aliases: []
  symbols: [SENDER]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token attributes have no website; Blockscout token page lists no homepage this pass; create calldata IPFS CID returned Cloudflare 403"
  official_handle: "NULL — DexScreener info.socials empty; X user search for SENDER returned unrelated handles (@Sender LAT Sender, @Sender_AI); no post this pass bidirectionally linked a project handle to 0x4d41…1e18; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "SENDER is the ERC-20 at 0x4d41…1e18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; no official SENDER handle was located"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the SENDER/AMZN pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0x0412c0bd…8183 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "SENDER is 0x4d41…1e18 paired to AMZN 0x12f1…bF54"
        - "No shared domain, handle, or reproduced address"
    - slug: vaccinu
      signals: [other]
      contrary_signals:
        - "Pending packet vaccinu is a separate token 0xcF19…1E18"
        - "DexScreener lists thin SENDER/VACCINU v4 books with null liquidity this pass"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x4d41…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create at 2026-09-01T01:45:59Z minted SENDER / SENDER into Uniswap v4 pool 0x2196d727…e960 quoted against Amazon • Robinhood Token AMZN 0x12f1…bF54. AMZN is the quote rail. owner() is Airlock 0xeb7C…0862. No official site or handle this pass. [R-1] [R-4] [R-5] [R-6] [R-8] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-9], note: "" }

links: []

deployments:
  - label: SENDER token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
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
      seen: 2026-09-03T04:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-13]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-6, R-13]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-14]
  - label: Amazon • Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0x12f190a9F9d7D37a250758b26824B97CE941bF54"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-11, R-12]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6]

metrics:
  - { kind: volume_24h, value: 591540.85, currency: USD, as_of: 2026-09-03T04:24:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2196d7279117bcb2968392f25009634597d133a3410e7d04aed04891969ce960 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 149128.77, currency: USD, as_of: 2026-09-03T04:24:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2196d727…e960 reserve_in_usd (SENDER/AMZN pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 311941.83, currency: USD, as_of: 2026-09-03T04:24:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2196d727…e960 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 601149.31, currency: USD, as_of: 2026-09-03T04:22:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18 pair 0x2196d727…e960 SENDER/AMZN Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 146162.75, currency: USD, as_of: 2026-09-03T04:22:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x4d41…1e18 pair 0x2196d727…e960 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 317124, currency: USD, as_of: 2026-09-03T04:22:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x4d41…1e18 pair 0x2196d727…e960 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 1065, currency: null, as_of: 2026-09-03T04:22:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:23:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32ac092 (53133458). Token 0x4d41…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name() SENDER symbol() SENDER decimals 18 totalSupply 1e27 owner() Airlock 0xeb7c0347…0862 factory() reverts. AMZN 0x12f1…bF54 eth_getCode 283 bytes name() Amazon • Robinhood Token symbol() AMZN. Factory code 1912 B. Impl code 13927 B. Launcher code 5826 B. Airlock code 5695 B. Create-from 0x8130…5F41 code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-1, R-4, R-5, R-12, R-13, R-14], result: "Blockscout api/v2 token 0x4d41…1e18 name SENDER is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator_address_hash null this pass; token symbol SENDER holders_count 1065 total_supply 1e27. Zero-addr mint 2026-09-01T01:45:59Z tx 0x0412c0bd…8183 block 51337623 to Airlock 1e27. Tx from 0x8130…5F41 (is_contract false) to LongLauncher method create; decoded numeraire 0x12f1…bF54 tokenFactory 0x1B37…b69a name/symbol SENDER supply 1e27. LaunchCreated normalizedTicker SENDER. PoolManager Initialize id 0x2196d727…e960 currency0 AMZN currency1 SENDER fee 8388608 (dynamic-fee flag) hooks DopplerHookInitializer 0x4e34…a544. AMZN token name Amazon • Robinhood Token holders_count 37794." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x4d41…1e18 9 robinhood uniswap pairs; top SENDER/AMZN v4 0x2196d727…e960 quote 0x12f1…bF54 Amazon • Robinhood Token / AMZN liquidity.usd 146162.75 volume.h24 601149.31 fdv/marketCap 317124 pairCreatedAt 1788227159000 (2026-09-01T01:45:59Z) info.websites [] info.socials []. Secondary SENDER/USDG books have far less liquidity. Gecko pool same address name SENDER / AMZN dex bankr-robinhood volume_usd.h24 591540.847800674 reserve_in_usd 149128.7709 fdv_usd 311941.8257 pool_created_at 2026-09-01T01:45:59Z market_cap_usd null. Gecko token volume_usd.h24 595110.550387676 (all pools, not the AMZN book)." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0x4d41…1e18) word0 numeraire 0x12f190a9…bF54; word5 token 0x4d41…1e18; word1/word2 0xdead; Airlock owner() 0x21e2ce70…7a66. AMZN name() Amazon • Robinhood Token; symbol() AMZN." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one AMZN row tokenName Amazon • Robinhood Token deployments contractAddress 0x12f190a9F9d7D37a250758b26824B97CE941bF54 chainId 4663. tokenSymbol/tokenName scan for SENDER returned 0 hits." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 SENDER into a Uniswap v4 pool quoted against AMZN 0x12f1…bF54; Airlock getAssetData numeraire is that AMZN; LP addresses in getAssetData include 0xdead. Lock beneficiaries on DopplerHookInitializer: 0x8130…5F41 95% and Airlock owner 0x21E2…7A66 5%.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: SENDER, class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: SENDER, class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-5, R-6, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-6, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-1, R-5, R-6, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG: tx 0x0412c0bd…8183 from EOA 0x8130…5F41 (code 0x) called LongLauncher.create; decoded tokenFactory DopplerERC20V1Factory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from census LONG (the factory) and from Broker Senders ERC-721 collections returned by Blockscout search SENDER.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset is the AMZN rail Amazon • Robinhood Token 0x12f190a9F9d7D37a250758b26824B97CE941bF54 (GET /rhj/assets 194 assets, one AMZN row, that contract, chainId 4663). SENDER is not in the registry. AMZN is a rail, not the subject.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-8, R-11, R-12], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 pool 0x2196d7279117bcb2968392f25009634597d133a3410e7d04aed04891969ce960; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood; PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951; Initialize fee 8388608 (dynamic-fee flag) hooks 0x4e34…a544", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:27:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials empty; X user search returned unrelated handles; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-7, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko SENDER/AMZN pool 0x2196d727…e960 volume_usd.h24 591540.847800674 reserve_in_usd 149128.7709 fdv_usd 311941.8257 at 2026-09-03T04:24:00Z (pool slice, not Gecko token all-pools 595110.550387676)", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener same pair liquidity.usd 146162.75 volume.h24 601149.31 fdv/marketCap 317124 at 2026-09-03T04:22:00Z", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 1065, class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from 0x8130a7926fdec31453aa478c1Db8F00ebcC35F41 (EOA, code 0x)", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on DexScreener, Gecko, Blockscout, or X search this pass", class: unknown, observed_at: 2026-09-03T04:27:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Gecko dex id bankr-robinhood on the SENDER/AMZN pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge SENDER into census bankr.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token has no website field", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: communications.status, value: "third-party-link / copypasta-pattern: X posts advertised netlify claim and vote URLs embedding CA 0x4d41…1e18 (crypto-keo.netlify.app, crypto-8xe.netlify.app, crypto-mll.netlify.app, robinhood-main-dex-rkx.netlify.app). None is a DexScreener social. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-16, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x12f190a9F9d7D37a250758b26824B97CE941bF54", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-6, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-6, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: candidate, value: "sender | SENDER | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:27:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:27:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "Blockscout search SENDER also returns Broker Senders / Stonk Senders ERC-721 collections (e.g. 0x4643…C60d). Those are not this ERC-20.", class: claim, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13]
    material_effect: "Same SENDER/AMZN pool 0x2196d727…e960: Gecko reserve_in_usd 149128.77 vs DexScreener liquidity.usd 146162.75; 24h volume 591540.85 vs 601149.31; fdv 311941.83 vs 317124. A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko SENDER/AMZN 24h volume $591.5k, liquidity $149k"
    summary: "Gecko pool 0x2196d727…e960 volume_usd.h24 591541 reserve_in_usd 149129 fdv_usd 311942."
    occurred_at: 2026-09-03T04:24:00Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: onchain
    title: "LongLauncher.create minted SENDER against AMZN"
    summary: "Tx 0x0412c0bd…8183 from 0x8130…5F41 at 2026-09-01T01:45:59Z; LaunchCreated ticker SENDER; PoolManager Initialize id 0x2196d727…e960."
    occurred_at: 2026-09-01T01:45:59Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
  - id: EVT-3
    type: ct
    title: "@0xBedouin listed AMZN — $Sender among LONG pairs"
    summary: "Post: Buy LONG pairs & board sit szn; AMZN — $Sender alongside NVDA $AI, NFLX $Chill, PLTR $monitor."
    occurred_at: 2026-09-02T23:59:37Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-4
    type: ct
    title: "@nolimit_wealth called $sender the AMZN beta pair on @longdotxyz"
    summary: "Reply: seems like the beta pair to AMZN on @longdotxyz. Matches the LongLauncher.create path."
    occurred_at: 2026-09-03T01:45:49Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-5
    type: ct
    title: "X posts advertised netlify claim and vote URLs for CA 0x4d41…1e18"
    summary: "crypto-keo / crypto-8xe / crypto-mll.netlify.app claim portals and robinhood-main-dex-rkx.netlify.app vote page. Flag copypasta-pattern and third-party-link."
    occurred_at: 2026-09-03T03:48:21Z
    observed_at: 2026-09-03T04:26:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-16, R-17]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x4d41…1e18 SENDER / SENDER", url: "https://robinhoodchain.blockscout.com/address/0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-7, CLM-14, CLM-22, CLM-24], excerpt: "hash 0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18 name SENDER is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol SENDER decimals 18 total_supply 1000000000000000000000000000 holders_count 1065 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-23], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768." }
  - { id: R-4, publisher: Blockscout, title: "Zero-addr mint of SENDER 1e27", url: "https://robinhoodchain.blockscout.com/tx/0x0412c0bd28283004a7a77b9d0f6577be5a3e20cc2dc2b36dacef878469508183", published_at: 2026-09-01T01:45:59Z, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, EVT-2], excerpt: "api/v2 zero-addr token-transfers: timestamp 2026-09-01T01:45:59.000000Z type token_minting tx 0x0412c0bd28283004a7a77b9d0f6577be5a3e20cc2dc2b36dacef878469508183 method 0x882db707 block 51337623 to 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 value 1000000000000000000000000000." }
  - { id: R-5, publisher: Blockscout, title: "create tx 0x0412c0bd…8183", url: "https://robinhoodchain.blockscout.com/tx/0x0412c0bd28283004a7a77b9d0f6577be5a3e20cc2dc2b36dacef878469508183", published_at: 2026-09-01T01:45:59Z, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-7, CLM-9, CLM-15, CLM-18, CLM-25, EVT-2], excerpt: "timestamp 2026-09-01T01:45:59.000000Z status ok result success block_number 51337623 from 0x8130a7926fdec31453aa478c1Db8F00ebcC35F41 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0x12f190a9F9d7D37a250758b26824B97CE941bF54 tokenFactory 0x1B37D3a72082029c44B35B604Ea473617580b69a name/symbol SENDER supply 1e27. LaunchCreated normalizedTicker SENDER launcher 0x8130…5F41 deployedAt 1788227159. PoolManager Initialize id 0x2196d727…e960. Lock beneficiaries 0x21E2…7A66 5e16 and 0x8130…5F41 9.5e17." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner(), Airlock getAssetData", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-15, CLM-17, CLM-21, CLM-22, CLM-23], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32ac092 (53133458). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name SENDER symbol SENDER decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. AMZN name Amazon • Robinhood Token symbol AMZN code 283 B. Factory code 1912 B. Impl 13927 B. Launcher 5826 B. Airlock owner() 0x21e2ce70…7a66 getAssetData numeraire 0x12f190a9…bF54 token 0x4d41…1e18 LP slots 0xdead. Create-from 0x8130…5F41 code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens SENDER", url: "https://api.dexscreener.com/latest/dex/tokens/0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-11, CLM-13, CLM-17, CLM-18, CLM-19, CLM-24], excerpt: "9 robinhood uniswap pairs. Top pairAddress 0x2196d7279117bcb2968392f25009634597d133a3410e7d04aed04891969ce960 labels v4 base SENDER / SENDER 0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18 quote Amazon • Robinhood Token / AMZN 0x12f190a9F9d7D37a250758b26824B97CE941bF54 liquidity.usd 146162.75 volume.h24 601149.31 fdv 317124 marketCap 317124 pairCreatedAt 1788227159000. info.websites [] info.socials []." }
  - { id: R-8, publisher: GeckoTerminal, title: "SENDER/AMZN Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2196d7279117bcb2968392f25009634597d133a3410e7d04aed04891969ce960", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-10, CLM-12, CLM-18, EVT-1], excerpt: "name SENDER / AMZN pool_created_at 2026-09-01T01:45:59Z fdv_usd 311941.8257 market_cap_usd null volume_usd.h24 591540.847800674 reserve_in_usd 149128.7709 transactions.h24 buys 2697 sells 2846. dex bankr-robinhood." }
  - { id: R-9, publisher: GeckoTerminal, title: "SENDER token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12, CLM-19], excerpt: "name SENDER symbol SENDER decimals 18 total_supply 1e27 price_usd 0.000311928818 fdv_usd 311928.817954174 market_cap_usd null volume_usd.h24 595110.550387676 total_reserve_in_usd 85052.84198. coingecko_coin_id null. image_url null." }
  - { id: R-10, publisher: GeckoTerminal, title: "SENDER/AMZN pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x2196d7279117bcb2968392f25009634597d133a3410e7d04aed04891969ce960", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "SENDER/AMZN SENDER Price on Bankr (Robinhood). Pool 0x219…e960 SENDER 0x4d4…1e18 AMZN 0x12f…bf54." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-21], excerpt: "HTTP 200. assets length 194. One AMZN hit: tokenSymbol AMZN tokenName Amazon • Robinhood Token deployments contractAddress 0x12f190a9F9d7D37a250758b26824B97CE941bF54 chainId 4663 networkName Robinhood Chain. tokenSymbol/tokenName scan for SENDER returned 0 hits." }
  - { id: R-12, publisher: Blockscout, title: "Token 0x12f1…bF54 Amazon • Robinhood Token / AMZN", url: "https://robinhoodchain.blockscout.com/address/0x12f190a9F9d7D37a250758b26824B97CE941bF54", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-21], excerpt: "hash 0x12f190a9F9d7D37a250758b26824B97CE941bF54 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon. token name Amazon • Robinhood Token symbol AMZN decimals 18 total_supply 7769948000000000000000 holders_count 37794." }
  - { id: R-13, publisher: Blockscout, title: "DopplerERC20V1 verified source", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599?tab=contract", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-22, CLM-23], excerpt: "ContractName DopplerERC20V1 compiler v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. Factory 0x1B37…b69a DopplerERC20V1Factory same compiler, src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-14, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_fully_verified true file_path src/LongLauncher.sol verified_at 2026-07-14T11:23:57Z." }
  - { id: R-15, publisher: "@0xBedouin", title: "Buy LONG pairs AMZN — $Sender", url: "https://x.com/0xBedouin/status/2095300644277997831", published_at: 2026-09-02T23:59:37Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "Waking up to green candles feels good Buy LONG pairs & board sit szn NVDA — $AI AMZN — $Sender NFLX — $Chill SPY — $Stonks MU — $moo HIMS — $boner PLTR — $monitor RBLX — $oof, $robux ASML — $org LLY — $peptides SPCX — $spacehood" }
  - { id: R-16, publisher: "@ITSYABOIRAZOR", title: "$SENDER claim page working rn", url: "https://x.com/ITSYABOIRAZOR/status/2095358207975649554", published_at: 2026-09-03T03:48:21Z, accessed_at: 2026-09-03T04:26:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-20, EVT-5], excerpt: "yo $SENDER claim page working rn got mine first try CA: 0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18 https://crypto-keo.netlify.app/claim?contract=0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18&cfg=evmdrop&pid=MEMKO. Sibling posts used crypto-8xe.netlify.app and crypto-mll.netlify.app with the same CA." }
  - { id: R-17, publisher: "@veilcircuitNFT", title: "Attention $SENDER Family vote", url: "https://x.com/veilcircuitNFT/status/2095311316470644891", published_at: 2026-09-03T00:42:01Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-20, EVT-5], excerpt: "Attention $SENDER Family! YOUR vote matters! Less than 100 votes are needed to list $SENDER on the Robinhood Top 100 Leaderboard. Listing ID: 6695 https://robinhood-main-dex-rkx.netlify.app/vote/0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18" }
  - { id: R-18, publisher: "@nolimit_wealth", title: "$sender beta pair to AMZN on @longdotxyz", url: "https://x.com/nolimit_wealth/status/2095327371431641339", published_at: 2026-09-03T01:45:49Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "@DegenToDisciple I know you are focused on $spacehood but what do you think of $sender - seems like the beta pair to AMZN on @longdotxyz and great value" }
  - { id: R-19, publisher: "X user search", title: "User search SENDER", url: "https://x.com/search?q=SENDER&f=user", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-11], excerpt: "Top hits: @Sender LAT Sender (CDL Coach), @Sender_AI Sender AI $ASI, @Senderov_RT, @SandzSender, @SenderismoGuada. None listed CA 0x4d41…1e18 or Robinhood Chain in the returned bios this pass." }
  - { id: R-20, publisher: Blockscout, title: "Search SENDER", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=SENDER", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-26], excerpt: "First hit ERC-20 name SENDER symbol SENDER address_hash 0x4d41CcAa0eeB95C6EBC56d53adf637198c901e18 total_supply 1e27. Subsequent hits are Broker Senders / Stonk Senders ERC-721 collections, not this token." }
  - { id: R-21, publisher: DexScreener, title: "SENDER/AMZN pair page", url: "https://dexscreener.com/robinhood/0x2196d7279117bcb2968392f25009634597d133a3410e7d04aed04891969ce960", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "HTML companion to latest/dex/tokens. Pair 0x219…e960 SENDER 0x4d41…1e18 AMZN 0x12f1…bF54. Live numbers taken from the JSON API." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x4d41…1e18?", checked: "DexScreener info.websites [] info.socials []; Gecko token has no website; X user search returned unrelated handles; create calldata IPFS CID Cloudflare 403, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; fetch the IPFS CID on a non-Cloudflare gateway; search new posts that embed the CA and a handle" }
  - { priority: P1, question: "Do Lock beneficiaries 0x8130…5F41 (95%) and 0x21E2…7A66 (5%) still control AMZN-side fees after graduation?", checked: "create-tx Lock log on hook 0x4e34…a544; getAssetData LP slots include 0xdead; reservedUntil 2026-09-02T01:45:59Z has passed, 2026-09-03", next: "read Doppler lock / fee collector state and any LongFeeVaultFactory deployVault for this token" }
  - { priority: P1, question: "What is in ipfs://bafkreih6qjdzxbpzziym3ejxevafzoenj2dt3wtivizddrxfxzkjwxdie from the create tokenFactory bytes?", checked: "ipfs.io returned Cloudflare challenge HTML 403 this pass, 2026-09-03", next: "retry via another gateway or Blockscout token metadata if indexed" }
  - { priority: P2, question: "Should any of the thin SENDER/USDG or SENDER/VACCINU books get their own notes?", checked: "DexScreener 9 pairs; AMZN book has essentially all of the liquidity this pass, 2026-09-03", next: "only if an assignment names those pool ids" }
---

# SENDER — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Amazon • Robinhood Token (AMZN). LongLauncher.create on 2026-09-01 minted SENDER and seeded the SENDER/AMZN book. Traders buy and sell SENDER against AMZN. AMZN is the quote rail, not the subject. No official site or handle was located this pass.

Themes: memecoin, stock-paired:AMZN, rwa

## Why it matters

The SENDER/AMZN Uniswap v4 book printed about $591.5k of 24h volume on Gecko at collection, with DexScreener on the same pair at $601.1k volume and $146.2k liquidity. @0xBedouin listed AMZN — $Sender among LONG pairs. GET /rhj/assets has an AMZN Stock Token row at 0x12f1…bF54, so the pair leg is the Robinhood AMZN rail rather than a lookalike quote.

## What could go wrong

USD liquidity figures on the SENDER/AMZN book count both sides, and the quote side is AMZN, not USDG. Gecko and DexScreener disagree on reserve and fdv for the same pool. No official handle was located, so comms surfaces stay unconfirmed-official. Netlify claim and vote URLs that embed this CA are third-party-link / copypasta-pattern.

## Product and mechanics

LongLauncher 0x22e9…eeED create from EOA 0x8130…5F41 at 2026-09-01T01:45:59Z minted SENDER / SENDER supply 1e9*1e18 into Uniswap v4 poolId 0x2196d727…e960 quoted against AMZN 0x12f1…bF54. tokenFactory is DopplerERC20V1Factory 0x1B37…b69a. The token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock 0xeb7C…0862. factory() reverts. [verified R-4 R-5 R-6]

Airlock getAssetData numeraire is AMZN; LP slots include 0xdead. DopplerHookInitializer Lock beneficiaries are 0x8130…5F41 at 95% and Airlock owner 0x21E2…7A66 at 5%. PoolManager Initialize uses dynamic-fee flag 8388608 and hooks 0x4e34…a544. Secondary SENDER/USDG and SENDER/VACCINU books exist on DexScreener with far less liquidity than the AMZN book. [verified R-5 R-6 R-7]

## Control and security

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-from 0x8130…5F41 has no code. LaunchCreated reservedUntil 2026-09-02T01:45:59Z has passed. [verified R-5 R-6]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is fully verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified R-13 R-14] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. X user search for SENDER returned unrelated handles. Flag unconfirmed-official. [claim R-7 R-19]

X posts advertised netlify claim portals and a vote page that embed CA 0x4d41…1e18. Flag third-party-link and copypasta-pattern. [claim R-16 R-17]

## Economics and activity

SENDER/AMZN Uniswap v4 24h volume is 591540.85 USD and reserve_in_usd is 149128.77 at 2026-09-03T04:24:00Z from the Gecko pool endpoint. fdv_usd is 311941.83. Gecko token volume_usd.h24 is 595110.55 across all pools, not the AMZN book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 146162.75, volume.h24 601149.31, fdv/marketCap 317124. Blockscout holders_count 1065. Pair created 2026-09-01T01:45:59Z. [claim R-1 R-7]

## Material risks

- Quote token AMZN 0x12f1…bF54 is the Robinhood Stock Token rail from GET /rhj/assets; SENDER is not in that registry. [verified R-11 R-12]
- Pool USD reserve is SENDER plus AMZN, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko and DexScreener disagree on reserve and fdv for the same pool. [claim R-7 R-8]
- No official handle or domain this pass; netlify claim/vote URLs are third-party-link / copypasta-pattern. [claim R-7 R-16 R-17]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/AMZN and create tx 0x0412c0bd…8183, RPC name/symbol/owner/getAssetData, DexScreener, Gecko pool/token, /rhj/assets, and X Latest posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-6 R-7 R-8 R-11]
- Numbers: 591540.85 is the Gecko SENDER/AMZN pool 24h volume, not the 595110.55 token all-pools figure. Reserve 149128.77 is that pool. DexScreener 601149.31 / 146162.75 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that SENDER is an official Amazon or Robinhood product, or that Gecko dex id bankr-robinhood means Bankr launched it. /rhj/assets has no SENDER row, creation is LongLauncher.create, and no official handle or domain was located. [inference R-5 R-11 R-18]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no sender / SENDER / 0x4d41…1e18. content/dependencies/stock-tokens.yaml AMZN 0x12f190a9F9d7D37a250758b26824B97CE941bF54 matches the quote rail.
- Explorer: Blockscout api/v2 with Chrome UA for token, impl, factory, AMZN, search SENDER, zero-addr mint, create tx 0x0412c0bd…8183, LaunchCreated / Initialize / Lock logs, holders. RPC eth_chainId/eth_blockNumber/eth_getCode/eth_call with Chrome UA at block 53133458.
- Aggregators: DexScreener latest/dex/tokens and token-pairs/v1. Gecko first GET pool HTTP 200 then token HTTP 200; no further Gecko calls.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one AMZN, 0 SENDER.
- Social: X keyword Latest $SENDER AMZN and CA 0x4d41…1e18; user search SENDER.
- Failed: Blockscout token creator_address_hash null (create tx tokenFactory used instead); address transactions filter 422; token transfers type=token_minting 422; ipfs.io CID Cloudflare 403; no official handle.
- Time: collection 2026-09-03T04:21Z–2026-09-03T04:27Z.
