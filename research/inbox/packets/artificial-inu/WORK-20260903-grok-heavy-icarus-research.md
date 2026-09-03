---
# Packet v2 (docs/research-system.md §5). Collector full-tier for Icarus.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: artificial-inu
name: Artificial Inu
packet_tier: full
as_of: 2026-09-02T22:44:06Z
prior_packet: null
supersedes: null
owned_slugs: [artificial-inu]
allowed_paths:
  - research/inbox/packets/artificial-inu/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Artificial Inu
  aliases: []
  symbols: [AI]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://artificialinu.com
  official_handle: "@ArtificiallyInu"
  repository: "NULL — no GitHub org or repository URL on the official site or /how-it-works page this pass"
  possible_matches: []

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, vault, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Token 0x2E8c…1e18 reproduced on chain 4663 as an EIP-1167 DopplerERC20V1 clone created through LongLauncher; Uniswap v4 AI/NVDA and Uniswap v3 AI/WETH books are live on DexScreener and Gecko. Vault address and fee-split execution are site claims, not reproduced. DexScreener and Gecko disagree on AI/NVDA liquidity. [R-1] [R-4] [R-6] [R-11] [R-13]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10, CLM-22], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-8, CLM-18, CLM-7], note: "" }

links:
  - { kind: site, url: "https://artificialinu.com", authenticity: confirmed }
  - { kind: docs, url: "https://artificialinu.com/how-it-works", authenticity: confirmed }
  - { kind: x, url: "https://x.com/ArtificiallyInu", authenticity: confirmed }

deployments:
  - label: $AI token (EIP-1167 clone)
    role: token
    address:
      value: "0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02T22:39:42Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-4, R-6, R-20]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02T22:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-20]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02T22:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9]
  - label: LongLauncher (creation tx `to`; PRD 0x22e9…eeED)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02T22:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-8]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02T22:39:42Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-10]

metrics:
  - { kind: holders, value: 35487, currency: null, as_of: 2026-09-02T22:39:50Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18 holders_count", class: claim, receipt_ids: [R-5] }
  - { kind: tvl, value: 6082812.92, currency: USD, as_of: 2026-09-02T22:38:50Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x2E8c…1e18 pair 0xcbdfea…ce27 AI/NVDA Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-11] }
  - { kind: tvl, value: 26012100.67, currency: USD, as_of: 2026-09-02T22:41:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/trending_pools AI/NVDA 0xcbdfea…ce27 reserve_in_usd", class: claim, receipt_ids: [R-13] }
  - { kind: tvl, value: 3715804.10, currency: USD, as_of: 2026-09-02T22:41:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/trending_pools AI/WETH 0xc4a21f…da1d reserve_in_usd", class: claim, receipt_ids: [R-13] }
  - { kind: volume_24h, value: 5949096.18, currency: USD, as_of: 2026-09-02T22:38:50Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x2E8c…1e18 pair 0xcbdfea…ce27 AI/NVDA volume.h24", class: claim, receipt_ids: [R-11] }
  - { kind: volume_24h, value: 22890375.60, currency: USD, as_of: 2026-09-02T22:41:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/trending_pools AI/WETH 0xc4a21f…da1d volume_usd.h24", class: claim, receipt_ids: [R-13] }
  - { kind: market_cap, value: 267172264, currency: USD, as_of: 2026-09-02T22:38:50Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x2E8c…1e18 pair 0xcbdfea…ce27 marketCap", class: claim, receipt_ids: [R-11] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:39:42Z, receipt_ids: [R-6], result: "rpc.mainnet.chain.robinhood.com at block 0x327ae0e (52932110): eth_getCode 0x2E8c…1e18 non-empty EIP-1167 pointing at 0x3Be8B97F…C599; owner() 0xeb7c0347…0862; name() Artificial Inu; symbol() AI; totalSupply 991528260788484213136520262; EIP-1967 implementation slot zero; owner eth_getCode non-empty" }
  - { id: REP-2, method: api, chain_id: 4663, checked_at: 2026-09-02T22:39:50Z, receipt_ids: [R-4, R-5], result: "Blockscout api/v2/addresses/0x2E8c…1e18: is_contract true, is_verified true, name Artificial Inu, proxy_type eip1167, creator_address_hash 0x1B37D3a7…b69a, creation_transaction_hash 0x7632524c…bf1b, implementations DopplerERC20V1 0x3Be8B97F…C599. api/v2/tokens: symbol AI, holders_count 35487, total_supply 991528260788484213136520262" }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-02T22:40:00Z, receipt_ids: [R-7, R-8, R-9], result: "Creation tx 0x7632524c… to 0x22e99278…eeED named LongLauncher, method create, timestamp 2026-07-14T17:48:31Z, block 9721433, status ok. creator_address_hash 0x1B37…b69a named DopplerERC20V1Factory, verified Solidity 0.8.26, file src/tokens/DopplerERC20V1Factory.sol. LongLauncher verified file src/LongLauncher.sol" }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-02T22:38:50Z, receipt_ids: [R-11], result: "DexScreener latest/dex/tokens/0x2E8c…1e18: AI/NVDA pair 0xcbdfea…ce27 dexId uniswap labels [v4] quote NVDA 0xd0601CE1…9EEC liquidity.usd 6082812.92 volume.h24 5949096.18 marketCap 267172264; AI/WETH pair 0xc4a21f…da1d labels [v3] liquidity.usd 3751110.01 volume.h24 23030093.93; websites https://artificialinu.com/ socials https://x.com/artificiallyinu" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-02T22:41:00Z, receipt_ids: [R-13, R-14, R-15], result: "Gecko trending_pools robinhood rank 6 AI/NVDA 0xcbdfea…ce27 reserve_in_usd 26012100.6746 volume_usd.h24 5919947.19747409; rank 10 AI/WETH 0xc4a21f…da1d reserve_in_usd 3715804.1016 volume_usd.h24 22890375.603045. Pool endpoint AI/NVDA dex id bankr-robinhood; AI/WETH dex id uniswap-v3-robinhood" }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-02T22:41:30Z, receipt_ids: [R-1, R-3, R-19], result: "artificialinu.com publishes CA 0x2E8c…1e18, NVDA 0xd0601c…9eec, Uniswap swap URL, DexScreener AI/NVDA pool, and https://x.com/artificiallyinu. @ArtificiallyInu 2026-08-29 posted The Inu is https://artificialinu.com and on 2026-08-17 posted the same site plus the same CA" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "AI/NVDA Uniswap v4 pool 0xcbdfea…ce27 on Robinhood Chain; quote is NVIDIA • Robinhood Token 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC", class: verified, observed_at: 2026-09-02T22:38:50Z, receipt_ids: [R-11, R-1], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://artificialinu.com", class: verified, observed_at: 2026-09-02T22:41:30Z, receipt_ids: [R-1, R-19], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@ArtificiallyInu", class: verified, observed_at: 2026-09-02T22:41:30Z, receipt_ids: [R-1, R-3, R-19], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18", class: verified, observed_at: 2026-09-02T22:39:42Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: "AI", class: verified, observed_at: 2026-09-02T22:39:42Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T22:39:42Z, receipt_ids: [R-4, R-6, R-11], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-7, field: control.owner, value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock", class: verified, observed_at: 2026-09-02T22:39:42Z, receipt_ids: [R-6, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: relationship, value: "Creation tx 0x7632524c… called LongLauncher.create at 0x22e99278308B393ea1260859B181AD7E78f5eeED on 2026-07-14T17:48:31Z (PRD factory 0x22e9…eeED)", class: verified, observed_at: 2026-09-02T22:40:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-9, field: relationship, value: "creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a is DopplerERC20V1Factory (Airlock-gated EIP-1167 factory)", class: verified, observed_at: 2026-09-02T22:40:00Z, receipt_ids: [R-4, R-9], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Primary pair asset NVDA (Robinhood Stock Token 0xd0601CE1…9EEC)", class: verified, observed_at: 2026-09-02T22:38:50Z, receipt_ids: [R-1, R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "Secondary book AI/WETH Uniswap v3 pair 0xc4a21f9d6485FC5893DD4A491B320a83DAF4Da1D", class: verified, observed_at: 2026-09-02T22:38:50Z, receipt_ids: [R-11, R-15], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DexScreener AI/NVDA Uniswap v4 liquidity.usd 6082812.92", class: verified, observed_at: 2026-09-02T22:38:50Z, receipt_ids: [R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Gecko trending AI/NVDA reserve_in_usd 26012100.67", class: verified, observed_at: 2026-09-02T22:41:00Z, receipt_ids: [R-13], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "@HoodInsider_ 2026-09-02 recap: $26.7M core liquidity and $58.9M tracked volume; 33.3K holders", class: claim, observed_at: 2026-09-02T22:42:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Gecko trending AI/WETH reserve_in_usd 3715804.10 volume_usd.h24 22890375.60", class: verified, observed_at: 2026-09-02T22:41:00Z, receipt_ids: [R-13], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "DexScreener AI/NVDA volume.h24 5949096.18", class: verified, observed_at: 2026-09-02T22:38:50Z, receipt_ids: [R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "DexScreener AI/WETH Uniswap v3 liquidity.usd 3751110.01 volume.h24 23030093.93", class: verified, observed_at: 2026-09-02T22:38:50Z, receipt_ids: [R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-18, field: product.mechanism, value: "Site: buys pay NVDA fees 80% to Community Vault / 20% original receiver; sells pay AI fees 50% burn / 50% lock in the Vault. How-it-works marks the amounts as illustrative", class: claim, observed_at: 2026-09-02T22:38:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: security.audit, value: "No audit report URL was located on the official site, how-it-works page, or X account this pass", class: unknown, observed_at: 2026-09-02T22:42:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: control.proxy, value: "EIP-1167 minimal proxy; implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599, verified", class: verified, observed_at: 2026-09-02T22:39:50Z, receipt_ids: [R-4, R-6, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: taxonomy.primary-leaf, value: "rwa-products/stock-paired-token", class: claim, observed_at: 2026-09-02T22:44:06Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: relationship, value: "Launchpad LONG (LongLauncher 0x22e9…eeED plus DopplerERC20V1Factory 0x1B37…b69a); site says trades through LONG on Robinhood Chain using Uniswap v4", class: verified, observed_at: 2026-09-02T22:40:00Z, receipt_ids: [R-2, R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-23, field: product.mechanism, value: "Liquidity venue Uniswap v4 for the AI/NVDA book (DexScreener labels [v4] dexId uniswap)", class: verified, observed_at: 2026-09-02T22:38:50Z, receipt_ids: [R-2, R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: "Blockscout holders_count 35487", class: verified, observed_at: 2026-09-02T22:39:50Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-25, field: product.mechanism, value: "Gecko pool endpoint attributes AI/NVDA 0xcbdfea…ce27 to dex id bankr-robinhood", class: verified, observed_at: 2026-09-02T22:41:00Z, receipt_ids: [R-14], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-26, field: identity.name, value: "Artificial Inu", class: verified, observed_at: 2026-09-02T22:39:42Z, receipt_ids: [R-1, R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-27, field: other, value: "Same-stock NVDA pairs that are not this token and are not identity matches: microduck/NVDA, ORBIO/NVDA, GPU/NVDA, PonsiOS/NVDA", class: claim, observed_at: 2026-09-02T22:43:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: economics.metric, value: "Official site Live NVDA holdings: Community Vault 932.50 NVDA ($209,878) and liquidity pools 10,478.00 NVDA ($2,358,283)", class: claim, observed_at: 2026-09-02T22:38:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: economics.metric, value: "Official account 2026-09-02T21:59:45Z: pool + community vault hold over $2.6M of NVDA, up $1M in 5 days", class: claim, observed_at: 2026-09-02T22:42:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: control.privileged-role, value: "DopplerERC20V1Factory.create is onlyAirlock; token owner-only path sits on the shared Airlock, not a project-held key located this pass", class: verified, observed_at: 2026-09-02T22:40:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13, CLM-14]
    material_effect: "AI/NVDA liquidity is $6.08M on DexScreener, $26.01M on Gecko trending, and $26.7M in the 2 Sep @HoodInsider_ recap; a card that collapses them would misstate the book"
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-1, CLM-25]
    material_effect: "DexScreener labels the AI/NVDA pool Uniswap v4; Gecko attributes the same pool id to bankr-robinhood"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener and Gecko disagree on AI/NVDA liquidity"
    summary: "DexScreener AI/NVDA Uniswap v4 liq $6,082,812.92; Gecko trending same pool $26,012,100.67."
    occurred_at: 2026-09-02T22:41:00Z
    observed_at: 2026-09-02T22:41:00Z
    affected_fields: [economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11, R-13]
  - id: EVT-2
    type: company
    title: "Official account posted pool plus vault over $2.6M NVDA"
    summary: "The official account posted that the pool and community vault hold over $2.6M of NVDA, up $1M in five days."
    occurred_at: 2026-09-02T21:59:45Z
    observed_at: 2026-09-02T22:42:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-3
    type: ct
    title: "@HoodInsider_ recap claimed $26.7M core liquidity for $AI"
    summary: "@HoodInsider_ recap: @ArtificiallyInu 33.3K holders, $26.7M core liquidity, $58.9M tracked volume."
    occurred_at: 2026-09-02T20:15:00Z
    observed_at: 2026-09-02T22:42:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-4
    type: company
    title: "Official account posted the site as artificialinu.com"
    summary: "The official account posted 'The Inu is https://artificialinu.com', linking the handle to the site."
    occurred_at: 2026-08-29T13:08:01Z
    observed_at: 2026-09-02T22:42:30Z
    affected_fields: [identity.domain, identity.handle]
    evidence_state: verified
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-5
    type: onchain
    title: "$AI token created through LongLauncher on 14 Jul 2026"
    summary: "Tx 0x7632524c… called LongLauncher.create; token 0x2E8c…1e18 was created at block 9721433."
    occurred_at: 2026-07-14T17:48:31Z
    observed_at: 2026-09-02T22:40:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7, R-8]

receipts:
  - { id: R-1, publisher: Artificial Inu, title: "Official site", url: "https://artificialinu.com", published_at: null, accessed_at: 2026-09-02T22:38:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-10, CLM-18, CLM-21, CLM-26, CLM-28], excerpt: "$AI is paired with tokenized $NVDA. Every trade feeds the Vault, and every fee is burned or locked forever. CA 0x2e8c31…111e18 NVDA 0xd0601c…0d9eec. Live NVDA holdings: Community Vault 932.50 NVDA · $209,878; Liquidity pools 10,478.00 NVDA · $2,358,283. Page links https://x.com/artificiallyinu and the AI/NVDA DexScreener pool." }
  - { id: R-2, publisher: Artificial Inu, title: "How it works", url: "https://artificialinu.com/how-it-works", published_at: null, accessed_at: 2026-09-02T22:38:20Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-18, CLM-22, CLM-23], excerpt: "$AI trades against tokenized $NVDA through LONG on Robinhood Chain, using Uniswap v4. Buys: NVDA fees 80% AI Community Vault, 20% original receiver. Sells: AI fees 50% burned, 50% locked in the Vault. Contracts: $AI 0x2e8c31162b…1e18 $NVDA 0xd0601ce157…9eec. Illustrative split: amounts shown are examples." }
  - { id: R-3, publisher: Artificial Inu, title: "X account @ArtificiallyInu", url: "https://x.com/ArtificiallyInu", published_at: null, accessed_at: 2026-09-02T22:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3], excerpt: "Display name Artificial Inu. Bio: The ticker is $AI (Artificial Inu). $AI is paired to NVIDIA - AI/NVDA." }
  - { id: R-4, publisher: Blockscout, title: "Address 0x2E8c…1e18", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18", published_at: null, accessed_at: 2026-09-02T22:39:50Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-9, CLM-20, CLM-26], excerpt: "hash 0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18; is_contract true; is_verified true; name Artificial Inu; proxy_type eip1167; creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a; creation_transaction_hash 0x7632524cd4cec7cabc574b58c54095a2ca33a2a1b037b1486e8b88b79bd3bf1b; implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599." }
  - { id: R-5, publisher: Blockscout, title: "Token 0x2E8c…1e18", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18", published_at: null, accessed_at: 2026-09-02T22:39:50Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-24], excerpt: "name Artificial Inu; symbol AI; decimals 18; type ERC-20; holders_count 35487; total_supply 991528260788484213136520262." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "eth_getCode / owner / name / symbol at block 52932110", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T22:39:42Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-20, CLM-26], excerpt: "eth_blockNumber 0x327ae0e. eth_getCode 0x2E8c…1e18 EIP-1167 prefix 0x3d3d3d3d363d3d37363d733be8b97fd0e713b5abe0649fa830223b6b4bc599. owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. name() Artificial Inu. symbol() AI. totalSupply 991528260788484213136520262. owner eth_getCode non-empty. EIP-1967 implementation slot zero." }
  - { id: R-7, publisher: Blockscout, title: "Creation tx 0x7632524c…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x7632524cd4cec7cabc574b58c54095a2ca33a2a1b037b1486e8b88b79bd3bf1b", published_at: 2026-07-14T17:48:31.000000Z, accessed_at: 2026-09-02T22:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-22, EVT-5], excerpt: "timestamp 2026-07-14T17:48:31.000000Z; block_number 9721433; to 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher; method create; status ok; result success." }
  - { id: R-8, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-02T22:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-22, EVT-5], excerpt: "api/v2/smart-contracts: name LongLauncher; is_verified true; compiler v0.8.26+commit.8a97fa7a; file_path src/LongLauncher.sol. Matches PRD truncated factory 0x22e9…eeED." }
  - { id: R-9, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-02T22:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-30], excerpt: "is_contract true; is_verified true; name DopplerERC20V1Factory; compiler v0.8.26; file src/tokens/DopplerERC20V1Factory.sol. Source: Deploys DopplerERC20V1 tokens using EIP-1167; constructor(address airlock_); create() external onlyAirlock." }
  - { id: R-10, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-02T22:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-30], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; is_contract true; is_verified true; name Airlock; compiler v0.8.26+commit.8a97fa7a. This address is owner() on the $AI token." }
  - { id: R-11, publisher: DexScreener, title: "Token pairs API 0x2E8c…1e18", url: "https://api.dexscreener.com/latest/dex/tokens/0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18", published_at: null, accessed_at: 2026-09-02T22:38:50Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-1, CLM-6, CLM-10, CLM-11, CLM-12, CLM-16, CLM-17, CLM-23, EVT-1], excerpt: "AI/NVDA pair 0xcbdfea90430a30ee4469c9902e120a77e7c7e4711d5643671c1d1957f2f1ce27 dexId uniswap labels [v4] quote NVDA 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC liquidity.usd 6082812.92 volume.h24 5949096.18 marketCap 267172264. AI/WETH 0xc4a21f9d6485FC5893DD4A491B320a83DAF4Da1D labels [v3] liquidity.usd 3751110.01 volume.h24 23030093.93." }
  - { id: R-12, publisher: DexScreener, title: "AI/NVDA pair page", url: "https://dexscreener.com/robinhood/0xcbdfea90430a30ee4469c9902e120a77e7c7e4711d5643671c1d1957f2f1ce27", published_at: null, accessed_at: 2026-09-02T22:38:50Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "Pair page for 0xcbdfea…ce27 on chain robinhood; DexScreener API for the same id returned Uniswap v4 AI/NVDA with liquidity.usd 6082812.92." }
  - { id: R-13, publisher: GeckoTerminal, title: "Robinhood trending pools API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools", published_at: null, accessed_at: 2026-09-02T22:41:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13, CLM-15, EVT-1], excerpt: "Rank 6 AI/NVDA address 0xcbdfea90430a30ee4469c9902e120a77e7c7e4711d5643671c1d1957f2f1ce27 reserve_in_usd 26012100.6746 volume_usd.h24 5919947.19747409. Rank 10 AI/WETH 1% address 0xc4a21f9d6485fc5893dd4a491b320a83daf4da1d reserve_in_usd 3715804.1016 volume_usd.h24 22890375.603045." }
  - { id: R-14, publisher: GeckoTerminal, title: "AI/NVDA pool API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xcbdfea90430a30ee4469c9902e120a77e7c7e4711d5643671c1d1957f2f1ce27", published_at: null, accessed_at: 2026-09-02T22:41:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13, CLM-25], excerpt: "name AI/NVDA; address 0xcbdfea…ce27; reserve_in_usd 26009263.0226; volume_usd.h24 5918497.84224013; pool_created_at 2026-07-14T17:48:31Z; relationships.dex.data.id bankr-robinhood." }
  - { id: R-15, publisher: GeckoTerminal, title: "AI/WETH pool API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc4a21f9d6485fc5893dd4a491b320a83daf4da1d", published_at: null, accessed_at: 2026-09-02T22:41:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-11, CLM-15], excerpt: "name AI/WETH 1%; address 0xc4a21f…da1d; reserve_in_usd 3722346.7231; volume_usd.h24 22836293.8041726; pool_created_at 2026-07-22T16:37:33Z; relationships.dex.data.id uniswap-v3-robinhood." }
  - { id: R-16, publisher: "@HoodInsider_", title: "Daily recap 2 Sep 2026", url: "https://x.com/HoodInsider_/status/2095244119530488106", published_at: 2026-09-02T20:15:00Z, accessed_at: 2026-09-02T22:42:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-14, EVT-3], excerpt: "what’s trending across Robinhood in the last 24 hours. @ArtificiallyInu grew to 33.3K holders, with $26.7M in core liquidity and $58.9M in tracked volume." }
  - { id: R-17, publisher: Artificial Inu, title: "$AI pool plus vault NVDA holdings", url: "https://x.com/ArtificiallyInu/status/2095270481704239272", published_at: 2026-09-02T21:59:45Z, accessed_at: 2026-09-02T22:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-29, EVT-2], excerpt: "$AI now holds over $2.6M of $NVDA in the Pool + Community Vault! Up $1M in 5 days." }
  - { id: R-18, publisher: Artificial Inu, title: "CoinGecko listing request post (CA + site)", url: "https://x.com/ArtificiallyInu/status/2089415342380437625", published_at: 2026-08-17T18:13:31Z, accessed_at: 2026-09-02T22:42:30Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-4], excerpt: "Official website: https://artificialinu.com Contract: 0x2e8c31162b855a2ffa90f6f8634643ad6f111e18 GeckoTerminal: https://www.geckoterminal.com/robinhood/pools/0xcbdfea90430a30ee4469c9902e120a77e7c7e4711d5643671c1d1957f2f1ce27" }
  - { id: R-19, publisher: Artificial Inu, title: "The Inu is artificialinu.com", url: "https://x.com/ArtificiallyInu/status/2093687112201638244", published_at: 2026-08-29T13:08:01Z, accessed_at: 2026-09-02T22:42:30Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, EVT-4], excerpt: "The Inu is https://artificialinu.com" }
  - { id: R-20, publisher: Blockscout, title: "DopplerERC20V1 implementation 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-02T22:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-20], excerpt: "is_contract true; is_verified true; name DopplerERC20V1; compiler v0.8.26+commit.8a97fa7a; creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a (the factory)." }
  - { id: R-21, publisher: DexScreener, title: "microduck/NVDA pair (same-stock, not $AI)", url: "https://dexscreener.com/robinhood/0xcde4d35e341901bc0308c2ffc789448ccd0f238a59597fe702e6710484b9c370", published_at: null, accessed_at: 2026-09-02T22:43:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-27], excerpt: "microduck / NVDA on Robinhood / Uniswap. Quote NVDA 0xd06…9EEC. Distinct base token from Artificial Inu 0x2E8c…1e18. Same-stock pair, not an identity match." }

gaps:
  - { priority: P0, question: "What is the Community Vault contract address, and who can move NVDA out of it?", checked: "official site, /how-it-works (no vault CA), Blockscout token and Airlock pages, 2026-09-02", next: "read DopplerERC20V1 verified source for fee recipient / vault setter and match the live recipient on chain" }
  - { priority: P0, question: "Do live swaps actually split 80/20 NVDA on buys and 50/50 AI burn/lock on sells?", checked: "how-it-works page marks amounts as illustrative; no hook or fee-router address reproduced this pass", next: "decode a recent AI/NVDA swap and the token's fee functions in DopplerERC20V1 source" }
  - { priority: P1, question: "Why is DexScreener AI/NVDA liquidity $6.08M while Gecko trending prints $26.01M for the same pool id?", checked: "DexScreener API liquidity.usd 6082812.92 and quote 10457 NVDA; Gecko trending reserve_in_usd 26012100.67; @HoodInsider_ $26.7M core liquidity, 2026-09-02", next: "read Uniswap v4 PoolManager / position inventory for 0xcbdfea…ce27 rather than aggregators" }
  - { priority: P1, question: "Is the AI/NVDA pool a Uniswap v4 pool, a Bankr-routed pool, or both?", checked: "DexScreener dexId uniswap labels [v4]; Gecko pool endpoint dex id bankr-robinhood; creation through LongLauncher, 2026-09-02", next: "PoolManager / hook address on the explorer for 0xcbdfea…ce27" }
  - { priority: P1, question: "Is there an audit whose scope includes DopplerERC20V1, LongLauncher, or Airlock as used by $AI?", checked: "official site, how-it-works, X account, Blockscout contract pages, 2026-09-02", next: "auditor report index for Doppler / LONG and a matching commit" }
  - { priority: P2, question: "Can the site's 932.50 NVDA vault balance be reproduced as an ERC-20 balanceOf on a named address?", checked: "site live widget 932.50 NVDA / $209,878 this pass; no vault CA published", next: "once the vault address is known, balanceOf(NVDA) at a dated block" }
---

# Artificial Inu — research packet

## What it is

Artificial Inu is the LONG factory's flagship stock-paired memecoin: $AI trades against tokenized NVDA in a Uniswap v4 pool on Robinhood Chain. A user swaps AI for NVDA, or uses the secondary WETH book. The official site and @ArtificiallyInu account describe a community vault that takes NVDA buy fees and burns or locks AI sell fees; those fee paths were not reproduced this pass.

Themes: memecoin, ai, stock-paired:NVDA, dog, rwa

## Why it matters

$AI is the named LONG flagship and a live NVDA-quoted book on chain 4663, so it is the reference stock-paired token rather than a bonding-curve graduation. Other NVDA-quoted tokens (microduck, ORBIO, GPU, PonsiOS) share the quote asset and are not this name. Aggregators disagree on how large the AI/NVDA book is, which is the figure a card would show.

## What could go wrong

The AI/NVDA liquidity print is not one number: DexScreener lists about $6.08M while Gecko trending lists about $26.01M for the same pool id, and a 2 Sep recap claimed $26.7M core liquidity. The Community Vault address is unpublished, so the NVDA-fee path cannot be checked as a balance. Token owner-only functions sit on the shared Airlock, not on a project-held key located this pass.

## Product and mechanics

$AI is an ERC-20 at `0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18`. The primary book is Uniswap v4 AI/NVDA (`0xcbdfea…ce27`) with quote `0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC`. A secondary Uniswap v3 AI/WETH book (`0xc4a21f…da1d`) is also live. [verified R-4 R-11]

The token was created on 2026-07-14T17:48:31Z by `LongLauncher.create` at `0x22e99278308B393ea1260859B181AD7E78f5eeED` (PRD factory `0x22e9…eeED`). Blockscout `creator_address_hash` is `DopplerERC20V1Factory` `0x1B37…b69a`, which clones `DopplerERC20V1` via EIP-1167 and is `onlyAirlock`. [verified R-7 R-8 R-9]

The official how-it-works page says buys pay NVDA fees 80% to the Community Vault and 20% to the original receiver, and sells pay AI fees 50% burned and 50% locked in the Vault. Those amounts are marked illustrative. No vault contract was published on that page. [claim R-2]

Same-stock NVDA pairs that are not this token: microduck/NVDA, ORBIO/NVDA, GPU/NVDA, PonsiOS/NVDA. They are not identity matches. [claim R-21]

## Control and security

`owner()` on the token returns Airlock `0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862`, a verified contract. The factory `create` path is `onlyAirlock`. Owner-only token functions therefore sit on shared LONG/Doppler launch infrastructure. [verified R-6 R-9 R-10]

The token is an EIP-1167 clone of verified `DopplerERC20V1` `0x3Be8…C599`. The EIP-1967 implementation slot is empty, as expected for a minimal proxy. [verified R-4 R-6 R-20]

No audit report URL was located on the official site, how-it-works page, or X account this pass. [unknown]

## Team and provenance

Official identity is bidirectional: artificialinu.com links `https://x.com/artificiallyinu` and publishes CA `0x2E8c…1e18`; @ArtificiallyInu posted the site on 2026-08-29 and the same site plus CA on 2026-08-17. No GitHub org was located. Named operators were not established beyond the Airlock-owned token. [verified R-1 R-19]

## Economics and activity

DexScreener AI/NVDA Uniswap v4 at 2026-09-02T22:38:50Z: liquidity $6,082,812.92, 24h volume $5,949,096.18, market cap $267,172,264. [verified R-11]

Gecko trending at 2026-09-02T22:41:00Z lists the same AI/NVDA pool at reserve $26,012,100.67 and 24h volume $5,919,947.20. Those two liquidity figures are not combined. [verified R-13]

@HoodInsider_ on 2026-09-02T20:15:00Z claimed $26.7M core liquidity, $58.9M tracked volume, and 33.3K holders. [claim R-16]

Gecko trending AI/WETH: reserve $3,715,804.10, 24h volume $22,890,375.60. DexScreener AI/WETH Uniswap v3: liquidity $3,751,110.01, 24h volume $23,030,093.93. [verified R-11 R-13]

Blockscout holders_count 35,487. RPC totalSupply 991,528,260.79 AI against a 1e9 18-decimal mint. [verified R-5 R-6]

Official site widget: Community Vault 932.50 NVDA ($209,878) and liquidity pools 10,478.00 NVDA ($2,358,283). Official account at 21:59 UTC posted pool plus vault over $2.6M NVDA. [claim R-1 R-17]

## Material risks

- AI/NVDA liquidity is $6.08M on DexScreener, $26.01M on Gecko trending, and $26.7M in a 2 Sep recap; the figures are not interchangeable. [verified R-11 R-13]

- Community Vault address is unpublished, so NVDA-fee custody cannot be checked as a balance. [claim R-2]

- Token owner() is the shared Airlock; factory create is onlyAirlock. [verified R-6 R-9 R-10]

- No audit report was located this pass. [unknown]

- Gecko attributes the AI/NVDA pool to bankr-robinhood while DexScreener labels it Uniswap v4. [verified R-11 R-14]

## Verification passes

- Receipts: every URL above was opened on 2026-09-02 and its excerpt copied from the page or JSON body. [verified R-1 R-2 R-4 R-6 R-11 R-13]
- Numbers: DexScreener AI/NVDA liquidity and Gecko trending reserve are filed as separate claims and metrics, not averaged; AI/WETH is a second book; holders is the Blockscout token count, not an X recap. [verified R-11 R-13 R-5]
- Adversarial: the strongest contrary reading is that Gecko's $26M is the usable figure and DexScreener undercounts Uniswap v4 concentrated liquidity, or the reverse, that Gecko overstates virtual reserves; a second contrary reading is that the pool is a Bankr book rather than Uniswap v4. Creation through LongLauncher and DexScreener's uniswap/v4 labels argue for a LONG/Uniswap v4 venue, but the Gecko dex id is unresolved. Vault and fee-split claims could be frontend copy only. [inference R-7 R-11 R-14]

## Operations log

- Census row lifecycle announced; this pass reproduces the token on RPC and Blockscout and live AI/NVDA plus AI/WETH books, so lifecycle is filed as mainnet.
- RPC `https://rpc.mainnet.chain.robinhood.com` at 2026-09-02T22:39:42Z, block `0x327ae0e` (52932110): getCode, owner, name, symbol, totalSupply, EIP-1967 slot, owner getCode.
- Blockscout api/v2 with Chrome UA (plain curl is challenged): addresses, tokens, transactions, smart-contracts for token, factory, LongLauncher, Airlock, implementation.
- DexScreener `latest/dex/tokens/0x2E8c…1e18` at 22:38:50Z; Gecko `trending_pools` and pool endpoints at 22:41:00Z. Prior `content/pulled/artificial-inu.yaml` pulled_at 2026-09-02T21:05:36Z had AI/NVDA liq 6,132,478.19 / vol 7,278,172.47 and AI/WETH liq 3,785,774.74 / vol 28,049,923.05; this packet uses the live API reads, not that file as a reproduction.
- Official site and /how-it-works opened; X Latest for @ArtificiallyInu and @HoodInsider_ opened. No Telegram or GitHub on the official pages.
- Same-stock NVDA pairs noted, not merged; possible_matches empty.
- Allowed path this run: this packet only.
