---
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: sinjoh
name: Sinjoh
packet_tier: full
as_of: 2026-09-02T23:30:00Z
prior_packet: null
supersedes: null
owned_slugs: [sinjoh]
allowed_paths:
  - research/inbox/packets/sinjoh/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: Sinjoh
  aliases: ["$INJOH", "Sinjoh DeFi"]
  symbols: [INJOH]
  entity_kind: protocol
  chain_scope: robinhood-native
  official_domain: https://www.sinjoh.com
  official_handle: "@SinjohDeFi"
  repository: "NULL — site, X bio, DexScreener token info and constructor socials do not name a repository; github.com/Sinjoh-Finance/sinjoh-contracts exists with matching deployer 0x3d58… and SinjohFeeRouter 0x17c76… but is not linked from those official surfaces this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "INJOH was created by PonsLaunchFactory 0xA5aAb3…351feB via launchPonsToken; Pons is the pad, Sinjoh is the fee-routing layer that called it"
        - "Official surfaces differ: ponsfamily.com / @ponsdotfamily versus sinjoh.com / @SinjohDeFi"
    - slug: safehood
      signals: [other]
      contrary_signals:
        - "Census Safehood is the Uniswap-pool launchpad at safehood.fun / @_safehood"
        - "$SAFEHOOD 0x663492eab45ed21d6bdd7836efdc1a9cd51ae199 is a Pons graduation that @SinjohDeFi posted as a Sinjoh customer at @safehoodonrh"
        - "No shared domain, handle, or reproduced Sinjoh protocol address"
    - slug: hoodlock
      signals: [other]
      contrary_signals:
        - "Census HoodLock is a token and liquidity locker at hoodlock.tech / @HoodLockRH"
        - "Sinjoh routes creator fees; it does not lock LP NFTs (INJOH's Uniswap v3 position NFT sits in PonsLaunchLocker 0x736D76…7F35)"
        - "No shared domain, handle, or reproduced address"
    - slug: pools-trade
      signals: [other]
      contrary_signals:
        - "Census pools.trade is a Uniswap-pool launchpad at @pools_dot_fun"
        - "sinjoh.com lists Pools as a supported launchpad, not as Sinjoh itself"
        - "No shared domain, handle, or reproduced Sinjoh protocol address"
    - slug: index
      signals: [other]
      contrary_signals:
        - "Census The Index is a fee-funded RWA distributor at theindex.finance / @TheIndexFi"
        - "Sinjoh is a per-launch fee router with INJOH at 0x2cC0…a77D, not a tax-funded stock basket"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: yield/fee-router
  secondary_leaves: [launch/other-pad]
  mechanism_tags: [fee-routing, launchpad, rwa, nft, stock-paired]
  ecosystem_role: subject
  lifecycle: mainnet
  coverage_recommendation: full
  evidence_state: partly-verified
  rationale: "Creators launch on Pons, Flap, pools.trade or LetsCash through a Sinjoh fee-router clone that splits collected fees into burns, airdrops, LP and a team share. Token 0x2cC0…a77D, Uniswap v3 INJOH/WETH 0xB09f…72DC, and the INJOH SinjohFeeRouter clone 0x7E97…5b2f were reproduced on chain 4663 this pass. The 40/20/15/15/5/5 INJOH split is site copy, not decoded from the clone. Piggy Banks mint was postponed 2026-09-02. No DefiLlama protocol row. [R-1] [R-4] [R-6] [R-7] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-12, CLM-15], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-7, CLM-11], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-13, CLM-16, CLM-20], note: "" }

links:
  - { kind: site, url: "https://www.sinjoh.com", authenticity: confirmed }
  - { kind: app, url: "https://app.sinjoh.com", authenticity: confirmed }
  - { kind: x, url: "https://x.com/SinjohDeFi", authenticity: confirmed }
  - { kind: github, url: "https://github.com/Sinjoh-Finance/sinjoh-contracts", authenticity: unconfirmed }

deployments:
  - label: INJOH token (PonsLauncherToken)
    role: token
    address:
      value: "0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-6]
  - label: INJOH/WETH Uniswap v3 pair
    role: other
    address:
      value: "0xB09fa4f04032b9d9e690ac4a1d29523b5f9A72DC"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-7, R-3]
  - label: INJOH SinjohFeeRouter clone
    role: router
    address:
      value: "0x7E97EadeA120321c65CC09B6FDECc6Eb15D55b2f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-6, R-10, R-11]
  - label: SinjohFeeRouter implementation
    role: implementation
    address:
      value: "0x17c76Ff58b7Da12E116bb22ebDcc7F31Cadf9B64"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-11, R-16]
  - label: SinjohFeeRouterFactory
    role: factory
    address:
      value: "0xFA51E67f799699A237D558F5FbE7B170F8c5584d"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-12, R-16]
  - label: PonsLaunchFactory (INJOH creator)
    role: factory
    address:
      value: "0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6, R-9]
  - label: SinjohRevenueCollector
    role: other
    address:
      value: "0x5Bb7582557F5be30b62c335Ad3ccf4bA79E138c5"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13, R-16]
  - label: Revenue-collector owner / GitHub governance key
    role: admin
    address:
      value: "0x39E2f5eFdFd808F26B98979a06BA11ea82E1C85f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-02
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-13, R-14, R-16]

metrics:
  - { kind: volume_24h, value: 940940.38, currency: USD, as_of: 2026-09-02T23:20:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens INJOH Uniswap v3 INJOH/WETH pair 0xB09fa4…72DC volume.h24; pair slice not all-pairs", class: claim, receipt_ids: [R-3] }
  - { kind: market_cap, value: 2338177, currency: USD, as_of: 2026-09-02T23:20:00Z, window: point, method: "DexScreener same INJOH/WETH v3 pair marketCap", class: claim, receipt_ids: [R-3] }
  - { kind: holders, value: 2292, currency: null, as_of: 2026-09-02T23:15:00Z, window: point, method: "Blockscout GET /api/v2/tokens/0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D holders_count", class: claim, receipt_ids: [R-5] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:29:00Z, receipt_ids: [R-4, R-5, R-6], result: "eth_chainId 0x1237 (4663); eth_getCode on 0x2cC0…a77D non-empty (len 10550); name() Sinjoh; symbol() INJOH; decimals 18; totalSupply 1e27; owner() reverts; deployer() 0x7E97EadeA120321c65CC09B6FDECc6Eb15D55b2f; Blockscout is_contract true, is_verified true, name PonsLauncherToken, token Sinjoh/INJOH, holders_count 2292, creator PonsLaunchFactory 0xA5aAb3…351feB, creation tx 0x98738893…de488b block 23753682 at 2026-07-31T00:40:38Z" }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:29:00Z, receipt_ids: [R-6, R-7], result: "eth_getCode on pair 0xB09f…72DC non-empty (len 44286); token0 WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; token1 INJOH; fee 10000 (1%); factory 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA; Blockscout is_contract true, is_verified true, name UniswapV3Pool, creator Uniswap v3 factory, creation_transaction_hash same launch tx 0x98738893…de488b" }
  - { id: REP-3, method: official-crosslink, checked_at: 2026-09-02T23:20:00Z, receipt_ids: [R-1, R-2, R-3, R-6], result: "X @SinjohDeFi bio names The Programmable Capital Layer of Robinhood and CA 0x2cC0…a77D and links sinjoh.com; site Launch CTA https://app.sinjoh.com and $INJOH CTA https://www.ponsfamily.com/launchpad/0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D; DexScreener token info.websites https://www.sinjoh.com/ and socials x.com/SinjohDeFi; launchPonsToken constructor socials twitter https://x.com/SinjohDeFi website https://sinjoh.com/; telegram and discord constructor fields empty" }
  - { id: REP-4, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-02T23:29:00Z, receipt_ids: [R-10, R-11, R-12, R-13, R-14], result: "eth_getCode non-empty on fee-router clone 0x7E97…5b2f (len 92, EIP-1167), implementation 0x17c76…9B64 (len 34524), factory 0xFA51…584d (len 8340), revenue collector 0x5Bb7…38c5 (len 5894); clone implementations[0] SinjohFeeRouter 0x17c76…; factory name SinjohFeeRouterFactory is_verified true created by 0x3d58…; collector name SinjohRevenueCollector is_verified true, owner() 0x39E2f5eFdFd808F26B98979a06BA11ea82E1C85f; that address and deployer 0x3d58E42d3a920dE4C1F71EE041c7eBb82ee23f49 both have empty code (EOA); owner() on clone and implementation reverts" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-02T23:20:00Z, receipt_ids: [R-3], result: "DexScreener latest/dex/tokens 0x2cC0…: lead Uniswap v3 INJOH/WETH pair 0xB09fa4f04032b9d9e690ac4a1d29523b5f9A72DC labels v3 quote WETH 0x0Bd7…AD73 liquidity.usd 197316.65 volume.h24 940940.38 marketCap 2338177 fdv 2338177 pairCreatedAt 1785458438000 (2026-07-31T00:40:38Z). Extra Uniswap v4 INJOH/USDG, INJOH/ETH and Ramses v3 INJOH/USDG books exist." }
  - { id: REP-6, method: api, checked_at: 2026-09-02T23:18:00Z, receipt_ids: [R-24], result: "GET api.llama.fi/protocol/sinjoh returned Protocol not found. No Robinhood Chain TVL slice for this slug this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Fee-routing layer on top of launchpads, not a pad. Site: creator fees are split, swapped into tokens and RWAs, added to LP, then sent, airdropped or burned. Supported pads named on the site: Pons, Flap, pools.trade, LetsCash. Additional named products: Liquidity Manager, Merkle airdrop distributor, raffle rewards, treasury vaults, funding bands. Staking Engine, ICO launches, Intelligent Yield and NFT Economies listed as in development.", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-2, field: identity.domain, value: "https://www.sinjoh.com", class: verified, observed_at: 2026-09-02T23:20:00Z, receipt_ids: [R-1, R-2, R-3, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-3, field: identity.handle, value: "@SinjohDeFi", class: verified, observed_at: 2026-09-02T23:20:00Z, receipt_ids: [R-1, R-2, R-3, R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D", class: verified, observed_at: 2026-09-02T23:29:00Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-5, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-02T23:29:00Z, receipt_ids: [R-4, R-6, R-7], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: taxonomy.primary-leaf, value: yield/fee-router, class: inference, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-1, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-7, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-02T23:29:00Z, receipt_ids: [R-4, R-6, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-8, field: taxonomy.entity-kind, value: protocol, class: inference, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-1], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: identity.symbol, value: INJOH, class: verified, observed_at: 2026-09-02T23:29:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-10, field: identity.name, value: Sinjoh, class: verified, observed_at: 2026-09-02T23:29:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-11, field: relationship, value: "INJOH was created 2026-07-31T00:40:38Z when EOA 0x3d58E42d3a920dE4C1F71EE041c7eBb82ee23f49 called launchPonsToken on SinjohFeeRouter clone 0x7E97…5b2f against PonsLaunchFactory 0xA5aAb3…351feB (launchConfigId 0, dexId 0). Pair asset WETH. Liquidity venue Uniswap v3 pool 0xB09f…72DC created in the same tx; Uniswap v3 position NFT 517948 transferred to PonsLaunchLocker 0x736D76…7F35.", class: verified, observed_at: 2026-09-02T23:16:00Z, receipt_ids: [R-6, R-7, R-9], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-12, field: product.mechanism, value: "Lead listed book is Uniswap v3 INJOH/WETH 0xB09fa4f04032b9d9e690ac4a1d29523b5f9A72DC (quote WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73, 1% fee). Extra Uniswap v4 INJOH/USDG and INJOH/ETH books and a Ramses v3 INJOH/USDG book exist. Venue Uniswap for the lead book.", class: verified, observed_at: 2026-09-02T23:20:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "SinjohRevenueCollector 0x5Bb7…38c5 owner() 0x39E2f5eFdFd808F26B98979a06BA11ea82E1C85f (EOA, empty code). GitHub mainnet-deployments.json labels that address governance and the collector's owner and initial processor, and states renounceOwnership is permanently disabled.", class: verified, observed_at: 2026-09-02T23:29:00Z, receipt_ids: [R-13, R-14, R-16], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-14, field: control.owner, value: "Deployer EOA 0x3d58E42d3a920dE4C1F71EE041c7eBb82ee23f49 (empty code) sent the INJOH launchPonsToken tx and created the fee-router factory, implementation and revenue collector. PonsLauncherToken.deployer() on INJOH returns the fee-router clone 0x7E97…5b2f, not that EOA.", class: verified, observed_at: 2026-09-02T23:29:00Z, receipt_ids: [R-6, R-11, R-12, R-13], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-15, field: control.proxy, value: "INJOH SinjohFeeRouter 0x7E97…5b2f is an EIP-1167 clone of verified SinjohFeeRouter 0x17c76…9B64, created by SinjohFeeRouterFactory 0xFA51…584d. INJOH token proxy_type null. owner() on the clone and implementation reverts.", class: verified, observed_at: 2026-09-02T23:29:00Z, receipt_ids: [R-6, R-10, R-11], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No independent audit report URL was located on the site, X profile or DexScreener. github.com/Sinjoh-Finance/sinjoh-contracts AUDITS.md dated 2026-08-18 states Sinjoh has not published an independent third-party security audit covering the complete set of Sinjoh-owned contracts; self-audit, tests and provenance are not an independent audit. DefiLlama has no protocol row.", class: unknown, observed_at: 2026-09-02T23:25:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: economics.metric, value: "DexScreener Uniswap v3 INJOH/WETH 0xB09f…: liquidity.usd 197316.65, volume.h24 940940.38, marketCap 2338177. That is the token book, not protocol-custodied TVL.", class: claim, observed_at: 2026-09-02T23:20:00Z, receipt_ids: [R-3], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-18, field: economics.metric, value: "Blockscout holders_count 2292; totalSupply 1_000_000_000e18 this pass.", class: claim, observed_at: 2026-09-02T23:29:00Z, receipt_ids: [R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-19, field: identity.repository, value: "NULL — official surfaces do not name a repository; github.com/Sinjoh-Finance/sinjoh-contracts matches deployer 0x3d58… and SinjohFeeRouter 0x17c76…", class: unknown, observed_at: 2026-09-02T23:25:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: product.mechanism, value: "Site $INJOH flywheel: Sinjoh earns 70% of INJOH trading fees from Pons plus a 1% protocol fee from every Sinjoh deployment; both streams flow through the Sinjoh Router. Named split: INJOH burn 40%, team 20%, PONS airdrops 15%, NVDA rewards 15%, PONS burn 5%, INJOH LP 5%. Not decoded from the clone's stored config this pass.", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-1, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: relationship, value: "$SAFEHOOD 0x663492eab45ed21d6bdd7836efdc1a9cd51ae199 is a Pons token @SinjohDeFi posted as deployed through Sinjoh; not census Safehood (safehood.fun / @_safehood).", class: claim, observed_at: 2026-09-02T23:22:00Z, receipt_ids: [R-23], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: control.privileged-role, value: "GitHub mainnet-deployments.json names quoteSigner 0xd89fB916dD031Da9b0A32e820307c2d41a7dDe09 on several buyback price guards and keeper/observer 0x39E2… on Funding Bands. Not eth_call-reproduced this pass.", class: claim, observed_at: 2026-09-02T23:25:00Z, receipt_ids: [R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: taxonomy.secondary-leaf, value: "launch/other-pad is launch-adjacent (Sinjoh sits on Pons/Flap/pools.trade/LetsCash) rather than a pad of its own. Site: Not Another Launchpad / a layer that works on top of launchpads.", class: inference, observed_at: 2026-09-02T23:30:00Z, receipt_ids: [R-1, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: activity.status, value: "Piggy Banks NFT mint was posted for 2026-09-02 starting 11am EDT after an INJOH whitelist snapshot on 2026-09-01; @SinjohDeFi then posted the mint postponed several hours for a test bug, then that the bug was fixed and an updated mint time would follow. OpenSea collection link was not posted in those updates. App page /piggy-banks describes four tiers and a 10,000 INJOH burn to redeem.", class: claim, observed_at: 2026-09-02T23:22:00Z, receipt_ids: [R-20, R-21, R-22, R-27], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: economics.metric, value: "totalSupply() on INJOH is still 1e27 (1,000,000,000e18) this pass. Project posts of 42M / 4.5% / over 4.5% INJOH burned are not a drop in that totalSupply field.", class: verified, observed_at: 2026-09-02T23:29:00Z, receipt_ids: [R-5, R-18], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "No DefiLlama protocol row named sinjoh this pass (api.llama.fi/protocol/sinjoh Protocol not found).", class: claim, observed_at: 2026-09-02T23:18:00Z, receipt_ids: [R-24], reproduction_ids: [REP-6], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: company
    title: "Bug fixed; Piggy Banks mint time still pending"
    summary: "@SinjohDeFi posted the mint bug is fixed and an updated mint time will follow shortly after."
    occurred_at: 2026-09-02T18:23:08Z
    observed_at: 2026-09-02T23:22:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-22]
  - id: EVT-2
    type: company
    title: "Piggy Banks NFT mint postponed after a test bug"
    summary: "@SinjohDeFi posted the mint is postponed several hours after a bug in last tests; still same day."
    occurred_at: 2026-09-02T14:33:57Z
    observed_at: 2026-09-02T23:22:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-21]
  - id: EVT-3
    type: company
    title: "INJOH snapshot taken for Piggy Banks whitelist"
    summary: "@SinjohDeFi posted the INJOH whitelist snapshot is taken; mint next day 11am EDT from Alpha to Standard."
    occurred_at: 2026-09-01T02:59:16Z
    observed_at: 2026-09-02T23:22:00Z
    affected_fields: [activity.status, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: company
    title: "Project posts 4.5% INJOH burned and $48k airdropped"
    summary: "@SinjohDeFi posted over 4.5% of INJOH burned plus over $48,000 in PONS and NVDA airdropped to holders."
    occurred_at: 2026-08-31T17:34:44Z
    observed_at: 2026-09-02T23:22:00Z
    affected_fields: [economics.metric]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-5
    type: company
    title: "Yield Banks posted live later the same day"
    summary: "@SinjohDeFi posted Yield Banks goes live later today on the Sinjoh platform, then the Piggy Banks NFT."
    occurred_at: 2026-08-31T13:21:13Z
    observed_at: 2026-09-02T23:22:00Z
    affected_fields: [product.mechanism, activity.status]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-6
    type: company
    title: "SAFEHOOD cited as a Sinjoh customer on Pons"
    summary: "@SinjohDeFi posted @safehoodonrh used Sinjoh on Pons; over half of SAFEHOOD supply bought back and airdropped."
    occurred_at: 2026-08-25T19:10:19Z
    observed_at: 2026-09-02T23:22:00Z
    affected_fields: [relationship, product.mechanism]
    evidence_state: claim
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-7
    type: onchain
    title: "INJOH minted via launchPonsToken into Uniswap v3"
    summary: "Creation tx 0x98738893… on 2026-07-31 called launchPonsToken; Uniswap v3 INJOH/WETH pool created in-tx."
    occurred_at: 2026-07-31T00:40:38Z
    observed_at: 2026-09-02T23:16:00Z
    affected_fields: [deployment.address, identity.symbol, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6]

receipts:
  - { id: R-1, publisher: Sinjoh, title: "sinjoh.com homepage", url: "https://www.sinjoh.com/", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-8, CLM-20, CLM-23], excerpt: "SINJOH DEFI. STATUS // PONS · FLAP · POOLS · LETSCASH. Launch CTA https://app.sinjoh.com. $INJOH CTA https://www.ponsfamily.com/launchpad/0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D. Fee Router: Automated routing for creator-fee rewards from launchpads: split, swap into tokens & RWAs, add to LP, then send, airdrop, or burn. $INJOH flywheel: 70% of $INJOH trading fees from Pons plus a 1% protocol fee; Burn 40%, Team 20%, PONS Airdrops 15%, NVDA Rewards 15%, PONS Burn 5%, INJOH LP 5%." }
  - { id: R-2, publisher: Sinjoh, title: "@SinjohDeFi profile", url: "https://x.com/SinjohDeFi", published_at: null, accessed_at: 2026-09-02T23:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4], excerpt: "Sinjoh @SinjohDeFi. Bio: The Programmable Capital Layer of Robinhood. CA 0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D. Website http://sinjoh.com. Joined 2026-07-26." }
  - { id: R-3, publisher: DexScreener, title: "INJOH token pairs on Robinhood", url: "https://api.dexscreener.com/latest/dex/tokens/0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D", published_at: null, accessed_at: 2026-09-02T23:20:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-2, CLM-12, CLM-17], excerpt: "Lead Uniswap v3 INJOH/WETH pairAddress 0xB09fa4f04032b9d9e690ac4a1d29523b5f9A72DC labels v3. baseToken Sinjoh/INJOH 0x2cC0…a77D quote WETH 0x0Bd7…AD73. liquidity.usd 197316.65 volume.h24 940940.38 marketCap 2338177 fdv 2338177 pairCreatedAt 1785458438000. info.websites https://www.sinjoh.com/ socials x.com/SinjohDeFi." }
  - { id: R-4, publisher: Blockscout, title: "INJOH token address 0x2cC0…a77D", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D", published_at: null, accessed_at: 2026-09-02T23:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-4, CLM-5, CLM-9, CLM-10], excerpt: "is_contract true, is_verified true, name PonsLauncherToken, creator_address_hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB, creation_transaction_hash 0x987388930e4df074343a216c892e3f0bed72c92dde68be49f7cf71ca4cde488b, proxy_type null, implementations []. Nested token: name Sinjoh symbol INJOH holders_count 2292 total_supply 1000000000000000000000000000." }
  - { id: R-5, publisher: Blockscout, title: "INJOH token object", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D", published_at: null, accessed_at: 2026-09-02T23:15:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-10, CLM-18, CLM-25], excerpt: "address_hash 0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D name Sinjoh symbol INJOH decimals 18 holders_count 2292 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-6, publisher: Blockscout, title: "INJOH creation tx 0x98738893…", url: "https://robinhoodchain.blockscout.com/api/v2/transactions/0x987388930e4df074343a216c892e3f0bed72c92dde68be49f7cf71ca4cde488b", published_at: 2026-07-31T00:40:38Z, accessed_at: 2026-09-02T23:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-5, CLM-11, CLM-14, CLM-15, EVT-7], excerpt: "timestamp 2026-07-31T00:40:38Z block 23753682 status ok method launchPonsToken from 0x3d58E42d3a920dE4C1F71EE041c7eBb82ee23f49 to 0x7E97EadeA120321c65CC09B6FDECc6Eb15D55b2f (eip1167, implementation SinjohFeeRouter 0x17c76…9B64). factory 0xA5aAb3…351feB; params name Sinjoh symbol INJOH twitter https://x.com/SinjohDeFi website https://sinjoh.com/. Uniswap v3 pool 0xB09f…72DC and locker transfer of UNI-V3-POS 517948 in the same tx." }
  - { id: R-7, publisher: Blockscout, title: "INJOH/WETH UniswapV3Pool 0xB09f…72DC", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xB09fa4f04032b9d9e690ac4a1d29523b5f9A72DC", published_at: null, accessed_at: 2026-09-02T23:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-12], excerpt: "is_contract true, is_verified true, name UniswapV3Pool, creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA, creation_transaction_hash 0x987388930e4df074343a216c892e3f0bed72c92dde68be49f7cf71ca4cde488b, proxy_type null." }
  - { id: R-9, publisher: Blockscout, title: "PonsLaunchFactory 0xA5aAb3…351feB", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB", published_at: null, accessed_at: 2026-09-02T23:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-11], excerpt: "is_contract true, is_verified true, name PonsLaunchFactory, creator_address_hash 0xda4bCee76B29EFEc9697Fcf663601c2042043968, proxy_type null." }
  - { id: R-10, publisher: Blockscout, title: "INJOH SinjohFeeRouter clone 0x7E97…5b2f", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x7E97EadeA120321c65CC09B6FDECc6Eb15D55b2f", published_at: null, accessed_at: 2026-09-02T23:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-6, CLM-15], excerpt: "is_contract true, is_verified true, proxy_type eip1167, implementations [{address_hash 0x17c76Ff58b7Da12E116bb22ebDcc7F31Cadf9B64, name SinjohFeeRouter}], creator_address_hash 0xFA51E67f799699A237D558F5FbE7B170F8c5584d, creation_transaction_hash 0x490886a69781ce8362adece371bb73d998aeae8e7f535606d04ec99883bbdd29." }
  - { id: R-11, publisher: Blockscout, title: "SinjohFeeRouter implementation 0x17c76…9B64", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x17c76Ff58b7Da12E116bb22ebDcc7F31Cadf9B64", published_at: null, accessed_at: 2026-09-02T23:16:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-15], excerpt: "is_contract true, is_verified true, name SinjohFeeRouter, creator_address_hash 0x3d58E42d3a920dE4C1F71EE041c7eBb82ee23f49, creation_transaction_hash 0xd7dc8d302de47702c1004355631647260e8a1abb96c42b3e911baf7ddeed253b, proxy_type null." }
  - { id: R-12, publisher: Blockscout, title: "SinjohFeeRouterFactory 0xFA51…584d", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0xFA51E67f799699A237D558F5FbE7B170F8c5584d", published_at: null, accessed_at: 2026-09-02T23:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "is_contract true, is_verified true, name SinjohFeeRouterFactory, creator_address_hash 0x3d58E42d3a920dE4C1F71EE041c7eBb82ee23f49, creation_transaction_hash 0x38fc04e043135c2027f7c1982409ca3ad9f8ab3f650de0d952c106b32da6fa66, proxy_type basic_implementation." }
  - { id: R-13, publisher: Blockscout, title: "SinjohRevenueCollector 0x5Bb7…38c5", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x5Bb7582557F5be30b62c335Ad3ccf4bA79E138c5", published_at: null, accessed_at: 2026-09-02T23:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-14], excerpt: "is_contract true, is_verified true, name SinjohRevenueCollector, creator_address_hash 0x3d58E42d3a920dE4C1F71EE041c7eBb82ee23f49, creation_transaction_hash 0x387b2d49c1504c13fd64ceb8d48fe7bf1ad8c14e5c31d85551d33d994d8f75db, proxy_type null. eth_call owner() 0x39E2f5eFdFd808F26B98979a06BA11ea82E1C85f." }
  - { id: R-14, publisher: Blockscout, title: "Governance key 0x39E2…C85f", url: "https://robinhoodchain.blockscout.com/api/v2/addresses/0x39E2f5eFdFd808F26B98979a06BA11ea82E1C85f", published_at: null, accessed_at: 2026-09-02T23:29:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "is_contract false, is_verified false, creator_address_hash null, creation_transaction_hash null. eth_getCode empty." }
  - { id: R-15, publisher: Sinjoh-Finance, title: "AUDITS.md", url: "https://raw.githubusercontent.com/Sinjoh-Finance/sinjoh-contracts/main/AUDITS.md", published_at: 2026-08-18T00:00:00Z, accessed_at: 2026-09-02T23:25:00Z, kind: repository, authority: independent, authenticity: unconfirmed, supports: [], excerpt: "As of 2026-08-18, Sinjoh has not published an independent third-party security audit covering the complete set of Sinjoh-owned contracts in this repository. The repository includes self-audit records, adversarial tests, invariant tests, fork tests, and deployment provenance evidence. Those materials are useful engineering evidence, but none should be represented as an independent audit." }
  - { id: R-16, publisher: Sinjoh-Finance, title: "mainnet-deployments.json", url: "https://raw.githubusercontent.com/Sinjoh-Finance/sinjoh-contracts/main/mainnet-deployments.json", published_at: null, accessed_at: 2026-09-02T23:25:00Z, kind: repository, authority: independent, authenticity: unconfirmed, supports: [CLM-13, CLM-22], excerpt: "chainId 4663. deployer 0x3d58E42d3a920dE4C1F71EE041c7eBb82ee23f49. governance 0x39E2f5eFdFd808F26B98979a06BA11ea82E1C85f. feeRouterImplementation 0x17c76ff58b7da12e116bb22ebdcc7f31cadf9b64. feeRouterFactory 0xfa51e67f799699a237d558f5fbe7b170f8c5584d. revenueCollector 0x5bb7582557f5be30b62c335ad3ccf4ba79e138c5 owner and processor 0x39E2…; renounceOwnership permanently disabled." }
  - { id: R-17, publisher: "@SinjohDeFi", title: "Introducing Sinjoh", url: "https://x.com/SinjohDeFi/status/2082990355666936036", published_at: 2026-07-31T00:42:55Z, accessed_at: 2026-09-02T23:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-20, CLM-23], excerpt: "Sinjoh is not another Robinhood launchpad. $INJOH is live. Deployed through Sinjoh, launched on Pons: https://www.ponsfamily.com/launchpad/0x2cC0FAC44B8252f6B10208B091aFf2c94B4da77D. Sinjoh takes a 1% protocol fee from every Sinjoh deployment and 70% of $INJOH trading fees. 40% burned, 15% buys $NVDA, 20% $PONS rewards, 5% locked $INJOH liquidity, 20% team. Launch on sinjoh.com. Docs: https://app.sinjoh.com/#docs" }
  - { id: R-18, publisher: "@SinjohDeFi", title: "4.5% INJOH burned and $48k airdropped", url: "https://x.com/SinjohDeFi/status/2094479012416340421", published_at: 2026-08-31T17:34:44Z, accessed_at: 2026-09-02T23:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-25, EVT-4], excerpt: "A quarter million greenbacks worth of $INJOH tokens (over 4.5% of the total supply) has been burned. This is in addition to airdropping over $48,000 in $PONS and $NVDA to token holders." }
  - { id: R-19, publisher: "@SinjohDeFi", title: "Yield Banks goes live later today", url: "https://x.com/SinjohDeFi/status/2094415212753346680", published_at: 2026-08-31T13:21:13Z, accessed_at: 2026-09-02T23:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24, EVT-5], excerpt: "The new Yield Banks protocol goes live later today on the Sinjoh platform. Following up after and showcasing this new tech, we have the launch of the Piggy Banks NFT collection." }
  - { id: R-20, publisher: "@SinjohDeFi", title: "Piggy Banks INJOH snapshot taken", url: "https://x.com/SinjohDeFi/status/2094621079738134804", published_at: 2026-09-01T02:59:16Z, accessed_at: 2026-09-02T23:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24, EVT-3], excerpt: "The $INJOH snapshot for the Piggy Banks NFT whitelist (WL) has officially been taken. The Piggy Banks mint will kick-off tomorrow starting at 11am EDT beginning with Alpha mints, followed by Prime, Premium, and then Standard. The WL will be added to the website shortly!" }
  - { id: R-21, publisher: "@SinjohDeFi", title: "NFT mint postponed for a test bug", url: "https://x.com/SinjohDeFi/status/2095158290455912889", published_at: 2026-09-02T14:33:57Z, accessed_at: 2026-09-02T23:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24, EVT-2], excerpt: "UPDATE: The NFT mint is being postponed for several hours while the team works on fixing a bug that was discovered during the last round of tests. The mint will still happen today. An update will be shared, along with the OpenSea link for the collection, as soon as possible." }
  - { id: R-22, publisher: "@SinjohDeFi", title: "Bug fixed; mint time to follow", url: "https://x.com/SinjohDeFi/status/2095215966363754985", published_at: 2026-09-02T18:23:08Z, accessed_at: 2026-09-02T23:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-24, EVT-1], excerpt: "Bug fixed. Preparing to run final tests. An updated mint time will follow shortly after." }
  - { id: R-23, publisher: "@SinjohDeFi", title: "SAFEHOOD deployed through Sinjoh on Pons", url: "https://x.com/SinjohDeFi/status/2092328737425518895", published_at: 2026-08-25T19:10:19Z, accessed_at: 2026-09-02T23:22:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-21, EVT-6], excerpt: "The @safehoodonrh team used Sinjoh to deploy a token on @ponsdotfamily that uses its creator fees to conduct buybacks and airdrop its holders. Since their launch less than 1 week ago, OVER HALF of the $SAFEHOOD supply has been bought back and airdropped to holders using Sinjoh." }
  - { id: R-24, publisher: DefiLlama, title: "api.llama.fi/protocol/sinjoh", url: "https://api.llama.fi/protocol/sinjoh", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [CLM-26], excerpt: "Protocol not found" }
  - { id: R-27, publisher: Sinjoh, title: "Piggy Banks app page", url: "https://app.sinjoh.com/piggy-banks", published_at: null, accessed_at: 2026-09-02T23:18:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-24], excerpt: "The NFT is the bank. Each Piggy Bank is a collectible NFT with its own onchain treasury. Tiers: Standard 3,000 NFTs 0.01 ETH 1x; Premium 300 0.03 ETH 2.5x; Prime 30 0.1 ETH 7.5x; Alpha 3 0.5 ETH 30x. Burn the NFT and 10,000 $INJOH to receive the bank's eligible holdings. OpenSea link will appear when the collection launches." }

gaps:
  - { priority: P0, question: "What config is stored on INJOH's fee-router clone 0x7E97…5b2f, and which key can change a split after launch?", checked: "owner() on the clone and implementation reverts; site describes a locked route with optional limited wallet changes; clone source is the EIP-1167 shell, 2026-09-02", next: "eth_call the verified SinjohFeeRouter readers (buckets, recipients, paused) on the clone and record setter access" }
  - { priority: P0, question: "Which keys can set the revenue-collector processor and pause routing, and is there a timelock?", checked: "owner() 0x39E2… is an EOA with empty code; GitHub says renounceOwnership permanently disabled; no timelock address in the collector page this pass", next: "read verified SinjohRevenueCollector source for setProcessor / pause and any delay" }
  - { priority: P1, question: "Is github.com/Sinjoh-Finance/sinjoh-contracts linked from an official surface?", checked: "site, X bio, DexScreener token info and constructor socials, 2026-09-02; deployer 0x3d58… and SinjohFeeRouter 0x17c76… match the repo registry", next: "record a site or @SinjohDeFi link if one appears" }
  - { priority: P1, question: "Did the Piggy Banks collection mint, and what is the collection address?", checked: "@SinjohDeFi 2026-09-02 postponed then bug-fixed with no OpenSea URL; app page still says the OpenSea link will appear when the collection launches", next: "watch @SinjohDeFi and app.sinjoh.com/piggy-banks for a collection address and reproduce it on 4663" }
  - { priority: P1, question: "How were posted INJOH burns executed if totalSupply is still 1e27?", checked: "eth_call totalSupply 1e27; project posts 42M / 4.5% burned, 2026-09-02", next: "trace Transfer to 0x000…dead or a named sink from the fee-router clone" }
  - { priority: P2, question: "Is there a DefiLlama adapter / chain-slice TVL for Sinjoh?", checked: "GET api.llama.fi/protocol/sinjoh Protocol not found, 2026-09-02", next: "re-query after any listing; do not treat DexScreener pair liquidity as protocol TVL" }
  - { priority: P2, question: "Is there an official Telegram or Discord?", checked: "constructor socials telegram and discord empty; site fetch this pass named X, app and pad links only", next: "record a handle if the site footer or @SinjohDeFi bio adds one" }
---

# Sinjoh — research packet

## What it is

A fee-routing layer on top of Robinhood Chain launchpads. Creators launch through Sinjoh on Pons, Flap, pools.trade or LetsCash; collected fees hit a per-launch router that splits, swaps, airdrops, burns or adds liquidity on a config locked at deploy. Holders of customer tokens receive those routed assets. INJOH is the protocol token, launched on Pons. sinjoh.com and @SinjohDeFi run the surface.

Themes: launchpad, rwa, stock-paired:NVDA, nft, vault

## Why it matters

Sinjoh sits between several native pads and the tokens those pads mint: creator fees that would otherwise sit with a deployer are claimed into a SinjohFeeRouter clone and pushed into burns, PONS/NVDA airdrops, raffles or LP. INJOH itself is a live Uniswap v3 book against WETH on chain 4663, so the protocol token is already in the same fee machine it sells to other launches. Piggy Banks / Yield Banks would turn that same fee stream into NFT treasuries; that mint was still pending an OpenSea link this pass.

## What could go wrong

Protocol revenue lands in a collector whose owner is a single externally owned account with no timelock reproduced here. Posted INJOH burn percentages are not a drop in ERC-20 totalSupply, which is still 1,000,000,000e18. Fee-router splits for INJOH are site copy until the clone's stored buckets are read. No independent audit report is published. The Piggy Banks collection address is not on the app page.

## Product and mechanics

Creators pick a supported pad and a fee route. At launch, SinjohFeeRouterFactory deploys an EIP-1167 clone; that clone is the fee recipient. Anyone can advance queued steps if keepers lag, per the public explainer the project pinned to its own launch thread. Pads named on the site are Pons (bonding curve), Flap (native-quote tax tokens), pools.trade (Uniswap v4 instant or LBP) and LetsCash. [claim R-1 R-17]

INJOH is a 1,000,000,000-supply PonsLauncherToken created 2026-07-31T00:40:38Z when EOA 0x3d58… called launchPonsToken on clone 0x7E97… against PonsLaunchFactory. The same transaction created Uniswap v3 INJOH/WETH 0xB09f… (1% fee, quote WETH 0x0Bd7…) and sent UNI-V3-POS 517948 to PonsLaunchLocker. Constructor socials are https://x.com/SinjohDeFi and https://sinjoh.com/. [verified R-6 R-7]

Site copy for the INJOH flywheel: 70% of INJOH trading fees from Pons plus a 1% protocol fee on every Sinjoh deployment, then 40% INJOH burn, 20% team, 15% PONS airdrop, 15% NVDA, 5% PONS burn, 5% INJOH LP. That split was not eth_call-decoded from the clone this pass. totalSupply() remains 1e27, so posted 4.5% burns are not an ERC-20 supply reduction. [claim R-1 R-18]

## Control and security

SinjohRevenueCollector 0x5Bb7… is verified source; owner() returns EOA 0x39E2… with empty code. The same EOA is named governance in the unconfirmed GitHub registry, which also says renounceOwnership is permanently disabled. Deployer EOA 0x3d58… created the factory, implementation and collector and sent the INJOH launch transaction. [verified R-13 R-14]

The INJOH router 0x7E97… is an EIP-1167 clone of verified SinjohFeeRouter 0x17c76…, created by verified SinjohFeeRouterFactory 0xFA51…. owner() on clone and implementation reverts, so the live split and any post-deploy setter are unread. GitHub lists quoteSigner 0xd89f… on buyback floors; that key was not eth_call-checked. [verified R-10 R-11]

AUDITS.md in github.com/Sinjoh-Finance/sinjoh-contracts (2026-08-18) states no independent third-party audit of the Sinjoh-owned set. The site and X profile do not link that repository. No DefiLlama audits field exists because there is no protocol row. [unknown]

## Team and provenance

Official identity is bidirectional this pass: @SinjohDeFi bio carries the CA and sinjoh.com; the site links the Pons launchpad page for 0x2cC0… and app.sinjoh.com; DexScreener token info repeats that pair; constructor socials match. Telegram and Discord constructor fields are empty. [verified R-1 R-2 R-3 R-6]

github.com/Sinjoh-Finance/sinjoh-contracts publishes 4663 addresses that match the reproduced deployer, factory, implementation and collector. No official-site or X link to that org was found, so the repository stays unconfirmed. [claim R-16]

## Economics and activity

DexScreener Uniswap v3 INJOH/WETH 0xB09f… this pass: liquidity 197316.65 USD, volume.h24 940940.38 USD, marketCap 2338177 USD. That is the token book. Blockscout holders_count 2292. totalSupply 1,000,000,000e18. [claim R-3 R-5]

No DefiLlama protocol/sinjoh row. Pair liquidity is not protocol TVL. Project posts of $48,000 PONS+NVDA airdropped and 4.5% INJOH burned are official claims, not summed from logs here. [claim R-18 R-24]

## Material risks

- Revenue collector owner is one EOA (0x39E2…) with no timelock reproduced. [verified R-13 R-14]

- INJOH fee-router clone config and post-deploy setters were not read; owner() reverts. [verified R-10]

- Posted INJOH burns do not reduce totalSupply(), which is still 1e27. [verified R-5]

- No independent audit report of the deployed Sinjoh set. [unknown]

- Piggy Banks collection address and mint completion are unpublished after a 2026-09-02 postpone. [claim R-21 R-27]

## Verification passes

- Receipts: site, app piggy-banks page, X profile and named status URLs, DexScreener token API, DefiLlama protocol/sinjoh (404), GitHub AUDITS.md and mainnet-deployments.json, and Blockscout address/tx/token APIs plus RPC eth_getCode/eth_call were opened on 2026-09-02; excerpts are copied from those responses. [verified R-1 R-4 R-6 R-3]

- Numbers: volume 940940.38 and marketCap 2338177 are the Uniswap v3 INJOH/WETH pair slice, not all INJOH pairs and not protocol TVL. holders 2292 and totalSupply 1e27 are Blockscout/RPC token fields. Project $48k airdrop and 4.5% burn figures are posts. [claim R-3 R-5 R-18]

- Adversarial: the strongest contrary reading is that Sinjoh is a Pons clone, the census Safehood pad, or still announced because the 2026-08-31 census row used only project posts. The launch tx is launchPonsToken from a SinjohFeeRouter clone; Pons is the factory, not the router. $SAFEHOOD is a customer CA, not safehood.fun. Token, pair and router exist on 4663 with verified source. [inference R-6 R-10 R-23]

## Operations log

- Read content/census.yaml sinjoh row, content/projects/sinjoh.yaml, content/pulled/sinjoh.yaml, content/feed/sinjoh.yaml, content/sources/sinjoh.yaml, content/changelog/sinjoh.yaml, content/accounts.yaml @SinjohDeFi, docs/templates/research-packet-v2.md, schema/packet.schema.json.

- Opened https://www.sinjoh.com/, https://app.sinjoh.com/, https://app.sinjoh.com/piggy-banks.

- GET Blockscout /api/v2/addresses for INJOH, pair, PonsLaunchFactory, fee-router clone, implementation, factory, revenue collector, governance EOA; /api/v2/tokens for INJOH; /api/v2/smart-contracts for INJOH; /api/v2/transactions for 0x98738893….

- POST rpc.mainnet.chain.robinhood.com (User-Agent required; urllib 403 without it) eth_chainId 0x1237; eth_getCode on token, pair, Pons factory, clone, implementation, factory, collector, governance, deployer; eth_call name/symbol/decimals/totalSupply/owner/deployer on token; token0/token1/fee/factory on pair; owner() on collector, clone, implementation.

- GET api.dexscreener.com/latest/dex/tokens/0x2cC0…; GET api.llama.fi/protocol/sinjoh (Protocol not found).

- GET raw.githubusercontent.com/Sinjoh-Finance/sinjoh-contracts/main/AUDITS.md and mainnet-deployments.json; GitHub repo page.

- X Latest from:SinjohDeFi; keyword SAFEHOOD, airdrop/burn/Yield Banks; intro status 2082990355666936036.

- Time on this slug: one collector pass.
