---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: johndog
name: JOHNDOG
packet_tier: seed
as_of: 2026-09-03T03:54:18Z
prior_packet: null
supersedes: null
owned_slugs: [johndog]
allowed_paths:
  - research/inbox/packets/johndog/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: JOHNDOG
  aliases: ["John Dog"]
  symbols: [JOHNDOG]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites lists only https://dexxyswap.com; Gecko pool attributes have no website; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials is https://x.com/search?q=$John%20Dog (search URL, not a profile); no bidirectional official handle this pass"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, or Blockscout this pass"
  possible_matches:
    - slug: bankr
      signals: [shared-deployer]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime that launches DopplerERC20V1 clones"
        - "JOHNDOG is a graduation token 0x64bc…1e18 named John Dog / JOHNDOG, quoted against SGOV, not the Bankr pad"
        - "Gecko labels the JOHNDOG/SGOV pool dex bankr-robinhood; DexScreener labels the same pool Uniswap v4"
        - "No shared domain, handle, or reproduced token address"
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "JOHNDOG is a DopplerERC20V1 EIP-1167 clone whose owner() is Airlock 0xeb7C…0862; factory() reverts; create tx was not on the token page this pass"
        - "Pending DOGGIE/HOTDOG and in-flight DEBTCOIN/SGOV are other graduations, not this CA"
        - "No shared domain, handle, or reproduced token address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "JOHNDOG is John Dog at 0x64bc…1e18 paired to SGOV 0x92FD…F9B5"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "JOHNDOG is a DopplerERC20V1 clone in a Uniswap v4 JOHNDOG/SGOV pool, not a vault"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x64bc…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; name John Dog, symbol JOHNDOG, owner() Airlock 0xeb7C…0862. Primary book is Uniswap v4 JOHNDOG/SGOV 0xa934…1e0a quoted against iShares 0-3 Month Treasury Bond • Robinhood Token SGOV 0x92FD…F9B5 (a rail, not the subject). DexScreener liquidity.usd 176778.87 volume.h24 3501375.34. Gecko reserve_in_usd printed -599778.93 this pass — not copied as TVL. Distinct from DEBTCOIN/SGOV (in flight) and from other JOHNDOG CAs on DexScreener search. No official handle this pass. [R-1] [R-4] [R-5] [R-6]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6, CLM-22], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: other, url: "https://dexxyswap.com", authenticity: unconfirmed }

deployments:
  - label: JOHNDOG token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:53:29Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-4]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:54:18Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-4]
  - label: DopplerERC20V1Factory (implementation creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:54:18Z
      exists_on_4663: null
      explorer_source_verified: null
    receipt_ids: [R-2]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:54:18Z
      exists_on_4663: null
      explorer_source_verified: null
    receipt_ids: [R-4]
  - label: SGOV • Robinhood Token (pair quote; rail)
    role: token
    address:
      value: "0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03T03:53:29Z
      exists_on_4663: null
      explorer_source_verified: null
    receipt_ids: [R-5, R-6]
  - label: Uniswap v4 PoolManager (token-transfer counterparty)
    role: router
    address:
      value: "0x8366a39CC670B4001A1121B8F6A443A643e40951"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:54:18Z
      exists_on_4663: null
      explorer_source_verified: null
    receipt_ids: [R-7]

metrics:
  - { kind: volume_24h, value: 3501375.34, currency: USD, as_of: 2026-09-03T03:53:29Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18 pair 0xa9349400def8a8fb8b96763c52870fcadbc8775361dd49e95291486be5141e0a JOHNDOG/SGOV Uniswap v4 volume.h24", class: claim, receipt_ids: [R-5] }
  - { kind: tvl, value: 176778.87, currency: USD, as_of: 2026-09-03T03:53:29Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x64bc…1e18 pair 0xa934…1e0a liquidity.usd (reproduced JOHNDOG/SGOV book; not Gecko reserve_in_usd)", class: claim, receipt_ids: [R-5] }
  - { kind: volume_24h, value: 3402161.96, currency: USD, as_of: 2026-09-03T03:53:29Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa9349400def8a8fb8b96763c52870fcadbc8775361dd49e95291486be5141e0a volume_usd.h24 (JOHNDOG/SGOV pool)", class: claim, receipt_ids: [R-6] }
  - { kind: tvl, value: "NULL — Gecko reserve_in_usd printed -599778.93 this pass; not a TVL figure. DexScreener JOHNDOG/SGOV liquidity.usd 176778.87 is the reproduced book.", currency: USD, as_of: 2026-09-03T03:53:29Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa934…1e0a reserve_in_usd (negative print; not copied as TVL)", class: claim, receipt_ids: [R-6] }
  - { kind: market_cap, value: 415313, currency: USD, as_of: 2026-09-03T03:53:29Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x64bc…1e18 pair 0xa934…1e0a fdv/marketCap", class: claim, receipt_ids: [R-5] }
  - { kind: market_cap, value: 900999.34, currency: USD, as_of: 2026-09-03T03:53:29Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa934…1e0a fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-6] }
  - { kind: holders, value: 1938, currency: null, as_of: 2026-09-03T03:53:29Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:54:18Z, receipt_ids: [R-4], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x32a7bc0 (53115840). Token 0x64bc…1e18 eth_getCode 44 bytes 0x3d3d3d3d363d3d37363d73 3be8b97f…c599 5af43d3d93803e602a57fd5bf3 (EIP-1167 clone of 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599). name John Dog, symbol JOHNDOG, decimals 18, totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl code 13927 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:54:18Z, receipt_ids: [R-1, R-2, R-3, R-7], result: "Blockscout api/v2 token 0x64bc…1e18 name John Dog symbol JOHNDOG holders_count 1938 total_supply 1e27 decimals 18 type ERC-20. Address is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599. creator_address_hash null creation_transaction_hash null this pass. Impl 0x3Be8…C599 name DopplerERC20V1 is_verified true creator 0x1B37D3a72082029c44B35B604Ea473617580b69a tx 0xb53eb826…f7c9. Live approve tx 0x0568c6a0…0df8 2026-09-03T03:50:59Z block 53113914 method 0x095ea7b3 status ok. Transfers counterparty PoolManager 0x8366…0951. getcontractcreation HTTP 429 this pass; not retried." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:53:29Z, receipt_ids: [R-5, R-6], result: "DexScreener latest/dex/tokens/0x64bc…1e18: 13 robinhood uniswap pairs; top JOHNDOG/SGOV v4 0xa934…1e0a quote 0x92FD…F9B5 iShares 0-3 Month Treasury Bond • Robinhood Token / SGOV liquidity.usd 176778.87 volume.h24 3501375.34 fdv/marketCap 415313 pairCreatedAt 1788312314000 (2026-09-02T01:25:14Z) info.websites https://dexxyswap.com info.socials x.com/search?q=$John%20Dog. Gecko pool: name JOHNDOG / SGOV volume_usd.h24 3402161.96 reserve_in_usd -599778.93 fdv_usd 900999.34 market_cap_usd null pool_created_at 2026-09-02T01:25:14Z dex bankr-robinhood quote robinhood_0x92fd…f9b5." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone (1e9-supply) named John Dog / JOHNDOG, quoted against SGOV • Robinhood Token into Uniswap v4 pool 0xa934…1e0a. owner() Airlock 0xeb7C…0862; factory() reverts. Gecko names dex bankr-robinhood on the same pool id DexScreener labels v4 / dexId uniswap.", class: verified, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-1, R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "John Dog", class: verified, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "JOHNDOG", class: verified, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18", class: verified, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials is an X search URL; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote SGOV 0x92FD…F9B5 is named iShares 0-3 Month Treasury Bond • Robinhood Token. SGOV is a rail, not the subject. Distinct from DEBTCOIN/SGOV (in flight this round) and from census LONG / Artificial Inu / Bankr (the pad).", class: verified, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DexScreener JOHNDOG/SGOV Uniswap v4 liquidity.usd 176778.87 volume.h24 3501375.34 fdv/marketCap 415313 at 2026-09-03T03:53:29Z (reproduced book)", class: verified, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko JOHNDOG/SGOV volume_usd.h24 3402161.96 fdv_usd 900999.34 market_cap_usd null at 2026-09-03T03:53:29Z (pool slice)", class: verified, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko reserve_in_usd printed -599778.93 on JOHNDOG/SGOV this pass; not a TVL figure. DexScreener liquidity.usd 176778.87 is the reproduced book.", class: verified, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: 1938, class: verified, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: control.owner, value: "owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; factory() reverts", class: verified, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-4], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SGOV 0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5; venue is Uniswap v4 pool 0xa9349400def8a8fb8b96763c52870fcadbc8775361dd49e95291486be5141e0a; PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 appears as a transfer counterparty", class: verified, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-5, R-6, R-7], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash and creation_transaction_hash were empty on the token page this pass; implementation creator is DopplerERC20V1Factory 0x1B37…b69a; pad of record is that Doppler/Airlock path (Gecko dex bankr-robinhood), not Pons, lunch.fun, or hood.fun", class: verified, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-1, R-2, R-6], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, or Gecko this pass", class: unknown, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: DexScreener info.websites https://dexxyswap.com; info.socials is an X search URL, not a profile", class: claim, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.domain, value: "NULL — DexScreener info.websites is dexxyswap.com only; flag third-party-link; Gecko pool has no website field", class: claim, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: candidate, value: "johndog | JOHNDOG | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-1, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x92FD66527192E3e61d4DDd13322Aa222DE86F9B5", class: verified, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-23, field: other, value: "ca-collision: DexScreener search also returned other robinhood JOHNDOG/JohnDog CAs 0xd83E…86D3 (JOHNDOG/ETH), 0xCdE1…1e18 (JOHNDOG/DJT), 0x0774…6801 (JohnDog/SGOV), 0xDC9B…4dF (JohnDog/WETH), plus Solana JOHNDOG (wrong-chain). This packet is 0x64bc…1e18 only.", class: claim, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:54:18Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: economics.metric, value: "Gecko fdv_usd 900999.34; DexScreener fdv/marketCap 415313 on the same JOHNDOG/SGOV pool. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:53:29Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-12]
    material_effect: "Gecko reserve_in_usd is negative so it cannot be the TVL figure; DexScreener liquidity.usd 176778.87 is the reproduced JOHNDOG/SGOV book."
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Same JOHNDOG/SGOV pool: DexScreener fdv/marketCap 415313 vs Gecko fdv_usd 900999.34."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener JOHNDOG/SGOV 24h volume $3.50M, liquidity $176,779"
    summary: "DexScreener pair 0xa934…1e0a liquidity.usd 176778.87 volume.h24 3501375.34 fdv 415313. Reproduced DS book; Gecko reserve_in_usd not used as TVL."
    occurred_at: 2026-09-03T03:53:29Z
    observed_at: 2026-09-03T03:53:29Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-2
    type: onchain
    title: "Gecko JOHNDOG/SGOV reserve_in_usd printed negative"
    summary: "Gecko pool 0xa934…1e0a reserve_in_usd -599778.93 volume_usd.h24 3402161.96 fdv_usd 900999.34. Negative reserve is not TVL."
    occurred_at: 2026-09-03T03:53:29Z
    observed_at: 2026-09-03T03:53:29Z
    affected_fields: [economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-3
    type: onchain
    title: "JOHNDOG/SGOV Uniswap v4 pool created"
    summary: "Gecko pool_created_at 2026-09-02T01:25:14Z; DexScreener pairCreatedAt 1788312314000. Token create tx hash was empty on Blockscout this pass."
    occurred_at: 2026-09-02T01:25:14Z
    observed_at: 2026-09-03T03:53:29Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-6]
  - id: EVT-4
    type: onchain
    title: "Live JOHNDOG approve on Blockscout"
    summary: "Tx 0x0568c6a0…0df8 from 0x1341…C1A5 to token 0x64bc…1e18 method 0x095ea7b3 at 2026-09-03T03:50:59Z block 53113914 status ok."
    occurred_at: 2026-09-03T03:50:59Z
    observed_at: 2026-09-03T03:54:18Z
    affected_fields: [activity.status, lifecycle]
    evidence_state: verified
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-3]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x64bc…1e18 John Dog / JOHNDOG", url: "https://robinhoodchain.blockscout.com/address/0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18", published_at: null, accessed_at: 2026-09-03T03:53:29Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-21, CLM-24], excerpt: "hash 0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18 name John Dog is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol JOHNDOG decimals 18 total_supply 1e27 holders_count 1938 type ERC-20. creator_address_hash null creation_transaction_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:54:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9." }
  - { id: R-3, publisher: Blockscout, title: "approve tx 0x0568c6a0…0df8", url: "https://robinhoodchain.blockscout.com/tx/0x0568c6a0d79f2b29125db34a373971d8e9930d8cf5c58a9c237948559ee50df8", published_at: 2026-09-03T03:50:59Z, accessed_at: 2026-09-03T03:54:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, EVT-4], excerpt: "timestamp 2026-09-03T03:50:59.000000Z status ok result success block_number 53113914 from 0x13416BD88c491cd68AED87377f56d50475e7C1A5 (is_contract false) to John Dog 0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18 method 0x095ea7b3." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on JOHNDOG", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:54:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-14, CLM-17, CLM-24], excerpt: "eth_blockNumber 0x32a7bc0 (53115840). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name John Dog symbol JOHNDOG decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl code 13927 B." }
  - { id: R-5, publisher: DexScreener, title: "latest/dex/tokens JOHNDOG", url: "https://api.dexscreener.com/latest/dex/tokens/0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18", published_at: null, accessed_at: 2026-09-03T03:53:29Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-7, CLM-8, CLM-9, CLM-10, CLM-12, CLM-15, CLM-17, CLM-19, CLM-20, CLM-21, CLM-22, CLM-23, CLM-25, EVT-1, EVT-3], excerpt: "13 robinhood uniswap pairs. Top pairAddress 0xa9349400def8a8fb8b96763c52870fcadbc8775361dd49e95291486be5141e0a labels v4 base John Dog / JOHNDOG quote iShares 0-3 Month Treasury Bond • Robinhood Token / SGOV 0x92FD6652…F9B5 liquidity.usd 176778.87 volume.h24 3501375.34 fdv 415313 marketCap 415313 pairCreatedAt 1788312314000. info.websites dexxyswap.com info.socials x.com/search?q=$John%20Dog." }
  - { id: R-6, publisher: GeckoTerminal, title: "JOHNDOG/SGOV Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa9349400def8a8fb8b96763c52870fcadbc8775361dd49e95291486be5141e0a", published_at: null, accessed_at: 2026-09-03T03:53:29Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-9, CLM-11, CLM-12, CLM-15, CLM-16, CLM-20, CLM-22, CLM-25, EVT-2, EVT-3], excerpt: "name JOHNDOG / SGOV pool_created_at 2026-09-02T01:25:14Z fdv_usd 900999.3416 market_cap_usd null volume_usd.h24 3402161.95865049 reserve_in_usd -599778.929790239 transactions.h24 buys 14459 sells 14722. dex bankr-robinhood quote robinhood_0x92fd66527192e3e61d4ddd13322aa222de86f9b5." }
  - { id: R-7, publisher: Blockscout, title: "JOHNDOG transfers and logs", url: "https://robinhoodchain.blockscout.com/address/0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18", published_at: null, accessed_at: 2026-09-03T03:54:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "api/v2/tokens/0x64bc…1e18/transfers and /logs. Transfer counterparties include PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951. Sample Transfer tx 0x9a3e6c12…1609 block 53116355. Approval log tx 0xf885319f…aaf1 block 53116444." }
  - { id: R-8, publisher: DexScreener, title: "latest/dex/search JOHNDOG", url: "https://api.dexscreener.com/latest/dex/search?q=JOHNDOG", published_at: null, accessed_at: 2026-09-03T03:53:29Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-23], excerpt: "Search rows include robinhood JOHNDOG/SGOV 0x64bcF4aA85559526cFf0528BCDc0Cb9d3ea41e18 pair 0xa934…1e0a; also 0xd83Ef342…86D3 JOHNDOG/ETH, 0xCdE16073…1e18 JOHNDOG/DJT, 0x07745667…6801 JohnDog/SGOV, 0xDC9B9e26…4dF JohnDog/WETH, plus Solana JOHNDOG (wrong-chain)." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x64bc…1e18?", checked: "DexScreener info.websites dexxyswap.com (third-party-link); info.socials is an X search URL; Gecko pool has no website; Blockscout token page has no homepage, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P0, question: "What is the create tx and launcher for 0x64bc…1e18 (Bankr Airlock create vs LongLauncher vs other)?", checked: "Blockscout creator_address_hash and creation_transaction_hash null; getcontractcreation HTTP 429 not retried; factory() reverts; owner() Airlock 0xeb7C…0862; impl creator DopplerERC20V1Factory 0x1B37…b69a, 2026-09-03", next: "retry getcontractcreation after rate limit; decode Airlock create() around 2026-09-02T01:25:14Z" }
  - { priority: P1, question: "Does Gecko later print a non-negative reserve_in_usd for JOHNDOG/SGOV 0xa934…1e0a?", checked: "Live Gecko reserve_in_usd -599778.93; DexScreener liquidity.usd 176778.87, 2026-09-03", next: "re-GET the Gecko pool once; keep DS liquidity as the book until reserve is non-negative" }
  - { priority: P1, question: "Which of the other DexScreener JOHNDOG/JohnDog CAs, if any, share a deployer with 0x64bc…1e18?", checked: "Search listed 0xd83E…86D3, 0xCdE1…1e18, 0x0774…6801, 0xDC9B…4dF plus Solana; token endpoint for 0x64bc…1e18 returned 13 pairs all on that CA, 2026-09-03", next: "eth_getCode/name/symbol on those CAs only if a later assignment asks" }
  - { priority: P2, question: "Does dexxyswap.com bidirectionally claim JOHNDOG 0x64bc…1e18?", checked: "DexScreener listed the URL; the site itself was not opened this pass", next: "open dexxyswap.com once and record whether the CA is on-page" }
---

# JOHNDOG — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against SGOV. Token 0x64bc…1e18 is an EIP-1167 DopplerERC20V1 clone named John Dog / JOHNDOG. Traders buy and sell JOHNDOG on Uniswap v4 against the SGOV rail. No official site or handle was located this pass.

Themes: memecoin, stock-paired:SGOV, rwa, graduation

## Why it matters

The JOHNDOG/SGOV Uniswap v4 book printed about $3.50M of 24h volume and $176,779 liquidity on DexScreener at collection. SGOV is iShares 0-3 Month Treasury Bond • Robinhood Token, a rail, not the subject. Gecko labeled the same pool dex bankr-robinhood and printed a negative reserve_in_usd; that print is not TVL. Distinct from DEBTCOIN/SGOV (in flight this round).

## What could go wrong

USD liquidity on the JOHNDOG/SGOV book counts both sides, and the quote side is SGOV, not USDG. Gecko reserve_in_usd printed negative this pass, so a compiler must not copy it as TVL. DexScreener search lists other JOHNDOG/JohnDog contract addresses. No official handle was located, so comms surfaces stay unconfirmed-official.

## Product and mechanics

DopplerERC20V1 0x3Be8…C599 is the implementation. Token 0x64bc…1e18 is a 44-byte EIP-1167 clone; RPC name John Dog, symbol JOHNDOG, decimals 18, totalSupply 1e27. owner() returns Airlock 0xeb7C…0862. factory() reverts. Implementation creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. Token-page creator_address_hash and creation_transaction_hash were empty this pass. [verified R-1 R-2 R-4]

Primary book is Uniswap v4 JOHNDOG/SGOV pool 0xa934…1e0a, created 2026-09-02T01:25:14Z. Quote token is SGOV 0x92FD…F9B5. DexScreener labels v4 / dexId uniswap. Gecko names dex bankr-robinhood on the same pool id. PoolManager 0x8366…0951 appears as a transfer counterparty. Secondary JOHNDOG/USDG v4 books exist on DexScreener with far less liquidity than the SGOV book. [verified R-5 R-6 R-7]

## Control and security

owner() is Airlock 0xeb7C…0862. factory() reverts. Token create tx was not on the Blockscout token page this pass; getcontractcreation returned HTTP 429 and was not retried. No audit report URL was located this pass. [verified R-1 R-4] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites is https://dexxyswap.com (third-party-link). info.socials is an X search URL, not a profile. Flag unconfirmed-official. [claim R-5]

SGOV is the iShares 0-3 Month Treasury Bond Robinhood Token rail at 0x92FD…F9B5. This packet is the JOHNDOG graduation, not SGOV and not Bankr/LONG as subjects. [verified R-5 R-6]

## Economics and activity

DexScreener JOHNDOG/SGOV Uniswap v4 24h volume is 3501375.34 USD and liquidity.usd is 176778.87 at 2026-09-03T03:53:29Z. fdv/marketCap is 415313. That is the reproduced book. [claim R-5]

Gecko same pool: volume_usd.h24 3402161.96, fdv_usd 900999.34, market_cap_usd null, reserve_in_usd -599778.93. The negative reserve is not TVL. [claim R-6]

Blockscout holders_count 1938. Pair created 2026-09-02T01:25:14Z. Live approve tx 0x0568c6a0…0df8 at 2026-09-03T03:50:59Z. [claim R-1 R-3]

## Material risks

- Quote token SGOV 0x92FD…F9B5 is a Robinhood Token rail; pool USD figures count JOHNDOG plus SGOV. [verified R-5 R-6]
- Gecko reserve_in_usd printed negative this pass; do not copy as TVL. [verified R-6]
- DexScreener search lists other JOHNDOG/JohnDog CAs; this packet is 0x64bc…1e18 only. [claim R-5]
- No official handle or domain this pass; dexxyswap.com is a third-party-link. [claim R-5]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl and a live approve tx, RPC name/symbol/owner/eth_getCode, DexScreener token, and one Gecko pool GET were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-5 R-6]
- Numbers: 3501375.34 / 176778.87 is the DexScreener JOHNDOG/SGOV book. Gecko volume 3402161.96 is the same pool. Gecko reserve_in_usd -599778.93 is not TVL. fdv 415313 (DS) vs 900999.34 (Gecko) is an open conflict. [claim R-5 R-6]
- Adversarial: the strongest contrary reading is that JOHNDOG is Bankr-the-pad, LONG, DOGGIE, HOTDOG, or another JOHNDOG CA, or that Gecko -599k is TVL. Token address, SGOV quote, DS liquidity, and empty official surfaces contradict those merges. [inference R-5 R-6]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no johndog / JOHNDOG / John Dog / 0x64bc…1e18. SGOV rail address in content/dependencies/stock-tokens.yaml is 0x92FD…F9B5.
- Explorer: Blockscout api/v2 token, address, impl, transactions, transfers, logs. RPC eth_getCode/eth_call name/symbol/decimals/totalSupply/owner/factory with Mozilla UA at block 53115840.
- Aggregators: DexScreener latest/dex/tokens (and search only to recover the truncated CA); one Gecko pool GET with Mozilla UA.
- Failed: Blockscout token creator_address_hash null; getcontractcreation HTTP 429 (not retried); /api/v2/tx/{hash} HTTP 400 (transactions list used instead); factory() reverts.
- Time: collection 2026-09-03T03:53:29Z–2026-09-03T03:54:18Z.
