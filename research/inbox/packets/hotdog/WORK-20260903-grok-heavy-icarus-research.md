---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: hotdog
name: HOTDOG
packet_tier: seed
as_of: 2026-09-03T03:36:00Z
prior_packet: null
supersedes: null
owned_slugs: [hotdog]
allowed_paths:
  - research/inbox/packets/hotdog/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: HOTDOG
  aliases: [hotdog, "Costco $HOTDOG"]
  symbols: [HOTDOG]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.hotdogonrh.com
  official_handle: "@HOTDOGonRH"
  repository: "NULL — no GitHub org or repository URL on hotdogonrh.com, the @HOTDOGonRH profile, t.me/HOTDOGonRH, or GitHub search HOTDOGonRH|hotdogonrh (0 repos) this pass"
  possible_matches:
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a Doppler/Airlock stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED"
        - "HOTDOG 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C is a lunch.fun V3 pair ERC-20 whose creator_address_hash is LunchV3PairLauncherFrozen proxy 0x568E12B312751992DCfE387CFc8EC7D63E941103"
        - "No shared domain, handle or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI/NVDA via LongLauncher, token 0x2E8c31162b855A2ffa90F6F8634643Ad6F111e18 / @ArtificiallyInu"
        - "HOTDOG quotes COST 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 through lunch.fun, not NVDA through LONG"
        - "No shared domain, handle or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census l4va is a vault factory issuing tokens backed by locked RWAs"
        - "HOTDOG is a LunchTokenPlain ERC-20 with no vault; pair asset is COST"
        - "No shared domain, handle or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is @bankrbot / bankr.bot with DopplerERC20V1Factory / Airlock"
        - "HOTDOG creator is lunch V3 pair launcher 0x568E…1103, not a Bankr factory"
        - "No shared domain, handle or reproduced address"
    - slug: pons
      signals: [ticker-only]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily"
        - "This packet's token is lunch V3 HOTDOG 0x4544…188C / @HOTDOGonRH / hotdogonrh.com"
        - "A separate HOTDOG 0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f trades on Gecko as Pons V2 Dex HOTDOG/COST with handle @hotdogonpons; different contract"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Token 0x4544…188C exists on 4663 as verified LunchTokenPlain; creator_address_hash and launcher() are lunch V3 pair launcher 0x568E…1103; Uniswap v3 HOTDOG/COST 1% pool 0x264a…F55c is live. hotdogonrh.com and @HOTDOGonRH cross-link the CA. Gecko's ~$182k / ~$7.5M HOTDOG/COST book is a different token 0x1C1…566f on Pons V2 Dex, not this lunch V3 pair. [R-1] [R-2] [R-6] [R-8] [R-9] [R-14] [R-16] [R-18]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-7, CLM-13, CLM-8], note: "" }

links:
  - { kind: site, url: "https://www.hotdogonrh.com", authenticity: confirmed }
  - { kind: x, url: "https://x.com/HOTDOGonRH", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/HOTDOGonRH", authenticity: confirmed }
  - { kind: other, url: "https://lunch.fun/coin/0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C", authenticity: confirmed }

deployments:
  - label: HOTDOG token (LunchTokenPlain)
    role: token
    address:
      value: "0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-13, R-14]
  - label: lunch Stock/USDG-pair launcher (V3)
    role: factory
    address:
      value: "0x568E12B312751992DCfE387CFc8EC7D63E941103"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-7, R-10, R-14]
  - label: Uniswap v3 HOTDOG/COST 1% pool
    role: other
    address:
      value: "0x264ad13Bfc0585208b7d8b1712df51B096a5F55c"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-9, R-12, R-14, R-15]
  - label: Costco • Robinhood Token (COST)
    role: token
    address:
      value: "0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
    receipt_ids: [R-11, R-14]
  - label: Launch caller (creator())
    role: admin
    address:
      value: "0x4b03CA54Be3d815453D37182E893a6E36B7d6781"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-9, R-14]
  - label: lunch V3 pair fee locker
    role: other
    address:
      value: "0x46F1DdD98a51016804b5a42db71d6985E76c8326"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-6, R-25]

metrics:
  - { kind: volume_24h, value: 39742.19, currency: USD, as_of: 2026-09-03T03:30:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x4544…188C/pools HOTDOG/COST 1% 0x264a…F55c volume_usd.h24", class: claim, receipt_ids: [R-16] }
  - { kind: volume_24h, value: 40454.99, currency: USD, as_of: 2026-09-03T03:28:54Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x4544…188C Uniswap v3 HOTDOG/COST 0x264a…F55c volume.h24", class: claim, receipt_ids: [R-15] }
  - { kind: tvl, value: 75092.9986, currency: USD, as_of: 2026-09-03T03:30:00Z, window: point, method: "Gecko HOTDOG/COST 1% 0x264a…F55c reserve_in_usd", class: claim, receipt_ids: [R-16] }
  - { kind: tvl, value: 75171.89, currency: USD, as_of: 2026-09-03T03:28:54Z, window: point, method: "DexScreener Uniswap v3 HOTDOG/COST 0x264a…F55c liquidity.usd", class: claim, receipt_ids: [R-15] }
  - { kind: market_cap, value: 487932, currency: USD, as_of: 2026-09-03T03:28:54Z, window: point, method: "DexScreener Uniswap v3 HOTDOG/COST 0x264a…F55c marketCap", class: claim, receipt_ids: [R-15] }
  - { kind: holders, value: 221, currency: null, as_of: 2026-09-03T03:29:40Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x4544…188C holders_count", class: claim, receipt_ids: [R-8] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-14], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 53102484. eth_getCode HOTDOG 2285 bytes; COST 283; launcher 130; pool 22142; owner EOA 0x7B2D…8cC9 0 bytes. name() hotdog; symbol() HOTDOG; decimals 18; totalSupply 1e27; owner() revert. launcher() 0x568E12B312751992DCfE387CFc8EC7D63E941103; creator() 0x4b03CA54Be3d815453D37182E893a6E36B7d6781. pool token0 0x4544…188C token1 0x4EA0…44C2 fee 10000 factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA. launcher owner() 0x7B2DaF7F696bB844C7786693062D6619D1858cC9" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:29:40Z, receipt_ids: [R-8, R-9, R-10, R-11, R-12, R-13], result: "Blockscout API v2: token is_contract true is_verified true name LunchTokenPlain file contracts/plainfactory/LunchTokenPlain.sol fully verified; creator_address_hash 0x568E…1103 creation tx 0xcae2c9b22792d3df3af3d43b9df1c3f9faad95ae61b796082b5aaa52cc3bbfa0 timestamp 2026-07-30T01:51:05Z block 22934274 method launchPair from 0x4b03…6781 to ERC1967Proxy 0x568E…1103 impl LunchV3PairLauncherFrozen. Token name hotdog symbol HOTDOG holders 221 supply 1e27. Pool UniswapV3Pool created in the same tx. COST BeaconProxy name Costco • Robinhood Token." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2, R-3, R-4], result: "hotdogonrh.com twitter:site @HOTDOGonRH and publishes CA 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C plus x.com/HOTDOGonRH. @HOTDOGonRH bio carries the same CA and website t.me/HOTDOGonRH; 2026-09-02 post is https://www.hotdogonrh.com/. t.me/HOTDOGonRH og:description includes the same CA." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:32:00Z, receipt_ids: [R-5, R-6], result: "GET lunch.fun/api/launches?q=HOTDOG row token 0x45443a4a7b58ab26a4b4d72616cf36d5aae7188c version v3 pair_token 0x4ea005168d7f09a7a0ba9d1def21a479950e44c2 pool 0x264ad13bfc0585208b7d8b1712df51b096a5f55c fee 10000 twitter https://x.com/HOTDOGonRH telegram https://t.me/HOTDOGonRH creator 0x4b03ca54be3d815453d37182e893a6e36b7d6781 created_at 2026-07-30T03:51:05+02:00 graduated true. lunch.fun/coin/0x4544… title hotdog ($HOTDOG) on lunch; og lists COST and pool 0x264a…F55c." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T03:28:54Z, receipt_ids: [R-15], result: "DexScreener latest/dex/tokens 0x4544…188C: chainId robinhood dexId uniswap labels v3 pair 0x264ad13Bfc0585208b7d8b1712df51B096a5F55c base hotdog HOTDOG quote Costco • Robinhood Token COST 0x4EA0…44C2 liquidity.usd 75171.89 volume.h24 40454.99 marketCap 487932 pairCreatedAt 1785376265000 websites https://www.hotdogonrh.com/ socials x.com/HOTDOGonRH t.me/HOTDOGonRH" }
  - { id: REP-6, method: api, checked_at: 2026-09-03T03:30:00Z, receipt_ids: [R-16, R-17], result: "Gecko networks/robinhood/tokens/0x4544…188C/pools: HOTDOG / COST 1% 0x264a…F55c dex uniswap-v3-robinhood pool_created_at 2026-07-30T01:51:05Z volume_usd.h24 39742.1921767497 reserve_in_usd 75092.9986 fdv_usd 489024.0478. HTML title HOTDOG/COST on Uniswap V3 (Robinhood) with 1% Fee; description volume $39,742.19 liquidity $75,045.40." }
  - { id: REP-7, method: api, checked_at: 2026-09-03T03:33:56Z, receipt_ids: [R-18, R-19, R-24], result: "Gecko HTML for pool 0x6d16…a250: HOTDOG/COST on Pons V2 Dex; description volume $7.56M contract 0x1c1daef0300551adbfbe403e7d567b6c5aff566f liquidity $181.9K. API volume_usd.h24 7565085.3116299 reserve_in_usd 183120.7511. DexScreener same token Uniswap v4 COST book volume.h24 7742940.71 liquidity.usd 190351.39 socials x.com/hotdogonpons websites hotdogrh.wtf. Blockscout 0x1C1…566f is_contract true is_verified false name hotdog symbol HOTDOG holders 3941 creator_address_hash null." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "lunch.fun V3 pair launch: launchPair minted a 1,000,000,000-supply LunchTokenPlain into a Uniswap v3 1% HOTDOG/COST full-range book; lunch API version v3 fee 10000 graduated true", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-6, R-7, R-9, R-13], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.hotdogonrh.com", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@HOTDOGonRH", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-8, R-14], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: identity.symbol, value: "HOTDOG", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-8, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-8, R-9, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-7, field: relationship, value: "Launchpad lunch.fun Stock/USDG-pair launcher (V3) 0x568E12B312751992DCfE387CFc8EC7D63E941103 created the token in tx 0xcae2…bfa0 at 2026-07-30T01:51:05Z; launcher() returns that address", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-7, R-9, R-10, R-14], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Pair asset COST 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 (Costco • Robinhood Token)", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-6, R-9, R-11, R-15], reproduction_ids: [REP-1, REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Liquidity venue Uniswap v3 1% pool 0x264ad13Bfc0585208b7d8b1712df51B096a5F55c, created in the launch tx; factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-12, R-14, R-15, R-16], reproduction_ids: [REP-1, REP-2, REP-5, REP-6], supersedes: null }
  - { id: CLM-10, field: identity.name, value: "hotdog", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-8, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: inference, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-8, R-11, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-8, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Distinct from HOTDOG 0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f, whose Gecko Pons V2 Dex COST book 0x6d16…a250 showed volume_usd.h24 7565085.31 reserve_in_usd 183120.75 this pass", class: verified, observed_at: 2026-09-03T03:33:56Z, receipt_ids: [R-18, R-19, R-24], reproduction_ids: [REP-7], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Gecko Uniswap v3 1% HOTDOG/COST 0x264a…F55c volume_usd.h24 39742.19 reserve_in_usd 75092.9986 fdv_usd 489024.05", class: verified, observed_at: 2026-09-03T03:30:00Z, receipt_ids: [R-16], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "DexScreener Uniswap v3 HOTDOG/COST 0x264a…F55c volume.h24 40454.99 liquidity.usd 75171.89 marketCap 487932", class: verified, observed_at: 2026-09-03T03:28:54Z, receipt_ids: [R-15], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Blockscout holders_count 221", class: verified, observed_at: 2026-09-03T03:29:40Z, receipt_ids: [R-8], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: control.owner, value: "owner() reverted; LunchTokenPlain has no owner and no privileged functions; launcher() and creator() are public getters", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-18, field: control.proxy, value: "Token creator 0x568E…1103 is an ERC1967Proxy with impl LunchV3PairLauncherFrozen; owner() 0x7B2DaF7F696bB844C7786693062D6619D1858cC9", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-10, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-19, field: security.audit, value: "No audit report URL was located on hotdogonrh.com, the @HOTDOGonRH profile, t.me/HOTDOGonRH, or lunch.fun/docs this pass", class: unknown, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.repository, value: "NULL — no GitHub org or repository URL on hotdogonrh.com, the @HOTDOGonRH profile, t.me/HOTDOGonRH, or GitHub search HOTDOGonRH|hotdogonrh (0 repos) this pass", class: claim, observed_at: 2026-09-03T03:33:00Z, receipt_ids: [R-1, R-26], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@HOTDOGonRH.role", value: project, class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: "account.@HOTDOGonRH.slug", value: hotdog, class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@hotdogonpons.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-19, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@HotdogRH.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@HotdogRH_CTO.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-28], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-8, R-15], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-27, field: product.mechanism, value: "LunchTokenPlain is a fixed-supply ERC-20 with unrestricted transfers; constructor mints totalSupply to launcher; tokenURI() reads launcher.baseTokenURI()", class: verified, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-28, field: communications.status, value: "hotdogonrh.com states Only ever trade the contract address shown on this page and on @HOTDOGonRH. Anything else is a different sausage.", class: claim, observed_at: 2026-09-03T03:29:40Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: risk
    title: "Gecko $7.56M HOTDOG/COST book is token 0x1C1 not 0x45443"
    summary: "Gecko Pons V2 Dex HOTDOG/COST 0x1C1…566f 24h volume $7.56M liquidity $181.9K; not lunch V3 0x4544…188C."
    occurred_at: 2026-09-03T03:33:56Z
    observed_at: 2026-09-03T03:33:56Z
    affected_fields: [relationship, identity.symbol]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-18, R-19, R-24]
  - id: EVT-2
    type: onchain
    title: "Gecko HOTDOG/COST Uniswap v3 1% 24h volume $39,742"
    summary: "Gecko Uniswap v3 1% HOTDOG/COST pool 0x264a…F55c: volume_usd.h24 $39,742.19 reserve_in_usd $75,093."
    occurred_at: 2026-09-03T03:30:00Z
    observed_at: 2026-09-03T03:30:00Z
    affected_fields: [economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15, R-16, R-17]
  - id: EVT-3
    type: company
    title: "@HOTDOGonRH posted hotdogonrh.com"
    summary: "@HOTDOGonRH posted https://www.hotdogonrh.com/; bio carries CA 0x4544…188C."
    occurred_at: 2026-09-02T22:28:45Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-3]
  - id: EVT-4
    type: ct
    title: "@Folo5288Peace named @HOTDOGonRH COST pair"
    summary: "@Folo5288Peace posted $HOTDOG as the $1.50 COST-paired hot-dog meme and tagged @HOTDOGonRH."
    occurred_at: 2026-09-02T19:52:26Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-5
    type: company
    title: "@HOTDOGonRH posted a main-character meme"
    summary: "@HOTDOGonRH posted: When you know you're the main character."
    occurred_at: 2026-09-02T16:28:37Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-6
    type: company
    title: "@HOTDOGonRH quoted Costco CEO on the $1.50 price"
    summary: "@HOTDOGonRH posted a Ron Vachris quote: The hot dog price will not change as long as I'm around."
    occurred_at: 2026-08-28T14:34:01Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-7
    type: onchain
    title: "lunch V3 pair launcher minted HOTDOG against COST"
    summary: "Tx 0xcae2…bfa0 called launchPair on 0x568E…1103 with pairToken COST and created Uniswap v3 pool 0x264a…F55c."
    occurred_at: 2026-07-30T01:51:05Z
    observed_at: 2026-09-03T03:29:40Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-9, R-12]

receipts:
  - { id: R-1, publisher: HOTDOG, title: "hotdogonrh.com home", url: "https://www.hotdogonrh.com/", published_at: null, accessed_at: 2026-09-03T03:29:40Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-10, CLM-20, CLM-21, CLM-22, CLM-28], excerpt: "title $HOTDOG: The $1.50 hot dog, now on Robinhood Chain. twitter:site @HOTDOGonRH. Live Robinhood Chain · Paired with $COST. CA 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C. Follow on X https://x.com/HOTDOGonRH. Only ever trade the contract address shown on this page and on @HOTDOGonRH. Anything else is a different sausage. The pool is $HOTDOG / COST (yes, tokenized Costco stock)." }
  - { id: R-2, publisher: "@HOTDOGonRH", title: "Costco $HOTDOG profile", url: "https://x.com/HOTDOGonRH", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-21, CLM-22], excerpt: "Display name Costco $HOTDOG, handle @HOTDOGonRH. Bio: $HOTDOG - the famous original memecoin paired with $COST. CA: 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C *not affiliated with Costco or Kirkland brands. Website t.me/HOTDOGonRH. Joined July 2026. 192 followers." }
  - { id: R-3, publisher: "@HOTDOGonRH", title: "hotdogonrh.com", url: "https://x.com/HOTDOGonRH/status/2095277777523986463", published_at: 2026-09-02T22:28:45Z, accessed_at: 2026-09-03T03:31:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, EVT-3], excerpt: "https://www.hotdogonrh.com/" }
  - { id: R-4, publisher: Telegram, title: "t.me/HOTDOGonRH", url: "https://t.me/HOTDOGonRH", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-4], excerpt: "og:title HOTDOG on RH. og:description hotdog CA: 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C. Title Telegram: View @HOTDOGonRH." }
  - { id: R-5, publisher: lunch, title: "hotdog ($HOTDOG) on lunch", url: "https://lunch.fun/coin/0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C", published_at: null, accessed_at: 2026-09-03T03:28:54Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-8], excerpt: "title hotdog ($HOTDOG) on lunch. meta description hotdog. og:url https://www.lunch.fun/coin/0x45443a4a7b58ab26a4b4d72616cf36d5aae7188c. Page lists COST 0x4ea005168d7f09a7a0ba9d1def21a479950e44c2 and pool 0x264ad13bfc0585208b7d8b1712df51b096a5f55c. twitter:site @lunchdotfun." }
  - { id: R-6, publisher: lunch, title: "GET /api/launches?q=HOTDOG", url: "https://lunch.fun/api/launches?q=HOTDOG", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: other, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-8, CLM-9], excerpt: "token 0x45443a4a7b58ab26a4b4d72616cf36d5aae7188c name hotdog symbol HOTDOG version v3 pair_token 0x4ea005168d7f09a7a0ba9d1def21a479950e44c2 pool 0x264ad13bfc0585208b7d8b1712df51b096a5f55c fee 10000 twitter https://x.com/HOTDOGonRH telegram https://t.me/HOTDOGonRH creator 0x4b03ca54be3d815453d37182e893a6e36b7d6781 created_at 2026-07-30T03:51:05+02:00 graduated true fee_locker 0x46f1ddd98a51016804b5a42db71d6985e76c8326. Additional HOTDOG-ticker rows exist at other addresses." }
  - { id: R-7, publisher: lunch, title: "How lunch works, in detail", url: "https://lunch.fun/docs", published_at: null, accessed_at: 2026-09-03T03:35:49Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-7], excerpt: "lunch is a fair-launch coin platform on Robinhood Chain. Anyone can mint a coin in one transaction — no presale, no team allocation. Entire supply is a single full-range Uniswap V3 position at launch, LP locked from block one. Stock/USDG-pair launcher (V3) 0x568E12B312751992DCfE387CFc8EC7D63E941103. The token itself is a plain, immutable ERC-20 — no transfer restrictions, no max-wallet, no admin, no mint." }
  - { id: R-8, publisher: Blockscout, title: "HOTDOG 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C", url: "https://robinhoodchain.blockscout.com/address/0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C", published_at: null, accessed_at: 2026-09-03T03:29:40Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-10, CLM-12, CLM-16, CLM-26, EVT-7], excerpt: "API v2 addresses: hash 0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C name hotdog is_contract true is_verified true creator_address_hash 0x568E12B312751992DCfE387CFc8EC7D63E941103 creation_transaction_hash 0xcae2c9b22792d3df3af3d43b9df1c3f9faad95ae61b796082b5aaa52cc3bbfa0. tokens: name hotdog symbol HOTDOG decimals 18 holders_count 221 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-9, publisher: Blockscout, title: "HOTDOG creation tx 0xcae2c9b2…", url: "https://robinhoodchain.blockscout.com/tx/0xcae2c9b22792d3df3af3d43b9df1c3f9faad95ae61b796082b5aaa52cc3bbfa0", published_at: 2026-07-30T01:51:05Z, accessed_at: 2026-09-03T03:29:40Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-7, CLM-8, EVT-7], excerpt: "timestamp 2026-07-30T01:51:05.000000Z status ok block 22934274 from 0x4b03CA54Be3d815453D37182E893a6E36B7d6781 to 0x568E12B312751992DCfE387CFc8EC7D63E941103 (ERC1967Proxy) method launchPair. Decoded: name hotdog symbol HOTDOG totalSupply 1e27 fee 10000 pairToken 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 devBuyAmount 0 minCoinOut 0." }
  - { id: R-10, publisher: Blockscout, title: "lunch V3 pair launcher 0x568E…1103", url: "https://robinhoodchain.blockscout.com/address/0x568E12B312751992DCfE387CFc8EC7D63E941103", published_at: null, accessed_at: 2026-09-03T03:29:40Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-18], excerpt: "hash 0x568E12B312751992DCfE387CFc8EC7D63E941103 name ERC1967Proxy is_contract true is_verified true creator_address_hash 0x7B2DaF7F696bB844C7786693062D6619D1858cC9 proxy_type eip1967 implementations LunchV3PairLauncherFrozen 0x94FABf797ae357f6ab8B561Cb54D6DFD693461C7." }
  - { id: R-11, publisher: Blockscout, title: "COST Costco • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2", published_at: null, accessed_at: 2026-09-03T03:29:40Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-11], excerpt: "hash 0x4EA005168D7F09a7A0Ba9D1DEf21a479950E44C2 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon creator_address_hash 0x4783C67b63dE2B358Ac5951a7D41F47A38F3C046. token name Costco • Robinhood Token symbol COST holders_count 13676." }
  - { id: R-12, publisher: Blockscout, title: "UniswapV3Pool 0x264a…F55c", url: "https://robinhoodchain.blockscout.com/address/0x264ad13Bfc0585208b7d8b1712df51B096a5F55c", published_at: null, accessed_at: 2026-09-03T03:29:40Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, EVT-7], excerpt: "hash 0x264ad13Bfc0585208b7d8b1712df51B096a5F55c name UniswapV3Pool is_contract true is_verified true creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA creation_transaction_hash 0xcae2c9b22792d3df3af3d43b9df1c3f9faad95ae61b796082b5aaa52cc3bbfa0." }
  - { id: R-13, publisher: Blockscout, title: "LunchTokenPlain verified source", url: "https://robinhoodchain.blockscout.com/address/0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C?tab=contract", published_at: null, accessed_at: 2026-09-03T03:29:40Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-17, CLM-27], excerpt: "API v2 smart-contracts: name LunchTokenPlain compiler v0.8.30+commit.73712a01 is_verified true is_fully_verified true file_path contracts/plainfactory/LunchTokenPlain.sol. Contract LunchTokenPlain is ERC20; immutable launcher and creator; constructor mints totalSupply_ to launcher_; no privileged functions; tokenURI() concatenates launcher.baseTokenURI() with address(this)." }
  - { id: R-14, publisher: Robinhood Chain RPC, title: "eth_getCode and ERC-20 / pool / launcher calls", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-9, CLM-17, CLM-18], excerpt: "eth_blockNumber 53102484. eth_getCode HOTDOG 2285 bytes; COST 283; launcher 130; pool 22142; 0x7B2D…8cC9 empty. name() hotdog; symbol() HOTDOG; decimals 18; totalSupply 1e27; owner() revert. launcher() 0x568E…1103; creator() 0x4b03…6781. pool token0 HOTDOG token1 COST fee 10000 factory 0x1f7d…2EfA. launcher owner() 0x7B2D…8cC9." }
  - { id: R-15, publisher: DexScreener, title: "HOTDOG token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C", published_at: null, accessed_at: 2026-09-03T03:28:54Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-9, CLM-15, CLM-26, EVT-2], excerpt: "chainId robinhood dexId uniswap labels v3 pairAddress 0x264ad13Bfc0585208b7d8b1712df51B096a5F55c base hotdog HOTDOG 0x4544…188C quote COST 0x4EA0…44C2 volume.h24 40454.99 liquidity.usd 75171.89 marketCap 487932 pairCreatedAt 1785376265000. info.websites https://www.hotdogonrh.com/ socials x.com/HOTDOGonRH t.me/HOTDOGonRH." }
  - { id: R-16, publisher: GeckoTerminal, title: "HOTDOG pools on Robinhood", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x45443a4a7b58ab26a4b4d72616cf36d5aae7188c/pools?page=1", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-14, EVT-2], excerpt: "id robinhood_0x264ad13bfc0585208b7d8b1712df51b096a5f55c name HOTDOG / COST 1% pool_created_at 2026-07-30T01:51:05Z volume_usd.h24 39742.1921767497 reserve_in_usd 75092.9986 fdv_usd 489024.0478 dex uniswap-v3-robinhood base robinhood_0x45443a4a7b58ab26a4b4d72616cf36d5aae7188c quote robinhood_0x4ea005168d7f09a7a0ba9d1def21a479950e44c2." }
  - { id: R-17, publisher: GeckoTerminal, title: "HOTDOG/COST Uniswap V3 1% pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x264ad13bfc0585208b7d8b1712df51b096a5f55c", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [EVT-2], excerpt: "title HOTDOG/COST - hotdog Price on Uniswap V3 (Robinhood) with 1% Fee | GeckoTerminal. description: HOTDOG/COST price today is $0.0004897 with a 24-hour trading volume of $39,742.19. hotdog contract address is 0x45443a4a7b58ab26a4b4d72616cf36d5aae7188c with $75,045.40 in liquidity." }
  - { id: R-18, publisher: GeckoTerminal, title: "Pons V2 Dex HOTDOG/COST 0x1C1…566f", url: "https://www.geckoterminal.com/robinhood/pools/0x6d16129c968395aa5b2b47527bc6ccd78bed27748271891b73baa323fdbca250", published_at: null, accessed_at: 2026-09-03T03:33:56Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13, EVT-1], excerpt: "title HOTDOG/COST - hotdog Price on Pons V2 Dex | GeckoTerminal. description: HOTDOG/COST price today is $0.005227 with a 24-hour trading volume of $7.56M. hotdog contract address is 0x1c1daef0300551adbfbe403e7d567b6c5aff566f with $181.9K in liquidity. API volume_usd.h24 7565085.3116299 reserve_in_usd 183120.7511 pool_created_at 2026-09-02T20:06:14Z." }
  - { id: R-19, publisher: DexScreener, title: "HOTDOG 0x1C1…566f token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13, CLM-23, EVT-1], excerpt: "pair 0x6d16129c968395aa5b2b47527bc6ccd78bed27748271891b73baa323fdbca250 labels v4 base hotdog HOTDOG 0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f quote COST 0x4EA0…44C2 volume.h24 7742940.71 liquidity.usd 190351.39 marketCap 5493401. info.websites https://www.hotdogrh.wtf/ socials x.com/hotdogonpons." }
  - { id: R-20, publisher: "@HOTDOGonRH", title: "When you know you're the main character", url: "https://x.com/HOTDOGonRH/status/2095187146495639826", published_at: 2026-09-02T16:28:37Z, accessed_at: 2026-09-03T03:31:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "When you know you're the main character. 😎🌭" }
  - { id: R-21, publisher: "@Folo5288Peace", title: "$HOTDOG the $1.50 hot-dog meme", url: "https://x.com/Folo5288Peace/status/2095238439402602548", published_at: 2026-09-02T19:52:26Z, accessed_at: 2026-09-03T03:31:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "$HOTDOG the $1.50 hot-dog meme on Robinhood Chain, paired with COST. @HOTDOGonRH" }
  - { id: R-22, publisher: "@HOTDOGonRH", title: "Ron Vachris $1.50 quote", url: "https://x.com/HOTDOGonRH/status/2093346366940496012", published_at: 2026-08-28T14:34:01Z, accessed_at: 2026-09-03T03:31:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "“The hot dog price will not change as long as I'm around.” -Ron Vachris, @Costco CEO" }
  - { id: R-23, publisher: "@hotdogonpons", title: "hotdog profile", url: "https://x.com/hotdogonpons", published_at: null, accessed_at: 2026-09-03T03:34:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23], excerpt: "Display name hotdog, handle @hotdogonpons. Bio: The $1.50 legend himself. DexScreener maps this handle to token 0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f, not 0x4544…188C." }
  - { id: R-24, publisher: Blockscout, title: "HOTDOG 0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f", url: "https://robinhoodchain.blockscout.com/address/0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f", published_at: null, accessed_at: 2026-09-03T03:33:56Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, EVT-1], excerpt: "hash 0x1C1DAEF0300551aDBfbE403e7d567b6c5aFF566f name hotdog is_contract true is_verified false creator_address_hash null creation_transaction_hash null. token name hotdog symbol HOTDOG holders_count 3941 total_supply 1000000000000000000000000000." }
  - { id: R-25, publisher: Blockscout, title: "lunch V3 pair fee locker 0x46F1…8326", url: "https://robinhoodchain.blockscout.com/address/0x46F1DdD98a51016804b5a42db71d6985E76c8326", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x46F1DdD98a51016804b5a42db71d6985E76c8326 name ERC1967Proxy is_contract true is_verified true creator_address_hash 0x7B2DaF7F696bB844C7786693062D6619D1858cC9 proxy_type eip1967 implementations LunchV3PairFeeLockerFrozen 0x14D30E27212E7CC5E5cbCeBF2cDBd44F33Ba58e8." }
  - { id: R-26, publisher: GitHub, title: "Search HOTDOGonRH OR hotdogonrh", url: "https://api.github.com/search/repositories?q=HOTDOGonRH+OR+hotdogonrh", published_at: null, accessed_at: 2026-09-03T03:32:00Z, kind: repository, authority: unknown, authenticity: unconfirmed, supports: [CLM-20], excerpt: "total_count 0. hotdogonrh.com HTML has x.com/HOTDOGonRH and fomo.family links and no github.com URL." }
  - { id: R-27, publisher: "@HotdogRH", title: "Hotdog profile", url: "https://x.com/HotdogRH", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24], excerpt: "Display name Hotdog, handle @HotdogRH. Bio: Paired with $COST. The first stock-paired token on Uniswap Launchpad. Distinct handle from @HOTDOGonRH." }
  - { id: R-28, publisher: "@HotdogRH_CTO", title: "HotDog profile", url: "https://x.com/HotdogRH_CTO", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-25], excerpt: "Display name HotDog, handle @HotdogRH_CTO. Bio: A Hotdog on Robinhood. Paired with $COST. Posts cite CA 0x99a66d49abe9a8b918360d34b3932e9bd7a4c3f3, not 0x4544…188C." }

gaps:
  - { priority: P0, question: "Is the Uniswap v3 position NFT for pool 0x264a…F55c locked in LunchV3PairFeeLockerFrozen 0x46F1…8326, as lunch docs state LP locked from block one?", checked: "lunch API fee_locker 0x46F1…8326; locker proxy verified LunchV3PairFeeLockerFrozen; position tokenId / ownerOf not read this pass", next: "read the launch tx logs for the NonfungiblePositionManager tokenId and ownerOf on the position manager" }
  - { priority: P0, question: "Does Pons V2 Dex HOTDOG 0x1C1…566f have a site or handle that publishes that CA, so it can take its own seed slug?", checked: "Gecko/DexScreener $7.56M / $182k COST book; DexScreener websites hotdogrh.wtf socials @hotdogonpons; hotdogrh.wtf HTML this pass had no 0x address; @hotdogonpons bio has no CA; Blockscout creator_address_hash null", next: "open hotdogrh.wtf after JS load, @hotdogonpons media, and Pons factory creator for 0x1C1…566f" }
  - { priority: P1, question: "Is there an audit of LunchTokenPlain / LunchV3PairLauncherFrozen as deployed on 4663?", checked: "hotdogonrh.com, @HOTDOGonRH, t.me/HOTDOGonRH, lunch.fun/docs, 2026-09-03", next: "record any report URL from lunch.fun or the launcher owner as a claim" }
  - { priority: P2, question: "Which of the extra lunch.fun HOTDOG-ticker rows (0xd8a3…, 0x83fe…, 0x24fa…, 0x8ba0…, 0xb2fd…) still have books, and should they stay as ticker notes only?", checked: "GET /api/launches?q=HOTDOG returned 7 rows this pass; only 0x4544…188C has @HOTDOGonRH and pool 0x264a…F55c", next: "leave them as ticker notes unless one grows an official CA-linked surface" }

---

# HOTDOG — research packet

## What it is

A Costco-paired memecoin minted through lunch.fun's V3 pair launcher. Holders trade HOTDOG against COST on Uniswap v3 1% pool 0x264a…F55c. hotdogonrh.com and @HOTDOGonRH publish contract 0x4544…188C.

Themes: memecoin, stock-paired:COST

## Why it matters

This is a Robinhood-native stock-paired memecoin that quotes Costco • Robinhood Token rather than WETH. lunch.fun's published V3 pair launcher created it in one launchPair transaction on 30 Jul 2026. A second HOTDOG/COST book on Gecko (Pons V2 Dex, token 0x1C1…566f) printed ~$7.56M 24h volume and ~$182k liquidity this pass and is a different contract.

## What could go wrong

Gecko and DexScreener both list more than one HOTDOG/COST pair; a card that uses ticker plus quote asset without the CA will mix 0x4544…188C with 0x1C1…566f. The lunch V3 launcher is an ERC1967 proxy whose owner() is one EOA. LunchTokenPlain itself has no owner, but tokenURI() reads a base from that launcher.

## Product and mechanics

A holder swaps HOTDOG against COST on Uniswap v3 1% pool 0x264a…F55c. The launch tx called launchPair on lunch Stock/USDG-pair launcher (V3) 0x568E…1103 with name hotdog, symbol HOTDOG, supply 1e27, fee 10000, pairToken COST, and zero dev buy. [verified R-9 R-14 R-15]

LunchTokenPlain is a fixed-supply ERC-20: constructor mints supply to the launcher, transfers are unrestricted, and there is no admin mint. tokenURI() concatenates launcher.baseTokenURI() with the token address. lunch.fun/docs describes V3 coins as a single full-range Uniswap V3 position with LP locked from block one. [verified R-13] [claim R-7]

## Control and security

owner() on the token reverts. launcher() returns 0x568E…1103 and creator() returns EOA 0x4b03…6781. The launcher proxy implementation is LunchV3PairLauncherFrozen; owner() on the proxy is EOA 0x7B2D…8cC9 with empty code. lunch API names fee locker 0x46F1…8326 (LunchV3PairFeeLockerFrozen). This pass did not read the position NFT owner. [verified R-10 R-13 R-14] [claim R-6]

No audit report URL was located on the token site, handle, telegram, or lunch docs this pass. [unknown]

## Team and provenance

hotdogonrh.com sets twitter:site to @HOTDOGonRH and publishes CA 0x4544…188C. @HOTDOGonRH bio carries the same CA and links t.me/HOTDOGonRH; the handle posted the site URL on 2 Sep 2026. Telegram og:description repeats the CA. lunch.fun lists the same twitter and telegram on the V3 launch row. No GitHub repository was located. [verified R-1 R-2 R-3 R-4]

Handles @hotdogonpons, @HotdogRH and @HotdogRH_CTO also use a HOTDOG/COST story; DexScreener maps @hotdogonpons to token 0x1C1…566f and @HotdogRH_CTO has posted CA 0x99a6…c3F3. [claim R-19 R-23 R-27 R-28]

## Economics and activity

Gecko Uniswap v3 1% HOTDOG/COST 0x264a…F55c on 2026-09-03: 24h volume 39,742.19 USD, reserve 75,092.9986 USD, fdv 489,024 USD. DexScreener the same pair: 24h volume 40,454.99 USD, liquidity 75,171.89 USD, market cap 487,932 USD. Blockscout holders 221. [verified R-8 R-15 R-16]

Gecko Pons V2 Dex HOTDOG/COST for token 0x1C1…566f the same day: 24h volume 7,565,085.31 USD, reserve 183,120.75 USD. That is not this token's book. [verified R-18]

## Material risks

- A second HOTDOG/COST pair (token 0x1C1…566f, Gecko Pons V2 Dex) showed ~$7.56M 24h volume and ~$182k liquidity this pass. [verified R-18 R-19]
- The lunch V3 pair launcher is an ERC1967 proxy owned by EOA 0x7B2D…8cC9; tokenURI() reads a base from that launcher. [verified R-10 R-13 R-14]
- This pass did not reproduce the LP NFT lock. [claim R-6 R-7]
- No audit report was located this pass. [unknown]
- lunch.fun/api/launches?q=HOTDOG returns additional HOTDOG-ticker rows at other addresses. [claim R-6]

## Verification passes

- Receipts: hotdogonrh.com, @HOTDOGonRH profile and dated posts, t.me/HOTDOGonRH, lunch.fun/coin and /api/launches?q=HOTDOG, lunch.fun/docs, Blockscout API v2, RPC eth_getCode and eth_call, DexScreener and Gecko for 0x4544…188C and 0x1C1…566f were opened on 2026-09-03; excerpts are copied from those pages. [verified R-1 R-8 R-14 R-15 R-16]
- Numbers: $39,742.19 / $75,093 are Gecko Uniswap v3 1% HOTDOG/COST 0x264a…F55c, not the Pons V2 Dex $7.56M / $181.9K book and not an all-chains figure. [verified R-16 R-18]
- Adversarial: the strongest contrary reading is that the Gecko ~$182k / ~$7.5M HOTDOG/COST pair is this lunch V3 token, or that @hotdogonpons is the official handle. Contract 0x4544…188C's Gecko pool is Uniswap v3 1% 0x264a…F55c at ~$40k 24h / ~$75k reserve; the $7.56M book names 0x1C1…566f. Site and @HOTDOGonRH publish 0x4544…188C. [verified R-1 R-16 R-18]

## Operations log

- Census 49 rows: no hotdog, HOTDOG or @HOTDOGonRH. Pending packets have no hotdog directory; lunch-fun packet names this CA as a V3 pair example.
- Opened https://www.hotdogonrh.com/, https://lunch.fun/coin/0x45443A4a7b58ab26A4B4D72616cf36D5aAE7188C, https://lunch.fun/api/launches?q=HOTDOG, https://lunch.fun/docs, https://x.com/HOTDOGonRH and the event URLs, https://t.me/HOTDOGonRH.
- RPC eth_getCode / eth_call / eth_blockNumber on https://rpc.mainnet.chain.robinhood.com at block 53102484.
- Blockscout API v2 for token, tx, launcher, COST, pool, fee locker, LunchTokenPlain source, and 0x1C1…566f.
- DexScreener latest/dex/tokens 0x4544…188C and 0x1C1…566f.
- GeckoTerminal API and HTML for Uniswap v3 1% 0x264a…F55c and Pons V2 Dex 0x6d16…a250.
- GitHub search HOTDOGonRH OR hotdogonrh: 0 repos.
- lunch.fun V3 pair launcher confirmed as creator. Gecko ~$182k / ~$7.5M HOTDOG/COST is token 0x1C1…566f, not this CA.
- No content/ writes. No merge. No push.
