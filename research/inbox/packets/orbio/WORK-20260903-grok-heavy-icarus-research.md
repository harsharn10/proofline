---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: orbio
name: ORBIO
packet_tier: seed
as_of: 2026-09-03T03:34:00Z
prior_packet: null
supersedes: null
owned_slugs: [orbio]
allowed_paths:
  - research/inbox/packets/orbio/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Orbio.so
  aliases: [ORBIO, Orbio]
  symbols: [ORBIO]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.orbio.so
  official_handle: "@orbiodotso"
  repository: "NULL — no GitHub org or repository URL on www.orbio.so, the @orbiodotso profile, onchain socials(), or the verified PonsV2LauncherToken source this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily"
        - "ORBIO is PonsV2LauncherToken 0xAa07…28A3 created through PonsV2LaunchDeployer 0x3711…1A42; entity_kind token, not protocol"
        - "No shared domain or handle; orbio.so and @orbiodotso do not operate the pad"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "ORBIO is Orbio.so at 0xAa07…28A3 paired to the same NVDA 0xd060…9EEC via Pons v2, site orbio.so / @orbiodotso"
        - "Same-stock NVDA book, not an identity match; no shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "ORBIO launch tx called PonsV2LaunchAndBuy 0xe33E…2948, not LongLauncher"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, fee-routing]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the census. Token 0xAa07…28A3 reproduced on 4663 as verified PonsV2LauncherToken; launchAndBuy on 2026-08-31 quoted NVDA 0xd060…9EEC. Live Uniswap v4 ORBIO/NVDA book. Site and handle bidirectional with onchain socials(). Fee-to-credits path is a site claim, not in the token ABI. DexScreener and Gecko disagree on pool reserve. [R-1] [R-3] [R-5] [R-6] [R-11] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-16, CLM-20, CLM-8], note: "" }

links:
  - { kind: site, url: "https://www.orbio.so", authenticity: confirmed }
  - { kind: site, url: "https://orbio.so", authenticity: confirmed }
  - { kind: x, url: "https://x.com/orbiodotso", authenticity: confirmed }
  - { kind: other, url: "https://www.orbio.so/build", authenticity: confirmed }

deployments:
  - label: ORBIO token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:28:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-8]
  - label: PonsV2LaunchDeployer (token creator_address_hash)
    role: other
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:28:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-7]
  - label: PonsV2LaunchAndBuy (creation tx `to`)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:29:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6]
  - label: PonsV2BondingCurve (token curve)
    role: other
    address:
      value: "0x7DF21d1F9C75533E6F724dF5C93Cd6C567DaEC02"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-9]

metrics:
  - { kind: tvl, value: 173802.26, currency: USD, as_of: 2026-09-03T03:31:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa95b1fbd…ddc1 ORBIO/NVDA reserve_in_usd", class: claim, receipt_ids: [R-12] }
  - { kind: tvl, value: 197234.79, currency: USD, as_of: 2026-09-03T03:29:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xAa07…28A3 pair 0xa95b1fbd…ddc1 ORBIO/NVDA Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-11] }
  - { kind: volume_24h, value: 2177014.68, currency: USD, as_of: 2026-09-03T03:31:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa95b1fbd…ddc1 ORBIO/NVDA volume_usd.h24", class: claim, receipt_ids: [R-12] }
  - { kind: volume_24h, value: 2196574.70, currency: USD, as_of: 2026-09-03T03:29:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xAa07…28A3 pair 0xa95b1fbd…ddc1 ORBIO/NVDA volume.h24", class: claim, receipt_ids: [R-11] }
  - { kind: volume_24h, value: 3250816.84, currency: USD, as_of: 2026-09-03T03:31:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xaa07…28a3 volume_usd.h24 (all pools)", class: claim, receipt_ids: [R-13] }
  - { kind: market_cap, value: 4836157, currency: USD, as_of: 2026-09-03T03:29:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xAa07…28A3 pair 0xa95b1fbd…ddc1 marketCap", class: claim, receipt_ids: [R-11] }
  - { kind: holders, value: 2364, currency: null, as_of: 2026-09-03T03:28:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xAa07…28A3 holders_count", class: claim, receipt_ids: [R-4] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com block 0x32a48ca (53102794): eth_getCode 0xAa07…28A3 3248 bytes, not EIP-1167; name() Orbio.so; symbol() ORBIO; decimals 18; totalSupply 950000000000000000000000000; owner() reverted; launchFactory() 0x7eD5…EC7e; curve() 0x7DF2…EC02; deployer() 0xbFAb…04B8 (eth_getCode empty); socials twitter https://x.com/orbiodotso website https://orbio.so" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:28:00Z, receipt_ids: [R-3, R-4, R-10], result: "Blockscout api/v2/addresses 0xAa07…28A3: is_contract true is_verified true name PonsV2LauncherToken proxy_type null creator_address_hash 0x3711…1A42 creation_transaction_hash 0xf2b15348…500a. api/v2/tokens: name Orbio.so symbol ORBIO decimals 18 holders_count 2364 total_supply 950000000000000000000000000. smart-contracts: PonsV2LauncherToken Solidity 0.8.35 file contracts/src/v2/PonsV2LauncherToken.sol is_fully_verified true verified_at 2026-08-31T22:45:20Z" }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:29:00Z, receipt_ids: [R-6, R-7, R-8, R-9], result: "Creation tx 0xf2b15348… to PonsV2LaunchAndBuy 0xe33E…2948 method launchAndBuy timestamp 2026-08-31T22:33:11Z block 51223088 status ok from 0xbFAb…04B8. pairToken 0xd0601CE1…9EEC (NVIDIA • Robinhood Token). params name Orbio.so symbol ORBIO twitter https://x.com/orbiodotso website https://orbio.so. Mint 1e27 to PonsV2BondingCurve 0x7DF2…EC02. launchFactory() 0x7eD5…EC7e named PonsV2LaunchFactory verified; deployer contract PonsV2LaunchDeployer verified; curve PonsV2BondingCurve verified" }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T03:29:00Z, receipt_ids: [R-11], result: "DexScreener latest/dex/tokens/0xAa07…28A3: 12 pairs. Top ORBIO/NVDA Uniswap v4 0xa95b1fbd…ddc1 quote NVDA 0xd0601CE1…9EEC liquidity.usd 197234.79 volume.h24 2196574.7 marketCap 4836157 pairCreatedAt 2026-09-01T00:45:52Z websites https://orbio.so/ socials https://x.com/orbiodotso. Secondary ORBIO/USDG Uniswap v4 liquidity.usd 105127.81 volume.h24 955107.84" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-12, R-13], result: "Gecko pool 0xa95b1fbd…ddc1 name ORBIO/NVDA reserve_in_usd 173802.2593 volume_usd.h24 2177014.67547488 pool_created_at 2026-09-01T00:45:52Z dex id pons-v2-dex quote 0xd0601ce1…9eec. Gecko token name Orbio.so symbol ORBIO total_supply 1000000000000000000000000000.0 volume_usd.h24 3250816.83521815 fdv_usd 5178194.92" }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2, R-5, R-6], result: "www.orbio.so HTML contains https://x.com/orbiodotso and CA 0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3, and names a Pons launch quoted against tokenized NVDA. orbio.so HTTP 308 to https://www.orbio.so/. @orbiodotso profile website https://orbio.so/. Token socials() and launchAndBuy params store the same handle and https://orbio.so" }
  - { id: REP-7, method: api, chain_id: 4663, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-17, R-18], result: "DexScreener AI 0x2E8c…1e18 AI/NVDA Uniswap v4 liquidity.usd 6334184.93 volume.h24 5084897.43 marketCap 285966574. microduck 0xD5f1…E725 microduck/NVDA Uniswap v4 0xcde4d35e…c370 liquidity.usd 520946.96 volume.h24 1870614.56 marketCap 35513769. Both quote NVDA; neither base is 0xAa07…28A3" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "ORBIO/NVDA Uniswap v4 pool 0xa95b1fbd…ddc1 on Robinhood Chain; quote is NVIDIA • Robinhood Token 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-11, R-12, R-6], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.orbio.so (orbio.so HTTP 308 to www)", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@orbiodotso", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2, R-5, R-6], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: "ORBIO", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-3, R-6, R-11], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-7, field: identity.name, value: "Orbio.so", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: relationship, value: "Launchpad Pons v2: creation tx 0xf2b15348… called PonsV2LaunchAndBuy.launchAndBuy at 0xe33E…2948 on 2026-08-31T22:33:11Z; creator_address_hash PonsV2LaunchDeployer 0x3711…1A42; launchFactory() PonsV2LaunchFactory 0x7eD5…EC7e", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-6, R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Primary pair asset NVDA (Robinhood Stock Token 0xd0601CE1…9EEC)", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-6, R-11], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Liquidity venue Uniswap v4 for the ORBIO/NVDA book (DexScreener labels [v4] dexId uniswap); pool_created_at 2026-09-01T00:45:52Z", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko ORBIO/NVDA 0xa95b1fbd…ddc1 reserve_in_usd 173802.26", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DexScreener ORBIO/NVDA Uniswap v4 liquidity.usd 197234.79", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Gecko ORBIO/NVDA volume_usd.h24 2177014.68", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener ORBIO/NVDA volume.h24 2196574.70", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Blockscout holders_count 2364", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-16, field: product.mechanism, value: "Site: every ORBIO trade pays 1.50% in fees to on-chain escrow; 50% of collected fees becomes OpenRouter credits for wallets with time-weighted ≥1,000 ORBIO; net 0.75% of volume to holder dashboards. Token ABI has no fee-split function", class: claim, observed_at: 2026-09-03T03:27:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: control.owner, value: "owner() reverted; ABI has no owner; deployer() 0xbFAbE94A454947f0F98bC92D3e052413928B04B8 (no code); launchFactory immutable 0x7eD5…EC7e", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-5, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on www.orbio.so, the X profile, or the PonsV2LauncherToken source this pass", class: unknown, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: other, value: "Same-stock NVDA pairs that are not this token and are not identity matches: AI/NVDA (0x2E8c…1e18, DexScreener liq 6334184.93 vol 5084897.43 mcap 285966574) and microduck/NVDA (0xD5f1…E725, DexScreener liq 520946.96 vol 1870614.56 mcap 35513769)", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-17, R-18], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "Gecko token volume_usd.h24 3250816.84 fdv_usd 5178194.92 total_supply 1e27", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-13], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-22, field: economics.metric, value: "DexScreener ORBIO/NVDA marketCap 4836157", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-23, field: "account.@orbiodotso.role", value: project, class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@orbiodotso.slug", value: orbio, class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "Gecko pool endpoint attributes ORBIO/NVDA 0xa95b1fbd…ddc1 to dex id pons-v2-dex", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-27, field: economics.metric, value: "RPC/Blockscout totalSupply 950000000000000000000000000 (950M); launch mint was 1e27 to the curve", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-28, field: product.mechanism, value: "Onchain socials() and launch params: twitter https://x.com/orbiodotso website https://orbio.so; description Hold $ORBIO, earn OpenRouter credits", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-29, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-6, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-3, R-11], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-31, field: activity.status, value: "@orbiodotso 2026-09-01T06:47:32Z: few hours since launch; 50m tokens burned; 13k usd distributed as llm credits", class: claim, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: product.mechanism, value: "@orbiodotso 2026-09-02T01:50:10Z: hold 1000 tokens to qualify, down from 100000", class: claim, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: communications.status, value: "@orbiodotso 2026-09-02T14:12:49Z: Orbio Build Week, 7-day competition, 10 winners, 8M Orbio tokens; apply at www.orbio.so/build", class: claim, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-11, CLM-12]
    material_effect: "ORBIO/NVDA liquidity is $173,802.26 on Gecko and $197,234.79 on DexScreener; a card that collapses them would misstate the book"
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-10, CLM-26]
    material_effect: "DexScreener labels the ORBIO/NVDA pool Uniswap v4; Gecko attributes the same pool id to pons-v2-dex"
    status: open
    resolution: null
  - id: CON-3
    field: economics.metric
    claim_ids: [CLM-21, CLM-27]
    material_effect: "Gecko token total_supply is still 1e27; RPC and Blockscout totalSupply is 950M after the launch mint of 1B; fdv/mcap that use the 1B figure would overstate float"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "ORBIO created through PonsV2LaunchAndBuy against NVDA"
    summary: "Tx 0xf2b15348… called launchAndBuy on PonsV2LaunchAndBuy; token 0xAa07…28A3 named Orbio.so / ORBIO; pairToken NVDA 0xd060…9EEC at block 51223088."
    occurred_at: 2026-08-31T22:33:11Z
    observed_at: 2026-09-03T03:29:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-2
    type: onchain
    title: "ORBIO/NVDA Uniswap v4 pool created"
    summary: "Gecko pool_created_at and DexScreener pairCreatedAt 2026-09-01T00:45:52Z for ORBIO/NVDA 0xa95b1fbd…ddc1, about two hours after launchAndBuy."
    occurred_at: 2026-09-01T00:45:52Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-11, R-12]
  - id: EVT-3
    type: company
    title: "Official account posted 50m burned and $13k LLM credits"
    summary: "@orbiodotso posted that a few hours after launch, 50m tokens were burned and 13k usd distributed as llm credits."
    occurred_at: 2026-09-01T06:47:32Z
    observed_at: 2026-09-03T03:30:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: company
    title: "Official account cut the credit floor to 1,000 ORBIO"
    summary: "@orbiodotso posted that holders now need 1,000 tokens to qualify for LLM credits, down from 100,000, and that skipped users were granted missing credits."
    occurred_at: 2026-09-02T01:50:10Z
    observed_at: 2026-09-03T03:30:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-5
    type: company
    title: "Official account announced Orbio Build Week"
    summary: "@orbiodotso posted a 7-day Build Week: $100 bootstrap credits, 10 winners, 8M ORBIO, applications at www.orbio.so/build."
    occurred_at: 2026-09-02T14:12:49Z
    observed_at: 2026-09-03T03:30:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-6
    type: onchain
    title: "Gecko and DexScreener disagree on ORBIO/NVDA liquidity"
    summary: "Gecko ORBIO/NVDA reserve_in_usd $173,802.26; DexScreener same pool liquidity.usd $197,234.79. 24h volume is $2.18M / $2.20M."
    occurred_at: 2026-09-03T03:31:00Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11, R-12]

receipts:
  - { id: R-1, publisher: Orbio, title: "Official site", url: "https://www.orbio.so", published_at: null, accessed_at: 2026-09-03T03:27:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-7, CLM-9, CLM-16, CLM-19, CLM-23, CLM-24], excerpt: "$ORBIO is a Pons launch on Robinhood Chain, quoted against tokenized NVDA rather than a stablecoin. Ticker $ORBIO. Chain Robinhood Chain · 4663. Contract 0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3. Every ORBIO trade pays 1.50% of its volume in fees. 50% of what the treasury collects is converted into OpenRouter credits. HTML includes https://x.com/orbiodotso." }
  - { id: R-2, publisher: orbio, title: "X account @orbiodotso", url: "https://x.com/orbiodotso", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-23, CLM-24], excerpt: "Display name orbio. Handle @orbiodotso. Bio: Let your bag pay for your llm costs. Website https://orbio.so/. Created 2026-08-29. Followers 1158." }
  - { id: R-3, publisher: Blockscout, title: "Address 0xAa07…28A3", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-25, CLM-30], excerpt: "hash 0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3; is_contract true; is_verified true; name PonsV2LauncherToken; proxy_type null; creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42; creation_transaction_hash 0xf2b153483bc3c6fd8f3fe1cb523988740521f1b791f3b79aa7d3723c2d6a500a." }
  - { id: R-4, publisher: Blockscout, title: "Token 0xAa07…28A3", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-15, CLM-27], excerpt: "name Orbio.so; symbol ORBIO; decimals 18; type ERC-20; holders_count 2364; total_supply 950000000000000000000000000." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / launchFactory / curve / socials", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-7, CLM-17, CLM-27, CLM-28], excerpt: "eth_blockNumber 0x32a48ca (53102794). eth_getCode 0xAa07…28A3 3248 bytes. name() Orbio.so. symbol() ORBIO. totalSupply 950e24. owner() reverted. launchFactory() 0x7ed598bcef8bd9edd8c97a195c6d13f40801ec7e. curve() 0x7df21d1f9c75533e6f724df5c93cd6c567daec02. deployer() 0xbfabe94a454947f0f98bc92d3e052413928b04b8. socials twitter https://x.com/orbiodotso website https://orbio.so." }
  - { id: R-6, publisher: Blockscout, title: "Creation tx 0xf2b15348…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xf2b153483bc3c6fd8f3fe1cb523988740521f1b791f3b79aa7d3723c2d6a500a", published_at: 2026-08-31T22:33:11Z, accessed_at: 2026-09-03T03:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-9, CLM-28, EVT-1], excerpt: "timestamp 2026-08-31T22:33:11.000000Z; block_number 51223088; to 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy; method launchAndBuy; status ok. pairToken 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC. params name Orbio.so symbol ORBIO twitter https://x.com/orbiodotso website https://orbio.so. Mint 1e27 ORBIO to PonsV2BondingCurve 0x7DF21d1F9C75533E6F724dF5C93Cd6C567DaEC02." }
  - { id: R-7, publisher: Blockscout, title: "PonsV2LaunchDeployer 0x3711…1A42", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42; is_contract true; is_verified true; name PonsV2LaunchDeployer; proxy_type null; creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. RPC eth_getCode 20906 bytes." }
  - { id: R-8, publisher: Blockscout, title: "PonsV2LaunchFactory 0x7eD5…EC7e", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; is_contract true; is_verified true; name PonsV2LaunchFactory; creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. RPC eth_getCode 24177 bytes. Token launchFactory() returns this address." }
  - { id: R-9, publisher: Blockscout, title: "PonsV2BondingCurve 0x7DF2…EC02", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x7DF21d1F9C75533E6F724dF5C93Cd6C567DaEC02", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "hash 0x7DF21d1F9C75533E6F724dF5C93Cd6C567DaEC02; is_contract true; is_verified true; name PonsV2BondingCurve; creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42. RPC eth_getCode 10229 bytes. Token curve() returns this address." }
  - { id: R-10, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3", published_at: 2026-08-31T22:45:20Z, accessed_at: 2026-09-03T03:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-17, CLM-25, CLM-29], excerpt: "name PonsV2LauncherToken; compiler v0.8.35+commit.47b9dedd; is_verified true; is_fully_verified true; file_path contracts/src/v2/PonsV2LauncherToken.sol; verified_at 2026-08-31T22:45:20.544488Z. Comment: Fixed-supply ERC-20 deployed by PonsV2LaunchFactory for a v2 launch. ABI functions: burn, curve, deployer, launchFactory, socials, getTokenInfo. No owner, no fee-split." }
  - { id: R-11, publisher: DexScreener, title: "Token pairs API 0xAa07…28A3", url: "https://api.dexscreener.com/latest/dex/tokens/0xAa07A0e9209e16aC99708C3EC70159c6eF3128A3", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-1, CLM-6, CLM-9, CLM-10, CLM-12, CLM-14, CLM-19, CLM-22, CLM-30, EVT-2, EVT-6], excerpt: "ORBIO/NVDA pair 0xa95b1fbdccb15d2b07509b980f63adab8a94303b1781f5ebc53b72942d12ddc1 dexId uniswap labels [v4] quote NVDA 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC liquidity.usd 197234.79 volume.h24 2196574.7 marketCap 4836157 pairCreatedAt 1788223552000. websites https://orbio.so/ socials https://x.com/orbiodotso. 12 pairs." }
  - { id: R-12, publisher: GeckoTerminal, title: "ORBIO/NVDA pool API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa95b1fbdccb15d2b07509b980f63adab8a94303b1781f5ebc53b72942d12ddc1", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-1, CLM-10, CLM-11, CLM-13, CLM-26, EVT-2, EVT-6], excerpt: "name ORBIO / NVDA; address 0xa95b1fbd…ddc1; reserve_in_usd 173802.2593; volume_usd.h24 2177014.67547488; pool_created_at 2026-09-01T00:45:52Z; relationships.dex.data.id pons-v2-dex; quote_token robinhood_0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec." }
  - { id: R-13, publisher: GeckoTerminal, title: "ORBIO token API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xaa07a0e9209e16ac99708c3ec70159c6ef3128a3", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-21], excerpt: "name Orbio.so; symbol ORBIO; address 0xaa07a0e9209e16ac99708c3ec70159c6ef3128a3; decimals 18; total_supply 1000000000000000000000000000.0; volume_usd.h24 3250816.83521815; fdv_usd 5178194.91578516; market_cap_usd null." }
  - { id: R-14, publisher: "@orbiodotso", title: "few hours since launch", url: "https://x.com/orbiodotso/status/2094678524590457079", published_at: 2026-09-01T06:47:32Z, accessed_at: 2026-09-03T03:30:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-31, EVT-3], excerpt: "few hours since launch. - 50m tokens burned - 13k usd distributed as llm credits. token maxxing" }
  - { id: R-15, publisher: "@orbiodotso", title: "Hold floor cut to 1000 tokens", url: "https://x.com/orbiodotso/status/2094966077348536462", published_at: 2026-09-02T01:50:10Z, accessed_at: 2026-09-03T03:30:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-32, EVT-4], excerpt: "Now you only need to hold 1000 tokens to qualify to earn passive LLM credits, down from a 100,000. Apart from that, We indentified a small subset of users who were getting skipped out of distribution, and fix that issue, and granted them the missing credits." }
  - { id: R-16, publisher: "@orbiodotso", title: "Orbio Build Week", url: "https://x.com/orbiodotso/status/2095152973425103085", published_at: 2026-09-02T14:12:49Z, accessed_at: 2026-09-03T03:30:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-33, EVT-5], excerpt: "Announcing Orbio Build Week. A 7-day competition: build anything on Orbio credits, using self-sustaining agents. $100 of bootstrap credits on us, with a +20% bonus on holder earnings. 10 winners, 8M Orbio tokens. Applications close this Sunday. Apply at https://www.orbio.so/build" }
  - { id: R-17, publisher: DexScreener, title: "microduck token pairs (same-stock NVDA, not ORBIO)", url: "https://api.dexscreener.com/latest/dex/tokens/0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-20], excerpt: "microduck/NVDA Uniswap v4 pair 0xcde4d35e341901bc0308c2ffc789448ccd0f238a59597fe702e6710484b9c370 liquidity.usd 520946.96 volume.h24 1870614.56 marketCap 35513769. Distinct base token from ORBIO 0xAa07…28A3. Same-stock pair, not an identity match." }
  - { id: R-18, publisher: DexScreener, title: "AI token pairs (same-stock NVDA, not ORBIO)", url: "https://api.dexscreener.com/latest/dex/tokens/0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-20], excerpt: "AI/NVDA Uniswap v4 liquidity.usd 6334184.93 volume.h24 5084897.43 marketCap 285966574. Distinct base token from ORBIO 0xAa07…28A3. Same-stock pair, not an identity match." }

gaps:
  - { priority: P0, question: "Does any on-chain hook, escrow, or fee splitter on the ORBIO/NVDA pool execute the site's 1.50% / 50% OpenRouter-credit split, or is the ledger off-chain?", checked: "PonsV2LauncherToken ABI (burn, curve, deployer, launchFactory, socials) has no fee function; www.orbio.so describes escrow and an hourly dashboard ledger, 2026-09-03", next: "read the Uniswap v4 hook on pool 0xa95b1fbd…ddc1 and any escrow address named after connecting a wallet on orbio.so" }
  - { priority: P1, question: "Which transaction burned 50M ORBIO, and does it match totalSupply 950M vs the 1e27 mint?", checked: "RPC/Blockscout totalSupply 950M; Gecko token total_supply still 1e27; official post 2026-09-01 claims 50m burned; launch mint 1e27 to the curve, 2026-09-03", next: "Blockscout token transfers filtered for burn/0xdead from 2026-08-31T22:33Z" }
  - { priority: P1, question: "Is there an audit whose scope includes PonsV2LauncherToken 0xAa07…28A3 or the live ORBIO/NVDA hook?", checked: "www.orbio.so, @orbiodotso, verified token source header, 2026-09-03", next: "auditor report index if a later post names one" }
  - { priority: P2, question: "Does the Build Week 8M ORBIO prize pool sit in a reproduced treasury or locker?", checked: "Homepage and @orbiodotso name 8M prizes and www.orbio.so/build; no treasury address eth_called this pass", next: "open /build and match a holder of 8M on Blockscout" }
---

# ORBIO — research packet

## What it is

A Pons v2 launcher token on Robinhood Chain, quoted against NVIDIA • Robinhood Token (NVDA). PonsV2LaunchAndBuy created Orbio.so (ORBIO) at 0xAa07…28A3 on 2026-08-31; the live book is Uniswap v4 ORBIO/NVDA. orbio.so says each trade pays a 1.50% fee and half of collected fees becomes OpenRouter credits for wallets holding at least 1,000 ORBIO.

Themes: memecoin, stock-paired:NVDA

## Why it matters

ORBIO is a live NVDA-quoted book on chain 4663, in the same-stock set as $AI and microduck, not an identity match for either. Gecko this pass: ORBIO/NVDA reserve about $174k and 24h volume about $2.18M, versus DexScreener AI/NVDA liquidity about $6.33M and microduck/NVDA about $521k.

## What could go wrong

The 1.50% fee and OpenRouter-credit split are site claims; the verified token ABI has no fee function. DexScreener and Gecko disagree on ORBIO/NVDA reserve. Gecko still prints total_supply 1B after RPC totalSupply 950M.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy at 2026-08-31T22:33:11Z deployed PonsV2LauncherToken 0xAa07…28A3 named Orbio.so / ORBIO against NVDA 0xd060…9EEC. launchFactory() is PonsV2LaunchFactory 0x7eD5…EC7e. curve() is PonsV2BondingCurve 0x7DF2…EC02. [verified R-6 R-5 R-8]

The live book is Uniswap v4 ORBIO/NVDA pool 0xa95b1fbd…ddc1, created 2026-09-01T00:45:52Z. DexScreener labels it uniswap v4; Gecko attributes the same pool id to pons-v2-dex. A smaller ORBIO/USDG Uniswap v4 book also trades. [verified R-11 R-12]

www.orbio.so says every trade pays 1.50% to escrow and 50% of collected fees becomes OpenRouter credits for wallets with a time-weighted 1,000 ORBIO floor, with payouts as an hourly dashboard ledger rather than an on-chain transfer. That split is not in the token ABI. [claim R-1] [verified R-10]

## Control and security

owner() reverts. deployer() is EOA 0xbFAb…04B8 with empty code, the from of launchAndBuy. Token source is fully verified PonsV2LauncherToken (OpenZeppelin ERC-20 + burn). Factory, deployer contract, launch-and-buy router, and curve are verified. [verified R-5 R-7 R-8 R-9 R-10]

No audit report URL was located this pass. [unknown]

## Team and provenance

@orbiodotso display name is orbio; bio is Let your bag pay for your llm costs; website field is https://orbio.so/. www.orbio.so HTML links that handle and publishes CA 0xAa07…28A3. Onchain socials() and launch params store the same handle and https://orbio.so. orbio.so HTTP 308 to https://www.orbio.so/. No GitHub URL this pass. [verified R-1 R-2 R-5]

Census Pons is the pad, not this token. Census Artificial Inu and LONG share the NVDA-quoted neighborhood only. microduck is a pending discovery name, not a census slug. [claim R-6 R-17 R-18]

## Economics and activity

Gecko ORBIO/NVDA: reserve $173,802.26, 24h volume $2,177,014.68 at 2026-09-03T03:31Z. DexScreener same pool: liquidity $197,234.79, 24h volume $2,196,574.70, marketCap $4,836,157. Gecko token all-pools 24h volume $3,250,816.84. Blockscout holders_count 2364. RPC totalSupply 950M. [verified R-11 R-12 R-13 R-4]

Same-stock DexScreener this pass: AI/NVDA liquidity $6,334,184.93 volume $5,084,897.43 mcap $285,966,574; microduck/NVDA liquidity $520,946.96 volume $1,870,614.56 mcap $35,513,769. [verified R-17 R-18]

Official account on 2026-09-01 posted 50m burned and $13k LLM credits. On 2026-09-02 it posted a 1,000-token credit floor and Build Week (8M ORBIO, 10 winners). [claim R-14 R-15 R-16]

## Material risks

- Fee-to-credits path is a site ledger claim, not a function on the verified token. [claim R-1] [verified R-10]
- ORBIO/NVDA liquidity is $173.8k on Gecko and $197.2k on DexScreener. [verified R-11 R-12]
- Gecko total_supply 1B versus RPC/Blockscout 950M. [verified R-13 R-4 R-5]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: www.orbio.so, @orbiodotso profile and three posts, Blockscout token/factory/deployer/curve/source and launchAndBuy tx, RPC views, DexScreener ORBIO/AI/microduck token APIs, and the Gecko pool/token endpoints were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-6 R-11 R-12]
- Numbers: $173,802.26 / $2,177,014.68 is the Gecko ORBIO/NVDA pool, not the $3,250,816.84 token all-pools figure. DexScreener $197,234.79 / $2,196,574.70 is the same pair. Holders 2364 is Blockscout, not an aggregator. [claim R-11 R-12 R-13 R-4]
- Adversarial: the strongest contrary reading is that ORBIO is Artificial Inu or a LONG flagship because it quotes NVDA. The CA, PonsV2LaunchAndBuy creation tx, site, and handle are distinct from 0x2E8c…1e18 / LongLauncher / artificialinu.com. [inference R-6 R-18]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census has no orbio / ORBIO / orbio.so / 0xAa07…28A3. Discovery inventory CLM-39 listed this CA with no handle.
- Explorer: Blockscout api/v2 address, token, smart-contract, tx 0xf2b15348…, factory, deployer, curve. RPC eth_blockNumber/eth_getCode/eth_call name, symbol, totalSupply, decimals, owner, launchFactory, curve, deployer, socials, description at blocks 53093984–53102794 with Chrome UA. First python urllib RPC got HTTP 403; curl worked.
- Aggregators: DexScreener latest/dex/tokens for ORBIO, AI, microduck. Gecko token, ORBIO/NVDA pool; token/pools and trending_pools later 429.
- Site: GET www.orbio.so; HEAD orbio.so → 308 to www; HTML contains x.com/orbiodotso and the CA.
- Social: X keyword $ORBIO; from:orbiodotso; user search orbio / ORBIO / orbio.so → official handle @orbiodotso.
- Failed: Blockscout without browser UA returned Cloudflare challenge HTML; Gecko token/pools and trending_pools 429 after the pool GET; liquidityPool/factory extra selectors 429 on RPC.
