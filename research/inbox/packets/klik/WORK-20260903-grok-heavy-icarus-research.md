---
# Packet v2 (docs/research-system.md §5). Discovery seed; not a census row.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: klik
name: Klik
packet_tier: seed
as_of: 2026-09-03T04:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [klik]
allowed_paths:
  - research/inbox/packets/klik/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Klik
  aliases: [KLIK, "Klik Finance"]
  symbols: [KLIK]
  entity_kind: protocol
  chain_scope: multichain
  official_domain: https://klik.finance
  official_handle: "@klik_evm"
  repository: "NULL — klik.finance and /docs HTML have no repository URL this pass; GitHub user klikfinance blog is klik.finance and has repo klikfinance/klik (README-only, last push 2026-02-02)"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is a bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "Klik is a Uniswap V4 factory at klik.finance / @klik_evm with RH factory 0x16cF6788B762EE8969744586eD16fc5705140dd7"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired token factory at @longdotxyz"
        - "Klik is a Uniswap V4 hook pad; docs factory table does not name a stock-pair path"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/hook-programmable
  secondary_leaves: []
  mechanism_tags: [launchpad, amm]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Docs name Robinhood Chain factory 0x16cF6788…0dd7. RPC on 4663 returned 22343-byte code, tokenCount() 5923, platformController() 0x81EE…da5a, klikHook() 0x745d…e0CC. Blockscout name Factory, file Factory_whook.sol, is_verified true, not a proxy. deployCoin still lands on 2026-09-03. Distinct from census Pons and LONG. Not a census row. [R-2] [R-10] [R-11] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-5, CLM-6, CLM-23], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-5], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-8, CLM-10, CLM-12], note: "" }

links:
  - { kind: site, url: "https://klik.finance", authenticity: unconfirmed }
  - { kind: app, url: "https://klik.finance", authenticity: unconfirmed }
  - { kind: docs, url: "https://klik.finance/docs", authenticity: confirmed }
  - { kind: x, url: "https://x.com/klik_evm", authenticity: unconfirmed }
  - { kind: github, url: "https://github.com/klikfinance/klik", authenticity: unconfirmed }
  - { kind: other, url: "https://klik.finance/hook-labs", authenticity: unconfirmed }

deployments:
  - label: Robinhood Chain factory
    role: factory
    address:
      value: "0x16cF6788B762EE8969744586eD16fc5705140dd7"
      chain: robinhood-chain
      source: docs
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-10, R-11, R-12]
  - label: UniversalKlikHook
    role: other
    address:
      value: "0x745d717620052a97a22dEEE2e5Eba59583f3e0CC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-12, R-13, R-14]
  - label: platformController()
    role: admin
    address:
      value: "0x81EE2B6BcfcF9a614036578e5E4f2B02e507da5a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-10, R-11, R-14, R-23]

metrics: []

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:26:00Z, receipt_ids: [R-10, R-11, R-12], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237. eth_blockNumber 0x32abda7 (53132711). Factory 0x16cF6788…0dd7 eth_getCode 22343 bytes prefix 0x6080604052600436; nonce 0x1724 (5924); balance 0. ERC1967 implementation slot zero. owner() reverts. tokenCount() 5923. platformController() 0x81ee2b6bcfcf9a614036578e5e4f2b02e507da5a. klikHook() 0x745d717620052a97a22deee2e5eba59583f3e0cc. deployCoinEnabled() 1. launchPeriod() 5. liquidityConfigCount() 5. Blockscout api/v2 name Factory is_verified true is_fully_verified true proxy_type null file_path Factory_whook.sol." }
  - { id: REP-2, method: official-crosslink, checked_at: 2026-09-03T04:30:00Z, receipt_ids: [R-1, R-4], result: "@klik_evm bio The launchpad for EVM chains: create tokens and trade any pair with low fees! $1B+ volume since 2025; website klik.finance; display name KLIK; joined June 2025; followers 11133. klik.finance title Klik Finance; og:title Klik Finance; twitter:card summary; no twitter:site or twitter:creator in the HTML this pass." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:26:00Z, receipt_ids: [R-13, R-14, R-20], result: "Hook 0x745d7176…e0CC eth_getCode 9130 bytes. Controller 0x81EE…da5a eth_getCode 0x; nonce 1959. Blockscout hook name UniversalKlikHook is_verified true is_fully_verified false file_path src/hook.sol creator 0x37063519…a1B0. tokenInfoByAddress(0x6989a821…3ca8) returns that address; tokenHook() 0x745d7176…e0CC. Latest deployedTokens(5922) 0x39496347…1F5C CYBER at 2026-09-03T04:13:47Z." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:26:00Z, receipt_ids: [R-16], result: "api.dexscreener.com/latest/dex/search?q=klik HTTP 200; robinhood uniswap pairs include 0x6989a821…3ca8 KLIK/ETH pair 0x31b0f07b…a49bb labels v4 liq 3496.16 vol h24 1370.46 pairCreatedAt 2026-07-13T20:40:59Z. Factory address search returned 0 pairs. tokens/0x39496347…1F5C (latest factory mint) returned 0 pairs." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "One payable deployCoin call creates an ERC-20 and a Uniswap V4 pool with UniversalKlikHook. Docs: no seed rounds, no VCs, no presales; liquidity locked in the pool; vanity prefix 69 on Ethereum and Robinhood Chain via CREATE2. Normal launches use a dynamic fee ladder; Hook Labs is a separate Ethereum factory.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-2, R-3, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://klik.finance", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@klik_evm", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-4, field: identity.name, value: "Klik", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-1, R-2, R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x16cF6788B762EE8969744586eD16fc5705140dd7", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-2, R-10, R-11, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-2, R-10, R-11], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/hook-programmable, class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-2, R-12, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: control.owner, value: "0x81EE2B6BcfcF9a614036578e5E4f2B02e507da5a", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-10, R-12, R-14], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-9, field: control.privileged-role, value: "Verified Factory_whook.sol: platformController is set to msg.sender in the constructor. setKlikHook, setLaunchPeriod, toggleDeployCoin, withdrawFeesETH, and withdrawFeesWETH require msg.sender == platformController. changeTokenFeeReceiver allows the controller or the token creator.", class: verified, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-10, field: activity.status, value: "tokenCount() 5923 on 2026-09-03T04:26Z. Blockscout latest inbound txs include deployCoin at 2026-09-03T04:13:47Z. First deployedTokens(0) 0x6966aa52…0f6d HOOD at 2026-07-08T05:14:33Z.", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-10, R-15], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-11, field: identity.symbol, value: "KLIK", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-12, field: taxonomy.chain-scope, value: multichain, class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-2, R-5, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-13, field: relationship, value: "Distinct from census Pons (ponsfamily.com / @ponsdotfamily) and LONG (@longdotxyz). No shared domain, handle, or reproduced address.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-2, R-4, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-14, field: relationship, value: "Distinct from packed pads Varo (varo.rialto.xyz / @launchonvaro), Coinbarrel (coinbarrel.com / @UseCoinbarrel), and LetsCash (letscash.fun / @letscashfun). Klik RH factory 0x16cF6788…0dd7 is not those launchers.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-2, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-15, field: relationship, value: "Distinct from in-flight circus.trade / @circus_trade, sentry.trading / @sentrylauncher, and docs.bags.fm. No shared domain, handle, or reproduced address this pass.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-2, R-4, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-16, field: "account.@klik_evm.official", value: "Handle website field names klik.finance. klik.finance HTML has no twitter:site this pass. Flag unconfirmed-official.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-1, R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-17, field: "account.@klik_evm.slug", value: klik, class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: "account.@klik_evm.role", value: project, class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-4], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "@klik_evm posted on 2026-09-03 that every swap on every token on every chain feeds $KLIK, and that Arc, Tempo, Base stock pairs, and Robinhood stock pairs are live.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-5], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: identity.repository, value: "NULL — klik.finance and /docs HTML have no repository URL; GitHub user klikfinance blog is klik.finance; repo klikfinance/klik is README-only with last push 2026-02-02", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-2, R-17, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: identity.alias, value: "Klik Finance", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: other, value: "Docs place the platform token KLIK at 0x5886e4d8d6a41a5ea2f3f77f23d7a7e942d581f1 on Ethereum mainnet 1. That mint is not a Robinhood Chain deployment. Flag wrong-chain.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: deployment.address, value: "0x745d717620052a97a22dEEE2e5Eba59583f3e0CC", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-10, R-12, R-13, R-14], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-24, field: control.timelock, value: "No timelock contract is named. platformController() is EOA 0x81EE…da5a with no code. owner() on the factory reverts. Factory is not an ERC1967 proxy.", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-10, R-11, R-14], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-25, field: security.audit, value: "No audit report URL was located on klik.finance, klik.finance/docs, or the @klik_evm profile this pass; docs mention audits only as an operational cost funded by platform fees", class: unknown, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: product.mechanism, value: "Docs: Hook Labs launches run on a second Ethereum factory 0xDfb7fe5E4Ea0504AfeE387C42Bb86e5860D29e8A. The Robinhood row in the factory table is the normal factory only. Hook Labs fee split is five-way and does not use the Normal ladder.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-2, R-8, R-22], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: communications.status, value: "@klik_evm posted on 2026-07-15 that KLIK remains fully operational on Robinhood Chain.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-6], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: activity.status, value: "DexScreener robinhood uniswap v4 pair for factory token 0x6989a821…3ca8 (KLIK/ETH) liq 3496.16 USD, volume h24 1370.46, pairCreatedAt 2026-07-13T20:40:59Z. tokenHook() on that token is UniversalKlikHook.", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-16, R-20], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-29, field: other, value: "GitHub klikfinance/klik README names Token (Base) 0x690Fe5Ff3685270CEFFC87C29699e4E494B93031 and Token (Ethereum) TBA. Docs name Ethereum KLIK 0x5886e4d8…81f1. Do not treat the README mint as the live platform token.", class: claim, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-3, R-17, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: product.mechanism, value: "Normal-launch swap fee starts at 1.00% (0.60% platform / 0.40% creator) below 15 ETH market cap and falls to 0.10% at or above 6000 ETH. Hook Labs tokens do not use that ladder.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-3], reproduction_ids: [], supersedes: null }
  - { id: CLM-31, field: control.proxy, value: "RH factory is not a proxy: Blockscout proxy_type null, ERC1967 slot zero, 22343-byte runtime code, file Factory_whook.sol fully verified.", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-10, R-11, R-12], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-32, field: communications.status, value: "@klik_evm posted on 2026-07-14 that the first Robinhood trenches stimmy was live: 58464 going back to 16512 traders, claim at klik.finance/leaderboard.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: communications.status, value: "@klik_evm posted on 2026-07-26 that klik is live on Arc Network and every launch lands in a Uniswap v4 pool.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-34, field: other, value: "DexScreener robinhood search for klik returns several 0x69… tokens named KLIK. 0x6989a821…3ca8 is a factory output with tokenHook UniversalKlikHook, not the Ethereum platform token 0x5886e4d8…81f1.", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-3, R-16, R-20], reproduction_ids: [REP-3, REP-4], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "RPC: RH factory has code, tokenCount 5923, and matching klikHook"
    summary: "Factory 0x16cF6788…0dd7 on chain 4663 has 22343-byte verified Factory_whook.sol, tokenCount() 5923, platformController 0x81EE…da5a, and klikHook 0x745d…e0CC. deployCoin still succeeded at 2026-09-03T04:13:47Z."
    occurred_at: 2026-09-03T04:13:47Z
    observed_at: 2026-09-03T04:26:00Z
    affected_fields: [deployment.address, control.owner, lifecycle, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10, R-11, R-15]
  - id: EVT-2
    type: company
    title: "@klik_evm posts that fees now feed $KLIK and Robinhood stock pairs are live"
    summary: "On 2026-09-03 the handle posted that every swap on every token on every chain feeds $KLIK, with Arc, Tempo, Base stock pairs, and Robinhood stock pairs listed as live. Docs factory table does not name a stock-pair path this pass."
    occurred_at: 2026-09-03T00:22:57Z
    observed_at: 2026-09-03T04:30:00Z
    affected_fields: [communications.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-3
    type: company
    title: "@klik_evm posts KLIK remains fully operational on Robinhood Chain"
    summary: "On 2026-07-15 the handle posted that KLIK remains fully operational on Robinhood Chain and that launches can still go through it."
    occurred_at: 2026-07-15T19:31:05Z
    observed_at: 2026-09-03T04:30:00Z
    affected_fields: [communications.status, lifecycle]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-4
    type: company
    title: "@klik_evm posts first Robinhood trenches stimmy live"
    summary: "On 2026-07-14 the handle posted that 58464 was going back to 16512 traders, 100% of platform fees collected on Robinhood Chain, claim at klik.finance/leaderboard."
    occurred_at: 2026-07-14T19:30:16Z
    observed_at: 2026-09-03T04:30:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-5
    type: onchain
    title: "Factory created on Robinhood Chain"
    summary: "Blockscout creation_transaction_hash 0x0c906b44…216e at 2026-07-08T05:03:34Z from 0x81EE…da5a, the same address later returned by platformController()."
    occurred_at: 2026-07-08T05:03:34Z
    observed_at: 2026-09-03T04:26:00Z
    affected_fields: [deployment.address, control.owner, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-11, R-23]

receipts:
  - { id: R-1, publisher: Klik, title: "klik.finance home", url: "https://klik.finance/", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-2, CLM-4, CLM-13, CLM-16, CLM-20, CLM-21], excerpt: "title Klik Finance. meta description: Trade, Buy, Sell and Explore Trending Tokens on Ethereum and Base. Launch tokens instantly with no presale. og:title Klik Finance. twitter:card summary. No twitter:site. Nav: Home, X, Tracker, Hook Labs, Bridge, FAQ, Airdrop, CTO, Profile, Docs." }
  - { id: R-2, publisher: Klik, title: "Developer Docs — What is Klik / Factory Contracts", url: "https://klik.finance/docs", published_at: 2026-09-03T00:00:00Z, accessed_at: 2026-09-03T04:25:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-7, CLM-12, CLM-13, CLM-14, CLM-15, CLM-20, CLM-26], excerpt: "Last Updated: September 3, 2026. Klik is a permissionless token launchpad on Ethereum mainnet, Base, Robinhood Chain and Arc. Robinhood Chain 4663 factory 0x16cF6788B762EE8969744586eD16fc5705140dd7. Ethereum 1 0x254Bf550…266ad. Base 8453 0xC7A3b937…D03011. Arc 5042 0x7E5AEACF…Aa2217C." }
  - { id: R-3, publisher: Klik, title: "Developer Docs — The KLIK Token / Fee Schedule", url: "https://klik.finance/docs", published_at: 2026-09-03T00:00:00Z, accessed_at: 2026-09-03T04:25:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-11, CLM-22, CLM-29, CLM-30, CLM-34], excerpt: "KLIK token 0x5886e4d8d6a41a5ea2f3f77f23d7a7e942d581f1 on Ethereum mainnet 1. Treasury 0xe6b2a647f636109e66d2942473d9bb5fb86278cc (Safe, 2-of-3). Normal fee 1.00% below 15 ETH mcap, 0.10% at >= 6000 ETH. Revenue funds buybacks/burns of KLIK and operational costs including audits." }
  - { id: R-4, publisher: "@klik_evm", title: "KLIK profile", url: "https://x.com/klik_evm", published_at: null, accessed_at: 2026-09-03T04:30:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-13, CLM-15, CLM-16, CLM-17, CLM-18], excerpt: "Display name KLIK. Handle @klik_evm. Bio: The launchpad for EVM chains: create tokens and trade any pair with low fees! $1B+ volume since 2025. Location EVM. Website klik.finance. Joined June 2025. Followers 11133. 1471 posts." }
  - { id: R-5, publisher: "@klik_evm", title: "fees work differently now", url: "https://x.com/klik_evm/status/2095306517339578711", published_at: 2026-09-03T00:22:57Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-12, CLM-19, EVT-2], excerpt: "fees work differently now. every swap. every token. every chain. all of it feeds $KLIK. https://klik.finance/docs#token Arc & tempo: live. base stock pairs: live. robinhood stock pairs: live. one klik is all it takes." }
  - { id: R-6, publisher: "@klik_evm", title: "KLIK remains fully operational on robinhood chain", url: "https://x.com/klik_evm/status/2077476060484997564", published_at: 2026-07-15T19:31:05Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, EVT-3], excerpt: "one thing hasn’t changed: KLIK remains fully operational on robinhood chain. if you want to launch with us, you still can. KLIK continues to offer one of the cleanest launch experiences on the chain, built on the latest infrastructure instead of yesterday’s standards." }
  - { id: R-7, publisher: "@klik_evm", title: "THE FIRST ROBINHOOD TRENCHES STIMMY IS LIVE", url: "https://x.com/klik_evm/status/2077113468499480805", published_at: 2026-07-14T19:30:16Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-32, EVT-4], excerpt: "THE FIRST ROBINHOOD TRENCHES STIMMY IS LIVE $58,464 going back to 16,512 traders 100% of platform fees collected on @RobinhoodCrypto Chain, all of it. returned to the people who generated it claim now → https://klik.finance/leaderboard" }
  - { id: R-8, publisher: "@klik_evm", title: "Hook Labs is live on KLIK", url: "https://x.com/klik_evm/status/2084402137438593410", published_at: 2026-08-03T22:12:50Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26], excerpt: "we've been using @Uniswap v4 at its simplest for a year. today we use all of it. Hook Labs is live on KLIK. build your own hook, launch tokens on it, earn from every one. 0/0 tax if that's your play. dynamic tax that climbs when the market heats up. antisnipe at launch. holder rewards paid in ETH." }
  - { id: R-9, publisher: "@klik_evm", title: "klik is live on Arc Network", url: "https://x.com/klik_evm/status/2081370679102898548", published_at: 2026-07-26T13:26:54Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-12, CLM-33], excerpt: "klik is live on Arc Network deploy and trade on Arc every launch lands straight in a Uniswap v4 pool https://klik.finance/" }
  - { id: R-10, publisher: Robinhood Chain RPC, title: "eth_getCode / tokenCount / platformController / klikHook", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-8, CLM-10, CLM-23, CLM-24, CLM-31, EVT-1], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32abda7 (53132711). 0x16cF6788…0dd7 code 22343 B nonce 5924 bal 0. ERC1967 slot 0x0. owner() revert. tokenCount() 5923. platformController() 0x81ee2b6b…da5a. klikHook() 0x745d7176…e0cc. deployCoinEnabled() 1. POOL_MANAGER 0x8366a39c…0951. WETH 0x0bd7d308…ad73." }
  - { id: R-11, publisher: Blockscout, title: "Address 0x16cF6788B762EE8969744586eD16fc5705140dd7", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x16cF6788B762EE8969744586eD16fc5705140dd7", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-6, CLM-13, CLM-14, CLM-15, CLM-24, CLM-31, EVT-1, EVT-5], excerpt: "name Factory is_contract true is_verified true proxy_type null implementations []. creator_address_hash 0x81EE2B6BcfcF9a614036578e5E4f2B02e507da5a. creation_transaction_hash 0x0c906b44d365ab941800897a4650988570a85ac3638e6ea48703d7dcc830216e. counters transactions_count 9348." }
  - { id: R-12, publisher: Blockscout, title: "Smart contract Factory_whook.sol", url: "https://robinhoodchain.blockscout.com/api/v2/smart-contracts/0x16cF6788B762EE8969744586eD16fc5705140dd7", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-7, CLM-8, CLM-9, CLM-23, CLM-31], excerpt: "name Factory file_path Factory_whook.sol compiler v0.8.35+commit.47b9dedd is_verified true is_fully_verified true is_changed_bytecode false. ABI includes deployCoin, tokenCount, platformController, klikHook, setKlikHook, toggleDeployCoin, withdrawFeesETH. constructor_args klikHook 0x745d7176…e0cc." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x745d717620052a97a22dEEE2e5Eba59583f3e0CC", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x745d717620052a97a22dEEE2e5Eba59583f3e0CC", published_at: null, accessed_at: 2026-09-03T04:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-7, CLM-23], excerpt: "name UniversalKlikHook is_contract true is_verified true proxy_type null. creator_address_hash 0x370635199596e0BC64B058120CE7161aDFbDA1B0. creation_transaction_hash 0x3b83185af1dfe6a186be01aef09922b17dadf32070183f1bd5a883d22992f8c0. smart-contract file_path src/hook.sol is_fully_verified false." }
  - { id: R-14, publisher: Robinhood Chain RPC, title: "eth_getCode hook and platformController", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, CLM-23, CLM-24], excerpt: "0x745d7176…e0CC eth_getCode 9130 bytes prefix 0x6080604052600436. 0x81EE…da5a eth_getCode 0x nonce 1959." }
  - { id: R-15, publisher: Blockscout, title: "Factory inbound transactions", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x16cF6788B762EE8969744586eD16fc5705140dd7/transactions?filter=to", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-10, EVT-1], excerpt: "Latest to-factory txs: deployCoin 2026-09-03T04:13:47Z from 0xF63cCbE4…4B8F status ok; deployCoin 04:02:10Z same from; deployCoin 03:26:44Z; collectFees 01:52:35Z; deployCoin 01:00:26Z. Token transfers at 04:13:47Z mint Cybercabs Everywhere CYBER 0x39496347…1F5C." }
  - { id: R-16, publisher: DexScreener, title: "KLIK/ETH robinhood pair for 0x6989a821…3ca8", url: "https://api.dexscreener.com/latest/dex/tokens/0x6989a8217359aC1C7AA9b651Cb67f226C2fd3ca8", published_at: null, accessed_at: 2026-09-03T04:26:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-28, CLM-34], excerpt: "chainId robinhood dexId uniswap labels [v4] pairAddress 0x31b0f07bab73814ba35789f51b2d14a60d57791ca2133cedd55d25f92c3a49bb base KLIK 0x6989a8217359aC1C7AA9b651Cb67f226C2fd3ca8 quote ETH liq.usd 3496.16 volume.h24 1370.46 pairCreatedAt 1783975259000 (2026-07-13T20:40:59Z). websites []. socials []." }
  - { id: R-17, publisher: GitHub, title: "users/klikfinance", url: "https://api.github.com/users/klikfinance", published_at: null, accessed_at: 2026-09-03T04:26:00Z, kind: repository, authority: independent, authenticity: confirmed, supports: [CLM-20, CLM-29], excerpt: "login klikfinance html_url https://github.com/klikfinance name Klik blog https://klik.finance public_repos 1 created_at 2026-02-01T17:42:00Z. Repo klikfinance/klik created 2026-02-02T22:10:29Z pushed_at 2026-02-02T22:15:10Z homepage null description null contents README.md only." }
  - { id: R-18, publisher: GitHub, title: "klikfinance/klik README", url: "https://raw.githubusercontent.com/klikfinance/klik/main/README.md", published_at: 2026-02-02T22:15:10Z, accessed_at: 2026-09-03T04:26:00Z, kind: repository, authority: independent, authenticity: unconfirmed, supports: [CLM-20, CLM-29], excerpt: "Token (Base) 0x690Fe5Ff3685270CEFFC87C29699e4E494B93031 Token (Ethereum) TBA" }
  - { id: R-20, publisher: Robinhood Chain RPC, title: "tokenInfoByAddress / tokenHook 0x6989a821…3ca8", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-28, CLM-34], excerpt: "tokenInfoByAddress(0x6989a8217359aC1C7AA9b651Cb67f226C2fd3ca8) returns that address (non-empty ABI tuple). tokenHook(0x6989a821…3ca8) 0x745d717620052a97a22deee2e5eba59583f3e0cc. Factory deployedTokens(0) 0x6966aa526a2a3e9e9e25c034c6c411474eab0f6d HOOD." }
  - { id: R-22, publisher: Klik, title: "Developer Docs — Hook Labs contracts (Ethereum)", url: "https://klik.finance/docs", published_at: 2026-09-03T00:00:00Z, accessed_at: 2026-09-03T04:25:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-26], excerpt: "Hook Labs contracts (Ethereum). Hook Labs launches run on a second factory. KlikFactory 0xDfb7fe5E4Ea0504AfeE387C42Bb86e5860D29e8A deployCoinWithHook. KlikHookFactory 0xDF78EDCcc9a038EA34a0423d9225579dD9722cD0. Shared klik hook 0xB8D9477eB6eF5F0df5219Cf0c8130DD7e520e0CC. ConfigurableKlikHook 0xA5788fC80A709c1931299c7559a5D31ee1a7a3Dc." }
  - { id: R-23, publisher: Blockscout, title: "Factory creation transaction", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x0c906b44d365ab941800897a4650988570a85ac3638e6ea48703d7dcc830216e", published_at: 2026-07-08T05:03:34Z, accessed_at: 2026-09-03T04:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-8, EVT-5], excerpt: "hash 0x0c906b44d365ab941800897a4650988570a85ac3638e6ea48703d7dcc830216e timestamp 2026-07-08T05:03:34Z status ok from 0x81EE2B6BcfcF9a614036578e5E4f2B02e507da5a created_contract 0x16cF6788B762EE8969744586eD16fc5705140dd7 name Factory." }

gaps:
  - { priority: P0, question: "Does the Robinhood factory expose a stock-token quote path that matches the 2026-09-03 @klik_evm post, or is that path only on Base?", checked: "klik.finance/docs factory table and fee schedule name ETH (and Arc USDC) thresholds; HTML search for stock/tempo returned 0 hits, 2026-09-03", next: "read liquidityConfigs and deployCoin quote asset on 4663; do not file stock-paired as a leaf until a stock token appears in a factory pool" }
  - { priority: P0, question: "Who holds the Ethereum Safe 0xe6b2a647…78cc, and is platformController 0x81EE…da5a the same key on other chains?", checked: "docs name the Safe 2-of-3 as KLIK treasury on Ethereum; RH platformController is an EOA with no code, 2026-09-03", next: "eth_call platformController on Ethereum factory 0x254Bf550…266ad and compare" }
  - { priority: P1, question: "Is there an audit report whose scope matches Factory_whook.sol 0x16cF6788…0dd7 and UniversalKlikHook 0x745d…e0CC?", checked: "docs mention audits only as an operational cost; site HTML and @klik_evm have no report URL, 2026-09-03", next: "record any published report as a claim with the exact scope" }
  - { priority: P1, question: "What is tokenCount on a 30-day window versus Emerson's 361 figure, and does Emerson still count this factory?", checked: "RPC tokenCount() 5923 all-time; HARVEST Emerson 30d 361 / $309k was not reproduced this pass; Gecko first GET /networks/robinhood HTTP 404 so Gecko was skipped", next: "open dune.com/0x_emerson/robinhood-memecoin-launchpads-comparison-30d and copy the Klik row with as-of time" }
  - { priority: P2, question: "Which GitHub commit, if any, matches Factory_whook.sol on Blockscout?", checked: "klik.finance HTML has no github URL; klikfinance/klik is README-only last push 2026-02-02 naming a Base mint and Ethereum TBA, 2026-09-03", next: "do not treat klikfinance/klik as the live contract source; record a source mirror if one appears" }
  - { priority: P2, question: "Are Tempo and Hook Labs live on chain 4663, or only on Ethereum / Arc as the docs table states?", checked: "docs Hook Labs contracts (Ethereum) only; 30 Aug post claims 200 deploys using hook labs without a chain; RH factory ABI is deployCoin not deployCoinWithHook, 2026-09-03", next: "do not use the Ethereum Hook Labs factory addresses on Robinhood Chain" }
---

# Klik — research packet

## What it is

Klik is a permissionless token launchpad. Docs: Ethereum, Base, Robinhood Chain, and Arc. A launch is one `deployCoin` transaction into a Uniswap V4 pool with a Klik hook; there is no presale. Robinhood Chain factory 0x16cF6788…0dd7 is verified as Factory_whook.sol. The handle is @klik_evm; the site is klik.finance.

Themes: launchpad

## Why it matters

The RH factory is still taking `deployCoin` calls on 2026-09-03, with `tokenCount()` 5923. That is a live Uni v4 hook pad on this chain, not a bonding-curve name. Llama has no protocol/klik row this pass. The pad is not a census row. [claim R-2 R-10 R-15]

## What could go wrong

`platformController()` is one externally owned account with no code. Verified source lets that address swap the hook, pause `deployCoin`, and withdraw ETH/WETH fees. There is no timelock. Docs put Hook Labs on a second Ethereum factory; an integrator that posts `deployCoinWithHook` to 0x16cF…0dd7 is on the wrong chain. [verified R-10 R-12] [claim R-22]

## Product and mechanics

Docs: one transaction deploys an ERC-20 with bootstrapped Uniswap V4 liquidity, vanity prefix 69 on Ethereum and Robinhood Chain (CREATE2), liquidity locked in the pool. Normal launches use a market-cap fee ladder from 1.00% down to 0.10%. Hook Labs is a separate Ethereum factory with a five-way fee split that does not use that ladder. [claim R-2 R-3 R-22]

The 3 Sep handle post lists Robinhood stock pairs as live. Docs HTML this pass does not name a stock quote path. [claim R-5]

## Control and security

`platformController()` returns 0x81EE2B6BcfcF9a614036578e5E4f2B02e507da5a. That address has no code and is also the Blockscout creator. `owner()` reverts. The factory is not an ERC1967 proxy (slot zero; Blockscout `proxy_type` null). `klikHook()` is UniversalKlikHook 0x745d7176…e0CC, verified. No timelock address was located. [verified R-10 R-11 R-13]

## Team and provenance

@klik_evm names klik.finance in the website field. klik.finance HTML does not name the handle (no twitter:site). GitHub user klikfinance blog is klik.finance; the repo is a February README and is not the live RH source. Flag unconfirmed-official. [claim R-1 R-4 R-17 R-18]

## Economics and activity

RPC `tokenCount()` 5923 at 2026-09-03T04:26Z. Latest factory mint this pass is CYBER 0x39496347…1F5C at 04:13:47Z. DexScreener has a robinhood Uniswap v4 pair for factory token 0x6989a821…3ca8 (KLIK/ETH) with 3496.16 USD liquidity and 1370.46 24h volume; that token's `tokenHook()` is UniversalKlikHook. Emerson's 30d 361-token print was not reproduced this pass. api.llama.fi/protocol/klik returned 400. [verified R-10 R-16 R-20] [claim R-15]

## Material risks

- platformController is one EOA with hook-swap, pause, and fee-withdraw. [verified R-10 R-12]
- Hook implementation is verified but `is_fully_verified` false. [verified R-13]
- Ethereum platform token 0x5886e4d8…81f1 is not on chain 4663; several RH tokens are also named KLIK. [verified R-16 R-20] [claim R-3]
- No audit report URL. [unknown]
- 3 Sep stock-pair claim is not in the docs factory table this pass. [claim R-5]
- GitHub README mints do not match docs. [claim R-18]

## Verification passes

- Receipts: klik.finance, /docs, X profile and Latest posts, GitHub user/repo/README, Blockscout api/v2, and RPC were opened on 2026-09-03; excerpts copied from those responses. [verified R-1 R-2 R-10 R-11]
- Numbers: `tokenCount` 5923, bytecode lengths, nonce, and `platformController()` are chain 4663 RPC. DexScreener liq/volume are one robinhood v4 pair, not pad TVL. Factory search of 0x16cF…0dd7 returned 0 pairs. [verified R-10 R-16]
- Adversarial: strongest contrary reading is that 0x16cF…0dd7 is a leftover factory and new launches use a Hook Labs address, or that the team left Robinhood Chain. Docs set the Robinhood row to this address; RPC `deployCoinEnabled()` is true and `deployCoin` landed on 2026-09-03. The 15 Jul post says the pad remains operational on this chain. Pons and LONG are different products. [inference R-2 R-6 R-10 R-15]

## Operations log

- Census.yaml has no klik row; no content/projects/klik.yaml. Discovery inventory names the slug with @klik_evm, klik.finance, and factory 0x16cF…0dd7.
- klik.finance and klik.finance/docs opened 2026-09-03. Site SSR stats printed $0 (client-rendered). Docs last updated September 3, 2026.
- X Latest from:klik_evm: profile (website klik.finance), 3 Sep $KLIK/stock-pairs post, 30 Aug Hook Labs 200 deploys, 3 Aug Hook Labs live, 26 Jul Arc live, 15 Jul remains operational, 14 Jul stimmy, 13 Jul airdrop quote.
- RPC https://rpc.mainnet.chain.robinhood.com with Chrome User-Agent: eth_chainId, eth_blockNumber, eth_getCode, eth_getTransactionCount, eth_getBalance, ERC1967 slot, tokenCount, platformController, klikHook, deployCoinEnabled, POOL_MANAGER, POSITION_MANAGER, WETH, UNIVERSAL_ROUTER, STATE_VIEW, launchPeriod, liquidityConfigCount, owner, deployedTokens, tokenInfoByAddress, tokenHook.
- Blockscout api/v2 with Chrome User-Agent for factory, factory source, factory txs, hook, creator, creation tx.
- DexScreener used because a robinhood pair exists: search q=klik (9 robinhood uniswap rows), tokens/0x6989a821…3ca8, factory-address search 0 pairs, latest mint 0x39496347…1F5C 0 pairs.
- Gecko first GET https://api.geckoterminal.com/api/v2/networks/robinhood HTTP 404; skipped.
- api.llama.fi/protocol/klik HTTP 400 Protocol not found.
- api.github.com/orgs/klik 404; users/klik is an unrelated 2015 account (klik.io); users/klikfinance blog klik.finance.
- Emerson Dune 30d 361 tokens was not opened this pass; RPC all-time tokenCount is 5923.
