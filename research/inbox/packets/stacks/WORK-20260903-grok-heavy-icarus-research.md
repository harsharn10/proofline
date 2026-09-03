---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: stacks
name: STACKS
packet_tier: seed
as_of: 2026-09-03T03:53:00Z
prior_packet: null
supersedes: null
owned_slugs: [stacks]
allowed_paths:
  - research/inbox/packets/stacks/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: STACKS
  aliases: ["Stacks"]
  symbols: [STACKS]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.stacksapp.us
  official_handle: "NULL — DexScreener lists x.com/StacksAppRH; that bio embeds 0xD998…D94C; stacksapp.us JS bundle embeds the same CA and factory 0x13ae…0a36 but no StacksAppRH string this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or the stacksapp.us JS bundle this pass"
  possible_matches:
    - slug: pair
      signals: [other]
      contrary_signals:
        - "Packed PAIR is token 0x6b1d…66be and PAIR/SPY Uniswap v4 0xf224…c001 via PairLaunchpadV5 proxy 0x8660…Ae62 at pair.fun / @pairdotfun"
        - "STACKS is token 0xD998…D94C and STACKS/SPY Uniswap v4 0x77d0…5e32 via factory 0x13ae…0a36 at stacksapp.us"
        - "Both quote the SPY rail 0x117c…4C0C; no shared domain, handle, factory, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "STACKS factory is 0x13ae…0a36; token factory() reverts; site is stacksapp.us"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "STACKS launches into Uniswap v4 PoolManager 0x8366…0951 with no Pons factory in the create path"
        - "No shared domain, handle, or reproduced address"
    - slug: stonks-fun
      signals: [other]
      contrary_signals:
        - "Census stonks-fun is a separate launchpad row"
        - "STACKS is factory 0x13ae…0a36 / token 0xD998…D94C at stacksapp.us"
        - "No shared domain, handle, or reproduced address"
    - slug: stratton
      signals: [other]
      contrary_signals:
        - "STRATTON/SPY Uniswap v4 0xa2c4…9274 base Stratton Market 0xb7ea…8360; DexScreener info.websites and info.socials empty this pass"
        - "STACKS/SPY Uniswap v4 0x77d0…5e32 base Stacks 0xD998…D94C"
        - "Same SPY rail 0x117c…4C0C; no shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/stock-paired-factory
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [launchpad, stock-paired, rwa, amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xD998…D94C has 5056 B of code on 4663; name Stacks symbol STACKS decimals 18. Unverified factory 0x13ae…0a36 selector 0xca4fec1c minted 10e6 to the factory and 2e6 to burnReserve 0x73f9…c650, then pushed ~10e6 into Uniswap v4 PoolManager 0x8366…0951 vs SPY 0x117c…4C0C. Distinct from packed PAIR/SPY and from STRATTON/SPY. Site JS embeds the CA. No official handle confirmed this pass. [R-1] [R-5] [R-6] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.stacksapp.us", authenticity: confirmed }
  - { kind: docs, url: "https://www.stacksapp.us/#how", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/StacksAppRH", authenticity: unconfirmed }

deployments:
  - label: STACKS token
    role: token
    address:
      value: "0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:45:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-5, R-7]
  - label: STACKS launch factory (site JS M2)
    role: factory
    address:
      value: "0x13ae003F22E4A3A8009dCE9a53a500a40E3E0a36"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-4, R-6, R-21]
  - label: burnReserve / staking (token.burnReserve and site JS ITe)
    role: vault
    address:
      value: "0x73f9eb020BF091C8F6b42Eb8c6362D779478c650"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-6, R-21]
  - label: SPY Stock Token (pair quote / rhj rail)
    role: token
    address:
      value: "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-12, R-16]

metrics:
  - { kind: volume_24h, value: 1917405.94, currency: USD, as_of: 2026-09-03T03:53:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x77d0c2cf35c0ce31f142d200149c8b58db32e840a40d2a1948795b2a6bb05e32 volume_usd.h24 (SPY/STACKS 3% Uniswap v4, not Gecko token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 206080.85, currency: USD, as_of: 2026-09-03T03:53:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x77d0c2cf35c0ce31f142d200149c8b58db32e840a40d2a1948795b2a6bb05e32 reserve_in_usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 1011951, currency: USD, as_of: 2026-09-03T03:50:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C top STACKS/SPY fdv/marketCap (Gecko token fdv_usd 909432.43 at 03:47Z; Gecko pool fdv_usd is SPY-as-base and is not this figure)", class: claim, receipt_ids: [R-7, R-9] }
  - { kind: holders, value: 799, currency: null, as_of: 2026-09-03T03:53:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:45:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32a6840 (53110848) then 0x32a790a (53115146). Token 0xD998…D94C eth_getCode 5056 B prefix 608060405234801561000f57 (not EIP-1167). name Stacks, symbol STACKS, decimals 18, totalSupply 27706620904244123003061573. factory() and owner() revert. isUncapped() true. burnReserve() 0x73f9eb020BF091C8F6b42Eb8c6362D779478c650. Deployer 0xD386…7D3 eth_getCode 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:53:00Z, receipt_ids: [R-1, R-3, R-4, R-15, R-16, R-18], result: "Blockscout api/v2 token 0xD998…D94C name Stacks symbol STACKS holders_count 799 then 799 total_supply 27706620904244123003061552 is_verified false creator_address_hash null. Factory 0x13ae…0a36 is_verified false creator 0xD386…7D3 tx 0x50942ac6…2fb4 2026-09-02T13:15:36Z block 52603172. Launch tx 0xcf2c0234…ac462 2026-09-02T19:38:40Z block 52827070 from 0xD386…7D3 to factory selector 0xca4fec1c name Stacks symbol STACKS stock 0x117c…4C0C; mints 10e6 to factory and 2e6 to 0x73f9…c650 then 9999996546509943603012276 to PoolManager 0x8366…0951. SPY 0x117c…4C0C name SPDR S&P 500 ETF Trust • Robinhood Token BeaconProxy is_verified true." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0xD998…D94C: 17 robinhood uniswap pairs; top STACKS/SPY v4 0x77d0…5e32 quote 0x117c…4C0C SPDR S&P 500 ETF Trust • Robinhood Token / SPY liquidity.usd 131986.04 volume.h24 1999790.43 fdv/marketCap 1011951 pairCreatedAt 1788377920000 (2026-09-02T19:38:40Z) info.websites https://www.stacksapp.us/# and #how info.socials https://x.com/StacksAppRH?s=20. Gecko pool name SPY / STACKS 3% dex uniswap-v4-robinhood base SPY quote STACKS volume_usd.h24 1917405.94 reserve_in_usd 206080.85 pool_created_at 2026-09-02T19:38:40Z; pool fdv_usd 13551892 is SPY-as-base not STACKS. Gecko token fdv_usd 909432.43 volume_usd.h24 1939691.25 market_cap_usd null." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol SPY row tokenName SPDR S&P 500 ETF Trust • Robinhood Token deployments contractAddress 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C chainId 4663 status ASSET_STATUS_ACTIVE. No STACKS ticker in the 194." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:49:00Z, receipt_ids: [R-6, R-21], result: "Factory 0x13ae…0a36 code 23978 B. launchOpen() true. owner() reverts. 0x940390c2 is launch(string,string,address,uint256) (4byte). 0xca4fec1c not in 4byte this pass; calldata words decode name Stacks, symbol STACKS, stock 0x117c…4C0C. Staking/burnReserve 0x73f9…c650 code 1407 B created tx 0x29ac35f2…2405 2026-09-02T13:15:35Z. PAIR token 0x6b1d…66be code 3245 B; STRATTON 0xb7ea…8360 code 3248 B; other STACKS 0xe7fC…1E18 code 44 B EIP-1167. PAIR factory 0x8660…Ae62 code 145 B (proxy), not 0x13ae." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Unverified factory 0x13ae…0a36 launches autocompounding tokens into Uniswap v4 vs a stock token. Site JS: every launch mints 12e6 (10e6 locked pool, 2e6 burn reserve) and compounds 12M → 1.2B on one log curve. Tx 0xcf2c…ac462 from 0xD386…7D3 called 0xca4fec1c name Stacks symbol STACKS stock SPY and minted 10e6 then ~10e6 into PoolManager 0x8366…0951 plus 2e6 to burnReserve 0x73f9…c650.", class: verified, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-4, R-5, R-6, R-18, R-21], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Stacks", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "STACKS", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-5, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x13ae003F22E4A3A8009dCE9a53a500a40E3E0a36", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-3, R-4, R-6], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/stock-paired-factory, class: claim, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-7, R-8, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — DexScreener info.socials x.com/StacksAppRH; bio embeds 0xD998…D94C; site JS has the CA but no StacksAppRH string; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-7, R-13, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote SPY 0x117c…4C0C is the Robinhood Token rail in GET /rhj/assets (194 assets). Distinct from packed PAIR token 0x6b1d…66be / PAIR/SPY 0xf224…c001 and from STRATTON 0xb7ea…8360 / STRATTON/SPY 0xa2c4…9274. A second STACKS ticker 0xe7fC…1E18 named Stacks App is paired to AI, not this CA.", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-7, R-12, R-16, R-17], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "STACKS/SPY Uniswap v4 24h volume 1917405.94 USD and reserve_in_usd 206080.85 at 2026-09-03T03:53:00Z (Gecko pool slice). Gecko names the pool SPY / STACKS 3% with SPY as base; pool fdv_usd 13551892 is not the STACKS fdv.", class: verified, observed_at: 2026-09-03T03:53:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 131986.04 volume.h24 1999790.43 fdv/marketCap 1011951 at 2026-09-03T03:50:00Z", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 799, class: verified, observed_at: 2026-09-03T03:53:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; factory owner() reverts; deployer 0xD386…7D3 has no code. Factory source is unverified.", class: verified, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "Deployer EOA 0xD386a4B9e541D33e5cDEf1b503b309f9A655a7D3 created factory, staking, and related contracts; later called setStaking, setAdminWallet, setStakingShareBps on 0x6Dda…D168. Token isUncapped() true.", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-6, R-15], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SPY 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x77d0…5e32", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-4, R-7, R-8, R-12], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; factory 0x13ae…0a36 is the pad in the site JS and the 0xca4fec1c caller, not Pons, LONG, PAIR 0x8660…Ae62, or hood.fun", class: verified, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-1, R-3, R-4, R-5, R-21], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, stacksapp.us, or X search this pass", class: unknown, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: @StacksAppRH bio embeds 0xD998…D94C; DexScreener lists that handle; site JS does not contain StacksAppRH this pass", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-7, R-13, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 909432.43 at 2026-09-03T03:47:00Z; DexScreener fdv/marketCap 1011951 at 03:50Z. Gecko market_cap_usd null. Gecko pool fdv_usd tracks SPY as base.", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x117cc2133c37B721F49dE2A7a74833232B3B4C0C", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x73f9eb020BF091C8F6b42Eb8c6362D779478c650", class: verified, observed_at: 2026-09-03T03:49:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://www.stacksapp.us — title STACKS — Autocompounding Token Launchpad; JS bundle hardcodes token 0xD998…D94C and factory 0x13ae…0a36", class: claim, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-14, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "stacks | STACKS | NULL | https://www.stacksapp.us — discovery token/pad not in census 49", class: claim, observed_at: 2026-09-03T03:53:00Z, receipt_ids: [R-1, R-7, R-14], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "@StacksAppRH posted full whitepaper coming tomorrow"
    summary: "Post: Listen to the man. Full whitepaper coming tomorrow. Bio embeds 0xD998…D94C."
    occurred_at: 2026-09-03T01:25:19Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [communications.status, identity.handle]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-2
    type: company
    title: "@StacksAppRH posted over 5 million STACKS burned"
    summary: "Post: already over 5 million $STACKS burned; fees adding to the burn by the second."
    occurred_at: 2026-09-03T00:16:12Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-3
    type: company
    title: "@StacksAppRH posted staking works and is live"
    summary: "Reply: Staking works and is live, refresh your page."
    occurred_at: 2026-09-02T23:17:20Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: ct
    title: "@leakmealpha posted STACKS live bound to SPY"
    summary: "Post: @stacksapprh live on Robinhood Crypto; $STACKS bound to SPY; auto-compounding memes."
    occurred_at: 2026-09-02T23:12:03Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-5
    type: onchain
    title: "Factory 0xca4fec1c minted STACKS into STACKS/SPY v4"
    summary: "Tx 0xcf2c…ac462 2026-09-02T19:38:40Z; 10e6+2e6 mint; pool 0x77d0…5e32 vs SPY."
    occurred_at: 2026-09-02T19:38:40Z
    observed_at: 2026-09-03T03:48:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-6
    type: onchain
    title: "EOA deployed STACKS factory 0x13ae…0a36"
    summary: "Tx 0x50942ac6…2fb4 block 52603172 2026-09-02T13:15:36Z from 0xD386…7D3."
    occurred_at: 2026-09-02T13:15:36Z
    observed_at: 2026-09-03T03:48:00Z
    affected_fields: [deployment.address, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-7
    type: onchain
    title: "Gecko STACKS/SPY 24h volume $1.92M, reserve $206k"
    summary: "Gecko pool 0x77d0…5e32 volume_usd.h24 1917406 reserve_in_usd 206081; DexScreener liq 131986."
    occurred_at: 2026-09-03T03:53:00Z
    observed_at: 2026-09-03T03:53:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xD998…D94C Stacks / STACKS", url: "https://robinhoodchain.blockscout.com/address/0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C", published_at: null, accessed_at: 2026-09-03T03:53:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C name Stacks is_contract true is_verified false creator_address_hash null proxy_type null. token symbol STACKS decimals 18 total_supply 27706620904244123003061552 holders_count 799 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x73f9…c650 staking/burnReserve", url: "https://robinhoodchain.blockscout.com/address/0x73f9eb020BF091C8F6b42Eb8c6362D779478c650", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x73f9eb020BF091C8F6b42Eb8c6362D779478c650 is_contract true is_verified false creator_address_hash 0xD386a4B9e541D33e5cDEf1b503b309f9A655a7D3 creation_transaction_hash 0x29ac35f29ff5ca15df5ee7c2114f313f1979724f272523353d80a3a51f682405 timestamp 2026-09-02T13:15:35Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x13ae…0a36 STACKS factory", url: "https://robinhoodchain.blockscout.com/address/0x13ae003F22E4A3A8009dCE9a53a500a40E3E0a36", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-13, CLM-16], excerpt: "hash 0x13ae003F22E4A3A8009dCE9a53a500a40E3E0a36 is_contract true is_verified false creator_address_hash 0xD386a4B9e541D33e5cDEf1b503b309f9A655a7D3 creation_transaction_hash 0x50942ac641c23c49e7f9515ab582754e71ce43a2c7b51cfaaf06cae933c02fb4." }
  - { id: R-4, publisher: Blockscout, title: "factory 0xca4fec1c tx 0xcf2c0234…ac462", url: "https://robinhoodchain.blockscout.com/tx/0xcf2c0234f4dfc3d55d52a65f220e9ad734630fa7841969fc1756e70378fac462", published_at: 2026-09-02T19:38:40Z, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-15, CLM-22, EVT-5], excerpt: "timestamp 2026-09-02T19:38:40.000000Z status ok block_number 52827070 from 0xD386a4B9e541D33e5cDEf1b503b309f9A655a7D3 (is_contract false) to 0x13ae003F…0a36 method 0xca4fec1c. Transfers: mint 10e6 STACKS to factory, mint 2e6 to 0x73f9…c650, then 9999996546509943603012276 to PoolManager 0x8366…0951." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, isUncapped, burnReserve on STACKS", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a6840 (53110848). Token code 5056 B not EIP-1167. name Stacks symbol STACKS decimals 18 totalSupply 27706620904244123003061573. factory() owner() revert. isUncapped() 1. burnReserve() 0x73f9eb020BF091C8F6b42Eb8c6362D779478c650. Deployer 0xD386…7D3 code 0x." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory launchOpen(), code sizes vs PAIR/STRATTON", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:49:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-21, CLM-22], excerpt: "Factory 0x13ae…0a36 code 23978 B launchOpen() true owner() reverts. Staking 0x73f9…c650 1407 B. PAIR token 0x6b1d…66be 3245 B PAIR proxy 0x8660…Ae62 145 B. STRATTON 0xb7ea…8360 3248 B. Other STACKS 0xe7fC…1E18 44 B. SPY 0x117c…4C0C 283 B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens STACKS", url: "https://api.dexscreener.com/latest/dex/tokens/0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-24, EVT-7], excerpt: "17 robinhood uniswap pairs. Top pairAddress 0x77d0c2cf35c0ce31f142d200149c8b58db32e840a40d2a1948795b2a6bb05e32 labels v4 base Stacks / STACKS quote SPDR S&P 500 ETF Trust • Robinhood Token / SPY 0x117cc213…4C0C liquidity.usd 131986.04 volume.h24 1999790.43 fdv 1011951 marketCap 1011951 pairCreatedAt 1788377920000. info.websites stacksapp.us/# and #how info.socials x.com/StacksAppRH." }
  - { id: R-8, publisher: GeckoTerminal, title: "SPY/STACKS Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x77d0c2cf35c0ce31f142d200149c8b58db32e840a40d2a1948795b2a6bb05e32", published_at: null, accessed_at: 2026-09-03T03:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-7], excerpt: "name SPY / STACKS 3% pool_created_at 2026-09-02T19:38:40Z fdv_usd 13551892.18 market_cap_usd 13452106.98 volume_usd.h24 1917405.93990844 reserve_in_usd 206080.848. dex uniswap-v4-robinhood base robinhood_0x117cc213…4c0c quote robinhood_0xd998ceac…d94c." }
  - { id: R-9, publisher: GeckoTerminal, title: "Stacks token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xd998ceac55fef3319b8bcdc4349c7a9cebb1d94c", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20], excerpt: "name Stacks symbol STACKS decimals 18 total_supply 27706620904244123003061582.0 price_usd 0.03282364997 fdv_usd 909432.426378528 market_cap_usd null volume_usd.h24 1939691.25322626." }
  - { id: R-10, publisher: "@leakmealpha", title: "NEW PROJECT @stacksapprh live", url: "https://x.com/leakmealpha/status/2095288676628517079", published_at: 2026-09-02T23:12:03Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "NEW PROJECT: @stacksapprh just went live on Robinhood Crypto. Launch an auto-compounding meme, bind it to 100+ stocks, and holders stack more tokens every 15 min. $STACKS itself is bound to SPY." }
  - { id: R-11, publisher: DexScreener, title: "STRATTON/SPY pair (collide-check)", url: "https://api.dexscreener.com/latest/dex/pairs/robinhood/0xa2c4e1cae8e4fe7cbd06dc26b09e20dbc6b7d719d877e62a95aa8f4c47229274", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "chainId robinhood pairAddress 0xa2c4e1cae8e4fe7cbd06dc26b09e20dbc6b7d719d877e62a95aa8f4c47229274 base Stratton Market / STRATTON 0xb7eaeCc89d3e2f9Fd597D61726aE824900dB8360 quote SPY 0x117cc213…4C0C liquidity.usd 165037.71 volume.h24 9576864.85. info.websites [] info.socials []." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. SPY row tokenSymbol SPY tokenName SPDR S&P 500 ETF Trust • Robinhood Token deployments contractAddress 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C chainId 4663 status ASSET_STATUS_ACTIVE. No STACKS ticker." }
  - { id: R-13, publisher: "@StacksAppRH", title: "Full whitepaper coming tomorrow", url: "https://x.com/StacksAppRH/status/2095322211758322011", published_at: 2026-09-03T01:25:19Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-1], excerpt: "Listen to the man. Full whitepaper coming tomorrow. Account name Stacks App handle @StacksAppRH bio Stop trading memes, start stacking. Launch auto-compounding memecoins and earn from over 100+ different stocks. 0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C." }
  - { id: R-14, publisher: stacksapp.us, title: "STACKS — Autocompounding Token Launchpad", url: "https://www.stacksapp.us/", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-23, CLM-24], excerpt: "HTTP 200 Vercel. title STACKS — Autocompounding Token Launchpad. SSR HTML has no CA; script /assets/index-BDMd6v42.js." }
  - { id: R-15, publisher: Blockscout, title: "Factory creation tx 0x50942ac6…2fb4", url: "https://robinhoodchain.blockscout.com/tx/0x50942ac641c23c49e7f9515ab582754e71ce43a2c7b51cfaaf06cae933c02fb4", published_at: 2026-09-02T13:15:36Z, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-14, EVT-6], excerpt: "timestamp 2026-09-02T13:15:36.000000Z status ok from 0xD386a4B9e541D33e5cDEf1b503b309f9A655a7D3 (is_contract false) block_number 52603172 created_contract 0x13ae003F22E4A3A8009dCE9a53a500a40E3E0a36 is_verified false." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x117c…4C0C SPY", url: "https://robinhoodchain.blockscout.com/token/0x117cc2133c37B721F49dE2A7a74833232B3B4C0C", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "api/v2/tokens: name SPDR S&P 500 ETF Trust • Robinhood Token symbol SPY decimals 18 holders_count 51023 type ERC-20. Address page name BeaconProxy is_verified true proxy_type eip1967_beacon implementation Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2 creator 0x4783C67b63dE2B358Ac5951a7D41F47A38F3C046." }
  - { id: R-17, publisher: DexScreener, title: "PAIR token pairs (collide-check)", url: "https://api.dexscreener.com/latest/dex/tokens/0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "Top PAIR/SPY pairAddress 0xf224a070c8626c890a085b258cf562ee4bf052b6d1d59104b3b44d722640c001 base PAIR 0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be quote SPY 0x117cc213…4C0C. Not 0x77d0…5e32 and not 0xD998…D94C." }
  - { id: R-18, publisher: Blockscout, title: "STACKS mints in 0xcf2c0234…ac462", url: "https://robinhoodchain.blockscout.com/tx/0xcf2c0234f4dfc3d55d52a65f220e9ad734630fa7841969fc1756e70378fac462", published_at: 2026-09-02T19:38:40Z, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-5], excerpt: "Calldata 0xca4fec1c name Stacks symbol STACKS stock 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C. Token transfers STACKS from 0x0 to factory 10000000000000000000000000 and to 0x73f9…c650 2000000000000000000000000." }
  - { id: R-19, publisher: "@StacksAppRH", title: "over 5 million $STACKS burned", url: "https://x.com/StacksAppRH/status/2095304817736335683", published_at: 2026-09-03T00:16:12Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "We are already over 5 million $STACKS burned. May seem small but the fact is that it’s compounding, biggest holder by far and fees are adding real money to the burn, by the second. Protocol Ownership." }
  - { id: R-20, publisher: "@StacksAppRH", title: "Staking works and is live", url: "https://x.com/StacksAppRH/status/2095290007103717783", published_at: 2026-09-02T23:17:20Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Staking works and is live, refresh your page." }
  - { id: R-21, publisher: stacksapp.us, title: "JS bundle token, factory, staking constants", url: "https://www.stacksapp.us/assets/index-BDMd6v42.js", published_at: null, accessed_at: 2026-09-03T03:47:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-8, CLM-16, CLM-19, CLM-23], excerpt: "f1=0xD998cEac55FEF3319B8bcDc4349C7A9CeBB1D94C M2=0x13ae003F22E4A3A8009dCE9a53a500a40E3E0a36 ITe=0x73f9eb020BF091C8F6b42Eb8c6362D779478c650 dG=12e6. Copy: Every launch mints twelve million — 10M to the locked pool, 2M straight to the burn reserve — and compounds along one fixed log curve to 1.2 billion in three months. WalletConnect name autocompounding memecoin, paired to 100+ real stocks. No StacksAppRH string." }

gaps:
  - { priority: P0, question: "Is @StacksAppRH bidirectional with stacksapp.us (site string or handle URL)?", checked: "DexScreener lists the handle; bio embeds 0xD998…D94C; JS bundle has CA/factory but no StacksAppRH, 2026-09-03", next: "re-read the JS after a deploy; check a new bio URL" }
  - { priority: P0, question: "What is the exact ABI of factory selector 0xca4fec1c, and was 0xD998…D94C CREATE2'd in that tx?", checked: "Blockscout creator_address_hash null; 4byte has no 0xca4fec1c; 0x940390c2 is launch(string,string,address,uint256) used for CNRY on the same factory; calldata decodes Stacks/STACKS/SPY, 2026-09-03", next: "read unverified bytecode or wait for verification" }
  - { priority: P1, question: "Does unverified factory/token leave an admin path despite owner() reverting?", checked: "owner() reverts on token and factory; deployer later called setAdminWallet / setStaking / setStakingShareBps on 0x6Dda…D168; isUncapped() true, 2026-09-03", next: "decompile 0x13ae…0a36 and 0x6Dda…D168 if source stays unverified" }
  - { priority: P1, question: "Does the promised whitepaper publish a CA, handle, or audit URL?", checked: "@StacksAppRH 2026-09-03T01:25:19Z Full whitepaper coming tomorrow; no PDF URL this pass", next: "re-read that account on 2026-09-04" }
  - { priority: P2, question: "Which Gecko field produced the assignment lead of liq ~$123,842 / vol ~$1,976,160?", checked: "Live DexScreener liq 131986.04 vol 1999790.43; Gecko reserve 206080.85 vol 1917405.94; earlier DexScreener pair liq 128995.87 vol 1996281.9, 2026-09-03", next: "archive the pair JSON if the lead figures return" }
---

# STACKS — research packet

## What it is

A stock-paired launchpad that mints autocompounding ERC-20s into Uniswap v4 pools quoted against Robinhood stock tokens. A user launches or trades on stacksapp.us; $STACKS itself is the protocol token in the STACKS/SPY book. Factory 0x13ae…0a36 is in the site bundle; no official handle was confirmed this pass.

Themes: launchpad, stock-paired:SPY, rwa, memecoin

## Why it matters

The STACKS/SPY Uniswap v4 book printed about $1.92M of 24h volume on Gecko at collection, with the quote token the SPY Robinhood Token rail at 0x117c…4C0C. That is a different token and pool from packed PAIR/SPY and from STRATTON/SPY. Site JS describes a 12M → 1.2B autocompound curve and a 100+ stock launch set.

## What could go wrong

USD liquidity figures on the STACKS/SPY book count both sides, and the quote side is SPY, not USDG. Gecko names the pool SPY / STACKS 3% with SPY as base, so pool fdv_usd is not the STACKS fdv. Factory and token source are unverified. @StacksAppRH is unconfirmed-official. A second STACKS ticker (0xe7fC…1E18, Stacks App / AI) sits on the same chain.

## Product and mechanics

Factory 0x13ae…0a36 (site JS M2) is unverified. Tx 0xcf2c…ac462 from EOA 0xD386…7D3 at 2026-09-02T19:38:40Z called selector 0xca4fec1c with name Stacks, symbol STACKS, stock SPY 0x117c…4C0C. The token minted 10e6 to the factory and 2e6 to burnReserve 0x73f9…c650; the factory then sent ~10e6 into Uniswap v4 PoolManager 0x8366…0951. Pair id 0x77d0…5e32. [verified R-4 R-5 R-18]

Site JS: every launch mints twelve million — 10M to the locked pool, 2M to the burn reserve — and compounds along one fixed log curve to 1.2 billion in three months. Token isUncapped() returns true. factory() on the token reverts. The same factory earlier used launch(string,string,address,uint256) 0x940390c2 for CNRY. Secondary STACKS/USDG and STACKS/ETH books exist on DexScreener with far less liquidity than the SPY book. [verified R-6 R-7 R-21]

## Control and security

token owner() reverts. factory owner() reverts. Deployer 0xD386…7D3 has no code and created the factory (2026-09-02T13:15:36Z), staking/burnReserve (13:15:35Z), and later called setStaking / setAdminWallet / setStakingShareBps on 0x6Dda…D168. [verified R-5 R-6 R-15]

Token, factory, and staking are unverified on Blockscout. No audit report URL was located this pass. [verified R-1 R-3] [unknown]

## Team and provenance

stacksapp.us titles STACKS — Autocompounding Token Launchpad. The JS bundle hardcodes token 0xD998…D94C and factory 0x13ae…0a36, so the domain is confirmed against the CA. DexScreener lists x.com/StacksAppRH; that bio embeds the CA. The JS bundle has no StacksAppRH string this pass. Flag unconfirmed-official. [claim R-7 R-13 R-21]

## Economics and activity

STACKS/SPY Uniswap v4 24h volume is 1917405.94 USD and reserve_in_usd is 206080.85 at 2026-09-03T03:53:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 909432.43 at 03:47Z; Gecko token volume_usd.h24 is 1939691.25 across all pools. Gecko pool fdv_usd 13551892 is SPY-as-base. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 131986.04, volume.h24 1999790.43, fdv/marketCap 1011951 at 03:50Z. Blockscout holders_count 799. Pair created 2026-09-02T19:38:40Z. [claim R-1 R-7]

## Material risks

- Factory and token source unverified; owner() reverts but deployer txs include setAdminWallet on a related contract. [verified R-3 R-6]
- Pool USD reserve is STACKS plus SPY, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko pool fdv_usd is not the STACKS fdv. [claim R-8 R-9]
- Handle is unconfirmed-official. [claim R-7 R-13]
- Second STACKS ticker 0xe7fC…1E18 (Stacks App / AI) and Stacks L1 STX are different names. [verified R-6 R-7]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/staking/SPY and launch/create txs, RPC name/symbol/isUncapped/burnReserve/launchOpen, DexScreener token + STRATTON/PAIR collide, Gecko pool/token, /rhj/assets, stacksapp.us + JS, @StacksAppRH posts, @leakmealpha were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 1917405.94 is the Gecko SPY/STACKS pool 24h volume, not the 1939691.25 token all-pools figure. Reserve 206080.85 is that pool. DexScreener 1999790.43 / 131986.04 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that STACKS is packed PAIR (same SPY rail) or STRATTON or the Stacks L1. PAIR is 0x6b1d…66be / 0xf224…c001 / pair.fun; STRATTON is 0xb7ea…8360 / 0xa2c4…9274; this CA is 0xD998…D94C / 0x77d0…5e32 / stacksapp.us. [inference R-7 R-11 R-17]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no stacks / STACKS / 0xD998…D94C. Remote packet path 404 before PUT.
- Explorer: Blockscout api/v2 token, factory, staking, SPY, launch 0xcf2c…ac462, factory create 0x50942ac6…2fb4, holders. RPC eth_getCode/eth_call with Mozilla UA at blocks 53110848–53115146.
- Aggregators: DexScreener latest/dex/tokens, pair, STRATTON pair, PAIR token; Gecko pool and token (one 429 then retry).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, SPY row present, 0 STACKS ticker.
- Social: X user search StacksAppRH; keyword from:StacksAppRH; leakmealpha.
- Site: stacksapp.us SSR + /assets/index-BDMd6v42.js constants and how-copy.
- Failed: Blockscout token creator_address_hash null; 4byte 0xca4fec1c empty; historical eth_getCode at 52827070 returned 0x (archive gap); Gecko first call 429; site SSR has no CA (JS does).
- Time: collection 2026-09-03T03:44Z–2026-09-03T03:53Z.
