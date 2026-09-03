---
# Packet v2 (docs/research-system.md §5). Collector full-tier for Icarus.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: scopl
name: SCOPL
packet_tier: full
as_of: 2026-09-03T00:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [scopl]
allowed_paths:
  - research/inbox/packets/scopl/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: SCOPL
  aliases: ["scopl.live"]
  symbols: [SCOPL]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://scopl.live
  official_handle: "@scopl_live"
  repository: "NULL — no GitHub org or repo linked from scopl.live, scopl.live/guide, scopl.live/docs, the @scopl_live bio, or PonsV2LauncherToken constructor socials this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "SCOPL token 0xaA40e79E… is a PonsV2LauncherToken created by PonsV2LaunchAndBuy; Pons is the launchpad, not the limit-order product"
        - "Census Pons is ponsfamily.com / @ponsdotfamily; SCOPL is scopl.live / @scopl_live"
        - "No shared domain or handle"
    - slug: mancer
      signals: [other]
      contrary_signals:
        - "Census Mancer is a DEX aggregator and order layer at mancer.xyz / @MancerXYZ"
        - "SCOPL is a Uniswap V3/V4 one-tick limit-order layer at scopl.live / @scopl_live"
        - "No shared domain, handle or reproduced address"
    - slug: delta
      signals: [other]
      contrary_signals:
        - "Census Delta is an LP manager at @deltaliquidity"
        - "SCOPL's ZapRouter and FeeRouter are LP-adjacent; the primary machine is one-tick limit orders, not a vaulted LP manager"
        - "No shared domain, handle or reproduced address"
    - slug: maxfi
      signals: [other]
      contrary_signals:
        - "Census MaxFi is a managed LP product at maxfi.tech / @MAXFILABS"
        - "SCOPL is scopl.live / @scopl_live"
        - "No shared domain, handle or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "SpyWolf V2 text names the Long.xyz Doppler hook as an approved V4 hook; LONG is a stock-paired factory at app.long.xyz / @longdotxyz"
        - "SCOPL is a limit-order layer at scopl.live / @scopl_live"
        - "No shared domain, handle or reproduced address"
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census Hookr is a v4 hook marketplace at hookr.fun / @Hookrfun"
        - "SCOPL allowlists third-party V4 hooks on its order manager; it is not a hook marketplace"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: trading/aggregator
  secondary_leaves: [yield/lp-manager]
  mechanism_tags: [amm, orderbook, fee-routing, vault]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "The product is a Uniswap V3/V4 one-tick limit-order layer: the user mints a concentrated-liquidity position NFT that stays in the wallet and fills when the pool price crosses one tick spacing. Taxonomy has no limit-order leaf; trading/aggregator is the census leaf and the closest execution-layer slot (not a multi-venue router). yield/lp-manager is secondary for the published FeeRouter, ZapRouter and pool explorer. Lifecycle is mainnet: token, V3 manager (8,102 txs) and V4 manager (1,644 txs) exist with verified source on 4663, plus a Uniswap v4 SCOPL/ETH pool. Census announced is stale. [R-1] [R-2] [R-4] [R-6] [R-9] [R-10] [R-18]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-8, CLM-9], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-7, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-11, CLM-13, CLM-19], note: "" }

links:
  - { kind: site, url: "https://scopl.live", authenticity: confirmed }
  - { kind: app, url: "https://scopl.live/trade", authenticity: confirmed }
  - { kind: docs, url: "https://scopl.live/docs", authenticity: confirmed }
  - { kind: other, url: "https://scopl.live/guide", authenticity: confirmed }
  - { kind: x, url: "https://x.com/scopl_live", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/scopl_live", authenticity: confirmed }
  - { kind: discord, url: "https://discord.com/invite/cBBN3WWATU", authenticity: unconfirmed }

deployments:
  - label: SCOPL token (PonsV2LauncherToken; name scopl.live)
    role: token
    address:
      value: "0xaA40e79E987517f7462bF79315B8A118799B04E3"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-7, R-8]
  - label: ScoplLimitOrderManager V3 (API and guide current live)
    role: other
    address:
      value: "0xf4badBc5bea19E94f61084172f7b68383166CDd7"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-4, R-9, R-30]
  - label: ScoplV4LimitOrderManager (API and guide current live)
    role: other
    address:
      value: "0xcdD1E3BC873e5Ff7cA974b7212D6031fe853Cd42"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-4, R-10, R-31]
  - label: ScoplFeeRouter
    role: other
    address:
      value: "0x7d3ea31b89804d7Dd755781d56eab7128A8b4D48"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-11]
  - label: ScoplReferralRewards
    role: other
    address:
      value: "0x4eE310BCB577afB4beEcDA9422764B7A8E4e04a3"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-12]
  - label: ScoplRevenueDistributor
    role: other
    address:
      value: "0x0A552810F73892216Ae755A027D4AD3efdE3Ca87"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-13]
  - label: ScoplBuybackVault
    role: vault
    address:
      value: "0x885C479cD30d02f7a7a09dC785b577B23ee27a00"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-14]
  - label: ScoplRouterSwapAdapter
    role: other
    address:
      value: "0x168567e09A4835D80589BCDE3F1dA5c930D5d9e7"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-15]
  - label: ScoplZapRouter
    role: router
    address:
      value: "0x34BE29754d2538B31B556A7d2253a98917468c49"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-16]
  - label: ScoplOrderPolicy (verified on 4663; omitted from the eight-contract guide)
    role: other
    address:
      value: "0xfA7a06b158eCf40232A4e1c976160be592391646"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-17, R-19]

metrics:
  - { kind: holders, value: 1342, currency: null, as_of: 2026-09-02T23:20:00Z, window: point, method: "Blockscout GET /api/v2/tokens/0xaA40e79E987517f7462bF79315B8A118799B04E3 holders_count", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 220293.98, currency: USD, as_of: 2026-09-02T23:25:00Z, window: 24h, method: "DexScreener latest/dex/tokens SCOPL Uniswap v4 SCOPL/ETH pair 0x865147… volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-18] }
  - { kind: market_cap, value: 913350, currency: USD, as_of: 2026-09-02T23:25:00Z, window: point, method: "DexScreener same SCOPL/ETH v4 pair marketCap/fdv field", class: claim, receipt_ids: [R-18] }
  - { kind: tvl, value: 144283.84, currency: USD, as_of: 2026-09-02T23:25:00Z, window: point, method: "DexScreener same pair liquidity.usd (listed SCOPL/ETH v4 pool, not protocol TVL; scopl.live/pools $156.7M is a chain-wide pool ranking, not SCOPL TVL)", class: claim, receipt_ids: [R-18, R-33] }

reproductions:
  - { id: REP-1, method: api, chain_id: 4663, checked_at: 2026-09-02T23:20:00Z, receipt_ids: [R-6, R-7, R-8], result: "Blockscout address 0xaA40e79E… is_contract true, is_verified true, name scopl.live, token SCOPL ERC-20 18 decimals supply 1e27, holders_count 1342; creator PonsV2LaunchDeployer 0x3711ceA4…; file PonsV2LauncherToken.sol; constructor socials twitter https://x.com/scopl_live telegram https://t.me/scopl_live; deployer 0xcb484494… curve 0x72042Cd0… launchFactory 0x7eD598Bc…; creation tx 0xf0a88e54… 2026-08-16T13:00:02Z from 0xcb484494… to PonsV2LaunchAndBuy 0xe33E9E47… method launchAndBuy pairToken 0x0" }
  - { id: REP-2, method: api, chain_id: 4663, checked_at: 2026-09-02T23:28:00Z, receipt_ids: [R-9, R-30, R-32], result: "0xf4badBc5… is_contract true, is_verified true, name ScoplLimitOrderManager, created 2026-08-13T14:49:54Z in tx 0xf5921c63… by EOA 0x7F4a8ff9…; counters transactions_count 8102; matches API v3.manager and guide" }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-02T23:28:00Z, receipt_ids: [R-10, R-31], result: "0xcdD1E3BC… is_contract true, is_verified true, name ScoplV4LimitOrderManager, created 2026-08-14T12:15:42Z in tx 0x499a26fa… by EOA 0x7F4a8ff9…; counters transactions_count 1644; matches API v4.manager and guide" }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-02T23:10:00Z, receipt_ids: [R-1, R-2, R-5, R-7], result: "Token constructor socials name https://x.com/scopl_live; @scopl_live bio lists CA 0xaA40e79E… and scopl.live wording; scopl.live/guide on the same host lists eight 4663 contracts with Blockscout links; DexScreener pair info.websites scopl.live and socials x.com/scopl_live plus t.me/scopl_live" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-02T23:25:00Z, receipt_ids: [R-18], result: "DexScreener SCOPL/ETH Uniswap v4 pair 0x865147… labels v4, liquidity.usd 144283.84, volume.h24 220293.98, marketCap 913350, websites scopl.live, socials x.com/scopl_live and t.me/scopl_live" }
  - { id: REP-6, method: document-scope, checked_at: 2026-09-02T23:22:00Z, receipt_ids: [R-2, R-4, R-19], result: "Guide tables eight live contracts; API /api/v1/limit-orders/config names V3 manager 0xf4badBc5… and V4 manager 0xcdD1E3BC… on chain 4663; SpyWolf PDF names nine production contracts including ScoplOrderPolicy, which the guide omits" }
  - { id: REP-7, method: api, chain_id: 4663, checked_at: 2026-09-02T23:30:00Z, receipt_ids: [R-11, R-12, R-13, R-14, R-15, R-16], result: "Guide addresses 0x7d3ea31b… ScoplFeeRouter, 0x4eE310BC… ScoplReferralRewards, 0x0A552810… ScoplRevenueDistributor, 0x885C479c… ScoplBuybackVault, 0x168567e0… ScoplRouterSwapAdapter, 0x34BE2975… ScoplZapRouter: each is_contract true, is_verified true, created by 0x7F4a8ff9…" }
  - { id: REP-8, method: api, chain_id: 4663, checked_at: 2026-09-02T23:30:00Z, receipt_ids: [R-17], result: "Search ScoplOrderPolicy returns 0xfA7a06b1… is_contract true, is_verified true, name ScoplOrderPolicy, creator 0x7F4a8ff9…" }
  - { id: REP-9, method: api, chain_id: 4663, checked_at: 2026-09-02T23:31:00Z, receipt_ids: [R-28], result: "0x07f5B6823751C2E2cd4560f28aF75ff887102241 on 4663 is_contract false; not the SCOPL token" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Non-custodial Uniswap V3/V4 one-tick range order: the user sets tokenIn, tokenOut and a target price; the manager mints a one-tick-spacing single-sided concentrated-liquidity position NFT that stays in the user's wallet and fills when the pool price crosses the range. Free mode routes generated LP fees to the protocol at 0% output fee; Rewards mode leaves LP fees with the user and charges a SCOPL-balance fee tier.", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-1, R-2, R-3, R-4], reproduction_ids: [REP-4, REP-6], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://scopl.live", class: verified, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-1, R-5, R-7, R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@scopl_live", class: verified, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xaA40e79E987517f7462bF79315B8A118799B04E3", class: verified, observed_at: 2026-09-02T23:20:00Z, receipt_ids: [R-5, R-6, R-7, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T23:28:00Z, receipt_ids: [R-6, R-9, R-10, R-18], reproduction_ids: [REP-1, REP-2, REP-3, REP-5], supersedes: null }
  - { id: CLM-6, field: taxonomy.primary-leaf, value: trading/aggregator, class: inference, observed_at: 2026-09-03T00:05:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-02T23:22:00Z, receipt_ids: [R-4, R-6, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0xf4badBc5bea19E94f61084172f7b68383166CDd7", class: verified, observed_at: 2026-09-02T23:28:00Z, receipt_ids: [R-2, R-4, R-9], reproduction_ids: [REP-2, REP-6], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "0xcdD1E3BC873e5Ff7cA974b7212D6031fe853Cd42", class: verified, observed_at: 2026-09-02T23:28:00Z, receipt_ids: [R-2, R-4, R-10], reproduction_ids: [REP-3, REP-6], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Trade app fee options: Free 0% (referral-gated per the guide) or Keep rewards 1.5% default, stepping to 1.2% / 0.75% / 0.3% at 50k / 250k / 1M SCOPL. A small ETH gas reserve pays keeper execution and is returned on cancel.", class: claim, observed_at: 2026-09-02T23:14:00Z, receipt_ids: [R-2, R-4, R-29], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "Protocol interface fees split 30% referral / 50% SCOPL buyback / 20% operations; with no referrer the referral share moves to operations. Buybacks accumulate in ScoplBuybackVault.", class: claim, observed_at: 2026-09-02T23:14:00Z, receipt_ids: [R-2, R-19], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-12, field: security.audit, value: "SpyWolf Security Audit Report completed 2026-08-30 for SCOPL V2 on chain 4663; token 0xaA40e79E…; nine production contracts named; PDF states no Critical or High findings exploitable by an untrusted actor in the deployed code. Addresses for those nine contracts are not printed in the pages read.", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-19, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "Constructor of the live V3 and V4 managers sets Ownable owner to EOA 0x7F4a8ff98B2b2996dC96D95A358Ecf9f7473b397, which also created the other guide contracts. Live owner() was not eth_called this pass (RPC 403). Audit text says two-step transferOwnership/acceptOwnership and an intended governance Safe.", class: inference, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-9, R-10, R-19, R-32], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-14, field: control.timelock, value: "Verified V3/V4 manager source exposes two-step propose/accept ownership and owner-only fee, pause and hook setters; no timelock contract was named on the guide or in the audit pages read.", class: claim, observed_at: 2026-09-02T23:32:00Z, receipt_ids: [R-19, R-32], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: relationship, value: "$SCOPL was created 2026-08-16 via PonsV2LaunchAndBuy 0xe33E9E47… (factory 0x7eD598Bc…, deployer helper 0x3711ceA4…), pairToken ETH, not by a SCOPL factory.", class: verified, observed_at: 2026-09-02T23:20:00Z, receipt_ids: [R-7, R-8, R-35], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-16, field: activity.status, value: "Guide and API current managers are live on 4663: ScoplLimitOrderManager 0xf4badBc5… 8,102 txs; ScoplV4LimitOrderManager 0xcdD1E3BC… 1,644 txs.", class: verified, observed_at: 2026-09-02T23:28:00Z, receipt_ids: [R-2, R-4, R-9, R-10, R-30, R-31], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-17, field: activity.status, value: "@scopl_live 2026-08-30 and 2026-08-31 posted that V2 is around the corner; 2026-09-02 posted SCOPL V2 is almost here.", class: claim, observed_at: 2026-09-02T23:05:00Z, receipt_ids: [R-20, R-22, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: identity.symbol, value: SCOPL, class: verified, observed_at: 2026-09-02T23:20:00Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-19, field: taxonomy.entity-kind, value: protocol, class: inference, observed_at: 2026-09-03T00:05:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener Uniswap v4 SCOPL/ETH pair 0x865147…: liquidity.usd 144283.84, volume.h24 220293.98, marketCap 913350 as of fetch. Blockscout holders_count 1342.", class: verified, observed_at: 2026-09-02T23:25:00Z, receipt_ids: [R-6, R-18], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-21, field: identity.repository, value: "NULL — no official repository URL on site, guide, docs, X bio or constructor socials", class: unknown, observed_at: 2026-09-02T23:16:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: other, value: "api.llama.fi/protocol/scopl returned Protocol not found", class: claim, observed_at: 2026-09-02T23:26:00Z, receipt_ids: [R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "third-party-link: 2026-08-30 posts from non-official accounts named a holder portal at crypto.cryptolot.lol with token 0xaA40e79E…; scopl.live and @scopl_live did not link that domain this pass", class: claim, observed_at: 2026-09-02T23:08:00Z, receipt_ids: [R-26], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: other, value: "wrong-chain: 0x07f5B6823751C2E2cd4560f28aF75ff887102241 is not a contract on 4663; it is not the SCOPL token", class: verified, observed_at: 2026-09-02T23:31:00Z, receipt_ids: [R-28], reproduction_ids: [REP-9], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "ScoplOrderPolicy 0xfA7a06b158eCf40232A4e1c976160be592391646 exists with verified source on 4663; the official eight-contract guide does not list it", class: verified, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-2, R-17], reproduction_ids: [REP-8], supersedes: null }
  - { id: CLM-26, field: taxonomy.mechanism-tag, value: "Controlled tags used: amm, orderbook, fee-routing, vault. Trade page titles an orderbook DEX; the on-chain machine is one-tick Uniswap CL, not a matching engine", class: inference, observed_at: 2026-09-03T00:05:00Z, receipt_ids: [R-1, R-29], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: taxonomy.secondary-leaf, value: yield/lp-manager, class: inference, observed_at: 2026-09-03T00:05:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: account.@scopl_live.official, value: "Official X: token constructor socials twitter https://x.com/scopl_live; profile @scopl_live bio lists 0xaA40e79E…", class: verified, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-29, field: control.privileged-role, value: "V3/V4 manager ABI from the public API includes owner-only setFeeConfiguration, setDiscountTier, setFeeSchedule, pause/executionPause and V4 allowedHooks. Guardian pause is described in the audit for distributor and buyback vault; those roles were not eth_called this pass.", class: claim, observed_at: 2026-09-02T23:22:00Z, receipt_ids: [R-4, R-19], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: activity.status
    claim_ids: [CLM-16, CLM-17]
    material_effect: "Official X still describes V2 as almost here / around the corner while the guide, API and explorer show the named V2 managers already executing thousands of transactions on 4663"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Account posts V2 almost here, Discord and Telegram"
    summary: "@scopl_live said V2 is almost here and posted Discord invite cBBN3WWATU plus Telegram."
    occurred_at: 2026-09-02T22:00:56Z
    observed_at: 2026-09-02T23:05:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-2
    type: company
    title: "Account posts V2 loading bar at 98.7 percent"
    summary: "@scopl_live posted a V2 loading graphic labelled 98.7 percent."
    occurred_at: 2026-09-01T14:30:14Z
    observed_at: 2026-09-02T23:05:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-3
    type: company
    title: "Competition closed; account posts $1.16M volume"
    summary: "@scopl_live posted $1,165,820 volume, 2,216 trades, 54 traders and on-chain reward txs."
    occurred_at: 2026-08-31T23:02:17Z
    observed_at: 2026-09-02T23:05:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-4
    type: company
    title: "Account posts SpyWolf V2 audit with no major findings"
    summary: "@scopl_live linked spywolf.co/audits/SCOPL_Audit.pdf and said V2 is around the corner."
    occurred_at: 2026-08-30T21:43:06Z
    observed_at: 2026-09-02T23:05:00Z
    affected_fields: [security.audit, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-5
    type: risk
    title: "Third-party holder-portal posts name cryptolot.lol"
    summary: "@fomokidpump_gew posted a cryptolot.lol claim URL with the official SCOPL token address."
    occurred_at: 2026-08-30T20:44:28Z
    observed_at: 2026-09-02T23:08:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-26]
  - id: EVT-6
    type: company
    title: "Account posts orders as concentrated-liquidity positions"
    summary: "@scopl_live said each order is a concentrated-liquidity position; fills pay pool fees."
    occurred_at: 2026-08-29T19:07:51Z
    observed_at: 2026-09-02T23:05:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-7
    type: onchain
    title: "SCOPL token created through Pons V2 launchAndBuy"
    summary: "PonsV2LaunchAndBuy created PonsV2LauncherToken scopl.live/SCOPL in tx 0xf0a88e54…"
    occurred_at: 2026-08-16T13:00:02Z
    observed_at: 2026-09-02T23:20:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8]

receipts:
  - { id: R-1, publisher: SCOPL, title: "scopl.live homepage", url: "https://scopl.live", published_at: null, accessed_at: 2026-09-02T23:10:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-6, CLM-19, CLM-26], excerpt: "SCOPL | Yield-Bearing Limit Orders & LP Management. Fully on-chain · Non-custodial · Robinhood Chain. SCOPL turns your target price into on-chain liquidity. Your order can generate pool fees as it fills, while you stay in control. Launch app /trade." }
  - { id: R-2, publisher: SCOPL, title: "SCOPL Guide: eight live contracts", url: "https://scopl.live/guide", published_at: null, accessed_at: 2026-09-02T23:14:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-9, CLM-10, CLM-11, CLM-16, CLM-25], excerpt: "Eight contracts behind the actions. ScoplFeeRouter 0x7d3ea31b… ScoplReferralRewards 0x4eE310BC… ScoplRevenueDistributor 0x0A552810… ScoplBuybackVault 0x885C479c… ScoplRouterSwapAdapter 0x168567e0… ScoplLimitOrderManager V3 0xf4badBc5… ScoplV4LimitOrderManager 0xcdD1E3BC… ScoplZapRouter 0x34BE2975… Revenue 30/50/20." }
  - { id: R-3, publisher: SCOPL, title: "Why Yield-Bearing Limit Orders?", url: "https://scopl.live/docs/introduction/why-scopl.html", published_at: "2026-09-01T22:01:00Z", accessed_at: 2026-09-02T23:12:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-27], excerpt: "Traditional limit orders wait in an order book. SCOPL orders are liquidity positions. While market price moves through the selected range, the position participates in pool swaps and may generate LP fees." }
  - { id: R-4, publisher: SCOPL, title: "limit-orders config API v1.1.0", url: "https://scopl.live/api/v1/limit-orders/config", published_at: null, accessed_at: 2026-09-02T23:22:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-8, CLM-9, CLM-10, CLM-16, CLM-29], excerpt: "chain.id 4663 Robinhood Chain. protocol.feeModes free value 0 protocolFeeBps 0 lpFees routed-to-protocol; rewards value 1. v3.manager 0xf4badBc5bea19E94f61084172f7b68383166CDd7. v4.manager 0xcdD1E3BC873e5Ff7cA974b7212D6031fe853Cd42." }
  - { id: R-5, publisher: "X / @scopl_live", title: "@scopl_live profile", url: "https://x.com/scopl_live", published_at: null, accessed_at: 2026-09-02T23:05:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-28], excerpt: "SCOPL - @scopl_live. Bio: Yield-bearing limit orders on Robinhood. 0xaA40e79E987517f7462bF79315B8A118799B04E3." }
  - { id: R-6, publisher: Blockscout, title: "Token 0xaA40e79E…", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xaA40e79E987517f7462bF79315B8A118799B04E3", published_at: null, accessed_at: 2026-09-02T23:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-18, CLM-20], excerpt: "address_hash 0xaA40e79E987517f7462bF79315B8A118799B04E3 name scopl.live symbol SCOPL decimals 18 type ERC-20 holders_count 1342 total_supply 1000000000000000000000000000." }
  - { id: R-7, publisher: Blockscout, title: "Verified source PonsV2LauncherToken", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0xaA40e79E987517f7462bF79315B8A118799B04E3", published_at: null, accessed_at: 2026-09-02T23:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-15, CLM-18, CLM-28], excerpt: "file_path contracts/src/v2/PonsV2LauncherToken.sol is_verified true name PonsV2LauncherToken. Constructor socials twitter https://x.com/scopl_live telegram https://t.me/scopl_live. deployer 0xcb484494… curve 0x72042Cd0… launchFactory 0x7eD598Bc… supply 1e27." }
  - { id: R-8, publisher: Blockscout, title: "Creation tx 0xf0a88e54… launchAndBuy", url: "https://robinhoodchain.blockscout.com/tx/0xf0a88e547b5905758865e6b8545d470bd1df94f09b8c18ade97dab9a43d02b07", published_at: "2026-08-16T13:00:02Z", accessed_at: 2026-09-02T23:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-15, EVT-7], excerpt: "timestamp 2026-08-16T13:00:02Z from 0xcb484494… to PonsV2LaunchAndBuy 0xe33E9E47… method launchAndBuy name scopl.live symbol SCOPL pairToken 0x000…000 recipient 0xcb484494…. Token mint to PonsV2BondingCurve 0x72042Cd0…." }
  - { id: R-9, publisher: Blockscout, title: "ScoplLimitOrderManager 0xf4badBc5…", url: "https://robinhoodchain.blockscout.com/address/0xf4badBc5bea19E94f61084172f7b68383166CDd7", published_at: null, accessed_at: 2026-09-02T23:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-8, CLM-13, CLM-16], excerpt: "hash 0xf4badBc5bea19E94f61084172f7b68383166CDd7 is_contract true is_verified true name ScoplLimitOrderManager creator 0x7F4a8ff98B2b2996dC96D95A358Ecf9f7473b397 creation_transaction_hash 0xf5921c63…." }
  - { id: R-10, publisher: Blockscout, title: "ScoplV4LimitOrderManager 0xcdD1E3BC…", url: "https://robinhoodchain.blockscout.com/address/0xcdD1E3BC873e5Ff7cA974b7212D6031fe853Cd42", published_at: null, accessed_at: 2026-09-02T23:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-9, CLM-13, CLM-16], excerpt: "hash 0xcdD1E3BC873e5Ff7cA974b7212D6031fe853Cd42 is_contract true is_verified true name ScoplV4LimitOrderManager creator 0x7F4a8ff9… creation_transaction_hash 0x499a26fa…." }
  - { id: R-11, publisher: Blockscout, title: "ScoplFeeRouter 0x7d3ea31b…", url: "https://robinhoodchain.blockscout.com/address/0x7d3ea31b89804d7Dd755781d56eab7128A8b4D48", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "is_contract true is_verified true name ScoplFeeRouter creator 0x7F4a8ff9…." }
  - { id: R-12, publisher: Blockscout, title: "ScoplReferralRewards 0x4eE310BC…", url: "https://robinhoodchain.blockscout.com/address/0x4eE310BCB577afB4beEcDA9422764B7A8E4e04a3", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "is_contract true is_verified true name ScoplReferralRewards creator 0x7F4a8ff9…." }
  - { id: R-13, publisher: Blockscout, title: "ScoplRevenueDistributor 0x0A552810…", url: "https://robinhoodchain.blockscout.com/address/0x0A552810F73892216Ae755A027D4AD3efdE3Ca87", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "is_contract true is_verified true name ScoplRevenueDistributor creator 0x7F4a8ff9…." }
  - { id: R-14, publisher: Blockscout, title: "ScoplBuybackVault 0x885C479c…", url: "https://robinhoodchain.blockscout.com/address/0x885C479cD30d02f7a7a09dC785b577B23ee27a00", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "is_contract true is_verified true name ScoplBuybackVault creator 0x7F4a8ff9…." }
  - { id: R-15, publisher: Blockscout, title: "ScoplRouterSwapAdapter 0x168567e0…", url: "https://robinhoodchain.blockscout.com/address/0x168567e09A4835D80589BCDE3F1dA5c930D5d9e7", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "is_contract true is_verified true name ScoplRouterSwapAdapter creator 0x7F4a8ff9…." }
  - { id: R-16, publisher: Blockscout, title: "ScoplZapRouter 0x34BE2975…", url: "https://robinhoodchain.blockscout.com/address/0x34BE29754d2538B31B556A7d2253a98917468c49", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-27], excerpt: "is_contract true is_verified true name ScoplZapRouter creator 0x7F4a8ff9…." }
  - { id: R-17, publisher: Blockscout, title: "ScoplOrderPolicy 0xfA7a06b1…", url: "https://robinhoodchain.blockscout.com/address/0xfA7a06b158eCf40232A4e1c976160be592391646", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "is_contract true is_verified true name ScoplOrderPolicy creator 0x7F4a8ff9… creation_transaction_hash 0x8a45e4ef…." }
  - { id: R-18, publisher: DexScreener, title: "SCOPL token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0xaA40e79E987517f7462bF79315B8A118799B04E3", published_at: null, accessed_at: 2026-09-02T23:25:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-5, CLM-20], excerpt: "chainId robinhood dexId uniswap labels v4 pairAddress 0x8651473123a804b0967bf2f9d1ad24c5d7078f6946e19c77f060503695201328 SCOPL/ETH liquidity.usd 144283.84 volume.h24 220293.98 marketCap 913350 websites https://scopl.live socials x.com/scopl_live t.me/scopl_live." }
  - { id: R-19, publisher: SpyWolf, title: "SCOPL Security Audit Report 30 Aug 2026", url: "https://spywolf.co/audits/SCOPL_Audit.pdf", published_at: "2026-08-30T17:14:00Z", accessed_at: 2026-09-02T23:18:00Z, kind: audit, authority: independent, authenticity: confirmed, supports: [CLM-11, CLM-12, CLM-13, CLM-14, CLM-25, CLM-29], excerpt: "Completed Aug 30 2026. Chain ID 4663. Token 0xaA40e79E…. Nine production contracts named including ScoplOrderPolicy, ScoplLimitOrderManager, ScoplV4LimitOrderManager, ScoplRevenueDistributor 30/50/20, ScoplBuybackVault. No Critical or High. Two-step ownership; intended production owner is a governance Safe. Protocol already live." }
  - { id: R-20, publisher: "X / @scopl_live", title: "SCOPL V2 is almost here", url: "https://x.com/scopl_live/status/2095270779382362436", published_at: "2026-09-02T22:00:56Z", accessed_at: 2026-09-02T23:05:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-17, EVT-1], excerpt: "SCOPL V2 is almost here. Ahead of the launch, we’re expanding the places where the SCOPL community can connect. Discord https://discord.com/invite/cBBN3WWATU Telegram. A lot has been built for V2. We’re almost ready to open the doors." }
  - { id: R-21, publisher: "X / @scopl_live", title: "SCOPL V2 Loading 98.7%", url: "https://x.com/scopl_live/status/2094794968749514953", published_at: "2026-09-01T14:30:14Z", accessed_at: 2026-09-02T23:05:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "SCOPL V2 Loading... 98.7%" }
  - { id: R-22, publisher: "X / @scopl_live", title: "Competition wrap $1,165,820 volume", url: "https://x.com/scopl_live/status/2094561440090730594", published_at: "2026-08-31T23:02:17Z", accessed_at: 2026-09-02T23:05:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-17, EVT-3], excerpt: "SCOPL closed the competition with: $1,165,820 executed volume 2,216 executed trades 54 traders. All Top 10 winners have received their rewards. SCOPL V2 is next." }
  - { id: R-23, publisher: "X / @scopl_live", title: "$1,000,000 volume traded", url: "https://x.com/scopl_live/status/2094473467991335186", published_at: "2026-08-31T17:12:42Z", accessed_at: 2026-09-02T23:05:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "We just passed $1,000,000 volume traded. Over 2.2K orders filled without a single issue. V1 Stress Testing completed. V2 Loading..." }
  - { id: R-24, publisher: "X / @scopl_live", title: "SCOPL V2 has been audited", url: "https://x.com/scopl_live/status/2094179128669044742", published_at: "2026-08-30T21:43:06Z", accessed_at: 2026-09-02T23:05:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-12, CLM-17, EVT-4], excerpt: "SCOPL V2 has been audited. No major or critical findings across 9 fully custom contracts. Full report: https://spywolf.co/audits/SCOPL_Audit.pdf V2 is right around the corner." }
  - { id: R-25, publisher: "X / @scopl_live", title: "Every SCOPL order is a CL position", url: "https://x.com/scopl_live/status/2093777669238259791", published_at: "2026-08-29T19:07:51Z", accessed_at: 2026-09-02T23:05:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, EVT-6], excerpt: "Every SCOPL order is an actual concentrated liquidity position, so when trades cross it, it generates fees from real trading activity. Those fees are shared between the user and the protocol. No emissions." }
  - { id: R-26, publisher: "X / @fomokidpump_gew", title: "cryptolot.lol holder portal post", url: "https://x.com/fomokidpump_gew/status/2094164369341042876", published_at: "2026-08-30T20:44:28Z", accessed_at: 2026-09-02T23:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23, EVT-5], excerpt: "$SCOPL holders have a portal live. CA: 0xaA40e79E987517f7462bF79315B8A118799B04E3 https://crypto.cryptolot.lol/claim?contract=0xaA40e79E987517f7462bF79315B8A118799B04E3&cfg=checkdrop&pid=dXo8S" }
  - { id: R-27, publisher: DefiLlama, title: "protocol/scopl", url: "https://api.llama.fi/protocol/scopl", published_at: null, accessed_at: 2026-09-02T23:26:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-22], excerpt: "Protocol not found" }
  - { id: R-28, publisher: Blockscout, title: "0x07f5B682… on 4663", url: "https://robinhoodchain.blockscout.com/address/0x07f5b6823751c2e2cd4560f28af75ff887102241", published_at: null, accessed_at: 2026-09-02T23:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-24], excerpt: "hash 0x07f5B6823751C2E2cd4560f28aF75ff887102241 is_contract false." }
  - { id: R-29, publisher: SCOPL, title: "Limit Orders overview", url: "https://scopl.live/docs/limit-orders/overview.html", published_at: "2026-09-01T22:01:00Z", accessed_at: 2026-09-02T23:12:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-10, CLM-26], excerpt: "A SCOPL limit order is a one-tick-spacing, single-sided V3 or V4 liquidity position. Free mode routes these generated LP fees to SCOPL and charges no output protocol fee. Rewards mode leaves generated LP fees with the user and charges the user's current fee tier on desired output." }
  - { id: R-30, publisher: Blockscout, title: "V3 manager counters", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xf4badBc5bea19E94f61084172f7b68383166CDd7/counters", published_at: null, accessed_at: 2026-09-02T23:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "transactions_count 8102 token_transfers_count 10568" }
  - { id: R-31, publisher: Blockscout, title: "V4 manager counters", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xcdD1E3BC873e5Ff7cA974b7212D6031fe853Cd42/counters", published_at: null, accessed_at: 2026-09-02T23:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "transactions_count 1644 token_transfers_count 1930" }
  - { id: R-32, publisher: Blockscout, title: "V3 manager creation tx", url: "https://robinhoodchain.blockscout.com/tx/0xf5921c63ef2ffc5c3aae6c6365dafc7fd283f36f13ceec599da47f314b263fc1", published_at: "2026-08-13T14:49:54Z", accessed_at: 2026-09-02T23:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-14], excerpt: "timestamp 2026-08-13T14:49:54Z from 0x7F4a8ff98B2b2996dC96D95A358Ecf9f7473b397 created_contract ScoplLimitOrderManager 0xf4badBc5…. Constructor arg 0 is 0x7F4a8ff9…; ABI includes owner, transferOwnership, acceptOwnership." }
  - { id: R-33, publisher: SCOPL, title: "Pool explorer rankings", url: "https://scopl.live/pools", published_at: null, accessed_at: 2026-09-02T23:15:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-20], excerpt: "TVL $156.7M Total liquidity. 24h volume $2.01B Across tracked pools. Rankings list WETH/USDG, NVDA/USDG and other chain pools, not SCOPL protocol TVL." }
  - { id: R-34, publisher: Blockscout, title: "Deployer EOA 0x7F4a8ff9…", url: "https://robinhoodchain.blockscout.com/address/0x7F4a8ff98B2b2996dC96D95A358Ecf9f7473b397", published_at: null, accessed_at: 2026-09-02T23:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0x7F4a8ff98B2b2996dC96D95A358Ecf9f7473b397 is_contract false." }
  - { id: R-35, publisher: Blockscout, title: "PonsV2LaunchFactory 0x7eD598Bc…", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-02T23:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "is_contract true is_verified true name PonsV2LaunchFactory." }

gaps:
  - { priority: P0, question: "What address does owner() return today on the live V3/V4 managers, distributor and buyback vault — still EOA 0x7F4a8ff9… or a Safe?", checked: "constructor bytecode of 0xf4badBc5… and 0xcdD1E3BC… names 0x7F4a8ff9…; rpc.mainnet.chain.robinhood.com eth_call 403; Blockscout /api module=proxy unknown, 2026-09-02", next: "eth_call owner() and pendingOwner() on each guide contract once RPC or a working explorer proxy is available" }
  - { priority: P0, question: "Is ScoplOrderPolicy 0xfA7a06b1… in the live order path, and why does the eight-contract guide omit it?", checked: "guide 2026-09-02 lists eight addresses; Blockscout search finds ScoplOrderPolicy verified; SpyWolf names it as the shared attribution layer", next: "read verified manager constructor immutables for an orderPolicy address" }
  - { priority: P1, question: "Which of the extra ScoplLimitOrderManager / ScoplV4LimitOrderManager clones still hold position NFTs?", checked: "Blockscout search 2026-09-02 returned four V3 managers (0x5EC1c168…, 0xf4badBc5…, 0xEce07C47…, 0x7eAC87dA…) and five V4 managers; API/guide name 0xf4badBc5… and 0xcdD1E3BC… only", next: "compare nextOrderId and NFT approvals on the extra clones" }
  - { priority: P1, question: "Is there a public source repository whose commit matches the verified bytecode?", checked: "scopl.live, guide, docs, X bio, constructor socials, GitHub search scopl 2026-09-02; no official repo", next: "ask the project in public for the repo URL and record the answer as a claim" }
  - { priority: P2, question: "Does DefiLlama have a Robinhood Chain slice for SCOPL under another slug?", checked: "api.llama.fi/protocol/scopl Protocol not found 2026-09-02", next: "search Llama chain=Robinhood for SCOPL / scopl.live" }

---

# SCOPL — research packet

## What it is

SCOPL is a non-custodial Uniswap V3/V4 one-tick limit-order layer: a user sets a target price, the order is minted as a concentrated-liquidity position NFT that stays in that wallet, and fills pay pool fees. The app at scopl.live/trade places those orders on Robinhood Chain. $SCOPL is a Pons V2-launched token; @scopl_live runs the site.

Themes: nft, hook, rwa, tooling

## Why it matters

Robinhood Chain tokenised-stock and meme pools still clear as Uniswap concentrated liquidity. SCOPL turns a resting limit into that same inventory, so a USDG→SPCX or ETH→meme target can earn pool fees while it waits instead of sitting in an off-chain book.

The live V3 and V4 managers already show thousands of transactions, which means fills, cancels and keeper execution sit in the swap path of whatever pool the user picked, including hooked v4 pools the manager allowlists.

## What could go wrong

The position NFT is only as safe as the manager's approval and execute/cancel path. Owner-set fee tiers, pause flags and V4 hook allowlists can change order economics or block execution without a timelock on the verified source read this pass.

A user who follows a third-party "holder portal" URL that wraps the official token address is leaving the scopl.live origin. Older manager clones remain on chain beside the addresses the guide names.

## Product and mechanics

A SCOPL limit order is a one-tick-spacing, single-sided Uniswap V3 or V4 liquidity position. The user chooses tokenIn, amount, tokenOut, a human price (tokenOut per tokenIn) and Free or Rewards mode; the API snaps that price to the nearest executable tick range and returns unsigned calldata. The wallet holds the position NFT; SCOPL does not take custody of principal. [claim R-1 R-2 R-3 R-29]

Free mode routes generated LP fees to the protocol and charges 0% on output. Rewards mode leaves LP fees with the user and charges a protocol fee that the guide states as 1.5% below 50k SCOPL, then 1.2% / 0.75% / 0.3% at 50k / 250k / 1M. Free mode is described as referral-gated. A small ETH reserve pays keeper gas and is returned on cancel. [claim R-2 R-4 R-29]

Collected interface fees are split 30% referral, 50% buyback, 20% operations; with no referrer the referral share moves to operations. Buyback assets accumulate in ScoplBuybackVault. The guide also publishes a pool explorer, zap-in router and LP fee-claim router (5% on claimed earnings, 0% with 1,000+ SCOPL). [claim R-2]

The public config API on chain 4663 names ScoplLimitOrderManager 0xf4badBc5… for V3 and ScoplV4LimitOrderManager 0xcdD1E3BC… for V4, matching the guide. [verified R-2 R-4 R-9 R-10]

## Control and security

Every guide contract checked this pass was created by EOA 0x7F4a8ff98B2b2996dC96D95A358Ecf9f7473b397, which is not a contract. The V3 manager constructor sets that address as the Ownable owner. Live owner() was not eth_called (RPC 403). [inference R-9 R-10 R-32 R-34]

Verified manager source and the API ABI expose two-step transferOwnership / acceptOwnership, owner-only fee schedule setters, pause / executionPause, and V4 hook allowlisting. No timelock address appears on the guide. SpyWolf's 30 Aug V2 report states two-step ownership, an intended governance Safe, guardian pause on the distributor and buyback vault, and no Critical or High findings; it also says the suite was already live and not meant to be redeployed absent a major issue. [claim R-4 R-19 R-32]

$SCOPL itself is a PonsV2LauncherToken: immutable deployer/curve/factory references, ERC-20 burnable, no owner role on the token. [verified R-7 R-8]

## Team and provenance

The token constructor encodes twitter https://x.com/scopl_live and telegram https://t.me/scopl_live. The @scopl_live bio repeats the 4663 token address. No legal name, KYC artifact or official GitHub repository was listed on the site, guide, docs or X bio. The Pons launch deployer 0xcb484494… is a separate EOA from the SCOPL contract deployer 0x7F4a8ff9…. [claim R-5 R-7 R-8 R-34]

## Economics and activity

Blockscout reports 1,342 SCOPL holders and a 1e9 × 1e18 total supply as of this pass. [verified R-6]

The listed Uniswap v4 SCOPL/ETH pool 0x865147… (pair created 2026-08-18) showed liquidity.usd 144283.84, volume.h24 220293.98 and marketCap 913350. That is a pair slice, not protocol TVL. scopl.live/pools' $156.7M TVL figure ranks chain-wide Uniswap pools (WETH/USDG first), not SCOPL. DefiLlama has no scopl protocol row. [claim R-18 R-27 R-33]

The live V3 manager has 8,102 transactions; the live V4 manager has 1,644. @scopl_live posted competition figures of $1,165,820 executed volume, 2,216 trades and 54 traders on 2026-08-31; those numbers were not reproduced from the managers this pass. [verified R-30 R-31]

## Material risks

- Live owner() of the managers, distributor and buyback vault was not reproduced; constructor ownership is one EOA with no timelock in the source read. [inference R-32 R-34]
- Official X still describes V2 as almost here while the named V2 managers already execute on 4663. [disputed R-20 R-30]
- ScoplOrderPolicy is verified on chain and named in the audit but omitted from the eight-contract guide. [verified R-2 R-17]
- At least three additional ScoplLimitOrderManager and four additional ScoplV4LimitOrderManager contracts exist on 4663 beside the API addresses. [claim R-9]
- Third-party posts pointed at crypto.cryptolot.lol with the official token address; that host is not scopl.live. [claim R-26]
- Address 0x07f5B682… is not a contract on 4663. [verified R-28]
- No official source repository was located. [unknown]

## Verification passes

- Receipts: every URL above was opened on 2026-09-02 and its excerpt copied from the page or API JSON. [verified R-1 R-2 R-4 R-6 R-18 R-19]
- Numbers: holders are the Blockscout token field; volume, market cap and TVL are the DexScreener SCOPL/ETH v4 pair slice, not all-pairs and not the pool-explorer chain total. [claim R-6 R-18 R-33]
- Adversarial: the strongest contrary reading is that SCOPL is only a Pons-launched memecoin with a marketing site, or that V2 is still undeployed because X says "almost here". The verified PonsV2LauncherToken, the guide/API manager addresses with thousands of transactions, and the Uniswap v4 SCOPL/ETH pool argue against both. A weaker contrary reading is that the extra manager clones are the live product; the public API and guide name 0xf4badBc5… and 0xcdD1E3BC… only. [inference R-2 R-4 R-8 R-9 R-10 R-18]

## Operations log

- Read content/census.yaml scopl row (lifecycle announced), content/projects/scopl.yaml, content/pulled/scopl.yaml (token 0xaA40e79E…, Uniswap pairs, pulled_at 2026-09-02T21:05:36Z), content/feed/scopl.yaml, content/sources/scopl.yaml.
- Opened scopl.live, /trade, /guide, /pools, /docs/introduction/why-scopl.html, /docs/limit-orders/overview.html, /docs/security/protocol-safety-model.html, /api/v1/limit-orders/config.
- GET Blockscout address, token, counters, smart-contract and creation tx for 0xaA40e79E…; address pages for the eight guide contracts plus ScoplOrderPolicy and deployer EOA; search ScoplLimitOrderManager / ScoplV4LimitOrderManager / ScoplOrderPolicy.
- GET DexScreener latest/dex/tokens/0xaA40e79E…; GET api.llama.fi/protocol/scopl (not found).
- Opened SpyWolf PDF https://spywolf.co/audits/SCOPL_Audit.pdf.
- X keyword from:scopl_live Latest and cryptolot.lol SCOPL; X user search scopl_live.
- rpc.mainnet.chain.robinhood.com eth_getCode returned HTTP 403; Blockscout ?module=proxy eth_call returned Unknown module. Live owner() therefore not flipped from constructor.
- GitHub search q=scopl returned unrelated repos; no official SCOPL org.
- Time spent: one collector pass 2026-09-02T23:00Z–2026-09-03T00:15Z.
