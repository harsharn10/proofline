---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: incel
name: INCEL
packet_tier: seed
as_of: 2026-09-03T04:26:00Z
prior_packet: null
supersedes: null
owned_slugs: [incel]
allowed_paths:
  - research/inbox/packets/incel/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: INCEL
  aliases: ["Incel Inside"]
  symbols: [INCEL]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://incelinside.com
  official_handle: "NULL — DexScreener info.socials x.com/incelrh; incelinside.com footer links https://x.com/incelrh; @incelrh bio pins CA 0x12d834…1E18 and $INTC via @longdotxyz without naming incelinside.com; Gecko twitter_handle null; X user search INCEL returned unrelated handles; flag unconfirmed-official | handle-collision"
  repository: "NULL — no GitHub org or repository URL on incelinside.com, DexScreener, Gecko, Blockscout, IPFS social_links, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-address]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "INCEL is a graduation token at 0x12d834…1E18 created through that LongLauncher.create into an INCEL/INTC book"
        - "incelinside.com Buy links go to app.long.xyz/tokens/0x12d834…; the site does not operate the LONG pad"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot using the same DopplerERC20V1Factory 0x1B37…b69a and Airlock 0xeb7C…0862"
        - "INCEL create tx 0xbfc332…fc96 is LongLauncher.create from EOA 0x37e771…0DfB, not a Bankr EntryPoint row; GET api.bankr.bot/token-launches?limit=50 had 0 INCEL hits"
        - "Gecko labels the pool dex bankr-robinhood because the book uses DopplerHookInitializer, not because Bankr minted it"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "A separate PonsLauncherToken at 0xb93d…0E41 is also named Incel Inside / INCEL with holders_count 7; it is not the DexScreener INCEL/INTC book"
        - "Canonical INCEL 0x12d834…1E18 is a DopplerERC20V1 clone via LongLauncher, not Pons"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "INCEL is ticker INCEL at 0x12d834…1E18 paired to INTC 0xc72b…9681"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x12d834…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; owner() is Airlock 0xeb7C…0862; LongLauncher.create at 2026-07-22T13:20:04Z minted Incel Inside / INCEL into Uniswap v4 pool 0x11de…aef0 quoted against INTC 0xc72b…9681, which GET rhj/assets lists as Intel • Robinhood Token. INTC is the quote rail. Site incelinside.com displays the CA. No bidirectional official handle this pass. [R-1] [R-4] [R-5] [R-8] [R-11] [R-18]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://incelinside.com", authenticity: confirmed }
  - { kind: x, url: "https://x.com/incelrh", authenticity: unconfirmed }
  - { kind: app, url: "https://app.long.xyz/tokens/0x12d834f0780c367909319c73f42310dc0b201e18", authenticity: unconfirmed }

deployments:
  - label: INCEL token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x12d834F0780c367909319c73f42310Dc0b201E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-4]
  - label: DopplerERC20V1 implementation
    role: implementation
    address:
      value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory (create tokenFactory)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: LongLauncher (create() target)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-13]
  - label: Airlock (token owner())
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:25:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-14]
  - label: INTC Intel • Robinhood Token (pair quote / numeraire)
    role: token
    address:
      value: "0xc72b96e0E48ecd4DC75E1e45396e26300BC39681"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-11, R-12]

metrics:
  - { kind: volume_24h, value: 462081.70, currency: USD, as_of: 2026-09-03T04:25:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x11de7647f85f5772f09a2f81872e12993de0ea4fdb3b9df2302ef4da85e6aef0 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 260739.34, currency: USD, as_of: 2026-09-03T04:25:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x11de7647f85f5772f09a2f81872e12993de0ea4fdb3b9df2302ef4da85e6aef0 reserve_in_usd (INCEL/INTC pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 804587.25, currency: USD, as_of: 2026-09-03T04:25:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x11de7647f85f5772f09a2f81872e12993de0ea4fdb3b9df2302ef4da85e6aef0 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 759, currency: null, as_of: 2026-09-03T04:22:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x12d834F0780c367909319c73f42310Dc0b201E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:25:00Z, receipt_ids: [R-5, R-6], result: "eth_blockNumber 0x32ac3db (53134299). Token 0x12d834…1E18 eth_getCode 44 bytes EIP-1167 impl 0x3be8b97f…c599. name Incel Inside, symbol INCEL, decimals 18, totalSupply 992030772001344029565566192. owner() Airlock 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. isPoolLocked true. pool() 0xdead…dead. controller() zero. tokenURI ipfs://bafkreibeok3mky2bdyuidgc2e4akarfyulr3bxukxgn3ank5a266mech3i. vestingStart 1784726404. Airlock code 5695 B; factory 1912 B; impl 13927 B; LongLauncher 5826 B. Launcher EOA 0x37e771…0DfB code 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-12, R-13, R-14, R-15], result: "Blockscout api/v2 token 0x12d834…1E18 name Incel Inside symbol INCEL holders_count 759 total_supply 992030772001344029565566192 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true. Address creator_address_hash DopplerERC20V1Factory 0x1B37…b69a creation tx 0xbfc332…fc96. create tx 2026-07-22T13:20:04Z block 16456235 from EOA 0x37e771…0DfB to LongLauncher 0x22e9…eeED method create. LaunchCreated normalizedTicker INCEL numeraire INTC 0xc72b…9681 launcher 0x37e771…0DfB poolId 0x11de…aef0. INTC BeaconProxy name Intel • Robinhood Token." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:25:00Z, receipt_ids: [R-7, R-8, R-9, R-10], result: "DexScreener 4 robinhood uniswap pairs; top INCEL/INTC v4 0x11de…aef0 quote 0xc72b…9681 INTC liquidity.usd 216898.35 volume.h24 493022.97 fdv/marketCap 759153 pairCreatedAt 1784726404000 info.websites incelinside.com and app.long.xyz/tokens/0x12d834… info.socials x.com/incelrh. Gecko pool name INCEL / INTC dex bankr-robinhood volume_usd.h24 462081.70 reserve_in_usd 260739.34 fdv_usd 804587.25 pool_created_at 2026-07-22T13:20:04Z. Gecko token volume_usd.h24 487324.12 (all pools). Gecko token info websites [] twitter_handle null." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:25:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; INTC hit tokenName Intel • Robinhood Token deployments contractAddress 0xc72b96e0E48ecd4DC75E1e45396e26300BC39681 chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:25:00Z, receipt_ids: [R-4, R-6, R-15], result: "Create tx logs: OwnershipTransferred to Airlock; mint 1e27 to Airlock; PoolManager Initialize id 0x11de…aef0 currency0 INCEL currency1 INTC hooks DopplerHookInitializer 0x4e34…a544; Lock beneficiaries 95% launcher 0x37e771…0DfB and 5% 0xEDeAa0…eDa8; Airlock Create asset INCEL numeraire INTC. LaunchCreated ticker INCEL deployedAt 1784726404. Airlock owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T04:25:00Z, receipt_ids: [R-18, R-7], result: "GET https://incelinside.com/ HTTP 200 title Incel Inside. Visible contract address 0x12d834F0780c367909319c73f42310Dc0b201E18. Footer and CTAs href https://x.com/incelrh. Buy links href app.long.xyz/tokens/0x12d834… and DexScreener pool 0x11de…aef0. No t.me href. @incelrh bio has the CA and $INTC via @longdotxyz and does not name incelinside.com this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create forwards an Airlock/Doppler launch: EIP-1167 DopplerERC20V1 clone, 1e9*1e18 initial supply, Uniswap v4 pool quoted against factory numeraire INTC, LP locked (isPoolLocked true; pool() 0xdead). Tx 0xbfc332…fc96 from 0x37e771…0DfB minted Incel Inside / INCEL as normalizedTicker INCEL.", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-4, R-5, R-6, R-15], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Incel Inside", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "INCEL", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x12d834F0780c367909319c73f42310Dc0b201E18", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-7, R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener lists x.com/incelrh; incelinside.com links @incelrh; @incelrh bio has the CA and $INTC via @longdotxyz without the site; Gecko twitter_handle null; flag unconfirmed-official | handle-collision", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-7, R-10, R-17, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote INTC 0xc72b…9681 is Intel • Robinhood Token in GET rhj/assets (194 assets). INTC is the quote rail, not an INCEL issuer. Create path is LongLauncher, not Pons. Gecko dex id bankr-robinhood is the Doppler hook book; Bankr API latest 50 had no INCEL. Distinct from census Artificial Inu ($AI/NVDA) and from PonsLauncherToken Incel Inside 0xb93d…0E41.", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-4, R-11, R-12, R-21, R-23], reproduction_ids: [REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "INCEL/INTC Uniswap v4 24h volume 462081.70 USD and reserve_in_usd 260739.34 at 2026-09-03T04:25:00Z (Gecko pool slice, not Gecko token all-pools 487324.12)", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 216898.35 volume.h24 493022.97 fdv/marketCap 759153 at 2026-09-03T04:24:00Z", class: verified, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 759, class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862; Airlock owner() 0x21E2ce70511e4FE542a97708e89520471DAa7A66. Launcher 0x37e771…0DfB has no code.", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-5, R-6, R-14], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "LaunchCreated launcher 0x37e77146f0594d630FC60C8C6B1DA0962f150DfB equals IPFS fee_receiver; DopplerHookInitializer Lock beneficiaries 95% that launcher and 5% 0xEDeAa06E2eB42A5c19ce27c6cfFb36fd4fE1eDa8 (not the Airlock owner).", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-4, R-15, R-16], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is INTC 0xc72b96e0E48ecd4DC75E1e45396e26300BC39681; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x11de…aef0; hooks DopplerHookInitializer 0x4e34…a544", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-4, R-7, R-8, R-15], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token address creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; create() target is LongLauncher 0x22e9…eeED, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-3, R-4, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, incelinside.com, tokenURI IPFS, or X search this pass", class: unknown, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener socials x.com/incelrh; incelinside.com links that handle and the CA; bio pins CA 0x12d834…1E18 without the site. Flag third-party-link and copypasta-pattern on netlify claim/vote URLs that embed the CA.", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-7, R-17, R-18, R-20, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 804587.25; DexScreener fdv/marketCap 759153. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xc72b96e0E48ecd4DC75E1e45396e26300BC39681", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://incelinside.com — title Incel Inside; page displays CA 0x12d834…1E18; DexScreener info.websites includes it; Gecko token info websites []", class: verified, observed_at: 2026-09-03T04:25:00Z, receipt_ids: [R-7, R-10, R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-24, field: candidate, value: "incel | INCEL | NULL | incelinside.com — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-1, R-7, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Ticker collision: Blockscout search lists many INCEL-named tokens including PonsLauncherToken Incel Inside 0xb93d…0E41 (holders_count 7). Canonical book is 0x12d834…1E18 / INTC. Flag ca-collision.", class: claim, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-21], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko INCEL/INTC 24h volume $462k, reserve $261k"
    summary: "Gecko pool 0x11de…aef0 volume_usd.h24 462082 reserve_in_usd 260739 fdv_usd 804587. DexScreener same pair liquidity.usd 216898 volume.h24 493023."
    occurred_at: 2026-09-03T04:25:00Z
    observed_at: 2026-09-03T04:25:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8, R-7]
  - id: EVT-2
    type: ct
    title: "Third-party posts pushed netlify claim URLs for $INCEL"
    summary: "@imichaelburger_ posted CA 0x12d834…1E18 with crypto-8xe.netlify.app/claim. Same CA appeared on other crypto-*.netlify.app claim URLs. Flag copypasta-pattern."
    occurred_at: 2026-09-02T22:27:33Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-3
    type: ct
    title: "@ghostdotenv called $INCEL an original @longdotxyz ticker"
    summary: "Post named $INCEL with @incelrh, $INTC rail, and $AI as originals on @longdotxyz."
    occurred_at: 2026-09-01T21:32:11Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-4
    type: ct
    title: "@incelrh posted Never doubt yourself $incel"
    summary: "Account whose bio pins 0x12d834…1E18 and $INTC via @longdotxyz posted Never doubt yourself. $incel."
    occurred_at: 2026-09-02T22:57:06Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: onchain
    title: "LongLauncher.create minted Incel Inside / INCEL against INTC"
    summary: "Tx 0xbfc332…fc96 from 0x37e771…0DfB at 2026-07-22T13:20:04Z; LaunchCreated ticker INCEL pool 0x11de…aef0."
    occurred_at: 2026-07-22T13:20:04Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-15]
  - id: EVT-6
    type: ct
    title: "Third-party post pushed a netlify vote URL for $INCEL"
    summary: "@pearltideaiNFT posted robinhood-main-dex-nqf.netlify.app/vote/0x12d834…1E18 as a Robinhood Top 100 vote. Flag copypasta-pattern | third-party-link."
    occurred_at: 2026-09-03T01:25:00Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-24]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x12d834…1E18 Incel Inside / INCEL", url: "https://robinhoodchain.blockscout.com/address/0x12d834F0780c367909319c73f42310Dc0b201E18", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x12d834F0780c367909319c73f42310Dc0b201E18 name Incel Inside is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol INCEL decimals 18 total_supply 992030772001344029565566192 holders_count 759 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "LongLauncher create tx 0xbfc332f4…fc96", url: "https://robinhoodchain.blockscout.com/tx/0xbfc332f4f7a356926be2ea804bf72e35b6a941796200dd0e79f5eb9704adfc96", published_at: 2026-07-22T13:20:04Z, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-6, CLM-14, CLM-16, EVT-5], excerpt: "timestamp 2026-07-22T13:20:04.000000Z status ok result success block_number 16456235 from 0x37e77146f0594d630FC60C8C6B1DA0962f150DfB (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data tokenFactory 0x1B37…b69a numeraire 0xc72b…9681 name Incel Inside symbol INCEL." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on INCEL", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32ac3db (53134299). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name Incel Inside symbol INCEL decimals 18 totalSupply 992030772001344029565566192. owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. Impl code 13927 B. Factory code 1912 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "isPoolLocked, pool(), tokenURI, Airlock owner()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-9, CLM-13, CLM-21], excerpt: "isPoolLocked true. pool() 0xdeaddeaddeaddeaddeaddeaddeaddeaddeaddead. controller() zero. tokenURI ipfs://bafkreibeok3mky2bdyuidgc2e4akarfyulr3bxukxgn3ank5a266mech3i. vestingStart 1784726404. Airlock 0xeb7C…0862 owner() 0x21e2ce70511e4fe542a97708e89520471daa7a66 code 5695 B. Launcher 0x37e771…0DfB code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens INCEL", url: "https://api.dexscreener.com/latest/dex/tokens/0x12d834F0780c367909319c73f42310Dc0b201E18", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "4 robinhood uniswap pairs. Top pairAddress 0x11de7647f85f5772f09a2f81872e12993de0ea4fdb3b9df2302ef4da85e6aef0 labels v4 base Incel Inside / INCEL quote Intel • Robinhood Token / INTC 0xc72b96e0…9681 liquidity.usd 216898.35 volume.h24 493022.97 fdv 759153 marketCap 759153 pairCreatedAt 1784726404000. info.websites incelinside.com info.socials x.com/incelrh." }
  - { id: R-8, publisher: GeckoTerminal, title: "INCEL/INTC pool (dex bankr-robinhood)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x11de7647f85f5772f09a2f81872e12993de0ea4fdb3b9df2302ef4da85e6aef0", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name INCEL / INTC pool_created_at 2026-07-22T13:20:04Z fdv_usd 804587.251 market_cap_usd null volume_usd.h24 462081.704160717 reserve_in_usd 260739.3384 transactions.h24 buys 562 sells 945. dex bankr-robinhood quote robinhood_0xc72b96e0e48ecd4dc75e1e45396e26300bc39681." }
  - { id: R-9, publisher: GeckoTerminal, title: "Incel Inside token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x12d834F0780c367909319c73f42310Dc0b201E18", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name Incel Inside symbol INCEL decimals 18 total_supply 1e27 price_usd 0.000804587251 fdv_usd 804587.250956878 market_cap_usd null volume_usd.h24 487324.118923605 total_reserve_in_usd 165037.17. coingecko_coin_id null. Top pool 0x11de…aef0." }
  - { id: R-10, publisher: GeckoTerminal, title: "INCEL token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x12d834F0780c367909319c73f42310Dc0b201E18/info", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-23], excerpt: "websites [] twitter_handle null telegram_handle null description null gt_verified false categories []. holders.count 713 last_updated 2026-09-03T03:27:42Z." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets INTC Stock Token", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. INTC tokenName Intel • Robinhood Token deployments contractAddress 0xc72b96e0E48ecd4DC75E1e45396e26300BC39681 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE." }
  - { id: R-12, publisher: Blockscout, title: "Token 0xc72b…9681 Intel • Robinhood Token / INTC", url: "https://robinhoodchain.blockscout.com/address/0xc72b96e0E48ecd4DC75E1e45396e26300BC39681", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xc72b96e0E48ecd4DC75E1e45396e26300BC39681 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name Intel • Robinhood Token symbol INTC decimals 18 holders_count 24609." }
  - { id: R-13, publisher: Blockscout, title: "LongLauncher 0x22e9…eeED", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-16], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305. file_path src/LongLauncher.sol compiler v0.8.26. RPC eth_getCode 5826 B." }
  - { id: R-14, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true file_path src/Airlock.sol compiler v0.8.26 is_partially_verified true verified_at 2026-07-01T19:41:17Z." }
  - { id: R-15, publisher: Blockscout, title: "LaunchCreated / Initialize / Lock logs on create tx", url: "https://robinhoodchain.blockscout.com/tx/0xbfc332f4f7a356926be2ea804bf72e35b6a941796200dd0e79f5eb9704adfc96", published_at: 2026-07-22T13:20:04Z, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-15, EVT-5], excerpt: "LaunchCreated asset 0x12d834…1E18 numeraire 0xc72b…9681 launcher 0x37e771…0DfB normalizedTicker INCEL deployedAt 1784726404. PoolManager Initialize id 0x11de…aef0 hooks 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544. Lock beneficiaries 95% 0x37e771…0DfB 5% 0xEDeAa0…eDa8." }
  - { id: R-16, publisher: IPFS, title: "tokenURI metadata bafkreibeok3mky2bdyuidgc2e4akarfyulr3bxukxgn3ank5a266mech3i", url: "https://gateway.pinata.cloud/ipfs/bafkreibeok3mky2bdyuidgc2e4akarfyulr3bxukxgn3ank5a266mech3i", published_at: null, accessed_at: 2026-09-03T04:24:00Z, kind: other, authority: onchain, authenticity: unconfirmed, supports: [CLM-14], excerpt: "name Incel Inside description Built for performance. Never leaves the room. social_links [] fee_receiver 0x37e77146f0594d630FC60C8C6B1DA0962f150DfB vesting_recipients amount 0 categories []." }
  - { id: R-17, publisher: "@incelrh", title: "Never doubt yourself $incel", url: "https://x.com/incelrh/status/2095284911464919503", published_at: 2026-09-02T22:57:06Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-4], excerpt: "Bio: Built for performance. Never leaves the room. Paired with $INTC @intel via @longdotxyz 0x12d834f0780c367909319c73f42310dc0b201e18. Post: Never doubt yourself. $incel" }
  - { id: R-18, publisher: Incel Inside, title: "incelinside.com homepage", url: "https://incelinside.com/", published_at: null, accessed_at: 2026-09-03T04:25:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23, CLM-24], excerpt: "HTTP 200. title Incel Inside. meta description $INCEL — the RWA × meme token on Robinhood Chain. Built for performance. Never leaves the room. code#addr 0x12d834F0780c367909319c73f42310Dc0b201E18. href https://x.com/incelrh and app.long.xyz/tokens/0x12d834…. No t.me." }
  - { id: R-19, publisher: "@ghostdotenv", title: "The other avenger is $INCEL", url: "https://x.com/ghostdotenv/status/2094901156699070854", published_at: 2026-09-01T21:32:11Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "The other avenger is $INCEL btw. @incelrh, TLDR here’s why: $INTC -> directly owned by the trump administration. $INCEL -> OG meme on @longdotxyz one of the first to have community vault. If I was to call the avengers. It’s $MOO, $INCEL & $AI The originals." }
  - { id: R-20, publisher: "@imichaelburger_", title: "$INCEL had an event live claim URL", url: "https://x.com/imichaelburger_/status/2095277476171641232", published_at: 2026-09-02T22:27:33Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-2], excerpt: "woke up and $INCEL had an event live claimed some $$$ already CA: 0x12d834F0780c367909319c73f42310Dc0b201E18 crypto-8xe.netlify.app/claim?contract=0x12d834F078… Flag copypasta-pattern." }
  - { id: R-21, publisher: Blockscout, title: "PonsLauncherToken Incel Inside 0xb93d…0E41", url: "https://robinhoodchain.blockscout.com/address/0xb93dD21cFA8cca422804A28eEE1b1869Da170E41", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0xb93dD21cFA8cca422804A28eEE1b1869Da170E41 name PonsLauncherToken is_contract true is_verified true. token name Incel Inside symbol INCEL holders_count 7 total_supply 1e27 creator_address_hash 0xA5aAb3F0c6EeadF30Ef1D3Eb997108E976351feB. Distinct from Doppler clone 0x12d834…1E18." }
  - { id: R-22, publisher: Blockscout, title: "DopplerHookInitializer 0x4e34…a544", url: "https://robinhoodchain.blockscout.com/address/0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 name DopplerHookInitializer is_contract true is_verified true." }
  - { id: R-23, publisher: Bankr, title: "GET token-launches latest 50", url: "https://api.bankr.bot/token-launches?limit=50", published_at: null, accessed_at: 2026-09-03T04:26:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "HTTP 200. launches length 50. Scan for INCEL and 0x12d834 returned 0 hits. Sample chains base and robinhood. 13 robinhood rows this page, none INCEL." }
  - { id: R-24, publisher: "@pearltideaiNFT", title: "$INCEL Robinhood Top 100 vote URL", url: "https://x.com/pearltideaiNFT/status/2095322133723246817", published_at: 2026-09-03T01:25:00Z, accessed_at: 2026-09-03T04:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-6], excerpt: "Attention $INCEL Family! YOUR vote matters! Less than 100 votes are needed to list $INCEL on the Robinhood Top 100 Leaderboard. Listing ID: 2688 robinhood-main-dex-nqf.netlify.app/vote/0x12d834F0780c367909319c73f42310Dc0b201E18 Flag copypasta-pattern | third-party-link." }

gaps:
  - { priority: P0, question: "Does @incelrh later name incelinside.com so the handle and site are bidirectional?", checked: "incelinside.com links x.com/incelrh and displays CA 0x12d834…1E18; @incelrh bio pins the CA and $INTC via @longdotxyz without the site; Gecko twitter_handle null, 2026-09-03", next: "re-read @incelrh bio and incelinside.com footer after a profile edit" }
  - { priority: P1, question: "Does the launcher EOA 0x37e771…0DfB map to a public handle?", checked: "create from and IPFS fee_receiver are that EOA with eth_getCode 0x; @incelrh bio has CA not the EOA, 2026-09-03", next: "trace the EOA on Blockscout and any post that embeds 0x37e771…0DfB" }
  - { priority: P1, question: "Should Gecko dex bankr-robinhood be treated as Bankr-minted or as Doppler-hook taxonomy?", checked: "create tx is LongLauncher; Bankr token-launches latest 50 had 0 INCEL; pool relationship.dex bankr-robinhood; hooks DopplerHookInitializer, 2026-09-03", next: "compare hook 0x4e34…a544 against a known Bankr launch and a known LONG launch" }
  - { priority: P2, question: "Which of the Blockscout INCEL-named tokens besides 0x12d834…1E18 share the INCEL/INTC book?", checked: "PonsLauncherToken Incel Inside 0xb93d…0E41 has 7 holders and is a different factory; DexScreener top pair is 0x12d834…1E18 / INTC, 2026-09-03", next: "keep ca-collision on any new same-ticker 4663 deploy" }
---

# INCEL — research packet

## What it is

A one-billion-initial-supply ERC-20 cloned into a Uniswap v4 pool quoted against INTC. LongLauncher.create from 0x37e771…0DfB minted Incel Inside (INCEL) on 2026-07-22T13:20:04Z into pool 0x11de…aef0 via DopplerERC20V1Factory and Airlock. Traders buy and sell INCEL against the Intel Robinhood Token. incelinside.com displays the CA. DexScreener lists @incelrh without a bidirectional official-crosslink from the handle back to the site.

Themes: memecoin, stock-paired:INTC, rwa

## Why it matters

The INCEL/INTC Uniswap v4 book printed about $462k of 24h volume on Gecko at collection, with the quote token the Intel Robinhood Token in GET /rhj/assets. INTC is the rail, not an INCEL product. Gecko labels the pool Bankr (Robinhood) because the hook is DopplerHookInitializer; the create transaction is LongLauncher, not a Bankr API row.

## What could go wrong

USD liquidity figures on the INCEL/INTC book count both sides, and the quote side is INTC, not USDG. Many same-ticker INCEL tokens exist on 4663, including PonsLauncherToken Incel Inside 0xb93d…0E41. @incelrh is unconfirmed-official. Netlify claim and vote URLs that embed the CA are third-party-link / copypasta-pattern.

## Product and mechanics

LongLauncher 0x22e9…eeED create() from 0x37e771…0DfB at 2026-07-22T13:20:04Z minted Incel Inside / INCEL supply 1e9*1e18 into Uniswap v4 poolId 0x11de…aef0 quoted against INTC. Token is an EIP-1167 clone of DopplerERC20V1 0x3Be8…C599. owner() is Airlock. isPoolLocked true and pool() is 0xdead. Live totalSupply is 992030772001344029565566192. [verified R-4 R-5 R-6 R-15]

Secondary INCEL/USDG and INCEL/ETH books exist on DexScreener with far less liquidity than the INTC book. Gecko dex id is bankr-robinhood; DexScreener labels the same pair uniswap v4. [verified R-7 R-8]

## Control and security

token owner() is Airlock 0xeb7C…0862. Airlock owner() is 0x21E2…7A66. Launcher 0x37e771…0DfB has no code and receives 95% of the DopplerHookInitializer Lock split; 5% goes to 0xEDeAa0…eDa8, not the Airlock owner. [verified R-6 R-15]

DopplerERC20V1, DopplerERC20V1Factory, Airlock, LongLauncher, and DopplerHookInitializer are verified on Blockscout (compiler v0.8.26; several are partially verified). No audit report URL was located this pass. [verified R-2 R-3 R-13 R-14 R-22] [unknown]

## Team and provenance

incelinside.com titles Incel Inside, displays CA 0x12d834…1E18, and links @incelrh plus app.long.xyz. DexScreener info.websites matches. Gecko token info websites [] and twitter_handle null. @incelrh bio pins the CA and $INTC via @longdotxyz without naming the site. Flag unconfirmed-official. tokenURI IPFS social_links is empty; fee_receiver is the launcher EOA. [claim R-7 R-10 R-16 R-17 R-18]

## Economics and activity

INCEL/INTC Uniswap v4 24h volume is 462081.70 USD and reserve_in_usd is 260739.34 at 2026-09-03T04:25:00Z from the Gecko pool endpoint. fdv_usd is 804587.25. Gecko token volume_usd.h24 is 487324.12 across all pools, not the INTC book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 216898.35, volume.h24 493022.97, fdv/marketCap 759153. Blockscout holders_count 759. Pair created 2026-07-22T13:20:04Z. [claim R-1 R-7]

## Material risks

- Quote token INTC 0xc72b…9681 is a Robinhood Stock Token rail in GET /rhj/assets; pool USD reserve is INCEL plus INTC, not a USDG backstop. [verified R-11 R-12]
- Gecko dex label bankr-robinhood can be read as a Bankr mint; the create tx is LongLauncher. [verified R-4 R-8 R-23]
- @incelrh is unconfirmed-official; the handle does not name incelinside.com this pass. [claim R-17 R-18]
- Same-ticker clones including PonsLauncherToken Incel Inside 0xb93d…0E41. Flag ca-collision. [claim R-21]
- Netlify claim and vote URLs that embed the CA. Flag copypasta-pattern | third-party-link. [claim R-20 R-24]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/LongLauncher/Airlock/INTC and create tx 0xbfc332…fc96, RPC name/symbol/owner/isPoolLocked/tokenURI, DexScreener, Gecko pool/token/info, /rhj/assets, IPFS tokenURI, incelinside.com, @incelrh, @ghostdotenv, Bankr launches, the Pons same-name token, and the netlify claim/vote posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-11 R-18]
- Numbers: 462081.70 is the Gecko INCEL/INTC pool 24h volume, not the 487324.12 token all-pools figure. Reserve 260739.34 is that pool. DexScreener 493022.97 / 216898.35 is the same pair, different aggregator. Live RPC totalSupply is 9.920e26, not Gecko token 1e27. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that INCEL is a Bankr-official or Intel-official product. Create is LongLauncher, Bankr API latest 50 has no row, INTC is the rhj/assets rail, and the site is incelinside.com not intel.com. [inference R-4 R-11 R-18 R-23]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no incel / INCEL / Incel Inside / 0x12d834…1E18. content/dependencies/stock-tokens.yaml INTC is 0xc72b96e0…9681.
- Explorer: Blockscout api/v2 search INCEL, token, impl, factory, LongLauncher, Airlock, INTC, create tx 0xbfc332…fc96, LaunchCreated/Initialize/Lock logs, holders, PonsLauncherToken 0xb93d…0E41. RPC eth_getCode/eth_call with Chrome UA at block 53134299.
- Aggregators: DexScreener latest/dex/tokens; Gecko first GET pool HTTP 200 then token and token/info; Bankr token-launches?limit=50.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, INTC active at 0xc72b…9681.
- Social: X keyword $INCEL / 0x12d834… / from:incelrh Latest; user search INCEL and Incel Inside; incelinside.com homepage.
- Failed: app.long.xyz/tokens/0x12d834… HTTP 403 Cloudflare HTML; ipfs.io gateway 403 (Pinata 200); Gecko token info twitter_handle null and websites []; Bankr latest 50 had 0 INCEL; @incelrh bio does not name incelinside.com.
- Time: collection 2026-09-03T04:21Z–2026-09-03T04:26Z.
