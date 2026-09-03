---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: icoin
name: ICOIN
packet_tier: seed
as_of: 2026-09-03T03:35:00Z
prior_packet: null
supersedes: null
owned_slugs: [icoin]
allowed_paths:
  - research/inbox/packets/icoin/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: iCoin
  aliases: [ICOIN]
  symbols: [ICOIN]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites and the @iCoinRH profile website both point at app.long.xyz/tokens/0x5d6EF…, the LONG pad token page, not an iCoin-owned domain"
  official_handle: "@iCoinRH"
  repository: "NULL — no GitHub org or repository URL on DexScreener, the @iCoinRH profile, Blockscout, or the LONG token URL this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "ICOIN is the ERC-20 at 0x5d6EF…1e18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; @iCoinRH is not @longdotxyz"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the ICOIN/AAPL pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0x47d9211c…6199 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "ICOIN is 0x5d6EF…1e18 paired to AAPL 0xaF3D…93f9"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x5d6EF…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; LongLauncher.create at 2026-07-22T13:08:44Z minted iCoin / ICOIN into Uniswap v4 pool 0xc391…4188 quoted against Apple • Robinhood Token AAPL 0xaF3D…93f9. @iCoinRH pins that CA and lists the LONG token page. [R-1] [R-2] [R-4] [R-5] [R-6] [R-8] [R-9]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-4, CLM-5], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-12], note: "" }

links:
  - { kind: x, url: "https://x.com/iCoinRH", authenticity: confirmed }
  - { kind: app, url: "https://app.long.xyz/tokens/0x5d6ef090a1461b11c9427ac319260122d1c61e18", authenticity: unconfirmed }

deployments:
  - label: ICOIN token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x5d6EF090a1461B11c9427aC319260122D1C61e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:29:00Z
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
      seen: 2026-09-03T03:29:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:29:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-17]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:29:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6]
  - label: Apple • Robinhood Token (pair quote)
    role: token
    address:
      value: "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-1, R-6, R-15]
  - label: Community vault (LongFeeVaultFactory deployVault)
    role: vault
    address:
      value: "0x24c2410941B4603CF5504810d5dF841dB4d303ad"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-11, R-13, R-14]

metrics:
  - { kind: volume_24h, value: 6198765.33, currency: USD, as_of: 2026-09-03T03:28:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc39187cec78a076c41a4085598b4cc05be2ed9b04a3443167471fa0fc4984188 volume_usd.h24", class: claim, receipt_ids: [R-2] }
  - { kind: tvl, value: 770912.07, currency: USD, as_of: 2026-09-03T03:28:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc391…4188 reserve_in_usd (ICOIN/AAPL pool, not an all-pools figure)", class: claim, receipt_ids: [R-2] }
  - { kind: market_cap, value: 3560818.50, currency: USD, as_of: 2026-09-03T03:28:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc391…4188 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-2] }
  - { kind: volume_24h, value: 6035283.22, currency: USD, as_of: 2026-09-03T03:28:27Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x5d6EF…1e18 pair 0xc391…4188 ICOIN/AAPL Uniswap v4 volume.h24", class: claim, receipt_ids: [R-1] }
  - { kind: tvl, value: 508312.19, currency: USD, as_of: 2026-09-03T03:28:27Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x5d6EF…1e18 pair 0xc391…4188 liquidity.usd", class: claim, receipt_ids: [R-1] }
  - { kind: market_cap, value: 3457851, currency: USD, as_of: 2026-09-03T03:28:27Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x5d6EF…1e18 pair 0xc391…4188 fdv/marketCap", class: claim, receipt_ids: [R-1] }
  - { kind: holders, value: 2982, currency: null, as_of: 2026-09-03T03:29:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/addresses/0x5d6EF…1e18 token.holders_count", class: claim, receipt_ids: [R-4] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com block 0x32a469e (53102238): token 0x5d6EF…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599; name() iCoin; symbol() ICOIN; decimals 18; totalSupply 999874644802839135578551341; owner() Airlock 0xeb7c0347…0862; factory() reverted. AAPL 0xaF3D…93f9 eth_getCode 283 bytes. Vault 0x24c2…03ad eth_getCode 6550 bytes. Deployer 0xd947…Ef4E eth_getCode empty." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:29:00Z, receipt_ids: [R-4, R-5, R-13, R-14, R-15, R-17], result: "Blockscout api/v2 token 0x5d6EF…1e18 name iCoin is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator 0x1B37…b69a creation tx 0x47d9211c…6199; token name iCoin symbol ICOIN holders_count 2982 total_supply 999874644802839135578551341. Tx timestamp 2026-07-22T13:08:44Z block 16449441 from 0xd947…Ef4E to LongLauncher method create; decoded numeraire 0xaF3D…93f9 tokenFactory 0x1B37…b69a name iCoin symbol ICOIN supply 1e27. Vault 0x24c2…03ad is_verified false creator LongFeeVaultFactory 0xbA85…319A tx 0x5cffe226…0428 2026-09-03T00:59:42Z method deployVault from the same 0xd947…Ef4E." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T03:28:27Z, receipt_ids: [R-1, R-2, R-3], result: "DexScreener latest/dex/tokens/0x5d6EF…1e18 top pair ICOIN/AAPL Uniswap v4 0xc391…4188 liquidity.usd 508312.19 volume.h24 6035283.22 fdv 3457851 pairCreatedAt 1784725724000 (2026-07-22T13:08:44Z) info.websites app.long.xyz/tokens/0x5d6ef…1e18 socials x.com/iCoinRH. Gecko pool same address name ICOIN / AAPL dex bankr-robinhood volume_usd.h24 6198765.33 reserve_in_usd 770912.07 fdv_usd 3560818.50 pool_created_at 2026-07-22T13:08:44Z market_cap_usd null. Gecko token volume_usd.h24 6737936.26 (all pools)." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-8, R-9], result: "@iCoinRH bio The future of coin. Designed to be held. iCoin/AAPL on RH chain. Profile website app.long.xyz/tokens/0x5d6EF…. Pinned 2026-07-23T14:36:34Z CA 0x5d6ef090a1461b11c9427ac319260122d1c61e18 paired with $AAPL on @longdotxyz. DexScreener socials twitter https://x.com/iCoinRH." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0x5d6EF…1e18) word0 numeraire 0xaF3D76f1…93f9; word5 token 0x5d6EF090…1e18; word1/word2 0xdead; Airlock owner() 0x21e2ce70…7a66. AAPL name() Apple • Robinhood Token; symbol() AAPL." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 iCoin/ICOIN into a Uniswap v4 pool quoted against AAPL 0xaF3D…93f9; Airlock getAssetData numeraire is that AAPL; LP addresses in getAssetData include 0xdead", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: iCoin, class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: ICOIN, class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: identity.handle, value: "@iCoinRH", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x5d6EF090a1461B11c9427aC319260122D1C61e18", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-4, R-5, R-6, R-9], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG: tx 0x47d9211c…6199 from EOA 0xd947…Ef4E called LongLauncher.create; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from census LONG (the factory) and Bankr (the agent).", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset Apple • Robinhood Token AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2, R-6, R-15], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 pool 0xc39187cec78a076c41a4085598b4cc05be2ed9b04a3443167471fa0fc4984188; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood", class: verified, observed_at: 2026-09-03T03:28:27Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-2, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko ICOIN/AAPL pool 0xc391…4188 volume_usd.h24 6198765.33 reserve_in_usd 770912.07 fdv_usd 3560818.50 at 2026-09-03T03:28:00Z (pool slice, not Gecko token all-pools 6737936.26)", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener same pair liquidity.usd 508312.19 volume.h24 6035283.22 fdv/marketCap 3457851 at 2026-09-03T03:28:27Z", class: verified, observed_at: 2026-09-03T03:28:27Z, receipt_ids: [R-1], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 2982, class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from EOA 0xd9479a721dc72e42385BAa557E904D36ac21Ef4E (no code)", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on DexScreener, the @iCoinRH profile, Blockscout, or the LONG token URL this pass", class: unknown, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@iCoinRH.role", value: project, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@iCoinRH.slug", value: icoin, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@iCoinRH.flags", value: wrong-chain, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.domain, value: "NULL — DexScreener websites and @iCoinRH profile website are app.long.xyz/tokens/0x5d6EF… (LONG pad), not an iCoin domain; GET of that URL returned Cloudflare 403 this pass", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-8, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: relationship, value: "Gecko dex id bankr-robinhood on the ICOIN/AAPL pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge ICOIN into census bankr.", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-23, field: candidate, value: "icoin | ICOIN | @iCoinRH | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: deployment.address, value: "0x24c2410941B4603CF5504810d5dF841dB4d303ad", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-11, R-13, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "@iCoinRH 2026-09-03T00:58:04Z Community Mode: ON quoting @longdotxyz; 2026-09-03T01:22:22Z posted AAPL fee split 80% community vault / 20% project and vault 0x24c2…03ad", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13]
    material_effect: "Same ICOIN/AAPL pool 0xc391…4188: Gecko reserve_in_usd 770912.07 vs DexScreener liquidity.usd 508312.19; 24h volume 6198765.33 vs 6035283.22; fdv 3560818.50 vs 3457851. A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "@iCoinRH posted Community Mode AAPL fee split"
    summary: "@iCoinRH posted AAPL fees 80% community vault / 20% project, vault 0x24c2…03ad."
    occurred_at: 2026-09-03T01:22:22Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [communications.status, control.privileged-role]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-2
    type: onchain
    title: "LongFeeVaultFactory deployVault for ICOIN community vault"
    summary: "Tx 0x5cffe226… from 0xd947…Ef4E called deployVault; vault 0x24c2…03ad created at 00:59:42Z."
    occurred_at: 2026-09-03T00:59:42Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13, R-14]
  - id: EVT-3
    type: company
    title: "@iCoinRH posted Community Mode: ON"
    summary: "@iCoinRH posted Community Mode: ON, quoted @longdotxyz 5 Aug Community Mode post, tagged LONG."
    occurred_at: 2026-09-03T00:58:04Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [communications.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-4
    type: ct
    title: "@0xSammy posted iCOIN launched an hour ago"
    summary: "@0xSammy replied iCOIN launched an hour ago. Create tx is 2026-07-22T13:08:44Z."
    occurred_at: 2026-09-02T23:14:45Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [activity.status, lifecycle]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-5
    type: onchain
    title: "Gecko ICOIN/AAPL 24h volume $6.20M, liquidity $771k"
    summary: "Gecko pool 0xc391…4188 volume_usd.h24 6198765 reserve_in_usd 770912 fdv_usd 3560818."
    occurred_at: 2026-09-03T03:28:00Z
    observed_at: 2026-09-03T03:28:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-2]
  - id: EVT-6
    type: company
    title: "@iCoinRH pinned CA 0x5d6ef…1e18 vs AAPL on LONG"
    summary: "Pinned 2026-07-23: Meet the people behind $iCoin. Paired with $AAPL on @longdotxyz. CA listed."
    occurred_at: 2026-07-23T14:36:34Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [identity.handle, deployment.address]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-7
    type: onchain
    title: "LongLauncher.create minted ICOIN against AAPL"
    summary: "Tx 0x47d9211c… called LongLauncher.create; iCoin 0x5d6EF…1e18 created at block 16449441."
    occurred_at: 2026-07-22T13:08:44Z
    observed_at: 2026-09-03T03:29:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]

receipts:
  - { id: R-1, publisher: DexScreener, title: "ICOIN token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x5d6EF090a1461B11c9427aC319260122D1C61e18", published_at: null, accessed_at: 2026-09-03T03:28:27Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-13, CLM-20, CLM-22, CLM-23], excerpt: "pair 0xc39187cec78a076c41a4085598b4cc05be2ed9b04a3443167471fa0fc4984188 chainId robinhood dexId uniswap labels v4 base iCoin/ICOIN 0x5d6EF…1e18 quote Apple • Robinhood Token/AAPL 0xaF3D…93f9 liquidity.usd 508312.19 volume.h24 6035283.22 fdv 3457851 pairCreatedAt 1784725724000. websites app.long.xyz/tokens/0x5d6ef… socials x.com/iCoinRH." }
  - { id: R-2, publisher: GeckoTerminal, title: "ICOIN/AAPL pool on Bankr (Robinhood)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc39187cec78a076c41a4085598b4cc05be2ed9b04a3443167471fa0fc4984188", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-12, CLM-22, EVT-5], excerpt: "attributes.name ICOIN / AAPL address 0xc39187ce…4188 pool_created_at 2026-07-22T13:08:44Z volume_usd.h24 6198765.33036711 reserve_in_usd 770912.0664 fdv_usd 3560818.497 market_cap_usd null. relationships.dex.id bankr-robinhood. base robinhood_0x5d6ef…1e18 quote robinhood_0xaf3d76f1…93f9." }
  - { id: R-3, publisher: GeckoTerminal, title: "iCoin token on Robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5d6ef090a1461b11c9427ac319260122d1c61e18", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12], excerpt: "attributes.address 0x5d6ef090a1461b11c9427ac319260122d1c61e18 name iCoin symbol ICOIN decimals 18 total_supply 1e27 normalized_total_supply 1000000000.0 volume_usd.h24 6737936.26271341 fdv_usd 3558331.14797648 market_cap_usd null. top_pools first robinhood_0xc39187ce…4188." }
  - { id: R-4, publisher: Blockscout, title: "ICOIN 0x5d6EF090a1461B11c9427aC319260122D1C61e18", url: "https://robinhoodchain.blockscout.com/address/0x5d6EF090a1461B11c9427aC319260122D1C61e18", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-5, CLM-6, CLM-7, CLM-11, CLM-14, CLM-21, CLM-23, EVT-7], excerpt: "api/v2: hash 0x5d6EF090a1461B11c9427aC319260122D1C61e18 name iCoin is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x47d9211cab9a3a697a2064aecce9702f1c2978bde35446450a8f6d8abe1e6199 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97F…C599. token name iCoin symbol ICOIN holders_count 2982 total_supply 999874644802839135578551341." }
  - { id: R-5, publisher: Blockscout, title: "ICOIN creation tx 0x47d9211c…", url: "https://robinhoodchain.blockscout.com/tx/0x47d9211cab9a3a697a2064aecce9702f1c2978bde35446450a8f6d8abe1e6199", published_at: 2026-07-22T13:08:44Z, accessed_at: 2026-09-03T03:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-26, EVT-7], excerpt: "timestamp 2026-07-22T13:08:44.000000Z status ok block_number 16449441 from 0xd9479a721dc72e42385BAa557E904D36ac21Ef4E to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0xaF3D…93f9 tokenFactory 0x1B37…b69a name iCoin symbol ICOIN initial supply 1e27. Token mint 1e27 ICOIN to Airlock then PoolManager 0x8366…0951." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode and ERC-20 / Airlock calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-8, CLM-15, CLM-21], excerpt: "eth_blockNumber 0x32a469e (53102238). token eth_getCode 44 bytes clone of 0x3be8b97f…c599. name() iCoin symbol() ICOIN decimals 18 totalSupply 999874644802839135578551341 owner() 0xeb7c0347…0862 factory() revert. Airlock owner() 0x21e2ce70…7a66 getAssetData numeraire 0xaf3d76f1…93f9 token 0x5d6ef090…1e18. AAPL name Apple • Robinhood Token. Vault code 6550 bytes. Deployer code empty." }
  - { id: R-7, publisher: GeckoTerminal, title: "ICOIN token pools page 1", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5d6ef090a1461b11c9427ac319260122d1c61e18/pools?page=1", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "n 20. ICOIN / AAPL 0xc39187ce…4188 volume_usd.h24 6205931.63766326 reserve_in_usd 771155.7884 dex bankr-robinhood. ICOIN / USDG 5% 0xcca8a63e…480c vol 383859.16 reserve 48422.96 dex uniswap-v4-robinhood. ICOIN / WETH 4% 0x957fd042…9602 vol 130288.79 reserve 17398.69." }
  - { id: R-8, publisher: "@iCoinRH", title: "iCoin profile", url: "https://x.com/iCoinRH", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-17, CLM-18, CLM-20], excerpt: "Display name iCoin, handle @iCoinRH, bio The future of coin. Designed to be held. iCoin/AAPL on RH chain. Website app.long.xyz/tokens/0x5d6EF…. Joined July 2026. 570 followers. 70 posts." }
  - { id: R-9, publisher: "@iCoinRH", title: "Pinned CA vs AAPL on LONG", url: "https://x.com/iCoinRH/status/2080301048015847515", published_at: 2026-07-23T14:36:34Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-17, CLM-18, EVT-6], excerpt: "Meet the people behind $iCoin. Paired with $AAPL on @longdotxyz. CA: 0x5d6ef090a1461b11c9427ac319260122d1c61e18" }
  - { id: R-10, publisher: "@iCoinRH", title: "Community Mode: ON", url: "https://x.com/iCoinRH/status/2095315357443772464", published_at: 2026-09-03T00:58:04Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-19, CLM-25, EVT-3], excerpt: "Community Mode: ON Creator fees now work for the community. Our share goes back into growing iCoin. We made the coin. Now we're making sure everyone knows about it. Until there's an $iCoin in every pocket. @longdotxyz" }
  - { id: R-11, publisher: "@iCoinRH", title: "How Community Mode works", url: "https://x.com/iCoinRH/status/2095321468959912030", published_at: 2026-09-03T01:22:22Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-19, CLM-24, CLM-25, EVT-1], excerpt: "How Community Mode works: Every trade generates fees. $AAPL fees: 80% community vault 20% goes to us, also going back into iCoin. Community Vault: 0x24c2410941B4603CF5504810d5dF841dB4d303ad. Check out our vault here on Long. Post also names solana:9uT7rob8TKKnzvxqkD5nj9UMw16ZPJByEW37pMcHpump." }
  - { id: R-12, publisher: "@0xSammy", title: "iCOIN launched an hour ago", url: "https://x.com/0xSammy/status/2095289356168712328", published_at: 2026-09-02T23:14:45Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "iCOIN launched an hour ago lmao" }
  - { id: R-13, publisher: Blockscout, title: "Community vault 0x24c24109…03ad", url: "https://robinhoodchain.blockscout.com/address/0x24c2410941B4603CF5504810d5dF841dB4d303ad", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-24, EVT-2], excerpt: "api/v2: hash 0x24c2410941B4603CF5504810d5dF841dB4d303ad is_contract true is_verified false creator_address_hash 0xbA85d8FAd36c57F4890A0F3c414ed87a50B9319A creation_transaction_hash 0x5cffe22662a18ac43325559904499f08c66a582828bf2146d891e99c59950428." }
  - { id: R-14, publisher: Blockscout, title: "deployVault tx 0x5cffe226…", url: "https://robinhoodchain.blockscout.com/tx/0x5cffe22662a18ac43325559904499f08c66a582828bf2146d891e99c59950428", published_at: 2026-09-03T00:59:42Z, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-24, EVT-2], excerpt: "timestamp 2026-09-03T00:59:42.000000Z status ok block_number 53013821 method deployVault from 0xd9479a721dc72e42385BAa557E904D36ac21Ef4E to LongFeeVaultFactory 0xbA85d8FAd36c57F4890A0F3c414ed87a50B9319A." }
  - { id: R-15, publisher: Blockscout, title: "AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", url: "https://robinhoodchain.blockscout.com/token/0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10], excerpt: "api/v2/tokens: name Apple • Robinhood Token symbol AAPL decimals 18 holders_count 61552 total_supply 14347572045520000000000." }
  - { id: R-16, publisher: Cloudflare, title: "app.long.xyz token page 403", url: "https://app.long.xyz/tokens/0x5d6ef090a1461b11c9427ac319260122d1c61e18", published_at: null, accessed_at: 2026-09-03T03:31:03Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-20], excerpt: "HTTP/2 403. title Attention Required! | Cloudflare. server cloudflare. Body: Please enable cookies." }
  - { id: R-17, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "api/v2 smart-contracts: name DopplerERC20V1 compiler_version v0.8.26+commit.8a97fa7a is_verified true is_fully_verified false is_partially_verified true file_path src/tokens/DopplerERC20V1.sol." }

gaps:
  - { priority: P1, question: "What does unverified LongFeeVaultFactory 0xbA85…319A / vault 0x24c2…03ad actually do with AAPL fees?", checked: "Blockscout vault is_verified false, 6550 bytes; @iCoinRH posted 80/20 AAPL split; no verified source this pass, 2026-09-03", next: "read deployVault calldata and any later verified source on the factory" }
  - { priority: P1, question: "Is solana:9uT7rob8TKKnzvxqkD5nj9UMw16ZPJByEW37pMcHpump an X cashtag resolver for $iCoin or a second mint the handle operates?", checked: "@iCoinRH posts from 31 Aug–3 Sep include that Solana mint string; pinned post and profile website use RH CA 0x5d6EF…1e18; flag wrong-chain", next: "open the Solana mint page and see whether it links back to @iCoinRH or 0x5d6EF…1e18" }
  - { priority: P2, question: "What does the LONG token page show for Community Mode once Cloudflare is bypassed?", checked: "GET app.long.xyz/tokens/0x5d6ef… HTTP 403 Cloudflare, 2026-09-03T03:31:03Z", next: "retry the token page or use a LONG API if one is published" }
  - { priority: P2, question: "Did Gecko trending_pools list ICOIN/AAPL at the ~$789k / ~$6.2M capture named in the assignment?", checked: "Live Gecko pool reserve 770912 vol 6198765; trending_pools page 1 first eight had no ICOIN this pass", next: "archive a trending screenshot if the pool returns to that board" }
---

# ICOIN — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). LongLauncher.create on 2026-07-22 minted iCoin (ICOIN) and seeded the ICOIN/AAPL book. Traders buy and sell ICOIN against AAPL. @iCoinRH is the project handle; the token page lives on app.long.xyz.

Themes: memecoin, stock-paired:AAPL

## Why it matters

The ICOIN/AAPL Uniswap v4 book is the AAPL-quoted memecoin with the largest 24h volume in this pass, about $6.20M on Gecko with $771k pool reserve. @iCoinRH turned on LONG Community Mode on 3 Sep and posted an AAPL fee split into vault 0x24c2…03ad. @0xSammy posted that iCOIN launched an hour ago the evening before; the create transaction is 22 Jul.

## What could go wrong

USD liquidity on the ICOIN/AAPL book counts both ICOIN and AAPL. Gecko reserve and DexScreener liquidity for the same pool differ by about $260k this pass. Token owner() is Airlock; the community vault source is unverified. @iCoinRH posts also name a Solana mint that is not the 4663 contract.

## Product and mechanics

LongLauncher.create from EOA 0xd947…Ef4E at 2026-07-22T13:08:44Z cloned DopplerERC20V1 as iCoin / ICOIN, supply 1e9*1e18, numeraire AAPL 0xaF3D…93f9, tokenFactory 0x1B37…b69a. Airlock getAssetData returns that AAPL as numeraire and the token as word5; two slots are 0xdead. Uniswap v4 PoolManager 0x8366…0951 received nearly the full supply in the create transaction. [verified R-4 R-5 R-6]

DexScreener labels the primary book Uniswap v4 ICOIN/AAPL 0xc391…4188. Gecko names the same pool ICOIN / AAPL with dex bankr-robinhood. Secondary ICOIN/USDG and ICOIN/WETH Uniswap v4 books exist with far less liquidity. [verified R-1 R-2 R-7]

@iCoinRH posted Community Mode fee routing: AAPL fees 80% to community vault 0x24c2…03ad and 20% to the project. The vault was created 77 seconds after that Mode: ON post via LongFeeVaultFactory.deployVault from the same deployer EOA. Vault bytecode is unverified. [claim R-10 R-11] [verified R-13 R-14]

## Control and security

token owner() returns Airlock 0xeb7C…0862. Airlock owner() returns 0x21E2…7A66. The create-tx and deployVault from-address 0xd947…Ef4E has no code. DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, v0.8.26). LongLauncher is fully verified. The vault is not verified. [verified R-5 R-6 R-13 R-17]

No audit report URL was located this pass. [unknown]

## Team and provenance

@iCoinRH bio states iCoin/AAPL on RH chain. Profile website is the LONG token page for 0x5d6EF…1e18. Pinned 23 Jul post publishes that CA and names @longdotxyz. DexScreener socials list the same handle. No iCoin-owned domain. Flag wrong-chain: later @iCoinRH posts include solana:9uT7…pump beside the RH pair. [verified R-1 R-8 R-9] [claim R-11]

## Economics and activity

Gecko ICOIN/AAPL pool 24h volume is 6198765.33 USD and reserve_in_usd is 770912.07 at 2026-09-03T03:28:00Z. fdv_usd is 3560818.50. Gecko token volume_usd.h24 is 6737936.26 across all pools, not the AAPL book. [claim R-2 R-3]

DexScreener same pair: liquidity.usd 508312.19, volume.h24 6035283.22, fdv/marketCap 3457851. Blockscout holders_count 2982. Pair created 2026-07-22T13:08:44Z. [claim R-1 R-4]

Gecko trending_pools page 1 first eight did not include ICOIN this pass. Assignment lead of Gecko ICOIN/AAPL liq ~$789k vol ~$6.2M is close to the live pool slice ($771k / $6.20M), not the DexScreener $508k liquidity print. [claim R-2]

## Material risks

- Quote token AAPL is a Robinhood Stock Token; pool USD reserve is ICOIN plus AAPL, not a USDG backstop. [verified R-2 R-15]
- Gecko reserve and DexScreener liquidity for pool 0xc391…4188 disagree this pass. [claim R-1 R-2]
- Community vault 0x24c2…03ad is unverified. [verified R-13]
- @iCoinRH posts name a Solana mint in addition to the 4663 CA. [claim R-11]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: DexScreener token API, Gecko pool/token/pools, Blockscout token/create tx/vault/deployVault/AAPL/impl, RPC eth_getCode and eth_call, @iCoinRH profile and three posts, @0xSammy, and the LONG token URL 403 were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-2 R-4 R-5 R-6 R-8]
- Numbers: 6198765.33 is the Gecko ICOIN/AAPL pool 24h volume, not the 6737936.26 token all-pools figure. Reserve 770912.07 is that pool. DexScreener 6035283.22 / 508312.19 is the same pair, different aggregator. [claim R-1 R-2 R-3]
- Adversarial: the strongest contrary reading is that ICOIN is a Bankr agent launch because Gecko labels the pool bankr-robinhood. The create transaction calls LongLauncher.create from 0xd947…Ef4E, and @iCoinRH names @longdotxyz. [inference R-2 R-5 R-9]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no icoin / ICOIN / iCoin / 0x5d6EF…1e18.
- Explorer: Blockscout api/v2 token, create tx 0x47d9211c…6199, vault, deployVault 0x5cffe226…0428, AAPL token, DopplerERC20V1 source. RPC eth_getCode/eth_call with Chrome UA at blocks 53101940–53102238.
- Aggregators: DexScreener latest/dex/tokens; Gecko pool, token, token/pools, trending_pools page 1.
- Social: X user iCoinRH; from:iCoinRH; from:0xSammy ICOIN; pinned 2080301048015847515; Community Mode posts 2095315357443772464 and 2095321468959912030; Sammy 2095289356168712328.
- Failed: app.long.xyz/tokens/0x5d6ef… HTTP 403 Cloudflare; token factory() reverts (creator_address_hash used instead); Gecko trending_pools page 1 did not list ICOIN.
- Time: collection 2026-09-03T03:28Z–2026-09-03T03:35Z.
