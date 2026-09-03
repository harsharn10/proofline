---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: golden
name: GOLDEN
packet_tier: seed
as_of: 2026-09-03T05:28:00Z
prior_packet: null
supersedes: null
owned_slugs: [golden]
allowed_paths:
  - research/inbox/packets/golden/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: GOLDEN
  aliases: ["The Golden Age"]
  symbols: [GOLDEN]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — token.socials() website is https://www.whitehouse.gov/crypto/ (not a token site); DexScreener info.websites []; Gecko token attributes have no website this pass"
  official_handle: "NULL — token.socials() twitter and DexScreener info.socials list x.com/thegoldenagerh; X bio Welcome to the $GOLDEN age does not embed CA 0xdFee…217a; no bidirectional confirmation this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, Pons launchpad HTML, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…C7e"
        - "golden is the ERC-20 at 0xdFee…217a created through that factory; entity_kind token, not protocol"
        - "No shared handle; this token has no bidirectional official site or handle this pass"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at artificialinu.com / @ArtificiallyInu paired to NVDA via LongLauncher"
        - "GOLDEN is at 0xdFee…217a paired to DJT via PonsV2LaunchFactory"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "GOLDEN was launched by PonsV2LaunchAndBuy 0xe33E…2948 / PonsV2LaunchFactory 0x7eD5…C7e, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "GOLDEN is a Pons v2 LaunchToken in a Uniswap v4 GOLDEN/DJT pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, bonding-curve, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xdFee…217a has 3248 bytes of code on 4663; name The Golden Age, symbol GOLDEN, totalSupply 1e27, fully verified PonsV2LauncherToken. PonsV2LaunchFactory TokenLaunched at 2026-09-03T01:20:52Z with pairToken DJT 0x1D11…4516; createGraduatedPool at 2026-09-03T01:21:19Z locked Uniswap v4 pool 0xf978…45b3 positionId 1581610. V2LaunchLocker isLocked true. DJT is in GET /rhj/assets. Distinct from packed dollar-1 and packed bigly. No bidirectional official site or handle this pass. [R-1] [R-3] [R-4] [R-5] [R-6] [R-7] [R-8] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-14], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: other, url: "https://www.ponsfamily.com/launchpad/0xdFee8e117DfEF700D7C41170f67c4A591445217a", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/thegoldenagerh", authenticity: unconfirmed }

deployments:
  - label: GOLDEN token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xdFee8e117DfEF700D7C41170f67c4A591445217a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:22:23Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-3]
  - label: PonsV2LaunchFactory
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-15]
  - label: V2LaunchLocker (top holder / locked position)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:26:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
    receipt_ids: [R-4, R-12, R-16]
  - label: DJT Robinhood Stock Token (pair quote / rail)
    role: token
    address:
      value: "0x1D11f0496982706C5e14A514D4E79F2e6BdE4516"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:24:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-10, R-14]

metrics:
  - { kind: volume_24h, value: 285202.227274197, currency: USD, as_of: 2026-09-03T05:24:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xf978e084d88bd7044db28347b820ef5e73cc2ec148e8342718a77d78213d45b3 volume_usd.h24 (djt/GOLDEN pool, not Gecko token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 6819.5089, currency: USD, as_of: 2026-09-03T05:24:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xf978e084…45b3 reserve_in_usd", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 308330.74, currency: USD, as_of: 2026-09-03T05:22:23Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xdFee8e117DfEF700D7C41170f67c4A591445217a pair 0xf978…45b3 GOLDEN/DJT Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 6417.63, currency: USD, as_of: 2026-09-03T05:22:23Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xdFee…217a pair 0xf978…45b3 GOLDEN/DJT liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 5948, currency: USD, as_of: 2026-09-03T05:22:23Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xdFee…217a pair 0xf978…45b3 fdv/marketCap (GOLDEN as base; not Gecko pool fdv_usd which prices DJT as base)", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 177, currency: null, as_of: 2026-09-03T05:22:23Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xdFee8e117DfEF700D7C41170f67c4A591445217a holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:25:00Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x32b4da3 (53169187). Token 0xdFee…217a eth_getCode 3248 bytes prefix 0x60806040 (not EIP-1167). name The Golden Age; symbol GOLDEN; decimals 18; totalSupply 1e27. owner() and factory() revert. deployer() 0x3251E169D8c7b6793a34ffa5512A897C725cf8f3; launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; curve() 0xfe9b468bA9239676464675856D9D6677c3409ec3; description memecoin. socials() twitter https://x.com/thegoldenagerh; telegram/discord/farcaster empty; website https://www.whitehouse.gov/crypto/. Deployer EOA eth_getCode 0x." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:25:00Z, receipt_ids: [R-4, R-6], result: "V2LaunchLocker 0x2674…4952 factory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd; isLocked(token) true; lockedPositions 1581610; lockedTokenSupply 81632653061224493409231436. Factory locker() 0x2674…4952; memeHook 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044; launchDeployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42; poolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951; launchForwarder 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948; owner 0x263e…19Dd; approvedPairTokens(DJT) true. getLaunchedToken exists true phase 2 pairToken DJT creatorFeeRecipient 0x5b7FeA1B50fDbbE96C090a6Fd527155e2725E5EE. eth_getLogs PoolGraduated tx 0x4b71fe7a…0bb2 block 53026464 positionId 1581610." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:27:00Z, receipt_ids: [R-1, R-2, R-5, R-6, R-12, R-14, R-15, R-16, R-18], result: "Blockscout api/v2 token 0xdFee…217a name The Golden Age symbol GOLDEN holders_count 177 total_supply 1e27 is_contract true is_verified true is_fully_verified true name PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol creator_address_hash 0x3711ceA4…1A42 (PonsV2LaunchDeployer) tx 0x35be51dd…31e6. Factory 0x7eD5…C7e name PonsV2LaunchFactory is_verified true is_fully_verified true. Locker 0x2674…4952 name V2LaunchLocker is_partially_verified true. DJT 0x1D11…4516 name BeaconProxy is_verified true token Trump Media & Technology Group Corp. • Robinhood Token. Launch tx 0x35be51dd…31e6 2026-09-03T01:20:52Z from 0x3251E169…cf8f3 to PonsV2LaunchAndBuy launchAndBuy pairToken DJT. Grad tx 0x4b71fe7a…0bb2 2026-09-03T01:21:19Z createGraduatedPool(token 0xdFee…217a)." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:24:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0xdFee…217a: 3 robinhood uniswap pairs; top GOLDEN/DJT v4 0xf978…45b3 quote 0x1D11…4516 Trump Media & Technology Group • Robinhood Token / DJT liquidity.usd 6417.63 volume.h24 308330.74 fdv 5948 marketCap 5948 pairCreatedAt 1788398479000 (2026-09-03T01:21:19Z) info.websites [] info.socials x.com/thegoldenagerh. Gecko pool name djt / GOLDEN dex pons-v2-dex pool_created_at 2026-09-03T01:21:19Z volume_usd.h24 285202.227274197 reserve_in_usd 6819.5089 fdv_usd 1463849.6951331 (DJT as Gecko base_token, not GOLDEN fdv). Gecko token fdv_usd 6115.596682247 volume_usd.h24 285303.62881547 launchpad_details.completed true completed_at 2026-09-03T01:21:19Z migrated_destination_pool_address 0xf978…45b3." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:24:14Z, receipt_ids: [R-10], result: "GET api.robinhood.com/rhj/assets HTTP 200. assets length 194. tokenSymbol DJT tokenName Trump Media & Technology Group • Robinhood Token deployments.contractAddress 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 chainId 4663 status ASSET_STATUS_ACTIVE. No GOLDEN row." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Pons v2 bonding-curve launch that graduates into a locked Uniswap v4 pool quoted against DJT. TokenLaunched at 2026-09-03T01:20:52Z with pairToken 0x1D11…4516; createGraduatedPool at 2026-09-03T01:21:19Z; V2LaunchLocker isLocked true and holds positionId 1581610.", class: verified, observed_at: 2026-09-03T05:27:00Z, receipt_ids: [R-4, R-5, R-6, R-12], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "The Golden Age", class: verified, observed_at: 2026-09-03T05:22:23Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "GOLDEN", class: verified, observed_at: 2026-09-03T05:22:23Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xdFee8e117DfEF700D7C41170f67c4A591445217a", class: verified, observed_at: 2026-09-03T05:22:23Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-4, R-15], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-1, R-3, R-6, R-8], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-7, R-8, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; token.socials() twitter is x.com/thegoldenagerh; DexScreener info.socials is the same URL; X bio does not embed the CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-3, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote DJT 0x1D11…4516 is Trump Media & Technology Group Corp. • Robinhood Token, BeaconProxy Stock implementation, and GET /rhj/assets lists that address. DJT is a rail. Distinct from packed dollar-1 (0xdCe5…e6da) and packed bigly (0x73114aBD…7c04) and from census LONG / Artificial Inu / L4VA.", class: verified, observed_at: 2026-09-03T05:24:14Z, receipt_ids: [R-10, R-14, R-7], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "djt/GOLDEN Uniswap v4 (Gecko pool 0xf978…45b3) 24h volume 285202.227274197 USD and reserve_in_usd 6819.5089 at 2026-09-03T05:24:00Z (pool slice, not Gecko token all-pools 285303.62881547)", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 6417.63 volume.h24 308330.74 fdv/marketCap 5948 at 2026-09-03T05:22:23Z", class: verified, observed_at: 2026-09-03T05:22:23Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 177, class: verified, observed_at: 2026-09-03T05:22:23Z, receipt_ids: [R-2], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "Token owner() reverts. Factory owner() and locker owner() return SafeProxy 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. Partially verified locker source: no collectFees or withdrawal; onlyOwner setFactory once. Token deployer() is attribution-only.", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-3, R-4, R-12, R-16], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-14, field: other, value: "Pair asset is DJT 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516; venue is Uniswap v4 PoolManager 0x8366…0951 pool 0xf978…45b3 after Pons v2 graduation; Gecko dex id pons-v2-dex", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-4, R-6, R-7, R-8], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-15, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; TokenLaunched and locker.factory() name PonsV2LaunchFactory 0x7eD5…C7e as the pad, not LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:27:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:22:23Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, Pons launchpad HTML, or X search this pass", class: unknown, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: identity.domain, value: "NULL — token.socials() website is https://www.whitehouse.gov/crypto/; DexScreener info.websites []; Gecko token has no website field", class: claim, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-3, R-7, R-9, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: candidate, value: "golden | GOLDEN | NULL | NULL — discovery token not in census 49; distinct from packed dollar-1 and packed bigly", class: claim, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token volume_usd.h24 285303.62881547 across all pools, not the DJT book alone", class: verified, observed_at: 2026-09-03T05:22:23Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "Gecko token fdv_usd 6115.596682247 market_cap_usd null; DexScreener GOLDEN/DJT fdv/marketCap 5948. Gecko pool fdv_usd 1463849.6951331 is DJT-as-base, not GOLDEN fdv.", class: verified, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "unconfirmed-official / third-party-link: DexScreener info.websites []; info.socials is x.com/thegoldenagerh; token.socials() twitter matches that URL; website field is whitehouse.gov/crypto; Pons launchpad HTML titles The Golden Age ($GOLDEN)", class: claim, observed_at: 2026-09-03T05:24:19Z, receipt_ids: [R-7, R-13, R-17], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: control.privileged-role, value: "launchAndBuy creatorFeeRecipient param 0x3251E169…cf8f3; getLaunchedToken.creatorFeeRecipient 0x5b7FeA1B50fDbbE96C090a6Fd527155e2725E5EE (unverified contract); factory owner is SafeProxy 0x263e…19Dd; PoolRegistered creator 0x3251E169…cf8f3", class: verified, observed_at: 2026-09-03T05:27:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-24, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T05:22:23Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0x1D11f0496982706C5e14A514D4E79F2e6BdE4516", class: verified, observed_at: 2026-09-03T05:24:14Z, receipt_ids: [R-10, R-14], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", class: verified, observed_at: 2026-09-03T05:26:00Z, receipt_ids: [R-4, R-12, R-16], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-27, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:24:00Z, receipt_ids: [R-6, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: other, value: "Token 0xdFee…217a is_verified true is_fully_verified true on Blockscout this pass (PonsV2LauncherToken.sol compiler v0.8.35)", class: verified, observed_at: 2026-09-03T05:22:23Z, receipt_ids: [R-1, R-18], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-29, field: other, value: "getLaunchedToken exists true; curve 0xfe9b468bA9239676464675856D9D6677c3409ec3; TokenLaunched deployer 0x3251E169…cf8f3 (EOA, 0 B); phase uint8 2; launch tx to PonsV2LaunchAndBuy 0xe33E…2948 which equals factory.launchForwarder()", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko djt/GOLDEN 24h volume $285k, liquidity $6.8k"
    summary: "Gecko pool 0xf978…45b3 volume_usd.h24 285202 reserve_in_usd 6819. DexScreener same pair volume.h24 308331 liquidity.usd 6418 fdv 5948."
    occurred_at: 2026-09-03T05:24:00Z
    observed_at: 2026-09-03T05:24:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "PonsV2LaunchFactory TokenLaunched minted The Golden Age / GOLDEN"
    summary: "Tx 0x35be51dd…31e6 from 0x3251E169…cf8f3 at 2026-09-03T01:20:52Z to PonsV2LaunchAndBuy; pairToken DJT."
    occurred_at: 2026-09-03T01:20:52Z
    observed_at: 2026-09-03T05:24:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5]
  - id: EVT-3
    type: onchain
    title: "createGraduatedPool locked GOLDEN/DJT Uniswap v4 position 1581610"
    summary: "Tx 0x4b71fe7a…0bb2 at 2026-09-03T01:21:19Z; PoolGraduated pool 0xf978…45b3; V2LaunchLocker isLocked true."
    occurred_at: 2026-09-03T01:21:19Z
    observed_at: 2026-09-03T05:27:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-12]
  - id: EVT-4
    type: ct
    title: "@thegoldenagerh posted The golden age has begun"
    summary: "Handle listed on token.socials() and DexScreener. Bio Welcome to the $GOLDEN age. Posts do not embed CA 0xdFee…217a this pass."
    occurred_at: 2026-09-03T03:12:00Z
    observed_at: 2026-09-03T05:24:19Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-5
    type: ct
    title: "@dexpaidpanther flagged The Golden Age (GOLDEN)/DJT Dex paid"
    summary: "Post embeds CA 0xdFee8e117DfEF700D7C41170f67c4A591445217a, chain robinhood (ponsv2), MC 77K at 2026-09-03T01:33:18Z."
    occurred_at: 2026-09-03T01:33:18Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-19]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0xdFee…217a The Golden Age / GOLDEN", url: "https://robinhoodchain.blockscout.com/address/0xdFee8e117DfEF700D7C41170f67c4A591445217a", published_at: null, accessed_at: 2026-09-03T05:22:23Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-15, CLM-19, CLM-24, CLM-28], excerpt: "hash 0xdFee8e117DfEF700D7C41170f67c4A591445217a name PonsV2LauncherToken is_contract true is_verified true is_fully_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x35be51dd6d8ed53c7f06f3531325ede6f9232592212237b10b01cfebdb6a31e6. token name The Golden Age symbol GOLDEN decimals 18 total_supply 1e27 holders_count 177 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xdFee…217a holders_count", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xdFee8e117DfEF700D7C41170f67c4A591445217a", published_at: null, accessed_at: 2026-09-03T05:22:23Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12, CLM-24], excerpt: "address_hash 0xdFee8e117DfEF700D7C41170f67c4A591445217a name The Golden Age symbol GOLDEN decimals 18 total_supply 1000000000000000000000000000 holders_count 177 type ERC-20 reputation ok." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory, socials on 0xdFee…217a", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-8, CLM-13, CLM-16, CLM-18], excerpt: "eth_blockNumber 0x32b4da3 (53169187). Token code 3248 B prefix 0x60806040. name The Golden Age symbol GOLDEN decimals 18 totalSupply 1e27. owner() revert. factory() revert. deployer() 0x3251E169…cf8f3 launchFactory() 0x7eD598Bc…C7e curve() 0xfe9b468b…0ec3. socials() twitter https://x.com/thegoldenagerh website https://www.whitehouse.gov/crypto/ other empty. description memecoin." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "factory getLaunchedToken, locker isLocked, approvedPairTokens(DJT)", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-13, CLM-14, CLM-15, CLM-23, CLM-26, CLM-29], excerpt: "Locker isLocked true lockedPositions 1581610 lockedTokenSupply 81632653061224493409231436 factory 0x7eD5…C7e owner Safe 0x263e…19Dd. Factory locker 0x2674…4952 poolManager 0x8366…0951 launchForwarder 0xe33E…2948 approvedPairTokens(DJT) true. getLaunchedToken exists true phase 2 pairToken DJT creatorFeeRecipient 0x5b7FeA1B…E5EE." }
  - { id: R-5, publisher: Blockscout, title: "launchAndBuy tx 0x35be51dd…31e6", url: "https://robinhoodchain.blockscout.com/tx/0x35be51dd6d8ed53c7f06f3531325ede6f9232592212237b10b01cfebdb6a31e6", published_at: 2026-09-03T01:20:52Z, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-15, CLM-23, CLM-29, EVT-2], excerpt: "timestamp 2026-09-03T01:20:52.000000Z status ok block 53026208 from 0x3251E169D8c7b6793a34ffa5512A897C725cf8f3 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E47…2948 method launchAndBuy. params name The Golden Age symbol GOLDEN pairToken 0x1D11f049…4516. TokenLaunched token 0xdFee…217a." }
  - { id: R-6, publisher: Blockscout, title: "createGraduatedPool tx 0x4b71fe7a…0bb2", url: "https://robinhoodchain.blockscout.com/tx/0x4b71fe7a58331e6446c7dbf67359490248e1899fe85255ea0b6a8c71429a0bb2", published_at: 2026-09-03T01:21:19Z, accessed_at: 2026-09-03T05:27:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-14, CLM-27, EVT-3], excerpt: "timestamp 2026-09-03T01:21:19.000000Z status ok block 53026464 from 0x49BbF2b70955Fb3a106e084D4BFDa92d334573d2 to PonsV2LaunchFactory createGraduatedPool(token 0xdFee…217a). PoolGraduated positionId 1581610. Initialize pool id 0xf978e084…45b3 currency0 DJT currency1 GOLDEN hooks V2MemeHook." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens GOLDEN", url: "https://api.dexscreener.com/latest/dex/tokens/0xdFee8e117DfEF700D7C41170f67c4A591445217a", published_at: null, accessed_at: 2026-09-03T05:22:23Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-14, CLM-16, CLM-18, CLM-19, CLM-21, CLM-22, EVT-1], excerpt: "3 robinhood uniswap pairs. Top pairAddress 0xf978e084d88bd7044db28347b820ef5e73cc2ec148e8342718a77d78213d45b3 labels v4 base The Golden Age / GOLDEN quote Trump Media & Technology Group • Robinhood Token / DJT 0x1D11f049…4516 liquidity.usd 6417.63 volume.h24 308330.74 fdv 5948 marketCap 5948 pairCreatedAt 1788398479000. info.websites [] info.socials x.com/thegoldenagerh." }
  - { id: R-8, publisher: GeckoTerminal, title: "djt/GOLDEN Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xf978e084d88bd7044db28347b820ef5e73cc2ec148e8342718a77d78213d45b3", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-14, CLM-21, EVT-1], excerpt: "name djt / GOLDEN pool_created_at 2026-09-03T01:21:19Z fdv_usd 1463849.6951331 market_cap_usd 1461533.76269606 volume_usd.h24 285202.227274197 reserve_in_usd 6819.5089. dex pons-v2-dex. relationships base_token robinhood_0x1d11f049…4516 quote_token robinhood_0xdfee8e11…217a. Gecko first GET HTTP 200." }
  - { id: R-9, publisher: GeckoTerminal, title: "The Golden Age token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xdFee8e117DfEF700D7C41170f67c4A591445217a", published_at: null, accessed_at: 2026-09-03T05:22:23Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-18, CLM-20, CLM-21, CLM-27], excerpt: "name The Golden Age symbol GOLDEN decimals 18 total_supply 1e27 price_usd 0.000006115596682 fdv_usd 6115.596682247 market_cap_usd null volume_usd.h24 285303.62881547 total_reserve_in_usd 3291.64448761. launchpad_details.completed true completed_at 2026-09-03T01:21:19.000Z migrated_destination_pool_address 0xf978e084…45b3. coingecko_coin_id null." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:24:14Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-25], excerpt: "HTTP 200. assets length 194. tokenSymbol DJT tokenName Trump Media & Technology Group • Robinhood Token deployments.contractAddress 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 chainId 4663 status ASSET_STATUS_ACTIVE. Scan for GOLDEN returned 0 hits." }
  - { id: R-11, publisher: Blockscout, title: "Token holders page 0xdFee…217a", url: "https://robinhoodchain.blockscout.com/token/0xdFee8e117DfEF700D7C41170f67c4A591445217a?tab=holders", published_at: null, accessed_at: 2026-09-03T05:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-12], excerpt: "api/v2/tokens/.../holders first page: PoolManager 0x8366…0951 541181748515083774827702980; V2LaunchLocker 0x2674…4952 81632653061224493409231772; next_page_params items_count 50." }
  - { id: R-12, publisher: Blockscout, title: "V2LaunchLocker verified source", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952?tab=contract", published_at: null, accessed_at: 2026-09-03T05:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13, CLM-26, EVT-3], excerpt: "ContractName V2LaunchLocker file_path src/v2/V2LaunchLocker.sol compiler v0.8.35 is_verified true is_partially_verified true is_fully_verified false. Comment: Permanently holds the graduated Uniswap V4 position NFT. no collectFees; exposes no withdrawal, so locked liquidity can never be removed by an administrator." }
  - { id: R-13, publisher: "@thegoldenagerh", title: "The golden age has begun", url: "https://x.com/thegoldenagerh/status/2095349059892695043", published_at: 2026-09-03T03:12:00Z, accessed_at: 2026-09-03T05:24:19Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-22, EVT-4], excerpt: "Handle The Golden Age @thegoldenagerh. Bio: Welcome to the $GOLDEN age. Post: The golden age has begun. Later post 2095357616071246095: USA will be the LEADER of crypto in the GOLDEN age with Robinhood being the flagship innovator in the space. No CA in bio or these posts this pass." }
  - { id: R-14, publisher: Blockscout, title: "Token 0x1D11…4516 DJT Robinhood Token", url: "https://robinhoodchain.blockscout.com/address/0x1D11f0496982706C5e14A514D4E79F2e6BdE4516", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Trump Media & Technology Group Corp. • Robinhood Token symbol DJT holders_count 20611." }
  - { id: R-15, publisher: Blockscout, title: "Address 0x7eD5…C7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-15], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol compiler v0.8.35 verified_at 2026-08-04T17:40:45Z. creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-16, publisher: Blockscout, title: "Address 0x2674…4952 V2LaunchLocker", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T05:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-26], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true is_partially_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-17, publisher: Pons, title: "Pons launchpad page for GOLDEN", url: "https://www.ponsfamily.com/launchpad/0xdFee8e117DfEF700D7C41170f67c4A591445217a", published_at: null, accessed_at: 2026-09-03T05:24:19Z, kind: other, authority: primary, authenticity: unconfirmed, supports: [CLM-18, CLM-22], excerpt: "HTTP 200. title The Golden Age ($GOLDEN) · pons. og:title The Golden Age ($GOLDEN) · pons. meta description memecoin. x-matched-path /launchpad/[token]. HTML contains dFee8e11, DJT, and goldenagerh. No whitehouse.gov string in the document this pass." }
  - { id: R-18, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xdFee8e117DfEF700D7C41170f67c4A591445217a?tab=contract", published_at: null, accessed_at: 2026-09-03T05:22:23Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-28], excerpt: "ContractName PonsV2LauncherToken. file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35+commit.47b9dedd is_verified true is_fully_verified true is_partially_verified false verified_at 2026-09-03T01:22:23.920857Z. decoded constructor name_ The Golden Age symbol_ GOLDEN." }
  - { id: R-19, publisher: "@dexpaidpanther", title: "Dex paid: The Golden Age (GOLDEN) / DJT", url: "https://x.com/dexpaidpanther/status/2095324220486000926", published_at: 2026-09-03T01:33:18Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "Dex paid: The Golden Age (GOLDEN) / DJT 0xdFee8e117DfEF700D7C41170f67c4A591445217a MC: 77K Chain: robinhood (ponsv2) Time detected: 04:33:16 Rating: Good." }
  - { id: R-20, publisher: Blockscout, title: "TokenLaunched log for GOLDEN", url: "https://robinhoodchain.blockscout.com/tx/0x35be51dd6d8ed53c7f06f3531325ede6f9232592212237b10b01cfebdb6a31e6", published_at: 2026-09-03T01:20:52Z, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, EVT-2], excerpt: "TokenLaunched token 0xdFee8e117DfEF700D7C41170f67c4A591445217a curve 0xfe9b468bA9239676464675856D9D6677c3409ec3 deployer 0x3251E169D8c7b6793a34ffa5512A897C725cf8f3 pairToken 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 launchConfigId 0 graduationThreshold 917162201643832986520. Block 53026208." }
  - { id: R-21, publisher: "@xbtscout", title: "$GOLDEN robinhood early call flag", url: "https://x.com/xbtscout/status/2095326559569592374", published_at: 2026-09-03T01:42:35Z, accessed_at: 2026-09-03T05:22:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [], excerpt: "$GOLDEN — robinhood early call flag. called at $115.8k mcap. liquidity sits at $28.2k. launched via pons_v2. CA: 0xdfee8e117dfef700d7c41170f67c4a591445217a. Live DexScreener fdv at collection is 5948, not the 115.8k call figure." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0xdFee…217a?", checked: "token.socials() twitter x.com/thegoldenagerh; DexScreener info.socials same; X bio Welcome to the $GOLDEN age with no CA; info.websites []; website field is whitehouse.gov/crypto, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle" }
  - { priority: P0, question: "What is unverified creatorFeeRecipient 0x5b7FeA1B…E5EE, and why does it differ from the launchAndBuy param 0x3251E169…cf8f3?", checked: "getLaunchedToken.creatorFeeRecipient 0x5b7FeA1B…E5EE is_verified false is_contract true; launch params used 0x3251E169…cf8f3, 2026-09-03", next: "eth_getCode and factory source path that rewrites creatorFeeRecipient" }
  - { priority: P1, question: "Does verified V2LaunchLocker source leave any privileged path despite isLocked true?", checked: "isLocked true; source comment no collectFees / no withdrawal; factory owner Safe 0x263e…19Dd; locker is_partially_verified, 2026-09-03", next: "read setFactory and onERC721Received modifiers in src/v2/V2LaunchLocker.sol on the explorer" }
  - { priority: P1, question: "Does Robinhood later list a GOLDEN Stock Token, and would it share this 0xdFee…217a address?", checked: "GET api.robinhood.com/rhj/assets 194 assets, 0 GOLDEN hits; DJT rail is listed at 0x1D11…4516, 2026-09-03", next: "re-fetch /rhj/assets if a GOLDEN ticker appears" }
  - { priority: P2, question: "Why did Gecko pool fdv_usd print $1.46M while DexScreener GOLDEN fdv is $5948?", checked: "Gecko pool relationships.base_token is DJT; DexScreener base is GOLDEN; Gecko token fdv_usd 6115, 2026-09-03", next: "keep using Gecko token fdv or DexScreener pair fdv for GOLDEN, not the DJT-as-base pool fdv" }
---

# GOLDEN — research packet

## What it is

A one-billion-supply ERC-20 cloned through Pons v2 into a Uniswap v4 pool quoted against DJT. PonsV2LaunchAndBuy launchAndBuy deploys The Golden Age (GOLDEN) and seeds the curve; createGraduatedPool then locks the GOLDEN/DJT book. Traders buy and sell GOLDEN on Uniswap v4 after graduation. No bidirectional official site or handle was located this pass.

Themes: memecoin, stock-paired:DJT, rwa, graduation

## Why it matters

The GOLDEN/DJT Uniswap v4 book printed about $285k of 24h volume on Gecko at collection, with the quote token the Robinhood DJT Stock Token at 0x1D11…4516. GET /rhj/assets lists that address. DJT is a rail. The token is a Pons v2 graduation, distinct from packed dollar-1 at 0xdCe5…e6da and packed bigly at 0x73114aBD…7c04.

## What could go wrong

USD liquidity figures on the GOLDEN/DJT book count both sides, and the quote side is DJT, not USDG. Gecko pool fdv_usd prices DJT as base and is not GOLDEN fdv. No bidirectional official handle was located, so comms surfaces stay unconfirmed-official. Assignment lead of ~$30k liq was not reproduced at this as_of; live DexScreener liquidity.usd is $6418.

## Product and mechanics

PonsV2LaunchFactory 0x7eD5…C7e clones PonsV2LauncherToken. launchAndBuy from 0x3251E169…cf8f3 at 2026-09-03T01:20:52Z minted The Golden Age / GOLDEN supply 1e9*1e18 against pairToken DJT. factory launchForwarder is PonsV2LaunchAndBuy 0xe33E…2948. TokenLaunched names curve 0xfe9b…0ec3. [verified R-5 R-3 R-20]

createGraduatedPool from 0x49BbF2b7…73d2 at 2026-09-03T01:21:19Z initialized Uniswap v4 poolId 0xf978…45b3 (currency0 DJT, currency1 GOLDEN, hooks V2MemeHook 0xE5e7…e044) and locked positionId 1581610 in V2LaunchLocker. Gecko launchpad_details.completed true at that timestamp. Secondary GOLDEN/ETH books exist on DexScreener with far less liquidity than the DJT book. [verified R-6 R-7 R-9]

## Control and security

Token owner() reverts. Factory owner() and locker owner() return SafeProxy 0x263e…19Dd. Deployer 0x3251E169…cf8f3 has no code. getLaunchedToken.creatorFeeRecipient is unverified 0x5b7FeA1B…E5EE, which is not the launchAndBuy param 0x3251E169…cf8f3. [verified R-3 R-4 R-5]

PonsV2LauncherToken and PonsV2LaunchFactory are fully verified on Blockscout (compiler v0.8.35). V2LaunchLocker is partially verified; source says there is no collectFees and no withdrawal. No audit report URL was located this pass. [verified R-12 R-15 R-18] [unknown]

## Team and provenance

No official domain was located. DexScreener info.websites is empty. token.socials() website is https://www.whitehouse.gov/crypto/, which is not a token site. token.socials() twitter and DexScreener info.socials list x.com/thegoldenagerh; the X bio does not embed the CA. Pons launchpad HTML titles The Golden Age ($GOLDEN). Flag unconfirmed-official and third-party-link. [claim R-7 R-13 R-17]

Census Pons is the pad that created the token. Packed dollar-1 is a different Pons v2 DJT graduation at 0xdCe5…e6da. Packed bigly is a different Pons v2 DJT graduation at 0x73114aBD…7c04. Census Artificial Inu / LONG / L4VA share the stock-paired neighborhood only. [verified R-5 R-15]

## Economics and activity

djt/GOLDEN Uniswap v4 24h volume is 285202.227274197 USD and reserve_in_usd is 6819.5089 at 2026-09-03T05:24:00Z from the Gecko pool endpoint. Gecko token fdv_usd is 6115.596682247. Gecko token volume_usd.h24 is 285303.62881547 across all pools, not the DJT book. Gecko pool fdv_usd 1463849.6951331 is DJT-as-base, not GOLDEN fdv. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 6417.63, volume.h24 308330.74, fdv/marketCap 5948. Blockscout holders_count 177. Pair created 2026-09-03T01:21:19Z. Assignment lead of liq ~$30,235 / vol ~$274,952 was not reproduced at this as_of; live DexScreener liq is $6418 and vol is $308k. [claim R-1 R-7]

## Material risks

- Quote token DJT 0x1D11…4516 is the rail in GET /rhj/assets; GOLDEN is not a Robinhood Stock Token. [verified R-10 R-14]
- Pool USD reserve is GOLDEN plus DJT, not a USDG or WETH backstop. [claim R-7 R-8]
- Gecko pool fdv_usd prices DJT as base and must not be read as GOLDEN market cap. [claim R-8 R-9]
- No bidirectional official handle or domain this pass; Telegram was not located; X is unconfirmed-official. [claim R-7 R-13]
- creatorFeeRecipient 0x5b7FeA1B…E5EE is unverified. [verified R-4]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/locker/DJT and both launch/grad txs, RPC name/symbol/launchFactory/socials/isLocked/getLaunchedToken, DexScreener, Gecko pool/token (first GET HTTP 200), /rhj/assets, Pons launchpad HTML, @thegoldenagerh, and the Dex-paid post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-8 R-10]
- Numbers: 285202.23 is the Gecko djt/GOLDEN pool 24h volume, not the 285303.63 token all-pools figure. Reserve 6819.51 is that pool. DexScreener 308330.74 / 6417.63 is the same pair, different aggregator. GOLDEN fdv is DexScreener 5948 / Gecko token 6116, not Gecko pool 1.46M. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that GOLDEN is packed dollar-1, packed bigly, or an official Trump Media product. dollar-1 is 0xdCe5…e6da launched 2026-09-02; bigly is 0x73114aBD…7c04 launched 2026-08-15; this token is 0xdFee…217a launched 2026-09-03T01:20:52Z; GET /rhj/assets has DJT as the rail and no GOLDEN row. [inference R-5 R-10]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59` origin/main SHA 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no golden / GOLDEN / The Golden Age / 0xdFee…217a. GET packet path on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404.
- Explorer: Blockscout api/v2 token, factory, locker, DJT, launchAndBuy 0x35be51dd…31e6, createGraduatedPool 0x4b71fe7a…0bb2, TokenLaunched and PoolGraduated logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53169187.
- Aggregators: DexScreener latest/dex/tokens and search GOLDEN DJT; Gecko token first GET HTTP 200, then pool.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, DJT hit, 0 GOLDEN.
- Social: X keyword $GOLDEN / CA; from:thegoldenagerh; user search The Golden Age; Pons launchpad HTML.
- Failed: Blockscout holders `limit` query param 400 (fetched without it); Blockscout address transactions filter returned empty this pass (creation is via factory, not a to=token tx); X user search did not rank @thegoldenagerh in the first results (from: query did).
- Time: collection 2026-09-03T05:22Z–2026-09-03T05:28Z.
