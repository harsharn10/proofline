---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: beaver
name: BEAVER
packet_tier: seed
as_of: 2026-09-03T03:56:00Z
prior_packet: null
supersedes: null
owned_slugs: [beaver]
allowed_paths:
  - research/inbox/packets/beaver/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: BEAVER
  aliases: [BEAVERCOIN]
  symbols: [BEAVER]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites []; Gecko token info websites []; app.long.xyz token page HTTP 403 this pass; collision DexScreener website cyberleek.lol does not contain this CA"
  official_handle: "NULL — DexScreener info.socials is https://x.com/elonmusk/status/2095218089189392569 not a project handle; Gecko twitter_handle null; @beaver_hood bio has no contract; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, or X search this pass"
  possible_matches:
    - slug: spacehood
      signals: [other]
      contrary_signals:
        - "Packed SPACEHOOD is 0xFe7E19…1E18 paired to SPCX 0x4a0E…5eEa via LongLauncher, unconfirmed-official @spacehood420"
        - "BEAVER canonical row is BEAVERCOIN 0x6e40…1e18, a later LongLauncher.create quoting the same SPCX rail"
        - "No shared handle, domain, or reproduced address"
    - slug: long
      signals: [shared-deployer]
      contrary_signals:
        - "Census LONG is the stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "BEAVER is the ERC-20 at 0x6e40…1e18 created through that launcher; entity_kind token, not protocol"
        - "No shared handle; DexScreener socials is an Elon status URL, not @longdotxyz"
    - slug: artificial-inu
      signals: [shared-deployer]
      contrary_signals:
        - "Census Artificial Inu is $AI at 0x2E8c…1e18 paired to NVDA, site artificialinu.com / @ArtificiallyInu"
        - "BEAVER is 0x6e40…1e18 paired to SPCX 0x4a0E…5eEa; different CA, quote, name and handle"
        - "No shared domain or reproduced address"
    - slug: pons
      signals: [ticker-only]
      contrary_signals:
        - "Census Pons is ponsfamily.com / @ponsdotfamily"
        - "Canonical BEAVER is LongLauncher DopplerERC20V1 0x6e40…1e18, not PonsV2LaunchFactory"
        - "Pons v2 Beaver 0x6496…af76 is a same-ticker SPCX book recorded as ca-collision, not this row"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory at l4va.org / @L4VAprotocol"
        - "BEAVER is a LongLauncher DopplerERC20V1 clone, not a vault factory"
        - "No shared domain, handle or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: [launch/graduation-token]
  mechanism_tags: [stock-paired, rwa, amm, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x6e40…1e18 is an EIP-1167 DopplerERC20V1 clone with non-empty code on 4663; LongLauncher.create on 2026-09-02T17:59:23Z minted BEAVERCOIN into Uniswap v4 pool 0x1d76…3598 quoted against SPCX 0x4a0E…5eEa (GET /rhj/assets row). Distinct from packed SPACEHOOD/SPCX and from Pons v2 Beaver 0x6496…af76. No bidirectional project domain or handle this pass. [R-1] [R-4] [R-5] [R-7] [R-10] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links: []

deployments:
  - label: BEAVERCOIN token (EIP-1167 DopplerERC20V1 clone)
    role: token
    address:
      value: "0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
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
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5]
  - label: DopplerERC20V1Factory (create token factory field)
    role: factory
    address:
      value: "0x1B37D3a72082029c44B35B604Ea473617580b69a"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-4, R-5]
  - label: LongLauncher (creation tx to)
    role: factory
    address:
      value: "0x22e99278308B393ea1260859B181AD7E78f5eeED"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:52:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-6]
  - label: Airlock (token owner())
    role: admin
    address:
      value: "0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6]
  - label: SPCX quote (create numeraire / pair quote)
    role: token
    address:
      value: "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-10, R-21]
  - label: "BEAVER ticker collision (Pons v2 Beaver, not this row)"
    role: token
    address:
      value: "0x6496D819C537673d4b3Efd981B99F7e4615Caf76"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:48:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-14, R-15, R-16]
  - label: PonsV2LaunchFactory (collision token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:52:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-15, R-19, R-27]

metrics:
  - { kind: volume_24h, value: 1526719.52, currency: USD, as_of: 2026-09-03T03:56:00Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18 pair 0x1d767e12…3598 BEAVERCOIN/SPCX Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 112503.87, currency: USD, as_of: 2026-09-03T03:56:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18 pair 0x1d767e12…3598 BEAVERCOIN/SPCX liquidity.usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 202607, currency: USD, as_of: 2026-09-03T03:56:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18 pair 0x1d767e12…3598 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 773, currency: null, as_of: 2026-09-03T03:56:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18 holders_count", class: claim, receipt_ids: [R-1] }
  - { kind: volume_24h, value: 27180.7273430043, currency: USD, as_of: 2026-09-03T03:53:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18 volume_usd.h24 (Gecko-indexed pools only; the SPCX book 404s)", class: claim, receipt_ids: [R-8] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:48:00Z, receipt_ids: [R-5], result: "eth_chainId 0x1237 (4663). eth_blockNumber 0x32a6bd5 (53111765) then 0x32a8025 (53116970). Token 0x6e40…1e18 eth_getCode 44 bytes EIP-1167 prefix 3d3d3d3d363d3d37363d73 implementation 0x3be8b97f…c599. name BEAVERCOIN, symbol BEAVER, decimals 18, totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl 0x3Be8…C599 code 13927 B. DopplerERC20V1Factory 1912 B. LongLauncher 5826 B. Airlock 5695 B. SPCX 283 B. Launcher EOA 0xE59f…cBd8 eth_getCode 0x." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-21], result: "Blockscout api/v2 token 0x6e40…1e18 name BEAVERCOIN symbol BEAVER holders_count 773 (777 earlier this pass) total_supply 1e27 proxy_type eip1167 implementation DopplerERC20V1 0x3Be8…C599 is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol. creator_address_hash null. create tx 0x1a63…e014 2026-09-02T17:59:23Z block 52769723 from EOA 0xE59f…cBd8 to LongLauncher 0x22e9…eeED method create status ok; decoded numeraire SPCX 0x4a0E…5eEa token factory 0x1B37…b69a name/symbol BEAVERCOIN/BEAVER (hex 424541564552434f494e / 424541564552) supply 1e27. PoolManager Initialize id 0x1d76…3598 currency0 SPCX currency1 BEAVERCOIN hooks DopplerHookInitializer 0x4e34…a544. Lock beneficiaries 0x21E2…7A66 5e16 (5%) and launcher 0xE59f…cBd8 95e16 (95%). LaunchCreated deployedAt 1788371963. SPCX BeaconProxy token name Space Exploration Technologies Corp • Robinhood Token holders_count 71061." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T03:56:00Z, receipt_ids: [R-7, R-8, R-9, R-29], result: "DexScreener latest/dex/tokens/0x6e40…1e18: 13 robinhood uniswap pairs; top BEAVERCOIN/SPCX v4 0x1d76…3598 quote 0x4a0E…5eEa SPCX liquidity.usd 112503.87 volume.h24 1526719.52 fdv/marketCap 202607 pairCreatedAt 1788371963000 (2026-09-02T17:59:23Z) info.websites [] info.socials [x.com/elonmusk/status/2095218089189392569]. Gecko GET pool 0x1d76…3598 HTTP 404. Gecko token volume_usd.h24 27180.7273430043 fdv_usd 199831.09 total_reserve_in_usd 673.03; top_pools are USDG/ETH ids, not the SPCX book. Gecko info websites [] twitter_handle null holders.count 27 last_updated 2026-09-02T18:42:44Z." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T03:53:00Z, receipt_ids: [R-10], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one SPCX hit tokenSymbol SPCX tokenName Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token contractAddress 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: REP-5, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:52:00Z, receipt_ids: [R-14, R-15, R-19, R-20], result: "Collision token 0x6496…af76 eth_getCode 3248 B prefix 60806040 (not EIP-1167). name Beaver symbol BEAVER decimals 18 totalSupply 1e27. owner() and factory() revert. launchFactory selector 0x536dac9b returns PonsV2LaunchFactory 0x7eD5…C7e. getTokenInfo tokenDeployer 0x4c27…052d logo ipfs.launchblitz.ai twitter https://twitter.com/elonmusk/status/2095218089189392569 website https://ponsfamily.com/launchpad/0xb6e47fab…f70c. Deployer eth_getCode 23 B prefix 0xef0100. launchAndBuy tx 0xd65c…4e1a 2026-09-02T18:32:24Z; PoolGraduated tx 0xb581…b858 2026-09-02T18:32:37Z pool 0x82fc…a3ec positionId 1551521. V2LaunchLocker isLocked true lockedPositions 1551521 lockedTokenSupply ~8.163e25." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "LongLauncher.create clones a 1e9-supply DopplerERC20V1 (EIP-1167) into a Uniswap v4 pool quoted against SPCX 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa (Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token). Tx 0x1a63…e014 from 0xE59f…cBd8 minted BEAVERCOIN as the asset and seeded pool 0x1d76…3598. Token owner() is Airlock.", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-4, R-5, R-6, R-7], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "BEAVERCOIN", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "BEAVER", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-5, R-4], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x22e99278308B393ea1260859B181AD7E78f5eeED", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-4, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-7, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials is an Elon status URL; @beaver_hood bio has no contract; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-7, R-9, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote SPCX 0x4a0E…5eEa is Space Exploration Technologies Corp • Robinhood Token in GET /rhj/assets (194 assets, 1 SPCX hit, same address). SPCX is a rail, not this subject. Distinct from packed SPACEHOOD 0xFe7E19…1E18 on the same quote. Flag ca-collision: Pons v2 Beaver 0x6496…af76 / pair 0x82fc…a3ec and Uniswap v3 Beavercoin 0xAfA1…18B0 / WETH are different contracts.", class: verified, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-10, R-14, R-16, R-21, R-25], reproduction_ids: [REP-2, REP-4, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "BEAVERCOIN/SPCX Uniswap v4 24h volume 1526719.52 USD and liquidity.usd 112503.87 at 2026-09-03T03:56:00Z (DexScreener pair 0x1d76…3598)", class: verified, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair fdv/marketCap 202607 at 2026-09-03T03:56:00Z; 13 robinhood uniswap pairs on token-pairs/v1", class: verified, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 773, class: verified, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 Airlock; OwnershipTransferred to Airlock on create. factory() reverts. Launcher EOA 0xE59f…cBd8 has empty code.", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "DopplerHookInitializer Lock beneficiaries: 0x21E2ce70511e4FE542a97708e89520471DAa7A66 5% and launcher EOA 0xE59fe5264F891B7142F107b34F52DB43365dcBd8 95%", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-4], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SPCX 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa; venue is Uniswap v4 PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 pool 0x1d76…3598", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-4, R-7], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash was empty; create target is LongLauncher 0x22e9…eeED with token factory DopplerERC20V1Factory 0x1B37…b69a, not Pons, PAIR, or hood.fun", class: verified, observed_at: 2026-09-03T03:52:00Z, receipt_ids: [R-1, R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, or X search this pass", class: unknown, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: DexScreener lists @elonmusk status 2095218089189392569; @beaver_hood posted $BEAVER is out with no CA in the bio", class: claim, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-7, R-12, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token volume_usd.h24 27180.7273430043 and total_reserve_in_usd 673.03; GET Gecko pool 0x1d76…3598 HTTP 404 so those figures are not the SPCX book", class: verified, observed_at: 2026-09-03T03:53:00Z, receipt_ids: [R-8, R-29], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa", class: verified, observed_at: 2026-09-03T03:53:00Z, receipt_ids: [R-10, R-21], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", class: verified, observed_at: 2026-09-03T03:48:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites []; Gecko token info websites []; app.long.xyz token page HTTP 403 this pass", class: claim, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-7, R-9, R-30], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "beaver | BEAVER | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: other, value: "ca-collision: Pons v2 Beaver 0x6496D819C537673d4b3Efd981B99F7e4615Caf76 (3248 B, launchFactory 0x7eD5…C7e, Uniswap v4 SPCX pool 0x82fc…a3ec, DexScreener liq 18630.80 vol.h24 2082123.51) and Beavercoin 0xAfA11694693aEE2f54E08Ae87e5D31307E6918B0 (1764 B, Uniswap v3 WETH). Canonical CA is 0x6e40…1e18.", class: verified, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-14, R-15, R-16, R-17, R-25], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "third-party-link: collision DexScreener website https://cyberleek.lol/ redirects Apple/Android UA toward ponsfamily and does not contain 0x6e40 or 0x6496; on-chain website for 0x6496 is ponsfamily.com/launchpad/0xb6e47fab… whose HTML titles Beaver ($BEAVER) paired DJT and does not contain 0x6496", class: claim, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-16, R-23, R-24], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@beaver_hood.role", value: project, class: claim, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@beaver_hood.slug", value: beaver, class: claim, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: "account.@beaver_hood.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-30, field: taxonomy.secondary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T03:56:00Z, receipt_ids: [R-4, R-7], reproduction_ids: [], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-20]
    material_effect: "Gecko token volume_usd.h24 27180 and reserve 673 omit the live BEAVERCOIN/SPCX Uniswap v4 book; that book is DexScreener liquidity.usd 112503.87 volume.h24 1526719.52 and Gecko GET pool 0x1d76…3598 is HTTP 404"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DexScreener BEAVERCOIN/SPCX 24h volume $1.53M, liquidity $112.5k"
    summary: "Uniswap v4 pair 0x1d76…3598 liquidity.usd 112503.87 volume.h24 1526719.52 fdv 202607."
    occurred_at: 2026-09-03T03:56:00Z
    observed_at: 2026-09-03T03:56:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7]
  - id: EVT-2
    type: ct
    title: "@beaver_hood posted that $BEAVER is out in the wild"
    summary: "Post: $BEAVER is officially out. Bio has no CA; DexScreener socials is an Elon status URL."
    occurred_at: 2026-09-03T01:06:14Z
    observed_at: 2026-09-03T03:56:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-3
    type: onchain
    title: "Pons v2 Beaver/SPCX book graduated on a second CA"
    summary: "Tx 0xb581…b858 PoolGraduated 0x6496…af76 into Uniswap v4 0x82fc…a3ec vs SPCX; ticker collision."
    occurred_at: 2026-09-02T18:32:37Z
    observed_at: 2026-09-03T03:52:00Z
    affected_fields: [relationship, deployment.address]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-20, R-16]
  - id: EVT-4
    type: ct
    title: "@elonmusk asked about a different definition of beaver"
    summary: "Status 2095218089189392569 is the DexScreener social for BEAVERCOIN and the Pons token twitter field."
    occurred_at: 2026-09-02T18:31:34Z
    observed_at: 2026-09-03T03:56:00Z
    affected_fields: [communications.status, identity.handle]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-12, R-7, R-15]
  - id: EVT-5
    type: onchain
    title: "LongLauncher created BEAVERCOIN against SPCX"
    summary: "Tx 0x1a63…e014 called LongLauncher.create; BEAVERCOIN 0x6e40…1e18 quoting SPCX 0x4a0E…5eEa."
    occurred_at: 2026-09-02T17:59:23Z
    observed_at: 2026-09-03T03:52:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4]
  - id: EVT-6
    type: ct
    title: "@elonmusk posted America was built on beaver"
    summary: "Status 2095209645728203041 at 17:58:01Z; BEAVERCOIN LongLauncher create is 17:59:23Z."
    occurred_at: 2026-09-02T17:58:01Z
    observed_at: 2026-09-03T03:56:00Z
    affected_fields: [activity.status, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x6e40…1e18 BEAVERCOIN / BEAVER", url: "https://robinhoodchain.blockscout.com/address/0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18", published_at: null, accessed_at: 2026-09-03T03:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18 name BEAVERCOIN is_contract true is_verified true proxy_type eip1167 implementations DopplerERC20V1 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599. token symbol BEAVER decimals 18 total_supply 1000000000000000000000000000 holders_count 773 type ERC-20. creator_address_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Address 0x3Be8…C599 DopplerERC20V1", url: "https://robinhoodchain.blockscout.com/address/0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x3Be8B97Fd0e713B5aBE0649Fa830223B6B4BC599 name DopplerERC20V1 is_contract true is_verified true is_partially_verified true file_path src/tokens/DopplerERC20V1.sol compiler_version v0.8.26+commit.8a97fa7a verified_at 2026-07-01T19:42:07Z." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x1B37…b69a DopplerERC20V1Factory", url: "https://robinhoodchain.blockscout.com/address/0x1B37D3a72082029c44B35B604Ea473617580b69a", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x1B37D3a72082029c44B35B604Ea473617580b69a name DopplerERC20V1Factory is_contract true is_verified true." }
  - { id: R-4, publisher: Blockscout, title: "LongLauncher create tx 0x1a63ef12…e014", url: "https://robinhoodchain.blockscout.com/tx/0x1a63ef1267ab5b38d2ee0a88e7351a997bd402b6a6738c730d35b5a3bc5ee014", published_at: 2026-09-02T17:59:23Z, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-14, CLM-15, CLM-16, EVT-5], excerpt: "timestamp 2026-09-02T17:59:23.000000Z status ok result success block_number 52769723 from 0xE59fe5264F891B7142F107b34F52DB43365dcBd8 (is_contract false) to LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED method create. Initialize pool 0x1d767e12…3598 currency0 SPCX currency1 BEAVERCOIN. Lock 5% 0x21E2…7A66 95% 0xE59f…cBd8. LaunchCreated deployedAt 1788371963." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, owner() on BEAVERCOIN", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-13, CLM-16, CLM-17, CLM-22], excerpt: "eth_chainId 0x1237. eth_blockNumber 0x32a6bd5 (53111765). Token code 44 B EIP-1167 impl 0x3be8b97f…c599. name BEAVERCOIN symbol BEAVER decimals 18 totalSupply 1e27. owner() 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. factory() reverts. Impl code 13927 B. Factory 1912 B. LongLauncher 5826 B. Airlock 5695 B. SPCX 283 B." }
  - { id: R-6, publisher: Blockscout, title: "Address 0x22e9…eeED LongLauncher", url: "https://robinhoodchain.blockscout.com/address/0x22e99278308B393ea1260859B181AD7E78f5eeED", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5], excerpt: "hash 0x22e99278308B393ea1260859B181AD7E78f5eeED name LongLauncher is_contract true is_verified true file_path src/LongLauncher.sol creator_address_hash 0x1Ae51740cE21CAEbB8C92C457Ad7fc1bdAAe5305. ABI includes LaunchCreated." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens BEAVERCOIN", url: "https://api.dexscreener.com/latest/dex/tokens/0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18", published_at: null, accessed_at: 2026-09-03T03:56:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-10, CLM-11, CLM-15, CLM-17, CLM-19, CLM-23, CLM-24, EVT-1], excerpt: "13 robinhood uniswap pairs. Top pairAddress 0x1d767e12f99d8c7ac792749209868a1fafec6e1599b5cb9f4582bf5525793598 labels v4 base BEAVERCOIN / BEAVER quote SPCX 0x4a0E65A3…5eEa liquidity.usd 112503.87 volume.h24 1526719.52 fdv 202607 marketCap 202607 pairCreatedAt 1788371963000. info.websites [] info.socials https://x.com/elonmusk/status/2095218089189392569." }
  - { id: R-8, publisher: GeckoTerminal, title: "BEAVERCOIN token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18", published_at: null, accessed_at: 2026-09-03T03:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-20], excerpt: "name BEAVERCOIN symbol BEAVER decimals 18 total_supply 1e27 price_usd 0.000199831086 fdv_usd 199831.085981823 market_cap_usd null volume_usd.h24 27180.7273430043 total_reserve_in_usd 673.026871673. top_pools USDG/ETH ids, not 0x1d76…3598. coingecko_coin_id null." }
  - { id: R-9, publisher: GeckoTerminal, title: "BEAVERCOIN token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x6e401929BB5BEBB4807c462c8c9Fb8C6B76E1e18/info", published_at: null, accessed_at: 2026-09-03T03:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-8, CLM-23], excerpt: "websites [] twitter_handle null telegram_handle null discord_url null gt_verified false holders.count 27 last_updated 2026-09-02T18:42:44Z. description null." }
  - { id: R-10, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:53:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "HTTP 200. assets length 194. one SPCX hit tokenSymbol SPCX tokenName Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token deployments.contractAddress 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: R-11, publisher: "@elonmusk", title: "In a way, it was built on beaver", url: "https://x.com/elonmusk/status/2095209645728203041", published_at: 2026-09-02T17:58:01Z, accessed_at: 2026-09-03T03:56:00Z, kind: social, authority: social, authenticity: confirmed, supports: [EVT-6], excerpt: "In a way, it was built on beaver 😂" }
  - { id: R-12, publisher: "@elonmusk", title: "Could Elon have been referring to a different definition of beaver?", url: "https://x.com/elonmusk/status/2095218089189392569", published_at: 2026-09-02T18:31:34Z, accessed_at: 2026-09-03T03:56:00Z, kind: social, authority: social, authenticity: confirmed, supports: [CLM-8, CLM-19, EVT-4], excerpt: "Could Elon have been referring to a different definition of beaver? 🤔" }
  - { id: R-13, publisher: "@beaver_hood", title: "$BEAVER is officially out in the wild", url: "https://x.com/beaver_hood/status/2095317409230188817", published_at: 2026-09-03T01:06:14Z, accessed_at: 2026-09-03T03:56:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-27, CLM-28, CLM-29, EVT-2], excerpt: "Profile: Beaver on Robinhood @beaver_hood. Bio: Beaver is Elon in full builder mode, turning chaos into something bigger. No contract in the bio this pass. Post: First blocks are moving. $BEAVER is officially out in the wild. #memecoinlaunch" }
  - { id: R-14, publisher: Blockscout, title: "Token 0x6496…af76 Beaver / BEAVER", url: "https://robinhoodchain.blockscout.com/address/0x6496D819C537673d4b3Efd981B99F7e4615Caf76", published_at: null, accessed_at: 2026-09-03T03:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0x6496D819C537673d4b3Efd981B99F7e4615Caf76 name Beaver is_contract true is_verified false proxy_type null implementations []. token symbol BEAVER decimals 18 total_supply 1000000000000000000000000000 holders_count 482 type ERC-20. creator_address_hash null this pass." }
  - { id: R-15, publisher: Robinhood Chain RPC, title: "eth_getCode and Pons views on collision Beaver", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25, CLM-26, EVT-4], excerpt: "Token 0x6496…af76 code 3248 B prefix 60806040. name Beaver symbol BEAVER totalSupply 1e27. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. getTokenInfo deployer 0x4c27C9F67169e90fd03f9baA45c29acb888c052d twitter https://twitter.com/elonmusk/status/2095218089189392569 website https://ponsfamily.com/launchpad/0xb6e47fabc374d045d3b3d05d9c86c73b4659f70c. Deployer code 23 B prefix 0xef0100." }
  - { id: R-16, publisher: DexScreener, title: "latest/dex/tokens collision Beaver", url: "https://api.dexscreener.com/latest/dex/tokens/0x6496D819C537673d4b3Efd981B99F7e4615Caf76", published_at: null, accessed_at: 2026-09-03T03:56:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25, CLM-26, EVT-3], excerpt: "Top pairAddress 0x82fcc458d3504af8537d3fd20af75e59b00b3c38750f3d6f1bda0aa1acd0a3ec labels v4 base Beaver / BEAVER quote SPCX 0x4a0E65A3…5eEa liquidity.usd 18630.80 volume.h24 2082123.51 fdv 41799 pairCreatedAt 1788373957000. info.websites https://cyberleek.lol/ info.socials []." }
  - { id: R-17, publisher: GeckoTerminal, title: "SPCX / BEAVER Pons v2 pool (collision)", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x82fcc458d3504af8537d3fd20af75e59b00b3c38750f3d6f1bda0aa1acd0a3ec", published_at: null, accessed_at: 2026-09-03T03:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25], excerpt: "name SPCX / BEAVER pool_created_at 2026-09-02T18:32:37Z fdv_usd 6581549.013 market_cap_usd 6581704.164 volume_usd.h24 2090338.029 reserve_in_usd 19084.9658. dex pons-v2-dex base robinhood_0x4a0e65a3… quote robinhood_0x6496d819…" }
  - { id: R-18, publisher: GeckoTerminal, title: "collision Beaver token info", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x6496D819C537673d4b3Efd981B99F7e4615Caf76/info", published_at: null, accessed_at: 2026-09-03T03:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-26], excerpt: "websites [https://ponsfamily.com/launchpad/0xb6e47fabc374d045d3b3d05d9c86c73b4659f70c] twitter_handle elonmusk/status/2095218089189392569 launchpad_details.completed true completed_at 2026-09-02T18:32:37Z migrated_destination_pool_address 0x82fcc458…a3ec. holders.count 482." }
  - { id: R-19, publisher: Blockscout, title: "Pons launchAndBuy tx 0xd65cdb95…4e1a", url: "https://robinhoodchain.blockscout.com/tx/0xd65cdb9543956940c157eadf6eba2d07eda288a82dba584d65fca775d8354e1a", published_at: 2026-09-02T18:32:24Z, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "timestamp 2026-09-02T18:32:24.000000Z status ok block_number 52788767 from 0x4c27C9F67169e90fd03f9baA45c29acb888c052d (is_contract true) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. decoded name Beaver symbol BEAVER. Launched token 0x6496…af76 curve 0x721b…346d." }
  - { id: R-20, publisher: Blockscout, title: "Pons PoolGraduated tx 0xb581002e…b858", url: "https://robinhoodchain.blockscout.com/tx/0xb581002ec64a377c3b8287ef3abb8f595e6f60cdf6c854b82b8da3f94956b858", published_at: 2026-09-02T18:32:37Z, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25, EVT-3], excerpt: "timestamp 2026-09-02T18:32:37.000000Z status ok block_number 52788891. PoolManager Initialize id 0x82fcc458…a3ec currency0 SPCX currency1 0x6496…af76 hooks 0xE5e7…e044. PoolGraduated token 0x6496…af76 positionId 1551521 tokenAmount 204081632653061224501909983 pairTokenAmount 72200000000000000015." }
  - { id: R-21, publisher: Blockscout, title: "Token 0x4a0E…5eEa SPCX", url: "https://robinhoodchain.blockscout.com/address/0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-21], excerpt: "hash 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon. token name Space Exploration Technologies Corp • Robinhood Token symbol SPCX decimals 18 total_supply 47247227000000000000000 holders_count 71061." }
  - { id: R-22, publisher: Blockscout, title: "Address 0xeb7C…0862 Airlock", url: "https://robinhoodchain.blockscout.com/address/0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862", published_at: null, accessed_at: 2026-09-03T03:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "hash 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862 name Airlock is_contract true is_verified true." }
  - { id: R-23, publisher: cyberleek.lol, title: "cyberleek.lol claimed DexScreener website", url: "https://cyberleek.lol/", published_at: null, accessed_at: 2026-09-03T03:54:00Z, kind: other, authority: unknown, authenticity: unconfirmed, supports: [CLM-26], excerpt: "HTTP 200 title Redirecting... HTML script: Apple or Android UA window.location.replace https://ponsfamil… No 0x6e401929, 0x6496d819, beaver, or SPCX string in the preview HTML this pass." }
  - { id: R-24, publisher: Pons, title: "ponsfamily launchpad 0xb6e47fab…", url: "https://www.ponsfamily.com/launchpad/0xb6e47fabc374d045d3b3d05d9c86c73b4659f70c", published_at: null, accessed_at: 2026-09-03T03:55:00Z, kind: other, authority: primary, authenticity: unconfirmed, supports: [CLM-26], excerpt: "HTTP 200 after www redirect. title Beaver ($BEAVER) · pons. Visible copy Paired DJT, Bonding curve, No description yet. HTML contains 0xb6e47fab and beaver; does not contain 0x6496d819 or 0x6e401929 this pass." }
  - { id: R-25, publisher: Blockscout, title: "Token 0xAfA1…18B0 Beavercoin / BEAVER", url: "https://robinhoodchain.blockscout.com/address/0xAfA11694693aEE2f54E08Ae87e5D31307E6918B0", published_at: null, accessed_at: 2026-09-03T03:56:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "hash 0xAfA11694693aEE2f54E08Ae87e5D31307E6918B0 name Token is_contract true is_verified true creator_address_hash 0x0382BE436BF2C372d9Aab220d51D9F4Cf31ddF67. token name Beavercoin symbol BEAVER holders_count 213. RPC eth_getCode 1764 B. DexScreener Uniswap v3 BEAVER/WETH pair 0x932a1cC5…88d8." }
  - { id: R-26, publisher: Blockscout, title: "Address 0xeb7C…0862 used as owner on create", url: "https://robinhoodchain.blockscout.com/tx/0x1a63ef1267ab5b38d2ee0a88e7351a997bd402b6a6738c730d35b5a3bc5ee014", published_at: 2026-09-02T17:59:23Z, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13], excerpt: "OwnershipTransferred oldOwner 0x0000…0000 newOwner Airlock 0xeb7C034704eF8Dcd2D32324c1545f62fB4aD0862. mint 1e27 to Airlock." }
  - { id: R-27, publisher: Blockscout, title: "Address 0x7eD5…C7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T03:52:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-25], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true file_path contracts/src/v2/PonsV2LaunchFactory.sol. ABI includes TokenLaunched, PoolGraduated, getLaunchedToken." }
  - { id: R-28, publisher: GeckoTerminal, title: "collision Beaver token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0x6496D819C537673d4b3Efd981B99F7e4615Caf76", published_at: null, accessed_at: 2026-09-03T03:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-25], excerpt: "name Beaver symbol BEAVER decimals 18 total_supply 1e27 price_usd 0.00004198211741 fdv_usd 41982.1174071194 market_cap_usd null volume_usd.h24 2127271.41834234 total_reserve_in_usd 10390.62382115. top pool 0x82fc…a3ec." }
  - { id: R-29, publisher: GeckoTerminal, title: "BEAVERCOIN/SPCX pool 404", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x1d767e12f99d8c7ac792749209868a1fafec6e1599b5cb9f4582bf5525793598", published_at: null, accessed_at: 2026-09-03T03:53:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-20], excerpt: "GET with Mozilla UA returned HTTP 404. HTML pool page also HTTP 404 this pass. DexScreener indexes the same id as the live BEAVERCOIN/SPCX Uniswap v4 book." }
  - { id: R-30, publisher: LONG, title: "app.long.xyz BEAVERCOIN token page", url: "https://app.long.xyz/tokens/0x6e401929bb5bebb4807c462c8c9fb8c6b76e1e18", published_at: null, accessed_at: 2026-09-03T03:54:00Z, kind: other, authority: primary, authenticity: unconfirmed, supports: [CLM-23], excerpt: "GET with Mozilla and Chrome UA returned HTTP 403 this pass. Not used as official_domain." }

gaps:
  - { priority: P0, question: "Does any surface bidirectionally confirm a project handle or domain for token 0x6e40…1e18?", checked: "DexScreener info.websites [] info.socials Elon status; Gecko twitter_handle null websites []; @beaver_hood bio has no CA; app.long.xyz HTTP 403, 2026-09-03", next: "re-read DexScreener after a Claim Profile and any LONG page that loads without 403" }
  - { priority: P0, question: "Does Gecko later index Uniswap v4 pool 0x1d76…3598 so token volume matches the SPCX book?", checked: "GET pool HTTP 404; token top_pools are USDG/ETH; DexScreener SPCX book live, 2026-09-03", next: "re-GET the Gecko pool endpoint and compare volume_usd.h24 to DexScreener" }
  - { priority: P1, question: "Does @beaver_hood later pin CA 0x6e40…1e18, and does DexScreener or LONG link that handle?", checked: "bio has no CA; DexScreener socials is the Elon status; 2026-09-03", next: "re-read the profile and DexScreener info.socials" }
  - { priority: P1, question: "Is ponsfamily.com/launchpad/0xb6e47fab… meant to be the Pons v2 Beaver 0x6496…af76 page, or a different Beaver/DJT curve?", checked: "HTML title Beaver ($BEAVER) · pons, paired DJT, no 0x6496 string, 2026-09-03", next: "open the page after SPA hydration or match 0xb6e47fab to a curve/token via factory logs" }
  - { priority: P2, question: "Is there an audit whose scope includes DopplerERC20V1 as used by LongLauncher on 4663?", checked: "Blockscout, DexScreener, Gecko info, X search, 2026-09-03", next: "auditor report index for Doppler / long.xyz and a matching commit" }
---

# BEAVER — research packet

## What it is

A one-billion-supply ERC-20 cloned into a Uniswap v4 pool quoted against SPCX. LongLauncher deploys BEAVERCOIN (BEAVER) in one create call and seeds the BEAVER/SPCX book. Traders buy and sell BEAVER on Uniswap v4. No official site or handle was located this pass.

Themes: memecoin, stock-paired:SPCX, rwa

## Why it matters

@elonmusk posted "In a way, it was built on beaver" at 17:58:01Z; LongLauncher created this token against SPCX one minute later. The BEAVERCOIN/SPCX Uniswap v4 book printed about $1.53M of 24h volume on DexScreener at collection. Packed SPACEHOOD uses the same SPCX rail at a different CA. A second BEAVER/SPCX book is a Pons v2 token at 0x6496…af76.

## What could go wrong

USD liquidity on the BEAVERCOIN/SPCX book counts both sides, and the quote side is SPCX, not USDG. Gecko does not index that pool this pass, so Gecko token volume is not the SPCX book. Ticker BEAVER is reused by Pons v2 0x6496…af76 and by WETH-paired 0xAfA1…18B0. No official handle was located.

## Product and mechanics

LongLauncher 0x22e9…eeED clones DopplerERC20V1 via EIP-1167. create from 0xE59f…cBd8 at 2026-09-02T17:59:23Z minted BEAVERCOIN / BEAVER supply 1e9*1e18 into Uniswap v4 poolId 0x1d76…3598 quoted against SPCX. owner() on the token returns Airlock. factory() reverts. [verified R-4 R-5]

Verified create logs lock 5% to 0x21E2…7A66 and 95% to the launcher EOA. PoolManager is 0x8366…0951. Secondary BEAVER/USDG and BEAVER/ETH books exist on DexScreener with far less liquidity than the SPCX book. [verified R-4 R-7]

## Control and security

token owner() is Airlock 0xeb7C…0862. Launcher 0xE59f…cBd8 has no code. DopplerERC20V1 and LongLauncher are verified on Blockscout (src/tokens/DopplerERC20V1.sol partially verified, src/LongLauncher.sol). No audit report URL was located this pass. [verified R-2 R-5 R-6] [unknown]

## Team and provenance

No official domain or X handle was located. DexScreener info.websites is empty; info.socials is @elonmusk status 2095218089189392569. Gecko twitter_handle is null. @beaver_hood posted $BEAVER is out; the bio has no contract. Flag unconfirmed-official. app.long.xyz returned HTTP 403 this pass. [claim R-7 R-9 R-13 R-30]

## Economics and activity

BEAVERCOIN/SPCX Uniswap v4 24h volume is 1526719.52 USD and liquidity.usd is 112503.87 at 2026-09-03T03:56:00Z from DexScreener. fdv/marketCap is 202607. Blockscout holders_count 773. Pair created 2026-09-02T17:59:23Z. [claim R-1 R-7]

Gecko GET pool 0x1d76…3598 is HTTP 404. Gecko token volume_usd.h24 27180.73 and total_reserve_in_usd 673.03 are Gecko-indexed USDG/ETH books, not the SPCX book. Gecko holders.count 27 is a 2026-09-02T18:42Z snapshot. [claim R-8 R-9 R-29]

Collision Pons v2 Beaver/SPCX DexScreener liquidity.usd 18630.80 volume.h24 2082123.51; Gecko names that pool SPCX / BEAVER dex pons-v2-dex reserve_in_usd 19084.97. [claim R-16 R-17]

## Material risks

- Quote token SPCX is a Robinhood Stock Token rail; this subject is the memecoin, not SPCX. [verified R-10 R-21]
- Pool USD reserve is BEAVERCOIN plus SPCX, not a USDG or WETH backstop. [claim R-7]
- Ticker BEAVER is reused at 0x6496…af76 and 0xAfA1…18B0. Flag ca-collision. [verified R-14 R-16 R-25]
- No official handle or domain this pass; Telegram was not located. [claim R-7 R-13]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl/factory/create tx/SPCX/Airlock/collision token and Pons txs, RPC with Mozilla UA, DexScreener, Gecko token/info/pool 404, /rhj/assets, Elon posts, @beaver_hood, cyberleek.lol, and ponsfamily launchpad were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-10]
- Numbers: 1526719.52 is the DexScreener BEAVERCOIN/SPCX pool 24h volume, not Gecko token 27180.73. Reserve 112503.87 is that pool. Collision book volume 2082123.51 is 0x6496…af76, not this row. [claim R-7 R-8 R-16]
- Adversarial: the strongest contrary reading is that Pons v2 0x6496…af76 is the official BEAVER because Gecko indexes it and DexScreener lists a website. That site is cyberleek.lol with no CA, the on-chain website HTML is a DJT bonding-curve page without 0x6496, and this row's token is the first LongLauncher SPCX book with higher liquidity. [inference R-16 R-23 R-24]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no beaver / BEAVER / BEAVERCOIN / 0x6e40…1e18.
- Explorer: Blockscout api/v2 token, impl, factory, LongLauncher, Airlock, SPCX, create 0x1a63…e014, collision token, launchAndBuy 0xd65c…4e1a, PoolGraduated 0xb581…b858, holders. RPC eth_getCode/eth_call with Mozilla UA at blocks 53111765–53116970.
- Aggregators: DexScreener latest/dex/tokens and token-pairs/v1; Gecko token, info, collision pool; Gecko canonical pool 404.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 SPCX.
- Social: X keyword BEAVER/BEAVERCOIN/SPCX; from:elonmusk beaver; from:beaver_hood; user search beaver_hood.
- Failed: app.long.xyz HTTP 403; Gecko pool 0x1d76…3598 HTTP 404; Blockscout token creator_address_hash null (create tx used instead); Gecko token first fetch 429 then 200.
- Time: collection 2026-09-03T03:45Z–2026-09-03T03:56Z.
