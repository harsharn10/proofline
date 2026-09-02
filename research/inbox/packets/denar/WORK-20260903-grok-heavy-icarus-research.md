---
# Packet v2 (docs/research-system.md §5). Collector full-tier for Icarus.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: denar
name: Denar
packet_tier: full
as_of: 2026-09-03T00:45:00Z
prior_packet: null
supersedes: null
owned_slugs: [denar]
allowed_paths:
  - research/inbox/packets/denar/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Denar
  aliases: [Denar Markets]
  symbols: [DENAR]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.denar.markets
  official_handle: "@DenarMarkets"
  repository: "NULL — no repository URL on www.denar.markets, docs.denar.markets or the @DenarMarkets bio this pass; github.com/denar-markets, github.com/DenarMarkets and github.com/denarmarkets returned 404"
  possible_matches: []

classification:
  primary_leaf: credit/isolated-money-market
  secondary_leaves: [credit/lending-primitive, credit/rwa-lending, credit/morpho-curator]
  mechanism_tags: [lending, vault, rwa, oracle, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "DENAR 0x3786728a… is a verified PonsV2LauncherToken on chain 4663 with a live Uniswap v4 DENAR/ETH book; Denar Morpho 0xf0A0a337… and dnUSDG MetaMorphoV1_1 0xF0E6AD00… have verified source and non-empty code. Census announced is below the mainnet bar. Market ids, per-market caps on-chain, and an external audit remain docs or post claims. [R-8] [R-11] [R-13] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-8, CLM-9], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-7], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-11, CLM-13], note: "" }

links:
  - { kind: site, url: "https://www.denar.markets", authenticity: confirmed }
  - { kind: app, url: "https://www.denar.markets/app", authenticity: confirmed }
  - { kind: docs, url: "https://docs.denar.markets", authenticity: confirmed }
  - { kind: x, url: "https://x.com/DenarMarkets", authenticity: confirmed }

deployments:
  - label: DENAR token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-9, R-10]
  - label: Denar Morpho Blue (equity lending core)
    role: other
    address:
      value: "0xf0A0a33729270586cDD66010B1cedE649745c3A5"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-12]
  - label: AdaptiveCurveIrm (Denar instance)
    role: other
    address:
      value: "0x9316E7eDAB60eF0f489b1E4D11DDcDaa560aCbfD"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-12]
  - label: Denar USDG Vault (dnUSDG, MetaMorphoV1_1)
    role: vault
    address:
      value: "0xF0E6AD006080c48766ddb95b8c568D72bC059050"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-14, R-15, R-12]
  - label: MetaMorphoV1_1Factory
    role: factory
    address:
      value: "0x99a0bD825beDA579794F3f715ab3984310C7226E"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-16]
  - label: DenarLiquidator (equity)
    role: other
    address:
      value: "0x4d61E8a7eF442eb077650D349781F2cc3Ebe42d1"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-17]
  - label: Denar Frontier USDG (dnFRONT)
    role: vault
    address:
      value: "0x338b2f252dae1deb00Afb700128e592a19F8918c"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-12, R-19]
  - label: Protocol owner / deployer
    role: admin
    address:
      value: "0xdCB002787Fb86873051b838582063517FDc47c6F"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-4, R-18, R-12]
  - label: Morpho Blue (canonical; not Denar-owned)
    role: other
    address:
      value: "0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-12]

metrics:
  - { kind: tvl, value: 28709.75, currency: USDG, as_of: 2026-09-03T00:40:00Z, window: point, method: "eth_call totalAssets() on dnUSDG 0xF0E6AD006080c48766ddb95b8c568D72bC059050; USDG decimals 6", class: claim, receipt_ids: [R-12] }
  - { kind: volume_24h, value: 606232.57, currency: USD, as_of: 2026-09-03T00:40:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508 Uniswap v4 DENAR/ETH volume.h24", class: claim, receipt_ids: [R-11] }
  - { kind: holders, value: 1374, currency: null, as_of: 2026-09-03T00:35:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508 holders_count", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 862633.35, currency: USD, as_of: 2026-09-03T00:35:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508 circulating_market_cap", class: claim, receipt_ids: [R-9] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:35:00Z, receipt_ids: [R-8, R-9, R-10, R-12], result: "api/v2/addresses/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508 is_contract true is_verified true name PonsV2LauncherToken proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 (PonsV2LaunchDeployer) creation_transaction_hash 0x08990a2467549612681760507188fd128a13085230073a1518323a0ed8212e54; token name Denar Markets symbol DENAR decimals 18 holders_count 1374 total_supply 1e27 circulating_market_cap 862633.35; tx launchToken on PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e from 0xa6f3EEaa4841218Ba07B94deE9805f98276F513a at 2026-08-30T21:37:55Z block 50334878 pairToken 0x000…000 socials[0] https://x.com/DenarMarkets; eth_getCode non-empty (6498 hex chars); eth_call name/symbol decode Denar Markets/DENAR; owner() reverts; eth_chainId 0x1237 (4663) eth_blockNumber 52962460" }
  - { id: REP-2, method: api, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-11], result: "DexScreener token-pairs/v1/robinhood/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508 returned 11 pairs; largest Uniswap v4 DENAR/ETH pairAddress 0x8e1a7addeed794d59f04755f7bd1a8d47c1eb1c60f7891587d30cd8616699f3c labels [v4] quote ETH 0x000…000 liquidity.usd 81578.22 volume.h24 606232.57 priceUsd 0.0008140 fdv 814036 pairCreatedAt 2026-08-30T21:37:58Z; info.websites https://www.denar.markets/ info.socials x.com/DenarMarkets; second Uniswap DENAR/USDG 0xfe044131… liquidity.usd 9084.95" }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-12, R-13, R-14, R-15, R-16, R-17, R-18], result: "eth_getCode non-empty on Morpho 0xf0A0a337… (33806 hex), IRM 0x9316E7eD… (4586), vault 0xF0E6AD00… (39540), factory 0x99a0bD82… (48698), liquidator 0x4d61E8a7… (7780); admin 0xdCB00278… code empty (len 2). Blockscout: Morpho verified name Morpho creator 0xdCB00278… tx 0x941323ac… 2026-08-07T18:44:49Z; vault verified name MetaMorphoV1_1 creator factory createMetaMorpho 2026-08-07T18:45:37Z constructor owner 0xdCB00278… morpho 0xf0A0a337… initialTimelock 0 asset USDG 0x5fc5360D… name Denar USDG Vault symbol dnUSDG. eth_call vault owner() 0xdCB00278… curator() 0x0 guardian() 0x0 timelock() 86400 fee() 0 feeRecipient() 0xdCB00278… supplyQueueLength() 6 totalAssets() 28709750099 (USDG 6 decimals = 28709.75); token holders_count on vault 19. Morpho owner() 0xdCB00278…. Liquidator verified name DenarLiquidator owner() 0xdCB00278…" }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T00:30:00Z, receipt_ids: [R-1, R-2, R-7, R-10], result: "www.denar.markets title Denar — the money market for tokenized stocks; footer href https://robinhoodchain.blockscout.com/token/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508; footer/social href https://x.com/DenarMarkets; docs.denar.markets links x.com/DenarMarkets and the same token address; @DenarMarkets bio URL field http://denar.markets; Pons launchToken params socials[0] https://x.com/DenarMarkets" }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-12, R-19], result: "eth_getCode 0x338b2f252dae1deb00Afb700128e592a19F8918c non-empty (43618 hex); eth_call name/symbol Denar Frontier USDG / dnFRONT asset() USDG 0x5fc5360D… totalAssets() 10000000 (10 USDG) owner() and curator() 0xdCB00278…; Blockscout api/v2/addresses is_contract false is_verified false name Denar Frontier USDG creator null. Adapter 0xF2656B3277480979712c5aC451c82A3125227Ffe eth_getCode non-empty (23570 hex); Blockscout is_contract false" }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-34], result: "eth_getCode 0x07f5b6823751c2e2cd4560f28af75ff887102241 empty (0x); Blockscout is_contract false. 4663 PONS is 0x39dBED3a2bd333467115dE45665cC57F813C4571 per docs" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Isolated Morpho Blue markets on Robinhood Chain: lenders deposit USDG into dnUSDG which allocates across per-stock markets behind caps; borrowers post listed Stock Tokens and draw USDG", class: claim, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.denar.markets", class: verified, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@DenarMarkets", class: verified, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-1, R-7, R-10], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-1, R-5, R-8, R-9], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-8, R-9, R-11, R-13, R-14], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: identity.symbol, value: "DENAR", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: relationship, value: "DENAR creator_address_hash is PonsV2LaunchDeployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42; creation tx launchToken on PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; primary book is Uniswap v4 DENAR/ETH (quote 0x000…000)", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-8, R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0xf0A0a33729270586cDD66010B1cedE649745c3A5", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3, R-13, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "0xF0E6AD006080c48766ddb95b8c568D72bC059050", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3, R-14, R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "0xdCB002787Fb86873051b838582063517FDc47c6F", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3, R-4, R-12, R-18], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "86400 seconds on dnUSDG; constructor initialTimelock was 0", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-12, R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: control.privileged-role, value: "dnUSDG curator() 0x0 guardian() 0x0; feeRecipient() 0xdCB00278…; Frontier curator() 0xdCB00278…", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-12], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-13, field: product.mechanism, value: "PONS/USDG is an on-chain-native market at 38.5% LLTV on canonical Morpho 0x9D53d5…, priced by a 5-minute Uniswap v3 TWAP, in a separate Frontier vault so equity lenders are not exposed", class: claim, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "No external audit report URL was located on the site, docs, X bio or GitHub this pass; docs state an external audit is planned", class: unknown, observed_at: 2026-09-03T00:32:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "Docs changelog: launched after an internal adversarial security review; all findings fixed or documented", class: claim, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: 1374, class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: 606232.57, class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-11], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: 28709.75, class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-19, field: identity.repository, value: "NULL — no repository URL on official surfaces this pass", class: unknown, observed_at: 2026-09-03T00:32:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: team.identity, value: "No legal entity or named operators on the site or docs this pass; public surfaces are denar.markets, docs.denar.markets and @DenarMarkets; protocol deployer 0xdCB00278…; token launch from 0xa6f3EEaa…", class: claim, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-1, R-4, R-7, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: other, value: "Token docs: the DENAR contract is live; there has been no public sale; distribution and buyback parameters publish at generation", class: claim, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: other, value: "DENAR was created by PonsV2LaunchFactory launchToken on 2026-08-30; 1374 holders and a Uniswap v4 DENAR/ETH book with 81578.22 USD liquidity this pass", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-8, R-9, R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: other, value: "Official 2026-08-31 vote post listed ethereum:0x07f5b6823751c2e2cd4560f28af75ff887102241 among BACKED, INDEX and NET; that address has no code on 4663; flags wrong-chain, ca-collision", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-26, R-34], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-24, field: product.mechanism, value: "Protocol fee on borrower interest is 10%, hard-capped at 25% by the core; vault performance fee 0%", class: claim, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-20], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-25, field: product.mechanism, value: "dUSD is not live; docs state contracts are written and tested but nothing is deployed and nothing can be minted", class: claim, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-32], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0x338b2f252dae1deb00Afb700128e592a19F8918c", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3, R-12, R-19], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-27, field: control.threshold, value: "Admin roles are a single EOA 0xdCB00278… with empty code; no Safe or guardian address on the equity vault this pass", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-4, R-12, R-18], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-28, field: other, value: "api.llama.fi/protocol/denar and /denar-markets returned HTTP 400; no DefiLlama protocol row named Denar on Robinhood Chain this pass", class: claim, observed_at: 2026-09-03T00:32:00Z, receipt_ids: [R-29], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: product.mechanism, value: "Docs and site: NVDA/AAPL/MSFT/TSLA LLTV 62.5%; SPY/QQQ 77%; PONS 38.5%; six equity oracles plus PONS DenarTwapOracle are documented addresses with non-empty code", class: claim, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-1, R-3, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-30, field: identity.name, value: "Denar Markets", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-1, R-9, R-10], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-31, field: product.mechanism, value: "Official 2026-08-30 post: vault seeded with 10,000 USDG; caps 2,500 per vault rising to 5,000 after the on-chain timelock; APR around 0.05%", class: claim, observed_at: 2026-09-03T00:42:00Z, receipt_ids: [R-35], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: taxonomy.primary-leaf, value: "credit/isolated-money-market", class: claim, observed_at: 2026-09-03T00:30:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: other
    claim_ids: [CLM-21, CLM-22]
    material_effect: true
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Official account posted stock and PONS deposit caps raised"
    summary: "Stocks 30,000 to 60,000 USDG; PONS 10,000 to 20,000 USDG, posted as small steps."
    occurred_at: 2026-09-02T20:07:01Z
    observed_at: 2026-09-03T00:42:00Z
    affected_fields: [product.mechanism, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-2
    type: company
    title: "$DENAR listed on CoinGecko, per the official account"
    summary: "@DenarMarkets posted that DENAR is listed on CoinGecko at coingecko.com/en/coins/denar-markets."
    occurred_at: 2026-09-02T16:32:00Z
    observed_at: 2026-09-03T00:42:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-3
    type: company
    title: "Official account posted PONS 10,000 USDG cap nearly filled"
    summary: "The 10,000 USDG PONS deposit cap was posted as almost filled, with a raise coming in hours."
    occurred_at: 2026-09-02T08:00:00Z
    observed_at: 2026-09-03T00:42:00Z
    affected_fields: [product.mechanism, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-4
    type: company
    title: "Official account posted PONS as first on-chain-native market"
    summary: "@DenarMarkets posted @ponsdotfamily as the first blue-chip token added to Denar Markets."
    occurred_at: 2026-09-01T21:37:25Z
    observed_at: 2026-09-03T00:42:00Z
    affected_fields: [product.mechanism, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-5
    type: company
    title: "Caps raised 2,500 to 5,000 USDG after the 1-day timelock"
    summary: "Per-market caps 2,500 to 5,000 USDG; vault capacity 15,000 to 30,000 USDG after the timelock."
    occurred_at: 2026-08-31T23:10:10Z
    observed_at: 2026-09-03T00:42:00Z
    affected_fields: [product.mechanism, control.timelock]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-6
    type: risk
    title: "Vote ballot tagged an Ethereum address among listing choices"
    summary: "The 31 Aug vote listed ethereum:0x07f5b682… with BACKED, INDEX and NET; that address has no code on 4663."
    occurred_at: 2026-08-31T18:48:51Z
    observed_at: 2026-09-03T00:42:00Z
    affected_fields: [deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-26, R-34]
  - id: EVT-7
    type: company
    title: "Official account posted the DENAR token address for DexScreener"
    summary: "CA 0x3786728a2c49c4617bf4fe5bd82b90b6b0df5508 posted as added to the site footer and docs."
    occurred_at: 2026-08-30T22:10:19Z
    observed_at: 2026-09-03T00:42:00Z
    affected_fields: [deployment.address, identity.domain]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-27]
  - id: EVT-8
    type: onchain
    title: "DENAR token created on chain 4663 via Pons v2 launchToken"
    summary: "0x3786728a… is a verified PonsV2LauncherToken; Uniswap v4 DENAR/ETH liquidity was 81578.22 USD this pass."
    occurred_at: 2026-08-30T21:37:55Z
    observed_at: 2026-09-03T00:35:00Z
    affected_fields: [deployment.address, lifecycle, identity.symbol]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-9, R-10, R-11]

receipts:
  - { id: R-1, publisher: Denar, title: "denar.markets home HTML", url: "https://www.denar.markets/", published_at: null, accessed_at: 2026-09-03T00:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-20, CLM-29, CLM-30, CLM-32], excerpt: "title Denar — the money market for tokenized stocks. Lend USDG for yield, or borrow against your stock tokens without selling them. Isolated markets, priced by Chainlink, on Robinhood Chain. Open markets 7 / 7 Plus one ERC-4626 vault. href https://x.com/DenarMarkets. Footer token href https://robinhoodchain.blockscout.com/token/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508. Isolated Morpho Blue markets · Chainlink price feeds · liquidations route through Rialto." }
  - { id: R-2, publisher: Denar, title: "What is Denar / How Denar works", url: "https://docs.denar.markets/how-denar-works.md", published_at: "2026-09-01T21:39:00Z", accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-32], excerpt: "The foundation is Morpho Blue: a minimal, immutable lending engine. Each Denar market is a sealed five-part tuple — collateral asset, loan asset, oracle, interest model, and liquidation threshold — fixed forever at creation. The Denar USDG Vault (dnUSDG) does it for them: one ERC-4626 deposit, allocated across the stock markets according to a supply queue and per-market caps. Raising a cap goes through a 1-day timelock." }
  - { id: R-3, publisher: Denar, title: "Contracts", url: "https://docs.denar.markets/reference/contracts.md", published_at: "2026-09-01T21:39:00Z", accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-9, CLM-10, CLM-13, CLM-26, CLM-29], excerpt: "Robinhood Chain (chain id 4663). Equity stack: Morpho Blue 0xf0A0a33729270586cDD66010B1cedE649745c3A5; dnUSDG 0xF0E6AD006080c48766ddb95b8c568D72bC059050; factory 0x99a0bD825beDA579794F3f715ab3984310C7226E. $DENAR 0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508. Canonical Morpho 0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010. dnFRONT 0x338b2f252dae1deb00Afb700128e592a19F8918c. Admin 0xdCB002787Fb86873051b838582063517FDc47c6F." }
  - { id: R-4, publisher: Denar, title: "Governance & admin powers", url: "https://docs.denar.markets/protocol/governance.md", published_at: "2026-09-01T21:39:00Z", accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-10, CLM-20, CLM-27], excerpt: "Admin roles are currently held by the deploying address — a single key, publicly identifiable on the Contracts page. The hardening path, in order: a dedicated operational key for the liquidation bot, then a multisig for the owner and curator roles, then a separate guardian. The Frontier vault launched without a delay on cap increases. A formal bug-bounty program is planned alongside the external audit." }
  - { id: R-5, publisher: Denar, title: "$DENAR — the value engine", url: "https://docs.denar.markets/token/denar.md", published_at: "2026-08-30T21:50:00Z", accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-21], excerpt: "The $DENAR token contract is live at 0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508 on Robinhood Chain — that address, printed here and on the contracts page, is the only official one. There has been no public sale. Distribution and the buyback parameters are published at generation. 18 decimals, 1,000,000,000 supply." }
  - { id: R-6, publisher: Denar, title: "Changelog", url: "https://docs.denar.markets/changelog.md", published_at: "2026-09-01T23:47:00Z", accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-13, CLM-15], excerpt: "September 1, 2026: PONS is live — 5-minute Uniswap v3 time-weighted average, canonical Morpho deployment, own vault. August 31: seed caps double to 5,000 USDG per market after a 1-day timelock. August 7: Denar launches on Robinhood Chain, six isolated markets, launched after an internal adversarial security review; all findings fixed or documented." }
  - { id: R-7, publisher: X, title: "@DenarMarkets profile", url: "https://x.com/DenarMarkets", published_at: "2026-08-07T18:40:03Z", accessed_at: 2026-09-03T00:30:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-20], excerpt: "Name Denar. Handle @DenarMarkets. Bio: Borrow against your stocks (and tokens) without selling them. The money market for tokenized equities on Robinhood. Isolated markets, priced by Chainlink. URLs: http://denar.markets. Joined 2026-08-07." }
  - { id: R-8, publisher: Blockscout, title: "Address 0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508", published_at: null, accessed_at: 2026-09-03T00:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-22, EVT-8], excerpt: "hash 0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508 is_contract true is_verified true name PonsV2LauncherToken proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x08990a2467549612681760507188fd128a13085230073a1518323a0ed8212e54" }
  - { id: R-9, publisher: Blockscout, title: "Token Denar Markets (DENAR)", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508", published_at: null, accessed_at: 2026-09-03T00:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-16, CLM-22, CLM-30, EVT-8], excerpt: "name Denar Markets symbol DENAR decimals 18 holders_count 1374 total_supply 1000000000000000000000000000 type ERC-20 circulating_market_cap 862633.3489929412 exchange_rate 0.00086263" }
  - { id: R-10, publisher: Blockscout, title: "DENAR creation tx launchToken", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x08990a2467549612681760507188fd128a13085230073a1518323a0ed8212e54", published_at: "2026-08-30T21:37:55.000000Z", accessed_at: 2026-09-03T00:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-7, CLM-20, CLM-22, EVT-8], excerpt: "hash 0x08990a24… status ok timestamp 2026-08-30T21:37:55.000000Z from 0xa6f3EEaa4841218Ba07B94deE9805f98276F513a to 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory method launchToken result success. params name Denar Markets symbol DENAR socials https://x.com/DenarMarkets pairToken 0x0000000000000000000000000000000000000000 block 50334878" }
  - { id: R-11, publisher: DexScreener, title: "DENAR token-pairs on robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x3786728a2c49C4617Bf4FE5BD82b90B6B0dF5508", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-17, CLM-22, EVT-8], excerpt: "11 pairs. Uniswap v4 DENAR/ETH pairAddress 0x8e1a7addeed794d59f04755f7bd1a8d47c1eb1c60f7891587d30cd8616699f3c labels [v4] quote ETH 0x000…000 liquidity.usd 81578.22 volume.h24 606232.57 priceUsd 0.0008140 fdv 814036 info.websites https://www.denar.markets/ socials x.com/DenarMarkets. DENAR/USDG 0xfe044131… liquidity.usd 9084.95" }
  - { id: R-12, publisher: Robinhood Chain RPC, title: "eth_getCode / eth_call Denar stack", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-10, CLM-11, CLM-12, CLM-18, CLM-24, CLM-26, CLM-27, CLM-29], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 52962460. Non-empty code: token 6498, Morpho 33806, IRM 4586, vault 39540, factory 48698, liq 7780, frontier 43618, adapter 23570, nvda oracle 3836, pons oracle 13056, canon Morpho 31166. Admin empty. vault owner 0xdCB00278… curator 0x0 guardian 0x0 timelock 86400 fee 0 feeRecipient 0xdCB00278… supplyQueueLength 6 totalAssets 28709750099. USDG decimals 6. Frontier name Denar Frontier USDG symbol dnFRONT totalAssets 10000000 owner 0xdCB00278…" }
  - { id: R-13, publisher: Blockscout, title: "Denar Morpho 0xf0A0a337…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xf0A0a33729270586cDD66010B1cedE649745c3A5", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-8], excerpt: "hash 0xf0A0a33729270586cDD66010B1cedE649745c3A5 is_contract true is_verified true name Morpho proxy_type null creator_address_hash 0xdCB002787Fb86873051b838582063517FDc47c6F creation_transaction_hash 0x941323ac65bea94656bac34af85f0c909a42641f77b397329a9411a3a6126018 timestamp 2026-08-07T18:44:49Z" }
  - { id: R-14, publisher: Blockscout, title: "dnUSDG MetaMorphoV1_1 0xF0E6AD00…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xF0E6AD006080c48766ddb95b8c568D72bC059050", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-9], excerpt: "hash 0xF0E6AD006080c48766ddb95b8c568D72bC059050 is_contract true is_verified true name MetaMorphoV1_1 creator_address_hash 0x99a0bD825beDA579794F3f715ab3984310C7226E creation_transaction_hash 0x6896149ae40cd645b4800629032e2ff4ec05b8fbedc066049aef883bfb41ae20 method createMetaMorpho 2026-08-07T18:45:37Z. Token name Denar USDG Vault symbol dnUSDG holders_count 19 total_supply 28709731758478996879609" }
  - { id: R-15, publisher: Blockscout, title: "dnUSDG verified source / constructor", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0xF0E6AD006080c48766ddb95b8c568D72bC059050", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11], excerpt: "name MetaMorphoV1_1 is_fully_verified true file_path lib/metamorpho-v1.1/src/MetaMorphoV1_1.sol compiler v0.8.26. decoded_constructor_args owner 0xdCB002787Fb86873051b838582063517FDc47c6F morpho 0xf0A0a33729270586cDD66010B1cedE649745c3A5 initialTimelock 0 _asset 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 __name Denar USDG Vault __symbol dnUSDG. ABI includes owner, curator, guardian, timelock, submitCap, acceptCap." }
  - { id: R-16, publisher: Blockscout, title: "MetaMorphoV1_1Factory 0x99a0bD82…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x99a0bD825beDA579794F3f715ab3984310C7226E", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0x99a0bD825beDA579794F3f715ab3984310C7226E is_contract true is_verified true name MetaMorphoV1_1Factory creator_address_hash 0xdCB002787Fb86873051b838582063517FDc47c6F" }
  - { id: R-17, publisher: Blockscout, title: "DenarLiquidator 0x4d61E8a7…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x4d61E8a7eF442eb077650D349781F2cc3Ebe42d1", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "hash 0x4d61E8a7eF442eb077650D349781F2cc3Ebe42d1 is_contract true is_verified true name DenarLiquidator creator_address_hash 0xdCB002787Fb86873051b838582063517FDc47c6F" }
  - { id: R-18, publisher: Blockscout, title: "Admin 0xdCB00278…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xdCB002787Fb86873051b838582063517FDc47c6F", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-27], excerpt: "hash 0xdCB002787Fb86873051b838582063517FDc47c6F is_contract false is_verified false name null creator_address_hash null" }
  - { id: R-19, publisher: Blockscout, title: "Frontier 0x338b2f25… address page", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x338b2f252dae1deb00Afb700128e592a19F8918c", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-26], excerpt: "hash 0x338b2f252dae1deb00Afb700128e592a19F8918c is_contract false is_verified false name Denar Frontier USDG creator_address_hash null creation_transaction_hash null. RPC eth_getCode is non-empty and name() returns Denar Frontier USDG." }
  - { id: R-20, publisher: Denar, title: "Interest & fees", url: "https://docs.denar.markets/protocol/fees.md", published_at: "2026-09-01T21:39:00Z", accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-24], excerpt: "Protocol fee on interest Current value 10% Hard cap 25% — enforced by the immutable core. Vault performance fee Current value 0% Hard cap 50%. Deposit / withdrawal fees None. Liquidation bonus ≈ 12.7% stocks / ≈ 7.4% ETFs. 90% of interest to lenders, 10% protocol fee." }
  - { id: R-21, publisher: Denar, title: "Deposit caps raised", url: "https://x.com/DenarMarkets/status/2095242112438571028", published_at: "2026-09-02T20:07:01Z", accessed_at: 2026-09-03T00:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Deposit caps raised across Denar Markets. Stocks: 30,000 → 60,000 USDG. PONS: 10,000 → 20,000 USDG. Small steps, deliberately. Remember, Rome wasn't built in a day." }
  - { id: R-22, publisher: Denar, title: "CoinGecko listing post", url: "https://x.com/DenarMarkets/status/2095187998631686368", published_at: "2026-09-02T16:32:00Z", accessed_at: 2026-09-03T00:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "$DENAR has been listed on @coingecko. https://www.coingecko.com/en/coins/denar-markets" }
  - { id: R-23, publisher: Denar, title: "PONS cap almost filled", url: "https://x.com/DenarMarkets/status/2095059150539542704", published_at: "2026-09-02T08:00:00Z", accessed_at: 2026-09-03T00:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "The initial deposit cap of 10,000 USDG has almost been filled. The cap will be increased in the upcoming hours. Quoted the 1 Sep PONS listing thread." }
  - { id: R-24, publisher: Denar, title: "PONS market listing thread", url: "https://x.com/DenarMarkets/status/2094902472791785660", published_at: "2026-09-01T21:37:25Z", accessed_at: 2026-09-03T00:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "A new era for Robinhood Chain starts here. @ponsdotfamily is the first blue-chip token added to Denar Markets. What just happened will go in history books, not because there's one more market, but because of what kind of market it is." }
  - { id: R-25, publisher: Denar, title: "Caps up after 1-day timelock", url: "https://x.com/DenarMarkets/status/2094563425980387587", published_at: "2026-08-31T23:10:10Z", accessed_at: 2026-09-03T00:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "After a 1-day on-chain timelock, caps are finally up! Deposit caps are up: 2,500 → 5,000 USDG per market. Vault total capacity 15,000 → 30,000 USDG. More room to lend/borrow, and the vote for the 7th market is still open: https://www.denar.markets/vote" }
  - { id: R-26, publisher: Denar, title: "Seventh-market vote ballot", url: "https://x.com/DenarMarkets/status/2094497663928729956", published_at: "2026-08-31T18:48:51Z", accessed_at: 2026-09-03T00:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-23, EVT-6], excerpt: "Which token gets a market on Denar? $DENAR holders decide. On the ballot: $BACKED · $INDEX · $NET · ethereum:0x07f5b6823751c2e2cd4560f28af75ff887102241. One round, 24h. Your weight is your $DENAR when you sign. It's a signature, not a transaction — no gas, no approval." }
  - { id: R-27, publisher: Denar, title: "DexScreener CA verify post", url: "https://x.com/DenarMarkets/status/2094185976977375354", published_at: "2026-08-30T22:10:19Z", accessed_at: 2026-09-03T00:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-7], excerpt: "Dexscreener asked us to verify ownership of $DENAR token address. The contract address is: 0x3786728a2c49c4617bf4fe5bd82b90b6b0df5508. It has been added both on our website footer and in the docs. @dexscreener" }
  - { id: R-28, publisher: Denar, title: "Markets live post", url: "https://x.com/DenarMarkets/status/2094178792948306244", published_at: "2026-08-30T21:41:46Z", accessed_at: 2026-09-03T00:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [], excerpt: "Tokenized stocks deserve their own money market. @DenarMarkets is now live. Lend USD, earn yield, or borrow against your stock tokens without selling them. Built on @RobinhoodCrypto. Priced by @Chainlink." }
  - { id: R-29, publisher: DefiLlama, title: "protocol/denar", url: "https://api.llama.fi/protocol/denar", published_at: null, accessed_at: 2026-09-03T00:32:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-28], excerpt: "HTTP 400 Bad Request. /protocol/denar-markets also 400. Protocols search returned Denaria (Linea perps) and Denario (Polygon silver), neither matching denar.markets." }
  - { id: R-30, publisher: GitHub, title: "github.com/denar-markets", url: "https://github.com/denar-markets", published_at: null, accessed_at: 2026-09-03T00:32:00Z, kind: repository, authority: unknown, authenticity: unconfirmed, supports: [], excerpt: "HTTP 404 Not Found. github.com/DenarMarkets and github.com/denarmarkets also 404. api.github.com/search/users?q=denar+markets total_count 0." }
  - { id: R-31, publisher: Telegram, title: "t.me/DenarMarkets preview", url: "https://t.me/DenarMarkets", published_at: null, accessed_at: 2026-09-03T00:32:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [], excerpt: "Telegram: View @DenarMarkets. tgme_page_extra 4 subscribers. t.me/denarmarkets also 4 subscribers. Neither handle is linked from www.denar.markets or the @DenarMarkets bio this pass." }
  - { id: R-32, publisher: Denar, title: "dUSD — the Denar dollar", url: "https://docs.denar.markets/dusd/overview.md", published_at: "2026-08-30T21:55:00Z", accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-25], excerpt: "dUSD is not live yet. The contracts are written and tested, but nothing is deployed on-chain and nothing can be minted or staked today. dUSD is not dnUSDG. Deployment on Robinhood Chain follows real borrowing demand. First minting window: priority access for Denar Points holders." }
  - { id: R-33, publisher: Blockscout, title: "DenarTwapOracle 0x07a8b7c2…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x07a8b7c2efe8cb37b4a3FE01f87d711B205c5aFf", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "hash 0x07a8b7c2efe8cb37b4a3FE01f87d711B205c5aFf is_contract true is_verified true name DenarTwapOracle creator_address_hash 0xdCB002787Fb86873051b838582063517FDc47c6F. eth_getCode non-empty (13056 hex chars)." }
  - { id: R-34, publisher: Blockscout, title: "0x07f5b682… on chain 4663", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x07f5b6823751c2e2cd4560f28af75ff887102241", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-23, EVT-6], excerpt: "eth_getCode empty (0x). Address used as ethereum: cashtag in the 31 Aug Denar vote post. Docs list 4663 PONS as 0x39dBED3a2bd333467115dE45665cC57F813C4571." }
  - { id: R-35, publisher: Denar, title: "Vault seeded 10,000 USDG", url: "https://x.com/DenarMarkets/status/2094204308220768359", published_at: "2026-08-30T23:23:10Z", accessed_at: 2026-09-03T00:42:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-31], excerpt: "We just seeded the vault with 10,000 [USDG cashtag] from the protocol reserve. Deposit your stock tokens and borrow against them, functionally free. APRs are around 0.05%. Caps are $2,500 per vault today, rising to $5,000 in ~24 hours: the raise is already on-chain, waiting out the vault's timelock." }

gaps:
  - { priority: P0, question: "What are the Morpho marketIds for NVDA/AAPL/MSFT/TSLA/SPY/QQQ/PONS, and do idToMarketParams on 0xf0A0a337… and 0x9D53d5… match the documented oracles, LLTVs and loan/collateral tokens?", checked: "docs contracts page, site market table, vault supplyQueueLength 6, 2026-09-03; no idToMarketParams eth_call this pass", next: "read supplyQueue(i) on dnUSDG and Frontier, then idToMarketParams on both Morpho cores" }
  - { priority: P0, question: "Who submits and accepts caps while curator() is 0x0 on dnUSDG, and which allocator addresses are set?", checked: "eth_call curator() 0x0 guardian() 0x0 owner() 0xdCB00278…; ABI has setIsAllocator / setCurator / submitCap", next: "eth_call isAllocator for the admin and any bot addresses; scan submitCap logs" }
  - { priority: P1, question: "Is there an external audit whose scope and commit match the deployed Morpho instance, vault, oracles and liquidator?", checked: "site, docs (internal review; external planned), X bio, github 404, 2026-09-03", next: "open any report URL the project posts and match commit/address scope" }
  - { priority: P1, question: "Why does Blockscout report Frontier 0x338b2f25… and adapter 0xF2656B32… as is_contract false when RPC returns bytecode, and is Frontier source-verified anywhere?", checked: "Blockscout address API is_contract false; RPC eth_getCode non-empty; name() Denar Frontier USDG", next: "re-query explorer after indexing; verify source if a publish lands" }
  - { priority: P1, question: "Is the 10% Morpho protocol fee encoded on 0xf0A0a337… per market, and does 10% of fees buy and burn BACKED as the partnership page states?", checked: "docs fees and BACKED pages; vault fee() 0; no fee(id) eth_call this pass", next: "eth_call Morpho fee(id) / feeRecipient for each market and trace fee transfers" }
  - { priority: P2, question: "Are t.me/DenarMarkets or t.me/denarmarkets official, and is there a public repository?", checked: "site and docs have no telegram or github URL; both telegram previews show 4 subscribers; three GitHub org paths 404", next: "record a handle or repo only if the site or X bio links it" }

---

# Denar — research packet

## What it is

The chain's isolated money market for tokenized stocks. Lenders deposit USDG into an ERC-4626 vault that allocates behind per-market caps; borrowers post NVDA, AAPL, SPY or other listed tokens and draw USDG without selling. Equity books use Chainlink with market-hours guards; PONS uses a Uniswap TWAP and a separate vault. @DenarMarkets runs denar.markets.

Themes: lending, rwa, vault, stock-paired:NVDA

## Why it matters

Denar is a live credit venue for official Stock Tokens on Robinhood Chain, with its own Morpho Blue instance for equities and the canonical Morpho for PONS. Census still says announced; a verified PonsV2LauncherToken, a Uniswap v4 DENAR/ETH book, and verified Morpho and MetaMorpho contracts on 4663 meet the mainnet bar. It is not Longbow (Morpho overlay at longbow.cash) and not Arrow (CDP).

## What could go wrong

Admin roles sit on one EOA. The equity vault has no curator and no guardian; cap raises use a 1-day timelock that started at zero in the constructor. Docs say there has been no public sale while the token is a Pons v2 launch with a live DEX book. A listing vote tagged an Ethereum address that has no code on 4663. dUSD is not deployed. No external audit URL was located.

## Product and mechanics

Borrowers post listed collateral into isolated Morpho Blue markets and draw USDG. The site lists seven open markets plus one ERC-4626 vault: PONS/USDG at 38.5% LLTV, NVDA/AAPL/MSFT/TSLA at 62.5%, SPY/QQQ at 77%. Equity markets settle on Denar's Morpho `0xf0A0a33729270586cDD66010B1cedE649745c3A5` with DenarOracle wrappers on Chainlink. Docs state each market tuple is immutable at creation. [claim R-1 R-2 R-3]

Lenders deposit USDG into Denar USDG Vault (`dnUSDG`) `0xF0E6AD006080c48766ddb95b8c568D72bC059050`, a verified MetaMorphoV1_1 whose asset is USDG `0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`. `supplyQueueLength()` is 6. `totalAssets()` this pass is 28709.75 USDG. Direct market lending is documented as a path that skips the vault. [verified R-12 R-14 R-15]

PONS is documented as a different stack: 5-minute Uniswap v3 TWAP (`DenarTwapOracle` `0x07a8b7c2…`, verified), canonical Morpho `0x9D53d5E3bd5E8d4Cbfa6DB1ca238AEA02E651010`, and Frontier vault `0x338b2f252dae1deb00Afb700128e592a19F8918c` (`dnFRONT`). RPC `name()`/`symbol()` decode Denar Frontier USDG / dnFRONT with 10 USDG `totalAssets()` this pass; Blockscout still reports that address as not a contract. [claim R-3 R-6] [verified R-12 R-33]

DENAR is a Pons v2 launch token. `creator_address_hash` is PonsV2LaunchDeployer `0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42`; the creation transaction is `launchToken` on PonsV2LaunchFactory `0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e` at 2026-08-30T21:37:55Z with `pairToken` the zero address. The deepest book this pass is Uniswap v4 DENAR/ETH (poolId `0x8e1a7add…`). [verified R-8 R-10 R-11]

dUSD, the documented 1:1 USDG dollar and sdUSD staked share, is not deployed. Docs state the first minting window is reserved for Denar Points holders. [claim R-32]

## Control and security

`owner()` on Denar Morpho, dnUSDG, DenarLiquidator and Frontier returns EOA `0xdCB002787Fb86873051b838582063517FDc47c6F`, which also created those contracts. The address has no code. Docs name it the deploying address for the seed phase and list a later path through a dedicated bot key, a multisig, then a guardian. [verified R-12 R-13 R-18] [claim R-4]

dnUSDG `timelock()` is 86400 seconds. The constructor set `initialTimelock` to 0; the 1-day value is a later accept. `curator()` and `guardian()` return the zero address. `fee()` is 0; `feeRecipient()` is the same admin EOA. Frontier `timelock()` reverts, matching the docs line that the Frontier vault launched without a delay on cap increases. [verified R-12 R-15] [claim R-4]

Docs attribute Morpho Blue's immutability and an internal adversarial review to the launch. No external audit report was linked from the site, docs, X bio or GitHub this pass. Canonical Morpho `0x9D53d5…` is Morpho's verified primitive, not a Denar-owned contract. [claim R-6] [verified R-12] [unknown]

## Team and provenance

Public identity is the site, docs and `@DenarMarkets`. www.denar.markets links the X handle and the token explorer URL; the X bio URL field is denar.markets; the Pons `launchToken` socials field is `https://x.com/DenarMarkets`. No legal name appeared on those pages. github.com/denar-markets, github.com/DenarMarkets and github.com/denarmarkets returned 404. t.me/DenarMarkets and t.me/denarmarkets show 4 subscribers and are not linked from the site. The token launch transaction is from EOA `0xa6f3EEaa4841218Ba07B94deE9805f98276F513a`, a different key from the protocol deployer. [verified R-1 R-7 R-10] [claim R-31]

## Economics and activity

dnUSDG `totalAssets()` this pass: 28709.75 USDG (USDG 6 decimals). That is the vault's on-chain asset balance, not a DefiLlama chain slice. api.llama.fi/protocol/denar returned HTTP 400. Frontier `totalAssets()` is 10 USDG. dnUSDG has 19 holders. [verified R-12] [claim R-29]

DexScreener Uniswap v4 DENAR/ETH (not an all-pairs total): liquidity 81578.22 USD, 24h volume 606232.57 USD, price 0.0008140 USD, fdv 814036 USD. Blockscout token: 1374 holders, circulating_market_cap 862633.35 USD, total supply 1e9 DENAR. [verified R-9 R-11]

Official posts described a 10,000 USDG seed, per-market caps moving 2,500 → 5,000 → 30,000/60,000 USDG, a ~0.05% APR, and a CoinGecko listing. Those posts are not the same observation as `totalAssets()` 28709.75 USDG. [claim R-21 R-22 R-25 R-35]

## Material risks

- Protocol owner, vault owner, liquidator owner, fee recipient and Frontier curator are one EOA with no code; equity vault curator and guardian are unset. [verified R-12 R-18]

- Token docs state there has been no public sale and that distribution publishes at generation; the token was created by Pons v2 `launchToken` and has 1374 holders plus a Uniswap v4 book. [disputed R-5 R-10 R-11]

- The 31 Aug listing vote tagged `ethereum:0x07f5b682…`; that address has no code on 4663. Flag: wrong-chain, ca-collision. [verified R-26 R-34]

- No external audit report was located; docs cite an internal review and a planned external audit. [claim R-4 R-6] [unknown]

- dUSD is documented as not deployed. [claim R-32]

- Frontier vault and adapter are not indexed as contracts on Blockscout this pass despite non-empty RPC code. [verified R-12 R-19]

## Verification passes

- Receipts: www.denar.markets HTML, docs.denar.markets pages (how-it-works, contracts, governance, token, fees, changelog, dUSD), X profile and named status URLs, Blockscout address/token/tx/smart-contract APIs, DexScreener token-pairs, DefiLlama protocol/denar (400), GitHub org 404s, t.me previews, and RPC eth_getCode/eth_call were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-3 R-8 R-11 R-12]

- Numbers: 28709.75 USDG is `totalAssets()` on dnUSDG, not a DefiLlama row; 606232.57 USD is DexScreener Uniswap v4 DENAR/ETH volume.h24, not an all-pairs or all-chains total; 1374 is Blockscout holders_count; cap figures in events are official posts, not the vault print. [verified R-9 R-11 R-12] [claim R-21]

- Adversarial: the strongest contrary reading is that Denar is Longbow or Arrow, or that census `announced` still holds because Morpho marketIds were not eth_called, or that the Pons token is unrelated to the lending stack. Token name Denar Markets, site footer CA, docs CA, launchToken socials field, vault name Denar USDG Vault, and the site↔handle cross-link argue against a merge; the pool and contracts on 4663 meet the mainnet bar even while market-id params stay docs claims. Docs "no public sale" versus the Pons launch remains an open conflict. [inference R-1 R-5 R-8 R-10 R-11]

## Operations log

- Read content/census.yaml denar/longbow/arrow rows, content/projects/denar.yaml, content/pulled/denar.yaml, content/feed/denar.yaml, content/sources/denar.yaml, content/changelog/denar.yaml, docs/templates/research-packet-v2.md, schema/packet.schema.json, research/inbox/grok-2026-08-30/chain-file.json denar object.
- Opened https://www.denar.markets/, /app; https://docs.denar.markets/ and llms.txt, how-denar-works, reference/contracts, protocol/governance, protocol/fees, token/denar, dusd/overview, changelog; https://x.com/DenarMarkets and named status URLs; t.me/DenarMarkets and t.me/denarmarkets; github.com/denar-markets, github.com/DenarMarkets, github.com/denarmarkets (404).
- GET Blockscout /api/v2/addresses for token, Morpho, IRM, vault, factory, liquidator, Frontier, adapter, admin, oracles, PonsV2LaunchDeployer, 0x07f5b682…; /api/v2/tokens for DENAR and dnUSDG; /api/v2/transactions for launchToken and Morpho/vault create; /api/v2/smart-contracts for dnUSDG.
- GET api.dexscreener.com/token-pairs/v1/robinhood/0x3786728a…; GET api.llama.fi/protocol/denar (400) and protocols search; CoinGecko HTML 403.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId 0x1237 (4663), eth_blockNumber 52962460, eth_getCode, eth_call name/symbol/decimals/owner/curator/guardian/timelock/fee/feeRecipient/supplyQueueLength/totalAssets/asset. Blockscout API 403 without a browser User-Agent. RPC 403 without User-Agent.
- Time on this slug: one collector pass.
