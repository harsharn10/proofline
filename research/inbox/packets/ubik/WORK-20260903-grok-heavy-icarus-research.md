---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: ubik
name: UBIK
packet_tier: seed
as_of: 2026-09-03T03:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [ubik]
allowed_paths:
  - research/inbox/packets/ubik/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: UBIK
  aliases: ["ubik", "24/7 synthetic subconscious"]
  symbols: [UBIK]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token info websites [] twitter_handle null; ubik.gold og:title 24/7 synthetic subconscious matches description() with no contract in the HTML this pass; flag unconfirmed-official"
  official_handle: "NULL — DexScreener info.socials empty; on-chain socials() five empty strings; @ubik_gold bio matches description() and from:ubik_gold returned no posts this pass; X user search for UBIK returned unrelated handles; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, ubik.gold, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with v2 factory 0x7eD5…C7e"
        - "UBIK is a PonsV2LauncherToken at 0x8124…68Bd launched through that factory into a UBIK/GLD Uniswap v4 pool; entity_kind token, not protocol"
        - "No shared domain or handle; ubik.gold / @ubik_gold are unconfirmed-official and are not the pad"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "UBIK pairToken is GLD 0xC9a9…FC4e via PonsV2LaunchFactory 0x7eD5…C7e, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "UBIK is ubik / UBIK at 0x8124…68Bd paired to GLD 0xC9a9…FC4e via Pons v2"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "UBIK is a Pons v2 graduation token in a Uniswap v4 UBIK/GLD pool"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is an announced bonding-curve pad at @hoodfunfamily"
        - "UBIK launchFactory() is PonsV2LaunchFactory, not hood.fun"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x8124…68Bd has 3248 B of code on 4663 matching PonsV2LauncherToken except the immutable deployer; launchFactory() returns PonsV2LaunchFactory 0x7eD5…C7e; launchToken pairToken was GLD 0xC9a9…FC4e, a Robinhood Token in GET /rhj/assets. Graduated at 2026-09-01T15:54:40Z into Uniswap v4 pool 0x1f28…e676. GLD is a rail. Distinct from CASHBIRD/GLD and SCHIFFY/GLD. No official handle this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://ubik.gold", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/ubik_gold", authenticity: unconfirmed }

deployments:
  - label: UBIK token (PonsV2LauncherToken bytecode; explorer name ubik)
    role: token
    address:
      value: "0x812486EAea648819853F8E372dc9f1516C7868Bd"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:35:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-5, R-18]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6, R-21]
  - label: Pons v2 bonding curve (token curve / TokenLaunched curve)
    role: other
    address:
      value: "0x0a4D44200dD5eFefD065f59045d35b45C7eFed37"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-5, R-18]
  - label: GLD Stock Token (launch pairToken / Uniswap v4 quote)
    role: token
    address:
      value: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:36:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-6, R-12, R-16]
  - label: V2LaunchLocker (GraduationTokensPermanentlyLocked)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:42:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-20]

metrics:
  - { kind: volume_24h, value: 2574070.31, currency: USD, as_of: 2026-09-03T03:38:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1f28c0c3938fd48947bdb02c43377534ef0a3ffb23945e68052bcaaec1d2e676 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 265353.47, currency: USD, as_of: 2026-09-03T03:36:00Z, window: point, method: "api.dexscreener.com/latest/dex/pairs/robinhood/0x1f28c0c3938fd48947bdb02c43377534ef0a3ffb23945e68052bcaaec1d2e676 liquidity.usd (UBIK/GLD pool, not an all-pools figure; Gecko reserve_in_usd on this pool was negative this pass)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 8521492.86, currency: USD, as_of: 2026-09-03T03:38:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1f28c0c3938fd48947bdb02c43377534ef0a3ffb23945e68052bcaaec1d2e676 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 6144, currency: null, as_of: 2026-09-03T03:35:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x812486EAea648819853F8E372dc9f1516C7868Bd holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:38:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32a566c (53106284). Token 0x8124…68Bd eth_getCode 3248 B prefix 60806040, not EIP-1167. name ubik, symbol UBIK, decimals 18, totalSupply 1e27. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. deployer() 0xc08ce6ff78e5a45011Bfc38F11556f1eE9DFc362. curve() 0x0a4D44200dD5eFefD065f59045d35b45C7eFed37. description() 24/7 synthetic subconscious. socials() five empty strings. owner() reverts. DENAR PonsV2LauncherToken code also 3248 B; first mismatch at byte 391 is the immutable deployer." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-3, R-4, R-16, R-18, R-20], result: "Blockscout api/v2 token 0x8124…68Bd name ubik symbol UBIK holders_count 6144 total_supply 1e27 is_verified false proxy_type null creator_address_hash null. Factory 0x7eD5…C7e name PonsV2LaunchFactory is_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol. launchToken tx 0x6710…52fc 2026-09-01T15:16:06Z block 51819359 from 0xc08c…c362 method launchToken name ubik symbol UBIK pairToken GLD 0xC9a9…FC4e. TokenLaunched token 0x8124…68Bd curve 0x0a4D…ed37. Graduate tx 0x652f…2bef 2026-09-01T15:54:40Z block 51842195 PoolRegistered poolId 0x1f28…e676 quoteToken GLD. GLD 0xC9a9…FC4e BeaconProxy implementation Stock is_verified true." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x8124…68Bd: 30 robinhood uniswap pairs; UBIK/GLD v4 0x1f28…e676 quote 0xC9a9…FC4e SPDR Gold Trust • Robinhood Token / GLD liquidity.usd 265353.47 volume.h24 2538287.72 fdv 8450302 pairCreatedAt 1788278080000 (2026-09-01T15:54:40Z) info.websites [] info.socials []. Gecko pool: volume_usd.h24 2574070.31 reserve_in_usd -1517647.06 (negative this pass) fdv_usd 8521492.86 pool_created_at 2026-09-01T15:54:40Z dex pons-v2-dex. Gecko token volume_usd.h24 6435628.20 (all pools). Gecko token info websites [] twitter_handle null description 24/7 synthetic subconscious launchpad_details completed true migrated_destination_pool_address 0x1f28…e676." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:41:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one GLD row tokenSymbol GLD tokenName SPDR Gold Trust • Robinhood Token deployments contractAddress 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:42:00Z, receipt_ids: [R-6], result: "Factory 0x7eD5…C7e code 24177 B. owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd (Pons Safe). pairTokenEconomics(GLD) phantomQuote 9974059694957308634 (~9.974e18) graduationThreshold 24940596949573086306 (~24.941e18) decimals 18. Deployer 0xc08c…c362 eth_getCode 0x. Curve 0x0a4D…ed37 code 10229 B." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchFactory launchToken clones a 1e9-supply PonsV2LauncherToken onto a GLD bonding curve, then graduation writes a locked Uniswap v4 UBIK/GLD pool. launchToken(name ubik, symbol UBIK, pairToken GLD) from 0xc08c…c362 minted supply 1e27 into curve 0x0a4D…ed37. PoolRegistered poolId 0x1f28…e676 at 2026-09-01T15:54:40Z.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-18, R-20, R-21], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "ubik", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "UBIK", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x812486EAea648819853F8E372dc9f1516C7868Bd", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-7, R-8, R-12, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials empty; socials() empty; @ubik_gold bio matches description() with no posts and no CA in ubik.gold HTML; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-7, R-13, R-14, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote GLD 0xC9a9…FC4e is SPDR Gold Trust • Robinhood Token in GET /rhj/assets (194 assets, 1 GLD row, chainId 4663). GLD is a rail, not the subject. Distinct from CASHBIRD 0x38C8…1e18 / GLD pair 0xf25f…fdfb and SCHIFFY 0x42aF…1E18 / GLD pair 0xc749…777e. Distinct from census LONG / Artificial Inu / L4VA.", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-7, R-12, R-16, R-17], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "UBIK/GLD Uniswap v4 24h volume 2574070.31 USD at 2026-09-03T03:38:00Z (Gecko pool slice, not Gecko token all-pools 6435628.20). Gecko reserve_in_usd on this pool was negative this pass; DexScreener liquidity.usd 265353.47 used for the pool TVL print.", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener UBIK/GLD liquidity.usd 265353.47 volume.h24 2538287.72 fdv/marketCap 8450302 at 2026-09-03T03:36:00Z", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 6144, class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd (Pons Safe). Deployer 0xc08c…c362 has no code.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() 0xc08ce6ff78e5a45011Bfc38F11556f1eE9DFc362 equals the launchToken caller; factory owner is the Pons Safe; V2FeeEscrow credited that deployer GLD on graduation", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-4, R-6, R-20], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is GLD 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x1f28…e676 via V2MemeHook 0xE5e7…e044", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-6, R-7, R-8, R-20], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; launchFactory() and TokenLaunched name PonsV2LaunchFactory 0x7eD5…C7e as the pad, not LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, ubik.gold, or X search this pass", class: unknown, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: ubik.gold and @ubik_gold carry the description() string with no CA on the site and no posts from the handle; supportlisting.org vote posts embed the CA", class: claim, observed_at: 2026-09-03T03:44:00Z, receipt_ids: [R-13, R-14, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 8521492.86; DexScreener fdv/marketCap 8450302. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", class: verified, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: other, value: "ca-collision: Blockscout search UBIK returned additional tickers including CurvePumpERC1967Proxy 0x62d4…886b (1024 holders) and PonsLauncherToken 0x2E3D…4b07 (33 holders). Live GLD book is 0x8124…68Bd.", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-22], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token info websites []; ubik.gold has no CA in HTML", class: claim, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-7, R-9, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "ubik | UBIK | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-8, R-9, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "description() and Gecko token description are 24/7 synthetic subconscious; logo() ipfs://bafybeie72oyvggcrudrohy7yxn2hec4x42u3waexzfc2rqhqrawvbo32ni", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-5, R-9], reproduction_ids: [REP-1], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko UBIK/GLD 24h volume $2.57M; DexScreener liquidity $265k"
    summary: "Gecko pool 0x1f28…e676 volume_usd.h24 2574070 fdv_usd 8521493. DexScreener liquidity.usd 265353. Gecko reserve_in_usd was negative this pass."
    occurred_at: 2026-09-03T03:38:00Z
    observed_at: 2026-09-03T03:38:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@xDesir_arman posted ubik.gold and @ubik_gold with the CA"
    summary: "Post: Site and X are up. $UBIK is already live. https://ubik.gold and CA 0x8124…68Bd. @ubik_gold bio matches description(); from:ubik_gold had no posts this pass."
    occurred_at: 2026-09-01T19:23:23Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [identity.handle, identity.domain, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13, R-14, R-19]
  - id: EVT-3
    type: onchain
    title: "PonsV2LaunchFactory launchToken minted ubik / UBIK against GLD"
    summary: "Tx 0x6710…52fc from 0xc08c…c362 at 2026-09-01T15:16:06Z; TokenLaunched curve 0x0a4D…ed37 pairToken GLD; graduationThreshold ~24.94e18 GLD."
    occurred_at: 2026-09-01T15:16:06Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-4
    type: onchain
    title: "UBIK graduated into Uniswap v4 UBIK/GLD pool 0x1f28…e676"
    summary: "Tx 0x652f…2bef at 2026-09-01T15:54:40Z block 51842195; PoolRegistered quoteToken GLD; GraduationTokensPermanentlyLocked ~81.63M UBIK to V2LaunchLocker; Gecko launchpad_details completed_at same timestamp."
    occurred_at: 2026-09-01T15:54:40Z
    observed_at: 2026-09-03T03:42:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-20]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x8124…68Bd ubik / UBIK", url: "https://robinhoodchain.blockscout.com/address/0x812486EAea648819853F8E372dc9f1516C7868Bd", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x812486EAea648819853F8E372dc9f1516C7868Bd name ubik is_contract true is_verified false proxy_type null implementations []. token symbol UBIK decimals 18 total_supply 1000000000000000000000000000 holders_count 6144 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3786…5508 PonsV2LauncherToken (bytecode compare)", url: "https://robinhoodchain.blockscout.com/address/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "DENAR PonsV2LauncherToken is_verified true file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35. eth_getCode 3248 B; UBIK 0x8124…68Bd also 3248 B, prefix256 equal, first mismatch byte 391 immutable deployer 0xc08c…c362 vs DENAR deployer 0xa6f3…513a. UBIK explorer is_verified false this pass." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD5…C7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol compiler v0.8.35 verified_at 2026-08-04T17:40:45Z. Events include TokenLaunched and PoolGraduated." }
  - { id: R-4, publisher: Blockscout, title: "launchToken tx 0x6710677f…52fc", url: "https://robinhoodchain.blockscout.com/tx/0x6710677fffcf2b30b5668407605eadc6742d5ce1f81ba817fe525c1c4a3d52fc", published_at: 2026-09-01T15:16:06Z, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-3], excerpt: "timestamp 2026-09-01T15:16:06.000000Z status ok block_number 51819359 from 0xc08ce6ff78e5a45011Bfc38F11556f1eE9DFc362 (is_contract false) to PonsV2LaunchFactory 0x7eD598Bc…C7e method launchToken. decoded name ubik symbol UBIK pairToken 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on UBIK", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-26], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32a566c (53106284). Token code 3248 B. name ubik symbol UBIK decimals 18 totalSupply 1e27. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. deployer() 0xc08ce6ff78e5a45011Bfc38F11556f1eE9DFc362. curve() 0x0a4D44200dD5eFefD065f59045d35b45C7eFed37. description() 24/7 synthetic subconscious. owner() reverts." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory owner() and pairTokenEconomics(GLD)", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21], excerpt: "Factory code 24177 B. owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. pairTokenEconomics(0xC9a9…FC4e) phantomQuote 9974059694957308634 graduationThreshold 24940596949573086306 decimals 18. Deployer 0xc08c…c362 code 0x. Curve 0x0a4D…ed37 code 10229 B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens UBIK", url: "https://api.dexscreener.com/latest/dex/tokens/0x812486EAea648819853F8E372dc9f1516C7868Bd", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "30 robinhood uniswap pairs. UBIK/GLD pairAddress 0x1f28c0c3938fd48947bdb02c43377534ef0a3ffb23945e68052bcaaec1d2e676 labels v4 base ubik / UBIK quote SPDR Gold Trust • Robinhood Token / GLD 0xC9a981FE…FC4e liquidity.usd 265353.47 volume.h24 2538287.72 fdv 8450302 pairCreatedAt 1788278080000. info.websites [] info.socials []." }
  - { id: R-8, publisher: GeckoTerminal, title: "UBIK/GLD Pons v2 / Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1f28c0c3938fd48947bdb02c43377534ef0a3ffb23945e68052bcaaec1d2e676", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name UBIK / gld pool_created_at 2026-09-01T15:54:40Z fdv_usd 8521492.858 market_cap_usd null volume_usd.h24 2574070.30705794 reserve_in_usd -1517647.06398268 (negative this pass) transactions.h24 buys 3089 sells 3551. dex pons-v2-dex quote robinhood_0xc9a981fee1f9dec688bb123ccdecc63d0debfc4e." }
  - { id: R-9, publisher: GeckoTerminal, title: "ubik token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x812486EAea648819853F8E372dc9f1516C7868Bd", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23, CLM-25, CLM-26, EVT-4], excerpt: "name ubik symbol UBIK decimals 18 total_supply 1e27 price_usd 0.008482762923 fdv_usd 8482762.92 market_cap_usd null volume_usd.h24 6435628.20. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-01T15:54:40Z migrated_destination_pool_address 0x1f28…e676. info websites [] twitter_handle null description 24/7 synthetic subconscious." }
  - { id: R-10, publisher: DexScreener, title: "CASHBIRD/GLD pair (distinct)", url: "https://api.dexscreener.com/latest/dex/search?q=CASHBIRD", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "CASHBIRD 0x38C8f642A04FEaC9899990276b4207fE4F621e18 / GLD pair 0xf25fc6cf0b524e236ffe33e762caee47ef7284ec65c175900a1542a6bc91fdfb labels v4 liquidity.usd 100542.93 volume.h24 1442324.74 pairCreatedAt 2026-09-01T21:50:40Z. Different token from UBIK 0x8124…68Bd." }
  - { id: R-11, publisher: DexScreener, title: "SCHIFFY/GLD pair (distinct)", url: "https://api.dexscreener.com/latest/dex/search?q=UBIK%20GLD", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "SCHIFFY 0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18 / GLD pair 0xc749412e31087a6e6f9210af575bc9100159fbc9f45da3ca8b26b31f3bf5777e labels v4 liquidity.usd 283333.78 volume.h24 916879.73. Different token from UBIK 0x8124…68Bd." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. GLD row tokenSymbol GLD tokenName SPDR Gold Trust • Robinhood Token deployments contractAddress 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE isin US78463V1070." }
  - { id: R-13, publisher: ubik.gold, title: "ubik.gold homepage", url: "https://ubik.gold", published_at: null, accessed_at: 2026-09-03T03:41:00Z, kind: official-site, authority: unknown, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-23, EVT-2], excerpt: "HTTP 200. og:title 24/7 synthetic subconscious. og:url https://ubik.gold. No 0x812486 string and no ubik_gold handle in the HTML this pass." }
  - { id: R-14, publisher: "@ubik_gold", title: "ubik X account", url: "https://x.com/ubik_gold", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "X user search ubik_gold: name ubik handle @ubik_gold bio 24/7 synthetic subconscious followers 1292. from:ubik_gold Latest returned no posts this pass." }
  - { id: R-15, publisher: GeckoTerminal, title: "UBIK/USDG Uniswap v4 pool (secondary book)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x10fcb9ace00509e97bb46f3520135688f1b05a2bed3cc1aec06b55d621e6efce", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name UBIK / USDG 4% pool_created_at 2026-09-01T16:27:04Z volume_usd.h24 1884696.13 reserve_in_usd 506262.03 fdv_usd 8516921. dex uniswap-v4-robinhood. Not the assigned UBIK/GLD book." }
  - { id: R-16, publisher: Blockscout, title: "Token 0xC9a9…FC4e SPDR Gold Shares • Robinhood Token / GLD", url: "https://robinhoodchain.blockscout.com/address/0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name SPDR Gold Shares • Robinhood Token symbol GLD decimals 18 holders_count 14112." }
  - { id: R-17, publisher: DexScreener, title: "UBIK/GLD pair page", url: "https://dexscreener.com/robinhood/0x1f28c0c3938fd48947bdb02c43377534ef0a3ffb23945e68052bcaaec1d2e676", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-11], excerpt: "chainId robinhood dexId uniswap labels v4 pairAddress 0x1f28c0c3938fd48947bdb02c43377534ef0a3ffb23945e68052bcaaec1d2e676 base ubik / UBIK 0x812486EA…68Bd quote GLD 0xC9a981FE…FC4e liquidity.usd 265353.47 volume.h24 2538287.72." }
  - { id: R-18, publisher: Blockscout, title: "TokenLaunched log for UBIK", url: "https://robinhoodchain.blockscout.com/tx/0x6710677fffcf2b30b5668407605eadc6742d5ce1f81ba817fe525c1c4a3d52fc", published_at: 2026-09-01T15:16:06Z, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, EVT-3], excerpt: "TokenLaunched token 0x812486EAea648819853F8E372dc9f1516C7868Bd curve 0x0a4D44200dD5eFefD065f59045d35b45C7eFed37 deployer 0xc08ce6ff78e5a45011Bfc38F11556f1eE9DFc362 pairToken 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e launchConfigId 0 graduationThreshold 24940596949573086306. Mint 1e27 to the curve." }
  - { id: R-19, publisher: "@xDesir_arman", title: "Site and X are up. $UBIK is already live", url: "https://x.com/xDesir_arman/status/2094868742392144350", published_at: 2026-09-01T19:23:23Z, accessed_at: 2026-09-03T03:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "@ubik_gold anyone else seeing this? Site and X are up. $UBIK is already live https://ubik.gold | last saved DNS is 1.5 hours before the token launch. CA 0x812486EAea648819853F8E372dc9f1516C7868Bd." }
  - { id: R-20, publisher: Blockscout, title: "Graduation tx 0x652f959d…2bef", url: "https://robinhoodchain.blockscout.com/tx/0x652f959d5fa43c15b214baed5d4b7a650aaeea313d867975c79e6fbd22422bef", published_at: 2026-09-01T15:54:40Z, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-15, CLM-25, EVT-4], excerpt: "timestamp 2026-09-01T15:54:40.000000Z status ok block_number 51842195. PoolRegistered poolId 0x1f28c0c3938fd48947bdb02c43377534ef0a3ffb23945e68052bcaaec1d2e676 memecoin 0x8124…68Bd quoteToken GLD creator 0xc08c…c362. GraduationTokensPermanentlyLocked amount 81632653061224489695387950 to V2LaunchLocker 0x2674…4952." }
  - { id: R-21, publisher: Blockscout, title: "PonsV2LaunchFactory verified source", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e?tab=contract", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7], excerpt: "ContractName PonsV2LaunchFactory. PairTokenEconomics for an approved ERC-20 quote; TokenLaunched(token, curve, deployer, pairToken, launchConfigId, graduationThreshold); PoolGraduated(token, positionId, tokenAmount, pairTokenAmount)." }
  - { id: R-22, publisher: Blockscout, title: "Search q=UBIK", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=UBIK", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "50 token rows named ubik/UBIK. Assigned CA 0x812486EAea648819853F8E372dc9f1516C7868Bd is_verified false. Also CurvePumpERC1967Proxy 0x62d42B56…886b holders 1024; UBIK 0xD923f29d…0Bd8 holders 403; PonsLauncherToken 0x2E3DDf8e…4b07 holders 33. Do not merge CAs." }

gaps:
  - { priority: P0, question: "Does @ubik_gold or ubik.gold bidirectionally link to token 0x8124…68Bd?", checked: "DexScreener info.websites [] info.socials []; on-chain socials() empty; ubik.gold HTML has no CA; from:ubik_gold no posts, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; wait for a first @ubik_gold post that embeds the CA" }
  - { priority: P1, question: "Why is Blockscout is_verified false on 0x8124…68Bd when bytecode matches verified PonsV2LauncherToken except the immutable deployer?", checked: "eth_getCode 3248 B vs DENAR 3248 B; first mismatch byte 391 is deployer 0xc08c…c362, 2026-09-03", next: "compare metadata hash and ask whether Blockscout similar-match verification can attach PonsV2LauncherToken.sol" }
  - { priority: P1, question: "Why is Gecko UBIK/GLD reserve_in_usd negative while DexScreener liquidity.usd is $265k?", checked: "Gecko pool reserve_in_usd -1517647; DexScreener liquidity.usd 265353.47; Gecko token total_reserve_in_usd 0.0, 2026-09-03", next: "re-fetch the Gecko pool; do not treat the negative reserve as TVL" }
  - { priority: P2, question: "Which of the other Blockscout UBIK tickers still have live books, and do any share deployer 0xc08c…c362?", checked: "Search listed CurvePump 0x62d4…886b (1024 holders) and Pons v1 0x2E3D…4b07 (33 holders); DexScreener live GLD book is 0x8124…68Bd, 2026-09-03", next: "DexScreener each CA; do not merge" }
---

# UBIK — research packet

## What it is

A one-billion-supply ERC-20 launched on a Pons v2 bonding curve quoted against GLD, then graduated into a Uniswap v4 UBIK/GLD pool. PonsV2LaunchFactory deploys ubik (UBIK) in one launchToken call with pairToken set to the Robinhood GLD Stock Token. Traders buy and sell UBIK on Uniswap v4. GLD is a rail. No official site or handle was located this pass; ubik.gold and @ubik_gold are unconfirmed-official.

Themes: memecoin, stock-paired:GLD, rwa

## Why it matters

The UBIK/GLD Uniswap v4 book printed about $2.57M of 24h volume on Gecko at collection, with DexScreener liquidity $265k on that pair. GET /rhj/assets lists GLD 0xC9a9…FC4e as SPDR Gold Trust • Robinhood Token, so the quote leg is an official Stock Token rail rather than a lookalike. The same GLD book also lists CASHBIRD and SCHIFFY as different tokens.

## What could go wrong

USD liquidity figures on the UBIK/GLD book count both sides, and the quote side is GLD, not USDG. Gecko reserve_in_usd on this pool was negative this pass, so the DexScreener print is the pool TVL used here. Several other contracts on 4663 reuse the UBIK ticker. No official handle was located, so comms surfaces stay unconfirmed-official.

## Product and mechanics

PonsV2LaunchFactory 0x7eD5…C7e launchToken from 0xc08c…c362 at 2026-09-01T15:16:06Z minted ubik / UBIK supply 1e9*1e18 into curve 0x0a4D…ed37 with pairToken GLD. launchFactory() on the token returns that factory. deployer() returns the same 0xc08c…c362. description() is 24/7 synthetic subconscious. [verified R-4 R-5 R-18]

Graduation tx 0x652f…2bef at 2026-09-01T15:54:40Z registered Uniswap v4 poolId 0x1f28…e676 on V2MemeHook with quoteToken GLD. GraduationTokensPermanentlyLocked sent about 81.63M UBIK to V2LaunchLocker 0x2674…4952. factory.pairTokenEconomics(GLD) graduationThreshold is ~24.94e18 GLD. Secondary UBIK/USDG and UBIK/ETH books exist on DexScreener. [verified R-6 R-7 R-20]

## Control and security

token owner() reverts. factory owner() is Pons Safe 0x263e…19Dd. Deployer 0xc08c…c362 has no code. [verified R-5 R-6]

PonsV2LaunchFactory is verified on Blockscout (contracts/src/v2/PonsV2LaunchFactory.sol, compiler v0.8.35). The UBIK token page is_verified false; eth_getCode matches a verified PonsV2LauncherToken except the immutable deployer slot. Curve source is unverified. No audit report URL was located this pass. [verified R-2 R-3] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites and info.socials are empty. On-chain socials() is five empty strings. ubik.gold titles 24/7 synthetic subconscious with no contract in the HTML; @ubik_gold uses the same bio and had no posts this pass. @xDesir_arman posted both as live. Flag unconfirmed-official and third-party-link. [claim R-7 R-13 R-14 R-19]

## Economics and activity

UBIK/GLD Uniswap v4 24h volume is 2574070.31 USD at 2026-09-03T03:38:00Z from the Gecko pool endpoint. fdv_usd is 8521492.86. Gecko token volume_usd.h24 is 6435628.20 across all pools, not the GLD book. Gecko reserve_in_usd on the GLD pool was negative this pass. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 265353.47, volume.h24 2538287.72, fdv/marketCap 8450302. Blockscout holders_count 6144. Pair created 2026-09-01T15:54:40Z. A second UBIK/GLD v4 pool 0x6914…8478 had $232 liquidity this pass. [claim R-1 R-7]

## Material risks

- Quote token GLD 0xC9a9…FC4e is a Robinhood Stock Token rail; pool USD reserve is UBIK plus GLD, not a USDG backstop. [verified R-12 R-16]
- Gecko UBIK/GLD reserve_in_usd was negative this pass; do not treat that field as TVL. [claim R-8]
- ca-collision: other UBIK tickers exist on 4663; live GLD book is 0x8124…68Bd. [verified R-22]
- No official handle or domain this pass; ubik.gold / @ubik_gold are unconfirmed-official. [claim R-7 R-13 R-14]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/GLD and launch/graduation txs, RPC name/symbol/launchFactory/deployer/curve/owner/pairTokenEconomics, DexScreener, Gecko pool/token/info, /rhj/assets, ubik.gold, @ubik_gold, and the @xDesir_arman post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 2574070.31 is the Gecko UBIK/GLD pool 24h volume, not the 6435628.20 token all-pools figure. DexScreener 2538287.72 / 265353.47 is the same pair, different aggregator. Gecko reserve was not used. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that UBIK is an official SPDR/GLD product or the Pons protocol itself. /rhj/assets lists GLD as a Stock Token rail, Pons is the pad, and no official handle or domain was located. CASHBIRD/GLD and SCHIFFY/GLD are different token addresses. [inference R-10 R-11 R-12]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no ubik / UBIK / 0x8124…68Bd. The discovery inventory's claim 53 named ubik | UBIK with no handle.
- Explorer: Blockscout api/v2 token, factory, GLD, search UBIK, launchToken 0x6710…52fc, graduation 0x652f…2bef, TokenLaunched and PoolRegistered logs, holders. RPC eth_getCode/eth_call/eth_getLogs with Mozilla UA at block 53106284.
- Aggregators: DexScreener latest/dex/tokens, pairs, search UBIK and CASHBIRD; Gecko token, token/info, pool UBIK/GLD and UBIK/USDG.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 GLD row at 0xC9a9…FC4e.
- Social: X keyword $UBIK / ubik.gold / @ubik_gold; from:ubik_gold (no posts); user search UBIK / ubik_gold; ubik.gold HTML.
- Failed: Blockscout token creator_address_hash null (launchFactory() used instead); Gecko pool reserve_in_usd negative; Gecko token endpoint 429 on first fetch then 200; from:ubik_gold empty.
- Time: collection 2026-09-03T03:30Z–2026-09-03T03:45Z.
