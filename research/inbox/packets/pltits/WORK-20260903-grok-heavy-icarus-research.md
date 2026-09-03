---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: pltits
name: PLTITS
packet_tier: seed
as_of: 2026-09-03T05:26:00Z
prior_packet: null
supersedes: null
owned_slugs: [pltits]
allowed_paths:
  - research/inbox/packets/pltits/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: PLTITS
  aliases: ["Palantits"]
  symbols: [PLTITS]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token/info HTTP 429 this pass and was not retried; Blockscout token page lists no homepage"
  official_handle: "NULL — DexScreener info.socials empty; X user search for Palantits returned Palantir company handles, not a token account; no bidirectional site this pass"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "PLTITS is a token cloned by LongLauncher.create into a PLTITS/PLTR Uniswap v4 pool, entity_kind token, not protocol"
        - "No PLTITS official domain; DexScreener websites empty this pass"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime on the shared Doppler/Airlock stack"
        - "PLTITS create tx is LongLauncher.create from 0xbe35…53be (EIP-7702 SemiModularAccount7702); Gecko labels the pool dex bankr-robinhood, same aggregator label used on GOYBEAM/PLTR"
        - "No Bankr handle or bankr.bot URL on the DexScreener token profile this pass"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "PLTITS is Palantits / PLTITS at 0x5c9F…1E18 paired to PLTR 0x894E…4F2A via the same LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "PLTITS is a DopplerERC20V1 clone in a Uniswap v4 PLTITS/PLTR pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x5c9F…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create minted Palantits / PLTITS into Uniswap v4 pool 0x9734…1bd1 quoted against PLTR 0x894E…4F2A. GET api.robinhood.com/rhj/assets (194 assets) has PLTR at that address. PLTR is a rail. Distinct from packed GOYBEAM 0x1Fe2…1E18, PALANTARD 0x0a23…1e18, MONITOR 0x1a91…1e18, and BOMBA 0x525F…1E18. No official site or handle this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

deployments:
  - label: PLTITS token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:12Z
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
      seen: 2026-09-03T05:23:30Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:30Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-15, R-18]
  - label: Airlock (token owner)
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:30Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-17]
  - label: PLTR Palantir Technologies • Robinhood Token (pair quote / numeraire)
    role: token
    address:
      value: "0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:30Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 569309.60, currency: USD, as_of: 2026-09-03T05:23:12Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9734b611c4fd6a9f4a760589c105e3d3813677bee387efdec6aa129f8b541bd1 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 217776.74, currency: USD, as_of: 2026-09-03T05:23:12Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9734b611c4fd6a9f4a760589c105e3d3813677bee387efdec6aa129f8b541bd1 reserve_in_usd (PLTITS/PLTR pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 33936.85, currency: USD, as_of: 2026-09-03T05:23:12Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9734b611c4fd6a9f4a760589c105e3d3813677bee387efdec6aa129f8b541bd1 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 605260.16, currency: USD, as_of: 2026-09-03T05:23:12Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18 pair 0x9734b611…1bd1 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 32223.49, currency: USD, as_of: 2026-09-03T05:23:12Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18 pair 0x9734b611…1bd1 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 317, currency: null, as_of: 2026-09-03T05:23:12Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:23:30Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32b48e8 (53168360). Token 0x5c9F…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name Palantits, symbol PLTITS, decimals 18, totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl code 13927 B. Factory 0x1B37…b69a code 1912 B. LongLauncher 0x22e9…eeED code 5826 B. Airlock code 5695 B. Create-from 0xbe35…53be code 23 B EIP-7702 prefix ef0100 impl 0x69007702…E139. Hook 0x4e34…a544 code 25533 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-16, R-18, R-20], result: "Blockscout api/v2 token 0x5c9F…1E18 name Palantits symbol PLTITS holders_count 317 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. creator_address_hash and creation_transaction_hash null this pass. create tx 0x193c…0a13 2026-09-02T07:21:16Z block 52392273 from 0xbe35…53be (is_contract true proxy_type eip7702 implementations SemiModularAccount7702 0x6900…E139) to LongLauncher method create. decoded supply 1e27 numeraire 0x894E…4F2A tokenFactory 0x1B37…b69a. LaunchCreated normalizedTicker PLTITS numeraire PLTR. PoolManager Initialize id 0x9734…1bd1 currency0 PLTITS currency1 PLTR fee 8388608 hooks DopplerHookInitializer 0x4e34…a544. PLTR 0x894E…4F2A name Palantir Technologies • Robinhood Token holders_count 34837. Search Palantits also lists 0x5fbc…0123, 0x1A2e…1110, 0xe758…9CFD, 0xC2eC…E357, not this CA." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:23:12Z, receipt_ids: [R-7, R-8, R-9, R-19], result: "DexScreener latest/dex/tokens/0x5c9F…1E18: 9 robinhood uniswap pairs; top PLTITS/PLTR v4 0x9734…1bd1 quote 0x894E…4F2A Palantir Technologies • Robinhood Token / PLTR liquidity.usd 32223.49 volume.h24 605260.16 fdv/marketCap 33583 pairCreatedAt 1788333676000 (2026-09-02T07:21:16Z) info.websites [] info.socials []. Two thinner PLTITS/PLTR v4 books 0xbae1…3aba liq 2.09 fdv 1568730 and 0x6d40…9433 liq 2 fdv 34799426. Gecko pool: volume_usd.h24 569309.60 reserve_in_usd 217776.74 fdv_usd 33936.85 pool_created_at 2026-09-02T07:21:16Z dex bankr-robinhood. Gecko token volume_usd.h24 569774.03 (all pools) total_reserve_in_usd 28054.33. Gecko token/info HTTP 429, not retried." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:23:12Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol PLTR hit 1: tokenName Palantir Technologies • Robinhood Token deployments contractAddress 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A chainId 4663 status ASSET_STATUS_ACTIVE. No PLTITS row." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:24:00Z, receipt_ids: [R-4, R-6, R-18], result: "Create tx 0x193c…0a13 receipt 16 logs. OwnershipTransferred newOwner Airlock. Mint 1e27 to Airlock. PoolManager Initialize id 0x9734…1bd1 currency0 0x5c9F…1E18 currency1 0x894E…4F2A fee 8388608 tickSpacing 8 hooks 0x4e34…a544. DopplerHookInitializer Lock beneficiaries 0x21E2…7A66 5e16 (5%) and 0xbe35…53be 95e16 (95%, equals launcher). Airlock Create asset PLTITS numeraire PLTR. LongLauncher LaunchCreated poolOrHook/asset 0x5c9F…1E18 numeraire 0x894E…4F2A launcher 0xbe35…53be deployedAt 1788333676 reservedUntil 1788420076 normalizedTicker PLTITS. RehypeDopplerHookInitializer FeeScheduleSet poolId 0x9734…1bd1 startingTime 1788333676 startFee 800000 endFee 11200 durationSeconds 10." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against numeraire PLTR. Tx 0x193c…0a13 from 0xbe35…53be at 2026-09-02T07:21:16Z minted Palantits / PLTITS; owner() is Airlock 0xeb7C…0862; create decoded tokenFactory 0x1B37…b69a.", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Palantits", class: verified, observed_at: 2026-09-03T05:23:12Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "PLTITS", class: verified, observed_at: 2026-09-03T05:23:12Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:23:12Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no official handle; DexScreener info.socials empty; X user search for Palantits returned Palantir company handles", class: claim, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote PLTR 0x894E…4F2A is Palantir Technologies • Robinhood Token in GET rhj/assets (194 assets). PLTR is a rail, not this token. Distinct from packed GOYBEAM 0x1Fe2…1E18 pair 0x069c…b2bb, PALANTARD 0x0a23…1e18 pair 0x23c7…0a5d, MONITOR 0x1a91…1e18 pair 0xcfa7…8a3d, and BOMBA 0x525F…1E18 pair 0xa1bb…1e79, each a different token with its own PLTITS-unrelated PLTR Uniswap v4 book. Blockscout search also lists other Palantits / PLTITS tickers (0x5fbc…0123, 0x1A2e…1110, 0xe758…9CFD, 0xC2eC…E357), not this CA.", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-7, R-12, R-16, R-19, R-20], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "PLTITS/PLTR Uniswap v4 24h volume 569309.60 USD and reserve_in_usd 217776.74 at 2026-09-03T05:23:12Z (Gecko pool slice, not Gecko token all-pools 569774.03). Gecko token total_reserve_in_usd 28054.33 disagrees with the pool reserve.", class: verified, observed_at: 2026-09-03T05:23:12Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 32223.49 volume.h24 605260.16 fdv/marketCap 33583 at 2026-09-03T05:23:12Z", class: verified, observed_at: 2026-09-03T05:23:12Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 317, class: verified, observed_at: 2026-09-03T05:23:12Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock; factory() reverts; create-from 0xbe35…53be is EIP-7702 (23-byte ef0100 code, SemiModularAccount7702 0x6900…E139), not empty code", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-5, R-6, R-17], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "LaunchCreated launcher 0xbe35321140F0d88F7B9af1711C25A9D58c2553be equals the create caller and the Lock 95% beneficiary; DopplerHookInitializer Lock beneficiaries 5% 0x21E2…7A66 and 95% 0xbe35…53be", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-4, R-6, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is PLTR 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x9734…1bd1", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-6, R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; LaunchCreated and create-tx name LongLauncher 0x22e9…eeED as the pad, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:23:12Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "copypasta-pattern and third-party-link: X Latest for $PLTITS is dominated by netlify claim/vote URLs that embed CA 0x5c9F…1E18; DexScreener socials empty; no official handle this pass", class: claim, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-7, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 33936.85; DexScreener fdv/marketCap 33583. Gecko market_cap_usd null. Gecko pool reserve_in_usd 217776.74 vs DexScreener liquidity.usd 32223.49 vs Gecko token total_reserve_in_usd 28054.33.", class: verified, observed_at: 2026-09-03T05:23:12Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A", class: verified, observed_at: 2026-09-03T05:23:12Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T05:23:30Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token/info HTTP 429 this pass", class: claim, observed_at: 2026-09-03T05:23:12Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "pltits | PLTITS | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T05:23:30Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko PLTITS/PLTR 24h volume $569k; DexScreener $605k / liq $32.2k"
    summary: "Gecko pool 0x9734…1bd1 volume_usd.h24 569310 reserve_in_usd 217777 fdv_usd 33937. DexScreener same pair liquidity.usd 32223 volume.h24 605260. Gecko token total_reserve_in_usd 28054 disagrees with the pool reserve."
    occurred_at: 2026-09-03T05:23:12Z
    observed_at: 2026-09-03T05:23:12Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@JAYONSOLANA posted a Long swap of $pltits that filled far below the live quote"
    summary: "@JAYONSOLANA 2026-09-02T09:40:49Z asked @longdotxyz / @Natan_benish about tx 0x3d1b…5738: 2% slippage, live quote ~7 million tokens, wallet received 12591. CA 0x5c9f…1e18. @0xCryptris replied the route split across two PLTITS v4 pools summing to 12591.276586553278183338."
    occurred_at: 2026-09-02T09:40:49Z
    observed_at: 2026-09-03T05:25:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10, R-11]
  - id: EVT-3
    type: ct
    title: "X Latest $PLTITS posts embed netlify claim/vote URLs"
    summary: "Latest $PLTITS stream includes repeated netlify.app/claim and leaderboard URLs with contract=0x5c9F…1E18. DexScreener info.socials empty. Flag copypasta-pattern and third-party-link; not an official handle."
    occurred_at: 2026-09-03T03:58:55Z
    observed_at: 2026-09-03T05:25:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-4
    type: onchain
    title: "LongLauncher create minted Palantits / PLTITS"
    summary: "Tx 0x193c…0a13 from 0xbe35…53be at 2026-09-02T07:21:16Z; LaunchCreated poolId 0x9734…1bd1 normalizedTicker PLTITS. Lock 95% beneficiary equals the launcher."
    occurred_at: 2026-09-02T07:21:16Z
    observed_at: 2026-09-03T05:24:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-5
    type: ct
    title: "@JAYONSOLANA posted still holding $pltits versus $goybeam"
    summary: "@JAYONSOLANA 2026-09-03T00:11:43Z: palantir seems to have its runner already. Still holding my $pltits incase $goybeam doesn’t make it. Treats the two tickers as separate books."
    occurred_at: 2026-09-03T00:11:43Z
    observed_at: 2026-09-03T05:25:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-6
    type: onchain
    title: "Create tx set a 10-second FeeScheduleSet on the primary pool"
    summary: "RehypeDopplerHookInitializer FeeScheduleSet on pool 0x9734…1bd1 at create: startingTime 1788333676 startFee 800000 endFee 11200 durationSeconds 10. Separate from the later 09:40 swap in EVT-2."
    occurred_at: 2026-09-02T07:21:16Z
    observed_at: 2026-09-03T05:24:00Z
    affected_fields: [product.mechanism, control.privileged-role]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x5c9F…1E18 Palantits / PLTITS", url: "https://robinhoodchain.blockscout.com/address/0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18", published_at: null, accessed_at: 2026-09-03T05:23:12Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18 name Palantits is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol PLTITS decimals 18 total_supply 1000000000000000000000000000 holders_count 317 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T05:23:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T05:23:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-25], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x193c74c5…0a13", url: "https://robinhoodchain.blockscout.com/tx/0x193c74c50378acd46e1c071f0af210dc58595c1fa0b056acb2c2440d41e60a13", published_at: 2026-09-02T07:21:16Z, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-4], excerpt: "timestamp 2026-09-02T07:21:16.000000Z status ok result success block_number 52392273 from 0xbe35321140F0d88F7B9af1711C25A9D58c2553be (is_contract true proxy_type eip7702 implementations SemiModularAccount7702 0x69007702764179f14F51cdce752f4f775d74E139) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded supply 1e27 numeraire 0x894E…4F2A factory 0x1B37…b69a." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on PLTITS", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:23:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22, CLM-25], excerpt: "eth_blockNumber 0x32b48e8 (53168360). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name Palantits symbol PLTITS decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Factory code 1912 B. Impl code 13927 B. LongLauncher 5826 B. Airlock 5695 B. Create-from 0xbe35…53be code 23 B prefix ef0100." }
  - { id: R-6, publisher: Blockscout, title: "create tx logs Initialize / LaunchCreated / Lock / FeeScheduleSet", url: "https://robinhoodchain.blockscout.com/tx/0x193c74c50378acd46e1c071f0af210dc58595c1fa0b056acb2c2440d41e60a13", published_at: 2026-09-02T07:21:16Z, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-15, CLM-21, EVT-6], excerpt: "PoolManager Initialize id 0x9734b611c4fd6a9f4a760589c105e3d3813677bee387efdec6aa129f8b541bd1 currency0 PLTITS currency1 PLTR 0x894E…4F2A fee 8388608 hooks 0x4e346895…a544. Lock beneficiaries 5% 0x21E2…7A66 95% 0xbe35…53be. LaunchCreated normalizedTicker PLTITS launcher 0xbe35…53be. FeeScheduleSet startFee 800000 endFee 11200 durationSeconds 10." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens PLTITS", url: "https://api.dexscreener.com/latest/dex/tokens/0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18", published_at: null, accessed_at: 2026-09-03T05:23:12Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "9 robinhood uniswap pairs. Top pairAddress 0x9734b611c4fd6a9f4a760589c105e3d3813677bee387efdec6aa129f8b541bd1 labels v4 base Palantits / PLTITS quote Palantir Technologies • Robinhood Token / PLTR 0x894E1EC2…4F2A liquidity.usd 32223.49 volume.h24 605260.16 fdv 33583 marketCap 33583 pairCreatedAt 1788333676000. info.websites [] info.socials []." }
  - { id: R-8, publisher: GeckoTerminal, title: "PLTITS/PLTR Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x9734b611c4fd6a9f4a760589c105e3d3813677bee387efdec6aa129f8b541bd1", published_at: null, accessed_at: 2026-09-03T05:23:12Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name PLTITS / PLTR pool_created_at 2026-09-02T07:21:16Z fdv_usd 33936.85098 market_cap_usd null volume_usd.h24 569309.601963572 reserve_in_usd 217776.7359 transactions.h24 buys 3409 sells 3844. dex bankr-robinhood quote robinhood_0x894e1ec2d74ffe5aef8dc8a9e84686accb964f2a." }
  - { id: R-9, publisher: GeckoTerminal, title: "Palantits token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18", published_at: null, accessed_at: 2026-09-03T05:23:12Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20, CLM-23], excerpt: "name Palantits symbol PLTITS decimals 18 total_supply 1e27 price_usd 0.00003437062152 fdv_usd 34370.6215212279 market_cap_usd null volume_usd.h24 569774.026190612 total_reserve_in_usd 28054.3295048263. coingecko_coin_id null. Top pool 0x9734…1bd1. GET .../info HTTP 429, not retried." }
  - { id: R-10, publisher: "@JAYONSOLANA", title: "Long swap quote vs fill on $pltits", url: "https://x.com/JAYONSOLANA/status/2095084524124221444", published_at: 2026-09-02T09:40:49Z, accessed_at: 2026-09-03T05:25:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "Hey @Natan_benish @longdotxyz Trying to figure out this transaction on long. Slippage was set to 2% and the live quote reflected 7million~ tokens ($160 @ 20k marketcap), however the swap went through and I only received 12,591 tokens. The coin is $pltits (0x5c9f9a42310541a24dc5cee4cc96345feaea1e18) Transaction hash: 0x3d1be0e922abeeee486951303813851d2acbef10bc85951d3b42e92e0afe5738" }
  - { id: R-11, publisher: "@0xCryptris", title: "Route split across two PLTITS v4 pools", url: "https://x.com/0xCryptris/status/2095092793349750824", published_at: 2026-09-02T10:13:41Z, accessed_at: 2026-09-03T05:25:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "0.063 ETH → WETH → SPY (Uniswap V3) → USDG + PLTR (V4) → PLTITS (V4, split across two pools). The two PLTITS pools output 6,234.871762631016200525 and 6,356.404823922261982813. Sum: 12,591.276586553278183338. Amount that landed in your wallet: 12,591.276586553278183338." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:23:12Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol PLTR hit 1: tokenName Palantir Technologies • Robinhood Token deployments contractAddress 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A chainId 4663 status ASSET_STATUS_ACTIVE. No PLTITS tokenSymbol." }
  - { id: R-13, publisher: X, title: "user search Palantits", url: "https://x.com/search?q=Palantits&f=user", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8], excerpt: "X user search Palantits returned PalantirTech, DailyPalantir, Palantir_FR, PalantirPrivacy and unrelated handles. No token account that embeds CA 0x5c9F…1E18 this pass." }
  - { id: R-14, publisher: DexScreener, title: "PLTITS/PLTR pair page", url: "https://dexscreener.com/robinhood/0x9734b611c4fd6a9f4a760589c105e3d3813677bee387efdec6aa129f8b541bd1", published_at: null, accessed_at: 2026-09-03T05:23:12Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "DexScreener robinhood pair 0x9734b611c4fd6a9f4a760589c105e3d3813677bee387efdec6aa129f8b541bd1 PLTITS / PLTR Uniswap v4." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T05:23:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Compiler v0.8.26 file_path src/LongLauncher.sol is_partially_verified false verified_at 2026-07-14T11:23:57Z." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x894E…4F2A Palantir Technologies • Robinhood Token / PLTR", url: "https://robinhoodchain.blockscout.com/address/0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A", published_at: null, accessed_at: 2026-09-03T05:23:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A name BeaconProxy is_contract true is_verified true. token name Palantir Technologies • Robinhood Token symbol PLTR holders_count 34837." }
  - { id: R-17, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T05:23:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true." }
  - { id: R-18, publisher: Blockscout, title: "LaunchCreated log for PLTITS", url: "https://robinhoodchain.blockscout.com/tx/0x193c74c50378acd46e1c071f0af210dc58595c1fa0b056acb2c2440d41e60a13", published_at: 2026-09-02T07:21:16Z, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-14, CLM-15, EVT-4], excerpt: "LaunchCreated poolOrHook 0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18 asset 0x5c9F…1E18 numeraire 0x894E1EC2D74FFE5AEF8Dc8A9e84686acCB964F2A launcher 0xbe35321140F0d88F7B9af1711C25A9D58c2553be deployedAt 1788333676 reservedUntil 1788420076 normalizedTicker PLTITS. Block 52392273." }
  - { id: R-19, publisher: DexScreener, title: "search GOYBEAM PLTR distinct books", url: "https://api.dexscreener.com/latest/dex/search?q=GOYBEAM%20PLTR", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "Robinhood Uniswap v4 PLTR books include GOYBEAM 0x1Fe2Abf6…1E18 pair 0x069cdb4f…b2bb; PALANTARD 0x0a2329aA…1e18 pair 0x23c73750…0a5d; PLTITS 0x5c9F9a42…1E18 pair 0x9734b611…1bd1; MONITOR 0x1a911bb9…1e18 pair 0xcfa7bb34…8a3d; BOMBA 0x525F24BF…1E18 pair 0xa1bb8509…1e79. Separate tokens, separate pair ids." }
  - { id: R-20, publisher: Blockscout, title: "search Palantits / PLTITS name collisions", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=Palantits", published_at: null, accessed_at: 2026-09-03T05:23:12Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "Token Palantits PLTITS 0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18. Separate tokens Palantits PLTITS 0x5fbc33D5b6a2863D67904FF0Dc1192829B790123; Palantits PLTITS 0x1A2e0444898FE5AA32990422BA0b082A58701110; Palantits PLTITS 0xe758b02648FB08F8dC306e991808D8b6c27F9CFD; Palantits Palantits 0xC2eC11f544C84de325FBE9677d78b634817aE357." }
  - { id: R-21, publisher: "@katelynbouche", title: "$PLTITS holders claim URL", url: "https://x.com/katelynbouche/status/2095360867663569312", published_at: 2026-09-03T03:58:55Z, accessed_at: 2026-09-03T05:25:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-3], excerpt: "$PLTITS holders Check wallet Something is live CA: 0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18 https://crypto-keo.netlify.app/claim?contract=0x5c9F9a42310541A24Dc5cEE4CC96345FeaeA1E18&cfg=evmdrop&pid=lupPl. Same CA also appears in currentleaderboardlist-on.netlify.app vote URLs this pass." }
  - { id: R-22, publisher: "@JAYONSOLANA", title: "still holding $pltits versus $goybeam", url: "https://x.com/JAYONSOLANA/status/2095303689455952346", published_at: 2026-09-03T00:11:43Z, accessed_at: 2026-09-03T05:25:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "Alright, palantir seems to have its runner already and Im not one to try pvp. Still holding my $pltits incase $goybeam doesn’t make it." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x5c9F…1E18?", checked: "DexScreener info.websites [] info.socials []; Gecko token/info HTTP 429; X user search Palantits returned Palantir company handles, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P1, question: "Does Blockscout later set creator_address_hash on 0x5c9F…1E18 to DopplerERC20V1Factory, matching GOYBEAM?", checked: "Token page creator_address_hash null; create tx is LongLauncher.create with factory param 0x1B37…b69a, 2026-09-03", next: "re-fetch api/v2/addresses/0x5c9F…1E18 creator fields" }
  - { priority: P1, question: "Which of the three DexScreener PLTITS/PLTR v4 books did tx 0x3d1b…5738 actually hit?", checked: "DexScreener lists 0x9734…1bd1 (liq $32.2k), 0xbae1…3aba (liq $2.09), 0x6d40…9433 (liq $2); @0xCryptris said the fill split across two PLTITS pools, 2026-09-03", next: "open the swap tx logs on Blockscout and name the pool ids" }
  - { priority: P1, question: "Are Blockscout Palantits / PLTITS ticker collisions later confused with this slug?", checked: "Search lists 0x5fbc…0123, 0x1A2e…1110, 0xe758…9CFD, 0xC2eC…E357 besides 0x5c9F…1E18, 2026-09-03", next: "keep CAs separate; do not merge on ticker PLTITS" }
  - { priority: P2, question: "Why does Gecko label PLTITS/PLTR dex bankr-robinhood while create is LongLauncher?", checked: "Gecko pool relationships.dex id bankr-robinhood; same label on packed GOYBEAM/PLTR; create tx to LongLauncher, 2026-09-03", next: "treat as aggregator labeling unless Bankr docs name this CA" }
  - { priority: P2, question: "Which liquidity figure is the pool slice: Gecko reserve $217k, DexScreener $32.2k, or Gecko token total_reserve $28.1k?", checked: "All three returned on 2026-09-03T05:23:12Z; assignment lead was DexScreener liq ~$34,145 vol ~$604,523", next: "do not collapse them; re-fetch both endpoints" }
---

# PLTITS — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against Palantir Technologies • Robinhood Token. LongLauncher.create deployed Palantits (PLTITS) on 2026-09-02 and seeded the PLTITS/PLTR book. Traders buy and sell PLTITS on Uniswap v4. No official site or handle was located this pass.

Themes: memecoin, stock-paired:PLTR, rwa

## Why it matters

The PLTITS/PLTR Uniswap v4 book printed about $569k of 24h volume on Gecko and $605k on DexScreener at collection, with the quote token matching the Robinhood PLTR Stock Token in GET /rhj/assets. PLTR is a rail, not this token. Packed GOYBEAM, PALANTARD, MONITOR and BOMBA are separate PLTR books, not this CA.

## What could go wrong

USD liquidity figures on the PLTITS/PLTR book count both sides, and Gecko pool reserve ($218k) disagrees with DexScreener liquidity ($32.2k) and with Gecko token total_reserve ($28.1k). DexScreener lists two extra PLTITS/PLTR v4 books with ~$2 liquidity and inflated FDV. Gecko labels the pool dex as bankr-robinhood while DexScreener and the create tx say Uniswap v4 / LongLauncher. Other Palantits tickers exist on Blockscout. No official handle this pass.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xbe35…53be at 2026-09-02T07:21:16Z minted Palantits / PLTITS supply 1e9*1e18 into Uniswap v4 poolId 0x9734…1bd1 quoted against PLTR 0x894E…4F2A. owner() returns Airlock 0xeb7C…0862. factory() reverts. [verified R-4 R-5 R-6 R-18]

PoolManager is 0x8366…0951. Hooks are DopplerHookInitializer 0x4e34…a544. RehypeDopplerHookInitializer set startFee 800000 / endFee 11200 / durationSeconds 10 on create. Secondary PLTITS/PLTR, PLTITS/ETH and PLTITS/USDG v4 books exist on DexScreener with far less liquidity than the primary PLTR book. [verified R-6 R-7 R-9]

## Control and security

token owner() is Airlock. Create-from 0xbe35…53be is an EIP-7702 account (23-byte ef0100 code, SemiModularAccount7702 0x6900…E139) and is named launcher in LaunchCreated. Lock beneficiaries on create were 0x21E2…7A66 at 0.05 and the same launcher 0xbe35…53be at 0.95. [verified R-5 R-6 R-18]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified R-2 R-3 R-15] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. X user search for Palantits returned Palantir company handles. Latest $PLTITS posts include netlify claim and vote URLs that embed the CA; flag copypasta-pattern and third-party-link. [claim R-7 R-13 R-21]

## Economics and activity

PLTITS/PLTR Uniswap v4 24h volume is 569309.60 USD and reserve_in_usd is 217776.74 at 2026-09-03T05:23:12Z from the Gecko pool endpoint. fdv_usd is 33936.85. Gecko token volume_usd.h24 is 569774.03 across all pools. Token total_reserve_in_usd is 28054.33. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 32223.49, volume.h24 605260.16, fdv/marketCap 33583. Blockscout holders_count 317. Pair created 2026-09-02T07:21:16Z. Assignment lead of DexScreener liq ~$34,145 / vol ~$604,523 is the same pair at an earlier as_of; live DexScreener at this collection is $32,223 / $605,260. [claim R-1 R-7]

## Material risks

- Quote token PLTR 0x894E…4F2A is the rhj/assets Stock Token rail, not this token. [verified R-12 R-16]
- Pool USD figures disagree across Gecko reserve, DexScreener liquidity, and Gecko token total_reserve. [claim R-7 R-8 R-9]
- Two extra PLTITS/PLTR v4 books have ~$2 liquidity and FDV in the millions. [claim R-7]
- No official handle or domain this pass; X Latest includes netlify claim/vote URLs. [claim R-7 R-21]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/PLTR and the create tx plus LaunchCreated/Lock/FeeScheduleSet logs, RPC name/symbol/owner/factory/code, DexScreener tokens and GOYBEAM PLTR search, Gecko pool/token (info 429), /rhj/assets, @JAYONSOLANA, @0xCryptris, and a netlify claim post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 569309.60 is the Gecko PLTITS/PLTR pool 24h volume, not the 569774.03 token all-pools figure. Reserve 217776.74 is that pool. DexScreener 605260.16 / 32223.49 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that PLTITS is GOYBEAM, PALANTARD, MONITOR, or BOMBA, or that PLTR is this token, or that Gecko's bankr-robinhood label makes this a Bankr launch. Creation is LongLauncher.create of 0x5c9F…1E18 against PLTR 0x894E…4F2A; the other names are different CAs; PLTR is the rhj/assets Stock Token rail. [inference R-4 R-12 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` on assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no pltits / PLTITS / Palantits / 0x5c9F…1E18.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, Airlock, PLTR, create tx 0x193c…0a13, LaunchCreated/Lock/FeeScheduleSet logs, Palantits search. RPC eth_getCode/eth_call with Chrome UA at block 53168360; eth_getLogs LongLauncher topic token 0x5c9F…1E18.
- Aggregators: DexScreener latest/dex/tokens and search GOYBEAM PLTR / PLTITS PLTR. Gecko pool GET HTTP 200 then token GET HTTP 200; token/info HTTP 429, not retried.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 PLTR, 0 PLTITS.
- Social: X keyword Latest PLTITS / Palantits / $PLTITS; user search Palantits; thread 2095084524124221444.
- Failed: Blockscout token creator_address_hash null (create tx used instead); Gecko token/info 429.
- Time: collection 2026-09-03T05:22Z–2026-09-03T05:26Z.
