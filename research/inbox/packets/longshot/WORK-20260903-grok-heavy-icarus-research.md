---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: longshot
name: Longshot
packet_tier: seed
as_of: 2026-09-03T02:58:36Z
prior_packet: null
supersedes: null
owned_slugs: [longshot]
allowed_paths:
  - research/inbox/packets/longshot/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Longshot
  aliases: [LONGSHOT, uselongshot]
  symbols: [LONGSHOT]
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://www.uselongshot.xyz
  official_handle: "@uselongshot"
  repository: "NULL — uselongshot.xyz HTML names github.com/LongshotRH/Longshot; GET https://github.com/LongshotRH/Longshot returned 404 this pass"
  possible_matches:
    - slug: long
      signals: [ticker-only, other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED"
        - "Longshot is uselongshot.xyz / @uselongshot; official token 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745 trades versus WETH"
        - "LaunchFactoryV4 log on 2026-08-25 used ticker LONG for a different token 0x7af1c04f6d6fda4075ce47780aa7680ab19346a1"
        - "No shared domain, handle or reproduced factory address"
    - slug: longbow
      signals: [other]
      contrary_signals:
        - "Census Longbow is a Morpho Blue credit overlay at longbow.cash / @longbowlend"
        - "Longshot is a launchpad at uselongshot.xyz / @uselongshot whose fees fund Hyperliquid perps"
        - "No shared domain, handle or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface with a separate stock-paired factory"
        - "Longshot launches go through LaunchFactoryV4 0xE1E635c1d952C4136f1fBF816c072EBb5D3E3661, not Bankr"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: launch/bonding-curve
  secondary_leaves: []
  mechanism_tags: [launchpad, bonding-curve, fee-routing, derivatives]
  ecosystem_role: subject
  lifecycle: announced
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Official CA 0x8701…5745 is a verified FixedSupplyToken on 4663 with a Uniswap v3 WETH pool of $4,446. LaunchFactoryV4 0xE1E6…3661 has non-empty unverified code, owner() 0x1F68…59E5, and two Launched logs. DexScreener lists no 4663 pool ≥$25k, so lifecycle stays announced. Census leaf launch/stock-paired-factory is not used: the RH quote is WETH and the site says no stocks are enabled yet. [R-1] [R-4] [R-5] [R-7] [R-8]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-23], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-20], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-6, CLM-22], note: "" }

links:
  - { kind: site, url: "https://www.uselongshot.xyz", authenticity: confirmed }
  - { kind: app, url: "https://www.uselongshot.xyz", authenticity: confirmed }
  - { kind: docs, url: "https://www.uselongshot.xyz", authenticity: confirmed }
  - { kind: x, url: "https://x.com/uselongshot", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/uselongshot", authenticity: confirmed }
  - { kind: github, url: "https://github.com/LongshotRH/Longshot", authenticity: unconfirmed }

deployments:
  - label: LONGSHOT token (official CA)
    role: token
    address:
      value: "0x8701E2C87ade58325601f4F9bf37ADF46Cb75745"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-7]
  - label: LaunchFactoryV4 (Robinhood Chain)
    role: factory
    address:
      value: "0xE1E635c1d952C4136f1fBF816c072EBb5D3E3661"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T02:50:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-8, R-9]
  - label: LaunchLensV4 (Robinhood Chain)
    role: other
    address:
      value: "0xCFd8902c696fb74FA64ea6Fe339e149e5c50b00f"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T02:50:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-10]
  - label: BondingRouterV4 (Robinhood Chain)
    role: router
    address:
      value: "0x1BAfB314515Cedf96Ac8D569304934EefA051bcA"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T02:50:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-11]
  - label: LONGSHOT / WETH Uniswap v3 pool
    role: other
    address:
      value: "0xCA3C6DBF5F875156B146FCa72BCeed53A8414fC7"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-12]
  - label: Pre-V4 launch contract that created the official token
    role: factory
    address:
      value: "0xB2F8c34181878E410bbbcEb9A992Ea7c66dc877E"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:50:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-6, R-7]
  - label: PoolAccountRegistry (Robinhood Chain)
    role: other
    address:
      value: "0x7A367caCc51227B4bF315eabB6Ee501FD01a4fE9"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03T02:50:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-1, R-7]
  - label: LaunchFactoryV4 keeper
    role: other
    address:
      value: "0xd9C0B4110bc29391c953d986d3a91E6114D0Ad60"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:55:00Z
      exists_on_4663: null
      explorer_source_verified: null
    receipt_ids: [R-7]

metrics:
  - { kind: market_cap, value: 4439, currency: USD, as_of: 2026-09-03T02:45:00Z, window: point, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x8701E2C87ade58325601f4F9bf37ADF46Cb75745 marketCap", class: claim, receipt_ids: [R-12] }
  - { kind: volume_24h, value: 4.09, currency: USD, as_of: 2026-09-03T02:45:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0x8701E2C87ade58325601f4F9bf37ADF46Cb75745 volume.h24", class: claim, receipt_ids: [R-12] }
  - { kind: holders, value: 60, currency: null, as_of: 2026-09-03T02:50:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x8701E2C87ade58325601f4F9bf37ADF46Cb75745 holders_count", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-7], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 53083313. eth_getCode non-empty: LONGSHOT token 1763 bytes, LaunchFactoryV4 5691, LaunchLensV4 5553, BondingRouterV4 3265, PoolAccountRegistry 572, UniswapV3Pool 22142, pre-V4 launch 0xB2F8…877E 1236, mint recipient 0x5F68…8789 10172. Factory owner() 0x1F687Ba0ee85F5d08A1e6e988c09cBB6D29359E5 (no code). keeper() 0xd9C0B4110bc29391c953d986d3a91E6114D0Ad60. WETH immutable 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. PoolManager immutable 0x8366a39CC670B4001A1121B8F6A443A643e40951. Slot-10 length 2. Token name/symbol LONGSHOT totalSupply 1e27." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:50:00Z, receipt_ids: [R-4, R-5, R-6, R-8, R-9, R-10, R-11], result: "Blockscout api/v2: token is_contract true is_verified true name FixedSupplyToken token name LONGSHOT symbol LONGSHOT holders 60 creator 0x5F6828db3b38b1597cbB0F1a6a26b5406aB38789 creation tx 0x2daf0267… block 34903127 timestamp 2026-08-12T22:53:45Z. Factory 0xE1E6…3661 is_contract true is_verified false created 2026-08-18T17:56:19Z from EOA 0x1F68…59E5. Two factory logs 2026-08-18 and 2026-08-25. Pool 0xCA3C…4fC7 name UniswapV3Pool is_verified true, same creation tx as the token." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-2, R-3, R-13], result: "uselongshot.xyz FAQ: official LONGSHOT contract is 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745. HTML names x.com/uselongshot, t.me/uselongshot, github.com/LongshotRH/Longshot. @uselongshot bio website uselongshot.xyz. t.me/uselongshot title UseLongshot description www.uselongshot.xyz, 20 subscribers. GitHub org/repo 404." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T02:45:00Z, receipt_ids: [R-12], result: "DexScreener token-pairs robinhood/0x8701…5745: one Uniswap v3 pair 0xCA3C…4fC7 LONGSHOT/WETH liquidity.usd 4446.02 marketCap 4439 volume.h24 4.09 pairCreatedAt 2026-08-12T22:53:45Z websites https://www.uselongshot.xyz/ twitter https://x.com/uselongshot telegram https://t.me/uselongshot. token-pairs for factory-launched 0x7af1…46a1 and 0x60e9…3298 returned empty lists." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LONGSHOT launches tradeable tokens whose trading fees fund one fixed directional Hyperliquid position, holder rewards, and a 20% operations share. Robinhood Chain path: bonding curve then Uniswap v4. Official token is a FixedSupplyToken in a Uniswap v3 WETH pool.", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.uselongshot.xyz", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-2, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@uselongshot", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-2, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x8701E2C87ade58325601f4F9bf37ADF46Cb75745", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xE1E635c1d952C4136f1fBF816c072EBb5D3E3661", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-8, R-9, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: announced, class: inference, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-12, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/bonding-curve, class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.symbol, value: LONGSHOT, class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: economics.metric, value: "DexScreener LONGSHOT/WETH Uniswap v3 marketCap 4439 USD, liquidity.usd 4446.02 at 2026-09-03T02:45:00Z", class: verified, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Blockscout holders_count 60 for LONGSHOT 0x8701…5745", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener volume.h24 4.09 USD on the official 4663 pair", class: verified, observed_at: 2026-09-03T02:45:00Z, receipt_ids: [R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: control.owner, value: "LaunchFactoryV4 owner() 0x1F687Ba0ee85F5d08A1e6e988c09cBB6D29359E5, an address with no code; same EOA created the factory", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-7, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-13, field: control.privileged-role, value: "LaunchFactoryV4 keeper() 0xd9C0B4110bc29391c953d986d3a91E6114D0Ad60; site: rotatable role that funds positions and holder rewards and cannot change immutable launch parameters", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "Site FAQ: do not treat deployment, explorer source verification or smoke tests as an independent security audit. No named auditor report URL on the site this pass.", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: "account.@uselongshot.role", value: project, class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-2, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: "account.@uselongshot.slug", value: longshot, class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-2, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: relationship, value: "Distinct from census LONG (app.long.xyz / @longdotxyz / LongLauncher 0x22e9…eeED). Shared name stem only.", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from census Longbow (longbow.cash / @longbowlend). Shared name stem only.", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: other, value: "handle-collision: @uselongshotxyz uses the same bio text as @uselongshot and showed 0 followers this pass", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: identity.repository, value: "NULL — github.com/LongshotRH/Longshot 404", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: product.mechanism, value: "Launch UI: Underlying asset Crypto + stocks. Copy on the same page: No stocks are enabled by the factory owner yet.", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0xCA3C6DBF5F875156B146FCa72BCeed53A8414fC7", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-6, R-7, R-12], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-24, field: deployment.role, value: "0xCFd8902c696fb74FA64ea6Fe339e149e5c50b00f LaunchLensV4 on chain 4663", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-10, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: deployment.role, value: "0x1BAfB314515Cedf96Ac8D569304934EefA051bcA BondingRouterV4 on chain 4663", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-1, R-11, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: activity.status, value: "LaunchFactoryV4 slot-10 length 2; Blockscout logs show launches 2026-08-18 ticker LSV4SMOKE token 0x60e9…3298 and 2026-08-25 ticker LONG token 0x7af1…46a1. DexScreener returned no pairs for either token.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-8, R-7, R-12], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-27, field: "account.@uselongshot.note", value: "Bio: Launch the token. Pick the market. Choose long or short. Let every trade compound the bet. Website uselongshot.xyz. Joined 2026-08-11.", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: other, value: "Official harvest CA 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745 matches the site FAQ, Blockscout token, and DexScreener baseToken.", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-4, R-12], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-29, field: taxonomy.mechanism-tag, value: fee-routing, class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Official account posted major updates rolling out next week"
    summary: "Official account: We hope everyone had a good weekend! Some major updates and pushes rolling out next week."
    occurred_at: 2026-08-30T15:48:40Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-2
    type: company
    title: "Official account posted launch-competition prize still open"
    summary: "Official account: $5,000 is still up for grabs in the Longshot launch competition. Closes Sunday at 00:00."
    occurred_at: 2026-08-28T15:14:44Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-3
    type: company
    title: "Official account posted pump.fun, HyperEVM, BSC, Ember Cycle"
    summary: "Official account: shipped pump.fun launches, HyperEVM and BSC flows, Ember Cycle buyback-and-burn, and rewritten docs."
    occurred_at: 2026-08-26T19:14:51Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [product.mechanism, taxonomy.chain-scope]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-4
    type: onchain
    title: "LaunchFactoryV4 emitted a LONG ticker launch on 4663"
    summary: "Factory log 2026-08-25T16:12:16Z: token 0x7af1…46a1, pool 0x3c17…d50b, asset ETH, ticker LONG."
    occurred_at: 2026-08-25T16:12:16Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: verified
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-5
    type: company
    title: "Official account posted BNB Smart Chain and HyperEVM live"
    summary: "Official account: Longshot is expanding to BNB Smart Chain and HyperEVM. We are now supporting 5 major chains."
    occurred_at: 2026-08-24T20:35:21Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [taxonomy.chain-scope]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-6
    type: company
    title: "Official account posted LONGSHOT contract verified"
    summary: "Official account: Our CONTRACT is now VERIFIED! linking Blockscout 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745."
    occurred_at: 2026-08-13T16:47:03Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [deployment.address]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-7
    type: onchain
    title: "LONGSHOT token and Uniswap v3 WETH pool created on 4663"
    summary: "Tx 0x2daf…e5fc created token 0x8701…5745 and UniswapV3Pool 0xCA3C…4fC7 versus WETH at 2026-08-12T22:53:45Z."
    occurred_at: 2026-08-12T22:53:45Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-6]

receipts:
  - { id: R-1, publisher: Longshot, title: "uselongshot.xyz site, docs and FAQ", url: "https://www.uselongshot.xyz", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-7, CLM-13, CLM-14, CLM-17, CLM-18, CLM-20, CLM-22, CLM-24, CLM-25, CLM-28, CLM-29], excerpt: "LONGSHOT launches tradeable tokens whose trading fees fund one fixed directional Hyperliquid position, rewards for the token's holders, and protocol operations. Robinhood Chain panel: LaunchFactoryV4 0xE1E635c1d952C4136f1fBF816c072EBb5D3E3661, LaunchLensV4 0xCFd8902c696fb74FA64ea6Fe339e149e5c50b00f, BondingRouterV4 0x1BAfB314515Cedf96Ac8D569304934EefA051bcA. FAQ: The official LONGSHOT contract is 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745. No stocks are enabled by the factory owner yet." }
  - { id: R-2, publisher: "@uselongshot", title: "X profile", url: "https://x.com/uselongshot", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-15, CLM-16, CLM-17, CLM-18, CLM-27], excerpt: "Display name uselongshot, handle @uselongshot. Bio: Launch the token. Pick the market. Choose long or short. Let every trade compound the bet. Website http://uselongshot.xyz. Joined 2026-08-11. Followers ~109." }
  - { id: R-3, publisher: Telegram, title: "t.me/uselongshot", url: "https://t.me/uselongshot", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3], excerpt: "og:title UseLongshot. og:description www.uselongshot.xyz. tgme_page_extra 20 subscribers. tgme_page_description www.uselongshot.xyz." }
  - { id: R-4, publisher: Blockscout, title: "Address 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745", url: "https://robinhoodchain.blockscout.com/address/0x8701E2C87ade58325601f4F9bf37ADF46Cb75745", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-28, EVT-7], excerpt: "API v2: hash 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745, is_contract true, is_verified true, name FixedSupplyToken, creator 0x5F6828db3b38b1597cbB0F1a6a26b5406aB38789, creation_transaction_hash 0x2daf0267cec836a47fb59ffd6d8d924246a335645475347ff9cd3e7bfb0de5fc; token name LONGSHOT symbol LONGSHOT holders_count 60 total_supply 1000000000000000000000000000." }
  - { id: R-5, publisher: Blockscout, title: "Token LONGSHOT 0x8701…5745", url: "https://robinhoodchain.blockscout.com/token/0x8701E2C87ade58325601f4F9bf37ADF46Cb75745", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-10], excerpt: "API v2/tokens: address_hash 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745, name LONGSHOT, symbol LONGSHOT, decimals 18, holders_count 60, total_supply 1000000000000000000000000000, type ERC-20. Verified source src/FixedSupplyToken.sol constructor name_ LONGSHOT symbol_ LONGSHOT recipient_ 0x5F6828db3b38b1597cbB0F1a6a26b5406aB38789. verified_at 2026-08-13T16:29:33Z is_partially_verified true." }
  - { id: R-6, publisher: Blockscout, title: "Creation tx 0x2daf0267…", url: "https://robinhoodchain.blockscout.com/tx/0x2daf0267cec836a47fb59ffd6d8d924246a335645475347ff9cd3e7bfb0de5fc", published_at: 2026-08-12T22:53:45Z, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-23, EVT-7], excerpt: "timestamp 2026-08-12T22:53:45.000000Z status ok block 34903127 from 0x09d39aDC38fa4f13468D85Ec1aC208080fd1c71D to 0xB2F8c34181878E410bbbcEb9A992Ea7c66dc877E method 0x0987b973. Minted LONGSHOT to 0x5F6828… then transferred nearly all supply into UniswapV3Pool 0xCA3C6DBF5F875156B146FCa72BCeed53A8414fC7 versus WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73." }
  - { id: R-7, publisher: Robinhood Chain RPC, title: "eth_getCode and eth_call on Longshot 4663 contracts", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-8, CLM-12, CLM-13, CLM-23, CLM-24, CLM-25, CLM-26], excerpt: "eth_chainId 0x1237. eth_blockNumber 53083313. Code bytes: token 1763, LaunchFactoryV4 5691, LaunchLensV4 5553, BondingRouterV4 3265, pool 22142, pre-V4 0xB2F8…877E 1236, owner EOA empty. Factory owner() 0x1F687Ba0ee85F5d08A1e6e988c09cBB6D29359E5 keeper() 0xd9C0B4110bc29391c953d986d3a91E6114D0Ad60 WETH 0x0Bd7…AD73 PoolManager 0x8366…0951 slot-10 length 2. Token name/symbol LONGSHOT supply 1e27." }
  - { id: R-8, publisher: Blockscout, title: "LaunchFactoryV4 0xE1E6…3661", url: "https://robinhoodchain.blockscout.com/address/0xE1E635c1d952C4136f1fBF816c072EBb5D3E3661", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-26, EVT-4], excerpt: "API v2: hash 0xE1E635c1d952C4136f1fBF816c072EBb5D3E3661 is_contract true is_verified false creator 0x1F687Ba0ee85F5d08A1e6e988c09cBB6D29359E5 creation_transaction_hash 0xa9b7b8e520959ec5381b8d456d965005a07b523e683a49d8ec5f87086eda2d60. Logs: 2026-08-18T18:20:17Z token 0x60e969f9… ticker LSV4SMOKE; 2026-08-25T16:12:16Z token 0x7af1c04f… ticker LONG asset ETH." }
  - { id: R-9, publisher: Blockscout, title: "LaunchFactoryV4 creation tx 0xa9b7b8e5…", url: "https://robinhoodchain.blockscout.com/tx/0xa9b7b8e520959ec5381b8d456d965005a07b523e683a49d8ec5f87086eda2d60", published_at: 2026-08-18T17:56:19Z, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-12], excerpt: "timestamp 2026-08-18T17:56:19.000000Z status ok block 39894510 from 0x1F687Ba0ee85F5d08A1e6e988c09cBB6D29359E5 to null created_contract 0xE1E635c1d952C4136f1fBF816c072EBb5D3E3661. Constructor args include WETH 0x0Bd7…AD73, 0x1F68…59E5, Uniswap V4 PoolManager 0x8366…0951." }
  - { id: R-10, publisher: Blockscout, title: "LaunchLensV4 0xCFd8…b00f", url: "https://robinhoodchain.blockscout.com/address/0xCFd8902c696fb74FA64ea6Fe339e149e5c50b00f", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-24], excerpt: "API v2: hash 0xCFd8902c696fb74FA64ea6Fe339e149e5c50b00f is_contract true is_verified false creator 0x1F687Ba0ee85F5d08A1e6e988c09cBB6D29359E5 creation_transaction_hash 0x0918d503aa2dce7e1f112034b6e4456c759016e4e4c6ec46e9786775efb64275." }
  - { id: R-11, publisher: Blockscout, title: "BondingRouterV4 0x1BAf…1bcA", url: "https://robinhoodchain.blockscout.com/address/0x1BAfB314515Cedf96Ac8D569304934EefA051bcA", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "API v2: hash 0x1BAfB314515Cedf96Ac8D569304934EefA051bcA is_contract true is_verified false creator 0x1F687Ba0ee85F5d08A1e6e988c09cBB6D29359E5 creation_transaction_hash 0x1e563f3fac56ac256a3dea5716d8038d4e158546eab0adae3375f401932e113b." }
  - { id: R-12, publisher: DexScreener, title: "LONGSHOT token pairs on Robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0x8701E2C87ade58325601f4F9bf37ADF46Cb75745", published_at: null, accessed_at: 2026-09-03T02:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-9, CLM-11, CLM-23, CLM-26, CLM-28], excerpt: "chainId robinhood dexId uniswap labels v3 pairAddress 0xCA3C6DBF5F875156B146FCa72BCeed53A8414fC7 baseToken LONGSHOT 0x8701E2C87ade58325601f4F9bf37ADF46Cb75745 quoteToken WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 liquidity.usd 4446.02 volume.h24 4.09 marketCap 4439 fdv 4439 pairCreatedAt 1786575225000 websites https://www.uselongshot.xyz/ twitter https://x.com/uselongshot telegram https://t.me/uselongshot." }
  - { id: R-13, publisher: DexScreener, title: "LONGSHOT / WETH pair page", url: "https://dexscreener.com/robinhood/0xca3c6dbf5f875156b146fca72bceed53a8414fc7", published_at: null, accessed_at: 2026-09-03T02:45:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3], excerpt: "DexScreener pair URL for Uniswap v3 LONGSHOT/WETH on chain robinhood; token info websites and socials match uselongshot.xyz, x.com/uselongshot and t.me/uselongshot." }
  - { id: R-14, publisher: X, title: "@uselongshotxyz profile", url: "https://x.com/uselongshotxyz", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "Display name uselongshot, handle @uselongshotxyz. Bio: Launch the token. Pick the market. Choose long or short. Let every trade compound the bet. Followers 0 this pass." }
  - { id: R-15, publisher: GitHub, title: "LongshotRH/Longshot 404", url: "https://github.com/LongshotRH/Longshot", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: repository, authority: unknown, authenticity: unconfirmed, supports: [CLM-21], excerpt: "GET https://github.com/LongshotRH/Longshot and api.github.com/repos/LongshotRH/Longshot returned 404 Page not found / message Not Found this pass. URL appears in uselongshot.xyz HTML." }
  - { id: R-16, publisher: "@uselongshot", title: "BNB Smart Chain and HyperEVM live", url: "https://x.com/uselongshot/status/2091987749972631973", published_at: 2026-08-24T20:35:21Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-20, EVT-5], excerpt: "Longshot is expanding to BNB Smart Chain and HyperEVM. We are now supporting 5 major chains. BSC and HyperEVM are now LIVE on longshot." }
  - { id: R-17, publisher: "@uselongshot", title: "major updates rolling out next week", url: "https://x.com/uselongshot/status/2094089929827532813", published_at: 2026-08-30T15:48:40Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "We hope everyone had a good weekend! Some major updates and pushes rolling out next week -> https://www.uselongshot.xyz" }
  - { id: R-18, publisher: "@uselongshot", title: "launch competition still open", url: "https://x.com/uselongshot/status/2093356616238141652", published_at: 2026-08-28T15:14:44Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "Don't forget - $5,000 is still up for grabs in the Longshot launch competition. Launch a project using Longshot tech and every $100K in market cap = $500. Only 3 days left. Competition closes Sunday at 00:00." }
  - { id: R-19, publisher: "@uselongshot", title: "This week at Longshot", url: "https://x.com/uselongshot/status/2092692266162737525", published_at: 2026-08-26T19:14:51Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3, CLM-20], excerpt: "This week at Longshot (so far): We shipped across nearly every layer of the protocol: New chains. New launch flows. New mechanics. Cleaner UX. Thread also posted pump.fun launches, HyperEVM live, BSC live, Ember Cycle, and rewritten protocol documentation." }
  - { id: R-20, publisher: "@uselongshot", title: "CONTRACT is now VERIFIED", url: "https://x.com/uselongshot/status/2087944028583043427", published_at: 2026-08-13T16:47:03Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6, CLM-4], excerpt: "Our CONTRACT is now VERIFIED! https://robinhoodchain.blockscout.com/address/0x8701E2C87ade58325601f4F9bf37ADF46Cb75745?tab=contract" }

gaps:
  - { priority: P0, question: "Which on-chain function is isLaunchPool, and do the two Launched pools still hold liquidity on 4663?", checked: "Docs name isLaunchPool(); selectors 0x58e2eb55 and 0xf0d64c92 did not return true for 0xCA3C…4fC7, 0x3c17…d50b or 0xee67…55a5; DexScreener empty for both factory tokens; slot-10 length 2", next: "decode unverified LaunchFactoryV4 source or call LaunchLensV4.getLaunch on the two token addresses" }
  - { priority: P0, question: "When does the factory owner enable stock underlyings, and which Stock Token symbols are capped?", checked: "uselongshot.xyz launch copy: No stocks are enabled by the factory owner yet; @uselongshot 25 Aug post named a SPCX Hyperliquid long as a pairing example", next: "eth_call the leverage-cap mapping once source is verified" }
  - { priority: P1, question: "Is github.com/LongshotRH/Longshot private, renamed, or a stale HTML string?", checked: "site HTML names the URL; GitHub web and API 404 on 2026-09-03", next: "re-open the URL after a public push and compare bytecode" }
  - { priority: P1, question: "Does pre-V4 contract 0xB2F8…877E still accept launches, or is V4 the only live factory?", checked: "Official token creation tx to 0xB2F8…877E on 12 Aug; LaunchFactoryV4 created 18 Aug; source unverified on both", next: "compare launch selectors and watch new Launched logs" }
  - { priority: P2, question: "Is there an audit of LaunchFactoryV4 bytecode?", checked: "FAQ says not to treat explorer verification as an audit; no auditor URL on the site, 2026-09-03", next: "record any later report whose scope matches 0xE1E6…3661" }

---

# Longshot — research packet

## What it is

Fee-routed token factory: trading fees fund one immutable Hyperliquid long or short, holder rewards, and a 20% operations cut. A creator picks underlying, direction and leverage, then deploys; on Robinhood Chain LaunchFactoryV4 uses a bonding curve that graduates to Uniswap v4. The official LONGSHOT token trades versus WETH. @uselongshot runs it at uselongshot.xyz.

Themes: launchpad, rwa, memecoin

## Why it matters

Longshot is a separate name from LONG and Longbow. Census still lists it as announced; the official token, a Uniswap v3 WETH pool, and LaunchFactoryV4 are on chain 4663, but the only DexScreener 4663 pool is $4,446.

## What could go wrong

LaunchFactoryV4 source is unverified. `owner()` is one externally owned account. The keeper is a rotatable key that places Hyperliquid orders. Site copy states there is no on-chain pause on launched-token trading, and that a liquidated perp does not stop the token market.

## Product and mechanics

A creator locks underlying, direction and leverage at deploy. Fees split 40 / 40 / 20 into position capital, holder rewards and operations, or 80 / 20 in Ember Cycle buyback-and-burn mode. The token is an ordinary ERC-20; it is not a redeemable claim on the perp. [claim R-1]

Robinhood Chain docs on the same page: bonding curve then Uniswap v4, with LaunchFactoryV4, LaunchLensV4 and BondingRouterV4. The official LONGSHOT token was created on 12 Aug 2026 through 0xB2F8…877E into a Uniswap v3 WETH pool, before LaunchFactoryV4 existed. [claim R-1] [verified R-6 R-8 R-9]

Launch UI lists crypto and stocks as underlyings and states no stocks are enabled by the factory owner yet. [claim R-1]

## Control and security

LaunchFactoryV4 `owner()` returns 0x1F68…59E5, which has no code and created the factory. `keeper()` returns 0xd9C0…Ad60. Source is unverified. [verified R-7 R-9]

Site FAQ: do not treat deployment or explorer verification as an independent security audit. No auditor URL was located on the site this pass. [claim R-1]

## Team and provenance

@uselongshot lists uselongshot.xyz. The site names @uselongshot, t.me/uselongshot and github.com/LongshotRH/Longshot. Telegram title UseLongshot points at www.uselongshot.xyz. The GitHub URL returned 404. [verified R-1 R-2 R-3]

Census LONG and Longbow share a name stem only. @uselongshotxyz repeats the official bio and showed 0 followers. [claim R-2 R-14]

## Economics and activity

DexScreener LONGSHOT/WETH Uniswap v3 on robinhood: liquidity $4,446.02, market cap $4,439, 24h volume $4.09 at 2026-09-03T02:45Z. Holders 60. Factory slot-10 length 2; DexScreener returned no pairs for those two tokens. [verified R-5 R-12]

## Material risks

- LaunchFactoryV4 bytecode is unverified; owner is one EOA. [verified R-7 R-8]
- Official 4663 pool liquidity is $4,446, below a $25k pool bar. [verified R-12]
- Perp liquidation can zero that isolated margin while the token keeps trading. [claim R-1]
- No named audit report was located. [claim R-1]
- github.com/LongshotRH/Longshot returned 404. [claim R-15]

## Verification passes

- Receipts: every URL above was opened on 2026-09-03 and its excerpt copied from the page or API. [verified R-1 R-4 R-12]
- Numbers: market cap, 24h volume and holders are the 4663 pair or token slice, not an all-chains total. [verified R-5 R-12]
- Adversarial: the strongest contrary reading is that Longshot is LONG (app.long.xyz) or longshot.finance on Solana; the official domain, handle, CA and factory addresses argue against both. [inference R-1 R-2 R-4]

## Operations log

- Opened https://www.uselongshot.xyz HTML (SPA; contract table and FAQ in source). Railway health URL 404.
- Opened Blockscout API v2 for token, factory, lens, router, pool, creation txs and factory logs.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId, eth_getCode, owner(), keeper(), token metadata, slot-10 length.
- DexScreener token-pairs for 0x8701…5745, 0x7af1…46a1 and 0x60e9…3298.
- X: @uselongshot Latest and status 2087944028583043427, 2091987749972631973, 2092692266162737525, 2093356616238141652, 2094089929827532813; profile @uselongshotxyz.
- Telegram t.me/uselongshot. GitHub LongshotRH/Longshot 404. Llama protocol/longshot 400.
- Time spent: one collector pass on 2026-09-03.
