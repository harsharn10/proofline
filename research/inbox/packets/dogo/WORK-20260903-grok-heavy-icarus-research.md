---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: dogo
name: DOGO
packet_tier: seed
as_of: 2026-09-03T04:36:00Z
prior_packet: null
supersedes: null
owned_slugs: [dogo]
allowed_paths:
  - research/inbox/packets/dogo/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: DogBull
  aliases: [DOGO, "DogBull"]
  symbols: [DOGO]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://dogbull.xyz
  official_handle: "NULL — listed handle @dogbullxyz is Account suspended on GET x.com/dogbullxyz; DexScreener info is null; site twitter:site is @dogo (D.O.G.O., unrelated); X user search for dogbullxyz returned unrelated handles; flag unconfirmed-official"
  repository: "NULL — GitHub search dogbull.xyz OR dogbullxyz returned total_count 0; dogbull.xyz HTML and verified source have no github.com URL this pass"
  possible_matches:
    - slug: doggie
      signals: [other]
      contrary_signals:
        - "Packed doggie is Doggie Mode / DOGGIE at 0xa9eF…1e18, Uniswap v4 DOGGIE/TSLA pair 0x141b…f3f8, site doggiemode.com / @DoggieMode"
        - "This DOGO is DogBull at 0x77b0…2356, Uniswap v4 DOGO/ETH pair 0xbe05…b6b1, site dogbull.xyz"
        - "No shared domain, handle, or reproduced address"
    - slug: doge-1
      signals: [other]
      contrary_signals:
        - "Packed doge-1 is DOGE-1 at 0x3eC8…4c03, PonsV2LauncherToken, Uniswap v4 DOGE-1/SPCX pair 0x037dea9a…d54c, site doge1coinrh.com"
        - "This DOGO is a 3649-byte DogBull.sol deploy by EOA 0x9862…6EEb, not a Pons clone, quoted against ETH"
        - "No shared domain, handle, or reproduced address"
    - slug: dogecoin-tsla
      signals: [other]
      contrary_signals:
        - "Packed dogecoin-tsla is DOGECOIN at 0x51d3bBe1…1E18, LongLauncher DopplerERC20V1 clone, Uniswap v4 DOGECOIN/TSLA pair 0x4c02…86d8"
        - "This DOGO is name DogBull / symbol DOGO at 0x77b0…2356 paired to ETH, not TSLA"
        - "No shared domain, handle, or reproduced address"
    - slug: johndog
      signals: [other]
      contrary_signals:
        - "Packed johndog is John Dog / JOHNDOG at 0x64bc…1e18 quoted against SGOV"
        - "This DOGO is DogBull / DOGO at 0x77b0…2356 quoted against ETH"
        - "No shared domain, handle, or reproduced address"
    - slug: longdog
      signals: [other]
      contrary_signals:
        - "Packed longdog is LONGDOG at 0xfe7E…1e18, LongLauncher clone, Uniswap v4 LONGDOG/TSLA, site longdog.dog"
        - "This DOGO is a standalone DogBull.sol at 0x77b0…2356, not LongLauncher, paired to ETH"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x77b0…2356 exists on 4663 as fully verified DogBull.sol (3649-byte code, not EIP-1167); name DogBull symbol DOGO totalSupply 1.01e9*1e18; EOA 0x9862…6EEb created it at 2026-08-08T17:49:30Z. Flagship book is Uniswap v4 DOGO/ETH 0xbe05…b6b1, not a stock pair. dogbull.xyz publishes the CA. Distinct from packed doggie/doge-1/dogecoin-tsla. No bidirectional official handle this pass (@dogbullxyz suspended). [R-1] [R-2] [R-4] [R-5] [R-7] [R-9] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4, CLM-7], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-13], note: "" }

links:
  - { kind: site, url: "https://dogbull.xyz/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/dogbullxyz", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/dogbullonhood", authenticity: unconfirmed }
  - { kind: other, url: "https://www.geckoterminal.com/robinhood/pools/0xbe05adff5cf9a0bfd2f1eeb69458d5dda27e7075d6f49b0458db4b4c1967b6b1", authenticity: confirmed }

deployments:
  - label: DOGO token (verified DogBull.sol)
    role: token
    address:
      value: "0x77b0AA38451ccDC1b42587E2f80B9879A7f82356"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:30:56Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: full
    receipt_ids: [R-1, R-2, R-4, R-16]
  - label: Uniswap v4 PoolManager (DOGO/ETH LP holder)
    role: other
    address:
      value: "0x8366a39CC670B4001A1121B8F6A443A643e40951"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:32:21Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-15, R-5, R-7]

metrics:
  - { kind: volume_24h, value: 385442.45, currency: USD, as_of: 2026-09-03T04:32:48Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xbe05adff5cf9a0bfd2f1eeb69458d5dda27e7075d6f49b0458db4b4c1967b6b1 volume_usd.h24 (DOGO/WETH pool, not Gecko token total_reserve_in_usd 0.0)", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 988735.55, currency: USD, as_of: 2026-09-03T04:32:48Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xbe05adff5cf9a0bfd2f1eeb69458d5dda27e7075d6f49b0458db4b4c1967b6b1 reserve_in_usd (DOGO/WETH pool)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 10021808.32, currency: USD, as_of: 2026-09-03T04:32:48Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xbe05adff5cf9a0bfd2f1eeb69458d5dda27e7075d6f49b0458db4b4c1967b6b1 fdv_usd / market_cap_usd", class: claim, receipt_ids: [R-6, R-7] }
  - { kind: holders, value: 20555, currency: null, as_of: 2026-09-03T04:30:56Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x77b0AA38451ccDC1b42587E2f80B9879A7f82356 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:31:51Z, receipt_ids: [R-4], result: "eth_blockNumber 0x32ad194 (53137812). Token 0x77b0…2356 eth_getCode 3649 bytes (not EIP-1167). name DogBull, symbol DOGO, decimals 18, totalSupply 1.01e27. dogoWallet() 0x986260fd57204B0732b4e9ee678fb21fA5F76EEb. owner() and factory() revert. Creator eth_getCode 0x. balanceOf(creator) 53797678120404506629244426 (~5.33% of supply)." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:31:20Z, receipt_ids: [R-1, R-2, R-3, R-15, R-16], result: "Blockscout api/v2 token 0x77b0…2356 name DogBull symbol DOGO holders_count 20555 total_supply 1.01e27 decimals 18 type ERC-20. Address is_contract true is_verified true proxy_type null implementations []. creator_address_hash 0x986260fd…6EEb creation_transaction_hash 0xf1db5a8b…da35 timestamp 2026-08-08T17:49:30Z block 31265843. Smart-contract name DogBull compiler v0.8.26+commit.8a97fa7a file_path project/contracts/DogBull.sol is_partially_verified false verified_at 2026-08-08T17:51:09Z. Top holder PoolManager 0x8366…0951 100047708e18." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:32:48Z, receipt_ids: [R-5, R-6, R-7, R-8], result: "DexScreener latest/dex/tokens 0x77b0…2356: 2 robinhood uniswap pairs. Top DOGO/ETH v4 0xbe05…b6b1 liquidity.usd 995249.75 volume.h24 385129.98 fdv/marketCap 10035790 pairCreatedAt 1786362015 (2026-08-10T11:40:15Z) info null. Dust DOGO/USDG v4 liquidity.usd 0.09. Gecko pool DOGO/WETH dex uniswap-v4-robinhood volume_usd.h24 385442.45 reserve_in_usd 988735.55 fdv_usd 10021808.32 pool_created_at 2026-08-10T11:40:15Z locked_liquidity_percentage null. Gecko token volume_usd.h24 385444.93 total_reserve_in_usd 0.0 coingecko_coin_id dogbull." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T04:33:20Z, receipt_ids: [R-9, R-10, R-11, R-16], result: "dogbull.xyz HTTP 200 publishes CA 0x77b0AA38451ccDC1b42587E2f80B9879A7f82356, links x.com/dogbullxyz and t.me/dogbullonhood, twitter:site @dogo. Verified source comment repeats those three URLs. GET x.com/dogbullxyz returns Account suspended. t.me/dogbullonhood og:title DogBull On Hood, 167 members, no CA in the preview. @dogo is D.O.G.O., unrelated." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "EOA 0x9862…6EEb deployed verified DogBull.sol (not a pad clone). Constructor minted 1_010_000_000e18 to the deployer and set dogoWallet. Traders buy and sell DOGO on Uniswap v4 DOGO/ETH pool 0xbe05…b6b1 via PoolManager 0x8366…0951.", class: verified, observed_at: 2026-09-03T04:32:48Z, receipt_ids: [R-2, R-3, R-4, R-5, R-7, R-16], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "DogBull", class: verified, observed_at: 2026-09-03T04:30:56Z, receipt_ids: [R-1, R-4, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "DOGO", class: verified, observed_at: 2026-09-03T04:30:56Z, receipt_ids: [R-1, R-4, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x77b0AA38451ccDC1b42587E2f80B9879A7f82356", class: verified, observed_at: 2026-09-03T04:31:20Z, receipt_ids: [R-1, R-3, R-4, R-9], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:32:48Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x8366a39CC670B4001A1121B8F6A443A643e40951", class: verified, observed_at: 2026-09-03T04:32:21Z, receipt_ids: [R-15, R-5, R-7], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: identity.domain, value: "https://dogbull.xyz", class: verified, observed_at: 2026-09-03T04:32:23Z, receipt_ids: [R-9, R-16], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — listed handle @dogbullxyz is Account suspended; site twitter:site @dogo is unrelated D.O.G.O.; DexScreener info null; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:33:20Z, receipt_ids: [R-5, R-9, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: economics.metric, value: "Gecko DOGO/WETH Uniswap v4 24h volume 385442.45 USD and reserve_in_usd 988735.55 at 2026-09-03T04:32:48Z (pool slice; Gecko token total_reserve_in_usd is 0.0 this pass)", class: verified, observed_at: 2026-09-03T04:32:48Z, receipt_ids: [R-6, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DexScreener same ETH pair liquidity.usd 995249.75 volume.h24 385129.98 fdv/marketCap 10035790 at 2026-09-03T04:31:20Z", class: verified, observed_at: 2026-09-03T04:31:20Z, receipt_ids: [R-5], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: 20555, class: verified, observed_at: 2026-09-03T04:30:56Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-12, field: control.owner, value: "owner() reverts; no Ownable. dogoWallet() returns deployer 0x9862…6EEb with no setter in verified source. Constructor is the only _mint. Creator is an EOA (eth_getCode 0x) and still holds ~53.8M DOGO.", class: verified, observed_at: 2026-09-03T04:31:51Z, receipt_ids: [R-4, R-15, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Distinct from packed doggie (DOGGIE/TSLA 0xa9eF…1e18), packed doge-1 (DOGE-1/SPCX 0x3eC8…4c03), and packed dogecoin-tsla (DOGECOIN/TSLA 0x51d3bBe1…1E18). This row is DogBull/DOGO 0x77b0…2356 paired to ETH.", class: verified, observed_at: 2026-09-03T04:32:48Z, receipt_ids: [R-1, R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-14, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:31:51Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is native ETH (DexScreener quote 0x0000…0000 Ether; Gecko quote token id robinhood_0x0000…0000, pool name DOGO / WETH). Venue is Uniswap v4 PoolManager 0x8366…0951 pool 0xbe05…b6b1. Dust DOGO/USDG pair liquidity.usd 0.09.", class: verified, observed_at: 2026-09-03T04:32:48Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is EOA 0x9862…6EEb; factory() reverts. Not Pons, LONG, PAIR, lunch, or hood.fun.", class: verified, observed_at: 2026-09-03T04:31:51Z, receipt_ids: [R-2, R-3, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on dogbull.xyz, Blockscout, DexScreener, Gecko, Telegram preview, or X search this pass", class: unknown, observed_at: 2026-09-03T04:33:20Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: t.me/dogbullonhood og:title DogBull On Hood, 167 members, no contract in the preview; listed X @dogbullxyz is suspended", class: claim, observed_at: 2026-09-03T04:33:20Z, receipt_ids: [R-10, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 10021808.32; DexScreener fdv/marketCap 10035790. Gecko token market_cap_usd 10021808.32.", class: verified, observed_at: 2026-09-03T04:32:48Z, receipt_ids: [R-5, R-6, R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: identity.repository, value: "NULL — GitHub search dogbull.xyz OR dogbullxyz total_count 0; site HTML has no github.com URL", class: claim, observed_at: 2026-09-03T04:33:21Z, receipt_ids: [R-9, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: candidate, value: "dogo | DOGO | NULL | https://dogbull.xyz — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-1, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "dogbull.xyz meta and FAQ claim LP locked, contract renounced, zero tax / no mint / no blacklist / no team sniping. Gecko locked_liquidity_percentage is null; deployer still holds ~53.8M; source has no Ownable to renounce.", class: claim, observed_at: 2026-09-03T04:32:23Z, receipt_ids: [R-9, R-7, R-15, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: "account.@dogbullxyz.flags", value: handle-suspended, class: claim, observed_at: 2026-09-03T04:33:20Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "EOA deployed verified DogBull / DOGO"
    summary: "Tx 0xf1db…da35 from 0x9862…6EEb at 2026-08-08T17:49:30Z created 0x77b0…2356; constructor minted 1.01e9 DOGO."
    occurred_at: 2026-08-08T17:49:30Z
    observed_at: 2026-09-03T04:31:20Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2, R-3]
  - id: EVT-2
    type: onchain
    title: "Uniswap v4 DOGO/ETH book opened"
    summary: "DexScreener/Gecko pairCreatedAt 2026-08-10T11:40:15Z for pool 0xbe05…b6b1. Dust DOGO/USDG pair 2026-08-10T12:24:35Z."
    occurred_at: 2026-08-10T11:40:15Z
    observed_at: 2026-09-03T04:32:48Z
    affected_fields: [economics.metric, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-7]
  - id: EVT-3
    type: ct
    title: "CoinMarketCap listings bot posted $DOGO"
    summary: "@cmclistings posted New CoinMarketCap Listing $DOGO on Robinhood Chain with CA 0x77b0…2356 and X @dogbullxyz."
    occurred_at: 2026-08-25T22:30:01Z
    observed_at: 2026-09-03T04:33:20Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-4
    type: ct
    title: "@zazXBT ranked dogbull ~$10m cap"
    summary: "Robinhood chain memes by cap list put dogbull tenth at $10m, behind spacehood and tendies."
    occurred_at: 2026-09-01T19:38:29Z
    observed_at: 2026-09-03T04:32:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-5
    type: ct
    title: "Listed X handle @dogbullxyz is suspended"
    summary: "GET x.com/dogbullxyz returned Account suspended. dogbull.xyz and verified source still link that URL."
    occurred_at: 2026-09-03T04:33:20Z
    observed_at: 2026-09-03T04:33:20Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-11, R-9]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x77b0…2356 DogBull / DOGO", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x77b0AA38451ccDC1b42587E2f80B9879A7f82356", published_at: null, accessed_at: 2026-09-03T04:30:56Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-5, CLM-11, CLM-22], excerpt: "address_hash 0x77b0AA38451ccDC1b42587E2f80B9879A7f82356 name DogBull symbol DOGO decimals 18 total_supply 1010000000000000000000000000 holders_count 20555 type ERC-20 circulating_market_cap 9994649.958936388 volume_24h 389815.15478108794 exchange_rate 0.00989569." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x77b0…2356 DogBull", url: "https://robinhoodchain.blockscout.com/address/0x77b0AA38451ccDC1b42587E2f80B9879A7f82356", published_at: null, accessed_at: 2026-09-03T04:30:56Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-16, EVT-1], excerpt: "hash 0x77b0AA38451ccDC1b42587E2f80B9879A7f82356 name DogBull is_contract true is_verified true is_scam false proxy_type null implementations []. creator_address_hash 0x986260fd57204B0732b4e9ee678fb21fA5F76EEb creation_transaction_hash 0xf1db5a8b6f56887de8d64691f80db39ca4dd030608e0e6ca172ad72e6229da35." }
  - { id: R-3, publisher: Blockscout, title: "Creation tx 0xf1db5a8b…da35", url: "https://robinhoodchain.blockscout.com/tx/0xf1db5a8b6f56887de8d64691f80db39ca4dd030608e0e6ca172ad72e6229da35", published_at: 2026-08-08T17:49:30Z, accessed_at: 2026-09-03T04:31:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-16, EVT-1], excerpt: "timestamp 2026-08-08T17:49:30.000000Z status ok result success block_number 31265843 from 0x986260fd57204B0732b4e9ee678fb21fA5F76EEb (is_contract false) to null created_contract DogBull 0x77b0AA38451ccDC1b42587E2f80B9879A7f82356 is_verified true." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, dogoWallet() on DOGO", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:31:51Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-12, CLM-14, CLM-16], excerpt: "eth_blockNumber 0x32ad194 (53137812). Token code 3649 B. name DogBull symbol DOGO decimals 18 totalSupply 1.01e27. dogoWallet() 0x986260fd57204B0732b4e9ee678fb21fA5F76EEb. owner() and factory() revert. Creator code 0x. balanceOf(creator) 53797678120404506629244426." }
  - { id: R-5, publisher: DexScreener, title: "latest/dex/tokens DOGO", url: "https://api.dexscreener.com/latest/dex/tokens/0x77b0AA38451ccDC1b42587E2f80B9879A7f82356", published_at: null, accessed_at: 2026-09-03T04:31:20Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-8, CLM-10, CLM-13, CLM-14, CLM-15, CLM-17, CLM-20, EVT-2], excerpt: "2 robinhood uniswap pairs. Top pairAddress 0xbe05adff5cf9a0bfd2f1eeb69458d5dda27e7075d6f49b0458db4b4c1967b6b1 labels v4 base DogBull / DOGO quote Ether / ETH 0x0000…0000 liquidity.usd 995249.75 volume.h24 385129.98 fdv 10035790 marketCap 10035790 pairCreatedAt 1786362015000. info null. Second pair DOGO/USDG liquidity.usd 0.09." }
  - { id: R-6, publisher: GeckoTerminal, title: "DogBull token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x77b0AA38451ccDC1b42587E2f80B9879A7f82356", published_at: null, accessed_at: 2026-09-03T04:32:21Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-20], excerpt: "name DogBull symbol DOGO decimals 18 total_supply 1.01e27 price_usd 0.009922582495 fdv_usd 10021808.3195667 market_cap_usd 10021808.31995 volume_usd.h24 385444.934108797 total_reserve_in_usd 0.0 coingecko_coin_id dogbull. Top pool 0xbe05…b6b1." }
  - { id: R-7, publisher: GeckoTerminal, title: "DOGO/WETH Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xbe05adff5cf9a0bfd2f1eeb69458d5dda27e7075d6f49b0458db4b4c1967b6b1", published_at: null, accessed_at: 2026-09-03T04:32:48Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-15, CLM-17, CLM-20, CLM-23, EVT-2], excerpt: "name DOGO / WETH pool_created_at 2026-08-10T11:40:15Z fdv_usd 10021808.32 market_cap_usd 10021808.32 volume_usd.h24 385442.453899634 reserve_in_usd 988735.5488 locked_liquidity_percentage null transactions.h24 buys 24 sells 18. dex uniswap-v4-robinhood quote robinhood_0x0000000000000000000000000000000000000000." }
  - { id: R-8, publisher: GeckoTerminal, title: "DogBull token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x77b0AA38451ccDC1b42587E2f80B9879A7f82356/info", published_at: null, accessed_at: 2026-09-03T04:32:48Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7], excerpt: "websites [https://dogbull.xyz] twitter_handle dogbullxyz telegram_handle dogbullonhood coingecko_coin_id dogbull gt_verified true holders.count 20546 last_updated 2026-09-02T10:49:05Z. Categories Dog, Animal, Meme." }
  - { id: R-9, publisher: DogBull, title: "dogbull.xyz home", url: "https://dogbull.xyz/", published_at: null, accessed_at: 2026-09-03T04:32:23Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-7, CLM-8, CLM-21, CLM-22, CLM-23, EVT-5], excerpt: "title $DOGO — 101 Dalmatians & The Bull King | Robinhood Chain Meme Coin. twitter:site @dogo. Copy CA 0x77b0AA38451ccDC1b42587E2f80B9879A7f82356. Links x.com/dogbullxyz t.me/dogbullonhood and Uniswap token 0x77b0…2356. Meta: LP locked, contract renounced, zero tax. FAQ: Zero tax. No mint, no blacklist, no team sniping." }
  - { id: R-10, publisher: Telegram, title: "t.me/dogbullonhood", url: "https://t.me/dogbullonhood", published_at: null, accessed_at: 2026-09-03T04:32:24Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "HTTP 200. og:title DogBull On Hood. tgme_page_title DogBull On Hood. tgme_page_extra 167 members, 15 online. No contract address in the preview HTML this pass." }
  - { id: R-11, publisher: X, title: "x.com/dogbullxyz Account suspended", url: "https://x.com/dogbullxyz", published_at: null, accessed_at: 2026-09-03T04:33:20Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-24, EVT-5], excerpt: "HTTP 200. Page title Profile / X. Heading Account suspended. Body: X suspends accounts which violate the X Rules. No bio or CA on the public page this pass." }
  - { id: R-12, publisher: "@cmclistings", title: "New CoinMarketCap Listing $DOGO", url: "https://x.com/cmclistings/status/2092378996012929361", published_at: 2026-08-25T22:30:01Z, accessed_at: 2026-09-03T04:33:20Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "New CoinMarketCap Listing: $DOGO. Blockchain: Robinhood Chain. CA: 0x77b0aa38451ccdc1b42587e2f80b9879a7f82356. X: @dogbullxyz." }
  - { id: R-13, publisher: "@zazXBT", title: "robinhood chain memes by cap", url: "https://x.com/zazXBT/status/2094872540682604917", published_at: 2026-09-01T19:38:29Z, accessed_at: 2026-09-03T04:32:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "robinhood chain memes by cap: 1. cashcat, $227m … 9. spacehood, $15m 10. dogbull, $10m." }
  - { id: R-14, publisher: GitHub, title: "Search dogbull.xyz OR dogbullxyz", url: "https://api.github.com/search/repositories?q=dogbull.xyz+OR+dogbullxyz", published_at: null, accessed_at: 2026-09-03T04:33:21Z, kind: repository, authority: unknown, authenticity: unconfirmed, supports: [CLM-21], excerpt: "total_count 0. dogbull.xyz HTML has x.com/dogbullxyz, t.me/dogbullonhood, Gecko pool and CoinGecko coin links and no github.com URL." }
  - { id: R-15, publisher: Blockscout, title: "DOGO holders page 1", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x77b0AA38451ccDC1b42587E2f80B9879A7f82356/holders", published_at: null, accessed_at: 2026-09-03T04:32:21Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-12, CLM-23], excerpt: "Top holder 0x8366a39CC670B4001A1121B8F6A443A643e40951 is_contract true name PoolManager value 100047708011195820649900771. Rank 2 0x986260fd57204B0732b4e9ee678fb21fA5F76EEb is_contract false value 53797678120404506629244426." }
  - { id: R-16, publisher: Blockscout, title: "DogBull verified source", url: "https://robinhoodchain.blockscout.com/address/0x77b0AA38451ccDC1b42587E2f80B9879A7f82356?tab=contract", published_at: null, accessed_at: 2026-09-03T04:31:51Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-7, CLM-12, CLM-23], excerpt: "ContractName DogBull file_path project/contracts/DogBull.sol compiler v0.8.26 is_verified true is_partially_verified false. Comment: Website https://dogbull.xyz/ Twitter https://x.com/dogbullxyz Telegram https://t.me/dogbullonhood. constructor mints 1_010_000_000e18 to _msgSender and sets _dogoWallet. No owner, no tax, no public mint after deploy." }

gaps:
  - { priority: P0, question: "Does a replacement official X handle bidirectionally link to token 0x77b0…2356 after @dogbullxyz was suspended?", checked: "GET x.com/dogbullxyz Account suspended; DexScreener info null; site twitter:site @dogo is unrelated D.O.G.O.; X user search dogbullxyz returned unrelated handles, 2026-09-03", next: "re-read dogbull.xyz and DexScreener token profile after a Claim Profile; search new posts that embed the CA and a live handle" }
  - { priority: P1, question: "Is Uniswap v4 DOGO/ETH liquidity locked, and if so to which locker or 0xdead?", checked: "Gecko locked_liquidity_percentage null; ~100.05M DOGO sits in PoolManager 0x8366…0951; site meta says LP locked, 2026-09-03", next: "read PoolManager position NFT owner for pool 0xbe05…b6b1 and any locker contract" }
  - { priority: P1, question: "Does t.me/dogbullonhood pin CA 0x77b0…2356 or a live handle?", checked: "public preview og:title DogBull On Hood, 167 members, no CA in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
  - { priority: P2, question: "Is there an audit of DogBull.sol as deployed on 4663?", checked: "dogbull.xyz, Blockscout contract tab, DexScreener, Gecko, Telegram preview, X search, 2026-09-03", next: "record any report URL if the site or a new handle publishes one" }
---

# DOGO — research packet

## What it is

A 1.01-billion-supply ERC-20 named DogBull (ticker DOGO) on Robinhood Chain. An EOA deployed verified DogBull.sol and seeded a Uniswap v4 DOGO/ETH book. Holders trade DOGO against ETH. dogbull.xyz publishes contract 0x77b0AA38451ccDC1b42587E2f80B9879A7f82356. No live official handle was located this pass.

Themes: memecoin, eth-paired, native

## Why it matters

Blockscout reports 20555 holders. The Uniswap v4 DOGO/ETH book printed about $385k of 24h volume and about $989k reserve on Gecko at collection, with FDV about $10.0M. @zazXBT ranked dogbull tenth among Robinhood Chain memes by cap at $10m on 1 Sep 2026. This is not packed doggie, doge-1, or dogecoin-tsla.

## What could go wrong

The listed X handle @dogbullxyz is suspended, so comms surfaces stay unconfirmed-official. Site copy says LP locked and contract renounced; Gecko locked_liquidity_percentage is null and the deployer still holds about 53.8M DOGO. The site how-to-buy path tells users to send 0.05–10 Robinhood Chain tokens, which is not the Uniswap v4 book. USD reserve on the flagship pair is DOGO plus ETH, not a stock token.

## Product and mechanics

EOA 0x986260fd57204B0732b4e9ee678fb21fA5F76EEb deployed DogBull at 2026-08-08T17:49:30Z (tx 0xf1db…da35, block 31265843). Constructor minted 1_010_000_000 * 10^18 to the deployer and set dogoWallet. factory() reverts. RPC eth_getCode is 3649 bytes, not an EIP-1167 clone. [verified R-3 R-4 R-16]

Uniswap v4 pool 0xbe05…b6b1 (DOGO/ETH) was created 2026-08-10T11:40:15Z. PoolManager 0x8366…0951 is the top holder at about 100.05M DOGO. A second Uniswap v4 DOGO/USDG pair exists with liquidity.usd 0.09. [verified R-5 R-7 R-15]

## Control and security

owner() reverts. Verified source has no Ownable, no tax, and no public mint after the constructor. dogoWallet() returns the deployer with no setter. The deployer is an EOA (eth_getCode 0x) and still holds about 53.8M DOGO (~5.33%). [verified R-4 R-15 R-16]

DogBull.sol is fully verified on Blockscout (project/contracts/DogBull.sol, compiler v0.8.26, is_partially_verified false). No audit report URL was located this pass. [verified R-16] [unknown]

## Team and provenance

dogbull.xyz publishes the CA and links x.com/dogbullxyz and t.me/dogbullonhood. Verified source comments the same three URLs. GET x.com/dogbullxyz returned Account suspended. Site twitter:site is @dogo, which is D.O.G.O., not this token. t.me/dogbullonhood titles DogBull On Hood with 167 members and no contract in the public preview. Flag unconfirmed-official and third-party-link. No GitHub repository was located. [verified R-9 R-16] [claim R-10 R-11 R-14]

## Economics and activity

Gecko DOGO/WETH Uniswap v4 24h volume is 385442.45 USD and reserve_in_usd is 988735.55 at 2026-09-03T04:32:48Z. fdv_usd / market_cap_usd is 10021808.32. Gecko token volume_usd.h24 is 385444.93; Gecko token total_reserve_in_usd is 0.0 this pass and is not the book. [claim R-6 R-7]

DexScreener same pair: liquidity.usd 995249.75, volume.h24 385129.98, fdv/marketCap 10035790. Blockscout holders_count 20555. Pair created 2026-08-10T11:40:15Z. [claim R-1 R-5]

## Material risks

- Listed handle @dogbullxyz is suspended; no bidirectional live handle this pass. [verified R-11]
- Site claims LP locked / contract renounced; Gecko locked_liquidity_percentage is null and the deployer still holds ~53.8M DOGO. [claim R-7 R-9 R-15]
- Site how-to-buy is send-native-tokens, not the Uniswap v4 book. [claim R-9]
- No audit report URL this pass. [unknown]
- Distinct from packed doggie / doge-1 / dogecoin-tsla; ticker-family collision only. [verified R-1 R-5]

## Verification passes

- Receipts: Blockscout token/address/create tx/holders/source, RPC name/symbol/dogoWallet/eth_getCode, DexScreener, Gecko token/pool/info, dogbull.xyz, t.me/dogbullonhood, x.com/dogbullxyz, GitHub search, @cmclistings, and @zazXBT were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-5 R-7 R-9]
- Numbers: 385442.45 is the Gecko DOGO/WETH pool 24h volume, not the 0.0 token total_reserve. Reserve 988735.55 is that pool. DexScreener 385129.98 / 995249.75 is the same pair, different aggregator. Holders 20555 is Blockscout holders_count (Gecko info 20546). [claim R-1 R-5 R-6 R-7]
- Adversarial: the strongest contrary reading is that this is packed doggie/doge-1/dogecoin-tsla, or that @dogo / @dogbullxyz is a live official handle. Different CAs, quotes (ETH vs TSLA/SPCX), and sites; @dogbullxyz is suspended and @dogo is unrelated. [verified R-1 R-5 R-11]

## Operations log

- Base: assignment `base_sha` 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no dogo / DOGO / DogBull / 0x77b0…2356.
- Explorer: Blockscout api/v2 token, address, smart-contract, create tx 0xf1db…da35, holders. RPC eth_getCode/eth_call with Chrome UA at block 53137812.
- Aggregators: DexScreener latest/dex/tokens; Gecko token first GET was HTTP 200 so pool and token/info were used.
- Social: X Latest $DOGO / DogBull / dogbull.xyz; from:dogbullxyz (no posts); user search dogbullxyz; GET x.com/dogbullxyz; t.me/dogbullonhood preview.
- Site: https://dogbull.xyz/ and routes JS (CA, FAQ, socials).
- Failed: CoinGecko HTML /en/coins/dogbull returned Cloudflare challenge 403; DexScreener info null; Gecko token total_reserve_in_usd 0.0; X user search did not return @dogbullxyz (account suspended).
- Time: collection 2026-09-03T04:30Z–2026-09-03T04:36Z.
