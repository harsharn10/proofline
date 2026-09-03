---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: peptides
name: PEPTIDES
packet_tier: seed
as_of: 2026-09-03T03:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [peptides]
allowed_paths:
  - research/inbox/packets/peptides/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: PEPTIDES
  aliases: [Peptides]
  symbols: [PEPTIDES]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.peptidesrh.com
  official_handle: "@PeptidesRH"
  repository: "NULL — no GitHub org or repository URL on peptidesrh.com HTML, DexScreener info, Gecko token attributes, Blockscout, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "PEPTIDES is a token cloned by DopplerERC20V1Factory 0x1B37…b69a through that LongLauncher.create; entity_kind token, not protocol"
        - "Official surfaces are peptidesrh.com / @PeptidesRH, not app.long.xyz / @longdotxyz"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "PEPTIDES is 0x52F380A513112428723abF8AFED125824E4A1e18 paired to LLY 0x8005d266…00ea"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs at @L4VAprotocol"
        - "PEPTIDES is a LongLauncher DopplerERC20V1 clone in a Uniswap v4 PEPTIDES/LLY pool"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at @bankrbot"
        - "Gecko labels this pool dex bankr-robinhood; the create tx initialized Uniswap v4 PoolManager 0x8366…0951 poolId 0x6a2423f7…0754 via LongLauncher, not a Bankr factory"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x52F380A5…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; LongLauncher.create minted PEPTIDES into Uniswap v4 pool 0x6a2423f7…0754 quoted against LLY 0x8005d266…00ea (GET /rhj/assets row, stock-token rail). Distinct from FATCOIN/LLY. DexScreener and Gecko disagree on the same-book USD figures. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8, CLM-19], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10, CLM-11], note: "" }

links:
  - { kind: site, url: "https://www.peptidesrh.com/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/PeptidesRH", authenticity: confirmed }

deployments:
  - label: PEPTIDES token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x52F380A513112428723abF8AFED125824E4A1e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:36:00Z
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
      seen: 2026-09-03T03:37:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory (token creator)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:37:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: LongLauncher (create caller)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:37:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-18]
  - label: Airlock (token owner)
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:37:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-14, R-18]
  - label: LLY Eli Lilly Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0x8005d266423c7ea827372c9c864491e5786600ea"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-12, R-13]

metrics:
  - { kind: volume_24h, value: 1365898.18, currency: USD, as_of: 2026-09-03T03:39:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x6a2423f70a10915bc776300f952e0bebb8361f47b8eedcdae057c7d75a0d0754 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 372116.70, currency: USD, as_of: 2026-09-03T03:39:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x6a2423f70a10915bc776300f952e0bebb8361f47b8eedcdae057c7d75a0d0754 reserve_in_usd (PEPTIDES/LLY pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 1187437.56, currency: USD, as_of: 2026-09-03T03:39:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x6a2423f70a10915bc776300f952e0bebb8361f47b8eedcdae057c7d75a0d0754 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 3619, currency: null, as_of: 2026-09-03T03:36:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x52F380A513112428723abF8AFED125824E4A1e18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:36:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32a5410 (53105680) then 0x32a5c43 (53107779). Token 0x52F380A5…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3Be8B97F…C599. name Peptides, symbol PEPTIDES, decimals 18, totalSupply 1e27. factory() reverts. owner() 0xeb7C0347…0862. Impl code 13927 B, DopplerERC20V1Factory 1912 B, Airlock 5695 B, LongLauncher 5826 B. LLY 0x8005d266…00ea code 283 B; name Eli Lilly • Robinhood Token. Create-tx from EOA 0xe81C…0122 eth_getCode 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-13, R-14, R-18], result: "Blockscout api/v2 token 0x52F380A5…1e18 name Peptides symbol PEPTIDES holders_count 3619 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97F…C599 is_verified true. creator_address_hash DopplerERC20V1Factory 0x1B37…b69a. create tx 0xbd0eee03…7368 2026-09-02T08:33:53Z block 52435484 from 0xe81C…0122 (EOA) to LongLauncher 0x22e9…eeED method create. LaunchCreated asset 0x52F380A5…1e18 numeraire LLY 0x8005d266…00ea normalizedTicker PEPTIDES poolInitializer 0x4e346895…a544. Internal create2 from factory minted the token. PoolManager Initialize id 0x6a2423f7…0754 currency0 PEPTIDES currency1 LLY. LLY token name Eli Lilly • Robinhood Token holders_count 2195." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:39:00Z, receipt_ids: [R-7, R-8, R-9, R-19], result: "DexScreener latest/dex/tokens/0x52F380A5…1e18: 30 robinhood uniswap pairs; top PEPTIDES/LLY v4 0x6a2423f7…0754 quote 0x8005d266…00ea Eli Lilly • Robinhood Token / LLY liquidity.usd 828313.11 volume.h24 5232293.94 fdv/marketCap 7537015 pairCreatedAt 2026-09-02T08:33:53Z info.websites https://www.peptidesrh.com/ info.socials x.com/PeptidesRH. Gecko pool: volume_usd.h24 1365898.18 reserve_in_usd 372116.70 fdv_usd 1187437.56 pool_created_at 2026-09-02T08:33:53Z dex bankr-robinhood. Gecko token volume_usd.h24 1610746.58 fdv_usd 1187437.56 total_reserve_in_usd 0.0. Secondary PEPTIDES/USDG and PEPTIDES/ETH books exist with far less liquidity than the LLY book." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:38:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one LLY hit tokenSymbol LLY tokenName Eli Lilly • Robinhood Token deployments contractAddress 0x8005d266423c7ea827372c9c864491e5786600ea chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T03:39:00Z, receipt_ids: [R-10, R-11], result: "peptidesrh.com HTML title $PEPTIDES — the fridge is cold; twitter:site @PeptidesRH; links x.com/PeptidesRH; embeds 0x52F380A513112428723abF8AFED125824E4A1e18. @PeptidesRH display $PEPTIDES; bio CA 0x52f380a513112428723abf8afed125824e4a1e18. Bidirectional site/handle/CA this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create forwards an Airlock create through DopplerERC20V1Factory; the factory clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against LLY. create from 0xe81C…0122 at 2026-09-02T08:33:53Z minted Peptides / PEPTIDES; LaunchCreated normalizedTicker PEPTIDES numeraire 0x8005d266…00ea poolId 0x6a2423f7…0754.", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Peptides", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "PEPTIDES", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x52F380A513112428723abF8AFED125824E4A1e18", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@PeptidesRH", class: verified, observed_at: 2026-09-03T03:39:00Z, receipt_ids: [R-7, R-10, R-11], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote LLY 0x8005d266…00ea is the Eli Lilly • Robinhood Token rail in GET /rhj/assets (194 assets, 1 LLY hit, chainId 4663). Distinct from FATCOIN 0x12D5ee79…8a01 / pair 0x46ba8216…af85, which quotes the same LLY via RWAERC20LaunchpadFactory 0xe64A…F297 and is not packed this run.", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-12, R-13, R-15], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "PEPTIDES/LLY Gecko 24h volume 1365898.18 USD and reserve_in_usd 372116.70 at 2026-09-03T03:39:00Z (Gecko pool slice, not Gecko token all-pools 1610746.58)", class: verified, observed_at: 2026-09-03T03:39:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 828313.11 volume.h24 5232293.94 fdv/marketCap 7537015 at 2026-09-03T03:36:00Z", class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 3619, class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C0347…0862 (verified src/Airlock.sol); OwnershipTransferred to that address in the create tx. Create-tx from EOA 0xe81C…0122 has no code.", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-4, R-5, R-14, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "LaunchCreated launcher 0xe81CfCAFC24aFeA0A4e733a81d5D8ED0e8a60122; Doppler Lock beneficiaries 0x21E2ce70…7A66 5e16 and 0xe81C…0122 95e16. LongLauncher is the pad, not a project-held Safe.", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is LLY 0x8005d266423c7ea827372c9c864491e5786600ea; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x6a2423f7…0754", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-4, R-7, R-8, R-18], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; the create tx to LongLauncher 0x22e9…eeED is the pad, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-1, R-3, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on peptidesrh.com, Blockscout, DexScreener, Gecko, or the @PeptidesRH posts opened this pass", class: unknown, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "https://www.peptidesrh.com", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-10], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 1187437.56; DexScreener fdv/marketCap 7537015. Gecko market_cap_usd null. Same pool, different aggregators.", class: verified, observed_at: 2026-09-03T03:39:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x8005d266423c7ea827372c9c864491e5786600ea", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-5, R-12, R-13], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0x1B37D3a72082029c44B35B604Ea473617580b69a", class: verified, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: candidate, value: "peptides | PEPTIDES | @PeptidesRH | peptidesrh.com — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-7, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: a second PEPTIDES Doppler clone 0x28D5c848F3239600C0f9f8b0AF90f36D3dD21E18 was created via LongLauncher.create 2026-08-14T14:39:26Z against HIMS; Blockscout holders_count 7; DexScreener PEPTIDES/HIMS liq 20271.09 volume.h24 118.55. Not the LLY book.", class: verified, observed_at: 2026-09-03T03:38:00Z, receipt_ids: [R-7, R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", class: verified, observed_at: 2026-09-03T03:37:00Z, receipt_ids: [R-5, R-14], reproduction_ids: [REP-1], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "Same PEPTIDES/LLY Uniswap v4 pool 0x6a2423f7…0754: DexScreener liquidity.usd 828313.11 volume.h24 5232293.94 fdv 7537015 vs Gecko reserve_in_usd 372116.70 volume_usd.h24 1365898.18 fdv_usd 1187437.56. Gecko also labels dex bankr-robinhood."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener PEPTIDES/LLY 24h volume $5.23M, liquidity $828k"
    summary: "DexScreener pair 0x6a2423f7…0754 liquidity.usd 828313 volume.h24 5232294 fdv 7537015. Gecko same pool printed 1365898 / 372117 / 1187438."
    occurred_at: 2026-09-03T03:36:00Z
    observed_at: 2026-09-03T03:39:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: disputed
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "LongLauncher create minted Peptides / PEPTIDES against LLY"
    summary: "Tx 0xbd0eee03…7368 from 0xe81C…0122 at 2026-09-02T08:33:53Z; LaunchCreated poolId 0x6a2423f7…0754 numeraire LLY."
    occurred_at: 2026-09-02T08:33:53Z
    observed_at: 2026-09-03T03:38:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-3
    type: company
    title: "@PeptidesRH posted LLY float in the PEPTIDES/LLY book"
    summary: "@PeptidesRH 2026-09-02T21:21:50Z: fridge passed 300 LLY; bio CA 0x52f380a5…1e18. Site peptidesrh.com embeds the same CA."
    occurred_at: 2026-09-02T21:21:50Z
    observed_at: 2026-09-03T03:39:00Z
    affected_fields: [identity.handle, communications.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10, R-11]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x52F380A5…1e18 Peptides / PEPTIDES", url: "https://robinhoodchain.blockscout.com/address/0x52F380A513112428723abF8AFED125824E4A1e18", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x52F380A513112428723abF8AFED125824E4A1e18 name Peptides is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol PEPTIDES decimals 18 total_supply 1000000000000000000000000000 holders_count 3619 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0xbd0eee0307e17b6af1adb92266f87c704fecfebf739e609bed7f9c7901fd7368." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8B97F…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-16, CLM-23], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z. Comment: Deploys new DopplerERC20V1 tokens using EIP-1167." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0xbd0eee03…7368", url: "https://robinhoodchain.blockscout.com/tx/0xbd0eee0307e17b6af1adb92266f87c704fecfebf739e609bed7f9c7901fd7368", published_at: 2026-09-02T08:33:53Z, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-6, CLM-14, CLM-16, EVT-2], excerpt: "timestamp 2026-09-02T08:33:53.000000Z status ok block_number 52435484 from 0xe81CfCAFC24aFeA0A4e733a81d5D8ED0e8a60122 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. LaunchCreated asset 0x52F380A5…1e18 numeraire 0x8005d266…00ea normalizedTicker PEPTIDES deployedAt 1788338033." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on PEPTIDES", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-17, CLM-21, CLM-22, CLM-23, CLM-26], excerpt: "eth_blockNumber 0x32a5410 (53105680). Token code 44 B EIP-1167 impl 0x3Be8B97F…C599. name Peptides symbol PEPTIDES decimals 18 totalSupply 1e27. factory() reverts. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. Impl 13927 B factory 1912 B Airlock 5695 B LongLauncher 5826 B. LLY code 283 B name Eli Lilly • Robinhood Token." }
  - { id: R-6, publisher: Blockscout, title: "LongLauncher 0x22e99278…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305. Census LONG factory; this create minted PEPTIDES." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens PEPTIDES", url: "https://api.dexscreener.com/latest/dex/tokens/0x52F380A513112428723abF8AFED125824E4A1e18", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-24, CLM-25, EVT-1], excerpt: "30 robinhood uniswap pairs. Top pairAddress 0x6a2423f70a10915bc776300f952e0bebb8361f47b8eedcdae057c7d75a0d0754 labels v4 base Peptides / PEPTIDES quote Eli Lilly • Robinhood Token / LLY 0x8005d266…00ea liquidity.usd 828313.11 volume.h24 5232293.94 fdv 7537015 pairCreatedAt 2026-09-02T08:33:53Z. info.websites https://www.peptidesrh.com/ info.socials x.com/PeptidesRH." }
  - { id: R-8, publisher: GeckoTerminal, title: "PEPTIDES/LLY pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x6a2423f70a10915bc776300f952e0bebb8361f47b8eedcdae057c7d75a0d0754", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name PEPTIDES / LLY pool_created_at 2026-09-02T08:33:53Z fdv_usd 1187437.561 market_cap_usd null volume_usd.h24 1365898.17813543 reserve_in_usd 372116.6968 transactions.h24 buys 6102 sells 6455. dex bankr-robinhood quote robinhood_0x8005d266423c7ea827372c9c864491e5786600ea." }
  - { id: R-9, publisher: GeckoTerminal, title: "Peptides token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x52F380A513112428723abF8AFED125824E4A1e18", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name Peptides symbol PEPTIDES decimals 18 total_supply 1e27 price_usd 0.001187437561 fdv_usd 1187437.5614758 market_cap_usd null volume_usd.h24 1610746.58376781 total_reserve_in_usd 0.0. coingecko_coin_id null. Top pool 0x6a2423f7…0754." }
  - { id: R-10, publisher: peptidesrh.com, title: "$PEPTIDES — the fridge is cold", url: "https://www.peptidesrh.com/", published_at: 2026-09-02T19:28:31Z, accessed_at: 2026-09-03T03:38:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-24, EVT-3], excerpt: "HTTP 200 Vercel. title $PEPTIDES — the fridge is cold. meta description Eight vials. One fridge. A memecoin paired with tokenized $LLY on Robinhood Chain. twitter:site @PeptidesRH. HTML embeds 0x52F380A513112428723abF8AFED125824E4A1e18 and https://x.com/PeptidesRH. No GitHub or t.me in the HTML this pass." }
  - { id: R-11, publisher: "@PeptidesRH", title: "The fridge just passed 300 $LLY", url: "https://x.com/PeptidesRH/status/2095260940443025869", published_at: 2026-09-02T21:21:50Z, accessed_at: 2026-09-03T03:39:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, EVT-3], excerpt: "Account $PEPTIDES @PeptidesRH. Bio: The best way to get exposure to $LLY stock on-chain, powered by @RobinhoodCrypto. CA: 0x52f380a513112428723abf8afed125824e4a1e18. Post 2026-09-02T21:21:50Z: The fridge just passed 300 $LLY (30%+). Keep cold. Hold long." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One LLY hit: tokenSymbol LLY tokenName Eli Lilly • Robinhood Token deployments contractAddress 0x8005d266423c7ea827372c9c864491e5786600ea chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-13, publisher: Blockscout, title: "Token 0x8005d266…00ea Eli Lilly • Robinhood Token / LLY", url: "https://robinhoodchain.blockscout.com/address/0x8005d266423c7ea827372c9c864491e5786600ea", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x8005d266423c7ea827372c9c864491e5786600ea name BeaconProxy is_contract true is_verified true. token name Eli Lilly • Robinhood Token symbol LLY decimals 18 holders_count 2195 total_supply 1031517000000000000000 type ERC-20." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xeb7C0347…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-26], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true. Smart-contract compiler v0.8.26 file_path src/Airlock.sol is_partially_verified true verified_at 2026-07-01T19:41:17Z. Token owner() returns this address." }
  - { id: R-15, publisher: DexScreener, title: "latest/dex/tokens FATCOIN", url: "https://api.dexscreener.com/latest/dex/tokens/0x12D5ee7917cA430073C3A638ee1e6f0648A98a01", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "FATCOIN 0x12D5ee7917cA430073C3A638ee1e6f0648A98a01 / LLY pair 0x46ba8216b5d05ff33427b976663836ec5b34b3e261f374f9a5e773d776d3af85 liquidity.usd 73099.89 volume.h24 1800148.1 fdv 382488 pairCreatedAt 2026-09-01T14:34:31Z. RPC factory() 0xe64AC4113848BBC1a6dDE1A6D1da96720A36F297 name RWAERC20LaunchpadFactory. Not packed this run." }
  - { id: R-16, publisher: Blockscout, title: "HIMS PEPTIDES 0x28D5c848…1E18 create tx", url: "https://robinhoodchain.blockscout.com/address/0x28D5c848F3239600C0f9f8b0AF90f36D3dD21E18", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "hash 0x28D5c848F3239600C0f9f8b0AF90f36D3dD21E18 name Peptides proxy_type eip1167 implementation DopplerERC20V1. token symbol PEPTIDES holders_count 7. creation_transaction_hash 0x1ad04c24dc13e7fae69125cffb631098d16ac56438dead4109c83685e57671fd timestamp 2026-08-14T14:39:26Z to LongLauncher method create. DexScreener quotes HIMS not LLY." }
  - { id: R-17, publisher: DexScreener, title: "PEPTIDES/LLY pair page", url: "https://dexscreener.com/robinhood/0x6a2423f70a10915bc776300f952e0bebb8361f47b8eedcdae057c7d75a0d0754", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "PEPTIDES/LLY on Uniswap v4 (Robinhood). Pair 0x6a2423f7…0754 base 0x52F380A5…1e18 quote 0x8005d266…00ea." }
  - { id: R-18, publisher: Blockscout, title: "create tx internals and logs", url: "https://robinhoodchain.blockscout.com/tx/0xbd0eee0307e17b6af1adb92266f87c704fecfebf739e609bed7f9c7901fd7368", published_at: 2026-09-02T08:33:53Z, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-13, CLM-14, CLM-15, EVT-2], excerpt: "Internal create2 from 0x1B37…b69a created 0x52F380A5…1e18. OwnershipTransferred to Airlock. PoolManager Initialize id 0x6a2423f7…0754 currency0 PEPTIDES currency1 LLY hooks 0x4e346895…a544. Create asset PEPTIDES numeraire LLY. Lock beneficiaries 5% 0x21E2ce70…7A66 and 95% 0xe81C…0122." }
  - { id: R-19, publisher: GeckoTerminal, title: "PEPTIDES token pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x52F380A513112428723abF8AFED125824E4A1e18/pools", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "Row 1 PEPTIDES / LLY 0x6a2423f7…0754 reserve_in_usd 372116.70 volume_usd.h24 1365898.18 fdv_usd 1187437.56. Row 2 PEPTIDES / USDG 5% reserve 8743.26 volume 106636.85. Assignment hint ~$798k / ~$5.21M matches DexScreener this pass, not this Gecko slice." }
  - { id: R-20, publisher: GeckoTerminal, title: "PEPTIDES/LLY pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x6a2423f70a10915bc776300f952e0bebb8361f47b8eedcdae057c7d75a0d0754", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "PEPTIDES/LLY on Robinhood. Pool 0x6a2…0754 PEPTIDES 0x52f…1e18 LLY 0x800…00ea." }

gaps:
  - { priority: P0, question: "Which aggregator is right for PEPTIDES/LLY USD liquidity, 24h volume, and FDV?", checked: "DexScreener 828313.11 / 5232293.94 / 7537015 vs Gecko 372116.70 / 1365898.18 / 1187437.56 on the same pool id 0x6a2423f7…0754, 2026-09-03", next: "re-fetch both endpoints in the same minute and compare PoolManager reserves on RPC" }
  - { priority: P1, question: "Why does Gecko label this Uniswap v4 pool dex bankr-robinhood?", checked: "Gecko pool relationships.dex id bankr-robinhood; create tx initialized PoolManager 0x8366…0951, 2026-09-03", next: "compare Gecko dex metadata for other LongLauncher v4 pools" }
  - { priority: P1, question: "Who holds create-tx from 0xe81C…0122 and fee beneficiary 0x21E2ce70…7A66?", checked: "both appear in LaunchCreated / Lock logs; from address eth_getCode empty, 2026-09-03", next: "trace those EOAs on Blockscout and any @PeptidesRH post that names them" }
  - { priority: P2, question: "Does the older HIMS PEPTIDES 0x28D5c848…1E18 share a team with the LLY book?", checked: "same LongLauncher and DopplerERC20V1Factory, different create from 0x1Daaf9A1…190b on 2026-08-14, holders_count 7, 2026-09-03", next: "read that create tx launcher field and any comms that cite 0x28D5…" }
  - { priority: P2, question: "Is there an audit whose scope includes DopplerERC20V1 as used on this clone?", checked: "peptidesrh.com, @PeptidesRH, Blockscout contract pages this pass", next: "auditor report index for Doppler / Whetstone and a matching commit" }
---

# PEPTIDES — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against LLY. LongLauncher deploys Peptides (PEPTIDES) in one create call and seeds the PEPTIDES/LLY book. Traders buy and sell PEPTIDES on Uniswap v4. LLY is the Robinhood stock-token rail, not the project.

Themes: memecoin, stock-paired:LLY, rwa, graduation:long

## Why it matters

The PEPTIDES/LLY Uniswap v4 book printed about $5.23M of 24h volume on DexScreener at collection (Gecko printed $1.37M on the same pool id). The quote token is the Eli Lilly Robinhood Token in GET /rhj/assets. FATCOIN quotes the same LLY rail through a different factory and is not this token.

## What could go wrong

USD liquidity figures on the PEPTIDES/LLY book count both sides, and DexScreener and Gecko disagree on the same pool by a wide margin. A later FATCOIN or HIMS PEPTIDES book is a different address. Token owner() is the shared Airlock, not a project-held key.

## Product and mechanics

LongLauncher 0x22e9…eeED forwards create through Airlock to DopplerERC20V1Factory. The factory clones DopplerERC20V1 via EIP-1167. create from 0xe81C…0122 at 2026-09-02T08:33:53Z minted Peptides / PEPTIDES supply 1e9*1e18 into Uniswap v4 poolId 0x6a2423f7…0754 quoted against LLY. LaunchCreated normalizedTicker PEPTIDES. [verified R-4 R-5 R-18]

PoolManager is 0x8366…0951. Secondary PEPTIDES/USDG and PEPTIDES/ETH books exist on DexScreener with far less liquidity than the LLY book. [verified R-7 R-8 R-19]

## Control and security

token owner() is Airlock 0xeb7C…0862. The create-tx from 0xe81C…0122 has no code. Lock beneficiaries split 5% / 95% between 0x21E2ce70…7A66 and that from address. [verified R-5 R-14 R-18]

DopplerERC20V1, DopplerERC20V1Factory, Airlock, and LongLauncher are partially verified on Blockscout (compiler v0.8.26). The token page is a verified EIP-1167 shell. No audit report URL was located this pass. [verified R-1 R-2 R-3 R-6] [unknown]

## Team and provenance

peptidesrh.com embeds token 0x52F380A5…1e18 and twitter:site @PeptidesRH. @PeptidesRH bio embeds the same CA. DexScreener info.websites and info.socials match. No GitHub URL this pass. [verified R-7 R-10 R-11]

## Economics and activity

PEPTIDES/LLY Uniswap v4 24h volume is 1365898.18 USD and reserve_in_usd is 372116.70 at 2026-09-03T03:39:00Z from the Gecko pool endpoint. fdv_usd is 1187437.56. Gecko token volume_usd.h24 is 1610746.58 across listed pools, not the LLY book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 828313.11, volume.h24 5232293.94, fdv/marketCap 7537015. Blockscout holders_count 3619. Pair created 2026-09-02T08:33:53Z. Assignment hint ~$798,799 / ~$5,210,838 is the DexScreener book, not Gecko. [claim R-1 R-7]

FATCOIN/LLY on DexScreener: liquidity.usd 73099.89 volume.h24 1800148.1 pair 0x46ba8216…af85, a different token. [claim R-15]

## Material risks

- DexScreener and Gecko disagree on PEPTIDES/LLY USD liquidity, volume, and FDV. [verified R-7 R-8]
- Pool USD reserve is PEPTIDES plus LLY, not a USDG or WETH backstop. [claim R-7 R-8]
- Token owner() is the shared Airlock used by other LongLauncher clones. [verified R-5 R-14]
- A second PEPTIDES ticker exists at 0x28D5c848…1E18 against HIMS. [verified R-16]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/LLY and the create tx plus internals, RPC name/symbol/owner/code sizes, DexScreener, Gecko pool/token/pools, /rhj/assets, peptidesrh.com, and @PeptidesRH were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 1365898.18 is the Gecko PEPTIDES/LLY pool 24h volume, not the 1610746.58 token all-pools figure. Reserve 372116.70 is that pool. DexScreener 5232293.94 / 828313.11 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that PEPTIDES is FATCOIN, the HIMS PEPTIDES clone, or a Bankr product. FATCOIN is a different address and factory. The HIMS clone has 7 holders. Gecko dex bankr-robinhood is an aggregator label; the create tx is LongLauncher into PoolManager. [inference R-8 R-15 R-16]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no peptides / PEPTIDES / 0x52F380A5…1e18. content/dependencies/stock-tokens.yaml LLY address 0x8005d266…00ea matches the pair quote.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, Airlock, LLY, create 0xbd0eee03…7368, internals, logs, HIMS PEPTIDES 0x28D5…1E18. RPC eth_getCode/eth_call with Mozilla UA at blocks 53105680–53107779.
- Aggregators: DexScreener latest/dex/tokens PEPTIDES and FATCOIN; Gecko token, pool, token/pools (Mozilla UA after a 429).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 LLY.
- Social: from:PeptidesRH; X user search PeptidesRH returned unrelated vendor handles; site peptidesrh.com HTML.
- Failed: first Gecko burst 429; X user search did not list @PeptidesRH (from: query did); Gecko dex id bankr-robinhood not reproduced as a Bankr factory.
- Time: collection 2026-09-03T03:35Z–2026-09-03T03:40Z.
