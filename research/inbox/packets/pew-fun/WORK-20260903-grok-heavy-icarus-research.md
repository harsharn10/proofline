---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: pew-fun
name: pew.fun
packet_tier: seed
as_of: 2026-09-03T04:56:00Z
prior_packet: null
supersedes: null
owned_slugs: [pew-fun]
allowed_paths:
  - research/inbox/packets/pew-fun/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: pew.fun
  aliases: [Pew.fun, Pew, "Pew.fun launchpad"]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://pew.fun
  official_handle: "@pewdotfun"
  repository: "NULL — github.com/pewdotfun is a user (name Pew.fun, blog pew.fun, twitter_username pewdotfun, public_repos 0); api.github.com/orgs/pewdotfun 404; site JS footer hrefs github.com/pewdotfun with no source repo this pass"
  possible_matches:
    - slug: noxa
      signals: [other]
      contrary_signals:
        - "Census NOXA Fun is noxa.fun / @Noxa_Fi with factory 0xD9eC2db5…FccB"
        - "Pew.fun is pew.fun / @pewdotfun with Emerson-mapped factory 0xC9182C28…9D8c"
        - "The 17 Jul 2026 live post named locked Uniswap V3 (Noxa); that is a venue claim, not a shared factory"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a bonding-curve pad at @hoodfunfamily"
        - "Pew.fun JS and posts: no bonding curve, no graduation, locked v3 pool from block one"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve pad at ponsfamily.com / @ponsdotfamily with factories 0xa5aa…1feb and 0x0c37…77a4"
        - "Pew.fun factory 0xC9182C28…9D8c is not a Pons factory"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: [launch/stock-paired-factory]
  mechanism_tags: [launchpad, amm, stock-paired, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Factory 0xC9182C28…9D8c has 22352-byte code on chain 4663, is not an ERC1967 proxy, owner() 0x80f8…D0. Site twitter:site @pewdotfun; handle website pew.fun. JS: no bonding curve, locked Uniswap/Sushi v3, 90% creator LP-fee share. Emerson factory map labels this address Pew.fun; 30d platform table has no Pew.fun row. Distinct from packed noxa/hoodfun/pons and in-flight circus/sentry/bags/klik. Not a census row. [R-1] [R-2] [R-9] [R-10] [R-15]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-7, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-5], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-12, CLM-18, CLM-22], note: "" }

links:
  - { kind: site, url: "https://pew.fun", authenticity: confirmed }
  - { kind: app, url: "https://pew.fun/create", authenticity: confirmed }
  - { kind: docs, url: "https://pew.fun/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/pewdotfun", authenticity: confirmed }
  - { kind: github, url: "https://github.com/pewdotfun", authenticity: unconfirmed }

deployments:
  - label: SushiSwap v3 launch factory
    role: factory
    address:
      value: "0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-9, R-10, R-15]
  - label: Instant Uniswap v3 factory (VITE_INSTANT_FACTORY)
    role: factory
    address:
      value: "0x5A73772dbb25ce8738534A9e96932Aee5C4bDf42"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-10, R-20]
  - label: Instant factory (JS 4663 instantFactories[1])
    role: factory
    address:
      value: "0x3364e68A4454D18132D0a2ac538c966369828291"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-2, R-10]
  - label: Sushi launch zap
    role: router
    address:
      value: "0x16feDC5DB0e076d2ca08002537Db7353227Eb18b"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-2, R-10]
  - label: Factory owner() / deployer
    role: admin
    address:
      value: "0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-9, R-10, R-13]

metrics: []

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-9, R-10, R-18], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32adab1 (53140145). Factory 0xC9182C28…9D8c eth_getCode 22352 bytes prefix 0x6102c08060405260; nonce 0x22c (556); balance 0. owner() 0x80f8ddbcf7808fd7fbffbbd27106ec202a3460d0. pendingOwner() zero. ERC1967 implementation/admin/beacon slots zero. Blockscout api/v2 is_contract true is_verified false proxy_type null name null. creator_address_hash 0x80f8…D0. creation_transaction_hash 0x8cc821ba…c523 timestamp 2026-07-17T21:52:30Z." }
  - { id: REP-2, method: official-crosslink, checked_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-2, R-4, R-14], result: "pew.fun HTML twitter:site @pewdotfun; og:site_name Pew.fun; og:url https://pew.fun/; title Pew.fun. JS footer href https://x.com/pewdotfun and https://github.com/pewdotfun. @pewdotfun display name Pew; bio (former) Robinhood Launchpad; website pew.fun; user id 2076941685083533312; joined 2026-07-14. github.com/pewdotfun name Pew.fun blog https://pew.fun twitter_username pewdotfun public_repos 0." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-10, R-13, R-20], result: "VITE_INSTANT_FACTORY 0x5A73772d…Df42 eth_getCode 24498 bytes nonce 5 owner() 0x80f8…D0. JS instantFactories 0x3364e68A…8291 code 22352 nonce 51 owner() 0x80f8…D0; 0x7DA7CF92…576e code 22352 nonce 4 owner() 0x80f8…D0. Sushi zap 0x16feDC5D…b18b code 2122. Owner 0x80f8…D0 eth_getCode 0x nonce 454. Blockscout owner is_contract false." }
  - { id: REP-4, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:52:00Z, receipt_ids: [R-11, R-12], result: "SUSHICAT 0xaA4b6a79…51b0 Blockscout name PewToken is_verified true is_fully_verified true file_path src/PewToken.sol. token name Sushi Cat symbol SUSHICAT holders_count 5163. creator_address_hash 0xC9182C28…9D8c. creation_transaction_hash 0x66fc302b…e8f5 timestamp 2026-07-17T22:51:21Z method 0xbc95ef4a from 0x2a3e14F0…B47D to the factory." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:53:00Z, receipt_ids: [R-15, R-17], result: "api.dexscreener.com/latest/dex/tokens/0xaA4b6a79…51b0 HTTP 200. robinhood sushiswap v3 pair 0x0FA4c2ca…4E27 SUSHICAT/WETH liquidity.usd 8672.95 volume.h24 101.02 pairCreatedAt 1784328681000 (2026-07-17T22:51:21Z); info websites pew.fun. Emerson factory map row factory_address 0xc9182c28…9d8c launchpad Pew.fun notes Registry. Emerson 30d Platform Summary has no Pew.fun row." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Launch mints an ERC-20 into a locked Uniswap v3 or SushiSwap v3 pool in one path; no bonding curve, no graduation, tradeable from block one. Site JS: 90% creator share of LP fees vs 70% others. Launch parties: one public seat price, pooled ETH as the opening buy, liquidity locks with no withdraw path.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-2, R-5, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://pew.fun", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@pewdotfun", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-4, R-14], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "pew.fun", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-4, R-15], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-9, R-10, R-15], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x5A73772dbb25ce8738534A9e96932Aee5C4bDf42", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-10, R-20], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-9, R-10, R-11], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-2, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-9, R-10, R-13], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "Factory 0xC9182C28…9D8c is not an ERC1967 proxy this pass: implementation/admin/beacon slots zero, 22352-byte code, Blockscout proxy_type null.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "No timelock contract was named on pew.fun or in the JS bundle this pass. owner() is EOA 0x80f8…D0 with no code; pendingOwner() zero.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-10, R-13], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "Handle bio is (former) Robinhood Launchpad. Emerson 30d Platform Summary has no Pew.fun row. Factory nonce 556, transactions_count 1231; latest sampled to-txs through 2026-08-31 are method 0xa5e35baf with decoded LpFeesCollected, not new mints. SUSHICAT/WETH still trades.", class: verified, observed_at: 2026-09-03T04:53:00Z, receipt_ids: [R-4, R-15, R-17, R-19, R-22], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "HARVEST.md OKX Dune lifetime since 2026-07-01: pew.fun 555 launched / $11.8M DEX. This pass GET dune.com/okxweb3wallet/robinhood-chain-launchpads-rwa-paired-meme-analysis returned Cloudflare 403, so the figure is not reproduced here.", class: claim, observed_at: 2026-09-03T04:53:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "No audit report URL was located on pew.fun, pew.fun/docs, the @pewdotfun profile, or GitHub user pewdotfun this pass", class: unknown, observed_at: 2026-09-03T04:55:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0xaA4b6a79Df257E50E0079cD812A92262eE3951b0", class: verified, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-17, field: taxonomy.secondary-leaf, value: launch/stock-paired-factory, class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from census NOXA Fun, hood.fun, and Pons, and from in-flight Circus, Sentry, Bags, and Klik. No shared domain, handle, or reproduced factory.", class: claim, observed_at: 2026-09-03T04:55:00Z, receipt_ids: [R-1, R-4, R-9, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@pewdotfun.official", value: "Handle website field names pew.fun. pew.fun HTML twitter:site @pewdotfun. GitHub user pewdotfun twitter_username pewdotfun blog pew.fun. Bidirectional site/handle.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-4, R-14], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-20, field: "account.@pewdotfun.slug", value: pew-fun, class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@pewdotfun.role", value: project, class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "On 2026-08-11 @pewdotfun posted that the Pew team has been watching the market, trading, and experimenting with new contracts, waiting for the right time and product for a comeback run.", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: identity.alias, value: Pew, class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: control.privileged-role, value: "owner() on factory 0xC9182C28…9D8c, VITE_INSTANT_FACTORY 0x5A73772d…Df42, and JS instant factories 0x3364…8291 / 0x7DA7…576e is the same EOA 0x80f8…D0.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-10, R-13], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-25, field: product.mechanism, value: "17 Jul 09:32Z post: launch straight into locked Uniswap V3 (Noxa). Same-day 21:52Z factory 0xC9182C28…9D8c deployed; 22:51Z SUSHICAT minted through it; 22:58Z post: first SushiSwap v3 launchpad, no bonding curve. JS 4663 sushi.factories is that address; VITE_INSTANT_FACTORY is a later 24498-byte Uniswap path.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-5, R-6, R-18, R-12], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-26, field: identity.repository, value: "NULL — GitHub org pewdotfun 404; user pewdotfun public_repos 0; Llama has no pew protocol", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-14, R-21, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: other, value: "DexScreener SUSHICAT profile websites pew.fun; socials url x.com/sushicatbot. That handle is the token account, not the pad. Do not merge @SushiCatBot into pew-fun.", class: claim, observed_at: 2026-09-03T04:53:00Z, receipt_ids: [R-17], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-28, field: product.mechanism, value: "JS 4663 canonical factories pair launches to NVDA, AAPL, SPCX, MSFT, TSLA, AMZN, GOOGL, SPY, PONS, USDG quotes on Uniswap v3 factory 0x1f7d7550…2EfA. Site copy: launch against a tokenised stock or a stablecoin.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: "account.@pewdotfun.follow", value: true, class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: "account.@pewdotfun.listen", value: medium, class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-4, R-7], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Factory still emits LpFeesCollected on 31 Aug"
    summary: "Tx 0x1baac473…46bc on 2026-08-31 called factory 0xC918…9D8c; Blockscout decoded LpFeesCollected."
    occurred_at: 2026-08-31T04:30:06Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [activity.status, deployment.address]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-2
    type: company
    title: "@pewdotfun posts a comeback run is pending"
    summary: "On 2026-08-11 @pewdotfun posted it is waiting for the right time and product for a comeback run."
    occurred_at: 2026-08-11T15:15:23Z
    observed_at: 2026-09-03T04:20:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-3
    type: company
    title: "@pewdotfun posts SushiSwap fee-collector article"
    summary: "On 2026-07-31 the handle linked pew.fun/news/sushiswap-fee-collector-robinhood-chain and a $10M Sushi volume claim."
    occurred_at: 2026-07-31T21:20:10Z
    observed_at: 2026-09-03T04:20:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-4
    type: company
    title: "@pewdotfun posts first SushiSwap launchpad live"
    summary: "On 2026-07-17 the handle posted pew.fun as the first SushiSwap v3 pad: LP locked, no bonding curve."
    occurred_at: 2026-07-17T22:58:09Z
    observed_at: 2026-09-03T04:20:00Z
    affected_fields: [lifecycle, product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-5
    type: onchain
    title: "Factory created SUSHICAT PewToken"
    summary: "Tx 0x66fc302b…e8f5 at 2026-07-17T22:51:21Z minted 0xaA4b…51b0 through factory 0xC918…9D8c; Blockscout name PewToken."
    occurred_at: 2026-07-17T22:51:21Z
    observed_at: 2026-09-03T04:52:00Z
    affected_fields: [deployment.address, activity.status, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11, R-12]
  - id: EVT-6
    type: onchain
    title: "Sushi factory 0xC918 deployed on chain 4663"
    summary: "Creation tx 0x8cc821ba…c523 at 2026-07-17T21:52:30Z from EOA 0x80f8…D0 deployed factory 0xC9182C…9D8c."
    occurred_at: 2026-07-17T21:52:30Z
    observed_at: 2026-09-03T04:48:00Z
    affected_fields: [deployment.address, control.owner, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-18]
  - id: EVT-7
    type: company
    title: "@pewdotfun posts pew.fun live on Robinhood Chain"
    summary: "On 2026-07-17 the handle posted pew.fun live: locked Uniswap V3 (Noxa), no bonding curve, LP locked, party mode."
    occurred_at: 2026-07-17T09:32:28Z
    observed_at: 2026-09-03T04:20:00Z
    affected_fields: [lifecycle, product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]

receipts:
  - { id: R-1, publisher: Pew.fun, title: "pew.fun home", url: "https://pew.fun/", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-8, CLM-15, CLM-17, CLM-18, CLM-19, CLM-28], excerpt: "HTTP 200. title Pew.fun. meta description: Social launchpad for Robinhood Chain and Stable — launch a coin, trade it, and read the on-chain research. og:site_name Pew.fun. og:url https://pew.fun/. twitter:card summary_large_image. twitter:site @pewdotfun. twitter:title Pew.fun. JS module /assets/index-CURS-kWl.js. Home copy in that bundle: no bonding curve · no graduation · tradeable from block one; pew.fun 90 vs others 70 creator share of LP fees." }
  - { id: R-2, publisher: Pew.fun, title: "pew.fun app bundle index-CURS-kWl.js", url: "https://pew.fun/assets/index-CURS-kWl.js", published_at: null, accessed_at: 2026-09-03T04:33:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-8, CLM-15, CLM-17, CLM-25, CLM-28], excerpt: "4663 sushi.factories [0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c] zap 0x16feDC5D…b18b. instantFactories include that address plus 0x3364e68A…8291 and 0x7DA7CF92…576e. VITE_INSTANT_FACTORY 0x5A73772d…Df42. Uniswap V3 label launches here first; SushiSwap V3 earlier coins trade here. Docs slug launch-party-mode: one seat price, liquidity locks with no withdraw path. Footer href x.com/pewdotfun and github.com/pewdotfun. Chain 988 name Stable." }
  - { id: R-3, publisher: Pew.fun, title: "pew.fun docs", url: "https://pew.fun/docs", published_at: null, accessed_at: 2026-09-03T04:33:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [], excerpt: "HTTP 200. title Pew.fun | Docs. Same SPA shell as the home page; twitter:site @pewdotfun. Docs bodies live in the JS bundle (launch-party-mode and No bonding curve labels)." }
  - { id: R-4, publisher: "@pewdotfun", title: "Pew profile", url: "https://x.com/pewdotfun", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-12, CLM-18, CLM-19, CLM-20, CLM-21, CLM-23, CLM-29, CLM-30], excerpt: "Display name Pew. Handle @pewdotfun. User id 2076941685083533312. Bio: (former) Robinhood Launchpad. Website pew.fun. Joined 2026-07-14. Followers about 1392 this pass. Latest posts through 2026-08-29 are short replies." }
  - { id: R-5, publisher: "@pewdotfun", title: "pew.fun is Live on Robinhood Chain", url: "https://x.com/pewdotfun/status/2078050192323195263", published_at: 2026-07-17T09:32:28Z, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-25, EVT-7], excerpt: "http://Pew.fun is Live on Robinhood Chain. Launch straight into locked Uniswap V3 (Noxa), No bonding curve + Live Streaming. Tradeable on Dex instantly. Creator Fee Routing (up to 10 wallets). Private pre-launch Party Mode. LP locked. Anti-whale first 15 min. Sybil Detection." }
  - { id: R-6, publisher: "@pewdotfun", title: "first SushiSwap launchpad on Robinhood Chain", url: "https://x.com/pewdotfun/status/2078252948111716628", published_at: 2026-07-17T22:58:09Z, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-16, CLM-25, EVT-4], excerpt: "first @SushiSwap launchpad on Robinhood Chain. Spawn memes straight into SushiSwap v3 - liquidity locked, tradeable from block one. no bonding curve. live now on http://pew.fun. Follow-up 2078252950431183171: https://pew.fun/token/0xaA4b6a79Df257E50E0079cD812A92262eE3951b0." }
  - { id: R-7, publisher: "@pewdotfun", title: "Pew team waiting for a comeback run", url: "https://x.com/pewdotfun/status/2087196186994409517", published_at: 2026-08-11T15:15:23Z, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-22, CLM-30, EVT-2], excerpt: "Pew team has been watching the market, trading, and experimenting with new contracts. Waiting for the right time and product for a comeback run." }
  - { id: R-8, publisher: "@pewdotfun", title: "SushiSwap fee collector news link", url: "https://x.com/pewdotfun/status/2083301718679544031", published_at: 2026-07-31T21:20:10Z, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "https://pew.fun/news/sushiswap-fee-collector-robinhood-chain. Adjacent post 2083300527052579085: We drove $10M in volume as the first launchpad on Sushi Swap. All the tokens you see now were originally launched on our site." }
  - { id: R-9, publisher: Blockscout, title: "Address 0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-10, CLM-18, EVT-6], excerpt: "hash 0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c. name null. is_contract true is_verified false proxy_type null implementations []. creator_address_hash 0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0. creation_transaction_hash 0x8cc821baf86de608a422c7d359aec5291bd6bdbd6cdbc46b7a883e80a828c523. creation_status success. coin_balance 0. has_logs true has_token_transfers true." }
  - { id: R-10, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() Pew factories", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-11, CLM-24, CLM-25, EVT-6], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32adab1 (53140145). 0xC9182C28…9D8c code 22352 B nonce 556 bal 0. owner() 0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0. pendingOwner() 0x0. ERC1967 slots zero. 0x5A73772d…Df42 code 24498 B nonce 5 owner() same. 0x3364e68A…8291 code 22352 B nonce 51 owner() same. 0x16feDC5D…b18b code 2122 B. Owner eth_getCode 0x nonce 454." }
  - { id: R-11, publisher: Blockscout, title: "Address 0xaA4b6a79Df257E50E0079cD812A92262eE3951b0", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xaA4b6a79Df257E50E0079cD812A92262eE3951b0", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-12, CLM-16, EVT-5], excerpt: "hash 0xaA4b6a79Df257E50E0079cD812A92262eE3951b0. name PewToken. is_contract true is_verified true. creator_address_hash 0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c. creation_transaction_hash 0x66fc302b4d737e045bc9cd40a782e7eae8a9b371e99512d610f9fc4ad763e8f5. token name Sushi Cat symbol SUSHICAT holders_count 5163 total_supply 1e27 (1B * 1e18). smart-contract file_path src/PewToken.sol is_fully_verified true." }
  - { id: R-12, publisher: Blockscout, title: "SUSHICAT creation tx 0x66fc302b…e8f5", url: "https://robinhoodchain.blockscout.com/tx/0x66fc302b4d737e045bc9cd40a782e7eae8a9b371e99512d610f9fc4ad763e8f5", published_at: 2026-07-17T22:51:21Z, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-25, EVT-5], excerpt: "timestamp 2026-07-17T22:51:21.000000Z status ok method 0xbc95ef4a from 0x2a3e14F098CE6778ffBc0a7f8AFB900456F6B47D to 0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c result success." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11, CLM-24], excerpt: "hash 0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0. is_contract false is_verified false name null creation_transaction_hash null. RPC eth_getCode 0x; nonce 454." }
  - { id: R-14, publisher: GitHub, title: "users/pewdotfun", url: "https://api.github.com/users/pewdotfun", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-19, CLM-26], excerpt: "login pewdotfun. name Pew.fun. html_url https://github.com/pewdotfun. blog https://pew.fun. location Robinhood. bio Social Launchpad on Robinhood chain. twitter_username pewdotfun. public_repos 0. created_at 2026-07-14T09:58:05Z. type User." }
  - { id: R-15, publisher: Dune 0x_emerson, title: "Robinhood memecoin launchpads 30d factory map", url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", published_at: null, accessed_at: 2026-09-03T04:54:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-4, CLM-5, CLM-12, CLM-18], excerpt: "Factory Map row factory_address 0xc9182c283a9b739fed26a8e7f55a4d2b09f39d8c launchpad Pew.fun notes Registry. Platform Summary 30d labeled pads include Circus 597, Bags 1611, Klik 359, Clanker 335; no Pew.fun row. Last labeled-launch day in the 30d window 2026-09-03." }
  - { id: R-16, publisher: Dune OKX, title: "Robinhood Chain launchpads lifetime (HARVEST.md)", url: "https://dune.com/okxweb3wallet/robinhood-chain-launchpads-rwa-paired-meme-analysis", published_at: null, accessed_at: 2026-09-03T04:53:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13], excerpt: "HARVEST.md OKX lifetime since 2026-07-01: pew.fun 555 launched $11.8M DEX. This pass GET of the dashboard URL returned Cloudflare 403 Attention Required, so the 555 / $11.8M figures are the prior harvest capture, not a live table read." }
  - { id: R-17, publisher: DexScreener, title: "SUSHICAT token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0xaA4b6a79Df257E50E0079cD812A92262eE3951b0", published_at: null, accessed_at: 2026-09-03T04:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-12, CLM-27], excerpt: "HTTP 200. pair 0x0FA4c2caa673Ee94D700D0DdEa662080548e4E27 chainId robinhood dexId sushiswap labels v3 baseToken SUSHICAT quoteToken WETH liquidity.usd 8672.95 volume.h24 101.02 pairCreatedAt 1784328681000. info websites https://pew.fun/ and pew.fun/token/0xaA4b…51b0; socials https://x.com/sushicatbot." }
  - { id: R-18, publisher: Blockscout, title: "Factory creation tx 0x8cc821ba…c523", url: "https://robinhoodchain.blockscout.com/tx/0x8cc821baf86de608a422c7d359aec5291bd6bdbd6cdbc46b7a883e80a828c523", published_at: 2026-07-17T21:52:30Z, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-25, EVT-6], excerpt: "timestamp 2026-07-17T21:52:30.000000Z status ok from 0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0 to null created_contract 0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c result success." }
  - { id: R-19, publisher: Blockscout, title: "Factory counters 0xC9182C28…9D8c", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c/counters", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "transactions_count 1231. token_transfers_count 5755. gas_usage_count 3946327203. validations_count 0." }
  - { id: R-20, publisher: Blockscout, title: "Address 0x5A73772dbb25ce8738534A9e96932Aee5C4bDf42", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x5A73772dbb25ce8738534A9e96932Aee5C4bDf42", published_at: null, accessed_at: 2026-09-03T04:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "hash 0x5A73772dbb25ce8738534A9e96932Aee5C4bDf42. name null is_contract true is_verified false proxy_type null. creator_address_hash 0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0. creation_transaction_hash 0xf9b234b6986d91065db419ef305c799ac765d6b2493f8600f16a1e5155a00b8b." }
  - { id: R-21, publisher: DefiLlama, title: "protocol/pew", url: "https://api.llama.fi/protocol/pew", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-26], excerpt: "HTTP 400 body Protocol not found for api.llama.fi/protocol/pew, /protocol/pew-fun, and /protocol/pew.fun. protocols list had no name/slug/twitter containing pew." }
  - { id: R-22, publisher: Blockscout, title: "LpFeesCollected tx 0x1baac473…46bc", url: "https://robinhoodchain.blockscout.com/tx/0x1baac473ccbba8361732832a4e03e195e0b9fefa26693c9675198068f1ff46bc", published_at: 2026-08-31T04:30:06Z, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, EVT-1], excerpt: "timestamp 2026-08-31T04:30:06.000000Z status ok method 0xa5e35baf from 0x9630DB9708EefD117a4331c25A774e859EE5c8b0 to 0xC9182C283a9b739FED26a8E7F55A4D2b09F39D8c. Log decoded LpFeesCollected(address indexed to, uint256 amount0, uint256 amount1) to 0x1B575b496Ce71bFC1cFe45B2faF2a2CCf596133d." }
  - { id: R-23, publisher: GitHub, title: "orgs/pewdotfun", url: "https://api.github.com/orgs/pewdotfun", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-26], excerpt: "HTTP 404 message Not Found for https://api.github.com/orgs/pewdotfun and https://api.github.com/orgs/pew-fun this pass. users/pewdotfun/repos returned []." }

gaps:
  - { priority: P0, question: "Is factory 0xC9182C28…9D8c source-verified anywhere, and what is its source name?", checked: "Blockscout api/v2 is_verified false name null proxy_type null; launched token 0xaA4b…51b0 is PewToken src/PewToken.sol fully verified; factory bytecode unverified, 2026-09-03", next: "read verified source if it lands; until then treat launch selectors 0xbc95ef4a / 0xa5e35baf as hex only" }
  - { priority: P0, question: "Does Emerson 30d omit Pew.fun because launches stopped after early August, or because the labeled factory is not emitting TokenCreated in that window?", checked: "Factory map still lists 0xc918…9d8c as Pew.fun; Platform Summary 30d has no Pew.fun row; sampled 2026-08-24..31 to-txs are LpFeesCollected; bio (former); 11 Aug comeback post, 2026-09-03", next: "page Blockscout logs for a TokenCreated-type event after 2026-08-04" }
  - { priority: P1, question: "What is the live new-launch factory: sushi 0xC918…9D8c, VITE_INSTANT_FACTORY 0x5A73772d…Df42 (nonce 5), or a stock canonical factory?", checked: "JS sushi.factories is 0xC918; VITE_INSTANT_FACTORY 0x5A73772d nonce 5 owner same EOA; 4663 instantFactories also 0x3364 nonce 51 and 0x7DA7 nonce 4, 2026-09-03", next: "decode a recent successful launch calldata on each factory" }
  - { priority: P1, question: "Is there an audit report whose scope matches factory 0xC918…9D8c?", checked: "pew.fun HTML, /docs title, @pewdotfun, GitHub user pewdotfun public_repos 0, Llama no protocol, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P2, question: "Are Stable (988) instantFactories 0xee0665f2…10DB / 0x096b4622…9a07 live, and should chain_scope stay multichain?", checked: "pew.fun meta and JS name Stable chain 988; no RPC to rpc.stable.xyz this pass", next: "eth_getCode those addresses on 988 before treating Stable as a reproduced venue" }
  - { priority: P2, question: "Can the OKX lifetime 555 launched / $11.8M DEX figure be reproduced on a live query?", checked: "HARVEST.md capture; this pass GET of the OKX Dune URL returned Cloudflare 403; factory nonce 556 is not a launch count, 2026-09-03", next: "do not treat nonce 556 as 555 launches; retry the dashboard or a Dune API" }
---

# pew.fun — research packet

## What it is

Pew.fun launches tokens straight into a locked SushiSwap or Uniswap v3 pool on Robinhood Chain. There is no bonding curve and no graduation; the token is tradeable from block one. The Emerson-mapped factory is 0xC9182C…9D8c. The site also lists later instant factories, stock-quote factories, and fixed-price launch parties. The handle is @pewdotfun; the site is pew.fun. The X bio currently reads (former) Robinhood Launchpad.

Themes: launchpad, stock-paired

## Why it matters

This is a documented Robinhood Chain pad with a reproduced factory and a bidirectional site/handle, not a census row. Emerson still maps 0xc918…9d8c to Pew.fun, but the 30d labeled board has no Pew.fun row. HARVEST.md OKX lifetime was 555 launched / $11.8M DEX; that dashboard 403'd this pass. Distinct from packed NOXA / hood.fun / Pons and from in-flight Circus, Sentry and Klik. [claim R-15 R-16] [verified R-9 R-10]

## What could go wrong

The Sushi factory is unverified on Blockscout. owner() on that factory and on later instant factories is one EOA with no code. The 17 Jul morning post named Uniswap V3 (Noxa) before this factory existed; an integrator that treats Pew as NOXA is on the wrong address. The handle bio says former while the site and fee-collect txs are still live. [verified R-9 R-10 R-13] [claim R-5 R-7]

## Product and mechanics

JS and posts: a launch has no bonding curve and no graduation. Liquidity locks in a SushiSwap v3 or Uniswap v3 pool; the token is tradeable from block one. Creator LP-fee share is shown as 90% vs 70% for others. Launch parties fix one seat price, cap airdrop at 2.5% of supply, pool ETH as the opening buy, and lock LP with no withdraw path. Canonical factories pair against NVDA, AAPL, SPCX, MSFT, TSLA, AMZN, GOOGL, SPY, PONS, or USDG. [claim R-1 R-2 R-6]

Same-day path change on 17 Jul 2026: 09:32Z post named locked Uniswap V3 (Noxa); 21:52Z factory 0xC918…9D8c deployed; 22:51Z SUSHICAT minted through it as PewToken; 22:58Z post named SushiSwap v3. JS still lists that address under sushi.factories and a later 24498-byte VITE_INSTANT_FACTORY for Uniswap. [claim R-2 R-5 R-6] [verified R-11 R-12 R-18]

## Control and security

owner() on factory 0xC918…9D8c, VITE_INSTANT_FACTORY 0x5A73772d…Df42, and JS instant factories 0x3364…8291 / 0x7DA7…576e returns 0x80f8ddBcF7808fd7FBffbbd27106ec202A3460D0. That address has no code. The Sushi factory is not an ERC1967 proxy this pass (slots zero, 22352-byte code, Blockscout unverified). No timelock address was located. Launched token SUSHICAT is source-verified as PewToken.sol. [verified R-10 R-11 R-13]

## Team and provenance

@pewdotfun names pew.fun in the website field. pew.fun HTML twitter:site is @pewdotfun. GitHub user pewdotfun names Pew.fun, blog pew.fun, twitter_username pewdotfun, public_repos 0. Display name Pew. Bio (former) Robinhood Launchpad. DexScreener lists @SushiCatBot on the SUSHICAT token; that is not the pad handle. [claim R-1 R-4 R-14 R-17]

## Economics and activity

HARVEST.md OKX lifetime since 2026-07-01: 555 launched / $11.8M DEX (dashboard 403 this pass). Factory nonce 556 and transactions_count 1231. Emerson 30d Platform Summary has no Pew.fun row. Latest sampled factory to-txs through 31 Aug 2026 are LpFeesCollected. SUSHICAT/WETH SushiSwap v3 pair 0x0FA4c2ca…4E27 liquidity.usd 8672.95 volume.h24 101.02. Llama has no pew protocol. Do not treat nonce 556 as a launch census. [claim R-16] [verified R-10 R-17 R-19 R-22]

## Material risks

- Sushi factory source is not verified on Blockscout this pass. [verified R-9]
- owner() on multiple factories is one EOA with no code. [verified R-10 R-13]
- 17 Jul morning post named Noxa; the reproduced factory is not the NOXA factory. [claim R-5] [verified R-9]
- Handle bio is (former); Emerson 30d has no Pew.fun launches. [claim R-4 R-15]
- OKX 555 / $11.8M was not reproduced this pass (Cloudflare 403). [claim R-16]
- No audit report URL. [unknown]
- DexScreener SUSHICAT twitter is @SushiCatBot, not @pewdotfun. [claim R-17]

## Verification passes

- Receipts: pew.fun HTML/JS/docs, X profile and 17 Jul / 31 Jul / 11 Aug posts, GitHub user/org, Emerson Dune factory map, OKX Dune 403, Llama 400, DexScreener SUSHICAT, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-9 R-10 R-15]
- Numbers: bytecode lengths, nonces, and owner() are chain 4663 RPC. SUSHICAT holders 5163 is Blockscout. Pair liq/vol are DexScreener. OKX 555 / $11.8M is HARVEST.md, not a live table. Emerson 30d has no Pew.fun row. [verified R-10 R-11 R-17]
- Adversarial: strongest contrary reading is that Pew is NOXA (the 09:32Z post) or that 0xC918…9D8c is idle leftover code. Same-day factory create + SUSHICAT PewToken + Sushi post, JS sushi.factories, Emerson map, and 31 Aug LpFeesCollected sit on this address. NOXA factory is 0xD9eC…FccB. Circus, Sentry and Klik factories do not match. [inference R-2 R-5 R-9 R-15]

## Operations log

- Census.yaml has no pew-fun row; no content/projects/pew-fun.yaml. Discovery inventory names pew-fun | pew.fun | @pewdotfun | none with factory 0xc918…9d8c and OKX 555 / $11.8M.
- pew.fun, /docs, /create, /launch, /news/sushiswap-fee-collector-robinhood-chain, and /assets/index-CURS-kWl.js opened 2026-09-03. www.pew.fun DNS failed.
- X Latest from:pewdotfun: profile, 17 Jul live Uni v3 (Noxa) post 2078050192323195263, 17 Jul Sushi live 2078252948111716628, 31 Jul news 2083301718679544031, 11 Aug comeback 2087196186994409517.
- RPC https://rpc.mainnet.chain.robinhood.com with browser User-Agent: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), pendingOwner(), ERC1967 slots on 0xC918…9D8c, 0x5A73772d…Df42, 0x3364…8291, 0x7DA7…576e, 0x16fe…b18b, 0x80f8…D0, 0xaA4b…51b0.
- Blockscout api/v2 for factory, owner, SUSHICAT, counters, creation txs, LpFeesCollected tx.
- Emerson Dune factory map Pew.fun 0xc918…9d8c; 30d platform table has no Pew.fun row. OKX Dune GET 403. api.llama.fi/protocol/pew 400. Gecko search timed out (first GET not 200; skipped).
- api.github.com/users/pewdotfun 200 public_repos 0; /orgs/pewdotfun 404.
- DexScreener tokens/0xaA4b…51b0 HTTP 200 SUSHICAT/WETH sushiswap v3.
