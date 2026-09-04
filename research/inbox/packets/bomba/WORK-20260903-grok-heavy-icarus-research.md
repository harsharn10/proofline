---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: bomba
name: BOMBA
packet_tier: seed
as_of: 2026-09-03T04:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [bomba]
allowed_paths:
  - research/inbox/packets/bomba/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: BOMBA
  aliases: ["Bombardilo", "Bombardilo Crocodilo"]
  symbols: [BOMBA]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "https://bombardilo.com/"
  official_handle: "NULL — DexScreener info.socials lists x.com/bombaRH; bombardilo.com links @bombaRH; @bombaRH bio includes CA 0x525f24bf…1e18; no DexScreener Claim Profile confirmation this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, bombardilo.com, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "BOMBA is a token cloned by LongLauncher.create into a BOMBA/PLTR Uniswap v4 pool, entity_kind token, not protocol"
        - "bombardilo.com is a token page that links the LONG app; it is not the LONG protocol site"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime on the shared Doppler/Airlock stack"
        - "BOMBA create tx is LongLauncher.create from EOA 0xce3D…9813; Gecko labels the pool dex bankr-robinhood, same aggregator label used on GOYBEAM/PLTR and MONITOR/PLTR"
        - "No Bankr handle or bankr.bot URL on the DexScreener token profile this pass"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "BOMBA is Bombardilo / BOMBA at 0x525F…1E18 paired to PLTR 0x894E…4F2A via the same LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "BOMBA is a DopplerERC20V1 clone in a Uniswap v4 BOMBA/PLTR pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x525F…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create minted Bombardilo / BOMBA into Uniswap v4 pool 0xa1bb…1e79 quoted against PLTR 0x894E…4F2A. GET api.robinhood.com/rhj/assets (194 assets) has PLTR at that address. Distinct from packed GOYBEAM 0x1Fe2…1E18, MONITOR 0x1a91…1e18, PALANTARD 0x0a23…1e18, and PLTITS 0x5c9F…1E18. PLTR is a rail. No invented official handle this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/bombaRH", authenticity: unconfirmed }
  - { kind: site, url: "https://bombardilo.com/", authenticity: unconfirmed }
  - { kind: app, url: "https://app.long.xyz/tokens/0x525F24BF41F178174788C3297Af9c0Af1bA01E18", authenticity: unconfirmed }

deployments:
  - label: BOMBA token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x525F24BF41F178174788C3297Af9c0Af1bA01E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:35:00Z
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
      seen: 2026-09-03T04:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-15, R-18]
  - label: Airlock (token owner)
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-17]
  - label: PLTR Palantir Technologies • Robinhood Token (pair quote / numeraire)
    role: token
    address:
      value: "0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 359737.22, currency: USD, as_of: 2026-09-03T04:36:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa1bb85096e15d26cca05bda378052dd4dccf24527286cf76d9dc51332eba1e79 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 80879.44, currency: USD, as_of: 2026-09-03T04:36:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa1bb85096e15d26cca05bda378052dd4dccf24527286cf76d9dc51332eba1e79 reserve_in_usd (BOMBA/PLTR pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 67674.48, currency: USD, as_of: 2026-09-03T04:36:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa1bb85096e15d26cca05bda378052dd4dccf24527286cf76d9dc51332eba1e79 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 381539.43, currency: USD, as_of: 2026-09-03T04:35:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x525F24BF41F178174788C3297Af9c0Af1bA01E18 pair 0xa1bb8509…1e79 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 55966.75, currency: USD, as_of: 2026-09-03T04:35:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x525F24BF41F178174788C3297Af9c0Af1bA01E18 pair 0xa1bb8509…1e79 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 865, currency: null, as_of: 2026-09-03T04:35:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x525F24BF41F178174788C3297Af9c0Af1bA01E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:38:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32abb49 (53132105). Token 0x525F…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name Bombardilo, symbol BOMBA, decimals 18, totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl code 13927 B. Factory 0x1B37…b69a code 1912 B. LongLauncher 0x22e9…eeED code 5826 B. Airlock code 5695 B. Create-from 0xce3D…9813 code 0x. Hook 0x4e34…a544 code 25533 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:40:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-16, R-18], result: "Blockscout api/v2 token 0x525F…1E18 name Bombardilo symbol BOMBA holders_count 865 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. creator_address_hash and creation_transaction_hash null this pass. create tx 0x1df8…2a3c 2026-08-31T18:30:19Z block 51079107 from EOA 0xce3D…9813 (is_contract false) to LongLauncher method create. decoded supply 1e27 numeraire 0x894E…4F2A tokenFactory 0x1B37…b69a factory bytes name Bombardilo symbol BOMBA. LaunchCreated normalizedTicker BOMBA numeraire PLTR. PoolManager Initialize id 0xa1bb…1e79 currency0 BOMBA currency1 PLTR fee 8388608 hooks DopplerHookInitializer 0x4e34…a544. PLTR 0x894E…4F2A name Palantir Technologies • Robinhood Token holders_count 34846." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:36:00Z, receipt_ids: [R-7, R-8, R-9, R-22], result: "DexScreener latest/dex/tokens/0x525F…1E18: 2 robinhood uniswap pairs; top BOMBA/PLTR v4 0xa1bb…1e79 quote 0x894E…4F2A Palantir Technologies • Robinhood Token / PLTR liquidity.usd 55966.75 volume.h24 381539.43 fdv/marketCap 67626 pairCreatedAt 1788201019000 (2026-08-31T18:30:19Z) info.websites https://bombardilo.com/ info.socials x.com/bombaRH. Secondary BOMBA/USDG v4 0xd8b8…f2bf liquidity.usd 19.26 volume.h24 292.01. Gecko pool: volume_usd.h24 359737.22 reserve_in_usd 80879.44 fdv_usd 67674.48 pool_created_at 2026-08-31T18:30:19Z dex bankr-robinhood. Gecko token volume_usd.h24 360794.22 (all pools). Gecko token/info HTTP 429, not retried." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:42:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol PLTR hit 1: tokenName Palantir Technologies • Robinhood Token deployments contractAddress 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:40:00Z, receipt_ids: [R-4, R-6, R-18], result: "Create tx 0x1df8…2a3c receipt 16 logs. OwnershipTransferred newOwner Airlock. Mint 1e27 to Airlock. PoolManager Initialize id 0xa1bb…1e79 currency0 0x525F…1E18 currency1 0x894E…4F2A fee 8388608 tickSpacing 8 hooks 0x4e34…a544. DopplerHookInitializer Lock beneficiaries 0x21E2…7A66 5e16 (5%) and 0x5456…fc87 95e16 (95%). Airlock Create asset BOMBA numeraire PLTR. LongLauncher LaunchCreated poolOrHook/asset 0x525F…1E18 numeraire 0x894E…4F2A launcher 0xce3D…9813 deployedAt 1788201019 reservedUntil 1788287419 normalizedTicker BOMBA." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against numeraire PLTR. Tx 0x1df8…2a3c from 0xce3D…9813 at 2026-08-31T18:30:19Z minted Bombardilo / BOMBA; owner() is Airlock 0xeb7C…0862; create decoded tokenFactory 0x1B37…b69a.", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Bombardilo", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "BOMBA", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x525F24BF41F178174788C3297Af9c0Af1bA01E18", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle filed as confirmed; DexScreener info.socials lists x.com/bombaRH; bombardilo.com links @bombaRH; @bombaRH bio includes CA 0x525f24bf…1e18; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-7, R-13, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote PLTR 0x894E…4F2A is Palantir Technologies • Robinhood Token in GET rhj/assets (194 assets). Distinct from packed GOYBEAM 0x1Fe2…1E18 pair 0x069c…b2bb, MONITOR 0x1a91…1e18 pair 0xcfa7…8a3d, PALANTARD 0x0a23…1e18 pair 0x23c7…0a5d, and PLTITS 0x5c9F…1E18 pair 0x9734…1bd1, each a different token with its own BOMBA-unrelated PLTR Uniswap v4 book. Blockscout search also lists other BOMBA tickers (e.g. 0xB04D…F5E0 Bombardilo Crocodilo), not this CA.", class: verified, observed_at: 2026-09-03T04:42:00Z, receipt_ids: [R-7, R-12, R-16, R-19, R-20, R-22], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "BOMBA/PLTR Uniswap v4 24h volume 359737.22 USD and reserve_in_usd 80879.44 at 2026-09-03T04:36:00Z (Gecko pool slice, not Gecko token all-pools 360794.22)", class: verified, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 55966.75 volume.h24 381539.43 fdv/marketCap 67626 at 2026-09-03T04:35:00Z", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 865, class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock; factory() reverts; create-from 0xce3D…9813 has no code", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-5, R-6, R-17], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "LaunchCreated launcher 0xce3Da7afEd2aD2cEeaC1A2F8cF86f595f7eE9813 equals the create caller; DopplerHookInitializer Lock beneficiaries 5% 0x21E2…7A66 and 95% 0x5456…fc87 (95% is not the launcher)", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-4, R-6, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is PLTR 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xa1bb…1e79", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-6, R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; LaunchCreated and create-tx name LongLauncher 0x22e9…eeED as the pad, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, bombardilo.com, or X search this pass", class: unknown, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener lists bombardilo.com and x.com/bombaRH; site HTML embeds the CA and @bombaRH; @bombaRH bio embeds the CA", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-7, R-13, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 67674.48; DexScreener fdv/marketCap 67626. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A", class: verified, observed_at: 2026-09-03T04:42:00Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:38:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "bombardilo.com listed on DexScreener info.websites; page embeds CA 0x525F…1E18; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-7, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "bomba | BOMBA | NULL | bombardilo.com — discovery token not in census 49; handle x.com/bombaRH flagged unconfirmed-official", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-7, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T04:38:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko BOMBA/PLTR 24h volume $360k, reserve $80.9k"
    summary: "Gecko pool 0xa1bb…1e79 volume_usd.h24 359737 reserve_in_usd 80879 fdv_usd 67674. DexScreener same pair liquidity.usd 55967 volume.h24 381539."
    occurred_at: 2026-09-03T04:36:00Z
    observed_at: 2026-09-03T04:36:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@Cryptogether_ posted $BOMBA conviction vs $PLTR"
    summary: "@Cryptogether_ 2026-09-02T07:11:59Z: Ma conviction actuelle c’est le $BOMBA à 250k de marketcap. Bombardilo Crocodilo paired with $PLTR on @longdotxyz."
    occurred_at: 2026-09-02T07:11:59Z
    observed_at: 2026-09-03T04:45:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-3
    type: ct
    title: "@bombaRH posted 1K holders strong"
    summary: "@bombaRH 2026-09-02T08:08:45Z: 1K holders strong / BOMBA is just getting started. Bio includes CA 0x525f24bf…1e18. Blockscout holders_count 865 at collection."
    occurred_at: 2026-09-02T08:08:45Z
    observed_at: 2026-09-03T04:45:00Z
    affected_fields: [communications.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13, R-23]
  - id: EVT-4
    type: ct
    title: "bombardilo.com publishes CA and @bombaRH"
    summary: "Site title $BOMBA — Bombardilo Crocodilo · Palantir Drops. Visible text CA 0x525F…1E18, DexScreener pair, app.long.xyz/tokens/<ca>, X / Twitter: @bombaRH."
    occurred_at: 2026-09-03T04:48:00Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [identity.domain, identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-5
    type: onchain
    title: "LongLauncher create minted Bombardilo / BOMBA"
    summary: "Tx 0x1df8…2a3c from 0xce3D…9813 at 2026-08-31T18:30:19Z; LaunchCreated poolId 0xa1bb…1e79 normalizedTicker BOMBA."
    occurred_at: 2026-08-31T18:30:19Z
    observed_at: 2026-09-03T04:40:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-6
    type: ct
    title: "@0xCR33P posted BOMBA as a Longxyz launch on Robinhood"
    summary: "@0xCR33P 2026-09-01T18:08:54Z: $BOMBA (Bombardilo) volume through a liquidity pool on Robinhood. Longxyz launch. Linked 0x525f24bf…1e18."
    occurred_at: 2026-09-01T18:08:54Z
    observed_at: 2026-09-03T04:45:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-11]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x525F…1E18 Bombardilo / BOMBA", url: "https://robinhoodchain.blockscout.com/address/0x525F24BF41F178174788C3297Af9c0Af1bA01E18", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x525F24BF41F178174788C3297Af9c0Af1bA01E18 name Bombardilo is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol BOMBA decimals 18 total_supply 1000000000000000000000000000 holders_count 865 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-25], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x1df81cc9…2a3c", url: "https://robinhoodchain.blockscout.com/tx/0x1df81cc976b2ed11f41ed0b9d7aa68b43501e0eeaf92eb07f538515406ef2a3c", published_at: 2026-08-31T18:30:19Z, accessed_at: 2026-09-03T04:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-5], excerpt: "timestamp 2026-08-31T18:30:19.000000Z status ok result success block_number 51079107 from 0xce3Da7afEd2aD2cEeaC1A2F8cF86f595f7eE9813 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data includes supply 1e27 numeraire 0x894E…4F2A factory 0x1B37…b69a factory bytes name Bombardilo symbol BOMBA." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on BOMBA", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22, CLM-25], excerpt: "eth_blockNumber 0x32abb49 (53132105). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name Bombardilo symbol BOMBA decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Factory code 1912 B. Impl code 13927 B. LongLauncher 5826 B. Airlock 5695 B. Create-from 0xce3D…9813 code 0x." }
  - { id: R-6, publisher: Blockscout, title: "create tx logs Initialize / LaunchCreated / Lock", url: "https://robinhoodchain.blockscout.com/tx/0x1df81cc976b2ed11f41ed0b9d7aa68b43501e0eeaf92eb07f538515406ef2a3c", published_at: 2026-08-31T18:30:19Z, accessed_at: 2026-09-03T04:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-15, CLM-21], excerpt: "PoolManager Initialize id 0xa1bb85096e15d26cca05bda378052dd4dccf24527286cf76d9dc51332eba1e79 currency0 BOMBA currency1 PLTR 0x894E…4F2A fee 8388608 hooks 0x4e346895…a544. Airlock Create numeraire PLTR. LongLauncher LaunchCreated normalizedTicker BOMBA launcher 0xce3D…9813. Lock beneficiaries 5% 0x21E2…7A66 95% 0x5456…fc87." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens BOMBA", url: "https://api.dexscreener.com/latest/dex/tokens/0x525F24BF41F178174788C3297Af9c0Af1bA01E18", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "2 robinhood uniswap pairs. Top pairAddress 0xa1bb85096e15d26cca05bda378052dd4dccf24527286cf76d9dc51332eba1e79 labels v4 base Bombardilo / BOMBA quote Palantir Technologies • Robinhood Token / PLTR 0x894E1EC2…4F2A liquidity.usd 55966.75 volume.h24 381539.43 fdv 67626 marketCap 67626 pairCreatedAt 1788201019000. info.websites https://bombardilo.com/ info.socials x.com/bombaRH." }
  - { id: R-8, publisher: GeckoTerminal, title: "BOMBA/PLTR Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa1bb85096e15d26cca05bda378052dd4dccf24527286cf76d9dc51332eba1e79", published_at: null, accessed_at: 2026-09-03T04:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name BOMBA / PLTR pool_created_at 2026-08-31T18:30:19Z fdv_usd 67674.47563 market_cap_usd null volume_usd.h24 359737.218841741 reserve_in_usd 80879.4386 transactions.h24 buys 1930 sells 1991. dex bankr-robinhood quote robinhood_0x894e1ec2d74ffe5aef8dc8a9e84686accb964f2a." }
  - { id: R-9, publisher: GeckoTerminal, title: "Bombardilo token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x525F24BF41F178174788C3297Af9c0Af1bA01E18", published_at: null, accessed_at: 2026-09-03T04:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name Bombardilo symbol BOMBA decimals 18 total_supply 1e27 price_usd 0.00006767447563 fdv_usd 67674.4756339243 market_cap_usd null volume_usd.h24 360794.218942724 total_reserve_in_usd 63414.34. coingecko_coin_id null. Top pool 0xa1bb…1e79." }
  - { id: R-10, publisher: "@Cryptogether_", title: "conviction $BOMBA vs $PLTR", url: "https://x.com/Cryptogether_/status/2095047066418327760", published_at: 2026-09-02T07:11:59Z, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "Les performances des tokens sur le Launchpad @longdotxyz sont ouf. Ma conviction actuelle c’est le $BOMBA à 250k de marketcap. Bombardilo Crocodilo, un des personnages brainrot les plus connus en paire avec $PLTR." }
  - { id: R-11, publisher: "@0xCR33P", title: "BOMBA Longxyz launch on Robinhood", url: "https://x.com/0xCR33P/status/2094849999607677365", published_at: 2026-09-01T18:08:54Z, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "$BOMBA (Bombardilo): 609k volume churning through a $59k liquidity pool on Robinhood. Now at mc $304k, vol $610k, up 1567% on the day. Longxyz launch on Robinhood. https://cr33per.net/robinhood/0x525f24bf41f178174788c3297af9c0af1ba01e18" }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:42:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol PLTR hit 1: tokenName Palantir Technologies • Robinhood Token deployments contractAddress 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: R-13, publisher: X, title: "@bombaRH user search", url: "https://x.com/bombaRH", published_at: null, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-3], excerpt: "Name $BOMBA - Bombardilo Crocodilo handle @bombaRH. Bio: The most unserious coin for the most serious stock CA: 0x525f24bf41f178174788c3297af9c0af1ba01e18. Followers 192. Blue Verified." }
  - { id: R-14, publisher: DexScreener, title: "BOMBA/PLTR pair page", url: "https://dexscreener.com/robinhood/0xa1bb85096e15d26cca05bda378052dd4dccf24527286cf76d9dc51332eba1e79", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "DexScreener robinhood pair 0xa1bb85096e15d26cca05bda378052dd4dccf24527286cf76d9dc51332eba1e79 BOMBA / PLTR Uniswap v4." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Compiler v0.8.26 file_path src/LongLauncher.sol is_partially_verified false verified_at 2026-07-14T11:23:57Z." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x894E…4F2A Palantir Technologies • Robinhood Token / PLTR", url: "https://robinhoodchain.blockscout.com/address/0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A", published_at: null, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A name BeaconProxy is_contract true is_verified true. token name Palantir Technologies • Robinhood Token symbol PLTR holders_count 34846." }
  - { id: R-17, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true." }
  - { id: R-18, publisher: Blockscout, title: "LaunchCreated log for BOMBA", url: "https://robinhoodchain.blockscout.com/tx/0x1df81cc976b2ed11f41ed0b9d7aa68b43501e0eeaf92eb07f538515406ef2a3c", published_at: 2026-08-31T18:30:19Z, accessed_at: 2026-09-03T04:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-14, CLM-15, EVT-5], excerpt: "LaunchCreated poolOrHook 0x525F24BF41F178174788C3297Af9c0Af1bA01E18 asset 0x525F…1E18 numeraire 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A launcher 0xce3Da7afEd2aD2cEeaC1A2F8cF86f595f7eE9813 deployedAt 1788201019 reservedUntil 1788287419 normalizedTicker BOMBA. Block 51079107." }
  - { id: R-19, publisher: DexScreener, title: "search PALANTARD / PLTITS / GOYBEAM PLTR distinct books", url: "https://api.dexscreener.com/latest/dex/search?q=GOYBEAM%20PLTR", published_at: null, accessed_at: 2026-09-03T04:42:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "Robinhood Uniswap v4 PLTR books include GOYBEAM 0x1Fe2Abf6…1E18 pair 0x069cdb4f…b2bb; PALANTARD 0x0a2329aA…1e18 pair 0x23c73750…0a5d; PLTITS 0x5c9F9a42…1E18 pair 0x9734b611…1bd1; MONITOR 0x1a911bb9…1e18 pair 0xcfa7bb34…8a3d; BOMBA 0x525F24BF…1E18 pair 0xa1bb8509…1e79. Separate tokens, separate pair ids." }
  - { id: R-20, publisher: Blockscout, title: "search Bombardilo name collisions", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=Bombardilo", published_at: null, accessed_at: 2026-09-03T04:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "Token Bombardilo BOMBA 0x525F24BF41F178174788C3297Af9c0Af1bA01E18. Separate tokens Bombardilo Crocodilo BOMBA 0xB04D615229bCB6bbcd7872E94aC0562360bEF5E0; BOMBARDILO CROCODILO BOMBA 0xB039fCc755438fbfB96350a22B9E5Bd0BcFdeDd2; Bombardilo BOMBA 0x834111b51f15De3CA893E7Ebd65958EF134B5Ba3." }
  - { id: R-21, publisher: bombardilo.com, title: "$BOMBA — Bombardilo Crocodilo · Palantir Drops", url: "https://bombardilo.com/", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: official-site, authority: unknown, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-23, CLM-24, EVT-4], excerpt: "HTTP 200 title $BOMBA — Bombardilo Crocodilo · Palantir Drops. Visible text: When you buy $BOMBA, you route volume straight through Palantir. Buy $BOMBA DexScreener · CA: 0x525F24BF41F178174788C3297Af9c0Af1bA01E18 X / Twitter: @bombaRH. Links app.long.xyz/tokens/0x525F24BF41F178174788C3297Af9c0Af1bA01E18 and dexscreener.com/robinhood/0xa1bb8509…1e79." }
  - { id: R-22, publisher: DexScreener, title: "search BOMBA", url: "https://api.dexscreener.com/latest/dex/search?q=BOMBA", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-17], excerpt: "Top robinhood uniswap pair BOMBA 0x525F24BF41F178174788C3297Af9c0Af1bA01E18 vs PLTR 0x894E…4F2A pair 0xa1bb8509…1e79. Separate Solana pumpswap Bombardino Crocodilo ewzwnm6c…pump is a different chain and mint." }
  - { id: R-23, publisher: "@bombaRH", title: "1K holders strong", url: "https://x.com/bombaRH/status/2095061352964620316", published_at: 2026-09-02T08:08:45Z, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-3], excerpt: "1K holders strong BOMBA is just getting started" }

gaps:
  - { priority: P0, question: "Is @bombaRH / bombardilo.com later confirmed by a DexScreener Claim Profile or a @longdotxyz post that names CA 0x525F…1E18?", checked: "Site and @bombaRH bio both embed the CA; DexScreener lists both; no Claim Profile confirmation and no @longdotxyz post opened this pass, 2026-09-03", next: "keep official_handle NULL / unconfirmed-official until a primary confirmation appears" }
  - { priority: P1, question: "Does Blockscout later set creator_address_hash on 0x525F…1E18 to DopplerERC20V1Factory, matching GOYBEAM?", checked: "Token page creator_address_hash null; create tx is LongLauncher.create with factory param 0x1B37…b69a, 2026-09-03", next: "re-fetch api/v2/addresses/0x525F…1E18 creator fields" }
  - { priority: P1, question: "Who is Lock 95% beneficiary 0x5456…fc87 relative to launcher 0xce3D…9813?", checked: "Lock beneficiaries 5% 0x21E2…7A66 and 95% 0x5456…fc87; 95% is not the create-from EOA, 2026-09-03", next: "read DopplerHookInitializer Lock on the explorer; do not merge the two addresses" }
  - { priority: P1, question: "Are Blockscout Bombardilo / BOMBA ticker collisions later confused with this slug?", checked: "Search lists 0xB04D…F5E0, 0xB039…Dd2, 0x8341…Ba3 and others besides 0x525F…1E18, 2026-09-03", next: "keep CAs separate; do not merge on ticker BOMBA" }
  - { priority: P2, question: "Why does Gecko label BOMBA/PLTR dex bankr-robinhood while create is LongLauncher?", checked: "Gecko pool relationships.dex id bankr-robinhood; same label on packed GOYBEAM/PLTR and MONITOR/PLTR; create tx to LongLauncher, 2026-09-03", next: "treat as aggregator labeling unless Bankr docs name this CA" }
  - { priority: P2, question: "What is Gecko token info websites / twitter_handle for 0x525F…1E18?", checked: "GET api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x525F…1E18/info HTTP 429 this pass; not retried", next: "single GET later; do not loop 429s" }
---

# BOMBA — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against Palantir Technologies • Robinhood Token. LongLauncher.create deployed Bombardilo (BOMBA) on 2026-08-31 and seeded the BOMBA/PLTR book. Traders buy and sell BOMBA on Uniswap v4. bombardilo.com and @bombaRH publish the CA this pass and stay unconfirmed-official.

Themes: memecoin, stock-paired:PLTR, rwa

## Why it matters

The BOMBA/PLTR Uniswap v4 book printed about $360k of 24h volume on Gecko and $382k on DexScreener at collection, with the quote token matching the Robinhood PLTR Stock Token in GET /rhj/assets. PLTR is a rail, not this token. Packed GOYBEAM, MONITOR, PALANTARD and PLTITS are separate PLTR books, not this CA.

## What could go wrong

USD liquidity figures on the BOMBA/PLTR book count both sides, and Gecko reserve ($80.9k) disagrees with DexScreener liquidity ($56.0k). Gecko labels the pool dex as bankr-robinhood while DexScreener and the create tx say Uniswap v4. Other BOMBA tickers exist on Blockscout and Solana. @bombaRH / bombardilo.com stay unconfirmed-official.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xce3D…9813 at 2026-08-31T18:30:19Z minted Bombardilo / BOMBA supply 1e9*1e18 into Uniswap v4 poolId 0xa1bb…1e79 quoted against PLTR 0x894E…4F2A. owner() returns Airlock 0xeb7C…0862. factory() reverts. [verified R-4 R-5 R-6 R-18]

PoolManager is 0x8366…0951. Hooks are DopplerHookInitializer 0x4e34…a544. A secondary BOMBA/USDG v4 book exists on DexScreener with $19 liquidity. [verified R-6 R-7 R-9]

## Control and security

token owner() is Airlock. Create-from 0xce3D…9813 is an EOA with no code and is named launcher in LaunchCreated. Lock beneficiaries on create were 0x21E2…7A66 at 0.05 and 0x5456…fc87 at 0.95. [verified R-5 R-6 R-18]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified R-2 R-3 R-15] [unknown]

## Team and provenance

bombardilo.com titles $BOMBA — Bombardilo Crocodilo and embeds CA 0x525F…1E18 plus @bombaRH. DexScreener info.websites and info.socials match that pair. @bombaRH bio includes the CA. Flag unconfirmed-official; do not file an official handle this pass. [claim R-7 R-13 R-21]

PLTR is a rail: GET /rhj/assets lists Palantir Technologies • Robinhood Token at 0x894E…4F2A on chain 4663. [verified R-12 R-16]

## Economics and activity

BOMBA/PLTR Uniswap v4 24h volume is 359737.22 USD and reserve_in_usd is 80879.44 at 2026-09-03T04:36:00Z from the Gecko pool endpoint. fdv_usd is 67674.48. Gecko token volume_usd.h24 is 360794.22 across all pools, not the PLTR book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 55966.75, volume.h24 381539.43, fdv/marketCap 67626. Blockscout holders_count 865. Pair created 2026-08-31T18:30:19Z. Assignment lead of liq ~$60,368 / vol ~$386,002 is nearer the DexScreener slice than the Gecko reserve. [claim R-1 R-7]

@Cryptogether_ posted a $BOMBA / $PLTR conviction note on 2026-09-02. @bombaRH posted 1K holders on 2026-09-02; live holders_count is 865. [claim R-10 R-23]

## Material risks

- Quote token PLTR 0x894E…4F2A is in GET /rhj/assets, so USD pool figures still mix BOMBA with a Stock Token, not USDG. [verified R-12 R-16]
- Gecko reserve $80.9k and DexScreener liquidity $56.0k disagree on the same pool. [claim R-7 R-8]
- Ticker collision with other Blockscout BOMBA tokens and a Solana Bombardino mint. [verified R-20 R-22]
- @bombaRH / bombardilo.com unconfirmed-official this pass. [claim R-7 R-13 R-21]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/LongLauncher/PLTR and the create tx, RPC name/symbol/owner/code, DexScreener, Gecko pool/token, /rhj/assets, bombardilo.com, @bombaRH, @Cryptogether_, and @0xCR33P were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 359737.22 is the Gecko BOMBA/PLTR pool 24h volume, not the 360794.22 token all-pools figure. Reserve 80879.44 is that pool. DexScreener 381539.43 / 55966.75 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that BOMBA is GOYBEAM, MONITOR, PALANTARD, or a Bankr launch, or that PLTR is this token. Creation is LongLauncher.create of 0x525F…1E18 against PLTR 0x894E…4F2A; the other names are different CAs; PLTR is the rhj/assets Stock Token rail. [inference R-4 R-12 R-19]

## Operations log

- Base: assigned `base_sha` 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no bomba / BOMBA / Bombardilo / 0x525F…1E18. content/dependencies/stock-tokens.yaml lists PLTR 0x894E…4F2A.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, Airlock, hook, PLTR, create 0x1df8…2a3c, LaunchCreated / Initialize / Lock logs, holders, Bombardilo name search. RPC eth_getCode/eth_call/eth_getLogs/eth_getTransactionReceipt with Chrome UA at block 53132105.
- Aggregators: DexScreener latest/dex/tokens, pair, search BOMBA and GOYBEAM PLTR; Gecko token, pool. Gecko token/info HTTP 429, not retried.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 PLTR hit at 0x894E…4F2A.
- Social: X user search bombaRH; keyword from:bombaRH Latest; BOMBA Bombardilo PLTR Latest.
- Site: https://bombardilo.com/ HTTP 200, CA and @bombaRH in HTML.
- Failed: Blockscout token creator_address_hash null (create tx / factory param used instead); Gecko token/info 429 not retried; DexScreener tokens prefix 0x525F24BF without full address returned pairs null.
- Time: collection 2026-09-03T04:35Z–2026-09-03T04:50Z.
