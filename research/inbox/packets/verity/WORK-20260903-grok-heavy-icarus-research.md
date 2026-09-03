---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: verity
name: VERITY
packet_tier: seed
as_of: 2026-09-03T04:40:00Z
prior_packet: null
supersedes: null
owned_slugs: [verity]
allowed_paths:
  - research/inbox/packets/verity/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: VERITY
  aliases: [Verity]
  symbols: [VERITY]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — constructor website empty; DexScreener token payload has no info.websites this pass (info null); Gecko token attributes have no website field; Blockscout token page lists no homepage this pass"
  official_handle: "NULL — constructor socials.twitter is https://x.com/VerityonRH; DexScreener info.socials absent (info null); @VerityonRH bio is Hi, i'm Verity! with no contract; the account posted the CA in a tweet; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, constructor socials, or X search this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the launchpad protocol at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD598…EC7e"
        - "VERITY is a PonsV2LauncherToken at 0x16A49c…7BC6; entity_kind token, ecosystem_role graduation, not the pad"
        - "Official surfaces differ: no VERITY domain this pass versus ponsfamily.com / @ponsdotfamily"
    - slug: clippy
      signals: [other]
      contrary_signals:
        - "Packed CLIPPY is a LongLauncher DopplerERC20V1 clone at 0x85856…1E18 into CLIPPY/MSFT Uniswap v4 pool 0xb3e1…3e25 with clippyrh.com / @ClippyMSFT"
        - "VERITY is a Pons v2 launch at 0x16A49c…7BC6; launchFactory() returns 0x7eD598…EC7e, not LongLauncher 0x22e9…eeED"
        - "No shared domain, handle, or reproduced address; MSFT 0xe932…2e74 is the shared pair rail only"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "VERITY create path is PonsV2LaunchFactory / PonsV2LaunchDeployer, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "VERITY is $VERITY at 0x16A49c…7BC6 paired to MSFT 0xe932…2e74 via Pons v2"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "VERITY is a PonsV2LauncherToken that graduated into a Uniswap v4 VERITY/MSFT pool"
        - "No shared domain, handle, or reproduced address"
    - slug: dih
      signals: [other]
      contrary_signals:
        - "In-flight dih is a separate slug; this packet does not own it"
        - "VERITY token is 0x16A49c…7BC6; @VerityonRH quoted a Veridih meme image without posting a dih contract"
        - "No shared reproduced address this pass"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x16A49c…7BC6 is a verified PonsV2LauncherToken with non-empty code on 4663; launchFactory() returns PonsV2LaunchFactory 0x7eD598…EC7e; TokenLaunched pairToken is MSFT 0xe932…2e74 (GET /rhj/assets Microsoft • Robinhood Token). curve.graduated() returns 1; createGraduatedPool minted Uniswap v4 pool 0x4711…b49b. MSFT is the pair rail, not the subject. Distinct from packed CLIPPY (LongLauncher) and in-flight dih. No official site; constructor twitter is unconfirmed-official. [R-1] [R-5] [R-6] [R-7] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/VerityonRH", authenticity: unconfirmed }

deployments:
  - label: VERITY token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-5, R-18]
  - label: PonsV2LaunchFactory (token launchFactory())
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: PonsV2LaunchDeployer (token creator_address_hash)
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:32:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2]
  - label: Pons v2 bonding curve (token curve())
    role: other
    address:
      value: "0x1D86D5b3c28e4837F365b54300d437ceD6Bf0be6"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:32:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-5, R-6, R-18]
  - label: MSFT Microsoft • Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0xe93237C50D904957Cf27E7B1133b510C669c2e74"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:31:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-6, R-12, R-16]
  - label: V2LaunchLocker (post-graduation locked tokens)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:35:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-6, R-17]

metrics:
  - { kind: volume_24h, value: 782630.00, currency: USD, as_of: 2026-09-03T04:35:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x4711ddd41dcc198823fed7e52eb8bc1a270134f0fa129c77f35965216ab3b49b volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 33194.54, currency: USD, as_of: 2026-09-03T04:35:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x4711ddd41dcc198823fed7e52eb8bc1a270134f0fa129c77f35965216ab3b49b reserve_in_usd (VERITY/MSFT pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 172026.27, currency: USD, as_of: 2026-09-03T04:35:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x4711ddd41dcc198823fed7e52eb8bc1a270134f0fa129c77f35965216ab3b49b fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 502, currency: null, as_of: 2026-09-03T04:31:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32ad829 (53139497). Token 0x16A49c…7BC6 eth_getCode 3248 B (not EIP-1167). name Verity, symbol VERITY, decimals 18, totalSupply 1e27. deployer() 0x6AeEF380…e3B6. curve() 0x1D86D5b3…0be6. launchFactory() 0x7eD598Bc…EC7e. socials() twitter https://x.com/VerityonRH, telegram/discord/website/farcaster empty. owner() reverts. Factory code 24177 B. Curve code 10229 B. CLIPPY 0x85856…1E18 code 44 B EIP-1167, different bytecode." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-16, R-17, R-18, R-21], result: "Blockscout api/v2 token 0x16A49c…7BC6 name Verity symbol VERITY holders_count 502 total_supply 1e27 is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LauncherToken.sol proxy_type null. creator_address_hash PonsV2LaunchDeployer 0x3711ceA4…1A42. Factory 0x7eD598…EC7e name PonsV2LaunchFactory is_verified true creator 0xFdDE5a1E…CC36. Launch tx 0x0730db9d…19b1 2026-09-02T23:15:11Z block 52952791 from EOA 0xe013ffB2…7960 to unverified 0xb2a748F6…7a14. TokenLaunched token 0x16A49c…7BC6 curve 0x1D86…0be6 deployer 0x6AeE…e3B6 pairToken MSFT 0xe932…2e74 launchConfigId 0 graduationThreshold 16078639417693171399. MSFT 0xe932…2e74 name Microsoft • Robinhood Token BeaconProxy implementation Stock 0xb35490d6…5aE2." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x16A49c…7BC6: 4 robinhood uniswap pairs; top VERITY/MSFT v4 0x4711…b49b quote 0xe932…2e74 Microsoft • Robinhood Token / MSFT liquidity.usd 32264.29 volume.h24 802467.44 fdv/marketCap 158271 pairCreatedAt 1788392062 (2026-09-02T23:34:22Z) info null. Gecko pool: volume_usd.h24 782630.00 reserve_in_usd 33194.54 fdv_usd 172026.27 pool_created_at 2026-09-02T23:34:22Z dex pons-v2-dex. Gecko token volume_usd.h24 782118.21 (all pools) launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T23:34:22Z migrated_destination_pool_address 0x4711…b49b. Gecko token has no website field." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:34:00Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; tokenSymbol MSFT hit: tokenName Microsoft • Robinhood Token, contractAddress 0xe93237C50D904957Cf27E7B1133b510C669c2e74, chainId 4663, status ASSET_STATUS_ACTIVE, isin US5949181045." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:35:00Z, receipt_ids: [R-6], result: "Factory 0x7eD598…EC7e owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd (Pons Safe from the pons packet). Curve token() 0x16A49c…7BC6 pairToken() 0xe932…2e74 graduated() 1. Token balanceOf(curve) 0; balanceOf(PoolManager 0x8366…0951) 101975720.88e18; balanceOf(V2LaunchLocker 0x267444…4952) 81632653.06e18. MSFT balanceOf(curve) 0. Deployer EOA 0xe013…7960 eth_getCode 0x. Unverified forwarder 0xb2a748…7a14 code 11453 B." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchFactory deploys a 1e9-supply PonsV2LauncherToken via PonsV2LaunchDeployer, mints the supply to a bonding curve quoted against factory pairToken MSFT, then createGraduatedPool seeds a Uniswap v4 VERITY/MSFT book. TokenLaunched from 0xe013…7960 minted Verity / VERITY. curve.graduated() is 1.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-18, R-21], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Verity", class: verified, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "VERITY", class: verified, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; constructor socials.twitter https://x.com/VerityonRH; DexScreener info null; @VerityonRH bio has no CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-5, R-7, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote MSFT 0xe932…2e74 is Microsoft • Robinhood Token in GET /rhj/assets (194 assets) at chainId 4663. MSFT is the rail, not the subject. Distinct from packed CLIPPY 0x85856…1E18 (LongLauncher) and from in-flight dih.", class: verified, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [R-12, R-16, R-5], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "VERITY/MSFT Gecko pool 24h volume 782630.00 USD and reserve_in_usd 33194.54 at 2026-09-03T04:35:00Z (Gecko pool slice, not Gecko token all-pools 782118.21)", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 32264.29 volume.h24 802467.44 fdv/marketCap 158271 at 2026-09-03T04:34:00Z", class: verified, observed_at: 2026-09-03T04:34:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 502, class: verified, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges. factory owner() returns Pons Safe 0x263ed2…19Dd.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-5, R-6, R-21], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "constructor deployer_ 0x6AeEF380…e3B6 (CREATE2 in the launch tx); launch EOA 0xe013ffB2…7960; factory owner Safe 0x263ed2…19Dd; creator fee recipient updated to 0xc2778c31…3b64 in the launch tx", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-4, R-6, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is MSFT 0xe93237C50D904957Cf27E7B1133b510C669c2e74; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x4711…b49b (Gecko dex pons-v2-dex; DexScreener labels v4)", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-6, R-7, R-8, R-20], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711ceA4…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD598…EC7e as the pad, not LONG, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: constructor socials.twitter https://x.com/VerityonRH; @VerityonRH posted the CA 42s after launch; bio has no CA; DexScreener info null", class: claim, observed_at: 2026-09-03T04:36:00Z, receipt_ids: [R-5, R-7, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 172026.27; DexScreener fdv/marketCap 158271. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xe93237C50D904957Cf27E7B1133b510C669c2e74", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-6, R-12, R-16], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x1D86D5b3c28e4837F365b54300d437ceD6Bf0be6", class: verified, observed_at: 2026-09-03T04:32:00Z, receipt_ids: [R-5, R-6, R-18], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — constructor website empty; DexScreener info null; Gecko token has no website field", class: claim, observed_at: 2026-09-03T04:35:00Z, receipt_ids: [R-5, R-7, R-9], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "verity | VERITY | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:40:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "Same-ticker collision: DexScreener search also returned other robinhood VERITY bases 0xCF8B45…888E, 0x6708BF…7BC6, 0x0cC475…e279 and Solana 3nTmaNvUd12oEd52rsjc8hZLqSjRm1yoEtCnZBDRpump; this packet is 0x16A49c…7BC6 only. Flag wrong-chain on the Solana mint.", class: claim, observed_at: 2026-09-03T04:30:00Z, receipt_ids: [R-22], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko VERITY/MSFT 24h volume $782.6k, liquidity $33.2k"
    summary: "Gecko pool 0x4711…b49b volume_usd.h24 782630 reserve_in_usd 33194.54 fdv_usd 172026.27. DexScreener same pair volume.h24 802467.44 liquidity.usd 32264.29."
    occurred_at: 2026-09-03T04:35:00Z
    observed_at: 2026-09-03T04:35:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: ct
    title: "@VerityonRH posted the CA with an MSFT pair claim"
    summary: "@VerityonRH: Hi, i'm Verity now on Robinhood paired with Microsoft! plus 0x16a49c…7bc6 at 2026-09-02T23:15:53Z, 42s after TokenLaunched. Bio remains Hi, i'm Verity! with no CA."
    occurred_at: 2026-09-02T23:15:53Z
    observed_at: 2026-09-03T04:36:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13, R-19]
  - id: EVT-3
    type: onchain
    title: "createGraduatedPool seeded VERITY/MSFT Uniswap v4"
    summary: "Tx 0x295de92f…ecc9 from 0x3534aDCa…DA53 at 2026-09-02T23:34:22Z; PoolGraduated positionId 1574800 tokenAmount ~204.08e6 pairTokenAmount ~16.079e18 MSFT; GraduationTokensPermanentlyLocked ~81.63e6 to V2LaunchLocker."
    occurred_at: 2026-09-02T23:34:22Z
    observed_at: 2026-09-03T04:37:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-20, R-17]
  - id: EVT-4
    type: onchain
    title: "Pons v2 TokenLaunched minted Verity / VERITY against MSFT"
    summary: "Tx 0x0730db9d…19b1 from 0xe013ffB2…7960 at 2026-09-02T23:15:11Z block 52952791; TokenLaunched pairToken 0xe932…2e74 graduationThreshold ~16.079e18 MSFT."
    occurred_at: 2026-09-02T23:15:11Z
    observed_at: 2026-09-03T04:32:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-5
    type: onchain
    title: "CurveCompleted / LaunchSwept at the graduation threshold"
    summary: "Tx 0xa39fa8c1…843d at 2026-09-02T23:34:16Z block 52963932; CurveCompleted quoteOut 16078639417693171593 tokenOut ~285.71e6 to factory; LaunchSwept same amounts."
    occurred_at: 2026-09-02T23:34:16Z
    observed_at: 2026-09-03T04:37:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-23]
  - id: EVT-6
    type: ct
    title: "@6Foot4Honda posted Verity/Microsoft as a Robinhood meme-stock test"
    summary: "Post: Verity / Microsoft is the one that either paves the way for a new trend on @RobinhoodCrypto or attempts and fails."
    occurred_at: 2026-09-03T00:46:52Z
    observed_at: 2026-09-03T04:33:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-10]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x16A49c…7BC6 Verity / VERITY", url: "https://robinhoodchain.blockscout.com/address/0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6", published_at: null, accessed_at: 2026-09-03T04:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6 name Verity is_contract true is_verified true proxy_type null implementations []. token symbol VERITY decimals 18 total_supply 1000000000000000000000000000 holders_count 502 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x0730db9d8888d2951e4372c520de407223615738778b18fc685e81b4e56f19b1. counters token_holders_count 505 this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3711ceA4…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36 creation_transaction_hash 0x849d092ee4ed37d8138636839c28aabd2878e445cb68ba99c4cdafa11a778b2e 2026-08-03T14:41:19Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD598…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true is_fully_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. Compiler v0.8.35 file_path contracts/src/v2/PonsV2LaunchFactory.sol verified_at 2026-08-04T17:40:45Z." }
  - { id: R-4, publisher: Blockscout, title: "launch tx 0x0730db9d…19b1", url: "https://robinhoodchain.blockscout.com/tx/0x0730db9d8888d2951e4372c520de407223615738778b18fc685e81b4e56f19b1", published_at: 2026-09-02T23:15:11Z, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-6, CLM-14, EVT-4], excerpt: "timestamp 2026-09-02T23:15:11.000000Z status ok result success block_number 52952791 from 0xe013ffB29ff272a505b5a71cD837ed71BBF07960 (is_contract false) to 0xb2a748F698Ae894FddFAe9504807dAf10f9d7a14 (is_verified false) method 0xe1b77db5 value 287242783356960412. Token mint Transfer from 0x0 to curve 0x1D86…0be6 value 1e27." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, socials(), launchFactory() on VERITY", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-16, CLM-17, CLM-22, CLM-23], excerpt: "eth_blockNumber 0x32ad829 (53139497). Token code 3248 B. name Verity symbol VERITY decimals 18 totalSupply 1e27. deployer() 0x6AeEF3806c9dC53ac146a61f300642afd0ceE3B6. curve() 0x1D86D5b3c28e4837F365b54300d437ceD6Bf0be6. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. socials() [https://x.com/VerityonRH, '', '', '', '']. owner() reverts. Factory code 24177 B. Curve code 10229 B. CLIPPY 0x85856…1E18 code 44 B." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory owner(), curve token()/pairToken()/graduated(), balances", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21, CLM-22], excerpt: "factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. curve token() 0x16A49c…7BC6 pairToken() 0xe93237C5…2e74 graduated() 1. VERITY balanceOf(curve) 0 balanceOf(PoolManager 0x8366…0951) 101975720876415862296438204 balanceOf(V2LaunchLocker 0x267444…4952) 81632653061224489081501871. MSFT balanceOf(curve) 0. EOA 0xe013…7960 code 0x." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens VERITY", url: "https://api.dexscreener.com/latest/dex/tokens/0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24], excerpt: "4 robinhood uniswap pairs. Top pairAddress 0x4711ddd41dcc198823fed7e52eb8bc1a270134f0fa129c77f35965216ab3b49b labels v4 base Verity / VERITY quote Microsoft • Robinhood Token / MSFT 0xe93237C5…2e74 liquidity.usd 32264.29 volume.h24 802467.44 fdv 158271 marketCap 158271 pairCreatedAt 1788392062000. info null this pass." }
  - { id: R-8, publisher: GeckoTerminal, title: "VERITY/MSFT pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x4711ddd41dcc198823fed7e52eb8bc1a270134f0fa129c77f35965216ab3b49b", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name VERITY / MSFT pool_created_at 2026-09-02T23:34:22Z fdv_usd 172026.2691 market_cap_usd null volume_usd.h24 782630.000269362 reserve_in_usd 33194.5383 transactions.h24 buys 2949 sells 2951. dex pons-v2-dex quote robinhood_0xe93237c50d904957cf27e7b1133b510c669c2e74." }
  - { id: R-9, publisher: GeckoTerminal, title: "Verity token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6", published_at: null, accessed_at: 2026-09-03T04:35:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-23], excerpt: "name Verity symbol VERITY decimals 18 total_supply 1e27 price_usd 0.0001720262691 fdv_usd 172026.269128659 market_cap_usd null volume_usd.h24 782118.210569024 total_reserve_in_usd 17238.04. coingecko_coin_id null. No website field. launchpad_details graduation_percentage 100.0 completed true completed_at 2026-09-02T23:34:22.000Z migrated_destination_pool_address 0x4711ddd41dcc198823fed7e52eb8bc1a270134f0fa129c77f35965216ab3b49b." }
  - { id: R-10, publisher: "@6Foot4Honda", title: "Verity / Microsoft paves the way or fails", url: "https://x.com/6Foot4Honda/status/2095312534932783598", published_at: 2026-09-03T00:46:52Z, accessed_at: 2026-09-03T04:33:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "if the Gen-Z “Troll” survives on Robinhood, it paves the path for an entire niche of viral memes / paired relevant stock to do VERY WELL in general. Verity / Microsoft is the one that either paves the way for a new trend on @RobinhoodCrypto or attempts and fails." }
  - { id: R-11, publisher: "@dexpaidpanther", title: "Dex paid Verity (VERITY) / MSFT", url: "https://x.com/dexpaidpanther/status/2095307047596102004", published_at: 2026-09-03T00:25:03Z, accessed_at: 2026-09-03T04:33:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-4], excerpt: "Dex paid: Verity (VERITY) / MSFT 0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6 MC: 205K Chain: robinhood (ponsv2) Time detected: 03:25:02." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:34:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. tokenSymbol MSFT tokenName Microsoft • Robinhood Token deployments contractAddress 0xe93237C50D904957Cf27E7B1133b510C669c2e74 chainId 4663 status ASSET_STATUS_ACTIVE isin US5949181045." }
  - { id: R-13, publisher: X, title: "@VerityonRH profile", url: "https://x.com/VerityonRH", published_at: null, accessed_at: 2026-09-03T04:36:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "HTTP 200. title Verity (@VerityonRH) / X. og:description Hi, i'm Verity! Banner user id 2095285459777695745. Profile HTML embeds tweet full_text with CA 0x16a49c0896b889b31d00ac1edf51ad1ffcdf7bc6. Bio has no contract this pass." }
  - { id: R-14, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6?tab=contract", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_fully_verified true file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-09-02T23:21:37Z. Comment: deployer is carried as immutable reference data for off-chain attribution only, and confers no privileges over the token. Entire supply mints to the bonding curve." }
  - { id: R-15, publisher: Blockscout, title: "Factory creation is prior Pons deploy", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: 2026-08-04T17:40:45Z, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "PonsV2LaunchFactory creator 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36. Matches census pons packet factory address." }
  - { id: R-16, publisher: Blockscout, title: "Token 0xe932…2e74 Microsoft • Robinhood Token / MSFT", url: "https://robinhoodchain.blockscout.com/address/0xe93237C50D904957Cf27E7B1133b510C669c2e74", published_at: null, accessed_at: 2026-09-03T04:31:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xe93237C50D904957Cf27E7B1133b510C669c2e74 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Microsoft • Robinhood Token symbol MSFT decimals 18 holders_count 44280 icon_url cdn.robinhood.com." }
  - { id: R-17, publisher: Blockscout, title: "createGraduatedPool tx 0x295de92f…ecc9", url: "https://robinhoodchain.blockscout.com/tx/0x295de92fb9d9a6f701eebca8d689577e9c4ba16d5cfc8da7608050de6edbecc9", published_at: 2026-09-02T23:34:22Z, accessed_at: 2026-09-03T04:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-15, EVT-3], excerpt: "timestamp 2026-09-02T23:34:22.000000Z status ok from 0x3534aDCa2E257e3564723330a1768339bE19DA53 (is_contract false) to PonsV2LaunchFactory method createGraduatedPool(address token) token 0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6 block 52963990." }
  - { id: R-18, publisher: Blockscout, title: "TokenLaunched log for VERITY", url: "https://robinhoodchain.blockscout.com/tx/0x0730db9d8888d2951e4372c520de407223615738778b18fc685e81b4e56f19b1", published_at: 2026-09-02T23:15:11Z, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-15, EVT-4], excerpt: "TokenLaunched token 0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6 curve 0x1D86D5b3c28e4837F365b54300d437ceD6Bf0be6 deployer 0x6AeEF3806c9dC53ac146a61f300642afd0ceE3B6 pairToken 0xe93237C50D904957Cf27E7B1133b510C669c2e74 launchConfigId 0 graduationThreshold 16078639417693171399. Constructor name Verity symbol VERITY twitter https://x.com/VerityonRH supply 1e27." }
  - { id: R-19, publisher: "@VerityonRH", title: "Hi, i'm Verity now on Robinhood paired with Microsoft!", url: "https://x.com/VerityonRH/status/2095289639640723958", published_at: 2026-09-02T23:15:53Z, accessed_at: 2026-09-03T04:36:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "Hi, i'm Verity now on Robinhood paired with Microsoft! 0x16a49c0896b889b31d00ac1edf51ad1ffcdf7bc6. Author Verity @VerityonRH bio Hi, i'm Verity!" }
  - { id: R-20, publisher: Robinhood Chain RPC, title: "eth_getLogs PoolGraduated / GraduationTokensPermanentlyLocked", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, EVT-3], excerpt: "PoolGraduated token 0x16A49c…7BC6 tx 0x295de92f…ecc9 block 52963990 positionId 1574800 tokenAmount 204081632653061225185175528 pairTokenAmount 16078639417693171593. GraduationTokensPermanentlyLocked amount 81632653061224489081499681 same tx. LaunchSwept tx 0xa39fa8c1…843d block 52963932 quoteOut 16078639417693171593 tokenOut 285714285714285714266675209." }
  - { id: R-21, publisher: Blockscout, title: "PonsV2LaunchFactory verified source", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e?tab=contract", published_at: null, accessed_at: 2026-09-03T04:32:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LaunchFactory. Events TokenLaunched, LaunchSwept, PoolGraduated, GraduationTokensPermanentlyLocked. Functions graduate(address token), createGraduatedPool(address token)." }
  - { id: R-22, publisher: DexScreener, title: "latest/dex/search VERITY", url: "https://api.dexscreener.com/latest/dex/search?q=VERITY", published_at: null, accessed_at: 2026-09-03T04:30:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25], excerpt: "robinhood VERITY/MSFT 0x16A49c0896b889B31d00ac1EdF51AD1fFcDF7BC6 / 0xe93237C5…2e74 liq 33768.39 vol 801715.39 at search time. Other robinhood VERITY bases 0xCF8B45AC…888E, 0x6708BF69…7BC6, 0x0cC475D0…e279. Solana VERITY 3nTmaNvUd12oEd52rsjc8hZLqSjRm1yoEtCnZBDRpump." }
  - { id: R-23, publisher: Blockscout, title: "LaunchSwept / CurveCompleted tx 0xa39fa8c1…843d", url: "https://robinhoodchain.blockscout.com/tx/0xa39fa8c1babaca54251155262efabf937fae617e1be6c18a91de74e0ec0b843d", published_at: 2026-09-02T23:34:16Z, accessed_at: 2026-09-03T04:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-5], excerpt: "timestamp 2026-09-02T23:34:16.000000Z status ok from 0xd20B24A4B2Bc9d74d01d05F4fe9AaC6B92d7cEaf to 0x4A86009A36FceC5Aa341ffCEB3205a911FcF6f60 method 0x3e0f9c3c block 52963932. CurveCompleted recipient factory quoteOut 16078639417693171593 tokenOut 285714285714285714266675209. LaunchSwept token 0x16A49c…7BC6 same amounts." }

gaps:
  - { priority: P0, question: "Does @VerityonRH later put the CA 0x16A49c…7BC6 in the bio or a site that DexScreener indexes?", checked: "constructor twitter https://x.com/VerityonRH; bio Hi, i'm Verity! with no CA; DexScreener info null; tweet 2095289639640723958 embeds the CA, 2026-09-03", next: "re-read the X bio and DexScreener token profile after a Claim Profile" }
  - { priority: P1, question: "Who is unverified forwarder 0xb2a748…7a14 (launch tx to, method 0xe1b77db5) relative to Pons LaunchForwarderSet?", checked: "is_verified false, creator_address_hash null, code 11453 B; factory is verified PonsV2LaunchFactory, 2026-09-03", next: "read PonsV2LaunchFactory launchForwarder() and compare bytecode" }
  - { priority: P1, question: "Is bonding curve 0x1D86…0be6 a verified PonsV2BondingCurve clone, and does any remaining privileged path survive graduated()==1?", checked: "is_verified false; token() / pairToken() / graduated()=1; token balanceOf(curve) 0, 2026-09-03", next: "match bytecode to PonsV2BondingCurve and read sweep/graduate modifiers" }
  - { priority: P2, question: "Do the other robinhood VERITY tickers (0xCF8B45…, 0x6708BF…, 0x0cC475…) share a deployer or socials with 0x16A49c…7BC6?", checked: "DexScreener search listed them as separate bases; this packet did not open those contracts, 2026-09-03", next: "eth_getCode/name/socials on those three addresses" }
  - { priority: P2, question: "Does in-flight dih later share this 0x16A49c…7BC6 address or only the Veridih meme?", checked: "@VerityonRH quoted a Veridih image; no dih packet on this branch; no dih CA in the VERITY launch tx, 2026-09-03", next: "diff against the dih packet address if it lands" }
---

# VERITY — research packet

## What it is

A one-billion-supply ERC-20 launched on Pons v2 against MSFT. PonsV2LaunchFactory deploys Verity (VERITY), mints the supply to a bonding curve, then createGraduatedPool seeds the VERITY/MSFT Uniswap v4 book. Traders buy and sell VERITY on that book. MSFT is the pair rail, not the subject. No official site was located this pass; constructor twitter https://x.com/VerityonRH is unconfirmed-official.

Themes: memecoin, stock-paired:MSFT, rwa, pons-v2

## Why it matters

The VERITY/MSFT Uniswap v4 book printed about $782.6k of 24h volume on Gecko at collection, with the quote token the Microsoft Robinhood Stock Token. GET /rhj/assets has an MSFT row at 0xe932…2e74. Packed CLIPPY is a different MSFT pair (LongLauncher). In-flight dih is a different slug.

## What could go wrong

USD liquidity figures on the VERITY/MSFT book count both sides, and the quote side is MSFT, not USDG. Same-ticker VERITY contracts exist on robinhood and Solana; this packet is 0x16A49c…7BC6 only. Constructor twitter is unconfirmed-official because the bio has no CA and DexScreener info is null.

## Product and mechanics

PonsV2LaunchDeployer 0x3711ceA4…1A42 is the Blockscout creator. Launch tx 0x0730db9d…19b1 from EOA 0xe013ffB2…7960 at 2026-09-02T23:15:11Z went through unverified 0xb2a748F6…7a14 and emitted TokenLaunched for Verity / VERITY into curve 0x1D86…0be6 quoted against MSFT. Entire 1e9*1e18 supply minted to the curve. [verified R-4 R-5 R-14 R-18]

createGraduatedPool(token 0x16A49c…7BC6) at 2026-09-02T23:34:22Z from 0x3534aDCa…DA53 seeded Uniswap v4 poolId 0x4711…b49b. LaunchSwept six seconds earlier moved ~16.079 MSFT and ~285.71e6 VERITY to the factory. GraduationTokensPermanentlyLocked ~81.63e6 VERITY into V2LaunchLocker 0x267444…4952. curve.graduated() returns 1; curve token balance is 0. PoolManager holds ~101.98e6 VERITY. Secondary VERITY/USDG and VERITY/ETH books exist on DexScreener with far less liquidity than the MSFT book. [verified R-6 R-7 R-17 R-20]

## Control and security

token owner() reverts. Verified token source says deployer_ is attribution-only. factory owner() is Pons Safe 0x263ed2…19Dd. Launch EOA 0xe013…7960 has no code. Unverified forwarder 0xb2a748…7a14 has code and is not named on Blockscout this pass. [verified R-5 R-6 R-14]

PonsV2LauncherToken and PonsV2LaunchFactory are fully verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, contracts/src/v2/PonsV2LaunchFactory.sol, compiler v0.8.35). The per-launch curve is not verified. No audit report URL was located this pass. [verified R-1 R-3] [unknown]

## Team and provenance

No official domain this pass. Constructor socials.twitter is https://x.com/VerityonRH; telegram, discord, website, and farcaster are empty. @VerityonRH posted the CA 42 seconds after TokenLaunched. Bio is Hi, i'm Verity! with no contract. DexScreener info is null. Flag unconfirmed-official. [claim R-5 R-7 R-13 R-19]

## Economics and activity

VERITY/MSFT Uniswap v4 24h volume is 782630.00 USD and reserve_in_usd is 33194.54 at 2026-09-03T04:35:00Z from the Gecko pool endpoint. fdv_usd is 172026.27. Gecko token volume_usd.h24 is 782118.21 across all pools, not the MSFT book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 32264.29, volume.h24 802467.44, fdv/marketCap 158271. Blockscout holders_count 502. Pair created 2026-09-02T23:34:22Z. [claim R-1 R-7]

Gecko launchpad_details reports graduation_percentage 100 completed at 2026-09-02T23:34:22Z to pool 0x4711…b49b, matching createGraduatedPool. [claim R-9 R-17]

## Material risks

- Quote token MSFT 0xe932…2e74 is a Robinhood Stock Token rail; VERITY is not that asset. [verified R-12 R-16]
- Pool USD reserve is VERITY plus MSFT, not a USDG or WETH backstop. [claim R-7 R-8]
- Same-ticker VERITY contracts exist on robinhood and Solana; flag wrong-chain on 3nTmaNv…pump. [claim R-22]
- Constructor twitter is unconfirmed-official; DexScreener info null. [claim R-5 R-7 R-13]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/deployer/MSFT/locker and launch, sweep, and graduate txs, RPC name/symbol/socials/launchFactory/owner/graduated/balances, DexScreener tokens and search, Gecko pool/token, /rhj/assets, @VerityonRH profile and CA tweet, and @6Foot4Honda were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12]
- Numbers: 782630.00 is the Gecko VERITY/MSFT pool 24h volume, not the 782118.21 token all-pools figure. Reserve 33194.54 is that pool. DexScreener 802467.44 / 32264.29 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that VERITY is CLIPPY, official Microsoft, or in-flight dih. CLIPPY is 0x85856…1E18 via LongLauncher; MSFT is the /rhj/assets rail; dih has no reproduced address on this token. [inference R-5 R-12 R-16]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no verity / VERITY / 0x16A49c…7BC6. content/dependencies/stock-tokens.yaml lists MSFT at 0xe932…2e74 as a rail.
- Explorer: Blockscout api/v2 token, factory, deployer, MSFT, locker, launch 0x0730db9d…19b1, sweep 0xa39fa8c1…843d, graduate 0x295de92f…ecc9, TokenLaunched / LaunchSwept / PoolGraduated / lock logs, holders. RPC eth_getCode/eth_call/eth_getLogs with Chrome UA at block 53139497.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko first GET 200 then token, pool, token/pools.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, MSFT hit at 0xe932…2e74.
- Social: X keyword VERITY/MSFT/0x16A49c Latest; from:VerityonRH; user search VerityonRH (did not rank @VerityonRH); x.com/VerityonRH HTML; thread 2095289639640723958.
- Failed: token owner() reverts; curve is_verified false; DexScreener info null; Gecko token has no website; X user search did not return @VerityonRH (from: query did).
- Time: collection 2026-09-03T04:30Z–2026-09-03T04:40Z.
