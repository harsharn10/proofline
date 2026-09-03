---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: easya-kickstart
name: EasyA Kickstart
packet_tier: seed
as_of: 2026-09-03T05:25:00Z
prior_packet: null
supersedes: null
owned_slugs: [easya-kickstart]
allowed_paths:
  - research/inbox/packets/easya-kickstart/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: EasyA Kickstart
  aliases: [Kickstart, EasyA]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://kickstart.easya.io
  official_handle: "@EasyA_Kickstart"
  repository: "NULL — kickstart.easya.io HTML, /robinhood, /robinhood/create, /guide, and @EasyA_Kickstart do not name a factory repository; api.github.com/orgs/easya 404; EasyA-Tech/kickstart-skills is a Base agent skill, not the chain-4663 factory source this pass"
  possible_matches:
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired Airlock factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "EasyA Kickstart is a Uniswap v4 pad at kickstart.easya.io / @EasyA_Kickstart with PumpFactory 0x519f…273e and StockLaunchpad 0x785d…5Fc1"
        - "No shared domain, handle, or reproduced address"
    - slug: longshot
      signals: [other]
      contrary_signals:
        - "Census Longshot is a launch/fee-router at uselongshot.xyz / @uselongshot"
        - "EasyA Kickstart is kickstart.easya.io / @EasyA_Kickstart with factories 0x519f…273e and 0x785d…5Fc1"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "Kickstart RH create copy: launches directly on Uniswap v4 with one-sided locked liquidity; JS ABI has no bonding-curve function"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is @hoodfunfamily"
        - "EasyA Kickstart is @EasyA_Kickstart / kickstart.easya.io"
        - "No shared domain, handle, or reproduced address"
    - slug: stonks-fun
      signals: [other]
      contrary_signals:
        - "Census Stonks.fun is @stonksdotfun"
        - "EasyA Kickstart is @EasyA_Kickstart / kickstart.easya.io"
        - "No shared domain, handle, or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Census pools.trade is Uniswap Labs LiquidityLauncher at @pools_dot_fun / @TradePools"
        - "Kickstart factories are PumpFactory 0x519f…273e and StockLaunchpad 0x785d…5Fc1, not the pools.trade launch entries"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [ticker-only]
      contrary_signals:
        - "Census Artificial Inu is a stock-paired token at artificialinu.com / @ArtificiallyInu, entity_kind token"
        - "Kickstart /api/robinhood/tokens listed a separate live token named Artificial Inu / AI quoting NVDA 0xd060…9EEC; that row is a pad output, not this protocol"
        - "Official surfaces are kickstart.easya.io / @EasyA_Kickstart, not artificialinu.com"

classification:
  primary_leaf: launch/stock-paired-factory
  secondary_leaves: [launch/uni-pool-launch]
  mechanism_tags: [launchpad, rwa, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Official app JS pins chain-4663 factory 0x519f…273e and stockLaunchpad 0x785d…5Fc1. RPC and Blockscout show both as verified FactoryProxy (EIP-1967) with PumpFactory and StockLaunchpad implementations. totalTokens 3138 + 9 equals /api/robinhood/tokens total 3147. Distinct from LONG, dontblink, and lunch.fun. Not a census row. [R-3] [R-8] [R-10] [R-11] [R-12] [R-13] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11, CLM-17], note: "" }

links:
  - { kind: site, url: "https://kickstart.easya.io", authenticity: unconfirmed }
  - { kind: app, url: "https://kickstart.easya.io/robinhood", authenticity: unconfirmed }
  - { kind: app, url: "https://kickstart.easya.io/robinhood/create", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/EasyA_Kickstart", authenticity: unconfirmed }
  - { kind: other, url: "https://kickstart.easya.io/api/robinhood/tokens", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/+PYEPxw-L9n81NDA0", authenticity: unconfirmed }
  - { kind: github, url: "https://github.com/EasyA-Tech/kickstart-skills", authenticity: unconfirmed }

deployments:
  - label: ETH PumpFactory proxy
    role: factory
    address:
      value: "0x519fd71F5df8242Fb8BccAA346eA5B20c336273e"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-8, R-10, R-11]
  - label: PumpFactory implementation
    role: implementation
    address:
      value: "0x2A01f98D59A0f34869B5A52C705045135c29E815"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-11, R-18]
  - label: StockLaunchpad proxy
    role: factory
    address:
      value: "0x785dCae72C87Ad4d28A703A6c5db455891615Fc1"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-8, R-12, R-13]
  - label: StockLaunchpad implementation
    role: implementation
    address:
      value: "0xEF241C8da8e44B57296Cb1C58Cc6C769a04994BE"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-12, R-13, R-19]
  - label: ETH factory ProxyAdmin
    role: admin
    address:
      value: "0xC190fb813Df94A936643cDD29A45deeDD089ab66"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-20]
  - label: StockLaunchpad ProxyAdmin
    role: admin
    address:
      value: "0xe2f56e355983482948B4029E2D3a9a552805c8e9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-12, R-21]
  - label: feeCollector / ProxyAdmin owner()
    role: admin
    address:
      value: "0x981DA90234D2570450b38bAc900D5244b386e587"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-10, R-12, R-20, R-22]

metrics:
  - { kind: tvl, value: "NULL — api.llama.fi/protocol/easya-kickstart currentChainTvls empty; chains [Solana] only; no Robinhood Chain slice this pass", currency: USD, as_of: 2026-09-03T05:15:00Z, window: point, method: "api.llama.fi/protocol/easya-kickstart currentChainTvls", class: unknown, receipt_ids: [R-17] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:15:00Z, receipt_ids: [R-10, R-11, R-18, R-20], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. Factory 0x519fd71F…273e eth_getCode 793 bytes prefix 0x6080604052337f0000…c190fb81; nonce 0x1886 (6278); balance 0. owner() reverts. ERC1967 implementation slot 0x2A01f98D59A0f34869B5A52C705045135c29E815. totalTokens() 3138. feeCollector() 0x981DA902…e587. ProxyAdmin 0xC190fb81…ab66 eth_getCode 881 bytes; owner() 0x981d…e587. Blockscout factory name FactoryProxy is_verified true proxy_type eip1967; implementation name PumpFactory is_verified true; ProxyAdmin is_verified true." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:15:00Z, receipt_ids: [R-12, R-13, R-19, R-21], result: "StockLaunchpad 0x785dCae7…5Fc1 eth_getCode 793 bytes prefix 0x6080604052337f0000…e2f56e35; nonce 0x14 (20); balance 0. owner() reverts. ERC1967 slot 0xEF241C8da8e44B57296Cb1C58Cc6C769a04994BE. totalTokens() 9. feeCollector() 0x981DA902…e587. Admin 0xe2f56e35…c8e9 eth_getCode 881 bytes; owner() 0x981d…e587. Blockscout proxy name FactoryProxy is_verified true proxy_type eip1967; implementation name StockLaunchpad is_verified true; admin is_verified false. Testnet factory 0x496470dD…b3D5 eth_getCode 0x on 4663." }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-6], result: "@EasyA_Kickstart display name EasyA Kickstart; bio Launch, trade and back the next big idea; website kickstart.easya.io; 16088 followers. kickstart.easya.io title EasyA Kickstart - Buy into the future; og:url https://kickstart-solana.easya.io; twitter:card summary_large_image; no twitter:site or twitter:creator this pass." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:15:00Z, receipt_ids: [R-16, R-10, R-12], result: "GET https://kickstart.easya.io/api/robinhood/tokens HTTP 200 JSON keys items,total,nextCursor; total 3147. Factory totalTokens 3138 + StockLaunchpad totalTokens 9 = 3147. First item token 0x3272b3b7…7349 name Console quote 0x1b0E319c…153E (GME). One item name Artificial Inu symbol AI quote 0xd0601CE1…9EEC quoteSymbol NVDA." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Robinhood create: one click launches a token that is instantly tradeable, paired with ETH or one of 24 listed stock tokens, into a Uniswap v4 pool with one-sided locked liquidity. Creator fee recipient is ~1% of volume, payable to a wallet, an X/Instagram bio wallet, or a Kickstarter project. JS ABI: ETH path createToken on factory 0x519f…273e; stock path createToken(name,symbol,uri,quote,…) on stockLaunchpad 0x785d…5Fc1 emitting StockTokenLaunched.", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-3, R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://kickstart.easya.io", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@EasyA_Kickstart", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-17], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "EasyA Kickstart", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x519fd71F5df8242Fb8BccAA346eA5B20c336273e", class: verified, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-8, R-10, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x785dCae72C87Ad4d28A703A6c5db455891615Fc1", class: verified, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-8, R-12, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-10, R-11, R-16], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/stock-paired-factory, class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-3, R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0x981DA90234D2570450b38bAc900D5244b386e587", class: verified, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-10, R-12, R-20, R-22], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "ETH factory 0x519f…273e and StockLaunchpad 0x785d…5Fc1 are ERC1967 FactoryProxy shells. Implementation slots 0x2A01…E815 (PumpFactory, verified) and 0xEF24…94BE (StockLaunchpad, verified). Immutable admin slots 0xC190…ab66 (verified ProxyAdmin) and 0xe2f5…c8e9 (unverified, 881-byte code).", class: verified, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-10, R-11, R-12, R-13, R-20, R-21], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "No timelock address in the official JS config, create page, or ProxyAdmin owner() path this pass. ProxyAdmin owner() on both admins is EOA 0x981d…e587 with no code.", class: claim, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-8, R-20, R-22], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "kickstart.easya.io/api/robinhood/tokens total 3147 on 2026-09-03; factory totalTokens() 3138; StockLaunchpad totalTokens() 9", class: verified, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-16, R-10, R-12], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "@EasyA_Kickstart 2026-09-02: token creators have already earned over $1,000,000 on Kickstart since launch. The post does not split Solana vs Robinhood Chain.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: security.audit, value: "No audit report URL was located on kickstart.easya.io, /guide, /robinhood, the @EasyA_Kickstart profile, or Llama audits this pass; Llama audits field 0", class: unknown, observed_at: 2026-09-03T05:16:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-6, R-17, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: relationship, value: "Distinct from census LONG (app.long.xyz / LongLauncher 0x22e9…eeED), from dontblink (dontblink.community / PortalProxy 0x7a4E…d59c), and from lunch.fun (lunch.fun / LunchV3/V4 launchers). No shared domain, handle, or reproduced address.", class: claim, observed_at: 2026-09-03T05:16:00Z, receipt_ids: [R-1, R-6, R-10, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: product.mechanism, value: "Stock path: create page lists 24 quote tokens (featured NVDA TSLA SPY AAPL SPCX GME) and Browse all 24. ABI createToken(..., address quote, ...) and event StockTokenLaunched. /api/robinhood/tokens rows with quote include GME 0x1b0E…153E and NVDA 0xd060…9EEC.", class: claim, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-3, R-7, R-8, R-16], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-18, field: product.mechanism, value: "ETH path: JS 4663 protocol.factory createToken(name,symbol,uri,minTokensOut,deadline) payable. Create copy: Launches directly on Uniswap v4 with one-sided locked liquidity. Cost: Network fees only. Initial buy copy also names a 2% protocol and creator fee on the atomic Uniswap v4 swap.", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@EasyA_Kickstart.official", value: "Handle website field names kickstart.easya.io. kickstart.easya.io HTML has og:url kickstart-solana.easya.io and no twitter:site this pass. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-20, field: "account.@EasyA_Kickstart.slug", value: easya-kickstart, class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@EasyA_Kickstart.role", value: project, class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "@EasyA_Kickstart on 2026-09-01 posted that Kickstart on Robinhood Chain can launch tokens paired with $NVDA, $SPCX, $GME and that the creator earns 1% of trading volume in the stock. On 2026-09-02 it posted stock creator fees are now LIVE, with fees sendable in a favorite stock.", class: claim, observed_at: 2026-09-03T05:08:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: identity.repository, value: "NULL — api.github.com/orgs/easya 404; EasyA-Tech/kickstart-skills description is Agent skill for creating tokens on EasyA Kickstart. Fair launch launchpad on Base; site and handle do not link a RH factory repo this pass", class: claim, observed_at: 2026-09-03T05:16:00Z, receipt_ids: [R-6, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: other, value: "Llama protocol easya-kickstart is EasyA Kickstart, twitter EasyA_Kickstart, category Launchpad, chains [Solana], github null, audits 0, currentChainTvls empty. Description: Permissionless ideas launchpad on Solana built on top of Meteora Dynamic Bonding Curve. No Robinhood Chain slice. Flag wrong-chain for that TVL surface.", class: claim, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: "account.@EasyAKicksta.flags", value: handle-collision, class: claim, observed_at: 2026-09-03T05:05:00Z, receipt_ids: [R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: identity.alias, value: Kickstart, class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-1, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: control.privileged-role, value: "feeCollector() on both factories returns EOA 0x981d…e587. The same EOA created both proxies and both implementations, and is owner() of both ProxyAdmins.", class: verified, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-10, R-12, R-20, R-22], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-28, field: taxonomy.secondary-leaf, value: launch/uni-pool-launch, class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: other, value: "JS also lists testnet 46630 factory 0x496470dD6f316840FfFB03B4AD21b338f6Aeb3D5. eth_getCode on chain 4663 is empty. Flag wrong-chain if that address is posted as a mainnet factory.", class: verified, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-8, R-15], reproduction_ids: [REP-2], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "RPC: ETH PumpFactory proxy has code, tokens, and matching implementation slot"
    summary: "Factory 0x519f…273e is a verified ERC1967 FactoryProxy on chain 4663 with 793-byte code, nonce 6278, totalTokens 3138, feeCollector 0x981d…e587, and implementation PumpFactory 0x2A01…E815."
    occurred_at: 2026-09-03T05:15:00Z
    observed_at: 2026-09-03T05:15:00Z
    affected_fields: [deployment.address, control.owner, control.proxy, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10, R-11]
  - id: EVT-2
    type: onchain
    title: "RPC: StockLaunchpad proxy has code and nine tokens"
    summary: "StockLaunchpad 0x785d…5Fc1 is a verified ERC1967 FactoryProxy on chain 4663 with 793-byte code, nonce 20, totalTokens 9, the same feeCollector, and implementation StockLaunchpad 0xEF24…94BE."
    occurred_at: 2026-09-03T05:15:00Z
    observed_at: 2026-09-03T05:15:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12, R-13]
  - id: EVT-3
    type: company
    title: "@EasyA_Kickstart posts stock-paired launches on Robinhood Chain"
    summary: "On 2026-09-01 the handle posted that Kickstart on Robinhood Chain can launch tokens paired with $NVDA, $SPCX, $GME and that the creator earns 1% of trading volume in the stock."
    occurred_at: 2026-09-01T09:54:57Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-3]
  - id: EVT-4
    type: company
    title: "@EasyA_Kickstart posts stock creator fees live"
    summary: "On 2026-09-02 the handle posted that stock creator fees are now LIVE on Kickstart and that creator fees can be sent to anybody in a favorite stock, naming $NVDA."
    occurred_at: 2026-09-02T14:22:49Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-5
    type: company
    title: "@EasyA_Kickstart posts Kickstart live on Robinhood (beta)"
    summary: "On 2026-07-14 the handle posted Kickstart is now live on Robinhood (beta). A follow-up the same day claimed over $1,000,000 in kickstart volume just hours since launching on robinhood."
    occurred_at: 2026-07-14T20:36:43Z
    observed_at: 2026-09-03T05:08:00Z
    affected_fields: [lifecycle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-14]

receipts:
  - { id: R-1, publisher: "@EasyA_Kickstart", title: "EasyA Kickstart profile", url: "https://x.com/EasyA_Kickstart", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-16, CLM-19, CLM-20, CLM-21, CLM-26], excerpt: "Display name EasyA Kickstart. Handle @EasyA_Kickstart. Bio: Launch, trade and back the next big idea. Get your idea funded in seconds. Join the $25 billion+ EasyA ecosystem today. Website kickstart.easya.io. Followers 16088. Blue verified." }
  - { id: R-2, publisher: "@EasyA_Kickstart", title: "kickstart.easya.io/robinhood", url: "https://x.com/EasyA_Kickstart/status/2094831680368287941", published_at: 2026-09-01T16:56:07Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-2], excerpt: "https://kickstart.easya.io/robinhood" }
  - { id: R-3, publisher: "@EasyA_Kickstart", title: "Stock-paired launches on Robinhood Chain", url: "https://x.com/EasyA_Kickstart/status/2094725692411757026", published_at: 2026-09-01T09:54:57Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-1, CLM-8, CLM-17, CLM-22, EVT-3], excerpt: "Kickstart on @RobinhoodCrypto chain just got its biggest upgrade yet. You can now launch tokens paired with your favorite stocks. How it works: 1. Pick a stock: $NVDA, $SPCX, $GME etc 2. Launch the token 3. You'll earn 1% of all trading volume in the stock" }
  - { id: R-4, publisher: "@EasyA_Kickstart", title: "Launch a token paired with your favorite stock", url: "https://x.com/EasyA_Kickstart/status/2095085304327590047", published_at: 2026-09-02T09:43:56Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-13], excerpt: "Launch a token paired with your favorite stock on @robinhood chain. Earn 1% of all trading volume in the stock. Token creators have already earned over $1,000,000 on Kickstart since launch." }
  - { id: R-5, publisher: "@EasyA_Kickstart", title: "Stock creator fees are now LIVE", url: "https://x.com/EasyA_Kickstart/status/2095155491554914549", published_at: 2026-09-02T14:22:49Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-22, EVT-4], excerpt: "Stock creator fees are now LIVE on Kickstart! You can now send creator fees to anybody, in your favorite stock. So if you want to send $NVDA stock to your favorite bull, you can finally do it." }
  - { id: R-6, publisher: EasyA Kickstart, title: "kickstart.easya.io home", url: "https://kickstart.easya.io/", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-2, CLM-4, CLM-15, CLM-16, CLM-19, CLM-23, CLM-26], excerpt: "title EasyA Kickstart - Buy into the future. meta: Buy into startup ideas with instant trading. Fair launch, no presale, community-driven coin launches. og:url https://kickstart-solana.easya.io. twitter:card summary_large_image. No twitter:site. Live coins. Permissionless ideas launchpad, not equity." }
  - { id: R-7, publisher: EasyA Kickstart, title: "Launch your token (Robinhood)", url: "https://kickstart.easya.io/robinhood/create", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-1, CLM-8, CLM-17, CLM-18, CLM-28], excerpt: "Create a token that's instantly tradeable for under $2 in one click. Pair with ETH, NVDA, TSLA, SPY, AAPL, SPCX, GME; Browse all 24. Creator fee recipient ~1% creator fees. Launches directly on Uniswap v4 with one-sided locked liquidity. Cost: Network fees only." }
  - { id: R-8, publisher: EasyA Kickstart, title: "Robinhood JS protocol config", url: "https://kickstart.easya.io/_next/static/chunks/164-8b33bdca42a7b0fd.js", published_at: null, accessed_at: 2026-09-03T05:12:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-10, CLM-11, CLM-18, CLM-29], excerpt: "d={4663:{chain:i,protocol:{factory:r(\"0x519fd71F5df8242Fb8BccAA346eA5B20c336273e\"),stockLaunchpad:r(\"0x785dCae72C87Ad4d28A703A6c5db455891615Fc1\")}},46630:{...factory:r(\"0x496470dD6f316840FfFB03B4AD21b338f6Aeb3D5\")}}. createToken / createTokenFor / StockTokenLaunched ABI present." }
  - { id: R-9, publisher: EasyA Kickstart, title: "Robinhood Chain launches | Kickstart", url: "https://kickstart.easya.io/robinhood", published_at: null, accessed_at: 2026-09-03T05:10:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-2, CLM-4], excerpt: "title Robinhood Chain launches | Kickstart. Live coins. Permissionless ideas launchpad. You are not investing in companies, equity, ownership, revenue, or financial rights. Telegram https://t.me/+PYEPxw-L9n81NDA0." }
  - { id: R-10, publisher: Robinhood Chain RPC, title: "eth_getCode / totalTokens factory 0x519f…273e", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-10, CLM-12, CLM-16, CLM-27, EVT-1], excerpt: "eth_chainId 0x1237. 0x519fd71F…273e code 793 B nonce 6278 bal 0. owner() revert. ERC1967 slot 0x2A01f98D59A0f34869B5A52C705045135c29E815. totalTokens() 3138. feeCollector() 0x981DA90234D2570450b38bAc900D5244b386e587." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x519fd71F5df8242Fb8BccAA346eA5B20c336273e", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x519fd71F5df8242Fb8BccAA346eA5B20c336273e", published_at: null, accessed_at: 2026-09-03T05:14:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-10, EVT-1], excerpt: "name FactoryProxy is_contract true is_verified true proxy_type eip1967. implementations 0x2A01f98D59A0f34869B5A52C705045135c29E815 name PumpFactory. creator_address_hash 0x981DA90234D2570450b38bAc900D5244b386e587. creation_transaction_hash 0x41641acb6d373c1359518d9a68b4cc3ba92f9170f2213910b40b9c078544f174." }
  - { id: R-12, publisher: Robinhood Chain RPC, title: "eth_getCode / totalTokens StockLaunchpad 0x785d…5Fc1", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-9, CLM-10, CLM-12, CLM-16, CLM-27, EVT-2], excerpt: "0x785dCae7…5Fc1 code 793 B nonce 20 bal 0. owner() revert. ERC1967 slot 0xEF241C8da8e44B57296Cb1C58Cc6C769a04994BE. totalTokens() 9. feeCollector() 0x981DA90234D2570450b38bAc900D5244b386e587." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x785dCae72C87Ad4d28A703A6c5db455891615Fc1", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x785dCae72C87Ad4d28A703A6c5db455891615Fc1", published_at: null, accessed_at: 2026-09-03T05:14:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-10, EVT-2], excerpt: "name FactoryProxy is_verified true proxy_type eip1967. implementations 0xEF241C8da8e44B57296Cb1C58Cc6C769a04994BE name StockLaunchpad. creator_address_hash 0x981DA90234D2570450b38bAc900D5244b386e587. creation_transaction_hash 0xcb261da19f13e4864b624472e54127041c03f3ab8a1fb1c3820c9e8a42d11208." }
  - { id: R-14, publisher: "@EasyA_Kickstart", title: "Kickstart is now live on Robinhood (beta)", url: "https://x.com/EasyA_Kickstart/status/2077130192665924023", published_at: 2026-07-14T20:36:43Z, accessed_at: 2026-09-03T05:08:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "Kickstart is now live on Robinhood (beta). Launch, back and trade the next big thing on Robinhood chain. Follow-up 2077177234041827445: over $1,000,000 in kickstart volume just hours since launching on robinhood." }
  - { id: R-15, publisher: Robinhood Chain RPC, title: "eth_getCode testnet factory 0x4964…b3D5 on 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:14:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-29], excerpt: "0x496470dD6f316840FfFB03B4AD21b338f6Aeb3D5 eth_getCode 0x on chain 4663. nonce 0. Blockscout is_contract false. JS lists this address only under chain id 46630." }
  - { id: R-16, publisher: EasyA Kickstart, title: "Robinhood tokens API", url: "https://kickstart.easya.io/api/robinhood/tokens", published_at: null, accessed_at: 2026-09-03T05:15:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-12, CLM-17], excerpt: "HTTP 200 JSON keys items, total, nextCursor. total 3147. First token 0x3272b3b722d0B9Fa96fCb978eC78438080Be7349 name Console quote 0x1b0E319c6A659F002271B69dB8A7df2F911c153E. One row name Artificial Inu symbol AI quote 0xd0601CE157Db5bdC3162BbaC2a2C8aF5320D9EEC quoteSymbol NVDA lifecycle live." }
  - { id: R-17, publisher: DefiLlama, title: "protocol/easya-kickstart", url: "https://api.llama.fi/protocol/easya-kickstart", published_at: null, accessed_at: 2026-09-03T05:15:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-3, CLM-15, CLM-24], excerpt: "name EasyA Kickstart. url https://kickstart.easya.io/. twitter EasyA_Kickstart. github null. category Launchpad. chains [Solana]. audits 0. currentChainTvls {}. description: Permissionless ideas launchpad on Solana built on top of Meteora Dynamic Bonding Curve." }
  - { id: R-18, publisher: Blockscout, title: "Address 0x2A01f98D59A0f34869B5A52C705045135c29E815", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x2A01f98D59A0f34869B5A52C705045135c29E815", published_at: null, accessed_at: 2026-09-03T05:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "name PumpFactory is_contract true is_verified true proxy_type null. creator_address_hash 0x981DA90234D2570450b38bAc900D5244b386e587. RPC eth_getCode 23302 bytes." }
  - { id: R-19, publisher: Blockscout, title: "Address 0xEF241C8da8e44B57296Cb1C58Cc6C769a04994BE", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xEF241C8da8e44B57296Cb1C58Cc6C769a04994BE", published_at: null, accessed_at: 2026-09-03T05:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "name StockLaunchpad is_contract true is_verified true proxy_type null. creator_address_hash 0x981DA90234D2570450b38bAc900D5244b386e587. RPC eth_getCode 22545 bytes." }
  - { id: R-20, publisher: Blockscout, title: "Address 0xC190fb813Df94A936643cDD29A45deeDD089ab66", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xC190fb813Df94A936643cDD29A45deeDD089ab66", published_at: null, accessed_at: 2026-09-03T05:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-10, CLM-11, CLM-27], excerpt: "name ProxyAdmin is_contract true is_verified true. creator_address_hash 0x519fd71F5df8242Fb8BccAA346eA5B20c336273e. creation_transaction_hash 0x41641acb…44f174. RPC eth_getCode 881 bytes. owner() 0x981DA90234D2570450b38bAc900D5244b386e587." }
  - { id: R-21, publisher: Blockscout, title: "Address 0xe2f56e355983482948B4029E2D3a9a552805c8e9", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xe2f56e355983482948B4029E2D3a9a552805c8e9", published_at: null, accessed_at: 2026-09-03T05:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10], excerpt: "name null is_contract true is_verified false. creator_address_hash 0x785dCae72C87Ad4d28A703A6c5db455891615Fc1. creation_transaction_hash 0xcb261da1…1208. RPC eth_getCode 881 bytes. owner() 0x981DA90234D2570450b38bAc900D5244b386e587." }
  - { id: R-22, publisher: Blockscout, title: "Address 0x981DA90234D2570450b38bAc900D5244b386e587", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x981DA90234D2570450b38bAc900D5244b386e587", published_at: null, accessed_at: 2026-09-03T05:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11, CLM-27], excerpt: "hash 0x981DA90234D2570450b38bAc900D5244b386e587. is_contract false. is_verified false. name null. RPC eth_getCode 0x; nonce 0x2d (45)." }
  - { id: R-23, publisher: GitHub, title: "orgs/easya and EasyA-Tech/kickstart-skills", url: "https://api.github.com/orgs/easya", published_at: null, accessed_at: 2026-09-03T05:15:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-15, CLM-23], excerpt: "HTTP 404 for https://api.github.com/orgs/easya. EasyA-Tech/kickstart-skills description: Agent skill for creating tokens on EasyA Kickstart. Fair launch launchpad on Base. Org EasyA-Tech twitter_username null, blog null." }
  - { id: R-24, publisher: X, title: "@EasyAKicksta profile", url: "https://x.com/EasyAKicksta", published_at: null, accessed_at: 2026-09-03T05:05:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-25], excerpt: "Display name EasyA Kickstart. Handle @EasyAKicksta. Bio matches @EasyA_Kickstart. Followers 2. Flag handle-collision versus @EasyA_Kickstart (16088 followers, website kickstart.easya.io)." }

gaps:
  - { priority: P0, question: "Does ProxyAdmin owner 0x981d…e587 sit behind a Safe or timelock on any chain, and can it upgrade PumpFactory / StockLaunchpad without delay?", checked: "owner() on both ProxyAdmins 0x981d…e587; eth_getCode 0x; Blockscout is_contract false; factory owner() reverts; no timelock in JS config, 2026-09-03", next: "read verified ProxyAdmin and PumpFactory source for upgrade selectors and any delay" }
  - { priority: P0, question: "Is StockLaunchpad admin 0xe2f5…c8e9 the same ProxyAdmin bytecode as 0xC190…ab66, and can its source be verified?", checked: "both 881-byte code; owner() same EOA; Blockscout 0xe2f5…c8e9 is_verified false this pass", next: "compare bytecode to 0xC190…ab66 and record verification if it lands" }
  - { priority: P1, question: "Is there an audit report whose scope matches factory 0x519f…273e and StockLaunchpad 0x785d…5Fc1?", checked: "site, /guide, /robinhood, @EasyA_Kickstart, Llama audits 0, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P1, question: "What is the on-chain creator/protocol fee split versus the 1% creator post and the 2% initial-buy copy?", checked: "X 1% of volume in the stock; create page ~1% creator fees; JS initial-buy copy 2% protocol and creator fee; ABI not decoded for fee bps this pass", next: "eth_call fee fields on a live feeShare and read verified PumpFactory source" }
  - { priority: P2, question: "Which GitHub commit matches the verified PumpFactory / StockLaunchpad source?", checked: "api.github.com/orgs/easya 404; EasyA-Tech/kickstart-skills is Base; site HTML has no repo URL, 2026-09-03", next: "search the verified Blockscout source files for a repository URL" }
  - { priority: P2, question: "Does Llama or another aggregator publish a Robinhood Chain TVL slice for Kickstart?", checked: "api.llama.fi/protocol/easya-kickstart chains [Solana] currentChainTvls empty; Gecko skipped this pass", next: "do not use Solana Meteora TVL as a chain-4663 figure; reread Llama if a RH adapter lands" }
---

# EasyA Kickstart — research packet

## What it is

EasyA Kickstart is a permissionless ideas launchpad with a Robinhood Chain lane at kickstart.easya.io/robinhood. A launch creates a Uniswap v4 pool with one-sided locked liquidity. Creators pair against ETH or one of 24 listed stock tokens and claim about 1% of volume in the paired asset. The ETH factory is PumpFactory proxy 0x519f…273e; the stock factory is StockLaunchpad proxy 0x785d…5Fc1. The handle is @EasyA_Kickstart.

Themes: launchpad

## Why it matters

The RH lane is a stock-paired factory that is not LONG, dontblink, or lunch.fun: two published factories, 24 stock quotes, and 3147 API tokens whose counts match on-chain totalTokens. Llama still tracks only Solana. The pad is not a census row. [claim R-3 R-16 R-17] [verified R-10 R-12]

## What could go wrong

Both factories are upgradeable ERC1967 proxies. ProxyAdmin owner() on the ETH factory admin and the stock admin is one externally owned account with no code. The stock admin source is not verified. Llama's Kickstart page is Solana Meteora, so a reader who takes that TVL as a Robinhood Chain figure is on the wrong chain. [verified R-10 R-20 R-22] [claim R-17]

## Product and mechanics

ETH launches call createToken on factory 0x519f…273e and mint into a Uniswap v4 pool with one-sided locked liquidity. Stock launches call createToken with a quote token on StockLaunchpad 0x785d…5Fc1 and emit StockTokenLaunched. The create page lists ETH plus 24 stocks; featured quotes are NVDA, TSLA, SPY, AAPL, SPCX, and GME. Creator fees are about 1% and can be assigned to a wallet, an X or Instagram bio, or a Kickstarter project. [claim R-7 R-8] [verified R-16]

JS initial-buy copy also names a 2% protocol and creator fee on the atomic Uniswap v4 swap. That is a different number from the 1% creator-volume posts; both are claims until fee bps are read from a feeShare. [claim R-7 R-3]

## Control and security

owner() on the factory proxies reverts. feeCollector() on both returns 0x981DA90234D2570450b38bAc900D5244b386e587. That address has no code. It created both proxies and both implementations. ProxyAdmin 0xC190…ab66 (verified) and 0xe2f5…c8e9 (unverified) both return that EOA from owner(). No timelock address was located. [verified R-10 R-20 R-22]

## Team and provenance

@EasyA_Kickstart names kickstart.easya.io in the website field. kickstart.easya.io HTML uses og:url kickstart-solana.easya.io and has no twitter:site. Llama twitter is EasyA_Kickstart. @EasyAKicksta copies the same display name and bio with 2 followers; flag handle-collision. EasyA-Tech/kickstart-skills is a Base agent skill, not the RH factory source. Flag unconfirmed-official. [claim R-1 R-6 R-23 R-24]

## Economics and activity

Factory totalTokens 3138 plus StockLaunchpad totalTokens 9 equals the official Robinhood tokens API total 3147 on 2026-09-03. Llama currentChainTvls is empty and chains is [Solana] only; there is no Robinhood Chain TVL slice this pass. The 2 Sep post that creators earned over $1,000,000 since launch does not split Solana from Robinhood Chain. [verified R-10 R-12 R-16] [claim R-4 R-17]

## Material risks

- Both factories are upgradeable; ProxyAdmin owner is one EOA with no code. [verified R-20 R-22]
- StockLaunchpad admin 0xe2f5…c8e9 source is not verified on Blockscout this pass. [verified R-21]
- No audit report URL. [unknown]
- Llama Kickstart is Solana Meteora, not a Robinhood Chain slice. [claim R-17]
- Creator fee is posted as 1% of volume; the create-page initial-buy copy names 2% protocol and creator fee. [claim R-3 R-7]
- @EasyAKicksta collides on display name with 2 followers. [claim R-24]

## Verification passes

- Receipts: kickstart.easya.io, /robinhood, /robinhood/create, JS chunk 164, tokens API, X profile and posts, Llama protocol, GitHub 404, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-6 R-8 R-10 R-16]
- Numbers: token counts are factory totalTokens plus StockLaunchpad totalTokens against the official chain=robinhood API total, not an all-chains figure. Bytecode lengths, nonces, and owner() are chain 4663 RPC. Llama TVL was not used as a RH number. [verified R-10 R-12 R-16]
- Adversarial: strongest contrary reading is that 0x519f…273e is a leftover PumpFactory and new stock launches use a different factory, or that Kickstart on RH is only a frontend on pools.trade / LONG. Official JS sets 4663 protocol.factory and stockLaunchpad to these addresses; RPC implementation names are PumpFactory and StockLaunchpad; API total matches 3138+9. LONG, dontblink, and lunch.fun are different products. [inference R-8 R-10 R-13]

## Operations log

- Census.yaml has no easya-kickstart row; no content/projects/easya-kickstart.yaml. Discovery inventory names the slug with kickstart.easya.io/robinhood.
- X Latest from:EasyA_Kickstart: profile, 14 Jul live-on-RH post, 1 Sep stock-pair post 2094725692411757026, 1 Sep /robinhood URL 2094831680368287941, 2 Sep 1%/$1M post 2095085304327590047, 2 Sep fees-live post 2095155491554914549.
- Site: kickstart.easya.io, /robinhood, /robinhood/create, /guide (Solana playbook; Streamflow / SOL copy), tokens API.
- JS: /_next/static/chunks/164-8b33bdca42a7b0fd.js and pages/robinhood/create-fa22194764f8b5f0.js; 24 stock quote list extracted.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId, eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), feeCollector(), totalTokens(), ERC1967 slot on 0x519f…273e, 0x785d…5Fc1, 0x4964…b3D5, 0x2A01…E815, 0xEF24…94BE, 0xC190…ab66, 0xe2f5…c8e9, 0x981d…e587.
- Blockscout api/v2 for those addresses.
- api.llama.fi/protocol/easya-kickstart HTTP 200, Solana only. Gecko skipped (packet GET was 404).
- api.github.com/orgs/easya 404; EasyA-Tech/kickstart-skills Base skill.
