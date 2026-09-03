---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: waddles
name: WADDLES
packet_tier: seed
as_of: 2026-09-03T04:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [waddles]
allowed_paths:
  - research/inbox/packets/waddles/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: WADDLES
  aliases: ["Waddles", "World Wide Waddles"]
  symbols: [WADDLES]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites lists https://waddles.website/; homepage HTML title World Wide Waddles with no contract this pass; github.com/sboult/waddles.website README has no CA and the repo was created 2026-07-24 before launchToken; Gecko token has no website field; flag unconfirmed-official"
  official_handle: "NULL — DexScreener info.socials lists x.com/waddlesamzn and t.me/waddlesRH as a community-claim profile; @WaddlesAMZN bio does not embed 0xbB6Ee7…0CdD; t.me/waddlesRH preview has no CA; do not invent an official handle; flag unconfirmed-official"
  repository: "NULL — github.com/sboult/waddles.website exists (homepage https://waddles.website) but README and root listing have no token address this pass; Blockscout token page lists no repo"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "WADDLES is the ERC-20 at 0xbB6E…0CdD created by that factory; entity_kind token, not protocol"
        - "No shared handle; no official WADDLES handle was located"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "WADDLES is a Pons v2 launchToken / createGraduatedPool path, not LongLauncher"
        - "In-flight SENDER/AMZN is the LongLauncher AMZN pair at 0x4d41…1e18; WADDLES is 0xbB6E…0CdD"
        - "No shared domain, handle, or reproduced address"
    - slug: sender
      signals: [other]
      contrary_signals:
        - "Pending packet sender is DopplerERC20V1 0x4d41…1e18 paired to the same AMZN rail via LongLauncher"
        - "WADDLES is 0xbB6E…0CdD via PonsV2LaunchFactory into Uniswap v4 pool 0x31c5…fbdc"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the AMZN/WADDLES pool dex pons-v2-dex, not bankr-robinhood"
        - "Creation tx 0xf227bb99…7f91 calls PonsV2LaunchFactory.launchToken, not a Bankr agent launch"
        - "No shared handle or domain"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xbB6E…0CdD has 3248 B of code on 4663 (not an EIP-1167 clone); PonsV2LaunchFactory.launchToken at 2026-08-29T13:47:02Z minted Waddles / WADDLES into bonding curve 0xeC47…1899 quoted against Amazon • Robinhood Token AMZN 0x12f1…bF54; createGraduatedPool at 2026-08-29T13:53:24Z seeded Uniswap v4 pool 0x31c5…fbdc. AMZN is the quote rail. Token owner() and factory() revert. No bidirectional official handle this pass. [R-1] [R-4] [R-5] [R-6] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://waddles.website/", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/WaddlesAMZN", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/waddlesRH", authenticity: unconfirmed }
  - { kind: app, url: "https://www.ponsfamily.com/launchpad/0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD", authenticity: confirmed }

deployments:
  - label: WADDLES token
    role: token
    address:
      value: "0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:31:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-5, R-18]
  - label: PonsV2LaunchFactory
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:33:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5, R-6]
  - label: Pons v2 bonding curve (TokenLaunched.curve)
    role: other
    address:
      value: "0xeC4702Ef81Fe8d47708231B4E60E582372b21899"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:33:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-18, R-22]
  - label: V2LaunchLocker
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-15, R-19]
  - label: AMZN Amazon • Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0x12f190a9F9d7D37a250758b26824B97CE941bF54"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-12, R-16]
  - label: V2GraduationExecutor
    role: other
    address:
      value: "0xC7819B64A1dAECD7eC19856d026cb14EfBd89046"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-19]
  - label: V2MemeHook
    role: other
    address:
      value: "0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-19]

metrics:
  - { kind: volume_24h, value: 776350.30, currency: USD, as_of: 2026-09-03T04:35:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x31c56f7170f6c2166ceba2112ec83838e98354c03f0138bf006b62822115fbdc volume_usd.h24 (AMZN/WADDLES pool, not Gecko token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 95900.24, currency: USD, as_of: 2026-09-03T04:35:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x31c56f7170f6c2166ceba2112ec83838e98354c03f0138bf006b62822115fbdc reserve_in_usd (AMZN/WADDLES pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 1475465.23, currency: USD, as_of: 2026-09-03T04:36:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD fdv_usd (market_cap_usd null). Gecko pool fdv_usd 1985978.61 is AMZN-as-base, not WADDLES.", class: claim, receipt_ids: [R-8, R-9] }
  - { kind: holders, value: 856, currency: null, as_of: 2026-09-03T04:31:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32ad956 (53139798). Token 0xbB6E…0CdD eth_getCode 3248 B prefix 60806040, not EIP-1167. name Waddles, symbol WADDLES, decimals 18, totalSupply 1e27. factory() reverts. owner() reverts. AMZN 0x12f1…bF54 eth_getCode 283 B name Amazon • Robinhood Token symbol AMZN. Factory code 24177 B owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. Curve code 10229 B. Locker 1969 B. Grad executor 4402 B. Hook 15167 B. Deployer 0x81D7…CC63 eth_getCode 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1, R-3, R-4, R-15, R-16, R-18, R-19], result: "Blockscout api/v2 token 0xbB6E…0CdD name Waddles symbol WADDLES holders_count 856 total_supply 1e27 is_verified false proxy_type null creator_address_hash null this pass. Search q=WADDLES also returned HoodWaddle/WADDLE, Duckcat/Waddles, Waddles Official, WaddleBet, WADDLE 0xCf83…C8b8. Top holder V2LaunchLocker 0x2674…4952 8.163e25. launchToken tx 0xf227bb99…7f91 2026-08-29T13:47:02Z block 49201242 from 0x81D7…CC63 to PonsV2LaunchFactory; TokenLaunched token 0xbB6E…0CdD curve 0xeC47…1899 pairToken AMZN 0x12f1…bF54 graduationThreshold 29330291092142702509. createGraduatedPool tx 0x1db50ab0…6dd0 2026-08-29T13:53:24Z block 49205017 from 0xc0b3…Ae6e; PoolManager Initialize id 0x31c5…fbdc currency0 AMZN currency1 WADDLES hooks V2MemeHook 0xE5e7…e044; PoolGraduated positionId 1133086; TokenSupplyLocked 8.163e25 to locker. AMZN token name Amazon • Robinhood Token holders_count 37794." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:36:00Z, receipt_ids: [R-7, R-8, R-9, R-20], result: "DexScreener latest/dex/tokens/0xbB6E…0CdD: 4 robinhood uniswap pairs; top WADDLES/AMZN v4 0x31c5…fbdc quote 0x12f1…bF54 Amazon • Robinhood Token / AMZN liquidity.usd 70812.33 volume.h24 590564.72 fdv/marketCap 832658 pairCreatedAt 1788011604000 (2026-08-29T13:53:24Z) info.websites [https://waddles.website/] info.socials [x.com/waddlesamzn, t.me/waddlesRH]. Secondary WADDLES/USDG v4 books have far less liquidity. Gecko pool name AMZN / WADDLES dex pons-v2-dex volume_usd.h24 776350.300517087 reserve_in_usd 95900.2392 fdv_usd 1985978.61 (AMZN base) pool_created_at 2026-08-29T13:53:24Z. Gecko token volume_usd.h24 799765.870330711 (all pools) fdv_usd 1475465.23 market_cap_usd null launchpad_details.completed true completed_at 2026-08-29T13:53:24Z." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one AMZN row tokenName Amazon • Robinhood Token deployments contractAddress 0x12f190a9F9d7D37a250758b26824B97CE941bF54 chainId 4663. tokenSymbol/tokenName scan for WADDLES returned 0 hits." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-5, R-6], result: "PonsV2LaunchFactory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd (census Pons Safe). Token factory() and owner() revert. Deployer 0x81D7…CC63 has no code. AMZN name() Amazon • Robinhood Token; symbol() AMZN." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchFactory.launchToken cloned a 1e9-supply Waddles / WADDLES token into a bonding curve quoted against factory pairToken AMZN; createGraduatedPool then seeded Uniswap v4 pool 0x31c5…fbdc with V2MemeHook, locked ~8.16% of supply plus LP NFT 1133086 in V2LaunchLocker. AMZN is the quote rail.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-3, R-4, R-5, R-18, R-19, R-21], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Waddles", class: verified, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "WADDLES", class: verified, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-3, R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-7, R-8, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener lists @waddlesamzn and t.me/waddlesRH as community-claim socials; neither preview embeds the CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:37:00Z, receipt_ids: [R-7, R-13, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote AMZN 0x12f1…bF54 is Amazon • Robinhood Token (BeaconProxy / Stock). GET rhj/assets (194 assets) has one AMZN row at that contract, chainId 4663. WADDLES is not in the registry. AMZN is a rail, not the subject. Distinct from in-flight SENDER/AMZN 0x4d41…1e18 (LongLauncher).", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-7, R-11, R-12, R-16], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko AMZN/WADDLES pool 0x31c5…fbdc volume_usd.h24 776350.30 and reserve_in_usd 95900.24 at 2026-09-03T04:35:00Z (pool slice, not Gecko token all-pools 799765.87). Pool fdv_usd 1985978.61 is AMZN-as-base, not WADDLES.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 70812.33 volume.h24 590564.72 fdv/marketCap 832658 at 2026-09-03T04:34:00Z", class: verified, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 856, class: verified, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; factory owner() is Pons Safe 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. Deployer 0x81D7…CC63 has no code.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "launchToken deployer 0x81D7a91860a70B312E68c075C896aA06281cCC63 (snipe-tax exempted); createGraduatedPool caller 0xc0b3535E207830706656016B62806D8Fe9E6Ae6e; V2MemeHook PoolRegistered creator 0xF574664C58F37033A6cfB6B092d7d8972FB9a2d2", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-4, R-19], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is AMZN 0x12f190a9F9d7D37a250758b26824B97CE941bF54; venue after graduation is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x31c5…fbdc with V2MemeHook 0xE5e7…e044", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-6, R-7, R-8, R-19], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e as the pad, not LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, the waddles.website HTML, Telegram preview, or X search this pass", class: unknown, observed_at: 2026-09-03T04:37:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: DexScreener community-claim profile lists waddles.website, @waddlesamzn, t.me/waddlesRH; TG title WADDLES CTO, 102 subscribers, no contract in the preview; homepage HTML has no CA", class: claim, observed_at: 2026-09-03T04:37:00Z, receipt_ids: [R-7, R-13, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 1475465.23; DexScreener fdv/marketCap 832658. Gecko market_cap_usd null. Do not use Gecko pool fdv_usd 1985978.61 as the WADDLES figure (AMZN is base on that endpoint).", class: verified, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x12f190a9F9d7D37a250758b26824B97CE941bF54", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xeC4702Ef81Fe8d47708231B4E60E582372b21899", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-4, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener lists https://waddles.website/; Gecko token has no website field; homepage HTML title World Wide Waddles, no CA this pass; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:37:00Z, receipt_ids: [R-7, R-9, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "waddles | WADDLES | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko AMZN/WADDLES 24h volume $776.4k, liquidity $95.9k"
    summary: "Gecko pool 0x31c5…fbdc volume_usd.h24 776350 reserve_in_usd 95900. DexScreener same pair volume.h24 590565 liquidity.usd 70812."
    occurred_at: 2026-09-03T04:35:00Z
    observed_at: 2026-09-03T04:35:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "PonsV2LaunchFactory launchToken minted Waddles / WADDLES against AMZN"
    summary: "Tx 0xf227bb99…7f91 from 0x81D7…CC63 at 2026-08-29T13:47:02Z; TokenLaunched curve 0xeC47…1899 pairToken AMZN 0x12f1…bF54."
    occurred_at: 2026-08-29T13:47:02Z
    observed_at: 2026-09-03T04:33:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-3
    type: onchain
    title: "createGraduatedPool seeded Uniswap v4 WADDLES/AMZN and locked LP"
    summary: "Tx 0x1db50ab0…6dd0 at 2026-08-29T13:53:24Z; Initialize pool 0x31c5…fbdc; TokenSupplyLocked 8.163e25; PositionLocked NFT 1133086; Gecko launchpad_details.completed true."
    occurred_at: 2026-08-29T13:53:24Z
    observed_at: 2026-09-03T04:35:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-19]
  - id: EVT-4
    type: ct
    title: "@WaddlesAMZN posted waddles.website and an AWS builder URL"
    summary: "Post 2094146055281553744 linked https://waddles.website/ and builder.aws.com AWS Waddles article. Homepage HTML has no CA; AWS page this pass returned Builder Center chrome with no CA."
    occurred_at: 2026-08-30T19:31:41Z
    observed_at: 2026-09-03T04:37:00Z
    affected_fields: [identity.handle, identity.domain, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-10, R-14, R-23]
  - id: EVT-5
    type: ct
    title: "X posts pushed Netlify claim URLs that embed CA 0xbB6E…0CdD"
    summary: "Multiple low-engagement posts used crypto-*.netlify.app/claim?contract=0xbB6Ee7…0CdD. Flag copypasta-pattern and third-party-link."
    occurred_at: 2026-09-03T03:09:22Z
    observed_at: 2026-09-03T04:33:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-6
    type: ct
    title: "@moneymancalls called $WADDLES the first real AMZN pair mover on Pons"
    summary: "Post: $WADDLES will be one of @ponsdotfamily its top stock movers and the first real mover for the amazon stock pair. @PronkOnHood quoted it as the pons token $waddles."
    occurred_at: 2026-09-01T16:19:02Z
    observed_at: 2026-09-03T04:35:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-24, R-25]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xbB6E…0CdD Waddles / WADDLES", url: "https://robinhoodchain.blockscout.com/address/0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD", published_at: null, accessed_at: 2026-09-03T04:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD name Waddles is_contract true is_verified false proxy_type null implementations []. token symbol WADDLES decimals 18 total_supply 1000000000000000000000000000 holders_count 856 type ERC-20. creator_address_hash null this pass. Search q=WADDLES also listed HoodWaddle 0x220c…94da, Duckcat/Waddles 0x3a20…7777, Waddles Official 0x7353…7777, WADDLE 0xCf83…C8b8." }
  - { id: R-2, publisher: Blockscout, title: "Address 0xE5e7…e044 V2MemeHook", url: "https://robinhoodchain.blockscout.com/address/0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044 name V2MemeHook is_contract true is_verified true. RPC eth_getCode 15167 B." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T04:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-4, publisher: Blockscout, title: "launchToken tx 0xf227bb99…7f91", url: "https://robinhoodchain.blockscout.com/tx/0xf227bb992620e48ea737b79586efcd6b3e94c8e6ea7a708e694295eb87b17f91", published_at: 2026-08-29T13:47:02Z, accessed_at: 2026-09-03T04:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-2], excerpt: "timestamp 2026-08-29T13:47:02.000000Z status ok result success block_number 49201242 from 0x81D7a91860a70B312E68c075C896aA06281cCC63 (is_contract false) to PonsV2LaunchFactory 0x7eD598Bc…EC7e method launchToken. decoded name Waddles symbol WADDLES pairToken 0x12f190a9F9d7D37a250758b26824B97CE941bF54 launchConfigId 0. TokenLaunched token 0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD curve 0xeC4702Ef81Fe8d47708231B4E60E582372b21899 deployer 0x81D7…CC63 graduationThreshold 29330291092142702509." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, factory(), owner() on WADDLES", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32ad956 (53139798). Token code 3248 B prefix 60806040 not EIP-1167. name Waddles symbol WADDLES decimals 18 totalSupply 1e27. factory() reverts. owner() reverts. Factory code 24177 B owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. AMZN code 283 B. Curve 10229 B. Locker 1969 B. Grad 4402 B. Hook 15167 B. Deployer 0x81D7…CC63 code 0x." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "AMZN name/symbol and factory owner()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-15, CLM-21], excerpt: "block 53139798. AMZN name Amazon • Robinhood Token symbol AMZN. factory.owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. Token factory() and owner() revert." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens WADDLES", url: "https://api.dexscreener.com/latest/dex/tokens/0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "4 robinhood uniswap pairs. Top pairAddress 0x31c56f7170f6c2166ceba2112ec83838e98354c03f0138bf006b62822115fbdc labels v4 base Waddles / WADDLES 0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD quote Amazon • Robinhood Token / AMZN 0x12f190a9F9d7D37a250758b26824B97CE941bF54 liquidity.usd 70812.33 volume.h24 590564.72 fdv 832658 marketCap 832658 pairCreatedAt 1788011604000. info.websites [{url https://waddles.website/}]." }
  - { id: R-8, publisher: GeckoTerminal, title: "AMZN/WADDLES Pons v2 / Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x31c56f7170f6c2166ceba2112ec83838e98354c03f0138bf006b62822115fbdc", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name AMZN / WADDLES pool_created_at 2026-08-29T13:53:24Z fdv_usd 1985978.60671874 market_cap_usd 1985978.80588395 volume_usd.h24 776350.300517087 reserve_in_usd 95900.2392 transactions.h24 buys 1075 sells 971. dex pons-v2-dex. base robinhood_0x12f190a9…bf54 quote robinhood_0xbb6ee7aa6d…0cdd. quote_token_price_usd 0.00147546523145266." }
  - { id: R-9, publisher: GeckoTerminal, title: "Waddles token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD", published_at: null, accessed_at: 2026-09-03T04:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20, CLM-23, EVT-3], excerpt: "name Waddles symbol WADDLES decimals 18 total_supply 1e27 price_usd 0.001475465231 fdv_usd 1475465.23145266 market_cap_usd null volume_usd.h24 799765.870330711 total_reserve_in_usd 63283.78. coingecko_coin_id null. launchpad_details graduation_percentage 100 completed true completed_at 2026-08-29T13:53:24.000Z migrated_destination_pool_address 0x31c56f7170f6c2166ceba2112ec83838e98354c03f0138bf006b62822115fbdc. No website field." }
  - { id: R-10, publisher: "@WaddlesAMZN", title: "PONS ATH / waddles.website / AWS builder", url: "https://x.com/WaddlesAMZN/status/2094146055281553744", published_at: 2026-08-30T19:31:41Z, accessed_at: 2026-09-03T04:35:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "PONS ATH. Have you seen the Amazon created website or the AWS builders article about Waddles? Interesting that they included a ticker on their own web for $waddles. https://builder.aws.com/content/3EYWVDMZedTHG5As42wI47tL6k1/aws-waddles-what-the-duck https://waddles.website/" }
  - { id: R-11, publisher: pons, title: "Waddles ($WADDLES) launchpad page", url: "https://www.ponsfamily.com/launchpad/0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD", published_at: null, accessed_at: 2026-09-03T04:37:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-9], excerpt: "title Waddles ($WADDLES) · pons. About Paired AMZN. Creator 0x81D7…CC63 · 0.00 % creator tax. Supply 1,000,000,000 WADDLES Fixed at launch 0xbB6E…0CdD. This market is priced in a tokenized equity, which pons does not offer to traders in the United States. Price $0.000838 Market cap $838,396.46 Price in AMZN 0.00000329 AMZN Market Uniswap v4." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9], excerpt: "HTTP 200. assets length 194. One AMZN hit: tokenSymbol AMZN tokenName Amazon • Robinhood Token deployments contractAddress 0x12f190a9F9d7D37a250758b26824B97CE941bF54 chainId 4663 networkName Robinhood Chain. tokenSymbol/tokenName scan for WADDLES returned 0 hits." }
  - { id: R-13, publisher: Telegram, title: "t.me/waddlesRH", url: "https://t.me/waddlesRH", published_at: null, accessed_at: 2026-09-03T04:37:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19], excerpt: "HTTP 200. og:title WADDLES CTO. og:description You can view and join @waddlesRH right away. tgme_page_title WADDLES CTO. tgme_page_extra 102 subscribers. No contract address in the preview HTML this pass." }
  - { id: R-14, publisher: waddles.website, title: "World Wide Waddles homepage", url: "https://waddles.website/", published_at: null, accessed_at: 2026-09-03T04:37:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-23, EVT-4], excerpt: "HTTP 200. title World Wide Waddles. og:description Waddles says hello to the World Wide Web. No 0x address in the HTML this pass." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x2674…4952 V2LaunchLocker", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. Token holders page lists this address first at 81632653061224489688568099 WADDLES." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x12f1…bF54 Amazon • Robinhood Token / AMZN", url: "https://robinhoodchain.blockscout.com/address/0x12f190a9F9d7D37a250758b26824B97CE941bF54", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x12f190a9F9d7D37a250758b26824B97CE941bF54 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Amazon • Robinhood Token symbol AMZN decimals 18 total_supply 7769948000000000000000 holders_count 37794." }
  - { id: R-17, publisher: "@SunilRa79901862", title: "$WADDLES portal / Netlify claim URL", url: "https://x.com/SunilRa79901862/status/2095348400078111185", published_at: 2026-09-03T03:09:22Z, accessed_at: 2026-09-03T04:33:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "yo ct ?!? $WADDLES portal actually opened eligibility check live CA: 0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD https://crypto-keo.netlify.app/claim?contract=0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD&cfg=evmdrop&pid=bG3Kk. Same CA pattern also on crypto-8xe.netlify.app and crypto-mll.netlify.app posts the same day." }
  - { id: R-18, publisher: Blockscout, title: "TokenLaunched log for WADDLES", url: "https://robinhoodchain.blockscout.com/tx/0xf227bb992620e48ea737b79586efcd6b3e94c8e6ea7a708e694295eb87b17f91", published_at: 2026-08-29T13:47:02Z, accessed_at: 2026-09-03T04:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-22, EVT-2], excerpt: "TokenLaunched token 0xbB6Ee7aa6D56266CCEf3B1c0706bCCCE2F9a0CdD curve 0xeC4702Ef81Fe8d47708231B4E60E582372b21899 deployer 0x81D7a91860a70B312E68c075C896aA06281cCC63 pairToken 0x12f190a9F9d7D37a250758b26824B97CE941bF54 launchConfigId 0 graduationThreshold 29330291092142702509. Block 49201242. First tokentx from 0x0 to curve value 1e27." }
  - { id: R-19, publisher: Blockscout, title: "createGraduatedPool tx 0x1db50ab0…6dd0", url: "https://robinhoodchain.blockscout.com/tx/0x1db50ab04da4fb79dde7e69d2d3f5a11f4571b2bed55be7c28c4c69fb5536dd0", published_at: 2026-08-29T13:53:24Z, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-15, EVT-3], excerpt: "timestamp 2026-08-29T13:53:24.000000Z status ok from 0xc0b3535E207830706656016B62806D8Fe9E6Ae6e (is_contract false) to PonsV2LaunchFactory method createGraduatedPool(address token) token 0xbB6Ee7…0CdD. TokenSupplyLocked amount 81632653061224489688565596. Initialize id 0x31c56f7170f6c2166ceba2112ec83838e98354c03f0138bf006b62822115fbdc currency0 AMZN currency1 WADDLES fee 0 tickSpacing 200 hooks 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044." }
  - { id: R-20, publisher: DexScreener, title: "search q=WADDLES", url: "https://api.dexscreener.com/latest/dex/search?q=WADDLES", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "Robinhood uniswap WADDLES 0xbB6E…0CdD / AMZN liq 70812.33 vol 590082.23. Separate robinhood uniswap WADDLES 0xbc490F844eBaf79100a6D232cf0E587Fbf541e18 / AMZN liq 20078.13 vol 472.62 is a different token. Solana pump.fun Waddles rows are off-chain for this packet." }
  - { id: R-21, publisher: Blockscout, title: "PonsV2LaunchFactory verified source (census packet)", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e?tab=contract", published_at: null, accessed_at: 2026-09-03T04:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7], excerpt: "ContractName PonsV2LaunchFactory is_verified true. launchToken and createGraduatedPool decoded on the WADDLES txs this pass. Pair token in calldata is AMZN 0x12f1…bF54." }
  - { id: R-22, publisher: Blockscout, title: "CurveCompleted tx 0xc9ebb465…bad2", url: "https://robinhoodchain.blockscout.com/tx/0xc9ebb465050d138b9e9227d57d1af6283e095ad19530ef5f4f149b47fdb8bad2", published_at: 2026-08-29T13:53:23Z, accessed_at: 2026-09-03T04:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-3], excerpt: "timestamp 2026-08-29T13:53:23.000000Z block 49205011 from 0xeec71630B7c3D745679Bbd7b75d248137E42dD06 to 0x65050A9b7E5075A2bA5cED7b1b64EE66262c40Dc method 0x4d819a2a. CurveCompleted recipient 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e quoteOut 29330291092142702560 tokenOut 285714285714285714275277210. One second before createGraduatedPool." }
  - { id: R-23, publisher: GitHub, title: "sboult/waddles.website README", url: "https://github.com/sboult/waddles.website", published_at: 2026-07-24T13:42:23Z, accessed_at: 2026-09-03T04:37:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-23, EVT-4], excerpt: "full_name sboult/waddles.website homepage https://waddles.website created_at 2026-07-24T13:42:23Z pushed_at 2026-09-02T19:36:45Z. README: A tiny open source home for Waddles, built with React and hosted with AWS Amplify. No 0x address, no WADDLES ticker, no AMZN string in the README this pass." }
  - { id: R-24, publisher: "@moneymancalls", title: "$WADDLES first real mover for the amazon stock pair", url: "https://x.com/moneymancalls/status/2094822349640028522", published_at: 2026-09-01T16:19:02Z, accessed_at: 2026-09-03T04:35:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "And this is why I think $WADDLES will be one of @ponsdotfamily it’s top stock movers and the first real mover for the amazon stock pair. A 2.8 trillion $ company has a hidden mascot within their code. Buy waddles and get Amazon stock rewards." }
  - { id: R-25, publisher: "@PronkOnHood", title: "The pons token $waddles is getting accumulated", url: "https://x.com/PronkOnHood/status/2094875573998796855", published_at: 2026-09-01T19:50:32Z, accessed_at: 2026-09-03T04:35:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "The pons token $waddles is getting accumulated by some monster wallets. Imagine soon it gets pushed by some big kols. Free $AMZN stocks distributed to holders. Can’t beat that tech." }
  - { id: R-26, publisher: "@PronkOnHood", title: "Buy this ca and earn $AMZN for holding", url: "https://x.com/PronkOnHood/status/2095337281355714762", published_at: 2026-09-03T02:25:12Z, accessed_at: 2026-09-03T04:33:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-4], excerpt: "Buy this ca and earn $AMZN for holding. 0xbb6ee7aa6d56266ccef3b1c0706bccce2f9a0cdd. Quote of @WaddlesAMZN 2095305650867736675." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xbB6E…0CdD?", checked: "DexScreener community-claim profile lists waddles.website / @waddlesamzn / t.me/waddlesRH; homepage HTML and TG preview have no CA; github.com/sboult/waddles.website README has no CA and predates launchToken, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts from @WaddlesAMZN that embed the CA" }
  - { priority: P0, question: "Does any Amazon or AWS surface endorse this token, versus the pre-existing Waddles mascot site?", checked: "github.com/sboult/waddles.website created 2026-07-24 with no CA; builder.aws.com URL returned Builder Center chrome with no CA this pass; launchToken is a Pons factory call from an EOA, 2026-09-03", next: "open the AWS builder article body if it renders without the SPA chrome; do not treat mascot lore as issuer identity" }
  - { priority: P1, question: "Does verified PonsV2LaunchFactory source leave any privileged path on a graduated token despite token owner() reverting?", checked: "token owner() and factory() revert; factory owner() is the Pons Safe; LP NFT and ~8.16% supply sit in V2LaunchLocker, 2026-09-03", next: "read createGraduatedPool and locker withdraw modifiers on the explorer" }
  - { priority: P1, question: "Should the other robinhood WADDLES 0xbc49…1e18 / AMZN book get its own packet?", checked: "DexScreener search listed it at liq 20078 vol 472 this pass, different CA from 0xbB6E…0CdD, 2026-09-03", next: "only if an assignment names that address" }
  - { priority: P2, question: "Which aggregator should a card use when Gecko token fdv is $1.48M and DexScreener fdv is $833k on the same pool?", checked: "Gecko token fdv_usd 1475465.23 vs DexScreener 832658; Gecko pool fdv 1985978 is AMZN-as-base; reserve 95900 vs liq 70812, 2026-09-03", next: "keep both figures labeled; do not collapse" }
---

# WADDLES — research packet

## What it is

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against Amazon • Robinhood Token (AMZN). PonsV2LaunchFactory.launchToken on 2026-08-29 minted Waddles (WADDLES) into a bonding curve, then createGraduatedPool seeded the WADDLES/AMZN book and locked leftover supply plus the LP NFT. Traders buy and sell WADDLES against AMZN. AMZN is the quote rail, not the subject. No bidirectional official handle was located this pass.

Themes: memecoin, stock-paired:AMZN, rwa, graduation:pons-v2

## Why it matters

The WADDLES/AMZN Uniswap v4 book printed about $776.4k of 24h volume on Gecko at collection, with DexScreener on the same pair at $590.6k volume and $70.8k liquidity. GET /rhj/assets has an AMZN Stock Token row at 0x12f1…bF54, so the pair leg is the Robinhood AMZN rail. This is a Pons v2 graduation, distinct from in-flight SENDER/AMZN (LongLauncher / Doppler at 0x4d41…1e18).

## What could go wrong

USD liquidity figures on the WADDLES/AMZN book count both sides, and the quote side is AMZN, not USDG. Gecko and DexScreener disagree on reserve and fdv for the same pool; Gecko's pool fdv is AMZN-as-base. DexScreener lists waddles.website and @WaddlesAMZN as a community-claim profile, but those surfaces do not embed the CA this pass, so comms stay unconfirmed-official. Netlify claim URLs that embed this CA are third-party-link / copypasta-pattern. A second robinhood WADDLES/AMZN token at 0xbc49…1e18 is a different address.

## Product and mechanics

PonsV2LaunchFactory 0x7eD5…EC7e launchToken from EOA 0x81D7…CC63 at 2026-08-29T13:47:02Z minted Waddles / WADDLES supply 1e9*1e18 into bonding curve 0xeC47…1899 quoted against AMZN 0x12f1…bF54. TokenLaunched graduationThreshold is 29330291092142702509 (~29.33 AMZN). factory() on the token reverts. [verified R-4 R-5 R-18]

CurveCompleted at 2026-08-29T13:53:23Z then createGraduatedPool at 13:53:24Z from EOA 0xc0b3…Ae6e initialized Uniswap v4 poolId 0x31c5…fbdc (currency0 AMZN, currency1 WADDLES, hooks V2MemeHook 0xE5e7…e044). ~204.08M WADDLES and ~29.33 AMZN went into the pool. ~81.63M WADDLES (about 8.16% of supply) and LP NFT 1133086 locked in V2LaunchLocker. Gecko launchpad_details.completed true at that timestamp. Secondary WADDLES/USDG v4 books exist on DexScreener with far less liquidity than the AMZN book. [verified R-7 R-9 R-19 R-22]

## Control and security

token owner() reverts. factory owner() is the Pons Safe 0x263ed2…19Dd. Deployer 0x81D7…CC63 has no code. Launch leftover supply and the v4 position sit in V2LaunchLocker. [verified R-5 R-15 R-19]

PonsV2LaunchFactory, V2LaunchLocker, V2GraduationExecutor, and V2MemeHook are verified on Blockscout. The WADDLES token itself is not verified (3248 B runtime, not an EIP-1167 clone). No audit report URL was located this pass. [verified R-1 R-3 R-15] [unknown]

## Team and provenance

No official domain or X handle was located with a bidirectional CA link. DexScreener info.websites and info.socials point at https://waddles.website/, x.com/waddlesamzn, and t.me/waddlesRH as a community-claim profile. Homepage HTML titles World Wide Waddles with no contract; t.me/waddlesRH titles WADDLES CTO with 102 subscribers and no contract in the public preview. github.com/sboult/waddles.website predates launchToken (created 2026-07-24) and the README has no CA. Flag unconfirmed-official and third-party-link. [claim R-7 R-13 R-14 R-23]

Pons launchpad HTML names Creator 0x81D7…CC63 and Paired AMZN. @moneymancalls posted that $WADDLES is a Pons AMZN-pair mover. That is CT, not an issuer statement. [claim R-11 R-24]

## Economics and activity

Gecko AMZN/WADDLES pool 24h volume is 776350.30 USD and reserve_in_usd is 95900.24 at 2026-09-03T04:35:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 1475465.23. Gecko token volume_usd.h24 is 799765.87 across all pools, not the AMZN book. Gecko pool fdv_usd 1985978.61 is AMZN-as-base. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 70812.33, volume.h24 590564.72, fdv/marketCap 832658. Blockscout holders_count 856. Pair created 2026-08-29T13:53:24Z. Pons launchpad HTML this pass showed Price $0.000838 Market cap $838,396.46. [claim R-1 R-7 R-11]

## Material risks

- Quote token AMZN 0x12f1…bF54 is the Robinhood Stock Token rail from GET /rhj/assets; WADDLES is not in that registry. [verified R-12 R-16]
- Pool USD reserve is WADDLES plus AMZN, not a USDG or WETH backstop. [claim R-7 R-8]
- No bidirectional official handle or domain this pass; DexScreener socials and Telegram are community-claim / third-party-link. [claim R-7 R-13]
- Token source is not verified on Blockscout; no audit report URL this pass. [unknown]
- Netlify claim URLs embedding this CA are copypasta-pattern. [claim R-17]
- DexScreener search also lists a different WADDLES 0xbc49…1e18 / AMZN book. [claim R-20]

## Verification passes

- Receipts: Blockscout token/factory/locker/AMZN, launchToken 0xf227bb99…7f91, createGraduatedPool 0x1db50ab0…6dd0, CurveCompleted 0xc9ebb465…bad2, RPC name/symbol/owner/getCode, DexScreener, Gecko pool/token, /rhj/assets, pons launchpad HTML, waddles.website, t.me/waddlesRH, and X Latest posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-12]
- Numbers: 776350.30 is the Gecko AMZN/WADDLES pool 24h volume, not the 799765.87 token all-pools figure. Reserve 95900.24 is that pool. DexScreener 590564.72 / 70812.33 is the same pair, different aggregator. Gecko pool fdv 1985978.61 is AMZN-as-base; WADDLES fdv is Gecko token 1475465.23 vs DexScreener 832658. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that WADDLES is an Amazon-issued product because AMZN is the quote and waddles.website / AWS mascot lore exist. /rhj/assets has AMZN as a Stock Token rail and no WADDLES row; launchToken is a Pons factory call from an EOA; the GitHub mascot repo predates the token and has no CA. Distinct from SENDER/AMZN. [inference R-4 R-12 R-23]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no waddles / WADDLES / 0xbB6E…0CdD. content/dependencies/stock-tokens.yaml AMZN 0x12f190a9F9d7D37a250758b26824B97CE941bF54 matches the quote rail.
- Explorer: Blockscout api/v2 with Chrome UA for token, factory, locker, AMZN, search WADDLES, holders, launchToken 0xf227bb99…7f91, createGraduatedPool 0x1db50ab0…6dd0, CurveCompleted 0xc9ebb465…bad2, TokenLaunched / Initialize / PoolGraduated / TokenSupplyLocked logs. Old API tokentx sort=asc for the zero-addr mint. One Blockscout old-API PoolManager tokentx call returned 429 and was not retried.
- RPC: eth_chainId/eth_blockNumber/eth_getCode/eth_call with Chrome UA at block 53139798.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko pool then token (first Gecko GET was HTTP 200).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one AMZN, 0 WADDLES.
- Social: X keyword Latest $WADDLES AMZN and CA 0xbB6Ee7…0CdD; from:WaddlesAMZN; user search WaddlesAMZN / WADDLES; t.me/waddlesRH preview; waddles.website HTML; github.com/sboult/waddles.website.
- Pad: www.ponsfamily.com/launchpad/0xbB6E…0CdD.
- Failed: Blockscout token creator_address_hash null (TokenLaunched used instead); token factory() and owner() revert; AWS builder URL returned SPA chrome with no CA; homepage HTML has no CA.
- Time: collection 2026-09-03T04:31Z–2026-09-03T04:40Z.
