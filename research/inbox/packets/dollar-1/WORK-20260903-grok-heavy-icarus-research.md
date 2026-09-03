---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: dollar-1
name: "$1"
packet_tier: seed
as_of: 2026-09-03T03:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [dollar-1]
allowed_paths:
  - research/inbox/packets/dollar-1/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Trump $1 Coin
  aliases: ["Trump $1"]
  symbols: ["$1"]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is a US Mint product URL, not a token site; Gecko token attributes have no website; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials is x.com/search?q=trump%20coin, not a handle; X user search for Trump $1 Coin returned unrelated handles; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…C7e"
        - "dollar-1 is the ERC-20 at 0xdCe5…e6da created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; this token has no official site or handle this pass"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at artificialinu.com / @ArtificiallyInu paired to NVDA via LongLauncher"
        - "dollar-1 is Trump $1 Coin at 0xdCe5…e6da paired to DJT via PonsV2LaunchFactory"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "dollar-1 was launched by PonsV2LaunchFactory 0x7eD5…C7e, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "dollar-1 is a Pons v2 LaunchToken in a Uniswap v4 $1/DJT pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xdCe5…e6da has 3248 bytes of code on 4663; name Trump $1 Coin, symbol $1, totalSupply 1e27. PonsV2LaunchFactory TokenLaunched at 2026-09-02T11:00:20Z with pairToken DJT 0x1D11…4516; createGraduatedPool at 2026-09-02T11:01:17Z locked Uniswap v4 pool 0xe7da…6758. V2LaunchLocker isLocked true. DJT is in GET /rhj/assets. No official site or handle this pass. [R-1] [R-3] [R-4] [R-5] [R-6] [R-7] [R-8] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-14], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links: []

deployments:
  - label: Trump $1 Coin token
    role: token
    address:
      value: "0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:12:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-2, R-3]
  - label: PonsV2LaunchFactory
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:28:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-13]
  - label: V2LaunchLocker (top holder / locked position)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:20:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-12, R-21]
  - label: DJT Robinhood Stock Token (pair quote)
    role: token
    address:
      value: "0x1D11f0496982706C5e14A514D4E79F2e6BdE4516"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:18:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-10, R-14]

metrics:
  - { kind: volume_24h, value: 10007137.0061065, currency: USD, as_of: 2026-09-03T03:28:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe7daa50bae196f9476df483a9cd0051896980c4939d06664eec99d1b69386758 volume_usd.h24 (djt/$1 pool, not Gecko token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 109789.5302, currency: USD, as_of: 2026-09-03T03:28:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe7daa50bae196f9476df483a9cd0051896980c4939d06664eec99d1b69386758 reserve_in_usd", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 10198421.95, currency: USD, as_of: 2026-09-03T03:12:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xdCe5…e6da pair 0xe7da…6758 $1/DJT Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 110454.92, currency: USD, as_of: 2026-09-03T03:12:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xdCe5…e6da pair 0xe7da…6758 $1/DJT liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 1761828, currency: USD, as_of: 2026-09-03T03:12:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xdCe5…e6da pair 0xe7da…6758 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 9786, currency: null, as_of: 2026-09-03T03:35:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x32a4bb5 (53103541) then 0x32a5064 (53104740). Token 0xdCe5…e6da eth_getCode 3248 bytes prefix 0x60806040 (not EIP-1167). name Trump $1 Coin; symbol $1; decimals 18; totalSupply 1e27. owner() and factory() revert." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-23], result: "V2LaunchLocker 0x2674…4952 factory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd; isLocked(token) true; lockedPositions 1499306 (0x16e0aa); lockedTokenSupply 81632653061224493405226180. Factory locker() 0x2674…4952; memeHook 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044; launchDeployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42; poolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951; owner 0x263e…19Dd; approvedPairTokens(DJT) true. eth_getLogs TokenLaunched tx 0x89a63a39…a1ab block 52522682; PoolGraduated tx 0xc034aef0…472b block 52523251 positionId 1499306." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-2, R-5, R-6, R-12, R-13, R-14, R-20], result: "Blockscout api/v2 token 0xdCe5…e6da name Trump $1 Coin symbol $1 holders_count 9786 total_supply 1e27 is_contract true is_verified false creator_address_hash null. Factory 0x7eD5…C7e name PonsV2LaunchFactory is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol. Locker 0x2674…4952 name V2LaunchLocker is_verified true is_partially_verified true file_path src/v2/V2LaunchLocker.sol. DJT 0x1D11…4516 name BeaconProxy is_verified true token Trump Media & Technology Group Corp. • Robinhood Token. Launch tx 0x89a6…a1ab 2026-09-02T11:00:20Z from EOA 0x86d16c22…e29A to 0xb2a748F6…7a14 method 0xe1b77db5. Grad tx 0xc034…472b 2026-09-02T11:01:17Z createGraduatedPool(token 0xdCe5…e6da) to factory. Factory/locker owner() page name SafeProxy." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T03:28:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0xdCe5…e6da: 30 robinhood uniswap pairs; top $1/DJT v4 0xe7da…6758 quote 0x1D11…4516 Trump Media & Technology Group • Robinhood Token / DJT liquidity.usd 110454.92 volume.h24 10198421.95 fdv 1761828 pairCreatedAt 1788346877000 (2026-09-02T11:01:17Z) info.websites US Mint product URL info.socials x.com/search?q=trump%20coin. Gecko pool name djt / $1 dex pons-v2-dex pool_created_at 2026-09-02T11:01:17Z volume_usd.h24 10007137.0061065 reserve_in_usd 109789.5302 fdv_usd 1464166.78882412. Gecko token volume_usd.h24 17954964.293969 (all pools) launchpad_details.completed true completed_at 2026-09-02T11:01:17Z migrated_destination_pool_address 0xe7da…6758." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-10], result: "GET api.robinhood.com/rhj/assets HTTP 200. tokenSymbol DJT tokenName Trump Media & Technology Group • Robinhood Token deployments.contractAddress 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 chainId 4663 status ASSET_STATUS_ACTIVE." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Pons v2 bonding-curve launch that graduates into a locked Uniswap v4 pool quoted against DJT. TokenLaunched at 2026-09-02T11:00:20Z with pairToken 0x1D11…4516; createGraduatedPool at 2026-09-02T11:01:17Z; V2LaunchLocker isLocked true and holds positionId 1499306.", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-5, R-6, R-12], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Trump $1 Coin", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "$1", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-1, R-3, R-6, R-8], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-7, R-8, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials is a search URL; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote DJT 0x1D11…4516 is Trump Media & Technology Group • Robinhood Token, BeaconProxy Stock implementation, and GET /rhj/assets lists that address. Distinct from census LONG / Artificial Inu / L4VA.", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-10, R-14, R-7], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "djt/$1 Uniswap v4 (Gecko pool 0xe7da…6758) 24h volume 10007137.0061065 USD and reserve_in_usd 109789.5302 at 2026-09-03T03:28:00Z (pool slice, not Gecko token all-pools 17954964.293969)", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 110454.92 volume.h24 10198421.95 fdv/marketCap 1761828 at 2026-09-03T03:12:00Z", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 9786, class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-2], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "Token owner() reverts. Factory owner() and locker owner() return SafeProxy 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. Verified locker source: no collectFees or withdrawal; onlyOwner setFactory once.", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-3, R-4, R-12, R-20], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-14, field: other, value: "Pair asset is DJT 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516; venue is Uniswap v4 PoolManager 0x8366…0951 pool 0xe7da…6758 after Pons v2 graduation; Gecko dex id pons-v2-dex", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-15, field: deployment.role, value: "Token creator_address_hash was empty; TokenLaunched and locker.factory() name PonsV2LaunchFactory 0x7eD5…C7e as the pad, not LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: identity.domain, value: "NULL — DexScreener info.websites is a US Mint product URL; Gecko token has no website field", class: claim, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-7, R-9, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: candidate, value: "dollar-1 | $1 | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token volume_usd.h24 17954964.293969 across all pools, not the DJT book", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "Gecko pool fdv_usd 1464166.78882412 market_cap_usd 1656034.17639356; Gecko token fdv_usd 1865872.96332229 market_cap_usd null", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "third-party-link: DexScreener info.websites points at a US Mint product path; GET returned Cloudflare 403 this pass", class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-7, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "copypasta-pattern: multiple X accounts posted the same CA 0xdce5…e6da and US Mint $1 coin copy this pass", class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: control.privileged-role, value: "getLaunchedToken.creatorFeeRecipient 0x4fdaab9427aff5d8e2fff9d9f9b5dd3a9dc014d6 (291 bytes code); factory owner is SafeProxy 0x263e…19Dd", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-20], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-25, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0x1D11f0496982706C5e14A514D4E79F2e6BdE4516", class: verified, observed_at: 2026-09-03T03:18:00Z, receipt_ids: [R-10, R-14], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-27, field: deployment.address, value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", class: verified, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-4, R-12, R-21], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-28, field: other, value: "getLaunchedToken exists true; curve 0xFc60F465BC8fe45C36B9503E26890a122Cc59638; TokenLaunched deployer 0x7fd493637a46f4124b6d219eaba946cb5aa6903e; phase uint8 2; launch tx to unverified 0xb2a748F698Ae894FddFAe9504807dAf10f9d7a14, not launchForwarder 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-29, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-6, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: other, value: "Token 0xdCe5…e6da is_verified false on Blockscout this pass", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-1], reproduction_ids: [REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11, CLM-20]
    material_effect: "24h volume is 10007137 on the Gecko djt/$1 pool, 10198421.95 on DexScreener $1/DJT, and 17954964.29 on Gecko token all-pools; a card that collapses them would misstate activity"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-11, CLM-21]
    material_effect: "fdv is 1761828 on DexScreener, 1464166.79 on the Gecko pool, and 1865872.96 on the Gecko token"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko djt/$1 24h volume $10.0M, reserve $109.8k"
    summary: "Gecko pool 0xe7da…6758 volume_usd.h24 10007137 reserve_in_usd 109789 fdv_usd 1464166."
    occurred_at: 2026-09-03T03:28:00Z
    observed_at: 2026-09-03T03:28:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "@MintDetector1 posted Trump $1 Coin as a Robinhood runner"
    summary: "Post: Fresh runner on Robinhood Chain. Trump $1 Coin $$1 breaking out. CA 0xdCe5…e6da."
    occurred_at: 2026-09-02T22:56:22Z
    observed_at: 2026-09-03T03:30:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-3
    type: ct
    title: "@MintDetector1 posted Trump $1 Coin trending on Robinhood"
    summary: "Post: Trending hard on Robinhood Chain. Trump $1 Coin $$1 pumping. CA 0xdCe5…e6da."
    occurred_at: 2026-09-02T18:20:00Z
    observed_at: 2026-09-03T03:30:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: ct
    title: "X accounts posted the CA with US Mint $1 coin copy"
    summary: "@tqshou1 posted CA 0xdce5…e6da, $1.8M, and a 2026-09-02 US Mint $1 coin writeup. Matching copy on other accounts."
    occurred_at: 2026-09-03T03:27:18Z
    observed_at: 2026-09-03T03:35:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-5
    type: onchain
    title: "Pons v2 createGraduatedPool locked the $1/DJT v4 book"
    summary: "Tx 0xc034…472b called createGraduatedPool on 0x7eD5…C7e at 2026-09-02T11:01:17Z; positionId 1499306."
    occurred_at: 2026-09-02T11:01:17Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-6
    type: onchain
    title: "Pons v2 TokenLaunched Trump $1 Coin against DJT"
    summary: "Tx 0x89a6…a1ab at 2026-09-02T11:00:20Z; TokenLaunched pairToken DJT 0x1D11…4516, curve 0xFc60…9638."
    occurred_at: 2026-09-02T11:00:20Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0xdCe5…e6da Trump $1 Coin", url: "https://robinhoodchain.blockscout.com/address/0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-15, CLM-19, CLM-25, CLM-30], excerpt: "api/v2/addresses: hash 0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da name Trump $1 Coin is_contract true is_verified false proxy_type null creator_address_hash null. token symbol $1 decimals 18 total_supply 1000000000000000000000000000 holders_count 9786 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xdCe5…e6da", url: "https://robinhoodchain.blockscout.com/token/0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-12, CLM-25], excerpt: "api/v2/tokens: name Trump $1 Coin symbol $1 decimals 18 total_supply 1000000000000000000000000000 holders_count 9786 type ERC-20 volume_24h null exchange_rate null." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner, factory on 0xdCe5…e6da", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16], excerpt: "eth_blockNumber 0x32a4bb5 (53103541). Token code 3248 B prefix 0x60806040. name Trump $1 Coin symbol $1 decimals 18 totalSupply 1e27. owner() revert. factory() revert." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "locker and PonsV2LaunchFactory views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-13, CLM-14, CLM-15, CLM-24, CLM-27, CLM-28], excerpt: "locker.factory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e owner 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd isLocked true lockedPositions 1499306 lockedTokenSupply 81632653061224493405226180. Factory approvedPairTokens(DJT) true locker() 0x2674…4952 memeHook 0xE5e7…e044 poolManager 0x8366…0951. getLaunchedToken pairToken 0x1D11…4516 curve 0xFc60…9638 deployer 0x7fd4…903e creatorFeeRecipient 0x4fda…14d6 exists true phase 2." }
  - { id: R-5, publisher: Blockscout, title: "TokenLaunched tx 0x89a63a39…a1ab", url: "https://robinhoodchain.blockscout.com/tx/0x89a63a39f7e4848c93aa3ad6b6a77e5350c91656974285eb0a6be4cefe0ba1ab", published_at: 2026-09-02T11:00:20Z, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, CLM-28, EVT-6], excerpt: "timestamp 2026-09-02T11:00:20.000000Z status ok block_number 52522682 from 0x86d16c227dA14845D74d248e7737599d3eAfe29A (is_contract false) to 0xb2a748F698Ae894FddFAe9504807dAf10f9d7a14 method 0xe1b77db5. Factory log TokenLaunched token 0xdCe5…e6da curve 0xFc60…9638 deployer 0x7fd4…903e pairToken 0x1D11…4516." }
  - { id: R-6, publisher: Blockscout, title: "createGraduatedPool tx 0xc034aef0…472b", url: "https://robinhoodchain.blockscout.com/tx/0xc034aef0f9ae7d3a4c93a54e36fccc4a4cfaf15cd2fea9d5a665d7cb1745472b", published_at: 2026-09-02T11:01:17Z, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-29, EVT-5], excerpt: "timestamp 2026-09-02T11:01:17.000000Z status ok block_number 52523251 from 0x68c28468d3B1a6846ac3F53565e09c76F07BdD7e to PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e method createGraduatedPool. decoded token 0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da. PoolGraduated positionId 1499306." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens Trump $1 Coin", url: "https://api.dexscreener.com/latest/dex/tokens/0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-14, CLM-16, CLM-18, CLM-19, CLM-22], excerpt: "30 robinhood uniswap pairs. Top pairAddress 0xe7daa50bae196f9476df483a9cd0051896980c4939d06664eec99d1b69386758 labels v4 base Trump $1 Coin / $1 quote Trump Media & Technology Group • Robinhood Token / DJT 0x1D11f049…4516 liquidity.usd 110454.92 volume.h24 10198421.95 fdv 1761828 pairCreatedAt 1788346877000. info.websites US Mint product URL; info.socials https://x.com/search?q=trump%20coin." }
  - { id: R-8, publisher: GeckoTerminal, title: "djt / $1 Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe7daa50bae196f9476df483a9cd0051896980c4939d06664eec99d1b69386758", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-14, CLM-21, EVT-1], excerpt: "name djt / $1 pool_created_at 2026-09-02T11:01:17Z fdv_usd 1464166.78882412 market_cap_usd 1656034.17639356 volume_usd.h24 10007137.0061065 reserve_in_usd 109789.5302. dex pons-v2-dex. base robinhood_0x1d11f049…4516 quote robinhood_0xdce5c631…e6da." }
  - { id: R-9, publisher: GeckoTerminal, title: "Trump $1 Coin token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xdce5c6317222c5b6e5d963eeac010dfc4da9e6da", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-18, CLM-20, CLM-21, CLM-29], excerpt: "name Trump $1 Coin symbol $1 decimals 18 total_supply 1e27 fdv_usd 1865872.96332229 market_cap_usd null volume_usd.h24 17954964.293969. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T11:01:17Z migrated_destination_pool_address 0xe7daa50bae196f9476df483a9cd0051896980c4939d06664eec99d1b69386758. coingecko_coin_id null." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets DJT row", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-26], excerpt: "HTTP 200. tokenSymbol DJT tokenName Trump Media & Technology Group • Robinhood Token deployments contractAddress 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-12, publisher: Blockscout, title: "V2LaunchLocker verified source", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952?tab=contract", published_at: 2026-08-03T16:18:05Z, accessed_at: 2026-09-03T03:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13, CLM-27], excerpt: "name V2LaunchLocker compiler v0.8.35 is_verified true is_partially_verified true file_path src/v2/V2LaunchLocker.sol. Comment: Permanently holds the graduated Uniswap V4 position NFT for every launchpad v2 launch. This contract exposes no withdrawal or arbitrary-call function." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x7eD5…C7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-15], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol verified_at 2026-08-04T17:40:45Z. ABI includes TokenLaunched, PoolGraduated, getLaunchedToken, approvedPairTokens, createGraduatedPool." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x1D11…4516 DJT Stock Token", url: "https://robinhoodchain.blockscout.com/address/0x1D11f0496982706C5e14A514D4E79F2e6BdE4516", published_at: null, accessed_at: 2026-09-03T03:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-26], excerpt: "hash 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementation Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2 creator 0x4783C67b63dE2B358Ac5951a7D41F47A38F3C046. token name Trump Media & Technology Group Corp. • Robinhood Token symbol DJT holders_count 20525." }
  - { id: R-16, publisher: United States Mint, title: "US Mint product URL listed on DexScreener", url: "https://www.usmint.gov/", published_at: null, accessed_at: 2026-09-03T03:35:20Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-18, CLM-22], excerpt: "GET of the DexScreener-listed product path MASTER_SEMIQDJT.html returned HTTP 403 Cloudflare challenge. HTML title Just a moment…. It is not a token homepage this pass." }
  - { id: R-17, publisher: "@MintDetector1", title: "Fresh runner on Robinhood Chain", url: "https://x.com/MintDetector1/status/2095284728702062630", published_at: 2026-09-02T22:56:22Z, accessed_at: 2026-09-03T03:30:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "Fresh runner on on Robinhood Chain #robinhood Trump $1 Coin $$1 breaking out CA: 0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da" }
  - { id: R-18, publisher: "@MintDetector1", title: "Trending hard on Robinhood Chain", url: "https://x.com/MintDetector1/status/2095215177364885787", published_at: 2026-09-02T18:20:00Z, accessed_at: 2026-09-03T03:30:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Trending hard on Robinhood Chain $HOOD Trump $1 Coin $$1 pumping CA: 0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da" }
  - { id: R-19, publisher: "@tqshou1", title: "$1 CA post with US Mint copy", url: "https://x.com/tqshou1/status/2095352912289714371", published_at: 2026-09-03T03:27:18Z, accessed_at: 2026-09-03T03:35:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23, EVT-4], excerpt: "$1 现价1.8M DYOR CA：0xdce5c6317222c5b6e5d963eeac010dfc4da9e6da 叙事总结：美国铸币局于2026年9月2日上线特朗普主题1美元纪念币" }
  - { id: R-20, publisher: Blockscout, title: "Address 0x263e…19Dd SafeProxy factory/locker owner", url: "https://robinhoodchain.blockscout.com/address/0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-24], excerpt: "hash 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd name SafeProxy is_contract true is_verified true creator_address_hash 0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67. RPC eth_getCode 171 bytes. factory owner() and locker owner() return this address." }
  - { id: R-21, publisher: Blockscout, title: "Token holders 0xdCe5…e6da", url: "https://robinhoodchain.blockscout.com/token/0xdCe5C6317222C5b6e5d963EeAC010DFc4dA9e6da?tab=holders", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-27], excerpt: "api/v2/tokens/.../holders: rank 1 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true value 81632653061224493405226243. rank 2 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 value 63688740308587015356536073." }
  - { id: R-23, publisher: Robinhood Chain RPC, title: "eth_getLogs TokenLaunched and PoolGraduated", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-5, EVT-6], excerpt: "eth_getLogs factory 0x7eD5…C7e TokenLaunched topic1 token 0xdCe5…e6da: tx 0x89a63a39f7e4848c93aa3ad6b6a77e5350c91656974285eb0a6be4cefe0ba1ab block 0x3216eba. PoolGraduated: tx 0xc034aef0f9ae7d3a4c93a54e36fccc4a4cfaf15cd2fea9d5a665d7cb1745472b block 0x32170f3 data positionId 0x16e0aa." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xdCe5…e6da?", checked: "DexScreener info.websites is a US Mint product URL; info.socials is an X search URL; Gecko token has no website; X user search for Trump $1 Coin returned unrelated handles, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P1, question: "Who are the SafeProxy 0x263e…19Dd owners and threshold, and can that Safe call factory admin setters?", checked: "factory owner() and locker owner() return this SafeProxy; locker source has setFactory onlyOwner; getOwners/getThreshold not called this pass", next: "eth_call getOwners and getThreshold on 0x263e…19Dd" }
  - { priority: P1, question: "Will the token source be verified on Blockscout?", checked: "is_verified false; creator_address_hash null; factory() on the token reverts, 2026-09-03", next: "re-read the token contract tab after a verification tx" }
  - { priority: P1, question: "What is unverified 0xb2a748…7a14 that received the launch tx, relative to launchForwarder 0xe33E…2948?", checked: "launch tx to 0xb2a748…7a14 (11453 bytes, is_verified false); factory.launchForwarder() 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948, 2026-09-03", next: "compare bytecode or factory LaunchForwarderSet logs to 0xb2a748…7a14" }
  - { priority: P2, question: "What does the US Mint product page say, beyond the DexScreener URL path?", checked: "GET returned Cloudflare 403 with title Just a moment…, 2026-09-03T03:35:20Z", next: "archive the product page if it becomes readable without the challenge" }
---

# $1 — research packet

## What it is

A Pons v2 memecoin that graduated into a locked Uniswap v4 pool quoted against the Robinhood DJT stock token. Traders buy and sell Trump $1 Coin ($1) on that DJT book and on later USDG books. PonsV2LaunchFactory created it. No official site or handle was located this pass.

Themes: memecoin, stock-paired:DJT

## Why it matters

The $1/DJT Uniswap v4 book printed about $10.0M of 24h volume on Gecko at collection, with the quote token the Robinhood DJT Stock Token at 0x1D11…4516. GET /rhj/assets lists that address. The token is a Pons v2 graduation, not a LONG or PAIR factory launch.

## What could go wrong

USD liquidity figures on the $1/DJT book count both sides, and the quote side is DJT, not USDG. Token source is not verified. No official handle was located, so comms surfaces stay unconfirmed-official. Factory owner() is a SafeProxy whose owners were not read this pass.

## Product and mechanics

PonsV2LaunchFactory 0x7eD5…C7e emitted TokenLaunched for 0xdCe5…e6da at 2026-09-02T11:00:20Z with pairToken DJT. createGraduatedPool 57 seconds later locked Uniswap v4 pool 0xe7da…6758. V2LaunchLocker isLocked true and holds positionId 1499306. factory() on the token reverts; locker.factory() returns the Pons v2 factory. [verified R-4 R-5 R-6 R-12]

Gecko launchpad_details.completed is true at 2026-09-02T11:01:17Z with migrated_destination_pool_address 0xe7da…6758. DexScreener also lists $1/USDG Uniswap v4 books with less liquidity than the DJT book. [verified R-7 R-9]

## Control and security

Token owner() reverts. Factory owner() and locker owner() return SafeProxy 0x263e…19Dd. Verified locker source says the graduated V4 position NFT stays in the locker with no withdrawal function. Token source is_verified false. [verified R-1 R-3 R-12 R-20]

No audit report URL was located this pass. [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites is a US Mint product URL (GET 403 this pass). info.socials is an X search URL, not a handle. Flag unconfirmed-official and third-party-link. [claim R-7 R-16]

Census Pons is the pad that created the token. Census Artificial Inu / LONG / L4VA share the stock-paired neighborhood only. [verified R-5 R-13]

## Economics and activity

djt/$1 Uniswap v4 24h volume is 10007137.0061065 USD and reserve_in_usd is 109789.5302 at 2026-09-03T03:28:00Z from the Gecko pool endpoint. fdv_usd is 1464166.79. Gecko token volume_usd.h24 is 17954964.29 across all pools, not the DJT book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 110454.92, volume.h24 10198421.95, fdv/marketCap 1761828. Blockscout holders_count 9786. Pair created 2026-09-02T11:01:17Z. [claim R-2 R-7]

## Material risks

- Token source is not verified on Blockscout. [verified R-1]
- Factory owner is a SafeProxy; owners and threshold were not read this pass. [verified R-20]
- Pool USD reserve is $1 plus DJT, not a USDG-only backstop. [claim R-7 R-8]
- No official handle or domain this pass; DexScreener website is a third-party-link. [claim R-7 R-16]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/locker/DJT and both launch txs, RPC name/symbol/locker/factory/eth_getLogs, DexScreener, Gecko pool/token, /rhj/assets, US Mint 403, @MintDetector1 and @tqshou1 were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-8 R-10]
- Numbers: 10007137.006 is the Gecko djt/$1 pool 24h volume, not the 17954964.29 token all-pools figure. Reserve 109789.53 is that pool. DexScreener 10198421.95 / 110454.92 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this token is an official US Mint or Trump Media product, or a LONG launch. /rhj/assets lists DJT as a Robinhood Stock Token at a different address from the $1 token; TokenLaunched is on PonsV2LaunchFactory; no official handle or domain was located. [inference R-5 R-10 R-16]

## Operations log

- Base: git rev-parse origin/main → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no dollar-1 / Trump $1 Coin / 0xdCe5…e6da. content/dependencies/stock-tokens.yaml lists DJT at 0x1D11…4516.
- Explorer: Blockscout api/v2 token, factory, locker, DJT, holders, launch tx 0x89a6…a1ab, grad tx 0xc034…472b. RPC eth_getCode/eth_call/eth_getLogs at blocks 53103541–53104740.
- Aggregators: DexScreener latest/dex/tokens; Gecko token and pool 0xe7da…6758.
- Registry: GET api.robinhood.com/rhj/assets DJT row at 0x1D11…4516.
- Social: X keyword search for the CA; user search Trump $1 Coin; @MintDetector1 statuses 2095284728702062630 and 2095215177364885787; @tqshou1 2095352912289714371.
- Failed: Blockscout token creator_address_hash null and token factory() revert (locker.factory and TokenLaunched used instead); US Mint product URL Cloudflare 403; Gecko token endpoint 429 on the first try, succeeded later.
- Time: collection 2026-09-03T03:12Z–2026-09-03T03:40Z.
