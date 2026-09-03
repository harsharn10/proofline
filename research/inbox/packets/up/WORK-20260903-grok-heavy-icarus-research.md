---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: up
name: up
packet_tier: seed
as_of: 2026-09-03T00:50:00Z
prior_packet: null
supersedes: null
owned_slugs: [up]
allowed_paths:
  - research/inbox/packets/up/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: up
  aliases: ["up.", "up v3", "up v2"]
  symbols: [UP]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://up33.xyz
  official_handle: "@uponrh"
  repository: https://github.com/up-exchange
  possible_matches:
    - slug: fables
      signals: [other]
      contrary_signals:
        - "Census Fables is a Uniswap v4 hooked DEX at fables.fi / @fablesfi"
        - "up is a ve(3,3) v2+v3 AMM at up33.xyz / @uponrh with token 0x57C0E45cB534413D1C20A4240955d6bB250BB4F1"
        - "No shared domain, handle or reproduced address"
    - slug: swaphood
      signals: [other]
      contrary_signals:
        - "Census SwapHood is a native AMM at @SwapHoodFi with token HOOD"
        - "up's official surface is up33.xyz / @uponrh and CLFactory 0x1ac9dB4a2608ba45D6127B1737949b51Bb54B7F3"
        - "No shared domain, handle or reproduced address"
    - slug: stonkbroker
      signals: [other]
      contrary_signals:
        - "Census StonkBrokers is an ERC-6551 NFT overlay at stonkbrokers.cash / @ClutchMarkets"
        - "Stonk Exchange docs name up ve(3,3) contracts as the swap engine; up is the AMM, StonkBrokers is the overlay"
        - "Official surfaces differ: up33.xyz / @uponrh versus stonkbrokers.cash / @ClutchMarkets"

classification:
  primary_leaf: trading/amm-native
  secondary_leaves: []
  mechanism_tags: [amm, fee-routing, nft]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "UP 0x57C0…B4F1, CLFactory 0x1ac9…B7F3 and PoolFactory 0xFA54…bc28 have non-empty code and verified source on chain 4663; DefiLlama up-v3 currentChainTvls.Robinhood Chain is 10239463. GitHub snapshot is not claimed as bytecode-equivalent. [R-4] [R-9] [R-10] [R-11] [R-12] [R-18]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-14], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-18], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-11, CLM-12], note: "" }

links:
  - { kind: site, url: "https://up33.xyz", authenticity: confirmed }
  - { kind: app, url: "https://up33.xyz", authenticity: confirmed }
  - { kind: docs, url: "https://up33.xyz/docs/overview", authenticity: confirmed }
  - { kind: x, url: "https://x.com/uponrh", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/uponrh", authenticity: confirmed }
  - { kind: github, url: "https://github.com/up-exchange", authenticity: confirmed }

deployments:
  - label: UP token
    role: token
    address:
      value: "0x57C0E45cB534413D1C20A4240955d6bB250BB4F1"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-9, R-10]
  - label: veUP VotingEscrow
    role: other
    address:
      value: "0x5d321dE36F0bf98D92b291280514F3878582B7B6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10, R-13]
  - label: Voter
    role: other
    address:
      value: "0x7F749fDD351C1Ceed82d76d7699CB631Eb8332a7"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10, R-13]
  - label: Minter
    role: other
    address:
      value: "0x912EC7A90e8C9829eE0e0f6a4Db5270776Fc3Da5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10, R-13]
  - label: v2 PoolFactory
    role: factory
    address:
      value: "0xFA5429AEBa338BEa2BFcc1b9a889862Ee395bc28"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10, R-12]
  - label: v2 Router
    role: router
    address:
      value: "0xf5198743240fAC98db71868F34c70139b1eb0474"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10, R-13]
  - label: v3 CLFactory
    role: factory
    address:
      value: "0x1ac9dB4a2608ba45D6127B1737949b51Bb54B7F3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10, R-11]
  - label: v3 NonfungiblePositionManager
    role: other
    address:
      value: "0x07F44c47743A2f36414A82b9F558ECFCf0EEdCEf"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10, R-13]
  - label: v3 SwapRouter
    role: router
    address:
      value: "0xC062b870E813fcA720f1e002c234369Ab3aB9415"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-10, R-13]
  - label: Governance Safe
    role: multisig
    address:
      value: "0x0eEA30aBa3f07abFA20E4b544F55e0f917d9DFd8"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: null
    receipt_ids: [R-4, R-14, R-15]
  - label: UP/WETH v3 pool (official DexScreener pair)
    role: other
    address:
      value: "0x23D641FeCcD207E8794c593e8240444A0674C4Ba"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T00:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-17, R-23]

metrics:
  - { kind: tvl, value: 10239463.22323, currency: USD, as_of: 2026-09-03T00:32:23Z, window: point, method: "api.llama.fi/protocol/up-v3 currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-18] }
  - { kind: volume_24h, value: 68200261, currency: USD, as_of: 2026-09-03T00:40:00Z, window: 24h, method: "api.llama.fi/summary/dexs/up-v3?dataType=dailyVolume chainBreakdown['Robinhood Chain'].total24h", class: claim, receipt_ids: [R-19] }
  - { kind: fees_24h, value: 165725, currency: USD, as_of: 2026-09-03T00:40:00Z, window: 24h, method: "api.llama.fi/summary/fees/up-v3?dataType=dailyFees chainBreakdown['Robinhood Chain'].total24h", class: claim, receipt_ids: [R-20] }
  - { kind: revenue_24h, value: 111415, currency: USD, as_of: 2026-09-03T00:40:00Z, window: 24h, method: "api.llama.fi/summary/fees/up-v3?dataType=dailyRevenue chainBreakdown['Robinhood Chain'].total24h", class: claim, receipt_ids: [R-20] }
  - { kind: tvl, value: 727470.02966, currency: USD, as_of: 2026-09-02T23:48:59Z, window: point, method: "api.llama.fi/protocol/up-v2 currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-21] }
  - { kind: volume_24h, value: 773250, currency: USD, as_of: 2026-09-03T00:40:00Z, window: 24h, method: "api.llama.fi/summary/dexs/up-v2?dataType=dailyVolume chainBreakdown['Robinhood Chain'].total24h", class: claim, receipt_ids: [R-21] }
  - { kind: holders, value: 8831, currency: null, as_of: 2026-09-03T00:35:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/addresses/0x57C0…B4F1 token.holders_count", class: claim, receipt_ids: [R-9] }
  - { kind: tvl, value: 2079469.88, currency: USD, as_of: 2026-09-03T00:40:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x57C0…B4F1 pair 0x23D641…4Ba liquidity.usd", class: claim, receipt_ids: [R-17] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:35:00Z, receipt_ids: [R-10], result: "rpc.mainnet.chain.robinhood.com at block 0x328c59c (52997532): eth_getCode UP 5153 bytes; veUP 24460; Voter 24489; Minter 7807; PoolFactory 3506; Router 23726; CLFactory 4917; PositionManager 24501; SwapRouter 9867; quoter 6893; rewardsDistributor 5872; governance 171; compounderVault 16899. name() 0x7570 'up'; symbol() 0x5550 'UP'; decimals 18. CLFactory owner() 0x0eEA30aBa3f07abFA20E4b544F55e0f917d9DFd8" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T00:35:00Z, receipt_ids: [R-9, R-11, R-13], result: "Blockscout api/v2: UP is_contract true is_verified true name Up token name up symbol UP decimals 18 holders_count 8831 total_supply 505071425537629984641375094 creator 0x85Fb9f9BC8a44663A234AdB4CfE4E1459C096651. CLFactory name CLFactory verified. VotingEscrow, Voter, Minter, Router, NonfungiblePositionManager, SwapRouter verified; same creator" }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-12], result: "PoolFactory 0xFA5429AE…bc28 is_contract true is_verified true name PoolFactory proxy_type basic_implementation creator 0x85Fb…651; creation tx 0x4f463dc7…184e7 timestamp 2026-07-10T15:17:15Z status ok from that EOA" }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-3, R-4, R-7], result: "up33.xyz twitter:site @uponrh and schema.org sameAs https://x.com/uponrh. @uponrh bio The native (3,3) exchange and liquidity layer of Robinhood Chain. website up33.xyz. GitHub org up-exchange blog up33.xyz twitter_username uponrh. JS bundle links.x / links.telegram / links.github match those URLs" }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-15], result: "governance 0x0eEA…DFd8 at block 0x328eed5 (53014229): getThreshold() 2; VERSION 1.4.1; getOwners() 4 addresses 0xF0300684494aF67085E16286CeaF58D593Bc184D, 0x85Fb9f9BC8a44663A234AdB4CfE4E1459C096651, 0xBc6dF4758eC6A09cF168eE3Bf5e444d4aBC47238, 0xd7d59A462d39Da514796AA2e05CE81A67cDc62eB" }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-18, R-19, R-20], result: "api.llama.fi/protocol/up-v3 chains [Robinhood Chain] currentChainTvls['Robinhood Chain'] 10239463.22323 as_of 2026-09-03T00:32:23Z. summary/dexs/up-v3 chainBreakdown Robinhood Chain total24h 68200261. summary/fees/up-v3 dailyFees 165725 dailyRevenue 111415. Only chain is Robinhood Chain" }
  - { id: REP-7, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T00:40:00Z, receipt_ids: [R-16], result: "UP/WETH pool 0x23D641…4Ba eth_getCode 45 bytes (EIP-1167). token0 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 WETH; token1 0x57C0E45cB534413D1C20A4240955d6bB250BB4F1 UP; fee 10000. Blockscout creator CLFactory 0x1ac9…B7F3 implementation CLPool 0x11725976BF1F38c4aB78d1F480bc5883d70D9dc3" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "ve(3,3) DEX: v2 full-curve and v3 concentrated pools; staked-pool fees to veUP lockers; lockers vote each epoch on UP emissions to gauges", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://up33.xyz", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-3, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@uponrh", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x57C0E45cB534413D1C20A4240955d6bB250BB4F1", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-4, R-9, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x1ac9dB4a2608ba45D6127B1737949b51Bb54B7F3", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-4, R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-9, R-10, R-12, R-18], reproduction_ids: [REP-1, REP-2, REP-3, REP-6], supersedes: null }
  - { id: CLM-7, field: identity.name, value: "up", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: trading/amm-native, class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-2, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: economics.metric, value: "DefiLlama up-v3 currentChainTvls Robinhood Chain 10239463.22323", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DefiLlama up-v3 Robinhood Chain 24h DEX volume 68200261", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-19], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-11, field: control.owner, value: "CLFactory owner() is Safe 0x0eEA30aBa3f07abFA20E4b544F55e0f917d9DFd8 (SafeL2 proxy, VERSION 1.4.1)", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-10, R-14, R-15], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-12, field: security.audit, value: "No audit report URL was opened this pass; GitHub README states compilation is not evidence of an audit", class: unknown, observed_at: 2026-09-03T00:45:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: identity.repository, value: "https://github.com/up-exchange", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: deployment.address, value: "0xFA5429AEBa338BEa2BFcc1b9a889862Ee395bc28", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-4, R-10, R-12], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-15, field: deployment.address, value: "0x7F749fDD351C1Ceed82d76d7699CB631Eb8332a7", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-4, R-10, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-16, field: "account.@uponrh.role", value: project, class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@uponrh.slug", value: up, class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-1, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: relationship, value: "Distinct from Fables (fables.fi / @fablesfi) and SwapHood (@SwapHoodFi)", class: claim, observed_at: 2026-09-03T00:45:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Blockscout UP holders_count 8831", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-9], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-21, field: product.mechanism, value: "v2 PoolFactory deploys stable/volatile full-curve pools; v3 CLFactory deploys concentrated-liquidity CLPool clones", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-2, R-11, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x5d321dE36F0bf98D92b291280514F3878582B7B6", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-4, R-10, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: control.threshold, value: "Governance Safe getThreshold() 2 of 4 owners; VERSION 1.4.1", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-15], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-24, field: relationship, value: "@ArrowFinanceio posted aUSD/USDG gauge approved on @uponrh linking up v3 pool 0x29e3f3d9891cacf213361bcbcb7728970d53baa8", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: economics.metric, value: "DefiLlama up-v2 currentChainTvls Robinhood Chain 727470.02966", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "DefiLlama up-v3 Robinhood Chain 24h revenue 111415", class: verified, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-20], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-27, field: identity.symbol, value: "UP", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-28, field: deployment.address, value: "0x912EC7A90e8C9829eE0e0f6a4Db5270776Fc3Da5", class: verified, observed_at: 2026-09-03T00:35:00Z, receipt_ids: [R-4, R-10, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-29, field: economics.metric, value: "DexScreener UP/WETH pair 0x23D641…4Ba dexId up liquidity.usd 2079469.88 volume.h24 2679894.75", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: identity.handle, value: "Telegram https://t.me/uponrh display name up.", class: claim, observed_at: 2026-09-03T00:40:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Official account posted a second Late Night Onchain video"
    summary: "Official account: We are appearing on Late Night Onchain for our second live video to discuss everything up."
    occurred_at: 2026-09-02T16:24:59Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-26]
  - id: EVT-2
    type: ct
    title: "Arrow posted aUSD/USDG gauge approved on up"
    summary: "@ArrowFinanceio posted Arrow has officially been whitelisted on @uponrh with the aUSD/USDG gauge now approved."
    occurred_at: 2026-09-01T23:17:00Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [relationship, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-27]
  - id: EVT-3
    type: company
    title: "Official account posted dynamic fees live on up"
    summary: "Official account: Dynamic fees are now live on up, with a link to up33.xyz/docs/dynamic-fees."
    occurred_at: 2026-08-30T13:31:45Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-24]
  - id: EVT-4
    type: company
    title: "Official account posted Epoch 6 summary"
    summary: "Official account posted an Epoch 6 summary for the weekly ve(3,3) epoch."
    occurred_at: 2026-08-27T17:32:15Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [activity.status, economics.metric]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-25]
  - id: EVT-5
    type: onchain
    title: "v2 PoolFactory created on chain 4663"
    summary: "Tx 0x4f463dc7 created PoolFactory 0xFA5429AE…bc28; Blockscout name PoolFactory, source verified."
    occurred_at: 2026-07-10T15:17:15Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-6
    type: company
    title: "Official account posted live CA and DexScreener pair"
    summary: "Official account: up. is live now on Robinhood. CA 0x57C0…B4F1 and DexScreener pair 0x23D641…4Ba."
    occurred_at: 2026-07-11T08:12:13Z
    observed_at: 2026-09-03T00:40:00Z
    affected_fields: [lifecycle, deployment.address, identity.handle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-22, R-23]

receipts:
  - { id: R-1, publisher: up, title: "up33.xyz", url: "https://up33.xyz", published_at: null, accessed_at: 2026-09-03T00:30:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-7, CLM-18, CLM-19], excerpt: "Title up. og:title The native liquidity marketplace of Robinhood Chain. twitter:site @uponrh twitter:creator @uponrh. schema.org Organization name up. url https://up33.xyz/ sameAs https://x.com/uponrh. WebApplication description: Swap tokens, provide liquidity, lock UP for veUP, and vote to direct emissions on the ve(3,3) DEX for Robinhood Chain." }
  - { id: R-2, publisher: up, title: "What is up.", url: "https://up33.xyz/docs/overview", published_at: null, accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-21], excerpt: "up. is a ve(3,3) decentralized exchange on Robinhood Chain. Fees from staked liquidity go to the people who lock UP, emissions go to the people who stake liquidity, and the lockers vote on how those emissions are split. v2 pools spread liquidity across the whole price curve; v3 pools concentrate liquidity into price ranges." }
  - { id: R-3, publisher: "@uponrh", title: "up. profile", url: "https://x.com/uponrh", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-16, CLM-17, CLM-19], excerpt: "Display name up. Handle @uponrh. Bio: The native (3,3) exchange and liquidity layer of Robinhood Chain. Website http://up33.xyz." }
  - { id: R-4, publisher: up, title: "up33.xyz app bundle contracts map", url: "https://up33.xyz/assets/index-BZtZL5hY.js", published_at: null, accessed_at: 2026-09-03T00:32:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-13, CLM-14, CLM-15, CLM-22, CLM-28], excerpt: "links x https://x.com/uponrh telegram https://t.me/uponrh github https://github.com/up-exchange. poolFactory 0xFA5429AEBa338BEa2BFcc1b9a889862Ee395bc28 clFactory 0x1ac9dB4a2608ba45D6127B1737949b51Bb54B7F3 token 0x57C0E45cB534413D1C20A4240955d6bB250BB4F1 votingEscrow 0x5d321dE36F0bf98D92b291280514F3878582B7B6 voter 0x7F749fDD351C1Ceed82d76d7699CB631Eb8332a7 minter 0x912EC7A90e8C9829eE0e0f6a4Db5270776Fc3Da5 governance 0x0eEA30aBa3f07abFA20E4b544F55e0f917d9DFd8." }
  - { id: R-5, publisher: up, title: "Security and contracts", url: "https://up33.xyz/docs/security", published_at: null, accessed_at: 2026-09-03T00:30:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "up. is a set of contracts on Robinhood Chain. The ve(3,3) core, meaning the escrow, voter, minter, and gauges, descends from the Velodrome line, and the v3 liquidity engine follows the Uniswap v3 design through the Slipstream architecture. Contract addresses table is generated from this app's deployment configuration." }
  - { id: R-6, publisher: Telegram, title: "t.me/uponrh", url: "https://t.me/uponrh", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-30], excerpt: "og:title up. og:description The native (3,3) exchange and liquidity marketplace of Robinhood Chain." }
  - { id: R-7, publisher: GitHub, title: "up-exchange organization", url: "https://github.com/up-exchange", published_at: 2026-08-11T10:07:55Z, accessed_at: 2026-09-03T00:40:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-13], excerpt: "api.github.com/orgs/up-exchange: login up-exchange; name up.; description The native (3,3) exchange and liquidity marketplace of Robinhood Chain.; blog up33.xyz; twitter_username uponrh; public_repos 2 (up-contracts, up-slipstream)." }
  - { id: R-8, publisher: GitHub, title: "up-exchange/up-contracts README", url: "https://github.com/up-exchange/up-contracts", published_at: 2026-08-11T18:10:20Z, accessed_at: 2026-09-03T00:40:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-13], excerpt: "This repository contains a sanitized, source-only public snapshot of the UP Protocol core contracts. This repository is not represented as the exact or complete source for any particular on-chain deployment. This README does not publish or certify canonical deployment addresses. Successful compilation is not evidence of deployment equivalence or a security audit." }
  - { id: R-9, publisher: Blockscout, title: "UP token 0x57C0E45c…B4F1", url: "https://robinhoodchain.blockscout.com/address/0x57C0E45cB534413D1C20A4240955d6bB250BB4F1", published_at: null, accessed_at: 2026-09-03T00:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-7, CLM-20, CLM-27], excerpt: "api/v2: hash 0x57C0E45cB534413D1C20A4240955d6bB250BB4F1; is_contract true; is_verified true; name Up; creator_address_hash 0x85Fb9f9BC8a44663A234AdB4CfE4E1459C096651. token name up symbol UP decimals 18 holders_count 8831 total_supply 505071425537629984641375094 icon_url https://up33.xyz/up-mark-tile.svg." }
  - { id: R-10, publisher: Robinhood Chain RPC, title: "eth_getCode / name / symbol / CLFactory owner", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T00:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-11, CLM-14, CLM-15, CLM-22, CLM-27, CLM-28], excerpt: "eth_blockNumber 0x328c59c (52997532). eth_getCode non-empty on UP, veUP, Voter, Minter, PoolFactory, Router, CLFactory, PositionManager, SwapRouter, quoter, governance. UP name() 'up' symbol() 'UP' decimals 18. CLFactory owner() 0x0eEA30aBa3f07abFA20E4b544F55e0f917d9DFd8." }
  - { id: R-11, publisher: Blockscout, title: "CLFactory 0x1ac9dB4a…B7F3", url: "https://robinhoodchain.blockscout.com/address/0x1ac9dB4a2608ba45D6127B1737949b51Bb54B7F3", published_at: null, accessed_at: 2026-09-03T00:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-21], excerpt: "api/v2: hash 0x1ac9dB4a2608ba45D6127B1737949b51Bb54B7F3; is_contract true; is_verified true; name CLFactory; proxy_type null; creator_address_hash 0x85Fb9f9BC8a44663A234AdB4CfE4E1459C096651." }
  - { id: R-12, publisher: Blockscout, title: "PoolFactory creation tx 0x4f463dc7…", url: "https://robinhoodchain.blockscout.com/tx/0x4f463dc72e553dff79db1d6d9fb5ebbc6b78133dd2dd88502eb3805dce2184e7", published_at: 2026-07-10T15:17:15Z, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-14, EVT-5], excerpt: "timestamp 2026-07-10T15:17:15.000000Z; status ok; from 0x85Fb9f9BC8a44663A234AdB4CfE4E1459C096651 EOA; created_contract 0xFA5429AEBa338BEa2BFcc1b9a889862Ee395bc28 name PoolFactory is_verified true proxy_type basic_implementation." }
  - { id: R-13, publisher: Blockscout, title: "veUP Voter Minter Router PositionManager SwapRouter", url: "https://robinhoodchain.blockscout.com/address/0x5d321dE36F0bf98D92b291280514F3878582B7B6", published_at: null, accessed_at: 2026-09-03T00:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-22, CLM-28], excerpt: "VotingEscrow 0x5d321dE3…B7B6 verified name VotingEscrow token veNFT holders 675. Voter 0x7F749fDD…32a7 verified. Minter 0x912EC7A9…3Da5 verified. Router 0xf5198743…0474 verified. PositionManager 0x07F44c47…dCEf verified name NonfungiblePositionManager token up Position NFT holders 2022. SwapRouter 0xC062b870…9415 verified. Creator on each: 0x85Fb9f9B…651." }
  - { id: R-14, publisher: Blockscout, title: "Governance Safe 0x0eEA30aB…DFd8", url: "https://robinhoodchain.blockscout.com/address/0x0eEA30aBa3f07abFA20E4b544F55e0f917d9DFd8", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "api/v2: is_contract true is_verified true name SafeProxy proxy_type master_copy creator 0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67 implementation 0x29fcB43b46531BcA003ddC8FCB67FFE91900C762 name SafeL2." }
  - { id: R-15, publisher: Robinhood Chain RPC, title: "Safe getOwners / getThreshold / VERSION", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, CLM-23], excerpt: "eth_blockNumber 0x328eed5 (53014229). 0x0eEA30aB…DFd8 getThreshold() 2; VERSION 1.4.1; getOwners() 0xF0300684494aF67085E16286CeaF58D593Bc184D, 0x85Fb9f9BC8a44663A234AdB4CfE4E1459C096651, 0xBc6dF4758eC6A09cF168eE3Bf5e444d4aBC47238, 0xd7d59A462d39Da514796AA2e05CE81A67cDc62eB." }
  - { id: R-16, publisher: Blockscout, title: "UP/WETH CL pool 0x23D641Fe…4Ba", url: "https://robinhoodchain.blockscout.com/address/0x23D641FeCcD207E8794c593e8240444A0674C4Ba", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4], excerpt: "is_contract true is_verified true proxy_type eip1167 creator_address_hash 0x1ac9dB4a2608ba45D6127B1737949b51Bb54B7F3 implementation 0x11725976BF1F38c4aB78d1F480bc5883d70D9dc3 name CLPool. RPC token0 WETH 0x0Bd7D308…AD73 token1 UP 0x57C0E45c…B4F1 fee 10000. eth_getCode 45 bytes." }
  - { id: R-17, publisher: DexScreener, title: "UP token pairs API", url: "https://api.dexscreener.com/latest/dex/tokens/0x57C0E45cB534413D1C20A4240955d6bB250BB4F1", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-29], excerpt: "pair 0x23D641FeCcD207E8794c593e8240444A0674C4Ba chainId robinhood dexId up base UP quote WETH liquidity.usd 2079469.88 volume.h24 2679894.75 priceUsd 0.7243 url https://dexscreener.com/robinhood/0x23d641feccd207e8794c593e8240444a0674c4ba." }
  - { id: R-18, publisher: DefiLlama, title: "up v3 protocol chain slice", url: "https://api.llama.fi/protocol/up-v3", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-18], excerpt: "name up v3; chains [Robinhood Chain]; url https://up33.xyz/; twitter uponrh; category Dexs; parentProtocol parent#up; currentChainTvls.Robinhood Chain 10239463.22323; chainTvls last point date 1788395543 totalLiquidityUSD 10239463. methodology: Value of the tokens locked in the liquidity pools." }
  - { id: R-19, publisher: DefiLlama, title: "up v3 DEX volume chain slice", url: "https://api.llama.fi/summary/dexs/up-v3?dataType=dailyVolume", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-10], excerpt: "chainBreakdown['Robinhood Chain'].total24h 68200261. chains [Robinhood Chain]. Volume: Swap volume from UP concentrated liquidity pools on Robinhood Chain." }
  - { id: R-20, publisher: DefiLlama, title: "up v3 fees and revenue chain slice", url: "https://api.llama.fi/summary/fees/up-v3?dataType=dailyFees", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-26], excerpt: "dailyFees chainBreakdown Robinhood Chain total24h 165725. dailyRevenue https://api.llama.fi/summary/fees/up-v3?dataType=dailyRevenue chainBreakdown Robinhood Chain total24h 111415. Revenue: Concentrated liquidity fees routed to veUP voters through gauges." }
  - { id: R-21, publisher: DefiLlama, title: "up v2 protocol chain slice", url: "https://api.llama.fi/protocol/up-v2", published_at: null, accessed_at: 2026-09-03T00:40:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-25], excerpt: "name up v2; chains [Robinhood Chain]; currentChainTvls.Robinhood Chain 727470.02966; last tvl date 1788392939. summary/dexs/up-v2 chainBreakdown Robinhood Chain total24h 773250. summary/fees/up-v2 dailyFees 2368 dailyRevenue 1974." }
  - { id: R-22, publisher: "@uponrh", title: "up. is live now on Robinhood", url: "https://x.com/uponrh/status/2075855669161308443", published_at: 2026-07-11T08:12:13Z, accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "up. is live now on Robinhood. An evolved native ve(3,3) DEX. https://up33.xyz/ Official CA and Dexscreener link below." }
  - { id: R-23, publisher: "@uponrh", title: "Official CA and DexScreener pair", url: "https://x.com/uponrh/status/2075855905506156668", published_at: 2026-07-11T08:13:10Z, accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "CA: 0x57C0E45cB534413D1C20A4240955d6bB250BB4F1 Dexscreener: https://dexscreener.com/robinhood/0x23D641FeCcD207E8794c593e8240444A0674C4Ba" }
  - { id: R-24, publisher: "@uponrh", title: "Dynamic fees are now live on up", url: "https://x.com/uponrh/status/2094055476765847947", published_at: 2026-08-30T13:31:45Z, accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Fees should move when it matters. When volatility demands it. Dynamic fees are now live on up. https://up33.xyz/docs/dynamic-fees" }
  - { id: R-25, publisher: "@uponrh", title: "Epoch 6 summary", url: "https://x.com/uponrh/status/2093028836187259182", published_at: 2026-08-27T17:32:15Z, accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-4], excerpt: "Epoch 6 summary" }
  - { id: R-26, publisher: "@uponrh", title: "Late Night Onchain second live video", url: "https://x.com/uponrh/status/2095186233898987541", published_at: 2026-09-02T16:24:59Z, accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "We are appearing on Late Night Onchain for our second live video to discuss everything up" }
  - { id: R-27, publisher: "@ArrowFinanceio", title: "aUSD/USDG gauge approved on up", url: "https://x.com/ArrowFinanceio/status/2094927670190506422", published_at: 2026-09-01T23:17:00Z, accessed_at: 2026-09-03T00:40:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24, EVT-2], excerpt: "Arrow has officially been whitelisted on @uponrh with the aUSD/USDG gauge now approved. Starting next epoch, incentives will begin flowing to aUSD/USDG liquidity providers. Link up33.xyz/liquidity/pool/v3/0x29e3f3d9891cacf213361bcbcb7728970d53baa8." }

gaps:
  - { priority: P0, question: "Do Voter, Minter and VotingEscrow also return the 2-of-4 Safe as owner, and is there a timelock on emissions or gauge changes?", checked: "CLFactory owner() is the Safe; Voter/Minter/veUP owner() calls this pass returned empty; no timelock address in the JS contracts map, 2026-09-03", next: "eth_call owner() with the correct selector on Voter/Minter/VotingEscrow verified source and read onlyOwner setters" }
  - { priority: P1, question: "Is there an audit report whose scope matches the chain-4663 bytecode?", checked: "docs/security HTML is a SPA shell; GitHub README says compilation is not an audit; no audit_links on Llama up-v3, 2026-09-03", next: "open the rendered security table and any auditor URLs, then match commit/bytecode" }
  - { priority: P1, question: "What are the gauge factory and current epoch emission amounts on chain?", checked: "JS bundle names voter/minter; Epoch 6 summary is an image post; no gauge factory eth_getCode this pass", next: "read Voter gauges() / Minter weekly emissions from verified source" }
  - { priority: P2, question: "Does the GitHub snapshot match deployed bytecode?", checked: "up-contracts README states it is not byte-for-byte for any deployment, 2026-09-03", next: "compare verified Blockscout source to up-contracts and up-slipstream trees" }
---

# up — research packet

## What it is

The chain's native ve(3,3) AMM. A user swaps or supplies liquidity in v2 full-curve or v3 concentrated pools, then stakes LP in gauges. Lockers of UP into veUP vote each epoch on which pools receive emissions and collect the staked-pool fees. @uponrh runs it at up33.xyz.

Themes: rwa, nft, memecoin

## Why it matters

up is the native ve(3,3) venue on chain 4663: DefiLlama's up-v3 Robinhood Chain slice is about $10.2M TVL and $68.2M 24h volume, separate from the up-v2 slice. Other products route liquidity through it, including Arrow's aUSD/USDG gauge.

## What could go wrong

CLFactory `owner()` is a 2-of-4 Safe with no timelock reproduced this pass. The public GitHub tree is a sanitized snapshot and is not claimed as the live bytecode. An audit URL was not opened this pass.

## Product and mechanics

Lockers of UP receive veUP NFTs and vote each weekly epoch on which gauges receive UP emissions. Fees from staked liquidity go to those lockers. [claim R-2]

v2 PoolFactory deploys full-curve stable and volatile pools. v3 CLFactory deploys concentrated-liquidity CLPool clones; the official UP/WETH pair 0x23D641…4Ba is one such clone (fee 10000) created by that factory. [claim R-2] [verified R-11 R-12 R-16]

## Control and security

CLFactory `owner()` returns Safe 0x0eEA…DFd8, a SafeProxy to SafeL2, VERSION 1.4.1, threshold 2 of 4 owners. One owner is the deployer EOA 0x85Fb…651 that created the core contracts. Voter, Minter and VotingEscrow `owner()` were not decoded this pass. [verified R-10 R-14 R-15]

No audit report URL was opened this pass. The up-contracts README states compilation is not evidence of an audit and that the tree is not a byte-for-byte deployment record. [unknown]

## Team and provenance

up33.xyz sets twitter:site to @uponrh and sameAs to https://x.com/uponrh. The @uponrh bio links up33.xyz. GitHub org up-exchange sets blog up33.xyz and twitter_username uponrh. The app bundle lists the same X, Telegram and GitHub URLs. [verified R-1 R-3 R-4 R-7]

## Economics and activity

DefiLlama up-v3 currentChainTvls Robinhood Chain 10239463.22323 as of 2026-09-03T00:32:23Z. That is the chain slice; Llama lists only Robinhood Chain on the row. 24h volume 68200261, fees 165725, revenue 111415 on the same chain slice. [verified R-18 R-19 R-20]

DefiLlama up-v2 currentChainTvls Robinhood Chain 727470.02966; 24h volume 773250. Do not add the two rows into one TVL card without labeling both modules. [claim R-21]

Blockscout UP holders_count 8831. DexScreener labels the official pair dexId up with liquidity.usd 2079469.88. [verified R-9] [claim R-17]

## Material risks

- CLFactory owner is a 2-of-4 Safe; no timelock was reproduced on that path. [verified R-15]
- GitHub snapshot is not claimed as live bytecode. [claim R-8]
- No audit report URL was opened this pass. [unknown]
- Combining Llama up-v2 and up-v3 TVL without labeling would mix two modules. [claim R-18 R-21]

## Verification passes

- Receipts: site HTML, docs overview/security, JS bundle, X profile and six posts, Telegram, GitHub org and README, Blockscout API v2, RPC, DexScreener and DefiLlama chain-slice endpoints were opened on 2026-09-03; excerpts are copied from those pages. [verified R-1 R-3 R-4 R-9 R-10 R-18]
- Numbers: TVL 10239463.22323 is api.llama.fi/protocol/up-v3 currentChainTvls Robinhood Chain, not an all-chains total; Llama lists only that chain. Bytecode lengths are eth_getCode at block 52997532. [verified R-18 R-10]
- Adversarial: the strongest contrary reading is that this slug is Fables or SwapHood, or that StonkBrokers is the AMM. Official surfaces and reproduced factories differ; Stonk Exchange docs name up as the swap engine, not the other way around. [claim R-1 R-3]

## Operations log

- Read content/census.yaml row up, content/projects/up.yaml, content/pulled/up.yaml, content/feed/up.yaml, content/sources/up.yaml.
- Opened up33.xyz, /docs/overview, /docs/security (SPA shells) and /assets/index-BZtZL5hY.js for the contracts map.
- Opened https://x.com/uponrh and statuses 2075855669161308443, 2075855905506156668, 2094055476765847947, 2093028836187259182, 2095186233898987541, 2094927670190506422.
- RPC eth_getCode / eth_call / eth_blockNumber on https://rpc.mainnet.chain.robinhood.com at blocks 52997532 and 53014229.
- Blockscout api/v2 address pages and PoolFactory creation tx 0x4f463dc7….
- DefiLlama api.llama.fi/protocol/up-v3 and up-v2 plus summary/dexs and summary/fees chainBreakdown Robinhood Chain. Page display on defillama.com/protocol/up-v3 was $10.84m TVL earlier in the pass; the metric used is the later API currentChainTvls 10239463.22323.
- DexScreener latest/dex/tokens/0x57C0…B4F1; GitHub org up-exchange and up-contracts README; t.me/uponrh.
- No content/ writes. No merge. No push.
