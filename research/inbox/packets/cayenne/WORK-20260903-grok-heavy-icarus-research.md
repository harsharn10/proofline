---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: cayenne
name: CAYENNE
packet_tier: seed
as_of: 2026-09-03T03:43:12Z
prior_packet: null
supersedes: null
owned_slugs: [cayenne]
allowed_paths:
  - research/inbox/packets/cayenne/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: CAYENNE
  aliases: ["CAYENNEcoin"]
  symbols: [CAYENNE]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites and launchAndBuy website field list https://hntsam.com/; that origin is Invesco QQQ's How Not to Suck at Money NCAA education game with no CAYENNE contract in the HTML this pass; flag third-party-link"
  official_handle: "NULL — DexScreener info.socials and launchAndBuy twitter field name x.com/CAYENNEcoin_RH; bio posts truncated CA 0xad6629157a774007e46945bb1b6013c7 and a reply posted the full CA; the handle claims Invesco's game as origin; no Invesco or Robinhood reverse-link this pass; flag unconfirmed-official"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout, launch params, or the @CAYENNEcoin_RH bio this pass"
  possible_matches:
    - slug: what-the-hook
      signals: [other]
      contrary_signals:
        - "Census What The Hook is an MEV-redistribution hook at whatthehook.io / @whatthehookv4 with token WTH 0xb8Fa8010833463Aac5595b55B9045479239EfF79 and hook 0xc52fc52698479E42F0dA9a8a75296EC3871454c0"
        - "CAYENNE is CAYENNEcoin at 0xad6629157a774007E46945bb1B6013C79e7656C9 paired to QQQ 0xD5f3879160bc7c32ebb4dC785F8a4F505888de68 via Pons v2, not a WTH/QQQ token"
        - "No shared domain, handle, or reproduced address"
    - slug: pons
      signals: [shared-address, other]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily with v2 factory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
        - "CAYENNE is a token created through that factory via PonsV2LaunchAndBuy.launchAndBuy; entity_kind token, ecosystem_role graduation, not the pad"
        - "No shared domain or handle; @CAYENNEcoin_RH is not @ponsdotfamily"
    - slug: long
      signals: [other]
      contrary_signals:
        - "Census LONG is a stock-paired factory at app.long.xyz / @longdotxyz with LongLauncher 0x22e99278308B393ea1260859B181AD7E78f5eeED"
        - "CAYENNE is a Pons v2 launcher token paired to QQQ, not a LongLauncher output"
        - "No shared domain, handle, or reproduced address"
    - slug: bankr
      signals: [other]
      contrary_signals:
        - "Census Bankr is an agent execution surface at @bankrbot; desk map listed CQ/QQQ 0xFE995FAAE56956aD78833bf8cc26fa014E4D5BA3 as a Bankr graduation"
        - "CAYENNE is 0xad66…56C9 from Pons v2 factory 0x7eD5…EC7e, not the Bankr CQ token"
        - "No shared domain, handle, or reproduced address"
    - slug: jinqian
      signals: [other]
      contrary_signals:
        - "Packed JINQIAN is Money Mushroom at 0xe81880c1C5054245e036359f5c7be31606E79F56 paired to FAMI via LaunchpadFactory 0x160Ea85a96DF909EAC3f79b14c7A69200ceb4898"
        - "CAYENNE is CAYENNEcoin at 0xad66…56C9 paired to QQQ via Pons v2"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xad66…56C9 has 3248 bytes of code on 4663; launchFactory() returns Pons v2 factory 0x7eD5…EC7e; launchAndBuy tx 0x4c21…7282 on 2026-09-02 quoted QQQ 0xD5f3…de68, which GET /rhj/assets lists as Invesco QQQ • Robinhood Token. factory.approvedPairTokens(QQQ) is true; getLaunchedToken.phase is PoolCreated. Token source is not verified. Stock QQQ is the pair rail, not the subject. [R-1] [R-3] [R-4] [R-6] [R-8] [R-12]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15, CLM-22], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10, CLM-23], note: "" }

links:
  - { kind: x, url: "https://x.com/CAYENNEcoin_RH", authenticity: unconfirmed }
  - { kind: site, url: "https://hntsam.com/", authenticity: unconfirmed }

deployments:
  - label: CAYENNE token (CAYENNEcoin)
    role: token
    address:
      value: "0xad6629157a774007E46945bb1B6013C79e7656C9"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:37:00Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-3, R-5]
  - label: Pons v2 launch factory (launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-6, R-16]
  - label: PonsV2LaunchAndBuy (launchAndBuy)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:41:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5]
  - label: QQQ Invesco QQQ • Robinhood Token (pair quote)
    role: token
    address:
      value: "0xD5f3879160bc7c32ebb4dC785F8a4F505888de68"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:37:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-12, R-3]
  - label: Pons v2 bonding curve for CAYENNE
    role: other
    address:
      value: "0x2495573d25BDEf5D2609a0671c7868C95Ef058Fb"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:40:45Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-5, R-6]
  - label: V2LaunchLocker (token holder)
    role: vault
    address:
      value: "0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:38:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-17, R-6]

metrics:
  - { kind: volume_24h, value: 6785081.72, currency: USD, as_of: 2026-09-03T03:43:12Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2ebab943df888b4ed2beccbfd173d717cbb0787a6ad25e928bc86bf11eefe484 volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 45306.86, currency: USD, as_of: 2026-09-03T03:43:12Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2ebab943…e484 reserve_in_usd (CAYENNE/QQQ pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 307129.88, currency: USD, as_of: 2026-09-03T03:43:12Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2ebab943…e484 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 6872571.53, currency: USD, as_of: 2026-09-03T03:42:28Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xad66…56C9 pair 0x2ebab943…e484 CAYENNE/QQQ volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 44046.45, currency: USD, as_of: 2026-09-03T03:42:28Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xad66…56C9 pair 0x2ebab943…e484 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 287346, currency: USD, as_of: 2026-09-03T03:42:28Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xad66…56C9 pair 0x2ebab943…e484 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 2361, currency: null, as_of: 2026-09-03T03:42:28Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xad66…56C9 holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:37:46Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a55e2 (53106146) then 0x32a625f (53109343). Token 0xad66…56C9 eth_getCode 3248 bytes, not EIP-1167. name() CAYENNEcoin; symbol() CAYENNE; decimals 18; totalSupply 1e27; owner() reverted." }
  - { id: REP-2, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:43:11Z, receipt_ids: [R-3, R-6], result: "launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; deployer() 0xB3FcFE5dC6062820EF854A473231ddA38A28Ef9E (eth_getCode 0x); description() The memecoin hidden inside Invesco QQQ’s official game. Coded at $455 per coin. $CAYENNE paired with $QQQ. Rewards in $QQQ; logo() ipfs://QmQAaJD2JyJfvF6CCqfAyF2uzUeFeiacqU9mf4vTnFjNyC. QQQ 0xD5f3…de68 eth_getCode 283 bytes; name Invesco QQQ • Robinhood Token; symbol QQQ; decimals 18; totalSupply 474386e18." }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:39:42Z, receipt_ids: [R-6, R-16], result: "block 53107296. factory.approvedPairTokens(QQQ) true. getLaunchedToken(0xad66…56C9): token 0xad66…56C9 curve 0x2495573d25BDEf5D2609a0671c7868C95Ef058Fb deployer 0xB3Fc…Ef9E creatorFeeRecipient 0xe4deA0485d98c3Ed0C7dcEA52C4d69017B611FD0 pairToken 0xD5f3…de68 graduationThreshold 11146474875652736535 poolFee 0 tickSpacing 200 creatorTaxBps 0 buybackEnabled 0 phase 2 PoolCreated exists 1. pairTokenEconomics(QQQ) phantomQuote 4458589950261094614 graduationThreshold same decimals 18. memeHook 0xE5e7…e044 locker 0x2674…4952 owner 0x263e…19Dd poolManager 0x8366…0951." }
  - { id: REP-4, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:41:26Z, receipt_ids: [R-1, R-2, R-4, R-5, R-18], result: "Blockscout api/v2 token 0xad66…56C9 name CAYENNEcoin is_contract true is_verified false proxy_type null creator_address_hash null creation_transaction_hash null; symbol CAYENNE holders_count 2361–2377 this pass total_supply 1e27 type ERC-20. Tx 0x4c21…7282 2026-09-02T21:19:08Z block 52885312 from EOA 0xB3Fc…Ef9E to PonsV2LaunchAndBuy 0xe33E…2948 method launchAndBuy name CAYENNEcoin symbol CAYENNE website https://hntsam.com twitter https://x.com/CAYENNEcoin_RH/status/2095260177977036880 pairToken QQQ quoteIn 67395181576645038. TokenLaunched token 0xad66…56C9 curve 0x2495…58Fb. Tx 0x0bdc…d77c 2026-09-02T21:19:46Z block 52885676 from 0x49Bb…73d2 to factory createGraduatedPool(token 0xad66…56C9)." }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T03:42:28Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0xad66…56C9: 30 pairs. Top robinhood uniswap v4 CAYENNE/QQQ 0x2ebab943…e484 quote Invesco QQQ • Robinhood Token / QQQ 0xD5f3…de68 liquidity.usd 44046.45 volume.h24 6872571.53 fdv/marketCap 287346 pairCreatedAt 1788383986000 (2026-09-02T21:19:46Z) info.websites https://hntsam.com/ info.socials https://x.com/CAYENNEcoin_RH. Search also listed other robinhood CAYENNEcoin CAs ending 56C9 and Solana CAYENNE mints." }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-03T03:43:12Z, receipt_ids: [R-8, R-9], result: "Gecko pool CAYENNE / QQQ 0x2ebab943…e484 pool_created_at 2026-09-02T21:19:46Z volume_usd.h24 6785081.72 reserve_in_usd 45306.86 fdv_usd 307129.88 market_cap_usd null dex pons-v2-dex. Gecko token volume_usd.h24 8711317.77 fdv_usd 281026.84 total_reserve_in_usd 54621.07 (all-pools, not the QQQ book). launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T21:19:46Z migrated_destination_pool_address 0x2ebab943…e484. networks/robinhood/pools page 1 first five had no CAYENNE." }
  - { id: REP-7, method: api, checked_at: 2026-09-03T03:37:44Z, receipt_ids: [R-12], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one QQQ hit: tokenSymbol QQQ tokenName Invesco QQQ • Robinhood Token contractAddress 0xD5f3879160bc7c32ebb4dC785F8a4F505888de68 chainId 4663 status ASSET_STATUS_ACTIVE isin US46090E1038." }
  - { id: REP-8, method: official-crosslink, checked_at: 2026-09-03T03:41:26Z, receipt_ids: [R-4, R-7, R-13, R-14, R-15], result: "launchAndBuy socials twitter https://x.com/CAYENNEcoin_RH/status/2095260177977036880 website https://hntsam.com. DexScreener info matches those two URLs. hntsam.com title How Not to Suck at Money – Sponsored by Invesco QQQ; CSP frame-ancestors self *.hntsam.com *.invesco.com; no 0xad66… and no CAYENNE string in the HTML. @CAYENNEcoin_RH bio truncated CA plus QQQ-game claim; post 2095260177977036880 at 2026-09-02T21:18:49Z; reply 2095260472681320813 posted the full CA. api.llama.fi/protocols 8169 rows, 0 cayenne hits." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Pons v2 launch: launchAndBuy mints a 1e9-supply ERC-20 onto a bonding curve quoted against an owner-approved pair token, then createGraduatedPool seeds a Uniswap v4 pool. CAYENNE used pairToken QQQ, quoteIn 67395181576645038 (~0.0674 QQQ), launchConfigId 0; getLaunchedToken.phase is PoolCreated (enum 2). creatorTaxBps 0, buybackEnabled false, poolFee 0, tickSpacing 200", class: verified, observed_at: 2026-09-03T03:43:11Z, receipt_ids: [R-4, R-5, R-6, R-16, R-18], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "CAYENNEcoin", class: verified, observed_at: 2026-09-03T03:37:46Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "CAYENNE", class: verified, observed_at: 2026-09-03T03:37:46Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xad6629157a774007E46945bb1B6013C79e7656C9", class: verified, observed_at: 2026-09-03T03:37:46Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T03:39:42Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-2, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:41:26Z, receipt_ids: [R-1, R-3, R-4, R-8], reproduction_ids: [REP-1, REP-4, REP-6], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:43:12Z, receipt_ids: [R-4, R-7, R-8, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "NULL — DexScreener and launchAndBuy name @CAYENNEcoin_RH; no Invesco/Robinhood reverse-link; flag unconfirmed-official", class: claim, observed_at: 2026-09-03T03:41:26Z, receipt_ids: [R-4, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pad is Pons v2 (factory 0x7eD5…EC7e, LaunchAndBuy 0xe33E…2948). Distinct from census Pons as a protocol row and from LONG / Bankr / What The Hook. Do not merge with slug pons or what-the-hook. This is not a WTH/QQQ token.", class: verified, observed_at: 2026-09-03T03:41:26Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko CAYENNE/QQQ Uniswap v4 24h volume 6785081.72 USD and reserve_in_usd 45306.86 at 2026-09-03T03:43:12Z (pool slice, not Gecko token all-pools volume 8711317.77)", class: verified, observed_at: 2026-09-03T03:43:12Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 44046.45 volume.h24 6872571.53 fdv/marketCap 287346 at 2026-09-03T03:42:28Z", class: verified, observed_at: 2026-09-03T03:42:28Z, receipt_ids: [R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 2361, class: verified, observed_at: 2026-09-03T03:42:28Z, receipt_ids: [R-2], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() on the token reverted; deployer() is EOA 0xB3FcFE5dC6062820EF854A473231ddA38A28Ef9E; launchFactory() is Pons v2 factory 0x7eD5…EC7e", class: verified, observed_at: 2026-09-03T03:43:11Z, receipt_ids: [R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "factory owner() 0x263ed295dAFaE1d9AAdD6E56c4B6F9f38eE019Dd (Pons Safe); getLaunchFeePolicy protocolFeeRecipient that Safe, protocolFeeShareBps 3000, buybackBurnBps 5000, hookFeeBps 100; creatorFeeRecipient 0xe4deA0485d98c3Ed0C7dcEA52C4d69017B611FD0", class: verified, observed_at: 2026-09-03T03:39:42Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-15, field: other, value: "Pair asset is QQQ 0xD5f3879160bc7c32ebb4dC785F8a4F505888de68; venue is Uniswap v4 PoolManager 0x8366…0951 pool 0x2ebab943…e484 created 2026-09-02T21:19:46Z via createGraduatedPool; Gecko dex id pons-v2-dex. Stock QQQ is the rail, not the subject.", class: verified, observed_at: 2026-09-03T03:43:12Z, receipt_ids: [R-4, R-6, R-7, R-8, R-18], reproduction_ids: [REP-3, REP-5, REP-6], supersedes: null }
  - { id: CLM-16, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:37:46Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-17, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, hntsam.com, the X profile, or Pons v2 docs this pass; Pons v2 docs say treat v2 as unaudited until reports are published", class: claim, observed_at: 2026-09-03T03:43:12Z, receipt_ids: [R-19], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: identity.domain, value: "NULL — DexScreener/launchAndBuy website https://hntsam.com/ is Invesco QQQ's education game; flag third-party-link", class: claim, observed_at: 2026-09-03T03:37:44Z, receipt_ids: [R-4, R-7, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "unconfirmed-official: launchAndBuy and DexScreener name @CAYENNEcoin_RH; the handle posted a truncated CA in bio and the full CA in a reply; no Invesco reverse-link", class: claim, observed_at: 2026-09-03T03:41:26Z, receipt_ids: [R-4, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: communications.status, value: "third-party-link: https://hntsam.com/ title How Not to Suck at Money – Sponsored by Invesco QQQ; no CA in HTML; CSP lists *.invesco.com", class: claim, observed_at: 2026-09-03T03:37:44Z, receipt_ids: [R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: communications.status, value: "copypasta-pattern: X post 2095350850432451051 linked crypto-keo.netlify.app/claim?contract=0xad6629157a774007E46945bb1B6013C79e7656C9; Blockscout search lists additional CAYENNEcoin tickers at 0x5179…56c9 0x2100…56C9 0x6C57…56C9 0xafF4…56c9 with ~128–135 holders each", class: claim, observed_at: 2026-09-03T03:40:00Z, receipt_ids: [R-20, R-21], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: relationship, value: "Quote token QQQ 0xD5f3…de68 is in GET /rhj/assets (194 assets) as Invesco QQQ • Robinhood Token, chainId 4663, ASSET_STATUS_ACTIVE, isin US46090E1038. Same address as content/dependencies/stock-tokens.yaml QQQ row. CAYENNE is not in that registry.", class: verified, observed_at: 2026-09-03T03:37:44Z, receipt_ids: [R-10, R-12], reproduction_ids: [REP-2, REP-7], supersedes: null }
  - { id: CLM-23, field: taxonomy.mechanism-tag, value: stock-paired, class: verified, observed_at: 2026-09-03T03:39:42Z, receipt_ids: [R-4, R-6, R-12], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-24, field: other, value: "factory.approvedPairTokens(0xD5f3…de68) returns true this pass", class: verified, observed_at: 2026-09-03T03:39:42Z, receipt_ids: [R-6], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0xD5f3879160bc7c32ebb4dC785F8a4F505888de68", class: verified, observed_at: 2026-09-03T03:37:46Z, receipt_ids: [R-10, R-12], reproduction_ids: [REP-2, REP-7], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", class: verified, observed_at: 2026-09-03T03:41:26Z, receipt_ids: [R-4], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-27, field: identity.alias, value: "CAYENNEcoin", class: verified, observed_at: 2026-09-03T03:37:46Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-28, field: candidate, value: "cayenne | CAYENNE | NULL | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:43:12Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: other, value: "Token 0xad66…56C9 is_verified false on Blockscout this pass; creator_address_hash and creation_transaction_hash were null on the address API; launchFactory() and TokenLaunched identify Pons v2. Bytecode 3248 bytes, same length as verified PonsV2LauncherToken DTF 0xeE55…eb01 but not equal.", class: verified, observed_at: 2026-09-03T03:41:26Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-4], supersedes: null }
  - { id: CLM-30, field: economics.metric, value: "Gecko fdv_usd 307129.88; DexScreener fdv/marketCap 287346. Gecko market_cap_usd null.", class: verified, observed_at: 2026-09-03T03:43:12Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-5, REP-6], supersedes: null }
  - { id: CLM-31, field: "account.@CAYENNEcoin_RH.role", value: project, class: claim, observed_at: 2026-09-03T03:41:26Z, receipt_ids: [R-4, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-32, field: "account.@CAYENNEcoin_RH.slug", value: cayenne, class: claim, observed_at: 2026-09-03T03:41:26Z, receipt_ids: [R-4, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-33, field: "account.@CAYENNEcoin_RH.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T03:41:26Z, receipt_ids: [R-4, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-34, field: deployment.address, value: "0x2495573d25BDEf5D2609a0671c7868C95Ef058Fb", class: verified, observed_at: 2026-09-03T03:40:45Z, receipt_ids: [R-5, R-6], reproduction_ids: [REP-3, REP-4], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "CAYENNE/QQQ 24h volume is 6785081.72 on Gecko and 6872571.53 on DexScreener; reserve/liquidity is 45306.86 vs 44046.45. A card that collapses them would misstate activity"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-10, CLM-30]
    material_effect: "Gecko pool fdv_usd 307129.88 vs DexScreener fdv/marketCap 287346; market_cap_usd is null on Gecko"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Pons v2 launchAndBuy minted CAYENNEcoin against QQQ"
    summary: "Tx 0x4c21…7282 from 0xB3Fc…Ef9E at 2026-09-02T21:19:08Z created CAYENNEcoin / CAYENNE with pairToken QQQ 0xD5f3…de68 and quoteIn ~0.0674 QQQ. TokenLaunched curve 0x2495…58Fb."
    occurred_at: 2026-09-02T21:19:08Z
    observed_at: 2026-09-03T03:41:26Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5]
  - id: EVT-2
    type: onchain
    title: "createGraduatedPool seeded CAYENNE/QQQ Uniswap v4"
    summary: "Tx 0x0bdc…d77c at 2026-09-02T21:19:46Z called createGraduatedPool(0xad66…56C9). Pool 0x2ebab943…e484 created at that timestamp. getLaunchedToken.phase is PoolCreated. Gecko launchpad_details completed true."
    occurred_at: 2026-09-02T21:19:46Z
    observed_at: 2026-09-03T03:41:26Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-8, R-9, R-18]
  - id: EVT-3
    type: onchain
    title: "Gecko CAYENNE/QQQ 24h volume $6.79M, reserve $45.3k"
    summary: "Gecko pool 0x2ebab943…e484 volume_usd.h24 6785081.72 reserve_in_usd 45306.86 fdv_usd 307129.88. DexScreener same pair volume.h24 6872571.53 liquidity.usd 44046.45."
    occurred_at: 2026-09-03T03:43:12Z
    observed_at: 2026-09-03T03:43:12Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-4
    type: ct
    title: "@CAYENNEcoin_RH posted the Invesco QQQ game clip and CA"
    summary: "Post 2095260177977036880 at 2026-09-02T21:18:49Z claimed Nasdaq-100 QQQ's How Not to Suck at Money game hides a fictional CAYENNEcoin NPC line. Reply 2095260472681320813 posted 0xad6629157a774007e46945bb1b6013c79e7656c9. Launch tx followed 19 seconds after the first post."
    occurred_at: 2026-09-02T21:18:49Z
    observed_at: 2026-09-03T03:41:26Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: material
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-13]
  - id: EVT-5
    type: ct
    title: "Third-party claim portal posted against the CAYENNE CA"
    summary: "@SunilRa79901862 posted crypto-keo.netlify.app/claim?contract=0xad66…56C9. Flag copypasta-pattern."
    occurred_at: 2026-09-03T03:19:07Z
    observed_at: 2026-09-03T03:40:00Z
    affected_fields: [communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-20]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0xad66…56C9 CAYENNEcoin", url: "https://robinhoodchain.blockscout.com/address/0xad6629157a774007E46945bb1B6013C79e7656C9", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-28, CLM-29], excerpt: "hash 0xad6629157a774007E46945bb1B6013C79e7656C9 name CAYENNEcoin is_contract true is_verified false proxy_type null implementations [] creator_address_hash null creation_transaction_hash null. token name CAYENNEcoin symbol CAYENNE decimals 18 holders_count 2377 then 2361 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xad66…56C9 holders_count", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xad6629157a774007E46945bb1B6013C79e7656C9", published_at: null, accessed_at: 2026-09-03T03:42:28Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-12], excerpt: "name CAYENNEcoin symbol CAYENNE decimals 18 type ERC-20 holders_count 2361 total_supply 1000000000000000000000000000 address_hash 0xad6629157a774007E46945bb1B6013C79e7656C9 exchange_rate null circulating_market_cap null volume_24h null." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory, deployer", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:43:11Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-16, CLM-29], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32a55e2 (53106146) then 0x32a625f (53109343). Token code 3248 bytes. name CAYENNEcoin symbol CAYENNE decimals 18 totalSupply 1e27. owner() revert. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. deployer() 0xB3FcFE5dC6062820EF854A473231ddA38A28Ef9E. QQQ code 283 B name Invesco QQQ • Robinhood Token." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0x4c21e336…7282", url: "https://robinhoodchain.blockscout.com/tx/0x4c21e3369eaa5e2aa719ce4cedf0508be8db4e4814617c405824982f5ccf7282", published_at: 2026-09-02T21:19:08Z, accessed_at: 2026-09-03T03:41:26Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-6, CLM-8, CLM-9, CLM-15, CLM-18, CLM-19, CLM-23, CLM-26, CLM-31, EVT-1], excerpt: "timestamp 2026-09-02T21:19:08.000000Z block 52885312 status ok from 0xB3FcFE5dC6062820EF854A473231ddA38A28Ef9E to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. name CAYENNEcoin symbol CAYENNE twitter https://x.com/CAYENNEcoin_RH/status/2095260177977036880 website https://hntsam.com pairToken 0xD5f3879160bc7c32ebb4dC785F8a4F505888de68 quoteIn 67395181576645038." }
  - { id: R-5, publisher: Blockscout, title: "TokenLaunched log on launchAndBuy tx", url: "https://robinhoodchain.blockscout.com/tx/0x4c21e3369eaa5e2aa719ce4cedf0508be8db4e4814617c405824982f5ccf7282", published_at: 2026-09-02T21:19:08Z, accessed_at: 2026-09-03T03:41:26Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-9, CLM-29, CLM-34, EVT-1], excerpt: "TokenLaunched on PonsV2LaunchFactory 0x7eD5…EC7e: token 0xad6629157a774007E46945bb1B6013C79e7656C9 curve 0x2495573d25BDEf5D2609a0671c7868C95Ef058Fb deployer 0xB3FcFE5dC6062820EF854A473231ddA38A28Ef9E pairToken 0xD5f3879160bc7c32ebb4dC785F8a4F505888de68 launchConfigId 0 graduationThreshold 11146474875652736535. Launched quoteSpent 67395181576645038 tokensReceived 14744009219837698522010290." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "getLaunchedToken and approvedPairTokens", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:39:42Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-14, CLM-15, CLM-23, CLM-24, EVT-2], excerpt: "block 53107296. approvedPairTokens(QQQ 0xD5f3…de68) true. getLaunchedToken(0xad66…56C9) pairToken 0xD5f3…de68 phase 2 PoolCreated exists 1 graduationThreshold 11146474875652736535 poolFee 0 tickSpacing 200 creatorTaxBps 0 buybackEnabled 0 deployer 0xB3Fc…Ef9E curve 0x2495…58Fb. factory owner 0x263e…19Dd memeHook 0xE5e7…e044 locker 0x2674…4952." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens CAYENNE", url: "https://api.dexscreener.com/latest/dex/tokens/0xad6629157a774007E46945bb1B6013C79e7656C9", published_at: null, accessed_at: 2026-09-03T03:42:28Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-15, CLM-16, CLM-18, CLM-19, CLM-28, CLM-30, EVT-3], excerpt: "30 pairs. Top pairAddress 0x2ebab943df888b4ed2beccbfd173d717cbb0787a6ad25e928bc86bf11eefe484 labels v4 base CAYENNEcoin / CAYENNE quote Invesco QQQ • Robinhood Token / QQQ 0xD5f3879160bc7c32ebb4dC785F8a4F505888de68 liquidity.usd 44046.45 volume.h24 6872571.53 fdv 287346 pairCreatedAt 1788383986000. info.websites https://hntsam.com/ socials x.com/CAYENNEcoin_RH." }
  - { id: R-8, publisher: GeckoTerminal, title: "CAYENNE/QQQ Pons v2 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x2ebab943df888b4ed2beccbfd173d717cbb0787a6ad25e928bc86bf11eefe484", published_at: null, accessed_at: 2026-09-03T03:43:12Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-15, CLM-30, EVT-2, EVT-3], excerpt: "name CAYENNE / QQQ pool_created_at 2026-09-02T21:19:46Z fdv_usd 307129.8777 market_cap_usd null volume_usd.h24 6785081.71717599 reserve_in_usd 45306.8647. dex pons-v2-dex quote robinhood_0xd5f3879160bc7c32ebb4dc785f8a4f505888de68. transactions.h24 buys 16029 sells 14093." }
  - { id: R-9, publisher: GeckoTerminal, title: "CAYENNEcoin token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xad6629157a774007e46945bb1b6013c79e7656c9", published_at: null, accessed_at: 2026-09-03T03:42:28Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10, EVT-2], excerpt: "name CAYENNEcoin symbol CAYENNE decimals 18 total_supply 1e27 normalized_total_supply 1000000000.0 price_usd 0.0002810268422 fdv_usd 281026.842160855 market_cap_usd null volume_usd.h24 8711317.76966633 total_reserve_in_usd 54621.07. launchpad_details graduation_percentage 100 completed true completed_at 2026-09-02T21:19:46.000Z migrated_destination_pool_address 0x2ebab943…e484. coingecko_coin_id null." }
  - { id: R-10, publisher: Blockscout, title: "Address 0xD5f3…de68 QQQ", url: "https://robinhoodchain.blockscout.com/address/0xD5f3879160bc7c32ebb4dC785F8a4F505888de68", published_at: null, accessed_at: 2026-09-03T03:37:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15, CLM-22, CLM-25], excerpt: "hash 0xD5f3879160bc7c32ebb4dC785F8a4F505888de68 name BeaconProxy is_contract true is_verified true proxy_type eip1967_beacon creator_address_hash 0x4783C67b63dE2B358Ac5951a7D41F47A38F3C046. implementations Stock 0xb35490d6f9163DE4F80d88dc75c3516eb64C5aE2. token name Invesco QQQ • Robinhood Token symbol QQQ decimals 18 holders_count 15821 total_supply 4743860000000000000000 type ERC-20." }
  - { id: R-11, publisher: GeckoTerminal, title: "CAYENNE/QQQ pool page", url: "https://www.geckoterminal.com/robinhood/pools/0x2ebab943df888b4ed2beccbfd173d717cbb0787a6ad25e928bc86bf11eefe484", published_at: null, accessed_at: 2026-09-03T03:43:12Z, kind: third-party-data, authority: aggregator, authenticity: unconfirmed, supports: [], excerpt: "CAYENNE / QQQ pool 0x2ebab943…e484 on network robinhood." }
  - { id: R-12, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:37:44Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-22, CLM-25], excerpt: "HTTP 200. assets length 194. One QQQ hit: tokenSymbol QQQ tokenName Invesco QQQ • Robinhood Token contractAddress 0xD5f3879160bc7c32ebb4dC785F8a4F505888de68 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE isin US46090E1038 tokenDecimals 18." }
  - { id: R-13, publisher: "@CAYENNEcoin_RH", title: "How Not to Suck at Money clip and CA", url: "https://x.com/CAYENNEcoin_RH/status/2095260177977036880", published_at: 2026-09-02T21:18:49Z, accessed_at: 2026-09-03T03:41:26Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-19, CLM-31, CLM-32, CLM-33, EVT-4], excerpt: "Display CAYENNEcoin handle @CAYENNEcoin_RH. Bio: The memecoin hidden inside Invesco QQQ’s official game. Coded at $455 per coin. $CAYENNE paired with $QQQ. Rewards in $QQQ 0xad6629157a774007e46945bb1b6013c7. Post: Nasdaq-100’s QQQ released an educational game called How Not to Suck at Money… fictional memecoin called CAYENNEcoin. Reply 2095260472681320813: 0xad6629157a774007e46945bb1b6013c79e7656c9." }
  - { id: R-14, publisher: Invesco QQQ, title: "hntsam.com How Not to Suck at Money", url: "https://hntsam.com/", published_at: null, accessed_at: 2026-09-03T03:37:44Z, kind: official-site, authority: independent, authenticity: confirmed, supports: [CLM-18, CLM-20], excerpt: "HTTP 200 AmazonS3/CloudFront. title How Not to Suck at Money – Sponsored by Invesco QQQ. og:description Learn more about important life lessons including budgeting, building credit, and investing. Sign-up to play the official financial education game of the NCAA. CSP frame-ancestors 'self' *.hntsam.com *.invesco.com. No 0xad662915 and cayenne_count 0 in HTML this pass." }
  - { id: R-15, publisher: DefiLlama, title: "protocols list cayenne scan", url: "https://api.llama.fi/protocols", published_at: null, accessed_at: 2026-09-03T03:41:26Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6], excerpt: "HTTP 200. protocols length 8169. name/slug scan for cayenne returned 0 hits this pass." }
  - { id: R-16, publisher: Blockscout, title: "PonsV2LaunchFactory verified source", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e?tab=contract", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5], excerpt: "name PonsV2LaunchFactory is_verified true file contracts/src/v2/PonsV2LaunchFactory.sol compiler v0.8.35. ABI includes approvedPairTokens(address), getLaunchedToken(address), launchToken, createGraduatedPool, setPairTokenApproved. Packed robloxians packet records ILaunchpadV2.sol enum GraduationPhase { NotGraduated, Swept, PoolCreated, Rescued }; phase 2 is PoolCreated." }
  - { id: R-17, publisher: Blockscout, title: "CAYENNE holders page", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xad6629157a774007E46945bb1B6013C79e7656C9/holders", published_at: null, accessed_at: 2026-09-03T03:38:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "Top holders: PoolManager 0x8366a39CC670B4001A1121B8F6A443A643e40951 value 99738564091392169543760060; V2LaunchLocker 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 value 81632653061224489586672636; 0x000…dEaD value 24747354505918561141080532." }
  - { id: R-18, publisher: Blockscout, title: "createGraduatedPool tx 0x0bdc953a…d77c", url: "https://robinhoodchain.blockscout.com/tx/0x0bdc953a2fa00438c792db12fb58a46089aa1db7afa56cf7367006dbe00cd77c", published_at: 2026-09-02T21:19:46Z, accessed_at: 2026-09-03T03:41:26Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-15, EVT-2], excerpt: "timestamp 2026-09-02T21:19:46.000000Z block 52885676 status ok from 0x49BbF2b70955Fb3a106e084D4BFDa92d334573d2 to PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e method createGraduatedPool(address token) token 0xad6629157a774007E46945bb1B6013C79e7656C9. PoolGraduated positionId 1563446 tokenAmount 204081632653061224699042477 pairTokenAmount 11146474875652736575." }
  - { id: R-19, publisher: Pons, title: "v2 docs", url: "https://docs.ponsfamily.com/docs/v2", published_at: null, accessed_at: 2026-09-03T03:43:12Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1, CLM-17], excerpt: "pons v2 is a launch protocol. A creator deploys a token, the public buys it from a bonding curve, and once the curve is bought out the launch graduates into a Uniswap v4 pool whose liquidity is locked permanently. A launch can be paired against any token pons has approved. No audit has closed. Treat v2 as unaudited until the reports are published here." }
  - { id: R-20, publisher: "@SunilRa79901862", title: "CAYENNE holders claim portal", url: "https://x.com/SunilRa79901862/status/2095350850432451051", published_at: 2026-09-03T03:19:07Z, accessed_at: 2026-09-03T03:40:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-21, EVT-5], excerpt: "No alpha thread needed $CAYENNE holders should just check wallet CA: 0xad6629157a774007E46945bb1B6013C79e7656C9 https://crypto-keo.netlify.app/claim?contract=0xad6629157a774007E46945bb1B6013C79e7656C9&cfg=evmdrop&pid=9V4eX" }
  - { id: R-21, publisher: Blockscout, title: "search q=CAYENNE", url: "https://robinhoodchain.blockscout.com/api/v2/search?q=CAYENNE", published_at: null, accessed_at: 2026-09-03T03:39:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-21], excerpt: "18 token hits. First CAYENNEcoin 0xad6629157a774007E46945bb1B6013C79e7656C9. Additional CAYENNEcoin CAs 0x517958EbF3394b13756502CA0cF5746D137756c9 holders 135; 0x2100CD6168edE3507617E11D52Da7E5957E656C9 holders 132; 0x6C571D9d651c6d87A7dFEde40Fd6bC492bE756C9 holders 132; 0xafF4E1cE97cA6FE5523F101B04E7D90B62B156c9 holders 128. Also Cayenne / CayEnne tickers at other addresses." }

gaps:
  - { priority: P0, question: "Does Invesco, Robinhood, or hntsam.com reverse-link to token 0xad66…56C9 or @CAYENNEcoin_RH?", checked: "hntsam.com HTML has no CA and no CAYENNE string; /rhj/assets lists QQQ not CAYENNE; DexScreener/launchAndBuy name the handle and hntsam one way, 2026-09-03", next: "re-read hntsam.com and any Invesco/Robinhood post that embeds the CA; keep official_handle and official_domain NULL until a reverse link exists" }
  - { priority: P1, question: "When did PonsV2LaunchFactory.setPairTokenApproved(QQQ) flip true?", checked: "approvedPairTokens(QQQ) true at block 53107296; the set tx was not opened, 2026-09-03", next: "search factory txs for setPairTokenApproved around 2026-09-02 and record the tx hash" }
  - { priority: P1, question: "Why is Blockscout creator_address_hash null, and does verified PonsV2LauncherToken source match this 3248-byte bytecode?", checked: "address API creator and creation tx null; is_verified false; bytecode 3248 bytes same length as verified DTF PonsV2LauncherToken 0xeE55…eb01 but not equal, 2026-09-03", next: "compare bytecode to current LaunchDeployer implementation; TokenLaunched already names the token" }
  - { priority: P2, question: "Are the other CAYENNEcoin 56C9-suffix tokens Pons clones or unrelated vanity deploys?", checked: "Blockscout search listed four additional CAYENNEcoin CAs with ~128–135 holders; DexScreener search showed ETH books on those CAs; bytecode of 0x5179…56c9 is 131 bytes not 3248, 2026-09-03", next: "eth_getCode and launchFactory() on each 56C9 CA; do not merge them with 0xad66…56C9" }
---

# CAYENNE — research packet

## What it is

A one-billion-supply ERC-20 launched on Pons v2 against the Invesco QQQ Robinhood Token. PonsV2LaunchAndBuy.launchAndBuy created CAYENNEcoin (CAYENNE) at 0xad66…56C9 on 2026-09-02, pairing it to QQQ 0xD5f3…de68; createGraduatedPool then seeded a Uniswap v4 CAYENNE/QQQ book. Traders buy and sell CAYENNE on that book. Stock QQQ is the pair rail, not the subject. No official site or handle was located this pass.

Themes: memecoin, stock-paired:QQQ, rwa

## Why it matters

Pons v2 accepts QQQ as an approved pair token, and this graduation used that rail the same evening it launched. GET /rhj/assets has an active QQQ Stock Token at the same address. Gecko’s CAYENNE/QQQ book printed about $6.79M of 24h volume at collection, with about $45.3k reserve.

## What could go wrong

USD reserve on the CAYENNE/QQQ book counts both sides, and the quote side is QQQ, not USDG. Token source is not verified on Blockscout. DexScreener lists Invesco’s hntsam.com as the website and @CAYENNEcoin_RH as socials; those surfaces stay third-party-link and unconfirmed-official.

## Product and mechanics

PonsV2LaunchAndBuy.launchAndBuy at 0xe33E…2948 from EOA 0xB3Fc…Ef9E at 2026-09-02T21:19:08Z minted CAYENNEcoin / CAYENNE supply 1e9*1e18 onto curve 0x2495…58Fb quoted against QQQ, with quoteIn 67395181576645038 (~0.0674 QQQ) and launchConfigId 0. TokenLaunched on factory 0x7eD5…EC7e names pairToken 0xD5f3…de68. [verified R-4 R-5 R-6]

createGraduatedPool(token 0xad66…56C9) from 0x49Bb…73d2 at 2026-09-02T21:19:46Z wrote PoolGraduated positionId 1563446. Uniswap v4 pool 0x2ebab943…e484 was created at that timestamp. launchFactory() on the token returns that Pons v2 factory. getLaunchedToken.phase is 2 PoolCreated. approvedPairTokens(QQQ) is true. Secondary CAYENNE/USDG and CAYENNE/ETH Uniswap v4 books exist on DexScreener with far less liquidity than the QQQ book. [verified R-3 R-6 R-7 R-18]

## Control and security

owner() on the token reverted. deployer() is EOA 0xB3Fc…Ef9E with no code. creatorFeeRecipient on the launch record is 0xe4de…1FD0. creatorTaxBps 0 and buybackEnabled false. factory owner() is Pons Safe 0x263e…19Dd. [verified R-3 R-6]

PonsV2LaunchFactory source is verified; the CAYENNE token is not. Pons v2 docs say treat v2 as unaudited until reports are published. No audit report URL was located this pass. [verified R-16] [claim R-19] [unknown]

## Team and provenance

launchAndBuy socials name https://x.com/CAYENNEcoin_RH/status/2095260177977036880 and website https://hntsam.com. DexScreener info.websites and info.socials match. hntsam.com is Invesco QQQ’s NCAA education game and does not publish the CA; flag third-party-link. @CAYENNEcoin_RH bio posts a truncated CA and claims the Invesco game as origin; a reply posted the full CA. No Invesco or Robinhood reverse-link this pass; official_handle stays NULL; flag unconfirmed-official. [claim R-4 R-7 R-13 R-14]

A same-ticker copypasta-pattern is visible: Blockscout search lists other CAYENNEcoin contracts with the 56C9 suffix and ~128–135 holders, and an X post pointed a netlify claim portal at 0xad66…56C9. [claim R-20 R-21]

## Economics and activity

CAYENNE/QQQ Uniswap v4 24h volume is 6785081.72 USD and reserve_in_usd is 45306.86 at 2026-09-03T03:43:12Z from the Gecko pool endpoint. fdv_usd is 307129.88. Gecko token volume_usd.h24 is 8711317.77 across all pools, not the QQQ book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 44046.45, volume.h24 6872571.53, fdv/marketCap 287346. Blockscout holders_count 2361. Pair created 2026-09-02T21:19:46Z. [claim R-2 R-7]

Assignment lead of DexScreener liq ~$50,024 / vol ~$6,857,100 is close to this pass: live DexScreener liquidity $44.0k and 24h volume $6.87M; live Gecko reserve $45.3k and 24h volume $6.79M. [claim R-7 R-8]

## Material risks

- Token source is not verified on Blockscout; creator_address_hash was null on the address API. [verified R-1]
- Pool USD reserve is CAYENNE plus QQQ, not a USDG backstop. [claim R-7 R-8]
- Named handle and website are one-way; hntsam.com is an Invesco property. Flags unconfirmed-official and third-party-link. [claim R-13 R-14]
- Same-ticker CAYENNEcoin contracts and a netlify claim portal are copypasta-pattern, not this CA. [claim R-20 R-21]
- Pons v2 docs say treat v2 as unaudited until reports are published. [claim R-19]

## Verification passes

- Receipts: Blockscout token/QQQ/factory/launchAndBuy/createGraduatedPool txs, RPC name/symbol/launchFactory/getLaunchedToken/approvedPairTokens, DexScreener, Gecko pool/token, /rhj/assets, hntsam.com, @CAYENNEcoin_RH, Llama protocols, and the claim-portal post were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-4 R-8 R-12]
- Numbers: 6785081.72 is the Gecko CAYENNE/QQQ pool 24h volume, not the 8711317.77 token all-pools figure. Reserve 45306.86 is that pool. DexScreener 6872571.53 / 44046.45 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that CAYENNE is an official Invesco or Robinhood product, a WTH/QQQ token, or that it should merge with census Pons. /rhj/assets lists QQQ as a Stock Token, not CAYENNE; What The Hook’s WTH is 0xb8Fa…fF79; the token is a Pons v2 launch with a one-way handle; hntsam.com has no CA. [inference R-4 R-12 R-13 R-14]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no cayenne / CAYENNE / CAYENNEcoin / 0xad66…56C9. Packed packets include jinqian (FAMI LaunchpadFactory) and robloxians (Pons v2 / RBLX), not this CA.
- Explorer: Blockscout api/v2 token, QQQ, factory ABI/source, holders, search q=CAYENNE, launchAndBuy 0x4c21…7282, createGraduatedPool 0x0bdc…d77c, TokenLaunched and PoolGraduated logs. RPC eth_getCode/eth_call at blocks 53106146–53109343.
- Aggregators: DexScreener latest/dex/tokens and search (Mozilla UA); Gecko token, pool, token/pools, networks/robinhood/pools page 1 (Mozilla UA). Llama protocols 8169, 0 cayenne.
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 QQQ hit matching 0xD5f3…de68.
- Social: X Latest from:CAYENNEcoin_RH (handle is on the DexScreener token page); keyword CAYENNE 0xad662915; user search CAYENNEcoin returned unrelated handles. hntsam.com GET.
- Failed: Blockscout token creator_address_hash null; first factory() / launchFactory selector sweep reverted (wrong selector 0xc45a0155 / 0x5c0e81b1); correct launchFactory() is 0x536dac9b; t.co/fd8W7hayVk did not expose a Location header; ipfs.io/ipfs/QmQAaJD2Jy… returned a Cloudflare challenge; Gecko networks/robinhood/pools page 1 had no CAYENNE row.
- Time: collection 2026-09-03T03:37Z–2026-09-03T03:43Z.
