---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: statics-protocol
name: Statics Protocol
packet_tier: full
as_of: 2026-09-02T22:59:00Z
prior_packet: null
supersedes: null
owned_slugs: [statics-protocol]
allowed_paths:
  - research/inbox/packets/statics-protocol/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Statics Protocol
  aliases: [Statics, EqualFi Labs]
  symbols: [STATICS, STATOPS]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://staticsprotocol.com
  official_handle: "@StaticsProtocol"
  repository: https://github.com/EqualFiLabs/statics
  possible_matches:
    - slug: artificial-inu
      signals: [shared-deployer, shared-address]
      contrary_signals:
        - "Both tokens are DopplerERC20V1 EIP-1167 clones owned by Airlock 0xeb7C…0862; STATICS is 0x2d8d…EAdd and $AI is 0x2E8c…1e18"
        - "Different domains (staticsprotocol.com vs artificialinu.com) and handles (@StaticsProtocol vs @ArtificiallyInu)"
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "STATICS was created by Airlock.create, not LongLauncher.create; LongLauncher 0x22e9…eeED is the LONG factory used by $AI"
        - "Statics docs and genesis manifest describe a standalone Doppler Genesis, not app.long.xyz"
    - slug: earn-protocol
      signals: [shared-deployer]
      contrary_signals:
        - "Pulled STATICS owner() is the same Airlock that census research also records on EARN; tokens, domains and handles differ"

classification:
  primary_leaf: rwa-products/redeemable-basket
  secondary_leaves: [trading/amm-native]
  mechanism_tags: [amm, vault, nft, rwa, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Genesis STATICS, Operators NFT, Genesis vault and the STATICS/WETH Uniswap v4 pool exist with non-empty code on chain 4663; Airlock.create launched the token on 2026-08-27. Census still says beta because the 30 Aug official post says the hook DEX is not live and credit is off. The basket, Dollar and Diamond suite is documented as a separate rollout; the testnet Diamond address is empty on 4663. [R-1] [R-4] [R-8] [R-9] [R-14] [R-19]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6, CLM-8, CLM-9], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-5, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-11], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-16, CLM-18, CLM-20], note: "" }

links:
  - { kind: site, url: "https://staticsprotocol.com", authenticity: confirmed }
  - { kind: app, url: "https://staticsprotocol.com/app", authenticity: confirmed }
  - { kind: docs, url: "https://docs.staticsprotocol.com/docs/rollout/", authenticity: confirmed }
  - { kind: docs, url: "https://docs.staticsprotocol.com/docs/tokenomics/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/StaticsProtocol", authenticity: confirmed }
  - { kind: github, url: "https://github.com/EqualFiLabs/statics", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/EqualFi", authenticity: unconfirmed }
  - { kind: other, url: "https://opensea.io/collection/statics-operators", authenticity: unconfirmed }

deployments:
  - label: STATICS token (DopplerERC20V1 EIP-1167 clone)
    role: token
    address:
      value: "0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-4, R-5, R-8, R-14]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-8]
  - label: DopplerERC20V1Factory
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-8]
  - label: Airlock (token owner(); launch tx to)
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-9, R-14]
  - label: StaticsGenesisVault
    role: vault
    address:
      value: "0x8AAAF9a22f439589987B8f1e69d79ca4f648C297"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-14, R-8]
  - label: Statics Operators NFT (StaticsGenesis, STATOPS)
    role: other
    address:
      value: "0xad5E9F96A91D1A6F550580b157af2068A0e8F0BE"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-11, R-14, R-8]
  - label: Doppler pool initializer hook (STATICS/WETH canonical pool hook)
    role: other
    address:
      value: "0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-12, R-14]

metrics:
  - { kind: holders, value: 1026, currency: null, as_of: 2026-09-02T22:54:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x2d8d…EAdd holders_count", class: claim, receipt_ids: [R-5] }
  - { kind: tvl, value: 14246101.38, currency: USD, as_of: 2026-09-02T22:55:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x2d8d…EAdd pair 0xe79228…e8a STATICS/WETH Uniswap v4 liquidity.usd", class: claim, receipt_ids: [R-12] }
  - { kind: volume_24h, value: 3477557.3, currency: USD, as_of: 2026-09-02T22:55:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x2d8d…EAdd pair 0xe79228…e8a volume.h24", class: claim, receipt_ids: [R-12] }
  - { kind: market_cap, value: 22501108, currency: USD, as_of: 2026-09-02T22:55:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x2d8d…EAdd pair 0xe79228…e8a marketCap/fdv", class: claim, receipt_ids: [R-12] }
  - { kind: tvl, value: -3408657.19, currency: USD, as_of: 2026-09-02T22:56:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe79228…e8a reserve_in_usd (negative print)", class: claim, receipt_ids: [R-13] }
  - { kind: volume_24h, value: 3415619.05, currency: USD, as_of: 2026-09-02T22:56:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe79228…e8a volume_usd.h24", class: claim, receipt_ids: [R-13] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:53:00Z, receipt_ids: [R-8], result: "rpc.mainnet.chain.robinhood.com at block 0x327d16c then 0x327d7bc (52942780): eth_getCode 0x2d8d…EAdd non-empty EIP-1167 pointing at 0x3Be8B97F…C599; owner() 0xeb7c0347…0862; name() Statics; symbol() STATICS; totalSupply 1000000000000000000000000000; decimals 18; owner eth_getCode non-empty" }
  - { id: REP-2, method: api, chain_id: 4663, checked_at: 2026-09-02T22:54:00Z, receipt_ids: [R-4, R-5, R-6, R-7], result: "Blockscout api/v2/addresses/0x2d8d…EAdd: is_contract true, is_verified true, name Statics, proxy_type eip1167, implementations DopplerERC20V1 0x3Be8B97F…C599. api/v2/tokens: symbol STATICS, holders_count 1026, total_supply 1000000000000000000000000000. Factory 0x1B37…b69a named DopplerERC20V1Factory verified." }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-02T22:57:00Z, receipt_ids: [R-9], result: "Launch tx 0x4ab656be… timestamp 2026-08-27T19:24:28Z block 47690074 status ok method create; from 0x4CF8e4D3…3205 to Airlock 0xeb7C0347…0862" }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:58:00Z, receipt_ids: [R-8, R-10, R-11], result: "eth_getCode non-empty on vault 0x8AAA…C297, operators 0xad5E…F0BE, feeReceiver, treasuryVesting, activationRegistry, launchDistributor, factory, Airlock, impl. Testnet Diamond 0x2340741E…aA6a and testnet STATICS 0xF46cC8F0…2d81 empty on 4663. Operators name() Statics Operators symbol() STATOPS; totalSupply reverted" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-02T22:55:00Z, receipt_ids: [R-12], result: "DexScreener latest/dex/tokens/0x2d8d…EAdd: STATICS/WETH pair 0xe79228…e8a dexId uniswap labels [v4] liquidity.usd 14246101.38 volume.h24 3477557.3 fdv/marketCap 22501108 pairCreatedAt 1787858668000; websites staticsprotocol.com and docs.staticsprotocol.com; socials x.com/staticsprotocol and t.me/EqualFi" }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-02T22:56:00Z, receipt_ids: [R-13], result: "Gecko pool 0xe79228…e8a name STATICS / WETH 1.5% pool_created_at 2026-08-27T19:24:28Z reserve_in_usd -3408657.19120632 volume_usd.h24 3415619.05344714 relationships.dex.data.id bankr-robinhood" }
  - { id: REP-7, method: official-crosslink, checked_at: 2026-09-02T22:50:00Z, receipt_ids: [R-1, R-3, R-14, R-19], result: "staticsprotocol.com status Mainnet and /app; @StaticsProtocol bio CA 0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd; docs rollout says Genesis live on Robinhood mainnet; github.com/EqualFiLabs/statics deployments/robinhood-mainnet-genesis.json lists the same token, vault, operators and poolId" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Standalone Genesis: fixed 1B STATICS via Doppler Airlock into a Uniswap v4 STATICS/WETH multicurve; Operators NFT plus Genesis vault are a separate reserve-backed layer; basket/Dollar/Diamond suite is a later rollout", class: claim, observed_at: 2026-09-02T22:48:00Z, receipt_ids: [R-1, R-2, R-15, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://staticsprotocol.com", class: verified, observed_at: 2026-09-02T22:50:00Z, receipt_ids: [R-1, R-12, R-19], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@StaticsProtocol", class: verified, observed_at: 2026-09-02T22:50:00Z, receipt_ids: [R-3, R-12, R-19], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd", class: verified, observed_at: 2026-09-02T22:53:00Z, receipt_ids: [R-3, R-4, R-8, R-14], reproduction_ids: [REP-1, REP-2, REP-7], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: "STATICS", class: verified, observed_at: 2026-09-02T22:53:00Z, receipt_ids: [R-5, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T22:57:00Z, receipt_ids: [R-4, R-8, R-9, R-12, R-14], reproduction_ids: [REP-1, REP-2, REP-3, REP-5], supersedes: null }
  - { id: CLM-7, field: control.owner, value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock", class: verified, observed_at: 2026-09-02T22:53:00Z, receipt_ids: [R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0x8AAAF9a22f439589987B8f1e69d79ca4f648C297 StaticsGenesisVault", class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-10, R-14], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "0xad5E9F96A91D1A6F550580b157af2068A0e8F0BE StaticsGenesis / STATOPS", class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-11, R-14], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Primary pair STATICS/WETH Uniswap v4 poolId 0xe79228…e8a; quote WETH 0x0Bd7D308…AD73; hook 0x4e346895…a544 (Doppler pool initializer)", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-12, R-14], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-11, field: identity.repository, value: "https://github.com/EqualFiLabs/statics", class: verified, observed_at: 2026-09-02T22:49:00Z, receipt_ids: [R-16, R-14], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-12, field: relationship, value: "Launch tx 0x4ab656be… called Airlock.create at 0xeb7C…0862 on 2026-08-27T19:24:28Z block 47690074 from deployer 0x4CF8e4D3…3205", class: verified, observed_at: 2026-09-02T22:57:00Z, receipt_ids: [R-9, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Token is an EIP-1167 clone of DopplerERC20V1 0x3Be8B97F…C599 from DopplerERC20V1Factory 0x1B37…b69a (Airlock-gated)", class: verified, observed_at: 2026-09-02T22:54:00Z, receipt_ids: [R-4, R-6, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener STATICS/WETH Uniswap v4 liquidity.usd 14246101.38 volume.h24 3477557.3 fdv 22501108", class: verified, observed_at: 2026-09-02T22:55:00Z, receipt_ids: [R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Gecko STATICS/WETH 1.5% reserve_in_usd -3408657.19 volume_usd.h24 3415619.05 dex id bankr-robinhood", class: verified, observed_at: 2026-09-02T22:56:00Z, receipt_ids: [R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-16, field: product.mechanism, value: "Official 30 Aug post: DEX is not live, Genesis epoch in progress, credit not enabled; Operators borrow up to 95% LTV is a later path", class: claim, observed_at: 2026-09-02T22:45:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: product.mechanism, value: "Docs: 5,555 Operators, 180,000 STATICS gross backing per circulating Operator; IDs 1-5000 vault inventory, 5001-5555 treasury vesting", class: claim, observed_at: 2026-09-02T22:48:00Z, receipt_ids: [R-2, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: control.timelock, value: "Docs: one StaticsTimelock owns both diamonds, mainnet default delay seven days; genesis JSON finalization.governanceOwnershipAccepted false, pending Safe acceptance", class: claim, observed_at: 2026-09-02T22:49:00Z, receipt_ids: [R-18, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: security.audit, value: "SECURITY.md and docs security model: repository tests are not an external audit; broader diamonds require independent review before production use; no third-party audit URL located this pass", class: unknown, observed_at: 2026-09-02T22:49:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: activity.status, value: "Testnet StaticsDiamond 0x2340741E…aA6a and testnet STATICS 0xF46cC8F0…2d81 have empty code on chain 4663; do not use the testnet manifest as mainnet Genesis addresses", class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-8, R-21], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: taxonomy.primary-leaf, value: "rwa-products/redeemable-basket", class: claim, observed_at: 2026-09-02T22:59:00Z, receipt_ids: [R-1, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: product.mechanism, value: "Liquidity venue Uniswap v4 for STATICS/WETH (DexScreener labels [v4] dexId uniswap); Gecko attributes the same pool id to bankr-robinhood", class: verified, observed_at: 2026-09-02T22:56:00Z, receipt_ids: [R-12, R-13], reproduction_ids: [REP-5, REP-6], supersedes: null }
  - { id: CLM-23, field: identity.name, value: "Statics", class: verified, observed_at: 2026-09-02T22:53:00Z, receipt_ids: [R-4, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: "Blockscout holders_count 1026; total_supply 1,000,000,000 × 1e18", class: verified, observed_at: 2026-09-02T22:54:00Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-25, field: other, value: "genesisEpochEndUtc 2026-09-11T11:59:00Z in the mainnet genesis JSON; this pass is still inside that window", class: claim, observed_at: 2026-09-02T22:49:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: control.privileged-role, value: "Token owner-only path sits on shared Doppler Airlock, not a project-held key located this pass; genesis JSON roles.governance 0x603A8A2f…b9Ff has non-empty code (len 344, proxy-sized)", class: verified, observed_at: 2026-09-02T22:58:00Z, receipt_ids: [R-8, R-14], reproduction_ids: [REP-1, REP-4], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-14, CLM-15]
    material_effect: "STATICS/WETH liquidity is $14.25M on DexScreener and a negative reserve_in_usd on Gecko for the same pool id; a card that collapses them would misstate the book"
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-10, CLM-22]
    material_effect: "DexScreener labels the STATICS/WETH pool Uniswap v4; Gecko attributes the same pool id to bankr-robinhood"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Official account posted a MCG Live booking for @hooftly"
    summary: "@StaticsProtocol posted to watch @hooftly on @MCGlive in 40 minutes."
    occurred_at: 2026-09-02T17:19:30Z
    observed_at: 2026-09-02T22:45:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-2
    type: company
    title: "Official account quoted the MemeFi basket-arbitrage thesis"
    summary: "@StaticsProtocol quoted @hooftly on basket pools, meme/stock pairs, and POL."
    occurred_at: 2026-09-02T16:11:30Z
    observed_at: 2026-09-02T22:45:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-3
    type: ct
    title: "@hooftly posted the MemeFi STATICS/stock-pair thesis"
    summary: "@hooftly described basket Token/constituent pools and meme/stock arbitrage."
    occurred_at: 2026-09-02T16:03:55Z
    observed_at: 2026-09-02T22:45:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-4
    type: onchain
    title: "DexScreener and Gecko disagree on STATICS/WETH liquidity"
    summary: "DexScreener STATICS/WETH v4 liq $14.25M; Gecko same pool reserve_in_usd negative."
    occurred_at: 2026-09-02T22:56:00Z
    observed_at: 2026-09-02T22:56:00Z
    affected_fields: [economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12, R-13]
  - id: EVT-5
    type: company
    title: "Official account quoted the STATICS credit explainer"
    summary: "@StaticsProtocol quoted @hooftly on Operator and basket credit, DEX not live."
    occurred_at: 2026-09-01T07:46:34Z
    observed_at: 2026-09-02T22:45:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-6
    type: company
    title: "Official account posted that Operators are available"
    summary: "@StaticsProtocol posted that the app was updated and Operators are available."
    occurred_at: 2026-08-30T19:40:53Z
    observed_at: 2026-09-02T22:45:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-26]
  - id: EVT-7
    type: onchain
    title: "Airlock.create launched STATICS on 27 Aug 2026"
    summary: "Tx 0x4ab656be… called Airlock.create; STATICS 0x2d8d…EAdd at block 47690074."
    occurred_at: 2026-08-27T19:24:28Z
    observed_at: 2026-09-02T22:57:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-14]
  - id: EVT-8
    type: company
    title: "Official account quoted the DEX-not-live Genesis explainer"
    summary: "Quoted 30 Aug post: DEX not live, Genesis epoch, credit not enabled yet."
    occurred_at: 2026-08-31T00:39:26Z
    observed_at: 2026-09-02T22:45:00Z
    affected_fields: [lifecycle, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-20]

receipts:
  - { id: R-1, publisher: Statics Protocol, title: "Official site", url: "https://staticsprotocol.com", published_at: null, accessed_at: 2026-09-02T22:47:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-21], excerpt: "System status: Mainnet. Every basket is a fixed bundle, always redeemable for exactly what is inside it. Launch app → /app. USDstx described as spendable dollars. Stake and opt into up to 12 reward assets." }
  - { id: R-2, publisher: Statics Protocol, title: "Rollout and availability", url: "https://docs.staticsprotocol.com/docs/rollout/", published_at: 2026-08-27T00:00:00Z, accessed_at: 2026-09-02T22:47:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-17], excerpt: "The STATICS Genesis launch is live on Robinhood mainnet. Fixed STATICS supply 1,000,000,000. Doppler market inventory 800,000,000 across six curves. STATICS Operators fixed 5,555-token collection. Gross backing 180,000 STATICS per circulating Operator. Broader basket, Dollar, lending and general-pool suite follows a separate deployment." }
  - { id: R-3, publisher: Statics Protocol, title: "X account @StaticsProtocol", url: "https://x.com/StaticsProtocol", published_at: null, accessed_at: 2026-09-02T22:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-4], excerpt: "Bio: A Dex, Basket, Stablecoin and Credit protocol built on Uniswap V4. CA: 0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd" }
  - { id: R-4, publisher: Blockscout, title: "Address 0x2d8d…EAdd", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd", published_at: null, accessed_at: 2026-09-02T22:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-13, CLM-23], excerpt: "hash 0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd; is_contract true; is_verified true; name Statics; proxy_type eip1167; implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599." }
  - { id: R-5, publisher: Blockscout, title: "Token 0x2d8d…EAdd", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd", published_at: null, accessed_at: 2026-09-02T22:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-24], excerpt: "name Statics; symbol STATICS; decimals 18; type ERC-20; holders_count 1026; total_supply 1000000000000000000000000000." }
  - { id: R-6, publisher: Blockscout, title: "DopplerERC20V1 implementation 0x3Be8…C599", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-02T22:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "is_contract true; is_verified true; name DopplerERC20V1; compiler v0.8.26+commit.8a97fa7a; file_path src/tokens/DopplerERC20V1.sol; creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-7, publisher: Blockscout, title: "DopplerERC20V1Factory 0x1B37…b69a", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-02T22:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "is_verified true; name DopplerERC20V1Factory; compiler v0.8.26; file src/tokens/DopplerERC20V1Factory.sol. Source: Deploys DopplerERC20V1 tokens using EIP-1167; constructor(address airlock_)." }
  - { id: R-8, publisher: Robinhood Chain RPC, title: "eth_getCode / owner / name / symbol at block 52942780", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T22:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-9, CLM-20, CLM-23, CLM-26], excerpt: "eth_blockNumber 0x327d7bc. Token 0x2d8d…EAdd EIP-1167 to 0x3be8b97f…c599. owner() 0xeb7c0347…0862. name() Statics. symbol() STATICS. totalSupply 1e27. Vault, operators, feeReceiver, vesting, activation, distributor non-empty. Testnet Diamond and testnet STATICS empty." }
  - { id: R-9, publisher: Blockscout, title: "Launch tx 0x4ab656be…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x4ab656be8c63583735636694b029b43b052a01b3169e674c94adc5ec542ebd8e", published_at: 2026-08-27T19:24:28.000000Z, accessed_at: 2026-09-02T22:57:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-12, EVT-7], excerpt: "timestamp 2026-08-27T19:24:28.000000Z; block_number 47690074; from 0x4CF8e4D37F561815F208565a5b6Ca8a85b143205; to Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; method create; status ok; result success." }
  - { id: R-10, publisher: Blockscout, title: "StaticsGenesisVault 0x8AAA…C297", url: "https://robinhoodchain.blockscout.com/address/0x8AAAF9a22f439589987B8f1e69d79ca4f648C297", published_at: null, accessed_at: 2026-09-02T22:57:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "is_contract true; is_verified true; name StaticsGenesisVault; creator_address_hash 0x4CF8e4D37F561815F208565a5b6Ca8a85b143205; creation_transaction_hash 0x9ac216560ec73ff17d1dca4e81259c3de7e1fbd3086c438cc928e5dac5024c89." }
  - { id: R-11, publisher: Blockscout, title: "StaticsGenesis Operators 0xad5E…F0BE", url: "https://robinhoodchain.blockscout.com/address/0xad5E9F96A91D1A6F550580b157af2068A0e8F0BE", published_at: null, accessed_at: 2026-09-02T22:57:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "is_contract true; is_verified true; name StaticsGenesis; creator_address_hash 0x4CF8e4D37F561815F208565a5b6Ca8a85b143205; creation_transaction_hash 0xa779467c91943105834984beddc28cfa0ac0f90c32af0c18f28b1c8483e33425. RPC name() Statics Operators symbol() STATOPS." }
  - { id: R-12, publisher: DexScreener, title: "Token pairs API 0x2d8d…EAdd", url: "https://api.dexscreener.com/latest/dex/tokens/0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd", published_at: null, accessed_at: 2026-09-02T22:55:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-6, CLM-10, CLM-14, CLM-22, EVT-4], excerpt: "STATICS/WETH pair 0xe79228d6cae086a58bf5b22220b454e5d1ca4f13da767ea5bbe032d5a1e82e8a dexId uniswap labels [v4] liquidity.usd 14246101.38 volume.h24 3477557.3 fdv 22501108. Websites https://staticsprotocol.com and https://docs.staticsprotocol.com. Socials x.com/staticsprotocol t.me/EqualFi." }
  - { id: R-13, publisher: GeckoTerminal, title: "STATICS/WETH pool API", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xe79228d6cae086a58bf5b22220b454e5d1ca4f13da767ea5bbe032d5a1e82e8a", published_at: null, accessed_at: 2026-09-02T22:56:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-15, CLM-22, EVT-4], excerpt: "name STATICS / WETH 1.5%; address 0xe79228…e8a; reserve_in_usd -3408657.19120632; volume_usd.h24 3415619.05344714; pool_created_at 2026-08-27T19:24:28Z; relationships.dex.data.id bankr-robinhood." }
  - { id: R-14, publisher: EqualFi Labs, title: "Robinhood mainnet genesis manifest", url: "https://raw.githubusercontent.com/EqualFiLabs/statics/master/deployments/robinhood-mainnet-genesis.json", published_at: null, accessed_at: 2026-09-02T22:49:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-8, CLM-9, CLM-10, CLM-11, CLM-12, CLM-18, CLM-25, CLM-26, EVT-7], excerpt: "chainId 4663; launchedAt 2026-08-27T19:24:28Z; staticsToken 0x2d8d6F4A…EAdd deploymentTransaction 0x4ab656be…; operatorsNft 0xad5E9F96…F0BE; genesisVault 0x8AAAF9a2…C297; canonicalPool poolId 0xe79228d6…e8a; genesisEpochEndUtc 2026-09-11T11:59:00Z; governanceOwnershipAccepted false." }
  - { id: R-15, publisher: Statics Protocol, title: "Tokenomics", url: "https://docs.staticsprotocol.com/docs/tokenomics/", published_at: 2026-08-27T00:00:00Z, accessed_at: 2026-09-02T22:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "STATICS has a fixed supply of 1,000,000,000 tokens. 800,000,000 six-curve Doppler market; 100,100,000 Doppler-native treasury vesting; 99,900,000 backing for 555 treasury-vesting Operators. Launch token has no post-launch mint path." }
  - { id: R-16, publisher: EqualFi Labs, title: "statics README", url: "https://github.com/EqualFiLabs/statics", published_at: null, accessed_at: 2026-09-02T22:48:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-11, CLM-21], excerpt: "Statics begins with a standalone Doppler fixed-supply token, fully backed Genesis NFT vault, and permanent Uniswap v4 Multicurve market. The later multi-asset protocol uses two coordinated EIP-2535 Diamonds. BUSL-1.1. deployments/robinhood-mainnet-genesis.json is listed in the tree." }
  - { id: R-17, publisher: Statics Protocol, title: "Operators overview", url: "https://docs.staticsprotocol.com/docs/genesis/overview/", published_at: 2026-08-27T00:00:00Z, accessed_at: 2026-09-02T22:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-17], excerpt: "ERC-721 name is Statics Operators and the symbol is STATOPS. IDs 1..5000 StaticsGenesisVault; 5001..5555 StaticsTreasuryVesting. quoteGenesisRedemption / redeemGenesis return fixed STATICS payout and, after the epoch, reserve share." }
  - { id: R-18, publisher: Statics Protocol, title: "Timelock and roles", url: "https://docs.staticsprotocol.com/docs/governance/timelock-and-roles/", published_at: 2026-08-04T00:00:00Z, accessed_at: 2026-09-02T22:47:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-18], excerpt: "One StaticsTimelock owns both StaticsDiamond and StaticsDollarCoreDiamond. Robinhood mainnet and other chains default to seven days. Proposer/canceller configured multisig; executor open; guardian emergency pause." }
  - { id: R-19, publisher: EqualFi Labs, title: "SECURITY.md", url: "https://raw.githubusercontent.com/EqualFiLabs/statics/master/SECURITY.md", published_at: null, accessed_at: 2026-09-02T22:49:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "The standalone Genesis release is deployed on Robinhood Chain with source-verified contracts; the broader multi-asset and Statics Dollar Diamonds remain subject to independent review before production use. The repository test suite is not an external audit." }
  - { id: R-20, publisher: Statics Protocol, title: "Scratching the surface of Statics Protocol", url: "https://x.com/StaticsProtocol/status/2094223503260295197", published_at: 2026-08-31T00:39:26Z, accessed_at: 2026-09-02T22:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-16, EVT-8], excerpt: "Quotes @hooftly 2093906743747297780: the DEX isn't live yet, and we are still in our Genesis Epoch, so Credit is not enabled yet." }
  - { id: R-21, publisher: Statics Protocol, title: "Robinhood testnet deployment (not mainnet Genesis)", url: "https://docs.staticsprotocol.com/docs/reference/robinhood-testnet-deployment/", published_at: 2026-08-27T00:00:00Z, accessed_at: 2026-09-02T22:48:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-20], excerpt: "Chain ID 46630. StaticsDiamond 0x2340741E…aA6a. Statics token (STATICS) 0xF46cC8F0…2d81. Not production. Must not be used as a source of mainnet Genesis addresses." }
  - { id: R-22, publisher: Statics Protocol, title: "MCG Live booking", url: "https://x.com/StaticsProtocol/status/2095199952410755154", published_at: 2026-09-02T17:19:30Z, accessed_at: 2026-09-02T22:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Come watch @hooftly on @MCGlive in 40 min and make sure you give them a follow if you have not already." }
  - { id: R-23, publisher: Statics Protocol, title: "MemeFi 🤝 $STATICS", url: "https://x.com/StaticsProtocol/status/2095182840564768970", published_at: 2026-09-02T16:11:30Z, accessed_at: 2026-09-02T22:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "MemeFi 🤝 $STATICS (quote of @hooftly 2095180933397901373)." }
  - { id: R-24, publisher: "@hooftly", title: "MemeFi basket / stock-pair thesis", url: "https://x.com/hooftly/status/2095180933397901373", published_at: 2026-09-02T16:03:55Z, accessed_at: 2026-09-02T22:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "When created, Uniswap v4 pools are deployed pairing the Basket Token itself with each of its underlying assets. MemeFi is here, and it's being paired with stock tokens. The frontier for this is on @RobinhoodCrypto, and @staticsprotocol is building for it." }
  - { id: R-25, publisher: Statics Protocol, title: "Credit via $STATICS", url: "https://x.com/StaticsProtocol/status/2094693382027456706", published_at: 2026-09-01T07:46:34Z, accessed_at: 2026-09-02T22:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "Credit via $STATICS (quote of @hooftly on NFT Vault 180K STATICS backing, basket-token collateral, 95% LTV, no price oracles)." }
  - { id: R-26, publisher: Statics Protocol, title: "Operators are available", url: "https://x.com/StaticsProtocol/status/2094148368570445995", published_at: 2026-08-30T19:40:53Z, accessed_at: 2026-09-02T22:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "App has been updated to allow more users. Operators are available!" }

gaps:
  - { priority: P0, question: "Are StaticsDiamond, StaticsDollarCoreDiamond, USDstx or the swap-fee hook deployed on chain 4663?", checked: "RPC eth_getCode on testnet Diamond 0x2340741E… and testnet STATICS 0xF46cC8F0… empty on 4663; mainnet genesis JSON lists Genesis contracts only, 2026-09-02", next: "search Blockscout for StaticsDiamond / USDstx verified names on 4663 and read any mainnet diamond manifest if published" }
  - { priority: P0, question: "Has governance Safe 0x603A8A2f…b9Ff accepted ownership of the Genesis contracts?", checked: "genesis JSON finalization.governanceOwnershipAccepted false; pending Safe acceptance, 2026-09-02", next: "owner() on vault, operators NFT, feeReceiver, launchDistributor versus the Safe" }
  - { priority: P1, question: "Why is DexScreener STATICS/WETH liquidity $14.25M while Gecko prints reserve_in_usd negative for the same pool id?", checked: "DexScreener liquidity.usd 14246101.38; Gecko reserve_in_usd -3408657.19 dex bankr-robinhood, 2026-09-02", next: "read Uniswap v4 PoolManager / Doppler initializer inventory for 0xe79228…e8a rather than aggregators" }
  - { priority: P1, question: "Is there an independent audit whose scope includes Genesis vault, Operators, or the Doppler modules used at launch?", checked: "SECURITY.md, docs security model, GitHub README, X account, 2026-09-02", next: "auditor report index for EqualFi Labs / Doppler and a matching commit" }
  - { priority: P1, question: "Is credit or the hook DEX enabled on the live Genesis contracts, or still epoch-gated?", checked: "30 Aug official quote says DEX not live and credit not enabled; genesisEpochEndUtc 2026-09-11; Operators available post 30 Aug, 2026-09-02", next: "read StaticsGenesisVault credit functions and a recent Operator acquire/redeem tx" }
  - { priority: P2, question: "How many Operators are circulating versus vault inventory?", checked: "RPC totalSupply on 0xad5E…F0BE reverted; docs say 5,555 minted at construction with split custody, 2026-09-02", next: "balanceOf(vault) and ownerOf sample IDs on StaticsGenesis" }
---

# Statics Protocol — research packet

## What it is

Statics Protocol's live Genesis layer is a fixed-supply STATICS token created through Doppler Airlock into a Uniswap v4 STATICS/WETH multicurve, plus a 5,555 Operator NFT collection the docs back at 180,000 STATICS each. A user buys STATICS on that book or acquires an Operator from the vault. EqualFi Labs publishes the contracts; the basket, Dollar, hook DEX and credit suite remain a separate unreleased rollout.

Themes: rwa, vault, nft, hook, lending

## Why it matters

Genesis is already a large Robinhood-native STATICS/WETH book, so census `beta` understates what is deployed even while the redeemable-basket product is still a later rollout. The same Doppler Airlock and factory also own other RH tokens, which is a shared-infra fact, not an identity merge. Aggregators disagree on how large the STATICS/WETH book is.

## What could go wrong

Token owner-only functions sit on the shared Doppler Airlock. The published genesis manifest still has governance ownership unaccepted. DexScreener prints about $14.25M of STATICS/WETH liquidity while Gecko prints a negative reserve for the same pool id. The hook DEX and credit paths the site describes were still marked not live in the 30 Aug official quote.

## Product and mechanics

STATICS is an ERC-20 at `0x2d8d6F4A93AcD7a916A5a654ec8b690bA3B3EAdd`, an EIP-1167 clone of DopplerERC20V1. The launch transaction called Airlock.create. The live book is Uniswap v4 STATICS/WETH pool `0xe79228…e8a` with WETH `0x0Bd7D308…AD73`. [verified R-4 R-9 R-12]

Docs separate that Genesis layer from the later basket, Dollar, lending and general-pool Diamonds. The 30 Aug official quote says the DEX is not live and credit is not enabled. Testnet Diamond and testnet STATICS addresses are empty on chain 4663. [verified R-8 R-21] [claim R-2 R-20]

Operators are an ERC-721 named Statics Operators (`STATOPS`) at `0xad5E…F0BE`. The Genesis vault is `0x8AAA…C297`. Docs assign 180,000 STATICS of gross backing per circulating Operator and split IDs 1–5000 (vault) from 5001–5555 (treasury vesting). [verified R-10 R-11] [claim R-17]

## Control and security

`owner()` on the STATICS token returns Airlock `0xeb7C…0862`. Factory source is the Airlock-gated DopplerERC20V1Factory. Genesis JSON lists governance `0x603A8A2f…b9Ff` and `governanceOwnershipAccepted: false`. Docs put both future Diamonds under one StaticsTimelock with a seven-day mainnet default. SECURITY.md says repository tests are not an external audit and the broader diamonds need independent review before production use. No audit report URL was located this pass. [verified R-8 R-14] [claim R-18 R-19] [unknown]

## Team and provenance

Contracts and docs are published under EqualFi Labs at github.com/EqualFiLabs/statics. The official handle is @StaticsProtocol; the bio carries the STATICS CA. @hooftly posts as a builder tagged to @staticsprotocol and @EqualFiLabs. Named legal entity, signer identities and whether the governance address is a completed Safe were not established beyond the genesis JSON roles. Telegram `t.me/EqualFi` appears on DexScreener and is not confirmed from the site this pass. [verified R-3 R-14 R-16] [claim R-12]

## Economics and activity

Blockscout holders_count is 1026 with total supply 1,000,000,000 × 1e18. DexScreener STATICS/WETH Uniswap v4 liquidity.usd is 14246101.38, volume.h24 3477557.3, fdv 22501108 as of 2026-09-02T22:55:00Z. Gecko prints the same pool created 2026-08-27T19:24:28Z with reserve_in_usd -3408657.19 and volume_usd.h24 3415619.05, dex id bankr-robinhood. Genesis epoch end in the manifest is 2026-09-11T11:59:00Z. [verified R-5 R-12 R-13] [claim R-14]

## Material risks

- Token owner-only functions sit on shared Doppler Airlock, which also owns other RH tokens including $AI. [verified R-8]
- Genesis JSON still records governance ownership as unaccepted. [claim R-14]
- STATICS/WETH liquidity is not one number across aggregators, and Gecko's reserve print is negative. [verified R-12 R-13]
- Hook DEX and credit were still described as not live on 30 Aug; presenting baskets, USDstx or 95% LTV credit as live would overstate the rollout. [claim R-2 R-20]
- No independent audit report was located. [unknown]

## Verification passes

- Receipts: site, rollout, tokenomics, operators, timelock, testnet page, GitHub README, SECURITY.md, genesis JSON, Blockscout, RPC, DexScreener, Gecko and the cited X posts were opened on 2026-09-02 and excerpts copied from those pages. [verified R-1 R-2 R-8 R-12 R-14]
- Numbers: DexScreener and Gecko figures are aggregator chain-slice prints for the STATICS/WETH pool, not an explorer reproduction of PoolManager inventory. [verified R-12 R-13]
- Adversarial: the strongest contrary reading is that Statics is another LONG/Doppler memecoin with docs for an unreleased basket protocol. Airlock.create, the verified Genesis vault/Operators, the mainnet genesis JSON, and empty testnet Diamond code on 4663 keep Genesis live and the Diamond suite separate. Shared Airlock with $AI is recorded as a possible match, not a merge. [inference R-9 R-14 R-8]

## Operations log

- Reads: staticsprotocol.com, docs rollout/tokenomics/operators/timelock/testnet/security-model, GitHub EqualFiLabs/statics, SECURITY.md raw, deployments/robinhood-mainnet-genesis.json, deployments/robinhood-chain-4663.json.
- Reads: Blockscout address/token/tx APIs for STATICS, vault, Operators, factory, impl, Airlock; RPC eth_getCode and view calls at blocks 52932110-range then 52942780.
- Reads: DexScreener tokens/v1 batch, latest/dex/tokens STATICS, token-pairs for ARROW/INDEX/HOOKR/FRONG; Gecko trending_pools and STATICS/WETH pool endpoint.
- Reads: X Latest from:StaticsProtocol, from:hooftly via quotes, and the go-live handle set.
- Failed: urllib Blockscout 403 without a browser User-Agent; switched to curl. Gecko token-pools listing omitted the main v4 book (negative reserve on the direct pool endpoint). Operators totalSupply reverted.
- Time: collector pass 2026-09-02T22:45Z–22:59Z UTC.
