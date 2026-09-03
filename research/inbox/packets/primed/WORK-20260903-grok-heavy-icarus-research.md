---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: primed
name: PRIMED
packet_tier: seed
as_of: 2026-09-03T05:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [primed]
allowed_paths:
  - research/inbox/packets/primed/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: PRIMED
  aliases: []
  symbols: [PRIMED]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener pair object has no info this pass; Gecko token attributes have no website field; Blockscout token page lists no homepage this pass; create calldata IPFS CID ipfs.io returned Cloudflare 403"
  official_handle: "NULL — DexScreener pair object has no info this pass; X user search for PRIMED returned unrelated handles (@primedropper, @PrimeDomina, @primediscussion); @primed_pf / @primedPF are a May 2026 Solana pump.fun ticker, not 0xeB57…1E18; no post this pass bidirectionally linked a project handle to the CA; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "PRIMED is the ERC-20 at 0xeB57…1E18 created through that launcher; entity_kind token, not protocol"
        - "Packed sender is a different LongLauncher AMZN pair at 0x4d41…1e18; packed rufus 0x218D…1E18; packed beefzos 0x21d3…1e18; packed waddles is Pons 0xbB6E…0CdD"
        - "No shared handle; no official PRIMED handle was located"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the AMZN/PRIMED pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0x4adc4def…822f calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "PRIMED is 0xeB57…1E18 paired to AMZN 0x12f1…bF54"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [ticker-only, same-normalized-name]
      contrary_signals:
        - "Census Pons is pons.family / @ponsdotfamily, a launchpad"
        - "A second PRIMED ERC-20 0x037344Ac04669A94c313A9F38B69aDe575431Bb3 is PonsV2LauncherToken launched via PonsV2LaunchAndBuy at 2026-09-02T20:46:29Z against AMZN"
        - "This packet's token 0xeB57…1E18 is DopplerERC20V1 via LongLauncher.create nine minutes later"
        - "No shared address, handle, or domain with census Pons"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xeB57…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create at 2026-09-02T20:55:20Z minted PRIMED / PRIMED into Uniswap v4 pool 0x5041…32eb quoted against Amazon • Robinhood Token AMZN 0x12f1…bF54. AMZN is the quote rail. owner() is Airlock 0xeb7C…0862. Distinct from packed sender/waddles/beefzos/rufus and from a same-ticker Pons PRIMED at 0x037344…1Bb3. No official site or handle this pass. [R-1] [R-5] [R-6] [R-7] [R-8] [R-11] [R-20] [R-22]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-9], note: "" }

links: []

deployments:
  - label: PRIMED token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-6]
  - label: DopplerERC20V1Factory (create tokenFactory)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-6]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-14]
  - label: Amazon • Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0x12f190a9F9d7D37a250758b26824B97CE941bF54"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-11, R-12]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:11:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6]

metrics:
  - { kind: volume_24h, value: 154206.41, currency: USD, as_of: 2026-09-03T05:10:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x504184ea9bf5784a5f6ff616655b534d617dcb7134d24b409190abbc64d932eb volume_usd.h24 (AMZN/PRIMED pool, not Gecko token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 71257.25, currency: USD, as_of: 2026-09-03T05:10:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x504184ea9bf5784a5f6ff616655b534d617dcb7134d24b409190abbc64d932eb reserve_in_usd (AMZN/PRIMED pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 46942.64, currency: USD, as_of: 2026-09-03T05:09:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18 fdv_usd (market_cap_usd null). Gecko pool fdv_usd 1997894.36 is AMZN-as-base, not PRIMED.", class: claim, receipt_ids: [R-8, R-9] }
  - { kind: volume_24h, value: 157793.21, currency: USD, as_of: 2026-09-03T05:09:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18 pair 0x504184ea…32eb PRIMED/AMZN Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 41522.95, currency: USD, as_of: 2026-09-03T05:09:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xeB57…1E18 pair 0x504184ea…32eb liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 46464, currency: USD, as_of: 2026-09-03T05:09:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xeB57…1E18 pair 0x504184ea…32eb fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 130, currency: null, as_of: 2026-09-03T05:06:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:11:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32b2ab8 (53160632). Token 0xeB57…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name() PRIMED symbol() PRIMED decimals 18 totalSupply 1e27 owner() Airlock 0xeb7c0347…0862 factory() reverts. AMZN 0x12f1…bF54 eth_getCode 283 bytes name() Amazon • Robinhood Token symbol() AMZN. Factory code 1912 B. Impl code 13927 B. Launcher code 5826 B. Airlock code 5695 B. Create-from 0x56ca…8A7b code 0x. Pons collision 0x037344…1Bb3 code 3248 B name() PRIMED symbol() PRIMED." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-5, R-12, R-14, R-18, R-20, R-22], result: "Blockscout api/v2 token 0xeB57…1E18 name PRIMED is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator_address_hash 0x1B37…b69a creation_transaction_hash 0x4adc4def…822f; token symbol PRIMED holders_count 130 total_supply 1e27. Tx 2026-09-02T20:55:20Z block 52871518 from 0x56ca…8A7b (is_contract false) to LongLauncher method create; decoded numeraire 0x12f1…bF54 tokenFactory 0x1B37…b69a name/symbol PRIMED supply 1e27. LaunchCreated normalizedTicker PRIMED reservedUntil 1788468920 (2026-09-03T20:55:20Z). PoolManager Initialize id 0x504184ea…32eb currency0 AMZN currency1 PRIMED fee 8388608 (dynamic-fee flag) hooks DopplerHookInitializer 0x4e34…a544. Zero-addr mint 1e27 to Airlock then LP to PoolManager. AMZN token name Amazon • Robinhood Token holders_count 37774. Search PRIMED also returns PonsV2LauncherToken 0x037344…1Bb3 holders_count 95." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-7, R-8, R-9, R-23, R-24], result: "DexScreener latest/dex/tokens/0xeB57…1E18 5 robinhood uniswap pairs; top PRIMED/AMZN v4 0x504184ea…32eb quote 0x12f1…bF54 Amazon • Robinhood Token / AMZN liquidity.usd 41522.95 volume.h24 157793.21 fdv/marketCap 46464 pairCreatedAt 1788382520000 (2026-09-02T20:55:20Z) info null. Secondary PRIMED/USDG and PRIMED/ETH books have <10 USD liquidity. DexScreener search also lists Pons PRIMED 0x037344…1Bb3 / AMZN liq 7683.14 vol 142919.59. Gecko first GET token HTTP 200. Gecko pool same address name AMZN / PRIMED dex bankr-robinhood volume_usd.h24 154206.407235023 reserve_in_usd 71257.2509 fdv_usd 1997894.36253206 (AMZN-as-base) pool_created_at 2026-09-02T20:55:20Z. Gecko token fdv_usd 46942.6433129641 market_cap_usd null volume_usd.h24 154206.560833828 (all pools). Gecko token/pools same pool fdv_usd 46942.6433129641." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:11:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0xeB57…1E18) word0 numeraire 0x12f190a9…bF54; word5 token 0xeB57…1E18; word1/word2 0xdead; Airlock owner() 0x21e2ce70…7a66. AMZN name() Amazon • Robinhood Token; symbol() AMZN." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one AMZN row tokenName Amazon • Robinhood Token deployments contractAddress 0x12f190a9F9d7D37a250758b26824B97CE941bF54 chainId 4663. tokenSymbol/tokenName scan for PRIMED returned 0 hits." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 PRIMED into a Uniswap v4 pool quoted against AMZN 0x12f1…bF54; Airlock getAssetData numeraire is that AMZN; LP addresses in getAssetData include 0xdead. Lock beneficiaries on DopplerHookInitializer: 0x56ca…8A7b 95% and Airlock owner 0x21E2…7A66 5%.", class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: PRIMED, class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: PRIMED, class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-5, R-6, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-5, R-6, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-1, R-5, R-6, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG: tx 0x4adc4def…822f from EOA 0x56ca…8A7b (code 0x) called LongLauncher.create; decoded tokenFactory DopplerERC20V1Factory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from census LONG (the factory), from packed sender 0x4d41…1e18, rufus 0x218D…1E18, beefzos 0x21d3…1e18, waddles 0xbB6E…0CdD, and from Pons PRIMED 0x037344…1Bb3.", class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-1, R-5, R-6, R-20, R-22], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset is the AMZN rail Amazon • Robinhood Token 0x12f190a9F9d7D37a250758b26824B97CE941bF54 (GET /rhj/assets 194 assets, one AMZN row, that contract, chainId 4663). PRIMED is not in the registry. AMZN is a rail, not the subject.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-7, R-8, R-11, R-12], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 pool 0x504184ea9bf5784a5f6ff616655b534d617dcb7134d24b409190abbc64d932eb; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood; PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951; Initialize fee 8388608 (dynamic-fee flag) hooks 0x4e34…a544", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-5, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info null; X user search returned unrelated handles; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko AMZN/PRIMED pool 0x504184ea…32eb volume_usd.h24 154206.407235023 reserve_in_usd 71257.2509 at 2026-09-03T05:10:00Z (pool slice, not Gecko token all-pools 154206.560833828). Gecko pool fdv_usd 1997894.36253206 is AMZN-as-base.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-8, R-9, R-24], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener same pair liquidity.usd 41522.95 volume.h24 157793.21 fdv/marketCap 46464 at 2026-09-03T05:09:00Z (hint ~43078 / ~156837 had moved by collection)", class: verified, observed_at: 2026-09-03T05:09:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 130, class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from 0x56ca850d9d9b790d5f08931fca1b2a59c8988A7b (EOA, code 0x)", class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on DexScreener, Gecko, Blockscout, or X search this pass", class: unknown, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Gecko dex id bankr-robinhood on the AMZN/PRIMED pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge PRIMED into census bankr.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-5, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "NULL — DexScreener info null; Gecko token has no website field", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: communications.status, value: "third-party-link: @0xCR33P posted a cr33per.net/robinhood/0xeb57…1e18 call page. Not a DexScreener social. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x12f190a9F9d7D37a250758b26824B97CE941bF54", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-1, R-2, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: candidate, value: "primed | PRIMED | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "Blockscout search PRIMED and DexScreener search also return PonsV2LauncherToken 0x037344Ac04669A94c313A9F38B69aDe575431Bb3 (holders_count 95, AMZN pair liq 7683.14). That is not this ERC-20. Flag ca-collision on the ticker.", class: claim, observed_at: 2026-09-03T05:09:00Z, receipt_ids: [R-20, R-22, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: economics.metric, value: "Gecko token fdv_usd 46942.6433129641 and token/pools fdv_usd 46942.6433129641; DexScreener fdv/marketCap 46464. Gecko pool fdv_usd 1997894.36253206 / market_cap_usd 1997894.56289225 is AMZN-as-base (base_token AMZN price_usd 257.13).", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-7, R-8, R-9, R-24], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-28, field: relationship, value: "AMZN is a rail shared with packed sender 0x4d41…1e18, rufus 0x218D…1E18, beefzos 0x21d3…1e18, and waddles 0xbB6E…0CdD. None of those addresses is 0xeB57…1E18.", class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13, CLM-27]
    material_effect: "Same AMZN/PRIMED pool 0x504184ea…32eb: Gecko reserve_in_usd 71257.25 vs DexScreener liquidity.usd 41522.95; 24h volume 154206.41 vs 157793.21; Gecko token fdv 46942.64 vs DexScreener fdv 46464 vs Gecko pool fdv 1997894.36 (AMZN-as-base). A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener PRIMED/AMZN 24h volume $157.8k, liquidity $41.5k"
    summary: "DexScreener pair 0x504184ea…32eb volume.h24 157793.21 liquidity.usd 41522.95 fdv 46464. Gecko same pool volume_usd.h24 154206 reserve_in_usd 71257."
    occurred_at: 2026-09-03T05:09:00Z
    observed_at: 2026-09-03T05:10:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "LongLauncher.create minted PRIMED against AMZN"
    summary: "Tx 0x4adc4def…822f from 0x56ca…8A7b at 2026-09-02T20:55:20Z; LaunchCreated ticker PRIMED; PoolManager Initialize id 0x504184ea…32eb."
    occurred_at: 2026-09-02T20:55:20Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
  - id: EVT-3
    type: ct
    title: "@TmsCrypto10 posted $primed with CA 0xeB57…1E18 as an Amazon runner"
    summary: "Posts: $primed with amazon is so good; Chart is $primed; Still waiting on a good Amazon runner / $Primed is it. Each embeds 0xeb57dd11c2c0f5e9834193bb71f72f02742a1e18."
    occurred_at: 2026-09-02T21:11:54Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-4
    type: ct
    title: "@OGAnsemExitLiq_ called 0xeB57…1E18 the only Amazon-paired token"
    summary: "Post: THIS IS THE ONLY TOKEN PAIRED TO AMAZON AS OF NOW, sitting at 50k, CA 0xeb57…1e18. Packed sender/waddles/beefzos/rufus are other AMZN-rail tokens."
    occurred_at: 2026-09-03T02:34:51Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: onchain
    title: "PonsV2LaunchAndBuy minted a same-ticker PRIMED 9 minutes earlier"
    summary: "Tx 0x31328a62…604e at 2026-09-02T20:46:29Z from 0x709A…D1FD to PonsV2LaunchAndBuy launched PRIMED / PRIMED 0x037344…1Bb3 against AMZN. Not this token."
    occurred_at: 2026-09-02T20:46:29Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-6
    type: ct
    title: "@0xCR33P posted a cr33per.net call page for CA 0xeB57…1E18"
    summary: "$PRIMED Off Longxyz on Robinhood; mc $79.4k vol $104k. Flag third-party-link."
    occurred_at: 2026-09-02T21:22:33Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xeB57…1E18 PRIMED / PRIMED", url: "https://robinhoodchain.blockscout.com/address/0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-7, CLM-14, CLM-22, CLM-24, CLM-28], excerpt: "hash 0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18 name PRIMED is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x4adc4def6b6b8ba45f346990e246cabeb3ee27cd1b9876f9b20e91bc3ed0822f. token symbol PRIMED decimals 18 total_supply 1000000000000000000000000000 holders_count 130 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-23], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768. Compiler v0.8.26 is_partially_verified true file_path src/tokens/DopplerERC20V1Factory.sol verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "Zero-addr mint of PRIMED 1e27", url: "https://robinhoodchain.blockscout.com/tx/0x4adc4def6b6b8ba45f346990e246cabeb3ee27cd1b9876f9b20e91bc3ed0822f", published_at: 2026-09-02T20:55:20Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, EVT-2], excerpt: "api/v2 token-transfers: type token_minting from 0x0000000000000000000000000000000000000000 to 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 value 1000000000000000000000000000 token PRIMED. Subsequent transfers move 1e27 to hook 0x4e34…a544 then 999999999999999999999998493 to PoolManager 0x8366…0951." }
  - { id: R-5, publisher: Blockscout, title: "create tx 0x4adc4def…822f", url: "https://robinhoodchain.blockscout.com/tx/0x4adc4def6b6b8ba45f346990e246cabeb3ee27cd1b9876f9b20e91bc3ed0822f", published_at: 2026-09-02T20:55:20Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-7, CLM-9, CLM-15, CLM-18, CLM-25, EVT-2], excerpt: "timestamp 2026-09-02T20:55:20.000000Z status ok block 52871518 from 0x56ca850d9d9b790d5f08931fca1b2a59c8988A7b (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire AMZN 0x12f1…bF54 tokenFactory 0x1B37…b69a name/symbol PRIMED supply 1e27. LaunchCreated ticker PRIMED reservedUntil 1788468920. Initialize id 0x504184ea…32eb fee 8388608 hooks 0x4e34…a544. Lock 0x21E2…7A66 5% and 0x56ca…8A7b 95%." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner(), Airlock getAssetData", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:11:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-15, CLM-17, CLM-21, CLM-22, CLM-23], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32b2ab8 (53160632). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name PRIMED symbol PRIMED decimals 18 totalSupply 1e27. owner() 0xeb7C…0862. factory() reverts. AMZN name Amazon • Robinhood Token symbol AMZN. Airlock owner() 0x21e2ce70…7a66 getAssetData numeraire 0x12f1…bF54 token 0xeB57…1E18 LP slots 0xdead. Create-from 0x56ca…8A7b code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens PRIMED", url: "https://api.dexscreener.com/latest/dex/tokens/0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18", published_at: null, accessed_at: 2026-09-03T05:09:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-11, CLM-13, CLM-17, CLM-18, CLM-19, CLM-24, CLM-27, CLM-28, EVT-1], excerpt: "5 robinhood uniswap pairs. Top pairAddress 0x504184ea9bf5784a5f6ff616655b534d617dcb7134d24b409190abbc64d932eb labels v4 base PRIMED / PRIMED 0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18 quote Amazon • Robinhood Token / AMZN 0x12f190a9F9d7D37a250758b26824B97CE941bF54 liquidity.usd 41522.95 volume.h24 157793.21 fdv 46464 marketCap 46464 pairCreatedAt 1788382520000. info null. Secondary PRIMED/USDG liq 8.69 and PRIMED/ETH liq 9.85." }
  - { id: R-8, publisher: GeckoTerminal, title: "AMZN/PRIMED Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x504184ea9bf5784a5f6ff616655b534d617dcb7134d24b409190abbc64d932eb", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-10, CLM-12, CLM-18, CLM-27, EVT-1], excerpt: "name AMZN / PRIMED pool_created_at 2026-09-02T20:55:20Z fdv_usd 1997894.36253206 market_cap_usd 1997894.56289225 volume_usd.h24 154206.407235023 reserve_in_usd 71257.2509 transactions.h24 buys 1433 sells 1195. dex bankr-robinhood. relationships base_token robinhood_0x12f190a9f9d7d37a250758b26824b97ce941bf54 quote_token robinhood_0xeb57dd11c2c0f5e9834193bb71f72f02742a1e18. base_token_price_usd 257.131008198794 quote_token_price_usd 0.0000469426433129641. First GET HTTP 200." }
  - { id: R-9, publisher: GeckoTerminal, title: "PRIMED token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18", published_at: null, accessed_at: 2026-09-03T05:09:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12, CLM-19, CLM-27], excerpt: "name PRIMED symbol PRIMED decimals 18 total_supply 1e27 price_usd 0.00004694264331 fdv_usd 46942.6433129641 market_cap_usd null volume_usd.h24 154206.560833828 total_reserve_in_usd 49435.5137831215. coingecko_coin_id null. image_url null. No website field. First GET HTTP 200." }
  - { id: R-10, publisher: GeckoTerminal, title: "AMZN/PRIMED pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x504184ea9bf5784a5f6ff616655b534d617dcb7134d24b409190abbc64d932eb", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "HTML companion to the pool API. Pool 0x504…32eb AMZN 0x12f…bf54 PRIMED 0xeb5…1e18. Live numbers taken from the JSON API." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-21], excerpt: "HTTP 200. assets length 194. One AMZN hit: tokenSymbol AMZN tokenName Amazon • Robinhood Token deployments contractAddress 0x12f190a9F9d7D37a250758b26824B97CE941bF54 chainId 4663 networkName Robinhood Chain. tokenSymbol/tokenName scan for PRIMED returned 0 hits." }
  - { id: R-12, publisher: Blockscout, title: "Token 0x12f1…bF54 Amazon • Robinhood Token / AMZN", url: "https://robinhoodchain.blockscout.com/address/0x12f190a9F9d7D37a250758b26824B97CE941bF54", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-21], excerpt: "hash 0x12f190a9F9d7D37a250758b26824B97CE941bF54 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Amazon • Robinhood Token symbol AMZN decimals 18 total_supply 7769948000000000000000 holders_count 37774." }
  - { id: R-13, publisher: Blockscout, title: "DopplerERC20V1 verified source", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599?tab=contract", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-22, CLM-23], excerpt: "ContractName DopplerERC20V1 compiler v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. Factory 0x1B37…b69a DopplerERC20V1Factory same compiler, src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-14, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_fully_verified true file_path src/LongLauncher.sol verified_at 2026-07-14T11:23:57Z." }
  - { id: R-15, publisher: "@TmsCrypto10", title: "$primed with amazon is so good", url: "https://x.com/TmsCrypto10/status/2095258438032875534", published_at: 2026-09-02T21:11:54Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "$primed with amazon is so good Prob better on Long tbh 0xeb57dd11c2c0f5e9834193bb71f72f02742a1e18. Follow-ups 2095260282863899021 Ok its $primed; 2095264808232759753 Chart is $primed; 2095279056317038870 Still waiting on a good Amazon runner $Primed is it, same CA." }
  - { id: R-16, publisher: "@OGAnsemExitLiq_", title: "THIS IS THE ONLY TOKEN PAIRED TO AMAZON", url: "https://x.com/OGAnsemExitLiq_/status/2095339712059764992", published_at: 2026-09-03T02:34:51Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "THIS IS THE ONLY TOKEN PAIRED TO AMAZON AS OF NOW HELLO???? And it's sitting at 50k wtffffff 0xeb57dd11c2c0f5e9834193bb71f72f02742a1e18. Prior 2095338225564889297: This may be the only Amazon paired token, same CA." }
  - { id: R-17, publisher: "@0xCR33P", title: "$PRIMED Off Longxyz call page", url: "https://x.com/0xCR33P/status/2095261120999108957", published_at: 2026-09-02T21:22:33Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-20, EVT-6], excerpt: "$PRIMED: Rejected $79k twice. Comps like APU hit $1.1M from here. Trading at mc $79.4k, vol $104k, up 281% since launch. Off Longxyz on Robinhood. [VOLUME SPIKE] call: watch · conviction low https://cr33per.net/robinhood/0xeb57dd11c2c0f5e9834193bb71f72f02742a1e18" }
  - { id: R-18, publisher: Blockscout, title: "LaunchCreated / Initialize / Lock logs", url: "https://robinhoodchain.blockscout.com/tx/0x4adc4def6b6b8ba45f346990e246cabeb3ee27cd1b9876f9b20e91bc3ed0822f", published_at: 2026-09-02T20:55:20Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-9, EVT-2], excerpt: "LaunchCreated poolOrHook 0xeB57…1E18 asset 0xeB57…1E18 numeraire 0x12f1…bF54 poolInitializer 0x4e34…a544 launcher 0x56ca…8A7b deployedAt 1788382520 reservedUntil 1788468920 normalizedTicker PRIMED. Initialize id 0x504184ea…32eb. Create asset 0xeB57…1E18 numeraire AMZN. Lock beneficiaries 0x21E2…7A66 5% and 0x56ca…8A7b 95%." }
  - { id: R-19, publisher: "X user search", title: "User search PRIMED", url: "https://x.com/search?q=PRIMED&f=user", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-11], excerpt: "Top hits: @primedropper PrimeDrop Amazon affiliate, @PrimeDomina, @primediscussion sports, @PrimeDaddyAI, @PrimeDropOff. @primed_pf bio is a May 2026 Solana pump.fun ticker, not 0xeB57…1E18. None listed CA 0xeB57…1E18 or Robinhood Chain in the returned bios this pass." }
  - { id: R-20, publisher: Blockscout, title: "Search PRIMED", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=PRIMED", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-26], excerpt: "Chrome UA. Hit 8 ERC-20 name PRIMED symbol PRIMED address_hash 0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18 holders_count 130. Hit 11 ERC-20 name PRIMED symbol PRIMED address_hash 0x037344Ac04669A94c313A9F38B69aDe575431Bb3 holders_count 95. Other hits are Primer / PRIME / PMOS names, not this token." }
  - { id: R-21, publisher: DexScreener, title: "PRIMED/AMZN pair page", url: "https://dexscreener.com/robinhood/0x504184ea9bf5784a5f6ff616655b534d617dcb7134d24b409190abbc64d932eb", published_at: null, accessed_at: 2026-09-03T05:09:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "HTML companion to latest/dex/tokens. Pair 0x504…32eb PRIMED 0xeB57…1E18 AMZN 0x12f1…bF54. Live numbers taken from the JSON API." }
  - { id: R-22, publisher: Blockscout, title: "Pons PRIMED 0x037344…1Bb3 launchAndBuy", url: "https://robinhoodchain.blockscout.com/tx/0x31328a62a1b3ded678824865a817bcfe38073174fb1f9d54d16f58b83004604e", published_at: 2026-09-02T20:46:29Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-26, EVT-5], excerpt: "timestamp 2026-09-02T20:46:29.000000Z block 52866402 from 0x709Ab9436Ea903E781F0e350655c8FDB93e9D1FD (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. decoded name/symbol PRIMED pairToken 0x12f190a9F9d7D37a250758b26824B97CE941bF54. Created contract PonsV2LauncherToken 0x037344Ac04669A94c313A9F38B69aDe575431Bb3 is_verified true holders_count 95. Not 0xeB57…1E18." }
  - { id: R-23, publisher: DexScreener, title: "latest/dex/search PRIMED", url: "https://api.dexscreener.com/latest/dex/search?q=PRIMED", published_at: null, accessed_at: 2026-09-03T05:09:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-26], excerpt: "8 robinhood pairs. Row 0 PRIMED 0xeB57…1E18 / AMZN liq 41522.95 vol 157793.21 pair 0x504184ea…32eb. Row 1 PRIMED 0x037344…1Bb3 / AMZN liq 7683.14 vol 142919.59 pair 0x191a2239…abbd. Remaining rows are thin USDG/ETH books of those two tokens." }
  - { id: R-24, publisher: GeckoTerminal, title: "PRIMED token pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xeB57dD11c2C0F5e9834193Bb71f72F02742A1E18/pools", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12, CLM-27], excerpt: "Row 0 AMZN / PRIMED 0x504184ea…32eb volume_usd.h24 154206.407235023 reserve_in_usd 71257.2509 fdv_usd 46942.6433129641. Row 1 PRIMED / WETH 0x5268da44…3df5 volume_usd.h24 0.153598805 reserve_in_usd 10.5941. Pool-endpoint fdv_usd 1997894.36 is not this token-pools fdv." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xeB57…1E18?", checked: "DexScreener info null; Gecko token has no website; X user search returned unrelated handles; create calldata IPFS CID Cloudflare 403, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; fetch the IPFS CID on a non-Cloudflare gateway; search new posts that embed the CA and a handle" }
  - { priority: P1, question: "Do Lock beneficiaries 0x56ca…8A7b (95%) and 0x21E2…7A66 (5%) still control AMZN-side fees after reservedUntil?", checked: "create-tx Lock log on hook 0x4e34…a544; getAssetData LP slots include 0xdead; reservedUntil 2026-09-03T20:55:20Z had not passed at collection, 2026-09-03", next: "re-read LaunchCreated after 2026-09-03T20:55:20Z; read Doppler lock / fee collector state" }
  - { priority: P1, question: "What is in ipfs://bafkreiaw3jrp4ubbneb3s5dmoccqrshqpdeemfxquxp3qbpb4hpawdybqi from the create tokenFactory bytes?", checked: "CID decoded from create calldata; ipfs.io returned Cloudflare challenge HTML 403 this pass, 2026-09-03", next: "retry via another gateway or Blockscout token metadata if indexed" }
  - { priority: P1, question: "Should Pons PRIMED 0x037344…1Bb3 get its own packet?", checked: "Blockscout search and DexScreener search list it as a same-ticker AMZN pair with 95 holders and $7.7k liq; this packet is only 0xeB57…1E18, 2026-09-03", next: "only if an assignment names that address" }
  - { priority: P2, question: "Should any of the thin PRIMED/USDG or PRIMED/ETH books get their own notes?", checked: "DexScreener 5 pairs; AMZN book has essentially all of the liquidity this pass, 2026-09-03", next: "only if an assignment names those pool ids" }
---

# PRIMED — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Amazon • Robinhood Token (AMZN). LongLauncher.create on 2026-09-02 minted PRIMED and seeded the PRIMED/AMZN book. Traders buy and sell PRIMED against AMZN. AMZN is the quote rail, not the subject. Distinct from SENDER/AMZN, RUFUS/AMZN, BEEFZOS/AMZN, and WADDLES/AMZN. No official site or handle was located this pass.

Themes: memecoin, stock-paired:AMZN, rwa

## Why it matters

The PRIMED/AMZN Uniswap v4 book printed about $154.2k of 24h volume on Gecko at collection, with DexScreener on the same pair at $157.8k volume and $41.5k liquidity. @TmsCrypto10 posted the CA as an Amazon runner. GET /rhj/assets has an AMZN Stock Token row at 0x12f1…bF54, so the pair leg is the Robinhood AMZN rail rather than a lookalike quote. Packed sender, rufus, beefzos, and waddles share that rail and are different tokens.

## What could go wrong

USD liquidity figures on the PRIMED/AMZN book count both sides, and the quote side is AMZN, not USDG. Gecko names the pool AMZN / PRIMED, so pool fdv_usd 1.99M is the AMZN-as-base figure and is not a PRIMED fdv. Gecko and DexScreener disagree on reserve and fdv for the same pool. No official handle was located, so comms surfaces stay unconfirmed-official. A Pons PRIMED at 0x037344…1Bb3 shares the ticker. reservedUntil 2026-09-03T20:55:20Z had not passed at collection.

## Product and mechanics

LongLauncher 0x22e9…eeED create from EOA 0x56ca…8A7b at 2026-09-02T20:55:20Z minted PRIMED / PRIMED supply 1e9*1e18 into Uniswap v4 poolId 0x504184ea…32eb quoted against AMZN 0x12f1…bF54. tokenFactory is DopplerERC20V1Factory 0x1B37…b69a. The token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock 0xeb7C…0862. factory() reverts. [verified R-4 R-5 R-6]

Airlock getAssetData numeraire is AMZN; LP slots include 0xdead. DopplerHookInitializer Lock beneficiaries are 0x56ca…8A7b at 95% and Airlock owner 0x21E2…7A66 at 5%. PoolManager Initialize uses dynamic-fee flag 8388608 and hooks 0x4e34…a544. Secondary PRIMED/USDG and PRIMED/ETH books exist on DexScreener with far less liquidity than the AMZN book. [verified R-5 R-6 R-7]

## Control and security

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-from 0x56ca…8A7b has no code. LaunchCreated reservedUntil 2026-09-03T20:55:20Z had not passed at collection. [verified R-5 R-6 R-18]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is fully verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified R-2 R-3 R-13] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info is null. X user search for PRIMED returned unrelated handles. @primed_pf / @primedPF are a May 2026 Solana pump.fun ticker. Flag unconfirmed-official. [claim R-7 R-19]

@0xCR33P advertised a cr33per.net call page that embeds CA 0xeB57…1E18. Flag third-party-link. [claim R-17]

Blockscout search PRIMED and DexScreener search list a second PRIMED ERC-20, PonsV2LauncherToken 0x037344…1Bb3. That address is not this token. Flag ca-collision on the ticker. [claim R-20 R-22 R-23]

## Economics and activity

AMZN/PRIMED Uniswap v4 24h volume is 154206.41 USD and reserve_in_usd is 71257.25 at 2026-09-03T05:10:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 46942.64. Gecko pool fdv_usd 1997894.36 is AMZN-as-base, not a PRIMED fdv. Gecko token volume_usd.h24 is 154206.56 across all pools, not the AMZN book. [claim R-8 R-9 R-24]

DexScreener same pair: liquidity.usd 41522.95, volume.h24 157793.21, fdv/marketCap 46464. Blockscout holders_count 130. Pair created 2026-09-02T20:55:20Z. Assignment hint of ~$43,078 liq / ~$156,837 vol had moved by this as_of. [claim R-1 R-7]

## Material risks

- Quote token AMZN 0x12f1…bF54 is the Robinhood Stock Token rail from GET /rhj/assets; PRIMED is not in that registry. [verified R-11 R-12]
- Pool USD reserve is PRIMED plus AMZN, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko and DexScreener disagree on reserve and fdv; Gecko pool fdv_usd 1997894.36 is AMZN-as-base. [claim R-7 R-8 R-9]
- No official handle or domain this pass; cr33per.net is a third-party-link. [claim R-7 R-17]
- A Pons PRIMED at 0x037344…1Bb3 shares the ticker. [claim R-20 R-22]
- reservedUntil 2026-09-03T20:55:20Z had not passed at collection. [verified R-5]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/AMZN/LongLauncher and create tx 0x4adc4def…822f, RPC name/symbol/owner/getAssetData, DexScreener tokens and search, Gecko pool/token (first GET 200), /rhj/assets, and X Latest $PRIMED / CA were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-6 R-7 R-8 R-11]
- Numbers: 154206.41 is the Gecko AMZN/PRIMED pool 24h volume, not the 154206.56 token all-pools figure. Reserve 71257.25 is that pool. DexScreener 157793.21 / 41522.95 is the same pair, different aggregator. Gecko token fdv 46942.64 is the PRIMED figure; pool fdv 1997894.36 is not. [claim R-7 R-8 R-9 R-24]
- Adversarial: the strongest contrary reading is that PRIMED is packed sender, rufus, beefzos, or waddles, an official Amazon product, the only AMZN pair, or a Bankr launch because Gecko dex id is bankr-robinhood. The token is 0xeB57…1E18, sender is 0x4d41…1e18, rufus is 0x218D…1E18, beefzos is 0x21d3…1e18, waddles is 0xbB6E…0CdD, /rhj/assets has no PRIMED row, and creation is LongLauncher.create. [inference R-4 R-7 R-11 R-16 R-20]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no primed / PRIMED / 0xeB57…1E18. content/dependencies/stock-tokens.yaml AMZN 0x12f190a9F9d7D37a250758b26824B97CE941bF54 matches the quote rail. Pending packets sender, rufus, beefzos, and waddles share the AMZN rail only.
- Explorer: Blockscout api/v2 with Chrome UA for search PRIMED, token, impl, factory, AMZN, LongLauncher, create tx 0x4adc4def…822f, LaunchCreated / Initialize / Lock logs, holders, Pons collision tx 0x31328a62…604e. RPC eth_chainId/eth_blockNumber/eth_getCode/eth_call with Chrome UA at block 53160632.
- Aggregators: DexScreener latest/dex/tokens and latest/dex/search. Gecko first GET token HTTP 200 then pool HTTP 200 and token/pools HTTP 200.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, one AMZN, 0 PRIMED.
- Social: X keyword Latest $PRIMED / PRIMED AMZN / CA 0xeB57…1E18; user search PRIMED / Primed.
- Failed: token transfers type=token_minting 422 (tx token-transfers used instead); ipfs.io CID Cloudflare 403; first rhj/assets parse saw empty assets until Accept-Language retry; X Latest PRIMED OR $PRIMED AMZN mostly hit SENDER-is-primed wordplay and Nasdaq AMZN TA, not this CA.
- Time: collection 2026-09-03T05:05Z–2026-09-03T05:15Z.
