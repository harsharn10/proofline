---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: trench
name: Trench
packet_tier: seed
as_of: 2026-09-03T04:51:00Z
prior_packet: null
supersedes: null
owned_slugs: [trench]
allowed_paths:
  - research/inbox/packets/trench/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Trench
  aliases: [trench.today, Trencher, "Trench / Trencher"]
  symbols: []
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://trench.today
  official_handle: "@TrenchToday01"
  repository: "NULL — api.github.com/orgs/trench 404; /users/TrenchToday01 404; /users/trench is a 2009 user (id 114807, updated 2022-06-22, twitter_username null) not linked from trench.today docs this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve pad at ponsfamily.com / @ponsdotfamily with factories 0xa5aa…1feb and 0x0c37…77a4"
        - "Trench is trench.today / @TrenchToday01 with BondingCurveFactory 0x2ECFb98B…FbAA"
        - "No shared domain, handle, or reproduced address"
    - slug: hoodfun
      signals: [other]
      contrary_signals:
        - "Census hood.fun is a bonding-curve pad at @hoodfunfamily"
        - "Trench is trench.today / @TrenchToday01 with BondingCurveFactory 0x2ECFb98B…FbAA"
        - "No shared domain, handle, or reproduced address"
    - slug: noxa
      signals: [other]
      contrary_signals:
        - "Census NOXA Fun is noxa.fun / @Noxa_Fi with factory 0xD9eC2db5…FccB"
        - "Trench factory 0x2ECFb98B…FbAA is not the NOXA factory"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz"
        - "Trench can pair against stock tokens as quote assets; the live new-launch path is BondingCurveFactory, not LongLauncher"
        - "No shared domain, handle, or reproduced factory"
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census Hookr is a Uniswap v4 hook marketplace at hookr.fun / @Hookrfun"
        - "TrenchV4FeeHook sits on pools this pad graduates; it is not a hook marketplace"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/bonding-curve
  secondary_leaves: [launch/hook-programmable, launch/stock-paired-factory]
  mechanism_tags: [launchpad, bonding-curve, amm, rwa, stock-paired, fee-routing]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Docs name BondingCurveFactory 0x2ECFb98B…FbAA on Robinhood. RPC on 4663 at block 53149111: 758-byte TransparentUpgradeableProxy, nonce 146364, ERC1967 slot 0xDc4b9FAF…4a22, admin slot 0x4b25478f…5A96, storage slot 0 owner 0xbeb76A70…e0b. Emerson 30d row Trench / Trencher 123740 tokens, DEX volume 59015.52 USD, factory map Registry. Distinct from packed circus/sentry/bags/klik/pew-fun. Not a census row. [R-3] [R-8] [R-9] [R-13]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-16], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-5], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-12, CLM-20], note: "" }

links:
  - { kind: site, url: "https://trench.today", authenticity: unconfirmed }
  - { kind: app, url: "https://trench.today/create", authenticity: unconfirmed }
  - { kind: docs, url: "https://trench.today/docs", authenticity: confirmed }
  - { kind: docs, url: "https://trench.today/docs/how-it-works", authenticity: confirmed }
  - { kind: docs, url: "https://trench.today/docs/for-developers/contracts", authenticity: confirmed }
  - { kind: docs, url: "https://trench.today/docs/resources/links", authenticity: confirmed }
  - { kind: x, url: "https://x.com/TrenchToday01", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/axx_dot", authenticity: unconfirmed }
  - { kind: other, url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", authenticity: unconfirmed }

deployments:
  - label: BondingCurveFactory (TransparentUpgradeableProxy)
    role: factory
    address:
      value: "0x2ECFb98BCe4f3616115E4a2A7a2379AF388DFbAA"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-3, R-8, R-9, R-13]
  - label: BondingCurveFactory implementation
    role: implementation
    address:
      value: "0xDc4b9FAF72a071E2b5A7858bF91A894580D84a22"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-8, R-9, R-10]
  - label: TrenchManager proxy
    role: router
    address:
      value: "0x77dC6f6361b7b99456FC3761ce5b7ddA80d83f9d"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-3, R-8, R-11]
  - label: Factory ProxyAdmin
    role: admin
    address:
      value: "0x4b25478f681832f65B7Bc69ebBb44c7Fc9cE5A96"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-8, R-9, R-12]
  - label: Docs owner / deployer EOA
    role: admin
    address:
      value: "0xbeb76A70c82B09E30B2008eAFa7F987987EC9e0b"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-3, R-8, R-12]
  - label: TrenchV4FeeHook
    role: other
    address:
      value: "0x31200554eCA1EFf6d130dbeC7975aFA1234b60CC"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-3, R-8]
  - label: TrenchPositionLocker
    role: other
    address:
      value: "0x1a3881e7013307Bc67b22b8793B93a2114aAe49E"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-3, R-8]
  - label: FeeVault
    role: other
    address:
      value: "0x076e3Cd13E188e3646828e7cEBB766C7Dd6aDb8A"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-3, R-8]

metrics: []

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-8, R-9, R-10, R-11, R-12], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32afdb7 (53149111). Factory 0x2ECFb98B…FbAA eth_getCode 758 bytes prefix 0x608060405260016001; nonce 0x23bbc (146364); balance 0. owner() 0x8da5cb5b reverted. storage slot 0 0xbeb76A70…e0b; slot 1 / da4fbe52() 0x77dC6f63…3f9d. ERC1967 implementation slot 0xDc4b9FAF…4a22; admin slot 0x4b25478f…5A96. Implementation eth_getCode 10154 bytes, Blockscout is_verified false. Manager 0x77dC6f63…3f9d eth_getCode 758 bytes; owner() 0xbeb76A70…e0b; impl slot 0x5d15Bdd2…c397 (21831-byte code). ProxyAdmin owner() 0xbeb76A70…e0b; that address eth_getCode 0x, nonce 430, Blockscout is_contract false. FeeVault 758 B; TrenchV4FeeHook 5501 B; TrenchPositionLocker 2480 B; LPFeeSplitter 758 B." }
  - { id: REP-2, method: official-crosslink, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1, R-4, R-5, R-7], result: "docs/resources/links: Website trench.today; X (Twitter) href https://x.com/TrenchToday01 children @TrenchToday01; Telegram t.me/axx_dot; Email service@trench.today. Docs description Back to meme culture. Trench Today. matches @TrenchToday01 bio. Display name trench.today. Home HTML title trench.today; meta description Launch and trade tokens on Ethereum; no twitter:site this pass." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:47:00Z, receipt_ids: [R-13, R-14], result: "Dune 0x_emerson query 8130687 row Trench / Trencher tokens_launched 123740 factories 1 unique_deployers 251 share_of_launches_pct 5.6235 avg_launches_per_day 4124.67 last_launch 2026-09-03 01:31:19 UTC. DEX widget 8130694 dex_volume_usd 59015.52 trades 2207 unique_traders 759. Factory map 8130705 0x2ecfb98bce4f3616115e4a2a7a2379af388dfbaa launchpad Trench / Trencher notes Registry. api.llama.fi/protocol/trench Protocol not found." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Two-stage launchpad: constant-product bonding curve then automatic DEX graduation. Robinhood docs: 1B fixed supply, 80% on the curve, 20% reserved for the pool; virtualQuote 1.712 ETH; graduation ~5 ETH; 1% curve trade fee (0.3% creator / 0.7% protocol); 2% listing fee at migration. New RH graduates go to Uniswap V4 with TrenchV4FeeHook 1% quote-side and TrenchPositionLocker (1-year timelock). Pre-V4 graduates stay on Uniswap V3 via LPFeeSplitter.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://trench.today", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@TrenchToday01", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "Trench", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x2ECFb98BCe4f3616115E4a2A7a2379AF388DFbAA", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-8, R-9, R-13], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-6, field: deployment.address, value: "0xDc4b9FAF72a071E2b5A7858bF91A894580D84a22", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-8, R-9, R-10], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-8, field: taxonomy.primary-leaf, value: launch/bonding-curve, class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-3, R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: control.owner, value: "0xbeb76A70c82B09E30B2008eAFa7F987987EC9e0b", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-8, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-10, field: control.proxy, value: "Factory 0x2ECFb98B…FbAA is an OpenZeppelin TransparentUpgradeableProxy (ERC1967). Implementation slot 0xDc4b9FAF…4a22. Admin slot ProxyAdmin 0x4b25478f…5A96. TrenchManager 0x77dC6f63…3f9d is a second EIP1967 proxy.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-8, R-9, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: control.timelock, value: "Docs: TrenchPositionLocker holds the V4 LP NFT with a 1-year timelock. Factory ProxyAdmin owner() is EOA 0xbeb76A70…e0b with no code. No timelock on the factory upgrade path was located this pass.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-3, R-8], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-12, field: activity.status, value: "Emerson 30d last_launch 2026-09-03 01:31:19 UTC. Factory nonce 146364 on 4663. @TrenchToday01 posted 10,000+ tokens launched on 2026-07-31.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-8, R-13, R-16], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-13, field: economics.metric, value: "Emerson Dune query 8130687 30d row Trench / Trencher: tokens_launched 123740, factories 1, unique_deployers 251, share_of_launches_pct 5.6235, avg_launches_per_day 4124.67. Discovery inventory HARVEST excerpt was 123,004 tokens.", class: claim, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-13], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-14, field: economics.metric, value: "Emerson Dune query 8130694 30d DEX volume Trench / Trencher 59015.52 USD, trades 2207, unique_traders 759. Aggregator reconstruction, not a Llama chain slice. api.llama.fi/protocol/trench not found.", class: claim, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: security.audit, value: "No audit report URL was located on trench.today, docs/how-it-works, docs/for-developers/contracts, docs/resources/links, or the @TrenchToday01 profile this pass", class: unknown, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: deployment.address, value: "0x77dC6f6361b7b99456FC3761ce5b7ddA80d83f9d", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-8, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-17, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: relationship, value: "Distinct from packed circus/sentry/bags/klik/pew-fun and census Pons. No shared domain, handle, or reproduced factory. Emerson labels this factory Trench / Trencher, not those pads.", class: claim, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-3, R-4, R-13], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-19, field: product.mechanism, value: "Getting Started: when the curve fills, the token migrates automatically to Uniswap V2 with permanently locked LP. That page does not name a chain.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "How-it-works per chain: Ethereum Uniswap V2 LP burned; MegaETH Kumbaya V3; Robinhood Uniswap V4 (legacy V3 for pre-upgrade graduates); Arc Uniswap V3. 10 Jul 2026 post: 5 ETH bonding curve graduating to Uniswap V3. 14 Jul 2026 post: post-migration pools now run on Uniswap V4.", class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-6, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@TrenchToday01.official", value: "docs/resources/links href https://x.com/TrenchToday01. Handle display name trench.today. Docs description matches bio Back to meme culture. Trench Today. Home HTML has no twitter:site this pass.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-22, field: "account.@TrenchToday01.slug", value: trench, class: claim, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: "account.@TrenchToday01.role", value: project, class: claim, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: communications.status, value: "On 2026-09-02 @TrenchToday01 posted that 80+ stock pairs are supported on Trench, and that FAMI is live to trade and launch with $FAMI.", class: claim, observed_at: 2026-09-03T04:45:00Z, receipt_ids: [R-20, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: identity.repository, value: "NULL — api.github.com/orgs/trench 404; /users/TrenchToday01 404; /users/trench is a 2009 user not linked from trench.today docs this pass", class: claim, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-4, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: identity.alias, value: "Trench / Trencher", class: claim, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: other, value: "@TrenchToday101 uses the same display name trench.today and the same bio stem as @TrenchToday01 (119 followers vs 2777). Flag handle-collision. Docs list only @TrenchToday01.", class: claim, observed_at: 2026-09-03T04:45:00Z, receipt_ids: [R-4, R-5, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: control.privileged-role, value: "Docs owner / deployer 0xbeb76A70…e0b. RPC: factory slot 0, TrenchManager owner(), and ProxyAdmin owner() all return that EOA. eth_getCode 0x; Blockscout is_contract false.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-8, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-29, field: product.mechanism, value: "10 Jul 2026 post: creators earn 30% of all trading fees both before and after graduation. 12 Jul 2026 post: 30% of trading fees on the bonding curve and 60% after graduating to the V3 pool. Docs: Robinhood curve 0.3% of trade size to creator; after V4 graduation 60% of the hook swap fee to the deployer.", class: claim, observed_at: 2026-09-03T04:45:00Z, receipt_ids: [R-2, R-6, R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: other, value: "31 Jul 2026 post linked https://trench-web.enstrack.com/. DNS lookup for that host failed this pass. Do not treat it as the live site; docs and the handle display name use trench.today.", class: claim, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: product.mechanism
    claim_ids: [CLM-19, CLM-20]
    material_effect: "Getting Started names Uniswap V2 graduation with no chain qualifier; How-it-works and the 14 Jul post name Uniswap V4 for new Robinhood graduates, with legacy V3. Integrators cannot take the Getting Started string as the live RH pool type."
    status: open
    resolution: null
  - id: CON-2
    field: product.mechanism
    claim_ids: [CLM-1, CLM-29]
    material_effect: "Creator-fee strings disagree across the 10 Jul post (30% of all fees), the 12 Jul post (30% curve / 60% V3), and current docs (0.3% of trade on the curve; 60% of the V4 hook fee). Do not compile a single creator-fee figure until a controller resolves."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "RPC: BondingCurveFactory proxy has code, owner slot, and matching implementation"
    summary: "Factory 0x2ECFb98B…FbAA is a TransparentUpgradeableProxy on chain 4663 with 758-byte code, nonce 146364, storage owner 0xbeb76A70…e0b, and implementation 0xDc4b9FAF…4a22, matching docs BondingCurveFactory and the Emerson factory map."
    occurred_at: 2026-09-03T04:50:00Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [deployment.address, control.owner, control.proxy, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-9]
  - id: EVT-2
    type: company
    title: "@TrenchToday01 posts Introducing Trench on Robinhood"
    summary: "On 2026-07-10 the handle posted that every launch starts with a 5 ETH bonding curve before automatically graduating to a Uniswap V3 pool, with creators earning 30% of trading fees before and after graduation."
    occurred_at: 2026-07-10T15:35:24Z
    observed_at: 2026-09-03T04:45:00Z
    affected_fields: [product.mechanism, communications.status, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-3
    type: company
    title: "@TrenchToday01 posts Uniswap V4 post-migration pools"
    summary: "On 2026-07-14 the handle posted that $100,000+ had been paid to Trench creators in 5 days and that all post-migration pools now run on Uniswap V4."
    occurred_at: 2026-07-14T16:38:25Z
    observed_at: 2026-09-03T04:45:00Z
    affected_fields: [product.mechanism, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-4
    type: company
    title: "@TrenchToday01 posts 80+ stock pairs and FAMI live"
    summary: "On 2026-09-02 the handle posted that 80+ stock pairs are supported on Trench, then that FAMI is live to trade and launch with $FAMI."
    occurred_at: 2026-09-02T14:05:55Z
    observed_at: 2026-09-03T04:45:00Z
    affected_fields: [product.mechanism, communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20, R-21]
  - id: EVT-5
    type: company
    title: "Docs: V4 upgrade 2026-07-13"
    summary: "Contract reference names a V4 upgrade dated 2026-07-13, with TrenchV4FeeHook, TrenchPositionLocker, and migrateToV4. Tokens graduated before that stay on Uniswap V3."
    occurred_at: 2026-07-13T00:00:00Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [product.mechanism, deployment.address, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-3]

receipts:
  - { id: R-1, publisher: Trench, title: "trench.today home", url: "https://trench.today/", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-2, CLM-4, CLM-21], excerpt: "HTTP 200. title trench.today. meta description: Launch and trade tokens on Ethereum. Next.js SPA. No twitter:site, twitter:creator, or 0x address in the HTML this pass. Docs description on /docs is Back to meme culture. Trench Today." }
  - { id: R-2, publisher: Trench, title: "How It Works", url: "https://trench.today/docs/how-it-works", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-11, CLM-17, CLM-20, CLM-29], excerpt: "Two-stage lifecycle: bonding curve then DEX. Robinhood: Uniswap V4 with LP locked in TrenchPositionLocker (1-year timelock); pre-V4 graduates remain on Uniswap V3. 1B supply, 80% on curve, 20% reserved. RH graduation ~5 ETH. RH curve fee 1% (0.3% creator / 0.7% protocol). After V4: 1% quote-side hook fee, 60% deployer / 40% protocol." }
  - { id: R-3, publisher: Trench, title: "Contract Reference", url: "https://trench.today/docs/for-developers/contracts", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-16, CLM-18, CLM-28, EVT-5], excerpt: "Robinhood BondingCurveFactory 0x2ECFb98BCe4f3616115E4a2A7a2379AF388DFbAA. TrenchManager 0x77dC6f6361b7b99456FC3761ce5b7ddA80d83f9d. FeeVault 0x076e3Cd13E188e3646828e7cEBB766C7Dd6aDb8A. TrenchV4FeeHook 0x31200554eCA1EFf6d130dbeC7975aFA1234b60CC. TrenchPositionLocker 0x1a3881e7013307Bc67b22b8793B93a2114aAe49E. Owner 0xbeb76A70c82B09E30B2008eAFa7F987987EC9e0b. V4 upgrade 2026-07-13." }
  - { id: R-4, publisher: Trench, title: "Official channels", url: "https://trench.today/docs/resources/links", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-18, CLM-21, CLM-23, CLM-25, CLM-27], excerpt: "Official channels: Website trench.today. X (Twitter) href https://x.com/TrenchToday01 children @TrenchToday01. Telegram https://t.me/axx_dot. Email service@trench.today. Only trust the links listed on this page." }
  - { id: R-5, publisher: "@TrenchToday01", title: "trench.today profile", url: "https://x.com/TrenchToday01", published_at: null, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-3, CLM-4, CLM-21, CLM-22, CLM-23, CLM-27], excerpt: "Display name trench.today. Handle @TrenchToday01. Bio: Back to meme culture. Trench Today. Followers 2777. Blue verified. Latest posts: 2 Sep 2026 FAMI live; 2 Sep 80+ stock pairs; 20 Aug RDDT article ending trench.today." }
  - { id: R-6, publisher: "@TrenchToday01", title: "Introducing Trench on Robinhood", url: "https://x.com/TrenchToday01/status/2075604809680621659", published_at: 2026-07-10T15:35:24Z, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, CLM-20, CLM-29, EVT-2], excerpt: "Introducing Trench on Robinhood. Every launch starts with a 5 ETH Bonding Curve before automatically graduating to a Uniswap V3 pool. Creators earn 30% of all trading fees, both before and after graduation." }
  - { id: R-7, publisher: Trench, title: "Docs home", url: "https://trench.today/docs", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-3], excerpt: "title Welcome — trench.today docs. meta description Back to meme culture. Trench Today. Nav: Introduction (Ethereum, MegaETH, Robinhood, and Arc); Getting Started; How It Works; Public API — Create Token for the Robinhood chain, no API key; Links." }
  - { id: R-8, publisher: Robinhood Chain RPC, title: "eth_getCode / slots factory 0x2ECFb98B…FbAA", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-7, CLM-9, CLM-10, CLM-12, CLM-16, CLM-28, EVT-1], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32afdb7 (53149111). Factory code 758 B nonce 146364 bal 0. slot0 0xbeb76A70…e0b. da4fbe52 0x77dC6f63…3f9d. ERC1967 impl 0xDc4b9FAF…4a22 admin 0x4b25478f…5A96. Impl code 10154 B. Manager code 758 B owner() 0xbeb76A70…e0b. FeeVault 758 B. V4FeeHook 5501 B. PositionLocker 2480 B." }
  - { id: R-9, publisher: Blockscout, title: "Address 0x2ECFb98BCe4f3616115E4a2A7a2379AF388DFbAA", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x2ECFb98BCe4f3616115E4a2A7a2379AF388DFbAA", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-7, CLM-10, EVT-1], excerpt: "hash 0x2ECFb98BCe4f3616115E4a2A7a2379AF388DFbAA. name TransparentUpgradeableProxy is_contract true is_verified true proxy_type eip1967. implementations 0xDc4b9FAF72a071E2b5A7858bF91A894580D84a22 name null. creator 0xbeb76A70c82B09E30B2008eAFa7F987987EC9e0b. creation_transaction_hash 0x31638f4653171c6d1109406545946217c47aaccfb6d876f18cbb0b26c4df0252. is_fully_verified false is_partially_verified true." }
  - { id: R-10, publisher: Blockscout, title: "Address 0xDc4b9FAF72a071E2b5A7858bF91A894580D84a22", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xDc4b9FAF72a071E2b5A7858bF91A894580D84a22", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6], excerpt: "hash 0xDc4b9FAF72a071E2b5A7858bF91A894580D84a22. is_contract true is_verified false name null proxy_type null. creator 0xbeb76A70c82B09E30B2008eAFa7F987987EC9e0b. creation_transaction_hash 0x9268c7162067b5e3399beac35d71fc5effa924269d67e253cdf4bcb2249318a1. Bytecode strings include BondingCurve: exceeds target / already migrated / only factory." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x77dC6f6361b7b99456FC3761ce5b7ddA80d83f9d", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x77dC6f6361b7b99456FC3761ce5b7ddA80d83f9d", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, CLM-16], excerpt: "hash 0x77dC6f6361b7b99456FC3761ce5b7ddA80d83f9d. name TransparentUpgradeableProxy is_verified true proxy_type eip1967. implementations 0x5d15Bdd2a834C66149c38c5ae19C5f4B60cBc397 name null. creator 0xbeb76A70c82B09E30B2008eAFa7F987987EC9e0b. coin_balance 7947381496434533868 wei. RPC owner() 0xbeb76A70…e0b." }
  - { id: R-12, publisher: Blockscout, title: "ProxyAdmin 0x4b25478f… and owner 0xbeb76A70…", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x4b25478f681832f65B7Bc69ebBb44c7Fc9cE5A96", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-28], excerpt: "0x4b25478f681832f65B7Bc69ebBb44c7Fc9cE5A96 name ProxyAdmin is_verified true is_contract true, created in the factory tx 0x31638f46…0252. RPC owner() 0xbeb76A70c82B09E30B2008eAFa7F987987EC9e0b. That EOA: is_contract false, eth_getCode 0x, nonce 430." }
  - { id: R-13, publisher: Dune 0x_emerson, title: "Robinhood memecoin launchpads 30d", url: "https://dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-5, CLM-12, CLM-13, CLM-14, CLM-18, CLM-26], excerpt: "Platform Summary query 8130687 row Trench / Trencher tokens_launched 123740 factories 1 unique_deployers 251 share 5.6235 last_launch 2026-09-03 01:31:19 UTC. DEX Volume query 8130694 dex_volume_usd 59015.52 trades 2207 unique_traders 759. Factory Map query 8130705 0x2ecfb98bce4f3616115e4a2a7a2379af388dfbaa launchpad Trench / Trencher notes Registry." }
  - { id: R-14, publisher: DefiLlama, title: "protocol/trench", url: "https://api.llama.fi/protocol/trench", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-14], excerpt: "Response: Protocol not found. No Llama chain-slice TVL for slug trench this pass. Do not treat Emerson DEX volume as a Llama figure." }
  - { id: R-15, publisher: Trench, title: "Getting Started", url: "https://trench.today/docs/getting-started", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-19], excerpt: "Launch a token, trade the curve, and claim dev fees. Tokens trade on the bonding curve until graduation. When the curve fills, the token migrates automatically to Uniswap V2 with permanently locked LP. Fees go to the deployer wallet only. No chain qualifier on that V2 sentence." }
  - { id: R-16, publisher: "@TrenchToday01", title: "10,000+ tokens launched on Trench", url: "https://x.com/TrenchToday01/status/2083173203070107843", published_at: 2026-07-31T12:49:29Z, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-12, CLM-30], excerpt: "10,000+ tokens launched on Trench. The next one could be yours. https://trench-web.enstrack.com/ DNS lookup for trench-web.enstrack.com failed this pass." }
  - { id: R-17, publisher: "@TrenchToday01", title: "Trench is coming to Arc", url: "https://x.com/TrenchToday01/status/2078102003008630974", published_at: 2026-07-17T12:58:21Z, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-17], excerpt: "Launch before the hype. Be ready for it. Trench is coming to Arc. Robinhood is home. Arc is next. https://trench-web.enstrack.com/ Right now, Arc USDC isn't exactly easy to get. We'll make sure our best creators have it before anyone else." }
  - { id: R-18, publisher: Trench, title: "Introduction", url: "https://trench.today/docs/introduction", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-17], excerpt: "What Trench is, who it's for, and why it's built on Ethereum, MegaETH, Robinhood, and Arc. Every token on Trench is created in a single transaction, priced by a bonding curve from block one, auto-graduated to a DEX, fair-launched by design." }
  - { id: R-19, publisher: "@TrenchToday01", title: "Post-migration pools on Uniswap V4", url: "https://x.com/TrenchToday01/status/2077070220787847214", published_at: 2026-07-14T16:38:25Z, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-20, EVT-3], excerpt: "Creators deserve a platform that keeps shipping. $100,000+ paid to Trench creators in just 5 days. On top of that, all post-migration pools now run on Uniswap V4, giving creators up to 2× more trading fees than before. Trench it today." }
  - { id: R-20, publisher: "@TrenchToday01", title: "RWA pairs. Expanded.", url: "https://x.com/TrenchToday01/status/2095151236052074742", published_at: 2026-09-02T14:05:55Z, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-24, EVT-4], excerpt: "RWA pairs. Expanded. 80+ stock pairs are now supported on Trench. More markets. More ways to launch. And more to come." }
  - { id: R-21, publisher: "@TrenchToday01", title: "FAMI is now live on Trench", url: "https://x.com/TrenchToday01/status/2095163410359124090", published_at: 2026-09-02T14:54:17Z, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-24, EVT-4], excerpt: "FAMI is now live on Trench. Trade and launch with $FAMI." }
  - { id: R-22, publisher: GitHub, title: "orgs/trench and users/TrenchToday01", url: "https://api.github.com/orgs/trench", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-25], excerpt: "HTTP 404 for https://api.github.com/orgs/trench and https://api.github.com/users/TrenchToday01. https://api.github.com/users/trench 200: id 114807 created 2009-08-13 updated 2022-06-22 twitter_username null public_repos 1. Not linked from trench.today docs this pass." }
  - { id: R-23, publisher: "@TrenchToday01", title: "Creator fees change the incentive", url: "https://x.com/TrenchToday01/status/2076330284560294258", published_at: 2026-07-12T15:38:10Z, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-29], excerpt: "Creators receive 30% of trading fees on the Bonding Curve and 60% after graduating to the V3 pool, giving them every reason to keep building their community and push their token beyond graduation." }
  - { id: R-24, publisher: "@TrenchToday101", title: "trench.today profile clone", url: "https://x.com/TrenchToday101", published_at: null, accessed_at: 2026-09-03T04:45:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27], excerpt: "Display name trench.today. Handle @TrenchToday101. Bio: Back to meme culture. Trench Today. Followers 119. Same display name and bio stem as @TrenchToday01. Docs/resources/links lists only @TrenchToday01." }

gaps:
  - { priority: P0, question: "Is BondingCurveFactory implementation 0xDc4b9FAF…4a22 source-verified anywhere, and what is its source name?", checked: "Blockscout api/v2 is_verified false name null; docs ABI pages name IBondingCurveFactory; RPC bytecode strings BondingCurve / Factory: only core, 2026-09-03", next: "read verified source if it lands; otherwise treat the proxy as shell-only" }
  - { priority: P0, question: "Does TrenchPositionLocker 0x1a3881e7…e49E actually hold V4 PositionManager NFTs with a 1-year delay, and can the factory owner upgrade around it?", checked: "docs name 1-year timelock; RPC eth_getCode 2480 bytes; factory ProxyAdmin owner is EOA 0xbeb76A70…e0b; no locker delay() call this pass", next: "eth_call locker interface and a graduated token's position owner" }
  - { priority: P1, question: "Which Getting Started Uniswap V2 sentence applies to Robinhood, and is any live RH graduate a V2 pair?", checked: "getting-started V2 with no chain; how-it-works RH V4 / legacy V3; 10 Jul post V3; 14 Jul post V4, 2026-09-03", next: "sample a recent TokenCreate and follow migrateToV4 vs migrateToV3" }
  - { priority: P1, question: "Is there an audit report whose scope matches factory 0x2ECFb98B…FbAA and TrenchManager 0x77dC6f63…3f9d?", checked: "docs how-it-works, contract-reference, links, site HTML, @TrenchToday01, Llama protocol/trench 404, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P2, question: "Are Ethereum, MegaETH, and Arc factories live, and should RH TVL ever include those venues?", checked: "docs list four chains; only 4663 RPC this pass; Llama protocol/trench not found; Arc posts exist, 2026-09-03", next: "do not use the Robinhood factory address on other chains; reproduce those venues in a later pass if coverage expands" }
  - { priority: P2, question: "What is @TrenchToday101 relative to @TrenchToday01, and does trenchpad.trade / trench.icu share any contract?", checked: "docs list only @TrenchToday01; @TrenchToday101 same display name, 119 followers; discovery inventory said distinct from trenchpad.trade and trench.icu; those domains not opened this pass", next: "open those domains only if a later assignment asks; keep the handle-collision flag" }
---

# Trench — research packet

## What it is

Trench is a bonding-curve token launchpad at trench.today. A launch mints a fixed-supply ERC-20 onto a constant-product curve, then migrates automatically into a DEX pool when the curve fills. On Robinhood Chain the live factory is BondingCurveFactory 0x2ECFb98B…FbAA. Docs: new graduates go to Uniswap V4 with a Trench fee hook; older graduates stay on Uniswap V3. The handle is @TrenchToday01.

Themes: launchpad

## Why it matters

Emerson's 30-day labeled table puts this factory third by token count (123740) with about $59k DEX volume — high issuance, thin post-curve books relative to Pons or Bankr/Long.xyz. The pad is not a census row. [claim R-13]

## What could go wrong

The factory and TrenchManager are upgradeable TransparentUpgradeableProxy contracts. ProxyAdmin owner() and factory storage slot 0 are one externally owned account. Docs lock V4 LP in TrenchPositionLocker for one year; that locker was not decoded this pass. Getting Started still says Uniswap V2 graduation. [verified R-8 R-9] [claim R-2 R-15]

## Product and mechanics

Docs: 1 billion supply, 80% sold on the curve, 20% reserved for the pool. Robinhood graduation threshold about 5 ETH. Curve fee 1% of trade size (0.3% creator, 0.7% protocol). Listing fee 2% of quote at migration. New RH pools use Uniswap V4; TrenchV4FeeHook takes 1% quote-side and splits 60/40 deployer/protocol. Pre-upgrade tokens stay on Uniswap V3. Stock-token quote pairs are a 2 Sep 2026 handle claim. [claim R-2 R-3 R-20]

## Control and security

owner path on the factory is storage slot 0 and ProxyAdmin owner(), both 0xbeb76A70c82B09E30B2008eAFa7F987987EC9e0b. That address has no code. Implementation 0xDc4b9FAF…4a22 is not source-verified on Blockscout. TrenchManager 0x77dC6f63…3f9d is a second EIP1967 proxy with the same owner. No audit URL this pass. [verified R-8 R-9 R-12] [unknown]

## Team and provenance

docs/resources/links names @TrenchToday01 and trench.today. The handle display name is trench.today; the docs description matches the bio. Home HTML has no twitter:site. @TrenchToday101 reuses the display name; flag handle-collision. No GitHub org linked from those surfaces. A 31 Jul post used trench-web.enstrack.com, which did not resolve this pass. [verified R-4] [claim R-1 R-16 R-22 R-24]

## Economics and activity

Emerson 30d: 123740 tokens, 251 unique deployers, last_launch 2026-09-03 01:31:19 UTC, DEX volume 59015.52 USD / 2207 trades. Factory nonce 146364 on 4663. Llama has no protocol/trench row. Figures are the Emerson reconstruction, not a chain-slice TVL. [claim R-8 R-13 R-14]

## Material risks

- Factory and manager are upgradeable; owner is one EOA with no code. [verified R-8 R-12]
- Factory implementation source is not verified on Blockscout this pass. [verified R-9 R-10]
- Getting Started names Uniswap V2; How-it-works names Uniswap V4 for new Robinhood graduates. [claim R-15 R-2]
- Creator-fee strings disagree across July posts and current docs. [claim R-6 R-23 R-2]
- No audit report URL. [unknown]
- Handle-collision: @TrenchToday101. [claim R-4 R-5 R-24]

## Verification passes

- Receipts: trench.today, docs (home, introduction, how-it-works, getting-started, contracts, links), X profile and posts, Emerson dashboard, Llama 404, GitHub 404, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-3 R-8 R-13]
- Numbers: token counts and DEX volume are the Emerson 30d slice, not Llama. Bytecode lengths, nonce, and owner slots are chain 4663 RPC. [verified R-8 R-13]
- Adversarial: strongest contrary reading is that 0x2ECFb98B…FbAA is an abandoned proxy and live launches use TrenchManager or another factory, or that Emerson's Trench / Trencher label mixes a second product. Docs set BondingCurveFactory to this address; factory nonce 146364 and Emerson last_launch 2026-09-03 argue it is still creating. Circus, Sentry, Klik, pew.fun, and Pons are different factories. [inference R-3 R-8 R-13]

## Operations log

- Census.yaml has no trench row; no content/projects/trench.yaml. Discovery inventory CLM-18 names trench | Trench | @TrenchToday01 | trench.today with factory 0x2ecfb98bce4f3616115e4a2a7a2379af388dfbaa.
- GET research/inbox/packets/trench/WORK-20260903-grok-heavy-icarus-research.md on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned HTTP 404 before this write.
- X Latest from:TrenchToday01: profile, 10 Jul introduce, 12 Jul fee split, 14 Jul V4, 17 Jul Arc, 23 Jul TRENCH Fund, 31 Jul 10k tokens, 20 Aug RDDT article, 2 Sep stock pairs and FAMI.
- trench.today, /create, /docs, /docs/introduction, /docs/how-it-works, /docs/getting-started, /docs/for-developers/contracts, /docs/resources/links opened 2026-09-03. trench-web.enstrack.com DNS failed.
- RPC https://rpc.mainnet.chain.robinhood.com: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, eth_getStorageAt, owner()/da4fbe52 on factory, manager, ProxyAdmin, impl, FeeVault, V4FeeHook, PositionLocker, LPFeeSplitter, owner EOA.
- Blockscout api/v2 for factory, implementation, TrenchManager, ProxyAdmin, owner.
- Dune 0x_emerson 30d widgets 8130687 / 8130694 / 8130705. api.llama.fi/protocol/trench not found. Gecko skipped.
- api.github.com/orgs/trench 404; /users/TrenchToday01 404; /users/trench 2009 user.
