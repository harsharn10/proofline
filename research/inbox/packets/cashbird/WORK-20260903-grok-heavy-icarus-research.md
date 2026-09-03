---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: cashbird
name: CASHBIRD
packet_tier: seed
as_of: 2026-09-03T03:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [cashbird]
allowed_paths:
  - research/inbox/packets/cashbird/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: cashbird
  aliases: [CASHBIRD, Cashbird]
  symbols: [CASHBIRD]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is tinyurl.com/yza4fc3t, which 302s to x.com/vladtenev/status/1905370015995728101; Gecko token info websites []; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — DexScreener info.socials lists x.com/Cashbirdonlong and that profile bio embeds CA 0x38C8…1e18; Gecko token info twitter_handle null; @cashbirdRH bio pins a different CA; flag unconfirmed-official and handle-collision; do not file as official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko token info, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "CASHBIRD is the ERC-20 at 0x38C8…1e18 created through that launcher; entity_kind token, not protocol"
        - "No shared domain or handle; DexScreener social is x.com/Cashbirdonlong, not @longdotxyz"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "CASHBIRD is 0x38C8…1e18 paired to GLD 0xC9a9…FC4e"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the CASHBIRD/gld pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0x4e8a2bee…9839 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: cashcat
      signals: [other]
      contrary_signals:
        - "Pending packet CASHCAT is LaunchToken 0x020b…18b4 via NOXA factory 0xD9eC…FccB, site cashcat.cc / @cashcat_token"
        - "CASHBIRD is DopplerERC20V1 0x38C8…1e18 via LongLauncher, quoted against GLD"
        - "No shared domain, handle, or reproduced address"
    - slug: ubik
      signals: [other]
      contrary_signals:
        - "Discovery UBIK is 0x8124…68Bd paired to the same GLD rail 0xC9a9…FC4e on pair 0x1f28…e676"
        - "CASHBIRD is a distinct base token 0x38C8…1e18 on pair 0xf25f…fdfb"
        - "SCHIFFY 0x42aF…1e18 / pair 0xc749…777e is a third GLD book, also a distinct base"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x38C8…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; LongLauncher.create at 2026-09-01T21:50:40Z minted cashbird / CASHBIRD into Uniswap v4 pool 0xf25f…fdfb quoted against SPDR Gold Trust • Robinhood Token GLD 0xC9a9…FC4e (a rail, GET /rhj/assets row). Distinct from UBIK/GLD and SCHIFFY/GLD. No official site or handle this pass. [R-1] [R-2] [R-4] [R-5] [R-6] [R-7] [R-9] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-25], note: "" }

links:
  - { kind: x, url: "https://x.com/Cashbirdonlong", authenticity: unconfirmed }
  - { kind: other, url: "https://tinyurl.com/yza4fc3t", authenticity: unconfirmed }

deployments:
  - label: CASHBIRD token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x38C8f642A04FEaC9899990276b4207fE4F621e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-4, R-5, R-6]
  - label: DopplerERC20V1Factory (token creator)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:46:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-17]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-15]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6]
  - label: SPDR Gold Trust • Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-6, R-7, R-8]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:50:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6]

metrics:
  - { kind: volume_24h, value: 1354268.54, currency: USD, as_of: 2026-09-03T03:50:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xf25fc6cf0b524e236ffe33e762caee47ef7284ec65c175900a1542a6bc91fdfb volume_usd.h24", class: claim, receipt_ids: [R-2] }
  - { kind: tvl, value: 101866.43, currency: USD, as_of: 2026-09-03T03:50:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xf25f…fdfb reserve_in_usd (CASHBIRD/GLD pool, not an all-pools figure)", class: claim, receipt_ids: [R-2] }
  - { kind: market_cap, value: 151295.61, currency: USD, as_of: 2026-09-03T03:50:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xf25f…fdfb fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-2] }
  - { kind: volume_24h, value: 1441418.67, currency: USD, as_of: 2026-09-03T03:50:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x38C8…1e18 pair 0xf25f…fdfb CASHBIRD/GLD Uniswap v4 volume.h24", class: claim, receipt_ids: [R-1] }
  - { kind: tvl, value: 101180.42, currency: USD, as_of: 2026-09-03T03:50:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x38C8…1e18 pair 0xf25f…fdfb liquidity.usd", class: claim, receipt_ids: [R-1] }
  - { kind: market_cap, value: 156513, currency: USD, as_of: 2026-09-03T03:50:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x38C8…1e18 pair 0xf25f…fdfb fdv/marketCap", class: claim, receipt_ids: [R-1] }
  - { kind: holders, value: 1667, currency: null, as_of: 2026-09-03T03:46:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x38C8…1e18 holders_count", class: claim, receipt_ids: [R-4] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com block 0x32a694a (53111114) then 0x32a6b45 (53111621). Token 0x38C8…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name() cashbird; symbol() CASHBIRD; decimals 18; totalSupply 1e27. owner() Airlock 0xeb7C…0862. factory() reverts. GLD 0xC9a9…FC4e eth_getCode 283 bytes; name() SPDR Gold Trust • Robinhood Token; symbol() GLD. Factory 1912 B; impl 13927 B; LongLauncher 5826 B; Airlock 5695 B. Create-from 0xE5b9…4436 code 23 B EIP-7702 prefix 0xef0100." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-8, R-15, R-17], result: "Blockscout api/v2 token 0x38C8…1e18 name cashbird is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator 0x1B37…b69a creation tx 0x4e8a2bee…9839; token symbol CASHBIRD holders_count 1667 total_supply 1e27. Tx timestamp 2026-09-01T21:50:40Z block 52053085 from 0xE5b9…4436 (eip7702) to LongLauncher method create; decoded numeraire 0xC9a9…FC4e tokenFactory 0x1B37…b69a name cashbird symbol CASHBIRD supply 1e27. PoolManager Initialize id 0xf25f…fdfb currency0 token currency1 GLD. LaunchCreated normalizedTicker CASHBIRD. GLD BeaconProxy name SPDR Gold Shares • Robinhood Token holders_count 14103." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-2, R-3, R-16], result: "DexScreener latest/dex/tokens/0x38C8…1e18 7 robinhood uniswap v4 pairs; top CASHBIRD/GLD 0xf25f…fdfb quote 0xC9a9…FC4e liquidity.usd 101180.42 volume.h24 1441418.67 fdv 156513 pairCreatedAt 1788299440000 (2026-09-01T21:50:40Z) info.websites tinyurl.com/yza4fc3t info.socials x.com/Cashbirdonlong. Gecko pool: name CASHBIRD / gld volume_usd.h24 1354268.54 reserve_in_usd 101866.43 fdv_usd 151295.61 pool_created_at 2026-09-01T21:50:40Z dex bankr-robinhood market_cap_usd null. Gecko token volume_usd.h24 1368442.76 (all pools). Gecko token info websites [] twitter_handle null." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-7], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one GLD row tokenSymbol GLD tokenName SPDR Gold Trust • Robinhood Token deployments contractAddress 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-6], result: "Airlock 0xeb7C…0862 getAssetData(0x38C8…1e18) word0 numeraire 0xC9a981FE…FC4e; word1/word2 0xdead; word4 initializer 0x4e346895…a544; word5 token 0x38C8f642…1e18; word6 0xdeaddead…dead; word7/word8 1e27. Airlock owner() 0x21E2ce70…7A66." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 cashbird/CASHBIRD into a Uniswap v4 pool quoted against GLD 0xC9a9…FC4e; Airlock getAssetData numeraire is that GLD; LP slots in getAssetData include 0xdead", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: cashbird, class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: CASHBIRD, class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x38C8f642A04FEaC9899990276b4207fE4F621e18", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6, R-2], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: identity.handle, value: "NULL — DexScreener lists x.com/Cashbirdonlong and that bio embeds CA 0x38C8…1e18; Gecko twitter_handle null; @cashbirdRH pins a different CA; flag unconfirmed-official; do not file as official", class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-11, R-14, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset is the GLD rail SPDR Gold Trust • Robinhood Token 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e (GET /rhj/assets active row, chainId 4663)", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-2, R-6, R-7, R-8], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 poolId 0xf25fc6cf0b524e236ffe33e762caee47ef7284ec65c175900a1542a6bc91fdfb; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-1, R-2, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko CASHBIRD/gld pool 0xf25f…fdfb volume_usd.h24 1354268.54 reserve_in_usd 101866.43 fdv_usd 151295.61 at 2026-09-03T03:50:00Z (pool slice, not Gecko token all-pools 1368442.76)", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener same pair liquidity.usd 101180.42 volume.h24 1441418.67 fdv/marketCap 156513 at 2026-09-03T03:50:00Z", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 1667, class: verified, observed_at: 2026-09-03T03:46:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from 0xE5b93E777e75973459d7aA17D2F175B4459a4436 is EIP-7702 (23 B 0xef0100), not empty EOA code", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on DexScreener, Gecko, Blockscout, the tinyurl target, or X search this pass", class: unknown, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: identity.domain, value: "NULL — DexScreener websites tinyurl.com/yza4fc3t 302s to a 2025 @vladtenev post; Gecko websites []; no project domain this pass; flag third-party-link", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-12, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-19, field: relationship, value: "Gecko dex id bankr-robinhood on the CASHBIRD/gld pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge CASHBIRD into census bankr or census long.", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-20, field: candidate, value: "cashbird | CASHBIRD | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-6, R-7, R-8], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-6, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: control.privileged-role, value: "create-tx Lock beneficiaries 5% 0x21E2ce70…7A66 (Airlock owner) and 95% 0xE5b93E77…4436 (LaunchCreated launcher); initializer 0x4e346895…a544", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Same-stock GLD rail, distinct books: CASHBIRD 0x38C8…1e18 pair 0xf25f…fdfb; UBIK 0x8124…68Bd pair 0x1f28…e676 liq 266064.38 vol 2493894.07; SCHIFFY 0x42aF…1e18 pair 0xc749…777e liq 282378.39 vol 916549.85. No shared base address.", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-9, R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "third-party-link: DexScreener website tinyurl.com/yza4fc3t resolves to @vladtenev 1905370015995728101 Cash delivery ... as it was written (2025-03-27). copypasta-pattern: @ToiburR62210806 posted a netlify claim portal for CA 0x38C8…1e18", class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-12, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@Cashbirdonlong.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-11, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@cashbirdRH.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-14, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: other, value: "Ticker collision: at least one other robinhood CASHBIRD, 0xF31726CC03BDa2F4d0Ed9CCD62824Aea95Cf84B9, also quotes GLD on pair 0x7a2c…b083 with liquidity.usd 9866.82; Cash Delivery Bird 0x91554e79…b2cc is the CA in the @cashbirdRH bio", class: claim, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-14, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: deployment.role, value: "Token creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; LaunchCreated names LongLauncher 0x22e9…eeED as the pad, not Pons, PAIR, NOXA, or hood.fun", class: verified, observed_at: 2026-09-03T03:47:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13]
    material_effect: "Same CASHBIRD/GLD pool 0xf25f…fdfb: Gecko reserve_in_usd 101866.43 vs DexScreener liquidity.usd 101180.42; 24h volume 1354268.54 vs 1441418.67; fdv 151295.61 vs 156513. A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko CASHBIRD/gld 24h volume $1.35M, liquidity $102k"
    summary: "Gecko pool 0xf25f…fdfb volume_usd.h24 1354268 reserve_in_usd 101866 fdv_usd 151296. DexScreener same pair liquidity.usd 101180 volume.h24 1441419."
    occurred_at: 2026-09-03T03:50:00Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-1, R-2]
  - id: EVT-2
    type: onchain
    title: "LongLauncher.create minted cashbird / CASHBIRD against GLD"
    summary: "Tx 0x4e8a…9839 from 0xE5b9…4436 at 2026-09-01T21:50:40Z; PoolManager Initialize poolId 0xf25f…fdfb; LaunchCreated normalizedTicker CASHBIRD."
    occurred_at: 2026-09-01T21:50:40Z
    observed_at: 2026-09-03T03:47:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
  - id: EVT-3
    type: ct
    title: "@Cashbirdonlong quoted @vladtenev Enjoy the gold"
    summary: "@Cashbirdonlong 2095230610570723724 replied enjoy the gold. to @vladtenev 2095230042184073361 Enjoy the gold. Bio embeds CA 0x38c8…1e18."
    occurred_at: 2026-09-02T19:21:19Z
    observed_at: 2026-09-03T03:52:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-4
    type: ct
    title: "DexScreener website tinyurl resolves to 2025 Vlad Cash delivery post"
    summary: "tinyurl.com/yza4fc3t Location https://x.com/vladtenev/status/1905370015995728101 text Cash delivery ... as it was written, 2025-03-27."
    occurred_at: 2025-03-27T21:23:06Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-5
    type: ct
    title: "Third-party netlify claim portal posted for the CA"
    summary: "@ToiburR62210806 posted $CASHBIRD claim portal is open with CA 0x38C8…1e18 and crypto-mll.netlify.app/claim. Flag copypasta-pattern."
    occurred_at: 2026-09-02T21:06:14Z
    observed_at: 2026-09-03T03:45:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]

receipts:
  - { id: R-1, publisher: DexScreener, title: "latest/dex/tokens CASHBIRD", url: "https://api.dexscreener.com/latest/dex/tokens/0x38C8f642A04FEaC9899990276b4207fE4F621e18", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-10, CLM-13, CLM-17, CLM-19, CLM-20, CLM-25, CLM-27, EVT-1], excerpt: "7 robinhood uniswap v4 pairs. Top pairAddress 0xf25fc6cf0b524e236ffe33e762caee47ef7284ec65c175900a1542a6bc91fdfb labels v4 base cashbird/CASHBIRD 0x38C8…1e18 quote SPDR Gold Trust • Robinhood Token/GLD 0xC9a9…FC4e liquidity.usd 101180.42 volume.h24 1441418.67 fdv 156513 pairCreatedAt 1788299440000. websites tinyurl.com/yza4fc3t socials x.com/Cashbirdonlong." }
  - { id: R-2, publisher: GeckoTerminal, title: "CASHBIRD/gld Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xf25fc6cf0b524e236ffe33e762caee47ef7284ec65c175900a1542a6bc91fdfb", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-10, CLM-12, CLM-19, EVT-1], excerpt: "name CASHBIRD / gld pool_created_at 2026-09-01T21:50:40Z fdv_usd 151295.6083 market_cap_usd null volume_usd.h24 1354268.54474443 reserve_in_usd 101866.4274 transactions.h24 buys 6620 sells 6840. dex bankr-robinhood quote robinhood_0xc9a981fee1f9dec688bb123ccdecc63d0debfc4e." }
  - { id: R-3, publisher: GeckoTerminal, title: "cashbird token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x38C8f642A04FEaC9899990276b4207fE4F621e18", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12], excerpt: "name cashbird symbol CASHBIRD decimals 18 total_supply 1e27 price_usd 0.0001512956083 fdv_usd 151295.608284516 market_cap_usd null volume_usd.h24 1368442.76228638 total_reserve_in_usd 61615.99. coingecko_coin_id null. Top pool 0xf25f…fdfb." }
  - { id: R-4, publisher: Blockscout, title: "Token 0x38C8…1e18 cashbird / CASHBIRD", url: "https://robinhoodchain.blockscout.com/address/0x38C8f642A04FEaC9899990276b4207fE4F621e18", published_at: null, accessed_at: 2026-09-03T03:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-11, CLM-14, CLM-18, CLM-20, CLM-22, CLM-30, EVT-2], excerpt: "hash 0x38C8f642A04FEaC9899990276b4207fE4F621e18 name cashbird is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol CASHBIRD decimals 18 total_supply 1000000000000000000000000000 holders_count 1667 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x4e8a2bee…9839." }
  - { id: R-5, publisher: Blockscout, title: "create tx 0x4e8a2bee…9839", url: "https://robinhoodchain.blockscout.com/tx/0x4e8a2bee0b798fe5a12a0fc0ab7124f42cb49e611513252b4b6eca74b2ea9839", published_at: 2026-09-01T21:50:40Z, accessed_at: 2026-09-03T03:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-9, CLM-15, CLM-19, CLM-23, CLM-24, CLM-30, EVT-2], excerpt: "timestamp 2026-09-01T21:50:40.000000Z status ok block_number 52053085 from 0xE5b93E777e75973459d7aA17D2F175B4459a4436 (eip7702) to LongLauncher 0x22e99278…eeED method create. decoded numeraire 0xC9a981FE…FC4e tokenFactory 0x1B37…b69a name cashbird symbol CASHBIRD supply 1e27. Initialize id 0xf25f…fdfb. LaunchCreated normalizedTicker CASHBIRD." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner, Airlock getAssetData", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-8, CLM-15, CLM-18, CLM-21, CLM-22, CLM-24], excerpt: "eth_blockNumber 0x32a694a (53111114) then 0x32a6b45 (53111621). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name cashbird symbol CASHBIRD decimals 18 totalSupply 1e27. owner() 0xeb7C0347…0862. factory() reverts. GLD name SPDR Gold Trust • Robinhood Token. Airlock getAssetData numeraire 0xC9a981FE…FC4e token 0x38C8f642…1e18. Create-from 0xE5b9…4436 code 23 B 0xef0100." }
  - { id: R-7, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-21], excerpt: "HTTP 200. assets length 194. One GLD row: tokenSymbol GLD tokenName SPDR Gold Trust • Robinhood Token deployments contractAddress 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-8, publisher: Blockscout, title: "Token 0xC9a9…FC4e GLD", url: "https://robinhoodchain.blockscout.com/address/0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-21], excerpt: "hash 0xC9a981FEE1F9DEc688bb123ccDeCc63D0deBFC4e name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name SPDR Gold Shares • Robinhood Token symbol GLD holders_count 14103 total_supply 8611061000000000000000." }
  - { id: R-9, publisher: DexScreener, title: "UBIK token pairs (same-stock GLD, not CASHBIRD)", url: "https://api.dexscreener.com/latest/dex/tokens/0x812486EAea648819853F8E372dc9f1516C7868Bd", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25], excerpt: "UBIK/GLD pair 0x1f28c0c3938fd48947bdb02c43377534ef0a3ffb23945e68052bcaaec1d2e676 base 0x812486EAea648819853F8E372dc9f1516C7868Bd liquidity.usd 266064.38 volume.h24 2493894.07 fdv 8495641. Distinct base from CASHBIRD 0x38C8…1e18." }
  - { id: R-10, publisher: DexScreener, title: "SCHIFFY search (same-stock GLD, not CASHBIRD)", url: "https://api.dexscreener.com/latest/dex/search?q=SCHIFFY", published_at: null, accessed_at: 2026-09-03T03:51:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25], excerpt: "SCHIFFY/GLD pair 0xc749412e31087a6e6f9210af575bc9100159fbc9f45da3ca8b26b31f3bf5777e base 0x42aFA2124ca5a2B83898E46B2dA9a190995b1E18 quote GLD 0xC9a9…FC4e liquidity.usd 282378.39 volume.h24 916549.85 fdv 1449504 socials x.com/schiffygld. Distinct base from CASHBIRD 0x38C8…1e18." }
  - { id: R-11, publisher: "@Cashbirdonlong", title: "Cashbird profile", url: "https://x.com/Cashbirdonlong", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7, CLM-27, EVT-3], excerpt: "Display name Cashbird, handle @Cashbirdonlong, bio Cash Delivery … as it was written 0x38c8f642a04feac9899990276b4207fe4f621e18. 104 followers. Post 2095230610570723724 2026-09-02T19:21:19Z enjoy the gold. quoting @vladtenev Enjoy the gold." }
  - { id: R-12, publisher: TinyURL / "@vladtenev", title: "tinyurl.com/yza4fc3t -> Cash delivery post", url: "https://x.com/vladtenev/status/1905370015995728101", published_at: 2025-03-27T21:23:06Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-17, CLM-26, EVT-4], excerpt: "GET https://tinyurl.com/yza4fc3t Location https://x.com/vladtenev/status/1905370015995728101. Post: Cash delivery ... as it was written. 2025-03-27T21:23:06Z. Not a project homepage." }
  - { id: R-13, publisher: "@ToiburR62210806", title: "$CASHBIRD claim portal is open", url: "https://x.com/ToiburR62210806/status/2095257013143916999", published_at: 2026-09-02T21:06:14Z, accessed_at: 2026-09-03T03:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26, EVT-5], excerpt: "$CASHBIRD claim portal is open check eligibility before it gets crowded CA: 0x38C8f642A04FEaC9899990276b4207fE4F621e18 https://crypto-mll.netlify.app/claim?contract=0x38C8f642A04FEaC9899990276b4207fE4F621e18. Flag copypasta-pattern." }
  - { id: R-14, publisher: "@cashbirdRH", title: "Cash Bird profile (different CA)", url: "https://x.com/cashbirdRH", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7, CLM-28, CLM-29], excerpt: "Display name Cash Bird, handle @cashbirdRH, bio $CASHBIRD on @RobinhoodApp 0x91554e79a17C18990034D1ec3C4f492086d7b2cc. 453 followers. Distinct CA from token 0x38C8…1e18. Flag handle-collision." }
  - { id: R-15, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "api/v2 smart-contracts: name DopplerERC20V1 compiler_version v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. Address name DopplerERC20V1 is_contract true." }
  - { id: R-16, publisher: GeckoTerminal, title: "cashbird token info (no handle)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x38c8f642a04feac9899990276b4207fe4f621e18/info", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-17, CLM-27], excerpt: "attributes.websites [] twitter_handle null telegram_handle null discord_url null description null gt_verified false holders.count 1380 last_updated 2026-09-03T00:56:37Z. No project site or handle in Gecko info this pass." }
  - { id: R-17, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-30], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. smart-contracts compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1Factory.sol verified_at 2026-07-01T19:42:15Z." }
  - { id: R-18, publisher: DexScreener, title: "search CASHBIRD other mints", url: "https://api.dexscreener.com/latest/dex/search?q=CASHBIRD", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-28, CLM-29], excerpt: "Besides 0x38C8…1e18/GLD, search lists cashbird 0xF31726CC03BDa2F4d0Ed9CCD62824Aea95Cf84B9 / GLD pair 0x7a2c0ea8…b083 liquidity.usd 9866.82 volume.h24 26933.44, and Cash Delivery Bird 0x91554e79…b2cc / ETH with socials x.com/cashbirdRH. Distinct bases." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x38C8…1e18 beyond a DexScreener social plus bio CA?", checked: "DexScreener socials x.com/Cashbirdonlong bio embeds the CA; Gecko twitter_handle null websites []; tinyurl 302s to a 2025 Vlad post; @cashbirdRH pins a different CA, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a site that cross-links" }
  - { priority: P1, question: "Does @Cashbirdonlong pin the CA, a LONG token page, or a Community Mode vault?", checked: "Bio embeds 0x38c8…1e18; recent posts quote Vlad gold lines; no pinned CA post opened this pass, 2026-09-03", next: "fetch the profile pinned tweet if one appears" }
  - { priority: P1, question: "What does the IPFS token URI in create calldata resolve to?", checked: "create decoded bytes include ipfs://bafkreihwnykjlfsreqapyindp2pmmmnjzomxbum3nhlmq4rq2z2kqzfwq; gateway not opened this pass", next: "GET an IPFS gateway and record whether it names 0x38C8…1e18" }
  - { priority: P2, question: "Are UBIK 0x8124…68Bd and SCHIFFY 0x42aF…1e18 also LongLauncher Doppler clones on the same GLD rail?", checked: "DexScreener same-stock GLD books with distinct bases and higher liq/vol than CASHBIRD this pass; no Blockscout create txs this pass", next: "eth_getCode/factory on those bases if they are assigned" }
---

# CASHBIRD — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against the GLD rail. LongLauncher deploys cashbird (CASHBIRD) in one create call and seeds the CASHBIRD/GLD book. Traders buy and sell CASHBIRD against SPDR Gold Trust • Robinhood Token. No official site or handle was filed this pass.

Themes: memecoin, stock-paired:GLD, rwa

## Why it matters

The CASHBIRD/GLD Uniswap v4 book printed about $1.35M of 24h volume on Gecko at collection, with DexScreener at about $1.44M, and pool USD reserve about $102k. GLD 0xC9a9…FC4e is an active GET /rhj/assets Stock Token. The same GLD rail also quotes UBIK and SCHIFFY on different base tokens; those books are not this mint.

## What could go wrong

USD liquidity figures on the CASHBIRD/GLD book count both sides, and the quote side is GLD, not USDG. Several other robinhood tokens use the CASHBIRD ticker, including 0xF317…84B9/GLD and Cash Delivery Bird 0x9155…b2cc. DexScreener website is a TinyURL to a 2025 Vlad post, not a project domain.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xE5b9…4436 at 2026-09-01T21:50:40Z minted cashbird / CASHBIRD supply 1e9*1e18 into Uniswap v4 poolId 0xf25f…fdfb quoted against GLD 0xC9a9…FC4e. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() is Airlock 0xeb7C…0862. Airlock getAssetData numeraire is that GLD. [verified R-4 R-5 R-6]

DexScreener labels the primary book Uniswap v4 CASHBIRD/GLD. Gecko names the same pool CASHBIRD / gld with dex bankr-robinhood. Secondary CASHBIRD/USDG and CASHBIRD/ETH books exist with far less liquidity than the GLD book. [verified R-1 R-2]

GET /rhj/assets (194 assets) has an active GLD row at this address. Blockscout token name for the quote is SPDR Gold Shares • Robinhood Token; RPC and the registry say SPDR Gold Trust • Robinhood Token. Same address. [verified R-6 R-7 R-8]

## Control and security

token owner() returns Airlock. Airlock owner() returns 0x21E2…7A66. The create-tx from-address is EIP-7702 delegated (23-byte 0xef0100), not empty code. Lock beneficiaries on the create tx split 5% / 95% between that Airlock owner and the launcher. [verified R-5 R-6]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified. No audit report URL was located this pass. [verified R-15 R-17] [unknown]

## Team and provenance

No official domain or X handle was filed. DexScreener info.websites is tinyurl.com/yza4fc3t, which 302s to @vladtenev 1905370015995728101 (Cash delivery ... as it was written, 2025-03-27). DexScreener socials list @Cashbirdonlong; that bio embeds CA 0x38C8…1e18. Gecko token info twitter_handle is null. @cashbirdRH bios a different CA. Flag unconfirmed-official, third-party-link, and handle-collision. [claim R-1 R-11 R-12 R-14 R-16]

## Economics and activity

CASHBIRD/GLD Uniswap v4 24h volume is 1354268.54 USD and reserve_in_usd is 101866.43 at 2026-09-03T03:50:00Z from the Gecko pool endpoint. fdv_usd is 151295.61. Gecko token volume_usd.h24 is 1368442.76 across all pools, not the GLD book. [claim R-2 R-3]

DexScreener same pair: liquidity.usd 101180.42, volume.h24 1441418.67, fdv/marketCap 156513. Blockscout holders_count 1667. Pair created 2026-09-01T21:50:40Z. Assignment lead of liq ~$100,757 / vol ~$1,450,733 is close to this DexScreener slice. [claim R-1 R-4]

UBIK/GLD printed liquidity.usd 266064.38 volume.h24 2493894.07. SCHIFFY/GLD printed 282378.39 / 916549.85. Distinct bases. [claim R-9 R-10]

## Material risks

- Quote token GLD is a Robinhood Stock Token rail; pool USD reserve is CASHBIRD plus GLD, not a USDG backstop. [verified R-7 R-8]
- Gecko reserve and DexScreener liquidity for pool 0xf25f…fdfb disagree on volume and fdv this pass. [claim R-1 R-2]
- CASHBIRD ticker is reused by other 4663 mints. [claim R-14 R-18]
- No official handle or domain this pass; TinyURL is a third-party-link; a netlify claim URL was posted. [claim R-12 R-13]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/GLD and the create tx, RPC name/symbol/owner/getAssetData, DexScreener token/search/UBIK/SCHIFFY, Gecko pool/token/info, /rhj/assets, TinyURL, @Cashbirdonlong, @cashbirdRH, and the claim-portal post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-7]
- Numbers: 1354268.54 is the Gecko CASHBIRD/gld pool 24h volume, not the 1368442.76 token all-pools figure. Reserve 101866.43 is that pool. DexScreener 1441418.67 / 101180.42 is the same pair, different aggregator. [claim R-1 R-2 R-3]
- Adversarial: the strongest contrary reading is that CASHBIRD is UBIK or SCHIFFY because all three quote GLD, or that it is Bankr because Gecko labels dex bankr-robinhood. Bases differ, and the create transaction calls LongLauncher.create. [inference R-2 R-5 R-9 R-10]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no cashbird / CASHBIRD / 0x38C8…1e18. content/dependencies/stock-tokens.yaml lists GLD at 0xC9a9…FC4e.
- Explorer: Blockscout api/v2 token, impl, factory, GLD, create 0x4e8a2bee…9839 and logs (Initialize, LaunchCreated, Lock). RPC eth_getCode/eth_call with Mozilla UA at blocks 53111114–53111621.
- Aggregators: DexScreener latest/dex/tokens and search CASHBIRD / UBIK / SCHIFFY; Gecko pool, token, token/info (first pool/token GET 429, retry 200).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 GLD row at this address.
- Social: X user Cashbirdonlong / cashbirdRH; from:Cashbirdonlong; keyword CASHBIRD; TinyURL follow to 1905370015995728101; claim post 2095257013143916999.
- Failed: token factory() reverts (creator_address_hash used instead); Gecko first GET 429; IPFS bafkrei… gateway not opened; no bidirectional official handle.
- Time: collection 2026-09-03T03:44Z–2026-09-03T03:55Z.
