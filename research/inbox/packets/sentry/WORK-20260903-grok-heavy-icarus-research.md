---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: sentry
name: Sentry
packet_tier: seed
as_of: 2026-09-03T04:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [sentry]
allowed_paths:
  - research/inbox/packets/sentry/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Sentry
  aliases: ["Sentry Launcher"]
  symbols: [SENTRY]
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://sentry.trading
  official_handle: "@sentrylauncher"
  repository: "NULL — api.github.com/orgs and /users sentrylauncher and sentry-trading 404; Llama github null; mavrk.gitbook.io/sentry-docs is the docs host; github.com/mavrkofficial is a user (Sergio Luna) with Llama adapter forks and Quotrons kits, not a Sentry core repo this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve pad at ponsfamily.com / @ponsdotfamily"
        - "Sentry launches a fixed-supply ERC-20 into a Uniswap V3 or v4 pool with LP locked; no bonding curve"
        - "No shared domain, handle, or reproduced factory"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is bankr.bot / @bankrbot; Sentry guide names Bankr as a separate Robinhood launchpad whose Doppler v4 pools Sentry only routes"
        - "Sentry factories are 0x4722…5cc1 / 0xd0A9…6b3A / 0x9e8f…36Cb on 4663, not DopplerERC20V1Factory"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz"
        - "Sentry can pair against Robinhood stock tokens and Ink wrapped xStocks, but the live new-launch path is SentryLaunchFactoryV4, not LongLauncher"
        - "No shared domain, handle, or reproduced factory"
    - slug: safehood
      signals: [other]
      contrary_signals:
        - "Census Safehood is a Uniswap-pool launchpad at safehood.fun / @_safehood"
        - "Sentry is sentry.trading / @sentrylauncher with RH factories 0x4722…5cc1 and 0x9e8f…36Cb"
        - "No shared domain, handle, or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Census pools.trade is @pools_dot_fun, described as a Uniswap Labs pad"
        - "Sentry is sentry.trading / @sentrylauncher"
        - "No shared domain, handle, or reproduced factory"
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census Hookr is a Uniswap v4 hook marketplace at hookr.fun / @Hookrfun"
        - "Sentry's v4 fee hooks sit on pools its own factory creates; it is not a hook marketplace"
        - "No shared domain, handle, or reproduced address"
    - slug: quotrons
      signals: [other]
      contrary_signals:
        - "Census Quotrons is an ERC-404 terminal collection at quotrons.cash / @Quotrons404"
        - "Sentry Ink stock-pair launches send a WETH peel slice to Quotron pots; that is a fee destination, not shared identity"
        - "No shared domain, handle, or reproduced factory"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: [trading/aggregator]
  mechanism_tags: [launchpad, rwa, stock-paired, fee-routing, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Dual-chain launchpad on Ink (57073) and Robinhood Chain (4663). Guide and 14 Jul 2026 post: no bonding curve; token is live on Uniswap at deploy; LP locked in the factory or SentryLPVault. RH RPC at block 53108271: v4 WETH factory 0x4722…5cc1, v4 stock factory 0xd0A9…6b3A, legacy v3 0x9e8f…36Cb, vault 0x0F0E…2Df0 all have code; owner() 0xbf55…B7C5. Llama currentChainTvls Ink 100085.81 and Robinhood Chain 99133.68 (sum 199219.49); do not treat the sum as a Robinhood-only figure. Distinct from census Pons, Bankr, LONG, Safehood, pools.trade, Hookr, and Quotrons. Not a census row. [R-2] [R-5] [R-13] [R-19]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-16, CLM-29], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-17], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10, CLM-20, CLM-37], note: "" }

links:
  - { kind: site, url: "https://sentry.trading", authenticity: confirmed }
  - { kind: app, url: "https://www.sentry.trading", authenticity: confirmed }
  - { kind: docs, url: "https://sentry.trading/sentry-guide.md", authenticity: confirmed }
  - { kind: docs, url: "https://mavrk.gitbook.io/sentry-docs/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/sentrylauncher", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/sentrylauncher", authenticity: unconfirmed }
  - { kind: other, url: "https://defillama.com/protocol/sentry", authenticity: confirmed }

deployments:
  - label: Robinhood v4 WETH launch factory (SentryLaunchFactoryV4 proxy)
    role: factory
    address:
      value: "0x472286b7d5c1B2A3cE1132eF73d3BcCF446C5cc1"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-2, R-13, R-14]
  - label: Robinhood v4 stock-pair launch factory (SentryLaunchFactoryV4 proxy)
    role: factory
    address:
      value: "0xd0A93885a387e3a8a14dd82776CF9104a3676b3A"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-2, R-13, R-15]
  - label: Robinhood legacy v3 launch factory (retired)
    role: factory
    address:
      value: "0x9e8f6f8214b01Fd4Cf1d73FB1fb7cf9f811036Cb"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-2, R-4, R-13, R-16]
  - label: Robinhood v4 factory implementation
    role: implementation
    address:
      value: "0x818FdD15Dbe95851a0bd8c5389c49ed6d4FE2bBf"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-14, R-15]
  - label: Robinhood SentryLPVault
    role: vault
    address:
      value: "0x0F0E601041Ec765B8bAB8c166840E291253F2Df0"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-13, R-17]
  - label: Robinhood factory owner()
    role: admin
    address:
      value: "0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-13, R-27]
  - label: SENTRY platform token (SentryTokenRelaunch)
    role: token
    address:
      value: "0x1EcA20cfa4AF2e2fA2F4CE2bF8d97bFa184FD4D7"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-13, R-18]
  - label: Ink v4 launch factory (SentryLaunchFactoryV4Ink proxy; chain id 57073)
    role: factory
    address:
      value: "0xcF44b151aee1Ef69677f24cadED4d2d61b0D45BD"
      chain: other
      source: docs
      seen: 2026-09-03
      exists_on_4663: false
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-2, R-28, R-29]
  - label: Ink legacy v3 launch factory (chain id 57073)
    role: factory
    address:
      value: "0xDc37e11B68052d1539fa23386eE58Ac444bf5BE1"
      chain: other
      source: docs
      seen: 2026-09-03
      exists_on_4663: false
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-2, R-28, R-29]
  - label: Ink SentryLPVault (chain id 57073)
    role: vault
    address:
      value: "0x86585D4474C78c1C0fA1f8771682E9aD020787eC"
      chain: other
      source: docs
      seen: 2026-09-03
      exists_on_4663: false
      explorer_source_verified: true
    receipt_ids: [R-2, R-28, R-29]

metrics:
  - { kind: tvl, value: 199219.49, currency: USD, as_of: 2026-09-03T00:32:23Z, window: point, method: "api.llama.fi/protocol/sentry currentChainTvls Ink 100085.81 + Robinhood Chain 99133.68; dual-chain sum, not RH-only", class: claim, receipt_ids: [R-19] }
  - { kind: fees_24h, value: 19422, currency: USD, as_of: 2026-09-03T04:20:00Z, window: 24h, method: "api.llama.fi/summary/fees/sentry total24h; last chart day Ink 17059 + Robinhood Chain 2363", class: claim, receipt_ids: [R-20] }
  - { kind: revenue_24h, value: 5968, currency: USD, as_of: 2026-09-03T04:20:00Z, window: 24h, method: "api.llama.fi/summary/fees/sentry?dataType=dailyRevenue total24h (Ink + Robinhood Chain)", class: claim, receipt_ids: [R-26] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:28:00Z, receipt_ids: [R-13, R-14, R-15, R-16, R-17, R-27], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32abe2f (53108271). v4 WETH factory 0x4722…5cc1 eth_getCode 1971 B nonce 0x4f (79); owner() 0xbf551eed83c7eaee63854a2013eb94f18600b7c5; ERC1967 slot 0x818fdd15dbe95851a0bd8c5389c49ed6d4fe2bbf; creatorFeeBps 7000. v4 stock factory 0xd0A9…6b3A 1971 B nonce 18; same owner and impl. Legacy v3 0x9e8f…36Cb 2188 B nonce 94; owner same; impl 0x12a9…c98b; creatorFeeBps 7000. Vault 0x0F0E…2Df0 11220 B; owner() empty; impl slot zero. Owner EOA eth_getCode 0x nonce 1113. Blockscout proxies TransparentUpgradeableProxy is_verified true; impl names SentryLaunchFactoryV4 / SentryLaunchFactory is_verified true. Vault name SentryLPVault is_verified true." }
  - { id: REP-2, method: official-crosslink, checked_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-9], result: "@sentrylauncher bio Official account for sentry.trading (t.co/1aozviBVCq 301 to https://sentry.trading/); display name Sentry Launcher. www.sentry.trading title Sentry; og:url https://sentry.trading/; JS footer href https://x.com/sentrylauncher. Bidirectional." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:20:00Z, receipt_ids: [R-19, R-20, R-21, R-26], result: "api.llama.fi/protocol/sentry name Sentry; category Launchpad; chains [Ink, Robinhood Chain]; twitter sentrylauncher; audits 0; github null; url a space; currentChainTvls Ink 100085.80891 Robinhood Chain 99133.67753; latest tvl date 1788395543 (2026-09-03T00:32:23Z). summary/fees total24h 19422 total7d 220733. dailyRevenue total24h 5968 total7d 68409. defillama.com/protocol/sentry page TVL 199219.49 Fees 24h 19422." }
  - { id: REP-4, method: explorer-rpc, chain_id: 57073, checked_at: 2026-09-03T04:28:00Z, receipt_ids: [R-28, R-29], result: "rpc-gel.inkonchain.com eth_chainId 0xdef1 (57073). eth_blockNumber 0x345e00f (54882319). Ink v4 factory 0xcF44…45BD eth_getCode 1971 B nonce 33; owner() 0xbf55…B7C5; ERC1967 slot 0xfe76feb974e041b67caf0aad8fcaec4847ca2403; creatorFeeBps 7000. Ink v3 0xDc37…5BE1 2091 B nonce 148; owner same; creatorFeeBps 6500. Vault 0x8658…87eC 11220 B. Same four Ink addresses eth_getCode 0x on chain 4663. Explorer names SentryLaunchFactoryV4Ink / SentryLaunchFactory / SentryLPVault is_verified true." }
  - { id: REP-5, method: document-scope, checked_at: 2026-09-03T04:26:00Z, receipt_ids: [R-2], result: "sentry.trading/sentry-guide.md last updated August 27, 2026 names RH v4 WETH factory 0x4722…5cc1, stock factory 0xd0A9…6b3A, vault 0x0F0E…2Df0, legacy v3 0x9e8f…36Cb; Ink v4 0xcF44…45BD, vault 0x8658…87eC, legacy v3 0xDc37…5BE1. New launches Uniswap v4; LP in SentryLPVault. Schema chain enum has no ink key; Ink rows are chain other." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "One transaction deploys a 1B-supply ERC-20 (no mint/pause/blacklist/proxy), renounces token ownership, seeds a Uniswap v4 pool (WETH or a tokenized stock), and locks the position in SentryLPVault. No bonding curve, no graduation. Legacy V3 path is retired. App also aggregates swaps (Uni V3/V2/v4 and PancakeSwap V3 on RH; Uni V3 on Ink) with a 1% in-app fee.", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://sentry.trading", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@sentrylauncher", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-9, R-19], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "Sentry", class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-2, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x472286b7d5c1B2A3cE1132eF73d3BcCF446C5cc1", class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-2, R-13, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x9e8f6f8214b01Fd4Cf1d73FB1fb7cf9f811036Cb", class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-2, R-4, R-13, R-16], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-2, R-13, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5", class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-13, R-27], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "RH v4 factories 0x4722…5cc1 and 0xd0A9…6b3A are ERC1967 TransparentUpgradeableProxy shells; implementation slot 0x818F…2bBf (SentryLaunchFactoryV4, verified). Legacy v3 0x9e8f…36Cb implementation 0x12a9…c98b (SentryLaunchFactory, verified). Ink v4 0xcF44…45BD implementation 0xfe76…2403 (SentryLaunchFactoryV4Ink).", class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-13, R-14, R-16, R-29], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "No timelock contract is named in sentry-guide.md. owner() on RH v3/v4 factories and the treasury splitter is EOA 0xbf55…B7C5 with no code. Vault has no owner() and a zero ERC1967 slot.", class: claim, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-2, R-13, R-27], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "Llama listedAt 2026-07-07; RH v4 WETH factory nonce 79 and stock factory nonce 18 at 2026-09-03 RPC; Ink v4 nonce 33; Ink v3 nonce 148", class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-13, R-19, R-28], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Robinhood Chain TVL 99133.68 USD from api.llama.fi/protocol/sentry currentChainTvls at 2026-09-03T00:32:23Z; not the all-chains sum", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-19, R-21], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Ink TVL 100085.81 USD from api.llama.fi/protocol/sentry currentChainTvls at 2026-09-03T00:32:23Z. Chain enum has no ink key; this slice is not a 4663 figure.", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-19, R-21], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "No audit report URL was located on sentry.trading, sentry-guide.md, the @sentrylauncher profile, or Llama audit_links this pass; Llama audits field 0", class: unknown, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0x0F0E601041Ec765B8bAB8c166840E291253F2Df0", class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-2, R-13, R-17], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: multichain, class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-2, R-19, R-28], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from census Pons, Bankr, LONG, Safehood, pools.trade, Hookr, and Quotrons. Distinct from Coinbarrel (coinbarrel.com / @UseCoinbarrel / Hook V5 launcher 0x4234…e70) and from other in-flight pads on this work id. No shared domain, handle, or reproduced factory.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-2, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Guide: legacy RH V3 factory 0x9e8f…36Cb is retired (93 LP positions swept into the LP vault; no new launches). RPC still shows 2188-byte proxy code and nonce 94. Llama adapter still counts v3 factories on both chains.", class: claim, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-2, R-4, R-13], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "Guide + RPC creatorFeeBps: RH legacy V3 70% creator / 30% treasury (7000 bps on 0x9e8f…36Cb). Ink legacy V3 65/35 (6500 bps on 0xDc37…5BE1). Current v4 launches use a 40%→1.7% (2.00% Ink xStock) fee hook, not the V3 collect split. Fees adapter still models LP fees as 70/30.", class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-2, R-13, R-22, R-28], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-21, field: "account.@sentrylauncher.official", value: "Handle bio and t.co website field name sentry.trading. sentry.trading JS footer href https://x.com/sentrylauncher. Bidirectional. Flag none.", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-22, field: "account.@sentrylauncher.slug", value: sentry, class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@sentrylauncher.role", value: project, class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "@sentrylauncher posted 2026-07-14 that tokens deployed on Robinhood have no custom bonding curve, are live on Uniswap from Deploy, and LP is permanently locked in the factory.", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "NULL — GitHub org/user sentrylauncher and sentry-trading 404; Llama github null; no Sentry core repo on github.com/mavrkofficial this pass", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-19, R-30], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: identity.alias, value: "Sentry Launcher", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: identity.symbol, value: "SENTRY is the platform token 0x1EcA20cfa4AF2e2fA2F4CE2bF8d97bFa184FD4D7 on Robinhood Chain (Blockscout SentryTokenRelaunch). It is not a factory. Do not treat it as a launch output.", class: claim, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-2, R-18], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-28, field: control.privileged-role, value: "owner() on RH v3/v4 factories, Ink v3/v4 factories, and the RH treasury splitter is the same EOA 0xbf55…B7C5. Factories are upgradeable proxies. Vaults are not proxies this pass.", class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-13, R-27, R-28], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-29, field: deployment.address, value: "0xcF44b151aee1Ef69677f24cadED4d2d61b0D45BD", class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-2, R-28, R-29], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-30, field: economics.metric, value: "Fees 24h 19422 USD (Ink 17059 + Robinhood Chain 2363) and revenue 24h 5968 from api.llama.fi/summary/fees/sentry; 7d fees 220733. Dual-chain; Ink is the larger fee slice this window.", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-20, R-21, R-26], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-31, field: relationship, value: "Ink stock-pair launches use Backed wrapped xStocks and a 2.00% floor fee hook. Guide: 75% WETH peel splits 60% creator / 20% Quotron terminal pot / 20% Quotron growth sink; remaining 25% holder reflections. Quotrons is a separate census slug.", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-2, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: product.mechanism, value: "Llama protocol description: LP fees split 65/35 between the token creator and the protocol treasury. That sentence does not name a chain.", class: claim, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-33, field: control.owner, value: "SENTRY token 0x1EcA…4D7 owner() on 4663 is 0xbf55…B7C5 (same factory owner EOA), not the dead address.", class: verified, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-34, field: other, value: "Llama adapter lists Ink v3 factory 0x733733E8eAbB94832847AbF0E0EeD6031c3EB2E4 as agent launches. Ink explorer name CitadelEscape (proxy). Address is not in sentry-guide.md. Flag third-party-link. exists_on_4663 false.", class: claim, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-4, R-29], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-35, field: "account.@sentrylauncher.note", value: "Display name Sentry Launcher; followers 2783 this pass; website sentry.trading; JS also links t.me/sentrylauncher. Launch bot replies require verified X accounts and an on Ink or on Robinhood clause.", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-36, field: control.owner, value: "Guide: SENTRY contract 0x1EcA…4D7 is fixed 1B supply, renounced, verified.", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-37, field: control.privileged-role, value: "Guide: generated in-app wallets have keys created server-side, AES-256-GCM encrypted at rest, decrypted in memory to sign user-initiated txs; Telegram bot and limit/DCA fills stay on those wallets. External connected wallets are SIWE-linked and sign in the wallet app. Product copy also says non-custodial.", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-20, CLM-32]
    material_effect: "Llama protocol description states a 65/35 LP fee split; RH RPC creatorFeeBps is 7000 (70/30) and the guide says RH V3 was raised to 70% on 2026-07-08. Ink V3 is 6500. A reader using the Llama sentence as the live RH split would be wrong."
    status: open
    resolution: null
  - id: CON-2
    field: control.owner
    claim_ids: [CLM-33, CLM-36]
    material_effect: "Guide says the SENTRY token is renounced; RPC owner() on 0x1EcA…4D7 returns the factory-owner EOA."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "RPC: RH v4 factories have code, owner, and matching implementation slots"
    summary: "On chain 4663, v4 WETH factory 0x4722…5cc1 and stock factory 0xd0A9…6b3A are ERC1967 proxies with owner 0xbf55…B7C5 and implementation 0x818F…2bBf, matching sentry-guide.md. Legacy v3 0x9e8f…36Cb still has code."
    occurred_at: 2026-09-03T04:28:00Z
    observed_at: 2026-09-03T04:28:00Z
    affected_fields: [deployment.address, control.owner, control.proxy, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13, R-14]
  - id: EVT-2
    type: company
    title: "@sentrylauncher posts no bonding curve on Robinhood"
    summary: "On 2026-07-14 the handle posted that tokens deployed through Sentry on Robinhood have no custom bonding curve, are live on Uniswap from Deploy, and LP is permanently locked in the factory."
    occurred_at: 2026-07-14T17:00:14Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [product.mechanism, communications.status, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-3
    type: company
    title: "@sentrylauncher posts Ink xStocks launch path"
    summary: "On 2026-08-27 the handle posted that Ink launches pair against Backed wrapped xStocks in canonical Uniswap V3 books, with SentryLaunchFactoryV4Ink enforcing a Uniswap v4 2.00% fee hook that peels creator, holder, and Quotron legs."
    occurred_at: 2026-08-27T10:11:41Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [taxonomy.chain-scope, product.mechanism, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-4
    type: company
    title: "@sentrylauncher posts swap venues on Robinhood Chain"
    summary: "On 2026-07-16 the handle posted that Sentry is more than a permission-less token launchpad and that users can trade across DEXes on Robinhood Chain, including PancakeSwap V3."
    occurred_at: 2026-07-16T16:01:37Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [taxonomy.secondary-leaf, product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: onchain
    title: "Ink factories live on chain 57073; empty on 4663"
    summary: "Ink v4 factory 0xcF44…45BD and v3 0xDc37…5BE1 have code on chain 57073 with owner 0xbf55…B7C5. The same addresses have empty code on 4663. Do not file Ink rows as robinhood-chain."
    occurred_at: 2026-09-03T04:28:00Z
    observed_at: 2026-09-03T04:28:00Z
    affected_fields: [taxonomy.chain-scope, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-28, R-29]

receipts:
  - { id: R-1, publisher: Sentry, title: "sentry.trading home", url: "https://www.sentry.trading/", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-18, CLM-21, CLM-25], excerpt: "title Sentry. meta description: Sentry — your multi-chain wallet, with launchpad built in. og:url https://sentry.trading/. twitter:card summary_large_image. No twitter:site. JS /assets/index-C_L17ZF0.js footer href https://x.com/sentrylauncher and https://t.me/sentrylauncher; docs https://sentry.trading/docs and https://mavrk.gitbook.io/sentry-docs/. Email team@sentry.trading." }
  - { id: R-2, publisher: Sentry, title: "Sentry complete user guide", url: "https://sentry.trading/sentry-guide.md", published_at: 2026-08-27, accessed_at: 2026-09-03T04:26:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-11, CLM-16, CLM-17, CLM-18, CLM-19, CLM-20, CLM-27, CLM-29, CLM-31, CLM-36, CLM-37, EVT-5], excerpt: "Non-custodial trading app for Robinhood Chain 4663 and Ink 57073. Launch locked-LP tokens; swap aggregator. RH v4 WETH factory 0x472286b7…5cc1; stock factory 0xd0A93885…6b3A; vault 0x0F0E6010…2Df0; legacy v3 0x9e8f6f82…36Cb. Ink v4 0xcF44b151…45BD; vault 0x86585D44…87eC; legacy v3 0xDc37e11B…5BE1. RH V3 70/30; Ink V3 65/35. SENTRY 0x1EcA20cf…4D7 renounced." }
  - { id: R-3, publisher: Sentry, title: "JS factory env defaults", url: "https://www.sentry.trading/assets/index-C_L17ZF0.js", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-6], excerpt: "VITE_SENTRY_FACTORY_ROBINHOOD 0x9e8f6f8214b01Fd4Cf1d73FB1fb7cf9f811036Cb. VITE_SENTRY_FACTORY_V4_ROBINHOOD default 0x472286b7d5c1B2A3cE1132eF73d3BcCF446C5cc1. VITE_SENTRY_STOCK_FACTORY_V4_ROBINHOOD default 0xd0A93885a387e3a8a14dd82776CF9104a3676b3A. Ink SentryLaunchFactory 0xDc37e11B…5BE1; SentryLaunchFactoryV4 0xcF44b151…45BD; SentryLpVault 0x86585D44…87eC." }
  - { id: R-4, publisher: DefiLlama, title: "sentry-trading TVL adapter", url: "https://raw.githubusercontent.com/DefiLlama/DefiLlama-Adapters/main/projects/sentry-trading/index.js", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-19, CLM-34, EVT-5], excerpt: "robinhood v3Factories 0x9e8f6f82…36Cb fromBlock 1431636; v4Factories 0x472286b7…5cc1 (WETH) fromBlock 12274076 and 0xd0A93885…6b3A (stock) fromBlock 13991230; vault 0x0F0E6010…2Df0. ink v3Factories 0xDc37e11B…5BE1 and 0x733733E8…B2E4 (agent launches); v4Factories 0xcF44b151…45BD; vault 0x86585D44…87eC. start 2026-07-02. doublecounted true." }
  - { id: R-5, publisher: "@sentrylauncher", title: "No bonding curve on Robinhood", url: "https://x.com/sentrylauncher/status/2077075712004014147", published_at: 2026-07-14T17:00:14Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-24, EVT-2], excerpt: "Tokens deployed through Sentry on @RobinhoodCrypto @RobinhoodApp have no custom bonding curve trading phases. They are live on @Uniswap from the moment you click Deploy on Robinhood and LP is permanently locked in the factory itself." }
  - { id: R-9, publisher: "@sentrylauncher", title: "Sentry Launcher profile", url: "https://x.com/sentrylauncher", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-21, CLM-22, CLM-23, CLM-26, CLM-35], excerpt: "Display name Sentry Launcher. Handle @sentrylauncher. Bio: Token launch and trading product. Official account for https://t.co/1aozviBVCq (301 Location https://sentry.trading/). Followers 2783. Blue verified." }
  - { id: R-10, publisher: "@sentrylauncher", title: "Launch bot requires chain clause", url: "https://x.com/sentrylauncher/status/2086878064382714206", published_at: 2026-08-10T18:11:17Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-17, CLM-35], excerpt: "@effayobase5104 couldn't launch — send: missing 'on <chain>' clause, try on Ink or on Robinhood. Try: @sentrylauncher launch <Name> with ticker $<SYMBOL>." }
  - { id: R-11, publisher: "@sentrylauncher", title: "Trade across DEXes including PCS-V3", url: "https://x.com/sentrylauncher/status/2077785734728106462", published_at: 2026-07-16T16:01:37Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "Sentry is more than just a permission-less token launchpad. Users can trade tokens on @RobinhoodCrypto chain across various DEX’s, including @PancakeSwap V3 pools." }
  - { id: R-12, publisher: "@sentrylauncher", title: "Ink wrapped xStocks launch path", url: "https://x.com/sentrylauncher/status/2092917963472974227", published_at: 2026-08-27T10:11:41Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-31, EVT-3], excerpt: "We use @BackedFi's wrapped @xStocksFi tokenized stocks as base pairs for deployments through Sentry Launcher on @inkonchain. SentryLaunchFactoryV4Ink enforces a Uniswap V4 fee hook. 2.00% fee: 0.90% creator in WETH, 0.50% holder reflections in wrapped xStock, 0.30% QuotronWethTerminalPot, 0.30% QuotronLiquidityGrowthSink." }
  - { id: R-13, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() Sentry RH factories", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-11, CLM-12, CLM-16, CLM-19, CLM-20, CLM-28, CLM-33, EVT-1], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32abe2f (53108271). 0x4722…5cc1 1971 B nonce 79 owner 0xbf55…B7C5 impl 0x818F…2bBf creatorFeeBps 7000. 0xd0A9…6b3A 1971 B nonce 18 same owner/impl. 0x9e8f…36Cb 2188 B nonce 94 impl 0x12a9…c98b creatorFeeBps 7000. Vault 0x0F0E…2Df0 11220 B owner empty. Token 0x1EcA…4D7 owner 0xbf55…B7C5. Owner code 0x nonce 1113." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x472286b7d5c1B2A3cE1132eF73d3BcCF446C5cc1", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x472286b7d5c1B2A3cE1132eF73d3BcCF446C5cc1", published_at: null, accessed_at: 2026-09-03T04:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-10, EVT-1], excerpt: "name TransparentUpgradeableProxy is_contract true is_verified true proxy_type eip1967. implementations 0x818FdD15Dbe95851a0bd8c5389c49ed6d4FE2bBf name SentryLaunchFactoryV4 is_verified true. creator_address_hash 0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5. creation_transaction_hash 0xef1dbd691269419faae672e31fee6273d7ae8e5415071c328c38fc0847537b32." }
  - { id: R-15, publisher: Blockscout, title: "Address 0xd0A93885a387e3a8a14dd82776CF9104a3676b3A", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xd0A93885a387e3a8a14dd82776CF9104a3676b3A", published_at: null, accessed_at: 2026-09-03T04:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "name TransparentUpgradeableProxy is_verified true proxy_type eip1967. implementations 0x818FdD15Dbe95851a0bd8c5389c49ed6d4FE2bBf name SentryLaunchFactoryV4 is_verified true. creator_address_hash 0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x9e8f6f8214b01Fd4Cf1d73FB1fb7cf9f811036Cb", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x9e8f6f8214b01Fd4Cf1d73FB1fb7cf9f811036Cb", published_at: null, accessed_at: 2026-09-03T04:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-10], excerpt: "name TransparentUpgradeableProxy is_verified true proxy_type eip1967. implementations 0x12a9c6498e8Cfd970E78F82410EA23809dd4c98B name SentryLaunchFactory is_verified true. creator_address_hash 0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5. creation_transaction_hash 0xf754d755fdc25b8fdf6d3d3ae8ef3019964f37f330990bef6de8dd21e9e6dd28." }
  - { id: R-17, publisher: Blockscout, title: "Address 0x0F0E601041Ec765B8bAB8c166840E291253F2Df0", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x0F0E601041Ec765B8bAB8c166840E291253F2Df0", published_at: null, accessed_at: 2026-09-03T04:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "name SentryLPVault is_contract true is_verified true proxy_type null. creator_address_hash 0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5. creation_transaction_hash 0x53fde64d743d4e489aec5eafe68bf8a69a784536d75f877f5c60443292620663." }
  - { id: R-18, publisher: Blockscout, title: "Address 0x1EcA20cfa4AF2e2fA2F4CE2bF8d97bFa184FD4D7", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x1EcA20cfa4AF2e2fA2F4CE2bF8d97bFa184FD4D7", published_at: null, accessed_at: 2026-09-03T04:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-27, CLM-33], excerpt: "name SentryTokenRelaunch is_contract true is_verified true proxy_type null. creator_address_hash 0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5. RPC owner() 0xbf551eed83c7eaee63854a2013eb94f18600b7c5." }
  - { id: R-19, publisher: DefiLlama, title: "protocol/sentry", url: "https://api.llama.fi/protocol/sentry", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-12, CLM-13, CLM-14, CLM-17, CLM-25, CLM-32], excerpt: "name Sentry. category Launchpad. chains [Ink, Robinhood Chain]. twitter sentrylauncher. audits 0. github null. url ' '. description: token launchpad on Robinhood Chain; Uniswap V3 pool seeded at launch; LP locked in the factory; LP fees split 65/35. currentChainTvls Ink 100085.80891 Robinhood Chain 99133.67753. listedAt 1783448895 (2026-07-07T18:28:15Z)." }
  - { id: R-20, publisher: DefiLlama, title: "summary/fees/sentry", url: "https://api.llama.fi/summary/fees/sentry", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-30], excerpt: "total24h 19422. total7d 220733. total30d 247675. totalAllTime 297604.26. chains [Ink, Robinhood Chain]. last totalDataChartBreakdown 1788307200 Robinhood Chain 2363 Ink 17059. Methodology: 1% app fee on ETH side of fee-router swaps plus 1% Uni V3 LP fee on launched pools." }
  - { id: R-21, publisher: DefiLlama, title: "Sentry protocol page", url: "https://defillama.com/protocol/sentry", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13, CLM-14, CLM-30], excerpt: "Total Value Locked $199,219.49. TVL by Chain Ink $100,085.81 Robinhood Chain $99,133.68. Fees 24h $19,422 (Ink $17,059 RH $2,363). Fees 7d $220,733. Revenue 24h $5,968. Twitter https://x.com/sentrylauncher. Category Launchpad. Operates on Ink and Robinhood Chain." }
  - { id: R-22, publisher: DefiLlama, title: "fees/sentry adapter", url: "https://raw.githubusercontent.com/DefiLlama/dimension-adapters/master/fees/sentry/index.ts", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-20], excerpt: "sentry.trading token launchpad + multi-venue swap frontend on Robinhood Chain and Ink. CREATOR_LP_SHARE 0.7. Comment: factory splits collected LP fees 70% creator / 30% treasury. Ink currently has launch pools only; router fields null. Goldsky sentry-robinhood/1.2.0 and sentry-ink/1.1.0." }
  - { id: R-26, publisher: DefiLlama, title: "summary/fees/sentry dailyRevenue", url: "https://api.llama.fi/summary/fees/sentry?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-30], excerpt: "total24h 5968. total7d 68409. total30d 77878. totalAllTime 93773.96. chains [Ink, Robinhood Chain]." }
  - { id: R-27, publisher: Blockscout, title: "Address 0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5", published_at: null, accessed_at: 2026-09-03T04:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11, CLM-28], excerpt: "hash 0xbF551eED83c7eaEE63854a2013Eb94f18600B7C5. is_contract false. is_verified false. name null. RPC eth_getCode 0x; nonce 1113." }
  - { id: R-28, publisher: Ink RPC, title: "eth_getCode / owner() Sentry Ink factories", url: "https://rpc-gel.inkonchain.com", published_at: null, accessed_at: 2026-09-03T04:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-17, CLM-20, CLM-28, CLM-29, EVT-5], excerpt: "eth_chainId 0xdef1 (57073). eth_blockNumber 0x345e00f (54882319). 0xcF44…45BD 1971 B nonce 33 owner 0xbf55…B7C5 impl 0xfe76…2403 creatorFeeBps 7000. 0xDc37…5BE1 2091 B nonce 148 owner same creatorFeeBps 6500. Vault 0x8658…87eC 11220 B. Same addresses eth_getCode 0x on rpc.mainnet.chain.robinhood.com." }
  - { id: R-29, publisher: Ink explorer, title: "Ink Sentry factory addresses", url: "https://explorer.inkonchain.com/api/v2/addresses/0xcF44b151aee1Ef69677f24cadED4d2d61b0D45BD", published_at: null, accessed_at: 2026-09-03T04:28:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-29, CLM-34, EVT-5], excerpt: "0xcF44…45BD name TransparentUpgradeableProxy is_verified true proxy_type eip1967 impl 0xfe76FEb9…2403 name SentryLaunchFactoryV4Ink is_verified true. 0xDc37…5BE1 impl SentryLaunchFactory 0x94b22ce6…cE73 is_verified true. 0x8658…87eC name SentryLPVault is_verified true. 0x733733E8…B2E4 impl CitadelEscape. creator 0xbF551eED…B7C5." }
  - { id: R-30, publisher: GitHub, title: "sentrylauncher / sentry-trading 404", url: "https://api.github.com/users/sentrylauncher", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-25], excerpt: "HTTP 404 for api.github.com/users/sentrylauncher, /orgs/sentrylauncher, /orgs/sentry-trading, /users/sentry-trading. github.com/mavrkofficial type User name Sergio Luna; public repos include DefiLlama-Adapters fork and quotrons-brand-kit; no Sentry core repo listed this pass." }

gaps:
  - { priority: P0, question: "Does owner 0xbf55…B7C5 sit behind a Safe or timelock on any chain, or do all upgradeable Sentry factories remain Ownable by this EOA?", checked: "owner() on RH v3/v4, Ink v3/v4, and RH treasury splitter 0xbf55…B7C5; eth_getCode 0x on 4663; Blockscout is_contract false; nonce 1113, 2026-09-03", next: "eth_getCode on 57073 and Ethereum; read proxy admin() if TransparentUpgradeableProxy uses a separate ProxyAdmin" }
  - { priority: P0, question: "Is SENTRY 0x1EcA…4D7 actually renounced, and what does owner() mean on SentryTokenRelaunch?", checked: "Guide says renounced; RPC owner() 0xbf55…B7C5; Blockscout name SentryTokenRelaunch is_verified true, 2026-09-03", next: "read verified source for Ownable vs dead-address; do not treat the guide sentence as reproduced" }
  - { priority: P1, question: "Is there an audit report whose scope matches RH factories 0x4722…5cc1 / 0xd0A9…6b3A and Ink 0xcF44…45BD?", checked: "sentry-guide.md, site HTML, @sentrylauncher, Llama audits 0 and audit_links null, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P1, question: "Where is the canonical source repository?", checked: "github sentrylauncher/sentry-trading 404; Llama github null; mavrk.gitbook.io/sentry-docs and github.com/mavrkofficial have no Sentry core repo this pass", next: "treat gitbook as docs host until a repo URL appears on sentry.trading" }
  - { priority: P1, question: "Does the Llama fees adapter 70/30 apply to Ink V3 (creatorFeeBps 6500) and to v4 hook fees, or only RH V3 collects?", checked: "dimension-adapters CREATOR_LP_SHARE 0.7; guide v4 hook pays per swap; Ink V3 65/35 on-chain, 2026-09-03", next: "do not use 7d fee 220733 as a Robinhood-only figure; Ink was 17059 of 19422 in the last 24h slice" }
  - { priority: P2, question: "What is CitadelEscape 0x733733…B2E4 on Ink relative to the official launch factories?", checked: "Llama adapter ink v3Factories agent launches; explorer name CitadelEscape; omitted from sentry-guide.md; empty code on 4663, 2026-09-03", next: "do not file as a 4663 factory; record any official docs that name it" }
---

# Sentry — research packet

## What it is

Sentry is a token launchpad and swap app on Robinhood Chain and Ink. A launch deploys a fixed-supply ERC-20 into a Uniswap pool in one transaction; there is no bonding curve and no graduation. New launches use Uniswap v4 with the position locked in SentryLPVault. A legacy V3 factory remains on each chain. The app also quotes Uni V3/V2/v4 and PancakeSwap V3 on Robinhood, and Uni V3 on Ink. The handle is @sentrylauncher; the site is sentry.trading.

Themes: launchpad

## Why it matters

This is a live dual-chain uni-pool pad, not a Robinhood-only row. Llama's latest slice is about $199k TVL split almost evenly (Ink $100,086 / Robinhood Chain $99,134) with 24h fees $19,422, most of that on Ink. The 14 Jul 2026 post and the user guide both say launches go straight to Uniswap with LP locked. The pad is not a census row. [claim R-2 R-5 R-19 R-20 R-21]

## What could go wrong

The live factories are upgradeable ERC1967 proxies. owner() on the RH and Ink factories is one externally owned account with no code on 4663. The guide's 65/35 versus 70/30 fee language is not the same as Llama's protocol blurb, and the SENTRY token's owner() still returns that EOA. Ink addresses have empty code on 4663; using them on Robinhood Chain is the wrong chain. [verified R-13 R-28] [claim R-2 R-19]

## Product and mechanics

A launch has no bonding curve and no graduation. Guide: 1B ERC-20, ownership renounced, 100% of supply into a Uniswap v4 pool, position held by immutable SentryLPVault, trading public in the same transaction. Pair against WETH on either chain, Robinhood stock tokens on 4663, or Backed wrapped xStocks on Ink. Legacy V3 factories are marked retired for new launches; RPC still shows code. [claim R-2 R-5]

v4 pools open at a 40% fee that decays to a 1.7% floor (2.00% on Ink xStock pairs). Legacy V3 collect split is 70/30 on Robinhood (creatorFeeBps 7000) and 65/35 on Ink (6500). In-app swaps take a 1% platform fee. [verified R-13 R-28] [claim R-2]

## Control and security

owner() on RH v4 factories 0x4722…5cc1 and 0xd0A9…6b3A, RH v3 0x9e8f…36Cb, Ink v4 0xcF44…45BD, Ink v3 0xDc37…5BE1, and the RH treasury splitter is 0xbf55…B7C5. That address has no code on 4663. Implementation slots match verified SentryLaunchFactoryV4 / SentryLaunchFactory / SentryLaunchFactoryV4Ink. Vaults are verified SentryLPVault with no owner() this pass. No timelock address was located. Guide: in-app generated keys are created server-side and encrypted at rest. [verified R-13 R-14 R-27] [claim R-2]

## Team and provenance

@sentrylauncher names sentry.trading in the bio; sentry.trading JS links the handle. Llama twitter is sentrylauncher. Display name Sentry Launcher. Docs live at sentry.trading/sentry-guide.md and mavrk.gitbook.io/sentry-docs. GitHub user mavrkofficial (Sergio Luna) hosts related kits; there is no sentrylauncher GitHub user. getsentry is a different GitHub org (error-monitoring product), not this pad. [verified R-1 R-9] [claim R-30]

## Economics and activity

Llama currentChainTvls Ink 100085.81 + Robinhood Chain 99133.68 = 199219.49 USD at 2026-09-03T00:32:23Z (page $199,219.49). summary/fees total24h 19422 (Ink 17059 / RH 2363), total7d 220733. dailyRevenue total24h 5968, total7d 68409. Treasury adapter currentChainTvls Robinhood Chain 640.57. Figures are dual-chain; do not file the $199k sum as a Robinhood Chain TVL. [claim R-19 R-20 R-21 R-26]

## Material risks

- Upgradeable factories; owner is one EOA with no code on 4663. [verified R-13 R-27]
- Ink factories have empty code on 4663; chain_scope is multichain, Ink rows are chain other. [verified R-28]
- Llama description 65/35 does not match RH creatorFeeBps 7000. [verified R-13] [claim R-19]
- Guide says SENTRY is renounced; RPC owner() is the factory EOA. [verified R-13 R-18] [claim R-2]
- No audit report URL. [unknown]
- Llama 24h fees are mostly Ink, not Robinhood Chain. [claim R-20 R-21]
- Llama Ink v3 list includes CitadelEscape 0x733733…, not in the official guide. [claim R-4 R-29]

## Verification passes

- Receipts: sentry.trading, sentry-guide.md, JS bundle, X profile and posts, Llama protocol/fees/page/adapters, GitHub 404, Blockscout api/v2, Ink explorer api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-2 R-13 R-19]
- Numbers: TVL and fees are dual-chain from api.llama.fi; RH slice is 99133.68 TVL and 2363 of 24h fees. Bytecode lengths, nonces, owner(), creatorFeeBps, and ERC1967 slots are chain 4663 and 57073 RPC. [verified R-13 R-19 R-28]
- Adversarial: strongest contrary reading is that Sentry is Robinhood-native only, or is Coinbarrel / Pons / Bankr / LONG / Safehood. Llama chains and Ink RPC with empty 4663 code argue against robinhood-native. Coinbarrel launcher is 0x4234…e70; Pons is a bonding-curve pad; Bankr is named as a separate route in the Sentry guide. [inference R-2 R-4 R-13 R-18]

## Operations log

- Census.yaml has no sentry row; no content/projects/sentry.yaml. Discovery inventory names the slug with @sentrylauncher / sentry.trading.
- www.sentry.trading, sentry.trading/sentry-guide.md, /assets/index-C_L17ZF0.js, mavrk.gitbook.io/sentry-docs, and t.co/1aozviBVCq (301 to sentry.trading) opened 2026-09-03.
- X: @sentrylauncher profile, 14 Jul no-bonding-curve post, 16 Jul PCS-V3 post, 10 Aug chain-clause bot reply, 27 Aug Ink xStocks post.
- RPC https://rpc.mainnet.chain.robinhood.com and https://rpc-gel.inkonchain.com with browser User-Agent: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), creatorFeeBps(), ERC1967 slot on the factories, vaults, SENTRY token, and owner EOA.
- Blockscout api/v2 for RH factories, vault, token, owner; explorer.inkonchain.com api/v2 for Ink factories, vault, and 0x733733….
- api.llama.fi/protocol/sentry, summary/fees/sentry, summary/fees dailyRevenue, defillama.com/protocol/sentry, DefiLlama adapter index.js and fees/sentry/index.ts.
- api.github.com users/orgs sentrylauncher and sentry-trading HTTP 404; users/mavrkofficial 200.
