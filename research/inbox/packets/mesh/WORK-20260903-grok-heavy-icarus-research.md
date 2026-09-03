---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: mesh
name: Mesh
packet_tier: seed
as_of: 2026-09-03T03:20:00Z
prior_packet: null
supersedes: null
owned_slugs: [mesh]
allowed_paths:
  - research/inbox/packets/mesh/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Mesh
  aliases: [MeshGateway, "MESH Gateway"]
  symbols: [MESH]
  entity_kind: tool
  chain_scope: multichain
  official_domain: https://meshgateway.co
  official_handle: "@MeshGateway"
  repository: https://github.com/meshgateway
  possible_matches:
    - slug: pons
      signals: [shared-deployer, other]
      contrary_signals:
        - "MESH creator_address_hash is Pons v2 launch deployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42; launchFactory() returns PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
        - "Pons is ponsfamily.com / @ponsdotfamily; Mesh is meshgateway.co / @MeshGateway"
        - "Keep both slugs; Pons is the launchpad, Mesh is the payments gateway"
    - slug: wire
      signals: [other]
      contrary_signals:
        - "Wire is wirebot.trade / @wirebotRH, a command layer that routes launches through Pons"
        - "Mesh is an HTTP 402 / x402 payment gateway with token 0x14641000A501bdc736116aBf84e6fCeA9B90A713"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Bankr is bankr.bot / @bankrbot, an agent runtime with its own Doppler/Airlock factory"
        - "Mesh does not mint tokens; it settles USDG/USDC per HTTP 402 call"
    - slug: agent-name-service
      signals: [other]
      contrary_signals:
        - "Census Agent Name Service is @RHAgentNS, a name registry lead"
        - "MeshIdentity is an ERC-8004 mint on the Mesh site; handle @MeshGateway, domain meshgateway.co"

classification:
  primary_leaf: tooling/machine-payments
  secondary_leaves: [agents/agent-identity]
  mechanism_tags: [agent, fee-routing, rwa, other]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Token 0x1464…A713 is a verified PonsV2LauncherToken on chain 4663 with launchFactory() = Pons v2 factory and a live Uniswap v4 MESH/ETH pool. Homepage and /status list 11,323 settlements and 480.66 USDG. Settlement tx 0x4eb7…a8eb calls x402ExactPermit2Proxy.settle and transfers 0.03 USDG. Epoch distributor contract and protocol-fee bps were not reproduced. Census lifecycle announced is stale. [R-1] [R-6] [R-8] [R-9] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-21, CLM-25], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-7], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-16, CLM-26], note: "" }

links:
  - { kind: site, url: "https://meshgateway.co", authenticity: confirmed }
  - { kind: docs, url: "https://docs.meshgateway.co/whitepaper", authenticity: confirmed }
  - { kind: app, url: "https://meshgateway.co/marketplace", authenticity: confirmed }
  - { kind: x, url: "https://x.com/MeshGateway", authenticity: confirmed }
  - { kind: github, url: "https://github.com/meshgateway", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/MeshCommunity", authenticity: unconfirmed }

deployments:
  - label: MESH token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x14641000A501bdc736116aBf84e6fCeA9B90A713"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-7, R-8]
  - label: PonsV2BondingCurve (MESH launch curve)
    role: other
    address:
      value: "0x8Bb3EDE48fE9d946aa6B5f953280cd681db22499"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-8]
  - label: MeshSplitterFactory
    role: factory
    address:
      value: "0x002565F730BEC9266Ae48D21E7eA0Efe8d597c09"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-11, R-22]
  - label: x402ExactPermit2Proxy (settlement path)
    role: router
    address:
      value: "0x402085c248EeA27D92E8b30b2C58ed07f9E20001"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-12, R-13]

metrics:
  - { kind: holders, value: 1063, currency: null, as_of: 2026-09-03T02:50:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x14641000a501bdc736116abf84e6fcea9b90a713 holders_count", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 162179.74, currency: USD, as_of: 2026-09-03T02:55:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x14641000a501bdc736116abf84e6fcea9b90a713 MESH/ETH Uniswap v4 pair volume.h24 (not the three USDG pairs)", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 423855, currency: USD, as_of: 2026-09-03T02:55:00Z, window: point, method: "DexScreener MESH/ETH Uniswap v4 pair marketCap", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 381954, currency: USD, as_of: 2026-09-03T03:00:00Z, window: point, method: "api.coingecko.com/api/v3/coins/mesh-gateway market_data.market_cap.usd", class: claim, receipt_ids: [R-21] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-8], result: "eth_blockNumber 0x329f266 (53080678). eth_getCode: token 3248 bytes, curve 10229, MeshSplitterFactory 4184, PonsV2LaunchFactory 24177, PonsV2LaunchAndBuy 4416, PonsV2LaunchDeployer 20906, deployer 0x8DF12b…d3b0 code 0x, splitter treasury 0x417909…237D code 0x, relayer 0xc23124…1dc3 code 0x. name() MESH Gateway, symbol() MESH, decimals 18, totalSupply 1e27. launchFactory() 0x7eD598…EC7e, curve() 0x8Bb3ED…2499, deployer() 0x8DF12b…d3b0. socials() twitter https://x.com/MeshGateway website https://meshgateway.co. splitter ponsFactory() 0x7eD598…EC7e, escrow() 0xd3AFEB…Ac9e, treasury() 0x417909…237D, splitterCount() 5." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-6, R-7, R-10, R-11, R-12, R-13], result: "Blockscout API v2: token PonsV2LauncherToken is_verified true is_fully_verified true file contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35 proxy_type null creator 0x3711ceA4…1A42 (PonsV2LaunchDeployer) tx 0x7496dee5…3f47 2026-08-19T16:37:35Z via PonsV2LaunchAndBuy.launchAndBuy; token name MESH Gateway symbol MESH holders 1063 supply 1e27. Curve PonsV2BondingCurve verified, same create tx. MeshSplitterFactory verified src/MeshSplitterFactory.sol 2026-08-27T15:57:52Z creator/treasury EOA 0x417909…237D. Tx 0x4eb7…a8eb 2026-09-01T16:23:48Z to x402ExactPermit2Proxy.settle; USDG 30000 (6 dp) from 0x210eCd…4850 to 0xbB818E…b5C9. Proxy verified src/x402ExactPermit2Proxy.sol is_fully_verified false; constructor Permit2 0x000000000022D473030F116dDEE9F6B43aC78BA3; creator 0x4e59b448…4956C." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-5], result: "meshgateway.co and /mesh list CA 0x1464…a713 and link docs.meshgateway.co/whitepaper. Token socials() and constructor twitter https://x.com/MeshGateway website https://meshgateway.co. @MeshGateway bio is The first MPP gateway on Robinhood Chain plus the same CA. GitHub user meshgateway blog https://meshgateway.co twitter_username meshgateway bio includes the CA." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-9, R-21], result: "DexScreener 4 Uniswap v4 pairs. MESH/ETH 0xda147dee…cbf6 priceUsd 0.0004996 liquidity_usd 64171.77 volume.h24 162179.74 fdv 464640 marketCap 423855 websites meshgateway.co docs.meshgateway.co github.com/meshgateway socials x.com/MeshGateway t.me/MeshCommunity. CoinGecko id mesh-gateway platforms.robinhood 0x14641000a501bdc736116abf84e6fcea9b90a713 market_cap.usd 381954 fdv 418707 total_volume.usd 185446 twitter MeshGateway homepage meshgateway.co." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "HTTP 402 / MPP gateway: agent signs a Permit2 witness transfer of USDG (Robinhood) or USDC (Base) to the merchant wallet; Mesh relayer broadcasts. Site: gateway verifies and never holds funds.", class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-3, R-12], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://meshgateway.co", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-2, R-5, R-8], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@MeshGateway", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-4, R-5, R-8], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x14641000A501bdc736116aBf84e6fCeA9B90A713", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-4, R-6, R-7, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-6, R-7, R-8, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: taxonomy.primary-leaf, value: tooling/machine-payments, class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: identity.repository, value: "https://github.com/meshgateway", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-8, field: identity.symbol, value: MESH, class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-6, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-3, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Hold at least 500,000 MESH; balances sampled every 3 minutes; daily USDG protocol-fee pool is swapped into a tokenized stock and paid pro-rata at 00:00 UTC with no claim. Bar was 1M MESH until the GME drop post.", class: claim, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-2, R-17, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: relationship, value: "MESH launched through Pons v2 (PonsV2LaunchAndBuy.launchAndBuy, launchFactory 0x7eD598…EC7e, pairToken 0x0 / ETH). Marketplace lists a Pons Launchpad merchant; status log includes a 0.03 USDG pons settlement.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-7, R-12, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "MESH holders_count 1063 at Blockscout token API 2026-09-03T02:50Z", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-6], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "MESH/ETH Uniswap v4 24h volume 162179.74 USD; liquidity 64171.77 USD; fdv 464640; marketCap 423855 (DexScreener, not the USDG pairs)", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "CoinGecko mesh-gateway market_cap.usd 381954 fdv 418707 total_volume.usd 185446", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-21], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-15, field: activity.status, value: "Homepage and /status: 11,323 on-chain settlements, 480.66 USDG all-time, 102 live storefronts, 18 unique payers on /status", class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: control.privileged-role, value: "MeshSplitterFactory treasury() and creator = EOA 0x41790911f33adABc8EFc3Ca693410c5988f9237D (no code). Token deployer() = EOA 0x8DF12b01c9a03C0A76Db42b040f54470Adead3b0 (no code). Relayer on sampled settle tx = EOA 0xc231248d8f821Cf5e03Dcc11A9258ff8596b1dc3 (no code). Token has no owner().", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-8, R-10, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL on meshgateway.co, /mesh, the whitepaper, or github.com/meshgateway this pass. @MeshGateway posted that mpp-client was scanned by @zauthinc.", class: unknown, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@MeshGateway.role", value: project, class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@MeshGateway.slug", value: mesh, class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.alias, value: "MESH Gateway", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-6, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x002565F730BEC9266Ae48D21E7eA0Efe8d597c09", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-10, R-11, R-22], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x402085c248EeA27D92E8b30b2C58ed07f9E20001", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-12, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0x8Bb3EDE48fE9d946aa6B5f953280cd681db22499", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-6, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-24, field: identity.alias, value: MeshGateway, class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: activity.status, value: "Tx 0x4eb723f8…a8eb 2026-09-01T16:23:48Z: x402ExactPermit2Proxy.settle; 0.03 USDG from 0x210eCd…4850 to 0xbB818E…b5C9; /status labels merchant pons", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-12, R-14], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "MeshEcosystem: Pons v2 agent tokens plug in; 10% of creator fees to the MESH earn pool via MeshSplitterFactory. Post: 10% can never be raised, claiming permissionless, leave any time. splitterCount() = 5.", class: claim, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-10, R-22], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-27, field: product.mechanism, value: "MeshIdentity: site says every agent mints an ERC-8004 identity on Robinhood Chain and can be scored 0-100 in an ERC-8004 Reputation Registry, permissionless, no self-rating. Registry addresses not on the homepage this pass.", class: claim, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-1, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@MeshGateway.note", value: "Bio lists CA 0x14641000a501bdc736116abf84e6fcea9b90a713. Token socials() and github.com/meshgateway point at meshgateway.co.", class: claim, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-4, R-5, R-8], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-13, CLM-14]
    material_effect: "DexScreener MESH/ETH marketCap 423855 USD vs CoinGecko market_cap.usd 381954; display market cap would differ"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Epoch 11 paid 0.7968 RBLX to 183 MESH holders"
    summary: "33.45 USDG in fees swapped into 0.7968 RBLX and paid to 183 wallets holding at least 500K MESH."
    occurred_at: 2026-09-03T02:38:00Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [product.mechanism, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-2
    type: company
    title: "Mesh posts agentic commerce starts with Mesh"
    summary: "@MeshGateway quoted @RobinhoodCrypto and posted that agentic commerce on Robinhood starts with Mesh."
    occurred_at: 2026-09-02T17:22:45Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-3
    type: company
    title: "Mesh posts ERC-8004 identity and reputation"
    summary: "Every agent on Mesh mints an ERC-8004 identity; counterparties score it 0-100 in a reputation registry."
    occurred_at: 2026-09-02T16:05:00Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [product.mechanism, taxonomy.secondary-leaf]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-4
    type: company
    title: "Mesh posts 11,000 on-chain settlements"
    summary: "480.66 USDG paid by agents across 45 merchants and 123 endpoints through x402, settled gasless."
    occurred_at: 2026-09-02T12:01:46Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: company
    title: "GME drop settled; MESH earn bar cut to 500K"
    summary: "100 USDG pool swapped into 5.272 tokenized GME for 147 wallets; bar 1M to 500K MESH, no hold time."
    occurred_at: 2026-09-02T06:37:05Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [product.mechanism, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-6
    type: onchain
    title: "Pons merchant call settled 0.03 USDG on-chain"
    summary: "x402ExactPermit2Proxy.settle moved 0.03 USDG; /status labels the merchant pons at 2026-09-01T16:23Z."
    occurred_at: 2026-09-01T16:23:48Z
    observed_at: 2026-09-03T02:55:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12, R-14]
  - id: EVT-7
    type: company
    title: "MeshGateway x402 facilitator adds Base USDC"
    summary: "Same API settles x402 on Robinhood (USDG) and Base (USDC); payer is gasless. Facilitator URL posted."
    occurred_at: 2026-09-01T15:10:42Z
    observed_at: 2026-09-03T03:10:00Z
    affected_fields: [taxonomy.chain-scope, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-8
    type: onchain
    title: "MESH token launched via Pons v2 launchAndBuy"
    summary: "PonsV2LaunchAndBuy created MESH Gateway / MESH at 2026-08-19T16:37:35Z; socials X and meshgateway.co."
    occurred_at: 2026-08-19T16:37:35Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [deployment.address, lifecycle, identity.domain]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-7]

receipts:
  - { id: R-1, publisher: MeshGateway, title: "MeshGateway homepage", url: "https://meshgateway.co/", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-6, CLM-7, CLM-9, CLM-15, CLM-24, CLM-27], excerpt: "The payment gateway for machines. The first MPP gateway on Robinhood Chain. Agents pay in USDG, builders create on top of MPP. Settled 11,323 on-chain settlements. Volume 480.66 USDG settled all-time. Merchants 102 live storefronts. USDG has no native signed-transfer support… x402 rail on Permit2. CA 0x1464…a713. Marketplace lists Pons Launchpad." }
  - { id: R-2, publisher: MeshGateway, title: "$MESH token page", url: "https://meshgateway.co/mesh", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-8, CLM-10], excerpt: "Network token · Live on Robinhood Chain. The only official $MESH contract is the one shown on this page, on Robinhood Chain. Ticker $MESH. Max supply 1,000,000,000. Contract 0x1464…a713. Hold 500,000 $MESH and each day's protocol fees are swapped into a tokenized stock. Payments stay in USDC on Base, USDG on Robinhood Chain." }
  - { id: R-3, publisher: MeshGateway, title: "Whitepaper", url: "https://docs.meshgateway.co/whitepaper", published_at: 2026-08-01T00:00:00Z, accessed_at: 2026-09-03T03:05:00Z, kind: whitepaper, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-9], excerpt: "v0.1 · August 2026. MeshGateway: a non-custodial payment gateway for machine-to-machine commerce over HTTP 402. Buyers pay per request with signed stablecoin authorizations; funds settle directly to the merchant's wallet on Base or Robinhood Chain. The gateway verifies and forwards payments but can never hold or redirect them. Compatible with x402 clients." }
  - { id: R-4, publisher: "@MeshGateway", title: "MeshGateway profile", url: "https://x.com/MeshGateway", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-18, CLM-19, CLM-24, CLM-28], excerpt: "Display name Mesh, handle @MeshGateway. Bio: The first MPP gateway on Robinhood Chain 0x14641000a501bdc736116abf84e6fcea9b90a713. Followers 905. User id 2089328955258261504." }
  - { id: R-5, publisher: GitHub, title: "meshgateway user", url: "https://github.com/meshgateway", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-7, CLM-28], excerpt: "login meshgateway name MESH Gateway type User blog https://meshgateway.co twitter_username meshgateway bio The machine marketplace for Robinhood Chain 0x14641000a501bdc736116abf84e6fcea9b90a713 public_repos 8. Repos include mpp-client, mpp-server, wallet, x402, mesh-ecosystem-contracts, x402scan." }
  - { id: R-6, publisher: Blockscout, title: "Address 0x1464…A713 PonsV2LauncherToken", url: "https://robinhoodchain.blockscout.com/address/0x14641000A501bdc736116aBf84e6fCeA9B90A713", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-12, CLM-20, CLM-23, EVT-8], excerpt: "hash 0x14641000A501bdc736116aBf84e6fCeA9B90A713 name PonsV2LauncherToken is_contract true is_verified true proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x7496dee5…3f47. token name MESH Gateway symbol MESH decimals 18 holders_count 1063 total_supply 1e27 type ERC-20." }
  - { id: R-7, publisher: Blockscout, title: "MESH create tx 0x7496dee5…", url: "https://robinhoodchain.blockscout.com/tx/0x7496dee5db6198feeb234d88b13f8ff27295a714f6d8d6fc0c9f153e5cf83f47", published_at: 2026-08-19T16:37:35Z, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-11, EVT-8], excerpt: "timestamp 2026-08-19T16:37:35Z status ok from 0x8DF12b01c9a03C0A76Db42b040f54470Adead3b0 to PonsV2LaunchAndBuy 0xe33E9E47…2948 method launchAndBuy block 40707787. params name MESH Gateway symbol MESH twitter https://x.com/MeshGateway website https://meshgateway.co pairToken 0x0 quoteIn 0.13036 ETH recipient the same from address." }
  - { id: R-8, publisher: Robinhood Chain RPC, title: "eth_getCode, name, socials, launchFactory, splitter views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-8, CLM-16, CLM-20, CLM-23, CLM-28], excerpt: "eth_blockNumber 0x329f266 (53080678). Token code 3248 bytes. name MESH Gateway symbol MESH totalSupply 1e27. launchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e curve 0x8Bb3EDE48fE9d946aa6B5f953280cd681db22499 deployer 0x8DF12b01…d3b0. socials twitter https://x.com/MeshGateway website https://meshgateway.co. splitterCount 5 treasury 0x417909…237D." }
  - { id: R-9, publisher: DexScreener, title: "MESH token pairs on robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x14641000a501bdc736116abf84e6fcea9b90a713", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13], excerpt: "4 uniswap v4 pairs. MESH/ETH pair 0xda147dee…cbf6 priceUsd 0.0004996 liquidity.usd 64171.77 volume.h24 162179.74 fdv 464640 marketCap 423855 created 2026-08-20T09:32:40Z. info.websites meshgateway.co docs.meshgateway.co github.com/meshgateway socials x.com/MeshGateway t.me/MeshCommunity." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x0025…7c09 MeshSplitterFactory", url: "https://robinhoodchain.blockscout.com/address/0x002565F730BEC9266Ae48D21E7eA0Efe8d597c09", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-21, CLM-26], excerpt: "hash 0x002565F730BEC9266Ae48D21E7eA0Efe8d597c09 name MeshSplitterFactory is_contract true is_verified true file_path src/MeshSplitterFactory.sol compiler v0.8.30 verified_at 2026-08-27T15:58:27Z creator 0x41790911f33adABc8EFc3Ca693410c5988f9237D. Constructor ponsFactory 0x7eD598…EC7e escrow 0xd3AFEB…Ac9e treasury 0x417909…237D." }
  - { id: R-11, publisher: Blockscout, title: "MeshSplitterFactory create tx", url: "https://robinhoodchain.blockscout.com/tx/0xba2265c864ed1c6c563be4d408b526592b389cf151ddb65b52dab33bf30f6026", published_at: 2026-08-27T15:57:52Z, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "timestamp 2026-08-27T15:57:52Z status ok from 0x41790911f33adABc8EFc3Ca693410c5988f9237D created_contract 0x002565F730BEC9266Ae48D21E7eA0Efe8d597c09 block 47567264." }
  - { id: R-12, publisher: Blockscout, title: "Pons merchant settle tx 0x4eb7…a8eb", url: "https://robinhoodchain.blockscout.com/tx/0x4eb723f82e134cf1fb8539d8ddd2353850ce72b6aa9d9ae241fc114ce158a8eb", published_at: 2026-09-01T16:23:48Z, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-11, CLM-22, CLM-25, EVT-6], excerpt: "timestamp 2026-09-01T16:23:48Z status ok from 0xc231248d8f821Cf5e03Dcc11A9258ff8596b1dc3 to x402ExactPermit2Proxy 0x402085c2…0001 method settle block 51859351. ERC-20 USDG 0x5fc5360D…1d168 value 30000 (6 decimals = 0.03) from 0x210eCd8B…4850 to 0xbB818E97…b5C9." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x4020…0001 x402ExactPermit2Proxy", url: "https://robinhoodchain.blockscout.com/address/0x402085c248EeA27D92E8b30b2C58ed07f9E20001", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x402085c248EeA27D92E8b30b2C58ed07f9E20001 name x402ExactPermit2Proxy is_contract true is_verified true is_fully_verified false file_path src/x402ExactPermit2Proxy.sol compiler v0.8.28 verified_at 2026-08-11T11:25:49Z creator 0x4e59b44847b379578588920cA78FbF26c0B4956C. Constructor _permit2 0x000000000022D473030F116dDEE9F6B43aC78BA3." }
  - { id: R-14, publisher: MeshGateway, title: "x402 status", url: "https://meshgateway.co/status", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-11, CLM-15, CLM-25, EVT-6], excerpt: "Settled 11,323 on-chain settlements. Volume 480.66 USDG settled all-time. Unique payers 18 distinct wallets. Recent settlements include 2026-09-01 16:23 Gateway Robinhood Chain 0.03 USDG merchant pons tx 0x4eb7…a8eb." }
  - { id: R-15, publisher: "@MeshGateway", title: "Epoch settled. Drop no. 11 is live.", url: "https://x.com/MeshGateway/status/2095340505693614372", published_at: 2026-09-03T02:38:00Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Epoch settled. Drop no. 11 is live. 33.45 USDG in fees swapped into 0.7968 $RBLX and paid straight to 183 $MESH holders. No claiming, it just lands in your wallet. Hold 500K $MESH, get tomorrow's drop." }
  - { id: R-16, publisher: "@MeshGateway", title: "Mesh just crossed 11,000 on-chain settlements", url: "https://x.com/MeshGateway/status/2095119991456825835", published_at: 2026-09-02T12:01:46Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Mesh just crossed 11,000 on-chain settlements. 480.66 USDG paid by agents across 45 merchants and 123 endpoints, all through x402 and settled gasless on-chain." }
  - { id: R-17, publisher: "@MeshGateway", title: "$GME drop settled", url: "https://x.com/MeshGateway/status/2095038284976328707", published_at: 2026-09-02T06:37:05Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-10, EVT-5], excerpt: "$GME drop settled. a 100 USDG pool swapped into 5.272 tokenized $GME and sent pro-rata to 147 wallets. Straight on-chain, no claim, no staking. Bar lowered: 1M → 500K $MESH. No hold-time requirement." }
  - { id: R-18, publisher: "@MeshGateway", title: "One facilitator. Two networks.", url: "https://x.com/MeshGateway/status/2094805152448610693", published_at: 2026-09-01T15:10:42Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-9, EVT-7], excerpt: "One facilitator. Two networks. MeshGateway now settles x402 payments on @RobinhoodCrypto (USDG) and @base (USDC). Gasless for the payer, same API on both. https://meshgateway.co/facilitator" }
  - { id: R-19, publisher: "@MeshGateway", title: "Identity and reputation, on-chain", url: "https://x.com/MeshGateway/status/2095181204551307648", published_at: 2026-09-02T16:05:00Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, EVT-3], excerpt: "Every agent on Mesh mints an ERC-8004 identity on @RobinhoodCrypto. Anyone who deals with it can score it in the ERC-8004 Reputation Registry: 0-100, permissionless, no self-rating." }
  - { id: R-20, publisher: "@MeshGateway", title: "this is not a phase", url: "https://x.com/MeshGateway/status/2095200771688251699", published_at: 2026-09-02T17:22:45Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "this is not a phase It’s already happening. Agentic commerce on @RobinhoodCrypto starts with Mesh." }
  - { id: R-21, publisher: CoinGecko, title: "MESH Gateway coin", url: "https://api.coingecko.com/api/v3/coins/mesh-gateway", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-14], excerpt: "id mesh-gateway name MESH Gateway symbol mesh platforms.robinhood 0x14641000a501bdc736116abf84e6fcea9b90a713 links.homepage https://meshgateway.co twitter_screen_name MeshGateway telegram_channel_identifier MeshCommunity. market_data.market_cap.usd 381954 fully_diluted_valuation.usd 418707 total_volume.usd 185446." }
  - { id: R-22, publisher: "@MeshGateway", title: "MeshEcosystem is live", url: "https://x.com/MeshGateway/status/2093118246182642127", published_at: 2026-08-27T23:27:32Z, accessed_at: 2026-09-03T03:10:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-21, CLM-26], excerpt: "MeshEcosystem is live. Agent projects bring their @ponsdotfamily v2 token and plug into the Mesh stack. 10% of creator fees fuel the flywheel. Splitter factory, source verified: https://robinhoodchain.blockscout.com/address/0x002565f730bec9266ae48d21e7ea0efe8d597c09" }
  - { id: R-23, publisher: MeshGateway, title: "Earn", url: "https://meshgateway.co/earn", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-10], excerpt: "Earn v2: stock drops. The bar is now 500,000 $MESH with no hold-time requirement, and every epoch pays a different tokenized stock on Robinhood Chain. Balances are sampled every 3 minutes. Distributions run every 24h · rollover at 00:00 UTC." }

gaps:
  - { priority: P0, question: "Which contract holds USDG between epochs and which address swaps the pool into the day's tokenized stock?", checked: "homepage, /earn, /mesh, whitepaper, MeshSplitterFactory ABI (createSplitter, escrow, ponsFactory, treasury), sampled settle tx, 2026-09-03", next: "trace an epoch payout tx from a holder ERC-20 transfer of RBLX or GME and read the sender" }
  - { priority: P0, question: "What bps is the protocol fee, and can treasury 0x417909…237D or the relayer change it?", checked: "site says a small protocol fee; whitepaper non-custodial merchant transfers; splitter has no fee setter in the ABI names listed, 2026-09-03", next: "read MeshSplitterFactory verified source and the facilitator/relayer docs" }
  - { priority: P1, question: "What are the ERC-8004 Identity Registry and Reputation Registry addresses on 4663?", checked: "homepage MeshIdentity section and the 2 Sep post; no 0x registry on those pages this pass", next: "open /dashboard/identity and /agents and search Blockscout for ERC-8004" }
  - { priority: P1, question: "Is x402ExactPermit2Proxy Mesh-controlled, or shared x402 infra (CREATE2 deployer 0x4e59…4956C, verified 2026-08-11 before MESH launched)?", checked: "Blockscout creator and verified_at; settle tx to that proxy, 2026-09-03", next: "compare bytecode to Coinbase x402 and Mesh github.com/meshgateway/x402" }
  - { priority: P2, question: "Does t.me/MeshCommunity cross-link meshgateway.co or @MeshGateway?", checked: "DexScreener and CoinGecko list it; token socials() telegram field empty, 2026-09-03", next: "open the Telegram profile" }
  - { priority: P2, question: "Is there an audit artifact for mpp-client, MeshSplitterFactory, or the Permit2 proxy?", checked: "site, docs, GitHub org, X; only a @zauthinc scan mention for mpp-client, 2026-09-03", next: "open the zauthinc post and GitHub security tab" }
---

# Mesh — research packet

## What it is

An HTTP 402 machine-payments gateway on Robinhood Chain. An agent pays USDG per API call through a Permit2 witness transfer; Mesh's relayer broadcasts it and the stablecoin lands in the merchant wallet. Holders of MESH above 500,000 receive the day's protocol-fee pool as a tokenized stock. @MeshGateway runs meshgateway.co.

Themes: tooling, agent, rwa, memecoin

## Why it matters

USDG on Robinhood Chain has no EIP-3009 signed transfer, so a generic x402 merchant cannot settle there. Mesh publishes a Permit2 rail, a merchant marketplace (Pons is one storefront), and a MESH fee flywheel that pays tokenized stocks. The same facilitator also posts USDC settlement on Base.

## What could go wrong

Merchant transfers go through x402ExactPermit2Proxy and a relayer EOA; the sampled status page shows 11,323 settlements from 18 unique payers. Epoch USDG custody and the stock-swapper were not found in the splitter ABI. Treasury on MeshSplitterFactory is one EOA.

## Product and mechanics

A merchant lists an HTTP endpoint. The client hits 402, signs a Permit2 witness transfer to the merchant, and retries; the relayer submits `settle` on x402ExactPermit2Proxy. Sampled tx 0x4eb7…a8eb moved 0.03 USDG and /status labels that merchant pons. [claim R-1 R-3] [verified R-12 R-14]

MESH is a Pons v2 token. Holders above 500,000 MESH are sampled every 3 minutes; the day's fee pool is posted as a tokenized-stock drop at 00:00 UTC with no claim. MeshEcosystem takes 10% of linked Pons v2 creator fees into that pool via MeshSplitterFactory. [claim R-2 R-17 R-22 R-23]

## Control and security

Token `owner()` is absent. `deployer()` is EOA 0x8DF12b…d3b0. MeshSplitterFactory `treasury()` is EOA 0x417909…237D, which created the factory. The sampled settle tx sender 0xc23124…1dc3 has no code. Whitepaper: the gateway is named in no transfer. [verified R-8 R-10 R-12] [claim R-3]

x402ExactPermit2Proxy is verified with `is_fully_verified` false, created 2026-08-11 by CREATE2 deployer 0x4e59…4956C, constructor Permit2 0x000000000022D473…78BA3. No audit PDF was located. [verified R-13] [unknown]

## Team and provenance

@MeshGateway bio lists the token. Token `socials()` and the launch constructor store https://x.com/MeshGateway and https://meshgateway.co. github.com/meshgateway blog is meshgateway.co and the bio repeats the CA. Telegram t.me/MeshCommunity is on DexScreener and CoinGecko only. [verified R-4 R-5 R-8]

Pons is the launchpad and a listed merchant, not the same slug. [verified R-7 R-11]

## Economics and activity

MESH/ETH Uniswap v4 24h volume 162179.74 USD, liquidity 64171.77 USD, DexScreener marketCap 423855 at 2026-09-03T02:55Z. CoinGecko market_cap.usd 381954. Holders 1063. Homepage: 11,323 settlements, 480.66 USDG, 102 merchants. /status unique payers 18. [claim R-1 R-6 R-9 R-14 R-21]

## Material risks

- Epoch fee pool and stock-swap path were not reproduced on a Mesh contract this pass. [unknown]
- Relayer and splitter treasury are externally owned accounts. [verified R-8]
- /status unique payers 18 versus 11,323 settlements. [claim R-14]
- DexScreener and CoinGecko market-cap figures disagree. [claim R-9 R-21]
- Permit2 proxy is shared x402 bytecode from 11 Aug, not shown as a Mesh deploy. [verified R-13]

## Verification passes

- Receipts: meshgateway.co, /mesh, /earn, /status, whitepaper, @MeshGateway profile and posts, GitHub user, Blockscout token/curve/splitter/proxy/create/settle txs, RPC, DexScreener, and CoinGecko were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-6 R-8 R-12]
- Numbers: 162179.74 is the MESH/ETH Uniswap v4 24h volume, not a sum of the USDG pairs and not CoinGecko total_volume. Holders 1063 is Blockscout `holders_count`. 480.66 USDG is the site all-time settlement figure, not TVL. [claim R-6 R-9 R-14]
- Adversarial: the strongest contrary reading is that Mesh is only a Pons-launched memecoin wrapping a public x402 proxy, with settlement counts from few wallets. Token socials, site CA, GitHub CA, and a pons-labelled USDG settle tx still leave the gateway as a Robinhood-native rail; unique-payer concentration and missing epoch contracts stay open. [inference R-8 R-12 R-14]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census mesh, content/projects/mesh.yaml, content/pulled/mesh.yaml, content/feed/mesh.yaml, content/sources/mesh.yaml, content/research/mesh.md, assignment, template, and schema/packet.schema.json read before collection.
- Official: meshgateway.co, /mesh, /earn, /status, /marketplace/pons (JS-heavy), docs.meshgateway.co/whitepaper, github.com/meshgateway and API user/repos.
- Explorer: Blockscout api/v2 with a Chrome User-Agent for token, create tx, curve, splitter, splitter create tx, settle tx, Permit2 proxy. RPC eth_getCode/eth_call at block 53080678.
- Third party: DexScreener token-pairs, CoinGecko coins/mesh-gateway, api.llama.fi/protocols (no MeshGateway row; Meshswap/Mesher/LiquidMesh/Mesha are other names).
- X: @MeshGateway profile; posts 3 Sep epoch 11, 2 Sep identity/11k/GME/agentic-commerce, 1 Sep Base facilitator, 27 Aug MeshEcosystem.
- Failed: launchFactory() selector 0x5c60da1b reverted (implementation() on a non-proxy); correct selector 0x536dac9b. Llama has no MeshGateway protocol. Telegram profile not opened. ERC-8004 registry addresses not on the homepage.
- Time: collection 2026-09-03T02:38Z–2026-09-03T03:20Z.
