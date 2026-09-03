---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: hmm
name: HMM
packet_tier: seed
as_of: 2026-09-03T04:26:00Z
prior_packet: null
supersedes: null
owned_slugs: [hmm]
allowed_paths:
  - research/inbox/packets/hmm/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: HMM
  aliases: ["Thinking Cat"]
  symbols: [HMM]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://hmmmm.fun
  official_handle: "@thinkingcatRH"
  repository: "NULL — no GitHub org or repository URL on hmmmm.fun, DexScreener, Gecko, Blockscout, or the @thinkingcatRH profile this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily with v1 factory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB"
        - "HMM is PonsLauncherToken 0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f created by that factory; entity_kind token, not protocol"
        - "No shared domain or handle; hmmmm.fun and @thinkingcatRH do not operate the pad"
    - slug: wire
      signals: [other]
      contrary_signals:
        - "Census Wire is the agent execution layer at @wirebotRH; @gornx0x posted the 2026-07-19 test launch command through that bot"
        - "HMM is the ERC-20 at 0x7FE9…D87f; hmmmm.fun still links wirebot.trade as a buy path, which is not a shared domain or handle"
        - "No shared official handle or reproduced Wire factory address this pass"
    - slug: squeeze
      signals: [other]
      contrary_signals:
        - "Census Squeeze is a scanner at @UseSqueeze_RH; its tape listed HMM as a market and reused Pons factory 0xA5aA…1feB as contracts.factory"
        - "That factory is Blockscout-named PonsLaunchFactory, not a Squeeze deployment"
        - "No shared domain, handle, or HMM token address owned by Squeeze"
classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [amm]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the census. Token 0x7FE9…D87f is verified PonsLauncherToken with non-empty code on 4663; launchFactory() returns PonsLaunchFactory 0xA5aA…1feB; liquidityPool() is Uniswap v3 HMM/WETH 1% 0x2b0D…0E9e. hmmmm.fun and @thinkingcatRH bidirectionally publish the CA. Distinct from Pons, Wire, Squeeze, and CASHCAT. [R-1] [R-5] [R-6] [R-7] [R-10] [R-11]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://hmmmm.fun", authenticity: confirmed }
  - { kind: x, url: "https://x.com/thinkingcatRH", authenticity: confirmed }
  - { kind: other, url: "https://x.com/i/communities/2039350183981699140", authenticity: confirmed }
  - { kind: app, url: "https://ponsfamily.com/launchpad/0x7fe995a80075df3dc8ae11a9b82c7fe4202cd87f", authenticity: unconfirmed }

deployments:
  - label: HMM token (PonsLauncherToken)
    role: token
    address:
      value: "0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: PonsLaunchFactory (token launchFactory / creator)
    role: factory
    address:
      value: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-6]
  - label: Uniswap v3 HMM/WETH 1% pool (liquidityPool)
    role: other
    address:
      value: "0x2b0D0183d017c58B924401cA8AC362f6E01F0E9e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-14, R-15]
  - label: PonsLaunchLocker (LP NFT 223724 recipient)
    role: other
    address:
      value: "0x736D76699C26D0d966744cAe304C000d471f7F35"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:24:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-6, R-14]
  - label: launchToken deployer (TokenLaunched deployer / fee wallet)
    role: other
    address:
      value: "0x934e92E1C82020fc4e1Ee55712C6d9fb19C6782a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:24:00Z
      exists_on_4663: true
      explorer_source_verified: null
    receipt_ids: [R-4, R-6, R-14]

metrics:
  - { kind: volume_24h, value: 2314392.69, currency: USD, as_of: 2026-09-03T04:24:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2b0d0183d017c58b924401ca8ac362f6e01f0e9e volume_usd.h24 (HMM/WETH 1% book, not Gecko token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 689642.48, currency: USD, as_of: 2026-09-03T04:24:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2b0d0183d017c58b924401ca8ac362f6e01f0e9e reserve_in_usd (HMM/WETH 1% book, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 21381671.07, currency: USD, as_of: 2026-09-03T04:24:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2b0d0183d017c58b924401ca8ac362f6e01f0e9e fdv_usd (market_cap_usd 21647795.31)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 14666, currency: null, as_of: 2026-09-03T04:23:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-6], result: "eth_blockNumber 0x32abce3 (53132515) then 0x32abfbb (53133243) then 0x32ac581 (53134721). Token 0x7FE9…D87f eth_getCode 5274 B prefix 60806040 (not EIP-1167). name Thinking Cat, symbol HMM, decimals 18, totalSupply 1e27. factory() and owner() revert. launchFactory() 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB. liquidityPool() 0x2b0D0183d017c58B924401cA8AC362f6E01F0E9e. pairToken() WETH 0x0Bd7…AD73. deployer() 0x934e92…782a. poolFee 10000. maxTxBps 550 maxWalletBps 500. launchBlock 25565387 restrictionEndBlock 25565389. socials twitter https://x.com/i/web/status/2078750090878193715. Factory code 24353 B. Deployer code 23 B EIP-7702 0xef0100 + 0x7f876F2b5056724f7Ee5D54F2Bc379a51e137775. Locker code 5426 B. Pool code 22142 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:23:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-14, R-15], result: "Blockscout api/v2 token 0x7FE9…D87f name Thinking Cat symbol HMM holders_count 14666 total_supply 1e27 type ERC-20. Address name PonsLauncherToken is_verified true proxy_type null. Smart-contract compiler v0.8.30+commit.73712a01 file_path contracts/src/PonsLauncherToken.sol is_partially_verified false verified_at 2026-07-19T16:33:58Z. Creator 0xA5aA…1feB name PonsLaunchFactory is_verified true file_path contracts/src/PonsLaunchFactory.sol. launchToken tx 0xb737bacd…94b3 2026-07-19T07:54:03Z block 13676926 from 0x934e92…782a to factory method launchToken name Thinking Cat symbol HMM. TokenDeployed token 0x7FE9…D87f. TokenLaunched pool 0x2b0D…0E9e positionId 223724 restrictionsEndBlock 25565389 initialBuyAmount 26840792939659113. PositionLocked; LP NFT 223724 to locker 0x736D…7F35. Pool address name UniswapV3Pool is_verified true." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-8, R-9, R-16], result: "DexScreener latest/dex/tokens/0x7FE9…D87f: 8 robinhood pairs; top HMM/WETH uniswap v3 0x2b0D…0E9e quote WETH 0x0Bd7…AD73 liquidity.usd 833648.52 volume.h24 2463016.35 fdv/marketCap 21906374 pairCreatedAt 1784447643000 (2026-07-19T07:54:03Z) info.websites hmmmm.fun plus X community info.socials x.com/thinkingcatRH. Gecko pool HMM/WETH 1% volume_usd.h24 2314392.69 reserve_in_usd 689642.48 fdv_usd 21381671.07 market_cap_usd 21647795.31 pool_created_at 2026-07-19T07:54:03Z dex pons-dot-family. Gecko token volume_usd.h24 2814703.17 (all pools, not the WETH book) coingecko_coin_id thinking-cat. Secondary Dex books: Ramses HMM/WETH, Uni v4 ETH/USDG/PONS." }
  - { id: REP-4, method: official-crosslink, checked_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-10, R-11], result: "hmmmm.fun HTTP 200 title $HMM; HTML publishes CA 0x7fe995…d87f, href https://x.com/thinkingcatRH, X community 2039350183981699140, Pons launchpad path, Uniswap swap, DexScreener/Gecko iframe on pool 0x2b0d…0e9e, and wirebot.trade. @thinkingcatRH bio has $HMM, @ponsdotfamily, and Ca 0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f. DexScreener info.socials is that handle and info.websites is hmmmm.fun." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsLaunchFactory launchToken clones a 1e9-supply PonsLauncherToken into a Uniswap v3 1% WETH pool and locks the LP NFT in PonsLaunchLocker. launchToken from 0x934e92…782a minted Thinking Cat / HMM. Token has no owner() in the verified ABI; maxTxBps 550 and maxWalletBps 500 are immutable.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-2, R-4, R-5, R-6, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Thinking Cat", class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "HMM", class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f", class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-1, R-5, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-1, R-4, R-5, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@thinkingcatRH", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-10, R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pad is census Pons v1 factory 0xA5aA…1feB, not NOXA, LONG, PAIR, or hood.fun. Quote asset is WETH 0x0Bd7…AD73. Distinct from Wire (command layer) and Squeeze (scanner that listed HMM as a tape market).", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-3, R-4, R-6, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "HMM/WETH Uniswap v3 1% 24h volume 2314392.69 USD and reserve_in_usd 689642.48 at 2026-09-03T04:24:00Z (Gecko pool slice, not Gecko token all-pools 2814703.17)", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 833648.52 volume.h24 2463016.35 fdv/marketCap 21906374 at 2026-09-03T04:23:00Z", class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 14666, class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "Token ABI has no owner(); owner() eth_call reverts. Verified PonsLauncherToken source sets launchFactory to msg.sender and mints supply to the factory.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() 0x934e92E1C82020fc4e1Ee55712C6d9fb19C6782a equals launchToken from and FeeRedirectUpdated newFeeWallet; LP NFT 223724 transferred to PonsLaunchLocker 0x736D…7F35. Deployer eth_getCode is 23 B EIP-7702 0xef0100.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-4, R-6, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; venue is Uniswap v3 pool 0x2b0D0183d017c58B924401cA8AC362f6E01F0E9e fee 10000 via UniswapV3Factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA. Gecko labels that pool dex pons-dot-family.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-6, R-7, R-8, R-14], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "creator_address_hash and launchFactory() name PonsLaunchFactory 0xA5aA…1feB as the pad", class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-1, R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, hmmmm.fun, or X search this pass", class: unknown, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link / copypasta-pattern: @cryptoalphav2 posted robinhood-main-dex-vgm.netlify.app/vote/0x7FE995…D87f as a Robinhood Top 100 Leaderboard vote; not on hmmmm.fun or the @thinkingcatRH profile", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko pool fdv_usd 21381671.07 market_cap_usd 21647795.31; DexScreener fdv/marketCap 21906374. Gecko token fdv_usd 22125503.89 market_cap_usd 22428824.27.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x2b0D0183d017c58B924401cA8AC362f6E01F0E9e", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-6, R-7, R-14, R-15], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x736D76699C26D0d966744cAe304C000d471f7F35", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-6, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://hmmmm.fun", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-10], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-24, field: candidate, value: "hmm | HMM | @thinkingcatRH | https://hmmmm.fun — discovery token not in census", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-1, R-7, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: account.@thinkingcatRHH.flags, value: "handle-collision — display Thinking Cat; bio copies $HMM / @ponsdotfamily / CA 0x7FE9…D87f; 220 followers vs @thinkingcatRH 2676", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: account.@thinkingcatHH.flags, value: "handle-collision — display Thinking Cat; bio copies $HMM / @ponsdotfamily / CA; 398 followers", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: account.@ThinkingcatRHD.flags, value: "handle-collision — display Thinking Cat (SUPPORT); bio copies $HMM / @ponsdotfamily / CA; 104 followers", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: relationship, value: "Launch socials() twitter field and @gornx0x post 2078750090878193715 are the same URL: @wirebotRH launch $HMM called Thinking Cat and ape $50, site wirebot.trade. hmmmm.fun still links wirebot.trade.", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-6, R-10, R-13], reproduction_ids: [REP-1, REP-4], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko HMM/WETH 1% 24h volume $2.31M, liquidity $0.69M"
    summary: "Gecko pool 0x2b0D…0E9e volume_usd.h24 2314392.69 reserve_in_usd 689642.48 fdv_usd 21381671.07. DexScreener same book liquidity.usd 833648.52 volume.h24 2463016.35."
    occurred_at: 2026-09-03T04:24:00Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@gornx0x posted a Wirebot test launch for Thinking Cat"
    summary: "@gornx0x 2026-07-19T07:53:37Z: Disclaimer this is a test launch; @wirebotRH launch $HMM called Thinking Cat and ape $50; site wirebot.trade. On-chain socials() stores that post URL."
    occurred_at: 2026-07-19T07:53:37Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [relationship, communications.status]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-13]
  - id: EVT-3
    type: ct
    title: "Netlify vote page posted as Robinhood Top 100 listing"
    summary: "@cryptoalphav2 posted robinhood-main-dex-vgm.netlify.app/vote/0x7FE995…D87f. Flag third-party-link and copypasta-pattern; not on hmmmm.fun or @thinkingcatRH."
    occurred_at: 2026-09-03T04:10:49Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: ct
    title: "@whalewatchRH printed HMM whale buys"
    summary: "@whalewatchRH 2026-09-03T03:27:15Z: A FRONG whale just bought $1K of $HMM at $21.65M MC. Earlier 01:24:59Z: A WISHBONE whale bought $5K at $19.71M MC."
    occurred_at: 2026-09-03T03:27:15Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-5
    type: onchain
    title: "PonsLaunchFactory launchToken minted Thinking Cat / HMM"
    summary: "Tx 0xb737bacd…94b3 from 0x934e92…782a at 2026-07-19T07:54:03Z; TokenLaunched pool 0x2b0D…0E9e positionId 223724."
    occurred_at: 2026-07-19T07:54:03Z
    observed_at: 2026-09-03T04:23:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-14]
  - id: EVT-6
    type: company
    title: "@thinkingcatRH posted with CA in the bio"
    summary: "@thinkingcatRH 2026-09-02T20:22:54Z: Everyone wants to know what’s next. Bio: $HMM, THE thinking cat on @ponsdotfamily, Ca 0x7FE995…D87f."
    occurred_at: 2026-09-02T20:22:54Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: verified
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-11, R-12]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x7FE9…D87f Thinking Cat / HMM", url: "https://robinhoodchain.blockscout.com/address/0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "api/v2/tokens hash 0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f name Thinking Cat symbol HMM decimals 18 total_supply 1000000000000000000000000000 holders_count 14666 type ERC-20 volume_24h 3150497.983 circulating_market_cap 19619051.71 exchange_rate 0.01962056. Address name PonsLauncherToken is_contract true is_verified true proxy_type null creator 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB." }
  - { id: R-2, publisher: Blockscout, title: "PonsLauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f?tab=contract", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "api/v2/smart-contracts name PonsLauncherToken compiler v0.8.30+commit.73712a01 optimization true is_verified true is_partially_verified false file_path contracts/src/PonsLauncherToken.sol verified_at 2026-07-19T16:33:58.619837Z evm cancun. ABI includes deployer, launchFactory, liquidityPool, pairToken, socials, maxTxBps, maxWalletBps. Source: launchFactory = msg.sender; launchBlock = block.number; _mint(msg.sender, supply_). No owner()." }
  - { id: R-3, publisher: Blockscout, title: "Address 0xA5aA…1feB PonsLaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-16], excerpt: "hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB name PonsLaunchFactory is_contract true is_verified true creator_address_hash 0xda4bCee76B29EFEc9697Fcf663601c2042043968 creation_transaction_hash 0x836c5e41d4a4162c922cb7f0cc6713018c40b32265fb3b63926b9fdfbe0c0e67. Compiler v0.8.30 file_path contracts/src/PonsLaunchFactory.sol is_partially_verified false verified_at 2026-07-13T21:32:25.753241Z." }
  - { id: R-4, publisher: Blockscout, title: "launchToken tx 0xb737bacd…94b3", url: "https://robinhoodchain.blockscout.com/tx/0xb737bacd0001971576a6b54e611c48e6f823cf8818da7482c648ab86967394b3", published_at: 2026-07-19T07:54:03Z, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-9, CLM-14, EVT-5], excerpt: "timestamp 2026-07-19T07:54:03.000000Z status ok result success block_number 13676926 from 0x934e92E1C82020fc4e1Ee55712C6d9fb19C6782a (is_contract true) to PonsLaunchFactory 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB method launchToken. decoded name Thinking Cat symbol HMM logo ipfs Qmb8rr5dz47bBRWq3QfPtnonnzYu6Bn7hJpqBCqg8jj9gs socials[0] https://x.com/i/web/status/2078750090878193715." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol on HMM", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17], excerpt: "eth_blockNumber 0x32abce3 (53132515). Token code 5274 B prefix 60806040 not EIP-1167. name Thinking Cat symbol HMM decimals 18 totalSupply 1e27. factory() reverts. owner() reverts. Factory 0xA5aA…1feB code 24353 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "launchFactory(), liquidityPool(), socials()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-14, CLM-15, CLM-16, CLM-21, CLM-22, CLM-28, EVT-2], excerpt: "block 53133243. launchFactory() 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB. liquidityPool() 0x2b0D0183d017c58B924401cA8AC362f6E01F0E9e. pairToken() 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73. deployer() 0x934e92E1C82020fc4e1Ee55712C6d9fb19C6782a. poolFee 10000. launchBlock 25565387 restrictionEndBlock 25565389. socials twitter https://x.com/i/web/status/2078750090878193715. Deployer code 0xef01007f876f2b5056724f7ee5d54f2bc379a51e137775 (23 B). Locker 0x736D…7F35 code 5426 B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens HMM", url: "https://api.dexscreener.com/latest/dex/tokens/0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-21, CLM-23, CLM-24, EVT-1], excerpt: "8 robinhood pairs. Top pairAddress 0x2b0D0183d017c58B924401cA8AC362f6E01F0E9e labels v3 dex uniswap base Thinking Cat / HMM quote WETH 0x0Bd7…AD73 liquidity.usd 833648.52 volume.h24 2463016.35 fdv 21906374 marketCap 21906374 pairCreatedAt 1784447643000. info.websites https://hmmmm.fun/ and X community 2039350183981699140. info.socials https://x.com/thinkingcatRH." }
  - { id: R-8, publisher: GeckoTerminal, title: "HMM/WETH 1% Uniswap v3 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2b0d0183d017c58b924401ca8ac362f6e01f0e9e", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name HMM / WETH 1% pool_created_at 2026-07-19T07:54:03Z fdv_usd 21381671.0699935 market_cap_usd 21647795.31 volume_usd.h24 2314392.69126394 reserve_in_usd 689642.4766 transactions.h24 buys 1760 sells 1475. dex pons-dot-family quote robinhood_0x0bd7d308f8e1639fab988df18a8011f41eacad73." }
  - { id: R-9, publisher: GeckoTerminal, title: "Thinking Cat token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20], excerpt: "name Thinking Cat symbol HMM decimals 18 total_supply 1e27 price_usd 0.02240088615 fdv_usd 22125503.8938882 market_cap_usd 22428824.27 volume_usd.h24 2814703.16645006 total_reserve_in_usd 449626.55. coingecko_coin_id thinking-cat. Top pool 0x2b0d…0e9e. No website field." }
  - { id: R-10, publisher: hmmmm.fun, title: "$HMM site", url: "https://hmmmm.fun/", published_at: null, accessed_at: 2026-09-03T04:24:03Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-23, CLM-24, CLM-28], excerpt: "HTTP 200. title $HMM — the sound your brain makes before you do something dumb. og:description $HMM is a meme coin for overthinkers. HTML CA 0x7fe995a80075df3dc8ae11a9b82c7fe4202cd87f, href https://x.com/thinkingcatRH, X community 2039350183981699140, ponsfamily.com/launchpad/0x7fe995…, app.uniswap.org swap, dexscreener/geckoterminal pool 0x2b0d…0e9e, wirebot.trade. No GitHub or t.me." }
  - { id: R-11, publisher: "@thinkingcatRH", title: "Thinking Cat profile", url: "https://x.com/thinkingcatRH", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, EVT-6], excerpt: "Display Thinking Cat. Handle @thinkingcatRH. Bio: Thinking my way to billions… $HMM… THE thinking cat on @ponsdotfamily. Ca: 0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f. Followers 2676. Blue Verified. User id 2078762022855176192." }
  - { id: R-12, publisher: "@thinkingcatRH", title: "Everyone wants to know what’s next", url: "https://x.com/thinkingcatRH/status/2095246108813668423", published_at: 2026-09-02T20:22:54Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-6], excerpt: "Everyone wants to know what’s next. The cat is already thinking about it." }
  - { id: R-13, publisher: "@gornx0x", title: "test launch Thinking Cat via @wirebotRH", url: "https://x.com/gornx0x/status/2078750090878193715", published_at: 2026-07-19T07:53:37Z, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-9, CLM-28, EVT-2], excerpt: "Disclaimer: this is a test launch, NFA, don't buy. @wirebotRH launch $HMM called Thinking Cat and ape $50. site https://wirebot.trade/" }
  - { id: R-14, publisher: Blockscout, title: "TokenLaunched and PositionLocked logs", url: "https://robinhoodchain.blockscout.com/tx/0xb737bacd0001971576a6b54e611c48e6f823cf8818da7482c648ab86967394b3", published_at: 2026-07-19T07:54:03Z, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-14, CLM-15, CLM-21, CLM-22, EVT-5], excerpt: "TokenLaunched token 0x7FE995…D87f deployer 0x934e92…782a dexFactory 0x1f7d7550…2EfA pairToken WETH 0x0Bd7…AD73 pool 0x2b0D…0E9e positionId 223724 restrictionsEndBlock 25565389 initialBuyAmount 26840792939659113. PositionLocked same positionId positionManager 0x73991a25…e0D3. NFT Transfer tokenId 223724 to 0x736D7669…7F35. Internal create2 token 0x7FE9…D87f and pool 0x2b0D…0E9e." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x2b0D…0E9e UniswapV3Pool", url: "https://robinhoodchain.blockscout.com/address/0x2b0D0183d017c58B924401cA8AC362f6E01F0E9e", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "hash 0x2b0D0183d017c58B924401cA8AC362f6E01F0E9e name UniswapV3Pool is_contract true is_verified true creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA." }
  - { id: R-16, publisher: GeckoTerminal, title: "HMM token pools", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f/pools", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "Row 0 HMM / WETH 1% 0x2b0d…0e9e volume_usd.h24 2314392.69 reserve_in_usd 689642.48 created 2026-07-19T07:54:03Z. Row 1 HMM / WETH 2% Ramses 0xd618…c15 vol 281332.46. Row 2 HMM / WETH Uni v4 0x0aa0…6d74 vol 123845.83. Row 3 HMM / USDG vol 42875.23. Row 4 PONS / HMM vol 27409.37." }
  - { id: R-17, publisher: X user search, title: "thinkingcatRH HMM Thinking Cat", url: "https://x.com/thinkingcatRH", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-25, CLM-26, CLM-27], excerpt: "User search returned @thinkingcatRH (2676 followers, CA in bio) plus @thinkingcatRHH (220, same bio stem), @thinkingcatHH (398, same bio stem), and @ThinkingcatRHD (104, display Thinking Cat (SUPPORT), same CA). Flag handle-collision on the three lookalikes." }
  - { id: R-18, publisher: "@cryptoalphav2", title: "HMM Robinhood Top 100 vote", url: "https://x.com/cryptoalphav2/status/2095363861687722002", published_at: 2026-09-03T04:10:49Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-3], excerpt: "Attention $HMM Family! YOUR vote matters! Less than 100 votes are needed to list $HMM on the Robinhood Top 100 Leaderboard. Listing ID: 6523. URL robinhood-main-dex-vgm.netlify.app/vote/0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f. Flag third-party-link / copypasta-pattern." }
  - { id: R-19, publisher: "@whalewatchRH", title: "FRONG whale bought HMM", url: "https://x.com/whalewatchRH/status/2095352897995219331", published_at: 2026-09-03T03:27:15Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-4], excerpt: "A FRONG whale just bought $1K of $HMM at $21.65M MC. Earlier 2095322128006447593 2026-09-03T01:24:59Z: A WISHBONE whale just bought $5K of $HMM at $19.71M MC." }
  - { id: R-20, publisher: Blockscout, title: "PonsLauncherToken source launchBlock", url: "https://robinhoodchain.blockscout.com/address/0x7FE995a80075dF3Dc8Ae11A9b82c7FE4202CD87f?tab=contract", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "uint256 public immutable launchBlock; constructor sets launchBlock = block.number; restrictionEndBlock = block.number + restrictionBlocks_. RPC launchBlock 25565387 vs Blockscout tx block_number 13676926. TokenLaunched restrictionsEndBlock 25565389 matches RPC." }
  - { id: R-21, publisher: DexScreener, title: "HMM/WETH pair page", url: "https://dexscreener.com/robinhood/0x2b0d0183d017c58b924401ca8ac362f6e01f0e9e", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "DexScreener robinhood pair 0x2b0D0183d017c58B924401cA8AC362f6E01F0E9e HMM/WETH Uniswap v3. Same book as latest/dex/tokens top row." }

gaps:
  - { priority: P0, question: "Does PonsLaunchFactory owner() still point at the census 2-of-3 Safe, and does that path reach HMM after lock?", checked: "Token owner() reverts; LP NFT 223724 went to locker 0x736D…7F35; factory owner() was not eth_called this pass, 2026-09-03", next: "eth_call owner() on 0xA5aA…1feB and ownerOf(223724) on positionManager 0x7399…e0D3" }
  - { priority: P1, question: "Why does launchBlock() return 25565387 while the creation tx is Blockscout block 13676926?", checked: "Verified source sets launchBlock = block.number; RPC 25565387 / restrictionEnd 25565389; TokenLaunched restrictionsEndBlock 25565389; explorer tx block_number 13676926, 2026-09-03", next: "compare L2 block.number with Blockscout numbering, as CASHCAT seed noted the same split" }
  - { priority: P1, question: "Is deployer 0x934e92…782a a Wirebot / EIP-7702 wallet, and who controls 0x7f876F…7775?", checked: "Launch tx from is_contract true; latest eth_getCode 23 B 0xef0100 + 0x7f876F2b5056724f7Ee5D54F2Bc379a51e137775; Blockscout address API timed out, 2026-09-03", next: "retry Blockscout address/0x934e92 and read the EIP-7702 target" }
  - { priority: P2, question: "Which aggregator book should the site quote when DexScreener liq is $833k and Gecko reserve is $690k?", checked: "DexScreener HMM/WETH v3 liquidity.usd 833648.52 volume.h24 2463016.35; Gecko same pool reserve_in_usd 689642.48 volume_usd.h24 2314392.69; Gecko token total_reserve_in_usd 449626.55, 2026-09-03", next: "keep both labeled as pool slices; do not mix Gecko token all-pools volume 2814703.17" }
  - { priority: P2, question: "Is there an audit of PonsLauncherToken.sol / PonsLaunchFactory.sol that names this HMM deployment?", checked: "hmmmm.fun, DexScreener, Gecko, Blockscout source header, X search, 2026-09-03", next: "search named auditors if Pons publishes one that covers v1 launcher tokens" }
---

# HMM — research packet

## What it is

A one-billion-supply ERC-20 minted through Pons v1 into a Uniswap v3 1% WETH pool. PonsLaunchFactory launchToken deploys Thinking Cat (HMM) and seeds the HMM/WETH book. Traders buy and sell HMM on that pool and later Ramses / Uniswap v4 books. hmmmm.fun and @thinkingcatRH publish the contract.

Themes: memecoin, cat

## Why it matters

The HMM/WETH Uniswap v3 book printed about $2.31M of 24h volume on Gecko at collection, with DexScreener showing $2.46M on the same pair and $833k liquidity. Squeeze and CT treat HMM as a Pons-category bag. The quote leg is WETH, not a stock token. GET-style census has no hmm row.

## What could go wrong

USD liquidity figures count HMM plus WETH, not a USDG backstop. DexScreener and Gecko disagree on the same pool's reserve ($833k vs $690k). Ticker HMM collides with unrelated search terms. Lookalike handles copy the CA. A Netlify "Top 100" vote URL is a third-party-link.

## Product and mechanics

PonsLaunchFactory 0xA5aA…1feB create2-deployed PonsLauncherToken via launchToken from 0x934e92…782a at 2026-07-19T07:54:03Z. Supply 1e9*1e18. TokenLaunched poolId/pool 0x2b0D…0E9e against WETH 0x0Bd7…AD73 fee 10000. launchFactory() on the token returns that factory. liquidityPool() returns the same Uniswap v3 pool. [verified R-4 R-5 R-6 R-14]

Verified token source mints to the factory, sets launchFactory to msg.sender, and has no owner(). LP NFT 223724 was transferred to PonsLaunchLocker 0x736D…7F35. maxTxBps 550 and maxWalletBps 500 are immutable. Restriction window is two blocks (RPC launchBlock 25565387 / end 25565389). Secondary HMM/USDG, HMM/ETH, and HMM/PONS books exist on DexScreener with far less liquidity than the WETH book. [verified R-2 R-6 R-7 R-14]

## Control and security

Token owner() reverts. Deployer 0x934e92…782a is also FeeRedirectUpdated newFeeWallet; latest code is 23-byte EIP-7702 0xef0100. Factory owner() was not read this pass. PonsLauncherToken and PonsLaunchFactory are fully verified on Blockscout (contracts/src/PonsLauncherToken.sol, contracts/src/PonsLaunchFactory.sol, compiler v0.8.30). No audit report URL was located this pass. [verified R-2 R-3 R-5 R-6] [unknown]

## Team and provenance

Official domain is hmmmm.fun and official handle is @thinkingcatRH: the site lists the CA and the handle; the bio lists the CA; DexScreener info.websites / info.socials match. [verified R-7 R-10 R-11]

On-chain socials() twitter field is @gornx0x status 2078750090878193715, which posted a @wirebotRH test launch of Thinking Cat about 26 seconds before the factory tx. hmmmm.fun still links wirebot.trade. That is provenance, not a Wire official handle for HMM. Lookalikes @thinkingcatRHH, @thinkingcatHH, and @ThinkingcatRHD copy the bio/CA. Flag handle-collision. [verified R-6 R-13] [claim R-17]

## Economics and activity

HMM/WETH Uniswap v3 1% 24h volume is 2314392.69 USD and reserve_in_usd is 689642.48 at 2026-09-03T04:24:00Z from the Gecko pool endpoint. fdv_usd is 21381671.07. Gecko token volume_usd.h24 is 2814703.17 across all pools, not the WETH book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 833648.52, volume.h24 2463016.35, fdv/marketCap 21906374. Blockscout holders_count 14666. Pair created 2026-07-19T07:54:03Z. [claim R-1 R-7]

Gecko labels the book dex pons-dot-family while Blockscout names the pool UniswapV3Pool created by UniswapV3Factory 0x1f7d…2EfA. [claim R-8 R-15]

## Material risks

- Quote token is WETH, so pool USD reserve is HMM plus ETH, not USDG. [verified R-7 R-8]
- DexScreener liquidity and Gecko reserve on the same pool disagree by ~$144k. [claim R-7 R-8]
- Handle-collision on three lookalike X accounts that copy the CA. [claim R-17]
- Netlify vote URL is a third-party-link / copypasta-pattern. [claim R-18]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/pool and launchToken 0xb737bacd…94b3 plus TokenLaunched/PositionLocked logs, RPC name/symbol/launchFactory/liquidityPool/socials, DexScreener, Gecko pool/token/pools, hmmmm.fun, @thinkingcatRH, @gornx0x, lookalike search, and the vote post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-10]
- Numbers: 2314392.69 is the Gecko HMM/WETH 1% pool 24h volume, not the 2814703.17 token all-pools figure. Reserve 689642.48 is that pool. DexScreener 2463016.35 / 833648.52 is the same pair, different aggregator. Holders 14666 is live Blockscout (assignment hint was 14667). [claim R-1 R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that HMM is the Pons protocol, a Wire product, or the Squeeze factory. Factory name is PonsLaunchFactory and census Pons is the pad; Wire is the launch command path; Squeeze tape reused that factory address as a scanner input. hmmmm.fun / @thinkingcatRH bidirectionally name this CA. [inference R-3 R-10 R-11 R-13]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census has no hmm / HMM / Thinking Cat / 0x7FE9…D87f row. content/accounts.yaml already lists @thinkingcatRH as downweight.
- Explorer: Blockscout api/v2 token, address, smart-contract, factory, pool, launchToken 0xb737bacd…94b3, logs, internal txs, holders. RPC eth_getCode/eth_call with Chrome UA at blocks 53132515–53134721.
- Aggregators: DexScreener latest/dex/tokens (8 pairs). Gecko first GET token 200, then pool and token/pools.
- Social: X keyword Latest HMM/Thinking Cat; from:thinkingcatRH; user search thinkingcatRH; thread 2078750090878193715.
- Site: hmmmm.fun HTTP 200, CA and @thinkingcatRH in HTML.
- Failed: Blockscout address API for deployer 0x934e92…782a timed out; factory() selector reverts (launchFactory() used instead); Gecko token has no website field (site taken from DexScreener / hmmmm.fun).
- Time: collection 2026-09-03T04:20Z–2026-09-03T04:26Z.
