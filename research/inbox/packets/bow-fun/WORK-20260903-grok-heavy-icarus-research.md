---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: bow-fun
name: bow.fun
packet_tier: seed
as_of: 2026-09-03T05:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [bow-fun]
allowed_paths:
  - research/inbox/packets/bow-fun/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: bow.fun
  aliases: [bowdotfun, "bow.fun launchpad"]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://bow.fun
  official_handle: "@bowdotfun"
  repository: "NULL — github.com/bowdotfun/bowdotfun README is Pons Launchpad Contracts for ponsfamily.com; package.json says unofficial toolkit. Not factory source this pass"
  possible_matches:
    - slug: longbow
      signals: [ticker-only]
      contrary_signals:
        - "Census Longbow is a Morpho Blue credit overlay at longbow.cash / @longbowlend with token Longbow BOW 0x451b42A15100C340CA12F7c66DE06fac5EA2D751"
        - "GET of packets/bow on this branch returned 404; census.yaml has no bow row. The in-flight BOW/SPY token is Longbow, not this pad"
        - "bow.fun is a locked Uniswap V3/V4 launchpad at bow.fun / @bowdotfun with FactoryHub 0x229Faa919ABf14279E2461Dba53F039c5B4C7E29"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve pad at ponsfamily.com / @ponsdotfamily"
        - "bow.fun launches into locked Uniswap V3/V4 pools; site copy is no mint, no tax, LP locked by contract"
        - "github.com/bowdotfun/bowdotfun README names Pons Launchpad Contracts / ponsfamily.com; that is copypasta-pattern, not a shared factory"
        - "Reproduced bow.fun factories 0xC70E510E…ab79 and 0x229Faa91…7E29 are not Pons factories"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: [launch/stock-paired-factory]
  mechanism_tags: [launchpad, amm, stock-paired, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "FactoryHub 0x229Faa91…7E29 is an ERC1967 proxy on chain 4663 with 130-byte code, owner() 0x039485D0…A28a, implementation 0xda788f3C…eCCb, launchCount 172. Legacy V3 factory 0xC70E510E…ab79 has 16318-byte code, launchCount 8193, launchEnabled true. Site config.js: Standard Uniswap V3 WETH, IPO V4 vesting/whitelist, RWA V4 stock pair; LP locked, vanity suffix b03, graduation marker 3.7 ETH. Official API total 8333. Distinct from slug bow / Longbow BOW-SPY and from Pons. Not a census row. [R-2] [R-9] [R-10] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-7], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-5], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-12, CLM-18, CLM-20], note: "" }

links:
  - { kind: site, url: "https://bow.fun", authenticity: confirmed }
  - { kind: app, url: "https://bow.fun", authenticity: confirmed }
  - { kind: other, url: "https://bow.fun/config.js", authenticity: confirmed }
  - { kind: other, url: "https://portal.bow.fun", authenticity: confirmed }
  - { kind: x, url: "https://x.com/bowdotfun", authenticity: unconfirmed }
  - { kind: github, url: "https://github.com/bowdotfun/bowdotfun", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/bowbuy_bot", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/bowtrending_bot", authenticity: unconfirmed }

deployments:
  - label: FactoryHub v3.0 UUPS proxy (current launch entry)
    role: factory
    address:
      value: "0x229Faa919ABf14279E2461Dba53F039c5B4C7E29"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-2, R-9, R-10]
  - label: FactoryHub implementation
    role: implementation
    address:
      value: "0xda788f3CFcD27d145F4b16372f6B655F835FeCCb"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-10]
  - label: Legacy V3 launch factory
    role: factory
    address:
      value: "0xC70E510E14710Ea535CAB7b2414860aF63FEab79"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-9, R-10]
  - label: Legacy V3 LP locker
    role: other
    address:
      value: "0x904dCCB96d877E6db365282251Fa3dD156476660"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-9, R-10]
  - label: TokenCodeProvider
    role: other
    address:
      value: "0xF53C1Be2088dD9345CCC74582e81e0c19F462F1b"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-9, R-10]
  - label: V4 sniper hook
    role: other
    address:
      value: "0xAd3c0C6a079bECE5Cc89928eA986aA0584348080"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-9, R-10]
  - label: FactoryHub / legacy factory owner()
    role: admin
    address:
      value: "0x039485D0944E7274acECafa68702E1051dAEA28a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-9, R-10]
  - label: Sample Standard V3 token USELESS (vanity b03)
    role: token
    address:
      value: "0x93a2011bE42Bc96836fD9E02f55859D48dCBcb03"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-8, R-16]

metrics: []

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-9, R-10], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32b2228 (53158440). FactoryHub 0x229Faa91…7E29 eth_getCode 130 bytes prefix 0x60806040527f360894a1; nonce 0xcb (203); balance 0. owner() 0x039485d0944e7274acecafa68702e1051daea28a. ERC1967 implementation slot 0xda788f3cfcd27d145f4b16372f6b655f835feccb; admin slot zero. launchCount() 0xac (172). slotCount() 5. codeProvider() 0xf53c1be2088dd9345ccc74582e81e0c19f462f1b. pendingOwner() reverts. Implementation eth_getCode 21643 bytes. Owner eth_getCode 0x; nonce 0x9c (156)." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:08:00Z, receipt_ids: [R-9, R-10], result: "Legacy factory 0xC70E510E…ab79 eth_getCode 16318 bytes prefix 0x60808060405260043610; nonce 0x2003 (8195); owner() 0x039485…A28a. ERC1967 slots zero. launchCount() 0x2001 (8193). launchEnabled() 1. locker() 0x904dccb96d877e6db365282251fa3dd156476660. launchFee() 0. Locker code 3212 bytes; TokenCodeProvider 37799 bytes; sniperHook 1547 bytes. Creation tx 0x54a20612…38e4 block 7158095 timestamp 2026-07-11T18:27:38Z. Hub creation tx 0xb92128ac…4542 block 18448430 timestamp 2026-07-24T20:48:46Z." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-4, R-5, R-14], result: "bow.fun title bow.fun — fair launches on Robinhood Chain; og:url https://bow.fun/; og:site_name bow.fun; twitter:card summary_large_image; no twitter:site or twitter:creator. @bowdotfun bio Launch tokens on Robinhood. Liquidity locked forever. Creators earn fees. Every CA ends in b03. Website field portal.bow.fun. GitHub user bowdotfun blog bow.fun twitter_username bowdotfun. portal.bow.fun links bow.fun as Fair launches into locked Uniswap-V3 pools." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-8], result: "GET https://bow.fun/api/tokens?page=1&sort=newest HTTP 200. keys tokens, page, pages, total, perPage. total 8333 pages 334 perPage 25. Newest factory values 0x229faa91…7e29 and 0xc70e510e…ab79. Several Standard/RWA tokens checksum-end in b03. Top volume page first token 0xc9034bc2…7b03 Dat Boi DATBOI vol24 52684.61. Llama protocol/bow-fun HTTP 400. GeckoTerminal search timed out; skipped." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:11:00Z, receipt_ids: [R-16], result: "Token 0x93a2011bE42Bc96836fD9E02f55859D48dCBcb03 eth_getCode 6747 bytes; address ends in b03. name() Useless coin. symbol() USELESS. totalSupply() 1e27 (1B * 1e18). deployer() 0x07e2d89d79668ad83c741abf735852fef269c8d9. pool() 0xea2af4a5cebbace0f89278427c80c0327ef5ea6f. owner() reverts." }
  - { id: REP-6, method: repository-crosslink, checked_at: 2026-09-03T05:09:00Z, receipt_ids: [R-14, R-15], result: "api.github.com/users/bowdotfun HTTP 200 login bowdotfun name bowdotdev company BowDotFun blog bow.fun twitter_username bowdotfun public_repos 1. Repo bowdotfun/bowdotfun pushed 2026-07-27. README title Pons Launchpad Contracts; website ponsfamily.com; follow @ponsdotfamily. package.json name bowfun-toolkit description Unofficial developer toolkit for bow.fun. orgs/bowfun and orgs/bowdotfun 404." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "A launch deploys a fixed-supply ERC-20 into a locked Uniswap pool from the connected wallet. Standard is Uniswap V3 / WETH. IPO is Uniswap V4 with vesting and whitelist. RWA is Uniswap V4 paired with a stock token. LP is locked by contract with no withdraw function. Creators claim trade fees. Site marks a token graduated when the pool fills to 3.7 ETH; that is a board marker, not a bonding-curve migration. Vanity mining targets checksum suffix b03 on Standard and IPO.", class: claim, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://bow.fun", class: claim, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@bowdotfun", class: claim, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-4, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "bow.fun", class: claim, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x229Faa919ABf14279E2461Dba53F039c5B4C7E29", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-9, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0xC70E510E14710Ea535CAB7b2414860aF63FEab79", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-9, R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-8, R-9, R-10], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0x039485D0944E7274acECafa68702E1051dAEA28a", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "FactoryHub 0x229Faa91…7E29 is an ERC1967/UUPS proxy: 130-byte code, implementation slot 0xda788f3C…eCCb (21643-byte code). Legacy factory 0xC70E510E…ab79 is not a proxy this pass (16318-byte code, ERC1967 slots zero, Blockscout proxy_type null).", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "No timelock contract is named in config.js or on bow.fun this pass. owner() on FactoryHub and the legacy factory is EOA 0x039485…A28a with no code. pendingOwner() on the hub reverts.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "Official API /api/tokens total 8333 on 2026-09-03. Hub launchCount 172; legacy launchCount 8193 (sum 8365). Newest page includes hub launches dated 2026-09-02; last-trade page still shows legacy-factory tokens trading. HARVEST.md Emerson 30d: bow.fun 33 tokens / $0.25M DEX. This pass Dune dashboard HTML was a shell without those figures.", class: verified, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-8, R-10, R-17], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "HARVEST.md Emerson 30d bow.fun 33 tokens $250k DEX; OKX lifetime $62.3M. This pass Dune page was an SPA shell without the table; Llama protocol/bow-fun HTTP 400. Do not treat Llama protocol/bow (Kujira yield, TVL 0) as this pad.", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-17, R-18, R-19], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "No audit report URL was located on bow.fun, portal.bow.fun, config.js, the @bowdotfun profile, or GitHub user bowdotfun this pass", class: unknown, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0x93a2011bE42Bc96836fD9E02f55859D48dCBcb03", class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-8, R-16], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-17, field: taxonomy.secondary-leaf, value: launch/stock-paired-factory, class: claim, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from in-flight BOW/SPY token slug bow and from census Longbow (longbow.cash / @longbowlend / BOW 0x451b42…D751). Distinct from census Pons. GitHub README copypasta-pattern toward ponsfamily.com does not share a factory. No shared domain, handle, or reproduced address.", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-4, R-9, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@bowdotfun.official", value: "Handle website field is portal.bow.fun, not bow.fun. bow.fun HTML has twitter:card and no twitter:site. GitHub user bowdotfun blog bow.fun twitter_username bowdotfun. Posts link https://bow.fun/. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-4, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-20, field: "account.@bowdotfun.slug", value: bow-fun, class: claim, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@bowdotfun.role", value: project, class: claim, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "On 2026-07-15 @bowdotfun posted that creators can claim fees and airdrop them as ETH to random holders, live on bow.fun. On 2026-07-13 the handle posted it was day 1. Pinned post 2026-07-13: Is this thing on?", class: claim, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-6, R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: identity.alias, value: bowdotfun, class: claim, observed_at: 2026-09-03T05:04:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: control.privileged-role, value: "owner() on FactoryHub 0x229Faa91…7E29 and legacy factory 0xC70E510E…ab79 is the same EOA 0x039485…A28a. Slot treasuries decode to 0x772291C1…2f0e. Slot 0 IPO whitelist is enabled via whitelister 0x4FEb91a4…04f6.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "NULL — GitHub org bowdotfun 404; user bowdotfun public_repos 1; README is Pons Launchpad Contracts for ponsfamily.com; package.json unofficial bow.fun toolkit. Flag copypasta-pattern. Not factory source.", class: claim, observed_at: 2026-09-03T05:09:00Z, receipt_ids: [R-14, R-15], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "config.js FactoryHub slots: 0 = V4 IPO, 1 = V3 WETH Standard, 3 = V4 RWA. RPC getSlotInfo: slotCount 5; slot 0 version 4 whitelist enabled locker 0x67A1e17C…Be35; slot 1 version 3 locker 0x7fABf1aE…b8f5; slot 3 version 5 locker 0x90B667f3…fA24. launchFee 0. codeProvider matches 0xF53C1Be2…2F1b. New launches go through the hub; legacy factory launchEnabled remains true.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-27, field: other, value: "api.llama.fi/protocol/bow HTTP 200 is Kujira Bow yield (bow.kujira.network / @TeamKujira), not bow.fun. Flag wrong-chain. Do not use that TVL slice.", class: claim, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: deployment.role, value: "config.js names FactoryHub 0x229Faa91…7E29 as the single launch entry (UUPS). Legacy factory 0xC70E510E…ab79 is labeled existing tokens; RPC still returns launchEnabled true and launchCount 8193.", class: verified, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-2, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Legacy V3 factory deployed on chain 4663"
    summary: "Tx 0x54a20612…38e4 at 2026-07-11T18:27:38Z from EOA 0x039485…A28a created factory 0xC70E510E…ab79 and locker 0x904dCCB9…6660 in the same transaction."
    occurred_at: 2026-07-11T18:27:38Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [deployment.address, control.owner, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-10, R-21]
  - id: EVT-2
    type: company
    title: "@bowdotfun posts day-1 launchpad live"
    summary: "On 2026-07-13 the handle posted it was only day 1 on bowdotfun, with Launch. Build. Trade. Pinned post the same day: Is this thing on?"
    occurred_at: 2026-07-13T19:17:19Z
    observed_at: 2026-09-03T05:04:00Z
    affected_fields: [lifecycle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-20]
  - id: EVT-3
    type: company
    title: "@bowdotfun posts creator fee claim and ETH airdrop"
    summary: "On 2026-07-15 the handle posted that creators can claim fees and airdrop them as ETH to random holders, live on bow.fun."
    occurred_at: 2026-07-15T16:43:40Z
    observed_at: 2026-09-03T05:04:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-4
    type: onchain
    title: "FactoryHub ERC1967 proxy deployed"
    summary: "Tx 0xb92128ac…4542 at 2026-07-24T20:48:46Z from EOA 0x039485…A28a created FactoryHub 0x229Faa91…7E29. Blockscout name ERC1967Proxy is_verified true proxy_type eip1967."
    occurred_at: 2026-07-24T20:48:46Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [deployment.address, control.proxy, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-9, R-10, R-22]
  - id: EVT-5
    type: onchain
    title: "Official board still listing new hub launches on 2 Sep"
    summary: "API newest page first token RWA IPO Live Test 2 0x71843567…f259 created 2026-09-02T18:05:01Z through FactoryHub; several later Standard/RWA tokens end in b03."
    occurred_at: 2026-09-02T18:05:01Z
    observed_at: 2026-09-03T05:10:00Z
    affected_fields: [activity.status, lifecycle]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]

receipts:
  - { id: R-1, publisher: bow.fun, title: "bow.fun home", url: "https://bow.fun/", published_at: null, accessed_at: 2026-09-03T05:04:47Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-8, CLM-17, CLM-18, CLM-19], excerpt: "HTTP 200. title bow.fun — fair launches on Robinhood Chain. meta description: Launch a token into a locked Uniswap pool on Robinhood Chain — standard, IPO vesting, or RWA-paired. LP locked forever, creators earn fees. og:url https://bow.fun/. twitter:card summary_large_image. No twitter:site. Copy: Standard Uniswap V3 WETH; IPO V4 vesting whitelist; RWA V4 pair with a stock. Tokens graduate at 3.7 ETH. Every token address ends in b03. Non-custodial; no withdraw function." }
  - { id: R-2, publisher: bow.fun, title: "config.js public configuration", url: "https://bow.fun/config.js?v=114", published_at: 2026-08-04T21:15:31Z, accessed_at: 2026-09-03T05:05:51Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-8, CLM-11, CLM-15, CLM-17, CLM-24, CLM-26, CLM-28], excerpt: "chain.idDec 4663. contracts.factory 0xC70E510E14710Ea535CAB7b2414860aF63FEab79 legacy V3. locker 0x904dCCB96d877E6db365282251Fa3dD156476660. factoryHub 0x229Faa919ABf14279E2461Dba53F039c5B4C7E29 UUPS slots 0=V4 IPO, 1=V3 WETH, 3=V4 RWA. vanitySuffix b03. graduationEth 3.7. v4.sniperHook 0xAd3c0C6a079bECE5Cc89928eA986aA0584348080. vanityMining.provider 0xF53C1Be2088dD9345CCC74582e81e0c19F462F1b." }
  - { id: R-3, publisher: bow.fun, title: "portal.bow.fun suite", url: "https://portal.bow.fun/", published_at: 2026-07-31T18:23:04Z, accessed_at: 2026-09-03T05:10:15Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "HTTP 200. Welcome to the bow.fun suite. Tools for Robinhood Chain — launch, trade, track, trend. Card bow.fun: Fair launches into locked Uniswap-V3 pools, href https://bow.fun. Cards for t.me/bowbuy_bot and t.me/bowtrending_bot." }
  - { id: R-4, publisher: "@bowdotfun", title: "bowdotfun profile", url: "https://x.com/bowdotfun", published_at: null, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-3, CLM-4, CLM-18, CLM-19, CLM-20, CLM-21, CLM-23], excerpt: "Display name bowdotfun. Handle @bowdotfun. User id 2076013943772811264. Bio: Launch tokens on Robinhood. Liquidity locked forever. Creators earn fees. Every CA ends in b03. Website portal.bow.fun. Joined July 2026. Followers 2703. Pinned post 2076640300487856307 13 Jul 2026 Is this thing on? Latest original post 24 Aug 2026." }
  - { id: R-5, publisher: "@bowdotfun", title: "traders are the Chads of the trenches", url: "https://x.com/bowdotfun/status/2087578419965927901", published_at: 2026-08-12T16:34:15Z, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-2], excerpt: "https://bow.fun/ traders are the Chads of the trenches. Bio on the author card: Launch tokens on Robinhood. Liquidity locked forever. Creators earn fees. Every CA ends in b03." }
  - { id: R-6, publisher: "@bowdotfun", title: "Creators can now claim their fees + airdrop them as ETH", url: "https://x.com/bowdotfun/status/2077433932132323711", published_at: 2026-07-15T16:43:40Z, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-22, EVT-3], excerpt: "New on https://bow.fun/ . Creators can now claim their fees + airdrop them as ETH straight to random holders. Reward your community. Built into the launchpad. First ever. Live now. https://bow.fun/" }
  - { id: R-7, publisher: "@bowdotfun", title: "only day 1", url: "https://x.com/bowdotfun/status/2076747820426744094", published_at: 2026-07-13T19:17:19Z, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-22, EVT-2], excerpt: "We are rolling out constant updates currently to bowdotfun to make the experience greater than anywhere else. Bare with us as it’s only day 1 and I’d say we are off to a pretty damn good start. Launch. Build. Trade." }
  - { id: R-8, publisher: bow.fun, title: "market tokens API", url: "https://bow.fun/api/tokens?page=1&sort=newest", published_at: null, accessed_at: 2026-09-03T05:09:20Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-12, CLM-16, EVT-5], excerpt: "HTTP 200 JSON keys tokens, page, pages, total, perPage. total 8333 pages 334 perPage 25. First token 0x71843567690dfd8b8b19684a10f162e9120ff259 name RWA IPO Live Test 2 factory 0x229faa919abf14279e2461dba53f039c5b4c7e29 slotId 4 created 1788372301 (2026-09-02T18:05:01Z). Page also lists b03 tokens on the hub. Volume sort first Dat Boi 0xc9034bc2…7b03 vol24 52684.61." }
  - { id: R-9, publisher: Blockscout, title: "Address 0x229Faa919ABf14279E2461Dba53F039c5B4C7E29", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x229Faa919ABf14279E2461Dba53F039c5B4C7E29", published_at: null, accessed_at: 2026-09-03T05:07:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-10, CLM-18, EVT-1, EVT-4], excerpt: "hash 0x229Faa919ABf14279E2461Dba53F039c5B4C7E29. name ERC1967Proxy. is_contract true is_verified true proxy_type eip1967. implementations name null. creator_address_hash 0x039485D0944E7274acECafa68702E1051dAEA28a. creation_transaction_hash 0xb92128ac3a28b6bd2b149e0c160d1669cb4a0e8c5d2cc21a10c31e7281ac4542. Legacy factory 0xC70E510E…ab79 is_verified false proxy_type null same creator." }
  - { id: R-10, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() / launchCount bow.fun factories", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-11, CLM-12, CLM-24, CLM-26, CLM-28, EVT-1, EVT-4], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32b2228 (53158440). Hub 0x229Faa91…7E29 code 130 B nonce 203 owner 0x039485…A28a impl slot 0xda788f3C…eCCb launchCount 172 slotCount 5 codeProvider 0xF53C1Be2…2F1b. Legacy 0xC70E510E…ab79 code 16318 B nonce 8195 launchCount 8193 launchEnabled 1 locker 0x904dCCB9…6660. Owner code 0x nonce 156. Impl code 21643 B." }
  - { id: R-11, publisher: Blockscout, title: "Address 0xC70E510E14710Ea535CAB7b2414860aF63FEab79", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xC70E510E14710Ea535CAB7b2414860aF63FEab79", published_at: null, accessed_at: 2026-09-03T05:07:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "hash 0xC70E510E14710Ea535CAB7b2414860aF63FEab79. name null. is_contract true is_verified false proxy_type null implementations []. creator_address_hash 0x039485D0944E7274acECafa68702E1051dAEA28a. creation_transaction_hash 0x54a20612978b020ac01cdf2ea9e38ae2d679373942502118ee614b40956d38e4. Locker 0x904dCCB9…6660 creator is this factory, same tx." }
  - { id: R-12, publisher: Blockscout, title: "Address 0x904dCCB96d877E6db365282251Fa3dD156476660", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x904dCCB96d877E6db365282251Fa3dD156476660", published_at: null, accessed_at: 2026-09-03T05:07:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "hash 0x904dCCB96d877E6db365282251Fa3dD156476660. name null is_contract true is_verified false proxy_type null. creator_address_hash 0xC70E510E14710Ea535CAB7b2414860aF63FEab79. creation_transaction_hash 0x54a20612978b020ac01cdf2ea9e38ae2d679373942502118ee614b40956d38e4." }
  - { id: R-13, publisher: Blockscout, title: "Address 0xF53C1Be2088dD9345CCC74582e81e0c19F462F1b", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xF53C1Be2088dD9345CCC74582e81e0c19F462F1b", published_at: null, accessed_at: 2026-09-03T05:07:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "hash 0xF53C1Be2088dD9345CCC74582e81e0c19F462F1b. name null is_contract true is_verified false. creator_address_hash 0x039485D0944E7274acECafa68702E1051dAEA28a. creation_transaction_hash 0x142c67b42ef5d3004a497f744119ac99fa36549e5564e986d27009225f07f72b. Sniper hook 0xAd3c0C6a…8080 creator 0x0997996C531f1ec11bdA65E5fDC055f5d16cFf6B is_verified false." }
  - { id: R-14, publisher: GitHub, title: "users/bowdotfun", url: "https://api.github.com/users/bowdotfun", published_at: null, accessed_at: 2026-09-03T05:07:10Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-3, CLM-19, CLM-25], excerpt: "login bowdotfun. name bowdotdev. html_url https://github.com/bowdotfun. company BowDotFun. blog bow.fun. twitter_username bowdotfun. public_repos 1. created_at 2025-10-05T11:21:02Z. type User. orgs/bowfun, orgs/bowdotfun, orgs/bow-fun HTTP 404." }
  - { id: R-15, publisher: GitHub, title: "repos/bowdotfun/bowdotfun README", url: "https://github.com/bowdotfun/bowdotfun", published_at: 2026-07-27T15:55:32Z, accessed_at: 2026-09-03T05:09:38Z, kind: repository, authority: independent, authenticity: unconfirmed, supports: [CLM-18, CLM-25], excerpt: "full_name bowdotfun/bowdotfun. package.json name bowfun-toolkit description Unofficial developer toolkit for bow.fun. README.md title Pons Launchpad Contracts; typing SVG CREATE2 token factory for ponsfamily.com; website ponsfamily.com; follow @ponsdotfamily. Flag copypasta-pattern. Not treated as bow.fun factory source." }
  - { id: R-16, publisher: Robinhood Chain RPC, title: "eth_call name/symbol USELESS 0x93a2011b…cb03", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:11:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "0x93a2011bE42Bc96836fD9E02f55859D48dCBcb03 eth_getCode 6747 B ends in b03. name() Useless coin. symbol() USELESS. totalSupply() 1000000000000000000000000000. deployer() 0x07e2d89d79668ad83c741abf735852fef269c8d9. pool() 0xea2af4a5cebbace0f89278427c80c0327ef5ea6f. Official API listed this token factory 0x229Faa91…7E29 slotId 1 version 3." }
  - { id: R-17, publisher: Dune 0x_emerson, title: "Robinhood memecoin launchpads 30d (HARVEST.md)", url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", published_at: null, accessed_at: 2026-09-03T05:10:15Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12, CLM-13], excerpt: "HARVEST.md Emerson 30d: bow.fun 33 tokens $0.25M DEX; factory 0xc70e510e14710ea535cab7b2414860af63feab79. This pass GET of the dashboard returned HTTP 200 SPA shell without those table figures in the HTML, so 33 / $250k is the prior harvest capture, not a live table read." }
  - { id: R-18, publisher: Dune OKX, title: "Robinhood Chain launchpads lifetime (HARVEST.md)", url: "https://dune.com/okxweb3wallet/robinhood-chain-launchpads-rwa-paired-meme-analysis", published_at: null, accessed_at: 2026-09-03T06:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13], excerpt: "HARVEST.md OKX lifetime since 2026-07-01: bow.fun $62.3M DEX. Discovery-inventory R-23 recorded the same figure with factory 0xc70e510e…ab79. Not re-fetched as a live table this pass." }
  - { id: R-19, publisher: DefiLlama, title: "protocol/bow-fun and protocol/bow", url: "https://api.llama.fi/protocol/bow-fun", published_at: null, accessed_at: 2026-09-03T05:07:09Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13, CLM-27], excerpt: "GET api.llama.fi/protocol/bow-fun HTTP 400. GET api.llama.fi/protocol/bow HTTP 200 name Bow url https://bow.kujira.network/ twitter TeamKujira category Yield chains [Kujira] currentChainTvls.Kujira 0. That row is not bow.fun. GeckoTerminal search timed out; skipped per source order." }
  - { id: R-20, publisher: "@bowdotfun", title: "Is this thing on?", url: "https://x.com/bowdotfun/status/2076640300487856307", published_at: 2026-07-13T00:00:00Z, accessed_at: 2026-09-03T05:04:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-22, EVT-2], excerpt: "Pinned profile post: Is this thing on? Displayed Jul 13. 118K views on the profile card this pass. Same-day follow-up 2076747820426744094 called it day 1." }
  - { id: R-21, publisher: Robinhood Chain RPC, title: "Legacy factory creation tx 0x54a20612…38e4", url: "https://rpc.mainnet.chain.robinhood.com", published_at: 2026-07-11T18:27:38Z, accessed_at: 2026-09-03T05:10:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-1], excerpt: "eth_getTransactionByHash 0x54a20612978b020ac01cdf2ea9e38ae2d679373942502118ee614b40956d38e4 from 0x039485d0944e7274acecafa68702e1051daea28a to null block 7158095. Receipt contractAddress 0xc70e510e14710ea535cab7b2414860af63feab79 status 0x1. Block timestamp 1783794458 (2026-07-11T18:27:38Z)." }
  - { id: R-22, publisher: Robinhood Chain RPC, title: "FactoryHub creation tx 0xb92128ac…4542", url: "https://rpc.mainnet.chain.robinhood.com", published_at: 2026-07-24T20:48:46Z, accessed_at: 2026-09-03T05:10:15Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-4], excerpt: "eth_getTransactionByHash 0xb92128ac3a28b6bd2b149e0c160d1669cb4a0e8c5d2cc21a10c31e7281ac4542 from 0x039485d0944e7274acecafa68702e1051daea28a to null block 18448430. Receipt contractAddress 0x229faa919abf14279e2461dba53f039c5b4c7e29 status 0x1. Block timestamp 1784926126 (2026-07-24T20:48:46Z)." }

gaps:
  - { priority: P0, question: "Is FactoryHub implementation 0xda788f3C…eCCb source-verified anywhere, and what is its source name?", checked: "RPC 21643-byte code; Blockscout hub proxy is_verified true proxy_type eip1967 implementations name null; follow-up impl address page CF 403 this pass, 2026-09-03", next: "retry Blockscout api/v2 on the implementation; treat the hub as proxy-shell-only until source lands" }
  - { priority: P0, question: "Which factory is the live new-launch path: hub 0x229Faa91…7E29, legacy 0xC70E510E…ab79 (launchEnabled still true), or both?", checked: "config.js says launches happen on factoryHub; API newest page is hub; last-trade still mixes legacy; legacy launchEnabled() 1 launchCount 8193, 2026-09-03", next: "decode a 2026-09 launch calldata; do not treat Emerson's legacy-only factory map as the only live entry" }
  - { priority: P1, question: "Is graduation at 3.7 ETH an on-chain state change or a board label, and why do some RWA tokens show graduated below 3.7 WETH?", checked: "Site copy Tokens graduate at 3.7 ETH; config defaults.graduationEth 3.7; API KIRK slot 3 graduated true with weth 0.48; token ABI has migrated(), 2026-09-03", next: "eth_call migrated() and checkMigration on a graduated Standard token and an RWA token" }
  - { priority: P1, question: "Is there an audit report whose scope matches FactoryHub 0x229Faa91…7E29 or legacy factory 0xC70E510E…ab79?", checked: "bow.fun HTML, config.js, portal.bow.fun, @bowdotfun, GitHub user bowdotfun, Llama no protocol, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P2, question: "What is github.com/bowdotfun/bowdotfun relative to the on-chain factories — unofficial toolkit, leftover Pons README, or a source mirror?", checked: "README Pons Launchpad Contracts / ponsfamily.com / @ponsdotfamily; package.json unofficial toolkit; no factory address in the README excerpt this pass, 2026-09-03", next: "do not treat that repo as factory source; record any later commit that names 0x229Faa91… or 0xC70E510E…" }
  - { priority: P2, question: "Can Emerson 30d 33 tokens / $250k and OKX lifetime $62.3M be reproduced on a live query?", checked: "HARVEST.md; this pass Dune Emerson URL was an SPA shell without the table; Llama bow-fun 400; Gecko timed out, 2026-09-03", next: "retry Dune API or a CSV export; do not equate API total 8333 with the 30d 33-token window" }
---

# bow.fun — research packet

## What it is

bow.fun is a token launchpad on Robinhood Chain. A launch deploys a fixed-supply ERC-20 into a locked Uniswap pool from the creator's wallet: Standard is Uniswap V3 against WETH, IPO is Uniswap V4 with vesting and a whitelist, RWA is Uniswap V4 paired with a stock token. LP is locked by contract. Creators claim trade fees. Token addresses are mined to end in b03. The live launch entry in config.js is FactoryHub 0x229Faa91…7E29; a legacy V3 factory 0xC70E510E…ab79 remains deployed. The handle is @bowdotfun; the site is bow.fun.

Themes: launchpad, stock-paired

## Why it matters

This is a documented Robinhood Chain pad with two reproduced factories and an official board of 8333 tokens, not a census row. Emerson's 30d labeled board (harvest capture) put bow.fun at 33 tokens / $250k DEX against a lifetime OKX figure of $62.3M; the live Dune table was not in the HTML this pass. Distinct from the in-flight BOW/SPY token (slug bow / Longbow) and from Pons. [claim R-17 R-18] [verified R-8 R-10]

## What could go wrong

FactoryHub is an upgradeable ERC1967 proxy. owner() on the hub and on the legacy factory is one externally owned account with no code. The hub implementation is unverified this pass. The legacy factory still returns launchEnabled true, so an integrator that posts only to 0xC70E51…ab79 or only to the hub can land on a different generation than the UI. GitHub README for bowdotfun/bowdotfun is Pons copy and is not this pad's factory source. [verified R-9 R-10] [claim R-2 R-15]

## Product and mechanics

Site and config.js: Standard seeds a Uniswap V3 WETH pool; IPO uses Uniswap V4 with vesting and whitelist; RWA pairs against a stock token through USDG routing. LP is locked; the locker ABI exposes collect, not withdraw of principal. Default supply 1B, 2% max-wallet for 10 blocks, 1% pool fee, vanity suffix b03, graduation marker 3.7 ETH. Creators claim fees. [claim R-1 R-2]

FactoryHub slots 0/1/3 match IPO / Standard / RWA. RPC slotCount 5, launchCount 172, codeProvider 0xF53C1Be2…2F1b. Legacy factory launchCount 8193 and launchEnabled true. Official API total 8333, newest page on the hub, last-trade page still mixing legacy tokens that end in b03. [verified R-8 R-10]

## Control and security

owner() on FactoryHub and the legacy factory returns 0x039485D0944E7274acECafa68702E1051dAEA28a. That address has no code (nonce 156). The hub is an ERC1967 proxy (130-byte code, Blockscout ERC1967Proxy verified shell, implementation 0xda788f3C…eCCb 21643-byte code, not named this pass). Legacy factory is not a proxy. pendingOwner() on the hub reverts. No timelock address was located. Slot treasuries decode to 0x772291C1…2f0e. No audit report URL. [verified R-9 R-10] [unknown]

## Team and provenance

@bowdotfun names portal.bow.fun in the website field, not bow.fun. bow.fun HTML has no twitter:site. GitHub user bowdotfun sets blog bow.fun and twitter_username bowdotfun. Posts link https://bow.fun/. portal.bow.fun lists the launch app, a buy bot, and a trending bot. Flag unconfirmed-official. The GitHub README is Pons Launchpad Contracts for ponsfamily.com; package.json calls the repo an unofficial toolkit. Flag copypasta-pattern. Display name bowdotfun. [claim R-1 R-4 R-14 R-15]

## Economics and activity

Official API total 8333 tokens (pages 334) on 2026-09-03. Hub launchCount 172; legacy launchCount 8193. Emerson 30d harvest capture: 33 tokens / $250k DEX. OKX lifetime harvest capture: $62.3M. Llama has no bow-fun protocol; protocol/bow is Kujira Bow. Newest API token created 2026-09-02T18:05:01Z. Sample hub token USELESS 0x93a2011b…cb03 has 6747-byte code and totalSupply 1B. Do not treat 8333 as the 30d window. [verified R-8 R-10] [claim R-17 R-18 R-19]

## Material risks

- FactoryHub is upgradeable; owner is one EOA with no code. [verified R-10]
- Hub implementation source is not named or verified this pass. [verified R-9]
- Legacy factory 0xC70E51…ab79 still has launchEnabled true and is not a new-launch-only path in config.js. [verified R-10] [claim R-2]
- No audit report URL. [unknown]
- GitHub README is Pons copy; do not treat it as factory source. [claim R-15]
- Handle website is portal.bow.fun; site HTML does not name @bowdotfun. Flag unconfirmed-official. [claim R-1 R-4]
- Emerson 33 / $250k and OKX $62.3M were not live-table reproduced this pass. [claim R-17 R-18]
- Llama protocol/bow is Kujira, not this pad. [claim R-19]

## Verification passes

- Receipts: bow.fun, config.js, portal.bow.fun, /api/tokens, X profile and posts, GitHub user/repo, Llama 400/200, Dune shell, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-2 R-8 R-9 R-10]
- Numbers: 8333 is the official tokens API total, not Emerson 30d. launchCount 172 / 8193 and bytecode lengths are chain 4663 RPC. 33 / $250k and $62.3M are harvest captures. [verified R-8 R-10] [claim R-17]
- Adversarial: strongest contrary reading is that bow.fun is Longbow/BOW-SPY, or Pons because the GitHub README says Pons, or that Emerson's 33-token row means the pad is idle while 8333 is some other indexer. Config.js names these factories; RPC owner and launchCount match; API tokens.factory is those two addresses; sampled token USELESS ends in b03 and decodes on 4663. Graduation-at-3.7-ETH is a board marker, not a bonding curve in the site copy. [inference R-2 R-8 R-10]

## Operations log

- Census.yaml has no bow-fun or bow row; GET packets/bow-fun and packets/bow on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404 before write.
- Source order: X Latest from:bowdotfun, then bow.fun / config.js / portal.bow.fun /api/tokens, then Blockscout api/v2 and RPC. GeckoTerminal search timed out; skipped. Llama protocol/bow-fun HTTP 400; protocol/bow is Kujira — not used as a metric.
- X: @bowdotfun profile, pinned 13 Jul, day-1 13 Jul, fee-airdrop 15 Jul, later Aug meme posts through 24 Aug. Website field portal.bow.fun.
- RPC https://rpc.mainnet.chain.robinhood.com with browser User-Agent: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), pendingOwner(), launchCount(), launchEnabled(), locker(), codeProvider(), slotCount(), getSlotInfo/getSlotConfig slots 0-5, ERC1967 slots, creation txs, token name/symbol/totalSupply/deployer/pool.
- Blockscout api/v2 for hub, legacy factory, locker, codeProvider, sniperHook, zap succeeded once; follow-up impl and owner pages returned Cloudflare 403.
- api.github.com/users/bowdotfun 200; orgs 404; repo README Pons copypasta / package.json unofficial toolkit.
- Discovery inventory R-23 named factory 0xc70e510e…ab79, Emerson 33, OKX $62.3M; this pass adds FactoryHub 0x229Faa91…7E29 as the config.js launch entry.
