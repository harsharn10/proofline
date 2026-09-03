---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: arrows
name: Arrows
packet_tier: seed
as_of: 2026-09-03T03:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [arrows]
allowed_paths:
  - research/inbox/packets/arrows/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Arrows
  aliases: [Arrows Finance]
  symbols: [ARROWS]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.arrows.finance
  official_handle: "@arrowsonhood"
  repository: https://github.com/arrows0/contracts
  possible_matches:
    - slug: arrow
      signals: [other]
      contrary_signals:
        - "Census Arrow Finance is a CDP at arrowfinance.io / @ArrowFinanceio with token 0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03"
        - "Census Arrows is options at arrows.finance / @arrowsonhood with token 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: markets/options
  secondary_leaves: []
  mechanism_tags: [derivatives, vault, rwa, nft]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Census still says announced. ARROWS 0xD71b…4F0e, OptionToken, SeriesFactory, CollateralVault and VaultRouter have non-empty code on chain 4663; OptionToken source is ERC-1155. Docs publish live core and maturity-vault addresses. DefiLlama has no Arrows protocol row. Writer-vault NAV was not reproduced this pass. [R-2] [R-7] [R-9] [R-10] [R-15]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-8, CLM-9, CLM-10, CLM-11], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-22], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-12, CLM-14, CLM-26], note: "" }

links:
  - { kind: site, url: "https://www.arrows.finance", authenticity: confirmed }
  - { kind: app, url: "https://app.arrows.finance", authenticity: confirmed }
  - { kind: docs, url: "https://docs.arrows.finance", authenticity: confirmed }
  - { kind: x, url: "https://x.com/arrowsonhood", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/arrowsportal", authenticity: confirmed }
  - { kind: github, url: "https://github.com/arrows0/contracts", authenticity: confirmed }

deployments:
  - label: ARROWS token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-7, R-8, R-9]
  - label: Config
    role: other
    address:
      value: "0x410C428d7602EcB5B8C3255030e9852C2791445C"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9, R-14]
  - label: SeriesFactory
    role: factory
    address:
      value: "0xD03c98E93DF68BB5ADc9C27B3dD57863542A9D8f"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9, R-11]
  - label: OptionToken
    role: token
    address:
      value: "0x9Af7485f5B8427C628E5F967aD9AA0f9289d015D"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9, R-10]
  - label: CollateralVault
    role: vault
    address:
      value: "0xd334f914544b570A5fd03b6956f997107dE9C840"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9, R-12]
  - label: VaultRouter
    role: router
    address:
      value: "0x09D965dD46Cc65fEbeea720295a18B798B4dF0ba"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9, R-13]
  - label: FeeSplitter
    role: other
    address:
      value: "0xf5B9330931E5941e287d40237aDE0Bd6eacb8edc"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9, R-25]
  - label: TokenStake
    role: other
    address:
      value: "0xFCda38304cF81E03ADeF0cb5BB26C171A93168b6"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9, R-26]
  - label: ETH MaturityCallVault
    role: vault
    address:
      value: "0x277Ba3F49d550E031bD10E66E2deD624B20db2B4"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-9, R-27]
  - label: ETH MaturityPutVault
    role: vault
    address:
      value: "0x37D30B87050d65c28E67A97AE02e02c8Da2A0C3a"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-9, R-28]

metrics:
  - { kind: volume_24h, value: 75629.28, currency: USD, as_of: 2026-09-03T03:40:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e ARROWS/ETH Uniswap v4 volume.h24; token book, not options-vault notional", class: claim, receipt_ids: [R-15] }
  - { kind: market_cap, value: 166632, currency: USD, as_of: 2026-09-03T03:40:00Z, window: point, method: "same DexScreener ARROWS/ETH v4 pair marketCap", class: claim, receipt_ids: [R-15] }
  - { kind: holders, value: 1048, currency: null, as_of: 2026-09-03T03:40:00Z, window: point, method: "Blockscout GET /api/v2/addresses/0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e token.holders_count", class: claim, receipt_ids: [R-7] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-9], result: "eth_blockNumber 0x329f3dc (53081052). eth_getCode non-empty: ARROWS 3248, Config 6528, SeriesFactory 8412, OptionToken 5649, CollateralVault 7644, VaultRouter 14792, FeeSplitter 4459, TokenStake 5667, ETH call 22453, ETH put 21388. owner() on Config/SeriesFactory/OptionToken/VaultRouter/FeeSplitter/TokenStake = 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365; that address eth_getCode 0x. name()/symbol() ARROWS; decimals 18; totalSupply 1e27." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:42:00Z, receipt_ids: [R-7, R-8, R-10, R-11, R-12, R-13, R-14, R-25, R-26, R-27, R-28], result: "Blockscout API v2: ARROWS is_contract true is_verified true name ARROWS / PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol creator PonsV2LaunchDeployer 0x3711ceA4…1A42 tx 0xa18d3b9d…71610 launchAndBuy to PonsV2LaunchAndBuy 0xe33E9E47…2948 from EOA 0x9F89de65…5365 at 2026-08-15T14:24:54Z block 37184280 holders_count 1048. Config/SeriesFactory/OptionToken/CollateralVault/VaultRouter/FeeSplitter/TokenStake is_verified true, creator 0x9F89de65…5365. OptionToken src/core/OptionToken.sol ERC1155 is_partially_verified true. ETH MaturityCallVault and MaturityPutVault is_verified false." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-4, R-5, R-8], result: "@arrowsonhood bio website https://arrows.finance and Contract 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e. www.arrows.finance JS VITE_TWITTER_URL https://x.com/arrowsonhood, VITE_APP_URL https://app.arrows.finance, VITE_DOCS_URL https://docs.arrows.finance, VITE_GITHUB_URL https://github.com/arrows0. Pons launch metadata twitter https://x.com/arrowsonhood." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-15], result: "DexScreener token-pairs robinhood 0xD71b…4F0e: Uniswap v4 ARROWS/ETH pair 0x2bb787a885bee4c1e61e2525aec976e1f8ec255976f7c64e7955c1f0d787d7d8 volume.h24 75629.28 liquidity.usd 37074.54 marketCap 166632 pairCreatedAt 2026-08-15T19:11:19Z; websites www.arrows.finance and docs.arrows.finance; socials x.com/arrowsonhood and t.me/arrowsportal. Second pair ARROWS/USDG v4 liquidity.usd 5.63." }
  - { id: REP-5, method: repository-crosslink, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-6], result: "www.arrows.finance JS VITE_GITHUB_URL https://github.com/arrows0. GET github.com/arrows0/contracts README: Arrows V2 Contracts, Foundry workspace for the Arrows fully collateralized call and put protocol; src/core OptionToken SeriesFactory CollateralVault; RedeployCore.s.sol production V2 replacement with no timelock handoff. Org homepage field empty." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Vanilla European calls and puts on Robinhood Stock Tokens and ETH. Every short escrows maximum loss at mint. Longs are transferable ERC-1155s. V2 liquidity is a pair of maturity writer vaults per underlying (covered-call / cash-secured-put) served by VaultRouter. Calls settle in-kind; puts settle in USDG.", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-3, R-4, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.arrows.finance", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@arrowsonhood", class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-5, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-5, R-7, R-8, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-7, R-9, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: taxonomy.primary-leaf, value: markets/options, class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: identity.symbol, value: ARROWS, class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0x9Af7485f5B8427C628E5F967aD9AA0f9289d015D", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-9, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: deployment.address, value: "0xD03c98E93DF68BB5ADc9C27B3dD57863542A9D8f", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-9, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: deployment.address, value: "0xd334f914544b570A5fd03b6956f997107dE9C840", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-9, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: deployment.address, value: "0x09D965dD46Cc65fEbeea720295a18B798B4dF0ba", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-9, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: control.owner, value: "owner() on Config, SeriesFactory, OptionToken, VaultRouter, FeeSplitter and TokenStake returns EOA 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365 (eth_getCode 0x). Same EOA created those cores and sent the Pons launchAndBuy.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-8, R-9, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Distinct from census slug arrow (Arrow Finance CDP at arrowfinance.io / @ArrowFinanceio / token 0xf2915d1e3C1B0c769d0c756Ec43F1c1f6c99cD03). No shared domain, handle or reproduced address.", class: verified, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-14, field: relationship, value: "ARROWS was created 2026-08-15T14:24:54Z via PonsV2LaunchAndBuy.launchAndBuy (config 0, pairToken 0x0 / ETH, quoteIn 0.425 ETH) through PonsV2LaunchDeployer 0x3711ceA4…1A42. Lead book is Uniswap v4 ARROWS/ETH. Launchpad Pons v2. Pair asset ETH. Venue Uniswap v4.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-8, R-15], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "DexScreener Uniswap v4 ARROWS/ETH volume.h24 75629.28 USD, liquidity.usd 37074.54, marketCap 166632 at 2026-09-03T03:40:00Z. Token book, not options-vault notional.", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-15], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Blockscout token.holders_count 1048 on ARROWS 0xD71b…4F0e", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-7], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "Whitepaper lists audits as a launch requirement. README mentions historical V1 audit trackers under docs/. No third-party audit report URL was located on the site, docs, GitHub or X this pass. DefiLlama has no Arrows protocol row.", class: unknown, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@arrowsonhood.role", value: project, class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@arrowsonhood.slug", value: arrows, class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.repository, value: "https://github.com/arrows0/contracts", class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-21, field: identity.alias, value: Arrows Finance, class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-3, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-23, field: identity.name, value: Arrows, class: verified, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-24, field: control.timelock, value: "README: production V2 replacement has no timelock handoff; deployer remains the sole owner of replacement contracts. owner() on live cores is EOA 0x9F89de65…5365.", class: claim, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-6, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0x410C428d7602EcB5B8C3255030e9852C2791445C", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-9, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "Docs mainnet vaults object lists MaturityCallVault/MaturityPutVault pairs for TSLA, NVDA, AAPL, GME, MU, SPCX and ETH. ETH call 0x277Ba3F4…b2B4 and put 0x37D30B87…0C3a have code and is_verified false. Legacy cores (SeriesFactory 0x7f8DDe3a…31F3, OptionToken 0x21Cf6f4a…06a6, CollateralVault 0x3CAe9a50…8bED, VaultRouter 0x577f9678…4666) still have code.", class: verified, observed_at: 2026-09-03T03:42:00Z, receipt_ids: [R-2, R-9, R-27, R-28], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-27, field: activity.status, value: "@arrowsonhood 2026-09-02 posted challenge volume $3,693 / 501 trades / 770 contracts; 2026-09-01 posted LPs earned $472.99 premiums on $15.6K vault liquidity. Vault NAV was not reproduced on chain this pass.", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-16, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: team.identity, value: "@arrowsonhood bio names Founder: @iam0x00", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: product.mechanism, value: "@arrowsonhood 2026-09-02: building managed range vaults across Uni v3, Uni v4 and UP; one transferable LP NFT; idle liquidity used as options collateral when in range.", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: "account.@arrowsonhood.note", value: "Handle lists arrows.finance and token 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e. Display name Arrows Finance. Distinct from @ArrowFinanceio.", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Trading Challenge recap: $3,693 volume, 501 trades"
    summary: "@arrowsonhood: volume grew 22.5% to $3,693 across 501 trades and 770 contracts; four days remain."
    occurred_at: 2026-09-02T21:39:23Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-2
    type: company
    title: "Managed range vaults across Uni v3, v4 and UP"
    summary: "@arrowsonhood: one LP NFT across Uni v3, v4 and UP; idle liquidity becomes options collateral in range."
    occurred_at: 2026-09-02T13:11:19Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-3
    type: company
    title: "Challenge recap: volume beyond $3,000; ETH options"
    summary: "@arrowsonhood: volume beyond $3,000 across 590 contracts; $472.99 premiums on $15.6K vault LP; 18 traders."
    occurred_at: 2026-09-01T20:13:11Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: company
    title: "ETH options vaults over $6K; total TVL $15.5K"
    summary: "@arrowsonhood: over $6K available across ETH calls and puts; total TVL $15.5K."
    occurred_at: 2026-08-31T16:50:21Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [economics.metric, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-5
    type: company
    title: "Update live: trading is now available"
    summary: "@arrowsonhood posted that the update is live and trading is now available, quoting its article."
    occurred_at: 2026-08-31T13:22:54Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [lifecycle, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-6
    type: company
    title: "Week 1 challenge: $1,234.53 volume, $12,134 LP"
    summary: "@arrowsonhood: week 1 $1,234.53 volume, 227 trades, 220.32 contracts, vault LP $12,134.17, premiums $205.40."
    occurred_at: 2026-08-28T20:54:04Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-7
    type: company
    title: "ETH options and settlement named for 31 Aug"
    summary: "@arrowsonhood: from Monday 31 Aug, ETH options integration and settlement; also named up/down prediction markets."
    occurred_at: 2026-08-27T12:16:02Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-8
    type: onchain
    title: "ARROWS token created via Pons v2 launchAndBuy"
    summary: "PonsV2LaunchAndBuy.launchAndBuy created ARROWS 0xD71b…4F0e at 2026-08-15T14:24:54Z; pairToken ETH."
    occurred_at: 2026-08-15T14:24:54Z
    observed_at: 2026-09-03T03:42:00Z
    affected_fields: [deployment.address, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8]

receipts:
  - { id: R-1, publisher: Arrows, title: "Arrows homepage", url: "https://www.arrows.finance/", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-13, CLM-20, CLM-23], excerpt: "meta description: Arrows: fully collateralized European options on Robinhood Stock Tokens. og:title Arrows | Options on tokenized stocks. JS VITE_TWITTER_URL https://x.com/arrowsonhood VITE_APP_URL https://app.arrows.finance VITE_DOCS_URL https://docs.arrows.finance VITE_GITHUB_URL https://github.com/arrows0. Indexed body: Fully collateralized European calls and puts on Robinhood Stock Tokens (TSLA, NVDA, AAPL, SPY), settled on Robinhood Chain." }
  - { id: R-2, publisher: Arrows, title: "Contract addresses", url: "https://docs.arrows.finance/addresses", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-8, CLM-9, CLM-10, CLM-11, CLM-22, CLM-25, CLM-26], excerpt: "docs JS mainnet arrowsToken 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e. core config 0x410C428d7602EcB5B8C3255030e9852C2791445C seriesFactory 0xD03c98E93DF68BB5ADc9C27B3dD57863542A9D8f optionToken 0x9Af7485f5B8427C628E5F967aD9AA0f9289d015D collateralVault 0xd334f914544b570A5fd03b6956f997107dE9C840 vaultRouter 0x09D965dD46Cc65fEbeea720295a18B798B4dF0ba. vaults.ETH call 0x277Ba3F49d550E031bD10E66E2deD624B20db2B4 put 0x37D30B87050d65c28E67A97AE02e02c8Da2A0C3a." }
  - { id: R-3, publisher: Arrows, title: "Whitepaper", url: "https://docs.arrows.finance/whitepaper", published_at: null, accessed_at: 2026-09-03T03:35:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-22], excerpt: "Arrows is a protocol for vanilla call and put options on Robinhood Stock Tokens and ETH backed by canonical WETH, settled on Robinhood Chain. Every short position posts maximum-loss collateral at inception. V2 liquidity is a pair of continuous algorithmic maturity writer vaults per underlying—covered-call and cash-secured-put pools priced by Black–Scholes with utilization markup—served by VaultRouter. Call settlement asset: underlying token. Put settlement asset: USDG." }
  - { id: R-4, publisher: Arrows, title: "Arrows app", url: "https://app.arrows.finance/", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "meta description: Trade fully collateralized options on tokenized stocks. Settled on Robinhood Chain. Indexed body: European options on tokenized stocks — fully collateralized, cash / in-kind settled, priced on Chainlink. Markets listed live: TSLA, NVDA, AAPL, SPY, QQQ, SPCX with rolling put maturity vault." }
  - { id: R-5, publisher: "@arrowsonhood", title: "Arrows Finance profile", url: "https://x.com/arrowsonhood", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-13, CLM-18, CLM-19, CLM-21, CLM-23, CLM-28, CLM-30], excerpt: "Display name Arrows Finance, handle @arrowsonhood. Bio: The first fully collateralized options trading platform for tokenized stocks. Contract: 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e Founder: @iam0x00. Website https://arrows.finance/. Joined 2026-08-08." }
  - { id: R-6, publisher: arrows0, title: "arrows0/contracts README", url: "https://github.com/arrows0/contracts", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-20, CLM-24], excerpt: "# Arrows V2 Contracts. Foundry workspace for the Arrows fully collateralized call and put protocol. This repository contains the V2 maturity-vault execution path. src/core/ Series creation, option receipts, collateral, and settlement. script/RedeployCore.s.sol performs the production V2 replacement. The production V2 replacement has no timelock handoff: the deployer must own every legacy mutable dependency, cancels pending ownership transfers, and remains the sole owner of replacement contracts." }
  - { id: R-7, publisher: Blockscout, title: "Address 0xD71b…4F0e ARROWS", url: "https://robinhoodchain.blockscout.com/address/0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-7, CLM-13, CLM-16], excerpt: "hash 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e name ARROWS is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xa18d3b9de0f2b6b2543b55ce7537ef77fd230ec284b35def310d2a8cde871610. token name ARROWS symbol ARROWS decimals 18 type ERC-20 holders_count 1048 total_supply 1000000000000000000000000000." }
  - { id: R-8, publisher: Blockscout, title: "ARROWS creation tx 0xa18d3b9d…", url: "https://robinhoodchain.blockscout.com/tx/0xa18d3b9de0f2b6b2543b55ce7537ef77fd230ec284b35def310d2a8cde871610", published_at: 2026-08-15T14:24:54Z, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-12, CLM-14, EVT-8], excerpt: "timestamp 2026-08-15T14:24:54.000000Z status ok from 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365 to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name/symbol ARROWS twitter https://x.com/arrowsonhood pairToken 0x0000000000000000000000000000000000000000 quoteIn 425000000000000000. Smart-contract name PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol." }
  - { id: R-9, publisher: Robinhood Chain RPC, title: "eth_getCode, owner, name, totalSupply", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-7, CLM-8, CLM-9, CLM-10, CLM-11, CLM-12, CLM-22, CLM-24, CLM-25, CLM-26], excerpt: "eth_blockNumber 0x329f3dc (53081052). eth_getCode non-empty on ARROWS, Config, SeriesFactory, OptionToken, CollateralVault, VaultRouter, FeeSplitter, TokenStake, ETH call/put vaults. owner() 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365 on Config, SeriesFactory, OptionToken, VaultRouter, FeeSplitter, TokenStake; that address code 0x. name/symbol ARROWS decimals 18 totalSupply 1e27." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x9Af7…015D OptionToken", url: "https://robinhoodchain.blockscout.com/address/0x9Af7485f5B8427C628E5F967aD9AA0f9289d015D", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-8], excerpt: "hash 0x9Af7485f5B8427C628E5F967aD9AA0f9289d015D name OptionToken is_contract true is_verified true is_partially_verified true file_path src/core/OptionToken.sol compiler 0.8.30+commit.73712a01 creator 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365. Source imports ERC1155, ERC1155Supply, Ownable." }
  - { id: R-11, publisher: Blockscout, title: "Address 0xD03c…9D8f SeriesFactory", url: "https://robinhoodchain.blockscout.com/address/0xD03c98E93DF68BB5ADc9C27B3dD57863542A9D8f", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0xD03c98E93DF68BB5ADc9C27B3dD57863542A9D8f name SeriesFactory is_contract true is_verified true is_partially_verified true file_path src/core/SeriesFactory.sol compiler 0.8.30+commit.73712a01 creator 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365." }
  - { id: R-12, publisher: Blockscout, title: "Address 0xd334…C840 CollateralVault", url: "https://robinhoodchain.blockscout.com/address/0xd334f914544b570A5fd03b6956f997107dE9C840", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "hash 0xd334f914544b570A5fd03b6956f997107dE9C840 name CollateralVault is_contract true is_verified true is_partially_verified true file_path src/core/CollateralVault.sol compiler 0.8.30+commit.73712a01 creator 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x09D9…F0ba VaultRouter", url: "https://robinhoodchain.blockscout.com/address/0x09D965dD46Cc65fEbeea720295a18B798B4dF0ba", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "hash 0x09D965dD46Cc65fEbeea720295a18B798B4dF0ba name VaultRouter is_contract true is_verified true creator 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365 creation_transaction_hash 0xfd3dfa5e2aa7386e440c7a5b122435a07d8ffc644fbe6dcd8192f88a3418fb82." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x410C…445C Config", url: "https://robinhoodchain.blockscout.com/address/0x410C428d7602EcB5B8C3255030e9852C2791445C", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-25], excerpt: "hash 0x410C428d7602EcB5B8C3255030e9852C2791445C name Config is_contract true is_verified true creator 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365 creation_transaction_hash 0x92b9952910eb622436af7258a247cd951c9aad8c5a165110637c36777bbb599f." }
  - { id: R-15, publisher: DexScreener, title: "ARROWS token pairs on robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-14, CLM-15, EVT-8], excerpt: "chainId robinhood dexId uniswap labels [v4] pairAddress 0x2bb787a885bee4c1e61e2525aec976e1f8ec255976f7c64e7955c1f0d787d7d8 baseToken ARROWS 0xD71b7b4e1dc16BD6938D3F235A68aa8ab1CF4F0e quoteToken ETH volume.h24 75629.28 liquidity.usd 37074.54 marketCap 166632 pairCreatedAt 1786821079000. info.websites https://www.arrows.finance/ https://docs.arrows.finance/ socials https://x.com/arrowsonhood https://t.me/arrowsportal." }
  - { id: R-16, publisher: "@arrowsonhood", title: "Arrows Trading Challenge Daily Recap 2 Sep", url: "https://x.com/arrowsonhood/status/2095265355971055809", published_at: 2026-09-02T21:39:23Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, EVT-1], excerpt: "Arrows Trading Challenge Daily Recap. Volume grew 22.5% today, reaching $3,693 across 501 trades and 770 contracts. A new trader has taken the lead. Four days remain." }
  - { id: R-17, publisher: "@arrowsonhood", title: "One position. Three liquidity engines.", url: "https://x.com/arrowsonhood/status/2095137495562301567", published_at: 2026-09-02T13:11:19Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-29, EVT-2], excerpt: "Arrows is building managed range vaults across Uni v3, Uni v4, and UP on Robinhood Chain. Choose the venue, fee setting, range, and expiry. Deposit both assets and receive one transferable LP position NFT. Liquidity stays productive in the LP pool while idle and is used as options collateral only when in range." }
  - { id: R-18, publisher: "@arrowsonhood", title: "Arrows Trading Challenge Daily Recap 1 Sep", url: "https://x.com/arrowsonhood/status/2094881272610922848", published_at: 2026-09-01T20:13:11Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, EVT-3], excerpt: "Arrows Trading Challenge Daily Recap. Volume jumped 46% in the past day, pushing total protocol volume beyond $3,000 across 590 contracts. LPs have now earned $472.99 in options premiums on $15.6K in vault liquidity, while the number of traders has grown to 18. Trade ETH options now." }
  - { id: R-19, publisher: "@arrowsonhood", title: "ETH options vault liquidity", url: "https://x.com/arrowsonhood/status/2094467842556952600", published_at: 2026-08-31T16:50:21Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "We’ve added more liquidity to the ETH options vaults. Over $6K is now available to trade across ETH calls and puts on Arrows. Total TVL: $15.5K." }
  - { id: R-20, publisher: "@arrowsonhood", title: "Update is live! Trading is now available.", url: "https://x.com/arrowsonhood/status/2094415635077808291", published_at: 2026-08-31T13:22:54Z, accessed_at: 2026-09-03T03:50:00Z, kind: announcement, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "Update is live! Trading is now available." }
  - { id: R-21, publisher: "@arrowsonhood", title: "Week 1 of the Arrows Trading Challenge", url: "https://x.com/arrowsonhood/status/2093442013467226512", published_at: 2026-08-28T20:54:04Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "Week 1 of the Arrows Trading Challenge. $1,234.53 in trading volume. 227 trades. 220.32 contracts traded. 12 competing wallets. Meanwhile, vault liquidity reached $12,134.17, with LPs earning $205.40 in options premiums." }
  - { id: R-22, publisher: "@arrowsonhood", title: "ETH options integration and settlement", url: "https://x.com/arrowsonhood/status/2092949257133179240", published_at: 2026-08-27T12:16:02Z, accessed_at: 2026-09-03T03:50:00Z, kind: announcement, authority: primary, authenticity: confirmed, supports: [EVT-7], excerpt: "Starting Monday, August 31, ETH options integration and settlement arrive on Arrows. Users will be able to buy and sell ETH options on-chain, opening an entirely new market alongside tokenized stock options. Then comes the next wave: Up/Down order book style prediction markets for tokenized stocks and ETH." }
  - { id: R-23, publisher: "@arrowsonhood", title: "Telegram group opened", url: "https://x.com/arrowsonhood/status/2090458247551390118", published_at: 2026-08-20T15:17:39Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [], excerpt: "We’ve opened a Telegram group for the community! Come join us: https://t.me/arrowsportal" }
  - { id: R-24, publisher: Telegram, title: "Arrows Portal", url: "https://t.me/arrowsportal", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [], excerpt: "og:title Arrows Portal. og:description You can view and join @arrowsportal right away." }
  - { id: R-25, publisher: Blockscout, title: "Address 0xf5B9…8edc FeeSplitter", url: "https://robinhoodchain.blockscout.com/address/0xf5B9330931E5941e287d40237aDE0Bd6eacb8edc", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "hash 0xf5B9330931E5941e287d40237aDE0Bd6eacb8edc name FeeSplitter is_contract true is_verified true creator 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365 creation_transaction_hash 0x570e86f112c796f566bdbef7139bd19d31c1092a9575a4438f79731befcde7ce." }
  - { id: R-26, publisher: Blockscout, title: "Address 0xFCda…68b6 TokenStake", url: "https://robinhoodchain.blockscout.com/address/0xFCda38304cF81E03ADeF0cb5BB26C171A93168b6", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "hash 0xFCda38304cF81E03ADeF0cb5BB26C171A93168b6 name TokenStake is_contract true is_verified true creator 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365 creation_transaction_hash 0xc835bc01ad183e04162b875367285858aa19b58093be71b915d90e0fad9fbead." }
  - { id: R-27, publisher: Blockscout, title: "Address 0x277B…b2B4 ETH MaturityCallVault", url: "https://robinhoodchain.blockscout.com/address/0x277Ba3F49d550E031bD10E66E2deD624B20db2B4", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-26], excerpt: "hash 0x277Ba3F49d550E031bD10E66E2deD624B20db2B4 name None is_contract true is_verified false creator 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365 creation_transaction_hash 0xa75c3da6f0242e6272b3fa8ff17a7c8fb45f9dc8e8954f84460cbcd293b4ce8d." }
  - { id: R-28, publisher: Blockscout, title: "Address 0x37D3…0C3a ETH MaturityPutVault", url: "https://robinhoodchain.blockscout.com/address/0x37D30B87050d65c28E67A97AE02e02c8Da2A0C3a", published_at: null, accessed_at: 2026-09-03T03:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-26], excerpt: "hash 0x37D30B87050d65c28E67A97AE02e02c8Da2A0C3a name None is_contract true is_verified false creator 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365 creation_transaction_hash 0x07996e69c5a07042a096cb9821f29d359c655891d44a088b1f203c490c7a6140." }

gaps:
  - { priority: P0, question: "Can owner() 0x9F89de65…5365 change escrow, settlement or vault pricing without a timelock?", checked: "README RedeployCore has no timelock handoff; owner() on live cores is that EOA; verified OptionToken/SeriesFactory/CollateralVault source not read setter-by-setter this pass", next: "read access modifiers on Config and VaultRouter setters in the verified source" }
  - { priority: P0, question: "What is on-chain writer-vault NAV versus the $15.6K figure posted 1 Sep?", checked: "docs addresses, RPC code on ETH/TSLA vaults, X recap posts, DexScreener token book; no vault totalAssets call this pass", next: "eth_call totalAssets or equivalent on each MaturityCallVault/MaturityPutVault" }
  - { priority: P1, question: "Is there a third-party audit report whose scope matches the live V2 core?", checked: "site, docs whitepaper, GitHub README docs/ mention, X account, DefiLlama protocols search, 2026-09-03", next: "open github.com/arrows0/contracts/tree/main/docs and record any report URL as a claim" }
  - { priority: P2, question: "Do SPY and QQQ still have live maturity vaults after docs moved them to legacyTokens?", checked: "docs JS mainnet.tokens omits SPY/QQQ; app still listed SPY and QQQ as live this pass", next: "eth_getCode the legacy SPY/QQQ vault addresses from the older addresses table" }

---

# Arrows — research packet

## What it is

Fully collateralized European calls and puts on Robinhood Stock Tokens and ETH, issued as transferable ERC-1155s. A user buys a long or deposits stock, WETH or USDG into a maturity writer vault that escrows maximum loss. Calls settle in-kind; puts settle in USDG. arrows.finance and @arrowsonhood run the surface. Distinct from Arrow Finance, the CDP.

Themes: options, rwa, vault, nft, stock-paired:NVDA

## Why it matters

This is the census options market on chain 4663: listed-equity and ETH calls and puts with escrowed max loss instead of a margin engine. Census still says announced; a verified PonsV2LauncherToken, verified OptionToken/SeriesFactory/CollateralVault/VaultRouter, and a Uniswap v4 ARROWS/ETH book meet the mainnet bar. It is not Arrow Finance (CDP at arrowfinance.io).

## What could go wrong

Core contracts are owned by one EOA with no timelock on the V2 replacement path described in the repository README, so parameter and upgrade-adjacent changes are not time-delayed on chain. ETH maturity vaults are unpublished source. Writer-vault NAV posted on X was not reproduced. Weekend oracle gaps are disclosed in the app copy.

## Product and mechanics

Vanilla European calls and puts. A short posts maximum-loss collateral at mint. Longs are ERC-1155s on OptionToken. V2 quotes come from a covered-call vault and a cash-secured-put vault per underlying, routed by VaultRouter. Call settlement is the underlying token; put settlement is USDG. [claim R-1 R-3 R-10]

ARROWS is a Pons v2 launch token into Uniswap v4 against ETH. Docs list live maturity vaults for TSLA, NVDA, AAPL, GME, MU, SPCX and ETH. A 2 Sep post describes managed Uni v3/v4/UP range vaults as under construction. [verified R-8 R-15] [claim R-2 R-17]

## Control and security

owner() on Config, SeriesFactory, OptionToken, VaultRouter, FeeSplitter and TokenStake is EOA 0x9F89de65CaB0eC1bD4b0931D891101F6BD525365. The same EOA created those cores and submitted the Pons launchAndBuy. README states the production V2 replacement has no timelock handoff. [verified R-8 R-9] [claim R-6]

No third-party audit report URL was located on the site, docs, GitHub or X this pass. Whitepaper text treats audits as a launch requirement. ETH call and put vaults are unverified source. [unknown]

## Team and provenance

@arrowsonhood bio names the site, the ARROWS token, and founder @iam0x00. The landing JS points at the same handle, app, docs and github.com/arrows0. github.com/arrows0/contracts README is Arrows V2 Contracts; the org homepage field is empty. [claim R-5 R-6]

## Economics and activity

DexScreener Uniswap v4 ARROWS/ETH 24h volume 75629.28 USD, liquidity 37074.54 USD, market cap 166632 USD at 2026-09-03T03:40:00Z. Blockscout holders_count 1048. Those figures are the token book, not writer-vault notional. [verified R-7 R-15]

@arrowsonhood posted week-1 volume 1234.53 USD and vault LP 12134.17 USD on 28 Aug, then 2 Sep challenge volume 3693 USD. Vault NAV was not reproduced. DefiLlama has no Arrows protocol row; ArrowPad and Arrow Markets are other names. [claim R-16 R-21]

## Material risks

- Live cores are owned by one EOA; README describes no timelock on the V2 replacement. [verified R-9] [claim R-6]
- ETH maturity vaults have code and unpublished source. [verified R-27 R-28]
- Posted writer-vault TVL was not reproduced on chain this pass. [claim R-18]
- No audit report URL was located this pass. [unknown]
- Name collision with Arrow Finance (CDP) and with ArrowPad on Llama; token, domain and handle do not match. [verified R-5 R-7]

## Verification passes

- Receipts: each URL above was opened on 2026-09-03 and the excerpt copied from the page, API or RPC result. [verified R-1 R-2 R-7 R-9 R-15]
- Numbers: DexScreener volume and market cap are the ARROWS/ETH v4 pair, not an options-vault TVL; holders_count is the ERC-20. [claim R-7 R-15]
- Adversarial: the strongest contrary reading is that this slug is Arrow Finance (CDP) or ArrowPad. Domain arrows.finance, handle @arrowsonhood, token 0xD71b…4F0e and OptionToken ERC-1155 are a different product from arrowfinance.io / @ArrowFinanceio / 0xf291…9cD03. [inference R-1 R-5 R-7 R-10]

## Operations log

- Read content/census.yaml arrows and arrow rows, content/projects/arrows.yaml, content/pulled/arrows.yaml, content/feed/arrows.yaml, content/sources/arrows.yaml, content/research/arrows.md, research/inbox/packets/arrow/WORK-20260903-grok-heavy-icarus-research.md.
- Opened www.arrows.finance, docs.arrows.finance/addresses, docs.arrows.finance/whitepaper, app.arrows.finance, t.me/arrowsportal, x.com/arrowsonhood, github.com/arrows0/contracts.
- RPC https://rpc.mainnet.chain.robinhood.com eth_getCode / owner / name / totalSupply at block 53081052.
- Blockscout API v2 for ARROWS, Config, SeriesFactory, OptionToken, CollateralVault, VaultRouter, FeeSplitter, TokenStake, ETH vaults, and tx 0xa18d3b9d….
- DexScreener token-pairs v1 robinhood 0xD71b…4F0e. api.llama.fi/protocols search for arrow* returned ArrowPad.fun, ArrowPad, Arrow (Solana), Arrow Markets (Avalanche); no Arrows row.
- X from:arrowsonhood latest posts through 2026-09-02.
- Time: collect then write, one seed packet.
