---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: stonks-fun
name: Stonks.fun
packet_tier: seed
as_of: 2026-09-03T03:00:00Z
prior_packet: null
supersedes: null
owned_slugs: [stonks-fun]
allowed_paths:
  - research/inbox/packets/stonks-fun/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Stonks.fun
  aliases: [StonksFun, stonks.fun]
  symbols: [STONKS, MAG7, DEGEN, SILICON]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://stonks.fun
  official_handle: "@stonksdotfun"
  repository: "NULL — no public repository URL on stonks.fun, the @stonksdotfun bio, or verified DopplerDN404 / StonksLauncherV3 source this pass"
  possible_matches:
    - slug: stonkbroker
      signals: [ticker-only]
      contrary_signals:
        - "Census StonkBrokers is @ClutchMarkets / $STONKBROKER at stonkbrokers.cash; this row is @stonksdotfun / $STONKS at stonks.fun"
        - "No shared domain, handle or reproduced address"
    - slug: index
      signals: [other]
      contrary_signals:
        - "Census The Index is a 3% pool-tax Stock Token distributor at theindex.finance / @TheIndexFi"
        - "Stonks.fun mints redeemable basket ERC-20s (MAG7/DEGEN/SILICON) at stonks.fun / @stonksdotfun"
        - "No shared domain, handle or reproduced address"
    - slug: robinhood-index-vaults
      signals: [other]
      contrary_signals:
        - "Census Robinhood Index Vaults is a testnet-only ERC-4626 prototype at github.com/nsvoud-dev/robinhood-index-vaults"
        - "Stonks.fun baskets are live createBasket clones on 4663 with site stonks.fun / @stonksdotfun"
        - "No shared domain, handle or reproduced address"
    - slug: downto
      signals: [other]
      contrary_signals:
        - "Census Down to Finance is a Pons-launched DETF factory at downto.finance"
        - "Stonks.fun baskets are createBasket clones from 0xd21cdd54… with token $STONKS at 0x3F298f2b…"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: rwa-products/redeemable-basket
  secondary_leaves: [launch/uni-pool-launch]
  mechanism_tags: [index, rwa, launchpad]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "$STONKS 0x3F298f2b… is DopplerDN404 with verified source, created via Airlock on 4663 into a Uniswap v3 USDG pool. MAG7 0xA5eC9f04… exists as stonks MAG7 from createBasket. Site JS and @stonksdotfun now describe redeemable stock-token baskets, not the DN-404 pad. Census announced is below that bar. [R-2] [R-5] [R-11] [R-13] [R-16] [R-19]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-7], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-20], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-18, CLM-24], note: "" }

links:
  - { kind: site, url: "https://stonks.fun", authenticity: confirmed }
  - { kind: app, url: "https://stonks.fun", authenticity: confirmed }
  - { kind: x, url: "https://x.com/stonksdotfun", authenticity: confirmed }

deployments:
  - label: STONKS token (DopplerDN404)
    role: token
    address:
      value: "0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-03T02:55:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-11, R-12, R-13]
  - label: DN404Factory
    role: factory
    address:
      value: "0x37A9Fa204a4d3A429FDED7e3469ab076C854Bc9d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:55:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-14]
  - label: StonksLauncherV3
    role: factory
    address:
      value: "0x2a71F10b41ff0882C7Be2A5c0644722314976b42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:58:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-15, R-21]
  - label: Basket factory
    role: factory
    address:
      value: "0xd21cdd54943cA962Ee6f13F0eB48e6f591870d4a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:57:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-17, R-22]
  - label: MAG7 basket (stonks MAG7)
    role: token
    address:
      value: "0xA5eC9f044671b7EbD186b59272C3ab7cB88Ae891"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:56:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-16, R-17]
  - label: DEGEN basket (stonks DEGEN)
    role: token
    address:
      value: "0xc7ceC00967266Ef50023904669c375baA4A33308"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:56:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-24]
  - label: SILICON basket (stonks SILICON)
    role: token
    address:
      value: "0x68c6775Da99a028432FB2A0753DBeb91479868F4"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:56:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-25]
  - label: Basket cash-redeem router
    role: router
    address:
      value: "0x5fF3F0896c587a316B92DA88dd2578b18399a4bC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:56:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-23]
  - label: STONKS/USDG Uniswap v3 pool
    role: other
    address:
      value: "0x37C0Bd9540B76bE0c947a07B4be5173B799C8167"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:55:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-18, R-19]

metrics:
  - { kind: volume_24h, value: 6138.39, currency: USD, as_of: 2026-09-03T02:57:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c pair 0x37C0Bd95… volume.h24", class: claim, receipt_ids: [R-19] }
  - { kind: market_cap, value: 648468, currency: USD, as_of: 2026-09-03T02:57:00Z, window: point, method: "DexScreener token-pairs STONKS/USDG marketCap", class: claim, receipt_ids: [R-19] }
  - { kind: holders, value: 141, currency: null, as_of: 2026-09-03T02:55:00Z, window: point, method: "Blockscout api/v2/tokens/0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c holders_count", class: claim, receipt_ids: [R-11] }
  - { kind: holders, value: 1, currency: null, as_of: 2026-09-03T02:56:00Z, window: point, method: "Blockscout api/v2/tokens/0xA5eC9f044671b7EbD186b59272C3ab7cB88Ae891 holders_count", class: claim, receipt_ids: [R-16] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-11, R-14, R-15, R-16, R-18, R-22, R-23], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x329f3d7 (53081047). eth_getCode non-empty: STONKS 9012 bytes, DN404Factory 15565, UniswapV3Pool 22142, StonksLauncherV3 6212, MAG7/DEGEN/SILICON 10135 each, basket factory 17371, router 5168. STONKS name/symbol STONKS, owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. MAG7 name stonks MAG7 totalSupply 993352030415128253. DEGEN name stonks DEGEN totalSupply 0. SILICON name stonks SILICON totalSupply 0." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:58:00Z, receipt_ids: [R-11, R-12, R-13, R-14, R-15, R-16, R-17, R-18, R-20, R-21, R-22], result: "Blockscout API v2: STONKS is_contract true is_verified true name DopplerDN404 token STONKS holders 141 total_supply 1e27 created 2026-07-09T20:06:40Z tx 0x8e58a58c… from 0x2E8DCcCE… to Airlock.create, creator_address_hash DN404Factory 0x37A9Fa20…. DN404Factory verified file src/tokens/DN404Factory.sol. StonksLauncherV3 verified file src/StonksLauncherV3.sol. MAG7 token stonks MAG7 / MAG7 holders 1 created 2026-08-31T14:39:51Z createBasket to 0xd21cdd54…. YOWL DopplerDN404 creator DN404Factory, launch tx 2026-07-14T23:06:26Z to StonksLauncherV3. Pair 0x37C0Bd95… UniswapV3Pool verified, created in the STONKS create tx." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:58:00Z, receipt_ids: [R-1, R-2, R-3, R-5, R-19], result: "@stonksdotfun posted CA 0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c and https://stonks.fun/stonks. stonks.fun title stonks.fun — baskets of real stock tokens. JS w2 that CA; gR mag7 0xA5eC9f04… degen 0xc7ceC009… silicon 0x68c6775D… router n8 0x5fF3F089…. DexScreener websites https://stonks.fun socials https://x.com/stonksdotfun." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T02:57:00Z, receipt_ids: [R-19], result: "DexScreener token-pairs robinhood 0x3F298f2b…: Uniswap v3 STONKS/USDG pair 0x37C0Bd9540B76bE0c947a07B4be5173B799C8167 liquidity.usd 409860.91 volume.h24 6138.39 marketCap 648468 fdv 648468 priceUsd 0.0006484 txns.h24 buys 3 sells 7. MAG7/DEGEN/SILICON token-pairs arrays empty." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "stonks.fun mints one ERC-20 per basket, fully backed by Robinhood Stock Tokens at fixed weights, with in-kind redeem that the site says cannot be paused. Featured baskets: MAG7 (NVDA 20 AAPL 15 MSFT 15 GOOGL 15 META 15 AMZN 10 TSLA 10), DEGEN (GME 40 MSTR 20 COIN 20 PLTR 20), SILICON (NVDA 35 AMD 25 MU 20 INTC 20). Builder is open.", class: claim, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://stonks.fun", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-1, R-2, R-5, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@stonksdotfun", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-3, R-5, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-5, R-11, R-12, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x37A9Fa204a4d3A429FDED7e3469ab076C854Bc9d", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x2a71F10b41ff0882C7Be2A5c0644722314976b42", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-15, R-21], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0xA5eC9f044671b7EbD186b59272C3ab7cB88Ae891", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-2, R-16, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-11, R-13, R-16, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: taxonomy.primary-leaf, value: rwa-products/redeemable-basket, class: claim, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: taxonomy.secondary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-13, R-15, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener STONKS/USDG Uniswap v3 volume.h24 6138.39 USD as of 2026-09-03T02:57:00Z", class: verified, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-19], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DexScreener STONKS/USDG marketCap 648468 USD / liquidity.usd 409860.91 as of 2026-09-03T02:57:00Z", class: verified, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-19], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Blockscout STONKS holders_count 141; MAG7 holders_count 1 total_supply 993352030415128253", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-11, R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: "account.@stonksdotfun.role", value: project, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: "account.@stonksdotfun.slug", value: stonks-fun, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: "account.@nikshepsvn.note", value: "Bio: onchain ETFs @stonksdotfun. Posted the 1 Sep alpha site, MAG7/DEGEN/SILICON launch, and the treasury-to-furnace transfer.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report was located on stonks.fun, @stonksdotfun, GitHub search for stonks.fun, or the unverified MAG7/factory/router pages this pass. Builder post said audit the furnace contract; that address was not published in the post text.", class: unknown, observed_at: 2026-09-03T02:59:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from census StonkBrokers (@ClutchMarkets / $STONKBROKER / stonkbrokers.cash)", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: relationship, value: "$YOWL 0x062939bB32EaBD47A522FE48872F41E04017a095 is DopplerDN404 created 2026-07-14T23:06:26Z via StonksLauncherV3.launch; @YowlonHood / yowl.trade is a pad output, not this slug", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-20, R-21], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-20, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-3, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xd21cdd54943cA962Ee6f13F0eB48e6f591870d4a", class: verified, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-17, R-22], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x5fF3F0896c587a316B92DA88dd2578b18399a4bC", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-2, R-23], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-23, field: identity.symbol, value: STONKS, class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-5, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: product.mechanism, value: "$STONKS is a DopplerDN404 created through Airlock.create with DN404Factory, 1B supply, 700M to sell, quote USDG, cert URI https://stonks.fun/certs/stonks/, into Uniswap v3 pool 0x37C0Bd95…. YOWL used StonksLauncherV3.launch. That is the earlier DN-404 Uniswap-v3 pad.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-12, R-13, R-15, R-18, R-21], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "22 Aug 2026 @stonksdotfun posted a new platform with stock baskets; 1 Sep posted the alpha site live; 2 Sep posted the builder open. Bio now reads onchain index baskets of real tokenized equities, now in alpha, fees burn $STONKS.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-4, R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: other, value: "@stonksdotfun posted treasury = destroyed, over 36% of $STONKS supply out of circulation, quoting @nikshepsvn that the treasury was sent to a furnace contract. Furnace address was not in the post text this pass.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-6, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: activity.status, value: "DEGEN 0xc7ceC009… and SILICON 0x68c6775D… have names stonks DEGEN / stonks SILICON and 10135 bytes of code; totalSupply() is 0. MAG7 totalSupply is 0.993… with 1 holder. DexScreener has no pairs for the three baskets.", class: verified, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-16, R-19, R-24, R-25], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-28, field: control.owner, value: "STONKS owner() returns Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. Basket factory, MAG7, DEGEN, SILICON and router source is unverified. CreateBasket and STONKS create txs are from EOA 0x2E8DCcCE588a2150d4b5A0fa9dD75fe72acE026f.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-13, R-17, R-22, R-23], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Official account posted the basket builder is open"
    summary: "Official account: pick any of 23 tokenized stocks, set weights, publish. One tx, ~$3 gas, an index token anyone can buy."
    occurred_at: 2026-09-02T14:52:41Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-2
    type: onchain
    title: "Cash-redeem router created on Robinhood Chain"
    summary: "EOA 0x2E8DCcCE… created 0x5fF3F089… (5,168 bytes) at 2026-09-02T09:40:22Z. Site JS names it the basket router."
    occurred_at: 2026-09-02T09:40:22Z
    observed_at: 2026-09-03T02:56:00Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2, R-23]
  - id: EVT-3
    type: company
    title: "Official account posted the $STONKS contract address"
    summary: "Official account: token stays the same. https://stonks.fun/stonks CA 0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c."
    occurred_at: 2026-09-01T14:27:53Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [deployment.address, identity.symbol]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-4
    type: company
    title: "Official account posted the $STONKS treasury as destroyed"
    summary: "Official account: treasury = destroyed. Over 36% of $STONKS supply out of circulation. Quotes the builder furnace post."
    occurred_at: 2026-09-01T13:49:14Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6, R-10]
  - id: EVT-5
    type: company
    title: "Official account posted the index platform live in alpha"
    summary: "Official account: new platform is live. Flagship indexes $MAG7, $DEGEN and Everything Runs On This. DEX updated."
    occurred_at: 2026-09-01T13:20:14Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [lifecycle, product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-9]
  - id: EVT-6
    type: onchain
    title: "MAG7 basket created via createBasket on chain 4663"
    summary: "Tx 0xd20d4e4f… at 2026-08-31T14:39:51Z; Blockscout names 0xA5eC9f04… stonks MAG7 / MAG7."
    occurred_at: 2026-08-31T14:39:51Z
    observed_at: 2026-09-03T02:56:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16, R-17]
  - id: EVT-7
    type: company
    title: "Official account posted a rebrand toward RWA baskets"
    summary: "Official account: new stonks platform launching. Stock baskets and more for everyone. Quotes the 22 Aug builder post."
    occurred_at: 2026-08-22T15:11:53Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-8
    type: onchain
    title: "$STONKS DopplerDN404 created via Airlock on chain 4663"
    summary: "Tx 0x8e58a58c… at 2026-07-09T20:06:40Z to Airlock.create; Blockscout names 0x3F298f2b… DopplerDN404 / STONKS."
    occurred_at: 2026-07-09T20:06:40Z
    observed_at: 2026-09-03T02:55:00Z
    affected_fields: [deployment.address, lifecycle, identity.symbol]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-11, R-13]

receipts:
  - { id: R-1, publisher: Stonks.fun, title: "stonks.fun home HTML", url: "https://stonks.fun/", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-9, CLM-20], excerpt: "title stonks.fun — baskets of real stock tokens. meta description Tokenized equity baskets on Robinhood Chain. Hold one thing, get paid in everything. script /assets/index-BTcKrI2q.js." }
  - { id: R-2, publisher: Stonks.fun, title: "stonks.fun app bundle index-BTcKrI2q.js", url: "https://stonks.fun/assets/index-BTcKrI2q.js", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-7, CLM-9, CLM-22, EVT-2], excerpt: "w2=\"0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c\" qr USDG 0x5fc5360D…. n8 router 0x5fF3F0896c587a316B92DA88dd2578b18399a4bC. gR mag7 0xA5eC9f044671b7EbD186b59272C3ab7cB88Ae891 degen 0xc7ceC00967266Ef50023904669c375baA4A33308 silicon 0x68c6775Da99a028432FB2A0753DBeb91479868F4. MAG7 constituents NVDA 0.2 AAPL/MSFT/GOOGL/META 0.15 AMZN/TSLA 0.1. cashMint mintInKind redeem cashRedeem navPerShare." }
  - { id: R-3, publisher: "@stonksdotfun", title: "STONKS.FUN profile", url: "https://x.com/stonksdotfun", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-3, CLM-14, CLM-15, CLM-18, CLM-20, CLM-25], excerpt: "Display name STONKS.FUN. Handle @stonksdotfun. Bio: onchain index baskets of real tokenized equities · pick the stocks, set the weights, hold one token · on robinhood chain · now in alpha. fees burn $STONKS." }
  - { id: R-4, publisher: "@stonksdotfun", title: "the builder is open", url: "https://x.com/stonksdotfun/status/2095163004086255788", published_at: 2026-09-02T14:52:41Z, accessed_at: 2026-09-03T02:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-25, EVT-1], excerpt: "the builder is open. pick any of 23 tokenized stocks and etfs on robinhood chain — spy, qqq, spacex, silver, oil, tsla etc — set your weights, publish. one tx, ~$3 in gas, and you have an index token anyone can buy." }
  - { id: R-5, publisher: "@stonksdotfun", title: "token stays the same — STONKS CA", url: "https://x.com/stonksdotfun/status/2094794375566160068", published_at: 2026-09-01T14:27:53Z, accessed_at: 2026-09-03T02:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-14, CLM-15, CLM-18, CLM-23, EVT-3], excerpt: "token stays the same https://stonks.fun/stonks CA: 0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c" }
  - { id: R-6, publisher: "@stonksdotfun", title: "treasury = destroyed", url: "https://x.com/stonksdotfun/status/2094784649147162685", published_at: 2026-09-01T13:49:14Z, accessed_at: 2026-09-03T02:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-26, EVT-4], excerpt: "treasury = destroyed over 36% of $STONKS supply out of circulation let the games begin" }
  - { id: R-7, publisher: "@stonksdotfun", title: "new platform is live", url: "https://x.com/stonksdotfun/status/2094777352668721636", published_at: 2026-09-01T13:20:14Z, accessed_at: 2026-09-03T02:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-25, EVT-5], excerpt: "new platform is live, stonks will let you create custom baskets for any set of RWAs onchain, launching with 3 flagship index's: $MAG7: The Magnificent Seven $DEGEN: The Degenerate Index solana:BKnKfpqBR8KJQj59gX3UZ7QFodnBvVCgkHMssah2pump: Everything Runs On This DEX has been updated as well" }
  - { id: R-8, publisher: "@stonksdotfun", title: "new stonks platform launching", url: "https://x.com/stonksdotfun/status/2091181573077135567", published_at: 2026-08-22T15:11:53Z, accessed_at: 2026-09-03T02:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-25, EVT-7], excerpt: "new stonks platform launching stock baskets & more for everyone" }
  - { id: R-9, publisher: "@nikshepsvn", title: "new stonks.fun site live in alpha", url: "https://x.com/nikshepsvn/status/2094776091118596123", published_at: 2026-09-01T13:15:13Z, accessed_at: 2026-09-03T02:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-16, EVT-5], excerpt: "the new https://stonks.fun site and platform is live in alpha onchain index baskets of real tokenized equities, native to robinhood chain … launching today with $MAG7, $DEGEN and solana:BKnKfpqBR8KJQj59gX3UZ7QFodnBvVCgkHMssah2pump fees burn $STONKS" }
  - { id: R-10, publisher: "@nikshepsvn", title: "burned the entire $STONKS treasury", url: "https://x.com/nikshepsvn/status/2094784445874327557", published_at: 2026-09-01T13:48:25Z, accessed_at: 2026-09-03T02:48:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-16, CLM-26, EVT-4], excerpt: "just burned the entire $STONKS treasury by sending it to our furnace contract (same as a burn address, audit the contract) this means over 36.5% of the total $STONKS supply is now permanently destroyed" }
  - { id: R-11, publisher: Blockscout, title: "STONKS 0x3F298f2b… address", url: "https://robinhoodchain.blockscout.com/address/0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-13, CLM-20, CLM-23, EVT-8], excerpt: "hash 0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c; is_contract true; is_verified true; name DopplerDN404; creator_address_hash 0x37A9Fa204a4d3A429FDED7e3469ab076C854Bc9d; creation_transaction_hash 0x8e58a58c4595991c81d7615c2ee1ececf22e96cb0b62bb243478ccf26308edb6; token name STONKS symbol STONKS holders_count 141 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-12, publisher: Blockscout, title: "DopplerDN404 verified source", url: "https://robinhoodchain.blockscout.com/address/0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c?tab=contract", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-24], excerpt: "file_path src/tokens/DopplerDN404.sol; name DopplerDN404; compiler_version v0.8.26+commit.8a97fa7a; optimization_enabled true; evm_version cancun; is_verified true. SPDX-License-Identifier: BUSL-1.1; import DN404 from lib/dn404; import DopplerDN404Mirror." }
  - { id: R-13, publisher: Blockscout, title: "STONKS create tx 0x8e58a58c…", url: "https://robinhoodchain.blockscout.com/tx/0x8e58a58c4595991c81d7615c2ee1ececf22e96cb0b62bb243478ccf26308edb6", published_at: 2026-07-09T20:06:40Z, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-10, CLM-24, CLM-28, EVT-8], excerpt: "timestamp 2026-07-09T20:06:40.000000Z; block_number 5491690; method create; status ok; from 0x2E8DCcCE588a2150d4b5A0fa9dD75fe72acE026f; to Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. createData initialSupply 1e27, numTokensToSell 7e26, quote USDG 0x5fc5360D…, tokenFactory DN404Factory 0x37A9Fa20…, name/symbol STONKS, URI https://stonks.fun/certs/stonks/." }
  - { id: R-14, publisher: Blockscout, title: "DN404Factory 0x37A9Fa20…", url: "https://robinhoodchain.blockscout.com/address/0x37A9Fa204a4d3A429FDED7e3469ab076C854Bc9d", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x37A9Fa204a4d3A429FDED7e3469ab076C854Bc9d; is_contract true; is_verified true; name DN404Factory; file_path src/tokens/DN404Factory.sol; compiler v0.8.26+commit.8a97fa7a; creator_address_hash 0xf4287C4Fd31ccccb69EA4Aa3e52ea8e41fb26897; creation_transaction_hash 0x33f9d082518878262898a9c2e11d146516fddd7bc1ae3674b623f5854c09da99 deployCreate3 via DopplerCreateXDeployer 2026-06-30T22:03:15Z." }
  - { id: R-15, publisher: Blockscout, title: "StonksLauncherV3 0x2a71F10b…", url: "https://robinhoodchain.blockscout.com/address/0x2a71F10b41ff0882C7Be2A5c0644722314976b42", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-10, CLM-24], excerpt: "hash 0x2a71F10b41ff0882C7Be2A5c0644722314976b42; is_contract true; is_verified true; name StonksLauncherV3; file_path src/StonksLauncherV3.sol; compiler_version v0.8.28+commit.7893614a; creator_address_hash 0x2E8DCcCE588a2150d4b5A0fa9dD75fe72acE026f; creation_transaction_hash 0xefdd19d691d51a9e7db3e9c2ec38b1c3b3251f2282ac0f5b5a2dd9b25aab865b." }
  - { id: R-16, publisher: Blockscout, title: "MAG7 token 0xA5eC9f04…", url: "https://robinhoodchain.blockscout.com/token/0xA5eC9f044671b7EbD186b59272C3ab7cB88Ae891", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-13, CLM-27, EVT-6], excerpt: "address_hash 0xA5eC9f044671b7EbD186b59272C3ab7cB88Ae891; name stonks MAG7; symbol MAG7; decimals 18; holders_count 1; total_supply 993352030415128253; type ERC-20. Address page: is_contract true; is_verified false; name stonks MAG7; creator_address_hash 0xd21cdd54943cA962Ee6f13F0eB48e6f591870d4a; creation_transaction_hash 0xd20d4e4f605807212a10dec399d5380321954eb292a90791f73df0ae53fd1c0b." }
  - { id: R-17, publisher: Blockscout, title: "MAG7 createBasket tx 0xd20d4e4f…", url: "https://robinhoodchain.blockscout.com/tx/0xd20d4e4f605807212a10dec399d5380321954eb292a90791f73df0ae53fd1c0b", published_at: 2026-08-31T14:39:51Z, accessed_at: 2026-09-03T02:57:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-21, CLM-28, EVT-6], excerpt: "timestamp 2026-08-31T14:39:51.000000Z; block_number 50942652; method createBasket; from 0x2E8DCcCE588a2150d4b5A0fa9dD75fe72acE026f; to 0xd21cdd54943cA962Ee6f13F0eB48e6f591870d4a." }
  - { id: R-18, publisher: Blockscout, title: "STONKS/USDG UniswapV3Pool 0x37C0Bd95…", url: "https://robinhoodchain.blockscout.com/address/0x37C0Bd9540B76bE0c947a07B4be5173B799C8167", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-10, CLM-24, EVT-8], excerpt: "hash 0x37C0Bd9540B76bE0c947a07B4be5173B799C8167; is_contract true; is_verified true; name UniswapV3Pool; creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA UniswapV3Factory; creation_transaction_hash 0x8e58a58c4595991c81d7615c2ee1ececf22e96cb0b62bb243478ccf26308edb6 (same tx as STONKS create)." }
  - { id: R-19, publisher: DexScreener, title: "STONKS token pairs on robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x3F298f2b7306Bf9a9e7177Ca461C58c4c2FDfa4c", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-11, CLM-12, CLM-27], excerpt: "chainId robinhood dexId uniswap labels v3 pairAddress 0x37C0Bd9540B76bE0c947a07B4be5173B799C8167 baseToken STONKS 0x3F298f2b… quoteToken USDG 0x5fc5360D… priceUsd 0.0006484 volume.h24 6138.39 liquidity.usd 409860.91 fdv 648468 marketCap 648468 txns.h24 buys 3 sells 7 info.websites https://stonks.fun info.socials https://x.com/stonksdotfun." }
  - { id: R-20, publisher: Blockscout, title: "YOWL 0x062939bB… address", url: "https://robinhoodchain.blockscout.com/address/0x062939bB32EaBD47A522FE48872F41E04017a095", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19], excerpt: "hash 0x062939bB32EaBD47A522FE48872F41E04017a095; is_contract true; is_verified true; name DopplerDN404; creator_address_hash 0x37A9Fa204a4d3A429FDED7e3469ab076C854Bc9d; creation_transaction_hash 0x47d4825051b72ba5a54ef4c5d5517ee08b8567a77745c93ced914d9676d3a841; token name YOWL symbol YOWL holders_count 192 total_supply 1000000000000000000000000000." }
  - { id: R-21, publisher: Blockscout, title: "YOWL launch tx 0x47d48250…", url: "https://robinhoodchain.blockscout.com/tx/0x47d4825051b72ba5a54ef4c5d5517ee08b8567a77745c93ced914d9676d3a841", published_at: 2026-07-14T23:06:26Z, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-19, CLM-24], excerpt: "timestamp 2026-07-14T23:06:26.000000Z; block_number 9911907; method launch; from 0x2E8DCcCE588a2150d4b5A0fa9dD75fe72acE026f; to StonksLauncherV3 0x2a71F10b41ff0882C7Be2A5c0644722314976b42." }
  - { id: R-22, publisher: Blockscout, title: "Basket factory 0xd21cdd54…", url: "https://robinhoodchain.blockscout.com/address/0xd21cdd54943cA962Ee6f13F0eB48e6f591870d4a", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21, CLM-28], excerpt: "hash 0xd21cdd54943cA962Ee6f13F0eB48e6f591870d4a; is_contract true; is_verified false; creator_address_hash 0x2E8DCcCE588a2150d4b5A0fa9dD75fe72acE026f; creation_transaction_hash 0x8f176c9d16657efab9cc3d96c6ed10bca21dd51efc1fce77a535cf352802a358 timestamp 2026-08-31T14:38:53Z block 50942083." }
  - { id: R-23, publisher: Blockscout, title: "Basket router 0x5fF3F089…", url: "https://robinhoodchain.blockscout.com/address/0x5fF3F0896c587a316B92DA88dd2578b18399a4bC", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22, CLM-28, EVT-2], excerpt: "hash 0x5fF3F0896c587a316B92DA88dd2578b18399a4bC; is_contract true; is_verified false; creator_address_hash 0x2E8DCcCE588a2150d4b5A0fa9dD75fe72acE026f; creation_transaction_hash 0x0b07a3343a6bcc9be7845fdaa0d62c6123294b593a4912a81854b3139fee4303 timestamp 2026-09-02T09:40:22Z block 52475072." }
  - { id: R-24, publisher: Blockscout, title: "DEGEN basket 0xc7ceC009…", url: "https://robinhoodchain.blockscout.com/address/0xc7ceC00967266Ef50023904669c375baA4A33308", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-27], excerpt: "hash 0xc7ceC00967266Ef50023904669c375baA4A33308; is_contract true; is_verified false; creator_address_hash 0xd21cdd54943cA962Ee6f13F0eB48e6f591870d4a; creation_transaction_hash 0x6d2e7d89523cd5a89c78bb20835de29f16183ccbe8adcf462ce0702d26bdec18 timestamp 2026-08-31T17:41:05Z. eth_call name() stonks DEGEN; totalSupply() 0." }
  - { id: R-25, publisher: Blockscout, title: "SILICON basket 0x68c6775D…", url: "https://robinhoodchain.blockscout.com/address/0x68c6775Da99a028432FB2A0753DBeb91479868F4", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-27], excerpt: "hash 0x68c6775Da99a028432FB2A0753DBeb91479868F4; is_contract true; is_verified false; creator_address_hash 0xd21cdd54943cA962Ee6f13F0eB48e6f591870d4a; creation_transaction_hash 0x77b6d2fb109046198da6028900960e9b1dea41c4f8e78463acdb620bb9a64335 timestamp 2026-08-31T17:41:21Z method createBasket. eth_call name() stonks SILICON; totalSupply() 0." }

gaps:
  - { priority: P0, question: "What is the furnace contract address for the posted 36.5% $STONKS treasury burn, and does STONKS.balanceOf(furnace) match that share?", checked: "R-6 R-10 post text, Blockscout token page, no furnace address in the JS bundle, 2026-09-03", next: "read the screenshot on the builder post or scan STONKS transfers from the deployer around 2026-09-01T13:48Z" }
  - { priority: P0, question: "Who can call createBasket / change MAG7 weights / pause redeem on 0xd21cdd54… and MAG7, given unverified source?", checked: "Blockscout is_verified false on factory, MAG7, DEGEN, SILICON, router; no owner() on MAG7 this pass, 2026-09-03", next: "eth_call owner/admin on factory and MAG7; decompile or wait for verified source" }
  - { priority: P1, question: "Is there an audit whose scope includes DopplerDN404, StonksLauncherV3, the basket factory, MAG7, or the furnace?", checked: "stonks.fun, @stonksdotfun, GitHub search stonks.fun / stonksdotfun, Blockscout contract pages, 2026-09-03", next: "ask in public for a report URL and match bytecode" }
  - { priority: P1, question: "Why are DEGEN and SILICON totalSupply 0 if they were posted as flagship indexes, and does MAG7 hold the listed Stock Tokens 1:1?", checked: "eth_call name/totalSupply; DexScreener token-pairs empty; MAG7 holders 1 supply ~0.993, 2026-09-03", next: "eth_call assets() and balances of NVDA/AAPL/… on MAG7; watch a cashMint" }
  - { priority: P2, question: "Is StonksLauncherV3 still taking launch() after the basket rebrand?", checked: "YOWL launch 2026-07-14; no later launch tx pulled this pass, 2026-09-03", next: "count recent Launch logs on 0x2a71F10b…" }
---

# Stonks.fun — research packet

## What it is

Onchain index baskets of Robinhood stock tokens. A user picks holdings, sets weights, and mints one ERC-20 that is fully backed and redeemable in kind. MAG7, DEGEN and SILICON are live; the builder is open. Fees burn $STONKS. @stonksdotfun runs stonks.fun. $STONKS is a Doppler DN-404 from the earlier Uniswap v3 pad.

Themes: launchpad, rwa, index

## Why it matters

Census still files this as an announced DN-404 Doppler pad. The live object on 4663 is $STONKS in a Uniswap v3 USDG pool plus a createBasket factory that already minted MAG7. That is a native redeemable-basket surface on official Stock Tokens, not StonkBrokers and not The Index.

## What could go wrong

MAG7, DEGEN, SILICON, the basket factory and the cash-redeem router have unverified source. DEGEN and SILICON report zero supply. MAG7 has one holder and about 0.99 tokens. The posted 36.5% treasury burn names a furnace contract whose address is not in the post text.

## Product and mechanics

The site and 2 Sep post describe an index builder: pick from 23 tokenized stocks and ETFs, set weights, publish one ERC-20. Featured books are MAG7, DEGEN and SILICON (site title Everything Runs On This). JS exposes cashMint, mintInKind, redeem and cashRedeem, and says in-kind exit reads no price feed and cannot be paused. [claim R-1 R-2 R-4]

$STONKS is a DopplerDN404 created 2026-07-09 through Airlock.create with DN404Factory, 1B supply, 700M to sell, USDG quote, cert URI https://stonks.fun/certs/stonks/, and a Uniswap v3 pool created in the same transaction. YOWL was launched 2026-07-14 through StonksLauncherV3.launch. That is the earlier DN-404 Uniswap-v3 pad. [verified R-12 R-13 R-15 R-18 R-21]

@stonksdotfun bio still says fees burn $STONKS. The 1 Sep posts say the $STONKS CA does not change with the basket rebrand. [claim R-3 R-5]

## Control and security

STONKS owner() returns Airlock 0xeb7C0347…. CreateBasket, STONKS create and the router deploy are from EOA 0x2E8DCcCE…. Basket factory, MAG7, DEGEN, SILICON and the router are unverified on Blockscout. [verified R-13 R-17 R-22 R-23]

No audit report was located on the site, the X account, GitHub search, or the unverified basket pages. The builder post said to audit the furnace contract and did not publish its address in the text. [unknown]

## Team and provenance

@stonksdotfun is the official handle; @nikshepsvn bios as onchain ETFs @stonksdotfun and posted the alpha site, flagship indexes and the treasury transfer. Site JS and the 1 Sep CA post name the same $STONKS address. DexScreener lists stonks.fun and @stonksdotfun on that token. No public repository URL was located. [verified R-2 R-3 R-5 R-9 R-19]

## Economics and activity

DexScreener STONKS/USDG Uniswap v3: 24h volume $6,138.39, market cap $648,468, pair liquidity $409,860.91 at 2026-09-03T02:57:00Z. Blockscout: 141 STONKS holders; MAG7 1 holder and totalSupply 0.993…. DEGEN and SILICON totalSupply 0; no DexScreener pairs for the three baskets. [verified R-11 R-16 R-19]

## Material risks

- Basket factory, MAG7, DEGEN, SILICON and the cash-redeem router have unverified source; createBasket is callable by the same EOA that created $STONKS. [verified R-17 R-22 R-23]
- DEGEN and SILICON supply is 0; MAG7 has one holder. A card that treats three flagship indexes as traded books would overstate activity. [verified R-16 R-19 R-24 R-25]
- The posted 36.5% treasury burn is a social claim until the furnace address is reproduced. [claim R-6 R-10]
- No audit report was located in this review. [unknown]

## Verification passes

- Receipts: stonks.fun HTML and JS bundle, @stonksdotfun profile and five posts, two @nikshepsvn posts, Blockscout API v2 plus RPC for $STONKS, DN404Factory, StonksLauncherV3, MAG7/DEGEN/SILICON, basket factory, router and the Uniswap v3 pool, and DexScreener token-pairs were opened on 2026-09-03; excerpts are copied from those pages. [verified R-1 R-2 R-11 R-19]
- Numbers: 24h volume and market cap are the STONKS/USDG pair slice, not an all-chains figure; MAG7 holders 1 is not $STONKS holders 141. [verified R-11 R-16 R-19]
- Adversarial: the strongest contrary reading is that this is StonkBrokers, The Index, Solana StonkFun, or still only an announced pad. Official CA, DopplerDN404 source name, StonksLauncherV3, createBasket MAG7 and the stonks.fun JS map argue against those merges; census announced is below the reproduced 4663 bar. [inference R-5 R-11 R-15 R-16]

## Operations log

- Read content/census.yaml stonks-fun (announced, launch/other-pad), content/projects/stonks-fun.yaml, content/feed/stonks-fun.yaml, content/sources/stonks-fun.yaml, content/research/stonks-fun.md, content/changelog/stonks-fun.yaml. No content/pulled/stonks-fun.yaml.
- Opened https://x.com/stonksdotfun and posts 2095163004086255788, 2094794375566160068, 2094784649147162685, 2094777352668721636, 2091181573077135567 plus @nikshepsvn 2094776091118596123 and 2094784445874327557.
- Opened https://stonks.fun/ and /assets/index-BTcKrI2q.js; extracted w2, gR, n8, MAG7/DEGEN/SILICON weights.
- RPC eth_chainId / eth_blockNumber / eth_getCode / eth_call name, symbol, owner, totalSupply on rpc.mainnet.chain.robinhood.com at block 53081047.
- Blockscout API v2 address, token, smart-contract and transaction endpoints for $STONKS, DN404Factory, StonksLauncherV3, MAG7, DEGEN, SILICON, basket factory, router, Uniswap v3 pool, YOWL.
- DexScreener token-pairs for $STONKS, MAG7, DEGEN, SILICON; api.llama.fi/protocols search (no stonks.fun row; stonkfun is Solana / LaunchOnSF).
- GitHub search stonks.fun OR stonksdotfun: no official org.
- $REDACTED ZEC-pair from the 2026-08-31 desk map was not located on chain 4663 this pass.
- Time spent: one collector pass, then write.
