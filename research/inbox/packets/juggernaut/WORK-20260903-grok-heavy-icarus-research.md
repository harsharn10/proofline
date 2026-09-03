---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: juggernaut
name: JUGGERNAUT
packet_tier: seed
as_of: 2026-09-03T04:26:00Z
prior_packet: null
supersedes: null
owned_slugs: [juggernaut]
allowed_paths:
  - research/inbox/packets/juggernaut/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: JUGGERNAUT
  aliases: ["The Juggernaut"]
  symbols: [JUGGERNAUT]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://juggernautrh.com
  official_handle: "@Juggernautrh"
  repository: "NULL — no GitHub org or repository URL on juggernautrh.com, DexScreener, Gecko search, Blockscout, or X search this pass"
  possible_matches:
    - slug: noxa
      signals: [shared-deployer]
      contrary_signals:
        - "Census NOXA Fun is the launchpad at fun.noxa.eth.limo / @Noxa_Fi with factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB"
        - "JUGGERNAUT is the ERC-20 LaunchToken at 0xD732…3B88 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; juggernautrh.com and @Juggernautrh do not operate the pad"
    - slug: pons
      signals: [ticker-only]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily with Pons v1/v2 launch factories"
        - "Canonical JUGGERNAUT is a NOXA LaunchToken at 0xD732…3B88, not a Pons clone"
        - "Same-ticker JUGGERNAUT/HOODon 0xAeaB…8888 lists @JuggernautonRH_; X user @juggernautonrh bio says Built on @ponsdotfamily and is a different handle"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "JUGGERNAUT is an ETH-book LaunchToken quoting WETH 0x0Bd7…AD73, not a stock token"
        - "No shared domain, handle, or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Census pools.trade is Uniswap Labs' Uniswap v4 pad at pools.trade / @TradePools; factory 0x000000e2…d49b"
        - "JUGGERNAUT main book is Uniswap v3 factory 0x1f7d…2EfA poolFor(10000), not a UERC20Factory clone"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "JUGGERNAUT is The Juggernaut 0xD732…3B88 paired to WETH on Uniswap v3"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xD732…3B88 is a partially verified LaunchToken with non-empty code on 4663; creator_address_hash and launchFactory() are NOXA factory 0xD9eC…FccB. Main book is Uniswap v3 JUGGERNAUT/WETH 1% 0x588b…2746 quoting WETH 0x0Bd7…AD73. ETH book, not stock-paired. Distinct from packed CHUMP/WETH and SHRUB/WETH. Site juggernautrh.com lists the CA and @Juggernautrh. [R-1] [R-5] [R-6] [R-7] [R-8]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://juggernautrh.com/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/Juggernautrh", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/juggernaut_rh", authenticity: unconfirmed }
  - { kind: other, url: "https://fun.noxa.fi/robinhood/token/0xd7321801caae694090694ff55a9323139f043b88", authenticity: unconfirmed }
  - { kind: other, url: "https://x.com/vladtenev/status/1926051737258918360", authenticity: unconfirmed }

deployments:
  - label: JUGGERNAUT token (LaunchToken)
    role: token
    address:
      value: "0xD7321801CAae694090694Ff55A9323139F043B88"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:21:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-4, R-5]
  - label: NOXA Fun launch factory (token creator / launchFactory)
    role: factory
    address:
      value: "0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:21:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-2, R-5, R-18]
  - label: Uniswap v3 JUGGERNAUT/WETH 1% pool (liquidityPool)
    role: other
    address:
      value: "0x588b0785f50063260003B7790C42f1eF74902746"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:20:42Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-17]
  - label: WETH9 (pairToken / pair quote)
    role: token
    address:
      value: "0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-5, R-6, R-7]

metrics:
  - { kind: volume_24h, value: 1720192.78, currency: USD, as_of: 2026-09-03T04:20:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/search/pools?query=JUGGERNAUT&network=robinhood first row JUGGERNAUT / WETH 1% 0x588b…2746 volume_usd.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 485702.46, currency: USD, as_of: 2026-09-03T04:20:00Z, window: point, method: "api.geckoterminal.com/api/v2/search/pools?query=JUGGERNAUT&network=robinhood first row JUGGERNAUT / WETH 1% 0x588b…2746 reserve_in_usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 1727572.61, currency: USD, as_of: 2026-09-03T04:20:42Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xD732…3B88 pair 0x588b…2746 JUGGERNAUT/WETH Uniswap v3 volume.h24", class: claim, receipt_ids: [R-6] }
  - { kind: tvl, value: 487000.38, currency: USD, as_of: 2026-09-03T04:20:42Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD732…3B88 pair 0x588b…2746 liquidity.usd", class: claim, receipt_ids: [R-6] }
  - { kind: market_cap, value: 6456627, currency: USD, as_of: 2026-09-03T04:20:42Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD732…3B88 pair 0x588b…2746 fdv/marketCap", class: claim, receipt_ids: [R-6] }
  - { kind: holders, value: 16850, currency: null, as_of: 2026-09-03T04:21:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xD7321801CAae694090694Ff55A9323139F043B88 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:22:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32aba93 (53131923) then 0x32abede (53133022). Token 0xD732…3B88 eth_getCode 4830 bytes (not EIP-1167). name The Juggernaut, symbol JUGGERNAUT, decimals 18, totalSupply 1e27. owner() and factory() revert. launchFactory() 0xD9eC…FccB. pairToken() 0x0Bd7…AD73. liquidityPool() 0x588b…2746. deployer() 0xe5f8…8361 code 0x. dexFactory() 0x1f7d…2EfA. positionManager() 0x7399…0D3. poolFee 10000. maxWalletBps 200. maxTxBps 10000. restrictionBlocks 366. Factory code 22811 B. Pool code 22142 B. WETH code 2202 B. launchBlock() 25362237 vs Blockscout create block 126005." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-17, R-18], result: "Blockscout api/v2 token 0xD732…3B88 name The Juggernaut symbol JUGGERNAUT holders_count 16850 total_supply 1e27. Address is_contract true is_verified true name LaunchToken creator 0xD9eC…FccB tx 0xbbb2…3b1f 2026-06-20T23:59:08Z block 126005 method 0x686399cb from EOA 0xe5f8…8361. Source contracts/LaunchToken.sol compiler v0.8.30 is_partially_verified true verified_at 2026-07-14T20:07:26Z. TokenDeployed token 0xD732…3B88 deployer 0xe5f8…8361 dexFactory 0x1f7d…2EfA pairToken WETH. PoolCreated fee 10000 pool 0x588b…2746. Pool name UniswapV3Pool is_verified true. Factory 0xD9eC…FccB is_verified false." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:20:42Z, receipt_ids: [R-6, R-7, R-15], result: "DexScreener latest/dex/tokens/0xD732…3B88: 10 robinhood pairs; top JUGGERNAUT/WETH v3 0x588b…2746 quote WETH 0x0Bd7…AD73 liquidity.usd 487000.38 volume.h24 1727572.61 fdv/marketCap 6456627 pairCreatedAt 2026-06-20T23:59:08Z info.websites juggernautrh.com info.socials @Juggernautrh t.me/juggernaut_rh. Secondary JUGGERNAUT/USDG v4 0x6851…ffc1 liquidity.usd 179686.57 volume.h24 932245.16. Gecko search first row JUGGERNAUT / WETH 1% 0x588b…2746 reserve_in_usd 485702.46 volume_usd.h24 1720192.78. Gecko networks/robinhood/pools/{pool} and tokens/{token} returned HTTP 429 this pass; not retried." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T04:22:00Z, receipt_ids: [R-8, R-9, R-19], result: "juggernautrh.com publishes CA 0xd7321801caae694090694ff55a9323139f043b88, DexScreener pool 0x588b…2746, Follow on X https://x.com/Juggernautrh, Buy on Noxa fun.noxa.fi/…/0xd732…. Footer: Not affiliated with Robinhood Markets. @Juggernautrh 2026-07-09 posted Our website is live! https://juggernautrh.com/. Handle bio Robinhood CEO Vlad Tenev's favorite meme. X keyword from:Juggernautrh 0xD732 returned 0 hits this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "NOXA LaunchToken ERC-20; pairToken WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; poolFee 10000 (1%); liquidityPool Uniswap v3 0x588b0785f50063260003B7790C42f1eF74902746", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-3, R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "The Juggernaut", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-5, R-8], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "JUGGERNAUT", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xD7321801CAae694090694Ff55A9323139F043B88", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-2, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-2, R-4, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@Juggernautrh", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-6, R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Launchpad NOXA Fun factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB created the token in tx 0xbbb2…3b1f at 2026-06-20T23:59:08Z from EOA 0xe5f8…8361; launchFactory() returns that address. Same factory as CASHCAT; different token CA.", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-2, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko search JUGGERNAUT/WETH 1% 0x588b…2746 volume_usd.h24 1720192.78 reserve_in_usd 485702.46 at 2026-09-03T04:20:00Z. Prior GO-LIVE trending capture 2026-09-02 was ~$474k liq / ~$1.88M vol on the same book.", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 487000.38 volume.h24 1727572.61 fdv/marketCap 6456627 priceUsd 0.006881 at 2026-09-03T04:20:42Z", class: verified, observed_at: 2026-09-03T04:20:42Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 16850, class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() reverts; LaunchToken source has no Ownable. Deployer 0xe5f8eF55D780eF0B457081B0B0DA5F3330778361 has no code.", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "launchFactory immutable 0xD9eC…FccB; deployer() 0xe5f8…8361; maxWalletBps 200 maxTxBps 10000 restrictionBlocks 366 (restrictionEndBlock RPC 25362603)", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; venue is Uniswap v3 factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA pool 0x588b…2746. ETH book, not a stock token.", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-5, R-6, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is Launch Factory 0xD9eC…FccB, not Pons, LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:20:42Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko search, juggernautrh.com, Telegram preview, or X search this pass", class: unknown, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: t.me/juggernaut_rh og:title Juggernaut, 274 subscribers, no contract in the preview; DexScreener lists it; juggernautrh.com markdown this pass did not list Telegram", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-6, R-8, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.domain, value: "https://juggernautrh.com", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-6, R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: relationship, value: "Distinct from packed CHUMP 0x0E0d…C21B / SHRUB 0x5d91…920c. Same-ticker clones this pass include The Juggernauts 0x6b3A…9A17 (WETH 0.3% 0x0E03…F224 reserve ~$1.40M vol ~$9.76) and JUGGERNAUT/HOODon 0xAeaB…8888. Solana pumpfun JUGGERNAUT books are wrong-chain.", class: verified, observed_at: 2026-09-03T04:20:00Z, receipt_ids: [R-6, R-7, R-15, R-16], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x588b0785f50063260003B7790C42f1eF74902746", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-5, R-6, R-17], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-23, field: identity.handle, value: "handle-collision: @juggernautonrh display The Juggernaut, bio Built on @ponsdotfamily; @Juggernautrh_ display Juggernaut Official support, bio Parody account. Neither is the site-linked @Juggernautrh.", class: claim, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-19, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "juggernaut | JUGGERNAUT | @Juggernautrh | juggernautrh.com — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-1, R-8, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: account.@Juggernautrh.note, value: "Site juggernautrh.com lists Follow on X @Juggernautrh and CA 0xD732…3B88; handle posted the site URL. Flag handle-collision with @juggernautonrh and @Juggernautrh_. Handle did not embed the CA in X search this pass.", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-8, R-9, R-19, R-21], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Live Gecko JUGGERNAUT/WETH 1% ~$486k liq / ~$1.72M vol"
    summary: "Gecko search JUGGERNAUT / WETH 1% 0x588b…2746 reserve_in_usd 485702 volume_usd.h24 1720193. DexScreener same pair liquidity.usd 487000 volume.h24 1727573. Prior GO-LIVE trending ~$474k / ~$1.88M."
    occurred_at: 2026-09-03T04:20:00Z
    observed_at: 2026-09-03T04:20:42Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6, R-7, R-20]
  - id: EVT-2
    type: onchain
    title: "NOXA factory minted The Juggernaut / JUGGERNAUT into Uniswap v3 WETH"
    summary: "Tx 0xbbb2…3b1f from 0xe5f8…8361 at 2026-06-20T23:59:08Z; TokenDeployed pool 0x588b…2746 pairToken WETH."
    occurred_at: 2026-06-20T23:59:08Z
    observed_at: 2026-09-03T04:21:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2, R-3]
  - id: EVT-3
    type: company
    title: "@Juggernautrh posted juggernautrh.com is live"
    summary: "Post: Our website is live! https://juggernautrh.com/. Site lists CA 0xd732…3b88 and Follow on X @Juggernautrh."
    occurred_at: 2026-07-09T19:50:33Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [identity.domain, identity.handle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-9]
  - id: EVT-4
    type: company
    title: "@Juggernautrh posted there are 0 intentions to migrate"
    summary: "Post: There are 0 intentions to migrate. The internal issues have been resolved and we will keep on pushing like we have been for the past 2 months. #BecomeUnstoppable"
    occurred_at: 2026-09-02T19:57:24Z
    observed_at: 2026-09-03T04:23:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: ct
    title: "Vlad Tenev posted the juggernaut in 2025; token description stores that URL"
    summary: "@vladtenev 2025-05-23 posted the juggernaut. LaunchToken description() returns that status URL. Site lore cites it and disclaims Robinhood affiliation."
    occurred_at: 2025-05-23T23:04:53Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [relationship, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-5, R-8, R-12]
  - id: EVT-6
    type: ct
    title: "@RHDaily__ listed $JUGGERNAUT among biggest projects on Robinhood"
    summary: "Post 2026-08-29: Biggest projects on Robinhood. Which token's pumping the hardest? included $JUGGERNAUT beside $AI $CASHCAT $CHUMP $FOX."
    occurred_at: 2026-08-29T07:18:33Z
    observed_at: 2026-09-03T04:26:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xD732…3B88 The Juggernaut / JUGGERNAUT", url: "https://robinhoodchain.blockscout.com/address/0xD7321801CAae694090694Ff55A9323139F043B88", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xD7321801CAae694090694Ff55A9323139F043B88 name LaunchToken is_contract true is_verified true creator_address_hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB creation_transaction_hash 0xbbb27474d0b88d397cab5b2d0575bfbc13ed118a1260f0bd84884e928fb93b1f. token name The Juggernaut symbol JUGGERNAUT decimals 18 total_supply 1e27 holders_count 16850 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "create tx 0xbbb27474…3b1f", url: "https://robinhoodchain.blockscout.com/tx/0xbbb27474d0b88d397cab5b2d0575bfbc13ed118a1260f0bd84884e928fb93b1f", published_at: 2026-06-20T23:59:08Z, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-9, CLM-16, EVT-2], excerpt: "timestamp 2026-06-20T23:59:08.000000Z status ok result success block_number 126005 from 0xe5f8eF55D780eF0B457081B0B0DA5F3330778361 (is_contract false) to Launch Factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB method 0x686399cb. Pool 0x588b…2746 creation_transaction_hash is this tx." }
  - { id: R-3, publisher: Blockscout, title: "TokenDeployed and PoolCreated logs on 0xbbb2…3b1f", url: "https://robinhoodchain.blockscout.com/tx/0xbbb27474d0b88d397cab5b2d0575bfbc13ed118a1260f0bd84884e928fb93b1f", published_at: 2026-06-20T23:59:08Z, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-15, EVT-2], excerpt: "TokenDeployed token 0xD732…3B88 deployer 0xe5f8…8361 dexFactory 0x1f7d…2EfA pairToken 0x0Bd7…AD73. PoolCreated token0 WETH token1 JUGGERNAUT fee 10000 pool 0x588b0785f50063260003B7790C42f1eF74902746. Mint nearly 1e27 JUGGERNAUT into that pool." }
  - { id: R-4, publisher: Blockscout, title: "LaunchToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xD7321801CAae694090694Ff55A9323139F043B88?tab=contract", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-13, CLM-14], excerpt: "ContractName LaunchToken compiler v0.8.30+commit.73712a01 file_path contracts/LaunchToken.sol is_verified true is_partially_verified true is_fully_verified false verified_at 2026-07-14T20:07:26Z. Immutables launchFactory pairToken positionManager dexFactory poolFee. No Ownable in src head this pass." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory, pairToken, liquidityPool", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-14, CLM-15, CLM-16, CLM-17, CLM-22, EVT-5], excerpt: "block 53131923. Token code 4830 B. name The Juggernaut symbol JUGGERNAUT decimals 18 totalSupply 1e27. launchFactory 0xD9eC…FccB pairToken 0x0Bd7…AD73 liquidityPool 0x588b…2746 deployer 0xe5f8…8361 (code 0x) dexFactory 0x1f7d…2EfA poolFee 10000. owner() reverts. description() https://x.com/vladtenev/status/1926051737258918360?s=46." }
  - { id: R-6, publisher: DexScreener, title: "latest/dex/tokens JUGGERNAUT 0xD732…3B88", url: "https://api.dexscreener.com/latest/dex/tokens/0xD7321801CAae694090694Ff55A9323139F043B88", published_at: null, accessed_at: 2026-09-03T04:20:42Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-3, CLM-6, CLM-8, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-21, CLM-22, EVT-1], excerpt: "10 robinhood pairs. Top pairAddress 0x588b0785f50063260003B7790C42f1eF74902746 labels v3 base The Juggernaut / JUGGERNAUT quote WETH 0x0Bd7…AD73 liquidity.usd 487000.38 volume.h24 1727572.61 fdv 6456627 marketCap 6456627 pairCreatedAt 1781999948000. info.websites https://juggernautrh.com/ info.socials x.com/Juggernautrh t.me/juggernaut_rh." }
  - { id: R-7, publisher: GeckoTerminal, title: "search/pools JUGGERNAUT on robinhood", url: "https://api.geckoterminal.com/api/v2/search/pools?query=JUGGERNAUT&network=robinhood", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-15, CLM-21, EVT-1], excerpt: "Row 1 JUGGERNAUT / WETH 1% 0x588b0785f50063260003b7790c42f1ef74902746 reserve_in_usd 485702.4631 volume_usd.h24 1720192.77779767. Row 6 JUGGERNAUT / WETH 0.3% 0x0e0390b956b0c828b35a99759a1a29e19bddf224 reserve_in_usd 1397650.6857 volume_usd.h24 9.7648455369 (different token). Direct pool/token GETs 429 this pass." }
  - { id: R-8, publisher: JUGGERNAUT, title: "juggernautrh.com", url: "https://juggernautrh.com/", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-8, CLM-19, CLM-20, CLM-24, CLM-25, EVT-3, EVT-5], excerpt: "Title JUGGERNAUT | Robinhood Chain. CA 0xd7321801caae694090694ff55a9323139f043b88. Buy on Noxa fun.noxa.fi/robinhood/token/0xd732…. Follow on X https://x.com/Juggernautrh. Open on DexScreener pool 0x588b…2746. Footer: JUGGERNAUT is a memecoin with no intrinsic value. Not affiliated with Robinhood Markets." }
  - { id: R-9, publisher: "@Juggernautrh", title: "Our website is live", url: "https://x.com/Juggernautrh/status/2075306633324822729", published_at: 2026-07-09T19:50:33Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-20, CLM-25, EVT-3], excerpt: "Our website is live! https://juggernautrh.com/" }
  - { id: R-10, publisher: Telegram, title: "t.me/juggernaut_rh", url: "https://t.me/juggernaut_rh", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "HTTP 200. og:title Juggernaut. og:description Robinhood CEO Vlad Tenev's favorite meme. tgme_page_extra 274 subscribers. No contract address and no juggernautrh.com in the preview HTML this pass." }
  - { id: R-11, publisher: "@Juggernautrh", title: "There are 0 intentions to migrate", url: "https://x.com/Juggernautrh/status/2095239690408370432", published_at: 2026-09-02T19:57:24Z, accessed_at: 2026-09-03T04:23:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "There are 0 intentions to migrate The internal issues have been resolved and we will keep on pushing like we have been for the past 2 months Nothing has changed Any advice is always appreciated #BecomeUnstoppable" }
  - { id: R-12, publisher: "@vladtenev", title: "the juggernaut", url: "https://x.com/vladtenev/status/1926051737258918360", published_at: 2025-05-23T23:04:53Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "the juggernaut" }
  - { id: R-13, publisher: "@RHDaily__", title: "Biggest projects on Robinhood", url: "https://x.com/RHDaily__/status/2093599166178173408", published_at: 2026-08-29T07:18:33Z, accessed_at: 2026-09-03T04:26:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "Biggest projects on Robinhood. Which token's pumping the hardest? $AI $CASHCAT $CHUMP $FOX $PAWHOOD $GOOD $JUGGERNAUT $HMM $TENDIES $BRODIE" }
  - { id: R-14, publisher: GeckoTerminal, title: "JUGGERNAUT/WETH pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x588b0785f50063260003b7790c42f1ef74902746", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "SPA HTML contains JUGGERNAUT and pool id 588b0785. Title tag empty this pass." }
  - { id: R-15, publisher: DexScreener, title: "search q=JUGGERNAUT", url: "https://api.dexscreener.com/latest/dex/search?q=JUGGERNAUT", published_at: null, accessed_at: 2026-09-03T04:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-21], excerpt: "Top robinhood uniswap JUGGERNAUT/WETH 0x588b…2746 base 0xD732…3B88 liq 487000.38 vol 1727572.61. Separate CA 0x6b3A…9A17 JUGGERNAUT/WETH 0x0E03…F224 liq 1393305.32 vol 9.92. JUGGERNAUT/HOODon 0xAeaB…8888 socials x.com/JuggernautonRH_. Solana pumpfun JUGGERNAUT rows present." }
  - { id: R-16, publisher: Blockscout, title: "Token 0x6b3A…9A17 The Juggernauts / JUGGERNAUT", url: "https://robinhoodchain.blockscout.com/address/0x6b3A8A50F2B7717ba7d0DB5298124e16151A9A17", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "address_hash 0x6b3A8A50F2B7717ba7d0DB5298124e16151A9A17 name The Juggernauts symbol JUGGERNAUT decimals 18 total_supply 1e27 holders_count 157229. Distinct from 0xD732…3B88 The Juggernaut. RPC eth_getCode 44 bytes this pass." }
  - { id: R-17, publisher: Blockscout, title: "Address 0x588b…2746 UniswapV3Pool", url: "https://robinhoodchain.blockscout.com/address/0x588b0785f50063260003B7790C42f1eF74902746", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x588b0785f50063260003B7790C42f1eF74902746 name UniswapV3Pool is_contract true is_verified true creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA creation_transaction_hash 0xbbb27474d0b88d397cab5b2d0575bfbc13ed118a1260f0bd84884e928fb93b1f." }
  - { id: R-18, publisher: Blockscout, title: "Address 0xD9eC…FccB Launch Factory", url: "https://robinhoodchain.blockscout.com/address/0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB is_contract true is_verified false name null. OLI tag Launch Factory. creator_address_hash 0x7E035Fb048a31e0481b88074557415b1C187242B." }
  - { id: R-19, publisher: "@Juggernautrh", title: "Juggernaut X account", url: "https://x.com/Juggernautrh", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, CLM-23, CLM-25], excerpt: "X user search Juggernautrh: @Juggernautrh display Juggernaut, bio Robinhood CEO Vlad Tenev's favorite meme, followers 3534, id 2074733696804868096." }
  - { id: R-20, publisher: GeckoTerminal, title: "Prior GO-LIVE trending JUGGERNAUT/WETH", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools", published_at: 2026-09-02T00:00:00Z, accessed_at: 2026-09-03T04:26:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-10, CLM-24, EVT-1], excerpt: "Discovery-inventory / GO-LIVE.md GET trending_pools 2026-09-02: JUGGERNAUT/WETH $474k/$1.88M (liq/vol). Live this pass is search row 1 reserve 485702 vol 1720193, not a new trending GET (pool endpoint 429)." }
  - { id: R-21, publisher: X, title: "Same-name Juggernaut handles", url: "https://x.com/juggernautonrh", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23, CLM-25], excerpt: "X user search: @juggernautonrh display The Juggernaut, bio Vlad's favorite meme. Built on @ponsdotfamily, followers 69. @Juggernautrh_ display Juggernaut Official support, bio Parody account, followers 39." }

gaps:
  - { priority: P0, question: "Does @Juggernautrh embed CA 0xD732…3B88 in a post or profile website field?", checked: "from:Juggernautrh 0xD732 search 0 hits; bio has no CA; site lists CA and handle; handle posted juggernautrh.com, 2026-09-03", next: "re-read the X profile website card and any pinned post that embeds the CA" }
  - { priority: P1, question: "Why does RPC launchBlock() return 25362237 while Blockscout creation tx is block 126005?", checked: "Both attach to token 0xD732…3B88 / pool 0x588b…2746 / tx 0xbbb2…3b1f; restrictionEndBlock RPC 25362603 = 25362237+366, 2026-09-03", next: "compare LaunchToken bytecode to verified source launchBlock assignment" }
  - { priority: P1, question: "Does t.me/juggernaut_rh pin CA 0xD732…3B88 or juggernautrh.com?", checked: "public preview og:title Juggernaut, 274 subscribers, no CA or site in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P1, question: "Is Gecko pool 0x588b…2746 still the trending JUGGERNAUT/WETH book vs the 0x0E03…F224 The Juggernauts clone?", checked: "Search row 1 is 0x588b…2746 ~$486k/~$1.72M; clone 0x0E03…F224 ~$1.40M/~$10 vol; pool GET 429, 2026-09-03", next: "retry the pool endpoint after the 429 window; do not loop" }
  - { priority: P2, question: "Does verified LaunchToken leave a factory callback after restrictionBlocks?", checked: "owner() reverts; restrictionBlocks 366; factory unverified, 2026-09-03", next: "read remaining LaunchToken.sol transfer hooks on the explorer" }
---

# JUGGERNAUT — research packet

## What it is

A one-billion-supply ERC-20 cloned by the NOXA Fun Launch Factory into a Uniswap v3 JUGGERNAUT/WETH 1% pool. Traders buy and sell The Juggernaut (JUGGERNAUT) on that ETH book. Site juggernautrh.com lists the CA and @Juggernautrh.

Themes: memecoin, eth-book, noxa-launch

## Why it matters

The JUGGERNAUT/WETH Uniswap v3 book printed about $1.72M of 24h volume on Gecko at collection, with ~$486k reserve. That is the same ETH book as the prior GO-LIVE trending capture (~$474k liq / ~$1.88M vol), not the packed CHUMP/WETH or SHRUB/WETH books.

## What could go wrong

USD liquidity on the main book counts JUGGERNAUT plus WETH. Same-ticker clones (The Juggernauts 0x6b3A…9A17, HOODon-paired 0xAeaB…8888) and same-name X handles sit next to the canonical CA. Site footer says not affiliated with Robinhood Markets. Telegram is a third-party-link this pass.

## Product and mechanics

NOXA factory 0xD9eC…FccB created LaunchToken 0xD732…3B88 in tx 0xbbb2…3b1f at 2026-06-20T23:59:08Z from EOA 0xe5f8…8361. launchFactory() returns that factory. pairToken() is WETH 0x0Bd7…AD73. liquidityPool() is Uniswap v3 0x588b…2746 with poolFee 10000. [verified R-2 R-3 R-5]

DexScreener also lists a thinner JUGGERNAUT/USDG v4 book and native-ETH v4 books. Those are not the ETH book this packet tracks. [verified R-6]

## Control and security

owner() reverts. LaunchToken source has no Ownable. Deployer 0xe5f8…8361 has no code. Factory 0xD9eC…FccB is unverified. maxWalletBps 200 / restrictionBlocks 366 were set at construction. [verified R-4 R-5] [unknown]

No audit report URL was located this pass. [unknown]

## Team and provenance

juggernautrh.com publishes the CA and https://x.com/Juggernautrh. @Juggernautrh posted the site URL on 2026-07-09. Handle did not embed the CA in X search this pass. [verified R-8 R-9]

t.me/juggernaut_rh titles Juggernaut with 274 subscribers and no contract in the public preview; DexScreener lists it. Flag third-party-link. Same-name handles @juggernautonrh (Pons bio) and @Juggernautrh_ (parody bio) are handle-collision, not the site link. [claim R-10 R-21]

On-chain description() stores Vlad Tenev's 2025 "the juggernaut" post. Site lore cites that post and disclaims Robinhood affiliation. [claim R-5 R-8 R-12]

## Economics and activity

JUGGERNAUT/WETH Uniswap v3 24h volume is 1720192.78 USD and reserve_in_usd is 485702.46 at 2026-09-03T04:20:00Z from Gecko search row 1. DexScreener same pair: liquidity.usd 487000.38, volume.h24 1727572.61, fdv/marketCap 6456627. Blockscout holders_count 16850. Pair created 2026-06-20T23:59:08Z. [claim R-1 R-6 R-7]

Prior GO-LIVE trending lead of ~$474k / ~$1.88M was not re-fetched as trending_pools this pass (pool GET 429). Live search reserve is $486k and 24h volume $1.72M. [claim R-7 R-20]

## Material risks

- Same-ticker The Juggernauts 0x6b3A…9A17 shows ~$1.40M Gecko reserve with ~$10 24h volume; it is not 0xD732…3B88. [verified R-7 R-16]
- Quote token is WETH, not a stock token; still distinct from packed CHUMP and SHRUB ETH books. [verified R-6 R-15]
- Telegram is a third-party-link; handle-collision accounts exist. [claim R-10 R-21]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/pool/create tx/logs/source, RPC name/symbol/launchFactory/pairToken/liquidityPool, DexScreener tokens+search, Gecko search, juggernautrh.com, @Juggernautrh website and migrate posts, Telegram preview, Vlad post, @RHDaily__, and ticker-clone token page were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-6 R-8]
- Numbers: 1720192.78 is the Gecko JUGGERNAUT/WETH 1% search-row 24h volume, not Blockscout token volume_24h 4244639. Reserve 485702.46 is that pool. DexScreener 1727572.61 / 487000.38 is the same pair, different aggregator. [claim R-1 R-6 R-7]
- Adversarial: the strongest contrary reading is that the $1.40M JUGGERNAUT/WETH 0.3% book or the Pons-tagged @juggernautonrh HOODon token is canonical. Those are different CAs and a different handle; the site and liquidityPool() both name 0xD732…3B88 / 0x588b…2746. [inference R-7 R-8 R-21]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no juggernaut / JUGGERNAUT / 0xD732…3B88. Packed chump/shrub are different CAs.
- Explorer: Blockscout api/v2 token, address, smart-contract, create tx 0xbbb2…3b1f logs, pool, factory, clone 0x6b3A…9A17. RPC eth_getCode/eth_call with Chrome UA at blocks 53131923–53133022.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko search/pools query=JUGGERNAUT network=robinhood. Direct Gecko pool/token GETs HTTP 429; not retried.
- Social: X user search Juggernautrh; keyword from:Juggernautrh; from:Juggernautrh 0xD732; t.me/juggernaut_rh preview.
- Site: juggernautrh.com CA, DexScreener pool, X, Noxa buy, disclaimer.
- Failed: Gecko pool and token endpoints 429; X keyword for the CA returned 0 posts; on-chain socials() twitter field is the Vlad URL, telegram empty.
- Time: collection 2026-09-03T04:20Z–2026-09-03T04:26Z.
