---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: ram
name: RAM
packet_tier: seed
as_of: 2026-09-03T05:46:00Z
prior_packet: null
supersedes: null
owned_slugs: [ram]
allowed_paths:
  - research/inbox/packets/ram/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: RAM
  aliases: ["Ramses"]
  symbols: [RAM]
  entity_kind: token
  chain_scope: multichain
  official_domain: https://www.ramses.xyz/
  official_handle: "@RamsesExchange"
  repository: https://github.com/RamsesExchange
  possible_matches:
    - slug: long
      signals: [ticker-only]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "Canonical RAM is RamsesOftSatellite 0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802, LayerZero OFT, not a LongLauncher clone"
        - "DexScreener search also lists a same-ticker LongLauncher RAM 0x15D7E95a6B2Bd43419d8d24D052bfeAd1C5F1E18; that is a ca-collision, not this row"
        - "No shared domain, handle, or reproduced address with LONG"

classification:
  primary_leaf: trading/amm-imported
  secondary_leaves: [chain-infra/bridge]
  mechanism_tags: [amm, bridge, fee-routing]
  ecosystem_role: observe
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x5173…4802 is verified RamsesOftSatellite (partial) with 10815 bytes of code on 4663; name Ramses / symbol RAM; token() returns itself; LayerZero EndpointV2 0x6F47…DD5B; owner() is GnosisSafeProxy 0x20D6…BE1A. Docs list this exact address as Robinhood RAM Token. Distinct from Llama Ramses DEX (ramses-cl / ramses-legacy, Arbitrum 0xaaa6…2418) and from desk slug ramsesx (the imported AMM); possible_matches records the census ticker hit only because ramses/ramsesx are not census rows. Do not merge. [R-1] [R-2] [R-5] [R-10] [R-11] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.ramses.xyz/", authenticity: confirmed }
  - { kind: docs, url: "https://docs.ramses.xyz/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/RamsesExchange", authenticity: confirmed }
  - { kind: github, url: "https://github.com/RamsesExchange", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/ExchangeRamses", authenticity: unconfirmed }
  - { kind: discord, url: "https://discord.gg/P3fQPWsuaN", authenticity: confirmed }

deployments:
  - label: RAM token (RamsesOftSatellite)
    role: token
    address:
      value: "0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: Ramses Team Multisig (token owner)
    role: admin
    address:
      value: "0x20D630cF1f5628285BfB91DfaC8C89eB9087BE1A"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:41:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-4, R-5, R-12]
  - label: LayerZero EndpointV2
    role: other
    address:
      value: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:41:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]

metrics:
  - { kind: holders, value: 10236, currency: null, as_of: 2026-09-03T05:40:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802 holders_count", class: claim, receipt_ids: [R-1] }
  - { kind: volume_24h, value: 3782622.16, currency: USD, as_of: 2026-09-03T05:40:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x680eb556f5d466e1fee8468b93cbdd6c426e2136c369a6ab70ca36a5204cd471 volume_usd.h24 (RAM/USDG Uniswap v4 pool slice, not Gecko token all-pools 8133977.08)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 13459707.29, currency: USD, as_of: 2026-09-03T05:40:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802 market_cap_usd", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 424602.64, currency: USD, as_of: 2026-09-03T05:40:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x680eb556f5d466e1fee8468b93cbdd6c426e2136c369a6ab70ca36a5204cd471 reserve_in_usd (RAM/USDG Uniswap v4 book, not Llama ramses-cl-v2 DEX TVL)", class: claim, receipt_ids: [R-8] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:41:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32b7329 (53179177) after 0x32b7094 (53178516). Token 0x5173…4802 eth_getCode 10815 bytes prefix 6080604052 (not EIP-1167). name Ramses, symbol RAM, decimals 18, totalSupply 51800632748611000000000000. token() 0x5173…4802. owner() 0x20D630cF1f5628285BfB91DfaC8C89eB9087BE1A. endpoint() 0x6F475642a6e85809B1c36Fa62763669b1b48DD5B. sharedDecimals 6. approvalRequired false. decimalConversionRate 1e12. oftVersion interfaceId 0x02e49c2c version 1. Creator 0xAAA5…B9De eth_getCode 0x. Endpoint code 24005 B. Owner code 171 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-2, R-3, R-4], result: "Blockscout api/v2 token 0x5173…4802 name Ramses symbol RAM holders_count 10236 total_supply 51800632748611000000000000 type ERC-20. Address name RamsesOftSatellite is_contract true is_verified true proxy_type null creator 0xAAA5D87392652647225B96563e469768f000b9De tx 0x79c3c662…599f 2026-08-14T22:18:02Z block 36605912. Smart-contract compiler v0.8.30+commit.73712a01 is_partially_verified true file_path contracts/oft/RamsesOftSatellite.sol verified_at 2026-08-14T22:44:43Z. Constructor lzEndpoint 0x6F47…DD5B delegate 0xAAA5…B9De. Owner 0x20D6…BE1A name GnosisSafeProxy proxy_type master_copy implementation SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762. Endpoint 0x6F47…DD5B name EndpointV2 is_verified true." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:40:00Z, receipt_ids: [R-6, R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x5173…4802: 22 robinhood pairs. Top RAM/WETH ramses v3 0x5860…076a liquidity.usd 410738.83 volume.h24 2194077.74; RAM/USDG uniswap v4 0x680eb556…d471 liquidity.usd 305053.38 volume.h24 3799297.35 fdv ~8.8e6 marketCap ~1.31e7 pairCreatedAt 2026-08-31T16:40:05Z. info.websites https://www.ramses.xyz/ and https://docs.ramses.xyz/; socials x.com/RamsesExchange and discord.gg/P3fQPWsuaN. Gecko token GET 200: name Ramses symbol RAM coingecko_coin_id ramses price_usd 0.1678007883 fdv_usd 8692187.01 market_cap_usd 13459707.29 volume_usd.h24 8133977.08 (all pools). Gecko RAM/USDG v4 pool volume_usd.h24 3782622.16 reserve_in_usd 424602.64." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T05:45:00Z, receipt_ids: [R-6, R-12, R-14, R-19, R-21], result: "docs.ramses.xyz/pages/contract-addresses Robinhood Governance RAM Token 0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802. DexScreener websites ramses.xyz / docs.ramses.xyz and Twitter https://x.com/RamsesExchange. www.ramses.xyz title Ramses X description Ramses is innovative, multichain DEX infrastructure. @RamsesExchange bio same line plus t.co link. t.me/ExchangeRamses og:title RAMSES | Official, ramses.xyz, 1523 members. discord.gg/P3fQPWsuaN og Official server of Ramses Exchange | 4165 members." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:42:00Z, receipt_ids: [R-10, R-11, R-24], result: "Llama protocols: ramses-cl (id 3096) name Ramses CL symbol RAM address arbitrum:0xaaa6c1e32c55a7bfa8066a6fae9b42650f262418 chains [Arbitrum] currentChainTvls.Arbitrum 115261.49 description Arbitrum central liquidity hub. ramses-cl-v2 (id 8058) name Ramses CL V2 address hyperliquid:0x555570a286f15ebdfe42b66ede2f724aa1ab5555 chains Polygon/Arbitrum/Hyperliquid L1/Robinhood Chain currentChainTvls Robinhood Chain 4947098.94 description starts RamsesX is a ve(3,3) exchange on Arbitrum. summary/dexs/ramses-cl-v2 total24h 173334594 (all-chains, not a 4663 slice)." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "RamsesOftSatellite is a LayerZero OFT ERC-20: verified source burns RAM on send and mints on authenticated receive; no externally callable mint. token() returns 0x5173…4802. sharedDecimals 6. endpoint() LayerZero EndpointV2 0x6F47…DD5B.", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Ramses", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "RAM", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-2, R-5, R-12], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: identity.domain, value: "https://www.ramses.xyz/", class: verified, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-6, R-9, R-14], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-7, field: identity.handle, value: "@RamsesExchange", class: verified, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-6, R-15], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: trading/amm-imported, class: claim, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Do not merge with Llama Ramses DEX. ramses-cl / ramses-legacy are Arbitrum-only at 0xaaa6c1e32c55a7bfa8066a6fae9b42650f262418. ramses-cl-v2 (RamsesX) is the multi-chain AMM with Robinhood Chain TVL 4947098.94 and HyperEVM RAM 0x5555…5555. This packet is the 4663 OFT token 0x5173…4802. Desk slug ramsesx is that AMM, not this token. Census possible_matches only records LONG (ticker-only) because ramses/ramsesx are not census rows.", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-10, R-11, R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "RAM/USDG Uniswap v4 24h volume 3782622.16 USD and reserve_in_usd 424602.64 at 2026-09-03T05:40:00Z (Gecko pool slice, not Gecko token all-pools 8133977.08)", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener RAM/USDG uniswap v4 liquidity.usd 305053.38 volume.h24 3799297.35; RAM/WETH ramses v3 liquidity.usd 410738.83 volume.h24 2194077.74 at 2026-09-03T05:40:00Z", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 10236, class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() 0x20D630cF1f5628285BfB91DfaC8C89eB9087BE1A GnosisSafeProxy / SafeL2; docs label Ramses Team Multisig on HyperEVM access-control. Constructor delegate was EOA 0xAAA5…B9De (now not owner()).", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-4, R-5, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "OFT Ownable delegate started as deployer 0xAAA5…B9De; current owner is the Safe. Docs AccessHub / timelock paths apply to the AMM, not verified on this OFT this pass.", class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-2, R-4, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair assets WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 and USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168. Venues include Ramses v3 0x5860…076a and Uniswap v4 pool 0x680eb556…d471. Not a Pons/LONG/PAIR launchpad token; creator is EOA 0xAAA5…B9De.", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-3, R-6, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash 0xAAA5D87392652647225B96563e469768f000b9De is an EOA; factory()/launchFactory() not used. Pad is not Pons, LONG, PAIR, or hood.fun.", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: multichain, class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-2, R-5, R-11], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "Docs list Consensys Ramses V3, Spearbit Etherex, Cantina shadow-x33, and Code4rena Ramses V3 CLMM. No OFT-satellite-specific audit URL was located on the token page, DexScreener, or docs contract-addresses this pass.", class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "handle-collision: X user search also returned @RamsesExchanges (bio '.') and backup @RamsesExchange_ which points at @RamsesExchange. Canonical handle is @RamsesExchange.", class: claim, observed_at: 2026-09-03T05:39:00Z, receipt_ids: [R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token market_cap_usd 13459707.29 at 2026-09-03T05:40:00Z", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x6F475642a6e85809B1c36Fa62763669b1b48DD5B", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: identity.repository, value: "https://github.com/RamsesExchange", class: claim, observed_at: 2026-09-03T05:46:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: candidate, value: "ram | RAM | @RamsesExchange | ramses.xyz — discovery token not in census 49; do not merge with Llama Ramses DEX or ramsesx", class: claim, observed_at: 2026-09-03T05:46:00Z, receipt_ids: [R-1, R-10, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: product.mechanism, value: "docs.ramses.xyz/pages/ramses-x and /pages/tokenomics state canonical Ethereum RAM and LayerZero OFT connectivity are work in progress and not yet deployed, with no production Ethereum RAM or OFT adapter address published.", class: claim, observed_at: 2026-09-03T05:45:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: economics.metric, value: "Gecko token fdv_usd 8692187.01 at 2026-09-03T05:40:00Z (below the same endpoint market_cap_usd 13459707.29)", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-12], reproduction_ids: [REP-2, REP-4], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-1, CLM-24]
    material_effect: "Docs still describe OFT as unpublished while RamsesOftSatellite 0x5173…4802 is live on 4663"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-20, CLM-25]
    material_effect: "Gecko token market_cap_usd 13459707.29 is above fdv_usd 8692187.01 on the same endpoint"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko RAM/USDG 24h volume $3.78M; Blockscout holders 10236"
    summary: "Gecko pool 0x680eb556…d471 volume_usd.h24 3782622 reserve_in_usd 424603. Blockscout holders_count 10236."
    occurred_at: 2026-09-03T05:40:00Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-1, R-8]
  - id: EVT-2
    type: ct
    title: "@Cryptop4ik posted RAM as Robinhood infrastructure"
    summary: "Post: $RAM looks like infrastructure; RamsesX ~$174M 24h DEX volume, #8; token about $0.13–0.16, cap ~$11–12M."
    occurred_at: 2026-09-03T04:39:12Z
    observed_at: 2026-09-03T05:39:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-3
    type: ct
    title: "@whalewatchRH posted a $5K RAM buy at $8.73M MC"
    summary: "Post: A INDEX whale just bought $5K of $RAM at $8.73M MC."
    occurred_at: 2026-09-03T04:38:07Z
    observed_at: 2026-09-03T05:39:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: company
    title: "@RamsesExchange posted $1.66M fees on $673M volume"
    summary: "Epoch post: $1,656,537 fees on $673M volume; over $800,000 fees on Robinhood; 95% to LPs; #8 in 24h volume."
    occurred_at: 2026-09-03T00:14:18Z
    observed_at: 2026-09-03T05:39:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-5
    type: company
    title: "@RamsesExchange posted Llama rank #8 in 24h DEX volume"
    summary: "Post citing @DefiLlama: Ramses has the 8th most volume in the last 24 hours in all of DeFi."
    occurred_at: 2026-09-02T20:09:06Z
    observed_at: 2026-09-03T05:39:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-6
    type: onchain
    title: "Uniswap v4 RAM/USDG pool created on 4663"
    summary: "DexScreener/Gecko pair 0x680eb556…d471 pairCreatedAt/pool_created_at 2026-08-31T16:40:05Z quote USDG."
    occurred_at: 2026-08-31T16:40:05Z
    observed_at: 2026-09-03T05:40:00Z
    affected_fields: [deployment.address, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-8]
  - id: EVT-7
    type: onchain
    title: "EOA deployed RamsesOftSatellite RAM on chain 4663"
    summary: "Tx 0x79c3c662…599f from 0xAAA5…B9De at 2026-08-14T22:18:02Z block 36605912 created 0x5173…4802."
    occurred_at: 2026-08-14T22:18:02Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x5173…4802 Ramses / RAM", url: "https://robinhoodchain.blockscout.com/address/0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-12, CLM-16, CLM-23, CLM-26, EVT-1], excerpt: "hash 0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802 name RamsesOftSatellite is_contract true is_verified true proxy_type null creator_address_hash 0xAAA5D87392652647225B96563e469768f000b9De creation_transaction_hash 0x79c3c6622ca9bb31d5d21f240dd5d8f21c24d49a591c057424ddaac78c45599f. token name Ramses symbol RAM decimals 18 total_supply 51800632748611000000000000 holders_count 10236 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "RamsesOftSatellite verified source", url: "https://robinhoodchain.blockscout.com/address/0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802?tab=contract", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-13, CLM-14, CLM-17, CLM-21], excerpt: "name RamsesOftSatellite compiler v0.8.30+commit.73712a01 is_verified true is_fully_verified false is_partially_verified true file_path contracts/oft/RamsesOftSatellite.sol verified_at 2026-08-14T22:44:43.418032Z. Source: OFT satellite burns RAM on send and mints on authenticated receive; no external mint. constructor(lzEndpoint, delegate) OFT(\"Ramses\", \"RAM\", lzEndpoint, delegate). Args 0x6F47…DD5B and 0xAAA5…B9De." }
  - { id: R-3, publisher: Blockscout, title: "Creation tx 0x79c3c662…599f", url: "https://robinhoodchain.blockscout.com/tx/0x79c3c6622ca9bb31d5d21f240dd5d8f21c24d49a591c057424ddaac78c45599f", published_at: 2026-08-14T22:18:02Z, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-16, EVT-7], excerpt: "timestamp 2026-08-14T22:18:02.000000Z status ok result success block_number 36605912 from 0xAAA5D87392652647225B96563e469768f000b9De (is_contract false) to null created_contract RamsesOftSatellite 0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802 is_verified true." }
  - { id: R-4, publisher: Blockscout, title: "Owner 0x20D6…BE1A GnosisSafeProxy", url: "https://robinhoodchain.blockscout.com/address/0x20D630cF1f5628285BfB91DfaC8C89eB9087BE1A", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-14], excerpt: "hash 0x20D630cF1f5628285BfB91DfaC8C89eB9087BE1A name GnosisSafeProxy is_contract true is_verified true proxy_type master_copy implementations SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762 creator_address_hash 0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner, endpoint on RAM", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-13, CLM-16, CLM-17, CLM-21], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 53179177. Token code 10815 B. name Ramses symbol RAM decimals 18 totalSupply 51800632748611000000000000. token() 0x5173…4802. owner() 0x20D6…BE1A. endpoint() 0x6F47…DD5B. sharedDecimals 6. oftVersion 0x02e49c2c / 1. Creator code 0x. Endpoint code 24005 B. Owner code 171 B." }
  - { id: R-6, publisher: DexScreener, title: "latest/dex/tokens RAM", url: "https://api.dexscreener.com/latest/dex/tokens/0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-8, CLM-11, CLM-15, EVT-6], excerpt: "22 robinhood pairs. RAM/WETH ramses v3 0x5860dD468B4FC1740EaF80a3b7F22e78D70a076a liq 410738.83 vol.h24 2194077.74. RAM/USDG uniswap v4 0x680eb556f5d466e1fee8468b93cbdd6c426e2136c369a6ab70ca36a5204cd471 liq 305053.38 vol.h24 3799297.35 pairCreatedAt 1788194405000. info.websites ramses.xyz docs.ramses.xyz socials x.com/RamsesExchange discord.gg/P3fQPWsuaN." }
  - { id: R-7, publisher: GeckoTerminal, title: "Ramses token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20, CLM-25, EVT-1], excerpt: "GET 200. name Ramses symbol RAM decimals 18 coingecko_coin_id ramses total_supply 51800632748611000000000000 price_usd 0.1678007883 fdv_usd 8692187.00928714 market_cap_usd 13459707.2906165 volume_usd.h24 8133977.07876391 total_reserve_in_usd 478372.28. Top pool robinhood_0x680eb556…d471." }
  - { id: R-8, publisher: GeckoTerminal, title: "RAM/USDG Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x680eb556f5d466e1fee8468b93cbdd6c426e2136c369a6ab70ca36a5204cd471", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-5, CLM-10, CLM-15, EVT-1, EVT-6], excerpt: "GET 200. name RAM / USDG 0.951% pool_created_at 2026-08-31T16:40:05Z fdv_usd 8896735.76 market_cap_usd 13558902.46 reserve_in_usd 424602.6446 volume_usd.h24 3782622.16111351. dex uniswap-v4-robinhood quote robinhood_0x5fc5360d0400a0fd4f2af552add042d716f1d168." }
  - { id: R-9, publisher: GeckoTerminal, title: "Ramses token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802/info", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6], excerpt: "websites [https://ramses.xyz] discord_url http://discord.gg/ramses telegram_handle ExchangeRamses twitter_handle RamsesExchange gt_verified true holders.count 9981 last_updated 2026-09-03T05:30:27Z. Description names HyperEVM, not Robinhood Chain." }
  - { id: R-10, publisher: DefiLlama, title: "Ramses CL (Arbitrum Llama row)", url: "https://api.llama.fi/protocol/ramses-cl", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-23], excerpt: "id 3096 name Ramses CL symbol RAM address arbitrum:0xaaa6c1e32c55a7bfa8066a6fae9b42650f262418 url https://www.ramses.xyz/ twitter RamsesExchange category Dexs chains [Arbitrum] currentChainTvls.Arbitrum 115261.49. Description: next-generation AMM designed to serve as Arbitrum's central liquidity hub." }
  - { id: R-11, publisher: DefiLlama, title: "Ramses CL V2 chain slice", url: "https://api.llama.fi/protocol/ramses-cl-v2", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-17], excerpt: "id 8058 name Ramses CL V2 address hyperliquid:0x555570a286f15ebdfe42b66ede2f724aa1ab5555 symbol RAM url https://ramses.xyz twitter RamsesExchange chains Polygon, Arbitrum, Hyperliquid L1, Robinhood Chain. currentChainTvls Robinhood Chain 4947098.93511 Hyperliquid L1 10822795.34. Description starts: RamsesX is a ve(3,3) exchange on Arbitrum." }
  - { id: R-12, publisher: Ramses docs, title: "Contract Addresses — Robinhood RAM Token", url: "https://docs.ramses.xyz/pages/contract-addresses", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-13, CLM-23, CLM-26], excerpt: "Robinhood Governance RAM Token 0x5173D45A1191eE33cBB7D8c7e65f21B04eD54802 xRAM Liquid Staking Token (r33) 0x4e5195469A0360f5dfe811730C9CCaCFF0a0FeeE. HyperEVM RAM Token 0x555570a286F15EbDFE42B66eDE2f724Aa1AB5555. HyperEVM Access Control Ramses Team Multisig 0x20D630cF1f5628285BfB91DfaC8C89eB9087BE1A." }
  - { id: R-13, publisher: Ramses docs, title: "Ramses X / Tokenomics OFT planned", url: "https://docs.ramses.xyz/pages/ramses-x", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-24], excerpt: "Canonical RAM on Ethereum Mainnet and its LayerZero OFT connectivity are work in progress. No production Ethereum RAM token or OFT adapter address has been published. Tokenomics page: this architecture is a work in progress and is not yet deployed. Fee-only mode: LP 95% / protocol 5%; emissions inactive." }
  - { id: R-14, publisher: Ramses, title: "ramses.xyz", url: "https://www.ramses.xyz/", published_at: null, accessed_at: 2026-09-03T05:44:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-6], excerpt: "HTTP 200. title Ramses X. meta description Ramses is innovative, multichain DEX infrastructure. SPA HTML this pass did not embed 0x5173 or a Robinhood string." }
  - { id: R-15, publisher: "@RamsesExchange", title: "Epoch fees $1,656,537 on $673M volume", url: "https://x.com/RamsesExchange/status/2095304341678629034", published_at: 2026-09-03T00:14:18Z, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-7, EVT-4], excerpt: "The epoch has ended with a total of $1,656,537 in fees generated on $673 million in total volume. We generated over $800,000 fees on Robinhood alone, 95% went back to LPs. The tech is working, Ramses was #8 in all of DeFi in 24 hour volume." }
  - { id: R-16, publisher: "@RamsesExchange", title: "Llama 8th most volume in 24 hours", url: "https://x.com/RamsesExchange/status/2095242634105155751", published_at: 2026-09-02T20:09:06Z, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "According to @DefiLlama , Ramses has the 8th most volume in the last 24 hours in all of DeFi. All Of DeFi. Thank you to @ProMint_X for pointing this out." }
  - { id: R-17, publisher: "@Cryptop4ik", title: "$RAM infrastructure on Robinhood", url: "https://x.com/Cryptop4ik/status/2095371003958301098", published_at: 2026-09-03T04:39:12Z, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "$RAM is one of the few things on Robinhood that actually looks like infrastructure, not just another ticker. RamsesX just printed ~$174M in 24h DEX volume. #8 across all DEXs. Token still trades around $0.13–0.16. Market cap ~$11–12M. @RamsesExchange" }
  - { id: R-18, publisher: "@whalewatchRH", title: "INDEX whale bought $5K of $RAM", url: "https://x.com/whalewatchRH/status/2095370734608552125", published_at: 2026-09-03T04:38:07Z, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "A INDEX whale just bought $5K of $RAM at $8.73M MC" }
  - { id: R-19, publisher: Telegram, title: "t.me/ExchangeRamses", url: "https://t.me/ExchangeRamses", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7], excerpt: "HTTP 200. og:title RAMSES | Official. og:description Ramses. multichain defi infrastructure https://ramses.xyz. tgme_page_extra 1 523 members, 39 online. No 0x5173 in the preview HTML this pass." }
  - { id: R-20, publisher: GitHub, title: "RamsesExchange org", url: "https://github.com/RamsesExchange", published_at: null, accessed_at: 2026-09-03T05:46:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-22], excerpt: "HTTP 200. title Ramses · GitHub. og:description Ramses V3 & related contracts. Ramses has 11 repositories available. Page HTML includes ramses.xyz. No 0x5173 or Robinhood string this pass." }
  - { id: R-21, publisher: Discord, title: "Ramses Exchange Discord", url: "https://discord.gg/P3fQPWsuaN", published_at: null, accessed_at: 2026-09-03T05:46:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-7], excerpt: "HTTP 200. og:title Join the Ramses Exchange Discord Server! og:description Official server of Ramses Exchange | 4165 members. og:url https://discord.com/invite/ramses." }
  - { id: R-22, publisher: Ramses docs, title: "Audits", url: "https://docs.ramses.xyz/pages/audits", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-14, CLM-18], excerpt: "Ramses V3 Review Consensys. Shared-code reviews Spearbit — Etherex Contracts and Cantina — shadow-x33. Code4rena Ramses V3 CLMM Contest Report. AccessHub retains multisig and timelock administration in early-stage deployments." }
  - { id: R-23, publisher: X, title: "@RamsesExchanges profile collision", url: "https://x.com/RamsesExchanges", published_at: null, accessed_at: 2026-09-03T05:39:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "X user search for RamsesExchange returned @RamsesExchange (bio Ramses is innovative, multichain DEX infrastructure), @RamsesExchanges (bio '.'), and backup @RamsesExchange_ (Please visit the new official Twitter account @RamsesExchange)." }
  - { id: R-24, publisher: DefiLlama, title: "Ramses CL V2 24h DEX volume", url: "https://api.llama.fi/summary/dexs/ramses-cl-v2?excludeTotalDataChart=true&excludeTotalDataChartBreakdown=true", published_at: null, accessed_at: 2026-09-03T05:46:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "name Ramses CL V2 total24h 173334594 total7d 655875603 change_1d 36.15. All-chains figure, not a Robinhood Chain slice." }

gaps:
  - { priority: P0, question: "Should RAM the OFT token stay a separate slug from ramsesx the imported AMM and from Llama ramses-cl?", checked: "census 49 has no ram/ramses/ramsesx; Llama ramses-cl is Arbitrum 0xaaa6…2418; ramses-cl-v2 is RamsesX multi-chain; docs list 0x5173 as Robinhood RAM Token; packet.mjs forbids non-census possible_matches so ramses/ramsesx were not filed as match slugs, 2026-09-03", next: "keep ram vs ramsesx vs ramses-cl unmerged until a controller places ramsesx in census" }
  - { priority: P0, question: "Which OFT peer eids are set, and does the satellite credit HyperEVM 0x5555…5555 or Arbitrum 0xaaa6…2418?", checked: "RPC token/owner/endpoint/sharedDecimals reproduced; peers(uint32) calls 429 after token()/oftVersion(); docs still say Ethereum OFT unpublished, 2026-09-03", next: "eth_call peers() for HyperEVM/Arbitrum/Polygon eids once RPC 429 clears" }
  - { priority: P1, question: "Does Gecko market_cap_usd > fdv_usd because circulating includes other-chain OFT supply?", checked: "Gecko token market_cap_usd 13459707.29 fdv_usd 8692187.01 total_supply 5.180e25; Blockscout total_supply matches; CON-2 left open, 2026-09-03", next: "compare CoinGecko ramses circulating vs 4663 totalSupply" }
  - { priority: P1, question: "Is there an OFT-satellite-specific audit, vs the V3 CLMM reviews on docs/audits?", checked: "docs/audits lists Consensys V3, Spearbit, Cantina, Code4rena; token page and DexScreener have no audit URL, 2026-09-03", next: "search github.com/RamsesExchange for oft/RamsesOftSatellite audit PDFs" }
  - { priority: P2, question: "Does github.com/RamsesExchange bidirectionally link ramses.xyz and the 4663 token?", checked: "org page HTTP 200, 11 repos, ramses.xyz string present, no 0x5173; site/docs SPA this pass did not list GitHub, 2026-09-03", next: "open the org README and any oft repo for the satellite address" }
---

# RAM — research packet

## What it is

A LayerZero OFT satellite of RAM on Robinhood Chain. Verified RamsesOftSatellite burns on send and mints on authenticated receive, with no external mint. Traders buy and sell RAM on Ramses v3 and Uniswap v4 books. ramses.xyz and @RamsesExchange run the imported AMM; this packet is the token, not the Llama Ramses DEX.

Themes: amm

## Why it matters

RAM is the listed token for Ramses on chain 4663, with 10236 holders and a Uniswap v4 RAM/USDG book around $3.78M of 24h volume on Gecko this pass. Llama files a separate RamsesX / ramses-cl-v2 AMM row with Robinhood Chain TVL about $4.95M. The token and that AMM share a site and handle and stay unmerged.

## What could go wrong

Docs still describe Ethereum canonical RAM and OFT connectivity as unpublished while this satellite is live. Gecko market_cap_usd sits above fdv_usd on the same token endpoint. Same-ticker LongLauncher RAM 0x15D7…1e18 and Llama ramses-cl at Arbitrum 0xaaa6…2418 are different addresses.

## Product and mechanics

RamsesOftSatellite at 0x5173…4802 is a 10815-byte OFT ERC-20, not an EIP-1167 clone. name Ramses, symbol RAM, decimals 18, totalSupply 5.180e25. token() returns itself. endpoint() is LayerZero EndpointV2 0x6F47…DD5B. sharedDecimals is 6. Verified source: burns on send, mints on authenticated receive, no external mint. [verified R-2 R-5]

Docs list this address as Robinhood RAM Token and list HyperEVM RAM at 0x5555…5555. Llama ramses-cl (Arbitrum 0xaaa6…2418) is the original DEX row. create was not a launchpad: EOA 0xAAA5…B9De deployed the contract at 2026-08-14T22:18:02Z. Books include Ramses v3 RAM/WETH 0x5860…076a and Uniswap v4 RAM/USDG 0x680eb556…d471 (created 2026-08-31T16:40:05Z). [verified R-3 R-6 R-12]

## Control and security

owner() is GnosisSafeProxy 0x20D6…BE1A (SafeL2 0x29fc…C762). Docs label that address Ramses Team Multisig under HyperEVM access control. Constructor delegate was the deployer EOA; it is not owner() now. [verified R-4 R-5 R-12]

Docs/audits list Consensys V3, Spearbit, Cantina, and Code4rena CLMM reviews. No OFT-satellite-specific audit URL was located this pass. Docs also say early deployments retain multisig and timelock paths on AccessHub. [claim R-22] [unknown]

## Team and provenance

Official pair: docs publish 0x5173…4802 as Robinhood RAM Token; DexScreener lists ramses.xyz, docs.ramses.xyz, and @RamsesExchange; the handle bio matches the site line. Discord invite titles Official server of Ramses Exchange. [verified R-6 R-12 R-21]

t.me/ExchangeRamses titles RAMSES | Official and names ramses.xyz with 1523 members; Gecko lists that handle; DexScreener socials this pass did not. GitHub org RamsesExchange (11 repos) mentions ramses.xyz; site/docs SPA this pass did not list GitHub. Flag unconfirmed-official on Telegram and GitHub. X user search also returned @RamsesExchanges and backup @RamsesExchange_; flag handle-collision. [claim R-19 R-20 R-23]

## Economics and activity

Blockscout holders_count 10236. Gecko RAM/USDG Uniswap v4 volume_usd.h24 3782622.16 and reserve_in_usd 424602.64 at 2026-09-03T05:40:00Z. Gecko token volume_usd.h24 8133977.08 is all pools, not that book. [claim R-1 R-7 R-8]

DexScreener same USDG v4 book: liquidity.usd 305053.38 volume.h24 3799297.35. Ramses v3 RAM/WETH liquidity.usd 410738.83 volume.h24 2194077.74. Gecko token market_cap_usd 13459707.29 and fdv_usd 8692187.01 (CON-2). Llama ramses-cl-v2 Robinhood Chain TVL 4947098.94 is the AMM slice, not this token. Llama CL V2 all-chains 24h volume 173334594. [claim R-6 R-7 R-11 R-24]

@RamsesExchange posted $1,656,537 fees on $673M volume, over $800,000 on Robinhood, 95% to LPs. [claim R-15]

## Material risks

- Docs describe OFT as unpublished while this satellite is live on 4663. [disputed R-2 R-13]
- Gecko market_cap_usd exceeds fdv_usd on the same token endpoint. [disputed R-7]
- Llama ramses-cl (Arbitrum) and ramsesx/RamsesX (multi-chain AMM) share name, ticker, site, and handle with this token. [verified R-10 R-11 R-12]
- Same-ticker LongLauncher RAM 0x15D7…1e18 is a ca-collision. [claim R-6]
- No OFT-satellite-specific audit URL this pass. [claim R-22]
- Handle-collision accounts sit next to @RamsesExchange. [claim R-23]

## Verification passes

- Receipts: Blockscout token/source/create tx/Safe/endpoint, RPC name/symbol/owner/endpoint/token(), DexScreener, Gecko token/pool/info (first GET 200), Llama ramses-cl and ramses-cl-v2, docs contract-addresses/ramses-x/audits, ramses.xyz, @RamsesExchange posts, CT posts, Telegram preview, GitHub org, and Discord invite were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 3782622.16 is the Gecko RAM/USDG pool 24h volume, not the 8133977.08 token all-pools figure. Holders 10236 is Blockscout, not Gecko info 9981. Llama 4947098.94 is ramses-cl-v2 Robinhood Chain TVL, not token TVL. [claim R-1 R-7 R-8 R-11]
- Adversarial: the strongest contrary reading is that this row is Llama Ramses DEX and should merge into ramses or ramsesx. Contrary: Arbitrum ramses-cl token/DEX address is 0xaaa6…2418, HyperEVM RAM is 0x5555…5555, this address is the 4663 OFT satellite, and census has no ramses/ramsesx row. Do not merge. [inference R-10 R-11 R-12]

## Operations log

- Base: census 49 slugs have no ram / ramses / ramsesx / 0x5173…4802. GET packets/ram on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404 before write. GET packets/ramses and packets/ramsesx also 404.
- Explorer: Blockscout Chrome UA api/v2 token, address, smart-contract, creation tx 0x79c3…599f, owner Safe, EndpointV2, counters. RPC eth_chainId/eth_blockNumber/eth_getCode/eth_call name/symbol/decimals/totalSupply/owner/endpoint/token/sharedDecimals/approvalRequired/decimalConversionRate/oftVersion at blocks 53178516–53179177.
- Aggregators: DexScreener latest/dex/tokens and search. Gecko token GET 200 so Gecko was used; pool 0x680eb556…d471 GET 200; token/info GET 200; second Gecko pool (Ramses v3) 429. Llama protocols scan; ramses-cl GET 200; ramses-cl-v2 GET 200; ramses-legacy-v2 and ramses-dlmm chain slices; summary/dexs/ramses-cl-v2 total24h 173334594. GET api.llama.fi/protocol/ramses HTTP 400 (no slug ramses).
- Official: www.ramses.xyz 200; docs contract-addresses / ramses-x / tokenomics / audits; github.com/RamsesExchange 200; t.me/ExchangeRamses; discord.gg/P3fQPWsuaN.
- Social: X Latest RAM/Ramses/robinhood; from:RamsesExchange; user search RamsesExchange.
- Failed: RPC peers(uint32) 429 after token()/oftVersion(); Gecko Ramses v3 pool 429; github.com/ramses-xyz 404; docs SPA homepage had no 0x5173.
- Time: collection 2026-09-03T05:39Z–2026-09-03T05:46Z.
