---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: frong
name: FRONG
packet_tier: seed
as_of: 2026-09-03T03:35:00Z
prior_packet: null
supersedes: null
owned_slugs: [frong]
allowed_paths:
  - research/inbox/packets/frong/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: FRONG
  aliases: [frong]
  symbols: [FRONG]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — UERC20 metadata.website is empty; DexScreener website field is pools.trade (the pad); @frongcommunity profile website is t.me/frongcommunity"
  official_handle: "@frongcommunity"
  repository: "NULL — no GitHub org or repository URL on the token source, DexScreener, Gecko, or the @frongcommunity profile this pass"
  possible_matches:
    - slug: pools-trade
      signals: [shared-deployer]
      contrary_signals:
        - "Census pools.trade is Uniswap Labs' Uniswap v4 pad at pools.trade / @TradePools; factory 0x000000e200088D55C39a11F609E5F667729ad49b"
        - "FRONG is the ERC-20 at 0x6245e67affA44a23077f0Ea7f981a8DC743a0c47 created through that factory; entity_kind token, not protocol"
        - "Handle @frongcommunity; no token-owned domain"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Token 0x6245e67a…0c47 exists on 4663 as partially verified UERC20; creator_address_hash is pools.trade UERC20Factory 0x000000e2…d49b and creator() is LiquidityLauncher 0x00004c4c…D4e9. Flagship book is Gecko FRONG/WETH 0.25% on dex uniswap-pools-trade. Not the pad. [R-1] [R-4] [R-5] [R-9]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-6], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-7, CLM-8, CLM-12], note: "" }

links:
  - { kind: x, url: "https://x.com/frongcommunity", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/FrongCommunity", authenticity: confirmed }
  - { kind: other, url: "https://pools.trade", authenticity: unconfirmed }

deployments:
  - label: FRONG token (UERC20)
    role: token
    address:
      value: "0x6245e67affA44a23077f0Ea7f981a8DC743a0c47"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-5]
  - label: pools.trade token factory (UERC20Factory)
    role: factory
    address:
      value: "0x000000e200088D55C39a11F609E5F667729ad49b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-6]
  - label: LiquidityLauncher v3.0.0 (createToken caller)
    role: factory
    address:
      value: "0x00004c4ccc709Ef590F7C81102C0689F0263D4e9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-7, R-5]
  - label: InstantLaunchStrategy used at FRONG create (fees-on)
    role: other
    address:
      value: "0x60D73b21cDf2EA846ab3d58699BBbb8F29d72491"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-5]
  - label: Uniswap v3 FRONG/WETH 1% pool
    role: other
    address:
      value: "0x09a431261E3d0F1dc2f7e0b14718DBBBCBe19Ae4"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-21]

metrics:
  - { kind: tvl, value: 1042502.03, currency: USD, as_of: 2026-09-03T03:30:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xacea…521a FRONG/WETH 0.25% reserve_in_usd", class: claim, receipt_ids: [R-9] }
  - { kind: volume_24h, value: 6098937.85, currency: USD, as_of: 2026-09-03T03:30:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xacea…521a FRONG/WETH 0.25% volume_usd.h24", class: claim, receipt_ids: [R-9] }
  - { kind: tvl, value: 878519.25, currency: USD, as_of: 2026-09-03T03:31:00Z, window: point, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x6245…0c47 pair 0xacea…521a FRONG/ETH Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 6112318.8, currency: USD, as_of: 2026-09-03T03:31:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x6245…0c47 pair 0xacea…521a FRONG/ETH Uniswap v4 volume.h24", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 1196949.03, currency: USD, as_of: 2026-09-03T03:31:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x6245…0c47 pair 0x09a431…9Ae4 FRONG/WETH Uniswap v3 volume.h24", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 10118761.54, currency: USD, as_of: 2026-09-03T03:30:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xacea…521a market_cap_usd", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 15165, currency: null, as_of: 2026-09-03T03:20:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/addresses/0x6245…0c47 token.holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:22:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a477b (53102459). eth_getCode 0x6245…0c47 7154 bytes; name() frong; symbol() FRONG; decimals 18; totalSupply 1000000000000000000000000000; owner() reverted; creator() 0x00004c4ccc709Ef590F7C81102C0689F0263D4e9" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:20:00Z, receipt_ids: [R-1, R-2, R-3, R-4], result: "Blockscout API v2: token is_contract true is_verified true name UERC20; creator_address_hash 0x000000e2…d49b; creation tx 0xbe6b90c5…f35c timestamp 2026-07-30T20:16:59Z block 23595790 to LiquidityLauncher method multicall from 0xE195…cE58; token name frong symbol FRONG holders_count 15165 total_supply 1e27; source src/tokens/UERC20.sol Solidity 0.8.28 is_partially_verified true is_fully_verified false" }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:22:00Z, receipt_ids: [R-5, R-6, R-7], result: "block 0x32a477b: factory 0x000000e2…d49b eth_getCode 13380 bytes; launcher 0x00004c4c…D4e9 3747 bytes; strategy 0x60D73b21…2491 10774 bytes; v3 pool 0x09a43126…9Ae4 22142 bytes. metadata() description it's frong, baby; website empty; image ipfs://bafkreifbfxzslv6ue4drj3fxjaap5u7sojftyy5pg5ouriqpqqve5waz7a; extraData JSON xVerificationToken with x_handle zacklabadie and wallet 0xE19537029b8013DC37c55d509b0a5038C7C5cE58" }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-9, R-10, R-11], result: "Gecko pool 0xacea…521a name FRONG / WETH 0.25% dex uniswap-pools-trade quote 0x000…000 pool_created_at 2026-07-30T20:16:59Z reserve_in_usd 1042502.0337 volume_usd.h24 6098937.85448896 market_cap_usd 10118761.54. Token volume_usd.h24 8601035.97549392 fdv_usd 10057956.2441064. trending_pools includes FRONG/WETH 0.25% volume 6100678.43 reserve 1042615.69" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-8], result: "DexScreener token-pairs: FRONG/ETH Uniswap v4 0xacea…521a volume.h24 6112318.8 liquidity.usd 878519.25 marketCap 10097960 pairCreatedAt 2026-07-30T20:16:59Z info.websites https://pools.trade socials x.com/frongcommunity t.me/FrongCommunity; FRONG/WETH Uniswap v3 0x09a431…9Ae4 volume.h24 1196949.03 liquidity.usd 135827.49" }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-8, R-12, R-13, R-16], result: "DexScreener lists website pools.trade, Twitter https://x.com/frongcommunity, Telegram https://t.me/FrongCommunity. @frongcommunity bio names $FRONG and @tradepools; profile website t.me/frongcommunity. Pinned status 2085478133419901415 posts CA 0x6245e67affA44a23077f0Ea7f981a8DC743a0c47 and t.me/FrongCommunity." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "pools.trade Instant Launch UERC20: LiquidityLauncher.multicall created a 1 billion-supply ERC-20 and seeded a hookless native-ETH Uniswap v4 0.25% pool (UNI-V4-POSM 409801)", class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-4, R-5, R-9], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.handle, value: "@frongcommunity", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-8, R-12, R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "FRONG", class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x6245e67affA44a23077f0Ea7f981a8DC743a0c47", class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-1, R-5, R-13], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-1, R-4, R-8], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: identity.name, value: "frong", class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad pools.trade: UERC20Factory 0x000000e200088D55C39a11F609E5F667729ad49b created the token; LiquidityLauncher 0x00004c4ccc709Ef590F7C81102C0689F0263D4e9 was the createToken caller in tx 0xbe6b90c5…f35c at 2026-07-30T20:16:59Z", class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-8, field: relationship, value: "Distinct from census pools.trade (Uniswap Labs Uniswap v4 pad at pools.trade / @TradePools). FRONG is a token the pad minted, not the pad.", class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-14, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Flagship pair native ETH 0x000…000; Gecko names it FRONG/WETH 0.25% on dex uniswap-pools-trade. Later Uniswap v3 FRONG/WETH 1% 0x09a431…9Ae4 and USDG books.", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-4, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko FRONG/WETH 0.25% 0xacea…521a volume_usd.h24 6098937.85448896 reserve_in_usd 1042502.0337", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Gecko FRONG/WETH 0.25% reserve_in_usd 1042502.0337", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener FRONG/ETH Uniswap v4 0xacea…521a volume.h24 6112318.8", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-8], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "DexScreener FRONG/ETH Uniswap v4 0xacea…521a liquidity.usd 878519.25", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-8], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Gecko token volume_usd.h24 8601035.97549392", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-10], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "Blockscout token.volume_24h 7712538.392330718 circulating_market_cap 8789950.28649046", class: verified, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: 15165, class: verified, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-19, field: control.owner, value: "owner() reverted; ABI has creator() immutable and no owner; creator() returned LiquidityLauncher 0x00004c4c…D4e9", class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-20, field: security.audit, value: "No audit report URL was located on the token source, DexScreener, Gecko, or the X profile this pass", class: unknown, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@frongcommunity.role", value: project, class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-12, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: "account.@frongcommunity.slug", value: frong, class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-12, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-1, R-8], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-24, field: product.mechanism, value: "Onchain metadata extraData xVerificationToken names x_handle zacklabadie and wallet_address 0xE19537029b8013DC37c55d509b0a5038C7C5cE58, matching the creation-tx from address", class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-25, field: team.identity, value: "@frongcommunity bio and DexScreener community claim name @zacklabadie as the creator; @zacklabadie bio is product designer @uniswap", class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-12, R-16, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@frongcommunity2.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T03:15:00Z, receipt_ids: [R-12, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@frongcommunity_.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T03:15:00Z, receipt_ids: [R-12, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: economics.metric, value: "Gecko FRONG/WETH 0.25% market_cap_usd 10118761.54 fdv_usd 10057956.2464063", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-29, field: activity.status, value: "Gecko trending_pools this pass includes FRONG/WETH 0.25% volume_usd.h24 6100678.43 reserve_in_usd 1042615.69", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-30, field: deployment.address, value: "0x000000e200088D55C39a11F609E5F667729ad49b", class: verified, observed_at: 2026-09-03T03:22:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [REP-2, REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-14, CLM-16, CLM-17]
    material_effect: "24h volume is $6.099M on the Gecko flagship pool, $6.112M on DexScreener for the same pool, $8.601M on the Gecko token, and $7.713M on Blockscout; a card that collapses them would misstate activity"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-13, CLM-15]
    material_effect: "Flagship-pool liquidity is $1.043M on Gecko reserve_in_usd and $0.879M on DexScreener liquidity.usd"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "pools.trade Instant Launch minted FRONG into a Uniswap v4 ETH pool"
    summary: "Tx 0xbe6b90c5… to LiquidityLauncher 0x00004c4c…D4e9 created UERC20 FRONG and seeded a hookless native-ETH 0.25% Uniswap v4 pool."
    occurred_at: 2026-07-30T20:16:59Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-1, R-4, R-5]
  - id: EVT-2
    type: company
    title: "MEXC listed FRONG on Meme+"
    summary: "MEXC announced FRONG on ROBINHOOD at 0x6245e67a…0c47 in the Meme+ zone, listing 2026-07-31T06:30Z."
    occurred_at: 2026-07-31T06:30:00Z
    observed_at: 2026-09-03T03:25:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-3
    type: ct
    title: "DexScreener community takeover and @frongcommunity CA post"
    summary: "DexScreener records a community claim on 2026-08-06. The same day @frongcommunity pinned the token CA and called the account community-owned."
    occurred_at: 2026-08-06T21:28:27Z
    observed_at: 2026-09-03T03:33:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-13, R-16]
  - id: EVT-4
    type: onchain
    title: "Gecko flagship FRONG/WETH 0.25% at $6.1M 24h volume"
    summary: "Gecko FRONG/WETH 0.25% pool 0xacea…521a on uniswap-pools-trade: 24h volume $6.099M, reserve $1.043M. DexScreener same pair $6.112M volume."
    occurred_at: 2026-09-03T03:30:00Z
    observed_at: 2026-09-03T03:30:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8, R-9, R-11]
  - id: EVT-5
    type: ct
    title: "@zacklabadie posted creator-fee release for FRONG buyback"
    summary: "@zacklabadie posted that all $FRONG creator fees (13.2 ETH) were released to buy back and burn FRONG, with a Blockscout tx link."
    occurred_at: 2026-08-12T20:52:02Z
    observed_at: 2026-09-03T03:18:00Z
    affected_fields: [economics.metric, control.privileged-role]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "FRONG 0x6245e67affA44a23077f0Ea7f981a8DC743a0c47", url: "https://robinhoodchain.blockscout.com/address/0x6245e67affa44a23077f0ea7f981a8dc743a0c47", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-11, CLM-17, CLM-18, CLM-23, CLM-30, EVT-1], excerpt: "API v2: hash 0x6245e67affA44a23077f0Ea7f981a8DC743a0c47 is_contract true is_verified true name UERC20 creator_address_hash 0x000000e200088D55C39a11F609E5F667729ad49b creation_transaction_hash 0xbe6b90c58c017b4754a6a6ee6d65be9a682d2b79de0142954ae345f1dce8f35c; token name frong symbol FRONG decimals 18 total_supply 1e27 holders_count 15165 circulating_market_cap 8789950.28649046 volume_24h 7712538.392330718." }
  - { id: R-2, publisher: Blockscout, title: "FRONG token endpoint", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x6245e67affA44a23077f0Ea7f981a8DC743a0c47", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-6, CLM-18], excerpt: "address_hash 0x6245e67affA44a23077f0Ea7f981a8DC743a0c47 name frong symbol FRONG decimals 18 total_supply 1000000000000000000000000000 type ERC-20 holders_count 15165 circulating_market_cap 8789950.28649046 volume_24h 7712538.392330718 exchange_rate 0.00879." }
  - { id: R-3, publisher: Blockscout, title: "UERC20 verified source", url: "https://robinhoodchain.blockscout.com/address/0x6245e67affA44a23077f0Ea7f981a8DC743a0c47?tab=contract", published_at: null, accessed_at: 2026-09-03T03:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, CLM-19], excerpt: "API v2 smart-contracts: name UERC20 compiler v0.8.28+commit.7893614a is_verified true is_fully_verified false is_partially_verified true file_path src/tokens/UERC20.sol verified_at 2026-07-30T20:20:40Z. Functions include name symbol decimals totalSupply creator graffiti metadata; no owner. Constructor reads IUERC20Factory.getParameters and mints to params.recipient." }
  - { id: R-4, publisher: Blockscout, title: "FRONG creation tx 0xbe6b90c5…", url: "https://robinhoodchain.blockscout.com/tx/0xbe6b90c58c017b4754a6a6ee6d65be9a682d2b79de0142954ae345f1dce8f35c", published_at: 2026-07-30T20:16:59Z, accessed_at: 2026-09-03T03:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-7, CLM-10, CLM-24, EVT-1], excerpt: "timestamp 2026-07-30T20:16:59.000000Z status ok block_number 23595790 method multicall from 0xE19537029b8013DC37c55d509b0a5038C7C5cE58 to LiquidityLauncher 0x00004c4ccc709Ef590F7C81102C0689F0263D4e9. createToken name frong symbol FRONG decimals 18 supply 1e27; InstantLaunchStrategy 0x60D73b21cDf2EA846ab3d58699BBbb8F29d72491. UNI-V4-POSM 409801 FRONG/ETH 0.25% No Hook." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode and UERC20 calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-4, CLM-6, CLM-19, CLM-24, EVT-1], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32a477b (53102459). eth_getCode token 7154 bytes; factory 13380; launcher 3747; strategy 0x60D73b21…2491 10774; v3 pool 22142. name() frong; symbol() FRONG; decimals 18; totalSupply 1e27; owner() revert; creator() 0x00004c4c…D4e9. metadata description it's frong, baby; extraData x_handle zacklabadie wallet 0xE195…cE58." }
  - { id: R-6, publisher: Blockscout, title: "UERC20Factory 0x000000e2…d49b", url: "https://robinhoodchain.blockscout.com/address/0x000000e200088d55c39a11f609e5f667729ad49b", published_at: null, accessed_at: 2026-09-03T03:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-30], excerpt: "API v2: hash 0x000000e200088D55C39a11F609E5F667729ad49b is_contract true is_verified true name UERC20Factory. RPC eth_getCode 13380 bytes." }
  - { id: R-7, publisher: Blockscout, title: "LiquidityLauncher 0x00004c4c…D4e9", url: "https://robinhoodchain.blockscout.com/address/0x00004c4ccc709ef590f7c81102c0689f0263d4e9", published_at: null, accessed_at: 2026-09-03T03:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, EVT-1], excerpt: "API v2: hash 0x00004c4ccc709Ef590F7C81102C0689F0263D4e9 is_contract true is_verified true name LiquidityLauncher. RPC eth_getCode 3747 bytes. Tagged LiquidityLauncher." }
  - { id: R-8, publisher: DexScreener, title: "FRONG token pairs on Robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x6245e67affA44a23077f0Ea7f981a8DC743a0c47", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-5, CLM-9, CLM-14, CLM-15, CLM-23, EVT-4], excerpt: "pair 0xacea8920877840033f0275c37f9b61550b5326917e948bcf8339714d96f9521a labels v4 FRONG/ETH volume.h24 6112318.8 liquidity.usd 878519.25 marketCap 10097960 pairCreatedAt 1785442619000. pair 0x09a431261E3d0F1dc2f7e0b14718DBBBCBe19Ae4 labels v3 FRONG/WETH volume.h24 1196949.03 liquidity.usd 135827.49. info.websites https://pools.trade socials x.com/frongcommunity t.me/FrongCommunity." }
  - { id: R-9, publisher: GeckoTerminal, title: "FRONG/WETH 0.25% pools.trade pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xacea8920877840033f0275c37f9b61550b5326917e948bcf8339714d96f9521a", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-12, CLM-13, CLM-28, EVT-4], excerpt: "name FRONG / WETH 0.25% pool_fee_percentage 0.25 pool_created_at 2026-07-30T20:16:59Z reserve_in_usd 1042502.0337 volume_usd.h24 6098937.85448896 fdv_usd 10057956.2464063 market_cap_usd 10118761.54. relationships.dex uniswap-pools-trade quote robinhood_0x0000000000000000000000000000000000000000 base robinhood_0x6245e67affa44a23077f0ea7f981a8dc743a0c47." }
  - { id: R-10, publisher: GeckoTerminal, title: "FRONG token and pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x6245e67affA44a23077f0Ea7f981a8DC743a0c47", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-16], excerpt: "address 0x6245e67affa44a23077f0ea7f981a8dc743a0c47 name frong symbol FRONG decimals 18 volume_usd.h24 8601035.97549392 fdv_usd 10057956.2441064 market_cap_usd 10214274.83 total_reserve_in_usd 955656.75 coingecko_coin_id frong. top_pools 0xacea…521a, 0x20d317…bc7f, 0x09a431…9Ae4." }
  - { id: R-11, publisher: GeckoTerminal, title: "Robinhood trending pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools?page=1", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-29, EVT-4], excerpt: "trending_pools page 1 includes robinhood_0xacea8920877840033f0275c37f9b61550b5326917e948bcf8339714d96f9521a FRONG / WETH 0.25% volume_usd.h24 6100678.42666917 reserve_in_usd 1042615.6918 market_cap_usd 10212887.23." }
  - { id: R-12, publisher: "@frongcommunity", title: "Frong profile", url: "https://x.com/frongcommunity", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-21, CLM-22, CLM-25, CLM-26, CLM-27], excerpt: "Display name Frong, handle @frongcommunity. Bio: it's frong, baby created by @zacklabadie in the @tradepools trenches. community-owned account. stay $FRONG. Website t.me/frongcommunity. Joined August 2026. 2533 followers." }
  - { id: R-13, publisher: "@frongcommunity", title: "Pinned CA post", url: "https://x.com/frongcommunity/status/2085478133419901415", published_at: 2026-08-06T21:28:27Z, accessed_at: 2026-09-03T03:33:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-21, CLM-22, EVT-3], excerpt: "frong:native was forged by @zacklabadie in the @tradepools trenches this is the community-owned account not official. no team. just FRONG CA: 0x6245e67affA44a23077f0Ea7f981a8DC743a0c47 Join Telegram: https://t.me/FrongCommunity" }
  - { id: R-14, publisher: Uniswap Labs, title: "Pools.trade: A New Way to Launch on Robinhood Chain", url: "https://blog.uniswap.org/pools-trade-a-new-way-to-launch-on-robinhood-chain", published_at: 2026-08-05, accessed_at: 2026-09-03T03:25:00Z, kind: announcement, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-10], excerpt: "Say hello to Pools, a new launchpad built for Robinhood Chain. There are two ways to launch a token on Pools. Both start with a fixed supply of 1 billion and end in a Uniswap v4 pool. Crowd Launch and Instant Launch." }
  - { id: R-15, publisher: MEXC, title: "First in Market: FRONG Now Live on MEXC Meme+", url: "https://www.mexc.com/announcements/article/first-in-market-17827791537176", published_at: 2026-07-31T06:30:00Z, accessed_at: 2026-09-03T03:25:00Z, kind: announcement, authority: independent, authenticity: confirmed, supports: [EVT-2], excerpt: "We're thrilled to announce the addition of FRONG to our Meme+ Trading Zone. Token FRONG Network ROBINHOOD Contract Address 0x6245e67affA44a23077f0Ea7f981a8DC743a0c47 Listing Time Jul 31, 2026, 06:30 (UTC) Withdrawal Time Aug 1, 2026, 06:30 (UTC)." }
  - { id: R-16, publisher: DexScreener, title: "FRONG/ETH pair page community takeover", url: "https://dexscreener.com/robinhood/0xacea8920877840033f0275c37f9b61550b5326917e948bcf8339714d96f9521a", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-25, EVT-3], excerpt: "Community Takeover. A community claimed ownership for this token on Aug 06 2026. Community Claim: This token was created by Uniswap product designer @zacklabadie and the community came… Website https://pools.trade Twitter https://x.com/frongcommunity Telegram https://t.me/FrongCommunity. forged by @zacklabadie in the @tradepools trenches." }
  - { id: R-17, publisher: Telegram, title: "t.me/FrongCommunity", url: "https://t.me/FrongCommunity", published_at: null, accessed_at: 2026-09-03T03:25:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "og title FRONG COMMUNITY. 1342 members, 142 online. View in Telegram tg://resolve?domain=FrongCommunity." }
  - { id: R-18, publisher: "@zacklabadie", title: "$frong creator fees released", url: "https://x.com/zacklabadie/status/2087643293412643222", published_at: 2026-08-12T20:52:02Z, accessed_at: 2026-09-03T03:18:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-25, EVT-5], excerpt: "all $frong creator fees (13.2 ETH) have been released. they're being used to buy back and burn frong https://robinhoodchain.blockscout.com/tx/0x07cdad7ab433f09bfbab7daeef5b0ce2291138b21f7edf74fa68ad3743a7042b Bio: product designer @uniswap." }
  - { id: R-19, publisher: "@frongcommunity2", title: "Frong profile clone", url: "https://x.com/frongcommunity2", published_at: null, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26], excerpt: "Display name Frong, handle @frongcommunity2. Bio: it's frong, baby created by @zacklabadie in the @tradepools trenches. community-owned account. stay $FRONG. 126 followers. Same bio stem as @frongcommunity." }
  - { id: R-20, publisher: "@frongcommunity_", title: "Frong SUPPORT profile clone", url: "https://x.com/frongcommunity_", published_at: null, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27], excerpt: "Display name Frong SUPPORT, handle @frongcommunity_. Bio: it's frong, baby created by @zacklabadie in the @tradepools trenches. community-owned account. stay $FRONG. 86 followers. Same bio stem as @frongcommunity." }
  - { id: R-21, publisher: Blockscout, title: "Uniswap v3 FRONG/WETH pool 0x09a431…9Ae4", url: "https://robinhoodchain.blockscout.com/address/0x09a431261e3d0f1dc2f7e0b14718dbbbcbe19ae4", published_at: null, accessed_at: 2026-09-03T03:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "API v2: hash 0x09a431261E3d0F1dc2f7e0b14718DBBBCBe19Ae4 is_contract true is_verified true name UniswapV3Pool. RPC eth_getCode 22142 bytes." }

gaps:
  - { priority: P0, question: "Is UNI-V4-POSM 409801 still held by the pools.trade FeeSplitter, and does locked_liquidity_percentage stay 100?", checked: "Creation tx minted position 409801 FRONG/ETH 0.25% No Hook; Gecko locked_liquidity_percentage was null this pass", next: "eth_call ownerOf(409801) on PositionManager 0x58daec3116aae6D93017bAAea7749052E8a04fA7" }
  - { priority: P1, question: "How does InstantLaunchStrategy 0x60D73b21…2491 relate to the current InstantLaunchStrategy 0x23f82095…27f1 in the pools-trade packet?", checked: "Creation tx called 0x60D73b21…2491; Blockscout name empty is_verified false; eth_getCode 10774 bytes", next: "compare bytecode and Blockscout source for 0x23f82095…27f1" }
  - { priority: P1, question: "Is there an audit of UERC20.sol / LiquidityLauncher for this deployment?", checked: "Token source header, DexScreener, Gecko, X profile, 2026-09-03", next: "read Uniswap/liquidity-launcher README and any audit links on the pad docs" }
  - { priority: P2, question: "Does frongcoin.site belong to this token?", checked: "Search hit lists CA 0x18b18ccee6227572850b071ac4f18965827f9fcd, not 0x6245e67a…0c47", next: "open frongcoin.site and record the published contract as a contrary identity note" }
---

# FRONG — research packet

## What it is

Uniswap v4 Instant Launch ERC-20 on Robinhood Chain: LiquidityLauncher.multicall created a 1 billion-supply UERC20 and opened a hookless native-ETH 0.25% pool. Holders trade FRONG against ETH on that pools.trade book and later WETH and USDG books. @frongcommunity publishes the contract. The token is not the pools.trade pad.

Themes: memecoin, launchpad
