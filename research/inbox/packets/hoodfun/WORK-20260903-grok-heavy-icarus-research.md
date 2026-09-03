---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: hoodfun
name: hood.fun
packet_tier: seed
as_of: 2026-09-03T03:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [hoodfun]
allowed_paths:
  - research/inbox/packets/hoodfun/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: hood.fun
  aliases: [hoodfun, "HOOD fun"]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://hood.fun
  official_handle: "@hoodfunfamily"
  repository: "NULL — no GitHub org or repository URL on hood.fun, the whitepaper, @hoodfunfamily, or @hooddotfun this pass"
  possible_matches:
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census Hookr is a Uniswap v4 hook marketplace at hookr.fun / @Hookrfun"
        - "hood.fun is a bonding-curve pad that the site and Bitquery say graduates into locked Uniswap v3"
        - "No shared domain, handle, or reproduced factory (HookrLaunchpadV5 0xa043caBE… vs Bitquery hood.fun 0x5fcc1df0…)"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily, a bonding-curve pad that graduates into Uniswap v4"
        - "hood.fun whitepaper and @hoodfunfamily bio name Uniswap v3 at goal, not v4"
        - "No shared domain, handle, or factory; $HFUN 0x01224f60… is a separate token CA, not this pad"
    - slug: swaphood
      signals: [other]
      contrary_signals:
        - "Census SwapHood is a native AMM at @SwapHoodFi with symbol HOOD"
        - "hood.fun is a bonding-curve launchpad at hood.fun"
        - "No shared domain, handle, or reproduced address"
    - slug: stonks-fun
      signals: [other]
      contrary_signals:
        - "Census Stonks.fun is @stonksdotfun, a different pad row"
        - "hood.fun official surfaces checked this pass are hood.fun, @hoodfunfamily, and @hooddotfun"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/bonding-curve
  secondary_leaves: []
  mechanism_tags: [bonding-curve, launchpad, amm]
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Bitquery and Mobula name factory 0x5fcc1df0…452c as hood.fun (previous gen 0x6a63d96e…b33d). RPC on 4663 returned non-empty code, nonce 10576, and owner() 0xb3f3…700d. DexScreener search of both factory addresses returned 0 pairs; no ≥$25k pair was attributed to this pad. Census handle @hoodfunfamily last posted coming soon on 31 Jul 2026; the live site names @hooddotfun. Distinct from Hookr. Keep announced until a ≥$25k pair is reproduced. [R-8] [R-9] [R-10] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-16], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-3, CLM-12, CLM-18], note: "" }

links:
  - { kind: site, url: "https://hood.fun", authenticity: unconfirmed }
  - { kind: app, url: "https://hood.fun/create", authenticity: unconfirmed }
  - { kind: whitepaper, url: "https://hood.fun/whitepaper", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/hoodfunfamily", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/hooddotfun", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/hooddotfun", authenticity: unconfirmed }

deployments:
  - label: Launchpad factory (Bitquery current)
    role: factory
    address:
      value: "0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-8, R-9, R-10, R-11]
  - label: Launchpad factory (Bitquery previous generation)
    role: factory
    address:
      value: "0x6a63d96ef77ae569fcb85934cf1bd1ec7fe9b33d"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-8, R-10]
  - label: Platform (Mobula table)
    role: other
    address:
      value: "0xc6a2941b962fb667786d7f4b97f7f965d6f0a4f8"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-9, R-10]
  - label: owner() of current factory, previous factory, and Mobula platform
    role: admin
    address:
      value: "0xb3f3b54e11217f4f73e7a766b7caa187390d700d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-10]

metrics:
  - { kind: tvl, value: "NULL — DexScreener search of factory 0x5fcc…452c and 0x6a63…b33d returned 0 pairs; api.llama.fi/protocol/hoodfun returned Protocol not found HTTP 400; no ≥$25k pair attributed to this pad", currency: null, as_of: 2026-09-03T03:10:00Z, window: point, method: "api.dexscreener.com/latest/dex/search q=0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c and q=0x6a63d96ef77ae569fcb85934cf1bd1ec7fe9b33d; api.llama.fi/protocol/hoodfun", class: claim, receipt_ids: [R-16, R-17] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:48:43Z, receipt_ids: [R-10, R-11], result: "eth_getCode 0x5fcc1df0…452c 20518 bytes; eth_getTransactionCount nonce 10576 (0x2950); balance 4.403209 ETH. Blockscout address page title returned; API v2 was Cloudflare-challenged." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:48:43Z, receipt_ids: [R-10], result: "eth_getCode 0x6a63d96e…b33d 19734 bytes; nonce 86 (0x56); balance 0.999412 ETH. eth_getCode 0xc6a2941b…a4f8 3762 bytes; nonce 3597." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:10:00Z, receipt_ids: [R-10], result: "owner() on 0x5fcc…452c, 0x6a63…b33d and 0xc6a294…a4f8 all returned 0xb3f3b54e11217f4f73e7a766b7caa187390d700d. pendingOwner() on the current factory was the zero address. eth_getCode on the owner 171 bytes starting 0x6080604052 with selector a619486e (Gnosis Safe masterCopy). eth_blockNumber 0x329f535 (53081397)." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-6, R-7, R-18, R-19], result: "hood.fun twitter:site and twitter:creator are @hooddotfun; schema.org sameAs lists x.com/hooddotfun and t.me/hooddotfun. @hooddotfun posts link https://hood.fun/. @hoodfunfamily is not named on the site HTML this pass. Telegram og:title Hood.fun." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T02:50:00Z, receipt_ids: [R-16, R-17], result: "DexScreener search q=0x5fcc1df0…452c pairs 0; q=0x6a63d96e…b33d pairs 0. api.llama.fi/protocol/hoodfun and protocol/hood-fun both Protocol not found HTTP 400. Search q=hoodfun returned HOODFUNDME pairs (unrelated ticker) with liquidity.usd at most 21082.08." }
  - { id: REP-6, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:48:43Z, receipt_ids: [R-22], result: "eth_getCode 0x01224f6012e02ba6d4602613c638c5b1d428b609 5274 bytes, nonce 1. DexScreener token-pairs/v1/robinhood/0x01224f60… returned []." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "One transaction deploys a token onto a constant-product bonding curve with virtual reserves; default 1B supply, 80% on the curve and 20% reserved for a 1% Uniswap v3 pool at graduation; ~6.5 ETH raise / ~26.9 ETH graduation market cap per the whitepaper. No presale and no team allocation per @hoodfunfamily and the site.", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-2, R-6, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.handle, value: "@hoodfunfamily", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@hooddotfun", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-6, R-18, R-19], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: identity.domain, value: "https://hood.fun", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-6, R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c", class: verified, observed_at: 2026-09-03T02:48:43Z, receipt_ids: [R-8, R-9, R-10, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x6a63d96ef77ae569fcb85934cf1bd1ec7fe9b33d", class: verified, observed_at: 2026-09-03T02:48:43Z, receipt_ids: [R-8, R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: announced, class: claim, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-2, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/bonding-curve, class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0xb3f3b54e11217f4f73e7a766b7caa187390d700d", class: verified, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: relationship, value: "Distinct from Hookr: different handle, domain, and factory. Hookr is a Uniswap v4 hook marketplace; hood.fun is a bonding-curve pad into locked Uniswap v3.", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-6, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: relationship, value: "$HFUN 0x01224f6012e02ba6d4602613c638c5b1d428b609 has 5274-byte code on 4663; DexScreener returned no pairs. Desk fill treated it as a Pons graduation, not this pad. Flag ca-collision on ticker-only HFUN vs hood.fun.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-22], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "No ≥$25k live pair attributed to factory 0x5fcc…452c or 0x6a63…b33d this pass. DexScreener factory searches returned 0 pairs.", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-16], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-13, field: "account.@hoodfunfamily.official", value: "Census handle. Bio: Fair-launch tokens on Robinhood Chain. One tx → bonding curve → locked Uniswap v3 at goal. No presale. No team allocation. Flag unconfirmed-official: hood.fun twitter:site is @hooddotfun, not this handle.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: "account.@hooddotfun.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-6, R-18], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "Create page states contracts are fork-tested and being audited; whitepaper names a 2-of-3 Gnosis Safe owner. No audit report URL was located on the site, whitepaper, or either X account this pass.", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-6, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: identity.alias, value: hood.fun, class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: product.mechanism, value: "Whitepaper: 1% curve fee split 80% creator / 20% protocol; migration fee 0.05 ETH + 3% of raise + 0.5 ETH protocol; post-graduation 1% Uniswap v3 fee, ETH side 80/20, token side burned; locker has no withdraw. Create page also offers community-coin and stock-paired graduation options.", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-7, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: control.timelock, value: "Whitepaper: protocol owner can propose a new migrator only behind a 7-day public timelock and cannot touch curve reserves, user balances, or locked liquidity. Not eth_called this pass.", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: control.privileged-role, value: "Whitepaper: only privileged role is a 2-of-3 Gnosis Safe. RPC owner() 0xb3f3…700d has 171-byte code with Safe masterCopy selector. Threshold not eth_called.", class: inference, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [R-7, R-10], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "api.llama.fi/protocol/hoodfun Protocol not found HTTP 400", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-17], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xc6a2941b962fb667786d7f4b97f7f965d6f0a4f8", class: verified, observed_at: 2026-09-03T02:48:43Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-23, field: "account.@hoodfunfamily.slug", value: hoodfun, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@hoodfunfamily.role", value: project, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "Last located @hoodfunfamily post is the 3 Aug 2026 reply on the 31 Jul coming-soon thread. @hooddotfun posted gm we are back on 30 Aug 2026.", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-4, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: "account.@hooddotfun.role", value: project, class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-6, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: identity.repository, value: "NULL — no repository URL on hood.fun, the whitepaper, @hoodfunfamily, or @hooddotfun this pass", class: unknown, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: identity.handle
    claim_ids: [CLM-2, CLM-3]
    material_effect: "Census assigned @hoodfunfamily; hood.fun names @hooddotfun as twitter:site and sameAs. Which handle is official for this slug is open."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "RPC: Bitquery hood.fun factory has code, nonce 10576"
    summary: "Factory 0x5fcc…452c: 20518-byte code, nonce 10576, 4.40 ETH. DexScreener listed no pair for it."
    occurred_at: 2026-09-03T02:48:43Z
    observed_at: 2026-09-03T02:48:43Z
    affected_fields: [deployment.address, activity.status, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10, R-16]
  - id: EVT-2
    type: company
    title: "@hooddotfun posts gm we are back"
    summary: "@hooddotfun posted gm we are back on 30 Aug 2026. The hood.fun site names this handle."
    occurred_at: 2026-08-30T20:29:59Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-3
    type: ct
    title: "openpump lists hoodfun among four chain-4663 pads"
    summary: "@openpumpio listed PONS v1+v2, poolstrade, the odyssey, and hoodfun as pads on chain 4663."
    occurred_at: 2026-08-29T17:33:54Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-4
    type: company
    title: "@hooddotfun posts hood.fun is built for those moments"
    summary: "@hooddotfun posted https://hood.fun/ with launch fast / trade faster copy on 4 Aug 2026."
    occurred_at: 2026-08-04T07:19:07Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-5
    type: company
    title: "@hoodfunfamily replies on the coming-soon thread"
    summary: "@hoodfunfamily replied yes please on 3 Aug 2026. No later post from this handle was located."
    occurred_at: 2026-08-03T19:32:03Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-6
    type: company
    title: "@hoodfunfamily posts hoodfun coming soon"
    summary: "@hoodfunfamily posted fair launches coming: one tx onto a bonding curve, no presale, no team allocation."
    occurred_at: 2026-07-31T20:30:31Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [lifecycle, product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-2]
  - id: EVT-7
    type: company
    title: "@hoodfunfamily posts bonding-curve launchpad teaser"
    summary: "@hoodfunfamily posted fair launches, bonding curve, permanent LP locks, and Uniswap V3 migration."
    occurred_at: 2026-07-23T10:09:03Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-3]

receipts:
  - { id: R-1, publisher: "@hoodfunfamily", title: "hoodfun profile", url: "https://x.com/hoodfunfamily", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-1, CLM-2, CLM-8, CLM-13, CLM-16, CLM-23, CLM-24], excerpt: "Display name hoodfun, handle @hoodfunfamily. Bio: Fair-launch tokens on Robinhood Chain. One tx → bonding curve → locked Uniswap v3 at goal. No presale. No team allocation. Followers 1097. Blue verified." }
  - { id: R-2, publisher: "@hoodfunfamily", title: "hoodfun — coming soon", url: "https://x.com/hoodfunfamily/status/2083289225672486928", published_at: 2026-07-31T20:30:31Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-1, CLM-2, CLM-7, CLM-25, EVT-6], excerpt: "Fair launches are coming to Robinhood Chain. One tx deploys your token onto a bonding curve. No presale. No team allocation. hoodfun — coming soon." }
  - { id: R-3, publisher: "@hoodfunfamily", title: "Something big is landing soon", url: "https://x.com/hoodfunfamily/status/2080233724730581172", published_at: 2026-07-23T10:09:03Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-1, EVT-7], excerpt: "A premium Launchpad experience built for traders, creators, and communities. Fair launches. Bonding curve mechanics. Permanent LP locks. Seamless migration to Uniswap V3. The countdown begins." }
  - { id: R-4, publisher: "@hoodfunfamily", title: "yes please (reply)", url: "https://x.com/hoodfunfamily/status/2084361675734741424", published_at: 2026-08-03T19:32:03Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-25, EVT-5], excerpt: "yes please. Conversation ID 2083289225672486928 (the 31 Jul coming-soon post). Views 31." }
  - { id: R-5, publisher: "@openpumpio", title: "Every launchpad on chain 4663", url: "https://x.com/openpumpio/status/2093754027578155471", published_at: 2026-08-29T17:33:54Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Every launchpad on chain 4663 among: PONS (v1 +v2) poolstrade (uniswap v4) the odyssey (instant + curve) hoodfun" }
  - { id: R-6, publisher: hood.fun, title: "hood.fun home", url: "https://hood.fun/", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-1, CLM-3, CLM-4, CLM-10, CLM-13, CLM-14, CLM-16, CLM-17, CLM-26], excerpt: "title hood.fun — Launch & Trade Coins on Robinhood Chain. twitter:site @hooddotfun twitter:creator @hooddotfun. og:description: hood.fun is the memecoin launchpad on Robinhood Chain. Launch a coin in seconds on a fair bonding curve, auto-migrate to a locked Uniswap v3 pool. schema.org sameAs https://x.com/hooddotfun https://t.me/hooddotfun. contact@hood.fun." }
  - { id: R-7, publisher: hood.fun, title: "hood.fun whitepaper", url: "https://hood.fun/whitepaper", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: whitepaper, authority: primary, authenticity: unconfirmed, supports: [CLM-1, CLM-8, CLM-18, CLM-19, CLM-20], excerpt: "Default 1B supply; 80% sold on the curve, 20% paired on Uniswap at graduation; virtual ETH seed 2.81 ETH; raise ~6.5 ETH; graduation market cap ~26.9 ETH. Trade fee 1% flat, creator 80% / protocol 20%. Protocol owner is a 2-of-3 Gnosis Safe; new migrator behind a 7-day public timelock; locker has no withdraw function." }
  - { id: R-8, publisher: Bitquery, title: "Robinhood Meme Coin Launches API — hood.fun", url: "https://docs.bitquery.io/docs/blockchain/robinhood/robinhood-meme-coin-launches/", published_at: null, accessed_at: 2026-09-03T02:45:00Z, kind: docs, authority: aggregator, authenticity: unconfirmed, supports: [CLM-5, CLM-6, CLM-8, CLM-10], excerpt: "hood.fun is the premier fair-launch memecoin launchpad on the Robinhood network. Every token launches with a fixed 1 billion supply on a bonding curve. The current hood.fun launch contract is 0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c. The previous generation, 0x6a63d96ef77ae569fcb85934cf1bd1ec7fe9b33d, still has tokens trading." }
  - { id: R-9, publisher: Mobula, title: "Hood.fun Launchpad Integration on Robinhood Chain", url: "https://docs.mobula.io/almanac/robinhood-launchpads/hoodfun.md", published_at: null, accessed_at: 2026-09-03T02:45:00Z, kind: docs, authority: aggregator, authenticity: unconfirmed, supports: [CLM-5, CLM-22], excerpt: "Launchpad 0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c. Platform 0xc6a2941b962fb667786d7f4b97f7f965d6f0a4f8. V3 factory 0x1f7d7550b1b028f7571e69a784071f0205fd2efa. WETH 0x0bd7d308f8e1639fab988df18a8011f41eacad73. Classification: custom bonding curve before graduation, then Uniswap v3-like." }
  - { id: R-10, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() hood.fun factories", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-9, CLM-16, CLM-20, CLM-22, EVT-1], excerpt: "eth_blockNumber 0x329e645 then 0x329f535 (53081397). 0x5fcc…452c code 20518 B nonce 10576 bal 4.403209 ETH. 0x6a63…b33d code 19734 B nonce 86 bal 0.999412 ETH. 0xc6a294…a4f8 code 3762 B nonce 3597. owner() all three = 0xb3f3b54e11217f4f73e7a766b7caa187390d700d. Owner code 171 B, selector a619486e." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c", url: "https://robinhoodchain.blockscout.com/address/0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: unconfirmed, supports: [CLM-5, EVT-1], excerpt: "Page title: Robinhood Chain address details for 0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c | Blockscout. API v2 returned Cloudflare challenge HTML this pass; explorer_source_verified left null." }
  - { id: R-12, publisher: hood.fun, title: "Launch a Coin", url: "https://hood.fun/create", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-15, CLM-18], excerpt: "Create a coin. Rewards: Community coin / Stock rewards / Fair launch. Anti-snipe. 2% max per wallet. Pair with a stock. Custom supply Standard is 1 billion. Deploys a real coin on Robinhood Chain. Contracts fork-tested + being audited. Footer @hooddotfun on X t.me/hooddotfun." }
  - { id: R-13, publisher: hood.fun, title: "Terms of Use", url: "https://hood.fun/terms", published_at: 2026-07-16T00:00:00Z, accessed_at: 2026-09-03T02:55:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-4], excerpt: "Terms of Use Version 1 · Effective: July 16, 2026. hood.fun is a web interface for interacting with permissionless smart contracts deployed on Robinhood Chain (the Protocol). The Interface does not custody funds." }
  - { id: R-14, publisher: Telegram, title: "t.me/hooddotfun", url: "https://t.me/hooddotfun", published_at: null, accessed_at: 2026-09-03T03:12:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-3], excerpt: "HTTP 200. og:title Hood.fun. og:description You can view and join @hooddotfun right away." }
  - { id: R-15, publisher: "@hooddotfun", title: "gm we are back", url: "https://x.com/hooddotfun/status/2094160727292477761", published_at: 2026-08-30T20:29:59Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-25, EVT-2], excerpt: "gm we are back. Author HOOD @hooddotfun. Bio: Hood is the official launchpad for the Robinhood chain on the EVM network." }
  - { id: R-16, publisher: DexScreener, title: "Search factory 0x5fcc1df0…452c", url: "https://api.dexscreener.com/latest/dex/search?q=0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-12, EVT-1], excerpt: "schemaVersion present; pairs []. Search q=0x6a63d96ef77ae569fcb85934cf1bd1ec7fe9b33d also pairs []. No ≥$25k pair was attached to either factory address this pass." }
  - { id: R-17, publisher: DefiLlama, title: "protocol/hoodfun", url: "https://api.llama.fi/protocol/hoodfun", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-21], excerpt: "HTTP 400 Protocol not found. Same body for https://api.llama.fi/protocol/hood-fun. Llama protocols list had no hoodfun / hood.fun slug." }
  - { id: R-18, publisher: "@hooddotfun", title: "hood.fun is built for those moments", url: "https://x.com/hooddotfun/status/2084539615751401793", published_at: 2026-08-04T07:19:07Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-3, CLM-4, CLM-14, CLM-26, EVT-4], excerpt: "nothing beats seeing a chart go from “what is this?” to “why didn’t i buy?” https://hood.fun/ is built for those moments. launch fast. trade faster. let the market decide." }
  - { id: R-19, publisher: "@hooddotfun", title: "Robinhood Chain has hood.fun", url: "https://x.com/hooddotfun/status/2081526989773492542", published_at: 2026-07-26T23:48:01Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-3, CLM-4], excerpt: "Every chain has its moment. Ethereum had ICOs. Solana had https://pump.fun/explore Robinhood Chain has https://hood.fun/ You’re still early." }
  - { id: R-20, publisher: DexScreener, title: "Search hoodfun ticker hits", url: "https://api.dexscreener.com/latest/dex/search?q=hoodfun", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12], excerpt: "13 pairs, mostly HOODFUNDME on robinhood uniswap. Highest liquidity.usd among those hits 21082.08 (HOODFUNDME/AI). Not matched to factory 0x5fcc… or 0x6a63…. Ticker-only collision with the pad name." }
  - { id: R-21, publisher: "@hooddotfun", title: "HOOD profile", url: "https://x.com/hooddotfun", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-3, CLM-14], excerpt: "Display name HOOD, handle @hooddotfun. Bio: Hood is the official launchpad for the Robinhood chain on the EVM network. Followers 3969. Blue verified. Site HTML names this handle; census row names @hoodfunfamily. Flag handle-collision." }
  - { id: R-22, publisher: Robinhood Chain RPC, title: "eth_getCode $HFUN 0x01224f60…", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:48:43Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "eth_getCode 0x01224f6012e02ba6d4602613c638c5b1d428b609 5274 bytes; nonce 1; balance 0. DexScreener token-pairs/v1/robinhood/0x01224f6012e02ba6d4602613c638c5b1d428b609 returned []. Intake treated this CA as a Pons graduation, not the hood.fun pad." }

gaps:
  - { priority: P0, question: "Which handle is official for slug hoodfun: census @hoodfunfamily or site @hooddotfun?", checked: "hood.fun twitter:site/@hooddotfun sameAs; @hooddotfun posts hood.fun; @hoodfunfamily bio matches the product and last posted coming soon 31 Jul; no bidirectional link from @hoodfunfamily to the domain, 2026-09-03", next: "wait for a controller identity ruling; do not merge the handles" }
  - { priority: P0, question: "Which tokens did factory 0x5fcc…452c create, and does any graduated pair have liquidity ≥ $25k?", checked: "eth_getLogs TokenCreated/Graduated and unfiltered logs on 0x5fcc… returned []; DexScreener factory search pairs 0; frontend JS chunks did not embed 0x5fcc…, 2026-09-03", next: "query Bitquery IDE mint-transfer query for Transaction.To 0x5fcc… then DexScreener each Currency.SmartContract" }
  - { priority: P1, question: "Is owner 0xb3f3…700d the 2-of-3 Safe the whitepaper names, and what is getThreshold / getOwners?", checked: "owner() 0xb3f3…700d; 171-byte code with a619486e; threshold not eth_called; Blockscout API Cloudflare-blocked", next: "eth_call getThreshold/getOwners and read Blockscout name once the explorer is reachable" }
  - { priority: P1, question: "Is there an audit report whose scope matches factory 0x5fcc…452c?", checked: "create page 'being audited'; whitepaper, site, both X accounts, 2026-09-03; no report URL", next: "record any published report as a claim with the exact scope" }
  - { priority: P2, question: "Does previous-gen 0x6a63…b33d still have tokens trading, as Bitquery states?", checked: "RPC nonce 86 and 0.999412 ETH; DexScreener search of that address pairs 0", next: "run the Bitquery previous-gen mint query with dataset combined and price the resulting tokens" }
---

# hood.fun — research packet

## What it is

A bonding-curve launchpad on Robinhood Chain. One transaction deploys a token onto a constant-product curve; at the raise goal liquidity migrates into a locked Uniswap v3 pool. Users launch or buy from the hood.fun interface. The assigned handle is @hoodfunfamily; the live site names @hooddotfun.

Themes: launchpad, memecoin, rwa

## Why it matters

Bitquery lists this factory beside Pons, Flap, and Bankr as a Robinhood meme-launch detector. The product is a v3 bonding-curve pad, not Hookr's v4 hook marketplace. Until a pair ≥ $25k is reproduced, it stays announced. [claim R-8]

## What could go wrong

Two X handles use the hood.fun name: census @hoodfunfamily and site @hooddotfun. Factory 0x5fcc… exists on 4663 with nonce 10576, but DexScreener attached no pair to it this pass, so a live-pad card would overstate activity. [verified R-10 R-16] [claim R-6]

## Product and mechanics

@hoodfunfamily and the whitepaper describe one transaction onto a constant-product curve with virtual reserves, no presale, no team allocation, then a locked Uniswap v3 pool at the raise goal. Default 1B supply, 80% on the curve, ~6.5 ETH raise. [claim R-1 R-7]

The create form also offers community-coin fee streaming, stock-paired graduation, anti-snipe, and a 2% max-wallet option. Contracts are described as fork-tested and being audited. [claim R-12]

## Control and security

owner() on the current factory, previous factory, and Mobula platform address is 0xb3f3b54e11217f4f73e7a766b7caa187390d700d. That address has 171-byte code with a Gnosis Safe masterCopy selector. The whitepaper says the only privileged role is a 2-of-3 Safe, with a 7-day timelock on a new migrator, and that the locker has no withdraw. Threshold was not eth_called. [verified R-10] [claim R-7]

## Team and provenance

Census handle @hoodfunfamily. Live site, Telegram, and @hooddotfun posts name @hooddotfun / t.me/hooddotfun. No repository URL. Flag handle-collision and unconfirmed-official. [claim R-1 R-6 R-21]

## Economics and activity

No DefiLlama protocol row. DexScreener search of both Bitquery factory addresses returned 0 pairs. No ≥$25k pair was attributed to this pad. Factory nonce 10576 and 4.40 ETH on 0x5fcc… are on-chain; they are not a listed pair. [verified R-10 R-16] [claim R-17]

## Material risks

- Official handle is open: @hoodfunfamily vs @hooddotfun. [claim R-1 R-6]
- No ≥$25k live pair was reproduced, so lifecycle stays announced. [verified R-16]
- Owner is one 171-byte contract; Safe threshold and locker bytecode were not reproduced. [verified R-10] [claim R-7]
- Create page says being audited; no report URL. [claim R-12]
- $HFUN 0x01224f60… is a different CA (Pons graduation in the intake). Flag ca-collision on ticker-only overlap. [claim R-22]

## Verification passes

- Receipts: X posts, hood.fun HTML, Bitquery, Mobula, DexScreener, Llama, Telegram, and RPC were opened on 2026-09-03; excerpts copied from those pages. Blockscout API v2 was Cloudflare-challenged; the address page title was returned. [verified R-6 R-10 R-11]
- Numbers: bytecode lengths, nonces, ETH balances, and DexScreener pair counts are chain-slice or factory-address queries, not all-chains totals. [verified R-10 R-16]
- Adversarial: strongest contrary reading is that @hoodfunfamily is a quiet placeholder and the live pad is only @hooddotfun, or that factory 0x5fcc… is a different product Bitquery labelled hood.fun. Site HTML names @hooddotfun; RPC still shows the Bitquery address with code. Hookr is a different factory and mechanism. [inference R-6 R-8 R-10]

## Operations log

- Census/projects/feed/sources/accounts for slug hoodfun and @hoodfunfamily read 2026-09-03.
- X: @hoodfunfamily latest posts 23 Jul, 31 Jul, 3 Aug; @openpumpio 29 Aug; @hooddotfun 26 Jul–30 Aug.
- RPC https://rpc.mainnet.chain.robinhood.com with browser User-Agent: eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), pendingOwner() on 0x5fcc…, 0x6a63…, 0xc6a294…, 0xb3f3…, 0x01224f60…. urllib without User-Agent HTTP 403.
- eth_getLogs TokenCreated 0x979cee09…, Graduated 0x18a56450…, and unfiltered logs on 0x5fcc… over up to 20M blocks: empty lists, no RPC error.
- Blockscout API v2 Cloudflare challenge; address page title only.
- hood.fun, /whitepaper, /create, /terms, t.me/hooddotfun opened. Frontend JS chunks named Uniswap v3 factory 0x1f7d7550… and not 0x5fcc….
- DexScreener search factory addresses pairs 0; q=hoodfun returned HOODFUNDME pairs; token-pairs for 0x01224f60… [].
- api.llama.fi/protocol/hoodfun and hood-fun HTTP 400.
- Bitquery docs and Mobula almanac opened; Bitquery IDE query not run (API token required).
