---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: moo
name: MOO
packet_tier: seed
as_of: 2026-09-03T03:35:00Z
prior_packet: null
supersedes: null
owned_slugs: [moo]
allowed_paths:
  - research/inbox/packets/moo/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Memory cow Moo
  aliases: [MOO]
  symbols: [MOO]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is a Polymarket tweet, not a project site; Blockscout and Gecko list no homepage this pass"
  official_handle: "@memorycowmoo"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or the @memorycowmoo profile this pass"
  possible_matches:
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "MOO is Memory cow Moo at 0xD9dB…1e18 paired to MU 0xfF08…4afD"
        - "No shared domain or handle"
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at @longdotxyz with LongLauncher 0x22e9…eeED"
        - "MOO is the ERC-20 created by LongLauncher.create, entity_kind token, not protocol"
        - "No shared domain or handle"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is the agent at @bankrbot"
        - "@bankrbot 2026-07-23 posted Memory cow Moo CA 0x2e74…fbA3, a different contract with holders_count 2"
        - "Live MOO/MU book is 0xD9dB…1e18 created by LongLauncher.create on 2026-07-20"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "MOO is a DopplerERC20V1 clone in a Uniswap v4 MOO/MU pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xD9dB…1e18 exists on 4663 as an EIP-1167 DopplerERC20V1 clone; creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; LongLauncher.create minted Memory cow Moo / MOO into Uniswap v4 pool 0xc3cc…4aa1 quoted against MU 0xfF08…4afD. DexScreener lists @memorycowmoo; LONG named that handle as the MU pair. Distinct from SEMI/MU at 0x5F03…BaC8. [R-1] [R-3] [R-4] [R-7] [R-8] [R-12] [R-17]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10, CLM-11], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-5, CLM-12], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-8, CLM-19, CLM-20], note: "" }

links:
  - { kind: x, url: "https://x.com/memorycowmoo", authenticity: unconfirmed }

deployments:
  - label: MOO token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0xD9dB30BB0D2b8d2eae3826A1372117E058791e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:28:00Z
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
      seen: 2026-09-03T03:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-20]
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:28:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-6]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:28:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:29:30Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-19]
  - label: Micron Technology • Robinhood Token (pair asset)
    role: token
    address:
      value: "0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:28:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-7, R-23]

metrics:
  - { kind: tvl, value: 1724771.11, currency: USD, as_of: 2026-09-03T03:31:24Z, window: point, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xD9dB…1e18 pair 0xc3cc…4aa1 MOO/MU Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 4482942.70, currency: USD, as_of: 2026-09-03T03:31:24Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc3cc…4aa1 reserve_in_usd", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 6491540.67, currency: USD, as_of: 2026-09-03T03:31:24Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xD9dB…1e18 pair 0xc3cc…4aa1 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 6358275.00, currency: USD, as_of: 2026-09-03T03:31:24Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc3cc…4aa1 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 28902315, currency: USD, as_of: 2026-09-03T03:31:24Z, window: point, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xD9dB…1e18 pair 0xc3cc…4aa1 marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 5998, currency: null, as_of: 2026-09-03T03:28:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xD9dB…1e18 holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:29:30Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com at block 0x32a43f3 (53101555): eth_getCode 0xD9dB…1e18 EIP-1167 pointing at 0x3Be8B97F…C599; owner() 0xeb7c0347…0862; name() Memory cow Moo; symbol() MOO; decimals 18; totalSupply 990127383325029403278235927; EIP-1967 implementation slot zero; owner eth_getCode 11392 bytes" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:28:00Z, receipt_ids: [R-1, R-2, R-4], result: "Blockscout api/v2/addresses/0xD9dB…1e18: is_contract true, is_verified true, name Memory cow Moo, proxy_type eip1167, creator_address_hash 0x1B37D3a7…b69a, creation_transaction_hash 0xdcf46e14…8c09, implementations DopplerERC20V1 0x3Be8B97F…C599. api/v2/tokens: symbol MOO, holders_count 5998, total_supply 990127383325029403278235927. Creation tx to LongLauncher method create timestamp 2026-07-20T18:35:02Z block 14920619" }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-03T03:31:24Z, receipt_ids: [R-7], result: "DexScreener token-pairs/v1/robinhood/0xD9dB…1e18: 13 pairs. MOO/MU Uniswap v4 0xc3cc…4aa1 liquidity.usd 1724771.11 volume.h24 6491540.67 marketCap 28902315 quote MU 0xfF08…4afD; info.socials https://x.com/memorycowmoo" }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T03:31:24Z, receipt_ids: [R-8, R-9], result: "Gecko pool 0xc3cc…4aa1 name MOO / MU reserve_in_usd 4482942.6969 volume_usd.h24 6358274.99670183 fdv_usd 30930281.46 pool_created_at 2026-07-20T18:35:02Z dex bankr-robinhood base 0xd9db…1e18 quote 0xff08…4afd. Token endpoint name Memory cow Moo symbol MOO total_supply 1e27 volume_usd.h24 9801463.00929161 total_reserve_in_usd 3634297.886" }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7, R-10, R-12], result: "DexScreener lists https://x.com/memorycowmoo on the live MOO/MU pair. @longdotxyz 2026-08-21 named @memorycowmoo ($MU pair) as an OG LONG pair. @memorycowmoo bio is $MU / Memory Supercycle. No post from the handle embedding CA 0xD9dB…1e18 was located this pass" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "MOO/MU Uniswap v4 pool 0xc3cc…4aa1 on Robinhood Chain; quote is Micron Technology • Robinhood Token 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD", class: verified, observed_at: 2026-09-03T03:31:24Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.handle, value: "@memorycowmoo", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7, R-10, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "MOO", class: verified, observed_at: 2026-09-03T03:29:30Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xD9dB30BB0D2b8d2eae3826A1372117E058791e18", class: verified, observed_at: 2026-09-03T03:29:30Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: identity.name, value: "Memory cow Moo", class: verified, observed_at: 2026-09-03T03:29:30Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:29:30Z, receipt_ids: [R-1, R-3, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: control.owner, value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock", class: verified, observed_at: 2026-09-03T03:29:30Z, receipt_ids: [R-3, R-19], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: relationship, value: "Creation tx 0xdcf46e14… called LongLauncher.create at 0x22e99278308B393ea1260859B181AD7E78f5eeED on 2026-07-20T18:35:02Z from 0xF415398e3705414F1f02DdBEeFF319b906F6FA07", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-9, field: relationship, value: "creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a is DopplerERC20V1Factory", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Primary pair asset MU (Micron Technology • Robinhood Token 0xfF08…4afD)", class: verified, observed_at: 2026-09-03T03:31:24Z, receipt_ids: [R-4, R-7, R-23], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "Liquidity venue Uniswap v4 for the MOO/MU book (DexScreener labels [v4] dexId uniswap)", class: verified, observed_at: 2026-09-03T03:31:24Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DexScreener MOO/MU Uniswap v4 liquidity.usd 1724771.11", class: verified, observed_at: 2026-09-03T03:31:24Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Gecko MOO/MU pool reserve_in_usd 4482942.70", class: verified, observed_at: 2026-09-03T03:31:24Z, receipt_ids: [R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener MOO/MU volume.h24 6491540.67", class: verified, observed_at: 2026-09-03T03:31:24Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Gecko MOO/MU pool volume_usd.h24 6358274.99670183", class: verified, observed_at: 2026-09-03T03:31:24Z, receipt_ids: [R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Blockscout holders_count 5998", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Launchpad LONG (LongLauncher 0x22e9…eeED plus DopplerERC20V1Factory 0x1B37…b69a)", class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-19, field: other, value: "Distinct from SEMI/MU: SEMI is Semivault.xyz at 0x5F038759F6DE38fD3A85C0440daff1240238BaC8, site semivault.xyz / @Semivaultxyz, creator 0x0D459F23…10aC, holders_count 1232", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-17, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: other, value: "Same-name Bankr deploy 0x2e749fa1035a970c9883231cA7E8A9a58B6CfbA3 is a different Memory cow Moo clone, holders_count 2, created 2026-07-23T13:30:50Z via EntryPoint handleOps", class: claim, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-15, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@memorycowmoo.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: security.audit, value: "No audit report URL was located on DexScreener, Gecko, Blockscout, or the @memorycowmoo profile this pass", class: unknown, observed_at: 2026-09-03T03:35:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: control.proxy, value: "EIP-1167 minimal proxy; implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599, verified", class: verified, observed_at: 2026-09-03T03:29:30Z, receipt_ids: [R-1, R-3, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: "DexScreener MOO/MU marketCap 28902315", class: verified, observed_at: 2026-09-03T03:31:24Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-25, field: "account.@memorycowmoo.role", value: project, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7, R-10, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@memorycowmoo.slug", value: moo, class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7, R-10, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: product.mechanism, value: "Gecko pool endpoint attributes MOO/MU 0xc3cc…4aa1 to dex id bankr-robinhood", class: verified, observed_at: 2026-09-03T03:31:24Z, receipt_ids: [R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-28, field: economics.metric, value: "Gecko token volume_usd.h24 9801463.01 total_reserve_in_usd 3634297.89 fdv_usd 30743021.55", class: verified, observed_at: 2026-09-03T03:28:24Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-29, field: other, value: "Same-ticker MOO/MU copycat bases on DexScreener search: 0x050e47Ae68A0038917E03A6bc61E825bbeBaA211 and 0xEc01358ba4820A5C9809b4c28f9E24D430bC2BA3, each under $13k liquidity", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:29:30Z, receipt_ids: [R-1, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-31, field: economics.metric, value: "Gecko trending_pools page 1 this pass listed SEMI/MU rank 12 and did not list MOO/MU", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:28:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-12, CLM-13, CLM-28]
    material_effect: "MOO/MU liquidity is $1.72M on DexScreener, $4.48M on the Gecko pool, and $3.63M as Gecko token total_reserve_in_usd; a card that collapses them would misstate the book"
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-11, CLM-27]
    material_effect: "DexScreener labels the MOO/MU pool Uniswap v4; Gecko attributes the same pool id to bankr-robinhood"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener and Gecko disagree on MOO/MU liquidity"
    summary: "DexScreener MOO/MU Uniswap v4 liq $1,724,771; Gecko same pool reserve $4,482,943."
    occurred_at: 2026-09-03T03:31:24Z
    observed_at: 2026-09-03T03:31:24Z
    affected_fields: [economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: company
    title: "@memorycowmoo posted $moo as a MU leverage long"
    summary: "@memorycowmoo posted that $moo can be read as a non-liquidable leverage long on $MU."
    occurred_at: 2026-09-03T01:48:28Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-3
    type: ct
    title: "Gate Futures listed MOO in a Robinhood Zone"
    summary: "Gate Futures listed AINVDA, MOO, MICRODUCK, BONER and SPACEHOOD for futures, bots, and copy trading."
    occurred_at: 2026-09-02T13:58:00Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: ct
    title: "@LBankUpdates posted a world-premiere $MOO listing"
    summary: "@LBankUpdates posted a world-premiere listing of $MOO (Memory cow Moo) and tagged @memorycowmoo."
    occurred_at: 2026-09-01T06:59:04Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [activity.status, identity.handle]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-5
    type: company
    title: "LONG posted buybacks naming @memorycowmoo MU pair"
    summary: "@longdotxyz posted strategic buybacks on 3 OG pairs, naming @memorycowmoo ($MU pair)."
    occurred_at: 2026-08-21T18:58:29Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [identity.handle, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-6
    type: ct
    title: "@bankrbot posted a different Memory cow Moo CA"
    summary: "@bankrbot posted Memory cow Moo CA 0x2e74…fbA3 quoted in $MU; that token has 2 holders."
    occurred_at: 2026-07-23T13:31:31Z
    observed_at: 2026-09-03T03:32:00Z
    affected_fields: [deployment.address, identity.name]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-15, R-16]
  - id: EVT-7
    type: onchain
    title: "LongLauncher.create minted Memory cow Moo on 20 Jul"
    summary: "Tx 0xdcf46e14… called LongLauncher.create; token 0xD9dB…1e18 created at block 14920619."
    occurred_at: 2026-07-20T18:35:02Z
    observed_at: 2026-09-03T03:28:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0xD9dB…1e18 Memory cow Moo", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xD9dB30BB0D2b8d2eae3826A1372117E058791e18", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-9, CLM-23, CLM-30, CLM-32], excerpt: "hash 0xD9dB30BB0D2b8d2eae3826A1372117E058791e18; is_contract true; is_verified true; name Memory cow Moo; proxy_type eip1167; creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a; creation_transaction_hash 0xdcf46e142ceb38b4c00fa7110ebaf7cacd01a2a18ba25b6809dd28a85ac08c09; implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xD9dB…1e18", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xD9dB30BB0D2b8d2eae3826A1372117E058791e18", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-16, CLM-32], excerpt: "name Memory cow Moo; symbol MOO; decimals 18; type ERC-20; holders_count 5998; total_supply 990127383325029403278235927." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode / owner / name / symbol at block 53101555", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:29:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-5, CLM-6, CLM-7, CLM-23], excerpt: "eth_blockNumber 0x32a43f3. eth_getCode 0xD9dB…1e18 EIP-1167 prefix 0x3d3d3d3d363d3d37363d733be8b97fd0e713b5abe0649fa830223b6b4bc599. owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. name() Memory cow Moo. symbol() MOO. decimals 18. totalSupply 990127383325029403278235927. owner eth_getCode 11392 bytes. EIP-1967 implementation slot zero." }
  - { id: R-4, publisher: Blockscout, title: "Creation tx 0xdcf46e14…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xdcf46e142ceb38b4c00fa7110ebaf7cacd01a2a18ba25b6809dd28a85ac08c09", published_at: 2026-07-20T18:35:02.000000Z, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-18, EVT-7], excerpt: "timestamp 2026-07-20T18:35:02.000000Z; block_number 14920619; from 0xF415398e3705414F1f02DdBEeFF319b906F6FA07; to 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher; method create; status ok; result success. decoded create data includes 1e27, 1e27, MU 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD, factory 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-5, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-18, EVT-7], excerpt: "api/v2/smart-contracts: name LongLauncher; is_verified true; compiler v0.8.26+commit.8a97fa7a; file_path src/LongLauncher.sol." }
  - { id: R-6, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-18], excerpt: "is_contract true; is_verified true; name DopplerERC20V1Factory; compiler v0.8.26; file src/tokens/DopplerERC20V1Factory.sol; is_partially_verified true. RPC eth_getCode 3826 bytes." }
  - { id: R-7, publisher: DexScreener, title: "token-pairs/v1 MOO on robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xD9dB30BB0D2b8d2eae3826A1372117E058791e18", published_at: null, accessed_at: 2026-09-03T03:31:24Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-6, CLM-10, CLM-11, CLM-12, CLM-14, CLM-17, CLM-21, CLM-24, CLM-25, CLM-26, CLM-30, EVT-1], excerpt: "13 pairs. Top MOO/MU Uniswap v4 pairAddress 0xc3cc877a8a7d28efdb5dbec9ae71724652431e6411aa1a9fc8928028da554aa1 labels [v4] quote Micron Technology • Robinhood Token / MU 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD liquidity.usd 1724771.11 volume.h24 6491540.67 marketCap 28902315. info.socials https://x.com/memorycowmoo. info.websites Polymarket tweet." }
  - { id: R-8, publisher: GeckoTerminal, title: "MOO/MU pool API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc3cc877a8a7d28efdb5dbec9ae71724652431e6411aa1a9fc8928028da554aa1", published_at: null, accessed_at: 2026-09-03T03:31:24Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-13, CLM-15, CLM-17, CLM-27, EVT-1], excerpt: "name MOO / MU; address 0xc3cc…4aa1; reserve_in_usd 4482942.6969; volume_usd.h24 6358274.99670183; fdv_usd 30930281.46; pool_created_at 2026-07-20T18:35:02Z; relationships.dex.data.id bankr-robinhood; base robinhood_0xd9db30bb0d2b8d2eae3826a1372117e058791e18; quote robinhood_0xff080c8ce2e5feadaca0da81314ae59d232d4afd." }
  - { id: R-9, publisher: GeckoTerminal, title: "Memory cow Moo token API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xd9db30bb0d2b8d2eae3826a1372117e058791e18", published_at: null, accessed_at: 2026-09-03T03:28:24Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-28], excerpt: "name Memory cow Moo; symbol MOO; decimals 18; total_supply 1e27; price_usd 0.03074302155; fdv_usd 30743021.5498222; total_reserve_in_usd 3634297.8864459368; volume_usd.h24 9801463.00929161; market_cap_usd null; coingecko_coin_id null. Top pool 0xc3cc…4aa1." }
  - { id: R-10, publisher: "@memorycowmoo", title: "the memory cow profile", url: "https://x.com/memorycowmoo", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-2, CLM-21, CLM-25, CLM-26], excerpt: "Display name the memory cow, handle @memorycowmoo. Bio: $MU / i mean, moo / in for the Memory Supercycle / the community mascot of @MicronTech (unaffiliated). ~1796 followers." }
  - { id: R-11, publisher: "@memorycowmoo", title: "$moo as MU leverage long", url: "https://x.com/memorycowmoo/status/2095328037214748795", published_at: 2026-09-03T01:48:28Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "you can think of $moo as a non-liquidable leverage long position on $MU / the entire memory sector, and also a vehicle that drives the minting of tokenized $MU. In theory, this applies to every stock paring @longdotxyz." }
  - { id: R-12, publisher: "@longdotxyz", title: "Diamond Release Part Two", url: "https://x.com/longdotxyz/status/2090876207445557368", published_at: 2026-08-21T18:58:29Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-25, CLM-26, EVT-5], excerpt: "We've now executed strategic buybacks on 3 OG pairs at LONG: @memorycowmoo ($MU pair), @ClippyMSFT ($MSFT pair), SPACEHOOD ($SPCX pair)." }
  - { id: R-13, publisher: "@LBankUpdates", title: "World Premiere listing $MOO", url: "https://x.com/LBankUpdates/status/2094681426650349987", published_at: 2026-09-01T06:59:04Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "World Premiere listing. $MOO (Memory cow Moo) will be listed on LBank! @memorycowmoo. Memory cow Moo (symbol MOO) is a meme token on Robinhood Chain built on a pun: it fuses the memory of chip giant Micron with a cow's moo into a single memory cow." }
  - { id: R-14, publisher: Gate, title: "Robinhood Zone futures listing", url: "https://www.gate.com/announcements/article/101517", published_at: 2026-09-02T13:58:00Z, accessed_at: 2026-09-03T03:32:00Z, kind: news, authority: independent, authenticity: confirmed, supports: [EVT-3], excerpt: "Gate Futures Robinhood Launches lists AINVDA, MOO, MICRODUCK, BONER and SPACEHOOD for Futures Trading, Bots, and Copy Trading. MOO (Memory Cow Moo): Inspired by Micron Technology’s Nasdaq ticker symbol [MU]—which sounds like a cow's [Moo]—MOO is a native community meme token on the Robinhood Chain." }
  - { id: R-15, publisher: "@bankrbot", title: "deployed Memory cow Moo 0x2e74…", url: "https://x.com/bankrbot/status/2080284676955295787", published_at: 2026-07-23T13:31:31Z, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-20, EVT-6], excerpt: "deployed Memory cow Moo — contract address 0x2e749fa1035a970c9883231cA7E8A9a58B6CfbA3 pool quoted in $MU (Micron Technology) stock on robinhood chain." }
  - { id: R-16, publisher: Blockscout, title: "Stale Memory cow Moo 0x2e74…fbA3", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x2e749fa1035a970c9883231cA7E8A9a58B6CfbA3", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-20, EVT-6], excerpt: "hash 0x2e749fa1035a970c9883231cA7E8A9a58B6CfbA3; is_contract true; is_verified true; name Memory cow Moo; proxy_type eip1167; creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a; creation_transaction_hash 0xc62ece038108428ccbfe9c959a87b98a1316e962af476a84f1868392ec404fbe timestamp 2026-07-23T13:30:50Z method handleOps to EntryPoint; token holders_count 2 total_supply 1e29." }
  - { id: R-17, publisher: DexScreener, title: "SEMI/MU pair (same-stock, not MOO)", url: "https://api.dexscreener.com/latest/dex/search?q=SEMI%20MU", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-19], excerpt: "SEMI / MU base 0x5F038759F6DE38fD3A85C0440daff1240238BaC8 name semivault.xyz pair 0xe35635d91eccd183aa5925c7a26bdaedef1fa07e312742689cc39afd8f04e121 liquidity.usd 1106118 volume.h24 2406919.38. websites https://www.semivault.xyz/v2 socials https://x.com/Semivaultxyz. Distinct base from Memory cow Moo 0xD9dB…1e18." }
  - { id: R-18, publisher: Blockscout, title: "SEMI 0x5F03…BaC8 Semivault.xyz", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x5F038759F6DE38fD3A85C0440daff1240238BaC8", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19], excerpt: "hash 0x5F038759F6DE38fD3A85C0440daff1240238BaC8; name Semivault.xyz; is_contract true; is_verified true; creator_address_hash 0x0D459F23F801C1833B393877D3835f4992D310aC; creation_transaction_hash 0xb79fba5b778bacdd31a50c0b96e5fc8b5d87024ca41cdf62924952f89fed353a; proxy_type null. token name Semivault.xyz symbol SEMI holders_count 1232." }
  - { id: R-19, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; is_contract true; is_verified true; name Airlock. This address is owner() on the MOO token." }
  - { id: R-20, publisher: Blockscout, title: "DopplerERC20V1 implementation 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-23], excerpt: "is_contract true; is_verified true; name DopplerERC20V1; compiler v0.8.26+commit.8a97fa7a; file_path src/tokens/DopplerERC20V1.sol." }
  - { id: R-21, publisher: DexScreener, title: "MOO MU search (copycat pairs)", url: "https://api.dexscreener.com/latest/dex/search?q=MOO%20MU", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-29], excerpt: "robinhood uniswap MOO/MU 0x050e47Ae68A0038917E03A6bc61E825bbeBaA211 pair 0xc2ec49fe…c096 liq 10634.36 vol 978.2. robinhood uniswap MOO/MU 0xEc01358ba4820A5C9809b4c28f9E24D430bC2BA3 pair 0xa3f533a0…10f8 liq 12670.87 vol 24.26. Distinct bases from 0xD9dB…1e18." }
  - { id: R-22, publisher: GeckoTerminal, title: "Robinhood trending pools page 1", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools?page=1", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-31], excerpt: "Rank 12 SEMI / MU 0xe35635d91eccd183aa5925c7a26bdaedef1fa07e312742689cc39afd8f04e121 reserve_in_usd 1092829.922 volume_usd.h24 2820174.04422289. First 20 rows this pass did not include MOO / MU." }
  - { id: R-23, publisher: Blockscout, title: "MU 0xfF08…4afD Micron Technology • Robinhood Token", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD", published_at: null, accessed_at: 2026-09-03T03:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "address_hash 0xfF080c8ce2E5feadaCa0Da81314Ae59D232d4afD; name Micron Technology • Robinhood Token; symbol MU; decimals 18; holders_count 30950; exchange_rate 949.32; icon_url cdn.robinhood.com. Address page name BeaconProxy is_verified true." }

gaps:
  - { priority: P0, question: "Does @memorycowmoo post CA 0xD9dB…1e18, or is there a site that bidirectionally links the handle to that contract?", checked: "DexScreener info.socials lists the handle; LONG named it as the MU pair; keyword search from:memorycowmoo 0x returned no CA this pass, 2026-09-03", next: "re-read the handle for a CA post and any new homepage" }
  - { priority: P1, question: "Is there an audit of DopplerERC20V1 / LongLauncher covering this clone?", checked: "DexScreener, Gecko, Blockscout token page, @memorycowmoo profile, 2026-09-03", next: "search LONG docs and the DopplerERC20V1 source comments for an audit URL" }
  - { priority: P1, question: "What privileged paths sit on Airlock 0xeb7C…0862 for this token?", checked: "owner() returns Airlock with non-empty code; EIP-1967 slot zero, 2026-09-03", next: "read Airlock verified source for setters that bind this clone" }
  - { priority: P2, question: "Which liquidity figure is the MOO/MU book: DexScreener $1.72M, Gecko pool $4.48M, or Gecko token reserve $3.63M?", checked: "token-pairs/v1 and Gecko pool/token endpoints at 2026-09-03T03:31Z", next: "compare pool token balances via RPC against both aggregators" }
  - { priority: P2, question: "Does the Bankr clone 0x2e74…fbA3 still have any live pool, or is it inert at 2 holders?", checked: "DexScreener latest/dex/tokens 0x2e74 returned pairs null; Blockscout holders_count 2, 2026-09-03", next: "watch that address if a pool appears" }
---

# MOO — research packet

## What it is

A LONG-launched ERC-20 that trades in a Uniswap v4 pool quoted against tokenized Micron (MU). LongLauncher.create deployed Memory cow Moo on 20 Jul 2026. Traders buy and sell MOO against MU on that book. @memorycowmoo is the handle DexScreener lists and LONG named as the MU pair.

Themes: memecoin, stock-paired:MU, rwa

## Why it matters

MOO is a stock-paired token on Robinhood Chain whose quote asset is the Micron Robinhood Token, not WETH or USDG. LONG named it an OG $MU pair. SEMI also quotes MU and is a different contract.

## What could go wrong

DexScreener and Gecko disagree on MOO/MU liquidity by more than 2x. A second Memory cow Moo clone exists at 0x2e74…fbA3 from a Bankr post. The handle has not posted this CA this pass.

## Product and mechanics

LongLauncher.create at 2026-07-20T18:35:02Z cloned DopplerERC20V1 as Memory cow Moo / MOO and seeded Uniswap v4 pool 0xc3cc…4aa1 against MU 0xfF08…4afD. creator_address_hash is DopplerERC20V1Factory. Secondary MOO/USDG and MOO/WETH books exist with less liquidity than the MU book. [verified R-4 R-7 R-8]

Gecko attributes the same pool id to dex bankr-robinhood. DexScreener labels it Uniswap v4. [verified R-7 R-8]

## Control and security

owner() returns Airlock 0xeb7C…0862 with non-empty code. The token is an EIP-1167 proxy to verified DopplerERC20V1 0x3Be8…C599. EIP-1967 implementation slot is zero. [verified R-3 R-19 R-20]

No audit report URL was located this pass. [unknown]

## Team and provenance

DexScreener lists https://x.com/memorycowmoo. @longdotxyz named @memorycowmoo as the $MU pair. The handle bio is $MU. No post embedding CA 0xD9dB…1e18 was located; flag unconfirmed-official. [claim R-7 R-10 R-12]

@bankrbot posted a different Memory cow Moo CA 0x2e74…fbA3 on 23 Jul 2026. That clone has holders_count 2. [verified R-15 R-16]

## Economics and activity

DexScreener MOO/MU Uniswap v4 liquidity.usd 1724771.11, volume.h24 6491540.67, marketCap 28902315 at 2026-09-03T03:31:24Z. Gecko same pool reserve_in_usd 4482942.70, volume_usd.h24 6358274.99670183, fdv_usd 30930281.46. Gecko token volume_usd.h24 9801463.01 is all pools. Blockscout holders_count 5998. [claim R-2 R-7 R-8 R-9]

Gecko trending_pools page 1 this pass listed SEMI/MU at rank 12 and did not list MOO/MU. [claim R-22]

## Material risks

- DexScreener $1.72M, Gecko pool $4.48M, and Gecko token reserve $3.63M disagree on liquidity. [verified R-7 R-8 R-9]
- Same-name clone 0x2e74…fbA3 and two low-liquidity MOO/MU copycat bases exist. [verified R-16] [claim R-21]
- Handle-to-CA link is unconfirmed-official this pass. [claim R-10]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/Airlock/MU/SEMI/stale clone and the create tx, RPC name/symbol/owner/code, DexScreener token-pairs and search, Gecko pool/token/trending, @memorycowmoo, @longdotxyz, @LBankUpdates, Gate, and @bankrbot were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-7 R-8]
- Numbers: 1724771.11 is DexScreener MOO/MU liquidity, not the 4482942.70 Gecko pool reserve or the 3634297.89 token total_reserve. 6491540.67 is that pair's 24h volume, not the 9801463.01 token all-pools figure. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that Bankr CA 0x2e74…fbA3 is canonical Memory cow Moo, or that SEMI is this MU pair. 0x2e74 has 2 holders and no DexScreener pairs; SEMI is 0x5F03…BaC8 / semivault.xyz / @Semivaultxyz. Live book 0xD9dB…1e18 was created by LongLauncher three days earlier. [inference R-15 R-16 R-17 R-18]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no moo / MOO / Memory cow Moo / 0xD9dB…1e18. Discovery inventory lists moo and semi as candidates.
- Explorer: Blockscout api/v2 token, impl, factory, Airlock, MU, SEMI, stale 0x2e74, create tx 0xdcf46e14…, stale tx 0xc62ece03… handleOps. RPC eth_getCode/eth_call with Chrome UA at block 53101555.
- Aggregators: DexScreener token-pairs/v1, latest/dex/tokens, search MOO MU and SEMI MU; Gecko pool, token, trending_pools page 1.
- Social: X user search memorycowmoo; from:memorycowmoo; from:longdotxyz memorycowmoo; @bankrbot deploy tweet; @LBankUpdates; Gate announcement.
- Failed: GET api.robinhood.com/rhj/assets returned assets length 0 this pass; Gecko token lookup of Bankr CA 0x2e74 showed empty pools; DexScreener latest/dex/tokens 0x2e74 pairs null; from:memorycowmoo 0x returned no CA.
- Time: collection 2026-09-03T03:00Z–2026-09-03T03:35Z.
