---
# Packet v2 (docs/research-system.md §5). Collector full-tier for Icarus.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: downto
name: Down to Finance
packet_tier: full
as_of: 2026-09-02T23:30:00Z
prior_packet: research/inbox/packets/downto/WORK-20260902-grok-bot-downto.md@2cec4735715a3bb3bd75acf39d614161476fed44
supersedes: null
owned_slugs: [downto]
allowed_paths:
  - research/inbox/packets/downto/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Down to Finance
  aliases: ["Down To Finance", "DETF", "IndexedEx"]
  symbols: [DTF]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://downto.finance
  official_handle: "@downto_finance"
  repository: "NULL — app footer links https://github.com with no project path; cyotee/indexedex README names downto.finance without a reciprocal site or X bio link this pass"
  possible_matches:
    - slug: pons
      signals: [shared-address, other]
      contrary_signals:
        - "DTF launchFactory is the census Pons v2 factory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; Down to Finance is a launched token plus a claimed DETF basket machine, not the Pons pad"
        - "Census Pons is ponsfamily.com / @ponsdotfamily; Down to Finance is downto.finance / @downto_finance"

classification:
  primary_leaf: rwa-products/redeemable-basket
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [rwa, vault, bonding-curve, index]
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: full
  evidence_state: conflicted
  rationale: "A DETF is one token over a basket of vault shares and Uniswap v4 pools; the first bond turns it on, then mint, hold, or burn. That is a redeemable basket, not a pad. $DTF is a verified PonsV2LauncherToken, so launch/graduation-token is secondary. Lifecycle stays announced under the mainnet bar: explore lists no live DETF, staking has no Protocol DETF configured, and @downto_finance called DETF creation and staking not yet launched. Token trading and fourteen deployVault calls on the DETF package are recorded as a conflicting mainnet inference, not as the classification. No DefiLlama protocol row. [R-1] [R-2] [R-3] [R-8] [R-14] [R-16] [R-19]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-3, CLM-4], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-3], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-6], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-5, CLM-9, CLM-14], note: "" }

links:
  - { kind: site, url: "https://downto.finance", authenticity: confirmed }
  - { kind: app, url: "https://app.downto.finance/explore", authenticity: confirmed }
  - { kind: docs, url: "https://app.downto.finance/learn", authenticity: confirmed }
  - { kind: x, url: "https://x.com/downto_finance", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/downtofinance", authenticity: unconfirmed }
  - { kind: github, url: "https://github.com/cyotee/indexedex", authenticity: unconfirmed }

deployments:
  - label: DTF token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-4]
  - label: Pons v2 bonding curve for the DTF token
    role: other
    address:
      value: "0x912467fc912f0f88df3b0d221946de78f38d4559"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-6]
  - label: DiamondPackageCallBackFactory (app JS chainId 4663 map)
    role: factory
    address:
      value: "0x976949aB55830fA4794bF40C88ea7D7567931003"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-8]
  - label: UniswapV4SingleStandardExchangeDETDFPkg (app JS chainId 4663 map)
    role: other
    address:
      value: "0x961b4E050492E2744B8D20404Cd43A11D371577c"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-8, R-14]
  - label: Create3Factory (app JS chainId 4663 map)
    role: factory
    address:
      value: "0xD7786b10BC8Bc97dc7651CAb7B97086c8b227882"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9, R-8]
  - label: UniswapV4HookDiamondPackageCallBackFactory (app JS chainId 4663 map)
    role: factory
    address:
      value: "0x8BB5FCC67e8CCa44DC41dd08A5e2b2B392C22945"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-8]
  - label: indexedexManager / vaultRegistry / vaultFeeOracle proxy (app JS chainId 4663 map)
    role: proxy
    address:
      value: "0x09682b00D873D913ada0bB69B4D4c9631810d0bc"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-11, R-8]
  - label: feeCollector proxy (app JS chainId 4663 map)
    role: other
    address:
      value: "0x20af9A1e21a59a411cd3b0C40E70AF9084770b2E"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-12, R-8]
  - label: App JS owner / deployer (EOA)
    role: admin
    address:
      value: "0x72BeA6Fa3E68EF18c87D045Aac7C4Aa5249d933B"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-13, R-8]
  - label: DTF/WETH Uniswap v3 pair (DexScreener lead book)
    role: other
    address:
      value: "0x0F2CA1D996224a0c9dd140B865142aAD381A4287"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-17]

metrics:
  - { kind: holders, value: 8785, currency: null, as_of: 2026-09-02T23:16:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01 holders_count (DTF token holders, not DETF basket holders)", class: claim, receipt_ids: [R-15] }
  - { kind: volume_24h, value: 2375773.21, currency: USD, as_of: 2026-09-02T23:21:00Z, window: 24h, method: "DexScreener latest/dex/tokens DTF Uniswap v3 DTF/WETH pair 0x0F2CA1… volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-17] }
  - { kind: tvl, value: 250351.54, currency: USD, as_of: 2026-09-02T23:21:00Z, window: point, method: "DexScreener same DTF/WETH v3 pair liquidity.usd (listed pool, not protocol TVL; no Down to Finance Llama row)", class: claim, receipt_ids: [R-17, R-19] }
  - { kind: market_cap, value: 6554824, currency: USD, as_of: 2026-09-02T23:21:00Z, window: point, method: "DexScreener same DTF/WETH v3 pair marketCap", class: claim, receipt_ids: [R-17] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:18:00Z, receipt_ids: [R-3, R-4, R-15], result: "eth_getCode on 0xeE5576…eb01 non-empty (3248 bytes); launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; curve() 0x912467fc912f0f88df3b0d221946de78f38d4559; deployer() 0xeD1FA21329fc45860cAB5D5E26a5fafcCDAcd6D5; owner() reverts. Blockscout is_contract true, is_verified true, name PonsV2LauncherToken, token Down to Finance/DTF, holders_count 8785, creation tx 0xbebe5e0a…b687 block 45332515 at 2026-08-25T01:26:48Z via PonsV2LaunchAndBuy.launchAndBuy" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:18:00Z, receipt_ids: [R-5, R-7, R-9, R-10], result: "eth_getCode non-empty on DiamondPackageCallBackFactory 0x976949…1003 (10403 bytes), UniswapV4SingleStandardExchangeDETDFPkg 0x961b4E…577c (12344 bytes, explorer proxy_type eip2535), Create3Factory 0xD7786b…7882 (6744 bytes), UniswapV4HookDiamondPackageCallBackFactory 0x8BB5FC…2945 (11719 bytes). All is_verified true." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:18:00Z, receipt_ids: [R-9, R-11, R-12, R-13], result: "owner() on Create3Factory, indexedexManager proxy 0x09682b…d0bc and feeCollector proxy 0x20af9A…0b2E returns 0x72bea6fa3e68ef18c87d045aac7c4aa5249d933b; eth_getCode on that address empty (EOA). Both proxies are MinimalDiamondCallBackProxy, explorer proxy_type eip2535, source verification is the shell." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-02T23:21:00Z, receipt_ids: [R-1, R-16, R-17], result: "Site names $DTF at 0xeE5576…eb01; DexScreener DTF token info.websites is downto.finance and socials x.com/downto_finance; X @downto_finance display name Down to Finance, bio Decentralized ETFs. Token constructor socials.twitter https://x.com/downto_finance and telegram https://t.me/downtofinance." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-02T23:20:00Z, receipt_ids: [R-14], result: "Blockscout /api/v2/addresses/0x961b4E…577c/transactions returns 14 items, all method deployVault, status ok, from 2026-08-25T09:31:36Z through 2026-08-26T00:58:58Z; latest hash 0x814847568c1d55109ae85a5db6a2e95faa0a5c66f718d79fc04bb59b10c82875. No later txs." }
  - { id: REP-6, method: api, checked_at: 2026-09-02T23:21:00Z, receipt_ids: [R-19, R-18], result: "api.llama.fi/protocols has no row named Down to Finance, DTF, DETF, or IndexedEx; api.llama.fi/v2/chains Robinhood Chain chainId 4663 tvl 776522610.57 is a chain slice, not a protocol row." }
  - { id: REP-7, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:18:00Z, receipt_ids: [R-21], result: "0x2ec89AFBa136119C5252FC47D14E2BD2144B10d2 is_contract true, is_verified true, name dtf, token name Down to Finance symbol DTF decimals 9 holders_count 676; eth_getCode 23173 bytes; DexScreener latest/dex/tokens for this address returns pairs null." }
  - { id: REP-8, method: api, chain_id: 4663, checked_at: 2026-09-02T23:21:00Z, receipt_ids: [R-17], result: "DexScreener 17 Robinhood Uniswap pairs for 0xeE5576…eb01; lead book Uniswap v3 DTF/WETH 0x0F2CA1…4287 liquidity.usd 250351.54 volume.h24 2375773.21 marketCap 6554824 priceUsd 0.006554; next Uniswap v4 DTF/ETH 0xbc58bf…b4ee liq 231981.44 vol 320975.08." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Permissionless DETF (Decentralized ETF): one token as a claim on a basket of vault shares and Uniswap v4 pools; create, then the first bond turns it on, then mint, hold, or burn. Policy can pause mint/burn near a target price; Open never does. Baskets may hold Morpho vault shares.", class: claim, observed_at: 2026-09-02T23:10:00Z, receipt_ids: [R-1, R-2, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://downto.finance", class: verified, observed_at: 2026-09-02T23:21:00Z, receipt_ids: [R-1, R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: deployment.address, value: "0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01", class: verified, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-1, R-3, R-4, R-15], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x961b4E050492E2744B8D20404Cd43A11D371577c", class: verified, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-5, field: relationship, value: "DTF is a Pons v2 launch token (PonsV2LauncherToken) whose launchFactory is the canonical Pons v2 factory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e and whose curve is 0x912467fc912f0f88df3b0d221946de78f38d4559", class: verified, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: identity.handle, value: "@downto_finance", class: verified, observed_at: 2026-09-02T23:21:00Z, receipt_ids: [R-3, R-16, R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-7, field: identity.symbol, value: "DTF", class: verified, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-1, R-3, R-15], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: lifecycle, value: announced, class: claim, observed_at: 2026-09-02T23:22:00Z, receipt_ids: [R-2, R-22, R-23, R-24, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: lifecycle, value: mainnet, class: inference, observed_at: 2026-09-02T23:20:00Z, receipt_ids: [R-1, R-7, R-14, R-17], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "0x72BeA6Fa3E68EF18c87D045Aac7C4Aa5249d933B (EOA; eth_getCode empty) is owner() on Create3Factory and on the indexedexManager and feeCollector diamonds", class: verified, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-9, R-11, R-12, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: control.privileged-role, value: "Verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges over DTF; entire supply minted to the curve. No owner() on the token.", class: verified, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: control.timelock, value: "No timelock address was located on the app JS 4663 map or on owner() of the diamond proxies", class: unknown, observed_at: 2026-09-02T23:22:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: control.proxy, value: "Create3Factory, indexedexManager and feeCollector report explorer proxy_type eip2535; UniswapV4SingleStandardExchangeDETDFPkg is also eip2535 with UniswapV4SingleStandardExchangeDETFFacet among listed implementations", class: verified, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-7, R-9, R-11, R-12], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "App footer displayed Audits: pending; no report URL was located", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: taxonomy.primary-leaf, value: rwa-products/redeemable-basket, class: inference, observed_at: 2026-09-02T23:25:00Z, receipt_ids: [R-1, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-02T23:21:00Z, receipt_ids: [R-3, R-8, R-17], reproduction_ids: [REP-1, REP-8], supersedes: null }
  - { id: CLM-17, field: product.mechanism, value: "Lead listed book is Uniswap v3 DTF/WETH 0x0F2CA1…4287 (quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73). Extra Uniswap v4 DTF/ETH and DTF/USDG books. Venue Uniswap.", class: verified, observed_at: 2026-09-02T23:21:00Z, receipt_ids: [R-17], reproduction_ids: [REP-8], supersedes: null }
  - { id: CLM-18, field: activity.status, value: "App explore: No live DETF is listed on this network yet. App staking: No Protocol DETF configured on this network.", class: claim, observed_at: 2026-09-02T23:12:00Z, receipt_ids: [R-2, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: activity.status, value: "UniswapV4SingleStandardExchangeDETDFPkg accepted 14 deployVault transactions from eight EOAs between 2026-08-25T09:31:36Z and 2026-08-26T00:58:58Z; no later package txs", class: verified, observed_at: 2026-09-02T23:20:00Z, receipt_ids: [R-14], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-20, field: other, value: "No DefiLlama protocol row named Down to Finance, DTF, DETF, or IndexedEx this pass", class: verified, observed_at: 2026-09-02T23:21:00Z, receipt_ids: [R-19], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-21, field: identity.repository, value: "NULL — footer github.com with no path; cyotee/indexedex README names downto.finance / app.downto.finance without a reciprocal site link", class: unknown, observed_at: 2026-09-02T23:22:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: other, value: "Second ERC-20 on chain 4663 named Down to Finance / DTF at 0x2ec89AFBa136119C5252FC47D14E2BD2144B10d2 (decimals 9, verified source names downtofinance.cc and @downtofinancerh). DexScreener pairs null. Flag ca-collision against official 0xeE5576…eb01.", class: verified, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-21], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "2026-08-30 @downto_finance posted a delay in launching DETF creation and staking, calling it the final test run before launch", class: claim, observed_at: 2026-09-02T23:14:00Z, receipt_ids: [R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "2026-08-31 @downto_finance posted that a full test run is the last step before deploying", class: claim, observed_at: 2026-09-02T23:14:00Z, receipt_ids: [R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: account.@downto_finance.role, value: project, class: claim, observed_at: 2026-09-02T23:21:00Z, receipt_ids: [R-16, R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-26, field: account.@downto_finance.slug, value: downto, class: claim, observed_at: 2026-09-02T23:21:00Z, receipt_ids: [R-16], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-27, field: account.@downto_finance.listen, value: medium, class: claim, observed_at: 2026-09-02T23:21:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: lifecycle
    claim_ids: [CLM-8, CLM-9]
    material_effect: "Whether the DETF machine is user-open on 4663 changes coverage from announced pad-output to a native basket protocol. Explore/staking/X say not open; the token trades and the DETF package accepted fourteen deployVault calls."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DTF launched via Pons v2 launchAndBuy"
    summary: "PonsV2LauncherToken 0xeE5576…eb01 was created in tx 0xbebe5e0a… at block 45332515 through PonsV2LaunchAndBuy."
    occurred_at: 2026-08-25T01:26:48Z
    observed_at: 2026-09-02T23:18:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-4]
  - id: EVT-2
    type: onchain
    title: "DETF package accepted fourteen deployVault calls"
    summary: "UniswapV4SingleStandardExchangeDETDFPkg 0x961b4E…577c received 14 successful deployVault transactions from eight EOAs between 2026-08-25T09:31:36Z and 2026-08-26T00:58:58Z."
    occurred_at: 2026-08-26T00:58:58Z
    observed_at: 2026-09-02T23:20:00Z
    affected_fields: [activity.status, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-3
    type: company
    title: "Account posts delay in DETF creation and staking"
    summary: "@downto_finance posted an apology for the delay in launching DETF creation and staking and called the then-running suite the final test run before launch."
    occurred_at: 2026-08-30T19:22:57Z
    observed_at: 2026-09-02T23:14:00Z
    affected_fields: [lifecycle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-4
    type: company
    title: "Account posts tests as last step before deploying"
    summary: "@downto_finance posted that vault-behavior tests pass and that one more full run is the last step before deploying."
    occurred_at: 2026-08-31T22:07:49Z
    observed_at: 2026-09-02T23:14:00Z
    affected_fields: [lifecycle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-5
    type: company
    title: "Account posts DETF explainer"
    summary: "@downto_finance posted a DETF explainer describing Standard Exchange vaults, Uniswap v4 hooks, bond NFTs, and a rebasing claim token."
    occurred_at: 2026-09-02T20:34:37Z
    observed_at: 2026-09-02T23:14:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-6
    type: company
    title: "indexedex commit archives listed DETFs"
    summary: "cyotee/indexedex commit history on main lists feat(dtf): archive listed DETFs and pause one-strategy create on 2026-08-27."
    occurred_at: 2026-08-27T00:00:00Z
    observed_at: 2026-09-02T23:22:00Z
    affected_fields: [activity.status, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-26]

receipts:
  - { id: R-1, publisher: Down To Finance, title: "Landing page", url: "https://downto.finance/", published_at: null, accessed_at: 2026-09-02T23:10:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-7, CLM-9, CLM-15], excerpt: "A DETF is a Decentralized ETF. One token for any basket of assets you pick. Anyone can create a DETF. Bond means lock money in. The first bond is what turns a new DETF on. $DTF-DETF The protocol's own basket Live. The official fee-accruing token is $DTF at 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01." }
  - { id: R-2, publisher: Down To Finance, title: "Explore DETFs", url: "https://app.downto.finance/explore", published_at: null, accessed_at: 2026-09-02T23:12:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-14, CLM-18], excerpt: "Use a DETF that is already live. Open one. Mint, bond, or trade. No live DETF is listed on this network yet. Footer: Docs href https://github.com ; Audits: pending." }
  - { id: R-3, publisher: Blockscout, title: "DTF token 0xeE5576Fa…", url: "https://robinhoodchain.blockscout.com/token/0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01", published_at: null, accessed_at: 2026-09-02T23:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-5, CLM-6, CLM-7, CLM-11, CLM-16, EVT-1], excerpt: "is_contract true; is_verified true; name PonsV2LauncherToken; token Down to Finance / DTF; creator 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42; creation_transaction_hash 0xbebe5e0ab1e68af3a9e08b8175f331b342104d5ee2c6f439b46726e1281bb687. getsourcecode launchFactory and curve immutables; socials twitter https://x.com/downto_finance." }
  - { id: R-4, publisher: Blockscout, title: "DTF creation tx 0xbebe5e0a…", url: "https://robinhoodchain.blockscout.com/tx/0xbebe5e0ab1e68af3a9e08b8175f331b342104d5ee2c6f439b46726e1281bb687", published_at: "2026-08-25T01:26:48Z", accessed_at: 2026-09-02T23:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-5, EVT-1], excerpt: "status ok; timestamp 2026-08-25T01:26:48Z; block 45332515; method launchAndBuy; from EOA 0xeD1FA21329fc45860cAB5D5E26a5fafcCDAcd6D5; to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948." }
  - { id: R-5, publisher: Blockscout, title: "DiamondPackageCallBackFactory", url: "https://robinhoodchain.blockscout.com/address/0x976949aB55830fA4794bF40C88ea7D7567931003", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4], excerpt: "is_contract true; is_verified true; name DiamondPackageCallBackFactory; creator 0xAaD0417C00F2c1F4681d427292ADc3B8AA3a0e36. Counters transactions_count 2." }
  - { id: R-6, publisher: Blockscout, title: "PonsV2BondingCurve for DTF", url: "https://robinhoodchain.blockscout.com/address/0x912467fc912f0f88df3b0d221946de78f38d4559", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "is_contract true; is_verified true; name PonsV2BondingCurve; proxy_type none. eth_getCode 10229 bytes. Counters transactions_count 24." }
  - { id: R-7, publisher: Blockscout, title: "UniswapV4SingleStandardExchangeDETDFPkg", url: "https://robinhoodchain.blockscout.com/address/0x961b4E050492E2744B8D20404Cd43A11D371577c", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-9, CLM-13], excerpt: "is_contract true; is_verified true; name UniswapV4SingleStandardExchangeDETDFPkg; proxy_type eip2535; implementations include UniswapV4SingleStandardExchangeDETFFacet 0x8333749Cc7b1f66b5be568257d362aA749497Cf0. eth_getCode 12344 bytes." }
  - { id: R-8, publisher: Down To Finance, title: "App JS chainId 4663 address map", url: "https://app.downto.finance/_next/static/chunks/7914-a8d287cbb69235e5.js", published_at: null, accessed_at: 2026-09-02T23:20:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-10], excerpt: "JSON.parse blob chainId 4663, networkProfile anvil_robinhood_main, rpcUrl https://rpc.mainnet.chain.robinhood.com, diamondPackageFactory 0x976949aB55830fA4794bF40C88ea7D7567931003, cpDetfPkg 0x961b4E050492E2744B8D20404Cd43A11D371577c, create3Factory 0xD7786b10BC8Bc97dc7651CAb7B97086c8b227882, owner 0x72BeA6Fa3E68EF18c87D045Aac7C4Aa5249d933B." }
  - { id: R-9, publisher: Blockscout, title: "Create3Factory 0xD7786b10…", url: "https://robinhoodchain.blockscout.com/address/0xD7786b10BC8Bc97dc7651CAb7B97086c8b227882", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-13], excerpt: "is_contract true; is_verified true; name Create3Factory; proxy_type eip2535. owner() 0x72bea6fa3e68ef18c87d045aac7c4aa5249d933b. Counters transactions_count 87." }
  - { id: R-10, publisher: Blockscout, title: "UniswapV4HookDiamondPackageCallBackFactory", url: "https://robinhoodchain.blockscout.com/address/0x8BB5FCC67e8CCa44DC41dd08A5e2b2B392C22945", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "is_contract true; is_verified true; name UniswapV4HookDiamondPackageCallBackFactory. Counters transactions_count 0." }
  - { id: R-11, publisher: Blockscout, title: "indexedexManager proxy 0x09682b00…", url: "https://robinhoodchain.blockscout.com/address/0x09682b00D873D913ada0bB69B4D4c9631810d0bc", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-13], excerpt: "is_contract true; is_verified true; name MinimalDiamondCallBackProxy; proxy_type eip2535; implementations include VaultRegistryVaultManagerFacet and VaultFeeOracleManagerFacet. owner() 0x72bea6fa…933b. Last method setDefaultSeigniorageIncentivePercentage 2026-08-26T21:40:09Z." }
  - { id: R-12, publisher: Blockscout, title: "feeCollector proxy 0x20af9A1e…", url: "https://robinhoodchain.blockscout.com/address/0x20af9A1e21a59a411cd3b0C40E70AF9084770b2E", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-13], excerpt: "is_contract true; is_verified true; name MinimalDiamondCallBackProxy; proxy_type eip2535; implementations include FeeCollectorManagerFacet. owner() 0x72bea6fa…933b. Counters transactions_count 0, token_transfers_count 38." }
  - { id: R-13, publisher: Blockscout, title: "Deployer EOA 0x72BeA6Fa…", url: "https://robinhoodchain.blockscout.com/address/0x72BeA6Fa3E68EF18c87D045Aac7C4Aa5249d933B", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "is_contract false; eth_getCode empty. Counters transactions_count 116." }
  - { id: R-14, publisher: Blockscout, title: "DETDFPkg transactions", url: "https://robinhoodchain.blockscout.com/address/0x961b4E050492E2744B8D20404Cd43A11D371577c?tab=txs", published_at: null, accessed_at: 2026-09-02T23:20:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-19, EVT-2], excerpt: "api/v2/addresses/0x961b4E…577c/transactions: 14 items, all method deployVault status ok. First 2026-08-25T09:31:36Z hash 0x9e09114f…f044e8; last 2026-08-26T00:58:58Z hash 0x814847568c1d55109ae85a5db6a2e95faa0a5c66f718d79fc04bb59b10c82875 from 0xc7c0f73D705404326b04d8F0f52b7136E8e982B9." }
  - { id: R-15, publisher: Blockscout, title: "DTF token holders_count", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01", published_at: null, accessed_at: 2026-09-02T23:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-7], excerpt: "name Down to Finance; symbol DTF; holders_count 8785; total_supply 1000000000000000000000000000; decimals 18; type ERC-20; volume_24h 3586063.69652062; exchange_rate 0.00727896." }
  - { id: R-16, publisher: Down to Finance (@downto_finance), title: "X profile @downto_finance", url: "https://x.com/downto_finance", published_at: null, accessed_at: 2026-09-02T23:14:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-6, CLM-25, CLM-26, CLM-27], excerpt: "Down to Finance @downto_finance. Bio: Decentralized ETFs. Blue verified. Followers 3331." }
  - { id: R-17, publisher: DexScreener, title: "DTF token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01", published_at: null, accessed_at: 2026-09-02T23:21:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-6, CLM-9, CLM-16, CLM-17], excerpt: "Uniswap v3 DTF/WETH 0x0F2CA1D996224a0c9dd140B865142aAD381A4287 liquidity.usd 250351.54 volume.h24 2375773.21 marketCap 6554824 priceUsd 0.006554. Uniswap v4 DTF/ETH 0xbc58bf…b4ee liq 231981.44 vol 320975.08. info.websites https://downto.finance/ socials x.com/downto_finance. 17 pairs." }
  - { id: R-18, publisher: DefiLlama, title: "Robinhood Chain live slice", url: "https://api.llama.fi/v2/chains", published_at: null, accessed_at: 2026-09-02T23:21:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-8], excerpt: "name Robinhood Chain; chainId 4663; tvl 776522610.5736439. Chain slice, not a Down to Finance protocol row." }
  - { id: R-19, publisher: DefiLlama, title: "protocols API filter", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-02T23:21:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-8, CLM-20], excerpt: "No protocols row named Down to Finance, DTF, DETF, or IndexedEx. Robinhood Chain rows exist for other names (ArrowPad, Morpho Blue, NetNet Capital Management). Tokens existing is not a protocol TVL row." }
  - { id: R-20, publisher: Down To Finance, title: "DETFs: one token over a basket", url: "https://app.downto.finance/research/detf", published_at: null, accessed_at: 2026-09-02T23:13:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-15], excerpt: "A DETF (Decentralized ETF) is one token for a basket you pick. Make it, bond to turn it on, then mint or burn. IndexedEx lets you run a money plan as one token. Typical path: create the DETF, bond to turn it on, then mint, hold, or burn. This is not a stock ETF." }
  - { id: R-21, publisher: Blockscout, title: "Second DTF token 0x2ec89AFB…", url: "https://robinhoodchain.blockscout.com/token/0x2ec89AFBa136119C5252FC47D14E2BD2144B10d2", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "name Down to Finance; symbol DTF; decimals 9; holders_count 676; is_verified true; contract name dtf. Verified source header names https://downtofinance.cc and https://x.com/downtofinancerh. DexScreener pairs null for this address." }
  - { id: R-22, publisher: Down To Finance, title: "Protocol DETF staking", url: "https://app.downto.finance/staking", published_at: null, accessed_at: 2026-09-02T23:12:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-18], excerpt: "Protocol DETF — a live Decentralized ETF (DETF) instance. No Protocol DETF configured on this network. Check that featured-fee-detfs or protocol-detfs is present under app/addresses/ for the active chain." }
  - { id: R-23, publisher: Down to Finance (@downto_finance), title: "Delay in launching DETF creation and staking", url: "https://x.com/downto_finance/status/2094143857328038182", published_at: "2026-08-30T19:22:57Z", accessed_at: 2026-09-02T23:14:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-23, EVT-3], excerpt: "I apologize for the delay in launching the DETF creation and staking. Simple answer, is that the extensive test suites take several hours to compile and run. This is the final test run before launch." }
  - { id: R-24, publisher: Down to Finance (@downto_finance), title: "Tests last step before deploying", url: "https://x.com/downto_finance/status/2094547733768270250", published_at: "2026-08-31T22:07:49Z", accessed_at: 2026-09-02T23:14:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-24, EVT-4], excerpt: "Test runs are down to fixing some of the tests themselves. Vault behavior passes under every scenario. I will only need to do a full run again as the last step before deploying." }
  - { id: R-25, publisher: Down to Finance (@downto_finance), title: "DETF explainer post", url: "https://x.com/downto_finance/status/2095249056977338487", published_at: "2026-09-02T20:34:37Z", accessed_at: 2026-09-02T23:14:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "A DETF is a decentralized ETF. Standard Exchange Vaults wrap a strategy in a vault token. DETFs combine strategies and use the market for management. Bond NFTs mint matching DETF into liquidity. A rebasing claim token owns a bond NFT." }
  - { id: R-26, publisher: GitHub, title: "cyotee/indexedex commits on main", url: "https://github.com/cyotee/indexedex/commits/main", published_at: "2026-08-27T00:00:00Z", accessed_at: 2026-09-02T23:22:00Z, kind: repository, authority: independent, authenticity: unconfirmed, supports: [EVT-6], excerpt: "Commits on Aug 27, 2026: feat(dtf): archive listed DETFs and pause one-strategy create, cyotee, b5b5784. Frontend README names apps/dtf as Down To Finance: https://downto.finance (app: https://app.downto.finance)." }

gaps:
  - { priority: P0, question: "Which contracts did the fourteen deployVault calls create, and was any of those DETFs bonded (first bond on) versus left unlisted after the Aug 27 archive commit?", checked: "Blockscout package tx list 2026-09-02; explore empty; staking unconfigured; created-contract internals of 0x81484756… not opened this pass", next: "read internal transactions on 0x814847568c1d5510… and match each created diamond to app.downto.finance/insights" }
  - { priority: P1, question: "What is the live fee path from DETF activity to $DTF, and is Protocol DETF wired on 4663?", checked: "site names $DTF as the fee-accruing token; staking page has no Protocol DETF configured; feeCollector proxy has 0 txs and 38 token transfers", next: "read FeeCollectorManagerFacet and featured-fee-detfs token list in the 4663 app bundle" }
  - { priority: P1, question: "Can the EOA owner diamondCut the indexedexManager and feeCollector without a timelock?", checked: "owner() on both proxies is 0x72BeA6Fa…933B; explorer lists DiamondCutFacet among implementations; no timelock address in the 4663 JS map", next: "eth_call diamondCut selectors and read MultiStepOwnableFacet delay if any" }
  - { priority: P2, question: "Is cyotee/indexedex the official repository?", checked: "app footer is https://github.com with no path; X bio does not name GitHub; README names downto.finance", next: "a site, docs, or X post that names github.com/cyotee/indexedex" }
  - { priority: P2, question: "Is there an audit report?", checked: "app footer Audits: pending; site, learn, X profile, GitHub org listing 2026-09-02", next: "a report URL on the site or an auditor announcement that matches the 4663 diamonds" }
---

# Down to Finance — research packet

## What it is

Down to Finance is a permissionless DETF (Decentralized ETF) on Robinhood Chain: a creator deploys one token as a claim on a basket of vault shares and Uniswap v4 pools; the first bond turns that DETF on, then holders mint, hold, or burn. The fee-accruing $DTF token at 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01 is a verified Pons v2 launch token. App explore lists no live DETF this pass; Protocol DETF staking is unconfigured.

## Why it matters

The play is a native basket machine on chain 4663 that would let any creator wrap Morpho vault shares and Uniswap v4 liquidity as one token, with $DTF named as the fee-accruing token. Until a listed DETF is bonded, the live object is the Pons-launched DTF token and the verified package factories, not a working redeemable basket.

## What could go wrong

The DETF create and Protocol DETF fee path are not listed as open on the app, while the diamond layer is owned by one externally owned account and audits are marked pending. A second ERC-20 on the same chain uses the same name and ticker at a different address.

## Product and mechanics

A DETF is one token over a basket the creator picks. Create deploys the instance and issues an unredeemable creator bond. The first bond is the first real deposit and turns the DETF on. After that, mint pays accepted vault shares (or the type's input) for DETF tokens that can be moved; bond deposits one side and matching DETF is minted into the reserve; burn exits toward the vault shares when burn is allowed. Policy can pause mint and burn near a target price; Open never does. [claim R-1 R-20]

Baskets are meant to hold vault shares from Earn (Morpho and Uniswap v4 legs are the documented examples). Rate providers optionally re-mark those shares so mint, burn, and the shown price stay current. The DETF token also sits in Uniswap v4 market liquidity; bonding locks LP tokens rather than a second price. [claim R-1 R-20]

$DTF at 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01 is the site's official fee-accruing token. Verified source names it PonsV2LauncherToken: fixed-supply ERC-20, entire supply minted to bonding curve 0x912467fc912f0f88df3b0d221946de78f38d4559, launchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. It is a Pons v2 launch token, not a DETF diamond. [verified R-3 R-4]

The app's chain-4663 map names DiamondPackageCallBackFactory 0x976949…1003, UniswapV4SingleStandardExchangeDETDFPkg 0x961b4E…577c, Create3Factory 0xD7786b…7882, hook factory 0x8BB5FC…2945, and diamond proxies 0x09682b…d0bc and 0x20af9A…0b2E. Those addresses exist with explorer-verified source. The DETF package accepted fourteen deployVault calls on 2026-08-25 and 2026-08-26. Explore still lists no live DETF; staking has no Protocol DETF configured. [verified R-8 R-14]

Lead listed book for $DTF is Uniswap v3 DTF/WETH 0x0F2CA1…4287. Extra Uniswap v4 DTF/ETH and DTF/USDG books exist. [verified R-17]

## Control and security

owner() on Create3Factory and on the indexedexManager and feeCollector diamonds returns 0x72BeA6Fa3E68EF18c87D045Aac7C4Aa5249d933B, an address with empty code. The same key is `owner` and `deployer` in the app's 4663 map. No timelock address was located. Both diamonds and the DETF package are EIP-2535; explorer source on the manager and fee collector is the MinimalDiamondCallBackProxy shell. [verified R-8 R-9 R-11 R-12 R-13]

Verified PonsV2LauncherToken source states that `deployer` confers no privileges over DTF. owner() on the token reverts. [verified R-3]

The app footer shows Audits: pending. No audit report URL was located. [claim R-2]

## Team and provenance

Site, DexScreener token info, and the verified token constructor all name @downto_finance. Constructor socials also list https://t.me/downtofinance. The app footer Docs link is https://github.com with no project path. github.com/cyotee/indexedex README names downto.finance as the DTF app; that link is one-sided this pass. Launch deployer 0xeD1FA213…d6D5 is an EOA on the Pons launchAndBuy transaction; diamond owner 0x72BeA6Fa…933B is a different EOA. [verified R-3 R-16 R-17]

A second ERC-20 at 0x2ec89AFBa136119C5252FC47D14E2BD2144B10d2 is also named Down to Finance / DTF on chain 4663, with verified source pointing at downtofinance.cc and @downtofinancerh. DexScreener has no pairs for that address. Flag ca-collision. [verified R-21]

## Economics and activity

Blockscout holders_count on the official DTF token is 8785 as of 2026-09-02T23:16:00Z. That is token holders, not DETF basket holders. [claim R-15]

DexScreener Uniswap v3 DTF/WETH 0x0F2CA1…4287: liquidity.usd 250351.54, volume.h24 2375773.21, marketCap 6554824, priceUsd 0.006554 as of 2026-09-02T23:21:00Z. Pair slice, not protocol TVL. [claim R-17]

No DefiLlama protocol row named Down to Finance, DTF, DETF, or IndexedEx. Robinhood Chain chain-slice TVL is not a Down to Finance figure. [verified R-19]

## Material risks

- Explore lists no live DETF and staking has no Protocol DETF configured, while the landing page still marks $DTF-DETF Live. [claim R-1 R-2 R-22]
- The DETF package accepted fourteen deployVault calls, then package activity stopped; created DETF addresses and whether any was bonded are not reproduced. [verified R-14]
- Diamond owner is one externally owned account with no timelock located; manager and fee collector source is the proxy shell. [verified R-9 R-11 R-12 R-13]
- App footer shows audits pending. [claim R-2]
- A second DTF ticker exists at 0x2ec89A…10d2. [verified R-21]

## Verification passes

- Receipts: every URL above was opened on 2026-09-02 and its excerpt copied from the page or API body. [verified R-1 R-3 R-17]
- Numbers: holders is the Blockscout token count; volume, liquidity and market cap are the Uniswap v3 DTF/WETH pair slice, not an all-pairs or all-chains total; Llama chain TVL was not filed as protocol TVL. [claim R-15 R-17]
- Adversarial: the strongest contrary reading is that Down to Finance is only a Pons-launched token with a marketing site, and the DETF machine is unused. The verified UniswapV4SingleStandardExchangeDETDFPkg name, the 4663 app map, and fourteen deployVault calls argue against unused bytecode; the empty explore list, unconfigured staking page, and the 2026-08-30 delay post argue against a user-open basket product. Classification stays announced with CON-1 open. [inference R-2 R-14 R-23]

## Operations log

- Prior packet read: research/inbox/packets/downto/WORK-20260902-grok-bot-downto.md@2cec4735715a3bb3bd75acf39d614161476fed44. Census, project, pulled, sources, changelog, and accounts rows for downto were read; no content/ writes.
- Site, explore, learn, staking, research/detf, and app JS chunk 7914-a8d287cbb69235e5.js opened 2026-09-02. Create and earn HTML were loading shells only.
- Explorer: robinhoodchain.blockscout.com api/v2 and getsourcecode with a browser User-Agent. RPC https://rpc.mainnet.chain.robinhood.com with User-Agent; unauthenticated RPC without UA returned 403. exists_on_4663 flipped true only from those reads. Chain head about block 52955208.
- DexScreener latest/dex/tokens for 0xeE5576…eb01 and 0x2ec89A…10d2. Llama /protocols and /v2/chains. No Down to Finance protocol row.
- X: @downto_finance profile and Latest from:downto_finance. Article URL x.com/i/article/2092577899140591616 did not load. Handle @down_to_finance is a different account; @downtofinancerh is named only in the second token's source.
- GitHub cyotee/indexedex README and commits/main opened; site does not link that path.
- Telegram https://t.me/downtofinance taken from the token constructor, not an opened Telegram page.
- Allowed path this run: this packet only.
