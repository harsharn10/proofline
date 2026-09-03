---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: tickeryard
name: TickerYard
packet_tier: seed
as_of: 2026-09-03T03:20:00Z
prior_packet: null
supersedes: null
owned_slugs: [tickeryard]
allowed_paths:
  - research/inbox/packets/tickeryard/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: TickerYard
  aliases: [Yardkeeper, TickerYard Bitcoin Receipt, Yardkeepers]
  symbols: [YARD, yBTC]
  entity_kind: protocol
  chain_scope: cross-chain
  official_domain: https://tickeryard.com
  official_handle: "@TickerYardHQ"
  repository: "NULL — no GitHub org or repository URL on tickeryard.com, the @TickerYardHQ bio, or a GitHub search for TickerYard / YAssetReceipt this pass"
  possible_matches:
    - slug: stonkbroker
      signals: [shared-deployer, other]
      contrary_signals:
        - "Census StonkBrokers is stonkbrokers.cash / @ClutchMarkets with collection 0x539c… and token 0xe934…"
        - "TickerYard is tickeryard.com / @TickerYardHQ with YARD 0xE3FA…5166, yBTC 0x9715…70Ed, and Yardkeepers 0x2756…8A97"
        - "StonkBrokers site lists TickerYard / $YARD as a Special Projects partner, not the StonkBrokers collection"
        - "Keep both slugs; do not merge"
    - slug: up
      signals: [other]
      contrary_signals:
        - "Census up is up33.xyz / @uponrh, the ve(3,3) AMM whose CLFactory 0x1ac9… created the YARD/WETH and yBTC/WETH pools"
        - "TickerYard is tickeryard.com / @TickerYardHQ; the pools are the liquidity venue, not the wrap or NFT product"
        - "No shared domain, handle, or reproduced protocol address"

classification:
  primary_leaf: rwa-products/synthetic-asset
  secondary_leaves: [nft-treasury/nft-fee-claim]
  mechanism_tags: [bridge, nft, rwa]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "yBTC 0x9715…70Ed is a verified YAssetReceipt on chain 4663 whose controller YAssetGateway 0x9fa6…1e19 names Arbitrum WBTC 0x2f2a…5B0f as originAsset; creditInvariant matches totalSupply 1.21238693 yBTC. YARD 0xE3FA…5166 is a verified CollectionToken; Anvil vault collection() returns Yardkeepers 0x2756…8A97 (3,333 ERC-721, source unverified). Census announced is superseded by explorer and RPC. Arbitrum vault lock was not opened this pass. [R-1] [R-4] [R-5] [R-6] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-7], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-15, CLM-20, CLM-24], note: "" }

links:
  - { kind: site, url: "https://tickeryard.com", authenticity: confirmed }
  - { kind: app, url: "https://tickeryard.com", authenticity: confirmed }
  - { kind: whitepaper, url: "https://tickeryard.com/paper/tickeryard-technical-design-paper-v1.pdf", authenticity: confirmed }
  - { kind: x, url: "https://x.com/TickerYardHQ", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/portaltickeryard", authenticity: unconfirmed }
  - { kind: other, url: "https://anvil.clutch.market/market/0xFe0b24A3b4052aD78f10fa75a27118c3e54a00e6", authenticity: unconfirmed }

deployments:
  - label: YARD (Yardkeeper CollectionToken)
    role: token
    address:
      value: "0xE3FA12dA7fa026B21817f16622E8AE48fA785166"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-11, R-12]
  - label: yBTC (TickerYard Bitcoin Receipt)
    role: token
    address:
      value: "0x9715e0a0a5f60dCa2A3F69d81Fb7f975De5870Ed"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-11, R-13]
  - label: YAssetGateway (yBTC controller)
    role: other
    address:
      value: "0x9fa6a54dbC2D69E232768e4E0970913755571e19"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-11]
  - label: Yardkeepers ERC-721
    role: other
    address:
      value: "0x2756bfFC4ccCB0cBebeB675a8593Ca80c8dB8A97"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-7, R-11]
  - label: Anvil NFTAMMVault (Yardkeepers)
    role: vault
    address:
      value: "0xFe0b24A3b4052aD78f10fa75a27118c3e54a00e6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-11, R-16]
  - label: Origin WBTC (Arbitrum One)
    role: token
    address:
      value: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f"
      chain: arbitrum-one
      source: docs
      seen: 2026-09-03
      exists_on_4663: false
      explorer_source_verified: null
    receipt_ids: [R-6, R-11]

metrics:
  - { kind: holders, value: 5302, currency: null, as_of: 2026-09-03T03:10:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xE3FA12dA7fa026B21817f16622E8AE48fA785166 holders_count", class: claim, receipt_ids: [R-4] }
  - { kind: holders, value: 2254, currency: null, as_of: 2026-09-03T03:10:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x9715e0a0a5f60dCa2A3F69d81Fb7f975De5870Ed holders_count", class: claim, receipt_ids: [R-5] }
  - { kind: volume_24h, value: 124536, currency: USD, as_of: 2026-09-03T03:12:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xE3FA12dA…5166 pair 0xEbc250ae…1f34 volume.h24 YARD/WETH on up", class: claim, receipt_ids: [R-12] }
  - { kind: market_cap, value: 1855735, currency: USD, as_of: 2026-09-03T03:12:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xE3FA12dA…5166 attributes.market_cap_usd", class: claim, receipt_ids: [R-17] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:10:00Z, receipt_ids: [R-11], result: "eth_blockNumber 0x329f23c (53080636). eth_getCode non-empty: YARD 3348 bytes, yBTC 4151, YAssetGateway 19661, Yardkeepers 10434, NFTAMMVault 8858, CCIP Router 10761; gateway owner EOA 0x04D870…bF83 code 0x; collection owner EOA 0x73D929…6348 code 0x. yBTC name TickerYard Bitcoin Receipt / yBTC decimals 8 totalSupply 121238693 (1.21238693). originAsset 0x2f2a…5B0f originChainId 42161 controller 0x9fa6…1e19. gateway owner() 0x04D870…, paused false, everUnpaused true, GOVERNANCE_DELAY 172800, creditInvariant 121238693/121238693 true, receiptOf YBTC_ID = yBTC, assetIds length 1. Anvil collection() 0x2756…8A97 token() 0xE3FA…5166 inventoryCount 2596 tokensPerNFT 300030e18. NFT name Yardkeepers / YARDKEEPER totalSupply 3333." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:10:00Z, receipt_ids: [R-4, R-5, R-6, R-7, R-8, R-13], result: "Blockscout API v2: YARD CollectionToken is_verified true partially verified src/market/CollectionToken.sol compiler v0.8.26 creator CollectionTokenDeployer 0x6620…c6C2 tx 0x97866b98… 2026-08-11T23:00:01Z via AMMFactoryV2 createMarket from 0x04D870…. yBTC YAssetReceipt is_verified true fully verified src/yassets/YAssetReceipt.sol v0.8.36 created 2026-08-20T19:38:14Z same tx as YAssetGateway. Gateway fully verified src/yassets/YAssetGateway.sol constructor origin WBTC 0x2f2a…5B0f chain 42161 owner 0x04D870…. Yardkeepers ERC-721 is_verified false total_supply 3333 holders 424. NFTAMMVault src/vaults/NFTAMMVault.sol partially verified." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-3], result: "@TickerYardHQ bio website is tickeryard.com. tickeryard.com title is WBTC Bridge · TickerYard and the wrap UI names WBTC Arbitrum One → yBTC Robinhood Chain. DexScreener YARD token websites field is https://tickeryard.com." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:12:00Z, receipt_ids: [R-12, R-14, R-17], result: "GET api.dexscreener.com/latest/dex/tokens/0xE3FA…5166: YARD/WETH up pair 0xEbc250ae…1f34 liquidity 870936.17 volume.h24 124535.53 fdv 2426304 websites tickeryard.com; YARD/STONKBROKER up 0x1BD5…5740 liq 727571.66 vol 93350.46. GET tokens/0x9715…70Ed: yBTC/WETH up 0x176A…5b1b liq 173715.43 vol.h24 327.62 fdv 93206 priceUsd 76878.18. GeckoTerminal market_cap_usd 1855734.92 fdv_usd 2404694.95." }
  - { id: REP-5, method: document-scope, checked_at: 2026-09-03T03:05:00Z, receipt_ids: [R-9], result: "tickeryard-technical-design-paper-v1.pdf title TICKER/YARD Markets, routed. PROTOCOL WHITE PAPER Asset Mobility and Protocol Participation; author @jeronxd3; v1.1 9 August 2026. Anvil creates the sole canonical $YARD against a fixed-genesis collection of 3,333 Yardkeeper NFTs. YAssetGateway source names yBTC and yXAUT; live assetIds returns only YBTC_ID." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "User sends WBTC on Arbitrum One and receives yBTC on Robinhood Chain through tickeryard.com. Site UI: 0.30% wrap fee, about 18 minutes. yBTC is a non-upgradeable YAssetReceipt; only controller YAssetGateway can mint, and it can burn only tokens it already holds.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://tickeryard.com", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-2, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@TickerYardHQ", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xE3FA12dA7fa026B21817f16622E8AE48fA785166", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-4, R-11, R-12], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x9715e0a0a5f60dCa2A3F69d81Fb7f975De5870Ed", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-5, R-11, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x9fa6a54dbC2D69E232768e4E0970913755571e19", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-6, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0x2756bfFC4ccCB0cBebeB675a8593Ca80c8dB8A97", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-7, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-4, R-5, R-11, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: taxonomy.primary-leaf, value: rwa-products/synthetic-asset, class: claim, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-1, R-5, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: taxonomy.chain-scope, value: cross-chain, class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-1, R-6, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: relationship, value: "StonkBrokers lists TickerYard / $YARD as a Special Projects partner. YARD was created via Anvil AMMFactoryV2 createMarket. Official account posted StonkLauncher now accepts yBTC as a bond pair.", class: claim, observed_at: 2026-09-03T03:15:00Z, receipt_ids: [R-15, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "YARD holders_count 5302 and yBTC holders_count 2254 on Blockscout at 2026-09-03T03:10Z", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "YARD/WETH up pair 0xEbc250ae…1f34 volume.h24 124536 USD, liquidity 870936 USD, fdv 2426304 USD (DexScreener pair slice, not an all-chains total)", class: claim, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "GeckoTerminal market_cap_usd 1855735 and fdv_usd 2404695 for YARD 0xE3FA…5166; DexScreener fdv 2426304 is the pair fdv, not the same method", class: claim, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-12, R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "YAssetGateway owner() = 0x04D870fF10cCba4B7eE7387E8E3189adAc79bF83 (no code). Yardkeepers owner() = 0x73D9291482c3be39572Ef89096c9e472CDF56348 (no code). Gateway has pause, unpause, transferOwnership, proposePeer, proposeVaultAsset; GOVERNANCE_DELAY 172800 seconds. guardian() is zero.", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-6, R-7, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report was located on tickeryard.com, the paper, the X account, or the verified gateway/receipt source this pass. Paper status line is V1.1 design candidate and lists audit as a next step.", class: unknown, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@TickerYardHQ.role", value: project, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@TickerYardHQ.slug", value: tickeryard, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Anvil NFTAMMVault 0xFe0b24…00e6 prices Yardkeepers against YARD at tokensPerNFT 300030e18. inventoryCount 2596. Official account posted active Yardkeepers and activated $STONKBROKER NFTs receive revenue share from yBTC.", class: claim, observed_at: 2026-09-03T03:15:00Z, receipt_ids: [R-8, R-16, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: activity.status, value: "yBTC totalSupply 121238693 (8 decimals = 1.21238693). Gateway creditInvariant for YBTC_ID returns 121238693 / 121238693 / true. Blockscout yBTC holders 2254. DexScreener yBTC/WETH liquidity 173715 USD.", class: verified, observed_at: 2026-09-03T03:12:00Z, receipt_ids: [R-5, R-11, R-14], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xFe0b24A3b4052aD78f10fa75a27118c3e54a00e6", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-8, R-11, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-6, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-23, field: identity.symbol, value: "YARD", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-4, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-24, field: other, value: "ca-collision: Blockscout also indexes other ERC-20s named TickerYard or Yardkeeper, including 0x67c71277A863Cb92669C02c795d4F67211f0E753 (TUZKI, symbol $YARD, 10691 holders), 0xA2413E7890DC1cd470657fd67416eb9A26d5390B (TickerYard YARD, 12906 holders), and PonsLauncherToken 0xE633e4B3D1bA03cE8a0a148ef9B498e9d531F401 (7 holders). Canonical row is CollectionToken 0xE3FA…5166 (DexScreener websites tickeryard.com).", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-4, R-12], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-25, field: identity.alias, value: "Yardkeeper", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-4, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "@TickerYardHQ posted https://t.me/portaltickeryard as official Telegram on 2026-08-24. Telegram profile was not opened this pass.", class: claim, observed_at: 2026-09-03T03:15:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Official account posts 88.9M $YARD burned"
    summary: "@TickerYardHQ posted 88.9M $YARD burned and 297 NFTs removed from circulation."
    occurred_at: 2026-09-01T21:32:24Z
    observed_at: 2026-09-03T03:15:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-2
    type: company
    title: "StonkLauncher adds yBTC as a bond pair"
    summary: "@TickerYardHQ posted that anyone can launch a Robinhood Chain token and choose yBTC as the bond pair."
    occurred_at: 2026-08-31T19:12:35Z
    observed_at: 2026-09-03T03:15:00Z
    affected_fields: [product.mechanism, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-3
    type: company
    title: "Official account posts more than 5,000 $YARD wallets"
    summary: "@TickerYardHQ posted that more than 5,000 wallets now hold $YARD."
    occurred_at: 2026-08-31T16:48:17Z
    observed_at: 2026-09-03T03:15:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-4
    type: company
    title: "Official account posts a yBTC wrap infographic"
    summary: "@TickerYardHQ posted an infographic on how WBTC moves from Arbitrum to Robinhood Chain as yBTC."
    occurred_at: 2026-08-26T22:42:50Z
    observed_at: 2026-09-03T03:15:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-5
    type: company
    title: "Official account posts Yardkeeper, $YARD, yBTC holder counts"
    summary: "@TickerYardHQ posted 430 Yardkeeper, 2,851 $YARD, and 34 $yBTC holder addresses."
    occurred_at: 2026-08-24T16:44:37Z
    observed_at: 2026-09-03T03:15:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-6
    type: company
    title: "Official account posts yBTC live via tickeryard.com"
    summary: "@TickerYardHQ posted $yBTC live on Robinhood Chain, bridged from $WBTC on Arbitrum through tickeryard.com."
    occurred_at: 2026-08-20T22:45:56Z
    observed_at: 2026-09-03T03:15:00Z
    affected_fields: [product.mechanism, lifecycle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-3]
  - id: EVT-7
    type: ct
    title: "@OxSimpleFarmer posts yBTC as synthetic BTC on the chain"
    summary: "@OxSimpleFarmer posted that @TickerYardHQ created $yBTC, a synthetic $BTC on Robinhood Chain, bridgeable from Arbitrum."
    occurred_at: 2026-08-20T22:55:22Z
    observed_at: 2026-09-03T03:15:00Z
    affected_fields: [product.mechanism, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-8
    type: onchain
    title: "YAssetReceipt yBTC deployed on chain 4663"
    summary: "YAssetReceipt 0x9715…70Ed and YAssetGateway 0x9fa6…1e19 created at 2026-08-20T19:38:14Z from EOA 0x04D870…."
    occurred_at: 2026-08-20T19:38:14Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [deployment.address, lifecycle, control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-6, R-13]

receipts:
  - { id: R-1, publisher: TickerYard, title: "WBTC Bridge · TickerYard", url: "https://tickeryard.com", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-9, CLM-10], excerpt: "WBTC Bridge · TickerYard. TICKER / YARD. Bridge WBTC to Robinhood. You send WBTC Arbitrum One. You receive yBTC Robinhood Chain. 0.30% wrap fee · ≈18 min. Connect wallet. Activity." }
  - { id: R-2, publisher: "@TickerYardHQ", title: "TickerYard profile", url: "https://x.com/TickerYardHQ", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-17, CLM-18], excerpt: "Display name TickerYard, handle @TickerYardHQ. Bio: Markets, routed. Location: Robinhood. Website http://tickeryard.com. Joined 2026-08-07. Followers about 9,764–9,889 this pass." }
  - { id: R-3, publisher: "@TickerYardHQ", title: "$yBTC is now live on @RobinhoodCrypto", url: "https://x.com/TickerYardHQ/status/2090571061536387524", published_at: 2026-08-20T22:45:56Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, EVT-6], excerpt: "$yBTC is now live on @RobinhoodCrypto. You can bridge $WBTC from @arbitrum directly into $yBTC on Robinhood Chain through https://tickeryard.com. This is just the first of many releases we have coming. Stay $YARD." }
  - { id: R-4, publisher: Blockscout, title: "Token Yardkeeper (YARD) 0xE3FA…5166", url: "https://robinhoodchain.blockscout.com/token/0xE3FA12dA7fa026B21817f16622E8AE48fA785166", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-12, CLM-23, CLM-24, CLM-25], excerpt: "hash 0xE3FA12dA7fa026B21817f16622E8AE48fA785166 name CollectionToken is_contract true is_verified true token name Yardkeeper symbol YARD decimals 18 holders_count 5302 total_supply 999999990000000000000000000 creator 0x662003BF6049e36b4E887D47b8df8718fFBbc6C2 tx 0x97866b98485b94528bbe3752dc3e986af14f1d1c69386a4345d0fae3dcd46985 file_path src/market/CollectionToken.sol compiler v0.8.26 is_partially_verified true." }
  - { id: R-5, publisher: Blockscout, title: "Token TickerYard Bitcoin Receipt (yBTC)", url: "https://robinhoodchain.blockscout.com/token/0x9715e0a0a5f60dCa2A3F69d81Fb7f975De5870Ed", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-8, CLM-12, CLM-20, EVT-8], excerpt: "hash 0x9715e0a0a5f60dCa2A3F69d81Fb7f975De5870Ed name YAssetReceipt is_contract true is_verified true is_fully_verified true token name TickerYard Bitcoin Receipt symbol yBTC decimals 8 holders_count 2254 total_supply 121238693 creator 0x9fa6a54dbC2D69E232768e4E0970913755571e19 tx 0x442b9b63ca4d3af65a6b80864048ec9d1ff88d6a54cbcf5fc8c585251f9dc689 file_path src/yassets/YAssetReceipt.sol compiler v0.8.36." }
  - { id: R-6, publisher: Blockscout, title: "Address YAssetGateway 0x9fa6…1e19", url: "https://robinhoodchain.blockscout.com/address/0x9fa6a54dbC2D69E232768e4E0970913755571e19", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-10, CLM-15, CLM-22, EVT-8], excerpt: "name YAssetGateway is_verified true is_fully_verified true file_path src/yassets/YAssetGateway.sol compiler v0.8.36. Constructor: router 0x06fC836cf9839B1cd891C440A0a45242DA6Ae1c9, owner 0x04D870fF10cCba4B7eE7387E8E3189adAc79bF83, guardian 0x0, yardkeeperRewardsRecipient 0xEf5f7269…2358, expectedChainId 4663, asset originUnderlying 0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f originChainId 42161 decimals 8. Comment: mint/burn coordinator for yBTC/yXAUT." }
  - { id: R-7, publisher: Blockscout, title: "Token Yardkeepers (YARDKEEPER) 0x2756…8A97", url: "https://robinhoodchain.blockscout.com/token/0x2756bfFC4ccCB0cBebeB675a8593Ca80c8dB8A97", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-15], excerpt: "hash 0x2756bfFC4ccCB0cBebeB675a8593Ca80c8dB8A97 name Yardkeepers is_contract true is_verified false token name Yardkeepers symbol YARDKEEPER type ERC-721 holders_count 424 total_supply 3333 creator 0x4e59b44847b379578588920cA78FbF26c0B4956C tx 0x79e59c59e8b254bbcbed2cdbaa0966cc1ff3685e3f0d20394ddba78507ad1344 timestamp 2026-08-11T22:25:07Z from 0x04D870…bF83." }
  - { id: R-8, publisher: Blockscout, title: "Address NFTAMMVault 0xFe0b…00e6", url: "https://robinhoodchain.blockscout.com/address/0xFe0b24A3b4052aD78f10fa75a27118c3e54a00e6", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19, CLM-21], excerpt: "name NFTAMMVault is_contract true is_verified true is_partially_verified true file_path src/vaults/NFTAMMVault.sol compiler v0.8.26 creator 0x76C5e6e27562bBD64b6112a47D1Fb9De15E83549 tx 0x97866b98… (same createMarket as YARD) 2026-08-11T23:00:01Z." }
  - { id: R-9, publisher: TickerYard, title: "TICKER/YARD technical design paper v1.1", url: "https://tickeryard.com/paper/tickeryard-technical-design-paper-v1.pdf", published_at: 2026-08-09T00:00:00Z, accessed_at: 2026-09-03T03:05:00Z, kind: whitepaper, authority: primary, authenticity: confirmed, supports: [CLM-9], excerpt: "TICKER/YARD. Markets, routed. PROTOCOL WHITE PAPER Asset Mobility and Protocol Participation. AUTHOR @jeronxd3 VERSION v1.1 STATUS V1.1 design candidate; prepared for review PREPARED DATE 9 August 2026. Anvil creates the sole canonical $YARD against a fixed-genesis collection of 3,333 Yardkeeper NFTs. Next: contract remediation, audit, full lifecycle evidence." }
  - { id: R-10, publisher: "@TickerYardHQ", title: "The TickerYard whitepaper is live", url: "https://x.com/TickerYardHQ/status/2086556563490144702", published_at: 2026-08-09T20:53:45Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "The TickerYard whitepaper is live, you can check it in the link below! https://tickeryard.com/" }
  - { id: R-11, publisher: Robinhood Chain RPC, title: "eth_getCode, yBTC/gateway/Anvil/collection calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-10, CLM-15, CLM-20, CLM-21, CLM-22, CLM-23, CLM-25], excerpt: "eth_blockNumber 0x329f23c (53080636). Non-empty code on YARD, yBTC, YAssetGateway, Yardkeepers, NFTAMMVault. yBTC totalSupply 121238693 decimals 8 controller 0x9fa6… originAsset 0x2f2a… originChainId 42161. gateway owner 0x04D870… paused false creditInvariant 121238693/121238693 true. Anvil collection 0x2756… token 0xE3FA… inventoryCount 2596 tokensPerNFT 300030e18. NFT totalSupply 3333 owner 0x73D929…." }
  - { id: R-12, publisher: DexScreener, title: "YARD token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0xE3FA12dA7fa026B21817f16622E8AE48fA785166", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-4, CLM-13, CLM-14, CLM-24], excerpt: "baseToken name Yardkeeper symbol YARD address 0xE3FA12dA…5166. Pair 0xEbc250ae14467403029D4943CA4ad4B53B511f34 dex up quote WETH liquidity.usd 870936.17 volume.h24 124535.53 fdv 2426304 priceUsd 0.002677 info.websites https://tickeryard.com. Pair 0x1BD5b531…5740 YARD/STONKBROKER up liq 727571.66 vol 93350.46." }
  - { id: R-13, publisher: Blockscout, title: "yBTC creation tx 0x442b9b63…", url: "https://robinhoodchain.blockscout.com/tx/0x442b9b63ca4d3af65a6b80864048ec9d1ff88d6a54cbcf5fc8c585251f9dc689", published_at: 2026-08-20T19:38:14Z, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-8, EVT-8], excerpt: "timestamp 2026-08-20T19:38:14.000000Z status ok from 0x04D870fF10cCba4B7eE7387E8E3189adAc79bF83 to 0x4e59b44847b379578588920cA78FbF26c0B4956C block 41677805 result success. Same tx created YAssetGateway 0x9fa6…1e19 and YAssetReceipt yBTC 0x9715…70Ed." }
  - { id: R-14, publisher: DexScreener, title: "yBTC token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x9715e0a0a5f60dCa2A3F69d81Fb7f975De5870Ed", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-20], excerpt: "One pair: robinhood up 0x176A43Aa3B295383b3fd4bc758c6Ca97ED205b1b yBTC / WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 liquidity.usd 173715.43 volume.h24 327.62 fdv 93206 priceUsd 76878.18." }
  - { id: R-15, publisher: "@TickerYardHQ", title: "StonkLauncher just got greener", url: "https://x.com/TickerYardHQ/status/2094503636260831571", published_at: 2026-08-31T19:12:35Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-11, EVT-2], excerpt: "StonkLauncher just got greener. Anyone can now launch a token on Robinhood Chain and choose yBTC as the bond pair. More flexibility for launches. More utility for yBTC. More connections growing across the ecosystem. Markets, routed." }
  - { id: R-16, publisher: Anvil AMM, title: "Yardkeepers market 0xFe0b…00e6", url: "https://anvil.clutch.market/market/0xFe0b24A3b4052aD78f10fa75a27118c3e54a00e6", published_at: null, accessed_at: 2026-09-03T03:08:00Z, kind: other, authority: primary, authenticity: unconfirmed, supports: [CLM-19, CLM-21], excerpt: "Yardkeepers. Special Projects. TickerYard $YARD RH. Stonkbrokers Special Projects Partner 0xE3FA…5166. Price per NFT 300,030 YARD. Collection Size 3,333 NFTs. Tokens / NFT 300,030. Total Supply 1000.00M YARD. Total Burned 88.80M YARD. Protocol fees burned to 0x0000…dEaD. 1 Yardkeepers ≡ 300,030 YARD." }
  - { id: R-17, publisher: GeckoTerminal, title: "Yardkeeper token on Robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xE3FA12dA7fa026B21817f16622E8AE48fA785166", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-14], excerpt: "attributes address 0xe3fa12da7fa026b21817f16622e8ae48fa785166 name Yardkeeper symbol YARD decimals 18 coingecko_coin_id yardkeeper total_supply 999999990e18 price_usd 0.002653160746 fdv_usd 2404694.94906718 market_cap_usd 1855734.92408333 volume_usd.h24 216380.775570909 total_reserve_in_usd 1201282.06." }
  - { id: R-18, publisher: StonkBrokers, title: "StonkBrokers homepage Special Projects", url: "https://www.stonkbrokers.cash/", published_at: null, accessed_at: 2026-09-03T03:18:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-11], excerpt: "Special Projects partners. Independent teams. Markets, routed. Launched on Robinhood Chain, Yardkeepers and $YARD are live and trading now. TickerYard $YARD. Buy $YARD token 0xE3FA12dA7fa026B21817f16622E8AE48fA785166. Links https://x.com/TickerYardHQ and https://tickeryard.com." }
  - { id: R-19, publisher: "@TickerYardHQ", title: "Yardkeepers revenue share from yBTC", url: "https://x.com/TickerYardHQ/status/2090572056773451876", published_at: 2026-08-20T22:49:53Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-19], excerpt: "All active Yardkeepers will receive revenue share from this project. The same applies to activated $STONKBROKER NFTs. Activate. Participate. Earn. Stay $YARD." }
  - { id: R-20, publisher: "@TickerYardHQ", title: "Official TickerYard Telegram", url: "https://x.com/TickerYardHQ/status/2091934030899839453", published_at: 2026-08-24T17:01:53Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-26], excerpt: "Reminder: we have an official TickerYard Telegram. Join the community to discuss everything happening across the $YARD ecosystem, share ideas, ask questions, and stay in the loop. https://t.me/portaltickeryard Stay $YARD" }
  - { id: R-21, publisher: "@TickerYardHQ", title: "Supply keeps moving in one direction", url: "https://x.com/TickerYardHQ/status/2094901210218217648", published_at: 2026-09-01T21:32:24Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Supply keeps moving in one direction. 88.9M $YARD burned. 297 NFTs removed from circulation. Less supply. Same Yard. More ahead." }
  - { id: R-22, publisher: "@TickerYardHQ", title: "Statistics update: more than 5,000 $YARD wallets", url: "https://x.com/TickerYardHQ/status/2094467323876835376", published_at: 2026-08-31T16:48:17Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Statistics update. Another milestone reached for the Yard: more than 5,000 wallets are now holding $YARD. The holder base continues to grow alongside the TickerYard ecosystem. Markets, routed." }
  - { id: R-23, publisher: "@TickerYardHQ", title: "What exactly is yBTC?", url: "https://x.com/TickerYardHQ/status/2092744609948369248", published_at: 2026-08-26T22:42:50Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "What exactly is yBTC? We put together a quick infographic covering how it works, how WBTC moves from Arbitrum to Robinhood Chain, and where yBTC fits into the TickerYard ecosystem. Bitcoin liquidity. New routes. More utility. https://tickeryard.com" }
  - { id: R-24, publisher: "@TickerYardHQ", title: "The $YARD ecosystem keeps expanding", url: "https://x.com/TickerYardHQ/status/2091929684543959434", published_at: 2026-08-24T16:44:37Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "The $YARD ecosystem keeps expanding. 430 Yardkeeper holder addresses. 2,851 $YARD holder addresses. 34 $yBTC holder addresses. One ecosystem, growing entirely on @RobinhoodCrypto." }
  - { id: R-25, publisher: "@OxSimpleFarmer", title: "TickerYard yBTC on Robinhood Chain", url: "https://x.com/OxSimpleFarmer/status/2090573434442948717", published_at: 2026-08-20T22:55:22Z, accessed_at: 2026-09-03T03:15:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-7], excerpt: "More excellent infra from the special projects teams (and just the start) @TickerYardHQ just created the first synthetic version of $BTC known as $yBTC on Robinhood chain @RobinhoodCrypto bridgeable directly from @arbitrum and from what I’m hearing more is coming." }

gaps:
  - { priority: P0, question: "Where is Arbitrum WBTC locked, and does gateway creditInvariant 1.21238693 yBTC match the remote vault balance?", checked: "YAssetGateway constructor and eth_call originAsset 0x2f2a…5B0f / originChainId 42161 / creditInvariant equal true on 4663; Arbitrum vault address and balance not opened, 2026-09-03", next: "read YAssetBridgeCore peers/vaultAssets for selector 4949039107694359620 and eth_call the Arbitrum vault" }
  - { priority: P0, question: "Can gateway owner 0x04D870… pause, change peers, or mint without the 172800-second delay, and who holds NFTAMMVault DEFAULT_ADMIN_ROLE?", checked: "owner() and hasRole(DEFAULT_ADMIN_ROLE, 0x04D870…) false on the vault; GOVERNANCE_DELAY 172800; pause() is a write function; role holders not enumerated, 2026-09-03", next: "eth_call hasRole for treasury 0xb668… and getRoleMember if present; read pause modifiers in YAssetBridgeCore" }
  - { priority: P1, question: "Is the 0.30% wrap fee in the gateway, the Arbitrum vault, or only the site UI?", checked: "tickeryard.com UI 0.30%; YAssetGateway ABI has no wrapFeeBps; quoteBridgeBackFee not decoded this pass, 2026-09-03", next: "eth_call quoteBridgeBackFee and read the Arbitrum vault fee constant" }
  - { priority: P1, question: "Is there a yXAUT receipt on 4663, or is YXAUT_ID only a gateway constant?", checked: "assetIds() length 1 = YBTC_ID; YXAUT_ID constant present; Blockscout token search not run for yXAUT, 2026-09-03", next: "receiptOf(YXAUT_ID) and Blockscout search yXAUT" }
  - { priority: P1, question: "Does any audit PDF cover YAssetReceipt.sol / YAssetGateway.sol compiler v0.8.36?", checked: "site, paper next-step line, X account, verified source headers, 2026-09-03", next: "ask in public and match any named auditor report to the gateway bytecode" }
  - { priority: P2, question: "Does t.me/portaltickeryard cross-link tickeryard.com / @TickerYardHQ?", checked: "URL posted by @TickerYardHQ on 2026-08-24; Telegram profile not opened, 2026-09-03", next: "open the Telegram profile and compare the linked domain" }
---

# TickerYard — research packet

## What it is

TickerYard mints yBTC on Robinhood Chain as an 8-decimal receipt of Arbitrum WBTC: a user sends WBTC through tickeryard.com and receives yBTC (site: 0.30% wrap fee, about 18 minutes). YAssetGateway is the only minter. $YARD is the Anvil ERC-20 paired with 3,333 Yardkeeper NFTs. @TickerYardHQ lists tickeryard.com.

Themes: rwa, nft, launchpad

## Why it matters

yBTC is a BTC-linked asset that can be used as a StonkLauncher bond pair and traded in an up. WETH pool. YARD and Yardkeepers sit in the StonkBrokers Anvil stack as a named Special Projects partner, so wrap flow, NFT inventory, and $STONKBROKER LP are linked.

## What could go wrong

Gateway `owner()` is one externally owned account with pause and peer-proposal rights; the Arbitrum vault that should hold WBTC was not opened this pass. Several other ERC-20s reuse the TickerYard or Yardkeeper name. Flag: ca-collision.

## Product and mechanics

A user connects on tickeryard.com, sends WBTC on Arbitrum One, and receives yBTC on Robinhood Chain. The site UI prints a 0.30% wrap fee and about 18 minutes. [claim R-1]

yBTC is YAssetReceipt at 0x9715…70Ed. Verified source: the only minter is `controller`, which is YAssetGateway 0x9fa6…1e19; the gateway can burn only tokens it already holds. Constructor origin is WBTC 0x2f2a…5B0f on chain 42161. `creditInvariant` matched `totalSupply` 1.21238693 yBTC. [verified R-5 R-6 R-11]

$YARD is CollectionToken 0xE3FA…5166, created by Anvil `createMarket` with NFTAMMVault 0xFe0b…00e6. Vault `collection()` is Yardkeepers 0x2756…8A97 (3,333 ERC-721). `tokensPerNFT` is 300,030e18. Official account posted that active Yardkeepers and activated $STONKBROKER NFTs receive yBTC revenue share. [claim R-8 R-16 R-19]

## Control and security

YAssetGateway `owner()` returns 0x04D870…bF83 (no code). That EOA also created the yBTC/gateway deploy tx and the Yardkeepers create tx. `guardian()` is zero. `GOVERNANCE_DELAY` is 172800 seconds. `pause()` exists. Yardkeepers `owner()` returns a different EOA, 0x73D929…6348. NFTAMMVault `hasRole(DEFAULT_ADMIN_ROLE, 0x04D870…)` returned false; the admin member was not enumerated. [verified R-6 R-7 R-11]

No audit report was located on the site, the paper, or the X account. The paper status line is a v1.1 design candidate and lists audit as a next step. Yardkeepers source is unverified. [unknown]

## Team and provenance

@TickerYardHQ bio website is tickeryard.com. DexScreener's YARD token websites field is tickeryard.com. The paper names @jeronxd3 as author. StonkBrokers lists TickerYard as a Special Projects partner. Telegram https://t.me/portaltickeryard was posted by the official account; the Telegram profile was not opened. No repository URL was located. [verified R-1 R-2 R-12]

## Economics and activity

YARD holders_count is 5302; yBTC holders_count is 2254 (Blockscout, 2026-09-03T03:10Z). NFT holders_count is 424 on a 3,333 collection. [verified R-4 R-5 R-7]

YARD/WETH on up (pair 0xEbc250ae…1f34) 24h volume is 124536 USD and liquidity 870936 USD; pair fdv is 2426304 USD. GeckoTerminal `market_cap_usd` is 1855735 and `fdv_usd` is 2404695. Those are different methods. yBTC/WETH on up liquidity is 173715 USD; 24h volume 328 USD; pair fdv 93206 USD. [claim R-12 R-14 R-17]

yBTC `totalSupply` is 1.21238693. Anvil `inventoryCount` is 2596. Official account posted 88.9M $YARD burned and 297 NFTs removed on 2026-09-01; Anvil UI printed 88.80M burned. On-chain `totalSupply` of YARD remains 999,999,990. [verified R-11] [claim R-16 R-21]

## Material risks

- Gateway owner is one EOA with pause and peer-proposal functions; Arbitrum WBTC lock was not reproduced. [verified R-11]
- Yardkeepers NFT source is unverified; collection owner is a second EOA. [verified R-7]
- Name collision: other ERC-20s use TickerYard / Yardkeeper / $YARD at different addresses. Flag: ca-collision. [verified R-4 R-12]
- No audit report was located this pass. [unknown]
- Wrap fee 0.30% is a site figure; it is not a named `wrapFeeBps` on the gateway ABI. [claim R-1]

## Verification passes

- Receipts: tickeryard.com, the paper URL, @TickerYardHQ profile and listed posts, Anvil market UI, StonkBrokers partner line, Blockscout token/gateway/vault/create txs, RPC, DexScreener, and GeckoTerminal were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-5 R-11]
- Numbers: YARD holders 5302 and yBTC holders 2254 are Blockscout counts. Volume 124536 is the YARD/WETH up pair 24h bar, not an all-chains total. yBTC supply 1.21238693 is `totalSupply` / 1e8. GeckoTerminal market cap 1855735 is not the DexScreener fdv 2426304. [claim R-12 R-17] [verified R-4 R-5 R-11]
- Adversarial: the strongest contrary reading is that TickerYard is only an Anvil NFT mint and that yBTC is a ticker copy. Verified names YAssetReceipt / YAssetGateway, originAsset WBTC on 42161, DexScreener websites tickeryard.com, and matching official posts argue the wrap is the live product; copycat CAs remain listed under ca-collision. [inference R-5 R-6 R-12]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census tickeryard row (lifecycle announced, entity_kind infrastructure), content/projects/tickeryard.yaml, content/feed/tickeryard.yaml, content/sources/tickeryard.yaml, content/research/tickeryard.md, content/changelog/tickeryard.yaml, docs/templates/research-packet-v2.md, schema/packet.schema.json, and the stonkbroker packet Special Projects line were read before collection. No content/pulled/tickeryard.yaml.
- Official: tickeryard.com wrap UI; paper URL returned HTML from this client (search index still carried v1.1 PDF text); anvil.clutch.market/market/0xFe0b…00e6; stonkbrokers.cash partner line.
- Explorer: Blockscout API v2 with a Chrome User-Agent for YARD, yBTC, YAssetGateway, Yardkeepers, NFTAMMVault, create txs, token search YARD/yBTC/TickerYard/Yardkeeper. RPC eth_getCode/eth_call at block 53080636.
- Third party: DexScreener tokens YARD and yBTC; GeckoTerminal YARD; api.llama.fi/protocols (no TickerYard row); GitHub search TickerYard OR YAssetReceipt total_count 0.
- X: @TickerYardHQ profile; 1 Sep burn; 31 Aug StonkLauncher and 5,000 wallets; 26 Aug infographic; 24 Aug holders and Telegram; 20 Aug yBTC live and revenue share; @OxSimpleFarmer 20 Aug.
- Failed: paper PDF URL served HTML to this client; Telegram profile not opened; Arbitrum vault not opened; Llama has no TickerYard protocol row; GitHub search returned 0.
- Time: collection 2026-09-03T02:50Z–2026-09-03T03:20Z.
