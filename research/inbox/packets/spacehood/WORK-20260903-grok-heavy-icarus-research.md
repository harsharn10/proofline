---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: spacehood
name: SPACEHOOD
packet_tier: seed
as_of: 2026-09-03T03:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [spacehood]
allowed_paths:
  - research/inbox/packets/spacehood/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: SPACEHOOD
  aliases: []
  symbols: [SPACEHOOD]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is the LONG token page app.long.xyz/tokens/0xfe7e… not a project domain; Gecko token info websites []; census LONG already owns app.long.xyz"
  official_handle: "NULL — DexScreener info.socials empty; Gecko token info twitter_handle null; LONG token page Social Links empty; @spacehood420 bio contains CA 0xFe7E19…1E18 and @longdotxyz, unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko token info, the LONG token page, or @spacehood420 this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "SPACEHOOD is the ERC-20 at 0xFe7E19…1E18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; LONG token page Social Links empty for this token"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA, site artificialinu.com / @ArtificiallyInu"
        - "SPACEHOOD is 0xFe7E19…1E18 paired to SPCX 0x4a0E…5eEa; different CA, quote, name and handle"
        - "No shared domain or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory at l4va.org / @L4VAprotocol"
        - "SPACEHOOD is a LongLauncher DopplerERC20V1 clone, not a vault factory"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xFe7E19…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; creation tx calls LongLauncher.create quoting SPCX 0x4a0E…5eEa. Uniswap v4 SPACEHOOD/SPCX book is live on DexScreener. Distinct from SPCX itself and from DOGE-1/SPCX. No bidirectional project domain or handle this pass. [R-1] [R-2] [R-3] [R-6] [R-7] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-8, CLM-9, CLM-11], note: "" }

links:
  - { kind: app, url: "https://app.long.xyz/tokens/0xfe7e19cbce2f896c6c528bc355baf5a768291e18", authenticity: confirmed }
  - { kind: x, url: "https://x.com/spacehood420", authenticity: unconfirmed }

deployments:
  - label: SPACEHOOD token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:30:00Z
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
      seen: 2026-09-03T03:30:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-10]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-12]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:30:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-11]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:30:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13]
  - label: SPCX quote (create numeraire / pair quote)
    role: token
    address:
      value: "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:30:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-15]

metrics:
  - { kind: tvl, value: 1047191.72, currency: USD, as_of: 2026-09-03T03:29:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xFe7E19…1E18 pair 0x225cc9…94ca SPACEHOOD/SPCX Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-6] }
  - { kind: tvl, value: 2365159.04, currency: USD, as_of: 2026-09-03T03:31:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x225cc9…94ca reserve_in_usd (Gecko names the pool SPCX / SPACEHOOD)", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 2513315.64, currency: USD, as_of: 2026-09-03T03:29:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xFe7E19…1E18 pair 0x225cc9…94ca SPACEHOOD/SPCX volume.h24", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 2499544.64, currency: USD, as_of: 2026-09-03T03:31:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x225cc9…94ca volume_usd.h24", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 4835186.38, currency: USD, as_of: 2026-09-03T03:29:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xfe7e…1e18 volume_usd.h24 (all pools, not the SPCX book)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 12587619, currency: USD, as_of: 2026-09-03T03:29:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xFe7E19…1E18 pair 0x225cc9…94ca SPACEHOOD/SPCX fdv/marketCap", class: claim, receipt_ids: [R-6] }
  - { kind: holders, value: 5192, currency: null, as_of: 2026-09-03T03:30:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xFe7E19…1E18 holders_count", class: claim, receipt_ids: [R-2] }
  - { kind: holders, value: 5097, currency: null, as_of: 2026-09-03T02:40:19Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xfe7e…1e18/info holders.count", class: claim, receipt_ids: [R-9] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a449a (53101722). Token 0xFe7E19…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3Be8B97F…C599. name SPACEHOOD; symbol SPACEHOOD; decimals 18; totalSupply 1e27; owner() 0xeb7c0347…0862 (Airlock, 5695 bytes code). EIP-1967 implementation slot zero." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-2, R-4, R-10, R-11, R-12], result: "Blockscout api/v2: token is_contract true is_verified true name SPACEHOOD proxy_type eip1167 creator_address_hash DopplerERC20V1Factory 0x1B37…b69a creation_transaction_hash 0x44d4d3df…2218 implementations DopplerERC20V1 0x3Be8B97F…C599. Token symbol SPACEHOOD holders_count 5192 total_supply 1e27. Tx timestamp 2026-07-14T14:48:13Z block 9613234 from EOA 0x1Ae51740…5305 to LongLauncher 0x22e9…eeED method create status ok; decoded numeraire 0x4a0E65A3…5eEa token factory 0x1B37…b69a name/symbol SPACEHOOD (hex 5350414345484F4F44) supply 1e27." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T03:29:00Z, receipt_ids: [R-6, R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0xFe7E19…1E18: 10 robinhood uniswap pairs. Top SPACEHOOD/SPCX v4 0x225cc9…94ca quote SPCX 0x4a0E65A3…5eEa liquidity.usd 1047191.72 volume.h24 2513315.64 marketCap 12587619 pairCreatedAt 1784040493000 info.websites app.long.xyz/tokens/0xfe7e… info.socials []. Gecko pool 0x225cc9…94ca name SPCX / SPACEHOOD pool_created_at 2026-07-14T14:48:13Z reserve_in_usd 2365159.04 volume_usd.h24 2499544.64 fdv_usd 609.56 dex bankr-robinhood (base SPCX, quote SPACEHOOD). Gecko token fdv_usd 13010106.88 volume_usd.h24 4835186.38. Gecko info websites [] twitter_handle null holders.count 5097." }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-3, R-14, R-15], result: "SPCX 0x4a0E65A3…5eEa eth_getCode 283 bytes; name Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token; symbol SPCX. App-dossier SPCX 0x32eB7919…Db7 eth_getCode empty. DOGE-1 0x3eC8A817…4c03 eth_getCode 3248 bytes; name DOGE-1; symbol DOGE-1. LongLauncher code 5826 bytes; DopplerERC20V1Factory 1912; Airlock 5695; DopplerERC20V1 13927." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-5, R-6, R-9, R-16], result: "LONG token page lists $SPACEHOOD, CA 0xfe7e19…1e18, anchored to SPCX 0x4a0e65…5eea, supply 1,000,000,000, Social Links empty, fee receiver 0x1Ae517…5305 unclaimed $1,162,954.49. DexScreener websites that same LONG URL and empty socials. Gecko info twitter_handle null websites []. @spacehood420 bio contains the same CA and @longdotxyz; the LONG page and DexScreener do not link the handle." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create minted a 1e9-supply DopplerERC20V1 EIP-1167 clone into a Uniswap v4 pool quoted against SPCX 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa (Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token)", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-3, R-4, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "SPACEHOOD", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "SPACEHOOD", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: identity.handle, value: "NULL — DexScreener socials empty; Gecko twitter_handle null; LONG Social Links empty; @spacehood420 bio contains the CA, unconfirmed-official", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-6, R-9, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-3, R-4, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: relationship, value: "Created via LongLauncher.create 2026-07-14T14:48:13Z at 0x22e99278308B393ea1260859B181AD7E78f5eeED; creator_address_hash DopplerERC20V1Factory 0x1B37…b69a; create from EOA 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305, which is also LongLauncher creator_address_hash and the LONG token-page fee receiver", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-4, R-5, R-11], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from SPCX 0x4a0E65A3…5eEa (BeaconProxy Stock, holders_count 70989) and from DOGE-1 0x3eC8A817…4c03 (name/symbol DOGE-1, DexScreener DOGE-1/SPCX pair 0x037dea9a…d54c). App-dossier SPCX 0x32eB7919…Db7 has empty code on 4663 this pass.", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-14, R-15, R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Primary book SPACEHOOD/SPCX Uniswap v4 pair 0x225cc98f7d66b29fef96377becc7bf89582e2ab7b923a09aee9719fd80eb94ca quote 0x4a0E65A3…5eEa; DexScreener also lists SPACEHOOD/USDG, SPACEHOOD/ETH and SPACEHOOD/WETH books with less liquidity", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener SPACEHOOD/SPCX Uniswap v4 liquidity.usd 1047191.72 volume.h24 2513315.64 marketCap 12587619", class: verified, observed_at: 2026-09-03T03:29:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Gecko pool 0x225cc9…94ca reserve_in_usd 2365159.04 volume_usd.h24 2499544.64 fdv_usd 609.56 (Gecko names the pool SPCX / SPACEHOOD and treats SPCX as base)", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: 5192, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: 5097, class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Gecko SPACEHOOD/SPCX HTML holders 70.9K; Blockscout SPCX holders_count 70989", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-18, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: control.owner, value: "owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-3, R-13], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: control.proxy, value: "EIP-1167 minimal proxy; implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599, verified file src/tokens/DopplerERC20V1.sol; EIP-1967 implementation slot zero", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-3, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-18, field: control.privileged-role, value: "LONG token page fee receiver 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305; claimed $0 unclaimed $1,162,954.49 this pass", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-20, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "Gecko attributes pool 0x225cc9…94ca to dex id bankr-robinhood; DexScreener labels the same id Uniswap v4 dexId uniswap", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-22, field: security.audit, value: "No audit report URL was located on the LONG token page, DexScreener, Gecko token info, @spacehood420, or the DopplerERC20V1 source header this pass", class: unknown, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener websites is the LONG pad token page; Gecko info websites []", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-6, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@spacehood420.role", value: project, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@spacehood420.slug", value: spacehood, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@spacehood420.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-6, R-9, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: economics.metric, value: "@spacehood420 2026-09-02: ~$1.35M in creator fees; if 50/50 split, ~$675k in SPCX / 4,746 shares", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: candidate, value: "spacehood | SPACEHOOD | @spacehood420 | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: other, value: "DexScreener token profile text: launched on LONG with SPCX Robinhood stock token; 20% of SPCX supply already locked in LP. This pass the SPACEHOOD/SPCX book shows pooled SPCX 3,444.86 vs SPCX total_supply 46963.236e18 (~7%)", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-20, R-15], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-11, CLM-12]
    material_effect: "SPACEHOOD/SPCX liquidity is $1,047,191.72 on DexScreener and $2,365,159.04 on Gecko reserve_in_usd; Gecko pool fdv_usd 609.56 is the SPCX-as-base figure, not SPACEHOOD market cap"
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-10, CLM-21]
    material_effect: "DexScreener labels pool 0x225cc9…94ca Uniswap v4; Gecko attributes the same id to bankr-robinhood and names it SPCX / SPACEHOOD"
    status: open
    resolution: null
  - id: CON-3
    field: economics.metric
    claim_ids: [CLM-13, CLM-14, CLM-15]
    material_effect: "SPACEHOOD holders are 5192 on Blockscout and 5097 on Gecko token info; the Gecko pool HTML shows 70.9K, which matches SPCX holders_count 70989, not this token"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "SPACEHOOD created through LongLauncher against SPCX"
    summary: "Tx 0x44d4d3df… called LongLauncher.create; SPACEHOOD 0xFe7E19…1E18 was created at block 9613234 quoting SPCX 0x4a0E…5eEa."
    occurred_at: 2026-07-14T14:48:13Z
    observed_at: 2026-09-03T03:30:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-2
    type: company
    title: "@longdotxyz posted SPACEHOOD/SPCX among Diamond buybacks"
    summary: "Official LONG account: Diamond Release Part Two executed buybacks on SPACEHOOD ($SPCX pair) plus MU and MSFT pairs."
    occurred_at: 2026-08-21T18:58:29Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-3
    type: ct
    title: "@spacehood420 posted ~$1.35M creator fees"
    summary: "@spacehood420 posted ~$1.35M in creator fees and, at a 50/50 split, ~$675k / 4,746 SPCX. LONG token page shows unclaimed $1,162,954.49 to fee receiver 0x1Ae517…5305."
    occurred_at: 2026-09-02T19:25:31Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [economics.metric, control.privileged-role]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-5, R-19]
  - id: EVT-4
    type: ct
    title: "@spacehood420 posted SPACEHOOD as SPCX distribution"
    summary: "@spacehood420 quoted @Natan_benish: $SPACEHOOD is onchain distribution for $SPCX; $AI did it for NVDA."
    occurred_at: 2026-09-03T02:58:13Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: onchain
    title: "DexScreener and Gecko disagree on SPACEHOOD/SPCX liquidity"
    summary: "DexScreener SPACEHOOD/SPCX Uniswap v4 liq $1,047,191.72; Gecko same pool id reserve $2,365,159.04 and names it SPCX / SPACEHOOD on bankr-robinhood."
    occurred_at: 2026-09-03T03:31:00Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [economics.metric, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6, R-7]
  - id: EVT-6
    type: company
    title: "@EARNONHOOD posted STOCK MEMES Omnipool including SPACEHOOD"
    summary: "@EARNONHOOD posted Omnipool 0x00e7…38A6 for AI, BONER, MOO, SPACEHOOD and OPTIMUS."
    occurred_at: 2026-09-02T14:03:03Z
    observed_at: 2026-09-03T03:35:00Z
    affected_fields: [relationship, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0xFe7E19…1E18 SPACEHOOD", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-6, CLM-17, CLM-20, CLM-28], excerpt: "hash 0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18 is_contract true is_verified true name SPACEHOOD proxy_type eip1167 creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x44d4d3df6a420ecf63d182f7a45a83f26d9bd541f69c042974ef021214932218 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xFe7E19…1E18", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-13, CLM-20], excerpt: "name SPACEHOOD symbol SPACEHOOD decimals 18 type ERC-20 holders_count 5192 total_supply 1000000000000000000000000000 circulating_market_cap null volume_24h null." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / owner at block 53101722", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-16, CLM-17, CLM-19], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32a449a. Token code 44 B EIP-1167 impl 0x3Be8B97F…C599. name SPACEHOOD symbol SPACEHOOD decimals 18 totalSupply 1e27 owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862 owner code 5695 B. EIP-1967 slot zero." }
  - { id: R-4, publisher: Blockscout, title: "Creation tx 0x44d4d3df…", url: "https://robinhoodchain.blockscout.com/tx/0x44d4d3df6a420ecf63d182f7a45a83f26d9bd541f69c042974ef021214932218", published_at: 2026-07-14T14:48:13Z, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-6, CLM-8, EVT-1], excerpt: "timestamp 2026-07-14T14:48:13.000000Z block_number 9613234 from 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create status ok. decoded numeraire 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa token factory 0x1B37D3a7…b69a name/symbol SPACEHOOD supply 1e27." }
  - { id: R-5, publisher: LONG, title: "$SPACEHOOD token page", url: "https://app.long.xyz/tokens/0xfe7e19cbce2f896c6c528bc355baf5a768291e18", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-18, EVT-3], excerpt: "$SPACEHOOD SPACEHOOD. Anchored to SPCX. CA 0xfe7e19…1e18. Anchored to SPCX 0x4a0e65…5eea. Supply 1,000,000,000. Social Links empty. Fee receiver 0x1Ae517…5305 Claimed $0 Unclaimed $1,162,954.49. Trade on Matcha Meta DEX." }
  - { id: R-6, publisher: DexScreener, title: "Token pairs API 0xFe7E19…1E18", url: "https://api.dexscreener.com/latest/dex/tokens/0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-1, CLM-5, CLM-10, CLM-11, CLM-19, CLM-21, CLM-23, CLM-28, EVT-5], excerpt: "SPACEHOOD/SPCX pair 0x225cc98f7d66b29fef96377becc7bf89582e2ab7b923a09aee9719fd80eb94ca dexId uniswap labels [v4] quote SPCX 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa liquidity.usd 1047191.72 volume.h24 2513315.64 marketCap 12587619. info.websites https://app.long.xyz/tokens/0xfe7e19cbce2f896c6c528bc355baf5a768291e18 info.socials []." }
  - { id: R-7, publisher: GeckoTerminal, title: "SPCX / SPACEHOOD pool API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x225cc98f7d66b29fef96377becc7bf89582e2ab7b923a09aee9719fd80eb94ca", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-10, CLM-12, CLM-21, EVT-5], excerpt: "name SPCX / SPACEHOOD pool_created_at 2026-07-14T14:48:13Z fdv_usd 609.561 reserve_in_usd 2365159.0388 volume_usd.h24 2499544.637. relationships.base_token SPCX 0x4a0e65…5eea quote_token SPACEHOOD 0xfe7e19…1e18 dex bankr-robinhood." }
  - { id: R-8, publisher: GeckoTerminal, title: "SPACEHOOD token API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xfe7e19cbce2f896c6c528bc355baf5a768291e18", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12], excerpt: "name SPACEHOOD symbol SPACEHOOD decimals 18 total_supply 1e27 price_usd 0.01301010688 fdv_usd 13010106.876 market_cap_usd null volume_usd.h24 4835186.378 total_reserve_in_usd 2073957.94. Top pool 0x225cc9…94ca." }
  - { id: R-9, publisher: GeckoTerminal, title: "SPACEHOOD token info API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xfe7e19cbce2f896c6c528bc355baf5a768291e18/info", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-5, CLM-14, CLM-23, CLM-26], excerpt: "websites [] twitter_handle null telegram_handle null description null holders.count 5097 last_updated 2026-09-03T02:40:19Z categories Space Themed gt_verified false." }
  - { id: R-10, publisher: Blockscout, title: "DopplerERC20V1 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-17], excerpt: "api/v2/smart-contracts: name DopplerERC20V1 compiler v0.8.26+commit.8a97fa7a is_verified true is_fully_verified false file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-11, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, EVT-1], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED is_contract true is_verified true name LongLauncher creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305 creation_transaction_hash 0x717af93c071b39247b5cec72930b990b917439143f6621d08797090732947cf9." }
  - { id: R-12, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a is_contract true is_verified true name DopplerERC20V1Factory. This address is creator_address_hash on SPACEHOOD." }
  - { id: R-13, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 is_contract true is_verified true name Airlock. This address is owner() on SPACEHOOD." }
  - { id: R-14, publisher: DexScreener, title: "DOGE-1 token pairs API", url: "https://api.dexscreener.com/latest/dex/tokens/0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03", published_at: null, accessed_at: 2026-09-03T03:29:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-9], excerpt: "DOGE-1/SPCX pair 0x037dea9a1851a87f997c42cc9bf18659675f642d01d28fc7b1cc94695a0ad54c quote SPCX 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa liquidity.usd 60462.94 volume.h24 579091.09. Distinct base token from SPACEHOOD 0xFe7E19…1E18." }
  - { id: R-15, publisher: Blockscout, title: "SPCX token 0x4a0E…5eEa", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-29], excerpt: "address_hash 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa name Space Exploration Technologies Corp • Robinhood Token symbol SPCX decimals 18 holders_count 70989 total_supply 46963236000000000000000 type ERC-20. Address is_verified true name BeaconProxy proxy_type eip1967_beacon implementation Stock 0xb35490d6…C5aE2." }
  - { id: R-16, publisher: "@spacehood420", title: "$SPACEHOOD is onchain distribution for $SPCX", url: "https://x.com/spacehood420/status/2095345593665094082", published_at: 2026-09-03T02:58:13Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-5, CLM-24, CLM-25, CLM-26, EVT-4], excerpt: "Profile: Spacehood @spacehood420. Bio: CTO @Spacehood Building the biggest SpaceX movement onchain $SPACEHOOD × $SPCX on @longdotxyz CA: 0xFe7E19CbCe2f896C6C528BC355bAF5a768291E18. Post: $SPACEHOOD is onchain distribution for $SPCX. $AI did it for NVDA. $SPACEHOOD is doing it for $SPCX." }
  - { id: R-17, publisher: Blockscout, title: "DOGE-1 address 0x3eC8…4c03", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03 is_contract true is_verified false name DOGE-1 proxy_type null. token name DOGE-1 symbol DOGE-1 holders_count 773 total_supply 1e27. Distinct from SPACEHOOD 0xFe7E19…1E18." }
  - { id: R-18, publisher: GeckoTerminal, title: "SPACEHOOD/SPCX pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x225cc98f7d66b29fef96377becc7bf89582e2ab7b923a09aee9719fd80eb94ca", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-15], excerpt: "SPACEHOOD/SPCX Price on Bankr (Robinhood). Holders 70.9K. Liquidity $2.4M. 24h Vol $2.54M. Pool 0x225…94ca SPACEHOOD 0xfe7…1e18 SPCX 0x4a0…5eea." }
  - { id: R-19, publisher: "@spacehood420", title: "Creator fees post", url: "https://x.com/spacehood420/status/2095231668218999151", published_at: 2026-09-02T19:25:31Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, EVT-3], excerpt: "The market is pricing $SPACEHOOD like the treasury is empty. It isn’t.~$1.35M in creator fees. If the split is 50/50, that’s ~$675k sitting in $SPCX an additional 4,746 shares." }
  - { id: R-20, publisher: DexScreener, title: "SPACEHOOD / SPCX pair page", url: "https://dexscreener.com/robinhood/0xfe7e19cbce2f896c6c528bc355baf5a768291e18", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-29], excerpt: "$SAPCEHOOD launched on LONG with $SPCX Robinhood stock token. Building the biggest movement for SpaceX and Elon. 20% of $SPCX supply is already locked in LP. Pair 0x225…94ca SPACEHOOD 0xFe7…1E18 SPCX 0x4a0…5eEa. Pooled SPACEHOOD 44,659,908 Pooled SPCX 3,444.86." }
  - { id: R-21, publisher: "@longdotxyz", title: "Diamond Release Part Two", url: "https://x.com/longdotxyz/status/2090876207445557368", published_at: 2026-08-21T18:58:29Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "We've now executed strategic buybacks on 3 OG pairs at LONG: @memorycowmoo ($MU pair), @ClippyMSFT ($MSFT pair), SPACEHOOD ($SPCX pair)." }
  - { id: R-22, publisher: "@EARNONHOOD", title: "STOCK MEMES Omnipool live", url: "https://x.com/EARNONHOOD/status/2095150513520005297", published_at: 2026-09-02T14:03:03Z, accessed_at: 2026-09-03T03:35:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-6], excerpt: "A new Omnipool is live for the 5 largest memes paired with stocks on Robinhood. $AI, $BONER, $MOO, $SPACEHOOD, $OPTIMUS." }

gaps:
  - { priority: P0, question: "Does any surface bidirectionally confirm @spacehood420 as the official handle for 0xFe7E19…1E18?", checked: "DexScreener info.socials []; Gecko twitter_handle null; LONG token page Social Links empty; @spacehood420 bio contains the CA; @longdotxyz Diamond post named SPACEHOOD without a handle, 2026-09-03", next: "re-read DexScreener after a Claim Profile and any LONG post that tags a SPACEHOOD handle" }
  - { priority: P1, question: "Who can claim the LONG token-page fee receiver 0x1Ae517…5305, and is that key the same as LongLauncher deployer?", checked: "create from and LongLauncher creator_address_hash are that EOA; token owner() is Airlock; unclaimed $1,162,954.49 on the LONG page vs @spacehood420 ~$1.35M, 2026-09-03", next: "eth_call the fee-claim path on verified LongLauncher / hook source" }
  - { priority: P1, question: "Why does Gecko report ~2.3x the DexScreener SPACEHOOD/SPCX reserve and attribute the pool to bankr-robinhood?", checked: "DexScreener labels [v4] liq $1.05M; Gecko reserve $2.37M dex bankr-robinhood with SPCX as base, 2026-09-03", next: "compare pool-manager liquidity vs Gecko reserve formula used on AI/NVDA" }
  - { priority: P2, question: "Is there an audit whose scope includes DopplerERC20V1 as used by LongLauncher on 4663?", checked: "LONG token page, DexScreener, Gecko info, @spacehood420, DopplerERC20V1 source header, 2026-09-03", next: "auditor report index for Doppler / long.xyz and a matching commit" }
---

# SPACEHOOD — research packet

## What it is

A one-billion-supply ERC-20 cloned through LongLauncher into a Uniswap v4 pool quoted against SPCX, the SpaceX Robinhood Stock Token at 0x4a0E…5eEa. Traders buy and sell SPACEHOOD on that book. It is not the SPCX stock token and is not DOGE-1, a separate SPCX-quoted token.

Themes: memecoin, stock-paired:SPCX

## Why it matters

SPACEHOOD is a LONG-launched token that prices a memecoin in SPCX instead of ETH or USDG. The same quote asset is used by DOGE-1 at a different CA, so ticker-only pairing is not identity. Census 49 has no spacehood row.

## What could go wrong

USD liquidity on the SPACEHOOD/SPCX book counts both sides, and aggregators disagree on the reserve. Gecko names the pool SPCX / SPACEHOOD and can attach SPCX holder counts to the page. App-dossier SPCX 0x32eB…Db7 has no code on 4663; the live quote is 0x4a0E…5eEa.

## Product and mechanics

LongLauncher.create on 2026-07-14T14:48:13Z minted SPACEHOOD as an EIP-1167 DopplerERC20V1 clone with supply 1e9×1e18 and numeraire SPCX 0x4a0E…5eEa. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. [verified R-3 R-4]

DexScreener labels the primary book Uniswap v4 SPACEHOOD/SPCX pair 0x225cc9…94ca. Secondary SPACEHOOD/USDG, SPACEHOOD/ETH and SPACEHOOD/WETH books exist with less liquidity. Gecko attributes the same pool id to bankr-robinhood and lists SPCX as base. [verified R-6 R-7]

## Control and security

owner() returns Airlock 0xeb7C…0862. The LONG token page names fee receiver 0x1Ae517…5305, the same EOA that sent the create transaction and that created LongLauncher. Unclaimed fees on that page were $1,162,954.49 this pass. [verified R-3 R-11] [claim R-5]

DopplerERC20V1 is verified at src/tokens/DopplerERC20V1.sol (compiler v0.8.26). No audit report URL was located this pass. [verified R-10] [unknown]

## Team and provenance

No project domain. DexScreener websites points at the LONG token page; Gecko info websites and twitter_handle are empty. @spacehood420 bio contains CA 0xFe7E19…1E18 and @longdotxyz; LONG Social Links are empty and the 21 Aug Diamond post named SPACEHOOD without a handle. Flag unconfirmed-official. [claim R-5 R-6 R-9 R-16]

## Economics and activity

DexScreener SPACEHOOD/SPCX Uniswap v4 liquidity $1,047,191.72, 24h volume $2,513,315.64, market cap $12,587,619 at 2026-09-03T03:29Z. Gecko same pool reserve $2,365,159.04, 24h volume $2,499,544.64; Gecko token all-pools 24h volume $4,835,186.38. [verified R-6 R-7 R-8]

Blockscout holders_count 5192. Gecko token info holders.count 5097. Gecko pool HTML holders 70.9K matches SPCX holders_count 70989, not this token. GO-LIVE 2026-09-02 capture was about $982k liquidity and $3.1M volume. [verified R-2 R-9] [claim R-18]

## Material risks

- Quote is SPCX 0x4a0E…5eEa, a private-company Stock Token; SPACEHOOD is not that token and is not DOGE-1. [verified R-14 R-15 R-17]
- Pool USD reserve mixes SPACEHOOD and SPCX; DexScreener and Gecko disagree on the figure. [verified R-6 R-7]
- No bidirectional official handle or domain this pass. [claim R-6 R-9 R-16]
- No audit report URL this pass. [unknown]
- App-dossier SPCX 0x32eB…Db7 has empty code on 4663 this pass. [verified R-3]

## Verification passes

- Receipts: Blockscout address/token/create tx/LongLauncher/factory/Airlock/implementation/SPCX/DOGE-1, RPC with Chrome UA, DexScreener token API and pair page, Gecko token/pool/info, LONG token page, @spacehood420, @longdotxyz, and @EARNONHOOD were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-3 R-4 R-6 R-7]
- Numbers: $1,047,191.72 / $2,513,315.64 is the DexScreener SPACEHOOD/SPCX book, not Gecko token all-pools $4,835,186.38. Gecko pool fdv_usd 609.56 is SPCX-as-base, not SPACEHOOD market cap. Holders 5192 is Blockscout SPACEHOOD, not SPCX 70989. [claim R-6 R-7 R-8 R-2 R-15]
- Adversarial: the strongest contrary reading is that SPACEHOOD is SPCX, is DOGE-1, is the LONG factory, or that 0x32eB…Db7 is the pair quote. Different CAs, names, create paths and empty code on 0x32eB…Db7 argue against those. [verified R-3 R-4 R-14 R-17]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no spacehood / SPACEHOOD / 0xFe7E19…1E18.
- Explorer: Blockscout api/v2 address, token, create tx 0x44d4d3df…, LongLauncher, DopplerERC20V1Factory, Airlock, DopplerERC20V1, SPCX 0x4a0E…5eEa, DOGE-1 0x3eC8…4c03.
- RPC: eth_chainId/eth_blockNumber/eth_getCode/eth_call name/symbol/decimals/totalSupply/owner and SPCX/DOGE-1/0x32eB…Db7 at block 53101722. Bare urllib 403; Chrome UA succeeded.
- Aggregators: DexScreener latest/dex/tokens for SPACEHOOD and DOGE-1; Gecko token, token/info, pool 0x225cc9…94ca. Gecko token/pools 429 this pass.
- Pad page: app.long.xyz/tokens/0xfe7e… Cloudflare-blocked on curl; page fields taken from an opened search snippet and cross-checked against DexScreener websites.
- Social: X keyword SPACEHOOD/SPCX; from:spacehood420; from:longdotxyz SPACEHOOD; user search Spacehood / spacehood420.
- Failed: RPC/Blockscout without UA; LONG HTML via curl; Gecko token/pools rate limit.
- Time: collection 2026-09-03T03:29Z–2026-09-03T03:40Z.
