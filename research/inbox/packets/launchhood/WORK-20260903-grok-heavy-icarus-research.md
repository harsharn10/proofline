---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: launchhood
name: LaunchHood
packet_tier: seed
as_of: 2026-09-03T04:36:00Z
prior_packet: null
supersedes: null
owned_slugs: [launchhood]
allowed_paths:
  - research/inbox/packets/launchhood/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: LaunchHood
  aliases: [Launchhood, "Launch Hood"]
  symbols: [Launch]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://launchhood.com
  official_handle: "@Launchhood"
  repository: "NULL — api.github.com/orgs/launchhood and /users/launchhood HTTP 404; search/repositories q=launchhood total_count 0; launchhood.com and /docs HTML have no repository URL this pass"
  possible_matches:
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Packed pools-trade is Uniswap Labs InstantLaunchStrategy / LiquidityLauncher at pools.trade / @TradePools"
        - "LaunchHood live create path is LaunchHoodV3Factory 0x62B33A03…1Bcf launchToken into Uniswap V3 1% pools; docs name that factory, not 0x0000FffF…19C0 or 0x23f82095…27f1"
        - "@Launchhood bio still says First Launchpad built on pools.trade (t.co/Eh59sEhWUR → pools.trade); that is a historical frontend claim, not shared ownership"
        - "No shared domain, handle, or reproduced factory address"

classification:
  primary_leaf: launch/uni-pool-launch
  secondary_leaves: []
  mechanism_tags: [launchpad, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in census.yaml. launchhood.com /docs lists LaunchHoodV3Factory 0x62B33A03…1Bcf as the launchToken entry; RPC on 4663 returned 15739-byte code, owner() 0x73267feD…EaA4, launchFee 0, LOCKER 0x99B79154…1ee0, TOKEN_IMPL 0x5FDf73ab…E3bE. Blockscout names the factory LaunchHoodV3Factory is_verified true. Distinct from packed pools-trade. Protocol token $Launch 0x63575bCC…C0de is a separate EIP-1167 clone from the older LaunchHoodFactory. Not a census row. [R-2] [R-3] [R-13] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-11, CLM-18, CLM-19], note: "" }

links:
  - { kind: site, url: "https://launchhood.com", authenticity: unconfirmed }
  - { kind: app, url: "https://launchhood.com/create", authenticity: unconfirmed }
  - { kind: docs, url: "https://launchhood.com/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/Launchhood", authenticity: unconfirmed }
  - { kind: other, url: "https://t.me/launchhood", authenticity: unconfirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x62B33A039D289CBDa50EbeB72Fe4261449E61Bcf", authenticity: confirmed }

deployments:
  - label: LaunchHoodV3Factory (current launchToken entry)
    role: factory
    address:
      value: "0x62B33A039D289CBDa50EbeB72Fe4261449E61Bcf"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-13, R-14]
  - label: LaunchHoodV3Locker
    role: other
    address:
      value: "0x99B79154Ff4Fc0e313549B809254B02722631ee0"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-13, R-15]
  - label: LaunchHoodV3Token implementation
    role: implementation
    address:
      value: "0x5FDf73abC7A232d91b03638c2f9a52c16aB0E3bE"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-3, R-13, R-16]
  - label: LaunchHoodFactory (legacy v4 createToken; created $Launch)
    role: factory
    address:
      value: "0x2e9fbF18F6492F6651B983c34629d292516DE86e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-13, R-17, R-18]
  - label: $Launch protocol token (EIP-1167 LaunchHoodToken clone)
    role: token
    address:
      value: "0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-7, R-10, R-13, R-19]
  - label: V3 factory owner() / PROTOCOL_TREASURY
    role: admin
    address:
      value: "0x73267feDc2C79a37782C19950b2989B208cfEaA4"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-13, R-14, R-20]

metrics:
  - { kind: market_cap, value: 19984.30, currency: USD, as_of: 2026-09-03T04:32:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x63575bcc…c0de attributes.fdv_usd for $Launch; not pad TVL", class: claim, receipt_ids: [R-21] }
  - { kind: volume_24h, value: 9052.96, currency: USD, as_of: 2026-09-03T04:32:00Z, window: 24h, method: "Gecko token attributes.volume_usd.h24 for $Launch 0x63575bCC…C0de", class: claim, receipt_ids: [R-21] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:33:00Z, receipt_ids: [R-13, R-14], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32ad478 (53138552). LaunchHoodV3Factory 0x62B33A03…1Bcf eth_getCode 15739 bytes prefix 0x608080604052600436; nonce 0x1035 (4149); balance 0. owner() 0x73267feDc2C79a37782C19950b2989B208cfEaA4. launchFee() 0. PROTOCOL_TREASURY() 0x73267feD…EaA4. LOCKER() 0x99B79154…1ee0. TOKEN_IMPL() 0x5FDf73ab…E3bE. ERC1967 implementation slot zero. pendingOwner() revert. Blockscout api/v2 name LaunchHoodV3Factory is_verified true proxy_type null." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:33:00Z, receipt_ids: [R-13, R-15, R-16], result: "LaunchHoodV3Locker 0x99B79154…1ee0 eth_getCode 5244 bytes; nonce 1; owner() revert; bytecode contains collect 0xfc6f7865 and lacks withdraw 0x3ccfd60b, decreaseLiquidity 0x0c49ccbe, transferFrom 0x23b872dd. LaunchHoodV3Token 0x5FDf73ab…E3bE eth_getCode 6821 bytes. Blockscout locker name LaunchHoodV3Locker is_verified true; token impl name LaunchHoodV3Token is_verified true." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:33:00Z, receipt_ids: [R-13, R-17, R-19, R-20], result: "Legacy LaunchHoodFactory 0x2e9fbF18…E86e eth_getCode 15239 bytes; nonce 35; owner() 0x73267feD…EaA4. $Launch 0x63575bCC…C0de eth_getCode 45 bytes prefix 0x363d3d373d3d3d363d (EIP-1167); Blockscout proxy_type eip1167 implementations 0xc2BcD96d…4474 name LaunchHoodToken is_verified true. Owner EOA 0x73267feD…EaA4 eth_getCode 0x; nonce 98; Blockscout is_contract false." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T04:34:00Z, receipt_ids: [R-1, R-7], result: "launchhood.com title LaunchHood — memecoin launchpad on Robinhood Chain; navbar href https://x.com/launchhood title @launchhood on X; also https://t.me/launchhood. No twitter:site, twitter:creator, og:title, or canonical this pass. @Launchhood bio First Launchpad built on t.co/Eh59sEhWUR plus $launch 0x63575bCC…C0de; t.co expands to https://pools.trade/. Bio website field is pools.trade, not launchhood.com." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:34:00Z, receipt_ids: [R-21, R-23, R-24, R-25, R-26], result: "Gecko GET /networks/robinhood/tokens/0x63575bcc…c0de HTTP 200; name LaunchHood symbol Launch fdv_usd 19984.30 volume_usd.h24 9052.96. DexScreener 3 pairs; top Launch/ETH 0x379c011a…d6a3 liq 10912.35 vol 9002.32 fdv 19973; info.websites launchhood.com and t.me/launchhoodbot; socials x.com/launchhood and t.me/launchhood. api.llama.fi/protocol/launchhood HTTP 400; protocols list 8169 rows, no launchhood. GitHub org/user 404; search total_count 0. Official indexer GraphQL tokens.totalCount 0 but _meta.status.robinhood.ready false at block 13637438 vs RPC 53138552." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Docs: one transaction creates a 1B-supply ERC-20, a Uniswap V3 1% pool, and a permanently locked LP position. No presale, no team allocation, no creation fee beyond gas. Graduation is a 4 ETH net-buy site badge, not a pool migration.", class: claim, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://launchhood.com", class: claim, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-1, R-2, R-23], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@Launchhood", class: claim, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [R-1, R-7, R-23], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "LaunchHood", class: claim, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-1, R-2, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x62B33A039D289CBDa50EbeB72Fe4261449E61Bcf", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-2, R-3, R-13, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x99B79154Ff4Fc0e313549B809254B02722631ee0", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-2, R-3, R-13, R-15], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-1, R-13, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0x73267feDc2C79a37782C19950b2989B208cfEaA4", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-13, R-14, R-20], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "V3 factory, locker, and token implementation are not ERC1967 proxies this pass (implementation slot zero; Blockscout proxy_type null).", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-13, R-14, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "No timelock contract is named on /docs. owner() and PROTOCOL_TREASURY() on the V3 factory are the same EOA 0x73267feD…EaA4 with no code. JS ABI exposes setLaunchFee, setWhitelistedLauncher, addDexConfig, updateLaunchConfig, transferOwnership.", class: claim, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-2, R-3, R-13, R-20], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "Blockscout counters transactions_count 4151 on LaunchHoodV3Factory; RPC nonce 4149. Official indexer tokens.totalCount 0 is not usable: _meta.ready false at block 13637438 vs RPC 53138552.", class: claim, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-14, R-22, R-26], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Gecko $Launch 0x63575bCC…C0de fdv_usd 19984.30 and volume_usd.h24 9052.96 at 2026-09-03T04:32Z. DexScreener top Launch/ETH pair liquidity 10912.35 volume 9002.32 fdv 19973. These figures are the protocol token book, not pad TVL.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-21, R-23], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "No audit report URL was located on launchhood.com, /docs, the @Launchhood profile, or GitHub this pass", class: unknown, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: deployment.address, value: "0x5FDf73abC7A232d91b03638c2f9a52c16aB0E3bE", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-2, R-3, R-13, R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-7, R-10, R-13, R-19], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from packed pools-trade (pools.trade / @TradePools / Uniswap Labs LiquidityLauncher). LaunchHood current factory is 0x62B33A03…1Bcf. No shared domain, handle, or reproduced address.", class: claim, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [R-1, R-2, R-3, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Handle 2026-07-30: We started with v4 but later moved to v3 as v4 hooks were not properly integrated in various terminals. JS still ships a 4663 map with legacy LaunchHoodFactory 0x2e9fbF18…E86e, LaunchHoodHook 0xdCf5A30A…68Cc, and current LaunchHoodV3Factory. Create page calls launchToken on the V3 factory.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-3, R-9, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "Docs fee table: 1% pool fee, 50% creator / 50% protocol, claimable from /claim. Temporary 2% max-wallet for 366 blocks after launch. Starting market cap ≈ 1.35 ETH. RPC launchFee() 0 matches docs creation fee none.", class: claim, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-2, R-13], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-21, field: "account.@Launchhood.official", value: "Site navbar links https://x.com/launchhood. Handle bio website field is pools.trade, not launchhood.com. launchhood.com HTML has no twitter:site this pass. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-22, field: "account.@Launchhood.slug", value: launchhood, class: claim, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@Launchhood.role", value: project, class: claim, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "Latest @Launchhood post this pass is 2026-08-11 (pools.fun trading live on launchhood.com). No later post was returned in Latest from:Launchhood.", class: claim, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "NULL — GitHub org and user launchhood 404; search total_count 0; no repository URL on launchhood.com or /docs this pass", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-2, R-25], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: identity.alias, value: "Launchhood", class: claim, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: other, value: "@Launchhood posts 2026-07-26 through 2026-07-31 describe Arc launches, swaps, and a circleswap.app OTC desk. JS chain config this pass only keys 4663. Flag unverified-chain for Arc.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-3, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: control.privileged-role, value: "V3 factory owner() and PROTOCOL_TREASURY() are EOA 0x73267feD…EaA4. Same EOA created the V3 factory, locker, token impl, and the legacy v4 factory, and sent createToken for $Launch.", class: verified, observed_at: 2026-09-03T04:33:00Z, receipt_ids: [R-13, R-14, R-17, R-18, R-20], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-29, field: product.mechanism, value: "Handle 2026-08-05 described Launchhood as a pools.trade Instant Mode launcher (0.25% LP, 1B supply, LP locked) with a Buyback/Burn mode sending creator fees to a Burner. That configuration is not what /docs describes for the current V3 factory (1% Uniswap V3, 50/50 split).", class: claim, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-2, R-11], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "RPC: LaunchHoodV3Factory has code, owner, and matching locker/impl"
    summary: "Factory 0x62B33A03…1Bcf on chain 4663 has 15739-byte code, nonce 4149, owner and PROTOCOL_TREASURY 0x73267feD…EaA4, LOCKER 0x99B79154…1ee0, TOKEN_IMPL 0x5FDf73ab…E3bE, matching /docs contract addresses."
    occurred_at: 2026-07-13T06:58:43Z
    observed_at: 2026-09-03T04:33:00Z
    affected_fields: [deployment.address, control.owner, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13, R-14]
  - id: EVT-2
    type: onchain
    title: "$Launch created via legacy LaunchHoodFactory.createToken"
    summary: "Tx 0xfb093139…f05f on 2026-07-12T10:40:01Z from 0x73267feD…EaA4 to LaunchHoodFactory 0x2e9fbF18…E86e method createToken created EIP-1167 $Launch 0x63575bCC…C0de. That is the protocol token in the handle bio, not a V3-factory launch."
    occurred_at: 2026-07-12T10:40:01Z
    observed_at: 2026-09-03T04:34:00Z
    affected_fields: [deployment.address, identity.alias]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-18, R-19]
  - id: EVT-3
    type: company
    title: "@Launchhood posts v4-to-v3 move"
    summary: "On 2026-07-30 the handle posted: We started with v4 but later moved to v3 as v4 hooks were not properly integrated in various terminals."
    occurred_at: 2026-07-30T12:47:25Z
    observed_at: 2026-09-03T04:32:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-9]
  - id: EVT-4
    type: company
    title: "@Launchhood posts pools.fun trading live on launchhood.com"
    summary: "On 2026-08-11 the handle posted that pools.fun trading is live on launchhood.com, including deploy and auto buyback/burn mode, tagging @pools_dot_fun. Latest post returned this pass."
    occurred_at: 2026-08-11T19:01:48Z
    observed_at: 2026-09-03T04:31:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-8]
  - id: EVT-5
    type: company
    title: "@Launchhood posts Buyback/Burn Mode for pools.trade Instant Mode"
    summary: "On 2026-08-05 the handle posted Buyback/Burn Mode for pools.trade Instant Mode on launchhood.com: 0.25% LP fee, 1B supply, LP locked, creator fees to a Burner. That is the pools.trade frontend path, not the current /docs V3 factory."
    occurred_at: 2026-08-05T21:28:04Z
    observed_at: 2026-09-03T04:31:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]

receipts:
  - { id: R-1, publisher: LaunchHood, title: "launchhood.com home", url: "https://launchhood.com/", published_at: null, accessed_at: 2026-09-03T04:31:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-18, CLM-21, CLM-23, CLM-25], excerpt: "title LaunchHood — memecoin launchpad on Robinhood Chain. meta description: Instant-listing memecoin launchpad on Robinhood Chain, powered by Uniswap. Navbar LaunchHood, links Home /create /claim /docs, href https://x.com/launchhood title @launchhood on X, href https://t.me/launchhood. No twitter:site. Vercel, x-matched-path /." }
  - { id: R-2, publisher: LaunchHood, title: "Docs — LaunchHood", url: "https://launchhood.com/docs", published_at: null, accessed_at: 2026-09-03T04:31:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-5, CLM-6, CLM-8, CLM-11, CLM-15, CLM-17, CLM-18, CLM-20, CLM-29], excerpt: "LaunchHood is a memecoin launchpad on Robinhood Chain. Uniswap (V3 pools), pool fee 1%, starting market cap ≈ 1.35 ETH, creation fee none. 50/50 creator/protocol. Graduation threshold 4 ETH of net buys; what changes on-chain nothing. Factory 0x62B33A039D289CBDa50EbeB72Fe4261449E61Bcf. Liquidity locker 0x99B79154Ff4Fc0e313549B809254B02722631ee0. Token impl 0x5FDf73abC7A232d91b03638c2f9a52c16aB0E3bE. FAQ: locker has no withdrawal function — principal can never be pulled." }
  - { id: R-3, publisher: LaunchHood, title: "launchhood.com JS address map (chunk 12-baa0398882ffcc6b.js)", url: "https://launchhood.com/_next/static/chunks/12-baa0398882ffcc6b.js", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-15, CLM-17, CLM-19, CLM-27], excerpt: "Number('4663'); 4663 map LaunchHoodV3Factory 0x62B33A039D289CBDa50EbeB72Fe4261449E61Bcf, LaunchHoodV3Locker 0x99B79154Ff4Fc0e313549B809254B02722631ee0, LaunchHoodV3TokenImpl 0x5FDf73abC7A232d91b03638c2f9a52c16aB0E3bE, plus legacy LaunchHoodFactory 0x2e9fbF18F6492F6651B983c34629d292516DE86e, LaunchHoodHook 0xdCf5A30AaD9D194330a3934E7994B3D2B25F68Cc, LaunchHoodTokenImpl 0xc2BcD96d76d036B78B76DdFE9089fA6932a64474. ABI function launchToken on LaunchHoodV3Factory.TokenParams." }
  - { id: R-4, publisher: LaunchHood, title: "Create coin page", url: "https://launchhood.com/create", published_at: null, accessed_at: 2026-09-03T04:31:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-1], excerpt: "title Launch a coin — LaunchHood. description: Launch a memecoin on Robinhood Chain in one transaction — instant Uniswap listing, liquidity locked forever. Form fields Name, Ticker, Description, Initial buy (ETH, optional), Reward recipient. Submit Launch coin. JS functionName launchToken on LaunchHoodV3Factory." }
  - { id: R-5, publisher: LaunchHood, title: "Claim / earnings page", url: "https://launchhood.com/claim", published_at: null, accessed_at: 2026-09-03T04:31:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-20], excerpt: "Connect to see fees your wallet earns — from coins you've launched or coins where you're the reward recipient." }
  - { id: R-6, publisher: LaunchHood, title: "Official indexer GraphQL", url: "https://indexer-production-ebfa.up.railway.app/graphql", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-12], excerpt: "JS uniswap.indexerUrl https://indexer-production-ebfa.up.railway.app/graphql. Query tokens totalCount 0 items []. _meta.status.robinhood.ready false; block.number 13637438." }
  - { id: R-7, publisher: "@Launchhood", title: "Launchhood profile", url: "https://x.com/Launchhood", published_at: null, accessed_at: 2026-09-03T04:31:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-16, CLM-21, CLM-22, CLM-23, CLM-26], excerpt: "Display name Launchhood. Handle @Launchhood. Bio: First Launchpad built on t.co/Eh59sEhWUR. $launch 0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de. Followers 1871. t.co/Eh59sEhWUR Location https://pools.trade/." }
  - { id: R-8, publisher: "@Launchhood", title: "pools.fun trading is live on launchhood.com", url: "https://x.com/Launchhood/status/2087253166387781771", published_at: 2026-08-11T19:01:48Z, accessed_at: 2026-09-03T04:31:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24, EVT-4], excerpt: "pools.fun trading is live on launchhood.com. Track and trade all tokens. Deploy new tokens. Deploy tokens with auto buyback/burn mode too. @pools_dot_fun @alexmccurryo @0xDeployer @SushiSwap." }
  - { id: R-9, publisher: "@Launchhood", title: "We started with v4 but later moved to v3", url: "https://x.com/Launchhood/status/2082810294137733312", published_at: 2026-07-30T12:47:25Z, accessed_at: 2026-09-03T04:32:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-3], excerpt: "We started with v4 but later moved to v3 as v4 hooks were not properly integrated in various terminals." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-16], excerpt: "hash 0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de name LaunchHood is_contract true is_verified true proxy_type eip1167. implementations 0xc2BcD96d76d036B78B76DdFE9089fA6932a64474 name LaunchHoodToken. creator 0x2e9fbF18F6492F6651B983c34629d292516DE86e. creation_transaction_hash 0xfb093139a3e05dd6defe81da8a320a69ce9c3109680524d1c80a8e0e3de7f05f. token name LaunchHood symbol Launch total_supply 1e27 holders_count 522." }
  - { id: R-11, publisher: "@Launchhood", title: "Buyback/Burn Mode for pools.trade Instant Mode", url: "https://x.com/Launchhood/status/2085115645017067626", published_at: 2026-08-05T21:28:04Z, accessed_at: 2026-09-03T04:31:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-29, EVT-5], excerpt: "Introducing Buyback/Burn Mode for pools.trade Instant Mode on launchhood.com. 0.25% LP fee pool, 1B fixed supply, LP locked. Instead of protocol fees going to the creator, 100% of fees are sent to the Burner." }
  - { id: R-12, publisher: "@Launchhood", title: "Launchhood is expanding to @arc", url: "https://x.com/Launchhood/status/2081369182923612170", published_at: 2026-07-26T13:20:57Z, accessed_at: 2026-09-03T04:32:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27], excerpt: "Launchhood is expanding to @arc and will provide early access to users before the official mainnet launch. Bridge, swaps, launch. $cUSD <> $USDC." }
  - { id: R-13, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() LaunchHood V3 stack", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-11, CLM-15, CLM-16, CLM-20, CLM-28, EVT-1], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32ad478 (53138552). Factory 0x62B33A03…1Bcf code 15739 B nonce 4149 bal 0 owner() 0x73267feDc2C79a37782C19950b2989B208cfEaA4 launchFee 0 PROTOCOL_TREASURY 0x73267feD…EaA4 LOCKER 0x99B79154…1ee0 TOKEN_IMPL 0x5FDf73ab…E3bE. Locker code 5244 B. V3 token impl code 6821 B. $Launch code 45 B. Legacy factory 0x2e9fbF18…E86e code 15239 B owner 0x73267feD…EaA4. EOA code 0x nonce 98." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x62B33A039D289CBDa50EbeB72Fe4261449E61Bcf", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x62B33A039D289CBDa50EbeB72Fe4261449E61Bcf", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-10, CLM-12, CLM-28, EVT-1], excerpt: "name LaunchHoodV3Factory is_contract true is_verified true proxy_type null. creator_address_hash 0x73267feDc2C79a37782C19950b2989B208cfEaA4. creation_transaction_hash 0x42a2aba7e8fdb62bdc4005fd7ca155e1189ba0315d8aa5a073db0b2016f8d436 timestamp 2026-07-13T06:58:43Z. counters transactions_count 4151 token_transfers_count 8298." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x99B79154Ff4Fc0e313549B809254B02722631ee0", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x99B79154Ff4Fc0e313549B809254B02722631ee0", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-10], excerpt: "name LaunchHoodV3Locker is_contract true is_verified true proxy_type null. creator 0x73267feDc2C79a37782C19950b2989B208cfEaA4. creation_transaction_hash 0xa0b229967ba3698d30fdc6313b80634f4b94ac55ce558783c7d999a0cf56ae46 timestamp 2026-07-13T06:58:42Z." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x5FDf73abC7A232d91b03638c2f9a52c16aB0E3bE", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x5FDf73abC7A232d91b03638c2f9a52c16aB0E3bE", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "name LaunchHoodV3Token is_contract true is_verified true. creator 0x73267feDc2C79a37782C19950b2989B208cfEaA4. creation_transaction_hash 0x67b5c51603278b928ffbb76449571ef544ba139539d5e78cae98101608f26068 timestamp 2026-07-13T06:58:41Z." }
  - { id: R-17, publisher: Blockscout, title: "Address 0x2e9fbF18F6492F6651B983c34629d292516DE86e", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x2e9fbF18F6492F6651B983c34629d292516DE86e", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-19, CLM-28], excerpt: "name LaunchHoodFactory is_contract true is_verified true. creator 0x73267feDc2C79a37782C19950b2989B208cfEaA4. creation_transaction_hash 0xb57e73e7f330e63a7ba189db4e4a30399f9a60b83cee6b6dc4a2051db0966ec4 timestamp 2026-07-12T08:41:49Z." }
  - { id: R-18, publisher: Blockscout, title: "$Launch creation tx 0xfb093139…f05f", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0xfb093139a3e05dd6defe81da8a320a69ce9c3109680524d1c80a8e0e3de7f05f", published_at: 2026-07-12T10:40:01Z, accessed_at: 2026-09-03T04:34:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, CLM-28, EVT-2], excerpt: "timestamp 2026-07-12T10:40:01.000000Z status ok result success. from 0x73267feDc2C79a37782C19950b2989B208cfEaA4. to 0x2e9fbF18F6492F6651B983c34629d292516DE86e name LaunchHoodFactory. method createToken." }
  - { id: R-19, publisher: Robinhood Chain RPC, title: "eth_getCode $Launch and LaunchHoodToken impl", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:33:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, EVT-2], excerpt: "0x63575bCC…C0de code 45 B EIP-1167 prefix 0x363d3d373d3d3d363d. Implementation 0xc2BcD96d…4474 code 4606 B; Blockscout name LaunchHoodToken is_verified true creator 0x73267feD…EaA4." }
  - { id: R-20, publisher: Blockscout, title: "Address 0x73267feDc2C79a37782C19950b2989B208cfEaA4", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x73267feDc2C79a37782C19950b2989B208cfEaA4", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11, CLM-28], excerpt: "hash 0x73267feDc2C79a37782C19950b2989B208cfEaA4 is_contract false is_verified false name null. RPC eth_getCode 0x; nonce 98." }
  - { id: R-21, publisher: GeckoTerminal, title: "token 0x63575bcc…c0de", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-13], excerpt: "HTTP 200. name LaunchHood symbol Launch decimals 18 total_supply 1e27 price_usd 0.00001998430239 fdv_usd 19984.3023944209 total_reserve_in_usd 6893.72 volume_usd.h24 9052.9559096271. Top pool robinhood_0x379c011a…d6a3 dex uniswap-v4-robinhood name Launch / WETH pool_created_at 2026-07-12T10:40:01Z reserve_in_usd 10474.898." }
  - { id: R-22, publisher: Blockscout, title: "Factory counters 0x62B33A03…1Bcf", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x62B33A039D289CBDa50EbeB72Fe4261449E61Bcf/counters", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "transactions_count 4151. token_transfers_count 8298. gas_usage_count 24482112964." }
  - { id: R-23, publisher: DexScreener, title: "latest/dex/tokens $Launch", url: "https://api.dexscreener.com/latest/dex/tokens/0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-13], excerpt: "npairs 3 chainId robinhood. Top pair 0x379c011a…d6a3 dexId uniswap Launch/ETH liq 10912.35 vol 9002.32 fdv 19973. info.websites https://launchhood.com/ and https://t.me/launchhoodbot. socials https://x.com/launchhood twitter, https://t.me/launchhood telegram." }
  - { id: R-24, publisher: DefiLlama, title: "protocol/launchhood", url: "https://api.llama.fi/protocol/launchhood", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25], excerpt: "HTTP 400. api.llama.fi/protocols 8169 rows; no name/slug/url containing launchhood this pass." }
  - { id: R-25, publisher: GitHub, title: "orgs/launchhood", url: "https://api.github.com/orgs/launchhood", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-25], excerpt: "HTTP 404 for https://api.github.com/orgs/launchhood and https://api.github.com/users/launchhood. search/repositories q=launchhood total_count 0." }
  - { id: R-26, publisher: LaunchHood, title: "indexer _meta stale", url: "https://indexer-production-ebfa.up.railway.app/graphql", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-12], excerpt: "_meta.status.robinhood.ready false. block.number 13637438 timestamp 1784443671. tokens.totalCount 0. RPC eth_blockNumber at the same pass was 53138552." }
  - { id: R-27, publisher: GeckoTerminal, title: "token info 0x63575bcc…c0de", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x63575bCC942aCC51495E492A0498eb4Ac0A4C0de/info", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-21], excerpt: "HTTP 200. websites []. twitter_handle empty. telegram_handle empty. gt_verified false. holders.count 527. gt_score 20.22." }
  - { id: R-28, publisher: "@Launchhood", title: "Launchhood is leading launcher on pools.trade", url: "https://x.com/Launchhood/status/2085063180800438710", published_at: 2026-08-05T17:59:35Z, accessed_at: 2026-09-03T04:31:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-29], excerpt: "Launchhood is leading launcher on pools.trade. 600 tokens launched. 65 meme stocks. 1mil+ volume generated. Soon you will be able to launch meme/meme." }

gaps:
  - { priority: P0, question: "How many tokens has LaunchHoodV3Factory actually created, and is nonce 4149 / transactions_count 4151 a CREATE2 launch count?", checked: "Docs say per-token addresses are CREATE2 from the factory; RPC nonce 4149; Blockscout transactions_count 4151; official indexer tokens.totalCount 0 with ready false at block 13637438 vs RPC 53138552, 2026-09-03", next: "eth_getLogs TokenCreated/launchToken on 0x62B33A03…1Bcf; do not use the stale indexer total" }
  - { priority: P0, question: "Does verified LaunchHoodV3Locker source expose any principal withdraw, NFT transfer, or decreaseLiquidity path despite bytecode missing those selectors?", checked: "owner() revert; bytecode has collect, lacks withdraw/decreaseLiquidity/transferFrom; docs FAQ says no withdrawal function, 2026-09-03", next: "read Blockscout verified source for LaunchHoodV3Locker and record the exact collect-only surface" }
  - { priority: P1, question: "What can owner 0x73267feD…EaA4 change after deploy (fee, whitelist, dex config, token impl), and is there a timelock?", checked: "owner() and PROTOCOL_TREASURY() are this EOA; eth_getCode 0x; JS ABI has setLaunchFee, setWhitelistedLauncher, addDexConfig, updateLaunchConfig, transferOwnership; no timelock named, 2026-09-03", next: "eth_call remaining admin getters; read verified factory source modifiers" }
  - { priority: P1, question: "Is there an audit whose scope matches LaunchHoodV3Factory 0x62B33A03…1Bcf and locker 0x99B79154…1ee0?", checked: "/docs, site HTML, @Launchhood, GitHub 404, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P2, question: "Is the pools.trade Instant Mode / Burner path still callable from launchhood.com, or is it only historical handle copy?", checked: "Create page JS calls V3 factory launchToken; /docs is Uniswap V3 1%; handle Aug 5 still described 0.25% Instant Mode, 2026-09-03", next: "do not merge those fee tables; reproduce any remaining pools.trade frontend route if it still exists" }
  - { priority: P2, question: "Did Arc launches, swaps, or circleswap.app ever land with a factory on a non-4663 chain?", checked: "Handle posts 26–31 Jul 2026; JS address map only keys 4663 this pass, 2026-09-03", next: "do not set chain_scope multichain until an Arc factory is reproduced" }

---

# LaunchHood — research packet

## What it is

LaunchHood is a memecoin launchpad on Robinhood Chain at launchhood.com. The live create path is LaunchHoodV3Factory: one transaction mints a 1B-supply token into a Uniswap V3 1% pool and sends the LP NFT to LaunchHoodV3Locker. Docs treat 4 ETH of net buys as a site graduation badge, not a pool migration. The handle is @Launchhood; the bio still says First Launchpad built on pools.trade.

Themes: launchpad

## Why it matters

This is a net-new pad row, not Uniswap Labs pools.trade. The current factory is a LaunchHood-owned Uniswap V3 launcher with a 1% fee and a 50/50 creator split, while the handle still advertises a historical pools.trade Instant Mode frontend. The protocol token $Launch is a separate legacy-factory clone with a live Uniswap v4 book. [claim R-2 R-7 R-21]

## What could go wrong

owner() and PROTOCOL_TREASURY() on the V3 factory are one EOA with no code. JS ABI lets that owner set the launch fee, whitelist launchers, and change dex/launch configs. The official indexer is stale, so activity counts from it are not usable. Handle copy still describes a 0.25% pools.trade Instant Mode path that /docs no longer describes. [verified R-13 R-14] [claim R-3 R-11]

## Product and mechanics

Docs: no bonding-curve pre-DEX phase. The pool the coin starts in is the pool it lives in. Supply 1B, all in the pool. Temporary 2% max-wallet for 366 blocks. Optional initial buy in the launch transaction. Creator fees claimable from /claim; reward recipient can be set at launch. [claim R-2 R-4]

The create page calls launchToken on LaunchHoodV3Factory. JS also retains a legacy 4663 map (LaunchHoodFactory, LaunchHoodHook, LaunchHoodTokenImpl) from the v4 path the handle said it left on 30 Jul 2026. $Launch 0x63575bCC…C0de was created through that older factory on 12 Jul, the day before the V3 factory deploy. [claim R-3 R-9] [verified R-18]

## Control and security

V3 factory, locker, and token implementation are verified, non-proxy contracts. owner() 0x73267feDc2C79a37782C19950b2989B208cfEaA4. Same EOA is PROTOCOL_TREASURY and created the locker and token impl. Locker bytecode has collect and does not contain withdraw / decreaseLiquidity / transferFrom selectors; owner() on the locker reverts. No timelock address was located. No audit URL. [verified R-13 R-14 R-15] [claim R-2]

## Team and provenance

launchhood.com links https://x.com/launchhood in the navbar. @Launchhood bio names pools.trade, not launchhood.com, and prints $Launch 0x63575bCC…C0de. DexScreener token info lists launchhood.com and x.com/launchhood. Flag unconfirmed-official. No GitHub org or user. Display name Launchhood vs site LaunchHood. [claim R-1 R-7 R-23 R-25]

## Economics and activity

Llama has no launchhood protocol. Gecko and DexScreener figures above are the $Launch token book (fdv ~20k, 24h volume ~9k), not pad TVL. V3 factory nonce 4149 and Blockscout transactions_count 4151 are on-chain activity signals; they are not a verified token census. Handle 5 Aug claimed 600 tokens launched on pools.trade — that is the Instant Mode frontend, not a V3-factory count. Latest handle post 11 Aug. [claim R-8 R-21 R-22 R-24 R-28]

## Material risks

- V3 factory owner is one EOA; ABI includes setLaunchFee and config updates. [verified R-13]
- Official indexer is not ready; do not use totalCount 0. [verified R-26]
- Handle bio still points at pools.trade; current docs are a different Uniswap V3 factory. [claim R-2 R-7]
- $Launch is a legacy v4-factory clone, not a V3-factory launch. [verified R-18]
- No audit report URL. [unknown]
- Handle has not posted since 2026-08-11 this pass. [claim R-8]

## Verification passes

- Receipts: launchhood.com, /docs, /create, /claim, JS address map, X profile and posts, t.co expand to pools.trade, Gecko token+info, DexScreener, Llama 400, GitHub 404, indexer GraphQL, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-2 R-13 R-14]
- Numbers: $Launch fdv/volume are Gecko/DexScreener token books, not pad TVL. Bytecode lengths, nonce, owner(), launchFee, LOCKER, TOKEN_IMPL are chain 4663 RPC. Factory tx count is Blockscout counters. [verified R-13 R-21 R-22]
- Adversarial: strongest contrary reading is that LaunchHood is just a pools.trade UI and should merge into packed pools-trade. /docs and the create page target LaunchHoodV3Factory 0x62B33A03…1Bcf, a verified contract this pad's EOA deployed on 13 Jul, not Uniswap Labs 0x0000FffF…19C0 / InstantLaunchStrategy 0x23f82095…27f1. Bio naming pools.trade is historical frontend copy. [inference R-2 R-3 R-13]

## Operations log

- Census.yaml has no launchhood row; no content/projects/launchhood.yaml. Discovery inventory names launchhood.com / @Launchhood / factory 0x62b33a…1bcf.
- launchhood.com, /docs, /create, /claim, JS chunks 12-baa0398882ffcc6b.js and create page, indexer GraphQL opened 2026-09-03.
- X: @Launchhood profile; Latest from:Launchhood through 11 Aug 2026; 30 Jul v4-to-v3 post; 5 Aug Buyback/Burn and 600-token posts; 26–31 Jul Arc posts. t.co/Eh59sEhWUR → pools.trade.
- RPC https://rpc.mainnet.chain.robinhood.com with browser User-Agent: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), pendingOwner(), launchFee(), PROTOCOL_TREASURY(), LOCKER(), TOKEN_IMPL(), ERC1967 slot on factory, locker, token impls, $Launch, owner EOA.
- Blockscout api/v2 for V3 factory, locker, V3 token impl, legacy factory, $Launch, owner, factory counters, creation txs.
- Gecko first GET 200 then token + info + pools. DexScreener latest/dex/tokens. api.llama.fi/protocol/launchhood 400. api.github.com/orgs/launchhood and /users/launchhood 404; search total_count 0.
