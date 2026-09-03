---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: jobs
name: JOBS
packet_tier: seed
as_of: 2026-09-03T05:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [jobs]
allowed_paths:
  - research/inbox/packets/jobs/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Jobscoin
  aliases: [JOBS]
  symbols: [JOBS]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://jobscoinpons.com
  official_handle: "@Jobscoinpons"
  repository: "NULL — no GitHub org or repository URL on jobscoinpons.com, DexScreener, Gecko, Blockscout, or the @Jobscoinpons profile this pass"
  possible_matches:
    - slug: ap
      signals: [shared-address]
      contrary_signals:
        - "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 is the Apple • Robinhood Token the pair is quoted in; it is the census AP row, not a contract this name deployed"
        - "Jobscoin is the token launched against that quote asset; the two share no handle or domain"
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "JOBS is the ERC-20 Jobscoin at 0x88952E52…6453 created by PonsV2LaunchDeployer via PonsV2LaunchFactory.launchToken; entity_kind token, not protocol"
        - "Official handle is @Jobscoinpons, not @ponsdotfamily; official domain is jobscoinpons.com"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "JOBS launch tx 0x7ac38f9f…673b calls PonsV2LaunchFactory.launchToken, not LongLauncher.create"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot, an agent runtime"
        - "Gecko names the JOBS/AAPL pool dex pons-v2-dex, not bankr-robinhood"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "JOBS is 0x88952E52…6453 paired to AAPL 0xaF3D…93f9 via Pons v2"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve, fee-routing]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x88952E52…6453 is a verified PonsV2LauncherToken with non-empty code on 4663; PonsV2LaunchFactory.launchToken at 2026-08-31T09:55:11Z minted Jobscoin / JOBS onto bonding curve 0x4E943DDd…bcF1 quoted against Apple • Robinhood Token AAPL 0xaF3D…93f9. CurveCompleted at 2026-08-31T10:54:34Z migrated into Uniswap v4 pool 0xb1e49036…da99. AAPL is the quote rail. Distinct from packed ICOIN 0x5d6EF…1e18, AP/AAPL 0x69c68e4C…1e18, packed AAPLCAT 0x73A9999f…1e18, and packed AAPLDOG 0x06e52E5f…1e18. jobscoinpons.com and @Jobscoinpons pin this CA. [R-1] [R-4] [R-5] [R-7] [R-8] [R-9] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://jobscoinpons.com/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/Jobscoinpons", authenticity: confirmed }
  - { kind: app, url: "https://www.ponsfamily.com/launchpad/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453", authenticity: unconfirmed }

deployments:
  - label: JOBS token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-5, R-6]
  - label: PonsV2LaunchFactory
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-6]
  - label: PonsV2LaunchDeployer (token creator_address_hash)
    role: other
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-16]
  - label: PonsV2BondingCurve (JOBS launch curve)
    role: other
    address:
      value: "0x4E943DDd1fc47f69d56bc8Ed84948398c1cfbcF1"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-17]
  - label: V2LaunchLocker (site-linked liquidity locker)
    role: other
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:10:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-12, R-19]

metrics:
  - { kind: volume_24h, value: 261709.83, currency: USD, as_of: 2026-09-03T05:06:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453 top JOBS/AAPL v4 pair 0xb1e49036…da99 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 23501.15, currency: USD, as_of: 2026-09-03T05:06:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453 top JOBS/AAPL v4 pair 0xb1e49036…da99 liquidity.usd (that pair, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 83730, currency: USD, as_of: 2026-09-03T05:06:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453 top JOBS/AAPL v4 pair fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 570, currency: null, as_of: 2026-09-03T05:06:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453 holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32b2559 (53159257). Token 0x88952E52…6453 eth_getCode 3248 B prefix 60806040, not EIP-1167. name Jobscoin, symbol JOBS, decimals 18, totalSupply 1e27. owner() and factory() revert. Curve 0x4E943DDd…bcF1 code 10229 B; token() 0x88952E52…6453; factory() 0x7eD598Bc…EC7e; owner() reverts. Factory 0x7eD598Bc…EC7e code 24177 B; owner() 0x263ed295…019Dd. Deployer 0x3711ceA4…1A42 code 20906 B. AAPL 0xaF3D…93f9 code 283 B. Launch EOA 0xDFDFCaB3…8A69 code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-16, R-17, R-18], result: "Blockscout api/v2 token 0x88952E52…6453 name Jobscoin symbol JOBS holders_count 570 total_supply 1e27 type ERC-20. Address name PonsV2LauncherToken is_verified true proxy_type null creator_address_hash PonsV2LaunchDeployer 0x3711ceA4…1A42 creation_transaction_hash 0x7ac38f9f…673b. Factory 0x7eD598Bc…EC7e name PonsV2LaunchFactory is_verified true. launchToken tx 2026-08-31T09:55:11Z block 50773130 from 0xDFDFCaB3…8A69 to factory; decoded name Jobscoin symbol JOBS pairToken AAPL 0xaF3D…93f9 x.com/jobscoinpons. TokenLaunched token 0x88952E52…6453 curve 0x4E943DDd…bcF1 pairToken AAPL graduationThreshold 24.2e18. CurveCompleted tx 0xe314cae8…1b51 2026-08-31T10:54:34Z block 50808469; LaunchSwept token 0x88952E52…6453 quoteOut 24.2e18 tokenOut ~2.857e26." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:06:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0x88952E52…6453: 3 robinhood uniswap pairs; top JOBS/AAPL v4 0xb1e49036…da99 quote 0xaF3D…93f9 Apple • Robinhood Token / AAPL liquidity.usd 23501.15 volume.h24 261709.83 fdv/marketCap 83730 pairCreatedAt 1788173674000 (2026-08-31T10:54:34Z) info.websites jobscoinpons.com info.socials x.com/Jobscoinpons. Secondary same-token AAPL book 0xa36ef2a6…5d04 liq 571.8 vol 22395.24; JOBS/ETH 0xd91e1066…b667 liq 4.79 vol 0.9." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-8, R-9], result: "Gecko token GET 200: name Jobscoin symbol JOBS total_supply 1e27 volume_usd.h24 290731.53499602 fdv_usd 82565.4759 market_cap_usd null total_reserve_in_usd 13478.58. launchpad_details graduation_percentage 100 completed true completed_at 2026-08-31T10:54:34.000Z migrated_destination_pool_address 0xb1e49036…da99. Gecko pool GET 200: name JOBS / AAPL pool_created_at 2026-08-31T10:54:34Z volume_usd.h24 268265.192657943 reserve_in_usd 22811.5268 fdv_usd 83589.80 market_cap_usd null dex pons-v2-dex quote robinhood_0xaf3d76f1…93f9." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:07:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; AAPL row tokenName Apple • Robinhood Token deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663. Zero JOBS/Jobscoin hits." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T05:08:32Z, receipt_ids: [R-12, R-13], result: "jobscoinpons.com HTTP 200 title $JOBS — Jobscoin on Robinhood Chain · 0x8895…6453; meta description and body reprint CA 0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453; twitter:site @Jobscoinpons; links x.com/Jobscoinpons and ponsfamily.com/launchpad/0x88952E52…6453. @Jobscoinpons profile HTML contains jobscoinpons.com (4) and 0x88952E52 (1)." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchFactory.launchToken clones a 1e9-supply PonsV2LauncherToken onto a PonsV2BondingCurve quoted against factory-approved pairToken AAPL; CurveCompleted migrates remaining inventory into a locked Uniswap v4 JOBS/AAPL pool. launchToken from 0xDFDFCaB3…8A69 minted Jobscoin / JOBS as that launch.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-9], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Jobscoin", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "JOBS", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-5, R-12], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@Jobscoinpons — jobscoinpons.com twitter:site @Jobscoinpons and reprints CA 0x88952E52…6453; DexScreener socials list that handle; launchToken metadata included https://x.com/jobscoinpons; profile HTML contains jobscoinpons.com and the CA", class: verified, observed_at: 2026-09-03T05:08:32Z, receipt_ids: [R-7, R-12, R-13, R-4], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote AAPL 0xaF3D…93f9 is Apple • Robinhood Token in GET /rhj/assets (194 assets). AAPL is the quote rail, not the subject. Distinct from packed ICOIN 0x5d6EF…1e18, AP/AAPL token ap 0x69c68e4C…1e18, packed AAPLCAT 0x73A9999f…1e18, packed AAPLDOG 0x06e52E5f…1e18, and same-ticker Steve Jobs JOBS 0x404D3091…1E18 / Jobscoin JOBS 0x6f055C4c…1E18.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-11, R-18, R-20], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "JOBS/AAPL Uniswap v4 24h volume 261709.83 USD and liquidity.usd 23501.15 at 2026-09-03T05:06:00Z (DexScreener top pair 0xb1e49036…da99, not DexScreener all-pairs)", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko same pool volume_usd.h24 268265.192657943 reserve_in_usd 22811.5268 at 2026-09-03T05:08:00Z. Gecko token volume_usd.h24 290731.53499602 is all pools, not the AAPL book.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 570, class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source has no Ownable/pause and says deployer is immutable reference data with no privileges. Factory owner() 0x263ed295…019Dd (Pons Safe).", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "Launch EOA 0xDFDFCaB3F3253DB28A928a7feB4E9749EA768A69 called launchToken; TokenLaunched deployer field is that EOA. CurveCompleted recipient is the factory. Site-linked V2LaunchLocker 0x267444D0…4952 is verified.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-4, R-6, R-19], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9; venue is Uniswap v4 pool 0xb1e49036…da99 (DexScreener labels v4; Gecko dex pons-v2-dex) via PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-6, R-7, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "creator_address_hash is PonsV2LaunchDeployer 0x3711ceA4…1A42; launchToken target is PonsV2LaunchFactory 0x7eD598Bc…EC7e, not LongLauncher, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-1, R-3, R-4, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "jobscoinpons.com states Pons V2 is unaudited; no audit report URL was located on the site, DexScreener, Gecko, Blockscout, or X this pass", class: claim, observed_at: 2026-09-03T05:08:32Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "official-crosslink: jobscoinpons.com pins CA 0x88952E52…6453 and twitter:site @Jobscoinpons; @Jobscoinpons profile lists jobscoinpons.com", class: verified, observed_at: 2026-09-03T05:08:32Z, receipt_ids: [R-12, R-13], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko pool fdv_usd 83589.80; DexScreener fdv/marketCap 83730. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-7, R-11, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-22, field: identity.domain, value: "https://jobscoinpons.com", class: verified, observed_at: 2026-09-03T05:08:32Z, receipt_ids: [R-7, R-12], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-23, field: candidate, value: "jobs | JOBS | @Jobscoinpons | jobscoinpons.com — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-7, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: product.mechanism, value: "Site: 1.7% of trading fees routes to holders in AAPL Stock Tokens; distributions automatic and can be zero. Not reproduced on the hook this pass.", class: claim, observed_at: 2026-09-03T05:08:32Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "third-party-link: @vaultkoi75 posted robinhood-main-dex-nqf.netlify.app/vote/0x88952E52…6453 as a Robinhood Top 100 Leaderboard vote; domain is netlify.app, not robinhood.com", class: claim, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0x4E943DDd1fc47f69d56bc8Ed84948398c1cfbcF1", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-4, R-6, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "PonsV2LaunchFactory launchToken minted Jobscoin / JOBS"
    summary: "Tx 0x7ac38f9f…673b from 0xDFDFCaB3…8A69 at 2026-08-31T09:55:11Z; TokenLaunched curve 0x4E943DDd…bcF1 pairToken AAPL."
    occurred_at: 2026-08-31T09:55:11Z
    observed_at: 2026-09-03T05:07:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-2
    type: onchain
    title: "CurveCompleted graduated JOBS into Uniswap v4 JOBS/AAPL"
    summary: "Tx 0xe314cae8…1b51 at 2026-08-31T10:54:34Z; LaunchSwept quoteOut 24.2 AAPL and ~285.7M JOBS; Gecko launchpad_details completed true, pool 0xb1e49036…da99."
    occurred_at: 2026-08-31T10:54:34Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [product.mechanism, lifecycle, economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-9]
  - id: EVT-3
    type: onchain
    title: "Gecko JOBS/AAPL 24h volume $268.3k, reserve $22.8k"
    summary: "Gecko pool 0xb1e49036…da99 volume_usd.h24 268265 reserve_in_usd 22811 fdv_usd 83590 dex pons-v2-dex."
    occurred_at: 2026-09-03T05:08:00Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-4
    type: company
    title: "@Jobscoinpons posted that DexScreener lists the new website"
    summary: "@Jobscoinpons: Dexscreener is now updated with our new website. jobscoinpons.com pins the CA."
    occurred_at: 2026-09-02T14:43:13Z
    observed_at: 2026-09-03T05:04:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-5
    type: ct
    title: "X Latest posts named $JOBS/AAPL on Robinhood"
    summary: "@MurseterG posted $JOBS/AAPL on robinhood. @BenJamesDelosS1 compared $JOBS to packed $ICOIN on the AAPL rail."
    occurred_at: 2026-09-02T18:27:06Z
    observed_at: 2026-09-03T05:04:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21, R-22]
  - id: EVT-6
    type: ct
    title: "Netlify vote page used the JOBS CA"
    summary: "@vaultkoi75 posted robinhood-main-dex-nqf.netlify.app/vote/0x88952E52…6453. Flag third-party-link."
    occurred_at: 2026-09-03T02:51:42Z
    observed_at: 2026-09-03T05:04:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-15]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x88952E52…6453 Jobscoin / JOBS", url: "https://robinhoodchain.blockscout.com/address/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-16, CLM-23], excerpt: "hash 0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453 name PonsV2LauncherToken is_contract true is_verified true proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x7ac38f9f569e206343e06e1c5c47bf03480112ab8e9f3db30064f4539d20673b. token name Jobscoin symbol JOBS decimals 18 total_supply 1000000000000000000000000000 holders_count 570 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "JOBS token counters", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453/counters", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "token_holders_count 570 transfers_count 17826. api/v2/tokens name Jobscoin symbol JOBS decimals 18 total_supply 1000000000000000000000000000 holders_count 570 type ERC-20 reputation ok." }
  - { id: R-3, publisher: Blockscout, title: "PonsV2LaunchFactory 0x7eD598Bc…EC7e", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true proxy_type null." }
  - { id: R-4, publisher: Blockscout, title: "launchToken tx 0x7ac38f9f…673b", url: "https://robinhoodchain.blockscout.com/tx/0x7ac38f9f569e206343e06e1c5c47bf03480112ab8e9f3db30064f4539d20673b", published_at: 2026-08-31T09:55:11Z, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-8, CLM-14, CLM-16, CLM-26, EVT-1], excerpt: "timestamp 2026-08-31T09:55:11.000000Z status ok block 50773130 from 0xDFDFCaB3F3253DB28A928a7feB4E9749EA768A69 (is_contract false) to PonsV2LaunchFactory 0x7eD598Bc…EC7e method launchToken. decoded name Jobscoin symbol JOBS pairToken 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 x.com/jobscoinpons. TokenLaunched token 0x88952E52…6453 curve 0x4E943DDd…bcF1 graduationThreshold 24200000000000000000." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner on JOBS", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-17], excerpt: "eth_blockNumber 0x32b2559 (53159257). Token code 3248 B prefix 60806040 not EIP-1167. name Jobscoin symbol JOBS decimals 18 totalSupply 1e27. owner() and factory() revert. Curve token() 0x88952E52…6453 factory() 0x7eD598Bc…EC7e. Factory owner() 0x263ed295…019Dd. Launch EOA 0xDFDFCaB3…8A69 code 0x." }
  - { id: R-6, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0xe314cae8…1b51", url: "https://robinhoodchain.blockscout.com/tx/0xe314cae8e136415373a4b3030c1ecf4097917948e2fec1eb7a85c24a06641b51", published_at: 2026-08-31T10:54:34Z, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-15, CLM-26, EVT-2], excerpt: "timestamp 2026-08-31T10:54:34.000000Z block 50808469 status ok from 0x40E56fA7759C1Bdc67764fCd76c8Ee7Bc9486c08. CurveCompleted recipient factory 0x7eD598Bc…EC7e quoteOut 24200000000000000170 tokenOut 285714285714285714285714285. LaunchSwept token 0x88952E52…6453. PoolManager 0x8366a39C…0951 Swap in the same tx." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens JOBS", url: "https://api.dexscreener.com/latest/dex/tokens/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-10, CLM-15, CLM-17, CLM-20, CLM-21, CLM-22, CLM-23], excerpt: "3 robinhood uniswap pairs. Top pairAddress 0xb1e490364d477cb267ab5dd491c7956253c9d7fbee78104fb7a7dd0ea81ada99 labels v4 base Jobscoin / JOBS quote Apple • Robinhood Token / AAPL 0xaF3D76f1…93f9 liquidity.usd 23501.15 volume.h24 261709.83 fdv 83730 marketCap 83730 pairCreatedAt 1788173674000. info.websites https://jobscoinpons.com/ socials x.com/Jobscoinpons." }
  - { id: R-8, publisher: GeckoTerminal, title: "Jobscoin token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-11], excerpt: "GET 200. name Jobscoin symbol JOBS decimals 18 total_supply 1e27 price_usd 0.00008256547591 fdv_usd 82565.4759 market_cap_usd null volume_usd.h24 290731.53499602 total_reserve_in_usd 13478.58. launchpad_details graduation_percentage 100 completed true completed_at 2026-08-31T10:54:34.000Z migrated_destination_pool_address 0xb1e49036…da99." }
  - { id: R-9, publisher: GeckoTerminal, title: "JOBS/AAPL pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xb1e490364d477cb267ab5dd491c7956253c9d7fbee78104fb7a7dd0ea81ada99", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-11, CLM-15, CLM-20, EVT-2, EVT-3], excerpt: "GET 200. name JOBS / AAPL pool_created_at 2026-08-31T10:54:34Z fdv_usd 83589.79999 market_cap_usd null volume_usd.h24 268265.192657943 reserve_in_usd 22811.5268 transactions.h24 buys 590 sells 731. relationships.dex.id pons-v2-dex quote robinhood_0xaf3d76f1834a1d425780943c99ea8a608f8a93f9." }
  - { id: R-10, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453?tab=contract", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol. Comment: Fixed-supply ERC-20 deployed by PonsV2LaunchFactory; entire supply mints to the bonding curve; deployer is immutable reference data and confers no privileges. No Ownable/pause in source." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. AAPL tokenName Apple • Robinhood Token deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663 status ASSET_STATUS_ACTIVE. Zero JOBS/Jobscoin hits." }
  - { id: R-12, publisher: Jobscoin, title: "jobscoinpons.com", url: "https://jobscoinpons.com/", published_at: null, accessed_at: 2026-09-03T05:08:32Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-18, CLM-19, CLM-22, CLM-23, CLM-24], excerpt: "HTTP 200. title $JOBS — Jobscoin on Robinhood Chain · 0x8895…6453. meta description reprints CA 0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453 and 1.7% of trading fees routes to holders in AAPL Stock Tokens. twitter:site @Jobscoinpons. Body: Pons V2 is unaudited. The liquidity position is held by the Pons launch locker. The token contract is verified and has no owner, mint, or pause function." }
  - { id: R-13, publisher: "@Jobscoinpons", title: "Jobscoin profile", url: "https://x.com/Jobscoinpons", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19], excerpt: "Display name Jobscoin, handle @Jobscoinpons, bio Tired of your job? Jobscoin is the solution plus t.co link. Profile HTML contains jobscoinpons.com (4) and 0x88952E52 (1). Followers 330 this pass." }
  - { id: R-14, publisher: "@Jobscoinpons", title: "Dexscreener is now updated with our new website", url: "https://x.com/Jobscoinpons/status/2095160621872365575", published_at: 2026-09-02T14:43:13Z, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Dexscreener is now updated with our new website." }
  - { id: R-15, publisher: "@vaultkoi75", title: "JOBS vote netlify page", url: "https://x.com/vaultkoi75/status/2095343952492736707", published_at: 2026-09-03T02:51:42Z, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-25, EVT-6], excerpt: "Attention $JOBS Family! YOUR vote matters! Listing ID: 1986. https://robinhood-main-dex-nqf.netlify.app/vote/0x88952E52cDF3BB14015D9A6499eA3c7F0bEd6453 Flag third-party-link: netlify.app is not robinhood.com." }
  - { id: R-16, publisher: Blockscout, title: "PonsV2LaunchDeployer 0x3711ceA4…1A42", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-17, publisher: Blockscout, title: "PonsV2BondingCurve 0x4E943DDd…bcF1", url: "https://robinhoodchain.blockscout.com/address/0x4E943DDd1fc47f69d56bc8Ed84948398c1cfbcF1", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-26], excerpt: "hash 0x4E943DDd1fc47f69d56bc8Ed84948398c1cfbcF1 name PonsV2BondingCurve is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x7ac38f9f569e206343e06e1c5c47bf03480112ab8e9f3db30064f4539d20673b." }
  - { id: R-18, publisher: Blockscout, title: "AAPL 0xaF3D76f1…93f9", url: "https://robinhoodchain.blockscout.com/token/0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", published_at: null, accessed_at: 2026-09-03T05:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "api/v2/tokens name Apple • Robinhood Token symbol AAPL decimals 18 holders_count 61474 total_supply 14624363359480000000000." }
  - { id: R-19, publisher: Blockscout, title: "V2LaunchLocker 0x267444D0…4952", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true proxy_type null. Linked from jobscoinpons.com as the Pons launch locker." }
  - { id: R-20, publisher: DexScreener, title: "Search JOBS AAPL clones", url: "https://api.dexscreener.com/latest/dex/search?q=JOBS%20AAPL", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "Assigned pair is JOBS/AAPL 0xb1e49036…da99 token 0x88952E52…6453. Distinct robinhood JOBS rows: Steve Jobs JOBS 0x404D30910D040aFdcDDF05282566eDd074841E18; Jobscoin JOBS 0x6f055C4c9d43d68cba4c9dd84d59dECA335D1E18. Search also lists packed ICOIN/AAPL 0x5d6EF…1e18." }
  - { id: R-21, publisher: "@MurseterG", title: "$JOBS/AAPL on robinhood", url: "https://x.com/MurseterG/status/2095216967024271478", published_at: 2026-09-02T18:27:06Z, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "$JOBS/AAPL on robinhood. The only job you need! These pairs are going nuts. Day one." }
  - { id: R-22, publisher: "@BenJamesDelosS1", title: "$JOBS to FLIP $ICOIN", url: "https://x.com/BenJamesDelosS1/status/2095373256299848156", published_at: 2026-09-03T04:48:09Z, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "$JOBS to FLIP $ICOIN! Same narrative! Both earns you $AAPL while hodling!!" }

gaps:
  - { priority: P0, question: "Does a verified hook actually route 1.7% of JOBS/AAPL trades to holders in AAPL, and which contract holds the pot?", checked: "jobscoinpons.com states 1.7% fee share, automatic, can be zero; linked locker 0x267444D0…4952 and fee addresses 0x9170C8b7…45b / 0xd3AFEB2a…Ac9e were opened as V2LaunchLocker / BeaconProxy / V2FeeEscrow; no holder-distribution call reproduced this pass, 2026-09-03", next: "read V2FeeEscrow and the Uniswap v4 hook on the explorer and match a payday transfer" }
  - { priority: P1, question: "Is @jobcoinpons (1 follower, bio Welcome to your new job) operated with @Jobscoinpons or a separate handle?", checked: "X user search returned @Jobscoinpons (330 followers, jobscoinpons.com) and @jobcoinpons (1 follower); site twitter:site is @Jobscoinpons, 2026-09-03", next: "re-read both profiles for a CA pin" }
  - { priority: P1, question: "Can Pons v2 factory owner setters reach this live JOBS/AAPL book after graduation?", checked: "token owner() reverts; factory owner() is Pons Safe 0x263ed295…019Dd; site says locker holds LP; setter modifiers not re-read this pass, 2026-09-03", next: "read access modifiers on PonsV2LaunchFactory post-graduation in verified source" }
  - { priority: P2, question: "Which Gecko/DexScreener window printed the assignment lead of ~$30,316 liq / ~$271,330 vol?", checked: "Live DexScreener pair liq 23501.15 vol 261709.83; Gecko pool reserve 22811.53 vol 268265.19, 2026-09-03T05:08Z", next: "archive the pair if those prints return" }
---

# JOBS — research packet

## What it is

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against Apple • Robinhood Token (AAPL). PonsV2LaunchFactory.launchToken on 2026-08-31 minted Jobscoin (JOBS) onto a bonding curve, then CurveCompleted seeded the JOBS/AAPL book. Traders buy and sell JOBS against AAPL. jobscoinpons.com and @Jobscoinpons pin this contract.

Themes: memecoin, stock-paired:AAPL, rwa

## Why it matters

The JOBS/AAPL book is a live AAPL-quoted Pons v2 graduation, distinct from packed ICOIN, AP/AAPL, packed AAPLCAT, and packed AAPLDOG on the same rail. DexScreener printed about $262k of 24h volume and $23.5k liquidity on the top pair this pass. The site states a 1.7% AAPL holder fee share that was not reproduced on the hook.

## What could go wrong

USD liquidity on the JOBS/AAPL book counts both JOBS and AAPL. Same-ticker JOBS tokens exist at other addresses. A netlify vote URL used this CA. The 1.7% holder distribution is a site claim until a payday transfer is matched.

## Product and mechanics

PonsV2LaunchFactory.launchToken from EOA 0xDFDFCaB3…8A69 at 2026-08-31T09:55:11Z deployed PonsV2LauncherToken Jobscoin / JOBS, supply 1e9*1e18, onto PonsV2BondingCurve 0x4E943DDd…bcF1 with pairToken AAPL 0xaF3D…93f9. TokenLaunched names that curve and a 24.2 AAPL graduation threshold. creator_address_hash is PonsV2LaunchDeployer 0x3711ceA4…1A42. [verified R-1 R-4 R-5 R-16]

CurveCompleted / LaunchSwept in tx 0xe314cae8…1b51 at 2026-08-31T10:54:34Z sent 24.2 AAPL and ~285.7M JOBS to the factory and hit Uniswap v4 PoolManager 0x8366…0951. DexScreener labels the primary book Uniswap v4 JOBS/AAPL 0xb1e49036…da99. Gecko names the same pool JOBS / AAPL with dex pons-v2-dex and launchpad_details completed true at that timestamp. Secondary JOBS/AAPL 0xa36ef2a6…5d04 and JOBS/ETH books exist with far less liquidity. [verified R-6 R-7 R-9]

jobscoinpons.com states 1.7% of trading fees routes to holders in AAPL Stock Tokens, automatic and able to be zero. That split was not reproduced on a hook call this pass. [claim R-12]

## Control and security

token owner() reverts. Verified PonsV2LauncherToken source has no Ownable or pause and says deployer is reference data only. Factory owner() returns Pons Safe 0x263ed295…019Dd. Launch EOA 0xDFDFCaB3…8A69 has no code. V2LaunchLocker 0x267444D0…4952 is verified. [verified R-5 R-6 R-10 R-19]

jobscoinpons.com states Pons V2 is unaudited. No audit report URL was located this pass. [claim R-12]

## Team and provenance

jobscoinpons.com pins CA 0x88952E52…6453 and twitter:site @Jobscoinpons. @Jobscoinpons bio points at that domain; profile HTML contains the CA. DexScreener websites and socials match. launchToken metadata included https://x.com/jobscoinpons. No GitHub URL this pass. Flag third-party-link on the netlify vote URL. X user search also returned @jobcoinpons, a different handle. [verified R-7 R-12 R-13] [claim R-15]

## Economics and activity

JOBS/AAPL Uniswap v4 24h volume is 261709.83 USD and liquidity.usd is 23501.15 at 2026-09-03T05:06:00Z from DexScreener tokens. fdv/marketCap is 83730. [claim R-7]

Gecko pool volume_usd.h24 is 268265.19 and reserve_in_usd is 22811.53 at 2026-09-03T05:08:00Z. fdv_usd is 83589.80. Gecko token volume_usd.h24 290731.53 is all pools, not the AAPL book. Blockscout holders_count 570. Pair created 2026-08-31T10:54:34Z. [claim R-2 R-8 R-9]

Assignment lead of ~$30,316 liq / ~$271,330 vol was not reproduced at this as_of; live DexScreener liquidity is $23.5k. [claim R-7 R-9]

## Material risks

- Quote token AAPL 0xaF3D…93f9 is the Robinhood Stock Token rail; JOBS is not in GET /rhj/assets. [verified R-11 R-18]
- Pool USD reserve is JOBS plus AAPL, not a USDG or WETH backstop. [claim R-7 R-9]
- Same-ticker JOBS tokens trade on Robinhood at 0x404D3091…1E18 and 0x6f055C4c…1E18. [claim R-20]
- Holder fee share is a site claim; Pons V2 is described as unaudited. [claim R-12]
- Netlify vote page is a third-party-link. [claim R-15]

## Verification passes

- Receipts: Blockscout token/factory/deployer/curve/AAPL/locker and both launch and graduation txs, RPC name/symbol/owner/curve.token, DexScreener tokens and search, Gecko token (GET 200) and pool (GET 200), /rhj/assets, jobscoinpons.com, @Jobscoinpons profile and website post, and Latest X posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-11 R-12]
- Numbers: 261709.83 is the DexScreener JOBS/AAPL top-pair 24h volume, not the 290731.53 Gecko token all-pools figure. Reserve 22811.53 is the Gecko pool; DexScreener liquidity 23501.15 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this is packed ICOIN, AP/AAPL, packed AAPLCAT, packed AAPLDOG, or an official Apple product. ICOIN is 0x5d6EF…1e18 / @iCoinRH; AP is 0x69c68e4C…1e18; AAPLCAT is 0x73A9999f…1e18 / @AAPLCAT_; AAPLDOG is 0x06e52E5f…1e18 / @AppleDogRH; AAPL in /rhj/assets is the quote rail 0xaF3D…93f9; JOBS is a Pons v2 token at 0x88952E52…6453. [inference R-4 R-11 R-20]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no jobs / JOBS / Jobscoin / 0x88952E52…6453.
- GET `repos/harsharn10/proofline/contents/research/inbox/packets/jobs/WORK-20260903-grok-heavy-icarus-research.md?ref=grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research` HTTP 404, then seed.
- Explorer: Blockscout api/v2 search JOBS, token, address, counters, factory, deployer, curve, AAPL, locker, launchToken 0x7ac38f9f…673b, CurveCompleted 0xe314cae8…1b51, TokenLaunched / LaunchSwept logs. Chrome UA.
- RPC: eth_getCode/eth_call with Chrome UA at block 53159257.
- Aggregators: DexScreener latest/dex/tokens then search JOBS AAPL. Gecko token first GET 200 so Gecko was used; pool GET later 200; token/pools page hit 429.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, AAPL hit, 0 JOBS.
- Site: jobscoinpons.com HTTP 200; x.com/Jobscoinpons profile HTML.
- Social: X Latest $JOBS AAPL; from:Jobscoinpons; user search Jobscoinpons.
- Failed: Gecko token/pools HTTP 429 on first pool list; Blockscout search q=0x88952E52 returned 0 items (full address used instead); token factory() reverts (creator_address_hash / TokenLaunched used instead).
- Time: collection 2026-09-03T05:04Z–2026-09-03T05:12Z.
