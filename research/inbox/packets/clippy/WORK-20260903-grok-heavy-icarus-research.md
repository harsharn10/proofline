---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: clippy
name: CLIPPY
packet_tier: seed
as_of: 2026-09-03T04:26:00Z
prior_packet: null
supersedes: null
owned_slugs: [clippy]
allowed_paths:
  - research/inbox/packets/clippy/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: CLIPPY
  aliases: [Clippy, "$CLIPPY", "$Clippy"]
  symbols: [CLIPPY]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "https://clippyrh.com"
  official_handle: "@ClippyMSFT"
  repository: "NULL — no GitHub org or repository URL on DexScreener, clippyrh.com/js/data.js, Blockscout, Gecko, or X search this pass"
  possible_matches:
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "CLIPPY is a graduation token at 0x85856…1E18 created through that LongLauncher.create into a CLIPPY/MSFT Uniswap v4 pool; entity_kind token, not protocol"
        - "Official surfaces differ: clippyrh.com / @ClippyMSFT versus app.long.xyz / @longdotxyz"
    - slug: bankr
      signals: [shared-address]
      contrary_signals:
        - "Census Bankr is an agent execution surface at bankr.bot / @bankrbot"
        - "CLIPPY create tx 0x8bc1…d403 calls LongLauncher, not a Bankr surface; Gecko labels the CLIPPY/MSFT pool dex bankr-robinhood because Doppler/Airlock is shared launch infrastructure"
        - "No shared domain or handle"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA via LongLauncher, site artificialinu.com / @ArtificiallyInu"
        - "CLIPPY is $CLIPPY at 0x85856…1E18 paired to MSFT 0xe932…2e74"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "CLIPPY is a DopplerERC20V1 clone in a Uniswap v4 CLIPPY/MSFT pool with no vault of its own"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x85856…1E18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create on 2026-07-17T19:36:30Z minted Clippy / CLIPPY into Uniswap v4 pool 0xb3e1…3e25 quoted against MSFT 0xe932…2e74 (GET /rhj/assets row, Microsoft • Robinhood Token). MSFT is the pair rail, not the subject. clippyrh.com /js/data.js and @ClippyMSFT bio both embed CA 0x85856…1E18. Distinct from other robinhood CLIPPY tickers. [R-1] [R-4] [R-5] [R-7] [R-8] [R-12] [R-13] [R-19]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://clippyrh.com", authenticity: confirmed }
  - { kind: x, url: "https://x.com/ClippyMSFT", authenticity: confirmed }
  - { kind: app, url: "https://app.long.xyz/tokens/0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18", authenticity: unconfirmed }

deployments:
  - label: CLIPPY token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:21:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-1, R-5, R-18]
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
  - label: DopplerERC20V1Factory (token creator_address_hash)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-3, R-5]
  - label: LongLauncher (create target)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-18]
  - label: Airlock (token owner)
    role: other
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-18]
  - label: DopplerHookInitializer
    role: other
    address:
      value: "0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-18, R-21]
  - label: MSFT Microsoft Robinhood Token (pair quote / rail)
    role: token
    address:
      value: "0xe93237C50D904957Cf27E7B1133b510C669c2e74"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-12, R-17]

metrics:
  - { kind: volume_24h, value: 955075.56, currency: USD, as_of: 2026-09-03T04:23:47Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xb3e164e6cce432f23a0d553f37091216963010de78c5d3ca80d1d56aadab3e25 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 598073.91, currency: USD, as_of: 2026-09-03T04:23:47Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xb3e164e6cce432f23a0d553f37091216963010de78c5d3ca80d1d56aadab3e25 reserve_in_usd (CLIPPY/MSFT pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 1969098.93, currency: USD, as_of: 2026-09-03T04:23:47Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xb3e164e6cce432f23a0d553f37091216963010de78c5d3ca80d1d56aadab3e25 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: holders, value: 2260, currency: null, as_of: 2026-09-03T04:21:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:23:49Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32abf20 (53133088). Token 0x85856…1E18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name Clippy, symbol CLIPPY, decimals 18, totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl 0x3Be8…C599 code 13927 B. DopplerERC20V1Factory 0x1B37…b69a code 1912 B. MSFT 0xe932…2e74 code 283 B. LongLauncher 5826 B. Airlock 5695 B. DopplerHookInitializer 25533 B. Launcher EOA 0x29cc…5C9a and 5% Lock beneficiary 0xEDeA…eDa8 eth_getCode 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-17, R-18], result: "Blockscout api/v2 token 0x85856…1E18 name Clippy symbol CLIPPY holders_count 2260 total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true; smart-contracts on the clone returned name null (proxy-shell-only). creator_address_hash DopplerERC20V1Factory 0x1B37…b69a. create tx 0x8bc1…d403 2026-07-17T19:36:30Z block 12375409 from EOA 0x29cc…5C9a to LongLauncher 0x22e9…eeED method create. decoded create data numeraire MSFT 0xe932…2e74 tokenFactory 0x1B37…b69a name Clippy symbol CLIPPY. LaunchCreated normalizedTicker CLIPPY. PoolManager Initialize id 0xb3e1…3e25 currency0 CLIPPY currency1 MSFT hooks DopplerHookInitializer 0x4e34…a544. MSFT token name Microsoft • Robinhood Token holders_count 44238." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:23:47Z, receipt_ids: [R-7, R-8, R-9], result: "DexScreener latest/dex/tokens/0x85856…1E18: 12 robinhood pairs; top CLIPPY/MSFT uniswap v4 0xb3e1…3e25 quote 0xe932…2e74 Microsoft • Robinhood Token / MSFT liquidity.usd 431378.9 volume.h24 976823.32 fdv/marketCap 1983932 pairCreatedAt 1784316990000 (2026-07-17T19:36:30Z) info.websites [clippyrh.com] info.socials [x.com/clippymsft]. Gecko pool: volume_usd.h24 955075.56 reserve_in_usd 598073.91 fdv_usd 1969098.93 pool_created_at 2026-07-17T19:36:30Z dex bankr-robinhood. Gecko token volume_usd.h24 1436380.83 (all pools, not the MSFT book)." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:23:47Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one MSFT hit tokenSymbol MSFT tokenName Microsoft • Robinhood Token contractAddress 0xe93237C50D904957Cf27E7B1133b510C669c2e74 chainId 4663 status ASSET_STATUS_ACTIVE isin US5949181045." }
  - { id: REP-5, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:22:00Z, receipt_ids: [R-6, R-18], result: "Create tx logs: OwnershipTransferred newOwner Airlock 0xeb7C…0862; mint 1e27 to Airlock; PoolManager Initialize pool 0xb3e1…3e25; DopplerHookInitializer Lock beneficiaries launcher EOA 0x29cc…5C9a 95e16 (95%) and 0xEDeA…eDa8 5e16 (5%); Airlock Create asset CLIPPY numeraire MSFT; LongLauncher LaunchCreated normalizedTicker CLIPPY launcher 0x29cc…5C9a deployedAt 1784316990." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against MSFT. Tx 0x8bc1…d403 from 0x29cc…5C9a minted Clippy / CLIPPY as the asset and seeded pool 0xb3e1…3e25. Token owner() is Airlock. Gecko labels the book Bankr because Doppler/Airlock is shared; the create target is LongLauncher.", class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-4, R-5, R-6, R-8, R-18], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Clippy", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "CLIPPY", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-5, R-18], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-4, R-18], reproduction_ids: [REP-2, REP-5], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:23:47Z, receipt_ids: [R-1, R-4, R-5, R-8], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T04:23:47Z, receipt_ids: [R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@ClippyMSFT — DexScreener info.socials lists x.com/clippymsft; bio embeds CA 0x85856…1E18; clippyrh.com/js/data.js links.x is the same handle", class: claim, observed_at: 2026-09-03T04:24:17Z, receipt_ids: [R-7, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote MSFT 0xe932…2e74 is Microsoft • Robinhood Token in GET /rhj/assets (194 assets, 1 MSFT hit, same address). MSFT is a rail, not this subject. Distinct from census LONG / Bankr / Artificial Inu / L4VA.", class: verified, observed_at: 2026-09-03T04:23:47Z, receipt_ids: [R-12, R-17], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "CLIPPY/MSFT Uniswap v4 24h volume 955075.56 USD and reserve_in_usd 598073.91 at 2026-09-03T04:23:47Z (Gecko pool slice, not Gecko token all-pools 1436380.83)", class: verified, observed_at: 2026-09-03T04:23:47Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 431378.9 volume.h24 976823.32 fdv/marketCap 1983932 at 2026-09-03T04:23:47Z", class: verified, observed_at: 2026-09-03T04:23:47Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 2260, class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock; OwnershipTransferred to Airlock on create. factory() reverts.", class: verified, observed_at: 2026-09-03T04:23:49Z, receipt_ids: [R-5, R-6, R-18], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: launcher EOA 0x29ccC8F5DCBE0823FA48CcfF0aBA3f3766215C9a 95% and 0xEDeAa06E2eB42A5c19ce27c6cfFb36fd4fE1eDa8 5%. Both have no code.", class: verified, observed_at: 2026-09-03T04:23:49Z, receipt_ids: [R-5, R-18], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is MSFT 0xe93237C50D904957Cf27E7B1133b510C669c2e74; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0xb3e1…3e25", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a; create target is LongLauncher 0x22e9…eeED, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:23:47Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, clippyrh.com, or X search this pass", class: unknown, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "official: @ClippyMSFT bio embeds CA 0x85856…1E18; clippyrh.com/js/data.js ca and links.x match; DexScreener lists both", class: claim, observed_at: 2026-09-03T04:24:17Z, receipt_ids: [R-7, R-13, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko fdv_usd 1969098.93; DexScreener fdv/marketCap 1983932. Gecko market_cap_usd null. Gecko token fdv_usd 1934870.82.", class: verified, observed_at: 2026-09-03T04:23:47Z, receipt_ids: [R-7, R-8, R-9], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0xe93237C50D904957Cf27E7B1133b510C669c2e74", class: verified, observed_at: 2026-09-03T04:23:47Z, receipt_ids: [R-12, R-17], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://clippyrh.com — DexScreener info.websites; /js/data.js ca 0x85856…1E18 chainId 4663 pair 0xb3e1…3e25 links.x https://x.com/ClippyMSFT", class: claim, observed_at: 2026-09-03T04:24:17Z, receipt_ids: [R-7, R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "clippy | CLIPPY | @ClippyMSFT | clippyrh.com — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "Ticker collision: DexScreener search also returns other robinhood CLIPPY symbols (0xEC72…5e16 CLIPPY/WETH liq ~$95.6k; 0x61C6…B8dd CLIPPY/ETH; 0x7fd8…b8dd and 0x9B54…01Aa CLIPPY/MSFT low-liq). Solana CLIPPY CAs are wrong-chain. Subject is 0x85856…1E18 only.", class: claim, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "copypasta-pattern: X posts 2095293141662179803 / 2095192171431223706 / 2095178163437412717 embed CA 0x85856…1E18 with netlify.app/claim?contract= URLs (crypto-8xe, crypto-pek, crypto-kms)", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-20], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko CLIPPY/MSFT 24h volume $955k, liquidity $598k"
    summary: "Gecko pool 0xb3e1…3e25 volume_usd.h24 955075.56 reserve_in_usd 598073.91 fdv_usd 1969098.93. DexScreener same pair liquidity.usd 431378.9 volume.h24 976823.32."
    occurred_at: 2026-09-03T04:23:47Z
    observed_at: 2026-09-03T04:23:47Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-8, R-7]
  - id: EVT-2
    type: ct
    title: "@ClippyMSFT posted a short-film contest; bio embeds the CA"
    summary: "Account listed on DexScreener and clippyrh.com. Bio: $Clippy CA 0x85856…1E18. Post 2095225767487561796 announced contest winners that night and ended LONG."
    occurred_at: 2026-09-02T19:02:05Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: verified
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-3
    type: ct
    title: "@BlockCap listed Clippy as the top MSFT memecoin"
    summary: "Post 2095332754359517631: $AI NVDA, $iCoin AAPL, $Dino GOOGL, $clippy 5m top msft. Reply 2095346956709089667 repeated Clippy - msft."
    occurred_at: 2026-09-03T02:07:12Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-14]
  - id: EVT-4
    type: onchain
    title: "LongLauncher create minted Clippy / CLIPPY against MSFT"
    summary: "Tx 0x8bc1…d403 from 0x29cc…5C9a at 2026-07-17T19:36:30Z; LaunchCreated normalizedTicker CLIPPY; PoolManager Initialize poolId 0xb3e1…3e25."
    occurred_at: 2026-07-17T19:36:30Z
    observed_at: 2026-09-03T04:22:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-18]
  - id: EVT-5
    type: ct
    title: "@ClippyMSFT posted CLIPPY as 83.9% of onchain MSFT volume"
    summary: "Post 2094865536542728214: total onchain MSFT volume $10.68M, $Clippy $8.95M ~83.9%; last 24h tokenized MSFT $2.38M with $2.10M through Clippy; 473.28 MSFT shares in the pool."
    occurred_at: 2026-09-01T19:10:39Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [activity.status, relationship]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-16]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x85856…1E18 Clippy / CLIPPY", url: "https://robinhoodchain.blockscout.com/address/0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18 name Clippy is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol CLIPPY decimals 18 total_supply 1000000000000000000000000000 holders_count 2260 type ERC-20. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a creation_transaction_hash 0x8bc138bff03b63e037e0d5aa09cc13c8b35cced766c9855e4261e6e27de2d403." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true. Smart-contract compiler v0.8.26+commit.8a97fa7a is_partially_verified true file_path src/tokens/DopplerERC20V1.sol verified_at 2026-07-01T19:42:07Z. creator_address_hash 0x1B37D3a72082029c44B35B604Ea473617580b69a." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true creator_address_hash 0x4482f353A46a4d4088F9550EB2C9cc92D0d5F768 creation_transaction_hash 0xb53eb8261ef8e76f3bb89c08dd5ca742408ec9911ed5cb0a32ac3a92dc59f7c9. Compiler v0.8.26 file_path src/tokens/DopplerERC20V1Factory.sol is_partially_verified true verified_at 2026-07-01T19:42:15Z." }
  - { id: R-4, publisher: Blockscout, title: "create tx 0x8bc138bf…d403", url: "https://robinhoodchain.blockscout.com/tx/0x8bc138bff03b63e037e0d5aa09cc13c8b35cced766c9855e4261e6e27de2d403", published_at: 2026-07-17T19:36:30Z, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-5, CLM-6, CLM-16, EVT-4], excerpt: "timestamp 2026-07-17T19:36:30.000000Z status ok result success block_number 12375409 from 0x29ccC8F5DCBE0823FA48CcfF0aBA3f3766215C9a (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. decoded create data tokenFactory 0x1B37…b69a numeraire 0xe932…2e74 name Clippy symbol CLIPPY." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on CLIPPY", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:23:49Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_blockNumber 0x32abf20 (53133088). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name Clippy symbol CLIPPY decimals 18 totalSupply 1e27. owner() 0xeb7c034704ef8dcd2d32324c1545f62fb4ad0862. factory() reverts. Factory 0x1B37…b69a code 1912 B. Impl code 13927 B. MSFT code 283 B. Launcher EOA and 0xEDeA…eDa8 code 0x." }
  - { id: R-6, publisher: Blockscout, title: "Airlock 0xeb7C…0862", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true creator_address_hash 0x78C84FE5D1837244DC72D5B9DE7db930ab0C02b9. Smart-contract compiler v0.8.26 is_partially_verified true file_path src/Airlock.sol verified_at 2026-07-01T19:41:17Z." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens CLIPPY", url: "https://api.dexscreener.com/latest/dex/tokens/0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18", published_at: null, accessed_at: 2026-09-03T04:23:47Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "12 robinhood pairs. Top pairAddress 0xb3e164e6cce432f23a0d553f37091216963010de78c5d3ca80d1d56aadab3e25 labels v4 base Clippy / CLIPPY quote Microsoft • Robinhood Token / MSFT 0xe93237C50D…2e74 liquidity.usd 431378.9 volume.h24 976823.32 fdv 1983932 marketCap 1983932 pairCreatedAt 1784316990000. info.websites [{url https://clippyrh.com/}] info.socials [{url https://x.com/clippymsft, type twitter}]." }
  - { id: R-8, publisher: GeckoTerminal, title: "CLIPPY/MSFT pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xb3e164e6cce432f23a0d553f37091216963010de78c5d3ca80d1d56aadab3e25", published_at: null, accessed_at: 2026-09-03T04:23:47Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name CLIPPY / MSFT pool_created_at 2026-07-17T19:36:30Z fdv_usd 1969098.927 market_cap_usd null volume_usd.h24 955075.56115045 reserve_in_usd 598073.9103 transactions.h24 buys 690 sells 1590. dex bankr-robinhood quote robinhood_0xe93237c50d904957cf27e7b1133b510c669c2e74." }
  - { id: R-9, publisher: GeckoTerminal, title: "Clippy token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18", published_at: null, accessed_at: 2026-09-03T04:23:47Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-20], excerpt: "name Clippy symbol CLIPPY decimals 18 total_supply 1e27 price_usd 0.001934870817 fdv_usd 1934870.81674376 market_cap_usd null volume_usd.h24 1436380.82942107 total_reserve_in_usd 382434.83. coingecko_coin_id null. No website field. Top pool 0xb3e1…3e25." }
  - { id: R-10, publisher: DexScreener, title: "CLIPPY/MSFT pair page", url: "https://dexscreener.com/robinhood/0xb3e164e6cce432f23a0d553f37091216963010de78c5d3ca80d1d56aadab3e25", published_at: null, accessed_at: 2026-09-03T04:23:47Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "CLIPPY/MSFT on Robinhood / Uniswap v4. Pair 0xb3e…3e25. Token 0x858…1E18. Quote MSFT 0xe93…2e74." }
  - { id: R-11, publisher: GeckoTerminal, title: "CLIPPY/MSFT pool page", url: "https://www.geckoterminal.com/robinhood/pools/0xb3e164e6cce432f23a0d553f37091216963010de78c5d3ca80d1d56aadab3e25", published_at: null, accessed_at: 2026-09-03T04:23:47Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "CLIPPY/MSFT Clippy Price on Bankr (Robinhood). Pool 0xb3e…3e25 CLIPPY 0x858…1e18 MSFT 0xe93…2e74." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:23:47Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. One MSFT hit: tokenSymbol MSFT tokenName Microsoft • Robinhood Token deployments contractAddress 0xe93237C50D904957Cf27E7B1133b510C669c2e74 chainId 4663 status ASSET_STATUS_ACTIVE isin US5949181045." }
  - { id: R-13, publisher: "@ClippyMSFT", title: "SHORT FILM VIDEO CONTEST WINNERS ANNOUNCED TONIGHT", url: "https://x.com/ClippyMSFT/status/2095225767487561796", published_at: 2026-09-02T19:02:05Z, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, CLM-19, EVT-2], excerpt: "Account Clippy @ClippyMSFT bio: change your profile picture to Clippy.. I’m serious $Clippy CA: 0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18. Followers 1016. Post: SHORT FILM VIDEO CONTEST WINNERS ANNOUNCED TONIGHT! … See you tonight! LONG." }
  - { id: R-14, publisher: "@BlockCap", title: "Meme stock meta $clippy top msft", url: "https://x.com/BlockCap/status/2095332754359517631", published_at: 2026-09-03T02:07:12Z, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-3], excerpt: "Meme stock meta $AI 260m- top nvda stock memecoin $iCoin 4m - top appl $Dino 1m - top google $clippy 5m - top msft. Follow-up 2095346956709089667: Each top stock will have its own memecoin runner: … Clippy - msft." }
  - { id: R-15, publisher: DexScreener, title: "search q=CLIPPY", url: "https://api.dexscreener.com/latest/dex/search?q=CLIPPY", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25], excerpt: "Subject pair robinhood CLIPPY/MSFT 0xb3e1…3e25 token 0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18 liq 431378.9 vol 977266.26. Other robinhood CLIPPY CAs: 0xEC72cAC6…5e16 CLIPPY/WETH liq 95626.51; 0x61C64042…B8dd CLIPPY/ETH; 0x7fd81008…b8dd and 0x9B54C56E…01Aa CLIPPY/MSFT low-liq. Solana CLIPPY CAs present (wrong-chain)." }
  - { id: R-16, publisher: "@ClippyMSFT", title: "Every number grew again", url: "https://x.com/ClippyMSFT/status/2094865536542728214", published_at: 2026-09-01T19:10:39Z, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-5], excerpt: "Total onchain $MSFT volume across every token tracking the stock: $10.68M $Clippy: $8.95M ~ 83.9% of it. In the last 24 hours, tokenized MSFT did $2.38M in volume $2.10M ran through Clippy ~ 88.6%. 473.28 shares of $MSFT. Across @longdotxyz liquidity pools, there are 694.84 $MSFT shares. Clippy holds 473.28 of them ~ 68.1%." }
  - { id: R-17, publisher: Blockscout, title: "Token 0xe932…2e74 Microsoft • Robinhood Token / MSFT", url: "https://robinhoodchain.blockscout.com/address/0xe93237C50D904957Cf27E7B1133b510C669c2e74", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0xe93237C50D904957Cf27E7B1133b510C669c2e74 name BeaconProxy is_contract true is_verified true. token name Microsoft • Robinhood Token symbol MSFT decimals 18 total_supply 3647560000000000000000 holders_count 44238 type ERC-20 exchange_rate 497.21 icon_url cdn.robinhood.com." }
  - { id: R-18, publisher: Blockscout, title: "create tx logs LaunchCreated / Initialize / Lock", url: "https://robinhoodchain.blockscout.com/tx/0x8bc138bff03b63e037e0d5aa09cc13c8b35cced766c9855e4261e6e27de2d403", published_at: 2026-07-17T19:36:30Z, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-13, CLM-14, CLM-15, EVT-4], excerpt: "OwnershipTransferred newOwner 0xeb7C…0862. PoolManager Initialize id 0xb3e164e6cce432f23a0d553f37091216963010de78c5d3ca80d1d56aadab3e25 currency0 0x85856…1E18 currency1 0xe932…2e74 hooks 0x4e34…a544. Lock beneficiaries 0x29cc…5C9a 950000000000000000 and 0xEDeA…eDa8 50000000000000000. LaunchCreated normalizedTicker CLIPPY launcher 0x29cc…5C9a deployedAt 1784316990." }
  - { id: R-19, publisher: clippyrh.com, title: "js/data.js canonical CA and socials", url: "https://clippyrh.com/js/data.js", published_at: null, accessed_at: 2026-09-03T04:24:17Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-19, CLM-23], excerpt: "window.CLIPPY name Clippy symbol CLIPPY ca 0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18 chainId 4663 createdISO 2026-07-17T19:36:30Z creator 0x1B37…b69a creationTx 0x8bc1…d403 pair 0xb3e1…3e25. msft ca 0xe932…2e74. links.x https://x.com/ClippyMSFT trade https://app.long.xyz/tokens/0x85856…1E18. HTML title Clippy XP - $CLIPPY on Robinhood Chain. HTTP 200 Vercel." }
  - { id: R-20, publisher: X, title: "netlify claim URLs embedding CLIPPY CA", url: "https://x.com/jonikha63996876/status/2095293141662179803", published_at: 2026-09-02T23:29:48Z, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-26], excerpt: "$CLIPPY claim page working rn CA: 0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18 https://crypto-8xe.netlify.app/claim?contract=0x85856F025BF13b8Fd2aaE2F6DA458318744F1E18&cfg=evmdrop. Sibling posts 2095192171431223706 crypto-pek.netlify.app and 2095178163437412717 crypto-kms.netlify.app same CA and cfg=evmdrop. Flag copypasta-pattern." }
  - { id: R-21, publisher: Blockscout, title: "DopplerHookInitializer 0x4e34…a544", url: "https://robinhoodchain.blockscout.com/address/0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-14], excerpt: "hash 0x4e3468951D49f2EEa976eD0D6e75fFCb44a9a544 name DopplerHookInitializer is_contract true is_verified true. Smart-contract compiler v0.8.26 is_partially_verified true file_path src/initializers/DopplerHookInitializer.sol verified_at 2026-07-01T20:06:20Z." }

gaps:
  - { priority: P1, question: "Is 0xEDeA…eDa8 the LONG protocol fee split (OOF Lock used 0x21E2…7A66 at 5%), and does verified DopplerHookInitializer source leave other privileged paths?", checked: "Lock log 95%/5% split to launcher EOA and 0xEDeA…eDa8; both eth_getCode 0x; token owner() Airlock; factory() reverts, 2026-09-03", next: "read DopplerHookInitializer and LongLauncher fee-split in verified source on Blockscout; compare 5% beneficiary across LONG launches" }
  - { priority: P1, question: "Which other robinhood CLIPPY tickers stay live besides 0x85856…1E18, and does any later packet try to merge them?", checked: "DexScreener search listed 0xEC72…5e16 CLIPPY/WETH ~$95.6k liq, 0x61C6…B8dd CLIPPY/ETH, 0x7fd8…b8dd and 0x9B54…01Aa CLIPPY/MSFT low-liq, 2026-09-03", next: "keep CAs separate; re-run search if a second CLIPPY/MSFT book crosses the liquidity bar" }
  - { priority: P2, question: "Why does Gecko CLIPPY/MSFT reserve_in_usd 598073.91 diverge from DexScreener liquidity.usd 431378.9 on the same pool?", checked: "Both endpoints opened 2026-09-03T04:23:47Z; Gecko token total_reserve_in_usd 382434.83 is a third figure", next: "re-read both aggregators on the same pool id and note which side of the MSFT book each counts" }
  - { priority: P2, question: "Do the netlify.app/claim URLs that embed CA 0x85856…1E18 persist, and does @ClippyMSFT or clippyrh.com ever link them?", checked: "three X posts with crypto-*-netlify.app/claim?contract= and cfg=evmdrop; site data.js has no netlify URL, 2026-09-03", next: "flag copypasta-pattern only; do not treat as official" }
---

# CLIPPY — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against MSFT. LongLauncher deploys Clippy (CLIPPY) in one create call and seeds the CLIPPY/MSFT book. Traders buy and sell CLIPPY on Uniswap v4. Official site clippyrh.com and handle @ClippyMSFT both embed CA 0x85856…1E18 this pass.

Themes: memecoin, stock-paired:MSFT, rwa

## Why it matters

The CLIPPY/MSFT Uniswap v4 book printed about $955k of 24h volume on Gecko at collection (DexScreener $977k), with the quote token the Microsoft Robinhood Token. @BlockCap posted Clippy as the top MSFT memecoin. GET /rhj/assets has one MSFT row at 0xe932…2e74, so the pair leg is a Stock Token rail rather than this subject.

## What could go wrong

USD liquidity figures on the CLIPPY/MSFT book count both sides, and the quote side is MSFT, not USDG. Gecko pool reserve ($598k) and DexScreener liquidity ($431k) already diverge on the same pool. Several other robinhood CLIPPY tickers exist at different CAs. Netlify claim URLs that embed this CA are a copypasta-pattern, not official.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0x29cc…5C9a at 2026-07-17T19:36:30Z minted Clippy / CLIPPY supply 1e9*1e18 into Uniswap v4 poolId 0xb3e1…3e25. creator_address_hash is DopplerERC20V1Factory 0x1B37…b69a. owner() is Airlock. factory() reverts. [verified R-4 R-5 R-18]

Gecko labels the book bankr-robinhood because Doppler/Airlock is shared; the create target is LongLauncher. stock rail is MSFT 0xe932…2e74. PoolManager is 0x8366…0951. Secondary CLIPPY/WETH and CLIPPY/USDG books exist on DexScreener with far less liquidity than the MSFT book. [verified R-6 R-7 R-8]

## Control and security

token owner() is Airlock 0xeb7C…0862. Deployer of the token clone is the factory; the create caller 0x29cc…5C9a has no code and is the 95% Lock beneficiary. 5% Lock beneficiary 0xEDeA…eDa8 also has no code (not the 0x21E2… address seen on OOF). [verified R-5 R-18]

DopplerERC20V1, DopplerERC20V1Factory, Airlock, and DopplerHookInitializer are partially verified on Blockscout (compiler v0.8.26). LongLauncher is verified (src/LongLauncher.sol). The CLIPPY clone is proxy-shell-only. No audit report URL was located this pass. [verified R-2 R-3 R-6 R-21] [unknown]

## Team and provenance

Official domain clippyrh.com: DexScreener info.websites, HTML title Clippy XP - $CLIPPY on Robinhood Chain, /js/data.js ca 0x85856…1E18 chainId 4663 pair 0xb3e1…3e25 links.x https://x.com/ClippyMSFT. Official handle @ClippyMSFT: DexScreener info.socials and bio $Clippy CA 0x85856…1E18. No GitHub org this pass. [verified R-7 R-13 R-19]

app.long.xyz/tokens/0x85856…1E18 is listed as the trade link on the site; that is the LONG pad page, not a CLIPPY-owned app. Flag unconfirmed for that URL. [claim R-19]

## Economics and activity

CLIPPY/MSFT Uniswap v4 24h volume is 955075.56 USD and reserve_in_usd is 598073.91 at 2026-09-03T04:23:47Z from the Gecko pool endpoint. fdv_usd is 1969098.93. Gecko token volume_usd.h24 is 1436380.83 across all pools, not the MSFT book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 431378.9, volume.h24 976823.32, fdv/marketCap 1983932. Blockscout holders_count 2260. Pair created 2026-07-17T19:36:30Z. Secondary CLIPPY/WETH v3 0xec6A…8969 liquidity.usd 25594.91 volume.h24 376940.78. [claim R-1 R-7]

@ClippyMSFT posted on 1 Sep that Clippy was 83.9% of onchain MSFT volume and held 473.28 MSFT shares. Those figures were not reproduced on Gecko or DexScreener this pass. [claim R-16]

## Material risks

- Quote token MSFT 0xe932…2e74 is the Microsoft Robinhood Token rail in GET /rhj/assets; it is not this subject. [verified R-12 R-17]
- Pool USD reserve is CLIPPY plus MSFT, not a USDG or WETH backstop. Gecko reserve and DexScreener liquidity already disagree. [claim R-7 R-8]
- Ticker collision with other robinhood CLIPPY CAs and Solana CLIPPY. [claim R-15]
- Netlify claim URLs embedding this CA are copypasta-pattern. [claim R-20]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/MSFT/Airlock/hook and the create tx plus logs, RPC name/symbol/owner/eth_getCode, DexScreener token and search, Gecko pool/token (HTTP 200 first try), /rhj/assets, clippyrh.com data.js, @ClippyMSFT, @BlockCap, and the netlify claim posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8 R-12 R-19]
- Numbers: 955075.56 is the Gecko CLIPPY/MSFT pool 24h volume, not the 1436380.83 token all-pools figure. Reserve 598073.91 is that pool. DexScreener 976823.32 / 431378.9 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that CLIPPY is an official Microsoft or Robinhood product, or that MSFT 0xe932…2e74 is this subject. /rhj/assets names Microsoft • Robinhood Token at that address as a Stock Token; LongLauncher minted CLIPPY as a separate asset; clippyrh.com and @ClippyMSFT are community surfaces for the graduation token. [inference R-12 R-17 R-19]

## Operations log

- Base: assignment base_sha 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no clippy / CLIPPY / 0x85856…1E18.
- Explorer: Blockscout api/v2 token, impl, factory, MSFT, Airlock, DopplerHookInitializer, create 0x8bc1…d403, LaunchCreated / Initialize / Lock logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53133088.
- Aggregators: DexScreener latest/dex/tokens and search; Gecko token and pool (first GET 200; not looped).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 MSFT at 0xe932…2e74.
- Social: X keyword CLIPPY/MSFT/CA Latest; user search ClippyMSFT; from:ClippyMSFT.
- Site: clippyrh.com HTML and /js/data.js CA + @ClippyMSFT.
- Failed: token smart-contracts endpoint name null (proxy-shell-only; factory() used via creator_address_hash instead); factory() on the token reverts.
- Time: collection 2026-09-03T04:21Z–2026-09-03T04:26Z.
