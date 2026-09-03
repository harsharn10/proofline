---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: appleseed
name: Appleseed
packet_tier: seed
as_of: 2026-09-03T05:15:00Z
prior_packet: null
supersedes: null
owned_slugs: [appleseed]
allowed_paths:
  - research/inbox/packets/appleseed/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: John Appleseed
  aliases: [Appleseed]
  symbols: [Appleseed]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites is an Apple Discussions thread; Gecko token attributes have no website; launch socials website empty this pass"
  official_handle: "NULL — launch socials twitter is a tweet URL not a profile; DexScreener socials is another tweet URL; X user search returned unrelated handles; flag unconfirmed-official | third-party-link"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: ap
      signals: [shared-address]
      contrary_signals:
        - "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 is the Apple • Robinhood Token (AAPL) the pair is quoted in; the census AP row carries it as the quote side of its own Uniswap link, and this name did not deploy it"
        - "John Appleseed is the token launched against that quote asset; the two share no handle or domain"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily, a bonding-curve pad, entity_kind protocol"
        - "Appleseed is a Pons v2 graduation token; entity_kind token, not the pad"
        - "No shared handle or domain"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "Appleseed creation tx calls PonsV2LaunchAndBuy.launchAndBuy, not LongLauncher.create"
        - "No shared handle or domain"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "Appleseed is 0xF8b22322…B0e3 paired to AAPL 0xaF3D…93f9 via Pons v2"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xF8b22322…B0e3 is a fully verified PonsV2LauncherToken with non-empty code on 4663; PonsV2LaunchAndBuy.launchAndBuy at 2026-09-03T02:31:54Z minted John Appleseed / Appleseed onto a bonding curve quoted against Apple • Robinhood Token AAPL 0xaF3D…93f9; CurveCompleted / LaunchSwept ~72s later seeded Uniswap v4 pool 0x67bc6687…fc46. AAPL is the quote rail. Distinct from packed ICOIN, AP/AAPL 0x69c68e4C…1e18, packed AAPLCAT, and packed AAPLDOG. [R-1] [R-4] [R-5] [R-6] [R-7] [R-8] [R-16]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: other, url: "https://x.com/Esotericgul/status/2095338962977968219", authenticity: unconfirmed }

deployments:
  - label: Appleseed token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: PonsV2LaunchDeployer (token creator)
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-15]
  - label: Pons v2 bonding curve (create-tx clone)
    role: other
    address:
      value: "0x261ae32F5787983a5fEd1828485cA24f58FB391f"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:11:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-5, R-6, R-16]
  - label: PonsV2LaunchAndBuy (create tx to)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:07:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-14]
  - label: V2LaunchLocker (top holder after PoolManager)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1]
metrics:
  - { kind: volume_24h, value: 599435.79, currency: USD, as_of: 2026-09-03T05:08:32Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3 pair 0x67bc6687…fc46 Appleseed/AAPL Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 12038.09, currency: USD, as_of: 2026-09-03T05:08:32Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xF8b22322…B0e3 pair 0x67bc6687…fc46 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 21969, currency: USD, as_of: 2026-09-03T05:08:32Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xF8b22322…B0e3 pair 0x67bc6687…fc46 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 205246.47, currency: USD, as_of: 2026-09-03T05:09:38Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x67bc6687c7ecbdff594df2b5200df55a925f97165da05b1014b7157f134bfc46 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 12051.11, currency: USD, as_of: 2026-09-03T05:09:38Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x67bc6687…fc46 reserve_in_usd (AAPL/Appleseed pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 21222.54, currency: USD, as_of: 2026-09-03T05:08:32Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xf8b22322e2b3dee225d173a36b7bc421d7d9b0e3 fdv_usd (market_cap_usd null; not the inverted pool fdv)", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 330, currency: null, as_of: 2026-09-03T05:06:26Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:10:22Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x32b297f (53160319). Token 0xF8b22322…B0e3 eth_getCode 3248 B prefix 60806040, not EIP-1167. name John Appleseed, symbol Appleseed, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0xDe1ed485022549d87AEc85Fe08107682322F1daB (eth_getCode 23 B EIP-7702 prefix 0xef0100 implementation 0x63c0c19a282a1B52b07dD5a65b58948A07DAE32B). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x261ae32F5787983a5fEd1828485cA24f58FB391f. socials() twitter https://x.com/Esotericgul/status/2095338962977968219 telegram/discord/website/farcaster empty. logo GCS png. description memecoin. AAPL 0xaF3D…93f9 eth_getCode 283 B name() Apple • Robinhood Token symbol() AAPL. Factory code 24177 B owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. Curve code 10229 B. LaunchAndBuy code 4416 B. Deployer helper 20906 B. Locker 1969 B. PoolManager 24009 B." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-15, R-16, R-17], result: "Blockscout api/v2 token 0xF8b22322…B0e3 name John Appleseed is_contract true is_verified true proxy_type null; token symbol Appleseed holders_count 330 total_supply 1e27. ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_fully_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-09-03T02:57:14Z. creator_address_hash PonsV2LaunchDeployer 0x3711…1A42 creation_transaction_hash 0xb944e4cd…5265. launchAndBuy tx 2026-09-03T02:31:54Z block 53067764 from 0xDe1ed485…1daB (EIP-7702) to PonsV2LaunchAndBuy 0xe33E…2948 pairToken AAPL 0xaF3D…93f9. TokenLaunched curve 0x261ae32F…391f graduationThreshold 24.2e18. CurveCompleted / LaunchSwept tx 0xa0c4e3bf…d2ac 2026-09-03T02:33:06Z block 53068443 quoteOut 24.200000000000000058e18 tokenOut 285714285714285714285714285. AAPL token name Apple • Robinhood Token holders_count 61477 proxy_type eip1967_beacon implementation Stock 0xb35490d6…5aE2. Curve address is_verified false this pass." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:08:32Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0xF8b22322…B0e3 13 robinhood uniswap pairs; top Appleseed/AAPL v4 0x67bc6687…fc46 quote 0xaF3D…93f9 Apple • Robinhood Token / AAPL liquidity.usd 12038.09 volume.h24 599435.79 fdv/marketCap 21969 pairCreatedAt 1788402793000 (2026-09-03T02:33:13Z) info.websites discussions.apple.com/thread/253362178 info.socials x.com/1Nzz_/status/2095349612311609518. Secondary Appleseed/USDG and Appleseed/ETH books far thinner." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:09:38Z, receipt_ids: [R-8, R-9], result: "Gecko pool 0x67bc6687…fc46 name AAPL / Appleseed pool_created_at 2026-09-03T02:33:13Z volume_usd.h24 205246.47 reserve_in_usd 12051.11 fdv_usd 4751352.24 (pool base is AAPL 0xaF3D…93f9, quote is Appleseed 0xF8b22322…B0e3; dex pons-v2-dex). Gecko token name John Appleseed fdv_usd 21222.54 market_cap_usd null volume_usd.h24 207168.53 (all pools) total_reserve_in_usd 6410.38. launchpad_details completed true completed_at 2026-09-03T02:33:13Z migrated_destination_pool_address 0x67bc6687…fc46. Gecko token attributes have no website or twitter_handle this pass." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:08:41Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol AAPL hit 1: tokenName Apple • Robinhood Token deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663 status ASSET_STATUS_ACTIVE. Zero Appleseed / John Appleseed / 0xF8b22322 hits." }
  - { id: REP-6, method: official-crosslink, checked_at: 2026-09-03T05:11:00Z, receipt_ids: [R-4, R-5, R-7, R-13, R-18, R-19], result: "token.socials() twitter is tweet https://x.com/Esotericgul/status/2095338962977968219 (posted 2026-09-03T02:31:52Z, two seconds before launchAndBuy); body does not embed this CA. DexScreener socials twitter is https://x.com/1Nzz_/status/2095349612311609518 which does embed 0xf8b22322…b0e3. DexScreener website is discussions.apple.com/thread/253362178. @JohnnyAppleEra bio Community meme on Robinhood Chain pinned a different CA 0x99C25BFDDaC22C73e60115Bde1cA955683612F60. X user search for Appleseed returned unrelated handles." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy deploys a 1e9-supply PonsV2LauncherToken onto a Pons v2 bonding curve quoted against pairToken AAPL; CurveCompleted / LaunchSwept ~72s later seeds Uniswap v4 Appleseed/AAPL via pool 0x67bc6687…fc46 (Gecko dex pons-v2-dex). Verified token source: entire supply mints to the curve; deployer is immutable reference data with no token privileges.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-2, R-4, R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "John Appleseed", class: verified, observed_at: 2026-09-03T05:06:26Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "Appleseed", class: verified, observed_at: 2026-09-03T05:06:26Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3", class: verified, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:10:22Z, receipt_ids: [R-5, R-6, R-15], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:10:22Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-4, R-7, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; launch socials twitter is @Esotericgul status 2095338962977968219 without this CA; DexScreener socials is @1Nzz_ status 2095349612311609518; flag unconfirmed-official | third-party-link", class: claim, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-5, R-7, R-13, R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Distinct from packed ICOIN 0x5d6EF…1e18, packed AAPLCAT 0x73A9999f…1e18, packed AAPLDOG 0x06e52E5f…1e18, and AP/AAPL 0x69c68e4C…1e18. Shared rail is AAPL 0xaF3D…93f9 only. AAPL is a rail, not this token. Blockscout search also lists other John Appleseed / APPLESEED CAs including 0x99C25BFD…2F60 pinned by @JohnnyAppleEra.", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-7, R-12, R-19, R-20], reproduction_ids: [REP-3, REP-5, REP-6], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko AAPL/Appleseed pool 24h volume 205246.47 USD and reserve_in_usd 12051.11 at 2026-09-03T05:09:38Z (Gecko pool slice; pool fdv_usd 4751352.24 is the AAPL-as-base book, not the Gecko token fdv)", class: verified, observed_at: 2026-09-03T05:09:38Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 12038.09 volume.h24 599435.79 fdv/marketCap 21969 at 2026-09-03T05:08:32Z", class: verified, observed_at: 2026-09-03T05:08:32Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 330, class: verified, observed_at: 2026-09-03T05:06:26Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges. Deployer 0xDe1ed485…1daB has EIP-7702 code, not empty.", class: verified, observed_at: 2026-09-03T05:10:22Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() / launchAndBuy from 0xDe1ed485022549d87AEc85Fe08107682322F1daB; launchFactory 0x7eD5…EC7e owner() 0x263ed295…019Dd; curve 0x261ae32F…391f", class: verified, observed_at: 2026-09-03T05:10:22Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is AAPL 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 (GET /rhj/assets active Robinhood Token); venue is Uniswap v4 pool 0x67bc6687…fc46, Gecko dex id pons-v2-dex", class: verified, observed_at: 2026-09-03T05:09:38Z, receipt_ids: [R-7, R-8, R-12, R-16], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, PairLaunchpadV5, or stonks.fun", class: verified, observed_at: 2026-09-03T05:10:22Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:08:32Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: identity.domain, value: "NULL — DexScreener info.websites is https://discussions.apple.com/thread/253362178; Gecko token has no website field; launch socials website empty; flag third-party-link", class: claim, observed_at: 2026-09-03T05:08:32Z, receipt_ids: [R-5, R-7, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 21222.54; DexScreener fdv/marketCap 21969. Gecko pool fdv_usd 4751352.24 is the inverted AAPL/Appleseed book. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T05:09:38Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", class: verified, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-7, R-12, R-17], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x261ae32F5787983a5fEd1828485cA24f58FB391f", class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-5, R-6, R-16], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "unconfirmed-official | third-party-link: launch socials name a tweet by @Esotericgul with no CA; DexScreener names a tweet by @1Nzz_ that embeds this CA and an Apple Discussions thread as website", class: claim, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-7, R-13, R-18], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-24, field: candidate, value: "appleseed | Appleseed | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:15:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener Appleseed/AAPL 24h volume $599k, Gecko liq $12.1k"
    summary: "DexScreener pair 0x67bc6687…fc46 volume.h24 599435.79 liquidity.usd 12038.09 fdv 21969. Gecko same pool reserve_in_usd 12051.11 volume_usd.h24 205246.47."
    occurred_at: 2026-09-03T05:08:32Z
    observed_at: 2026-09-03T05:09:38Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@Esotericgul posted the John Appleseed meme name two seconds before launch"
    summary: "@Esotericgul 2095338962977968219 at 2026-09-03T02:31:52Z: apple changed their web today to call John John Appleseed. Launch socials twitter field is that tweet URL; the post does not embed this CA."
    occurred_at: 2026-09-03T02:31:52Z
    observed_at: 2026-09-03T05:07:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-3
    type: ct
    title: "@1Nzz_ posted the Appleseed CA"
    summary: "@1Nzz_ 2095349612311609518 at 2026-09-03T03:14:11Z posted John Appleseed lore and 0xf8b22322…b0e3. DexScreener info.socials points at that tweet."
    occurred_at: 2026-09-03T03:14:11Z
    observed_at: 2026-09-03T05:09:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-18]
  - id: EVT-4
    type: onchain
    title: "Pons curve completed; LaunchSwept Appleseed vs AAPL"
    summary: "Tx 0xa0c4e3bf…d2ac at 2026-09-03T02:33:06Z; quoteOut 24.2e18 AAPL and tokenOut 2.857e8 into factory then Uniswap v4 pool 0x67bc6687…fc46."
    occurred_at: 2026-09-03T02:33:06Z
    observed_at: 2026-09-03T05:12:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: onchain
    title: "PonsV2LaunchAndBuy minted John Appleseed / Appleseed"
    summary: "Tx 0xb944e4cd…5265 from 0xDe1ed485…1daB at 2026-09-03T02:31:54Z; TokenLaunched pairToken AAPL; socials twitter x.com/Esotericgul/status/2095338962977968219."
    occurred_at: 2026-09-03T02:31:54Z
    observed_at: 2026-09-03T05:07:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism, identity.handle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-6]
  - id: EVT-6
    type: ct
    title: "@dexpaidpanther flagged Dex paid on Appleseed/AAPL"
    summary: "@dexpaidpanther 2095350821953126739 at 2026-09-03T03:19:00Z: John Appleseed (Appleseed)/AAPL CA 0xF8b22322…B0e3 MC 93K chain robinhood (ponsv2)."
    occurred_at: 2026-09-03T03:19:00Z
    observed_at: 2026-09-03T05:07:00Z
    affected_fields: [activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-21]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xF8b22322…B0e3 John Appleseed / Appleseed", url: "https://robinhoodchain.blockscout.com/address/0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3", published_at: null, accessed_at: 2026-09-03T05:06:26Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3 name John Appleseed is_contract true is_verified true proxy_type null. token symbol Appleseed decimals 18 total_supply 1000000000000000000000000000 holders_count 330 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xb944e4cd3d4754b7be35538b07fd1dec02f4ed27a91bd6693bc0f48e89315265. Holders row 0 PoolManager 0x8366a39C…0951; row 1 V2LaunchLocker 0x267444D0…4952." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3?tab=contract", published_at: null, accessed_at: 2026-09-03T05:07:04Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_fully_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-09-03T02:57:14.244330Z. Comment: Fixed-supply ERC-20 deployed by PonsV2LaunchFactory; entire supply mints directly to the token's bonding curve; deployer is carried as immutable reference data for off-chain attribution only, and confers no privileges over the token." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T05:07:04Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36 creation_transaction_hash 0x849d092ee4ed37d8138636839c28aabd2878e445cb68ba99c4cdafa11a778b2e." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0xb944e4cd…5265", url: "https://robinhoodchain.blockscout.com/tx/0xb944e4cd3d4754b7be35538b07fd1dec02f4ed27a91bd6693bc0f48e89315265", published_at: 2026-09-03T02:31:54Z, accessed_at: 2026-09-03T05:07:04Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, EVT-5], excerpt: "timestamp 2026-09-03T02:31:54.000000Z status ok block_number 53067764 from 0xDe1ed485022549d87AEc85Fe08107682322F1daB (EIP7702StatelessDeleGator) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name John Appleseed symbol Appleseed description memecoin twitter https://x.com/Esotericgul/status/2095338962977968219 pairToken 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 quoteIn 2208763576947938196." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, deployer(), launchFactory(), curve(), socials() on Appleseed", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:10:22Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-17, CLM-19, CLM-22], excerpt: "eth_blockNumber 0x32b297f (53160319). Token code 3248 B prefix 60806040. name John Appleseed symbol Appleseed decimals 18 totalSupply 1e27. owner() factory() revert. deployer() 0xDe1ed485022549d87AEc85Fe08107682322F1daB code 23 B 0xef0100…. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x261ae32F5787983a5fEd1828485cA24f58FB391f. socials() twitter https://x.com/Esotericgul/status/2095338962977968219 website empty. AAPL name Apple • Robinhood Token." }
  - { id: R-6, publisher: Blockscout, title: "TokenLaunched log for Appleseed", url: "https://robinhoodchain.blockscout.com/tx/0xb944e4cd3d4754b7be35538b07fd1dec02f4ed27a91bd6693bc0f48e89315265", published_at: 2026-09-03T02:31:54Z, accessed_at: 2026-09-03T05:07:04Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, CLM-22, EVT-5], excerpt: "PonsV2LaunchFactory TokenLaunched token 0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3 curve 0x261ae32F5787983a5fEd1828485cA24f58FB391f deployer 0xDe1ed485022549d87AEc85Fe08107682322F1daB pairToken 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 launchConfigId 0 graduationThreshold 24200000000000000000. Block 53067764. PonsV2LaunchAndBuy Launched same token/curve quoteSpent 2208763576947938196 tokensReceived 184270300463037996727888592." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens Appleseed", url: "https://api.dexscreener.com/latest/dex/tokens/0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3", published_at: null, accessed_at: 2026-09-03T05:08:32Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-21, CLM-23, CLM-24, EVT-1], excerpt: "13 robinhood uniswap pairs. Top pairAddress 0x67bc6687c7ecbdff594df2b5200df55a925f97165da05b1014b7157f134bfc46 labels v4 base John Appleseed / Appleseed quote Apple • Robinhood Token / AAPL 0xaF3D76f1…93f9 liquidity.usd 12038.09 volume.h24 599435.79 fdv 21969 marketCap 21969 pairCreatedAt 1788402793000. info.websites https://discussions.apple.com/thread/253362178 info.socials https://x.com/1Nzz_/status/2095349612311609518." }
  - { id: R-8, publisher: GeckoTerminal, title: "AAPL/Appleseed Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x67bc6687c7ecbdff594df2b5200df55a925f97165da05b1014b7157f134bfc46", published_at: null, accessed_at: 2026-09-03T05:09:38Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name AAPL / Appleseed pool_created_at 2026-09-03T02:33:13Z fdv_usd 4751352.23986489 market_cap_usd 4661452.73514779 volume_usd.h24 205246.473233238 reserve_in_usd 12051.1093. dex pons-v2-dex base robinhood_0xaf3d76f1834a1d425780943c99ea8a608f8a93f9 quote robinhood_0xf8b22322e2b3dee225d173a36b7bc421d7d9b0e3." }
  - { id: R-9, publisher: GeckoTerminal, title: "John Appleseed token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xf8b22322e2b3dee225d173a36b7bc421d7d9b0e3", published_at: null, accessed_at: 2026-09-03T05:08:32Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-19, CLM-20], excerpt: "name John Appleseed symbol Appleseed decimals 18 total_supply 1e27 price_usd 0.00002122253736 fdv_usd 21222.5373624713 market_cap_usd null volume_usd.h24 207168.525582222 total_reserve_in_usd 6410.38. coingecko_coin_id null. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-03T02:33:13.000Z migrated_destination_pool_address 0x67bc6687…fc46. No website or twitter_handle fields this pass." }
  - { id: R-10, publisher: GeckoTerminal, title: "Appleseed/AAPL pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x67bc6687c7ecbdff594df2b5200df55a925f97165da05b1014b7157f134bfc46", published_at: null, accessed_at: 2026-09-03T05:09:38Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "AAPL/Appleseed on Uniswap V4 (Robinhood) via pons-v2-dex. Pool 0x67bc…fc46 AAPL 0xaf3d…93f9 Appleseed 0xf8b2…b0e3." }
  - { id: R-11, publisher: DexScreener, title: "Appleseed/AAPL pair page", url: "https://dexscreener.com/robinhood/0x67bc6687c7ecbdff594df2b5200df55a925f97165da05b1014b7157f134bfc46", published_at: null, accessed_at: 2026-09-03T05:08:32Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "Appleseed/AAPL John Appleseed on Uniswap v4 (Robinhood). Pair 0x67bc6687…fc46 Appleseed 0xF8b22322…B0e3 AAPL 0xaF3D…93f9." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:08:41Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol AAPL hit 1: tokenName Apple • Robinhood Token status ASSET_STATUS_ACTIVE deployments contractAddress 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 chainId 4663 networkName Robinhood Chain. Zero Appleseed / 0xF8b22322 hits." }
  - { id: R-13, publisher: "@Esotericgul", title: "apple changed their web today to call John John Appleseed", url: "https://x.com/Esotericgul/status/2095338962977968219", published_at: 2026-09-03T02:31:52Z, accessed_at: 2026-09-03T05:07:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-23, EVT-2], excerpt: "wait how did noone notice apple changed their web today to call John \"John Appleseed\" everyones been waiting on a meme name. No contract address in the post this pass." }
  - { id: R-14, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T05:08:41Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16, EVT-5], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:08:41Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-16, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0xa0c4e3bf…d2ac", url: "https://robinhoodchain.blockscout.com/tx/0xa0c4e3bfa567ce682b75cbcdcfa8dec6e83d9a1f3638e3af693a9f1e9dfdd2ac", published_at: 2026-09-03T02:33:06Z, accessed_at: 2026-09-03T05:12:19Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, CLM-22, EVT-4], excerpt: "timestamp 2026-09-03T02:33:06.000000Z status ok block_number 53068443 from 0x0f4B61F8625EfaCE21cc128F1ABAdC7E002F6d57 to 0x65050A9b7E5075A2bA5cED7b1b64EE66262c40Dc. CurveCompleted recipient 0x7eD5…EC7e quoteOut 24200000000000000058 tokenOut 285714285714285714285714285. LaunchSwept token 0xF8b22322…B0e3 same quoteOut/tokenOut." }
  - { id: R-17, publisher: Blockscout, title: "Token 0xaF3D…93f9 Apple • Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9", published_at: null, accessed_at: 2026-09-03T05:12:19Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xaF3D76f1834A1d425780943C99Ea8A608f8a93f9 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Apple • Robinhood Token symbol AAPL decimals 18 holders_count 61477 total_supply 14624363359480000000000." }
  - { id: R-18, publisher: "@1Nzz_", title: "John Appleseed is INSANE Apple lore + CA", url: "https://x.com/1Nzz_/status/2095349612311609518", published_at: 2026-09-03T03:14:11Z, accessed_at: 2026-09-03T05:09:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-23, EVT-3], excerpt: "John Appleseed is INSANE Apple lore, they've been using the name as a placeholder name for forms and as an easter egg dating all the way back to 1980. 0xf8b22322e2b3dee225d173a36b7bc421d7d9b0e3" }
  - { id: R-19, publisher: DexScreener, title: "search Appleseed AAPL neighboring AAPL books", url: "https://api.dexscreener.com/latest/dex/search?q=Appleseed%20AAPL", published_at: null, accessed_at: 2026-09-03T05:08:32Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "robinhood Appleseed/AAPL 0xF8b22322…B0e3 pair 0x67bc6687…fc46 liq 12038.09 vol 599435.79. Separate APPLESEED/AAPL 0x6cF93b818f8E36265c038c0688669911867d1e18 pair 0x8b044fd1…bfd78 liq 21595.13 vol 856.88. Packed-neighbor AAPL books on other queries include ICOIN/AAPL 0x5d6EF…1e18, AAPLCAT/AAPL 0x73A9999f…1e18, AP/AAPL 0x69c68e4C…1e18." }
  - { id: R-20, publisher: "@JohnnyAppleEra", title: "Johnny Appleseed plants $AAPL (different CA)", url: "https://x.com/JohnnyAppleEra/status/2094684886187815336", published_at: 2026-09-01T07:12:48Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-9], excerpt: "Johnny Appleseed plants $AAPL. Community meme on Robinhood Chain. Unofficial. Not affiliated with Apple. CA: 0x99C25BFDDaC22C73e60115Bde1cA955683612F60 Trade: ponsfamily.com/launchpad/0x99C25BFD…" }
  - { id: R-21, publisher: "@dexpaidpanther", title: "Dex paid John Appleseed / AAPL", url: "https://x.com/dexpaidpanther/status/2095350821953126739", published_at: 2026-09-03T03:19:00Z, accessed_at: 2026-09-03T05:06:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "Dex paid: John Appleseed (Appleseed) / AAPL 0xF8b22322E2b3DEe225D173a36B7Bc421D7d9B0e3 MC: 93K Chain: robinhood (ponsv2) Time detected: 06:18:58" }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xF8b22322…B0e3?", checked: "token.socials() twitter is a tweet URL; DexScreener website is Apple Discussions; DexScreener socials is @1Nzz_ tweet; Gecko token has no website/twitter_handle; X user search unrelated, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P1, question: "Does verified PonsV2LaunchFactory / curve source leave any privileged path after LaunchSwept despite token owner() reverting?", checked: "token owner() reverts; source comment deployer confers no privileges; factory owner() is Safe 0x263ed295…019Dd; curve is_verified false this pass, 2026-09-03", next: "read createToken/graduation modifiers and verify the curve clone against a verified PonsV2BondingCurve twin" }
  - { priority: P1, question: "Which of the other Blockscout John Appleseed / APPLESEED CAs still have live AAPL books, and do any share this deployer?", checked: "search listed 0x99C25BFD…2F60 (JohnnyAppleEra) and DexScreener APPLESEED 0x6cF93b81…1e18 as separate tokens; this packet is 0xF8b22322…B0e3 only, 2026-09-03", next: "RPC name/symbol on those CAs if a later assignment takes them" }
  - { priority: P2, question: "Which window printed assignment lead liq ~$27,665 / vol ~$524,075?", checked: "Live DexScreener Appleseed/AAPL liq 12038.09 vol 599435.79; Gecko pool reserve 12051.11 vol 205246.47 at 2026-09-03T05:08Z–05:09Z", next: "archive a DexScreener screenshot if the ~$27k liq print returns" }
---

# Appleseed — research packet

## What it is

A one-billion-supply ERC-20 launched on Pons v2 and graduated into a Uniswap v4 pool quoted against AAPL. PonsV2LaunchAndBuy deploys John Appleseed (Appleseed) in one launchAndBuy call, seeds a bonding curve, then sweeps into the Appleseed/AAPL book. Traders buy and sell Appleseed on Uniswap v4. AAPL is the quote rail, not this token. No official site or handle was located this pass.

Themes: memecoin, stock-paired:AAPL, rwa

## Why it matters

The Appleseed/AAPL Uniswap v4 book printed about $599k of 24h volume on DexScreener at collection, with the quote token the Apple Robinhood Token. GET /rhj/assets has an active AAPL row at 0xaF3D…93f9, so the pair leg is a Stock Token rail rather than a third-party ticker clone. Distinct from packed ICOIN, AAPLCAT, AAPLDOG, and AP/AAPL, which share that rail through other pads.

## What could go wrong

USD liquidity figures on the Appleseed/AAPL book count both sides, and the quote side is AAPL, not USDG. Gecko names the pool AAPL/Appleseed and reports an inverted fdv that is the AAPL book, not this token. No official handle was located, so comms surfaces stay unconfirmed-official. Other John Appleseed CAs exist on the same explorer.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from EIP-7702 0xDe1ed485…1daB at 2026-09-03T02:31:54Z minted John Appleseed / Appleseed supply 1e9*1e18 onto bonding curve 0x261ae32F…391f quoted against pairToken AAPL 0xaF3D…93f9. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 24.2e18. [verified R-4 R-5 R-6]

Verified token source says launches mint the whole supply to the curve, LP is not a Uniswap position at birth, and deployer is reference data only. CurveCompleted / LaunchSwept at 2026-09-03T02:33:06Z quoteOut 24.2e18 AAPL tokenOut 2.857e8 into Uniswap v4 poolId 0x67bc6687…fc46. Gecko dex id pons-v2-dex. Secondary Appleseed/USDG and Appleseed/ETH books exist on DexScreener with far less liquidity than the AAPL book. [verified R-2 R-7 R-8 R-16]

## Control and security

token owner() reverts. Deployer 0xDe1ed485…1daB has EIP-7702 code (23 bytes, prefix 0xef0100) delegating to EIP7702StatelessDeleGator. factory owner() returns Safe 0x263ed295…019Dd. Curve 0x261ae32F…391f is_verified false this pass. [verified R-5 R-15] [claim R-16]

PonsV2LauncherToken, PonsV2LaunchDeployer, PonsV2LaunchFactory, and PonsV2LaunchAndBuy are verified on Blockscout (compiler v0.8.35 for the token, is_fully_verified true). AAPL is a verified BeaconProxy. No audit report URL was located this pass. [verified R-2 R-3 R-14 R-17] [unknown]

## Team and provenance

No official domain or X handle was located. Launch socials twitter is @Esotericgul status 2095338962977968219, posted two seconds before launchAndBuy, with no CA in the post. DexScreener info.socials is @1Nzz_ status 2095349612311609518, which does embed this CA. DexScreener website is an Apple Discussions thread. Flag unconfirmed-official and third-party-link. [claim R-7 R-13 R-18]

@JohnnyAppleEra posted a different CA 0x99C25BFD…2F60 as Johnny Appleseed on Pons. That is not this token. [claim R-20]

## Economics and activity

Appleseed/AAPL Uniswap v4 24h volume is 599435.79 USD and liquidity.usd is 12038.09 at 2026-09-03T05:08:32Z from DexScreener. fdv/marketCap is 21969. Blockscout holders_count 330. Pair created 2026-09-03T02:33:13Z. [claim R-1 R-7]

Gecko same pool: volume_usd.h24 205246.47 reserve_in_usd 12051.11 at 2026-09-03T05:09:38Z. Gecko token volume_usd.h24 is 207168.53 across all pools, not the AAPL book. Gecko token fdv_usd 21222.54. Gecko pool fdv_usd 4751352.24 is the inverted AAPL-as-base book. [claim R-8 R-9]

Assignment lead of liq ~$27,665 / vol ~$524,075 was not reproduced at this as_of; live DexScreener liq is $12,038.09 with vol $599,435.79. [claim R-7]

## Material risks

- Quote token AAPL 0xaF3D…93f9 is the Robinhood Token rail in GET /rhj/assets; this token is not. [verified R-12 R-17]
- Pool USD reserve is Appleseed plus AAPL, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko pool fdv follows the AAPL base and is not this token's market cap. [claim R-8 R-9]
- No official handle or domain this pass; DexScreener website and launch socials are third-party-links. [claim R-7 R-13]
- Other John Appleseed / APPLESEED CAs exist on 4663. [claim R-19 R-20]
- Bonding-curve clone is_verified false this pass. [verified R-16]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/source/deployer/factory/launchAndBuy/AAPL and both launch and sweep txs, RPC name/symbol/deployer/launchFactory/curve/socials, DexScreener, Gecko pool/token, /rhj/assets, @Esotericgul, @1Nzz_, @JohnnyAppleEra, and @dexpaidpanther were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 599435.79 is the DexScreener Appleseed/AAPL pool 24h volume, not the 207168.53 Gecko token all-pools figure. Reserve 12051.11 is the Gecko pool. DexScreener 12038.09 is the same pair, different aggregator. Gecko pool fdv 4751352.24 is AAPL-as-base. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this is packed ICOIN, AAPLCAT, AAPLDOG, or the @JohnnyAppleEra CA. Those are different addresses and pads; this packet is 0xF8b22322…B0e3 / pair 0x67bc6687…fc46 via Pons v2. [inference R-4 R-7 R-20]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no appleseed / Appleseed / 0xF8b22322…B0e3.
- GET `research/inbox/packets/appleseed/WORK-20260903-grok-heavy-icarus-research.md?ref=grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research` HTTP 404 before collect.
- Explorer: Blockscout api/v2 search Appleseed, token, address, contract, createToken 0xb944e4cd…5265, TokenLaunched, CurveCompleted 0xa0c4e3bf…d2ac, AAPL, factory, launchAndBuy, deployer, locker, holders. Chrome UA.
- RPC: eth_getCode/eth_call name/symbol/decimals/totalSupply/owner/deployer/curve/launchFactory/factory/socials/logo/description at block 53160319.
- Aggregators: DexScreener latest/dex/tokens and search Appleseed AAPL; Gecko first GET token HTTP 200 then pool.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, AAPL active at 0xaF3D…93f9.
- Social: X Latest CA, John Appleseed, from:Esotericgul; user search Appleseed / Esotericgul; thread fetch 2095338962977968219 and 2095349612311609518.
- Failed: Blockscout address txs filter 422; curve is_verified false (code used); assignment ~$27,665 liq not on the live DexScreener print.
- Time: collection 2026-09-03T05:06Z–2026-09-03T05:15Z.
