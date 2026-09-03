---
# Packet v2 (docs/research-system.md §5). Seed with full-shaped frontmatter.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: safehood
name: Safehood
packet_tier: seed
as_of: 2026-09-03T04:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [safehood]
allowed_paths:
  - research/inbox/packets/safehood/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Safehood
  aliases: [Safehood.fun]
  symbols: []
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.safehood.fun
  official_handle: "@_safehood"
  repository: https://github.com/opengrid1/Launchpad
  possible_matches:
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a bonding-curve pad at @hoodfunfamily; Safehood is a Uniswap v3 pool launchpad at @_safehood / safehood.fun"
        - "hood.fun launch contract in Bitquery is 0x5fcc1df0…452c; Safehood GitHub factory is 0xe893ca05…4900"
        - "No shared domain, handle, or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Census pools.trade is Uniswap Labs' Uniswap v4 pad at pools.trade / @TradePools; factory 0x000000e2…d49b"
        - "Safehood is an independent Uniswap v3 pad at @_safehood; factory 0xe893ca05…4900"
        - "No shared domain, handle, repository, or reproduced address"
    - slug: meridian
      signals: [other]
      contrary_signals:
        - "Census Meridian is meridian.xyz / @meridiandotxyz perpetuals and prediction"
        - "LaunchToken 0x5e64880D…2DAD (MRD1 / Meridian One) was created by Safehood TokenFactory 0x5Cf777e1…6364; metadata names Meridian as a Uniswap v3 launchpad"
        - "Keep slug meridian; do not merge"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: []
  mechanism_tags: [launchpad, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "GitHub-claimed Launchpad 0xe893…4900 is a verified contract with non-empty code on chain 4663; TokenFactory is verified; five createToken calls. @_safehood lists safehood.fun; GET of the site returned Vercel DEPLOYMENT_NOT_FOUND. FeeDistributor and Treasury have code but explorer is_verified false. Last @_safehood post 2026-07-16. [R-1] [R-3] [R-9] [R-11] [R-22]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-8], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-11], note: "" }
  citable:           { status: pass, claim_ids: [CLM-3, CLM-9], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-14, CLM-18, CLM-19, CLM-23, CLM-24], note: "" }

links:
  - { kind: site, url: "https://www.safehood.fun", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/_safehood", authenticity: confirmed }
  - { kind: github, url: "https://github.com/opengrid1/Launchpad", authenticity: confirmed }

deployments:
  - label: Launchpad
    role: factory
    address:
      value: "0xe893ca05D3F1235de22630504DcEa9e029294900"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-9, R-11, R-15]
  - label: TokenFactory
    role: factory
    address:
      value: "0x5Cf777e19a6CD4B10c3Aa317a2B8E8bCC5F46364"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-11, R-12]
  - label: FeeDistributor
    role: other
    address:
      value: "0x8E0b175a36ee0854Cc2dC7AeC4B3f90857A059ca"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-11, R-13]
  - label: Treasury
    role: other
    address:
      value: "0xD401Ed3C128eaE756323e7EAE27B40407c7d499B"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-11, R-14]
  - label: Safehood.fun (SAFEHOOD) pad token
    role: token
    address:
      value: "0x262b60Af42c46bD09c00069Cd0dCb2Ae0093034B"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-18, R-19]

metrics: []

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:05:00Z, receipt_ids: [R-11], result: "eth_blockNumber 53082629. eth_getCode non-empty: Launchpad 19316 bytes, TokenFactory 6573, FeeDistributor 2135, Treasury 1980, MRD1 3353, 0x262b60… 2268. FEE_TIER 10000, TRADE_FEE_BPS 100, MAX_TX_BPS 200, MAX_WALLET_BPS 200, INITIAL_MCAP_USD 2000e8, graduationCapUsd 40000e8, tokenCount 5, totalLaunches 5, totalTradeVolumeWei 0.018e18, launchesPaused false, priceFeed 0x0. hasRole DEFAULT_ADMIN/LIQUIDITY_MANAGER/OPERATOR for deployer 0x7817…a846 = false; for 0x0315…5b60 = true. 0x0315 code 0x. MRD1 pool 0x8795…e077 feeTier 10000 poolLiquidity 0 positionLiquidity 0." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:00:00Z, receipt_ids: [R-9, R-10, R-12, R-13, R-14, R-15, R-16, R-17, R-18], result: "Blockscout API v2: 0xe893…4900 name Launchpad is_contract true is_verified true file_path contracts/Launchpad.sol compiler v0.8.26 created 2026-07-14T16:40:35Z tx 0x76e4794f… by EOA 0x7817…a846. TokenFactory verified. FeeDistributor and Treasury is_verified false (bytecode twins). 5 createToken txs 2026-07-14–15; 10 collectFees. grantRole x3 then renounceRole x3 at 2026-07-14T16:40:40Z–16:40:50Z to/from 0x0315…5b60. MRD1 created via createToken; 0x262b60… name Safehood.fun / SAFEHOOD creator 0xeADD…9cD4 via 0x475c…b929." }
  - { id: REP-3, method: repository-crosslink, checked_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-9, R-12, R-13, R-14], result: "opengrid1/Launchpad README title Safehood; live table Launchpad 0xe893…4900, TokenFactory 0x5Cf777…6364, FeeDistributor 0x8E0b…59ca, Treasury 0xD401…499B, MRD1 0x5e64880D…2DAD, MRD1/WETH pool 0x8795…e077. Blockscout names and RPC code match those four protocol addresses and MRD1." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T03:50:00Z, receipt_ids: [R-3, R-22], result: "@_safehood display name Safehood, website Safehood.fun, 10 posts, joined May 2026, 18 followers. GET https://safehood.fun and https://www.safehood.fun returned Vercel 404 DEPLOYMENT_NOT_FOUND. No reverse site-to-handle check this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "One createToken deploys a 1B ERC-20 via TokenFactory, initializes a Uniswap v3 pool at FEE_TIER 10000 (1%), seeds a single-sided position held by the launchpad, and opens trading. No bonding curve. 2% max-tx and max-wallet until graduationCapUsd 40000e8.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-4, R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.safehood.fun", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-1, R-3, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@_safehood", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xe893ca05D3F1235de22630504DcEa9e029294900", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-9, R-11, R-15], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x5Cf777e19a6CD4B10c3Aa317a2B8E8bCC5F46364", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-11, R-12], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x8E0b175a36ee0854Cc2dC7AeC4B3f90857A059ca", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-11, R-13], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: deployment.address, value: "0xD401Ed3C128eaE756323e7EAE27B40407c7d499B", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-11, R-14], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-8, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-9, R-11, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-9, field: identity.repository, value: "https://github.com/opengrid1/Launchpad", class: verified, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-10, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-11, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-4, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: product.mechanism, value: "Verified ProtocolConfig on 0xe893: TOTAL_SUPPLY 1e9e18, FEE_TIER 10000, TRADE_FEE_BPS 100 paid entirely to the creator, MAX_TX_BPS 200, MAX_WALLET_BPS 200, INITIAL_MCAP_USD 2000e8. README how-a-launch-works line still says 0.3% pool tier.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-10, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "EOA 0x0315eCb53F64b7A4bA56bb8A4DAB0D96F0856b60 holds DEFAULT_ADMIN, LIQUIDITY_MANAGER and OPERATOR (hasRole true; code 0x). Deployer 0x7817…a846 hasRole all three false after 2026-07-14T16:40:50Z renounces.", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-11, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "collectFees(token, liquidityBps) is onlyRole(LIQUIDITY_MANAGER_ROLE) and can decreaseLiquidity up to 100% of the Uniswap v3 position, then collect to treasury. MRD1 poolLiquidity and positionLiquidity returned 0.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-10, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "opengrid1/Launchpad README: This codebase has not been audited. No audit report located this pass.", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: "account.@_safehood.role", value: project, class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-3, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: "account.@_safehood.slug", value: safehood, class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from census hood.fun (bonding-curve pad @hoodfunfamily, Bitquery contract 0x5fcc…452c). Keep both slugs.", class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: relationship, value: "Distinct from census pools.trade (Uniswap Labs Uniswap v4 pad at pools.trade). Keep both slugs.", class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: relationship, value: "MRD1 0x5e64880D…2DAD is LaunchToken from Safehood TokenFactory; constructor metadata calls Meridian a Uniswap v3 launchpad. Census meridian is meridian.xyz perps. Keep slug meridian.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-21, field: "account.@safehoodonrh.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-20, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: "account.@safehoodonrh.note", value: "PonsV2LauncherToken 0x663492ea…aE199 named safehood / SAFEHOOD at @safehoodonrh. Not the @_safehood pad or pad token 0x262b60Af…034B.", class: claim, observed_at: 2026-09-03T03:55:00Z, receipt_ids: [R-20, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: product.mechanism, value: "80% of the 1% trade fee to the creator, 20% to the platform. Source: @_safehood 2026-07-15 rebuild post and current GitHub ProtocolConfig CREATOR_FEE_BPS 8000 / PROTOCOL_FEE_BPS 2000.", class: claim, observed_at: 2026-09-03T03:45:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: product.mechanism, value: "Verified Launchpad ProtocolConfig on 0xe893: TRADE_FEE_BPS 100 paid entirely to the token creator. @_safehood intro post 2026-07-15T03:47Z said 100% to creator, platform 0%. README FeeDistributor still says 100% to creator.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-4, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0x262b60Af42c46bD09c00069Cd0dCb2Ae0093034B", class: verified, observed_at: 2026-09-03T04:00:00Z, receipt_ids: [R-6, R-18, R-19], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-26, field: identity.alias, value: "Safehood.fun", class: claim, observed_at: 2026-09-03T04:00:00Z, receipt_ids: [R-3, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: activity.status, value: "tokenCount 5, totalLaunches 5, totalTradeVolumeWei 18000000000000000 (0.018 ETH), totalFeesWei 0.00018 ETH at block 53082629. Last createToken on 0xe893 2026-07-15T06:17:48Z. Last @_safehood post 2026-07-16T11:31:03Z.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7, R-9, R-11], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-28, field: "account.@SafeHood_.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: communications.status, value: "safehood.fun and www.safehood.fun returned Vercel DEPLOYMENT_NOT_FOUND on 2026-09-03. @_safehood last post 2026-07-16.", class: claim, observed_at: 2026-09-03T03:50:00Z, receipt_ids: [R-3, R-7, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: "account.@_safehood.note", value: "Handle lists Safehood.fun. Site 404 this pass. Pad token 0x262b60Af…034B is LaunchpadERC20 from 0xeADD… / 0x475c…, not TokenFactory 0x5Cf777… on 0xe893.", class: claim, observed_at: 2026-09-03T04:00:00Z, receipt_ids: [R-3, R-18, R-19, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: product.mechanism, value: "README: liquidity is protocol-managed, not locked or burned. Verified collectFees can remove position principal to Treasury.", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [REP-1], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-23, CLM-24]
    material_effect: "Creator vs platform split of the 1% trade fee on 0xe893 versus later GitHub/X copy."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: company
    title: "@_safehood posts a 0.5% $SAFEHOOD burn"
    summary: "@_safehood linked Blockscout tx 0x7963a459… and wrote We burn .5% of $SAFEHOOD."
    occurred_at: 2026-07-16T11:31:03Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: company
    title: "@_safehood posts that the website is back"
    summary: "@_safehood wrote Website is back and linked www.safehood.fun/token/0x262b60af…034b."
    occurred_at: 2026-07-16T11:21:06Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [identity.domain, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-3
    type: company
    title: "@_safehood posts an RWA integration is coming"
    summary: "@_safehood wrote Integrating with rwa project soon, then said a later announcement would follow."
    occurred_at: 2026-07-16T08:21:19Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-4
    type: company
    title: "@_safehood posts a factory rebuild and 80/20 fees"
    summary: "@_safehood wrote the pad was rebuilt on a new factory; fees 1% with 80% creator and 20% platform."
    occurred_at: 2026-07-15T17:21:09Z
    observed_at: 2026-09-03T03:50:00Z
    affected_fields: [product.mechanism, deployment.address]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-5
    type: onchain
    title: "Pad $SAFEHOOD token created on a later factory"
    summary: "LaunchpadERC20 0x262b60Af…034B created 2026-07-15T17:11:41Z via 0x475c9219…, not 0xe893."
    occurred_at: 2026-07-15T17:11:41Z
    observed_at: 2026-09-03T04:00:00Z
    affected_fields: [deployment.address, identity.symbol]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-18, R-19]
  - id: EVT-6
    type: onchain
    title: "Launchpad 0xe893… created on Robinhood Chain"
    summary: "Launchpad 0xe893ca05…4900 created 2026-07-14T16:40:35Z; verified source contracts/Launchpad.sol."
    occurred_at: 2026-07-14T16:40:35Z
    observed_at: 2026-09-03T04:00:00Z
    affected_fields: [deployment.address, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-9, R-15]

receipts:
  - { id: R-1, publisher: opengrid1/Launchpad, title: "README — Safehood Token Launchpad", url: "https://github.com/opengrid1/Launchpad", published_at: null, accessed_at: 2026-09-03T03:40:00Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-11, CLM-12, CLM-15, CLM-20, CLM-24, CLM-31], excerpt: "Safehood: Token Launchpad for Robinhood Chain. Launches tokens directly into Uniswap V3. No bonding curve. Live deployment chain id 4663: Launchpad 0xe893ca05D3F1235de22630504DcEa9e029294900, TokenFactory 0x5Cf777e19a6CD4B10c3Aa317a2B8E8bCC5F46364, FeeDistributor 0x8E0b175a36ee0854Cc2dC7AeC4B3f90857A059ca, Treasury 0xD401Ed3C128eaE756323e7EAE27B40407c7d499B. Web app: https://safehood.fun. Disclosure: liquidity is protocol-managed, not locked or burned. This codebase has not been audited." }
  - { id: R-2, publisher: opengrid1/Launchpad, title: "ProtocolConfig.sol (default branch)", url: "https://github.com/opengrid1/Launchpad/blob/claude/relaxed-mayer-ln64im/contracts/contracts/libraries/ProtocolConfig.sol", published_at: null, accessed_at: 2026-09-03T03:45:00Z, kind: repository, authority: primary, authenticity: unconfirmed, supports: [CLM-23], excerpt: "POOL_FEE_TIER = 10_000. TRADE_FEE_BPS = 100. CREATOR_FEE_BPS = 8_000. PROTOCOL_FEE_BPS = 2_000. Share of the trading fee that accrues to the token creator (80%). Share of the trading fee that accrues to the protocol (20%). INITIAL_MARKET_CAP_USD = 2_000e8." }
  - { id: R-3, publisher: "@_safehood", title: "Safehood profile", url: "https://x.com/_safehood", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-16, CLM-17, CLM-26, CLM-29, CLM-30], excerpt: "Display name Safehood, handle @_safehood. Website Safehood.fun. Joined May 2026. 10 posts. 2 Following, 18 Followers. Latest visible posts dated Jul 16." }
  - { id: R-4, publisher: "@_safehood", title: "Introducing Safehood", url: "https://x.com/_safehood/status/2077238571275256184", published_at: 2026-07-15T03:47:23Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-10, CLM-11, CLM-16, CLM-24], excerpt: "Introducing Safehood. A token launchpad on Robinhood Chain. No bonding curves. Every token launches straight into a real Uniswap V3 pool, tradeable from block one. Launching is 100% free. Every trade pays a flat 1% fee, and 100% of it goes to the token creator. The platform keeps 0%. 2% max transaction and 2% max wallet until $40,000 market cap. 1B supply, $2,000 starting market cap. Safehood. Coming very soon." }
  - { id: R-5, publisher: "@_safehood", title: "We rebuilt Safehood on a brand new factory", url: "https://x.com/_safehood/status/2077443363645923397", published_at: 2026-07-15T17:21:09Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-23, EVT-4], excerpt: "We rebuilt Safehood on a brand new factory. The old factory had bugs we were not comfortable running real money through, so we rewrote it from scratch and redeployed everything clean. Every token launched on the new factory renounces ownership the instant it goes live. Fees are simple. A flat 1 percent on every trade. 80 percent goes straight to the token creator, claimable anytime. The remaining 20 percent sustains the platform." }
  - { id: R-6, publisher: "@_safehood", title: "Website is back", url: "https://x.com/_safehood/status/2077715143061029045", published_at: 2026-07-16T11:21:06Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-25, EVT-2], excerpt: "Website is back https://www.safehood.fun/token/0x262b60af42c46bd09c00069cd0dcb2ae0093034b" }
  - { id: R-7, publisher: "@_safehood", title: "We burn .5% of $SAFEHOOD", url: "https://x.com/_safehood/status/2077717646251110624", published_at: 2026-07-16T11:31:03Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, CLM-29, EVT-1], excerpt: "https://robinhoodchain.blockscout.com/tx/0x7963a459a12ce2e04044846fc5d9c3ddf44c41d38d4bed89c665aa5705be5540 We burn .5% of $SAFEHOOD" }
  - { id: R-8, publisher: "@_safehood", title: "Integrating with rwa project soon", url: "https://x.com/_safehood/status/2077669896406909237", published_at: 2026-07-16T08:21:19Z, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-3], excerpt: "Integrating with rwa project soon" }
  - { id: R-9, publisher: Blockscout, title: "Address 0xe893…4900 Launchpad", url: "https://robinhoodchain.blockscout.com/address/0xe893ca05D3F1235de22630504DcEa9e029294900", published_at: null, accessed_at: 2026-09-03T04:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-9, CLM-11, CLM-27, EVT-6], excerpt: "API v2: hash 0xe893ca05D3F1235de22630504DcEa9e029294900 name Launchpad is_contract true is_verified true creator 0x7817F4e44a658410C4ADA6a9226ef3d51e5Ea846 creation_transaction_hash 0x76e4794f9e9d18695ea7d8675ae4a076b5c34c094c7bca90e0823b327edceaf4. To-txs include createToken x5, collectFees x10, grantRole x3, renounceRole x3." }
  - { id: R-10, publisher: Blockscout, title: "Launchpad verified source ProtocolConfig and collectFees", url: "https://robinhoodchain.blockscout.com/address/0xe893ca05D3F1235de22630504DcEa9e029294900?tab=contract", published_at: 2026-07-14T16:42:23Z, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-12, CLM-14, CLM-24, CLM-31], excerpt: "Smart-contract name Launchpad file_path contracts/Launchpad.sol compiler v0.8.26+commit.8a97fa7a is_verified true verified_at 2026-07-14T16:42:23Z. Additional source contracts/libraries/ProtocolConfig.sol: FEE_TIER 10000, TRADE_FEE_BPS 100, comment Flat 1% trading fee, paid entirely to the token creator. collectFees(token, liquidityBps) onlyRole(LIQUIDITY_MANAGER_ROLE) may decreaseLiquidity and collect to treasury." }
  - { id: R-11, publisher: Robinhood Chain RPC, title: "eth_getCode, constants, hasRole, tokenCount", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-7, CLM-8, CLM-12, CLM-13, CLM-14, CLM-27], excerpt: "block 53082629. eth_getCode non-empty on 0xe893, 0x5Cf777, 0x8E0b, 0xD401. FEE_TIER 10000 TRADE_FEE_BPS 100 MAX_TX_BPS 200 MAX_WALLET_BPS 200 INITIAL_MCAP_USD 2000e8 graduationCapUsd 40000e8 tokenCount 5 totalLaunches 5 totalTradeVolumeWei 0.018e18 launchesPaused 0 priceFeed 0x0. hasRole admin/liq/op: deployer false, 0x0315eCb5…5b60 true. MRD1 poolLiquidity 0 positionLiquidity 0." }
  - { id: R-12, publisher: Blockscout, title: "Address 0x5Cf777…6364 TokenFactory", url: "https://robinhoodchain.blockscout.com/address/0x5Cf777e19a6CD4B10c3Aa317a2B8E8bCC5F46364", published_at: null, accessed_at: 2026-09-03T04:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "API v2: hash 0x5Cf777e19a6CD4B10c3Aa317a2B8E8bCC5F46364 name TokenFactory is_contract true is_verified true creator 0x7817F4e44a658410C4ADA6a9226ef3d51e5Ea846 creation_transaction_hash 0x216d6e5c2ec82029c60ee01ae73e6bb7a27612a8bb2dfbb75310b0a8afae5fc9 timestamp 2026-07-14T16:40:30Z." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x8E0b…59ca FeeDistributor", url: "https://robinhoodchain.blockscout.com/address/0x8E0b175a36ee0854Cc2dC7AeC4B3f90857A059ca", published_at: null, accessed_at: 2026-09-03T04:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "API v2: hash 0x8E0b175a36ee0854Cc2dC7AeC4B3f90857A059ca name null is_contract true is_verified false creator 0x7817F4e44a658410C4ADA6a9226ef3d51e5Ea846 creation_transaction_hash 0x2aa8f61739f334d33dca70024bcecd4d91659ef19f3a6b114abeecf69f060847. Smart-contract endpoint: name FeeDistributor file_path contracts/FeeDistributor.sol is_verified false verified_twin_address_hash 0x81C7f04B94Fe5eE0C31215B1a96616337442B1aC." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xD401…499B Treasury", url: "https://robinhoodchain.blockscout.com/address/0xD401Ed3C128eaE756323e7EAE27B40407c7d499B", published_at: null, accessed_at: 2026-09-03T04:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7], excerpt: "API v2: hash 0xD401Ed3C128eaE756323e7EAE27B40407c7d499B name null is_contract true is_verified false creator 0x7817F4e44a658410C4ADA6a9226ef3d51e5Ea846 creation_transaction_hash 0x6b3e1adb160e7e89810448c346a5b06bc7252d3faa42762d9cf281186ee34e49. Smart-contract endpoint: name Treasury file_path contracts/Treasury.sol is_verified false verified_twin_address_hash 0x97218505c027B92a89c6C67fAE3Eda9d37BeA79A." }
  - { id: R-15, publisher: Blockscout, title: "Launchpad creation tx 0x76e4794f…", url: "https://robinhoodchain.blockscout.com/tx/0x76e4794f9e9d18695ea7d8675ae4a076b5c34c094c7bca90e0823b327edceaf4", published_at: 2026-07-14T16:40:35Z, accessed_at: 2026-09-03T04:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, EVT-6], excerpt: "timestamp 2026-07-14T16:40:35.000000Z status ok result success from 0x7817F4e44a658410C4ADA6a9226ef3d51e5Ea846 block_number 9680698 created_contract 0xe893ca05D3F1235de22630504DcEa9e029294900 name Launchpad is_verified true transaction_types [contract_creation]." }
  - { id: R-16, publisher: Blockscout, title: "grantRole DEFAULT_ADMIN to 0x0315…5b60", url: "https://robinhoodchain.blockscout.com/tx/0xed0b1420ff6b25ec291a75765839af729899f93a3a3a97b908b96e3319322213", published_at: 2026-07-14T16:40:40Z, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "timestamp 2026-07-14T16:40:40Z method grantRole from 0x7817F4e44a658410C4ADA6a9226ef3d51e5Ea846 decoded_input grantRole(bytes32 role, address account) role 0x00…00 account 0x0315eCb53F64b7A4bA56bb8A4DAB0D96F0856b60. Same account later received LIQUIDITY_MANAGER and OPERATOR; deployer then renounced those roles. Address is_contract false." }
  - { id: R-17, publisher: Blockscout, title: "Address 0x5e64880D…2DAD Meridian One (MRD1)", url: "https://robinhoodchain.blockscout.com/address/0x5e64880D20d6b827096611C3C06D9BA38e2C2DAD", published_at: null, accessed_at: 2026-09-03T04:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-20], excerpt: "hash 0x5e64880D20d6b827096611C3C06D9BA38e2C2DAD name LaunchToken is_contract true is_verified true creator_address_hash 0x5Cf777e19a6CD4B10c3Aa317a2B8E8bCC5F46364. token name Meridian One symbol MRD1 decimals 18 total_supply 1000000000000000000000000000 holders_count 3. createToken tx 0x15a5685b… 2026-07-14T16:41:16Z from 0x7817…a846 to Launchpad 0xe893…4900." }
  - { id: R-18, publisher: Blockscout, title: "Address 0x262b60Af…034B Safehood.fun / SAFEHOOD", url: "https://robinhoodchain.blockscout.com/address/0x262b60Af42c46bD09c00069Cd0dCb2Ae0093034B", published_at: null, accessed_at: 2026-09-03T04:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25, CLM-26, CLM-30, EVT-5], excerpt: "hash 0x262b60Af42c46bD09c00069Cd0dCb2Ae0093034B name LaunchpadERC20 is_contract true is_verified true creator_address_hash 0xeADD8E92B6706583A955b076E394eA5c68F39cD4 creation_transaction_hash 0x3c347ede6985b66b4c294c1e8524ca264d8ef87f4b01cc64114f004c9781b5e5. token name Safehood.fun symbol SAFEHOOD decimals 18 total_supply 1e27 holders_count 60. Constructor metadata website https://www.safehood.fun/ twitter https://x.com/_safehood." }
  - { id: R-19, publisher: Blockscout, title: "Pad token creation tx 0x3c347ede…", url: "https://robinhoodchain.blockscout.com/tx/0x3c347ede6985b66b4c294c1e8524ca264d8ef87f4b01cc64114f004c9781b5e5", published_at: 2026-07-15T17:11:41Z, accessed_at: 2026-09-03T04:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25, CLM-30, EVT-5], excerpt: "timestamp 2026-07-15T17:11:41.000000Z status ok block_number 10563571 from 0x7817F4e44a658410C4ADA6a9226ef3d51e5Ea846 to 0x475c9219e17cdB25324C12206200B24be681b929 method 0x9b63a279. 0x475c… is_contract true is_verified false, created by the same EOA." }
  - { id: R-20, publisher: Blockscout, title: "Address 0x663492ea…aE199 Pons SAFEHOOD", url: "https://robinhoodchain.blockscout.com/address/0x663492eab45eD21d6BDd7836eFDC1a9Cd51aE199", published_at: null, accessed_at: 2026-09-03T04:00:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21, CLM-22], excerpt: "hash 0x663492eab45eD21d6BDd7836eFDC1a9Cd51aE199 name PonsV2LauncherToken is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42. token name safehood symbol SAFEHOOD holders_count 211. Not Launchpad or LaunchpadERC20." }
  - { id: R-21, publisher: "@safehoodonrh", title: "$SAFEHOOD profile", url: "https://x.com/safehoodonrh", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-21, CLM-22, CLM-28], excerpt: "Display name $SAFEHOOD, handle @safehoodonrh. Bio: Auto buyback and distribution on Robinhood chain. Holders airdropped Safehood 4x per day. 0x663492eab45ed21d6bdd7836efdc1a9cd51ae199. Separate X user @SafeHood_ lists a different contract 0x87e1ed2ade9db5dea0e805f296b796219a05636b." }
  - { id: R-22, publisher: Vercel, title: "safehood.fun deployment not found", url: "https://www.safehood.fun", published_at: null, accessed_at: 2026-09-03T03:50:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-2, CLM-29, CLM-30], excerpt: "404 NOT_FOUND. Code DEPLOYMENT_NOT_FOUND. This deployment cannot be found. Same body on https://safehood.fun." }
  - { id: R-23, publisher: Bitquery, title: "Robinhood meme coin launches — hood.fun", url: "https://docs.bitquery.io/docs/blockchain/robinhood/robinhood-meme-coin-launches/", published_at: 2026-09-02, accessed_at: 2026-09-03T03:55:00Z, kind: docs, authority: independent, authenticity: confirmed, supports: [CLM-18], excerpt: "hood.fun is the premier fair-launch memecoin launchpad on the Robinhood network. Every token launches with a fixed 1 billion supply on a bonding curve. The current hood.fun launch contract is 0x5fcc1df0dc020cf454e742e9a8ae2554c37a452c." }
  - { id: R-24, publisher: Uniswap Labs, title: "Pools.trade: A New Way to Launch on Robinhood Chain", url: "https://blog.uniswap.org/pools-trade-a-new-way-to-launch-on-robinhood-chain", published_at: 2026-08-05, accessed_at: 2026-09-03T03:55:00Z, kind: announcement, authority: primary, authenticity: confirmed, supports: [CLM-19], excerpt: "Say hello to Pools, a new launchpad built for Robinhood Chain. There are two ways to launch a token on Pools. Both start with a fixed supply of 1 billion and end in a Uniswap v4 pool. Crowd Launch and Instant Launch." }

gaps:
  - { priority: P0, question: "Does the 80/20 fee split in the 15 Jul rebuild post and current GitHub ProtocolConfig apply to 0xe893 (verified 100% creator) or only to the later 0x475c / 0xeADD factory that minted 0x262b60?", checked: "verified ProtocolConfig on 0xe893; @_safehood rebuild post; current repo ProtocolConfig.sol; 0x262b60 create tx to 0x475c, 2026-09-03", next: "read verified or bytecode of 0x475c9219… and 0xeADD… for CREATOR_FEE_BPS" }
  - { priority: P0, question: "Are remaining Uniswap v3 positions on 0xe893 still held with non-zero liquidity after the 10 collectFees calls, besides MRD1 which returned 0?", checked: "MRD1 poolInfo poolLiquidity 0 positionLiquidity 0 at block 53082629; collectFees x10 on 0xe893 to-list, 2026-09-03", next: "poolInfo on allTokens 1–4" }
  - { priority: P1, question: "Is there a live Safehood web host besides the Vercel 404 at safehood.fun?", checked: "GET safehood.fun and www.safehood.fun; @_safehood website field Safehood.fun; README https://safehood.fun, 2026-09-03", next: "resolve t.co/zbb5rzhCwO and search for a replacement domain on the GitHub web/ package" }
  - { priority: P1, question: "Do opengrid1/Launchpad v4, HoodFactory, and meridian/ folders deploy any other chain-4663 factories that should stay on this slug?", checked: "README live table still lists 0xe893; default branch claude/relaxed-mayer-ln64im has contracts/contracts/v4 and meridian/, 2026-09-03", next: "grep deployments/*.json for 4663 addresses and reproduce each" }
  - { priority: P2, question: "Is 0x0315eCb5…5b60 the README PLATFORM_ADMIN, and is there a timelock?", checked: "hasRole true on all three roles; eth_getCode 0x; README says team multisig, 2026-09-03", next: "search Blockscout for a Safe/multisig that 0x0315 forwards to; none in this pass" }
  - { priority: P2, question: "Is an audit report present anywhere besides the README sentence that the codebase has not been audited?", checked: "README known operational notes, 2026-09-03", next: "search the repo docs/ tree and X media for a PDF" }
---

# Safehood — research packet

## What it is

Uniswap v3 pool launchpad on Robinhood Chain: one transaction deploys a 1 billion-supply ERC-20, creates a 1% Uniswap v3 pool, and opens trading with 2% max-tx and max-wallet until a $40,000 market cap. @_safehood lists safehood.fun. The GitHub-claimed factory 0xe893… has non-empty code on chain 4663. Distinct from hood.fun's bonding-curve pad and Uniswap Labs' pools.trade.

Themes: launchpad, memecoin

## Why it matters

Safehood is a native Uniswap v3 launch surface: tokens are tradeable from the first block without a bonding-curve graduation. Census still lists the row as announced; the factory, TokenFactory and five createToken calls are on chain 4663. The pad is a different product from hood.fun and from Uniswap Labs' pools.trade.

## What could go wrong

`LIQUIDITY_MANAGER_ROLE` can `decreaseLiquidity` on the protocol-held Uniswap v3 NFT and send the proceeds to Treasury. Verified ProtocolConfig on 0xe893 pays the 1% trade fee entirely to the creator; a later @_safehood post and the current GitHub ProtocolConfig say 80/20. safehood.fun returned 404 on this pass.

## Product and mechanics

`Launchpad.createToken` deploys a 1B ERC-20 through TokenFactory, initializes a Uniswap v3 pool at fee tier 10000, and mints a single-sided position the launchpad holds. Trading limits are 2% max-tx and 2% max-wallet until `graduationCapUsd` 40000e8. Starting cap is 2000e8. [verified R-10 R-11]

App-routed `buy`/`sell` take `TRADE_FEE_BPS` 100. Verified ProtocolConfig on this factory comments that the 1% is paid entirely to the creator. The 15 Jul rebuild post and the current GitHub ProtocolConfig instead split 80% creator / 20% platform. [verified R-10] [claim R-2 R-5]

README states liquidity is protocol-managed, not locked or burned. `collectFees(token, liquidityBps)` may remove up to 100% of position principal. [verified R-1 R-10]

## Control and security

Constructor `_grantRole`s DEFAULT_ADMIN, LIQUIDITY_MANAGER and OPERATOR to the admin argument (deployer 0x7817…a846). Minutes later those roles were granted to EOA 0x0315eCb5…5b60 and the deployer renounced. `hasRole` for 0x0315 is true on all three; eth_getCode is empty. README calls PLATFORM_ADMIN a team multisig. [verified R-11 R-16] [claim R-1]

FeeDistributor and Treasury have bytecode on 4663; Blockscout `is_verified` is false (twin hashes only). README says the codebase has not been audited. [verified R-13 R-14] [claim R-1]

## Team and provenance

@_safehood is display name Safehood and lists Safehood.fun. GitHub user opengrid1 (Open Gird) publishes Launchpad with a Safehood README and the four addresses reproduced here; the GitHub profile has no twitter_username. GET of safehood.fun is a Vercel 404, so the handle-to-site link is one-sided this pass. [claim R-1 R-3 R-22]

@safehoodonrh is a Pons token named SAFEHOOD at 0x663492ea…aE199. @SafeHood_ lists a third contract. Do not merge. [claim R-20 R-21]

MRD1 was created by this TokenFactory; its metadata uses the name Meridian. Census meridian is meridian.xyz perps. Keep that slug. [verified R-17]

## Economics and activity

`tokenCount` and `totalLaunches` are 5. `totalTradeVolumeWei` is 0.018 ETH and `totalFeesWei` is 0.00018 ETH at block 53082629. Last `createToken` on 0xe893 is 2026-07-15T06:17:48Z. DexScreener returned no pairs for 0x262b60… or MRD1. DefiLlama has no protocol/safehood row. [verified R-11]

Pad token 0x262b60… (Safehood.fun / SAFEHOOD) has 60 holders on Blockscout. That token was created through 0x475c…, not through 0xe893. [verified R-18]

## Material risks

- One EOA holds DEFAULT_ADMIN, LIQUIDITY_MANAGER and OPERATOR with no code and no timelock observed. [verified R-11 R-16]
- `collectFees` can remove protocol-held Uniswap v3 principal to Treasury; MRD1 liquidity views returned 0. [verified R-10 R-11]
- Trade-fee split disagrees across verified 0xe893 source (100% creator) and later GitHub/X copy (80/20). [disputed R-2 R-5 R-10]
- safehood.fun is 404; last @_safehood post is 2026-07-16. [claim R-3 R-22]
- Pad-branded SAFEHOOD 0x262b60… is not from the GitHub-claimed factory; a Pons token uses the same ticker. [verified R-18 R-20]

## Verification passes

- Receipts: GitHub README and ProtocolConfig, @_safehood profile and posts, Blockscout API v2 for Launchpad/TokenFactory/FeeDistributor/Treasury/MRD1/0x262b60/Pons token plus create and grantRole txs, RPC views, Vercel 404, Bitquery hood.fun, Uniswap pools.trade blog were opened on 2026-09-03; excerpts are copied from those responses. [verified R-1 R-3 R-9 R-11]
- Numbers: 0.018 ETH is `totalTradeVolumeWei` on 0xe893, not a USD volume and not an all-chains figure. FEE_TIER 10000 is 1%, not the README 0.3% how-a-launch-works line. tokenCount 5 is the factory array, not DexScreener pairs. [verified R-11]
- Adversarial: the strongest contrary reading is that this slug is hood.fun, pools.trade, census Meridian, or the Pons $SAFEHOOD token. Different factories, handles and mechanism (curve vs Uniswap v3 vs Uniswap v4 vs Pons) argue they stay separate. A second contrary reading is that 0xe893 is abandoned and the live pad is 0x475c/0xeADD; both were created by 0x7817…a846. [inference R-9 R-18 R-20 R-23 R-24]

## Operations log

- Base: `git rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census row safehood (lifecycle announced, handle @_safehood, github.com/opengrid1/Launchpad, www.safehood.fun). Packets for pools-trade and meridian read for possible_matches. No content/ writes.
- Official: GET https://safehood.fun and https://www.safehood.fun → Vercel 404 DEPLOYMENT_NOT_FOUND. GitHub README, ProtocolConfig.sol, user opengrid1 (Open Gird, twitter_username null).
- Explorer: Blockscout API v2 with Chrome User-Agent for 0xe893, 0x5Cf777, 0x8E0b, 0xD401, 0x5e64880D, 0x262b60, 0x663492ea, 0xeADD, 0x475c, 0x0315, create/grantRole/burn txs. RPC eth_getCode/eth_call at block 53082629. One 429; retry succeeded.
- X: @_safehood profile and posts 15–16 Jul 2026; @safehoodonrh; @SafeHood_.
- Third party: DexScreener token-pairs for 0x262b60 and MRD1 empty; api.llama.fi/protocol/safehood not found; Bitquery hood.fun; Uniswap pools.trade blog.
- Failed: GitHub path contracts/contracts/Launchpad.sol on the default branch (tree now has LaunchpadFactory.sol / v4); site 404; DexScreener and Llama empty.
- Time: collection 2026-09-03T03:30Z–2026-09-03T04:15Z.
