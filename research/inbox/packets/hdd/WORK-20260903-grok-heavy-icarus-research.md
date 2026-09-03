---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: hdd
name: HDD
packet_tier: seed
as_of: 2026-09-03T05:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [hdd]
allowed_paths:
  - research/inbox/packets/hdd/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: HDD
  aliases: ["Hard Disk Dog"]
  symbols: [HDD]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is the LONG token page app.long.xyz/tokens/0xae9b… and an X status URL; Gecko token info websites []; census LONG already owns app.long.xyz"
  official_handle: "NULL — Gecko token info twitter_handle null; DexScreener info.socials lists x.com/harddiskdog; @HardDiskDog bio embeds CA 0xae9b…1e18; no project domain reverse-links the handle; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko token info, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "HDD is the ERC-20 at 0xAE9b…1E18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; DexScreener websites is the LONG token page, which census LONG already owns"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "HDD is 0xAE9b…1E18 paired to SNDK 0xB90A…6400; different CA, quote, name and handle"
        - "No shared domain or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "HDD is a LongLauncher DopplerERC20V1 clone in a Uniswap v4 HDD/SNDK pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xAE9b…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create minted Hard Disk Dog / HDD into Uniswap v4 pool 0x3c84…3f77 quoted against Sandisk Corporation • Robinhood Token SNDK 0xB90A…6400. SNDK is the rail in GET /rhj/assets. Distinct from packed CACHE (0xAfe41…1E18 CACHE/SNDK). No bidirectional project domain this pass. [R-1] [R-2] [R-3] [R-4] [R-7] [R-12] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: app, url: "https://app.long.xyz/tokens/0xae9b7d708270491ac4d046c1d25df73d62791e18", authenticity: confirmed }
  - { kind: x, url: "https://x.com/HardDiskDog", authenticity: unconfirmed }

deployments:
  - label: HDD token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xAE9b7D708270491aC4d046C1D25dF73d62791E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:03:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-2, R-3]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:03:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10]
  - label: DopplerERC20V1Factory (create token factory argument)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-11]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-13]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:04:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-14]
  - label: SNDK quote (create numeraire / pair quote / Robinhood Stock Token rail)
    role: token
    address:
      value: "0xB90A19fF0Af67f7779afF50A882A9CfF42446400"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-12, R-15]

metrics:
  - { kind: tvl, value: 90688.18, currency: USD, as_of: 2026-09-03T05:04:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xAE9b…1E18 pair 0x3c84…3f77 HDD/SNDK Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 117407.16, currency: USD, as_of: 2026-09-03T05:04:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xAE9b…1E18 pair 0x3c84…3f77 HDD/SNDK volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 89093.23, currency: USD, as_of: 2026-09-03T05:05:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3c84…3f77 reserve_in_usd (HDD/SNDK pool slice)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 112717.02, currency: USD, as_of: 2026-09-03T05:05:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3c84…3f77 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 113486.87, currency: USD, as_of: 2026-09-03T05:05:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xae9b…1e18 volume_usd.h24 (all pools, not a HDD/SNDK pool slice)", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 139995, currency: USD, as_of: 2026-09-03T05:04:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xAE9b…1E18 pair 0x3c84…3f77 HDD/SNDK fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 139676.69, currency: USD, as_of: 2026-09-03T05:05:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3c84…3f77 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 362, currency: null, as_of: 2026-09-03T05:03:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xAE9b…1E18 holders_count", class: claim, receipt_ids: [R-2] }
  - { kind: holders, value: 368, currency: null, as_of: 2026-09-03T00:07:45Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xae9b…1e18/info holders.count", class: claim, receipt_ids: [R-19] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:04:00Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32b1df4 (53157364) then 0x32b2666 (53159526). Token 0xAE9b…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3Be8B97F…C599. name Hard Disk Dog; symbol HDD; decimals 18; totalSupply 1e27; owner() 0xeb7c0347…0862 (Airlock, 5695 bytes code); factory() reverts; controller() zero; pool() 0xdead…dead; EIP-1967 implementation slot zero. SNDK 0xB90A…6400 name Sandisk Corporation • Robinhood Token symbol SNDK decimals 18 totalSupply 1095663e18 code 283 B. Create-from 0x72bDaEe9…5395 code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-2, R-4, R-10, R-11, R-13, R-14, R-15, R-18], result: "Blockscout api/v2 Chrome UA: token is_contract true is_verified true name Hard Disk Dog proxy_type eip1167 creator_address_hash null creation_transaction_hash null implementations DopplerERC20V1 0x3Be8B97F…C599. Token symbol HDD holders_count 362 total_supply 1e27 counters transfers_count 34588. Tx 0x35b77b9e…576bd timestamp 2026-08-28T22:03:12Z block 48640289 from EOA 0x72bDaEe9…5395 to LongLauncher 0x22e9…eeED method create status ok; decoded numeraire 0xB90A19fF…6400 token factory 0x1B37…b69a name Hard Disk Dog symbol HDD supply 1e27. PoolManager Initialize id 0x3c84…3f77 currency0 HDD currency1 SNDK hooks 0x4e34…a544. LaunchCreated normalizedTicker HDD." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:05:00Z, receipt_ids: [R-7, R-8, R-9, R-16, R-19], result: "DexScreener latest/dex/tokens/0xAE9b…1E18: 6 robinhood uniswap pairs. Top HDD/SNDK v4 0x3c84…3f77 quote SNDK 0xB90A…6400 liquidity.usd 90688.18 volume.h24 117407.16 fdv/marketCap 139995 pairCreatedAt 1787954592000 (2026-08-28T22:03:12Z) info.websites app.long.xyz/tokens/0xae9b… and x.com/HardDiskDog/status/2093791046933069961 info.socials x.com/harddiskdog. Gecko token GET 200 fdv_usd 139582.39 volume_usd.h24 113486.87 total_reserve_in_usd 54752.85 market_cap_usd null; top_pools listed HDD/SNDK 0x3c84…3f77 then two HDD/WETH ids. Gecko pool GET 200 volume_usd.h24 112717.02 reserve_in_usd 89093.23 fdv_usd 139676.69 pool_created_at 2026-08-28T22:03:12Z; relationships.dex id bankr-robinhood (DexScreener labels the same pool uniswap v4). Gecko info websites [] twitter_handle null holders.count 368. Distinct DexScreener search hits: CACHE/SNDK Cache Cow 0xAfe41…1E18; OP/SNDK Sandisk Optimus 0xF25C…3214." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:05:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one SNDK hit tokenName Sandisk Corporation • Robinhood Token deployments[0] contractAddress 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 chainId 4663 status ASSET_STATUS_ACTIVE isin US80004C2008. SNDK is the rail, not this token." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-19, R-20, R-23], result: "DexScreener websites the LONG token page and an X status; socials @HardDiskDog. Gecko info twitter_handle null websites []. @HardDiskDog bio it's a hard disk dog paired with sandisk / 0xae9b7d708270491ac4d046c1d25df73d62791e18; Latest posts embed the same CA. app.long.xyz/tokens/0xae9b… is the LONG pad page, not a project domain. No bidirectional project domain." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create minted a 1e9-supply DopplerERC20V1 EIP-1167 clone into a Uniswap v4 pool quoted against SNDK 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 (Sandisk Corporation • Robinhood Token)", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Hard Disk Dog", class: verified, observed_at: 2026-09-03T05:03:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "HDD", class: verified, observed_at: 2026-09-03T05:03:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xAE9b7D708270491aC4d046C1D25dF73d62791E18", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: identity.handle, value: "NULL — Gecko twitter_handle null; DexScreener socials x.com/harddiskdog; bio embeds CA 0xae9b…1e18; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-19, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: deployment.role, value: "Token creator_address_hash was empty on the token page; LongLauncher.create and LaunchCreated name LongLauncher 0x22e9…eeED as the pad and DopplerERC20V1Factory 0x1B37…b69a as the token factory", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-4, R-18], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from packed CACHE / Cache Cow 0xAfe41…1E18 pair 0x23bc…404b (DexScreener CACHE/SNDK liq 513160.78 vol 2805564.86 this pass). Distinct from OP/SNDK Sandisk Optimus 0xF25C…3214 (liq 42880.89 vol 515199.23). Same SNDK rail 0xB90A…6400, different CAs.", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-7, R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Primary book HDD/SNDK Uniswap v4 pair 0x3c84bc177fbf2a5236fcd50b75c5c96fddef6ce1a2ba73432a55b20360773f77 quote 0xB90A…6400; DexScreener also lists HDD/ETH and HDD/USDG books with far less liquidity than the SNDK book", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener HDD/SNDK Uniswap v4 liquidity.usd 90688.18 volume.h24 117407.16 fdv/marketCap 139995", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko HDD/SNDK pool volume_usd.h24 112717.02 reserve_in_usd 89093.23 fdv_usd 139676.69; Gecko token volume_usd.h24 113486.87 fdv_usd 139582.39 total_reserve_in_usd 54752.85 (token endpoint is all-pools)", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: 362, class: verified, observed_at: 2026-09-03T05:03:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 368, class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SNDK 0xB90A19fF0Af67f7779afF50A882A9CfF42446400, a Robinhood Stock Token rail in GET /rhj/assets (194 assets, one SNDK row, chainId 4663). Venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x3c84…3f77", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-3, R-4, R-12, R-15, R-18], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-16, field: control.owner, value: "owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-3, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: control.proxy, value: "EIP-1167 minimal proxy; implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599, verified file src/tokens/DopplerERC20V1.sol; EIP-1967 implementation slot zero", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-1, R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-18, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: 0x21E2ce70…7A66 5% and 0x72bDaEe9…5395 95%; create from is the 95% address", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-19, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-20, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T05:03:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: identity.domain, value: "NULL — DexScreener websites is the LONG pad token page plus an X status; Gecko info websites []", class: claim, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-7, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: security.audit, value: "No audit report URL was located on DexScreener, Gecko token info, Blockscout, @HardDiskDog, or the DopplerERC20V1 source header this pass", class: unknown, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@HardDiskDog.role", value: project, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@HardDiskDog.slug", value: hdd, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@HardDiskDog.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-19, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "third-party-link / copypasta-pattern: X posts pointed $HDD CA 0xAE9b…1E18 at crypto-keo.netlify.app/claim and crypto-mll.netlify.app/claim; not DexScreener socials", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: candidate, value: "hdd | HDD | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: deployment.address, value: "0xB90A19fF0Af67f7779afF50A882A9CfF42446400", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-3, R-12, R-15], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-29, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-30, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-31, field: identity.alias, value: "Hard Disk Dog", class: verified, observed_at: 2026-09-03T05:03:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-32, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-4, R-11], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-33, field: other, value: "Gecko pool relationships.dex id is bankr-robinhood; DexScreener labels the same pool uniswap v4; create tx calls LongLauncher into PoolManager 0x8366…0951, not a Bankr factory", class: claim, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-34, field: relationship, value: "Blockscout search q=HDD listed additional Hard Disk Dog ERC-20s at other addresses, including Happy Disk Dog 0x6bC5…1E18; DexScreener unique HDD base for this CA is 0xAE9b…1E18", class: verified, observed_at: 2026-09-03T05:03:00Z, receipt_ids: [R-17], reproduction_ids: [REP-2, REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-11, CLM-12]
    material_effect: "HDD fdv is 139995 on DexScreener HDD/SNDK and 139676.69 on Gecko pool fdv_usd / 139582.39 on Gecko token fdv_usd; Dex pair volume.h24 117407.16 vs Gecko pool 112717.02 vs Gecko token all-pools 113486.87; Dex liq 90688.18 vs Gecko pool reserve 89093.23 vs Gecko token total_reserve_in_usd 54752.85"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-13, CLM-14]
    material_effect: "HDD holders are 362 on Blockscout and 368 on Gecko token info"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener HDD/SNDK 24h volume ~$117k, liquidity ~$91k"
    summary: "DexScreener pair 0x3c84…3f77 volume.h24 117407.16 liquidity.usd 90688.18 fdv 139995."
    occurred_at: 2026-09-03T05:04:00Z
    observed_at: 2026-09-03T05:04:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: risk
    title: "X posts pointed $HDD CA at netlify claim portals"
    summary: "@Fussdiener1 and @flytrop_us posted crypto-keo.netlify.app/claim and crypto-mll.netlify.app/claim with CA 0xAE9b…1E18."
    occurred_at: 2026-09-03T03:03:23Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-3
    type: ct
    title: "@HardDiskDog posted woof.exe with the token CA"
    summary: "@HardDiskDog posted the dog is in the hard disk / woof.exe / $hdd and CA 0xae9b…1e18."
    occurred_at: 2026-09-02T21:45:04Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: ct
    title: "@yutahxd posted $HDD/SNDK as an alternative to $CACHE"
    summary: "@yutahxd posted $HDD paired with $SNDK on @longdotxyz and contrasted it with $CACHE."
    occurred_at: 2026-09-02T15:57:32Z
    observed_at: 2026-09-03T05:03:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-5
    type: ct
    title: "@HardDiskDog posted the storage thesis with CA"
    summary: "@HardDiskDog posted Hard Disk Dog ($HDD) / store the good bois and CA 0xae9b…1e18."
    occurred_at: 2026-08-29T20:01:01Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-6
    type: onchain
    title: "LongLauncher create minted Hard Disk Dog / HDD against SNDK"
    summary: "Tx 0x35b7…76bd from 0x72bD…5395 at 2026-08-28T22:03:12Z; LaunchCreated pool id 0x3c84…3f77 numeraire SNDK 0xB90A…6400."
    occurred_at: 2026-08-28T22:03:12Z
    observed_at: 2026-09-03T05:06:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0xAE9b…1E18 Hard Disk Dog / HDD", url: "https://robinhoodchain.blockscout.com/address/0xAE9b7D708270491aC4d046C1D25dF73d62791E18", published_at: null, accessed_at: 2026-09-03T05:03:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-8, CLM-17, CLM-20, CLM-27, CLM-31], excerpt: "hash 0xAE9b7D708270491aC4d046C1D25dF73d62791E18 name Hard Disk Dog is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol HDD decimals 18 total_supply 1000000000000000000000000000 holders_count 362 type ERC-20. creator_address_hash null creation_transaction_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xAE9b…1E18 Hard Disk Dog / HDD", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xAE9b7D708270491aC4d046C1D25dF73d62791E18", published_at: null, accessed_at: 2026-09-03T05:03:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-13, CLM-20, CLM-31], excerpt: "address_hash 0xAE9b7D708270491aC4d046C1D25dF73d62791E18 name Hard Disk Dog symbol HDD decimals 18 total_supply 1000000000000000000000000000 holders_count 362 type ERC-20. Counters token_holders_count 362 transfers_count 34588." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / owner at blocks 53157364–53159526", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-15, CLM-16, CLM-17, CLM-19, CLM-28, CLM-29], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32b1df4 then 0x32b2666. Token code 44 B EIP-1167 impl 0x3Be8B97F…C599. name Hard Disk Dog symbol HDD decimals 18 totalSupply 1e27 owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 factory() reverts pool() 0xdead…dead. SNDK name Sandisk Corporation • Robinhood Token symbol SNDK code 283 B. Airlock code 5695 B. Create-from 0x72bD…5395 code 0x." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x35b77b9e…76bd", url: "https://robinhoodchain.blockscout.com/tx/0x35b77b9e7c57134d8915aab8e441454eb3af96c720a15398609f9a10fb9576bd", published_at: 2026-08-28T22:03:12Z, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-6, CLM-8, CLM-18, CLM-30, CLM-32, CLM-33, EVT-6], excerpt: "timestamp 2026-08-28T22:03:12.000000Z status ok result success block_number 48640289 from 0x72bDaEe95aD67B020f7E8EDE24398A55D4Ce5395 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0xB90A19fF…6400 factory 0x1B37…b69a name Hard Disk Dog symbol HDD supply 1e27." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens HDD", url: "https://api.dexscreener.com/latest/dex/tokens/0xAE9b7D708270491aC4d046C1D25dF73d62791E18", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-11, CLM-19, CLM-21, CLM-23, CLM-24, CLM-25, CLM-27, CLM-33, EVT-1], excerpt: "6 robinhood uniswap pairs. Top pairAddress 0x3c84bc177fbf2a5236fcd50b75c5c96fddef6ce1a2ba73432a55b20360773f77 labels v4 base Hard Disk Dog / HDD quote Sandisk Corporation • Robinhood Token / SNDK 0xB90A19fF…6400 liquidity.usd 90688.18 volume.h24 117407.16 fdv 139995 marketCap 139995 pairCreatedAt 1787954592000. info.websites app.long.xyz/tokens/0xae9b… and x.com/HardDiskDog/status/2093791046933069961 info.socials x.com/harddiskdog." }
  - { id: R-8, publisher: GeckoTerminal, title: "HDD/SNDK pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3c84bc177fbf2a5236fcd50b75c5c96fddef6ce1a2ba73432a55b20360773f77", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-12, CLM-33], excerpt: "HTTP 200. name HDD / SNDK pool_created_at 2026-08-28T22:03:12Z fdv_usd 139676.6902 market_cap_usd null volume_usd.h24 112717.02114061 reserve_in_usd 89093.2332 transactions.h24 buys 763 sells 875. quote robinhood_0xb90a19ff0af67f7779aff50a882a9cff42446400. relationships.dex id bankr-robinhood." }
  - { id: R-9, publisher: GeckoTerminal, title: "Hard Disk Dog token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xae9b7d708270491ac4d046c1d25df73d62791e18", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12], excerpt: "HTTP 200. name Hard Disk Dog symbol HDD decimals 18 total_supply 1e27 price_usd 0.0001395823922 fdv_usd 139582.392184945 market_cap_usd null volume_usd.h24 113486.866877743 total_reserve_in_usd 54752.846. coingecko_coin_id null. top_pools 0x3c84…3f77 (HDD/SNDK) then two HDD/WETH ids." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x3Be8B97F…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T05:03:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17, CLM-29], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-32], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768. Smart-contract file_path src/tokens/DopplerERC20V1Factory.sol compiler v0.8.26 is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-15, CLM-28], excerpt: "HTTP 200. assets length 194. One SNDK hit tokenSymbol SNDK tokenName Sandisk Corporation • Robinhood Token deployments contractAddress 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 chainId 4663 status ASSET_STATUS_ACTIVE isin US80004C2008." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x22e99278…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-30], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305 creation_transaction_hash 0x717af93c071b39247b5cec72930b990b917439143f6621d08797090732947cf9. Smart-contract file src/LongLauncher.sol compiler v0.8.26 is_partially_verified false." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xeb7C0347…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9 creation_transaction_hash 0x8ffd957b1985578fd9bfb8ce651bf546cb262f3b157f02f93b26c585046b291a." }
  - { id: R-15, publisher: Blockscout, title: "Token 0xB90A…6400 Sandisk Corporation • Robinhood Token / SNDK", url: "https://robinhoodchain.blockscout.com/address/0xB90A19fF0Af67f7779afF50A882A9CfF42446400", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-28], excerpt: "hash 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Sandisk Corporation • Robinhood Token symbol SNDK decimals 18 holders_count 24551 total_supply 1095663000000000000000." }
  - { id: R-16, publisher: DexScreener, title: "latest/dex/search HDD SNDK", url: "https://api.dexscreener.com/latest/dex/search?q=HDD%20SNDK", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "Robinhood hits include HDD Hard Disk Dog 0xAE9b…1E18 / SNDK liq 90688.18 vol 117381.79; CACHE Cache Cow 0xAfe41…1E18 / SNDK liq 513160.78 vol 2805564.86; OP Sandisk Optimus 0xF25C…3214 / SNDK liq 42880.89 vol 515199.23. Unique HDD base token this pass is 0xAE9b…1E18." }
  - { id: R-17, publisher: Blockscout, title: "Search q=HDD", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=HDD", published_at: null, accessed_at: 2026-09-03T05:02:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-34], excerpt: "First token Hard Disk Dog / HDD 0xAE9b7D708270491aC4d046C1D25dF73d62791E18 total_supply 1e27. Next Happy Disk Dog / HDD 0x6bC5ebcFd91b4b1Ef0e95F51Cc7411666D991E18. Further Hard Disk Dog ERC-20s at 0x05399ac4…7C95, 0x934156FB…4160, 0xe1FC1661…64bf and others this pass." }
  - { id: R-18, publisher: Blockscout, title: "LaunchCreated / Initialize logs for HDD", url: "https://robinhoodchain.blockscout.com/tx/0x35b77b9e7c57134d8915aab8e441454eb3af96c720a15398609f9a10fb9576bd", published_at: 2026-08-28T22:03:12Z, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-15, CLM-18, EVT-6], excerpt: "PoolManager Initialize id 0x3c84bc177fbf2a5236fcd50b75c5c96fddef6ce1a2ba73432a55b20360773f77 currency0 0xAE9b…1E18 currency1 0xB90A…6400 hooks 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544. Lock beneficiaries 0x21E2ce70…7A66 5% and 0x72bDaEe9…5395 95%. LaunchCreated normalizedTicker HDD numeraire SNDK." }
  - { id: R-19, publisher: GeckoTerminal, title: "Hard Disk Dog token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xae9b7d708270491ac4d046c1d25df73d62791e18/info", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-5, CLM-14, CLM-21, CLM-25], excerpt: "HTTP 200. name Hard Disk Dog symbol HDD websites [] twitter_handle null telegram_handle null discord_url null description null gt_verified false holders.count 368 last_updated 2026-09-03T00:07:45Z. categories Dog, Animal." }
  - { id: R-20, publisher: "@HardDiskDog", title: "the dog is in the hard disk", url: "https://x.com/HardDiskDog/status/2095266785411109208", published_at: 2026-09-02T21:45:04Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-5, CLM-23, CLM-24, CLM-25, EVT-3], excerpt: "Bio: it's a hard disk dog paired with sandisk 0xae9b7d708270491ac4d046c1d25df73d62791e18. Post 2095266785411109208 the dog is in the hard disk woof.exe $hdd 0xae9b7d708270491ac4d046c1d25df73d62791e18." }
  - { id: R-21, publisher: "@Fussdiener1", title: "$HDD holders wake up claim portal is live", url: "https://x.com/Fussdiener1/status/2095346893689655599", published_at: 2026-09-03T03:03:23Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-2], excerpt: "$HDD holders wake up claim portal is live check wallet and claim if eligible CA: 0xAE9b7D708270491aC4d046C1D25dF73d62791E18 https://crypto-keo.netlify.app/claim?contract=0xAE9b…1E18. Related Latest post 2095261602492883160 @flytrop_us crypto-mll.netlify.app/claim same CA." }
  - { id: R-22, publisher: "@yutahxd", title: "$HDD paired with $SNDK", url: "https://x.com/yutahxd/status/2095179324379070870", published_at: 2026-09-02T15:57:32Z, accessed_at: 2026-09-03T05:03:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "Leave this here. I hope this can become another $AI on @longdotxyz $HDD paired with $SNDK. Can't find another ticker that has this much motion. Prior post 2094775914899148823 $HDD paired with $SNDK … $CACHE has already reached millions." }
  - { id: R-23, publisher: "@HardDiskDog", title: "Store the good bois thesis", url: "https://x.com/HardDiskDog/status/2093791046933069961", published_at: 2026-08-29T20:01:01Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-5, EVT-5], excerpt: "Hard Disk Dog ($HDD) is built around the simplest possible idea: store the good bois. The SanDisk connection fits naturally. Hard Disk Dog ($HDD) Store the good bois. 0xae9b7d708270491ac4d046c1d25df73d62791e18. DexScreener websites lists this status as thesis." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xAE9b…1E18?", checked: "DexScreener info.websites is the LONG token page plus an X status; info.socials @HardDiskDog; Gecko twitter_handle null websites []; @HardDiskDog bio embeds the CA; no project domain, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search a non-LONG domain that embeds the CA and the handle" }
  - { priority: P1, question: "Does @HardDiskDog pin a domain that cross-links, or only the CA?", checked: "bio CA + sandisk pairing; Latest posts embed CA; DexScreener thesis URL is an X status, 2026-09-03", next: "re-read the profile and any pinned post" }
  - { priority: P1, question: "Why does Gecko label HDD/SNDK pool dex as bankr-robinhood while DexScreener labels uniswap v4?", checked: "Gecko pool GET relationships.dex id bankr-robinhood; DexScreener labels v4; create is LongLauncher into PoolManager 0x8366…0951, 2026-09-03", next: "one Gecko pool re-read if the dex id changes; do not treat Bankr as the pad" }
  - { priority: P2, question: "Do the other Blockscout Hard Disk Dog CAs have live books, or only 0xAE9b…1E18?", checked: "DexScreener unique HDD base this pass is 0xAE9b…1E18; Blockscout search listed Happy Disk Dog 0x6bC5…1E18 and further HDD ERC-20s, 2026-09-03", next: "DexScreener tokens GET on 0x6bC5…1E18 if an HDD clone packet is assigned" }
---

# HDD — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against SNDK. LongLauncher deploys Hard Disk Dog (HDD) in one create call and seeds the HDD/SNDK book. Traders buy and sell HDD on Uniswap v4. SNDK is a Robinhood Stock Token rail. Distinct from packed CACHE. No official site was located this pass.

Themes: memecoin, dog, stock-paired:SNDK, rwa

## Why it matters

The HDD/SNDK Uniswap v4 book printed about $117k of 24h volume on DexScreener at collection, with liquidity about $91k. GET /rhj/assets has an SNDK row at 0xB90A…6400, so the pair leg is the Sandisk Corporation • Robinhood Token rather than a third-party TokenizedStock. A larger SNDK book, CACHE/SNDK (Cache Cow 0xAfe41…1E18), is a different token.

## What could go wrong

USD liquidity figures on the HDD/SNDK book count both sides, and the quote side is SNDK, not USDG. Packed CACHE is a separate CA on the same rail. Blockscout lists other Hard Disk Dog ERC-20s. No official domain was located, so comms surfaces stay unconfirmed-official. Netlify claim links used this CA.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0x72bD…5395 at 2026-08-28T22:03:12Z minted Hard Disk Dog / HDD supply 1e9*1e18 into Uniswap v4 poolId 0x3c84…3f77. Token page creator_address_hash was empty; the create call names DopplerERC20V1Factory 0x1B37…b69a. owner() is Airlock. factory() reverts. [verified R-4 R-3 R-18]

The pair quote is SNDK 0xB90A…6400. PoolManager is 0x8366…0951. DopplerHookInitializer 0x4e34…a544 locked beneficiaries 5/95. Secondary HDD/ETH and HDD/USDG books exist on DexScreener with far less liquidity than the SNDK book. Gecko labels this pool dex as bankr-robinhood; DexScreener labels uniswap v4. [verified R-7 R-15 R-18] [claim R-8]

## Control and security

Token owner() is Airlock 0xeb7C…0862. Create-from 0x72bD…5395 has no code and is the 95% Lock beneficiary; 0x21E2…7A66 is 5%. Implementation DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). No audit report URL was located this pass. [verified R-3 R-10 R-18] [unknown]

## Team and provenance

No official domain was located. DexScreener info.websites is the LONG token page plus an X status; info.socials lists @HardDiskDog. Gecko twitter_handle is null. @HardDiskDog bio embeds the CA this pass. Flag unconfirmed-official. [claim R-7 R-19 R-20]

SNDK 0xB90A…6400 is the Sandisk Corporation • Robinhood Token in GET /rhj/assets. That rail is not this memecoin. [verified R-12 R-15]

## Economics and activity

DexScreener HDD/SNDK Uniswap v4 24h volume is 117407.16 USD and liquidity.usd is 90688.18 at 2026-09-03T05:04:00Z. fdv/marketCap is 139995. Pair created 2026-08-28T22:03:12Z. [claim R-7]

Gecko pool volume_usd.h24 is 112717.02, reserve_in_usd 89093.23, fdv_usd 139676.69. Gecko token volume_usd.h24 is 113486.87 across all pools, fdv_usd 139582.39, total_reserve_in_usd 54752.85. Gecko top_pools listed the SNDK book first. [claim R-8 R-9]

Blockscout holders_count 362; Gecko token info holders.count 368. [claim R-2 R-19]

## Material risks

- Quote token SNDK 0xB90A…6400 is a Robinhood Stock Token rail; HDD is not that token. [verified R-12 R-15]
- Pool USD reserve on DexScreener is HDD plus SNDK, not a USDG or WETH backstop. [claim R-7]
- No official domain this pass; @HardDiskDog is unconfirmed-official. [claim R-7 R-19]
- No audit report URL this pass. [unknown]
- Distinct CACHE/SNDK token 0xAfe41…1E18 and OP/SNDK token 0xF25C…3214 can be confused with this HDD/SNDK book. [verified R-16]
- Blockscout lists other Hard Disk Dog ERC-20s at different addresses. [verified R-17]
- X posts pointed this CA at netlify claim URLs. [claim R-21]

## Verification passes

- Receipts: Blockscout token/impl/factory/launcher/Airlock/SNDK and the create tx, RPC name/symbol/owner/code, DexScreener tokens and search, Gecko token/info/pool, /rhj/assets, @HardDiskDog, the netlify claim posts, and @yutahxd were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-7 R-12]
- Numbers: 117407.16 is the DexScreener HDD/SNDK pair 24h volume, not the Gecko token all-pools 113486.87. Liquidity 90688.18 is that DexScreener pair. Gecko pool reserve 89093.23 / volume 112717.02 is the same pair, different aggregator. Holders 362 vs 368. [claim R-2 R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that HDD is packed CACHE, or the official Sandisk / OP product, or a Bankr launch because Gecko named dex bankr-robinhood. CACHE is 0xAfe41…1E18. OP/SNDK is Sandisk Optimus 0xF25C…3214. Create is LongLauncher into Uniswap v4 PoolManager. /rhj/assets SNDK row is the rail, not this token. [inference R-12 R-16 R-8]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no hdd / HDD / Hard Disk Dog / 0xAE9b…1E18. content/dependencies/stock-tokens.yaml has SNDK at 0xB90A…6400.
- Explorer: Blockscout api/v2 search q=HDD, token, address, impl, factory, LongLauncher, Airlock, SNDK, create 0x35b7…76bd, Initialize / LaunchCreated / Lock logs, holders, counters. Chrome UA. Token creator_address_hash null; create tx used instead.
- RPC: eth_chainId/eth_getCode/eth_call/eth_getStorageAt/eth_getLogs with Chrome UA at blocks 53157364–53159526. factory() reverts; pool() 0xdead…dead.
- Aggregators: DexScreener latest/dex/tokens for HDD and search HDD SNDK. Gecko token GET 200 (first GET); Gecko token info GET 200; Gecko pool GET 200.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 SNDK at 0xB90A…6400 chainId 4663.
- Social: X keyword Latest HDD SNDK / Hard Disk Dog / $HDD; from:HardDiskDog; CA query 0xae9b…1e18; user search Hard Disk Dog.
- Failed: Blockscout token creator_address_hash and creation_transaction_hash null this pass; factory() on the token reverts; Gecko twitter_handle null; Gecko pool dex id bankr-robinhood vs DexScreener uniswap v4.
- Time: collection 2026-09-03T05:02Z–2026-09-03T05:12Z.
