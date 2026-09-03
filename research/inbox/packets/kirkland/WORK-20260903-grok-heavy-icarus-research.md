---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: kirkland
name: KIRKLAND
packet_tier: seed
as_of: 2026-09-03T03:52:00Z
prior_packet: null
supersedes: null
owned_slugs: [kirkland]
allowed_paths:
  - research/inbox/packets/kirkland/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: KIRKLAND
  aliases: [Kirkland]
  symbols: [KIRKLAND]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token attributes have no website; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials lists x.com/kirklandcto; on-chain socials() and launchAndBuy socials are empty; @kirklandcto bio is Welcome to Kirkland. with no CA 0xaAc0…EB03 this pass; t.me/kirklandcto is a contact page with no CA; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or the @kirklandcto profile this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily with PONS 0x39dB…4571"
        - "KIRKLAND 0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03 is a PonsV2LauncherToken graduation paired to COST, not the PONS token"
        - "Distinct from lunch.fun HOTDOG 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C and Pons HOTDOG 0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f"
        - "No shared domain, handle, or reproduced address with the PONS token"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "KIRKLAND is a Pons v2 bonding-curve graduation into Uniswap v4 KIRKLAND/COST, not a LongLauncher clone"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "KIRKLAND is $KIRKLAND at 0xaAc0…EB03 paired to COST 0x4EA0…44C2 via PonsV2LaunchFactory 0x7eD5…EC7e"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "KIRKLAND is a PonsV2LauncherToken with no vault of its own; pair asset is COST"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is @bankrbot / bankr.bot with DopplerERC20V1Factory / Airlock"
        - "KIRKLAND creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42, not a Bankr factory"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xaAc0…EB03 is a verified PonsV2LauncherToken with non-empty code on 4663; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e; launchAndBuy minted Kirkland / KIRKLAND against COST 0x4EA0…44C2 (Costco • Robinhood Token, GET /rhj/assets hit). Curve completed and createGraduatedPool initialized Uniswap v4 poolId 0x135f…8d5d. COST is the pair rail, not the subject. No official site or handle this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-11] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/kirklandcto", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/kirklandcto", authenticity: unconfirmed }
  - { kind: discord, url: "https://discord.gg/uxento", authenticity: unconfirmed }

deployments:
  - label: KIRKLAND token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:45:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: Pons v2 bonding curve
    role: other
    address:
      value: "0x6Ca51588AEed93B749Da3b6D7da75494522F8CC0"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-5, R-6]
  - label: PonsV2LaunchFactory
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: PonsV2LaunchAndBuy
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4]
  - label: PonsV2LaunchDeployer
    role: other
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3]
  - label: COST Costco • Robinhood Token (pair rail)
    role: token
    address:
      value: "0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-6, R-10, R-11]
  - label: V2LaunchLocker
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-12]

metrics:
  - { kind: volume_24h, value: 2843069.07, currency: USD, as_of: 2026-09-03T03:51:42Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x135fc32f487fbbc8306d21df09a8c8b470bd716e9ab06e6c0875626f257d8d5d volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 40244.73, currency: USD, as_of: 2026-09-03T03:51:42Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x135fc32f487fbbc8306d21df09a8c8b470bd716e9ab06e6c0875626f257d8d5d reserve_in_usd (KIRKLAND/COST pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 252208.32, currency: USD, as_of: 2026-09-03T03:51:42Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03 fdv_usd (market_cap_usd null; do not use Gecko pool fdv_usd which prices COST as base)", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 1611, currency: null, as_of: 2026-09-03T03:51:42Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:46:00Z, receipt_ids: [R-5, R-6], result: "eth_blockNumber 0x32a6d4f (53112143) then 0x32a75d8 (53114328). Token 0xaAc0…EB03 eth_getCode 3248 B, not EIP-1167. name Kirkland, symbol KIRKLAND, decimals 18, totalSupply 1e27. deployer() 0x0Eb627396405c8200fDB5ae7b225d360cF427083. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x6Ca51588AEed93B749Da3b6D7da75494522F8CC0. description Launched on discord.gg/uxento. logo ipfs://QmTga9JCJBLcbWBti24rGRj1CGrZ3aowrZ2zoxqMWMzBxH. socials() five empty strings. owner() reverts." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-10, R-12, R-13, R-22], result: "Blockscout api/v2 token 0xaAc0…EB03 name Kirkland symbol KIRKLAND holders_count 1611 then 1617 then 1611 total_supply 1e27 is_verified true name PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol. creator_address_hash PonsV2LaunchDeployer 0x3711…1A42 tx 0xb3831df9…bfba 2026-09-02T23:32:21Z block 52962814 from EOA 0x0Eb6…7083 to PonsV2LaunchAndBuy launchAndBuy pairToken COST. TokenLaunched factory 0x7eD5…EC7e curve 0x6Ca5…8CC0. CurveCompleted tx 0x795eee92…766c 2026-09-02T23:35:58Z. createGraduatedPool tx 0x84afef1d…831b 2026-09-02T23:36:04Z PoolManager Initialize poolId 0x135f…8d5d. COST BeaconProxy Stock impl 0xb354…5aE2." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:51:42Z, receipt_ids: [R-7, R-8, R-9, R-20], result: "DexScreener latest/dex/tokens/0xaAc0…EB03: 24 robinhood uniswap pairs; top KIRKLAND/COST v4 0x135f…8d5d quote COST 0x4EA0…44C2 Costco • Robinhood Token liquidity.usd 42463.3 volume.h24 2867817.05 fdv/marketCap 273374 pairCreatedAt 1788392164000 (2026-09-02T23:36:04Z) info.websites [] info.socials [{url https://x.com/kirklandcto, type twitter}]. Gecko pool dex pons-v2-dex name COST / KIRKLAND volume_usd.h24 2843069.07 reserve_in_usd 40244.73 fdv_usd 1176154.00 (COST as base). Gecko token fdv_usd 252208.32 volume_usd.h24 3303874.29 launchpad_details completed true migrated_destination_pool_address 0x135f…8d5d. trending_pools duration=24h first twelve did not list KIRKLAND." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:46:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one COST hit tokenSymbol COST tokenName Costco • Robinhood Token contractAddress 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 chainId 4663 status ASSET_STATUS_ACTIVE isin US22160K1051." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-6], result: "Factory 0x7eD5…EC7e code 24177 B. owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. graduationExecutor() 0xC7819B64A1dAECD7eC19856d026cb14EfBd89046. graduationGuard() 0xf5695117b99B6f6401e67d4195BD653628176C6C. launchDeployer() 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42. getLaunchedToken(0xaAc0…EB03) returns token, curve 0x6Ca5…8CC0, originalDeployer 0x0Eb6…7083, creatorFeeRecipient 0x115c4a52CdbAE551B40DB5663E181B33e765D450, pairToken COST, graduationThreshold 8470405930331172950, last word 1. Curve code 10229 B. curve.graduated() 1. curve.pairToken() COST. curve.token() 0xaAc0…EB03. curve.owner() reverts." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy launchAndBuy clones a 1e9-supply PonsV2LauncherToken onto a per-launch bonding curve quoted against COST, then createGraduatedPool seeds a locked Uniswap v4 KIRKLAND/COST pool (PoolManager 0x8366…0951, V2MemeHook 0xE5e7…e044, fee 0). Launch tx from 0x0Eb6…7083 minted Kirkland / KIRKLAND as a Pons v2 COST pair.", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-2, R-4, R-5, R-12, R-13], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Kirkland", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "KIRKLAND", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-5, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:51:42Z, receipt_ids: [R-1, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:51:42Z, receipt_ids: [R-7, R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials lists x.com/kirklandcto; on-chain socials empty; @kirklandcto bio has no CA; t.me/kirklandcto is a contact page; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-5, R-7, R-15, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote COST 0x4EA0…44C2 is Costco • Robinhood Token, GET rhj/assets (194 assets) has one COST row at that address. COST is the rail, not the subject. Distinct from lunch.fun HOTDOG 0x4544…188C and Pons HOTDOG 0x1C1D…566f, and from other KIRKLAND tickers on DexScreener search.", class: verified, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-7, R-10, R-11], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "KIRKLAND/COST Uniswap v4 24h volume 2843069.07 USD and reserve_in_usd 40244.73 at 2026-09-03T03:51:42Z (Gecko pool slice, not Gecko token all-pools 3303874.29)", class: verified, observed_at: 2026-09-03T03:51:42Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 42463.3 volume.h24 2867817.05 fdv/marketCap 273374 at 2026-09-03T03:51:42Z", class: verified, observed_at: 2026-09-03T03:51:42Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1611, class: verified, observed_at: 2026-09-03T03:51:42Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges over the token. Factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd.", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "token.deployer() 0x0Eb627396405c8200fDB5ae7b225d360cF427083 equals the launchAndBuy caller; four seconds later transferCreatorFeeRecipient set 0x115c4a52CdbAE551B40DB5663E181B33e765D450, which V2MemeHook PoolRegistered names as creator", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-4, R-6, R-12, R-22], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is COST 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2; venue after graduation is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 poolId 0x135fc32f487fbbc8306d21df09a8c8b470bd716e9ab06e6c0875626f257d8d5d. Gecko still labels that pool pons-v2-dex.", class: verified, observed_at: 2026-09-03T03:51:42Z, receipt_ids: [R-6, R-7, R-8, R-12], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() and TokenLaunched name PonsV2LaunchFactory 0x7eD5…EC7e as the pad, not lunch.fun, LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, Telegram preview, Discord preview, or X posts this pass", class: unknown, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: DexScreener lists x.com/kirklandcto; on-chain description is Launched on discord.gg/uxento (uxento Discord, 12451 members, no KIRKLAND in the public preview); t.me/kirklandcto is a Telegram contact page with no CA", class: claim, observed_at: 2026-09-03T03:51:00Z, receipt_ids: [R-5, R-7, R-16, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 252208.32; DexScreener fdv/marketCap 273374. Gecko pool fdv_usd 1176154.00 prices COST as base and is not KIRKLAND fdv. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:51:42Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2", class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-6, R-10, R-11], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x6Ca51588AEed93B749Da3b6D7da75494522F8CC0", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token has no website field", class: claim, observed_at: 2026-09-03T03:51:42Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "kirkland | KIRKLAND | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko KIRKLAND/COST 24h volume $2.84M, liquidity $40.2k"
    summary: "Gecko pool 0x135f…8d5d volume_usd.h24 2843069 reserve_in_usd 40245. Gecko token fdv_usd 252208. DexScreener same pair liquidity.usd 42463 volume.h24 2867817."
    occurred_at: 2026-09-03T03:51:42Z
    observed_at: 2026-09-03T03:51:42Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8, R-9]
  - id: EVT-2
    type: onchain
    title: "PonsV2LaunchAndBuy launchAndBuy minted Kirkland / KIRKLAND"
    summary: "Tx 0xb383…bfba from 0x0Eb6…7083 at 2026-09-02T23:32:21Z; TokenLaunched token 0xaAc0…EB03 curve 0x6Ca5…8CC0 pairToken COST."
    occurred_at: 2026-09-02T23:32:21Z
    observed_at: 2026-09-03T03:46:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-3
    type: onchain
    title: "Bonding curve completed against COST"
    summary: "Tx 0x795e…766c at 2026-09-02T23:35:58Z CurveCompleted quoteOut 8470405930331173154 tokenOut 285714285714285714285714285; factory LaunchSwept."
    occurred_at: 2026-09-02T23:35:58Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-4
    type: onchain
    title: "createGraduatedPool initialized Uniswap v4 KIRKLAND/COST"
    summary: "Tx 0x84af…831b at 2026-09-02T23:36:04Z; PoolManager Initialize poolId 0x135f…8d5d; PoolGraduated positionId 1574917 tokenAmount ~2.041e26 pairTokenAmount 8470405930331173154 COST; V2LaunchLocker TokenSupplyLocked ~8.163e25."
    occurred_at: 2026-09-02T23:36:04Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-5
    type: ct
    title: "X posts circulated CA 0xaAc0…EB03 as KIRKLAND/COST"
    summary: "@thenextpennyy and @humanbeingET posted the CA and a Costco / Kirkland Signature narrative. @kirklandcto posted #KIRKLAND without the CA."
    occurred_at: 2026-09-03T00:23:27Z
    observed_at: 2026-09-03T03:51:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-15, R-19]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xaAc0…EB03 Kirkland / KIRKLAND", url: "https://robinhoodchain.blockscout.com/address/0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03", published_at: null, accessed_at: 2026-09-03T03:51:42Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03 name PonsV2LauncherToken is_contract true is_verified true. token name Kirkland symbol KIRKLAND decimals 18 total_supply 1000000000000000000000000000 holders_count 1611 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xb3831df9c9ddb88d08c9dc55ee918e4a5011b79d6af8a88ec1c28ebe5354bfba." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03?tab=contract", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd file_path contracts/src/v2/PonsV2LauncherToken.sol is_verified true is_partially_verified false verified_at 2026-09-02T23:35:51Z. Comment: deployer is carried as immutable reference data for off-chain attribution only, and confers no privileges over the token. Entire supply mints to the bonding curve." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. ABI includes launchToken, createGraduatedPool, TokenLaunched, LaunchSwept, PoolGraduated." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0xb3831df9…bfba", url: "https://robinhoodchain.blockscout.com/tx/0xb3831df9c9ddb88d08c9dc55ee918e4a5011b79d6af8a88ec1c28ebe5354bfba", published_at: 2026-09-02T23:32:21Z, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, CLM-16, EVT-2], excerpt: "timestamp 2026-09-02T23:32:21.000000Z status ok block_number 52962814 from 0x0Eb627396405c8200fDB5ae7b225d360cF427083 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Kirkland symbol KIRKLAND description Launched on discord.gg/uxento socials empty pairToken 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2. TokenLaunched token 0xaAc0…EB03 curve 0x6Ca5…8CC0." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, deployer(), launchFactory(), socials() on KIRKLAND", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-16, CLM-17, CLM-19, CLM-22], excerpt: "eth_blockNumber 0x32a6d4f (53112143). Token code 3248 B. name Kirkland symbol KIRKLAND decimals 18 totalSupply 1e27. deployer() 0x0Eb627396405c8200fDB5ae7b225d360cF427083. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x6Ca51588AEed93B749Da3b6D7da75494522F8CC0. description Launched on discord.gg/uxento. socials() empty. owner() reverts." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory owner(), getLaunchedToken, curve.graduated()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21, CLM-22], excerpt: "block 53112143. factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. getLaunchedToken pairToken 0x4EA0…44C2 creatorFeeRecipient 0x115c4a52…D450 graduationThreshold 8470405930331172950. curve.graduated() 1 pairToken COST token 0xaAc0…EB03. Factory code 24177 B. Curve code 10229 B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens KIRKLAND", url: "https://api.dexscreener.com/latest/dex/tokens/0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03", published_at: null, accessed_at: 2026-09-03T03:51:42Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "24 robinhood uniswap pairs. Top pairAddress 0x135fc32f487fbbc8306d21df09a8c8b470bd716e9ab06e6c0875626f257d8d5d labels v4 base Kirkland / KIRKLAND quote Costco • Robinhood Token / COST 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 liquidity.usd 42463.3 volume.h24 2867817.05 fdv 273374 marketCap 273374 pairCreatedAt 1788392164000. info.websites [] info.socials [{url https://x.com/kirklandcto type twitter}]." }
  - { id: R-8, publisher: GeckoTerminal, title: "KIRKLAND/COST Pons V2 Dex pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x135fc32f487fbbc8306d21df09a8c8b470bd716e9ab06e6c0875626f257d8d5d", published_at: null, accessed_at: 2026-09-03T03:51:42Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name COST / KIRKLAND pool_created_at 2026-09-02T23:36:04Z fdv_usd 1176154.00361114 market_cap_usd 1027850.51451011 volume_usd.h24 2843069.06825731 reserve_in_usd 40244.7324. dex pons-v2-dex. base robinhood_0x4ea005168d7f09a7a0ba9d1def21a479950e44c2 quote robinhood_0xaac0eaf0b8a17fb428903d274413a1fca36aeb03. Gecko pool fdv prices COST as base." }
  - { id: R-9, publisher: GeckoTerminal, title: "Kirkland token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03", published_at: null, accessed_at: 2026-09-03T03:51:42Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20, CLM-23, EVT-1], excerpt: "name Kirkland symbol KIRKLAND decimals 18 total_supply 1e27 price_usd 0.0002522083182 fdv_usd 252208.31817802 market_cap_usd null volume_usd.h24 3303874.29462129. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T23:36:04.000Z migrated_destination_pool_address 0x135fc32f487fbbc8306d21df09a8c8b470bd716e9ab06e6c0875626f257d8d5d. coingecko_coin_id null." }
  - { id: R-10, publisher: Blockscout, title: "Token 0x4EA0…44C2 Costco • Robinhood Token / COST", url: "https://robinhoodchain.blockscout.com/address/0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name Costco • Robinhood Token symbol COST decimals 18 holders_count 13667." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One COST hit: tokenSymbol COST tokenName Costco • Robinhood Token contractAddress 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 chainId 4663 status ASSET_STATUS_ACTIVE isin US22160K1051." }
  - { id: R-12, publisher: Blockscout, title: "createGraduatedPool tx 0x84afef1d…831b", url: "https://robinhoodchain.blockscout.com/tx/0x84afef1d16c7a6eda8776407f89c2a624f4b667d7940a3f8af3b6ea456fa831b", published_at: 2026-09-02T23:36:04Z, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-15, EVT-4], excerpt: "timestamp 2026-09-02T23:36:04.000000Z status ok block_number 52964958 from 0x3534aDCa2E257e3564723330a1768339bE19DA53 to PonsV2LaunchFactory createGraduatedPool(token 0xaAc0…EB03). PoolManager Initialize id 0x135f…8d5d currency0 COST currency1 KIRKLAND fee 0 hooks V2MemeHook 0xE5e7…e044. PoolGraduated positionId 1574917 tokenAmount 204081632653061225894102137 pairTokenAmount 8470405930331173154. V2LaunchLocker TokenSupplyLocked 81632653061224488391612148." }
  - { id: R-13, publisher: Blockscout, title: "CurveCompleted tx 0x795eee92…766c", url: "https://robinhoodchain.blockscout.com/tx/0x795eee92c33ea5a615dee6b2d044df1932129018a09221d010190b591a37766c", published_at: 2026-09-02T23:35:58Z, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-3], excerpt: "timestamp 2026-09-02T23:35:58.000000Z status ok block_number 52964895. CurveCompleted recipient 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e quoteOut 8470405930331173154 tokenOut 285714285714285714285714285. LaunchSwept token 0xaAc0…EB03 same amounts." }
  - { id: R-14, publisher: GeckoTerminal, title: "COST/KIRKLAND pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x135fc32f487fbbc8306d21df09a8c8b470bd716e9ab06e6c0875626f257d8d5d", published_at: null, accessed_at: 2026-09-03T03:51:42Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "Gecko HTML pool page for 0x135f…8d5d on network robinhood. API names the pool COST / KIRKLAND on Pons V2 Dex." }
  - { id: R-15, publisher: "@kirklandcto", title: "we're so fucking back #KIRKLAND", url: "https://x.com/kirklandcto/status/2095334290665984407", published_at: 2026-09-03T02:13:18Z, accessed_at: 2026-09-03T03:51:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, EVT-5], excerpt: "Account display name Charlie Kirkland, handle @kirklandcto, bio Welcome to Kirkland. Post: we're so fucking back #KIRKLAND. No contract address in this post. DexScreener lists https://x.com/kirklandcto as the token twitter social." }
  - { id: R-16, publisher: Telegram, title: "t.me/kirklandcto", url: "https://t.me/kirklandcto", published_at: null, accessed_at: 2026-09-03T03:51:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19], excerpt: "HTTP 200. og:title Telegram: Contact @kirklandcto. tgme_page_description If you have Telegram, you can contact @kirklandcto right away. No subscriber count. No contract address in the preview HTML this pass." }
  - { id: R-17, publisher: Discord, title: "discord.gg/uxento", url: "https://discord.gg/uxento", published_at: null, accessed_at: 2026-09-03T03:51:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "HTTP 301/200. og:title Join the uxento Discord Server! og:description Tools designed for u. | 12451 members. title uxento. No KIRKLAND string in the public preview HTML this pass. On-chain token description is Launched on discord.gg/uxento." }
  - { id: R-18, publisher: Blockscout, title: "PonsV2LaunchDeployer 0x3711…1A42", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchDeployer.sol compiler 0.8.35. Token creator_address_hash and curve creator_address_hash both point here." }
  - { id: R-19, publisher: "@thenextpennyy", title: "KIRKLAND/COSTCO CA post", url: "https://x.com/thenextpennyy/status/2095306643940487554", published_at: 2026-09-03T00:23:27Z, accessed_at: 2026-09-03T03:51:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "KIRKLAND/COSTCO might be the best coin I’ve seen especially with KIRKIVESARY coming up on 9/10. WE ARE CHARLIE KIRK. 0xaac0eaf0b8a17fb428903d274413a1fca36aeb03" }
  - { id: R-20, publisher: GeckoTerminal, title: "Robinhood trending_pools 24h", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools?duration=24h", published_at: null, accessed_at: 2026-09-03T03:51:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "First twelve rows this pass: CHUMP/WETH, SANTACOIN/WETH, PONS/USDG, SHRUB/WETH, CASHCAT/WETH, AI/NVDA, FRONG/WETH, Index/WETH, microduck/USDG, JINQIAN/FAMI, OPTIMUS/WETH, SEMI/MU. No KIRKLAND in that window." }
  - { id: R-21, publisher: Blockscout, title: "V2LaunchLocker 0x2674…4952", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true. createGraduatedPool logs TokenSupplyLocked token 0xaAc0…EB03 amount 81632653061224488391612148 and PositionLocked tokenId 1574917." }
  - { id: R-22, publisher: Blockscout, title: "transferCreatorFeeRecipient tx 0x91eeadeb…be10", url: "https://robinhoodchain.blockscout.com/tx/0x91eeadeb8b219cd13a9532968d15dfe078d4aea91801959448e0289da7abbe10", published_at: 2026-09-02T23:32:25Z, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "timestamp 2026-09-02T23:32:25.000000Z status ok block_number 52962858 from 0x0Eb627396405c8200fDB5ae7b225d360cF427083 to PonsV2LaunchFactory transferCreatorFeeRecipient(token 0xaAc0Eaf0B8a17FB428903D274413a1Fca36AEB03, newRecipient 0x115c4a52CdbAE551B40DB5663E181B33e765D450)." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xaAc0…EB03?", checked: "DexScreener info.websites [] info.socials x.com/kirklandcto; on-chain socials empty; @kirklandcto bio Welcome to Kirkland. with no CA; t.me/kirklandcto contact page has no CA, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts from @kirklandcto that embed the CA" }
  - { priority: P1, question: "Does discord.gg/uxento pin CA 0xaAc0…EB03 or a KIRKLAND channel that cross-links?", checked: "public preview og:title uxento, 12451 members, no KIRKLAND string, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P1, question: "Which of the other DexScreener KIRKLAND tickers share this deployer or factory?", checked: "Search returned multiple KIRKLAND CAs (0x5306…, 0xe1f4…, 0x820f…, 0x617D…, KIRKLANDSIG 0xfb46…) with lower volume than 0xaAc0…EB03, 2026-09-03", next: "eth_call launchFactory() on those CAs if they remain in the search" }
  - { priority: P2, question: "Does verified PonsV2LaunchFactory source leave any owner path that can reach this live curve or locked LP after graduation?", checked: "token owner() reverts; factory owner() is Safe 0x263e…19Dd; curve.graduated() 1; LP PositionLocked on V2LaunchLocker, 2026-09-03", next: "read createGraduatedPool and rescueSweptGraduation modifiers in src/v2/PonsV2LaunchFactory.sol on the explorer" }
---

# KIRKLAND — research packet

## What it is

A one-billion-supply ERC-20 launched on Pons v2 against COST, then graduated into a Uniswap v4 KIRKLAND/COST pool. PonsV2LaunchAndBuy deploys Kirkland (KIRKLAND) in one launchAndBuy call, fills a bonding curve, and createGraduatedPool seeds the KIRKLAND/COST book. Traders buy and sell KIRKLAND on that Uniswap v4 pool. COST is the pair rail, not the subject. No official site or handle was located this pass.

Themes: memecoin, stock-paired:COST, rwa, pons-graduation

## Why it matters

The KIRKLAND/COST Uniswap v4 book printed about $2.84M of 24h volume on Gecko at collection, with the quote token the Costco • Robinhood Token at 0x4EA0…44C2. GET /rhj/assets has that COST row, so the pair leg is a Robinhood Stock Token rail rather than a parody quote. The token is a Pons v2 graduation, distinct from lunch.fun HOTDOG 0x4544…188C and Pons HOTDOG 0x1C1D…566f.

## What could go wrong

USD liquidity figures on the KIRKLAND/COST book count both sides, and the quote side is COST, not USDG. Gecko's pool fdv prices COST as base (~$1.18M) and is not KIRKLAND fdv (token fdv ~$252k). DexScreener lists @kirklandcto while on-chain socials are empty. Other KIRKLAND tickers trade on the same chain.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x0Eb6…7083 at 2026-09-02T23:32:21Z minted Kirkland / KIRKLAND supply 1e9*1e18 to bonding curve 0x6Ca5…8CC0 against COST. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e. launchFactory() on the token returns that factory. deployer() returns the same 0x0Eb6…7083. [verified R-4 R-5 R-6]

CurveCompleted at 2026-09-02T23:35:58Z swept 8.470405930331173154 COST and 2.857e8 tokens (1e18 scaled) to the factory. createGraduatedPool at 2026-09-02T23:36:04Z initialized Uniswap v4 poolId 0x135f…8d5d (currency0 COST, currency1 KIRKLAND, fee 0, hooks V2MemeHook 0xE5e7…e044). PoolGraduated locked positionId 1574917 with ~2.041e8 tokens and 8.470405930331173154 COST; V2LaunchLocker TokenSupplyLocked ~8.163e7 tokens. Gecko launchpad_details completed true at that timestamp. [verified R-8 R-9 R-12 R-13]

Secondary KIRKLAND/USDG and KIRKLAND/ETH books exist on DexScreener with far less liquidity than the COST book. [claim R-7]

## Control and security

token owner() reverts. Verified PonsV2LauncherToken source says deployer is attribution-only. Factory owner() is 0x263e…19Dd. Four seconds after launch, the deployer called transferCreatorFeeRecipient to 0x115c…D450, which V2MemeHook names as creator. [verified R-2 R-5 R-6 R-12 R-22]

PonsV2LauncherToken, PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and V2LaunchLocker are verified on Blockscout. The per-launch curve 0x6Ca5…8CC0 is not verified. No audit report URL was located this pass. [verified R-1 R-2 R-3] [unknown]

## Team and provenance

No official domain or bidirectional X handle was located. DexScreener info.websites is empty; info.socials lists x.com/kirklandcto. On-chain socials() and launchAndBuy socials are empty. @kirklandcto bio is "Welcome to Kirkland." with no CA in the posts opened this pass. t.me/kirklandcto is a Telegram contact page with no CA. On-chain description is "Launched on discord.gg/uxento"; the uxento Discord preview has 12451 members and no KIRKLAND string. Flag unconfirmed-official and third-party-link. [claim R-5 R-7 R-15 R-16 R-17]

## Economics and activity

KIRKLAND/COST Uniswap v4 24h volume is 2843069.07 USD and reserve_in_usd is 40244.73 at 2026-09-03T03:51:42Z from the Gecko pool endpoint. Gecko token fdv_usd is 252208.32. Gecko token volume_usd.h24 is 3303874.29 across all pools, not the COST book. Gecko pool fdv_usd 1176154.00 prices COST as base and is not KIRKLAND fdv. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 42463.3, volume.h24 2867817.05, fdv/marketCap 273374. Blockscout holders_count 1611. Pair created 2026-09-02T23:36:04Z. [claim R-1 R-7]

Gecko trending_pools duration=24h first twelve did not include KIRKLAND this pass. Assignment lead of liq ~$44,230 / vol ~$2,838,978 is in range of the live DexScreener/Gecko COST book. [claim R-7 R-8 R-20]

## Material risks

- Quote token COST 0x4EA0…44C2 is a Robinhood Stock Token rail (GET /rhj/assets hit); KIRKLAND is not that rail. [verified R-11 R-10]
- Pool USD reserve is KIRKLAND plus COST, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko pool fdv prices COST as base; use Gecko token fdv or DexScreener pair fdv for KIRKLAND. [claim R-8 R-9]
- No official handle or domain this pass; DexScreener twitter and uxento Discord are third-party-links. [claim R-7 R-15 R-17]
- Other KIRKLAND tickers exist on DexScreener search. [claim R-7]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/deployer/COST and launch, curve-complete, and createGraduatedPool txs, RPC name/symbol/deployer/launchFactory/curve/socials/owner/getLaunchedToken, DexScreener, Gecko pool/token/trending, /rhj/assets, @kirklandcto, Telegram preview, and Discord preview were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-11]
- Numbers: 2843069.07 is the Gecko KIRKLAND/COST pool 24h volume, not the 3303874.29 token all-pools figure. Reserve 40244.73 is that pool. DexScreener 2867817.05 / 42463.3 is the same pair, different aggregator. Gecko pool fdv 1176154.00 is COST-as-base. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that @kirklandcto is official and that COST pairing makes KIRKLAND a Costco product. On-chain socials are empty, the X bio has no CA, COST is the Robinhood Token rail in /rhj/assets, and no official domain was located. A second contrary reading is that this is the packed HOTDOG COST pair; lunch.fun HOTDOG is 0x4544…188C and Pons HOTDOG is 0x1C1D…566f. [inference R-5 R-7 R-11]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no kirkland / KIRKLAND / 0xaAc0…EB03. content/dependencies/stock-tokens.yaml lists COST at 0x4EA0…44C2 as a rail.
- Explorer: Blockscout api/v2 token, factory, deployer, curve, COST, launchAndBuy 0xb383…bfba, CurveCompleted 0x795e…766c, createGraduatedPool 0x84af…831b, transferCreatorFeeRecipient 0x91ee…be10, TokenLaunched / PoolGraduated logs, holders. RPC eth_getCode/eth_call with Mozilla UA at blocks 53112143–53114328.
- Aggregators: DexScreener latest/dex/search, latest/dex/tokens, latest/dex/pairs; Gecko token, pool (include=base_token,quote_token,dex), token/pools, trending_pools duration=24h.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 COST at 0x4EA0…44C2.
- Social: X keyword KIRKLAND/COST; from:kirklandcto; user search kirklandcto (directory miss; posts resolve); t.me/kirklandcto preview; discord.gg/uxento preview.
- Failed: ponsfamily.com/coin/0xaAc0…EB03 HTTP 404; Gecko networks/robinhood/pools page 1 returned 0 rows this pass; X user-search directory did not list @kirklandcto; Blockscout token logs filter returned 0 (factory/curve logs used instead).
- Time: collection 2026-09-03T03:44Z–2026-09-03T03:52Z.
