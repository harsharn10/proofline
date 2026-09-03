---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: circus
name: Circus
packet_tier: seed
as_of: 2026-09-03T04:26:00Z
prior_packet: null
supersedes: null
owned_slugs: [circus]
allowed_paths:
  - research/inbox/packets/circus/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Circus
  aliases: ["Circus Trade", circus.trade]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://circus.trade
  official_handle: "@circus_trade"
  repository: "NULL — no repository URL on circus.trade HTML, how-it-works, the barcus-1 JS map, or the @circus_trade bio this pass; GitHub org circus is a 2014 grammarware site at circus.github.io and is not linked from those surfaces"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve pad at ponsfamily.com / @ponsdotfamily with v1 factory 0xA5aAb3F0…1feB"
        - "Circus is circus.trade / @circus_trade with JS barcusLaunchpad 0xb7fA26c6…cb00"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "Circus Classic Curve is a bonding-curve pad that graduates; LONG is a Doppler-style stock-paired factory"
        - "No shared domain, handle, or reproduced address"
    - slug: varo
      signals: [other]
      contrary_signals:
        - "Pending packet Varo is a Uniswap v3 single-sided pad at varo.rialto.xyz / @launchonvaro with factory 0x851153fe…d0b8"
        - "Circus JS barcusLaunchpad 0xb7fA26c6…cb00 is not the Varo factory"
        - "No shared domain, handle, or reproduced address"
    - slug: coinbarrel
      signals: [other]
      contrary_signals:
        - "Pending packet Coinbarrel is a Uniswap V4 Hook V5 launchpad at coinbarrel.com / @UseCoinbarrel with launcher 0x4234e536…e70"
        - "Circus is a bonding-curve pad at circus.trade; Emerson maps Coinbarrel to 0x985dfae5…e46f and Circus to 0xb7fA26c6…cb00"
        - "No shared domain, handle, or reproduced address"
    - slug: letscash
      signals: [other]
      contrary_signals:
        - "Pending packet LetsCash is a Uniswap v4 pad at letscash.fun / @letscashfun with factory 0x5bd1Fbe7…4661"
        - "Circus factory 0xb7fA26c6…cb00 is not the LetsCash factory"
        - "No shared domain, handle, or reproduced address"
    - slug: crudecat
      signals: [other]
      contrary_signals:
        - "Pending packet CRUDECAT is a token (CircusQuoteTokenV3 0xBD957Cc9…cF3e) listed as Highest Market Cap on circus.trade"
        - "Circus is the launchpad; CRUDECAT is a graduated listing, not the factory"
        - "No shared domain, handle, or reproduced factory address"

classification:
  primary_leaf: launch/bonding-curve
  secondary_leaves: [launch/uni-pool-launch]
  mechanism_tags: [launchpad, bonding-curve, amm, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "JS barcusLaunchpad 0xb7fA26c6…cb00 is an ERC1967 proxy with 130-byte code on chain 4663; owner() 0x90Ae…0681; implementation slot 0x822E…2B96. Emerson 30d row Circus 597 tokens, factory map Registry. Site footer href x.com/circus_trade. Llama has no circus protocol on Robinhood Chain. Distinct from packed pons/long/varo/coinbarrel/letscash. Not a census row. [R-1] [R-3] [R-8] [R-9] [R-13]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-5], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11, CLM-14], note: "" }

links:
  - { kind: site, url: "https://circus.trade", authenticity: confirmed }
  - { kind: app, url: "https://circus.trade/create", authenticity: confirmed }
  - { kind: docs, url: "https://circus.trade/how-it-works", authenticity: confirmed }
  - { kind: x, url: "https://x.com/circus_trade", authenticity: confirmed }
  - { kind: other, url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", authenticity: unconfirmed }
  - { kind: other, url: "https://dune.com/okxweb3wallet/robinhood-chain-launchpads-rwa-paired-meme-analysis", authenticity: unconfirmed }

deployments:
  - label: barcusLaunchpad / circusQuoteLaunchpad (ERC1967 proxy)
    role: factory
    address:
      value: "0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-3, R-8, R-9]
  - label: Launchpad implementation (ERC1967 slot)
    role: implementation
    address:
      value: "0x822E175C1ae12166A0Ea3299d083Da48E6C42B96"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-8, R-9, R-10]
  - label: CircusLocker (barcusLocker)
    role: other
    address:
      value: "0xA256bC02dbB92ed1cB607a7DE7b0bbEBca29e930"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-11]
  - label: JS barcusTimelock
    role: timelock
    address:
      value: "0xC126829B4b3782ad30484b298C762507bf9bCa2A"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-12]
  - label: Launchpad owner() / factory creator
    role: admin
    address:
      value: "0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-8, R-9]
  - label: circusQuoteLocker
    role: other
    address:
      value: "0xF421C3977E5D5Fc4aBe50195391970a6AB1d2B7D"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-11]

metrics: []

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-8, R-9, R-10, R-11], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32abd50 (53132624). Factory 0xb7fA26c6…cb00 eth_getCode 130 bytes prefix 0x60806040527f360894a13ba1a3210667c82849; nonce 0x1078 (4216); balance 19871067298801643981 wei. owner() 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681. pendingOwner() zero. ERC1967 implementation slot 0x822E175C1ae12166A0Ea3299d083Da48E6C42B96. Admin slot empty. Implementation eth_getCode 24061 bytes. Owner eth_getCode 0x; nonce 165. CircusLocker 0xA256…e930 eth_getCode 4662 bytes. Blockscout factory name ERC1967Proxy is_verified true proxy_type eip1967; implementation is_verified false; locker name CircusLocker is_verified true." }
  - { id: REP-2, method: official-crosslink, checked_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-3, R-5], result: "circus.trade title circus — fair launches, enforced by code. twitter:card summary_large_image; no twitter:site. Footer href https://x.com/circus_trade aria-label Circus on X. JS chunk version barcus-1 chainId 4663 barcusLaunchpad and circusQuoteLaunchpad 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00. @circus_trade display name Circus Trade; bio t.co/6VGeesCX8p HTML location.replace circus.trade." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:22:00Z, receipt_ids: [R-13, R-14, R-15], result: "Dune 0x_emerson query 8130687 row Circus tokens_launched 597 factories 1 unique_deployers 370 last_launch 2026-09-03 01:37:41 UTC. Factory map query 8130705 0xb7fa26c6…cb00 launchpad Circus notes Registry. OKX query 8080854 row circus.trade tokens_launched 2597 volume_usd 46174831.84 volume_rwa 8809422.79. api.llama.fi/protocols no Robinhood Circus row; /protocol/circus HTTP 400." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Classic Curve: 1B fixed supply, 800M sold on an ETH bonding curve, no presale. Graduation at ~4.2 ETH raised mints a locked Uniswap pool in one transaction. How-it-works also describes a Fair Open lane powered by Doppler: locked Uniswap v4 pool from block one, no bonding phase. Creator 80% of the 1% curve fee, then 60% of graduated pool fees.", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://circus.trade", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@circus_trade", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "Circus", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-5, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-3, R-8, R-9, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x822E175C1ae12166A0Ea3299d083Da48E6C42B96", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-8, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/bonding-curve, class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-2, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "Factory 0xb7fA26c6…cb00 is an ERC1967 proxy. Implementation slot 0x822E175C…2B96. Admin slot empty. pendingOwner() zero.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "JS names barcusTimelock 0xC126829B…a2A with 5497-byte code on 4663. getMinDelay() reverted. Creator is treasury EOA 0xdCC4179a…cc31 (no code). Factory owner() is still the deploying EOA 0x90Ae…0681, not the timelock.", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-3, R-8, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "circus.trade home this pass: Raised on Curves $1.20M, Graduated Tokens 41. Emerson 30d last_launch 2026-09-03 01:37:41 UTC.", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Emerson Dune query 8130687 30d row Circus: tokens_launched 597, factories 1, unique_deployers 370, share_of_launches_pct 0.02713, avg_launches_per_day 19.9. DEX volume widget 8130694 had no Circus row this pass.", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "OKX Dune query 8080854 row circus.trade: tokens_launched 2597, tokens_traded 32, tokens_rwa_paired 1, volume_usd 46174831.84, volume_rwa 8809422.79, traders 21507, trades 316146. Aggregator reconstruction, not a Llama chain slice.", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "How-it-works says every circus token is minted from the same audited factory. No audit report URL was located on circus.trade, how-it-works, the JS map, or the @circus_trade profile this pass", class: unknown, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0xA256bC02dbB92ed1cB607a7DE7b0bbEBca29e930", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-3, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from census Pons and LONG and from pending packets varo, coinbarrel, letscash. No shared domain, handle, or reproduced factory address. CRUDECAT is a token listed on this pad, not the pad.", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-1, R-3, R-5, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Home hero: curve fills at ~4.2 ETH and graduates to Uniswap v3. How-it-works: raise ~$6k graduates to Uniswap v4; the same page later says graduates to Uniswap v4 at ~4.2 ETH raised. DEX target is not reproduced on RPC this pass.", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "Fair Open lane is described as powered by Doppler. JS also maps airlock 0xeb7C0347…0862 with 5695-byte code and owner() 0x21e2ce70…7a66. That airlock is not the Emerson Circus factory.", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-2, R-3, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@circus_trade.official", value: "circus.trade footer href https://x.com/circus_trade aria-label Circus on X. Bio t.co expands to circus.trade. HTML has no twitter:site this pass.", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-22, field: "account.@circus_trade.slug", value: circus, class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@circus_trade.role", value: official, class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-24, field: "account.@circus_trade.tier", value: watch, class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "NULL — no repository URL on circus.trade, how-it-works, JS, or @circus_trade; api.github.com/orgs/circus is grammarware circus.github.io (2014), not this product", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-1, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: identity.alias, value: "Circus Trade", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: other, value: "A second JS object also keys barcusLaunchpad to 0x9F4ef25050d704f8FbB2a1C8b8b6d6273f84D5Cf. RPC eth_getCode on that address was 0x on chain 4663. Do not treat it as the live factory.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-3, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-28, field: control.privileged-role, value: "owner() on the live factory proxy is EOA 0x90Ae…0681 with no code. That EOA created the proxy and CircusLocker. pendingOwner() zero.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-29, field: communications.status, value: "On 2026-09-02 @circus_trade posted that $CRUDE (@crudecatcoin) contributed to $USO volume on Arcus and that Circus can launch pairs including $pHOOD and $pBTC.", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-1, CLM-19]
    material_effect: "Home copy names Uniswap v3 graduation; how-it-works names Uniswap v4. Integrators cannot take either string as the live pool type without a later RPC of a graduated pair."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "RPC: Circus factory proxy has code, owner, and matching implementation slot"
    summary: "barcusLaunchpad 0xb7fA26c6…cb00 is an ERC1967 proxy on chain 4663 with 130-byte code, nonce 4216, owner 0x90Ae…0681, and implementation 0x822E…2B96, matching the official JS map and Emerson factory map."
    occurred_at: 2026-09-03T04:24:00Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [deployment.address, control.owner, control.proxy, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-9]
  - id: EVT-2
    type: company
    title: "@circus_trade posts bonding-curve stock-meme launchpad"
    summary: "On 2026-07-25 the handle posted that Circus is a bonding-curve stock-meme launchpad with ETH-priced and tokenized-stock lanes, automatic graduation, and permanently locked liquidity."
    occurred_at: 2026-07-25T01:07:30Z
    observed_at: 2026-09-03T04:20:00Z
    affected_fields: [product.mechanism, communications.status, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-3
    type: company
    title: "@circus_trade posts Circus x Arcus pTokens"
    summary: "On 2026-08-27 the handle posted that Circus can launch memes paired against Arcus pTokens, starting with 3x BTC long/short and 3x HOOD long."
    occurred_at: 2026-08-27T20:37:07Z
    observed_at: 2026-09-03T04:20:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-4
    type: company
    title: "@circus_trade posts single-side creator fees"
    summary: "On 2026-08-17 the handle posted that single-side fees pay creator rewards in ETH or stock tokens instead of a mix of ETH and the meme token."
    occurred_at: 2026-08-17T19:00:04Z
    observed_at: 2026-09-03T04:20:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-5
    type: company
    title: "@circus_trade posts CRUDECAT / Arcus USO volume"
    summary: "On 2026-09-02 the handle quoted @arcus_xyz and said $CRUDE (@crudecatcoin) was a major contributor to $USO volume, and that Circus can launch $pHOOD and $pBTC pairs."
    occurred_at: 2026-09-02T19:35:31Z
    observed_at: 2026-09-03T04:20:00Z
    affected_fields: [communications.status, relationship, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7]

receipts:
  - { id: R-1, publisher: Circus, title: "circus.trade home", url: "https://circus.trade/", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-8, CLM-12, CLM-17, CLM-18, CLM-19, CLM-21, CLM-23, CLM-25], excerpt: "title circus — fair launches, enforced by code. meta description: Launch and trade memecoins on Robinhood Chain alongside verified traders. Gasless, no bots, fair by construction. twitter:card summary_large_image. No twitter:site. Hero: Every coin starts on a transparent bonding curve priced in ETH. When the curve fills at ~4.2 ETH raised, it graduates to Uniswap v3 automatically, with liquidity locked forever. Raised on Curves $1.20M. Graduated Tokens 41. Footer href https://x.com/circus_trade." }
  - { id: R-2, publisher: Circus, title: "How it works", url: "https://circus.trade/how-it-works", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-17, CLM-19, CLM-20], excerpt: "title How it works — circus. Classic Curve: 1B fixed supply, 800M sold on the curve, zero reserved for the team. Graduation at ~$6k becomes a Uniswap v4 pool, LP locked forever. Later table: Graduates to Uniswap v4 at ~4.2 ETH raised. Creator 80% of the 1% curve trade fee, then 60% of graduated pool fees. Fair Open lane powered by Doppler: born in a locked Uniswap v4 pool, no bonding phase. Until graduation the token is non-transferable outside the curve." }
  - { id: R-3, publisher: Circus, title: "barcus-1 JS contract map", url: "https://circus.trade/_next/static/chunks/37fqyw7_s3_82.js?dpl=dpl_7DddG4aeBtqEjeUjvGy4n7kWeD8b", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-11, CLM-16, CLM-17, CLM-18, CLM-20, CLM-27], excerpt: "chainId 4663 chainName Robinhood Chain explorer robinhoodchain.blockscout.com version barcus-1 deployBlock 9614483. contracts.barcusLaunchpad and circusQuoteLaunchpad 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00. barcusLocker 0xA256bC02dbB92ed1cB607a7DE7b0bbEBca29e930. barcusTimelock 0xC126829B4b3782ad30484b298C762507bf9bCa2A. circusQuoteLocker 0xF421C3977E5D5Fc4aBe50195391970a6AB1d2B7D. A later object keys barcusLaunchpad to 0x9F4ef250…D5Cf." }
  - { id: R-4, publisher: Circus, title: "How it works (Fair Open / fees)", url: "https://circus.trade/how-it-works", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "Fair Open — born on the open market LIVE. Powered by Doppler — the launch infrastructure behind 12,000+ tokens on Robinhood Chain. For the first 2 minutes every swap pays an on-chain sniper tax that starts at 100% of output and decays linearly to 0%. Dev-buy optional, capped at 0.25 ETH on Classic Curve." }
  - { id: R-5, publisher: "@circus_trade", title: "Circus Trade profile", url: "https://x.com/circus_trade", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-18, CLM-21, CLM-22, CLM-23, CLM-24, CLM-26], excerpt: "Display name Circus Trade. Handle @circus_trade. Bio The Greatest Show plus t.co/6VGeesCX8p, whose HTML title is http://circus.trade and location.replace circus.trade. Followers 4963. circus.trade footer links this handle." }
  - { id: R-6, publisher: "@circus_trade", title: "Bonding-curve stock-meme launchpad", url: "https://x.com/circus_trade/status/2080822214123807143", published_at: 2026-07-25T01:07:30Z, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, EVT-2], excerpt: "Circus is proud to announce the first bonding curve based stock meme launchpad. Creators can now launch memes tied to over 15 real world tokenized stocks. Thread: two launch lanes, ETH-priced and tokenized stock-backed; every token begins on a transparent bonding curve; once the curve reaches its target the token graduates and liquidity is automatically created and permanently locked." }
  - { id: R-7, publisher: "@circus_trade", title: "CRUDECAT / Arcus USO volume", url: "https://x.com/circus_trade/status/2095234184511943103", published_at: 2026-09-02T19:35:31Z, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-29, EVT-5], excerpt: "Congrats to our partners @arcus_xyz on the RWA volume! $CRUDE (@crudecatcoin) was a major contributor to $USO volume on the platform, making $USO the second highest volume RWA after $NVDA! You can launch exclusive memecoin pairs on Circus powered by Arcus, including $pHOOD and $pBTC!" }
  - { id: R-8, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() factory 0xb7fA26c6…cb00", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-11, CLM-20, CLM-27, CLM-28, EVT-1], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32abd50 (53132624). 0xb7fA26c6…cb00 code 130 B nonce 4216 bal 19.871 ETH. owner() 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681. ERC1967 slot 0x822E175C1ae12166A0Ea3299d083Da48E6C42B96. pendingOwner() 0x0. Admin slot empty. Implementation code 24061 B. Owner code 0x nonce 165. 0x9F4ef250…D5Cf code 0x." }
  - { id: R-9, publisher: Blockscout, title: "Address 0xb7fA26c6fcB8801cAbc538B82A6e80Ae1C43cb00", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xb7fa26c6fcb8801cabc538b82a6e80ae1c43cb00", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-10, CLM-28, EVT-1], excerpt: "name ERC1967Proxy is_contract true is_verified true proxy_type eip1967. implementations 0x822E175C1ae12166A0Ea3299d083Da48E6C42B96 name null. creator_address_hash 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681. creation_transaction_hash 0x6218f38ac92e7e429d57e7f1f4fb88b3001096d8a53be5e19b47fd10c577e82e. counters transactions_count 115283 token_transfers_count 110716. coin_balance 19871067298801643981." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x822E175C1ae12166A0Ea3299d083Da48E6C42B96", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x822E175C1ae12166A0Ea3299d083Da48E6C42B96", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "hash 0x822E175C1ae12166A0Ea3299d083Da48E6C42B96. name null is_contract true is_verified false proxy_type null. creator_address_hash 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681. creation_transaction_hash 0xb8992cbc62b704e16adacf5f00916d1fb421057a33d71abf36d7c2616edfb6d7." }
  - { id: R-11, publisher: Blockscout, title: "CircusLocker and quote locker", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xA256bC02dbB92ed1cB607a7DE7b0bbEBca29e930", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "0xA256bC02…e930 name CircusLocker is_verified true creator 0x90Ae1f7D…0681. RPC eth_getCode 4662 bytes; owner() reverted. 0xF421C397…2B7D is_verified false creator 0x90Ae…0681; RPC code 4180 bytes. 0xE8C31D82…da4A (barcusLockerV2) RPC code 4805 bytes." }
  - { id: R-12, publisher: Blockscout, title: "Address 0xC126829B4b3782ad30484b298C762507bf9bCa2A", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xC126829B4b3782ad30484b298C762507bf9bCa2A", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "hash 0xC126829B4b3782ad30484b298C762507bf9bCa2A. name null is_contract true is_verified false. creator_address_hash 0xdCC4179a0876D8b0Ad36117d1DeC209ae2cCcc31. RPC eth_getCode 5497 bytes. getMinDelay() reverted. Treasury 0xdCC4179a…cc31 eth_getCode 0x nonce 129." }
  - { id: R-13, publisher: Dune, title: "Emerson RH launchpads 30d", url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-12, CLM-13, CLM-18], excerpt: "Query 8130687 Platform Summary 30d row Circus: tokens_launched 597 factories 1 unique_deployers 370 share_of_launches_pct 0.027131381328156 avg_launches_per_day 19.9 first_launch 2026-08-04 04:11:18 UTC last_launch 2026-09-03 01:37:41 UTC. Query 8130705 Factory Map: 0xb7fa26c6fcb8801cabc538b82a6e80ae1c43cb00 launchpad Circus notes Registry. DEX Volume by Pad 30d (8130694) had no Circus row." }
  - { id: R-14, publisher: Dune, title: "OKX RH launchpads RWA-paired meme analysis", url: "https://dune.com/okxweb3wallet/robinhood-chain-launchpads-rwa-paired-meme-analysis", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "Query 8080854 row launchpad=circus.trade: tokens_launched 2597 tokens_traded 32 tokens_rwa_paired 1 volume_usd 46174831.83576952 volume_rwa 8809422.794077814 rwa_vol_share 0.1907840796347754 traders 21507 traders_rwa 3121 trades 316146." }
  - { id: R-15, publisher: DefiLlama, title: "protocols list / protocol/circus", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [], excerpt: "api.llama.fi/protocols returned one name hit Juggler Red slug juggler-red twitter 0xCircus category Dexs chains [Optimism] tvl 940.47 — not Robinhood Chain and not circus.trade. GET api.llama.fi/protocol/circus and /circus-trade HTTP 400 this pass." }
  - { id: R-16, publisher: GitHub, title: "orgs/circus", url: "https://api.github.com/orgs/circus", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-25], excerpt: "login circus html_url https://github.com/circus created_at 2014-03-09 public_repos 1 blog http://circus.github.io twitter_username null. Repo circus.github.io description a circus of artefacts produced by @grammarware. orgs/circus-trade and /users/circustrade HTTP 404. Not linked from circus.trade." }
  - { id: R-17, publisher: "@circus_trade", title: "Circus x Arcus pTokens", url: "https://x.com/circus_trade/status/2093075356576264597", published_at: 2026-08-27T20:37:07Z, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "We're excited to announce our Circus x Arcus integration with pTokens! You can now launch memes paired against pTokens. pTokens represent leveraged positions on Arcus. We're launching with support for 3x BTC Long/Short and 3x HOOD Long only." }
  - { id: R-18, publisher: "@circus_trade", title: "Single-side fees", url: "https://x.com/circus_trade/status/2089427055855214885", published_at: 2026-08-17T19:00:04Z, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "Single-side fees are now available on Circus! This means all creator rewards are paid in Eth or Stock tokens, instead of a mix of Eth and the Meme token. More stable rewards for creators and better for traders." }

gaps:
  - { priority: P0, question: "Is launchpad implementation 0x822E…2B96 source-verified anywhere, and what is its source name?", checked: "Blockscout api/v2 name null is_verified false; RPC 24061-byte code; JS does not name the implementation, 2026-09-03", next: "read verified source if it lands; otherwise treat the proxy as shell-only" }
  - { priority: P0, question: "Does a graduated Circus pair land in Uniswap v3 or v4, and which pool manager / nfpm from the JS map is used?", checked: "Home hero says Uniswap v3; how-it-works says Uniswap v4; JS lists both uniswapV3Factory 0x1f7d7550…2EfA and poolManager 0x8366a39C…0951; no graduated-pool RPC this pass", next: "eth_getLogs or a graduated token (CRUDECAT 0xBD957Cc9…cF3e) against v3 and v4" }
  - { priority: P1, question: "Is there an audit report whose scope matches factory 0xb7fA…cb00 and CircusLocker 0xA256…e930?", checked: "how-it-works says audited factory; no report URL on site, JS, or @circus_trade, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P1, question: "What is barcusTimelock 0xC126…a2A if getMinDelay() reverts, and does it control any proxy owner?", checked: "JS label barcusTimelock; creator treasury EOA; factory owner() is still 0x90Ae…0681; getMinDelay reverted, 2026-09-03", next: "decode bytecode or verified source; eth_call roles if it is AccessManager" }
  - { priority: P2, question: "Why do Emerson 30d tokens (597) and OKX lifetime tokens (2597) differ so far from factory nonce 4216, and why is Circus missing from Emerson 30d DEX volume?", checked: "Emerson 8130687/8130694, OKX 8080854, RPC nonce 4216, 2026-09-03", next: "do not mix the three figures; curve volume may sit outside dex.trades" }
  - { priority: P2, question: "Is Fair Open / Doppler airlock 0xeb7C…0862 in production on circus.trade create, or only Classic Curve through 0xb7fA…cb00?", checked: "how-it-works marks Fair Open LIVE; JS maps airlock; Emerson factory map has only 0xb7fA…cb00 for Circus", next: "trace a Fair Open create tx if the UI exposes that lane" }
---

# Circus — research packet

## What it is

Circus is a Robinhood Chain token launchpad at circus.trade. Classic Curve launches a fixed-supply token onto an ETH bonding curve and graduates into a locked Uniswap pool. A second Fair Open lane is described as a Doppler locked Uniswap v4 pool with no bonding phase. The handle linked from the site footer is @circus_trade.

Themes: launchpad

## Why it matters

Emerson's 30-day labeled set still has a Circus row (597 tokens, one factory) while most DEX volume sits on other pads. OKX reconstructs about $46.2M lifetime DEX volume on the circus.trade label, with a large RWA share on few traded tokens. The pad is not a census row. [claim R-13 R-14]

## What could go wrong

The live factory is an upgradeable ERC1967 proxy. owner() is one externally owned account with no code and no pending owner. JS names a timelock, but getMinDelay() reverted and the proxy owner is still that EOA. Home copy and how-it-works disagree on Uniswap v3 versus v4 at graduation. Implementation source is not verified. [verified R-8 R-9] [claim R-2 R-12]

## Product and mechanics

Classic Curve: 1B supply, 800M sold on the curve, optional capped first buy, non-transferable outside the curve until graduation. Site and docs both name ~4.2 ETH as the raise target; how-it-works also writes ~$6k. Fees: 1% on the curve with 80% to the creator; after graduation 60% of pool fees to the creator. Fair Open is described as locked Uniswap v4 from the first block, powered by Doppler. Stock-paired and pToken (Arcus) lanes are posted by the handle. [claim R-1 R-2 R-6 R-17]

## Control and security

owner() on factory 0xb7fA26c6…cb00 returns 0x90Ae1f7Ded5B00599bF6BFdea6A1EF1f05FA0681. That address has no code. Implementation slot 0x822E…2B96 (24061-byte code, Blockscout not verified). CircusLocker 0xA256…e930 is verified. JS barcusTimelock 0xC126…a2A has code but getMinDelay() reverted. How-it-works says audited factory; no report URL this pass. [verified R-8 R-9 R-11] [claim R-2 R-12]

## Team and provenance

@circus_trade is linked from the circus.trade footer (aria-label Circus on X). The bio t.co expands to circus.trade. HTML has no twitter:site. Display name Circus Trade. No product GitHub URL. GitHub org circus is an unrelated 2014 grammarware site. [verified R-1 R-5] [claim R-16]

## Economics and activity

No Llama protocol row for circus.trade. Emerson 30d: 597 tokens, 370 deployers, last launch 2026-09-03 01:37:41 UTC; no Circus row in the 30d DEX volume table. OKX lifetime row circus.trade: 2597 launched, 32 traded, volume_usd 46.17M, volume_rwa 8.81M. Site counters: Raised on Curves $1.20M, Graduated Tokens 41. Factory nonce 4216 and Blockscout 115283 transactions. Do not mix those windows. [claim R-1 R-13 R-14 R-15] [verified R-8 R-9]

## Material risks

- Factory is upgradeable; owner is one EOA with no code. [verified R-8]
- Implementation source is not verified on Blockscout this pass. [verified R-10]
- JS timelock is not the proxy owner; getMinDelay reverted. [verified R-8] [claim R-12]
- Home Uniswap v3 versus how-it-works Uniswap v4 is an open conflict. [claim R-1 R-2]
- No audit report URL. [unknown]
- Emerson 30d DEX volume table omits Circus; OKX lifetime volume is a different method. [claim R-13 R-14]

## Verification passes

- Receipts: circus.trade, how-it-works, barcus-1 JS, X profile and posts, Emerson and OKX Dune, Llama protocols, GitHub org circus, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-3 R-8 R-13]
- Numbers: token counts and volume are Dune aggregator rows, not Llama. Bytecode lengths, nonce, owner(), and the implementation slot are chain 4663 RPC. Site $1.20M / 41 graduated are HTML counters. [verified R-8] [claim R-13 R-14]
- Adversarial: strongest contrary reading is that 0xb7fA…cb00 is a leftover quote-lane proxy and new launches use Doppler airlock 0xeb7C…0862, or that Emerson's Circus label is a registry alias for another pad. Official JS sets both barcusLaunchpad and circusQuoteLaunchpad to this address on chainId 4663; Emerson factory map labels it Circus. A second JS barcusLaunchpad 0x9F4e…D5Cf has no code on 4663. Pons, LONG, Varo, Coinbarrel, and LetsCash use different factories. [inference R-3 R-8 R-13]

## Operations log

- Census.yaml has no circus row; no content/projects/circus.yaml. Discovery inventory names the slug with factory 0xb7fA…cb00.
- circus.trade, /how-it-works, /create, and JS chunk 37fqyw7_s3_82.js opened 2026-09-03.
- X: @circus_trade profile, 25 Jul stock-meme thread, 17 Aug single-side fees, 27 Aug Arcus pTokens, 2 Sep CRUDECAT/USO post.
- RPC https://rpc.mainnet.chain.robinhood.com with browser User-Agent: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), pendingOwner(), ERC1967 slots on 0xb7fA…cb00, 0x822E…2B96, 0x90Ae…0681, 0xA256…e930, 0xC126…a2A, 0xF421…2B7D, 0xE8C3…da4A, 0x9F4e…D5Cf, 0xeb7C…0862, 0xdCC4…cc31.
- Blockscout api/v2 for factory, implementation, locker, timelock, quote locker, counters.
- Dune Emerson 8130687/8130705/8130694 and OKX 8080854.
- api.llama.fi/protocols filter circus; /protocol/circus and /circus-trade HTTP 400.
- api.github.com/orgs/circus (unrelated); orgs/circus-trade and users/circustrade 404.
