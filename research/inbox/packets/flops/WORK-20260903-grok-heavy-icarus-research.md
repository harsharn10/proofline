---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: flops
name: FLOPS
packet_tier: seed
as_of: 2026-09-03T04:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [flops]
allowed_paths:
  - research/inbox/packets/flops/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: FLOPS
  aliases: [Flops]
  symbols: [FLOPS]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener websites field is app.long.xyz/tokens/0x9dad…1e18 (Long pad; Cloudflare HTTP 403 this pass); Gecko token has no website field"
  official_handle: "NULL — DexScreener lists x.com/flops_rh; @Flops_rh posted the CA this pass; bio is FLOPS/NVDA on L(🩴🩴)NG @longdotxyz with no CA; no project website; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "FLOPS is the ERC-20 at 0x9DAD…1e18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; @Flops_rh is not @longdotxyz"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "FLOPS is 0x9DAD…1e18 paired to the same NVDA 0xd060…9EEC via LongLauncher.create, different pool 0xe04a…0601"
        - "Same-stock NVDA rail, not an identity match; no shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the FLOPS/NVDA pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0xe59d…e2c5 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x9DAD…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; LongLauncher.create at 2026-08-28T03:07:36Z minted FLOPS into Uniswap v4 pool 0xe04a…0601 quoted against NVIDIA • Robinhood Token NVDA 0xd060…9EEC. NVDA is the quote rail. Distinct from packed AI/microduck/orbio/ripe and in-flight KOLI. No bidirectional project domain this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-10] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: app, url: "https://app.long.xyz/tokens/0x9dad613c96bd6e9d0f4fd840d53557dc5ede1e18", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/Flops_rh", authenticity: unconfirmed }

deployments:
  - label: FLOPS token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x9DAD613c96Bd6E9D0f4fd840D53557Dc5EdE1e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:30Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-4, R-5]
  - label: DopplerERC20V1Factory (token creator)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:30Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-5]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:30Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-12]
  - label: NVIDIA • Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-7, R-10, R-11]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-15]

metrics:
  - { kind: volume_24h, value: 501817.71, currency: USD, as_of: 2026-09-03T04:06:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe04a69844e34253d3871942f6eccddcdec948b7f3129f8f473797d3631da0601 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 102719.87, currency: USD, as_of: 2026-09-03T04:06:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe04a6984…0601 reserve_in_usd (FLOPS/NVDA pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 223095.68, currency: USD, as_of: 2026-09-03T04:06:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe04a6984…0601 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 516844.27, currency: USD, as_of: 2026-09-03T04:05:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x9DAD…1e18 pair 0xe04a6984…0601 FLOPS/NVDA Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 118647.59, currency: USD, as_of: 2026-09-03T04:05:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x9DAD…1e18 pair 0xe04a6984…0601 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 219198, currency: USD, as_of: 2026-09-03T04:05:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x9DAD…1e18 pair 0xe04a6984…0601 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 783, currency: null, as_of: 2026-09-03T04:05:30Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x9DAD…1e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:07:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com block 0x32a9a2e (53123630): token 0x9DAD…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599; name() FLOPS; symbol() FLOPS; decimals 18; totalSupply 1e27; owner() Airlock 0xeb7c0347…0862; factory() reverted. Later block 0x32a9c2c (53124140): NVDA 0xd060…9EEC eth_getCode 283 bytes name() NVIDIA • Robinhood Token symbol() NVDA. Factory code 1912 B. Impl code 13927 B. Launcher code 5826 B. Create-from 0x0b36…9bB9 code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-11, R-12, R-15, R-18], result: "Blockscout api/v2 token 0x9DAD…1e18 name FLOPS is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator 0x1B37…b69a creation tx 0xe59d…e2c5; token symbol FLOPS holders_count 783 total_supply 1e27. Tx timestamp 2026-08-28T03:07:36Z block 47965497 from 0x0b36…9bB9 (is_contract false) to LongLauncher method create; decoded numeraire 0xd060…9EEC tokenFactory 0x1B37…b69a name/symbol FLOPS supply 1e27. LaunchCreated normalizedTicker FLOPS poolOrHook 0x9DAD…1e18. PoolManager Initialize id 0xe04a…0601 currency0 FLOPS currency1 NVDA. NVDA token name NVIDIA • Robinhood Token holders_count 91943." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x9DAD…1e18 7 robinhood uniswap pairs; top FLOPS/NVDA v4 0xe04a…0601 quote 0xd060…9EEC NVIDIA • Robinhood Token liquidity.usd 118647.59 volume.h24 516844.27 fdv/marketCap 219198 pairCreatedAt 1787886456000 (2026-08-28T03:07:36Z) info.websites app.long.xyz/tokens/0x9dad…1e18 socials x.com/flops_rh and farcaster.xyz/nathanbenish/0xe63aa1fd. Gecko pool same address name FLOPS / NVDA dex bankr-robinhood volume_usd.h24 501817.71 reserve_in_usd 102719.87 fdv_usd 223095.68 pool_created_at 2026-08-28T03:07:36Z market_cap_usd null. Gecko token volume_usd.h24 503411.98 (all pools)." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:09:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0x9DAD…1e18) word0 numeraire 0xd0601CE1…9EEC; word1/word2 0xdead; word4 DopplerHookInitializer 0x4e34…a544; word5 token 0x9DAD…1e18; word6 0xdeaddead…dead. Airlock owner() 0x21E2ce70…7A66. Create-from 0x0b36…9bB9 eth_getCode empty." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:06:30Z, receipt_ids: [R-10], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; NVDA row tokenName NVIDIA • Robinhood Token deployments contractAddress 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC chainId 4663 status ASSET_STATUS_ACTIVE. Zero FLOPS hits." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T04:11:00Z, receipt_ids: [R-16], result: "DexScreener search KOLI NVDA on robinhood: KOLI 0xb8D9…1E18 / NVDA pair 0x1d67…; AI 0x2E8c…1e18 / NVDA 0xcbdf…; microduck 0xD5f1…E725 / NVDA 0xcde4…; ORBIO 0xAa07…28A3 / NVDA 0xa95b…; RIPE 0x4D3f…883b / NVDA 0x9b85…; FLOPS 0x9DAD…1e18 / NVDA 0xe04a…0601. None of those bases equal 0x9DAD…1e18 except FLOPS." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 FLOPS into a Uniswap v4 pool quoted against NVDA 0xd060…9EEC; Airlock getAssetData numeraire is that NVDA; LP addresses in getAssetData include 0xdead", class: verified, observed_at: 2026-09-03T04:09:00Z, receipt_ids: [R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: FLOPS, class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: FLOPS, class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x9DAD613c96Bd6E9D0f4fd840D53557Dc5EdE1e18", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-4, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-8, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener lists x.com/flops_rh; @Flops_rh posted the CA; bio has no CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-7, R-13, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote NVDA 0xd060…9EEC is NVIDIA • Robinhood Token in GET /rhj/assets (194 assets, 1 NVDA hit, chainId 4663). NVDA is the rail, not this subject. Distinct from packed AI 0x2E8c…1e18, microduck 0xD5f1…E725, ORBIO 0xAa07…28A3, RIPE 0x4D3f…883b, and in-flight KOLI 0xb8D9…1E18, which quote the same rail on other pools.", class: verified, observed_at: 2026-09-03T04:11:00Z, receipt_ids: [R-7, R-10, R-11, R-16], reproduction_ids: [REP-3, REP-5, REP-6], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko FLOPS/NVDA pool 0xe04a…0601 volume_usd.h24 501817.71 reserve_in_usd 102719.87 fdv_usd 223095.68 at 2026-09-03T04:06:00Z (pool slice, not Gecko token all-pools 503411.98)", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 118647.59 volume.h24 516844.27 fdv/marketCap 219198 at 2026-09-03T04:05:00Z", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 783, class: verified, observed_at: 2026-09-03T04:05:30Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from EOA 0x0b3669c2CbD01A37f08f9B59a11A03A467729bB9 (code 0x)", class: verified, observed_at: 2026-09-03T04:09:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries 0x21E2ce70…7A66 at 5e16 and 0xbE54f047…44b2 at 95e16; factory() on the token reverts", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-4, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is NVDA 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xe04a…0601; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-4, R-7, R-8, R-18], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; create tx to LongLauncher 0x22e9…eeED, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-1, R-3, R-4, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: x.com/Flops_rh display Flops, bio FLOPS/NVDA on L(🩴🩴)NG @longdotxyz, posted CA 0x9DAD…1e18; DexScreener lists that handle; no CA in the bio; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-7, R-13, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 223095.68; DexScreener fdv/marketCap 219198. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-6, R-10, R-11], reproduction_ids: [REP-1, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener websites is the Long pad URL; Gecko token has no website field; app.long.xyz returned Cloudflare 403 this pass", class: claim, observed_at: 2026-09-03T04:09:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "flops | FLOPS | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: relationship, value: "Gecko dex id bankr-robinhood on the FLOPS/NVDA pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge FLOPS into census bankr.", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-27, field: other, value: "X user search for Flops also returned @Flops__Network (FLOPS / Flops Network, decentralized AI infra), a different product; this packet is only 0x9DAD…1e18 / pair 0xe04a…0601", class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-13, R-17], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Same FLOPS/NVDA pool 0xe04a…0601: Gecko reserve_in_usd 102719.87 vs DexScreener liquidity.usd 118647.59; 24h volume 501817.71 vs 516844.27; fdv 223095.68 vs 219198. A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko FLOPS/NVDA 24h volume $502k, liquidity $103k"
    summary: "Gecko pool 0xe04a…0601 volume_usd.h24 501818 reserve_in_usd 102720 fdv_usd 223096."
    occurred_at: 2026-09-03T04:06:00Z
    observed_at: 2026-09-03T04:06:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "@Flops_rh posted origin story and token CA"
    summary: "Account posted FLOPS lore, @longdotxyz, and CA 0x9DAD613c…1e18."
    occurred_at: 2026-09-03T03:16:52Z
    observed_at: 2026-09-03T04:10:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13, R-17]
  - id: EVT-3
    type: ct
    title: "@Flops_rh posted flip-flop / LONG logo lore"
    summary: "Account posted In 2026 it is time for the flip-flop and L(🩴🩴)G."
    occurred_at: 2026-09-03T02:11:54Z
    observed_at: 2026-09-03T04:10:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: ct
    title: "@_laseasy posted FLOPS/NVDA CA and Long lore"
    summary: "Post: flops/nvda on longxyz, CA 0x9dad…1e18, and Farcaster/Zora links."
    occurred_at: 2026-09-02T00:32:12Z
    observed_at: 2026-09-03T04:10:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-5
    type: onchain
    title: "LongLauncher.create minted FLOPS against NVDA"
    summary: "Tx 0xe59d…e2c5 from 0x0b36…9bB9 at 2026-08-28T03:07:36Z; LaunchCreated ticker FLOPS."
    occurred_at: 2026-08-28T03:07:36Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x9DAD…1e18 FLOPS", url: "https://robinhoodchain.blockscout.com/address/0x9DAD613c96Bd6E9D0f4fd840D53557Dc5EdE1e18", published_at: null, accessed_at: 2026-09-03T04:05:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x9DAD613c96Bd6E9D0f4fd840D53557Dc5EdE1e18 name FLOPS is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol FLOPS decimals 18 total_supply 1000000000000000000000000000 holders_count 783 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xe59d63466924436708c79e15191b9e5cdde7b07e24461b91cdb4ceb933c4e2c5." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0xe59d6346…e2c5", url: "https://robinhoodchain.blockscout.com/tx/0xe59d63466924436708c79e15191b9e5cdde7b07e24461b91cdb4ceb933c4e2c5", published_at: 2026-08-28T03:07:36Z, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, CLM-16, EVT-5], excerpt: "timestamp 2026-08-28T03:07:36.000000Z status ok result success block_number 47965497 from 0x0b3669c2CbD01A37f08f9B59a11A03A467729bB9 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC tokenFactory 0x1B37…b69a name FLOPS symbol FLOPS supply 1e27." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on FLOPS", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a9a2e (53123630). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name FLOPS symbol FLOPS decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Factory code 1912 B. Impl code 13927 B. Launcher code 5826 B. Create-from 0x0b36…9bB9 code 0x." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "Airlock getAssetData and owner()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-13, CLM-21], excerpt: "block 53124140. getAssetData(0x9DAD…1e18) word0 numeraire 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC; word1/word2 0xdead; word4 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544; word5 token 0x9DAD…1e18. Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66. NVDA name() NVIDIA • Robinhood Token symbol() NVDA." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens FLOPS", url: "https://api.dexscreener.com/latest/dex/tokens/0x9DAD613c96Bd6E9D0f4fd840D53557Dc5EdE1e18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "7 robinhood uniswap pairs. Top pairAddress 0xe04a69844e34253d3871942f6eccddcdec948b7f3129f8f473797d3631da0601 labels v4 base FLOPS quote NVIDIA • Robinhood Token / NVDA 0xd0601CE1…9EEC liquidity.usd 118647.59 volume.h24 516844.27 fdv 219198 marketCap 219198 pairCreatedAt 1787886456000. info.websites app.long.xyz/tokens/0x9dad…1e18 socials x.com/flops_rh and farcaster.xyz/nathanbenish/0xe63aa1fd." }
  - { id: R-8, publisher: GeckoTerminal, title: "FLOPS/NVDA Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe04a69844e34253d3871942f6eccddcdec948b7f3129f8f473797d3631da0601", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name FLOPS / NVDA pool_created_at 2026-08-28T03:07:36Z fdv_usd 223095.6811 market_cap_usd null volume_usd.h24 501817.712034955 reserve_in_usd 102719.8706 transactions.h24 buys 3014 sells 3410. dex bankr-robinhood quote robinhood_0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec." }
  - { id: R-9, publisher: GeckoTerminal, title: "FLOPS token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x9DAD613c96Bd6E9D0f4fd840D53557Dc5EdE1e18", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23], excerpt: "name FLOPS symbol FLOPS decimals 18 total_supply 1e27 price_usd 0.000223285372 fdv_usd 223285.372022023 market_cap_usd null volume_usd.h24 503411.975603173 total_reserve_in_usd 54586.92. coingecko_coin_id null. Top pool 0xe04a…0601." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:06:30Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9], excerpt: "HTTP 200. assets length 194. NVDA tokenName NVIDIA • Robinhood Token deployments contractAddress 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC chainId 4663 status ASSET_STATUS_ACTIVE. Zero FLOPS hits." }
  - { id: R-11, publisher: Blockscout, title: "Token 0xd060…9EEC NVIDIA • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC name BeaconProxy is_contract true is_verified true. token name NVIDIA • Robinhood Token symbol NVDA decimals 18 holders_count 91943 total_supply 57758619000000000000000." }
  - { id: R-12, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Compiler v0.8.26 file_path src/LongLauncher.sol is_partially_verified false." }
  - { id: R-13, publisher: "@Flops_rh", title: "FLOPS was a meme before it was a token", url: "https://x.com/Flops_rh/status/2095350287435235748", published_at: 2026-09-03T03:16:52Z, accessed_at: 2026-09-03T04:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-27, EVT-2], excerpt: "FLOPS was a meme before it was a token. Nate (@Natan_benish), founder of Long (@longdotxyz), called FLOPS his favorite meme. FLOPS = computing power. $FLOPS is here. 0x9DAD613c96Bd6E9D0f4fd840D53557Dc5EdE1e18. Profile bio: FLOPS/NVDA on L(🩴🩴)NG @longdotxyz." }
  - { id: R-14, publisher: "@_laseasy", title: "flops/nvda on longxyz", url: "https://x.com/_laseasy/status/2094946459086885123", published_at: 2026-09-02T00:32:12Z, accessed_at: 2026-09-03T04:10:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "flops/nvda on longxyz 0x9dad613c96bd6e9d0f4fd840d53557dc5ede1e18 the founder of @longdotxyz … hidden gem posted by @Natan_benish … secret mascot of @longdotxyz worked into the LONG logo - L❨🩴❩NG" }
  - { id: R-15, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true." }
  - { id: R-16, publisher: DexScreener, title: "search KOLI NVDA distinct books", url: "https://api.dexscreener.com/latest/dex/search?q=KOLI%20NVDA", published_at: null, accessed_at: 2026-09-03T04:11:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "robinhood KOLI 0xb8D9F969dB56bb57353e36Fd0015D98e3A761E18 / NVDA. AI 0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18 / NVDA. microduck 0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725 / NVDA. ORBIO 0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3 / NVDA. RIPE 0x4D3f37a965b21aB4122e92Dd41D2693E742c883b / NVDA. FLOPS 0x9DAD613c96Bd6E9D0f4fd840D53557Dc5EdE1e18 / NVDA pair 0xe04a6984…0601." }
  - { id: R-17, publisher: X, title: "Flops (@Flops_rh) profile", url: "https://x.com/Flops_rh", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-27, EVT-2], excerpt: "title Flops (@Flops_rh) / X. meta description FLOPS/NVDA on L(🩴🩴)NG @longdotxyz. Profile links x.com/longdotxyz. No long.xyz website field this pass. Display name Flops." }
  - { id: R-18, publisher: Blockscout, title: "LaunchCreated and Initialize logs on create tx", url: "https://robinhoodchain.blockscout.com/tx/0xe59d63466924436708c79e15191b9e5cdde7b07e24461b91cdb4ceb933c4e2c5", published_at: 2026-08-28T03:07:36Z, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-14, CLM-15, EVT-5], excerpt: "OwnershipTransferred newOwner Airlock 0xeb7C…0862. PoolManager Initialize id 0xe04a69844e34253d3871942f6eccddcdec948b7f3129f8f473797d3631da0601 currency0 0x9DAD…1e18 currency1 0xd060…9EEC hooks 0x4e34…a544. LaunchCreated asset 0x9DAD…1e18 numeraire 0xd060…9EEC launcher 0x0b36…9bB9 normalizedTicker FLOPS deployedAt 1787886456. Lock beneficiaries 0x21E2…7A66 / 0xbE54…44b2." }
  - { id: R-19, publisher: Blockscout, title: "Address 0x4e34…a544 DopplerHookInitializer", url: "https://robinhoodchain.blockscout.com/address/0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "hash 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 name DopplerHookInitializer is_contract true is_verified true." }
  - { id: R-20, publisher: "@Flops_rh", title: "flip-flop to change the game", url: "https://x.com/Flops_rh/status/2095333936767406118", published_at: 2026-09-03T02:11:54Z, accessed_at: 2026-09-03T04:10:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "In 2024, Fartcoin led the wave and smashed limits. In 2026, it’s time for the flip-flop to change the game. L(🩴🩴)G" }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x9DAD…1e18?", checked: "DexScreener lists x.com/flops_rh and app.long.xyz/tokens/<ca>; @Flops_rh bio has no CA; app.long.xyz Cloudflare 403; Gecko has no website, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; retry app.long.xyz; search new posts that embed the CA and a handle" }
  - { priority: P1, question: "Does @longdotxyz or @Natan_benish name this CA as a Long mascot, or is that only third-party lore?", checked: "DexScreener farcaster.xyz/nathanbenish/0xe63aa1fd is SPA HTML; @_laseasy and @Flops_rh posted the lore; LongLauncher.create is on-chain, 2026-09-03", next: "open the Farcaster/Zora casts if a public API returns text; watch @longdotxyz for a CA pin" }
  - { priority: P1, question: "Does verified DopplerERC20V1 / LongLauncher source leave a privileged path after owner() is Airlock?", checked: "token owner() Airlock; Airlock owner() 0x21E2…7A66; Lock beneficiaries 5%/95%; factory() reverts, 2026-09-03", next: "read create and Airlock getAssetData in verified source on the explorer" }
  - { priority: P2, question: "Which aggregator slice should a card use when Gecko reserve is $103k and DexScreener liquidity is $119k?", checked: "Live Gecko reserve_in_usd 102719.87 volume 501817.71; DexScreener liquidity.usd 118647.59 volume.h24 516844.27, 2026-09-03", next: "keep both figures labeled by source until a verifier picks one" }
---

# FLOPS — research packet

## What it is

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against NVDA, the NVIDIA Robinhood Stock Token at 0xd060…9EEC. Traders buy and sell FLOPS on that book. NVDA is the rail. This token is not the NVIDIA stock token and is not the AI, microduck, ORBIO, or RIPE NVDA books. No official project domain was located this pass.

Themes: memecoin, stock-paired:NVDA, rwa

## Why it matters

The FLOPS/NVDA Uniswap v4 book printed about $502k of 24h volume on Gecko at collection, with DexScreener on the same pair near $517k volume and ~$119k liquidity. That is a live NVDA-quoted graduation, distinct from packed AI, microduck, ORBIO, and RIPE, and from in-flight KOLI. GET /rhj/assets lists NVDA at 0xd060…9EEC and has no FLOPS row.

## What could go wrong

USD liquidity figures on the FLOPS/NVDA book count both sides, and the quote side is NVDA, not USDG. Gecko and DexScreener disagree on reserve. No official handle was located, so comms surfaces stay unconfirmed-official. NVDA in /rhj/assets is the rail, not this token.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from EOA 0x0b36…9bB9 at 2026-08-28T03:07:36Z minted FLOPS supply 1e9*1e18 into Uniswap v4 poolId 0xe04a…0601 quoted against NVDA 0xd060…9EEC. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. factory() on the token reverts. [verified R-4 R-5 R-18]

Airlock getAssetData names NVDA as numeraire and records 0xdead LP slots. PoolManager is 0x8366…0951. DopplerHookInitializer Lock splits fees to 0x21E2…7A66 and 0xbE54…44b2. Secondary FLOPS/USDG and FLOPS/ETH books exist on DexScreener with far less liquidity than the NVDA book. [verified R-6 R-7 R-18]

## Control and security

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. Create-tx from 0x0b36…9bB9 has no code. [verified R-5 R-6]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified R-2 R-3 R-12] [unknown]

## Team and provenance

No official domain or bidirectional handle was located. DexScreener websites is the Long pad URL; app.long.xyz returned Cloudflare 403. DexScreener socials lists x.com/flops_rh; @Flops_rh display Flops, bio FLOPS/NVDA on L(🩴🩴)NG @longdotxyz, and a post embeds this CA. Flag unconfirmed-official and third-party-link. [claim R-7 R-13 R-17]

X user search for Flops also returned @Flops__Network (Flops Network), a different product. [claim R-17]

## Economics and activity

FLOPS/NVDA Uniswap v4 24h volume is 501817.71 USD and reserve_in_usd is 102719.87 at 2026-09-03T04:06:00Z from the Gecko pool endpoint. fdv_usd is 223095.68. Gecko token volume_usd.h24 is 503411.98 across all pools, not the NVDA book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 118647.59, volume.h24 516844.27, fdv/marketCap 219198. Blockscout holders_count 783. Pair created 2026-08-28T03:07:36Z. [claim R-1 R-7]

## Material risks

- Quote token NVDA 0xd060…9EEC is the Robinhood Token rail in GET /rhj/assets; FLOPS is not in that registry. [verified R-10 R-11]
- Pool USD reserve is FLOPS plus NVDA, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko reserve $102720 vs DexScreener liquidity $118648 on the same pool. [claim R-7 R-8]
- No official handle or domain this pass; @Flops_rh is a third-party-link. [claim R-7 R-13]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/NVDA/Airlock/launcher and the create tx, RPC name/symbol/owner/getAssetData, DexScreener, Gecko pool/token, /rhj/assets, @Flops_rh, and @_laseasy were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-10]
- Numbers: 501817.71 is the Gecko FLOPS/NVDA pool 24h volume, not the 503411.98 token all-pools figure. Reserve 102719.87 is that pool. DexScreener 516844.27 / 118647.59 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this FLOPS is packed AI, microduck, ORBIO, or RIPE, is in-flight KOLI, is the NVDA stock token, or is Flops Network. Different CAs, pair ids, and (for NVDA) /rhj/assets argue against those. [inference R-7 R-10 R-16]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse` origin/main expected 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no flops / FLOPS / 0x9DAD…1e18.
- Explorer: Blockscout api/v2 token, impl, factory, NVDA, Airlock, LongLauncher, DopplerHookInitializer, create tx 0xe59d…e2c5, LaunchCreated / Initialize / Lock logs, holders. RPC eth_getCode/eth_call with Chrome UA at blocks 53123630–53124140.
- Aggregators: DexScreener latest/dex/tokens and search KOLI NVDA; Gecko token, pool, token?include=top_pools.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 NVDA, 0 FLOPS.
- Social: X keyword FLOPS NVDA; user search Flops / flops_rh; x.com/Flops_rh profile HTML; farcaster.xyz/nathanbenish/0xe63aa1fd SPA; app.long.xyz Cloudflare 403.
- Failed: app.long.xyz HTTP 403; Warpcast /v2/cast hash 0xe63aa1fd path does not exist; x_user_search flops_rh returned unrelated handles; Blockscout token factory() reverts (creator_address_hash used instead).
- Time: collection 2026-09-03T04:05Z–2026-09-03T04:12Z.
