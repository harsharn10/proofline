---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: dontblink
name: dontblink
packet_tier: seed
as_of: 2026-09-03T02:25:00Z
prior_packet: null
supersedes: null
owned_slugs: [dontblink]
allowed_paths:
  - research/inbox/packets/dontblink/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: dontblink
  aliases: [Dontblink, "don't blink"]
  symbols: [BLINK]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://dontblink.community
  official_handle: "@dontblink_cto"
  repository: "NULL — no GitHub org or repository URL on dontblink.community HTML, the JS socials object, @dontblink_cto or @dontblinkfamily bios, or GitHub search this pass"
  possible_matches:
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired Airlock factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "dontblink Classic is a locked Uniswap v3 1% pool via PortalProxy 0x7a4E…d59c at dontblink.community / @dontblink_cto"
        - "No shared domain, handle or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "dontblink Classic mints straight into a locked Uniswap v3 pool; Pump Curve is one of four modes, not the only path"
        - "No shared domain, handle or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is @hoodfunfamily"
        - "dontblink current comms are @dontblink_cto on dontblink.community"
        - "No shared domain, handle or reproduced address"
    - slug: stonks-fun
      signals: [other]
      contrary_signals:
        - "Census Stonks.fun is @stonksdotfun"
        - "dontblink is PortalProxy 0x7a4E…d59c / $BLINK 0x7b63…b098"
        - "No shared domain, handle or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Census pools.trade is Uniswap Labs' v4 LiquidityLauncher at @pools_dot_fun / @TradePools"
        - "dontblink v2 Portal is independent PortalProxy 0x7a4E…d59c"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: [launch/bonding-curve]
  mechanism_tags: [launchpad, rwa, stock-paired, bonding-curve]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "PortalProxy 0x7a4E…d59c and $BLINK 0x7b63…b098 have non-empty code and verified source on chain 4663. Classic is a 1B-supply locked Uniswap v3 1% pool; stock-priced Classic against 194 Robinhood stock tokens is the first launch mode as of v2.18. Live site and @dontblink_cto cross-link; original @dontblinkfamily remains a separate signer. JS bundle portalImpl lags the EIP-1967 slot. [R-1] [R-2] [R-4] [R-11] [R-13] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-15, CLM-16], note: "" }

links:
  - { kind: site, url: "https://dontblink.community", authenticity: confirmed }
  - { kind: app, url: "https://dontblink.community/launch", authenticity: confirmed }
  - { kind: docs, url: "https://dontblink.community/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/dontblink_cto", authenticity: confirmed }
  - { kind: x, url: "https://x.com/dontblinkfamily", authenticity: unconfirmed }
  - { kind: discord, url: "https://discord.gg/pA9TggyjGN", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/dontblink_cto", authenticity: unconfirmed }
  - { kind: site, url: "https://dontblink.family", authenticity: conflicted }

deployments:
  - label: v2 PortalProxy
    role: factory
    address:
      value: "0x7a4EB7F99833178c6463184bd0D8d17b6FC2d59c"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-11, R-15, R-16, R-19]
  - label: DontblinkPortal (EIP-1967 implementation)
    role: implementation
    address:
      value: "0x2CdA8AD7FAB20614C60B5365a5801a190BEa27bD"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-11, R-12, R-16]
  - label: DontblinkPortal (JS bundle portalImpl)
    role: implementation
    address:
      value: "0xf539aEa1d19689B5349Bb051F5DB18a455351C9c"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-19]
  - label: $BLINK (dont blink)
    role: token
    address:
      value: "0x7b630F080807DF83908b4aDE46BA6396EE66b098"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-14, R-16, R-17, R-19]
  - label: V3LaunchpadGatedMax (v1 factory that created $BLINK)
    role: factory
    address:
      value: "0xF441cc979fa862f2674b9188A7b529caFd3ce204"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-14]
  - label: FairQueue
    role: other
    address:
      value: "0x7D6628e666EEA927C3bcFb38f83186523825706e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-19, R-22]
  - label: SoftQuotaRouter
    role: router
    address:
      value: "0x40cDc7da1F54C0cF0411Dc5f74326Df202aD4853"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-19, R-23]
  - label: Portal admin Safe
    role: admin
    address:
      value: "0xefB0b09c66CB66943c1D5Ce796f5f577070de46e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-19, R-25]

metrics:
  - { kind: volume_24h, value: 482965.87, currency: USD, as_of: 2026-09-03T02:12:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x7b630F080807DF83908b4aDE46BA6396EE66b098 pair 0x6E31…0daA BLINK/WETH Uniswap v3 volume.h24", class: claim, receipt_ids: [R-17] }
  - { kind: tvl, value: 311242.91, currency: USD, as_of: 2026-09-03T02:12:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x7b630F…b098 pair 0x6E31…0daA BLINK/WETH Uniswap v3 liquidity.usd", class: claim, receipt_ids: [R-17] }
  - { kind: market_cap, value: 2466926, currency: USD, as_of: 2026-09-03T02:12:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x7b630F…b098 pair 0x6E31…0daA marketCap", class: claim, receipt_ids: [R-17] }
  - { kind: holders, value: 3998, currency: null, as_of: 2026-09-03T02:15:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x7b630F…b098 holders_count", class: claim, receipt_ids: [R-13] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:14:00Z, receipt_ids: [R-16], result: "rpc.mainnet.chain.robinhood.com at block 0x329f04b (53080139): eth_getCode portal 669, cur impl 23685, JS impl 23441, FairQueue 10867, SoftQuotaRouter 6997, BLINK 2840, treasury 12120, portal deployer 0 bytes, BLINK factory 10125. EIP-1967 impl 0x2CdA8AD7…27bD admin 0xefB0b09c…e46e. portal owner() same Safe. Safe getThreshold 2; getOwners three EOAs 0x18fa…c730, 0x55e3…a253, 0xb49d…45D6. BLINK name dont blink / symbol BLINK / totalSupply 1e9*1e18." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:16:00Z, receipt_ids: [R-11, R-12, R-13, R-14, R-15, R-22, R-23, R-25], result: "Blockscout API v2: PortalProxy 0x7a4E…d59c is_verified true proxy_type eip1967 implementation DontblinkPortal 0x2CdA…27bD created 2026-08-16T13:26:48Z tx 0xc71db52c…f38c by 0x661520f9…56a4. $BLINK 0x7b63…b098 name dont blink symbol BLINK GatedMaxToken verified, created 2026-08-09T01:12:54Z via V3LaunchpadGatedMax.launch. Admin 0xefB0…e46e SafeProxy / SafeL2." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:18:00Z, receipt_ids: [R-1, R-2, R-4], result: "dontblink.community HTML twitter:site @dontblink_cto. @dontblink_cto bio website dontblink.community. Changelog: Follow @dontblink_cto. JS socials object xHandle dontblink_cto." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T02:12:00Z, receipt_ids: [R-17], result: "DexScreener BLINK 0x7b63…b098 robinhood Uniswap v3 pair 0x6E31…0daA quote WETH volume.h24 482965.87 liquidity.usd 311242.91 marketCap 2466926; websites include https://dontblink.community/ and socials x.com/dontblink_cto." }
  - { id: REP-5, method: other, checked_at: 2026-09-03T02:08:00Z, receipt_ids: [R-20], result: "dontblink.family and www.dontblink.family resolve to 0.0.0.0; HTTPS connect to :443 fails. dontblink.community resolves to GitHub Pages 185.199.108–111.153." }
  - { id: REP-6, method: document-scope, checked_at: 2026-09-03T02:10:00Z, receipt_ids: [R-3, R-19], result: "Shipped JS maps portal 0x7a4E…d59c, portalImpl 0xf539…1C9c, FairQueue, SoftQuotaRouter, admin Safe, deployer 0x6615…56a4; modes Classic Fair Launch / Pump Curve / Fair Drop (testing) / Celebrity Vault / Priced in a Stock; BLINK labeled the platform coin at 0x7b63…b098." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Classic: fixed 1B supply into a locked Uniswap v3 1% pool the same transaction; creators keep 50% of the 1% pool fee. Additional modes: Pump Curve, Fair Drop (JS status testing), Celebrity Vault. Stock-priced Classic pairs against any of 194 Robinhood stock tokens.", class: claim, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://dontblink.community", class: verified, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@dontblink_cto", class: verified, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x7a4EB7F99833178c6463184bd0D8d17b6FC2d59c", class: verified, observed_at: 2026-09-03T02:16:00Z, receipt_ids: [R-11, R-15, R-16, R-19], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7b630F080807DF83908b4aDE46BA6396EE66b098", class: verified, observed_at: 2026-09-03T02:16:00Z, receipt_ids: [R-13, R-14, R-16, R-17, R-19], reproduction_ids: [REP-1, REP-2, REP-4, REP-6], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:16:00Z, receipt_ids: [R-11, R-13, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: identity.handle, value: "@dontblinkfamily", class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-5, R-6, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.domain, value: "https://dontblink.family resolves to 0.0.0.0 and does not serve; @dontblinkfamily bio still lists it", class: verified, observed_at: 2026-09-03T02:08:00Z, receipt_ids: [R-5, R-20], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-9, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: relationship, value: "Distinct from LONG (app.long.xyz Airlock/Doppler v4 factory), Pons, hood.fun, Stonks.fun and pools.trade. PAIR and lunch are not census slugs and share no domain, handle or reproduced address with this packet.", class: claim, observed_at: 2026-09-03T02:20:00Z, receipt_ids: [R-1, R-4, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: identity.symbol, value: BLINK, class: verified, observed_at: 2026-09-03T02:14:00Z, receipt_ids: [R-13, R-16, R-17], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "DexScreener BLINK/WETH Uniswap v3 volume.h24 482965.87 USD, liquidity.usd 311242.91, marketCap 2466926 at 2026-09-03T02:12Z", class: verified, observed_at: 2026-09-03T02:12:00Z, receipt_ids: [R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Blockscout $BLINK holders_count 3998; total_supply 1000000000000000000000000000 (1e9 * 1e18)", class: verified, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-13, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.owner, value: "PortalProxy owner() and EIP-1967 admin slot = Safe 0xefB0b09c…e46e; getThreshold 2; getOwners EOAs 0x18fa…c730, 0x55e3…a253, 0xb49d…45D6. JS deployer 0x661520f9…56a4 created the proxy.", class: verified, observed_at: 2026-09-03T02:14:00Z, receipt_ids: [R-16, R-19, R-25], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-15, field: control.proxy, value: "Portal is EIP-1967 PortalProxy. Live implementation DontblinkPortal 0x2CdA…27bD. Shipped JS still lists portalImpl 0xf539…1C9c, which has code but is not the current slot.", class: verified, observed_at: 2026-09-03T02:16:00Z, receipt_ids: [R-11, R-12, R-16, R-19], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-16, field: communications.status, value: "Original @dontblinkfamily posted 2026-08-17/18 that comms move to @dontblink_cto and that the legacy account is an archive. Live site twitter:site is @dontblink_cto. Do not merge signers.", class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-4, R-5, R-6, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@dontblink_cto.role", value: project, class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@dontblink_cto.slug", value: dontblink, class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@dontblink_cto.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@dontblinkfamily.role", value: project, class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@dontblinkfamily.slug", value: dontblink, class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: "account.@dontblinkfamily.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-5, R-6, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@dontblinkfamily.note", value: "Original handle. Bio still lists dontblink.family (DNS 0.0.0.0 this pass). Posted 17–18 Aug 2026 that comms move to @dontblink_cto and that this account is an archive. Do not merge signers.", class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-5, R-6, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: security.audit, value: "No audit report URL was located on dontblink.community, /docs, /changelog, the X accounts, or the verified PortalProxy/GatedMaxToken pages this pass", class: unknown, observed_at: 2026-09-03T02:20:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: taxonomy.secondary-leaf, value: launch/bonding-curve, class: claim, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: deployment.address, value: "0x2CdA8AD7FAB20614C60B5365a5801a190BEa27bD", class: verified, observed_at: 2026-09-03T02:16:00Z, receipt_ids: [R-11, R-12, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-28, field: product.mechanism, value: "$BLINK is the platform coin in the shipped JS and on DexScreener (dontblink.community / @dontblink_cto). It was created 2026-08-09 via V3LaunchpadGatedMax.launch as GatedMaxToken (buy-gate plus 2% max-wallet), not through v2 PortalProxy.", class: verified, observed_at: 2026-09-03T02:16:00Z, receipt_ids: [R-13, R-14, R-17, R-19], reproduction_ids: [REP-2, REP-4, REP-6], supersedes: null }
  - { id: CLM-29, field: activity.status, value: "dontblink.community/data/ours.json at 2026-09-03T02:07:02Z lists 1102 tokens: v1 1044, instant 53, curve 3, queue 2. Top GeckoTerminal vols: BLINK/WETH, POWERPLAY/GME, GPU/NVDA.", class: claim, observed_at: 2026-09-03T02:07:00Z, receipt_ids: [R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: identity.name, value: dontblink, class: verified, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: identity.handle
    claim_ids: [CLM-3, CLM-7]
    material_effect: "Original @dontblinkfamily remains online with dontblink.family in the bio; live site and changelog name @dontblink_cto. Do not merge signers."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "Thesis Board is live on dontblink"
    summary: "@dontblink_cto posted Thesis Board: write a stock thesis first, then anyone can launch the token."
    occurred_at: 2026-09-02T16:55:02Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-2
    type: company
    title: "Stock-priced launches expanded to 194 RH stocks"
    summary: "@dontblink_cto posted that launches can be priced in any of 194 Robinhood tokenized stocks."
    occurred_at: 2026-09-02T05:10:34Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-3
    type: company
    title: "v2.18 is live with stock-priced launches first"
    summary: "@dontblink_cto posted v2.18 is live; changelog says stock-priced mode is first and was tested on mainnet."
    occurred_at: 2026-09-02T04:55:13Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-2, R-9]
  - id: EVT-4
    type: onchain
    title: "BLINK/WETH Uniswap v3 24h volume is $482,966"
    summary: "DexScreener robinhood Uniswap v3 BLINK/WETH 0x6E31…0daA volume.h24 482965.87 liquidity.usd 311242.91."
    occurred_at: 2026-09-03T02:12:00Z
    observed_at: 2026-09-03T02:12:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: company
    title: "@dontblinkfamily posted comms move to @dontblink_cto"
    summary: "Original handle posted that V2, treasury and governance updates will come from @dontblink_cto."
    occurred_at: 2026-08-18T04:35:48Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-7]
  - id: EVT-6
    type: onchain
    title: "PortalProxy deployed on Robinhood Chain"
    summary: "PortalProxy 0x7a4E…d59c created 2026-08-16T13:26:48Z; current implementation DontblinkPortal."
    occurred_at: 2026-08-16T13:26:48Z
    observed_at: 2026-09-03T02:16:00Z
    affected_fields: [deployment.address, lifecycle, control.proxy]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-11, R-15]
  - id: EVT-7
    type: onchain
    title: "$BLINK created through V3LaunchpadGatedMax"
    summary: "Tx 0xc5f7396b… called launch on V3LaunchpadGatedMax; token name dont blink / BLINK."
    occurred_at: 2026-08-09T01:12:54Z
    observed_at: 2026-09-03T02:16:00Z
    affected_fields: [deployment.address, identity.symbol, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13, R-14]

receipts:
  - { id: R-1, publisher: dontblink, title: "dontblink homepage", url: "https://dontblink.community/", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-9, CLM-10, CLM-17, CLM-25, CLM-30], excerpt: "title dontblink. meta description: dontblink is an independent token launchpad on Robinhood Chain. Not affiliated with Robinhood Markets, Inc. twitter:site @dontblink_cto. Rendered: New Price your token in any of 194 Robinhood stocks. Launch a token in one click. The pool locks itself the same second. You keep half of every trade's fee, forever." }
  - { id: R-2, publisher: dontblink, title: "What’s new · dontblink", url: "https://dontblink.community/changelog", published_at: 2026-09-02T00:00:00Z, accessed_at: 2026-09-03T02:09:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-3, EVT-3], excerpt: "Follow @dontblink_cto for the short version. v2.18 Sep 2, 2026 Latest: Price your token in any of 194 Robinhood stocks. Stock-priced launches went from three hand-picked tickers to the full universe: 194 Robinhood stock tokens. Stock-priced launch is now the first mode. v2 live: All four launch modes wired up through the v2 Portal: Classic, Pump Curve, Fair Drop and Celebrity Vault." }
  - { id: R-3, publisher: dontblink, title: "Launch page and shipped JS modes", url: "https://dontblink.community/launch", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-26], excerpt: "Launch a token · dontblink. twitter:site @dontblink_cto. JS XP modes: Priced in a Stock (live) — Classic launch whose pool is paired with a Robinhood tokenized stock; Classic Fair Launch (live) — Fixed 1B supply, single-sided Uniswap V3 pool at a 1% fee tier; Pump Curve (live); Fair Drop (testing); Celebrity Vault (live)." }
  - { id: R-4, publisher: "@dontblink_cto", title: "dontblink profile", url: "https://x.com/dontblink_cto", published_at: null, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-16, CLM-17, CLM-18, CLM-19, CLM-30], excerpt: "Display name dontblink, handle @dontblink_cto. Bio: don't blink. don't miss. $BLINK community takeover. Website dontblink.community. Joined July 2017. Followers 939." }
  - { id: R-5, publisher: "@dontblinkfamily", title: "dontblink original profile", url: "https://x.com/dontblinkfamily", published_at: null, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7, CLM-8, CLM-16, CLM-20, CLM-21, CLM-22, CLM-23], excerpt: "Display name dontblink, handle @dontblinkfamily. Bio: don't blink. don't miss. Website dontblink.family. Joined August 2026. Followers 3974." }
  - { id: R-6, publisher: "@dontblinkfamily", title: "CANONICAL COMMUNITY MIGRATION", url: "https://x.com/dontblinkfamily/status/2089571945381785833", published_at: 2026-08-18T04:35:48Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7, CLM-16, CLM-19, CLM-20, CLM-21, CLM-22, CLM-23, EVT-5], excerpt: "CANONICAL COMMUNITY MIGRATION dontblink now continues at @dontblink_cto. The original team has stepped back from active operations. All V2 releases, contracts, treasury reports, governance and support updates will now come from @dontblink_cto. This legacy account will remain online as an archive and migration relay. Website: https://dontblink.community Community updates: @dontblink_cto" }
  - { id: R-7, publisher: "@dontblinkfamily", title: "FINAL TRANSITION NOTICE", url: "https://x.com/dontblinkfamily/status/2089360431249059869", published_at: 2026-08-17T14:35:19Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-7, CLM-16, CLM-22, EVT-5], excerpt: "FINAL TRANSITION NOTICE. The original team is stepping back from day-to-day operations and has delegated communications to community maintainers. X: @dontblink_cto Website: dontblink.community. This account is now a read-only legacy archive and verification channel. The original $BLINK continues." }
  - { id: R-8, publisher: "@dontblink_cto", title: "Stock-priced launches just expanded", url: "https://x.com/dontblink_cto/status/2095016510674886940", published_at: 2026-09-02T05:10:34Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "Stock-priced launches just expanded. dontblink now supports token pricing across 194 Robinhood tokenized stocks. Not only major names like NVDA. Every stock token was checked on-chain before being added. Imitation Robinhood Token contracts were filtered out. Search by ticker. Launch directly in stock-priced mode." }
  - { id: R-9, publisher: "@dontblink_cto", title: "v2.18 is live", url: "https://x.com/dontblink_cto/status/2095012647234343092", published_at: 2026-09-02T04:55:13Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "v2.18 is live. Launch page is now cleaner, faster, and focused on stock-priced launches first. Full changelog https://dontblink.community/changelog/" }
  - { id: R-10, publisher: "@dontblink_cto", title: "Thesis Board is live on dontblink", url: "https://x.com/dontblink_cto/status/2095193797210857886", published_at: 2026-09-02T16:55:02Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Thesis Board is live on dontblink. Thesis first. Token after. Pick a stock. Write a thesis. A thesis can then be launched by anyone. Example $POWERPLAY x GME. Current fee model: 10% to the thesis author, 55% to the project operator / fund, 30% to dontblink, 5% to Doppler. Thesis author payouts are not fully contract-enforced yet." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x7a4E…d59c PortalProxy", url: "https://robinhoodchain.blockscout.com/address/0x7a4EB7F99833178c6463184bd0D8d17b6FC2d59c", published_at: null, accessed_at: 2026-09-03T02:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-10, CLM-15, CLM-25, CLM-27, EVT-6], excerpt: "hash 0x7a4EB7F99833178c6463184bd0D8d17b6FC2d59c name PortalProxy is_contract true is_verified true proxy_type eip1967 implementations DontblinkPortal 0x2CdA8AD7FAB20614C60B5365a5801a190BEa27bD creator 0x661520f9A96eE6b7CF33308906C5965cC98E56a4 creation_transaction_hash 0xc71db52cdbe91c4e8c37566a23c84a79cfcc381fe9240e87006140c6042df38c file_path src/v2/lib/PortalProxy.sol compiler v0.8.26." }
  - { id: R-12, publisher: Blockscout, title: "Address 0x2CdA…27bD DontblinkPortal", url: "https://robinhoodchain.blockscout.com/address/0x2CdA8AD7FAB20614C60B5365a5801a190BEa27bD", published_at: null, accessed_at: 2026-09-03T02:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-27], excerpt: "hash 0x2CdA8AD7FAB20614C60B5365a5801a190BEa27bD name DontblinkPortal is_contract true is_verified true creator 0x661520f9A96eE6b7CF33308906C5965cC98E56a4 creation_transaction_hash 0x7fc1177c87ed673ae428d79860854dfb7917cd8e7ce2aa012ee4eff383019f1f timestamp 2026-08-19T09:20:52Z." }
  - { id: R-13, publisher: Blockscout, title: "Token 0x7b63…b098 dont blink / BLINK", url: "https://robinhoodchain.blockscout.com/token/0x7b630F080807DF83908b4aDE46BA6396EE66b098", published_at: null, accessed_at: 2026-09-03T02:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-11, CLM-13, CLM-28, EVT-7], excerpt: "hash 0x7b630F080807DF83908b4aDE46BA6396EE66b098 name GatedMaxToken is_contract true is_verified true file_path src/v3/GatedMaxToken.sol. token name dont blink symbol BLINK type ERC-20 holders_count 3998 total_supply 1000000000000000000000000000 decimals 18 creator_address_hash 0xF441cc979fa862f2674b9188A7b529caFd3ce204 (V3LaunchpadGatedMax)." }
  - { id: R-14, publisher: Blockscout, title: "$BLINK create tx 0xc5f7396b…", url: "https://robinhoodchain.blockscout.com/tx/0xc5f7396bd69b3dee4d344a7cf838a2ed063844ab24acf98223cd273f710985ee", published_at: 2026-08-09T01:12:54Z, accessed_at: 2026-09-03T02:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-28, EVT-7], excerpt: "timestamp 2026-08-09T01:12:54.000000Z status ok method launch from 0x76f47AE7aac098d2e062C4bA03a4CfF6aC40208f to 0xF441cc979fa862f2674b9188A7b529caFd3ce204 name V3LaunchpadGatedMax block_number 31531528. Created token 0x7b630F080807DF83908b4aDE46BA6396EE66b098." }
  - { id: R-15, publisher: Blockscout, title: "PortalProxy create tx 0xc71db52c…", url: "https://robinhoodchain.blockscout.com/tx/0xc71db52cdbe91c4e8c37566a23c84a79cfcc381fe9240e87006140c6042df38c", published_at: 2026-08-16T13:26:48Z, accessed_at: 2026-09-03T02:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, EVT-6], excerpt: "timestamp 2026-08-16T13:26:48.000000Z status ok result success from 0x661520f9A96eE6b7CF33308906C5965cC98E56a4 block_number 38010592 created_contract 0x7a4EB7F99833178c6463184bd0D8d17b6FC2d59c name PortalProxy." }
  - { id: R-16, publisher: Robinhood Chain RPC, title: "eth_getCode, EIP-1967, owner, Safe getOwners", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:14:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-11, CLM-13, CLM-14, CLM-15, CLM-27], excerpt: "eth_blockNumber 0x329f04b (53080139). Portal code 669 bytes; impl 0x2CdA… 23685; JS impl 0xf539… 23441; BLINK 2840. EIP-1967 impl 0x2cda8ad7…27bd admin 0xefb0b09c…e46e. portal owner() 0xefb0…e46e. Safe getThreshold 2. getOwners 0x18faa054…c730, 0x55e31160…a253, 0xb49db12b…45d6 (all code 0x). BLINK name dont blink symbol BLINK totalSupply 1e27." }
  - { id: R-17, publisher: DexScreener, title: "BLINK token pairs on robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x7b630F080807DF83908b4aDE46BA6396EE66b098", published_at: null, accessed_at: 2026-09-03T02:12:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-5, CLM-11, CLM-12, CLM-28, EVT-4], excerpt: "baseToken address 0x7b630F080807DF83908b4aDE46BA6396EE66b098 name dont blink symbol BLINK. Uniswap v3 pair 0x6E31E066Aa531BCb11133B4E7fe95A1A1eD50daA quote WETH volume.h24 482965.87 liquidity.usd 311242.91 marketCap 2466926. websites https://dontblink.community/ socials https://x.com/dontblink_cto." }
  - { id: R-18, publisher: dontblink, title: "ours.json launch index", url: "https://dontblink.community/data/ours.json", published_at: 2026-09-03T02:07:02Z, accessed_at: 2026-09-03T02:07:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-29], excerpt: "at 1788401222332 (2026-09-03T02:07:02Z) scan v1/v2 53049151. tokens 1102. mode counts v1 1044 instant 53 curve 3 queue 2. Top gt.vol: BLINK v1 503602.94 BLINK / WETH 1%; POWERPLAY instant 131770.20 POWERPLAY / GME 1%; GPU instant 85253.59 GPU / NVDA 1%." }
  - { id: R-19, publisher: dontblink, title: "Shipped JS address map and platform coin", url: "https://dontblink.community/assets/index-BAKBkGPi.js", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-14, CLM-15, CLM-28], excerpt: "kt x https://x.com/dontblink_cto xHandle dontblink_cto. chainId 4663 status live deployer 0x661520f9…56a4 admin 0xefB0b09c…e46e portal 0x7a4EB7F9…d59c portalImpl 0xf539aEa1…1C9c fairQueue 0x7D6628e6…706e softQuotaRouter 0x40cDc7da…4853. BLINK address 0x7b630F08…b098 label BLINK — the platform coin." }
  - { id: R-20, publisher: DNS, title: "dontblink.family A record", url: "https://dontblink.family", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-8, CLM-23], excerpt: "getaddrinfo dontblink.family:443 and www.dontblink.family:443 return 0.0.0.0. HTTPS connect to port 443 fails. dontblink.community resolves to 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153." }
  - { id: R-21, publisher: dontblink, title: "How fees work", url: "https://dontblink.community/docs", published_at: null, accessed_at: 2026-09-03T02:11:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "title How fees work · dontblink. meta description: Every fee on dontblink, where it goes, and who can change it — fixed in contracts, verifiable on-chain. twitter:site @dontblink_cto." }
  - { id: R-22, publisher: Blockscout, title: "Address 0x7D66…706e FairQueue", url: "https://robinhoodchain.blockscout.com/address/0x7D6628e666EEA927C3bcFb38f83186523825706e", published_at: null, accessed_at: 2026-09-03T02:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x7D6628e666EEA927C3bcFb38f83186523825706e name FairQueue is_contract true is_verified true creator 0x661520f9A96eE6b7CF33308906C5965cC98E56a4." }
  - { id: R-23, publisher: Blockscout, title: "Address 0x40cD…4853 SoftQuotaRouter", url: "https://robinhoodchain.blockscout.com/address/0x40cDc7da1F54C0cF0411Dc5f74326Df202aD4853", published_at: null, accessed_at: 2026-09-03T02:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x40cDc7da1F54C0cF0411Dc5f74326Df202aD4853 name SoftQuotaRouter is_contract true is_verified true creator 0x661520f9A96eE6b7CF33308906C5965cC98E56a4." }
  - { id: R-24, publisher: Blockscout, title: "Address 0xF441…e204 V3LaunchpadGatedMax", url: "https://robinhoodchain.blockscout.com/address/0xF441cc979fa862f2674b9188A7b529caFd3ce204", published_at: null, accessed_at: 2026-09-03T02:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-28], excerpt: "hash 0xF441cc979fa862f2674b9188A7b529caFd3ce204 name V3LaunchpadGatedMax is_contract true is_verified true file_path src/v3/V3LaunchpadGatedMax.sol compiler v0.8.26. $BLINK create tx called launch on this contract." }
  - { id: R-25, publisher: Blockscout, title: "Address 0xefB0…e46e SafeProxy", url: "https://robinhoodchain.blockscout.com/address/0xefB0b09c66CB66943c1D5Ce796f5f577070de46e", published_at: null, accessed_at: 2026-09-03T02:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "hash 0xefB0b09c66CB66943c1D5Ce796f5f577070de46e name SafeProxy is_contract true is_verified true proxy_type master_copy implementations SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762. RPC getThreshold 2; three owners with empty code." }

gaps:
  - { priority: P0, question: "Does the 2-of-3 Safe 0xefB0…e46e hold upgrade rights on PortalProxy without a timelock?", checked: "owner() and EIP-1967 admin slot via RPC at block 53080139; Safe getThreshold 2; no timelock address in the JS map, 2026-09-03", next: "read DontblinkPortal verified source for upgrade/pause modifiers and any Delay/Timelock address" }
  - { priority: P1, question: "Where is the public repository the JS note says holds provenance and governance status?", checked: "dontblink.community HTML, JS socials object, both X bios, GitHub search dontblink portal, 2026-09-03", next: "follow GitHub Pages owner for dontblink.community and any README linked from /docs" }
  - { priority: P1, question: "Is Fair Drop still testing-only, and which reproduced txs used Pump Curve vs Celebrity Vault vs stock-priced Classic?", checked: "JS status testing on Fair Drop; ours.json mode counts instant 53 curve 3 queue 2; POWERPLAY/GME not matched to a create tx this pass", next: "eth_getLogs Launched on PortalProxy and match mode enum Instant/Fair Drop/Curve" }
  - { priority: P2, question: "Do discord.gg/pA9TggyjGN and t.me/dontblink_cto cross-link dontblink.community?", checked: "listed in JS socials and @dontblinkfamily migration post; profiles not opened, 2026-09-03", next: "open both profiles and compare the linked domain" }
---

# dontblink — research packet

## What it is

A multi-mode token launchpad on Robinhood Chain. Classic mints a 1B-supply token into a locked Uniswap v3 1% pool in the same transaction; Pump Curve, Fair Drop and Celebrity Vault are additional modes, and stock-priced Classic pairs against any of 194 Robinhood stock tokens. Creators keep 50% of the 1% pool fee. Current comms are @dontblink_cto on dontblink.community; the original handle @dontblinkfamily remains a separate signer. $BLINK is the platform token.

Themes: launchpad, rwa, memecoin

## Why it matters

Stock-priced Classic is the first launch mode as of v2.18: a new token can quote any of 194 Robinhood stock tokens instead of ETH. That is a different factory from LONG's Airlock path. The pad is live on chain 4663 behind PortalProxy.

## What could go wrong

PortalProxy is upgradeable. `owner()` and the EIP-1967 admin slot return a 2-of-3 Safe. The shipped JS still names an older DontblinkPortal implementation than the live slot. Original and current handles both remain online; they are separate signers.

## Product and mechanics

Classic is a 1B-supply single-sided Uniswap v3 1% pool with locked LP. Creators keep 50% of the 1% pool fee. Stock-priced Classic is the same pool quoted in a Robinhood stock token; v2.18 made that the first mode and named 194 verified stock tokens. [claim R-1 R-2 R-3]

Pump Curve, Fair Drop and Celebrity Vault are additional modes in the shipped JS. Fair Drop is marked testing. Thesis Board (2 Sep) is a stock-thesis layer whose author share is not fully contract-enforced yet. [claim R-3 R-10]

$BLINK is labeled the platform coin in the JS and on DexScreener. It was created 9 Aug 2026 through V3LaunchpadGatedMax.launch as GatedMaxToken, not through v2 PortalProxy. [verified R-13 R-14 R-19]

## Control and security

PortalProxy 0x7a4E…d59c is EIP-1967. Live implementation is DontblinkPortal 0x2CdA…27bD. `owner()` and the admin slot return Safe 0xefB0…e46e, threshold 2, three EOA owners. No timelock address was in the JS map this pass. [verified R-11 R-16 R-25]

No audit report URL was located on the site, /docs, changelog, or the verified source pages. [unknown]

## Team and provenance

dontblink.community sets twitter:site to @dontblink_cto. @dontblink_cto lists dontblink.community. Changelog tells readers to follow @dontblink_cto. [verified R-1 R-2 R-4]

@dontblinkfamily is the original handle. Its bio still lists dontblink.family, which resolves to 0.0.0.0 this pass. On 17–18 Aug 2026 it posted that comms move to @dontblink_cto and that the legacy account is an archive. handle-collision; do not merge signers. [claim R-5 R-6 R-20]

No public repository URL was located. Discord and Telegram URLs in the JS were not opened. [unknown]

## Economics and activity

BLINK/WETH Uniswap v3 24h volume is 482965.87 USD and liquidity.usd 311242.91 at 2026-09-03T02:12Z. marketCap 2466926. Holders 3998. [claim R-17] [verified R-13]

ours.json lists 1102 tokens (v1 1044, instant 53, curve 3, queue 2). Those GeckoTerminal volumes are the site's own index, not a pad TVL. [claim R-18]

## Material risks

- PortalProxy upgrades sit with a 2-of-3 Safe; no timelock was reproduced this pass. [verified R-16]
- Shipped JS portalImpl 0xf539… lags the live EIP-1967 implementation 0x2CdA…. [verified R-11 R-19]
- Original @dontblinkfamily and current @dontblink_cto both remain online; dontblink.family does not serve. [claim R-5 R-6] [verified R-20]
- Thesis author payouts are not fully contract-enforced yet, per the 2 Sep post. [claim R-10]
- No audit report was located this pass. [unknown]

## Verification passes

- Receipts: dontblink.community, /launch, /changelog, /docs, ours.json, the shipped JS, both X profiles and the cited posts, Blockscout portal/impl/token/create txs/FairQueue/SoftQuotaRouter/Safe, DexScreener, RPC, and family DNS were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-11 R-16 R-17]
- Numbers: 482965.87 is the BLINK/WETH Uniswap v3 24h volume, not an all-pads figure. Holders 3998 is the Blockscout token row. ours.json 1102 is the site's own token list. [claim R-17 R-18]
- Adversarial: the strongest contrary reading is that $BLINK 0x7b63… is a third-party listing. The shipped JS labels it the platform coin, DexScreener websites include dontblink.community and @dontblink_cto, and Blockscout name/symbol match; the create path is the v1 gated factory, not v2 PortalProxy. LONG remains a different factory. [inference R-13 R-17 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census has no dontblink row (49 slugs). content/census.yaml, docs/templates/research-packet-v2.md, schema/packet.schema.json, docs/research-system.md read before collection.
- Official: dontblink.community, /launch, /changelog, /docs, /fees, /data/ours.json, /assets/index-BAKBkGPi.js. twitter:site @dontblink_cto.
- DNS: dontblink.family and www.dontblink.family → 0.0.0.0; HTTPS connect fails. dontblink.community → GitHub Pages 185.199.108–111.153.
- Explorer: Blockscout api/v2 with Chrome User-Agent. PortalProxy, DontblinkPortal 0x2CdA…, JS impl 0xf539…, $BLINK, V3LaunchpadGatedMax, FairQueue, SoftQuotaRouter, Safe, create txs. RPC eth_getCode / eth_call / eth_getStorageAt at block 53080139.
- Third party: DexScreener latest/dex/tokens and token-pairs/v1/robinhood for 0x7b63…. Llama protocols search matched Blinkswap / Blink Perps only, not this pad.
- X: @dontblink_cto profile, 2 Sep Thesis Board, 194 stocks, v2.18; @dontblinkfamily profile, 17 Aug FINAL TRANSITION, 18 Aug CANONICAL COMMUNITY MIGRATION.
- Failed: POWERPLAY Blockscout txs endpoint HTTP 422; Discord and Telegram profiles not opened; no GitHub repo URL.
- Time: collection 2026-09-03T02:07Z–2026-09-03T02:25Z.
