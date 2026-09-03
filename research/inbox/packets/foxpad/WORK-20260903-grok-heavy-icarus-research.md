---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: foxpad
name: FoxPad
packet_tier: seed
as_of: 2026-09-03T02:30:00Z
prior_packet: null
supersedes: null
owned_slugs: [foxpad]
allowed_paths:
  - research/inbox/packets/foxpad/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: FoxPad
  aliases: [FOXPad, "FOX Pad"]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://foxpad.app
  official_handle: "@FoxPad_RH"
  repository: "NULL — GitHub search foxpad robinhood returned 0 repos; foxpad.app, @FoxPad_RH bio, and @fox_onrh bio do not name a repository"
  possible_matches:
    - slug: noxa
      signals: [shared-deployer, other]
      contrary_signals:
        - "FOX 0x2103…9bf1 creator_address_hash is NOXA factory 0xD9eC…FccB (LaunchToken, 2026-07-10); FoxPad factory is 0xF8A5…F22C (2026-08-03)"
        - "Census NOXA is fun.noxa.eth.limo / @Noxa_Fi; FoxPad is foxpad.app / @FoxPad_RH"
        - "Keep both slugs; FOX is a culture token attached to the pad, not the pad"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "FoxPad factory 0xF8A5…F22C is not a Pons contract"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a separate bonding-curve pad"
        - "FoxPad domain is foxpad.app / @FoxPad_RH"
        - "No shared domain, handle, or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "pools.trade is Uniswap Labs' v4 LiquidityLauncher at pools.trade / @TradePools"
        - "FoxPad is a bonding-curve pad that graduates into Uniswap v3"
        - "No shared domain, handle, or reproduced address"
    - slug: lemon
      signals: [other]
      contrary_signals:
        - "Census Lemon is a separate launchpad slug"
        - "FoxPad is foxpad.app / @FoxPad_RH"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/bonding-curve
  secondary_leaves: []
  mechanism_tags: [bonding-curve, launchpad, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Factory 0xF8A5…F22C, protocolFeeVault 0xbAC5…b390 and swapRouter 0x546a…6ecE have non-empty code on 4663; 9 createLaunch txs and 8 TokenLaunched logs. Site JS and /create describe a 4.75 ETH public curve graduating into a locked 1% Uniswap v3 pool. Source unverified; owner() reverts. Census announced is below that bar. [R-1] [R-3] [R-5] [R-6] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6, CLM-21], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-10, CLM-15, CLM-16], note: "" }

links:
  - { kind: site, url: "https://foxpad.app", authenticity: confirmed }
  - { kind: app, url: "https://foxpad.app/create", authenticity: confirmed }
  - { kind: x, url: "https://x.com/FoxPad_RH", authenticity: confirmed }
  - { kind: x, url: "https://x.com/fox_onrh", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/fox_rh", authenticity: unconfirmed }
  - { kind: other, url: "https://robinhoodfox.com", authenticity: unconfirmed }

deployments:
  - label: FoxPad factory
    role: factory
    address:
      value: "0xF8A56574a3FaF246F3ECB896193f5d5D6F87F22C"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-5, R-6, R-8]
  - label: Protocol fee vault
    role: vault
    address:
      value: "0xbAC56372983e7269C8b5Fa83D8a6C5c6e0Bab390"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-7, R-8]
  - label: Swap router
    role: router
    address:
      value: "0x546a80f0bF76EDf37beA8BE7A074410565876ecE"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-8, R-25]
  - label: Token deployer
    role: other
    address:
      value: "0x44f26F1f27dC7ad35e08c6F64Bed522C19685E81"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-8, R-9]
  - label: FOX token (NOXA LaunchToken the pad fee split names)
    role: token
    address:
      value: "0x2103faA9D1762e27a716C61718b3aCf3Ec1F9bf1"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-11, R-12]

metrics:
  - { kind: market_cap, value: 1379793, currency: USD, as_of: 2026-09-03T02:12:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x2103faA9D1762e27a716C61718b3aCf3Ec1F9bf1 FOX/WETH Uniswap v3 pair marketCap (FOX culture token, not pad TVL)", class: claim, receipt_ids: [R-12] }
  - { kind: volume_24h, value: 250014.84, currency: USD, as_of: 2026-09-03T02:12:00Z, window: 24h, method: "DexScreener FOX/WETH Uniswap v3 pair 0x9C49…8685 volume.h24 (FOX token, not pad launch volume)", class: claim, receipt_ids: [R-12] }
  - { kind: holders, value: 4490, currency: null, as_of: 2026-09-03T02:08:00Z, window: point, method: "Blockscout API v2 token.holders_count on FOX 0x2103…9bf1", class: claim, receipt_ids: [R-10] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T02:06:00Z, receipt_ids: [R-8], result: "eth_blockNumber 0x329f604 (53081604). eth_getCode non-empty: factory 9003 bytes, protocolFeeVault 3606, swapRouter 4679, positionFeeLens 3127, tokenDeployer 7594, curveDeployer 24249, lockerDeployer 7217, FOX 4830, LITTLE JOHN 3756. Deployer 0x76aD47…FaBe2 code 0x. owner() on factory, vault and swapRouter execution reverted." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T02:10:00Z, receipt_ids: [R-5, R-6, R-7, R-9, R-10, R-11, R-23, R-24, R-26], result: "Blockscout API v2: factory is_contract true is_verified false, created 2026-08-03T16:21:53Z block 26902099 by EOA 0x76aD47…FaBe2. Vault created 16:21:44Z. 9 createLaunch (0x0bce1db2) txs to factory, last 2026-08-12T08:37:52Z; 8 TokenLaunched logs. LITTLE JOHN 0x610F…C0F3 creator tokenDeployer. FOX name LaunchToken / Robin Hood FOX, creator NOXA factory 0xD9eC…FccB, is_verified true, holders 4490." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T02:15:00Z, receipt_ids: [R-1, R-3, R-13], result: "@FoxPad_RH bio website is foxpad.app. foxpad.app JS chainId 4663 contracts.factory 0xf8a56574…f22c, protocolFeeVault 0xbac56372…b390, swapRouter 0x546a80f0…6ece, startBlock 26902003." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T02:12:00Z, receipt_ids: [R-12], result: "DexScreener FOX 0x2103…9bf1 chain robinhood: Uniswap v3 FOX/WETH pair 0x9C49…8685 liquidity.usd 184006.63 volume.h24 250014.84 marketCap 1379793; websites robinhoodfox.com; socials x.com/fox_onrh and t.me/fox_rh." }
  - { id: REP-5, method: document-scope, checked_at: 2026-09-03T02:16:00Z, receipt_ids: [R-2, R-4], result: "foxpad.app/legal/terms: bonding-curve launches that graduate to Uniswap V3; contracts permissionless, immutable, no owner or admin. /legal/token-policy: user-created tokens via permissionless contracts." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "1B-supply ERC-20; 750M sold on a public bonding curve; at 4.75 ETH the raise plus 250M reserved tokens open a locked 1% Uniswap v3 pool. Curve protocol fee 1% (creator 0%); graduation fee 3%; post-graduation FOXPad fee 0.50%. Token-side Uniswap fees burn; ETH-side LP fees pay the creator. Creation fee 0.002 ETH. Max wallet 2% for 1800s.", class: claim, observed_at: 2026-09-03T02:16:00Z, receipt_ids: [R-1, R-2, R-4, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://foxpad.app", class: verified, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-1, R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@FoxPad_RH", class: verified, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xF8A56574a3FaF246F3ECB896193f5d5D6F87F22C", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-3, R-5, R-6, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xbAC56372983e7269C8b5Fa83D8a6C5c6e0Bab390", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-3, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x546a80f0bF76EDf37beA8BE7A074410565876ecE", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-3, R-8, R-25], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-5, R-6, R-8, R-9, R-26], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/bonding-curve, class: claim, observed_at: 2026-09-03T02:16:00Z, receipt_ids: [R-1, R-2, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-10, field: relationship, value: "FOX 0x2103…9bf1 is a NOXA LaunchToken (Robin Hood / FOX) created 2026-07-10 via factory 0xD9eC…FccB. FoxPad site and @FoxPad_RH name 50% of pad fees as FOX Revenue Vault. Keep FOX as culture token, not a second pad slug.", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-1, R-10, R-11, R-14], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "FOX/WETH Uniswap v3 pair 0x9C49…8685 marketCap 1379793 USD, volume.h24 250014.84 USD, liquidity.usd 184006.63 at 2026-09-03T02:12:00Z. FOX token market, not pad TVL.", class: verified, observed_at: 2026-09-03T02:12:00Z, receipt_ids: [R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: "FOX holders_count 4490 on Blockscout at 2026-09-03T02:08:00Z", class: verified, observed_at: 2026-09-03T02:08:00Z, receipt_ids: [R-10], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: activity.status, value: "9 createLaunch txs to factory 0xF8A5…F22C between 2026-08-03T16:33:01Z and 2026-08-12T08:37:52Z; 8 TokenLaunched logs. Last located launch LITTLE JOHN 0x610F…C0F3. No later createLaunch in this pass.", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-9, R-26], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-14, field: "account.@FoxPad_RH.role", value: project, class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: "account.@FoxPad_RH.slug", value: foxpad, class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: control.owner, value: "owner() reverts on factory, protocolFeeVault and swapRouter. Terms: contracts have no owner or admin. Deployer 0x76aD47d75e8c69FB360276050E4D9496E69FaBe2 is an EOA (eth_getCode empty).", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-2, R-8, R-23], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report located on foxpad.app, /legal, @FoxPad_RH, @fox_onrh, or GitHub search this pass", class: unknown, observed_at: 2026-09-03T02:20:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@fox_onrh.role", value: project, class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@fox_onrh.slug", value: foxpad, class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-15, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@fox_onrh.note", value: "Bio is the FOX culture-token account (TG t.me/fox_rh). Census lists this handle on slug foxpad. Pad handle confirmed as @FoxPad_RH via foxpad.app in that bio.", class: claim, observed_at: 2026-09-03T02:15:00Z, receipt_ids: [R-13, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x44f26F1f27dC7ad35e08c6F64Bed522C19685E81", class: verified, observed_at: 2026-09-03T02:10:00Z, receipt_ids: [R-3, R-8, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: "account.@fox_onrh__.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-18, R-29], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@foxon_rh.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-18, R-30], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: product.mechanism, value: "JS constants foxBps 5000 / operationsBps 5000. Revenue page: 50% FOX Revenue Vault funds $FOX buybacks executed manually; no automatic buyback in the contracts.", class: claim, observed_at: 2026-09-03T02:16:00Z, receipt_ids: [R-4, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.alias, value: FOXPad, class: claim, observed_at: 2026-09-03T02:05:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "Last located @FoxPad_RH post in this pass is 2026-08-05; @fox_onrh continued posting through 2026-09-03. Last factory createLaunch 2026-08-12.", class: claim, observed_at: 2026-09-03T02:18:00Z, receipt_ids: [R-22, R-26], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "FOX/WETH Uniswap v3 pair shows $184k liquidity"
    summary: "DexScreener FOX/WETH v3 pair 0x9C49…8685: liquidity $184,007, 24h volume $250,015, market cap $1.38M."
    occurred_at: 2026-09-03T02:12:00Z
    observed_at: 2026-09-03T02:12:00Z
    affected_fields: [economics.metric, relationship]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-2
    type: company
    title: "@fox_onrh posts 6.74% of FOX burned"
    summary: "@fox_onrh posted 6.74% of FOX is burned and the dead wallet is the #1 holder."
    occurred_at: 2026-08-31T19:31:41Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-3
    type: ct
    title: "@RHDaily__ lists FOX among biggest RH projects"
    summary: "On 29 Aug 2026 @RHDaily__ included $FOX in a Biggest projects on Robinhood list."
    occurred_at: 2026-08-29T07:18:33Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-4
    type: onchain
    title: "LITTLE JOHN created through FoxPad factory"
    summary: "createLaunch tx 0x226d7c0a… minted LITTLE JOHN 0x610F…C0F3 via tokenDeployer; last factory launch this pass."
    occurred_at: 2026-08-12T08:37:52Z
    observed_at: 2026-09-03T02:10:00Z
    affected_fields: [activity.status, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-26]
  - id: EVT-5
    type: company
    title: "@FoxPad_RH posts foxpad.app is live"
    summary: "@FoxPad_RH posted The most advanced launchpad is finally here and linked foxpad.app."
    occurred_at: 2026-08-05T11:22:53Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [communications.status, lifecycle]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-6
    type: company
    title: "@FoxPad_RH: FoxPad is LIVE on Robinhood Chain"
    summary: "@FoxPad_RH posted FoxPad is LIVE, 20% referral fees, 50% of platform fees go back to $FOX. @fox_onrh quoted it."
    occurred_at: 2026-08-03T17:30:44Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [lifecycle, product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-14, R-15]
  - id: EVT-7
    type: onchain
    title: "FoxPad factory deployed on Robinhood Chain"
    summary: "Factory 0xF8A5…F22C created 2026-08-03T16:21:53Z by EOA 0x76aD47…FaBe2; vault 9 seconds earlier."
    occurred_at: 2026-08-03T16:21:53Z
    observed_at: 2026-09-03T02:10:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5, R-6, R-7]
  - id: EVT-8
    type: company
    title: "@FoxPad_RH introduces bonding-curve pad"
    summary: "@FoxPad_RH posted a bonding-curve launchpad for Robinhood Chain; @fox_onrh said testnet was live and mainnet soon."
    occurred_at: 2026-07-27T17:19:06Z
    observed_at: 2026-09-03T02:18:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-27]

receipts:
  - { id: R-1, publisher: FoxPad, title: "FOXPad homepage", url: "https://foxpad.app/", published_at: null, accessed_at: 2026-09-03T02:05:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-8, CLM-9, CLM-10, CLM-25], excerpt: "FOXPad — Launch the next legend on Robinhood Chain. Create and trade tokens through a transparent bonding curve. Fair launch, automatic graduation and onchain creator rewards. Every graduated FOXPad token becomes deflationary. Token-side Uniswap fees are permanently burned. FOX Revenue Vault 50% FOXPad Operations 50%. FOXPad is an independent permissionless launch platform built by the FOX ecosystem for Robinhood Chain. FOXPad is not Robinhood Markets, Inc. and is not endorsed by Robinhood." }
  - { id: R-2, publisher: FoxPad, title: "Terms of Service", url: "https://foxpad.app/legal/terms", published_at: 2026-07-25T00:00:00Z, accessed_at: 2026-09-03T02:16:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-16], excerpt: "Last updated: July 25, 2026. FOXPad is a web interface to open-source, autonomous smart contracts deployed on Robinhood Chain that allow users to create and trade tokens through bonding curves, and that migrate (graduate) token liquidity to third-party decentralized exchange contracts (Uniswap V3). The contracts are permissionless, immutable, have no owner or admin, and operate independently of the Interface." }
  - { id: R-3, publisher: FoxPad, title: "App JS chain 4663 contract map", url: "https://foxpad.app/_next/static/chunks/4465-adcabb550804b8a8.js", published_at: null, accessed_at: 2026-09-03T02:07:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-9, CLM-21], excerpt: "JSON.parse chainId 4663 deployedAt 1785200000000 contracts protocolFeeVault 0xbac56372983e7269c8b5fa83d8a6c5c6e0bab390 factory 0xf8a56574a3faf246f3ecb896193f5d5d6f87f22c swapRouter 0x546a80f0bf76edf37bea8be7a074410565876ece positionFeeLens 0xb2c60177360c9a69bdda7832bea0fd4735b328bd tokenDeployer 0x44f26f1f27dc7ad35e08c6f64bed522c19685e81 curveDeployer 0xb9d1045b50d19ed635f6633a77af2deae14bc593 lockerDeployer 0xaf033a8c51986709992b7a88ae295b8a63aa1f80 startBlock 26902003." }
  - { id: R-4, publisher: FoxPad, title: "App JS fee constants", url: "https://foxpad.app/_next/static/chunks/3446-ee7d6d140a38a093.js", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-24], excerpt: "totalSupply 1000000000e18 curveAllocation 750000000e18 lpReserve 250000000e18 realEthTarget 0x41eb63d55b1b0000 (4.75 ETH) graduationFeeBps 300 curveFeeBps 100 creatorCurveFeeBps 0 creationFeeWei 2000000000000000 postGraduationFeeBps 50 uniswapFeeTier 10000 maxWalletBps 200 maxWalletDurationSeconds 1800 foxBps 5000 operationsBps 5000." }
  - { id: R-5, publisher: Blockscout, title: "Address 0xF8A5…F22C factory", url: "https://robinhoodchain.blockscout.com/address/0xF8A56574a3FaF246F3ECB896193f5d5D6F87F22C", published_at: null, accessed_at: 2026-09-03T02:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, CLM-9, EVT-7], excerpt: "API v2: hash 0xF8A56574a3FaF246F3ECB896193f5d5D6F87F22C is_contract true is_verified false creator_address_hash 0x76aD47d75e8c69FB360276050E4D9496E69FaBe2 creation_transaction_hash 0xb3bfcda556c8f00b1418ac5d8eebcd6cd98dedff53ee92f108f0293c2174950b creation_status success." }
  - { id: R-6, publisher: Blockscout, title: "Factory creation tx 0xb3bfcda5…", url: "https://robinhoodchain.blockscout.com/tx/0xb3bfcda556c8f00b1418ac5d8eebcd6cd98dedff53ee92f108f0293c2174950b", published_at: 2026-08-03T16:21:53Z, accessed_at: 2026-09-03T02:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, EVT-7], excerpt: "timestamp 2026-08-03T16:21:53.000000Z status ok result success block_number 26902099 from 0x76aD47d75e8c69FB360276050E4D9496E69FaBe2 to null created_contract 0xF8A56574a3FaF246F3ECB896193f5d5D6F87F22C." }
  - { id: R-7, publisher: Blockscout, title: "Address 0xbAC5…b390 protocolFeeVault", url: "https://robinhoodchain.blockscout.com/address/0xbAC56372983e7269C8b5Fa83D8a6C5c6e0Bab390", published_at: null, accessed_at: 2026-09-03T02:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, EVT-7], excerpt: "API v2: hash 0xbAC56372983e7269C8b5Fa83D8a6C5c6e0Bab390 is_contract true is_verified false creator 0x76aD47d75e8c69FB360276050E4D9496E69FaBe2 creation_transaction_hash 0x23780d74a2a8574dd8277857b1033a4fc3b670cdcfd76d896ddb3d01d8cf8f20 timestamp 2026-08-03T16:21:44Z coin_balance 44526437727231168 wei." }
  - { id: R-8, publisher: Robinhood Chain RPC, title: "eth_getCode pad contracts and owner()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T02:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-6, CLM-7, CLM-16, CLM-21], excerpt: "eth_blockNumber 0x329f604 (53081604). eth_getCode factory 9003 bytes, vault 3606, swapRouter 4679, tokenDeployer 7594, FOX 4830, LITTLE JOHN 3756. Deployer 0x76aD47…FaBe2 code 0x. eth_call owner() 0x8da5cb5b on factory, vault and swapRouter: execution reverted." }
  - { id: R-9, publisher: Blockscout, title: "LITTLE JOHN 0x610F…C0F3", url: "https://robinhoodchain.blockscout.com/address/0x610Fe7015E8F7864EB244857c7c5D97B9903C0F3", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-21, EVT-4], excerpt: "API v2: hash 0x610Fe7015E8F7864EB244857c7c5D97B9903C0F3 name LITTLE JOHN is_contract true is_verified false creator_address_hash 0x44f26F1f27dC7ad35e08c6F64Bed522C19685E81 creation_transaction_hash 0x226d7c0a06f411e8815efadcb4cec480ab67bac0af558eaa4234b9f06b244e48 token name LITTLE JOHN symbol LITTLE holders_count 2 total_supply 1e27. Tx to factory method 0x0bce1db2 at 2026-08-12T08:37:52Z from 0x5bE71453…2C19." }
  - { id: R-10, publisher: Blockscout, title: "FOX 0x2103…9bf1 LaunchToken", url: "https://robinhoodchain.blockscout.com/address/0x2103faA9D1762e27a716C61718b3aCf3Ec1F9bf1", published_at: null, accessed_at: 2026-09-03T02:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-12], excerpt: "API v2: hash 0x2103faA9D1762e27a716C61718b3aCf3Ec1F9bf1 name LaunchToken is_contract true is_verified true creator_address_hash 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB creation_transaction_hash 0x0b5a7dd486c48c72fce2d5e1fd9b41b6fec1f868af6f442674f578904d268c5e token name Robin Hood symbol FOX holders_count 4490 total_supply 1e27." }
  - { id: R-11, publisher: Blockscout, title: "FOX creation tx 0x0b5a7dd4…", url: "https://robinhoodchain.blockscout.com/tx/0x0b5a7dd486c48c72fce2d5e1fd9b41b6fec1f868af6f442674f578904d268c5e", published_at: 2026-07-10T22:29:23Z, accessed_at: 2026-09-03T02:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "timestamp 2026-07-10T22:29:23.000000Z status ok block_number 6439983 from 0x0BC58432d3347903e529F8fAdE45988C91129269 to 0xD9eC2db5f3D1b236843925949fe5bd8a3836FCcB method 0x686399cb." }
  - { id: R-12, publisher: DexScreener, title: "FOX token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x2103faA9D1762e27a716C61718b3aCf3Ec1F9bf1", published_at: null, accessed_at: 2026-09-03T02:12:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, EVT-1], excerpt: "pair 0x9C49F21aDDa14AF527BC56C2a8fAb854F6248685 chainId robinhood dexId uniswap labels v3 baseToken FOX 0x2103…9bf1 quoteToken WETH; priceUsd 0.001479 liquidity.usd 184006.63 volume.h24 250014.84 fdv 1379793 marketCap 1379793. info.websites https://robinhoodfox.com socials x.com/fox_onrh t.me/fox_rh." }
  - { id: R-13, publisher: "@FoxPad_RH", title: "FoxPad profile", url: "https://x.com/FoxPad_RH", published_at: null, accessed_at: 2026-09-03T02:15:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-14, CLM-15, CLM-20], excerpt: "Display name FoxPad, handle @FoxPad_RH. Bio: The home of Robinhood Chain launches. 50% of protocol fees fuel $FOX buybacks. Website http://foxpad.app. Joined 2026-07-24. Followers 281." }
  - { id: R-14, publisher: "@FoxPad_RH", title: "FoxPad is LIVE on Robinhood Chain", url: "https://x.com/FoxPad_RH/status/2084331145882153160", published_at: 2026-08-03T17:30:44Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-3, CLM-10, CLM-15, EVT-6], excerpt: "FoxPad is LIVE on Robinhood Chain. https://foxpad.app/ Launch. Trade. Earn. Earn 20% in referral fees. 50% of platform fees go back to $FOX." }
  - { id: R-15, publisher: "@fox_onrh", title: "FoxPad is now live", url: "https://x.com/fox_onrh/status/2084331586829349091", published_at: 2026-08-03T17:32:29Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-19, EVT-6], excerpt: "FoxPad is now live. A new growth engine for the $FOX ecosystem — with 50% of platform fees going back to $FOX. Launch. Trade. Earn. http://foxpad.app Quotes @FoxPad_RH." }
  - { id: R-16, publisher: "@fox_onrh", title: "6.74% of FOX is now burned forever", url: "https://x.com/fox_onrh/status/2094508440949260761", published_at: 2026-08-31T19:31:41Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-2], excerpt: "6.74% of $FOX is now burned forever. The dead wallet is officially our #1 holder. That supply is permanently removed from circulation. More volume. More burns. Less $FOX." }
  - { id: R-17, publisher: "@RHDaily__", title: "Biggest projects on Robinhood", url: "https://x.com/RHDaily__/status/2093599166178173408", published_at: 2026-08-29T07:18:33Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "Biggest projects on Robinhood. Which token's pumping the hardest? $AI $CASHCAT $CHUMP $FOX $PAWHOOD $GOOD $JUGGERNAUT $HMM $TENDIES $BRODIE" }
  - { id: R-18, publisher: "@fox_onrh", title: "FOX on RH profile", url: "https://x.com/fox_onrh", published_at: null, accessed_at: 2026-09-03T02:15:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-18, CLM-19, CLM-20, CLM-22, CLM-23], excerpt: "Display name FOX on RH, handle @fox_onrh. Bio: Official X account of $FOX, a project on Robinhood Chain. TG: t.me/fox_rh. Followers 3195. Joined 2026-04-22." }
  - { id: R-19, publisher: FoxPad, title: "Create a meme", url: "https://foxpad.app/create", published_at: null, accessed_at: 2026-09-03T02:06:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8], excerpt: "Public bonding curve. 75% of supply (750M) sold on a deterministic public curve — anyone can buy at the same price. Deploys a real ERC-20 with its own bonding curve. Graduates to Uniswap at 4.75 ETH — LP permanently locked. Creator LP rewards after graduation from the ETH side of Uniswap fees." }
  - { id: R-20, publisher: FoxPad, title: "FOX Fuel / revenue", url: "https://foxpad.app/revenue", published_at: null, accessed_at: 2026-09-03T02:06:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-24], excerpt: "FOX Revenue Vault 50% / FOXPad Operations 50%. Buybacks are executed manually by the team from the FOX Revenue Vault — there is no automatic buyback in the contracts. Curve trades pay 1% protocol (creators earn 0%); a 3% graduation fee is taken once; post-graduation swaps pay 0.50% FOXPad." }
  - { id: R-21, publisher: FoxPad, title: "User-Created Token Policy", url: "https://foxpad.app/legal/token-policy", published_at: null, accessed_at: 2026-09-03T02:16:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "All tokens launched through FOXPad are created by independent users via permissionless smart contracts. FOXPad does not create, issue, review, approve, endorse, or audit user tokens; appearing on the Interface is automatic and is not a mark of quality or legitimacy." }
  - { id: R-22, publisher: "@FoxPad_RH", title: "The most advanced launchpad is finally here", url: "https://x.com/FoxPad_RH/status/2084963345812111462", published_at: 2026-08-05T11:22:53Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-26, EVT-5], excerpt: "The most advanced launchpad is finally here. https://foxpad.app/" }
  - { id: R-23, publisher: Blockscout, title: "Deployer 0x76aD47…FaBe2", url: "https://robinhoodchain.blockscout.com/address/0x76aD47d75e8c69FB360276050E4D9496E69FaBe2", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "API v2: hash 0x76aD47d75e8c69FB360276050E4D9496E69FaBe2 is_contract false is_verified false creator_address_hash null. RPC eth_getCode 0x." }
  - { id: R-24, publisher: Blockscout, title: "Token deployer 0x44f26F…5E81", url: "https://robinhoodchain.blockscout.com/address/0x44f26F1f27dC7ad35e08c6F64Bed522C19685E81", published_at: null, accessed_at: 2026-09-03T02:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "API v2: hash 0x44f26F1f27dC7ad35e08c6F64Bed522C19685E81 is_contract true is_verified false creator 0x76aD47d75e8c69FB360276050E4D9496E69FaBe2 creation_transaction_hash 0xd72794e2cc321ae0e72ab3c099d89bd71b4c8aff942e75bbc7165e103e38a652 timestamp 2026-08-03T16:21:46Z." }
  - { id: R-25, publisher: Blockscout, title: "Swap router 0x546a…6ecE", url: "https://robinhoodchain.blockscout.com/address/0x546a80f0bF76EDf37beA8BE7A074410565876ecE", published_at: null, accessed_at: 2026-09-03T02:09:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "API v2: hash 0x546a80f0bF76EDf37beA8BE7A074410565876ecE is_contract true is_verified false creator 0x76aD47d75e8c69FB360276050E4D9496E69FaBe2 creation_transaction_hash 0x9263c2a977f1bc0b9db15d111f4ff4e86bda4f511afd1ff9584934ab446d3af9 timestamp 2026-08-03T16:21:56Z." }
  - { id: R-26, publisher: Blockscout, title: "Factory logs and createLaunch txs", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xF8A56574a3FaF246F3ECB896193f5d5D6F87F22C/logs", published_at: null, accessed_at: 2026-09-03T02:10:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-13, CLM-26, EVT-4], excerpt: "8 TokenLaunched logs (topic0 0x36e17bb7…d0d3), newest token 0x610fe701…c0f3 tx 0x226d7c0a… block 34389329. Transactions filter=to: 9 items all method 0x0bce1db2, first 2026-08-03T16:33:01Z last 2026-08-12T08:37:52Z, next_page_params null." }
  - { id: R-27, publisher: "@FoxPad_RH", title: "Introducing FoxPad", url: "https://x.com/FoxPad_RH/status/2081791502808694803", published_at: 2026-07-27T17:19:06Z, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-8], excerpt: "Introducing FoxPad. The most advanced launchpad built for Robinhood Chain. Launch through a purpose-built bonding curve. Discover opportunities early. Follow top creators and traders. Quoted by @fox_onrh: FoxPad is already live on testnet. Its official mainnet launch is coming very soon." }
  - { id: R-28, publisher: Robin Hood FOX, title: "robinhoodfox.com homepage", url: "https://robinhoodfox.com/", published_at: null, accessed_at: 2026-09-03T02:17:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-10], excerpt: "title Robin Hood – $FOX | Community Fan Memecoin on Robinhood Chain. Independent fan token — not affiliated with or endorsed by Robinhood. No 0x address in the HTML this pass." }
  - { id: R-29, publisher: "@fox_onrh__", title: "Robin Hood - $FOX profile", url: "https://x.com/fox_onrh__", published_at: null, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-22], excerpt: "Display name Robin Hood - $FOX, handle @fox_onrh__. Bio: The Fox of the Trenches. Stealing from Wall Street. Giving back to the people. Followers 517. Neighbor handle to census @fox_onrh." }
  - { id: R-30, publisher: "@foxon_rh", title: "FOX on RH SUPPORT profile", url: "https://x.com/foxon_rh", published_at: null, accessed_at: 2026-09-03T02:18:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23], excerpt: "Display name FOX on RH SUPPORT, handle @foxon_rh. Bio: Official X account of $FOX, a project on Robinhood Chain. TG link in bio. Followers 44. Same bio stem as @fox_onrh." }

gaps:
  - { priority: P0, question: "If owner() reverts, who can move ETH from protocolFeeVault 0xbAC5…b390 (0.0445 ETH at read) for the named manual FOX buybacks?", checked: "owner() revert via RPC; terms say no owner or admin; revenue page says buybacks are manual; vault source unverified, 2026-09-03", next: "read unverified bytecode or a withdraw/split function once source is verified" }
  - { priority: P0, question: "Why 9 createLaunch txs and 8 TokenLaunched logs?", checked: "Blockscout txs filter=to 9 items method 0x0bce1db2, logs 8 items, next_page_params null", next: "open the first createLaunch receipt for a missing event or a revert-after-call" }
  - { priority: P1, question: "Are factory/vault/router source-verifiable, and do they match the IFoxPadFactory ABI in the JS?", checked: "is_verified false on all pad contracts this pass", next: "upload or find the compiler settings; eth_call allTokensLength once selector is known" }
  - { priority: P1, question: "What are live tokens, 24h pad volume, and DEX unlocks on foxpad.app (client-fetched; SSR empty)?", checked: "homepage fields volume24hWei tokensLaunched graduations protocolRevenueWei are null in SSR HTML", next: "identify the FOXPad API host and GET the stats row" }
  - { priority: P2, question: "Is there a public repository for the contracts the terms call open-source?", checked: "GitHub search foxpad robinhood 0 repos; site, bios, 2026-09-03", next: "search IFoxPadFactory and TokenLaunched topic0 on GitHub" }
  - { priority: P2, question: "Do t.me/fox_rh and robinhoodfox.com cross-link foxpad.app?", checked: "TG URL from @fox_onrh bio; robinhoodfox.com HTML had no 0x and no foxpad string this pass", next: "open the Telegram profile and any CA/docs page on robinhoodfox.com" }
---

# FoxPad — research packet

## What it is

Bonding-curve launchpad on Robinhood Chain. A user deploys a 1 billion-supply ERC-20, sells 750 million on a public curve, and at 4.75 ETH the raise plus 250 million reserved tokens open a locked 1% Uniswap v3 pool. Token-side pool fees burn; the ETH side pays the creator. The interface is foxpad.app. @FoxPad_RH posted the mainnet live date. Half of protocol fees are labeled FOX Revenue Vault.

Themes: launchpad, memecoin

## Why it matters

The pad is a native Robinhood Chain launch venue whose fee split is named against $FOX, a culture token that itself launched on NOXA. Factory 0xF8A5…F22C has taken 9 createLaunch calls. FOX still trades on Uniswap v3; that book is the mascot token, not pad TVL.

## What could go wrong

Pad contract source is unverified and `owner()` reverts, so the withdraw path on the fee vault is unread. The revenue page says FOX buybacks are manual. Nine createLaunch transactions produced eight TokenLaunched logs. Last factory launch in this pass is 12 Aug 2026.

## Product and mechanics

A create flow deploys a 1B ERC-20. 750M sells on a public bonding curve; 250M is reserved for the Uniswap v3 pool. Graduation target is 4.75 ETH. Curve protocol fee is 1% (creator 0% on the curve); graduation fee 3%; post-graduation FOXPad fee 0.50%; Uniswap fee tier 1%. Token-side LP fees burn; ETH-side LP fees pay the creator. Referral is posted as 20%. [claim R-1 R-4 R-19 R-20]

JS maps chain 4663 to factory 0xF8A5…F22C, protocolFeeVault 0xbAC5…b390, swapRouter 0x546a…6ecE, tokenDeployer 0x44f26F…5E81. [claim R-3]

## Control and security

`owner()` reverts on factory, vault and router. Terms state the contracts have no owner or admin. Deployer 0x76aD47…FaBe2 is an externally owned account. All pad contracts are unverified on Blockscout. No audit report was located. [verified R-2 R-8 R-23]

The revenue page states buybacks from the FOX Revenue Vault are executed manually and that no automatic buyback sits in the contracts. [claim R-20]

## Team and provenance

@FoxPad_RH lists foxpad.app and posted the 3 Aug 2026 live notice. @fox_onrh is the FOX token account in the current bio and quoted that live post; census still files @fox_onrh on slug foxpad. Neighbor handles @fox_onrh__ and @foxon_rh share FOX naming. No repository URL was located. Telegram t.me/fox_rh is on the FOX bio, not confirmed as the pad's room. [verified R-13 R-14 R-18]

FOX 0x2103…9bf1 is a NOXA LaunchToken created 2026-07-10, before the FoxPad factory. Keep slug noxa separate. [verified R-10 R-11]

## Economics and activity

FOX/WETH Uniswap v3 pair 0x9C49…8685: market cap 1379793 USD, 24h volume 250014.84 USD, liquidity 184006.63 USD. That is the FOX token, not pad TVL. FOX holders 4490. Protocol fee vault ETH balance 44526437727231168 wei (~0.0445 ETH). [claim R-7 R-10 R-12]

Nine createLaunch transactions hit the factory between 3 Aug and 12 Aug 2026. Eight TokenLaunched logs. Last token LITTLE JOHN 0x610F…C0F3, 2 holders, no DexScreener pair this pass. [verified R-9 R-26]

## Material risks

- Pad bytecode is unverified; `owner()` reverts, so the fee-vault withdraw path is unread. [verified R-5 R-8]
- FOX buybacks are described as manual. [claim R-20]
- FOX market figures are the NOXA-launched culture token, not FoxPad launch TVL. [verified R-10 R-12]
- Last factory launch in this pass is 12 Aug 2026. [verified R-26]
- No audit report was located. [unknown]

## Verification passes

- Receipts: foxpad.app, /create, /revenue, /legal/terms, /legal/token-policy, JS contract map and fee constants, Blockscout factory/vault/router/tokenDeployer/FOX/LITTLE JOHN/create txs/logs, RPC, DexScreener, @FoxPad_RH, @fox_onrh, @RHDaily__, robinhoodfox.com, and neighbor handles were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 1379793 / 250014.84 / 184006.63 are the FOX/WETH Uniswap v3 pair, not a pad chain-slice TVL. Holders 4490 is FOX. 9 txs / 8 logs are factory activity. [claim R-12] [verified R-10 R-26]
- Adversarial: the strongest contrary reading is that FoxPad is only a front for the FOX meme and has no distinct contracts. Factory 0xF8A5…F22C, TokenLaunched logs, LITTLE JOHN creator = tokenDeployer, and @FoxPad_RH ↔ foxpad.app argue a live pad; FOX remains a NOXA LaunchToken. [inference R-5 R-9 R-10 R-13]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census foxpad, content/projects/foxpad.yaml, content/pulled/foxpad.yaml (FOX 0x2103…9bf1, pair 0x9C49…8685 at 2026-09-02T21:05:36Z), content/sources/foxpad.yaml, content/research/foxpad.md (stub), content/changelog/foxpad.yaml, no content/feed/foxpad.yaml. docs/templates/research-packet-v2.md and schema/packet.schema.json read before collection.
- Official: foxpad.app, /create, /discover, /revenue, /legal/terms, /legal/token-policy, /legal/risk, JS chunks 4465 and 3446, robinhoodfox.com.
- Explorer: Blockscout API v2 with Chrome User-Agent. Factory, vault, router, tokenDeployer, deployer EOA, FOX, LITTLE JOHN, create txs, logs. RPC eth_getCode / eth_call owner() at block 53081604.
- Third party: DexScreener latest/dex/tokens FOX; Llama protocol/foxpad 400; GitHub search foxpad robinhood 0 repos.
- X: @FoxPad_RH profile, 27 Jul intro, 3 Aug LIVE, 5 Aug live-here; @fox_onrh profile, 3 Aug quote, 31 Aug burn; @RHDaily__ 29 Aug list; neighbor @fox_onrh__ and @foxon_rh.
- Failed: Llama foxpad/fox-pad/fox 400. robinhoodfox.com HTML had no CA. FOXPad live-token API host not identified (SSR stats null). t.me/fox_rh not opened. owner() selector 0x8da5cb5b reverted (no keccak library for allTokensLength this pass).
- Time: collection 2026-09-03T02:00Z–2026-09-03T02:30Z.
