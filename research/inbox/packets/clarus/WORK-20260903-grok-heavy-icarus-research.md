---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: clarus
name: CLARUS
packet_tier: seed
as_of: 2026-09-03T05:28:00Z
prior_packet: null
supersedes: null
owned_slugs: [clarus]
allowed_paths:
  - research/inbox/packets/clarus/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: The Dogcow
  aliases: [CLARUS, Clarus, Dogcow]
  symbols: [CLARUS]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://clarus.lol
  official_handle: "@Clarus_rh"
  repository: "NULL — no GitHub org or repository URL on clarus.lol, DexScreener, Gecko, Blockscout, or the @Clarus_rh profile this pass"
  possible_matches:
    - slug: ap
      signals: [shared-address]
      contrary_signals:
        - "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 is the Apple • Robinhood Token the pair is quoted in; it is the census AP row, not a contract this name deployed"
        - "The Dogcow is the token launched against that quote asset; the two share no handle or domain"
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "CLARUS is the ERC-20 at 0x22ea9497…1e18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; @Clarus_rh is not @longdotxyz"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the CLARUS/AAPL pool dex bankr-robinhood, the same dex id it uses for other Doppler Uniswap v4 books"
        - "Creation tx 0xd9caa24c…e713 calls LongLauncher.create, not a Bankr agent launch"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "CLARUS is 0x22ea9497…1e18 paired to AAPL 0xaF3D…93f9"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x22ea9497…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; LongLauncher.create at 2026-08-28T03:16:38Z minted The Dogcow / CLARUS into Uniswap v4 pool 0xc0eb…1841 quoted against Apple • Robinhood Token AAPL 0xaF3D…93f9. AAPL is the quote rail (GET /rhj/assets). clarus.lol and @Clarus_rh pin this CA. Distinct from packed ICOIN 0x5d6EF…1e18, AP/AAPL 0x69c68e4C…1E18, packed AAPLCAT 0x73A9999f…1e18, packed AAPLDOG 0x06e52E5f…1e18, packed JOBS 0x88952E52…6453, and packed Appleseed 0xF8b22322…B0e3. [R-1] [R-2] [R-4] [R-5] [R-6] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-4, CLM-5, CLM-20], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-12], note: "" }

links:
  - { kind: site, url: "https://clarus.lol", authenticity: confirmed }
  - { kind: x, url: "https://x.com/Clarus_rh", authenticity: confirmed }
  - { kind: app, url: "https://app.uniswap.org/swap?outputCurrency=0x22ea949763dB855880264A8FB689E07021661e18&chain=robinhood", authenticity: unconfirmed }
  - { kind: other, url: "https://512pixels.net/dogcow/", authenticity: unconfirmed }

deployments:
  - label: CLARUS token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x22ea949763dB855880264A8FB689E07021661e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
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
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-14]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6]
  - label: Airlock (token owner)
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:24:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6]

metrics:
  - { kind: volume_24h, value: 203407.04, currency: USD, as_of: 2026-09-03T05:22:53Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc0ebbeede3977751f06e4fffb384699dbb3cba55ec10507b42959f8df02c1841 volume_usd.h24", class: claim, receipt_ids: [R-2] }
  - { kind: tvl, value: 165931.65, currency: USD, as_of: 2026-09-03T05:22:53Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc0eb…1841 reserve_in_usd (CLARUS/AAPL pool, not an all-pools figure)", class: claim, receipt_ids: [R-2] }
  - { kind: market_cap, value: 378929.60, currency: USD, as_of: 2026-09-03T05:22:53Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc0eb…1841 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-2] }
  - { kind: volume_24h, value: 191327.37, currency: USD, as_of: 2026-09-03T05:22:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x22ea9497…1e18 pair 0xc0eb…1841 CLARUS/AAPL Uniswap v4 volume.h24", class: claim, receipt_ids: [R-1] }
  - { kind: tvl, value: 167560.59, currency: USD, as_of: 2026-09-03T05:22:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x22ea9497…1e18 pair 0xc0eb…1841 liquidity.usd", class: claim, receipt_ids: [R-1] }
  - { kind: market_cap, value: 386981, currency: USD, as_of: 2026-09-03T05:22:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x22ea9497…1e18 pair 0xc0eb…1841 fdv/marketCap", class: claim, receipt_ids: [R-1] }
  - { kind: holders, value: 569, currency: null, as_of: 2026-09-03T05:23:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x22ea9497…1e18 holders_count", class: claim, receipt_ids: [R-4] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:24:00Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com block 0x32b4830 (53168176) then 0x32b4974 (53168500). Token 0x22ea9497…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599; name() The Dogcow; symbol() CLARUS; decimals 18; totalSupply 1e27; owner() Airlock 0xeb7c0347…0862; factory() reverted. AAPL 0xaF3D…93f9 eth_getCode 283 bytes name() Apple • Robinhood Token symbol() AAPL. Deployer 0xBEE017…0A47 eth_getCode empty. Factory code 1912 B; impl 13927 B; LongLauncher 5826 B; Airlock 5695 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:23:00Z, receipt_ids: [R-4, R-5, R-13, R-14], result: "Blockscout api/v2 token 0x22ea9497…1e18 name The Dogcow is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 creator 0x1B37…b69a creation tx 0xd9caa24c…e713; token name The Dogcow symbol CLARUS holders_count 569 total_supply 1e27 counters transfers_count 35841. Tx timestamp 2026-08-28T03:16:38Z block 47970843 from 0xBEE017…0A47 (is_contract false) to LongLauncher method create; decoded numeraire 0xaF3D…93f9 tokenFactory 0x1B37…b69a supply 1e27. LaunchCreated normalizedTicker CLARUS pool id 0xc0eb…1841. DopplerERC20V1 compiler v0.8.26 file_path src/tokens/DopplerERC20V1.sol is_partially_verified true." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T05:22:53Z, receipt_ids: [R-1, R-2, R-3], result: "DexScreener latest/dex/tokens/0x22ea9497…1e18 n=3 robinhood uniswap v4 pairs; top CLARUS/AAPL 0xc0eb…1841 liquidity.usd 167560.59 volume.h24 191327.37 fdv 386981 pairCreatedAt 1787886998000 (2026-08-28T03:16:38Z) info.websites clarus.lol plus 512pixels.net/dogcow/ socials x.com/clarus_rh. Gecko pool same address name CLARUS / AAPL dex bankr-robinhood volume_usd.h24 203407.039313374 reserve_in_usd 165931.6478 fdv_usd 378929.6034 pool_created_at 2026-08-28T03:16:38Z market_cap_usd null. Gecko token volume_usd.h24 232242.585723226 (all pools)." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T05:24:19Z, receipt_ids: [R-1, R-7, R-8, R-9], result: "clarus.lol title CLARUS THE DOGCOW; body CA: 0x22ea949763db855880264a8fb689e07021661e18; hero link https://x.com/clarus_rh. @Clarus_rh bio Official mascot of the classic mac os era CA 0x22ea949763dB855880264A8FB689E07021661e18. DexScreener socials twitter https://x.com/clarus_rh websites https://clarus.lol." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:24:00Z, receipt_ids: [R-6, R-12], result: "Airlock 0xeb7C…0862 getAssetData(0x22ea9497…1e18) word0 numeraire 0xaF3D76f1…93f9; word5 token 0x22ea9497…1e18; word1/word2 0xdead; Airlock owner() 0x21e2ce70…7a66. GET api.robinhood.com/rhj/assets HTTP 200 assets length 194; AAPL tokenName Apple • Robinhood Token deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "DopplerERC20V1 EIP-1167 clone; LongLauncher.create minted 1e9*1e18 The Dogcow/CLARUS into a Uniswap v4 pool quoted against AAPL 0xaF3D…93f9; Airlock getAssetData numeraire is that AAPL; LP addresses in getAssetData include 0xdead", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "The Dogcow", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: CLARUS, class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: identity.handle, value: "@Clarus_rh", class: verified, observed_at: 2026-09-03T05:24:19Z, receipt_ids: [R-1, R-7, R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22ea949763dB855880264A8FB689E07021661e18", class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-4, R-5, R-6, R-7], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad LONG: tx 0xd9caa24c…e713 from EOA 0xBEE017…0A47 called LongLauncher.create; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; owner() Airlock 0xeb7C…0862. Distinct from census LONG (the factory) and from packed ICOIN 0x5d6EF…1e18, AP 0x69c68e4C…1E18, AAPLCAT 0x73A9999f…1e18, AAPLDOG 0x06e52E5f…1e18, JOBS 0x88952E52…6453, Appleseed 0xF8b22322…B0e3.", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset is Apple • Robinhood Token AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9; AAPL is the quote rail (GET /rhj/assets 194 assets, one AAPL row, same address chainId 4663)", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1, R-2, R-6, R-12, R-13], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v4 pool 0xc0ebbeede3977751f06e4fffb384699dbb3cba55ec10507b42959f8df02c1841; DexScreener dexId uniswap labels v4; Gecko dex bankr-robinhood", class: verified, observed_at: 2026-09-03T05:22:53Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [R-1, R-2, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko CLARUS/AAPL pool 0xc0eb…1841 volume_usd.h24 203407.039313374 reserve_in_usd 165931.6478 fdv_usd 378929.6034 at 2026-09-03T05:22:53Z (pool slice, not Gecko token all-pools 232242.585723226)", class: verified, observed_at: 2026-09-03T05:22:53Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener same pair liquidity.usd 167560.59 volume.h24 191327.37 fdv/marketCap 386981 at 2026-09-03T05:22:00Z", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 569, class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66; create-tx from EOA 0xBEE01790909bA508Ac5C3910ceC69D493c580A47 (no code). Lock beneficiaries 5% 0x21E2…7A66 / 95% the same deployer.", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on clarus.lol, DexScreener, the @Clarus_rh profile, or Blockscout this pass", class: unknown, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@Clarus_rh.role", value: project, class: claim, observed_at: 2026-09-03T05:24:19Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@Clarus_rh.slug", value: clarus, class: claim, observed_at: 2026-09-03T05:24:19Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@Clarus_rh.flag", value: handle-collision, class: claim, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.domain, value: "https://clarus.lol", class: verified, observed_at: 2026-09-03T05:24:19Z, receipt_ids: [R-1, R-7, R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:23:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: relationship, value: "Gecko dex id bankr-robinhood on the CLARUS/AAPL pool; DexScreener dexId uniswap v4; creation path is LongLauncher.create. Do not merge CLARUS into census bankr.", class: verified, observed_at: 2026-09-03T05:22:53Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-23, field: candidate, value: "clarus | CLARUS | @Clarus_rh | https://clarus.lol — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [R-1, R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "@Clarus_rh 2026-09-01T23:30:56Z posted buy on @RobinhoodCrypto on @longdotxyz; 2026-09-02T21:58:35Z posted Everytime you buy me your buying apple stock. Bio pins CA 0x22ea9497…1e18.", class: claim, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-8, R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@Clarus_rh.flag", value: third-party-link, class: claim, observed_at: 2026-09-03T05:24:19Z, receipt_ids: [R-1, R-15], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13]
    material_effect: "Same CLARUS/AAPL pool 0xc0eb…1841: Gecko reserve_in_usd 165931.65 vs DexScreener liquidity.usd 167560.59; 24h volume 203407.04 vs 191327.37; fdv 378929.60 vs 386981. A card that collapses them would misstate the book."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "LongLauncher.create minted CLARUS against AAPL"
    summary: "Tx 0xd9caa24c…e713 from 0xBEE017…0A47 called LongLauncher.create; The Dogcow 0x22ea9497…1e18 and Uniswap v4 pool 0xc0eb…1841 at block 47970843."
    occurred_at: 2026-08-28T03:16:38Z
    observed_at: 2026-09-03T05:23:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
  - id: EVT-2
    type: company
    title: "@Clarus_rh posted buy on Robinhood Crypto via LONG"
    summary: "@Clarus_rh posted You can't buy me at the apple store but you can buy me on @RobinhoodCrypto on @longdotxyz. Bio pins CA 0x22ea9497…1e18."
    occurred_at: 2026-09-01T23:30:56Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [identity.handle, communications.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-3
    type: company
    title: "@Clarus_rh posted buying CLARUS buys Apple stock"
    summary: "@Clarus_rh posted Everytime you buy me your buying apple stock."
    occurred_at: 2026-09-02T21:58:35Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [communications.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-4
    type: ct
    title: "@trenchfundbot posted CLARUS CA vs AAPL"
    summary: "@trenchfundbot posted clarus the dogcow, apple lore, trading against aapl; ca 0x22ea949763db855880264a8fb689e07021661e18."
    occurred_at: 2026-09-02T11:51:59Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [activity.status, deployment.address]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: onchain
    title: "Gecko CLARUS/AAPL 24h volume $203k, liquidity $166k"
    summary: "Gecko pool 0xc0eb…1841 volume_usd.h24 203407 reserve_in_usd 165932 fdv_usd 378930."
    occurred_at: 2026-09-03T05:22:53Z
    observed_at: 2026-09-03T05:22:53Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-2]
  - id: EVT-6
    type: ct
    title: "@medonchain posted CLARUS as an AAPL runner"
    summary: "@medonchain posted i haven't seen an $AAPL runner yet; $CLARUS 0x22ea9497…1e18. @cryptostasher quoted it with watchlist $CLARUS $ICOIN."
    occurred_at: 2026-08-31T13:19:06Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]

receipts:
  - { id: R-1, publisher: DexScreener, title: "CLARUS token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x22ea949763dB855880264A8FB689E07021661e18", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-13, CLM-20, CLM-22, CLM-23, CLM-26], excerpt: "n=3 robinhood uniswap v4 pairs. Top pairAddress 0xc0ebbeede3977751f06e4fffb384699dbb3cba55ec10507b42959f8df02c1841 labels v4 base The Dogcow / CLARUS 0x22ea9497…1e18 quote Apple • Robinhood Token / AAPL 0xaF3D…93f9 liquidity.usd 167560.59 volume.h24 191327.37 fdv 386981 marketCap 386981 pairCreatedAt 1787886998000. websites clarus.lol and 512pixels.net/dogcow/; socials x.com/clarus_rh." }
  - { id: R-2, publisher: GeckoTerminal, title: "CLARUS/AAPL pool on Bankr (Robinhood)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc0ebbeede3977751f06e4fffb384699dbb3cba55ec10507b42959f8df02c1841", published_at: null, accessed_at: 2026-09-03T05:22:53Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-12, CLM-22, EVT-5], excerpt: "attributes.name CLARUS / AAPL address 0xc0ebbeede3977751f06e4fffb384699dbb3cba55ec10507b42959f8df02c1841 pool_created_at 2026-08-28T03:16:38Z volume_usd.h24 203407.039313374 reserve_in_usd 165931.6478 fdv_usd 378929.6034 market_cap_usd null. relationships.dex.id bankr-robinhood. base robinhood_0x22ea9497…1e18 quote robinhood_0xaf3d76f1…93f9." }
  - { id: R-3, publisher: GeckoTerminal, title: "The Dogcow token on Robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x22ea949763dB855880264A8FB689E07021661e18", published_at: null, accessed_at: 2026-09-03T05:22:53Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12], excerpt: "attributes.address 0x22ea949763db855880264a8fb689e07021661e18 name The Dogcow symbol CLARUS decimals 18 total_supply 1e27 normalized_total_supply 1000000000.0 volume_usd.h24 232242.585723226 fdv_usd 378929.60342626 market_cap_usd null total_reserve_in_usd 92871.08. top_pools first robinhood_0xc0eb…1841. HTTP 200." }
  - { id: R-4, publisher: Blockscout, title: "CLARUS 0x22ea949763dB855880264A8FB689E07021661e18", url: "https://robinhoodchain.blockscout.com/address/0x22ea949763dB855880264A8FB689E07021661e18", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-5, CLM-6, CLM-7, CLM-11, CLM-14, CLM-21, CLM-23, EVT-1], excerpt: "api/v2 Chrome UA: hash 0x22ea949763dB855880264A8FB689E07021661e18 name The Dogcow is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xd9caa24c8e617f12b961f56abdb3a1ae0f9c09dcb205839483cf807a6978e713 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97F…C599. token symbol CLARUS holders_count 569 total_supply 1e27." }
  - { id: R-5, publisher: Blockscout, title: "CLARUS creation tx 0xd9caa24c…", url: "https://robinhoodchain.blockscout.com/tx/0xd9caa24c8e617f12b961f56abdb3a1ae0f9c09dcb205839483cf807a6978e713", published_at: 2026-08-28T03:16:38Z, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-15, CLM-24, EVT-1], excerpt: "timestamp 2026-08-28T03:16:38.000000Z status ok block_number 47970843 from 0xBEE01790909bA508Ac5C3910ceC69D493c580A47 to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded numeraire 0xaF3D…93f9 tokenFactory 0x1B37…b69a supply 1e27. LaunchCreated normalizedTicker CLARUS. PoolManager Initialize id 0xc0eb…1841 currency1 AAPL." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode and ERC-20 / Airlock calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-8, CLM-15, CLM-21], excerpt: "eth_blockNumber 0x32b4830 (53168176) then 0x32b4974 (53168500). token eth_getCode 44 bytes clone of 0x3be8b97f…c599. name() The Dogcow symbol() CLARUS decimals 18 totalSupply 1e27 owner() 0xeb7c0347…0862 factory() revert. Airlock owner() 0x21e2ce70…7a66 getAssetData numeraire 0xaf3d76f1…93f9 token 0x22ea9497…1e18. AAPL name Apple • Robinhood Token. Deployer code empty." }
  - { id: R-7, publisher: CLARUS, title: "clarus.lol shrine", url: "https://clarus.lol", published_at: 2026-09-01T19:52:54Z, accessed_at: 2026-09-03T05:24:19Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-17, CLM-18, CLM-20, CLM-23], excerpt: "HTTP 200. title CLARUS THE DOGCOW. meta description Clarus the dogcow Moof! og:url https://clarus.lol/. Body: CA: 0x22ea949763db855880264a8fb689e07021661e18. hero-links href https://x.com/clarus_rh. Uniswap swap outputCurrency that CA chain=robinhood. Last-Modified Tue, 01 Sep 2026 19:52:54 GMT." }
  - { id: R-8, publisher: "@Clarus_rh", title: "Clarus The Dogcow profile", url: "https://x.com/Clarus_rh", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-17, CLM-18, CLM-20, CLM-25], excerpt: "Display name Clarus The Dogcow, handle @Clarus_rh, bio Official mascot of the classic mac os era CA 0x22ea949763dB855880264A8FB689E07021661e18. 81 followers. Blue verified." }
  - { id: R-9, publisher: "@Clarus_rh", title: "Buy on Robinhood Crypto via LONG", url: "https://x.com/Clarus_rh/status/2094931038044832025", published_at: 2026-09-01T23:30:56Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-17, CLM-18, CLM-25, EVT-2], excerpt: "You can't buy me at the apple store but you can buy me on @RobinhoodCrypto on @longdotxyz" }
  - { id: R-10, publisher: "@Clarus_rh", title: "Everytime you buy me your buying apple stock", url: "https://x.com/Clarus_rh/status/2095270188417753502", published_at: 2026-09-02T21:58:35Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-25, EVT-3], excerpt: "Everytime you buy me your buying apple stock" }
  - { id: R-11, publisher: "@trenchfundbot", title: "$clarus CA vs AAPL", url: "https://x.com/trenchfundbot/status/2095117530763256220", published_at: 2026-09-02T11:51:59Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "$clarus clarus the dogcow. the 1983 print dialog mascot, apple lore most people forgot, now trading against aapl on the same chain. ca: 0x22ea949763db855880264a8fb689e07021661e18" }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-10], excerpt: "HTTP 200. assets length 194. One AAPL hit: tokenSymbol AAPL tokenName Apple • Robinhood Token. deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663 networkName Robinhood Chain." }
  - { id: R-13, publisher: Blockscout, title: "AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", url: "https://robinhoodchain.blockscout.com/token/0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "api/v2/tokens: address_hash 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 name Apple • Robinhood Token symbol AAPL decimals 18 holders_count 61473 total_supply 14624363359480000000000." }
  - { id: R-14, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T05:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "api/v2 smart-contracts: name DopplerERC20V1 compiler_version v0.8.26+commit.8a97fa7a is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. Address is_contract true creator 0x1B37…b69a." }
  - { id: R-15, publisher: "512 Pixels", title: "The History of Clarus the Dogcow", url: "https://512pixels.net/dogcow/", published_at: null, accessed_at: 2026-09-03T05:24:19Z, kind: news, authority: independent, authenticity: confirmed, supports: [CLM-26], excerpt: "HTTP 200. title The History of Clarus the Dogcow - 512 Pixels. Author Stephen Hackett. No 0x contract address in the HTML this pass. DexScreener lists this URL as label thesis on the CLARUS token profile." }
  - { id: R-16, publisher: "@ClarusRH", title: "Clarus the Dogcow profile (other CA)", url: "https://x.com/ClarusRH", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "Display name Clarus the Dogcow, handle @ClarusRH, bio Clarus The Dogcow | The first @apple Mascot built in 1989 | Ask Siri? Naw, Ask Moof. 0x4Aceeee0dE27F0CaD2b64dDE16027F94faE47777. 424 followers. CA is not 0x22ea9497…1e18. Flag handle-collision." }
  - { id: R-17, publisher: "@medonchain", title: "AAPL runner / $CLARUS CA", url: "https://x.com/medonchain/status/2094414678424179182", published_at: 2026-08-31T13:19:06Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "i haven't seen an $AAPL runner yet and appl is arguably one of the biggest and most influential companies in the world. september they release the new iphones aswell, normie could type clarus and find the lore. $CLARUS 0x22ea949763dB855880264A8FB689E07021661e18" }

gaps:
  - { priority: P1, question: "Are same-name CLARUS/AAPL clones 0x36bcb89E…1e18 and 0x232DC489…1e18 still live books, and does any official surface link them?", checked: "DexScreener search CLARUS AAPL returned those two extra robinhood Uniswap v4 books at ~$19k liq each; clarus.lol and @Clarus_rh pin only 0x22ea9497…1e18, 2026-09-03", next: "read each clone create tx and see whether any later official post names them" }
  - { priority: P1, question: "What chain is @ClarusRH bio CA 0x4Aceeee0…7777 on, and does that handle ever claim the 4663 token?", checked: "X user search Clarus the Dogcow returned @ClarusRH with that CA; not the 0x22ea9497…1e18 token; flag handle-collision, 2026-09-03", next: "open that CA on explorers and record chain_scope if a later assignment needs a collision row" }
  - { priority: P1, question: "Does verified DopplerERC20V1 / Airlock leave a privileged path beyond owner() Airlock?", checked: "owner() Airlock; Airlock owner() 0x21E2…7A66; create-tx Lock beneficiaries 5/95; factory() reverts, 2026-09-03", next: "read Airlock and DopplerHookInitializer source on the explorer for fee and LP-lock setters" }
  - { priority: P2, question: "Is there an audit report?", checked: "clarus.lol, DexScreener profile, @Clarus_rh, Blockscout token/impl pages, 2026-09-03", next: "ask in public if a report is published and record the URL as a claim" }
---

# CLARUS — research packet

## What it is

A one-billion-supply ERC-20 cloned by DopplerERC20V1Factory into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). LongLauncher.create on 2026-08-28 minted The Dogcow (CLARUS) and seeded the CLARUS/AAPL book. Traders buy and sell CLARUS against AAPL. AAPL is the quote rail. clarus.lol and @Clarus_rh pin this contract.

Themes: memecoin, stock-paired:AAPL, rwa

## Why it matters

The CLARUS/AAPL Uniswap v4 book printed about $203k of 24h volume on Gecko at collection, with ~$166k pool reserve, against the Apple Stock Token rather than USDG. @Clarus_rh posted that buying the token is buying Apple stock and pointed traders to @RobinhoodCrypto via @longdotxyz. Distinct from packed ICOIN, AP, AAPLCAT, AAPLDOG, JOBS, and Appleseed, which are other AAPL-quoted names.

## What could go wrong

USD liquidity on the CLARUS/AAPL book counts both CLARUS and AAPL. Gecko reserve and DexScreener liquidity for the same pool differ this pass. Token owner() is Airlock. Two other robinhood books also name The Dogcow / CLARUS against AAPL at other addresses. @ClarusRH is a different handle with a different CA.

## Product and mechanics

LongLauncher.create from EOA 0xBEE017…0A47 at 2026-08-28T03:16:38Z cloned DopplerERC20V1 as The Dogcow / CLARUS, supply 1e9*1e18, numeraire AAPL 0xaF3D…93f9, tokenFactory 0x1B37…b69a. Airlock getAssetData returns that AAPL as numeraire and the token as word5; two slots are 0xdead. Uniswap v4 PoolManager 0x8366…0951 received nearly the full supply in the create transaction. LaunchCreated normalizedTicker is CLARUS. [verified R-4 R-5 R-6]

DexScreener labels the primary book Uniswap v4 CLARUS/AAPL 0xc0eb…1841. Gecko names the same pool CLARUS / AAPL with dex bankr-robinhood. Secondary CLARUS/ETH Uniswap v4 books exist with far less liquidity. GET /rhj/assets lists AAPL as Apple • Robinhood Token at this quote address on chain 4663. [verified R-1 R-2 R-12]

## Control and security

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. The create-tx Lock log lists beneficiaries 5% that Airlock owner and 95% the deployer EOA 0xBEE017…0A47, which has no code. factory() on the token reverts. [verified R-5 R-6]

DopplerERC20V1 is partially verified on Blockscout (src/tokens/DopplerERC20V1.sol, compiler v0.8.26). The token is an EIP-1167 shell. No audit report URL was located this pass. [verified R-4 R-14] [unknown]

## Team and provenance

clarus.lol titles CLARUS THE DOGCOW, prints CA 0x22ea9497…1e18, and links https://x.com/clarus_rh. @Clarus_rh bio reprints that CA. DexScreener websites and socials match. Flag confirmed-official for that pair. DexScreener also lists 512pixels.net/dogcow/ as thesis; that page has no contract. @ClarusRH is a different handle whose bio names 0x4Aceeee0…7777; flag handle-collision. [verified R-7 R-8] [claim R-15 R-16]

## Economics and activity

CLARUS/AAPL Uniswap v4 24h volume is 203407.04 USD and reserve_in_usd is 165931.65 at 2026-09-03T05:22:53Z from the Gecko pool endpoint. fdv_usd is 378929.60. Gecko token volume_usd.h24 is 232242.59 across all pools, not the AAPL book. [claim R-2 R-3]

DexScreener same pair: liquidity.usd 167560.59, volume.h24 191327.37, fdv/marketCap 386981. Blockscout holders_count 569. Pair created 2026-08-28T03:16:38Z. Assignment lead of liq ~$162,813 / vol ~$188,367 is the same book at an earlier print; live DexScreener is $167,561 / $191,327 this as_of. [claim R-1 R-4]

## Material risks

- Quote token AAPL 0xaF3D…93f9 is the Robinhood Stock Token rail; pool USD reserve is CLARUS plus AAPL, not a USDG backstop. [verified R-12 R-13]
- Token owner() is Airlock; 95% Lock beneficiary is the deployer EOA. [verified R-5 R-6]
- Same-name CLARUS/AAPL clones exist at other addresses on DexScreener. [claim R-1]
- @ClarusRH is a handle-collision with a different CA. [claim R-16]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/create tx, RPC name/symbol/owner/getAssetData, DexScreener tokens, Gecko pool/token, /rhj/assets, clarus.lol, @Clarus_rh profile and posts, @trenchfundbot, @medonchain, @ClarusRH, and 512pixels were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-6 R-7 R-12]
- Numbers: 203407.04 is the Gecko CLARUS/AAPL pool 24h volume, not the 232242.59 token all-pools figure. Reserve 165931.65 is that pool. DexScreener 191327.37 / 167560.59 is the same pair, different aggregator. [claim R-1 R-2 R-3]
- Adversarial: the strongest contrary reading is that CLARUS is census LONG, Bankr, or one of the packed AAPL twins (ICOIN/AP/AAPLCAT/AAPLDOG/JOBS/Appleseed). Create tx is LongLauncher.create for this CA only; those packed tokens use other addresses; Gecko dex id bankr-robinhood is the Doppler book label, not the Bankr agent. [inference R-5 R-7 R-12]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` not re-checked this pass; assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no clarus / CLARUS / Dogcow / 0x22ea9497…1e18.
- GET research/inbox/packets/clarus/WORK-20260903-grok-heavy-icarus-research.md on main and on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404; seed proceeds.
- Explorer: Blockscout api/v2 Chrome UA token, address, counters, create tx 0xd9caa24c…e713 logs, impl smart-contract, AAPL token. RPC eth_getCode/eth_call with Chrome UA at blocks 53168176–53168500.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko token GET HTTP 200 then pool.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, AAPL row 0xaF3D…93f9 chain 4663.
- Social: X keyword Latest CLARUS AAPL; from:clarus_rh; user search clarus_rh / CLARUS dogcow.
- Site: GET clarus.lol HTTP 200; GET 512pixels.net/dogcow/ HTTP 200, no CA.
- Failed: token factory() reverts (Airlock owner() used instead); Blockscout proxy smart-contract has no compiler metadata (impl source used); Gecko token total_reserve_in_usd 92871 is not the pool reserve.
- Time: collection 2026-09-03T05:22Z–2026-09-03T05:28Z.
