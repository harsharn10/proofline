---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: palantard
name: PALANTARD
packet_tier: seed
as_of: 2026-09-03T04:10:00Z
prior_packet: null
supersedes: null
owned_slugs: [palantard]
allowed_paths:
  - research/inbox/packets/palantard/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: PALANTARD
  aliases: ["Palantard"]
  symbols: [PALANTARD]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener website is app.long.xyz/tokens/<ca> (LONG app); Gecko token attributes have no website field; GET token/info returned 429 and was not retried"
  official_handle: "NULL — DexScreener info.socials lists x.com/Palantards and that account posted CA 0x0a23…1e18; Gecko token attributes have no twitter_handle; no bidirectional site this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: goybeam
      signals: [shared-deployer]
      contrary_signals:
        - "Packed GOYBEAM is GOYBEAM at 0x1Fe2…1E18 paired to PLTR 0x894E…4F2A via LongLauncher.create on 2026-07-20"
        - "PALANTARD is Palantard at 0x0a23…1e18 paired to the same PLTR rail via a later LongLauncher.create on 2026-09-02"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "PALANTARD is a token cloned by DopplerERC20V1Factory 0x1B37…b69a through LongLauncher.create, entity_kind token, not protocol"
        - "app.long.xyz is the pad, not a PALANTARD site"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "PALANTARD is Palantard at 0x0a23…1e18 paired to PLTR 0x894E…4F2A via the same LongLauncher"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x0a23…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; creation tx LongLauncher.create minted Palantard / PALANTARD into Uniswap v4 pool 0x23c7…0a5d quoted against PLTR 0x894E…4F2A. GET api.robinhood.com/rhj/assets (194 assets) has PLTR at that address. Distinct from packed GOYBEAM and from PLTITS/BOMBA/MONITOR PLTR books. No official site this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12] [R-20]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/Palantards", authenticity: unconfirmed }
  - { kind: app, url: "https://app.long.xyz/tokens/0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18", authenticity: unconfirmed }

deployments:
  - label: PALANTARD token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:04:00Z
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
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-15, R-18]
  - label: Airlock (token owner)
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-21]
  - label: PLTR Palantir Technologies • Robinhood Token (pair quote / numeraire)
    role: token
    address:
      value: "0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 680493.53, currency: USD, as_of: 2026-09-03T04:05:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x23c73750a43bb363b92e5239cbbedcc774d580e1ba83b16474b35cc56f790a5d volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 71104.55, currency: USD, as_of: 2026-09-03T04:05:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x23c73750a43bb363b92e5239cbbedcc774d580e1ba83b16474b35cc56f790a5d reserve_in_usd (PALANTARD/PLTR pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 163597.50, currency: USD, as_of: 2026-09-03T04:05:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x23c73750a43bb363b92e5239cbbedcc774d580e1ba83b16474b35cc56f790a5d fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 714906.77, currency: USD, as_of: 2026-09-03T04:05:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18 pair 0x23c73750…0a5d volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 109720.68, currency: USD, as_of: 2026-09-03T04:05:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18 pair 0x23c73750…0a5d liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 390, currency: null, as_of: 2026-09-03T04:04:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:05:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32a9555 (53122389). Token 0x0a23…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name Palantard, symbol PALANTARD, decimals 18, totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl code 13927 B. Factory 0x1B37…b69a code 1912 B. LongLauncher 0x22e9…eeED code 5826 B. Airlock code 5695 B. Create-from 0xC6Bc…58ce code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-16, R-18], result: "Blockscout api/v2 token 0x0a23…1e18 name Palantard symbol PALANTARD holders_count 390 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. creator_address_hash DopplerERC20V1Factory 0x1B37…b69a. creation_transaction_hash 0x87615bc0…ab12 2026-09-02T21:15:57Z block 52883463 to LongLauncher method create from 0xC6Bc…58ce (is_contract false). LaunchCreated normalizedTicker PALANTARD numeraire 0x894E…4F2A poolId 0x23c7…0a5d. PLTR 0x894E…4F2A name Palantir Technologies • Robinhood Token holders_count 34856." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7, R-8, R-9, R-20], result: "DexScreener latest/dex/tokens/0x0a23…1e18: 9 robinhood pairs; top PALANTARD/PLTR v4 0x23c7…0a5d quote 0x894E…4F2A Palantir Technologies • Robinhood Token / PLTR liquidity.usd 109720.68 volume.h24 714906.77 fdv/marketCap 195446 pairCreatedAt 1788383757000 (2026-09-02T21:15:57Z) info.websites app.long.xyz/tokens/<ca> info.socials x.com/Palantards. Gecko pool: volume_usd.h24 680493.53 reserve_in_usd 71104.55 fdv_usd 163597.50 pool_created_at 2026-09-02T21:15:57Z dex bankr-robinhood. Gecko token volume_usd.h24 682821.69 (all pools). Gecko token attributes have no website/twitter fields; GET token/info 429 not retried." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol PLTR hit 1: tokenName Palantir Technologies • Robinhood Token deployments contractAddress 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A chainId 4663 status ASSET_STATUS_ACTIVE. PALANTARD scan 0 hits." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-6, R-18], result: "Create tx logs: OwnershipTransferred newOwner Airlock; mint 1e27 to Airlock; PoolManager Initialize id 0x23c7…0a5d currency0 PALANTARD currency1 PLTR fee 8388608 hooks DopplerHookInitializer 0x4e34…a544; Airlock Create asset PALANTARD numeraire PLTR; LongLauncher LaunchCreated launcher 0xC6Bc…58ce normalizedTicker PALANTARD. Lock beneficiaries 0x21E2…7A66 0.05 and 0xC6Bc…58ce 0.95." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against numeraire PLTR. Tx 0x8761…ab12 from 0xC6Bc…58ce at 2026-09-02T21:15:57Z minted Palantard / PALANTARD; owner() is Airlock 0xeb7C…0862; creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a.", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Palantard", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "PALANTARD", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-5, R-15], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials lists x.com/Palantards; that account posted CA 0x0a23…1e18; Gecko token attributes have no twitter_handle; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote PLTR 0x894E…4F2A is Palantir Technologies • Robinhood Token in GET rhj/assets (194 assets). Distinct from GOYBEAM 0x1Fe2…1E18, PLTITS 0x5c9F…1E18, BOMBA 0x525F…1E18, and MONITOR 0x1a91…1e18, each a different token with its own PALANTARD-unrelated PLTR Uniswap v4 book.", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-7, R-12, R-16, R-20], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "PALANTARD/PLTR Uniswap v4 24h volume 680493.53 USD and reserve_in_usd 71104.55 at 2026-09-03T04:05:00Z (Gecko pool slice, not Gecko token all-pools 682821.69)", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 109720.68 volume.h24 714906.77 fdv/marketCap 195446 at 2026-09-03T04:05:00Z", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 390, class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; OwnershipTransferred to Airlock on create. Create-from 0xC6Bc…58ce has no code.", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-5, R-6, R-17], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "LaunchCreated launcher 0xC6BcbD52Ef061fd3Bd8f9D339d4463a49F1b58ce; DopplerHookInitializer Lock beneficiaries 0xC6Bc…58ce 0.95 and 0x21E2ce70511e4FE542a97708e89520471DAa7A66 0.05", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-6, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is PLTR 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x23c7…0a5d; DexScreener dexId uniswap labels [v4]; Gecko pool dex id bankr-robinhood", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-6, R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; creation tx to LongLauncher 0x22e9…eeED method create, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener socials x.com/Palantards; @Palantards posted CA 0x0a23…1e18 and @longdotxyz; Gecko has no twitter_handle field; app.long.xyz is the LONG pad token page", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 163597.50; DexScreener fdv/marketCap 195446. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener website is the LONG app token page; Gecko token attributes have no website field; GET token/info 429 not retried", class: claim, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "palantard | PALANTARD | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Name collision: @palantardmeme bio CA 0x09a2…1e18 is PALZ / Palantard on a separate PLTR Uniswap v4 book, not 0x0a23…1e18. DexScreener search also returns a Solana pumpswap PALANTARD mint. Flag ticker-only.", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-19, R-20], reproduction_ids: [REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko PALANTARD/PLTR 24h volume $680k, reserve $71k"
    summary: "Gecko pool 0x23c7…0a5d volume_usd.h24 680494 reserve_in_usd 71105 fdv_usd 163598."
    occurred_at: 2026-09-03T04:05:00Z
    observed_at: 2026-09-03T04:05:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "@Palantards posted PALANTARD live with CA"
    summary: "Pinned post: $PALANTARD is now live via @longdotxyz on @RobinhoodCrypto CA 0x0a23…1e18. DexScreener socials list this handle."
    occurred_at: 2026-09-02T21:57:00Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-3
    type: ct
    title: "@Palantards posted $PALANTARD meme video"
    summary: "Post: Explaining to my fellow $PLTR whales why cash is just $PALANTARD we haven’t bought yet."
    occurred_at: 2026-09-03T01:31:45Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-4
    type: ct
    title: "@palantardmeme posted a different Palantard CA"
    summary: "Account display name Palantard posted just a palantard paired with $PLTR stocks; bio CA 0x09a2…1e18 is PALZ, not 0x0a23…1e18."
    occurred_at: 2026-09-03T02:30:44Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [identity.handle, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-5
    type: onchain
    title: "LongLauncher.create minted PALANTARD against PLTR"
    summary: "Tx 0x8761…ab12 from 0xC6Bc…58ce at 2026-09-02T21:15:57Z; poolId 0x23c7…0a5d."
    occurred_at: 2026-09-02T21:15:57Z
    observed_at: 2026-09-03T04:06:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x0a23…1e18 Palantard / PALANTARD", url: "https://robinhoodchain.blockscout.com/address/0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18 name Palantard is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol PALANTARD decimals 18 total_supply 1000000000000000000000000000 holders_count 390 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x87615bc0ff2128c06832d50eea31521e01531bf190d53fe2e3934e5452d1ab12." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-16, CLM-22], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x87615bc0…ab12", url: "https://robinhoodchain.blockscout.com/tx/0x87615bc0ff2128c06832d50eea31521e01531bf190d53fe2e3934e5452d1ab12", published_at: 2026-09-02T21:15:57Z, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-5], excerpt: "timestamp 2026-09-02T21:15:57.000000Z status ok result success block_number 52883463 from 0xC6BcbD52Ef061fd3Bd8f9D339d4463a49F1b58ce (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data includes numeraire 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A and Palantard / PALANTARD name/symbol bytes." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on PALANTARD", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a9555 (53122389). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name Palantard symbol PALANTARD decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Factory code 1912 B. Impl code 13927 B. LongLauncher code 5826 B. Create-from 0xC6Bc…58ce code 0x." }
  - { id: R-6, publisher: Blockscout, title: "create tx logs Initialize / LaunchCreated", url: "https://robinhoodchain.blockscout.com/tx/0x87615bc0ff2128c06832d50eea31521e01531bf190d53fe2e3934e5452d1ab12", published_at: 2026-09-02T21:15:57Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21], excerpt: "PoolManager Initialize id 0x23c73750a43bb363b92e5239cbbedcc774d580e1ba83b16474b35cc56f790a5d currency0 PALANTARD currency1 PLTR 0x894E…4F2A fee 8388608 hooks 0x4e346895…a544. Airlock Create numeraire PLTR. LongLauncher LaunchCreated normalizedTicker PALANTARD launcher 0xC6Bc…58ce. Lock beneficiaries 0x21E2…7A66 0.05 and 0xC6Bc…58ce 0.95." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens PALANTARD", url: "https://api.dexscreener.com/latest/dex/tokens/0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "9 robinhood pairs. Top pairAddress 0x23c73750a43bb363b92e5239cbbedcc774d580e1ba83b16474b35cc56f790a5d labels v4 base Palantard / PALANTARD quote Palantir Technologies • Robinhood Token / PLTR 0x894E1EC2…4F2A liquidity.usd 109720.68 volume.h24 714906.77 fdv 195446 marketCap 195446 pairCreatedAt 1788383757000. info.websites app.long.xyz/tokens/0x0a23…1e18 info.socials x.com/Palantards." }
  - { id: R-8, publisher: GeckoTerminal, title: "PALANTARD/PLTR Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x23c73750a43bb363b92e5239cbbedcc774d580e1ba83b16474b35cc56f790a5d", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name PALANTARD / PLTR pool_created_at 2026-09-02T21:15:57Z fdv_usd 163597.5005 market_cap_usd null volume_usd.h24 680493.526387417 reserve_in_usd 71104.5525 transactions.h24 buys 4370 sells 4871. dex bankr-robinhood quote robinhood_0x894e1ec2d74ffe5aef8dc8a9e84686accb964f2a." }
  - { id: R-9, publisher: GeckoTerminal, title: "Palantard token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-19, CLM-23], excerpt: "name Palantard symbol PALANTARD decimals 18 total_supply 1e27 price_usd 0.0001875109559 fdv_usd 187510.955895608 market_cap_usd null volume_usd.h24 682821.692819377. coingecko_coin_id null. Token attributes have no website or twitter_handle fields this pass. Top pool 0x23c7…0a5d. GET .../info HTTP 429 not retried." }
  - { id: R-10, publisher: "@Palantards", title: "$PALANTARD is now live with CA", url: "https://x.com/Palantards/status/2095269787089637710", published_at: 2026-09-02T21:57:00Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "$PALANTARD is now live via @longdotxyz on @RobinhoodCrypto CA: 0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18 In the beginning there was Palantir. Then came the Palantards. Display name Palantard handle @Palantards Joined September 2026. 6 posts this pass." }
  - { id: R-11, publisher: GeckoTerminal, title: "PALANTARD/PLTR pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x23c73750a43bb363b92e5239cbbedcc774d580e1ba83b16474b35cc56f790a5d", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "GeckoTerminal robinhood pool page for 0x23c73750a43bb363b92e5239cbbedcc774d580e1ba83b16474b35cc56f790a5d PALANTARD / PLTR." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol PLTR tokenName Palantir Technologies • Robinhood Token deployments contractAddress 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE. PALANTARD scan 0 hits." }
  - { id: R-13, publisher: "@Palantards", title: "cash is just $PALANTARD we haven’t bought yet", url: "https://x.com/Palantards/status/2095323830533197914", published_at: 2026-09-03T01:31:45Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Explaining to my fellow $PLTR whales why cash is just $PALANTARD we haven’t bought yet. Handle @Palantards display name Palantard." }
  - { id: R-14, publisher: DexScreener, title: "PALANTARD/PLTR pair page", url: "https://dexscreener.com/robinhood/0x23c73750a43bb363b92e5239cbbedcc774d580e1ba83b16474b35cc56f790a5d", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "DexScreener robinhood pair 0x23c73750a43bb363b92e5239cbbedcc774d580e1ba83b16474b35cc56f790a5d PALANTARD / PLTR Uniswap v4." }
  - { id: R-15, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Compiler v0.8.26 file_path src/LongLauncher.sol is_partially_verified false verified_at 2026-07-14T11:23:57Z." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x894E…4F2A Palantir Technologies • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A token name Palantir Technologies • Robinhood Token symbol PLTR decimals 18 holders_count 34856 total_supply 8792987000000000000000 type ERC-20." }
  - { id: R-17, publisher: Blockscout, title: "Create-from 0xC6Bc…58ce EOA", url: "https://robinhoodchain.blockscout.com/address/0xC6BcbD52Ef061fd3Bd8f9D339d4463a49F1b58ce", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-14], excerpt: "hash 0xC6BcbD52Ef061fd3Bd8f9D339d4463a49F1b58ce is_contract false is_verified false. RPC eth_getCode 0x. Same address is LaunchCreated launcher and Lock beneficiary 0.95." }
  - { id: R-18, publisher: Blockscout, title: "LaunchCreated log for PALANTARD", url: "https://robinhoodchain.blockscout.com/tx/0x87615bc0ff2128c06832d50eea31521e01531bf190d53fe2e3934e5452d1ab12", published_at: 2026-09-02T21:15:57Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-5], excerpt: "LaunchCreated poolOrHook 0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18 asset 0x0a23…1e18 numeraire 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A launcher 0xC6BcbD52Ef061fd3Bd8f9D339d4463a49F1b58ce deployedAt 1788383757 normalizedTicker PALANTARD. Block 52883463. Pool Initialize id 0x23c7…0a5d." }
  - { id: R-19, publisher: "@palantardmeme", title: "just a palantard paired with $PLTR stocks", url: "https://x.com/palantardmeme/status/2095338676523839715", published_at: 2026-09-03T02:30:44Z, accessed_at: 2026-09-03T04:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-25, EVT-4], excerpt: "just a palantard paired with $PLTR stocks @PalantirTech. Bio CA: 0x09a2a795ed0dd1109088913655fb673fbe2f1e18. Display name Palantard handle @palantardmeme. That CA is PALZ on DexScreener, not 0x0a2329aA1b3eEFE403aB3be5f5683d31Ebf81e18." }
  - { id: R-20, publisher: DexScreener, title: "search PALANTARD and PLTR books", url: "https://api.dexscreener.com/latest/dex/search?q=PALANTARD", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "Robinhood Uniswap v4 PLTR books include PALANTARD 0x0a23…1e18 pair 0x23c7…0a5d; PALZ 0x09a2…1e18; PLTITS 0x5c9F…1E18; MONITOR 0x1a91…1e18; BOMBA 0x525F…1E18; GOYBEAM 0x1Fe2…1E18 pair 0x069c…b2bb. Separate Solana pumpswap PALANTARD mint is not 0x0a23…1e18." }
  - { id: R-21, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true. Token owner() and OwnershipTransferred newOwner match this address." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x0a23…1e18?", checked: "DexScreener info.socials x.com/Palantards and website app.long.xyz/tokens/<ca>; @Palantards posted the CA 2026-09-02; Gecko token attributes have no twitter/website; GET token/info 429, 2026-09-03", next: "re-read the LONG app token page; search @longdotxyz for a PALANTARD post that names this CA" }
  - { priority: P0, question: "Does @Palantards remain the only handle that publishes CA 0x0a23…1e18, versus @palantardmeme for PALZ 0x09a2…1e18?", checked: "@palantardmeme bio has 0x09a2…1e18; DexScreener search returns PALZ and PALANTARD as separate PLTR books, 2026-09-03", next: "keep ticker-only on PALZ / Solana mint; do not merge" }
  - { priority: P1, question: "Why does Gecko label the PALANTARD/PLTR pool dex as bankr-robinhood while DexScreener and PoolManager Initialize say Uniswap v4?", checked: "DexScreener dexId uniswap labels [v4]; Gecko pool dex bankr-robinhood; create tx Initialize on PoolManager 0x8366…0951, 2026-09-03", next: "same gap as packed GOYBEAM; do not treat bankr as a second venue" }
  - { priority: P1, question: "Which USD liquidity figure should a card use when Gecko reserve is $71k and DexScreener liquidity is $110k?", checked: "Live Gecko reserve_in_usd 71104.55; DexScreener liquidity.usd 109720.68; assignment lead ~$74,165 / ~$679,236 sits nearer Gecko, 2026-09-03", next: "keep both receipts; do not average" }
  - { priority: P2, question: "Does r/palantards or Palantir Inc. have any product link to token 0x0a23…1e18?", checked: "@Palantards linked reddit.com/r/palantards as a stock-community meme; GET /rhj/assets PLTR is the quote rail only; no Palantir domain this pass", next: "do not treat the listed-stock community as an official token surface" }
---

# PALANTARD — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against Palantir Technologies • Robinhood Token. LongLauncher.create deployed Palantard (PALANTARD) on 2026-09-02 and seeded the PALANTARD/PLTR book. Traders buy and sell PALANTARD on Uniswap v4. PLTR is the pair rail, not this token. No official site was located this pass.

Themes: memecoin, stock-paired:PLTR, rwa

## Why it matters

The PALANTARD/PLTR Uniswap v4 book printed about $680k of 24h volume on Gecko and $715k on DexScreener at collection, with the quote token matching the Robinhood PLTR Stock Token in GET /rhj/assets. @Palantards posted the CA as live via @longdotxyz. GOYBEAM, PLTITS, BOMBA and MONITOR are separate PLTR books, not this token.

## What could go wrong

USD liquidity figures on the PALANTARD/PLTR book count both sides, and the quote side is PLTR, not USDG. DexScreener liquidity and Gecko reserve disagree. @palantardmeme publishes a different Palantard CA (PALZ). No official handle was confirmed bidirectional, so comms surfaces stay unconfirmed-official.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xC6Bc…58ce at 2026-09-02T21:15:57Z minted Palantard / PALANTARD supply 1e9*1e18 into Uniswap v4 poolId 0x23c7…0a5d quoted against PLTR. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() is Airlock 0xeb7C…0862. factory() reverts. [verified R-4 R-5 R-6 R-18]

PoolManager Initialize uses fee 8388608 and hooks 0x4e34…a544. Lock beneficiaries are 0xC6Bc…58ce 0.95 and 0x21E2…7A66 0.05. Secondary PALANTARD/USDG, PALANTARD/ETH, and Ramses PALANTARD/WETH books exist on DexScreener with far less liquidity than the PLTR book. [verified R-6 R-7]

## Control and security

token owner() is Airlock. Create-from 0xC6Bc…58ce has no code and is the LaunchCreated launcher. DopplerERC20V1, DopplerERC20V1Factory, and LongLauncher are verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, src/LongLauncher.sol, compiler v0.8.26). Token source is the EIP-1167 shell only. No audit report URL was located this pass. [verified R-2 R-3 R-5 R-15] [unknown]

## Team and provenance

No official domain was located. DexScreener website is the LONG app token page. DexScreener socials list x.com/Palantards; that account posted CA 0x0a23…1e18 with @longdotxyz. Gecko token attributes have no website or twitter field. Flag unconfirmed-official. [claim R-7 R-9 R-10]

@palantardmeme uses the Palantard display name and a different CA 0x09a2…1e18 (PALZ). r/palantards is a listed-stock meme community, not a token site. [claim R-19 R-20]

## Economics and activity

PALANTARD/PLTR Uniswap v4 24h volume is 680493.53 USD and reserve_in_usd is 71104.55 at 2026-09-03T04:05:00Z from the Gecko pool endpoint. fdv_usd is 163597.50. Gecko token volume_usd.h24 is 682821.69 across all pools, not the PLTR book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 109720.68, volume.h24 714906.77, fdv/marketCap 195446. Blockscout holders_count 390. Pair created 2026-09-02T21:15:57Z. Assignment lead of ~$74,165 / ~$679,236 sits nearer the Gecko pool slice than DexScreener. [claim R-1 R-7 R-8]

## Material risks

- Quote token PLTR 0x894E…4F2A is the Robinhood Stock Token rail in GET /rhj/assets; this token is not PLTR. [verified R-12 R-16]
- Pool USD reserve is PALANTARD plus PLTR, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko reserve $71k versus DexScreener liquidity $110k; do not average. [claim R-7 R-8]
- No bidirectional official handle or domain this pass; @Palantards is unconfirmed-official. [claim R-7 R-10]
- Name collision with PALZ 0x09a2…1e18 / @palantardmeme and a Solana PALANTARD mint. [claim R-19 R-20]
- Distinct from packed GOYBEAM and from PLTITS/BOMBA/MONITOR. [verified R-20]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/launcher/Airlock/PLTR and the create tx plus logs, RPC name/symbol/owner/code, DexScreener token and search, Gecko pool/token, /rhj/assets, and the @Palantards / @palantardmeme posts were opened on 2026-09-03 and excerpts copied from the responses. Gecko token/info returned 429 and was not retried. [verified R-1 R-5 R-8 R-12]
- Numbers: 680493.53 is the Gecko PALANTARD/PLTR pool 24h volume, not the 682821.69 token all-pools figure. Reserve 71104.55 is that pool. DexScreener 714906.77 / 109720.68 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that PALANTARD is the LONG protocol, packed GOYBEAM, Palantir Inc., or the PALZ / Solana namesake. Creation is LongLauncher.create of 0x0a23…1e18 against PLTR 0x894E…4F2A; the other names are different CAs; GET /rhj/assets lists PLTR as the quote rail only. [inference R-4 R-12 R-19 R-20]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no palantard / PALANTARD / Palantard / 0x0a23…1e18. content/dependencies/stock-tokens.yaml has PLTR at 0x894E…4F2A.
- Explorer: Blockscout api/v2 token, impl, factory, launcher, Airlock, PLTR, createToken 0x8761…ab12, LaunchCreated / Initialize / Lock logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53122389.
- Aggregators: DexScreener latest/dex/tokens and search PALANTARD / PLTITS / BOMBA / MONITOR; Gecko token and pool. Gecko token/info HTTP 429, not retried.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, PLTR 0x894E…4F2A, 0 PALANTARD.
- Social: X keyword PALANTARD; from:Palantards; user search Palantards; x.com/Palantards profile and pinned CA post; @palantardmeme PALZ CA.
- Failed: Gecko GET .../tokens/.../info 429; X user search Palantards did not rank @Palantards in the first hits (profile fetch used instead).
- Time: collection 2026-09-03T04:00Z–2026-09-03T04:10Z.
