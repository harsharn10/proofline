---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: robloxians
name: ROBLOXIANS
packet_tier: seed
as_of: 2026-09-03T03:36:00Z
prior_packet: null
supersedes: null
owned_slugs: [robloxians]
allowed_paths:
  - research/inbox/packets/robloxians/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: ROBLOXIANS
  aliases: ["The Robloxians", "Robloxian Cult"]
  symbols: [ROBLOXIANS]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: "NULL — DexScreener info.websites empty; launchAndBuy website field empty; @RobloxiansPage profile has no website this pass"
  official_handle: "@RobloxiansPage"
  repository: "NULL — no GitHub org or repository URL on DexScreener, launch params, the X profile, Telegram preview, or Blockscout this pass"
  possible_matches:
    - slug: pons
      signals: [other]
      contrary_signals:
        - "Census Pons is the bonding-curve launchpad at ponsfamily.com / @ponsdotfamily with v2 factory 0x7eD5…EC7e"
        - "ROBLOXIANS is a token created through that factory via PonsV2LaunchAndBuy.launchAndBuy; entity_kind token, not protocol"
        - "No shared domain or handle; @RobloxiansPage is not @ponsdotfamily"
    - slug: artificial-inu
      signals: [other]
      contrary_signals:
        - "Census Artificial Inu is $AI paired to NVDA via LongLauncher at artificialinu.com / @ArtificiallyInu"
        - "ROBLOXIANS is paired to RBLX 0xF0C4…1bE8 via Pons v2, not LongLauncher"
        - "No shared domain, handle, or reproduced address"
    - slug: l4va
      signals: [other]
      contrary_signals:
        - "Census L4VA is a vault factory issuing tokens backed by locked RWAs"
        - "ROBLOXIANS is a Pons v2 launcher token in a Uniswap v4 ROBLOXIANS/RBLX pool"
        - "No shared domain, handle, or reproduced address"

classification:
  primary_leaf: rwa-products/stock-paired-token
  secondary_leaves: []
  mechanism_tags: [stock-paired, rwa, amm, launchpad, bonding-curve]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not in the 49-row census. Token 0xB528…c10D has non-empty code on 4663; launchFactory() returns Pons v2 factory 0x7eD5…EC7e; launchAndBuy tx 0xf7b5…0f39 on 2026-09-02 quoted RBLX 0xF0C4…1bE8, which GET /rhj/assets lists as Roblox • Robinhood Token. factory.approvedPairTokens(RBLX) is true; getLaunchedToken.phase is PoolCreated. Token source is not verified; @RobloxiansPage has not posted the CA this pass. [R-3] [R-4] [R-6] [R-8] [R-11] [R-13]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-14, CLM-22], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-4], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10, CLM-23], note: "" }

links:
  - { kind: x, url: "https://x.com/RobloxiansPage", authenticity: unconfirmed }
  - { kind: telegram, url: "https://t.me/robloxianscult", authenticity: unconfirmed }

deployments:
  - label: ROBLOXIANS token (The Robloxians)
    role: token
    address:
      value: "0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:29:50Z
      exists_on_4663: true
      explorer_source_verified: false
    receipt_ids: [R-1, R-3, R-4]
  - label: Pons v2 launch factory (launchFactory)
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:32:10Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-3, R-6, R-15]
  - label: PonsV2LaunchAndBuy (launchAndBuy)
    role: router
    address:
      value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:33:03Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5]
  - label: RBLX Roblox • Robinhood Token (pair quote)
    role: token
    address:
      value: "0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T03:31:09Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-10, R-11, R-4]

metrics:
  - { kind: volume_24h, value: 2929575.47, currency: USD, as_of: 2026-09-03T03:34:24Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3280b21b…1e07 ROBLOXIANS/RBLX volume_usd.h24", class: claim, receipt_ids: [R-8] }
  - { kind: tvl, value: 162471.64, currency: USD, as_of: 2026-09-03T03:34:24Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3280b21b…1e07 reserve_in_usd (ROBLOXIANS/RBLX pool, not an all-pools figure)", class: claim, receipt_ids: [R-8] }
  - { kind: market_cap, value: 3106120.44, currency: USD, as_of: 2026-09-03T03:34:24Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3280b21b…1e07 fdv_usd (market_cap_usd null)", class: claim, receipt_ids: [R-8] }
  - { kind: volume_24h, value: 3080396.49, currency: USD, as_of: 2026-09-03T03:30:26Z, window: 24h, method: "api.dexscreener.com/latest/dex/tokens/0xB528…c10D pair 0x3280b21b…1e07 ROBLOXIANS/RBLX volume.h24", class: claim, receipt_ids: [R-7] }
  - { kind: tvl, value: 178744.82, currency: USD, as_of: 2026-09-03T03:30:26Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xB528…c10D pair 0x3280b21b…1e07 liquidity.usd", class: claim, receipt_ids: [R-7] }
  - { kind: market_cap, value: 3681072, currency: USD, as_of: 2026-09-03T03:30:26Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xB528…c10D pair 0x3280b21b…1e07 fdv/marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 1964, currency: null, as_of: 2026-09-03T03:29:50Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xB528…c10D holders_count", class: claim, receipt_ids: [R-2] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:29:24Z, receipt_ids: [R-3], result: "rpc.mainnet.chain.robinhood.com eth_chainId 0x1237 (4663) eth_blockNumber 0x32a42e0 (53097184). Token 0xB528…c10D eth_getCode 3248 bytes. name() The Robloxians; symbol() ROBLOXIANS; decimals 18; totalSupply 1e27; owner() reverted; launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e; deployer() 0xD0d04c4F04873194aC24dc82891626DbfA44eFD3" }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:29:50Z, receipt_ids: [R-1, R-2, R-10], result: "Blockscout api/v2 token 0xB528…c10D name The Robloxians is_contract true is_verified false proxy_type null creator_address_hash null creation_transaction_hash null; token symbol ROBLOXIANS holders_count 1964 total_supply 1e27 type ERC-20. RBLX 0xF0C4…1bE8 name BeaconProxy is_verified true token name Roblox • Robinhood Token symbol RBLX holders_count 5322" }
  - { id: REP-3, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T03:34:24Z, receipt_ids: [R-6, R-15], result: "block 0x32a4e51 (53104209). factory.approvedPairTokens(RBLX) true; approvedPairTokens(ROBLOXIANS) false. getLaunchedToken(0xB528…c10D): token 0xB528…c10D curve 0x9E59…cC7f deployer 0xD0d0…eFD3 creatorFeeRecipient 0x3beC…aB77 pairToken 0xF0C4…1bE8 graduationThreshold 248921514629948368496 poolFee 0 tickSpacing 200 creatorTaxBps 0 buybackEnabled 0 phase 2 PoolCreated exists 1. canLaunch(deployer) true; whitelistedLaunchers(deployer) false. pairTokenEconomics(RBLX) graduationThreshold same, decimals 18" }
  - { id: REP-4, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T03:33:03Z, receipt_ids: [R-4, R-5], result: "Tx 0xf7b5fa06…0f39 block 52489024 2026-09-02T10:03:51Z from EOA 0xD0d0…eFD3 to PonsV2LaunchAndBuy 0xe33E…2948 method launchAndBuy. params name The Robloxians symbol ROBLOXIANS description Welcome to the home of the Robloxians, paired with $RBLX twitter https://x.com/RobloxiansPage telegram https://t.me/robloxianscult website empty pairToken 0xF0C4…1bE8 quoteIn 300e18 launchConfigId 0 creatorTaxBps 0 buybackEnabled false. TokenLaunched token 0xB528…c10D pairToken RBLX. Mint 1e27 to curve 0x9E59…cC7f. Prior approve 0x6eadd24a…4886 of 300 RBLX to LaunchAndBuy" }
  - { id: REP-5, method: api, chain_id: 4663, checked_at: 2026-09-03T03:30:26Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0xB528…c10D: 21 robinhood uniswap pairs. Top ROBLOXIANS/RBLX v4 0x3280b21b…1e07 quote Roblox • Robinhood Token / RBLX 0xF0C4…1bE8 liquidity.usd 178744.82 volume.h24 3080396.49 fdv/marketCap 3681072 pairCreatedAt 1788343433000 (2026-09-02T10:03:53Z) info.websites [] info.socials https://X.com/RobloxiansPage https://t.me/robloxianscult" }
  - { id: REP-6, method: api, chain_id: 4663, checked_at: 2026-09-03T03:34:24Z, receipt_ids: [R-8, R-9], result: "Gecko pool ROBLOXIANS / RBLX 0x3280b21b…1e07 pool_created_at 2026-09-02T10:03:53Z volume_usd.h24 2929575.47 reserve_in_usd 162471.64 fdv_usd 3106120.44 market_cap_usd null. Gecko token volume_usd.h24 3263009.57 fdv_usd 3105164.16 total_reserve_in_usd 101144.30 (all-pools reserve, not the RBLX book)" }
  - { id: REP-7, method: api, checked_at: 2026-09-03T03:33:03Z, receipt_ids: [R-11], result: "GET api.robinhood.com/rhj/assets HTTP 200; assets length 194; one RBLX hit: tokenSymbol RBLX tokenName Roblox • Robinhood Token contractAddress 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 chainId 4663 status ASSET_STATUS_ACTIVE isin US7710491033" }
  - { id: REP-8, method: official-crosslink, checked_at: 2026-09-03T03:34:00Z, receipt_ids: [R-4, R-7, R-13, R-14], result: "launchAndBuy socials twitter https://x.com/RobloxiansPage telegram https://t.me/robloxianscult website empty. DexScreener info.socials match those two URLs; info.websites []. @RobloxiansPage display Robloxian Cult, bio A page for all fellow Robloxians. All content is for meme purposes. Joined September 2026, 31 posts, 598 followers, no website, no CA in sampled posts. t.me/robloxianscult title ROBLOXIANS CULT, 672 members, description Welcome to the home of the Robloxians" }

claims:
  - { id: CLM-1, field: product.mechanism, value: "Pons v2 launch: launchAndBuy mints a 1e9-supply ERC-20 onto a bonding curve quoted against an owner-approved pair token, then graduates into a Uniswap v4 pool. ROBLOXIANS used pairToken RBLX, quoteIn 300e18, launchConfigId 0; getLaunchedToken.phase is PoolCreated (enum 2). creatorTaxBps 0, buybackEnabled false, poolFee 0, tickSpacing 200", class: verified, observed_at: 2026-09-03T03:34:24Z, receipt_ids: [R-4, R-5, R-6, R-15, R-16], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "The Robloxians", class: verified, observed_at: 2026-09-03T03:29:24Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "ROBLOXIANS", class: verified, observed_at: 2026-09-03T03:29:24Z, receipt_ids: [R-1, R-2, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D", class: verified, observed_at: 2026-09-03T03:29:50Z, receipt_ids: [R-1, R-3, R-4], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T03:32:10Z, receipt_ids: [R-3, R-5, R-6], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T03:29:50Z, receipt_ids: [R-1, R-3, R-4, R-8], reproduction_ids: [REP-1, REP-2, REP-4, REP-6], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: rwa-products/stock-paired-token, class: claim, observed_at: 2026-09-03T03:34:24Z, receipt_ids: [R-4, R-7, R-8, R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@RobloxiansPage", class: claim, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-4, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Pad is Pons v2 (factory 0x7eD5…EC7e, LaunchAndBuy 0xe33E…2948). Distinct from census Pons as a protocol row and from LONG / Artificial Inu. Do not merge with slug pons", class: verified, observed_at: 2026-09-03T03:33:03Z, receipt_ids: [R-4, R-5, R-6], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "Gecko ROBLOXIANS/RBLX Uniswap v4 24h volume 2929575.47 USD and reserve_in_usd 162471.64 at 2026-09-03T03:34:24Z (pool slice, not Gecko token all-pools volume 3263009.57)", class: verified, observed_at: 2026-09-03T03:34:24Z, receipt_ids: [R-8, R-9], reproduction_ids: [REP-6], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "DexScreener same pair liquidity.usd 178744.82 volume.h24 3080396.49 fdv/marketCap 3681072 at 2026-09-03T03:30:26Z", class: verified, observed_at: 2026-09-03T03:30:26Z, receipt_ids: [R-7], reproduction_ids: [REP-5], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 1964, class: verified, observed_at: 2026-09-03T03:29:50Z, receipt_ids: [R-2], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "owner() on the token reverted; deployer() is EOA 0xD0d04c4F04873194aC24dc82891626DbfA44eFD3; launchFactory() is Pons v2 factory 0x7eD5…EC7e", class: verified, observed_at: 2026-09-03T03:29:24Z, receipt_ids: [R-3], reproduction_ids: [REP-1], supersedes: null }
  - { id: CLM-14, field: product.mechanism, value: "Pair asset is RBLX 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 (Roblox • Robinhood Token); venue is Uniswap v4 pool 0x3280b21b…1e07 created 2026-09-02T10:03:53Z", class: verified, observed_at: 2026-09-03T03:34:24Z, receipt_ids: [R-4, R-7, R-8, R-10], reproduction_ids: [REP-3, REP-4, REP-5, REP-6], supersedes: null }
  - { id: CLM-15, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T03:29:24Z, receipt_ids: [R-3, R-7], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-16, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, the X profile, Telegram preview, or Pons v2 docs this pass; Pons v2 docs say treat v2 as unaudited until reports are published", class: unknown, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-17, field: identity.domain, value: "NULL — DexScreener info.websites []; launchAndBuy website empty; X profile has no website", class: claim, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-4, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-18, field: candidate, value: "robloxians | ROBLOXIANS | @RobloxiansPage | NULL — discovery token not in census 49", class: claim, observed_at: 2026-09-03T03:36:00Z, receipt_ids: [R-1, R-7], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: "account.@RobloxiansPage.role", value: project, class: claim, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-4, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-20, field: "account.@RobloxiansPage.slug", value: robloxians, class: claim, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-4, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-21, field: "account.@RobloxiansPage.flags", value: unconfirmed-official, class: claim, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-4, R-7, R-13], reproduction_ids: [], supersedes: null }
  - { id: CLM-22, field: relationship, value: "Quote token RBLX 0xF0C4…1bE8 is in GET /rhj/assets (194 assets) as Roblox • Robinhood Token, chainId 4663, ASSET_STATUS_ACTIVE, isin US7710491033. Same address as content/dependencies/stock-tokens.yaml RBLX row", class: verified, observed_at: 2026-09-03T03:33:03Z, receipt_ids: [R-10, R-11], reproduction_ids: [REP-2, REP-7], supersedes: null }
  - { id: CLM-23, field: taxonomy.mechanism-tag, value: stock-paired, class: verified, observed_at: 2026-09-03T03:34:24Z, receipt_ids: [R-4, R-6, R-12], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-24, field: other, value: "factory.approvedPairTokens(0xF0C4…1bE8) returns true this pass; @ponsdotfamily posted RBLX as a live pair asset on 2026-09-02T04:12:37Z", class: verified, observed_at: 2026-09-03T03:34:24Z, receipt_ids: [R-6, R-12], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-25, field: deployment.address, value: "0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8", class: verified, observed_at: 2026-09-03T03:31:09Z, receipt_ids: [R-10, R-11], reproduction_ids: [REP-2, REP-7], supersedes: null }
  - { id: CLM-26, field: deployment.address, value: "0xe33E9E479dF8802cb0866d5d05258bEc4cF62948", class: verified, observed_at: 2026-09-03T03:33:03Z, receipt_ids: [R-4], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-27, field: identity.alias, value: "Robloxian Cult", class: claim, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-13, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: communications.status, value: "unconfirmed-official: launchAndBuy and DexScreener name @RobloxiansPage and t.me/robloxianscult; the X account has not posted the CA 0xB528…c10D in sampled posts this pass; Telegram preview has no CA", class: claim, observed_at: 2026-09-03T03:34:00Z, receipt_ids: [R-4, R-7, R-13, R-14], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: other, value: "Token 0xB528…c10D is_verified false on Blockscout this pass; creator_address_hash and creation_transaction_hash were null on the address API; launchFactory() and TokenLaunched identify Pons v2", class: verified, observed_at: 2026-09-03T03:29:50Z, receipt_ids: [R-1, R-3, R-5], reproduction_ids: [REP-1, REP-2, REP-4], supersedes: null }
  - { id: CLM-30, field: economics.metric, value: "Gecko fdv_usd 3106120.44; DexScreener fdv/marketCap 3681072. Gecko market_cap_usd null", class: verified, observed_at: 2026-09-03T03:34:24Z, receipt_ids: [R-7, R-8], reproduction_ids: [REP-5, REP-6], supersedes: null }
  - { id: CLM-31, field: product.mechanism, value: "Token description() Welcome to the home of the Robloxians, paired with $RBLX; logo ipfs://bafkreiddobvag7yihzjcwxxpyodndeeq3afu6fg7pc5tw7ugepbntqrhci", class: verified, observed_at: 2026-09-03T03:33:03Z, receipt_ids: [R-4], reproduction_ids: [REP-4], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-11]
    material_effect: "ROBLOXIANS/RBLX 24h volume is 2929575.47 on Gecko and 3080396.49 on DexScreener; reserve/liquidity is 162471.64 vs 178744.82. A card that collapses them would misstate activity"
    status: open
    resolution: null
  - id: CON-2
    field: economics.metric
    claim_ids: [CLM-10, CLM-30]
    material_effect: "Gecko pool fdv_usd 3106120.44 vs DexScreener fdv/marketCap 3681072; market_cap_usd is null on Gecko"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "Pons v2 launchAndBuy minted ROBLOXIANS against RBLX"
    summary: "Tx 0xf7b5…0f39 from 0xD0d0…eFD3 at 2026-09-02T10:03:51Z created The Robloxians / ROBLOXIANS with pairToken RBLX 0xF0C4…1bE8 and quoteIn 300 RBLX. Uniswap v4 pool 0x3280b21b…1e07 created 2026-09-02T10:03:53Z. getLaunchedToken.phase is PoolCreated."
    occurred_at: 2026-09-02T10:03:51Z
    observed_at: 2026-09-03T03:33:03Z
    affected_fields: [deployment.address, lifecycle, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-4, R-5, R-6]
  - id: EVT-2
    type: company
    title: "Pons posted RBLX as a live pair asset"
    summary: "@ponsdotfamily posted new pair assets live: LLY, WYFI, TSM, RBLX, SKYHY, DELL, USO. factory.approvedPairTokens(RBLX) returns true this pass."
    occurred_at: 2026-09-02T04:12:37Z
    observed_at: 2026-09-03T03:32:10Z
    affected_fields: [taxonomy.mechanism-tag, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-6, R-12]
  - id: EVT-3
    type: onchain
    title: "Gecko ROBLOXIANS/RBLX 24h volume $2.93M, reserve $162k"
    summary: "Gecko pool 0x3280b21b…1e07 volume_usd.h24 2929575.47 reserve_in_usd 162471.64 fdv_usd 3106120.44. DexScreener same pair volume.h24 3080396.49 liquidity.usd 178744.82."
    occurred_at: 2026-09-03T03:34:24Z
    observed_at: 2026-09-03T03:34:24Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-4
    type: ct
    title: "@RobloxiansPage joined X in September 2026"
    summary: "Handle @RobloxiansPage display Robloxian Cult, bio A page for all fellow Robloxians. All content is for meme purposes. Joined September 2026, 31 posts, 598 followers. Named in launchAndBuy socials. No CA in sampled posts."
    occurred_at: 2026-09-02T00:00:00Z
    observed_at: 2026-09-03T03:34:00Z
    affected_fields: [identity.handle, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-13]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Address 0xB528…c10D The Robloxians", url: "https://robinhoodchain.blockscout.com/address/0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D", published_at: null, accessed_at: 2026-09-03T03:29:50Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-18, CLM-29], excerpt: "hash 0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D name The Robloxians is_contract true is_verified false proxy_type null implementations [] creator_address_hash null creation_transaction_hash null. token name The Robloxians symbol ROBLOXIANS decimals 18 holders_count 1964 total_supply 1000000000000000000000000000 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "Token 0xB528…c10D holders_count", url: "https://robinhoodchain.blockscout.com/api/v2/tokens/0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D", published_at: null, accessed_at: 2026-09-03T03:29:50Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-3, CLM-12], excerpt: "name The Robloxians symbol ROBLOXIANS decimals 18 type ERC-20 holders_count 1964 total_supply 1000000000000000000000000000 address_hash 0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D exchange_rate null circulating_market_cap null volume_24h null." }
  - { id: R-3, publisher: Robinhood Chain RPC, title: "eth_getCode, name, symbol, launchFactory, deployer", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:29:24Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-13, CLM-15, CLM-29], excerpt: "eth_chainId 0x1237 (4663) eth_blockNumber 0x32a42e0 (53097184). Token code 3248 bytes. name The Robloxians symbol ROBLOXIANS decimals 18 totalSupply 1e27. owner() revert. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. deployer() 0xD0d04c4F04873194aC24dc82891626DbfA44eFD3." }
  - { id: R-4, publisher: Blockscout, title: "launchAndBuy tx 0xf7b5fa06…0f39", url: "https://robinhoodchain.blockscout.com/tx/0xf7b5fa066a7a03e5d7969acf4cbf8d16f62c734117d1b0ec4f8a7fdf020d0f39", published_at: 2026-09-02T10:03:51Z, accessed_at: 2026-09-03T03:33:03Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-4, CLM-6, CLM-8, CLM-9, CLM-14, CLM-17, CLM-19, CLM-23, CLM-26, CLM-28, CLM-31, EVT-1], excerpt: "timestamp 2026-09-02T10:03:51.000000Z block 52489024 status ok from 0xD0d04c4F04873194aC24dc82891626DbfA44eFD3 to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. name The Robloxians symbol ROBLOXIANS twitter https://x.com/RobloxiansPage telegram https://t.me/robloxianscult pairToken 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 quoteIn 300000000000000000000." }
  - { id: R-5, publisher: Blockscout, title: "TokenLaunched log on launchAndBuy tx", url: "https://robinhoodchain.blockscout.com/tx/0xf7b5fa066a7a03e5d7969acf4cbf8d16f62c734117d1b0ec4f8a7fdf020d0f39", published_at: 2026-09-02T10:03:51Z, accessed_at: 2026-09-03T03:33:03Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-5, CLM-9, CLM-29, EVT-1], excerpt: "TokenLaunched on PonsV2LaunchFactory 0x7eD5…EC7e: token 0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D curve 0x9E595a516d2649362696861b003edDf7CD3DcC7f deployer 0xD0d04c4F04873194aC24dc82891626DbfA44eFD3 pairToken 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 launchConfigId 0 graduationThreshold 248921514629948368496. Mint 1e27 ROBLOXIANS from 0x0 to the curve." }
  - { id: R-6, publisher: Robinhood Chain RPC, title: "getLaunchedToken and approvedPairTokens", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T03:34:24Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-9, CLM-14, CLM-23, CLM-24, EVT-1, EVT-2], excerpt: "block 53104209. approvedPairTokens(RBLX 0xF0C4…1bE8) true. getLaunchedToken(0xB528…c10D) pairToken 0xF0C4…1bE8 phase 2 PoolCreated exists 1 graduationThreshold 248921514629948368496 poolFee 0 tickSpacing 200 creatorTaxBps 0 buybackEnabled 0 deployer 0xD0d0…eFD3. canLaunch(deployer) true." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens ROBLOXIANS", url: "https://api.dexscreener.com/latest/dex/tokens/0xB528a38eA684eD26ea0Eee9de5d222DA6228c10D", published_at: null, accessed_at: 2026-09-03T03:30:26Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-7, CLM-8, CLM-11, CLM-14, CLM-15, CLM-17, CLM-18, CLM-19, CLM-28, CLM-30, EVT-3], excerpt: "21 robinhood uniswap pairs. Top pairAddress 0x3280b21b63df584e8d4afb8cabd0e031eca1b4f13d64fb06456867b35fd01e07 labels v4 base ROBLOXIANS quote Roblox • Robinhood Token / RBLX 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 liquidity.usd 178744.82 volume.h24 3080396.49 fdv 3681072 pairCreatedAt 1788343433000. info.websites [] socials X.com/RobloxiansPage t.me/robloxianscult." }
  - { id: R-8, publisher: GeckoTerminal, title: "ROBLOXIANS/RBLX Uniswap v4 pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x3280b21b63df584e8d4afb8cabd0e031eca1b4f13d64fb06456867b35fd01e07", published_at: null, accessed_at: 2026-09-03T03:34:24Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-6, CLM-7, CLM-10, CLM-14, CLM-30, EVT-3], excerpt: "name ROBLOXIANS / RBLX pool_created_at 2026-09-02T10:03:53Z fdv_usd 3106120.444 market_cap_usd null volume_usd.h24 2929575.47113409 reserve_in_usd 162471.642 base_token_price_usd 0.00291395775397824." }
  - { id: R-9, publisher: GeckoTerminal, title: "The Robloxians token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xb528a38ea684ed26ea0eee9de5d222da6228c10d", published_at: null, accessed_at: 2026-09-03T03:34:24Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-10], excerpt: "name The Robloxians symbol ROBLOXIANS decimals 18 total_supply 1e27 normalized_total_supply 1000000000.0 price_usd 0.003105164158 fdv_usd 3105164.1583351 market_cap_usd null volume_usd.h24 3263009.5703156 total_reserve_in_usd 101144.295. coingecko_coin_id null." }
  - { id: R-10, publisher: Blockscout, title: "Address 0xF0C4…1bE8 RBLX", url: "https://robinhoodchain.blockscout.com/address/0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8", published_at: null, accessed_at: 2026-09-03T03:31:09Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14, CLM-22, CLM-25], excerpt: "hash 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 name BeaconProxy is_contract true is_verified true creator_address_hash 0x4783C67b63dE2B358Ac5951a7D41F47A38F3C046 creation_transaction_hash 0x611d4a37487644d0256d3945eb15c05f7c6b047e48530a721e9011c7a0194e7e. token name Roblox • Robinhood Token symbol RBLX decimals 18 holders_count 5322 total_supply 19931683000000000000000 type ERC-20." }
  - { id: R-11, publisher: Robinhood, title: "GET /rhj/assets Stock Token registry", url: "https://api.robinhood.com/rhj/assets", published_at: null, accessed_at: 2026-09-03T03:33:03Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-7, CLM-22, CLM-25], excerpt: "HTTP 200. assets length 194. One RBLX hit: tokenSymbol RBLX tokenName Roblox • Robinhood Token contractAddress 0xF0C4BF4C582cb3836e98394b1d4e7B7281101bE8 chainId 4663 networkName Robinhood Chain status ASSET_STATUS_ACTIVE isin US7710491033 tokenDecimals 18." }
  - { id: R-12, publisher: "@ponsdotfamily", title: "New Stock Tokens have landed on Pons", url: "https://x.com/ponsdotfamily/status/2095001927687790595", published_at: 2026-09-02T04:12:37Z, accessed_at: 2026-09-03T03:32:10Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-23, CLM-24, EVT-2], excerpt: "New Stock Tokens have landed on Pons. Pair with $LLY, $WYFI, $TSM, $RBLX, $SKYHY, $DELL, or $USO. Live now." }
  - { id: R-13, publisher: "@RobloxiansPage", title: "Robloxian Cult profile", url: "https://x.com/RobloxiansPage", published_at: null, accessed_at: 2026-09-03T03:34:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-8, CLM-17, CLM-19, CLM-20, CLM-21, CLM-27, CLM-28, EVT-4], excerpt: "Display name Robloxian Cult handle @RobloxiansPage. Bio: A page for all fellow Robloxians. All content is for meme purposes. Joined September 2026. 31 posts. 3 following, 598 followers. No website field. Sampled posts are Roblox meme images; no contract address in those posts this pass." }
  - { id: R-14, publisher: Telegram, title: "t.me/robloxianscult", url: "https://t.me/robloxianscult", published_at: null, accessed_at: 2026-09-03T03:33:03Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-27, CLM-28], excerpt: "HTTP 200. og:title ROBLOXIANS CULT. og:description Welcome to the home of the Robloxians. tgme_page_title ROBLOXIANS CULT. tgme_page_extra 672 members, 121 online. No contract address in the preview HTML this pass." }
  - { id: R-15, publisher: Blockscout, title: "PonsV2LaunchFactory verified source", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e?tab=contract", published_at: null, accessed_at: 2026-09-03T03:32:10Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5], excerpt: "name PonsV2LaunchFactory is_verified true file contracts/src/v2/PonsV2LaunchFactory.sol. ABI includes approvedPairTokens(address), getLaunchedToken(address), launchToken, setPairTokenApproved. ILaunchpadV2.sol enum GraduationPhase { NotGraduated, Swept, PoolCreated, Rescued }. phase 2 is PoolCreated." }
  - { id: R-16, publisher: Pons, title: "v2 docs", url: "https://docs.ponsfamily.com/docs/v2", published_at: null, accessed_at: 2026-09-03T03:36:00Z, kind: docs, authority: primary, authenticity: confirmed, supports: [CLM-1], excerpt: "pons v2 is a launch protocol. A creator deploys a token, the public buys it from a bonding curve, and once the curve is bought out the launch graduates into a Uniswap v4 pool whose liquidity is locked permanently. A launch can be paired against any token pons has approved. No audit has closed. Treat v2 as unaudited until the reports are published here." }

gaps:
  - { priority: P0, question: "Does @RobloxiansPage post CA 0xB528…c10D or a site that reverse-links to the token?", checked: "X profile bio/website empty of a CA; sampled posts 2026-09-02–03 are Roblox meme images; DexScreener and launchAndBuy name the handle one way, 2026-09-03", next: "re-read the profile and new posts after a CA or site appears; treat the handle as unconfirmed-official until a reverse link exists" }
  - { priority: P1, question: "When did PonsV2LaunchFactory.setPairTokenApproved(RBLX) flip true?", checked: "approvedPairTokens(RBLX) true at block 53104209; @ponsdotfamily posted RBLX live 2026-09-02T04:12:37Z; the set tx was not opened, 2026-09-03", next: "search factory txs for setPairTokenApproved around 2026-09-02 and record the tx hash" }
  - { priority: P1, question: "Why is Blockscout creator_address_hash null, and does verified PonsV2LauncherToken source match this 3248-byte bytecode?", checked: "address API creator and creation tx null; is_verified false; bytecode 3248 bytes not equal to verified SHERWOOD PonsV2LauncherToken at 0xD4DC…92c1, 2026-09-03", next: "eth_getLogs Transfer from 0x0 / factory TokenLaunched already names the token; compare bytecode to current LaunchDeployer implementation" }
  - { priority: P2, question: "Does t.me/robloxianscult pin the CA or a DexScreener link?", checked: "public preview title ROBLOXIANS CULT, 672 members, description Welcome to the home of the Robloxians, no CA in HTML, 2026-09-03", next: "open the join page / first messages if they become public without joining" }
---

# ROBLOXIANS — research packet

## What it is

ROBLOXIANS is a one-billion-supply ERC-20 launched on Pons v2 against the Roblox Robinhood Token (RBLX). PonsV2LaunchAndBuy.launchAndBuy created The Robloxians at 0xB528…c10D on 2026-09-02, pairing it to RBLX 0xF0C4…1bE8; the same transaction bought through the bonding curve past the graduation threshold into a Uniswap v4 ROBLOXIANS/RBLX pool. Traders buy and sell ROBLOXIANS on that book. No project site was located this pass.

Themes: memecoin, stock-paired:RBLX

## Why it matters

Pons listed RBLX as a pair asset on 2026-09-02 and this token used that quote the same day. GET /rhj/assets has an active RBLX Stock Token at the same address. Gecko’s ROBLOXIANS/RBLX book printed about $2.93M of 24h volume at collection, with about $162k reserve.

## What could go wrong

USD reserve on the ROBLOXIANS/RBLX book counts both sides, and the quote side is RBLX, not USDG. Token source is not verified on Blockscout. The named X handle has not posted the contract this pass, so the official surface stays unconfirmed-official.

## Product and mechanics

PonsV2LaunchAndBuy.launchAndBuy at 0xe33E…2948 from EOA 0xD0d0…eFD3 at 2026-09-02T10:03:51Z minted The Robloxians / ROBLOXIANS supply 1e9*1e18 onto curve 0x9E59…cC7f quoted against RBLX, with quoteIn 300 RBLX and launchConfigId 0. TokenLaunched on factory 0x7eD5…EC7e names pairToken 0xF0C4…1bE8. Uniswap v4 pool 0x3280b21b…1e07 was created 2026-09-02T10:03:53Z. [verified R-4 R-5 R-7]

launchFactory() on the token returns that Pons v2 factory. getLaunchedToken.phase is 2 PoolCreated. approvedPairTokens(RBLX) is true. Secondary ROBLOXIANS/USDG Uniswap v4 books exist on DexScreener with far less liquidity than the RBLX book. [verified R-3 R-6 R-7]

## Control and security

owner() on the token reverted. deployer() is EOA 0xD0d0…eFD3. creatorFeeRecipient on the launch record is 0x3beC…aB77. creatorTaxBps 0 and buybackEnabled false. [verified R-3 R-6]

PonsV2LaunchFactory source is verified; the ROBLOXIANS token is not. Pons v2 docs say treat v2 as unaudited until reports are published. No audit report URL was located this pass. [verified R-15] [claim R-16] [unknown]

## Team and provenance

launchAndBuy socials name https://x.com/RobloxiansPage and https://t.me/robloxianscult with an empty website. DexScreener info.socials match. @RobloxiansPage display name is Robloxian Cult, joined September 2026, 598 followers; sampled posts do not include the CA. Telegram titles ROBLOXIANS CULT with 672 members. Flag unconfirmed-official. [claim R-4 R-7 R-13 R-14]

## Economics and activity

ROBLOXIANS/RBLX Uniswap v4 24h volume is 2929575.47 USD and reserve_in_usd is 162471.64 at 2026-09-03T03:34:24Z from the Gecko pool endpoint. fdv_usd is 3106120.44. Gecko token volume_usd.h24 is 3263009.57 across all pools, not the RBLX book. [claim R-8 R-9]

DexScreener same pair: liquidity.usd 178744.82, volume.h24 3080396.49, fdv/marketCap 3681072. Blockscout holders_count 1964. Pair created 2026-09-02T10:03:53Z. [claim R-1 R-7]

Assignment lead of Gecko liq ~$147k / vol ~$2.9M is close to this pass: live Gecko reserve $162k and 24h volume $2.93M. [claim R-8]

## Material risks

- Token source is not verified on Blockscout; creator_address_hash was null on the address API. [verified R-1]
- Pool USD reserve is ROBLOXIANS plus RBLX, not a USDG backstop. [claim R-7 R-8]
- Named handle @RobloxiansPage has not posted the CA this pass; flag unconfirmed-official. [claim R-13]
- Pons v2 docs say treat v2 as unaudited until reports are published. [claim R-16]

## Verification passes

- Receipts: Blockscout token/RBLX/factory/launchAndBuy tx, RPC name/symbol/launchFactory/getLaunchedToken/approvedPairTokens, DexScreener, Gecko pool/token, /rhj/assets, @ponsdotfamily, @RobloxiansPage, and Telegram preview were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-3 R-4 R-8 R-11]
- Numbers: 2929575.47 is the Gecko ROBLOXIANS/RBLX pool 24h volume, not the 3263009.57 token all-pools figure. Reserve 162471.64 is that pool. DexScreener 3080396.49 / 178744.82 is the same pair, different aggregator. [claim R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that ROBLOXIANS is an official Roblox or Robinhood product, or that it should merge with census Pons. /rhj/assets lists RBLX as a Stock Token, not ROBLOXIANS; the token is a Pons v2 launch with its own handle; no official Roblox or Robinhood CA post was located. [inference R-4 R-11 R-13]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` → 334ca0619aa62e922da83f46de021f06d12348cf. Census 49 slugs have no robloxians / ROBLOXIANS / 0xB528…c10D. Discovery inventory CLM-40 named this candidate.
- Explorer: Blockscout api/v2 token, RBLX, factory ABI/source, deployer txs, launchAndBuy 0xf7b5…0f39 and logs. RPC eth_getCode/eth_call at blocks 53097184 and 53104209; rate-limit 429 on a first selector sweep, retried.
- Aggregators: DexScreener latest/dex/tokens (21 pairs); Gecko pool and token (token/pools page 429 on retry).
- Registry: GET api.robinhood.com/rhj/assets 194 assets, 1 RBLX hit matching 0xF0C4…1bE8.
- Social: X from:RobloxiansPage, from:ponsdotfamily RBLX, keyword ROBLOXIANS; t.me/robloxianscult preview.
- Failed: Blockscout token creator_address_hash null; Gecko pool 429 then 200; token/pools 429; bytecode of this token ≠ verified SHERWOOD PonsV2LauncherToken.
