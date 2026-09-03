---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: cache
name: CACHE
packet_tier: seed
as_of: 2026-09-03T04:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [cache]
allowed_paths:
  - research/inbox/packets/cache/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: CACHE
  aliases: ["Cache Cow"]
  symbols: [CACHE]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is the LONG token page app.long.xyz/tokens/0xafe41… not a project domain; Gecko token info websites []; census LONG already owns app.long.xyz"
  official_handle: "NULL — Gecko token info twitter_handle null; DexScreener info.socials lists x.com/CacheCowLong; @CacheCowLong bio names CACHE/SNDK but no contract this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko token info, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "CACHE is the ERC-20 at 0xAfe41…1E18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; DexScreener websites is the LONG token page, which census LONG already owns"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "CACHE is 0xAfe41…1E18 paired to SNDK 0xB90A…6400; different CA, quote, name and handle"
        - "No shared domain or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "CACHE is a LongLauncher DopplerERC20V1 clone in a Uniswap v4 CACHE/SNDK pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xAfe41…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create minted Cache Cow / CACHE into Uniswap v4 pool 0x23bc…404b quoted against Sandisk Corporation • Robinhood Token SNDK 0xB90A…6400. SNDK is the rail in GET /rhj/assets. Distinct from OP/SNDK (Sandisk Optimus 0xF25C…3214). No bidirectional project domain or handle this pass. [R-1] [R-2] [R-3] [R-4] [R-7] [R-12] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: app, url: "https://app.long.xyz/tokens/0xafe41f4356c24f716111de1fbbc84e061d291e18", authenticity: confirmed }
  - { kind: x, url: "https://x.com/CacheCowLong", authenticity: unconfirmed }

deployments:
  - label: CACHE token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xAfe41f4356c24f716111DE1fbbC84e061D291E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:32:00Z
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
      seen: 2026-09-03T04:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-11]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-13]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-14]
  - label: SNDK quote (create numeraire / pair quote / Robinhood Stock Token rail)
    role: token
    address:
      value: "0xB90A19fF0Af67f7779afF50A882A9CfF42446400"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-12, R-15]

metrics:
  - { kind: tvl, value: 517626.29, currency: USD, as_of: 2026-09-03T04:35:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xAfe41…1E18 pair 0x23bc…404b CACHE/SNDK Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 2920351.77, currency: USD, as_of: 2026-09-03T04:35:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xAfe41…1E18 pair 0x23bc…404b CACHE/SNDK volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 2921925.11, currency: USD, as_of: 2026-09-03T04:35:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xafe41…1e18 volume_usd.h24 (all pools, not a CACHE/SNDK pool slice; pool GET 429 this pass)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 2741437, currency: USD, as_of: 2026-09-03T04:35:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xAfe41…1E18 pair 0x23bc…404b CACHE/SNDK fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 2917945.22, currency: USD, as_of: 2026-09-03T04:35:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xafe41…1e18 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 2453, currency: null, as_of: 2026-09-03T04:32:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xAfe41…1E18 holders_count", class: claim, receipt_ids: [R-2] }
  - { kind: holders, value: 2321, currency: null, as_of: 2026-09-03T04:14:09Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xafe41…1e18/info holders.count last_updated 2026-09-03T04:14:09Z", class: claim, receipt_ids: [R-9] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:46:00Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32abfc0 (53133248) then 0x32ac36a (53134186). Token 0xAfe41…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3Be8B97F…C599. name Cache Cow; symbol CACHE; decimals 18; totalSupply 1e27; owner() 0xeb7c0347…0862 (Airlock, 5695 bytes code); factory() reverts. EIP-1967 implementation slot zero. SNDK 0xB90A…6400 name Sandisk Corporation • Robinhood Token symbol SNDK decimals 18 totalSupply 1095663e18 code 283 B. Create-from 0x121dEfC0…5999 code 23 B EIP-7702 prefix ef0100." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:38:00Z, receipt_ids: [R-1, R-2, R-4, R-10, R-11, R-13, R-15, R-19], result: "Blockscout api/v2 Chrome UA: token is_contract true is_verified true name Cache Cow proxy_type eip1167 creator_address_hash DopplerERC20V1Factory 0x1B37…b69a creation_transaction_hash 0x4cb9fd69…295a implementations DopplerERC20V1 0x3Be8B97F…C599. Token symbol CACHE holders_count 2453 total_supply 1e27. Tx timestamp 2026-08-28T01:47:59Z block 47918181 from EIP-7702 0x121dEfC0…5999 to LongLauncher 0x22e9…eeED method create status ok; decoded numeraire 0xB90A19fF…6400 token factory 0x1B37…b69a name Cache Cow symbol CACHE supply 1e27. PoolManager Initialize id 0x23bc…404b currency0 CACHE currency1 SNDK. LaunchCreated normalizedTicker CACHE." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-7, R-8, R-9, R-16, R-17], result: "DexScreener latest/dex/tokens/0xAfe41…1E18: 11 robinhood uniswap pairs. Top CACHE/SNDK v4 0x23bc…404b quote SNDK 0xB90A…6400 liquidity.usd 517626.29 volume.h24 2920351.77 fdv/marketCap 2741437 pairCreatedAt 1787881679000 (2026-08-28T01:47:59Z) info.websites app.long.xyz/tokens/0xafe41… info.socials x.com/CacheCowLong. Gecko token GET 200 fdv_usd 2917945.22 volume_usd.h24 2921925.11 total_reserve_in_usd 0.0 market_cap_usd null; top_pools listed two CACHE/USDG ids and one CACHE/ETH id, not 0x23bc…404b. Gecko info websites [] twitter_handle null holders.count 2321. Gecko pool GET for 0x23bc…404b HTTP 429, not retried. Distinct DexScreener search hits: OP/SNDK Sandisk Optimus 0xF25C…3214; CacheCat/SNDK 0x08AA…1E18 and 0xe449…f201." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:42:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one SNDK hit tokenName Sandisk Corporation • Robinhood Token deployments[0] contractAddress 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 chainId 4663 status ASSET_STATUS_ACTIVE isin US80004C2008. SNDK is the rail, not this token." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T04:48:00Z, receipt_ids: [R-7, R-9, R-20, R-22], result: "DexScreener websites the LONG token page and socials @CacheCowLong. Gecko info twitter_handle null websites []. @CacheCowLong bio The memory stonk memecoin cache cow / ticker $cache / paired to SanDisk CACHE/SNDK; Latest posts this pass do not embed CA 0xAfe41…1E18. app.long.xyz/tokens/0xafe41… Cloudflare HTTP 403 on curl. No bidirectional project domain." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create minted a 1e9-supply DopplerERC20V1 EIP-1167 clone into a Uniswap v4 pool quoted against SNDK 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 (Sandisk Corporation • Robinhood Token)", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Cache Cow", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "CACHE", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xAfe41f4356c24f716111DE1fbbC84e061D291E18", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: identity.handle, value: "NULL — Gecko twitter_handle null; DexScreener socials x.com/CacheCowLong; bio names CACHE/SNDK but no CA this pass; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-7, R-9, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-1, R-3, R-4, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-7, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: relationship, value: "Created via LongLauncher.create 2026-08-28T01:47:59Z at 0x22e99278308B393ea1260859B181AD7E78f5eeED; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; create from EIP-7702 0x121dEfC0f249cc66Ab0522b8346c09790eC65999, which is also the 95% Lock beneficiary", class: verified, observed_at: 2026-09-03T04:38:00Z, receipt_ids: [R-4, R-19], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from OP/SNDK Sandisk Optimus 0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 pair 0x62e9…dc67 (DexScreener websites sandisk.com/en-gb/campaigns/op, socials x.com/sandiskoptimus, liq 46298.89 vol 510536.83). Distinct from CacheCat/SNDK 0x08AA…1E18 and 0xe449…f201. Same SNDK rail 0xB90A…6400, different CAs. Not packed cashcat CASHCAT 0x020b…18b4.", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-7, R-16, R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Primary book CACHE/SNDK Uniswap v4 pair 0x23bcbfacd38446f8beaeb3af134e7028a2c385149b2fae415fe83775bb9a404b quote 0xB90A…6400; DexScreener also lists CACHE/USDG and CACHE/ETH books with far less liquidity than the SNDK book", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener CACHE/SNDK Uniswap v4 liquidity.usd 517626.29 volume.h24 2920351.77 fdv/marketCap 2741437", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko token volume_usd.h24 2921925.11 fdv_usd 2917945.22 total_reserve_in_usd 0.0 (all-pools token endpoint; CACHE/SNDK pool GET 429 this pass; top_pools omitted 0x23bc…404b)", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: 2453, class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 2321, class: verified, observed_at: 2026-09-03T04:45:00Z, receipt_ids: [R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SNDK 0xB90A19fF0Af67f7779afF50A882A9CfF42446400, a Robinhood Stock Token rail in GET /rhj/assets (194 assets, one SNDK row, chainId 4663). Venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x23bc…404b", class: verified, observed_at: 2026-09-03T04:42:00Z, receipt_ids: [R-3, R-4, R-12, R-15, R-19], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-16, field: control.owner, value: "owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-3, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: control.proxy, value: "EIP-1167 minimal proxy; implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599, verified file src/tokens/DopplerERC20V1.sol; EIP-1967 implementation slot zero", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-1, R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-18, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: 0x121dEfC0…5999 95% and 0x21E2ce70…7A66 5%; create from is the 95% address", class: verified, observed_at: 2026-09-03T04:38:00Z, receipt_ids: [R-4, R-19], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-19, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-20, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: identity.domain, value: "NULL — DexScreener websites is the LONG pad token page; Gecko info websites []", class: claim, observed_at: 2026-09-03T04:45:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: security.audit, value: "No audit report URL was located on DexScreener, Gecko token info, the LONG token page fetch, @CacheCowLong, or the DopplerERC20V1 source header this pass", class: unknown, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@CacheCowLong.role", value: project, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@CacheCowLong.slug", value: cache, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@CacheCowLong.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-7, R-9, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "third-party-link / copypasta-pattern: X posts pointed $CACHE CA 0xAfe41…1E18 at crypto-keo.netlify.app/claim and robinhood-main-dex-*.netlify.app/vote; not DexScreener socials", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: candidate, value: "cache | CACHE | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: deployment.address, value: "0xB90A19fF0Af67f7779afF50A882A9CfF42446400", class: verified, observed_at: 2026-09-03T04:42:00Z, receipt_ids: [R-3, R-12, R-15], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-29, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-30, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:38:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-31, field: identity.alias, value: "Cache Cow", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-32, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T04:38:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-11, CLM-12]
    material_effect: "CACHE fdv is 2741437 on DexScreener CACHE/SNDK and 2917945.22 on Gecko token fdv_usd; Gecko token volume_usd.h24 2921925.11 is all-pools and top_pools omitted the SNDK book; pool GET 429"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-13, CLM-14]
    material_effect: "CACHE holders are 2453 on Blockscout and 2321 on Gecko token info"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "LongLauncher create minted Cache Cow / CACHE against SNDK"
    summary: "Tx 0x4cb9…295a from 0x121d…5999 at 2026-08-28T01:47:59Z; LaunchCreated pool id 0x23bc…404b numeraire SNDK 0xB90A…6400."
    occurred_at: 2026-08-28T01:47:59Z
    observed_at: 2026-09-03T04:38:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-19]
  - id: EVT-2
    type: onchain
    title: "DexScreener CACHE/SNDK 24h volume ~$2.92M, liquidity ~$518k"
    summary: "DexScreener pair 0x23bc…404b volume.h24 2920351.77 liquidity.usd 517626.29 fdv 2741437. Gecko token all-pools volume_usd.h24 2921925.11; pool GET 429."
    occurred_at: 2026-09-03T04:35:00Z
    observed_at: 2026-09-03T04:35:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-3
    type: ct
    title: "@CacheCowLong posted Longfolio? Game on."
    summary: "@CacheCowLong posted Longfolio? Game on. (2095321029195297022) and It's time. (2095297313832890399). Bio names CACHE/SNDK, no CA."
    occurred_at: 2026-09-03T01:20:37Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: ct
    title: "@FarmerJoe0x posted $cache as the SNDK onchain pair"
    summary: "@FarmerJoe0x posted $cache being the enabler of bringing $SNDK onchain, Uniswap v4 hooks, and MemeFi taxes into stock-token liquidity."
    occurred_at: 2026-09-03T04:22:37Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-5
    type: ct
    title: "X posts linked the CACHE CA to netlify claim/vote pages"
    summary: "Posts used CA 0xAfe41…1E18 with crypto-keo.netlify.app/claim and robinhood-main-dex-*.netlify.app/vote. Flag third-party-link / copypasta-pattern."
    occurred_at: 2026-09-03T03:53:16Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-21]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0xAfe41…1E18 Cache Cow", url: "https://robinhoodchain.blockscout.com/address/0xAfe41f4356c24f716111DE1fbbC84e061D291E18", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-6, CLM-17, CLM-20, CLM-27, CLM-31, CLM-32], excerpt: "hash 0xAfe41f4356c24f716111DE1fbbC84e061D291E18 name Cache Cow is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x4cb9fd6983e9645dfe5ce0ae828eaccac3ac9fd806e004e18be074c601e5295a." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xAfe41…1E18", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xAfe41f4356c24f716111DE1fbbC84e061D291E18", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-13, CLM-20, CLM-31], excerpt: "address_hash 0xAfe41f4356c24f716111DE1fbbC84e061D291E18 name Cache Cow symbol CACHE decimals 18 type ERC-20 holders_count 2453 total_supply 1000000000000000000000000000 circulating_market_cap null volume_24h null." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / owner at blocks 53133248–53134186", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-15, CLM-16, CLM-17, CLM-19, CLM-28, CLM-29, CLM-31], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32abfc0 then 0x32ac36a. Token code 44 B EIP-1167 impl 0x3Be8B97F…C599. name Cache Cow symbol CACHE decimals 18 totalSupply 1e27 owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 factory() reverts. SNDK name Sandisk Corporation • Robinhood Token symbol SNDK code 283 B. Airlock code 5695 B." }
  - { id: R-4, publisher: Blockscout, title: "Creation tx 0x4cb9fd69…295a", url: "https://robinhoodchain.blockscout.com/tx/0x4cb9fd6983e9645dfe5ce0ae828eaccac3ac9fd806e004e18be074c601e5295a", published_at: 2026-08-28T01:47:59Z, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-4, CLM-6, CLM-8, CLM-18, CLM-30, EVT-1], excerpt: "timestamp 2026-08-28T01:47:59.000000Z block_number 47918181 from 0x121dEfC0f249cc66Ab0522b8346c09790eC65999 (is_contract true EIP7702StatelessDeleGator) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create status ok. decoded numeraire 0xB90A19fF…6400 token factory 0x1B37…b69a name Cache Cow symbol CACHE supply 1e27." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens CACHE", url: "https://api.dexscreener.com/latest/dex/tokens/0xAfe41f4356c24f716111DE1fbbC84e061D291E18", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-11, CLM-19, CLM-21, CLM-23, CLM-24, CLM-25, CLM-27, EVT-2], excerpt: "11 robinhood uniswap pairs. Top pairAddress 0x23bcbfacd38446f8beaeb3af134e7028a2c385149b2fae415fe83775bb9a404b labels v4 base Cache Cow / CACHE quote Sandisk Corporation • Robinhood Token / SNDK 0xB90A19fF…6400 liquidity.usd 517626.29 volume.h24 2920351.77 fdv 2741437 marketCap 2741437 pairCreatedAt 1787881679000. info.websites app.long.xyz/tokens/0xafe41… info.socials x.com/CacheCowLong." }
  - { id: R-8, publisher: GeckoTerminal, title: "Cache Cow token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xafe41f4356c24f716111de1fbbc84e061d291e18", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12, EVT-2], excerpt: "HTTP 200. name Cache Cow symbol CACHE decimals 18 total_supply 1e27 price_usd 0.002917945219 fdv_usd 2917945.21949405 market_cap_usd null volume_usd.h24 2921925.1089782 total_reserve_in_usd 0.0 coingecko_coin_id null. top_pools 0x4bc1…ccf9 0x8804…8d11 0x4d46…98c4 (USDG/ETH books), not CACHE/SNDK 0x23bc…404b." }
  - { id: R-9, publisher: GeckoTerminal, title: "Cache Cow token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xafe41f4356c24f716111de1fbbc84e061d291e18/info", published_at: null, accessed_at: 2026-09-03T04:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-5, CLM-14, CLM-21, CLM-25], excerpt: "HTTP 200. websites [] twitter_handle null telegram_handle null discord_url null. holders.count 2321 last_updated 2026-09-03T04:14:09Z. gt_verified false. coingecko_coin_id null." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x3Be8B97F…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17, CLM-29], excerpt: "name DopplerERC20V1 is_contract true is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol compiler v0.8.26+commit.8a97fa7a verified_at 2026-07-01T19:42:07Z." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-32], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1Factory.sol compiler v0.8.26 verified_at 2026-07-01T19:42:15Z." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:42:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-15, CLM-28], excerpt: "HTTP 200. assets length 194. One SNDK hit tokenSymbol SNDK tokenName Sandisk Corporation • Robinhood Token deployments contractAddress 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 chainId 4663 status ASSET_STATUS_ACTIVE isin US80004C2008." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-30], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true is_partially_verified false file_path src/LongLauncher.sol compiler v0.8.26 verified_at 2026-07-14T11:23:57Z." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9 proxy_type null." }
  - { id: R-15, publisher: Blockscout, title: "Token 0xB90A…6400 Sandisk Corporation • Robinhood Token / SNDK", url: "https://robinhoodchain.blockscout.com/address/0xB90A19fF0Af67f7779afF50A882A9CfF42446400", published_at: null, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-28], excerpt: "hash 0xB90A19fF0Af67f7779afF50A882A9CfF42446400 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Sandisk Corporation • Robinhood Token symbol SNDK decimals 18 holders_count 24567 total_supply 1095663000000000000000." }
  - { id: R-16, publisher: DexScreener, title: "latest/dex/tokens OP Sandisk Optimus", url: "https://api.dexscreener.com/latest/dex/tokens/0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "base 0xF25Ccb1036C41e953F84eC9F3cC72f8d73953214 name Sandisk Optimus symbol OP. Top pair OP/SNDK v4 0x62e9d888f0a5ac01ceb645b548b0eb18e0ee921784649fe365ce8baec5ebdc67 quote 0xB90A19fF…6400 liquidity.usd 46298.89 volume.h24 510536.83 pairCreatedAt 1788210166000. info.websites https://www.sandisk.com/en-gb/campaigns/op socials x.com/sandiskoptimus." }
  - { id: R-17, publisher: Blockscout, title: "Token 0x08AA…1E18 CacheCat", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x08AA6aC85B52905CfC5f77404BE07fCB38E51E18", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "address_hash 0x08AA6aC85B52905CfC5f77404BE07fCB38E51E18 name CacheCat symbol CACHECAT holders_count 9 total_supply 1000000000000000000000000000. DexScreener also lists CacheCat 0xe44946f40Ab0bd8256D7776a2f6145b4B776f201 / SNDK. Different CAs from CACHE 0xAfe41…1E18." }
  - { id: R-19, publisher: Blockscout, title: "LaunchCreated / Initialize logs for CACHE", url: "https://robinhoodchain.blockscout.com/tx/0x4cb9fd6983e9645dfe5ce0ae828eaccac3ac9fd806e004e18be074c601e5295a", published_at: 2026-08-28T01:47:59Z, accessed_at: 2026-09-03T04:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-15, CLM-18, EVT-1], excerpt: "PoolManager Initialize id 0x23bcbfacd38446f8beaeb3af134e7028a2c385149b2fae415fe83775bb9a404b currency0 0xAfe41…1E18 currency1 0xB90A…6400 hooks 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544. Lock beneficiaries 0x121dEfC0…5999 95% and 0x21E2ce70…7A66 5%. LaunchCreated normalizedTicker CACHE numeraire SNDK." }
  - { id: R-20, publisher: "@CacheCowLong", title: "Longfolio? Game on.", url: "https://x.com/CacheCowLong/status/2095321029195297022", published_at: 2026-09-03T01:20:37Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-5, CLM-23, CLM-24, CLM-25, EVT-3], excerpt: "Bio: The memory stonk memecoin cache cow. The ticker is $cache. $cache is paired to SanDisk - CACHE/SNDK. Post 2095321029195297022 Longfolio? Game on. Post 2095297313832890399 It's time. Latest posts this pass do not embed 0xAfe41…1E18." }
  - { id: R-21, publisher: "@31NJPgflZ9JQpWZ", title: "$CACHE claim netlify link", url: "https://x.com/31NJPgflZ9JQpWZ/status/2095359446595539225", published_at: 2026-09-03T03:53:16Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-5], excerpt: "$CACHE not dead lol holders got smth today claim went thru CA: 0xAfe41f4356c24f716111DE1fbbC84e061D291E18 https://crypto-keo.netlify.app/claim?contract=0xAfe41f4356c24f716111DE1fbbC84e061D291E18. Separate posts used robinhood-main-dex-*.netlify.app/vote." }
  - { id: R-22, publisher: Cloudflare, title: "app.long.xyz token page HTTP 403", url: "https://app.long.xyz/tokens/0xafe41f4356c24f716111de1fbbc84e061d291e18", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-21], excerpt: "HTTP 403. HTML title Attention Required! | Cloudflare. No token name, handle, or contract string in the challenge page this pass." }
  - { id: R-23, publisher: "@FarmerJoe0x", title: "$cache being the enabler of bringing $SNDK onchain", url: "https://x.com/FarmerJoe0x/status/2095366831200403805", published_at: 2026-09-03T04:22:37Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "They don't get @Natan_benish vision yet and I'm excited to help bring part of it to life with $cache being the enabler of bringing $SNDK onchain. Uniswap v4 hooks anchored to Chainlink price feeds. Memecoins built around the assets, with buy/sell taxes flowing into community-owned liquidity pools." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xAfe41…1E18?", checked: "DexScreener info.websites is the LONG token page; info.socials @CacheCowLong; Gecko twitter_handle null websites []; @CacheCowLong bio names CACHE/SNDK but no CA; long.xyz curl 403, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts from @CacheCowLong that embed the CA" }
  - { priority: P0, question: "What is live Gecko reserve_in_usd / volume_usd.h24 on CACHE/SNDK pool 0x23bc…404b?", checked: "Gecko token GET 200; pool GET HTTP 429, not retried; token top_pools omitted the SNDK book; DexScreener pair liquidity.usd 517626.29 volume.h24 2920351.77, 2026-09-03", next: "one Gecko pool GET after the 429 window; do not loop" }
  - { priority: P1, question: "Does @CacheCowLong pin CA 0xAfe41…1E18 or a domain that cross-links?", checked: "bio CACHE/SNDK, Latest posts Longfolio / It's time, no CA in those posts this pass, 2026-09-03", next: "re-read the profile and any pinned post" }
  - { priority: P1, question: "Are the netlify claim/vote URLs a copypasta pattern across other Robinhood CAs?", checked: "crypto-keo.netlify.app/claim and robinhood-main-dex-*.netlify.app/vote used with this CA on X, 2026-09-03", next: "compare the same hosts against other packed tokens" }
  - { priority: P2, question: "Does Sandisk Optimus OP 0xF25C…3214 share a deployer with CACHE?", checked: "DexScreener OP/SNDK is a different CA, name, handle, and site; CACHE create is LongLauncher, 2026-09-03", next: "Blockscout creator_address_hash on 0xF25C…3214 if an OP packet is assigned" }
---

# CACHE — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against SNDK. LongLauncher deploys Cache Cow (CACHE) in one create call and seeds the CACHE/SNDK book. Traders buy and sell CACHE on Uniswap v4. SNDK is a Robinhood Stock Token rail. Distinct from OP/SNDK. No official site or handle was located this pass.

Themes: memecoin, stock-paired:SNDK, rwa

## Why it matters

The CACHE/SNDK Uniswap v4 book printed about $2.92M of 24h volume on DexScreener at collection, with liquidity about $518k. GET /rhj/assets has an SNDK row at 0xB90A…6400, so the pair leg is the Sandisk Corporation • Robinhood Token rather than a third-party TokenizedStock. A second SNDK book, OP/SNDK (Sandisk Optimus 0xF25C…3214), is a different token.

## What could go wrong

USD liquidity figures on the CACHE/SNDK book count both sides, and the quote side is SNDK, not USDG. Gecko token total_reserve_in_usd was 0.0 and the pool endpoint returned 429, so aggregator reserve is not reproduced on Gecko this pass. No official handle was located, so comms surfaces stay unconfirmed-official. Netlify claim/vote links used this CA.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0x121dEfC0…5999 at 2026-08-28T01:47:59Z minted Cache Cow / CACHE supply 1e9*1e18 into Uniswap v4 poolId 0x23bc…404b. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. factory() on the token reverts. [verified R-3 R-4 R-19]

The pair quote is SNDK 0xB90A…6400. PoolManager is 0x8366…0951. DopplerHookInitializer 0x4e34…a544 locked beneficiaries 95/5. Secondary CACHE/USDG and CACHE/ETH books exist on DexScreener with far less liquidity than the SNDK book. [verified R-7 R-15 R-19]

## Control and security

owner() returns Airlock 0xeb7C…0862. Deployer of the clone is the factory; the create caller is an EIP-7702 account with 23 bytes of code. Implementation DopplerERC20V1 is partially verified (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). LongLauncher is verified. No audit report URL was located this pass. [verified R-3 R-10 R-13 R-14] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites is the LONG token page; info.socials lists @CacheCowLong. Gecko twitter_handle is null. @CacheCowLong bio names CACHE/SNDK and does not embed the CA this pass. Flag unconfirmed-official. [claim R-7 R-9 R-20]

SNDK 0xB90A…6400 is the Sandisk Corporation • Robinhood Token in GET /rhj/assets. That rail is not this memecoin. [verified R-12 R-15]

## Economics and activity

DexScreener CACHE/SNDK Uniswap v4 24h volume is 2920351.77 USD and liquidity.usd is 517626.29 at 2026-09-03T04:35:00Z. fdv/marketCap is 2741437. Pair created 2026-08-28T01:47:59Z. [claim R-7]

Gecko token volume_usd.h24 is 2921925.11 across all pools, fdv_usd 2917945.22, total_reserve_in_usd 0.0. Gecko pool GET for 0x23bc…404b returned 429 and was not retried. Gecko top_pools listed USDG/ETH books, not the SNDK book. [claim R-8]

Blockscout holders_count 2453. Gecko info holders.count 2321. [claim R-2 R-9]

## Material risks

- Quote token SNDK 0xB90A…6400 is a Robinhood Stock Token rail; CACHE is not that token. [verified R-12 R-15]
- Pool USD reserve on DexScreener is CACHE plus SNDK, not a USDG or WETH backstop. [claim R-7]
- Gecko token reserve 0.0 and pool 429 this pass, so Gecko book liquidity is unverified. [claim R-8]
- No official handle or domain this pass; @CacheCowLong is unconfirmed-official. [claim R-7 R-9 R-20]
- Third-party-link / copypasta-pattern netlify claim and vote URLs used this CA. [claim R-21]
- No audit report URL this pass. [unknown]
- Distinct OP/SNDK token 0xF25C…3214 can be confused with this CACHE/SNDK book. [verified R-16]

## Verification passes

- Receipts: Blockscout token/impl/factory/launcher/Airlock/SNDK and the create tx, RPC name/symbol/owner/code, DexScreener tokens, Gecko token and info, /rhj/assets, OP/SNDK DexScreener, CacheCat token, @CacheCowLong, the netlify claim post, and @FarmerJoe0x were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-7 R-12]
- Numbers: 2920351.77 is the DexScreener CACHE/SNDK pair 24h volume, not the Gecko token all-pools 2921925.11. Liquidity 517626.29 is that DexScreener pair. Gecko fdv_usd 2917945.22 is the token endpoint; DexScreener fdv 2741437 is the same pair, different aggregator. Holders 2453 vs 2321. [claim R-2 R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that CACHE is the official Sandisk / OP product, or that it is the LONG protocol. OP/SNDK is Sandisk Optimus 0xF25C…3214 with sandisk.com / @sandiskoptimus. CACHE is 0xAfe41…1E18 created by LongLauncher, entity_kind token. /rhj/assets SNDK row is the rail, not this token. [inference R-12 R-16]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no cache / CACHE / Cache Cow / 0xAfe41…1E18. content/dependencies/stock-tokens.yaml has SNDK at 0xB90A…6400.
- Explorer: Blockscout api/v2 token, address, impl, factory, LongLauncher, Airlock, SNDK, create 0x4cb9…295a, Initialize / LaunchCreated / Lock logs, holders. RPC eth_chainId/eth_getCode/eth_call/eth_getStorageAt with Chrome UA at blocks 53133248–53134186.
- Aggregators: DexScreener latest/dex/tokens for CACHE and OP, and search CACHE SNDK / OP SNDK. Gecko token GET 200; Gecko token info GET 200; Gecko pool GET 429 (not retried).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 SNDK at 0xB90A…6400 chainId 4663.
- Social: X keyword Latest CACHE SNDK / Cache Cow / $CACHE; from:CacheCowLong; CA query 0xAfe41…1E18; user search CacheCowLong / Cache Cow.
- Failed: Gecko pool 0x23bc…404b HTTP 429; app.long.xyz/tokens/0xafe41… HTTP 403 Cloudflare; factory() on the token reverts; @CacheCowLong Latest posts had no CA; Gecko top_pools omitted the SNDK book.
- Time: collection 2026-09-03T04:30Z–2026-09-03T04:50Z.
