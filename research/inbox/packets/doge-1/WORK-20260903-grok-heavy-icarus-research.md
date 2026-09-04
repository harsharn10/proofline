---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: doge-1
name: DOGE-1
packet_tier: seed
as_of: 2026-09-03T04:28:00Z
prior_packet: null
supersedes: null
owned_slugs: [doge-1]
allowed_paths:
  - research/inbox/packets/doge-1/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: DOGE-1
  aliases: []
  symbols: [DOGE-1]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "https://www.doge1coinrh.com/"
  official_handle: "NULL — DexScreener info.socials lists https://x.com/Doge1CoinRH; constructor socials twitter is https://x.com/doge1coinrh; site links that URL; @Doge1CoinRH bio has no contract this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, the site HTML, constructor socials, Blockscout, or X search this pass"
  possible_matches:
    - slug: spacehood
      signals: [other]
      contrary_signals:
        - "Packed SPACEHOOD is 0xFe7E19…1E18, a 44-byte EIP-1167 DopplerERC20V1 clone via LongLauncher, paired to the same SPCX rail"
        - "DOGE-1 canonical row is 0x3eC8…4c03, 3248-byte PonsV2LauncherToken via PonsV2LaunchFactory, Uniswap v4 pair 0x037dea9a…d54c"
        - "No shared handle, domain, or reproduced address"
    - slug: beaver
      signals: [other]
      contrary_signals:
        - "Packed BEAVER is BEAVERCOIN 0x6e40…1e18, a 44-byte LongLauncher DopplerERC20V1 clone quoted against SPCX"
        - "DOGE-1 is a later Pons v2 graduation on the same SPCX rail at a different CA"
        - "No shared handle, domain, or reproduced address"
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "DOGE-1 is the ERC-20 at 0x3eC8…4c03 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; listed x.com/doge1coinrh is not @ponsdotfamily"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "DOGE-1 is a PonsV2LauncherToken cloned by PonsV2LaunchDeployer 0x3711…1A42, not LongLauncher"
        - "Ticker collision 0x3582…EbA3 is the LongLauncher DOGE1/SPCX book, not this row"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "DOGE-1 is a Pons v2 LaunchToken in a Uniswap v4 DOGE-1/SPCX pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x3eC8…4c03 has 3248 bytes of code on 4663 (not EIP-1167); name/symbol DOGE-1; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e. launchAndBuy at 2026-09-02T13:57:59Z minted against pairToken SPCX 0x4a0E…5eEa; CurveCompleted / createGraduatedPool at 2026-09-02T14:00:58Z seeded Uniswap v4 pool 0x037dea9a…d54c. SPCX is a rail in GET /rhj/assets. Distinct from packed SPACEHOOD/BEAVER LongLauncher clones and from same-ticker 0xbFa87…A2f9 / 0x3582…EbA3. No bidirectional official handle this pass. [R-1] [R-3] [R-5] [R-6] [R-7] [R-8] [R-9] [R-13] [R-16] [R-17]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.doge1coinrh.com/", authenticity: confirmed }
  - { kind: x, url: "https://x.com/Doge1CoinRH", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/Doge1onRH", authenticity: unconfirmed }

deployments:
  - label: DOGE-1 token (PonsV2LauncherToken bytecode)
    role: token
    address:
      value: "0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:22:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-3, R-5]
  - label: PonsV2LaunchDeployer
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-18]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:21:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5, R-19]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0x73c35E838fFfE4ed0c415906655605a0D8b75137"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:21:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-5, R-6, R-23]
  - label: PonsV2LaunchAndBuy (create tx to)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-20]
  - label: V2LaunchLocker (graduated position)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:26:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-13]
  - label: SPCX Stock Token (pair quote / launch pairToken)
    role: token
    address:
      value: "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:21:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-5, R-9, R-15]
  - label: "DOGE-1 ticker collision (Pons v2, not this row)"
    role: token
    address:
      value: "0xbFa87Fa76e712d8102B38e0a4b9ACDC85c78A2f9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-16, R-21]
  - label: "DOGE1 ticker collision (LongLauncher, not this row)"
    role: token
    address:
      value: "0x3582C0Ed4324cb742266401E56C68d026118EbA3"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:23:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
    receipt_ids: [R-17, R-21]

metrics:
  - { kind: volume_24h, value: 722896.95, currency: USD, as_of: 2026-09-03T04:20:19Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03 pair 0x037dea9a…d54c DOGE-1/SPCX Uniswap v4 volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 70959.97, currency: USD, as_of: 2026-09-03T04:20:19Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03 pair 0x037dea9a…d54c DOGE-1/SPCX liquidity.usd (that pool, not an all-pools figure)", class: claim, receipt_ids: [R-7] }
  - { kind: volume_24h, value: 705142.752905416, currency: USD, as_of: 2026-09-03T04:21:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x037dea9a1851a87f997c42cc9bf18659675f642d01d28fc7b1cc94695a0ad54c volume_usd.h24 (DOGE-1/SPCX pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 53311.166, currency: USD, as_of: 2026-09-03T04:21:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x037dea9a1851a87f997c42cc9bf18659675f642d01d28fc7b1cc94695a0ad54c reserve_in_usd (DOGE-1/SPCX pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 603801, currency: USD, as_of: 2026-09-03T04:20:19Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03 pair 0x037dea9a…d54c fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 894, currency: null, as_of: 2026-09-03T04:22:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:21:41Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32aba43 (53131843). Token 0x3eC8…4c03 eth_getCode 3248 B prefix 60806040526004361015, not EIP-1167. name DOGE-1, symbol DOGE-1, decimals 18, totalSupply 1e27. owner() and factory() revert. deployer() 0x74aF00eb81B844f5bcCf293b0d548471CfC057f1 (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x73c35E838fFfE4ed0c415906655605a0D8b75137. description() empty. socials() twitter https://x.com/doge1coinrh telegram/discord/farcaster empty website https://www.doge1coinrh.com/. SPCX name Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token. SPACEHOOD 0xFe7E19…1E18 and BEAVER 0x6e40…1e18 are 44-byte EIP-1167 prefixes." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:26:00Z, receipt_ids: [R-1, R-3, R-4, R-6, R-13, R-14, R-15, R-18, R-19, R-20], result: "Blockscout api/v2 token 0x3eC8…4c03 name DOGE-1 symbol DOGE-1 holders_count 894 total_supply 1e27 is_contract true is_verified false proxy_type null creator_address_hash null. launchAndBuy tx 0x4f27…0a55 2026-09-02T13:57:59Z block 52628301 from EOA 0x74aF…57f1 to PonsV2LaunchAndBuy 0xe33E…2948; params name/symbol DOGE-1 twitter https://x.com/doge1coinrh website https://www.doge1coinrh.com/ telegram empty pairToken SPCX 0x4a0E…5eEa quoteIn 9998951663870479. TokenLaunched token 0x3eC8…4c03 curve 0x73c35E…5137 graduationThreshold 722e18. CurveCompleted tx 0x7661…fbd5 2026-09-02T14:00:58Z quoteOut 72200000000000000005 tokenOut 285714285714285714285714285. createGraduatedPool tx 0x7878…f2fe same timestamp block 52630059 poolId 0x037dea9a…d54c V2LaunchLocker PositionLocked 1518692. SPCX BeaconProxy holders_count 71193." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:20:19Z, receipt_ids: [R-7, R-21], result: "DexScreener latest/dex/tokens/0x3eC8…4c03: 5 robinhood uniswap pairs; top DOGE-1/SPCX v4 0x037dea9a…d54c quote SPCX 0x4a0E…5eEa liquidity.usd 70959.97 volume.h24 722896.95 fdv/marketCap 603801 pairCreatedAt 1788357658000 (2026-09-02T14:00:58Z) info.websites https://www.doge1coinrh.com/ info.socials x.com/Doge1CoinRH t.me/Doge1onRH. Search also listed robinhood 0xbFa87…A2f9 DOGE-1/SPCX, 0x3582…EbA3 DOGE1/SPCX, and Solana/Base/BSC/Ethereum same-ticker rows." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:21:00Z, receipt_ids: [R-8], result: "One Gecko GET Chrome UA: pool 0x037dea9a…d54c name DOGE-1 / SPCX pool_created_at 2026-09-02T14:00:58Z volume_usd.h24 705142.752905416 reserve_in_usd 53311.166 fdv_usd 585811.0147 market_cap_usd null. dex pons-v2-dex. base robinhood_0x3ec8…4c03 quote robinhood_0x4a0e…5eea. transactions.h24 buys 2568 sells 1875. No second Gecko GET this pass." }
  - { id: REP-5, method: api, checked_at: 2026-09-03T04:23:00Z, receipt_ids: [R-9, R-10, R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one SPCX hit tokenSymbol SPCX tokenName Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token contractAddress 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa chainId 4663 status ASSET_STATUS_ACTIVE. Site doge1coinrh.com HTTP 200 title DOGE-1 ($DOGE-1); HTML contains 0x3ec8…4c03, t.me/Doge1onRH, x.com/doge1coinrh. t.me/Doge1onRH og:title Doge-1 Announcement Channel, 107 subscribers, no CA in the preview HTML." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy deploys a 1e9-supply PonsV2LauncherToken onto a PonsV2BondingCurve quoted against pairToken SPCX; CurveCompleted / LaunchSwept about three minutes later and createGraduatedPool seed the Uniswap v4 DOGE-1/SPCX book 0x037dea9a…d54c (Gecko dex pons-v2-dex). V2LaunchLocker PositionLocked tokenId 1518692. Token owner() reverts.", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-3, R-4, R-5, R-6, R-13], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "DOGE-1", class: verified, observed_at: 2026-09-03T04:21:41Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "DOGE-1", class: verified, observed_at: 2026-09-03T04:21:41Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:21:41Z, receipt_ids: [R-4, R-5, R-19], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-3, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-3, R-6, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials lists https://x.com/Doge1CoinRH; constructor socials twitter is https://x.com/doge1coinrh; @Doge1CoinRH bio has no CA; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-7, R-10, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote SPCX 0x4a0E…5eEa is Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token and is in GET /rhj/assets (194 assets, 1 SPCX hit, chainId 4663). Distinct from packed SPACEHOOD 0xFe7E19…1E18 and BEAVER 0x6e40…1e18 (both 44-byte LongLauncher clones on the same rail). Flag ca-collision: Pons v2 0xbFa87…A2f9 name/symbol DOGE-1 and LongLauncher 0x3582…EbA3 name DOGE-1 symbol DOGE1.", class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-5, R-9, R-15, R-16, R-17, R-21], reproduction_ids: [REP-1, REP-3, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko DOGE-1/SPCX pool 24h volume 705142.75 USD and reserve_in_usd 53311.17 at 2026-09-03T04:21:00Z (Gecko pool slice; fdv_usd 585811.01)", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 70959.97 volume.h24 722896.95 fdv/marketCap 603801 at 2026-09-03T04:20:19Z", class: verified, observed_at: 2026-09-03T04:20:19Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 894, class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; deployer() 0x74aF00eb81B844f5bcCf293b0d548471CfC057f1 has no code. transferCreatorFeeRecipient at 2026-09-02T14:07:13Z moved creator fee recipient from that EOA to 0x8550FEca230adBB645b02592eDef44bBc6f56FdD.", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-5, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() / launchAndBuy from 0x74aF00eb81B844f5bcCf293b0d548471CfC057f1; launchFactory 0x7eD5…EC7e; curve 0x73c35E…5137; V2LaunchLocker 0x2674…4952; V2MemeHook 0xE5e7…e044; current creator fee recipient 0x8550…6FdD", class: verified, observed_at: 2026-09-03T04:26:00Z, receipt_ids: [R-3, R-5, R-13, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is SPCX 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa (Space Exploration Technologies Corp • Robinhood Token); venue is Uniswap v4 pair 0x037dea9a…d54c, Gecko dex id pons-v2-dex. SPCX is a rail, not this profile.", class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-7, R-8, R-9, R-15], reproduction_ids: [REP-3, REP-4, REP-5], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is null on Blockscout; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, LaunchpadFactory, or hood.fun", class: verified, observed_at: 2026-09-03T04:22:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:20:19Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, the site HTML, or the one Gecko pool GET this pass", class: unknown, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: constructor socials twitter https://x.com/doge1coinrh website https://www.doge1coinrh.com/ telegram empty; DexScreener adds t.me/Doge1onRH and x.com/Doge1CoinRH; site HTML contains the CA and those two links; @Doge1CoinRH bio has no CA; TG preview has no CA", class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-5, R-7, R-10, R-11, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener fdv/marketCap 603801. Gecko pool fdv_usd 585811.01; market_cap_usd null. Assignment lead ~$60,592 liq / ~$579,156 vol was not the live slice this pass.", class: verified, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa", class: verified, observed_at: 2026-09-03T04:23:00Z, receipt_ids: [R-5, R-9, R-15], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0x73c35E838fFfE4ed0c415906655605a0D8b75137", class: verified, observed_at: 2026-09-03T04:21:41Z, receipt_ids: [R-5, R-6, R-23], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "https://www.doge1coinrh.com/ — DexScreener info.websites and constructor socials website; site HTML contains CA 0x3ec8…4c03 this pass", class: claim, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-5, R-7, R-10], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-24, field: candidate, value: "doge-1 | DOGE-1 | NULL | https://www.doge1coinrh.com/ — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:28:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "wrong-chain name collision: DexScreener search also returned Solana meteora/pumpswap, Base, BSC, and Ethereum rows named DOGE-1. This packet is robinhood 0x3eC8…4c03 only.", class: claim, observed_at: 2026-09-03T04:21:00Z, receipt_ids: [R-21], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-26, field: "account.@Doge1CoinRH.role", value: project, class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: "account.@Doge1CoinRH.slug", value: doge-1, class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: "account.@Doge1CoinRH.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T04:24:00Z, receipt_ids: [R-7, R-10, R-12], reproduction_ids: [], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko DOGE-1/SPCX 24h volume $705k, liquidity $53k"
    summary: "Gecko pool 0x037dea9a…d54c volume_usd.h24 705143 reserve_in_usd 53311 fdv_usd 585811. DexScreener same pair volume.h24 722897 liquidity.usd 70960 fdv 603801."
    occurred_at: 2026-09-03T04:21:00Z
    observed_at: 2026-09-03T04:21:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "PonsV2LaunchAndBuy minted DOGE-1"
    summary: "Tx 0x4f27…0a55 from 0x74aF…57f1 at 2026-09-02T13:57:59Z; pairToken SPCX 0x4a0E…5eEa quoteIn 9998951663870479; TokenLaunched curve 0x73c35E…5137 graduationThreshold 722e18."
    occurred_at: 2026-09-02T13:57:59Z
    observed_at: 2026-09-03T04:23:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-3, R-4]
  - id: EVT-3
    type: onchain
    title: "CurveCompleted / createGraduatedPool into DOGE-1/SPCX"
    summary: "Tx 0x7661…fbd5 then 0x7878…f2fe at 2026-09-02T14:00:58Z; quoteOut 72.2 SPCX tokenOut 2.857e26; poolId 0x037dea9a…d54c; V2LaunchLocker PositionLocked 1518692."
    occurred_at: 2026-09-02T14:00:58Z
    observed_at: 2026-09-03T04:26:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-6, R-13]
  - id: EVT-4
    type: ct
    title: "@Doge1CoinRH posted Hold DOGE-1. Earn SPCX"
    summary: "@Doge1CoinRH (Doge1RH) posted DOGE-1 written in the stars / Hold DOGE-1. Earn SPCX. Bio has no CA this pass."
    occurred_at: 2026-09-03T01:26:44Z
    observed_at: 2026-09-03T04:24:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-12]
  - id: EVT-5
    type: onchain
    title: "Creator fee recipient transferred"
    summary: "Tx 0x3214…d27c from deployer 0x74aF…57f1 at 2026-09-02T14:07:13Z set newRecipient 0x8550…6FdD on pool 0x037dea9a…d54c."
    occurred_at: 2026-09-02T14:07:13Z
    observed_at: 2026-09-03T04:26:00Z
    affected_fields: [control.privileged-role]
    evidence_state: verified
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-14]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x3eC8…4c03 DOGE-1", url: "https://robinhoodchain.blockscout.com/address/0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03 name DOGE-1 is_contract true is_verified false proxy_type null implementations []. token symbol DOGE-1 decimals 18 total_supply 1000000000000000000000000000 holders_count 894 type ERC-20. creator_address_hash null creation_transaction_hash null this pass." }
  - { id: R-2, publisher: Blockscout, title: "Token API 0x3eC8…4c03", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-12], excerpt: "address_hash 0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03 name DOGE-1 symbol DOGE-1 decimals 18 total_supply 1000000000000000000000000000 holders_count 894 type ERC-20." }
  - { id: R-3, publisher: Blockscout, title: "launchAndBuy tx 0x4f27b355…0a55", url: "https://robinhoodchain.blockscout.com/tx/0x4f27b3553343673bff5e74bbf2c576308b6da1d99a13635caa53655071fe0a55", published_at: 2026-09-02T13:57:59Z, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-8, CLM-14, CLM-16, CLM-19, EVT-2], excerpt: "timestamp 2026-09-02T13:57:59.000000Z status ok block_number 52628301 from 0x74aF00eb81B844f5bcCf293b0d548471CfC057f1 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name DOGE-1 symbol DOGE-1 twitter https://x.com/doge1coinrh telegram empty website https://www.doge1coinrh.com/ pairToken 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa quoteIn 9998951663870479." }
  - { id: R-4, publisher: Blockscout, title: "TokenLaunched log for DOGE-1", url: "https://robinhoodchain.blockscout.com/tx/0x4f27b3553343673bff5e74bbf2c576308b6da1d99a13635caa53655071fe0a55", published_at: 2026-09-02T13:57:59Z, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, EVT-2], excerpt: "PonsV2LaunchFactory TokenLaunched token 0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03 curve 0x73c35E838fFfE4ed0c415906655605a0D8b75137 deployer 0x74aF00eb81B844f5bcCf293b0d548471CfC057f1 pairToken 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa launchConfigId 0 graduationThreshold 72200000000000000000. Block 52628301." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on DOGE-1", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:21:41Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-9, CLM-13, CLM-14, CLM-16, CLM-17, CLM-21, CLM-22, CLM-23], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32aba43 (53131843). Token code 3248 B prefix 60806040. name DOGE-1 symbol DOGE-1 decimals 18 totalSupply 1e27. owner() reverts. deployer() 0x74aF00eb…57f1 code 0x. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x73c35E838fFfE4ed0c415906655605a0D8b75137. socials twitter https://x.com/doge1coinrh website https://www.doge1coinrh.com/. SPACEHOOD/BEAVER code 44 B EIP-1167." }
  - { id: R-6, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0x7661a37c…fbd5", url: "https://robinhoodchain.blockscout.com/tx/0x7661a37ce8250390f68164753ddcd0a6774d1432de8616088aceece46447fbd5", published_at: 2026-09-02T14:00:58Z, accessed_at: 2026-09-03T04:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-22, EVT-3], excerpt: "timestamp 2026-09-02T14:00:58.000000Z status ok block_number 52630050 from 0xde9F85411405BFB02Edf77F2a8446720eC370F5D to 0x73c35E838fFfE4ed0c415906655605a0D8b75137. CurveCompleted recipient 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e quoteOut 72200000000000000005 tokenOut 285714285714285714285714285. LaunchSwept token 0x3eC8…4c03." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens DOGE-1", url: "https://api.dexscreener.com/latest/dex/tokens/0x3eC8A8174129D5cBeCef67eE2AF8621319c34c03", published_at: null, accessed_at: 2026-09-03T04:20:19Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-23, CLM-24, EVT-1], excerpt: "5 robinhood uniswap pairs. Top pairAddress 0x037dea9a1851a87f997c42cc9bf18659675f642d01d28fc7b1cc94695a0ad54c labels v4 base DOGE-1 / DOGE-1 quote Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token / SPCX 0x4a0E65A3…5eEa liquidity.usd 70959.97 volume.h24 722896.95 fdv 603801 marketCap 603801 pairCreatedAt 1788357658000. info.websites https://www.doge1coinrh.com/ info.socials x.com/Doge1CoinRH t.me/Doge1onRH." }
  - { id: R-8, publisher: GeckoTerminal, title: "DOGE-1/SPCX Pons V2 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x037dea9a1851a87f997c42cc9bf18659675f642d01d28fc7b1cc94695a0ad54c", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name DOGE-1 / SPCX pool_created_at 2026-09-02T14:00:58Z fdv_usd 585811.0147 market_cap_usd null volume_usd.h24 705142.752905416 reserve_in_usd 53311.166. dex pons-v2-dex base robinhood_0x3ec8a8174129d5cbecef67ee2af8621319c34c03 quote robinhood_0x4a0e65a3eccec6dbe60ae065f2e7bb85fae35eea. transactions.h24 buys 2568 sells 1875." }
  - { id: R-9, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "HTTP 200. assets length 194. One SPCX hit tokenSymbol SPCX tokenName Space Exploration Technologies Corp. Class A Common Stock • Robinhood Token contractAddress 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa chainId 4663 status ASSET_STATUS_ACTIVE." }
  - { id: R-10, publisher: doge1coinrh.com, title: "DOGE-1 site", url: "https://www.doge1coinrh.com/", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: docs, authority: unknown, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-23, CLM-28], excerpt: "HTTP 200. title DOGE-1 ($DOGE-1) — Elon's Meme Satellite, Now Rewarding $SPCX on Robinhood Chain. Visible copy includes CA 0x3ec8a8174129d5cbecef67ee2af8621319c34c03, https://x.com/doge1coinrh, https://t.me/Doge1onRH. No GitHub URL in the HTML this pass." }
  - { id: R-11, publisher: Telegram, title: "t.me/Doge1onRH", url: "https://t.me/Doge1onRH", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-19], excerpt: "HTTP 200. og:title Doge-1 Announcement Channel. og:description You can view and join @Doge1onRH right away. tgme_page_extra 107 subscribers. No contract address in the preview HTML this pass." }
  - { id: R-12, publisher: "@Doge1CoinRH", title: "Hold DOGE-1. Earn SPCX", url: "https://x.com/Doge1CoinRH/status/2095322571268841798", published_at: 2026-09-03T01:26:44Z, accessed_at: 2026-09-03T04:24:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-26, CLM-27, CLM-28, EVT-4], excerpt: "Profile: Doge1RH @Doge1CoinRH. Bio: DOGE-1 on Robinhood | The crypto-powered lunar mission. Own DOGE-1, earn $SPCX rewards, and ride history with us. No contract in the bio this pass. Post: DOGE-1 written in the stars. Hold DOGE-1. Earn SPCX." }
  - { id: R-13, publisher: Blockscout, title: "createGraduatedPool tx 0x7878c591…f2fe", url: "https://robinhoodchain.blockscout.com/tx/0x7878c591a889e7007a5749527f7e9f1fc6d1638603c8216fc515a40b63a3f2fe", published_at: 2026-09-02T14:00:58Z, accessed_at: 2026-09-03T04:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-14, EVT-3], excerpt: "timestamp 2026-09-02T14:00:58.000000Z status ok block_number 52630059 from 0xc0b3535E207830706656016B62806D8Fe9E6Ae6e to PonsV2LaunchFactory createGraduatedPool(token 0x3eC8…4c03). PoolManager Initialize id 0x037dea9a…d54c currency0 DOGE-1 currency1 SPCX fee 0 hooks V2MemeHook 0xE5e70264…e044. PoolGraduated positionId 1518692 tokenAmount 204081632653061224493833939 pairTokenAmount 72200000000000000005." }
  - { id: R-14, publisher: Blockscout, title: "transferCreatorFeeRecipient tx 0x32146eba…d27c", url: "https://robinhoodchain.blockscout.com/tx/0x32146eba08e7eacfab72871ee465024da9cdba40348fe19783aa2028a5d7d27c", published_at: 2026-09-02T14:07:13Z, accessed_at: 2026-09-03T04:26:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-13, CLM-14, EVT-5], excerpt: "timestamp 2026-09-02T14:07:13.000000Z status ok block_number 52633789 from 0x74aF00eb81B844f5bcCf293b0d548471CfC057f1 to PonsV2LaunchFactory transferCreatorFeeRecipient(token 0x3eC8…4c03, newRecipient 0x8550FEca230adBB645b02592eDef44bBc6f56FdD). CreatorFeeRecipientUpdated poolId 0x037dea9a…d54c." }
  - { id: R-15, publisher: Blockscout, title: "Token 0x4a0E…5eEa SPCX", url: "https://robinhoodchain.blockscout.com/address/0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "hash 0x4a0E65A3EcceC6dBe60AE065F2e7bb85Fae35eEa name BeaconProxy is_contract true is_verified true implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Space Exploration Technologies Corp • Robinhood Token symbol SPCX decimals 18 total_supply 47602113000000000000000 holders_count 71193. SPCX is the pair rail, not this profile." }
  - { id: R-16, publisher: Blockscout, title: "Collision token 0xbFa87…A2f9 PonsV2LauncherToken DOGE-1", url: "https://robinhoodchain.blockscout.com/address/0xbFa87Fa76e712d8102B38e0a4b9ACDC85c78A2f9", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0xbFa87Fa76e712d8102B38e0a4b9ACDC85c78A2f9 name PonsV2LauncherToken is_contract true is_verified true proxy_type null creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42. token name DOGE-1 symbol DOGE-1 holders_count 518. RPC launchFactory 0x7eD5…EC7e deployer 0xb728e1b0…7ed6. Distinct from 0x3eC8…4c03." }
  - { id: R-17, publisher: Blockscout, title: "Collision token 0x3582…EbA3 LongLauncher DOGE1", url: "https://robinhoodchain.blockscout.com/address/0x3582C0Ed4324cb742266401E56C68d026118EbA3", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "hash 0x3582C0Ed4324cb742266401E56C68d026118EbA3 name DOGE-1 is_contract true is_verified true proxy_type eip1167 creator_address_hash DopplerERC20V1Factory 0x1B37D3a72082029c44B35B604Ea473617580b69a. token name DOGE-1 symbol DOGE1 holders_count 181. RPC eth_getCode 44 B; launchFactory() reverts. Distinct from 0x3eC8…4c03." }
  - { id: R-18, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-19, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-20, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T04:23:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-2], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-21, publisher: DexScreener, title: "search q=DOGE-1", url: "https://api.dexscreener.com/latest/dex/search?q=DOGE-1", published_at: null, accessed_at: 2026-09-03T04:21:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-9, CLM-25], excerpt: "robinhood uniswap 0x3eC8…4c03 DOGE-1/SPCX liq 70090.34; 0xbFa87Fa76e712d8102B38e0a4b9ACDC85c78A2f9 DOGE-1/SPCX liq 40230.17; 0x3582C0Ed4324cb742266401E56C68d026118EbA3 DOGE1/SPCX liq 47053.83. Also Solana meteora/pumpswap, Base, BSC, Ethereum same-ticker rows." }
  - { id: R-22, publisher: "@EinsteinYipie", title: "Posted CA and x.com/Doge1CoinRH", url: "https://x.com/EinsteinYipie/status/2095356440097747339", published_at: 2026-09-03T03:41:19Z, accessed_at: 2026-09-03T04:20:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8], excerpt: "Posted $DOGE-1 on robinhood, $SPCX pool, CA 0x3ec8a8174129d5cbecef67ee2af8621319c34c03 and https://x.com/Doge1CoinRH." }
  - { id: R-23, publisher: Blockscout, title: "Curve 0x73c35E…5137", url: "https://robinhoodchain.blockscout.com/address/0x73c35E838fFfE4ed0c415906655605a0D8b75137", published_at: null, accessed_at: 2026-09-03T04:22:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x73c35E838fFfE4ed0c415906655605a0D8b75137 name null is_contract true is_verified false proxy_type null creator_address_hash null. RPC eth_getCode 10229 B." }

gaps:
  - { priority: P0, question: "Does @Doge1CoinRH later pin CA 0x3eC8…4c03, and does that match a DexScreener Claim Profile?", checked: "bio has no CA; constructor/DexScreener/site list the handle; TG preview has no CA, 2026-09-03", next: "re-read the X bio and DexScreener info.socials after a Claim Profile" }
  - { priority: P1, question: "Is 0xbFa87…A2f9 a copy ticker or a related deployer, and which book should aggregators treat as canonical?", checked: "same PonsV2LaunchFactory, different deployer 0xb728…7ed6, holders_count 518 vs 894, DexScreener liq ~$40k vs ~$71k; this packet is 0x3eC8…4c03, 2026-09-03", next: "one launchAndBuy pass on 0xbFa87 if a later assignment asks" }
  - { priority: P1, question: "Does verified PonsV2LauncherToken source on a sibling clone apply to this unverified 3248 B CA?", checked: "this token is_verified false; collision 0xbFa87 is verified PonsV2LauncherToken with the same bytecode length; owner() reverts, 2026-09-03", next: "compare deployed bytecode to a verified PonsV2LauncherToken" }
  - { priority: P2, question: "Which window printed the assignment lead of ~$60,592 liq / ~$579,156 vol?", checked: "Live DexScreener 70959.97 / 722896.95; Gecko reserve 53311.17 / vol 705142.75 at 2026-09-03T04:21Z; packed SPACEHOOD receipt at 03:29Z had 60462.94 / 579091.09", next: "keep the DexScreener DOGE-1/SPCX pair slice; do not mix Gecko reserve with DexScreener fdv" }
---

# DOGE-1 — research packet

## What it is

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 DOGE-1/SPCX pool. Traders buy and sell DOGE-1 against the SpaceX • Robinhood Token on that book. SPCX is the quote rail, not this profile. Distinct from packed SPACEHOOD and BEAVER, which are LongLauncher clones on the same rail.

Themes: memecoin, stock-paired:SPCX, rwa, launchpad

## Why it matters

The DOGE-1/SPCX Uniswap v4 book printed about $705k of 24h volume on Gecko at collection, with the quote leg the workbook SPCX Stock Token 0x4a0E…5eEa (GET /rhj/assets row). Same-ticker robinhood books exist at 0xbFa87…A2f9 (Pons v2) and 0x3582…EbA3 (LongLauncher DOGE1). DexScreener search also lists Solana/Base/BSC/Ethereum rows with the same ticker.

## What could go wrong

USD liquidity figures on the DOGE-1/SPCX book count both sides, and the quote side is SPCX, not USDG. Ticker-only pairing is not identity. Site doge1coinrh.com embeds the CA, but @Doge1CoinRH bio has no contract this pass, so the handle stays unconfirmed-official. Token source is unverified on this CA.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x74aF…57f1 at 2026-09-02T13:57:59Z minted DOGE-1 / DOGE-1 supply 1e9*1e18 onto PonsV2BondingCurve 0x73c35E…5137 quoted against pairToken SPCX 0x4a0E…5eEa with quoteIn 9998951663870479. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 722e18. [verified R-3 R-4 R-5]

CurveCompleted / LaunchSwept tx 0x7661…fbd5 at 2026-09-02T14:00:58Z swept quoteOut 72200000000000000005 SPCX and tokenOut 285714285714285714285714285. createGraduatedPool tx 0x7878…f2fe the same second initialized Uniswap v4 poolId 0x037dea9a…d54c (fee 0, hooks V2MemeHook 0xE5e7…e044). V2LaunchLocker PositionLocked 1518692 and TokenSupplyLocked 81632653061224489791880346. Gecko dex id pons-v2-dex. Secondary DOGE-1/ETH and DOGE-1/USDG books exist on DexScreener with far less liquidity than the SPCX book. [verified R-6 R-7 R-8 R-13]

## Control and security

token owner() reverts. Deployer 0x74aF…57f1 has no code. transferCreatorFeeRecipient at 2026-09-02T14:07:13Z set 0x8550…6FdD as creator fee recipient for pool 0x037dea9a…d54c. [verified R-5 R-14]

PonsV2LaunchFactory, PonsV2LaunchAndBuy, and PonsV2LaunchDeployer are verified on Blockscout. This token CA is_verified false (3248 B, not an EIP-1167 proxy). No audit report URL was located this pass. [verified R-1 R-18 R-19 R-20] [unknown]

## Team and provenance

Site https://www.doge1coinrh.com/ embeds CA 0x3ec8…4c03 and links x.com/doge1coinrh plus t.me/Doge1onRH. Constructor socials twitter/website match; telegram is empty on-chain. DexScreener lists the site, x.com/Doge1CoinRH, and t.me/Doge1onRH. @Doge1CoinRH bio has no contract. TG preview titles Doge-1 Announcement Channel with 107 subscribers and no CA. Flag unconfirmed-official. [claim R-5 R-7 R-10 R-11 R-12]

## Economics and activity

DOGE-1/SPCX Uniswap v4 24h volume is 705142.75 USD and reserve_in_usd is 53311.17 at 2026-09-03T04:21:00Z from the Gecko pool endpoint. fdv_usd is 585811.01. Gecko market_cap_usd is null. [claim R-8]

DexScreener same pair: liquidity.usd 70959.97, volume.h24 722896.95, fdv/marketCap 603801. Blockscout holders_count 894. Pair created 2026-09-02T14:00:58Z. Assignment lead of ~$60,592 / ~$579,156 was not the live slice this pass. [claim R-1 R-7]

## Material risks

- Quote token SPCX 0x4a0E…5eEa is a Robinhood Stock Token rail; this subject is the memecoin, not SPCX. [verified R-9 R-15]
- Pool USD reserve is DOGE-1 plus SPCX, not a USDG or WETH backstop. [claim R-7 R-8]
- Same-ticker robinhood books at 0xbFa87…A2f9 and 0x3582…EbA3. Flag ca-collision. [verified R-16 R-17 R-21]
- Handle is unconfirmed-official; TG is a third-party-link with no CA in the preview. [claim R-7 R-11 R-12]
- Token source unverified on this CA. No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/factory/deployer/lab/SPCX/launchAndBuy/CurveCompleted/createGraduatedPool/fee-recipient txs and collision tokens, RPC with Chrome UA, DexScreener token and search, one Gecko pool GET, /rhj/assets, the site HTML, Telegram preview, and @Doge1CoinRH were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-9]
- Numbers: 705142.75 is the Gecko DOGE-1/SPCX pool 24h volume. Reserve 53311.17 is that pool. DexScreener 722896.95 / 70959.97 is the same pair, different aggregator. [claim R-7 R-8]
- Adversarial: the strongest contrary reading is that this row is SPACEHOOD, BEAVER, SPCX itself, or the other robinhood DOGE-1 tickers. Different CAs, create paths (Pons v2 vs LongLauncher vs BeaconProxy Stock), and bytecode sizes argue against those. [verified R-5 R-9 R-16 R-17]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no doge-1 / DOGE-1 / 0x3eC8…4c03.
- Explorer: Blockscout api/v2 token, factory, deployer, lab, SPCX, launchAndBuy 0x4f27…0a55, CurveCompleted 0x7661…fbd5, createGraduatedPool 0x7878…f2fe, transferCreatorFeeRecipient 0x3214…d27c, collision tokens. RPC eth_getCode/eth_call with Chrome UA at block 53131843.
- Aggregators: DexScreener latest/dex/tokens and search q=DOGE-1; one Gecko pool GET (no token GET this pass).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 SPCX.
- Social: X keyword from:Doge1CoinRH; user search Doge1CoinRH (exact handle not in the first five user-search hits); t.me/Doge1onRH preview; site HTML.
- Failed: Blockscout token creator_address_hash null (TokenLaunched used instead); Mozilla UA on Blockscout returned Cloudflare challenge, Chrome UA succeeded; Gecko token endpoint not fetched (bounded, one pool GET).
- Time: collection 2026-09-03T04:20Z–2026-09-03T04:28Z.
