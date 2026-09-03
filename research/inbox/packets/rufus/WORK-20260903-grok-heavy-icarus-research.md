---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: rufus
name: RUFUS
packet_tier: seed
as_of: 2026-09-03T04:54:00Z
prior_packet: null
supersedes: null
owned_slugs: [rufus]
allowed_paths:
  - research/inbox/packets/rufus/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: RUFUS
  aliases: []
  symbols: [RUFUS]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; Gecko token attributes have no website; Blockscout token page lists no homepage this pass; create calldata IPFS CID ipfs.io returned Cloudflare 403"
  official_handle: "@Rufusonrh"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "RUFUS is the ERC-20 at 0x218D…1E18 created through that launcher; entity_kind token, not protocol"
        - "Packed sender is a different LongLauncher AMZN pair at 0x4d41…1e18; packed waddles is Pons v2 0xbB6E…0CdD"
        - "No shared handle; @Rufusonrh is not @longdotxyz"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the AMZN/RUFUS pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0xa88a6b7d…d0a3 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "RUFUS is 0x218D…1E18 paired to AMZN 0x12f1…bF54"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x218D…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create at 2026-08-30T22:43:53Z minted RUFUS / RUFUS into Uniswap v4 pool 0x0f5a…4cb1 quoted against Amazon • Robinhood Token AMZN 0x12f1…bF54. AMZN is the quote rail. owner() is Airlock 0xeb7C…0862. DexScreener lists @Rufusonrh; that handle posted the CA. Flag unconfirmed-official. Distinct from packed sender 0x4d41…1e18 and packed waddles 0xbB6E…0CdD. [R-1] [R-5] [R-6] [R-7] [R-8] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-9], note: "" }

links:
  - { kind: x, url: "https://x.com/Rufusonrh", authenticity: unconfirmed }

deployments:
  - label: RUFUS token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
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
      seen: 2026-09-03T04:51:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6, R-13]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-6, R-13]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:49:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-14]
  - label: Amazon • Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0x12f190a9F9d7D37a250758b26824B97CE941bF54"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:51:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-11, R-12]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:51:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6]

metrics:
  - { kind: volume_24h, value: 164874.61, currency: USD, as_of: 2026-09-03T04:50:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0f5a0c5b0a1c665757433fc734c4c8f047ee606af3d8ec0efdb9b09c8b884cb1 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 49511.37, currency: USD, as_of: 2026-09-03T04:50:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0f5a0c5b…4cb1 reserve_in_usd (AMZN/RUFUS pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 60137.31, currency: USD, as_of: 2026-09-03T04:50:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18 fdv_usd (market_cap_usd null; pool fdv_usd 1986887.92 is AMZN-as-base and is not this metric)", class: claim, receipt_ids: [R-9] }
  - { kind: volume_24h, value: 166124.83, currency: USD, as_of: 2026-09-03T04:50:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18 pair 0x0f5a0c5b…4cb1 RUFUS/AMZN Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 48481.54, currency: USD, as_of: 2026-09-03T04:50:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x218D…1E18 pair 0x0f5a0c5b…4cb1 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 59045, currency: USD, as_of: 2026-09-03T04:50:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x218D…1E18 pair 0x0f5a0c5b…4cb1 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 81, currency: null, as_of: 2026-09-03T04:48:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32afd8f (53149071). Token 0x218D…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name() RUFUS symbol() RUFUS decimals 18 totalSupply 1e27 owner() Airlock 0xeb7c0347…0862 factory() reverts. AMZN 0x12f1…bF54 eth_getCode 283 bytes name() Amazon • Robinhood Token symbol() AMZN. Factory code 1912 B. Impl code 13927 B. Launcher code 5826 B. Airlock code 5695 B. Create-from 0x5BEA…0338 code 23 B EIP-7702 prefix ef0100 implementation 0x1c08930b…a174." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-5, R-12, R-13, R-14, R-20], result: "Blockscout api/v2 token 0x218D…1E18 name RUFUS is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator_address_hash 0x1B37…b69a creation_transaction_hash 0xa88a6b7d…d0a3; token symbol RUFUS holders_count 81 total_supply 1e27. Tx 2026-08-30T22:43:53Z block 50373970 from 0x5BEA…0338 (proxy_type eip7702) to LongLauncher method create; decoded numeraire 0x12f1…bF54 tokenFactory 0x1B37…b69a supply 1e27. LaunchCreated normalizedTicker RUFUS. PoolManager Initialize id 0x0f5a0c5b…4cb1 currency0 AMZN currency1 RUFUS fee 8388608 (dynamic-fee flag) hooks DopplerHookInitializer 0x4e34…a544. Search RUFUS also returns other ERC-20s including 0x695B…9F7f Rufus the Corgi." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x218D…1E18 1 robinhood uniswap pair; RUFUS/AMZN v4 0x0f5a0c5b…4cb1 quote 0x12f1…bF54 Amazon • Robinhood Token / AMZN liquidity.usd 48481.54 volume.h24 166124.83 fdv/marketCap 59045 pairCreatedAt 1788129833000 (2026-08-30T22:43:53Z) info.websites [] info.socials twitter https://x.com/Rufusonrh. Gecko pool same address name AMZN / RUFUS dex bankr-robinhood volume_usd.h24 164874.608569533 reserve_in_usd 49511.3693 fdv_usd 1986887.915 (AMZN as base_token) pool_created_at 2026-08-30T22:43:53Z. Gecko token fdv_usd 60137.3139 volume_usd.h24 164874.608569533 (one pool)." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0x218D…1E18) word0 numeraire 0x12f190a9…bF54; word5 token 0x218D…1E18; word1/word2 0xdead; Airlock owner() 0x21e2ce70…7a66. AMZN name() Amazon • Robinhood Token; symbol() AMZN." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one AMZN row tokenName Amazon • Robinhood Token deployments contractAddress 0x12f190a9F9d7D37a250758b26824B97CE941bF54 chainId 4663. tokenSymbol/tokenName scan for RUFUS returned 0 hits." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 RUFUS into a Uniswap v4 pool quoted against AMZN 0x12f1…bF54; Airlock getAssetData numeraire is that AMZN; LP addresses in getAssetData include 0xdead. Lock beneficiaries on DopplerHookInitializer: 0x5BEA…0338 95% and Airlock owner 0x21E2…7A66 5%.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: RUFUS, class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: RUFUS, class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-5, R-6, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-5, R-6, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1, R-5, R-6, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG: tx 0xa88a6b7d…d0a3 from 0x5BEA…0338 (EIP-7702, code 23 B) called LongLauncher.create; decoded tokenFactory DopplerERC20V1Factory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from census LONG (the factory) and from other Blockscout RUFUS ERC-20s such as 0x695B…9F7f Rufus the Corgi.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1, R-5, R-6, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset is the AMZN rail Amazon • Robinhood Token 0x12f190a9F9d7D37a250758b26824B97CE941bF54 (GET /rhj/assets 194 assets, one AMZN row, that contract, chainId 4663). RUFUS is not in the registry. AMZN is a rail, not the subject.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7, R-8, R-11, R-12], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 pool 0x0f5a0c5b0a1c665757433fc734c4c8f047ee606af3d8ec0efdb9b09c8b884cb1; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood and pool name AMZN / RUFUS because currency0 is AMZN; PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951; Initialize fee 8388608 (dynamic-fee flag) hooks 0x4e34…a544", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-5, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: identity.handle, value: "@Rufusonrh — DexScreener info.socials twitter https://x.com/Rufusonrh; that handle posted CA 0x218d84bdd2…1e18 on 2026-09-02T11:27:13Z; bio CTO / Rufus, The Corgi from Amazon’s earliest days; no Amazon bidirectional this pass; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7, R-15, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko AMZN/RUFUS pool 0x0f5a0c5b…4cb1 volume_usd.h24 164874.608569533 reserve_in_usd 49511.3693 at 2026-09-03T04:50:00Z (pool slice; Gecko token volume_usd.h24 is the same figure because token/pools n=1)", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener same pair liquidity.usd 48481.54 volume.h24 166124.83 fdv/marketCap 59045 at 2026-09-03T04:50:00Z", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 81, class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from 0x5BEA6C8CD81A035bf27dCA0820aA945976d40338 (EIP-7702, code 23 B, implementation 0x1C08…a174)", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on DexScreener, Gecko, Blockscout, or X search this pass", class: unknown, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Gecko dex id bankr-robinhood on the AMZN/RUFUS pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge RUFUS into census bankr.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token has no website field; ipfs://bafkreifo54tpocybvagmxvmhecjmqmvgcrfhykxrloms5jaxeqt5v3zrte Cloudflare 403", class: claim, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: communications.status, value: "third-party-link / copypasta-pattern: X posts advertised netlify claim and vote URLs embedding CA 0x218D…1E18 (crypto-mll.netlify.app, crypto-kms.netlify.app, crypto-ah4.netlify.app, robinhood-main-dex-vgm.netlify.app). None is a DexScreener social. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-16, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x12f190a9F9d7D37a250758b26824B97CE941bF54", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-1, R-2, R-6, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-3, R-5, R-6, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: candidate, value: "rufus | RUFUS | @Rufusonrh | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "Blockscout search RUFUS also returns other ERC-20s, including Rufus the Corgi 0x695B7EAA546fCC43EAA6B81a944EC94683cb9F7f (DexScreener RUFUS/AMZN liq ~$10k). @its_4961 posted that other CA. Ticker-only collision; not this token.", class: claim, observed_at: 2026-09-03T04:48:00Z, receipt_ids: [R-20, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: economics.metric, value: "Gecko token fdv_usd 60137.3139; DexScreener fdv/marketCap 59045. Gecko pool fdv_usd 1986887.92 is AMZN-as-base (base_token_price_usd 255.71) and is not the RUFUS book cap.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-28, field: relationship, value: "Distinct from packed sender: SENDER 0x4d41…1e18 LongLauncher.create 2026-09-01T01:45:59Z into pool 0x2196d727…e960. This token is 0x218D…1E18 created 2026-08-30T22:43:53Z into pool 0x0f5a0c5b…4cb1. Same AMZN rail, different asset.", class: verified, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-4, R-5, R-7], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-29, field: relationship, value: "Distinct from packed waddles: WADDLES 0xbB6E…0CdD is a Pons v2 launchToken / createGraduatedPool path. RUFUS is LongLauncher / DopplerERC20V1. Same AMZN rail, different pad and address.", class: verified, observed_at: 2026-09-03T04:54:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-30, field: account.Rufusonrh.role, value: project, class: claim, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: account.Rufusonrh.flag, value: "unconfirmed-official: DexScreener lists x.com/Rufusonrh; handle posted CA 0x218D…1E18; bio CTO / Rufus, The Corgi; no Amazon bidirectional this pass", class: claim, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-7, R-15], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13, CLM-27]
    material_effect: "Same Uniswap v4 pool 0x0f5a0c5b…4cb1: Gecko reserve_in_usd 49511.37 vs DexScreener liquidity.usd 48481.54; 24h volume 164874.61 vs 166124.83; Gecko token fdv 60137.31 vs DexScreener 59045 vs Gecko pool fdv 1986887.92 (AMZN as base_token). A card that uses the pool fdv would misstate the RUFUS book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener RUFUS/AMZN 24h volume $166.1k, liquidity $48.5k"
    summary: "DexScreener pair 0x0f5a0c5b…4cb1 volume.h24 166125 liquidity.usd 48482 fdv 59045. Gecko same pool volume_usd.h24 164875 reserve_in_usd 49511."
    occurred_at: 2026-09-03T04:50:00Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "LongLauncher.create minted RUFUS against AMZN"
    summary: "Tx 0xa88a6b7d…d0a3 from 0x5BEA…0338 at 2026-08-30T22:43:53Z; LaunchCreated ticker RUFUS; PoolManager Initialize id 0x0f5a0c5b…4cb1."
    occurred_at: 2026-08-30T22:43:53Z
    observed_at: 2026-09-03T04:51:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
  - id: EVT-3
    type: ct
    title: "@Rufusonrh posted CA 0x218d84bdd2…1e18 with Amazon corgi lore"
    summary: "Post: A Corgi named Rufus was one of Amazon’s earliest employees, ending with 0x218d84bdd20982bd7c3cdbf2e6d8bb7fd6fe1e18. DexScreener lists that handle."
    occurred_at: 2026-09-02T11:27:13Z
    observed_at: 2026-09-03T04:52:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-4
    type: ct
    title: "@MPtrading_x quoted @Rufusonrh as an AMZN pair with no big runners yet"
    summary: "Quote: this is actually really good, and amzn has no big runners yet $rufus makes sense to me."
    occurred_at: 2026-09-02T21:54:05Z
    observed_at: 2026-09-03T04:52:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-5
    type: ct
    title: "X posts advertised netlify claim and vote URLs for CA 0x218D…1E18"
    summary: "crypto-mll / crypto-kms / crypto-ah4.netlify.app claim portals and robinhood-main-dex-vgm.netlify.app vote page. Flag copypasta-pattern and third-party-link."
    occurred_at: 2026-09-02T21:05:07Z
    observed_at: 2026-09-03T04:52:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-16, R-17]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x218D…1E18 RUFUS / RUFUS", url: "https://robinhoodchain.blockscout.com/address/0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-7, CLM-14, CLM-22, CLM-24], excerpt: "hash 0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18 name RUFUS is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xa88a6b7d691abbb858ba89ba69ad3d724b6e9347b0deacdd635553acd28ad0a3. token symbol RUFUS decimals 18 total_supply 1000000000000000000000000000 holders_count 81 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-23], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768." }
  - { id: R-4, publisher: Blockscout, title: "Zero-addr mint of RUFUS 1e27", url: "https://robinhoodchain.blockscout.com/tx/0xa88a6b7d691abbb858ba89ba69ad3d724b6e9347b0deacdd635553acd28ad0a3", published_at: 2026-08-30T22:43:53Z, accessed_at: 2026-09-03T04:49:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-28, EVT-2], excerpt: "api/v2 logs: timestamp 2026-08-30T22:43:53.000000Z Transfer from 0x0000…0000 to Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 amount 1000000000000000000000000000 on token 0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18. OwnershipTransferred newOwner that Airlock. create2 from factory created 0x218D…1E18." }
  - { id: R-5, publisher: Blockscout, title: "create tx 0xa88a6b7d…d0a3", url: "https://robinhoodchain.blockscout.com/tx/0xa88a6b7d691abbb858ba89ba69ad3d724b6e9347b0deacdd635553acd28ad0a3", published_at: 2026-08-30T22:43:53Z, accessed_at: 2026-09-03T04:49:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-7, CLM-9, CLM-15, CLM-18, CLM-25, CLM-28, CLM-29, EVT-2], excerpt: "timestamp 2026-08-30T22:43:53Z status ok block 50373970 from 0x5BEA6C8CD81A035bf27dCA0820aA945976d40338 (eip7702) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0x12f190a9F9d7D37a250758b26824B97CE941bF54 tokenFactory 0x1B37D3a72082029c44B35B604Ea473617580b69a supply 1e27. LaunchCreated ticker RUFUS launcher 0x5BEA…0338. PoolManager Initialize id 0x0f5a0c5b…4cb1. Lock 0x21E2…7A66 5e16 and 0x5BEA…0338 9.5e17." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner(), Airlock getAssetData", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-15, CLM-17, CLM-21, CLM-22, CLM-23], excerpt: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32afd8f (53149071). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name RUFUS symbol RUFUS decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. AMZN name Amazon • Robinhood Token symbol AMZN code 283 B. Factory code 1912 B. Impl 13927 B. Launcher 5826 B. Airlock owner() 0x21e2ce70…7a66 getAssetData numeraire 0x12f190a9…bF54 token 0x218D…1E18 LP slots 0xdead. Create-from 0x5BEA…0338 code 23 B ef0100." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens RUFUS", url: "https://api.dexscreener.com/latest/dex/tokens/0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-11, CLM-13, CLM-17, CLM-18, CLM-19, CLM-24, CLM-27, CLM-28, CLM-29, CLM-30, CLM-31, EVT-1], excerpt: "1 robinhood uniswap pair. pairAddress 0x0f5a0c5b0a1c665757433fc734c4c8f047ee606af3d8ec0efdb9b09c8b884cb1 labels v4 base RUFUS / RUFUS 0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18 quote Amazon • Robinhood Token / AMZN 0x12f190a9F9d7D37a250758b26824B97CE941bF54 liquidity.usd 48481.54 volume.h24 166124.83 fdv 59045 marketCap 59045 pairCreatedAt 1788129833000. info.websites [] info.socials [{url https://x.com/Rufusonrh type twitter}]." }
  - { id: R-8, publisher: GeckoTerminal, title: "AMZN/RUFUS Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0f5a0c5b0a1c665757433fc734c4c8f047ee606af3d8ec0efdb9b09c8b884cb1", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-10, CLM-12, CLM-18, CLM-27, EVT-1], excerpt: "name AMZN / RUFUS pool_created_at 2026-08-30T22:43:53Z fdv_usd 1986887.915 market_cap_usd 1986888.114 volume_usd.h24 164874.608569533 reserve_in_usd 49511.3693. dex bankr-robinhood. include=base_token,quote_token: base Amazon • Robinhood Token 0x12f1…bF54 price_usd 255.71; quote RUFUS 0x218D…1E18 price_usd 0.00006014. GET HTTP 200." }
  - { id: R-9, publisher: GeckoTerminal, title: "RUFUS token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12, CLM-19, CLM-27], excerpt: "GET HTTP 200. name RUFUS symbol RUFUS decimals 18 total_supply 1e27 price_usd 0.00006013731392 fdv_usd 60137.3139235312 market_cap_usd null volume_usd.h24 164874.608569533 total_reserve_in_usd 34203.472. coingecko_coin_id null. image_url null. token/pools n=1 AMZN / RUFUS." }
  - { id: R-10, publisher: GeckoTerminal, title: "AMZN/RUFUS pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x0f5a0c5b0a1c665757433fc734c4c8f047ee606af3d8ec0efdb9b09c8b884cb1", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "AMZN/RUFUS RUFUS Price on Bankr (Robinhood). Pool 0x0f5…4cb1 AMZN 0x12f…bf54 RUFUS 0x218…1e18. Live numbers taken from the JSON API." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-21], excerpt: "HTTP 200. assets length 194. One AMZN hit: tokenSymbol AMZN tokenName Amazon • Robinhood Token deployments contractAddress 0x12f190a9F9d7D37a250758b26824B97CE941bF54 chainId 4663 networkName Robinhood Chain. tokenSymbol/tokenName scan for RUFUS returned 0 hits." }
  - { id: R-12, publisher: Blockscout, title: "Token 0x12f1…bF54 Amazon • Robinhood Token / AMZN", url: "https://robinhoodchain.blockscout.com/address/0x12f190a9F9d7D37a250758b26824B97CE941bF54", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-21], excerpt: "hash 0x12f190a9F9d7D37a250758b26824B97CE941bF54 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon. token name Amazon • Robinhood Token symbol AMZN decimals 18 total_supply 7769948000000000000000 holders_count 37775." }
  - { id: R-13, publisher: Blockscout, title: "DopplerERC20V1 verified source", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599?tab=contract", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-22, CLM-23], excerpt: "ContractName DopplerERC20V1 compiler v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. Factory 0x1B37…b69a DopplerERC20V1Factory same compiler, src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-14, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_fully_verified true file_path src/LongLauncher.sol verified_at 2026-07-14T11:23:57Z." }
  - { id: R-15, publisher: "@Rufusonrh", title: "Amazon corgi lore plus CA 0x218d84bdd2…1e18", url: "https://x.com/Rufusonrh/status/2095111297582948748", published_at: 2026-09-02T11:27:13Z, accessed_at: 2026-09-03T04:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-11, CLM-30, CLM-31, EVT-3], excerpt: "A Corgi named Rufus was one of Amazon’s earliest employees. In 1996, two of Amazon’s first employees asked Jeff Bezos if they could bring their Corgi, Rufus, to work. … 0x218d84bdd20982bd7c3cdbf2e6d8bb7fd6fe1e18" }
  - { id: R-16, publisher: "@imichaelburger_", title: "$RUFUS portal is up", url: "https://x.com/imichaelburger_/status/2095256729860678016", published_at: 2026-09-02T21:05:07Z, accessed_at: 2026-09-03T04:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-20, EVT-5], excerpt: "$RUFUS portal is up eligibility check working rn claim if your wallet hits CA: 0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18 https://crypto-mll.netlify.app/claim?contract=0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18&cfg=evmdrop&pid=SABlz. Sibling posts used crypto-kms.netlify.app and crypto-ah4.netlify.app with the same CA." }
  - { id: R-17, publisher: "@emberwispxNFT", title: "Attention $RUFUS Family vote", url: "https://x.com/emberwispxNFT/status/2095372792531222566", published_at: 2026-09-03T04:46:18Z, accessed_at: 2026-09-03T04:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-20, EVT-5], excerpt: "Attention $RUFUS Family! YOUR vote matters! Less than 100 votes are needed to list $RUFUS on the Robinhood Top 100 Leaderboard. Listing ID: 6200 https://robinhood-main-dex-vgm.netlify.app/vote/0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18" }
  - { id: R-18, publisher: "@MPtrading_x", title: "amzn has no big runners yet $rufus", url: "https://x.com/MPtrading_x/status/2095269054260908183", published_at: 2026-09-02T21:54:05Z, accessed_at: 2026-09-03T04:52:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "this is actually really good, and amzn has no big runners yet $rufus makes sense to me. Quoted @Rufusonrh status/2095111297582948748 which embeds CA 0x218d84bdd2…1e18." }
  - { id: R-19, publisher: "X user search", title: "User search RUFUS", url: "https://x.com/search?q=RUFUS&f=user", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-11], excerpt: "Top hits: @Marcosmaida1 Rufus, @rufusgifford Rufus Gifford, @RufusDuSol RÜFÜS DU SOL, @RufusPeabody, @No_Curve Rufus_2688. @Rufusonrh was not in the first returned bios this pass; it was found via DexScreener info.socials and from:Rufusonrh Latest." }
  - { id: R-20, publisher: Blockscout, title: "Search RUFUS", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=RUFUS", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-7, CLM-26], excerpt: "Multiple ERC-20 hits. Row 4 name RUFUS symbol RUFUS address_hash 0x218D84Bdd20982bD7c3CdBf2E6d8bb7FD6fe1E18. Row 0 Rufus the Corgi 0x695B7EAA546fCC43EAA6B81a944EC94683cb9F7f. Other RUFUS tickers include 0xfcEE…236B, 0x44d5…CD50, 0x3f5d…1e18. Ticker-only collisions, not this token." }
  - { id: R-21, publisher: DexScreener, title: "RUFUS/AMZN pair page", url: "https://dexscreener.com/robinhood/0x0f5a0c5b0a1c665757433fc734c4c8f047ee606af3d8ec0efdb9b09c8b884cb1", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "HTML companion to latest/dex/tokens. Pair 0x0f5…4cb1 RUFUS 0x218D…1E18 AMZN 0x12f1…bF54. Live numbers taken from the JSON API." }
  - { id: R-22, publisher: "@its_4961", title: "Rufus the corgi CA 0x695B…9F7f", url: "https://x.com/its_4961/status/2094801012838023615", published_at: 2026-09-01T14:54:15Z, accessed_at: 2026-09-03T04:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-26], excerpt: "Rufus the corgi Amazon’s dog mascot, memecoin paired with actual $AMZN STOCK … 0x695B7EAA546fCC43EAA6B81a944EC94683cb9F7f. That is a different ERC-20 from 0x218D…1E18." }

gaps:
  - { priority: P0, question: "Does Amazon or a bidirectional site confirm @Rufusonrh as the project handle for token 0x218D…1E18?", checked: "DexScreener info.socials lists x.com/Rufusonrh; handle posted the CA; bio is self-described CTO; no Amazon account linked the CA this pass; X user search did not surface @Rufusonrh in the first bios, 2026-09-03", next: "re-read DexScreener token profile; search new posts that embed the CA from a second handle that the first handle follows" }
  - { priority: P1, question: "Do Lock beneficiaries 0x5BEA…0338 (95%) and 0x21E2…7A66 (5%) still control AMZN-side fees after reservedUntil 2026-08-31T22:43:53Z?", checked: "create-tx Lock log on hook 0x4e34…a544; getAssetData LP slots include 0xdead; reservedUntil has passed, 2026-09-03", next: "read Doppler lock / fee collector state and any LongFeeVaultFactory deployVault for this token" }
  - { priority: P1, question: "What is in ipfs://bafkreifo54tpocybvagmxvmhecjmqmvgcrfhykxrloms5jaxeqt5v3zrte from the create tokenFactory bytes?", checked: "ipfs.io returned Cloudflare challenge HTML 403 this pass, 2026-09-03", next: "retry via another gateway or Blockscout token metadata if indexed" }
  - { priority: P2, question: "Should any of the other RUFUS tickers (0x695B…9F7f Rufus the Corgi, 0xfcEE…236B, 0x3f5d…1e18) get their own packets?", checked: "Blockscout search returned many RUFUS ERC-20s; DexScreener top RUFUS/AMZN book by liq/vol this pass is 0x218D…1E18, 2026-09-03", next: "only if an assignment names those addresses" }
---

# RUFUS — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Amazon • Robinhood Token (AMZN). LongLauncher.create on 2026-08-30 minted RUFUS and seeded the RUFUS/AMZN book. Traders buy and sell RUFUS against AMZN. AMZN is the quote rail, not the subject. DexScreener lists @Rufusonrh; that handle posted the contract. Flag unconfirmed-official.

Themes: memecoin, stock-paired:AMZN, rwa

## Why it matters

The RUFUS/AMZN Uniswap v4 book printed about $166.1k of 24h volume on DexScreener at collection, with Gecko on the same pool at $164.9k volume and $49.5k reserve. @Rufusonrh posted Amazon corgi lore with this CA. GET /rhj/assets has an AMZN Stock Token row at 0x12f1…bF54, so the pair leg is the Robinhood AMZN rail rather than a lookalike quote. Packed sender and packed waddles also sit on that rail at different addresses and pads.

## What could go wrong

USD liquidity figures on the RUFUS/AMZN book count both sides, and the quote side is AMZN, not USDG. Gecko names the pool AMZN / RUFUS and prints pool fdv ~$1.99M (AMZN as base); the RUFUS cap on DexScreener is $59.0k and on the Gecko token endpoint $60.1k. Several other ERC-20s share the RUFUS ticker. No Amazon bidirectional handle was located, so comms surfaces stay unconfirmed-official. Netlify claim and vote URLs that embed this CA are third-party-link / copypasta-pattern.

## Product and mechanics

LongLauncher 0x22e9…eeED create from 0x5BEA…0338 at 2026-08-30T22:43:53Z minted RUFUS / RUFUS supply 1e9*1e18 into Uniswap v4 poolId 0x0f5a0c5b…4cb1 quoted against AMZN 0x12f1…bF54. tokenFactory is DopplerERC20V1Factory 0x1B37…b69a. The token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock 0xeb7C…0862. factory() reverts. [verified R-4 R-5 R-6]

Airlock getAssetData numeraire is AMZN; LP slots include 0xdead. DopplerHookInitializer Lock beneficiaries are 0x5BEA…0338 at 95% and Airlock owner 0x21E2…7A66 at 5%. PoolManager Initialize uses dynamic-fee flag 8388608 and hooks 0x4e34…a544. DexScreener lists one pair for this token. [verified R-5 R-6 R-7]

## Control and security

token owner() is Airlock. Airlock owner() is 0x21E2…7A66. Create-from 0x5BEA…0338 is an EIP-7702 delegated account (code 23 B, implementation 0x1C08…a174), not a plain empty-code EOA. LaunchCreated reservedUntil 2026-08-31T22:43:53Z has passed. [verified R-5 R-6]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is fully verified (src/LongLauncher.sol). No audit report URL was located this pass. [verified R-13 R-14] [unknown]

## Team and provenance

DexScreener info.socials lists https://x.com/Rufusonrh. That handle posted CA 0x218d84bdd2…1e18 with Amazon corgi lore. Bio reads CTO / Rufus, The Corgi from Amazon’s earliest days. No Amazon account linked the CA this pass. Flag unconfirmed-official. DexScreener info.websites is empty. create calldata includes ipfs://bafkreifo54t…zrte; ipfs.io returned Cloudflare 403. [claim R-7 R-15]

X posts advertised netlify claim portals and a vote page that embed CA 0x218D…1E18. Flag third-party-link and copypasta-pattern. [claim R-16 R-17]

## Economics and activity

RUFUS/AMZN Uniswap v4 24h volume is 164874.61 USD and reserve_in_usd is 49511.37 at 2026-09-03T04:50:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 60137.31. Gecko token volume_usd.h24 equals the pool figure (token/pools n=1). Gecko pool fdv_usd 1986887.92 uses AMZN as base_token and is not the RUFUS cap. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 48481.54, volume.h24 166124.83, fdv/marketCap 59045. Blockscout holders_count 81. Pair created 2026-08-30T22:43:53Z. [claim R-1 R-7]

## Material risks

- Quote token AMZN 0x12f1…bF54 is the Robinhood Stock Token rail; pool USD reserve is RUFUS plus AMZN, not a USDG or WETH backstop. [verified R-11 R-12]
- Gecko pool fdv ~$1.99M is AMZN-as-base and disagrees with Gecko token fdv $60.1k and DexScreener $59.0k. [claim R-7 R-8 R-9]
- Ticker RUFUS collides with other ERC-20s on 4663, including 0x695B…9F7f. [claim R-20 R-22]
- Handle @Rufusonrh is unconfirmed-official; netlify claim/vote URLs are third-party-link / copypasta-pattern. [claim R-7 R-15 R-16]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/AMZN and create tx 0xa88a6b7d…d0a3, RPC name/symbol/owner/getAssetData, DexScreener tokens API, Gecko pool/token (HTTP 200), /rhj/assets, @Rufusonrh, @MPtrading_x, netlify claim/vote posts, Blockscout search, and X user search were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-11]
- Numbers: 166124.83 is the DexScreener RUFUS/AMZN pair 24h volume. 164874.61 is the Gecko pool volume_usd.h24. Reserve 49511.37 is that pool. DexScreener liquidity 48481.54 is the same pair, different aggregator. RUFUS fdv is Gecko token 60137.31 / DexScreener 59045, not Gecko pool 1986887.92. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this is packed sender or packed waddles, or the 0x695B…9F7f Rufus the Corgi token. Addresses, create timestamps, and pads differ; AMZN is the shared rail. [inference R-5 R-7 R-20]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` not used as live HEAD; assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no rufus / RUFUS / 0x218D…1E18. content/dependencies/stock-tokens.yaml has AMZN at 0x12f1…bF54.
- GET first: `repos/harsharn10/proofline/contents/research/inbox/packets/rufus/WORK-20260903-grok-heavy-icarus-research.md?ref=grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research` HTTP 404, then collect.
- Explorer: Blockscout api/v2 search RUFUS, token, impl, factory, launcher, AMZN, create 0xa88a6b7d…d0a3 logs/internal, holders. Chrome UA.
- RPC: eth_chainId/eth_blockNumber/eth_getCode/eth_call name/symbol/decimals/totalSupply/owner/factory/getAssetData at block 53149071.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko token GET HTTP 200 then pool and token/pools (n=1).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 AMZN, 0 RUFUS.
- Social: X keyword RUFUS AMZN and the CA Latest; from:Rufusonrh; user search RUFUS.
- Failed: Blockscout token-transfers?type=token_minting HTTP 422 (logs Transfer used instead); ipfs.io CID Cloudflare 403; X user search did not return @Rufusonrh in the first bios.
- Time: collection 2026-09-03T04:47Z–2026-09-03T04:54Z.
