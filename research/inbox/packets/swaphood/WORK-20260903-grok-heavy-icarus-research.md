---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: swaphood
name: SwapHood
packet_tier: seed
as_of: 2026-09-03T03:05:00Z
prior_packet: null
supersedes: null
owned_slugs: [swaphood]
allowed_paths:
  - research/inbox/packets/swaphood/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: SwapHood
  aliases: [SwapHood V2, SwapHood V3, MetaDEX]
  symbols: [HOOD, h33, xHOOD]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://swaphood.finance
  official_handle: "@SwapHoodFi"
  repository: "NULL — no public repository URL on swaphood.finance, gitbook Official Links, or the @SwapHoodFi bio this pass"
  possible_matches:
    - slug: up
      signals: [other]
      contrary_signals:
        - "Census up is a Native AMM at @uponrh with symbol UP"
        - "SwapHood is @SwapHoodFi at swaphood.finance with HOOD / PancakeV3Factory 0x0Ec554F0… and SwapHoodFactory 0xE7206Eca…"
        - "No shared domain, handle or reproduced address"
    - slug: fables
      signals: [other]
      contrary_signals:
        - "Census Fables is a Native AMM at @fablesfi with symbol PROLOGUE"
        - "SwapHood is @SwapHoodFi at swaphood.finance; HOOD token 0x1FcBc77a… is SwapHood Token"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: trading/amm-native
  secondary_leaves: []
  mechanism_tags: [amm, vault]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "HOOD, xHOOD, h33, SwapHoodFactory, PancakeV3Factory and the WETH/HOOD pair have non-empty code and verified source on chain 4663; owner() on HOOD and PancakeV3Factory returns EOA 0xe49C113a…. swaphood.finance twitter:site is @SwapHoodFi; gitbook Official Links name the same handle. DefiLlama lists SwapHood V2+V3 TVL on Robinhood Chain only. Daily HOOD emission figures conflict across X and two gitbook pages. [R-1] [R-4] [R-5] [R-6] [R-10] [R-13] [R-14] [R-22]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-21], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-13, CLM-18, CLM-22, CLM-24, CLM-25, CLM-26], note: "" }

links:
  - { kind: site, url: "https://swaphood.finance", authenticity: confirmed }
  - { kind: app, url: "https://www.swaphood.finance", authenticity: confirmed }
  - { kind: docs, url: "https://swaphood-finance.gitbook.io/swaphood-finance-docs", authenticity: confirmed }
  - { kind: docs, url: "https://docs.swaphood.finance", authenticity: confirmed }
  - { kind: x, url: "https://x.com/SwapHoodFi", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/SwapHood", authenticity: confirmed }
  - { kind: discord, url: "https://discord.gg/vjJcXctWYm", authenticity: confirmed }

deployments:
  - label: HOOD token (SwapHood Token)
    role: token
    address:
      value: "0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-20]
  - label: xHOOD token
    role: token
    address:
      value: "0xd3125799EEcb4c9eB6b9d570d15a782808D9BDC3"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-19, R-20]
  - label: h33 token (Hood Liquid Staking Token)
    role: token
    address:
      value: "0xA7036C8C28F96e8cE242d0Af45d1B395B69DAF38"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-16, R-20]
  - label: V2 factory (SwapHoodFactory)
    role: factory
    address:
      value: "0xE7206Ecac3A51afe7e6179182ad4130A26068dD1"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-15, R-20]
  - label: V3 factory (explorer contract name PancakeV3Factory)
    role: factory
    address:
      value: "0x0Ec554F0BfF0Be6C99d1e95C8015bb0950f6A2C7"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-14, R-20]
  - label: HOOD/WETH V2 pair (vAMM-WETH/HOOD)
    role: other
    address:
      value: "0xeA7ba72BE3baaB20546bFdA880b7E285E5a51168"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-17, R-21, R-28]
  - label: HOOD and V3 factory owner
    role: admin
    address:
      value: "0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-18, R-20]

metrics:
  - { kind: tvl, value: 16765, currency: USD, as_of: 2026-09-03, window: point, method: "api.llama.fi/protocol/swaphood currentChainTvls Robinhood Chain (parent V2+V3)", class: claim, receipt_ids: [R-22] }
  - { kind: tvl, value: 3284.93, currency: USD, as_of: 2026-09-03, window: point, method: "api.llama.fi/protocol/swaphood-v2 currentChainTvls Robinhood Chain", class: claim, receipt_ids: [R-23] }
  - { kind: tvl, value: 13481.19, currency: USD, as_of: 2026-09-03, window: point, method: "api.llama.fi/protocol/swaphood-v3 currentChainTvls Robinhood Chain", class: claim, receipt_ids: [R-24] }
  - { kind: volume_24h, value: 2494, currency: USD, as_of: 2026-09-03, window: 24h, method: "api.llama.fi/summary/dexs/swaphood-v2?dataType=dailyVolume total24h; chains Robinhood Chain", class: claim, receipt_ids: [R-29] }
  - { kind: volume_24h, value: 61998, currency: USD, as_of: 2026-09-03, window: 24h, method: "api.llama.fi/summary/dexs/swaphood-v3?dataType=dailyVolume total24h; chains Robinhood Chain", class: claim, receipt_ids: [R-30] }
  - { kind: fees_24h, value: 65.05, currency: USD, as_of: 2026-09-03, window: 24h, method: "api.llama.fi/summary/fees/swaphood?dataType=dailyFees parent total24h", class: claim, receipt_ids: [R-25] }
  - { kind: holders, value: 407, currency: null, as_of: 2026-09-03, window: point, method: "Blockscout API v2 token.holders_count on HOOD 0x1FcBc77a…", class: claim, receipt_ids: [R-13] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:50:00Z, receipt_ids: [R-20], result: "eth_getCode non-empty on rpc.mainnet.chain.robinhood.com at block 0x329f050 (53080144): HOOD 5407 bytes, PancakeV3Factory 5558, h33 6216, SwapHoodFactory 18647, WETH/HOOD pair 12765, xHOOD 5945; owner EOA 0 bytes. owner() on HOOD and PancakeV3Factory returned 0xe49c113adff614ac8dfc81f36e6a4848af1fadfb; owner() on SwapHoodFactory reverted" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:51:00Z, receipt_ids: [R-13, R-14, R-15, R-16, R-17, R-18, R-19, R-26, R-27, R-28], result: "Blockscout API v2: HOOD name SwapHood Token, is_verified true, holders 407, creator 0xe49C113a…, created 2026-07-09T17:02:11Z; V3 factory name PancakeV3Factory verified, same creator, created 2026-07-10T11:43:12Z; V2 factory name SwapHoodFactory verified, created 2026-07-09T17:33:22Z; h33 name Hood Liquid Staking Token / h33, 135 holders; pair name SwapHoodPair vAMM-WETH/HOOD, creator V2 factory, created 2026-07-12T20:18:23Z; xHOOD verified, 2 holders; 0xe49C113a… is_contract false" }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-4, R-8], result: "swaphood.finance twitter:site is @SwapHoodFi; gitbook Official Links lists Website swaphood.finance, Twitter https://x.com/SwapHoodFi, Telegram https://telegram.me/SwapHood, Discord https://discord.gg/vjJcXctWYm; @SwapHoodFi bio is 'The first HOOD-aligned DEX' and website https://www.swaphood.finance/" }
  - { id: REP-4, method: api, checked_at: 2026-09-03T02:53:00Z, receipt_ids: [R-21], result: "DexScreener token-pairs v1 robinhood/0x1FcBc77a…: swaphood v2 pair 0xeA7ba72B… HOOD/WETH liquidity_usd 2743.22 volume.h24 2081.61 fdv 16177; websites swaphood.finance and docs.swaphood.finance; socials @SwapHoodFi, t.me/SwapHood, discord.gg/vjJcXctWYm" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Native AMM on Robinhood Chain: SwapHood V2 constant-product pairs (0.30% fee added to reserves) plus a PancakeV3Factory concentrated-liquidity factory; LPs can deposit V2 or V3 positions into HOOD farms.", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-2, R-3, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://swaphood.finance", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-4, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@SwapHoodFi", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-4, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-3, R-9, R-13, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x0Ec554F0BfF0Be6C99d1e95C8015bb0950f6A2C7", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-3, R-14, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0xE7206Ecac3A51afe7e6179182ad4130A26068dD1", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-3, R-15, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0xA7036C8C28F96e8cE242d0Af45d1B395B69DAF38", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-3, R-16, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: deployment.address, value: "0xeA7ba72BE3baaB20546bFdA880b7E285E5a51168", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-17, R-21, R-28], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-9, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-13, R-14, R-15, R-21], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: control.owner, value: "0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-18, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: taxonomy.primary-leaf, value: trading/amm-native, class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-2, R-3, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: identity.symbol, value: HOOD, class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-3, R-9, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: product.mechanism, value: "Gitbook revenue sharing: 95% of protocol fees to h33 (xHOOD stakers) by buying HOOD then raising h33 backing; 50% tax on xHOOD exit streamed to h33 holders. Stake HOOD to xHOOD then to h33 in one zap.", class: claim, observed_at: 2026-09-03T02:42:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: product.mechanism, value: "V2 applies a 0.30% swap fee added to reserves (x * y = k).", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: product.mechanism, value: "Gitbook: liquidity protocol implemented in a system of non-upgradeable smart contracts on the RobinHood blockchain.", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report was located; DefiLlama swaphood-v2 and swaphood-v3 set audits to 0.", class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-23, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "DefiLlama parent SwapHood currentChainTvls Robinhood Chain 16765 USD on 2026-09-03 (V2 3284.93 + V3 13481.19)", class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-22, R-23, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: identity.symbol, value: "HOOD ticker is also used by the Robinhood-issued HOOD Stock Token at a different address; this token is SwapHood Token 0x1FcBc77a…", class: claim, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@SwapHoodFi.role", value: project, class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-4, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@SwapHoodFi.slug", value: swaphood, class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-4, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1, R-2, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: deployment.role, value: "V3 factory 0x0Ec554F0… is named PancakeV3Factory on Blockscout; same creator as HOOD. Not the canonical Uniswap v3 factory.", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-14], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-23, field: identity.symbol, value: h33, class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-3, R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: "X 2026-08-08 / quoted 2026-09-02: HOOD max supply 5,000,000; daily emissions about 2,375", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: economics.metric, value: "Gitbook Tokenomics: HOOD max supply 5,000,000; daily emissions 2,500", class: claim, observed_at: 2026-09-03T02:42:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "Gitbook Farms listed rates sum to 5,000 HOOD/day (HOOD/ETH 3750, VIRTUALS/ETH 125, ETH/USDG 1000, CASHCAT/ETH 125)", class: claim, observed_at: 2026-09-03T02:42:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: product.mechanism, value: "Gitbook Tokenomics: HOOD receives 50% of protocol revenue via token buybacks; a yield-bearing token pegged to HOOD is described as later.", class: claim, observed_at: 2026-09-03T02:42:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@SwapHoodFi.note", value: "X 2026-08-08: the SwapHood team owns no HOOD and owns no liquidity; HOOD and h33 liquidity bootstrapped through SwapHood LP incentives.", class: claim, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: deployment.address, value: "0xd3125799EEcb4c9eB6b9d570d15a782808D9BDC3", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-3, R-19, R-20], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-30, field: relationship, value: "Census Native AMMs up (@uponrh) and Fables (@fablesfi) share a product leaf with SwapHood and do not share domain, handle or reproduced address.", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-24, CLM-25, CLM-26]
    material_effect: "Daily HOOD emission figures differ: X ~2,375, gitbook Tokenomics 2,500, gitbook Farms table 5,000"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "@SwapHoodFi restates the HOOD fee-buyback flywheel"
    summary: "@SwapHoodFi posted that liquidity creates fees, fees fund HOOD buybacks, and buybacks increase h33 backing."
    occurred_at: 2026-09-02T19:39:35Z
    observed_at: 2026-09-03T02:45:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-2
    type: company
    title: "@SwapHoodFi posts a 633.93 HOOD buyback"
    summary: "@SwapHoodFi posted another HOOD buyback of 633.93 HOOD for 0.012 ETH."
    occurred_at: 2026-09-02T09:11:41Z
    observed_at: 2026-09-03T02:45:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-3
    type: company
    title: "@SwapHoodFi posts native farms for the HOOD flywheel"
    summary: "@SwapHoodFi posted that native farms feed a HOOD flywheel of earn, reinvest, buybacks and h33 backing."
    occurred_at: 2026-09-01T19:46:23Z
    observed_at: 2026-09-03T02:45:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-4
    type: company
    title: "@SwapHoodFi posts SwapHood and HOOD live on chain 4663"
    summary: "@SwapHoodFi posted SwapHood and HOOD live on Robinhood Chain with CA 0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c."
    occurred_at: 2026-07-12T22:08:54Z
    observed_at: 2026-09-03T02:44:00Z
    affected_fields: [lifecycle, deployment.address, identity.symbol]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-5
    type: onchain
    title: "SwapHoodPair WETH/HOOD created on the V2 factory"
    summary: "Blockscout names 0xeA7ba72B… SwapHoodPair vAMM-WETH/HOOD, created 2026-07-12T20:18:23Z by the V2 factory."
    occurred_at: 2026-07-12T20:18:23Z
    observed_at: 2026-09-03T02:51:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-17, R-28]
  - id: EVT-6
    type: onchain
    title: "PancakeV3Factory verified on Robinhood Chain Blockscout"
    summary: "Blockscout names 0x0Ec554F0… PancakeV3Factory, verified source, created 2026-07-10T11:43:12Z."
    occurred_at: 2026-07-10T11:43:12Z
    observed_at: 2026-09-03T02:51:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14, R-27]
  - id: EVT-7
    type: onchain
    title: "SwapHood Token HOOD created on Robinhood Chain"
    summary: "Blockscout names 0x1FcBc77a… SwapHood Token HOOD, 407 holders, verified source, created 2026-07-09T17:02:11Z."
    occurred_at: 2026-07-09T17:02:11Z
    observed_at: 2026-09-03T02:51:00Z
    affected_fields: [deployment.address, identity.symbol, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13, R-26]

receipts:
  - { id: R-1, publisher: SwapHood, title: "SwapHood | MetaDEX on Robinhood", url: "https://www.swaphood.finance/", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-20, CLM-21, CLM-30], excerpt: "title SwapHood | MetaDEX on Robinhood. meta twitter:site @SwapHoodFi. twitter:title SwapHood — MetaDEX for permissionless markets. description: Trade any ERC-20, provide liquidity, and earn rewards with SwapHood, the institutional-grade MetaDEX. og:url https://swaphood.finance/" }
  - { id: R-2, publisher: SwapHood, title: "Welcome to SwapHood", url: "https://swaphood-finance.gitbook.io/swaphood-finance-docs/welcome-to-swaphood", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-11, CLM-14, CLM-15, CLM-21], excerpt: "SwapHood is a liquidity protocol implemented in a system of non-upgradeable smart contracts on the RobinHood blockchain. Anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for pool tokens. In practice, SwapHood applies a 0.30% fee to trades, which is added to reserves." }
  - { id: R-3, publisher: SwapHood, title: "Contract Addresses", url: "https://swaphood-finance.gitbook.io/swaphood-finance-docs/contract-addresses", published_at: null, accessed_at: 2026-09-03T02:41:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-12, CLM-23, CLM-29], excerpt: "TOKENS: $HOOD 0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c; $xHOOD 0xd3125799EEcb4c9eB6b9d570d15a782808D9BDC3; $h33 0xA7036C8C28F96e8cE242d0Af45d1B395B69DAF38. V2 SwapHood Factory 0xE7206Ecac3A51afe7e6179182ad4130A26068dD1. V3 Factory 0x0Ec554F0BfF0Be6C99d1e95C8015bb0950f6A2C7." }
  - { id: R-4, publisher: SwapHood, title: "Official Links", url: "https://swaphood-finance.gitbook.io/swaphood-finance-docs/official-links", published_at: null, accessed_at: 2026-09-03T02:43:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-19, CLM-20, CLM-30], excerpt: "Website: http://swaphood.finance Twitter: https://x.com/SwapHoodFi Telegram: https://telegram.me/SwapHood Linktree: https://linktr.ee/SwapHood Discord: https://discord.gg/vjJcXctWYm" }
  - { id: R-5, publisher: SwapHood, title: "Tokenomics", url: "https://swaphood-finance.gitbook.io/swaphood-finance-docs/yields/tokenomics", published_at: null, accessed_at: 2026-09-03T02:42:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-25, CLM-27], excerpt: "Max Supply: 5,000,000. Daily Emissions: 2,500. Liquidity was bootstrapped via the SwapHood Farms, with emissions highly concentrated (75%) to the HOOD/ETH pair. While HOOD provides incentives to Liquidity Providers on the Farms, it will also receive 50% of the protocol revenue (retroactively Generated Trading Fees): Initially via token buybacks." }
  - { id: R-6, publisher: SwapHood, title: "Farms", url: "https://swaphood-finance.gitbook.io/swaphood-finance-docs/yields/farms", published_at: null, accessed_at: 2026-09-03T02:42:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-26], excerpt: "After users create a liquidity pool, on either V2 or Concentrated Liquidity, the pair can be deposited to earn $HOOD. V2: HOOD/ETH 75% of emissions 3,750 HOOD per day; VIRTUALS/ETH 2.5% 125 HOOD per day. V3: ETH/USDG 20% 1000 HOOD per day; CASHCAT/ETH 2.5% 125 HOOD per day." }
  - { id: R-7, publisher: SwapHood, title: "Revenue Sharing", url: "https://swaphood-finance.gitbook.io/swaphood-finance-docs/yields/revenue-sharing", published_at: null, accessed_at: 2026-09-03T02:42:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-13], excerpt: "95% to $h33 (xHOOD stakers) - Protocol fees flow to active participants. This flows in the following way: HOOD is bought back, then this HOOD is used to increase h33 backing. SwapHood implements an exit rebase where exit penalties (50% tax) are streamed to h33 holders. xHOOD solves the need for token lock-ups; $h33 (Liquid staked xHOOD) solves the need for liquid wrappers." }
  - { id: R-8, publisher: "@SwapHoodFi", title: "SwapHood profile", url: "https://x.com/SwapHoodFi", published_at: null, accessed_at: 2026-09-03T02:44:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-19, CLM-20], excerpt: "Display name SwapHood, handle @SwapHoodFi, bio 'The first HOOD-aligned DEX / Powering deep liquidity on Robinhood', website https://www.swaphood.finance/, joined 2026-07-09." }
  - { id: R-9, publisher: "@SwapHoodFi", title: "SwapHood and $HOOD are now fully LIVE", url: "https://x.com/SwapHoodFi/status/2076428615948870029", published_at: 2026-07-12T22:08:54Z, accessed_at: 2026-09-03T02:44:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-12, CLM-21, EVT-4], excerpt: "SwapHood and $HOOD are now fully LIVE. Connect, explore, deposit and trade exclusively on Robinhood Chain. $HOOD Official CA: 0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c" }
  - { id: R-10, publisher: "@SwapHoodFi", title: "HOOD is designed around a flywheel fueled by protocol buybacks", url: "https://x.com/SwapHoodFi/status/2095235208060752251", published_at: 2026-09-02T19:39:35Z, accessed_at: 2026-09-03T02:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24, CLM-28, EVT-1], excerpt: "HOOD is designed around a flywheel fueled by protocol buybacks. Liquidity creates trading activity. Activity generates protocol fees. Revenue funds HOOD buybacks. Buybacks increase h33 backing. Quoted 2026-08-08: Max supply 5,000,000; Daily emissions ~ 2,375. The SwapHood team owns no HOOD (We own no liquidity)." }
  - { id: R-11, publisher: "@SwapHoodFi", title: "Another buyback completed for SwapHoods' HOOD token", url: "https://x.com/SwapHoodFi/status/2095077189716725833", published_at: 2026-09-02T09:11:41Z, accessed_at: 2026-09-03T02:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "Another buyback completed for SwapHoods' HOOD token. 633.93 HOOD bought back with 0.012 ETH" }
  - { id: R-12, publisher: "@SwapHoodFi", title: "Native SwapHood farms are built to feed the $HOOD flywheel", url: "https://x.com/SwapHoodFi/status/2094874530992800233", published_at: 2026-09-01T19:46:23Z, accessed_at: 2026-09-03T02:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Native SwapHood farms are built to feed the $HOOD flywheel. Earn HOOD through HOOD/ETH. Put rewards back into liquidity or $h33. Protocol revenue funds $HOOD buybacks. Buybacks strengthen $h33 backing. 100% Community Owned LP" }
  - { id: R-13, publisher: Blockscout, title: "Address 0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c", url: "https://robinhoodchain.blockscout.com/address/0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-9, CLM-12, CLM-18, EVT-7], excerpt: "API v2: hash 0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c, name SwapHood Token, is_contract true, is_verified true, creator 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb, creation_transaction_hash 0xb1f07a06ccdaa7551176091c51e2f04484b8e95709e161a8a04e0ba40107d478. token name SwapHood Token, symbol HOOD, holders_count 407, total_supply 146417179931997003789074." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x0Ec554F0BfF0Be6C99d1e95C8015bb0950f6A2C7", url: "https://robinhoodchain.blockscout.com/address/0x0Ec554F0BfF0Be6C99d1e95C8015bb0950f6A2C7", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-9, CLM-11, CLM-22, EVT-6], excerpt: "API v2: hash 0x0Ec554F0BfF0Be6C99d1e95C8015bb0950f6A2C7, name PancakeV3Factory, is_contract true, is_verified true, creator 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb, creation_transaction_hash 0x103a9a7357893f4354c70576b46f11f10bb074b0e6a48b0e038bda6c996bb64e." }
  - { id: R-15, publisher: Blockscout, title: "Address 0xE7206Ecac3A51afe7e6179182ad4130A26068dD1", url: "https://robinhoodchain.blockscout.com/address/0xE7206Ecac3A51afe7e6179182ad4130A26068dD1", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-9], excerpt: "API v2: hash 0xE7206Ecac3A51afe7e6179182ad4130A26068dD1, name SwapHoodFactory, is_contract true, is_verified true, creator 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb, creation_transaction_hash 0x5ad644dbf5242a30eee14c6637fafb098d95687c1fd739c9512499babc3431aa." }
  - { id: R-16, publisher: Blockscout, title: "Address 0xA7036C8C28F96e8cE242d0Af45d1B395B69DAF38", url: "https://robinhoodchain.blockscout.com/address/0xA7036C8C28F96e8cE242d0Af45d1B395B69DAF38", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-23], excerpt: "API v2: hash 0xA7036C8C28F96e8cE242d0Af45d1B395B69DAF38, name h33, is_contract true, is_verified true, creator 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb, creation_transaction_hash 0x4ef275beaf15a2c8a5c4fba3a34461555fd6cba8afd76175effdaeb72b5ae6ba. token name Hood Liquid Staking Token, symbol h33, holders_count 135, total_supply 6164868971941563069401." }
  - { id: R-17, publisher: Blockscout, title: "Address 0xeA7ba72BE3baaB20546bFdA880b7E285E5a51168", url: "https://robinhoodchain.blockscout.com/address/0xeA7ba72BE3baaB20546bFdA880b7E285E5a51168", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, EVT-5], excerpt: "API v2: hash 0xeA7ba72BE3baaB20546bFdA880b7E285E5a51168, name SwapHoodPair, is_contract true, is_verified true, creator 0xE7206Ecac3A51afe7e6179182ad4130A26068dD1, creation_transaction_hash 0x3bcb690e784f3ccf6bec9b48549b7ad1dd06aa29b42f1a56d6be70133a0d45c8. token name Volatile AMM - WETH/HOOD, symbol vAMM-WETH/HOOD, holders_count 41." }
  - { id: R-18, publisher: Blockscout, title: "Address 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb", url: "https://robinhoodchain.blockscout.com/address/0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "API v2: hash 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb, is_contract false, is_verified false, creator null. RPC eth_getCode empty; owner() on HOOD and PancakeV3Factory returns this address." }
  - { id: R-19, publisher: Blockscout, title: "Address 0xd3125799EEcb4c9eB6b9d570d15a782808D9BDC3", url: "https://robinhoodchain.blockscout.com/address/0xd3125799EEcb4c9eB6b9d570d15a782808D9BDC3", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-29], excerpt: "API v2: hash 0xd3125799EEcb4c9eB6b9d570d15a782808D9BDC3, name xHOOD, is_contract true, is_verified true, creator 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb, creation_transaction_hash 0x38bcc30ba23603bab22a68859276398df545d2aa8b16c757afd8e8abf25ac9e6. token name xHood, symbol xHOOD, holders_count 2, total_supply 61193311943412847737992." }
  - { id: R-20, publisher: Blockscout, title: "Robinhood Chain RPC eth_getCode and owner()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-10, CLM-29], excerpt: "eth_blockNumber 0x329f050 (53080144). eth_getCode non-empty: HOOD 5407 bytes, PancakeV3Factory 5558, h33 6216, SwapHoodFactory 18647, pair 12765, xHOOD 5945. owner() HOOD and V3 factory 0xe49c113adff614ac8dfc81f36e6a4848af1fadfb. owner() SwapHoodFactory execution reverted. owner EOA code empty." }
  - { id: R-21, publisher: DexScreener, title: "HOOD token pairs on Robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c", published_at: null, accessed_at: 2026-09-03T02:46:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, EVT-5], excerpt: "dexId swaphood labels v2 pairAddress 0xeA7ba72BE3baaB20546bFdA880b7E285E5a51168 baseToken SwapHood Token HOOD quoteToken WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 priceUsd 0.1104 liquidity.usd 2743.22 volume.h24 2081.61 fdv 16177. websites swaphood.finance, docs.swaphood.finance. socials x.com/SwapHoodFi, t.me/SwapHood, discord.gg/vjJcXctWYm." }
  - { id: R-22, publisher: DefiLlama, title: "SwapHood parent protocol", url: "https://api.llama.fi/protocol/swaphood", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-17], excerpt: "name SwapHood. currentChainTvls Robinhood Chain 16765. twitter SwapHoodFi. url https://www.swaphood.finance/#/. github null. description: SwapHood is a liquidity protocol implemented in a system of non-upgradeable smart contracts on the RobinHood blockchain. otherProtocols SwapHood, SwapHood V3, SwapHood V2." }
  - { id: R-23, publisher: DefiLlama, title: "SwapHood V2 protocol", url: "https://api.llama.fi/protocol/swaphood-v2", published_at: null, accessed_at: 2026-09-03T02:47:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-16, CLM-17], excerpt: "name SwapHood V2. chain Robinhood Chain. audits 0. twitter SwapHoodFi. parentProtocol parent#swaphood. category Dexs. currentChainTvls Robinhood Chain 3284.92754. methodology: Value of the tokens locked in the liquidity pools." }
  - { id: R-24, publisher: DefiLlama, title: "SwapHood V3 protocol", url: "https://api.llama.fi/protocol/swaphood-v3", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-16, CLM-17], excerpt: "name SwapHood V3. chain Robinhood Chain. audits 0. twitter SwapHoodFi. parentProtocol parent#swaphood. tags CLMM. category Dexs. currentChainTvls Robinhood Chain 13481.19164." }
  - { id: R-25, publisher: DefiLlama, title: "SwapHood parent daily fees", url: "https://api.llama.fi/summary/fees/swaphood?dataType=dailyFees", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "id parent#swaphood name SwapHood total24h 65.05 total7d 346.06 totalAllTime 34226.31" }
  - { id: R-26, publisher: Blockscout, title: "HOOD creation transaction 0xb1f07a06…", url: "https://robinhoodchain.blockscout.com/tx/0xb1f07a06ccdaa7551176091c51e2f04484b8e95709e161a8a04e0ba40107d478", published_at: 2026-07-09T17:02:11Z, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-7], excerpt: "timestamp 2026-07-09T17:02:11.000000Z, status ok, result success, from 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb, to null (contract create)." }
  - { id: R-27, publisher: Blockscout, title: "PancakeV3Factory creation transaction 0x103a9a73…", url: "https://robinhoodchain.blockscout.com/tx/0x103a9a7357893f4354c70576b46f11f10bb074b0e6a48b0e038bda6c996bb64e", published_at: 2026-07-10T11:43:12Z, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-6], excerpt: "timestamp 2026-07-10T11:43:12.000000Z, status ok, result success, from 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb, to null (contract create)." }
  - { id: R-28, publisher: Blockscout, title: "WETH/HOOD pair creation transaction 0x3bcb690e…", url: "https://robinhoodchain.blockscout.com/tx/0x3bcb690e784f3ccf6bec9b48549b7ad1dd06aa29b42f1a56d6be70133a0d45c8", published_at: 2026-07-12T20:18:23Z, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, EVT-5], excerpt: "timestamp 2026-07-12T20:18:23.000000Z, status ok, result success, from 0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb, to SwapHoodFactory 0xE7206Ecac3A51afe7e6179182ad4130A26068dD1." }
  - { id: R-29, publisher: DefiLlama, title: "SwapHood V2 daily volume", url: "https://api.llama.fi/summary/dexs/swaphood-v2?dataType=dailyVolume", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "id 8205 name SwapHood V2 total24h 2494 total7d 7529.7 totalAllTime 403191.07" }
  - { id: R-30, publisher: DefiLlama, title: "SwapHood V3 daily volume", url: "https://api.llama.fi/summary/dexs/swaphood-v3?dataType=dailyVolume", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "id 8206 name SwapHood V3 total24h 61998 total7d 425684 totalAllTime 25397445" }

gaps:
  - { priority: P0, question: "Which on-chain daily HOOD emission is live: X ~2,375, Tokenomics 2,500, or Farms table 5,000?", checked: "X 2026-08-08 quoted 2026-09-02, gitbook Tokenomics, gitbook Farms, 2026-09-03", next: "eth_call reward rate / hoodPerBlock on Masterchef 0x734c9ef2… and V3 Masterchef 0x9d91AE1F…" }
  - { priority: P0, question: "Can owner 0xe49C113a… mint HOOD, change farm weights, or redirect buybacks without a timelock?", checked: "owner() on HOOD and PancakeV3Factory; owner() on SwapHoodFactory reverted; no timelock address in gitbook, 2026-09-03", next: "read verified source modifiers for mint, setOwner, setPoolSwapFee, collectProtocol" }
  - { priority: P1, question: "Which contract executes the posted 633.93 HOOD / 0.012 ETH buybacks, and does a 2026-09-02 tx match the post?", checked: "X 2026-09-02 buyback post; no buyback executor in gitbook Contract Addresses, 2026-09-03", next: "search HOOD transfers of 633.93 around 2026-09-02 and 2026-08-28" }
  - { priority: P1, question: "Does Tokenomics 50% of protocol revenue to HOOD buybacks match Revenue Sharing 95% to h33?", checked: "gitbook Tokenomics and Revenue Sharing, 2026-09-03", next: "read fee-split in verified PairFeesV3 0x626A38d4… and Masterchef" }
  - { priority: P1, question: "Is there an audit whose scope matches the Robinhood V2/V3 bytecode?", checked: "gitbook index, Official Links, DefiLlama audits 0, 2026-09-03", next: "search auditor report indexes for SwapHood and the PancakeV3Factory deploy" }
  - { priority: P2, question: "Gitbook Token Validator address 0xd69CAF31E52942a5519fd485CEDD0e7399B52c8 is 39 hex characters. What is the live address?", checked: "gitbook Contract Addresses Others table, 2026-09-03", next: "ask the project in public or match a 40-character TokenValidator on Blockscout from the same deployer" }
  - { priority: P2, question: "Are V2 Router 0x8F8056FE…, V3 Router 0x52909af7…, Masterchef 0x734c9ef2… and V3 Masterchef 0x9d91AE1F… the live swap and farm entry points?", checked: "gitbook Contract Addresses; RPC non-empty code on V2/V3 routers and V2 Masterchef this pass; no Blockscout pages pulled for routers", next: "Blockscout API v2 names and is_verified for those four, plus one swap tx to each router" }
---

# SwapHood — research packet

## What it is

A native AMM on Robinhood Chain with a SwapHood V2 constant-product factory and a PancakeV3Factory for concentrated liquidity. A user swaps or deposits into pools, stakes LP for HOOD, and can convert HOOD to xHOOD/h33 for fee buybacks. @SwapHoodFi runs it at swaphood.finance.

Themes: vault, rwa

## Why it matters

This is a Robinhood-native spot venue with its own V2 factory and a PancakeSwap-named V3 factory, not the canonical Uniswap deployment. HOOD emissions and a documented xHOOD/h33 fee path sit on top of those pools, so farm weights and the owner key affect both trading and the incentive token.

## What could go wrong

HOOD and the V3 factory `owner()` resolve to one externally owned account with no timelock found in this pass. Gitbook describes a 50% tax on xHOOD exit. Daily HOOD emission figures on X and two gitbook pages do not agree. The HOOD ticker is also used by the Robinhood-issued HOOD Stock Token at a different address.

## Product and mechanics

SwapHood documents V2 as a constant-product AMM that adds a 0.30% swap fee to reserves, and V3 as concentrated liquidity through a factory the explorer names PancakeV3Factory. Gitbook says LPs may deposit V2 or V3 positions into HOOD farms. [claim R-2 R-6] [verified R-14]

Gitbook Revenue Sharing describes a path from protocol fees to HOOD buybacks that raise h33 backing for xHOOD stakers (95% to h33), with a 50% tax on xHOOD exit streamed to remaining h33 holders. Tokenomics separately says HOOD receives 50% of protocol revenue via buybacks. [claim R-5 R-7]

@SwapHoodFi posted the same flywheel: liquidity to fees to HOOD buybacks to h33 backing, and that the team owns no HOOD and no LP. [claim R-10]

## Control and security

`owner()` on HOOD and PancakeV3Factory returns `0xe49C113adFf614Ac8DFC81F36E6A4848af1fadfb`, an address with no code. The same address created HOOD, xHOOD, h33, both factories and the WETH/HOOD pair. `owner()` on SwapHoodFactory reverted. Gitbook states the contracts are non-upgradeable. No timelock or Safe was located. [verified R-13 R-14 R-18 R-20]

DefiLlama sets audits to 0 on SwapHood V2 and V3. No audit report was located in gitbook or Official Links. [claim R-23 R-24]

## Team and provenance

swaphood.finance sets `twitter:site` to @SwapHoodFi. Gitbook Official Links lists swaphood.finance, @SwapHoodFi, Telegram SwapHood and Discord. The @SwapHoodFi bio links https://www.swaphood.finance/. No public repository URL was listed. [verified R-1 R-4 R-8]

Census Native AMMs up (@uponrh) and Fables (@fablesfi) share a product leaf only. [claim R-1 R-4]

The HOOD ticker is also used by the Robinhood-issued HOOD Stock Token at a different address; this token is SwapHood Token `0x1FcBc77a…`. [claim R-13]

## Economics and activity

DefiLlama on 2026-09-03 lists parent SwapHood TVL 16,765 USD on Robinhood Chain (V2 3,284.93 + V3 13,481.19), parent fees 65.05 USD / 24h, V2 volume 2,494 USD / 24h and V3 volume 61,998 USD / 24h. Those rows list Robinhood Chain only. [claim R-22 R-23 R-24 R-25 R-29 R-30]

DexScreener's SwapHood v2 HOOD/WETH pair `0xeA7ba72B…` showed 2,743.22 USD liquidity, 2,081.61 USD 24h volume, price 0.1104 USD and FDV 16,177. Blockscout reports 407 HOOD holders and total supply about 146,417 HOOD of a documented 5,000,000 max. [claim R-21] [verified R-13]

Daily HOOD emissions are posted as about 2,375 on X, 2,500 on Tokenomics, and 5,000 as the sum of the Farms table. CON-1 is open. [claim R-5 R-6 R-10]

## Material risks

- HOOD and PancakeV3Factory `owner()` is one EOA; no timelock was found. [verified R-18 R-20]
- Gitbook describes a 50% tax on xHOOD exit. [claim R-7]
- Daily HOOD emission figures conflict across X and two gitbook pages. [claim R-5 R-6 R-10]
- No audit report was located; Llama audits flag is 0. [claim R-23 R-24]
- HOOD ticker collides with the Robinhood HOOD Stock Token at a different address. [claim R-13]
- Gitbook Tokenomics 50% of revenue to HOOD buybacks is not the same split as Revenue Sharing 95% to h33. [claim R-5 R-7]

## Verification passes

- Receipts: swaphood.finance HTML, gitbook Welcome / Contract Addresses / Official Links / Tokenomics / Farms / Revenue Sharing, @SwapHoodFi profile and four posts, Blockscout API v2 for seven addresses plus three creation transactions, RPC eth_getCode/owner() at block 53080144, DexScreener HOOD pairs, and DefiLlama parent/V2/V3 plus fee and volume summaries were opened on 2026-09-03; excerpts are copied from those pages. [verified R-1 R-2 R-3 R-4 R-5 R-6 R-7 R-8 R-9 R-10 R-11 R-12 R-13 R-14 R-15 R-16 R-17 R-18 R-19 R-20 R-21 R-22 R-23 R-24 R-25 R-26 R-27 R-28 R-29 R-30]
- Numbers: TVL, volume and fees are Llama Robinhood Chain slices, not all-chains totals. Holder count 407 is Blockscout `holders_count`. Bytecode lengths are eth_getCode at block 53080144. HOOD total supply 146,417 is `total_supply` / 1e18. [claim R-22 R-23 R-24] [verified R-13 R-20]
- Adversarial: the strongest contrary reading is that this is imported PancakeSwap or the Robinhood HOOD Stock Token, or that it is census up / Fables. Explorer name PancakeV3Factory is a fork signal; creator and gitbook addresses are SwapHood's. HOOD here is SwapHood Token `0x1FcBc77a…`. up and Fables use different handles and tickers. [verified R-13 R-14] [claim R-4]

## Operations log

- Read content/census.yaml row swaphood (handle @SwapHoodFi, lifecycle mainnet, tree trading/amm-native), content/projects/swaphood.yaml, content/pulled/swaphood.yaml, content/feed/swaphood.yaml, content/sources/swaphood.yaml, content/accounts.yaml @SwapHoodFi, research/inbox/2026-08-31-ecosystem-map.yaml and x-fill 13/15/17.
- Opened https://www.swaphood.finance/ (twitter:site @SwapHoodFi), gitbook Welcome, Contract Addresses, Official Links, Tokenomics, Farms, Revenue Sharing; docs.swaphood.finance redirects to that gitbook.
- Opened https://x.com/SwapHoodFi and posts 2076428615948870029, 2095235208060752251, 2095077189716725833, 2094874530992800233.
- RPC eth_getCode / eth_blockNumber / owner() on https://rpc.mainnet.chain.robinhood.com at block 0x329f050.
- Blockscout API v2 for HOOD, PancakeV3Factory, SwapHoodFactory, h33, WETH/HOOD pair, owner EOA, xHOOD, and the HOOD / V3 / pair creation transactions.
- DexScreener https://api.dexscreener.com/token-pairs/v1/robinhood/0x1FcBc77a759e502E36836b7787C9A8B4f5Da666c.
- DefiLlama protocol/swaphood, swaphood-v2, swaphood-v3 and summary fees/dexs endpoints.
- No content/ writes. No merge. No push.
