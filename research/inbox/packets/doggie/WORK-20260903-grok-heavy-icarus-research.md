---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: doggie
name: DOGGIE
packet_tier: seed
as_of: 2026-09-03T03:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [doggie]
allowed_paths:
  - research/inbox/packets/doggie/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Doggie Mode
  aliases: [DOGGIE, "Doggie"]
  symbols: [DOGGIE]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://doggiemode.com
  official_handle: "@DoggieMode"
  repository: "NULL — no GitHub org or repository URL on doggiemode.com, the @DoggieMode profile, DexScreener, Gecko, CMC, or GitHub search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED"
        - "DOGGIE is the ERC-20 at 0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18 created through that launcher; entity_kind token, not protocol"
        - "Official surfaces are doggiemode.com / @DoggieMode, not app.long.xyz / @longdotxyz"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI paired to NVDA at artificialinu.com / @ArtificiallyInu"
        - "DOGGIE is Doggie Mode / DOGGIE paired to TSLA 0x322F0929c4625eD5bAd873c95208D54E1c003b2d"
        - "No shared domain, handle, or reproduced token address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at @bankrbot with a separate stock-paired factory"
        - "DOGGIE create tx 0xca19843e…7445 called LongLauncher.create, not a Bankr factory"
        - "Gecko labels the DOGGIE/TSLA pool dex as bankr-robinhood; DexScreener and CMC label Uniswap v4; the factory of record is LongLauncher"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xa9eF…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create minted Doggie Mode / DOGGIE into Uniswap v4 pool 0x141b…f3f8 quoted against Tesla • Robinhood Token TSLA 0x322F…3b2d. doggiemode.com lists the CA and @DoggieMode; @DoggieMode posted doggiemode.com. Gecko DOGGIE/TSLA reserve_in_usd 540680 volume_usd.h24 1039630 this pass. [R-1] [R-2] [R-3] [R-4] [R-10] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-13], note: "" }

links:
  - { kind: site, url: "https://doggiemode.com/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/DoggieMode", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/DoggieModePortal", authenticity: confirmed }
  - { kind: app, url: "https://app.long.xyz/", authenticity: unconfirmed }

deployments:
  - label: DOGGIE token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:29:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-2, R-4]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-4, R-7]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-6]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-8]
  - label: Tesla • Robinhood Token (pair quote)
    role: token
    address:
      value: "0x322F0929c4625eD5bAd873c95208D54E1c003b2d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-9, R-20]

metrics:
  - { kind: volume_24h, value: 1039630.54, currency: USD, as_of: 2026-09-03T03:30:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x141be60316aeb3aa7c0e0d8e4fbdc0aa78105e6e462cfc03b8a0f0c59f0bf3f8 volume_usd.h24 (DOGGIE/TSLA pool, not Gecko token all-pools)", class: claim, receipt_ids: [R-11] }
  - { kind: tvl, value: 540680.98, currency: USD, as_of: 2026-09-03T03:30:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x141b…f3f8 reserve_in_usd (DOGGIE/TSLA pool)", class: claim, receipt_ids: [R-11] }
  - { kind: market_cap, value: 3302094.98, currency: USD, as_of: 2026-09-03T03:30:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x141b…f3f8 fdv_usd (market_cap_usd 0.0)", class: claim, receipt_ids: [R-11] }
  - { kind: volume_24h, value: 1043346, currency: USD, as_of: 2026-09-03T03:30:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18 pair 0x141b…f3f8 DOGGIE/TSLA Uniswap v4 volume.h24", class: claim, receipt_ids: [R-10] }
  - { kind: tvl, value: 531673.15, currency: USD, as_of: 2026-09-03T03:30:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xa9eF…1e18 pair 0x141b…f3f8 liquidity.usd", class: claim, receipt_ids: [R-10] }
  - { kind: holders, value: 1405, currency: null, as_of: 2026-09-03T03:29:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/addresses/0xa9eF…1e18 token.holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663). eth_blockNumber 0x32a49dc (53103068). Token 0xa9eF…1e18 eth_getCode 44 bytes 0x3d3d3d3d363d3d37363d73 3be8b97f…c599 5af43d3d93803e602a57fd5bf3 (EIP-1167 clone of 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599). name Doggie Mode; symbol DOGGIE; decimals 18; totalSupply 1e27; owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Airlock code 5695 B; LongLauncher 5826 B; DopplerERC20V1Factory 1912 B; impl 13927 B. TSLA code 283 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-3, R-5, R-6, R-7, R-8, R-9], result: "Blockscout api/v2: token 0xa9eF…1e18 is_contract true is_verified true name Doggie Mode proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator_address_hash 0x1B37…b69a creation_transaction_hash 0xca19843e…7445. Token symbol DOGGIE holders_count 1405 total_supply 1e27. Tx 2026-08-26T21:41:52Z block 46915646 from EOA 0x23a3…0e85 to LongLauncher 0x22e9…eeED method create; decoded name Doggie Mode symbol DOGGIE quote 0x322F…3b2d tokenFactory 0x1B37…b69a. TSLA name Tesla • Robinhood Token symbol TSLA BeaconProxy. owner() Airlock 0xeb7C…0862." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-10, R-13, R-14, R-15], result: "doggiemode.com HTML lists CA 0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18, TSLA 0x322F…3b2d, https://x.com/DoggieMode, https://t.me/DoggieModePortal and https://app.long.xyz/. @DoggieMode posted https://Doggiemode.com on 2026-08-28. DexScreener info.websites https://doggiemode.com/ socials x.com/DoggieMode. Gecko token info websites https://doggiemode.com twitter_handle doggiemode." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-10, R-11, R-12], result: "Gecko pool 0x141b…f3f8 name DOGGIE / TSLA pool_created_at 2026-08-26T21:41:52Z volume_usd.h24 1039630.54 reserve_in_usd 540680.98 fdv_usd 3302094.98 market_cap_usd 0.0 dex bankr-robinhood quote robinhood_0x322f…3b2d. DexScreener same pair labels v4 dexId uniswap liquidity.usd 531673.15 volume.h24 1043346 fdv/marketCap 3338438 pairCreatedAt 1787780512000. Gecko token volume_usd.h24 1109367.23 is all-pools, not the TSLA book." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-20], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194. tokenSymbol TSLA tokenName Tesla • Robinhood Token deployments[0].contractAddress 0x322F0929c4625eD5bAd873c95208D54E1c003b2d chainId 4663 status ASSET_STATUS_ACTIVE isin US88160R1014." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create minted a 1e9-supply DopplerERC20V1 clone (EIP-1167) named Doggie Mode / DOGGIE, quoted against Tesla • Robinhood Token TSLA, into Uniswap v4 pool 0x141b…f3f8", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-3, R-4, R-10], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://doggiemode.com", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-10, R-13, R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@DoggieMode", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-10, R-13, R-14, R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: "DOGGIE", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-3, R-4, R-11], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED; token creator_address_hash DopplerERC20V1Factory 0x1B37D3a72082029c44B35B604Ea473617580b69a; create tx 0xca19843e…7445 at 2026-08-26T21:41:52Z from EOA 0x23a3…0e85", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-3, R-5, R-6], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset Tesla • Robinhood Token TSLA 0x322F0929c4625eD5bAd873c95208D54E1c003b2d", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-3, R-9, R-11, R-20], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4; primary book DOGGIE/TSLA pool 0x141be60316aeb3aa7c0e0d8e4fbdc0aa78105e6e462cfc03b8a0f0c59f0bf3f8. DexScreener labels v4 / dexId uniswap; CMC names Uniswap v4 (Robinhood). Gecko names dex bankr-robinhood on the same pool id.", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-10, R-11, R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: identity.name, value: "Doggie Mode", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-3, R-11, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Distinct from census LONG (the factory) and Artificial Inu ($AI/NVDA). Site says Launched via long.xyz. Token is a graduation of LongLauncher, not the pad.", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Gecko DOGGIE/TSLA volume_usd.h24 1039630.54 reserve_in_usd 540680.98 fdv_usd 3302094.98 at 2026-09-03T03:30:00Z (pool slice, not Gecko token all-pools 1109367.23)", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "DexScreener same pair liquidity.usd 531673.15 volume.h24 1043346 fdv/marketCap 3338438 at 2026-09-03T03:30:00Z", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-10], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: 1405, class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: control.owner, value: "owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 named Airlock on Blockscout; 5695 bytes code, is_verified true", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on doggiemode.com, the X profile, DexScreener, Gecko, CMC (isAudited false), or the DopplerERC20V1 source this pass", class: unknown, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@DoggieMode.role", value: project, class: claim, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@DoggieMode.slug", value: doggie, class: claim, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-1, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-2, R-4, R-10], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "Site CTA is Swap Robinhood ETH → $DOGGIE; the deep book this pass is DOGGIE/TSLA. Secondary DexScreener DOGGIE/ETH Uniswap v4 0xd34a…75e8 liquidity.usd 10192.42 volume.h24 66304.78", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-24, field: candidate, value: "doggie | DOGGIE | @DoggieMode | https://doggiemode.com — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "CoinMarketCap slug doggie-mode dateAdded 2026-09-02T18:48:01Z; platforms[0] Robinhood Chain 4663 CA 0xa9eF…1e18; urls.website doggiemode.com urls.twitter twitter.com/DoggieMode", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-16, R-17], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko DOGGIE/TSLA 24h volume $1.04M, liquidity $541k"
    summary: "Gecko pool 0x141b…f3f8 volume_usd.h24 1039630 reserve_in_usd 540680 fdv_usd 3302095."
    occurred_at: 2026-09-03T03:30:00Z
    observed_at: 2026-09-03T03:30:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-2
    type: ct
    title: "@NovaFox posted $DOGGIE/TSLA market cap 3.6"
    summary: "@NovaFox posted $DOGGIE / $TSLA current MC 3.6, 1 week old, over 1k holders."
    occurred_at: 2026-09-03T01:31:39Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-3
    type: company
    title: "@DoggieMode posted $DOGGIE live on CoinMarketCap"
    summary: "@DoggieMode posted $DOGGIE is live there on CoinMarketCap, quoting the CMC URL."
    occurred_at: 2026-09-02T19:18:05Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-4
    type: ct
    title: "CoinMarketCap listed Doggie Mode / DOGGIE"
    summary: "CMC slug doggie-mode dateAdded 2026-09-02T18:48:01Z; CA 0xa9eF…1e18 on Robinhood Chain 4663."
    occurred_at: 2026-09-02T18:48:01Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: company
    title: "@DoggieMode posted doing things with $DOGGIE"
    summary: "@DoggieMode posted a video with the line Grok and $DOGGIE - doing things."
    occurred_at: 2026-09-01T19:09:00Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-6
    type: company
    title: "@DoggieMode posted doggiemode.com is live"
    summary: "@DoggieMode posted Good Domain. Good $DOGGIE. Site is live. https://Doggiemode.com"
    occurred_at: 2026-08-28T18:10:16Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-7
    type: onchain
    title: "LongLauncher.create minted Doggie Mode vs TSLA"
    summary: "Tx 0xca19843e…7445 at 2026-08-26T21:41:52Z created DOGGIE 0xa9eF…1e18 quoted vs TSLA."
    occurred_at: 2026-08-26T21:41:52Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2, R-3]

receipts:
  - { id: R-1, publisher: Doggie Mode, title: "doggiemode.com home", url: "https://doggiemode.com/", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-8, CLM-10, CLM-13, CLM-19, CLM-20, CLM-23, CLM-24], excerpt: "title Doggie Mode · $DOGGIE. meta description: The official unofficial companion to tokenized $TSLA. Independent meme project on Robinhood Chain. Created with Grok. og:url https://doggiemode.com/. Body: $DOGGIE is paired with tokenized $TSLA. CA 0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18. $TSLA 0x322F0929c4625eD5bAd873c95208D54E1c003b2d. Created with Grok. Managed by Grok Bot. Launched via long.xyz. Links x.com/DoggieMode t.me/DoggieModePortal app.long.xyz." }
  - { id: R-2, publisher: Blockscout, title: "Address 0xa9eF…1e18 Doggie Mode / DOGGIE", url: "https://robinhoodchain.blockscout.com/address/0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-10, CLM-12, CLM-16, CLM-21, CLM-24, EVT-7], excerpt: "hash 0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18 name Doggie Mode is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xca19843e46c06ad7310738dd9b4cec05c5efc91550b3008fcd80b08af6cd7445. token symbol DOGGIE holders_count 1405 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-3, publisher: Blockscout, title: "create tx 0xca19843e…7445", url: "https://robinhoodchain.blockscout.com/tx/0xca19843e46c06ad7310738dd9b4cec05c5efc91550b3008fcd80b08af6cd7445", published_at: 2026-08-26T21:41:52Z, accessed_at: 2026-09-03T03:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-8, CLM-13, CLM-22, EVT-7], excerpt: "timestamp 2026-08-26T21:41:52.000000Z status ok result success block_number 46915646 from 0x23a3dD64bf8F5355C1f05970449bdd234Efa0e85 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data includes 1000000000000000000000000000, quote 0x322F0929c4625eD5bAd873c95208D54E1c003b2d, tokenFactory 0x1B37D3a72082029c44B35B604Ea473617580b69a, name Doggie Mode, symbol DOGGIE." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on DOGGIE", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-10, CLM-12, CLM-17, CLM-21], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32a49dc (53103068). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name Doggie Mode symbol DOGGIE decimals 18 totalSupply 1e27. owner() 0xeb7c0347…0862. factory() revert. Airlock 5695 B LongLauncher 5826 B DopplerERC20V1Factory 1912 B impl 13927 B TSLA 283 B." }
  - { id: R-5, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-13, CLM-22], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305. DOGGIE create tx called create on this contract." }
  - { id: R-6, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768. Token creator_address_hash on 0xa9eF…1e18." }
  - { id: R-7, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: 2026-07-01T19:42:07Z, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07.028313Z. Token EIP-1167 implementation." }
  - { id: R-8, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9 creation_transaction_hash 0x8ffd957b1985578fd9bfb8ce651bf546cb262f3b157f02f93b26c585046b291a. RPC owner() on DOGGIE returns this address." }
  - { id: R-9, publisher: Blockscout, title: "Token 0x322F…3b2d Tesla • Robinhood Token / TSLA", url: "https://robinhoodchain.blockscout.com/token/0x322F0929c4625eD5bAd873c95208D54E1c003b2d", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "api/v2/tokens: name Tesla • Robinhood Token symbol TSLA decimals 18 total_supply 8476202000000000000000 holders_count 51121 type ERC-20. Address page name BeaconProxy is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2 creator 0x4783C67b63dE2B358Ac5951a7D41F47A38F3C046." }
  - { id: R-10, publisher: DexScreener, title: "latest/dex/tokens DOGGIE", url: "https://api.dexscreener.com/latest/dex/tokens/0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-9, CLM-15, CLM-21, CLM-23], excerpt: "6 robinhood uniswap pairs. Top pairAddress 0x141be60316aeb3aa7c0e0d8e4fbdc0aa78105e6e462cfc03b8a0f0c59f0bf3f8 labels v4 base DOGGIE 0xa9eF…1e18 quote TSLA 0x322F…3b2d liquidity.usd 531673.15 volume.h24 1043346 fdv 3338438 marketCap 3338438 pairCreatedAt 1787780512000. info.websites https://doggiemode.com/ socials x.com/DoggieMode t.me/DoggieModePortal. Second DOGGIE/ETH v4 0xd34a…75e8 liquidity.usd 10192.42 volume.h24 66304.78." }
  - { id: R-11, publisher: GeckoTerminal, title: "DOGGIE/TSLA pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x141be60316aeb3aa7c0e0d8e4fbdc0aa78105e6e462cfc03b8a0f0c59f0bf3f8", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-11, CLM-14, EVT-1], excerpt: "name DOGGIE / TSLA address 0x141be60316aeb3aa7c0e0d8e4fbdc0aa78105e6e462cfc03b8a0f0c59f0bf3f8 pool_created_at 2026-08-26T21:41:52Z fdv_usd 3302094.975 market_cap_usd 0.0 volume_usd.h24 1039630.54178449 reserve_in_usd 540680.9758. dex bankr-robinhood quote robinhood_0x322f0929c4625ed5bad873c95208d54e1c003b2d. transactions.h24 buys 2797 sells 2989." }
  - { id: R-12, publisher: GeckoTerminal, title: "Doggie Mode token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "name Doggie Mode symbol DOGGIE decimals 18 total_supply 1e27 price_usd 0.003302094975 fdv_usd 3302094.97547654 market_cap_usd null volume_usd.h24 1109367.22562998 total_reserve_in_usd 302677.74 coingecko_coin_id doggie-mode. Token 24h volume is all-pools, not the TSLA book." }
  - { id: R-13, publisher: GeckoTerminal, title: "Doggie Mode token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18/info", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3], excerpt: "websites https://doggiemode.com twitter_handle doggiemode telegram_handle null. description: Inspired by Tesla's $20 Dog Mode chew toy and the official unofficial companion to tokenized $TSLA. Created with Grok. Managed by Grok Bot. holders.count 1409 last_updated 2026-09-03T02:47:22Z. gt_verified true categories Dog, Meme, Ai, Animal." }
  - { id: R-14, publisher: "@DoggieMode", title: "Doggie Mode profile", url: "https://x.com/DoggieMode", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-19, CLM-20], excerpt: "Display name Doggie Mode, handle @DoggieMode. Bio: The unofficial companion to tokenized $TSLA. $DOGGIE - Built by Grok. Managed by Grok Bot. Independent meme. Not endorsed by Tesla or xAI. Followers 622." }
  - { id: R-15, publisher: "@DoggieMode", title: "Site is live", url: "https://x.com/DoggieMode/status/2093400791973494897", published_at: 2026-08-28T18:10:16Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, EVT-6], excerpt: "Good Domain. Good $DOGGIE. Site is live. https://Doggiemode.com Doggie wonders what comes next" }
  - { id: R-16, publisher: "@DoggieMode", title: "$DOGGIE is live on CoinMarketCap", url: "https://x.com/DoggieMode/status/2095229795848376394", published_at: 2026-09-02T19:18:05Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-25, EVT-3], excerpt: "$DOGGIE is live there . . . Coin Market Cap. Quotes status 2095229113388953910 CMC: https://coinmarketcap.com/currencies/doggie-mode/" }
  - { id: R-17, publisher: CoinMarketCap, title: "Doggie Mode / DOGGIE", url: "https://coinmarketcap.com/currencies/doggie-mode/", published_at: 2026-09-02T18:48:01Z, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25, EVT-4], excerpt: "detail.name Doggie Mode symbol DOGGIE slug doggie-mode dateAdded 2026-09-02T18:48:01Z isAudited false. urls.website https://doggiemode.com/ urls.twitter https://twitter.com/DoggieMode urls.chat t.me/DoggieModePortal. platforms[0] CA 0xa9eFe2Fc94dE79734C03051515F48f254Ce61e18 Robinhood Chain 4663. statistics.price 0.0033466 volume24h 1112756.81 fullyDilluttedMarketCap 3346603.07. topLiquidityPools[0] Uniswap v4 (Robinhood) TSLA/DOGGIE." }
  - { id: R-18, publisher: "@NovaFox", title: "$DOGGIE breaking barriers", url: "https://x.com/NovaFox/status/2095323805011075211", published_at: 2026-09-03T01:31:39Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "$DOGGIE breaking barriers left and right, defeating the dips and pushing forward. He's got that 5m mark in his sights! @DoggieMode on @RobinhoodApp Don't get sidelined! Join the movement! $DOGGIE / $TSLA Crypto Tokenized Stock Pair Current MC - 3.6 1 Week Old Over 1k holders" }
  - { id: R-19, publisher: Telegram, title: "t.me/DoggieModePortal", url: "https://t.me/DoggieModePortal", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3], excerpt: "og:title Doggie Portal. og:description The portal to Doggie Mode Community. tgme_page_title Doggie Portal. tgme_page_extra 113 subscribers. No contract address in the public preview HTML this pass." }
  - { id: R-20, publisher: Robinhood, title: "GET /rhj/assets TSLA row", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-11], excerpt: "HTTP 200. assets length 194. tokenSymbol TSLA tokenName Tesla • Robinhood Token deployments[0].contractAddress 0x322F0929c4625eD5bAd873c95208D54E1c003b2d chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE isin US88160R1014." }
  - { id: R-21, publisher: "@DoggieMode", title: "doing things with $DOGGIE", url: "https://x.com/DoggieMode/status/2094865121117946097", published_at: 2026-09-01T19:09:00Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "Grok and $DOGGIE - doing things." }

gaps:
  - { priority: P0, question: "Does Airlock 0xeb7C…0862 hold remaining privileged paths on the DopplerERC20V1 clone (mint, pause, upgrade of the implementation)?", checked: "owner() returns Airlock; token is EIP-1167 of DopplerERC20V1 src/tokens/DopplerERC20V1.sol, partially verified; no token-level owner besides Airlock this pass", next: "read DopplerERC20V1 verified source for mint/burn/pause and Airlock exit liquidity on the TSLA pool" }
  - { priority: P1, question: "Why does Gecko label the DOGGIE/TSLA pool dex as bankr-robinhood while the create tx is LongLauncher and DexScreener/CMC say Uniswap v4?", checked: "Gecko relationships.dex bankr-robinhood; DexScreener dexId uniswap labels v4; CMC exchangeName Uniswap v4 (Robinhood); create to LongLauncher 0x22e9…eeED, 2026-09-03", next: "compare the pool manager / hook address in the create calldata to Bankr vs LONG Doppler deployments" }
  - { priority: P1, question: "Is there an audit whose scope includes DopplerERC20V1 as deployed at 0x3Be8…C599?", checked: "doggiemode.com, @DoggieMode, DexScreener, Gecko, CMC isAudited false, Blockscout source header, 2026-09-03", next: "LONG litepaper / Doppler docs if they name an auditor" }
  - { priority: P2, question: "Does the @DoggieMode profile website field list doggiemode.com, or is the reverse link only the 28 Aug post?", checked: "site HTML lists @DoggieMode; status 2093400791973494897 posts Doggiemode.com; profile website field not copied from X HTML this pass", next: "open the profile website field on x.com/DoggieMode" }
---

# DOGGIE — research packet

## What it is

A 1B-supply memecoin paired to tokenized Tesla on Robinhood Chain. LongLauncher minted DOGGIE as a DopplerERC20V1 clone into a Uniswap v4 DOGGIE/TSLA pool. Holders swap DOGGIE against TSLA. doggiemode.com and @DoggieMode publish the contract.

Themes: memecoin, stock-paired:TSLA, dog, rwa

## Why it matters

DOGGIE is a LONG graduation quoted in Tesla • Robinhood Token, not WETH. GET /rhj/assets lists that TSLA address. The DOGGIE/TSLA book is the live pair: Gecko 24h volume about $1.04M and reserve about $541k this pass.

## What could go wrong

USD reserve on the DOGGIE/TSLA book counts both sides, and the quote side is TSLA. owner() is Airlock. Gecko names the pool dex bankr-robinhood while the create transaction is LongLauncher and DexScreener/CMC name Uniswap v4. Secondary DOGGIE/ETH books are thin.

## Product and mechanics

LongLauncher 0x22e9…eeED create at 2026-08-26T21:41:52Z minted Doggie Mode / DOGGIE supply 1e9*1e18 as an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. The create quote is TSLA 0x322F…3b2d. Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. Pool id 0x141b…f3f8. [verified R-2 R-3 R-4]

doggiemode.com says $DOGGIE is paired with tokenized $TSLA and Launched via long.xyz. The site CTA is Swap Robinhood ETH → $DOGGIE. DexScreener's deep book is DOGGIE/TSLA Uniswap v4; a DOGGIE/ETH v4 book 0xd34a…75e8 has about $10k liquidity. [claim R-1] [verified R-10]

## Control and security

owner() returns Airlock 0xeb7C…0862, verified on Blockscout. The token is a 44-byte EIP-1167 clone; implementation DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). [verified R-4 R-7 R-8]

No audit report URL was located this pass. CMC isAudited is false. [unknown]

## Team and provenance

doggiemode.com lists CA 0xa9eF…1e18, TSLA 0x322F…3b2d, @DoggieMode and t.me/DoggieModePortal. @DoggieMode posted https://Doggiemode.com on 2026-08-28. DexScreener and Gecko repeat that site and handle. [verified R-1 R-10 R-13 R-15]

Site copy: created with an AI assistant and managed by a bot. Independent meme project. Not affiliated with or endorsed by Tesla, Inc., Robinhood, or xAI. No public repository URL was located. [claim R-1]

Census LONG is the factory. Artificial Inu is a different LongLauncher token vs NVDA. [claim R-3 R-5]

## Economics and activity

Gecko DOGGIE/TSLA Uniswap-labelled pool 24h volume is 1039630.54 USD and reserve_in_usd is 540680.98 at 2026-09-03T03:30:00Z. fdv_usd is 3302094.98. Gecko token volume_usd.h24 is 1109367.23 across all pools, not the TSLA book. [claim R-11 R-12]

DexScreener same pair: liquidity.usd 531673.15, volume.h24 1043346, fdv/marketCap 3338438. Blockscout holders_count 1405. Pair created 2026-08-26T21:41:52Z. [claim R-2 R-10]

CMC dateAdded 2026-09-02T18:48:01Z; statistics.volume24h 1112756.81; fullyDilluttedMarketCap 3346603.07. [claim R-17]

## Material risks

- Quote token TSLA is a Robinhood Stock Token; pool USD reserve is DOGGIE plus TSLA. [verified R-9 R-11 R-20]
- owner() is Airlock; remaining token privileges were not read in source this pass. [verified R-4 R-8]
- Gecko dex label bankr-robinhood does not match the LongLauncher create tx. [verified R-3 R-11]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: doggiemode.com, Blockscout token/create/LongLauncher/factory/impl/Airlock/TSLA, RPC, DexScreener, Gecko pool/token/info, /rhj/assets, CMC, @DoggieMode profile and three posts, @NovaFox, and Telegram preview were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-2 R-4 R-11]
- Numbers: 1039630.54 is the Gecko DOGGIE/TSLA pool 24h volume, not the 1109367.23 token all-pools figure. Reserve 540680.98 is that pool. DexScreener 1043346 / 531673.15 is the same pair, different aggregator. Holders 1405 is Blockscout. [claim R-10 R-11 R-12]
- Adversarial: the strongest contrary reading is that DOGGIE is a Bankr factory token or that the TSLA quote is not a Robinhood Stock Token. The create tx is LongLauncher.create; GET /rhj/assets lists TSLA 0x322F…3b2d. [inference R-3 R-20]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no doggie / DOGGIE / Doggie Mode / 0xa9eF…1e18. content/dependencies/stock-tokens.yaml TSLA 0x322F…3b2d.
- Official: doggiemode.com HTML (Railway/Cloudflare). Lists CA, TSLA, @DoggieMode, t.me/DoggieModePortal, app.long.xyz.
- Explorer: Blockscout api/v2 token, create tx 0xca19843e…7445, LongLauncher, DopplerERC20V1Factory, DopplerERC20V1, Airlock, TSLA. RPC eth_getCode/eth_call at blocks 53101157–53103068.
- Aggregators: DexScreener search and latest/dex/tokens; Gecko search/pools, pool, token, token/info. CMC currencies/doggie-mode.
- Registry: GET api.robinhood.com/rhj/assets 194 assets; TSLA row matches 0x322F…3b2d.
- Social: @DoggieMode profile, 28 Aug site-live, 2 Sep CMC, 1 Sep doing-things; @NovaFox 3 Sep MC 3.6; t.me/DoggieModePortal preview 113 subscribers.
- Failed: GitHub search returned unrelated Doggie repos; profile website field on x.com/DoggieMode not copied from HTML; Airlock exit/liquidity selectors not eth_called.
- Time: collection 2026-09-03T03:29Z–2026-09-03T03:40Z.
