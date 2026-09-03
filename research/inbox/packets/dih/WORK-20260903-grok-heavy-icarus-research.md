---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: dih
name: DIH
packet_tier: seed
as_of: 2026-09-03T04:31:00Z
prior_packet: null
supersedes: null
owned_slugs: [dih]
allowed_paths:
  - research/inbox/packets/dih/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: DIH
  aliases: [dih]
  symbols: [DIH]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites and on-chain socials() list https://www.justdih.com/; HTML title DIH / just dih with no CA 0x8A3b… this pass; og:image host dihhh.fun returned DEPLOYMENT_NOT_FOUND; flag unconfirmed-official"
  official_handle: "NULL — DexScreener info.socials and on-chain socials() list x.com/dihpons; @dihpons bio is just dih with no CA 0x8A3b… in the posts opened this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, justdih.com, or the @dihpons posts this pass"
  possible_matches:
    - slug: clippy
      signals: [ticker, other]
      contrary_signals:
        - "CLIPPY is Clippy / CLIPPY at 0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18, EIP-1167 DopplerERC20V1 created by DopplerERC20V1Factory 0x1B37…b69a, site clippyrh.com / @ClippyMSFT"
        - "DIH is PonsV2LauncherToken 0x8A3b…2B63 paired to the same MSFT rail 0xe932…2e74 via PonsV2LaunchFactory 0x7eD5…EC7e"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is @bankrbot / bankr.bot with DopplerERC20V1Factory 0x1B37…b69a / Airlock; that factory created CLIPPY 0x85856F…1E18"
        - "DIH creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42, not DopplerERC20V1Factory"
        - "No shared domain, handle, or reproduced address"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED; @longdotxyz named @ClippyMSFT as an OG MSFT pair"
        - "DIH is a Pons v2 bonding-curve graduation into Uniswap v4 DIH/MSFT, not a LongLauncher clone"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the launchpad at ponsfamily.com / @ponsdotfamily with PONS 0x39dB…4571"
        - "DIH 0x8A3b…2B63 is a PonsV2LauncherToken graduation paired to MSFT, not the PONS token"
        - "Distinct from Pons v1 Dih 0x0c1e…9C74 (PonsLauncherToken, holders_count 1618621) and from Dog In Hood 0x17bb…E4a4"
        - "No shared domain, handle, or reproduced address with the PONS token"
    - slug: noxa
      signals: [ticker]
      contrary_signals:
        - "Census Noxa is a pad; a prior $DIH ticker on Noxa/Pons v1 is token 0x0c1e…9C74 named Dih / PonsLauncherToken"
        - "This seed is Pons v2 token 0x8A3b…2B63 named dih / DIH, created 2026-09-03T03:07:28Z"
        - "No shared domain, handle, or reproduced address"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "DIH is $DIH at 0x8A3b…2B63 paired to MSFT via PonsV2LaunchFactory"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "DIH is a PonsV2LauncherToken with no vault of its own; pair asset is MSFT"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x8A3b…2B63 is a verified PonsV2LauncherToken with non-empty code on 4663; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e; launch via Multicall3 minted dih / DIH against MSFT 0xe932…2e74 (Microsoft • Robinhood Token, GET /rhj/assets hit). Curve completed and createGraduatedPool initialized Uniswap v4 poolId 0xa4c5…bcc6. MSFT is the pair rail, not the subject. Distinct from CLIPPY/MSFT 0x85856F…1E18. No official site or handle this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-11] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-9, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: x, url: "https://x.com/dihpons", authenticity: unconfirmed }
  - { kind: site, url: "https://www.justdih.com/", authenticity: unconfirmed }

deployments:
  - label: DIH token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:35Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: Pons v2 bonding curve
    role: other
    address:
      value: "0x54264738a12B273e2cF7FE46F36E7f72Ac2A7a17"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:44Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-4, R-5, R-6]
  - label: PonsV2LaunchFactory
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:01Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5, R-6]
  - label: PonsV2LaunchAndBuy
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:01Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4]
  - label: PonsV2LaunchDeployer
    role: other
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:35Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3]
  - label: MSFT Microsoft • Robinhood Token (pair rail)
    role: token
    address:
      value: "0xe93237C50D904957Cf27E7B1133b510C669c2e74"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:44Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: false
    receipt_ids: [R-6, R-10, R-11]
  - label: V2LaunchLocker
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:28:06Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-12]

metrics:
  - { kind: volume_24h, value: 2090370.50735248, currency: USD, as_of: 2026-09-03T04:30:29Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa4c52c9265f28f6ec8768bd38d84796bb345bb0787de58dd1b4f3dfa514bbcc6 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 64191.42, currency: USD, as_of: 2026-09-03T04:30:29Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa4c52c9265f28f6ec8768bd38d84796bb345bb0787de58dd1b4f3dfa514bbcc6 reserve_in_usd (DIH/MSFT pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 678524.33, currency: USD, as_of: 2026-09-03T04:29:05Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-9] }
  - { kind: holders, value: 2530, currency: null, as_of: 2026-09-03T04:30:29Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:26:55Z, receipt_ids: [R-5, R-6], result: "eth_blockNumber 0x32ac653 (53134931). Token 0x8A3b…2B63 eth_getCode 3248 B, not EIP-1167. name dih, symbol DIH, decimals 18, totalSupply 1e27. deployer() 0xcA11bde05977b3631167028862bE2a173976CA11 (Multicall3). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x54264738a12B273e2cF7FE46F36E7f72Ac2A7a17. description just dih. logo ipfs://bafkreie7j3d6vcxjxkfhm42qou44csz3xs7h7lzvvgjbkcqg6gczmniwha. socials() https://x.com/dihpons, empty telegram/discord/farcaster, https://www.justdih.com/. owner() reverts." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:28:06Z, receipt_ids: [R-1, R-2, R-3, R-4, R-10, R-12, R-13, R-18], result: "Blockscout api/v2 token 0x8A3b…2B63 name dih symbol DIH holders_count 2484 then 2530 total_supply 1e27 is_verified true name PonsV2LauncherToken file_path contracts/src/v2/PonsV2LauncherToken.sol. creator_address_hash PonsV2LaunchDeployer 0x3711…1A42 tx 0x04bd5ffe…2553 2026-09-03T03:07:28Z block 53088492 from EOA 0x07d2…1841 to Multicall3 aggregate3Value. TokenLaunched factory 0x7eD5…EC7e curve 0x5426…7a17 pairToken MSFT. CurveCompleted tx 0x67640510…bcd2 2026-09-03T03:08:33Z. createGraduatedPool tx 0x0f31f9b3…1725 2026-09-03T03:08:44Z PoolManager Initialize poolId 0xa4c5…bcc6. MSFT BeaconProxy Stock impl 0xb354…5aE2." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:30:29Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x8A3b…2B63: 20 robinhood uniswap pairs; top DIH/MSFT v4 0xa4c5…bcc6 quote MSFT 0xe932…2e74 Microsoft • Robinhood Token liquidity.usd 69037.23 volume.h24 2102718.58 fdv/marketCap 724609 pairCreatedAt 1788404924000 (2026-09-03T03:08:44Z) info.websites [{url https://www.justdih.com/}] info.socials [{url https://x.com/dihpons, type twitter}]. Gecko pool dex pons-v2-dex name DIH / MSFT volume_usd.h24 2090370.50735248 reserve_in_usd 64191.42 fdv_usd 627906.4567. Gecko token fdv_usd 678524.33 volume_usd.h24 2584123.59 launchpad_details completed true migrated_destination_pool_address 0xa4c5…bcc6." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:30:29Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one MSFT hit tokenSymbol MSFT tokenName Microsoft • Robinhood Token contractAddress 0xe93237C50D904957Cf27E7B1133b510C669c2e74 chainId 4663 status ASSET_STATUS_ACTIVE isin US5949181045." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:26:55Z, receipt_ids: [R-6], result: "Factory 0x7eD5…EC7e code 24177 B. owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. graduationExecutor() 0xC7819B64A1dAECD7eC19856d026cb14EfBd89046. graduationGuard() 0xf5695117b99B6f6401e67d4195BD653628176C6C. launchDeployer() 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42. getLaunchedToken(0x8A3b…2B63) returns token, curve 0x5426…7a17, originalDeployer Multicall3 0xcA11…CA11, creatorFeeRecipient 0x479F1ECd955DFc5Fba4A157F5A2DFf4b751C197C, pairToken MSFT, graduationThreshold 16078639417693171399, last word 1. Curve code 10229 B. curve.graduated() 1. curve.pairToken() MSFT. curve.token() 0x8A3b…2B63. curve.owner() reverts. EOA 0x07d2…1841 eth_getCode 0x. CLIPPY 0x85856F…1E18 code 44 B EIP-1167-style prefix 3d3d3d3d363d3d3736." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy via Multicall3 clones a 1e9-supply PonsV2LauncherToken onto a per-launch bonding curve quoted against MSFT, then createGraduatedPool seeds a locked Uniswap v4 DIH/MSFT pool (PoolManager 0x8366…0951, V2MemeHook 0xE5e7…e044, fee 0). Launch tx from 0x07d2…1841 minted dih / DIH as a Pons v2 MSFT pair.", class: verified, observed_at: 2026-09-03T04:28:06Z, receipt_ids: [R-2, R-4, R-5, R-12, R-13], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "dih", class: verified, observed_at: 2026-09-03T04:22:35Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "DIH", class: verified, observed_at: 2026-09-03T04:22:35Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63", class: verified, observed_at: 2026-09-03T04:28:06Z, receipt_ids: [R-1, R-5, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:26:55Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [R-1, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [R-7, R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials and on-chain socials() list x.com/dihpons; @dihpons bio is just dih with no CA; justdih.com HTML has no CA this pass; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [R-5, R-7, R-15, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote MSFT 0xe932…2e74 is Microsoft • Robinhood Token; GET rhj/assets (194 assets) has one MSFT row at that address. MSFT is the rail, not the subject. Distinct from CLIPPY 0x85856F…1E18 (DopplerERC20V1 / @ClippyMSFT / clippyrh.com on the same MSFT book), from Pons v1 Dih 0x0c1e…9C74, and from Dog In Hood 0x17bb…E4a4.", class: verified, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [R-7, R-10, R-11, R-20, R-21], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DIH/MSFT Uniswap v4 24h volume 2090370.50735248 USD and reserve_in_usd 64191.42 at 2026-09-03T04:30:29Z (Gecko pool slice, not Gecko token all-pools 2584123.59)", class: verified, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 69037.23 volume.h24 2102718.58 fdv/marketCap 724609 at 2026-09-03T04:26:12Z", class: verified, observed_at: 2026-09-03T04:26:12Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 2530, class: verified, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges over the token. Factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd.", class: verified, observed_at: 2026-09-03T04:26:55Z, receipt_ids: [R-2, R-5, R-6], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "token.deployer() is Multicall3 0xcA11…CA11 because the launch was aggregate3Value from EOA 0x07d293e169b9a63141A66468898DC77081121841; V2MemeHook PoolRegistered names creator 0x479F1ECd955DFc5Fba4A157F5A2DFf4b751C197C, which getLaunchedToken returns as creatorFeeRecipient", class: verified, observed_at: 2026-09-03T04:28:06Z, receipt_ids: [R-4, R-6, R-12], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is MSFT 0xe93237C50D904957Cf27E7B1133b510C669c2e74; venue after graduation is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 poolId 0xa4c52c9265f28f6ec8768bd38d84796bb345bb0787de58dd1b4f3dfa514bbcc6. Gecko still labels that pool pons-v2-dex.", class: verified, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [R-6, R-7, R-8, R-12], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() and TokenLaunched name PonsV2LaunchFactory 0x7eD5…EC7e as the pad, not LONG, Bankr/Doppler, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:26:55Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:22:35Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, justdih.com, or X posts this pass", class: unknown, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "third-party-link: DexScreener and on-chain socials list x.com/dihpons and justdih.com; justdih.com title DIH / just dih with no CA in the public HTML; @dihpons posts opened this pass did not embed the CA", class: claim, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [R-5, R-7, R-15, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token fdv_usd 678524.33; DexScreener fdv/marketCap 724609. Gecko pool fdv_usd 627906.46. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xe93237C50D904957Cf27E7B1133b510C669c2e74", class: verified, observed_at: 2026-09-03T04:23:44Z, receipt_ids: [R-6, R-10, R-11], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x54264738a12B273e2cF7FE46F36E7f72Ac2A7a17", class: verified, observed_at: 2026-09-03T04:26:55Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener and on-chain socials list justdih.com; HTML has no CA 0x8A3b… this pass; Gecko token has no website field", class: claim, observed_at: 2026-09-03T04:30:29Z, receipt_ids: [R-7, R-9, R-16], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "dih | DIH | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:31:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko DIH/MSFT 24h volume $2.09M, liquidity $64.2k"
    summary: "Gecko pool 0xa4c5…bcc6 volume_usd.h24 2090370 reserve_in_usd 64191. Gecko token fdv_usd 678524. DexScreener same pair liquidity.usd 69037 volume.h24 2102718."
    occurred_at: 2026-09-03T04:30:29Z
    observed_at: 2026-09-03T04:30:29Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8, R-9]
  - id: EVT-2
    type: onchain
    title: "Multicall3 launch minted dih / DIH against MSFT"
    summary: "Tx 0x04bd…2553 from 0x07d2…1841 at 2026-09-03T03:07:28Z; TokenLaunched token 0x8A3b…2B63 curve 0x5426…7a17 pairToken MSFT."
    occurred_at: 2026-09-03T03:07:28Z
    observed_at: 2026-09-03T04:23:01Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-3
    type: onchain
    title: "Bonding curve completed against MSFT"
    summary: "Tx 0x6764…bcd2 at 2026-09-03T03:08:33Z CurveCompleted quoteOut 16078639417693171516 tokenOut 285714285714285714266675209; factory LaunchSwept."
    occurred_at: 2026-09-03T03:08:33Z
    observed_at: 2026-09-03T04:24:57Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-4
    type: onchain
    title: "createGraduatedPool initialized Uniswap v4 DIH/MSFT"
    summary: "Tx 0x0f31…1725 at 2026-09-03T03:08:44Z; PoolManager Initialize poolId 0xa4c5…bcc6; PoolGraduated positionId 1587983 tokenAmount ~2.041e26 pairTokenAmount 16078639417693171516 MSFT; V2LaunchLocker TokenSupplyLocked ~8.163e25."
    occurred_at: 2026-09-03T03:08:44Z
    observed_at: 2026-09-03T04:28:06Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-5
    type: ct
    title: "X posts circulated CA 0x8A3b…2B63 as DIH/MSFT; CLIPPY named as the other MSFT book"
    summary: "@dexpaidpanther posted dih (DIH) / MSFT 0x8A3b…2B63 chain robinhood (ponsv2). @r_xley quoted @dihpons and posted the CA. @BlockCap named Clippy as the MSFT memecoin runner, distinct from this token."
    occurred_at: 2026-09-03T03:10:21Z
    observed_at: 2026-09-03T04:23:00Z
    affected_fields: [identity.handle, communications.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-15, R-19, R-22]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x8A3b…2B63 dih / DIH", url: "https://robinhoodchain.blockscout.com/address/0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63", published_at: null, accessed_at: 2026-09-03T04:30:29Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63 name dih is_contract true is_verified true. token name dih symbol DIH decimals 18 total_supply 1000000000000000000000000000 holders_count 2530 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x04bd5ffed61ee856d6c347eee946be13456ab29999345f8fe149eb94aa1c2553. holders_count was 2484 at 2026-09-03T04:22:35Z." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63?tab=contract", published_at: null, accessed_at: 2026-09-03T04:23:01Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd file_path contracts/src/v2/PonsV2LauncherToken.sol is_verified true is_partially_verified false verified_at 2026-09-03T03:08:34.606728Z. Comment: deployer is carried as immutable reference data for off-chain attribution only, and confers no privileges over the token. Entire supply mints to the bonding curve." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T04:23:01Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol. ABI includes launchToken, createGraduatedPool, TokenLaunched, LaunchSwept, PoolGraduated." }
  - { id: R-4, publisher: Blockscout, title: "launch tx 0x04bd5ffe…2553", url: "https://robinhoodchain.blockscout.com/tx/0x04bd5ffed61ee856d6c347eee946be13456ab29999345f8fe149eb94aa1c2553", published_at: 2026-09-03T03:07:28Z, accessed_at: 2026-09-03T04:23:01Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-14, CLM-16, EVT-2], excerpt: "timestamp 2026-09-03T03:07:28.000000Z status ok block_number 53088492 from 0x07d293e169b9a63141A66468898DC77081121841 (is_contract false) to Multicall3 0xcA11bde05977b3631167028862bE2a173976CA11 method aggregate3Value. TokenLaunched token 0x8A3b…2B63 curve 0x5426…7a17 deployer Multicall3 pairToken 0xe932…2e74 graduationThreshold 16078639417693171399. PonsV2LaunchAndBuy Launched recipient 0x07d2…1841 quoteSpent 459165674442314922 tokensReceived 66013948807329233376705311." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, deployer(), launchFactory(), socials() on DIH", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:26:55Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-13, CLM-16, CLM-17, CLM-19, CLM-22], excerpt: "eth_blockNumber 0x32ac653 (53134931). Token code 3248 B. name dih symbol DIH decimals 18 totalSupply 1e27. deployer() 0xcA11bde05977b3631167028862bE2a173976CA11. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x54264738a12B273e2cF7FE46F36E7f72Ac2A7a17. description just dih. socials() https://x.com/dihpons and https://www.justdih.com/. owner() reverts." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "factory owner(), getLaunchedToken, curve.graduated()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:26:55Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-13, CLM-14, CLM-15, CLM-21, CLM-22], excerpt: "block 53134931. factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd. poolManager() 0x8366a39CC670B4001A1121B8F6A443A643e40951. getLaunchedToken pairToken 0xe932…2e74 creatorFeeRecipient 0x479F1ECd…197C graduationThreshold 16078639417693171399. curve.graduated() 1 pairToken MSFT token 0x8A3b…2B63. Factory code 24177 B. Curve code 10229 B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens DIH", url: "https://api.dexscreener.com/latest/dex/tokens/0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63", published_at: null, accessed_at: 2026-09-03T04:26:12Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "20 robinhood uniswap pairs. Top pairAddress 0xa4c52c9265f28f6ec8768bd38d84796bb345bb0787de58dd1b4f3dfa514bbcc6 labels v4 base dih / DIH quote Microsoft • Robinhood Token / MSFT 0xe93237C50D904957Cf27E7B1133b510C669c2e74 liquidity.usd 69037.23 volume.h24 2102718.58 fdv 724609 marketCap 724609 pairCreatedAt 1788404924000. info.websites [{url https://www.justdih.com/}] info.socials [{url https://x.com/dihpons type twitter}]." }
  - { id: R-8, publisher: GeckoTerminal, title: "DIH/MSFT Pons V2 Dex pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xa4c52c9265f28f6ec8768bd38d84796bb345bb0787de58dd1b4f3dfa514bbcc6", published_at: null, accessed_at: 2026-09-03T04:30:29Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name DIH / MSFT pool_created_at 2026-09-03T03:08:44Z fdv_usd 627906.4567 market_cap_usd null volume_usd.h24 2090370.50735248 reserve_in_usd 64191.42. transactions.h24 buys 8288 sells 8006. dex pons-v2-dex. base robinhood_0x8a3bd7f2ef7b5d2d2a0f6bef8b9baaad5a592b63 quote robinhood_0xe93237c50d904957cf27e7b1133b510c669c2e74." }
  - { id: R-9, publisher: GeckoTerminal, title: "dih token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63", published_at: null, accessed_at: 2026-09-03T04:29:05Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20, CLM-23, EVT-1], excerpt: "name dih symbol DIH decimals 18 total_supply 1e27 price_usd 0.0006785243299 fdv_usd 678524.329928265 market_cap_usd null volume_usd.h24 2584123.59089203 total_reserve_in_usd 58559.35. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-03T03:08:44.000Z migrated_destination_pool_address 0xa4c52c9265f28f6ec8768bd38d84796bb345bb0787de58dd1b4f3dfa514bbcc6. coingecko_coin_id null." }
  - { id: R-10, publisher: Blockscout, title: "Token 0xe932…2e74 Microsoft • Robinhood Token / MSFT", url: "https://robinhoodchain.blockscout.com/address/0xe93237C50D904957Cf27E7B1133b510C669c2e74", published_at: null, accessed_at: 2026-09-03T04:23:44Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xe93237C50D904957Cf27E7B1133b510C669c2e74 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon implementations Stock 0xb35490d6f9163DE4F80d88dc75C3516eb64C5aE2. token name Microsoft • Robinhood Token symbol MSFT decimals 18 holders_count 44233 total_supply 3647560000000000000000." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:30:29Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One MSFT hit: tokenSymbol MSFT tokenName Microsoft • Robinhood Token contractAddress 0xe93237C50D904957Cf27E7B1133b510C669c2e74 chainId 4663 status ASSET_STATUS_ACTIVE isin US5949181045." }
  - { id: R-12, publisher: Blockscout, title: "createGraduatedPool tx 0x0f31f9b3…1725", url: "https://robinhoodchain.blockscout.com/tx/0x0f31f9b3e5494f6a205d1e07d94c41dbe796f592805a69e1bb79e0fbe38e1725", published_at: 2026-09-03T03:08:44Z, accessed_at: 2026-09-03T04:28:06Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14, CLM-15, EVT-4], excerpt: "timestamp 2026-09-03T03:08:44.000000Z status ok block_number 53089229 from 0x49BbF2b70955Fb3a106e084D4BFDa92d334573d2 to PonsV2LaunchFactory createGraduatedPool(token 0x8A3b…2B63). PoolManager Initialize id 0xa4c5…bcc6 currency0 DIH currency1 MSFT fee 0 hooks V2MemeHook 0xE5e7…e044. PoolGraduated positionId 1587983 tokenAmount 204081632653061224905935737 pairTokenAmount 16078639417693171516. V2LaunchLocker TokenSupplyLocked 81632653061224489360739472." }
  - { id: R-13, publisher: Blockscout, title: "CurveCompleted tx 0x67640510…bcd2", url: "https://robinhoodchain.blockscout.com/tx/0x676405106e5e444357dd7817b71c3cd46d566568fa4c107f0bb4077ec66bbcd2", published_at: 2026-09-03T03:08:33Z, accessed_at: 2026-09-03T04:24:57Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-3], excerpt: "timestamp 2026-09-03T03:08:33.000000Z status ok block_number 53089120. CurveCompleted recipient 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e quoteOut 16078639417693171516 tokenOut 285714285714285714266675209. LaunchSwept token 0x8A3b…2B63 same amounts. FeesSwept protocolAmount 58069393902938018 buybackAmount 0 creatorAmount 135495252440188711." }
  - { id: R-14, publisher: GeckoTerminal, title: "DIH/MSFT pool page", url: "https://www.geckoterminal.com/robinhood/pools/0xa4c52c9265f28f6ec8768bd38d84796bb345bb0787de58dd1b4f3dfa514bbcc6", published_at: null, accessed_at: 2026-09-03T04:30:29Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "Gecko HTML pool page for 0xa4c5…bcc6 on network robinhood. API names the pool DIH / MSFT on Pons V2 Dex." }
  - { id: R-15, publisher: "@dihpons", title: "the big one $dih", url: "https://x.com/dihpons/status/2095359729770074475", published_at: 2026-09-03T03:54:24Z, accessed_at: 2026-09-03T04:23:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, EVT-5], excerpt: "Account display name dih, handle @dihpons, bio just dih. Post: the big one $dih. No contract address in this post. DexScreener and on-chain socials() list https://x.com/dihpons." }
  - { id: R-16, publisher: justdih.com, title: "www.justdih.com", url: "https://www.justdih.com/", published_at: null, accessed_at: 2026-09-03T04:30:29Z, kind: official-site, authority: primary, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-23], excerpt: "HTTP 200. title DIH. meta description just dih. og:image https://www.dihhh.fun/og.jpg. No 0x8A3b… CA in the public HTML this pass. On-chain socials() and DexScreener info.websites list this URL." }
  - { id: R-17, publisher: Blockscout, title: "PonsV2LaunchDeployer 0x3711…1A42", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T04:23:44Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true. Token creator_address_hash and curve creator_address_hash both point here." }
  - { id: R-18, publisher: Blockscout, title: "V2LaunchLocker 0x2674…4952", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T04:28:06Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true. createGraduatedPool logs TokenSupplyLocked token 0x8A3b…2B63 amount 81632653061224489360739472 and PositionLocked tokenId 1587983." }
  - { id: R-19, publisher: "@r_xley", title: "$dih CA post quoting @dihpons", url: "https://x.com/r_xley/status/2095364786200494187", published_at: 2026-09-03T04:14:29Z, accessed_at: 2026-09-03T04:23:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "Quoted @dihpons the big one $dih. Post: $dih 0x8a3bd7f2ef7b5d2d2a0f6bef8b9baaad5a592b63." }
  - { id: R-20, publisher: Blockscout, title: "CLIPPY 0x85856F…1E18 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18", published_at: null, accessed_at: 2026-09-03T04:23:44Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18 name Clippy is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 creator_address_hash DopplerERC20V1Factory 0x1B37D3a72082029c44B35B604Ea473617580b69a. token name Clippy symbol CLIPPY holders_count 2259 total_supply 1e27." }
  - { id: R-21, publisher: DexScreener, title: "latest/dex/tokens CLIPPY", url: "https://api.dexscreener.com/latest/dex/tokens/0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18", published_at: null, accessed_at: 2026-09-03T04:26:12Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9], excerpt: "Top pair CLIPPY / MSFT 0xe932…2e74 liquidity.usd 428227.37 volume.h24 973008.26. info.websites [{url https://clippyrh.com/}] info.socials [{url https://x.com/clippymsft type twitter}]. Distinct CA from DIH 0x8A3b…2B63." }
  - { id: R-22, publisher: "@dexpaidpanther", title: "Dex paid dih (DIH) / MSFT", url: "https://x.com/dexpaidpanther/status/2095348643985293648", published_at: 2026-09-03T03:10:21Z, accessed_at: 2026-09-03T04:22:16Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-5], excerpt: "Dex paid: dih (DIH) / MSFT 0x8A3bD7F2ef7b5d2D2a0F6BeF8B9bAaAd5A592B63 MC: 60K Chain: robinhood (ponsv2) Time detected: 06:10:19." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x8A3b…2B63?", checked: "DexScreener and on-chain socials list x.com/dihpons and justdih.com; @dihpons bio just dih with no CA; justdih.com HTML has no CA; dihhh.fun og host DEPLOYMENT_NOT_FOUND, 2026-09-03", next: "re-read DexScreener token profile after a Claim Profile; search new posts from @dihpons that embed the CA; fetch justdih.com JS bundles for a hardcoded CA" }
  - { priority: P0, question: "Which other DIH tickers remain live, and do any share this deployer or factory?", checked: "Blockscout search returned Pons v1 Dih 0x0c1e…9C74 (PonsLauncherToken, holders 1618621) and Dog In Hood 0x17bb…E4a4 (LaunchToken); DexScreener search listed those plus more DIH/ETH books, 2026-09-03", next: "eth_call launchFactory() on remaining search CAs if they stay in the book" }
  - { priority: P1, question: "Does verified PonsV2LaunchFactory source leave any owner path that can reach this live curve or locked LP after graduation?", checked: "token owner() reverts; factory owner() is Safe 0x263e…19Dd; curve.graduated() 1; LP PositionLocked on V2LaunchLocker, 2026-09-03", next: "read createGraduatedPool and rescueSweptGraduation modifiers in src/v2/PonsV2LaunchFactory.sol on the explorer" }
  - { priority: P2, question: "Does CLIPPY/MSFT remain the larger MSFT book, and does LONG still treat @ClippyMSFT as an OG pair?", checked: "DexScreener CLIPPY/MSFT liq 428227 vs DIH/MSFT 69037; @BlockCap named Clippy as the MSFT runner; @ClippyMSFT bio has CLIPPY CA 0x85856F…1E18, 2026-09-03", next: "re-read CLIPPY packet when that slug is seeded" }
---

# DIH — research packet

## What it is

A one-billion-supply ERC-20 launched on Pons v2 against MSFT, then graduated into a Uniswap v4 DIH/MSFT pool. PonsV2LaunchAndBuy deploys dih (DIH) in one launch call (here wrapped in Multicall3), fills a bonding curve, and createGraduatedPool seeds the DIH/MSFT book. Traders buy and sell DIH on that Uniswap v4 pool. MSFT is the pair rail, not the subject. Distinct from CLIPPY/MSFT. No official site or handle was located this pass.

Themes: memecoin, stock-paired:MSFT, rwa, pons-graduation

## Why it matters

The DIH/MSFT Uniswap v4 book printed about $2.09M of 24h volume on Gecko at collection, with the quote token the Microsoft • Robinhood Token at 0xe932…2e74. GET /rhj/assets has that MSFT row, so the pair leg is a Robinhood Stock Token rail rather than a parody quote. The token is a Pons v2 graduation, distinct from CLIPPY 0x85856F…1E18 (DopplerERC20V1 / @ClippyMSFT) on the same MSFT rail, and from earlier DIH tickers (Pons v1 Dih 0x0c1e…9C74, Dog In Hood 0x17bb…E4a4).

## What could go wrong

USD liquidity figures on the DIH/MSFT book count both sides, and the quote side is MSFT, not USDG. Gecko token volume_usd.h24 ($2.58M) sums all pools, not the MSFT book ($2.09M). DexScreener and on-chain socials list @dihpons / justdih.com while the site HTML and the X bio omit the CA. Other DIH tickers trade on the same chain.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 was reached through Multicall3 from 0x07d2…1841 at 2026-09-03T03:07:28Z and minted dih / DIH supply 1e9*1e18 to bonding curve 0x5426…7a17 against MSFT. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e. launchFactory() on the token returns that factory. deployer() returns Multicall3 because of that wrapper; the EOA that sent the tx is 0x07d2…1841. [verified R-4 R-5 R-6]

CurveCompleted at 2026-09-03T03:08:33Z swept 16.078639417693171516 MSFT and ~2.857e8 tokens (1e18 scaled) to the factory. createGraduatedPool at 2026-09-03T03:08:44Z initialized Uniswap v4 poolId 0xa4c5…bcc6 (currency0 DIH, currency1 MSFT, fee 0, hooks V2MemeHook 0xE5e7…e044). PoolGraduated locked positionId 1587983 with ~2.041e8 tokens and 16.078639417693171516 MSFT; V2LaunchLocker TokenSupplyLocked ~8.163e7 tokens. Gecko launchpad_details completed true at that timestamp. [verified R-8 R-9 R-12 R-13]

Secondary DIH/USDG and DIH/ETH books exist on DexScreener with far less liquidity than the MSFT book. [claim R-7]

## Control and security

token owner() reverts. Verified PonsV2LauncherToken source says deployer is attribution-only. Factory owner() is 0x263e…19Dd. V2MemeHook PoolRegistered names creator 0x479F…197C, matching getLaunchedToken creatorFeeRecipient. [verified R-2 R-5 R-6 R-12]

PonsV2LauncherToken, PonsV2LaunchFactory, PonsV2LaunchAndBuy, PonsV2LaunchDeployer, and V2LaunchLocker are verified on Blockscout. The per-launch curve 0x5426…7a17 is not verified. No audit report URL was located this pass. [verified R-1 R-2 R-3] [unknown]

## Team and provenance

No official domain or bidirectional X handle was located. DexScreener info.websites lists https://www.justdih.com/; info.socials lists x.com/dihpons. On-chain socials() match those two fields; telegram/discord/farcaster are empty. @dihpons bio is "just dih" with no CA in the posts opened this pass. justdih.com titles DIH / just dih and has no CA in the public HTML; its og:image host dihhh.fun returned DEPLOYMENT_NOT_FOUND. Flag unconfirmed-official and third-party-link. [claim R-5 R-7 R-15 R-16]

## Economics and activity

DIH/MSFT Uniswap v4 24h volume is 2090370.50735248 USD and reserve_in_usd is 64191.42 at 2026-09-03T04:30:29Z from the Gecko pool endpoint. Gecko token fdv_usd is 678524.33. Gecko token volume_usd.h24 is 2584123.59 across all pools, not the MSFT book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 69037.23, volume.h24 2102718.58, fdv/marketCap 724609. Blockscout holders_count 2530 (2484 about eight minutes earlier). Pair created 2026-09-03T03:08:44Z. Assignment lead of liq ~$67,536 / vol ~$2,056,213 is in range of the live DexScreener/Gecko MSFT book. [claim R-1 R-7]

CLIPPY/MSFT on DexScreener printed liquidity.usd 428227.37 and volume.h24 973008.26 at the same collection window, a larger MSFT book on a different CA. [claim R-21]

## Material risks

- Quote token MSFT 0xe932…2e74 is a Robinhood Stock Token rail (GET /rhj/assets hit); USD pool reserve is DIH plus MSFT, not a USDG or WETH backstop. [verified R-11 R-10]
- Pool USD reserve is DIH plus MSFT. [claim R-7 R-8]
- Ticker collision: Pons v1 Dih 0x0c1e…9C74 and Dog In Hood 0x17bb…E4a4 also use DIH. [claim R-1]
- No official handle or domain this pass; X and justdih.com are unconfirmed-official / third-party-link. [claim R-7 R-15 R-16]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/MSFT/CLIPPY and launch, CurveCompleted, and createGraduatedPool txs, RPC name/symbol/factory/stock/graduated, DexScreener DIH and CLIPPY, Gecko pool/token, /rhj/assets, justdih.com, @dihpons, @r_xley, and the dex-paid post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-11]
- Numbers: 2090370.51 is the Gecko DIH/MSFT pool 24h volume, not the 2584123.59 token all-pools figure. Reserve 64191.42 is that pool. DexScreener 2102718.58 / 69037.23 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that this is CLIPPY/MSFT or the older Pons v1 Dih. CLIPPY is DopplerERC20V1 0x85856F…1E18 with clippyrh.com / @ClippyMSFT. Pons v1 Dih is 0x0c1e…9C74. This CA is Pons v2 0x8A3b…2B63. [inference R-20 R-21]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no dih / DIH / 0x8A3b…2B63. content/dependencies/stock-tokens.yaml has MSFT 0xe932…2e74 as a rail.
- Explorer: Blockscout api/v2 search DIH, token, impl, factory, MSFT, CLIPPY, launch 0x04bd…2553, CurveCompleted 0x6764…bcd2, createGraduatedPool 0x0f31…1725, TokenLaunched / PoolGraduated / TokenSupplyLocked logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53134931.
- Aggregators: DexScreener latest/dex/tokens (DIH and CLIPPY) and search; Gecko token then pool after HTTP 200 (no 429 this pass).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 MSFT at 0xe932…2e74.
- Social: X keyword Latest DIH/MSFT and $DIH; from:dihpons; user search DIH / dihpons / ClippyMSFT; justdih.com HTML; dihhh.fun 404.
- Failed: Blockscout factory logs topic1 filter rejected; justdih.com HTML has no CA; @dihpons user-search endpoint returned empty while Latest from:dihpons returned posts; Gecko trending_pools not fetched this pass.
- Time: collection 2026-09-03T04:22Z–2026-09-03T04:31Z.
