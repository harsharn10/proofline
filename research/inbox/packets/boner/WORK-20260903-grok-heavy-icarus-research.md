---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: boner
name: BONER
packet_tier: seed
as_of: 2026-09-03T03:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [boner]
allowed_paths:
  - research/inbox/packets/boner/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: BONER
  aliases: [Boner Coin]
  symbols: [BONER]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://boneronlong.xyz
  official_handle: "@bonercoinlong"
  repository: "NULL — no GitHub org or repository URL on boneronlong.xyz, the @bonercoinlong profile, or the DopplerERC20V1 source this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED; entity_kind protocol"
        - "BONER is the ERC-20 at 0x98096d…1E18 created through LongLauncher.create; entity_kind token"
        - "No shared domain or handle; boneronlong.xyz and @bonercoinlong do not operate the pad"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA, site artificialinu.com / @ArtificiallyInu"
        - "BONER is 0x98096d…1E18 paired to HIMS; different CA, handle, domain, and quote asset"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x98096d…1E18 exists on 4663 as an EIP-1167 DopplerERC20V1 clone; creation tx 0x0de235b4… calls LongLauncher.create with numeraire HIMS 0xCceE82…3D09. Canonical book is Uniswap v4 BONER/HIMS 0x9c89…640d. Distinct from the LONG factory. [R-2] [R-3] [R-4] [R-5] [R-13]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-7, CLM-13, CLM-14], note: "" }

links:
  - { kind: site, url: "https://boneronlong.xyz", authenticity: confirmed }
  - { kind: app, url: "https://app.long.xyz/tokens/0x98096d17e191b3da1d5f99a6d7b3584351b11e18", authenticity: confirmed }
  - { kind: x, url: "https://x.com/bonercoinlong", authenticity: confirmed }
  - { kind: other, url: "https://boner.fyi", authenticity: unconfirmed }

deployments:
  - label: BONER token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x98096d17e191B3dA1d5f99a6D7b3584351b11E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-2, R-3, R-4]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-15]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-16]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-17]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-18]
  - label: Quote asset HIMS stock token
    role: other
    address:
      value: "0xCceE82fE024c36fA15E1005edE3E9e4787e23D09"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-19]
  - label: LONG fee receiver / Spank Bank wallet
    role: other
    address:
      value: "0x79aEaE6a47ff2e551F60bd87DBd6358eFeaF4DC8"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-13]

metrics:
  - { kind: tvl, value: 2295892.21, currency: USD, as_of: 2026-09-03T03:25:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x98096d…1E18 pair 0x9c89…640d BONER/HIMS Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-5] }
  - { kind: volume_24h, value: 3729830.8, currency: USD, as_of: 2026-09-03T03:25:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x98096d…1E18 pair 0x9c89…640d BONER/HIMS volume.h24", class: claim, receipt_ids: [R-5] }
  - { kind: volume_24h, value: 9609225.64, currency: USD, as_of: 2026-09-03T03:25:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x98096d…1E18 pair 0xfec7…a4d4 BONER/USDG Uniswap v4 volume.h24", class: claim, receipt_ids: [R-5] }
  - { kind: market_cap, value: 47067653, currency: USD, as_of: 2026-09-03T03:25:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x98096d…1E18 pair 0x9c89…640d marketCap", class: claim, receipt_ids: [R-5] }
  - { kind: tvl, value: 3295257.08, currency: USD, as_of: 2026-09-03T03:25:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x98096d…1e18 total_reserve_in_usd", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 18586776.21, currency: USD, as_of: 2026-09-03T03:25:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x98096d…1e18 volume_usd.h24", class: claim, receipt_ids: [R-6] }
  - { kind: market_cap, value: 46372736.95, currency: USD, as_of: 2026-09-03T03:25:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x98096d…1e18 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-6] }
  - { kind: holders, value: 16057, currency: null, as_of: 2026-09-03T03:31:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x98096d…1E18 holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-4], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a4386 (53101446). eth_getCode 0x98096d…1E18 44 bytes EIP-1167 pointing at 0x3Be8B97F…C599; name() Boner Coin; symbol() BONER; decimals 18; totalSupply 1e27; owner() 0xeb7C0347…0862; EIP-1967 implementation slot zero. eth_getCode non-empty: LongLauncher 5826, DopplerERC20V1Factory 1912, DopplerERC20V1 13927, Airlock 5695, HIMS 283" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-15, R-16, R-17, R-18, R-19], result: "Blockscout api/v2/addresses/0x98096d…1E18: is_contract true is_verified true name Boner Coin proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97F…C599 creator_address_hash 0x1B37…b69a creation_transaction_hash 0x0de235b4…af47; token symbol BONER holders_count 16057 total_supply 1e27. Implementation/factory/launcher/airlock is_verified true. HIMS BeaconProxy name Hims & Hers Health, Inc. • Robinhood Token total_supply 73318796000000000000000 holders_count 3123" }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-3], result: "Tx 0x0de235b4… timestamp 2026-08-20T20:59:46Z block 41726520 status ok method create to LongLauncher 0x22e9…eeED from 0x79aEaE…4DC8 (eip7702 CaliburEntry). Decoded create data[0]/data[1] 1e27, data[2] numeraire 0xCceE82…3D09, data[3] DopplerERC20V1Factory 0x1B37…b69a" }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T03:25:00Z, receipt_ids: [R-5], result: "DexScreener latest/dex/tokens/0x98096d…1E18: 30 robinhood pairs. Top BONER/HIMS Uniswap v4 0x9c89…640d quote 0xCceE82…3D09 liquidity.usd 2295892.21 volume.h24 3729830.8 marketCap 47067653 pairCreatedAt 2026-08-20T20:59:46Z; BONER/USDG Uniswap v4 0xfec7…a4d4 volume.h24 9609225.64 liquidity.usd 688499.65. info.websites app.long.xyz/tokens/0x9809… socials x.com/bonercoinlong" }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-7, R-8, R-13], result: "boneronlong.xyz publishes CA 0x98096d…1e18, HIMS 0xCceE82…3D09, LONG token page, and https://x.com/bonercoinlong. @bonercoinlong bio HARD MONEY on LONG, website boneronlong.xyz; pinned 2026-08-21T14:33:41Z posts the same CA. app.long.xyz/tokens/0x9809… lists $BONER Boner Coin anchored to HIMS 0xccee82…3d09 supply 1,000,000,000" }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-03T03:25:00Z, receipt_ids: [R-6], result: "Gecko networks/robinhood/tokens/0x98096d…1e18: name Boner Coin symbol BONER decimals 18 total_supply 1e27 price_usd 0.04637273695 fdv_usd 46372736.9453133 market_cap_usd null total_reserve_in_usd 3295257.08 volume_usd.h24 18586776.2067465" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 ERC-20 created through LongLauncher.create; numeraire HIMS 0xCceE82fE024c36fA15E1005edE3E9e4787e23D09; canonical book Uniswap v4 BONER/HIMS 0x9c89b04303dfa76f3f6fb02c2b77be0e8a00ab8fa00d507119acd54ab3e8640d", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://boneronlong.xyz", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@bonercoinlong", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-7, R-8], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x98096d17e191B3dA1d5f99a6D7b3584351b11E18", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: "BONER", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-3, R-5], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED created the token in tx 0x0de235b4… at 2026-08-20T20:59:46Z; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-3, R-17], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset HIMS 0xCceE82fE024c36fA15E1005edE3E9e4787e23D09 (Hims & Hers Health, Inc. • Robinhood Token)", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-3, R-5, R-19], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 BONER/HIMS 0x9c89…640d created with the token; later Uniswap v4 BONER/USDG 0xfec7…a4d4 and Uniswap v3 BONER/WETH 0xBd5c…e6b8", class: verified, observed_at: 2026-09-03T03:25:00Z, receipt_ids: [R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: identity.name, value: "Boner Coin", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-4, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-3, R-5, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Distinct from LONG the factory at app.long.xyz / @longdotxyz. BONER is one LongLauncher.create output listed on the pad; it does not operate LongLauncher, TickerAirlockFactory, or Airlock", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-3, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener BONER/HIMS Uniswap v4 liquidity.usd 2295892.21 volume.h24 3729830.8 marketCap 47067653", class: verified, observed_at: 2026-09-03T03:25:00Z, receipt_ids: [R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "DexScreener BONER/USDG Uniswap v4 0xfec7…a4d4 volume.h24 9609225.64 liquidity.usd 688499.65", class: verified, observed_at: 2026-09-03T03:25:00Z, receipt_ids: [R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Gecko token volume_usd.h24 18586776.2067465 fdv_usd 46372736.9453133 total_reserve_in_usd 3295257.08 market_cap_usd null", class: verified, observed_at: 2026-09-03T03:25:00Z, receipt_ids: [R-6], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: 16057, class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-18, field: control.owner, value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-19, field: security.audit, value: "No audit report URL was located on boneronlong.xyz, the X profile, the LONG token page, or the DopplerERC20V1 source this pass", class: unknown, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@bonercoinlong.role", value: project, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@bonercoinlong.slug", value: boner, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: "account.@bonercoinlongg.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@bonercoinlongX.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-25, field: control.proxy, value: "EIP-1167 clone of DopplerERC20V1 0x3Be8B97F…C599; EIP-1967 implementation slot zero", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: other, value: "Creation tx from and LONG fee receiver 0x79aEaE6a47ff2e551F60bd87DBd6358eFeaF4DC8; boneronlong.xyz labels that wallet the Spank Bank", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-3, R-13], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-27, field: identity.alias, value: "Boner Coin", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-28, field: other, value: "LONG token page: Fee receiver 0x79aEaE…4DC8; Claimed $186,950.39; Unclaimed $5,562.75; Supply 1,000,000,000; Description Paired with HIMS. Hard Money.", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: other, value: "The Defiant 2026-08-31: BONER/HIMS pool held 31,198 of 58,714 tokenized HIMS shares; tokenized HIMS printed $132.64 vs NYSE Friday close $28.84", class: claim, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: other, value: "Blockscout HIMS total_supply 73318796000000000000000 (73318.796) holders_count 3123 this pass", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-19], reproduction_ids: [REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-14, CLM-15, CLM-16]
    material_effect: "24h volume is $3.73M on the DexScreener BONER/HIMS book, $9.61M on BONER/USDG, and $18.59M on Gecko token volume_usd.h24; a card that collapses them would misstate activity"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener BONER/HIMS Uniswap v4 at $2.30M liquidity"
    summary: "DexScreener BONER/HIMS pair 0x9c89…640d liquidity $2,295,892.21, 24h volume $3,729,830.80."
    occurred_at: 2026-09-03T03:25:00Z
    observed_at: 2026-09-03T03:25:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-2
    type: company
    title: "@bonercoinlong posted HARD MONEY side-effects copy"
    summary: "@bonercoinlong posted side effects of HARD MONEY and told readers to take the $BONER pill."
    occurred_at: 2026-09-02T18:39:40Z
    observed_at: 2026-09-03T03:35:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-3
    type: ct
    title: "@EARNONHOOD posted STOCK MEMES Omnipool with BONER"
    summary: "@EARNONHOOD posted Omnipool 0x00e7…38A6 for AI, BONER, MOO, SPACEHOOD and OPTIMUS."
    occurred_at: 2026-09-02T14:03:03Z
    observed_at: 2026-09-03T03:38:00Z
    affected_fields: [relationship, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-4
    type: company
    title: "@bonercoinlong posted Spank Bank HIMS share"
    summary: "@bonercoinlong posted Spank Bank holdings and ~41.2K HIMS in the pool plus treasury, ~51.3% of on-chain HIMS."
    occurred_at: 2026-09-01T14:48:16Z
    observed_at: 2026-09-03T03:35:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-5
    type: ct
    title: "The Defiant posted BONER/HIMS held half of tokenized HIMS"
    summary: "The Defiant posted that the BONER/HIMS pool held 31,198 of 58,714 tokenized HIMS shares on 2026-08-31."
    occurred_at: 2026-08-31T17:34:00Z
    observed_at: 2026-09-03T03:30:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-6
    type: company
    title: "@bonercoinlong pinned the BONER contract address"
    summary: "@bonercoinlong posted that hard money was paired with HIMS and published CA 0x98096d…1E18."
    occurred_at: 2026-08-21T14:33:41Z
    observed_at: 2026-09-03T03:35:00Z
    affected_fields: [identity.handle, deployment.address]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-7
    type: onchain
    title: "LongLauncher.create minted BONER against HIMS"
    summary: "Tx 0x0de235b4… called LongLauncher.create; Boner Coin 0x98096d…1E18 was created at block 41726520."
    occurred_at: 2026-08-20T20:59:46Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3]

receipts:
  - { id: R-1, publisher: BONER, title: "boneronlong.xyz home", url: "https://boneronlong.xyz/", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-20, CLM-21, CLM-26], excerpt: "$BONER — Hard Money on Robinhood Chain. BONER is a community token on Robinhood Chain. Its main pool is paired with the HIMS stock token. Contract 0x98096d17e191b3da1d5f99a6d7b3584351b11e18. Live wallet 0x79aEaE6a47ff2e551F60bd87DBd6358eFeaF4DC8 labeled The Spank Bank. Links: Blockscout BONER, DexPaprika BONER/HIMS, LONG token page, https://x.com/bonercoinlong." }
  - { id: R-2, publisher: Blockscout, title: "BONER 0x98096d17e191B3dA1d5f99a6D7b3584351b11E18", url: "https://robinhoodchain.blockscout.com/address/0x98096d17e191B3dA1d5f99a6D7b3584351b11E18", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-10, CLM-12, CLM-17, CLM-24, CLM-25, CLM-27], excerpt: "API v2: hash 0x98096d17e191B3dA1d5f99a6D7b3584351b11E18, name Boner Coin, is_contract true, is_verified true, proxy_type eip1167, implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599, creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a, creation_transaction_hash 0x0de235b401431520993913fed71df9ef7129d850aa877443ae9008c8a80baf47; token symbol BONER holders_count 16057 total_supply 1000000000000000000000000000." }
  - { id: R-3, publisher: Blockscout, title: "BONER creation tx 0x0de235b4…", url: "https://robinhoodchain.blockscout.com/tx/0x0de235b401431520993913fed71df9ef7129d850aa877443ae9008c8a80baf47", published_at: 2026-08-20T20:59:46Z, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-8, CLM-11, CLM-13, CLM-26, EVT-7], excerpt: "timestamp 2026-08-20T20:59:46.000000Z, status ok, block_number 41726520, from 0x79aEaE6a47ff2e551F60bd87DBd6358eFeaF4DC8, to 0x22e99278308B393ea1260859B181AD7E78f5eeED (LongLauncher), method create. Decoded data supply 1e27, numeraire 0xCceE82fE024c36fA15E1005edE3E9e4787e23D09, factory 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode and ERC-20 calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-10, CLM-18, CLM-25], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32a4386 (53101446). eth_getCode 0x98096d…1E18 44 bytes prefix 0x3d3d3d3d363d3d37363d733be8b97fd0e713b5ab. name() Boner Coin; symbol() BONER; decimals 18; totalSupply 1e27; owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. LongLauncher 5826 bytes; DopplerERC20V1 13927; Airlock 5695; HIMS 283." }
  - { id: R-5, publisher: DexScreener, title: "BONER token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x98096d17e191B3dA1d5f99a6D7b3584351b11E18", published_at: null, accessed_at: 2026-09-03T03:25:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-9, CLM-14, CLM-15, CLM-24, EVT-1], excerpt: "pair 0x9c89b04303dfa76f3f6fb02c2b77be0e8a00ab8fa00d507119acd54ab3e8640d chainId robinhood dexId uniswap labels v4 base BONER quote HIMS 0xCceE82fE024c36fA15E1005edE3E9e4787e23D09 liquidity.usd 2295892.21 volume.h24 3729830.8 marketCap 47067653 pairCreatedAt 1787259586000. pair 0xfec7…a4d4 BONER/USDG volume.h24 9609225.64. websites app.long.xyz/tokens/0x9809… socials x.com/bonercoinlong." }
  - { id: R-6, publisher: GeckoTerminal, title: "BONER token on robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x98096d17e191b3da1d5f99a6d7b3584351b11e18", published_at: null, accessed_at: 2026-09-03T03:25:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-16], excerpt: "attributes: address 0x98096d17e191b3da1d5f99a6d7b3584351b11e18 name Boner Coin symbol BONER decimals 18 total_supply 1000000000000000000000000000.0 price_usd 0.04637273695 fdv_usd 46372736.9453133 market_cap_usd null total_reserve_in_usd 3295257.080344673 volume_usd.h24 18586776.2067465." }
  - { id: R-7, publisher: "@bonercoinlong", title: "boner profile", url: "https://x.com/bonercoinlong", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-13, CLM-20, CLM-21, CLM-22, CLM-23], excerpt: "Display name boner, handle @bonercoinlong, bio HARD MONEY on LONG, location HIMS HQ, website boneronlong.xyz. Joined August 2026. 2,246 followers. 96 posts." }
  - { id: R-8, publisher: "@bonercoinlong", title: "Pinned CA post", url: "https://x.com/bonercoinlong/status/2090809570130264318", published_at: 2026-08-21T14:33:41Z, accessed_at: 2026-09-03T03:35:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-4, EVT-6], excerpt: "The market spent years searching for hard money. Turns out it was paired with HIMS. $BONER 0x98096d17e191B3dA1d5f99a6D7b3584351b11E18" }
  - { id: R-9, publisher: "@bonercoinlong", title: "HARD MONEY side effects", url: "https://x.com/bonercoinlong/status/2095220127176315290", published_at: 2026-09-02T18:39:40Z, accessed_at: 2026-09-03T03:35:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "Ask your broker if HARD MONEY is right for you. Side effects include: enhanced performance in bull markets; firmer conviction where other coins fall soft; increased stamina during red days; sudden candle girth expansion. Take the $BONER pill anon, your partner will thank you later. Stay hard." }
  - { id: R-10, publisher: "@bonercoinlong", title: "Spank Bank growth update", url: "https://x.com/bonercoinlong/status/2094799506059432044", published_at: 2026-09-01T14:48:16Z, accessed_at: 2026-09-03T03:35:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "SPANK BANK GROWTH UPDATE. Snapshot: Treasury $181.6K; 1.67M liquid $BONER — $97.05K; 337.95 HIMS stock tokens — $9.86K; 6.59K liquid AI — $1.29K; BONER/AI LP — $73.4K. HIMS stock tokens in the BONER/HIMS pool + Spank Bank: Aug. 29: 8K+ Now: ~41.2K. Cumulative growth +~415%. That’s ~51.3% of on-chain HIMS supply. Hard money." }
  - { id: R-11, publisher: "@EARNONHOOD", title: "STOCK MEMES Omnipool live", url: "https://x.com/EARNONHOOD/status/2095150513520005297", published_at: 2026-09-02T14:03:03Z, accessed_at: 2026-09-03T03:38:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "A new Omnipool is live for the 5 largest memes paired with stocks on Robinhood. $AI, $BONER, $MOO, $SPACEHOOD, $OPTIMUS. Provide liquidity to all of them in a single pool and earn fees from trading activity across every asset. https://earnonhood.com/omni/pools/0x00e7B76d0C0F0370C28A07aA9d9fDF92736238A6" }
  - { id: R-12, publisher: The Defiant, title: "A Memecoin Called BONER Has Cornered Half the Tokenized Hims & Hers Float", url: "https://thedefiant.io/news/tokens/a-memecoin-called-boner-has-cornered-half-the-tokenized-hims-and-hers-float", published_at: 2026-08-31T17:34:00Z, accessed_at: 2026-09-03T03:30:00Z, kind: news, authority: independent, authenticity: confirmed, supports: [CLM-29, EVT-5], excerpt: "The BONER/HIMS pool on Robinhood Chain holds 31,198 of the 58,714 tokenized Hims & Hers shares that exist. With the NYSE closed on Sunday night, the tokenized stock printed $132.64 against an equity that had closed Friday at $28.84. BONER traded at $0.04125 at 17:06 UTC on Monday, market capitalization $41.3 million." }
  - { id: R-13, publisher: LONG, title: "$BONER token page", url: "https://app.long.xyz/tokens/0x98096d17e191b3da1d5f99a6d7b3584351b11e18", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-10, CLM-11, CLM-13, CLM-26, CLM-27, CLM-28], excerpt: "$BONER Boner Coin. Anchored to HIMS. CA 0x98096d…1e18. Anchored to HIMS 0xccee82…3d09. Supply 1,000,000,000. Description: Paired with HIMS. Hard Money. Fee receiver: 0x79aEaE…4DC8. Claimed $186,950.39. Unclaimed $5,562.75." }
  - { id: R-14, publisher: BONER, title: "boner.fyi fan page", url: "https://boner.fyi/", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: other, authority: social, authenticity: unconfirmed, supports: [], excerpt: "$BONER — Monument to the HIMS Takeover. Paired with HIMS · Hard Money. A community meme page · made by holders of $BONER. Inscriptions $BONER 0x98096d17e191B3dA1d5f99a6D7b3584351b11E18 HIMS·RH 0xCceE82fE024c36fA15E1005edE3E9e4787e23D09. Not affiliated with Hims & Hers Health or Robinhood." }
  - { id: R-15, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8B97F…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "API v2: name DopplerERC20V1, is_contract true, is_verified true. smart-contracts: compiler_version v0.8.26+commit.8a97fa7a, is_fully_verified false, is_partially_verified true, file_path src/tokens/DopplerERC20V1.sol, verified_at 2026-07-01T19:42:07Z." }
  - { id: R-16, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "API v2: name DopplerERC20V1Factory, is_contract true, is_verified true. smart-contracts: compiler_version v0.8.26+commit.8a97fa7a, is_partially_verified true, file_path src/tokens/DopplerERC20V1Factory.sol, verified_at 2026-07-01T19:42:15Z." }
  - { id: R-17, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-13], excerpt: "API v2: name LongLauncher, is_contract true, is_verified true. smart-contracts: compiler_version v0.8.26+commit.8a97fa7a, is_fully_verified true, file_path src/LongLauncher.sol, verified_at 2026-07-14T11:23:57Z." }
  - { id: R-18, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-18], excerpt: "API v2: hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862, name Airlock, is_contract true, is_verified true. RPC eth_getCode 5695 bytes. Token owner() returns this address." }
  - { id: R-19, publisher: Blockscout, title: "HIMS 0xCceE82…3D09", url: "https://robinhoodchain.blockscout.com/address/0xCceE82fE024c36fA15E1005edE3E9e4787e23D09", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-30], excerpt: "API v2 address: name BeaconProxy, is_contract true, is_verified true, proxy_type eip1967_beacon, implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. Token name Hims & Hers Health, Inc. • Robinhood Token symbol HIMS decimals 18 total_supply 73318796000000000000000 holders_count 3123." }
  - { id: R-20, publisher: "@bonercoinlongg", title: "BONER Support profile", url: "https://x.com/bonercoinlongg", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-22], excerpt: "Display name BONER Support ✪, handle @bonercoinlongg. Bio: HARD MONEY on LONG. Location HIMS HQ. Website boneronlong.xyz. ~89 followers. Same bio stem as @bonercoinlong." }
  - { id: R-21, publisher: "@bonercoinlongX", title: "boner support profile", url: "https://x.com/bonercoinlongX", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23], excerpt: "Display name boner support ⍟, handle @bonercoinlongX. Bio: HARD MONEY on LONG. Location HIMS HQ. Website boneronlong.xyz. ~70 followers. Same bio stem as @bonercoinlong. Pinned: Kindly get in touch with us via DM." }

gaps:
  - { priority: P0, question: "Which Airlock functions can change BONER supply, pool, or ownership after LongLauncher.create?", checked: "owner() is Airlock 0xeb7C…0862 with verified source; DopplerERC20V1.sol was not read line-by-line this pass", next: "read owner-only setters on DopplerERC20V1 and Airlock getAssetData for 0x98096d…1E18" }
  - { priority: P1, question: "Is there an audit of DopplerERC20V1 / LongLauncher covering this clone?", checked: "boneronlong.xyz, @bonercoinlong, LONG token page, DopplerERC20V1 source header, 2026-09-03", next: "search named auditors if LONG or Doppler publishes one" }
  - { priority: P1, question: "Does Blockscout HIMS total_supply 73,319 this pass match the 58,714 float The Defiant posted on 2026-08-31?", checked: "HIMS token total_supply 73318796000000000000000; Defiant 58,714 at 17:12 UTC 2026-08-31", next: "pull HIMS totalSupply history around 2026-08-30/31 and 2026-09-03" }
  - { priority: P2, question: "Is there a Telegram, GitHub org, or docs URL besides boneronlong.xyz and the LONG token page?", checked: "DexScreener socials only x.com/bonercoinlong; site links X, LONG, Blockscout, DexPaprika, Fomo; no telegram or github this pass", next: "re-check DexScreener info.socials and the X bio" }
---

# BONER — research packet

## What it is

A LONG-launched memecoin quoted against the HIMS stock token. Holders swap BONER for HIMS in the Uniswap v4 pool created with the token. @bonercoinlong publishes the contract from boneronlong.xyz. The token is not the LONG factory.

Themes: memecoin, stock-paired:HIMS
