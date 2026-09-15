---
# Packet v2 (docs/research-system.md §5). Discovery inventory seed.
contract_version: proofline-research-v2
work_id: WORK-20260915-grok-bot-discovery-inventory
producer: grok-bot
role: collector
base_sha: 59b4898985a5871bfe85016ff5bb8dabbd361de9
slug: discovery-inventory
name: Discovery inventory 2026-09-15
packet_tier: seed
as_of: 2026-09-15T14:06:00Z
prior_packet: null
supersedes: null
owned_slugs: [discovery-inventory]
allowed_paths:
  - research/inbox/packets/discovery-inventory/WORK-20260915-grok-bot-discovery-inventory.md

identity:
  canonical_name: Discovery inventory 2026-09-15
  aliases: []
  symbols: []
  entity_kind: unknown
  chain_scope: unknown
  official_domain: "NULL — inventory packet"
  official_handle: "NULL — inventory packet"
  repository: "NULL — inventory packet"
  possible_matches:
    - slug: hookr
      signals: [other]
      contrary_signals:
        - "Census hookr is hookr.fun / @Hookrfun. Twofold is twofold.fi / @twofoldfi. No shared handle, domain, or reproduced address this round."
    - slug: what-the-hook
      signals: [other]
      contrary_signals:
        - "Census what-the-hook is whatthehook.io / @whatthehookv4. Twofold is twofold.fi / @twofoldfi. No shared handle, domain, or reproduced address this round."

classification:
  primary_leaf: tooling/scanner
  secondary_leaves: []
  mechanism_tags: [other]
  ecosystem_role: observe
  lifecycle: unknown
  coverage_recommendation: candidate
  evidence_state: partly-verified
  rationale: "Weekday discovery round 2026-09-15. Suggested gap Twofold / @twofoldfi / twofold.fi is not a census row and is not in open #163 (arcus) or #164 (canopy). Site and handle name each other; TWO 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 and DualPoolHook 0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0 were reproduced on chain 4663. Distinct from census hookr and what-the-hook. Open conflict CON-1: docs Range runner vs empty code."

qualifying:
  deployed_on_chain: { status: unknown, claim_ids: [], note: "inventory packet; candidate deployments are on the Twofold claims, not this inventory identity" }
  native_play:       { status: unknown, claim_ids: [], note: "inventory packet" }
  citable:           { status: unknown, claim_ids: [], note: "inventory packet" }
  research_story:    { status: unknown, claim_ids: [], note: "inventory packet" }

links:
  - { kind: site, url: "https://twofold.fi/", authenticity: confirmed }
  - { kind: docs, url: "https://twofold.fi/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/twofoldfi", authenticity: confirmed }
  - { kind: github, url: "https://github.com/twofoldfi", authenticity: confirmed }
  - { kind: github, url: "https://github.com/twofoldfi/twofold-contracts", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5", authenticity: confirmed }
  - { kind: explorer, url: "https://robinhoodchain.blockscout.com/address/0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0", authenticity: confirmed }
  - { kind: dexscreener, url: "https://dexscreener.com/robinhood/0xb8d83170ad5e6e7483ef3f87e3ccde37b916b3386863998a6c5d084b3bd8ba1e", authenticity: confirmed }
  - { kind: other, url: "https://api.coingecko.com/api/v3/coins/twofold", authenticity: confirmed }
  - { kind: other, url: "https://api.llama.fi/protocol/twofold", authenticity: confirmed }
  - { kind: other, url: "https://blog.uniswap.org/dualpool-hook-is-now-live", authenticity: confirmed }

deployments:
  - label: TWO token (RPC name Twofold, symbol TWO, ERC-20)
    role: token
    address:
      value: "0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5"
      chain: robinhood-chain
      source: bio
      seen: 2026-09-15
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: DualPoolHook (Blockscout name DualPoolHook)
    role: other
    address:
      value: "0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-15
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5, R-13]
  - label: AllowlistedFactory (Blockscout name AllowlistedFactory)
    role: factory
    address:
      value: "0x92cbCe5d1f5b7018b98bE81a8B9d010B547F0c85"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-15
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5, R-14]
  - label: Registry (Blockscout name Registry)
    role: other
    address:
      value: "0x1b66DD14C9281A18E696dbdb40cFB5070842c0C2"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-15
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5, R-15]
  - label: OperatorController (Blockscout name OperatorController; docs label OperatorControllerV2)
    role: other
    address:
      value: "0xc7295643EC5414DE243e3F9810Eb28F85e5d9ABb"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-15
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5, R-17]
  - label: TimelockController (Blockscout name; OperatorController owner())
    role: timelock
    address:
      value: "0x055a4f9583790e929a309cb0146280b1589a46fe"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-15
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-18]
  - label: Range runner (docs table; RPC empty code)
    role: other
    address:
      value: "0x2Bd61C3364e3D8dD7454cC5f1C47324fc2ACE35d"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-15
      exists_on_4663: false
      explorer_source_verified: null
    receipt_ids: [R-2, R-5]

metrics:
  - { kind: market_cap, value: 298160, currency: USD, as_of: 2026-09-15T13:56:40Z, window: point, method: "api.coingecko.com/api/v3/coins/twofold market_data.market_cap.usd; platforms.robinhood 0x2a4a33a2163d005d8e7f1d9ac08d14c98db288d5", class: claim, receipt_ids: [R-6] }
  - { kind: volume_24h, value: 92576.37, currency: USD, as_of: 2026-09-15T14:01:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 Uniswap v4 TWO/WETH pair volume.h24; pair-level, not summed across TWO/USDG rows", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 1591, currency: null, as_of: 2026-09-15T13:58:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/addresses/0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 token.holders_count", class: claim, receipt_ids: [R-4] }
  - { kind: tvl, value: 93702.81, currency: USD, as_of: 2026-09-15T12:37:23Z, window: point, method: "api.llama.fi/protocol/twofold currentChainTvls['Robinhood Chain'] only; staking 66261.57 not added", class: claim, receipt_ids: [R-16] }

reproductions:
  - { id: REP-1, method: official-crosslink, chain_id: 4663, checked_at: 2026-09-15T14:02:00Z, receipt_ids: [R-1, R-3, R-9], result: "twofold.fi publishes CA 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5; @twofoldfi website field is twofold.fi and bio publishes the same CA; GitHub user twofoldfi blog https://twofold.fi and twitter_username twofoldfi" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-15T14:04:40Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663); eth_blockNumber 0x3cc337b (63714651). 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 code 1839 B name() Twofold symbol() TWO decimals() 18 totalSupply() 1e27 owner() 32 zero bytes. 0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0 code 24371 B owner() 0xc7295643ec5414de243e3f9810eb28f85e5d9abb. 0x92cbCe5d1f5b7018b98bE81a8B9d010B547F0c85 code 1158 B. 0x1b66DD14C9281A18E696dbdb40cFB5070842c0C2 code 3439 B. 0xc7295643EC5414DE243e3F9810Eb28F85e5d9ABb code 7973 B owner() 0x055a4f9583790e929a309cb0146280b1589a46fe. 0x055a4f9583790e929a309cb0146280b1589a46fe code 5448 B; getMinDelay() reverted. 0x2Bd61C3364e3D8dD7454cC5f1C47324fc2ACE35d code 0 B. TWO creation tx 0xf95d8960…7044 block 48559408 timestamp 2026-08-28T19:47:03Z from 0xC8720447712e6C4c851B3884b4Ec93F9cE8aD5fD." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-15T13:58:00Z, receipt_ids: [R-4, R-13, R-14, R-15, R-17, R-18], result: "Blockscout api/v2: 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 is_contract true is_verified true name TwofoldToken token Twofold/TWO holders_count 1591 creator 0xC8720447712e6C4c851B3884b4Ec93F9cE8aD5fD creation_transaction_hash 0xf95d89606955ca329e27443fa353965c02bf2999d0a4b04caedfda3eb6d57044. 0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0 name DualPoolHook verified creator 0x92cbCe5d1f5b7018b98bE81a8B9d010B547F0c85. 0x92cbCe5d1f5b7018b98bE81a8B9d010B547F0c85 name AllowlistedFactory verified. 0x1b66DD14C9281A18E696dbdb40cFB5070842c0C2 name Registry verified. 0xc7295643EC5414DE243e3F9810Eb28F85e5d9ABb name OperatorController verified. 0x055a4f9583790e929a309cb0146280b1589a46fe name TimelockController verified." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-15T14:01:00Z, receipt_ids: [R-6, R-8, R-16], result: "CoinGecko id twofold platforms.robinhood 0x2a4a33a2163d005d8e7f1d9ac08d14c98db288d5 homepage https://twofold.fi twitter_screen_name twofoldfi preview_listing false. DexScreener same token websites https://twofold.fi/ socials https://x.com/twofoldfi. Llama protocol/twofold chains Robinhood Chain address robinhood:0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 currentChainTvls Robinhood Chain 93702.81496 at tvl date 1789475843." }

claims:
  - { id: CLM-1, field: candidate, value: "twofold | Twofold | @twofoldfi | twofold.fi | DualPool Uniswap v4 hook path; ticker TWO", class: claim, observed_at: 2026-09-15T14:02:00Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "Official site twofold.fi and handle @twofoldfi name each other; the handle bio publishes the TWO address", class: verified, observed_at: 2026-09-15T14:02:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@twofoldfi", class: verified, observed_at: 2026-09-15T14:02:00Z, receipt_ids: [R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-4, field: identity.symbol, value: "TWO", class: verified, observed_at: 2026-09-15T14:04:40Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-5, field: taxonomy.primary-leaf, value: "twofold | yield/lp-manager", class: claim, observed_at: 2026-09-15T14:00:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-6, field: taxonomy.entity-kind, value: "twofold | protocol", class: claim, observed_at: 2026-09-15T14:00:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: taxonomy.chain-scope, value: "twofold | robinhood-native", class: claim, observed_at: 2026-09-15T14:04:40Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-8, field: lifecycle, value: "twofold | mainnet", class: verified, observed_at: 2026-09-15T14:04:40Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-9, field: product.mechanism, value: "Docs: DualPool v4 hook on chain 4663 parks idle USDG in allowlisted ERC-4626 vaults and deploys liquidity inside a swap. Site: 29 Registry pools; every listed pool binds Steakhouse USDG. Uniswap Labs DualPool writeup is the upstream hook design, not a Twofold identity.", class: claim, observed_at: 2026-09-15T14:00:00Z, receipt_ids: [R-1, R-2, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-10, field: deployment.address, value: "0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5", class: verified, observed_at: 2026-09-15T14:04:40Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-11, field: deployment.address, value: "0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0", class: verified, observed_at: 2026-09-15T14:04:40Z, receipt_ids: [R-5, R-13], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-12, field: deployment.address, value: "0x92cbCe5d1f5b7018b98bE81a8B9d010B547F0c85", class: verified, observed_at: 2026-09-15T14:04:40Z, receipt_ids: [R-5, R-14], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-13, field: deployment.address, value: "0x1b66DD14C9281A18E696dbdb40cFB5070842c0C2", class: verified, observed_at: 2026-09-15T14:04:40Z, receipt_ids: [R-5, R-15], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-14, field: deployment.address, value: "0xc7295643EC5414DE243e3F9810Eb28F85e5d9ABb", class: verified, observed_at: 2026-09-15T14:04:40Z, receipt_ids: [R-5, R-17], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-15, field: control.owner, value: "DualPoolHook owner() 0xc7295643EC5414DE243e3F9810Eb28F85e5d9ABb; OperatorController owner() 0x055a4f9583790e929a309cb0146280b1589a46fe (Blockscout TimelockController); TWO owner() zero", class: verified, observed_at: 2026-09-15T14:04:40Z, receipt_ids: [R-5, R-17, R-18], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: relationship, value: "Keep distinct from census hookr (@Hookrfun / hookr.fun) and what-the-hook (@whatthehookv4 / whatthehook.io). Same Uniswap v4 hook class, no shared official surface this round.", class: claim, observed_at: 2026-09-15T14:03:00Z, receipt_ids: [R-1, R-3, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: relationship, value: "@v4dotfun profile text: The tech launchpad of @RobinhoodApp / Powered by @canopyfinance / $CNPY. Not a Twofold surface. Canopy already inventoried in #164.", class: claim, observed_at: 2026-09-15T14:02:30Z, receipt_ids: [R-11, R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "Docs: Uniswap audited DualPool upstream; Twofold wrappers have no third-party audit URL. Llama protocol/twofold audits 0.", class: claim, observed_at: 2026-09-15T14:01:00Z, receipt_ids: [R-2, R-7, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: deployment.address, value: "0x2Bd61C3364e3D8dD7454cC5f1C47324fc2ACE35d", class: claim, observed_at: 2026-09-15T14:00:00Z, receipt_ids: [R-2], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: deployment.address, value: "0x2Bd61C3364e3D8dD7454cC5f1C47324fc2ACE35d", class: verified, observed_at: 2026-09-15T14:04:40Z, receipt_ids: [R-5], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-21, field: other, value: "Open PRs targeting main: #164 canopy, #163 arcus, #92 site trenches stream with no packet files. No open PR inventoring twofold or sluice.", class: claim, observed_at: 2026-09-15T13:57:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "api.fxtwitter.com user objects returned 200 for sampled handles; every /tweets path returned HTTP 404. No status id or post body was copied this round.", class: claim, observed_at: 2026-09-15T14:02:30Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: deployment.address
    claim_ids: [CLM-19, CLM-20]
    material_effect: "Docs list 0x2Bd61C3364e3D8dD7454cC5f1C47324fc2ACE35d as Range runner; RPC eth_getCode on chain 4663 was empty. Do not treat that address as a live Twofold contract until code appears."
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "TWO token reproduced on chain 4663"
    summary: "TwofoldToken 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 is a verified ERC-20 on Robinhood Chain. RPC name() Twofold, symbol() TWO, owner() zero. Created in tx 0xf95d8960…7044 at 2026-08-28T19:47:03Z."
    account: null
    occurred_at: 2026-08-28T19:47:03Z
    observed_at: 2026-09-15T14:04:40Z
    affected_fields: [deployment.address, identity.symbol]
    evidence_state: verified
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
    tag: other
  - id: EVT-2
    type: onchain
    title: "DualPoolHook reproduced on chain 4663"
    summary: "Docs DualPoolHook 0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0 has 24371 B code on chain 4663. Blockscout name DualPoolHook, verified, creator AllowlistedFactory. owner() is OperatorController 0xc7295643…9ABb."
    account: null
    occurred_at: 2026-08-28T19:47:01Z
    observed_at: 2026-09-15T14:04:40Z
    affected_fields: [deployment.address, control.owner]
    evidence_state: verified
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-5, R-13]
    tag: other

receipts:
  - { id: R-1, publisher: Twofold, title: "twofold.fi", url: "https://twofold.fi/", published_at: null, accessed_at: 2026-09-15T13:57:30Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-5, CLM-6, CLM-9, CLM-16], excerpt: "TWO is live on Robinhood Chain. One deposit, two yields. Uniswap's audited DualPool hook, unmodified. 29 pools listed, deposits open. CA 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5. Every pool listed today binds the Steakhouse USDG vault." }
  - { id: R-2, publisher: Twofold, title: "twofold.fi/docs", url: "https://twofold.fi/docs", published_at: null, accessed_at: 2026-09-15T13:58:20Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-6, CLM-7, CLM-8, CLM-9, CLM-18, CLM-19], excerpt: "Twofold deploys Uniswap DualPool v4 hook on Robinhood Chain (chain id 4663), byte for byte unmodified. DualPoolHook 0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0. AllowlistedFactory 0x92cbCe5d1f5b7018b98bE81a8B9d010B547F0c85. Registry 0x1b66DD14C9281A18E696dbdb40cFB5070842c0C2. OperatorControllerV2 0xc7295643EC5414DE243e3F9810Eb28F85e5d9ABb. TwofoldToken 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5. Range runner 0x2Bd61C3364e3D8dD7454cC5f1C47324fc2ACE35d. Wrappers: no third-party audit claimed." }
  - { id: R-3, publisher: FixTweet, title: "api.fxtwitter.com/twofoldfi", url: "https://api.fxtwitter.com/twofoldfi", published_at: null, accessed_at: 2026-09-15T13:57:40Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-16], excerpt: "code 200. screen_name twofoldfi name TwoFold. description Dual-yield liquidity infrastructure on Robinhood Chain 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5. website http://twofold.fi. followers 2051 tweets 78 joined Mon Aug 17 03:21:28 +0000 2026." }
  - { id: R-4, publisher: Blockscout, title: "TWO 0x2A4a33A2…b288d5", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5", published_at: null, accessed_at: 2026-09-15T13:58:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-8, CLM-10, EVT-1], excerpt: "is_contract true is_verified true name TwofoldToken proxy_type null. token name Twofold symbol TWO decimals 18 holders_count 1591 total_supply 1000000000000000000000000000. creator 0xC8720447712e6C4c851B3884b4Ec93F9cE8aD5fD creation_transaction_hash 0xf95d89606955ca329e27443fa353965c02bf2999d0a4b04caedfda3eb6d57044." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode / eth_call chain 4663", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-15T14:04:40Z, kind: other, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-7, CLM-8, CLM-10, CLM-11, CLM-12, CLM-13, CLM-14, CLM-15, CLM-20, EVT-1, EVT-2], excerpt: "eth_chainId 0x1237. TWO 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 code 1839 B name Twofold symbol TWO owner 0x0. DualPoolHook 0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0 code 24371 B owner 0xc7295643…9ABb. Factory 0x92cbCe5d…0c85 1158 B. Registry 0x1b66DD14…c0C2 3439 B. OperatorController 0xc7295643…9ABb 7973 B owner 0x055a4f95…46fe. Timelock 0x055a4f95…46fe 5448 B getMinDelay revert. Range runner 0x2Bd61C33…ACE35d 0 B." }
  - { id: R-6, publisher: CoinGecko, title: "coins/twofold", url: "https://api.coingecko.com/api/v3/coins/twofold", published_at: null, accessed_at: 2026-09-15T13:56:40Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-4], excerpt: "id twofold symbol two name Twofold. platforms.robinhood 0x2a4a33a2163d005d8e7f1d9ac08d14c98db288d5. homepage https://twofold.fi twitter_screen_name twofoldfi preview_listing false. market_data.market_cap.usd 298160 total_volume.usd 97260 last_updated 2026-09-15T13:56:40.000Z." }
  - { id: R-7, publisher: Uniswap Labs, title: "DualPool Hook: A Technical Deep Dive", url: "https://blog.uniswap.org/dualpool-hook-is-now-live", published_at: 2026-07-22T00:00:00Z, accessed_at: 2026-09-15T13:59:00Z, kind: news, authority: independent, authenticity: confirmed, supports: [CLM-9, CLM-18], excerpt: "DualPool is an open-source Uniswap v4 hook. Between swaps inventory lives in ERC-4626 vaults; a swap withdraws, deploys concentrated liquidity, executes, and re-vaults inside one transaction. OpenZeppelin audited DualPool. This article does not name Twofold or chain 4663." }
  - { id: R-8, publisher: DexScreener, title: "TWO token pairs", url: "https://api.dexscreener.com/latest/dex/tokens/0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5", published_at: null, accessed_at: 2026-09-15T14:01:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [], excerpt: "Uniswap v4 TWO/WETH pair 0xb8d83170…ba1e chainId robinhood volume.h24 92576.37 liquidity.usd 71403.24 fdv 299712. info.websites https://twofold.fi/ info.socials https://x.com/twofoldfi. Additional TWO/USDG v4 rows exist; their h24 volumes were not added to 92576.37." }
  - { id: R-9, publisher: GitHub, title: "user twofoldfi", url: "https://api.github.com/users/twofoldfi", published_at: null, accessed_at: 2026-09-15T14:00:10Z, kind: repository, authority: primary, authenticity: confirmed, supports: [CLM-2], excerpt: "login twofoldfi name TwoFoldFI blog https://twofold.fi twitter_username twofoldfi public_repos 6 created_at 2026-08-29T19:26:40Z." }
  - { id: R-10, publisher: GitHub, title: "twofoldfi/twofold-contracts", url: "https://github.com/twofoldfi/twofold-contracts", published_at: null, accessed_at: 2026-09-15T14:00:20Z, kind: repository, authority: primary, authenticity: confirmed, supports: [], excerpt: "twofoldfi/twofold-contracts: Dual-yield liquidity on Robinhood Chain: the Uniswap v4 hook, staking vault and zapper contracts behind twofold.fi." }
  - { id: R-11, publisher: FixTweet, title: "api.fxtwitter.com/v4dotfun", url: "https://api.fxtwitter.com/v4dotfun", published_at: null, accessed_at: 2026-09-15T14:02:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-17], excerpt: "code 200. screen_name v4dotfun name v4.fun. description The tech launchpad of @RobinhoodApp Powered by @canopyfinance / $CNPY. website http://v4.fun. tweets endpoint HTTP 404." }
  - { id: R-12, publisher: FixTweet, title: "Follow-list tweets 404", url: "https://api.fxtwitter.com/twofoldfi/tweets", published_at: null, accessed_at: 2026-09-15T14:02:30Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-22], excerpt: "GET /twofoldfi/tweets HTTP 404 code 404 message Not found. The same 404 was returned for /tweets on sluice_rh, v4dotfun, MosaicETF, rallypadfun, FundedProtocol, GwoodFinance, scalarliquidity, brickswalltech, HoodInsider_, 0xSammy, ponsdotfamily, Floor_fi, canopyfinance, arcus_xyz. No status bodies copied." }
  - { id: R-13, publisher: Blockscout, title: "DualPoolHook 0x127B3f3b…FAAc0", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0", published_at: null, accessed_at: 2026-09-15T13:59:20Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11, EVT-2], excerpt: "is_contract true is_verified true name DualPoolHook proxy_type null. creator_address_hash 0x92cbCe5d1f5b7018b98bE81a8B9d010B547F0c85 creation_transaction_hash 0x57bb12658669cdf1de8230bb898f8b7bf317c348f88f941d5cc3d8ac64bcdb44." }
  - { id: R-14, publisher: Blockscout, title: "AllowlistedFactory 0x92cbCe5d…0c85", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x92cbCe5d1f5b7018b98bE81a8B9d010B547F0c85", published_at: null, accessed_at: 2026-09-15T14:00:40Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "is_contract true is_verified true name AllowlistedFactory proxy_type null. creator_address_hash 0xC8720447712e6C4c851B3884b4Ec93F9cE8aD5fD creation_transaction_hash 0x422c1ee1ecf24f615fce4dcc85183927c53c4160a37714d13fcf8d177bf207eb." }
  - { id: R-15, publisher: Blockscout, title: "Registry 0x1b66DD14…c0C2", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x1b66DD14C9281A18E696dbdb40cFB5070842c0C2", published_at: null, accessed_at: 2026-09-15T14:00:50Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "is_contract true is_verified true name Registry proxy_type null. creator_address_hash 0xC8720447712e6C4c851B3884b4Ec93F9cE8aD5fD creation_transaction_hash 0xaf09c8c918c73c40e41788eab493629a50ec808a9ca1aafdfa97c0289d4d82ca." }
  - { id: R-16, publisher: DefiLlama, title: "protocol/twofold", url: "https://api.llama.fi/protocol/twofold", published_at: null, accessed_at: 2026-09-15T14:03:10Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-18], excerpt: "id 8569 name Twofold symbol TWO url https://twofold.fi twitter twofoldfi chains Robinhood Chain address robinhood:0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 gecko_id twofold category Dexs audits 0. currentChainTvls Robinhood Chain 93702.81496 Robinhood Chain-staking 66261.57415. listedAt 2026-09-05T00:19:32Z. Methodology marks TVL doublecounted vs PoolManager and Steakhouse vaults." }
  - { id: R-17, publisher: Blockscout, title: "OperatorController 0xc7295643…9ABb", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xc7295643EC5414DE243e3F9810Eb28F85e5d9ABb", published_at: null, accessed_at: 2026-09-15T13:59:40Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-15], excerpt: "is_contract true is_verified true name OperatorController proxy_type null. creator_address_hash 0xC8720447712e6C4c851B3884b4Ec93F9cE8aD5fD creation_transaction_hash 0x54fb006f96bd689cce974b55ecc8f0cbff50d4dab9ffdb4cb2703da7b48ec2fa." }
  - { id: R-18, publisher: Blockscout, title: "TimelockController 0x055a4f95…46fe", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x055a4f9583790e929a309cb0146280b1589a46fe", published_at: null, accessed_at: 2026-09-15T14:05:10Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "is_contract true is_verified true name TimelockController proxy_type null. creator_address_hash 0xC8720447712e6C4c851B3884b4Ec93F9cE8aD5fD creation_transaction_hash 0x294e89ec21c3ac4cea4e34dfaa5496be5018094052d078cdbc3d57eb337981ea. RPC getMinDelay() reverted." }
  - { id: R-19, publisher: Proofline main, title: "census.yaml hookr and what-the-hook", url: "https://github.com/harsharn10/proofline/blob/59b4898985a5871bfe85016ff5bb8dabbd361de9/content/census.yaml", published_at: null, accessed_at: 2026-09-15T13:55:30Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-16], excerpt: "slug hookr name Hookr handle @Hookrfun site https://hookr.fun. slug what-the-hook name What The Hook handle @whatthehookv4 site https://www.whatthehook.io. No census row named Twofold, TWO, sluice, canopy, or arcus. 182 slugs on this SHA." }
  - { id: R-20, publisher: GitHub, title: "Open pull requests targeting main", url: "https://github.com/harsharn10/proofline/pulls", published_at: null, accessed_at: 2026-09-15T13:57:00Z, kind: other, authority: independent, authenticity: confirmed, supports: [CLM-17, CLM-21], excerpt: "Open PRs: #164 WORK-20260914-grok-bot-discovery-inventory candidate canopy | Canopy | @canopyfinance | canopyfinance.io. #163 WORK-20260911-grok-bot-discovery-inventory candidate arcus | Arcus | @arcus_xyz | arcus.xyz. #92 site researched-asset activity stream, head codex/20260904/icarus-trenches-stream, no research/inbox/packets files. No draft PRs." }
  - { id: R-21, publisher: Proofline main, title: "accounts.yaml @twofoldfi", url: "https://github.com/harsharn10/proofline/blob/59b4898985a5871bfe85016ff5bb8dabbd361de9/content/accounts.yaml", published_at: null, accessed_at: 2026-09-15T13:55:40Z, kind: other, authority: independent, authenticity: confirmed, supports: [], excerpt: "handle @twofoldfi tier watch role project. No slug field on the row. Nearby unused watch rows: @sluice_rh @v4dotfun @MosaicETF @rallypadfun @scalarliquidity @brickswalltech @FundedProtocol @GwoodFinance." }

gaps:
  - { area: communications, priority: P0, question: "What dated status ids did @twofoldfi post in this window, and do any name a new contract or pool?", checked: "api.fxtwitter.com/twofoldfi profile 200; /tweets 404 for twofoldfi and 14 other sampled handles, 2026-09-15", next: "open Latest on @twofoldfi when a signed-in X surface is available and copy status id, date, and exact text" }
  - { area: security, priority: P0, question: "Does any OpenZeppelin DualPool report URL match the 4663 DualPoolHook bytecode, and is there a wrapper audit?", checked: "docs claim upstream Uniswap audit and no wrapper third-party audit; Llama audits 0; Uniswap blog names OpenZeppelin without a report URL copied this round", next: "open the DualPool audit artifact and diff bytecode against 0x127B3f3b…FAAc0" }
  - { area: deployment, priority: P0, question: "Does Range runner 0x2Bd61C33…ACE35d later receive code, or is the docs row stale?", checked: "eth_getCode 0 B at block 63714651; Blockscout UI not opened for this address after Cloudflare on later curl", next: "re-read eth_getCode and Blockscout; do not list as live until code is non-empty" }
  - { area: control, priority: P1, question: "What is getMinDelay / proposer / executor on TimelockController 0x055a4f95…46fe, given getMinDelay() reverted?", checked: "owner() chain DualPoolHook → OperatorController → TimelockController; getMinDelay() reverted; creator is EOA 0xC8720447…D5fD", next: "decode verified TimelockController source; eth_call roles" }
  - { area: product, priority: P1, question: "Are 29 Registry listings readable on-chain, and which pool ids bind Steakhouse USDG 0xBeEff033…09dd?", checked: "docs table rendered 'Reading the Registry…'; Registry contract has 3439 B code; no eth_call of listing count this round", next: "eth_call Registry listing count/getters; copy one pool id and reproduce it" }
  - { area: identity, priority: P1, question: "Should @twofoldfi vs site spelling TwoFold / Twofold be treated as one display name?", checked: "X name TwoFold; site Twofold; CoinGecko Twofold; token name() Twofold", next: "compiler alias only; do not split identities on capitalization" }
  - { area: economics, priority: P2, question: "What is own-pool TVL versus Llama's doublecounted DualPool/PoolManager/Steakhouse figure?", checked: "Llama currentChainTvls Robinhood Chain 93702.81 with methodology noting doublecount; DexScreener TWO/WETH liquidity 71403.24 is pair-level", next: "do not sum Llama staking with TVL; reproduce hook getReserves if a later seed is assigned" }
  - { area: team, priority: P2, question: "Who holds creator key 0xC8720447…D5fD, and does GitHub user twofoldfi control the deployed bytecode?", checked: "creator EOA for TWO, factory, registry, operator, timelock; GitHub blog and twitter_username match the site/handle", next: "do not merge the EOA with the GitHub user without a signed or on-chain link" }
  - { area: activity, priority: P2, question: "What 24h volume is TWO/WETH versus all DualPool equity pairs?", checked: "DexScreener TWO/WETH h24 92576.37; CoinGecko total_volume 97260; Llama TVL is reserves not volume", next: "keep pair-level DexScreener; do not average with CoinGecko" }

---

# Discovery inventory 2026-09-15 — research packet

## What it is

Robinhood Chain names that are not yet census rows. This round's protocol lead is Twofold: Uniswap DualPool v4 pools that rest idle USDG in allowlisted ERC-4626 lending vaults and pull that capital in for a swap. Official site twofold.fi and handle @twofoldfi name each other; the handle bio publishes TWO `0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5`. RPC this round reproduced that ERC-20 on chain 4663 (name Twofold, symbol TWO, owner zero). Docs and Blockscout also name DualPoolHook `0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0`. Distinct from census hookr and what-the-hook. Open #164 already inventoried canopy; open #163 already inventoried arcus.

Themes: dual-yield, uniswap-v4, lp-manager

TL;DR: Twofold is a DualPool LP path on Robinhood Chain; TWO exists at 0x2A4a33A2…b288d5 and has no census row.

## Why it matters

- Thesis: a native DualPool hook plus wrappers on chain 4663, with idle USDG bound to allowlisted vaults in the docs [claim R-2 R-5]
- Traction: Llama Robinhood Chain TVL about $93.7k at 2026-09-15T12:37:23Z; CoinGecko market cap about $298k [claim R-6 R-16]
- Catalyst: docs say 29 Registry pools and staking are open; Registry listing count was not eth_called this round [claim R-2]

## What could go wrong

- Docs list Range runner 0x2Bd61C33…ACE35d; RPC eth_getCode was empty this round [verified R-5]
- Wrappers have no third-party audit URL; Llama audits 0; Uniswap DualPool audit is upstream, not a 4663 bytecode match [claim R-2 R-7 R-16]
- OperatorController is owned by a contract Blockscout names TimelockController; getMinDelay() reverted [verified R-5 R-18]

## Operations log

- Main SHA read: 59b4898985a5871bfe85016ff5bb8dabbd361de9 (origin/main, re-fetched; unchanged from assignment base_sha). AGENTS.md, docs/ingestion.md, docs/integrations/grok-bot.md, docs/research-system.md §§4–7 and §10, docs/templates/research-packet-v2.md, docs/admission-policy.md, docs/operating-flow.md, skills/research-seed/SKILL.md, content/census.yaml (182 slugs), content/accounts.yaml.
- Open PRs including drafts: #164 WORK-20260914-grok-bot-discovery-inventory (canopy; not duplicated). #163 WORK-20260911-grok-bot-discovery-inventory (arcus; not duplicated). #92 site trenches stream; no packet files. Search for open twofold/sluice PRs returned none.
- Follow-list: sampled project/media/alpha handles via api.fxtwitter.com user objects. Profile claims recovered for @twofoldfi (TWO CA + twofold.fi), @sluice_rh (CA 0xb48d34dd…85ec + sluice.live), @v4dotfun (powered by @canopyfinance), @MosaicETF (CA 0x77665080…e025 + mosaicetf.com), @rallypadfun (rallypad.fun), @FundedProtocol (thenews.gg), @GwoodFinance (greenwood.fi / app.greenwood.fi), @scalarliquidity ($SCL 0xBe92b334…07bBE + scalarliquidity.com), @brickswalltech (CA 0x7b7faa88…4643 + brickswall.tech), @HoodInsider_ (media; fan-account disclaimer), @0xSammy (alpha; 0xsammy.com), @ponsdotfamily (ponsfamily.com/launchpad), @Floor_fi (already census floor), @canopyfinance (already #164), @arcus_xyz (already #163). Status bodies were not recovered (every /tweets 404). No invented posts.
- Gap hunt: Twofold / @twofoldfi / twofold.fi did not collapse to a census row or to #163/#164. Distinct from hookr and what-the-hook. Sluice remains unused (RPC name Sluice / SLUICE at 0xb48d34dd…85ec; Blockscout verified name PonsV2LauncherToken) and was not packed because this round's assigned lead reproduced. Other watch names without a census slug this round and not packed: sluice_rh, v4dotfun, MosaicETF, rallypadfun, scalarliquidity, brickswalltech, FundedProtocol, GwoodFinance. HedgeOnHood and ArcLiquidity already have census rows hedge and arc. Floor already census slug floor. v4dotfun names canopy, already in #164.
- Surfaces opened: twofold.fi, twofold.fi/docs, api.fxtwitter.com profiles and /tweets, CoinGecko coins/twofold, DexScreener token API, Llama protocol/twofold, Uniswap DualPool blog, GitHub user twofoldfi and repo twofold-contracts, Blockscout api/v2 (TWO, DualPoolHook, factory, registry, operator, timelock, sluice token), RPC https://rpc.mainnet.chain.robinhood.com. Later Blockscout curl hits were Cloudflare HTML; WebFetch still returned JSON for the addresses above.
- Addresses checked on 4663: TWO 0x2A4a33A2163D005d8E7f1D9aC08d14c98db288d5 exists_on_4663 true, verified source true, 1839 B. DualPoolHook 0x127B3f3b7769f659C5eDBfF8b4005443f19FAAc0 24371 B verified. AllowlistedFactory 0x92cbCe5d1f5b7018b98bE81a8B9d010B547F0c85 1158 B verified. Registry 0x1b66DD14C9281A18E696dbdb40cFB5070842c0C2 3439 B verified. OperatorController 0xc7295643EC5414DE243e3F9810Eb28F85e5d9ABb 7973 B verified. TimelockController 0x055a4f9583790e929a309cb0146280b1589a46fe 5448 B verified; getMinDelay() reverted. Range runner 0x2Bd61C3364e3D8dD7454cC5f1C47324fc2ACE35d code 0 B (CON-1). Creator 0xC8720447712e6C4c851B3884b4Ec93F9cE8aD5fD code 0 B. Sluice token 0xb48d34dd8b53324cb8525461c8e548522db885ec 3248 B name Sluice / SLUICE (not packed). Steakhouse USDG 0xBeEff033F34C046626B8D0A041844C5d1A5409dd and USDG 0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168 read as third-party, not listed as Twofold deployments. PoolManager 0x8366a39c…0951 code 24009 B, Uniswap not Twofold-owned.
- Candidate proposed: twofold | Twofold | @twofoldfi | twofold.fi (coverage candidate; this file is inventory only).
- Rate limits: Blockscout api/v2 Cloudflare on later curl; X status fetch 404. Stop after this packet.
