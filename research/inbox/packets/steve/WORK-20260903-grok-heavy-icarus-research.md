---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: steve
name: STEVE
packet_tier: seed
as_of: 2026-09-03T05:30:00Z
prior_packet: null
supersedes: null
owned_slugs: [steve]
allowed_paths:
  - research/inbox/packets/steve/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: STEVE
  aliases: [Steve, "Minecraft Steve"]
  symbols: [STEVE]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://www.stevecoin.us/
  official_handle: "@SteveOnHood"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Blockscout, stevecoin.us, constructor socials, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "STEVE is a PonsV2LauncherToken at 0x9a70…2375; entity_kind token, ecosystem_role graduation, not the pad"
        - "Packed DIH 0x8A3b…2B63 and VERITY 0x16A49c…7BC6 are other Pons v2 MSFT graduations; this CA is distinct"
        - "Official surfaces differ: stevecoin.us / @SteveOnHood versus ponsfamily.com / @ponsdotfamily"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "STEVE creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42 via PonsV2LaunchAndBuy, not LongLauncher"
        - "Packed CLIPPY 0x85856F…1E18 and NANAMI 0x2895ee0AbF…1E18 are LongLauncher Doppler clones on the same MSFT rail"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is @bankrbot / bankr.bot with DopplerERC20V1Factory 0x1B37…b69a / Airlock"
        - "STEVE launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e, not DopplerERC20V1Factory"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "STEVE is $STEVE at 0x9a70…2375 paired to MSFT 0xe932…2e74 via Pons v2"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "STEVE is a PonsV2LauncherToken that graduated into a Uniswap v4 STEVE/MSFT pool with no vault of its own"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x9a70…2375 is a verified PonsV2LauncherToken with non-empty code on 4663; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e; PonsV2LaunchAndBuy.launchAndBuy minted Steve / STEVE against MSFT 0xe932…2e74 (Microsoft • Robinhood Token, GET /rhj/assets hit). Curve completed and createGraduatedPool initialized Uniswap v4 poolId 0x00d0…0b34. MSFT is the pair rail, not the subject. Distinct from packed CLIPPY/MSFT 0x85856F…1E18, DIH 0x8A3b…2B63, VERITY 0x16A49c…7BC6, and NANAMI 0x2895ee0AbF…1E18. Site JS embeds the CA; @SteveOnHood posted it. [R-1] [R-4] [R-5] [R-7] [R-9] [R-10] [R-11] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.stevecoin.us/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/SteveOnHood", authenticity: confirmed }

deployments:
  - label: STEVE token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x9a70d368DA240ACF67d5859aB750644DD5d12375"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: Pons v2 bonding curve
    role: other
    address:
      value: "0xa10d4fcc393dDA87d7Ad11F7138ca0eF6E93e91b"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:22:30Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-6]
  - label: PonsV2LaunchFactory
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:22:30Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: PonsV2LaunchAndBuy
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-19]
  - label: PonsV2LaunchDeployer
    role: other
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3]
  - label: MSFT Microsoft • Robinhood Token (pair rail)
    role: token
    address:
      value: "0xe93237C50D904957Cf27E7B1133b510C669c2e74"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:26:30Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-6, R-11, R-12]
  - label: V2LaunchLocker
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T05:25:30Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-14, R-20]

metrics:
  - { kind: volume_24h, value: 269393.29, currency: USD, as_of: 2026-09-03T05:23:30Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x9a70d368DA240ACF67d5859aB750644DD5d12375 top pair STEVE/MSFT volume.h24 (Uniswap v4 pool 0x00d0…0b34, not all-pools)", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 15296.58, currency: USD, as_of: 2026-09-03T05:23:30Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x9a70d368DA240ACF67d5859aB750644DD5d12375 STEVE/MSFT liquidity.usd (same pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 35539, currency: USD, as_of: 2026-09-03T05:23:30Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x9a70d368DA240ACF67d5859aB750644DD5d12375 STEVE/MSFT fdv and marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 165, currency: null, as_of: 2026-09-03T05:22:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x9a70d368DA240ACF67d5859aB750644DD5d12375 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:25:00Z, receipt_ids: [R-5, R-6], result: "eth_blockNumber 0x32b4e1a (53169690). Token 0x9a70…2375 eth_getCode 3248 B, not EIP-1167. name Steve, symbol STEVE, decimals 18, totalSupply 1e27. deployer() 0x164fD873f78A7cCB103FB51d4Df8206e2579c944. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0xa10d4fcc393dDA87d7Ad11F7138ca0eF6E93e91b. description Minecraft Steve is the most iconic mascot from Microsoft - a perfect pairing for the stock. logo ipfs://bafkreifkpv6k6q6shwuqlvcjp3lmrf4mblyvnigpcr5xr5ksiudq45fyea. socials() https://x.com/steveonhood, empty telegram/discord/farcaster, https://www.stevecoin.us/. owner() reverts. CLIPPY 0x85856F…1E18 code 44 B EIP-1167. DIH 0x8A3b…2B63 code 3248 B. NANAMI 0x2895ee0AbF…1E18 code 44 B. Launch EOA 0x164f…c944 eth_getCode 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T05:25:30Z, receipt_ids: [R-1, R-2, R-3, R-4, R-12, R-13, R-14, R-19, R-20], result: "Blockscout api/v2 token 0x9a70…2375 name Steve symbol STEVE holders_count 165 total_supply 1e27 is_verified true name PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol. creator_address_hash PonsV2LaunchDeployer 0x3711…1A42 tx 0x1e668939…476e 2026-09-02T21:30:17Z block 52891782 from EOA 0x164f…c944 to PonsV2LaunchAndBuy launchAndBuy. TokenLaunched factory 0x7eD5…EC7e curve 0xa10d…e91b pairToken MSFT. CurveCompleted tx 0x4cecd4b1…6ec1 2026-09-02T21:34:04Z. createGraduatedPool tx 0x08e009ce…d515 2026-09-02T21:34:57Z PoolManager Initialize poolId 0x00d0…0b34. MSFT BeaconProxy Stock impl 0xb354…5aE2." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T05:23:30Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens and token-pairs/v1/robinhood: 4 robinhood uniswap pairs. Top STEVE/MSFT v4 0x00d0…0b34 quote 0xe932…2e74 Microsoft • Robinhood Token / MSFT liquidity.usd 15296.58 volume.h24 269393.29 fdv/marketCap 35539 pairCreatedAt 1788384897000 (2026-09-02T21:34:57Z) txns.h24 buys 1227 sells 1181 info.websites [{url https://www.stevecoin.us/}] info.socials [{url https://x.com/steveonhood type twitter}]. Secondary STEVE/USDG and STEVE/ETH books have liquidity.usd 149.49 / 17.26 / 5.61." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T05:27:00Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one MSFT row tokenName Microsoft • Robinhood Token contractAddress 0xe93237C50D904957Cf27E7B1133b510C669c2e74 chainId 4663 status ASSET_STATUS_ACTIVE isin US5949181045." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T05:25:00Z, receipt_ids: [R-6], result: "Factory 0x7eD5…EC7e code 24177 B. owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. graduationExecutor() 0xC7819B64A1dAECD7eC19856d026cb14EfBd89046. graduationGuard() 0xf5695117b99B6f6401e67d4195BD653628176C6C. launchDeployer() 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42. getLaunchedToken(0x9a70…2375) returns token, curve 0xa10d…e91b, originalDeployer 0x164f…c944, creatorFeeRecipient 0x164f…c944, pairToken MSFT, graduationThreshold 16078639417693171399. Curve code 10229 B. curve.graduated() 1. curve.pairToken() MSFT. curve.token() 0x9a70…2375. curve.owner() reverts." }
  - { id: REP-6, method: api, checked_at: 2026-09-03T05:26:30Z, receipt_ids: [R-8, R-9, R-18], result: "GET https://www.stevecoin.us/ HTTP 200 title $STEVE — Built block by block; meta description $STEVE paired with the MSFT Stock Token on Robinhood Chain; HTML shell has no CA. GET /assets/index-CFDRnHPw.js HTTP 200 contains lu=\"0x9a70d368da240acf67d5859ab750644dd5d12375\". GET x.com/SteveOnHood: description empty, expandedUrl http://stevecoin.us, 16 followers." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy clones a 1e9-supply PonsV2LauncherToken onto a per-launch bonding curve quoted against MSFT, then createGraduatedPool seeds a locked Uniswap v4 STEVE/MSFT pool (PoolManager 0x8366…0951, V2MemeHook 0xE5e7…e044, fee 0). Launch tx from 0x164f…c944 minted Steve / STEVE as a Pons v2 MSFT pair.", class: verified, observed_at: 2026-09-03T05:25:30Z, receipt_ids: [R-2, R-4, R-5, R-14], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Steve", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "STEVE", class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x9a70d368DA240ACF67d5859aB750644DD5d12375", class: verified, observed_at: 2026-09-03T05:25:30Z, receipt_ids: [R-1, R-5, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T05:23:30Z, receipt_ids: [R-1, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T05:27:00Z, receipt_ids: [R-7, R-11, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@SteveOnHood", class: claim, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [R-5, R-7, R-10, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote MSFT 0xe932…2e74 is Microsoft • Robinhood Token; GET rhj/assets (194 assets) has one MSFT row at that address. MSFT is the rail, not the subject. Distinct from packed CLIPPY 0x85856F…1E18 (DopplerERC20V1 / @ClippyMSFT / clippyrh.com), packed DIH 0x8A3b…2B63 (Pons v2), packed VERITY 0x16A49c…7BC6 (Pons v2), and packed NANAMI 0x2895ee0AbF…1E18 (LongLauncher). Ticker-only collision with other 4663 STEVE tokens such as Minecraft Steve 0x4Adb…ACF6.", class: verified, observed_at: 2026-09-03T05:27:00Z, receipt_ids: [R-5, R-7, R-11, R-12], reproduction_ids: [REP-1, REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "STEVE/MSFT Uniswap v4 24h volume 269393.29 USD and liquidity.usd 15296.58 at 2026-09-03T05:23:30Z (DexScreener pair slice, not all-pools)", class: verified, observed_at: 2026-09-03T05:23:30Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener STEVE/MSFT fdv/marketCap 35539 at 2026-09-03T05:23:30Z", class: verified, observed_at: 2026-09-03T05:23:30Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 165, class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges over the token. Factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. Launch EOA 0x164f…c944 has no code.", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "token.deployer() and getLaunchedToken originalDeployer/creatorFeeRecipient are launch EOA 0x164fD873f78A7cCB103FB51d4Df8206e2579c944; V2MemeHook PoolRegistered names that address as creator", class: verified, observed_at: 2026-09-03T05:25:30Z, receipt_ids: [R-4, R-6, R-14], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is MSFT 0xe93237C50D904957Cf27E7B1133b510C669c2e74; venue after graduation is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 poolId 0x00d0bb050b18dc4f370c5088e564dba1c44c7287c87a0c807407c847e3dc0b34", class: verified, observed_at: 2026-09-03T05:25:30Z, receipt_ids: [R-6, R-7, R-14], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() and TokenLaunched name PonsV2LaunchFactory 0x7eD5…EC7e as the pad, not LONG, Bankr/Doppler, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T05:22:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, stevecoin.us, or X posts this pass", class: unknown, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "constructor socials and DexScreener list x.com/steveonhood and stevecoin.us; site JS embeds CA 0x9a70…2375; @SteveOnHood profile url is stevecoin.us and posted the CA; bio empty this pass", class: claim, observed_at: 2026-09-03T05:28:00Z, receipt_ids: [R-5, R-7, R-9, R-10, R-18], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener STEVE/MSFT fdv/marketCap 35539; priceUsd 0.00003553. Gecko skipped this pass (first GET HTTP 429).", class: verified, observed_at: 2026-09-03T05:23:30Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xe93237C50D904957Cf27E7B1133b510C669c2e74", class: verified, observed_at: 2026-09-03T05:26:30Z, receipt_ids: [R-6, R-11, R-12], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xa10d4fcc393dDA87d7Ad11F7138ca0eF6E93e91b", class: verified, observed_at: 2026-09-03T05:25:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://www.stevecoin.us/", class: claim, observed_at: 2026-09-03T05:26:30Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "steve | STEVE | @SteveOnHood | https://www.stevecoin.us/ — discovery token not in census 49", class: claim, observed_at: 2026-09-03T05:30:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener STEVE/MSFT 24h volume $269k, liquidity $15.3k"
    summary: "Uniswap v4 pool 0x00d0…0b34 volume.h24 269393.29 liquidity.usd 15296.58 fdv/marketCap 35539."
    occurred_at: 2026-09-03T05:23:30Z
    observed_at: 2026-09-03T05:23:30Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: company
    title: "@SteveOnHood posted $STEVE Prevails"
    summary: "@SteveOnHood posted $STEVE Prevails with an image. Profile website is stevecoin.us; description empty this pass."
    occurred_at: 2026-09-03T01:42:37Z
    observed_at: 2026-09-03T05:28:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-15, R-18]
  - id: EVT-3
    type: ct
    title: "X post circulated a vote URL embedding CA 0x9a70…2375"
    summary: "@tidaloracleNFT posted a Robinhood Top 100 vote URL for 0x9a70…2375. Flag third-party-link."
    occurred_at: 2026-09-03T01:19:19Z
    observed_at: 2026-09-03T05:21:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-17]
  - id: EVT-4
    type: ct
    title: "X post circulated CA 0x9a70…2375 as $STEVE"
    summary: "@0xserjamad posted 0x9a70…2375 and called steve a great coin on Robinhood Chain."
    occurred_at: 2026-09-02T22:51:46Z
    observed_at: 2026-09-03T05:21:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-16]
  - id: EVT-5
    type: onchain
    title: "createGraduatedPool initialized Uniswap v4 STEVE/MSFT"
    summary: "Tx 0x08e0…d515 at 2026-09-02T21:34:57Z; PoolManager Initialize poolId 0x00d0…0b34; locker locked ~8.163e25 STEVE."
    occurred_at: 2026-09-02T21:34:57Z
    observed_at: 2026-09-03T05:25:30Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-6
    type: onchain
    title: "Bonding curve completed against MSFT"
    summary: "Tx 0x4cec…6ec1 at 2026-09-02T21:34:04Z CurveCompleted quoteOut 16078639417693171455 tokenOut ~2.857e26."
    occurred_at: 2026-09-02T21:34:04Z
    observed_at: 2026-09-03T05:24:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-7
    type: company
    title: "@SteveOnHood posted CA 0x9a70…2375 as live STEVE/MSFT"
    summary: "Steve has entered the chat. $STEVE is live and paired with $MSFT plus CA 0x9a70…2375."
    occurred_at: 2026-09-02T21:32:49Z
    observed_at: 2026-09-03T05:28:00Z
    affected_fields: [identity.handle, communications.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-8
    type: onchain
    title: "PonsV2LaunchAndBuy minted Steve / STEVE against MSFT"
    summary: "Tx 0x1e66…476e from 0x164f…c944 at 2026-09-02T21:30:17Z; TokenLaunched token 0x9a70…2375 pairToken MSFT."
    occurred_at: 2026-09-02T21:30:17Z
    observed_at: 2026-09-03T05:22:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x9a70…2375 Steve / STEVE", url: "https://robinhoodchain.blockscout.com/address/0x9a70d368DA240ACF67d5859aB750644DD5d12375", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x9a70d368DA240ACF67d5859aB750644DD5d12375 name Steve is_contract true is_verified true. token name Steve symbol STEVE decimals 18 total_supply 1000000000000000000000000000 holders_count 165 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x1e66893976748090389cd6dc2c4a8d1630ee5c866f08ecadc7061516a825476e." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x9a70d368DA240ACF67d5859aB750644DD5d12375?tab=contract", published_at: null, accessed_at: 2026-09-03T05:22:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd file_path contracts/src/v2/PonsV2LauncherToken.sol is_verified true is_partially_verified false verified_at 2026-09-02T21:35:00.176737Z. Comment: deployer is carried as immutable reference data for off-chain attribution only, and confers no privileges over the token. Entire supply mints to the bonding curve." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T05:22:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol. Compiler v0.8.35 verified_at 2026-08-04T17:40:45.239016Z. ABI includes launchToken, createGraduatedPool, TokenLaunched, LaunchSwept, PoolGraduated." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0x1e668939…476e", url: "https://robinhoodchain.blockscout.com/tx/0x1e66893976748090389cd6dc2c4a8d1630ee5c866f08ecadc7061516a825476e", published_at: 2026-09-02T21:30:17Z, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, CLM-16, EVT-8], excerpt: "timestamp 2026-09-02T21:30:17.000000Z status ok block_number 52891782 from 0x164fD873f78A7cCB103FB51d4Df8206e2579c944 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Steve symbol STEVE website https://www.stevecoin.us/ twitter https://x.com/steveonhood pairToken 0xe932…2e74. TokenLaunched token 0x9a70…2375 curve 0xa10d…e91b pairToken MSFT." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, deployer(), launchFactory(), socials() on STEVE", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-9, CLM-13, CLM-16, CLM-17, CLM-19, CLM-22], excerpt: "eth_blockNumber 0x32b4e1a (53169690). Token code 3248 B. name Steve symbol STEVE decimals 18 totalSupply 1e27. deployer() 0x164fD873f78A7cCB103FB51d4Df8206e2579c944. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0xa10d4fcc393dDA87d7Ad11F7138ca0eF6E93e91b. description Minecraft Steve is the most iconic mascot from Microsoft. socials() https://x.com/steveonhood and https://www.stevecoin.us/. owner() reverts." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory owner(), getLaunchedToken, curve.graduated()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T05:25:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21, CLM-22], excerpt: "block 53169690. factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. getLaunchedToken pairToken 0xe932…2e74 creatorFeeRecipient 0x164f…c944 graduationThreshold 16078639417693171399. curve.graduated() 1 pairToken MSFT token 0x9a70…2375. Factory code 24177 B. Curve code 10229 B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens STEVE", url: "https://api.dexscreener.com/latest/dex/tokens/0x9a70d368DA240ACF67d5859aB750644DD5d12375", published_at: null, accessed_at: 2026-09-03T05:23:30Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-10, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "4 robinhood uniswap pairs. Top pairAddress 0x00d0bb050b18dc4f370c5088e564dba1c44c7287c87a0c807407c847e3dc0b34 labels v4 base Steve / STEVE quote Microsoft • Robinhood Token / MSFT 0xe93237C50D904957Cf27E7B1133b510C669c2e74 liquidity.usd 15296.58 volume.h24 269393.29 fdv 35539 marketCap 35539 pairCreatedAt 1788384897000. info.websites [{url https://www.stevecoin.us/}] info.socials [{url https://x.com/steveonhood type twitter}]." }
  - { id: R-8, publisher: stevecoin.us, title: "$STEVE — Built block by block", url: "https://www.stevecoin.us/", published_at: null, accessed_at: 2026-09-03T05:26:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-23], excerpt: "HTTP 200. title $STEVE — Built block by block. meta description $STEVE paired with the MSFT Stock Token on Robinhood Chain. HTML shell has no 0x9a70 string; SPA loads /assets/index-CFDRnHPw.js." }
  - { id: R-9, publisher: stevecoin.us, title: "SPA bundle embeds CA 0x9a70…2375", url: "https://www.stevecoin.us/assets/index-CFDRnHPw.js", published_at: null, accessed_at: 2026-09-03T05:26:30Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-19, CLM-23], excerpt: "HTTP 200. Bundle contains lu=\"0x9a70d368da240acf67d5859ab750644dd5d12375\" as the only 40-byte address. No x.com/steveonhood string in the JS this pass." }
  - { id: R-10, publisher: "@SteveOnHood", title: "Steve has entered the chat", url: "https://x.com/SteveOnHood/status/2095263704551977074", published_at: 2026-09-02T21:32:49Z, accessed_at: 2026-09-03T05:28:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, EVT-7], excerpt: "Steve has entered the chat. $STEVE is live and paired with $MSFT. 0x9a70d368da240acf67d5859ab750644dd5d12375" }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T05:27:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One MSFT row tokenSymbol MSFT tokenName Microsoft • Robinhood Token contractAddress 0xe93237C50D904957Cf27E7B1133b510C669c2e74 chainId 4663 status ASSET_STATUS_ACTIVE isin US5949181045." }
  - { id: R-12, publisher: Blockscout, title: "Token 0xe932…2e74 Microsoft • Robinhood Token / MSFT", url: "https://robinhoodchain.blockscout.com/address/0xe93237C50D904957Cf27E7B1133b510C669c2e74", published_at: null, accessed_at: 2026-09-03T05:26:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xe93237C50D904957Cf27E7B1133b510C669c2e74 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name Microsoft • Robinhood Token symbol MSFT decimals 18 holders_count 44310 total_supply 3778555000000000000000." }
  - { id: R-13, publisher: Blockscout, title: "CurveCompleted tx 0x4cecd4b1…6ec1", url: "https://robinhoodchain.blockscout.com/tx/0x4cecd4b1e8b7c912d6f29dd9350fad4170867bfd98135b8fc486cce756e06ec1", published_at: 2026-09-02T21:34:04Z, accessed_at: 2026-09-03T05:24:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-6], excerpt: "timestamp 2026-09-02T21:34:04.000000Z status ok block_number 52893973. PonsV2BondingCurve CurveCompleted recipient 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e quoteOut 16078639417693171455 tokenOut 285714285714285714266675209. PonsV2LaunchFactory LaunchSwept token 0x9a70d368DA240ACF67d5859aB750644DD5d12375." }
  - { id: R-14, publisher: Blockscout, title: "createGraduatedPool tx 0x08e009ce…d515", url: "https://robinhoodchain.blockscout.com/tx/0x08e009cef69648b34bcb5be750382f6951b682c7847f8dfbe6b997066cc8d515", published_at: 2026-09-02T21:34:57Z, accessed_at: 2026-09-03T05:25:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-15, EVT-5], excerpt: "timestamp 2026-09-02T21:34:57.000000Z status ok block_number 52894490 from 0x49BbF2b70955Fb3a106e084D4BFDa92d334573d2 to PonsV2LaunchFactory method createGraduatedPool(address token) 0x9a70…2375. PoolManager Initialize id 0x00d0…0b34 currency0 STEVE currency1 MSFT fee 0 hooks V2MemeHook 0xE5e7…e044. PoolGraduated positionId 1564204 tokenAmount 204081632653061224684719798 pairTokenAmount 16078639417693171455. V2LaunchLocker TokenSupplyLocked amount 81632653061224489581955411." }
  - { id: R-15, publisher: "@SteveOnHood", title: "$STEVE Prevails", url: "https://x.com/SteveOnHood/status/2095326568776192165", published_at: 2026-09-03T01:42:37Z, accessed_at: 2026-09-03T05:21:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [EVT-2], excerpt: "$STEVE Prevails" }
  - { id: R-16, publisher: "@0xserjamad", title: "this ticker seems good", url: "https://x.com/0xserjamad/status/2095283571111964951", published_at: 2026-09-02T22:51:46Z, accessed_at: 2026-09-03T05:21:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-4], excerpt: "0x9a70d368da240acf67d5859ab750644dd5d12375 this ticker seems good no clue why one of the most popular game for over 15 years isnt a coin yet steve seems like a great coin but yall nuked it run it back?" }
  - { id: R-17, publisher: "@tidaloracleNFT", title: "Attention $STEVE Family vote URL", url: "https://x.com/tidaloracleNFT/status/2095320703713128592", published_at: 2026-09-03T01:19:19Z, accessed_at: 2026-09-03T05:21:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-3], excerpt: "Attention $STEVE Family! YOUR vote matters! Less than 100 votes are needed to list $STEVE on the Robinhood Top 100 Leaderboard. Listing ID: 4784 https://robinhood-main-dex-nqf.netlify.app/vote/0x9a70d368DA240ACF67d5859aB750644DD5d12375 Flag third-party-link." }
  - { id: R-18, publisher: "@SteveOnHood", title: "X profile STEVE (@SteveOnHood)", url: "https://x.com/SteveOnHood", published_at: null, accessed_at: 2026-09-03T05:28:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "title STEVE (@SteveOnHood) / X. og:description 16 followers · 0 following. Robinhood. Joined Aug 2026. description empty. expandedUrl http://stevecoin.us. Profile posted CA 0x9a70…2375 in status 2095263704551977074." }
  - { id: R-19, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T05:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true. Launch tx 0x1e66…476e calls launchAndBuy on this router." }
  - { id: R-20, publisher: Blockscout, title: "Address 0x2674…4952 V2LaunchLocker", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T05:25:30Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-5], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true file_path src/v2/V2LaunchLocker.sol is_partially_verified true compiler v0.8.35. createGraduatedPool emitted TokenSupplyLocked token 0x9a70…2375 amount 81632653061224489581955411 and PositionLocked tokenId 1564204." }

gaps:
  - { priority: P0, question: "Does @SteveOnHood bio later embed CA 0x9a70…2375, or only the website field and the launch tweet?", checked: "x.com/SteveOnHood description empty, expandedUrl stevecoin.us, launch tweet embeds the CA, 2026-09-03", next: "re-read the profile bio and pinned posts after a Claim Profile" }
  - { priority: P1, question: "Does verified PonsV2LaunchFactory source leave any privileged path on a graduated STEVE/MSFT pool beyond factory owner()?", checked: "token owner() reverts; source comment deployer confers no privileges; factory owner() is Safe 0x263e…19Dd; LP locked in V2LaunchLocker, 2026-09-03", next: "read createGraduatedPool and locker modifiers in src/v2 on the explorer" }
  - { priority: P1, question: "Which other 4663 STEVE tickers still trade, and do any share this deployer?", checked: "Blockscout search listed many STEVE names including Minecraft Steve 0x4Adb…ACF6; this seed is 0x9a70…2375 only; @lmn0p99 posted the 0x4Adb CA, 2026-09-03", next: "DexScreener each colliding CA if volume qualifies" }
  - { priority: P2, question: "Does Gecko later return HTTP 200 for this token with a STEVE/MSFT pool slice?", checked: "GET api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x9a70…2375 HTTP 429 this pass; skipped", next: "retry Gecko token and pool endpoints when the first GET is 200" }
---

# STEVE — research packet

## What it is

A one-billion-supply ERC-20 launched on a Pons v2 bonding curve quoted against MSFT, then graduated into a locked Uniswap v4 STEVE/MSFT pool. Traders buy and sell STEVE on that book. Constructor socials name @SteveOnHood and stevecoin.us; the site JS embeds token 0x9a70…2375.

Themes: memecoin, stock-paired:MSFT, rwa, launchpad

## Why it matters

STEVE/MSFT is a Pons v2 graduation onto the Microsoft Stock Token rail, distinct from packed CLIPPY/NANAMI (LongLauncher) and packed DIH/VERITY (other Pons v2 CAs). DexScreener printed about $269k of 24h volume and $15.3k liquidity on that book at collection. GET /rhj/assets lists MSFT at 0xe932…2e74 as the rail, not STEVE.

## What could go wrong

USD liquidity on the STEVE/MSFT book counts both sides, and the quote side is MSFT, not USDG. Other 4663 tokens reuse the STEVE ticker, including Minecraft Steve 0x4Adb…ACF6. Factory owner() is a Safe; token owner() reverts.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x164f…c944 at 2026-09-02T21:30:17Z minted Steve / STEVE supply 1e9*1e18 onto bonding curve 0xa10d…e91b quoted against MSFT. factory() on the token returns PonsV2LaunchFactory 0x7eD5…EC7e. TokenLaunched pairToken is MSFT. [verified R-4 R-5 R-6]

CurveCompleted at 2026-09-02T21:34:04Z; createGraduatedPool at 2026-09-02T21:34:57Z initialized Uniswap v4 poolId 0x00d0…0b34 with V2MemeHook 0xE5e7…e044 fee 0. V2LaunchLocker locked ~8.163e25 STEVE and positionId 1564204. Secondary STEVE/USDG and STEVE/ETH books exist on DexScreener with far less liquidity than the MSFT book. [verified R-7 R-13 R-14]

## Control and security

token owner() reverts. Deployer 0x164f…c944 has no code and is named as creatorFeeRecipient / V2MemeHook creator. Factory owner() 0x263e…19Dd is a Safe. [verified R-5 R-6 R-14]

PonsV2LauncherToken and PonsV2LaunchFactory are verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, PonsV2LaunchFactory.sol, compiler v0.8.35). V2LaunchLocker is partially verified. No audit report URL was located this pass. [verified R-2 R-3 R-20] [unknown]

## Team and provenance

Constructor socials and DexScreener list x.com/steveonhood and https://www.stevecoin.us/. Site title $STEVE — Built block by block; SPA JS embeds CA 0x9a70…2375. @SteveOnHood profile url is stevecoin.us, description empty, and the account posted the CA at 2026-09-02T21:32:49Z. [claim R-7 R-9 R-10 R-18]

## Economics and activity

STEVE/MSFT Uniswap v4 24h volume is 269393.29 USD and liquidity.usd is 15296.58 at 2026-09-03T05:23:30Z from DexScreener latest/dex/tokens. fdv/marketCap is 35539. priceUsd 0.00003553. Pair created 2026-09-02T21:34:57Z. Blockscout holders_count 165. [claim R-1 R-7]

Gecko was skipped: first GET api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x9a70…2375 returned HTTP 429. [unknown]

## Material risks

- Quote token MSFT 0xe932…2e74 is the GET /rhj/assets rail, not the subject. [verified R-11 R-12]
- Pool USD liquidity is STEVE plus MSFT, not a USDG backstop. [claim R-7]
- Ticker-only collision with other 4663 STEVE tokens (e.g. 0x4Adb…ACF6). [claim R-1]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/source/factory/MSFT, launchAndBuy 0x1e66…476e, CurveCompleted 0x4cec…6ec1, createGraduatedPool 0x08e0…d515, RPC name/symbol/factory/curve/socials, DexScreener, /rhj/assets, stevecoin.us HTML+JS, and @SteveOnHood profile/CA tweet were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-11]
- Numbers: 269393.29 is the DexScreener STEVE/MSFT pool 24h volume, not an all-pools figure. Liquidity 15296.58 is that pool. Holders 165 is the Blockscout token page. [claim R-1 R-7]
- Adversarial: the strongest contrary reading is that this is CLIPPY/MSFT, a packed Pons v2 MSFT graduation (DIH / VERITY), NANAMI, or an official Microsoft product. CLIPPY is 0x85856F…1E18 with clippyrh.com / @ClippyMSFT. DIH/VERITY/NANAMI are other CAs. This CA is Pons v2 0x9a70…2375. GET /rhj/assets lists MSFT at 0xe932…2e74 as the rail, not STEVE. [inference R-1 R-5 R-11]

## Operations log

- Base: census 49 slugs have no steve / STEVE / 0x9a70…2375. Packed clippy/dih/verity/nanami CAs on the same work branch are distinct.
- Explorer: Blockscout api/v2 search STEVE, token, source, factory, launchAndBuy 0x1e66…476e, CurveCompleted 0x4cec…6ec1, createGraduatedPool 0x08e0…d515, TokenLaunched / PoolGraduated / TokenSupplyLocked logs, MSFT BeaconProxy. RPC eth_getCode/eth_call with Chrome UA at block 53169690. Chrome UA on Blockscout.
- Aggregators: DexScreener latest/dex/tokens and token-pairs/v1/robinhood. Gecko first GET HTTP 429 — skipped.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 MSFT row at 0xe932…2e74.
- Social: X keyword Latest STEVE/MSFT/steveonhood/stevecoin; from:steveonhood; user search; x.com/SteveOnHood profile HTML; t.co vote URL flagged third-party-link.
- Site: stevecoin.us HTML + /assets/index-CFDRnHPw.js CA string.
- Failed: Gecko token GET 429; Blockscout address logs filter=to 422; many unrelated STEVE search hits.
- Time: collection 2026-09-03T05:21Z–2026-09-03T05:30Z.
