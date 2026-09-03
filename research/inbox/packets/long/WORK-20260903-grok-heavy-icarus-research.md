---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: long
name: LONG
packet_tier: seed
as_of: 2026-09-02T23:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [long]
allowed_paths:
  - research/inbox/packets/long/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: LONG
  aliases: [long.xyz, LongLauncher]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://app.long.xyz
  official_handle: "@longdotxyz"
  repository: "NULL — no GitHub org or repository URL on app.long.xyz, the @longdotxyz bio, or verified LongLauncher source this pass"
  possible_matches:
    - slug: longshot
      signals: [other]
      contrary_signals:
        - "Census Longshot is a launch/fee-router at uselongshot.xyz / @uselongshot"
        - "LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED"
        - "No shared domain, handle or reproduced address"
    - slug: longbow
      signals: [other]
      contrary_signals:
        - "Census Longbow is a Morpho Blue credit overlay at longbow.cash / @longbowlend"
        - "LONG is a stock-paired factory at app.long.xyz / @longdotxyz"
        - "No shared domain, handle or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at @bankrbot with a separate stock-paired factory"
        - "LONG launches go through LongLauncher 0x22e9…eeED and DopplerERC20V1Factory 0x1B37…b69a, not Bankr"
        - "No shared domain, handle or reproduced address"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Artificial Inu is a stock-paired token ($AI / NVDA) created through LongLauncher, not the factory"
        - "Census entity_kind for artificial-inu is token; LONG is the launchpad"
        - "Official surfaces are artificialinu.com / @ArtificiallyInu, not app.long.xyz / @longdotxyz"

classification:
  primary_leaf: launch/stock-paired-factory
  secondary_leaves: []
  mechanism_tags: [launchpad, rwa, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "LongLauncher 0x22e9…eeED and TickerAirlockFactory 0x9c88…0845 have non-empty code and verified source on chain 4663; $AI, $BONER and $SPACEHOOD creation txs call LongLauncher.create. Census announced is below that bar. 24h stock volume is $425M on the 2 Sep official post and $118.1M on the Dune counters opened the same day. [R-4] [R-5] [R-7] [R-11] [R-12] [R-13] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-11, CLM-12, CLM-13, CLM-17], note: "" }

links:
  - { kind: site, url: "https://app.long.xyz", authenticity: confirmed }
  - { kind: app, url: "https://app.long.xyz", authenticity: confirmed }
  - { kind: x, url: "https://x.com/longdotxyz", authenticity: confirmed }
  - { kind: docs, url: "https://app.long.xyz/litepaper", authenticity: unconfirmed }
  - { kind: other, url: "https://dune.com/natan_benish2001/long-on-robinhood-chain", authenticity: unconfirmed }

deployments:
  - label: LongLauncher (PRD 0x22e9…eeED)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02T23:39:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-6]
  - label: TickerAirlockFactory (PRD 0x9c88…0845)
    role: factory
    address:
      value: "0x9c88f06B72FCD3ceDBEF3BE7521eE5Abd72d0845"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02T23:39:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-8]
  - label: DopplerERC20V1Factory (trusted token factory)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02T23:39:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-10]
  - label: Airlock (create primitive)
    role: router
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02T23:39:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-9]

metrics:
  - { kind: volume_24h, value: 118054304.12, currency: USD, as_of: 2026-09-02T23:40:00Z, window: 24h, method: "dune.com/natan_benish2001/long-on-robinhood-chain widget 24h Volume gross_volume_24h_usd", class: claim, receipt_ids: [R-13] }
  - { kind: volume_24h, value: 425000000, currency: USD, as_of: 2026-09-02T01:08:21Z, window: 24h, method: "@longdotxyz status 2094955556545122753 posted tokenized stock volume", class: claim, receipt_ids: [R-14] }
  - { kind: tvl, value: 12312266.59, currency: USD, as_of: 2026-09-02T23:40:00Z, window: point, method: "dune.com/natan_benish2001/long-on-robinhood-chain widget Stock TVL in LONG Pools stock_tvl_usd", class: claim, receipt_ids: [R-13] }
  - { kind: tvl, value: 2207238.25, currency: USD, as_of: 2026-09-02T23:40:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x98096d…1E18 pair 0x9c89b0…640d BONER/HIMS Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-19] }
  - { kind: tvl, value: 964796.07, currency: USD, as_of: 2026-09-02T23:40:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xFe7E19…1E18 pair 0x225cc9…94ca SPACEHOOD/SPCX Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-20] }
  - { kind: volume_24h, value: 3940125.12, currency: USD, as_of: 2026-09-02T23:40:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x98096d…1E18 pair 0x9c89b0…640d BONER/HIMS volume.h24", class: claim, receipt_ids: [R-19] }
  - { kind: volume_24h, value: 2902781.29, currency: USD, as_of: 2026-09-02T23:40:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xFe7E19…1E18 pair 0x225cc9…94ca SPACEHOOD/SPCX volume.h24", class: claim, receipt_ids: [R-20] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:39:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com at block 0x328332d (52966189): eth_getCode 0x22e99278…eeED 5826 bytes; owner() 0x9B7f0d4d…ED47 (eth_getCode empty); AIRLOCK() 0xeb7C0347…0862; TRUSTED_TOKEN_FACTORY() 0x1B37D3a7…b69a; paused() false; pendingOwner() zero" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T23:38:00Z, receipt_ids: [R-4, R-6], result: "Blockscout api/v2: 0x22e99278…eeED is_contract true, is_verified true, name LongLauncher, file src/LongLauncher.sol, compiler v0.8.26+commit.8a97fa7a; creator 0x1Ae51740…5305 EOA; creation tx 0x717af93c…7cf9 timestamp 2026-07-13T11:36:09Z block 8636038" }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:39:00Z, receipt_ids: [R-7, R-8], result: "TickerAirlockFactory 0x9c88f06B…0845 eth_getCode 5826 bytes; AIRLOCK() 0xeb7C0347…0862; TRUSTED_TOKEN_FACTORY() 0x1B37D3a7…b69a; owner() 0x8aa7A1dF…3F99 (eth_getCode empty); paused() false. Blockscout name TickerAirlockFactory, verified, created 2026-07-12T21:19:53Z tx 0xdb6124d8…5e17" }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-02T23:40:00Z, receipt_ids: [R-1, R-3], result: "@longdotxyz display name LONG(); bio Play L(∞)NG Term Games.; website app.long.xyz. app.long.xyz headline Live now: Launch with stock tokens on Robinhood Chain. long.xyz redirects to app.long.xyz." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T23:39:00Z, receipt_ids: [R-11, R-12], result: "SPACEHOOD 0xFe7E19…1E18 creation tx 0x44d4d3df…2218 to LongLauncher method create 2026-07-14T14:48:13Z. BONER 0x98096d…1E18 creation tx 0x0de235b4…af47 to LongLauncher method create 2026-08-20T20:59:46Z. Both creator_address_hash DopplerERC20V1Factory 0x1B37…b69a, proxy_type eip1167, implementation DopplerERC20V1 0x3Be8B97F…C599" }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-02T23:40:00Z, receipt_ids: [R-13], result: "Dune dashboard LONG on Robinhood Chain, labeled Official analytics for app.long.xyz: 24h Volume gross_volume_24h_usd 118054304.12; Stock TVL in LONG Pools stock_tvl_usd 12312266.59; Tokens Launched 13092; methodology names both 0x9c88…0845 and 0x22e9…eeED" }
  - { id: REP-7, method: api, chain_id: 4663, checked_at: 2026-09-02T23:40:00Z, receipt_ids: [R-19, R-20], result: "DexScreener robinhood Uniswap v4 BONER/HIMS 0x9c89b0…640d quote 0xCceE82fE…3D09 liquidity.usd 2207238.25 volume.h24 3940125.12; SPACEHOOD/SPCX 0x225cc9…94ca quote 0x4a0E65A3…5eEa liquidity.usd 964796.07 volume.h24 2902781.29" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create forwards an unchanged Airlock create after a 24-hour normalized ticker reservation and requires data.tokenFactory == TRUSTED_TOKEN_FACTORY (DopplerERC20V1Factory). New tokens quote a Robinhood stock token in a Uniswap v4 pool.", class: verified, observed_at: 2026-09-02T23:38:00Z, receipt_ids: [R-4, R-5, R-19], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://app.long.xyz", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@longdotxyz", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-02T23:38:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x9c88f06B72FCD3ceDBEF3BE7521eE5Abd72d0845", class: verified, observed_at: 2026-09-02T23:39:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T23:39:00Z, receipt_ids: [R-4, R-5, R-11, R-12], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-7, field: control.owner, value: "LongLauncher owner() 0x9B7f0d4dcF6a4BaED39B2F4f5Aeae6cA082BED47 EOA; pendingOwner zero; renounceOwnership reverts", class: verified, observed_at: 2026-09-02T23:39:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: identity.name, value: "LONG", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-9, field: taxonomy.primary-leaf, value: launch/stock-paired-factory, class: claim, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Not a bonding-curve pad: create() is an Airlock router with a 24-hour ticker lock, not a curve that graduates into a pool", class: verified, observed_at: 2026-09-02T23:38:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-11, field: relationship, value: "Flagship $AI (Artificial Inu 0x2E8c…1e18) / NVDA 0xd0601CE1…9EEC was created through LongLauncher.create on 2026-07-14T17:48:31Z; packed under slug artificial-inu", class: claim, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: relationship, value: "$BONER (Boner Coin 0x98096d17e191B3dA1d5f99a6D7b3584351b11E18) created via LongLauncher.create 2026-08-20T20:59:46Z; Airlock getAssetData numeraire HIMS 0xCceE82fE024c36fA15E1005edE3E9e4787e23D09", class: verified, observed_at: 2026-09-02T23:39:00Z, receipt_ids: [R-11, R-19, R-21], reproduction_ids: [REP-5, REP-7], supersedes: null }
  - { id: CLM-13, field: relationship, value: "$SPACEHOOD 0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18 created via LongLauncher.create 2026-07-14T14:48:13Z; Airlock getAssetData numeraire SPCX 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa", class: verified, observed_at: 2026-09-02T23:39:00Z, receipt_ids: [R-12, R-20, R-22], reproduction_ids: [REP-5, REP-7], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Dune official analytics 24h Volume gross_volume_24h_usd 118054304.12", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "@longdotxyz 2026-09-02T01:08:21Z: In the past 24h, LONG passed $425M in tokenized stock volume; closing in on $12M total stock TVL, ~20% of all stock TVL onchain", class: claim, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Dune Stock TVL in LONG Pools stock_tvl_usd 12312266.59", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-17, field: control.privileged-role, value: "LongLauncher onlyOwner pause, unpause, sweepNative, sweepERC20, transferOwnership; no timelock in verified source", class: verified, observed_at: 2026-09-02T23:38:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on app.long.xyz, the litepaper, the X account, or the verified LongLauncher/Airlock pages this pass", class: unknown, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@longdotxyz.role", value: project, class: claim, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@longdotxyz.slug", value: long, class: claim, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: control.owner, value: "TickerAirlockFactory owner() 0x8aa7A1dFA6635AF2979dA4D2bDd51780842e3F99 EOA, a different key from LongLauncher owner", class: verified, observed_at: 2026-09-02T23:39:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-23, field: product.mechanism, value: "LongX Expansion: NVDA3x wraps an NVDA 3x leveraged position on Lighter into an ERC-20 that trades as a LONG pair; official account posted it live 2026-09-01", class: claim, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: "Dune Tokens Launched 13092", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", class: verified, observed_at: 2026-09-02T23:39:00Z, receipt_ids: [R-5, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-02T23:39:00Z, receipt_ids: [R-5, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-27, field: team.identity, value: "Verified LongLauncher.sol header author @natan_benish, copyright (c) 2026 long.xyz; Dune dashboard owner natan_benish2001 labeled Official analytics for app.long.xyz", class: claim, observed_at: 2026-09-02T23:38:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: relationship, value: "Distinct from Longshot (uselongshot.xyz / @uselongshot) and Longbow (longbow.cash / @longbowlend)", class: claim, observed_at: 2026-09-02T23:42:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: economics.metric, value: "DexScreener BONER/HIMS Uniswap v4 liquidity.usd 2207238.25 volume.h24 3940125.12", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-19], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-30, field: economics.metric, value: "DexScreener SPACEHOOD/SPCX Uniswap v4 liquidity.usd 964796.07 volume.h24 2902781.29", class: verified, observed_at: 2026-09-02T23:40:00Z, receipt_ids: [R-20], reproduction_ids: [REP-7], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-14, CLM-15]
    material_effect: "24h tokenized-stock volume is $118.05M on the Dune counters opened 2026-09-02T23:40Z and $425M on the official 2026-09-02T01:08Z post; a card that collapses them would misstate the window"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Official account posted $110M AI/NVDA tokenized NVDA volume"
    summary: "Official account: AI/NVDA generated over $110M tokenized NVDA volume; 27% of NVDA supply locked in the pool plus vault."
    occurred_at: 2026-09-02T23:20:10Z
    observed_at: 2026-09-02T23:40:00Z
    affected_fields: [economics.metric, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-2
    type: company
    title: "Official account posted $425M 24h tokenized-stock volume"
    summary: "Official account: $425M tokenized-stock volume in 24h; stock TVL closing in on $12M, about 20% of onchain stock TVL."
    occurred_at: 2026-09-02T01:08:21Z
    observed_at: 2026-09-02T23:40:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-3
    type: company
    title: "Official account posted LongX NVDA3x live with Lighter"
    summary: "Official account: LongX NVDA3x is live with Lighter; wraps a 3x NVDA position into an ERC-20 that trades on LONG."
    occurred_at: 2026-09-01T01:19:25Z
    observed_at: 2026-09-02T23:40:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-4
    type: company
    title: "Official account posted SPACEHOOD/SPCX among Diamond buybacks"
    summary: "Official account: Diamond Release Part Two executed buybacks on SPACEHOOD ($SPCX pair) plus MU and MSFT pairs."
    occurred_at: 2026-08-21T18:58:29Z
    observed_at: 2026-09-02T23:40:00Z
    affected_fields: [relationship, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: onchain
    title: "$BONER created through LongLauncher against HIMS"
    summary: "Tx 0x0de235b4… called LongLauncher.create; Boner Coin 0x98096d…1E18 was created at block 41726520."
    occurred_at: 2026-08-20T20:59:46Z
    observed_at: 2026-09-02T23:39:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-6
    type: company
    title: "Official account posted LONG live on Robinhood Chain"
    summary: "Official account: LONG is now live on Robinhood Chain, supporting new token launches on top of Robinhood stock tokens."
    occurred_at: 2026-07-14T16:50:00Z
    observed_at: 2026-09-02T23:40:00Z
    affected_fields: [lifecycle, identity.handle, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-7
    type: onchain
    title: "$SPACEHOOD created through LongLauncher against SPCX"
    summary: "Tx 0x44d4d3df… called LongLauncher.create; SPACEHOOD 0xFe7E19…1E18 was created at block 9613234."
    occurred_at: 2026-07-14T14:48:13Z
    observed_at: 2026-09-02T23:39:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-8
    type: onchain
    title: "LongLauncher deployed on Robinhood Chain"
    summary: "Tx 0x717af93c… created LongLauncher 0x22e99278…eeED at block 8636038; Blockscout source is verified."
    occurred_at: 2026-07-13T11:36:09Z
    observed_at: 2026-09-02T23:38:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-6]

receipts:
  - { id: R-1, publisher: LONG, title: "app.long.xyz", url: "https://app.long.xyz", published_at: null, accessed_at: 2026-09-02T23:36:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-8, CLM-9, CLM-21, CLM-28], excerpt: "Title Long.xyz Build and fund the future. Live now: Launch with stock tokens on Robinhood Chain. Tokens index: Launch on top of stock tokens. $AI anchored to NVDA; $BONER anchored to HIMS; $SPACEHOOD anchored to SPCX." }
  - { id: R-2, publisher: LONG, title: "Tokens on LONG", url: "https://app.long.xyz/tokens", published_at: null, accessed_at: 2026-09-02T23:36:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-11, CLM-12, CLM-13], excerpt: "Launch on top of stock tokens. Deploy now. $AI anchored to NVDA. $BONER anchored to HIMS. $SPACEHOOD anchored to SPCX. New · LongX. Trade leveraged stocks." }
  - { id: R-3, publisher: "@longdotxyz", title: "LONG() profile", url: "https://x.com/longdotxyz", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-8, CLM-19, CLM-20, CLM-28], excerpt: "Display name LONG(). Handle @longdotxyz. Bio: Play L(∞)NG Term Games. Website app.long.xyz. Joined January 2025." }
  - { id: R-4, publisher: Blockscout, title: "LongLauncher 0x22e99278…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-02T23:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-6, CLM-7, CLM-8, CLM-10, CLM-17, CLM-27, EVT-8], excerpt: "api/v2: hash 0x22e99278308B393ea1260859B181AD7E78f5eeED; is_contract true; is_verified true; name LongLauncher; creator 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305; creation_transaction_hash 0x717af93c071b39247b5cec72930b990b917439143f6621d08797090732947cf9. Smart-contract: file src/LongLauncher.sol; compiler v0.8.26+commit.8a97fa7a; copyright (c) 2026 long.xyz; author @natan_benish." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode / owner / AIRLOCK / TRUSTED_TOKEN_FACTORY", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T23:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-6, CLM-7, CLM-25, CLM-26], excerpt: "eth_blockNumber 0x328332d. LongLauncher eth_getCode 5826 bytes. owner() 0x9b7f0d4dcf6a4baed39b2f4f5aeae6ca082bed47. AIRLOCK() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. TRUSTED_TOKEN_FACTORY() 0x1b37d3a72082029c44b35b604ea473617580b69a. paused() 0. pendingOwner() 0. Owner eth_getCode empty." }
  - { id: R-6, publisher: Blockscout, title: "LongLauncher creation tx 0x717af93c…", url: "https://robinhoodchain.blockscout.com/tx/0x717af93c071b39247b5cec72930b990b917439143f6621d08797090732947cf9", published_at: 2026-07-13T11:36:09Z, accessed_at: 2026-09-02T23:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, EVT-8], excerpt: "timestamp 2026-07-13T11:36:09.000000Z; block_number 8636038; from 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305; to null (contract creation); status ok; result success." }
  - { id: R-7, publisher: Blockscout, title: "TickerAirlockFactory 0x9c88f06B…0845", url: "https://robinhoodchain.blockscout.com/address/0x9c88f06B72FCD3ceDBEF3BE7521eE5Abd72d0845", published_at: null, accessed_at: 2026-09-02T23:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-22], excerpt: "api/v2: hash 0x9c88f06B72FCD3ceDBEF3BE7521eE5Abd72d0845; is_contract true; is_verified true; name TickerAirlockFactory; creator 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305; creation_transaction_hash 0xdb6124d8b219fff528978b9599c7e983dc14bb09b81bdb2e6f4592186ee65e17. File src/TickerAirlockFactory.sol. Notice: Airlock-compatible launch router that reserves normalized token tickers for 24 hours." }
  - { id: R-8, publisher: Robinhood Chain RPC, title: "TickerAirlockFactory getters", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T23:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-22], excerpt: "TickerAirlockFactory 0x9c88f06B…0845 eth_getCode 5826 bytes. AIRLOCK() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. TRUSTED_TOKEN_FACTORY() 0x1b37d3a72082029c44b35b604ea473617580b69a. owner() 0x8aa7a1dfa6635af2979da4d2bdd51780842e3f99. paused() 0. Owner eth_getCode empty." }
  - { id: R-9, publisher: Blockscout, title: "Airlock 0xeb7C0347…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-02T23:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; is_contract true; is_verified true; name Airlock; creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9; creation_transaction_hash 0x8ffd957b1985578fd9bfb8ce651bf546cb262f3b157f02f93b26c585046b291a." }
  - { id: R-10, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37D3a7…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-02T23:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-26], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a; is_contract true; is_verified true; name DopplerERC20V1Factory; file src/tokens/DopplerERC20V1Factory.sol. This address is TRUSTED_TOKEN_FACTORY on LongLauncher and TickerAirlockFactory." }
  - { id: R-11, publisher: Blockscout, title: "BONER creation tx 0x0de235b4…", url: "https://robinhoodchain.blockscout.com/tx/0x0de235b401431520993913fed71df9ef7129d850aa877443ae9008c8a80baf47", published_at: 2026-08-20T20:59:46Z, accessed_at: 2026-09-02T23:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-12, EVT-5], excerpt: "timestamp 2026-08-20T20:59:46.000000Z; block_number 41726520; to 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher; method create; status ok. Token 0x98096d17e191B3dA1d5f99a6D7b3584351b11E18 name Boner Coin; creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a; proxy_type eip1167." }
  - { id: R-12, publisher: Blockscout, title: "SPACEHOOD creation tx 0x44d4d3df…", url: "https://robinhoodchain.blockscout.com/tx/0x44d4d3df6a420ecf63d182f7a45a83f26d9bd541f69c042974ef021214932218", published_at: 2026-07-14T14:48:13Z, accessed_at: 2026-09-02T23:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-13, EVT-7], excerpt: "timestamp 2026-07-14T14:48:13.000000Z; block_number 9613234; from 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305; to 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher; method create; status ok. Token 0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18 name SPACEHOOD; creator_address_hash 0x1B37D3a7…b69a; proxy_type eip1167." }
  - { id: R-13, publisher: Dune, title: "LONG on Robinhood Chain", url: "https://dune.com/natan_benish2001/long-on-robinhood-chain", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-14, CLM-16, CLM-24, CLM-27], excerpt: "Official analytics for app.long.xyz. 24h Volume gross_volume_24h_usd 118054304.12. Stock TVL in LONG Pools stock_tvl_usd 12312266.59. Tokens Launched 13092. Methodology: LONG assets = every LaunchCreated from LONG's TickerAirlockFactory (both deployments, 0x9c88…0845 + 0x22e9…eeED)." }
  - { id: R-14, publisher: "@longdotxyz", title: "$425M 24h tokenized stock volume", url: "https://x.com/longdotxyz/status/2094955556545122753", published_at: 2026-09-02T01:08:21Z, accessed_at: 2026-09-02T23:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-15, EVT-2], excerpt: "In the past 24h, LONG passed $425M in tokenized stock volume on @RobinhoodCrypto. Now closing in on $12M in total stock TVL, representing ~20% of all stock TVL onchain. LONG." }
  - { id: R-15, publisher: "@longdotxyz", title: "AI/NVDA $110M tokenized NVDA volume", url: "https://x.com/longdotxyz/status/2095290719955206515", published_at: 2026-09-02T23:20:10Z, accessed_at: 2026-09-02T23:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "The AI/NVDA market has now generated over $110M in tokenized $NVDA volume on @RobinhoodCrypto. 27% of the entire NVDA token supply is now locked inside the AI pool + vault." }
  - { id: R-16, publisher: "@longdotxyz", title: "LongX Expansion NVDA3x live", url: "https://x.com/longdotxyz/status/2094595951478632458", published_at: 2026-09-01T01:19:25Z, accessed_at: 2026-09-02T23:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-23, EVT-3], excerpt: "LongX Expansion Powered by @Lighter_xyz is now live with NVDA3x spot leverage token and its first demo pair. NVDA3x wraps an NVDA 3x leveraged position on Lighter into an ERC20. The NVDA3x demo pair trades like any other pair on LONG." }
  - { id: R-17, publisher: "@longdotxyz", title: "Diamond Release Part Two", url: "https://x.com/longdotxyz/status/2090876207445557368", published_at: 2026-08-21T18:58:29Z, accessed_at: 2026-09-02T23:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "We've now executed strategic buybacks on 3 OG pairs at LONG: @memorycowmoo ($MU pair), @ClippyMSFT ($MSFT pair), SPACEHOOD ($SPCX pair)." }
  - { id: R-18, publisher: "@longdotxyz", title: "LONG is now live on Robinhood Chain", url: "https://x.com/longdotxyz/status/2077073135233609923", published_at: 2026-07-14T16:50:00Z, accessed_at: 2026-09-02T23:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "LONG is now live on the @RobinhoodApp chain, supporting new token launches on top of Robinhood stock tokens. For the first time in crypto, we're merging RWAs with memes, community coins, and every other form of crypto-native asset." }
  - { id: R-19, publisher: DexScreener, title: "BONER token pairs API", url: "https://api.dexscreener.com/latest/dex/tokens/0x98096d17e191B3dA1d5f99a6D7b3584351b11E18", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-1, CLM-12, CLM-29], excerpt: "BONER/HIMS pair 0x9c89b04303dfa76f3f6fb02c2b77be0e8a00ab8fa00d507119acd54ab3e8640d dexId uniswap labels [v4] chainId robinhood quote HIMS 0xCceE82fE024c36fA15E1005edE3E9e4787e23D09 liquidity.usd 2207238.25 volume.h24 3940125.12." }
  - { id: R-20, publisher: DexScreener, title: "SPACEHOOD token pairs API", url: "https://api.dexscreener.com/latest/dex/tokens/0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18", published_at: null, accessed_at: 2026-09-02T23:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13, CLM-30], excerpt: "SPACEHOOD/SPCX pair 0x225cc98f7d66b29fef96377becc7bf89582e2ab7b923a09aee9719fd80eb94ca dexId uniswap labels [v4] chainId robinhood quote SPCX 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa liquidity.usd 964796.07 volume.h24 2902781.29." }
  - { id: R-21, publisher: LONG, title: "$BONER token page", url: "https://app.long.xyz/tokens/0x98096d17e191b3da1d5f99a6d7b3584351b11e18", published_at: null, accessed_at: 2026-09-02T23:36:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-12], excerpt: "$BONER Boner Coin. Anchored to HIMS. CA 0x98096d…1e18. Anchored to HIMS 0xccee82…3d09. Supply 1,000,000,000. Description: Paired with HIMS." }
  - { id: R-22, publisher: LONG, title: "$SPACEHOOD token page", url: "https://app.long.xyz/tokens/0xfe7e19cbce2f896c6c528bc355baf5a768291e18", published_at: null, accessed_at: 2026-09-02T23:36:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-13], excerpt: "$SPACEHOOD SPACEHOOD. Anchored to SPCX. CA 0xfe7e19…1e18. Anchored to SPCX 0x4a0e65…5eea. Supply 1,000,000,000. Trade on Matcha Meta DEX." }
  - { id: R-23, publisher: LONG, title: "$AI token page", url: "https://app.long.xyz/tokens/0x2e8c31162b855a2ffa90f6f8634643ad6f111e18", published_at: null, accessed_at: 2026-09-02T23:36:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-11], excerpt: "$AI Artificial Inu. Anchored to NVDA. CA 0x2e8c31…1e18. Anchored to NVDA 0xd0601c…9eec. Supply 1,000,000,000. Community mode Active. AI Community Vault listed on the page." }

gaps:
  - { priority: P0, question: "Who holds LongLauncher owner 0x9B7f…ED47 and TickerAirlockFactory owner 0x8aa7…3F99, and is either behind a Safe or timelock?", checked: "eth_getCode empty on both owners; verified LongLauncher source has onlyOwner pause/sweep and no timelock, 2026-09-02", next: "trace those EOAs on the explorer and any project post that names them" }
  - { priority: P1, question: "Why is Dune 24h stock volume $118.05M at 2026-09-02T23:40Z while @longdotxyz posted $425M at 2026-09-02T01:08Z?", checked: "Dune 24h Volume widget and status 2094955556545122753, 2026-09-02", next: "read Dune query 8032287 window and whether the post includes buyback legs or a different slice" }
  - { priority: P1, question: "Is TickerAirlockFactory 0x9c88…0845 still taking create() after LongLauncher 0x22e9…eeED shipped?", checked: "both have code, both unpaused, both share Airlock and DopplerERC20V1Factory; $AI/$BONER/$SPACEHOOD used LongLauncher, 2026-09-02", next: "count recent LaunchCreated logs on each address" }
  - { priority: P1, question: "Is there an audit whose scope includes LongLauncher, TickerAirlockFactory, Airlock, or DopplerERC20V1Factory as used on 4663?", checked: "app.long.xyz, litepaper, @longdotxyz, Blockscout contract pages, 2026-09-02", next: "auditor report index for Doppler / long.xyz and a matching commit" }
  - { priority: P2, question: "Is there a public GitHub for src/LongLauncher.sol?", checked: "app.long.xyz, @longdotxyz bio, verified source header, GitHub name search this pass", next: "ask the project in public and record the URL as identity.repository" }
---

# LONG — research packet

## What it is

The chain's stock-paired token factory. A user deploys a new ERC-20 through LongLauncher, which forwards an Airlock create after a 24-hour ticker lock and quotes the token against a Robinhood stock token in a Uniswap v4 pool. The same app lists $AI/NVDA, $BONER/HIMS and $SPACEHOOD/SPCX. @longdotxyz runs it at app.long.xyz.

Themes: launchpad, rwa, stock-paired

## Why it matters

LONG is the venue that quotes new tokens against Robinhood stock tokens instead of ETH or a stablecoin. $AI/NVDA, $BONER/HIMS and $SPACEHOOD/SPCX were created through LongLauncher. Census still lists lifecycle announced; the factory and those create transactions are on chain 4663.

## What could go wrong

LongLauncher `owner()` is a single EOA that can pause creates and sweep native or ERC-20 balances with no timelock in the verified source. TickerAirlockFactory is a second live router with a different owner. Official 24h volume ($425M) and the Dune 24h counter ($118.1M) do not match.

## Product and mechanics

LongLauncher.create forwards an unchanged Airlock create after checking a 24-hour normalized ticker reservation and that `data.tokenFactory` equals the immutable TRUSTED_TOKEN_FACTORY (DopplerERC20V1Factory 0x1B37…b69a). It is an Airlock router, not a bonding-curve pad. [verified R-4 R-5]

app.long.xyz lists launched tokens as anchored to stock tokens. $AI is anchored to NVDA, $BONER to HIMS, $SPACEHOOD to SPCX. DexScreener labels the BONER/HIMS and SPACEHOOD/SPCX books Uniswap v4 on chain robinhood. [claim R-1 R-2] [verified R-19 R-20]

The official account posted LongX Expansion live on 2026-09-01: NVDA3x wraps a 3x NVDA Lighter position into an ERC-20 that trades as a LONG pair. That path was not reproduced on the explorer this pass. [claim R-16]

## Control and security

LongLauncher owner() returns 0x9B7f…ED47, an address with no code. Verified source: onlyOwner pause/unpause, sweepNative, sweepERC20, transferOwnership; Ownable2Step; renounceOwnership reverts; no timelock. AIRLOCK and TRUSTED_TOKEN_FACTORY are immutables. [verified R-4 R-5]

TickerAirlockFactory 0x9c88…0845 is a prior router with the same Airlock and token factory, created 2026-07-12, still unpaused. Its owner() is a different EOA, 0x8aa7…3F99. [verified R-7 R-8]

No audit report URL was located on the app, litepaper, X account, or verified contract pages this pass. [unknown]

## Team and provenance

@longdotxyz display name is LONG(); the bio website is app.long.xyz. Verified LongLauncher.sol names author @natan_benish and copyright 2026 long.xyz. The Dune dashboard owner natan_benish2001 labels the board official analytics for app.long.xyz. [verified R-3] [claim R-4 R-13]

Census Longshot (uselongshot.xyz / @uselongshot) and Longbow (longbow.cash / @longbowlend) share a name fragment only. Bankr is a separate stock-paired factory. $AI is a token launched here, already packed under artificial-inu. [claim R-1 R-3]

## Economics and activity

Dune counters opened 2026-09-02T23:40Z: 24h volume $118,054,304.12; stock TVL in LONG pools $12,312,266.59; 13,092 tokens launched. Methodology counts LaunchCreated from both 0x9c88…0845 and 0x22e9…eeED. [verified R-13]

@longdotxyz at 2026-09-02T01:08Z posted $425M 24h tokenized-stock volume and stock TVL closing in on $12M (~20% of onchain stock TVL). The $12M TVL is near the Dune stock-TVL figure; the $425M 24h volume is not. [claim R-14]

DexScreener BONER/HIMS Uniswap v4 liquidity $2,207,238.25, 24h volume $3,940,125.12. SPACEHOOD/SPCX Uniswap v4 liquidity $964,796.07, 24h volume $2,902,781.29. [verified R-19 R-20]

## Material risks

- LongLauncher owner is one EOA with pause and sweep, no timelock in verified source. [verified R-4 R-5]
- A second live factory (TickerAirlockFactory) is owned by a different EOA. [verified R-7 R-8]
- Official 24h volume and the Dune 24h counter disagree by hundreds of millions of dollars. [disputed R-13 R-14]
- No audit report was located this pass. [unknown]
- LongX NVDA3x is posted as experimental; mint/redeem and pairing were not reproduced here. [claim R-16]

## Verification passes

- Receipts: app.long.xyz and /tokens, @longdotxyz profile and five posts, Blockscout API v2 plus RPC for LongLauncher, TickerAirlockFactory, Airlock and DopplerERC20V1Factory, BONER and SPACEHOOD create txs, Dune counters, DexScreener token APIs, and the $AI/$BONER/$SPACEHOOD app pages were opened on 2026-09-02; excerpts are copied from those pages. [verified R-1 R-3 R-4 R-5 R-11 R-12 R-13]
- Numbers: Dune 24h volume and stock TVL are the dashboard's LONG slice, not an all-chains total. DexScreener figures are the named Uniswap v4 pair on chain robinhood. The $425M figure is the project's post, not Dune. [claim R-13 R-14] [verified R-19 R-20]
- Adversarial: the strongest contrary reading is that LONG is Longshot, Longbow, or a bonding-curve pad, or that census announced is still correct. Handles, domains and the verified LongLauncher.create path on $AI/$BONER/$SPACEHOOD argue against those. [verified R-4 R-11 R-12] [claim R-3]

## Operations log

- Read content/census.yaml row long (lifecycle announced, handle @longdotxyz, app.long.xyz), content/projects/long.yaml, content/feed/long.yaml, content/sources/long.yaml, content/research/long.md, PRD Appendix A truncated factories 0x9c88…0845 and 0x22e9…eeED.
- Read research/inbox/packets/artificial-inu/WORK-20260903-grok-heavy-icarus-research.md for LongLauncher 0x22e99278…eeED.
- Opened app.long.xyz, /tokens, /tokens/0x2e8c…1e18, /tokens/0x98096d…1e18, /tokens/0xfe7e19…1e18; raw curl to app.long.xyz returned Cloudflare 403, page text taken from a browser fetch.
- Opened https://x.com/longdotxyz and statuses 2095290719955206515, 2094955556545122753, 2094595951478632458, 2090876207445557368, 2077073135233609923.
- RPC eth_getCode / owner / AIRLOCK / TRUSTED_TOKEN_FACTORY / paused on https://rpc.mainnet.chain.robinhood.com for 0x22e99278…eeED and 0x9c88f06B…0845 at block 0x328332d.
- Blockscout API v2 address, smart-contract, token and transaction endpoints for LongLauncher, TickerAirlockFactory, Airlock, DopplerERC20V1Factory, BONER and SPACEHOOD.
- Opened Dune https://dune.com/natan_benish2001/long-on-robinhood-chain and DexScreener latest/dex/tokens for BONER and SPACEHOOD.
- No public GitHub for LongLauncher; no Telegram URL on the surfaces checked; no DefiLlama protocol row named LONG on the Robinhood DEX overview this pass.
