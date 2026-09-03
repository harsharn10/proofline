---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: cashcat
name: CASHCAT
packet_tier: seed
as_of: 2026-09-03T03:00:00Z
prior_packet: null
supersedes: null
owned_slugs: [cashcat]
allowed_paths:
  - research/inbox/packets/cashcat/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: CASHCAT
  aliases: [Cash Cat]
  symbols: [CASHCAT]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://cashcat.cc
  official_handle: "@cashcat_token"
  repository: "NULL — no GitHub org or repository URL on cashcat.cc, the @cashcat_token profile, or the verified LaunchToken source this pass"
  possible_matches:
    - slug: noxa
      signals: [shared-deployer]
      contrary_signals:
        - "Census NOXA Fun is the launchpad at fun.noxa.eth.limo / @Noxa_Fi with factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB"
        - "CASHCAT is the ERC-20 at 0x020bfC650A365f8BB26819deAAbF3E21291018b4 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; cashcat.cc and @cashcat_token do not operate the pad"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Token 0x020b…18b4 exists on 4663 as verified LaunchToken; creator_address_hash and launchFactory() are NOXA factory 0xD9eC…FccB. Original pair is Uniswap v3 CASHCAT/WETH 1% 0xA70f…E313. Not a protocol. Distinct from the LetsCash pad at letscash.fun. [R-1] [R-2] [R-3] [R-6] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-7, CLM-13, CLM-14], note: "" }

links:
  - { kind: site, url: "https://cashcat.cc", authenticity: confirmed }
  - { kind: x, url: "https://x.com/cashcat_token", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/cashcat_robinhood", authenticity: confirmed }
  - { kind: other, url: "https://cashcattoken.xyz", authenticity: confirmed }

deployments:
  - label: CASHCAT token (LaunchToken)
    role: token
    address:
      value: "0x020bfC650A365f8BB26819deAAbF3E21291018b4"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-5]
  - label: NOXA Fun launch factory (token creator / launchFactory)
    role: factory
    address:
      value: "0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-2, R-3, R-6]
  - label: Uniswap v3 CASHCAT/WETH 1% pool (liquidityPool)
    role: other
    address:
      value: "0xA70fc67C9F69da90B63a0e4C05D229954574E313"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-6, R-7]

metrics:
  - { kind: volume_24h, value: 31297376.88, currency: USD, as_of: 2026-09-03T02:54:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x020b…18b4 pair 0xd42A…2b09 CASHCAT/WETH Uniswap v3 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 9863326.17, currency: USD, as_of: 2026-09-03T02:54:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x020b…18b4 pair 0xA70f…E313 CASHCAT/WETH Uniswap v3 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 5503958.38, currency: USD, as_of: 2026-09-03T02:54:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x020b…18b4 pair 0xA70f…E313 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 2681689.71, currency: USD, as_of: 2026-09-03T02:54:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x020b…18b4 pair 0xd42A…2b09 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 273660683, currency: USD, as_of: 2026-09-03T02:54:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x020b…18b4 pair 0xA70f…E313 marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 104938, currency: null, as_of: 2026-09-03T02:55:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/addresses/0x020b…18b4 token.holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com block 0x329f562 (53081442): eth_getCode 0x020b…18b4 4830 bytes; name() Cash Cat; symbol() CASHCAT; decimals 18; totalSupply 1000000000000000000000000000; owner() reverted" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:59:00Z, receipt_ids: [R-5, R-6], result: "block 0x329fe0b (53083659): launchFactory() 0xD9eC…FccB; pairToken() 0x0Bd7…AD73 (WETH); poolFee 10000; liquidityPool() 0xA70f…E313; deployer() 0xcdfc…6cA90; dexFactory() 0x1f7d…2efa; positionManager() 0x7399…e0d3; maxWalletBps 200; maxTxBps 10000; restrictionBlocks 366; factory eth_getCode 22811 bytes" }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-3, R-4], result: "Blockscout API v2: token is_contract true is_verified true name LaunchToken; creator_address_hash 0xD9eC…FccB; creation tx 0x0e6d23f0…4661 timestamp 2026-06-18T20:01:25Z block 88836 to Launch Factory method 0x686399cb from 0xcdfc…6cA90; token name Cash Cat symbol CASHCAT holders_count 104938 total_supply 1e27; source contracts/LaunchToken.sol Solidity 0.8.30 is_partially_verified true" }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T02:54:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0x020b…18b4: CASHCAT/WETH Uniswap v3 0xA70f…E313 volume.h24 9863326.17 liquidity.usd 5503958.38 marketCap 273660683 pairCreatedAt 2026-06-18T20:01:25Z; CASHCAT/WETH Uniswap v3 0xd42A…2b09 volume.h24 31297376.88 liquidity.usd 2681689.71; websites https://cashcat.cc/ socials x.com/cashcat_token t.me/cashcat_robinhood" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T02:57:00Z, receipt_ids: [R-8, R-9], result: "Gecko token volume_usd.h24 69935625.25 fdv_usd 273085779 market_cap_usd 272112380; pools CASHCAT/WETH 0.3% 0xd42a…2b09 vol 30766613.53 reserve 2672816; CASHCAT/WETH 1% 0xa70f…E313 vol 9787247.91 reserve 5524215; trending_pools rank 5 CASHCAT/WETH 0.3% vol 30784220 vs SHRUB/WETH 4854693 FRONG/WETH 5972155 CHUMP/WETH 5343097" }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T02:56:00Z, receipt_ids: [R-1, R-11, R-12, R-16], result: "cashcat.cc publishes CA 0x020bfc650a365f8bb26819deaabf3e21291018b4, DexScreener 0xA70f…E313, https://x.com/cashcat_token and telegram.me/cashcat_robinhood. @cashcat_token profile website cashcattoken.xyz HTTP 308 to https://cashcat.cc/. Handle 2026-07-09 posted the same CA; 2026-08-30 posted https://cashcat.cc/pfp" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "NOXA LaunchToken ERC-20; pairToken WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; poolFee 10000 (1%); liquidityPool Uniswap v3 0xA70fc67C9F69da90B63a0e4C05D229954574E313", class: verified, observed_at: 2026-09-03T02:59:00Z, receipt_ids: [R-5, R-6, R-7], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://cashcat.cc", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-1, R-11, R-16], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@cashcat_token", class: verified, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-1, R-11, R-12], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x020bfC650A365f8BB26819deAAbF3E21291018b4", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: "CASHCAT", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-3, R-7], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad NOXA Fun factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB created the token in tx 0x0e6d23f0…4661 at 2026-06-18T20:01:25Z; launchFactory() returns that address", class: verified, observed_at: 2026-09-03T02:59:00Z, receipt_ids: [R-2, R-3, R-6], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73", class: verified, observed_at: 2026-09-03T02:59:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v3; original CASHCAT/WETH 1% pool 0xA70f…E313; later CASHCAT/WETH 0.3% Uniswap v3 book 0xd42A…2b09", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: identity.name, value: "Cash Cat", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-2, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-11, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [R-3, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Distinct from LetsCash pad at letscash.fun / @letscashfun. cashcat.cc lists LetsCash as a separate launcher whose cut buys back and burns CASHCAT. letscash.fun describes legacy coins from a first beta when that pad was named CashCat.", class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener CASHCAT/WETH Uniswap v3 0xd42A…2b09 volume.h24 31297376.88", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "Gecko CASHCAT/WETH 0.3% 0xd42a…2b09 volume_usd.h24 30766613.53 reserve_in_usd 2672816.21; trending_pools rank 5 volume 30784220.44", class: verified, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "DexScreener original CASHCAT/WETH Uniswap v3 0xA70f…E313 volume.h24 9863326.17 liquidity.usd 5503958.38 marketCap 273660683", class: verified, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "Blockscout holders_count 104938", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: "cashcat.cc The Numbers: 1B total supply, 0/0 tax, 100% in pool LP burned, market cap $274.69M, 24h volume $80.04M", class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: economics.metric, value: "Gecko token volume_usd.h24 69935625.25 market_cap_usd 272112380.64", class: verified, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-8], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Blockscout token.volume_24h 94876384.61 circulating_market_cap 266711132.26", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "Partially verified LaunchToken: OpenZeppelin ERC-20, no transfer tax; constructor mints supply to launchFactory; launch-block buy block and maxWallet/maxTx restrictions for restrictionBlocks", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-22, field: control.owner, value: "owner() reverted; ABI has no owner; launchFactory immutable 0xD9eC…FccB", class: verified, observed_at: 2026-09-03T02:59:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: security.audit, value: "No audit report URL was located on cashcat.cc, the X profile, or the LaunchToken source this pass", class: unknown, observed_at: 2026-09-03T03:00:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@cashcat_token.role", value: project, class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@cashcat_token.slug", value: cashcat, class: claim, observed_at: 2026-09-03T02:56:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: identity.domain, value: "https://cashcattoken.xyz HTTP 308 to https://cashcat.cc/", class: verified, observed_at: 2026-09-03T02:58:00Z, receipt_ids: [R-16], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-27, field: "account.@cashcat_tokende.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-11, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@cashcatoken.flags", value: copypasta-pattern, class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-11, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: activity.status, value: "Gecko trending_pools this pass: CASHCAT/WETH 0.3% 24h volume 30784220, above SHRUB/WETH 4854693, FRONG/WETH 5972155, CHUMP/WETH 5343097 on the same page", class: verified, observed_at: 2026-09-03T02:57:00Z, receipt_ids: [R-9], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-30, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-18, CLM-19, CLM-20]
    material_effect: "24h volume is $80.04M on cashcat.cc, $69.94M on Gecko token volume_usd.h24, and $94.88M on Blockscout token.volume_24h; a card that collapses them would misstate activity"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Gecko trending: CASHCAT/WETH 0.3% at $30.8M 24h volume"
    summary: "Gecko CASHCAT/WETH 0.3% pool 0xd42A…2b09 24h volume $30.78M; DexScreener same pair $31.30M."
    occurred_at: 2026-09-03T02:57:00Z
    observed_at: 2026-09-03T02:57:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7, R-8, R-9]
  - id: EVT-2
    type: ct
    title: "@0xHood_ posted chain DEX volume ATH for $CASHCAT"
    summary: "@0xHood_ posted that Robinhood Chain DEX volume, $PONS and $CASHCAT all tagged ATHs together."
    occurred_at: 2026-09-03T01:00:00Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-3
    type: ct
    title: "@carddog_token posted Noxa CASHCAT vs Pons CARDDOG"
    summary: "@carddog_token posted that Noxa has $CASHCAT and Pons has $CARDDOG, and asked which to choose."
    occurred_at: 2026-09-02T20:27:32Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: company
    title: "@cashcat_token named first meme-contest place"
    summary: "@cashcat_token posted that first place in its meme contest went to @wyn_studio and thanked participants."
    occurred_at: 2026-09-01T19:10:03Z
    observed_at: 2026-09-03T02:58:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-5
    type: company
    title: "@cashcat_token thanked Robinhood for the listing"
    summary: "@cashcat_token quoted @RobinhoodApp's $CASHCAT listing and thanked @RobinhoodApp and @RobinhoodCrypto."
    occurred_at: 2026-08-06T14:16:50Z
    observed_at: 2026-09-03T02:58:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-6
    type: ct
    title: "@RobinhoodApp listed $CASHCAT in the app"
    summary: "@RobinhoodApp posted that $CASHCAT (Cash Cat) is available to trade in the app and on Robinhood Legend."
    occurred_at: 2026-08-06T13:31:15Z
    observed_at: 2026-09-03T02:58:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-7
    type: onchain
    title: "NOXA factory minted CASHCAT into Uniswap v3"
    summary: "Tx 0x0e6d23f0… to NOXA factory 0xD9eC…FccB minted LaunchToken CASHCAT and seeded Uniswap v3 pool 0xA70f…E313."
    occurred_at: 2026-06-18T20:01:25Z
    observed_at: 2026-09-03T02:55:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2, R-3, R-6]

receipts:
  - { id: R-1, publisher: Cash Cat, title: "cashcat.cc home", url: "https://cashcat.cc/", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-10, CLM-13, CLM-18, CLM-24, CLM-25], excerpt: "CA:0x020bfc650a365f8bb26819deaabf3e21291018b4. Official social accounts https://x.com/cashcat_token and https://telegram.me/cashcat_robinhood. How to use: paste the contract; DexScreener 0xA70fc67C9F69da90B63a0e4C05D229954574E313. The Numbers: 1B total supply, 0/0 Tax, 100% In pool. LP Burned, $274.69M Market cap, $80.04M 24h volume. FAQ: Is this affiliated with Robinhood? No. LetsCash: Launch a memecoin… platform's cut buys back and burns CASHCAT. Check it out https://letscash.fun @letscashfun." }
  - { id: R-2, publisher: Blockscout, title: "CASHCAT 0x020bfC650A365f8BB26819deAAbF3E21291018b4", url: "https://robinhoodchain.blockscout.com/address/0x020bfc650a365f8bb26819deaabf3e21291018b4", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-10, CLM-12, CLM-17, CLM-20, CLM-30, EVT-7], excerpt: "API v2: hash 0x020bfC650A365f8BB26819deAAbF3E21291018b4, name LaunchToken, is_contract true, is_verified true, creator_address_hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB, creation_transaction_hash 0x0e6d23f0babd02ede4aefaa923486591d783e1180c277c71e2f2a39fc74a4661; token name Cash Cat symbol CASHCAT holders_count 104938 total_supply 1000000000000000000000000000 volume_24h 94876384.61101197 circulating_market_cap 266711132.25614527." }
  - { id: R-3, publisher: Blockscout, title: "CASHCAT creation tx 0x0e6d23f0…", url: "https://robinhoodchain.blockscout.com/tx/0x0e6d23f0babd02ede4aefaa923486591d783e1180c277c71e2f2a39fc74a4661", published_at: 2026-06-18T20:01:25Z, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-11, EVT-7], excerpt: "timestamp 2026-06-18T20:01:25.000000Z, status ok, block_number 88836, from 0xcdfc08A1C1FBaFB355645E5ddC32122e5716cA90, to 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB (Launch Factory), method 0x686399cb, value 20500000000000000. Token mint 1e27 CASHCAT; transfer 999999999999999999999987491 to UniswapV3Pool 0xA70fc67C9F69da90B63a0e4C05D229954574E313." }
  - { id: R-4, publisher: Blockscout, title: "LaunchToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x020bfC650A365f8BB26819deAAbF3E21291018b4?tab=contract", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-21, CLM-22], excerpt: "API v2 smart-contracts: name LaunchToken, compiler_version v0.8.30+commit.73712a01, is_verified true, is_fully_verified false, is_partially_verified true, file_path contracts/LaunchToken.sol. Contract LaunchToken is ERC20; constructor mints config.supply to msg.sender; launchFactory/pairToken/poolFee/positionManager/dexFactory immutables; no owner(); no transfer tax." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode and ERC-20 / LaunchToken calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:59:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-8, CLM-10, CLM-22], excerpt: "eth_blockNumber 0x329fe0b (53083659). eth_getCode 0x020b…18b4 4830 bytes. name() Cash Cat; symbol() CASHCAT; decimals 18; totalSupply 1e27; owner() revert. launchFactory() 0xD9eC…FccB; pairToken() 0x0Bd7…AD73; poolFee 10000; liquidityPool() 0xA70f…E313; deployer() 0xcdfc…6cA90; maxWalletBps 200; maxTxBps 10000; restrictionBlocks 366." }
  - { id: R-6, publisher: Blockscout, title: "NOXA factory 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB", url: "https://robinhoodchain.blockscout.com/address/0xd9ec2db5f3d1b236843925949fe5bd8a3836fccb", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-11, EVT-7], excerpt: "API v2: hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB, is_contract true, is_verified false, creator_address_hash 0x7E035Fb048a31e0481b88074557415b1C187242B, creation_transaction_hash 0x5e512a7f9a931c4dc9b5b09d8dd5c80b66968cf393474b21e5613769df656b37. Tagged Launch Factory. RPC eth_getCode 22811 bytes." }
  - { id: R-7, publisher: DexScreener, title: "CASHCAT token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x020bfC650A365f8BB26819deAAbF3E21291018b4", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-9, CLM-14, CLM-16, CLM-30, EVT-1], excerpt: "pair 0xA70fc67C9F69da90B63a0e4C05D229954574E313 chainId robinhood dexId uniswap labels v3 baseToken CASHCAT quoteToken WETH volume.h24 9863326.17 liquidity.usd 5503958.38 marketCap 273660683 pairCreatedAt 1781812885000. pair 0xd42A491087a15E5afd51FEb3606066Cc152d2b09 labels v3 CASHCAT/WETH volume.h24 31297376.88 liquidity.usd 2681689.71. info.websites https://cashcat.cc/ socials x.com/cashcat_token t.me/cashcat_robinhood." }
  - { id: R-8, publisher: GeckoTerminal, title: "CASHCAT token and pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x020bfc650a365f8bb26819deaabf3e21291018b4/pools?page=1", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-19, EVT-1], excerpt: "Token: volume_usd.h24 69935625.2499211 fdv_usd 273085779.41398 market_cap_usd 272112380.641089 coingecko_coin_id cash-cat. Pools: CASHCAT/WETH 0.3% 0xd42a491087a15e5afd51feb3606066cc152d2b09 dex uniswap-v3-robinhood volume_usd.h24 30766613.5308175 reserve_in_usd 2672816.2084; CASHCAT/WETH 1% 0xa70fc67c9f69da90b63a0e4c05d229954574e313 volume_usd.h24 9787247.91160075 reserve_in_usd 5524215.5489." }
  - { id: R-9, publisher: GeckoTerminal, title: "Robinhood trending pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/trending_pools?page=1", published_at: null, accessed_at: 2026-09-03T02:57:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-15, CLM-29, EVT-1], excerpt: "trending_pools page 1: rank 5 CASHCAT / WETH 0.3% volume_usd.h24 30784220.4386402 reserve_in_usd 2674185.7185. Same page animal WETH books: CHUMP/WETH 1% 5343097.24; SHRUB/WETH 4854693.28; FRONG/WETH 0.25% 5972155.08." }
  - { id: R-10, publisher: LetsCash, title: "letscash.fun home", url: "https://www.letscash.fun/", published_at: null, accessed_at: 2026-09-03T02:56:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-13], excerpt: "letscash.fun: launch and trade memecoins on Robinhood Chain. Metric label: CASHCAT bought — CASHCAT bought on-chain with platform fees, burned and held together. Link: legacy coins — Coins launched during the first beta, when this was CashCat. They still trade. https://legacy.letscash.fun" }
  - { id: R-11, publisher: "@cashcat_token", title: "Cash Cat profile", url: "https://x.com/cashcat_token", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-24, CLM-25, CLM-27, CLM-28], excerpt: "Display name Cash Cat, handle @cashcat_token, bio Robinhood original name was Cash Cat. Location Robinhood Chain. Website cashcattoken.xyz. Joined June 2026. ~21.4K followers." }
  - { id: R-12, publisher: "@cashcat_token", title: "Buy $Cashcat — posted CA", url: "https://x.com/cashcat_token/status/2075015043553407405", published_at: 2026-07-09T00:31:52Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-4], excerpt: "Buy $Cashcat on the best crypto wallet Just paste the contract and swap! Cross-chain payments supported - no need to wait for bridges! 0x020bfc650a365f8bb26819deaabf3e21291018b4" }
  - { id: R-13, publisher: "@0xHood_", title: "Robinhood Chain DEX volume ATH", url: "https://x.com/0xHood_/status/2095315840770187486", published_at: 2026-09-03T01:00:00Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "Robinhood Chain DEX volume ATH $PONS ATH $CASHCAT ATH The chain, the pad, and the cat all printing highs together" }
  - { id: R-14, publisher: "@carddog_token", title: "Noxa has $CASHCAT now Pons got $CARDDOG", url: "https://x.com/carddog_token/status/2095247273034912207", published_at: 2026-09-02T20:27:32Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Noxa has $CASHCAT now Pons got $CARDDOG. Which would you choose - Cash or Card? Let the war begin 0x4fab762e1c3340eb0bf76726b6b77038da666ba7" }
  - { id: R-15, publisher: "@cashcat_token", title: "Meme contest first place", url: "https://x.com/cashcat_token/status/2094865387951182071", published_at: 2026-09-01T19:10:03Z, accessed_at: 2026-09-03T02:58:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "First place goes to @wyn_studio for this amazing 3D animation. Congrats and check your DMs! Huge thanks to all the community for participating in our first meme contest. Stay tuned for more in the future In the meantime, keep the memes flowing" }
  - { id: R-16, publisher: Vercel, title: "cashcattoken.xyz redirect to cashcat.cc", url: "https://cashcattoken.xyz/", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-26], excerpt: "HTTP 308. location: https://cashcat.cc/. refresh: 0;url=https://cashcat.cc/. server: Vercel." }
  - { id: R-17, publisher: "@cashcat_tokende", title: "Cash Cat || SUPPORT profile", url: "https://x.com/cashcat_tokende", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27], excerpt: "Display name Cash Cat || SUPPORT, handle @cashcat_tokende. Bio: Robinhood original name was Cash Cat. ~315 followers. Same bio stem as @cashcat_token." }
  - { id: R-18, publisher: "@cashcatoken", title: "CashCat profile", url: "https://x.com/cashcatoken", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-28], excerpt: "Display name CashCat, handle @cashcatoken. Bio: Robinhood original name was Cash Cat. ~367 followers. Same bio stem as @cashcat_token." }
  - { id: R-19, publisher: "@cashcat_token", title: "Thanks to Robinhood for the listing", url: "https://x.com/cashcat_token/status/2085369513315364900", published_at: 2026-08-06T14:16:50Z, accessed_at: 2026-09-03T02:58:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "The Cash Cat community wants to give a big thanks to the @RobinhoodApp @RobinhoodCrypto team for being incredible partners and allowing this to happen. We are excited to continue growing together!" }
  - { id: R-20, publisher: "@RobinhoodApp", title: "New asset $CASHCAT", url: "https://x.com/RobinhoodApp/status/2085358038181990461", published_at: 2026-08-06T13:31:15Z, accessed_at: 2026-09-03T02:58:00Z, kind: social, authority: independent, authenticity: confirmed, supports: [EVT-6], excerpt: "New asset now available to trade in the app and on Robinhood Legend. $CASHCAT (Cash Cat)" }
  - { id: R-21, publisher: Telegram, title: "t.me/cashcat_robinhood", url: "https://t.me/cashcat_robinhood", published_at: null, accessed_at: 2026-09-03T02:58:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3], excerpt: "og:title Cash Cat. og:description The original name for Robinhood was Cash Cat. Title Telegram: View @cashcat_robinhood." }

gaps:
  - { priority: P0, question: "Was the Uniswap v3 position NFT for pool 0xA70f…E313 burned, as cashcat.cc states 100% in pool / LP burned?", checked: "Creation tx transferred ~1e27 CASHCAT to the pool; positionManager 0x7399…e0d3 is the Uni v3 NFT manager; owner of the position token was not read this pass", next: "eth_call positions(tokenId) / ownerOf on 0x7399…e0d3 for the launch positionId" }
  - { priority: P1, question: "Why does launchBlock() return 25346701 while the creation tx is block 88836?", checked: "Source is_partially_verified; launchBlock() via that ABI returned 25346701 and restrictionEndBlock 25347067 (= +366); Blockscout tx block_number 88836", next: "compare deployed bytecode to LaunchToken.sol or decode constructor args from tx input" }
  - { priority: P1, question: "What factory address does LetsCash use, and does any CASHCAT buyback/burn path from letscash.fun hit 0x020b…18b4?", checked: "cashcat.cc lists letscash.fun as a separate pad; letscash.fun labels a CASHCAT-bought metric and a CashCat beta; no LetsCash factory reproduced this pass", next: "read letscash.fun tokenomics and match a factory on 4663" }
  - { priority: P2, question: "Is there an audit of LaunchToken.sol?", checked: "cashcat.cc, X profile, verified source header, 2026-09-03", next: "search named auditors if the project publishes one" }
---

# CASHCAT — research packet

## What it is

A Uniswap v3 memecoin minted through the now-inactive NOXA Fun factory. Holders trade CASHCAT against WETH on the original 1% pool and later books. cashcat.cc and @cashcat_token publish the contract. The token is not a protocol and is not the LetsCash pad, which the same site lists as a separate buyback launcher.

Themes: memecoin, dog
