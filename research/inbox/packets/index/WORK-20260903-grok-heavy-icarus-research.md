---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: index
name: The Index
packet_tier: full
as_of: 2026-09-03T17:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [index]
allowed_paths:
  - research/inbox/packets/index/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: The Index
  aliases: ["Index"]
  symbols: [INDEX]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://theindex.finance
  official_handle: "@TheIndexFi"
  repository: "NULL — site, X bio and DexScreener token info do not name a repository; DefiLlama lists github.com/justintimecompilation without a site or X cross-link"
  possible_matches:
    - slug: robindex
      signals: [other]
      contrary_signals:
        - "Census Robindex is a market scanner at robindex.pro / @robindexpro with token 0xd82f70F530AFf45b831d6eE17062B4E85395C6F3"
        - "The Index is a fee-funded Stock Token distributor at theindex.finance / @TheIndexFi with token 0x56910D4409F3a0C78C64DD8D0545FF0705389870"
        - "No shared domain, handle, or reproduced address"
    - slug: robinhood-index-vaults
      signals: [other]
      contrary_signals:
        - "Census Robinhood Index Vaults is a testnet-only ERC-4626 basket vault (rIDX) at github.com/nsvoud-dev/robinhood-index-vaults"
        - "The Index is a live mainnet tax distributor; holders receive Stock Tokens, they do not mint a vault share"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/tax-distributor
  secondary_leaves: []
  mechanism_tags: [index, rwa, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "A 3% pool fee in ETH buys a basket of Robinhood Stock Tokens for eligible INDEX holders. That is a fee-funded RWA distributor, not a launchpad and not an ERC-4626 index vault. Token, owner and Uniswap v4 PoolManager constructor arg were reproduced on chain 4663; IndexFeeHook and the live StockDistributor were named in verified source or a DefiLlama adapter but the hook address was not opened this pass. [R-1] [R-3] [R-8]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-8, CLM-9], note: "" }

links:
  - { kind: site, url: "https://theindex.finance", authenticity: confirmed }
  - { kind: app, url: "https://indices.theindex.finance", authenticity: confirmed }
  - { kind: app, url: "https://rwa.wtf", authenticity: confirmed }
  - { kind: x, url: "https://x.com/TheIndexFi", authenticity: confirmed }
  - { kind: github, url: "https://github.com/justintimecompilation", authenticity: unconfirmed }

deployments:
  - label: INDEX token (ReflectionToken)
    role: token
    address:
      value: "0x56910D4409F3a0C78C64DD8D0545FF0705389870"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: Uniswap v4 PoolManager (constructor poolManager; rewardsExcluded)
    role: other
    address:
      value: "0x8366a39CC670B4001A1121B8F6A443A643e40951"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-6]
  - label: INDEX/WETH Uniswap v3 pair (DexScreener lead book)
    role: other
    address:
      value: "0xD29893fFac8b29eC4Db2cfE0CDB3FE1377c028Ff"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-7]
  - label: Llama adapter legacy distributor 0x33B0…
    role: other
    address:
      value: "0x33B0095333e64bf375952eF197b6FDC3437dc014"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-16]
  - label: Llama adapter legacy distributor 0x0224…
    role: other
    address:
      value: "0x02241379056fd5c2BDe0bDfc63D2b272C18A49bE"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-16]
  - label: Llama adapter legacy distributor 0x2459…
    role: other
    address:
      value: "0x2459DedB3012d1E929EdD17DF26620120bDF11bf"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-16]
  - label: Llama adapter legacy distributor 0x39AD…
    role: other
    address:
      value: "0x39ADB8acD07427D338b5f1AfAb436A04AbFdB7c4"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-16]
  - label: Llama adapter Indices treasury factory 0x2950…
    role: factory
    address:
      value: "0x29502Be73947fFf18343dcd98ccDa101e8E7ec49"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-16]
  - label: Llama adapter reward vault V2
    role: vault
    address:
      value: "0xEe7d053cE44D689455765CE1c3c64c5c28EA4088"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-16]

metrics:
  - { kind: holders, value: 21645, currency: null, as_of: 2026-09-03T17:25:00Z, window: point, method: "Blockscout GET /api/v2/tokens/0x56910D4409F3a0C78C64DD8D0545FF0705389870 holders_count (all token holders, not the >=10k registry)", class: claim, receipt_ids: [R-5] }
  - { kind: volume_24h, value: 4691680.21, currency: USD, as_of: 2026-09-03T17:22:00Z, window: 24h, method: "DexScreener latest/dex/tokens INDEX Uniswap v3 INDEX/WETH pair 0xD29893… volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 961107.71, currency: USD, as_of: 2026-09-03T17:22:00Z, window: point, method: "DexScreener same INDEX/WETH v3 pair liquidity.usd (listed pool, not protocol TVL; Llama currentChainTvls empty)", class: claim, receipt_ids: [R-7, R-8] }
  - { kind: market_cap, value: 39500563, currency: USD, as_of: 2026-09-03T17:22:00Z, window: point, method: "DexScreener same INDEX/WETH v3 pair marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: fees_24h, value: 30462, currency: USD, as_of: 2026-09-03T17:28:00Z, window: 24h, method: "api.llama.fi/summary/fees/the-index total24h; chainBreakdown Robinhood Chain", class: claim, receipt_ids: [R-9] }
  - { kind: revenue_24h, value: 30462, currency: USD, as_of: 2026-09-03T17:28:00Z, window: 24h, method: "defillama.com/protocol/the-index Key Metrics Revenue 24h Robinhood Chain slice", class: claim, receipt_ids: [R-9] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T17:30:00Z, receipt_ids: [R-3, R-4, R-5], result: "eth_getCode on 0x56910D…89870 non-empty (len 5554); name() The Index; symbol() Index; totalSupply 1e27; Blockscout is_contract true, is_verified true, name ReflectionToken, token The Index/INDEX, holders_count 21645, creator EOA 0x89562Eb8979dB1E85A01E85120BFD6A7C47a39cb, creation tx 0xf3c73a… block 1670725 at 2026-07-03T02:55:52Z, decoded constructor poolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T17:30:00Z, receipt_ids: [R-3], result: "owner() returned 0x02d9e763154977e2aae47a3a61d940ffe0238fd0; eth_getCode on that address is empty (EOA); no proxy_type on the token" }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T17:26:00Z, receipt_ids: [R-3], result: "Verified source src/ReflectionToken.sol: fixed-supply ERC-20; 3% each-way tax is NOT on the token and is taken in native ETH by IndexFeeHook on the Uniswap v4 Index/ETH pool; minShareBalance 10_000e18; holderCount() RPC 3779" }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T17:31:00Z, receipt_ids: [R-6], result: "0x8366a39CC670B4001A1121B8F6A443A643e40951 is_contract true, is_verified true, name PoolManager" }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T17:18:00Z, receipt_ids: [R-1, R-2, R-7], result: "X @TheIndexFi bio links theindex.finance, rwa.wtf and indices.theindex.finance; DexScreener INDEX token info.websites is theindex.finance and socials x.com/TheIndexFi; site title The Index — hold it, get paid in stocks" }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-03T17:22:00Z, receipt_ids: [R-7], result: "DexScreener Uniswap v3 INDEX/WETH 0xD29893… labels v3, quote WETH, liquidity.usd 961107.71, volume.h24 4691680.21, marketCap 39500563; extra Uniswap v4 INDEX/ETH 0x00dd2d… liq 935495.95 vol 695378.06; Uniswap v4 INDEX/USDG 0x51d1a4… liq 115223.93 vol 459877.59; newer v4 INDEX/USDG 0x2500e7… created 2026-09-02T16:32:50Z liq 11645.21 vol 121899.12" }
  - { id: REP-7, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T17:40:00Z, receipt_ids: [R-16], result: "eth_getCode non-empty on Llama LEGACY_DISTRIBUTORS 0x33B009…, 0x022413…, 0x2459De…, 0x39ADB8…, factory 0x29502B… and reward vault V2 0xEe7d05…" }
  - { id: REP-8, method: api, checked_at: 2026-09-03T17:28:00Z, receipt_ids: [R-8, R-9], result: "api.llama.fi/protocol/the-index address robinhood:0x56910D…89870, url theindex.finance, twitter TheIndexFi, audits 0, chains [Robinhood Chain], currentChainTvls empty; summary/fees/the-index total24h 30462 Robinhood Chain" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "A 3% ETH fee on INDEX trades funds a basket of Robinhood Stock Tokens sent to eligible holders; site says treasury ETH buys each supported stock in equal parts and eligible wallets (above 10,000 INDEX) receive pro-rata distributions", class: claim, observed_at: 2026-09-03T17:20:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://theindex.finance", class: verified, observed_at: 2026-09-03T17:18:00Z, receipt_ids: [R-1, R-2, R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@TheIndexFi", class: verified, observed_at: 2026-09-03T17:18:00Z, receipt_ids: [R-1, R-2, R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x56910D4409F3a0C78C64DD8D0545FF0705389870", class: verified, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-3, R-4, R-5, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-3, R-4, R-7], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-6, field: control.owner, value: "0x02d9e763154977e2aae47a3a61d940ffe0238fd0 (EOA; eth_getCode empty)", class: verified, observed_at: 2026-09-03T17:30:00Z, receipt_ids: [R-3], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/tax-distributor, class: inference, observed_at: 2026-09-03T17:50:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Verified ReflectionToken source: the 3% each-way tax is NOT on the ERC-20; it is taken in native ETH by IndexFeeHook on the Uniswap v4 Index/ETH pool. This contract is a holder registry (wallets >= minShareBalance 10_000e18) that StockDistributor pays against; PoolManager and 0xdead are rewardsExcluded.", class: verified, observed_at: 2026-09-03T17:26:00Z, receipt_ids: [R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-9, field: control.privileged-role, value: "Ownable owner may setMinShareBalance, setRewardsExcluded and transferOwnership; no timelock in the verified source", class: verified, observed_at: 2026-09-03T17:26:00Z, receipt_ids: [R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "Token proxy_type null; implementations empty", class: verified, observed_at: 2026-09-03T17:25:00Z, receipt_ids: [R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: relationship, value: "INDEX was created 2026-07-03T02:55:52Z by EOA 0x89562Eb8979dB1E85A01E85120BFD6A7C47a39cb as a direct contract-creation transaction, not by a known launchpad factory", class: verified, observed_at: 2026-09-03T17:25:00Z, receipt_ids: [R-4], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T17:22:00Z, receipt_ids: [R-3, R-7, R-8], reproduction_ids: [REP-1, REP-6], supersedes: null }
  - { id: CLM-13, field: taxonomy.entity-kind, value: protocol, class: inference, observed_at: 2026-09-03T17:50:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: taxonomy.mechanism-tag, value: "index, rwa, fee-routing", class: inference, observed_at: 2026-09-03T17:50:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: product.mechanism, value: "Lead listed book is Uniswap v3 INDEX/WETH 0xD29893… (quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73). Extra books: Uniswap v4 INDEX/ETH and INDEX/USDG. Venue Uniswap. Pair asset WETH on the lead book.", class: verified, observed_at: 2026-09-03T17:22:00Z, receipt_ids: [R-7], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-16, field: product.mechanism, value: "Indices: any token can point fees at an Index Treasury that buys a basket of tokenized stocks and pushes them to that token's holders; rwa.wtf is described as perps/research for RWAs on Lighter, with a share of fees flowing back to INDEX holders", class: claim, observed_at: 2026-09-03T17:16:00Z, receipt_ids: [R-13, R-17, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: product.mechanism, value: "Site and X describe a Zap that compounds distributed stocks back into INDEX", class: claim, observed_at: 2026-09-03T17:20:00Z, receipt_ids: [R-1, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: "Site protocol metrics: total value distributed $1,524,526.02; fees collected 748.04 ETH; eligible wallets 3,732–3,759 above the 10,000 INDEX threshold", class: claim, observed_at: 2026-09-03T17:20:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: economics.metric, value: "DexScreener INDEX/WETH v3 pair: liquidity.usd 961107.71, volume.h24 4691680.21, marketCap 39500563 as of fetch", class: claim, observed_at: 2026-09-03T17:22:00Z, receipt_ids: [R-7], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DefiLlama The Index Robinhood Chain slice: fees 24h $30,462, revenue 24h $30,462, fees 7d $123,080, cumulative fees $1.68m, cumulative revenue $1.52m; audits 0", class: claim, observed_at: 2026-09-03T17:28:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-8], supersedes: null }
  - { id: CLM-21, field: security.audit, value: "No audit report was located in this review", class: unknown, observed_at: 2026-09-03T17:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.repository, value: "NULL — site, X bio and DexScreener token info do not name a repository; DefiLlama lists justintimecompilation", class: unknown, observed_at: 2026-09-03T17:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: other, value: "No official Telegram or Discord was listed on the site, X profile or DexScreener token info this pass", class: unknown, observed_at: 2026-09-03T17:18:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: account.@TheIndexFi.official, value: "Official X: profile @TheIndexFi links theindex.finance; DexScreener INDEX token socials list x.com/TheIndexFi. Search also returned @IndexFiDIGI and @theindexed with unrelated bios; site/DexScreener name @TheIndexFi only", class: claim, observed_at: 2026-09-03T17:18:00Z, receipt_ids: [R-2, R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "2026-09-01 @TheIndexFi posted Over $1,500,000 in RWAs distributed to $Index holders", class: claim, observed_at: 2026-09-03T17:15:00Z, receipt_ids: [R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "2026-08-30 @TheIndexFi posted The Index turns onchain activity into tokenized-equity rewards for holders (the dividend layer of Robinhood)", class: claim, observed_at: 2026-09-03T17:15:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: communications.status, value: "2026-08-28 @TheIndexFi posted $355,000 in stock rewards through indices.theindex.finance and $5,000,000 in RWA volume", class: claim, observed_at: 2026-09-03T17:15:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: deployment.address, value: "DefiLlama fees adapter names four LEGACY_DISTRIBUTORS, Indices FACTORY_ADDRESSES and reward vault V2 0xEe7d05…; eth_getCode non-empty on the four distributors, factory 0x29502B… and the V2 vault. IndexFeeHook address was not in that file.", class: claim, observed_at: 2026-09-03T17:40:00Z, receipt_ids: [R-16], reproduction_ids: [REP-7], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-1, CLM-8]
    material_effect: "Site says a 3% ETH fee on trades; verified token source says a 3% each-way ETH tax is taken by IndexFeeHook on the Uniswap v4 Index/ETH pool only, not in the ERC-20. The lead DexScreener book is a Uniswap v3 INDEX/WETH pair."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Uniswap v4 INDEX/USDG book opened"
    summary: "DexScreener lists a new Uniswap v4 INDEX/USDG pool created 2026-09-02T16:32:50Z with about $11.6k liquidity."
    occurred_at: 2026-09-02T16:32:50Z
    observed_at: 2026-09-03T17:22:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: company
    title: "Account posts over $1.5M RWAs distributed"
    summary: "@TheIndexFi posted that over $1,500,000 in RWAs had been distributed to $Index holders."
    occurred_at: 2026-09-01T00:01:12Z
    observed_at: 2026-09-03T17:15:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-3
    type: ct
    title: "HoodInsider repeats $1.5M distribution figure"
    summary: "@HoodInsider_ posted that over $1,500,000 in RWAs had been distributed to $Index holders by @TheIndexFi."
    occurred_at: 2026-09-01T05:18:39Z
    observed_at: 2026-09-03T17:16:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: company
    title: "Account calls product the dividend layer of Robinhood"
    summary: "@TheIndexFi posted that The Index turns onchain activity into tokenized-equity rewards for holders."
    occurred_at: 2026-08-30T08:33:59Z
    observed_at: 2026-09-03T17:15:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: ct
    title: "HoodInsider cites $355K rewards and $5M RWA volume"
    summary: "@HoodInsider_ posted that @TheIndexFi paid $355K in stock rewards and surpassed $5M in RWA volume."
    occurred_at: 2026-08-29T17:53:38Z
    observed_at: 2026-09-03T17:16:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-6
    type: company
    title: "Account posts $355K rewards and $5M RWA volume"
    summary: "@TheIndexFi posted $355,000 in stock rewards via indices.theindex.finance and $5,000,000 in RWA volume."
    occurred_at: 2026-08-28T05:17:32Z
    observed_at: 2026-09-03T17:15:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-7
    type: company
    title: "Stocks for Everyone writeup names 3% tax"
    summary: "@TheIndexFi article said a 3% tax funds stock distributions every 15 minutes and cited nearly $1M distributed."
    occurred_at: 2026-07-18T00:00:00Z
    observed_at: 2026-09-03T17:16:00Z
    affected_fields: [product.mechanism, economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-8
    type: onchain
    title: "INDEX token created on chain 4663"
    summary: "ReflectionToken 0x56910D…89870 was created in tx 0xf3c73a… at block 1670725 on 2026-07-03T02:55:52Z."
    occurred_at: 2026-07-03T02:55:52Z
    observed_at: 2026-09-03T17:25:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-4]

receipts:
  - { id: R-1, publisher: The Index, title: "The Index — hold it, get paid in stocks", url: "https://theindex.finance", published_at: null, accessed_at: 2026-09-03T17:20:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-7, CLM-13, CLM-14, CLM-17, CLM-18], excerpt: "Hold The Index. Earn stocks. A 3% ETH fee on trades funds stock distributions for eligible holders. Total value distributed $1,524,526.02. Fees collected 748.04 ETH. Wallets 3,732. HOLDERS: Wallets above the 10,000 $INDEX threshold. Treasury ETH buys each supported stock in equal parts." }
  - { id: R-2, publisher: Index (@TheIndexFi), title: "X profile @TheIndexFi", url: "https://x.com/TheIndexFi", published_at: "2026-07-02T00:00:00Z", accessed_at: 2026-09-03T17:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-16, CLM-24], excerpt: "Index @TheIndexFi. Bio: Stock dividend protocol for robinhood L2’s tokenized stocks. Links: rwa.wtf, indices.theindex.finance, theindex.finance. Joined July 2026. 16.1K Followers." }
  - { id: R-3, publisher: Blockscout, title: "Address and verified source 0x56910D…89870", url: "https://robinhoodchain.blockscout.com/address/0x56910D4409F3a0C78C64DD8D0545FF0705389870", published_at: null, accessed_at: 2026-09-03T17:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-8, CLM-9, CLM-10, CLM-12, EVT-8], excerpt: "Contract, is_verified true, name ReflectionToken, token The Index / INDEX, creator 0x89562Eb8…39cb, creation tx 0xf3c73adb…b2bd block 1670725. Source: the 3% each-way tax is NOT here: it's taken in native ETH by IndexFeeHook on the pool. minShareBalance = 10_000e18. owner() 0x02d9e763…8fd0." }
  - { id: R-4, publisher: Blockscout, title: "Creation tx 0xf3c73a…", url: "https://robinhoodchain.blockscout.com/tx/0xf3c73adb5cb7c48756a8e0f17abb27b6e7124e976a2f9355972e6d77047cb2bd", published_at: "2026-07-03T02:55:52Z", accessed_at: 2026-09-03T17:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-11, EVT-8], excerpt: "status ok, timestamp 2026-07-03T02:55:52Z, block 1670725, from EOA 0x89562Eb8979dB1E85A01E85120BFD6A7C47a39cb, to null, created_contract ReflectionToken 0x56910D4409F3a0C78C64DD8D0545FF0705389870, token mint 1_000_000_000e18 to the creator. Constructor arg poolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951." }
  - { id: R-5, publisher: Blockscout, title: "Token page INDEX", url: "https://robinhoodchain.blockscout.com/token/0x56910D4409F3a0C78C64DD8D0545FF0705389870", published_at: null, accessed_at: 2026-09-03T17:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4], excerpt: "address_hash 0x56910D4409F3a0C78C64DD8D0545FF0705389870, name The Index, symbol INDEX, decimals 18, holders_count 21645, total_supply 1000000000000000000000000000, type ERC-20." }
  - { id: R-6, publisher: Blockscout, title: "PoolManager 0x8366a39C…0951", url: "https://robinhoodchain.blockscout.com/address/0x8366a39CC670B4001A1121B8F6A443A643e40951", published_at: null, accessed_at: 2026-09-03T17:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [], excerpt: "hash 0x8366a39CC670B4001A1121B8F6A443A643e40951, is_contract true, is_verified true, name PoolManager, creator 0x4e59b44847b379578588920cA78FbF26c0B4956C (CREATE2)." }
  - { id: R-7, publisher: DexScreener, title: "INDEX token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x56910D4409F3a0C78C64DD8D0545FF0705389870", published_at: null, accessed_at: 2026-09-03T17:22:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-5, CLM-12, CLM-15, CLM-19, CLM-24, EVT-1], excerpt: "Uniswap v3 pair 0xD29893fFac8b29eC4Db2cfE0CDB3FE1377c028Ff INDEX/WETH liquidity.usd 961107.71 volume.h24 4691680.21 marketCap 39500563. Uniswap v4 INDEX/ETH 0x00dd2d… liq 935495.95 vol 695378.06. Uniswap v4 INDEX/USDG 0x51d1a4… liq 115223.93. Newer v4 INDEX/USDG 0x2500e7… pairCreatedAt 2026-09-02T16:32:50Z. info.websites https://theindex.finance/ socials x.com/TheIndexFi." }
  - { id: R-8, publisher: DefiLlama, title: "The Index protocol", url: "https://api.llama.fi/protocol/the-index", published_at: null, accessed_at: 2026-09-03T17:28:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-4, CLM-12, CLM-20], excerpt: "name The Index, address robinhood:0x56910D4409F3a0C78C64DD8D0545FF0705389870, symbol INDEX, url https://theindex.finance, twitter TheIndexFi, github [justintimecompilation], audits 0, category Indexes, chains [Robinhood Chain], currentChainTvls {}." }
  - { id: R-9, publisher: DefiLlama, title: "The Index fees and revenue", url: "https://api.llama.fi/summary/fees/the-index", published_at: null, accessed_at: 2026-09-03T17:28:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-20], excerpt: "total24h 30462, total7d 123080, total30d 496866, totalAllTime 1683483, chainBreakdown Robinhood Chain total24h 30462. Methodology: Original INDEX 3% swap tax measured after conversion into stock, plus Indices treasury harvests. Page also lists Revenue 24h $30,462 Robinhood Chain." }
  - { id: R-10, publisher: Index (@TheIndexFi), title: "Over $1,500,000 in RWAs distributed", url: "https://x.com/TheIndexFi/status/2094576268331127014", published_at: "2026-09-01T00:01:12Z", accessed_at: 2026-09-03T17:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-25, EVT-2], excerpt: "Over $1,500,000 in RWAs distributed to $Index holders. Stocks for everyone." }
  - { id: R-11, publisher: Index (@TheIndexFi), title: "The dividend layer of Robinhood", url: "https://x.com/TheIndexFi/status/2093980538981781685", published_at: "2026-08-30T08:33:59Z", accessed_at: 2026-09-03T17:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-26, EVT-4], excerpt: "Robinhood Chain Volume into your pockets in the form of tokenized equities. The Index turns onchain activity into real stock rewards for holders. The dividend layer of Robinhood." }
  - { id: R-12, publisher: Index (@TheIndexFi), title: "$355,000 in stock rewards", url: "https://x.com/TheIndexFi/status/2093206326398644297", published_at: "2026-08-28T05:17:32Z", accessed_at: 2026-09-03T17:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, EVT-6], excerpt: "$355,000 in stock rewards paid out to holders through https://indices.theindex.finance/ $5,000,000 in RWA volume with protocol fees across Indices going straight back into distributions and locked liquidity for $INDEX." }
  - { id: R-13, publisher: Index (@TheIndexFi), title: "Stocks for Everyone: What We’re Building on Robinhood Chain", url: "https://x.com/TheIndexFi/article/2078269523245821992", published_at: "2026-07-18T00:00:00Z", accessed_at: 2026-09-03T17:16:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-16, CLM-17, EVT-7], excerpt: "A 3% tax on trades funds stock distributions for eligible holders every 15 minutes, automatically. No claims needed. 75% of Rwa.wtf protocol fees are used to buy tokenized stocks. Nearly $1,000,000 in RWAs has been distributed to holders since launch, including a single 15 minute distribution of more than $155,000." }
  - { id: R-14, publisher: "@HoodInsider_", title: "Over $1,500,000 in RWAs distributed", url: "https://x.com/HoodInsider_/status/2094656156442534056", published_at: "2026-09-01T05:18:39Z", accessed_at: 2026-09-03T17:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Over $1,500,000 in RWAs distributed to $Index holders by @TheIndexFi on Robinhood Chain." }
  - { id: R-15, publisher: "@HoodInsider_", title: "$355K in stock rewards", url: "https://x.com/HoodInsider_/status/2093758990450647429", published_at: "2026-08-29T17:53:38Z", accessed_at: 2026-09-03T17:16:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "@TheIndexFi has paid out $355K in stock rewards to holders through its indices. The protocol has also surpassed $5M in RWA volume, with fees flowing back into holder distributions and locked $INDEX liquidity." }
  - { id: R-16, publisher: DefiLlama, title: "fees/the-index.ts adapter", url: "https://github.com/DefiLlama/dimension-adapters/blob/master/fees/the-index.ts", published_at: null, accessed_at: 2026-09-03T17:35:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-28], excerpt: "LEGACY_DISTRIBUTORS: 0x33B0095333e64bf375952eF197b6FDC3437dc014, 0x02241379056fd5c2BDe0bDfc63D2b272C18A49bE, 0x2459DedB3012d1E929EdD17DF26620120bDF11bf, 0x39ADB8acD07427D338b5f1AfAb436A04AbFdB7c4. FACTORY_ADDRESSES include 0x29502Be73947fFf18343dcd98ccDa101e8E7ec49. REWARD_VAULT_V2 0xEe7d053cE44D689455765CE1c3c64c5c28EA4088. Event Distributed(address stock, uint256 amount, uint256 holders)." }
  - { id: R-17, publisher: The Index, title: "Baskets · Indices", url: "https://indices.theindex.finance/", published_at: null, accessed_at: 2026-09-03T17:21:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-16], excerpt: "Every coin gets a treasury. Point your coin’s fees at an Index Treasury. It buys a basket of tokenized stocks and pushes them straight to your holders, weighted by amount held. Pick a basket, get an address, launch." }

gaps:
  - { priority: P0, question: "What is the live IndexFeeHook address, and which INDEX pools (v4 ETH, v3 WETH, USDG) actually take the 3% ETH fee?", checked: "verified ReflectionToken source on Blockscout 2026-09-03 names IndexFeeHook on the Uniswap v4 Index/ETH pool; DexScreener lead book is Uniswap v3 INDEX/WETH; Llama adapter lists distributors but not the hook", next: "read IndexFeeHook from verified source search or the v4 pool's hook field and eth_call the fee on each book" }
  - { priority: P0, question: "Which of the four Llama LEGACY_DISTRIBUTORS is the current StockDistributor, and do its Distributed events reproduce the site's $1,524,526.02?", checked: "eth_getCode non-empty on all four addresses 2026-09-03; Blockscout name/source pages were Cloudflare-blocked after the token read; site figure not summed from logs", next: "open each distributor on Blockscout for verified name and sum Distributed amount" }
  - { priority: P1, question: "Can the owner change minShareBalance, the excluded set, or the hook fee without a timelock, and who holds 0x02d9e7…?", checked: "verified Ownable source exposes setMinShareBalance, setRewardsExcluded, transferOwnership; owner() is an EOA with empty code; no timelock contract in that path", next: "read IndexFeeHook owner/setters once the hook address is known" }
  - { priority: P1, question: "Is there an audit whose scope matches ReflectionToken, IndexFeeHook and StockDistributor?", checked: "site, X profile, DexScreener token info, Llama audits=0, github.com/justintimecompilation, 2026-09-03", next: "ask in public and record any report URL as a claim" }
  - { priority: P2, question: "Does the site HTML or docs name the INDEX CA and @TheIndexFi so the official pair is bidirectional without DexScreener?", checked: "theindex.finance SPA title and 3% copy loaded; initial HTML had no 0x address and no x.com link; X bio links the site", next: "read bundled JS or a footer once the client hydrates" }
  - { priority: P2, question: "Is github.com/justintimecompilation or blobsarp/indices an official repository?", checked: "not linked from site, X bio or DexScreener; Llama lists justintimecompilation; blobsarp/indices 404", next: "a site or X link to a repo, or leave NULL" }
---

# The Index — research packet

## What it is

A 3% ETH fee on Index/ETH pool trades buys a basket of Robinhood Stock Tokens and sends them to eligible holders. Users hold INDEX above a 10,000-token threshold, or Zap received stocks back into INDEX, to stay in the registry. @TheIndexFi runs theindex.finance, indices.theindex.finance and rwa.wtf. The Index is not a launchpad.

Themes: index, rwa, hook

## Why it matters

The Index is a live fee-funded Stock Token distributor on chain 4663: holding INDEX is the claim on a basket of official equities bought from pool fees, not a vault share and not a pad graduation. [verified R-3] [claim R-1]

INDEX/WETH Uniswap v3 liquidity was about $961k with about $4.69M of 24h volume at fetch, with extra Uniswap v4 ETH and USDG books beside it. [claim R-7]

DefiLlama's Robinhood Chain fee slice for the same day is $30,462 of 24h fees and $30,462 of 24h revenue. [claim R-9]

## What could go wrong

Distributions scale with taxed volume. If the 3% ETH fee sits only on the Uniswap v4 Index/ETH pool, flow on the lead Uniswap v3 INDEX/WETH book would not buy stocks. [verified R-3] [claim R-7]

The token owner is one EOA with no timelock on setMinShareBalance and setRewardsExcluded, so eligibility for the registry can change at that key. [verified R-3]

Site and account distribution totals were not summed from StockDistributor logs this pass. [claim R-1 R-10]

## Product and mechanics

INDEX is a fixed-supply ERC-20 (1,000,000,000e18) named The Index / Index. Verified source says the 3% each-way tax is not in the token. IndexFeeHook takes it in native ETH on the Uniswap v4 Index/ETH pool. The token keeps a holder registry: every wallet with balance >= minShareBalance (10,000e18) is tracked for StockDistributor; Uniswap v4 PoolManager 0x8366a39C…0951 and 0xdead are rewardsExcluded. [verified R-3 R-6]

The site states a 3% ETH fee on trades funds stock distributions for eligible holders, treasury ETH buys each supported stock in equal parts, and eligible wallets receive pro-rata payouts. An X article dated 2026-07-18 adds a 15-minute cadence, a Zap that compounds stocks back into INDEX, and a 75/25 split of rwa.wtf fees toward stocks versus liquidity. [claim R-1 R-13]

The lead listed book is Uniswap v3 INDEX/WETH pair 0xD29893fFac8b29eC4Db2cfE0CDB3FE1377c028Ff (quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73). Extra books on DexScreener are Uniswap v4 INDEX/ETH and INDEX/USDG, including a USDG pool created 2026-09-02T16:32:50Z. Pair asset on the lead book is WETH; venue is Uniswap. The token was created by EOA 0x89562Eb8…39cb in a direct contract-creation transaction, not by a known launchpad factory. [verified R-4 R-7]

Indices (indices.theindex.finance) lets another coin point its fees at an Index Treasury that buys a stock basket for that coin's holders. rwa.wtf is described as RWA perps on Lighter with a fee share back to INDEX holders. Those surfaces are linked from the @TheIndexFi bio. [claim R-2 R-13 R-17]

## Control and security

owner() on ReflectionToken returns 0x02d9e763154977e2aae47a3a61d940ffe0238fd0, an address with empty code. The token is not a proxy. [verified R-3]

Verified Ownable source lets that owner call setMinShareBalance, setRewardsExcluded and transferOwnership. No timelock sits in that path. IndexFeeHook owner and fee setters were not read because the hook address was not opened. [verified R-3]

No audit report was located on the site, X profile, DexScreener token info or DefiLlama (audits 0). [unknown]

## Team and provenance

@TheIndexFi bio names theindex.finance, indices.theindex.finance and rwa.wtf. DexScreener INDEX token metadata lists the same site and handle. The site SPA title matches The Index; the initial HTML did not embed the CA or the handle. No legal entity is named on those surfaces. [claim R-1 R-2 R-7]

The deployer is EOA 0x89562Eb8979dB1E85A01E85120BFD6A7C47a39cb; the current owner is a different EOA. Named operators for those keys were not published. [verified R-3 R-4]

DefiLlama lists github.com/justintimecompilation. That org is not linked from the site or X bio (unconfirmed-official / third-party-link). github.com/blobsarp/indices, named in an adapter comment, returned 404. No Telegram or Discord was listed. [unknown]

Census Robindex (scanner, 0xd82f70…) and Robinhood Index Vaults (testnet ERC-4626) share index wording only. They do not share domain, handle or address. [inference R-3]

## Economics and activity

DexScreener Uniswap v3 INDEX/WETH pair 0xD29893… at 2026-09-03T17:22:00Z: liquidity.usd 961107.71; volume.h24 4691680.21; marketCap 39500563; priceUsd 0.03950. Extra Uniswap v4 INDEX/ETH 0x00dd2d…: liq 935495.95 vol 695378.06. Uniswap v4 INDEX/USDG 0x51d1a4…: liq 115223.93 vol 459877.59. Newer v4 INDEX/USDG 0x2500e7… created 2026-09-02T16:32:50Z: liq 11645.21 vol 121899.12. Those are pair slices, not protocol TVL. [claim R-7]

Blockscout token holders_count 21645. holderCount() on the registry was 3779, against the site's 3,732–3,759 eligible wallets above 10,000 INDEX. [claim R-1 R-5]

DefiLlama The Index, Robinhood Chain slice, 2026-09-03T17:28:00Z: fees 24h $30,462; revenue 24h $30,462; fees 7d $123,080; cumulative fees $1.68m; cumulative revenue $1.52m. Protocol TVL currentChainTvls is empty. [claim R-8 R-9]

Site: total value distributed $1,524,526.02; fees collected 748.04 ETH. @TheIndexFi posted over $1,500,000 distributed (2026-09-01) and $355,000 / $5,000,000 (2026-08-28). Those totals were not summed from Distributed logs this pass. [claim R-1 R-10 R-12]

## Material risks

- IndexFeeHook address is unpublished in the token source; the 3% each-way ETH tax is described for the Uniswap v4 Index/ETH pool while the lead book is Uniswap v3 INDEX/WETH. [verified R-3] [claim R-7]

- Token owner is one EOA with no timelock on the holder-registry setters. [verified R-3]

- Four Llama-listed distributors have code on 4663; which one is live, and whether its logs match the site total, was not opened on the explorer this pass. [claim R-16]

- No audit report was located. [unknown]

- Distribution size follows taxed volume. [inference R-1 R-3]

## Verification passes

- Receipts: theindex.finance, indices.theindex.finance, X profile and four posts, two HoodInsider posts, Blockscout address/token/tx/source and PoolManager, DexScreener token API, Llama protocol and fees APIs, and the Llama adapter file were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-2 R-3 R-4 R-7 R-9]

- Numbers: DexScreener liquidity and 24h volume are the Uniswap v3 INDEX/WETH pair 0xD29893…, not all INDEX pairs. Llama fees/revenue are the Robinhood Chain slice. Site $1,524,526.02 and X $1,500,000 / $355,000 remain class claim. Blockscout 21645 holders is all holders; registry holderCount is 3779. [claim R-5 R-7 R-9]

- Adversarial: the strongest contrary reading is that INDEX is a generic tax token whose Stock Token story is marketing, or that it is a launchpad / Robindex / Robinhood Index Vaults. Verified source names IndexFeeHook and a StockDistributor registry, the creator is not a pad factory, and Robindex / robinhood-index-vaults do not share CA, domain or handle. The unresolved contrary point is which pool actually pays the 3% fee. [inference R-3 R-4 R-7]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census row index, content/projects/index.yaml, content/pulled/index.yaml (pulled_at 2026-09-02T21:05:36Z, head 52877457), feed/index.yaml, sources/index.yaml and research/index.md read before collection.
- Site: https://theindex.finance and https://indices.theindex.finance. Initial HTML is an SPA (title plus 3% copy via search index); no CA in the first 1k of HTML.
- X: profile @TheIndexFi; posts 2094576268331127014, 2093980538981781685, 2093206326398644297; article 2078269523245821992; HoodInsider 2094656156442534056 and 2093758990450647429. Bio t.co expanded to rwa.wtf and indices.theindex.finance.
- Explorer: Blockscout api/v2/addresses, /tokens, /transactions and /smart-contracts for 0x56910D…89870 and PoolManager 0x8366a39C…0951 succeeded. Later /search and extra address GETs returned Cloudflare challenge pages; those later pages were not used to flip explorer_source_verified.
- RPC: https://rpc.mainnet.chain.robinhood.com eth_getCode, owner(), name(), symbol(), totalSupply(), holderCount(), minShareBalance() on the token; eth_getCode empty on owner 0x02d9e7…; eth_getCode non-empty on INDEX/WETH 0xD29893…, four Llama distributors, factory 0x29502B… and reward vault 0xEe7d05…. Chain head at token read: 52935840.
- DexScreener: latest/dex/tokens/0x56910D…89870 at 2026-09-03T17:22:00Z. Lead print INDEX/WETH v3 liq $961,107.71 vol $4,691,680.21 (desk ballpark ~$957k / ~$4.68M).
- Llama: api.llama.fi/protocol/the-index and summary/fees/the-index; defillama.com/protocol/the-index; github.com/DefiLlama/dimension-adapters/blob/master/fees/the-index.ts.
- GitHub: justintimecompilation/defillama-adapter exists; blobsarp/indices 404. No Telegram listed.
- Possible matches recorded: robindex, robinhood-index-vaults. GO-LIVE CA 0x56910D4409F3a0C78C64DD8D0545FF0705389870 matched project yaml, pulled.yaml, Blockscout and DexScreener.
- Allowed path this run: this packet only. No content/ writes. No push.
