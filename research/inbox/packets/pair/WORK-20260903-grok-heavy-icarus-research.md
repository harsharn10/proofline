---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: pair
name: PAIR
packet_tier: seed
as_of: 2026-09-03T02:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [pair]
allowed_paths:
  - research/inbox/packets/pair/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: PAIR
  aliases: [pair.fund, PAIR Labs, PairLaunchpadV5]
  symbols: [PAIR]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://pair.fund
  official_handle: "@pairdotfund"
  repository: https://github.com/pairdotfund
  possible_matches:
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz; LongLauncher.create quotes one stock token per launch"
        - "PAIR is a multipool pad at pair.fund / @pairdotfund; launchTokenMulti on PairERC1967Proxy 0x8660…Ae62 can quote a basket, and the PAIR token is 100% SPY"
        - "No shared domain, handle or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "PAIR launches into locked Uniswap v4 pools with no bonding curve; factory is 0x8660…Ae62, not a Pons factory"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: launch/stock-paired-factory
  secondary_leaves: [launch/hook-programmable]
  mechanism_tags: [launchpad, rwa, stock-paired, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "PAIR token 0x6b1d…66be and V5 proxy 0x8660…Ae62 have non-empty code on chain 4663; the proxy is a verified PairERC1967Proxy whose implementation PairLaunchpadV5Upgradeable is verified. The token was created by launchTokenMulti quoting 100% SPY 0x117c…4C0C. PAIR/SPY Uniswap v4 book is live on DexScreener. Token source is not verified; owner() is an unverified contract. [R-9] [R-11] [R-12] [R-13] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-11], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-12, CLM-13], note: "" }

links:
  - { kind: site, url: "https://pair.fund", authenticity: confirmed }
  - { kind: app, url: "https://pair.fund", authenticity: confirmed }
  - { kind: docs, url: "https://pair.fund/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/pairdotfund", authenticity: confirmed }
  - { kind: x, url: "https://x.com/pairecosystem", authenticity: unconfirmed }
  - { kind: github, url: "https://github.com/pairdotfund", authenticity: unconfirmed }

deployments:
  - label: PAIR token (created by V5 launchpad)
    role: token
    address:
      value: "0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:51:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-9, R-10, R-13]
  - label: PairLaunchpadV5 EIP-1967 proxy (press V5 launchpad)
    role: factory
    address:
      value: "0x8660A7F019C7943b0b0A91B8E39AFf3b6DB6Ae62"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:51:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-11, R-12, R-15]
  - label: PairLaunchpadV5Upgradeable implementation
    role: implementation
    address:
      value: "0x56CF3AEE42Bc5a1DdAe79e275deaBC97B09484db"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:51:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-11, R-12]
  - label: Launchpad owner() contract
    role: admin
    address:
      value: "0x3Da42DBECBEFf476c027f8298bfAd0d6C3Ba5656"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:51:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-16]

metrics:
  - { kind: volume_24h, value: 1291403.98, currency: USD, as_of: 2026-09-03T02:52:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be pair 0xf224a070…c001 PAIR/SPY volume.h24", class: claim, receipt_ids: [R-14] }
  - { kind: tvl, value: 261374.52, currency: USD, as_of: 2026-09-03T02:52:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be pair 0xf224a070…c001 PAIR/SPY liquidity.usd", class: claim, receipt_ids: [R-14] }
  - { kind: market_cap, value: 4832696, currency: USD, as_of: 2026-09-03T02:52:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be pair 0xf224a070…c001 PAIR/SPY fdv/marketCap", class: claim, receipt_ids: [R-14] }
  - { kind: holders, value: 4300, currency: null, as_of: 2026-09-03T02:51:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be holders_count", class: claim, receipt_ids: [R-10] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:51:00Z, receipt_ids: [R-9, R-11, R-12], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x329edb3 (53079475). eth_getCode non-empty: token 3245 bytes, proxy 145, implementation 18182. proxy owner() 0x3Da42DBECBEFf476c027f8298bfAd0d6C3Ba5656 (1980 bytes code). EIP-1967 implementation slot 0x56CF3AEE42Bc5a1DdAe79e275deaBC97B09484db; admin slot zero." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:51:00Z, receipt_ids: [R-9, R-10, R-11, R-12], result: "Blockscout api/v2: token 0x6b1d…66be is_contract true, is_verified false, name PAIR, creator_address_hash 0x8660…Ae62, creation_transaction_hash 0x00e0b810c18ac1154a3921ffb37f7f142acb641f394ab78366bad0a5842af225. Token symbol PAIR, decimals 18, total_supply 1e27, holders_count 4300. Proxy 0x8660…Ae62 is_contract true, is_verified true, name PairERC1967Proxy, proxy_type eip1967, implementation PairLaunchpadV5Upgradeable 0x56CF…84db, creator 0x18Fe9694a335C8b42D228147eDdAC524748300eA. Implementation is_verified true, is_fully_verified true, file contracts/v5/PairLaunchpadV5Upgradeable.sol, verified_at 2026-09-03T01:42:47Z." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-3, R-4], result: "pair.fund og:url https://pair.fund; SPA JS hard-codes proxy 0x8660A7F019C7943b0b0A91B8E39AFf3b6DB6Ae62, token 0x6b1d42927b1a84ec28fa88d4fc6fa7af404966be, https://x.com/pairdotfund and https://github.com/pairdotfund. @pairdotfund bio names the multipool Uniswap v4 hook pad; status 2093823474796315091 posts the token CA and https://pair.fund." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-14], result: "DexScreener latest/dex/tokens/0x6b1d…66be: 15 robinhood uniswap pairs. Top PAIR/SPY 0xf224a070c8626c890a085b258cf562ee4bf052b6d1d59104b3b44d722640c001 quote 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C liquidity.usd 261374.52 volume.h24 1291403.98 priceUsd 0.005282 fdv 4832696; info.websites https://pair.fund info.socials https://x.com/pairdotfund. Second PAIR/USDG 0x25779a6d…ec86 liquidity.usd 233115.97 volume.h24 735688.55." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:51:00Z, receipt_ids: [R-13, R-17], result: "Tx 0x00e0b810… block 49391541 2026-08-29T19:07:54Z from EOA 0xa15e4aD0dbc8DF1715A7b254526252cd93bb1102 to proxy method launchTokenMulti; decoded name/symbol PAIR, quote (0x117cc2133c37B721F49dE2A7a74833232B3B4C0C, 10000). Blockscout token 0x117c…4C0C name SPDR S&P 500 ETF Trust • Robinhood Token symbol SPY, is_verified true, name BeaconProxy." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-18], result: "api.github.com/users/pairdotfund login pairdotfund type User name Pair public_repos 0 created_at 2026-07-27T08:21:21Z; api.github.com/users/pairdotfund/repos returns []." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PairLaunchpadV5 launches a fixed-supply ERC-20 in one transaction into permanently locked Uniswap v4 pools quoted against one to five Robinhood stock tokens (launchTokenMulti); no bonding curve. Docs name PairV4Hook, PairV4Locker and PairV5MultiPoolAggregator.", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-2, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://pair.fund", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@pairdotfund", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-4, R-9, R-13], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x8660A7F019C7943b0b0A91B8E39AFf3b6DB6Ae62", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-1, R-11, R-15], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-9, R-11, R-13, R-14], reproduction_ids: [REP-1, REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-7, field: identity.symbol, value: "PAIR", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-9, R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-8, field: identity.name, value: "PAIR", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-3, R-9], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-9, field: taxonomy.primary-leaf, value: launch/stock-paired-factory, class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-2, R-13, R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: relationship, value: "Distinct from LONG (single-stock LongLauncher at app.long.xyz / @longdotxyz) and Pons (bonding-curve pad at ponsfamily.com / @ponsdotfamily)", class: claim, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-1, R-3, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: product.mechanism, value: "Protocol token PAIR was created 2026-08-29T19:07:54Z via launchTokenMulti on the V5 proxy with quote SPY 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C at 10000 bps", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-13, R-17], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-12, field: control.owner, value: "0x3Da42DBECBEFf476c027f8298bfAd0d6C3Ba5656", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-16], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-13, field: control.proxy, value: "EIP-1967 PairERC1967Proxy; implementation PairLaunchpadV5Upgradeable 0x56CF…84db; ABI includes upgradeToAndCall / UUPSUpgradeable; EIP-1967 admin slot zero", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-11, R-12], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener PAIR/SPY Uniswap v4 liquidity.usd 261374.52 volume.h24 1291403.98 fdv 4832696", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-14], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: 4300, class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Official account posted almost surpassing $40M all-time trading volume, over $250,000 creator rewards, over $400,000 worth of PAIR burnt, v2 coming soon (2026-09-02)", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "GlobeNewswire press dated 2026-08-31: $26 million all-time volume, more than 160,000 trades, more than $180,000 creator rewards, more than 1,200 tokens since V5 live 2026-08-26", class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on pair.fund, pair.fund/docs, the X account, GitHub, or the verified proxy/implementation pages this pass", class: unknown, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@pairdotfund.role", value: project, class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@pairdotfund.slug", value: pair, class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-9, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.repository, value: "https://github.com/pairdotfund has 0 public repositories this pass", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-23, field: identity.repository, value: "Press: Source code is published at github.com/pairdotfund", class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: other, value: "Press: All contracts are deployed and verified on Robinhood Chain (chain ID 4663); PAIR Labs will never ask users to interact with an unverified contract", class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "PAIR token 0x6b1d…66be is_verified false on Blockscout this pass", class: verified, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-9], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-26, field: team.identity, value: "Press names PAIR Labs by Luxington; founder Tugg (@0xTugg). Site/docs do not name a legal entity this pass.", class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: other, value: "Official account: 90% of protocol fees go to buying back the token; remaining 10% onboards new creators, marketing and launchpad infrastructure", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: other, value: "handle-collision: @paird0tfund uses the same display name PAIR and the same bio as @pairdotfund; pair.fund JS links only @pairdotfund", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-3, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: control.privileged-role, value: "Verified implementation ABI includes onlyOwner-class setters (setLaunchFee, setLaunchV2Enabled, rotateLaunchV2Dependencies, upgradeToAndCall, transferOwnership, withdrawLaunchFees) with no timelock named in the ABI", class: claim, observed_at: 2026-09-03T02:51:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: "account.@pairecosystem.role", value: project, class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-15, R-20], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: other
    claim_ids: [CLM-24, CLM-25]
    material_effect: "Press says every contract on 4663 is verified; the PAIR token the press names is is_verified false on Blockscout"
    status: open
    resolution: null
  - id: CON-2
    field: identity.repository
    claim_ids: [CLM-22, CLM-23]
    material_effect: "Press says source is published at github.com/pairdotfund; the GitHub user has 0 public repositories"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "PairLaunchpadV5 implementation verified on Blockscout"
    summary: "Blockscout marked 0x56CF…84db fully verified as PairLaunchpadV5Upgradeable at 2026-09-03T01:42:47Z."
    occurred_at: 2026-09-03T01:42:47Z
    observed_at: 2026-09-03T02:51:00Z
    affected_fields: [control.proxy, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-2
    type: company
    title: "Official account posted stock-token pools stay open over the weekend"
    summary: "Official account: US equity futures open Sunday evening; PAIR stock-token pools keep pricing weekend news onchain."
    occurred_at: 2026-09-03T00:15:00Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-3
    type: company
    title: "Official account posted a verification pass before open-sourcing"
    summary: "Official account: undergoing verification so the smart contract can be open sourced; transparency to be addressed soon."
    occurred_at: 2026-09-02T15:40:29Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [identity.repository, control.proxy]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-4
    type: company
    title: "Official account posted nearly $40M volume and $400k PAIR burns"
    summary: "Official account: almost $40M all-time volume, over $250k creator rewards, over $400k PAIR burnt; v2 coming soon."
    occurred_at: 2026-09-02T07:00:00Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-5
    type: company
    title: "PAIR Labs posted a public launch and AWS partnership"
    summary: "GlobeNewswire 2026-08-31: public launch, AWS partnership, V5 proxy 0x8660…Ae62, PAIR token 0x6b1d…66be vs SPY."
    occurred_at: 2026-08-31T11:35:00Z
    observed_at: 2026-09-03T02:53:00Z
    affected_fields: [lifecycle, deployment.address, identity.domain]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-6
    type: company
    title: "Official account posted the PAIR protocol token live"
    summary: "Official account posted CA 0x6b1d…66be live, 90/10 fee split to buybacks vs creators, and pair.fund."
    occurred_at: 2026-08-29T22:09:52Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [deployment.address, identity.symbol]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-7
    type: onchain
    title: "PAIR token created through launchTokenMulti against SPY"
    summary: "Tx 0x00e0b810… called launchTokenMulti on 0x8660…Ae62; PAIR 0x6b1d…66be quoted 100% vs SPY 0x117c…4C0C."
    occurred_at: 2026-08-29T19:07:54Z
    observed_at: 2026-09-03T02:51:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-8
    type: company
    title: "Official account posted the multipool launchpad back live"
    summary: "Official account: we are now back LIVE; past tokens with the prior migration error hidden; pair.fund."
    occurred_at: 2026-08-26T13:01:56Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [lifecycle, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5]

receipts:
  - { id: R-1, publisher: PAIR, title: "pair.fund", url: "https://pair.fund", published_at: null, accessed_at: 2026-09-03T02:51:57Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-8, CLM-10, CLM-21], excerpt: "HTML title PAIR; meta description and og:description 'PAIR — Launch tokenized real-world assets on-chain.'; og:url https://pair.fund. SPA bundle hard-codes Qr=0x8660A7F019C7943b0b0A91B8E39AFf3b6DB6Ae62, bs=0x6b1d42927b1a84ec28fa88d4fc6fa7af404966be, https://x.com/pairdotfund and https://github.com/pairdotfund." }
  - { id: R-2, publisher: PAIR, title: "pair.fund/docs architecture copy", url: "https://pair.fund/docs", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-9], excerpt: "SPA docs table: PairLaunchpadV5Upgradeable — UUPS proxy entry point — creates tokens, sets up locked V4 pools, handles developer buys and records the informational graduation milestone; PairToken (ERC-20) Fixed 1,000,000,000 token; also names PairV5MultiPoolAggregator, PairV4Locker, PairV4Hook, PairPriceOracle." }
  - { id: R-3, publisher: PAIR, title: "@pairdotfund profile", url: "https://x.com/pairdotfund", published_at: "2026-07-21T00:00:00Z", accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-8, CLM-19, CLM-20, CLM-28], excerpt: "Display name PAIR. Bio: First multipool launchpad that enables token deployment paired with a basket of canonical stock tokens via @Uniswap v4 hooks." }
  - { id: R-4, publisher: "@pairdotfund", title: "PAIR protocol token is now live", url: "https://x.com/pairdotfund/status/2093823474796315091", published_at: "2026-08-29T22:09:52Z", accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-4, CLM-27, EVT-6], excerpt: "0x6b1d42927b1a84ec28fa88d4fc6fa7af404966be PAIR's protocol token is now live. 90% of protocol fees go to buying back the token. The remaining 10% onboards new creators, marketing and improving the launchpad infrastructure. https://pair.fund" }
  - { id: R-5, publisher: "@pairdotfund", title: "We are now back LIVE", url: "https://x.com/pairdotfund/status/2092598420196487425", published_at: "2026-08-26T13:01:56Z", accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-8], excerpt: "We are now back LIVE! For the safety of users, we have hidden past tokens with the prior migration error. Pair now on https://pair.fund" }
  - { id: R-6, publisher: "@pairdotfund", title: "Verification process before open source", url: "https://x.com/pairdotfund/status/2095175036021969192", published_at: "2026-09-02T15:40:29Z", accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "We are currently undergoing the verification process and making sure everything is secured for our smart contract to be open sourced. We appreciate your patience. Transparency is something we emphasize on, and this will definitely be addressed very soon." }
  - { id: R-7, publisher: "@pairdotfund", title: "Daily recap almost $40M volume", url: "https://x.com/pairdotfund/status/2095044053104795765", published_at: "2026-09-02T07:00:00Z", accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-16, EVT-4], excerpt: "G everyone, just a quick daily recap and overview. Almost surpassing $40M in all-time trading volume, with over $250,000 in creator rewards distributed. Over $400,000 worth of $PAIR tokens burnt, advocating for a deflationary eco and benefiting holders. The team is working hard on the backend, ensuring our biggest update yet will be a seamless transition. v2 coming soon." }
  - { id: R-8, publisher: "@pairdotfund", title: "Stock token pools never closed", url: "https://x.com/pairdotfund/status/2095304516350415205", published_at: "2026-09-03T00:15:00Z", accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "US equity futures open Sunday evening. Stock token pools never closed. By the time futures start printing, PAIR pools have been pricing the weekend's news for two days. Anyone wanting to know how retail digested a Saturday headline can just read the chain." }
  - { id: R-9, publisher: Blockscout, title: "Address 0x6b1d…66be PAIR token", url: "https://robinhoodchain.blockscout.com/address/0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-7, CLM-8, CLM-21, CLM-25], excerpt: "api/v2/addresses: is_contract true, is_verified false, name PAIR, proxy_type null, creator_address_hash 0x8660A7F019C7943b0b0A91B8E39AFf3b6DB6Ae62, creation_transaction_hash 0x00e0b810c18ac1154a3921ffb37f7f142acb641f394ab78366bad0a5842af225." }
  - { id: R-10, publisher: Blockscout, title: "Token 0x6b1d…66be", url: "https://robinhoodchain.blockscout.com/token/0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-15], excerpt: "api/v2/tokens: name PAIR, symbol PAIR, decimals 18, total_supply 1000000000000000000000000000, holders_count 4300, type ERC-20." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x8660…Ae62 PairERC1967Proxy", url: "https://robinhoodchain.blockscout.com/address/0x8660A7F019C7943b0b0A91B8E39AFf3b6DB6Ae62", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-13, CLM-21], excerpt: "api/v2/addresses: is_contract true, is_verified true, name PairERC1967Proxy, proxy_type eip1967, implementation PairLaunchpadV5Upgradeable 0x56CF3AEE42Bc5a1DdAe79e275deaBC97B09484db, creator_address_hash 0x18Fe9694a335C8b42D228147eDdAC524748300eA, creation_transaction_hash 0x7ef53a8baaef1a145c0bae6800c9e4f28eebac34554059f2ce88d97b01d7730a." }
  - { id: R-12, publisher: Blockscout, title: "Address 0x56CF…84db PairLaunchpadV5Upgradeable", url: "https://robinhoodchain.blockscout.com/address/0x56CF3AEE42Bc5a1DdAe79e275deaBC97B09484db", published_at: "2026-09-03T01:42:47Z", accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-29, EVT-1], excerpt: "api/v2/smart-contracts: name PairLaunchpadV5Upgradeable, is_verified true, is_fully_verified true, file_path contracts/v5/PairLaunchpadV5Upgradeable.sol, compiler 0.8.26+commit.8a97fa7a, verified_at 2026-09-03T01:42:47.566090Z. ABI includes launchTokenMulti, locker, pairHook, stockRegistry, owner, upgradeToAndCall, transferOwnership." }
  - { id: R-13, publisher: Blockscout, title: "Tx 0x00e0b810… launchTokenMulti PAIR", url: "https://robinhoodchain.blockscout.com/tx/0x00e0b810c18ac1154a3921ffb37f7f142acb641f394ab78366bad0a5842af225", published_at: "2026-08-29T19:07:54Z", accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-6, CLM-10, CLM-11, EVT-7], excerpt: "timestamp 2026-08-29T19:07:54Z block_number 49391541 status ok method launchTokenMulti from 0xa15e4aD0dbc8DF1715A7b254526252cd93bb1102 to 0x8660A7F019C7943b0b0A91B8E39AFf3b6DB6Ae62. decoded p: name PAIR, symbol PAIR, quotes [(0x117cc2133c37B721F49dE2A7a74833232B3B4C0C, 10000)]." }
  - { id: R-14, publisher: DexScreener, title: "PAIR token pairs on robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-14], excerpt: "15 pairs. Top: chainId robinhood dexId uniswap pairAddress 0xf224a070c8626c890a085b258cf562ee4bf052b6d1d59104b3b44d722640c001 base PAIR 0x6b1d42927B1a84eC28Fa88d4fC6FA7AF404966be quote SPY 0x117cc2133c37B721F49dE2A7a74833232B3B4C0C liquidity.usd 261374.52 volume.h24 1291403.98 priceUsd 0.005282 fdv 4832696; websites https://pair.fund socials https://x.com/pairdotfund." }
  - { id: R-15, publisher: GlobeNewswire, title: "PAIR launches the first multipool RWA launchpad on Robinhood Chain", url: "https://markets.businessinsider.com/news/stocks/pair-launches-the-first-multipool-rwa-launchpad-on-robinhood-chain-pairing-new-tokens-with-baskets-of-tokenized-stocks-partners-with-aws-to-scale-its-infrastructure-1036507211", published_at: "2026-08-31T11:35:00Z", accessed_at: 2026-09-03T02:53:00Z, kind: news, authority: primary, authenticity: unconfirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-17, CLM-23, CLM-24, CLM-26, CLM-30, EVT-5], excerpt: "PAIR (pair.fund) announced its public launch and an AWS partnership. $PAIR went live 29 Aug at 0x6b1d42927b1a84ec28fa88d4fc6fa7af404966be, paired to SPY. V5 launchpad proxy 0x8660A7F019C7943b0b0A91B8E39AFf3b6DB6Ae62; address list at pair.fund/docs. Follow @pairdotfund and @pairecosystem. Source code published at github.com/pairdotfund. Built by PAIR Labs by Luxington." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x3Da4…5656 launchpad owner()", url: "https://robinhoodchain.blockscout.com/address/0x3Da42DBECBEFf476c027f8298bfAd0d6C3Ba5656", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "api/v2/addresses: is_contract true, is_verified false, name null, creator_address_hash 0x18Fe9694a335C8b42D228147eDdAC524748300eA, creation_transaction_hash 0xd6650388578e57230315228f3d68bf68d4c79352e8e2e458f85ce2d0d0a3fa20. RPC eth_getCode 1980 bytes; proxy owner() returns this address." }
  - { id: R-17, publisher: Blockscout, title: "Token 0x117c…4C0C SPY", url: "https://robinhoodchain.blockscout.com/token/0x117cc2133c37B721F49dE2A7a74833232B3B4C0C", published_at: null, accessed_at: 2026-09-03T02:51:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "api/v2/tokens: name SPDR S&P 500 ETF Trust • Robinhood Token, symbol SPY, decimals 18, holders_count 50899, type ERC-20. Address page name BeaconProxy, is_verified true, creator_address_hash 0x4783C67b63dE2B358Ac5951a7D41F47A38F3C046." }
  - { id: R-18, publisher: GitHub, title: "github.com/pairdotfund", url: "https://github.com/pairdotfund", published_at: "2026-07-27T08:21:21Z", accessed_at: 2026-09-03T02:52:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-22], excerpt: "api.github.com/users/pairdotfund: login pairdotfund, type User, name Pair, public_repos 0, blog empty, created_at 2026-07-27T08:21:21Z. api.github.com/users/pairdotfund/repos returns []." }
  - { id: R-19, publisher: "@paird0tfund", title: "@paird0tfund profile", url: "https://x.com/paird0tfund", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: unknown, authenticity: unconfirmed, supports: [CLM-28], excerpt: "Display name PAIR. Bio: First multipool launchpad that enables token deployment paired with a basket of canonical stock tokens via @Uniswap v4 hooks. Followers 434. Handle is paird0tfund, not pairdotfund." }
  - { id: R-20, publisher: "@pairecosystem", title: "@pairecosystem profile", url: "https://x.com/pairecosystem", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-30], excerpt: "Display name PAIR. Bio: Featuring @pairdotfund's projects, communities and builders in the PAIR ecosystem." }

gaps:
  - { priority: P0, question: "Who controls owner contract 0x3Da42D…5656, and can it call upgradeToAndCall on the V5 proxy without a timelock?", checked: "eth_getCode 1980 bytes, is_verified false, creator 0x18Fe…00eA; ABI lists upgradeToAndCall and transferOwnership; EIP-1967 admin slot zero, 2026-09-03", next: "read the owner contract bytecode or any verified source; eth_call getOwners/getThreshold if it is a Safe" }
  - { priority: P0, question: "Will the PAIR token source be verified, matching the press line that every contract is verified?", checked: "Blockscout token is_verified false; proxy and implementation is_verified true; official account posted a verification pass 2026-09-02", next: "re-read the token page after the open-source post" }
  - { priority: P1, question: "What are the live PairV4Locker, PairV4Hook, PairV5MultiPoolAggregator, PairPriceOracle and stockRegistry addresses?", checked: "docs SPA names the components; implementation ABI has locker(), pairHook(), stockRegistry(); selectors not called this pass", next: "eth_call those views on the proxy and open each address on Blockscout" }
  - { priority: P1, question: "Is there an audit whose scope includes PairLaunchpadV5Upgradeable as deployed at 0x56CF…84db?", checked: "pair.fund, /docs SPA strings, @pairdotfund, GitHub user, Blockscout contract pages, 2026-09-03", next: "auditor report index named in a later post or repo" }
  - { priority: P1, question: "Where is the source the press says is published at github.com/pairdotfund?", checked: "GitHub user exists, public_repos 0, repos list empty, 2026-09-03", next: "re-fetch the org/user after the open-source post" }
  - { priority: P2, question: "Does @pairecosystem bidirectionally link to pair.fund, or is it only named in the press bio?", checked: "bio features @pairdotfund; pair.fund JS links @pairdotfund not @pairecosystem", next: "open the account website field and a post that names pair.fund" }
---

# PAIR — research packet

## What it is

A multipool stock-paired launchpad on Robinhood Chain. A creator deploys a fixed-supply ERC-20 through PairLaunchpadV5 in one transaction; the factory seeds permanently locked Uniswap v4 pools against one to five Robinhood stock tokens. The protocol token PAIR trades versus SPY. PAIR Labs runs it at pair.fund / @pairdotfund.

Themes: launchpad, rwa, stock-paired:SPY

## Why it matters

PAIR is a stock-paired factory that can quote a new token against a basket of Robinhood stock tokens in one launch, not a single stock. LONG quotes one stock per create; Pons is a bonding-curve pad. The PAIR token itself is a live PAIR/SPY Uniswap v4 book.

## What could go wrong

The V5 launchpad is an EIP-1967 UUPS proxy. owner() is an unverified contract that can take upgrade and fee-withdraw paths named in the implementation ABI, with no timelock in that ABI. The PAIR token source is not verified on the explorer. Official all-time volume figures are posts, not a reproduced chain slice.

## Product and mechanics

A launch is one call to `launchTokenMulti` on PairERC1967Proxy 0x8660…Ae62. The PAIR token was created that way on 2026-08-29T19:07:54Z with a single quote, SPY 0x117c…4C0C at 10000 bps. [verified R-13 R-17]

pair.fund/docs describes the same proxy as a UUPS entry that deploys a fixed 1,000,000,000 ERC-20, seeds locked Uniswap v4 pools, and records an informational graduation flag. Named components: PairV4Hook, PairV4Locker, PairV5MultiPoolAggregator, PairPriceOracle. Those satellite addresses were not eth_called this pass. [claim R-2]

The GlobeNewswire note says there is no bonding curve and no liquidity migration, a 0.0005 ETH launch fee, and a 1 percent swap fee split 70/30 creator/protocol. That fee path was not reproduced on chain this pass. [claim R-15]

## Control and security

Proxy owner() returns 0x3Da42D…5656, a contract with 1980 bytes of unverified code created by EOA 0x18Fe…00eA, the same key that deployed the proxy. Implementation ABI includes `upgradeToAndCall`, `transferOwnership`, `setLaunchFee`, `rotateLaunchV2Dependencies` and `withdrawLaunchFees`. EIP-1967 admin slot is zero. [verified R-11 R-12 R-16]

Token 0x6b1d…66be is_verified false. Implementation 0x56CF…84db became fully verified on Blockscout at 2026-09-03T01:42:47Z. Press dated 2026-08-31 says every contract is verified. [verified R-9 R-12] [claim R-15]

No audit report URL was located this pass. [unknown]

## Team and provenance

@pairdotfund display name is PAIR; the bio describes a multipool Uniswap v4 hook pad. pair.fund JS links that handle and github.com/pairdotfund. The GitHub user exists with 0 public repositories. Press names PAIR Labs by Luxington and founder Tugg (@0xTugg), and also @pairecosystem, whose bio features @pairdotfund. [verified R-1 R-3 R-18] [claim R-15 R-20]

@paird0tfund uses the same display name and bio; pair.fund does not link it. [claim R-19]

Census LONG and Pons share the launchpad/stock-paired neighborhood only. [claim R-1 R-3]

## Economics and activity

DexScreener PAIR/SPY Uniswap v4 (pool id 0xf224a070…c001): liquidity $261,374.52, 24h volume $1,291,403.98, fdv $4,832,696 at 2026-09-03T02:52Z. A PAIR/USDG book shows liquidity $233,115.97 and 24h volume $735,688.55. Blockscout holders_count 4300. [verified R-10 R-14]

Official account on 2026-09-02 posted almost $40M all-time volume, over $250,000 creator rewards and over $400,000 PAIR burnt. Press on 2026-08-31 posted $26M all-time volume after five days of V5. DefiLlama has a PAIR / pairdotfund launchpad row with dummy.js and empty currentChainTvls. [claim R-7 R-15]

## Material risks

- V5 is a UUPS proxy whose owner() is an unverified contract; the ABI names upgrade and fee-withdraw functions with no timelock. [verified R-12 R-16]
- PAIR token source is not verified on Blockscout. [verified R-9]
- Press says every contract is verified and that GitHub holds the source; the token is unverified and the GitHub user has 0 public repos. [disputed R-9 R-15 R-18]
- All-time volume is an official post, not a reproduced explorer or Llama chain slice. [claim R-7]
- No audit report was located this pass. [unknown]

## Verification passes

- Receipts: pair.fund and /docs, @pairdotfund profile and six posts, Blockscout API v2 plus RPC for the token, proxy, implementation and owner, the launchTokenMulti transaction, DexScreener token API, GitHub user API, GlobeNewswire reprint, @paird0tfund and @pairecosystem were opened on 2026-09-03; excerpts are copied from those pages. [verified R-1 R-3 R-9 R-11 R-13 R-14]
- Numbers: DexScreener figures are the named PAIR/SPY Uniswap v4 pair on chain robinhood, not an all-chains total. Holders is Blockscout holders_count. The $40M and $26M figures are project posts. [verified R-10 R-14] [claim R-7 R-15]
- Adversarial: the strongest contrary reading is that PAIR is LONG, Pons, or an unverified copy at @paird0tfund. Handles, domains and the launchTokenMulti creator on 0x8660…Ae62 argue against LONG and Pons; the site JS links only @pairdotfund. [verified R-1 R-13] [claim R-3 R-19]

## Operations log

- Read content/census.yaml for slug pair (absent) and rows long / pons; no pending packet under research/inbox/packets/pair.
- Opened https://pair.fund and https://pair.fund/docs (same SPA HTML); extracted contract constants and docs table strings from /assets/index-02vhSJ4j.js.
- Opened https://x.com/pairdotfund and statuses 2095304516350415205, 2095175036021969192, 2095044053104795765, 2093823474796315091, 2092598420196487425; also https://x.com/pairecosystem and https://x.com/paird0tfund.
- RPC eth_getCode / owner / EIP-1967 slots on https://rpc.mainnet.chain.robinhood.com for 0x6b1d…66be, 0x8660…Ae62, 0x56CF…84db, 0x3Da4…5656 at block 53079475.
- Blockscout API v2 address, token, smart-contract and transaction endpoints for those contracts plus SPY 0x117c…4C0C and tx 0x00e0b810….
- Opened DexScreener latest/dex/tokens for 0x6b1d…66be, api.llama.fi/protocol/pair (dummy.js, empty TVL), api.github.com/users/pairdotfund (public_repos 0).
- Opened the 2026-08-31 GlobeNewswire reprint on markets.businessinsider.com; globenewswire.com search timed out.
- locker(), pairHook() and stockRegistry() selectors were not eth_called this pass.
