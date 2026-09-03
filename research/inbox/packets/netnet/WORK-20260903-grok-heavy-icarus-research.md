---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: netnet
name: NetNet Capital
packet_tier: seed
as_of: 2026-09-03T03:20:00Z
prior_packet: null
supersedes: null
owned_slugs: [netnet]
allowed_paths:
  - research/inbox/packets/netnet/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: NetNet Capital
  aliases: [NetNet, NetNet Capital Management]
  symbols: [NET]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://netnet.capital
  official_handle: "@NetNetCap"
  repository: "NULL — no GitHub org or repository URL on netnet.capital, docs.netnet.capital, the @NetNetCap bio, Llama, or Blockscout file_path src/NET.sol this pass"
  possible_matches:
    - slug: up
      signals: [other]
      contrary_signals:
        - "Census up is a ve(3,3) AMM at up33.xyz / @uponrh with token 0x57C0…B4F1"
        - "NetNet is netnet.capital / @NetNetCap with token 0xCA9c…0eDf"
        - "DexScreener lists a NET/USDG pool on dexId up; that is a venue, not a shared identity"
        - "No shared domain, handle, or reproduced address"
    - slug: index
      signals: [other]
      contrary_signals:
        - "Census The Index is token 0x5691…9870 / @indexonhood"
        - "NetNet is 0xCA9c…0eDf / @NetNetCap"
        - "A Uniswap v4 NET/Index pool exists; pair membership is not a merge"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/reserve-currency
  secondary_leaves: [yield/savings-vault]
  mechanism_tags: [vault, rwa, stablecoin, fee-routing, lending]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Olympus-v1-style reserve token: NET 0xCA9c…0eDf, Treasury 0x0482…5d66 and Staking 0xB078…2E87 have non-empty code and verified source on chain 4663. GeckoTerminal NET/USDG 0x0d66…deb3 base is this token, not Cloudflare stock token 0x116F…01d4. Llama currentChainTvls Robinhood Chain is 0; staking is 80630578. @NetNetCap $10M treasury post is not RFV. [R-2] [R-6] [R-7] [R-9] [R-11] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-21, CLM-22], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-10, CLM-23], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-15], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-13, CLM-14, CLM-24], note: "" }

links:
  - { kind: site, url: "https://netnet.capital", authenticity: confirmed }
  - { kind: app, url: "https://app.netnet.capital/", authenticity: confirmed }
  - { kind: docs, url: "https://docs.netnet.capital/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/NetNetCap", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/netnetcap", authenticity: confirmed }
  - { kind: other, url: "https://win.netnet.capital/", authenticity: confirmed }

deployments:
  - label: NET token
    role: token
    address:
      value: "0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-7, R-8, R-9]
  - label: Treasury
    role: vault
    address:
      value: "0x04822Ea321A0DEE6F40656172F29312104855d66"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9, R-21]
  - label: Staking
    role: other
    address:
      value: "0xB078cc304A0B264C5F3680DC0488954ACcd02E87"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9, R-22]
  - label: sNET (staked NET)
    role: token
    address:
      value: "0xb773ec2C326B7f98a5a83fc098825492F020a4c7"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9]
  - label: TaxCollector
    role: other
    address:
      value: "0x086C58400b8708Ef993f256E12e752dcF0AC918e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9]
  - label: GenesisBond
    role: other
    address:
      value: "0x575b7B7c97Ef3E21C82DAeB427899d583e1E913f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9]
  - label: BondDepository
    role: other
    address:
      value: "0xff32a969A0c567129eECD926D04657728E1980C1"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2]
  - label: NET/USDG canonical Uniswap v2 pair
    role: other
    address:
      value: "0x59F95461E68e0c77605299791E1449f175165B54"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-9, R-10]
  - label: Team Safe (NET.guardian)
    role: multisig
    address:
      value: "0x3Bb7A23316f82C0e984fA2E784846d8928a35f42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
    receipt_ids: [R-2, R-9]

metrics:
  - { kind: tvl, value: 0, currency: USD, as_of: 2026-09-03T01:47:11Z, window: point, method: "api.llama.fi/protocol/netnet-capital-management currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-6] }
  - { kind: holders, value: 6992, currency: null, as_of: 2026-09-03T02:55:00Z, window: point, method: "Blockscout api/v2/tokens/0xCA9c…0eDf holders_count", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 7142067.66328455, currency: USD, as_of: 2026-09-03T02:55:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xCA9c…0eDf volume_usd.h24", class: claim, receipt_ids: [R-23] }
  - { kind: market_cap, value: 6108502.05189367, currency: USD, as_of: 2026-09-03T02:55:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xCA9c…0eDf market_cap_usd", class: claim, receipt_ids: [R-23] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:58:00Z, receipt_ids: [R-9], result: "eth_blockNumber 0x329f594 (53081492). eth_getCode non-empty: NET 6432 bytes, Treasury 6157, Staking 4821, sNET 2736, TaxCollector 3916, GenesisBond 6585, canonical v2 pair 11293, Safe proxy 344. NET name NetNet, symbol NET, decimals 9, totalSupply 65182030431346. treasury() 0x04822E…5d66, guardian() 0x3Bb7A2…5f42, taxCollector() 0x086C58…918e, canonicalPair() 0x59F954…5B54, genesisBond() 0x575b7B…913f, wired() true, taxEnabled() true, taxTotalBps() 500. uniswapV2Factory() 0x8bcEaA…937f. USDG decimals 6; USDG.balanceOf(Treasury) 2394555191728 (2394555.191728). NET.balanceOf(Staking) 58492822194093 (58492.822194093). Safe getThreshold() 1; getOwners() [0xe7e867518c5b3d929ca63622f314ff9dc60e96f6]. Cloudflare NET 0x116F…01d4 code 283 bytes." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:56:00Z, receipt_ids: [R-7, R-8, R-21, R-22], result: "Blockscout API v2: NET name NET / token NetNet symbol NET decimals 9 is_verified true creator 0xCfBd7e12…07B9 tx 0xbfe633ae…90f7 2026-07-16T17:32:50Z block 11439688 file_path src/NET.sol compiler v0.8.30. Treasury name Treasury verified. Staking name Staking verified. sNET name StakedNET token Staked NET / sNET. TaxCollector, GenesisBond, BondDepository, UniswapV2Pair 0x59F954…5B54 verified. Guardian SafeProxy proxy_type master_copy verified. Cloudflare 0x116F…01d4 BeaconProxy token Cloudflare, Inc. • Robinhood Token symbol NET decimals 18." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T01:50:00Z, receipt_ids: [R-6], result: "GET api.llama.fi/protocol/netnet-capital-management: name NetNet Capital Management symbol NET category Reserve Currency chains [Robinhood Chain] twitter NetNetCap url https://netnet.capital address robinhood:0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf currentChainTvls Robinhood Chain 0, Robinhood Chain-staking 80630578.49838. tvl last {date 1788400031, totalLiquidityUSD 0}. methodology NET staked in the NetNet staking contract. gecko_id null." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T02:53:00Z, receipt_ids: [R-1, R-2, R-5, R-18, R-19], result: "netnet.capital twitter:site @netnetcap and og:url https://netnet.capital/. docs.netnet.capital/official-channels lists netnet.capital, app.netnet.capital, docs.netnet.capital, x.com/netnetcap, t.me/netnetcap and the core contract table. app.netnet.capital twitter:site @netnetcap. @NetNetCap bio Reserve Manager for $NET on Robinhood Chain. t.me/netnetcap og:title NetNet Capital Management." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-10, R-11, R-12, R-23], result: "GeckoTerminal networks/robinhood/pools/0x0d662a…deb3 name NET/USDG 0.9% reserve_in_usd 1496392 base robinhood_0xca9c78dd…0edf quote robinhood_0x5fc5360d…1d168 dex uniswap-v4-robinhood created 2026-08-25T21:12:20Z. DexScreener token-pairs for 0xCA9c…0eDf: 21 pools, name NetNet / NET, websites app.netnet.capital and docs.netnet.capital, twitter x.com/netnetcap. GeckoTerminal token 0x116F…01d4 name Cloudflare, Inc. • Robinhood Token symbol net." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Olympus-v1-style reserve token: Treasury is the sole NET minter; staking wraps NET into rebasing sNET on 8-hour epochs; BondDepository sells NET at max(TWAP*(1-discount), NAV); InverseBond is a standing bid at NAV-1.5%. Reserve asset is USDG plus protocol-owned NET/USDG v2 LP. Tokenized equities sit in a separate RWA Sleeve and are not RFV.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://netnet.capital", class: verified, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@NetNetCap", class: verified, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-2, R-7, R-8, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x04822Ea321A0DEE6F40656172F29312104855d66", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-2, R-9, R-21], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0xB078cc304A0B264C5F3680DC0488954ACcd02E87", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-2, R-9, R-22], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: rwa-products/reserve-currency, class: claim, observed_at: 2026-09-03T01:50:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: identity.symbol, value: "NET", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: product.mechanism, value: "NET transfers to or from a mapped AMM pair accrue taxTotalBps() 500 (5%) to TaxCollector; wallet-to-wallet is untaxed. Guardian may add pairs only; no removal path in the verified source comment.", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Robinhood Chain TVL 0 USD at date 1788400031 (2026-09-03T01:47:11Z) from currentChainTvls['Robinhood Chain'], not an all-chains total", class: verified, observed_at: 2026-09-03T01:50:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "Robinhood Chain-staking 80630578.49838 USD at the same Llama read; methodology is NET staked in the NetNet staking contract. Not TVL.", class: verified, observed_at: 2026-09-03T01:50:00Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: control.threshold, value: "NET.guardian() = SafeProxy 0x3Bb7A233…5f42. getThreshold() returned 1; getOwners() returned one address 0xe7e867518c5b3d929ca63622f314ff9dc60e96f6. Docs label the same address Team multisig (Safe).", class: verified, observed_at: 2026-09-03T03:05:00Z, receipt_ids: [R-2, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "Verified NET.sol: minting is Treasury-only; owner() is absent (eth_call reverted). Guardian is the add-only tax-pair key. Docs: no owner, pause, or upgrade on core contracts.", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-3, R-7, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: identity.alias, value: "NetNet Capital Management", class: verified, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-16, field: "account.@NetNetCap.role", value: project, class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@NetNetCap.slug", value: netnet, class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: identity.symbol, value: "Ticker NET on Robinhood also names Cloudflare stock token 0x116F00968269B7bfbaD4109cE591d6E74c0601d4 (BeaconProxy, decimals 18). GeckoTerminal/DexScreener NET/USDG for this slug is base 0xCA9c…0eDf (NetNet, decimals 9), not 0x116F…01d4. Flag ticker-only; do not merge.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-11, R-12, R-23], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-19, field: "account.@NetNetCaps.note", value: "handle-collision: @NetNetCaps display name NetNet Capital || SUPPORT, bio Reserve Manager for $NET on Robinhood Chain, 627 followers. Docs official-channels lists only x.com/netnetcap. Do not treat @NetNetCaps as official.", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-2, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "NET holders_count 6992 on Blockscout api/v2/tokens at 2026-09-03T02:55Z", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-7], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xb773ec2C326B7f98a5a83fc098825492F020a4c7", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-2, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x59F95461E68e0c77605299791E1449f175165B54", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-2, R-9, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T01:50:00Z, receipt_ids: [R-2, R-6], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-24, field: economics.metric, value: "USDG.balanceOf(Treasury 0x0482…5d66) = 2394555191728 units at 6 decimals = 2394555.191728 USDG at block 53081492. Liquid treasury USDG is not the $10,000,000 figure @NetNetCap posted.", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-9, R-13], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-25, field: "account.@NetNetCap.note", value: "Handle listed on netnet.capital and docs official-channels. Bio Reserve Manager for $NET on Robinhood Chain.", class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: security.audit, value: "No audit report URL was located on netnet.capital, docs.netnet.capital, Llama, or the @NetNetCap bio this pass", class: unknown, observed_at: 2026-09-03T03:10:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: other, value: "GeckoTerminal live NET/USDG 0x0d662a58507a46cd6a22632228306dc0d9c26f5fce90c37ced3b8358db33deb3 is Uniswap v4 Robinhood, base 0xCA9c…0eDf (this slug). Treat that pool as NetNet. Cloudflare NET/USDG pools are a different token.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [REP-5], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DefiLlama NetNet staking slice is $80.63M, TVL $0"
    summary: "api.llama.fi/protocol/netnet-capital-management currentChainTvls Robinhood Chain 0; staking 80630578."
    occurred_at: 2026-09-03T01:47:11Z
    observed_at: 2026-09-03T01:50:00Z
    affected_fields: [economics.metric, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-2
    type: company
    title: "@NetNetCap posts treasury above $10,000,000"
    summary: "The account posted the treasury surpassed $10,000,000 and the largest NVDA, AAPL and SPCX holdings."
    occurred_at: 2026-09-02T15:56:17Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-3
    type: company
    title: "@NetNetCap posts NetNet Gear verified on OpenSea"
    summary: "The account posted opensea.io/collection/netnet-gear verified, minted via Subway Runner, $150,000 volume."
    occurred_at: 2026-09-01T19:19:02Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: company
    title: "@NetNetCap posts NAV per NET about $150"
    summary: "The account posted market price was $130 two weeks earlier on MCG and NAV per NET is about $150."
    occurred_at: 2026-09-01T18:23:48Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-5
    type: ct
    title: "@MCGlive hosts $NET / @NetNetCap update stream"
    summary: "@MCGlive posted a $NET | @NetNetCap update stream covering treasury revenue, games, and a wrapped staked token."
    occurred_at: 2026-09-01T20:38:43Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-6
    type: company
    title: "@NetNetCap posts treasury above $8,500,000"
    summary: "The account posted the treasury eclipsed $8,500,000 and #1 holder of three equities on Robinhood Crypto."
    occurred_at: 2026-08-31T22:21:04Z
    observed_at: 2026-09-03T02:40:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-7
    type: onchain
    title: "NET token deployed on Robinhood Chain"
    summary: "Contract 0xCA9c…0eDf created 2026-07-16T17:32:50Z by 0xCfBd7e12…07B9; verified source name NET."
    occurred_at: 2026-07-16T17:32:50Z
    observed_at: 2026-09-03T02:56:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7, R-8]

receipts:
  - { id: R-1, publisher: NetNet Capital Management, title: "NetNet Capital Management homepage", url: "https://netnet.capital/", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-15, CLM-25], excerpt: "title NetNet Capital Management. meta description: NetNet Capital Management, sponsor of NET — a reserve-backed digital instrument on Robinhood Chain. Prospectus available. og:url https://netnet.capital/. twitter:site @netnetcap. twitter:creator @netnetcap. connect-src includes https://rpc.mainnet.chain.robinhood.com." }
  - { id: R-2, publisher: NetNet Capital Management, title: "Official Channels", url: "https://docs.netnet.capital/official-channels", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-15, CLM-19, CLM-21, CLM-22, CLM-23], excerpt: "Website netnet.capital. App app.netnet.capital. Docs docs.netnet.capital. X x.com/netnetcap. Telegram t.me/netnetcap. NET 0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf. sNET 0xb773ec2C326B7f98a5a83fc098825492F020a4c7. Staking 0xB078cc304A0B264C5F3680DC0488954ACcd02E87. Treasury 0x04822Ea321A0DEE6F40656172F29312104855d66. Canonical NET/USDG pair 0x59F95461E68e0c77605299791E1449f175165B54. Team multisig (Safe) 0x3Bb7A23316f82C0e984fA2E784846d8928a35f42. Chain 4663, deployed 2026-07-16." }
  - { id: R-3, publisher: NetNet Capital Management, title: "The Fund (Mechanism)", url: "https://docs.netnet.capital/mechanism", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-14], excerpt: "NET is a reserve-backed token mirroring the OlympusDAO v1 architecture — Token, rebasing staked token, Treasury, BondDepository, Distributor — plus TaxCollector, GenesisBond, InverseBond, PremiumSeller, and pTEAM. Epoch is 8 hours. There are no owner functions anywhere on the emissions path. Every NET is at all times backed by at least 1 USDG of risk-free value. Bond floor is NAV. Buyback Program standing bid at NAV − 1.5%." }
  - { id: R-4, publisher: NetNet Capital Management, title: "Treasury & NAV", url: "https://docs.netnet.capital/treasury", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "The reserve asset is USDG, and only USDG. At most 70% of treasury USDG may be deployed to Morpho. RFV = liquidUSDG + morphoPositionUSDG × (1 − 2%) + rfvOfPOL. NAV = RFV / totalSupply. Tokenized equities (NVDA, SPCX, AAPL; residual GOOGL, MSFT, COIN) are held in the NetNet RWA Sleeve — outside RFV and backing, never counted toward NAV. No code path moves reserves into the Sleeve." }
  - { id: R-5, publisher: "@NetNetCap", title: "NetNet Capital profile", url: "https://x.com/NetNetCap", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-15, CLM-16, CLM-17, CLM-25], excerpt: "Display name NetNet Capital, handle @NetNetCap. Bio: Reserve Manager for $NET on Robinhood Chain. Play Games with Stocks. Followers 14449. Blue Verified." }
  - { id: R-6, publisher: DefiLlama, title: "NetNet Capital Management protocol row", url: "https://api.llama.fi/protocol/netnet-capital-management", published_at: null, accessed_at: 2026-09-03T01:50:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-8, CLM-11, CLM-12, CLM-23, EVT-1], excerpt: "name NetNet Capital Management symbol NET category Reserve Currency chains [Robinhood Chain] twitter NetNetCap url https://netnet.capital address robinhood:0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf methodology NET staked in the NetNet staking contract. currentChainTvls Robinhood Chain 0 Robinhood Chain-staking 80630578.49838. tvl last date 1788400031 totalLiquidityUSD 0. gecko_id null." }
  - { id: R-7, publisher: Blockscout, title: "Address 0xCA9c…0eDf NET", url: "https://robinhoodchain.blockscout.com/address/0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, CLM-9, CLM-10, CLM-14, CLM-20, EVT-7], excerpt: "hash 0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf name NET is_contract true is_verified true creator 0xCfBd7e12A0f154a45576a73C1E409200068507B9 tx 0xbfe633ae…90f7. Token name NetNet symbol NET decimals 9 holders_count 6992 total_supply 65182030431346. file_path src/NET.sol compiler v0.8.30 is_partially_verified false. Comment: NET — NetNet reserve token. ERC-20, 9 decimals, immutable 500 bps fee-on-transfer." }
  - { id: R-8, publisher: Blockscout, title: "NET creation tx 0xbfe633ae…", url: "https://robinhoodchain.blockscout.com/tx/0xbfe633ae9d403bf2d5140fad11db3a561e06cabe0a96eda702ae64d26cb090f7", published_at: 2026-07-16T17:32:50Z, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, EVT-7], excerpt: "timestamp 2026-07-16T17:32:50.000000Z status ok result success from 0xCfBd7e12A0f154a45576a73C1E409200068507B9 is_contract false block_number 11439688 created_contract 0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf name NET is_verified true." }
  - { id: R-9, publisher: Robinhood Chain RPC, title: "eth_getCode, ERC-20, treasury/guardian wiring, Safe owners", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-13, CLM-14, CLM-21, CLM-22, CLM-24], excerpt: "block 53081492. NET name NetNet symbol NET decimals 9 totalSupply 65182030431346. treasury() 0x04822ea3…5d66. guardian() 0x3bb7a233…5f42. taxCollector() 0x086c5840…918e. canonicalPair() 0x59f95461…5b54. taxTotalBps() 500. wired true taxEnabled true. USDG.balanceOf(treasury) 2394555191728 (6 decimals). NET.balanceOf(staking) 58492822194093. Safe getThreshold 1, one owner 0xe7e86751…96f6." }
  - { id: R-10, publisher: DexScreener, title: "Robinhood token-pairs for 0xCA9c…0eDf", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-22], excerpt: "21 pairs. Top Uniswap v4 NET/USDG 0x0d662a58507a46cd6a22632228306dc0d9c26f5fce90c37ced3b8358db33deb3 liq 1303258 vol 3509185. Uniswap v2 NET/USDG 0x59F95461E68e0c77605299791E1449f175165B54 liq 807830. Base token name NetNet symbol NET. info websites https://app.netnet.capital/ https://docs.netnet.capital/ socials https://x.com/netnetcap https://t.me/netnetcap." }
  - { id: R-11, publisher: GeckoTerminal, title: "NET/USDG 0.9% Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0d662a58507a46cd6a22632228306dc0d9c26f5fce90c37ced3b8358db33deb3", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-18, CLM-27], excerpt: "name NET / USDG 0.9% address 0x0d662a58507a46cd6a22632228306dc0d9c26f5fce90c37ced3b8358db33deb3 reserve_in_usd 1496392.7462 pool_created_at 2026-08-25T21:12:20Z. relationships base_token robinhood_0xca9c78dd337a67f6e0077f65f5e9218719d30edf quote_token robinhood_0x5fc5360d0400a0fd4f2af552add042d716f1d168 dex uniswap-v4-robinhood." }
  - { id: R-12, publisher: GeckoTerminal, title: "Cloudflare NET stock token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x116F00968269B7bfbaD4109cE591d6E74c0601d4", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-18, CLM-27], excerpt: "address 0x116f00968269b7bfbad4109ce591d6e74c0601d4 name Cloudflare, Inc. • Robinhood Token symbol net. Distinct from NetNet 0xca9c78dd337a67f6e0077f65f5e9218719d30edf." }
  - { id: R-13, publisher: "@NetNetCap", title: "Treasury has officially surpassed $10,000,000", url: "https://x.com/NetNetCap/status/2095179011823730865", published_at: 2026-09-02T15:56:17Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24, EVT-2], excerpt: "Shareholders, The NetNet Capital Management Treasury has officially surpassed $10,000,000. We started at $0 and in under two months are now the largest holders of NVDA, AAPL, and SPCX on @RobinhoodCrypto. We've built 15 unique RWA experiences, have had the #1 trending collection on @opensea two times, and truthfully... We are just getting started. More Soon." }
  - { id: R-14, publisher: "@NetNetCap", title: "NetNet Gear Collection verified on OpenSea", url: "https://x.com/NetNetCap/status/2094867645078409568", published_at: 2026-09-01T19:19:02Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Shareholders, The NetNet Gear Collection is now verified on @opensea. https://opensea.io/collection/netnet-gear This iteration of gear was minted via the Subway Runner Game. Already $150,000 of volume through the collection. Another loot drop looms. More Soon." }
  - { id: R-15, publisher: "@NetNetCap", title: "NAV per net is ~$150", url: "https://x.com/NetNetCap/status/2094853746652287455", published_at: 2026-09-01T18:23:48Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Shareholders, Two weeks ago when we joined @MCGlive market price of NET was $130. Today, two weeks later, NAV per net is ~$150. Where will we be two weeks from today?" }
  - { id: R-16, publisher: "@NetNetCap", title: "Treasury eclipsed $8,500,000", url: "https://x.com/NetNetCap/status/2094551068214694342", published_at: 2026-08-31T22:21:04Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "Shareholders, The NetNet Capital Management Treasury has eclipsed $8,500,000 in total assets. We are the #1 holder of three blue chip equities on @RobinhoodCrypto. The Subway Runner game just eclipsed $10M of notional play volume. Things are just beginning. More Soon." }
  - { id: R-17, publisher: "@MCGlive", title: "$NET | @NetNetCap update stream", url: "https://x.com/MCGlive/status/2094887701040558352", published_at: 2026-09-01T20:38:43Z, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "Today on MCG $NET | @NetNetCap NetNet Capital is the Reserve Manager for $NET on Robinhood Chain. Highlights include: Recap since last time; Treasury revenue breakdown; Subway game details; NFT rewards; The RW Play thesis; Wrapped staked token version; No-loss lottery explained." }
  - { id: R-18, publisher: Telegram, title: "t.me/netnetcap", url: "https://t.me/netnetcap", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3], excerpt: "og:title NetNet Capital Management. og:description You can view and join @netnetcap right away. twitter:title NetNet Capital Management." }
  - { id: R-19, publisher: NetNet Capital Management, title: "NetNet Shareholder Services", url: "https://app.netnet.capital/", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "title NetNet Shareholder Services. meta description: Shareholder Services: enroll in the dividend program, subscribe to bonds, review NAV, and use the buyback program. NetNet Capital Management. og:url https://app.netnet.capital/. twitter:site @netnetcap." }
  - { id: R-20, publisher: "@NetNetCaps", title: "NetNetCaps profile", url: "https://x.com/NetNetCaps", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "Display name NetNet Capital || SUPPORT ✪, handle @NetNetCaps. Bio: Reserve Manager for $NET on Robinhood Chain. Play Games with Stocks. Followers 627." }
  - { id: R-21, publisher: Blockscout, title: "Address 0x0482…5d66 Treasury", url: "https://robinhoodchain.blockscout.com/address/0x04822Ea321A0DEE6F40656172F29312104855d66", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x04822Ea321A0DEE6F40656172F29312104855d66 name Treasury is_contract true is_verified true creator 0xCfBd7e12A0f154a45576a73C1E409200068507B9 creation_transaction_hash 0xae97500dbb92e8ecd0a28dda0c9871af777d61d93a227be516769472aabfb156." }
  - { id: R-22, publisher: Blockscout, title: "Address 0xB078…2E87 Staking", url: "https://robinhoodchain.blockscout.com/address/0xB078cc304A0B264C5F3680DC0488954ACcd02E87", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "hash 0xB078cc304A0B264C5F3680DC0488954ACcd02E87 name Staking is_contract true is_verified true creator 0xCfBd7e12A0f154a45576a73C1E409200068507B9 creation_transaction_hash 0x498f2123cdc769cb4bdd71b73ac97fd25472392c9322724faf54b91f93a534e9." }
  - { id: R-23, publisher: GeckoTerminal, title: "NetNet token on Robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xCA9c78Dd337A67F6e0077F65F5E9218719d30eDf", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-18], excerpt: "address 0xca9c78dd337a67f6e0077f65f5e9218719d30edf name NetNet symbol NET decimals 9 coingecko_coin_id netnet total_supply 65176018448616 normalized_total_supply 65176.018448616 price_usd 1266.1991346526 fdv_usd 82525818.1597401 market_cap_usd 6108502.05189367 volume_usd.h24 7142067.66328455 total_reserve_in_usd 2074748.83." }

gaps:
  - { priority: P0, question: "What is on-chain RFV/NAV at the Treasury versus the $10,000,000 @NetNetCap figure, including Morpho shares and POL?", checked: "USDG.balanceOf(Treasury) 2394555.191728 at block 53081492; docs say Morpho cap 70% and RWA Sleeve is outside RFV; Llama TVL 0, 2026-09-03", next: "eth_call Treasury RFV/NAV views from verified source; read Morpho vault 0xBeEff033…09dd shares" }
  - { priority: P0, question: "What is the NetNet RWA Sleeve address, and do NVDA/AAPL/SPCX balances reproduce the largest-holder posts?", checked: "docs/treasury names the Sleeve and lists NVDA, SPCX, AAPL; no sleeve address on official-channels; not located this pass", next: "read docs/rwa-desk and site JS for sleeve(); reproduce token balances on 4663" }
  - { priority: P1, question: "Where is the DefiLlama adapter that sets methodology 'NET staked in the NetNet staking contract' and TVL 0?", checked: "raw.githubusercontent.com DefiLlama-Adapters projects/netnet-capital-management and projects/netnet 404; GitHub code search required auth, 2026-09-03", next: "open the adapter once the path is public and match staking 0xB078…2E87" }
  - { priority: P1, question: "Does InverseBond 0x9216…C4C9 fill at NAV-1.5% as documented, and is there an audit matching src/NET.sol?", checked: "address published on official-channels; no audit URL on site, docs, Llama, or X bio, 2026-09-03", next: "read InverseBond verified source; search auditor indexes named on docs" }
  - { priority: P2, question: "Is there a public repository for src/NET.sol?", checked: "netnet.capital, docs, @NetNetCap bio, Llama github field empty, 2026-09-03", next: "search GitHub for file_path src/NET.sol and constructor guardian wiring" }
  - { priority: P2, question: "Does @NetNetCaps link to netnet.capital, or only copy the bio?", checked: "profile bio matches @NetNetCap; docs list only x.com/netnetcap; website on the lookalike not opened line by line, 2026-09-03", next: "open the @NetNetCaps website field and compare the domain" }
---

# NetNet Capital — research packet

## What it is

Reserve-backed currency on Robinhood Chain. NET is minted only by the Treasury, staked into rebasing sNET every 8 hours, and sold through bonds against a USDG reserve plus protocol-owned NET/USDG liquidity. Users buy NET/USDG, stake for dividends, or subscribe to bonds and RWA programs at netnet.capital. NetNet Capital Management (@NetNetCap) publishes the contracts; tax-pair adds sit with Safe 0x3Bb7…5f42.

Themes: rwa, vault, lending, nft, stock-paired:NVDA

## Why it matters

GeckoTerminal's live NET/USDG pool is this token (0xCA9c…0eDf), not the Cloudflare stock token that also tickers NET. Llama's Robinhood staking slice is $80.63M while TVL is $0, because the adapter counts staked NET rather than treasury USDG. The product is the chain's published reserve-currency row.

## What could go wrong

Liquid USDG on the Treasury at this read is 2,394,555, not the $10,000,000 the account posted; docs put tokenized equities in a Sleeve outside RFV. Guardian is a Safe whose on-chain threshold is 1. Transfers against mapped pairs take a 5% tax. Ticker NET also names Cloudflare stock token 0x116F…01d4.

## Product and mechanics

NET is an ERC-20 (9 decimals) with a 500 bps fee on buys and sells against mapped AMM pairs. Minting is Treasury-only. Staking issues rebasing sNET on an 8-hour epoch. Bonds sell at or above NAV; a buyback contract is documented as a standing bid at NAV minus 1.5%. [claim R-3] [verified R-7 R-9]

Reserves that back NAV are USDG and protocol-owned NET/USDG v2 LP. Tokenized equities from the RWA programs are documented as Sleeve holdings, not RFV. [claim R-4]

## Control and security

`owner()` is absent on NET. `guardian()` returns Safe 0x3Bb7…5f42. `getThreshold()` returned 1 and `getOwners()` returned 0xe7e86751…96f6. Docs label that address a team Safe and say the tax-pair map is add-only. [verified R-2 R-9]

No audit report URL was located on the site, docs, Llama, or the X bio this pass. [unknown]

## Team and provenance

netnet.capital and docs.netnet.capital/official-channels list @NetNetCap and t.me/netnetcap. The handle bio lists Reserve Manager for $NET. Creator of the core contracts is EOA 0xCfBd7e12…07B9. No repository URL was located. [verified R-1 R-2 R-5]

@NetNetCaps uses the same bio text; docs list only x.com/netnetcap. Flag handle-collision. [claim R-2 R-20]

## Economics and activity

Llama Robinhood Chain TVL is 0 USD at 2026-09-03T01:47:11Z. Llama staking is 80630578 USD. [claim R-6]

RPC: USDG.balanceOf(Treasury) 2394555.191728; NET.balanceOf(Staking) 58492.822194093 of 65182.030431346 totalSupply. Blockscout holders 6992. GeckoTerminal 24h volume 7142067 USD; market_cap_usd 6108502. [verified R-9] [claim R-7 R-23]

@NetNetCap posted a $10,000,000 treasury on 2026-09-02. That figure is not the liquid USDG balance and is not Llama TVL. [claim R-13]

## Material risks

- Liquid Treasury USDG at this block is 2.39M; the $10M post is a different number and the RWA Sleeve is documented as outside RFV. [verified R-9] [claim R-4 R-13]
- Guardian Safe threshold is 1. [verified R-9]
- 5% tax on mapped-pair transfers. [verified R-9]
- Ticker NET also names Cloudflare stock token 0x116F…01d4. [verified R-12]
- No audit report located this pass. [unknown]

## Verification passes

- Receipts: netnet.capital, app, docs official-channels/mechanism/treasury, @NetNetCap profile and posts, t.me/netnetcap, Llama protocol, DexScreener token-pairs, GeckoTerminal pool and both NET tokens, Blockscout NET/Treasury/Staking/create tx, and RPC were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-2 R-6 R-7 R-9 R-11]
- Numbers: TVL 0 is the Robinhood chain slice, not the 80630578 staking figure. Treasury USDG 2394555 is `balanceOf`, not RFV. Gecko 24h volume 7142067 is the token aggregator figure, not a single pool. [claim R-6 R-23] [verified R-9]
- Adversarial: the strongest contrary reading is that Gecko NET/USDG is Cloudflare stock token 0x116F…01d4. Pool 0x0d662a…deb3 base is robinhood_0xca9c…0edf, DexScreener name is NetNet, and Cloudflare's token is a different address and decimal count. [inference R-11 R-12]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census netnet, content/projects/netnet.yaml, content/pulled/netnet.yaml (TVL 0, no token address, llama fees 400), content/feed/netnet.yaml, content/sources/netnet.yaml, content/research/netnet.md, content/dependencies/stock-tokens.yaml NET Cloudflare row, docs/templates/research-packet-v2.md and schema/packet.schema.json read before collection.
- Identity: GeckoTerminal search NET/USDG returned pool 0x0d662a…deb3; networks/robinhood/pools confirmed base 0xCA9c…0eDf (NetNet). Cloudflare 0x116F…01d4 is a separate BeaconProxy with symbol NET. DexScreener token-pairs for 0xCA9c…0eDf name NetNet and link app.netnet.capital / docs.netnet.capital / x.com/netnetcap.
- Official: netnet.capital, app.netnet.capital, win.netnet.capital, docs.netnet.capital (index, official-channels, mechanism, treasury), t.me/netnetcap.
- Explorer: Blockscout api/v2 with a Chrome User-Agent for NET, Treasury, Staking, sNET, TaxCollector, GenesisBond, BondDepository, canonical pair, Safe, Cloudflare NET, create tx. RPC eth_getCode/eth_call at block 53081492.
- Third party: api.llama.fi/protocol/netnet-capital-management and /protocols; DexScreener token-pairs; GeckoTerminal token and pool; CoinGecko search id netnet.
- X: @NetNetCap profile; 2 Sep $10M; 1 Sep OpenSea gear, NAV ~$150, MCG quote; 31 Aug $8.5M. @NetNetCaps profile for handle-collision. @MCGlive stream post.
- Failed: DefiLlama-Adapters raw paths projects/netnet-capital-management and projects/netnet 404; GitHub code search required authentication. from:HoodInsider_ NetNet returned no posts this pass (census $677K recap not re-opened as a status URL). from:jumperapp NET returned no posts this pass. InverseBond, Morpho vault shares, and RWA Sleeve address not eth_called. Safe getOwners first attempt used a bad selector encoding; retry succeeded.
- Time: collection 2026-09-03T01:47Z–2026-09-03T03:20Z.
