---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: microduck
name: microduck
packet_tier: seed
as_of: 2026-09-03T03:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [microduck]
allowed_paths:
  - research/inbox/packets/microduck/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: microduck
  aliases: [MicroDuck, "$microduck"]
  symbols: [microduck]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://microduck.net
  official_handle: "@MicroDuckNVDA"
  repository: "NULL — microduck.net links github.com/pollen-robotics/microduck as the robot repo, not a token repository; no token GitHub org on the site, X profile, DexScreener, or Blockscout this pass"
  possible_matches:
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "microduck is PonsV2LauncherToken 0xD5f1…E725 paired to the same NVDA 0xd060…9EEC via PonsV2LaunchFactory 0x7eD5…C7e"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "microduck is a v2 launch token, not the pad; entity_kind token"
        - "Official surfaces differ: microduck.net / @MicroDuckNVDA versus ponsfamily.com / @ponsdotfamily"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "microduck launchFactory() returns PonsV2LaunchFactory, not LongLauncher"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xD5f1…E725 is a verified PonsV2LauncherToken with non-empty code on 4663; launchFactory() returns PonsV2LaunchFactory 0x7eD5…C7e; Pons launchpad page is phase 2 venue pool against NVDA 0xd060…9EEC, which GET /rhj/assets lists as NVIDIA • Robinhood Token. Distinct from $AI. Gecko microduck/USDG 0.78% reserveInUsd 1116524.46 volume 10461564. [R-5] [R-7] [R-9] [R-10] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6, CLM-27], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-26], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-13, CLM-14], note: "" }

links:
  - { kind: site, url: "https://microduck.net", authenticity: confirmed }
  - { kind: x, url: "https://x.com/MicroDuckNVDA", authenticity: confirmed }
  - { kind: app, url: "https://www.ponsfamily.com/launchpad/0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725", authenticity: confirmed }
  - { kind: other, url: "https://pollen-robotics.com/microduck/", authenticity: unconfirmed }

deployments:
  - label: microduck token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:30:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-7]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-10, R-11]
  - label: Pons v2 bonding curve
    role: other
    address:
      value: "0xAe10D785d2AF17cec895EFfE50685d1B113dc3a6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-10, R-12]
  - label: NVDA quote (NVIDIA • Robinhood Token)
    role: token
    address:
      value: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-10, R-13, R-14]
  - label: V2LaunchLocker (Gecko top holder)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9, R-15]

metrics:
  - { kind: volume_24h, value: 10461564.01, currency: USD, as_of: 2026-09-03T03:40:00Z, window: 24h, method: "www.geckoterminal.com/robinhood/pools/0xa3318d6ff46aa685b3dcee29cb09211d19a53b142fe503f8ff572258fd4c5aad __NEXT_DATA__ pool.byId.335052651.attributes.fromVolumeInUsd (microduck/USDG 0.78% Uniswap V4, not an all-pools figure)", class: claim, receipt_ids: [R-9] }
  - { kind: tvl, value: 1116524.46, currency: USD, as_of: 2026-09-03T03:40:00Z, window: point, method: "same Gecko pool __NEXT_DATA__ reserveInUsd (USDG 624517.33 + microduck 491871.86 tokenReserves)", class: claim, receipt_ids: [R-9] }
  - { kind: volume_24h, value: 10492472.42, currency: USD, as_of: 2026-09-03T03:29:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xD5f1…E725 pair 0xa3318d6f…5aad microduck/USDG Uniswap v4 volume.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 694395.16, currency: USD, as_of: 2026-09-03T03:29:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD5f1…E725 pair 0xa3318d6f…5aad liquidity.usd", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 1876306.79, currency: USD, as_of: 2026-09-03T03:29:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xD5f1…E725 pair 0xcde4d35e…c370 microduck/NVDA Uniswap v4 volume.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 520946.96, currency: USD, as_of: 2026-09-03T03:29:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD5f1…E725 pair 0xcde4d35e…c370 liquidity.usd", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 35791571.94, currency: USD, as_of: 2026-09-03T03:40:00Z, window: point, method: "Gecko USDG pool tokenValueData.124412145.fdvInUsd (marketCapInUsd null)", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 18856, currency: null, as_of: 2026-09-03T03:30:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xD5f1…E725 holders_count", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7], result: "rpc.mainnet.chain.robinhood.com block 0x32a4624 (53102116): eth_getCode 0xD5f1…E725 3248 bytes prefix 60806040; name microduck; symbol microduck; decimals 18; totalSupply 1e27; owner() revert; deployer() 0x0DABEE4B5983fb4B7d19cAea80eC54E7246Ce52d (code 0x); launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; curve() 0xAe10D785d2AF17cec895EFfE50685d1B113dc3a6; socials() five empty strings; logo axiomtrading CDN. Factory code 24177 B; curve code 10229 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-5, R-6, R-11, R-12, R-13, R-15], result: "Blockscout api/v2 token 0xD5f1…E725 name microduck symbol microduck holders_count 18856 total_supply 1e27 contract name PonsV2LauncherToken is_verified true is_partially_verified true file_path contracts/src/v2/PonsV2LauncherToken.sol compiler 0.8.35. Factory 0x7eD5…C7e name PonsV2LaunchFactory is_verified true. Curve 0xAe10…c3a6 is_contract true is_verified false. NVDA 0xd060…9EEC name NVIDIA • Robinhood Token. Locker 0x2674…4952 name V2LaunchLocker is_verified true." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T03:29:00Z, receipt_ids: [R-8], result: "DexScreener latest/dex/tokens/0xD5f1…E725: 30 robinhood pairs. Top USDG Uniswap v4 0xa3318d6f…5aad liquidity.usd 694395.16 volume.h24 10492472.42 fdv/marketCap 35909002 pairCreatedAt 1787945699000 (2026-08-28T19:34:59Z). NVDA Uniswap v4 0xcde4d35e…c370 quote 0xd060…9EEC NVIDIA • Robinhood Token liquidity.usd 520946.96 volume.h24 1876306.79 pairCreatedAt 1787831323000 (2026-08-27T11:48:43Z). info.websites https://microduck.net/ socials x.com/MicroDuckNVDA." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-2, R-3], result: "microduck.net HTML canonical https://microduck.net. Shipped JS sets p=0xD5f1…E725, x.com/MicroDuckNVDA, ponsfamily.com/launchpad/${p}, DexScreener NVDA pair 0xcde4d35e…c370. @MicroDuckNVDA profile website microduck.net." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-9], result: "Gecko HTML title microduck/USDG Uniswap V4 (Robinhood) 0.78% Fee. __NEXT_DATA__ pool 0xa3318d6f…5aad name microduck / USDG 0.78% reserveInUsd 1116524.4613 fromVolumeInUsd 10461564.0074705 poolCreatedAt 2026-08-28T19:34:59.000Z fdvInUsd 35791571.94. Related NVDA pool 0xcde4d35e…c370 liquidity 288377.30 volumeInUsd24H 1873891.09 dex Pons V2 Dex. Top holder 0x267444d0…4952 entityName Pons. launchpadDex Pons V2." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T03:43:00Z, receipt_ids: [R-10, R-14], result: "Pons launchpad HTML: token 0xD5f1…E725 name/symbol microduck totalSupplyWei 1e27 deployer 0x0DAB…e52d quoteAsset NVDA 0xd060…9EEC assetClass equity phase 2 venue pool poolId 0xcde4d35e…c370 hooks 0xE5e70264…Be044. GET api.robinhood.com/rhj/assets 194 assets; NVDA tokenName NVIDIA • Robinhood Token contractAddress 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC chainId 4663." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Pons v2 LaunchFactory deploys a 1e9-supply PonsV2LauncherToken, mints to a bonding curve quoted against NVDA, then graduates into Uniswap v4 poolId 0xcde4d35e…c370 (hooks V2MemeHook). Pons page phase 2 venue pool.", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-6, R-7, R-10], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://microduck.net", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@MicroDuckNVDA", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-2, R-5, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: "microduck", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-5, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad is Pons v2; launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; site Get microduck button is ponsfamily.com/launchpad/0xD5f1…E725", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-2, R-7, R-10], reproduction_ids: [REP-1, REP-4, REP-6], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset NVDA 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC; Pons graduation pool 0xcde4d35e341901bc0308c2ffc789448ccd0f238a59597fe702e6710484b9c370", class: verified, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-8, R-10, R-13], reproduction_ids: [REP-3, REP-6], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Secondary Uniswap v4 microduck/USDG book 0xa3318d6ff46aa685b3dcee29cb09211d19a53b142fe503f8ff572258fd4c5aad created 2026-08-28T19:34:59Z; DexScreener lists 30 robinhood pairs including WETH and more USDG books", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: identity.name, value: "microduck", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-5, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-8, R-10, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Same-stock NVDA pair as census Artificial Inu, not that token. Base 0xD5f1…E725 name microduck; $AI is 0x2E8c…1e18. No shared domain or handle.", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-5, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Gecko microduck/USDG 0.78% 0xa3318d6f…5aad fromVolumeInUsd 10461564.01 reserveInUsd 1116524.46 at 2026-09-03T03:40:00Z (this pool, not all-pools)", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "DexScreener same USDG pair liquidity.usd 694395.16 volume.h24 10492472.42 fdv 35909002", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "DexScreener microduck/NVDA 0xcde4d35e…c370 volume.h24 1876306.79 liquidity.usd 520946.96; Gecko related_pools same id liquidity 288377.30 volumeInUsd24H 1873891.09", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: 18856, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: "Gecko fdvInUsd 35791571.94; DexScreener fdv/marketCap 35909002. Gecko marketCapInUsd null.", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-19, field: control.owner, value: "owner() reverts. Verified source: deployer is immutable reference data and confers no privileges over the token. Deployer 0x0DAB…e52d has no code.", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-20, field: security.audit, value: "No audit report URL was located on microduck.net, the X profile, DexScreener, Gecko, or the PonsV2LauncherToken source this pass", class: unknown, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@MicroDuckNVDA.role", value: project, class: claim, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: "account.@MicroDuckNVDA.slug", value: microduck, class: claim, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@MicroDuckNVDA__.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-3, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-5, R-8], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-25, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-6, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: relationship, value: "Quote NVDA 0xd060…9EEC is GET /rhj/assets NVIDIA • Robinhood Token on chain 4663 (194 assets).", class: verified, observed_at: 2026-09-03T03:43:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-27, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-28, field: deployment.address, value: "0xAe10D785d2AF17cec895EFfE50685d1B113dc3a6", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7, R-10, R-12], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-29, field: candidate, value: "microduck | microduck | @MicroDuckNVDA | https://microduck.net — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: communications.status, value: "Site: unofficial community token, not affiliated with Pollen Robotics, Hugging Face, or Robinhood", class: claim, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: "account.@Micro_DuckNVDA.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-3, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: "account.@Micr0DuckNVDA.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-3, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: communications.status, value: "Handle bio: A Nvidia owned company, created by Hugging Face. Flag unconfirmed-official on that affiliation wording.", class: claim, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-14, CLM-15]
    material_effect: "Same Uniswap v4 microduck/USDG 0xa3318d6f…5aad is Gecko reserveInUsd 1116524.46 versus DexScreener liquidity.usd 694395.16; a card that collapses them would misstate the USDG book"
    status: open
    resolution: null
  - id: CON-2
    field: communications.status
    claim_ids: [CLM-30, CLM-33]
    material_effect: "Site disclaimer says unofficial / not affiliated; the X bio says Nvidia owned company created by Hugging Face. A card that treated NVIDIA or Hugging Face as issuer would misstate the site."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko microduck/USDG 24h volume $10.46M, liquidity $1.12M"
    summary: "Gecko Uniswap v4 microduck/USDG 0.78% pool 0xa3318d6f…5aad fromVolumeInUsd 10461564 reserveInUsd 1116524."
    occurred_at: 2026-09-03T03:40:00Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-2
    type: onchain
    title: "Pons v2 microduck/NVDA Uniswap v4 pool created"
    summary: "DexScreener pair 0xcde4d35e…c370 microduck/NVDA pairCreatedAt 2026-08-27T11:48:43Z. Pons page poolId matches; phase 2 venue pool."
    occurred_at: 2026-08-27T11:48:43Z
    observed_at: 2026-09-03T03:35:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-10]
  - id: EVT-3
    type: onchain
    title: "microduck/USDG Uniswap v4 0.78% book created"
    summary: "Gecko/DexScreener pool 0xa3318d6f…5aad poolCreatedAt 2026-08-28T19:34:59Z, one day after the NVDA graduation pool."
    occurred_at: 2026-08-28T19:34:59Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [product.mechanism, economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-9]
  - id: EVT-4
    type: ct
    title: "@MicroDuckNVDA posted the contract address"
    summary: "@MicroDuckNVDA posted CA 0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725 with a Hugging Face simulator quote."
    occurred_at: 2026-08-28T10:06:21Z
    observed_at: 2026-09-03T03:36:00Z
    affected_fields: [identity.handle, deployment.address]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-5
    type: ct
    title: "@MicroDuckNVDA quoted a custom PFP event"
    summary: "Handle quoted @2442lll: 15 winners, $400 each, $6,000 contributed, 24-hour entries."
    occurred_at: 2026-09-02T14:21:53Z
    observed_at: 2026-09-03T03:36:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]

receipts:
  - { id: R-1, publisher: microduck, title: "microduck.net home", url: "https://microduck.net/", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-10, CLM-29, CLM-30], excerpt: "title microduck — Tiny duck. Big waddle. meta description: $microduck is the unofficial community token inspired by the tiny open-source-software biped robot. Verify the contract and join the flock on Robinhood Chain. canonical https://microduck.net. twitter:description The unofficial $microduck community token on Robinhood Chain." }
  - { id: R-2, publisher: microduck, title: "Shipped JS CA, handle, Pons, disclaimer", url: "https://microduck.net/assets/index-CAPU-AON.js", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-7, CLM-21, CLM-22, CLM-30], excerpt: "p=`0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725`, m=`https://www.ponsfamily.com/launchpad/${p}`, h=`https://dexscreener.com/robinhood/0xcde4d35e…c370`, _=`https://x.com/MicroDuckNVDA`. Eyebrow: Unofficial community token · Robinhood Chain. Ticker: 1 BILLION FIXED SUPPLY / PAIRED WITH NVDA. Disclaimer: not affiliated with Pollen Robotics, Hugging Face, or Robinhood." }
  - { id: R-3, publisher: "@MicroDuckNVDA", title: "MicroDuck profile", url: "https://x.com/MicroDuckNVDA", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-21, CLM-22, CLM-23, CLM-31, CLM-32, CLM-33], excerpt: "Display name MicroDuck, handle @MicroDuckNVDA. Bio: A Nvidia owned company, created by Hugging Face, launched the viral microduck. Paired with NVDA. Rewarded in NVDA. Website microduck.net. Joined August 2026. Followers 4561. 32 posts." }
  - { id: R-4, publisher: "@MicroDuckNVDA", title: "Posted CA with simulator quote", url: "https://x.com/MicroDuckNVDA/status/2093279007290622460", published_at: 2026-08-28T10:06:21Z, accessed_at: 2026-09-03T03:36:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4, EVT-4], excerpt: "You can experience Microduck directly through a web-based simulation. Try it yourself and experience the technology behind Microduck firsthand. CA: 0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725" }
  - { id: R-5, publisher: Blockscout, title: "Token 0xD5f1…E725 microduck", url: "https://robinhoodchain.blockscout.com/address/0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-10, CLM-12, CLM-13, CLM-17, CLM-24, CLM-29], excerpt: "hash 0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725 name PonsV2LauncherToken is_contract true is_verified true. token name microduck symbol microduck decimals 18 total_supply 1000000000000000000000000000 holders_count 18856 type ERC-20. creator_address_hash null this pass." }
  - { id: R-6, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725?tab=contract", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-12, CLM-19, CLM-25], excerpt: "name PonsV2LauncherToken compiler 0.8.35+commit.47b9dedd is_verified true is_partially_verified true file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-09-02T18:56:46Z. Comment: Fixed-supply ERC-20 deployed by PonsV2LaunchFactory; entire supply mints to the bonding curve; deployer confers no privileges over the token." }
  - { id: R-7, publisher: Robinhood Chain RPC, title: "eth_getCode, name, launchFactory, curve, deployer", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-7, CLM-10, CLM-19, CLM-24, CLM-27, CLM-28], excerpt: "eth_blockNumber 0x32a4624 (53102116). Token code 3248 B. name microduck symbol microduck decimals 18 totalSupply 1e27. owner() revert. deployer() 0x0DABEE4B5983fb4B7d19cAea80eC54E7246Ce52d. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0xAe10D785d2AF17cec895EFfE50685d1B113dc3a6. Deployer code 0x. Factory code 24177 B. Curve code 10229 B." }
  - { id: R-8, publisher: DexScreener, title: "latest/dex/tokens microduck", url: "https://api.dexscreener.com/latest/dex/tokens/0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-11, CLM-13, CLM-15, CLM-16, CLM-18, CLM-24, EVT-2, EVT-3], excerpt: "30 robinhood pairs. Uniswap v4 0xa3318d6f…5aad microduck/USDG liq 694395.16 vol.h24 10492472.42 fdv 35909002 created 1787945699000. Uniswap v4 0xcde4d35e…c370 microduck/NVDA 0xd060…9EEC NVIDIA • Robinhood Token liq 520946.96 vol.h24 1876306.79 created 1787831323000. websites https://microduck.net/ socials x.com/MicroDuckNVDA." }
  - { id: R-9, publisher: GeckoTerminal, title: "microduck/USDG Uniswap v4 0.78% pool", url: "https://www.geckoterminal.com/robinhood/pools/0xa3318d6ff46aa685b3dcee29cb09211d19a53b142fe503f8ff572258fd4c5aad", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-14, CLM-16, CLM-18, EVT-1, EVT-3], excerpt: "meta: microduck/USDG price today is $0.03579 with a 24-hour trading volume of $10.46M. contract 0xd5f1…e725 with $1.12M in liquidity. __NEXT_DATA__ name microduck / USDG 0.78% reserveInUsd 1116524.4613 fromVolumeInUsd 10461564.0074705 poolCreatedAt 2026-08-28T19:34:59.000Z fdvInUsd 35791571.94. Related NVDA pool 0xcde4d35e…c370 liq 288377.30 vol 1873891.09." }
  - { id: R-10, publisher: Pons, title: "Launchpad page microduck", url: "https://www.ponsfamily.com/launchpad/0xD5f1afEA47b1A9eab414D2ee740cF1d6d039E725", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-8, CLM-11, CLM-25, CLM-28, EVT-2], excerpt: "title microduck ($microduck) · pons. Paired NVDA. token 0xD5f1…E725 curve 0xAe10…c3a6 deployer 0x0DAB…e52d quoteAsset NVDA 0xd060…9EEC assetClass equity phase 2 venue pool graduationThresholdWei 41600000000000000000 creatorTaxBps 100 buybackEnabled false poolId 0xcde4d35e…c370 hooks 0xE5e70264…Be044." }
  - { id: R-11, publisher: Blockscout, title: "PonsV2LaunchFactory 0x7eD5…C7e", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-27], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true. RPC eth_getCode 24177 bytes at block 53102116." }
  - { id: R-12, publisher: Blockscout, title: "Curve 0xAe10…c3a6", url: "https://robinhoodchain.blockscout.com/address/0xAe10D785d2AF17cec895EFfE50685d1B113dc3a6", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-28], excerpt: "hash 0xAe10D785d2AF17cec895EFfE50685d1B113dc3a6 is_contract true is_verified false creator_address_hash null. RPC eth_getCode 10229 bytes." }
  - { id: R-13, publisher: Blockscout, title: "NVDA 0xd060…9EEC NVIDIA • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-26], excerpt: "hash 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC name BeaconProxy is_contract true is_verified true. token name NVIDIA • Robinhood Token symbol NVDA decimals 18 holders_count 91869 icon_url cdn.robinhood.com/ncw_assets/logos/0xd0601ce1….png." }
  - { id: R-14, publisher: Robinhood, title: "GET /rhj/assets NVDA Stock Token", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:43:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-11, CLM-26], excerpt: "HTTP 200. assets length 194. NVDA tokenName NVIDIA • Robinhood Token tokenDecimals 18 status ASSET_STATUS_ACTIVE deployments contractAddress 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC chainId 4663 networkName Robinhood Chain." }
  - { id: R-15, publisher: Blockscout, title: "V2LaunchLocker 0x2674…4952", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true. Gecko USDG pool faqs.topHolderDetails.walletAddress this locker, entityName Pons." }
  - { id: R-16, publisher: "@MicroDuckNVDA__", title: "MicroDuck (SUPPORT) profile", url: "https://x.com/MicroDuckNVDA__", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23], excerpt: "Display name MicroDuck (SUPPORT), handle @MicroDuckNVDA__. Bio: A Nvidia owned company, created by Hugging Face, launched the viral microduck. Paired with NVDA. Rewarded in NVDA. Followers 151. Same bio stem as @MicroDuckNVDA." }
  - { id: R-17, publisher: "@Micro_DuckNVDA", title: "MicroDuck profile", url: "https://x.com/Micro_DuckNVDA", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-31], excerpt: "Display name MicroDuck, handle @Micro_DuckNVDA. Bio: A Nvidia owned company, created by Hugging Face, launched the viral microduck. Paired with NVDA. Rewarded in NVDA. Followers 44. Same bio stem as @MicroDuckNVDA." }
  - { id: R-18, publisher: "@Micr0DuckNVDA", title: "Microduck profile", url: "https://x.com/Micr0DuckNVDA", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-32], excerpt: "Display name Microduck, handle @Micr0DuckNVDA. Bio: A Nvidia owned company, created by Hugging Face, launched the viral microduck. Paired with NVDA. Rewarded in NVDA. Followers 156. Same bio stem as @MicroDuckNVDA." }
  - { id: R-19, publisher: "@MicroDuckNVDA", title: "Quoted custom PFP event", url: "https://x.com/MicroDuckNVDA/status/2095155256740941828", published_at: 2026-09-02T14:21:53Z, accessed_at: 2026-09-03T03:36:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "Thank you so much to everyone who helped make this event happen. To the Microduck community — come join the event and show us your custom Microduck! Quoted @2442lll: MICRODUCK CUSTOM PFP EVENT. A total of $6,000 has been contributed. 15 winners, each $400. Entries open 24 hours." }

gaps:
  - { priority: P0, question: "What is the create/launchAndBuy transaction that deployed 0xD5f1…E725?", checked: "Blockscout token creator_address_hash and creation_transaction_hash null; deployer 0x0DAB…e52d recent txs are unrelated; advanced-filter to PonsV2LaunchAndBuy returned mixed callers this pass", next: "eth_getLogs TokenCreated / Launch on PonsV2LaunchFactory around 2026-08-27T11:48:43Z and match token 0xD5f1…E725" }
  - { priority: P0, question: "Is the NVDA Uniswap v4 position locked in V2LaunchLocker 0x2674…4952, and does that locker hold the USDG 0.78% book?", checked: "Gecko top holder on the USDG pool page is the locker; Pons v2 docs were not re-read line by line this pass; gecko isLiquidityLocked null", next: "read V2LaunchLocker verified source and match position tokenIds for poolId 0xcde4d35e…c370 and 0xa3318d6f…5aad" }
  - { priority: P1, question: "Why do Gecko reserveInUsd 1116524.46 and DexScreener liquidity.usd 694395.16 disagree on the same USDG pool?", checked: "Gecko tokenReserves USDG 624517.33 + microduck 491871.86; DexScreener liquidity.usd 694395.16 volume close ($10.46M vs $10.49M), 2026-09-03", next: "re-fetch both APIs in one minute and compare reserve vs liquidity methodology" }
  - { priority: P2, question: "Is there an audit of PonsV2LauncherToken / this launch?", checked: "microduck.net, X profile, DexScreener, Gecko, verified source header, 2026-09-03", next: "read Pons v2 docs security page and any auditor named there" }
---

# microduck — research packet

## What it is

A Pons v2 ERC-20 on Robinhood Chain. The launch minted a 1B-supply token onto a bonding curve quoted against tokenized NVDA, then graduated into a Uniswap v4 microduck/NVDA pool. Traders also use later microduck/USDG books. microduck.net and @MicroDuckNVDA publish the contract. The token is not Artificial Inu and is not the Pollen Robotics robot.

Themes: memecoin, stock-paired:NVDA

## Why it matters

The live NVDA book is a second stock-paired name next to census $AI, not a rename of $AI. Gecko’s microduck/USDG 0.78% Uniswap v4 pool printed about $10.46M of 24h volume and $1.12M reserve at collection, so the USDG book is the activity the card would show.

## What could go wrong

Gecko and DexScreener disagree on USDG-pool liquidity ($1.12M vs $694k) while 24h volume is close. The X bio says NVIDIA / Hugging Face; the site says unofficial and not affiliated. Creation tx was not recovered this pass.

## Product and mechanics

PonsV2LaunchFactory clones a 1B-supply PonsV2LauncherToken and mints it to a bonding curve. Verified source says the whole supply goes to the curve, not a Uniswap position, and that deployer is attribution-only. Pons launchpad HTML for this CA is phase 2, venue pool, quote NVDA 0xd060…9EEC, poolId 0xcde4d35e…c370, hooks V2MemeHook. [verified R-6 R-7 R-10]

A Uniswap v4 microduck/USDG 0.78% pool 0xa3318d6f…5aad was created 2026-08-28T19:34:59Z, after the NVDA pool (2026-08-27T11:48:43Z). DexScreener lists 30 robinhood pairs, including WETH and further USDG books. Site ticker: 1 BILLION FIXED SUPPLY / PAIRED WITH NVDA. [verified R-2 R-8 R-9]

## Control and security

owner() reverts. deployer() is EOA 0x0DAB…e52d with empty code. Verified source: deployer confers no privileges. Curve 0xAe10…c3a6 is unverified. Gecko names V2LaunchLocker 0x2674…4952 as top holder on the USDG pool page. [verified R-6 R-7 R-15]

No audit report URL was located on the site, X profile, DexScreener, Gecko, or the verified source header. [unknown]

## Team and provenance

microduck.net canonical and shipped JS name CA 0xD5f1…E725 and https://x.com/MicroDuckNVDA. @MicroDuckNVDA lists microduck.net. [verified R-1 R-2 R-3]

Site disclaimer: unofficial community token, not affiliated with Pollen Robotics, Hugging Face, or Robinhood. Handle bio: A Nvidia owned company, created by Hugging Face. Flag unconfirmed-official on that bio wording. Handles @MicroDuckNVDA__, @Micro_DuckNVDA, and @Micr0DuckNVDA repeat the same bio stem; flag copypasta-pattern. Do not merge signers. [claim R-2 R-3 R-16 R-17 R-18]

## Economics and activity

Gecko microduck/USDG 0.78% 24h volume is 10461564.01 USD and reserveInUsd is 1116524.46 at 2026-09-03T03:40:00Z from the pool page __NEXT_DATA__. fdvInUsd is 35791571.94. [claim R-9]

DexScreener same USDG pair: liquidity.usd 694395.16, volume.h24 10492472.42, fdv 35909002. NVDA Uniswap v4 0xcde4d35e…c370: volume.h24 1876306.79, liquidity.usd 520946.96. Gecko related_pools NVDA liquidity 288377.30 volume 1873891.09. Blockscout holders_count 18856. [claim R-5 R-8 R-9]

## Material risks

- Gecko USDG reserve $1.12M versus DexScreener liquidity $694k on the same pool. [claim R-8 R-9]
- X bio affiliation wording and site unofficial disclaimer do not match. [claim R-2 R-3]
- Curve source is unverified; create tx was not recovered. [verified R-12] [unknown]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: microduck.net and shipped JS, @MicroDuckNVDA profile and two posts, lookalike profiles, Blockscout token/source/factory/curve/NVDA/locker, RPC, DexScreener, Gecko USDG pool HTML, Pons launchpad page, and GET /rhj/assets were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-9 R-14]
- Numbers: 10461564.01 / 1116524.46 is the Gecko microduck/USDG 0.78% pool, not an all-pools figure. DexScreener 10492472.42 / 694395.16 is the same pair, different aggregator. NVDA book is a separate pool. [claim R-8 R-9]
- Adversarial: the strongest contrary reading is that this token is Artificial Inu or an official NVIDIA / Hugging Face / Pollen product. Base address, factory, domain, and handle differ from $AI; GET /rhj/assets matches the NVDA quote only; the site states unofficial and not affiliated. [inference R-2 R-8 R-14]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no microduck / @MicroDuckNVDA / 0xD5f1…E725. Discovery-inventory CLM-38 named this CA.
- Official: microduck.net, /assets/index-CAPU-AON.js, ponsfamily.com/launchpad/0xD5f1…E725.
- Explorer: Blockscout api/v2 token, smart-contract, factory, curve, NVDA, locker. RPC eth_getCode/eth_call at block 53102116.
- Aggregators: DexScreener latest/dex/tokens (30 pairs). Gecko API 429; HTML + __NEXT_DATA__ used for the USDG 0.78% pool.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, NVDA 0xd060…9EEC.
- Social: @MicroDuckNVDA profile, CA post 28 Aug, PFP-event quote 2 Sep; lookalikes @MicroDuckNVDA__ / @Micro_DuckNVDA / @Micr0DuckNVDA.
- Failed: Gecko REST 429; Blockscout token creator_address_hash null; deployer recent txs did not include this launch; rhj first fetch returned assets [].
- Time: collection 2026-09-03T03:26Z–2026-09-03T03:45Z.
