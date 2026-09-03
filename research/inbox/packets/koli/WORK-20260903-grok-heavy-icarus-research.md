---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: koli
name: KOLI
packet_tier: seed
as_of: 2026-09-03T04:16:00Z
prior_packet: null
supersedes: null
owned_slugs: [koli]
allowed_paths:
  - research/inbox/packets/koli/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: KOLI
  aliases: ["KOLI AI"]
  symbols: [KOLI]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.koli.top
  official_handle: "NULL — DexScreener info.socials and www.koli.top HTML list x.com/KoliAI_; @KoliAI_ bio has no contract this pass and no Latest post from this handle embedded 0xb8D9…1e18; flag unconfirmed-official"
  repository: "NULL — www.koli.top HTML includes github.com/calixeth/agentServer; that is not a token repository on DexScreener, Gecko, or Blockscout this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "KOLI is the ERC-20 at 0xb8D9…1e18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; DexScreener/site list @KoliAI_, not @longdotxyz"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the KOLI/NVDA pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0xcc8bc31e…ee53 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "KOLI is 0xb8D9…1e18 paired to the same NVDA 0xd060…9EEC via LongLauncher, site koli.top"
        - "Same-stock NVDA book, not an identity match; no shared domain, handle, or reproduced address"
    - slug: microduck
      signals: [other]
      contrary_signals:
        - "Packed microduck is PonsV2LauncherToken 0xD5f1…E725 paired to NVDA via PonsV2LaunchFactory, site microduck.net / @MicroDuckNVDA"
        - "KOLI launch tx called LongLauncher.create, not Pons v2"
        - "No shared domain, handle, or reproduced address"
    - slug: orbio
      signals: [other]
      contrary_signals:
        - "Packed ORBIO is PonsV2LauncherToken 0xAa07…28A3 paired to NVDA via Pons v2, site orbio.so / @orbiodotso"
        - "KOLI is DopplerERC20V1 0xb8D9…1e18 / Uniswap v4 0x1d67…1aa4 via LongLauncher"
        - "Same-stock NVDA book, not an identity match; no shared domain, handle, or reproduced address"
    - slug: ripe
      signals: [other]
      contrary_signals:
        - "Packed RIPE is Ripe DAO Governance Token 0x4D3f…883b / ripe.finance / @ripe_dao Uniswap v2 RIPE/NVDA 0x9b85…769D"
        - "KOLI is DopplerERC20V1 0xb8D9…1e18 Uniswap v4 KOLI/NVDA 0x1d67…1aa4 at koli.top"
        - "Same NVDA rail 0xd060…9EEC; no shared domain, handle, factory, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xb8D9…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create at 2026-09-01T23:23:36Z minted KOLI into Uniswap v4 pool 0x1d67…1aa4 quoted against NVIDIA • Robinhood Token NVDA 0xd060…9EEC. NVDA is the quote rail. Distinct from packed $AI, microduck, ORBIO, and RIPE on the same rail. www.koli.top reprints this CA. No official handle confirmed this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12] [R-16] [R-19]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-9], note: "" }

links:
  - { kind: site, url: "https://www.koli.top", authenticity: confirmed }
  - { kind: x, url: "https://x.com/KoliAI_", authenticity: unconfirmed }
  - { kind: other, url: "https://github.com/calixeth/agentServer", authenticity: unconfirmed }

deployments:
  - label: KOLI token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xb8D9F969dB56bb57353e36Fd0015D98e3A761E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-18]
  - label: DopplerERC20V1Factory (create tokenFactory)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-6]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5, R-6]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-15]
  - label: NVIDIA • Robinhood Token (pair quote rail)
    role: token
    address:
      value: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-12, R-17]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-16]

metrics:
  - { kind: volume_24h, value: 1170302.07, currency: USD, as_of: 2026-09-03T04:04:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1d67df0e83b4bfd6366279c55d40e82e7e6df010d90d928fd08c1c9d76481aa4 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 45352.52, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1d67df0e…1aa4 reserve_in_usd (KOLI/NVDA pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 47416.33, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1d67df0e…1aa4 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 1168551.64, currency: USD, as_of: 2026-09-03T04:04:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xb8D9F969…1e18 pair 0x1d67df0e…1aa4 KOLI/NVDA Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 44179.83, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xb8D9F969…1e18 pair 0x1d67df0e…1aa4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 47163, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xb8D9F969…1e18 pair 0x1d67df0e…1aa4 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 1164, currency: null, as_of: 2026-09-03T04:05:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xb8D9F969…1e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x32a9538. Token 0xb8D9…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name() KOLI; symbol() KOLI; decimals 18; totalSupply 1e27. owner() Airlock 0xeb7c0347…0862. factory() reverts. Impl code 13927 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-15, R-16, R-17, R-18], result: "Blockscout api/v2 token 0xb8D9…1e18 name KOLI is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator_address_hash null creation_transaction_hash null; token symbol KOLI holders_count 1164 total_supply 1e27. Mint from 0x0 at 2026-09-01T23:23:36Z tx 0xcc8bc31e…ee53 method 0x882db707 to Airlock 1e27 block 52108211. Tx from 0x390A…1aE (is_contract false) to LongLauncher method create; decoded numeraire 0xd060…9EEC tokenFactory 0x1B37…b69a supply 1e27. LaunchCreated normalizedTicker KOLI. PoolManager Initialize id 0x1d67…1aa4 currency0 KOLI currency1 NVDA. NVDA token name NVIDIA • Robinhood Token holders_count 91941." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0xb8D9…1e18 16 robinhood uniswap pairs; top KOLI/NVDA v4 0x1d67…1aa4 quote 0xd060…9EEC NVIDIA • Robinhood Token / NVDA liquidity.usd 44179.83 volume.h24 1168551.64 fdv 47163 pairCreatedAt 1788305016000 (2026-09-01T23:23:36Z) info.websites https://www.koli.top/ socials https://x.com/KoliAI_. Gecko pool same address name KOLI / NVDA dex bankr-robinhood volume_usd.h24 1170302.07 reserve_in_usd 45352.52 fdv_usd 47416.33 pool_created_at 2026-09-01T23:23:36Z market_cap_usd null. Gecko token volume_usd.h24 1186791.87 (all pools)." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:10:00Z, receipt_ids: [R-12, R-19], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one NVDA row tokenName NVIDIA • Robinhood Token deployments contractAddress 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC chainId 4663. Zero KOLI hits. DexScreener search RIPE NVDA top robinhood row is Ripe DAO Governance Token 0x4D3f…883b / NVDA v2 0x9b85…769D, not 0xb8D9…1e18." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-6], result: "At block 53122733 Airlock getAssetData(0xb8D9…1e18) word0 numeraire 0xd0601CE1…9EEC; word1/word2 0xdead; word3 NoOpMigrator 0xba2f330e…5A0e; word4 DopplerHookInitializer 0x4e346895…a544; word5 token 0xb8D9…1e18; word6 0xdeaddead…dead; word7/word8 1e27; word9 0x92d435c9…F765 (no code). NVDA name() NVIDIA • Robinhood Token symbol() NVDA. Factory code 1912 B. Launcher code 5826 B. Airlock code 5695 B. NVDA code 283 B. PoolManager code 24009 B. Create-from 0x390A…1aE code 0x. Airlock owner() 0x21e2ce70…7a66." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-13, R-14], result: "www.koli.top HTTP 200 reprints CA 0xb8d9f969db56bb57353e36fd0015d98e3a761e18 and x.com/KoliAI_; also github.com/calixeth/agentServer. DexScreener websites/socials match those two URLs. @KoliAI_ display KOLI AI, bio The First Personified AI Cloning Platform in Web3, On-Chain Value × 24/7 Presence, 897 followers; bio has no CA; Latest posts link www.koli.top/agent and www.koli.top/workspace, not the CA. docs.koli.top DNS failed this pass. Flag unconfirmed-official on the handle." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 KOLI/KOLI into a Uniswap v4 pool quoted against NVDA 0xd060…9EEC; Airlock getAssetData numeraire is that NVDA; LP addresses in getAssetData include 0xdead", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: KOLI, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: KOLI, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xb8D9F969dB56bb57353e36Fd0015D98e3A761E18", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-5, R-13, R-18], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4, R-6, R-15], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG: tx 0xcc8bc31e…ee53 from EOA 0x390A…1aE called LongLauncher.create; tokenFactory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from census LONG (the factory), packed $AI 0x2E8c…1e18, packed microduck 0xD5f1…E725, packed ORBIO 0xAa07…28A3, and packed RIPE 0x4D3f…883b.", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4, R-5, R-6, R-19], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset is the NVDA rail NVIDIA • Robinhood Token 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC (GET /rhj/assets 194 assets, one NVDA row, that contract, chainId 4663). NVDA is a rail, not this subject. KOLI is not in the registry.", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-6, R-7, R-8, R-12, R-17], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 pool 0x1d67df0e83b4bfd6366279c55d40e82e7e6df010d90d928fd08c1c9d76481aa4; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood; PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 Initialize fee 8388608 hooks DopplerHookInitializer 0x4e34…a544", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "KOLI/NVDA Uniswap v4 24h volume 1170302.07 USD and reserve_in_usd 45352.52 at 2026-09-03T04:04:00Z (Gecko pool slice, not Gecko token all-pools 1186791.87)", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 44179.83 volume.h24 1168551.64 fdv/marketCap 47163 at 2026-09-03T04:04:00Z", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1164, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66; create-from 0x390A…1aE has no code", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener and koli.top list x.com/KoliAI_; @KoliAI_ bio has no CA this pass; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-13, R-14], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is NVDA 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC; venue is Uniswap v4 PoolManager 0x8366…0951 pool 0x1d67…1aa4", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-4, R-6, R-7, R-8], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty on the token page; mint tx and LaunchCreated name LongLauncher 0x22e9…eeED as the pad, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, koli.top, or X search this pass", class: unknown, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: github.com/calixeth/agentServer in koli.top HTML; docs.koli.top DNS failed this pass; @KoliAI_ is unconfirmed-official", class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 47416.33; DexScreener fdv/marketCap 47163. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC", class: verified, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-6, R-12, R-17], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://www.koli.top — DexScreener info.websites; page reprints CA 0xb8d9…1e18", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-24, field: candidate, value: "koli | KOLI | NULL | https://www.koli.top — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:16:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "ca-collision: Blockscout search KOLI also returns KOLI/KOLIAI 0x55bC…1e18 (7 holders), KOLI/KOLIONE 0xAe38…1E18, koli/koli 0xF88E…39Ca, and several Kolin AI / KOLIN contracts. Site and DexScreener pin 0xb8D9…1e18.", class: verified, observed_at: 2026-09-03T04:12:00Z, receipt_ids: [R-13, R-20], reproduction_ids: [REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko KOLI/NVDA 24h volume $1.17M, liquidity $45.4k"
    summary: "Gecko pool 0x1d67…1aa4 volume_usd.h24 1170302 reserve_in_usd 45353 fdv_usd 47416."
    occurred_at: 2026-09-03T04:04:00Z
    observed_at: 2026-09-03T04:04:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-2
    type: onchain
    title: "LongLauncher create minted KOLI / NVDA"
    summary: "Tx 0xcc8b…ee53 from 0x390A…1aE at 2026-09-01T23:23:36Z; LaunchCreated ticker KOLI; PoolManager Initialize id 0x1d67…1aa4."
    occurred_at: 2026-09-01T23:23:36Z
    observed_at: 2026-09-03T04:12:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-3
    type: ct
    title: "@KoliAI_ posted a fake-token security alert"
    summary: "@KoliAI_ posted that several fake tokens had been launched using the name and to trust only the CA from official channels. That post did not embed 0xb8D9…1e18."
    occurred_at: 2026-09-01T22:14:31Z
    observed_at: 2026-09-03T04:12:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: ct
    title: "@Arya_web3 posted $KOLI on Robinhood Chain"
    summary: "@Arya_web3 posted $KOLI new high and named @KoliAI_ as a Robinhood Chain social AI agent. No contract in the post."
    occurred_at: 2026-09-02T10:45:33Z
    observed_at: 2026-09-03T04:12:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xb8D9…1e18 KOLI / KOLI", url: "https://robinhoodchain.blockscout.com/address/0xb8D9F969dB56bb57353e36Fd0015D98e3A761E18", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xb8D9F969dB56bb57353e36Fd0015D98e3A761E18 name KOLI is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol KOLI decimals 18 total_supply 1000000000000000000000000000 holders_count 1164 type ERC-20. creator_address_hash null creation_transaction_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9. api/v2 smart-contracts name DopplerERC20V1 compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768 creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9. api/v2 smart-contracts file_path src/tokens/DopplerERC20V1Factory.sol compiler v0.8.26 is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0xcc8bc31e…ee53", url: "https://robinhoodchain.blockscout.com/tx/0xcc8bc31eadca1fac5f42f3923ae8df18f519667936b2a70e2ea06b64de29ee53", published_at: 2026-09-01T23:23:36Z, accessed_at: 2026-09-03T04:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-6, CLM-7, CLM-9, CLM-15, CLM-16, EVT-2], excerpt: "timestamp 2026-09-01T23:23:36.000000Z status ok result success block_number 52108211 from 0x390A2D87197b48c983196Da5864e38D23f13a1aE (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data supply 1e27 numeraire 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC tokenFactory 0x1B37D3a72082029c44B35B604Ea473617580b69a. LaunchCreated normalizedTicker KOLI deployedAt 1788305016. PoolManager Initialize id 0x1d67df0e83b4bfd6366279c55d40e82e7e6df010d90d928fd08c1c9d76481aa4 currency0 0xb8D9…1e18 currency1 0xd060…9EEC fee 8388608 hooks 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on KOLI", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32a9538. Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name KOLI symbol KOLI decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl code 13927 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "Airlock getAssetData, NVDA name, related codes", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-7, CLM-8, CLM-13, CLM-15, CLM-21, CLM-22], excerpt: "block 53122733. getAssetData word0 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC; word1/word2 0xdead; word3 0xba2f330edb16cd8056f5988d8ce19bbc63475a0e; word4 0x4e3468951d49f2eea976ed0d6e75ffcb44a9a544; word5 0xb8d9f969db56bb57353e36fd0015d98e3a761e18. NVDA name() NVIDIA • Robinhood Token symbol() NVDA. Factory 1912 B Launcher 5826 B Airlock 5695 B NVDA 283 B PoolManager 24009 B. Create-from 0x390A…1aE code 0x. Airlock owner() 0x21e2ce70…7a66." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens KOLI", url: "https://api.dexscreener.com/latest/dex/tokens/0xb8D9F969dB56bb57353e36Fd0015D98e3A761E18", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-11, CLM-14, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, CLM-25], excerpt: "16 robinhood uniswap pairs. Top pairAddress 0x1d67df0e83b4bfd6366279c55d40e82e7e6df010d90d928fd08c1c9d76481aa4 labels v4 base KOLI / KOLI quote NVIDIA • Robinhood Token / NVDA 0xd0601CE1…9EEC liquidity.usd 44179.83 volume.h24 1168551.64 fdv 47163 marketCap 47163 pairCreatedAt 1788305016000. info.websites https://www.koli.top/ info.socials https://x.com/KoliAI_." }
  - { id: R-8, publisher: GeckoTerminal, title: "KOLI/NVDA Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1d67df0e83b4bfd6366279c55d40e82e7e6df010d90d928fd08c1c9d76481aa4", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name KOLI / NVDA pool_created_at 2026-09-01T23:23:36Z fdv_usd 47416.32784 market_cap_usd null volume_usd.h24 1170302.07041898 reserve_in_usd 45352.5153 transactions.h24 buys 9975 sells 10800. dex bankr-robinhood quote robinhood_0xd0601ce157db5bdc3162bbac2a2c8af5320d9eec." }
  - { id: R-9, publisher: GeckoTerminal, title: "KOLI token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xb8D9F969dB56bb57353e36Fd0015D98e3A761E18", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name KOLI symbol KOLI decimals 18 total_supply 1e27 price_usd 0.00004734040298 fdv_usd 47340.4029803472 market_cap_usd null volume_usd.h24 1186791.86613965 total_reserve_in_usd 33442.95. coingecko_coin_id null. Top pool 0x1d67…1aa4." }
  - { id: R-10, publisher: GeckoTerminal, title: "KOLI token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xb8D9F969dB56bb57353e36Fd0015D98e3A761E18/info", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "websites [] twitter_handle null telegram_handle null description null gt_verified false gt_score 43.68 holders.count 1182 last_updated 2026-09-02T17:44:59Z." }
  - { id: R-11, publisher: GeckoTerminal, title: "KOLI/NVDA pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x1d67df0e83b4bfd6366279c55d40e82e7e6df010d90d928fd08c1c9d76481aa4", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "Direct GET of the Gecko HTML pool page was not required; API pool name KOLI / NVDA dex bankr-robinhood." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-21, CLM-25], excerpt: "HTTP 200. assets length 194. One NVDA hit: tokenSymbol NVDA tokenName NVIDIA • Robinhood Token tokenDecimals 18 status ASSET_STATUS_ACTIVE deployments contractAddress 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC chainId 4663 networkName Robinhood Chain. Zero KOLI hits." }
  - { id: R-13, publisher: koli.top, title: "KOLI site reprints CA", url: "https://www.koli.top/", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-14, CLM-19, CLM-23, CLM-26, EVT-3], excerpt: "HTTP 200. Title KOLI - The world's first AI companion for crypto KOLs. Body CA：0xb8d9f969db56bb57353e36fd0015d98e3a761e18. HTML also contains x.com/KoliAI_ and github.com/calixeth/agentServer. Powered By Robinhood CHAIN. No t.me URL this pass." }
  - { id: R-14, publisher: "@KoliAI_", title: "Security Alert fake tokens", url: "https://x.com/KoliAI_/status/2094911810982044159", published_at: 2026-09-01T22:14:31Z, accessed_at: 2026-09-03T04:12:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-14, CLM-19, EVT-3], excerpt: "Author @KoliAI_ display KOLI AI bio The First Personified AI Cloning Platform in Web3, On-Chain Value × 24/7 Presence, 897 followers. Text: Recently, several fake tokens and scam projects have been launched using our name. Please stay vigilant and only trust the CA published through our official channels. #KOLI $KOLI. No 0xb8D9…1e18 in the post. Other Latest posts link https://www.koli.top/agent and https://www.koli.top/workspace." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true. api/v2 smart-contracts name LongLauncher file_path src/LongLauncher.sol compiler v0.8.26+commit.8a97fa7a is_partially_verified false verified_at 2026-07-14T11:23:57Z." }
  - { id: R-16, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true." }
  - { id: R-17, publisher: Blockscout, title: "Token 0xd060…9EEC NVIDIA • Robinhood Token / NVDA", url: "https://robinhoodchain.blockscout.com/address/0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC", published_at: null, accessed_at: 2026-09-03T04:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-21], excerpt: "hash 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name NVIDIA • Robinhood Token symbol NVDA decimals 18 holders_count 91941 icon_url cdn.robinhood.com/ncw_assets/logos/0xd0601ce1….png." }
  - { id: R-18, publisher: Blockscout, title: "Mint transfer from 0x0 on KOLI", url: "https://robinhoodchain.blockscout.com/tx/0xcc8bc31eadca1fac5f42f3923ae8df18f519667936b2a70e2ea06b64de29ee53", published_at: 2026-09-01T23:23:36Z, accessed_at: 2026-09-03T04:12:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, EVT-2], excerpt: "GET /api/v2/addresses/0x000…000/token-transfers?token=0xb8D9…1e18 returned one ERC-20 mint at 2026-09-01T23:23:36Z tx 0xcc8bc31e…ee53 method 0x882db707 to Airlock 0xeb7C…0862 value 1000000000000000000000000000 block 52108211." }
  - { id: R-19, publisher: DexScreener, title: "Search RIPE NVDA and KOLI", url: "https://api.dexscreener.com/latest/dex/search?q=RIPE%20NVDA", published_at: null, accessed_at: 2026-09-03T04:10:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7], excerpt: "Robinhood RIPE/NVDA Uniswap v2 0x9b8537bE0FD5cf9B2AD495C5A85130D5bAe4769D base Ripe DAO Governance Token / RIPE 0x4D3f37a965b21aB4122e92Dd41D2693E742c883b quote NVDA 0xd060…9EEC websites ripe.finance socials x.com/ripe_dao. Same search page also lists AI/NVDA 0x2E8c…1e18, microduck/NVDA 0xD5f1…E725, ORBIO/NVDA 0xAa07…28A3. KOLI search top row is 0xb8D9…1e18 / 0x1d67…1aa4." }
  - { id: R-20, publisher: Blockscout, title: "Search q=KOLI ticker collisions", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=KOLI", published_at: null, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-26], excerpt: "22 items. token KOLI/KOLI 0xb8D9F969dB56bb57353e36Fd0015D98e3A761E18. Also KOLI/KOLIAI 0x55bC97C1cE184F2016F8ac36D94791AED6591e18 holders_count 7; KOLI/KOLIONE 0xAe38D3b9bd164a84E78DedF6b8059aC8E0791E18; koli/koli 0xF88E032Dce4AC18Edded4b8b9d24c55eF7e539Ca; several Kolin AI / KOLIN addresses." }
  - { id: R-21, publisher: "@Arya_web3", title: "$KOLI 新高了", url: "https://x.com/Arya_web3/status/2095100811730678260", published_at: 2026-09-02T10:45:33Z, accessed_at: 2026-09-03T04:12:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "$KOLI 新高了. Names @KoliAI_ as a Robinhood Chain social AI agent. No contract address in the post." }

gaps:
  - { priority: P0, question: "Does @KoliAI_ later pin CA 0xb8D9…1e18 in the bio or a post, making the handle bidirectional?", checked: "DexScreener and koli.top list x.com/KoliAI_; bio has no CA; Latest from:KoliAI_ 0xb8d9 query returned no CA-bearing post; security-alert post told readers to trust official-channel CAs without embedding one, 2026-09-03", next: "re-read the @KoliAI_ profile website field and any post that embeds 0xb8D9…1e18" }
  - { priority: P0, question: "Should KOLI/KOLIAI 0x55bC…1e18 or KOLIONE 0xAe38…1E18 get their own packets?", checked: "Blockscout search listed them; KOLIAI holders_count 7; DexScreener latest/dex/tokens 0x55bC…1e18 returned 0 pairs this pass, 2026-09-03", next: "only if an assignment names those CAs; keep this packet on 0xb8D9…1e18" }
  - { priority: P1, question: "Does verified LongLauncher / Airlock source leave a privileged path after owner() is Airlock?", checked: "token owner() Airlock; Airlock owner() 0x21e2…7a66; getAssetData LP slots include 0xdead; create-tx Lock log on DopplerHookInitializer; create-from EOA has no code, 2026-09-03", next: "read Lock beneficiaries and any LongFeeVaultFactory deployVault for this token" }
  - { priority: P1, question: "Does docs.koli.top resolve and pin this CA?", checked: "docs.koli.top DNS failed this pass; www.koli.top reprints the CA, 2026-09-03", next: "retry docs.koli.top and search the HTML for 0xb8d9" }
  - { priority: P2, question: "Which Gecko vs DexScreener window explains reserve 45352 vs liquidity 44180 on the same pool?", checked: "Live Gecko pool reserve_in_usd 45352.52 volume 1170302; DexScreener liquidity.usd 44179.83 volume.h24 1168551; Gecko token total_reserve_in_usd 33442.95 (all pools), 2026-09-03", next: "treat the pool slice as canonical; do not mix token all-pools reserve" }
---

# KOLI — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against NVIDIA • Robinhood Token (NVDA). LongLauncher.create on 2026-09-01 minted KOLI and seeded the KOLI/NVDA book. Traders buy and sell KOLI against NVDA. NVDA is the quote rail, not the subject. www.koli.top reprints this CA. No official handle was confirmed this pass.

Themes: memecoin, stock-paired:NVDA, rwa

## Why it matters

The KOLI/NVDA Uniswap v4 book printed about $1.17M of 24h volume on Gecko at collection, with DexScreener on the same pair near $1.17M volume and ~$44k liquidity. That is a live NVDA-quoted graduation, distinct from packed $AI, microduck, ORBIO, and RIPE on the same rail. GET /rhj/assets lists NVDA at 0xd060…9EEC and has no KOLI row.

## What could go wrong

USD liquidity figures on the KOLI/NVDA book count both sides, and the quote side is NVDA, not USDG. Gecko reserve and DexScreener liquidity disagree slightly on the same pool. Same-name KOLI tickers exist on 4663 (KOLIAI, KOLIONE, lowercase koli). @KoliAI_ is listed on the site and DexScreener but did not pin this CA this pass.

## Product and mechanics

DopplerERC20V1Factory 0x1B37…b69a clones DopplerERC20V1 via EIP-1167. LongLauncher.create from 0x390A…1aE at 2026-09-01T23:23:36Z minted KOLI / KOLI supply 1e9*1e18 into Uniswap v4 poolId 0x1d67…1aa4 quoted against NVDA 0xd060…9EEC. factory() on the token reverts; owner() is Airlock 0xeb7C…0862. [verified R-4 R-5 R-6]

Airlock getAssetData numeraire is that NVDA; LP slots include 0xdead. PoolManager is 0x8366…0951. LaunchCreated normalizedTicker KOLI. Secondary KOLI/USDG and KOLI/ETH books exist on DexScreener with far less liquidity than the NVDA book. [verified R-1 R-6 R-7]

## Control and security

token owner() is Airlock. Airlock owner() is 0x21e2…7a66. Create-tx from 0x390A…1aE has no code. Create-tx emitted Lock on DopplerHookInitializer 0x4e34…a544. [verified R-4 R-5 R-6]

DopplerERC20V1 and DopplerERC20V1Factory are partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, src/tokens/DopplerERC20V1Factory.sol, compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The token page is a verified EIP-1167 shell only. No audit report URL was located this pass. [verified R-2 R-3 R-15] [unknown]

## Team and provenance

No official handle was confirmed. DexScreener info.websites is https://www.koli.top/ and info.socials is https://x.com/KoliAI_. The site reprints CA 0xb8d9…1e18 and contains x.com/KoliAI_. @KoliAI_ bio has no CA; Latest posts link koli.top paths and a 1 Sep security-alert post told readers to trust official-channel CAs without embedding 0xb8D9…1e18. Flag unconfirmed-official. github.com/calixeth/agentServer in the site HTML is a third-party-link. [claim R-7 R-13 R-14]

Site copy describes an AI KOL-clone product on Robinhood Chain. That product claim was not reproduced on-chain beyond the token and pool. [claim R-13]

## Economics and activity

KOLI/NVDA Uniswap v4 24h volume is 1170302.07 USD and reserve_in_usd is 45352.52 at 2026-09-03T04:04:00Z from the Gecko pool endpoint. fdv_usd is 47416.33. Gecko token volume_usd.h24 is 1186791.87 across all pools, not the NVDA book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 44179.83, volume.h24 1168551.64, fdv/marketCap 47163 at 2026-09-03T04:04:00Z. Blockscout holders_count 1164. Pair created 2026-09-01T23:23:36Z. [claim R-1 R-7]

Gecko dex id is bankr-robinhood; DexScreener dexId is uniswap v4. Creation path is LongLauncher.create. [claim R-1 R-4 R-8]

## Material risks

- Quote token NVDA 0xd060…9EEC is the Robinhood Stock Token rail in GET /rhj/assets; KOLI is not. [verified R-12 R-17]
- Pool USD reserve is KOLI plus NVDA, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko reserve 45352.52 vs DexScreener liquidity 44179.83 on the same pool. [claim R-7 R-8]
- Same-name KOLI tickers on 4663 (KOLIAI 0x55bC…1e18, KOLIONE, lowercase koli). Flag ca-collision. [verified R-20]
- No official handle confirmed this pass; github.com/calixeth/agentServer is a third-party-link. [claim R-13 R-14]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/NVDA and the create tx, RPC name/symbol/owner/getAssetData, DexScreener token + RIPE search, Gecko pool/token/info, /rhj/assets, koli.top, @KoliAI_ profile and posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-5 R-8 R-12 R-13]
- Numbers: 1170302.07 is the Gecko KOLI/NVDA pool 24h volume, not the 1186791.87 token all-pools figure. Reserve 45352.52 is that pool. DexScreener 1168551.64 / 44179.83 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this is packed $AI, microduck, ORBIO, or RIPE, or the NVDA stock token. $AI is 0x2E8c…1e18; microduck is 0xD5f1…E725; ORBIO is 0xAa07…28A3; RIPE is 0x4D3f…883b Uniswap v2; NVDA in /rhj/assets is the quote rail 0xd060…9EEC; this CA is 0xb8D9…1e18 / pool 0x1d67…1aa4. [inference R-4 R-12 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no koli / KOLI / 0xb8D9…1e18.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, Airlock, NVDA, search q=KOLI, mint-from-zero transfers, create tx 0xcc8bc31e…ee53, LaunchCreated / Initialize logs, holders. RPC eth_getCode/eth_call at blocks 53122733–0x32a9538.
- Aggregators: DexScreener latest/dex/tokens and search KOLI / RIPE NVDA; Gecko token, pool, token/info.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 NVDA, 0 KOLI.
- Social: X user search KoliAI_; from:KoliAI_ Latest; keyword KOLI/NVDA; www.koli.top HTML; docs.koli.top DNS failed.
- Failed: Blockscout token creator_address_hash null (mint tx / LaunchCreated used instead); factory() reverts; docs.koli.top DNS; from:KoliAI_ CA query returned no post that embeds 0xb8D9…1e18; Gecko token info websites [].
- Time: collection 2026-09-03T04:04Z–2026-09-03T04:16Z.
