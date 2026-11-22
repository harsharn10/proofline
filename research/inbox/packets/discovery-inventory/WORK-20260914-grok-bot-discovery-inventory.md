---
# Packet v2 (docs/research-system.md §5). Discovery inventory seed.
contract_version: proofline-research-v2
work_id: WORK-20260914-grok-bot-discovery-inventory
producer: grok-bot
role: collector
base_sha: 2497cfc12313a6107017493af1271e650ac50697
slug: discovery-inventory
name: Discovery inventory 2026-09-14
packet_tier: seed
as_of: 2026-09-14T13:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260914-grok-bot-discovery-inventory.md

identity:
  canonical_name: Discovery inventory 2026-09-14
  aliases: []
  symbols: []
  entity_kind: unknown
  chain_scope: unknown
  official_domain: "NULL — inventory packet"
  official_handle: "NULL — inventory packet"
  repository: "NULL — inventory packet"
  possible_matches: []

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [other]
  ecosystem_role: observe
  lifecycle: unknown
  coverage_recommendation: candidate
  evidence_state: partly-verified
  rationale: "Weekday discovery round 2026-09-14. Assigned Floor lead is already census slug floor. One protocol lead not on the census: Canopy / @canopyfinance / canopyfinance.io. Site and handle name each other; CNPY 0x532c5583671870723CEEf573600208aF49c87c54 was reproduced on chain 4663; facilitator docs and /supported name eip155:4663. Distinct from DefiLlama Movement Canopy. Open PR #163 already inventoried arcus."

qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: "inventory packet; candidate deployments are on the Canopy claims, not this inventory identity" }
  native_play:       { status: unknown, claim_ids: [], note: "inventory packet" }
  citable:           { status: unknown, claim_ids: [], note: "inventory packet" }
  research_story:    { status: unknown, claim_ids: [], note: "inventory packet" }

links:
  - { kind: site, url: "https://canopyfinance.io/", authenticity: confirmed }
  - { kind: app, url: "https://agen.space/", authenticity: confirmed }
  - { kind: app, url: "https://v4.fun/", authenticity: unconfirmed }
  - { kind: app, url: "https://flow.canopyfinance.io/", authenticity: confirmed }
  - { kind: docs, url: "https://facilitator.canopyfinance.io/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/canopyfinance", authenticity: confirmed }
  - { kind: github, url: "https://github.com/canopyfinance", authenticity: unconfirmed }
  - { kind: github, url: "https://github.com/canopyfinance/x402-rwa", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x532c5583671870723CEEf573600208aF49c87c54", authenticity: confirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0xd05d2c3d696fcb893aee6607e3652accd2aedf97", authenticity: confirmed }
  - { kind: other, url: "https://api.coingecko.com/api/v3/coins/canopy-finance", authenticity: confirmed }
  - { kind: other, url: "https://api.llama.fi/protocol/agen.space", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/canopytg", authenticity: unconfirmed }

deployments:
  - label: CNPY token (RPC name Canopy Finance, symbol CNPY, ERC-20)
    role: token
    address:
      value: "0x532c5583671870723CEEf573600208aF49c87c54"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-14
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-4]

metrics:
  - { kind: market_cap, value: 753191, currency: USD, as_of: 2026-09-14T13:34:40Z, window: point, method: "api.coingecko.com/api/v3/coins/canopy-finance market_data.market_cap.usd; platforms.robinhood 0x532c5583671870723ceef573600208af49c87c54", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 141401.27, currency: USD, as_of: 2026-09-14T13:37:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x532c5583671870723ceef573600208af49c87c54 Uniswap v2 CNPY/WETH pair 0xD05d2c3D696Fcb893aeE6607E3652accd2aEDf97 volume.h24", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 2343, currency: null, as_of: 2026-09-14T13:36:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x532c5583671870723ceef573600208af49c87c54 holders_count", class: claim, receipt_ids: [R-3] }

reproductions:
  - { id: REP-1, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-14T13:36:30Z, receipt_ids: [R-1, R-2], result: "canopyfinance.io navigation includes Canopy Finance and Get $CNPY; @canopyfinance profile website field is canopyfinance.io and bio publishes CNPY 0x532c5583671870723ceef573600208af49c87c54" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-14T13:38:18Z, receipt_ids: [R-4], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x3befeb3 (62849398). eth_getCode CNPY 6281 B. name() Canopy Finance; symbol() CNPY; decimals() 9; totalSupply() 1e18; owner() 32 zero bytes. Relayer 0x43A047aE…17Ff code 0 B; Permit2 0x000000000022D473…78BA3 code 9152 B (Uniswap canonical, not a Canopy-owned listing). Creation tx 0xbce2c774…810f block 7120972 timestamp 2026-07-11T17:25:44Z." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-14T13:36:00Z, receipt_ids: [R-3], result: "Blockscout api/v2 address 0x532c5583671870723CEEf573600208aF49c87c54 is_contract true is_verified true name CNPY proxy_type null; token Canopy Finance / CNPY / 9 decimals; creator 0x9fdC6782…2F65; creation_transaction_hash 0xbce2c77470ebfe9c7e772c961f8996297aab5b3aefc477d6848ecc3499f2810f. Later api/v2 calls for other addresses returned HTTP 403." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-14T13:37:10Z, receipt_ids: [R-5, R-6], result: "GET facilitator.canopyfinance.io/supported returns network eip155:4663 scheme exact-permit2-v2 asset USDG 0x5fc5360D…d168 Permit2 0x000000000022D473…78BA3 relayer/spender 0x43A047aE…17Ff generatedAt 2026-09-14T13:37:10.222Z. /health status ok chainId 4663. Docs page names the same CAIP-2 and labels the facilitator pre-audit." }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-14T13:36:45Z, receipt_ids: [R-7, R-8], result: "CoinGecko canopy-finance platforms.robinhood 0x532c5583671870723ceef573600208af49c87c54 homepage https://canopyfinance.io/ twitter_screen_name canopy_finance preview_listing false. DexScreener same token: websites https://canopyfinance.io/ and socials https://x.com/canopyfinance." }

claims:
  - { id: CLM-1, field: candidate, value: "canopy | Canopy | @canopyfinance | canopyfinance.io | NL-to-v4 launcher and agent stack; ticker CNPY", class: claim, observed_at: 2026-09-14T13:36:30Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "Official site canopyfinance.io and handle @canopyfinance name each other; the handle bio publishes the CNPY address", class: verified, observed_at: 2026-09-14T13:36:30Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@canopyfinance", class: verified, observed_at: 2026-09-14T13:36:30Z, receipt_ids: [R-2], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-4, field: identity.symbol, value: "CNPY", class: verified, observed_at: 2026-09-14T13:38:18Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: taxonomy.primary-leaf, value: "canopy | launch/uni-pool-launch", class: claim, observed_at: 2026-09-14T13:36:30Z, receipt_ids: [R-1, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: taxonomy.secondary-leaf, value: "canopy | agents/agent-launch-layer", class: claim, observed_at: 2026-09-14T13:36:30Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: taxonomy.entity-kind, value: "canopy | protocol", class: claim, observed_at: 2026-09-14T13:36:30Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: taxonomy.chain-scope, value: "canopy | robinhood-native", class: claim, observed_at: 2026-09-14T13:37:10Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-9, field: lifecycle, value: "canopy | beta", class: claim, observed_at: 2026-09-14T13:36:30Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "Site: Agen turns a plain-language market description into Uniswap v4 launch logic; products named agen.space, Agen AI, Agen App, Agen MCP, and v4.fun. Facilitator docs: x402 exact-permit2-v2 USDG settlement on eip155:4663 via canonical Permit2, labelled pre-audit and non-custodial.", class: claim, observed_at: 2026-09-14T13:37:10Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: deployment.address, value: "0x532c5583671870723CEEf573600208aF49c87c54", class: verified, observed_at: 2026-09-14T13:38:18Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-12, field: relationship, value: "v4.fun / @v4dotfun profile text: The tech launchpad of @RobinhoodApp / Powered by @canopyfinance / $CNPY. Site canopyfinance.io links Visit v4.fun. This inventory does not mint a separate v4fun seed.", class: claim, observed_at: 2026-09-14T13:37:40Z, receipt_ids: [R-1, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: relationship, value: "agen.space is listed on canopyfinance.io. @agendotspace profile text: Built by @Canopy_Finance / 0x532c5583671870723ceef573600208af49c87c54. That mention uses the skip handle @Canopy_Finance, not @canopyfinance.", class: claim, observed_at: 2026-09-14T13:37:40Z, receipt_ids: [R-1, R-13, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: identity.handle, value: "CoinGecko twitter_screen_name canopy_finance for id canopy-finance; GET api.fxtwitter.com/canopy_finance returned HTTP 404 this round", class: claim, observed_at: 2026-09-14T13:39:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: "account.@Canopy_Finance.flag", value: "handle-collision", class: claim, observed_at: 2026-09-14T13:39:00Z, receipt_ids: [R-13, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: "account.@canopyfinance.slug", value: "canopy", class: claim, observed_at: 2026-09-14T13:39:00Z, receipt_ids: [R-2, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: other, value: "Assigned Floor lead skipped: content/census.yaml already has slug floor / name Floor / handle @Floor_fi / site floorfi.app / symbols FLR and FLOOR. accounts.yaml watch row @Floor_fi note Ticker FLR not FLOOR.", class: claim, observed_at: 2026-09-14T13:35:00Z, receipt_ids: [R-14, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: other, value: "No content/census.yaml row for Canopy, canopyfinance.io, @canopyfinance, agen.space, or 0x532c5583671870723CEEf573600208aF49c87c54 on main 2497cfc. Open producer packets: #163 inventories arcus only.", class: claim, observed_at: 2026-09-14T13:35:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: security.audit, value: "Facilitator docs label the x402 facilitator pre-audit. Llama protocol agen.space audits field is 0. No audit report URL was copied from canopyfinance.io, GitHub user canopyfinance, or the facilitator docs this round.", class: claim, observed_at: 2026-09-14T13:40:00Z, receipt_ids: [R-6, R-9, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: control.owner, value: "owner() on CNPY 0x532c5583671870723CEEf573600208aF49c87c54 returned 32 zero bytes at block 62849398. Creator EOA 0x9fdC67823988bf7AcC68aCd8c547E39b21162F65 has no code. Facilitator relayer 0x43A047aE20bd92eD3a37610062b48Dc314fD17Ff has no code.", class: verified, observed_at: 2026-09-14T13:38:18Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-21, field: relationship, value: "DefiLlama protocol slug canopy is Movement-chain Canopy (url app.canopyhub.xyz, twitter canopyxyz), not canopyfinance.io. Llama protocol agen.space lists Robinhood Chain with empty currentChainTvls.", class: claim, observed_at: 2026-09-14T13:37:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.repository, value: "GitHub user canopyfinance (html_url https://github.com/canopyfinance) has public_repos 1, blog empty, created_at 2026-07-11T17:57:27Z. Repo x402-rwa README uses chainId 4663 and settleToken USDG. Username matches the X handle; the GitHub blog field does not name canopyfinance.io.", class: claim, observed_at: 2026-09-14T13:40:30Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "Follow-list profile bios were recovered; x.com status bodies were not. api.fxtwitter.com user objects returned for @canopyfinance, @Floor_fi, @sluice_rh, @ponsdotfamily, @v4dotfun, @agendotspace, @0xSammy, @RHDaily__. Tweet list endpoints 404; jina.ai/x.com 403; nitter SSL error; syndication.twitter.com empty body.", class: claim, observed_at: 2026-09-14T13:40:00Z, receipt_ids: [R-2, R-12, R-13, R-17], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: identity.handle
    claim_ids: [CLM-3, CLM-14]
    material_effect: "Official profile recovered this round is @canopyfinance; CoinGecko lists twitter_screen_name canopy_finance, which 404ed on the same profile API. DexScreener socials use https://x.com/canopyfinance."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "CNPY ERC-20 created on chain 4663"
    summary: "Creation tx 0xbce2c774…810f from 0x9fdC6782…2F65 at block 7120972 (2026-07-11T17:25:44Z) deployed 0x532c5583671870723CEEf573600208aF49c87c54. RPC this round: name Canopy Finance, symbol CNPY, 6281 bytes of code, exists_on_4663 true."
    account: null
    occurred_at: 2026-07-11T17:25:44Z
    observed_at: 2026-09-14T13:38:18Z
    affected_fields: [deployment.address, identity.symbol, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-3, R-4]
  - id: EVT-2
    type: company
    title: "Facilitator API names Robinhood Chain 4663"
    summary: "GET https://facilitator.canopyfinance.io/supported at 2026-09-14T13:37:10.222Z returned network eip155:4663, scheme exact-permit2-v2, USDG 0x5fc5360D…d168, Permit2 0x000000000022D473…78BA3, relayer 0x43A047aE…17Ff. Docs on the same host label the facilitator pre-audit."
    account: null
    occurred_at: 2026-09-14T13:37:10Z
    observed_at: 2026-09-14T13:37:10Z
    affected_fields: [product.mechanism, taxonomy.chain-scope]
    evidence_state: claim
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-5, R-6]
  - id: EVT-3
    type: ct
    title: "@v4dotfun bio names @canopyfinance and CNPY"
    summary: "@v4dotfun profile recovered 2026-09-14: The tech launchpad of @RobinhoodApp. Powered by @canopyfinance / $CNPY. Website v4.fun. This is profile text, not a dated status id."
    account: "@v4dotfun"
    occurred_at: 2026-08-19T23:14:49Z
    observed_at: 2026-09-14T13:37:40Z
    affected_fields: [relationship, candidate]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-12]

receipts:
  - { id: R-1, publisher: Canopy, title: "Official site canopyfinance.io", url: "https://canopyfinance.io/", published_at: null, accessed_at: 2026-09-14T13:36:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-12, CLM-13], excerpt: "Canopy builds the protocols, infrastructure and products connecting AI agents to the onchain economy. Agen lets anyone create programmable markets without writing Solidity or building custom Uniswap v4 infrastructure. Describe the behavior you want, review what Agen generates, then launch it onchain. Launches on Uniswap v4. Visit v4.fun. Get $CNPY. Site counters this fetch: $10K+ volume in the last 48h; 0+ tokens launched." }
  - { id: R-2, publisher: "@canopyfinance", title: "X profile @canopyfinance", url: "https://x.com/canopyfinance", published_at: 2026-07-09T14:12:17Z, accessed_at: 2026-09-14T13:36:30Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-11, CLM-16, CLM-23], excerpt: "api.fxtwitter.com/canopyfinance: screen_name canopyfinance, name Canopy Finance, description Programmable Markets & Intelligence | $CNPY 0x532c5583671870723ceef573600208af49c87c54, website canopyfinance.io, followers 2489, tweets 448, joined Thu Jul 09 14:12:17 +0000 2026, verification type organization." }
  - { id: R-3, publisher: Blockscout, title: "CNPY address 0x532c5583…c87c54", url: "https://robinhoodchain.blockscout.com/address/0x532c5583671870723CEEf573600208aF49c87c54", published_at: null, accessed_at: 2026-09-14T13:36:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-9, CLM-11, EVT-1], excerpt: "api/v2/addresses: is_contract true is_verified true name CNPY proxy_type null. token name Canopy Finance symbol CNPY decimals 9 holders_count 2343 total_supply 1000000000000000000 volume_24h 164452.71912990283. creator_address_hash 0x9fdC67823988bf7AcC68aCd8c547E39b21162F65 creation_transaction_hash 0xbce2c77470ebfe9c7e772c961f8996297aab5b3aefc477d6848ecc3499f2810f." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol on CNPY", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-14T13:38:18Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-8, CLM-11, CLM-20, EVT-1], excerpt: "eth_chainId 0x1237 (4663); eth_blockNumber 0x3befeb3 (62849398). CNPY 0x532c5583671870723CEEf573600208aF49c87c54 eth_getCode 6281 bytes. name() Canopy Finance; symbol() CNPY; decimals() 9; totalSupply() 1000000000000000000; owner() 32 zero bytes. Creation tx 0xbce2c774…810f block 7120972 timestamp 1783790744 (2026-07-11T17:25:44Z), from 0x9fdC6782…2F65, to null." }
  - { id: R-5, publisher: Canopy Facilitator, title: "GET /supported eip155:4663", url: "https://facilitator.canopyfinance.io/supported", published_at: 2026-09-14T13:37:10Z, accessed_at: 2026-09-14T13:37:10Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-10, EVT-2], excerpt: "network eip155:4663 scheme exact-permit2-v2 asset 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 (USDG) permit2 0x000000000022D473030F116dDEE9F6B43aC78BA3 relayer/spender/signers 0x43A047aE20bd92eD3a37610062b48Dc314fD17Ff deploymentVersion 2026.07.13-a51b8fc generatedAt 2026-09-14T13:37:10.222Z. /health status ok chainId 4663." }
  - { id: R-6, publisher: Canopy Facilitator, title: "Docs — x402 facilitator on Robinhood Chain", url: "https://facilitator.canopyfinance.io/docs", published_at: null, accessed_at: 2026-09-14T13:36:20Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-10, CLM-19, EVT-2], excerpt: "A live, onchain-verifiable, pre-audit x402 facilitator for Robinhood Chain. Network (CAIP-2) eip155:4663. Scheme exact-permit2-v2. Asset 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 USDG 6 decimals. Settlement contract 0x000000000022D473030F116dDEE9F6B43aC78BA3 canonical Uniswap Permit2. Public RPC https://rpc.mainnet.chain.robinhood.com. Explorer robinhoodchain.blockscout.com." }
  - { id: R-7, publisher: CoinGecko, title: "coins/canopy-finance", url: "https://api.coingecko.com/api/v3/coins/canopy-finance", published_at: 2026-09-14T13:34:40Z, accessed_at: 2026-09-14T13:36:45Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "id canopy-finance symbol cnpy name Canopy Finance asset_platform_id robinhood platforms.robinhood 0x532c5583671870723ceef573600208af49c87c54 preview_listing false. links.homepage https://canopyfinance.io/. twitter_screen_name canopy_finance. telegram_channel_identifier canopytg. last_updated 2026-09-14T13:34:40.000Z market_data.market_cap.usd 753191 total_volume.usd 159643 circulating_supply 764631525.3136853." }
  - { id: R-8, publisher: DexScreener, title: "CNPY token pairs on robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x532c5583671870723ceef573600208af49c87c54", published_at: null, accessed_at: 2026-09-14T13:37:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-3, CLM-4], excerpt: "Uniswap v2 pair 0xD05d2c3D696Fcb893aeE6607E3652accd2aEDf97 CNPY/WETH chainId robinhood volume.h24 141401.27 liquidity.usd 134641.95 pairCreatedAt 1783790744000 (2026-07-11T17:25:44Z). info.websites https://canopyfinance.io/. info.socials https://x.com/canopyfinance and https://t.me/canopytg. Additional Uniswap v4 pairs present with smaller liquidity." }
  - { id: R-9, publisher: DefiLlama, title: "protocol/agen.space", url: "https://api.llama.fi/protocol/agen.space", published_at: null, accessed_at: 2026-09-14T13:37:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-19, CLM-21], excerpt: "id 8493 name Agen.space url https://agen.space/ description An agentic token launchpad that creates and deploys tokens with programmable market rules from user-defined instructions. chain Robinhood Chain category Launchpad chains [Robinhood Chain] twitter agendotspace audits 0 gecko_id null module dummy.js currentChainTvls {} tvl []." }
  - { id: R-10, publisher: DefiLlama, title: "protocol/canopy (Movement, not this subject)", url: "https://api.llama.fi/protocol/canopy", published_at: null, accessed_at: 2026-09-14T13:37:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-21], excerpt: "name Canopy slug canopy url https://app.canopyhub.xyz twitter canopyxyz chains [Movement] category Yield Aggregator. currentChainTvls Move about 1.15e6. This is not canopyfinance.io and is not used as a Canopy Finance chain-slice." }
  - { id: R-11, publisher: GitHub, title: "canopyfinance/x402-rwa README", url: "https://github.com/canopyfinance/x402-rwa", published_at: 2026-08-09T09:21:36Z, accessed_at: 2026-09-14T13:40:30Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-6, CLM-19, CLM-22], excerpt: "User canopyfinance public_repos 1 blog empty created_at 2026-07-11T17:57:27Z. Repo description: RWA-funded x402 buyer helper. README quickstart sets chainId 4663 and settleToken USDG; example pay line uses 0x5fc5…d168. Package @canopy-finance/x402-rwa. License MIT copyright Canopy Finance. GitHub blog field does not name canopyfinance.io." }
  - { id: R-12, publisher: "@v4dotfun", title: "X profile @v4dotfun", url: "https://x.com/v4dotfun", published_at: 2026-08-19T23:14:49Z, accessed_at: 2026-09-14T13:37:40Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-12, CLM-23, EVT-3], excerpt: "api.fxtwitter.com/v4dotfun: name v4.fun, description The tech launchpad of @RobinhoodApp Powered by @canopyfinance / $CNPY, website v4.fun, followers 2293, joined Wed Aug 19 23:14:49 +0000 2026, verification type organization." }
  - { id: R-13, publisher: "@agendotspace", title: "X profile @agendotspace", url: "https://x.com/agendotspace", published_at: 2026-07-30T12:59:32Z, accessed_at: 2026-09-14T13:37:40Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-13, CLM-15, CLM-23], excerpt: "api.fxtwitter.com/agendotspace: name agen.space, description Built by @Canopy_Finance / 0x532c5583671870723ceef573600208af49c87c54, website agen.space, followers 222, joined Thu Jul 30 12:59:32 +0000 2026, verified false." }
  - { id: R-14, publisher: Proofline main, title: "census.yaml slug floor", url: "https://github.com/harsharn10/proofline/blob/2497cfc12313a6107017493af1271e650ac50697/content/census.yaml", published_at: null, accessed_at: 2026-09-14T13:35:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-17], excerpt: "slug floor name Floor aliases floorfi symbols FLR FLOOR entity_kind protocol official site https://floorfi.app docs https://floorfi.app/docs x https://x.com/Floor_fi handle @Floor_fi discovery_source grok-bot packet WORK-20260904-grok-bot-floor tree.primary rwa-products/tax-distributor lifecycle mainnet." }
  - { id: R-15, publisher: Proofline main, title: "accounts.yaml @Floor_fi", url: "https://github.com/harsharn10/proofline/blob/2497cfc12313a6107017493af1271e650ac50697/content/accounts.yaml", published_at: null, accessed_at: 2026-09-14T13:35:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-17], excerpt: "handle @Floor_fi tier watch role project note Ticker FLR not FLOOR." }
  - { id: R-16, publisher: Proofline main, title: "accounts.yaml @Canopy_Finance skip row", url: "https://github.com/harsharn10/proofline/blob/2497cfc12313a6107017493af1271e650ac50697/content/accounts.yaml", published_at: null, accessed_at: 2026-09-14T13:35:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-13, CLM-15], excerpt: "handle @Canopy_Finance tier skip role project note Handle appeared as a typo in a HoodInsider recap; the project's account is @canopyfinance; posts not used as evidence. Adjacent row @canopyfinance tier watch role project note Official. agen.space NL to v4 + CNPY stock ratchet." }
  - { id: R-17, publisher: "@ponsdotfamily", title: "X profile @ponsdotfamily (follow-list sample)", url: "https://x.com/ponsdotfamily", published_at: 2026-07-13T22:27:49Z, accessed_at: 2026-09-14T13:36:40Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-23], excerpt: "api.fxtwitter.com/ponsdotfamily: name Pons, description Launch coins on Robinhood via ponsfamily.com/launchpad, website ponsfamily.com/launchpad, followers 78953. Status bodies were not recovered this round." }
  - { id: R-18, publisher: agen.space, title: "agen.space launchpad", url: "https://agen.space/", published_at: null, accessed_at: 2026-09-14T13:36:10Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-5], excerpt: "agen.space — the agentic launchpad. Say how your token should behave and Agen writes, compiles and tests the contracts behind it. Explore Instant v4 listings were visible this fetch; several rows showed $3.8k market cap and No price history yet." }
  - { id: R-19, publisher: Canopy Flow, title: "flow.canopyfinance.io", url: "https://flow.canopyfinance.io/", published_at: null, accessed_at: 2026-09-14T13:38:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [], excerpt: "Canopy Flow. Liquidity that moves intelligently. Earn trading fees from onchain markets without manually managing liquidity. Non-custodial. Principal only ever returns to the depositor — no Canopy contract has a path that moves it anywhere else. Chain 4663 Checking." }
  - { id: R-20, publisher: GitHub, title: "Open pull requests targeting main", url: "https://github.com/harsharn10/proofline/pulls", published_at: null, accessed_at: 2026-09-14T13:34:50Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-18], excerpt: "Open PRs: #163 WORK-20260911-grok-bot-discovery-inventory (candidate arcus | Arcus | @arcus_xyz | arcus.xyz; not a census row; distinct from census Arc). #92 site researched-asset activity stream, head codex/20260904/icarus-trenches-stream, no research/inbox/packets files." }
  - { id: R-21, publisher: Proofline main, title: "accounts.yaml @canopyfinance", url: "https://github.com/harsharn10/proofline/blob/2497cfc12313a6107017493af1271e650ac50697/content/accounts.yaml", published_at: null, accessed_at: 2026-09-14T13:35:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-16], excerpt: "handle @canopyfinance tier watch role project note Official. agen.space NL to v4 + CNPY stock ratchet. No slug field on the row." }

gaps:
  - { area: communications, priority: P0, question: "What dated status ids did @canopyfinance post in this window, and do any name a new contract or product launch?", checked: "api.fxtwitter.com/canopyfinance profile 200; /tweets 404; jina.ai/x.com 403; nitter SSL error; syndication.twitter.com empty; web search for site:x.com/canopyfinance returned no status URLs this round", next: "open Latest on @canopyfinance when a signed-in X surface is available and copy status id, date, and exact text" }
  - { area: security, priority: P0, question: "Is there an audit whose scope matches CNPY, the v4 launch path, or the x402 facilitator?", checked: "facilitator docs pre-audit; Llama agen.space audits 0; site and GitHub user opened 2026-09-14, no report URL copied", next: "open any report URL the project posts and match commit/address scope" }
  - { area: control, priority: P1, question: "Who can mint, tax, or pause CNPY after owner() returned the zero address, and who controls the facilitator relayer key?", checked: "owner() 0x0; creator and relayer have no code; verified source CNPY.sol was opened once then Blockscout api/v2 403ed", next: "re-read verified source for tax/mint/pause; eth_getCode and tx history on 0x9fdC6782…2F65 and 0x43A047aE…17Ff" }
  - { area: product, priority: P1, question: "Are agen.space Instant v4 rows live Uniswap v4 pools on 4663, or UI placeholders (No price history yet / 0+ tokens launched on the marketing site)?", checked: "agen.space HTML listed rows with $3.8k market cap and No price history yet; canopyfinance.io counters 0+ tokens launched", next: "copy a pool or token address from agen.space or v4.fun and reproduce it on Blockscout" }
  - { area: identity, priority: P1, question: "Should CoinGecko twitter_screen_name canopy_finance be treated as a stale aggregator field, and does @agendotspace still point at the skip handle?", checked: "CoinGecko twitter_screen_name canopy_finance; fxtwitter /canopy_finance 404; DexScreener and official profile use @canopyfinance; @agendotspace bio uses @Canopy_Finance", next: "controller review of CON-1; do not merge handles" }
  - { area: economics, priority: P2, question: "What is independent Robinhood Chain TVL for Canopy products, given Llama canopy is Movement and agen.space currentChainTvls is empty?", checked: "api.llama.fi/protocol/canopy Movement; protocol/agen.space dummy.js empty TVL; CoinGecko and DexScreener token figures copied", next: "do not use Movement Canopy as a chain-slice; wait for a Robinhood adapter or reproduce pool reserves" }
  - { area: team, priority: P2, question: "Does GitHub user canopyfinance link to canopyfinance.io, and who holds the CNPY creator key?", checked: "GitHub blog empty; one public repo x402-rwa; CNPY creator is an EOA", next: "open org/user profile for a site URL; do not merge creator and relayer keys" }
  - { area: deployment, priority: P2, question: "Does Canopy publish a factory, hook, or vault address besides CNPY and the facilitator’s Uniswap Permit2/USDG references?", checked: "handle bio names CNPY only; facilitator names USDG and canonical Permit2; flow.canopyfinance.io showed Chain 4663 Checking without an address", next: "copy any additional 4663 address from docs or a dated post and reproduce it" }
  - { area: activity, priority: P2, question: "What 24h volume is own-pool versus aggregator, after DexScreener v2 141401.27 and CoinGecko 159643 disagreed this round?", checked: "DexScreener v2 pair volume.h24 141401.27; CoinGecko total_volume.usd 159643; Blockscout token volume_24h 164452.72", next: "keep pair-level DexScreener as the chain slice; do not average" }

---

# Discovery inventory 2026-09-14 — research packet

## What it is

Robinhood Chain names that are not yet census rows. This round's protocol lead is Canopy: a Uniswap v4 programmable-market launcher and agent stack. Official site canopyfinance.io and handle @canopyfinance name each other; the handle bio publishes CNPY `0x532c5583671870723CEEf573600208aF49c87c54`. RPC this round reproduced that ERC-20 on chain 4663 (name Canopy Finance, symbol CNPY). A Canopy x402 facilitator advertises `eip155:4663`. Distinct from DefiLlama's Movement Canopy. Floor was skipped because it is already census slug floor.

Themes: launchpad, agents, rwa

TL;DR: Canopy is a Robinhood Chain v4 launcher and agent stack; CNPY exists on 4663 at 0x532c5583…c87c54 and has no census row.

## Why it matters

- Thesis: a native Uniswap v4 launch path plus an x402 USDG facilitator on chain 4663, with the token contract reproduced this round [claim R-1 R-4]
- Traction: CoinGecko market cap about $753k at 2026-09-14T13:34:40Z; DexScreener v2 CNPY/WETH 24h volume about $141k [claim R-7 R-8]
- Catalyst: agen.space and v4.fun are named surfaces; site counters still showed 0+ tokens launched this fetch [claim R-1 R-12]

## What could go wrong

- CoinGecko lists twitter_screen_name canopy_finance while the recovered official profile is @canopyfinance; @agendotspace still names @Canopy_Finance [claim R-7 R-13]
- Facilitator docs label the x402 path pre-audit; no matching audit URL was copied [claim R-6]
- CNPY owner() returned the zero address; creator and relayer keys were EOAs this round [verified R-4]

## Operations log

- Main SHA read: 2497cfc12313a6107017493af1271e650ac50697 (origin/main, re-fetched). AGENTS.md, docs/ingestion.md, docs/integrations/grok-bot.md, docs/research-system.md §§4–7 and §10, docs/templates/research-packet-v2.md, docs/admission-policy.md, docs/operating-flow.md, skills/research-seed/SKILL.md, content/census.yaml (182 slugs), content/accounts.yaml (156 handles).
- Open PRs including drafts: #163 WORK-20260911-grok-bot-discovery-inventory (arcus; not duplicated). #92 site trenches stream; no packet files.
- Follow-list: sampled project/media/alpha handles via api.fxtwitter.com user objects. Profile claims recovered for @canopyfinance (CNPY CA + canopyfinance.io), @Floor_fi (stock-backed floor protocol; already census), @sluice_rh (CA 0xb48d34dd…85ec + sluice.live; not packed), @v4dotfun (powered by @canopyfinance), @agendotspace (Built by @Canopy_Finance), @ponsdotfamily (Pons launchpad). Status bodies were not recovered (404/403/empty). No invented posts.
- Gap hunt: Floor / @Floor_fi / thefloor.finance / ticker FLR collapsed — already census slug floor (site floorfi.app, not thefloor.finance). Alternate packed: canopyfinance. Other watch names without a census slug this round and not packed: sluice_rh, twofoldfi, v4dotfun, MosaicETF, rallypadfun, scalarliquidity, brickswalltech, FundedProtocol, GwoodFinance. HedgeOnHood and ArcLiquidity already have census rows hedge and arc. arcus already in #163.
- Surfaces opened: canopyfinance.io, agen.space, flow.canopyfinance.io, facilitator.canopyfinance.io docs /supported /health /status, v4.fun HTML (app shell), CoinGecko coins/canopy-finance, DexScreener token API, Llama protocols list plus protocol/canopy and protocol/agen.space, GitHub user canopyfinance and repo x402-rwa, Blockscout api/v2 (CNPY succeeded; later addresses 403), RPC https://rpc.mainnet.chain.robinhood.com.
- Addresses checked on 4663: CNPY 0x532c5583671870723CEEf573600208aF49c87c54 exists_on_4663 true, verified source true, 6281 B. Relayer 0x43A047aE20bd92eD3a37610062b48Dc314fD17Ff code 0 B. Creator 0x9fdC67823988bf7AcC68aCd8c547E39b21162F65 code 0 B. Permit2 0x000000000022D473030F116dDEE9F6B43aC78BA3 code 9152 B (canonical Uniswap, not listed as a Canopy deployment). USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 code 170 B (facilitator asset, not a Canopy token). v2 pair 0xD05d2c3D696Fcb893aeE6607E3652accd2aEDf97 code 11293 B.
- Candidate proposed: canopy | Canopy | @canopyfinance | canopyfinance.io (coverage candidate; this file is inventory only).
- Rate limits: Blockscout api/v2 403 after the first CNPY reads; X status fetch blocked. Stop after this packet.
