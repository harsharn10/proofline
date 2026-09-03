---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: squeeze
name: Squeeze
packet_tier: seed
as_of: 2026-09-03T03:10:00Z
prior_packet: null
supersedes: null
owned_slugs: [squeeze]
allowed_paths:
  - research/inbox/packets/squeeze/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Squeeze
  aliases: []
  symbols: []
  entity_kind: tool
  chain_scope: robinhood-native
  official_domain: https://usesqueeze.xyz
  official_handle: "@UseSqueeze_RH"
  repository: https://github.com/eurotropica01-spec/squeeze
  possible_matches: []

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: [credit/lending-primitive]
  mechanism_tags: [analytics, oracle, lending]
  ecosystem_role: observe
  lifecycle: announced
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Tape v0 is an off-chain indexer: data/tape.json at 2026-09-02T21:01:19Z lists 5 of 11 Pons markets eligible on chain 4663 with shortInterestPct null. Site, docs and README state the Desk is not written or deployed. Blockscout search for Squeeze returns ticker tokens from Pons and Airlock, not SqueezeCore. [R-2] [R-5] [R-6] [R-11]"

qualifying:
  deployed_on_chain: { status: fail, claim_ids: [CLM-13], note: "Site, docs and README state no Desk contracts; Blockscout Squeeze hits are ticker tokens, not SqueezeCore" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-7], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-7, CLM-8], note: "" }

links:
  - { kind: site, url: "https://usesqueeze.xyz", authenticity: unconfirmed }
  - { kind: app, url: "https://usesqueeze.xyz/app/", authenticity: unconfirmed }
  - { kind: docs, url: "https://usesqueeze.xyz/docs/", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/UseSqueeze_RH", authenticity: confirmed }
  - { kind: github, url: "https://github.com/eurotropica01-spec/squeeze", authenticity: unconfirmed }

deployments:
  - label: Desk (SqueezeCore / SqueezeVault)
    role: other
    address:
      value: "NULL — site, docs and README state no Desk contracts are written or deployed; Blockscout search for Squeeze returned ticker tokens"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: null
      explorer_source_verified: null
    receipt_ids: [R-2, R-3, R-5, R-11]

metrics: []

reproductions:
  - { id: REP-1, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:58:00Z, receipt_ids: [R-11, R-12, R-13, R-14, R-15, R-16, R-17], result: "GET /api/v2/search?q=Squeeze returned 50 token rows, none named SqueezeCore or SqueezeVault. Top SQUEEZE tickers: 0xF444…3dA5 The Great Squeeze (DopplerERC20V1 / Airlock, 832 holders), 0x4188…3C73 Squeeze PonsV2LauncherToken (208), 0xCb83…E8c9 Squeeze PonsLauncherToken (184), 0xF571…f442 The Short Squeeze PonsV2LauncherToken (24). PonsLaunchLocker 0x736D…7F35 and PonsLaunchFactory 0xA5aA…1feB are_verified true." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:00:00Z, receipt_ids: [R-18], result: "eth_blockNumber 0x329f8c6 (53082310). eth_getCode non-empty: 0xF444…3dA5 44 bytes (EIP-1167), 0x4188…3C73 3247 bytes, 0xCb83…E8c9 5273 bytes, 0xF571…f442 3247 bytes, locker 0x736D…7F35 5425 bytes, factory 0xA5aA…1feB 24352 bytes." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T02:56:00Z, receipt_ids: [R-6, R-19, R-20, R-26], result: "tape.json generatedAt 2026-09-02T21:01:19Z chainId 4663 block 52874444 counts.eligible 5 of 11 (PONS YOLO HMM WIRE NASDANQ); shortInterestPct null on every row; contracts.factory 0xA5aA…1feB locker 0x736D…7F35. DexScreener robinhood pairs for 0x4188…3C73, 0xCb83…E8c9, 0xF444…3dA5, 0xF571…f442. api.llama.fi/protocol/squeeze twitter Squeezerun chains [Base] module dummy.js, not UseSqueeze_RH." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-2, R-5, R-7, R-21], result: "@UseSqueeze_RH posted https://usesqueeze.xyz/site/ on 2026-09-02T13:40:11Z. usesqueeze.xyz and GitHub site HTML link github.com/eurotropica01-spec/squeeze. GitHub user eurotropica01-spec twitter_username null, blog empty, homepage null. Site and docs HTML do not contain UseSqueeze_RH or x.com. Flag unconfirmed-official." }
  - { id: REP-5, method: document-scope, checked_at: 2026-09-03T02:48:00Z, receipt_ids: [R-2, R-3, R-4, R-5], result: "README status table: Tape live, oracle verification live, Desk not built, Token does not exist. Docs Contracts: None deployed. App: Token does not exist. Site: no token, no presale, no contract address. Docs $SQUEEZE section still describes a fixed-supply Pons launch and an 80/20 buyback split." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Tape v0 is an off-chain indexer that reads Pons Uniswap v3 TOKEN/WETH pools on chain 4663 and writes a Setup Score. The planned Desk would post ETH at 150% margin, borrow the token, and sell it into that pool in one transaction. Short-interest fields stay null until a vault exists.", class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-2, R-3, R-5, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://usesqueeze.xyz", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-2, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@UseSqueeze_RH", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: identity.repository, value: "https://github.com/eurotropica01-spec/squeeze", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-2, R-5, R-21], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: announced, class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-2, R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: taxonomy.primary-leaf, value: tooling/scanner, class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-2, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: product.mechanism, value: "Listing gate: cardinality > 1 before any observe() price is trusted. A one-observation V3 pool still answers observe(1800) by extrapolating spot. tape.json IMAGINE/HOOJA/KANSO rows carry oracleNote cardinality 1. Planned liquidation needs both 30m and 5m TWAP to breach.", class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-3, R-5, R-6, R-8], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-8, field: activity.status, value: "tape.json 2026-09-02T21:01:19Z: 5 of 11 markets eligible (PONS, YOLO, HMM, WIRE, NASDANQ). shortInterestPct, daysToCover, utilization, borrowApr null on every row.", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-9, field: identity.symbol, value: "No Squeeze token, presale or contract address is published. Site, README and app state a ticker shown as Squeeze is not this product.", class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-10, field: identity.symbol, value: "Docs $SQUEEZE section: fixed supply, launched on Pons; 10% of borrow interest to the protocol, 80% buyback and burn, 20% Backstop; staking cuts borrow rate.", class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-3], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-11, field: relationship, value: "Tape reads PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB and PonsLaunchLocker 0x736D76699C26D0d966744cAe304C000d471f7F35. Those addresses are Pons, not Squeeze Desk contracts.", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3, R-6, R-16, R-17, R-18], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-12, field: relationship, value: "Ticker-only collision. SQUEEZE CAs on 4663 include 0xF444…3dA5 The Great Squeeze (Airlock/Doppler, DexScreener/Llama twitter Squeezerun), 0x4188…3C73 Squeeze (Pons v2, squeezefi.fun), 0xCb83…E8c9 Squeeze (PonsLauncherToken), 0xF571…f442 The Short Squeeze (Pons v2, 2026-08-30). Flag ca-collision.", class: verified, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-11, R-12, R-13, R-14, R-15, R-19, R-20, R-22, R-26], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-13, field: deployment.address, value: "NULL — no SqueezeCore, SqueezeVault, ListingRegistry or SqueezeToken address is published; explorer Squeeze search did not return those names", class: claim, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-3, R-5, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: "account.@UseSqueeze_RH.role", value: project, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: "account.@UseSqueeze_RH.slug", value: squeeze, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: "account.@UseSqueeze_RH.note", value: "Bio: borrow desk and short interest tape for Robinhood Chain. Posted usesqueeze.xyz/site/ 2026-09-02. Site and GitHub do not name the handle. Flag unconfirmed-official. Followers 10 this pass.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-7, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "Docs: No contracts are deployed and no code has been audited. No audit report was located on the site, docs, GitHub README or X this pass.", class: unknown, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "@UseSqueeze_RH posted https://usesqueeze.xyz/site/ on 2026-09-02T13:40:11Z with the line Mind you we are still in beta fase.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: relationship, value: "DefiLlama protocol slug squeeze is twitter Squeezerun, category Launchpad, chains [Base], module dummy.js. That row is not @UseSqueeze_RH / usesqueeze.xyz. Flag third-party-link.", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-20], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: identity.symbol, value: "@UseSqueeze_RH 2026-08-31T18:14:40Z video post ended We are starting small $SQUEEZE.", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: taxonomy.secondary-leaf, value: credit/lending-primitive, class: claim, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: identity.symbol
    claim_ids: [CLM-9, CLM-10, CLM-21]
    material_effect: "A live SQUEEZE ticker can be read as this product's token while the site says none exists"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "PonsLauncherToken named Squeeze created at 0xCb83…E8c9"
    summary: "0xCb838351…E8c9 symbol SQUEEZE, PonsLauncherToken, created 2026-09-03T01:47:58Z. DexScreener pair liq about $25.5k."
    occurred_at: 2026-09-03T01:47:58Z
    observed_at: 2026-09-03T02:58:00Z
    affected_fields: [identity.symbol, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13, R-19]
  - id: EVT-2
    type: onchain
    title: "Pons v2 token named Squeeze created at 0x4188…3C73"
    summary: "0x418846BC…3C73 symbol SQUEEZE via PonsV2LaunchAndBuy at 2026-09-03T01:44:42Z. squeezefi.fun lists this CA."
    occurred_at: 2026-09-03T01:44:42Z
    observed_at: 2026-09-03T02:58:00Z
    affected_fields: [identity.symbol, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12, R-19, R-22, R-27]
  - id: EVT-3
    type: onchain
    title: "tape.json refresh: 5 of 11 Pons markets eligible"
    summary: "GitHub data/tape.json generatedAt 2026-09-02T21:01:19Z block 52874444; eligible PONS YOLO HMM WIRE NASDANQ."
    occurred_at: 2026-09-02T21:01:19Z
    observed_at: 2026-09-03T02:56:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-4
    type: company
    title: "@UseSqueeze_RH posted usesqueeze.xyz/site/ as beta"
    summary: "The account posted Mind you we are still in beta fase and the URL https://usesqueeze.xyz/site/."
    occurred_at: 2026-09-02T13:40:11Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-5
    type: company
    title: "@UseSqueeze_RH posted it will publish short interest"
    summary: "The account posted that no coin on the chain has been borrowed and that it will publish short interest."
    occurred_at: 2026-08-31T23:02:10Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-6
    type: company
    title: "@UseSqueeze_RH posted short interest is zero"
    summary: "The account posted short interest is zero, and that a scan found 197 positions across 8 markets holding $38.5M."
    occurred_at: 2026-08-31T20:29:58Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-7
    type: company
    title: "@UseSqueeze_RH posted Tape live and Desk not built"
    summary: "Thread: Tape and oracle verification live; Desk not built; no contracts; 5 of 11 markets clear listing criteria."
    occurred_at: 2026-08-30T23:07:00Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [product.mechanism, lifecycle, deployment.address]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-8
    type: risk
    title: "Pons v2 The Short Squeeze created at 0xF571…f442"
    summary: "0xF571Dd79…f442 symbol SQUEEZE, PonsV2LaunchFactory launchToken at 2026-08-30T21:37:36Z, same evening as Tape thread."
    occurred_at: 2026-08-30T21:37:36Z
    observed_at: 2026-09-03T02:58:00Z
    affected_fields: [identity.symbol, relationship]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14, R-28]

receipts:
  - { id: R-1, publisher: "@UseSqueeze_RH", title: "Squeeze profile", url: "https://x.com/UseSqueeze_RH", published_at: null, accessed_at: 2026-09-03T02:45:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-14, CLM-15, CLM-16], excerpt: "Display name Squeeze, handle @UseSqueeze_RH. Bio: The borrow desk and short interest tape for Robinhood Chain. Short interest doesn't exist here yet. We're building the market that creates it. Followers 10. Blue Verified. User id 2093819129090236416." }
  - { id: R-2, publisher: Squeeze, title: "usesqueeze.xyz marketing site", url: "https://usesqueeze.xyz/site/", published_at: null, accessed_at: 2026-09-03T02:46:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-5, CLM-6, CLM-9, CLM-13], excerpt: "The borrow desk and short interest tape for Robinhood Chain. The Tape (v0) live. Oracle verification live. The Desk mockup, no contracts deployed or written. There is no token, no presale and no contract address. Anyone showing you one for Squeeze is not us. GitHub https://github.com/eurotropica01-spec/squeeze. Open the Terminal /app/." }
  - { id: R-3, publisher: Squeeze, title: "Squeeze Protocol docs", url: "https://usesqueeze.xyz/docs/", published_at: null, accessed_at: 2026-09-03T02:47:00Z, kind: docs, authority: primary, authenticity: unconfirmed, supports: [CLM-1, CLM-5, CLM-7, CLM-10, CLM-11, CLM-13, CLM-17, CLM-22], excerpt: "Status: tape v0 live desk not built. The indexer reads live chain state; no contracts are deployed. Contracts: None deployed. Planned SqueezeCore, SqueezeVault, SqueezeOracle, SqueezeToken. $SQUEEZE: Fixed supply, launched on Pons itself. Fees: 10% of all borrow interest; 80% buyback and burn, 20% Backstop Fund. locker 0x736D76699C26D0d966744cAe304C000d471f7F35." }
  - { id: R-4, publisher: Squeeze, title: "Terminal", url: "https://usesqueeze.xyz/app/", published_at: null, accessed_at: 2026-09-03T02:47:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-9], excerpt: "What is actually built: The Tape live, Oracle verification live, Wallet reads live, Short function live prices simulated capital. Vault contract not built. On-chain borrow and settlement not built. Liquidation keeper not built. Token does not exist. Nothing is signed and nothing is spent." }
  - { id: R-5, publisher: eurotropica01-spec, title: "squeeze README", url: "https://github.com/eurotropica01-spec/squeeze", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-7, CLM-9, CLM-13], excerpt: "The Tape (v0) Live. Oracle verification Live. The Desk Not built. No contracts written, none deployed, nothing audited. Token Does not exist. No presale, no contract address. Anyone showing you one is not us. Short-interest fields in the dataset are null everywhere by design. MIT License. Created 2026-08-29T13:42:47Z." }
  - { id: R-6, publisher: eurotropica01-spec, title: "data/tape.json", url: "https://raw.githubusercontent.com/eurotropica01-spec/squeeze/main/data/tape.json", published_at: 2026-09-02T21:01:19Z, accessed_at: 2026-09-03T02:56:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-8, CLM-11, EVT-3], excerpt: "$schema squeeze-tape-v0 generatedAt 2026-09-02T21:01:19.328Z chainId 4663 block 52874444. note: v0 Setup Score on proxy data. This is NOT short interest. counts total 11 eligible 5. contracts factory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB locker 0x736D76699C26D0d966744cAe304C000d471f7F35. Eligible PONS YOLO HMM WIRE NASDANQ. shortInterestPct null on every row." }
  - { id: R-7, publisher: "@UseSqueeze_RH", title: "beta fase site post", url: "https://x.com/UseSqueeze_RH/status/2095144759559946394", published_at: 2026-09-02T13:40:11Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-15, CLM-16, CLM-19, EVT-4], excerpt: "Mind you we are still in beta fase https://usesqueeze.xyz/site/" }
  - { id: R-8, publisher: "@UseSqueeze_RH", title: "Tape live, Desk not built", url: "https://x.com/UseSqueeze_RH/status/2094200242098856364", published_at: 2026-08-30T23:07:00Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-7, EVT-7], excerpt: "Here is what is actually built, plainly. The Tape is live and reads the chain directly with no API key and no dependencies. The oracle verification is live. The Desk is not built. No contracts are written and none are deployed. Short interest fields in the data are null everywhere. Right now 5 of 11 markets clear every listing criterion. $PONS 20,000 observations, $HMM 14,400." }
  - { id: R-9, publisher: "@UseSqueeze_RH", title: "Short interest is zero", url: "https://x.com/UseSqueeze_RH/status/2094523111110500731", published_at: 2026-08-31T20:29:58Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "The short interest across every coin on Robinhood Chain right now is zero. Not low. Zero. We scanned the chain and found 197 positions across 8 markets holding 38.5 million dollars that cannot get out. $PONS carries a 291 million dollar market cap and roughly 156 thousand dollars of selling moves the price ten percent." }
  - { id: R-10, publisher: "@UseSqueeze_RH", title: "Three coins and 25k / $SQUEEZE", url: "https://x.com/UseSqueeze_RH/status/2094489060504895620", published_at: 2026-08-31T18:14:40Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-21], excerpt: "Three coins and 25k in a wallet. That is where we are today. We intend to be the place you go when you want to short something no exchange is ever going to list. We are starting small $SQUEEZE" }
  - { id: R-11, publisher: Blockscout, title: "Search Squeeze on chain 4663", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=Squeeze", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-13], excerpt: "items n=50, all type token. First rows: 0xF444F3C77C77a33F7c8d8fcab8a1E88aFb843dA5 The Great Squeeze SQUEEZE; 0x418846BCFd36BF0c57f98bE5796697Eb29363C73 Squeeze SQUEEZE; 0xCb838351Ab0461d2966bA3c32e4BBF13fE81E8c9 Squeeze SQUEEZE; 0xF571Dd797561145aE5eA8b2014191f8796f2f442 The Short Squeeze SQUEEZE. No SqueezeCore or SqueezeVault name." }
  - { id: R-12, publisher: Blockscout, title: "Address 0x4188…3C73 Squeeze", url: "https://robinhoodchain.blockscout.com/address/0x418846BCFd36BF0c57f98bE5796697Eb29363C73", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, EVT-2], excerpt: "hash 0x418846BCFd36BF0c57f98bE5796697Eb29363C73 name PonsV2LauncherToken is_contract true is_verified true creator 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 tx 0x598f59a1…. Token symbol SQUEEZE name Squeeze holders_count 208 total_supply 1e27." }
  - { id: R-13, publisher: Blockscout, title: "Address 0xCb83…E8c9 Squeeze", url: "https://robinhoodchain.blockscout.com/address/0xCb838351Ab0461d2966bA3c32e4BBF13fE81E8c9", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, EVT-1], excerpt: "hash 0xCb838351Ab0461d2966bA3c32e4BBF13fE81E8c9 name PonsLauncherToken is_contract true is_verified true creator 0x1cbaF24D53fe930fCe8EFF149fA797D2611Da149 tx 0x8a50daff…. Token symbol SQUEEZE name Squeeze holders_count 184 total_supply 1e27." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xF571…f442 The Short Squeeze", url: "https://robinhoodchain.blockscout.com/address/0xF571Dd797561145aE5eA8b2014191f8796f2f442", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, EVT-8], excerpt: "hash 0xF571Dd797561145aE5eA8b2014191f8796f2f442 name PonsV2LauncherToken is_contract true is_verified true creator 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 tx 0xbc9b52d8…. Token symbol SQUEEZE name The Short Squeeze holders_count 24." }
  - { id: R-15, publisher: Blockscout, title: "Address 0xF444…3dA5 The Great Squeeze", url: "https://robinhoodchain.blockscout.com/address/0xF444F3C77C77a33F7c8d8fcab8a1E88aFb843dA5", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "hash 0xF444F3C77C77a33F7c8d8fcab8a1E88aFb843dA5 name The Great Squeeze is_contract true is_verified true proxy_type eip1167 implementation DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator 0x1B37D3a72082029c44B35B604Ea473617580b69a tx 0x3125c81f…. Token symbol SQUEEZE holders_count 832 circulating_market_cap 310329.28." }
  - { id: R-16, publisher: Blockscout, title: "PonsLaunchLocker 0x736D…7F35", url: "https://robinhoodchain.blockscout.com/address/0x736D76699C26D0d966744cAe304C000d471f7F35", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "hash 0x736D76699C26D0d966744cAe304C000d471f7F35 name PonsLaunchLocker is_contract true is_verified true creator 0xda4bCee76B29EFEc9697Fcf663601c2042043968." }
  - { id: R-17, publisher: Blockscout, title: "PonsLaunchFactory 0xA5aA…1feB", url: "https://robinhoodchain.blockscout.com/address/0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB name PonsLaunchFactory is_contract true is_verified true creator 0xda4bCee76B29EFEc9697Fcf663601c2042043968." }
  - { id: R-18, publisher: Robinhood Chain RPC, title: "eth_getCode on ticker and Pons addresses", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, CLM-12], excerpt: "eth_blockNumber 0x329f8c6 (53082310). eth_getCode non-empty: 0xF444…3dA5 44 bytes, 0x4188…3C73 3247 bytes, 0xCb83…E8c9 5273 bytes, 0xF571…f442 3247 bytes, 0x736D…7F35 5425 bytes, 0xA5aA…1feB 24352 bytes." }
  - { id: R-19, publisher: DexScreener, title: "Robinhood SQUEEZE pairs", url: "https://api.dexscreener.com/latest/dex/search?q=SQUEEZE", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12, EVT-1, EVT-2], excerpt: "chainId robinhood pairs include 0xF444F3C77C77a33F7c8d8fcab8a1E88aFb843dA5 The Great Squeeze, 0x418846BCFd36BF0c57f98bE5796697Eb29363C73 Squeeze, 0xCb838351Ab0461d2966bA3c32e4BBF13fE81E8c9 Squeeze, 0xF571Dd797561145aE5eA8b2014191f8796f2f442 The Short Squeeze." }
  - { id: R-20, publisher: DefiLlama, title: "protocol/squeeze", url: "https://api.llama.fi/protocol/squeeze", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-20], excerpt: "name Squeeze twitter Squeezerun url empty category Launchpad chains [Base] module dummy.js description Squeeze — multi-chain token launchpad (Base + Robinhood via Doppler Airlock, Solana via Raydium LaunchLab. currentChainTvls empty on this pass." }
  - { id: R-21, publisher: GitHub, title: "eurotropica01-spec/squeeze repo", url: "https://api.github.com/repos/eurotropica01-spec/squeeze", published_at: 2026-08-29T13:42:47Z, accessed_at: 2026-09-03T02:56:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-4, CLM-16], excerpt: "html_url https://github.com/eurotropica01-spec/squeeze description The borrow desk and short interest tape for Robinhood Chain. homepage null created_at 2026-08-29T13:42:47Z pushed_at 2026-09-02T21:01:20Z default_branch main license MIT. User eurotropica01-spec twitter_username null blog empty public_repos 1." }
  - { id: R-22, publisher: squeezefi.fun, title: "$SQUEEZE they shorted it we bought it", url: "https://www.squeezefi.fun/", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-12, EVT-2], excerpt: "ticker $SQUEEZE chain robinhood chain · 4663 follow us @squeezefi. contract 0x418846bcfd36bf0c57f98be5796697eb29363c73. Trading fees buy the most-shorted tokenized stocks on Robinhood Chain every hour. vault balance $0 stocks bought 0." }
  - { id: R-23, publisher: "@UseSqueeze_RH", title: "The name is not decoration", url: "https://x.com/UseSqueeze_RH/status/2094561411456180227", published_at: 2026-08-31T23:02:10Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "That move cannot happen to any coin on this chain today, because not one of them has ever been borrowed. We will publish the short interest, so you can see the fuel before it lights." }
  - { id: R-24, publisher: DexScreener, title: "token-pairs The Great Squeeze", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xF444F3C77C77a33F7c8d8fcab8a1E88aFb843dA5", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12], excerpt: "uniswap The Great Squeeze SQUEEZE 0xF444F3C77C77a33F7c8d8fcab8a1E88aFb843dA5 liq 219871.11 vol24 2563.99 fdv 287242 pair 0x3b054359e248009e797afbcfa975fa4cf5147d503421af53f179be1abf63d46f created 1783882494000 (2026-07-12T18:54:54Z)." }
  - { id: R-25, publisher: DexScreener, title: "token-pairs Squeeze 0x4188", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x418846BCFd36BF0c57f98bE5796697Eb29363C73", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12], excerpt: "uniswap Squeeze SQUEEZE 0x418846BCFd36BF0c57f98bE5796697Eb29363C73 liq 6729.36 vol24 260110.63 fdv 5495 pair 0x946af648d47ef236c3c8c65b54270a638e75cf22f887917c10d96225b699651e created 1788399907000 (2026-09-03T01:45:07Z)." }
  - { id: R-26, publisher: DexScreener, title: "token-pairs Squeeze 0xCb83", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xCb838351Ab0461d2966bA3c32e4BBF13fE81E8c9", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-12], excerpt: "uniswap Squeeze SQUEEZE 0xCb838351Ab0461d2966bA3c32e4BBF13fE81E8c9 liq 25537.54 vol24 35451.53 fdv 22899 pair 0xf87650e4050112e22e310865a6bceaa6a0e37a6690292b53d801cab34dcf26ae created 1788400088000 (2026-09-03T01:48:08Z)." }
  - { id: R-27, publisher: Blockscout, title: "tx 0x598f59a1… PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/tx/0x598f59a1d6f283041977e89408ca5a519218bd5afc8f63479becabdb9cd83553", published_at: 2026-09-03T01:44:42Z, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-2], excerpt: "timestamp 2026-09-03T01:44:42.000000Z status ok from 0xdDf0c8cf42B1aF582624F897854778E6d08b0e77 to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy block 53040123." }
  - { id: R-28, publisher: Blockscout, title: "tx 0xbc9b52d8… PonsV2 launchToken", url: "https://robinhoodchain.blockscout.com/tx/0xbc9b52d8c03de68e9976eb2fb66bf26a0c074de0d7ef06db43f0ce557ad6a209", published_at: 2026-08-30T21:37:36Z, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [EVT-8], excerpt: "timestamp 2026-08-30T21:37:36.000000Z status ok from 0x5C0d4e0C9B4b680bd4AB14e9aEcec581685Edc00 to PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e method launchToken block 50334689." }

gaps:
  - { priority: P0, question: "Is any Desk contract deployed under a name other than Squeeze?", checked: "Blockscout search Squeeze, docs Contracts none, README, app, RPC getCode on the four SQUEEZE tickers, 2026-09-03", next: "watch github eurotropica01-spec/squeeze for a contracts/ tree or a published address" }
  - { priority: P0, question: "Does usesqueeze.xyz or the GitHub org name @UseSqueeze_RH, or the handle name the GitHub user?", checked: "site HTML, docs HTML, GitHub API twitter_username/blog/homepage, X bio, 2026-09-03", next: "record a bidirectional link if the site footer or GitHub profile adds the handle" }
  - { priority: P1, question: "Which if any SQUEEZE ticker is this product, given docs $SQUEEZE copy and the X $SQUEEZE line?", checked: "site no-token line, docs $SQUEEZE section, X 2094489060504895620, explorer four CAs, 2026-09-03", next: "wait for a CA in the GitHub README or a handle post that names one address" }
  - { priority: P2, question: "Where is the Tape hosted besides GitHub raw and usesqueeze.xyz?", checked: "netlify.toml in the repo, no custom domain on GitHub homepage, 2026-09-03", next: "resolve DNS for usesqueeze.xyz to the Netlify account if a Desk ships" }
---

# Squeeze — research packet

## What it is

An off-chain Uniswap v3 TWAP scanner for Robinhood Chain Pons TOKEN/WETH pools. It publishes a Setup Score from pool depth, holders, oracle cardinality and 5m/30m divergence; short-interest fields stay null until a borrow market exists. The planned Desk would post ETH, borrow a listed token and sell it into that pool. Site, docs and README state no Desk contracts are written or deployed. @UseSqueeze_RH posted usesqueeze.xyz; the indexer is github.com/eurotropica01-spec/squeeze.

Themes: tooling
