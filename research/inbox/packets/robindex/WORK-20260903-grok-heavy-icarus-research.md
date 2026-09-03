---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: robindex
name: Robindex
packet_tier: seed
as_of: 2026-09-03T02:56:00Z
prior_packet: null
supersedes: null
owned_slugs: [robindex]
allowed_paths:
  - research/inbox/packets/robindex/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Robindex
  aliases: [RobinDex]
  symbols: [ROBINDEX]
  entity_kind: tool
  chain_scope: robinhood-native
  official_domain: https://robindex.pro
  official_handle: "@robindexpro"
  repository: "NULL — no GitHub org or repository URL on robindex.pro, the @robindexpro bio, constructor socials(), or a GitHub search for robindex.pro this pass"
  possible_matches:
    - slug: index
      signals: [other]
      contrary_signals:
        - "Census The Index is a fee-funded Stock Token distributor at theindex.finance / @TheIndexFi with token 0x56910D4409F3a0C78C64DD8D0545FF0705389870"
        - "Robindex is a market scanner at robindex.pro / @robindexpro with token 0xd82f70F530AFf45b831d6eE17062B4E85395C6F3"
        - "No shared domain, handle, or reproduced address"
    - slug: robinhood-index-vaults
      signals: [other]
      contrary_signals:
        - "Census Robinhood Index Vaults is a testnet-only ERC-4626 basket vault (rIDX) at github.com/nsvoud-dev/robinhood-index-vaults"
        - "Robindex is a live scanner plus Pons-launched ERC-20; holders do not mint a vault share"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [analytics]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "robindex.pro is a DexPaprika-backed Uniswap-pool scanner for chain 4663 with Telegram calls and a paste-CA scan. $ROBINDEX 0xd82f…C6F3 is a verified PonsLauncherToken with a live Uniswap v3 WETH pool; census announced is below that bar. Distinct from The Index, Robinhood Index Vaults, and Robinscan (@robinscanio / robinscan.io). [R-1] [R-2] [R-4] [R-11] [R-16] [R-17]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-24], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-21], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-8, CLM-9, CLM-11, CLM-23], note: "" }

links:
  - { kind: site, url: "https://robindex.pro", authenticity: confirmed }
  - { kind: site, url: "https://robindex.pro/about", authenticity: confirmed }
  - { kind: app, url: "https://robindex.pro/scanner", authenticity: confirmed }
  - { kind: x, url: "https://x.com/robindexpro", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/robindextrending", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/robindexchat", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/robindextrendingbot", authenticity: unconfirmed }
  - { kind: other, url: "https://medium.com/@robindex/robindex-didnt-stop-building-0642ab32de72", authenticity: unconfirmed }

deployments:
  - label: ROBINDEX token (PonsLauncherToken)
    role: token
    address:
      value: "0xd82f70F530AFf45b831d6eE17062B4E85395C6F3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-11, R-12, R-16]
  - label: Uniswap v3 ROBINDEX/WETH pool
    role: other
    address:
      value: "0xcC14BF25919D57D8C365A47F3D59515C5D4ddf4D"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T02:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-14, R-16, R-17]

metrics:
  - { kind: market_cap, value: 44344, currency: USD, as_of: 2026-09-03T02:48:00Z, window: point, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xd82f70F530AFf45b831d6eE17062B4E85395C6F3 pair 0xcC14…ddf4D marketCap", class: claim, receipt_ids: [R-17] }
  - { kind: volume_24h, value: 6983.97, currency: USD, as_of: 2026-09-03T02:48:00Z, window: 24h, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xd82f70…C6F3 pair 0xcC14…ddf4D volume.h24", class: claim, receipt_ids: [R-17] }
  - { kind: tvl, value: 21045.16, currency: USD, as_of: 2026-09-03T02:48:00Z, window: point, method: "api.dexscreener.com/token-pairs/v1/robinhood/0xd82f70…C6F3 pair 0xcC14…ddf4D liquidity.usd (pool liquidity, not protocol TVL)", class: claim, receipt_ids: [R-17] }
  - { kind: holders, value: 238, currency: null, as_of: 2026-09-03T02:50:00Z, window: point, method: "Blockscout api/v2/tokens/0xd82f70…C6F3 holders_count", class: claim, receipt_ids: [R-12] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:55:00Z, receipt_ids: [R-16], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x329f5d9 (53081561). eth_getCode: token 5274 bytes, pool 22142, PonsLaunchFactory 24353, PonsLaunchLocker 5426, Uniswap v3 factory 24535, WETH 2202; deployer EOA 0x552d5fFC…4734 empty code. name ROBINDEX symbol ROBINDEX decimals 18 totalSupply 1e27. owner() reverts. deployer() 0x552d5fFC…4734 launchFactory() 0xA5aAb3F0…1feB liquidityPool() 0xcC14BF25…ddf4D pairToken() WETH 0x0Bd7D308…AD73 poolFee 10000 dexFactory 0x1f7d7550…2EfA positionManager 0x73991a25…E0D3. socials() twitter https://x.com/robindexpro telegram https://t.me/robindexchat discord/website/farcaster empty." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:50:00Z, receipt_ids: [R-11, R-12, R-13, R-14, R-15, R-18], result: "Blockscout api/v2: token is_contract true is_verified true is_fully_verified true name PonsLauncherToken file contracts/src/PonsLauncherToken.sol compiler v0.8.30 proxy_type null creator PonsLaunchFactory 0xA5aAb3F0…1feB creation tx 0x262384a7…53847 block 27657355 2026-08-04T13:23:42Z method launchToken from EOA 0x552d5fFC…4734. Token ROBINDEX/ROBINDEX holders_count 238 total_supply 1e27. Pool 0xcC14…ddf4D UniswapV3Pool is_verified true created in the same tx by Uniswap v3 factory 0x1f7d7550…2EfA. UNI-V3-POS 579618 sent to PonsLaunchLocker 0x736D7669…7F35. Constructor socials twitter https://x.com/robindexpro telegram https://t.me/robindexchat website empty." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-2, R-4, R-21], result: "robindex.pro, /about and /safety embed CA 0xd82f70F530AFf45b831d6eE17062B4E85395C6F3 and link x.com/robindexpro, t.me/robindextrending, t.me/robindexchat, t.me/robindextrendingbot. @robindexpro display name RobinDex — Automated Robinhood Token Scanner; bio CA matches; website robindex.pro. t.me/robindextrending (2132 subscribers) lists the same CA, www.robindex.pro and x.com/robindexpro." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T02:48:00Z, receipt_ids: [R-17], result: "GET api.dexscreener.com/token-pairs/v1/robinhood/0xd82f70…C6F3: one uniswap v3 pair 0xcC14…ddf4D base ROBINDEX quote WETH 0x0Bd7…AD73 priceUsd 0.00004522 liquidity.usd 21045.16 volume.h24 6983.97 fdv 44344 marketCap 44344 pairCreatedAt 1785849822000. info.websites https://robindex.pro/ socials x.com/robindexpro and t.me/robindexchat." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Robindex scans Uniswap pools on Robinhood Chain every three minutes via DexPaprika, ranks tokens by volume and a 0–99 safety score, and posts volume or milestone spikes to Telegram. Users paste a 0x address on /scanner for market stats, holders and an AI read, or browse the dex board.", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1, R-3, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://robindex.pro", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-4, R-21], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@robindexpro", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-4, R-21], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xd82f70F530AFf45b831d6eE17062B4E85395C6F3", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-2, R-11, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-11, R-13, R-16, R-17], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-6, field: taxonomy.primary-leaf, value: tooling/scanner, class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: identity.symbol, value: "ROBINDEX", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-11, R-12, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: product.mechanism, value: "Launchpad is Pons. Creator_address_hash is PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB via launchToken. Pair asset is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. Venue is Uniswap v3 pool 0xcC14BF25919D57D8C365A47F3D59515C5D4ddf4D, poolFee 10000 (1%), created in the same transaction. UNI-V3-POS 579618 was sent to PonsLaunchLocker 0x736D76699C26D0d966744cAe304C000d471f7F35.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-13, R-14, R-16, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from census The Index (theindex.finance / @TheIndexFi, token 0x56910D4409F3a0C78C64DD8D0545FF0705389870). No shared domain, handle, or reproduced address.", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-4, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: relationship, value: "Distinct from census Robinhood Index Vaults (github.com/nsvoud-dev/robinhood-index-vaults, rIDX, testnet-only ERC-4626).", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: relationship, value: "Distinct from Robinscan (@robinscanio / robinscan.io), a block explorer. @robindexpro posted a Robinscan token-verify code for 0xd82f…C6F3. Robinscan is not in the census.", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-7, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: relationship, value: "third-party-link: robindex.money describes an on-chain stock-index layer with $RDEX; robindex.finance describes an orderbook DEX with $RBD and X @RobinDEXFinance; www.robindex.online describes a P2P OTC desk. None of those domains, handles or tickers appear on robindex.pro or in constructor socials this pass.", class: claim, observed_at: 2026-09-03T02:54:00Z, receipt_ids: [R-22, R-23, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "DexScreener ROBINDEX/WETH Uniswap v3 marketCap 44344 USD and fdv 44344 USD at 2026-09-03T02:48:00Z", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "DexScreener ROBINDEX/WETH volume.h24 6983.97 USD at 2026-09-03T02:48:00Z", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-15, field: economics.metric, value: "DexScreener ROBINDEX/WETH liquidity.usd 21045.16 (pool liquidity, not protocol TVL) at 2026-09-03T02:48:00Z", class: verified, observed_at: 2026-09-03T02:48:00Z, receipt_ids: [R-17], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-16, field: economics.metric, value: "Blockscout holders_count 238 at 2026-09-03T02:50:00Z", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-12], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: control.owner, value: "PonsLauncherToken is not Ownable: owner() reverts. deployer() and constructor deployer_ are EOA 0x552d5fFC197A48bAE4fEF2550f0146d155794734 (empty code). launchFactory() is PonsLaunchFactory 0xA5aAb3F0…1feB.", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-16, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL matching PonsLauncherToken 0xd82f…C6F3 was located on robindex.pro, /about, /safety, /audits, the X account or Medium this pass. /audits lists external checkers (Blockscout, DexScreener, GoPlus).", class: unknown, observed_at: 2026-09-03T02:42:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@robindexpro.role", value: project, class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@robindexpro.slug", value: robindex, class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: identity.alias, value: "RobinDex", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: other, value: "ca-collision: /safety states only CA 0xd82f70F530AFf45b831d6eE17062B4E85395C6F3 is the official $ROBINDEX and any other $ROBINDEX is not from the project.", class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: deployment.address, value: "0xcC14BF25919D57D8C365A47F3D59515C5D4ddf4D", class: verified, observed_at: 2026-09-03T02:55:00Z, receipt_ids: [R-13, R-14, R-16, R-17], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-25, field: team.identity, value: "Official account @robindexpro named @Mike_Majestic as the coder in a 2026-08-13 post; Medium @robindex linked https://x.com/mike_majestic. Not independently reproduced.", class: claim, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-10, R-25], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: taxonomy.entity-kind, value: tool, class: claim, observed_at: 2026-09-03T02:40:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@robindexpro.note", value: "Handle lists robindex.pro and CA 0xd82f…C6F3. Display name RobinDex. Census slug robindex. Not The Index, not Robinhood Index Vaults, not @robinscanio.", class: claim, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: activity.status, value: "t.me/robindextrending listed 2132 subscribers and the official CA, www.robindex.pro and x.com/robindexpro on 2026-09-03", class: claim, observed_at: 2026-09-03T02:53:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: product.mechanism, value: "PonsLauncherToken mints the full 1,000,000,000e18 supply to the factory. Launch buy/wallet caps apply only during restrictionBlocks (constructor 2). After restrictionEndBlock the token is a plain ERC-20. No scanner, fee-split or treasury function is in the verified source.", class: verified, observed_at: 2026-09-03T02:50:00Z, receipt_ids: [R-18], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-30, field: identity.name, value: "Robindex", class: verified, observed_at: 2026-09-03T02:52:00Z, receipt_ids: [R-1, R-4, R-12], reproduction_ids: [REP-2, REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Official account posted homepage ads live on Robindex"
    summary: "Official account: Homepage ads are live. Current ad is @BasedBot. Book from $99 / 12h."
    occurred_at: 2026-09-02T21:24:03Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-2
    type: company
    title: "Official account posted ROBINDEX verify code on Robinscan"
    summary: "Official account: Verifying our token on Robinscan — code Z2RC, with the robinscan.io token URL."
    occurred_at: 2026-09-02T17:53:17Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [identity.handle, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7, R-20]
  - id: EVT-3
    type: company
    title: "Official account posted whale chat for 15M ROBINDEX"
    summary: "Official account: holders of at least 1.5% (15,000,000 $ROBINDEX) can join a Collab.Land-gated chat."
    occurred_at: 2026-09-02T16:11:59Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-4
    type: ct
    title: "@DeGenWealth2 posted the ROBINDEX contract address"
    summary: "@DeGenWealth2 posted 0xd82f70…C6F3 and named $ROBINDEX among pairs on Robinhood Chain."
    occurred_at: 2026-08-28T13:09:28Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [deployment.address, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-5
    type: company
    title: "Official account posted Wednesday scanner and call updates"
    summary: "Official account: tighter bundle and tax checks, faster volume-backed calls, DEX paid plus rank on call cards."
    occurred_at: 2026-08-19T21:46:06Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-6
    type: company
    title: "Official account posted Medium piece on still building"
    summary: "Official account linked medium.com/@robindex/robindex-didnt-stop-building-0642ab32de72 on 14 Aug."
    occurred_at: 2026-08-14T18:00:53Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-7
    type: onchain
    title: "PonsLaunchFactory launchToken created ROBINDEX and V3 pool"
    summary: "Tx 0x262384a7… created PonsLauncherToken 0xd82f… and Uniswap v3 ROBINDEX/WETH 0xcC14… on 2026-08-04."
    occurred_at: 2026-08-04T13:23:42Z
    observed_at: 2026-09-03T02:50:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-11, R-13, R-14]
  - id: EVT-8
    type: company
    title: "Official account posted Welcome to Robindex hub"
    summary: "Official account: scanner, listings, trending, Telegram bot and safety tools at robindex.pro."
    occurred_at: 2026-08-04T10:16:32Z
    observed_at: 2026-09-03T02:52:00Z
    affected_fields: [product.mechanism, identity.domain, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-19]

receipts:
  - { id: R-1, publisher: Robindex, title: "About — Robindex", url: "https://robindex.pro/about", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-9, CLM-10, CLM-21, CLM-26, CLM-30], excerpt: "Robindex is the live token dex for Robinhood Chain (chain ID 4663). We scan Uniswap pools, cache logos and banners, rank tokens by volume and safety — and push trending calls to Telegram when something heats up. Background scan every 3 minutes via DexPaprika. Follow us @robindexpro. Bot @robindextrendingbot. Official $ROBINDEX contract is listed on the page." }
  - { id: R-2, publisher: Robindex, title: "Safety — Robindex", url: "https://robindex.pro/safety", published_at: null, accessed_at: 2026-09-03T02:40:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-23], excerpt: "Fake Robindex tokens. Only trust the official CA 0xd82f70F530AFf45b831d6eE17062B4E85395C6F3 — verify on Robindex or see About. Any other $ROBINDEX is not from us." }
  - { id: R-3, publisher: Robindex, title: "Token scanner — Robindex", url: "https://robindex.pro/scanner", published_at: null, accessed_at: 2026-09-03T02:41:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-6], excerpt: "Paste a contract — safety, market stats, holders, and live X / TG intel. Does not list the token. Pulling Dex · holders · TG · X · AI take. Scanner is free. Listing is separate — use List token to pin on Trending." }
  - { id: R-4, publisher: "@robindexpro", title: "X profile RobinDex — Automated Robinhood Token Scanner", url: "https://x.com/robindexpro", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-19, CLM-20, CLM-21, CLM-22, CLM-27, CLM-30], excerpt: "Display name RobinDex — Automated Robinhood Token Scanner. Bio: Your go-to DEX tracker for Robinhood Chain — live charts, market caps, and volume in real time. Ca: 0xd82f70f530aff45b831d6ee17062b4e85395c6f3. Website robindex.pro. Joined July 2026. 450 followers." }
  - { id: R-5, publisher: "@robindexpro", title: "Homepage ads are live on Robindex", url: "https://x.com/robindexpro/status/2095261495684681849", published_at: 2026-09-02T21:24:03Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-1], excerpt: "Homepage ads are live on Robindex. The current ad on the homepage is @BasedBot — free placement to show the format: full-width banner on desktop, taller strip on mobile, one click → their bot. From $99 / 12h · also 24h · 48h · 7 days. Scan · call · advertise — all in one place." }
  - { id: R-6, publisher: "@robindexpro", title: "Robindex Whale Chat", url: "https://x.com/robindexpro/status/2095182963788947640", published_at: 2026-09-02T16:11:59Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Robindex Whale Chat. Holding at least 1.5% (15,000,000 $ROBINDEX)? Join us to discuss future plans, marketing, and main targets. Access is verified automatically via Collab.Land." }
  - { id: R-7, publisher: "@robindexpro", title: "Verifying our token on Robinscan", url: "https://x.com/robindexpro/status/2095208453417398633", published_at: 2026-09-02T17:53:17Z, accessed_at: 2026-09-03T02:52:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-11, CLM-27, EVT-2], excerpt: "Verifying our token on Robinscan — code: Z2RC https://robinscan.io/token/0xd82f70f530aff45b831d6ee17062b4e85395c6f3" }
  - { id: R-8, publisher: "@DeGenWealth2", title: "ROBINDEX among Robinhood Chain pairs", url: "https://x.com/DeGenWealth2/status/2093325091366981955", published_at: 2026-08-28T13:09:28Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "They should deposit some percentage of that into the Robinhood chain and allocate some aswell to other protocols like $ROBINDEX, $CASHCAT and other mispriced pairs 0xd82f70f530aff45b831d6ee17062b4e85395c6f3" }
  - { id: R-9, publisher: "@robindexpro", title: "$Robindex Wednesday", url: "https://x.com/robindexpro/status/2090193616509788473", published_at: 2026-08-19T21:46:06Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-5], excerpt: "Today we pushed on a few things that matter: reading on-chain transfers and holder clusters, not just trusting a green score. We also improved tax checks — buy/sell tax surfaced clearly. On the product side: faster vol-backed calls from Dexes and launchpads, DEX paid + rank on call cards, scanner upgrades." }
  - { id: R-10, publisher: Robindex, title: "Robindex Didn’t Stop Building", url: "https://medium.com/@robindex/robindex-didnt-stop-building-0642ab32de72", published_at: 2026-08-14T00:00:00Z, accessed_at: 2026-09-03T02:50:00Z, kind: other, authority: primary, authenticity: unconfirmed, supports: [CLM-25, EVT-6], excerpt: "We want to build one of the best call bots in the space — with the highest-quality hit ratio we can achieve. That became Robindex Arena. Mike is constantly working on the bot, website, backend, fixes, testing and new features. Link in the post: https://x.com/mike_majestic." }
  - { id: R-11, publisher: Blockscout, title: "Address 0xd82f70…C6F3", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xd82f70F530AFf45b831d6eE17062B4E85395C6F3", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-7, CLM-9, CLM-30, EVT-7], excerpt: "hash 0xd82f70F530AFf45b831d6eE17062B4E85395C6F3 is_contract true is_verified true name PonsLauncherToken proxy_type null creator_address_hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB creation_transaction_hash 0x262384a723bf7205936631fcc4521c9e2ac088daf6c248afc0f9bb8bba853847. Nested token name ROBINDEX symbol ROBINDEX holders_count 238 total_supply 1000000000000000000000000000." }
  - { id: R-12, publisher: Blockscout, title: "Token 0xd82f70…C6F3", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xd82f70F530AFf45b831d6eE17062B4E85395C6F3", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-16, CLM-30], excerpt: "address_hash 0xd82f70F530AFf45b831d6eE17062B4E85395C6F3 name ROBINDEX symbol ROBINDEX decimals 18 holders_count 238 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-13, publisher: Blockscout, title: "Creation tx 0x262384a7…53847", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x262384a723bf7205936631fcc4521c9e2ac088daf6c248afc0f9bb8bba853847", published_at: 2026-08-04T13:23:42Z, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-8, CLM-24, EVT-7], excerpt: "timestamp 2026-08-04T13:23:42Z block 27657355 status ok method launchToken from 0x552d5fFC197A48bAE4fEF2550f0146d155794734 to PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB. params name ROBINDEX symbol ROBINDEX twitter https://x.com/robindexpro telegram https://t.me/robindexchat. UNI-V3-POS 579618 to PonsLaunchLocker." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xcC14…ddf4D UniswapV3Pool", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xcC14BF25919D57D8C365A47F3D59515C5D4ddf4D", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-24, EVT-7], excerpt: "hash 0xcC14BF25919D57D8C365A47F3D59515C5D4ddf4D is_contract true is_verified true name UniswapV3Pool creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA creation_transaction_hash 0x262384a723bf7205936631fcc4521c9e2ac088daf6c248afc0f9bb8bba853847." }
  - { id: R-15, publisher: Blockscout, title: "Address 0xA5aAb3…1feB PonsLaunchFactory", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", published_at: null, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8], excerpt: "hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB is_contract true is_verified true name PonsLaunchFactory." }
  - { id: R-16, publisher: Robinhood Chain RPC, title: "eth_getCode and PonsLauncherToken views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:55:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-7, CLM-8, CLM-17, CLM-24], excerpt: "eth_chainId 0x1237 block 0x329f5d9 (53081561). Token code 5274 bytes name ROBINDEX symbol ROBINDEX totalSupply 1e27 owner() revert deployer 0x552d5fFC…4734 launchFactory 0xA5aAb3F0…1feB liquidityPool 0xcC14BF25…ddf4D pairToken 0x0Bd7D308…AD73 poolFee 10000. socials twitter https://x.com/robindexpro telegram https://t.me/robindexchat." }
  - { id: R-17, publisher: DexScreener, title: "ROBINDEX token pairs on robinhood", url: "https://api.dexscreener.com/token-pairs/v1/robinhood/0xd82f70F530AFf45b831d6eE17062B4E85395C6F3", published_at: null, accessed_at: 2026-09-03T02:48:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-5, CLM-13, CLM-14, CLM-15, CLM-24], excerpt: "pairAddress 0xcC14BF25919D57D8C365A47F3D59515C5D4ddf4D dexId uniswap labels v3 base ROBINDEX quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73 priceUsd 0.00004522 liquidity.usd 21045.16 volume.h24 6983.97 fdv 44344 marketCap 44344. info.websites https://robindex.pro/ socials x.com/robindexpro t.me/robindexchat." }
  - { id: R-18, publisher: Blockscout, title: "Verified source PonsLauncherToken 0xd82f…C6F3", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0xd82f70F530AFf45b831d6eE17062B4E85395C6F3", published_at: 2026-08-04T15:27:13Z, accessed_at: 2026-09-03T02:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-17, CLM-29], excerpt: "file_path contracts/src/PonsLauncherToken.sol is_verified true is_fully_verified true. Constructor: name ROBINDEX symbol ROBINDEX description Your go-to DEX tracker for Robinhood Chain - live charts, market caps, and volume in real time. socials twitter https://x.com/robindexpro telegram https://t.me/robindexchat website empty. deployer_ 0x552d5fFC…4734 pairToken_ WETH poolFee_ 10000 supply_ 1e27 restrictionBlocks_ 2." }
  - { id: R-19, publisher: "@robindexpro", title: "Welcome to Robindex", url: "https://x.com/robindexpro/status/2084584264218140683", published_at: 2026-08-04T10:16:32Z, accessed_at: 2026-09-03T02:52:00Z, kind: announcement, authority: primary, authenticity: confirmed, supports: [CLM-1, EVT-8], excerpt: "Welcome to Robindex. Your all-in-one hub for the Robinhood Chain ecosystem. Token Scanner https://robindex.pro/scanner. Trending https://robindex.pro/. Safety Tools https://robindex.pro/safety. Robindex Bot https://t.me/robindextrendingbot. Trending channel https://t.me/robindextrending. Chat community t.me/robindexchat." }
  - { id: R-20, publisher: Robinscan, title: "ROBINDEX token page", url: "https://robinscan.io/token/0xd82f70F530AFf45b831d6eE17062B4E85395C6F3", published_at: null, accessed_at: 2026-09-03T02:52:00Z, kind: explorer, authority: onchain, authenticity: unconfirmed, supports: [CLM-11, EVT-2], excerpt: "Linked from @robindexpro as ROBINDEX (ROBINDEX) | Address 0xd82f70F5...85395C6F3 | Robinscan. Robinscan is a Robinhood Chain block explorer at robinscan.io / @robinscanio." }
  - { id: R-21, publisher: Telegram, title: "Robindex Trending", url: "https://t.me/robindextrending", published_at: null, accessed_at: 2026-09-03T02:53:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-28], excerpt: "Robindex Trending. 2 132 subscribers. 0xd82f70F530AFf45b831d6eE17062B4E85395C6F3. www.robindex.pro. https://x.com/robindexpro." }
  - { id: R-22, publisher: robindex.money, title: "Robindex — The on-chain index layer for tokenized stocks", url: "https://robindex.money", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-12], excerpt: "Robindex — The on-chain index layer for tokenized stocks. $RDEX does four jobs. Publishing a basket requires a 25,000 $RDEX curator stake. Not linked from robindex.pro this pass." }
  - { id: R-23, publisher: robindex.finance, title: "RobinDEX: the fully on-chain orderbook DEX", url: "https://robindex.finance", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-12], excerpt: "The fully on-chain orderbook DEX. Spot and Perps on Robinhood Chain. Follow RobinDEX on X https://x.com/RobinDEXFinance. 1,000,000,000 RBD. Fixed. Whitelist open." }
  - { id: R-24, publisher: robindex.online, title: "Robindex | P2P OTC desk for Robinhood Chain", url: "https://www.robindex.online/", published_at: null, accessed_at: 2026-09-03T02:54:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-12], excerpt: "Sell peer-to-peer. Escrow once, name your terms, and buyers fill you directly. 0.5% flat protocol fee. Launch Robindex /app. Phase 03 Next: smart contract launch." }
  - { id: R-25, publisher: "@robindexpro", title: "Named @Mike_Majestic as the coder", url: "https://x.com/robindexpro/status/2087915850841866739", published_at: 2026-08-13T14:55:05Z, accessed_at: 2026-09-03T02:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-25], excerpt: "Me and @Mike_Majestic have been in crypto for a few years now. Mike is a really good coder. He’s constantly working on something, adding new things to the bot, changing something on the website, fixing something, testing something." }

gaps:
  - { priority: P0, question: "Does $ROBINDEX have any on-chain utility for the scanner, ads, or Telegram bot, or is it only a Pons-launched ERC-20?", checked: "verified PonsLauncherToken source, About, scanner, X bio, 2026-09-03", next: "read /list-token and any fee or access-gated routes on robindex.pro; search the deployer EOA for other contracts" }
  - { priority: P1, question: "Are robindex.money, robindex.finance and robindex.online operated by the same accounts as robindex.pro?", checked: "opened those three sites; none linked from robindex.pro, constructor socials or @robindexpro bio this pass", next: "compare deployers, WHOIS, and whether @robindexpro ever linked those domains" }
  - { priority: P1, question: "Is there an audit whose scope matches PonsLauncherToken 0xd82f…C6F3?", checked: "robindex.pro /about /safety /audits, X account, Medium, 2026-09-03", next: "ask in public and record the answer as a claim" }
  - { priority: P2, question: "Does /create on robindex.pro deploy through Pons or another factory?", checked: "Welcome post lists https://robindex.pro/create; page not opened line by line, 2026-09-03", next: "open /create and match any factory address to census launchpads" }
  - { priority: P2, question: "Where is the source repository for the scanner app?", checked: "site, X bio, constructor website field empty, GitHub search for robindex.pro, 2026-09-03", next: "search GitHub for DexPaprika Robinhood scanner code and the @robindexpro / @Mike_Majestic orgs" }
---

# Robindex — research packet

## What it is

A live token scanner for Robinhood Chain: paste a 0x address for market stats, holders and a 0–99 safety score, or browse a DexPaprika board that ranks Uniswap pools every three minutes and posts volume spikes to Telegram. Users scan at robindex.pro or via the Telegram bot. The $ROBINDEX token is a Pons-launched ERC-20; this is not The Index and not Robinscan.

Themes: tooling

## Why it matters

The scanner is a Robinhood-native discovery surface: Uniswap v3 pool cards, paste-CA intel, and a Telegram call channel that already lists the official CA and site. $ROBINDEX trades on a live 1% ROBINDEX/WETH book created by PonsLaunchFactory. The name collides with The Index, Robinhood Index Vaults, Robinscan, and three other Robindex-branded sites.

## What could go wrong

The token is a PonsLauncherToken with a two-block launch window, then a plain ERC-20; verified source has no scanner, fee-split or treasury hook. LP NFT 579618 sits in PonsLaunchLocker. /safety names one official CA and says any other $ROBINDEX is not from the project. robindex.money, robindex.finance and robindex.online use the same word for different products.

## Product and mechanics

Robindex is a market scanner. The About page says a background DexPaprika scan every three minutes ranks Uniswap pools by volume and a 0–99 safety score, with Telegram posts when volume or milestones spike. /scanner takes a pasted 0x address for market stats, holders, X/TG intel and an AI read; listing on Trending is a separate flow. [claim R-1 R-3]

$ROBINDEX is a PonsLauncherToken created by PonsLaunchFactory.launchToken. Pair asset is WETH. Venue is Uniswap v3 pool 0xcC14…ddf4D at fee 10000. Constructor socials set twitter to https://x.com/robindexpro and telegram to https://t.me/robindexchat; website was empty. After restrictionBlocks (2) the token is a plain ERC-20. [verified R-13 R-16 R-18]

## Control and security

owner() on the token reverts. deployer() returns EOA 0x552d5fFC…4734, which sent the launchToken transaction and has empty code. launchFactory() is PonsLaunchFactory 0xA5aAb3F0…1feB. The launch transaction minted UNI-V3-POS 579618 to PonsLaunchLocker 0x736D7669…7F35. [verified R-13 R-16 R-18]

No audit report matching this bytecode was located on the site, X account or Medium. /audits points at Blockscout, DexScreener and GoPlus. [unknown]

## Team and provenance

@robindexpro lists robindex.pro and CA 0xd82f…C6F3. About, Safety and t.me/robindextrending list the same CA and handle. Display name on X is RobinDex. Constructor website was empty; the X website field is robindex.pro. [verified R-1 R-2 R-4 R-21]

The official account named @Mike_Majestic as the coder. Medium @robindex linked x.com/mike_majestic. No repository URL was located. [claim R-10 R-25]

## Economics and activity

DexScreener ROBINDEX/WETH Uniswap v3 at 2026-09-03T02:48Z: marketCap 44344 USD, fdv 44344 USD, volume.h24 6983.97 USD, liquidity.usd 21045.16. That liquidity figure is the pool, not a protocol TVL. [claim R-17]

Blockscout holders_count is 238. t.me/robindextrending listed 2132 subscribers. [claim R-12 R-21]

## Material risks

- The token has no on-chain scanner, fee or treasury function in verified source. [verified R-18]
- Official CA is 0xd82f…C6F3; /safety says any other $ROBINDEX is not from the project. Flag ca-collision. [claim R-2]
- robindex.money ($RDEX), robindex.finance ($RBD) and robindex.online (OTC) use the Robindex name without a site or constructor link this pass. Flag third-party-link. [claim R-22 R-23 R-24]
- Distinct from The Index, Robinhood Index Vaults, and Robinscan. [claim R-7 R-11]
- LP position 579618 is in PonsLaunchLocker. [verified R-13]
- No matching audit report was located. [unknown]

## Verification passes

- Receipts: robindex.pro, /about, /safety, /scanner, @robindexpro profile and posts, t.me/robindextrending, Medium, Blockscout token/pool/tx/source, RPC, DexScreener, robinscan.io token URL, and the three other Robindex domains were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-4 R-11 R-16 R-17]
- Numbers: 44344 is DexScreener marketCap/fdv for the ROBINDEX/WETH pair, not an all-chains total. 21045.16 is pair liquidity.usd. 238 is Blockscout holders_count. [claim R-12 R-17]
- Adversarial: the strongest contrary reading is that Robindex is The Index, an ERC-4626 index vault, or Robinscan. Contrary signals are domain, handle, leaf and the reproduced Pons token 0xd82f…C6F3; @robindexpro posted a Robinscan verify code for that token rather than claiming the explorer. [inference R-1 R-4 R-7 R-11]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census robindex, content/projects/robindex.yaml, content/pulled/robindex.yaml (token 0xd82f…C6F3, pair 0xcC14…ddf4D, pulled_at 2026-09-02T21:05:36Z), content/feed/robindex.yaml, content/sources/robindex.yaml, content/research/robindex.md, content/changelog/robindex.yaml, docs/templates/research-packet-v2.md and schema/packet.schema.json read before collection.
- Official: robindex.pro, /about, /safety, /scanner, /stats, /launchpads. t.me/robindextrending and t.me/robindexchat.
- Explorer: Blockscout api/v2 with a browser User-Agent. Token, token metadata, creation tx, pool, factory, smart-contract source, deployer EOA. RPC eth_chainId/eth_blockNumber/eth_getCode/eth_call at block 53081561.
- Third party: DexScreener token-pairs v1 robinhood. robinscan.io token URL from the official post. robindex.money, robindex.finance, www.robindex.online.
- X: @robindexpro profile, ads 2 Sep, Robinscan verify 2 Sep, whale chat 2 Sep, Wednesday 19 Aug, Medium 14 Aug, Welcome 4 Aug; @DeGenWealth2 28 Aug.
- Failed: RPC via Python urllib without a browser User-Agent returned HTTP 403; curl/Python with Chrome UA succeeded. /create not opened line by line. GitHub org not located. t.me/robindextrendingbot profile not opened beyond the About link.
- Time: collection 2026-09-03T02:25Z–2026-09-03T02:56Z.
