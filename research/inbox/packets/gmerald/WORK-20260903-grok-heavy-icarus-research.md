---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: gmerald
name: GMERALD
packet_tier: seed
as_of: 2026-09-03T04:10:00Z
prior_packet: null
supersedes: null
owned_slugs: [gmerald]
allowed_paths:
  - research/inbox/packets/gmerald/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: GMERALD
  aliases: [Gmerald]
  symbols: [GMERALD]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener lists https://www.gmerald.xyz/; Pons constructor socials website field is empty; no site fetch this pass (bounded)"
  official_handle: "NULL — DexScreener lists https://x.com/gmeraldexe and constructor socials encode the same URL; no bidirectional X profile check this pass (bounded); flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Blockscout token/source, or constructor socials this pass"
  possible_matches:
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD5…EC7e"
        - "GMERALD is the ERC-20 at 0x3E4E7bbe…9458 created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; DexScreener-listed x.com/gmeraldexe is not @ponsdotfamily"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e9…eeED"
        - "GMERALD is a PonsV2LauncherToken cloned by PonsV2LaunchDeployer 0x3711…1A42, not LongLauncher"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: [rwa-products/stock-paired-token]
  mechanism_tags: [bonding-curve, amm, stock-paired, rwa, launchpad]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0x3E4E7bbe…9458 is a verified PonsV2LauncherToken with non-empty code on 4663; creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() returns PonsV2LaunchFactory 0x7eD5…EC7e; launchAndBuy at 2026-09-02T20:10:47Z minted Gmerald / GMERALD against GME 0x1b0E…153E and CurveCompleted at 2026-09-02T20:11:47Z. GME is the quote rail. Distinct from KITTY/GME 0x96F10D7A…9aB4. No official handle this pass. [R-1] [R-4] [R-5] [R-7] [R-8] [R-9] [R-14]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://www.gmerald.xyz/", authenticity: unconfirmed }
  - { kind: x, url: "https://x.com/gmeraldexe", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/GMERALDportal", authenticity: unconfirmed }

deployments:
  - label: GMERALD token (PonsV2LauncherToken)
    role: token
    address:
      value: "0x3E4E7bbee9A7e5fBEdABeEa66313C8f636999458"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:04:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-5]
  - label: PonsV2LaunchDeployer (token creator)
    role: factory
    address:
      value: "0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-5]
  - label: PonsV2LaunchFactory (token launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-10]
  - label: PonsV2BondingCurve
    role: other
    address:
      value: "0xd08Da39D027a7Cd12E1EAE45F72D15585034DC15"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:06:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-5, R-6, R-12, R-14]
  - label: PonsV2LaunchAndBuy (create tx to)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-11]
  - label: GME Stock Token (pair quote / factory pairToken)
    role: token
    address:
      value: "0x1b0E319c6A659F002271B69dB8A7df2F911c153E"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:05:00Z
      exists_on_4663: true
      explorer_source_verified: true
      explorer_source_verification_scope: proxy-shell-only
      implementation_source_verified: true
    receipt_ids: [R-7, R-13]

metrics:
  - { kind: volume_24h, value: 2297336.16, currency: USD, as_of: 2026-09-03T04:07:25Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc47b5ee30f44eccee1b477a81664148e5c275e82d5f37fe7f94a9e65878700ba volume_usd.h24 (GME/GMERALD pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 102954.42, currency: USD, as_of: 2026-09-03T04:07:25Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc47b5ee30f44eccee1b477a81664148e5c275e82d5f37fe7f94a9e65878700ba reserve_in_usd (GME/GMERALD pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 1106505, currency: USD, as_of: 2026-09-03T04:04:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0x3E4E7bbee9A7e5fBEdABeEa66313C8f636999458 pair 0xc47b5ee3…00ba GMERALD/GME fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 802, currency: null, as_of: 2026-09-03T04:04:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0x3E4E7bbee9A7e5fBEdABeEa66313C8f636999458 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:07:00Z, receipt_ids: [R-5], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a99b3 (53123507). Token 0x3E4E7bbe…9458 eth_getCode 3248 B prefix 60806040, not EIP-1167. name Gmerald, symbol GMERALD, decimals 18, totalSupply 885124129620127602499036807. owner() and factory() revert. deployer() 0x9a3ae500FCB5a5C5A596A6Fb16Bd2E441F7cbdBF (eth_getCode 0x). launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0xd08Da39D027a7Cd12E1EAE45F72D15585034DC15. description() He buys GameStop and burns himself. Forever." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:06:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-10, R-11, R-12, R-13, R-14], result: "Blockscout api/v2 token 0x3E4E7bbe…9458 name Gmerald symbol GMERALD holders_count 802 total_supply 885124129620127602499036807 contract name PonsV2LauncherToken is_verified true is_fully_verified true file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35. creator_address_hash PonsV2LaunchDeployer 0x3711…1A42 creation_transaction_hash 0x81e32486…9567. launchAndBuy 2026-09-02T20:10:47Z block 52845715 from EOA 0x9a3ae500…bdBF to PonsV2LaunchAndBuy 0xe33E…2948 pairToken GME 0x1b0E…153E quoteIn 21e18. TokenLaunched curve 0xd08Da39D…DC15 graduationThreshold 369e18. CurveCompleted tx 0x5ea7e9b3…56ed 2026-09-02T20:11:47Z block 52846296 LaunchSwept quoteOut 369e18 tokenOut 285714285714285714285714285." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7, R-9], result: "DexScreener latest/dex/tokens/0x3E4E7bbe…9458: 10 robinhood uniswap pairs; top GMERALD/GME v4 0xc47b5ee3…00ba quote 0x1b0E…153E GameStop • Robinhood Token / GME liquidity.usd 85277.92 volume.h24 2178463.68 fdv/marketCap 1106505 pairCreatedAt 1788379943000 (2026-09-02T20:12:23Z) info.websites https://www.gmerald.xyz/ info.socials x.com/gmeraldexe t.me/GMERALDportal. Search also listed other robinhood Gmerald tickers 0x785Dcc33…, 0x83509E45…, 0xEc5C958e… vs ETH, and Solana pumpswap/pumpfun rows. KITTY 0x96F10D7A…9aB4 is Roaring Kitty, not this CA." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:07:25Z, receipt_ids: [R-8], result: "One Gecko GET Mozilla UA: pool 0xc47b5ee3…00ba name GME / GMERALD pool_created_at 2026-09-02T20:12:23Z volume_usd.h24 2297336.16 reserve_in_usd 102954.42 fdv_usd 1946574.29 market_cap_usd 1946575.40 (pool base is GME 0x1b0E…153E, quote is GMERALD 0x3E4E7bbe…9458; dex pons-v2-dex). transactions.h24 buys 7623 sells 7195. No second Gecko GET this pass." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy deploys a 1e9-supply PonsV2LauncherToken onto a PonsV2BondingCurve quoted against pairToken GME; CurveCompleted / LaunchSwept about one minute later seeds the Uniswap v4 GMERALD/GME book 0xc47b5ee3…00ba (Gecko dex pons-v2-dex). Verified token source: entire supply mints to the curve; deployer is immutable reference data with no token privileges. Token is ERC20Burnable.", class: verified, observed_at: 2026-09-03T04:08:00Z, receipt_ids: [R-2, R-4, R-5, R-6, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Gmerald", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "GMERALD", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0x3E4E7bbee9A7e5fBEdABeEa66313C8f636999458", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-1, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-5, R-6, R-10], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1, R-4, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-2, R-4, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — no bidirectional official handle; DexScreener info.socials lists https://x.com/gmeraldexe; constructor socials twitter is that URL and telegram https://t.me/GMERALDportal; website empty on-chain; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-2, R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pair quote GME 0x1b0E…153E is named GameStop • Robinhood Token (workbook stock-tokens.yaml row; BeaconProxy to Stock). Distinct from dossier GME 0xD1C418…1379. Distinct from KITTY/GME: Roaring Kitty / KITTY 0x96F10D7A…9aB4 holders_count 943. DexScreener search also listed other robinhood Gmerald tickers at 0x785Dcc33…, 0x83509E45…, 0xEc5C958e… vs ETH.", class: verified, observed_at: 2026-09-03T04:06:00Z, receipt_ids: [R-7, R-9, R-13], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko GME/GMERALD pool 24h volume 2297336.16 USD and reserve_in_usd 102954.42 at 2026-09-03T04:07:25Z (Gecko pool slice; pool fdv_usd 1946574.29 is the GME-as-base book, not a GMERALD token fdv)", class: verified, observed_at: 2026-09-03T04:07:25Z, receipt_ids: [R-8], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 85277.92 volume.h24 2178463.68 fdv/marketCap 1106505 at 2026-09-03T04:04:00Z", class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 802, class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "token owner() reverts; verified PonsV2LauncherToken source: deployer is immutable reference data and confers no privileges. Deployer 0x9a3ae500…bdBF has no code.", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-2, R-5], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "deployer() / launchAndBuy from 0x9a3ae500FCB5a5C5A596A6Fb16Bd2E441F7cbdBF; launchFactory 0x7eD5…EC7e; curve 0xd08Da39D…DC15", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is GME 0x1b0E319c6A659F002271B69dB8A7df2F911c153E (GameStop • Robinhood Token); venue is Uniswap v4 pair 0xc47b5ee3…00ba, Gecko dex id pons-v2-dex. GME is a rail, not this profile.", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-7, R-8, R-13], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "Token creator_address_hash is PonsV2LaunchDeployer 0x3711…1A42; launchFactory() names PonsV2LaunchFactory 0x7eD5…EC7e, not LongLauncher, LaunchpadFactory, or hood.fun", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, or the one Gecko pool GET this pass", class: unknown, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: constructor socials twitter https://x.com/gmeraldexe telegram https://t.me/GMERALDportal website empty; DexScreener adds https://www.gmerald.xyz/; no bidirectional site or X check this pass (bounded)", class: claim, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-2, R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "DexScreener fdv/marketCap 1106505. Gecko pool fdv_usd 1946574.29 / market_cap_usd 1946575.40 is the inverted GME/GMERALD book. No Gecko token GET this pass.", class: verified, observed_at: 2026-09-03T04:07:25Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-21, field: deployment.address, value: "0x1b0E319c6A659F002271B69dB8A7df2F911c153E", class: verified, observed_at: 2026-09-03T04:05:00Z, receipt_ids: [R-7, R-13], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-22, field: deployment.address, value: "0xd08Da39D027a7Cd12E1EAE45F72D15585034DC15", class: verified, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-5, R-6, R-12, R-14], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-23, field: identity.domain, value: "NULL — DexScreener info.websites https://www.gmerald.xyz/; on-chain socials website empty", class: claim, observed_at: 2026-09-03T04:07:00Z, receipt_ids: [R-2, R-4, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "gmerald | GMERALD | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T04:10:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: relationship, value: "wrong-chain name collision: DexScreener search also returned Solana pumpswap 8EgyYWFL8gbW7Bu4AbJCrmSR5mJ2vuWVvYnstiHTuyQq and pumpfun 25ftcaBXxaggKMno8RSkFgfUaoE7VdAJtwYWNYCbpump named Gmerald / GMERALD. This packet is robinhood 0x3E4E7bbe…9458 only.", class: claim, observed_at: 2026-09-03T04:04:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }

conflicts: []

events:
  - id: EVT-1
    type: onchain
    title: "Gecko GME/GMERALD 24h volume $2.30M, liquidity $103k"
    summary: "Gecko pool 0xc47b5ee3…00ba volume_usd.h24 2297336 reserve_in_usd 102954. DexScreener same pair volume.h24 2178464 liquidity.usd 85278 fdv 1106505."
    occurred_at: 2026-09-03T04:07:25Z
    observed_at: 2026-09-03T04:07:25Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-2
    type: onchain
    title: "PonsV2LaunchAndBuy minted Gmerald / GMERALD"
    summary: "Tx 0x81e32486…9567 from 0x9a3ae500…bdBF at 2026-09-02T20:10:47Z; pairToken GME 0x1b0E…153E quoteIn 21e18; TokenLaunched curve 0xd08Da39D…DC15 graduationThreshold 369e18."
    occurred_at: 2026-09-02T20:10:47Z
    observed_at: 2026-09-03T04:06:00Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-6]
  - id: EVT-3
    type: onchain
    title: "CurveCompleted / LaunchSwept into GMERALD/GME"
    summary: "Tx 0x5ea7e9b3…56ed at 2026-09-02T20:11:47Z; quoteOut 369e18 GME tokenOut 285714285714285714285714285. DexScreener pairCreatedAt 2026-09-02T20:12:23Z."
    occurred_at: 2026-09-02T20:11:47Z
    observed_at: 2026-09-03T04:08:00Z
    affected_fields: [deployment.address, product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7, R-14]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0x3E4E7bbe…9458 Gmerald / GMERALD", url: "https://robinhoodchain.blockscout.com/address/0x3E4E7bbee9A7e5fBEdABeEa66313C8f636999458", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-12, CLM-16, CLM-24], excerpt: "hash 0x3E4E7bbee9A7e5fBEdABeEa66313C8f636999458 name Gmerald is_contract true is_verified true proxy_type null. token symbol GMERALD decimals 18 total_supply 885124129620127602499036807 holders_count 802 type ERC-20. creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x81e32486434ccc2642de7fbae86bfbc5f90746b519d93f6bf15db6b9ad119567." }
  - { id: R-2, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0x3E4E7bbee9A7e5fBEdABeEa66313C8f636999458?tab=contract", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-8, CLM-13, CLM-19, CLM-23], excerpt: "ContractName PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_fully_verified true file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-09-02T20:13:10Z. Comment: entire supply mints to the bonding curve; deployer is immutable reference data and confers no privileges. Constructor socials twitter https://x.com/gmeraldexe telegram https://t.me/GMERALDportal website empty. supply_ 1e27." }
  - { id: R-3, publisher: Blockscout, title: "Address 0x3711…1A42 PonsV2LaunchDeployer", url: "https://robinhoodchain.blockscout.com/address/0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-16], excerpt: "hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 name PonsV2LaunchDeployer is_contract true is_verified true proxy_type null creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0x81e32486…9567", url: "https://robinhoodchain.blockscout.com/tx/0x81e32486434ccc2642de7fbae86bfbc5f90746b519d93f6bf15db6b9ad119567", published_at: 2026-09-02T20:10:47Z, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-6, CLM-8, CLM-14, CLM-19, CLM-23, EVT-2], excerpt: "timestamp 2026-09-02T20:10:47.000000Z status ok block_number 52845715 from 0x9a3ae500FCB5a5C5A596A6Fb16Bd2E441F7cbdBF (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Gmerald symbol GMERALD twitter https://x.com/gmeraldexe telegram https://t.me/GMERALDportal website empty pairToken 0x1b0E319c6A659F002271B69dB8A7df2F911c153E quoteIn 21e18." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory() on GMERALD", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:07:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-14, CLM-16, CLM-17, CLM-22], excerpt: "eth_chainId 0x1237 eth_blockNumber 0x32a99b3 (53123507). Token code 3248 B prefix 60806040. name Gmerald symbol GMERALD decimals 18 totalSupply 885124129620127602499036807. owner() reverts. deployer() 0x9a3ae500…bdBF code 0x. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0xd08Da39D027a7Cd12E1EAE45F72D15585034DC15. description() He buys GameStop and burns himself. Forever." }
  - { id: R-6, publisher: Blockscout, title: "TokenLaunched log for GMERALD", url: "https://robinhoodchain.blockscout.com/tx/0x81e32486434ccc2642de7fbae86bfbc5f90746b519d93f6bf15db6b9ad119567", published_at: 2026-09-02T20:10:47Z, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-14, CLM-22, EVT-2], excerpt: "PonsV2LaunchFactory TokenLaunched token 0x3E4E7bbee9A7e5fBEdABeEa66313C8f636999458 curve 0xd08Da39D027a7Cd12E1EAE45F72D15585034DC15 deployer 0x9a3ae500FCB5a5C5A596A6Fb16Bd2E441F7cbdBF pairToken 0x1b0E319c6A659F002271B69dB8A7df2F911c153E launchConfigId 0 graduationThreshold 369000000000000000000. Block 52845715." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens GMERALD", url: "https://api.dexscreener.com/latest/dex/tokens/0x3E4E7bbee9A7e5fBEdABeEa66313C8f636999458", published_at: null, accessed_at: 2026-09-03T04:04:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-8, CLM-9, CLM-11, CLM-15, CLM-17, CLM-19, CLM-20, CLM-21, CLM-23, CLM-24, CLM-25, EVT-1], excerpt: "10 robinhood uniswap pairs. Top pairAddress 0xc47b5ee30f44eccee1b477a81664148e5c275e82d5f37fe7f94a9e65878700ba labels v4 base Gmerald / GMERALD quote GameStop • Robinhood Token / GME 0x1b0E319c…153E liquidity.usd 85277.92 volume.h24 2178463.68 fdv 1106505 marketCap 1106505 pairCreatedAt 1788379943000. info.websites https://www.gmerald.xyz/ info.socials x.com/gmeraldexe t.me/GMERALDportal." }
  - { id: R-8, publisher: GeckoTerminal, title: "GME/GMERALD Pons V2 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0xc47b5ee30f44eccee1b477a81664148e5c275e82d5f37fe7f94a9e65878700ba", published_at: null, accessed_at: 2026-09-03T04:07:25Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, CLM-15, CLM-20, EVT-1], excerpt: "name GME / GMERALD pool_created_at 2026-09-02T20:12:23Z fdv_usd 1946574.29 market_cap_usd 1946575.40 volume_usd.h24 2297336.16 reserve_in_usd 102954.42. dex pons-v2-dex base robinhood_0x1b0e319c6a659f002271b69db8a7df2f911c153e quote robinhood_0x3e4e7bbee9a7e5fbedabeea66313c8f636999458. transactions.h24 buys 7623 sells 7195." }
  - { id: R-9, publisher: Blockscout, title: "Token 0x96F10D7A…9aB4 Roaring Kitty / KITTY", url: "https://robinhoodchain.blockscout.com/tokens/0x96F10D7A43639B9c7e09aee5304C406670289aB4", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9], excerpt: "address_hash 0x96F10D7A43639B9c7e09aee5304C406670289aB4 name Roaring Kitty symbol KITTY decimals 18 total_supply 1000000000000000000000000000 holders_count 943 type ERC-20. Address is_contract true is_verified false. Distinct from GMERALD 0x3E4E7bbe…9458." }
  - { id: R-10, publisher: Blockscout, title: "Address 0x7eD5…EC7e PonsV2LaunchFactory", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-11, publisher: Blockscout, title: "Address 0xe33E…2948 PonsV2LaunchAndBuy", url: "https://robinhoodchain.blockscout.com/address/0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, EVT-2], excerpt: "hash 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 name PonsV2LaunchAndBuy is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36." }
  - { id: R-12, publisher: Blockscout, title: "Address 0xd08Da39D…DC15 PonsV2BondingCurve", url: "https://robinhoodchain.blockscout.com/address/0xd08Da39D027a7Cd12E1EAE45F72D15585034DC15", published_at: null, accessed_at: 2026-09-03T04:06:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0xd08Da39D027a7Cd12E1EAE45F72D15585034DC15 name PonsV2BondingCurve is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0x81e32486434ccc2642de7fbae86bfbc5f90746b519d93f6bf15db6b9ad119567." }
  - { id: R-13, publisher: Blockscout, title: "Token 0x1b0E…153E GameStop • Robinhood Token / GME", url: "https://robinhoodchain.blockscout.com/address/0x1b0E319c6A659F002271B69dB8A7df2F911c153E", published_at: null, accessed_at: 2026-09-03T04:05:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-9, CLM-15, CLM-21], excerpt: "hash 0x1b0E319c6A659F002271B69dB8A7df2F911c153E name BeaconProxy is_contract true is_verified true implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name GameStop • Robinhood Token symbol GME decimals 18 total_supply 101670096000000000000000 holders_count 35430. GME is the pair rail, not this profile." }
  - { id: R-14, publisher: Blockscout, title: "CurveCompleted / LaunchSwept tx 0x5ea7e9b3…56ed", url: "https://robinhoodchain.blockscout.com/tx/0x5ea7e9b35d853ee748773278164233cbd1a6c085814cce181fd64bb5daed56ed", published_at: 2026-09-02T20:11:47Z, accessed_at: 2026-09-03T04:08:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-22, EVT-3], excerpt: "timestamp 2026-09-02T20:11:47.000000Z status ok block_number 52846296 from 0xD8512F0B204399e41fCEC48971D8cdFa319371A8 to 0x65050A9b7E5075A2bA5cED7b1b64EE66262c40Dc. CurveCompleted recipient 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e quoteOut 369000000000000000023 tokenOut 285714285714285714285714285. LaunchSwept token 0x3E4E7bbe…9458." }

gaps:
  - { priority: P0, question: "Is there an official X handle or site that bidirectionally links to token 0x3E4E7bbe…9458?", checked: "DexScreener lists gmerald.xyz and x.com/gmeraldexe; constructor socials twitter/telegram set, website empty; no X or site fetch this pass (bounded), 2026-09-03", next: "open gmerald.xyz and the @gmeraldexe profile for a CA cross-link; re-read DexScreener after a Claim Profile" }
  - { priority: P1, question: "Why is live totalSupply 885124129620127602499036807 versus constructor supply_ 1e27?", checked: "Token is ERC20Burnable; description() He buys GameStop and burns himself. Forever.; no burn-tx enumeration this pass, 2026-09-03", next: "sum Burn logs / Transfer-to-zero on Blockscout and compare to 1e27 minus live totalSupply" }
  - { priority: P1, question: "Are the other robinhood Gmerald tickers (0x785Dcc33…, 0x83509E45…, 0xEc5C958e…) related deployers or copy tickers?", checked: "DexScreener search listed those CAs vs ETH with no info.socials; this packet is 0x3E4E7bbe…9458 only, 2026-09-03", next: "one Blockscout name/creator pass on those three CAs" }
  - { priority: P2, question: "Which window printed the assignment lead of ~$58,206 liq / ~$2,077,175 vol?", checked: "Live DexScreener 85277.92 / 2178463.68; Gecko pool reserve 102954.42 / vol 2297336.16 at 2026-09-03T04:07Z", next: "keep the DexScreener GMERALD/GME pair slice; do not use Gecko pool fdv_usd 1.95M as GMERALD fdv" }
---

# GMERALD — research packet

## What it is

A one-billion-supply Pons v2 ERC-20 that graduated into a Uniswap v4 GMERALD/GME pool. Traders buy and sell GMERALD against the GameStop • Robinhood Token on that book. GME is the quote rail, not this profile. No official site or handle was confirmed this pass.

Themes: memecoin, stock-paired:GME, rwa, launchpad

## Why it matters

The GMERALD/GME Uniswap v4 book printed about $2.30M of 24h volume on Gecko at collection, with the quote leg the workbook GME Stock Token 0x1b0E…153E. KITTY/GME is a different token (Roaring Kitty 0x96F10D7A…9aB4). DexScreener search also lists other robinhood Gmerald tickers versus ETH and Solana rows with the same ticker.

## What could go wrong

USD liquidity figures on the GMERALD/GME book count both sides, and the quote side is GME, not USDG. Gecko names the pool GME/GMERALD and prints pool fdv on the GME base. DexScreener lists gmerald.xyz and x.com/gmeraldexe, but the on-chain website field is empty and no bidirectional handle check ran this pass, so comms stay unconfirmed-official. Live totalSupply is below the 1e27 constructor mint.

## Product and mechanics

PonsV2LaunchAndBuy 0xe33E…2948 launchAndBuy from 0x9a3ae500…bdBF at 2026-09-02T20:10:47Z minted Gmerald / GMERALD supply 1e9*1e18 onto PonsV2BondingCurve 0xd08Da39D…DC15 quoted against pairToken GME 0x1b0E…153E with quoteIn 21e18. factory TokenLaunched names PonsV2LaunchFactory 0x7eD5…EC7e and graduationThreshold 369e18. [verified R-4 R-5 R-6]

CurveCompleted / LaunchSwept tx 0x5ea7e9b3…56ed at 2026-09-02T20:11:47Z swept quoteOut 369e18 GME and tokenOut 285714285714285714285714285. DexScreener pairCreatedAt 2026-09-02T20:12:23Z for Uniswap v4 GMERALD/GME 0xc47b5ee3…00ba. Gecko dex id pons-v2-dex. Secondary GMERALD/USDG and GMERALD/ETH books exist on DexScreener with far less liquidity than the GME book. [verified R-7 R-8 R-14]

## Control and security

token owner() reverts. Verified PonsV2LauncherToken source says deployer is immutable reference data with no privileges. Deployer 0x9a3ae500…bdBF has no code. launchFactory and curve are set at construction. [verified R-2 R-5]

PonsV2LauncherToken, PonsV2LaunchDeployer, PonsV2LaunchFactory, PonsV2LaunchAndBuy, and PonsV2BondingCurve are verified on Blockscout (compiler v0.8.35). No audit report URL was located this pass. [verified R-2 R-3 R-10] [unknown]

## Team and provenance

No official domain or X handle was confirmed. Constructor socials encode https://x.com/gmeraldexe and https://t.me/GMERALDportal with website empty. DexScreener lists those plus https://www.gmerald.xyz/. Flag unconfirmed-official. [claim R-2 R-4 R-7]

## Economics and activity

Gecko GME/GMERALD 24h volume is 2297336.16 USD and reserve_in_usd is 102954.42 at 2026-09-03T04:07:25Z from the Gecko pool endpoint. Gecko pool fdv_usd 1946574.29 uses GME as base. [claim R-8]

DexScreener same pair: liquidity.usd 85277.92, volume.h24 2178463.68, fdv/marketCap 1106505. Blockscout holders_count 802. Pair created 2026-09-02T20:12:23Z. Live totalSupply 885124129620127602499036807 versus constructor 1e27. [claim R-1 R-7]

Assignment lead of ~$58,206 liq / ~$2,077,175 vol was not reproduced at this as_of; live DexScreener is $85.3k / $2.18M and live Gecko reserve is $103k. [claim R-7 R-8]

## Material risks

- Quote token GME 0x1b0E…153E is a Robinhood Token rail; workbook and dossier GME addresses differ (0x1b0E…153E vs 0xD1C418…1379). [verified R-13]
- Pool USD reserve is GMERALD plus GME, not a USDG or WETH backstop. [claim R-7 R-8]
- No official handle or domain confirmed this pass; DexScreener site/socials are unconfirmed-official. [claim R-7]
- Same ticker on other robinhood CAs and on Solana. Distinct from KITTY/GME. [claim R-7 R-9]
- No audit report URL this pass. [unknown]

## Verification passes

- Receipts: Blockscout token/impl-source/factory/curve/GME/KITTY and both launch and CurveCompleted txs, RPC name/symbol/deployer/launchFactory/curve, DexScreener token, and one Gecko pool GET were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-8]
- Numbers: 2297336.16 is the Gecko GME/GMERALD pool 24h volume. Reserve 102954.42 is that pool. DexScreener 2178463.68 / 85277.92 is the same pair, different aggregator. Gecko pool fdv 1946574.29 is not the DexScreener token fdv 1106505. [claim R-7 R-8]
- Adversarial: the strongest contrary reading is that GMERALD is KITTY or the official GME product. KITTY is 0x96F10D7A…9aB4 named Roaring Kitty. GME 0x1b0E…153E is the pair rail named GameStop • Robinhood Token. This token is PonsV2LauncherToken 0x3E4E7bbe…9458. [inference R-1 R-9 R-13]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no gmerald / GMERALD / 0x3E4E7bbe…9458.
- Explorer: Blockscout api/v2 token, source, deployer, factory, curve, launchAndBuy, GME, KITTY, launchAndBuy 0x81e32486…9567, CurveCompleted 0x5ea7e9b3…56ed, TokenLaunched and LaunchSwept logs, holders. RPC eth_getCode/eth_call with Chrome UA at block 53123507.
- Aggregators: DexScreener latest/dex/search and latest/dex/tokens. One Gecko GET Mozilla UA: networks/robinhood/pools/0xc47b5ee3…00ba. No Gecko token GET, no retry.
- Social: none fetched this pass (bounded). Constructor and DexScreener URLs recorded as unconfirmed.
- Failed: token owner()/factory() revert (deployer()/launchFactory() used instead); Gecko pool fdv is GME-as-base; assignment liq/vol snapshot not reproduced live.
- Time: collection 2026-09-03T04:04Z–2026-09-03T04:10Z.
