---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: gasolinu
name: GASOLINU
packet_tier: seed
as_of: 2026-09-03T04:20:00Z
prior_packet: null
supersedes: null
owned_slugs: [gasolinu]
allowed_paths:
  - research/inbox/packets/gasolinu/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: GASOLINU
  aliases: ["Gasoline Inu"]
  symbols: [GASOLINU]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://gasolinu.fun/
  official_handle: "NULL — DexScreener info null (no websites/socials); from:gasolineinu returned 0 posts; X user search for GASOLINU / gasolineinu / gasoline inu did not return @gasolineinu this pass; gasolinu.fun hrefs x.com/gasolineinu; flag unconfirmed-official"
  repository: "NULL — GitHub search q=gasolinu total_count 0; gasolinu.fun, DexScreener, IPFS tokenURI, and Blockscout list no GitHub URL this pass"
  possible_matches:
    - slug: long
      signals: [shared-address]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "GASOLINU is a graduation token at 0x1e6EA1…1e18 created through that LongLauncher.create into a GASOLINU/USO book"
        - "No shared domain or handle; LONG is the pad, not the token"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot using the same DopplerERC20V1Factory 0x1B37…b69a and Airlock 0xeb7C…0862"
        - "GASOLINU create tx 0xc911…cda7 is LongLauncher.create from EOA 0x3505…3E52, not a Bankr EntryPoint row; GET api.bankr.bot/token-launches latest 50 had 0 GASOLINU hits"
        - "Gecko labels the pool dex bankr-robinhood because the book uses DopplerHookInitializer, not because Bankr minted it"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "GASOLINU is ticker GASOLINU at 0x1e6EA1…1e18 paired to the USO rail 0xa30FA3…D344"
        - "No shared domain, handle, or reproduced address"
    - slug: crudecat
      signals: [other]
      contrary_signals:
        - "Packed CRUDECAT is CircusQuoteTokenV3 0xBD957…cF3e from Circus pad 0xb7fA…cb00, Uniswap v3 1% CRUDECAT/USO 0xc3a873…8BeD"
        - "GASOLINU is a LongLauncher DopplerERC20V1 clone at 0x1e6EA1…1e18, Uniswap v4 GASOLINU/USO pool 0x0e83588f…afa8"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x1e6EA1…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; owner() is Airlock 0xeb7C…0862; LongLauncher.create minted GASOLINU into Uniswap v4 pool 0x0e83588f…afa8 quoted against USO 0xa30FA3…D344, which GET rhj/assets lists as United States Oil Fund • Robinhood Token. Distinct from packed CRUDECAT. [R-1] [R-4] [R-5] [R-8] [R-11] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-23], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://gasolinu.fun/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/gasolineinu", authenticity: unconfirmed }

deployments:
  - label: GASOLINU token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x1e6EA1e89151cDc8443968Bf047cfa3177181e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
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
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
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
  - label: LongLauncher (create() target)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-13]
  - label: Airlock (token owner())
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-14]
  - label: USO Stock Token rail (pair quote / numeraire)
    role: token
    address:
      value: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-11, R-12]

metrics:
  - { kind: volume_24h, value: 528789.72, currency: USD, as_of: 2026-09-03T04:05:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0e83588ff3914c9801584d55d4dabf9d28880728d73ccff7394ded9aae02afa8 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 111188.645, currency: USD, as_of: 2026-09-03T04:05:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0e83588ff3914c9801584d55d4dabf9d28880728d73ccff7394ded9aae02afa8 reserve_in_usd (GASOLINU/USO pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 264292.68, currency: USD, as_of: 2026-09-03T04:05:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0e83588ff3914c9801584d55d4dabf9d28880728d73ccff7394ded9aae02afa8 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 310, currency: null, as_of: 2026-09-03T04:05:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x1e6EA1e89151cDc8443968Bf047cfa3177181e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-6], result: "eth_blockNumber 0x32a956e (53122414). Token 0x1e6EA1…1e18 eth_getCode 44 bytes EIP-1167 impl 0x3be8b97f…c599. name Gasoline Inu, symbol GASOLINU, decimals 18, totalSupply 1e27. owner() Airlock 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. isPoolLocked true. pool() 0xdead…dead. controller() zero. tokenURI ipfs://bafkreibvmicjhij6cjf5h5vv2kj3hcsca7on45w7n6a7wrlilijujqxldu. vestingStart 1788376027. USO name United States Oil Fund • Robinhood Token. Airlock code 5695 B; factory 1912 B; impl 13927 B; LongLauncher 5826 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-12, R-13, R-14, R-15], result: "Blockscout api/v2 token 0x1e6EA1…1e18 name Gasoline Inu symbol GASOLINU holders_count 310 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. Token creator_address_hash null this pass. create tx 0xc911…cda7 2026-09-02T19:07:07Z block 52808783 from EOA 0x3505…3E52 to LongLauncher 0x22e9…eeED method create. LaunchCreated normalizedTicker GASOLINU numeraire USO 0xa30FA3…D344 launcher 0x3505…3E52 poolId 0x0e83588f…afa8. USO BeaconProxy name United States Oil Fund • Robinhood Token." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7, R-8, R-9, R-16], result: "DexScreener pair 0x0e83588f…afa8 robinhood uniswap v4 GASOLINU/USO liquidity.usd 133900.9 volume.h24 539352.57 fdv/marketCap 274616 pairCreatedAt 1788376027000 (2026-09-02T19:07:07Z) info null. latest/dex/tokens: 9 robinhood uniswap pairs; USO v4 book is the liquidity leader. Gecko pool name GASOLINU / USO dex bankr-robinhood volume_usd.h24 528789.72 reserve_in_usd 111188.645 fdv_usd 264292.68 pool_created_at 2026-09-02T19:07:07Z. Gecko token volume_usd.h24 532636.65 (all pools). Search also returns BSC pancakeswap GASOLINU and a separate robinhood GASOLINU/XOM at 0x0D4E…7301." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T04:12:00Z, receipt_ids: [R-10, R-17], result: "tokenURI IPFS lists Website https://gasolinu.fun/. gasolinu.fun HTTP 200 title Gasolinu — the dog runs on crude; publishes CA 0x1e6EA1e89151cDc8443968Bf047cfa3177181e18, USO 0xa30FA3…D344, DexScreener pair 0x0e83588f…afa8, Blockscout token URL, and href https://x.com/gasolineinu. DexScreener info null. from:gasolineinu 0 posts; X user search did not return @gasolineinu." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one USO row tokenSymbol USO tokenName United States Oil Fund • Robinhood Token deployments contractAddress 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 chainId 4663 status ASSET_STATUS_ACTIVE. 0 GASOLINU hits." }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4, R-6, R-15], result: "Create tx logs: OwnershipTransferred to Airlock; mint 1e27 to Airlock; PoolManager Initialize id 0x0e83588f…afa8 currency0 GASOLINU currency1 USO hooks DopplerHookInitializer 0x4e34…a544; Lock beneficiaries 5% 0x21E2…7A66 and 95% launcher 0x3505…3E52; Airlock Create asset GASOLINU numeraire USO. Launcher eth_getCode 0x. Airlock owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create forwards an Airlock/Doppler launch: EIP-1167 DopplerERC20V1 clone, 1e9*1e18 supply, Uniswap v4 pool quoted against factory numeraire USO, LP locked (isPoolLocked true; pool() 0xdead). Tx 0xc911…cda7 from 0x3505…3E52 minted Gasoline Inu / GASOLINU as normalizedTicker GASOLINU.", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-4, R-5, R-6, R-15], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Gasoline Inu", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "GASOLINU", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x1e6EA1e89151cDc8443968Bf047cfa3177181e18", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info null; gasolinu.fun hrefs x.com/gasolineinu; from:gasolineinu 0 posts; X user search did not return @gasolineinu; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-17, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote USO 0xa30FA3…D344 is United States Oil Fund • Robinhood Token in GET rhj/assets (194 assets, one USO row, chainId 4663). Create path is LongLauncher, not Circus or Pons. Gecko dex id bankr-robinhood is the Doppler hook book; Bankr API latest 50 had no GASOLINU. Distinct from packed CRUDECAT 0xBD957…cF3e, OILCOIN 0x9CB19d…1E18, and MICROWAVE 0x79E1B7…888b.", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4, R-11, R-12, R-16], reproduction_ids: [REP-2, REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "GASOLINU/USO Uniswap v4 24h volume 528789.72 USD and reserve_in_usd 111188.645 at 2026-09-03T04:05:00Z (Gecko pool slice, not Gecko token all-pools 532636.65)", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 133900.9 volume.h24 539352.57 fdv/marketCap 274616 at 2026-09-03T04:04:00Z", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 310, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66. Launcher 0x3505…3E52 has no code.", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-5, R-6, R-14], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "LaunchCreated launcher 0x3505513Ac5417BC1Dc498Afa8E71601F6Cf03E52 equals IPFS fee_receiver; DopplerHookInitializer Lock beneficiaries 95% that launcher and 5% 0x21E2…7A66", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4, R-10, R-15], reproduction_ids: [REP-2, REP-6], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is USO rail 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x0e83588f…afa8; hooks DopplerHookInitializer 0x4e34…a544", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-4, R-7, R-8, R-15], reproduction_ids: [REP-3, REP-6], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; create() target is LongLauncher 0x22e9…eeED and tokenFactory DopplerERC20V1Factory 0x1B37…b69a, not Circus, Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-3, R-4, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, gasolinu.fun, tokenURI IPFS, or X search this pass", class: unknown, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: gasolinu.fun hrefs x.com/gasolineinu; DexScreener info null; from:gasolineinu 0 posts this pass. Flag unconfirmed-official on that handle.", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-17, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 264292.68; DexScreener fdv/marketCap 274616. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://gasolinu.fun/ — HTTP 200; tokenURI IPFS Website field; page publishes CA 0x1e6EA1…1e18, USO rail, and DexScreener pair 0x0e83588f…afa8", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-10, R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-24, field: candidate, value: "gasolinu | GASOLINU | NULL | gasolinu.fun — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Ticker collision: Blockscout search lists Gasoline Inu 0x0D4E…7301 (holders_count 2, DexScreener GASOLINU/XOM) and Gasolineinu 0xD8A5…bee9 (holders_count 1). BSC pancakeswap GASOLINU 0xff11…1B07 and 0x9f64…Eb07 are wrong-chain. @Gasolinu is a 2022 account (2 followers, gas-money bio), not this CA. Flag ca-collision and handle-collision.", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-21], reproduction_ids: [REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko GASOLINU/USO 24h volume $529k, reserve $111k"
    summary: "Gecko pool 0x0e83588f…afa8 volume_usd.h24 528790 reserve_in_usd 111189 fdv_usd 264293. DexScreener same pair 539353 / 133901."
    occurred_at: 2026-09-03T04:05:00Z
    observed_at: 2026-09-03T04:05:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "LongLauncher.create minted Gasoline Inu / GASOLINU against USO"
    summary: "Tx 0xc911…cda7 from 0x3505…3E52 at 2026-09-02T19:07:07Z; LaunchCreated ticker GASOLINU poolId 0x0e83588f…afa8."
    occurred_at: 2026-09-02T19:07:07Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-15]
  - id: EVT-3
    type: ct
    title: "@meliboi_sama posted the CA with $129k mcap"
    summary: "2026-09-02T20:11:23Z: $GASOLINU mcap $129K plus CA 0x1e6ea1…1e18. Follow-up posts tracked 169k then a 2x from 129k."
    occurred_at: 2026-09-02T20:11:23Z
    observed_at: 2026-09-03T04:10:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-4
    type: ct
    title: "@treyerl posted the CA as a crude-oil-dog riff"
    summary: "2026-09-02T20:15:15Z: gasolinu riffing on crude oil dogs plus CA 0x1e6ea1…1e18."
    occurred_at: 2026-09-02T20:15:15Z
    observed_at: 2026-09-03T04:10:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-5
    type: ct
    title: "@manni62406322 named Gasolinu @gasolineinu as a LONG USO runner"
    summary: "2026-09-03T01:00:33Z: United States Oil - Gasolinu @gasolineinu among NEW RUNNERS FOR LONG."
    occurred_at: 2026-09-03T01:00:33Z
    observed_at: 2026-09-03T04:10:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-6
    type: ct
    title: "@ViralPairs posted $GASOLINU TRENDING with the CA"
    summary: "2026-09-02T19:10:57Z, about four minutes after create: CA 0x1e6ea1…1e18, mcap $227.08K, liq $95.81K."
    occurred_at: 2026-09-02T19:10:57Z
    observed_at: 2026-09-03T04:10:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x1e6EA1…1e18 Gasoline Inu / GASOLINU", url: "https://robinhoodchain.blockscout.com/address/0x1e6EA1e89151cDc8443968Bf047cfa3177181e18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x1e6EA1e89151cDc8443968Bf047cfa3177181e18 name Gasoline Inu is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol GASOLINU decimals 18 total_supply 1000000000000000000000000000 holders_count 310 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "LongLauncher create tx 0xc911c2ad…cda7", url: "https://robinhoodchain.blockscout.com/tx/0xc911c2ad5eed2ac8519466636687644b66421c813bf92163f1f9c184141dcda7", published_at: 2026-09-02T19:07:07Z, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-14, CLM-16, EVT-2], excerpt: "timestamp 2026-09-02T19:07:07.000000Z status ok result success block_number 52808783 from 0x3505513Ac5417BC1Dc498Afa8E71601F6Cf03E52 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data tokenFactory 0x1B37…b69a numeraire 0xa30FA3…D344 name Gasoline Inu symbol GASOLINU." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on GASOLINU", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a956e (53122414). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name Gasoline Inu symbol GASOLINU decimals 18 totalSupply 1e27. owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. Impl code 13927 B. Factory code 1912 B. LongLauncher code 5826 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "isPoolLocked, pool(), tokenURI, Airlock owner()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-13, CLM-21], excerpt: "isPoolLocked true. pool() 0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead. controller() zero. tokenURI ipfs://bafkreibvmicjhij6cjf5h5vv2kj3hcsca7on45w7n6a7wrlilijujqxldu. vestingStart 1788376027. Airlock 0xeb7C…0862 owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66 code 5695 B. Launcher 0x3505…3E52 code 0x. USO name United States Oil Fund • Robinhood Token." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens GASOLINU", url: "https://api.dexscreener.com/latest/dex/tokens/0x1e6EA1e89151cDc8443968Bf047cfa3177181e18", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-24, CLM-25], excerpt: "9 robinhood uniswap pairs. Top pairAddress 0x0e83588ff3914c9801584d55d4dabf9d28880728d73ccff7394ded9aae02afa8 labels v4 base Gasoline Inu / GASOLINU quote United States Oil Fund • Robinhood Token / USO 0xa30FA36D…D344 liquidity.usd 133900.9 volume.h24 539352.57 fdv 274616 marketCap 274616 pairCreatedAt 1788376027000. info null. Search also returns BSC pancakeswap GASOLINU and robinhood GASOLINU/XOM 0x0D4E…7301." }
  - { id: R-8, publisher: GeckoTerminal, title: "GASOLINU/USO pool (dex bankr-robinhood)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0e83588ff3914c9801584d55d4dabf9d28880728d73ccff7394ded9aae02afa8", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name GASOLINU / USO pool_created_at 2026-09-02T19:07:07Z fdv_usd 264292.6762 market_cap_usd null volume_usd.h24 528789.724859457 reserve_in_usd 111188.645 transactions.h24 buys 3711 sells 4112. dex bankr-robinhood quote robinhood_0xa30fa36db767ad9ed3f7a60fc79526fb4d56d344." }
  - { id: R-9, publisher: GeckoTerminal, title: "Gasoline Inu token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x1e6EA1e89151cDc8443968Bf047cfa3177181e18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name Gasoline Inu symbol GASOLINU decimals 18 total_supply 1e27 price_usd 0.0002642926762 fdv_usd 264292.676212261 market_cap_usd null volume_usd.h24 532636.65169963 total_reserve_in_usd 57573.80. coingecko_coin_id null. Top pool 0x0e83588f…afa8." }
  - { id: R-10, publisher: IPFS, title: "tokenURI metadata bafkreibvmicjhij6cjf5h5vv2kj3hcsca7on45w7n6a7wrlilijujqxldu", url: "https://gateway.pinata.cloud/ipfs/bafkreibvmicjhij6cjf5h5vv2kj3hcsca7on45w7n6a7wrlilijujqxldu", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-23, EVT-2], excerpt: "name Gasoline Inu description The dog runs on crude. social_links Website https://gasolinu.fun/ fee_receiver 0x3505513Ac5417BC1Dc498Afa8E71601F6Cf03E52 vesting_recipients amount 0." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets USO Stock Token", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. USO row: tokenSymbol USO tokenName United States Oil Fund • Robinhood Token deployments contractAddress 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE. 0 GASOLINU hits." }
  - { id: R-12, publisher: Blockscout, title: "Token 0xa30FA3…D344 United States Oil Fund • Robinhood Token / USO", url: "https://robinhoodchain.blockscout.com/address/0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name United States Oil Fund • Robinhood Token symbol USO decimals 18 total_supply 8664466000000000000000 holders_count 5340." }
  - { id: R-13, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305 file_path src/LongLauncher.sol is_fully_verified true. RPC eth_getCode 5826 B." }
  - { id: R-14, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true file_path src/Airlock.sol compiler v0.8.26 is_partially_verified true." }
  - { id: R-15, publisher: Blockscout, title: "LaunchCreated / Initialize / Lock logs on create tx", url: "https://robinhoodchain.blockscout.com/tx/0xc911c2ad5eed2ac8519466636687644b66421c813bf92163f1f9c184141dcda7", published_at: 2026-09-02T19:07:07Z, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-15, EVT-2], excerpt: "LaunchCreated asset 0x1e6EA1…1e18 numeraire 0xa30FA3…D344 launcher 0x3505…3E52 normalizedTicker GASOLINU deployedAt 1788376027. PoolManager Initialize id 0x0e83588ff3914c9801584d55d4dabf9d28880728d73ccff7394ded9aae02afa8 hooks 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544. Lock beneficiaries 5% 0x21E2…7A66 95% 0x3505…3E52." }
  - { id: R-16, publisher: DexScreener, title: "Search OILCOIN MICROWAVE CRUDECAT vs GASOLINU", url: "https://api.dexscreener.com/latest/dex/search?q=OILCOIN", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "OILCOIN 0x9CB19d6e3F87543826E50F61FF4C5A6cdf3B1E18 / USO liq 42823.7 vol 855733.74. MICROWAVE 0x79E1B7E59054fd4E18Ad7C71E5781162BF28888b / USO liq 37890.38 vol 1310365.09. Packed CRUDECAT is 0xBD957…cF3e / USO v3, not 0x1e6EA1…1e18. None share the GASOLINU CA." }
  - { id: R-17, publisher: gasolinu.fun, title: "Gasolinu — the dog runs on crude", url: "https://gasolinu.fun/", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23], excerpt: "HTTP 200. og:title Gasolinu — the dog runs on crude. og:description $GASOLINU, the USO-paired dog on Robinhood. Page id=ca-gaso 0x1e6EA1e89151cDc8443968Bf047cfa3177181e18; id=ca-uso 0xa30FA36Db767ad9eD3f7a60fC79526fB4d56D344; DexScreener pair 0x0e83588f…afa8; href https://x.com/gasolineinu. No GitHub or Telegram href this pass." }
  - { id: R-18, publisher: "@manni62406322", title: "NEW RUNNERS FOR LONG Gasolinu @gasolineinu", url: "https://x.com/manni62406322/status/2095315982273122324", published_at: 2026-09-03T01:00:33Z, accessed_at: 2026-09-03T04:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-5], excerpt: "NEW RUNNERS FOR LONG ;) United States Oil - Gasolinu @gasolineinu Bloom Energy - May/BE @maybe_robinhood IBM - TUX @deploytux. from:gasolineinu returned 0 posts this pass." }
  - { id: R-19, publisher: "@meliboi_sama", title: "$GASOLINU mcap $129K plus CA", url: "https://x.com/meliboi_sama/status/2095243208645349588", published_at: 2026-09-02T20:11:23Z, accessed_at: 2026-09-03T04:10:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "$GASOLINU mcap: $129K everyone already knows shiba inu as the doge-inspired japanese dog that took over crypto. gasoline inu just slaps that same shiba on an orange background and calls it the version that runs on crude oil as a joke about what really fuels the market. dyor 0x1e6ea1e89151cdc8443968bf047cfa3177181e18" }
  - { id: R-20, publisher: "@treyerl", title: "gasolinu riffing on crude oil dogs", url: "https://x.com/treyerl/status/2095244182017479062", published_at: 2026-09-02T20:15:15Z, accessed_at: 2026-09-03T04:10:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "gasolinu riffing on crude oil dogs, saw familiar names gathering in the chat. nfa 0x1e6ea1e89151cdc8443968bf047cfa3177181e18" }
  - { id: R-21, publisher: Blockscout, title: "GASOLINU name collisions 0x0D4E…7301 and 0xD8A5…bee9", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=GASOLINU", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "3 token hits. Gasoline Inu / GASOLINU 0x1e6EA1…1e18. Gasoline Inu / GASOLINU 0x0D4E7c524d273e40C970a5De0743E6398aA87301 holders_count 2 is_verified false. Gasolineinu / GASOLINU 0xD8A59912CeeBc6e713EaDEa1595B0273C8Bfbee9 holders_count 1 is_verified false." }
  - { id: R-22, publisher: "@ViralPairs", title: "$GASOLINU TRENDING", url: "https://x.com/ViralPairs/status/2095228001373819151", published_at: 2026-09-02T19:10:57Z, accessed_at: 2026-09-03T04:10:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "$GASOLINU TRENDING CA: 0x1e6ea1e89151cdc8443968bf047cfa3177181e18 Market Cap: $227.08K Liquidity: $95.81K 1H Volume: $209.66K 297 holders." }
  - { id: R-23, publisher: GeckoTerminal, title: "GASOLINU/USO pool HTML meta", url: "https://www.geckoterminal.com/robinhood/pools/0x0e83588ff3914c9801584d55d4dabf9d28880728d73ccff7394ded9aae02afa8", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, EVT-1], excerpt: "og:title GASOLINU/USO - Gasoline Inu Price on Bankr (Robinhood). og:description: price today is $0.0002643 with a 24-hour trading volume of $528.79K. Contract 0x1e6ea1e89151cdc8443968bf047cfa3177181e18 with $111.21K in liquidity." }
  - { id: R-24, publisher: Blockscout, title: "DopplerHookInitializer 0x4e34…a544", url: "https://robinhoodchain.blockscout.com/address/0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 name DopplerHookInitializer is_contract true is_verified true file_path src/initializers/DopplerHookInitializer.sol compiler v0.8.26 is_partially_verified true." }
  - { id: R-25, publisher: Bankr, title: "GET /token-launches latest 50", url: "https://api.bankr.bot/token-launches?limit=50", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: api, authority: primary, authenticity: confirmed, supports: [CLM-9], excerpt: "HTTP 200. launches length 50. JSON scan for gasolinu / gasoline / 0x1e6ea1 returned 0 hits this pass." }

gaps:
  - { priority: P0, question: "Does @gasolineinu exist and bidirectionally link to token 0x1e6EA1…1e18 or gasolinu.fun?", checked: "gasolinu.fun hrefs x.com/gasolineinu; DexScreener info null; from:gasolineinu 0 posts; X user search for GASOLINU / gasolineinu / gasoline inu did not return that handle, 2026-09-03", next: "re-read the X profile if it becomes indexed; re-read DexScreener token profile after a Claim Profile" }
  - { priority: P1, question: "Does the launcher EOA 0x3505…3E52 map to a public handle?", checked: "create from and IPFS fee_receiver are that EOA with eth_getCode 0x; site and @manni62406322 name @gasolineinu, not the EOA, 2026-09-03", next: "trace the EOA on Blockscout and any post that embeds 0x3505…3E52" }
  - { priority: P1, question: "Should Gecko dex bankr-robinhood be treated as Bankr-minted or as Doppler-hook taxonomy?", checked: "create tx is LongLauncher; Bankr token-launches latest 50 had 0 GASOLINU; pool relationship.dex bankr-robinhood; hooks DopplerHookInitializer, 2026-09-03", next: "compare hook 0x4e34…a544 against a known Bankr launch and a known LONG launch" }
  - { priority: P2, question: "Which of the Blockscout GASOLINU-named tokens besides 0x1e6EA1…1e18 share the GASOLINU/USO book?", checked: "0x0D4E…7301 is a separate GASOLINU/XOM book with 2 holders; 0xD8A5…bee9 has 1 holder; DexScreener BSC pairs are wrong-chain, 2026-09-03", next: "keep ca-collision on any new same-ticker 4663 deploy" }
---

# GASOLINU — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against USO. LongLauncher.create from 0x3505…3E52 minted Gasoline Inu (GASOLINU) on 2026-09-02T19:07:07Z into pool 0x0e83588f…afa8 via DopplerERC20V1Factory and Airlock. Traders buy and sell GASOLINU against the USO Stock Token rail. Site gasolinu.fun publishes the same CA. No bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:USO, rwa, inu, graduation

## Why it matters

The GASOLINU/USO Uniswap v4 book printed about $529k of 24h volume on Gecko at collection, with the quote token the USO rail in GET /rhj/assets. Gecko labels the pool Bankr (Robinhood) because the hook is DopplerHookInitializer; the create transaction is LongLauncher, not a Bankr API row. Distinct from packed CRUDECAT, which is a Circus USO graduation at a different CA.

## What could go wrong

USD liquidity figures on the GASOLINU/USO book count both sides, and the quote side is USO, not USDG. DexScreener ($134k liq / $539k vol) disagrees with Gecko ($111k / $529k). Same-ticker Gasoline Inu tokens exist on 4663 and BSC. gasolinu.fun hrefs @gasolineinu, but that handle was not reproduced this pass, so comms stay unconfirmed-official.

## Product and mechanics

LongLauncher 0x22e9…eeED create() from 0x3505…3E52 at 2026-09-02T19:07:07Z minted Gasoline Inu / GASOLINU supply 1e9*1e18 into Uniswap v4 poolId 0x0e83588f…afa8 quoted against USO. Token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock. isPoolLocked true and pool() is 0xdead. [verified R-4 R-5 R-6 R-15]

Secondary GASOLINU/USDG and GASOLINU/ETH Uniswap v4 books on DexScreener have far less liquidity than the USO book. Gecko dex id is bankr-robinhood; DexScreener labels the same pair uniswap v4. [verified R-7 R-8]

## Control and security

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. Launcher 0x3505…3E52 has no code and receives 95% of the DopplerHookInitializer Lock split; 5% goes to 0x21E2…7A66. [verified R-6 R-15]

DopplerERC20V1, DopplerERC20V1Factory, Airlock, and DopplerHookInitializer are partially verified on Blockscout (compiler v0.8.26). LongLauncher is fully verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified R-2 R-3 R-13 R-14 R-24] [unknown]

## Team and provenance

gasolinu.fun HTTP 200 publishes CA 0x1e6EA1…1e18, the USO rail, and the DexScreener pair. tokenURI IPFS lists that site as Website and names fee_receiver 0x3505…3E52. DexScreener info is empty. The site hrefs x.com/gasolineinu; from:gasolineinu returned 0 posts and X user search did not return that handle. Flag unconfirmed-official. [verified R-10 R-17] [claim R-7 R-18]

USO is the Robinhood Stock Token rail, not a Gasolinu product. LongLauncher / Bankr Doppler infra is the pad, not the token team. [verified R-11 R-13]

## Economics and activity

GASOLINU/USO Uniswap v4 24h volume is 528789.72 USD and reserve_in_usd is 111188.645 at 2026-09-03T04:05:00Z from the Gecko pool endpoint. fdv_usd is 264292.68. Gecko token volume_usd.h24 is 532636.65 across all pools, not the USO book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 133900.9, volume.h24 539352.57, fdv/marketCap 274616. Blockscout holders_count 310. Pair created 2026-09-02T19:07:07Z. Assignment lead of liq ~$127,908 / vol ~$536,058 is near the live DexScreener slice; Gecko reserve is $111k. [claim R-1 R-7]

## Material risks

- Quote token USO 0xa30FA3…D344 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is GASOLINU plus USO, not a USDG backstop. [verified R-11 R-12]
- Gecko dex label bankr-robinhood can be read as a Bankr mint; the create tx is LongLauncher. [verified R-4 R-8 R-25]
- No bidirectional official handle this pass; @gasolineinu is unconfirmed-official. [claim R-7 R-17 R-18]
- Same-ticker clones including 0x0D4E…7301 (XOM book) and BSC GASOLINU. Flag ca-collision. [claim R-21]
- DexScreener liquidity 133900.9 disagrees with Gecko reserve 111188.645. [claim R-7 R-8]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/USO/hook and create tx 0xc911…cda7, RPC name/symbol/owner/isPoolLocked/tokenURI, DexScreener, Gecko pool/token/HTML, /rhj/assets, IPFS tokenURI, gasolinu.fun, Bankr launches, and X posts with the CA were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-11 R-17]
- Numbers: 528789.72 is the Gecko GASOLINU/USO pool 24h volume, not the 532636.65 token all-pools figure. Reserve 111188.645 is that pool. DexScreener 539352.57 / 133900.9 is the same pair, different aggregator. Holders 310 is Blockscout. [claim R-1 R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that GASOLINU is packed CRUDECAT, a Bankr-official mint, or the USO issuer. CRUDECAT is Circus 0xBD957…cF3e; create is LongLauncher; Bankr API latest 50 has no row; USO 0xa30FA3…D344 is the /rhj/assets rail. [inference R-4 R-11 R-16 R-25]

## Operations log

- Base: assignment `base_sha` 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no gasolinu / GASOLINU / Gasoline Inu / 0x1e6EA1…1e18. content/dependencies/stock-tokens.yaml has USO at 0xa30FA3…D344 as a rail.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, Airlock, USO, hook, create tx 0xc911…cda7, LaunchCreated/Initialize/Lock logs, holders, GASOLINU name search. RPC eth_getCode/eth_call with Mozilla/Chrome UA at blocks 53122414–53124622.
- Aggregators: DexScreener latest/dex/tokens, latest/dex/pairs, search GASOLINU/OILCOIN/MICROWAVE. Gecko pool and token JSON 200; Gecko token /info 429 once, not retried; Gecko HTML pool meta used.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 USO row matching the pair quote; 0 GASOLINU.
- Social: X keyword GASOLINU / Gasoline Inu / CA; from:gasolineinu; user search GASOLINU / gasolineinu / gasoline inu; @meliboi_sama @treyerl @manni62406322 @ViralPairs.
- Site: gasolinu.fun HTTP 200; IPFS tokenURI Website field; GitHub search q=gasolinu total_count 0.
- Failed: Blockscout token creator_address_hash null (create tx used instead); Gecko token /info 429; from:gasolineinu 0 posts; X user search did not return @gasolineinu; Bankr token-launches latest 50 had 0 GASOLINU; DexScreener info null.
- Time: collection 2026-09-03T04:04Z–2026-09-03T04:20Z.
