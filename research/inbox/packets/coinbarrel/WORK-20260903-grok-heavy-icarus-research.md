---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: coinbarrel
name: Coinbarrel
packet_tier: seed
as_of: 2026-09-03T03:35:00Z
prior_packet: null
supersedes: null
owned_slugs: [coinbarrel]
allowed_paths:
  - research/inbox/packets/coinbarrel/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Coinbarrel
  aliases: [CoinBarrel, "Coinbarrel V2"]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://coinbarrel.com
  official_handle: "@UseCoinbarrel"
  repository: "NULL — no GitHub org or user named coinbarrel; Llama github null; coinbarrel.com and docs.coinbarrel.com HTML have no repository URL this pass"
  possible_matches:
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census Hookr is a Uniswap v4 hook marketplace at hookr.fun / @Hookrfun"
        - "Coinbarrel is a Uniswap V4 Hook V5 token launchpad at coinbarrel.com / @UseCoinbarrel with launcher 0x4234e536aa5da8be18d41ef6f86533430e264e70"
        - "No shared domain, handle, or reproduced address"
    - slug: what-the-hook
      signals: [other]
      contrary_signals:
        - "Census What The Hook is an MEV-redistribution hook at whatthehook.io / @whatthehookv4"
        - "Coinbarrel is a launchpad whose Hook V5 sits on pools it creates, not an MEV-redistribution product"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/hook-programmable
  secondary_leaves: []
  mechanism_tags: [launchpad, rwa]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Docs name Hook V5 as the only new-launch path on Robinhood Chain, with launcherProxy 0x4234e536…e70 public-live. RPC on 4663 returned 163-byte ERC1967 code, owner() 0x30e4…ddba, and implementation slot 0xe398…f5a2. Legacy Simple V3 launcher 0x985d…e46f still has code but is not a new-launch choice. Llama Robinhood Chain TVL 55358 and 7d fees 110181 (page 108291). Distinct from Hookr and What The Hook. Not a census row. [R-2] [R-3] [R-13] [R-19] [R-20] [R-21]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-8], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-11, CLM-14], note: "" }

links:
  - { kind: site, url: "https://coinbarrel.com", authenticity: unconfirmed }
  - { kind: app, url: "https://coinbarrel.com", authenticity: unconfirmed }
  - { kind: docs, url: "https://docs.coinbarrel.com", authenticity: confirmed }
  - { kind: x, url: "https://x.com/UseCoinbarrel", authenticity: unconfirmed }
  - { kind: other, url: "https://coinbarrel.com/integrations/robinhood/deployments.json", authenticity: confirmed }
  - { kind: other, url: "https://docs.coinbarrel.com/developers/robinhood-contract-addresses", authenticity: confirmed }

deployments:
  - label: Unified Hook V5 launcher proxy
    role: factory
    address:
      value: "0x4234e536aa5da8be18d41ef6f86533430e264e70"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-3, R-4, R-13, R-14]
  - label: V5 launcher implementation
    role: implementation
    address:
      value: "0xe398af2721c1dad61eb6d81a4f12f6cb66a4f5a2"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-4, R-13, R-14]
  - label: Legacy Simple V3 launcher proxy
    role: factory
    address:
      value: "0x985dfae571a0c5c90ac997f08687056d2ce1e46f"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-3, R-4, R-15, R-16]
  - label: Unified Hook V5 proxy
    role: proxy
    address:
      value: "0xf667c59cd75ab1d7943fc8284edab51f3a76bfff"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-3, R-7, R-17, R-18]
  - label: Permanent V5 liquidity custody
    role: other
    address:
      value: "0x418ece71c4ece08b71db8c53d59b6bc345efc659"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-3, R-17, R-22]
  - label: V5 launcher and hook owner()
    role: admin
    address:
      value: "0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-13, R-17, R-27]

metrics:
  - { kind: tvl, value: 55358.35, currency: USD, as_of: 2026-09-03T01:26:35Z, window: point, method: "api.llama.fi/protocol/coinbarrel currentChainTvls['Robinhood Chain']", class: claim, receipt_ids: [R-19] }
  - { kind: fees_24h, value: 2304, currency: USD, as_of: 2026-09-03T03:31:00Z, window: 24h, method: "api.llama.fi/summary/fees/coinbarrel total24h (Robinhood Chain)", class: claim, receipt_ids: [R-20] }
  - { kind: revenue_24h, value: 673, currency: USD, as_of: 2026-09-03T03:31:00Z, window: 24h, method: "api.llama.fi/summary/fees/coinbarrel?dataType=dailyRevenue total24h (Robinhood Chain)", class: claim, receipt_ids: [R-26] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-13, R-14], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32a4439 (53101625). V5 launcher 0x4234e536…e70 eth_getCode 163 bytes prefix 0x6080604052600a60; nonce 0xad (173); balance 0. owner() 0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba. ERC1967 implementation slot 0xe398af2721c1dad61eb6d81a4f12f6cb66a4f5a2. pendingOwner() zero. Implementation eth_getCode 24488 bytes. Blockscout api/v2 name ERC1967Proxy is_verified true proxy_type eip1967; implementation is_verified false." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-15, R-16], result: "Legacy V3 launcher 0x985dfae5…e46f eth_getCode 163 bytes; nonce 0x62 (98); owner() 0x30e4…ddba. Blockscout api/v2 name ERC1967Proxy is_verified true; implementation 0x6b0037CbC396D09241488454AaA616Ca2DBfDE11 is_verified false." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-17, R-18, R-27], result: "Hook proxy 0xf667c59c…bfff eth_getCode 163 bytes; ERC1967 slot 0xaf4ea6726c6149b647f494c84553e3449cfb9379; owner() 0x30e4…ddba. Hook implementation eth_getCode 24378 bytes. Custody 0x418ece71…c659 eth_getCode 2657 bytes. Canary token 0x99d0a209…1f23 eth_getCode 8682 bytes. Owner 0x30e4…ddba eth_getCode 0x; nonce 0xf528 (62760). Blockscout owner is_contract false. Hook proxy is_verified true; implementation name CoinbarrelAdvancedHookV5ExternalLiquidity is_verified true." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-9], result: "@UseCoinbarrel bio Create markets on Robinhood via coinbarrel.com; website coinbarrel.com; display name Coinbarrel V2. coinbarrel.com title Coinbarrel; og:title Coinbarrel — Robinhood Chain Token Launchpad; canonical https://coinbarrel.com/; twitter:card summary; no twitter:site or twitter:creator in the HTML this pass." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T03:31:00Z, receipt_ids: [R-19, R-20, R-21, R-23, R-26], result: "api.llama.fi/protocol/coinbarrel currentChainTvls Robinhood Chain 55358.3521; twitter UseCoinbarrel; audits 0; github null; chains [Robinhood Chain]. summary/fees total24h 2304 total7d 110181. dailyRevenue total24h 673 total7d 37179. defillama.com/protocol/coinbarrel page Fees 7d 108291 TVL 55699.9. coinbarrel.com/market/api/v1/tokens chain=robinhood total 259; first token LENNY mint 0x0f44e420…7e73 pool_type univ4 volume_sol_24h 74.4489." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "One transaction creates a fixed-supply ERC-20 (or Advanced ERC-404) and a Uniswap V4 pool with Coinbarrel Hook V5; no bonding curve, no migration threshold, no graduation. Liquidity is minted into permanent PositionManager custody. Standard uses a fixed policy; Advanced exposes directional fees, quote asset, rewards, and token kind.", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-2, R-5, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://coinbarrel.com", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@UseCoinbarrel", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-9, R-19], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "Coinbarrel", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-1, R-2, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x4234e536aa5da8be18d41ef6f86533430e264e70", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-3, R-4, R-13, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0x985dfae571a0c5c90ac997f08687056d2ce1e46f", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-3, R-4, R-15, R-16], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-3, R-13, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/hook-programmable, class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-2, R-3, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-13, R-17, R-27], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "V5 launcher 0x4234e536…e70 and Hook V5 0xf667c59c…bfff are ERC1967/UUPS proxies. Launcher implementation slot 0xe398…f5a2. Hook implementation slot 0xaf4e…9379.", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-6, R-13, R-14, R-17, R-18], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "Docs: each V5 application proxy uses independent Ownable2Step; one EOA held the six proxy-owner and upgrade roles at deployment. No timelock contract is named. RPC pendingOwner() on the V5 launcher was the zero address. Owner 0x30e4…ddba has no code.", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-6, R-13, R-27], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "coinbarrel.com/market/api/v1/tokens chain=robinhood total 259 on 2026-09-03; first listed token LENNY 0x0f44e420…7e73 pool_type univ4", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-23], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Robinhood Chain TVL 55358.35 USD from api.llama.fi/protocol/coinbarrel currentChainTvls at 2026-09-03T01:26:35Z; defillama.com/protocol/coinbarrel page listed 55699.9", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-19, R-21], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Robinhood Chain 7d fees 110181 USD from api.llama.fi/summary/fees/coinbarrel total7d; defillama.com/protocol/coinbarrel page listed 108291", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-20, R-21], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "No audit report URL was located on coinbarrel.com, docs.coinbarrel.com, the @UseCoinbarrel profile, or Llama audit_links this pass; Llama audits field 0", class: unknown, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0xf667c59cd75ab1d7943fc8284edab51f3a76bfff", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-3, R-7, R-17, R-18], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-2, R-7, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from census Hookr (hookr.fun / @Hookrfun) and What The Hook (whatthehook.io / @whatthehookv4). No shared domain, handle, or reproduced address.", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-3, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Legacy Simple V3 launcher 0x985d…e46f and Advanced Hook V1/V2/V3 paths remain for existing markets only. Docs: they are not choices for a new launch. v3LaunchCutoffBlock 21259173. RPC still shows 163-byte proxy code and nonce 98 on the V3 launcher.", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-3, R-8, R-15], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "New Robinhood Hook V5 pools pin a flat 1% of volume per direction to the platform (flatFeePips 10000, status public-live). Pools registered before that pin a 30% platform / 70% project split permanently. LP principal custody is non-upgradeable.", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-3, R-5, R-6, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@UseCoinbarrel.official", value: "Handle bio and website field name coinbarrel.com. coinbarrel.com HTML has no twitter:site this pass. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-1, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-22, field: "account.@UseCoinbarrel.slug", value: coinbarrel, class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@UseCoinbarrel.role", value: project, class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "@UseCoinbarrel posted on 2026-09-01 that September launches on Robinhood Chain receive cash at 250k and 500k volume, up to 1500 extra per launch.", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "NULL — GitHub org and user coinbarrel 404; Llama github null; no repository URL on coinbarrel.com or docs.coinbarrel.com this pass", class: claim, observed_at: 2026-09-03T03:32:00Z, receipt_ids: [R-1, R-19, R-28], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: identity.alias, value: "Coinbarrel V2", class: claim, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: other, value: "@UseCoinbarrel posts a Solana mint FG53WF6VGMb3eg19A76p4x6Ht267q2kze89h79MhZ9CB labeled Coinbarrel CB. That mint is not a Robinhood Chain deployment. Flag wrong-chain.", class: claim, observed_at: 2026-09-03T03:20:00Z, receipt_ids: [R-25], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: control.privileged-role, value: "Docs: six V5 application proxies each have independent Ownable2Step and UUPS authority. RPC owner() on the V5 launcher and the Hook V5 proxy is the same EOA 0x30e4…ddba.", class: verified, observed_at: 2026-09-03T03:31:00Z, receipt_ids: [R-6, R-13, R-17], reproduction_ids: [REP-1, REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "RPC: V5 launcher proxy has code, owner, and matching implementation slot"
    summary: "Launcher 0x4234e536…e70 is an ERC1967 proxy on chain 4663 with 163-byte code, nonce 173, owner 0x30e4…ddba, and implementation 0xe398…f5a2, matching docs advancedV5.launcherProxy."
    occurred_at: 2026-09-03T03:31:00Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [deployment.address, control.owner, control.proxy, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13, R-14]
  - id: EVT-2
    type: company
    title: "@UseCoinbarrel posts September volume cash for launches"
    summary: "On 2026-09-01 the handle posted that a Robinhood Chain launch hitting 250k volume receives 500 cash and 500k volume another 1000, up to 1500 extra per launch through September."
    occurred_at: 2026-09-01T21:02:05Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-3
    type: company
    title: "@UseCoinbarrel posts Coinbarrel live on Robinhood Chain"
    summary: "On 2026-07-14 the handle posted that Coinbarrel is live on Robinhood Chain, with tokens launching into Uniswap v3, tradable from block one, and LP locked. That post describes the Simple V3 path, which docs now mark as legacy."
    occurred_at: 2026-07-14T01:27:05Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [lifecycle, product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-4
    type: company
    title: "@UseCoinbarrel posts Arc mainnet live"
    summary: "On 2026-07-20 the handle posted that Coinbarrel is live on Arc mainnet alongside Robinhood Chain. Docs list a separate Arc Hook V5 venue; Llama tracks only Robinhood Chain."
    occurred_at: 2026-07-20T17:40:35Z
    observed_at: 2026-09-03T03:20:00Z
    affected_fields: [taxonomy.chain-scope, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]
  - id: EVT-5
    type: onchain
    title: "Docs and Llama: Hook V5 generation live"
    summary: "Docs: live generation target-flat-fee-bonds became complete at block 27303483 in tx 0x7595323e…5d73. Llama adapter hallmark 2026-07-28 Hook V5 generation live (unified launcher on Uniswap V4)."
    occurred_at: 2026-07-28T00:00:00Z
    observed_at: 2026-09-03T03:31:00Z
    affected_fields: [lifecycle, product.mechanism, deployment.address]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-3, R-4, R-22]

receipts:
  - { id: R-1, publisher: Coinbarrel, title: "coinbarrel.com home", url: "https://coinbarrel.com/", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-2, CLM-4, CLM-18, CLM-21, CLM-25], excerpt: "title Coinbarrel. meta description: Launch and trade tokens on Robinhood Chain with permanent Uniswap liquidity and creator trading fees. canonical https://coinbarrel.com/. og:title Coinbarrel — Robinhood Chain Token Launchpad. twitter:card summary. No twitter:site. Enabled chains in bootstrap script: robinhood, arc." }
  - { id: R-2, publisher: Coinbarrel, title: "What is Coinbarrel?", url: "https://docs.coinbarrel.com/start-here/what-is-coinbarrel.md", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-8, CLM-17], excerpt: "Coinbarrel launches tokens directly into live markets on the network selected in the site header. A launch has no bonding curve, migration threshold, or graduation transaction. Hook V5 is publicly live for all Robinhood creators. Every new launch uses a Hook V5 pool on Uniswap V4 with permanent liquidity custody." }
  - { id: R-3, publisher: Coinbarrel, title: "Robinhood contract addresses", url: "https://docs.coinbarrel.com/developers/robinhood-contract-addresses.md", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-8, CLM-16, CLM-18, CLM-19, CLM-20, EVT-5], excerpt: "network.chainId 4663. advancedV5.status public-live. advancedV5.launcherProxy 0x4234e536aa5da8be18d41ef6f86533430e264e70. launcherImplementation 0xe398af2721c1dad61eb6d81a4f12f6cb66a4f5a2. hookProxy 0xf667c59cd75ab1d7943fc8284edab51f3a76bfff. coinbarrel.launcherProxy (Simple V3) 0x985dfae571a0c5c90ac997f08687056d2ce1e46f. v3LaunchCutoffBlock 21259173." }
  - { id: R-4, publisher: Coinbarrel, title: "Robinhood deployment registry", url: "https://coinbarrel.com/integrations/robinhood/deployments.json", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-5, CLM-6, EVT-5], excerpt: "advancedV5.status public-live. generation target-flat-fee-bonds. launcherProxy 0x4234e536aa5da8be18d41ef6f86533430e264e70. launcherImplementation 0xe398af2721c1dad61eb6d81a4f12f6cb66a4f5a2. owner 0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba. coinbarrel.launcherProxy 0x985dfae571a0c5c90ac997f08687056d2ce1e46f. generationActivationBlock 27303483." }
  - { id: R-5, publisher: Coinbarrel, title: "Architecture", url: "https://docs.coinbarrel.com/protocol/architecture.md", published_at: null, accessed_at: 2026-09-03T03:22:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-20], excerpt: "Robinhood Hook V5 is the current architecture for every new Standard and Advanced launch. CoinbarrelAdvancedHookV5 is the reviewed upgradeable V5 hook proxy. The PositionManager NFT is minted into permanent, non-upgradeable V4 custody. Existing Simple V3 and Advanced Hook V1, V2, and V3 markets keep their original paths." }
  - { id: R-6, publisher: Coinbarrel, title: "Permissions and security", url: "https://docs.coinbarrel.com/protocol/permissions-and-security.md", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-10, CLM-11, CLM-20, CLM-28], excerpt: "Each of six V5 application proxies uses an ERC1967/UUPS proxy and independent Ownable2Step ownership. At deployment, one EOA held the six separate proxy-owner and upgrade roles plus several operating roles. The permanent custody contract owns the PositionManager NFT and exposes no transfer, approval, withdrawal, or liquidity-reduction authority." }
  - { id: R-7, publisher: Coinbarrel, title: "Official links", url: "https://docs.coinbarrel.com/start-here/official-links.md", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-16, CLM-17], excerpt: "Unified V5 launcher https://rh-scan.com/address/0x4234e536aa5da8be18d41ef6f86533430e264e70. Unified Hook V5 0xf667c59cd75ab1d7943fc8284edab51f3a76bfff. Permanent V5 liquidity custody 0x418ece71c4ece08b71db8c53d59b6bc345efc659. Arc Hook V5 is live. Do not use Robinhood addresses on Arc." }
  - { id: R-8, publisher: Coinbarrel, title: "Legacy Robinhood markets", url: "https://docs.coinbarrel.com/protocol/legacy-robinhood-markets.md", published_at: null, accessed_at: 2026-09-03T03:33:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-19], excerpt: "Hook V5 is publicly live for new Standard and Advanced launches. The generations below remain supported only because tokens and pools already exist. They are not choices for a new launch. Simple V3, Advanced Hook V1, V2, and V3 listed. A legacy token does not automatically migrate to V5." }
  - { id: R-9, publisher: "@UseCoinbarrel", title: "Coinbarrel V2 profile", url: "https://x.com/UseCoinbarrel", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-21, CLM-22, CLM-23, CLM-26], excerpt: "Display name Coinbarrel V2. Handle @UseCoinbarrel. Bio: Create markets on Robinhood via coinbarrel.com. Location Robinhood. Website coinbarrel.com. Joined November 2025. Followers 1792. Pinned post is the 1 Sep 2026 September volume cash post." }
  - { id: R-10, publisher: "@UseCoinbarrel", title: "Coinbarrel is LIVE on the Robinhood Chain", url: "https://x.com/UseCoinbarrel/status/2076840878375608697", published_at: 2026-07-14T01:27:05Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Coinbarrel is LIVE on the @RobinhoodCrypto Chain. Every token launches straight into Uniswap v3. Tradable from block one, LP locked forever, real fees to the creator. The fair launchpad is here. Go launch https://coinbarrel.com" }
  - { id: R-11, publisher: "@UseCoinbarrel", title: "Arc Mainnet is Live", url: "https://x.com/UseCoinbarrel/status/2079260194870378563", published_at: 2026-07-20T17:40:35Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-17, EVT-4], excerpt: "Arc Mainnet is Live. CoinBarrel is now live on @arc Mainnet! Builders can now deploy on Robinhood Chain and Arc, with even more EVM chains on the horizon. We're building the multichain launchpad creators deserve. One Barrel. Every Chain." }
  - { id: R-12, publisher: "@UseCoinbarrel", title: "September is for builders", url: "https://x.com/UseCoinbarrel/status/2094893580313927985", published_at: 2026-09-01T21:02:05Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-24, EVT-2], excerpt: "September is for builders. Launch a token on Coinbarrel on Robinhood Chain and hit: $250K volume → $500 cash. $500K volume → another $1,000 cash. That's up to $1,500 EXTRA per launch, on top of whatever creator rewards you configure. Every launch. All September." }
  - { id: R-13, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() V5 launcher 0x4234e536…e70", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-9, CLM-10, CLM-11, CLM-28, EVT-1], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32a4439 (53101625). 0x4234e536…e70 code 163 B nonce 173 bal 0. owner() 0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba. ERC1967 slot 0xe398af2721c1dad61eb6d81a4f12f6cb66a4f5a2. pendingOwner() 0x0. Implementation code 24488 B." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x4234e536aa5da8be18d41ef6f86533430e264e70", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x4234e536aa5da8be18d41ef6f86533430e264e70", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-10, EVT-1], excerpt: "name ERC1967Proxy is_contract true is_verified true proxy_type eip1967. implementations 0xE398Af2721c1dAd61EB6D81A4f12F6Cb66A4f5a2 name null. creator_address_hash 0x30e4B6dc3139e28b5C5E493D395a0aca4f1CddBa. creation_transaction_hash 0xab5d917bd524196fac2fa452ff388b0632dd0e421caac6a233787ffbeea546ac. Implementation is_verified false." }
  - { id: R-15, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() V3 launcher 0x985dfae5…e46f", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-19], excerpt: "0x985dfae571a0c5c90ac997f08687056d2ce1e46f eth_getCode 163 bytes prefix 0x6080604052600a60. nonce 0x62 (98). owner() 0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x985dfae571a0c5c90ac997f08687056d2ce1e46f", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x985dfae571a0c5c90ac997f08687056d2ce1e46f", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "name ERC1967Proxy is_verified true proxy_type eip1967. implementations 0x6b0037CbC396D09241488454AaA616Ca2DBfDE11 name null is_verified false. creator_address_hash 0x30e4B6dc3139e28b5C5E493D395a0aca4f1CddBa. creation_transaction_hash 0x5f811892ab62ae5f5cf0d0d22b7d79e25e18e48cac2fcd29371e429e006ad10d." }
  - { id: R-17, publisher: Robinhood Chain RPC, title: "eth_getCode / owner() Hook V5 and custody", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-10, CLM-16, CLM-28], excerpt: "Hook 0xf667c59c…bfff code 163 B; ERC1967 slot 0xaf4ea6726c6149b647f494c84553e3449cfb9379; owner() 0x30e4…ddba. Hook impl code 24378 B. Custody 0x418ece71…c659 code 2657 B. Owner 0x30e4…ddba code 0x nonce 62760." }
  - { id: R-18, publisher: Blockscout, title: "Address 0xf667c59cd75ab1d7943fc8284edab51f3a76bfff", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xf667c59cd75ab1d7943fc8284edab51f3a76bfff", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-16], excerpt: "name ERC1967Proxy is_verified true proxy_type eip1967. implementations 0xaf4EA6726c6149b647F494C84553E3449Cfb9379 name CoinbarrelAdvancedHookV5ExternalLiquidity is_verified true. creator_address_hash 0x98Cd1f6bA00bD2D2Db1D35Bbe008674cf3A2Fa53." }
  - { id: R-19, publisher: DefiLlama, title: "protocol/coinbarrel", url: "https://api.llama.fi/protocol/coinbarrel", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-13, CLM-25], excerpt: "name Coinbarrel. category Launchpad. chains [Robinhood Chain]. twitter UseCoinbarrel. audits 0. github null. currentChainTvls['Robinhood Chain'] 55358.3521. latest tvl date 1788398795 (2026-09-03T01:26:35Z). hallmarks Hook V5 generation live." }
  - { id: R-20, publisher: DefiLlama, title: "summary/fees/coinbarrel", url: "https://api.llama.fi/summary/fees/coinbarrel", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "total24h 2304. total7d 110181. total30d 124578.35. chainBreakdown Robinhood Chain total24h 2304 total7d 110181. methodology: Hook fees on Coinbarrel-launched Uniswap V4 pools plus locked LP fees and 0.0005 ETH launch fee." }
  - { id: R-21, publisher: DefiLlama, title: "Coinbarrel protocol page", url: "https://defillama.com/protocol/coinbarrel", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-13, CLM-14], excerpt: "Total Value Locked $55,699.9. TVL by Chain Robinhood Chain $55,699.9. Fees 7d $108,291. Fees 24h $3,278. Revenue 7d $36,819. Revenue 24h $983. Twitter https://x.com/UseCoinbarrel. Category Launchpad. Coinbarrel is a token launchpad on Robinhood Chain." }
  - { id: R-22, publisher: DefiLlama, title: "coinbarrel adapter", url: "https://raw.githubusercontent.com/DefiLlama/DefiLlama-Adapters/main/projects/coinbarrel/index.js", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [EVT-5], excerpt: "robinhood v4 custody 0x418ece71c4ece08b71db8c53d59b6bc345efc659. v3 custody 0x0e88ba639f062feaa5f36a8d5f689d3e93bce593. start 2026-07-13. hallmarks 2026-07-28 Hook V5 generation live (unified launcher on Uniswap V4). doublecounted true." }
  - { id: R-23, publisher: Coinbarrel, title: "market tokens API robinhood", url: "https://coinbarrel.com/market/api/v1/tokens?chain=robinhood&sort_by=volume_sol_24h&sort_dir=desc&limit=24&offset=0", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-12], excerpt: "JSON keys tokens, total, has_more. total 259. First token chain robinhood mint 0x0f44e420A0af83251B6f2A36D1780E82B71D7e73 name ( ͡° ͜ʖ ͡°) symbol LENNY pool_type univ4 volume_sol_24h 74.44890223219538." }
  - { id: R-24, publisher: Coinbarrel, title: "Fee distribution", url: "https://docs.coinbarrel.com/protocol/fee-distribution.md", published_at: null, accessed_at: 2026-09-03T03:20:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-20], excerpt: "Under the flat model Coinbarrel takes a flat 1% of volume per direction, the creator sets their own fee on top of that and keeps all of it. New launches take the flat model only when advancedV5.platformFee.status is public-live. Pools registered earlier keep proportional 30% platform share permanently." }
  - { id: R-25, publisher: "@UseCoinbarrel", title: "Team buys on Solana CB", url: "https://x.com/UseCoinbarrel/status/2095217876487541092", published_at: 2026-09-02T18:30:43Z, accessed_at: 2026-09-03T03:20:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27], excerpt: "Team buys in the last 24H on solana:FG53WF6VGMb3eg19A76p4x6Ht267q2kze89h79MhZ9CB: $1424.65. X finance card: Coinbarrel CB $0.00242. That mint is Solana, not chain 4663." }
  - { id: R-26, publisher: DefiLlama, title: "summary/fees/coinbarrel dailyRevenue", url: "https://api.llama.fi/summary/fees/coinbarrel?dataType=dailyRevenue", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [], excerpt: "total24h 673. total7d 37179. total30d 45062.29. Protocol revenue for Coinbarrel on Robinhood Chain." }
  - { id: R-27, publisher: Blockscout, title: "Address 0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba", published_at: null, accessed_at: 2026-09-03T03:30:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-11], excerpt: "hash 0x30e4B6dc3139e28b5C5E493D395a0aca4f1CddBa. is_contract false. is_verified false. name null. creation_transaction_hash null. RPC eth_getCode 0x; nonce 62760." }
  - { id: R-28, publisher: GitHub, title: "orgs/coinbarrel", url: "https://api.github.com/orgs/coinbarrel", published_at: null, accessed_at: 2026-09-03T03:31:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-25], excerpt: "HTTP 404 message Not Found for https://api.github.com/orgs/coinbarrel and https://api.github.com/users/coinbarrel this pass." }

gaps:
  - { priority: P0, question: "Is V5 launcher implementation 0xe398…f5a2 source-verified anywhere, and what is its source name?", checked: "Blockscout api/v2 implementations name null is_verified false; rh-scan address page title only; docs name CoinbarrelAdvancedLauncher, 2026-09-03", next: "read verified source if it lands; otherwise treat the proxy as shell-only" }
  - { priority: P0, question: "Does owner 0x30e4…ddba sit behind a Safe, timelock, or other contract on any chain, or is every V5 proxy Ownable2Step held by this EOA?", checked: "owner() on launcher and hook 0x30e4…ddba; eth_getCode 0x; Blockscout is_contract false; docs say one EOA held six roles at deployment; pendingOwner() zero, 2026-09-03", next: "eth_call owner() on fee router, stock registry, impairment controller, and position vault" }
  - { priority: P1, question: "Is there an audit report whose scope matches launcher 0x4234…e70 and Hook 0xf667…bfff?", checked: "docs permissions page, contract-address page, site HTML, @UseCoinbarrel, Llama audits 0 and audit_links null, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P1, question: "Which GitHub commit matches docs contractSourceCommits hook 12fa5e83… and feeLocker 5bc92578…?", checked: "api.github.com/orgs/coinbarrel and /users/coinbarrel 404; Llama github null; site and docs HTML have no repo URL, 2026-09-03", next: "search those commit hashes if a source mirror appears" }
  - { priority: P2, question: "What is the relationship between Solana mint FG53WF6VGMb3eg19A76p4x6Ht267q2kze89h79MhZ9CB ($CB) and the Robinhood Hook V5 pad?", checked: "@UseCoinbarrel posts the mint as Coinbarrel CB; Llama has no protocol token; RH market API tokens are univ4 launches, 2026-09-03", next: "do not treat $CB as a Robinhood Chain deployment; record any official docs that name the mint" }
  - { priority: P2, question: "Are Arc and Stable venues in the Robinhood Chain TVL slice, and is BSC paused as the registry states?", checked: "Llama chains [Robinhood Chain] only; docs list Arc Hook V5 and Stable V3; deployments.json bsc.operationalStatus paused; same 0x4234…e70 is BSC impairmentControllerProxy, 2026-09-03", next: "do not use the Robinhood launcher address on Arc or BSC; reproduce those venues in a later pass if coverage expands" }
---

# Coinbarrel — research packet

## What it is

Coinbarrel is a token launchpad on Robinhood Chain. A launch creates a Uniswap V4 pool with a Coinbarrel Hook V5 in one transaction; there is no bonding curve and no graduation. Liquidity is minted into permanent custody. New launches go through the live V5 launcher. A Simple V3 launcher remains deployed for older markets. Creators can pair against ETH, USDG, or enabled stock tokens. The handle is @UseCoinbarrel; the site is coinbarrel.com.

Themes: launchpad

## Why it matters

Hook V5 is the live new-launch path on this chain: one transaction into a Uniswap V4 pool, not a bonding curve that later graduates. Llama's Robinhood Chain slice shows modest locked quote-asset TVL against seven-day fees around 108k to 110k USD. The pad is not a census row. [claim R-2 R-19 R-20 R-21]

## What could go wrong

The V5 launcher and Hook are upgradeable ERC1967 proxies. owner() on both is one externally owned account with no code and no pending owner. Docs say that EOA held six proxy-owner and upgrade roles at deployment. The Simple V3 launcher still has code, so an integrator that posts to 0x985d…e46f is on a path docs mark as not a new-launch choice. [verified R-13 R-17] [claim R-6 R-8]

## Product and mechanics

A launch has no bonding curve and no graduation. Standard and Advanced both call launchTokenV5 on the reviewed launcher proxy, create a Uniswap V4 pool, and mint the PositionManager NFT into permanent custody in the same transaction. Standard applies a fixed policy. Advanced can set directional fees, quote asset (ETH, USDG, or an enabled stock token), rewards, and ERC-20 or ERC-404. [claim R-2 R-5]

New Robinhood Hook V5 pools pin a flat 1% of volume per direction to the platform. Pools registered before that keep a 30% platform share. Legacy Simple V3 and Hook V1/V2/V3 markets keep their original paths and do not migrate. [claim R-8 R-24]

## Control and security

owner() on the V5 launcher and the Hook V5 proxy returns 0x30e4b6dc3139e28b5c5e493d395a0aca4f1cddba. That address has no code. The launcher implementation slot is 0xe398…f5a2 (24488-byte code, Blockscout not verified). The Hook implementation slot is 0xaf4e…9379, named CoinbarrelAdvancedHookV5ExternalLiquidity and verified. Docs: six application proxies, each Ownable2Step / UUPS; custody exposes no withdraw of LP principal. No timelock address was located. [verified R-13 R-14 R-18] [claim R-6]

## Team and provenance

@UseCoinbarrel names coinbarrel.com in the bio and website field. coinbarrel.com HTML does not name the handle (no twitter:site). Llama twitter is UseCoinbarrel. No GitHub org or user named coinbarrel. Display name Coinbarrel V2. The handle also posts a Solana mint labeled Coinbarrel CB; that mint is not on chain 4663. Flag unconfirmed-official and wrong-chain. [claim R-1 R-9 R-25 R-28]

## Economics and activity

Llama currentChainTvls Robinhood Chain 55358.35 USD at 2026-09-03T01:26:35Z (page 55699.9). summary/fees total24h 2304, total7d 110181 (page Fees 7d 108291, Fees 24h 3278). dailyRevenue total24h 673, total7d 37179. coinbarrel.com/market/api/v1/tokens total 259 on Robinhood, pool_type univ4. Figures are the Robinhood Chain slice, not all-chains. [claim R-19 R-20 R-21 R-23 R-26]

## Material risks

- V5 launcher and Hook are upgradeable; owner is one EOA with no code. [verified R-13 R-17]
- Launcher implementation source is not verified on Blockscout this pass. [verified R-14]
- Simple V3 launcher 0x985d…e46f still has code and is not a new-launch path. [verified R-15] [claim R-8]
- No audit report URL. [unknown]
- Handle posts a Solana $CB mint that is not this chain's launcher. [claim R-25]
- Llama 7d fee figure differs between the API (110181) and the protocol page (108291). [claim R-20 R-21]

## Verification passes

- Receipts: coinbarrel.com, docs pages, deployments.json, X profile and posts, Llama protocol/fees/page/adapter, market API, GitHub 404, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-3 R-13 R-19]
- Numbers: TVL and fees are the Robinhood Chain slice from api.llama.fi, not an all-chains total. Bytecode lengths, nonces, and owner() are chain 4663 RPC. Market total 259 is the official tokens API with chain=robinhood. [verified R-13 R-19 R-23]
- Adversarial: strongest contrary reading is that 0x4234…e70 is a leftover Advanced V4 proxy and new launches use a different factory, or that Llama fees mix legacy V3 with V5. Docs and deployments.json set advancedV5.launcherProxy to this address with status public-live; RPC implementation slot matches launcherImplementation 0xe398…f5a2. Hookr and What The Hook are different products. [inference R-3 R-4 R-13]

## Operations log

- Census.yaml has no coinbarrel row; no content/projects/coinbarrel.yaml. Discovery inventory names the slug with docs launcher 0x4234…e70.
- coinbarrel.com, docs.coinbarrel.com (what-is, official-links, architecture, permissions, legacy, fee-distribution, robinhood-contract-addresses), deployments.json, and market/api/v1/tokens opened 2026-09-03.
- X: @UseCoinbarrel profile, 14 Jul live post, 20 Jul Arc post, 1 Sep September cash post, 2 Sep Solana CB post.
- RPC https://rpc.mainnet.chain.robinhood.com with browser User-Agent: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, owner(), pendingOwner(), ERC1967 slot on 0x4234…e70, 0x985d…e46f, 0xf667…bfff, 0xe398…f5a2, 0xaf4e…9379, 0x418e…c659, 0x30e4…ddba, 0x99d0…1f23.
- Blockscout api/v2 for V5 launcher, V3 launcher, Hook proxy, Hook implementation, V3 implementation, owner.
- api.llama.fi/protocol/coinbarrel, summary/fees/coinbarrel, summary/fees dailyRevenue, defillama.com/protocol/coinbarrel, DefiLlama adapter index.js.
- api.github.com/orgs/coinbarrel and /users/coinbarrel HTTP 404.
- DexScreener search of V5 launcher and canary token 0x99d0…1f23 returned 0 pairs.
- rh-scan.com address page for 0x4234…e70 returned a title only.
