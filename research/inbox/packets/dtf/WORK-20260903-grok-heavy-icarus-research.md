---
# Packet v2 (docs/research-system.md §5). Seed with Icarus What-it-is + events.
contract_version: proofline-research-v2
work_id: WORK-20260903-grok-heavy-icarus-research
producer: grok-heavy
role: collector
base_sha: 334ca0619aa62e922da83f46de021f06d12348cf
slug: dtf
name: DTF
packet_tier: seed
as_of: 2026-09-03T04:55:00Z
prior_packet: null
supersedes: null
owned_slugs: [dtf]
allowed_paths:
  - research/inbox/packets/dtf/WORK-20260903-grok-heavy-icarus-research.md

identity:
  canonical_name: DTF
  aliases: ["Down to Finance", "Down To Finance"]
  symbols: [DTF]
  entity_kind: token
  chain_scope: robinhood-native
  official_domain: https://downto.finance
  official_handle: "@downto_finance"
  repository: "NULL — no GitHub org or repository URL on DexScreener, Gecko, Blockscout constructor socials, or downto.finance HTML this pass"
  possible_matches:
    - slug: downto
      signals: [same-normalized-name, shared-domain, shared-handle, shared-address]
      contrary_signals:
        - "Census Down to Finance is entity_kind protocol, primary rwa-products/redeemable-basket, at downto.finance / @downto_finance"
        - "This packet is the PonsV2LauncherToken ERC-20 at 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01; entity_kind token, primary launch/graduation-token"
        - "Packed downto already lists this same address as its DTF token deployment; the protocol row is the DETF basket machine, not the traded ERC-20"
    - slug: pons
      signals: [shared-deployer]
      contrary_signals:
        - "Census Pons is the bonding-curve pad at ponsfamily.com / @ponsdotfamily with PonsV2LaunchFactory 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
        - "DTF is one PonsV2LauncherToken created through that factory; entity_kind token, not protocol"
        - "No shared domain or handle; downto.finance / @downto_finance is not ponsfamily.com / @ponsdotfamily"

classification:
  primary_leaf: launch/graduation-token
  secondary_leaves: []
  mechanism_tags: [bonding-curve, amm, launchpad, fee-routing]
  ecosystem_role: graduation
  lifecycle: mainnet
  coverage_recommendation: seed
  evidence_state: partly-verified
  rationale: "Not a second protocol row. Token 0xeE5576…eb01 is a verified PonsV2LauncherToken with non-empty code on 4663; launchFactory() returns census Pons v2 factory 0x7eD598…EC7e; launchAndBuy at 2026-08-25T01:26:48Z minted Down to Finance / DTF. Lead book is Uniswap v3 DTF/WETH. Site names this address as the official fee-accruing token. Collides with packed downto on name, domain, handle, and this address; entity_kind stays token. [R-1] [R-2] [R-5] [R-7] [R-10]"

qualifying:
  deployed_on_chain: { status: pass, claim_ids: [CLM-4, CLM-5, CLM-6], note: "" }
  native_play:       { status: pass, claim_ids: [CLM-1, CLM-15], note: "" }
  citable:           { status: pass, claim_ids: [CLM-2, CLM-3, CLM-8], note: "" }
  research_story:    { status: pass, claim_ids: [CLM-1, CLM-9, CLM-10], note: "" }

links:
  - { kind: site, url: "https://downto.finance", authenticity: confirmed }
  - { kind: app, url: "https://app.downto.finance/explore", authenticity: confirmed }
  - { kind: x, url: "https://x.com/downto_finance", authenticity: confirmed }
  - { kind: telegram, url: "https://t.me/downtofinance", authenticity: confirmed }

deployments:
  - label: DTF token (PonsV2LauncherToken)
    role: token
    address:
      value: "0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-1, R-2, R-3, R-5]
  - label: PonsV2LaunchFactory (token launchFactory())
    role: factory
    address:
      value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-4, R-5]
  - label: PonsV2BondingCurve (token curve())
    role: other
    address:
      value: "0x912467Fc912f0F88dF3B0d221946de78f38D4559"
      chain: robinhood-chain
      source: explorer
      seen: 2026-09-03T04:50:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-2, R-5, R-6]
  - label: Uniswap v3 DTF/WETH 1% pool (lead book)
    role: other
    address:
      value: "0x0F2CA1D996224a0c9dd140B865142aAD381A4287"
      chain: robinhood-chain
      source: third-party
      seen: 2026-09-03T04:47:00Z
      exists_on_4663: true
      explorer_source_verified: true
    receipt_ids: [R-7, R-9, R-16]

metrics:
  - { kind: volume_24h, value: 2302688.94, currency: USD, as_of: 2026-09-03T04:49:00Z, window: 24h, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0F2CA1D996224a0c9dd140B865142aAD381A4287 volume_usd.h24 (DTF/WETH 1% pool slice, not Gecko token all-pools)", class: claim, receipt_ids: [R-9] }
  - { kind: tvl, value: 287887.93, currency: USD, as_of: 2026-09-03T04:49:00Z, window: point, method: "api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0F2CA1D996224a0c9dd140B865142aAD381A4287 reserve_in_usd (that book, not all-pools)", class: claim, receipt_ids: [R-9] }
  - { kind: market_cap, value: 7291287, currency: USD, as_of: 2026-09-03T04:47:00Z, window: point, method: "api.dexscreener.com/latest/dex/tokens/0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01 Uniswap v3 DTF/WETH pair 0x0F2CA1…4287 marketCap", class: claim, receipt_ids: [R-7] }
  - { kind: holders, value: 8791, currency: null, as_of: 2026-09-03T04:47:00Z, window: point, method: "robinhoodchain.blockscout.com/api/v2/tokens/0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01 holders_count", class: claim, receipt_ids: [R-1] }

reproductions:
  - { id: REP-1, method: explorer-rpc, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-5], result: "eth_blockNumber 0x32af86b (53147755) then 0x32afc66 (53148774). Token 0xeE5576…eb01 eth_getCode 3248 B prefix 60806040, not EIP-1167. name Down to Finance, symbol DTF, decimals 18, totalSupply 1e27. owner() reverts. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e (code 24177 B). curve() 0x912467Fc912f0F88dF3B0d221946de78f38D4559 (code 10229 B). deployer() 0xeD1FA21329fc45860cAB5D5E26a5fafcCDAcd6D5 (code 0x). socials() twitter https://x.com/downto_finance telegram https://t.me/downtofinance; discord/website/farcaster empty. logo ipfs://bafybeictkpzyg4j4xknekcllmmsmli5imtej4vkjo32ckrzedopattilke." }
  - { id: REP-2, method: explorer-ui, chain_id: 4663, checked_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-2, R-3, R-4, R-6, R-16, R-17], result: "Blockscout api/v2 token 0xeE5576…eb01 name Down to Finance symbol DTF holders_count 8791 total_supply 1e27 volume_24h 3586063.70 circulating_market_cap 7278958.38. Address name PonsV2LauncherToken is_contract true is_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol compiler v0.8.35 verified_at 2026-08-25T05:02:59Z creator PonsV2LaunchDeployer 0x3711ceA4…1A42 creation tx 0xbebe5e0a…b687 2026-08-25T01:26:48Z block 45332515 to PonsV2LaunchAndBuy.launchAndBuy from EOA 0xeD1FA213…d6D5. Constructor socials twitter/telegram set; website empty; curve_ 0x912467Fc…4559; launchFactory_ 0x7eD598Bc…EC7e; supply_ 1e27. Factory PonsV2LaunchFactory is_verified true. Curve PonsV2BondingCurve is_verified true created in the same tx. UniswapV3Pool 0x0F2CA1…4287 is_verified true. Top holder V2LaunchLocker 0x267444D0…4952 value 81642783914186107334784296." }
  - { id: REP-3, method: api, checked_at: 2026-09-03T04:47:00Z, receipt_ids: [R-7], result: "DexScreener latest/dex/tokens/0xeE5576…eb01: 18 robinhood uniswap pairs. Top Uniswap v3 DTF/WETH 0x0F2CA1…4287 quote WETH 0x0Bd7D308…AD73 liquidity.usd 288962.82 volume.h24 2321906.4 fdv/marketCap 7291287 priceUsd 0.007291 pairCreatedAt 1787623783 (2026-08-25T02:09:43Z). Next Uniswap v4 DTF/ETH 0xbc58bf…b4ee liquidity.usd 241512.7 volume.h24 288102.19 pairCreatedAt 1787621727 (2026-08-25T01:35:27Z). info.websites https://downto.finance/ info.socials x.com/downto_finance." }
  - { id: REP-4, method: api, checked_at: 2026-09-03T04:49:00Z, receipt_ids: [R-8, R-9], result: "Gecko first GET 200. Token volume_usd.h24 2803557.28 (all pools) fdv_usd 7222274.62 market_cap_usd 7254397.85 total_reserve_in_usd 349412.72 coingecko_coin_id down-to-finance launchpad_details graduation_percentage 100 completed true completed_at 2026-08-25T01:35:27Z migrated_destination_pool_address 0xbc58bfe1…b4ee. Pool DTF/WETH 1% 0x0f2ca1…4287 volume_usd.h24 2302688.94 reserve_in_usd 287887.93 fdv_usd 7370076.57 market_cap_usd 7370076.61 pool_created_at 2026-08-25T02:09:43Z dex uniswap-v3-robinhood." }
  - { id: REP-5, method: official-crosslink, checked_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7, R-10, R-13], result: "downto.finance HTTP 200 title Down To Finance; meta description DTF = Down To Finance; data-testid official-dtf-token: The official fee-accruing token is $DTF at 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01. DexScreener websites/socials match. Constructor socials twitter and telegram match @downto_finance and t.me/downtofinance (351 members). Constructor website field empty." }

claims:
  - { id: CLM-1, field: product.mechanism, value: "PonsV2LaunchAndBuy.launchAndBuy minted a 1e9-supply PonsV2LauncherToken onto PonsV2BondingCurve; verified source mints the entire supply to the curve. Gecko launchpad_details mark graduation completed 2026-08-25T01:35:27Z into Uniswap v4 pool 0xbc58bf…b4ee. Lead listed book this pass is Uniswap v3 DTF/WETH 1% 0x0F2CA1…4287.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-3, R-5, R-7, R-8], reproduction_ids: [REP-1, REP-2, REP-3, REP-4], supersedes: null }
  - { id: CLM-2, field: identity.name, value: "Down to Finance", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-3, field: identity.symbol, value: "DTF", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-4, field: deployment.address, value: "0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-2, R-5, R-10], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-5, field: deployment.address, value: "0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-6, field: lifecycle, value: mainnet, class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-1, R-2, R-5, R-7], reproduction_ids: [REP-1, REP-2, REP-3], supersedes: null }
  - { id: CLM-7, field: taxonomy.primary-leaf, value: launch/graduation-token, class: claim, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-2, R-3, R-8], reproduction_ids: [], supersedes: null }
  - { id: CLM-8, field: identity.handle, value: "@downto_finance", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-5, R-7, R-11], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-9, field: relationship, value: "Same name, domain, handle, and token address as census downto (protocol / redeemable basket). This slug is the traded Pons v2 ERC-20; packed downto is the DETF machine. launchFactory is census Pons v2 factory 0x7eD598…EC7e.", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-1, R-4, R-5, R-10], reproduction_ids: [REP-1, REP-2, REP-5], supersedes: null }
  - { id: CLM-10, field: economics.metric, value: "DexScreener Uniswap v3 DTF/WETH 0x0F2CA1…4287 volume.h24 2321906.4 liquidity.usd 288962.82 marketCap 7291287 at 2026-09-03T04:47:00Z (pair slice, not all-pairs)", class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-7], reproduction_ids: [REP-3], supersedes: null }
  - { id: CLM-11, field: economics.metric, value: "Gecko same pool volume_usd.h24 2302688.94 reserve_in_usd 287887.93 fdv_usd 7370076.57 at 2026-09-03T04:49:00Z", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-9], reproduction_ids: [REP-4], supersedes: null }
  - { id: CLM-12, field: economics.metric, value: 8791, class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-13, field: control.owner, value: "Token owner() reverts; ABI has no owner. Source: deployer is immutable reference data and confers no privileges; entire supply minted to the curve. deployer() EOA 0xeD1FA213…d6D5 has no code.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-3, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-14, field: control.privileged-role, value: "launchFactory immutable 0x7eD598…EC7e; curve immutable 0x912467…4559; creator_address_hash PonsV2LaunchDeployer 0x3711ceA4…1A42. Top holder this pass is V2LaunchLocker 0x267444D0…4952.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-3, R-5, R-17], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-15, field: other, value: "Lead pair asset is WETH 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73; venue Uniswap v3 pool 0x0F2CA1D996224a0c9dd140B865142aAD381A4287. Secondary Uniswap v4 DTF/ETH 0xbc58bf…b4ee is the Gecko migrated destination pool.", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-7, R-8, R-9, R-16], reproduction_ids: [REP-3, REP-4], supersedes: null }
  - { id: CLM-16, field: deployment.role, value: "creator_address_hash is PonsV2LaunchDeployer; launchFactory() names PonsV2LaunchFactory 0x7eD598…EC7e, not LONG, PAIR, hood.fun, or LaunchpadFactory", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-1, R-2, R-4, R-5], reproduction_ids: [REP-1, REP-2], supersedes: null }
  - { id: CLM-17, field: taxonomy.chain-scope, value: robinhood-native, class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-5, R-7], reproduction_ids: [REP-1, REP-3], supersedes: null }
  - { id: CLM-18, field: security.audit, value: "No audit report URL was located on Blockscout, DexScreener, Gecko, downto.finance HTML, Telegram preview, or X search this pass", class: unknown, observed_at: 2026-09-03T04:52:00Z, receipt_ids: [], reproduction_ids: [], supersedes: null }
  - { id: CLM-19, field: communications.status, value: "t.me/downtofinance og:title Down to Finance, 351 members; constructor telegram field and launchAndBuy params set that URL", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-2, R-5, R-13], reproduction_ids: [REP-1, REP-5], supersedes: null }
  - { id: CLM-20, field: economics.metric, value: "Gecko token volume_usd.h24 2803557.28 (all pools); Blockscout token.volume_24h 3586063.70. Neither is the DTF/WETH pool slice.", class: verified, observed_at: 2026-09-03T04:49:00Z, receipt_ids: [R-1, R-8], reproduction_ids: [REP-2, REP-4], supersedes: null }
  - { id: CLM-21, field: identity.domain, value: "https://downto.finance — DexScreener info.websites; landing page names $DTF at 0xeE5576…eb01; constructor website field empty", class: verified, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-7, R-10], reproduction_ids: [REP-3, REP-5], supersedes: null }
  - { id: CLM-22, field: other, value: "ca-collision: a second ERC-20 on 4663 named Down to Finance / DTF at 0x2ec89AFBa136119C5252FC47D14E2BD2144B10d2 (verified source name dtf, decimals 9, holders_count 676, code 23173 B). Not the official fee token.", class: verified, observed_at: 2026-09-03T04:50:00Z, receipt_ids: [R-14], reproduction_ids: [REP-2], supersedes: null }
  - { id: CLM-23, field: product.mechanism, value: "downto.finance: The official fee-accruing token is $DTF at 0xeE5576…eb01. Token description: Stake $DTF to earn protocol fees. Landing also shows a $DTF-DETF card with a Live badge; that basket was not reproduced on chain this pass.", class: claim, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-3, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-24, field: candidate, value: "dtf | DTF | https://downto.finance | @downto_finance — graduation token; census downto remains the protocol", class: claim, observed_at: 2026-09-03T04:55:00Z, receipt_ids: [R-1, R-7, R-10], reproduction_ids: [], supersedes: null }
  - { id: CLM-25, field: communications.status, value: "handle-collision: X user search also returned @down_to_finance (display name Down to Finance, bio I’m always DTF (down to finance))", class: claim, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-15], reproduction_ids: [], supersedes: null }
  - { id: CLM-26, field: communications.status, value: "2026-08-30 @downto_finance posted a delay in launching DETF creation and staking, calling it the final test run before launch", class: claim, observed_at: 2026-09-03T04:46:00Z, receipt_ids: [R-11], reproduction_ids: [], supersedes: null }
  - { id: CLM-27, field: account.@downto_finance.role, value: project, class: claim, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-10, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-28, field: account.@downto_finance.slug, value: downto, class: claim, observed_at: 2026-09-03T04:51:00Z, receipt_ids: [R-10, R-12], reproduction_ids: [], supersedes: null }
  - { id: CLM-29, field: taxonomy.entity-kind, value: token, class: verified, observed_at: 2026-09-03T04:47:00Z, receipt_ids: [R-1, R-3], reproduction_ids: [REP-1, REP-2], supersedes: null }

conflicts:
  - id: CON-1
    field: economics.metric
    claim_ids: [CLM-10, CLM-20]
    material_effect: "24h volume is 2321906.4 on the DexScreener DTF/WETH pair, 2803557.28 on Gecko token all-pools, and 3586063.70 on Blockscout token.volume_24h; a card that collapses them would misstate activity"
    status: open
    resolution: null

events:
  - id: EVT-1
    type: onchain
    title: "DTF launched via Pons v2 launchAndBuy"
    summary: "PonsV2LauncherToken 0xeE5576…eb01 was created in tx 0xbebe5e0a… at block 45332515 through PonsV2LaunchAndBuy."
    occurred_at: 2026-08-25T01:26:48Z
    observed_at: 2026-09-03T04:50:00Z
    affected_fields: [deployment.address, relationship, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-2, R-5]
  - id: EVT-2
    type: onchain
    title: "Gecko marks DTF graduation complete into Uniswap v4"
    summary: "launchpad_details completed_at 2026-08-25T01:35:27Z migrated_destination_pool_address 0xbc58bf…b4ee; DexScreener v4 DTF/ETH pairCreatedAt matches."
    occurred_at: 2026-08-25T01:35:27Z
    observed_at: 2026-09-03T04:49:00Z
    affected_fields: [product.mechanism, lifecycle]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-7, R-8]
  - id: EVT-3
    type: onchain
    title: "Gecko DTF/WETH 1% 24h volume $2.30M, reserve $288k"
    summary: "Gecko pool 0x0F2CA1…4287 volume_usd.h24 2302688.94 reserve_in_usd 287887.93; DexScreener same pair volume.h24 2321906.4 liquidity.usd 288962.82."
    occurred_at: 2026-09-03T04:49:00Z
    observed_at: 2026-09-03T04:49:00Z
    affected_fields: [economics.metric, activity.status]
    evidence_state: verified
    impact: material
    site_recommendation: both
    channel_recommendation: none
    receipt_ids: [R-7, R-9]
  - id: EVT-4
    type: company
    title: "Site names 0xeE5576…eb01 as the official fee-accruing token"
    summary: "downto.finance data-testid official-dtf-token publishes $DTF at 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01."
    occurred_at: 2026-09-03T04:51:00Z
    observed_at: 2026-09-03T04:51:00Z
    affected_fields: [identity.domain, deployment.address, product.mechanism]
    evidence_state: verified
    impact: material
    site_recommendation: profile
    channel_recommendation: none
    receipt_ids: [R-10]
  - id: EVT-5
    type: ct
    title: "@downto_finance posted DETF creation still in final tests"
    summary: "@downto_finance 2026-08-30: delay in launching DETF creation and staking; final test run before launch. 2026-09-02: compiling 3846 files with Solc 0.8.35."
    occurred_at: 2026-08-30T19:22:57Z
    observed_at: 2026-09-03T04:46:00Z
    affected_fields: [communications.status, activity.status]
    evidence_state: claim
    impact: routine
    site_recommendation: feed
    channel_recommendation: none
    receipt_ids: [R-11, R-12]
  - id: EVT-6
    type: ct
    title: "@smartflowradar posted the DTF CA on Robinhood"
    summary: "@smartflowradar posted $DTF CA 0xee5576fa1bcaa380e591d01245f406f3f384eb01 tagged @downto_finance, chain Robinhood."
    occurred_at: 2026-09-03T01:12:39Z
    observed_at: 2026-09-03T04:46:00Z
    affected_fields: [deployment.address, communications.status]
    evidence_state: claim
    impact: routine
    site_recommendation: none
    channel_recommendation: none
    receipt_ids: [R-18]

receipts:
  - { id: R-1, publisher: Blockscout, title: "Token 0xeE5576…eb01 Down to Finance / DTF", url: "https://robinhoodchain.blockscout.com/address/0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-2, CLM-3, CLM-4, CLM-6, CLM-9, CLM-12, CLM-14, CLM-16, CLM-20, CLM-24, CLM-29], excerpt: "API v2: hash 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01 name PonsV2LauncherToken is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xbebe5e0ab1e68af3a9e08b8175f331b342104d5ee2c6f439b46726e1281bb687. token name Down to Finance symbol DTF decimals 18 total_supply 1e27 holders_count 8791 volume_24h 3586063.69652062 circulating_market_cap 7278958.38 type ERC-20." }
  - { id: R-2, publisher: Blockscout, title: "launchAndBuy tx 0xbebe5e0a…b687", url: "https://robinhoodchain.blockscout.com/tx/0xbebe5e0ab1e68af3a9e08b8175f331b342104d5ee2c6f439b46726e1281bb687", published_at: 2026-08-25T01:26:48Z, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-4, CLM-6, CLM-16, CLM-19, EVT-1], excerpt: "timestamp 2026-08-25T01:26:48.000000Z status ok block_number 45332515 from 0xeD1FA21329fc45860cAB5D5E26a5fafcCDAcd6D5 (is_contract false) to PonsV2LaunchAndBuy 0xe33E9E479dF8802cb0866d5d05258bEc4cF62948 method launchAndBuy. params name Down to Finance symbol DTF twitter https://x.com/downto_finance telegram https://t.me/downtofinance." }
  - { id: R-3, publisher: Blockscout, title: "PonsV2LauncherToken verified source", url: "https://robinhoodchain.blockscout.com/address/0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01?tab=contract", published_at: null, accessed_at: 2026-09-03T04:48:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-5, CLM-7, CLM-13, CLM-14, CLM-23, CLM-29], excerpt: "name PonsV2LauncherToken compiler v0.8.35+commit.47b9dedd is_verified true is_partially_verified false file_path contracts/src/v2/PonsV2LauncherToken.sol verified_at 2026-08-25T05:02:59Z. Comment: entire supply mints to the bonding curve; deployer confers no privileges. Constructor curve_ 0x912467Fc…4559 launchFactory_ 0x7eD598Bc…EC7e supply_ 1e27 website empty." }
  - { id: R-4, publisher: Blockscout, title: "PonsV2LaunchFactory 0x7eD598…EC7e", url: "https://robinhoodchain.blockscout.com/address/0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-5, CLM-9, CLM-16], excerpt: "hash 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e name PonsV2LaunchFactory is_contract true is_verified true creator_address_hash 0xFdDE5a1E3cDF791Da71E49F817D70C7ceD72CC36 creation_transaction_hash 0x3817f297aa7c2ef78789bffac57491ceedc218fef962d47ed36c272699deddeb. RPC eth_getCode 24177 B." }
  - { id: R-5, publisher: Robinhood Chain RPC, title: "eth_getCode, name, launchFactory(), curve(), socials()", url: "https://rpc.mainnet.chain.robinhood.com", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1, CLM-2, CLM-3, CLM-4, CLM-5, CLM-6, CLM-8, CLM-9, CLM-13, CLM-14, CLM-16, CLM-17, CLM-19, EVT-1], excerpt: "eth_blockNumber 0x32afc66 (53148774). Token code 3248 B. name Down to Finance symbol DTF decimals 18 totalSupply 1e27. owner() revert. launchFactory() 0x7eD598BcEf8bd9Edd8C97A195C6d13f40801EC7e. curve() 0x912467Fc912f0F88dF3B0d221946de78f38D4559. deployer() 0xeD1FA213…d6D5 code 0x. socials twitter https://x.com/downto_finance telegram https://t.me/downtofinance." }
  - { id: R-6, publisher: Blockscout, title: "PonsV2BondingCurve 0x912467…4559", url: "https://robinhoodchain.blockscout.com/address/0x912467Fc912f0F88dF3B0d221946de78f38D4559", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-1], excerpt: "hash 0x912467Fc912f0F88dF3B0d221946de78f38D4559 name PonsV2BondingCurve is_contract true is_verified true creator_address_hash 0x3711ceA4feaDE896C913C68F01Eda97Cb06D1A42 creation_transaction_hash 0xbebe5e0ab1e68af3a9e08b8175f331b342104d5ee2c6f439b46726e1281bb687. RPC eth_getCode 10229 B." }
  - { id: R-7, publisher: DexScreener, title: "latest/dex/tokens DTF", url: "https://api.dexscreener.com/latest/dex/tokens/0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-6, CLM-8, CLM-10, CLM-15, CLM-17, CLM-21, CLM-24, EVT-2, EVT-3], excerpt: "18 robinhood uniswap pairs. Top pairAddress 0x0F2CA1D996224a0c9dd140B865142aAD381A4287 labels v3 base Down to Finance / DTF quote WETH 0x0Bd7D308…AD73 liquidity.usd 288962.82 volume.h24 2321906.4 fdv 7291287 marketCap 7291287 pairCreatedAt 1787623783000. v4 DTF/ETH 0xbc58bf…b4ee volume.h24 288102.19. info.websites https://downto.finance/ socials x.com/downto_finance." }
  - { id: R-8, publisher: GeckoTerminal, title: "Down to Finance token", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/tokens/0xee5576fa1bcaa380e591d01245f406f3f384eb01", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-1, CLM-7, CLM-15, CLM-20, EVT-2], excerpt: "HTTP 200. name Down to Finance symbol DTF decimals 18 total_supply 1e27 volume_usd.h24 2803557.2796305 fdv_usd 7222274.62 market_cap_usd 7254397.85 total_reserve_in_usd 349412.72 coingecko_coin_id down-to-finance. launchpad_details graduation_percentage 100 completed true completed_at 2026-08-25T01:35:27.000Z migrated_destination_pool_address 0xbc58bfe1…b4ee." }
  - { id: R-9, publisher: GeckoTerminal, title: "DTF/WETH Uniswap v3 1% pool", url: "https://api.geckoterminal.com/api/v2/networks/robinhood/pools/0x0F2CA1D996224a0c9dd140B865142aAD381A4287", published_at: null, accessed_at: 2026-09-03T04:49:00Z, kind: third-party-data, authority: aggregator, authenticity: confirmed, supports: [CLM-11, CLM-15, EVT-3], excerpt: "HTTP 200. name DTF / WETH 1% pool_created_at 2026-08-25T02:09:43Z fdv_usd 7370076.57 market_cap_usd 7370076.61 volume_usd.h24 2302688.94256036 reserve_in_usd 287887.9306. dex uniswap-v3-robinhood. transactions.h24 buys 1551 sells 1612." }
  - { id: R-10, publisher: Down to Finance, title: "downto.finance home", url: "https://downto.finance/", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: official-site, authority: primary, authenticity: confirmed, supports: [CLM-4, CLM-9, CLM-21, CLM-23, CLM-24, CLM-27, CLM-28, EVT-4], excerpt: "HTTP 200. title Down To Finance — Make an Olympus out of anything. meta description DTF = Down To Finance. DETFs (Decentralized ETFs). data-testid official-dtf-token: The official fee-accruing token is $DTF at 0xeE5576Fa1Bcaa380e591D01245f406f3f384eb01. Card $DTF-DETF The protocol's own basket badge Live." }
  - { id: R-11, publisher: "@downto_finance", title: "Delay in launching DETF creation and staking", url: "https://x.com/downto_finance/status/2094143857328038182", published_at: 2026-08-30T19:22:57Z, accessed_at: 2026-09-03T04:46:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-8, CLM-26, EVT-5], excerpt: "I apologize for the delay in launching the DETF creation and staking. Simple answer, is that the extensive test suites take several hours to compile and run. This is the final test run before launch. Display name Down to Finance, bio Decentralized ETFs." }
  - { id: R-12, publisher: "@downto_finance", title: "Compiling 3846 files with Solc 0.8.35", url: "https://x.com/downto_finance/status/2095292734202650881", published_at: 2026-09-02T23:28:11Z, accessed_at: 2026-09-03T04:46:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-27, CLM-28, EVT-5], excerpt: "Compiling 3846 files with Solc 0.8.35. Time for a clean build before what will hopefully be the final test run. This confirms no false results from cached builds." }
  - { id: R-13, publisher: Telegram, title: "t.me/downtofinance", url: "https://t.me/downtofinance", published_at: null, accessed_at: 2026-09-03T04:51:00Z, kind: social, authority: primary, authenticity: confirmed, supports: [CLM-19], excerpt: "HTTP 200. og:title Down to Finance. og:description You can view and join @downtofinance right away. tgme_page_title Down to Finance. tgme_page_extra 351 members, 48 online." }
  - { id: R-14, publisher: Blockscout, title: "Second DTF token 0x2ec89A…10d2", url: "https://robinhoodchain.blockscout.com/address/0x2ec89AFBa136119C5252FC47D14E2BD2144B10d2", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-22], excerpt: "hash 0x2ec89AFBa136119C5252FC47D14E2BD2144B10d2 name dtf is_contract true is_verified true creator_address_hash 0x841621542C736C0A0ea9EC58c9E07abdc52Ac142. token name Down to Finance symbol DTF decimals 9 holders_count 676. RPC eth_getCode 23173 B. Flag ca-collision against 0xeE5576…eb01." }
  - { id: R-15, publisher: "@down_to_finance", title: "Down to Finance profile", url: "https://x.com/down_to_finance", published_at: null, accessed_at: 2026-09-03T04:46:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [CLM-25], excerpt: "Display name Down to Finance, handle @down_to_finance. Bio: I’m always DTF (down to finance). Btw, did you know I went to Wharton? Followers 1332. Distinct from @downto_finance. Flag handle-collision." }
  - { id: R-16, publisher: Blockscout, title: "UniswapV3Pool 0x0F2CA1…4287", url: "https://robinhoodchain.blockscout.com/address/0x0F2CA1D996224a0c9dd140B865142aAD381A4287", published_at: null, accessed_at: 2026-09-03T04:50:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-15], excerpt: "hash 0x0F2CA1D996224a0c9dd140B865142aAD381A4287 name UniswapV3Pool is_contract true is_verified true creator_address_hash 0x1f7d7550B1b028f7571E69A784071F0205FD2EfA creation_transaction_hash 0xa616e0ebbe7b4067788a0c1ad61c908b8ccb82d06bdd53ca272e5db7cd292359. RPC eth_getCode 22142 B." }
  - { id: R-17, publisher: Blockscout, title: "V2LaunchLocker top holder", url: "https://robinhoodchain.blockscout.com/address/0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952", published_at: null, accessed_at: 2026-09-03T04:47:00Z, kind: explorer, authority: onchain, authenticity: confirmed, supports: [CLM-14], excerpt: "hash 0x267444D099b10fB5Ed7c3Cc7B7c767AdcA574952 name V2LaunchLocker is_contract true is_verified true. Token holders page item 1 value 81642783914186107334784296 DTF. RPC eth_getCode 1969 B." }
  - { id: R-18, publisher: "@smartflowradar", title: "$DTF CA on Robinhood", url: "https://x.com/smartflowradar/status/2095319027434545542", published_at: 2026-09-03T01:12:39Z, accessed_at: 2026-09-03T04:46:00Z, kind: social, authority: social, authenticity: unconfirmed, supports: [EVT-6], excerpt: "$DTF — passed every gate, smart money accumulating. Robinhood · MC $6.2M. @downto_finance CA: 0xee5576fa1bcaa380e591d01245f406f3f384eb01" }

gaps:
  - { priority: P0, question: "Is the landing-page $DTF-DETF Live badge a user-open basket on 4663, or only marketing copy?", checked: "downto.finance HTML shows $DTF-DETF Live; this pass did not re-read app.downto.finance/explore or the DETF package txs, 2026-09-03", next: "open explore and staking; compare UniswapV4SingleStandardExchangeDETDFPkg txs after 2026-08-26" }
  - { priority: P1, question: "Does V2LaunchLocker 0x267444…4952 still hold the Pons v2 LP, and can it be withdrawn?", checked: "Holders page item 1 value ~8.16e7 DTF; locker is_verified true; locker source not read this pass", next: "read V2LaunchLocker verified source for unlock / owner" }
  - { priority: P1, question: "Does packed downto stay the sole protocol slug, with dtf only as the graduation token?", checked: "Census downto is protocol redeemable-basket; this token shares name, domain, handle, and address 0xeE5576…eb01, 2026-09-03", next: "compiler keeps downto as the protocol row and treats dtf as launch/graduation-token or folds it" }
  - { priority: P2, question: "Is there an audit of PonsV2LauncherToken.sol or the DETF diamonds?", checked: "downto.finance HTML, Blockscout source header, DexScreener, Gecko, X, 2026-09-03", next: "re-read app footer Audits: pending from the downto packet and any new report URL" }
---

# DTF — research packet

## What it is

A one-billion-supply ERC-20 launched through Pons v2. PonsV2LaunchAndBuy.launchAndBuy minted Down to Finance (DTF) onto a bonding curve, then the lead book is Uniswap v3 DTF/WETH. Traders buy and sell DTF on Uniswap. Official site downto.finance names this address as the fee-accruing token.

Themes: graduation-token, bonding-curve, fee-token

## Why it matters

The token is the fee-accruing ERC-20 for Down to Finance, already in the census as protocol slug downto. This slug is the traded Pons v2 output at 0xeE5576…eb01, not a second protocol. The DTF/WETH Uniswap v3 book printed about $2.30M of 24h volume on Gecko at collection, with 8791 holders on Blockscout.

## What could go wrong

Name, domain, handle, and this address are shared with packed downto. A profile that merges them would mix a DETF basket machine with a Pons graduation token. A second ERC-20 on 4663 uses the same name and ticker at 0x2ec89A…10d2. 24h volume figures disagree across DexScreener pair, Gecko token, and Blockscout.

## Product and mechanics

PonsV2LaunchAndBuy.launchAndBuy from 0xeD1FA213…d6D5 at 2026-08-25T01:26:48Z minted Down to Finance / DTF supply 1e9*1e18. factory() path is launchFactory() 0x7eD598…EC7e. curve() 0x912467…4559 was created in the same transaction. Verified source mints the entire supply to the curve. [verified R-2 R-3 R-5]

Gecko launchpad_details mark graduation 100% complete at 2026-08-25T01:35:27Z into Uniswap v4 pool 0xbc58bf…b4ee (DTF/ETH). The lead volume book this pass is Uniswap v3 DTF/WETH 1% 0x0F2CA1…4287, created 2026-08-25T02:09:43Z. Secondary DTF/USDG books exist on DexScreener with far less liquidity. [verified R-7 R-8 R-9]

## Control and security

Token owner() reverts. deployer() is EOA 0xeD1FA213…d6D5 with no code; verified source says that field confers no privileges. launchFactory and curve are immutables. Top holder this pass is V2LaunchLocker 0x267444…4952. [verified R-3 R-5 R-17]

PonsV2LauncherToken is fully verified on Blockscout (contracts/src/v2/PonsV2LauncherToken.sol, compiler v0.8.35). No audit report URL was located this pass. [verified R-3] [unknown]

## Team and provenance

Official domain downto.finance and handle @downto_finance cross-link the CA. Constructor socials set twitter and telegram; the website field is empty. t.me/downtofinance titles Down to Finance with 351 members. @down_to_finance is a separate handle with the same display name; flag handle-collision. [verified R-5 R-7 R-10] [claim R-15]

Census downto is the protocol row for those surfaces. This packet keeps entity_kind token. [verified R-1 R-10]

## Economics and activity

Uniswap v3 DTF/WETH 24h volume is 2302688.94 USD and reserve_in_usd is 287887.93 at 2026-09-03T04:49:00Z from the Gecko pool endpoint. DexScreener same pair: volume.h24 2321906.4, liquidity.usd 288962.82, marketCap 7291287. [claim R-7 R-9]

Gecko token volume_usd.h24 is 2803557.28 across all pools, not the WETH book. Blockscout token.volume_24h is 3586063.70. holders_count 8791. Pair created 2026-08-25T02:09:43Z. [claim R-1 R-8]

## Material risks

- Shared name, domain, handle, and token address with census downto (protocol). [verified R-1 R-10]
- ca-collision: 0x2ec89A…10d2 is a second Down to Finance / DTF on 4663 (decimals 9). [verified R-14]
- 24h volume disagrees across pair, token, and explorer endpoints. [claim R-1 R-7 R-8]
- No audit report URL this pass. [unknown]
- Handle-collision: @down_to_finance. [claim R-15]

## Verification passes

- Receipts: Blockscout token/factory/curve/tx/locker/collision token, RPC name/symbol/launchFactory/curve/deployer/socials, DexScreener, Gecko token (GET 200) and DTF/WETH pool, downto.finance, Telegram preview, and X posts were opened on 2026-09-03 and excerpts copied from the responses. [verified R-1 R-5 R-7 R-8 R-10]
- Numbers: 2302688.94 is the Gecko DTF/WETH pool 24h volume, not the 2803557.28 token all-pools figure or Blockscout 3586063.70. Reserve 287887.93 is that pool. DexScreener 2321906.4 / 288962.82 is the same pair, different aggregator. [claim R-1 R-7 R-8 R-9]
- Adversarial: the strongest contrary reading is that slug dtf is the same subject as packed downto and should not be seeded. Shared surfaces are real; entity_kind and primary leaf differ (token / launch/graduation-token vs protocol / redeemable-basket). [inference R-1 R-10]

## Operations log

- Base: `git -C /Users/harsharnsingh/proofline-pr59 rev-parse origin/main` recorded as 334ca0619aa62e922da83f46de021f06d12348cf. Census downto already holds name Down to Finance, symbol DTF, domain downto.finance, handle @downto_finance, and token 0xeE5576…eb01. GET packet path on branch grok-heavy/20260903/WORK-20260903-grok-heavy-icarus-research returned 404.
- Explorer: Blockscout api/v2 token, address, smart-contract, launchAndBuy 0xbebe5e0a…b687, factory, curve, UniswapV3Pool, V2LaunchLocker, collision token 0x2ec89A…10d2. Chrome UA. RPC eth_getCode/eth_call at blocks 53147755–53148774.
- Aggregators: DexScreener latest/dex/tokens (18 pairs). Gecko token GET 200, then pool 0x0F2CA1…4287 GET 200. Gecko token/pools page hit HTTP 429 and was skipped.
- Social: X Latest $DTF / from:downto_finance; user search downto_finance; t.me/downtofinance preview.
- Site: downto.finance HTTP 200, official-dtf-token CA string.
- Failed: Gecko token/pools 429; constructor website empty (DexScreener/site used instead); app JS chunk 7914 had no CA this pass.
- Time: collection 2026-09-03T04:46Z–2026-09-03T04:55Z.
