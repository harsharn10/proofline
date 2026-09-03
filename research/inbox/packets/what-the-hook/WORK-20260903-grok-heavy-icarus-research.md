---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: what-the-hook
name: What The Hook
packet_tier: seed
as_of: 2026-09-03T02:20:00Z
prior_packet: null
supersedes: null
owned_slugs: [what-the-hook]
allowed_paths:
  - research/inbox/packets/what-the-hook/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: What The Hook
  aliases: ["what the hook?", "WTH"]
  symbols: [WTH]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.whatthehook.io
  official_handle: "@whatthehookv4"
  repository: "NULL — no GitHub org or repository URL on whatthehook.io, the docs, the @whatthehookv4 bio, or Llama github this pass; verified token source path is src/hookArbTOKEN/simpleERC20.sol"
  possible_matches:
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census Hookr is a Uniswap v4 hook marketplace and hooked-pool launcher at hookr.fun / @Hookrfun with token 0x18E674231A58c239Dc7DaeDcffE15Ec3A24cff5c"
        - "Census What The Hook is an MEV-redistribution hook at whatthehook.io / @whatthehookv4 with token 0xb8Fa8010833463Aac5595b55B9045479239EfF79 and hook 0xc52fc52698479E42F0dA9a8a75296EC3871454c0"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: trading/hook-mev
  secondary_leaves: []
  mechanism_tags: [amm, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Uniswap v4 hook that closes a price gap between connected pools in the same swap and splits realised arbitrage. Token 0xb8Fa…fF79 (partially verified Token / WTH) and hook 0xc52f…54c0 (unverified bytecode) have non-empty code on chain 4663; token HOOK() returns the hook. DefiLlama currentChainTvls Robinhood Chain is 210671 (WTH-in-pools staking 1174598 is a separate Llama bucket). Distinct from Hookr and from HookOS. [R-2] [R-6] [R-10] [R-11] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-12, CLM-13, CLM-15], note: "" }

links:
  - { kind: site, url: "https://www.whatthehook.io", authenticity: confirmed }
  - { kind: docs, url: "https://www.whatthehook.io/docs", authenticity: confirmed }
  - { kind: app, url: "https://www.whatthehook.io/dashboard.html", authenticity: confirmed }
  - { kind: x, url: "https://x.com/whatthehookv4", authenticity: confirmed }

deployments:
  - label: WTH token
    role: token
    address:
      value: "0xb8Fa8010833463Aac5595b55B9045479239EfF79"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-10, R-16]
  - label: WTH hook
    role: other
    address:
      value: "0xc52fc52698479E42F0dA9a8a75296EC3871454c0"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-11, R-16]
  - label: ArbExecutor
    role: other
    address:
      value: "0x26a5d02938FBF70AF4c114C2Ff432eD3Be0D3B62"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-12, R-16]
  - label: PositionFeeClaimer
    role: other
    address:
      value: "0x82067B7Ef3020cc6503142B80593519BD382B700"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-13, R-16]
  - label: Safe multisig (docs admin)
    role: multisig
    address:
      value: "0x98c8681673D6b9fD85D2F505b7CC54E77Da8cE59"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-2, R-14, R-16]
  - label: Token and hook factory
    role: factory
    address:
      value: "0x7F66F29AB9e28Dc7602f0D14a4df0Bbcd2b50399"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-15, R-16, R-21]

metrics:
  - { kind: tvl, value: 210671.39, currency: USD, as_of: 2026-09-03T01:27:35Z, window: point, method: "api.llama.fi/protocol/what-the-hook currentChainTvls['Robinhood Chain'] (excludes Robinhood Chain-staking)", class: claim, receipt_ids: [R-6] }
  - { kind: fees_24h, value: 1790, currency: USD, as_of: 2026-09-02T00:00:00Z, window: 24h, method: "api.llama.fi/summary/fees/what-the-hook?dataType=dailyFees total24h / totalDataChart bar 1788307200 Robinhood Chain", class: claim, receipt_ids: [R-7] }
  - { kind: revenue_24h, value: 0, currency: USD, as_of: 2026-09-02T00:00:00Z, window: 24h, method: "api.llama.fi/summary/fees/what-the-hook?dataType=dailyRevenue total24h; Llama methodology says the hook retains none", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 215448.4, currency: USD, as_of: 2026-09-03T02:00:00Z, window: 24h, method: "DexScreener latest/dex/tokens WTH Uniswap v4 WTH/WETH pair 0x79723a75… volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 3700589, currency: USD, as_of: 2026-09-03T02:00:00Z, window: point, method: "DexScreener same WTH/WETH v4 pair marketCap/fdv field", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 767, currency: null, as_of: 2026-09-03T02:05:00Z, window: point, method: "Blockscout GET /api/v2/tokens/0xb8Fa8010833463Aac5595b55B9045479239EfF79 holders_count", class: claim, receipt_ids: [R-10] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:08:00Z, receipt_ids: [R-16], result: "eth_blockNumber 53080737. eth_getCode non-empty: token 2944 bytes, hook 19429, executor 87032, PositionFeeClaimer 2104, SafeProxy 171, factory 87414; deployer EOA 0x883a…3A8e code 0x. token owner() 0x7F66…0399. token HOOK() 0xc52f…54c0. hook owner() 0x883a…3A8e (whatthehook.eth). Safe getOwners six EOAs, getThreshold 4. token totalSupply 210000e18." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:10:00Z, receipt_ids: [R-10, R-11, R-12, R-13, R-14, R-15, R-21, R-22], result: "Blockscout API v2: token is_contract true is_verified true is_partially_verified true name Token / what the hook? WTH holders 767 creator factory 0x7F66… tx 0x8657ddd1… 2026-08-04T00:24:11Z block 27190942. Hook is_contract true is_verified false creator factory, deployHook tx 0xe9976f0a… same timestamp/block. Executor unverified created 2026-08-21 by whatthehook.eth. PositionFeeClaimer verified. SafeProxy verified, implementation SafeL2. Factory unverified, created by whatthehook.eth." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T01:50:00Z, receipt_ids: [R-6, R-7, R-8], result: "GET api.llama.fi/protocol/what-the-hook: address robinhood:0xb8Fa…fF79, twitter whatthehookv4, url https://www.whatthehook.io, chains [Robinhood Chain], audits 0, github null, currentChainTvls Robinhood Chain 210671.39317, Robinhood Chain-staking 1174597.80821 at date 1788398855. dailyFees total24h 1790 bar 1788307200; dailyRevenue total24h 0." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T02:00:00Z, receipt_ids: [R-9], result: "GET DexScreener latest/dex/tokens/0xb8Fa…: Uniswap v4 WTH/WETH pair 0x79723a75… labels v4, quote 0x0Bd7…AD73, liquidity.usd 787545.99, volume.h24 215448.4, marketCap 3700589, pairCreatedAt 1785803051000 (2026-08-04T00:24:11Z), websites https://www.whatthehook.io, socials x.com/whatthehookv4. Second WTH/WETH v4 pair 0x6ff5c44d… volume.h24 193599.36 not summed." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T02:00:00Z, receipt_ids: [R-1, R-2, R-3, R-6], result: "@whatthehookv4 profile URLs field is https://www.whatthehook.io. Docs list token 0xb8Fa… and hook 0xc52f… matching Llama address and twitter. Site and docs are the same host." }
  - { id: REP-6, method: repository-crosslink, checked_at: 2026-09-03T01:55:00Z, receipt_ids: [R-17], result: "DefiLlama-Adapters projects/what-the-hook/index.js HOOK 0xc52fc526… WTH 0xb8fa8010… POOL_MANAGER 0x8366a39C… FROM_BLOCK 27190942; methodology counts v4 pools that emit PoolRegistered on the hook; WTH reserves under staking, other tokens TVL." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Uniswap v4 hook attached at pool creation. After a swap it checks bounded connected-pool routes, executes only when the correction is profitable after costs, and splits realised profit in the same transaction. Docs: WTH pools 10% swapper / 90% treasury; integrating pools 5% swapper / 45% pool LPs / 40% treasury / 10% referral. No payout if no captured profit.", class: claim, observed_at: 2026-09-03T01:55:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.whatthehook.io", class: verified, observed_at: 2026-09-03T02:00:00Z, receipt_ids: [R-1, R-2, R-3, R-6], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@whatthehookv4", class: verified, observed_at: 2026-09-03T02:00:00Z, receipt_ids: [R-3, R-6, R-9], reproduction_ids: [REP-4, REP-5], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xb8Fa8010833463Aac5595b55B9045479239EfF79", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-2, R-10, R-16, R-21], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xc52fc52698479E42F0dA9a8a75296EC3871454c0", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-2, R-11, R-16], reproduction_ids: [REP-1, REP-2, REP-6], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-6, R-10, R-11, R-16], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: trading/hook-mev, class: claim, observed_at: 2026-09-03T01:55:00Z, receipt_ids: [R-2, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T01:50:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-9, field: economics.metric, value: "Robinhood Chain TVL 210671.39 USD at 2026-09-03T01:27:35Z (currentChainTvls['Robinhood Chain'], not staking and not all-chains)", class: verified, observed_at: 2026-09-03T01:50:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Robinhood Chain dailyFees 1790 USD for bar 1788307200 (2026-09-02). Llama sums ProfitCurrencyDistribute as recaptured MEV, not a user fee.", class: verified, observed_at: 2026-09-03T01:52:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Llama dailyRevenue 0 USD for 2026-09-02; methodology: the hook retains none of captured profit", class: claim, observed_at: 2026-09-03T01:52:00Z, receipt_ids: [R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: control.owner, value: "hook owner() = 0x883a2cc6c9A9E8F0160d8ad4985A61B80B773A8e (whatthehook.eth, no code)", class: verified, observed_at: 2026-09-03T02:08:00Z, receipt_ids: [R-11, R-16], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "Docs: Safe 0x98c8681673D6b9fD85D2F505b7CC54E77Da8cE59 holds administrative keys — approving pools and routes, and pausing the hook. No single key can act alone.", class: claim, observed_at: 2026-09-03T01:55:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: control.threshold, value: "Safe getThreshold() = 4 of 6 EOA owners", class: verified, observed_at: 2026-09-03T02:08:00Z, receipt_ids: [R-14, R-16], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "No audit report was located; Llama audits 0 and audit_links null; docs discuss audit burden without naming a firm or report", class: unknown, observed_at: 2026-09-03T02:00:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: identity.symbol, value: "WTH", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-6, R-9, R-10, R-21], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-17, field: relationship, value: "Not Hookr (@Hookrfun / hookr.fun / 0x18E674…) and not HookOS (@hookosfun / 0x85d4e6…). Different handle, domain, token, and job: MEV redistribution inside a v4 hook versus a hook marketplace or a multi-chain hook pad.", class: claim, observed_at: 2026-09-03T02:00:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@whatthehookv4.role", value: project, class: claim, observed_at: 2026-09-03T02:00:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@whatthehookv4.slug", value: what-the-hook, class: claim, observed_at: 2026-09-03T02:00:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: deployment.address, value: "0x26a5d02938FBF70AF4c114C2Ff432eD3Be0D3B62", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-2, R-12, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x98c8681673D6b9fD85D2F505b7CC54E77Da8cE59", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-2, R-14, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x7F66F29AB9e28Dc7602f0D14a4df0Bbcd2b50399", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-15, R-16, R-21, R-22], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: product.mechanism, value: "WTH token created 2026-08-04T00:24:11Z by custom factory 0x7F66…0399 from whatthehook.eth, not Pons, Hookr, or LiquidityLauncher. Listed liquidity is Uniswap v4 WTH/WETH (WETH 0x0Bd7…AD73). Fixed supply 210_000.", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-9, R-10, R-21, R-22], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: "holders_count 767 at Blockscout token fetch 2026-09-03", class: verified, observed_at: 2026-09-03T02:05:00Z, receipt_ids: [R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-25, field: economics.metric, value: "WTH/WETH v4 pair 0x79723a75… marketCap 3700589 USD; liquidity.usd 787545.99 (pair slice)", class: verified, observed_at: 2026-09-03T02:00:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "Same pair volume.h24 215448.4 USD (not summed with second WTH/WETH v4 pair 193599.36)", class: verified, observed_at: 2026-09-03T02:00:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-27, field: deployment.address, value: "0x82067B7Ef3020cc6503142B80593519BD382B700", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-2, R-13, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-28, field: control.privileged-role, value: "token owner() = factory 0x7F66…0399; verified source setHook only owner. Hook bytecode unverified so pause/approve-pool modifiers were not read from source.", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-16, R-21], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-29, field: identity.alias, value: "what the hook?", class: claim, observed_at: 2026-09-03T02:00:00Z, receipt_ids: [R-9, R-10, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: economics.metric, value: "Llama Robinhood Chain-staking 1174597.81 USD at 2026-09-03T01:27:35Z is WTH reserves in hooked pools, not the TVL chain slice", class: verified, observed_at: 2026-09-03T01:50:00Z, receipt_ids: [R-6, R-17], reproduction_ids: [REP-3, REP-6], supersedes: null }
  - { id: CLM-31, field: economics.metric, value: "Docs and 2026-09-02 X post: after the split change, WTH treasury takes 90% of captured profit on WTH pools and 40% on integrating pools, routed to the multi-sig for buybacks, burns and new pools", class: claim, observed_at: 2026-09-03T01:55:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: "account.@whatthehookv4.note", value: "Handle lists whatthehook.io. Distinct from @Hookrfun and @hookosfun.", class: claim, observed_at: 2026-09-03T02:00:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: control.owner
    claim_ids: [CLM-12, CLM-13]
    material_effect: true
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-11, CLM-31]
    material_effect: true
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "@whatthehookv4 posts treasury-first split and buybacks"
    summary: "Protocol revenue now to the multi-sig for buybacks, burns and new pools. WTH arbs 10/90; integrating pools 10/40/10/40."
    occurred_at: 2026-09-02T23:01:28Z
    observed_at: 2026-09-03T01:40:00Z
    affected_fields: [product.mechanism, economics.metric, control.owner]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-2
    type: company
    title: "@whatthehookv4 posts $3.5M / 1500 ETH arbitrage volume"
    summary: "Posted $3,500,000 (1500 ETH) total arbitrage volume and a 1.75% capture rate distributed back."
    occurred_at: 2026-09-02T17:38:15Z
    observed_at: 2026-09-03T01:40:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-3
    type: onchain
    title: "DefiLlama What The Hook Robinhood TVL slice is $210,671"
    summary: "currentChainTvls Robinhood Chain 210671; staking (WTH in hooked pools) 1174598, not the TVL slice."
    occurred_at: 2026-09-03T01:27:35Z
    observed_at: 2026-09-03T01:50:00Z
    affected_fields: [economics.metric, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-4
    type: ct
    title: "@MCGlive interviews @whatthehookv4 on MEV-in-hook"
    summary: "MCG hosted $WTH with @whatthehookv4: MEV bot built inside a v4 hook; retrofit, traction and revenue math."
    occurred_at: 2026-08-27T20:46:03Z
    observed_at: 2026-09-03T01:42:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-5
    type: onchain
    title: "WTH/WETH Uniswap v4 pair created at token deploy"
    summary: "DexScreener pair 0x79723a75… created 2026-08-04T00:24:11Z, labels v4, quote WETH 0x0Bd7…AD73."
    occurred_at: 2026-08-04T00:24:11Z
    observed_at: 2026-09-03T02:00:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-6
    type: onchain
    title: "WTH token and hook deployed on chain 4663"
    summary: "Factory 0x7F66… and hook via deployHook in block 27190942 from whatthehook.eth; token HOOK() is 0xc52f…54c0."
    occurred_at: 2026-08-04T00:24:11Z
    observed_at: 2026-09-03T02:10:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10, R-11, R-22]

receipts:
  - { id: R-1, publisher: What The Hook, title: "whatthehook.io homepage", url: "https://www.whatthehook.io/", published_at: null, accessed_at: 2026-09-03T01:48:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2], excerpt: "WHAT THE HOOK. Retention, not extraction. When trading creates a price gap between pools, our hook captures the arbitrage first — before outside bots — and keeps it inside the protocol as swapper cashback, LP rewards and treasury revenue. ON WTH POOLS SWAPPER 10% WTH TREASURY 90%. ON INTEGRATING POOLS SWAPPER 5% POOL LPS 45% WTH TREASURY 40% REFERRAL 10%." }
  - { id: R-2, publisher: What The Hook, title: "WTH — Documentation", url: "https://www.whatthehook.io/docs", published_at: "2026-08-01T00:00:00Z", accessed_at: 2026-09-03T01:55:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-5, CLM-7, CLM-13, CLM-17, CLM-20, CLM-21, CLM-27, CLM-31], excerpt: "CONTRACT 0xb8Fa8010833463Aac5595b55B9045479239EfF79 HOOK ADDRESS 0xc52fc52698479E42F0dA9a8a75296EC3871454c0. WTH pools SWAPPER 10% TREASURY 90%. Integrating SWAPPER 5% POOL 45% TREASURY 40% REFERRAL 10%. ArbExecutor 0x26a5…3B62. PositionFeeClaimer 0x82067…B700. Safe 0x98c8…cE59 holds the administrative keys. No single key can act alone." }
  - { id: R-3, publisher: "@whatthehookv4", title: "X profile What The Hook", url: "https://x.com/whatthehookv4", published_at: "2026-08-03T00:00:00Z", accessed_at: 2026-09-03T01:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-17, CLM-18, CLM-19, CLM-32], excerpt: "Name What The Hook. Handle @whatthehookv4. Bio: The first MEV bot that gives instead of takes. Built directly inside a v4 hook. Distributes capital as rewards to traders and LP providers. URLs: https://www.whatthehook.io. Joined 2026-08-03." }
  - { id: R-4, publisher: "@whatthehookv4", title: "Hook evening split change", url: "https://x.com/whatthehookv4/status/2095286013950112193", published_at: "2026-09-02T23:01:28Z", accessed_at: 2026-09-03T01:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-31, EVT-1], excerpt: "Protocol revenue will now flow directly to our multi-sig and be used for buybacks, burns, and new pools. When an arbitrage involves $WTH: 10% Trader cashback 90% WTH treasury. For other pools: 10% Referral 40% WTH treasury. Remaining 50%: 10% Trader cashback 40% LP rewards. Reach out to us on Telegram or X." }
  - { id: R-5, publisher: "@whatthehookv4", title: "New milestone unlocked 1500 ETH", url: "https://x.com/whatthehookv4/status/2095204671635816621", published_at: "2026-09-02T17:38:15Z", accessed_at: 2026-09-03T01:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "New milestone unlocked. We’ve surpassed a total of $3,500,000 (1500 ETH) in arbitrage volume, with a capture rate of 1.75% distributed back to people! Retention > Extraction" }
  - { id: R-6, publisher: DefiLlama, title: "api.llama.fi/protocol/what-the-hook", url: "https://api.llama.fi/protocol/what-the-hook", published_at: null, accessed_at: 2026-09-03T01:50:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-6, CLM-8, CLM-9, CLM-16, CLM-30, EVT-3], excerpt: "name What The Hook address robinhood:0xb8Fa8010833463Aac5595b55B9045479239EfF79 symbol WTH url https://www.whatthehook.io twitter whatthehookv4 audits 0 github null category Liquidity Automation chains [Robinhood Chain]. currentChainTvls Robinhood Chain 210671.39317 Robinhood Chain-staking 1174597.80821 at date 1788398855." }
  - { id: R-7, publisher: DefiLlama, title: "what-the-hook dailyFees", url: "https://api.llama.fi/summary/fees/what-the-hook?dataType=dailyFees", published_at: null, accessed_at: 2026-09-03T01:52:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-10], excerpt: "total24h 1790 total7d 7044 total30d 53759. totalDataChart bar 1788307200 1790. Fees methodology: The arbitrage profit the hook realises and pays out, summed from the ProfitCurrencyDistribute event." }
  - { id: R-8, publisher: DefiLlama, title: "what-the-hook dailyRevenue", url: "https://api.llama.fi/summary/fees/what-the-hook?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T01:52:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-11], excerpt: "total24h 0 total30d 0. Revenue methodology: Zero. The hook retains none of the profit it captures — every distribution pays out in full to the trader and the pool's LPs in the triggering transaction." }
  - { id: R-9, publisher: DexScreener, title: "latest/dex/tokens WTH", url: "https://api.dexscreener.com/latest/dex/tokens/0xb8Fa8010833463Aac5595b55B9045479239EfF79", published_at: null, accessed_at: 2026-09-03T02:00:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-3, CLM-16, CLM-23, CLM-25, CLM-26, CLM-29, EVT-5], excerpt: "pairAddress 0x79723a75c401d5c3ad66b0d0837739e502f08799ebf6a503e6e4d0827b3eb7e5 labels v4 base WTH 0xb8Fa…fF79 quote WETH 0x0Bd7…AD73 volume.h24 215448.4 liquidity.usd 787545.99 marketCap 3700589 pairCreatedAt 1785803051000 websites https://www.whatthehook.io socials x.com/whatthehookv4." }
  - { id: R-10, publisher: Blockscout, title: "WTH token 0xb8Fa…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xb8Fa8010833463Aac5595b55B9045479239EfF79", published_at: null, accessed_at: 2026-09-03T02:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-16, CLM-23, CLM-24, CLM-29, EVT-6], excerpt: "is_contract true is_verified true name Token. token what the hook? / WTH holders_count 767 total_supply 210000e18. creator_address_hash 0x7F66F29AB9e28Dc7602f0D14a4df0Bbcd2b50399 creation_transaction_hash 0x8657ddd11487c7bd91d3c4b7159b2ed662bde955d9717d1e211355e1948dac4e." }
  - { id: R-11, publisher: Blockscout, title: "WTH hook 0xc52f…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xc52fc52698479E42F0dA9a8a75296EC3871454c0", published_at: null, accessed_at: 2026-09-03T02:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-12, EVT-6], excerpt: "is_contract true is_verified false. creator_address_hash 0x7F66F29AB9e28Dc7602f0D14a4df0Bbcd2b50399 creation_transaction_hash 0xe9976f0a69df2091068e2033844dd4dd33e0f17143991735d552956a0aae062a. counters transactions_count 54." }
  - { id: R-12, publisher: Blockscout, title: "ArbExecutor 0x26a5…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x26a5d02938FBF70AF4c114C2Ff432eD3Be0D3B62", published_at: null, accessed_at: 2026-09-03T02:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-20], excerpt: "is_contract true is_verified false. creator_address_hash 0x883a2cc6c9A9E8F0160d8ad4985A61B80B773A8e creation_transaction_hash 0x6e58a368e6e6ff32bad723e2159b733a4fd01c0d1f6163b776e9ea1bcd6294f2." }
  - { id: R-13, publisher: Blockscout, title: "PositionFeeClaimer 0x82067…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x82067B7Ef3020cc6503142B80593519BD382B700", published_at: null, accessed_at: 2026-09-03T02:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-27], excerpt: "is_contract true is_verified true name PositionFeeClaimer. creator_address_hash 0x883a2cc6c9A9E8F0160d8ad4985A61B80B773A8e creation_transaction_hash 0xdcc2681d29dcef2373343c5175b0434707de23dde6f13baa1e83263d0eed7e73." }
  - { id: R-14, publisher: Blockscout, title: "SafeProxy 0x98c8…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x98c8681673D6b9fD85D2F505b7CC54E77Da8cE59", published_at: null, accessed_at: 2026-09-03T02:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-21], excerpt: "is_contract true is_verified true name SafeProxy proxy_type master_copy implementation SafeL2 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762. creator_address_hash 0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67 creation_transaction_hash 0xe19ffe2084a8251f55daf35f0c1af03528afd2fe6fa402a762c43c32b862945b." }
  - { id: R-15, publisher: Blockscout, title: "Token/hook factory 0x7F66…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x7F66F29AB9e28Dc7602f0D14a4df0Bbcd2b50399", published_at: null, accessed_at: 2026-09-03T02:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "is_contract true is_verified false. creator_address_hash 0x883a2cc6c9A9E8F0160d8ad4985A61B80B773A8e creation_transaction_hash 0x8657ddd11487c7bd91d3c4b7159b2ed662bde955d9717d1e211355e1948dac4e." }
  - { id: R-16, publisher: Robinhood Chain RPC, title: "eth_getCode, owner, HOOK, Safe views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-12, CLM-14, CLM-20, CLM-21, CLM-22, CLM-27, CLM-28], excerpt: "eth_blockNumber 53080737. Code non-empty token/hook/executor/feeclaimer/Safe/factory; EOA 0x883a…3A8e empty. token owner() 0x7F66…0399 HOOK() 0xc52f…54c0. hook owner() 0x883a…3A8e. Safe getThreshold 4 getOwners six EOAs. totalSupply 210000e18." }
  - { id: R-17, publisher: DefiLlama-Adapters, title: "projects/what-the-hook/index.js", url: "https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/what-the-hook/index.js", published_at: null, accessed_at: 2026-09-03T01:55:00Z, kind: repository, authority: aggregator, authenticity: unconfirmed, supports: [CLM-30], excerpt: "HOOK = 0xc52fc52698479e42f0da9a8a75296ec3871454c0 WTH = 0xb8fa8010833463aac5595b55b9045479239eff79 FROM_BLOCK = 27190942. methodology: Counts liquidity in every Uniswap v4 pool that runs the WTH hook. WTH reported under staking; every other token is TVL. start 2026-08-04." }
  - { id: R-18, publisher: "@MCGlive", title: "Today on MCG $WTH w/ @whatthehookv4", url: "https://x.com/MCGlive/status/2093077605138522170", published_at: "2026-08-27T20:46:03Z", accessed_at: 2026-09-03T01:42:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "Today on MCG $WTH | w/ @whatthehookv4 WTH is the first MEV bot that gives instead of takes and is built directly inside a v4 hook. Highlights include team intro, what a v4 hook is, how projects add the hook, the retrofit process, traction numbers, revenue math." }
  - { id: R-19, publisher: DefiLlama, title: "What The Hook protocol page", url: "https://defillama.com/protocol/what-the-hook", published_at: null, accessed_at: 2026-09-03T01:50:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-7], excerpt: "A Uniswap v4 hook that captures the price gap a swap opens between connected pools and returns the realised arbitrage to the trader and the pool's LPs instead of an outside searcher. Category: Liquidity Automation." }
  - { id: R-20, publisher: What The Hook, title: "Live dashboard", url: "https://www.whatthehook.io/dashboard.html", published_at: null, accessed_at: 2026-09-03T02:12:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "LIVE DASHBOARD ROBINHOOD CHAIN · UNISWAP V4. HOOK YOUR TOKEN. TOKEN ADDRESS QUOTE ETH USDG. opens prefilled in the Uniswap app · hook & tick spacing come preset." }
  - { id: R-21, publisher: Blockscout, title: "WTH verified source Token", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0xb8Fa8010833463Aac5595b55B9045479239EfF79", published_at: "2026-08-11T22:26:54Z", accessed_at: 2026-09-03T02:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-16, CLM-22, CLM-23, CLM-28, CLM-29], excerpt: "file_path src/hookArbTOKEN/simpleERC20.sol is_verified true is_partially_verified true is_fully_verified false compiler v0.8.35. contract Token INITIAL_HOLDER_SUPPLY 210_000 ether; owner and HOOK storage; setHook only owner. constructor args symbolERC20 WTH nameERC20 what the hook?" }
  - { id: R-22, publisher: Blockscout, title: "Token create tx 0x8657ddd1…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x8657ddd11487c7bd91d3c4b7159b2ed662bde955d9717d1e211355e1948dac4e", published_at: "2026-08-04T00:24:11Z", accessed_at: 2026-09-03T02:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22, CLM-23, EVT-6], excerpt: "status ok timestamp 2026-08-04T00:24:11.000000Z from 0x883a2cc6c9A9E8F0160d8ad4985A61B80B773A8e (whatthehook.eth) created 0x7F66F29AB9e28Dc7602f0D14a4df0Bbcd2b50399. RPC block 27190942. Same block as deployHook tx 0xe9976f0a… to that factory." }

gaps:
  - { priority: P0, question: "Does the 4-of-6 Safe actually own pause / pool-approval on the hook, or is hook owner() the EOA whatthehook.eth the live admin?", checked: "docs §25 Safe claim; RPC hook owner() 0x883a…3A8e; hook source unverified so modifiers unread, 2026-09-03", next: "verify hook source or eth_call any owner/admin/paused views once ABI is known" }
  - { priority: P0, question: "Is there an audit whose scope matches hook 0xc52f…, executor 0x26a5…, and factory 0x7F66…?", checked: "docs, site, Llama audits 0 / audit_links null, X profile, 2026-09-03", next: "ask in public and search named-auditor indexes if a firm is ever posted" }
  - { priority: P0, question: "After the 2026-09-02 split change, do ProfitCurrencyDistribute / ProtocolRevenue logs still match Llama's zero-revenue methodology?", checked: "X post 2095286013950112193 and Llama dailyRevenue 0 for 2026-09-02", next: "read a post-2-Sep distribution tx and the fees adapter at dimension-adapters/fees/what-the-hook.ts" }
  - { priority: P1, question: "Hook and ArbExecutor source remain unverified; what are the pause, upgrade, and route-approval selectors?", checked: "Blockscout is_verified false on both addresses, 2026-09-03", next: "submit source or decompile; read factory deployHook verified bytecode if the factory is verified later" }
  - { priority: P1, question: "Public Telegram URL named in the 2 Sep post was not located", checked: "X post 2095286013950112193; site/docs/X bio have no t.me link this pass", next: "record the t.me if a later official post or bio lists it" }
  - { priority: P1, question: "HookOS (@hookosfun, $HOOK 0x85d4e6F147BFb5729378E451F32cf5287dE75f97) is a separate multi-chain hook pad and is not a census slug, so it cannot be filed under possible_matches", checked: "content/census.yaml 2026-09-03; accounts.yaml @hookosfun", next: "keep HookOS off this row; seed it only if a confirmed Robinhood official surface appears" }
  - { priority: P2, question: "Where is the Solidity repo for src/hookArbTOKEN/simpleERC20.sol?", checked: "site, docs, Llama github null, X bio, 2026-09-03", next: "search GitHub for hookArbTOKEN or the factory bytecode metadata" }
---

# What The Hook — research packet

## What it is

A Uniswap v4 hook that recaptures cross-pool arbitrage and pays it to swappers and LPs. On Robinhood Chain the correction settles in the same swap; realised profit is split among the swapper, LPs, a referral and the WTH treasury. Users swap as usual; projects attach the hook at v4 pool creation. The hook is 0xc52f…54c0 and the WTH token is 0xb8Fa…fF79, created by whatthehook.eth.

Themes: hook, rwa, stock-paired:NVDA

## Why it matters

This is the chain's MEV-redistribution hook, not a launchpad. Any v4 pool that attaches 0xc52f…54c0 at creation sits in the same capture path as WTH's own WETH pools, including hooked NVDA/USDG and other Stock Token quotes named in the docs. Hookr composes launch rules; this hook closes price gaps.

## What could go wrong

Hook `owner()` is a single EOA (whatthehook.eth) while the docs name a 4-of-6 Safe as admin; those two control pictures are not reconciled in this pass. Hook and executor source are unverified. Llama still reports protocol revenue as zero after the 2 Sep treasury-split post.

## Product and mechanics

A swap on a hooked pool can open a price gap versus another approved pool (v4, v3, or a named propAMM stock venue). The hook checks a bounded route set, executes only when realised profit after fees and gas is positive, and splits that profit in the same transaction. Docs after the 2 Sep change: WTH's own pools pay 10% to the swapper and 90% to treasury; an integrating pool pays 5% swapper, 45% that pool's LPs, 40% treasury, 10% referral. [claim R-1 R-2 R-4]

WTH is a 210,000-supply ERC-20 used as the visible example pool, not a launchpad output. It was created 2026-08-04 in block 27190942 by factory 0x7F66…0399 from whatthehook.eth — not Pons, Hookr, or LiquidityLauncher. Listed liquidity is Uniswap v4 WTH/WETH (WETH 0x0Bd7…AD73). Projects add the hook by creating two or more v4 pools against ETH, WETH or USDG with the hook address preset. [verified R-2 R-9 R-21 R-22]

Docs also describe triangular routes and hooked USDG pools for NVDA, SPCX, SNDK, AAPL, GOOGL and MU at 0.0375% and 0.1% fee tiers. Those stock-token pools were not individually eth_called this pass. [claim R-2]

## Control and security

`hook owner()` returns EOA 0x883a2cc6…3A8e, labelled whatthehook.eth, with empty code. `token owner()` returns the unverified factory 0x7F66…0399; verified Token source restricts `setHook` to that owner. [verified R-16 R-21]

Docs §25 say Safe 0x98c8…cE59 holds administrative keys for pool approval, routes, and pause, with no single key. RPC `getThreshold()` is 4 of 6 EOA owners. The Safe exists with verified SafeProxy/SafeL2 source. Whether the Safe is `owner()` of the hook is the open CON-1. [claim R-2] [verified R-14 R-16]

Hook and ArbExecutor source are unverified on Blockscout. Token source is partially verified (`src/hookArbTOKEN/simpleERC20.sol`). Llama `audits` is 0. No audit artifact was located. [unknown] [verified R-10 R-11 R-12]

## Team and provenance

Official identity is bidirectional on domain and handle: @whatthehookv4 lists whatthehook.io; docs on that host publish the token and hook that Llama and DexScreener also name. Display name on the token is "what the hook?". [verified R-1 R-2 R-3 R-6 R-9]

Deployer EOA is whatthehook.eth (0x883a…3A8e): it created the factory, called `deployHook`, and later created ArbExecutor and PositionFeeClaimer. No public repository was listed. Telegram is named in the 2 Sep post without a URL. Hookr and HookOS stay separate names. [verified R-15 R-22] [claim R-4 R-17]

## Economics and activity

DefiLlama chain-slice TVL (non-WTH balances in hooked pools) is 210671.39 USD at 2026-09-03T01:27:35Z. The same payload's Robinhood Chain-staking bucket is 1174597.81 USD of WTH in those pools — not the TVL figure, and not an all-chains total. [verified R-6 R-17]

Llama dailyFees for 2026-09-02 is 1790 USD (ProfitCurrencyDistribute). Llama dailyRevenue is 0 under a methodology that says the hook retains nothing; docs and the 2 Sep post say treasury now takes 90%/40% (CON-2). [verified R-7] [claim R-8 R-4]

DexScreener WTH/WETH v4 pair 0x79723a75…: liquidity 787545.99 USD, 24h volume 215448.4 USD, marketCap 3700589 USD. A second WTH/WETH v4 pair printed 193599.36 USD 24h volume and is not summed here. Blockscout holders_count 767. [verified R-9 R-10]

## Material risks

- Hook `owner()` is one EOA while docs name a 4-of-6 Safe as admin; pause and pool-approval rights were not read from unverified hook source. [disputed R-2 R-16]
- Hook and ArbExecutor bytecode are unverified. [verified R-11 R-12]
- No audit report was located. [unknown]
- Llama still books protocol revenue as zero after the posted treasury split. [disputed R-4 R-8]
- Capture needs active in-range liquidity and approved routes; docs state no payout when no realised profit. [claim R-2]

## Verification passes

- Receipts: site, docs, dashboard, X profile and status URLs, Llama protocol/fees APIs, DexScreener token API, Blockscout address/tx/source APIs, and RPC eth_getCode/eth_call were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-2 R-3 R-6 R-9 R-10 R-16]
- Numbers: TVL 210671.39 is currentChainTvls['Robinhood Chain'], not staking 1174598 and not an all-chains total; 24h volume 215448.4 is one WTH/WETH v4 pair; fees 1790 is the 2026-09-02 Llama bar. [verified R-6 R-7 R-9]
- Adversarial: the strongest contrary reading is that this is Hookr or HookOS. Handles, domains, and reproduced token/hook addresses differ; Hookr is a hook marketplace and $HOOKR's listed pool is hookless. [inference R-2 R-3 R-10]

## Operations log

- Read content/census.yaml what-the-hook and hookr rows, content/projects/what-the-hook.yaml, content/pulled/what-the-hook.yaml, content/feed/what-the-hook.yaml, content/sources/what-the-hook.yaml, research/inbox packets for hookr.
- Opened https://www.whatthehook.io, /docs, /dashboard.html, https://x.com/whatthehookv4 and named status URLs, https://defillama.com/protocol/what-the-hook.
- GET api.llama.fi/protocol/what-the-hook, summary/fees dailyFees and dailyRevenue; GET DexScreener latest/dex/tokens/0xb8Fa…; GET GitHub DefiLlama-Adapters what-the-hook/index.js.
- GET Blockscout /api/v2/addresses for token, hook, executor, feeclaimer, Safe, factory, deployer; /api/v2/tokens; /api/v2/smart-contracts token; /api/v2/transactions create and deployHook.
- RPC https://rpc.mainnet.chain.robinhood.com eth_blockNumber, eth_getCode, eth_call owner/HOOK/getOwners/getThreshold/totalSupply (User-Agent required; unauthenticated urllib 403).
- HookOS is not a census slug; filed only as a gap. Time on this slug: one collector pass.
