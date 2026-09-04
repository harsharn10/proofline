---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: lunch-fun
name: lunch.fun
packet_tier: seed
as_of: 2026-09-03T03:05:00Z
prior_packet: null
supersedes: null
owned_slugs: [lunch-fun]
allowed_paths:
  - research/inbox/packets/lunch-fun/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: lunch.fun
  aliases: [lunch, Lunch, "Lunch on Robinhood", lunchdotfun]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://lunch.fun
  official_handle: "@lunchdotfun"
  repository: "NULL — GitHub org lunchdotfun has 0 public repositories and is not linked from lunch.fun, /docs, or the @lunchdotfun bio this pass"
  possible_matches:
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a Doppler/Airlock stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED"
        - "lunch.fun is a Uniswap V3/V4 one-click pad at lunch.fun / @lunchdotfun with four published launchers, not LongLauncher"
        - "No shared domain, handle or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is @hoodfunfamily; lunch.fun is @lunchdotfun / lunch.fun"
        - "Normalized names hoodfun and lunchfun differ; no shared domain, handle or reproduced address"
    - slug: stonks-fun
      signals: [other]
      contrary_signals:
        - "Census Stonks.fun is @stonksdotfun; lunch.fun is @lunchdotfun / lunch.fun"
        - "No shared domain, handle or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot using DopplerERC20V1Factory / Airlock"
        - "lunch.fun launches through LunchV3/V4 launchers into Uniswap V3/V4, not Doppler Airlock"
        - "No shared domain, handle or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily"
        - "lunch.fun is lunch.fun / @lunchdotfun"
        - "No shared domain, handle or reproduced address"
    - slug: swaphood
      signals: [other]
      contrary_signals:
        - "Census SwapHood is a native AMM at @SwapHoodFi with its own HOOD token"
        - "lunch's HOOD quote 0x32aC8C1D7672667D5EbdEa22935F7B06fC8D496f is HoodLighterShare, not SwapHood"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: []
  mechanism_tags: [launchpad, rwa, stock-paired, bonding-curve]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "lunch.fun and @lunchdotfun cross-link. Docs name four launchers on chain 4663; each is an ERC1967 proxy with verified LunchV3/V4 implementation and non-empty code. $SWOLE and $HOTDOG were created by the V3 pair launcher; $WFNT by the V4 pair launcher. No contract labeled factory is published. Distinct from LONG and from PAIR (pair.fund, not a census row). [R-1] [R-2] [R-3] [R-8] [R-9] [R-10] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-7, CLM-8, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-10, CLM-11, CLM-14, CLM-15], note: "" }

links:
  - { kind: site, url: "https://lunch.fun", authenticity: confirmed }
  - { kind: app, url: "https://lunch.fun", authenticity: confirmed }
  - { kind: docs, url: "https://lunch.fun/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/lunchdotfun", authenticity: confirmed }
  - { kind: other, url: "https://lunch.fun/terms", authenticity: confirmed }

deployments:
  - label: Launcher (V3, ETH)
    role: factory
    address:
      value: "0xf5Ac14e7691EF44b15b59FcC6a756e41A3E5EFd6"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-8, R-9]
  - label: V4 launcher (ETH, tax)
    role: factory
    address:
      value: "0xC783221AB1db0244203458417981B4631E80B988"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-8, R-9]
  - label: Stock/USDG-pair launcher (V3)
    role: factory
    address:
      value: "0x568E12B312751992DCfE387CFc8EC7D63E941103"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-8, R-9, R-10]
  - label: Stock/USDG-pair launcher (V4, tax + rewards)
    role: factory
    address:
      value: "0x6Fda94ACEEDC5a97171469a8873d00fB9983Bb8c"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-8, R-9, R-12]
  - label: V4 pair tax hook (stock/USDG)
    role: other
    address:
      value: "0x4Eb1976978756Bd56802d8162f2271844924e0cc"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-8, R-9]
  - label: V4 pair LP locker (stock/USDG)
    role: other
    address:
      value: "0xeF785Ad4eea3cffA6C66F77eb454a61D544Be4b6"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-8, R-9]
  - label: Swole Cat (SWOLE)
    role: token
    address:
      value: "0x2f36bA966BF29F702Bb290245406a5b0e3e1a66E"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10, R-16]
  - label: hotdog (HOTDOG)
    role: token
    address:
      value: "0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10]
  - label: Walnut Furnishings Corporation (WFNT)
    role: token
    address:
      value: "0x01d6E058A31C8bFda50E60Cb0d19aE546bAA3A20"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-12]
  - label: Custom HOOD pair (HoodLighterShare)
    role: token
    address:
      value: "0x32aC8C1D7672667D5EbdEa22935F7B06fC8D496f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-10, R-16]
  - label: Launcher owner
    role: admin
    address:
      value: "0x7B2DaF7F696bB844C7786693062D6619D1858cC9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-8, R-9, R-13]

metrics:
  - { kind: volume_24h, value: 2800000, currency: USD, as_of: 2026-09-01T22:00:00Z, window: 24h, method: "@RHDaily__ launchpad 24h volume board rank 6 @lunchdotfun $2.8M", class: claim, receipt_ids: [R-18] }
  - { kind: volume_24h, value: 1123483.32, currency: USD, as_of: 2026-09-03T02:58:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens SWOLE Uniswap SWOLE/HOOD pair 0x09Df…ccB6 volume.h24", class: claim, receipt_ids: [R-16] }
  - { kind: market_cap, value: 794154, currency: USD, as_of: 2026-09-03T02:58:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens SWOLE Uniswap SWOLE/HOOD pair 0x09Df…ccB6 marketCap", class: claim, receipt_ids: [R-16] }
  - { kind: holders, value: 1109, currency: null, as_of: 2026-09-03T02:56:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/addresses/0x2f36…a66E token.holders_count", class: claim, receipt_ids: [R-10] }
  - { kind: holders, value: 8378, currency: null, as_of: 2026-09-03T02:56:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/addresses/0x32aC…496f token.holders_count", class: claim, receipt_ids: [R-10] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:56:00Z, receipt_ids: [R-8, R-13], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x329fa05 (53082629). eth_getCode proxy bytecode 130 bytes on V3 ETH launcher 0xf5Ac…EFd6, V4 ETH launcher 0xC783…B988, V3 pair launcher 0x568E…1103, V4 pair launcher 0x6Fda…Bb8c, V4 pair hook 0x4Eb1…e0cc, V4 pair locker 0xeF78…e4b6. SWOLE 2285 bytes; HOTDOG 2285; HoodLighterShare 2056. Owner 0x7B2D…8cC9 eth_getCode 0x. owner() on all four launcher proxies returns 0x7B2DaF7F696bB844C7786693062D6619D1858cC9" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:56:00Z, receipt_ids: [R-9, R-10, R-12], result: "Blockscout api/v2: four launchers are ERC1967Proxy is_verified true, creator 0x7B2D…8cC9; implementations LunchV3LauncherSingle 0xC419…3749, LunchV4Launcher 0x3751…32b2, LunchV3PairLauncherFrozen 0x94FA…61C7, LunchV4PairLauncher 0x1284…9df4, all is_verified true. SWOLE name Swole Cat creator 0x568E…1103 holders 1109. HOTDOG creator 0x568E…1103. WFNT name LunchTokenDividend creator 0x6Fda…Bb8c. HoodLighterShare token HOOD holders 8378 creator 0x1c64…04fC" }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:54:00Z, receipt_ids: [R-1, R-6], result: "lunch.fun meta twitter:site @lunchdotfun twitter:creator @lunchdotfun; schema.org Organization sameAs https://x.com/lunchdotfun; canonical https://www.lunch.fun. @lunchdotfun bio Instantly launch memecoins in the Robinhood universe, with one click, for free; website lunch.fun" }
  - { id: REP-4, method: api, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-4], result: "GET https://lunch.fun/api/launches returned JSON sort trending page 0 limit 48 total 2226 pages 47. SWOLE 0x2f36…a66E version v3 pair_token 0x32aC…496f. HOTDOG 0x4544…188C version v3 pair_token COST 0x4EA0…44C2. WFNT 0x01d6…3A20 version v4 hook 0x4eb1…e0cc pair_token 0x32aC…496f" }
  - { id: REP-5, method: api, checked_at: 2026-09-03T02:58:00Z, receipt_ids: [R-16], result: "DexScreener latest/dex/tokens 0x2f36…a66E chainId robinhood dexId uniswap pair 0x09Df115d3bb42C7af3864b75769F9c301623ccB6 base SWOLE quote HOOD 0x32aC…496f liquidity.usd 111754.88 volume.h24 1123483.32 marketCap 794154" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Free one-click launch: 1,000,000,000-supply ERC-20 in one transaction into a locked Uniswap V3 full-range position or a Uniswap V4 tax pool; no launch fee besides gas", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://lunch.fun", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@lunchdotfun", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "lunch.fun", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xf5Ac14e7691EF44b15b59FcC6a756e41A3E5EFd6", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-3, R-8, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0xC783221AB1db0244203458417981B4631E80B988", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-3, R-8, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0x568E12B312751992DCfE387CFc8EC7D63E941103", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-3, R-8, R-9, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0x6Fda94ACEEDC5a97171469a8873d00fB9983Bb8c", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-3, R-8, R-9, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-3, R-8, R-9, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Launches can pair against ETH, USDG, Robinhood stock tokens, or a custom HOOD pair; V4 pair coins can pay holder rewards in the quote or a basket", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-3, R-5, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: control.owner, value: "0x7B2DaF7F696bB844C7786693062D6619D1858cC9", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-8, R-13], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: team.identity, value: "Ticker Mog LLC, a British Virgin Islands limited liability company, is the named operator in lunch.fun/terms", class: claim, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: activity.status, value: "lunch.fun/api/launches total 2226 on 2026-09-03", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-4], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: relationship, value: "Distinct from census LONG (app.long.xyz / @longdotxyz / LongLauncher Doppler Airlock) and from PAIR (pair.fund multipool stock-basket pad, not a census row)", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-1, R-3, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: deployment.address, value: "0x32aC8C1D7672667D5EbdEa22935F7B06fC8D496f", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-5, R-10, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0x2f36bA966BF29F702Bb290245406a5b0e3e1a66E", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-4, R-10, R-16], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-17, field: deployment.address, value: "0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-4, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on lunch.fun, /docs, /terms, the @lunchdotfun profile, or the GitHub org this pass", class: unknown, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.repository, value: "NULL — GitHub org lunchdotfun has 0 public repositories, empty blog, no twitter_username, and is not linked from lunch.fun", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "V3 trade fee is 1%, split 0.5% creator / 0.3% platform / 0.2% back into the pool; V4 tax is up to 5% per side with 80% creator / 20% platform", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: inference, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: product.mechanism, value: "SWOLE Uniswap pair quotes HoodLighterShare 0x32aC…496f (token HOOD), not a Robinhood Stock Token registry address", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-10, R-16], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: product.mechanism, value: "HOTDOG Uniswap pair quotes COST 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 (Costco • Robinhood Token)", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-4, R-11], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "@lunchdotfun posted 18 Jul 2026 that there is no platform token", class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: control.proxy, value: "Four launchers, the V4 pair hook and the V4 pair locker are ERC1967 proxies", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-9], reproduction_ids: [REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "@lunchdotfun quotes Solana supercycle as robinhood"
    summary: "@lunchdotfun replies 'robinhood' to @solana's supercycle video."
    occurred_at: 2026-09-02T10:05:16Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-2
    type: company
    title: "@lunchdotfun: Lighter HOOD backing above $500k"
    summary: "@lunchdotfun says Lighter $HOOD backing passed $500k and lunch lists every tokenized stock plus a custom HOOD pair."
    occurred_at: 2026-09-01T22:56:24Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-3
    type: ct
    title: "@RHDaily__ lists @lunchdotfun sixth at $2.8M 24h"
    summary: "@RHDaily__ ranks @lunchdotfun sixth among Robinhood Chain launchpads at $2.8M 24h volume."
    occurred_at: 2026-09-01T22:00:00Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: company
    title: "@lunchdotfun: lunch has all 195 stock pairs"
    summary: "@lunchdotfun says lunch has all 195 stock pairs and tells users to start lunching."
    occurred_at: 2026-08-31T03:31:32Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-5
    type: company
    title: "@lunchdotfun: HOOD pairs 80% of Lighter volume"
    summary: "@lunchdotfun says lunch $HOOD pairs were 80% of @Lighter_xyz volume (1.2M of 1.5M) two days earlier."
    occurred_at: 2026-08-28T12:59:58Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-6
    type: company
    title: "@lunchdotfun: dividends live, including $HOOD pair"
    summary: "@lunchdotfun says dividends are now visible on lunch.fun, including the unique $HOOD pair."
    occurred_at: 2026-08-23T16:26:36Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-7
    type: onchain
    title: "SWOLE created by V3 pair launcher, quotes custom HOOD"
    summary: "Blockscout names SWOLE creator as LunchV3 pair launcher 0x568E…1103; DexScreener quotes HoodLighterShare."
    occurred_at: 2026-08-26T08:18:02Z
    observed_at: 2026-09-03T02:58:00Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10, R-16]
  - id: EVT-8
    type: company
    title: "@lunchdotfun: HOOD pair live, 89 stocks on lunch.fun"
    summary: "@lunchdotfun says Robinhood Markets (HOOD) is a launch pair and lunch offers 89 stocks."
    occurred_at: 2026-07-30T20:30:16Z
    observed_at: 2026-09-03T03:00:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-24]

receipts:
  - { id: R-1, publisher: lunch, title: "lunch.fun home", url: "https://lunch.fun", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-14, CLM-20], excerpt: "title lunch: fair launch coins on Robinhood Chain. meta description: Launch a coin in one transaction and trade it right away. Real Uniswap V3 liquidity, locked LP, and creator fees on every trade. twitter:site @lunchdotfun. schema.org sameAs https://x.com/lunchdotfun. On-page: One-click launch; V3 or V4 curve; Stock-paired coins; Creator 50% / Platform 30% / Back into the pool 20%." }
  - { id: R-2, publisher: lunch, title: "GET /api/launches headers", url: "https://lunch.fun/api/launches", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-13], excerpt: "HTTP 200 content-type application/json x-matched-path /api/launches." }
  - { id: R-3, publisher: lunch, title: "How lunch works, in detail", url: "https://lunch.fun/docs", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-7, CLM-8, CLM-9, CLM-10, CLM-14, CLM-20, CLM-21], excerpt: "lunch is a fair-launch coin platform on Robinhood Chain. Anyone can mint a coin in one transaction — no presale, no team allocation. Entire supply is a single full-range Uniswap V3 position at launch, LP locked from block one. No launch fee — you only pay gas. Launchers: V3 ETH 0xf5Ac…EFd6; V4 ETH 0xC783…B988; Stock/USDG V3 0x568E…1103; Stock/USDG V4 0x6Fda…Bb8c. Pair against ETH, USDG, or every Robinhood stock." }
  - { id: R-4, publisher: lunch, title: "GET /api/launches JSON", url: "https://lunch.fun/api/launches", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-13, CLM-16, CLM-17, CLM-23, EVT-7], excerpt: "total 2226. SWOLE token 0x2f36ba966bf29f702bb290245406a5b0e3e1a66e version v3 pair_token 0x32ac8c1d7672667d5ebdea22935f7b06fc8d496f. HOTDOG 0x45443a4a7b58ab26a4b4d72616cf36d5aae7188c version v3 pair_token 0x4ea005168d7f09a7a0ba9d1def21a479950e44c2. WFNT 0x01d6e058a31c8bfda50e60cb0d19ae546baa3a20 version v4 hook 0x4eb1976978756bd56802d8162f2271844924e0cc pair_token 0x32ac…496f." }
  - { id: R-5, publisher: "@lunchdotfun", title: "Lighter HOOD backing surpassed $500k", url: "https://x.com/lunchdotfun/status/2094922348184879594", published_at: 2026-09-01T22:56:24Z, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-10, CLM-15, EVT-2], excerpt: "The @Lighter_xyz backing for the $HOOD stock has now surpassed $500k. Remember: lunch offers every single tokenized stock on-chain, plus the custom $HOOD pair. find it all on: https://lunch.fun" }
  - { id: R-6, publisher: "@lunchdotfun", title: "Lunch on Robinhood profile", url: "https://x.com/lunchdotfun", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-14], excerpt: "Display name Lunch on Robinhood, handle @lunchdotfun, bio Instantly launch memecoins in the Robinhood universe, with one click, for free. Website http://lunch.fun. Location Robinhood. Joined 2025-09-08." }
  - { id: R-7, publisher: "@lunchdotfun", title: "lunch has all the stock pairs you need. All 195 of them", url: "https://x.com/lunchdotfun/status/2094266814574252222", published_at: 2026-08-31T03:31:32Z, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-10, EVT-4], excerpt: "lunch has all the stock pairs you need. All 195 of them. what are you waiting for? start lunching!" }
  - { id: R-8, publisher: Robinhood Chain RPC, title: "eth_getCode and owner() on lunch launchers", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-8, CLM-9, CLM-11], excerpt: "eth_blockNumber 0x329fa05 (53082629). eth_getCode 130 bytes on 0xf5Ac…EFd6, 0xC783…B988, 0x568E…1103, 0x6Fda…Bb8c, 0x4Eb1…e0cc, 0xeF78…e4b6. SWOLE/HOTDOG 2285 bytes. HoodLighterShare 2056. owner() on four launchers 0x7B2DaF7F696bB844C7786693062D6619D1858cC9. Owner eth_getCode 0x." }
  - { id: R-9, publisher: Blockscout, title: "Launcher proxy pages", url: "https://robinhoodchain.blockscout.com/address/0xf5Ac14e7691EF44b15b59FcC6a756e41A3E5EFd6", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-8, CLM-9, CLM-25], excerpt: "0xf5Ac…EFd6 ERC1967Proxy is_verified true impl LunchV3LauncherSingle 0xC419…3749. 0xC783…B988 impl LunchV4Launcher 0x3751…32b2. 0x568E…1103 impl LunchV3PairLauncherFrozen 0x94FA…61C7. 0x6Fda…Bb8c impl LunchV4PairLauncher 0x1284…9df4. All four creator 0x7B2D…8cC9. Hook 0x4Eb1…e0cc impl LunchTaxHookPair. Locker 0xeF78…e4b6 impl LunchV4PairLpLocker." }
  - { id: R-10, publisher: Blockscout, title: "SWOLE, HOTDOG, HoodLighterShare", url: "https://robinhoodchain.blockscout.com/address/0x2f36ba966bf29f702bb290245406a5b0e3e1a66e", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-17, CLM-15, CLM-22, EVT-7], excerpt: "SWOLE 0x2f36bA966BF29F702Bb290245406a5b0e3e1a66E name Swole Cat is_verified true creator 0x568E12B312751992DCfE387CFc8EC7D63E941103 holders 1109. HOTDOG 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C creator same launcher. HoodLighterShare 0x32aC8C1D7672667D5EbdEa22935F7B06fC8D496f token name HOOD symbol HOOD holders 8378 creator 0x1c64374EDce76c967f54Decd40fEa829A56B04fC." }
  - { id: R-11, publisher: Blockscout, title: "COST Costco • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-23], excerpt: "0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 is_contract true name BeaconProxy token name Costco • Robinhood Token symbol COST holders 13622 creator 0x4783C67b63dE2B358Ac5951a7D41F47A38F3C046." }
  - { id: R-12, publisher: Blockscout, title: "WFNT LunchTokenDividend", url: "https://robinhoodchain.blockscout.com/address/0x01d6e058a31c8bfda50e60cb0d19ae546baa3a20", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "0x01d6E058A31C8bFda50E60Cb0d19aE546bAA3A20 is_contract true is_verified true name LunchTokenDividend creator 0x6Fda94ACEEDC5a97171469a8873d00fB9983Bb8c token Walnut Furnishings Corporation WFNT holders 259." }
  - { id: R-13, publisher: Blockscout, title: "Launcher owner 0x7B2D…8cC9", url: "https://robinhoodchain.blockscout.com/address/0x7B2DaF7F696bB844C7786693062D6619D1858cC9", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "0x7B2DaF7F696bB844C7786693062D6619D1858cC9 is_contract false is_verified false creator_address_hash null. RPC eth_getCode 0x." }
  - { id: R-16, publisher: DexScreener, title: "SWOLE token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x2f36ba966bf29f702bb290245406a5b0e3e1a66e", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-16, CLM-15, CLM-22, EVT-7], excerpt: "chainId robinhood dexId uniswap pairAddress 0x09Df115d3bb42C7af3864b75769F9c301623ccB6 base Swole Cat SWOLE 0x2f36…a66E quote HOOD 0x32aC8C1D7672667D5EbdEa22935F7B06fC8D496f liquidity.usd 111754.88 volume.h24 1123483.32 marketCap 794154 pairCreatedAt 1787707082000." }
  - { id: R-17, publisher: Ticker Mog LLC, title: "Terms of Use — lunch", url: "https://lunch.fun/terms", published_at: 2026-08-08, accessed_at: 2026-09-03T02:58:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-12], excerpt: "TERMS OF USE Last updated August 8, 2026. These Terms of Use are a binding agreement between you and Ticker Mog LLC, a British Virgin Islands limited liability company, together with its affiliates (lunch, Lunch Entities, we, our, or us). Footer: © 2026 Ticker Mog LLC." }
  - { id: R-18, publisher: "@RHDaily__", title: "Top Robinhood Chain Launchpads by 24H Volume", url: "https://x.com/RHDaily__/status/2094908154672734344", published_at: 2026-09-01T22:00:00Z, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "Top Robinhood Chain Launchpads by 24H Volume 1. @ponsdotfamily $315.9M 2. @longdotxyz $47.5M 3. @o1_exchange $23.7M 4. @Noxa_Fi $21.3M 5. @TradePools $16.4M 6. @lunchdotfun $2.8M 7. @dopplerprotocol $2.2M 8. @bankrbot $2.0M 9. @letscashfun $2.0M 10. @flapdotsh $1.9M" }
  - { id: R-19, publisher: GitHub, title: "Organization lunchdotfun", url: "https://github.com/lunchdotfun", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: repository, authority: unknown, authenticity: unconfirmed, supports: [CLM-19], excerpt: "API users/lunchdotfun: type Organization, login lunchdotfun, blog empty, twitter_username null, public_repos 0, public_gists 0, created_at 2025-09-22T22:26:46Z. GET /users/lunchdotfun/repos returned []. lunch.fun HTML has 0 github.com links." }
  - { id: R-20, publisher: "@lunchdotfun", title: "What makes lunch.fun different?", url: "https://x.com/lunchdotfun/status/2078629768484802731", published_at: 2026-07-18T23:55:30Z, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24], excerpt: "What makes https://lunch.fun/ different? Pretty simple: • No platform token to care about, team is fully focused on the product. • Everything is stored on-chain, no third-party dependance for token metadata. • Unique features, such as V4, multiple fee wallets & lots more that's to come." }
  - { id: R-21, publisher: "@lunchdotfun", title: "robinhood", url: "https://x.com/lunchdotfun/status/2095090674051785073", published_at: 2026-09-02T10:05:16Z, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "robinhood. Quoted @solana: the _ _ _ _ _ supercycle." }
  - { id: R-22, publisher: "@lunchdotfun", title: "lunch $HOOD pairs 80% of Lighter volume", url: "https://x.com/lunchdotfun/status/2093322699967762678", published_at: 2026-08-28T12:59:58Z, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "Less than 2 days ago, lunch's $HOOD pairs represented 80% of @Lighter_xyz volume (1.2M of 1.5M). It's a sign. $HOOD native pairs have their preferred place, and it's https://lunch.fun Come serve yours!" }
  - { id: R-23, publisher: "@lunchdotfun", title: "dividends paid out on lunch.fun", url: "https://x.com/lunchdotfun/status/2091562762535100839", published_at: 2026-08-23T16:26:36Z, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "You can now view the amoutn of dividends paid out on https://lunch.fun/ Deploy yours with dividends on any stock pair, including our unique $HOOD (Robinhood Markets) stock." }
  - { id: R-24, publisher: "@lunchdotfun", title: "Robinhood Markets (HOOD) is now available as a pair", url: "https://x.com/lunchdotfun/status/2082926773138763821", published_at: 2026-07-30T20:30:16Z, accessed_at: 2026-09-03T03:00:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-8], excerpt: "Robinhood Markets (HOOD) is now available as a pair for your launch. HOOD is pegged to Robinhood's own stock, so your coin moves along the real thing. Every single buy on your lunch directly buys HOOD, automatically, forever. https://lunch.fun/ now offers 89 stocks with a lot more coming soon." }

gaps:
  - { priority: P0, question: "Docs publish four launchers and no contract labeled factory. Is there any other unpublished factory besides those four?", checked: "lunch.fun/docs Contracts Launchers table, /api/launches creator fields, Blockscout creators of SWOLE/HOTDOG/WFNT, 2026-09-03", next: "keep the four published launchers; do not invent a fifth factory address" }
  - { priority: P0, question: "Can EOA 0x7B2D…8cC9 upgrade the ERC1967 launcher/hook/locker proxies, and is there a timelock?", checked: "owner() on four launchers returns that EOA; eth_getCode empty; no timelock address in docs Contracts table, 2026-09-03", next: "read verified LunchV3LauncherSingle / LunchV4PairLauncher upgrade functions and any ProxyAdmin" }
  - { priority: P1, question: "What is HoodLighterShare 0x32aC…496f backing and redemption versus an official Robinhood HOOD Stock Token?", checked: "Blockscout name HoodLighterShare token HOOD; @lunchdotfun Lighter backing posts; official HOOD dossier address 0x21E877…C8ad has empty code on 4663 this pass", next: "read HoodLighterShare verified source and Lighter vault backing" }
  - { priority: P1, question: "Is there an audit whose scope includes the four launchers, V4 hooks, and lockers as deployed on 4663?", checked: "lunch.fun, /docs, /terms, @lunchdotfun, GitHub org lunchdotfun, 2026-09-03", next: "ask the project in public and record any report URL as a claim" }
  - { priority: P2, question: "Does GitHub org lunchdotfun ever publish source, and will lunch.fun link it?", checked: "api.github.com/users/lunchdotfun public_repos 0, blog empty, no twitter_username; lunch.fun HTML has 0 github.com links, 2026-09-03", next: "re-check the org and the site footer on a later pass" }
---

# lunch.fun — research packet

## What it is

A free one-click memecoin launchpad on Robinhood Chain. A user mints a 1 billion-supply ERC-20 in one transaction into a locked Uniswap V3 or V4 pool, quoted against ETH, USDG, a Robinhood stock token, or lunch's custom HOOD pair. Creators pick V3 1% fees or a V4 tax with holder rewards. Ticker Mog LLC runs it at lunch.fun as @lunchdotfun.

Themes: launchpad, rwa, memecoin, stock-paired:HOOD, hook

## Why it matters

This is a Robinhood-native pad that quotes new memes against stock tokens and a custom HOOD pair without using LONG's Doppler Airlock or PAIR's multipool baskets. @RHDaily__ listed @lunchdotfun sixth on a 1 Sep 24h volume board at $2.8M. GET /api/launches counted 2,226 coins on 3 Sep.

## What could go wrong

The four launchers, V4 pair hook and V4 pair locker are ERC1967 proxies whose owner() is one EOA with no code; this pass did not find a timelock. A lunch HOOD pair is HoodLighterShare, not a Robinhood Stock Token, so a HOOD ticker is not a registry match. Docs publish four launchers and no contract labeled factory.

## Product and mechanics

A launch is one transaction: name, ticker, image, optional pair and optional dev buy. Supply is fixed at 1,000,000,000. Docs say there is no launch fee besides gas. V3 places the whole supply as a single-sided full-range Uniswap V3 position; a ~4 ETH net-buy mark is an indexer graduation badge, not an LP migration. [claim R-3]

V3 swap fee is 1%, split 0.5% creator / 0.3% platform / 0.2% back into the pool. V4 tax launches use a shared hook, buy/sell tax up to 5% per side, 80% creator / 20% platform, optional holder rewards, and locked auto-compounding LP. [claim R-1 R-3]

Pair selector lists ETH, USDG and Robinhood stocks. HOTDOG's DexScreener book quotes Costco • Robinhood Token 0x4EA0…44C2. SWOLE and WFNT quote HoodLighterShare 0x32aC…496f (token HOOD), the custom HOOD pair named by @lunchdotfun, not LONG's Airlock path and not PAIR's basket pools. [verified R-10 R-11 R-16] [claim R-5]

## Control and security

Docs name four launchers on chain 4663. Each is an ERC1967 proxy with verified implementation (LunchV3LauncherSingle, LunchV4Launcher, LunchV3PairLauncherFrozen, LunchV4PairLauncher). owner() on all four returns EOA 0x7B2D…8cC9. SWOLE and HOTDOG creator is the V3 pair launcher; WFNT creator is the V4 pair launcher. [verified R-8 R-9 R-10 R-12]

No audit report URL was located on the site, docs, terms, X profile or GitHub org this pass. [unknown]

## Team and provenance

lunch.fun sets twitter:site to @lunchdotfun and schema.org sameAs to https://x.com/lunchdotfun. The @lunchdotfun bio links lunch.fun. Terms name Ticker Mog LLC, a British Virgin Islands limited liability company, as operator. GitHub org lunchdotfun exists with 0 public repositories and is not linked from the site. [verified R-1 R-6] [claim R-17 R-19]

Not LONG: different domain, handle and launcher stack. Not PAIR: PAIR is pair.fund, not a census row, and is a multipool stock-basket pad. [unknown]

## Economics and activity

GET /api/launches returned total 2226 on 2026-09-03. [verified R-4]

@RHDaily__ 1 Sep board: @lunchdotfun $2.8M 24h, sixth. That is a social board, not a chain-slice adapter. [claim R-18]

DexScreener SWOLE/HOOD Uniswap pair 0x09Df…ccB6 on 2026-09-03: liquidity 111,754.88 USD, 24h volume 1,123,483.32 USD, market cap 794,154 USD. SWOLE holders 1,109; HoodLighterShare holders 8,378. [claim R-10 R-16]

api.llama.fi/protocol/lunch, lunch-fun, lunchdotfun and lunch.fun all returned 400 Protocol not found. [unknown]

## Material risks

- Four launcher proxies, the V4 pair hook and the V4 pair locker share owner() EOA 0x7B2D…8cC9 with empty code; no timelock was found in the docs table. [verified R-8 R-13]
- Custom HOOD quote 0x32aC…496f is HoodLighterShare, not a Robinhood Stock Token. [verified R-10 R-16]
- Docs publish four launchers and no contract labeled factory. [claim R-3]
- No audit report was located this pass. [unknown]
- V4 docs say the creator can change buy/sell tax up to 5% per side after launch. [claim R-3]

## Verification passes

- Receipts: lunch.fun, /docs, /api/launches, /terms, @lunchdotfun profile and the dated posts above, Blockscout API v2, RPC eth_getCode/owner(), DexScreener SWOLE, GitHub org lunchdotfun, and the @RHDaily__ board were opened on 2026-09-03; excerpts are copied from those pages. [verified R-1 R-3 R-4 R-8 R-9 R-10 R-16]
- Numbers: 2,226 is the launches API total, not TVL. $2.8M is the 1 Sep social board. SWOLE 24h volume and market cap are the DexScreener Robinhood Uniswap pair, not an all-chains figure. [verified R-4] [claim R-16 R-18]
- Adversarial: the strongest contrary reading is that lunch.fun is LONG or PAIR under another name, or that HoodLighterShare is the official HOOD Stock Token. Domains, handles and launcher bytecode names differ from LONG; PAIR is pair.fund and not in the census; HoodLighterShare's explorer name is not a Robinhood Token suffix. [verified R-9 R-10]

## Operations log

- Census 49 rows: no lunch, lunch.fun, lunch-fun or @lunchdotfun. Pending packets have no lunch-fun directory.
- Opened https://lunch.fun, https://lunch.fun/docs, https://lunch.fun/api/launches, https://lunch.fun/terms, https://lunch.fun/privacy, https://x.com/lunchdotfun and the eight event URLs.
- RPC eth_getCode / eth_blockNumber / owner() on https://rpc.mainnet.chain.robinhood.com at block 0x329fa05.
- Blockscout API v2 for four launchers, hook, locker, SWOLE, HOTDOG, WFNT, HoodLighterShare, COST, owner EOA.
- DexScreener latest/dex/tokens SWOLE, HOTDOG, HoodLighterShare.
- DefiLlama api.llama.fi/protocol/lunch, lunch-fun, lunchdotfun, lunch.fun all 400.
- GitHub org lunchdotfun: 0 public repos.
- No factory address was invented. No content/ writes. No merge. No push.
