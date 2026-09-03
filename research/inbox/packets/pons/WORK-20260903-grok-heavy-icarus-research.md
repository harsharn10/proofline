---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: pons
name: Pons
packet_tier: full
as_of: 2026-09-02T22:36:00Z
prior_packet: null
supersedes: null
owned_slugs: [pons]
allowed_paths:
  - research/inbox/packets/pons/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Pons
  aliases: [pons]
  symbols: [PONS]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://ponsfamily.com
  official_handle: "@ponsdotfamily"
  repository: "NULL — no public repository linked from the site, docs or X bio this pass; github.com/PonsLabs has no public repositories and is not linked from those surfaces"
  possible_matches: []

classification:
  primary_leaf: launch/bonding-curve
  secondary_leaves: [trading/amm-native]
  mechanism_tags: [launchpad, bonding-curve, amm, rwa, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "PONS token, fourteen documented contracts and the owner Safe were opened on Blockscout 4663 this pass; eth_getCode on the token is non-empty and owner() on the v1 and v2 factories returns the Safe. Lifetime volume is an official $5B post against a DefiLlama all-time adapter of about $579M. [R-4] [R-8] [R-11] [R-14] [R-21]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-31], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-5], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-6, CLM-11, CLM-24], note: "" }

links:
  - { kind: site, url: "https://ponsfamily.com", authenticity: confirmed }
  - { kind: app, url: "https://www.ponsfamily.com/launchpad", authenticity: confirmed }
  - { kind: docs, url: "https://docs.ponsfamily.com", authenticity: confirmed }
  - { kind: docs, url: "https://docs.ponsfamily.com/docs/v2", authenticity: confirmed }
  - { kind: x, url: "https://x.com/ponsdotfamily", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/ponsdotfamily", authenticity: unconfirmed }

deployments:
  - label: PONS token (PonsLauncherToken), created by v1 legacy factory
    role: token
    address:
      value: "0x39dBED3a2bd333467115dE45665cC57F813C4571"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-8, R-9, R-21]
  - label: PONS/WETH Uniswap V3 pool (reference pool in v1 docs)
    role: other
    address:
      value: "0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-10, R-23]
  - label: v1 active launch factory (PonsLaunchFactory)
    role: factory
    address:
      value: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-16]
  - label: v1 active locker (PonsLaunchLocker)
    role: vault
    address:
      value: "0x736D76699C26D0d966744cAe304C000d471f7F35"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-25]
  - label: v1 legacy factory (created the PONS token; source not verified on the explorer)
    role: factory
    address:
      value: "0x0c37a24F5D23A486FA692d1500881d698B1F77a4"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-8, R-17]
  - label: v1 legacy locker (source not verified on the explorer)
    role: vault
    address:
      value: "0x31ca5E101941A93A7DD6d0497928700625CF54B5"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-26]
  - label: v2 launch factory (PonsV2LaunchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-15]
  - label: v2 Uniswap v4 hook (V2MemeHook)
    role: other
    address:
      value: "0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-27]
  - label: v2 fee escrow (V2FeeEscrow)
    role: vault
    address:
      value: "0xd3AFEB2a57f70eF218Aa82451c51B2fb0416Ac9e"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-28]
  - label: v2 buyback vault (V2BuybackVault)
    role: vault
    address:
      value: "0x42df2a798f82289E177311362e8f5ccC45c1219c"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-29]
  - label: v2 launch locker (V2LaunchLocker)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-30]
  - label: v2 launch-and-buy router (PonsV2LaunchAndBuy)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-31]
  - label: v2 launch deployer (PonsV2LaunchDeployer)
    role: other
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-32]
  - label: v2 graduation executor (V2GraduationExecutor)
    role: other
    address:
      value: "0xC7819B64A1dAECD7eC19856d026cb14EfBd89046"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-33]
  - label: v2 graduation guard (PonsV2GraduationGuard)
    role: other
    address:
      value: "0xf5695117b99B6f6401e67d4195BD653628176C6C"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-34]
  - label: Owner Safe (SafeProxy / SafeL2)
    role: multisig
    address:
      value: "0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-14, R-18]

metrics:
  - { kind: volume_24h, value: 94220826, currency: USD, as_of: 2026-09-02T22:31:59Z, window: 24h, method: "api.llama.fi/summary/dexs/pons?dataType=dailyVolume total24h; chains Robinhood Chain", class: claim, receipt_ids: [R-11] }
  - { kind: fees_24h, value: 4557472, currency: USD, as_of: 2026-09-02T22:31:59Z, window: 24h, method: "api.llama.fi/summary/fees/pons?dataType=dailyFees total24h; chains Robinhood Chain", class: claim, receipt_ids: [R-12] }
  - { kind: revenue_24h, value: 909887, currency: USD, as_of: 2026-09-02T22:31:59Z, window: 24h, method: "api.llama.fi/summary/fees/pons?dataType=dailyRevenue total24h; chains Robinhood Chain", class: claim, receipt_ids: [R-13] }
  - { kind: holders, value: 63412, currency: null, as_of: 2026-09-02T22:31:11Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x39dBED3a2bd333467115dE45665cC57F813C4571 holders_count", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 292421152.09, currency: USD, as_of: 2026-09-02T22:31:11Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x39dBED3a2bd333467115dE45665cC57F813C4571 circulating_market_cap", class: claim, receipt_ids: [R-9] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:31:11Z, receipt_ids: [R-8, R-9, R-21], result: "api/v2/addresses/0x39dBED3a2bd333467115dE45665cC57F813C4571 is_contract true, is_verified true, name PonsLauncherToken, proxy_type null, creator_address_hash 0x0c37a24F5D23A486FA692d1500881d698B1F77a4, creation_transaction_hash 0x1f54f25fec2d963dcb338ecb8b46a6eb123198a5c7a746d34cb2dbe78d074af8; token symbol PONS, holders_count 63412, total_supply 1e27; eth_getCode non-empty (10550 hex chars) at rpc.mainnet.chain.robinhood.com" }
  - { id: REP-2, method: api, chain_id: 4663, checked_at: 2026-09-02T22:31:59Z, receipt_ids: [R-10], result: "DexScreener latest/dex/pairs/robinhood/0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA: dexId uniswap, chainId robinhood, base PONS 0x39dBED3a2bd333467115dE45665cC57F813C4571, quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73, liquidity.usd 5103019.56, volume.h24 5924290.05, priceUsd 0.4924, fdv 348050901" }
  - { id: REP-3, method: api, chain_id: 4663, checked_at: 2026-09-02T22:31:59Z, receipt_ids: [R-11, R-12, R-13, R-35], result: "Llama DEX volume total24h 94220826 total30d 470272121 totalAllTime 578882056 chains [Robinhood Chain]; fees total24h 4557472; revenue total24h 909887; protocol address robinhood:0x39dbed3a2bd333467115de45665cc57f813c4571 twitter ponsdotfamily" }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:35:38Z, receipt_ids: [R-14, R-18], result: "eth_call owner() on v1 factory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB and v2 factory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e both return 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd; getOwners on that Safe returns three addresses 0x1320a2b04a9e9ff511c7209c9669ebfe13cc818e, 0x3825e7b3ff17637b08219e99d78b6c622b73f5b7, 0xfa31fe751c203a623b52fad26b4063abc2ffdf50; getThreshold selector 0xe75235b8 returns 2; Blockscout names it SafeProxy, proxy_type master_copy, implementation SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762" }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T22:33:47Z, receipt_ids: [R-15, R-16, R-17, R-19, R-23, R-25, R-26, R-27, R-28, R-29, R-30, R-31, R-32, R-33, R-34], result: "api/v2/addresses on all fourteen documented Pons contracts plus the Uniswap V3 reference pool are is_contract true on 4663; twelve named contracts plus the pool have is_verified true; v1 legacy factory and locker is_verified false; same-ticker 0xe306c19C72131B0a8f311648fa63FE8CeDf44571 is MIMEToken created by 0xF193EDe778a92dc37CB450A1eF1565Ed1e8b7964" }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-02T22:32:19Z, receipt_ids: [R-1, R-22], result: "ponsfamily.com footer links https://x.com/ponsdotfamily and https://docs.ponsfamily.com; @ponsdotfamily bio t.co/GHMbQqQvUz redirects to https://ponsfamily.com/launchpad" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Two live generations on Robinhood Chain: v1 mints a fixed-supply token into a locked Uniswap V3 WETH pool with no bonding curve; v2 sells from a bonding curve that graduates into a permanently locked Uniswap v4 pool and can pair against owner-approved assets including tokenised stocks", class: claim, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://ponsfamily.com", class: verified, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-1, R-22], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@ponsdotfamily", class: verified, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-1, R-22], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x39dBED3a2bd333467115dE45665cC57F813C4571", class: verified, observed_at: 2026-09-02T22:31:11Z, receipt_ids: [R-2, R-8, R-21], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T22:31:11Z, receipt_ids: [R-2, R-8, R-21], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-6, field: control.owner, value: "0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd", class: verified, observed_at: 2026-09-02T22:35:38Z, receipt_ids: [R-14, R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-7, field: control.threshold, value: "2-of-3 Safe (getThreshold 2; three getOwners)", class: verified, observed_at: 2026-09-02T22:35:38Z, receipt_ids: [R-14, R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: economics.metric, value: "Official account posted Pons just passed $5B volume traded (2026-09-02)", class: claim, observed_at: 2026-09-02T22:30:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: CLM-17 }
  - { id: CLM-9, field: economics.metric, value: 578882056, class: verified, observed_at: 2026-09-02T22:31:59Z, receipt_ids: [R-11], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: 94220826, class: verified, observed_at: 2026-09-02T22:31:59Z, receipt_ids: [R-11], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: security.audit, value: "v2 docs name three reviews in progress (SB Security, Dingbats, Pashov Audit Group) and say no audit has closed; treat v2 as unaudited until reports are published; v1 docs do not mention an audit", class: claim, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: identity.symbol, value: "PONS", class: verified, observed_at: 2026-09-02T22:31:11Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: relationship, value: "PONS token creator_address_hash is the v1 legacy factory 0x0c37a24F5D23A486FA692d1500881d698B1F77a4; v1 docs list it as the reference token launched through the legacy factory into Uniswap V3 pool 0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA paired with WETH", class: verified, observed_at: 2026-09-02T22:31:11Z, receipt_ids: [R-2, R-8, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: other, value: "PONS/WETH Uniswap pair 0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA on DexScreener: liquidity.usd 5103019.56, volume.h24 5924290.05 at 2026-09-02T22:31:59Z", class: verified, observed_at: 2026-09-02T22:31:59Z, receipt_ids: [R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: 5103019.56, class: verified, observed_at: 2026-09-02T22:31:59Z, receipt_ids: [R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Official account posted over $111,000,000 in RWA volume on Robinhood over the last 24 hours (2026-09-02)", class: claim, observed_at: 2026-09-02T22:30:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "Official account posted over $4.54B in volume on Robinhood Chain under 2 months (2026-09-01)", class: claim, observed_at: 2026-09-02T22:30:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: other, value: "Official account posted new stock tokens live for pairing: LLY, WYFI, TSM, RBLX, SKYHY, DELL, USO (2026-09-02)", class: claim, observed_at: 2026-09-02T22:30:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: team.identity, value: "Pons Labs, LLC; contact@ponsfamily.com", class: claim, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: control.timelock, value: "owner() on the v1 and v2 factories returns the Safe directly; no timelock contract in that call path this pass", class: inference, observed_at: 2026-09-02T22:35:38Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: identity.repository, value: "No public repository linked from the site, docs or X bio; github.com/PonsLabs has no public repositories and is not linked from those surfaces", class: claim, observed_at: 2026-09-02T22:33:47Z, receipt_ids: [R-1, R-2, R-3, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: other, value: "Second verified contract named Pons with symbol PONS at 0xe306c19C72131B0a8f311648fa63FE8CeDf44571 (MIMEToken) created by 0xF193EDe778a92dc37CB450A1eF1565Ed1e8b7964; not a Pons factory", class: verified, observed_at: 2026-09-02T22:33:47Z, receipt_ids: [R-19], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-23, field: taxonomy.primary-leaf, value: "launch/bonding-curve", class: claim, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: taxonomy.mechanism-tag, value: "stock-paired", class: claim, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: economics.metric, value: 63412, class: verified, observed_at: 2026-09-02T22:31:11Z, receipt_ids: [R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-26, field: account.@ponsdotfamily.role, value: project, class: verified, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-1, R-22], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-27, field: account.@ponsdotfamily.slug, value: pons, class: claim, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-1, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: communications.status, value: "t.me/ponsdotfamily page titles PONS | pons.family, states CA 0x39dBED3a2bd333467115dE45665cC57F813C4571, 15233 members; not linked from the site or docs HTML this pass", class: claim, observed_at: 2026-09-02T22:33:47Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: product.mechanism, value: "v2 public launches are closed; only whitelisted addresses can create a token; check canLaunch(address)", class: claim, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: control.privileged-role, value: "v2 docs: factory owner can edit or disable launch configs and approve pairing assets; Pons can turn a launch's buybacks off but never on; a Pons-proposed creator-fee takeover waits three days; stalled graduation funds may be returned after seven days", class: claim, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-02T22:33:47Z, receipt_ids: [R-3, R-15], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-32, field: economics.metric, value: 4557472, class: verified, observed_at: 2026-09-02T22:31:59Z, receipt_ids: [R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-33, field: economics.metric, value: 909887, class: verified, observed_at: 2026-09-02T22:31:59Z, receipt_ids: [R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-34, field: identity.alias, value: "Pons Labs, LLC", class: claim, observed_at: 2026-09-02T22:32:19Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-35, field: other, value: "ca-collision: MIMEToken at 0xe306c19C72131B0a8f311648fa63FE8CeDf44571 uses name Pons and symbol PONS; project token is 0x39dBED3a2bd333467115dE45665cC57F813C4571", class: verified, observed_at: 2026-09-02T22:33:47Z, receipt_ids: [R-8, R-19], reproduction_ids: [REP-1, REP-5], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-8, CLM-9]
    material_effect: "Official lifetime volume ($5B on 2 Sep) is about 8.6x DefiLlama's all-time DEX adapter ($578,882,056); a profile that prints one figure as fact would misstate activity"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "PONS/WETH Uniswap pair about $5.10M liquidity"
    summary: "DexScreener Uniswap PONS/WETH pair 0x10CC…26bA: liquidity $5,103,019.56, 24h volume $5,924,290.05."
    occurred_at: 2026-09-02T22:31:59Z
    observed_at: 2026-09-02T22:31:59Z
    affected_fields: [economics.metric, deployment.address]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-2
    type: onchain
    title: "DefiLlama 24h volume about $94.2M"
    summary: "DefiLlama DEX adapter for Pons on Robinhood Chain returned $94,220,826 of 24h volume at access time."
    occurred_at: 2026-09-02T22:31:59Z
    observed_at: 2026-09-02T22:31:59Z
    affected_fields: [economics.metric]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-3
    type: company
    title: "Pons posted $5B volume traded"
    summary: "@ponsdotfamily posted on 2 Sep 2026 that Pons just passed $5B volume traded."
    occurred_at: 2026-09-02T15:58:04Z
    observed_at: 2026-09-02T22:30:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-4
    type: company
    title: "New stock tokens listed for pairing"
    summary: "@ponsdotfamily posted new pair assets live: LLY, WYFI, TSM, RBLX, SKYHY, DELL, USO."
    occurred_at: 2026-09-02T04:12:37Z
    observed_at: 2026-09-02T22:30:00Z
    affected_fields: [taxonomy.mechanism-tag, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-5
    type: company
    title: "$111M RWA volume in 24 hours"
    summary: "@ponsdotfamily posted over $111,000,000 in RWA volume on Robinhood over the last 24 hours."
    occurred_at: 2026-09-02T03:29:44Z
    observed_at: 2026-09-02T22:30:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-6
    type: company
    title: "$4.54B volume under two months"
    summary: "@ponsdotfamily posted Pons is under 2 months old and has done over $4.54B volume on Robinhood Chain."
    occurred_at: 2026-09-01T20:31:50Z
    observed_at: 2026-09-02T22:30:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-7
    type: risk
    title: "Same-ticker PONS contract is not the project token"
    summary: "A second verified Pons/PONS contract at 0xe306…4571 is MIMEToken; creator is not a Pons factory."
    occurred_at: 2026-09-02T22:33:47Z
    observed_at: 2026-09-02T22:33:47Z
    affected_fields: [identity.symbol, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-19]

receipts:
  - { id: R-1, publisher: "Pons Labs, LLC", title: "Pons site", url: "https://www.ponsfamily.com/", published_at: null, accessed_at: 2026-09-02T22:32:19Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-19, CLM-21, CLM-26, CLM-27, CLM-34], excerpt: "Launch and explore fixed-supply tokens on Robinhood Chain. Your wallet submits every transaction. pons does not custody assets. Product Explore Analytics Create Profile Docs Legal. © 2026 Pons Labs, LLC. @ponsdotfamily. Links include https://docs.ponsfamily.com and https://x.com/ponsdotfamily." }
  - { id: R-2, publisher: Pons, title: "v1 docs", url: "https://docs.ponsfamily.com", published_at: null, accessed_at: 2026-09-02T22:32:19Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-11, CLM-13, CLM-21], excerpt: "Creating a launch deploys the token and its trading pool in a single transaction, and the pool's liquidity is locked automatically. Every token trades against WETH in its own pool. There is no bonding curve and no migration later. Reference token 0x39dBED3a2bd333467115dE45665cC57F813C4571. Pool 0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA. Graduated and trading in the same pool. Launched through the legacy factory." }
  - { id: R-3, publisher: Pons, title: "v2 docs", url: "https://docs.ponsfamily.com/docs/v2", published_at: null, accessed_at: 2026-09-02T22:32:19Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-11, CLM-21, CLM-23, CLM-24, CLM-29, CLM-30, CLM-31], excerpt: "pons v2 is a launch protocol. A creator deploys a token, the public buys it from a bonding curve, and once the curve is bought out the launch graduates into a Uniswap v4 pool whose liquidity is locked permanently. A launch can be paired against any token pons has approved. No audit has closed. Treat v2 as unaudited until the reports are published here. Public launches are closed, so only whitelisted addresses can create a token for now." }
  - { id: R-4, publisher: "@ponsdotfamily", title: "Pons just passed $5B volume traded", url: "https://x.com/ponsdotfamily/status/2095179461301805078", published_at: 2026-09-02T15:58:04Z, accessed_at: 2026-09-02T22:30:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, EVT-3], excerpt: "Pons just passed $5B volume traded and we're not slowing down. Let's win." }
  - { id: R-5, publisher: "@ponsdotfamily", title: "New Stock Tokens have landed on Pons", url: "https://x.com/ponsdotfamily/status/2095001927687790595", published_at: 2026-09-02T04:12:37Z, accessed_at: 2026-09-02T22:30:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-18, CLM-24, EVT-4], excerpt: "New Stock Tokens have landed on Pons. Pair with $LLY, $WYFI, $TSM, $RBLX, $SKYHY, $DELL, or $USO. Live now." }
  - { id: R-6, publisher: "@ponsdotfamily", title: "$111,000,000 in RWA volume", url: "https://x.com/ponsdotfamily/status/2094991136116928977", published_at: 2026-09-02T03:29:44Z, accessed_at: 2026-09-02T22:30:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-16, EVT-5], excerpt: "Pons has done over $111,000,000 in RWA volume on Robinhood over the last 24 hours. Memestocks." }
  - { id: R-7, publisher: "@ponsdotfamily", title: "$4.54B in volume under 2 months", url: "https://x.com/ponsdotfamily/status/2094885969107259651", published_at: 2026-09-01T20:31:50Z, accessed_at: 2026-09-02T22:30:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-17, EVT-6], excerpt: "Pons is under 2 months old and has done over $4.54B in volume on Robinhood Chain. Let that sink in." }
  - { id: R-8, publisher: Blockscout, title: "PONS token address API", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x39dBED3a2bd333467115dE45665cC57F813C4571", published_at: null, accessed_at: 2026-09-02T22:31:11Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-12, CLM-13, CLM-35], excerpt: "hash 0x39dBED3a2bd333467115dE45665cC57F813C4571; is_contract true; is_verified true; name PonsLauncherToken; proxy_type null; creator_address_hash 0x0c37a24F5D23A486FA692d1500881d698B1F77a4; creation_transaction_hash 0x1f54f25fec2d963dcb338ecb8b46a6eb123198a5c7a746d34cb2dbe78d074af8; token name Pons symbol PONS holders_count 63412." }
  - { id: R-9, publisher: Blockscout, title: "PONS token holders_count", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x39dBED3a2bd333467115dE45665cC57F813C4571", published_at: null, accessed_at: 2026-09-02T22:31:11Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-25], excerpt: "name Pons; symbol PONS; decimals 18; type ERC-20; holders_count 63412; total_supply 1000000000000000000000000000; exchange_rate 0.41071; circulating_market_cap 292421152.0896474." }
  - { id: R-10, publisher: DexScreener, title: "PONS/WETH Uniswap pair", url: "https://api.dexscreener.com/latest/dex/pairs/robinhood/0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA", published_at: null, accessed_at: 2026-09-02T22:31:59Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13, CLM-14, CLM-15, EVT-1], excerpt: "dexId uniswap; chainId robinhood; pairAddress 0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA; baseToken PONS 0x39dBED3a2bd333467115dE45665cC57F813C4571; quoteToken WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; liquidity.usd 5103019.56; volume.h24 5924290.05; priceUsd 0.4924; fdv 348050901." }
  - { id: R-11, publisher: DefiLlama, title: "Pons DEX volume", url: "https://api.llama.fi/summary/dexs/pons?dataType=dailyVolume", published_at: null, accessed_at: 2026-09-02T22:31:59Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-10, EVT-2], excerpt: "name Pons; chains Robinhood Chain; total24h 94220826; total30d 470272121; totalAllTime 578882056; address robinhood:0x39dbed3a2bd333467115de45665cc57f813c4571; twitter ponsdotfamily; url https://www.ponsfamily.com/launchpad." }
  - { id: R-12, publisher: DefiLlama, title: "Pons daily fees", url: "https://api.llama.fi/summary/fees/pons?dataType=dailyFees", published_at: null, accessed_at: 2026-09-02T22:31:59Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-32], excerpt: "name Pons; slug pons; chains Robinhood Chain; total24h 4557472; total7d 24360124; total30d 35240439; childProtocols Pons V1 and Pons V2." }
  - { id: R-13, publisher: DefiLlama, title: "Pons daily revenue", url: "https://api.llama.fi/summary/fees/pons?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-02T22:31:59Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-33], excerpt: "total24h 909887; total7d 4534371; total30d 6903889." }
  - { id: R-14, publisher: Robinhood Chain RPC, title: "owner(), getOwners, getThreshold", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T22:35:38Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-20], excerpt: "eth_call owner() on 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB and 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e returns 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. getOwners on the Safe returns 0x1320…818e, 0x3825…f5b7, 0xfa31…df50. getThreshold (0xe75235b8) returns 2." }
  - { id: R-15, publisher: Blockscout, title: "v2 launch factory", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-31], excerpt: "is_contract true; is_verified true; name PonsV2LaunchFactory; proxy_type null; creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-16, publisher: Blockscout, title: "v1 active factory", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "is_contract true; is_verified true; name PonsLaunchFactory; proxy_type null; creator_address_hash 0xda4bCee76B29EFEc9697Fcf663601c2042043968." }
  - { id: R-17, publisher: Blockscout, title: "v1 legacy factory", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x0c37a24F5D23A486FA692d1500881d698B1F77a4", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "is_contract true; is_verified false; name null; proxy_type null; creator_address_hash 0xda4bCee76B29EFEc9697Fcf663601c2042043968." }
  - { id: R-18, publisher: Blockscout, title: "Owner SafeProxy", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd", published_at: null, accessed_at: 2026-09-02T22:35:38Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-7], excerpt: "is_contract true; is_verified true; name SafeProxy; proxy_type master_copy; implementations [{address_hash 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762, name SafeL2}]; creator_address_hash 0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67." }
  - { id: R-19, publisher: Blockscout, title: "Same-ticker MIMEToken PONS", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xe306c19C72131B0a8f311648fa63FE8CeDf44571", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22, CLM-35, EVT-7], excerpt: "is_contract true; is_verified true; name MIMEToken; proxy_type null; creator_address_hash 0xF193EDe778a92dc37CB450A1eF1565Ed1e8b7964." }
  - { id: R-20, publisher: Telegram, title: "@ponsdotfamily", url: "https://t.me/ponsdotfamily", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-28], excerpt: "PONS | pons.family. 15233 members, 1132 online. TG: https://t.me/PONSDOTFAMILY CA:0x39dBED3a2bd333467115dE45665cC57F813C4571." }
  - { id: R-21, publisher: Robinhood Chain RPC, title: "eth_getCode PONS token", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5], excerpt: "eth_getCode 0x39dBED3a2bd333467115dE45665cC57F813C4571 latest: result length 10550 hex characters, non-empty." }
  - { id: R-22, publisher: "@ponsdotfamily", title: "X bio t.co redirect", url: "https://t.co/GHMbQqQvUz", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-26, CLM-27], excerpt: "Location header: https://ponsfamily.com/launchpad. X bio: Launch coins on Robinhood via that t.co link." }
  - { id: R-23, publisher: Blockscout, title: "PONS/WETH UniswapV3Pool", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-14], excerpt: "is_contract true; is_verified true; name UniswapV3Pool; proxy_type null; creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA." }
  - { id: R-24, publisher: GitHub, title: "PonsLabs organization", url: "https://github.com/PonsLabs", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: repository, authority: unknown, authenticity: unconfirmed, supports: [CLM-21], excerpt: "This organization has no public repositories. Not linked from ponsfamily.com, docs.ponsfamily.com, or the @ponsdotfamily bio this pass." }
  - { id: R-25, publisher: Blockscout, title: "v1 active locker", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x736D76699C26D0d966744cAe304C000d471f7F35", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "is_contract true; is_verified true; name PonsLaunchLocker; proxy_type null." }
  - { id: R-26, publisher: Blockscout, title: "v1 legacy locker", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x31ca5E101941A93A7DD6d0497928700625CF54B5", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "is_contract true; is_verified false; name null; proxy_type null." }
  - { id: R-27, publisher: Blockscout, title: "v2 Uniswap v4 hook", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-31], excerpt: "is_contract true; is_verified true; name V2MemeHook; proxy_type null; creator_address_hash 0x4e59b44847b379578588920cA78FbF26c0B4956C." }
  - { id: R-28, publisher: Blockscout, title: "v2 fee escrow", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xd3AFEB2a57f70eF218Aa82451c51B2fb0416Ac9e", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-31], excerpt: "is_contract true; is_verified true; name V2FeeEscrow; proxy_type null." }
  - { id: R-29, publisher: Blockscout, title: "v2 buyback vault", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x42df2a798f82289E177311362e8f5ccC45c1219c", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-31], excerpt: "is_contract true; is_verified true; name V2BuybackVault; proxy_type null." }
  - { id: R-30, publisher: Blockscout, title: "v2 launch locker", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-31], excerpt: "is_contract true; is_verified true; name V2LaunchLocker; proxy_type null." }
  - { id: R-31, publisher: Blockscout, title: "v2 launch-and-buy router", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-31], excerpt: "is_contract true; is_verified true; name PonsV2LaunchAndBuy; proxy_type null." }
  - { id: R-32, publisher: Blockscout, title: "v2 launch deployer", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-31], excerpt: "is_contract true; is_verified true; name PonsV2LaunchDeployer; proxy_type null." }
  - { id: R-33, publisher: Blockscout, title: "v2 graduation executor", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xC7819B64A1dAECD7eC19856d026cb14EfBd89046", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-31], excerpt: "is_contract true; is_verified true; name V2GraduationExecutor; proxy_type null." }
  - { id: R-34, publisher: Blockscout, title: "v2 graduation guard", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xf5695117b99B6f6401e67d4195BD653628176C6C", published_at: null, accessed_at: 2026-09-02T22:33:47Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-31], excerpt: "is_contract true; is_verified true; name PonsV2GraduationGuard; proxy_type null; creator_address_hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e." }
  - { id: R-35, publisher: DefiLlama, title: "Pons protocol row", url: "https://api.llama.fi/protocol/pons", published_at: null, accessed_at: 2026-09-02T22:31:59Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name Pons; symbol PONS; url https://www.ponsfamily.com/launchpad; twitter ponsdotfamily; address robinhood:0x39dbed3a2bd333467115de45665cc57f813c4571; description: token launchpad for creating and trading fixed-supply tokens that progress toward liquidity graduation on Robinhood Chain." }

gaps:
  - { priority: P0, question: "Are the owner-callable setters and rescue functions on the v2 factory and hook bounded to future launches, or can they reach a live curve's reserves or a graduation in flight?", checked: "v2 docs 2026-09-02 describe owner-gated pairing assets, launch-config edits, buyback off-switch, three-day takeover delay and seven-day stall return; ABIs were not re-read from verified source this pass", next: "read access modifiers on those setters in the explorer-verified source" }
  - { priority: P1, question: "Have any of the three named v2 reviews (SB Security, Dingbats, Pashov Audit Group) published a report that matches the deployed bytecode?", checked: "v2 docs Audits section 2026-09-02 still says no audit has closed; v1 docs do not mention an audit; no report URL on the site", next: "re-read the v2 Audits heading and each auditor's public report index" }
  - { priority: P1, question: "What volume universe produces the official $5B lifetime figure versus DefiLlama's $578.9M all-time adapter?", checked: "X posts 2095179461301805078 and 2094885969107259651; Llama summary/dexs/pons totalAllTime 578882056 on 2026-09-02, V2 methodology excludes external Uniswap v4 swaps", next: "ask in public which venues and generations the $5B includes, and compare to a 4663 event sum" }
  - { priority: P2, question: "Does the site or docs link t.me/ponsdotfamily so the Telegram handle can be marked confirmed?", checked: "www.ponsfamily.com and both docs pages 2026-09-02 list X and docs, not Telegram; t.me/ponsdotfamily page carries the PONS CA", next: "re-read the site footer and X bio for a t.me URL" }
  - { priority: P2, question: "Who holds the three Safe signers, and is there a published signer policy?", checked: "RPC getOwners returned three EOAs; identities not named on the site, docs or X this pass", next: "a public signer policy or named controllers" }
  - { priority: P2, question: "Can the v1 legacy factory and locker source be verified, or should they be scoped as retired?", checked: "Blockscout api/v2 2026-09-02 is_verified false on 0x0c37…77a4 and 0x31ca…4B5; both are contracts and the token creator is the legacy factory", next: "source verification on the explorer or a docs note that legacy is frozen" }
---

# Pons — research packet

## What it is

The chain's dominant launchpad. Pons launches tokens on Robinhood Chain in two generations: v1 mints a fixed-supply token straight into a locked Uniswap V3 WETH pool; v2 sells from a bonding curve that graduates into a permanently locked Uniswap v4 pool and can pair against approved assets such as tokenised stocks. Users launch and trade from their own wallets. Pons Labs, LLC runs the site and @ponsdotfamily.

Themes: launchpad, memecoin, rwa, stock-paired, hook

## Why it matters

Pons is a live launchpad on chain 4663 with documented v1 and v2 factories, lockers and a Uniswap v4 hook, and with the PONS token trading in a Uniswap V3 WETH pool. [verified R-2 R-3 R-8 R-10]

v2 launches can be quoted in owner-approved ERC-20s, including tokenised stocks, so pairing-asset risk sits in the launch path rather than only in later trading. [claim R-3 R-5]

Official posts on 1–2 Sep 2026 give lifetime volume in the billions; DefiLlama's Robinhood Chain adapter for the same day gives about $94.2M of 24h volume and about $578.9M all-time. [claim R-4 R-7] [verified R-11]

## What could go wrong

The v1 and v2 factories' owner() is a 2-of-3 Safe with no timelock in that call path, so documented owner actions on fees, pairing assets, launch configs and graduation components execute as soon as two signers confirm. [verified R-14] [claim R-3]

v2 is deployed and its own docs tell integrators to treat it as unaudited until three named reviews close; public creates stay on an allowlist. [claim R-3]

A launch paired against a tokenised stock or other approved asset carries that asset's price and transfer behaviour on top of the launch token, and graduation only records that the curve sold out or that a WETH threshold was reached. [claim R-2 R-3]

## Product and mechanics

v1: a create call mints a fixed-supply token and opens a locked Uniswap V3 WETH pool in the same transaction. There is no bonding curve and no later migration; trading continues in that pool after a WETH-threshold graduation. Default terms in the docs are 1% pool fee, 0.0005 ETH launch fee and a 4.2 ETH graduation threshold. [claim R-2]

v2: the whole supply is minted to a per-launch bonding curve; a held-back share seeds a Uniswap v4 pool at graduation and that position is locked. Quote asset is native ETH or an owner-approved ERC-20, including tokenised stocks, and cannot change after create. Public creates are closed to non-allowlisted addresses. [claim R-3]

The project token PONS at 0x39dBED3a2bd333467115dE45665cC57F813C4571 is a PonsLauncherToken created by the v1 legacy factory 0x0c37a24F5D23A486FA692d1500881d698B1F77a4. The v1 docs name Uniswap V3 pool 0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA as its reference pool, quoted against WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. [verified R-2 R-8 R-10 R-23]

## Control and security

owner() on the v1 active factory and the v2 factory returns 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd, a verified SafeProxy (SafeL2 implementation 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762) with getThreshold 2 and three getOwners. [verified R-14 R-18]

No timelock contract sits between that Safe and those factories in the owner() result. [inference R-14]

v2 docs state that no audit has closed, name SB Security, Dingbats and Pashov Audit Group as reviews in progress, and tell readers to treat v2 as unaudited until reports are published; v1 docs do not mention an audit. Security contact in the docs is contact@ponsfamily.com. [claim R-2 R-3]

Documented v2 owner powers include launch-config edits, pairing-asset approval, a buyback off-switch, a three-day public delay on a Pons-proposed creator-fee takeover, and return of funds from a launch stuck between graduation steps for seven days. Whether those setters can reach a live curve was not read from source this pass. [claim R-3]

## Team and provenance

The site footer names Pons Labs, LLC and links @ponsdotfamily; the X bio t.co expands to ponsfamily.com/launchpad. Named technical contributors and Safe-signer identities are not published on those surfaces. [claim R-1 R-22]

v1 contracts were created by 0xda4bCee76B29EFEc9697Fcf663601c2042043968 and v2 contracts by 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36 (the hook via the canonical CREATE2 deployer). No public repository is linked from the site, docs or X bio; github.com/PonsLabs has no public repositories. [claim R-15 R-16 R-24]

t.me/ponsdotfamily carries the PONS CA and 15,233 members but is not linked from the site or docs HTML this pass (unconfirmed-official). [claim R-20]

## Economics and activity

DefiLlama DEX adapter, Robinhood Chain slice, 2026-09-02T22:31:59Z: 24h volume $94,220,826; 30d $470,272,121; all-time $578,882,056. Fees 24h $4,557,472. Revenue 24h $909,887. [verified R-11 R-12 R-13]

DexScreener Uniswap PONS/WETH pair 0x10CC6BD38112cAc182db90B6a71d8Bb5939526bA at 2026-09-02T22:31:59Z: liquidity $5,103,019.56; 24h volume $5,924,290.05; price $0.4924. Pair asset WETH; venue Uniswap. [verified R-10]

Blockscout token page at 2026-09-02T22:31:11Z: 63,412 holders; circulating_market_cap $292,421,152. [verified R-9]

@ponsdotfamily posted $4.54B lifetime volume on 1 Sep 2026 and $5B on 2 Sep 2026, plus $111,000,000 of RWA volume over 24 hours and new pairing assets LLY, WYFI, TSM, RBLX, SKYHY, DELL, USO. Those lifetime figures are not reproduced by the DefiLlama all-time adapter. [claim R-4 R-5 R-6 R-7] [verified R-11]

## Material risks

- Owner of the factories is a 2-of-3 Safe with no timelock in the owner() path; v2 docs describe owner-gated fee, pairing and graduation controls whose on-chain bounds were not re-read from source this pass. [verified R-14] [claim R-3]
- v2 is deployed and its docs say to treat it as unaudited until three named reviews publish reports; public creates are allowlisted. [claim R-3]
- Official lifetime volume ($5B) disagrees with DefiLlama all-time DEX volume ($578,882,056). [claim R-4] [verified R-11]
- A second verified contract named Pons with symbol PONS exists at 0xe306c19C72131B0a8f311648fa63FE8CeDf44571 (MIMEToken); only 0x39dBED3a2bd333467115dE45665cC57F813C4571 is the project token (ca-collision). [verified R-8 R-19]
- Custom-pair v2 launches inherit the pairing asset's price and transfer behaviour; graduation is a threshold or curve-sold-out marker, not an exit guarantee. [claim R-2 R-3]
- v1 legacy factory and locker have no verified source on the explorer; that factory created the PONS token. [verified R-8 R-17 R-26]

## Verification passes

- Receipts: site, both docs pages, four official X posts, Blockscout api/v2 on the token and documented contracts, DexScreener pair API, Llama fees/volume APIs, and RPC owner()/getCode were opened on 2026-09-02 and excerpts copied from the responses. [verified R-1 R-2 R-3 R-4 R-8 R-10 R-11 R-14]
- Numbers: Llama figures are the Robinhood Chain adapter slice, not an all-chains total. DexScreener PONS/WETH liquidity and 24h volume are the Uniswap pair 0x10CC…26bA, not protocol volume. Official $5B / $4.54B / $111M remain class claim. [verified R-10 R-11] [claim R-4 R-6 R-7]
- Adversarial: the strongest contrary reading of the $5B post is that it sums venues Llama's V2 adapter excludes (post-graduation Uniswap v4 swaps and v1 pool volume). The same-ticker MIMEToken is a second PONS symbol on 4663; creator and source name separate it from the project token. github.com/PonsLabs is an empty org and is not an official repository on the surfaces checked. [inference R-3 R-11 R-19 R-24]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census, projects/pons.yaml, pulled/pons.yaml (pulled_at 2026-09-02T21:05:36Z, head 52877457), research/pons.md and feed/pons.yaml read before collection.
- Official posts fetched as X threads: 2095179461301805078 ($5B, 2026-09-02T15:58:04Z), 2095001927687790595 (stock tokens, 04:12:37Z), 2094991136116928977 ($111M RWA, 03:29:44Z), 2094885969107259651 ($4.54B, 2026-09-01T20:31:50Z).
- Explorer: robinhoodchain.blockscout.com/api/v2/addresses and /tokens with User-Agent; exists_on_4663 flipped true only from those responses plus eth_getCode. Token creator is the v1 legacy factory.
- DexScreener: latest/dex/tokens, latest/dex/search?q=PONS, latest/dex/pairs/robinhood/0x10CC…26bA and token-pairs/v1/robinhood/0x39dB…4571. Snapshot used: 2026-09-02T22:31:59Z liq $5,103,019.56 vol24 $5,924,290.05 (later 22:35Z print was liq $5,169,873.82 vol24 $5,991,118.60). Earlier same-day ballpark ~$5.23M / ~$5.88M was not the print copied here.
- Llama: summary/dexs/pons, summary/fees/pons (dailyFees and dailyRevenue), protocol/pons at 2026-09-02T22:31:59Z. 24h volume matched the 21:05Z puller snapshot (94220826); holders rose from 63254 in the puller file to 63412.
- RPC: https://rpc.mainnet.chain.robinhood.com owner() on both factories, getOwners and getThreshold on the Safe, eth_getCode on the token.
- Telegram: t.me/ponsdotfamily loads with matching CA; t.me/ponsfamily is a 14-subscriber preview and was not treated as official. GitHub: github.com/ponsfamily 404; github.com/PonsLabs empty org, not linked from site/docs/X.
- Pending packet downto records the Pons v2 factory as DTF launchFactory; downto is not a census slug so it is not listed under possible_matches.
- node_modules absent in this worktree; `npm run validate` not run.
- Allowed path this run: this packet only. No content/ writes. No push.
