---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: dino
name: DINO
packet_tier: seed
as_of: 2026-09-03T03:41:00Z
prior_packet: null
supersedes: null
owned_slugs: [dino]
allowed_paths:
  - research/inbox/packets/dino/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: DINO
  aliases: ["Chrome Dino"]
  symbols: [DINO]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token attributes have no website; constructor socials.website empty; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — constructor socials.twitter empty; DexScreener info.socials lists https://x.com/dinogooglerh; @Dinogooglerh posts this pass do not embed 0x000b2164…; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "DINO is PonsV2LauncherToken 0x000b…64B8 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; constructor socials were empty this pass"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "DINO is Chrome Dino at 0x000b…64B8 paired to GOOGL 0x2e08…4FE3 via PonsV2LaunchFactory 0x7eD5…EC7e"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "DINO is a Pons v2 launch, not LongLauncher; pair quote is GOOGL 0x2e08…4FE3"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a bonding-curve launchpad at @hoodfunfamily"
        - "DINO is a token cloned by PonsV2LaunchDeployer 0x3711…1A42, not a hood.fun factory"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "DINO is a PonsV2LauncherToken in a Uniswap v4 DINO/GOOGL pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x000b…64B8 is a verified PonsV2LauncherToken with non-empty code on 4663; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e; launchToken minted Chrome Dino / DINO into bonding curve 0x3cE9…B98B quoted against GOOGL 0x2e08…4FE3 (Alphabet Class A • Robinhood Token). GET api.robinhood.com/rhj/assets (194 assets) has GOOGL at that address, ASSET_STATUS_ACTIVE. PoolGraduated into Uniswap v4 pool 0x5e2c…c93d. No official site or bidirectional handle this pass. [R-1] [R-4] [R-5] [R-6] [R-8] [R-12] [R-18]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/dinogooglerh", authenticity: unconfirmed }

deployments:
  - label: DINO token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x000b2164a76560323163343431Db8bE550F164B8"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:36:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-5, R-18]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:37:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: PonsV2LaunchDeployer (token creator_address_hash)
    role: other
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:37:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-15]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0x3cE958ac39b9636539c410d060F28f44F5c0B98B"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-18]
  - label: GOOGL Alphabet Class A • Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:36:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 4860819.87, currency: USD, as_of: 2026-09-03T03:40:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x5e2cf3ad5d8e7ad0f40d469f74e1216d99ac4e80073ae3719d26ba44a6f0c93d volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 82510.86, currency: USD, as_of: 2026-09-03T03:40:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x5e2cf3ad5d8e7ad0f40d469f74e1216d99ac4e80073ae3719d26ba44a6f0c93d reserve_in_usd (DINO/GOOGL pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 1105681.51, currency: USD, as_of: 2026-09-03T03:40:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x5e2cf3ad5d8e7ad0f40d469f74e1216d99ac4e80073ae3719d26ba44a6f0c93d fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 3688, currency: null, as_of: 2026-09-03T03:36:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x000b2164a76560323163343431Db8bE550F164B8 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:36:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32a5387 (53105543) then 0x32a5848 (53106760). Token 0x000b…64B8 eth_getCode 3248 bytes (not EIP-1167). name Chrome Dino, symbol DINO, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0x619Ab513AD80814a43a68c38b82187dAb91c3E42. curve() 0x3cE958ac39b9636539c410d060F28f44F5c0B98B. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. description Chrome Dino 🦖. socials five empty strings. Deployer EOA eth_getCode 0x. GOOGL 0x2e08…4FE3 name Alphabet Class A • Robinhood Token symbol GOOGL decimals 18." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-16, R-17, R-18], result: "Blockscout api/v2 token 0x000b…64B8 name Chrome Dino symbol DINO holders_count 3688 total_supply 1e27. Address name PonsV2LauncherToken is_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35 verified_at 2026-09-02T07:32:05Z creator_address_hash PonsV2LaunchDeployer 0x3711…1A42 creation_transaction_hash 0xda62…4865. Factory 0x7eD5…EC7e name PonsV2LaunchFactory is_verified true. launchToken tx 0xda62…4865 2026-09-02T07:31:03Z block 52398091 from 0x619A…3E42 method launchToken name Chrome Dino symbol DINO pairToken GOOGL 0x2e08…4FE3 socials all empty. TokenLaunched token 0x000b…64B8 curve 0x3cE9…B98B deployer 0x619A…3E42 graduationThreshold 24.2e18. Graduation tx 0x9100…fcee 2026-09-02T07:37:36Z block 52401999 PoolGraduated poolId 0x5e2c…c93d. GOOGL 0x2e08…4FE3 BeaconProxy Stock Tokenized name Alphabet Class A • Robinhood Token." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x000b…64B8: 30 pairs; top DINO/GOOGL v4 0x5e2c…c93d quote 0x2e08…4FE3 Alphabet Class A • Robinhood Token / GOOGL liquidity.usd 86611.62 volume.h24 4890454.38 fdv 1109160 pairCreatedAt 1788334656 (2026-09-02T07:37:36Z) info.websites [] info.socials twitter https://x.com/dinogooglerh. Gecko pool: volume_usd.h24 4860819.87 reserve_in_usd 82510.86 fdv_usd 1105681.51 pool_created_at 2026-09-02T07:37:36Z dex pons-v2-dex. Gecko token volume_usd.h24 6251135.76 (all pools, not the GOOGL book); launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T07:37:36Z migrated_destination_pool_address 0x5e2c…c93d. Gecko token has no website field." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:39:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one GOOGL hit: tokenSymbol GOOGL tokenName Alphabet Class A • Robinhood Token deployments contractAddress 0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3 chainId 4663 status ASSET_STATUS_ACTIVE isin US02079K3059." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:39:00Z, receipt_ids: [R-20], result: "Blockscout api/v2/search?q=DINO returned 50 rows. Same-name Chrome Dino / DINO also at 0x1b0e42AEF0F472a8BDF54534b3adF740C28e3E74 (ERC20Token, holders_count 332, creator 0x79E6…AE9D, Uniswap v4 DINO/WETH). Other DINO tickers include 0x78e3…b945 dino / DINO (475 holders) and 0xC9db…5101 DinoRobinhood / $DINO (1644). Flag ca-collision." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchFactory launchToken clones a 1e9-supply PonsV2LauncherToken onto a GOOGL bonding curve; verified source mints the entire supply to the curve. Graduation tx 0x9100…fcee completed the curve into Uniswap v4 PoolManager 0x8366…0951 poolId 0x5e2c…c93d quoted against GOOGL, with V2MemeHook 0xE5e7…6044 and V2LaunchLocker locking remaining inventory and the LP position.", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-2, R-3, R-4, R-5, R-18], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Chrome Dino", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "DINO", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x000b2164a76560323163343431Db8bE550F164B8", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; constructor socials empty; DexScreener info.socials lists https://x.com/dinogooglerh; @Dinogooglerh posts this pass do not embed the CA; flag unconfirmed-official and handle-collision vs @Dinogoogle_ / @Dinogoogle01 / @DinoGoogle5", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote GOOGL 0x2e08…4FE3 is Alphabet Class A • Robinhood Token. GET rhj/assets (194 assets) has that address on chainId 4663, ASSET_STATUS_ACTIVE. GOOGL is a rail, not the DINO issuer. Distinct from census LONG / Artificial Inu / Pons-the-pad.", class: verified, observed_at: 2026-09-03T03:39:00Z, receipt_ids: [R-12, R-16, R-7], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DINO/GOOGL Uniswap v4 24h volume 4860819.87 USD and reserve_in_usd 82510.86 at 2026-09-03T03:40:00Z (Gecko pool slice, not Gecko token all-pools 6251135.76)", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 86611.62 volume.h24 4890454.38 fdv/marketCap 1109160 at 2026-09-03T03:35:00Z", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 3688, class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges. Deployer EOA 0x619A…3E42 has no code.", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() 0x619Ab513AD80814a43a68c38b82187dAb91c3E42 equals the launchToken caller; curve() 0x3cE9…B98B; launchFactory() 0x7eD5…EC7e", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is GOOGL 0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x5e2c…c93d (Gecko dex id pons-v2-dex; DexScreener labels v4)", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-6, R-7, R-8, R-18], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e as the pad, not LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener lists https://x.com/dinogooglerh; constructor socials empty; @Dinogooglerh posts this pass do not embed 0x000b2164…. third-party-link and copypasta-pattern: https://crypto-keo.netlify.app/claim?contract=0x000b2164… posted by @ITSYABOIRAZOR", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7, R-13, R-19, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 1105681.51; DexScreener fdv/marketCap 1109160. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3cE958ac39b9636539c410d060F28f44F5c0B98B", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-4, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token has no website field; constructor socials.website empty", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7, R-9, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "dino | DINO | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:41:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.address, value: "ca-collision: a second Chrome Dino / DINO at 0x1b0e42AEF0F472a8BDF54534b3adF740C28e3E74 (ERC20Token, 332 holders, Uniswap v4 DINO/WETH). Other DINO tickers on 4663 include 0x78e3…b945 and 0xC9db…5101. This packet is 0x000b…64B8 / DINO/GOOGL 0x5e2c…c93d.", class: verified, observed_at: 2026-09-03T03:39:00Z, receipt_ids: [R-20], reproduction_ids: [REP-5], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko DINO/GOOGL 24h volume $4.86M, liquidity $82.5K"
    summary: "Gecko pool 0x5e2c…c93d volume_usd.h24 4860819.87 reserve_in_usd 82510.86 fdv_usd 1105681.51."
    occurred_at: 2026-09-03T03:40:00Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: ct
    title: "Claim-portal post attached the DINO CA"
    summary: "@ITSYABOIRAZOR posted CA 0x000b2164… and crypto-keo.netlify.app/claim. Flag copypasta-pattern and third-party-link."
    occurred_at: 2026-09-03T03:12:22Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-3
    type: ct
    title: "@Ragnar216554201 posted the DINO/GOOGL CA"
    summary: "Post: $DINO paired $GOOGL and 0x000b2164a76560323163343431db8be550f164b8."
    occurred_at: 2026-09-03T02:49:06Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-4
    type: ct
    title: "@Dinogooglerh posted Who wants to become a Chrome Dino"
    summary: "@Dinogooglerh posted Who wants to become a Chrome Dino. No CA in that post. Flag unconfirmed-official."
    occurred_at: 2026-09-03T02:30:00Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-5
    type: onchain
    title: "Pons v2 curve completed into Uniswap v4 DINO/GOOGL"
    summary: "Tx 0x9100…fcee at 2026-09-02T07:37:36Z; PoolGraduated poolId 0x5e2c…c93d vs 24.2 GOOGL."
    occurred_at: 2026-09-02T07:37:36Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-6
    type: onchain
    title: "PonsV2LaunchFactory launchToken minted Chrome Dino / DINO"
    summary: "Tx 0xda62…4865 from 0x619A…3E42 at 2026-09-02T07:31:03Z; pairToken GOOGL; threshold 24.2 GOOGL."
    occurred_at: 2026-09-02T07:31:03Z
    observed_at: 2026-09-03T03:38:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x000b…64B8 Chrome Dino / DINO", url: "https://robinhoodchain.blockscout.com/address/0x000b2164a76560323163343431Db8bE550F164B8", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x000b2164a76560323163343431Db8bE550F164B8 name PonsV2LauncherToken is_contract true is_verified true proxy_type null. token symbol DINO name Chrome Dino decimals 18 total_supply 1000000000000000000000000000 holders_count 3688 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xda62582ffa4a3675006abf5e218b942c5eed9a42ddf689734b935bc114d14865." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x000b2164a76560323163343431Db8bE550F164B8?tab=contract", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-09-02T07:32:05.894498Z. Comment: Fixed-supply ERC-20 deployed by PonsV2LaunchFactory; entire supply mints to the bonding curve; deployer confers no privileges." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-4, publisher: Blockscout, title: "launchToken tx 0xda62582f…4865", url: "https://robinhoodchain.blockscout.com/tx/0xda62582ffa4a3675006abf5e218b942c5eed9a42ddf689734b935bc114d14865", published_at: 2026-09-02T07:31:03Z, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-6], excerpt: "timestamp 2026-09-02T07:31:03.000000Z status ok result success block_number 52398091 from 0x619Ab513AD80814a43a68c38b82187dAb91c3E42 (is_contract false) to PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e method launchToken. decoded params name Chrome Dino symbol DINO logo ipfs://bafkreienarizaaeqvaz6fba3wwa2zv5aqkxexpnrz6ggzoispwoi5fen6a description Chrome Dino 🦖 socials five empty strings pairToken 0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3 launchConfigId 0. TokenLaunched curve 0x3cE958ac39b9636539c410d060F28f44F5c0B98B graduationThreshold 24200000000000000000. Transfer mint 1e27 to the curve." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on DINO", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22, CLM-23], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32a5387 (53105543) then 0x32a5848 (53106760). Token code 3248 B. name Chrome Dino symbol DINO decimals 18 totalSupply 1e27. owner() and factory() revert. deployer() 0x619Ab513AD80814a43a68c38b82187dAb91c3E42. curve() 0x3cE958ac39b9636539c410d060F28f44F5c0B98B. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. description Chrome Dino 🦖. socials empty. Curve code 10229 B. Factory code 24177 B. Deployer EOA code 0x. GOOGL name Alphabet Class A • Robinhood Token symbol GOOGL." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "GOOGL name/symbol and factory launchFactory()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-9, CLM-14, CLM-15, CLM-21], excerpt: "GOOGL 0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3 eth_getCode 283 B. name Alphabet Class A • Robinhood Token symbol GOOGL decimals 18. Token launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens DINO", url: "https://api.dexscreener.com/latest/dex/tokens/0x000b2164a76560323163343431Db8bE550F164B8", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "30 pairs. Top pairAddress 0x5e2cf3ad5d8e7ad0f40d469f74e1216d99ac4e80073ae3719d26ba44a6f0c93d labels v4 chainId robinhood dexId uniswap base Chrome Dino / DINO quote Alphabet Class A • Robinhood Token / GOOGL 0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3 liquidity.usd 86611.62 volume.h24 4890454.38 fdv 1109160 marketCap 1109160 pairCreatedAt 1788334656. info.websites [] info.socials twitter https://x.com/dinogooglerh." }
  - { id: R-8, publisher: GeckoTerminal, title: "DINO/GOOGL pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x5e2cf3ad5d8e7ad0f40d469f74e1216d99ac4e80073ae3719d26ba44a6f0c93d", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name DINO / GOOGL pool_created_at 2026-09-02T07:37:36Z fdv_usd 1105681.513 market_cap_usd null volume_usd.h24 4860819.86885319 reserve_in_usd 82510.8637 transactions.h24 buys 16071 sells 13695. dex pons-v2-dex quote robinhood_0x2e0847e8910a9732eb3fb1bb4b70a580adad4fe3." }
  - { id: R-9, publisher: GeckoTerminal, title: "Chrome Dino token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x000b2164a76560323163343431Db8bE550F164B8", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23], excerpt: "name Chrome Dino symbol DINO decimals 18 total_supply 1e27 price_usd 0.001105667694 fdv_usd 1105667.694 market_cap_usd null volume_usd.h24 6251135.76092626 total_reserve_in_usd 103539.26. coingecko_coin_id null. No website field. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T07:37:36.000Z migrated_destination_pool_address 0x5e2cf3ad5d8e7ad0f40d469f74e1216d99ac4e80073ae3719d26ba44a6f0c93d." }
  - { id: R-10, publisher: "@Ragnar216554201", title: "$DINO paired $GOOGL", url: "https://x.com/Ragnar216554201/status/2095343298126688326", published_at: 2026-09-03T02:49:06Z, accessed_at: 2026-09-03T03:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "$DINO paired $GOOGL 0x000b2164a76560323163343431db8be550f164b8" }
  - { id: R-11, publisher: DexScreener, title: "DINO/GOOGL pair page", url: "https://dexscreener.com/robinhood/0x5e2cf3ad5d8e7ad0f40d469f74e1216d99ac4e80073ae3719d26ba44a6f0c93d", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11], excerpt: "pairAddress 0x5e2cf3ad5d8e7ad0f40d469f74e1216d99ac4e80073ae3719d26ba44a6f0c93d labels v4 DINO/GOOGL." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One GOOGL hit: tokenSymbol GOOGL tokenName Alphabet Class A • Robinhood Token deployments contractAddress 0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE isin US02079K3059." }
  - { id: R-13, publisher: "@Dinogooglerh", title: "Who wants to become a Chrome Dino", url: "https://x.com/Dinogooglerh/status/2095338491869888758", published_at: 2026-09-03T02:30:00Z, accessed_at: 2026-09-03T03:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-4], excerpt: "Who wants to become a Chrome Dino? No contract address in the post text this pass. Account name Dino handle @Dinogooglerh." }
  - { id: R-14, publisher: GeckoTerminal, title: "DINO/GOOGL pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x5e2cf3ad5d8e7ad0f40d469f74e1216d99ac4e80073ae3719d26ba44a6f0c93d", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "DINO/GOOGL Chrome Dino pool 0x5e2c…c93d." }
  - { id: R-15, publisher: Blockscout, title: "PonsV2LaunchDeployer 0x3711…1A42", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x2e08…4FE3 Alphabet Class A • Robinhood Token / GOOGL", url: "https://robinhoodchain.blockscout.com/address/0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x2e0847E8910a9732eB3fb1bb4b70a580ADAD4FE3 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Alphabet Class A • Robinhood Token symbol GOOGL decimals 18 holders_count 48407." }
  - { id: R-17, publisher: Blockscout, title: "PonsV2BondingCurve 0x3cE9…B98B", url: "https://robinhoodchain.blockscout.com/address/0x3cE958ac39b9636539c410d060F28f44F5c0B98B", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3cE958ac39b9636539c410d060F28f44F5c0B98B name PonsV2BondingCurve is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xda62582ffa4a3675006abf5e218b942c5eed9a42ddf689734b935bc114d14865." }
  - { id: R-18, publisher: Blockscout, title: "Graduation tx 0x9100e338…fcee", url: "https://robinhoodchain.blockscout.com/tx/0x9100e338ca82ff96a83483c5c5c5a8716b3e20ac668dfcb61094da65553ffcee", published_at: 2026-09-02T07:37:36Z, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-5], excerpt: "timestamp 2026-09-02T07:37:36.000000Z status ok block_number 52401999 from 0x9e8CebbF4e7324D8C1CDb0E805e7579DEaD5Ef3f. CurveCompleted quoteOut 24200000000000000156 tokenOut 285714285714285714285714285. PoolManager Initialize id 0x5e2cf3ad5d8e7ad0f40d469f74e1216d99ac4e80073ae3719d26ba44a6f0c93d currency0 DINO currency1 GOOGL hooks V2MemeHook 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044. GraduationTokensPermanentlyLocked amount 81632653061224489420041925. PoolGraduated positionId 1487876 tokenAmount 204081632653061224865672360 pairTokenAmount 24200000000000000156." }
  - { id: R-19, publisher: X user search, title: "Dinogooglerh handle collision set", url: "https://x.com/Dinogooglerh", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19], excerpt: "X user search dinogooglerh returned @Dinogoogle_ (technoarg), @Dinogoogle01, @DinoGoogle5, @Dinogooglerh (Dino, 467 followers, blue verified), @dinogoogle23403. DexScreener lists https://x.com/dinogooglerh. Flag handle-collision and unconfirmed-official." }
  - { id: R-20, publisher: Blockscout, title: "search?q=DINO same-ticker collisions", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=DINO", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "50 rows. Chrome Dino / DINO 0x000b2164a76560323163343431Db8bE550F164B8 and Chrome Dino / DINO 0x1b0e42AEF0F472a8BDF54534b3adF740C28e3E74 (ERC20Token holders_count 332 creator 0x79E67f4cc8c70639031FcD3d1F6A7f5A809EAE9D). Also dino / DINO 0x78e372EBf48Fe682AAC51C20C34a7B5F91C2b945 holders 475; DinoRobinhood / $DINO 0xC9db54CF189DbA5344419FB72090fd3AD9fb5101 holders 1644. DexScreener 0x1b0e…3E74 DINO/WETH v4 liquidity.usd 112183.99." }
  - { id: R-21, publisher: "@ITSYABOIRAZOR", title: "Still holding $DINO claim link", url: "https://x.com/ITSYABOIRAZOR/status/2095349153685471583", published_at: 2026-09-03T03:12:22Z, accessed_at: 2026-09-03T03:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-2], excerpt: "Still holding $DINO? CA: 0x000b2164a76560323163343431Db8bE550F164B8 https://crypto-keo.netlify.app/claim?contract=0x000b2164a76560323163343431Db8bE550F164B8&cfg=evmdrop&pid=mBiPJ. Flag copypasta-pattern and third-party-link." }

gaps:
  - { priority: P0, question: "Does @Dinogooglerh later pin 0x000b…64B8 or a site that cross-links, making the DexScreener social bidirectional?", checked: "constructor socials empty; DexScreener info.socials twitter https://x.com/dinogooglerh; sampled @Dinogooglerh posts this pass have no CA, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA" }
  - { priority: P0, question: "Does the second Chrome Dino at 0x1b0e…3E74 share a deployer, site, or handle with 0x000b…64B8?", checked: "0x1b0e…3E74 is ERC20Token creator 0x79E6…AE9D, Uniswap v4 DINO/WETH; 0x000b…64B8 is PonsV2LauncherToken creator 0x3711…1A42, 2026-09-03", next: "open 0x1b0e…3E74 creation tx and DexScreener info.socials" }
  - { priority: P1, question: "What is unverified helper 0x4266b4a7…EDcb that called the graduation tx?", checked: "Graduation tx to 0x4266…EDcb from EOA 0x9e8C…f3f; Blockscout name null is_verified false creator 0x9e8C…f3f, 2026-09-03", next: "eth_getCode and read V2GraduationExecutor path from factory source" }
  - { priority: P2, question: "Is there an official Telegram, site, or GitHub after a later DexScreener profile claim?", checked: "DexScreener info.websites []; constructor socials empty; Gecko has no website, 2026-09-03", next: "re-fetch DexScreener token profile and Gecko token attributes" }
---

# DINO — research packet

## What it is

A one-billion-supply ERC-20 launched through Pons v2 against GOOGL. PonsV2LaunchFactory deploys Chrome Dino (DINO) onto a bonding curve quoted in Alphabet Class A • Robinhood Token, then seeds a Uniswap v4 DINO/GOOGL pool. Traders buy and sell DINO on that book. No official site or bidirectional handle was located this pass.

Themes: memecoin, stock-paired:GOOGL, rwa, launchpad

## Why it matters

The DINO/GOOGL Uniswap v4 book printed about $4.86M of 24h volume on Gecko at collection, with the quote token the Alphabet Class A Robinhood Token. GET /rhj/assets lists GOOGL at 0x2e08…4FE3 as ASSET_STATUS_ACTIVE, so the pair leg is a rail rather than a third-party TokenizedStock. A second Chrome Dino / DINO at 0x1b0e…3E74 trades DINO/WETH.

## What could go wrong

USD liquidity figures on the DINO/GOOGL book count both sides, and the quote side is GOOGL, not USDG. Same-name Chrome Dino / DINO at 0x1b0e…3E74 is a ca-collision. DexScreener lists @dinogooglerh with no bidirectional CA link this pass; flag unconfirmed-official. A netlify claim URL attached the CA; flag copypasta-pattern and third-party-link.

## Product and mechanics

PonsV2LaunchFactory 0x7eD5…EC7e launchToken from 0x619A…3E42 at 2026-09-02T07:31:03Z minted Chrome Dino / DINO supply 1e9*1e18 into bonding curve 0x3cE9…B98B quoted against GOOGL. creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42. launchFactory() on the token returns that factory. graduationThreshold 24.2 GOOGL. Constructor socials were empty. [verified R-4 R-5 R-18]

Graduation tx 0x9100…fcee at 2026-09-02T07:37:36Z completed the curve: 24.2 GOOGL plus ~2.857e8 DINO to the factory, ~8.163e7 DINO permanently locked, Uniswap v4 poolId 0x5e2c…c93d initialized on PoolManager 0x8366…0951 with V2MemeHook 0xE5e7…6044, LP position 1487876 locked. Gecko launchpad_details completed true at that timestamp. Secondary DINO/USDG and DINO/ETH books exist on DexScreener with less liquidity than the GOOGL book. [verified R-7 R-8 R-18]

## Control and security

token owner() reverts. Verified PonsV2LauncherToken source says deployer is immutable reference data and confers no privileges. Deployer EOA 0x619A…3E42 has no code. [verified R-2 R-5]

PonsV2LauncherToken, PonsV2LaunchFactory, PonsV2LaunchDeployer, and PonsV2BondingCurve are verified on Blockscout (compiler v0.8.35 for the token). Graduation helper 0x4266…EDcb is unverified this pass. No audit report URL was located. [verified R-1 R-3 R-15 R-17] [unknown]

## Team and provenance

No official domain or bidirectional X handle was located. DexScreener info.websites is empty; info.socials lists https://x.com/dinogooglerh. Constructor socials.twitter was empty. @Dinogooglerh posts sampled this pass do not embed 0x000b2164…. X user search also returned @Dinogoogle_, @Dinogoogle01, and @DinoGoogle5. Flag unconfirmed-official and handle-collision. [claim R-7 R-13 R-19]

@ITSYABOIRAZOR posted the CA with crypto-keo.netlify.app/claim. Flag copypasta-pattern and third-party-link. [claim R-21]

## Economics and activity

DINO/GOOGL Uniswap v4 24h volume is 4860819.87 USD and reserve_in_usd is 82510.86 at 2026-09-03T03:40:00Z from the Gecko pool endpoint. fdv_usd is 1105681.51. Gecko token volume_usd.h24 is 6251135.76 across all pools, not the GOOGL book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 86611.62, volume.h24 4890454.38, fdv/marketCap 1109160 at 2026-09-03T03:35:00Z. Blockscout holders_count 3688. Pair created 2026-09-02T07:37:36Z. [claim R-1 R-7]

Assignment lead of liq ~$87,290 / vol ~$4,884,153 is the same DINO/GOOGL book; live Gecko reserve is $82.5K and DexScreener liquidity is $86.6K this as_of. [claim R-7 R-8]

## Material risks

- Same-name Chrome Dino / DINO at 0x1b0e…3E74 (DINO/WETH) is a ca-collision. [verified R-20]
- Pool USD reserve is DINO plus GOOGL, not a USDG or WETH backstop. [claim R-7 R-8]
- No official handle or domain this pass; DexScreener twitter is unconfirmed-official. [claim R-7 R-13]
- Claim-portal URL is a third-party-link / copypasta-pattern. [claim R-21]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/source/factory/deployer/curve/GOOGL and both launch and graduation txs, RPC name/symbol/launchFactory/curve/deployer/socials, DexScreener, Gecko pool/token, /rhj/assets, @Ragnar216554201, @Dinogooglerh, the claim-portal post, and the DINO search were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 4860819.87 is the Gecko DINO/GOOGL pool 24h volume, not the 6251135.76 token all-pools figure. Reserve 82510.86 is that pool. DexScreener 4890454.38 / 86611.62 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that @Dinogooglerh is official and that 0x1b0e…3E74 is the same Chrome Dino. Constructor socials are empty, sampled posts omit the CA, and 0x1b0e…3E74 is a different creator and DINO/WETH book. [inference R-13 R-19 R-20]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no dino / DINO / Chrome Dino / 0x000b…64B8. content/dependencies/stock-tokens.yaml lists GOOGL at 0x2e08…4FE3.
- Explorer: Blockscout api/v2 token, source, factory, deployer, curve, GOOGL, launchToken 0xda62…4865, graduation 0x9100…fcee, search?q=DINO. RPC eth_getCode/eth_call with Mozilla/Chrome UA at blocks 53105543–53106760.
- Aggregators: DexScreener latest/dex/tokens, latest/dex/search, latest/dex/pairs; Gecko token and pool (Mozilla UA; first token/pool GET returned 429, retry HTTP 200).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 GOOGL at 0x2e08…4FE3.
- Social: X keyword DINO/GOOGL and 0x000b2164…; from:Dinogooglerh; user search dinogooglerh / @Dinogooglerh.
- Failed: token factory() reverts (launchFactory() used instead); Gecko first request 429; Blockscout token counters transactions_count 0 on the token address (transfers live on the curve); @Dinogooglerh user-search ranking mixed with unrelated Dinogoogle_* handles.
- Time: collection 2026-09-03T03:35Z–2026-09-03T03:41Z.
