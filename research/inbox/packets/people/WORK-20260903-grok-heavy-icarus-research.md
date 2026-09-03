---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: people
name: people
packet_tier: seed
as_of: 2026-09-03T05:46:00Z
prior_packet: null
supersedes: null
owned_slugs: [people]
allowed_paths:
  - research/inbox/packets/people/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: people
  aliases: ["people online"]
  symbols: [people]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://peoplemust.work
  official_handle: "@peopleonline_"
  repository: "NULL — no GitHub org or repository URL on peoplemust.work, DexScreener, Gecko, Blockscout, or the @peopleonline_ profile this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily"
        - "people is the ERC-20 at 0xD1efCE…4f18 created by PonsV2LaunchDeployer via PonsV2LaunchAndBuy.launchAndBuy; entity_kind token, not protocol"
        - "Official handle is @peopleonline_, not @ponsdotfamily; official domain is peoplemust.work"
    - slug: jobs
      signals: [shared-deployer]
      contrary_signals:
        - "JOBS is Pons v2 Jobscoin at 0x88952E52…6453 paired to AAPL 0xaF3D…93f9"
        - "people is 0xD1efCE…4f18 paired to native ETH 0x0000…0000, not a Robinhood Stock Token"
        - "No shared domain or handle; jobscoinpons.com / @Jobscoinpons vs peoplemust.work / @peopleonline_"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "people launch tx 0x8212d464…ed4a calls PonsV2LaunchAndBuy.launchAndBuy, not LongLauncher.create"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "people is 0xD1efCE…4f18 paired to native ETH via Pons v2"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [nft-treasury/nft-marketplace]
  mechanism_tags: [bonding-curve, launchpad, amm, nft]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xD1efCE…4f18 is a verified PonsV2LauncherToken with non-empty code on 4663; PonsV2LaunchAndBuy.launchAndBuy at 2026-09-02T01:34:02Z minted people / people onto bonding curve 0x1E99…a2f1 quoted against native ETH. CurveCompleted 17s later migrated into Uniswap v4 pool 0x52d1…fbf1. peoplemust.work deployments.json payToken and @peopleonline_ bio pin this CA. Distinct from same-ticker 0xCDAdB6…b7dF (@peoplehoodx) and CurvePump 0x9f1B29…6Cd2. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://peoplemust.work/", authenticity: confirmed }
  - { kind: app, url: "https://peoplemust.work/people-see", authenticity: confirmed }
  - { kind: x, url: "https://x.com/peopleonline_", authenticity: confirmed }
  - { kind: x, url: "https://x.com/0xcurs", authenticity: unconfirmed }
  - { kind: app, url: "https://www.ponsfamily.com/launchpad/0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18", authenticity: unconfirmed }

deployments:
  - label: people token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-5, R-6]
  - label: PonsV2LaunchFactory
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:42:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: PonsV2BondingCurve (people launch curve)
    role: other
    address:
      value: "0x1E99cf99910b8A586c803eDDcd7Aa76045f0a2f1"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:42:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-6]
  - label: PonsV2LaunchDeployer (token creator_address_hash)
    role: other
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-16]
  - label: People ERC-721 (people online NFT)
    role: other
    address:
      value: "0x2e5AC9353c3E30Ef7439124dE13aF8fc350AD836"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:43:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-12, R-17]
  - label: V2LaunchLocker
    role: other
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:43:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-18]
  - label: Uniswap v4 PoolManager (people/ETH book)
    role: other
    address:
      value: "0x8366a39CC670B4001A1121B8F6A443A643e40951"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:40:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-6]

metrics:
  - { kind: volume_24h, value: 1104020.2, currency: USD, as_of: 2026-09-03T05:41:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18 top people/ETH v4 pair 0x52d1a1b7…fbf1 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 32762.99, currency: USD, as_of: 2026-09-03T05:41:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18 top people/ETH v4 pair 0x52d1a1b7…fbf1 liquidity.usd (that pair, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 125554, currency: USD, as_of: 2026-09-03T05:41:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18 top people/ETH v4 pair fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 1661, currency: null, as_of: 2026-09-03T05:40:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:44:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32b70df (53174239) then 0x32b7728 (53180200). Token 0xD1efCE…4f18 eth_getCode 3248 B prefix 60806040, not EIP-1167. name people, symbol people, decimals 18, totalSupply 1e27. owner() and factory() revert. curve() 0x1E99cf99…a2f1. deployer() 0x4CB47362…E6E6 (eth_getCode 0x). launchFactory() 0x7eD598Bc…EC7e. description people are now tokenized. mint one, put them to work, and earn stocks from their labor. socials twitter https://x.com/peopleonline_ website https://peoplemust.work/. Curve code 10229 B; graduated() 1; pairToken() 0x0000…0000; token() 0xD1efCE…4f18. Factory code 24177 B. NFT 0x2e5AC935…D836 code 7030 B name people online symbol people totalMinted 600 hirePrice 33333e18 hiringOpen 1. 0xdead balance 39999800000000001306666666 (~3.99998% of supply). WETH 0x0Bd7…AD73 code 2202 B (not the pair quote)." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:43:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-16, R-17, R-18], result: "Blockscout api/v2 token 0xD1efCE…4f18 name people symbol people holders_count 1661 total_supply 1e27 type ERC-20. Address name people is_verified true proxy_type null creator_address_hash PonsV2LaunchDeployer 0x3711ceA4…1A42 creation_transaction_hash 0x8212d464…ed4a. Smart-contract PonsV2LauncherToken compiler v0.8.35 file_path contracts/src/v2/PonsV2LauncherToken.sol is_partially_verified false verified_at 2026-09-02T01:35:05Z. launchAndBuy tx 2026-09-02T01:34:02Z block 52185653 from 0x4CB47362…E6E6 to PonsV2LaunchAndBuy 0xe33E9E47…2948; decoded name people symbol people pairToken 0x0000…0000 website https://peoplemust.work/ x.com/peopleonline_ quoteIn 34985422740524782. TokenLaunched token 0xD1efCE…4f18 curve 0x1E99…a2f1 deployer 0x4CB47362…E6E6 pairToken 0x0000…0000 graduationThreshold 4.2e18. CurveCompleted tx 0x1687bfbe…b2c8 2026-09-02T01:34:19Z block 52185824; PoolGraduated positionId 1467430 tokenAmount ~2.041e26 pairTokenAmount 4.2e18. NFT People 0x2e5AC935…D836 create tx 0xe8f7a715…03ee 2026-09-02T01:34:57Z from 0x073fa095…C21b; ERC-721 holders_count 56." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:41:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0xD1efCE…4f18: 14 robinhood uniswap v4 pairs; top people/ETH 0x52d1a1b7…fbf1 quote Ether ETH 0x0000…0000 liquidity.usd 32762.99 volume.h24 1104020.2 fdv/marketCap 125554 priceUsd 0.0001307 pairCreatedAt 2026-09-02T01:34:19Z info.websites https://peoplemust.work/ info.socials x.com/peopleonline_. Secondary people/USDG 0xc7108673…4847 liq 1886.71 vol 96941.22. Remaining books are thin ETH/USDG slices." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:41:00Z, receipt_ids: [R-8, R-9], result: "Gecko search/pools query=people network=robinhood GET 200. Gecko token GET 200: name people symbol people total_supply 1e27 volume_usd.h24 1208550.89131352 fdv_usd 131290.47 market_cap_usd null total_reserve_in_usd 17745.49. Gecko pool GET 200: name people / WETH address 0x52d1a1b7…fbf1 pool_created_at 2026-09-02T01:34:19Z volume_usd.h24 1098414.09293391 reserve_in_usd 29911.6999 fdv_usd 129076.1445 market_cap_usd null dex pons-v2-dex quote robinhood_0x0000…0000. Assignment lead of ~$30,202 liq / ~$1,523,087 vol was not reproduced at this as_of; live Gecko reserve is $29,911.70 vol $1,098,414.09." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T05:43:00Z, receipt_ids: [R-7, R-12, R-13], result: "peoplemust.work HTTP 200 title people online; meta description everything has been tokenized. people were next. 2,001 synthetic personnel records. deployments.json live true chainId 4663 payToken 0xd1efce38684400cfe7343ab52de8d1fbe4c54f18 payTokenSymbol PEOPLE hirePriceTokens 33333 people NFT 0x2e5ac935…d836 rooms AAPL/NVDA/GME/GOOGL/QQQ stock-token addresses. Token socials() and DexScreener info list https://peoplemust.work/ and x.com/peopleonline_. @peopleonline_ bio reprints 0xd1efce…4f18." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy clones a 1e9-supply PonsV2LauncherToken onto a PonsV2BondingCurve quoted against native ETH (pairToken 0x0000…0000); CurveCompleted migrates remaining inventory into a locked Uniswap v4 people/ETH pool. launchAndBuy from 0x4CB47362…E6E6 minted people / people. Site peoplemust.work spends that ERC-20 to mint a People ERC-721 (hirePrice 33333) assigned to stock-token offices.", class: verified, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-12], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "people", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "people", class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-1, R-5, R-12], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-1, R-4, R-5, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-4, R-7, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@peopleonline_ — token socials() twitter https://x.com/peopleonline_; DexScreener info.socials that handle; peoplemust.work deployments.json payToken 0xd1efce…4f18; @peopleonline_ bio reprints 0xd1efce38684400cfe7343ab52de8d1fbe4c54f18", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-5, R-7, R-12, R-13], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote is native ETH 0x0000…0000, not WETH 0x0Bd7…AD73 and not a Robinhood Stock Token. Pad is census Pons v2 factory 0x7eD598…EC7e. Distinct from same-ticker people 0xCDAdB6…b7dF (bio of @peoplehoodx) and CurvePumpERC1967Proxy people 0x9f1B29…6Cd2 (2756 holders). Gecko labels the book people/WETH while the quote address is 0x0000…0000.", class: verified, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-5, R-7, R-8, R-19, R-20], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "people/ETH Uniswap v4 24h volume 1098414.09 USD and reserve_in_usd 29911.70 at 2026-09-03T05:41:00Z (Gecko pool slice, not Gecko token all-pools 1208550.89). Assignment lead ~$1,523,087 / ~$30,202 was not reproduced at this as_of.", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 32762.99 volume.h24 1104020.2 fdv/marketCap 125554 at 2026-09-03T05:41:00Z", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1661, class: verified, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "Token ABI has no owner(); owner() eth_call reverts. Verified PonsV2LauncherToken source carries deployer as immutable reference data with no privileges. Curve owner() reverts. Factory is Ownable; launch logs credit SafeProxy 0x263ed295…019Dd.", class: verified, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-2, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() 0x4CB47362f07bDe7eA6e3822768eF9D28205fE6E6 equals launchAndBuy from (eth_getCode 0x). launchAndBuy params creator 0xd655C4ea7985236fC2b4DFe1737790189Cd18E9c. V2MemeHook PoolRegistered creator that same 0xd655…8E9c. GraduationTokensPermanentlyLocked 81632653061224489504373178 to V2LaunchLocker 0x267444D0…4952. LP positionId 1467430 locked.", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-4, R-5, R-6, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is native ETH 0x0000…0000; venue is Uniswap v4 PoolManager 0x8366a39C…0951 pool 0x52d1a1b779a8500a5bf5af4388ef445fd81744d0cef7937bcf095c4d7b5bfbf1 via V2MemeHook 0xE5e70264…Be044. Gecko labels that pool dex pons-v2-dex.", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-6, R-7, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "creator_address_hash names PonsV2LaunchDeployer 0x3711ceA4…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD598…EC7e as the pad, not LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, peoplemust.work, or X search this pass", class: unknown, observed_at: 2026-09-03T05:46:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link / copypasta-pattern: @emberwispxNFT posted robinhood-main-dex-vgm.netlify.app/vote/0xD1efCE…4f18 as a Robinhood Top 100 Leaderboard vote; not on peoplemust.work or the @peopleonline_ profile", class: claim, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko pool fdv_usd 129076.14 market_cap_usd null; DexScreener fdv/marketCap 125554. Gecko token fdv_usd 131290.47 market_cap_usd null.", class: verified, observed_at: 2026-09-03T05:41:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x1E99cf99910b8A586c803eDDcd7Aa76045f0a2f1", class: verified, observed_at: 2026-09-03T05:42:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x2e5AC9353c3E30Ef7439124dE13aF8fc350AD836", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-12, R-17], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://peoplemust.work", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-5, R-7, R-12], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-24, field: candidate, value: "people | people | @peopleonline_ | https://peoplemust.work — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:46:00Z, receipt_ids: [R-1, R-7, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "peoplemust.work deployments.json people NFT 0x2e5ac935…d836 hirePriceTokens 33333; RPC totalMinted 600 hiringOpen true. Offices AAPL 0xaF3D…93f9 NVDA 0xd060…9EEC GME 0x1b0E…153E GOOGL 0x2e08…4FE3 QQQ 0xD5f3…de68 are Robinhood Stock Tokens used as payroll rooms, not the ERC-20 pair quote.", class: verified, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-12, R-17], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-26, field: economics.metric, value: "RPC balanceOf(0xdead) 39999800000000001306666666 (~3.99998% of 1e9*1e18). @peopleonline_ posted 3.99% of supply has been burnt at 2026-09-03T05:40:31Z.", class: verified, observed_at: 2026-09-03T05:44:00Z, receipt_ids: [R-5, R-14], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-27, field: account.@peoplehoodx.flags, value: "handle-collision / ticker-collision — display people | RobinHood; bio reprints 0xcdadb6c8d747feb08cf3bf733e0a81720093b7df, not 0xd1efce…4f18; posts reuse the 33,333 mint / tokenized people narrative", class: claim, observed_at: 2026-09-03T05:40:00Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: identity.alias, value: "people online — NFT contract name and peoplemust.work <title>; ERC-20 name/symbol remain people", class: verified, observed_at: 2026-09-03T05:43:00Z, receipt_ids: [R-12, R-17], reproduction_ids: [REP-1, REP-5], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko people/WETH 24h volume $1.10M, liquidity $29.9k"
    summary: "Gecko pool 0x52d1…fbf1 volume_usd.h24 1098414 reserve_in_usd 29912 fdv_usd 129076. DexScreener same pair 1104020 / 32763. Assignment lead ~$1.52M / ~$30.2k was not reproduced at this as_of."
    occurred_at: 2026-09-03T05:41:00Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "PonsV2LaunchAndBuy minted people / people"
    summary: "Tx 0x8212d464…ed4a from 0x4CB47362…E6E6 at 2026-09-02T01:34:02Z; TokenLaunched curve 0x1E99…a2f1 pairToken 0x0000…0000 graduationThreshold 4.2 ETH."
    occurred_at: 2026-09-02T01:34:02Z
    observed_at: 2026-09-03T05:42:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-6]
  - id: EVT-3
    type: onchain
    title: "CurveCompleted graduated people into Uniswap v4"
    summary: "Tx 0x1687bfbe…b2c8 at 2026-09-02T01:34:19Z; quoteOut 4.2 ETH tokenOut ~2.857e26; PoolGraduated positionId 1467430; GraduationTokensPermanentlyLocked ~8.16e25."
    occurred_at: 2026-09-02T01:34:19Z
    observed_at: 2026-09-03T05:43:00Z
    affected_fields: [lifecycle, product.mechanism, economics.metric]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-18]
  - id: EVT-4
    type: onchain
    title: "People ERC-721 deployed 55s after the ERC-20"
    summary: "Tx 0xe8f7a715…03ee from 0x073fa095…C21b at 2026-09-02T01:34:57Z created People 0x2e5AC935…D836 (people online / people)."
    occurred_at: 2026-09-02T01:34:57Z
    observed_at: 2026-09-03T05:43:00Z
    affected_fields: [deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-5
    type: ct
    title: "@peopleonline_ posted 3.99% of supply burnt"
    summary: "Post 2095386437705228414: 3.99% of supply has been burnt. RPC 0xdead balance ~3.99998% of 1e9*1e18."
    occurred_at: 2026-09-03T05:40:31Z
    observed_at: 2026-09-03T05:44:00Z
    affected_fields: [economics.metric, communications.status]
    evidence_state: verified
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-5, R-14]
  - id: EVT-6
    type: ct
    title: "Netlify vote URL circulated for $PEOPLE"
    summary: "@emberwispxNFT posted robinhood-main-dex-vgm.netlify.app/vote/0xD1efCE…4f18 as a Robinhood Top 100 Leaderboard vote."
    occurred_at: 2026-09-03T01:24:24Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-15]
  - id: EVT-7
    type: ct
    title: "@peopleonline_ named @0xcurs as founder"
    summary: "Post 2095384694749626376: a lot of people have been asking me to make my own x account so i just did. follow the founder of people @0xcurs. @0xcurs bio is @peopleonline_."
    occurred_at: 2026-09-03T05:33:36Z
    observed_at: 2026-09-03T05:41:00Z
    affected_fields: [team.identity, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13, R-21]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xD1efCE…4f18 people / people", url: "https://robinhoodchain.blockscout.com/address/0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18 name people is_contract true is_verified true proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x8212d464867312da12622f746ac979bdc3eb022be5bbb9d86a1f3b9d3e70ed4a. token symbol people decimals 18 total_supply 1e27 holders_count 1661 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18?tab=contract", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd file_path contracts/src/v2/PonsV2LauncherToken.sol is_verified true is_partially_verified false verified_at 2026-09-02T01:35:05Z. Comment: deployer is carried as immutable reference data for off-chain attribution only, and confers no privileges over the token." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. Compiler v0.8.35 file_path contracts/src/v2/PonsV2LaunchFactory.sol is_partially_verified false verified_at 2026-08-04T17:40:45Z." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0x8212d464…ed4a", url: "https://robinhoodchain.blockscout.com/tx/0x8212d464867312da12622f746ac979bdc3eb022be5bbb9d86a1f3b9d3e70ed4a", published_at: 2026-09-02T01:34:02Z, accessed_at: 2026-09-03T05:42:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-2], excerpt: "timestamp 2026-09-02T01:34:02.000000Z status ok block_number 52185653 from 0x4CB47362f07bDe7eA6e3822768eF9D28205fE6E6 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. decoded name people symbol people pairToken 0x0000…0000 website https://peoplemust.work/ twitter https://x.com/peopleonline_." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, curve(), socials() on people", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:44:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-9, CLM-13, CLM-16, CLM-17, CLM-21, CLM-23, CLM-26], excerpt: "eth_blockNumber 0x32b70df then 0x32b7728. Token code 3248 B prefix 60806040. name people symbol people decimals 18 totalSupply 1e27. owner()/factory() revert. curve() 0x1E99cf99…a2f1. deployer() 0x4CB47362…E6E6 code 0x. launchFactory() 0x7eD598Bc…EC7e. socials twitter https://x.com/peopleonline_ website https://peoplemust.work/. 0xdead 39999800000000001306666666." }
  - { id: R-6, publisher: Blockscout, title: "CurveCompleted / PoolGraduated tx 0x1687bfbe…b2c8", url: "https://robinhoodchain.blockscout.com/tx/0x1687bfbe6150852c0cb5be75ae0ba2567fbb3754fd2b8337248d5247665eb2c8", published_at: 2026-09-02T01:34:19Z, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-15, CLM-21, EVT-2, EVT-3], excerpt: "timestamp 2026-09-02T01:34:19Z block 52185824. CurveCompleted recipient factory quoteOut 4200000000000000021 tokenOut 285714285714285714285714285. PoolGraduated positionId 1467430 tokenAmount 204081632653061224781341107 pairTokenAmount 4200000000000000021. V2MemeHook PoolRegistered quoteToken 0x0000…0000. Initialize on PoolManager 0x8366…0951." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens people 0xD1efCE…4f18", url: "https://api.dexscreener.com/latest/dex/tokens/0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "14 robinhood uniswap v4 pairs. Top pairAddress 0x52d1a1b779a8500a5bf5af4388ef445fd81744d0cef7937bcf095c4d7b5bfbf1 labels v4 base people / people quote Ether ETH 0x0000…0000 liquidity.usd 32762.99 volume.h24 1104020.2 fdv 125554 marketCap 125554 pairCreatedAt 2026-09-02T01:34:19Z. info.websites https://peoplemust.work/ info.socials x.com/peopleonline_." }
  - { id: R-8, publisher: GeckoTerminal, title: "people/WETH Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x52d1a1b779a8500a5bf5af4388ef445fd81744d0cef7937bcf095c4d7b5bfbf1", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-9, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "GET 200. name people / WETH pool_created_at 2026-09-02T01:34:19Z fdv_usd 129076.1445 market_cap_usd null volume_usd.h24 1098414.09293391 reserve_in_usd 29911.6999. dex pons-v2-dex quote robinhood_0x0000000000000000000000000000000000000000." }
  - { id: R-9, publisher: GeckoTerminal, title: "people token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20], excerpt: "GET 200. name people symbol people decimals 18 total_supply 1e27 price_usd 0.0001312904719 fdv_usd 131290.47 market_cap_usd null volume_usd.h24 1208550.89131352 total_reserve_in_usd 17745.49." }
  - { id: R-10, publisher: GeckoTerminal, title: "search/pools people network=robinhood", url: "https://api.geckoterminal.com/api/v2/search/pools?query=people&network=robinhood", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "GET 200. Row 1 people / WETH 0x52d1a1b7…fbf1 reserve_in_usd 30071.0262 volume_usd.h24 1097754.21 fdv_usd 117876.47. Row 2 people / USDG 0xc7108673…4847 reserve 5032.32 vol 95326.59." }
  - { id: R-11, publisher: Blockscout, title: "PonsV2LaunchFactory verified source", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e?tab=contract", published_at: null, accessed_at: 2026-09-03T05:45:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LaunchFactory. Imports Ownable, Ownable2Step, IPoolManager, PonsV2BondingCurve. file_path contracts/src/v2/PonsV2LaunchFactory.sol compiler v0.8.35 verified_at 2026-08-04T17:40:45Z." }
  - { id: R-12, publisher: peoplemust.work, title: "people online site + deployments.json", url: "https://peoplemust.work/deployments.json", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-8, CLM-22, CLM-23, CLM-24, CLM-25, CLM-28], excerpt: "GET 200. live true network Robinhood Chain chainId 4663 payToken 0xd1efce38684400cfe7343ab52de8d1fbe4c54f18 payTokenSymbol PEOPLE hirePriceTokens 33333 people 0x2e5ac9353c3e30ef7439124de13af8fc350ad836. Site title people online. Rooms AAPL/NVDA/GME/GOOGL/QQQ." }
  - { id: R-13, publisher: "@peopleonline_", title: "X profile people / tokenized people", url: "https://x.com/peopleonline_", published_at: null, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, EVT-7], excerpt: "display people handle @peopleonline_. Bio: tokenized people 0xd1efce38684400cfe7343ab52de8d1fbe4c54f18 marketplace peoplemust.work @0xcurs." }
  - { id: R-14, publisher: "@peopleonline_", title: "3.99% of supply has been burnt", url: "https://x.com/peopleonline_/status/2095386437705228414", published_at: 2026-09-03T05:40:31Z, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-26, EVT-5], excerpt: "3.99% of supply has been burnt. someone make it 4% pls ill send u a free person nft" }
  - { id: R-15, publisher: "@emberwispxNFT", title: "Robinhood Top 100 Leaderboard vote URL", url: "https://x.com/emberwispxNFT/status/2095321983487451300", published_at: 2026-09-03T01:24:24Z, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19, EVT-6], excerpt: "Attention $PEOPLE Family! YOUR vote matters! Less than 100 votes are needed to list $PEOPLE on the Robinhood Top 100 Leaderboard. Listing ID: 5798. robinhood-main-dex-vgm.netlify.app/vote/0xD1efCE38684400cfE7343Ab52De8d1fbe4c54f18" }
  - { id: R-16, publisher: Blockscout, title: "Address 0x3711ceA4…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-17, publisher: Blockscout, title: "People ERC-721 0x2e5AC935…D836", url: "https://robinhoodchain.blockscout.com/address/0x2e5AC9353c3E30Ef7439124dE13aF8fc350AD836", published_at: 2026-09-02T01:34:57Z, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22, CLM-25, CLM-28, EVT-4], excerpt: "hash 0x2e5AC9353c3E30Ef7439124dE13aF8fc350AD836 name People is_contract true is_verified true creator_address_hash 0x073fa0954149A062a5550090Da82509AB1f9C21b creation_transaction_hash 0xe8f7a71590323656f7fdccdc2ee91c79ce4144ae0b41fc5608a40a723c6b03ee. token name people online symbol people type ERC-721 holders_count 56. ContractName People file_path src/People.sol compiler v0.8.26 verified_at 2026-09-02T21:03:41Z." }
  - { id: R-18, publisher: Blockscout, title: "V2LaunchLocker TokenSupplyLocked / PositionLocked", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, EVT-3], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true. Graduation tx TokenSupplyLocked token 0xD1efCE…4f18 amount 81632653061224489504373178; PositionLocked token 0xD1efCE…4f18." }
  - { id: R-19, publisher: "@peoplehoodx", title: "people | RobinHood bio reprints a different CA", url: "https://x.com/peoplehoodx", published_at: null, accessed_at: 2026-09-03T05:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-9, CLM-27], excerpt: "display people | RobinHood. Bio: People are getting tokenized now—welcome to the future where humans become tradable memes. 0xcdadb6c8d747feb08cf3bf733e0a81720093b7df. Posts: mint yours with 33,333 tokens. Blockscout token 0xCDAdB6…b7dF name people holders_count 150." }
  - { id: R-20, publisher: Blockscout, title: "Same-ticker people 0x9f1B29…6Cd2 CurvePumpERC1967Proxy", url: "https://robinhoodchain.blockscout.com/address/0x9f1B29C95d3B1CE3d91941A0Ccaa52BAd5E66Cd2", published_at: null, accessed_at: 2026-09-03T05:43:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0x9f1B29C95d3B1CE3d91941A0Ccaa52BAd5E66Cd2 name CurvePumpERC1967Proxy is_contract true is_verified true. token name people symbol people holders_count 2756 total_supply 1e27 type ERC-20. Distinct address from 0xD1efCE…4f18." }
  - { id: R-21, publisher: "@peopleonline_", title: "follow the founder of people @0xcurs", url: "https://x.com/peopleonline_/status/2095384694749626376", published_at: 2026-09-03T05:33:36Z, accessed_at: 2026-09-03T05:41:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-7], excerpt: "a lot of people have been asking me to make my own x account so i just did. follow the founder of people @0xcurs" }

gaps:
  - { priority: P0, question: "Does peoplemust.work bidirectionally list the ERC-20 CA on the HTML homepage, or only in deployments.json / payToken?", checked: "Homepage title people online, no 0xD1ef string in index HTML; deployments.json payToken 0xd1efce…4f18; token socials() website field is peoplemust.work, 2026-09-03", next: "re-read /buy and /how-it-works for a visible CA string" }
  - { priority: P0, question: "Is 0xCDAdB6…b7dF / @peoplehoodx a fork of the same product, and does it share any deployer with 0xD1efCE…4f18?", checked: "Blockscout 0xCDAdB6 holders 150 unverified; @peoplehoodx bio that CA; DexScreener secondary people/ETH book for 0xCDAdB6 is thin vs 0xD1efCE, 2026-09-03", next: "RPC name/symbol/factory on 0xCDAdB6 and compare creator" }
  - { priority: P1, question: "Who can change hirePrice / hiringOpen / office stock addresses on People.sol?", checked: "NFT is verified People.sol; RPC hiringOpen 1 hirePrice 33333e18; owner path not read line-by-line this pass, 2026-09-03", next: "read setter access modifiers on src/People.sol via the explorer" }
  - { priority: P1, question: "Does factory Ownable / fee recipient 0x263ed295…019Dd retain a path after graduation?", checked: "Token owner() reverts; factory is Ownable2Step; SafeProxy received launch fee; locker PositionLocked, 2026-09-03", next: "eth_call factory owner() and read executeCreatorFeeRecipientChange timelock" }
  - { priority: P2, question: "Which Gecko window printed people/WETH vol ~$1,523,087 / liq ~$30,202?", checked: "Live Gecko pool volume_usd.h24 1098414 reserve 29912; DexScreener 1104020 / 32763; search row 1 was 1097754 / 30071, 2026-09-03", next: "archive a Gecko pool screenshot if the ~$1.52M window returns" }
---

# people — research packet

## What it is

A one-billion-supply ERC-20 cloned onto a Pons v2 bonding curve quoted against native ETH, then graduated into a Uniswap v4 people/ETH pool. peoplemust.work spends that token to mint a People ERC-721 (hirePrice 33,333) assigned to stock-token offices. Traders buy and sell people on Uniswap v4.

Themes: memecoin, bonding-curve, nft, graduation

## Why it matters

The people/ETH Uniswap v4 book printed about $1.10M of 24h volume on DexScreener at collection, with Gecko labeling the same pool people/WETH against quote 0x0000…0000. The site is a live NFT mint that routes payroll rooms through Robinhood Stock Tokens while the ERC-20 pair itself is ETH, not a stock token.

## What could go wrong

USD liquidity on the people/ETH book counts both sides of a native-ETH pool, not WETH 0x0Bd7…AD73. Same-ticker people tokens (0xCDAdB6…b7dF, 0x9f1B29…6Cd2) share the name. A Netlify vote URL circulated off the official domain.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x4CB47362…E6E6 at 2026-09-02T01:34:02Z minted people / people supply 1e9*1e18 onto curve 0x1E99…a2f1 with pairToken 0x0000…0000 and graduationThreshold 4.2 ETH. factory() on the token reverts; launchFactory() returns PonsV2LaunchFactory 0x7eD598…EC7e. [verified R-4 R-5 R-6]

CurveCompleted 17 seconds later at 2026-09-02T01:34:19Z swept 4.2 ETH and ~2.857e26 tokens into Uniswap v4 PoolManager 0x8366…0951 pool 0x52d1…fbf1 via V2MemeHook 0xE5e7…Be044. GraduationTokensPermanentlyLocked ~8.16e25 to V2LaunchLocker; LP positionId 1467430 locked. Secondary people/USDG books exist on DexScreener with far less liquidity. [verified R-6 R-7 R-18]

peoplemust.work deployments.json sets payToken to this ERC-20 and people NFT 0x2e5AC935…D836. RPC hirePrice 33333e18, totalMinted 600, hiringOpen true. Offices are AAPL/NVDA/GME/GOOGL/QQQ Robinhood Stock Tokens used as payroll rooms, not the pair quote. [verified R-12 R-17]

## Control and security

Token owner() reverts. Verified PonsV2LauncherToken source says deployer is attribution-only. Deployer EOA 0x4CB47362…E6E6 has no code. Factory is Ownable2Step; launch fee landed on SafeProxy 0x263ed295…019Dd. Creator address in launch params / PoolRegistered is 0xd655C4ea…8E9c. [verified R-2 R-4 R-5 R-6]

PonsV2LauncherToken, PonsV2LaunchFactory, People.sol, and V2LaunchLocker are verified on Blockscout. No audit report URL was located this pass. [verified R-2 R-3 R-17] [unknown]

## Team and provenance

peoplemust.work, token socials(), and DexScreener info.websites / info.socials cross-link https://peoplemust.work/ and @peopleonline_. The handle bio reprints 0xd1efce…4f18. @peopleonline_ named @0xcurs as founder; that profile bio is @peopleonline_. Flag @0xcurs unconfirmed-official until a bidirectional CA post. [verified R-7 R-12 R-13] [claim R-21]

@peoplehoodx uses the same display word people and a 33,333 mint pitch but reprints 0xcdadb6…b7dF. CurvePump people 0x9f1B29…6Cd2 has more holders than this token and is a different deployment. [claim R-19 R-20]

## Economics and activity

people/ETH Uniswap v4 24h volume is 1104020.2 USD and liquidity.usd is 32762.99 at 2026-09-03T05:41:00Z from DexScreener. fdv/marketCap 125554. [claim R-7]

Gecko pool people/WETH volume_usd.h24 1098414.09 reserve_in_usd 29911.70 fdv_usd 129076.14. Gecko token volume_usd.h24 1208550.89 is all-pools, not the ETH book. Assignment lead of ~$1,523,087 vol / ~$30,202 liq was not reproduced at this as_of. [claim R-8 R-9 R-10]

Blockscout holders_count 1661. RPC 0xdead balance ~3.99998% of supply; @peopleonline_ posted 3.99% burnt. Pair created 2026-09-02T01:34:19Z. [claim R-1 R-5 R-14]

## Material risks

- Quote is native ETH 0x0000…0000, not WETH 0x0Bd7…AD73 and not a stock token; Gecko still labels the book people/WETH. [verified R-7 R-8]
- Same-ticker people tokens 0xCDAdB6…b7dF and 0x9f1B29…6Cd2 share the name. [claim R-19 R-20]
- Netlify vote URL is a third-party-link, not on peoplemust.work. [claim R-15]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/curve/NFT and both launch/graduation txs, RPC name/symbol/curve/launchFactory/socials/dead/NFT views, DexScreener, Gecko token/pool/search, peoplemust.work + deployments.json, @peopleonline_ profile and burn/founder posts, @peoplehoodx, and the vote post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-12]
- Numbers: 1104020.2 is the DexScreener people/ETH v4 pool 24h volume, not Gecko token all-pools 1208550.89. Reserve 32762.99 is that Dex pair; Gecko reserve 29911.70 is the same pool, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that @peoplehoodx 0xCDAdB6…b7dF is the official people token and 0xD1efCE…4f18 is a copy. Token socials(), DexScreener profile, and peoplemust.work payToken all reprint 0xD1efCE…4f18; @peoplehoodx reprints a different CA. [inference R-12 R-19]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no people / 0xD1efCE…4f18.
- GET research/inbox/packets/people/WORK-20260903-grok-heavy-icarus-research.md on default and grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research → 404 both, then collect.
- Explorer: Blockscout api/v2 token, factory, deployer, curve, NFT, launchAndBuy 0x8212d464…ed4a, CurveCompleted 0x1687bfbe…b2c8, locker, holders. Chrome UA.
- RPC 4663: eth_getCode/eth_call name/symbol/decimals/totalSupply/curve/deployer/launchFactory/socials/graduated/pairToken/dead/NFT at blocks 53174239–53180200.
- Aggregators: DexScreener latest/dex/tokens (source 3). Gecko first GET 200 on search/pools, token, pool — used as corroboration only.
- Social: X Latest $people / CA / peoplemust.work; from:peopleonline_; user search peoplehoodx / peopleonline_.
- Site: peoplemust.work HTTP 200; deployments.json payToken this CA.
- Failed: homepage HTML has no CA string (deployments.json does); factory() on the token reverts (launchFactory() used); Gecko people/WETH vol ~$1.52M not reproduced.
- Time: collection 2026-09-03T05:39Z–2026-09-03T05:46Z.
