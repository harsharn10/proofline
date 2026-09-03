---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: goybeam
name: GOYBEAM
packet_tier: seed
as_of: 2026-09-03T03:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [goybeam]
allowed_paths:
  - research/inbox/packets/goybeam/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: GOYBEAM
  aliases: []
  symbols: [GOYBEAM]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener website is app.long.xyz/tokens/<ca> (LONG app, Cloudflare 403 this pass); Gecko token info websites []; goybeam.lol publishes a different CA 0x3f74…161a"
  official_handle: "NULL — DexScreener info.socials lists x.com/longpltrgoybeam; Gecko twitter_handle null; @longPLTRgoybeam posted CA 0x1Fe2…1E18 but no bidirectional site this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "GOYBEAM is a token cloned by DopplerERC20V1Factory 0x1B37…b69a through LongLauncher.create, entity_kind token, not protocol"
        - "No GOYBEAM official domain; app.long.xyz is the pad, not a GOYBEAM site"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "GOYBEAM is GOYBEAM at 0x1Fe2…1E18 paired to PLTR 0x894E…4F2A via the same LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "GOYBEAM is a DopplerERC20V1 clone in a Uniswap v4 GOYBEAM/PLTR pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x1Fe2…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; creation tx LongLauncher.create minted GOYBEAM into Uniswap v4 pool 0x069c…b2bb quoted against PLTR 0x894E…4F2A. GET api.robinhood.com/rhj/assets (194 assets) has PLTR at that address. Distinct from PALANTARD/PLTITS/BOMBA/MONITOR PLTR books and from goybeam.lol CA 0x3f74…161a. No official site this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/longPLTRgoybeam", authenticity: unconfirmed }
  - { kind: app, url: "https://app.long.xyz/tokens/0x1fe2abf68aad1d5b7a0339fbbfdbad8e2b1d1e18", authenticity: unconfirmed }

deployments:
  - label: GOYBEAM token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:30:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-18]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-18]
  - label: Airlock (token owner)
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-18]
  - label: PLTR Palantir Technologies • Robinhood Token (pair quote / numeraire)
    role: token
    address:
      value: "0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 932241.47, currency: USD, as_of: 2026-09-03T03:35:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 380660.46, currency: USD, as_of: 2026-09-03T03:35:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb reserve_in_usd (GOYBEAM/PLTR pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 1050614.56, currency: USD, as_of: 2026-09-03T03:35:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 989185.51, currency: USD, as_of: 2026-09-03T03:35:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18 pair 0x069cdb4f…b2bb volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 312941.39, currency: USD, as_of: 2026-09-03T03:35:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18 pair 0x069cdb4f…b2bb liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 1068, currency: null, as_of: 2026-09-03T03:30:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32a5763 (53106531). Token 0x1Fe2…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name GOYBEAM, symbol GOYBEAM, decimals 18, totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl code 13927 B. Factory 0x1B37…b69a code 1912 B. LongLauncher 0x22e9…eeED code 5826 B. Airlock code 5695 B. Create-from 0xDE78…2aAb code 23 B EIP-7702 prefix ef0100." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-16, R-18], result: "Blockscout api/v2 token 0x1Fe2…1E18 name/symbol GOYBEAM holders_count 1068 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. creator_address_hash DopplerERC20V1Factory 0x1B37…b69a. creation_transaction_hash 0x8e316484…ac32 2026-07-20T23:57:21Z block 15113685 to LongLauncher method create from 0xDE78…2aAb (proxy_type eip7702 CaliburEntry). LaunchCreated normalizedTicker GOYBEAM numeraire 0x894E…4F2A poolId 0x069c…b2bb. PLTR 0x894E…4F2A name Palantir Technologies • Robinhood Token holders_count 34855." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:35:00Z, receipt_ids: [R-7, R-8, R-9, R-20], result: "DexScreener latest/dex/tokens/0x1Fe2…1E18: 5 robinhood uniswap pairs; top GOYBEAM/PLTR v4 0x069c…b2bb quote 0x894E…4F2A Palantir Technologies • Robinhood Token / PLTR liquidity.usd 312941.39 volume.h24 989185.51 fdv/marketCap 1058660 pairCreatedAt 1784591841000 (2026-07-20T23:57:21Z) info.websites app.long.xyz/tokens/<ca> info.socials x.com/longpltrgoybeam. Gecko pool: volume_usd.h24 932241.47 reserve_in_usd 380660.46 fdv_usd 1050614.56 pool_created_at 2026-07-20T23:57:21Z dex bankr-robinhood. Gecko token volume_usd.h24 946116.34 (all pools). Gecko token info websites [] twitter_handle null." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:35:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol PLTR hit 1: tokenName Palantir Technologies • Robinhood Token deployments contractAddress 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-6, R-18], result: "Create tx logs: OwnershipTransferred newOwner Airlock; mint 1e27 to Airlock; PoolManager Initialize id 0x069c…b2bb currency0 GOYBEAM currency1 PLTR fee 8388608 hooks DopplerHookInitializer 0x4e34…a544; Airlock Create asset GOYBEAM numeraire PLTR; LongLauncher LaunchCreated launcher 0xDE78…2aAb normalizedTicker GOYBEAM." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against numeraire PLTR. Tx 0x8e31…ac32 from 0xDE78…2aAb at 2026-07-20T23:57:21Z minted GOYBEAM; owner() is Airlock 0xeb7C…0862; creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a.", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "GOYBEAM", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "GOYBEAM", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials lists x.com/longpltrgoybeam; Gecko twitter_handle null; @longPLTRgoybeam posted the CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-9, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote PLTR 0x894E…4F2A is Palantir Technologies • Robinhood Token in GET rhj/assets (194 assets). Distinct from PALANTARD 0x0a23…1e18, PLTITS 0x5c9F…1E18, BOMBA 0x525F…1E18, and MONITOR 0x1a91…1e18, each a different token with its own GOYBEAM-unrelated PLTR Uniswap v4 book.", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7, R-12, R-16, R-22], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "GOYBEAM/PLTR Uniswap v4 24h volume 932241.47 USD and reserve_in_usd 380660.46 at 2026-09-03T03:35:00Z (Gecko pool slice, not Gecko token all-pools 946116.34)", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 312941.39 volume.h24 989185.51 fdv/marketCap 1058660 at 2026-09-03T03:35:00Z", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1068, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; OwnershipTransferred to Airlock on create. Create-from 0xDE78…2aAb is EIP-7702 CaliburEntry.", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-5, R-6, R-18], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "LaunchCreated launcher 0xDE78a646C581f4B253aB49859590fcD427dB2aAb; DopplerHookInitializer Lock beneficiaries 0xDE78…2aAb 0.95 and 0xEDeA…eDa8 0.05", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is PLTR 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x069c…b2bb; DexScreener dexId uniswap labels [v4]; Gecko pool dex id bankr-robinhood", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-6, R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; creation tx to LongLauncher 0x22e9…eeED method create, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener socials x.com/longpltrgoybeam; @longPLTRgoybeam posted CA 0x1Fe2…1E18 and the DexScreener pool; Gecko twitter_handle null; app.long.xyz token page Cloudflare 403 this pass", class: claim, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-9, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 1050614.56; DexScreener fdv/marketCap 1058660. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener website is the LONG app token page; Gecko websites []; goybeam.lol is a different token 0x3f74…161a; flag ticker-only / third-party-link for that site", class: claim, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-9, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "goybeam | GOYBEAM | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Ticker collision: a second robinhood Uniswap v3 GOYBEAM 0x3f74555B87cFCbfC60B3FDbe020b1FC51a84161a pairs to WETH with DexScreener websites goybeam.lol and socials @GOYBEAMJSL / t.me/goybeamJSL. That CA is not 0x1Fe2…1E18. Flag ticker-only.", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-21, R-22], reproduction_ids: [REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko GOYBEAM/PLTR 24h volume $932k, reserve $381k"
    summary: "Gecko pool 0x069c…b2bb volume_usd.h24 932241 reserve_in_usd 380660 fdv_usd 1050615."
    occurred_at: 2026-09-03T03:35:00Z
    observed_at: 2026-09-03T03:35:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "@MaxLongCEO posted GOYBEAM as the #1 PLTR pair"
    summary: "Post: Today $GOYBEAM Established itself as The #1 $PLTR Pair. Millions of Volume last 24H."
    occurred_at: 2026-09-03T02:22:18Z
    observed_at: 2026-09-03T03:38:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-3
    type: ct
    title: "@longPLTRgoybeam posted get online on Robinhood Chain"
    summary: "Account listed on DexScreener socials posted get online we are going to go dominate robinhood chain."
    occurred_at: 2026-09-02T19:52:19Z
    observed_at: 2026-09-03T03:38:00Z
    affected_fields: [communications.status, identity.handle]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-4
    type: ct
    title: "@longPLTRgoybeam posted the GOYBEAM CA and DexScreener pool"
    summary: "Post listed CA 0x1Fe2…1E18, DexScreener pool 0x069c…b2bb, and app.long.xyz token page."
    occurred_at: 2026-08-27T09:58:19Z
    observed_at: 2026-09-03T03:38:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-5
    type: onchain
    title: "LongLauncher.create minted GOYBEAM against PLTR"
    summary: "Tx 0x8e31…ac32 from 0xDE78…2aAb at 2026-07-20T23:57:21Z; poolId 0x069c…b2bb."
    occurred_at: 2026-07-20T23:57:21Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x1Fe2…1E18 GOYBEAM", url: "https://robinhoodchain.blockscout.com/address/0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18 name GOYBEAM is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol GOYBEAM decimals 18 total_supply 1000000000000000000000000000 holders_count 1068 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x8e3164840c457c1dd80933c37d2de9d02b7fca0fc295064234f344b0cb3eac32." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-16, CLM-22], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x8e316484…ac32", url: "https://robinhoodchain.blockscout.com/tx/0x8e3164840c457c1dd80933c37d2de9d02b7fca0fc295064234f344b0cb3eac32", published_at: 2026-07-20T23:57:21Z, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-5], excerpt: "timestamp 2026-07-20T23:57:21.000000Z status ok result success block_number 15113685 from 0xDE78a646C581f4B253aB49859590fcD427dB2aAb (is_contract true proxy_type eip7702) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data includes numeraire 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A and GOYBEAM name/symbol bytes." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on GOYBEAM", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a5763 (53106531). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name GOYBEAM symbol GOYBEAM decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Factory code 1912 B. Impl code 13927 B. LongLauncher code 5826 B." }
  - { id: R-6, publisher: Blockscout, title: "create tx logs Initialize / LaunchCreated", url: "https://robinhoodchain.blockscout.com/tx/0x8e3164840c457c1dd80933c37d2de9d02b7fca0fc295064234f344b0cb3eac32", published_at: 2026-07-20T23:57:21Z, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-15, CLM-21], excerpt: "PoolManager Initialize id 0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb currency0 GOYBEAM currency1 PLTR 0x894E…4F2A fee 8388608 hooks 0x4e346895…a544. Airlock Create numeraire PLTR. LongLauncher LaunchCreated normalizedTicker GOYBEAM launcher 0xDE78…2aAb." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens GOYBEAM", url: "https://api.dexscreener.com/latest/dex/tokens/0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "5 robinhood uniswap pairs. Top pairAddress 0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb labels v4 base GOYBEAM quote Palantir Technologies • Robinhood Token / PLTR 0x894E1EC2…4F2A liquidity.usd 312941.39 volume.h24 989185.51 fdv 1058660 marketCap 1058660 pairCreatedAt 1784591841000. info.websites app.long.xyz/tokens/0x1fe2…1e18 info.socials x.com/longpltrgoybeam." }
  - { id: R-8, publisher: GeckoTerminal, title: "GOYBEAM/PLTR Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name GOYBEAM / PLTR pool_created_at 2026-07-20T23:57:21Z fdv_usd 1050614.565 market_cap_usd null volume_usd.h24 932241.470602404 reserve_in_usd 380660.4566 transactions.h24 buys 1219 sells 1855. dex bankr-robinhood quote robinhood_0x894e1ec2d74ffe5aef8dc8a9e84686accb964f2a." }
  - { id: R-9, publisher: GeckoTerminal, title: "GOYBEAM token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-19, CLM-23], excerpt: "name GOYBEAM symbol GOYBEAM decimals 18 total_supply 1e27 price_usd 0.001050614565 fdv_usd 1050614.56450772 market_cap_usd null volume_usd.h24 946116.339821026. coingecko_coin_id null. Token info websites [] twitter_handle null telegram_handle null. Top pool 0x069c…b2bb." }
  - { id: R-10, publisher: "@MaxLongCEO", title: "GOYBEAM as The #1 PLTR Pair", url: "https://x.com/MaxLongCEO/status/2095336555053293910", published_at: 2026-09-03T02:22:18Z, accessed_at: 2026-09-03T03:38:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "Today $GOYBEAM Established itself as The #1 $PLTR Pair.. There is No Second Best.. were investing in the Most Advanced Military intelligence Weaponry.. Millions of Volume last 24H meaning its Daily Vol is Larger than its Current MC.." }
  - { id: R-11, publisher: GeckoTerminal, title: "GOYBEAM/PLTR pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "GeckoTerminal robinhood pool page for 0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb GOYBEAM / PLTR." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol PLTR tokenName Palantir Technologies • Robinhood Token deployments contractAddress 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-13, publisher: "@longPLTRgoybeam", title: "get online we are going to go dominate robinhood chain", url: "https://x.com/longPLTRgoybeam/status/2095238411120447772", published_at: 2026-09-02T19:52:19Z, accessed_at: 2026-09-03T03:38:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-3], excerpt: "get online we are going to go dominate robinhood chain. Account display name PLTR GOYBEAM handle @longPLTRgoybeam bio IT’S THE GOYBEAM BACKED BY $PLTR LONG THE GOYBEAM ON @LONGDOTXYZ." }
  - { id: R-14, publisher: DexScreener, title: "GOYBEAM/PLTR pair page", url: "https://dexscreener.com/robinhood/0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "DexScreener robinhood pair 0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb GOYBEAM / PLTR Uniswap v4." }
  - { id: R-15, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Compiler v0.8.26 file_path src/LongLauncher.sol is_partially_verified false verified_at 2026-07-14T11:23:57Z." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x894E…4F2A Palantir Technologies • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A name BeaconProxy is_contract true is_verified true. token name Palantir Technologies • Robinhood Token symbol PLTR decimals 18 holders_count 34855 total_supply 8792987000000000000000." }
  - { id: R-17, publisher: Blockscout, title: "Create-from 0xDE78…2aAb EIP-7702", url: "https://robinhoodchain.blockscout.com/address/0xDE78a646C581f4B253aB49859590fcD427dB2aAb", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "hash 0xDE78a646C581f4B253aB49859590fcD427dB2aAb is_contract true is_verified true proxy_type eip7702 implementations CaliburEntry 0x612373D7003d694220f7800EeaF8E3924c0951D3." }
  - { id: R-18, publisher: Blockscout, title: "LaunchCreated log for GOYBEAM", url: "https://robinhoodchain.blockscout.com/tx/0x8e3164840c457c1dd80933c37d2de9d02b7fca0fc295064234f344b0cb3eac32", published_at: 2026-07-20T23:57:21Z, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-5], excerpt: "LaunchCreated poolOrHook 0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18 asset 0x1Fe2…1E18 numeraire 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A launcher 0xDE78a646C581f4B253aB49859590fcD427dB2aAb deployedAt 1784591841 normalizedTicker GOYBEAM. Block 15113685." }
  - { id: R-19, publisher: "@longPLTRgoybeam", title: "CA and DexScreener pool post", url: "https://x.com/longPLTRgoybeam/status/2092914597648847278", published_at: 2026-08-27T09:58:19Z, accessed_at: 2026-09-03T03:38:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-4], excerpt: "CA: 0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18 DEX: https://dexscreener.com/robinhood/0x069cdb4fbe913170e700159de4d5926d1de145d1c4d0e3acda27e5e94612b2bb L()NG dot xyz: https://app.long.xyz/tokens/0x1fe2abf68aad1d5b7a0339fbbfdbad8e2b1d1e18" }
  - { id: R-20, publisher: GeckoTerminal, title: "GOYBEAM token pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x1fe2abf68aad1d5b7a0339fbbfdbad8e2b1d1e18/pools", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "Row 1 GOYBEAM / PLTR reserve_in_usd 380660.4566 volume_usd.h24 932241.47 dex bankr-robinhood. Row 2 GOYBEAM / USDG 5% reserve 13693.71 volume 13199.22 dex uniswap-v4-robinhood." }
  - { id: R-21, publisher: goybeam.lol, title: "GOYBEAM site for a different CA", url: "https://goybeam.lol/", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: official-site, authority: unknown, authenticity: unconfirmed, supports: [CLM-23, CLM-25], excerpt: "HTTP 200 title GOYBEAM og:description Get Hit With The Goybeam. Page HTML contains 0x3f74555b87cfcbfc60b3fdbe020b1fc51a84161a and does not contain 0x1Fe2Abf68aad1d5b7A0339fBbFdbAd8E2b1d1E18 this pass." }
  - { id: R-22, publisher: DexScreener, title: "search GOYBEAM and GOYBEAM/PLTR", url: "https://api.dexscreener.com/latest/dex/search?q=GOYBEAM%20PLTR", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "Robinhood Uniswap v4 PLTR books include GOYBEAM 0x1Fe2…1E18 pair 0x069c…b2bb; PALANTARD 0x0a23…1e18; PLTITS 0x5c9F…1E18; MONITOR 0x1a91…1e18; BOMBA 0x525F…1E18. Separate v3 GOYBEAM 0x3f74…161a / WETH websites goybeam.lol socials x.com/GOYBEAMJSL." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x1Fe2…1E18?", checked: "DexScreener info.socials x.com/longpltrgoybeam and website app.long.xyz/tokens/<ca>; Gecko twitter_handle null websites []; @longPLTRgoybeam posted the CA 2026-08-27; app.long.xyz Cloudflare 403, 2026-09-03", next: "re-read the LONG app token page without Cloudflare; search @longdotxyz for a GOYBEAM post that names the CA" }
  - { priority: P0, question: "Does @longPLTRgoybeam remain the only handle that publishes CA 0x1Fe2…1E18, versus @GOYBEAMJSL / goybeam.lol for 0x3f74…161a?", checked: "goybeam.lol HTML has 0x3f74…161a and not 0x1Fe2…1E18; DexScreener search returns both tokens, 2026-09-03", next: "keep ticker-only on the v3 WETH book; do not merge" }
  - { priority: P1, question: "Why does Gecko label the GOYBEAM/PLTR pool dex as bankr-robinhood while DexScreener and PoolManager Initialize say Uniswap v4?", checked: "DexScreener dexId uniswap labels [v4]; Gecko pool dex bankr-robinhood; create tx Initialize on PoolManager 0x8366…0951, 2026-09-03", next: "compare with the Artificial Inu AI/NVDA Gecko dex-id gap" }
  - { priority: P1, question: "Which USD liquidity figure should a card use when Gecko reserve is $381k and DexScreener liquidity is $313k?", checked: "Live Gecko reserve_in_usd 380660; DexScreener liquidity.usd 312941; assignment lead ~$315,840 / ~$990,411 sits nearer DexScreener, 2026-09-03", next: "keep both receipts; do not average" }
  - { priority: P2, question: "Are PALANTARD / PLTITS / BOMBA / MONITOR later filed as their own graduation slugs?", checked: "DexScreener GOYBEAM/PLTR search lists those four as separate PLTR Uniswap v4 tokens, none in census 49, 2026-09-03", next: "do not merge them into goybeam; inventory if assigned" }
---

# GOYBEAM — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against Palantir Technologies • Robinhood Token. LongLauncher.create deployed GOYBEAM on 2026-07-20 and seeded the GOYBEAM/PLTR book. Traders buy and sell GOYBEAM on Uniswap v4. No official site was located this pass.

Themes: memecoin, stock-paired:PLTR, rwa

## Why it matters

The GOYBEAM/PLTR Uniswap v4 book printed about $932k of 24h volume on Gecko and $989k on DexScreener at collection, with the quote token matching the Robinhood PLTR Stock Token in GET /rhj/assets. @MaxLongCEO posted that GOYBEAM was the #1 PLTR pair. PALANTARD, PLTITS, BOMBA and MONITOR are separate PLTR books, not this token.

## What could go wrong

USD liquidity figures on the GOYBEAM/PLTR book count both sides, and Gecko reserve ($381k) disagrees with DexScreener liquidity ($313k). Gecko labels the pool dex as bankr-robinhood while DexScreener and the create tx say Uniswap v4. A second GOYBEAM ticker at goybeam.lol / 0x3f74…161a is a different contract. No official handle was located; DexScreener lists @longPLTRgoybeam as unconfirmed-official.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xDE78…2aAb at 2026-07-20T23:57:21Z minted GOYBEAM supply 1e9*1e18 into Uniswap v4 poolId 0x069c…b2bb quoted against PLTR 0x894E…4F2A. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() returns Airlock 0xeb7C…0862. [verified R-4 R-5 R-6 R-18]

PoolManager is 0x8366…0951. Hooks are DopplerHookInitializer 0x4e34…a544. Secondary GOYBEAM/USDG and GOYBEAM/ETH books exist on DexScreener with far less liquidity than the PLTR book. [verified R-6 R-7 R-20]

## Control and security

token owner() is Airlock. Create-from 0xDE78…2aAb is an EIP-7702 CaliburEntry and is named launcher in LaunchCreated. Lock beneficiaries on create were 0xDE78…2aAb at 0.95 and 0xEDeA…eDa8 at 0.05. [verified R-5 R-17 R-18]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified R-2 R-3 R-15] [unknown]

## Team and provenance

No official domain was located. DexScreener website is the LONG app token page (Cloudflare 403 this pass). Gecko websites [] and twitter_handle null. @longPLTRgoybeam posted the CA and DexScreener pool and is listed on the DexScreener profile; flag unconfirmed-official. goybeam.lol / @GOYBEAMJSL publish a different CA. [claim R-7 R-9 R-13 R-19 R-21]

PLTR is a rail: GET /rhj/assets lists Palantir Technologies • Robinhood Token at 0x894E…4F2A on chain 4663. [verified R-12 R-16]

## Economics and activity

GOYBEAM/PLTR Uniswap v4 24h volume is 932241.47 USD and reserve_in_usd is 380660.46 at 2026-09-03T03:35:00Z from the Gecko pool endpoint. fdv_usd is 1050614.56. Gecko token volume_usd.h24 is 946116.34 across all pools, not the PLTR book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 312941.39, volume.h24 989185.51, fdv/marketCap 1058660. Blockscout holders_count 1068. Pair created 2026-07-20T23:57:21Z. [claim R-1 R-7]

Gecko token pools listed GOYBEAM/PLTR as row 1 and GOYBEAM/USDG as row 2 at $13.2k 24h volume. Assignment lead of liq ~$315,840 / vol ~$990,411 is nearer the DexScreener slice than the Gecko reserve. [claim R-7 R-8 R-20]

## Material risks

- Quote token PLTR 0x894E…4F2A is in GET /rhj/assets, so USD pool figures still mix GOYBEAM with a Stock Token, not USDG. [verified R-12 R-16]
- Gecko reserve $381k and DexScreener liquidity $313k disagree on the same pool. [claim R-7 R-8]
- Ticker collision with goybeam.lol token 0x3f74…161a. [verified R-21 R-22]
- No official handle or domain this pass; DexScreener X is unconfirmed-official. [claim R-7 R-13]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/LongLauncher/PLTR and the create tx, RPC name/symbol/owner/code, DexScreener, Gecko pool/token/pools, /rhj/assets, @MaxLongCEO, @longPLTRgoybeam, and goybeam.lol were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 932241.47 is the Gecko GOYBEAM/PLTR pool 24h volume, not the 946116.34 token all-pools figure. Reserve 380660.46 is that pool. DexScreener 989185.51 / 312941.39 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that GOYBEAM is the LONG protocol or the goybeam.lol token, or that PALANTARD/PLTITS/BOMBA/MONITOR are the same book. Creation is LongLauncher.create of 0x1Fe2…1E18 against PLTR 0x894E…4F2A; the other names are different CAs; goybeam.lol publishes 0x3f74…161a. [inference R-4 R-21 R-22]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no goybeam / GOYBEAM / 0x1Fe2…1E18. content/dependencies/stock-tokens.yaml lists PLTR 0x894E…4F2A.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, PLTR, create 0x8e31…ac32, LaunchCreated log, holders. RPC eth_getCode/eth_call with Chrome UA at block 53106531.
- Aggregators: DexScreener latest/dex/tokens and search GOYBEAM/PLTR; Gecko token, pool, token/pools, token/info (Mozilla/Chrome UA).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, PLTR hit at 0x894E…4F2A.
- Social: X keyword GOYBEAM/PLTR; from:longPLTRgoybeam; user search longpltrgoybeam / GOYBEAMJSL; goybeam.lol preview.
- Failed: app.long.xyz/tokens/0x1fe2… Cloudflare 403; Gecko first call HTTP 429 then succeeded; factory() on the token reverts (Airlock owner used instead).
- Time: collection 2026-09-03T03:25Z–2026-09-03T03:40Z.
