---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: oof
name: OOF
packet_tier: seed
as_of: 2026-09-03T03:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [oof]
allowed_paths:
  - research/inbox/packets/oof/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: OOF
  aliases: []
  symbols: [OOF]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token attributes have no website; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials lists https://x.com/OOFonRH; bio reads $OOF CTO on Robinhood, powered by @longdotxyz and $OOF is paired to $RBLX; no contract in the bio this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "OOF is a graduation token at 0xeA3b…1e18 created through that LongLauncher.create into an OOF/RBLX Uniswap v4 pool; entity_kind token, not protocol"
        - "No shared domain or handle; DexScreener lists x.com/OOFonRH, not @longdotxyz"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot"
        - "OOF create tx 0x3c07…cbe9 calls LongLauncher, not a Bankr surface; Gecko labels the OOF/RBLX pool dex bankr-robinhood because Doppler/Airlock is shared launch infrastructure"
        - "No shared domain or handle"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "OOF is $OOF at 0xeA3b…1e18 paired to RBLX 0xF0C4…1bE8"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xeA3b…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create on 2026-07-30T00:31:09Z minted OOF into Uniswap v4 pool 0x694d…4592 quoted against RBLX 0xF0C4…1bE8 (GET /rhj/assets row, census stock-tokens rail). Distinct from in-flight ROBLOXIANS/RBLX 0xB528…c10D. No official site this pass; x.com/OOFonRH is unconfirmed-official. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/OOFonRH", authenticity: unconfirmed }

deployments:
  - label: OOF token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xeA3b282273E9ab901790694aDD171C2606D71e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-18]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-5]
  - label: LongLauncher (create target)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:33:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-18]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:33:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-18]
  - label: RBLX Roblox Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-12, R-17]

metrics:
  - { kind: volume_24h, value: 1263410.12, currency: USD, as_of: 2026-09-03T03:38:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x694d0e99cb80f58c41cc77d4da8abf731d8b9c215faab16d12fc46bacaed4592 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 154681.29, currency: USD, as_of: 2026-09-03T03:38:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x694d0e99cb80f58c41cc77d4da8abf731d8b9c215faab16d12fc46bacaed4592 reserve_in_usd (OOF/RBLX pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 382482.27, currency: USD, as_of: 2026-09-03T03:38:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x694d0e99cb80f58c41cc77d4da8abf731d8b9c215faab16d12fc46bacaed4592 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 1663, currency: null, as_of: 2026-09-03T03:32:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xeA3b282273E9ab901790694aDD171C2606D71e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32a5519 (53105945). Token 0xeA3b…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name OOF, symbol OOF, decimals 18, totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl 0x3Be8…C599 code 13927 B. DopplerERC20V1Factory 0x1B37…b69a code 1912 B. RBLX 0xF0C4…1bE8 code 283 B. Factory EOA check not applicable; creator is the factory contract." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-17, R-18], result: "Blockscout api/v2 token 0xeA3b…1e18 name OOF symbol OOF holders_count 1663 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol. creator_address_hash DopplerERC20V1Factory 0x1B37…b69a. create tx 0x3c07…cbe9 2026-07-30T00:31:09Z block 22886452 from EOA 0xCa22…e8C to LongLauncher 0x22e9…eeED method create. LaunchCreated normalizedTicker OOF numeraire RBLX 0xF0C4…1bE8. PoolManager Initialize id 0x694d…4592 currency0 OOF currency1 RBLX hooks DopplerHookInitializer 0x4e34…a544. RBLX token name Roblox • Robinhood Token holders_count 5322." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0xeA3b…1e18: 7 robinhood uniswap pairs; top OOF/RBLX v4 0x694d…4592 quote 0xF0C4…1bE8 Roblox • Robinhood Token / RBLX liquidity.usd 163516.07 volume.h24 1326686.46 fdv 396080 pairCreatedAt 1785371469000 (2026-07-30T00:31:09Z) info.websites [] info.socials [x.com/OOFonRH]. Gecko pool: volume_usd.h24 1263410.12 reserve_in_usd 154681.29 fdv_usd 382482.27 pool_created_at 2026-07-30T00:31:09Z dex bankr-robinhood. Gecko token volume_usd.h24 1294777.86 (all pools, not the RBLX book)." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:34:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one RBLX hit tokenSymbol RBLX tokenName Roblox • Robinhood Token contractAddress 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:33:00Z, receipt_ids: [R-6, R-18], result: "Create tx logs: OwnershipTransferred newOwner Airlock 0xeb7C…0862; mint 1e27 to Airlock; PoolManager Initialize pool 0x694d…4592; DopplerHookInitializer Lock beneficiaries 0x21E2…7A66 5e16 (5%) and launcher 0xCa22…e8C 95e16 (95%); Airlock Create asset OOF numeraire RBLX; LongLauncher LaunchCreated normalizedTicker OOF deployedAt 1785371469." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against RBLX. Tx 0x3c07…cbe9 from 0xCa22…e8C minted OOF as the asset and seeded pool 0x694d…4592. Token owner() is Airlock. Gecko labels the book Bankr because Doppler/Airlock is shared; the create target is LongLauncher.", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-5, R-6, R-8, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "OOF", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "OOF", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xeA3b282273E9ab901790694aDD171C2606D71e18", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials lists x.com/OOFonRH; bio has no contract; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote RBLX 0xF0C4…1bE8 is Roblox • Robinhood Token in GET /rhj/assets (194 assets, 1 RBLX hit, same address). RBLX is a rail, not this subject. Distinct from in-flight discovery candidate robloxians (ROBLOXIANS 0xB528…c10D / @RobloxiansPage, also quoted against the same RBLX). Distinct from census LONG / Bankr / Artificial Inu.", class: verified, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-12, R-16, R-17], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "OOF/RBLX Uniswap v4 24h volume 1263410.12 USD and reserve_in_usd 154681.29 at 2026-09-03T03:38:00Z (Gecko pool slice, not Gecko token all-pools 1294777.86)", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 163516.07 volume.h24 1326686.46 fdv/marketCap 396080 at 2026-09-03T03:30:00Z", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1663, class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock; OwnershipTransferred to Airlock on create. factory() reverts.", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-5, R-6, R-18], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: 0x21E2ce70511e4FE542a97708e89520471DAa7A66 5% and launcher EOA 0xCa227657B0Ffc755CCcF9F063cc430d1d663aE8C 95%", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-18], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is RBLX 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x694d…4592", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; create target is LongLauncher 0x22e9…eeED, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: x.com/OOFonRH listed on DexScreener; bio $OOF CTO on Robinhood, powered by @longdotxyz, $OOF is paired to $RBLX; no CA in bio", class: claim, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 382482.27; DexScreener fdv/marketCap 396080. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8", class: verified, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-12, R-17], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token has no website field", class: claim, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "oof | OOF | NULL | NULL — discovery token not in census 49; DexScreener lists x.com/OOFonRH unconfirmed-official", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: DexScreener search also returns other robinhood OOF symbols (e.g. 0x75C4…9181 hoodoof.fun / @OofOnHood10 liq ~$4.9k). Subject is 0xeA3b…1e18 only.", class: claim, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko OOF/RBLX 24h volume $1.26M, liquidity $155k"
    summary: "Gecko pool 0x694d…4592 volume_usd.h24 1263410 reserve_in_usd 154681 fdv_usd 382482. DexScreener same pair liquidity.usd 163516 volume.h24 1326686."
    occurred_at: 2026-09-03T03:38:00Z
    observed_at: 2026-09-03T03:38:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8, R-7]
  - id: EVT-2
    type: ct
    title: "@OOFonRH posted RBLX providing OOF moments since 2006"
    summary: "Account listed on DexScreener as the token social. Bio: $OOF CTO on Robinhood, powered by @longdotxyz. No contract in the bio."
    occurred_at: 2026-09-02T22:30:00Z
    observed_at: 2026-09-03T03:36:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-3
    type: ct
    title: "@0xBedouin listed RBLX — $oof, $robux as LONG pairs"
    summary: "Post named NVDA $AI, RBLX $oof and $robux among LONG pairs. $robux is a separate ticker on the same rail as ROBLOXIANS/RBLX."
    occurred_at: 2026-09-02T23:59:37Z
    observed_at: 2026-09-03T03:36:00Z
    affected_fields: [relationship, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: onchain
    title: "LongLauncher create minted OOF against RBLX"
    summary: "Tx 0x3c07…cbe9 from 0xCa22…e8C at 2026-07-30T00:31:09Z; LaunchCreated normalizedTicker OOF; PoolManager Initialize poolId 0x694d…4592."
    occurred_at: 2026-07-30T00:31:09Z
    observed_at: 2026-09-03T03:33:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xeA3b…1e18 OOF / OOF", url: "https://robinhoodchain.blockscout.com/address/0xeA3b282273E9ab901790694aDD171C2606D71e18", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xeA3b282273E9ab901790694aDD171C2606D71e18 name OOF is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol OOF decimals 18 total_supply 1000000000000000000000000000 holders_count 1663 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x3c07188fe9607f50c0f5df25d49a82c1a048ca0290b381080c0ae7eda156cbe9." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768 creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x3c07188f…cbe9", url: "https://robinhoodchain.blockscout.com/tx/0x3c07188fe9607f50c0f5df25d49a82c1a048ca0290b381080c0ae7eda156cbe9", published_at: 2026-07-30T00:31:09Z, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-6, CLM-16, EVT-4], excerpt: "timestamp 2026-07-30T00:31:09.000000Z status ok result success block_number 22886452 from 0xCa227657B0Ffc755CCcF9F063cc430d1d663aE8C (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data tokenFactory 0x1B37…b69a numeraire 0xF0C4…1bE8 name/symbol OOF." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on OOF", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a5519 (53105945). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name OOF symbol OOF decimals 18 totalSupply 1e27. owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. Factory 0x1B37…b69a code 1912 B. Impl code 13927 B. RBLX code 283 B." }
  - { id: R-6, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens OOF", url: "https://api.dexscreener.com/latest/dex/tokens/0xeA3b282273E9ab901790694aDD171C2606D71e18", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "7 robinhood uniswap pairs. Top pairAddress 0x694d0e99cb80f58c41cc77d4da8abf731d8b9c215faab16d12fc46bacaed4592 labels v4 base OOF / OOF quote Roblox • Robinhood Token / RBLX 0xF0C4BF4C…1bE8 liquidity.usd 163516.07 volume.h24 1326686.46 fdv 396080 marketCap 396080 pairCreatedAt 1785371469000. info.websites [] info.socials [{url https://x.com/OOFonRH, type twitter}]." }
  - { id: R-8, publisher: GeckoTerminal, title: "OOF/RBLX pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x694d0e99cb80f58c41cc77d4da8abf731d8b9c215faab16d12fc46bacaed4592", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name OOF / RBLX pool_created_at 2026-07-30T00:31:09Z fdv_usd 382482.2732 market_cap_usd null volume_usd.h24 1263410.11917409 reserve_in_usd 154681.2911 transactions.h24 buys 4622 sells 5039. dex bankr-robinhood quote robinhood_0xf0c4bf4c582cb3836e98394b1d4e7b7281101be8." }
  - { id: R-9, publisher: GeckoTerminal, title: "OOF token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xeA3b282273E9ab901790694aDD171C2606D71e18", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23], excerpt: "name OOF symbol OOF decimals 18 total_supply 1e27 price_usd 0.0003826575535 fdv_usd 382657.553464824 market_cap_usd null volume_usd.h24 1294777.86110536 total_reserve_in_usd 83561.23. coingecko_coin_id null. Top pool 0x694d…4592." }
  - { id: R-10, publisher: DexScreener, title: "OOF/RBLX pair page", url: "https://dexscreener.com/robinhood/0x694d0e99cb80f58c41cc77d4da8abf731d8b9c215faab16d12fc46bacaed4592", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "OOF/RBLX on Robinhood / Uniswap v4. Pair 0x694…4592. Token 0xeA3…1e18. Quote RBLX 0xF0C…1bE8." }
  - { id: R-11, publisher: GeckoTerminal, title: "OOF/RBLX pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x694d0e99cb80f58c41cc77d4da8abf731d8b9c215faab16d12fc46bacaed4592", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "OOF/RBLX OOF Price on Bankr (Robinhood). Pool 0x694…4592 OOF 0xea3…1e18 RBLX 0xf0c…1be8." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:34:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One RBLX hit: tokenSymbol RBLX tokenName Roblox • Robinhood Token deployments contractAddress 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: R-13, publisher: "@OOFonRH", title: "RBLX providing OOF moments since 2006", url: "https://x.com/OOFonRH/status/2095278093602587049", published_at: 2026-09-02T22:30:00Z, accessed_at: 2026-09-03T03:36:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "Account OOF @OOFonRH bio: $OOF CTO on Robinhood, powered by @longdotxyz. $OOF is paired to $RBLX. Followers 182. Post: RBLX providing OOF moments since 2006. No contract address in the bio this pass." }
  - { id: R-14, publisher: "@0xBedouin", title: "Buy LONG pairs & board sit szn", url: "https://x.com/0xBedouin/status/2095300644277997831", published_at: 2026-09-02T23:59:37Z, accessed_at: 2026-09-03T03:36:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "Waking up to green candles feels good. Buy LONG pairs. NVDA — $AI. RBLX — $oof, $robux. HIMS — $boner. SPCX — $spacehood." }
  - { id: R-15, publisher: DexScreener, title: "search q=OOF", url: "https://api.dexscreener.com/latest/dex/search?q=OOF", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25], excerpt: "Multiple robinhood OOF symbols. Subject pair 0x694d…4592 token 0xeA3b…1e18 liq 162610.56 vol 1326233.57. Other CA 0x75C4eeAeEb193d0E40D60F2Bf3F26FcA429f9181 OOF/RBLX liq 4894.92 websites hoodoof.fun socials x.com/OofOnHood10." }
  - { id: R-16, publisher: discovery-inventory packet, title: "ROBLOXIANS candidate", url: "https://github.com/harsharn10/proofline/blob/grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research/research/inbox/packets/discovery-inventory/WORK-20260903-grok-heavy-icarus-research.md", published_at: 2026-09-02T23:35:00Z, accessed_at: 2026-09-03T03:35:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-9], excerpt: "candidate robloxians | ROBLOXIANS | @RobloxiansPage | none. DexScreener ROBLOXIANS/RBLX 0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D liq $208k vol $2.06M. Handle @RobloxiansPage. No oof packet path on this branch this pass." }
  - { id: R-17, publisher: Blockscout, title: "Token 0xF0C4…1bE8 Roblox • Robinhood Token / RBLX", url: "https://robinhoodchain.blockscout.com/address/0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 token name Roblox • Robinhood Token symbol RBLX decimals 18 total_supply 19931683000000000000000 holders_count 5322 type ERC-20 exchange_rate 41.46." }
  - { id: R-18, publisher: Blockscout, title: "create tx logs LaunchCreated / Initialize / Lock", url: "https://robinhoodchain.blockscout.com/tx/0x3c07188fe9607f50c0f5df25d49a82c1a048ca0290b381080c0ae7eda156cbe9", published_at: 2026-07-30T00:31:09Z, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-13, CLM-14, CLM-15, EVT-4], excerpt: "OwnershipTransferred newOwner 0xeb7C…0862. PoolManager Initialize id 0x694d…4592 currency0 0xeA3b…1e18 currency1 0xF0C4…1bE8 hooks 0x4e34…a544. Lock beneficiaries 0x21E2…7A66 50000000000000000 and 0xCa22…e8C 950000000000000000. LaunchCreated normalizedTicker OOF launcher 0xCa22…e8C deployedAt 1785371469." }

gaps:
  - { priority: P0, question: "Does @OOFonRH bidirectionally link to token 0xeA3b…1e18 (CA in bio, pinned post, or DexScreener Claim Profile)?", checked: "DexScreener info.socials lists x.com/OOFonRH; bio has no CA; from:OOFonRH CA query returned 0 hits, 2026-09-03", next: "re-read the bio and DexScreener token profile after a Claim Profile; search new posts that embed the CA" }
  - { priority: P1, question: "Is 0x21E2…7A66 the LONG protocol fee split, and does verified DopplerHookInitializer source leave other privileged paths?", checked: "Lock log 5%/95% split; token owner() Airlock; factory() reverts, 2026-09-03", next: "read DopplerHookInitializer and LongLauncher fee-split in verified source on Blockscout" }
  - { priority: P1, question: "Will in-flight robloxians (0xB528…c10D) compile as its own census row, or does any later packet try to merge it with oof because both quote RBLX?", checked: "discovery-inventory candidate ROBLOXIANS/RBLX 0xB528…c10D @RobloxiansPage; this token 0xeA3b…1e18; no robloxians packet on the branch this pass, 2026-09-03", next: "keep CAs separate when robloxians is packed; RBLX remains the rail" }
  - { priority: P2, question: "Which other robinhood OOF tickers stay live besides 0xeA3b…1e18?", checked: "DexScreener search listed 0x75C4…9181 hoodoof.fun / @OofOnHood10 and several low-liq OOF/RBLX and OOF/ETH books, 2026-09-03", next: "re-run search if a second OOF book crosses the liquidity bar" }
---

# OOF — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against RBLX. LongLauncher deploys OOF in one create call and seeds the OOF/RBLX book. Traders buy and sell OOF on Uniswap v4. RBLX is the Roblox Robinhood Token rail, not this subject. No official site was located this pass. DexScreener lists x.com/OOFonRH; flag unconfirmed-official.

Themes: memecoin, stock-paired:RBLX, rwa

## Why it matters

The OOF/RBLX Uniswap v4 book printed about $1.26M of 24h volume on Gecko at collection, with the quote token using the Roblox Nasdaq ticker via Robinhood's stock-token registry. GET /rhj/assets has an RBLX row at 0xF0C4…1bE8. A separate in-flight name, ROBLOXIANS, also quotes that rail.

## What could go wrong

USD liquidity figures on the OOF/RBLX book count both sides, and the quote side is RBLX, not USDG. Gecko labels the pool Bankr; the create target is LongLauncher. Other contracts on this chain reuse the OOF ticker. No bidirectional official handle was located.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xCa22…e8C at 2026-07-30T00:31:09Z minted OOF supply 1e9*1e18 into Uniswap v4 poolId 0x694d…4592. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() on the token returns Airlock 0xeb7C…0862. [verified R-4 R-5 R-18]

PoolManager is 0x8366…0951. Hooks are DopplerHookInitializer 0x4e34…a544. Secondary OOF/USDG and OOF/ETH books exist on DexScreener with far less liquidity than the RBLX book. Gecko dex id is bankr-robinhood because Doppler/Airlock is shared with Bankr launches; the create tx is LongLauncher. [verified R-7 R-8 R-18]

## Control and security

token owner() is Airlock. factory() reverts. DopplerHookInitializer Lock splits 5% to 0x21E2…7A66 and 95% to the launcher EOA 0xCa22…e8C. [verified R-5 R-18]

DopplerERC20V1 is partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). The token is an EIP-1167 shell. No audit report URL was located this pass. [verified R-1 R-2] [unknown]

## Team and provenance

No official domain was located. DexScreener info.websites is empty. x.com/OOFonRH is listed on DexScreener; the bio says $OOF CTO on Robinhood, powered by @longdotxyz, and $OOF is paired to $RBLX, with no contract in the bio. Flag unconfirmed-official. [claim R-7 R-13]

RBLX 0xF0C4…1bE8 is the census stock-token rail (GET /rhj/assets). Discovery-inventory lists robloxians at 0xB528…c10D / @RobloxiansPage, also quoted against that rail. Do not merge those CAs. [verified R-12 R-16]

## Economics and activity

OOF/RBLX Uniswap v4 24h volume is 1263410.12 USD and reserve_in_usd is 154681.29 at 2026-09-03T03:38:00Z from the Gecko pool endpoint. fdv_usd is 382482.27. Gecko token volume_usd.h24 is 1294777.86 across all pools, not the RBLX book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 163516.07, volume.h24 1326686.46, fdv/marketCap 396080. Blockscout holders_count 1663. Pair created 2026-07-30T00:31:09Z. [claim R-1 R-7]

## Material risks

- Quote token RBLX is a Robinhood Stock Token rail shared with other pairs, including in-flight ROBLOXIANS. [verified R-12 R-16]
- Pool USD reserve is OOF plus RBLX, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko dex label Bankr does not match the LongLauncher create target. [verified R-4 R-8]
- No official handle or domain this pass; X is unconfirmed-official. [claim R-7 R-13]
- Other OOF tickers exist on robinhood. [claim R-15]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/Airlock/RBLX and the create tx plus logs, RPC name/symbol/owner/eth_getCode, DexScreener token and search, Gecko pool/token, /rhj/assets, @OOFonRH, @0xBedouin, and the discovery-inventory ROBLOXIANS row were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 1263410.12 is the Gecko OOF/RBLX pool 24h volume, not the 1294777.86 token all-pools figure. Reserve 154681.29 is that pool. DexScreener 1326686.46 / 163516.07 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that OOF is ROBLOXIANS, or that it is a Bankr product, or that @OOFonRH is official. ROBLOXIANS is 0xB528…c10D. The create target is LongLauncher. The X bio has no CA. [inference R-4 R-13 R-16]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no oof / OOF / 0xeA3b…1e18. content/dependencies/stock-tokens.yaml has RBLX at 0xF0C4…1bE8. possible_matches limited to census slugs (long, bankr, artificial-inu); robloxians is in-flight and recorded on CLM-9 / R-16 because packet.mjs refuses non-census possible_matches.
- Explorer: Blockscout api/v2 token, impl, factory, Airlock, RBLX, create 0x3c07…cbe9, LaunchCreated / Initialize / Lock logs, holders. RPC eth_getCode/eth_call with Mozilla UA at block 53105945.
- Aggregators: DexScreener latest/dex/tokens and search q=OOF; Gecko token and pool (dex bankr-robinhood).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 RBLX at 0xF0C4…1bE8.
- Social: X user OOFonRH; keyword OOF RBLX; from:OOFonRH.
- Failed: Gecko pool GET 429 on first two tries (third with include= succeeded); jina HTML for the Gecko pool page returned a Cloudflare challenge; from:OOFonRH CA query returned 0 hits; GET oof packet path on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research was 404 before this PUT.
- Time: collection 2026-09-03T03:28Z–2026-09-03T03:40Z.
