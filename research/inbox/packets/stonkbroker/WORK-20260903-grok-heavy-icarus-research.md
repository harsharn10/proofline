---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: stonkbroker
name: StonkBrokers
packet_tier: full
as_of: 2026-09-03T18:10:00Z
prior_packet: null
supersedes: null
owned_slugs: [stonkbroker]
allowed_paths:
  - research/inbox/packets/stonkbroker/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: StonkBrokers
  aliases: ["StonkBroker", "Stonk Brokers", "Clutch Markets", "Clutch Labs"]
  symbols: [STONKBROKER, STONK]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://stonkbrokers.cash
  official_handle: "@ClutchMarkets"
  repository: https://github.com/Clutch-L4bs/stonkbroker-erc20
  possible_matches:
    - slug: stonks-fun
      signals: [ticker-only]
      contrary_signals:
        - "Census Stonks.fun is @stonksdotfun / $STONKS, a DN-404 Doppler pad; this row is @ClutchMarkets / $STONKBROKER at 0xe934… with site stonkbrokers.cash"
        - "No shared domain, handle, or reproduced address"
    - slug: quotrons
      signals: [other]
      contrary_signals:
        - "Quotrons is an ERC-404 terminal collection at quotrons.cash / @Quotrons404; StonkBrokers is an ERC-721 + ERC-6551 collection at 0x539c…"
        - "No shared domain, handle, or reproduced address"
    - slug: mancer
      signals: [other]
      contrary_signals:
        - "Site lists Chain Mancers / $MANCER as a Special Projects partner with its own team, token 0xc72F…, and site mancer.xyz; not the StonkBrokers collection or token"
    - slug: tickeryard
      signals: [other]
      contrary_signals:
        - "Site lists TickerYard / $YARD as a Special Projects partner at tickeryard.com / @TickerYardHQ; not the StonkBrokers collection or token"
    - slug: up
      signals: [other]
      contrary_signals:
        - "Docs say the Stonk Exchange is powered by the up. ve(3,3) contracts; up is a separate native AMM at up33.xyz / @uponrh"
    - slug: arrow
      signals: [other]
      contrary_signals:
        - "STORMM / Leverage Machine is an announced Uniswap v4 options overlay on this row; Arrow is a separate fully collateralized options product"

classification:
  primary_leaf: nft-treasury/token-bound-nft
  secondary_leaves: [markets/options, launch/bonding-curve, tooling/locker]
  mechanism_tags: [nft, rwa, amm, derivatives, launchpad]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "The durable product is a 4,444 ERC-721 collection whose token-bound wallets can hold Stock Tokens, with $STONKBROKER as the Anvil AMM and activation token. That is nft-treasury/token-bound-nft, not a launchpad leaf: Smart Launch / Stonk Launcher and the Safety Deposit Box are live modules of the same operator, and STORMM options remain a September 2026 claim. Lifecycle is mainnet because the token, collection, vault and activation manager exist with verified source on chain 4663. [R-1] [R-2] [R-4] [R-8] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-19], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-14, CLM-15], note: "" }

links:
  - { kind: site, url: "https://stonkbrokers.cash", authenticity: confirmed }
  - { kind: site, url: "https://stonkbrokers.io", authenticity: confirmed }
  - { kind: docs, url: "https://www.stonkbrokers.cash/docs", authenticity: confirmed }
  - { kind: docs, url: "https://www.stonkbrokers.cash/docs/stonkbroker-token", authenticity: confirmed }
  - { kind: x, url: "https://x.com/ClutchMarkets", authenticity: confirmed }
  - { kind: github, url: "https://github.com/Clutch-L4bs/stonkbroker-erc20", authenticity: confirmed }
  - { kind: app, url: "https://www.stonkbrokers.cash/marketplace", authenticity: confirmed }
  - { kind: other, url: "https://www.clutch.markets/", authenticity: unconfirmed }
  - { kind: other, url: "https://opensea.io/collection/stonkbrokers-434284142", authenticity: unconfirmed }

deployments:
  - label: $STONKBROKER token (CollectionToken)
    role: token
    address:
      value: "0xe934e36A439C94017B64a3FecE66AF12099aBF50"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-7]
  - label: StonkBrokers NFT collection (ERC-721 + ERC-6551)
    role: token
    address:
      value: "0x539CdD042c2f3d93EbC5BE7DfFf0c79F3B4fAbF0"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-8, R-9]
  - label: Anvil NFT AMM vault (StonkNFTAMMVault)
    role: vault
    address:
      value: "0xE302733accF4800146E55fC45B46b4E4fFC032D2"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-10]
  - label: Activation Manager
    role: other
    address:
      value: "0xacD5ae3c060C1137FE2Ee86B0aB2EF697456f664"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-11]
  - label: Stonk Launcher factory
    role: factory
    address:
      value: "0x80a77001456bc986083678F9a112B1EC2Aa07281"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: null
      explorer_source_verified: null
    receipt_ids: [R-2]
  - label: Token deployer / collection Ownable path
    role: admin
    address:
      value: "0xb668382cF44038a3E8140E789060F6A809787CDa"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-6, R-8, R-9]

metrics:
  - { kind: holders, value: 33012, currency: null, as_of: 2026-09-03T17:40:00Z, window: point, method: "Blockscout GET /api/v2/tokens/0xe934e36A439C94017B64a3FecE66AF12099aBF50 holders_count", class: claim, receipt_ids: [R-5] }
  - { kind: volume_24h, value: 3357621.82, currency: USD, as_of: 2026-09-03T17:35:00Z, window: 24h, method: "DexScreener latest/dex/tokens STONKBROKER Uniswap v4 STONKBROKER/ETH pair 0xd33c8fd3… volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-12] }
  - { kind: tvl, value: 3581052.52, currency: USD, as_of: 2026-09-03T17:35:00Z, window: point, method: "DexScreener same Uniswap v4 STONKBROKER/ETH pair liquidity.usd (listed pool, not protocol TVL)", class: claim, receipt_ids: [R-12] }
  - { kind: tvl, value: 5890033.38, currency: USD, as_of: 2026-09-03T17:50:00Z, window: point, method: "GeckoTerminal search/pools STONKBROKER Uniswap v4 pool 0xd33c8fd3… attributes.reserve_in_usd (same pool as DexScreener; different reserve field)", class: claim, receipt_ids: [R-13] }
  - { kind: market_cap, value: 29647685, currency: USD, as_of: 2026-09-03T17:35:00Z, window: point, method: "DexScreener same Uniswap v4 STONKBROKER/ETH pair marketCap field", class: claim, receipt_ids: [R-12] }
  - { kind: tvl, value: 1016688.16, currency: USD, as_of: 2026-09-02T22:21:23Z, window: point, method: "api.llama.fi/protocol/stonkbrokers currentChainTvls['Robinhood Chain'] (locker WETH slice per adapter methodology; staking row excluded)", class: claim, receipt_ids: [R-14] }
  - { kind: fees_24h, value: 9200, currency: USD, as_of: 2026-09-03T17:48:00Z, window: 24h, method: "api.llama.fi/summary/fees/stonkbrokers?dataType=dailyFees chainBreakdown['Robinhood Chain'].total24h", class: claim, receipt_ids: [R-15] }
  - { kind: revenue_24h, value: 4474, currency: USD, as_of: 2026-09-03T17:48:00Z, window: 24h, method: "api.llama.fi/summary/fees/stonkbrokers?dataType=dailyRevenue chainBreakdown['Robinhood Chain'].total24h", class: claim, receipt_ids: [R-16] }
  - { kind: volume_24h, value: 32432, currency: USD, as_of: 2026-09-03T17:49:00Z, window: 24h, method: "api.llama.fi/summary/dexs/stonkbrokers?dataType=dailyVolume chainBreakdown['Robinhood Chain'].total24h (protocol surfaces, not the Uniswap v4 token pair)", class: claim, receipt_ids: [R-17] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T17:40:00Z, receipt_ids: [R-4, R-5, R-6, R-7], result: "Blockscout address 0xe934e36A… is_contract true, is_verified true, is_fully_verified true, name CollectionToken, token StonkBroker/STONKBROKER, holders_count 33012, creator 0xb668382cF44038a3E8140E789060F6A809787CDa (EOA), creation tx 0x05c07959… 2026-07-17T23:29:13Z block 12514720; constructor args name StonkBroker symbol STONKBROKER totalSupply_ 2962663704000000000000000000 initialHolder_ 0xb668…; verified source has no owner after deploy. Public RPC eth_getCode non-empty (6698 hex chars)." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T17:42:00Z, receipt_ids: [R-8, R-9], result: "Blockscout address 0x539CdD04… is_contract true, is_verified true, name StonkBrokers, token ERC-721 STONK total_supply 4444 holders_count 640, creator 0xb668…, creation tx 0x35c32b43… 2026-07-17T22:54:19Z. Constructor calldata includes Ownable-style owner path to 0xb668… and stock-token list including NVDA 0xd0601CE1…" }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T17:43:00Z, receipt_ids: [R-10, R-11], result: "0xE302733a… is_contract true, is_verified true, name StonkNFTAMMVault, creator 0xb668…. 0xacD5ae3c… is_contract true, is_verified true, name ActivationManager, creator 0xb668…." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T17:30:00Z, receipt_ids: [R-1, R-2, R-3, R-18, R-28], result: "stonkbrokers.cash and stonkbrokers.io serve the same terminal, name @ClutchMarkets and token 0xe934…; X @ClutchMarkets bio links stonkbrokers.io. Docs list collection 0x539c… and Anvil contracts." }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T17:35:00Z, receipt_ids: [R-12], result: "DexScreener Uniswap v4 STONKBROKER/ETH pair 0xd33c8fd3… labels v4, liquidity.usd 3581052.52, volume.h24 3357621.82, marketCap 29647685, websites stonkbrokers.cash, socials x.com/ClutchMarkets." }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-03T17:50:00Z, receipt_ids: [R-13], result: "GeckoTerminal search/pools STONKBROKER first Robinhood hit is uniswap-v4-robinhood pool 0xd33c8fd3… name STONKBROKER / WETH 1%, reserve_in_usd 5890033.3824, volume_usd.h24 3345880.27670663. Quote token id robinhood_0x0000… (native ETH)." }
  - { id: REP-7, method: document-scope, checked_at: 2026-09-03T17:32:00Z, receipt_ids: [R-2, R-3, R-24], result: "Docs Current live Anvil table names collection 0x539c…, token 0xe934…, Activation Manager, AMM Vault. Token whitepaper and GitHub Clutch-L4bs/stonkbroker-erc20 name the same CA. Leverage Machine / STORMM section is Coming soon on mainnet, September 2026. Protocol GitHub Clutch-L4bs/stonkbrokers returned 404." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "4,444 ERC-721 brokers, each with an ERC-6551 token-bound account that is seeded with a Stock Token at mint and can receive Clock In stock-token drops after activation. $STONKBROKER is the ERC-20 used to buy a broker on the Anvil AMM and to pay activation. Not a bonding-curve pad as the primary product.", class: claim, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-4, REP-7], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://stonkbrokers.cash", class: verified, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-1, R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@ClutchMarkets", class: verified, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-1, R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xe934e36A439C94017B64a3FecE66AF12099aBF50", class: verified, observed_at: 2026-09-03T17:40:00Z, receipt_ids: [R-3, R-4, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x539CdD042c2f3d93EbC5BE7DfFf0c79F3B4fAbF0", class: verified, observed_at: 2026-09-03T17:42:00Z, receipt_ids: [R-2, R-8], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T17:40:00Z, receipt_ids: [R-4, R-8, R-10], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: identity.symbol, value: STONKBROKER, class: verified, observed_at: 2026-09-03T17:40:00Z, receipt_ids: [R-4, R-5, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Anvil NFT AMM prices a broker at 666,666 $STONKBROKER plus a native ETH trade fee (docs: 10% swap / 15% snipe). Acquire path is Get token then Trade or snipe on /marketplace.", class: claim, observed_at: 2026-09-03T17:32:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Activation is paid in $STONKBROKER (docs: 50% burned / 50% protocol by default) and clears on true ownership transfer. Clock In v2 lets any wallet crank a full ETH pot into elected Stock Tokens credited to activated brokers by tier weight.", class: claim, observed_at: 2026-09-03T17:32:00Z, receipt_ids: [R-2], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Leverage Machine / STORMM is documented as coming soon on mainnet for September 2026: Uniswap v4 LP ranges as options inventory, calls/puts minted as ERC-721s, no traditional liquidation. No STORMM address is in the live contract table.", class: claim, observed_at: 2026-09-03T17:32:00Z, receipt_ids: [R-2, R-19], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-11, field: taxonomy.primary-leaf, value: nft-treasury/token-bound-nft, class: inference, observed_at: 2026-09-03T17:32:00Z, receipt_ids: [R-1, R-2, R-8], reproduction_ids: [REP-2, REP-7], supersedes: null }
  - { id: CLM-12, field: identity.repository, value: "https://github.com/Clutch-L4bs/stonkbroker-erc20", class: claim, observed_at: 2026-09-03T17:55:00Z, receipt_ids: [R-3, R-24], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "CollectionToken has no owner after deploy; constructor mints the full supply to 0xb668… and exposes no admin mint, pause, or blacklist.", class: verified, observed_at: 2026-09-03T17:40:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.owner, value: "NFT collection 0x539c… was created by EOA 0xb668382cF44038a3E8140E789060F6A809787CDa; bytecode includes Ownable transferOwnership / owner. Live owner() was not eth_called this pass.", class: inference, observed_at: 2026-09-03T17:42:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "Token whitepaper publishes HasLock-Certified-Audit-STONKBROKER-ERC20.pdf and a penetration assessment, named as performed by Admir Zlatic (0xSimpleFarmer), Hashlock SSCAC, findings none on the ERC-20 surface.", class: claim, observed_at: 2026-09-03T17:33:00Z, receipt_ids: [R-3], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "DexScreener Uniswap v4 STONKBROKER/ETH pair 0xd33c… liquidity 3581052.52 USD, 24h volume 3357621.82 USD, marketCap 29647685 USD at fetch.", class: claim, observed_at: 2026-09-03T17:35:00Z, receipt_ids: [R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "GeckoTerminal same pool 0xd33c… reserve_in_usd 5890033.38, volume_usd.h24 3345880.28 at fetch.", class: claim, observed_at: 2026-09-03T17:50:00Z, receipt_ids: [R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: "DefiLlama currentChainTvls Robinhood Chain 1016688.16 USD at 2026-09-02T22:21:23Z (locker WETH only). Separate staking row 23462326.07 USD in STONKBROKER is not this chain-slice TVL.", class: claim, observed_at: 2026-09-03T17:47:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.alias, value: "Clutch Markets", class: claim, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-1, R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-20, field: relationship, value: "Site lists TickerYard, Oakmont Vault, Card Wall, Chain Mancers, DERP and UP as Special Projects partners: independent teams with their own tokens; inclusion is not a stake in StonkBrokers.", class: claim, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-1], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: taxonomy.secondary-leaf, value: markets/options, class: claim, observed_at: 2026-09-03T17:32:00Z, receipt_ids: [R-2, R-19], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-22, field: taxonomy.secondary-leaf, value: launch/bonding-curve, class: claim, observed_at: 2026-09-03T17:32:00Z, receipt_ids: [R-2], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-23, field: economics.metric, value: "Blockscout token holders_count 33012; NFT holders_count 640 of total_supply 4444.", class: claim, observed_at: 2026-09-03T17:42:00Z, receipt_ids: [R-5, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: account.@realstonkbroker.note, value: "X @realstonkbroker display name StonkBrokers, bio Fan Account, CA 0xe934e36a439c94017b64a3fece66af12099abf50. Flag: third-party-link. Official handle on the site is @ClutchMarkets.", class: claim, observed_at: 2026-09-03T17:20:00Z, receipt_ids: [R-25, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: team.identity, value: "Docs legal block: operator SB (BVI) Ltd, Suite 5, Oleander Building, Port Purcell, Tortola VG1110, British Virgin Islands.", class: claim, observed_at: 2026-09-03T17:32:00Z, receipt_ids: [R-2], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-26, field: team.identity, value: "GitHub Clutch-L4bs/stonkbroker-erc20 README Issuer: Clutch Labs, LLC (New York, United States).", class: claim, observed_at: 2026-09-03T17:55:00Z, receipt_ids: [R-24], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-27, field: deployment.role, value: "Token was created by EOA 0xb668… via CollectionToken constructor, not by StonkLaunchpadFactory or a Pons/Hookr factory.", class: verified, observed_at: 2026-09-03T17:40:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-28, field: taxonomy.secondary-leaf, value: tooling/locker, class: claim, observed_at: 2026-09-03T17:32:00Z, receipt_ids: [R-2], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-29, field: identity.domain, value: "https://stonkbrokers.io", class: verified, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-18, R-28], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-30, field: account.@ClutchMarkets.role, value: "project", class: claim, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-1, R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-31, field: communications.status, value: "STORMM / Leverage Machine remains dated September 2026 on the homepage Opening Bell and docs options module; the 2026-08-29 article is still pinned.", class: claim, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-1, R-2, R-19], reproduction_ids: [REP-4, REP-7], supersedes: null }
  - { id: CLM-32, field: other, value: "DefiLlama protocol category is Launchpad; census and this packet keep primary leaf nft-treasury/token-bound-nft because the collection and Anvil NFTFi are the named product, with launchers as modules.", class: inference, observed_at: 2026-09-03T17:47:00Z, receipt_ids: [R-2, R-14], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-33, field: identity.repository, value: "NULL — docs footer GitHub https://github.com/Clutch-L4bs/stonkbrokers returned 404 this pass", class: unknown, observed_at: 2026-09-03T17:55:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-34, field: product.mechanism, value: "Safety Deposit Box locks Uniswap v3/v4 and up. LP into ownership NFTs; docs say no admin key can seize locked principal. Protocol locker fees route 90/10 to Safety Deposit Clock In / protocol.", class: claim, observed_at: 2026-09-03T17:32:00Z, receipt_ids: [R-2], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-35, field: activity.status, value: "Uniswap v4 STONKBROKER/ETH pair 0xd33c… created 2026-07-18T03:50:03Z; DexScreener 24h txns buys 1066 / sells 753 at fetch.", class: claim, observed_at: 2026-09-03T17:35:00Z, receipt_ids: [R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-36, field: security.audit, value: "DefiLlama protocol/stonkbrokers lists audits 0 and audit_links null.", class: claim, observed_at: 2026-09-03T17:47:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-16, CLM-17]
    material_effect: "Same Uniswap v4 pool 0xd33c… reads DexScreener liquidity.usd 3.58M vs GeckoTerminal reserve_in_usd 5.89M; 24h volumes agree near 3.35M. A card must not mix the two liquidity figures."
    status: open
    resolution: null
  - id: CON-2
    field: security.audit
    claim_ids: [CLM-15, CLM-36]
    material_effect: "Project-hosted HasLock ERC-20 PDFs vs DefiLlama audits 0 / audit_links null. A card must not treat the ERC-20 PDF as a DefiLlama-listed protocol audit."
    status: open
    resolution: null
  - id: CON-3
    field: team.identity
    claim_ids: [CLM-25, CLM-26]
    material_effect: "Docs name SB (BVI) Ltd as operator; the public ERC-20 repo names Clutch Labs, LLC (New York) as issuer. Legal entity is not a single reproduced string."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Account posts global-economy-onchain line"
    summary: "@ClutchMarkets posted This is not a phase. We are bringing the global economy onchain."
    occurred_at: 2026-09-02T17:20:49Z
    observed_at: 2026-09-03T17:20:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-2
    type: ct
    title: "Unchained covers NFT Stock Token wallets"
    summary: "Unchained described the 4,444 collection accruing Stock Tokens via ERC-6551 wallets, citing Clutch Markets."
    occurred_at: 2026-09-01T22:30:00Z
    observed_at: 2026-09-03T17:25:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-3
    type: company
    title: "NYC VIP dinner posted for NFT holders"
    summary: "@ClutchMarkets posted a Wall Street dinner for Stonkbroker NFT holders or 666,666 token holders."
    occurred_at: 2026-08-31T22:37:14Z
    observed_at: 2026-09-03T17:20:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: company
    title: "STORMM and Leverage Machine article"
    summary: "@ClutchMarkets pinned STORMM & Leverage Machine: Uniswap v4 LP as options inventory, NFT positions, September 2026."
    occurred_at: 2026-08-29T19:31:23Z
    observed_at: 2026-09-03T17:20:00Z
    affected_fields: [product.mechanism, taxonomy.secondary-leaf, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-5
    type: company
    title: "BrokerTools chain explorer introduced"
    summary: "@ClutchMarkets posted Introducing BrokerTools, a purpose-built explorer for the Robinhood Chain ecosystem."
    occurred_at: 2026-08-28T17:09:49Z
    observed_at: 2026-09-03T17:20:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-6
    type: onchain
    title: "CollectionToken deployed on chain 4663"
    summary: "EOA 0xb668… created CollectionToken 0xe934… at block 12514720; constructor minted 2,962,663,704 STONKBROKER."
    occurred_at: 2026-07-17T23:29:13Z
    observed_at: 2026-09-03T17:40:00Z
    affected_fields: [deployment.address, lifecycle, control.owner]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-7]
  - id: EVT-7
    type: onchain
    title: "StonkBrokers ERC-721 collection deployed"
    summary: "Same EOA created ERC-721 StonkBrokers 0x539c… at 2026-07-17T22:54:19Z; verified source, supply 4,444."
    occurred_at: 2026-07-17T22:54:19Z
    observed_at: 2026-09-03T17:42:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8, R-9]

receipts:
  - { id: R-1, publisher: StonkBrokers, title: "stonkbrokers.cash homepage", url: "https://www.stonkbrokers.cash/", published_at: null, accessed_at: 2026-09-03T17:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-8, CLM-19, CLM-20, CLM-24, CLM-30, CLM-31], excerpt: "DeFi infrastructure and incubator on Robinhood Chain. By Clutch Markets. $STONKBROKER CA 0xe934e36a439c94017b64a3fece66af12099abf50. 4,444 ERC-6551 brokers, minted out. Follow Clutch Markets. Leverage Machine (STORMM) is dated September 2026. Announcement on X 2075246949817598146." }
  - { id: R-2, publisher: StonkBrokers, title: "Documentation | StonkBrokers", url: "https://www.stonkbrokers.cash/docs", published_at: null, accessed_at: 2026-09-03T17:32:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-8, CLM-9, CLM-10, CLM-11, CLM-21, CLM-22, CLM-25, CLM-28, CLM-31, CLM-32, CLM-34], excerpt: "Anvil NFT AMM (live): NFT Collection 0x539cdd042c2f3d93ebc5be7dfff0c79f3b4fabf0, $STONKBROKER 0xe934e36a439c94017b64a3fece66af12099abf50, Activation Manager 0xacd5ae3c060c1137fe2ee86b0ab2ef697456f664, AMM Vault 0xe302733accf4800146e55fc45b46b4e4ffc032d2. Leverage Machine · STORMM coming soon September 2026. Operator SB (BVI) Ltd, Tortola." }
  - { id: R-3, publisher: StonkBrokers, title: "$STONKBROKER ERC-20 whitepaper", url: "https://www.stonkbrokers.cash/docs/stonkbroker-token", published_at: null, accessed_at: 2026-09-03T17:33:00Z, kind: whitepaper, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-12, CLM-13, CLM-15], excerpt: "Address 0xe934e36a439c94017b64a3fece66af12099abf50. Owner / admin None after deploy. HasLock Certified audit and penetration assessment performed by Admir Zlatic (0xSimpleFarmer), Hashlock SSCAC issued February 3, 2026. Findings on the ERC-20 surface: none. GitHub source github.com/Clutch-L4bs/stonkbroker-erc20." }
  - { id: R-4, publisher: Blockscout, title: "Token address 0xe934e36A…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xe934e36A439C94017B64a3FecE66AF12099aBF50", published_at: null, accessed_at: 2026-09-03T17:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-7], excerpt: "is_contract true, is_verified true, name CollectionToken, creator_address_hash 0xb668382cF44038a3E8140E789060F6A809787CDa, creation_transaction_hash 0x05c079592cb78dfde0a0689869c6dbebd321d8698de9ab78d15d93098cfdfc30, token name StonkBroker symbol STONKBROKER holders_count 33011." }
  - { id: R-5, publisher: Blockscout, title: "STONKBROKER token object", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xe934e36A439C94017B64a3FecE66AF12099aBF50", published_at: null, accessed_at: 2026-09-03T17:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-23], excerpt: "address_hash 0xe934e36A439C94017B64a3FecE66AF12099aBF50, name StonkBroker, symbol STONKBROKER, type ERC-20, decimals 18, holders_count 33012, total_supply 2392625318722333544417913524, circulating_market_cap 31666926.30657593." }
  - { id: R-6, publisher: Blockscout, title: "CollectionToken creation tx 0x05c07959…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x05c079592cb78dfde0a0689869c6dbebd321d8698de9ab78d15d93098cfdfc30", published_at: 2026-07-17T23:29:13Z, accessed_at: 2026-09-03T17:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-27, EVT-6], excerpt: "timestamp 2026-07-17T23:29:13Z block 12514720 from 0xb668382cF44038a3E8140E789060F6A809787CDa to null, created_contract 0xe934e36A439C94017B64a3FecE66AF12099aBF50 name CollectionToken. Token mint 2962663704000000000000000000 to 0xb668…." }
  - { id: R-7, publisher: Blockscout, title: "CollectionToken verified source", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0xe934e36A439C94017B64a3FecE66AF12099aBF50", published_at: 2026-07-17T23:33:58Z, accessed_at: 2026-09-03T17:41:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-13, CLM-27, EVT-6], excerpt: "file_path src/market/CollectionToken.sol, is_verified true, is_fully_verified true, compiler v0.8.26. Comment: fixed-supply ERC20 backing a Clutch NFT-Token AMM market. No owner, no admin, no mint after deployment. Constructor args StonkBroker, STONKBROKER, 2962663704000000000000000000, 0xb668…." }
  - { id: R-8, publisher: Blockscout, title: "NFT collection 0x539CdD04…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x539cdd042c2f3d93ebc5be7dfff0c79f3b4fabf0", published_at: null, accessed_at: 2026-09-03T17:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-14, CLM-23, EVT-7], excerpt: "hash 0x539CdD042c2f3d93EbC5BE7DfFf0c79F3B4fAbF0, is_contract true, is_verified true, name StonkBrokers, creator 0xb668382cF44038a3E8140E789060F6A809787CDa, creation_transaction_hash 0x35c32b43ce7041e6908f56decdf2413bc7084d99c20471152f51f888af90efd4, token ERC-721 symbol STONK total_supply 4444 holders_count 640." }
  - { id: R-9, publisher: Blockscout, title: "NFT collection creation tx 0x35c32b43…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x35c32b43ce7041e6908f56decdf2413bc7084d99c20471152f51f888af90efd4", published_at: 2026-07-17T22:54:19Z, accessed_at: 2026-09-03T17:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-14, EVT-7], excerpt: "timestamp 2026-07-17T22:54:19Z from 0xb668… created_contract 0x539CdD04… name StonkBrokers. Constructor tail includes owner slots 0xb668… twice and stock-token list 0xaf3d76f1…, 0x12f190a9…, 0xd0601CE1… (NVDA)." }
  - { id: R-10, publisher: Blockscout, title: "StonkNFTAMMVault 0xE302733a…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xe302733accf4800146e55fc45b46b4e4ffc032d2", published_at: null, accessed_at: 2026-09-03T17:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "hash 0xE302733accF4800146E55fC45B46b4E4fFC032D2, is_contract true, is_verified true, name StonkNFTAMMVault, creator_address_hash 0xb668382cF44038a3E8140E789060F6A809787CDa." }
  - { id: R-11, publisher: Blockscout, title: "ActivationManager 0xacD5ae3c…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xacd5ae3c060c1137fe2ee86b0ab2ef697456f664", published_at: null, accessed_at: 2026-09-03T17:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0xacD5ae3c060C1137FE2Ee86B0aB2EF697456f664, is_contract true, is_verified true, name ActivationManager, creator_address_hash 0xb668382cF44038a3E8140E789060F6A809787CDa." }
  - { id: R-12, publisher: DexScreener, title: "STONKBROKER token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0xe934e36A439C94017B64a3FecE66AF12099aBF50", published_at: null, accessed_at: 2026-09-03T17:35:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-16, CLM-35], excerpt: "Primary Uniswap v4 STONKBROKER/ETH pair 0xd33c8fd38b06e989cdbd4dffdefab71c4bdd415b24964c8d69e38ff35b068f92 labels v4, liquidity.usd 3581052.52, volume.h24 3357621.82, marketCap 29647685, fdv 45923562, websites https://stonkbrokers.cash, socials https://x.com/ClutchMarkets." }
  - { id: R-13, publisher: GeckoTerminal, title: "STONKBROKER pool search", url: "https://api.geckoterminal.com/api/v2/search/pools?query=STONKBROKER", published_at: null, accessed_at: 2026-09-03T17:50:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-17], excerpt: "uniswap-v4-robinhood pool 0xd33c8fd38b06e989cdbd4dffdefab71c4bdd415b24964c8d69e38ff35b068f92 name STONKBROKER / WETH 1%, reserve_in_usd 5890033.3824, volume_usd.h24 3345880.27670663, quote_token robinhood_0x0000000000000000000000000000000000000000." }
  - { id: R-14, publisher: DefiLlama, title: "api.llama.fi/protocol/stonkbrokers", url: "https://api.llama.fi/protocol/stonkbrokers", published_at: null, accessed_at: 2026-09-03T17:47:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-18, CLM-32, CLM-36], excerpt: "name StonkBrokers, url https://www.stonkbrokers.cash, twitter ClutchMarkets, category Launchpad, audits 0, audit_links null, currentChainTvls Robinhood Chain 1016688.16158, Robinhood Chain-staking 23462326.07444. Methodology: TVL is WETH in Safety Deposit Box lockers." }
  - { id: R-15, publisher: DefiLlama, title: "StonkBrokers daily fees", url: "https://api.llama.fi/summary/fees/stonkbrokers?dataType=dailyFees", published_at: null, accessed_at: 2026-09-03T17:48:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-18], excerpt: "chainBreakdown Robinhood Chain total24h 9200; Base total24h 328. DisplayName StonkBrokers, category Launchpad, twitter ClutchMarkets." }
  - { id: R-16, publisher: DefiLlama, title: "StonkBrokers daily revenue", url: "https://api.llama.fi/summary/fees/stonkbrokers?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T17:48:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-18], excerpt: "chainBreakdown Robinhood Chain total24h 4474. total24h 4474." }
  - { id: R-17, publisher: DefiLlama, title: "StonkBrokers daily DEX volume", url: "https://api.llama.fi/summary/dexs/stonkbrokers?dataType=dailyVolume", published_at: null, accessed_at: 2026-09-03T17:49:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-18], excerpt: "chainBreakdown Robinhood Chain total24h 32432. Methodology Volume covers NFT AMM fills, Broker Box, Safe Launch / Stonklauncher window trades, and StonkCurvePool quoteAmount — not the Uniswap v4 STONKBROKER/ETH pair." }
  - { id: R-18, publisher: X, title: "@ClutchMarkets profile", url: "https://x.com/ClutchMarkets", published_at: null, accessed_at: 2026-09-03T17:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-19, CLM-29, CLM-30], excerpt: "CLUTCH @ClutchMarkets. Bio: The laboratory for decentralized onchain markets. Website stonkbrokers.io. Joined June 2024. 26.1K followers. Pinned article STORMM & Leverage Machine, 2026-08-29." }
  - { id: R-19, publisher: "@ClutchMarkets", title: "STORMM & Leverage Machine", url: "https://x.com/ClutchMarkets/status/2093783593323581466", published_at: 2026-08-29T19:31:23Z, accessed_at: 2026-09-03T17:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-10, CLM-21, CLM-31, EVT-4], excerpt: "Pinned article STORMM & Leverage Machine. Stock tokens are a better version of a regular stock. Right? If so, how do we prove it? 146 replies, 194 reposts, 826 likes, 438K views." }
  - { id: R-20, publisher: "@ClutchMarkets", title: "NYC VIP dinner", url: "https://x.com/ClutchMarkets/status/2094555139075965242", published_at: 2026-08-31T22:37:14Z, accessed_at: 2026-09-03T17:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "If you are a Stonkbroker NFT holder or hold at least 666,666 $STONKBROKER tokens clock In for the Stonkbrokers' NFT NYC VIP Dinner hosted by @AdamWeitsman on Wall Street. Invitations are by approval only via Clutch X or Discord." }
  - { id: R-21, publisher: "@ClutchMarkets", title: "Introducing BrokerTools", url: "https://x.com/ClutchMarkets/status/2093385577722691665", published_at: 2026-08-28T17:09:49Z, accessed_at: 2026-09-03T17:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "Introducing BrokerTools. A purpose-built chain explorer for the Robinhood Chain Ecosystem. @RobinhoodCrypto" }
  - { id: R-22, publisher: "@ClutchMarkets", title: "This is not a phase", url: "https://x.com/ClutchMarkets/status/2095200285052248568", published_at: 2026-09-02T17:20:49Z, accessed_at: 2026-09-03T17:20:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "This is not a phase. We are bringing the global economy onchain." }
  - { id: R-23, publisher: Unchained, title: "StonkBrokers NFT collection and Stock Tokens", url: "https://unchainedcrypto.com/how-robinhood-chains-nft-darling-blends-securities-and-collectibles-unchained/", published_at: 2026-09-01T22:30:00Z, accessed_at: 2026-09-03T17:25:00Z, kind: news, authority: independent, authenticity: unconfirmed, supports: [EVT-2], excerpt: "Called StonkBrokers, the colorful 4,444-piece collection enables its owners to accrue Stock Tokens as rewards on Robinhood's Ethereum layer-2. Clutch Markets said on X on Aug. 25 that the project had distributed more than $1.57 million in what it calls marketing rewards. ERC-6551 token-bound account." }
  - { id: R-24, publisher: Clutch-L4bs, title: "stonkbroker-erc20 README", url: "https://github.com/Clutch-L4bs/stonkbroker-erc20", published_at: null, accessed_at: 2026-09-03T17:55:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-12, CLM-26], excerpt: "$STONKBROKER ERC-20 (CollectionToken) on Robinhood Chain 4663. Address 0xe934e36a439c94017b64a3fece66af12099abf50. Issuer Clutch Labs, LLC (New York, United States). Docs hub https://stonkbrokers.io/docs. BUSL-1.1 Change Date 2029-08-25." }
  - { id: R-25, publisher: X, title: "@realstonkbroker profile", url: "https://x.com/realstonkbroker", published_at: null, accessed_at: 2026-09-03T17:20:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24], excerpt: "StonkBrokers @realstonkbroker. Bio: Fan Account. CA (Robinhood): 0xe934e36a439c94017b64a3fece66af12099abf50. 5437 followers." }
  - { id: R-28, publisher: StonkBrokers, title: "stonkbrokers.io homepage", url: "https://stonkbrokers.io", published_at: null, accessed_at: 2026-09-03T17:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-29], excerpt: "The Stonk Broker Terminal. DeFi infrastructure and incubator on Robinhood Chain. By Clutch Markets. Same $STONKBROKER CA 0xe934e36a439c94017b64a3fece66af12099abf50 and Follow Clutch Markets link as stonkbrokers.cash." }

gaps:
  - { priority: P0, question: "What does owner() return on the NFT collection, Anvil vault, ActivationManager, loan vault and locker contracts, and is there a timelock?", checked: "Blockscout creation txs and Ownable-style bytecode 2026-09-03; public RPC eth_getCode on the token succeeded; owner() not eth_called", next: "eth_call owner() / pendingOwner() on 0x539c…, 0xE302…, 0xacD5…, 0xa7b9… and the V3/V4 lockers" }
  - { priority: P0, question: "Who can move Stock Tokens out of a broker TBA besides the current ERC-721 holder, and does a transfer empty the wallet?", checked: "Docs say the TBA travels with the NFT and seeded stock can be withdrawn anytime; activation clears on transfer. No TBA sample balance or executeCall trace this pass", next: "pick three tokenIds, resolve ERC-6551 accounts, read Stock Token balances and a recent executeCall" }
  - { priority: P1, question: "Are any STORMM / CoveredCallVault addresses live on 4663, or is September 2026 still docs-only?", checked: "docs Leverage Machine module, homepage Opening Bell, pinned 2026-08-29 article; live contract table has no options address", next: "search Blockscout for CoveredCallVault / STORMM from 0xb668… after 2026-09-01" }
  - { priority: P1, question: "How does the HasLock ERC-20 PDF relate to Hashlock the auditor firm, given the named reviewer is Admir Zlatic (0xSimpleFarmer)?", checked: "whitepaper §6 and PDF links on 2026-09-03; DefiLlama audits 0; Unchained names 0xSimpleFarmer as Clutch lead", next: "read the PDF signer block and Hashlock directory for SSCAC 2026-02-03" }
  - { priority: P1, question: "Which legal entity is the operator: SB (BVI) Ltd or Clutch Labs, LLC (New York)?", checked: "docs footer vs GitHub README 2026-09-03", next: "controller identity pass; keep both claims open" }
  - { priority: P2, question: "Is there an official Telegram, and what is the Discord invite named in the NYC dinner post?", checked: "site, docs, X profile 2026-09-03; Discord named only in the 2026-08-31 post", next: "record URLs if a later official post publishes them" }
  - { priority: P2, question: "Why does docs footer GitHub Clutch-L4bs/stonkbrokers 404 while stonkbroker-erc20 is public?", checked: "GET github.com/Clutch-L4bs/stonkbrokers 404; token repo public", next: "treat protocol source as unpublished until the org repo opens" }
---

# StonkBrokers — research packet

## What it is

StonkBrokers is a 4,444-piece ERC-6551 NFT collection on Robinhood Chain. Each NFT owns a token-bound wallet that can hold Stock Tokens. A user buys $STONKBROKER, swaps 666,666 tokens plus an ETH fee on the Anvil AMM for a broker, then pays an activation fee for Clock In stock-token drops. Clutch Markets operates the suite. STORMM options are posted for September 2026.

Themes: nft, rwa, options

## Why it matters

The collection is a token-bound treasury: a tradable NFT whose wallet can hold Robinhood Stock Tokens, so equity-token balances move with the picture. $STONKBROKER is the activation and Anvil settlement asset, not a launchpad graduate. DefiLlama still files the operator under Launchpad because Smart Launch and Stonk Launcher are live modules; the census leaf is the NFT treasury.

## What could go wrong

The ERC-20 is ownerless after deploy; the NFT collection and Anvil stack were created by one EOA and the collection bytecode includes Ownable. Docs say activation weight resets on transfer, so a bought broker does not keep the prior holder's Clock In election. STORMM remains a September 2026 module with no address in the live table. DexScreener and GeckoTerminal disagree on liquidity for the same Uniswap v4 pool.

## Product and mechanics

StonkBrokers is an ERC-721 collection of 4,444 brokers. Each token has an ERC-6551 token-bound account. Docs and the homepage say that wallet is seeded with a Robinhood Stock Token at mint (TSLA, AMZN, PLTR, NFLX, AMD and later names) and, once the broker is activated, can receive Clock In stock-token drops. The free mint is closed; the documented acquire path is buy $STONKBROKER then Trade or snipe on the Anvil AMM. [claim R-1 R-2]

Anvil prices a vault broker at 666,666 $STONKBROKER plus a native ETH trade fee (docs: 10% swap / 15% snipe). Activation is a separate $STONKBROKER fee with published tiers from 66,666 (100x) to 1,666,666 (333x); docs say 50% of that fee is burned and activation clears on true ownership transfer. Clock In v2 lets any wallet crank a full ETH pot into elected Stock Tokens and credit activated brokers by tier weight. Docs label Clock In drops as a marketing program, not corporate dividends. [claim R-2]

$STONKBROKER is a fixed-supply CollectionToken at 0xe934…. Verified source mints once in the constructor to 0xb668… with no further mint, pause, tax or blacklist. Constructor supply 2,962,663,704 equals 4,444 × 666,666. Blockscout total_supply at fetch was about 2,392,625,319, so burns have reduced supply since deploy. The token was created by that EOA, not by StonkLaunchpadFactory. [verified R-3 R-6 R-7]

Live modules around the collection include the Safety Deposit Box (Uniswap v3/v4 and up. LP lockers), Broker Box (Certificate Counter plus Play the Box, stock-token prizes), Smart Launch V2 and Stonk Launcher (bonding-curve pads that graduate into locked pools), and the Stonk Exchange powered by up. Leverage Machine / STORMM is documented as coming soon on mainnet in September 2026: Uniswap v4 LP ranges used as options inventory, with calls and puts minted as ERC-721s. No STORMM address appears in the live Anvil table. [claim R-1 R-2 R-19]

## Control and security

CollectionToken verified source has no Ownable and no admin mint after the constructor. The NFT collection, Anvil vault and ActivationManager were all created by EOA 0xb668382cF44038a3E8140E789060F6A809787CDa. NFT creation bytecode includes Ownable owner / transferOwnership; live owner() was not eth_called this pass. Docs say locker principal cannot be seized by an admin key; that claim was not reproduced from the locker source this pass. [verified R-7] [inference R-8 R-9 R-10]

The token whitepaper publishes a HasLock-certified ERC-20 audit and penetration assessment named as performed by Admir Zlatic (0xSimpleFarmer), Hashlock SSCAC dated 2026-02-03, with no findings on the ERC-20 surface. DefiLlama's protocol object lists audits 0 and audit_links null. Unchained names 0xSimpleFarmer as the Clutch lead. Protocol GitHub Clutch-L4bs/stonkbrokers returned 404; the ERC-20 repo is public under BUSL 1.1. [claim R-3 R-14 R-23 R-24]

## Team and provenance

Official identity is bidirectional: the cash and io terminals name @ClutchMarkets and token 0xe934…; the X profile @ClutchMarkets links stonkbrokers.io, which serves the same terminal as stonkbrokers.cash. Docs name operator SB (BVI) Ltd in Tortola. The public ERC-20 README names issuer Clutch Labs, LLC (New York). Those two legal strings are both on file. [verified R-1 R-18 R-28] [claim R-2 R-24]

@realstonkbroker is a separate X account whose bio reads Fan Account and repeats CA 0xe934…. Flag: third-party-link. The site does not name that handle. Special Projects (TickerYard, Oakmont, Card Wall, Chain Mancers, DERP, UP) are listed as independent teams. No official Telegram was listed; Discord is named only in the 2026-08-31 dinner post. [claim R-1 R-25]

## Economics and activity

DexScreener's Uniswap v4 STONKBROKER/ETH pair 0xd33c… showed liquidity 3581052.52 USD, 24h volume 3357621.82 USD and marketCap 29647685 USD at fetch. GeckoTerminal's reserve_in_usd for the same pool was 5890033.38 with 24h volume 3345880.28 USD. Those liquidity fields disagree; the volumes agree near 3.35M. Pair quote is native ETH (Gecko labels the pool WETH). [claim R-12 R-13]

DefiLlama chain-slice TVL (locker WETH only) was 1016688.16 USD at 2026-09-02T22:21:23Z. A separate staking row of 23462326.07 USD in STONKBROKER is not that TVL. Robinhood Chain 24h fees 9200 USD and revenue 4474 USD are Llama adapter totals across Anvil, activation, Broker Box, lockers and launchers — not the Uniswap v4 token pair. Llama protocol DEX volume 32432 USD is the same adapter, not DexScreener pair volume. Blockscout holders_count 33012 on the ERC-20; 640 holders on the 4,444 ERC-721. [claim R-5 R-8 R-14 R-15 R-16 R-17]

## Material risks

- NFT collection and Anvil stack were deployed from one EOA with an Ownable path on the collection; live owner() is unread. [inference R-8 R-9]
- Token-bound Stock Token balances and who can executeCall were not sampled. [unknown]
- Activation weight clears on transfer per docs, so secondary NFT buyers start at base until they pay again. [claim R-2]
- STORMM / Leverage Machine is still a September 2026 module with no live address in the contract table. [claim R-2 R-19]
- DexScreener liquidity.usd 3.58M and GeckoTerminal reserve_in_usd 5.89M describe the same pool. [disputed R-12 R-13]
- HasLock ERC-20 PDFs are project-hosted and named to Admir Zlatic (0xSimpleFarmer); DefiLlama lists no audit links. [claim R-3 R-14]
- Operator legal name is not a single string (SB (BVI) Ltd vs Clutch Labs, LLC). [disputed R-2 R-24]
- @realstonkbroker repeats the CA as a Fan Account; the official handle on the site is @ClutchMarkets. [claim R-1 R-25]

## Verification passes

- Receipts: official cash and io terminals, docs, token whitepaper, X profile and named status URLs, Unchained, GitHub ERC-20 README, DexScreener token API, GeckoTerminal pool search, DefiLlama protocol/fees/dexs URLs, and Blockscout address/tx/source APIs were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-2 R-3 R-4 R-8 R-12 R-13 R-14 R-18]
- Numbers: holders 33012 is the Blockscout token field; 24h volume 3357621.82 USD and liquidity 3581052.52 USD are the DexScreener Uniswap v4 STONKBROKER/ETH pair slice, not all-pairs; Gecko reserve_in_usd 5890033.38 is the same pool under a different field; Llama TVL 1016688.16 is the Robinhood Chain locker WETH slice, not staking 23.5M and not pair liquidity. [claim R-5 R-12 R-13 R-14]
- Adversarial: the strongest contrary reading is that StonkBrokers is the chain's launchpad (DefiLlama category Launchpad; Smart Launch and Stonk Launcher are live) or that it is Stonks.fun / @realstonkbroker. Official copy names an ERC-6551 collection and Anvil NFTFi first; $STONKBROKER was created by an EOA CollectionToken constructor, not a launcher factory; @realstonkbroker bios itself as Fan Account; Stonks.fun is a different handle and ticker. [inference R-1 R-2 R-6 R-25]

## Operations log

- Read content/projects/stonkbroker.yaml, content/pulled/stonkbroker.yaml, content/census.yaml stonkbroker row, content/sources/stonkbroker.yaml, content/feed/stonkbroker.yaml, docs/taxonomy.md, schema/packet.schema.json, docs/templates/research-packet-v2.md.
- Opened https://www.stonkbrokers.cash/, https://stonkbrokers.io, https://www.stonkbrokers.cash/docs, https://www.stonkbrokers.cash/docs/stonkbroker-token, https://x.com/ClutchMarkets and named status URLs, https://github.com/Clutch-L4bs/stonkbroker-erc20 (public) and https://github.com/Clutch-L4bs/stonkbrokers (404).
- GET Blockscout /api/v2/addresses for token, collection, AMM vault, ActivationManager; /api/v2/tokens for STONKBROKER; /api/v2/transactions for token and collection creates; /api/v2/smart-contracts for CollectionToken.
- POST rpc.mainnet.chain.robinhood.com eth_getCode on 0xe934… (non-empty, 6698 hex chars).
- GET DexScreener latest/dex/tokens/0xe934…; GET api.geckoterminal.com/api/v2/search/pools?query=STONKBROKER; GET api.llama.fi/protocol/stonkbrokers plus fees and dexs summaries.
- X user search ClutchMarkets and realstonkbroker; keyword from:ClutchMarkets Latest.
- Stonk Launcher factory 0x80a770… was not opened on Blockscout this pass (exists_on_4663 left null). Time on this slug: one collector pass.
