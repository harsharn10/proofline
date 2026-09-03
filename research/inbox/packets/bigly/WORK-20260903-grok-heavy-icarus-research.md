---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: bigly
name: BIGLY
packet_tier: seed
as_of: 2026-09-03T05:12:00Z
prior_packet: null
supersedes: null
owned_slugs: [bigly]
allowed_paths:
  - research/inbox/packets/bigly/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: BIGLY
  aliases: []
  symbols: [BIGLY]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — token.socials() website empty; DexScreener info.websites is the Pons launchpad path for this CA, not a distinct token domain; Gecko token attributes have no website this pass"
  official_handle: "NULL — token.socials() twitter empty; DexScreener info.socials lists x.com/barrons_alt whose bio embeds the CA; no bidirectional Pons or on-chain social confirmation this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, Pons launchpad HTML, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…C7e"
        - "bigly is the ERC-20 at 0x73114aBD…7c04 created through that factory; entity_kind token, not protocol"
        - "No shared handle; this token has no official site or handle this pass"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at artificialinu.com / @ArtificiallyInu paired to NVDA via LongLauncher"
        - "BIGLY is at 0x73114aBD…7c04 paired to DJT via PonsV2LaunchFactory"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "BIGLY was launched by PonsV2LaunchAndBuy 0xe33E…2948 / PonsV2LaunchFactory 0x7eD5…C7e, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "BIGLY is a Pons v2 LaunchToken in a Uniswap v4 BIGLY/DJT pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, bonding-curve, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x73114aBD…7c04 has 3248 bytes of code on 4663; name/symbol BIGLY, totalSupply 1e27, fully verified PonsV2LauncherToken. PonsV2LaunchFactory TokenLaunched at 2026-08-15T12:08:51Z with pairToken DJT 0x1D11…4516; createGraduatedPool at 2026-08-15T13:58:20Z locked Uniswap v4 pool 0x331a…047d positionId 709300. V2LaunchLocker isLocked true. DJT is in GET /rhj/assets. Distinct from packed dollar-1. No official site or handle this pass. [R-1] [R-3] [R-4] [R-5] [R-6] [R-7] [R-8] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-14], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: other, url: "https://www.ponsfamily.com/launchpad/0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/barrons_alt", authenticity: unconfirmed }

deployments:
  - label: BIGLY token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-3]
  - label: PonsV2LaunchFactory
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:08:24Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-13]
  - label: V2LaunchLocker (top holder / locked position)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:06:57Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-12, R-21]
  - label: DJT Robinhood Stock Token (pair quote / rail)
    role: token
    address:
      value: "0x1D11f0496982706C5e14A514D4E79F2e6BdE4516"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:12:35Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-10, R-14]

metrics:
  - { kind: volume_24h, value: 365205.74867673, currency: USD, as_of: 2026-09-03T05:11:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x331ae7478e52c0450b149d7531dc2a51b8d1bdb20910d2bbbe24426484a1047d volume_usd.h24 (djt/BIGLY pool, not Gecko token all-pools)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 64208.9579, currency: USD, as_of: 2026-09-03T05:11:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x331ae7478e52c0450b149d7531dc2a51b8d1bdb20910d2bbbe24426484a1047d reserve_in_usd", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 348957.05, currency: USD, as_of: 2026-09-03T05:06:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x73114aBD…7c04 pair 0x331a…047d BIGLY/DJT Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 54487.27, currency: USD, as_of: 2026-09-03T05:06:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x73114aBD…7c04 pair 0x331a…047d BIGLY/DJT liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 428729, currency: USD, as_of: 2026-09-03T05:06:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x73114aBD…7c04 pair 0x331a…047d fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 1208, currency: null, as_of: 2026-09-03T05:06:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04 holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:09:48Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_blockNumber 0x32b283c (53159996). Token 0x73114aBD…7c04 eth_getCode 3248 bytes prefix 0x60806040 (not EIP-1167). name BIGLY; symbol BIGLY; decimals 18; totalSupply 1e27. owner() and factory() revert. deployer() 0x5AcFBFDf787eF05fFb732365049Aa953b52F2b2c; launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; curve() 0x4A0a2fFA6BcCD9C05574380E371B7042Fb66aD92. socials() twitter/telegram/discord/website/farcaster empty." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:09:48Z, receipt_ids: [R-4, R-23], result: "V2LaunchLocker 0x2674…4952 factory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd; isLocked(token) true; lockedPositions 709300; lockedTokenSupply 81632653061224493405226180. Factory locker() 0x2674…4952; memeHook 0xE5e702641Ea86F4ae6cC3cDaeD2B886f976Be044; launchDeployer 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42; poolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951; launchForwarder 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948; owner 0x263e…19Dd; approvedPairTokens(DJT) true. getLaunchedToken exists true phase 2 pairToken DJT. eth_getLogs TokenLaunched tx 0x34640fde…86fe block 37102874; PoolGraduated tx 0x396f6d2e…f98e block 37168380 positionId 709300." }
  - { id: REP-3, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:10:51Z, receipt_ids: [R-1, R-2, R-5, R-6, R-12, R-13, R-14, R-18, R-21], result: "Blockscout api/v2 token 0x73114aBD…7c04 name BIGLY symbol BIGLY holders_count 1208 total_supply 1e27 is_contract true is_verified true name PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol is_fully_verified true creator_address_hash 0x3711ceA4…1A42 (PonsV2LaunchDeployer). Factory 0x7eD5…C7e name PonsV2LaunchFactory is_verified true is_fully_verified true. Locker 0x2674…4952 name V2LaunchLocker. DJT 0x1D11…4516 name BeaconProxy is_verified true token Trump Media & Technology Group Corp. • Robinhood Token. Launch tx 0x34640fde…86fe 2026-08-15T12:08:51Z from 0x5AcFBFDf…2b2c (eip7702) to PonsV2LaunchAndBuy launchAndBuy pairToken DJT. Grad tx 0x396f6d2e…f98e 2026-08-15T13:58:20Z createGraduatedPool(token 0x73114aBD…7c04)." }
  - { id: REP-4, method: api, chain_id: 4663, checked_at: 2026-09-03T05:11:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x73114aBD…7c04: 3 robinhood uniswap pairs; top BIGLY/DJT v4 0x331a…047d quote 0x1D11…4516 Trump Media & Technology Group • Robinhood Token / DJT liquidity.usd 54487.27 volume.h24 348957.05 fdv 428729 pairCreatedAt 1786802300000 (2026-08-15T13:58:20Z) info.websites ponsfamily.com/launchpad/CA info.socials x.com/barrons_alt. Gecko pool name djt / BIGLY dex pons-v2-dex pool_created_at 2026-08-15T13:58:20Z volume_usd.h24 365205.74867673 reserve_in_usd 64208.9579 fdv_usd 1467999.39595606. Gecko token volume_usd.h24 365507.065599648 launchpad_details.completed true completed_at 2026-08-15T13:58:20Z migrated_destination_pool_address 0x331a…047d." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T05:11:00Z, receipt_ids: [R-10], result: "GET api.robinhood.com/rhj/assets HTTP 200. assets length 194. tokenSymbol DJT tokenName Trump Media & Technology Group • Robinhood Token deployments.contractAddress 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 chainId 4663 status ASSET_STATUS_ACTIVE. No BIGLY row." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Pons v2 bonding-curve launch that graduates into a locked Uniswap v4 pool quoted against DJT. TokenLaunched at 2026-08-15T12:08:51Z with pairToken 0x1D11…4516; createGraduatedPool at 2026-08-15T13:58:20Z; V2LaunchLocker isLocked true and holds positionId 709300.", class: verified, observed_at: 2026-09-03T05:10:51Z, receipt_ids: [R-4, R-5, R-6, R-12], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "BIGLY", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "BIGLY", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:09:48Z, receipt_ids: [R-4, R-13], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-1, R-3, R-6, R-8], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-7, R-8, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; token.socials() empty; DexScreener info.socials is x.com/barrons_alt; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T05:10:00Z, receipt_ids: [R-3, R-7, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote DJT 0x1D11…4516 is Trump Media & Technology Group • Robinhood Token, BeaconProxy Stock implementation, and GET /rhj/assets lists that address. DJT is a rail. Distinct from packed dollar-1 (0xdCe5…e6da) and from census LONG / Artificial Inu / L4VA.", class: verified, observed_at: 2026-09-03T05:12:35Z, receipt_ids: [R-10, R-14, R-7], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "djt/BIGLY Uniswap v4 (Gecko pool 0x331a…047d) 24h volume 365205.74867673 USD and reserve_in_usd 64208.9579 at 2026-09-03T05:11:00Z (pool slice, not Gecko token all-pools 365507.065599648)", class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 54487.27 volume.h24 348957.05 fdv/marketCap 428729 at 2026-09-03T05:06:00Z", class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-7], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1208, class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-2], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "Token owner() reverts. Factory owner() and locker owner() return SafeProxy 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. Verified locker source: no collectFees or withdrawal; onlyOwner setFactory once. Token deployer() is attribution-only per verified source.", class: verified, observed_at: 2026-09-03T05:09:48Z, receipt_ids: [R-3, R-4, R-12, R-18], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-14, field: other, value: "Pair asset is DJT 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516; venue is Uniswap v4 PoolManager 0x8366…0951 pool 0x331a…047d after Pons v2 graduation; Gecko dex id pons-v2-dex", class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-4, R-6, R-7, R-8], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-15, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; TokenLaunched and locker.factory() name PonsV2LaunchFactory 0x7eD5…C7e as the pad, not LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:10:51Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, Pons launchpad HTML, or X search this pass", class: unknown, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: identity.domain, value: "NULL — token.socials() website empty; DexScreener info.websites is the Pons launchpad path; Gecko token has no website field", class: claim, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-3, R-7, R-9, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: candidate, value: "bigly | BIGLY | NULL | NULL — discovery token not in census 49; distinct from packed dollar-1", class: claim, observed_at: 2026-09-03T05:12:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token volume_usd.h24 365507.065599648 across all pools, not the DJT book alone", class: verified, observed_at: 2026-09-03T05:10:58Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-21, field: economics.metric, value: "Gecko pool fdv_usd 1467999.39595606 market_cap_usd 1465676.89834584; Gecko token fdv_usd 539627.627531428 market_cap_usd null", class: verified, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-22, field: communications.status, value: "unconfirmed-official / third-party-link: DexScreener info.websites is ponsfamily.com/launchpad/CA; info.socials is x.com/barrons_alt; token.socials() empty", class: claim, observed_at: 2026-09-03T05:10:57Z, receipt_ids: [R-7, R-16, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-23, field: communications.status, value: "copypasta-pattern: multiple X accounts posted the same CA 0x73114aBD…7c04 with rotating crypto-*.netlify.app claim URLs this pass", class: claim, observed_at: 2026-09-03T05:07:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: control.privileged-role, value: "launchAndBuy params and PoolRegistered creator 0xdEC773024945CdD8A2EEc34De2B9f810CDBD7e75 (EIP-1167, 269 B); getLaunchedToken.creatorFeeRecipient 0x315B65Cb3D038FA549fa72E69Eaed6ADEBaA0a09 (unverified contract); factory owner is SafeProxy 0x263e…19Dd", class: verified, observed_at: 2026-09-03T05:10:51Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-25, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T05:06:00Z, receipt_ids: [R-1, R-2], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0x1D11f0496982706C5e14A514D4E79F2e6BdE4516", class: verified, observed_at: 2026-09-03T05:12:35Z, receipt_ids: [R-10, R-14], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-27, field: deployment.address, value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", class: verified, observed_at: 2026-09-03T05:06:57Z, receipt_ids: [R-4, R-12, R-21], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-28, field: other, value: "getLaunchedToken exists true; curve 0x4A0a2fFA6BcCD9C05574380E371B7042Fb66aD92; TokenLaunched deployer 0x5AcFBFDf787eF05fFb732365049Aa953b52F2b2c (eip7702, 23 B); phase uint8 2; launch tx to PonsV2LaunchAndBuy 0xe33E…2948 which equals factory.launchForwarder()", class: verified, observed_at: 2026-09-03T05:09:48Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-29, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T05:11:00Z, receipt_ids: [R-6, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: other, value: "Token 0x73114aBD…7c04 is_verified true is_fully_verified true on Blockscout this pass (PonsV2LauncherToken.sol compiler v0.8.35)", class: verified, observed_at: 2026-09-03T05:06:57Z, receipt_ids: [R-1, R-18], reproduction_ids: [REP-3], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11, CLM-20]
    material_effect: "24h volume is 365205.75 on the Gecko djt/BIGLY pool, 348957.05 on DexScreener BIGLY/DJT, and 365507.07 on Gecko token all-pools; a card that collapses them would misstate activity"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-11, CLM-21]
    material_effect: "fdv is 428729 on DexScreener, 1467999.40 on the Gecko pool, and 539627.63 on the Gecko token"
    status: open
    resolution: null
events:
  - id: EVT-1
    type: onchain
    title: "Gecko djt/BIGLY 24h volume $365.2k, reserve $64.2k"
    summary: "Gecko pool 0x331a…047d volume_usd.h24 365205.75 reserve_in_usd 64208.96 fdv_usd 1467999. DexScreener same pair liquidity.usd 54487.27 volume.h24 348957.05."
    occurred_at: 2026-09-03T05:11:00Z
    observed_at: 2026-09-03T05:11:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@AkahataMitai posted BIGLY/DJT as a DJT distribution book"
    summary: "Posts: $DJT:$BIGLY distributing DJT from volume; 'that's something that CAN'T happen with BIGLY/DJT'; paired with Trump Media & Technology Group."
    occurred_at: 2026-09-02T11:05:24Z
    observed_at: 2026-09-03T05:06:30Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-3
    type: ct
    title: "X accounts posted rotating netlify claim URLs with the BIGLY CA"
    summary: "Multiple accounts posted CA 0x73114aBD…7c04 and crypto-*.netlify.app/claim?contract=… this pass. Flag copypasta-pattern and third-party-link."
    occurred_at: 2026-09-02T11:41:18Z
    observed_at: 2026-09-03T05:07:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]
  - id: EVT-4
    type: ct
    title: "@barrons_alt bio embeds the BIGLY CA"
    summary: "Handle listed on DexScreener info.socials. Bio: daddy told me to put $BIGLY in the strategic crypto reserve lmao idk plus CA 0x73114aBD…7c04. token.socials() empty."
    occurred_at: 2026-09-03T04:08:08Z
    observed_at: 2026-09-03T05:07:30Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-19]
  - id: EVT-5
    type: onchain
    title: "Pons v2 createGraduatedPool locked the BIGLY/DJT v4 book"
    summary: "Tx 0x396f6d2e…f98e called createGraduatedPool on 0x7eD5…C7e at 2026-08-15T13:58:20Z; positionId 709300; pool id 0x331a…047d."
    occurred_at: 2026-08-15T13:58:20Z
    observed_at: 2026-09-03T05:10:51Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6]
  - id: EVT-6
    type: onchain
    title: "Pons v2 TokenLaunched BIGLY against DJT"
    summary: "Tx 0x34640fde…86fe at 2026-08-15T12:08:51Z; launchAndBuy pairToken DJT 0x1D11…4516, curve 0x4A0a…aD92, name/symbol BIGLY."
    occurred_at: 2026-08-15T12:08:51Z
    observed_at: 2026-09-03T05:06:57Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-5]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0x73114aBD…7c04 BIGLY", url: "https://robinhoodchain.blockscout.com/address/0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-15, CLM-19, CLM-25, CLM-30], excerpt: "api/v2/addresses: hash 0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04 name PonsV2LauncherToken is_contract true is_verified true proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x34640fde26eec61070c1ccf835204d46dfb2efd75c4f957e3668454463e286fe. token name BIGLY symbol BIGLY decimals 18 total_supply 1000000000000000000000000000 holders_count 1208 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Token 0x73114aBD…7c04", url: "https://robinhoodchain.blockscout.com/token/0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-12, CLM-25], excerpt: "api/v2/tokens: name BIGLY symbol BIGLY decimals 18 total_supply 1000000000000000000000000000 holders_count 1208 type ERC-20 volume_24h null exchange_rate null." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory, socials on 0x73114aBD…7c04", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:09:48Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-8, CLM-13, CLM-16, CLM-18], excerpt: "eth_blockNumber 0x32b283c (53159996). Token code 3248 B prefix 0x60806040. name BIGLY symbol BIGLY decimals 18 totalSupply 1e27. owner() revert. factory() revert. deployer() 0x5AcFBFDf…2b2c launchFactory() 0x7eD598Bc…C7e curve() 0x4A0a2fFA…aD92. socials() empty strings. description starts Folks, this is going to run bigly." }
  - { id: R-4, publisher: Robinhood Chain RPC, title: "locker and PonsV2LaunchFactory views", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:09:48Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-13, CLM-14, CLM-15, CLM-24, CLM-27, CLM-28], excerpt: "locker.factory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e owner 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd isLocked true lockedPositions 709300 lockedTokenSupply 81632653061224493405226180. Factory approvedPairTokens(DJT) true locker() 0x2674…4952 memeHook 0xE5e7…e044 poolManager 0x8366…0951 launchForwarder 0xe33E…2948. getLaunchedToken pairToken 0x1D11…4516 curve 0x4A0a…aD92 deployer 0x5AcF…2b2c creatorFeeRecipient 0x315B…0a09 exists true phase 2." }
  - { id: R-5, publisher: Blockscout, title: "launchAndBuy tx 0x34640fde…86fe", url: "https://robinhoodchain.blockscout.com/tx/0x34640fde26eec61070c1ccf835204d46dfb2efd75c4f957e3668454463e286fe", published_at: 2026-08-15T12:08:51Z, accessed_at: 2026-09-03T05:06:57Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, CLM-24, CLM-28, EVT-6], excerpt: "timestamp 2026-08-15T12:08:51.000000Z status ok block_number 37102874 from 0x5AcFBFDf787eF05fFb732365049Aa953b52F2b2c (eip7702) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. decoded name BIGLY symbol BIGLY pairToken 0x1D11f049…4516 quoteIn 1e18. Factory log TokenLaunched token 0x73114aBD…7c04 curve 0x4A0a…aD92 deployer 0x5AcF…2b2c pairToken DJT." }
  - { id: R-6, publisher: Blockscout, title: "createGraduatedPool tx 0x396f6d2e…f98e", url: "https://robinhoodchain.blockscout.com/tx/0x396f6d2e821648665c748100576fc354ba5d1946e3c2fa81fb49c3e62835f98e", published_at: 2026-08-15T13:58:20Z, accessed_at: 2026-09-03T05:10:51Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-14, CLM-24, CLM-29, EVT-5], excerpt: "timestamp 2026-08-15T13:58:20.000000Z status ok block_number 37168380 from 0x49BbF2b70955Fb3a106e084D4BFDa92d334573d2 to PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e method createGraduatedPool token 0x73114aBD…7c04. PoolGraduated positionId 709300. Initialize pool id 0x331ae747…047d currency0 DJT currency1 BIGLY. PoolRegistered creator 0xdEC77302…7e75. PositionLocked tokenId 709300." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens BIGLY", url: "https://api.dexscreener.com/latest/dex/tokens/0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04", published_at: null, accessed_at: 2026-09-03T05:06:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-14, CLM-16, CLM-18, CLM-19, CLM-22, EVT-1], excerpt: "3 robinhood uniswap pairs. Top pairAddress 0x331ae7478e52c0450b149d7531dc2a51b8d1bdb20910d2bbbe24426484a1047d labels v4 base BIGLY / BIGLY quote Trump Media & Technology Group • Robinhood Token / DJT 0x1D11f049…4516 liquidity.usd 54487.27 volume.h24 348957.05 fdv 428729 marketCap 428729 pairCreatedAt 1786802300000. info.websites https://www.ponsfamily.com/launchpad/0x73114aBD…7c04; info.socials https://x.com/barrons_alt?s=11." }
  - { id: R-8, publisher: GeckoTerminal, title: "djt / BIGLY Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x331ae7478e52c0450b149d7531dc2a51b8d1bdb20910d2bbbe24426484a1047d", published_at: null, accessed_at: 2026-09-03T05:11:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-14, CLM-21, EVT-1], excerpt: "name djt / BIGLY pool_created_at 2026-08-15T13:58:20Z fdv_usd 1467999.39595606 market_cap_usd 1465676.89834584 volume_usd.h24 365205.74867673 reserve_in_usd 64208.9579 transactions.h24 buys 828 sells 703. dex pons-v2-dex. base robinhood_0x1d11f049…4516 quote robinhood_0x73114abd…7c04." }
  - { id: R-9, publisher: GeckoTerminal, title: "BIGLY token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04", published_at: null, accessed_at: 2026-09-03T05:10:58Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-18, CLM-20, CLM-21, CLM-29], excerpt: "name BIGLY symbol BIGLY decimals 18 total_supply 1e27 fdv_usd 539627.627531428 market_cap_usd null volume_usd.h24 365507.065599648 total_reserve_in_usd 42232.50. launchpad_details graduation_percentage 100 completed true completed_at 2026-08-15T13:58:20.000Z migrated_destination_pool_address 0x331ae747…047d. coingecko_coin_id absent." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets DJT row", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:11:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-26], excerpt: "HTTP 200. assets length 194. tokenSymbol DJT tokenName Trump Media & Technology Group • Robinhood Token deployments contractAddress 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE. No BIGLY tokenSymbol." }
  - { id: R-12, publisher: Blockscout, title: "V2LaunchLocker verified source", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952?tab=contract", published_at: 2026-08-03T16:18:05Z, accessed_at: 2026-09-03T05:08:24Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13, CLM-27], excerpt: "name V2LaunchLocker compiler v0.8.35 is_verified true is_partially_verified true file_path src/v2/V2LaunchLocker.sol. ABI includes isLocked(address), lockPosition, lockTokenSupply, lockedPositions, factory, owner. No withdrawal function in the ABI this pass." }
  - { id: R-13, publisher: Blockscout, title: "Address 0x7eD5…C7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:08:24Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-15], excerpt: "api/v2/smart-contracts: name PonsV2LaunchFactory is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol verified_at 2026-08-04T17:40:45Z. ABI includes TokenLaunched, PoolGraduated, getLaunchedToken, approvedPairTokens, createGraduatedPool, launchForwarder." }
  - { id: R-14, publisher: Blockscout, title: "Address 0x1D11…4516 DJT Stock Token", url: "https://robinhoodchain.blockscout.com/address/0x1D11f0496982706C5e14A514D4E79F2e6BdE4516", published_at: null, accessed_at: 2026-09-03T05:12:35Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-26], excerpt: "hash 0x1D11f0496982706C5e14A514D4E79F2e6BdE4516 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2 creator 0x4783C67b63dE2B358Ac5951a7D41F47A38F3C046. token name Trump Media & Technology Group Corp. • Robinhood Token symbol DJT holders_count 20612." }
  - { id: R-16, publisher: Pons, title: "Pons launchpad page for BIGLY", url: "https://www.ponsfamily.com/launchpad/0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04", published_at: null, accessed_at: 2026-09-03T05:10:57Z, kind: other, authority: primary, authenticity: unconfirmed, supports: [CLM-18, CLM-22], excerpt: "HTTP 200. title BIGLY ($BIGLY) · pons. og:title BIGLY ($BIGLY) · pons. meta description starts Folks, this is going to run bigly. It’s tremendous. x-matched-path /launchpad/[token]. HTML contains 73114aBD and DJT. No @barrons_alt string in the document this pass." }
  - { id: R-17, publisher: "@AkahataMitai", title: "$DJT: $BIGLY distribution post", url: "https://x.com/AkahataMitai/status/2095105808228827624", published_at: 2026-09-02T11:05:24Z, accessed_at: 2026-09-03T05:06:30Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-2], excerpt: "well, you are missing the one with most potential, the stock with the smallest mcap • $DJT: $BIGLY let me explain to you the potential here: at $10m/day, BIGLY is distributing roughly $200k/day in DJT." }
  - { id: R-18, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04?tab=contract", published_at: 2026-08-15T12:09:24Z, accessed_at: 2026-09-03T05:06:57Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-30], excerpt: "name PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-08-15T12:09:24Z. Comment: deployer is carried here as immutable reference data for off-chain attribution only, and confers no privileges over the token. Entire supply mints to the bonding curve." }
  - { id: R-19, publisher: "@barrons_alt", title: "how much $bigly do you hold?", url: "https://x.com/barrons_alt/status/2095363188401242184", published_at: 2026-09-03T04:08:08Z, accessed_at: 2026-09-03T05:07:30Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-22, EVT-4], excerpt: "Bio: daddy told me to put $BIGLY in the strategic crypto reserve lmao idk 0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04. Post: how much $bigly do you hold? DexScreener info.socials lists this handle." }
  - { id: R-20, publisher: "@KyleHessler", title: "$BIGLY claim portal opened", url: "https://x.com/KyleHessler/status/2095114843431059686", published_at: 2026-09-02T11:41:18Z, accessed_at: 2026-09-03T05:07:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-23, EVT-3], excerpt: "not a thread $BIGLY claim portal opened wallet check live rn CA: 0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04 https://crypto-egp.netlify.app/claim?contract=0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04&cfg=evmdrop&pid=y64f3 Matching CA+netlify copy also on @Vanessa17665394 @Nodesynthjl @0904mew @ITSYABOIRAZOR." }
  - { id: R-21, publisher: Blockscout, title: "Token holders 0x73114aBD…7c04", url: "https://robinhoodchain.blockscout.com/token/0x73114aBD7dCF37000d90d8DE9fd1dE3957B17c04?tab=holders", published_at: null, accessed_at: 2026-09-03T05:06:57Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-27], excerpt: "api/v2/tokens/.../holders: rank 1 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true value 81632653061224493405226243. rank 2 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 value 63899262866250074447469214." }
  - { id: R-23, publisher: Robinhood Chain RPC, title: "eth_getLogs TokenLaunched and PoolGraduated", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:09:48Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-5, EVT-6], excerpt: "eth_getLogs factory 0x7eD5…C7e TokenLaunched topic1 token 0x73114aBD…7c04: tx 0x34640fde26eec61070c1ccf835204d46dfb2efd75c4f957e3668454463e286fe block 0x236251a. PoolGraduated: tx 0x396f6d2e821648665c748100576fc354ba5d1946e3c2fa81fb49c3e62835f98e block 0x23724fc data positionId 0xad2b4 (709300) tokenAmount 204081632653061227204898546 pairTokenAmount 917162201643832986593." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x73114aBD…7c04?", checked: "token.socials() empty; DexScreener info.websites is the Pons launchpad path; info.socials is @barrons_alt whose bio embeds the CA; Gecko token has no website; Pons HTML has no @barrons_alt string, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts that embed the CA and a handle that Pons or the token socials() also list" }
  - { priority: P1, question: "Who are the SafeProxy 0x263e…19Dd owners and threshold, and can that Safe call factory admin setters?", checked: "factory owner() and locker owner() return this SafeProxy; locker ABI has setFactory onlyOwner; getOwners/getThreshold not called this pass", next: "eth_call getOwners and getThreshold on 0x263e…19Dd" }
  - { priority: P1, question: "Why does getLaunchedToken.creatorFeeRecipient return 0x315B…0a09 while launchAndBuy params and PoolRegistered creator are 0xdEC7…7e75?", checked: "launchAndBuy decoded address 0xdEC77302…7e75; PoolRegistered creator same; getLaunchedToken.creatorFeeRecipient 0x315B65Cb…0a09 unverified; CREATOR_FEE_RECIPIENT_TIMELOCK exists on the factory ABI, 2026-09-03", next: "read factory fee-recipient update logs and the 0x315B…0a09 bytecode" }
  - { priority: P2, question: "Does the on-chain description's DJT every 15 minutes reflection correspond to a live fee-split, or is it launch copy?", checked: "description() returns that sentence; creatorTaxBps 200; buybackEnabled false; no 15-minute distributor contract identified this pass", next: "read V2MemeHook 0xE5e7…e044 verified source for DJT distribution cadence" }
---

# BIGLY — research packet

## What it is

A Pons v2 memecoin that graduated into a locked Uniswap v4 pool quoted against the Robinhood DJT stock token. Traders buy and sell BIGLY on that DJT book and on later USDG books. PonsV2LaunchFactory created it. No official site or handle was located this pass.

Themes: memecoin, stock-paired:DJT

## Why it matters

The BIGLY/DJT Uniswap v4 book printed about $365k of 24h volume on Gecko at collection, with the quote token the Robinhood DJT Stock Token at 0x1D11…4516. GET /rhj/assets lists that address. DJT is a rail. The token is a Pons v2 graduation, distinct from packed dollar-1 at 0xdCe5…e6da.

## What could go wrong

USD liquidity figures on the BIGLY/DJT book count both sides, and the quote side is DJT, not USDG. Aggregator FDV figures disagree by more than 3x this pass. No official handle was located, so comms surfaces stay unconfirmed-official. Factory owner() is a SafeProxy whose owners were not read this pass.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 emitted TokenLaunched via PonsV2LaunchFactory 0x7eD5…C7e for 0x73114aBD…7c04 at 2026-08-15T12:08:51Z with pairToken DJT. createGraduatedPool about 1h 50m later locked Uniswap v4 pool 0x331a…047d. V2LaunchLocker isLocked true and holds positionId 709300. factory() on the token reverts; launchFactory() and locker.factory() return the Pons v2 factory. [verified R-4 R-5 R-6 R-12]

Gecko launchpad_details.completed is true at 2026-08-15T13:58:20Z with migrated_destination_pool_address 0x331a…047d. DexScreener also lists BIGLY/USDG Uniswap v4 books with far less liquidity than the DJT book. [verified R-7 R-9]

## Control and security

Token owner() reverts. Verified PonsV2LauncherToken source says deployer() is attribution-only. Factory owner() and locker owner() return SafeProxy 0x263e…19Dd. Verified locker ABI has no withdrawal function. Token source is_fully_verified true. [verified R-1 R-3 R-12 R-18]

launchAndBuy params and PoolRegistered creator are 0xdEC7…7e75; getLaunchedToken.creatorFeeRecipient is 0x315B…0a09. [verified R-4 R-5 R-6]

No audit report URL was located this pass. [unknown]

## Team and provenance

No official domain or X handle was located. token.socials() is empty. DexScreener info.websites is the Pons launchpad path for this CA. info.socials is x.com/barrons_alt, whose bio embeds the CA. Flag unconfirmed-official and third-party-link. [claim R-7 R-16 R-19]

Census Pons is the pad that created the token. Packed dollar-1 is a different Pons v2 DJT graduation at 0xdCe5…e6da. Census Artificial Inu / LONG / L4VA share the stock-paired neighborhood only. [verified R-5 R-13]

## Economics and activity

djt/BIGLY Uniswap v4 24h volume is 365205.74867673 USD and reserve_in_usd is 64208.9579 at 2026-09-03T05:11:00Z from the Gecko pool endpoint. fdv_usd is 1467999.40. Gecko token volume_usd.h24 is 365507.07 across all pools, not the DJT book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 54487.27, volume.h24 348957.05, fdv/marketCap 428729. Blockscout holders_count 1208. Pair created 2026-08-15T13:58:20Z. Assignment lead of liq ~$58,658 vol ~$345,133 is the same pair, live DexScreener at collection. [claim R-2 R-7]

## Material risks

- Quote-side USD figures are DJT-denominated, not USDG. [verified R-7 R-8]
- DexScreener fdv 428729 and Gecko pool fdv 1467999 disagree this pass. [claim R-7 R-8]
- No official handle or domain this pass; Telegram/claim URLs on X are third-party-link / copypasta-pattern. [claim R-7 R-20]
- Factory owner is a SafeProxy whose signers were not read. [verified R-4]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/locker/DJT and both launch/grad txs, RPC name/symbol/launchFactory/getLaunchedToken/isLocked, DexScreener, Gecko pool/token, /rhj/assets, Pons launchpad HTML, @AkahataMitai, @barrons_alt, and the netlify claim posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-10]
- Numbers: 365205.75 is the Gecko djt/BIGLY pool 24h volume, not the 365507.07 token all-pools figure. Reserve 64208.96 is that pool. DexScreener 348957.05 / 54487.27 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that BIGLY is packed dollar-1 or an official Trump Media product. dollar-1 is 0xdCe5…e6da launched 2026-09-02; this token is 0x73114aBD…7c04 launched 2026-08-15; GET /rhj/assets has DJT as the rail and no BIGLY row. [inference R-5 R-10]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59` origin/main SHA 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no bigly / BIGLY / 0x73114aBD…7c04. GET packet path on grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404.
- Explorer: Blockscout api/v2 token, address, smart-contract, holders, launchAndBuy 0x34640fde…86fe, createGraduatedPool 0x396f6d2e…f98e, factory, locker, DJT. Chrome UA.
- RPC 4663: eth_getCode/eth_call/eth_getLogs with Chrome UA at block 53159996.
- Aggregators: DexScreener latest/dex/tokens first; Gecko token GET 200 then Gecko pool.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, DJT row present, 0 BIGLY.
- Social: X keyword Latest BIGLY/DJT and the CA; user search BIGLY / barrons_alt; from:AkahataMitai; from:barrons_alt.
- Failed: Blockscout address txs filter 422; factory logs topic1 query 422 (used RPC eth_getLogs). Gecko was not skipped: first token GET was 200.
- Time: collection 2026-09-03T05:05Z–2026-09-03T05:12Z.
