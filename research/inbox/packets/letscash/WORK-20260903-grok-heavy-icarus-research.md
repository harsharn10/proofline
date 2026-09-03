---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: letscash
name: LetsCash
packet_tier: seed
as_of: 2026-09-03T03:05:00Z
prior_packet: null
supersedes: null
owned_slugs: [letscash]
allowed_paths:
  - research/inbox/packets/letscash/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: LetsCash
  aliases: [letscash.fun, letscashfun]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://letscash.fun
  official_handle: "@letscashfun"
  repository: https://github.com/letscashfun/sdk
  possible_matches:
    - slug: noxa
      signals: [other]
      contrary_signals:
        - "Census NOXA is the week-one Uniswap v3 pad at the Noxa factory; LetsCash is a Uniswap v4 pad at letscash.fun / @letscashfun"
        - "LetsCash factory 0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661 is not the NOXA factory"
        - "LetsCash docs route a platform share into CASHCAT buys; that does not make the pad the CASHCAT token"
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Hookr is a programmable-hook marketplace; LetsCash ships one protocol hook, CashCatHookV2"
        - "No shared domain, handle or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "pools.trade InstantLaunchStrategy is a hookless Uniswap v4 pool; LetsCash takes a custom hook tax on the quote leg"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: [launch/hook-programmable]
  mechanism_tags: [launchpad, fee-routing, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Factory 0x5bd1…4661 is an ERC1967 UUPS proxy with non-empty code on 4663; hook 0x75A5…2AEC is verified CashCatHookV2. Site twitter:site is @letscashfun. Llama Robinhood-only DEX volume 24h $2.996M, all-time $112.05M. Current factory implementation is unverified. Distinct from the CASHCAT token. [R-1] [R-4] [R-6] [R-7] [R-12] [R-13]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-4], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-11, CLM-17], note: "" }

links:
  - { kind: site, url: "https://letscash.fun", authenticity: confirmed }
  - { kind: app, url: "https://www.letscash.fun/launch", authenticity: confirmed }
  - { kind: docs, url: "https://www.letscash.fun/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/letscashfun", authenticity: confirmed }
  - { kind: github, url: "https://github.com/letscashfun/sdk", authenticity: confirmed }
  - { kind: other, url: "https://www.letscashfun.com/docs", authenticity: unconfirmed }

deployments:
  - label: Factory (UUPS ERC1967 proxy)
    role: factory
    address:
      value: "0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-4, R-6, R-8, R-12]
  - label: Factory implementation (current ERC1967 slot)
    role: implementation
    address:
      value: "0x40250b4C73FC30f8F6ad077744B0124B3f111C28"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-10, R-12]
  - label: Hook (CashCatHookV2)
    role: other
    address:
      value: "0x75A54357D9C78a2Db19004a5FDc76c50F9242AEC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-7, R-9, R-12]
  - label: Factory and hook owner (SafeProxy)
    role: multisig
    address:
      value: "0xD2DeFbd13aFF22D6989E8C14B4517Ec308079E91"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-11, R-12]

metrics:
  - { kind: volume_24h, value: 2996602, currency: USD, as_of: 2026-09-03T02:50:00Z, window: 24h, method: "api.llama.fi/summary/dexs/letscash total24h; chains Robinhood Chain only; adapter doublecounted", class: claim, receipt_ids: [R-13] }
  - { kind: fees_24h, value: 91049, currency: USD, as_of: 2026-09-03T02:50:00Z, window: 24h, method: "api.llama.fi/summary/fees/letscash total24h; chains Robinhood Chain only", class: claim, receipt_ids: [R-14] }
  - { kind: revenue_24h, value: 11311, currency: USD, as_of: 2026-09-03T02:57:00Z, window: 24h, method: "api.llama.fi/summary/fees/letscash?dataType=dailyRevenue total24h; chains Robinhood Chain only", class: claim, receipt_ids: [R-15] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:48:00Z, receipt_ids: [R-12], result: "eth_getCode non-empty on rpc.mainnet.chain.robinhood.com at block 0x329f25c (53080668): factory 176 bytes, implementation 23567 bytes, hook 13927 bytes, owner Safe 171 bytes. ERC1967 impl slot 0x40250b4C73FC30f8F6ad077744B0124B3f111C28. owner() on factory and hook 0xD2DeFbd13aFF22D6989E8C14B4517Ec308079E91. pendingOwner() 0x0 on both. launchConfigCount() 64." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:50:00Z, receipt_ids: [R-6, R-7, R-8, R-9, R-10, R-11], result: "Blockscout API v2: factory is_contract true is_verified true name ERC1967Proxy proxy_type eip1967 implementations 0x40250b4C…1C28; that implementation is_verified false; hook is_contract true is_verified true name CashCatHookV2; owner 0xD2DeFb…9E91 is_contract true is_verified true name SafeProxy implementation SafeL2. Factory created 2026-07-10T13:22:29Z tx 0x2b90e5b7…9a5c. Hook created 2026-08-05T23:13:30Z tx 0x8e562b48…be1e." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:57:00Z, receipt_ids: [R-1, R-5, R-18], result: "letscash.fun meta twitter:site and twitter:creator are @letscashfun; JSON-LD sameAs https://x.com/letscashfun. @letscashfun posts 2093569704073761173 and 2092753121453773066 link https://www.letscash.fun/launch and https://www.letscash.fun/docs#airdrop." }
  - { id: REP-4, method: repository-crosslink, checked_at: 2026-09-03T02:46:00Z, receipt_ids: [R-4, R-6, R-7], result: "letscashfun/sdk README names letscash.fun and Robinhood 4663 Factory (UUPS proxy) 0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661 and Hook 0x75A54357D9C78a2Db19004a5FDc76c50F9242AEC; Blockscout hashes match." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T02:57:00Z, receipt_ids: [R-13, R-14, R-15], result: "Llama slug letscash, twitter letscashfun, category Launchpad, chains [Robinhood Chain]. dexs total24h 2996602 totalAllTime 112045029.89. fees total24h 91049. dailyRevenue total24h 11311. audits 0. doublecounted true." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "One transaction mints a fixed-supply ERC-20 into a locked Uniswap v4 pool quoted in ETH or USDG. A custom hook taxes the quote leg (default 1%, creator share above a 0.3% platform cut). No bonding curve and no migration. Self-burn mode routes the creator share into buying and destroying the launched token.", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-1, R-2, R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://letscash.fun", class: verified, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-1, R-4, R-5, R-18], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@letscashfun", class: verified, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-4, R-6, R-8, R-12, R-16], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x75A54357D9C78a2Db19004a5FDc76c50F9242AEC", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-4, R-7, R-9, R-12], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x40250b4C73FC30f8F6ad077744B0124B3f111C28", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-6, R-10, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0xD2DeFbd13aFF22D6989E8C14B4517Ec308079E91", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-6, R-7, R-8, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: identity.repository, value: "https://github.com/letscashfun/sdk", class: verified, observed_at: 2026-09-03T02:46:00Z, receipt_ids: [R-4], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "owner() on factory and hook returns SafeProxy 0xD2DeFbd13aFF22D6989E8C14B4517Ec308079E91; pendingOwner() is zero on both", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: control.proxy, value: "Factory is an ERC1967 UUPS proxy (admin slot empty). Current implementation 0x40250b4C73FC30f8F6ad077744B0124B3f111C28 is unverified. Proxy shell is verified as ERC1967Proxy. SDK states the factory address stays put across upgrades.", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-4, R-6, R-10, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: product.mechanism, value: "launchConfigCount() on the factory returns 64", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Llama dexs letscash total24h 2996602 USD on Robinhood Chain only, 2026-09-03", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-13], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Llama fees letscash total24h 91049 USD on Robinhood Chain only, 2026-09-03", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-14], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Llama dailyRevenue letscash total24h 11311 USD on Robinhood Chain only, 2026-09-03", class: verified, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-15], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Llama dexs letscash totalAllTime 112045029.89 USD on Robinhood Chain only, 2026-09-03. Adapter is doublecounted with generic Uniswap v4.", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-13, R-16], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-17, field: relationship, value: "LetsCash is a launchpad, not the CASHCAT token. Hook source name is CashCatHookV2. legacy.letscash.fun says early tests ran 'when this was CashCat'. Platform docs send a share of the 0.3% cut to CASHCAT buys. Census has no CASHCAT row.", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-3, R-7, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: taxonomy.primary-leaf, value: "launch/uni-pool-launch — tokens mint into a locked Uniswap v4 pool with no bonding curve. Secondary launch/hook-programmable because CashCatHookV2 takes the tax and rejects liquidity removal.", class: inference, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-2, R-3, R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: account.@letscashfun.tier, value: watch, class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: account.@letscashfun.role, value: official, class: claim, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: account.@letscashfun.slug, value: letscash, class: claim, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-22, field: account.@letscashfun.note, value: "Official handle; site twitter:site @letscashfun; bio 'custom launchpad on robinhood, built on uniswap v4.' Not in content/accounts.yaml this pass.", class: claim, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-23, field: security.audit, value: "@letscashfun named @SBSecurity_ on 2026-08-06 and 2026-08-26. Llama audits field is 0. SECURITY.md says contracts are audited separately and does not link a report.", class: claim, observed_at: 2026-09-03T02:46:00Z, receipt_ids: [R-13, R-19, R-21, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: security.audit, value: "No audit report PDF or scope URL was located this pass", class: unknown, observed_at: 2026-09-03T02:46:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: product.mechanism, value: "Platform 0.3% of volume lands on a revenue splitter: a quarter buys CASHCAT to burn, a quarter buys CASHCAT for treasury, the rest runs the platform. Creator share is claimable in the quote asset, or burned on self-burn launches.", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: relationship, value: "@letscashfun said Indices is live by pointing a fee recipient at an indices treasury; quoted @TheIndexFi. No new LetsCash contract for that path.", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: identity.alias, value: "letscashfun.com serves docs and about copy for the same product; canonical domain in this packet is letscash.fun", class: claim, observed_at: 2026-09-03T02:44:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: ct
    title: "@RHDaily__ lists @letscashfun ninth on 24h pad board"
    summary: "@RHDaily__ on 1 Sep 22:00 UTC ranked @letscashfun ninth at $2.0M 24h volume, behind Pons $315.9M."
    occurred_at: 2026-09-01T22:00:00Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-2
    type: company
    title: "@letscashfun: supply is any whole number from 1B to 1Qa"
    summary: "@letscashfun said launches may pick any whole-number supply from 1 billion to 1 quadrillion; SDK 0.4.0."
    occurred_at: 2026-08-29T05:21:28Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-3
    type: company
    title: "@letscashfun shipped an airdropper and named an SBSecurity audit"
    summary: "@letscashfun said a permissionless airdrop contract is live in the launch flow and thanked @SBSecurity_ for an audit."
    occurred_at: 2026-08-26T23:16:40Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [product.mechanism, security.audit]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-4
    type: company
    title: "@letscashfun: Indices live via fee-stream recipient"
    summary: "@letscashfun said Indices is live by pointing a fee recipient at an indices treasury; quoted @TheIndexFi."
    occurred_at: 2026-08-19T22:48:43Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [product.mechanism, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-5
    type: company
    title: "@letscashfun: 1-10% fees, USDG quotes, fee-stream splits"
    summary: "@letscashfun said fees are 1-10% with a 0.3% platform cut, USDG quotes, and up to four fee-stream wallets."
    occurred_at: 2026-08-06T00:00:53Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-6
    type: onchain
    title: "CashCatHookV2 deployed on Robinhood Chain"
    summary: "Hook 0x75A5…2AEC created 2026-08-05T23:13:30Z via CREATE2; Blockscout name CashCatHookV2, source verified."
    occurred_at: 2026-08-05T23:13:30Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7, R-9]
  - id: EVT-7
    type: ct
    title: "@leakmealpha: @letscashfun rebranded and moved to Robinhood Chain"
    summary: "@leakmealpha on 28 Jul said @letscashfun rebranded, moved to Robinhood Chain, and paused launches for an upgrade."
    occurred_at: 2026-07-28T21:08:17Z
    observed_at: 2026-09-03T02:35:00Z
    affected_fields: [identity.name, lifecycle]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-8
    type: onchain
    title: "LetsCash factory ERC1967 proxy created on chain 4663"
    summary: "Factory 0x5bd1…4661 created 2026-07-10T13:22:29Z by 0x0679…0881; Blockscout name ERC1967Proxy, source verified."
    occurred_at: 2026-07-10T13:22:29Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-8]

receipts:
  - { id: R-1, publisher: letscash.fun, title: "letscash.fun home", url: "https://www.letscash.fun/", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-20, CLM-21, CLM-22], excerpt: "title letscash.fun: launch and trade memecoins on Robinhood Chain. meta twitter:site @letscashfun twitter:creator @letscashfun. JSON-LD sameAs https://x.com/letscashfun. Footer link @letscashfun. Board: coins issued, volume, CASHCAT bought, traders. Link to legacy.letscash.fun." }
  - { id: R-2, publisher: letscashfun.com, title: "Documentation & Developer Guide", url: "https://www.letscashfun.com/docs", published_at: null, accessed_at: 2026-09-03T02:44:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-18, CLM-25, CLM-27], excerpt: "The launcher. One transaction deploys the token, creates and seeds the Uniswap v4 pool, locks the liquidity, and runs your first buy. Upgradeable behind a proxy so new launch modes can ship. hook: The fee engine, riding inside every swap via Uniswap v4 hooks. It also rejects every attempt to remove pool liquidity." }
  - { id: R-3, publisher: letscashfun.com, title: "How letscashfun.com works", url: "https://www.letscashfun.com/about", published_at: null, accessed_at: 2026-09-03T02:44:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-17, CLM-18, CLM-25, CLM-27], excerpt: "letscashfun is a memecoin launchpad on Robinhood Chain with one loop at its core: tokens launch, trading pays a tax the creator set, in ETH, never in memecoins. Creators keep everything above the platform's 0.3%, which buys CASHCAT on-chain, burns it, and pays to keep the place running. no bonding curve. no migration." }
  - { id: R-4, publisher: letscashfun, title: "@letscashfun/sdk README", url: "https://github.com/letscashfun/sdk", published_at: null, accessed_at: 2026-09-03T02:46:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-5, CLM-8, CLM-9, CLM-11, CLM-18], excerpt: "TypeScript SDK for the letscash.fun launchpad on Robinhood Chain. Factory (UUPS proxy) 0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661. Hook 0x75A54357D9C78a2Db19004a5FDc76c50F9242AEC. Pool manager 0x8366a39CC670B4001A1121B8F6A443A643e40951. A launch mints a fixed-supply ERC-20 and initialises a Uniswap v4 pool quoted in ETH or USDG." }
  - { id: R-5, publisher: "@letscashfun", title: "letscash.fun profile", url: "https://x.com/letscashfun", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-19, CLM-20, CLM-21, CLM-22], excerpt: "Display name letscash.fun, handle @letscashfun, bio 'custom launchpad on robinhood, built on uniswap v4.', Blue Verified, 6119 followers." }
  - { id: R-6, publisher: Blockscout, title: "Factory 0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661", url: "https://robinhoodchain.blockscout.com/address/0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-8, CLM-11, EVT-8], excerpt: "API v2: hash 0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661, name ERC1967Proxy, is_contract true, is_verified true, proxy_type eip1967, implementations 0x40250b4C73FC30f8F6ad077744B0124B3f111C28, creator 0x0679f72DCC42d8fBEB19FC2e0215Be8e7C090881, creation_transaction_hash 0x2b90e5b780a0953828f000af8215bf583e98ef988f8827623f3a6acb9a8f9a5c." }
  - { id: R-7, publisher: Blockscout, title: "Hook 0x75A54357D9C78a2Db19004a5FDc76c50F9242AEC", url: "https://robinhoodchain.blockscout.com/address/0x75A54357D9C78a2Db19004a5FDc76c50F9242AEC", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-8, CLM-17, EVT-6], excerpt: "API v2: hash 0x75A54357D9C78a2Db19004a5FDc76c50F9242AEC, name CashCatHookV2, is_contract true, is_verified true, proxy_type null, creator 0x4e59b44847b379578588920cA78FbF26c0B4956C, creation_transaction_hash 0x8e562b482dec207c8387292b9625726da23a44e580f80257a9d6b6c8b3c5be1e." }
  - { id: R-8, publisher: Blockscout, title: "Factory creation tx 0x2b90e5b7…", url: "https://robinhoodchain.blockscout.com/tx/0x2b90e5b780a0953828f000af8215bf583e98ef988f8827623f3a6acb9a8f9a5c", published_at: 2026-07-10T13:22:29Z, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, EVT-8], excerpt: "timestamp 2026-07-10T13:22:29.000000Z, status ok, block_number 6112086, from 0x0679f72DCC42d8fBEB19FC2e0215Be8e7C090881 (is_contract false), created_contract 0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661 name ERC1967Proxy." }
  - { id: R-9, publisher: Blockscout, title: "Hook creation tx 0x8e562b48…", url: "https://robinhoodchain.blockscout.com/tx/0x8e562b482dec207c8387292b9625726da23a44e580f80257a9d6b6c8b3c5be1e", published_at: 2026-08-05T23:13:30Z, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, EVT-6], excerpt: "timestamp 2026-08-05T23:13:30.000000Z, status ok, block_number 28872652, from 0x0679f72DCC42d8fBEB19FC2e0215Be8e7C090881, to CREATE2 deployer 0x4e59b44847b379578588920cA78FbF26c0B4956C." }
  - { id: R-10, publisher: Blockscout, title: "Factory implementation 0x40250b4C73FC30f8F6ad077744B0124B3f111C28", url: "https://robinhoodchain.blockscout.com/address/0x40250b4C73FC30f8F6ad077744B0124B3f111C28", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-11], excerpt: "API v2: hash 0x40250b4C73FC30f8F6ad077744B0124B3f111C28, name null, is_contract true, is_verified false, creator 0x0679f72DCC42d8fBEB19FC2e0215Be8e7C090881, creation_transaction_hash 0x12ded6362aeede695b33cb9c48f9defa41d2b149b7412b27897f813bcbf7fbb5." }
  - { id: R-11, publisher: Blockscout, title: "Owner Safe 0xD2DeFbd13aFF22D6989E8C14B4517Ec308079E91", url: "https://robinhoodchain.blockscout.com/address/0xD2DeFbd13aFF22D6989E8C14B4517Ec308079E91", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-10], excerpt: "API v2: hash 0xD2DeFbd13aFF22D6989E8C14B4517Ec308079E91, name SafeProxy, is_contract true, is_verified true, proxy_type master_copy, implementations SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762." }
  - { id: R-12, publisher: Robinhood Chain RPC, title: "eth_getCode / eth_call factory, hook, owner", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-10, CLM-11, CLM-12], excerpt: "eth_blockNumber 0x329f25c. Factory code 176 bytes. Hook 13927 bytes. Implementation 23567 bytes. Owner 171 bytes. eth_getStorageAt ERC1967 impl slot 0x40250b4C73FC30f8F6ad077744B0124B3f111C28. owner() factory and hook 0xd2defbd13aff22d6989e8c14b4517ec308079e91. pendingOwner() 0x0. launchConfigCount() 0x40 (64)." }
  - { id: R-13, publisher: DefiLlama, title: "LetsCash DEX volume summary", url: "https://api.llama.fi/summary/dexs/letscash", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13, CLM-16, CLM-23], excerpt: "name LetsCash slug letscash twitter letscashfun category Launchpad chains [Robinhood Chain] module letscash doublecounted true audits 0. total24h 2996602 total7d 15323493 total30d 87334558 totalAllTime 112045029.89. Description: token launchpad that creates locked Uniswap v4 pools and collects configurable trading taxes in ETH or USDG." }
  - { id: R-14, publisher: DefiLlama, title: "LetsCash fees summary", url: "https://api.llama.fi/summary/fees/letscash", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "name LetsCash slug letscash twitter letscashfun category Launchpad chains [Robinhood Chain]. total24h 91049 total7d 463605 total30d 1676322 totalAllTime 2020791.1. audits 0." }
  - { id: R-15, publisher: DefiLlama, title: "LetsCash dailyRevenue summary", url: "https://api.llama.fi/summary/fees/letscash?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-15], excerpt: "twitter letscashfun category Launchpad. total24h 11311 total7d 53503 total30d 406195 totalAllTime 530332.13." }
  - { id: R-16, publisher: DefiLlama, title: "dimension-adapters dexs/letscash.ts", url: "https://github.com/DefiLlama/dimension-adapters/blob/master/dexs/letscash.ts", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: repository, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-16], excerpt: "const FACTORY = 0x5bd1Fbe78a78fe8236fa00CF48fbEBA74ae34661. Sources: https://www.letscash.fun/docs. start 2026-07-10. doublecounted true. Volume reconstructed from each hook's FeeAccrued and on-chain feeRate. The factory was upgraded in place." }
  - { id: R-17, publisher: "@RHDaily__", title: "Top Robinhood Chain Launchpads by 24H Volume", url: "https://x.com/RHDaily__/status/2094908154672734344", published_at: 2026-09-01T22:00:00Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-1], excerpt: "Top Robinhood Chain Launchpads by 24H Volume 1. @ponsdotfamily $315.9M 2. @longdotxyz $47.5M 3. @o1_exchange $23.7M 4. @Noxa_Fi $21.3M 5. @TradePools $16.4M 6. @lunchdotfun $2.8M 7. @dopplerprotocol $2.2M 8. @bankrbot $2.0M 9. @letscashfun $2.0M 10. @flapdotsh $1.9M" }
  - { id: R-18, publisher: "@letscashfun", title: "Supply is now a range, not a menu", url: "https://x.com/letscashfun/status/2093569704073761173", published_at: 2026-08-29T05:21:28Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, EVT-2], excerpt: "For creators this means you can now set your token supply to any whole number between 1 billion and 1 quadrillion. Enjoy. https://www.letscash.fun/launch Quoted: Supply is now a range, not a menu. SDK is now on 0.4.0." }
  - { id: R-19, publisher: "@letscashfun", title: "Introducing the airdropper", url: "https://x.com/letscashfun/status/2092753121453773066", published_at: 2026-08-26T23:16:40Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-23, EVT-3], excerpt: "Introducing the airdropper. First of its kind on this chain. A bespoke contract that pushes tokens to hundreds of thousands of wallets in minutes. No extra fee, and as always... permissionless. Live now, first, via the launch flow. Learn more: https://www.letscash.fun/docs#airdrop Thank you to @SBSecurity_ for yet another audit." }
  - { id: R-20, publisher: "@letscashfun", title: "Indices is now live", url: "https://x.com/letscashfun/status/2090209374455181554", published_at: 2026-08-19T22:48:43Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-26, EVT-4], excerpt: "Indices is now live on https://www.letscash.fun/ Point your fee recipient at an indices treasury and every trade starts buying a basket of assets for your holders. No migration, no new contract, coins already launched can repoint today." }
  - { id: R-21, publisher: "@letscashfun", title: "First round of updates", url: "https://x.com/letscashfun/status/2085154102980305276", published_at: 2026-08-06T00:00:53Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-23, EVT-5], excerpt: "Our first round of updates on https://www.letscash.fun/ are live. Fees are now adjustable from 1-10%, platform fee stays fixed at 0.3%. Tokens can now be quoted against $USDG instead of just $ETH. Creators can set up to 4 different wallets to receive the fee stream. Big thank you to @sbsecurity_ for working through another audit." }
  - { id: R-22, publisher: "@leakmealpha", title: "@letscashfun rebranded and moved to Robinhood Chain", url: "https://x.com/leakmealpha/status/2082211565009518739", published_at: 2026-07-28T21:08:17Z, accessed_at: 2026-09-03T02:35:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-7], excerpt: "PRODUCT UPDATE: @letscashfun rebranded from https://t.co/At4QqaXvlL and moved to Robinhood Chain. The launchpad already cleared $2.7M in volume and over $10K of $CASHCAT burned. Launches paused for an upgrade." }
  - { id: R-23, publisher: legacy.letscash.fun, title: "LEGACY — OUR FIRST BETA TESTS", url: "https://legacy.letscash.fun/", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-17], excerpt: "These coins launched during our early testing, back when this was CashCat, on the first build of our contracts. They still trade and they are still yours — this just is not where the platform is being built any more. New coins launch here → https://letscash.fun" }
  - { id: R-24, publisher: letscashfun, title: "SDK SECURITY.md", url: "https://github.com/letscashfun/sdk/blob/main/SECURITY.md", published_at: null, accessed_at: 2026-09-03T02:46:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-23], excerpt: "This document covers the SDK package. The contracts it talks to are audited separately, and their addresses are verified on Blockscout — you can read the deployed source for every one of them." }

gaps:
  - { priority: P0, question: "What is the verified source of the live factory implementation 0x40250b4C…1C28, and which functions can the Safe call to upgrade or pause launches?", checked: "Blockscout is_verified false on the implementation; proxy shell verified as ERC1967Proxy; owner() is the Safe; pendingOwner() 0x0", next: "read a verified prior implementation (Llama cites 0x3dFd73A6…2c1A) and eth_call upgrade selectors on the current bytecode" }
  - { priority: P0, question: "Safe 0xD2DeFb…9E91 threshold, owners and whether the same Safe can change CashCatHookV2 parameters after launch", checked: "owner() on factory and hook returns the Safe; Blockscout names SafeProxy/SafeL2; no getOwners() this pass", next: "eth_call getOwners/getThreshold on the Safe and read hook setters' modifiers" }
  - { priority: P1, question: "Where is the SBSecurity audit artifact, and which bytecode (factory implementation, hook, airdrop vault) does it cover?", checked: "@letscashfun 6 Aug and 26 Aug posts, SECURITY.md, Llama audits 0, site and docs, 2026-09-03", next: "ask in public or find a report URL from @SBSecurity_ and match commit/address" }
  - { priority: P1, question: "OKX Web3 lifetime volume ~$115M was not opened as a copyable page this pass. Llama dexs totalAllTime is 112045029.89 USD.", checked: "api.llama.fi/summary/dexs/letscash; web3.okx.com/explorer/robinhood returned an HTML skeleton with no LetsCash figure", next: "open the OKX Web3 DEX protocol page if one exists and copy the lifetime figure with window and as-of" }
  - { priority: P1, question: "Confirm the CASHCAT token address and that it was not created by factory 0x5bd1…4661", checked: "legacy page and hook name CashCatHookV2; Blockscout CASHCAT API rate-limited this pass", next: "Blockscout API v2 for 0x020bfC650A365f8BB26819deAAbF3E21291018b4 creator_address_hash" }
  - { priority: P2, question: "Telegram, Discord or other chat besides the in-app lounge?", checked: "site footer, X bio, GitHub README, 2026-09-03; no telegram or discord URL", next: "record if @letscashfun pins one" }
  - { priority: P2, question: "Are letscash.fun and letscashfun.com the same deployment, or a split docs host?", checked: "both serve launchpad copy; twitter:site is on letscash.fun; docs HTML this pass was from letscashfun.com", next: "compare TLS certs and whether /docs on letscash.fun is a reverse-proxy of letscashfun.com" }
---

# LetsCash — research packet

## What it is

A Uniswap v4 launchpad on Robinhood Chain. One transaction mints a fixed-supply token into a locked v4 pool; a custom hook taxes the quote leg in ETH or USDG, pays the creator, and sends a 0.3% platform share into CASHCAT buys. No bonding curve and no migration. letscash.fun and @letscashfun run it. Distinct from the CASHCAT token.

Themes: launchpad, memecoin, hook

## Why it matters

It is a live Uniswap v4 pad on chain 4663 with a reproduced factory and hook, Llama all-time DEX volume of $112.05M on this chain only, and a fee stream that other products (Indices) already point at. The name is not in the 49-row census.

## What could go wrong

The factory is a UUPS proxy whose current implementation is unverified, so the upgrade path is held by the owner Safe. Liquidity removal is rejected by the hook, so a failed launch cannot be unwound by pulling LP. Platform fees buy CASHCAT; that is not the same object as the CASHCAT token.

## Product and mechanics

One transaction deploys an ERC-20, seeds a Uniswap v4 pool with the whole supply, locks the liquidity, and can run a first buy. Pools quote ETH or USDG. The pool itself has no LP fee; CashCatHookV2 takes a configurable tax on the quote leg. [claim R-2 R-4]

Default tax is 1%: 0.7% to the creator (claimable in the quote asset) and 0.3% to the platform. Self-burn mode routes the creator share into buying and destroying the launched token. Fees and the liquidity lock are set at launch. [claim R-2 R-3]

launchConfigCount() on the factory returned 64 at block 53080668. The SDK treats supply as any whole number from 1 billion to 1 quadrillion against a published config row. [verified R-12] [claim R-18]

## Control and security

Factory 0x5bd1…4661 is an ERC1967 proxy. The implementation slot reads 0x40250b4C…1C28 (unverified, 23567 bytes). The ERC1967 admin slot is empty. owner() returns SafeProxy 0xD2DeFb…9E91; pendingOwner() is zero. The same Safe is owner() on the hook. [verified R-6 R-10 R-11 R-12]

@letscashfun named @SBSecurity_ on 6 Aug and 26 Aug. Llama audits is 0. No report PDF was opened this pass. [claim R-19 R-21] [unknown]

## Team and provenance

letscash.fun sets twitter:site to @letscashfun and JSON-LD sameAs to https://x.com/letscashfun. @letscashfun posts link letscash.fun/launch and letscash.fun/docs. GitHub org letscashfun publishes the SDK with the factory and hook addresses. Factory and hook deploys trace to EOA 0x0679…0881. [verified R-1 R-4 R-5 R-8]

legacy.letscash.fun says early tests ran when the product was branded CashCat. That is pad history, not the CASHCAT token. [claim R-23]

## Economics and activity

DefiLlama module letscash, Robinhood Chain only, 2026-09-03: DEX volume 24h $2,996,602, all-time $112,045,029.89; fees 24h $91,049; dailyRevenue 24h $11,311. The adapter is marked doublecounted with generic Uniswap v4. [verified R-13 R-14 R-15 R-16]

@RHDaily__ on 1 Sep 22:00 UTC listed @letscashfun ninth on a 24h launchpad board at $2.0M. That is the account's board, not the Llama slice. [claim R-17]

## Material risks

- Factory implementation 0x40250b4C…1C28 is unverified; the owner Safe can upgrade the proxy. [verified R-6 R-10 R-12]
- Liquidity is locked by the hook; a launch cannot pull LP. [claim R-2 R-3]
- No audit report PDF was located this pass, despite two named SBSecurity posts. [claim R-19 R-21] [unknown]
- Name collision with the CASHCAT token: the hook is named CashCatHookV2 and platform fees buy CASHCAT. [claim R-7 R-23]
- Llama volume is reconstructed from FeeAccrued and is doublecounted with Uniswap v4. [claim R-16]

## Verification passes

- Receipts: site HTML (twitter:site @letscashfun), docs, about, legacy, GitHub README and SECURITY.md, Blockscout API v2 for factory, hook, implementation, owner Safe and two creation txs, RPC eth_getCode/eth_call, Llama dexs/fees/revenue APIs and the dimension adapter, and the X posts cited above were opened on 2026-09-03. [verified R-1 R-4 R-6 R-7 R-12 R-13]
- Numbers: 24h and all-time volume, 24h fees and 24h revenue are Llama Robinhood Chain slices, not all-chains totals. Bytecode lengths and launchConfigCount() are eth_getCode/eth_call at block 53080668. [verified R-12 R-13 R-14 R-15]
- Adversarial: the strongest contrary reading is that LetsCash is the CASHCAT token, or that it is NOXA, Hookr or pools.trade. CASHCAT is not in the census; the reproduced factory is not the NOXA factory; Hookr is a hook marketplace; pools.trade InstantLaunchStrategy is hookless. [claim R-3 R-7 R-23]

## Operations log

- Census 49 rows: no letscash, no CASHCAT. content/accounts.yaml has no @letscashfun.
- Opened https://www.letscash.fun/ (twitter:site @letscashfun), https://www.letscashfun.com/docs, https://www.letscashfun.com/about, https://legacy.letscash.fun/, https://github.com/letscashfun/sdk, SECURITY.md, https://github.com/DefiLlama/dimension-adapters/blob/master/dexs/letscash.ts.
- Opened https://x.com/letscashfun and posts 2093569704073761173, 2092753121453773066, 2090209374455181554, 2085154102980305276; https://x.com/RHDaily__/status/2094908154672734344; https://x.com/leakmealpha/status/2082211565009518739.
- RPC eth_getCode, eth_getStorageAt (ERC1967 impl/admin), owner(), pendingOwner(), launchConfigCount() on https://rpc.mainnet.chain.robinhood.com at block 0x329f25c.
- Blockscout API v2 for factory, hook, implementation, owner Safe, factory tx 0x2b90e5b7…, hook tx 0x8e562b48….
- Llama https://api.llama.fi/summary/dexs/letscash, /summary/fees/letscash, /summary/fees/letscash?dataType=dailyRevenue. OKX Web3 explorer/robinhood returned an HTML skeleton; no lifetime figure copied.
- No content/ writes. No merge. No push.
