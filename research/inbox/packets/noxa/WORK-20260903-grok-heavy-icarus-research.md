---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: noxa
name: NOXA Fun
packet_tier: seed
as_of: 2026-09-03T00:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [noxa]
allowed_paths:
  - research/inbox/packets/noxa/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: NOXA Fun
  aliases: [Noxa, "fun.noxa"]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://fun.noxa.eth.limo
  official_handle: "@Noxa_Fi"
  repository: "NULL — Llama github is null; @Noxa_Fi bio, ENS snapshot HTML and docs.noxa.fi do not name a public repository"
  possible_matches:
    - slug: bankr
      signals: [ticker-only]
      contrary_signals:
        - "Bankr posted a $NOXA token 0xF01d6Da69afF5Ee303019273339805DdED0C3ba3 on 2026-07-22; this slug is the launchpad at @Noxa_Fi"
        - "@Noxa_Fi posted it is not affiliated with any new launchpad or token using the same name"
        - "No shared domain, handle or factory address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "pools.trade is Uniswap Labs' v4 LiquidityLauncher at pools.trade / @TradePools"
        - "NOXA Fun is a Uniswap v3 single-sided LP factory at 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB / @Noxa_Fi"
        - "No shared domain, handle or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "NOXA Fun launched straight into Uniswap v3 with no bonding curve"
        - "No shared domain, handle or factory address"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: []
  mechanism_tags: [launchpad]
  ecosystem_role: subject
  lifecycle: inactive
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Factory 0xD9eC…FccB exists on 4663 and created CASHCAT. @Noxa_Fi disabled new launches on 14 Jul 2026, lost the original domains, and named a static ENS snapshot as the remaining interface. Llama TVL/fees and RH Daily volume are leftover Uniswap v3 flow, not live launches. [R-5] [R-8] [R-11] [R-12] [R-16] [R-17]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-12], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-18], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-5, CLM-11, CLM-13], note: "" }

links:
  - { kind: site, url: "https://fun.noxa.eth.limo", authenticity: confirmed }
  - { kind: x, url: "https://x.com/Noxa_Fi", authenticity: confirmed }
  - { kind: site, url: "https://noxa.fun", authenticity: conflicted }
  - { kind: other, url: "https://fun.noxa.fi", authenticity: unconfirmed }
  - { kind: docs, url: "https://docs.noxa.fi/launchpad/overview/", authenticity: unconfirmed }

deployments:
  - label: Launch factory
    role: factory
    address:
      value: "0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-5, R-6, R-7]

metrics:
  - { kind: tvl, value: 5522002, currency: USD, as_of: 2026-09-02T21:42:35Z, window: point, method: "api.llama.fi/protocol/noxa-fun currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-1] }
  - { kind: fees_24h, value: 153498, currency: USD, as_of: 2026-09-03T00:40:00Z, window: 24h, method: "api.llama.fi/summary/fees/noxa-fun?dataType=dailyFees chainBreakdown['Robinhood Chain'].total24h", class: claim, receipt_ids: [R-2] }
  - { kind: revenue_24h, value: 0, currency: USD, as_of: 2026-09-03T00:40:00Z, window: 24h, method: "api.llama.fi/summary/fees/noxa-fun methodology Revenue disabled; protocol revenue 0", class: claim, receipt_ids: [R-1, R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:45:00Z, receipt_ids: [R-7], result: "eth_getCode on rpc.mainnet.chain.robinhood.com at block 53003220 (0x328c3d4): factory 0xD9eC…FccB 22811 bytes; adapter locker 0x7F03…Cd85 empty" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T00:48:00Z, receipt_ids: [R-5, R-6, R-8, R-9, R-20], result: "Blockscout API v2: factory is_contract true is_verified false, created 2026-06-16T13:53:01Z block 61688 by 0x7E03…242B (dev.noxa.eth), tagged Launch Factory; CASHCAT 0x020b…18b4 name LaunchToken is_verified true, creator_address_hash factory; locker 0x7F03…Cd85 is_contract false" }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T00:50:00Z, receipt_ids: [R-1, R-11, R-14, R-15], result: "@Noxa_Fi 14 Jul 2026 named fun.noxa.eth / fun.noxa.eth.limo as the interface; Llama protocol url is https://fun.noxa.eth.limo/ and twitter Noxa_Fi; ENS HTML title NOXA Fun" }
  - { id: REP-4, method: api, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-2], result: "Llama currentChainTvls Robinhood Chain 5522002.3726; fees total24h 153498 all on Robinhood Chain; revenue 0; methodology swap fees on graduated pools with TVL > $1000" }
  - { id: REP-5, method: api, checked_at: 2026-09-03T00:42:00Z, receipt_ids: [R-10], result: "DexScreener token 0x020b…18b4 chain robinhood: CASHCAT/WETH Uniswap v3 pair 0xA70f…E313 volume.h24 10367409.12 liquidity.usd 5494023.77; live trades" }
  - { id: REP-6, method: other, checked_at: 2026-09-03T00:41:00Z, receipt_ids: [R-16], result: "GET https://noxa.fun → HTTP 404 Vercel DEPLOYMENT_NOT_FOUND" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Token launches mint 1B supply into a single-sided Uniswap v3 1% fee-tier pool; no bonding-curve graduation step. LP is described as locked. Graduation is a net-buy milestone, not a migration.", class: claim, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-18, R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://fun.noxa.eth.limo", class: verified, observed_at: 2026-09-03T00:50:00Z, receipt_ids: [R-1, R-11, R-15], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@Noxa_Fi", class: verified, observed_at: 2026-09-03T00:50:00Z, receipt_ids: [R-1, R-11, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB", class: verified, observed_at: 2026-09-03T00:48:00Z, receipt_ids: [R-4, R-5, R-6, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: inactive, class: claim, observed_at: 2026-09-03T00:50:00Z, receipt_ids: [R-11, R-12, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-18, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: identity.domain, value: "https://noxa.fun is HTTP 404 Vercel DEPLOYMENT_NOT_FOUND; census still lists it as the site", class: verified, observed_at: 2026-09-03T00:41:00Z, receipt_ids: [R-16], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-8, field: economics.metric, value: "DefiLlama currentChainTvls Robinhood Chain 5522002 USD as of 2026-09-02T21:42:35Z; leftover locked-LP heuristic, not live launch TVL", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-9, field: economics.metric, value: "DefiLlama Robinhood Chain fees total24h 153498 USD; methodology is Uniswap swap fees on graduated NOXA Fun pools with TVL > $1000, not new launches", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-2], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DefiLlama protocol revenue 0; adapter says revenue is disabled and swap fees go to creators", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: activity.status, value: "New launches disabled as of 14 Jul 2026 per @Noxa_Fi; remaining ENS interface is a historical snapshot for browsing tokens and claiming creator fees", class: claim, observed_at: 2026-09-03T00:50:00Z, receipt_ids: [R-11, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: relationship, value: "CASHCAT 0x020bfC650A365f8BB26819deAAbF3E21291018b4 creator_address_hash is factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB in tx 0x0e6d23f0…4661 at 2026-06-18T20:01:25Z", class: verified, observed_at: 2026-09-03T00:48:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: activity.status, value: "CASHCAT still trades on Uniswap v3; DexScreener pair 0xA70fc67C9F69da90B63a0e4C05D229954574E313 volume.h24 10367409 USD. Leftover token flow, not a live pad.", class: verified, observed_at: 2026-09-03T00:42:00Z, receipt_ids: [R-10], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: "account.@Noxa_Fi.role", value: project, class: claim, observed_at: 2026-09-03T00:50:00Z, receipt_ids: [R-1, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: "account.@Noxa_Fi.slug", value: noxa, class: claim, observed_at: 2026-09-03T00:50:00Z, receipt_ids: [R-1, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: "account.@Noxa_fi_ETH.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T00:52:00Z, receipt_ids: [R-14, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "Llama audits field is 0; docs, ENS snapshot, X bio and GitHub search this pass did not locate an audit report", class: unknown, observed_at: 2026-09-03T00:50:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "Last located @Noxa_Fi post is 22 Jul 2026; no later project post in this pass", class: claim, observed_at: 2026-09-03T00:50:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@Noxa_Fi.flags", value: third-party-link, class: claim, observed_at: 2026-09-03T00:41:00Z, receipt_ids: [R-12, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "On 14 Jul 2026 @Noxa_Fi posted that trading fees had been set to 100% for creators", class: claim, observed_at: 2026-09-03T00:50:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.alias, value: NOXA Fun, class: verified, observed_at: 2026-09-03T00:50:00Z, receipt_ids: [R-1, R-15], reproduction_ids: [REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: ct
    title: "RH Daily lists leftover NOXA pad volume at $21.3M"
    summary: "On 1 Sep 2026 @RHDaily__ ranked @Noxa_Fi fourth among Robinhood Chain launchpads by 24h volume at $21.3M."
    occurred_at: 2026-09-01T22:00:00Z
    observed_at: 2026-09-03T00:30:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-2
    type: onchain
    title: "DefiLlama still attributes leftover NOXA Fun fees"
    summary: "Llama Robinhood Chain slice: 24h fees $153,498 and TVL $5.52M from graduated Uniswap v3 pools, not new launches."
    occurred_at: 2026-09-03T00:40:00Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-1, R-2]
  - id: EVT-3
    type: onchain
    title: "CASHCAT continues to trade on Uniswap v3"
    summary: "DexScreener CASHCAT/WETH v3 pair 0xA70f…E313: $10.37M 24h volume. Token creator is the NOXA factory."
    occurred_at: 2026-09-03T00:42:00Z
    observed_at: 2026-09-03T00:42:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8, R-10]
  - id: EVT-4
    type: company
    title: "@Noxa_Fi says it did not transfer the pad"
    summary: "@Noxa_Fi posted it never acquired or transferred noxa and is not affiliated with any new same-name pad or token."
    occurred_at: 2026-07-22T20:50:32Z
    observed_at: 2026-09-03T00:50:00Z
    affected_fields: [identity.handle, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-5
    type: company
    title: "@Noxa_Fi: original domains no longer controlled"
    summary: "@Noxa_Fi posted original domains were taken down and resold; the only remaining interface is on ENS."
    occurred_at: 2026-07-16T15:11:19Z
    observed_at: 2026-09-03T00:50:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-6
    type: company
    title: "@Noxa_Fi disables new launches, moves to ENS"
    summary: "@Noxa_Fi posted fun.noxa.eth as a historical snapshot for fee claims and said new launches stay disabled."
    occurred_at: 2026-07-14T15:37:34Z
    observed_at: 2026-09-03T00:50:00Z
    affected_fields: [lifecycle, activity.status, identity.domain]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-7
    type: onchain
    title: "NOXA factory created; CASHCAT minted two days later"
    summary: "Factory 0xD9eC…FccB created 16 Jun 2026 by dev.noxa.eth. CASHCAT was created through it on 18 Jun 2026."
    occurred_at: 2026-06-16T13:53:01Z
    observed_at: 2026-09-03T00:48:00Z
    affected_fields: [deployment.address, lifecycle, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-6, R-8, R-9]

receipts:
  - { id: R-1, publisher: DefiLlama, title: "NOXA Fun protocol API", url: "https://api.llama.fi/protocol/noxa-fun", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-8, CLM-10, CLM-14, CLM-15, CLM-18, CLM-22, EVT-2], excerpt: "name NOXA Fun; url https://fun.noxa.eth.limo/; twitter Noxa_Fi; category Launchpad; chains Monad MegaETH Intuition Stable Merlin Robinhood Chain; audits 0; github null; currentChainTvls Robinhood Chain 5522002.3726; description Hybrid launchpad with V3 single-sided LP and graduation mechanics." }
  - { id: R-2, publisher: DefiLlama, title: "NOXA Fun daily fees summary", url: "https://api.llama.fi/summary/fees/noxa-fun?dataType=dailyFees", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-10, EVT-2], excerpt: "total24h 153498; chainBreakdown Robinhood Chain total24h 153498; methodology Fees: Includes uniswap swap fees for tokens graduated from noxa fun (filtered by pools with >$1000 TVL); Revenue: Revenue is disabled for now; SupplySideRevenue: All fees collected from swaps are distributed to the creator of the token." }
  - { id: R-3, publisher: DefiLlama, title: "noxa-fun TVL adapter", url: "https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/noxa-fun/index.js", published_at: null, accessed_at: 2026-09-03T00:36:00Z, kind: repository, authority: aggregator, authenticity: confirmed, supports: [CLM-8], excerpt: "robinhood locker 0x7F03effbd7ceB22A3D80Dd468f67eF27826acD85; nftManager 0x73991a25c818bf1f1128deaab1492d45638de0d3; methodology TVL is the value of the base tokens(wrapped native / stable) in the locked LPs; doublecounted true." }
  - { id: R-4, publisher: DefiLlama, title: "noxa-fun fees adapter factory map", url: "https://github.com/DefiLlama/dimension-adapters/blob/master/dexs/noxa-fun/index.ts", published_at: null, accessed_at: 2026-09-03T00:37:00Z, kind: repository, authority: aggregator, authenticity: confirmed, supports: [CLM-4, CLM-6], excerpt: "CHAIN.ROBINHOOD factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB start 2026-06-16 fromBlock 61688. TokenLaunched event. Fees: Uniswap swap fees for tokens graduated from noxa fun (filtered by pools with >$1000 TVL)." }
  - { id: R-5, publisher: Blockscout, title: "Address 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB", url: "https://robinhoodchain.blockscout.com/address/0xd9ec2db5f3d1b236843925949fe5bd8a3836fccb", published_at: null, accessed_at: 2026-09-03T00:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, EVT-7], excerpt: "API v2: hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB, is_contract true, is_verified false, creator 0x7E035Fb048a31e0481b88074557415b1C187242B, creation_transaction_hash 0x5e512a7f9a931c4dc9b5b09d8dd5c80b66968cf393474b21e5613769df656b37; metadata tag Launch Factory." }
  - { id: R-6, publisher: Blockscout, title: "Factory creation tx 0x5e512a7f…", url: "https://robinhoodchain.blockscout.com/tx/0x5e512a7f9a931c4dc9b5b09d8dd5c80b66968cf393474b21e5613769df656b37", published_at: 2026-06-16T13:53:01Z, accessed_at: 2026-09-03T00:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, EVT-7], excerpt: "timestamp 2026-06-16T13:53:01.000000Z, status ok, result success, block_number 61688, from 0x7E035Fb048a31e0481b88074557415b1C187242B ens_domain_name dev.noxa.eth, to null (contract creation)." }
  - { id: R-7, publisher: Robinhood Chain RPC, title: "eth_getCode factory and adapter locker", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T00:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4], excerpt: "eth_blockNumber 0x328c3d4 (53003220). eth_getCode 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB 22811 bytes. eth_getCode 0x7F03effbd7ceB22A3D80Dd468f67eF27826acD85 empty (0x)." }
  - { id: R-8, publisher: Blockscout, title: "CASHCAT 0x020bfC650A365f8BB26819deAAbF3E21291018b4", url: "https://robinhoodchain.blockscout.com/address/0x020bfc650a365f8bb26819deaabf3e21291018b4", published_at: null, accessed_at: 2026-09-03T00:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-13, EVT-3, EVT-7], excerpt: "API v2: hash 0x020bfC650A365f8BB26819deAAbF3E21291018b4, name LaunchToken, is_contract true, is_verified true, creator_address_hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB, creation_transaction_hash 0x0e6d23f0babd02ede4aefaa923486591d783e1180c277c71e2f2a39fc74a4661; token name Cash Cat symbol CASHCAT." }
  - { id: R-9, publisher: Blockscout, title: "CASHCAT creation tx 0x0e6d23f0…", url: "https://robinhoodchain.blockscout.com/tx/0x0e6d23f0babd02ede4aefaa923486591d783e1180c277c71e2f2a39fc74a4661", published_at: 2026-06-18T20:01:25Z, accessed_at: 2026-09-03T00:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, EVT-7], excerpt: "timestamp 2026-06-18T20:01:25.000000Z, status ok, block_number 88836, from 0xcdfc08A1C1FBaFB355645E5ddC32122e5716cA90, to 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB (Launch Factory), method 0x686399cb." }
  - { id: R-10, publisher: DexScreener, title: "CASHCAT token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x020bfC650A365f8BB26819deAAbF3E21291018b4", published_at: null, accessed_at: 2026-09-03T00:42:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13, EVT-3], excerpt: "pair 0xA70fc67C9F69da90B63a0e4C05D229954574E313 chainId robinhood dexId uniswap labels v3 baseToken CASHCAT 0x020b…18b4 quoteToken WETH; volume.h24 10367409.12 liquidity.usd 5494023.77 fdv 270978177; pairCreatedAt 1781812885000." }
  - { id: R-11, publisher: "@Noxa_Fi", title: "new interface at fun.noxa.eth; launches stay disabled", url: "https://x.com/Noxa_Fi/status/2077054908944076825", published_at: 2026-07-14T15:37:34Z, accessed_at: 2026-09-03T00:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-5, CLM-11, CLM-21, EVT-6], excerpt: "the new interface is up at fun.noxa.eth you can access it via brave or https://fun.noxa.eth.limo https://fun.noxa.eth.link the interface lets you browse a historical snapshot of the tokens launched on noxa in the past, and claim any creator fees. there is only one solution to avoid dilution of the tokens, the staples and that is to keep new launches disabled. trading fees have been set to 100% for the creators" }
  - { id: R-12, publisher: "@Noxa_Fi", title: "original domains no longer controlled", url: "https://x.com/Noxa_Fi/status/2077773076142457275", published_at: 2026-07-16T15:11:19Z, accessed_at: 2026-09-03T00:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-20, EVT-5], excerpt: "after our domains were taken down, our registrar had apparently resold them or taken over them, still unclear we are not in control of the original domains anymore the only interface is currently the one hosted on ens" }
  - { id: R-13, publisher: "@Noxa_Fi", title: "never acquired or transferred", url: "https://x.com/Noxa_Fi/status/2080032772714844420", published_at: 2026-07-22T20:50:32Z, accessed_at: 2026-09-03T00:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-19, EVT-4], excerpt: "just to clarify noxa was never \"acquired\"; nor \"transferred\" by us we are NOT affiliated with any \"new launchpad\" nor token using the same name" }
  - { id: R-14, publisher: "@Noxa_Fi", title: "NOXA profile", url: "https://x.com/Noxa_Fi", published_at: null, accessed_at: 2026-09-03T00:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-14, CLM-15, CLM-16, CLM-19], excerpt: "Display name NOXA, handle @Noxa_Fi, bio Always first on new blockchains. Live even before new chains' official launch! First DegenFi protocol. Built by @AmunPhantom. Joined May 2024. ~26.7K followers. Latest located post 22 Jul 2026." }
  - { id: R-15, publisher: NOXA Fun, title: "fun.noxa.eth.limo ENS snapshot", url: "https://fun.noxa.eth.limo/", published_at: null, accessed_at: 2026-09-03T00:41:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-11, CLM-22], excerpt: "title NOXA Fun. meta description: A static interface for discovering launched tokens and claiming creator fees directly from smart contracts. og:description: Discover launched tokens and claim creator fees directly from smart contracts. Comment in HTML: This artifact lives on IPFS/ENS with no canonical HTTP origin." }
  - { id: R-16, publisher: Vercel, title: "noxa.fun deployment not found", url: "https://noxa.fun/", published_at: null, accessed_at: 2026-09-03T00:41:00Z, kind: official-site, authority: unknown, authenticity: conflicted, supports: [CLM-5, CLM-7], excerpt: "HTTP 404. The deployment could not be found on Vercel. DEPLOYMENT_NOT_FOUND." }
  - { id: R-17, publisher: "@RHDaily__", title: "Top Robinhood Chain Launchpads by 24H Volume", url: "https://x.com/RHDaily__/status/2094908154672734344", published_at: 2026-09-01T22:00:00Z, accessed_at: 2026-09-03T00:30:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-1], excerpt: "Top Robinhood Chain Launchpads by 24H Volume 1. @ponsdotfamily $315.9M 2. @longdotxyz $47.5M 3. @o1_exchange $23.7M 4. @Noxa_Fi $21.3M 5. @TradePools $16.4M" }
  - { id: R-18, publisher: NOXA, title: "NOXA Fun Overview", url: "https://docs.noxa.fi/launchpad/overview/", published_at: null, accessed_at: 2026-09-03T00:35:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-1, CLM-6], excerpt: "NOXA Fun is a hybrid token launchpad at fun.noxa.fi. When you create a token: a new ERC-20 is deployed, single-sided liquidity is added to a V3 pool with the 1% fee tier, and the token is immediately tradeable. Graduation milestones are based on net buy amount / liquidity in the pool. The LP never moves — graduation is a milestone, not a migration." }
  - { id: R-19, publisher: DefiLlama, title: "NOXA Fun protocol page", url: "https://defillama.com/protocol/noxa-fun", published_at: null, accessed_at: 2026-09-03T00:38:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-9], excerpt: "Website https://fun.noxa.eth.limo/ Twitter https://x.com/Noxa_Fi Category Launchpad. TVL by Chain Robinhood Chain $5.52m. Fees 24h $153,498 Robinhood Chain. Revenue 24h $0. Fees: Includes uniswap swap fees for tokens graduated from noxa fun." }
  - { id: R-20, publisher: Blockscout, title: "Adapter locker address 0x7F03…Cd85", url: "https://robinhoodchain.blockscout.com/address/0x7f03effbd7ceb22a3d80dd468f67ef27826acd85", published_at: null, accessed_at: 2026-09-03T00:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "API v2: hash 0x7F03efFbd7cEB22A3D80dD468f67eF27826ACd85, is_contract false, is_verified false, creator_address_hash null, name null. Same 20 bytes as the Llama Monad factory in the fees adapter." }
  - { id: R-21, publisher: fun.noxa.fi, title: "fun.noxa.fi HTTP 200", url: "https://fun.noxa.fi/", published_at: null, accessed_at: 2026-09-03T00:41:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-20], excerpt: "GET https://fun.noxa.fi/ returned HTTP 200 after @Noxa_Fi posted that original domains were no longer controlled. Page title and launch controls were not reproduced from the client-rendered HTML this pass." }
  - { id: R-22, publisher: "@Noxa_fi_ETH", title: "NOXA | ETH profile", url: "https://x.com/Noxa_fi_ETH", published_at: null, accessed_at: 2026-09-03T00:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-16], excerpt: "Display name NOXA | ETH, handle @Noxa_fi_ETH. Bio: Always first on new blockchains. Live even before new chains' official launch! First DegenFi protocol. NOXA | ETH. ~1.8K followers. Same bio stem as @Noxa_Fi." }

gaps:
  - { priority: P0, question: "Does factory 0xD9eC…FccB still accept TokenLaunched calls, or is launch gated on-chain?", checked: "Blockscout is_contract true, source unverified; no eth_call of a launch function this pass; @Noxa_Fi said launches stay disabled at the interface", next: "read unverified bytecode or a later TokenLaunched log after 14 Jul 2026" }
  - { priority: P0, question: "Where are the Robinhood locked Uni v3 positions if Llama's locker address is not a contract on 4663?", checked: "TVL adapter locker 0x7F03…Cd85 is_contract false on Blockscout and eth_getCode empty; fees adapter uses that same address as the Monad factory", next: "find the locker from a CASHCAT position NFT owner() or a TokenLaunched positionId" }
  - { priority: P1, question: "Who holds owner/admin on the unverified factory, and did that change when launches were disabled?", checked: "creator 0x7E03…242B (dev.noxa.eth); source unverified; no owner() call this pass", next: "eth_call owner()/authority and any pause flag once source is verified or decompiled" }
  - { priority: P1, question: "Who serves fun.noxa.fi (HTTP 200) after @Noxa_Fi said original domains were no longer controlled?", checked: "fun.noxa.fi 200; noxa.fun 404; ENS snapshot named as the only interface", next: "compare fun.noxa.fi launch UI against the ENS snapshot and WHOIS/registrar" }
  - { priority: P2, question: "Is there an audit of the Robinhood factory bytecode?", checked: "Llama audits 0; docs, ENS HTML, X bio, 2026-09-03", next: "search named auditors if the project publishes one" }
---

# NOXA Fun — research packet

## What it is

Week-one Uniswap v3 launchpad on Robinhood Chain, now inactive. A user minted a 1 billion-supply token into a locked 1% Uniswap v3 pool with no bonding curve. @Noxa_Fi disabled new launches in mid-July and named a static ENS snapshot as the remaining interface after the original domains were lost. CASHCAT still trades; leftover pad volume on aggregator boards is that secondary-market flow, not new launches.

Themes: launchpad, memecoin
